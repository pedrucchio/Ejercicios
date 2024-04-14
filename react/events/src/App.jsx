import { AlertClock } from "./AlertClock";

export function App() {
    function handleShowTime() {
        const date = new Date()

        alert(`the current time is ${date.toLocaleTimeString()}`)
    }
    return (
        <div>
            <AlertClock handler={handleShowTime}/>
        </div>
    )
}