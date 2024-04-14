import { Age } from "./Age";

export function Welcome({ name = "World",age}) {
    return (
        <div>
            <p>Welcome <strong>{ name }</strong></p>
            <Age age = {28}/>
            {18 < age && <Age age ={ 28 }/>}
            {age && <Age age ={ 28 }/>}
            {(18 < age && age < 65) && <Age age ={ 28 }/>}
            {(18 < age && age < 65 && (name === "John")) && <Age age ={ 28 }/>}
        </div>
    )
}