import React, {useState, useEffect, useCallback} from 'react';
import Substage from '../Substage/Substage';
import './Stage.css';

const Stage = ({stage}) => {
    const [current, setCurrent] = useState(1)

    const updateCurrent = () => {
        if(current + 1 <= stage.substages.length) {
            const newValue = current + 1;
            setCurrent(newValue)
        }
        
    }

    return (
        <div className="stg">
            <div className="stg-title">
                {stage.title}
            </div>
            <div className="stg-body">
                {stage.substages.map((substage, index) => {
                    const isLast = (index + 1) === stage.substages.length ? true : false;
                    return <Substage key={index} substage={substage} setCurrent={updateCurrent} position={index+1} current={current} isLast={isLast} />
                })}
            </div>
        </div>
    );
}

export default Stage;
