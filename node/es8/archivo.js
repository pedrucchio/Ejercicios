const fs = require('fs');

fs.appendFile("file.txt","\nThis is a second line",(err)=>{
    if (err){
        console.log(err);
    } else {
        console.log("Everythin is OK!");
    }
       
})