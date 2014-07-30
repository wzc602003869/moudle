/**
 * Created by lenovo on 2014/7/30.
 */
var height = document.documentElement.clientHeight,top1;
alert(height);
$(".page").on("touchstart",function(e){
    console.log(e.touches);
    top1 = event.touches[0].clientY;
    alert(top1);
    $(document).on("touchmove")
})