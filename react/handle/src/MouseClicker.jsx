export function MouseClicker() {
    function handleClick(event) {
        // console.log(event.currentTarget);
        if (event.target.id == "imagen") {
            console.log(`You are clicking the image`);
        } else {
            console.log(event.currentTarget.name)
        }

    }

    return (
        <div>
            <button name="one" onClick={handleClick}>
                <img id="imagen" width={24} height={24}/>
                Click Here!
            </button>
        </div>
    )
}