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

import RadioButton from '.';

describe('RadioButton', () => {
  /**
   * Style tests.
   */
  it('should render with default styles', () => {
    const actual = create(<RadioButton />);
    expect(actual).toMatchSnapshot();
  });

  it('should render with checked styles', () => {
    const actual = create(<RadioButton checked />);
    expect(actual).toMatchSnapshot();
  });

  it('should render with disabled styles', () => {
    const actual = create(<RadioButton disabled />);
    expect(actual).toMatchSnapshot();
  });

  it('should render with invalid styles', () => {
    const actual = create(<RadioButton invalid />);
    expect(actual).toMatchSnapshot();
  });

  /**
   * Accessibility tests.
   */
  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <RadioButton name="radio">Radio button</RadioButton>
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });

  /**
   * Logic tests.
   */
  it('should be unchecked by default', () => {
    const wrapper = shallow(<RadioButton />);
    const actual = wrapper.find('input[type="radio"]').prop('checked');
    expect(actual).toBeFalsy();
  });

  it('should call onChange when toggled', () => {
    const onToggle = jest.fn();
    const wrapper = shallow(<RadioButton {...{ onToggle }} />);
    const label = wrapper.find('input[type="radio"]');
    label.simulate('click');
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});
