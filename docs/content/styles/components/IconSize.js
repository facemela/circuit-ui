import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Text from '../../../../src/components/Text';
import { theme as themes } from '../../../../src';

const Box = styled('div')`
  ${({ theme, size }) => css`
    width: ${theme.iconSizes[size]};
    height: ${theme.iconSizes[size]};
    border-radius: ${theme.borderRadius.kilo};
    background-color: ${theme.colors.r300};
    margin-right: ${theme.spacings.mega};
  `};
`;

const Wrapper = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacings.mega};
  `};
`;

const IconSizeSize = styled('span')`
  ${({ theme }) => css`
    color: ${theme.colors.n500};
  `};
`;

const IconSizeName = styled(Text)`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.kilo};
    color: ${theme.colors.n500};
  `};
`;

const IconSize = ({ size }) => (
  <ThemeProvider theme={themes.circuit}>
    <Wrapper>
      <Box size={size} />
      <div>
        <Text element="span">{size}</Text>
        <IconSizeSize>
          <IconSizeName size={Text.KILO} element="span">
            {themes.circuit.iconSizes[size]}
          </IconSizeName>
        </IconSizeSize>
      </div>
    </Wrapper>
  </ThemeProvider>
);

IconSize.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired
};

export default IconSize;
