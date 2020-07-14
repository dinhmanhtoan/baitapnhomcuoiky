
// $(document).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//         $('.footer').fadeIn();
//         console.log($(this).scrollTop())
//     } else if ($(this).scrollTop() < 100) {
//         $('.footer').fadeOut();
//         console.log($(this).scrollTop())
//     }
// });
$('.scroll-top').click(function () {
    $("html, body").animate({scrollTop: 0}, 600);
    return false;
});

// $(".js-toggle-menu").click(function () {
//     $(".promotion").show()
//     $(".menu").show()
//     $(".shop").show()
// })
$(".js-toggle-menu").on("click",hien)
function hien() {
    $(".promotion").fadeIn()
    $(".menu").fadeIn()
    $(".shop").fadeIn()
    $(".ext").fadeIn()
}
$(".ext").on("click",an)
function an() {
    $(".promotion").fadeOut()
    $(".menu").fadeOut()
    $(".shop").fadeOut()
    $(".ext").fadeOut()
}
// var sliderItem = $(".owl-stage-item");
// var slider = $("#idslider");
// var owl_prev = $(".owl-prev");
// var owl_next = $(".owl-next");
// var sliderItemWidth = sliderItem.width()
// var sliderWidth = slider.width()
// var count = 1 ;
// var lenghts = sliderItem.length;
// console.log(sliderWidth);
// console.log(lenghts);
// owl_next.on("click" ,function() {
//     if(count>=0){
//         slider.css("transform","translate3d("+count*sliderItemWidth+", 0px, 0px)");
//         count++;
//         console.log(count*sliderItemWidth)
//     }
//     if (count>lenghts) {
//         count = 0;
//         slider.css("transform","translate3d("+count*sliderItemWidth+", 0px, 0px)");
//     }
//     console.log(count)
// })
// owl_prev.on("click" ,function() {
 
//     if(count>=0){
//         slider.css("transform","translate3d("+-count*sliderItemWidth+", 0px, 0px)");
//         count --;
//         console.log(-count*sliderItemWidth)
//     }
//     if (count <= 0 ) {
//         count = lenghts;
//         slider.css("transform","translate3d("+-count*sliderItemWidth+", 0px, 0px)");
//     }

//     console.log(count)
// })