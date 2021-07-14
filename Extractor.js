const fs = require('fs');
const zlib = require('zlib');


//We need to get the suer input and change the readdirSync paramaters
const directoryFiles = fs.readdirSync('c:/Users/boeps/Desktop/zipping/data3');
Promise.all(directoryFiles.map(filename => {
  return new Promise((resolve, reject) => {
    const fileContents = fs.createReadStream(`c:/Users/boeps/Desktop/zipping/data3/${filename}`);
    const writeStream = fs.createWriteStream(`c:/Users/boeps/Desktop/zipping/data3/${filename.slice(0, - 3)}`);
    const unzip = zlib.createGunzip();
    fileContents.pipe(unzip).pipe(writeStream).on('finish', (err) => {
      if (err) return reject(err);
      else resolve();
    })
  })
}))
  .then(console.log('done'));
