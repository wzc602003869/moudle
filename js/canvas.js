/**
 * Created by Administrator on 2014/7/30.
 */
$("canvas").attr("width",width).attr("height",height);
var can = $("canvas")[0];
var ctx = can.getContext("2d");
var image = new Image();
image.onload = function(){
    ctx.drawImage(image,0,0,width,height);
}
image.src = "imgs/4.jpg";
$("canvas").on("touchstart",function(e){
    var x = e.touches[0].clientX,y = e.touches[0].clientY;
    ctx.lineWidth = 50;
    ctx.beginPath();
    ctx.globalAlpha = 1;
    ctx.lineJoin="round";
    ctx.globalCompositeOperation = "destination-out";
    ctx.arc(x,y,25,0,Math.PI*2);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    //ctx.strokeStyle = "white";
    ctx.moveTo(x,y);
    $(document).on("touchmove",function(e){
        var x1 = e.touches[0].clientX,y1 = e.touches[0].clientY;
        ctx.lineTo(x1,y1);
        x = x1;
        y = y1;
        ctx.stroke();
    })
    $(document).on("touchend",function(){
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(x,y,25,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
        var imgData = ctx.getImageData(0, 0,width,height),
            pixles = imgData.data,
            transPixs = [];
        for (var i = 0, j = pixles.length; i < j; i += 4) {
            var a = pixles[i + 3];
            if (a ==0) {
                transPixs.push(i);
            }
        }
        var px=(transPixs.length / (pixles.length / 4) * 100).toFixed(2);
        console.log(px);
        if(px>50){
            $("canvas").css("-webkit-transition","opacity 2s").css("opacity",0);
            setTimeout(function(){
                $("canvas").css("display","none");
            },2000);
        }
        $(document).off();
    })
    e.stopPropagation();
})
