import React, {useEffect, useState} from 'react';
import * as AllComponent from '../index'
import './Substage.css';


const defaultStyle = {
    display: "flex",
    flexDirection: "column",
    height: "1.8rem"
}


const Substage = ({props}) => {
    const [styles, setStyles] = useState(defaultStyle)


    const setThis = () => {
        props.setCurrent(props.position);
    }
    const updateThis = () => {
        props.icon = "completed"
        props.updateCurrent()
    }


    useEffect(() => {
        if(props.styles !== undefined && props.styles !== null){
            setStyles(props.styles)
        }
    },[props])


    return (
        <div className={`sb-stg ${props.position===props.current ? "current" : " "}`} >
            <div className="sb-stg-main" style={{cursor: "pointer"}} onClick={setThis}>
                <div className="sb-stg-status">

                    <img className="completed" src={"./resources/icons/" + props.icon + ".svg"} alt="wait"/>
                </div>
                <div className={`sb-stg-title ${props.position===props.current ? "bold" : " "}`}>
                    {props.text}
                </div>
            </div>
            <div className="sb-stg-body">
                {props.position===props.current ? 
                <>
                    <div className="sb-stg-info">
                        {props.data.textHint}
                    </div>
                        {props.innerComponents.length > 0 ? <div className="sb-stg-documents">
                            {props.innerComponents.map((prop, index) => {
                                const Component = AllComponent[prop.name]
                                return <Component key={index} props={prop} />
                            })}
                        </div> : <></>}
                        <div className="next-stage">
                            <button className="ctrl" onClick={updateThis}>Следующий шаг</button>
                        </div>
                </> : 
                <></>}
            </div>
        </div>
    );
}


export default Substage;
