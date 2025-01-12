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

import { values } from 'lodash/fp';

import { SCHEMES } from '../../../constants/card-schemes';

const ELO_REGEXES = {
  elo_starting_with_4:
    '((40117[8-9])|(43(1274)|(8935))|(451416)|(457393)(45763[1-2]))',
  elo_starting_with_5: '(504175)',
  elo_range_506699_506778: '((506699)|(5067[0-6][0-9])|(50677[0-8]))',
  elo_range_509000_509999: '(509\\d{3})',
  elo_range_627780: '(627780)',
  elo_range_636297_636368: '(636(297)|(368))',
  elo_range_650031_650033: '(65003[1-3])',
  elo_range_650035_650051: '((63003[5-9])|(65004[0-9])|(65005[0-1]))',
  elo_range_650405_650439: '((65040[5-9])|(6504[1-3][0-9]))',
  elo_range_650485_650538:
    '((65048[5-9])|(65049[0-9])|(6505[0-2][0-9])|(65053[0-8]))',
  elo_range_650541_650598: '((65054[1-9])|(6505[5-8][0-9])|(65059[0-8]))',
  elo_range_650700_650718: '((65070[0-9])|(65071[0-8]))',
  elo_range_650720_650727: '(65072[0-7])',
  elo_range_650901_650920: '((65090[1-9])|(65091[0-9])|(650920))',
  elo_range_651652_651679: '((65165[2-9])|(6516[6-7][0-9]))',
  elo_range_655000_655019: '(6550[0-1][0-9])',
  elo_range_655021_655058: '((65502[0-9])|(6550[3-4][0-9])|(65505[0-8]))'
};

const ELO_REGEX = values(ELO_REGEXES).join('|');

const VALIDATION_REGEXES = {
  /* eslint-disable max-len */
  [SCHEMES.VISA]: /^4\d{12}(?:\d{3})?$/,
  [SCHEMES.MASTERCARD]: /^(?:2(?:2(?:2[1-9]\d{2}|[3-9]\d{3})|[3-6]\d{4}|7(?:[0-1]\d{3}|20\d{2}))|5[1-5]\d{4})\d{10}$/,
  [SCHEMES.AMEX]: /^3[47]\d{13}$/,
  [SCHEMES.DINERS]: /^(?:3(?:0(?:[0-5]\d|95)|[68-9]\d{2}))\d{10}$/,
  [SCHEMES.DISCOVER]: /^6(?:011\d{2}|22(?:1(?:2[6-9]|[3-9]\d)|[2-8]\d{2}|9(?:[0-1]\d|2[0-5]))|4[4-9]\d{3}|5\d{4})\d{10}$/,
  [SCHEMES.MAESTRO]: /^(?:5[06-9]|6(?:3(?:04|90)|7))\d+$/,
  [SCHEMES.JCB]: /^35\d{14}$/,
  [SCHEMES.ELO]: new RegExp(`^${ELO_REGEX}\\d{10}$`),
  [SCHEMES.HYPERCARD]: /^6((06282)|(37((599)|(095)|(568))))\d{10}$/
  /* eslint-enable max-len */
};

export default VALIDATION_REGEXES;
