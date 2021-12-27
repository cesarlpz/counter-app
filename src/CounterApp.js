import React from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
    return <>
        <h1>CounterApp</h1>
        <h2>{ value }</h2>

        <button onClick={ () => {console.log("onClick fired") }}>+1</button>
    </>

    CounterApp.propTypes = {
        value: PropTypes.number
    }
}

//Exports functional component.
export default CounterApp; 