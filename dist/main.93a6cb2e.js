parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var e=1;getPage.onclick=function(){var t=new XMLHttpRequest;t.open("GET","/page".concat(e+1)),t.onreadystatechange=function(){4===t.readyState&&(t.status>=200&&t.status<300&&(JSON.parse(t.response).forEach(function(e){var t=document.createElement("li");t.textContent=e.id,xxx.appendChild(t)}),e+=1))},t.send()},getJSON.onclick=function(){var e=new XMLHttpRequest;e.open("GET","/5.json"),e.onreadystatechange=function(){if(4===e.readyState)if(e.status>=200&&e.status<300){console.log(e.response);var t=JSON.parse(e.response);myName.textContent=t.name,console.log(t)}else console.log("加载JSON失败")},e.send()},getXML.onclick=function(){var e=new XMLHttpRequest;e.open("GET","/4.xml"),e.onreadystatechange=function(){if(4===e.readyState)if(e.status>=200&&e.status<300){var t=e.responseXML.getElementsByTagName("warning")[0].textContent.trim();console.log(t)}else alert("加载HTML失败")},e.send()},getHTML.onclick=function(){var e=new XMLHttpRequest;e.open("GET","/3.html"),e.onreadystatechange=function(){if(4===e.readyState&&e.status>=200&e.status<300){var t=document.createElement("div");t.innerHTML=e.response,document.body.appendChild(t)}},e.send()},getJS.onclick=function(){var e=new XMLHttpRequest;e.open("GET","/2.js"),e.onreadystatechange=function(){if(4===e.readyState)if(e.status>=200&&e.status<300){var t=document.createElement("script");t.innerHTML=e.response,document.body.appendChild(t)}else alert("加载JS失败")},e.send()},getCSS.onclick=function(){var e=new XMLHttpRequest;e.open("GET","/style.css"),e.onreadystatechange=function(){if(4===e.readyState)if(e.status>=200&&e.status<300){var t=document.createElement("style");t.innerHTML=e.response,document.head.appendChild(t)}else alert("加载CSS失败")},e.send()};
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.93a6cb2e.js.map