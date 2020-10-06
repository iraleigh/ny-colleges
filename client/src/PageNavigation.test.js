import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import PageNavigation from './PageNavigation';

test('renders correct elements', () => {
  const { getByText } = render(<PageNavigation curr={0} max={5} />);
  const previous = getByText("Previous");
  const one = getByText("1");
  const two = getByText("2");
  const three = getByText("3");
  const four = getByText("4");
  const five = getByText("5");
  const next = getByText("Next");

  expect(previous).toBeInTheDocument();
  expect(one).toBeInTheDocument();
  expect(two).toBeInTheDocument();
  expect(three).toBeInTheDocument();
  expect(four).toBeInTheDocument();
  expect(five).toBeInTheDocument();
  expect(next).toBeInTheDocument();
});

test('handles previous, next, and direct event', () => {
  let curr = 0

  const onChange = next => curr = next;

  const { getByText, rerender } = render(<PageNavigation curr={curr} max={5} onChange={onChange} />);
  const previous = getByText("Previous");
  const one = getByText("1");
  const two = getByText("2");
  const three = getByText("3");
  const four = getByText("4");
  const five = getByText("5");
  const next = getByText("Next");

  userEvent.click(next);
  expect(curr).toBe(1);

  rerender(<PageNavigation curr={curr} max={5} onChange={onChange} />)

  userEvent.click(one);
  expect(curr).toBe(0);

  rerender(<PageNavigation curr={curr} max={5} onChange={onChange} />)

  userEvent.click(two);
  expect(curr).toBe(1);

  rerender(<PageNavigation curr={curr} max={5} onChange={onChange} />)

  userEvent.click(three);
  expect(curr).toBe(2);

  rerender(<PageNavigation curr={curr} max={5} onChange={onChange} />)

  userEvent.click(four);
  expect(curr).toBe(3);

  rerender(<PageNavigation curr={curr} max={5} onChange={onChange} />)

  userEvent.click(five);
  expect(curr).toBe(4);

  rerender(<PageNavigation curr={curr} max={5} onChange={onChange} />)

  userEvent.click(previous);
  expect(curr).toBe(3)
});
