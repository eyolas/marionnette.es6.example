var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        conf: {
            src: 'app',
            port: 8000,
            livereloadPort: 35730
        },

        clean: {
            server: '.tmp'
        },
        watch: {
            views: {
                files: ['<%= conf.src %>/views/{,*/}*.html'],
                tasks: ['jst']
            },

            livereload: {
                options: {
                    livereload: '<%= conf.livereloadPort %>'
                },
                files: [
                    '{.tmp,<%= conf.src %>/}/{,*/}*.{js,css}',
                    '<%= conf.src %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= conf.src %>/index.html'
                ]
            }
        },
        jst: {
            compile: {
                options: {
                    amd: true,
                    templateSettings: {
                        interpolate: /\{\{(.+?)\}\}/g
                    },
                    processName: function(thatHugeFilepath) {
                        return thatHugeFilepath.replace('app/views/', '').replace('.html', '');
                    }
                },
                files: {
                    ".tmp/js/compiled.js": ["<%= conf.src %>/views/**/*.html"]
                },

            }
        },
        connect: {
            options: {
                port: '<%= conf.port %>',
                // Change this to 'localhost' to deny access to the server from outside.
                hostname: 'localhost',
                livereload: '<%= conf.livereloadPort %>'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= conf.src %>/'
                    ],
                    middleware: function(connect) {
                        return [
                            proxySnippet,
                            connect.static(require('path').resolve('.tmp')),
                            connect.static(require('path').resolve('./app')),
                        ];
                    }
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['jst']);

    grunt.registerTask('serve', function(target) {
        // if (target === 'dist') {
        //     return grunt.task.run(['build', 'connect:dist:keepalive']);
        // }

        grunt.task.run([
            'clean:server',
            'jst',
            'configureProxies',
            'connect:livereload',
            'watch'
        ]);
    });
};
