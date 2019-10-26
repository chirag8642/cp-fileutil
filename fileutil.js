#!/usr/bin/env node
const yargs = require('yargs');
const path = require('path');
const fs = require('fs');
const validation = require('./validation');
const fm = require('./file-mover');
const fr = require('./file_rename');

//Create rename

yargs.command({
    command: "rename",
    describe: "Rename file name ",
    builder: {
        src: {
            describe: "Source folder where you want to rename file name with specific keywords and replacing with replacer",
            demandOption: true,
            type: 'string',
            alias: 's'
        },
        keyWord: {
            describe: "keyword to find from filename which you want to replace with replacer",
            demandOption: true,
            type: 'string',
            alias: 'k'
        },
        replacer: {
            describe: "word which you want to replace in filename by replacing existing keyword",
            demandOption: true,
            type: 'string',
            alias: 'r'
        }
    },
    handler: function (argv) {
        validate2(argv);
        const src = path.resolve(argv.src);
        fr(src,argv.keyWord, argv.replacer);
    }
})

//for file move

yargs.command({
    command: "move",
    describe: "to move file with specific keywords name to different folder",
    builder: {
        src: {
            describe: "Source folder from where you want to move files from another folder",
            demandOption: true,
            type: 'string',
            alias: 's'
        },
        dest: {
            describe: "destination folder where you want to move files ",
            demandOption: true,
            type: 'string',
            alias: 'd'
        },
        replace: {
            describe: "Word in file name which you can use to move the file ",
            demandOption: true,
            type: 'string',
            alias: 'r'
        },
        fileType: {
            describe: "file type which you want to move, give like .pdf or .epub ",
            demandOption: true,
            type: 'string',
            alias: 't'
        }
    },
    handler: function (argv) {
        validate(argv);
        const src = path.resolve(argv.src);
        const dest = path.resolve(argv.dest);
        fm(src, dest, argv.replace, argv.fileType);
    }
})

/**
 * Private method to validate inputs
 * @param {argv} argv 
 */
function validate(argv) {
    if (validation(argv.src)) {
        throw new Error("src should not be empty");
    }

    if (validation(argv.dest)) {
        throw new Error("dest should not be empty");
    }

    if (validation(argv.replace)) {
        throw new Error("replace should not be empty");
    }

    if (validation(argv.fileType)) {
        throw new Error("File type should not be empty");
    }

    if (!fs.existsSync(argv.src)) {
        throw new Error(`${argv.src} does not exist`);
    }

    if (!fs.existsSync(argv.dest)) {
        throw new Error(`${argv.dest} does not exist`);
    }
}

function validate2(argv) {
    if (validation(argv.src)) {
        throw new Error("src should not be empty");
    }
    if (!fs.existsSync(argv.src)) {
        throw new Error(`${argv.src} does not exist`);
    }

    if (validation(argv.keyWord)) {
        throw new Error("keyWord should not be empty");
    }
        
}
yargs.parse();
