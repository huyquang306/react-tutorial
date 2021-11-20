import React from "react";
import { Component } from "react";
import './Learning.css';
class Learning extends Component{
    constructor(props){
        super(props);
        this.state = {
            fruits: [
                {name: 'Mango', weight: '200gr'},
                {name: 'Apple', weight: '250gr'},
                {name: 'Banana', weight: '100gr'}
            ]
        }
    }
    
    clickHandler = () => {
        // console.log("Hello World");
        // alert("welcome UDEMY");
        this.setState({
            fruits: [
                {name: 'SamSung', weight: '200gr'},
                {name: 'Apple', weight: '250gr'},
                {name: 'Nokia', weight: '100gr'}
            ]
        })
    }

    render(){
        const style = {
            backgroundColor: 'orange',
            cursor: 'pointer',
            padding: '10px',
            font: 'inherit',
        }
        return (
            <div>
                <button style={style} onClick={this.clickHandler}> Click Me! </button>
                <h1 className="card"> Fruit Name is {this.state.fruits[0].name} </h1>
                <h1 className="card"> Fruit Name is {this.state.fruits[1].name} </h1>
                <h1 className="card"> Fruit Name is {this.state.fruits[2].name} </h1>
            </div> 
        )       
    }
}

export default Learning