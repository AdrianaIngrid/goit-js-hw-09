!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=null;e.addEventListener("click",(function(){o=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),console.log(o)})),n.addEventListener("click",(function(){clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.4044466e.js.map
