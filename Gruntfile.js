module.exports = function(grunt) {
    var browsers = [{
        browserName: "chrome",
        version: "41.0",
        platform: "Windows 7"
    }, {
        browserName: "firefox",
        version: "36.0",
        platform: "Windows 7"
    }, {
        browserName: "safari",
        version: "7.0",
        platform: "OS X 10.9"
    }, {
        browserName: "iphone",
        version: "8.0",
        platform: "OS X 10.10",
        deviceName: "iPhone Simulator"
    }, {
        browserName: "android",
        version: "4.4",
        platform: "Linux",
        deviceName: "Android Emulator"
    }, {
        browserName: "internet explorer",
        version: "8",
        platform: "XP"
    }, {
        browserName: "internet explorer",
        version: "9",
        platform: "Windows 7"
    }, {
        browserName: "internet explorer",
        version: "10",
        platform: "Windows 7"
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
        saucelabs_jasmine: {
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
        watch: {
            files: ['src/yaks/**/*.coffee'],
            tasks: ['browserify', 'coffee_jshint']
        },
        browserify: {
           yaks: {
            files: {
             'spec/yaks_build.js': [
                 'spec/yaks/yaks_shims.coffee',
                 'lib/index.js'
             ],
             'spec/yaks_test.js': [
                 'spec/yaks/**/*.coffee'
             ]
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
    grunt.registerTask("test", ["browserify", "connect", "saucelabs_jasmine"]);
};