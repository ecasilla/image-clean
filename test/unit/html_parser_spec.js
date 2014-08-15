var getHtml = require('../../lib/html-parser.js'),
    expect  = require('chai').expect,
    path    = require('path'),
    _       = require('underscore'),
    cheerio = require('cheerio');

 
 describe('The getHTML module',function () {
   describe('The HTML module interface',function () {

     beforeEach(function (done) {
      html_arr = getHtml('test/fixtures/views',function (err,files) {
       return files; 
      });
      done();
     });

     it('should get an array of html files',function (done) {
       getHtml('test/fixtures/views',function (err,html_paths) {
          _.each(html_paths, function (html_path) {
            expect( path.extname( html_path ) ).to.equal('.html');
          });
         });
         done();
       });
     it('should not include any other file ext ',function (done) {
       getHtml('test/fixtures/views',function (err,html_paths) {
         _.each(html_paths,function (html_path) {
          expect(path.extname(html_path)).to.not.equal('.css');
          expect(path.extname(html_path)).to.not.equal('.png');
          expect(path.extname(html_path)).to.not.equal('.js');
         });
       });
       done();
     });
     it('should parse a html path into raw html',function (done) {
      //parseHtml(html_arr[0]);
     done();
     });
   });
 });
