const express = require("express")
const Post = require("./models/post") 
const router = express.Router()

router.get("/:id", async (req, res,next) => {
	try {
		let hello;
		let nos=req.params.id;
		
		for (let i=0;i<nos;i++){

			hello = await Post.find({});
		}
		res.send(hello)
	}catch(e) {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})
module.exports = router