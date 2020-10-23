const fs = require('fs');

//validating the command and the file
module.exports = function getInputFile(args) {
    //validating command
    if (args.length !== 3) {
        console.error('Please provide an input in below format: >> node index.js <inputfile.txt>');
        process.exit(1);
    }

    var inputFileLocation = args[2];

    const inputFile = fs.readFileSync(inputFileLocation, 'utf8');

    //validating the input file
    if (typeof inputFile === 'undefined' || inputFile.length == 0) {
        console.error("The input file is empty");
        process.exit(1);
    }
    return inputFile;
}
