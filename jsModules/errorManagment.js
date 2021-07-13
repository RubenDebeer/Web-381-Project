module.exports = (fdir) => {
    const fs = require("fs");
    const json = '{"passed":false, "description":"", "suggestion":"", "catchPhraseToUse":"", "correctedDir":""}';
    var obj = JSON.parse(json);

    //corrects \\ to / for validation and use
    fdir = fdir.replace(/\\/g, '/');

    //count the amount of /
    if ((fdir.match('/') || []).length <= 0) {
        obj.passed = false;
        obj.description = "The input of the directory is incorrect please";
        obj.suggestion = "Replace all \ with \\ or /"
        obj.catchPhraseToUse = "Well, well, well";
        return obj;
    }

    //checks if the Dir exists
    if (!fs.existsSync(fdir)) {
        obj.passed = false;
        obj.description = "The Directory specified does not exist";
        obj.suggestion = "Check the Dir inputed insure that all characters match what exists"
        obj.catchPhraseToUse = "Curse you, Perry the Platypus!";
        return obj;
    }

    //creates a test file to check if system has write permissions
    fs.open(fdir + '/test.txt', 'w', function(err, file) {
        if (err) {
            obj.passed = false;
            obj.description = "Directory does not have create permisstions";
            obj.suggestion = "change security permissions to allow any users to create files and folders"
            obj.catchPhraseToUse = "THE ENTIRE TRI-STATE AREA!";
            return obj;
        }
    });

    //writes to test file to check if system has append permissions
    fs.appendFile(fdir + '/test.txt', 'text for testing writing ability.', function(err) {
        if (err) {
            obj.passed = false;
            obj.description = "The Directory does not have append permisstions";
            obj.suggestion = "change security permissions to allow any users to append files and folders"
            obj.catchPhraseToUse = "Witchcraft!!";
            return obj;
        }
    });

    //delete's test file to check if system has delete permissions
    fs.unlink(fdir + '/test.txt', function(err) {
        if (err) {
            obj.passed = false;
            obj.description = "The Directory does not have delete permisstions";
            obj.suggestion = "change security permissions to allow any users to delete files and folders (Go to Dir to Delete test.txt)"
            obj.catchPhraseToUse = "Oh... poo";
            return obj;
        }
    });

    //If all the checks passed then a possitive will be returned
    obj.passed = true;
    obj.description = "All environment checks passed";
    obj.catchPhraseToUse = "It's working! It's functioning properly!";
    obj.correctedDir = fdir
    return obj;
}