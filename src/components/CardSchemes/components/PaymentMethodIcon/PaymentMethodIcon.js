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

/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keys } from 'lodash';

import { sizes } from '../../../../styles/constants';
// eslint-disable-next-line max-len
import schemeMap from '../../../CreditCardDetails/components/scheme-icons/card-scheme-icons';

const { BYTE, KILO, MEGA, GIGA } = sizes;

const PaymentMethodIconWrapBaseStyles = ({ theme, size }) => css`
  height: ${theme.iconSizes[size]};
  width: auto;
  max-width: ${theme.spacings.zetta};
`;

const PaymentMethodIconWrap = styled('div')(PaymentMethodIconWrapBaseStyles);

/**
 * A single card scheme icon
 */
const PaymentMethodIcon = ({ iconId, size }) => {
  const IconSvg = schemeMap[iconId];

  if (!IconSvg) {
    return null;
  }

  return (
    <PaymentMethodIconWrap size={size}>
      <IconSvg
        css={css`
          width: auto;
          max-width: 100%;
          height: 100%;
          display: inline-block;
          line-height: 0;
        `}
      />
    </PaymentMethodIconWrap>
  );
};

PaymentMethodIcon.BYTE = BYTE;
PaymentMethodIcon.KILO = KILO;
PaymentMethodIcon.MEGA = MEGA;
PaymentMethodIcon.GIGA = GIGA;

PaymentMethodIcon.propTypes = {
  /**
   * The id of the card scheme icon.
   */
  iconId: PropTypes.oneOf(keys(schemeMap)),
  /**
   * The optional sizes of the scheme icon
   */
  size: PropTypes.oneOf([
    PaymentMethodIcon.BYTE,
    PaymentMethodIcon.KILO,
    PaymentMethodIcon.MEGA,
    PaymentMethodIcon.GIGA
  ])
};

PaymentMethodIcon.defaultProps = {
  iconId: '',
  size: PaymentMethodIcon.GIGA
};

/**
 * @component
 */
export default PaymentMethodIcon;
