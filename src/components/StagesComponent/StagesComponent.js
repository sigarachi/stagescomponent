import React,{useState} from 'react';
import Componentsbuilder from '../ComponentsBuilder/ComponentsBuilder';
import Stage from '../Stage/Stage';
import './StagesComponent.css'

const StagesComponent = ({props}) => {
    const [stage, setStage] = useState(1)

    const updateStage = () => {
        if(props.components.length >= stage + 1) {
            const newValue = stage + 1
            setStage(newValue)
        }
    }

    const setCurrentStage = (value) => {
        const newValue = value;
        setStage(newValue)
    }

    return (
        <div className="stgs-component">
            <div className="stgs-title">
                <h2>{props.text}</h2>
            </div>
            {props.components.length > 0 &&  props.components.map((prop, index) => {
                const curStage = index + 1 === stage ? true : false;
                const pos = index + 1
                // eslint-disable-next-line no-sequences
                return <Componentsbuilder input={prop} logic={{updateStage, curStage , setCurrentStage, pos}} />
                //return <Stage key={index} stage={prop}  />
            })}
        </div>
    );
}

export default StagesComponent;
