$(function() {
    console.log( "ready!" );
    $("#datetime").html(showDateTime());
    $("#sky").attr("src","sky"+getMap()+".jpg");
    $(".button").click(function(){
        location.reload(true);
    });
});