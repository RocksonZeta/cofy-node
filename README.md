cofy-node
=========
[![Build Status](https://travis-ci.org/RocksonZeta/cofy-node.svg?branch=master)](https://travis-ci.org/RocksonZeta/cofy-node)

[node](http://nodejs.org/api/) co version.

##Installation
```
$ npm install cofy-node --save
```
**Old methods not change.New methods invoke convention: `yield obj.$asyncMethod`**

### Example:
```js
require('cofy-node')();
var fs = require('fs');
var child_process = require('child_process');
var dns = require('dns');
var zlib = require('zlib');

co(function*(){
	//fs
	var r = yield fs.$exists(__dirname);
	r.should.should.be.ok
	var data = yield fs.$readFile(__filename ,"utf8");
	data.indexOf('$readFile').should.not.equal(-1);
	//child process
	var r = yield child_process.$exec("node -v")
	r[0].should.be.ok      	//stdout node version
	r[1].should.not.be.ok; 	//stderr should be ''
	r[2].should.be.ok   	// child_process.exec returned child ChildProcess
	//dns
	var r = yield dns.$resolve4("github.com");
	//zlib
	var b = yield zlib.$gzip(new Buffer("github.com"));
});
```

### Supported methods:
fs
------
these methods has co version
```
readFile,close,open,read,write,
rename,truncate,ftruncate,rmdir,fdatasync,
fsync,mkdir,readdir,fstat,lstat,stat,
readlink,symlink,link,unlink,fchmod,chmod,
fchown,chown,utimes,futimes,writeFile,
appendFile,watch,watchFile,unwatchFile,realpath,
createReadStream,createWriteStream
```

child_process
-------------
- **$exec(command ,[options])** - return `[stdout,stderr,ChildProcess object]`
- **$execFile(file,[args],[options])** - return `[stdout,stderr,ChildProcess object]`

dns
-----
All async methods

zlib
-----
these methods has co version
```
deflate, deflateRaw,gzip,gunzip,inflate,inflateRaw,unzip
```