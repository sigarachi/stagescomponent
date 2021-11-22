import React from 'react';
import './Document.css';

const Document = ({document}) => {
    return (
        <div className="doc">
            <div className="doc-ico"><a href={document.link}><img className="pointer" src="./resources/icons/download.svg" alt="download"/></a></div>
            <div className="doc-title">{document.title}</div>
        </div>
    );
}

export default Document;
