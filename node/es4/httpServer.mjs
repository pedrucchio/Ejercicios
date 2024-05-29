
import {createServer} from 'node:http'

const port = 3000;

const server = createServer((request,response) =>{
    console.log(`Request Received`);
    response.statusCode = 200;
    response.setHeader("CoNTENT-Type","text/html");
    response.end(
        "<html><body><h1>This is my first server with node</h1></body></html>")
})

server.listen(port,()=>{
    console.log(`Server Listening in Port : http://localhost:${port}`);
})