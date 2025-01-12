import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Text from '../../../../src/components/Text';
import { theme as themes } from '../../../../src';

const Box = styled('div')`
  ${({ theme, size }) => css`
    width: ${theme.spacings.tera};
    height: ${theme.spacings.tera};
    border-radius: ${theme.borderRadius.mega};
    border: ${theme.borderWidth[size]} solid ${theme.colors.r500};
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

const BorderWidthSize = styled('span')`
  ${({ theme }) => css`
    color: ${theme.colors.n500};
  `};
`;

const BorderWidthName = styled(Text)`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.kilo};
    color: ${theme.colors.n500};
  `};
`;

const BorderWidth = ({ size }) => (
  <ThemeProvider theme={themes.circuit}>
    <Wrapper>
      <Box size={size} />
      <div>
        <Text element="span">{size}</Text>
        <BorderWidthSize>
          <BorderWidthName size={Text.KILO} element="span">
            {themes.circuit.borderWidth[size]}
          </BorderWidthName>
        </BorderWidthSize>
      </div>
    </Wrapper>
  </ThemeProvider>
);

BorderWidth.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired
};

export default BorderWidth;
