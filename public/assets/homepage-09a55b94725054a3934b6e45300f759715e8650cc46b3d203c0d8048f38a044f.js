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
var locationurls = {"Santa Barbara":
["https://dl.dropboxusercontent.com/s/kd5imgs6xehmzee/0000.png",
"https://dl.dropboxusercontent.com/s/ksugtcfq8nijquz/0001.png",
"https://dl.dropboxusercontent.com/s/kt35kglyl2l8vyy/0002.png",
"https://dl.dropboxusercontent.com/s/sowfnfcm8aosfh7/0003.png",
"https://dl.dropboxusercontent.com/s/ckoct6syn0jnkz2/0006.png",
"https://dl.dropboxusercontent.com/s/hin5bf0xwlnek2k/0012.png",
"https://dl.dropboxusercontent.com/s/44shod8uf1jyen5/0024.png"],
"Los Angeles":
["https://dl.dropboxusercontent.com/s/3mik4marm2v6fx5/0000.png",
"https://dl.dropboxusercontent.com/s/lphrm3owzzyucva/0001.png",
"https://dl.dropboxusercontent.com/s/qk1kjem8okcwtvd/0002.png",
"https://dl.dropboxusercontent.com/s/lkucz2qz4a0jy78/0003.png",
"https://dl.dropboxusercontent.com/s/17fldp4odz13231/0006.png",
"https://dl.dropboxusercontent.com/s/c7pp4knp06mklrc/0012.png",
"https://dl.dropboxusercontent.com/s/09ydl5llbd15as1/0024.png"],
"Orange County":
["https://dl.dropboxusercontent.com/s/0vo0pm3af4jofs7/0000.png",
"https://dl.dropboxusercontent.com/s/zyucyro765guhv2/0001.png",
"https://dl.dropboxusercontent.com/s/s5m3r48d7ujynpl/0002.png",
"https://dl.dropboxusercontent.com/s/t6nueax0g3f4c09/0003.png",
"https://dl.dropboxusercontent.com/s/lkwgcdqpo4h4qlt/0006.png",
"https://dl.dropboxusercontent.com/s/8sc1fclesv6yiyz/0012.png",
"https://dl.dropboxusercontent.com/s/hgow5943cmkqc0i/0024.png"],
"San Diego":
["https://dl.dropboxusercontent.com/s/7p7m89rg43pu3ji/0000.png",
"https://dl.dropboxusercontent.com/s/4c8io1su2kk9cgp/0001.png",
"https://dl.dropboxusercontent.com/s/n3fjazt711p0bm6/0002.png",
"https://dl.dropboxusercontent.com/s/t3gevssyea4i15u/0003.png",
"https://dl.dropboxusercontent.com/s/t5ab3atbje2n6sh/0006.png",
"https://dl.dropboxusercontent.com/s/sifgix4q868v0jb/0012.png",
"https://dl.dropboxusercontent.com/s/rgdoig6oqmtdq1y/0024.png"],
"West Rhode Island":
["https://dl.dropboxusercontent.com/s/o540f6nsy8d9et5/0000.png",
"https://dl.dropboxusercontent.com/s/xudr3py8hqt0khm/0001.png",
"https://dl.dropboxusercontent.com/s/g67a03lku2ozdtv/0002.png",
"https://dl.dropboxusercontent.com/s/4iyos22brxbfwpp/0003.png",
"https://dl.dropboxusercontent.com/s/bmdueaz056v4c3n/0006.png",
"https://dl.dropboxusercontent.com/s/vla3p5b775fkfsb/0012.png",
"https://dl.dropboxusercontent.com/s/s1u1577o9e5t4ka/0024.png"],
"East Rhode Island":
["https://dl.dropboxusercontent.com/s/qapdpt751l9tn6z/0000.png",
"https://dl.dropboxusercontent.com/s/102cdstea5kg1kf/0001.png",
"https://dl.dropboxusercontent.com/s/x7txsfumd0q2mho/0002.png",
"https://dl.dropboxusercontent.com/s/xdv6hkg45jn5ao4/0003.png",
"https://dl.dropboxusercontent.com/s/qks3dayblipo4x4/0006.png",
"https://dl.dropboxusercontent.com/s/xd3j45fwbz5i78r/0012.png",
"https://dl.dropboxusercontent.com/s/5p2dp86kb04ogfb/0024.png"]};

/*** SETTING COLOR CHART VALUES ***/
// var colorvalues = {};

/*** STRING LOCATIONS AS KEYS, URL ARRAYS AS VALUES ***/
// var locationurls = {};

