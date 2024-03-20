const URL_API = "https://jsonplaceholder.typicode.com/posts";

async function post() {
    const data = await fetch(URL_API,{
        method : "POST",
        body: JSON.stringify({
            title: "Prueba",
            completed: true,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        } 
    });
    const res = await data.json();
    console.log(res);
}


post();