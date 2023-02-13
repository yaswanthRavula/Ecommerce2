const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(bodyParser.json())
const port= process.env.PORT||"8080";
const mySQLConnection=require("./mySqlConncection");
app.listen(port,()=>{console.log("-----Hurray! Backend server is listening succesfully at 8080")});