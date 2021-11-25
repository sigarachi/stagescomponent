import React from 'react';

const Checkbox = ({props}) => {
    return (
        <>
            <input type="checkbox" name="checkbox" />
            <label htmlFor="checkbox" style={{marginLeft: "2rem"}}>{props.text}</label>
        </>
    );
}

export default Checkbox;
