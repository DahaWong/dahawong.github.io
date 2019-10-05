$(function() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    // console.log(currentHour)
    function footerDarken(){
        $(".rss").attr("src","/img/rss@dark.png")
        $(".newsletter").attr("src","/img/newsletter@dark.png")
        $(".share").attr("src","/img/share@dark.png")
    }

    function footerLighten(){
        $(".rss").attr("src","/img/rss.png")
        $(".newsletter").attr("src","/img/newsletter.png")
        $(".share").attr("src","/img/share.png")
    }

    if ((currentHour >= 6) && (currentHour <= 19)){
        $(".theme-container").addClass("light")
        footerLighten()
        if ($("body").find(".dark")[0] === undefined){
            $(".theme-container").removeClass("dark")
        }

    }else{
        $(".theme-container").addClass("dark")
        footerDarken()
        if ($("body").find(".light")[0] === undefined){
            $(".theme-container").removeClass("light")
        }
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
