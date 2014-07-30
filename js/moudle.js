/**
 * Created by lenovo on 2014/7/30.
 */
var height = document.documentElement.clientHeight,top1;
//alert(height);
$(".page").on("touchstart",function(e){
   // console.log(e.touches);
    var i = $(this).index();
    console.log(i);
    top1 = event.touches[0].clientY;
    $(document).on("touchmove",function(){
        top2 = event.touches[0].clientY;
        console.log(top1,top2);

    })
})