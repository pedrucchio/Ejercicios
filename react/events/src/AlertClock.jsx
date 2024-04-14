export function AlertClock( {handler} ) {
    return (
        <div>
            <p>Click the button below to show the time</p>
            <button onClick={handler}>Click me!</button>
        </div>
    )
}