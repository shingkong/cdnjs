/*!
* Qoopido.js library v3.2.4, 2014-5-12
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(e){window.qoopido.register("support/element/video/ogg",e,["../../../support","../video"])}(function(e,o,t,i,n,r){"use strict";var d=e.support;return d.addTest("/element/video/ogg",function(o){e["support/element/video"]().then(function(){var e=d.pool?d.pool.obtain("video"):r.createElement("video");e.canPlayType('video/ogg; codecs="theora, vorbis"')?o.resolve():o.reject(),e.dispose&&e.dispose()},function(){o.reject()}).done()})});