async function getData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    //console.log(data);
    const parsedData = await data.json()
    console.log(parsedData);

    // const filteredData = parsedData.filter((item) => {
    //     return item.completed
    // })

    // console.log(filteredData);
}

getData();