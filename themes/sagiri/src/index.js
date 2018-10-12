window.FastClick = require('fastclick');
require('lazyload');

if (window.disqusjs) {
  require('disqusjs');
}
let loaded = false;
window.addEventListener('load', () => {
  loaded = true;
});
setTimeout(() => {
  if (!loaded) {
    window.onload();
    window.onload = null;
  }
}, 2000);

window.notie = require('corner-notie');
window.APlayer = require('aplayer');
window.DPlayer = require('dplayer');

require('./utils');
require('./motion');
require('./affix');
require('./pisces')();
require('./scrollspy');
require('./post-details')();
require('./bootstrap');
require('./evanyou');
require('./leancloud')();
require('./share')();
require('./scroll');
require('./since');
require('./title');
require('./type');
// require('./kanban');
require('./mix');
require('./clipboard');
require('./pjax');
require('./online');
require('./search');
require('./zoom')();
require('./aplayer');
