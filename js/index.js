$(function() {
  $(".page-number").each(function(){
    if ($(this).text()=="1F"){
        $(this).addClass("active-page")
    }
  })

  $("button").each(function(){
    $(this).mousedown(function(){
        let up = $(this).filter(".upstair")[0]
        let down = $(this).filter(".downstair")[0]
        let img = $(this).filter("img")[0]
        img.each(function(){
            $(this).attr("src","/img/active-triangle.png");
            $(this).addClass("active-button")
            console.log($('footer').offset().top - $(window).height())
            console.log($(window).scrollTop())
            $(window).scrollTop($('footer').offset().top - $(window).height())
        })
    })

    $(this).mouseup(function(){
        let img = $(this).find("img")
        img.each(function(){
            $(this).removeClass("active-button")
            $(this).attr("src","/img/triangle.png")
        })
    })


    // $(this).mouseup(function(){
    //     console.log("up")
    //     let img = $(this).find("img")
    //     img.each(function(){
    //         $(this).attr("src","/img/triangle.png")
    //     })
    })
})
