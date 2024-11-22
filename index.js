//os fs path modeule

//os module

//const os = require('os')

//console.log(os.type());
//console.log(os.cpus())
//console.log(os.freemem())
//console.log(os.hostname())
//console.log(os.arch())
//console.log(os.endianness())
//console.log(os.version())

//fs module

//const fs =require ('fs')
//write
//fs.writeFileSync('new.txt','hello world')

//read
//const data=fs.readFileSync('new.txt','utf8');
//console.log('',data)

//console.log('end');

//async
//read file
//const fs =require ('fs')
//fs.readFile('new.txt','utf8',(err,data)=>{
//console.log(data);
//console.log(err)
//})

//write

//console.log('end')

//path module
//path thammil join chhyyan
//const path=require ('path')

//const AbsolutePath=path.resolve('new.txt')
//const AbsolutePath=path.basename('new.txt')
//const AbsolutePath=path.resolve()
//console.log(AbsolutePath);

//http module




const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'html' });
  res.write('<h1>Hello world</h1>');
  res.end()
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


//->stream and 

//A stream is an abstract interface for working with streaming data in Node.js. The node:stream module provides an API for implementing the stream interface.

//There are many stream objects provided by Node.js. For instance, a request to an HTTP server and process.stdout are both stream instances.

//Streams can be readable, writable, or both. All streams are instances of EventEmitter.

//To access the node:stream module:
//highwatermark(16)=chunk



//1)read
//2)write


//->and buffer
