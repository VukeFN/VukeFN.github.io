$(document).ready(function() {
    $("#search-submit1").click(function() {
        const searchInput = $("#search-input1").val(String);
        const videoTitle = $(".video p").text();
        console.log(searchInput && videoTitle);
    });

    $("#search-submit2").click(function() {
        const searchInput = $("#search-input1").val();
        alert(searchInput);
    });
});