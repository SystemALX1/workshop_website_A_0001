//alert("Wanna join my free giftcards giveaway? Subscibe to my channel, like the video, and turn notifications on.");
//alert(7 + 77);
//alert(7 * "77");
//alert(7 + "77");
$(document).ready(function() {
    //alert($("#buy-guns").text());
    $("#lie-button").click(function(){
        $("#tutorial-list").append("<li class='list-item' id='a-lie'>" + $("#new-lie").val() + "</li>");
        $("#new-lie").val("");
    });
});