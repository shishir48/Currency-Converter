require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")

const app = require("./app")

app.use(cors())
app.use(express.json())
app.use("/api", require("./routes/routes"))

const PORT = process.env.PORT || 3002
app.listen(PORT, () => console.info(`crypto service running on port ${PORT}`))

module.exports = app
