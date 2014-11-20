'use strict';
var cofy = require('cofy');
function cofyFs(){
	var fs = require('fs');
	var methods = [
	'readFile','close','open','read','write',
	'rename','truncate','ftruncate','rmdir','fdatasync',
	'fsync','mkdir','readdir','fstat','lstat','stat','readlink',
	'symlink','link','unlink','fchmod','chmod','fchown','chown',
	'utimes','futimes','writeFile','appendFile','watch','watchFile',
	'unwatchFile','realpath','createReadStream',
	'createWriteStream'
	];
	fs.$exists = cofy.fn(fs.exists ,false ,fs);
	return cofy.object(fs,true,methods);
}
function cofyChildProcess(){
	var cp = require('child_process');
	cp.$exec = function(cmd, opt){
		return function(done){
			var r = cp.exec(cmd , opt , function(e, stdout, stderr){
				done(e, stdout,stderr , r);
			});
		};
	};
	cp.$execFile = function(file,args, opt){
		return function(done){
			var r = cp.execFile(file,args, opt,function(e, stdout, stderr){
				done(e, stdout,stderr , r);
			});
		};
	};
	return cp;
}
function cofyDns(){
	return cofy.object(require('dns'));
}
function cofyZlib(){
	var zlib = require('zlib');
	var methods = ['deflate', 'deflateRaw','gzip','gunzip','inflate','inflateRaw','unzip'];
	cofy.object(zlib,true,methods);
}
module.exports = function(){
	cofyFs();
	cofyChildProcess();
	cofyDns();
	cofyZlib();
};
