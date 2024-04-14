import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue,incrementAmount }) {
    const [counter,setCounter] = useState(initialValue);

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