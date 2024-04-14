import { Counter } from "./Counter";

export function App() {
    return (
        <div>
            <Counter initialValue={2} incrementAmount={3}/>
        </div>
    )
}