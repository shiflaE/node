//read

const fs = require('fs');

const readStream = fs.createReadStream('new.txt', { encoding: 'utf8', highWaterMark: 16 });

readStream.on('data', (chunk) => {
    console.log(`Received chunk: "${chunk}"`);
});

readStream.on('end', () => {
    console.log('No more data.');
});

//write

const writeStream=fs.createWriteStream('write.txt')

readStream.pipe(writeStream)

//duplex
//transform

