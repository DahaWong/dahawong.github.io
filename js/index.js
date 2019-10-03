$(function() {
  $(".page-number").each(function(){
    console.log($(this).text())
    if ($(this).text()=="1F"){
        $(this).addClass("active-page")
    }
  })
})