/*** FOR FUNCTIONALITY SHARED BY ALL WEBPAGES ***/

/*** FOR HORIZONTAL BUT NOT VERTICALLY SCROLLING NAVBAR ***/
function setTopBar() {
    var $horizontal = $('#horizontal');

    $(window).scroll(function () {
        var s = $(this).scrollLeft(),
            d = $(document).width(),
            c = $(this).width();

        scrollPercent = (s / (d - c));

        var position = (scrollPercent * ($(document).width() - $horizontal.width()));
        
        $horizontal.css({
            'left': position
        });
    });
}

function initShared() {
    setTopBar();
}

initShared();