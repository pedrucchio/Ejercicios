import { useEffect, useState } from "react"

export function Clock() {
    const [date,setDate] = useState(new Date())

    useEffect(() =>{
        setInterval(() =>{
            setDate(new Date())
        },1000)
    },[])

    return (
        <div className="clock">
            <h2>La hora es {date.toLocaleTimeString()}</h2>
        </div>
    )
}