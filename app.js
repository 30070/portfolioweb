
$('document').ready(function () {

    $("#menu-icon").click(function () {
        $(this).toggleClass('bx-x');
        $('.navbar').toggleClass('menuactive');
    });

    $('.light').click(() => {
        $('.pointer').toggleClass('pointerlight')
        $('body').toggleClass('light-mode')
        if ($('body').hasClass('light-mode')) {
            $('.navbar a').css("color", "black")
            $('.navbar').css("backgroundColor", "white")
        } else {
            $('.navbar a').css("color", "white")
            $('.navbar').css("backgroundColor", "black")

        }
    })
    $(window).scroll(() => {
        const hug = $('.hug');
        const god = $('.god');
        const bigcircle = $('.bigcircle');
        let height = $(window).scrollTop();
        if (height >= 150 && height <= 1125) {
            hug.addClass('hactive');
        }
        else {
            hug.removeClass('hactive');
        }
        if (height >= 515 && height <= 1325) {
            god.addClass('gactive');
        }
        else {
            god.removeClass('gactive');
        }
        if (height >= 1040 && height <= 2000) {
            bigcircle.addClass('active');
        }
        else {
            bigcircle.removeClass('active');
        }
    })
})