// var locationurls = {"North America":"", 
// "Southern California":"", 
// "Santa Barbara":"https://dl.dropboxusercontent.com/s/4ervq1me95vdnw3/SB.png",
// "Los Angeles":"https://dl.dropboxusercontent.com/s/f4h3zen6wi5it5y/LA.png",
// "Orange County":"https://dl.dropboxusercontent.com/s/ukgy4pbum1rc0f3/OC.png",
// "San Diego":"https://dl.dropboxusercontent.com/s/9oxio9ns6mizcq7/SD.png",
// "Rhode Island":"",
// "West Rhode Island":"https://dl.dropboxusercontent.com/s/fcvvui1npynxgkk/WestRI.png",
// "East Rhode Island":"https://dl.dropboxusercontent.com/s/x806t0i87pjahpj/EastRI.png"};

/*** SECTION FOR RESIZING ***/
// resize the canvas to fill browser window dynamically
// window.addEventListener('resize', resizeObjs, false);

// function resizeObjs() {
//     resizeCanvas();
// }

/*** FOR READING TEXT FILES, BECAUSE ISSUES WITH ASYNCHRONOUS AJAX REQUESTS ***/
// function readTextFile(file) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 // alert(allText);
//                 return allText
//             }
//         }
//     }
//     rawFile.send(null);
// }

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
        // setLocationUrls(); // kludge because of asynchronous jquery
    });
}


/*** READ FROM FORMATTED TEXT FILE ON DROPBOX.
AREA NAME ON A LINE FOLLOWED BY URLS ON THE NEXT LINES.
RINSE AND REPEAT. ***/
function setLocationUrls() { // not using anymore because of weird mobile issues
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

// function resizeCanvas() {
//         // var chartSize = document.getElementById('chart').offsetWidth * 2.0 / 3.0;
//         var chartSize = document.getElementById('chart').offsetWidth;
//         canvas.width = chartSize;
//         canvas.height = chartSize / 3.0;
//         canvas.style.cursor = "crosshair";

//         /**
//          * Your drawings need to be inside this function otherwise they will be reset when 
//          * you resize the browser window and the canvas goes will be cleared.
//          */
//         drawCanvas(locationurls.Los_Angeles); 
// }

function getLocUrl(str, time) {
    return locationurls[str][hoursToIndex[time]];
}

function drawCanvas(str, time = "Current") {
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

// function setup() {
//     drawCanvas("West Bay");
//     document.getElementById('swellcolors').width = document.getElementById('chart').offsetWidth;
// }

// resizeObjs();
// setup();

// FOR TESTING. REMOVE LATER
// $('<div/>', {
//     'id':'myDiv',
//     'class':'myClass',
//     'text':'Text Only',
// }).on('click', function(){
//     alert(this.id);
// }).appendTo('body');

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
    drawCanvas(str); // Current by default upon changing. Can change to reflect current time setting.
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
            // $('#status').html(coord + "</br>" + hex + "</br>" + waveheight + " ft");
            // $('#status').html("<p>Swell Height: " + swellheight + " ft</p>");
            //getting height and width of the message box
            var height = $('#swellstatus').height();
            var width = $('#swellstatus').width();
            // alert(width);
            //calculating offset for displaying popup message
            // leftVal=e.pageX-(width/2)+"px";
            // topVal=e.pageY-(height/2)+"px";
            // change based on location on canvas
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
            // alert(document.getElementById('swellstatus').offsetHeight);
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

function init() {
    if (minimumWidth > defWidth) {
        defWidth = minimumWidth;
    }
    document.getElementById('dropmenu').style.minWidth = defWidth + "px";
    document.getElementById('dropmenu').style.maxWidth = defWidth + "px";
    document.getElementById('location-text').style.minWidth = defWidth + "px";
    document.getElementById('swellstatus').style.whiteSpace = "nowrap";
    // setColorChart(); // kludge because of asynchronous jquery. setColorChart --> setLocationUrls --> completeRestOfInit
    setColorChart(); // location setting done manually because of mobile issues
    completeRestOfInit(); // avoiding jquery cascading because mobile seems to hate it...manual ughhh
}

function completeRestOfInit() { // kludge function called in setLocationUrls
    setNavAndCanvas("West Rhode Island");
    setTopBar();
}

init();

// var file = "http://plapla.com/pla.txt";
// function getFile(){
//     $.get(file,function(txt){
//         var lines = txt.responseText.split("\n");
//         for (var i = 0, len = lines.length; i < len; i++) {
//             save(lines[i]);
//         }
//     }); 
// }

// alert(getLocPath("West Bay"));
// alert(spaceToUnderscore(locationurls.North_America));
