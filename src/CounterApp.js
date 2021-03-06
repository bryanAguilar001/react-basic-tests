import React, { useState } from 'react'
import PropTypes from 'prop-types'

// snippet rafcp para crear el componente funcional con proptypes
// rafce

const CounterApp = ({ value }) => {


    const [counter, setCounter] = useState( value );

    const handleAdd = () => {
        // setCounter( counter + 1 );
        setCounter( (c) => c + 1 );
    }
    
    const handleSubtract = () => {
        setCounter( counter - 1 );
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd} >+1</button>
            <button onClick={ () => setCounter( value ) } >Reset</button>
            <button onClick={handleSubtract} >-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;