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

    /*** SECTION FOR COLOR SENSING ***/
    // set up some sample squares
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

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
    resizeCanvas();

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

});