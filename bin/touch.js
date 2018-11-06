#!/usr/bin/env node
var touchjs = require('../index.js');

var args = process.argv.splice(process.execArgv.length + 2);
var err_files = [], suc_count = 0;

var file_put = false;
var logs = false;
var sync = false,
    extn = "",
    data = null;

for(let i=0; i<args.length; i++) {
    file_put = false;
    logs = false;
    sync = false,
    extn = "";
    data = null;

    if(args[i]==='-v' || args[i]==='--version') {
        touchjs.versionDisp('short', ()=>{});
    } else if(args[i]==='-h' || args[i]==='--help') {
        touchjs.helpDisp();
    } else if(args[i]==='-e' || args[i]==='--extn') {
        // Set extension for next file
        if (args[i+1].match(/.*/)) {
            extn = args[i+1];
            file_put = true;
        } else {
            throw "Invalid Extension";
        }
        i+=2;
    } else if(args[i]==='--logs') {
        logs = true;
        file_put = false;
    } else {
        file_put = true;
    }

    // Check for file output and function call
    if(file_put) {
        var result = touchjs.touch(args[i], extn, data);
        if(result.success) {
            suc_count++;
        } else {
            err_files.push(result);
        }
    }
}

if(suc_count!==0)
    touchjs.outrowDisp(logs, suc_count, err_files);
console.log('');