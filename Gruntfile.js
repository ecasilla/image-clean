'use strict';

module.exports = function (grunt) {

	//Project configuration.
	grunt.initConfig({

		jshint: {
			files: ['test/unit/**/*.js', 'test/intergration/**/*.js', 'lib/**/*.js', '!node_modules/*', '!test/helpers/**/*.js'],
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			}
		},

    coverage: {
      options: {
        thresholds: {
          'statements': 90,
          'branches': 90,
          'lines': 90,
          'functions': 90
        },
        dir: 'coverage',
        root: 'test'
      }
    },

    plato:{
      lint: {
        options: {
          jshint: grunt.file.readJSON('.jshintrc'),
          dir: "test/coverage",
          title: grunt.file.readJSON('package.json').name,
          complexity: {
            minmi:true,
            forin: true,
            logicalot:false
          }
        },
        files:{
          'test/coverage': ['lib/**/*.js']
        }
      },
    },
		watch: {
			options: {
				livereload: true,
			},
			jshint: {
				tasks: ['jshint'],
				files: ['test/unit/**/*.js', 'test/intergration/**/*.js', 'lib/**/*.js', '!node_modules/*', '!test/helpers/**/*.js']
			}
		}

	});

	//automatically load deps from package.jso
	for (var key in grunt.file.readJSON("package.json").devDependencies) {
		if (key.indexOf("grunt") === 0 && key !== "grunt") {
			grunt.loadNpmTasks(key);
		}
	}

	require('time-grunt')(grunt);

	grunt.registerTask('cover', ['plato']);
	grunt.registerTask('default', ['watch']);
};
