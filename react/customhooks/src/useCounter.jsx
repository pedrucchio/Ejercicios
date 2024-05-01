import { useState } from "react";

export function useCounter(initialValue,incrementAmount) {
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

    return{
        counter:counter,
        onIncrement: handleIncrement,
        onDecrement:handleDecrement,
        onReset: handleReset
    }
    }