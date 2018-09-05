require('libs/weapp-adapter-min');

// 这里需要先加载微信脚本，不然 window 对象会报错
window.REMOTE_SERVER_ROOT = '';//远程服务器地址

var Parser = require('libs/xmldom/dom-parser');
window.DOMParser = Parser.DOMParser;
require('weapp-adapter');
require('game.min');
