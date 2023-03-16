//to use the http module 
const http = require('http')

// to use the file system module
const fs = require('fs')

//to create an HTTP server that listens to server ports and gives a response back to the client.
const server = http.createServer((req,res)=>{ 

//to get the current date
let date = new Date();

let current_date=date.getDate();
let current_month=date.getMonth()+1;
let current_year=date.getFullYear();
let current_hour=date.getHours();
let current_minute=date.getMinutes();
let current_second=date.getSeconds();
let detail= `${current_date} ${current_month} ${current_year} ${current_hour}-${current_minute}-${current_second}`

//creating a new file using writeFileSync
fs.writeFileSync(`${detail}.txt`,`${date}`,'utf-8')

//reading the file content
let data=fs.readFileSync(`${detail}.txt`,'utf-8')

//sends a response header to the request.
res.writeHead(200,{'Content-Type':'text/html'})
res.end(data)
})

//creates a listener on a specified port 8000
server.listen(8000,()=>console.log('server is listening eee'));
