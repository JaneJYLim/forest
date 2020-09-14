
//서브메뉴
$("#mainMenu li").mouseover(function(){
    $(this).children(".subMenu").stop().slideDown();
});

$("#mainMenu li").mouseout(function(){
    $(this).children(".subMenu").stop().slideUp();
});

//슬라이드
function fnSlide() {
    $("#slideShuttleFrame").animate({"margin-left":"-300px"}, 1000, function(){
        $("#slideShuttleFrame").css({"margin-left":"0"});
        $("#slideShuttleFrame a:first").insertAfter("#slideShuttleFrame a:last");
    });
}
setInterval(fnSlide, 3000);

//공지사항, 보도자료
$("#bbsSide #first").click(function(){
    $(this).children("i").addClass("fa-check-circle");
    $("#second>i").removeClass("fa-check-circle");

    $(this).addClass("bbsBtn");
    $("#second").removeClass("bbsBtn");

    document.querySelector("#first span").innerHTML="";
    document.querySelector("#second span").innerHTML=" · ";
});
$("#bbsSide #second").click(function(){
    $(this).children("i").addClass("fa-check-circle");
    $(this).children("i").addClass("far");

    $("#first>i").removeClass("fa-check-circle");
    
    $(this).addClass("bbsBtn");
    $("#first").removeClass("bbsBtn");
    
    document.querySelector("#first span").innerHTML=" · ";
    document.querySelector("#second span").innerHTML="";
    
});