import React from 'react';
import './Table.css';

export default (props) => {
    return (
        <table className="table table-bordered">
            <thead>
            <tr>
              <th scope="col" onClick={props.onNameClick}>Name</th>
              <th scope="col" onClick={props.onStateClick}>State</th>
              <th scope="col" onClick={props.onNumStudentsClick}>Number of Students</th>
              <th scope="col" onClick={props.onAdminssionRateClick}>Admission Rate</th>
            </tr>
          </thead>
          <tbody>
            {(props.schools || []).map((school, index) => (
              <tr className="school" key={index}>
                <td>{school.name}</td>
                <td>{school.state}</td>
                <td>{school.numStudents}</td>
                <td>{school.admissionRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
    );
}