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
  var html_dir = parse_dir(path,ignores,callback);

var filtered =  _.filter(html_dir,function (html_path) {
    console.log(html_path)
    if (path.extname(html_path) === '.html') {
      console.log("YAYAYAYA")
    }else{
      console.log("BOBOBOBOBOBO")
    }
  });
  //parseHtml(html_dir)
  return filtered;
}

//function parseHtml(arrayOfFiles){
  //_.each(arrayOfFiles,function (file) {
    //var $ = cheerio.load(file);
    //$('img').each(function (i,elemen) {
      
    //});
  //});
//}


module.exports = getHTML;
getHTML('test/fixtures/views',function (err,html_paths) {
  console.log(html_paths)
});

