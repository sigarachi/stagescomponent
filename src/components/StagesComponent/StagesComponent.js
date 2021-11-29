import React, {useState, useEffect} from 'react';
import * as AllComponent from '../index'
import './StagesComponent.css'

const defaultStyle = {
    width: "30rem",
    height: "50rem",
    backgroundColor: "#eaeaea",
    borderRadius: "15px",
    paddingTop: "2rem",
    marginTop: "2rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    overflow: "auto"
}


const StagesComponent = ({props}) => {
    const [stage, setStage] = useState(1)
    const [styles, setStyles] = useState(defaultStyle)

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

    useEffect(() => {
        if(props.styles !== undefined && props.styles !== null){
            setStyles(props.styles)
        }
    },[props])

    return (
        <div className="stgs-component" style={styles}>
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
