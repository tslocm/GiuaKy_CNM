var AWS= require("aws-sdk");
var _ = require('lodash');
let awsConfig = {
    "region": "ap-southeast-1",
    "endpoint": "http://dynamodb.ap-southeast-1.amazonaws.com",
    "accessKeyId": "yourid", "secretAccessKey": "yourkey"
};

AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();

module.exports.getAllSanPham=function(req,res){
    let params={
        TableName:"SanPham"
    };
    docClient.scan(params,function(err,data){
        if(err){
            res.end(JSON.stringify({error : 'Khong load duoc tu DynamoDB'}))

        }else{
            res.render('index',{data: data});
        }
    });
};


module.exports.xoaSanPham = function (req, res) {
    let params = {
        TableName: 'SanPham',
        Key: {
            "maSanPham": req.params.maSanPham
        }
    };
    docClient.delete(params, function (err, data) {

        if (err) {
            res.send("users::delete::error - " + JSON.stringify(err, null, 2));
        } else {
            res.redirect('/sanpham');
        }
    });
};