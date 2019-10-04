$(function() {
  $(".page-number").each(function(){
    if ($(this).text()=="1F"){
        $(this).addClass("active-page")
    }
  })


  $("button").each(function(){
    let up = $($(this).filter(".upstair")[0])
    let down = $($(this).filter(".downstair")[0])
    let img = $($(this).find("img")[0])

    function isUp(button){
        return (up[0]!==undefined)?true:false
    }

    $(this).mousedown(function(){
        if (isUp($(this))){
            $('html, body').animate({scrollTop:0}
                ,4000)          
        }else{
            $('html, body').animate({scrollTop:$('.from-to').offset().top - $(window).height()},5000)          
        }
        img.attr("src","/img/active-triangle.png")
    })

    $(this).mouseup(function(){
        $('html, body').stop()
        img.attr("src","/img/triangle.png")
        img.removeClass("active-button")
    })
  })
})
