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
import NavLabel from '../NavLabel';

const baseStyles = ({ theme }) => css`
  label: nav-item;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  margin: ${theme.spacings.mega};
  padding: ${theme.spacings.bit};
  cursor: pointer;
  color: ${theme.colors.n500};
  fill: ${theme.colors.n500};
`;

const secondaryStyles = ({ theme, secondary }) =>
  secondary &&
  css`
    label: nav-item--secondary;
    margin: 0px ${theme.spacings.giga};
    padding: ${theme.spacings.bit} 0px;
    transition: top ${theme.transitions.default};
  `;

const hoverStyles = ({ theme, selected }) =>
  !selected &&
  css`
    label: nav-item--hover;
    &:hover {
      color: ${theme.colors.n300};
      fill: ${theme.colors.n300};
    }
  `;

const selectedStyles = ({ theme, selected }) =>
  selected &&
  css`
    label: nav-item--active;
    color: ${theme.colors.n100};
    font-weight: ${theme.fontWeight.bold};
  `;

const ListItem = styled.li(
  baseStyles,
  hoverStyles,
  selectedStyles,
  secondaryStyles
);

const NavItem = ({
  label,
  secondary,
  visible,
  defaultIcon,
  selectedIcon,
  selected,
  onClick
}) => (
  <ListItem
    selected={selected}
    secondary={secondary}
    visible={visible}
    onClick={onClick}
  >
    {defaultIcon && selectedIcon && selected ? selectedIcon : defaultIcon}
    <NavLabel secondary={secondary} visible={visible}>
      {label}
    </NavLabel>
  </ListItem>
);

NavItem.propTypes = {
  /**
   * The label of a NavItem
   */
  label: PropTypes.string,
  /**
   * If the NavItem is a secondary navigation item
   */
  secondary: PropTypes.bool,
  /**
   * If the NavItem is visible (it can be hidden when secondary)
   */
  visible: PropTypes.bool,
  /**
   * The icon to be shown when the NavItem is not selected
   */
  defaultIcon: PropTypes.node,
  /**
   * The icon to be shown when the NavItem is selected
   */
  selectedIcon: PropTypes.node,
  /**
   * If the item is selected
   */
  selected: PropTypes.bool,
  /**
   * The onClick method to handle the click event on NavItems
   */
  onClick: PropTypes.func
};

NavItem.defaultProps = {
  label: '',
  secondary: false,
  visible: true,
  defaultIcon: '',
  selectedIcon: '',
  selected: false,
  onClick: null
};

export default NavItem;
