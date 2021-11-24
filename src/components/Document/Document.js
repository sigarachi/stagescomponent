import React from 'react';
import './Document.css';

const Document = ({props}) => {
    return (
        <div className="doc">
            <div className="doc-ico"><a href={props.href}><img className="pointer" src="./resources/icons/download.svg" alt="download"/></a></div>
            <div className="doc-title">{props.text}</div>
        </div>
    );
}

export default Document;
