(()=>{"use strict";var n={5904:(n,t,e)=>{e.d(t,{A:()=>o});var A=e(1354),r=e.n(A),a=e(6314),i=e.n(a)()(r());i.push([n.id,"#container{width:100vw}h2,h5{text-align:center;margin:10px 0px}.swiper-container{display:flex;flex-direction:column;overflow-x:hidden;overflow-y:auto;flex-wrap:nowrap;width:100%;height:80vh;margin-top:10vh}.navigator{height:10vh;z-index:2;position:absolute !important}.navigator .btn-box{display:flex;justify-content:space-between;align-items:center;position:fixed;bottom:10px;width:100%;height:10vh;transition:all .3s linear}.navigator .btn-ele{padding:5px;margin:10px;text-decoration:none;color:#000;background-color:#d4d4d4;border-radius:20px;display:flex;flex-direction:row;justify-content:center;align-items:center;width:auto;height:50%;transition:all .3s linear;box-shadow:rgba(50,50,93,.25) 0px 6px 12px -2px,rgba(0,0,0,.3) 0px 3px 7px -3px}.navigator .btn-ele.cart{padding:10px;height:70%}.navigator .btn-ele .img{height:100%;aspect-ratio:1}.navigator .btn-ele img{width:100%;height:100%;border-radius:50%}.navigator .btn-ele>*{margin-right:5px}.heading{display:flex;justify-content:center;align-items:center;flex-direction:row;height:10vh}.template-wrapper{background-color:#fff;width:100%;height:100% !important}.notHaveTemplate{display:flex;justify-content:center;align-items:center;padding:100px}.notHaveTemplate>p{text-align:center}.logo{z-index:2;width:100%}.cart .count{top:-7px}.cart_parent .cart_item-img{border-radius:40px;background-color:#fff}.logo .cart_parent .cart_item-img>img{border-radius:40px !important}.logo .cart_parent .cart_checkout{max-width:240px;cursor:pointer}.logo .cart_parent .cart_items{width:auto !important;height:auto !important;aspect-ratio:9/16 !important;padding:0px !important}.logo .cart_parent .cart_item{height:calc(100% - 50px);position:relative}.logo .cart_parent .cart_item-remove{text-align:center;position:absolute;top:-15px;left:-15px}.logo .cart_parent .cart_items .cart_empty_msg{padding:40px}@media screen and (max-width: 600px){.heading h1{font-size:20px}.signupParent{height:68vh}.signupChild{height:100%}.signupChild h1{margin-bottom:20px}}@media screen and (min-width: 600px){.navigator .btn-box{top:10px}.navigator .btn-box{justify-content:end}}","",{version:3,sources:["webpack://./controllers/client/css/template.css"],names:[],mappings:"AAAA,WACI,WAAA,CAEJ,MACI,iBAAA,CACA,eAAA,CAEJ,kBACI,YAAA,CACA,qBAAA,CACA,iBAAA,CACA,eAAA,CACA,gBAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CAEJ,WACI,WAAA,CACA,SAAA,CACA,4BAAA,CAEJ,oBACI,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,cAAA,CACA,WAAA,CACA,UAAA,CACA,WAAA,CACA,yBAAA,CAEJ,oBACI,WAAA,CACA,WAAA,CACA,oBAAA,CACA,UAAA,CACA,wBAAA,CACA,kBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,UAAA,CACA,yBAAA,CACA,+EAAA,CAGJ,yBACI,YAAA,CACA,UAAA,CAEJ,yBACI,WAAA,CACA,cAAA,CAEJ,wBACI,UAAA,CACA,WAAA,CACA,iBAAA,CAEJ,sBACI,gBAAA,CAGJ,SACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,kBAAA,CACA,WAAA,CAEJ,kBACI,qBAAA,CACA,UAAA,CACA,sBAAA,CAEJ,iBACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,aAAA,CAEJ,mBACI,iBAAA,CAGJ,MACI,SAAA,CACA,UAAA,CAEJ,aACI,QAAA,CAEJ,4BACI,kBAAA,CACA,qBAAA,CAEJ,sCACI,6BAAA,CAEJ,kCACI,eAAA,CACA,cAAA,CAEJ,+BACI,qBAAA,CACA,sBAAA,CACA,4BAAA,CACA,sBAAA,CAEJ,8BACI,wBAAA,CACA,iBAAA,CAEJ,qCACI,iBAAA,CACA,iBAAA,CACA,SAAA,CACA,UAAA,CAEJ,+CACI,YAAA,CAGJ,qCACI,YACI,cAAA,CAEJ,cACI,WAAA,CAEJ,aACI,WAAA,CAEJ,gBACI,kBAAA,CAAA,CAIR,qCACI,oBACI,QAAA,CAEJ,oBACI,mBAAA,CAAA",sourcesContent:["#container {\n    width: 100vw;\n}\nh2, h5 {\n    text-align: center;\n    margin: 10px 0px;\n}\n.swiper-container {\n    display: flex;\n    flex-direction: column;\n    overflow-x: hidden;\n    overflow-y: auto;\n    flex-wrap: nowrap;\n    width: 100%;\n    height: 80vh;\n    margin-top: 10vh;\n}\n.navigator {\n    height: 10vh;\n    z-index: 2;\n    position: absolute !important;\n}\n.navigator .btn-box {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    bottom: 10px;\n    width: 100%;\n    height: 10vh;\n    transition: all .3s linear;\n}\n.navigator .btn-ele {\n    padding: 5px;\n    margin: 10px;\n    text-decoration: none;\n    color: #000;\n    background-color: #d4d4d4;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: auto;\n    height: 50%;\n    transition: all .3s linear;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n}\n/* cart icon should be larger than usually to catch customer attention */\n.navigator .btn-ele.cart {\n    padding: 10px;\n    height:70%;\n}\n.navigator .btn-ele .img {\n    height: 100%;\n    aspect-ratio: 1;\n}\n.navigator .btn-ele img {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n}\n.navigator .btn-ele > * {\n    margin-right: 5px;\n}\n\n.heading {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    height: 10vh;\n}\n.template-wrapper {\n    background-color: #fff;\n    width: 100%;\n    height: 100% !important;\n}\n.notHaveTemplate {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 100px;\n}\n.notHaveTemplate > p {\n    text-align: center;\n}\n/* cart style overwritting */\n.logo {\n    z-index: 2;\n    width: 100%;\n}\n.cart .count {\n    top: -7px;\n}\n.cart_parent .cart_item-img {\n    border-radius: 40px;\n    background-color: #fff;\n}\n.logo .cart_parent .cart_item-img > img {\n    border-radius: 40px !important;\n}\n.logo .cart_parent .cart_checkout {\n    max-width: 240px;\n    cursor: pointer;\n}\n.logo .cart_parent .cart_items {\n    width: auto !important;\n    height: auto !important;\n    aspect-ratio: 9/16 !important;\n    padding: 0px !important;\n}\n.logo .cart_parent .cart_item {\n    height: calc(100% - 50px);\n    position: relative;\n}\n.logo .cart_parent .cart_item-remove {\n    text-align: center;\n    position: absolute;\n    top: -15px;\n    left: -15px;\n}\n.logo .cart_parent .cart_items .cart_empty_msg {\n    padding: 40px;\n}\n/* Web responsive */\n@media screen and (max-width: 600px) {\n    .heading h1 {\n        font-size: 20px;\n    }\n    .signupParent {\n        height: 68vh;\n    }\n    .signupChild {\n        height: 100%;\n    }\n    .signupChild h1 {\n        margin-bottom: 20px;\n    }\n    \n}\n@media screen and (min-width: 600px) {\n    .navigator .btn-box {\n        top: 10px;\n    }\n    .navigator .btn-box {\n        justify-content: end;\n    }\n}"],sourceRoot:""}]);const o=i},6314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",A=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),A&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),A&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,A,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(A)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(i[c]=!0)}for(var p=0;p<n.length;p++){var s=[].concat(n[p]);A&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},1354:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),a="/*# ".concat(r," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},5072:n=>{var t=[];function e(n){for(var e=-1,A=0;A<t.length;A++)if(t[A].identifier===n){e=A;break}return e}function A(n,A){for(var a={},i=[],o=0;o<n.length;o++){var c=n[o],p=A.base?c[0]+A.base:c[0],s=a[p]||0,l="".concat(p," ").concat(s);a[p]=s+1;var d=e(l),C={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(C);else{var u=r(C,A);A.byIndex=o,t.splice(o,0,{identifier:l,updater:u,references:1})}i.push(l)}return i}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var a=A(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var o=e(a[i]);t[o].references--}for(var c=A(n,r),p=0;p<a.length;p++){var s=e(a[p]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=c}}},7659:n=>{var t={};n.exports=function(n,e){var A=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},5056:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},7825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var A="";e.supports&&(A+="@supports (".concat(e.supports,") {")),e.media&&(A+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(A+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),A+=e.css,r&&(A+="}"),e.media&&(A+="}"),e.supports&&(A+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(A+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(A,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},1113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(A){var r=t[A];if(void 0!==r)return r.exports;var a=t[A]={id:A,exports:{}};return n[A](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var A in t)e.o(t,A)&&!e.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:t[A]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0;var A=e(5072),r=e.n(A),a=e(7825),i=e.n(a),o=e(7659),c=e.n(o),p=e(5056),s=e.n(p),l=e(540),d=e.n(l),C=e(1113),u=e.n(C),g=e(5904),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),r()(g.A,h),g.A&&g.A.locals&&g.A.locals})();
//# sourceMappingURL=templated5d6f1189be1e692587c.js.map