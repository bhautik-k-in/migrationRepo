const mongoose = require("mongoose")
require("dotenv/config")

const connect = mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

if (connect) {
    console.log("connected")

} else {
    console.log("Not connected")
}