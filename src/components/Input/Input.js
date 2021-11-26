import React from 'react';
import './Input.css'

const Input = ({props}) => {
    return (
        <>
            <input className="w-100 styled-input" type="text" placeholder={props.text} />
        </>
    );
}

export default Input;
