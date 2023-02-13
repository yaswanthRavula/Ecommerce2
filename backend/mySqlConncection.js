const mysql=require('mysql2');
var mySQLConnection=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"Yy@8309328761",
        database:"us_ecom"

    }
)
mySQLConnection.connect((err)=>{
    if(!err){
        console.log("------Hurray Again !! MySQL Database is also connected")
    }else{
        console.log("Uh oh ! Database is not connected");
        console.log("The error is here: ",err.message)
    }
})
module.exports=mySQLConnection;