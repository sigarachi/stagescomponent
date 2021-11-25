import React from 'react';

const Inputradio = ({props}) => {
    return (
        <>
            <input type="radio" name="radio" placeholder={props.text} value={props.text} />
            <label htmlFor="radio" style={{marginLeft: "2rem"}}>{props.text}</label>
        </>
    );
}

export default Inputradio;
