import React from 'react';
import Controllers from '../Controllers/Controllers';
import Documentslist from '../DocumentsList/DocumentsList';
import './Substage.css';

const Substage = ({substage, setCurrent, position , current, isLast}) => {
    return (
        <div className={`sb-stg ${position===current ? "current" : " "}`}>
            <div className="sb-stg-main">
                <div className="sb-stg-status">
                    {substage.status ==="completed" && <img className="completed" src="./resources/icons/check.svg" alt="check"/> }
                    {substage.status ==="progress" && <img className="completed" src="./resources/icons/in_progress_filled.svg" alt="in_progress"/>}
                    {substage.status ==="waiting" && <img className="completed" src="./resources/icons/wait.svg" alt="wait"/>}
                </div>
                <div className={`sb-stg-title ${position===current ? "bold" : " "}`}>
                    {substage.title}
                </div>
            </div>
            <div className="sb-stg-body">
                {position === current ? 
                <>
                    <div className="sb-stg-info">
                        {substage.info}
                    </div>
                    {substage.documents.length > 0 ? 
                        <div className="sb-stg-documents">
                            <Documentslist documents={substage.documents} /> 
                        </div> 
                    : <></>}
                   
                   {substage.controllers.length > 0 ? 
                        <div className="controllers">
                            <Controllers controllers={substage.controllers} /> 
                        </div> : 
                    <></>}
                   {!isLast &&  
                        <div className="next-stage">
                            <button className="ctrl" onClick={setCurrent}>Следующий шаг</button>
                        </div>
                    }
                </> : 
                <></>}
            </div>
        </div>
    );
}

export default Substage;
