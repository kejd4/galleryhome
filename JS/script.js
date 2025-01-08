$(".btn li").click(function(){
 $(".btn li").removeClass("active")
 $(this).addClass("active")

 let filterValue = $(this).attr('data-filter');
 $(".conbox").isotope({ filter: filterValue });
})

let grid = $('.conbox').isotope({
 itemSelector: '.box',
 columnWidth: ".box",
 transitionDuration: "0.5s",
 
});

$(".fancybox").fancybox();