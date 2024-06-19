const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const routes = require("./routes/mainRoutes")

let planet = {
    id: 1,
    name: "Mars"
}


dotenv.config()
const PORT = process.env.PORT

const app = express();

app.use(express.json())

app.use(morgan("combined"))

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.use(routes)

app.listen(PORT, () => {console.log("Listening on http://localhost:3000")})