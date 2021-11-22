import React from 'react';
import Stage from '../Stage/Stage';
import './StagesComponent.css'

const StagesComponent = ({props}) => {
    return (
        <div className="stgs-component">
            <div className="stgs-title">
                <h2>Первые шаги</h2>
            </div>
            {props.map(prop => {
                return <Stage stage={prop} />
            })}
        </div>
    );
}

export default StagesComponent;
