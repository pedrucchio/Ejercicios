import { Age } from "./Age";

export function Welcome({ name = "World",age}) {
    return (
        <div>
            <p>Welcome <strong>{ name }</strong></p>
            <Age age = { age }/>
            {18 < age && <Age age ={ age }/>}
            {age && <Age age ={ age }/>}
            {(18 < age && age < 65) && <Age age ={ age }/>}
            {(18 < age && age < 65 && (name === "John")) && <Age age ={ age }/>}
        </div>
    )
}



            