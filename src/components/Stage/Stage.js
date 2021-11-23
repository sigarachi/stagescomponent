import React, {useState, useEffect, useCallback} from 'react';
import Substage from '../Substage/Substage';
import substages from '../../data/substages.json'
import './Stage.css';

const Stage = ({stage, updateStage, curStage, setCurrentStage, myPosition}) => {
    const [current, setCurrent] = useState(1)
    const [sub, setSub] = useState([])


    const setSubs = useCallback(() => {
        const arr = []
        substages.substages.map(substage => {
            if(substage.ref === stage.unique_name){
                arr.push(substage)
            }
        })
        setSub(arr)
    },[stage])

    useEffect(() => {
        setSubs()
    }, [setSubs])

    const updateCurrent = () => {
        if(current + 1 <= sub.length) {
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
                {sub.map((substage, index) => {
                    const isLast = (index + 1) === sub.length ? true : false;
                    const cur = curStage ? current : sub.length + 1;
                    
                    return <Substage key={index} substage={substage} setCurrent={updateCurrent} position={index+1} current={cur} isLast={isLast} setSubStage={setSubStage} />
                    
                })}
            </div>
        </div>
    );
}

export default Stage;
