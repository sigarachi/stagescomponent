import React from 'react';

const Controllers = ({controllers}) => {
    return (
        <>
            {controllers.map(controller => {
                return <a className="ctrl" href={controller.link}>{controller.title}</a>
            })}
        </>
    );
}

export default Controllers;
