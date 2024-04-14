import { Age } from "./Age";

export function Welcome({ name = "World"}) {
    return (
        <div>
            <p>Welcome <strong>{ name }</strong></p>
            <Age age = {28}/>
        </div>
    )
}