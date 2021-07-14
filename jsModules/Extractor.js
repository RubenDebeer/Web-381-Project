const fs = require('fs');
const zlib = require('zlib');

module.exports = {
    extract: function(dir) {
        var message;
        Promise.all(dir.map(filename => {
                return new Promise((resolve, reject) => {
                    const fileContents = fs.createReadStream(`${dir}/${filename}`);
                    const writeStream = fs.createWriteStream(`${dir}/${filename.slice(0, - 3)}`);
                    const unzip = zlib.createGunzip();
                    fileContents.pipe(unzip).pipe(writeStream).on('finish', (err) => {
                        if (err) return reject(err);
                        else resolve();
                    })
                })
            }))
            .then(message = 'success');
        return message
    }
}