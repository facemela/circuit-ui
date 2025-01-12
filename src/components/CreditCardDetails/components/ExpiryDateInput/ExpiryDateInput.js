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

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'; // eslint-disable-line max-len

import MaskedInput from '../../../MaskedInput';
import Label from '../../../Label';

const datePipe = createAutoCorrectedDatePipe('mm/yy');

/**
 * A specialized input for the credit card's expiry
 * date.
 */
const ExpiryDateInput = ({ label, id, ...props }) => (
  <Fragment>
    <Label htmlFor={id}>{label}</Label>
    <MaskedInput
      autoComplete="cc-exp"
      type="tel"
      mask={[/\d/, /\d/, '/', /\d/, /\d/]}
      guide={false}
      keepCharPositions
      pipe={datePipe}
      {...{ ...props, id }}
    />
  </Fragment>
);

ExpiryDateInput.propTypes = {
  /**
   * The label to be used (for i18n purposes).
   */
  label: PropTypes.string,
  /**
   * Placeholder for the input.
   */
  placeholder: PropTypes.string,
  /**
   * Id to be used for the input.
   */
  id: PropTypes.string
};

ExpiryDateInput.defaultProps = {
  label: 'Expiry date',
  placeholder: 'MM/YY',
  id: 'cui-cc-expiry'
};

/**
 * @component
 */
export default ExpiryDateInput;
