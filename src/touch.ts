import fs from 'fs'

export default function touch(file: string, extn: string) {
	var success = null, errors = null
	try {
		fs.writeFileSync(file + extn, '')
		success = true
	} catch (err) {
		console.log(err, typeof err)
		success = false
		errors = err.code +' : ' + err.name
	}

	return {
		file, success, errors
	}
}