const express = require("express");
const dot = require("dotenv");
const morgan = require("morgan");

// let planet = {
//     id:1,
//     name:"Mars"
// }

let planets = [
    {
        id:1,
        name:"Mars"
    },
    {
        id:2,
        name:"Earth"
    }
]

dot.config();
const PORT = process.env.PORT
const app = express();

app.use(express.json())
app.use(morgan("combined"))

app.get("/",(req,res)=>{
    res.send(planets);
})

app.listen(PORT,()=>{
    console.log("Listening on port 3000");
})