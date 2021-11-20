import React, { useState } from "react";

const Hook = () => {
    const [fruitState, setFruitState] = useState({
        fruits: [
            {name: 'Mango', weight: '200gr'},
            {name: 'Apple', weight: '250gr'},
            {name: 'Banana', weight: '100gr'}
        ]
    });

    const clickHandler = () => {
        setFruitState({
            fruits: [
                {name: 'SamSung', weight: '200gr'},
                {name: 'Apple', weight: '250gr'},
                {name: 'Nokia', weight: '100gr'}
            ]
        })
    };

    return (
        <div>
            <button onClick={clickHandler}> Click Me! </button>
            <h1> Fruit Name is {fruitState.fruits[0].name} </h1>
            <h1> Fruit Name is {fruitState.fruits[1].name} </h1>
            <h1> Fruit Name is {fruitState.fruits[2].name} </h1>
        </div> 
    )   
}

export default Hook