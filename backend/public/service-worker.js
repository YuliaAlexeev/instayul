if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const u=e=>i(e,n),t={module:{uri:n},exports:o,require:u};s[n]=Promise.all(r.map((e=>t[e]||u(e)))).then((e=>(l(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"instayul"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.202d3fa3.css",revision:null},{url:"/fonts/Cookie-Regular.4a224296.ttf",revision:null},{url:"/img/loader.57e02afe.svg",revision:null},{url:"/img/sprite.24a49248.svg",revision:null},{url:"/index.html",revision:"2fb53c8da207ed7d7c14df4c6389e6d9"},{url:"/js/130.4fd55c7f.js",revision:null},{url:"/js/172.6c573355.js",revision:null},{url:"/js/495.e42c6214.js",revision:null},{url:"/js/896.dfb3d238.js",revision:null},{url:"/js/app.41b7aa7d.js",revision:null},{url:"/js/chunk-vendors.9050052c.js",revision:null},{url:"/manifest.json",revision:"fe29b05f03225fc2cf78ece98737d64f"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
