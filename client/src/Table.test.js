import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

const schools = [
    {
        name: "Ivy",
        state: "NY",
        numStudents: "42",
        admissionRate: "0.314"
    },
    {
        name: "Public",
        state: "CA",
        numStudents: "2701",
        admissionRate: "0.333"
    }
]

test('renders correct thead elements', () => {
  const { getByText } = render(<Table schools={schools} />);
  const nameHeader = getByText("Name");
  const stateHeader = getByText("State");
  const numStudentsHeader = getByText("Number of Students");
  const admissionRateHeader = getByText("Admission Rate");
  expect(nameHeader).toBeInTheDocument();
  expect(stateHeader).toBeInTheDocument();
  expect(numStudentsHeader).toBeInTheDocument();
  expect(admissionRateHeader).toBeInTheDocument();
});

test('renders correct tbody elements', () => {
    const { getByText } = render(<Table schools={schools} />);

    
    const nameBodyIvy = getByText("Ivy");
    const stateBodyIvy = getByText("NY");
    const numStudentsBodyIvy = getByText("42");
    const admissionRateBodyIvy = getByText("0.314");

    const nameBodyPublic = getByText("Public");
    const stateBodyPublic = getByText("NY");
    const numStudentsBodyPublic = getByText("2701");
    const admissionRateBodyPublic = getByText("0.333");

    expect(nameBodyIvy).toBeInTheDocument();
    expect(stateBodyIvy).toBeInTheDocument();
    expect(numStudentsBodyIvy).toBeInTheDocument();
    expect(admissionRateBodyIvy).toBeInTheDocument();

    expect(nameBodyPublic).toBeInTheDocument();
    expect(stateBodyPublic).toBeInTheDocument();
    expect(numStudentsBodyPublic).toBeInTheDocument();
    expect(admissionRateBodyPublic).toBeInTheDocument();
  })