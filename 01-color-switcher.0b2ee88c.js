const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let r=null;e.addEventListener("click",(()=>{r=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),console.log(r)})),o.addEventListener("click",(()=>{clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.0b2ee88c.js.map
