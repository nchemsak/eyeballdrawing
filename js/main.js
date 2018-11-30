// EYE JS
"use strict";

$(document).ready(function() {

    // image info
    // width: 1850px / 5 = 370 columns
    // height: 1000px / 5 = 200 rows
    // 74000 to divs

    var i = 0;
    var x = 0;
    for (var x; x <= 7400; x++) {
        for (var i; i <= 5000; i++) {
            $('#target').append('<div class="all-dots" id="dot-' + i + '"></div>')
        }
            // var nick = x + i;
            // $('#target').append('<div class="all-dots" id="dot-' + nick + '"></div>')
            var x = i+x;
    }




    // for (var j = 371; j <= 739; j++) {
    //     $('#target2').append('<div class="all-dots" id="dot-' + j + '"></div>')
    // }






});
