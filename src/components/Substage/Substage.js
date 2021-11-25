import React, {useState, useEffect, useCallback} from 'react';
import Componentsbuilder from '../ComponentsBuilder/ComponentsBuilder';
import Controllers from '../Controllers/Controllers';
import Documentslist from '../DocumentsList/DocumentsList';
import './Substage.css';

const Substage = ({props, logic}) => {


    const setThis = () => {
        logic.setSubStage(logic.pos);
    }

    const updateThis = () => {
        props.icon = "completed"
        logic.updateCurrent()
    }


    return (
        <div className={`sb-stg ${logic.pos===logic.cur ? "current" : " "}`} >
            <div className="sb-stg-main" style={{cursor: "pointer"}} onClick={setThis}>
                <div className="sb-stg-status">

                    <img className="completed" src={"./resources/icons/" + props.icon + ".svg"} alt="wait"/>
                </div>
                <div className={`sb-stg-title ${logic.pos===logic.cur ? "bold" : " "}`}>
                    {props.text}
                </div>
            </div>
            <div className="sb-stg-body">
                {logic.pos===logic.cur ? 
                <>
                    <div className="sb-stg-info">
                        {props.textHint}
                    </div>

                    {props.components.length > 0 &&  
                        <div className="sb-stg-documents">
                            {props.components.map((prop, index) => {
                                return <Componentsbuilder key={index} input={prop} />
                            })}
                        </div> 
                        }
                    
                    
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
