module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        concat: {
            dist: {
                src: ['src/components/**/*.js', 'src/components/**/**/*.js'],
                dest: 'src/js/script.js'
            }
        },

        cssmin: {
            target: {
                files: {
                    'src/css/style.min.css': ['src/css/style.css']
                }
            }
        },

        less: {
            style: {
                files: {
                    'src/css/style.css': ['src/less/style.less']
                },
                options: {
                    // cleancss: true,
                    // sourceMap: true,
                    // sourceMapRootpath: '../',
                    // outputSourceFiles: true,
                    // sourceMapFilename: 'src/css/style.css.map',
                    // sourceMapURL: 'style.css.map',
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions'],
                map: 'prev'
            },
            style: {
                src: 'src/css/style.css'
            }
        },

        cmq: {
            style: {
                files: {
                    'src/css/style.css': ['src/css/style.css']
                }
            }
        },

        uglify: {
            build: {
                src: 'src/js/script.js',
                dest: 'src/js/script.min.js'
            }
        },

        watch: {
            style: {
                files: ['src/components/**/*.less', 'src/components/**/**/*.less'],
                tasks: ['style'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
            html: {
                files: ['src/*.html'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
            js: {
                files: ['src/components/**/*.js', 'src/components/**/**/*.js'],
                tasks: ['js'],
                options: {
                    spawn: false,
                    livereload: true
                },
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'src/css/*.css',
                        'src/js/*.js',
                        'src/*.html',
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        // baseDir: "build/",
                    },
                    notify: false,
                    startPath: 'src/index.html',
                    ghostMode: {
                        clicks: true,
                        forms: true,
                        scroll: false
                    }
                }
            }
        }
    });

    grunt.registerTask('default', [
        'less',
        'concat',
        'uglify',
        'cssmin',
        'autoprefixer',
        'cmq',
        'browserSync',
        'watch',
    ]);

    grunt.registerTask('style', [
        'less',
        'autoprefixer',
        'cmq',
        'cssmin',
    ]);

    grunt.registerTask('js', [
        'concat',
        'uglify',
    ]);
};