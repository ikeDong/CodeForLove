(function() {
  var codeTime, commentTime, finalStyle, isOn, openComment, skip, styles, writeStyleChar, writeStyles;

  // 完美对齐原版打字CSS，加入 will-change 加速以减少回流抖动
  styles = `/*\n * \"冬与鹿\"💕 v0.0.1\n * Authored by dong\n */\n\nbody {\n  background-color: #1a1c24; color: #fff;\n  font-size: 1.0rem; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/*\n * ...\n * ...hello?\n * 可以看到吗?\n * Ok，Thank you for being here!\n * 这里是冬与鹿的站点。\n * 不过……看上去似乎有些简陋……\n * 稍等，让我装饰一下。\n */\n\npre {\n  position: fixed;\n  top: 30px; bottom: 30px;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n  will-change: transform;\n}\n\n/*\n * 等一下!!\n * 这可不行, 这个代码看得让人头晕。\n * 我需要语法高亮……\n * Colors based on Base16 Ocean Dark\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #c66c75; }\n.selector .key { color: #c66c75; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n\n/*\n * 害，这个代码块太占地方了……\n * 我们把它移动一下吧。\n */\n\n@media screen and (max-width: 768px) {\n    pre { left: 6%;right: 6%;top: 380px;bottom: 90px; }\n}\n\n@media screen and (min-width: 768px) {\n    pre { width: 48%;left: 50%;bottom: 30px; }\n}\n\n/* 先把标题调整一下。*/\n\n@media screen and (max-width: 768px) {\n    #title { position: fixed; width: 300px; height: 40px; top: 25px; left: 0; right: 0; margin: 0 auto; text-align: center; -webkit-transform: scale(0.8); transform: scale(0.8); font-size: 32px; font-weight: bold; background: -webkit-linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 2px 10px rgba(255, 154, 158, 0.6)); font-family: sans-serif; z-index: 15; }\n}\n\n@media screen and (min-width: 768px) {\n    #title { position: fixed; width: 300px; height: 100px; top: calc(30% - 150px); left: calc(25% - 150px); text-align: center; font-size: 52px; font-weight: bold; background: -webkit-linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 2px 12px rgba(255, 154, 158, 0.6)); -webkit-transform: scale(0.95); transform: scale(0.95); font-family: sans-serif; }\n}\n\n#title::before { display: none; }\n\n/* 再调整一下计时器。*/
@media screen and (max-width: 768px) {
    #time {
        position: fixed;
        width: 100%;
        top: 240px;\n        z-index: 10;
        left: 0;
        text-align: center;
        color: #f59e9e;
        font-size: 18px;
        line-height: 1.6;
        -webkit-transform: scale(0.95);
        transform: scale(0.95);
        text-shadow: 0 0 10px rgba(245, 158, 158, 0.4);
    }
}

@media screen and (min-width: 768px) {
    #time {
      position: fixed;
      width: 700px;
      top: calc(85% - 130px); left: calc(15% - 150px);
      text-align: center;
      color: #f59e9e;
      font-size: 35px;
      line-height: 1.6;
      -webkit-transform: scale(0.95);
              transform: scale(0.95);
      text-shadow: 0 0 15px rgba(245, 158, 158, 0.5);
    }
}

.digit {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: 700;
  color: #ffcbd5;
  text-shadow: 0 0 10px rgba(255, 94, 126, 0.8), 0 0 20px rgba(255, 94, 126, 0.4);
  margin: 0 6px;
  font-size: 1.15em;
}

/* \n * 顺眼多啦！\n * 接下来我们再画一颗心!\n */\n\n@media screen and (max-width: 768px) {\n    #heart, #echo {\n        position: fixed;\n        width: 300px; height: 300px;\n        top: 60px;\n        margin: 0 auto;\n        z-index: 8;\n        left: 0; right: 0;\n        text-align: center;\n        -webkit-transform: scale(0.48);\n        transform: scale(0.48);\n    }\n}\n\n@media screen and (min-width: 768px) {\n    #heart, #echo {\n      position: fixed;\n      width: 300px; height: 300px;\n      top: calc(50% - 150px); left: calc(25% - 150px);\n      text-align: center;\n      -webkit-transform: scale(0.95);\n              transform: scale(0.95);\n    }\n}\n\n#heart { z-index: 8; }\n#echo  { z-index: 7; }\n\n#heart::before, #heart::after, #echo::before, #echo::after {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #ff5e7e;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n}\n\n#heart::before, #echo::before {\n  left: 148.5px;\n}\n\n#heart::after, #echo::after {\n  left: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n/* 给心添加一些高光！ */\n\n#heart, #echo {\n  filter: drop-shadow(0 8px 30px rgba(255, 94, 126, 0.65)) drop-shadow(0 2px 10px rgba(255, 94, 126, 0.4));\n}\n\n/*\n * 接下来就让这颗心跳起来吧！\n */\n\n@-webkit-keyframes heartbeat {\n  0%, 100% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n  }\n  50% {\n    -webkit-transform: scale(1.00);\n            transform: scale(1.00);\n  }\n}\n\n@keyframes heartbeat {\n  0%, 100% { transform: scale(0.95); }\n  50%      { transform: scale(1.00); }\n}\n\n@-webkit-keyframes echo {\n  0%   {\n    opacity: 0.1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n}\n\n@keyframes echo {\n  0%   {\n    opacity: 0.1;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n/*\n * 马上就好！\n */\n\n#heart, #echo {\n  -webkit-animation-duration: 2000ms;\n          animation-duration: 2000ms;\n  -webkit-animation-timing-function:\n    cubic-bezier(0, 0, 0, 1.74);\n          animation-timing-function:\n            cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n#heart {\n  -webkit-animation-name: heartbeat;\n          animation-name: heartbeat;\n}\n#echo {\n  -webkit-animation-name: echo;\n          animation-name: echo;\n}\n\n/*\n * 要来咯~！\n */\n\n#heart, #echo {\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n\n/*\n * 亲爱哒! 爱你哦!\n * 一直一直爱你哦!\n */\n\n/*\n * \"冬与鹿\" v0.0.1\n * Robot rights protected under BOT License & Apache2 license\n * 谨以此网页献给我最爱的 鹿 💕\n */\n\n `;

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

  var showLinks = function() {
    $('#skipAnimation').fadeOut(300, function() {
      $('#btn-replay').fadeIn(500);
      $('#btn-github').fadeIn(500);
    });
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
    } else {
      showLinks();
    }
  };

  skip = function() {
    isOn = false;
    setTimeout(function() {
      var pre;
      $('#style-text').html(finalStyle);
      $('#style-tag').html(finalStyle);
      pre = document.getElementById('style-text');
      pre.scrollTop = pre.scrollHeight;
      showLinks();
    }, 2 * commentTime);
  };

  $('body').append(`  <style id="style-tag"></style>
<span id="echo"></span>
<span id="heart"><i></i></span>
  <div id="title" text="冬与鹿" >冬与鹿</div>
  <span id="time" class="time"><i></i></span>
<pre id="style-text"></pre>
  <div class="btn-container">
    <a id='skipAnimation'><i class="fa fa-rocket"></i> 跳过动画</a>
    <a id='btn-replay' style='display: none; color: #fff' href=''><i class="fa fa-repeat" aria-hidden="true"></i> 重新播放</a>
    <a id='btn-github' style='display: none; color: #fff' target="_blank" href='https://github.com/ikeDong/CodeForLove/'><i class="fa fa-github"></i> Github</a>
  </div>`);

  commentTime = 60;
  codeTime = 20;

  $(document).on('ready page:load', function() {
    return $('#skipAnimation').click(function() {
      return skip();
    });
  });

  // 页面内的高性能计时器
  const starttime = new Date("2019/05/13 00:00:00");
  function updateTimer() {
    const nowtime = new Date();
    const time = nowtime - starttime;
    const day = Math.floor(time / 1000 / 60 / 60 / 24);
    const hour = String(Math.floor((time / 1000 / 60 / 60) % 24)).padStart(2, '0');
    const minute = String(Math.floor((time / 1000 / 60) % 60)).padStart(2, '0');
    const second = String(Math.floor((time / 1000) % 60)).padStart(2, '0');
    $('.time').html(`冬与鹿已相恋<br><span class="digit">${day}</span> 天 <span class="digit">${hour}</span> 时 <span class="digit">${minute}</span> 分 <span class="digit">${second}</span> 秒`);
  }
  setInterval(updateTimer, 1000);
  updateTimer();

  writeStyles(styles, 0, commentTime);

}).call(this);
