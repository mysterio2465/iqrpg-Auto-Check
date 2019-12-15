// ==UserScript==
// @name         autocheck
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.iqrpg.com/game.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function checkautos(){
        if(parseInt(document.title.substring(1,document.title.indexOf("]"))) < 10){
            alert("please click");
            clearInterval(mytimer);
            setTimeout(function(){mytimer = setInterval(checkautos, 3000);}, 10000);
        }
    }
    var mytimer = setInterval(checkautos, 3000);
})();