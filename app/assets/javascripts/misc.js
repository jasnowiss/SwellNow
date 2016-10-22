/*** STRING LOCATIONS AS KEYS, URL ARRAYS AS VALUES ***/
// var locationurls = {"Santa Barbara":
// ["https://dl.dropboxusercontent.com/s/kd5imgs6xehmzee/0000.png",
// "https://dl.dropboxusercontent.com/s/ksugtcfq8nijquz/0001.png",
// "https://dl.dropboxusercontent.com/s/kt35kglyl2l8vyy/0002.png",
// "https://dl.dropboxusercontent.com/s/sowfnfcm8aosfh7/0003.png",
// "https://dl.dropboxusercontent.com/s/ckoct6syn0jnkz2/0006.png",
// "https://dl.dropboxusercontent.com/s/hin5bf0xwlnek2k/0012.png",
// "https://dl.dropboxusercontent.com/s/44shod8uf1jyen5/0024.png"],
// "Los Angeles":
// ["https://dl.dropboxusercontent.com/s/3mik4marm2v6fx5/0000.png",
// "https://dl.dropboxusercontent.com/s/lphrm3owzzyucva/0001.png",
// "https://dl.dropboxusercontent.com/s/qk1kjem8okcwtvd/0002.png",
// "https://dl.dropboxusercontent.com/s/lkucz2qz4a0jy78/0003.png",
// "https://dl.dropboxusercontent.com/s/17fldp4odz13231/0006.png",
// "https://dl.dropboxusercontent.com/s/c7pp4knp06mklrc/0012.png",
// "https://dl.dropboxusercontent.com/s/09ydl5llbd15as1/0024.png"],
// "Orange County":
// ["https://dl.dropboxusercontent.com/s/0vo0pm3af4jofs7/0000.png",
// "https://dl.dropboxusercontent.com/s/zyucyro765guhv2/0001.png",
// "https://dl.dropboxusercontent.com/s/s5m3r48d7ujynpl/0002.png",
// "https://dl.dropboxusercontent.com/s/t6nueax0g3f4c09/0003.png",
// "https://dl.dropboxusercontent.com/s/lkwgcdqpo4h4qlt/0006.png",
// "https://dl.dropboxusercontent.com/s/8sc1fclesv6yiyz/0012.png",
// "https://dl.dropboxusercontent.com/s/hgow5943cmkqc0i/0024.png"],
// "San Diego":
// ["https://dl.dropboxusercontent.com/s/7p7m89rg43pu3ji/0000.png",
// "https://dl.dropboxusercontent.com/s/4c8io1su2kk9cgp/0001.png",
// "https://dl.dropboxusercontent.com/s/n3fjazt711p0bm6/0002.png",
// "https://dl.dropboxusercontent.com/s/t3gevssyea4i15u/0003.png",
// "https://dl.dropboxusercontent.com/s/t5ab3atbje2n6sh/0006.png",
// "https://dl.dropboxusercontent.com/s/sifgix4q868v0jb/0012.png",
// "https://dl.dropboxusercontent.com/s/rgdoig6oqmtdq1y/0024.png"],
// "West Rhode Island":
// ["https://dl.dropboxusercontent.com/s/o540f6nsy8d9et5/0000.png",
// "https://dl.dropboxusercontent.com/s/xudr3py8hqt0khm/0001.png",
// "https://dl.dropboxusercontent.com/s/g67a03lku2ozdtv/0002.png",
// "https://dl.dropboxusercontent.com/s/4iyos22brxbfwpp/0003.png",
// "https://dl.dropboxusercontent.com/s/bmdueaz056v4c3n/0006.png",
// "https://dl.dropboxusercontent.com/s/vla3p5b775fkfsb/0012.png",
// "https://dl.dropboxusercontent.com/s/s1u1577o9e5t4ka/0024.png"],
// "East Rhode Island":
// ["https://dl.dropboxusercontent.com/s/qapdpt751l9tn6z/0000.png",
// "https://dl.dropboxusercontent.com/s/102cdstea5kg1kf/0001.png",
// "https://dl.dropboxusercontent.com/s/x7txsfumd0q2mho/0002.png",
// "https://dl.dropboxusercontent.com/s/xdv6hkg45jn5ao4/0003.png",
// "https://dl.dropboxusercontent.com/s/qks3dayblipo4x4/0006.png",
// "https://dl.dropboxusercontent.com/s/xd3j45fwbz5i78r/0012.png",
// "https://dl.dropboxusercontent.com/s/5p2dp86kb04ogfb/0024.png"]};

/*** SETTING COLOR CHART VALUES ***/
// var colorvalues = {};

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

// $('#status').html(coord + "</br>" + hex + "</br>" + waveheight + " ft");
// $('#status').html("<p>Swell Height: " + swellheight + " ft</p>");

// alert(width);
//calculating offset for displaying popup message
// leftVal=e.pageX-(width/2)+"px";
// topVal=e.pageY-(height/2)+"px";
// change based on location on canvas

// alert(document.getElementById('swellstatus').offsetHeight);

// setColorChart(); // location setting done manually because of mobile issues
// completeRestOfInit(); // avoiding jquery cascading because mobile seems to hate it...manual ughhh

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

/*** FOR HORIZONTAL BUT NOT VERTICALLY SCROLLING NAVBAR ***/
// function setTopBar() {
//     var $horizontal = $('#horizontal');

//     $(window).scroll(function () {
//         var s = $(this).scrollLeft(),
//             d = $(document).width(),
//             c = $(this).width();

//         scrollPercent = (s / (d - c));

//         var position = (scrollPercent * ($(document).width() - $horizontal.width()));
        
//         $horizontal.css({
//             'left': position
//         });
//     });
// }

// function initShared() {
//     setTopBar();
// }

// initShared();
