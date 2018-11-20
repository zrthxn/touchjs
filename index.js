const fs = require('fs');
const version = 'v' + require('./package.json').version;
var touch = function (file, extn, data) {
    var success = null, errors = null;
    try {
        fs.writeFileSync(file + extn , data, null);
        success = true;
    } catch (err) {
        console.log(err, typeof err);
        success = false;
        errors = err.code +' : ' + err.name;
    }

    return ({
        "filename" : file,
        "success" : success,
        "errors" : errors
    });
}

var helpDisp = function () {
    console.log('ZRTHXN Labs Touch Version ' + version);
    console.log('Custom Command Line Tools [ Node ]');
    console.log('');
    console.log('  Touch Help');
    console.log('');
    console.log('      Syntax');
    console.log('      >   touch [flags] [extns] [args]');
    console.log('');
    console.log('  The following flags are currently available with Touch');
    console.log('  --help or -h :      Display Help Menu');
    console.log('  --extn or -e :      Use a common extension for all the following files. Supply the extension after the flag. Eg : touch -e .txt file_1 file_2 file_3');
    console.log('');
}

var versionDisp = function (type, callback) {
    if(type==='full') {
        console.log('ZRTHXN LABS Touch Version ' + version);
        console.log('Custom Command Line Tools [ Node ]');
    } else if(type==='short') {
        console.log(version);
    }
    callback();
}

var outrowDisp = function (logs, suc_count, err_files) {
    versionDisp('full', ()=>{
        console.log(suc_count +' Added, '+ err_files.length + ' Errors');
        if(logs) {
            console.log('\n--- LOGS ---\n');
            err_files.forEach((file)=>{
                console.log('File: ' + file.filename);
                console.log('Error: ' + file.errors);
                console.log('');
            });
        }
    });
}

exports.touch = touch;
exports.helpDisp = helpDisp;
exports.versionDisp = versionDisp;
exports.outrowDisp = outrowDisp;