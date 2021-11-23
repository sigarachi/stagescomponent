import React from 'react';

const Controllers = ({controllers}) => {
    return (
        <>
            {controllers.map((controller, index) => {
                return <a key={index} className="ctrl" href={controller.link}>{controller.title}</a>
            })}
        </>
    );
}

export default Controllers;
