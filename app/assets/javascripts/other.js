$(document).ready(function() {
    
    /*** SECTION FOR MORE OR LESS TEXT ***/
    // Configure/customize these variables.
    var showChar = 200;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "(more)";
    var lesstext = "(less)";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

    /*** SECTION FOR RESIZING ***/
    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeObjs, false);

    function resizeObjs() {
        resizeCanvas();
    }

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    function resizeCanvas() {
            var chartSize = document.getElementById('chart').offsetWidth * 2.0 / 3.0;
            canvas.width = chartSize;
            canvas.height = chartSize;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff(); 
    }
    
    function drawStuff() {
        // context.fillStyle = "rgb(255,0,0)";
        // context.fillRect(0, 0, 50, 50);
        // context.fillStyle = "rgb(0,0,255)";
        // context.fillRect(55, 0, 50, 50);
        var chartSize = document.getElementById('chart').offsetWidth * 2.0 / 3.0;
        var base_image = new Image();
        base_image.setAttribute('crossOrigin', 'Anonymous');
        base_image.src = 'https://dl.dropboxusercontent.com/s/uplzpw44vva91a1/test.png';
        base_image.onload = function(){
            context.drawImage(base_image, 0, 0, chartSize, chartSize * base_image.height / base_image.width);
        }
    }

    resizeObjs();
    
    /*** SECTION FOR COLOR SENSING ***/
    $('#canvas').mousemove(function(e) {
        var pos = findPos(this);
        var x = e.pageX - pos.x;
        var y = e.pageY - pos.y;
        var coord = "x=" + x + ", y=" + y;
        var c = this.getContext('2d');
        var p = c.getImageData(x, y, 1, 1).data; 
        var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
        $('#status').html(coord + "<br>" + hex);
    });

    function findPos(obj) {
        var curleft = 0, curtop = 0;
        if (obj.offsetParent) {
            do {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return { x: curleft, y: curtop };
        }
        return undefined;
    }

    function rgbToHex(r, g, b) {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    }

    /*** SECTION FOR DROPDOWN MENUS ***/
    $(".dropdown-menu > li > a.trigger").on("click",function(e){
        var current=$(this).next();
        var grandparent=$(this).parent().parent();
        if($(this).hasClass('left-caret')||$(this).hasClass('right-caret'))
            $(this).toggleClass('right-caret left-caret');
        grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
        grandparent.find(".sub-menu:visible").not(current).hide();
        current.toggle();
        e.stopPropagation();
    });
    $(".dropdown-menu > li > a:not(.trigger)").on("click",function(){
        var root=$(this).closest('.dropdown');
        root.find('.left-caret').toggleClass('right-caret left-caret');
        root.find('.sub-menu:visible').hide();
    });



});

/*** SECTION FOR DROPDOWN RENAMING ***/
function rename(s) {
    document.getElementById("ca-county").innerHTML = s;
}