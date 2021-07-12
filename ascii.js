console.log('\x1b[31m%s\x1b[0m',
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

var menu = require('console-menu');

menu([
    { hotkey: '1', title: 'Compress files' },
    { hotkey: '2', title: 'Unzip files'},
    { hotkey: '3', title: 'Quit' },
    { separator: true },
    { hotkey: '?', title: 'Help' },
], {
    header: 'Choose an option from the menu',
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
            console.log('\x1b[31m%s\x1b[0m','You chose to quit. Bye!');
            //need to wait here
            console.clear();
            break;
        case '?':
            helpMenu();
            break;
        default:
            console.log("Invalid option.");
            menu();
            break;
    }

    //if (item) {
    //    console.log('You chose: ' + JSON.stringify(item));
    //} else {
    //    console.log('You cancelled the menu.');
    //}
});

const compressFiles = () => {
    console.log('\x1b[36m%s\x1b[0m','You chose to compress files.');
}

const unzipFiles = () => {
    console.log('\x1b[36m%s\x1b[0m','You chose to zip files.');
}

const helpMenu = () => {
    console.log('\x1b[31m%s\x1b[0m','You chose help.');
}