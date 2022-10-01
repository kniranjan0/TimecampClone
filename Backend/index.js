const express = require("express")
const { connection } = require("./config/db")
const { Authentication } = require("./middlewares/Authentication")
// const { Authorization } = require("./middlewares/Authorization")
const { ProjectController } = require("./routes/Project.routes")
const { RegisterController } = require("./routes/Register.routes")
const app = express()
require("dotenv").config()
app.use(express.json())
const PORT = process.env.PORT_NO 
app.get("/", (req, res) => {
    res.send("Welcome")
})
    
app.use("/user",RegisterController)

app.use("/projects",Authentication,ProjectController)




app.listen(PORT, async () => {
    try {
        await connection
        console.log("Connected to db")
    } catch(e) {
        console.log(e)
    }
}) 