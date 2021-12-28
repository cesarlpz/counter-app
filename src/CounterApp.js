import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
    const [counter, setCounter] = useState( value );

    const handleAdd = () => {
        setCounter(counter + 1);
        
        //Setting state val with function
        //setCounter((c) => c + 1);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    return <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>

        <button className="numericButton" onClick={ handleAdd }>+1</button>
        <button className="textButton" onClick={ handleReset }>Reset</button>
        <button className="numericButton" onClick={ handleSubstract }>-1</button>
    </>
}

CounterApp.propTypes = {
    value: PropTypes.number
}

//Exports functional component.
export default CounterApp;