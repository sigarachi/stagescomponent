import React, {useState} from 'react';
import * as AllComponent from '../index'
import './StagesComponent.css'



const StagesComponent = ({props}) => {
    const [stage, setStage] = useState(1)

    const updateStage = () => {
        if(props.innerComponents.length >= stage + 1) {
            const newValue = stage + 1;
            setStage(newValue);
        }
    }

    const setCurrentStage = (value) => {
        const newValue = value;
        setStage(newValue);
    }

    return (
        <div className="stgs-component">
            <div className="stgs-title">
                <h2>{props.text}</h2>
            </div>
            {props.innerComponents.length > 0 &&  props.innerComponents.map((prop, index) => {
                const curStage = index + 1 === stage ? true : false;
                const pos = index + 1;
                prop.position = pos;
                prop.current = curStage;
                prop.updateStage = updateStage;
                prop.setCurrentStage = setCurrentStage;

                const Component = AllComponent[prop.name];
                return(<>
                <Component key={index} props={prop} />    
                   {index + 1 !== props.innerComponents.length ?  <div className="spacer">

                    </div> : <></>
                    }
                </>) 
            })}
        </div>
    );
}




export default StagesComponent;
