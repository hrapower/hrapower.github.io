$( document ).ready(function() {
    $("#like").click(function(){
        var likes = $("#reactions").text();
        likes++;
        $("#reactions").text(likes);
    });

    $("#comment").click(function(){
        $("#comentario").toggle("slow");
    });
});