$(function() {
  // let activeAnchor = ''
  // let scrollOffset = $(window).scrollTop()
  // headers = $(".post-content").find("h2,h3,h4")
  // headers.each(function(){
  //   let header = $(this)
  //   let headerOffset = header.offset().top - scrollOffset
  //   if (headerOffset < 25){
  //     let activeAnchor = "#" + header.attr("id")
  //     console.log(activeAnchor)
  //   }
  // })

  // $(".toc-link").each(function(){
  //   if ($(this).attr("href") == activeAnchor){
  //     console.log($(this))
  //     var _this = $('.toc-link[href="' + activeAnchor + '"]')
  //     _this.addClass('active')
  //   }
  // })
  var throttle = function(fn, delay, mustRunDelay){
    var timer = null;
    var t_start;
    return function(){
        var context = this, args = arguments, t_curr = +new Date();
        clearTimeout(timer);
        if(!t_start){
            t_start = t_curr;
        }
        if(t_curr - t_start >= mustRunDelay){
            fn.apply(context, args);
            t_start = t_curr;
        }
        else {
            timer = setTimeout(function(){
                fn.apply(context, args);
            }, delay);
        }
    };
  };

  $(window).scroll(throttle(function (event) {
    var currentTop = $(window).scrollTop()
    findHeadPosition(currentTop)
    function updateAnchor (anchor) {
      if (window.history.replaceState && anchor !== window.location.hash) {
        window.history.replaceState(undefined, undefined, anchor)
      }
    }

    function findHeadPosition (top) {
      if ($('.toc-link').length === 0) {
        return false
      }

      var list = $('.post-content').find('h2,h3,h4')
      let firstId = $("h3").first().attr("id")
      var currentId = '#' + firstId
      list.each(function () {
        var head = $(this)
        if (top > head.offset().top - 400) {
          currentId = '#' + $(this).attr('id')
          // console.log(currentId)
        }
      })

      if (currentId === '') {
        $('.toc-link').removeClass('active')
      }

      var currentActive = $('.toc-link.active')
      if (currentId && currentActive.attr('href') !== currentId) {
        updateAnchor(currentId)

        $('.toc-link').removeClass('active')
        var _this = $('.toc-link[href="' + currentId + '"]')
        _this.addClass('active')

      }
    }
  }, 50, 100))
})

