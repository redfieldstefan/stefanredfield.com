(()=>{"use strict";var e={346:(e,t,o)=>{o.d(t,{Z:()=>r});const n=()=>{let e;const t=["2-23-2023.html","2-24-2023.html","2-27-2023.html","3-29-2023.html","3-31-2023.html","4-10-2023.html","4-17-2023.html","4-4-2023.html","4-5-2023.html"];console.log({links:t});const o=document.cookie.split(";").map((function(e){return e.trim().split("=")})).reduce((function(e,t){return e[t[0]]=t[1],e}),{});if(o["page-index"])e=t[o["page-index"]];else{const o=((e=0)=>Math.floor(Math.random()*e))(t.length),n=5e3,r=new Date(Date.now()+n).toUTCString();document.cookie=`page-index=${o}; expires=${r}`,e=t[o]}return console.log({page:e}),e};window.pickPage=n;const r=n}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=o(346);const t=(()=>{console.log("runs");const t=(0,e.Z)();console.log("page in other func",t);const o=document.getElementById("main"),n=document.createElement("iframe");n.id="iframe",n.width="50%",n.height="100%",n.src=t,o.appendChild(n)})();window.pickIframe=t})()})();