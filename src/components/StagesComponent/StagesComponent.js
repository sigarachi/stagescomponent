import React, {useState} from 'react';
import * as AllComponent from '../index'
import './StagesComponent.css'



const StagesComponent = ({props}) => {
    const [stage, setStage] = useState(1)

    const updateStage = () => {
        if(props.innerComponents.length >= stage + 1) {
            const newValue = stage + 1
            setStage(newValue)
        }
    }

    const setCurrentStage = (value) => {
        const newValue = value;
        setStage(newValue)
    }

    return (
        <div className="stgs-component">
            <div className="stgs-title">
                <h2>{props.text}</h2>
            </div>
            {props.innerComponents.length > 0 &&  props.innerComponents.map((prop, index) => {
                const curStage = index + 1 === stage ? true : false;
                const pos = index + 1
                prop.position = pos
                prop.current = curStage
                prop.updateStage = updateStage
                prop.setCurrentStage = setCurrentStage

                const Component = AllComponent[prop.type]
                return <Component key={index} props={prop} />
            })}
        </div>
    );
}


/*
class StagesComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.text = props.props.text;
        this.countComponents = props.props.innerComponents.length;
        this.innerComponents = props.props.innerComponents;
        this.state = {current: 1}
        this.updateCurrent = this.updateCurrent.bind(this)
        this.setCurrent = this.setCurrent.bind(this)
    }
    updateCurrent() {
        if(this.countComponents >= this.state.current + 1){
            this.setState({
                current: this.state.current +1
            })
            this.forceUpdate()
        }
        console.log(this.state.current)
    }

    setCurrent(value){
        const newValue = value;

        this.setState({current: newValue})
        console.log(this.state.current)
    }

  
    render(){
        return (
            <div className="stgs-component">
                <div className="stgs-title">
                    <h2>{this.text}</h2>
                </div>
                {this.innerComponents.length > 0 &&  this.innerComponents.map((prop, index) => {
                    prop.updateCurrent = this.updateCurrent
                    prop.setCurrent = this.setCurrent
                    prop.index = index + 1;
                    prop.current = this.state.current
                    prop.stage = index + 1 === this.current ? true : false;
                    const Component = AllComponent[prop.type]
                    return <Component key={index} setCurrent={this.setCurrent.bind(this)} updateCurrent={this.updateCurrent.bind(this)} props={prop} />
                })}
            </div>
        )
    }
}

*/

export default StagesComponent;
