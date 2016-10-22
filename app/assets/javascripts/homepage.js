/*** JAVASCRIPT AND JQUERY FOR HOMEPAGE ***/

/*** 1. MAIN IDENTIFIER, 2...END. SUB-IDENTIFIERS ***/
var locations = ["North America", 
["Southern California", ["Santa Barbara", "Los Angeles", "Orange County", "San Diego"]], 
["Rhode Island", ["West Rhode Island", "East Rhode Island"]]];

var hours = ["Current", "-1 hour", "-2 hours", "-3 hours", "-6 hours", "-12 hours", "-24 hours"];

var hoursToIndex = {"Current": 0,
"-1 hour": 1,
"-2 hours": 2,
"-3 hours": 3,
"-6 hours": 4,
"-12 hours": 5,
"-24 hours": 6};

var hoursToAgo = {"Current": "current",
"-1 hour": "1 hour ago",
"-2 hours": "2 hours ago",
"-3 hours": "3 hours ago",
"-6 hours": "6 hours ago",
"-12 hours": "12 hours ago",
"-24 hours": "24 hours ago"};

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var minimumWidth = 800;
var defWidth = document.getElementById('chart').offsetWidth;

/*** SETTING COLOR CHART VALUES ***/
var colorvalues = {};

/*** STRING LOCATIONS AS KEYS, URL ARRAYS AS VALUES ***/
var locationurls = {};

function setColorChart() {
    var file = "https://dl.dropboxusercontent.com/s/fvjgso66h0bd422/rgbcolors.txt";
    $.get(file,function(txt){ // make sure this process finishes before moving on
        var lines = txt.split(/\s+/g);
        var current = 1;
        var end = 150;
        var numlines = 150;
        for (var i = 0; i < numlines; i++) {
            colorvalues[lines[i]] = current / 10.0;
            current += 1;
        }
        setLocationUrls(); // kludge because of asynchronous jquery
    });
}

/*** READ FROM FORMATTED TEXT FILE ON DROPBOX.
AREA NAME ON A LINE FOLLOWED BY URLS ON THE NEXT LINES.
RINSE AND REPEAT. ***/
function setLocationUrls() {
    var file = "https://dl.dropboxusercontent.com/s/xc264b3n3z2ejvv/swellnowurlstwo.txt";
    $.get(file,function(txt){ // make sure this process finishes before moving on
        var loc = "";
        var urls = [];
        var lines = txt.split(/\s+/g);
        var lines = txt.split(/\n+/g);
        loc = lines[0]; // initialize first location
        for (var i = 1; i < lines.length - 1; i++) { // -1 offset for lines.length to account for newline at end of file
            if (lines[i].startsWith("https:")) {
                urls.push(lines[i]);
            } else {
                locationurls[loc] = urls;
                loc = lines[i];
                urls = [];
            }
        }
        locationurls[loc] = urls; // set last location
        completeRestOfInit(); // kludge because of asynchronous jquery
    });
}

function getLocUrl(str, time) {
    return locationurls[str][hoursToIndex[time]];
}

function drawCanvas(str, time) {
    // context.fillStyle = "rgb(255,0,0)";
    // context.fillRect(0, 0, 50, 50);
    // context.fillStyle = "rgb(0,0,255)";
    // context.fillRect(55, 0, 50, 50);
    // var chartSize = document.getElementById('chart').offsetWidth * 2.0 / 3.0;
    // alert(getLocUrl("West Rhode Island", "Current"));
    var base_image = new Image();
    base_image.setAttribute('crossOrigin', 'Anonymous');
    base_image.src = getLocUrl(str, time);
    base_image.onload = function(){
        var ratio = base_image.width / base_image.height;
        var chartSize = defWidth;
        canvas.width = chartSize;
        canvas.height = chartSize / ratio;
        canvas.style.cursor = "crosshair";
        context.drawImage(base_image, 0, 0, chartSize, chartSize / ratio);
    }
}

