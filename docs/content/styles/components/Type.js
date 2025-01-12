import React, { Fragment, createElement } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { theme as themes } from '../../../../src';
import Text from '../../../../src/components/Text';

const TypePx = styled(Text)`
  ${({ theme: t }) => css`
    color: ${t.colors.n500};
    margin-left: ${t.spacings.mega};
    text-transform: lowercase;
  `};
`;

const Type = ({ size, component, name, fontWeight, ...props }) => {
  const typeSetting = themes.circuit.typography[name][size];
  const { fontSize, lineHeight } = typeSetting;
  const weight = themes.circuit.fontWeight[fontWeight];

  return (
    <ThemeProvider theme={themes.circuit}>
      {createElement(component, {
        children: (
          <Fragment>
            A better way to get {size}.
            <TypePx element="span" size={Text.KILO}>
              {weight ? `${weight}` : `${fontSize}, ${lineHeight}`}
            </TypePx>
          </Fragment>
        ),
        size,
        ...props
      })}
    </ThemeProvider>
  );
};

Type.propTypes = {
  component: PropTypes.func.isRequired, // eslint-disable-line
  size: PropTypes.string.isRequired,
  fontWeight: PropTypes.string,
  name: PropTypes.string.isRequired
};

Type.defaultProps = {
  fontWeight: null
};

export default Type;
