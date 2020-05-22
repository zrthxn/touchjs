#!/usr/bin/env node
const inquirer = require('inquirer')

import touchjs from './touch'
import { version, help, outrow } from './utils'

var args = process.argv.splice(process.execArgv.length + 2);
var err_files = [], suc_count = 0;

var file_put = false;
var logs = false;
var sync = false,
    extn = "",
    data = null;

for(let i=0; i<args.length; i++) {
	if(args[i]==='-v' || args[i]==='--version') {
		version()
	} else if(args[i]==='-h' || args[i]==='--help') {
		help()
	} else if(args[i]==='-e' || args[i]==='--extn') {
		// Set extension for next file
		if (args[i+1].match(/.*/)) {
			extn = args[i+1];
			i+=2;
			file_put = true;
		} else {
			throw "Invalid Extension";
		}
			
	} else if(args[i]==='--logs') {
		logs = true;
		file_put = false;
	} else {
		file_put = true;
	}

	// Check for file output and function call
	if(file_put) {
		var result = touchjs(args[i], extn);
		if(result.success)
			suc_count++;
		else
			err_files.push(result);
	}
}

if(suc_count!==0)
	outrow(logs, suc_count, err_files);