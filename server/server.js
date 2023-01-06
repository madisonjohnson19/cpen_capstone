const express = require('express')
const app = express();
const port = 3001;

app.use(express.static('../src'))
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json({info: 'preset text'})
})

app.post('/',(req,res)=>{
    const {parcel} = req.body
    console.log(parcel)
    if (!parcel){
        return res.status(400).send({status:"failed"})
    }
    res.status(200).send({status:"received"})
})


app.listen(port, ()=>console.log("server has started Port:3001"))