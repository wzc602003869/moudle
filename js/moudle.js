console.log($);
document.addEventListener("touchmove", function(e){
    e.preventDefault();
}, false);
var height = document.documentElement.clientHeight,width = document.documentElement.clientWidth,top1;
$(".page").on("touchstart",function(e){
    var i = $(this).index();
    var p = i-1;
    var q = i+1;
    if(i==0){
        p=$(".page").length-1;
    }else if(i==($(".page").length-1)){
        q=0;
    }
    top1 = event.touches[0].clientY;
    $(document).on("touchmove",function(){
        top2 = event.touches[0].clientY;
        if(top2>top1){
            var y = -height+top2-top1;
            var s = 1-(top2-top1)/height*0.2;
            var m = (height-s*height);
            var sca = "scale("+s+")";
            var str = "translate(0px,"+y+"px)";
            var str1 = " translate(0px,"+m+"px)";
            sca = sca+str1;
            $(".page").eq(i).css("-webkit-transform",sca);
            $(".page").eq(p).addClass("move").css("-webkit-transform",str);
        }else if(top2<top1){
            var y = height+top2-top1;
            var s = 1-(top1-top2)/height*0.2;
            var m = -(height-s*height) ;
            console.log(m);
            var sca = "scale("+s+")";
            var str = "translate(0px,"+y+"px)";
            var str1 = " translate(0px,"+m+"px)";
            sca = sca+str1;
            $(".page").eq(i).css("-webkit-transform",sca);
            $(".page").eq(q).addClass("move").css("-webkit-transform",str);
        }
        $(document).on("touchend",function(){
            if(top2<top1){
                $(".page").eq(q).addClass("action").css("-webkit-transform","translate(0px,0px)");
                $(".page").eq(i).addClass("action").css("-webkit-transform","translate(0px,"+(-height*0.2)+"px) scale(0.8)");
                setTimeout(function(){
                    $(".page").removeClass("action active move");
                    $(".page").eq(q).removeClass("action move").addClass("active");
                },200);
                $(document).off();
            }else{
                $(".page").eq(p).addClass("action").css("-webkit-transform","translate(0px,0px)");
                $(".page").eq(i).addClass("action").css("-webkit-transform","translate(0px,"+(height*0.2)+"px) scale(0.8)");
                setTimeout(function(){
                    $(".page").removeClass("action active move");
                    $(".page").eq(p).removeClass("action move").addClass("active");
                },200);
                $(document).off();
            }
        })

    })
})
var mus= 0,time;
$("#musicbtn").on("touchstart",function(e){
    clearTimeout(time);
    $(".musiccon").removeClass("animate");
    $(".musiccon").eq(mus).addClass("animate");
    time = setTimeout(function(){
        $(".musiccon").removeClass("animate");
    },2001)
    if(mus==0){
        $("#bgmp3")[0].play();
        mus=1;
    }else{
        $("#bgmp3")[0].pause();
        mus=0;
    }
    e.stopPropagation();
});
$(".window").on("touchstart",function(e){
    e.stopPropagation();
    var i = $(this).index();
    var left1 = event.touches[0].clientX,left2;
    var p = i-1;
    var q = i+1;
    if(i==0){
        p=$(".window").length-1;
    }else if(i==($(".window").length-1)){
        q=0;
    }
    $(".window").on("touchmove",function(e){
        left2 = event.touches[0].clientX;
    })
    $(document).on("touchend",function(e){
        if((left2-left1)>100){
            $(".window").eq(i).addClass("left").css("z-index",102);
            setTimeout(function(){
                $(".window").eq(i).css("z-index",100-i).removeClass("left");
            },200)
        };
        if((left1-left2)>100){
            $(".window").eq(i).addClass("right").css("z-index",102);
            setTimeout(function(){
                $(".window").eq(i).css("z-index",100-i).removeClass("right");
            },200)
        }
        $(".window").eq(p).css("z-index",101);
        $(document).off();
    });
})