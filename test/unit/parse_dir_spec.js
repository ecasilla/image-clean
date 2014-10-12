/*jshint -W709*/
var expect    = require('chai').expect,
    images    = require('../fixtures/fixture.js'),
    _         = require('underscore'),
    parse_dir = require('../../lib/dir_parser.js');
 
describe('directory parser ',function () {

  describe('The parse directory for all files interface',function () {
    it('should correctly list all files in nested directory',function (done) {
      var expectedFiles = images;
      parse_dir('test/fixtures/images',function (err,files) {
        expect(_.size(expectedFiles)).to.equal(_.size(files));
        expect(expectedFiles.sort()).to.deep.equal(files.sort());
        done()
      });
    });
    it('should ignore the files listed in the ignore parameter',function (done) {
      ignoredFiles = [
        'test/fixtures/images/index2/01.jpg',
        'test/fixtures/images/index2/02.jpg',
        'test/fixtures/images/index2/03.jpg',
        'test/fixtures/images/index2/04.jpg',
        'test/fixtures/images/index2/05.jpg',
        'test/fixtures/images/index2/06.jpg',
        'test/fixtures/images/index2/07.jpg',
      ]
      parse_dir('test/fixtures/images',ignoredFiles,function (err,files) {
        _.each(files,function (file) {
          expect(ignoredFiles.indexOf(file)).to.equal(-1);
        });
      });
      done();
    });
    it('should ignore everthing in a path if needed',function (done) {
      var ignore = [ 'test/fixtures/images/modal/arrow-right.jpg',
        'test/fixtures/images/modal/automotive.jpg',
        'test/fixtures/images/modal/chart-exposure.jpg',
        'test/fixtures/images/modal/chart-impressions.jpg',
        'test/fixtures/images/modal/cli-chevrolet.jpg',
        'test/fixtures/images/modal/arrow-left.jpg',
        'test/fixtures/images/modal/cli-toyota.jpg',
        'test/fixtures/images/modal/close.jpg',
      'test/fixtures/images/modal/cli-dodge.jpg' ];
      parse_dir('test/fixtures/images/modal',ignore, function (err,files) {
        expect(files).to.be.empty();
      });
      done(); 
    });
  });
});
