/**
 * Created by ramos on 16/11/15.
 */
var grunt = require('grunt');
//var exec = require('child_process').exec;
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-jscs');
grunt.loadNpmTasks('grunt-mocha-test');
grunt.loadNpmTasks('grunt-mocha-istanbul');

grunt.initConfig({

  watch: {
    scripts: {
      files: ['src/**/*.{js,json}', '*.js', 'test/**/*.js'],
      tasks: ['default']
    }
  },
  env: {

  },
  jscs: {
    all: ['src/**/*.js', 'test/**/*.js'],
    options: {
      config: './src/.jscsrc'
    }
  },
  mochaTest: {
    all: {
      options: {
        reporter: 'spec'
      },
      src: ['test/**/*.js']
    },
    unit: {
      options: {
        reporter: 'spec'
      },
      src: ['test/specs/*.js']
    },
    api: {
      options: {
        reporter: 'spec'
      },
      src: ['test/api/*.js']
    }
  },
  mocha_istanbul: {
    coverage: {
      src: ['test/*.js', 'test/specs/*.js', 'test/api/*.js'],
      options: {
        excludes: ['src/.jscsrc', 'test/mocks.js', 'src/controller/mailer.js']
      }
    }
  }
});
grunt.registerTask('dev', ['jscs:all', 'mocha_istanbul', 'watch']);
grunt.registerTask('coverage', ['mocha_istanbul']);
grunt.registerTask('default', ['jscs:all', 'mochaTest:unit']);