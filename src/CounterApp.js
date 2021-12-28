import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(0);

    const handleAdd = (e) => {
        setCounter(counter + 1);
        
        //Setting state val with function
        //setCounter((c) => c + 1);
    }

    return <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>

        <button onClick={ handleAdd }>+1</button>
    </>
}

CounterApp.propTypes = {
    value: PropTypes.number
}

//Exports functional component.
export default CounterApp;