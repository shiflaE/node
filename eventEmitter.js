// const EventEmitter = require("events");
// const greeting = new EventEmitter();
// greeting.on("greet", (name) => {
//   console.log(hai ${name});
// });
// greeting.emit('greet',"avinash");



// const fs=require('fs')

// fs.writeFileSync('test.txt','hai')

// fs.readFile('test.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error:', err);
//         return;  //return is used to break the remaining lines when error occurs
//     }

//     fs.writeFile('output.txt', data, (err) => {
//         if (err) {
//             console.error('Error:', err);
//             return;
//         }
//         console.log('Data transferwd ');
//     });
// });

// fs.appendFile('output.txt','avinash')
// fs.readFile('output.txt','utf8')


let mypromise=new Promise((resolve, reject) => {
    
    let a=5;

    if(a==10){
        resolve("both numbers is same")
    }else{
        reject("number is not same")
    }
});

mypromise.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
}
)