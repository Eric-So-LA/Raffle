import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Record} from 'immutable';

export default class Clock extends Component {
    constructor(props){
        super(props);
        console.log("constructor");
        this.state = {
            time: new Date(),
            inputVal: "",
            selectVal: "T"
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    componentDidMount(){
        this.timer = setInterval(() => this.tick(), 10000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick(){
        this.setState({time: new Date()})
    }

    onInputChange(e){
        this.setState({inputVal: e.target.value});
    }

    onSelectChange(e){
        this.setState({selectVal: e.target.value});
    }
    render(){
        const Recorded = Record({ item: 'box'});
        const x = new Recorded({ item: 'shoe'});
        const y = x.set('item', 'sandal');
        console.log(x.get('item'), y.get('item'));
        console.log(x === y, 'render console log');
        return(
            <div>
                <h1>What time is it?</h1>
                <h2>It's {this.state.time.toLocaleTimeString()}!</h2>
                <input type="text" value={this.state.inputVal} onChange={this.onInputChange} />
                <input type="checkbox" checked={true}/>
                <input type="radio" checked={false}/>
                <select value={this.state.selectVal} onChange={this.onSelectChange} >
                    <option value="A">Apple</option>
                    <option value="T">Tomato</option>
                    <option value="C">Cranberry</option>                    
                </select>
                <Clockling>
                    {(i)=>{return <div>{i}</div>}}
                </Clockling>
            </div>
        )
    }
}

class Clockling extends Component {

    render(){
        return (
            <div ref={(item)=>{console.log('ref function', item)}}>
                {this.props.children("water spout")}
            </div>)
    }
}
function tick(){
    function changeHandle(e){
        let currentName = "Eric";
        if(e){
            currentName = e.target.value;
        } else {
            return currentName;
        }

    }
    const element = (
        <div>
            <input onChange={changeHandle} />
            <Simple name={changeHandle()} />
            <h1>WHAT ARE YOU DOING MAN</h1>
            <h2>it's { new Date().toLocaleTimeString()}. TIME TO GET A JOB</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('test'));
}


//simplest component:
function Simple(props){
    return <h1>Sup, {props.name}</h1>
}