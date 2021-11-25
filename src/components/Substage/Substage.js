import React from 'react';
import './Substage.css';



const Substage = ({props}) => {

    const setThis = () => {
        props.setCurrent(props.position);
    }
    const updateThis = () => {
        props.icon = "completed"
        props.updateCurrent()
    }
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
                        {props.textHint}
                    </div>

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
