export function help() {
  version()
	console.log()
	console.log('  Touch Help')
	console.log()
	console.log('      Syntax')
	console.log('      >   touch [flags] [extns] [args]')
	console.log()
	console.log('  The following flags are currently available with Touch')
	console.log('  --help or -h : Display Help Menu')
	console.log('  --version or -v : Display version number')
	console.log('  --extn or -e : Use a common extension for all the following files.')
	console.log('  --logs : Display Error logs (if any)')
	console.log()
}

export const version = () => console.log('TouchJS Version', require('../package.json').version)

export function outrow(logs, suc_count, err_files) {
  version()

  console.log(suc_count +' Added, '+ err_files.length + ' Errors')
  if(logs) {
    console.log('\n--- LOGS ---\n')
    if(err_files.length===0) {
      console.log('No Error Logs')
    } else {
      err_files.forEach((file)=>{
        console.log('File: ' + file.filename)
        console.log('Error: ' + file.errors)
        console.log('')
      })
    }
  }
}