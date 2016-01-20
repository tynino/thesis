module.exports = function(grunt) {
  grunt.initConfig({

    jshint: {
      files: ['*.js', 'client/app/**/*.js', 'server/**/*.js', 'database/**/*.js', '*.json'],
      options: {
        ignores: [
          // (TODO: add lib files here)
        ]
      }
    },

    uglify: {
      target: {
        files: {
          // uncomment this if you need to re-uglify new library files.
          // You can also set mangle to true for lib files, but do not mangle client files.
          // 'client/lib/dest/libs.min.js': ['client/lib/angular.js', 'client/lib/angular-ui-router.js']
          'client/appmincode.js': ['client/app/**/*.js']
        }
      }

    },

    cssmin: {
      target: {
        files: {
          'client/assets/dest/styles.min.css': ['styles.css']
        }
      }
    },

    watch: {
      files: ['client/app/**/*.js', 'server/**/*.js', 'database/**/*.js'],
      tasks: ['jshint']
    }
  });

  //Automatic desktop notifications for Grunt errors and warnings
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  /*************************************************************
  Run `$ grunt jshint` before submitting PR
  Or run `$ grunt` with no arguments to watch files
  **************************************************************/

  grunt.registerTask('default', ['watch']);
};