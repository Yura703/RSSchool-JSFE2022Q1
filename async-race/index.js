/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var n={735:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const a=o},518:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,'body{height:100vh}h1,h2,h3,h4,h5,h6{margin:0;padding:.2rem 0}.wrapper{width:100%}header.wrapper{background-color:#5e5eef}main.wrapper{background-color:#adaae8}footer.wrapper{background-color:#5e5eef}.hidden{display:none}.header{height:4rem;max-width:1400px;margin:0 auto;display:flex;justify-content:start;align-items:center;gap:2rem}.main{height:100%;max-width:1400px;margin:0 auto}.form .form__create-car{display:flex;justify-content:start;align-items:center;gap:.5rem;flex-wrap:wrap;padding:.2rem 0 .2rem 0}.form .form__create-car .select{width:150px}.form .form__create-car input{width:50px}.form .form__create-car .form__btn_create{width:100px}.form .form__update-car{display:flex;justify-content:start;align-items:center;gap:.5rem;flex-wrap:wrap;padding:.2rem 0 .2rem 0}.form .form__update-car .select{width:150px}.form .form__update-car input{width:50px}.form .form__update-car .form__btn_update{width:100px}.form .form__generate-car{display:flex;justify-content:start;align-items:center;gap:.5rem;flex-wrap:wrap;padding:.2rem 0 .2rem 0}.form .form__generate-car .form__btn_race{width:75px}.form .form__generate-car .form__btn_reset{width:75px}.form .form__generate-car .form__btn_generate{width:150px}.car-track div{display:flex;justify-content:start;align-items:center;gap:.5rem;flex-wrap:wrap;height:2.5rem}.car-track div h3{color:#41095a}.car-track div:nth-child(2) .car-A,.car-track div:nth-child(2) .car-B{border-radius:50%}.car-track div:nth-child(2) .flag{height:30px;width:30px;position:relative;left:calc(100% - 140px)}.avto-road{width:calc(100% - 177px)}div.avto-svg{width:100px;position:relative;top:-30px}.avto-road{border-bottom:dashed red}.table{border-collapse:collapse;width:100%}.table th{color:#ffebcd;background:#008b8b;cursor:pointer}.table td,.table th{width:20%;height:40px;text-align:center;border:2px solid #846868}.table tbody tr:nth-child(even){background:#e3e3e3}th.sorted[data-order="1"],th.sorted[data-order="-1"]{position:relative}th.sorted[data-order="1"]::after,th.sorted[data-order="-1"]::after{right:8px;position:absolute}th.sorted[data-order="-1"]::after{content:"▼"}th.sorted[data-order="1"]::after{content:"▲"}.footer{height:4rem;max-width:1400px;margin:0 auto;display:flex;justify-content:start;align-items:center;gap:1rem}button.inactive{background-color:#6b7274}@keyframes move{0%{left:0}100%{left:90%}}',""]);const a=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function i(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var c=n[o],s=e.base?c[0]+e.base:c[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=i(l),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(m)):a.push({identifier:l,updater:p(m,e),references:1}),r.push(l)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function m(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,h=0;function p(n,e){var t,r,o;if(e.singleton){var a=h++;t=f||(f=s(e)),r=u.bind(null,t,a,!1),o=u.bind(null,t,a,!0)}else t=s(e),r=m.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var s=c(n,e),d=0;d<t.length;d++){var l=i(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=s}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(735);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var o=t(518);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const a="http://localhost:3000",i=["Number","Car","Name","Wins","Best time (seconds)"];var c;async function s(n,e){const t=await fetch(n,e);t.parsedBody=await t.json();const r=t.headers.get("X-Total-Count");return r&&(t.count=+r),t}!function(n){n[n.started=0]="started",n[n.stopped=1]="stopped",n[n.drive=2]="drive"}(c||(c={}));const d=`${a}/engine`,l=async(n,e)=>(await s(`${d}?id=${n}&status=${e}`,{method:"PATCH"})).parsedBody,u=`${a}/garage`,m=async n=>{const e=(await s(`${u}/${n}`)).parsedBody;if(e instanceof Array||!e)throw new Error("This ID does not exist");return e},f=async n=>{const e=(await s(u,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})).parsedBody;if(e instanceof Array||!e)throw new Error("Object creation failed");return e},h=`${a}/winners`,p=["Acura","Alfa Romeo","Alpine","Apollo","Apple","Aston Martin","Audi","Automobili Pininfarina","Bentley","BMW","Bollinger","Brilliance","Bugatti","Buick","BYD","Cadillac","Chana","Chery","Chevrolet","Chrysler","Citroen","Continental","CUPRA","Dacia","Daewoo","Daihatsu","Datsun","Detroit Electric","Dodge","DS Automobiles","FAW","Ferrari","Fiat","Fisker","Ford","Foxtron","Geely","Genesis","GMC","Great Wall","Haval","Honda","Hummer","Hyundai","Ineos","Infiniti","Iran Khodro","JAC","Jaguar","Jeep","JETOUR","KIA","Koenigsegg","Lada","Lamborghini","Lancia","Land Rover","Lexus","Lifan","Lincoln","Lordstown","Lotus","Lucid","LvChi","Lynk & Co","Maserati","Maybach","Mazda","MCLaren","Mersedes","MG","MINI","Mitsubishi","Nikola","NIO","Nissan","Opel","Pagani","Peugeot","Polestar","Porsche","Qoros","Range Rover","Ravon","Renault","Rimac","Rivian","Rolls-Royce","Saab","Saipa","SEAT","Skoda","Smart","SsangYong","SSC North America","Stellantis","Subaru","Suzuki","Tata","Tesla","Torsus","Toyota","VinFast","Volkswagen","Volvo","Xpeng","Zotye"],g=["Durango","Ram","Challenger","Charger","Grand Caravan","X7","X5","X3","X6 M","X6","X1","X4","C3 Aircross","C5 Aircross","Duster","CR-V","Corolla","C4 Cactus","DS3 Crossback","C1","C3","Berlingo Multispace","DS4 Crossback","UX 250h","NX 300h","LC 500","RX 350/200t","Rapid","Largus","IS 200t","LS 500h","RX","ES 200/250/350","Hatchback","CX-5","Sedan","CX-30","CX-9","CX-3","MX-5 Roadster","Phantom","Camry","Polo","Cullinan","Ghost","Dawn","Arkana","Sandero","Logan","Trafic Fourgon","Logan MCV","Captur","Kadjar","RAV4","Rio","Creta","Solaris"];function b(n,e,t){const r="string"==typeof n?document.querySelector(n):n;if(!r)throw new Error("Error target for create button");const o=document.createElement("button");return o.innerText=e,t&&o.classList.add(...t),r.append(o),o}const y={page:1,pageWin:1,carCount:0,editCarId:0,carsId:[],wins:[]};var v,w;function C(n,e){return`<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="${n}" height="${n}" style="\n            fill: ${e};"><path fill-rule="evenodd" d="m2.2 125.4c0.9-4.5 2.2-9.9 2.2-9.9l-0.2-11.8c0 0 7.5-3.8 7.8-5.6 0.2-1.8 1.1-23.1 3.5-26.8 \n2.5-3.8-1.1-17.1-1.1-17.1h17.4c0 0 17.6-15.1 30-20.7 0 0 2-8.7-5.3-13.3l-0.2-2.7c0 0 16-2.2 37.3-3.8 0 0 7.3-7.9 18-9.1 \n10.7-1.2 135.3-10 166.2 13.4 30.9 23.4 53.1 39 53.1 39 0 0 126.9-0.8 157.2 31.6 0 0 0.4 11.1 0 16.9 0 0 3.1 5.3 7.3 6.6 \n4.3 1.3-1.1 8.8-1.1 8.8 0 0-8.9 4.8-9.5 11.6-0.7 6.9-18.1 15.6-26.3 21.6 0 0 5.2-58-44.5-62.4-49.7-4.5-53.2 59.1-53.2 \n59.1h-180.3c0 0-23.6 7.1-29.4 3.3 0 0-2.2-62.4-47.2-62.4-45 0-52.5 38.6-49 56 0 0-12.4 0.4-17.8-4.5-5.3-4.9-16.5-0.9-16.5-0.9 \n0 0-12.9 0.5-9.3-5.8 0 0-10-6.5-9.1-11.1zm10.2 0.6l34.5 1.7c0 0 13.8-42.7 55.7-42.4 41.8 0.3 50.3 47.2 50.3 47.2l205.3 2.1c0 0 \n2.1-45 50.6-49.3 48.6-4.3 54.4 49.3 54.4 49.3 0 0 12.2-0.1 15.3-2.5 0 0-8.7-0.9-11.1-3.1-2.5-2.2-4.7-48.4-56.3-48.4-51.7 0-57.9 \n47.2-57.9 47.2l-195.9 0.3c0 0-8.7-39.8-49.6-46.4l0.2-19.3 3.1-4.8c35.2 2.4 70.9 3.4 102.4 3.6l1.2 63.4c6-29.4 1.9-53.9-0.3-63.4q6 \n0 11.7 0c20.6 0 39-0.3 53.6-0.6l-0.5-1.2c-0.9-2.5-1.1-4.7-1-6.5-0.4-7.9 6.7-9.2 6.7-9.2-18.2-14.4-47.8-19.7-59.4-20.2-11.6-0.4-6.8 \n9.7-6.8 9.7l6.6 24.5-11.8-0.2c0-0.1-0.1 0.1-0.1 0h-0.1c-3.8-0.1-7.5-0.2-11.3-0.2l-0.1-0.2-3-33.6c0 0-49.3-2.6-58 13.1l2.1 \n19.3c-11.3-0.2-21.8 0.2-30.6 0.1l-0.5-0.1-26.9-0.4c8.3 0.7 16.7 1.4 25.1 2l-4.8 4.2-0.4 18.6c0 0-46.3-0.4-60.1 43.2 0 \n0-9.6-8.3-10.7-17.6 0 0-14.7 3.1-26.7 0 0 0-2.5 8.6 5.1 20.1zm34.8-69.2c1.6-1.1 26.8-19.2 30.9-22.9 4.2-3.7 4.6-7.3 \n4.6-7.3zm270.7 0.1c0 0-43.4-35-74.2-40.5-30.7-5.6-98.1-2.7-118.2 7.3-19.3 9.7-74 30.1-39.9 31.5-19.2-10.4 67.1-35 \n67.1-35 0 0 75.2-7.8 103.3 2.4 28 10.2 59 36.7 59 36.7 3.3 0.1 5.1 0.2 5.1 0.2zm-205-47.3l5.3 4c95.3-8.9 133.8-0.6 \n147.8 4.7-50.5-22.4-153.1-8.7-153.1-8.7zm-48.1 10.8v3.1c0 0 28.5-4.7 44.5-5.9zm232 39.8c0 0 7.1-4.6 \n2.3-9.8-4.7-5.1-10.7-4.8-10.7-4.8 0 0 13 5.7 8.4 14.6zm27.1 1.9c21.3 16.9 9.2 59.3 8.3 62.2 21-50.5-8.3-62.2-8.3-62.2zm19.5 \n62.4h7.8c3.3-22.1 17.5-32.1 17.5-32.1-17.5-1.5-25.3 32.1-25.3 32.1zm138.3-28c4.4-4.4 0-8.7 0-8.7-18.9-14-60.1-14.3-60.1-14.3 \n29.1 9 33.1 17.6 39.9 21.2 6.8 3.6 20.2 1.8 20.2 1.8zm-457.2-32.4c-13.7 15.2 2 16.2 19.2 10.8 17.1-5.3 15.1-10.8 \n15.1-10.8zm225.2 8c0-0.9-0.8-1.7-1.7-1.7h-25.9c-0.9 0-1.6 0.8-1.6 1.7 0 0.9 0.7 1.6 1.6 1.6h25.9c0.9 0 1.7-0.7 \n1.7-1.6zm-104.9-2.2c0-0.9-0.7-1.5-1.5-1.5h-25.8c-0.9 0-1.5 0.6-1.5 1.5 0 0.8 0.6 1.4 1.5 1.4h25.8c0.8 0 1.5-0.6 1.5-1.4z"/><path d="m266 18.4q3.8 1.6 7 3.5c-0.1-0.1-1.9-1.6-7-3.5z"/>\n<path fill-rule="evenodd" d="m101.9 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5 \n  0-16.3 13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 4-3.9 \n  0-2.2-1.8-3.9-4-3.9-2.2 0-4 1.7-4 3.9zm21-18.5l-10.1 16 18.2-0.4c2-9.1-8.1-15.6-8.1-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8 \n  9.3-14.9 9.3-14.9zm-15.6 19.1l-9.2-16.5-8.4 16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1 \n  15.6zm9.3-23.6l-11.7-13.9c-8.4 4.1-7.2 16.1-7.2 16.1z"/>\n<path fill-rule="evenodd" d="m102.5 97.4c22.8 0 41.2 18.3 41.2 41 0 22.7-18.4 41-41.2 41-22.8 0-41.2-18.3-41.2-41 0-22.7 18.4-41 41.2-41zm-33.2 \n  40.2c0 17.9 14.6 32.5 32.6 32.5 18.1 0 32.7-14.6 32.7-32.5 0-18-14.6-32.5-32.7-32.5-18 0-32.6 14.5-32.6 32.5z"/>\n<path fill-rule="evenodd" d="m101.9 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5 \n  0-16.3 13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 4-3.9 \n  0-2.2-1.8-3.9-4-3.9-2.2 0-4 1.7-4 3.9zm21-18.5l-10.1 16 18.2-0.4c2-9.1-8.1-15.6-8.1-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8 \n  9.3-14.9 9.3-14.9zm-15.6 19.1l-9.2-16.5-8.4 16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1 \n  15.6zm9.3-23.6l-11.7-13.9c-8.4 4.1-7.2 16.1-7.2 16.1z"/><path fill-rule="evenodd" d="m101.9 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5 0-16.3 \n  13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 \n  4-3.9 0-2.2-1.8-3.9-4-3.9-2.2 0-4 1.7-4 3.9zm21-18.5l-10.1 16 18.2-0.4c2-9.1-8.1-15.6-8.1-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8 \n  9.3-14.9 9.3-14.9zm-15.6 19.1l-9.2-16.5-8.4 16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1 \n  15.6zm9.3-23.6l-11.7-13.9c-8.4 4.1-7.2 16.1-7.2 16.1z"/>\n<path fill-rule="evenodd" d="m409.1 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5 0-16.3 \n  13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 4-3.9 \n  0-2.2-1.8-3.9-4-3.9-2.2 0-4 1.7-4 3.9zm21-18.5l-10.2 16 18.2-0.4c2.1-9.1-8-15.6-8-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8 \n  9.3-14.9 9.3-14.9zm-15.6 19.1l-9.3-16.5-8.3 16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1 \n  15.6zm9.3-23.6l-11.8-13.9c-8.3 4.1-7.1 16.1-7.1 16.1z"/>\n<path fill-rule="evenodd" d="m409.7 97.4c22.8 0 41.2 18.3 41.2 41 0 22.7-18.4 41-41.2 41-22.8 0-41.2-18.3-41.2-41 0-22.7 18.4-41 \n  41.2-41zm-33.2 40.2c0 17.9 14.6 32.5 32.6 32.5 18.1 0 32.7-14.6 32.7-32.5 0-18-14.6-32.5-32.7-32.5-18 0-32.6 14.5-32.6 32.5z"/>\n<path fill-rule="evenodd" d="m409.1 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5 0-16.3 \n  13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 4-3.9 0-2.2-1.8-3.9-4-3.9-2.2 \n  0-4 1.7-4 3.9zm21-18.5l-10.2 16 18.2-0.4c2.1-9.1-8-15.6-8-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8 9.3-14.9 9.3-14.9zm-15.6 19.1l-9.3-16.5-8.3 \n  16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1 15.6zm9.3-23.6l-11.8-13.9c-8.3 4.1-7.1 16.1-7.1 16.1z"/>\n<path fill-rule="evenodd" d="m409.1 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5 \n0-16.3 13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 4-3.9 \n0-2.2-1.8-3.9-4-3.9-2.2 0-4 1.7-4 3.9zm21-18.5l-10.2 16 18.2-0.4c2.1-9.1-8-15.6-8-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8 \n9.3-14.9 9.3-14.9zm-15.6 19.1l-9.3-16.5-8.3 16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1 \n15.6zm9.3-23.6l-11.8-13.9c-8.3 4.1-7.1 16.1-7.1 16.1z"/> \n          </svg>`}function x(n,e,t){try{const r="string"==typeof n?document.querySelector(n):n;if(!r)throw new Error;const o=document.createElement(e);return t&&o.classList.add(...t),r.append(o),o}catch(n){throw new Error(`Error target or type for create ${e}`)}}async function _(){const n=y.pageWin;return await(async({page:n,limit:e,sort:t,order:r})=>{const{parsedBody:o,count:a}=await s(`${h}?_page=${n}&_limit=${e}&_sort=${t}&_order=${r}`);return{items:o,count:a}})({page:n,limit:7,sort:w.id,order:v.ASC})}function S(n,e,t,r){const o=x(n,"div",["car-track"]);return function(n,e,t){const r=x(n,"div");b(r,"SELECT").id="S"+t.toString();const o=b(r,"REMOVE");o.id="R"+t.toString(),o.style.zIndex="1",x(r,"h3").innerText=e}(o,e,r),function(n,e,t){const r=x(n,"div");b(r,"A",["car-A"]).id="A"+t.toString();const o=b(r,"B",["car-B"]);o.id="B"+t.toString(),o.disabled=!0;const a=x(r,"div",["avto-road"]),i=x(a,"div",["avto-svg"]);i.innerHTML=C(100,e),i.id="C"+t.toString();const c=x(a,"img",["flag"]);c.src="./assets/flag.png",c.alt="flag"}(o,t,r),o}!function(n){n[n.ASC=0]="ASC",n[n.DESC=1]="DESC"}(v||(v={})),function(n){n[n.id=0]="id",n[n.wins=1]="wins",n[n.time=2]="time"}(w||(w={}));var z,E,k,T,A=function(n,e,t,r){if("a"===t&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?n!==e||!r:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===t?r:"a"===t?r.call(n):r?r.value:e.get(n)};class R{constructor(n,e,t){z.add(this),E.set(this,"select"),e instanceof HTMLElement?this._elRoot=e:this._elRoot=document.getElementById(e),this._customSelect=document.createElement("select"),A(this,z,"m",k).call(this,n,this._customSelect),this._customSelect.classList.add(A(this,E,"f")),A(this,z,"m",T).call(this,this._customSelect,t),this._elRoot.append(this._customSelect)}get value(){return this._customSelect.value}disabled(n){this._customSelect.disabled=!!n}addClasses(n){this._customSelect.classList.add(n)}}function L(n,e){const t=document.querySelector(`#A${n}`),r=document.querySelector(`#B${n}`);t&&r&&(t.disabled=e,r.disabled=!e)}function $(n,e,t,r,o,a){const i=a?"update":"create",c=new R(e,n,t);c.addClasses(i);const d=x(n,"input",[i]);d.type="color";const l=b(n,r,o);a?(c.disabled(!0),d.disabled=!0,l.disabled=!0,l.addEventListener("click",(async()=>await async function(n,e){const t=n.value,r=e.value,o=new F(t,r);await(async(n,e)=>{const t=await s(`${u}/${n}`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});if(200===t.status)return t.parsedBody;throw new Error("Object update failed")})(y.editCarId,o),G()}(c,d)))):l.addEventListener("click",(()=>async function(n,e){const t=n.value,r=e.value,o=new F(t,r);await f(o),G()}(c,d)))}function I(n){const e=b(n,"RACE",["form__btn_race"]),t=b(n,"RESET",["form__btn_reset"]),r=b(n,"GENERATE CARS",["form__btn_generate"]);e.addEventListener("click",(async()=>{y.wins=[];let n=[];document.querySelectorAll(".avto-svg").forEach((async e=>{const t=+e.id.slice(1);L(t,!0),n.push(H(t))})),Promise.all(n).then()})),t.addEventListener("click",(async()=>{let n=[];y.carsId.forEach((async e=>{L(e[0],!1),n.push(J(e[0]))})),Promise.all(n).then()})),r.addEventListener("click",(async()=>await async function(n){const e=[];for(let n=0;n<100;n++){const n=D();e.push(f(n))}y.carCount<7?e.push(M(".garage")):y.carCount+=100,Promise.all(e).then((n=>{document.querySelector("h1.count").innerText=`Garage (${y.carCount})`}))}()))}async function M(n,e,t=7){const r="string"==typeof n?document.querySelector(n):n;if(!r)throw new Error("target element does not exist");const o=null!=e?e:(await X(y.page)).items;if(o){const n=function(n){const e=document.querySelector(".cars");return e?(e.remove(),x(n,"div",["cars"])):x(n,"div",["cars"])}(r);if(function(n){n.addEventListener("click",(async n=>await async function(n){const e=n.target,t=+e.id.slice(1);switch(e.id[0]){case"R":await(async n=>200===(await s(`${u}/${n}`,{method:"DELETE"})).status)(t),G();break;case"S":y.editCarId=t,async function(){const n=document.querySelector("select.update"),e=document.querySelector("input.update"),t=document.querySelector(".form__btn_update");if(n&&e&&t){n.disabled=!1,e.disabled=!1,t.disabled=!1;const o=await m(y.editCarId);n.value=(r=o.name,p.filter((n=>r.includes(n)))[0]),e.value=o.color}var r}();break;case"A":H(t),L(t,!0);break;case"B":J(t),L(t,!1)}}(n)))}(n),o instanceof Array)for(let e=0;e<t&&!(e>=o.length);e++)S(n,o[e].name,o[e].color,o[e].id);else S(n,o.name,o.color,o.id)}W()}async function q(n){const e=document.querySelector(".winners");if(null==e?void 0:e.classList.contains("hidden")){y.page=n?y.page+1:y.page-1;const e=document.querySelector(".garage"),t=document.querySelector(".page");t&&(t.innerText=`Page #${y.page}`),e&&await M(e)}else{y.pageWin=n?y.pageWin+1:y.pageWin-1,document.querySelector(".winners");const e=document.querySelector("h2");e&&(e.innerText=`Page #${y.pageWin}`)}}E=new WeakMap,z=new WeakSet,k=function(n,e){for(let t=0;t<n.length;t++){const r=n[t],o=document.createElement("option");o.textContent=r,o.value=r,e.appendChild(o)}},T=function(n,e){n.addEventListener("change",(()=>{n.dispatchEvent(new CustomEvent("select",{detail:{[e]:n.value},bubbles:!0}))}))};var P,B,j=function(n,e,t,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?n!==e||!o:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(n,t):o?o.value=t:e.set(n,t),t},O=function(n,e,t,r){if("a"===t&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?n!==e||!r:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===t?r:"a"===t?r.call(n):r?r.value:e.get(n)};class F{constructor(n,e){P.set(this,0),B.set(this,0),this.name=n,this.color=e}set speed(n){j(this,P,n,"f")}get speed(){return O(this,P,"f")}set id(n){j(this,B,n,"f")}get id(){return O(this,B,"f")}}function N(n){return Math.floor(Math.random()*(n+1))}function D(){const n=`rgb(${N(255)},${N(255)},${N(255)})`,e=p[N(p.length)]+" "+g[N(g.length)];return new F(e,n)}async function X(n=1,e=7){const t=await(async(n,e)=>{const{parsedBody:t,count:r}=await s(`${u}?_page=${n}&_limit=${e}`);return{items:t,count:r}})(n,e);return t.count&&(y.carCount=t.count),t}function W(){const n=y.carCount>1?Math.ceil(y.carCount/7):1;if(y.carCount>7){const e=document.querySelector(".footer__btn_perv"),t=document.querySelector(".footer__btn_next");if(!t||!e)throw new Error("Target element does not exist");1===n?(e.disabled=!0,t.disabled=!0):1===y.page?(e.disabled=!0,t.disabled=!1):y.page===n?(e.disabled=!1,t.disabled=!0):(e.disabled=!1,t.disabled=!1)}}async function G(){await M(".garage"),document.querySelector("h1.count").innerText=`Garage (${y.carCount})`}async function H(n,e){try{const t=e||document.querySelector(`#C${n}`);if(!t)throw new Error("Not existing car ID");const{velocity:r,distance:o}=await l(n,"started"),a=o/r,i=await async function(n,e){let t=performance.now(),r=requestAnimationFrame((function o(a){let i=(a-t)/n;e.style.left=100*i+"%",i<1&&(r=requestAnimationFrame(o))}));return r}(a,t);y.carsId.push([n,i]);const c=await(async n=>{let e=!1;try{const t=await fetch(`${d}?id=${n}&status=drive`,{method:"PATCH"});!t||t instanceof Array||200!==t.status||(e=!0)}catch(n){console.log("Car brocken")}finally{return{success:e}}})(n);if(c.success){const e=await m(n);0===y.wins.length&&function(n,e){var t,r;const o=null!==(t=document.querySelector("span"))&&void 0!==t?t:document.createElement("span");o.innerText=`${n.name} won with time ${e}`,o.style.color="gold",o.style.paddingLeft="5%",null===(r=document.querySelector(".count"))||void 0===r||r.appendChild(o),(async n=>{const e=(await s(h,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})).parsedBody;if(e instanceof Array||!e)throw new Error("Object creation failed")})({wins:1,time:e})}(e,a),y.wins.push(n)}else console.log(`car ${n} brocken 500`)}catch(n){console.log("Error 12345")}}async function J(n){const e=document.querySelector(`#C${n}`),t=await l(n,"stopped"),r=y.carsId.filter((e=>e[0]===n));console.log(r[0][1]);const o=cancelAnimationFrame(r[0][1]);console.log(o),t&&e&&(e.style.left="0%")}P=new WeakMap,B=new WeakMap;const V="hidden";function U(n){const e=document.querySelector(".garage"),t=document.querySelector(".winners");n?(null==e||e.classList.remove(V),null==t||t.classList.add(V)):(null==e||e.classList.add(V),null==t||t.classList.remove(V))}!function(){!function(){const n=x("body","header",["wrapper"]),e=x(n,"div",["header"]),t=b(e,"TO GARAGE",["header__btn_to-garage"]),r=b(e,"TO WINNERS",["header__btn_to-winners"]);t.addEventListener("click",(()=>U(!0))),r.addEventListener("click",(()=>U(!1)))}();const n=x("body","main",["wrapper"]);x(n,"main",["main"]),function(){const n=x("body","footer",["wrapper"]),e=x(n,"div",["footer"]),t=b(e,"PREV",["footer__btn_perv"]);t.disabled=!0;const r=b(e,"NEXT",["footer__btn_next"]);r.disabled=!0,r.style.zIndex="1",t.addEventListener("click",(async()=>{q(!1),W()})),r.addEventListener("click",(async()=>{q(!0),W()}))}()}(),async function(){const n=await X(y.page),e=x(".main","selection",["garage"]);!function(n){const e=x(n,"div",["form"]),t=x(e,"div",["form__create-car"]),r=x(e,"div",["form__update-car"]),o=x(e,"div",["form__generate-car"]);$(t,p,"carCreate","CREATE",["form__btn_create"]),$(r,p,"carCreate","UPDATE",["form__btn_update"],!0),I(o)}(e),function(n){const e=x(n,"div",["info"]),t=x(e,"div",["info__count"]);x(t,"h1",["count"]).innerText=`Garage (${y.carCount})`;const r=x(e,"div",["info__page"]);x(r,"h2",["page"]).innerText=`Page #${y.page}`}(e),await M(e,n.items)}(),function(){const n=x(".main","selection",["winners","hidden"]);!function(n){const e=x(n,"div",["info"]),t=x(e,"div",["info__count"]);x(t,"h1").innerText="Winners (4)";const r=x(e,"div",["info__page"]);x(r,"h2").innerText="Page# 1"}(n),async function(n){var e;const t=await _();t.count&&function(n){const e=document.querySelector("h1");e&&(e.innerText=`Winners (${n})`)}(t.count);const r=x(n,"table",["table"]),o=x(r,"thead");!function(n,e){for(let t=0;t<e.length;t++)x(n,"th").innerText=e[t]}(x(o,"tr"),i);const a=x(r,"tbody");null===(e=t.items)||void 0===e||e.forEach((async n=>{const{name:e,color:t}=await m(n.id),r=C(50,t);!function(n,e){x(n,"td").innerText=e[0],x(n,"td").innerHTML=e[1],x(n,"td").innerText=e[2],x(n,"td").innerText=e[3],x(n,"td").innerText=e[4]}(x(a,"tr"),[n.id.toString(),r,e,n.wins.toString(),n.time.toString()])}))}(n)}()})()})();