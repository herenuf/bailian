!(function(window, document) {
 	Object.prototype.extend = function(obj) {
    var that = this;
    obj = obj || {};
    Object.keys(that).forEach(function(val, idx) {
      obj[val] = obj[val] || that[val];
    });
    return obj;
  }
  FPSlide({
    slideBox: 'slide',
    progress: 'progress',
    during: 5,
    switchSpeed: 0.4
  });

  function FPSlide(option) {
    var condition = {
      slideBox: 'slide',
      progress: 'progress',
      during: 5,
      switchSpeed: 0.5
    }
    condition = condition.extend(option);
    var slideBox = document.getElementById(condition.slideBox);
    var slider = slideBox.children[0];
    var slideContent = slider.children;
    var width = slideBox.offsetWidth;
    var progress = document.getElementById(condition.progress);
    var progressBar = progress.children;
    var progressBarWidth = progress.children[0].offsetWidth * 10;
    var length = slideContent.length - 1;
    var currentPage = 0;
    var nextPage = 0;
    var switchToken = null;
    var waitToken = null;
    var progressToken = null;
    var progressWaitToken = null;
    var during = condition.during;
    var switchSpeed = condition.switchSpeed;
    var sliderLeft = 0;

    function swicthPage(current, next, direction) {
      currentPage = next;
      direction = direction === 'r' ? false : true;
      slideContent[next].className = 'active';
      slideContent[next].style = 'display: block;left: ' + (direction ? '306px' : '-306px');
      progressBar[current].className = '';
      switchToken = setInterval(function() {
        if (sliderLeft < width) {
          sliderLeft += (width / 100) / switchSpeed;
          slider.style = 'width: 612px; left: ' + (direction ? '-' + sliderLeft + 'px;' : sliderLeft + 'px;');
        } else {
          sliderLeft = 0;
          slider.style = 'left:0; width:306px;';
          slideContent[current].style = '';
          slideContent[current].className = '';
          slideContent[next].style = 'display: block;';
          clearInterval(switchToken);
          switchToken = null;
        }
      }, 10);
    }

    function switchProgess(current, next) {
      var barWidth = 0;
      //进度条
      progressToken = setInterval(function() {
        if (barWidth < (during - switchSpeed) * 100) {
          barWidth++;
          progressBar[next].className = 'active';
          progressBar[next].children[0].style = 'width:' + barWidth / (during - switchSpeed) + '%';
        } else {
          progressBar[next].className = '';
          progressBar[next].children[0].style = '';
          barWidth = 0;
          clearInterval(progressToken);
          progressToken = null;
        }
      }, 10);
    }

    function switcher(current, next, direction, ifProgess) { //幻灯片切换器  num 要切换到的页
      swicthPage(current, next, direction);
      switchProgess(current, next);
    }
    switcher(length, 0, 'l');

    function autoSwitch() {
      waitToken = setInterval(function() {
        if (switchToken === null && progressToken === null) { //防止两个setTimeout线程打架
          nextPage = currentPage === length ? 0 : currentPage + 1;
          switcher(currentPage, nextPage, 'l');
        }
      }, during * 1000);
    }
    autoSwitch();

    function pause() {
      if (sliderLeft === 0) {
        clearInterval(waitToken);
        waitToken = null;
        clearInterval(progressToken);
        progressToken = null;
        clearInterval(switchToken);
        switchToken = null;
        clearInterval(progressWaitToken);
        progressWaitToken = null;
        sliderLeft = 0;
        progressBar[currentPage].children[0].style = '';
      }
    }

    function proceed() {
      if (waitToken === null && sliderLeft === 0) {
        autoSwitch();
        switchProgess(currentPage, nextPage);
      }
    }
    slider.addEventListener('mouseover', pause);
    progress.addEventListener('mouseover', pause);
    slider.addEventListener('mouseout', proceed);
    progress.addEventListener('mouseout', proceed);

    progress.onclick = function(dom) {
      if (sliderLeft === 0) {
        var thisPage = dom.target || dom.srcElement;
        thisPage = thisPage.nodeName.toUpperCase() === 'LI' ? thisPage : thisPage.parentNode;
        nextPage = thisPage.getAttribute('page-data') >> 0;
        if (nextPage > currentPage) {
          pause();
          switcher(currentPage, nextPage, 'l');
          autoSwitch();
        } else if (nextPage < currentPage) {
          pause();
          switcher(currentPage, nextPage, 'r');
          autoSwitch();
        }
      }
    }
  };
})(window, document);