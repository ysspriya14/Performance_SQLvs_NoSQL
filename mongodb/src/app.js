const express = require("express")

const mongoose = require("mongoose") // new
const routes = require("./routes") // new


// Connect to MongoDB database
mongoose
	.connect("mongodb://localhost:27017/checkdb", { useNewUrlParser: true })
	.then(() => {
		const app = express()
        app.use(express.json()) // new

        app.use("/api/profile", routes) // new

		app.listen(3000, () => {
			console.log("Server has started!")
		})
	})



