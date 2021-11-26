import React from 'react';

const Textarea = ({props}) => {
    return (
        <>
            <textarea style={{marginTop: "1rem"}} rows={props.data.rows} cols={props.data.cols} name={props.text} />
        </>
    );
}

export default Textarea;
