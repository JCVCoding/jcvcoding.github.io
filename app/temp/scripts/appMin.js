!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){var n=document.getElementById("scrollStop"),o=(document.querySelector(".header"),document.getElementById("work")),r=document.getElementById("contact__header"),c=document.querySelector(".page-break__btn"),l=document.querySelector(".hero__btn"),u=document.getElementById("about-link"),i=document.getElementById("work-link"),d=document.getElementById("contact-link");l.addEventListener("click",function(){n.scrollIntoView({behavior:"smooth"})}),c.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),u.addEventListener("click",function(){n.scrollIntoView({behavior:"smooth"})}),i.addEventListener("click",function(){o.scrollIntoView({behavior:"smooth"})}),d.addEventListener("click",function(){r.scrollIntoView({behavior:"smooth"})});var a=document.getElementById("navbar");window.onscroll=function(){20<document.body.scrollTop||20<document.documentElement.scrollTop?a.style.top="0":a.style.top="-60px"}}]);