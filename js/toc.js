$(function() {
  let throttle = function(fn, delay, mustRunDelay){
    let timer = null;
    let t_start;
    return function(){
      let context = this, args = arguments, t_curr = +new Date();
      clearTimeout(timer);
      if(!t_start){
        t_start = t_curr;
      }
      if(t_curr - t_start >= mustRunDelay){
        fn.apply(context, args);
        t_start = t_curr;
      }else {
        timer = setTimeout(function(){
          fn.apply(context, args);
        }, delay);
      }
    };
  };

  $(window).scroll(throttle(function (event) {
    let scrollOffset = $(window).scrollTop()
    let firstId = $("h3").first().attr("id")
    let activeId = '#' + firstId
    headers = $(".post-content").find("h2,h3,h4")
    headers.each(function(){
      let header = $(this)
      let headerOffset = header.offset().top - scrollOffset
      if (headerOffset < 300){
        activeId = "#" + header.attr("id")
      }
    })
    let activeLink = $('.toc-link.active')
    $('.toc-link').removeClass('active')
    let _this = $('.toc-link[href="' + activeId + '"]')
    _this.addClass('active')
  }, 50, 100))


  $(".toc-link").click(function(){
    let target = $(this).attr("href")
    let offset = $(target).offset().top - 299
    $('html, body').animate({scrollTop: offset}
      ,1200,function(){
        window.location.hash = target
      })
  })
})

