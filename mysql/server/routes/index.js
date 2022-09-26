const express =require('express');
const db=require('../db');
const router = express.Router();


router.get('/:id',  async (req,res,next) => {
    try{
        let hello;
        let nos=req.params.id;
        for (let i = 0; i < nos; i++) {  
            hello = await db.all();
            // 
          }
        
        res.json(hello);
    }catch(e)
    {
        console.log(e);
        res.sendStatus(500);
    }
});
module.exports =router;