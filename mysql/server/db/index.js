const mysql =require('mysql');
const {createPool} =require('mysql')
 
const pool =createPool({
    host: "localhost",
    user:"root",
    password:"hello"
    // connectionLimit:10
})
let testdb = {};
testdb.all = ()=>{
    return new Promise((resolve,reject)=>{
            // console.log("Hello");
        pool.query(`select * from checker.users`, (err,res) =>{
            if(err){
                return reject(err);
            }
            return resolve(res);
        });
    });
};
module.exports= testdb;