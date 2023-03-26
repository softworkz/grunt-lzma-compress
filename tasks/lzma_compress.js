/*
 * grunt-lzma-compress
 * https://github.com/softworkz/grunt-lzma-compress
 *
 * Copyright (c) 2023 softworkz
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var lzma = require('lzma');

module.exports = function (grunt) {

    grunt.registerMultiTask('lzma_compress', 'Compress files with LZMA using LZMA-JS.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({});

        options.compression_mode = options.compression_mode || 1;
        
        grunt.log.writeln('Compression mode: ' + options.compression_mode);

        compress(this.files, options.compression_mode, this.async());
    });

    function compress(files, mode, done) {
        
        grunt.util.async.forEachSeries(files, function (filePair, nextPair) {
            grunt.util.async.forEachSeries(filePair.src, function (src, nextFile) {
                // Must be a file
                if (grunt.file.isDir(src)) {
                    return nextFile();
                }

                // Ensure the dest folder exists
                grunt.file.mkdir(path.dirname(filePair.dest));


                let content = grunt.file.read(src);

                let compressed = lzma.compress(content, mode);
                let buffer = Buffer.from(compressed);
                
                // Write the destination file.
                grunt.file.write(filePair.dest, buffer);

                // Print a success message.
                grunt.log.writeln('File "' + filePair.dest + '" compressed from ' + src);

                return nextFile();
            }, nextPair);
            
        }, done);
    }
};
