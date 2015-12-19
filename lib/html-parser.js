var cheerio = require('cheerio'),
_           = require('underscore'),
Promise     = require('bluebird'),
parse_dir   = require('./dir_parser.js'),
path        = require('path');


function GetHtmlSrc(htmldir,ignore,callback) {
  this.dir         = htmldir;
  this.ignores     = ignore;
  this.callback    = callback;
  this.html_config = {};
  this.html_paths  = [];
  this.callback(this.html_config);
}

GetHtmlSrc.prototype.getPaths = function () {
  this.html_paths = parse_dir(this.dir,this.ignores, function (err,files) {
    logger(files)
    GetHtmlSrc.prototype.parseEachPath.call(this,files)
  });
};

GetHtmlSrc.prototype.parseEachPath = function() {
  logger(this.html_paths)
  var img;
  if (!!this.html_paths) {
    console.log(this.html_paths + "FROM PARSER");
   _.each(this.html_paths,function(source_file,tagger) {
      this.html_config[source_file] = []
      tagger(source_file);
    });
  }else{
    console.log("NO PATHS!");
  }
};

function tagger(file) {
  var $ = cherrio.load(file);
  var images =  _.map($('img'),function(index,element){
    return $(element).attr('src');
  }).toArray();
  this.html_config[file].push(images);
}

GetHtmlSrc.prototype.init = function() {
  this.getPaths()
  //setTimeout(function(){
    //this.parseEachPath()
  //},4000) 
};

var test = new GetHtmlSrc('test/fixtures/views',null,logger);
test.getPaths();
//module.exports = getHTML;
module.exports = test;

function logger() {
  console.log(arguments);
}

//getHTML('test/fixtures/views',function (err,html_paths) {
//console.log(html_paths);
    //});

    //function getHTML(path,ignores,callback) {
      //var html_files = parse_dir(path, ignores, function (err,files) {
        //if(err){
          //callback(err)
          //}
          //callback(html_files);
  //});
  //}

