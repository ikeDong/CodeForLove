// Generated by CoffeeScript 1.12.7
(function() {
  var codeTime, commentTime, finalStyle, isOn, openComment, skip, styles, writeStyleChar, writeStyles;

  styles = "/*\n * \"冬与鹿\"💕 v0.0.1\n * Authored by dong\n */\n\nbody {\n  background-color: #1a1c24; color: #fff;\n  font-size: 1.0rem; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/*\n * ...\n * ...hello?\n * 可以看到吗?\n * Ok，Thank you for being here!\n * 这里是冬与鹿的站点。\n * 不过……看上去似乎有些简陋……\n * 稍等，让我装饰一下。\n */\n\npre {\n  position: fixed;\n  top: 30px; bottom: 30px;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n/*\n * 等一下!!\n * 这可不行, 这个代码看得让人头晕。\n * 我需要语法高亮……\n * Colors based on Base16 Ocean Dark\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #c66c75; }\n.selector .key { color: #c66c75; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n\n/*\n * 害，这个代码块太占地方了……\n * 我们把它移动一下吧。\n */\n\n@media screen and (max-width: 768px) {\n    pre { left: 6%;right: 6%;top: 50%; }\n}\n\n@media screen and (min-width: 768px) {\n    pre { width: 48%;left: 50%;bottom: 30px; }\n}\n\n/* 先把标题调整一下。*/\n\n@media screen and (max-width: 768px) {\n    #title {\n        position: fixed;\n        width: 300px; height: 100px;\n        left: 0; right: 0;\n        -webkit-transform: scale(0.95);\n        transform: scale(0.95);\n        color: #b0f8e9;\n        font-size: 35px;\n    }\n}\n\n@media screen and (min-width: 768px) {\n    #title {\n      position: fixed;\n      width: 300px; height: 100px;\n      top: calc(30% - 150px); left: calc(25% - 150px);\n      text-align: center;\n      font-size: 45px;\n      color: #b0f8e9;\n      -webkit-transform: scale(0.95);\n              transform: scale(0.95);\n    }\n}\n\n#title::before{\n  content: attr(text);\n  position: absolute;\n  z-index: 10;\n  color:pink;\n  -webkit-mask:linear-gradient(to left, red, transparent );\n}\n\n/* 再调整一下计时器。*/\n\n@media screen and (max-width: 768px) {\n    #time {\n        position: fixed;\n        width: 300px; height: 100px;\n        top: calc(45%); left: calc(45%);\n        left: 0; right: 0;\n        text-align: center;\n        color: #f59e9e;\n        font-size: 18px;\n        -webkit-transform: scale(0.95);\n        transform: scale(0.95);\n    }\n}\n\n@media screen and (min-width: 768px) {\n    #time {\n      position: fixed;\n      width: 700px; height: 100px;\n      top: calc(85% - 150px); left: calc(15% - 150px);\n      text-align: center;\n      color: #f59e9e;\n      font-size: 35px;\n      -webkit-transform: scale(0.95);\n              transform: scale(0.95);\n    }\n}\n\n\n\n/* \n * 顺眼多啦！\n * 接下来我们再画一颗心!\n */\n\n@media screen and (max-width: 768px) {\n    #heart, #echo {\n        position: fixed;\n        width: 300px; height: 300px;\n        margin: 30px auto;\n        left: 0; right: 0;\n        text-align: center;\n        -webkit-transform: scale(0.95);\n        transform: scale(0.95);\n    }\n}\n\n@media screen and (min-width: 768px) {\n    #heart, #echo {\n      position: fixed;\n      width: 300px; height: 300px;\n      top: calc(50% - 150px); left: calc(25% - 150px);\n      text-align: center;\n      -webkit-transform: scale(0.95);\n              transform: scale(0.95);\n    }\n}\n\n#heart { z-index: 8; }\n#echo  { z-index: 7; }\n\n#heart::before, #heart::after, #echo::before, #echo::after {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #c66c75;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n}\n\n#heart::before, #echo::before {\n  left: 150px;\n}\n\n#heart::after, #echo::after {\n  left: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n/* 需要一点阴影。 */\n\n#heart::after {\n  box-shadow:\n    inset -6px -6px 0px 6px rgba(255,255,255,0.1);\n}\n\n#heart::before {\n  box-shadow:\n    inset 6px 6px 0px 6px rgba(255,255,255,0.1);\n}\n\n/*\n * 接下来就让这颗心跳起来吧！\n */\n\n@-webkit-keyframes heartbeat {\n  0%, 100% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n  }\n  50% {\n    -webkit-transform: scale(1.00);\n            transform: scale(1.00);\n  }\n}\n\n@keyframes heartbeat {\n  0%, 100% { transform: scale(0.95); }\n  50%      { transform: scale(1.00); }\n}\n\n@-webkit-keyframes echo {\n  0%   {\n    opacity: 0.1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n}\n\n@keyframes echo {\n  0%   {\n    opacity: 0.1;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n/*\n * 那么现在让它跳起来吧！\n */\n\n#heart, #echo {\n  -webkit-animation-duration: 2000ms;\n          animation-duration: 2000ms;\n  -webkit-animation-timing-function:\n    cubic-bezier(0, 0, 0, 1.74);\n          animation-timing-function:\n            cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n#heart {\n  -webkit-animation-name: heartbeat;\n          animation-name: heartbeat;\n}\n#echo {\n  -webkit-animation-name: echo;\n          animation-name: echo;\n}\n\n/*\n * 要来咯~！\n */\n\n#heart, #echo {\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n\n/*\n * 亲爱哒! 爱你哦!\n * 一直一直爱你哦!\n */\n\n/*\n * \"冬与鹿\" v0.0.1\n * Robot rights protected under BOT License & Apache2 license\n * Inspired by pen#PwLXXP\n * 谨以此网页献给我最爱的 鹿 💕\n */\n\n ";

  finalStyle = styles;

  openComment = false;

  isOn = true;

  writeStyleChar = function(which) {
    if (which === '/' && openComment === false) {
      openComment = true;
      styles = $('#style-text').html() + which;
    } else if (which === '/' && openComment === true) {
      openComment = false;
      styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
    } else if (which === ':') {
      styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
    } else if (which === ';') {
      styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
    } else if (which === '{') {
      styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
    } else {
      styles = $('#style-text').html() + which;
    }
    $('#style-text').html(styles);
    return $('#style-tag').append(which);
  };

  writeStyles = function(message, index, interval) {
    var pre;
    if (index < message.length) {
      pre = document.getElementById('style-text');
      pre.scrollTop = pre.scrollHeight;
      writeStyleChar(message[index++]);
      if (isOn) {
        return setTimeout((function() {
          return writeStyles(message, index, openComment ? commentTime : codeTime);
        }), interval);
      }
    }
  };

  skip = function() {
    isOn = false;
    return setTimeout((function() {
      var pre;
      $('#style-text').html(finalStyle);
      $('#style-tag').html(finalStyle);
      pre = document.getElementById('style-text');
      return pre.scrollTop = pre.scrollHeight;
    }), 2 * commentTime);
  };

  $('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"heart\"><i></i></span>\n  <div id=\"title\" text=\"冬与鹿\" >冬与鹿</div>\n  <span id=\"time\" class=\"time\" ><i></i></span>\n<pre id=\"style-text\"></pre>\n  <div style = 'position: fixed;left: 30px;bottom: 10px;'>\n    <a id='skipAnimation'><i class=\"fa fa-rocket\"></i> 跳过动画</a>\n    <a style='color: #fff' href='https://ikedong.cn'><i class=\"fa fa-repeat\" aria-hidden=\"true\"></i> 重新播放</a>\n    <a style='color: #fff' target=\"_blank\" href='https://blog.ikedong.cn/'><i class=\"fa fa-heart\"></i> '冬与鹿'的博客</a>\n    <a style='color: #fff' target=\"_blank\" href='https://github.com/ikeDong/CodeForLove/'><i class=\"fa fa-github\"></i> Github</a>\n  </div>");

  commentTime = 60;

  codeTime = 20;

  $(document).on('ready page:load', function() {
    return $('#skipAnimation').click(function() {
      return skip();
    });
  });

  writeStyles(styles, 0, commentTime);

}).call(this);
