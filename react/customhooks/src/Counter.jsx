
import { CounterDisplay } from "./CounterDisplay";
import { useCounter } from "./useCounter";

export function Counter({ initialValue = 0,incrementAmount = 1 }) {

    const { counter,onIncrement,onDecrement,onReset} = useCounter(initialValue,incrementAmount);
    
    

    return (
        <div>
            <CounterDisplay count = {counter}/>
            <button onClick={onIncrement}>Add!</button>
            <button onClick={onDecrement}>Substract!</button>
            <button onClick={onReset}>Reset!</button>
        </div>
    )
}