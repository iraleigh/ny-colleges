import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('AppTODO', () => {
  const { getByText } = render(<App />);
});
