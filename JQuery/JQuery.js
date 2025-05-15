$(document).ready(function() {
    $(".menu-btn").click(function() {
        $(".menu-btn").toggleClass("active");
        if ($(".menu-btn").is(".active")){
            $(".side-menu").css("left", "0");
            $(".menu-btn").css("left", "250px")
            $("body").addClass("menu-open");
        }
        else{
            $(".side-menu").css("left", "-250px");
            $(".menu-btn").css("left", "0")
            $("body").removeClass("menu-open");
        }
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.side-menu').length && 
            !$(event.target).is('.menu-btn')) {
            $(".side-menu").css("left", "-250px");
            $(".menu-btn").css("left", "0").toggleClass("active");
            $("body").removeClass("menu-open");
        }
    });
});