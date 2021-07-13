module.exports = (fdir) => {
    const fs = require("fs");
    const json = '{"passed":false, "description":""}';
    var obj = JSON.parse(json);

    //checks if the Dir exists
    if (!fs.existsSync(fdir)) {
        obj.passed = false
        obj.description = "Directory does not exist does not"
        return obj
    }

    //creates a test file to check if system has write permissions
    fs.open(fdir + '/test.txt', 'w', function(err, file) {
        if (err) {
            obj.passed = false
            obj.description = "Directory does not have create permisstions"
            return obj
        }
    });

    //writes to test file to check if system has append permissions
    fs.appendFile(fdir + '/test.txt', 'text for testing writing ability.', function(err) {
        if (err) {
            obj.passed = false
            obj.description = "Directory does not have append permisstions"
            return obj
        }
    });

    //delete's test file to check if system has delete permissions
    fs.unlink(fdir + '/test.txt', function(err) {
        if (err) {
            obj.passed = false
            obj.description = "Directory does not have delete permisstions"
            return obj
        }
    });

    //If all the checks passed then a possitive will be returned
    obj.passed = true
    obj.description = "All environment checks passed"
    return obj
}