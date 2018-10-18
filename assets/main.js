$(document).ready(function () {
    $(".sidenav a").click(function () {
        var txt = this.text;
        if (txt.length > 19) {
            txt = txt.substring(0, 19) + ' ...';
        }
        $('#title').html(txt);
    });

    $(".tab").click(function () {
        $(".tab").removeClass("active");
        $(this).addClass("active");
    });
    $('#title').html($(".sidenav li.active > a").text());
});