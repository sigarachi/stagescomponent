import React from 'react';
import Controllers from '../Controllers/Controllers';
import Stage from '../Stage/Stage';
import Document from '../Document/Document';
import StagesComponent from '../StagesComponent/StagesComponent';
import Substage from '../Substage/Substage'

const Componentsbuilder = ({input, logic}) => {
    switch (input.type) {
        case "container":
            switch(input.element){
                case "StageContainer":
                    return <StagesComponent props={input} />
                case "Stage":
                    return <Stage props={input} logic={logic} />
                case "Substage":
                    return <Substage props={input} logic={logic} />
                default:
                    return 
            }
            
        case "controller":
            switch(input.element){
                case "Button":
                    return <Controllers props={input} />
                case "link":
                    return <Document props={input} />
                
                default:
                    return 
            }
            
        default:
            return 
    }
}

export default Componentsbuilder;
