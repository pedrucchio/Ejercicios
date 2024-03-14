function printAsyncName(callback, name) {
    setTimeout(() => {
        callback(); 
        setTimeout(() => {
            console.log(name); 
        }, 1000);
    }, 1000);
}


function greet() {
    console.log("Hello");
}

printAsyncName(greet, "Pedro");