var cheerio = require('cheerio'),
    parse_dir = require('./dir_parser.js'),
    _ = require('underscore'),
    path = require('path'),
    fs      = require('fs');


function GetHtmlSrc(options,files) {
  this.path       = options.htmlpath;
  this.ignore     = options.ignore;
  this.imagepath  = options.imagepath;
  this.imagesList = files;
  this.store      = options.storeUnused;
}

GetHtmlSrc.prototype.getHtmml = function () {
  var html_dir = parse_dir(this.path,this.ignores,callback);
  _.each(html_dir,function (html_path) {
    _.reject(html_dir,function (html_path) {
      if (path.exname(html_path) !== '.html') {
      }
    });
  });
  return html_dir
};

GetHtmlSrc.prototype.parseHtml = function () {
  
};

function getHTML(path,ignores,callback) {
  var html_files = parse_dir(path,ignores, function (err,files) {
    if(err){
      callback(err,files)
    }
    callback(err,html_files);
  });
}

function parseHtml(arrayOfFiles){
  _.each(arrayOfFiles,function (file) {
    var $ = cheerio.load(file);
    $('img').each(function (i,elemen) {
      
    });
  });
}


module.exports = getHTML;
getHTML('test/fixtures/views',function (err,html_paths) {
});

