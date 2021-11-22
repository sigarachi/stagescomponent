import React from 'react';
import Document from '../Document/Document';

const Documentslist = ({documents}) => {
    return (
        <>
            <h3>Документы</h3>
            {documents.map((doc, index) => {
                return <Document key={index} document={doc} />
            })}
        </>
    );
}

export default Documentslist;
