const express = require("express")
const routeHandlers = require("./functions/login.js")

const app = express();

app.use(express.json())
app.use("/api", routeHandlers)

app.get("/api/test", (req, res) => {
    res.send("Hello World")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))