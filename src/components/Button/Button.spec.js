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
import Button from './Button';

describe('Button', () => {
  it('should render a plain button', () => {
    const wrapper = mount(<Button plain>Plain Button</Button>);
    const actual = wrapper.find('PlainButton');
    expect(actual).toExist();
  });

  it('should render a regular button', () => {
    const wrapper = mount(<Button>Regular Button</Button>);
    const actual = wrapper.find('RegularButton');
    expect(actual).toExist();
  });
});
