import React from 'react';
import './PageNavigation.css';

export default (props) => {
    const increment = () => {
        if (props.curr < props.max) {
            return props.onChange(props.curr + 1);
        }
    }

    const decrement = () => {
        if (props.curr > 0) {
            return props.onChange(props.curr - 1);
        }
    }

    const change = (n) => () => props.onChange(n)

    return (
        <nav>
          <ul className="pagination">
            <li className={`page-item ${props.curr !== 0 ? "" : "disabled"}`}><button className="page-link" onClick={decrement}>Previous</button></li>
            {Array(props.max + 1).fill().map((_, i) => (
              <li key={i} className={`page-item ${props.curr === i ? "active" : ""}`}><button className="page-link" onClick={change(i)}>{i + 1}</button></li>
            ))}
            <li className={`page-item ${ props.curr < props.max ? "" : "disabled"}`}><button className="page-link" onClick={increment}>Next</button></li>
          </ul>
        </nav>
    );
}