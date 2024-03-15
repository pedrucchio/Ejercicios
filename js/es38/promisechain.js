const isLogged = true;

const logged = (log) => {
    return new Promise((resolve, reject) => {
        if (log === true) {
            //if logged return random number 
            resolve(Math.random());
        } else {
            // if not return error
            reject(new Error("User is not logged"))
        }
    })
}

const promesa = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 0.5) {
            //if number higher than 0.5 return object
            resolve({name:"John",age:24})
        } else {
            // if not return error
            reject(new Error("Number not high enough"))
        }
    })
}

logged(isLogged)
    .then((response) => promesa(response))
    .then((result) => console.log(result))
    .catch((err) => console.error(err));