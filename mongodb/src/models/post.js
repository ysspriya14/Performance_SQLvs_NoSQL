const mongoose = require("mongoose")

const schema = mongoose.Schema({
	id: Number,
	name: String,
    address: String ,
    job: String,
    salary:Number

})

module.exports = mongoose.model("post", schema)
