import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import App from './App';

const schools = [
  {
    name: "Ivy",
    state: "NY",
    numStudents: "2701",
    admissionRate: "0.314"
  },
  {
    name: "Public",
    state: "CA",
    numStudents: "42",
    admissionRate: "0.333"
  }
]

const server = setupServer(
  rest.get('/colleges', (req, res, ctx) => {
    return res(ctx.json(schools))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// test('App has correct header', () => {
//   const { getByText } = render(<App />);
//   expect(getByText("NY Colleges")).toBeInTheDocument();
// });

test('fetches colleges from API', async () => {
  render(<App />);

  const nameBodyIvy = await screen.findByText("Ivy");
  const stateBodyIvy = await screen.findByText("NY");
  const numStudentsBodyIvy = await screen.findByText("42");
  const admissionRateBodyIvy = await screen.findByText("31.40%");

  const nameBodyPublic = await screen.findByText("Public");
  const stateBodyPublic = await screen.findByText("NY");
  const numStudentsBodyPublic = await screen.findByText("2701");
  const admissionRateBodyPublic = await screen.findByText("33.30%");



  expect(nameBodyIvy).toBeInTheDocument();
  expect(stateBodyIvy).toBeInTheDocument();
  expect(numStudentsBodyIvy).toBeInTheDocument();
  expect(admissionRateBodyIvy).toBeInTheDocument();

  expect(nameBodyPublic).toBeInTheDocument();
  expect(stateBodyPublic).toBeInTheDocument();
  expect(numStudentsBodyPublic).toBeInTheDocument();
  expect(admissionRateBodyPublic).toBeInTheDocument();
})
