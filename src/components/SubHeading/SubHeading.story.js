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
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select, boolean, text } from '@storybook/addon-knobs/react';

import { GROUPS } from '../../../.storybook/hierarchySeparators';

import withTests from '../../util/withTests';
import SubHeading from '.';

const elements = ['h2', 'h3', 'h4', 'h5', 'h6'];
const sizes = [SubHeading.MEGA, SubHeading.KILO];

storiesOf(`${GROUPS.TYPOGRAPHY}|SubHeading`, module)
  .addDecorator(withTests('SubHeading'))
  .add(
    'SubHeading',
    withInfo()(() => (
      <SubHeading
        element={select('Element', elements, elements[0])}
        size={select('Size', sizes, sizes[0])}
        noMargin={boolean('No margin', false)}
      >
        {text('Text', 'This is a subheading')}
      </SubHeading>
    ))
  );
