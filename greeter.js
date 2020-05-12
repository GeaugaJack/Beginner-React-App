import React from 'react';

function Greeter({name, excitement = 1, age = 18}){
    const greet = () => {
        alert(`Hello There ${name}`)
    }
    return (
        <>
            <h1>Hi there,{name}{"!".repeat(excitement)}</h1>
            <p> You are {age} years old</p>
            <button onClick={greet}>Click Me</button>
        </>
    )
}

export default Greeter;