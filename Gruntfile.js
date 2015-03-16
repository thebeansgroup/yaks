/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    browserify: {

    yaks: {
        files: {
         'index.js': ['src/**/*.js.coffee'  ],
        },
        options: {
          transform: ['coffeeify'],
          watch: true,
          keepAlive: true,
        }
      }
    },

    watch: {
      scripts: {
        files: './**/*.js.coffee',
        tasks: ['exec:npm_test'],
      },
    },

    exec: {
      npm_test: 'npm test'
    }

  });

  // These plugins provide necessary tasks.

  grunt.loadNpmTasks('grunt-browserify');

//  grunt.registerTask('default',);
};
