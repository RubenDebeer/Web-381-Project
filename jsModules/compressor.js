const fs = require('fs');
const zlib = require('zlib');

module.exports = {
    compress: function(dir) {
        var message;
        const directoryFiles = fs.readdirSync(dir);

        Promise.all(directoryFiles.map(filename => {
                return new Promise((resolve, reject) => {
                    const fileContents = fs.createReadStream(`${dir}/${filename}`);
                    const writeStream = fs.createWriteStream(`${dir}/${filename}.gz`);
                    const zip = zlib.createGzip();
                    fileContents.pipe(zip).pipe(writeStream).on('finish', (err) => {
                        if (err) return reject(err);
                        else resolve();
                    })
                })
            }))
            .then(message = 'success');
        return message
    }
}