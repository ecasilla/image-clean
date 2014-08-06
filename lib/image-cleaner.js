'use-strict'

var async = require('async'),
_ = require('underscore');


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
      numThreads;

  if (typeof opt === 'function') {
    /* There were no options, this argument is actually the callback */
    options = {};
    callback = opt;
  } else if (typeof opt === 'object' && typeof cb === 'function') {
    options = opt;
    callback = cb;
  } else {
    throw new TypeError('ImageCleaner: expected a callback');
  }

  /* Assign default values to options, unless specified */
  options.imagepath      = options.imagepath      || '';
  options.ignore       = options.ignore       || [];
  options.media        = options.media        || [];
  options.timeout      = options.timeout      || 0;
  options.report       = options.report       || false;
  options.ignoreSheets = options.ignoreSheets || [];

  if (typeof files === 'string') {
    numThreads = 1;
  } else {
    numThreads = files.length;
  }

  async.waterfall(
    [
      phantom.init.bind(null, numThreads, options.phantom),
      getHTML.bind(null, options, files),
      getStylesheets,
      getCSS,
      imageClean
    ],
    function (err, used_images, report) {
      phantom.exit();
      if (err) {
        return callback(err);
      }
      return callback(null, used_images, report);
    }
  );
}

module.exports = init;
