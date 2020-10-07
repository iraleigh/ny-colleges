import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Schools from './Schools';

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

test('renders correct thead elements', () => {
    const { getByText } = render(<Schools schools={schools} />);
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
    const { getByText } = render(<Schools schools={schools} />);


    const nameBodyIvy = getByText("Ivy");
    const stateBodyIvy = getByText("NY");
    const numStudentsBodyIvy = getByText("42");
    const admissionRateBodyIvy = getByText("31.40%");

    const nameBodyPublic = getByText("Public");
    const stateBodyPublic = getByText("NY");
    const numStudentsBodyPublic = getByText("2701");
    const admissionRateBodyPublic = getByText("33.30%");

    expect(nameBodyIvy).toBeInTheDocument();
    expect(stateBodyIvy).toBeInTheDocument();
    expect(numStudentsBodyIvy).toBeInTheDocument();
    expect(admissionRateBodyIvy).toBeInTheDocument();

    expect(nameBodyPublic).toBeInTheDocument();
    expect(stateBodyPublic).toBeInTheDocument();
    expect(numStudentsBodyPublic).toBeInTheDocument();
    expect(admissionRateBodyPublic).toBeInTheDocument();
})

test('handles click events', () => {
    let nameClick = false;
    let stateClick = false;
    let numStudentsClick = false;
    let admissionRateClick = false;

    const onNameClick = () => nameClick = true;
    const onStateClick = () => stateClick = true;
    const onNumStudentsClick = () => numStudentsClick = true;
    const onAdmissionRateClick = () => admissionRateClick = true;

    const { getByText } = render(
        <Schools
            schools={schools}
            onNameClick={onNameClick}
            onStateClick={onStateClick}
            onNumStudentsClick={onNumStudentsClick}
            onAdminssionRateClick={onAdmissionRateClick}
        />
    );

    const nameHeader = getByText("Name");
    const stateHeader = getByText("State");
    const numStudentsHeader = getByText("Number of Students");
    const admissionRateHeader = getByText("Admission Rate");

    userEvent.click(nameHeader);
    userEvent.click(stateHeader);
    userEvent.click(numStudentsHeader);
    userEvent.click(admissionRateHeader);
    
    expect(nameClick).toBeTruthy();
    expect(stateClick).toBeTruthy();
    expect(numStudentsClick).toBeTruthy();
    expect(admissionRateClick).toBeTruthy();
})