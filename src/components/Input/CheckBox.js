import React from 'react';
import './Input.css'

const Checkbox = ({props}) => {
    return (
        <div className="checkbox">
            <input type="checkbox" name="checkbox" className="checkbox-input" />
            <label htmlFor="checkbox" className="checkbox-label" >{props.text}</label>
        </div>
    );
}

export default Checkbox;
