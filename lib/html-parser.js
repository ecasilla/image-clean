var cheerio = require('cheerio'),
parse_dir   = require('./dir_parser.js'),
_           = require('underscore'),
Q           = require('q')
path        = require('path');


function GetHtmlSrc(htmldir,ignore,callback) {
  this.dir         = htmldir;
  this.ignores     = ignore;
  this.callback    = callback;
  this.html_config = {};
  this.html_paths;
  this.init();
  this.callback(this.html_config);
}

GetHtmlSrc.prototype.getPaths = function () {
  var deferred = Q.defer();
  this.html_paths = parse_dir(this.dir,this.ignores, function (err,files) {
    if(err) {
      deferred.reject(err);
    }else{
     deferred.resolve(files);
    }
  });
  return deferred.promise
};

GetHtmlSrc.prototype.parseEachPath = function() {
  var img;
  if (this.html_paths) {
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
  this.getPaths().then(function() {
    this.parseEachPath()
  });
};

var test = new GetHtmlSrc('test/fixtures/views',null,logger);

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

