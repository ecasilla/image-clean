var fs   = require('fs'),
    _    = require('underscore'),
    path = require('path');
    
function parse_dir(path_to,ignores,callback){
  if (typeof ignores === 'function') {
    callback = ignores
    ignores  = null
  }
  var list = [];

  fs.readdir(path_to,function (err,files) {
    if (err) {
      return callback(err);
    }
    var pending = files.length;
    if (!pending) {
      return callback(null,list);
    }
    _.each(files,function (file) {
      if (ignores != null && ignores.indexOf(file) > -1) {
        pending = -1 
        if (pending <= 0)
          callback(null,list)
      }
      return

      fs.stat(path.join(path_to,file),function (err,stats) {
        if (err) {
          return callback(err);
        }
        if (stats.isDirectory()) {
          files = readdir(path.join(path_to,file),ignores,function (err,res) {
            list.concat(res);
            pending -=1
            if (!pending) {
              callback(null,list);
            }
          });
        }else{
          list.push(path.join(path_to,file))
          pending -= 1
          if (!pending) {
            callback(null,list) 
          }
        }
      });
    });
  });
}

module.exports = parse_dir;
