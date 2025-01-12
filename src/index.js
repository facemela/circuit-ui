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

import {
  // Utils for CardNumberInput
  isValidCardNumber,
  isAcceptedCardScheme,
  normalizeCardNumber,
  detectCardScheme,
  // Utils for ExpiryDateInput
  isFutureDate,
  isCompleteMonth,
  isCompleteYear,
  normalizeExpiryDate,
  // Utils for SecurityCodeInput
  isValidSecurityCode,
  // Misc
  schemes as ALL_CARD_SCHEMES
} from './components/CreditCardDetails';

import { normalizeAmount, isValidAmount } from './components/CurrencyInput';

import { circuit } from './themes';

export {
  id as uniqueId,
  numbers as numbersUtils,
  currency as currencyUtils,
  sharedPropTypes
} from './util';

const cardNumberUtils = {
  isValidCardNumber,
  isAcceptedCardScheme,
  normalizeCardNumber,
  detectCardScheme
};

const expiryDateUtils = {
  isFutureDate,
  isCompleteMonth,
  isCompleteYear,
  normalizeExpiryDate
};

const securityCodeUtils = {
  isValidSecurityCode
};

const currencyAmountUtils = {
  normalizeAmount,
  isValidAmount
};

// Typography
export { default as Heading } from './components/Heading';
export { default as List } from './components/List';
export { default as ListView } from './components/ListView';
export { default as Markdown } from './components/Markdown';
export { default as SubHeading } from './components/SubHeading';
export { default as Text } from './components/Text';
export { default as Blockquote } from './components/Blockquote';

// Forms
export {
  RangePicker,
  RangePickerController,
  SingleDayPicker,
  CalendarConstants
} from './components/Calendar';
export { default as CalendarTag } from './components/CalendarTag';
export { default as CalendarTagTwoStep } from './components/CalendarTagTwoStep';
export { default as Checkbox } from './components/Checkbox';
export { default as Label } from './components/Label';
export { default as Input } from './components/Input';
export { default as MaskedInput } from './components/MaskedInput';
export { default as RestrictedInput } from './components/RestrictedInput';
export { default as RadioButton } from './components/RadioButton';
export { default as RadioButtonGroup } from './components/RadioButtonGroup';
export { default as SearchInput } from './components/SearchInput';
export { default as Select } from './components/Select';
export { default as TextArea } from './components/TextArea';
export {
  default as CreditCardDetails,
  CardNumberInput,
  cardSchemeIcons,
  NameOnCardInput,
  SecurityCodeInput,
  ExpiryDateInput
} from './components/CreditCardDetails';
export {
  cardNumberUtils,
  expiryDateUtils,
  securityCodeUtils,
  ALL_CARD_SCHEMES
};
export {
  default as CurrencyInput,
  SimpleCurrencyInput
} from './components/CurrencyInput';
export { currencyAmountUtils };

// Actions
export { default as Button } from './components/Button';
export { default as LoadingButton } from './components/LoadingButton';
export { default as ButtonGroup } from './components/ButtonGroup';
export { default as CloseButton } from './components/CloseButton';
export { default as SvgButton } from './components/SvgButton';
export { default as Toggle } from './components/Toggle';
export { default as Selector } from './components/Selector';

// Notifications
export {
  default as Message,
  MessageIcon,
  MessageButton
} from './components/Message';
export { default as NotificationBanner } from './components/NotificationBanner';
export { default as NotificationList } from './components/NotificationList';
export { default as InlineNotification } from './components/InlineNotification';

// Layout
export { default as Grid } from './components/Grid';
export { default as Row } from './components/Row';
export { default as Col } from './components/Col';
export { default as Spacing } from './components/Spacing';

// Misc
export { Tabs, TabList, TabPanel, Tab } from './components/Tabs';
export { default as Pagination } from './components/Pagination';
export { default as Spinner } from './components/Spinner';
export { default as Badge } from './components/Badge';
export { default as Card, CardHeader, CardFooter } from './components/Card';
export { default as Hamburger } from './components/Hamburger';
export { default as Hr } from './components/Hr';
export { default as Image } from './components/Image';
export { default as ProgressBar } from './components/ProgressBar';
export { default as Tag } from './components/Tag';
export { default as Popover } from './components/Popover';
export { default as Tooltip } from './components/Tooltip';
export { default as GlobalStyles } from './components/GlobalStyles';
export {
  default as Modal,
  DEFAULT_APP_ELEMENT,
  ModalConsumer,
  ModalProvider,
  ModalWrapper,
  ModalHeader,
  ModalFooter
} from './components/Modal';
export { default as Picture } from './components/Picture';
export { default as AutoCompleteInput } from './components/AutoCompleteInput';
export { default as AutoCompleteTags } from './components/AutoCompleteTags';

export { TableRow, TableCell, TableHeader } from './components/Table';
export { default as Table } from './components/Table';
export { default as CardSchemes } from './components/CardSchemes';
export {
  default as PaymentMethodIcon
} from './components/CardSchemes/components/PaymentMethodIcon';

export { default as SideNav } from './components/SideNav';
export { Menu } from './components/SideNav/components';
export { Drawer } from './components/SideNav/components';
export { default as Sidebar } from './components/Sidebar';
export {
  SidebarContextProvider,
  SidebarContextConsumer
} from './components/Sidebar';
export { default as Header } from './components/Header';

// Helpers
export { default as State } from './components/State';
export { default as InlineElements } from './components/InlineElements';

// Theme
const standard = { ...circuit }; // otherwise this get exported as a `Module`
const theme = {
  standard,
  circuit: standard
};

export { theme };

export { styleHelpers, constants as styleConstants } from './styles';
