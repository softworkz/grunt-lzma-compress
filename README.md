# grunt-lzma-compress

> Compress files with LZMA using LZMA-JS (https://github.com/LZMA-JS/LZMA-JS).

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-lzma-compress --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-lzma-compress');
```

## The "lzma_compress" task

### Overview
In your project's Gruntfile, add a section named `lzma_compress` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  lzma_compress: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.compression_mode
Type: `Integer`
Default value: `1`

An integer value from 1 to 9, specifying the amount of compression (9 is max compression).


### Usage Example

#### Custom Options
In this example, the compression_mode option is set to 9.

```js
grunt.initConfig({
    lzma_compress: {
        options: {
            compression_mode: 9
        },
        files: [
            {
                expand: true,
                cwd: 'test/fixtures/',
                src: ['*.json'],
                dest: 'tmp/',
                ext: '.json.lz',
                extDot: 'last'
            }
        ]
    },
});
```


## Release History
_(Nothing yet)_
