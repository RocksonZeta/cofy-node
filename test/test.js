'use strict';
var co = require('co');
require('../')();
describe("cofy-node.fs", function(){
	var fs = require('fs');
	it("#$exists" , function(done){
		co(function*(){
			var r = yield fs.$exists(__dirname);
			r.should.should.be.ok
			done();
		});
	});
	it("#$readdir" , function(done){
		co(function*(){
			var files = yield fs.$readdir(__dirname);
			files.indexOf('test.js').should.not.equal(-1);
			done();
		});
	});
	it("#$readFile" , function(done){
		co(function*(){
			var data = yield fs.$readFile(__filename ,"utf8");
			data.indexOf('$readFile').should.not.equal(-1);
			done();
		});
	});

});

describe("cofy-node.child_process", function(){
	var cp = require('child_process');
	it("#$exec" , function(done){
		co(function*(){
			var r = yield cp.$exec("node -v")
			r[0].should.be.ok
			r[1].should.not.be.ok;
			r[2].should.be.ok
			done();
		});
	});
});

describe("cofy-node.dns", function(){
	var dns = require('dns');
	it("#$resolve4" , function(done){
		co(function*(){
			var r = yield dns.$resolve4("github.com");
			r[0].indexOf('.').should.not.equal('-1');
			done();
		});
	});
});

describe("cofy-node.zlib", function(){
	var zlib = require('zlib');
	it("#$zlib" , function(done){
		co(function*(){
			var b = yield zlib.$gzip(new Buffer("github.com"));
			b.length.should.not.equal('0');
			done();
		});
	});
});