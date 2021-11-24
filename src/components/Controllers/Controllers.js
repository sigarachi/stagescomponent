import React from 'react';

const Controllers = ({props}) => {
    return (
        <>
            
            <a className="ctrl" href={props.href}>{props.text}</a>
           
        </>
    );
}

export default Controllers;
