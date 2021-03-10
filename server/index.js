const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const {MongoClient} = require('mongodb');




var Client = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("Hello")
})


app.post("/api/login",(req, res)=>{
    const username = req.body.uname
    const password = req.body.pwd
    Client.connect(url, (err, db)=>{
        if (err) throw err;
        var shopDb = db.db("Shop_react");
        var query = {email: username , password: password}
        shopDb.collection("account_db").findOne(query, (err,user)=>{
            if (err){
                throw Errow(err);
            };
            if(!user){
                res.status(200).send({
                    message: "Error login!!!"
                })
            }
            else{
                res.status(200).send({
                    message: "Success login!!!!"
                })
            }
            
            console.log("query account: ",username);
            db.close();
        })
    })
    

})


app.post("/api/register",(req, res)=>{
    const email = req.body.email
    const password = req.body.pwd
    const uname = req.body.uname
    const birthday = req.body.birthday
    const gender = req.body.gender
    Client.connect(url, (err, db)=>{
        if (err) throw err;
        var shopDb = db.db("Shop_react");
        var user = {email:email ,password:password,uname:uname,birthday:birthday,gender:gender}
        shopDb.collection("account_db").insertOne(user, (err)=>{
            if (err){
                res.status(200).send({
                    message: "Error register !!!"
                })
            };
            res.status(200).send({
                message: "Success register!!!!"
            })
            console.log("insert account: ",email);
            
            db.close();
        })
    })
})
app.listen(8888, () =>{
    console.log('running on port 8888');
})