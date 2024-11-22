// TASK 

// 1. Build a program that reads a file, checks if it exists, and appends content to the file if it does. If the file doesn't exist, create a new file with a default message.

 const fs=require('fs');

 fs.readFileSync('new1.txt','utf-8')

 const excist =fs.existsSync('new1.txt');
 if(excist){
     fs.appendFileSync('new1.txt','hello')
 }else{
    fs.writeFileSync('new1.txt','shhfla')
 }

