import React,{useState, useEffect} from 'react';
import * as AllComponent from '../index'
import './Stage.css';

const defaultStyle = {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column"
}

const Stage = ({props}) => {
    const [current, setCurrent] = useState(1)
    const [styles, setStyles] = useState(defaultStyle)

    const updateCurrent = () => {
        if(current + 1 <= props.innerComponents.length) {
            const newValue = current + 1;
            setCurrent(newValue)
        }
        else{
            props.icon= "done"
            props.updateStage()
        }
        
    }

    const setSubStage = (value) => {
        const newValue = value;
        setCurrent(newValue)
    }

    const setStage = () => {
        props.setCurrentStage(props.position)
    }

    useEffect(() => {
        if(props.styles !== undefined && props.styles !== null){
            setStyles(props.styles)
        }
    },[props])

    return (
        <div className="stg" style={styles}>
            <div className="stg-title" onClick={setStage} style={{cursor: 'pointer'}}>
                {props.text}  
                {props.icon === 'done' ? <div className="stg-img">
                    <img className="completed"  src={"./resources/icons/" + props.icon + ".svg"} alt="wait"/>
                </div> : <></>}
            </div>
            <div className="stg-body">
                {props.innerComponents.map((prop, index) => {
                    const cur = props.current ? current : props.innerComponents.length + 1;
                    const pos = index +1;
                   
                    if(cur === pos && prop.icon !== "completed"){
                        prop.icon="progress"
                    }
                    else if (prop.icon !== "completed" && prop.icon !== "progress"){
                        prop.icon = "waiting"
                    }

                    
                    prop.current = cur
                    prop.position = pos
                    prop.updateCurrent = updateCurrent
                    prop.setCurrent = setSubStage
                    const Component = AllComponent[prop.name]
                    return (
                        <>
                        <Component key={index} props={prop} />
                          {index + 1 !== props.innerComponents.length ?   <div className={"spacer-with-line " + prop.icon + "" }>
                               
                            </div> : <></>}
                        </>
                    )
                })}
            </div>

         
        </div>
    );
}


export default Stage;
