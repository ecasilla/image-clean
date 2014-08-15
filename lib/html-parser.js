var cherrio = require('cheerio'),
    parse_dir = require('./dir_parser.js'),
    _ = require('underscore'),
    fs      = require('fs');

    function getHTML(path,ignores,callback) {
      var html_dirs = parse_dir(path,ignores,callback);
    _.each(html_dirs,function (html_path) {
     var $ = cherrio.load(html_path) 
      _.each($$('img'),function (element) {
       console.log(element);
      });
    });
}

getHTML('test/fixtures/views',function (err,files) {
  if (err) {
   throw err 
  }
  console.log(files);
});
module.exports = getHTML;
