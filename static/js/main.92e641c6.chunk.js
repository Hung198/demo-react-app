(this["webpackJsonpdemo-react-app"]=this["webpackJsonpdemo-react-app"]||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(11),c=t.n(r),i=t(13),l=t(12),s=t.n(l),u=(t(36),function(e){var n=Object(a.useState)([]),t=Object(i.a)(n,2),r=t[0],c=t[1];return Object(a.useEffect)((function(){s.a.get("http://localhost:8080/api/users").then((function(e){c(e.data)})).catch((function(e){return console.error("L\u1ed7i x\u1ea3y ra:"+e)}))}),[]),o.a.createElement("div",{className:"userList"},o.a.createElement("h1",null," Users List"),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Id"),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Age"),o.a.createElement("th",null,"Address"))),o.a.createElement("tbody",null,r&&r.map((function(e){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,e.id),o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.age),o.a.createElement("td",null,e.address))})))))}),d=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(u,null))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/demo-react-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/demo-react-app","/service-worker.js");f?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(n,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.92e641c6.chunk.js.map