import React, {useState, useEffect, useCallback} from 'react';
import Controllers from '../Controllers/Controllers';
import Documentslist from '../DocumentsList/DocumentsList';
import Docs from '../../data/documents.json'
import Control from '../../data/controllers.json'
import './Substage.css';

const Substage = ({substage, setCurrent, position , current, isLast, setSubStage}) => {

    const [docs, setDocs] = useState([])
    const [ctrl, setCtrl] = useState([])

    const setupAll = useCallback(() => {
        let arr = []
        Docs.documents.map(doc => {
            if(doc.ref === substage.unique_name){
                arr.push(doc)
            }
        })
        setDocs(arr)
        arr = []

        Control.controllers.map(controller => {
            if(controller.ref === substage.unique_name){
                arr.push(controller)
            }
        })
        setCtrl(arr)
    },[substage])


    useEffect(() => {
        setupAll()
    },[setupAll])

    const setThis = () => {
        setSubStage(position);
    }




    return (
        <div className={`sb-stg ${position===current ? "current" : " "}`} >
            <div className="sb-stg-main" style={{cursor: "pointer"}} onClick={setThis}>
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
                    {docs.length > 0 ? 
                        <div className="sb-stg-documents">
                            <Documentslist documents={docs} /> 
                        </div> 
                    : <></>}
                   
                   {ctrl.length > 0 ? 
                        <div className="controllers">
                            <Controllers controllers={ctrl} /> 
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
