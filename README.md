## Tools ##
This is the code for http://flinkbox.de


Simple local HTTP server:
$ python -m SimpleHTTPServer

## Compiling Bootstrap/Bootswatch
$ sudo apt-get install node-less yui-compressor

1. git clone https://github.com/twbs/bootstrap
1. Copy less folder into Flinkbox root directory
1. Get variables.less and bootswatch.less from bootswatch.com
1. Move the new variables.less and bootswatch.less files to the less folder, replacing the existing variables.less file.
1. At the end of bootstrap.less, append @import "bootswatch.less";
1. In root directory:
$ lessc less/bootstrap.less > css/bootstrap.min.css


