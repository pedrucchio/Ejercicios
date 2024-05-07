import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0,incrementAmount = 1 }) {
    const [counter,setCounter] = useState(initialValue);

    useEffect(() =>{
        console.log(`El contador es ${counter}`);
    },[counter])

    function handleIncrement() {
        setCounter((c) => c+incrementAmount);
    }

    function handleDecrement() {
        setCounter((c) => c - incrementAmount)
    }

    function handleReset() {
        setCounter(initialValue)
    }

    return (
        <div>
            <CounterDisplay count = {counter}/>
            <button onClick={handleIncrement}>Add!</button>
            <button onClick={handleDecrement}>Substract!</button>
            <button onClick={handleReset}>Reset!</button>
        </div>
    )
}