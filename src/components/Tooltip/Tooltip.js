/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { includes } from 'lodash';

import { textKilo, shadowSingle } from '../../styles/style-helpers';
import { CENTER, TOP, RIGHT, BOTTOM, LEFT } from '../../util/constants';
import { positionPropType } from '../../util/shared-prop-types';

const baseStyles = ({ theme }) => css`
  label: tooltip;
  display: inline-block;
  width: 100%;
  max-width: 280px;
  min-width: 120px;
  background-color: ${theme.colors.n900};
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.mega};
  padding: ${theme.spacings.byte} ${theme.spacings.kilo};
  position: absolute;
  z-index: ${theme.zIndex.tooltip};
  transition: opacity 0.3s;
  ${textKilo({ theme })};
  ${shadowSingle({ theme })};

  &::after {
    display: block;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    border: ${theme.spacings.byte} solid transparent;
  }
`;

const positionMap = {
  [TOP]: 'bottom',
  [RIGHT]: 'left',
  [BOTTOM]: 'top',
  [LEFT]: 'right'
};

const getPositionStyles = ({ theme, position }) => {
  const absolutePosition = positionMap[position];
  return `
    ${absolutePosition}: 100%; ${'' /* Fallback  */}
    ${absolutePosition}: calc(100% + ${theme.spacings.kilo});

    &::after {
      ${position}: 100%;
      border-${position}-color: ${theme.colors.n900};
    }
  `;
};

const getAlignmentStyles = ({ theme, position, align }) => {
  const isHorizontal = includes([TOP, BOTTOM], position);

  if (isHorizontal && includes([TOP, BOTTOM, CENTER], align)) {
    return `
      left: 50%;
      transform: translateX(-50%);

      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    `;
  }

  if (!isHorizontal && includes([LEFT, RIGHT, CENTER], align)) {
    return `
      top: 50%;
      transform: translateY(-50%);

      &::after {
        top: 50%;
        transform: translateY(-50%);
      }
    `;
  }

  const absolutePosition = positionMap[align];

  return `
    ${absolutePosition}: 50%;
    ${absolutePosition}: calc(50% - (${theme.spacings.mega} + ${
    theme.spacings.bit
  }));

    &::after {
      ${absolutePosition}: ${theme.spacings.kilo};
    }
  `;
};

const positionAndAlignStyles = ({ theme, position, align }) => css`
  label: ${`tooltip--${position}-${align}`};
  ${getAlignmentStyles({ theme, position, align })};
  ${getPositionStyles({ theme, position })};
`;

/**
 * A Tooltip component
 */
const Tooltip = styled('div')`
  ${baseStyles};
  ${positionAndAlignStyles};
`;

Tooltip.CENTER = CENTER;
Tooltip.TOP = TOP;
Tooltip.RIGHT = RIGHT;
Tooltip.BOTTOM = BOTTOM;
Tooltip.LEFT = LEFT;

Tooltip.propTypes = {
  /**
   * The content of the tooltip.
   */
  children: PropTypes.node.isRequired,
  /**
   * The position of the tooltip in relation to its reference point.
   */
  position: positionPropType,
  /**
   * The alignment of the tooltip relative to its position.
   */
  align: PropTypes.oneOf([
    Tooltip.TOP,
    Tooltip.RIGHT,
    Tooltip.BOTTOM,
    Tooltip.LEFT,
    Tooltip.CENTER
  ])
};

Tooltip.defaultProps = {
  position: Tooltip.RIGHT,
  align: Tooltip.CENTER
};

export default Tooltip;
