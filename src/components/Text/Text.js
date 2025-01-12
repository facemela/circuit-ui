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

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import HtmlElement from '../HtmlElement';
import { childrenPropType } from '../../util/shared-prop-types';
import { sizes } from '../../styles/constants';

const { KILO, MEGA, GIGA } = sizes;

const mobileSizeMap = {
  [KILO]: KILO,
  [MEGA]: MEGA,
  [GIGA]: MEGA
};

const baseStyles = ({ theme }) => css`
  label: text;
  font-weight: ${theme.fontWeight.regular};
  margin-bottom: ${theme.spacings.mega};
`;

const sizeStyles = ({ theme, size }) => {
  const label = `text--${size}`;

  return css`
    label: ${label};
    font-size: ${theme.typography.text[mobileSizeMap[size]].fontSize};
    line-height: ${theme.typography.text[mobileSizeMap[size]].lineHeight};

    ${theme.mq.kilo} {
      font-size: ${theme.typography.text[size].fontSize};
      line-height: ${theme.typography.text[size].lineHeight};
    }
  `;
};

const boldStyles = ({ theme, bold }) =>
  bold &&
  css`
    label: text--bold;
    font-weight: ${theme.fontWeight.bold};
  `;

const italicStyles = ({ italic }) =>
  italic &&
  css`
    label: text--italic;
    font-style: italic;
  `;

const strikeThroughStyles = ({ strike }) =>
  strike &&
  css`
    label: text--strike-through;
    text-decoration: line-through;
  `;

const marginStyles = ({ noMargin }) =>
  noMargin &&
  css`
    label: text--no-margin;
    margin-bottom: 0;
  `;

// TODO: Rewrite this whole thing using the as prop.
export const StyledText = styled(HtmlElement)`
  ${baseStyles};
  ${sizeStyles};
  ${marginStyles};
  ${boldStyles};
  ${italicStyles};
  ${strikeThroughStyles};
`;

/**
 * The Text component is used for long-form text. Typically with
 * <p>, <div>, <article>, or <section> elements. Capable of rendering
 * using different HTML tags.
 */
const Text = ({ blacklist, ...restProps }) => (
  <StyledText
    {...restProps}
    blacklist={{
      ...blacklist,
      size: true,
      bold: true,
      italic: true,
      noMargin: true
    }}
  />
);

Text.KILO = KILO;
Text.MEGA = MEGA;
Text.GIGA = GIGA;

Text.propTypes = {
  /**
   * Child nodes to be rendered.
   */
  children: childrenPropType,
  /**
   * A Circuit UI body text size.
   */
  size: PropTypes.oneOf([Text.KILO, Text.MEGA, Text.GIGA]),
  /**
   * Optional additional className string to overwrite styles.
   */
  className: PropTypes.string,
  /**
   * Removes the default bottom margin from the text.
   */
  noMargin: PropTypes.bool,
  /**
   * Bolds the text.
   */
  bold: PropTypes.bool,
  /**
   * Bolds the text.
   */
  italic: PropTypes.bool,
  /**
   * Strikes through the text.
   */
  strike: PropTypes.bool,
  /**
   * The HTML element to render.
   */
  element: PropTypes.string,
  /**
   * A hash of props that should not be forwarded as attributes to the HTML element.
   * Prevents React from complaining about invalid attribute values.
   */
  blacklist: PropTypes.objectOf(PropTypes.bool)
};

Text.defaultProps = {
  element: 'p',
  blacklist: {},
  size: Text.MEGA,
  className: '',
  noMargin: false,
  bold: false,
  italic: false,
  children: null
};

/**
 * @component
 */
export default Text;
