import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import 'jest-enzyme';
import Enzyme, { render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'jest-emotion';
import { axe, toHaveNoViolations } from 'jest-axe';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'emotion-theming';

import { circuit } from './src/themes';

Enzyme.configure({ adapter: new Adapter() });

const renderWithTheme = renderFn => (component, ...rest) =>
  renderFn(<ThemeProvider theme={circuit}>{component}</ThemeProvider>, rest);

global.shallow = (...args) => {
  console.error(
    'We do not use Shallow anymore. Automatically switching to mount.'
  );
  return mount(...args, {
    wrappingComponent: ThemeProvider,
    wrappingComponentProps: {
      theme: circuit
    }
  });
};

global.mount = (...args) =>
  mount(...args, {
    wrappingComponent: ThemeProvider,
    wrappingComponentProps: {
      theme: circuit
    }
  });

global.render = renderWithTheme(render);
global.create = renderWithTheme(create);
global.renderToHtml = renderWithTheme(renderToStaticMarkup);
global.axe = axe;

// This is defined by webpack in storybook builds using the DefinePlugin plugin.
global.STORYBOOK = false;

// Add custom matchers
expect.extend(toHaveNoViolations);

// Add a snapshot serializer that removes random hashes
// from emotion class names.
expect.addSnapshotSerializer(
  createSerializer({
    classNameReplacer(className, index) {
      return `circuit-${index}`;
    }
  })
);