function drawCanvasForTime(str, time) {
    var html = "";
    html += "" + time + " <span class='caret revertcaret'></span> ";
    $('#canvastime').html(html);
    $('#location-text').html("<p>Displaying swell for " + str + " (" + hoursToAgo[time] + ")" + "</p>");
    drawCanvas(str, time);
}

/*** TAKES IN A STRING AND CONSTRUCTS THE NAVIGATION TABS ***/
function createNavHTML(str) {
    createNavHTMLHelper(getLocPath(str));
}

function createNavHTMLHelper(ar) {
    var html = "";
    // BASE NAVIGATION BUTTON
    html += "<div id='dd-menu1' class='dropdown' style='position:relative;display:inline-block'>";
    html += "<a href='#' class='btn btn-primary dropdown-toggle' data-toggle='dropdown'>" + locations[0] + " <span class='caret'></span></a>";
    html += "<ul class='dropdown-menu'>";
    for (var i = 1; i < locations.length; i++) {
        html += "<li>";
        html += "<a class='trigger right-caret'>" + locations[i][0] + "</a>";
        html += "<ul class='dropdown-menu sub-menu'>";
        for (var j = 0; j < locations[i][1].length; j++) {
            html += "<li><a href='#' onclick='setNavAndCanvas(&#39;" + locations[i][1][j] + "&#39;);return false;'>" + locations[i][1][j] + "</a></li>";
        }
        html += "</ul>";
        html += "</li>";
    }
    html += "</ul>";
    html += "</div>";
    // SUB NAVIGATION BUTTON 1
    html += "<div class='dropdown' style='position:relative;display:inline-block;margin-left:5px'>";
    html += "<a href='#' class='btn btn-primary dropdown-toggle' data-toggle='dropdown'>" + locations[ar[0]][0] + " <span class='caret'></span></a>";
    html += "<ul class='dropdown-menu'>";
    for (var k = 0; k < locations[ar[0]][ar[1]].length; k++) {
        html += "<li><a href='#' onclick='setNavAndCanvas(&#39;" + locations[ar[0]][ar[1]][k] + "&#39;);return false;'>" + locations[ar[0]][ar[1]][k] + "</a></li>";
    }
    html += "</ul>";
    html += "</div>";
    // SUB NAVIGATION BUTTON 2
    html += "<div class='dropdown' style='position:relative;display:inline-block;margin-left:5px'>";
    html += "<a href='#' class='btn btn-primary' onclick='setNavAndCanvas(&#39;" + locations[ar[0]][ar[1]][ar[2]] + "&#39;);return false;'>" + locations[ar[0]][ar[1]][ar[2]] + "</a>";
    html += "</div>";
    // CURRENT AND PREVIOUS IMAGES BUTTON (IN PROGRESS)
    html += "<div class='dropdown' style='position:relative;display:inline-block;float:right'>";
    html += "<a href='#' id='canvastime' class='btn btn-primary dropdown-toggle' data-toggle='dropdown'>" + hours[0] + " <span class='caret revertcaret'></span></a>";
    html += "<ul class='dropdown-menu'>";
    for (var l = 0; l < hours.length; l++) {
        html += "<li><a href='#' onclick='drawCanvasForTime(&#39;" + locations[ar[0]][ar[1]][ar[2]] + "&#39;, &#39;" + hours[l] + "&#39;);return false;'>" + hours[l] + "</a></li>";
    }
    html += "</ul>";
    html += "</div>";

    // LOCATION DISPLAY TEXT
    $('#location-text').html("<p>Displaying swell for " + locations[ar[0]][ar[1]][ar[2]] + " (current)" + "</p>");
    $('#dropmenu').html(html);
}

/*** GETS THE LOCATION PATH OF A STRING IN TERMS OF INDEXES TRAVELED ***/
function getLocPath(str) {
    return getLocPathHelper(str, locations, []);
}

