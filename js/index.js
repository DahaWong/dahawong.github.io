$(function() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    // console.log(currentHour)
    if ((currentHour >= 6) && (currentHour <= 19)){
    }else{
        $("*").css("transition","1")
        $("body, .main-container").css("background-color","#303030")
        $(".article-title").css({"background-color":"#212121", "margin-bottom":"1rem"})
        $(".active-page").css("text-shadow","0 0 0.4rem white, 0 0 0.4rem #f5f5f5")
        $(".paginator-container").css("background-color","#151515")
        $("h1, h3, h4").css("color","#e5e5e5")
        $("p, li, a, .from-to").css("color","#d4d4d4")
        $("blockquote").css("border-left","0.07rem solid #BDBDBD")
        $(".toc-container").css("color","#bdbdbd")
    }

  $(".page-number").each(function(){
    if ($(this).text()=="1F"){
        $(this).addClass("active-page")
    }
  })


  $("button").each(function(){
    let up = $($(this).filter(".upstair")[0])
    let img = $($(this).find("img")[0])

    function isUp(button){
        return (up[0]!==undefined)?true:false
    }

    $(this).mousedown(function(){
        if (isUp($(this))){
            $('html, body').animate({scrollTop:0}
                ,4000)          
        }else{
            $('html, body').animate({scrollTop:$('.from-to').offset().top - $(window).height()},4000)          
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
