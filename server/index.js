const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {MongoClient} = require('mongodb');
const crypto = require("crypto")


var Client = require('mongodb').MongoClient;


var url = "mongodb://localhost:27017/";


const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(text) {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    decipher.setAutoPadding(false);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

app.use(cors({ origin: "http://localhost:3000", 
    credentials: true }));
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())


  
app.get('/', (req,res)=>{
    res.send(req.cookies);
});


app.post("/api/login",(req, res)=>{
    
    const username = req.body.uname
    const password = req.body.pwd
    
    Client.connect(url, (err, db)=>{
        if (err) throw err;
        var shopDb = db.db("Shop_react");
        var query = {email: username}
        console.log(query.email)
        shopDb.collection("account_db").findOne(query, (err, user)=>{
            if (err){
                throw Errow(err);
            };
            console.log(decrypt(user.password))
            if(password == decrypt(user.password)){
                res.status(200).send({
                    message: "Error login!!!"
                })
            }
            else{
                res.cookie("user_id", JSON.stringify(user._id),{
                        // maxAge: 60 * 60 * 1000, // 1 hour
                        // httpOnly: true,
                        // secure: true
                })
                res.status(200)
                .send({
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
    const password = encrypt(req.body.pwd)
    
    console.log("encrypt pass", password)
    console.log("decrypt pass " , decrypt(password))


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