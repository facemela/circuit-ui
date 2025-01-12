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

import Input from '../Input';
import { handleKeyDown, handleCarretPosition } from './RestrictedInputService';
import { directions } from '../../styles/constants';

// TODO: add state management to enable shortcurts. This
// will require tracking the previously pressed key and
// allowing the event to bubble when the previous key was
// a modifier key.

/**
 * A wrapper around Input that disables specific keys from
 * registering and ensures the carret stays on one side of the
 * input at all times.
 */
const RestrictedInput = ({
  filteredKeys,
  onFocus,
  onMouseUp,
  alignCarretLeft,
  ...props
}) => (
  <Input
    {...props}
    onKeyDown={handleKeyDown(filteredKeys)}
    onFocus={handleCarretPosition(onFocus, alignCarretLeft)}
    onMouseUp={handleCarretPosition(onMouseUp, alignCarretLeft)}
  />
);

RestrictedInput.LEFT = directions.LEFT;
RestrictedInput.RIGHT = directions.RIGHT;

RestrictedInput.propTypes = {
  /**
   * An array of keys that shold register with the input. All
   * other keys will be ignored.
   */
  filteredKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * An array of keys that shold register with the input. All
   * other keys will be ignored.
   */
  alignCarretLeft: PropTypes.bool,
  /**
   * A focus event handler. We use our own to limit the keys a user
   * can press when editing.
   */
  onFocus: PropTypes.func,
  /**
   * mouseup event handler. We use our own to move the carret
   * to one side of the input whenever a user clicks it.
   */
  onMouseUp: PropTypes.func
};

RestrictedInput.defaultProps = {
  alignCarretLeft: false,
  onFocus: null,
  onMouseUp: null,
  filteredKeys: []
};

/**
 * @component
 */
export default RestrictedInput;
