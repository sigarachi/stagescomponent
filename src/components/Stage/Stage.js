import React, {useState} from 'react';
import Substage from '../Substage/Substage';
import './Stage.css';

const Stage = ({stage, updateStage, curStage, setCurrentStage, myPosition}) => {
    const [current, setCurrent] = useState(1)

    const updateCurrent = () => {
        if(current + 1 <= stage.substages.length) {
            const newValue = current + 1;
            setCurrent(newValue)
        }
        
    }

    const setSubStage = (value) => {
        const newValue = value;
        setCurrent(newValue)
    }

    const setStage = () => {
        setCurrentStage(myPosition)
    }

    return (
        <div className="stg">
            <div className="stg-title" onClick={setStage} style={{cursor: 'pointer'}}>
                {stage.title}
            </div>
            <div className="stg-body">
                {stage.substages.map((substage, index) => {
                    const isLast = (index + 1) === stage.substages.length ? true : false;
                    const cur = curStage ? current : 4;
                    return <Substage key={index} substage={substage} setCurrent={updateCurrent} position={index+1} current={cur} isLast={isLast} setSubStage={setSubStage} />
                })}
            </div>
        </div>
    );
}

export default Stage;
