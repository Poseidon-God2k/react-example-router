const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("Hello")
})


app.post("/api/login",(req, res)=>{
    const username = req.body.uname
    const password = req.body.pwd


    console.log(username)
    console.log(password)
})

app.listen(8888, () =>{
    console.log('running on port 8888');
})