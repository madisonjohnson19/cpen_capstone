const { v4: uuidV4 } = require('uuid');
const AWS = require("aws-sdk");
AWS.config.update({region:"us-east-1" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// 1. create an organization
const orgId = uuidV4();
var params = {
    TableName : 'cnuTrashCan_userRequests',
    Item: {
       PK: `ORG#${orgId}`,
       SK: `#METADATA#${orgId}`,
       name: 'Room 2',
       tier: "free-tier"

    }
  };
    
  dynamodb.put(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
  });