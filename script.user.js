// ==UserScript==
// @name         Circle Auto Settings Stable
// @namespace    circle-automation
// @version      1.0
// @description  Auto fill circle settings
// @match        https://www.thecircleapp.in/admin/circles/new*
// @grant        none
// ==/UserScript==

(function () {
'use strict';

function applySettings(){

let selects = document.querySelectorAll("select");

if(selects.length < 3){
setTimeout(applySettings,500);
return;
}

// Circle Type
selects[0].value = "interest";
selects[0].dispatchEvent(new Event('change',{bubbles:true}));

setTimeout(function(){
selects[1].value = "political_leader";
selects[1].dispatchEvent(new Event('change',{bubbles:true}));
},800);

// State
selects[2].value = "72631";
selects[2].dispatchEvent(new Event('change',{bubbles:true}));

// Active OFF
let active=document.querySelector("input[type='checkbox']");
if(active) active.checked=false;

console.log("Circle automation applied");

}

setTimeout(applySettings,1500);

})();
