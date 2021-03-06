# Node Touch CLI
### v1.2.10
[![HitCount](http://hits.dwyl.io/zrthxn/touchjs.svg)](http://hits.dwyl.io/zrthxn/touchjs)

This is a small CLI to create empty files.<br>
Touch is available in Linux systems and is a useful tool to create lots of files quickly. It's particularly helpful to web developers and 
other similar fields where a single project contains lots of files.

**Touch can create ANY type of file with ANY extension,** but it will be an empty file.

This CLI will be particularly helpful to Windows users since Windows doesn't come with such a functionality. <br>
Also, this was inspired from Borland's Touch CLI which used to come bundled with the Borland TurboC++ 4.5 compiler, but isn't available anymore on modern systems.


## Installation
You will need to have installed Node for this to work. Open a terminal window and run
```
npm install -g @zrthxn/touchjs
```


## Usage
The syntax for this is very simple. You just have to say
```
touchjs [flags] [extn] [args]
```

The current available flags are
- **--help or -h** : Use this anytime to view help
- **--version or -v** : Use this to check the version number. We use symantic versioning :)
- **--extn or -e** : Use this to make lots of files with a particular extension
- **--logs** : Display Error logs (if any)

### Examples
To create a simple file, invoke touchjs
```
touchjs filename.txt
```

To create multiple files, invoke touchjs
```
touchjs file_a.txt file_b.js file_c.html
```

To create multiple files with the same extension
```
touchjs -e .html file_one file_two file_three ...
```

To create groups of files with a particular extension
```
touchjs -e .html file_one file_two -e .js file_three file_four ...
```


## Contribution
If you wish to contribute towards the development of this CLI, you can go to the GitHub page of this 
package and fork the repository. Add any features you like and then submit a pull request with an explaination 
of what you have added. **Everyone is welcome to contribute :)**
