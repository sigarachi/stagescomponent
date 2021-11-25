import React, {useState, useEffect, useCallback} from 'react';
import Componentsbuilder from '../ComponentsBuilder/ComponentsBuilder';
import Substage from '../Substage/Substage';
import './Stage.css';

const Stage = ({props, logic}) => {
    const [current, setCurrent] = useState(1)
    const [sub, setSub] = useState([])



    const updateCurrent = () => {
        if(current + 1 <= props.components.length) {
            const newValue = current + 1;
            setCurrent(newValue)
        }
        else{
            props.icon= "completed"
            logic.updateStage()
        }
        
    }

    const setSubStage = (value) => {
        const newValue = value;
        setCurrent(newValue)
    }

    const setStage = () => {
        logic.setCurrentStage(logic.pos)
    }

    return (
        <div className="stg">
            <div className="stg-title" onClick={setStage} style={{cursor: 'pointer'}}>
                {props.text}  {props.icon !== 'none' ? <img className="completed" src={"/resources/icons/" + props.icon + ".svg"} alt="icon" /> : <></>}
            </div>
            <div className="stg-body">
                {props.components.map((prop, index) => {
                    const isLast = (index + 1) === props.components.length ? true : false;
                    const cur = logic.curStage ? current : props.components.length + 1;
                    const pos = index +1;

                    if(cur === pos && prop.icon !== "completed"){
                        prop.icon="progress"
                    }
                    console.log(prop)
                    return <Componentsbuilder input={prop} logic={{updateCurrent, pos, cur, isLast, setSubStage}} />

                    //return <Substage key={index} props={prop} setCurrent={updateCurrent} position={index+1} current={cur} isLast={isLast} setSubStage={setSubStage} />
                    
                })}
            </div>
        </div>
    );
}

export default Stage;
