$(document).ready(function () {

    $(".top>.l_top").mouseenter(function () {
        $(".bottom").stop().animate({ "height": "430px" },50);
        // $(".bottom").css({"border-bottom":"1px solid gray"});

    });
    $(".top>.l_top").mouseleave(function () {
        $(".bottom").stop().animate({ "height": "100px" },50);

    });
});


