import React from 'react';
import './Schools.css'

export default (props) => {
  const highlight = field => field === props.highlight ? "bg-light" : "";

  return (
    <table className="table table-bordered">
      <thead className="">
        <tr>
          <th className={`headerCell ${highlight("name")}`} scope="col" onClick={props.onNameClick}>Name</th>
          <th className={`headerCell ${highlight("state")}`} scope="col" onClick={props.onStateClick}>State</th>
          <th className={`headerCell ${highlight("numStudents")}`} scope="col" onClick={props.onNumStudentsClick}>Number of Students</th>
          <th className={`headerCell ${highlight("admissionRate")}`} scope="col" onClick={props.onAdminssionRateClick}>Admission Rate</th>
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