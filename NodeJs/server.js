const http = require("http");
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.writeHead(200 , {"content-type" : 'text/plain'});
    res.end("Hello, Fathima! Your server is working 🚀");
})

fs.writeFile('text.txt','this is a file' , (err)=>{
    if(err){
        console.log(err);
    }
})
fs.readFile('text.txt' , (err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})

fs.writeFile('new','this is my new file' , (err)=>{
    if(err){
        console.log(err);
    }
})
fs.unlink('new',(err)=>{
    if(err){
        console.log(err);
    }
});

server.listen(3000, ()=>{
    console.log('server is running on port 3000');
})