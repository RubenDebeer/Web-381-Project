
var directory = "";
const errorJSON = require('./app');

module.exports = {
    mainMenu: function() {
        const menu = require('console-menu');

        console.clear();

        console.log('Behold my evil scheme...\n');

        console.log("\x1b[31m%s\x1b[0m",
            "░█──░█ █▀▀ █── █▀▀ █▀▀█ █▀▄▀█ █▀▀ 　 ▀▀█▀▀ █▀▀█ \n" +
            "░█░█░█ █▀▀ █── █── █──█ █─▀─█ █▀▀ 　 ──█── █──█ \n" +
            "░█▄▀▄█ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀▀ ▀───▀ ▀▀▀ 　 ──▀── ▀▀▀▀ \n\n");

        console.log("\x1b[34m%s\x1b[0m",
            "▀▀█▀▀ █──█ █▀▀ 　 █▀▀█ █▀▄▀█ █▀▀█ ▀▀█ ─▀─ █▀▀▄ █▀▀▀ \n" + 
            "──█── █▀▀█ █▀▀ 　 █▄▄█ █─▀─█ █▄▄█ ▄▀─ ▀█▀ █──█ █─▀█ \n" +
            "──▀── ▀──▀ ▀▀▀ 　 ▀──▀ ▀───▀ ▀──▀ ▀▀▀ ▀▀▀ ▀──▀ ▀▀▀▀ \n\n" );

        console.log("\x1b[36m%s\x1b[0m",
            "░█▀▀▀ ▀▄░▄▀ ▀▀█▀▀ ░█▀▀█ ─█▀▀█ ░█▀▀█ ▀▀█▀▀ ▀█▀ ── ░█▄─░█ ─█▀▀█ ▀▀█▀▀ ░█▀▀▀█ ░█▀▀█ \n" +
            "░█▀▀▀ ─░█── ─░█── ░█▄▄▀ ░█▄▄█ ░█─── ─░█── ░█─ ▀▀ ░█░█░█ ░█▄▄█ ─░█── ░█──░█ ░█▄▄▀ \n" +
            "░█▄▄▄ ▄▀░▀▄ ─░█── ░█─░█ ░█─░█ ░█▄▄█ ─░█── ▄█▄ ── ░█──▀█ ░█─░█ ─░█── ░█▄▄▄█ ░█─░█ \n\n");


            console.log('\x1b[33m%s\x1b[0m',"A simple application for creating and extracting archives.");
            console.log('\x1b[31m%s\x1b[0m',"Just follow the instructions..");

        menu([
            { hotkey: '1', title: 'Compress files' },
            { hotkey: '2', title: 'Unzip files'},
            { hotkey: '3', title: 'Quit' },
            { separator: true },
            { hotkey: '?', title: 'Help' },
        ], {
            header: 'Ferb, I know what we are gonna do today!',
            border: true,
        }).then(item => {
            switch (item.hotkey) {
                case '1':
                    compressFiles();
                    break;
                case '2':
                    unzipFiles();
                    break;
                case '3':
                    console.clear();
                    console.log('\x1b[31m%s\x1b[0m','Candace is out. PEACE!');
                    setTimeout(function(){
                        console.clear();
                        console.log('You quit the program.');
                    },3000);
                    break;
                case '?':
                    showHelpMenu();
                    break;
                default:
                    console.log("Invalid option.");
                    mainMenu();
                    break;
            }
        });
    },

    showError : function(obj) {
        console.log('\x1b[41m%s\x1b[0m', obj.catchPhraseToUse);
        console.log('\x1b[5m%s\x1b[0m', obj.description);
        console.log('We suggest: \n' + obj.suggestion);
        console.log();
    }

}

////////////////////////// METHODS /////////////////////////////////////////

const prompt = require('prompt-sync')();

const compressFiles = () => {
    console.log('\x1b[36m%s\x1b[0m','You chose to compress files, so let us compress this baby up.\n');

    //check if directory is valid
    
    directory = getDirectory();
    return directory;
}

const unzipFiles = () => {
    console.log('\x1b[36m%s\x1b[0m','You chose to unzip files, so let us unzip this baby.\n');
    
    //check if directory is valid

    directory = getDirectory();
    return directory;
}

const getDirectory = () => {
    return prompt('Please enter the file directory.');
}

////////////////////// HELP MENU ///////////////////////////////////

const showHelpMenu = () => {
    console.clear();

    console.log('\x1b[31m%s\x1b[0m',
 ".----------------.  .----------------.  .----------------.  .----------------.    \n" +
 "| .--------------. || .--------------. || .--------------. || .--------------. |  \n" +
 "| |  ____  ____  | || |  _________   | || |   _____      | || |   ______     | |  \n" +
 "| | |_   ||   _| | || | |_   ___  |  | || |  |_   _|     | || |  |_   __ |   | |  \n" +
 "| |   | |__| |   | || |   | |_  |_|  | || |    | |       | || |    | |__) |  | |  \n" +
 "| |   |  __  |   | || |   |  _|  _   | || |    | |   _   | || |    |  ___|   | |  \n" +
 "| |  _| |  | |_  | || |  _| |___| |  | || |   _| |__/ |  | || |   _| |_      | |  \n" +
 "| | |____||____| | || | |_________|  | || |  |________|  | || |  |_____|     | |  \n" +
 "| |              | || |              | || |              | || |              | |  \n" +
 "| '--------------' || '--------------' || '--------------' || '--------------' |  \n" +
 " '----------------'  '----------------'  '----------------'  '----------------'   \n" 
    );

    console.log('Platypuses ARE the only mammals to lay eggs.\n');

    const helpMenu = require('console-menu');

    helpMenu([
        { hotkey: '1', title: 'How does a directory look?' },
        { hotkey: '2', title: 'Where can I find the file(s) I zipped?'},
        { separator: true },
        { hotkey: '3', title: 'Leave Help' },
    ], {
        header: 'What do you need help with?',
        border: true,
    }).then(items => {
        switch (items.hotkey) {
            case '1':
                console.log('- - - - - - - - - \n' +
                            'Example of directory: \n' +
                            'C:\\Users\\HeinzDoof\\OneDrive\\Documents\\doofenshmirtz-evil-inc\n' + 
                            '- - - - - - - - - \n');
                yesNoMenu();
                break;
            case '2':
                console.log('- - - - - - - - - \n' +
                            'You can find the newly compressed files in the same directory as where the unzipped file was.\n' + 
                            '- - - - - - - - - \n');
                yesNoMenu();
                break;
            case '3':
                console.clear();
                console.log('\x1b[31m%s\x1b[0m','Leaving the help menu...');
                setTimeout(function(){
                    mainMenu();
                  },3000);
                break;
            default:
                console.log("Invalid option.");
                mainMenu();
                break;
        }
    });
}


//////////////////////////// Yes or No Menu //////////////////////////////////////////
const yesNoMenu = () => {

    const confirm = require('console-menu');

    confirm([
        { hotkey: 'Y', title: 'Yes, I want to return to the Help Menu.' },
        { hotkey: 'N', title: 'No, I want to go back to the Main Menu.'},
    ], {
        header: 'Do you still need some help?',
        border: true,
    }).then(item => {
        switch (item.hotkey) {
            case 'Y':
                showHelpMenu();
                break;
            case 'N':
                mainMenu();
                break;
            default:
                console.log("Invalid option.");
                mainMenu();
                break;
        }
    });
}
