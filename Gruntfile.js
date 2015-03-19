module.exports = function(grunt) {
    var browsers = [{
        browserName: "firefox",
        version: "19",
        platform: "XP"
    }];

    grunt.initConfig({
    connect: {
      server: {
        options: {
          base: "",
          port: 9999
        }
      }
    },
    'saucelabs-jasmine': {
        all :{
            options: {
                urls: ['http://127.0.0.1:9999/spec/SpecRunner.html'],
                tunnelTimeout: 5,
                build: process.env.TRAVIS_JOB_ID,
                concurrency: 3,
                browsers: browsers,
                testname: 'yaks_tests',
                tags: ['master']
            }
        }
    },
    watch: {},
    browserify: {
       yaks: {
        files: {
         'spec/yaks_build.js': ['lib/index.js'],
         'spec/yaks_test.js': ['spec/yaks/**/*.js.coffee'  ],
        },
        options: {
          transform: ['coffeeify'],
        }
      },

    }
    });

    // Loading dependencies
    for (var key in grunt.file.readJSON("package.json").devDependencies) {
      if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
    }
    
    grunt.registerTask("dev", ["browserify", "connect", "watch"]);
    grunt.registerTask("test", ["browserify", "connect", "saucelabs-jasmine"]);
};