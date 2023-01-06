const { v4: uuidV4 } = require('uuid');
const AWS = require("aws-sdk");
AWS.config.update({region:"us-east-1" });

const dynamodb = new AWS.DynamoDB.DocumentClient();


const express = require('express')
const app = express();
const port = 3001;

// 1. create an organization




app.use(express.static('../src'))
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.status(200).json({info: 'preset text'})
// })

app.post('/',(req,res)=>{
    const orgId = uuidV4();
    const {parcel} = req.body
    console.log(parcel)
    var params = {
        TableName : 'cnuTrashCan_userRequests',
        Item: {
           PK: `ORG#${orgId}`,
           SK: `#METADATA#${orgId}`,
           name: parcel,
           tier: "free-tier"
    
        }
      };
      dynamodb.put(params, function(err, data) {
        if (err) console.log(err);
        else console.log(data);
        });
        
    if (!parcel){
        return res.status(400).send({status:"failed"})
    }
    res.status(200).send({status:"received"})
})


app.listen(port, ()=>console.log("server has started Port:3001"))