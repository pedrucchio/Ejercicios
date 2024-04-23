import { useEffect, useState, useRef } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0,incrementAmount= 1}) {
    const [counter,setCounter] = useState(initialValue);
    const mountedRef = useRef(false);
    const prevDirectionRef = useRef(null);

    useEffect(()=>{
        if (!mountedRef.current) {
            console.log("Component mounted for the first time.");
            mountedRef.current = true;
        }
    },[])

    useEffect(() => {
        const direction = counter > initialValue ? "up" : "down";
        if (prevDirectionRef.current !== direction) {
            console.log(`Counter direction changed: ${direction}`);
            prevDirectionRef.current = direction;
        }
    }, [counter, initialValue]);


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