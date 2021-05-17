
$(document).ready(function(){
    $(".mobile-menu").hide();
    $("#alternate-nav").hide();
})
function scrollFunction(){
    const y = window.pageYOffset;
    if(y >= "280"){
        $("#nav-bar").hide();
        $("#alternate-nav").show();
    }else{
        $("#nav-bar").show();
        $("#alternate-nav").hide();
    }
}

function getYCoordinate(){
    var checker = $(".inactive-li").html();
    alert($("#output").html(x+=1));
}
