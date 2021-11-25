import React from 'react';

const Controllers = ({props}) => {
    return (
        <>
            
            <a className="ctrl" href={props.data.link}>{props.text}</a>
           
        </>
    );
}

export default Controllers;
