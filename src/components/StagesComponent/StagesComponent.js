import React,{useState} from 'react';
import Stage from '../Stage/Stage';
import './StagesComponent.css'

const StagesComponent = ({props}) => {
    const [stage, setStage] = useState(1)

    const updateStage = () => {
        if(props.length >= stage + 1) {
            const newValue = stage + 1
            setStage(newValue)
        }
    }

    return (
        <div className="stgs-component">
            <div className="stgs-title">
                <h2>Первые шаги</h2>
            </div>
            {props.map((prop, index) => {
                const curStage = index + 1 === stage ? true : false;
                return <Stage stage={prop} updateStage={updateStage} curStage={curStage} />
            })}
        </div>
    );
}

export default StagesComponent;
