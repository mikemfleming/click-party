module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [
                    './Public/click-party.js'
                ],
                dest: './Public/production.js',
            }
        },

        uglify: {
            build: {
                src: './Public/production.js',
                dest: './Public/production.min.js'
            }
        },

        cssmin: {

              options: {
                keepSpecialComments: 0
              },
              dist: {
                files: {
                  './Public/click-party-stylesheet.min.css': './Public/click-party-stylesheet.css'
                }
              }
                  },

        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            } 
        },
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};