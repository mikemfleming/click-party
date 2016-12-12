module.exports = function(grunt) {
  // 1. All configuration goes here 
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      concat: {   

        dist: {
          src: [
              './Public/click-party.js'
          ],
          dest: './production/production.js',
        }

      },

      uglify: {

        build: {
          src: './production/production.js',
          dest: './production/production.min.js'
        }

      },

      cssmin: {

        options: {
          keepSpecialComments: 0
        },

        dist: {
          files: {
            './production/click-party-stylesheet.min.css': './Public/click-party-stylesheet.css'
          }
        }

      },

      watch: {

        css: {
          files: ['./Public/*.css'],
          tasks: ['cssmin']
        },

        js: {
          files: ['./Public/*.js'],
          tasks: ['uglify']
        }

      },
  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'watch']);

};