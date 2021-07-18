const extract = require('extract-zip')
const fs = require('fs');
const path = require('path');
const zippedFiles = [];

async function extractZip(source, target) {
    try {
        await extract(source, { dir: target });
        console.log("Extraction complete");
    } catch (err) {
        console.log("Oops: extractZip failed", err);
    }
}

const unzipFiles = async function(dirPath) {
    const files = fs.readdirSync(dirPath);

    await Promise.all(
        files.map(async(file) => {
            if (fs.statSync(dirPath + "/" + file).isDirectory()) {
                await unzipFiles(dirPath + "/" + file);
            } else {
                const fullFilePath = path.join(dirPath, "/", file);
                const folderName = file.replace(".zip", "");
                if (file.endsWith(".zip")) {
                    zippedFiles.push(folderName);
                    await extractZip(fullFilePath, path.join(dirPath, "/", folderName));
                    await unzipFiles(path.join(dirPath, "/", folderName));
                }
            }
        })
    ).catch(() => {
        //Ah, Perry the Platypus, you're just in time... to be trapped. (Trap comes)
    });
};

module.exports = (path) => {
    unzipFiles(path);
}