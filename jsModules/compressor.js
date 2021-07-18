const zl = require("zip-lib");

function ZipFolder(dirpath) {
    zl.archiveFolder(dirpath, dirpath + ".zip").then(function() {
        console.log("Compression complete");
    }, function(err) {
        //Ah, Perry the Platypus, you're just in time... to be trapped. (Trap comes)
    });
}

module.exports = (path) => {
    ZipFolder(path);
}