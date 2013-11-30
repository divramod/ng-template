module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: {
            version: {},
            port: '3000',
            path: __dirname + '/src/index.html',
        },
        watch: {
            files: [
                    '**/*',
            ],
            tasks: [],
            options: {
                livereload: {
                    port: 9001,
                }
            },
        },
        open: {
            loc: {
                path: '<%= config.path %>',
                app: 'google-chrome'
            },
            locserver: {
                path: 'http://localhost:<%= config.port %>',
                app: 'google-chrome'
            },
        },
        karma: {
            unit: {
                configFile: 'tests/config/unit.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('default', ['open:loc', 'watch']);

    grunt.registerTask('test', 'test some stuff', function() {
        console.log(__dirname);
    });

};
