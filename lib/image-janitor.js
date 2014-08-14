'use-strict';
var async = require('async'),
    phantom = require('./phantom.js'),
    htmlParser = require('./html-parser.js'),
    cssParse = require('./css-parser.js'),
    _ = require('underscore'),
    fs = require('fs');

/**
** Main exposed function.
** Here we check the options and callback, then run the files through PhantomJS.
** @param  {Array}    files array of filenames
** @param  {Object}   opt   options
** @param  {Function} cb(Error, String, Object)
**/
function init(files, opt, cb) {
  var callback,
      options,

  if (typeof opt === 'function') {
    /* There were no options, this argument is actually the callback */
    options = {};
    callback = opt;
  } else if (typeof opt === 'object' && typeof cb === 'function') {
    options = opt;
    callback = cb;
  } else {
    throw new TypeError('Image Janitor: expected a callback');
  }

  /* Assign default values to options, unless specified */
  options.imagepath   = options.imagepath    ||      '';
  options.csspath     = options.csspath      ||      '';
  options.htmlpath    = options.htmlpath     ||      '';
  options.ignore      = options.ignore       ||      [];
  options.timeout     = options.timeout      ||      0;
  options.storeUnused = options.storeUnused  ||      false;

  async.waterfall([
    getImages.bind(null,options,files),
    getHtml.bind(null,options,files),
    getStylesSheets,
    getCss,
    imageClean,
    storeUnused],function(err,cleaned,storeUnused) {
      if (err) {
       return callback(err);
      }
      return callback(null,cleaned,storeUnused);
    });
}

module.exports = init;
