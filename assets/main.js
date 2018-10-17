$(document).ready(function () {
    $(".cross").hide();
    $(".submenu").hide();
    $(".hamburger").click(function () {
        $(".submenu").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function () {
        $(".submenu").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });

    $(".submenu a").click(function(){
        var txt = this.text;
        if(txt.length > 19){
            txt = txt.substring(0,19) + ' ...';
        }
        $('#title').html(txt);
    });

    $(".nav-item").click(function(){
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });

});