!function e(i,n,t){function a(s,r){if(!n[s]){if(!i[s]){var c="function"==typeof require&&require;if(!r&&c)return c(s,!0);if(l)return l(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var o=n[s]={exports:{}};i[s][0].call(o.exports,function(e){var n=i[s][1][e];return a(n?n:e)},o,o.exports,e,i,n,t)}return n[s].exports}for(var l="function"==typeof require&&require,s=0;s<t.length;s++)a(t[s]);return a}({1:[function(e,i,n){"use strict"},{}],2:[function(e,i,n){"use strict";e("./game.js");$(window).on("load",function(){function e(){i(),n()}function i(){t("#min-handle-label",$(".age-slider").slider("values",0)),t("#max-handle-label",$(".age-slider").slider("values",1))}function n(){a(".ui-slider-handle:first","#min-handle-label"),a(".ui-slider-handle:last","#max-handle-label")}function t(e,i){"100"!=i?$(e).html(i):$(e).html("100+")}function a(e,i){var n=$(e).offset(),t=($(e).width()-$(i).width())/2;$(i).css({left:n.left+t,top:n.top+30})}function l(e,i,n){var t=1;switch(e){case 1:case 2:case 3:break;default:console.log("Please select a gender"),t=0}switch((i>n||i<18||n>100||i!==parseInt(i,10)||n!==parseInt(n,10))&&(console.log("Please enter a valid range"),t=0),t){case 0:return!1;case 1:return!0}}$("img.svg").each(function(){var e=$(this),i=e.attr("id"),n=e.attr("class"),t=e.attr("src");$.get(t,function(t){var a=$(t).find("svg");"undefined"!=typeof i&&(a=a.attr("id",i)),"undefined"!=typeof n&&(a=a.attr("class",n+" replaced-svg")),a=a.removeAttr("xmlns:a"),!a.attr("viewBox")&&a.attr("height")&&a.attr("width")&&a.attr("viewBox","0 0 "+a.attr("height")+" "+a.attr("width")),e.replaceWith(a)},"xml")}),$(".info-btn").tooltip({track:!0});var s=0,r="#000",c="#bec0ff",f="pink",o="#e8e000";$(".male").hover(function(){$(this).find("path").css("fill",c)},function(){2!=s&&$(this).find("path").css("fill",r)}),$(".female").hover(function(){$(this).find("path").css("fill",f)},function(){1!=s&&$(this).find("path").css("fill",r)}),$(".mixed").hover(function(){$(this).find("path").css("fill",o)},function(){3!=s&&$(this).find("path").css("fill",r)}),$(".male").click(function(){s=2,$(this).find("path").css("fill",c),$(".female > .gender-icon path").css("fill",r),$(".mixed > .gender-icon path").css("fill",r)}),$(".female").click(function(){s=1,$(this).find("path").css("fill",f),$(".male > .gender-icon path").css("fill",r),$(".mixed > .gender-icon path").css("fill",r)}),$(".mixed").click(function(){s=3,$(this).find("path").css("fill",o),$(".male > .gender-icon path").css("fill",r),$(".female > .gender-icon path").css("fill",r)}),$(".age-slider").slider({range:!0,min:18,max:100,values:[18,100],slide:function(e,i){var n=function(){var e=i.handleIndex,n=0==e?"#min-handle-label":"#max-handle-label";t(n,i.value),a(i.handle,n)};setTimeout(n,5)}}),e(),$(window).resize(function(){n()}),$(".play-btn").click(function(){var e=$(".age-slider").slider("values",0),i=$(".age-slider").slider("values",1);l(s,e,i)?($(this).off("click"),$.ajax({url:"/game",data:{minAge:e,maxAge:i,gender:s},success:function(e){console.log(JSON.parse(e)),$(".form-container").fadeOut(2200),$("body").append("<pre>"+JSON.stringify(JSON.parse(e),null,2)+"</pre>")}})):console.log("Invalid input")})})},{"./game.js":1}]},{},[2]);