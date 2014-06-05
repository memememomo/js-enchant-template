module.exports = (grunt)->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    watch:
      files: ['**/*.coffee']
      tasks: 'coffee'
    coffee:
      compile:
        options:
          sourceMap: true
        files: [
          expand: true
          cwd: './'
          src: ['**/*.coffee']
          dest: './'
          ext: '.js'
        ]

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.registerTask 'default', ['watch']
  return
