import React from 'react';

const Input = ({props}) => {
    return (
        <>
            <input className="w-100" type="text" placeholder={props.text} style={{padding: "3px 0", margin:"1rem 0"}}/>
        </>
    );
}

export default Input;