function getLocPathHelper(str, ar1, ar2) {
    for (var i = 0; i < ar1.length; i++) {
        var arCopy = ar2.slice();
        if (ar1[i] == str) {
            arCopy.push(i);
            return arCopy;
        } else if (ar1[i].constructor == Array) {
            arCopy.push(i);
            var result = getLocPathHelper(str, ar1[i], arCopy);
            if (result.length != 0) {
                return result;
            }
        }
    }
    return [];
}

function setNavAndCanvas(str) {
    createNavHTML(str);
    drawCanvas(str, "Current"); // Current by default upon changing. Can change to reflect current time setting.
    document.getElementById('swellcolors').width = defWidth;
    resetDropdown();
    resetCanvasSensing();
}

function spaceToUnderscore(str) {
    return str.replace(/\s/g, "_");
}

function underscoreToSpace(str) {
    return str.replace(/_/g, " ");
}

/*** SECTION FOR COLOR SENSING ***/
function resetCanvasSensing() {
    $('#canvas').mousemove(function(e) {
        var pos = findPos(this);
        var x = e.pageX - pos.x;
        var y = e.pageY - pos.y;
        var coord = "x=" + x + ", y=" + y;
        var c = this.getContext('2d');
        var p = c.getImageData(x, y, 1, 1).data; 
        var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
        hex = hex.toUpperCase();
        var swellheight = colorvalues[hex];
        if (swellheight != undefined) {
            //getting height and width of the message box
            var height = $('#swellstatus').height();
            var width = $('#swellstatus').width();
            leftVal = e.pageX + 10 + "px";
            topVal = e.pageY + 10 + "px";
            if (x + 165 > canvas.width) { // px kludge
                leftVal = e.pageX - width - 23 + "px";
            }
            if (y + 60 > canvas.height) { // px kludge
                topVal = e.pageY - height - 13 + "px";
            }
            //show the popup message and hide with fading effect
            $('#swellstatus').html("<p>Swell Height: " + swellheight + " ft</p>");
            $('#swellstatus').css({left:leftVal,top:topVal}).show();
        } else {
            $('#swellstatus').hide();
        }
    });
    $('#canvas').mouseout(function(){
        $('#swellstatus').hide();
    });
}

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
    if (r > 255 || g > 255 || b > 255) {
        throw "Invalid color component";
    }
    return ((r << 16) | (g << 8) | b).toString(16);
}

/*** SECTION FOR DROPDOWN MENUS ***/
function resetDropdown() {
    $(".dropdown-menu > li > a.trigger").on("click",function(e){
        var current=$(this).next();
        var grandparent=$(this).parent().parent();
        if($(this).hasClass('left-caret')||$(this).hasClass('right-caret')) {
            $(this).toggleClass('right-caret left-caret');
        }
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
}

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

    $(window).resize(function() {
        var s = $(this).scrollLeft(),
            d = $(document).width(),
            c = $(this).width();

        scrollPercent = (s / (d - c));

        var position = (scrollPercent * ($(document).width() - $horizontal.width()));
        
        $horizontal.css({
            'left': position
        });

        if ($(document).width() > defWidth + 15) { // 15 for container offset
            $horizontal.css({
                'left': 0
            });
        } 
    });
}

function completeRestOfInit() { // kludge function called in setLocationUrls
    setNavAndCanvas("West Rhode Island");
    setTopBar();
}

function init() {
    if (minimumWidth > defWidth) {
        defWidth = minimumWidth;
    }
    document.getElementById('dropmenu').style.minWidth = defWidth + "px";
    document.getElementById('dropmenu').style.maxWidth = defWidth + "px";
    document.getElementById('location-text').style.minWidth = defWidth + "px";
    document.getElementById('swellstatus').style.whiteSpace = "nowrap";
    setColorChart(); // kludge because of asynchronous jquery. setColorChart --> setLocationUrls --> completeRestOfInit
}

init();
