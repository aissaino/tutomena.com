import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';

import { MDXProvider } from '@mdx-js/react';
import { NewsletterForm, Author } from './src/shortcodes';

const shortcodes = { NewsletterForm, Author };

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={shortcodes}>
    <ThemeProvider>{element}</ThemeProvider>
  </MDXProvider>
);
