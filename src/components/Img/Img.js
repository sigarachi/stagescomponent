import React from 'react';

const Img = ({props}) => {
    return (
        <>
            <img style={{width: '50%', height: '50%'}} src={props.data.link} alt={props.text} /> <br />
        </>
    );
}

export default Img;
