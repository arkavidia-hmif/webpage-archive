(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"HaE+":function(e,t,n){"use strict";function o(e,t,n,o,i,r,a){try{var s=e[r](a),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(o,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function s(e){o(a,i,r,s,c,"next",e)}function c(e){o(a,i,r,s,c,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return i}))},OFd8:function(e,t,n){"use strict";var o=n("MX0m"),i=n.n(o),r=n("q1tI"),a=n.n(r),s=a.a.createElement;t.a=function(e){var t=e.color,n=void 0===t?"#431785":t,o=e.size,r=void 0===o?"50px":o,c=e.height,l=void 0===c?"50px":c;return s(a.a.Fragment,null,s("div",{id:"loader-container",className:i.a.dynamic([["3758654094",[l,n,r,r]]])},s("div",{id:"loader",className:i.a.dynamic([["3758654094",[l,n,r,r]]])})),s(i.a,{id:"3758654094",dynamic:[l,n,r,r]},["#loader-container.__jsx-style-dynamic-selector{width:100%;height:".concat(l,";position:relative;}"),"#loader.__jsx-style-dynamic-selector{border:5px solid ".concat(n,";border-top:5px solid transparent;border-radius:50%;width:").concat(r,";height:").concat(r,";-webkit-animation:spin-__jsx-style-dynamic-selector 2s linear infinite;animation:spin-__jsx-style-dynamic-selector 2s linear infinite;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0;}"),"@-webkit-keyframes spin-__jsx-style-dynamic-selector{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}","@keyframes spin-__jsx-style-dynamic-selector{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]))}},TkGN:function(e,t,n){"use strict";var o=n("MX0m"),i=n.n(o),r=n("q1tI"),a=n.n(r),s=n("iaY6"),c=a.a.createElement;t.a=function(e){var t=e.color,n=void 0===t?s.a.alertColors.redAlert:t,o=e.error,l=e.closable,d=void 0===l||l,m=Object(r.useState)(!1),u=m[0],f=m[1];return Object(r.useEffect)((function(){f(!1)}),[o]),u||!o?c(a.a.Fragment,null):c(a.a.Fragment,null,c("div",{id:"alert-body",className:i.a.dynamic([["3142127459",[n.main,n.text]]])},c("p",{className:i.a.dynamic([["3142127459",[n.main,n.text]]])},o),c("div",{id:"close-btn",onClick:function(){f(!0)},className:i.a.dynamic([["3142127459",[n.main,n.text]]])+" "+((d?"":"d-none")||"")},"X")),c(i.a,{id:"3142127459",dynamic:[n.main,n.text]},["#alert-body.__jsx-style-dynamic-selector{width:100%;background-color:".concat(n.main,";padding:1rem;padding-right:2.5rem;border-radius:5px;position:relative;}"),"#alert-body.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;color:".concat(n.text,";}"),"#close-btn.__jsx-style-dynamic-selector{position:absolute;top:0.75rem;right:0.75rem;margin:0;width:1.5rem;height:1.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;color:white;background-color:black;opacity:0.5;cursor:pointer;}","#close-btn.__jsx-style-dynamic-selector:hover{opacity:0.7;}"]))}},m8vN:function(e,t,n){"use strict";var o=n("MX0m"),i=n.n(o),r=n("q1tI"),a=n.n(r),s=n("zeE6"),c=n("CHOg"),l=n("nOHt"),d=n("YFqc"),m=n.n(d),u=[{title:"ANNOUNCEMENT",route:"/dashboard",haveChild:!1},{title:"PROFILE",route:"/dashboard/profile",haveChild:!1},{title:"COMPETITIONS",route:"/dashboard/competitions",haveChild:!0},{title:"PRE-EVENTS",route:"/dashboard/pre-events",haveChild:!0},{title:"ARKAVIDIA TALKS",route:"/dashboard/arkav-talks",haveChild:!0}],f=a.a.createElement,p=function(){var e=Object(l.useRouter)();return f("div",{id:"menu",className:"jsx-1553187819"},f("ul",{className:"jsx-1553187819"},u.map((function(t,n){var o="items";return t.haveChild&&e.pathname.startsWith(t.route)?o+=" current":t.haveChild||e.pathname!==t.route||(o+=" current"),f("li",{key:n,className:"jsx-1553187819 "+(o||"")},f(m.a,{href:t.route},f("a",{className:"jsx-1553187819"},t.title)))}))),f(i.a,{id:"1553187819"},["#menu.jsx-1553187819{overflow-y:hidden;}",".jsx-1553187819::-webkit-scrollbar{display:none;}","ul.jsx-1553187819{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:0;}",'#menu.jsx-1553187819:before{content:"";display:block;position:absolute;width:calc(100% - 2rem);bottom:1rem;left:1rem;border-bottom:0.5rem solid #c4c4c4;}',"li.jsx-1553187819{height:3rem;margin:0 2rem;border:0rem;border-image-slice:1;border-image-source:linear-gradient(90deg,#623fa2 0%,#f25785 100%);position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}","li.jsx-1553187819:hover{border-bottom:0.5rem solid;}","li.current.jsx-1553187819{border-bottom:0.5rem solid;}","a.jsx-1553187819{font-family:Viga;font-size:1.25rem;color:#623fa2 !important;white-space:nowrap;-webkit-text-decoration:none;text-decoration:none;}","@media (max-width:1000px){li.items.jsx-1553187819{height:2.2rem;margin:0 0.9rem;}.items.jsx-1553187819 a.jsx-1553187819{font-size:1rem;}}","@media (max-width:767px){ul.jsx-1553187819{margin-bottom:0;}#menu.jsx-1553187819:before{bottom:0rem;}}"]))},y=n("iaY6"),x=a.a.createElement;t.a=function(e){var t,n=e.children,o=Object(r.useContext)(c.a);return x("div",{className:"jsx-3169563655 container"},x("div",{className:"jsx-3169563655 row"},x("div",{className:"jsx-3169563655 col-12"},x("h1",{className:"jsx-3169563655"},"Dashboard"),x(s.a,{color:y.a.headerColors.plpi,headingLevel:6,size:"2rem"},"Halo, ",(null===(t=o.auth)||void 0===t?void 0:t.user.fullName)||"Selamat Datang"),x("br",{className:"jsx-3169563655"}),x("br",{className:"jsx-3169563655"}),x(p,null))),x("div",{className:"jsx-3169563655 row pt-3"},x("div",{className:"jsx-3169563655 col-12"},n)),x(i.a,{id:"3169563655"},[".container.jsx-3169563655{margin-top:3rem;padding-bottom:5rem;}","h1.jsx-3169563655{font-size:2rem;color:#431785;}","@media (max-width:1000px){.container.jsx-3169563655{margin-top:1rem;}}"]))}},rePB:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}))},t7J2:function(e,t,n){"use strict";var o=n("MX0m"),i=n.n(o),r=n("q1tI"),a=n.n(r),s=n("YFqc"),c=n.n(s),l=a.a.createElement;t.a=function(e){var t=e.title,n=e.body,o=e.buttonLink,r=void 0===o?null:o,a=e.buttonText,s=void 0===a?null:a,d=e.className,m=!(!r&&!s);return l("div",{className:"jsx-323312109 "+i.a.dynamic([["2048305778",[m?"":"display: none;",m?"":"display: none;"]]])+" "+"card-container ".concat(d)},l("div",{className:"jsx-323312109 "+i.a.dynamic([["2048305778",[m?"":"display: none;",m?"":"display: none;"]]])+" card"},l("div",{className:"jsx-323312109 "+i.a.dynamic([["2048305778",[m?"":"display: none;",m?"":"display: none;"]]])+" title"},t),l("div",{className:"jsx-323312109 "+i.a.dynamic([["2048305778",[m?"":"display: none;",m?"":"display: none;"]]])+" content"},n),l("br",{className:"jsx-323312109 "+i.a.dynamic([["2048305778",[m?"":"display: none;",m?"":"display: none;"]]])}),l("hr",{className:"jsx-323312109 "+i.a.dynamic([["2048305778",[m?"":"display: none;",m?"":"display: none;"]]])}),l("div",{className:"jsx-323312109 "+i.a.dynamic([["2048305778",[m?"":"display: none;",m?"":"display: none;"]]])+" link"},r?l(c.a,{href:r},l("a",{className:"jsx-323312109 "+i.a.dynamic([["2048305778",[m?"":"display: none;",m?"":"display: none;"]]])},s)):l("span",{className:"jsx-323312109 "+i.a.dynamic([["2048305778",[m?"":"display: none;",m?"":"display: none;"]]])},s))),l(i.a,{id:"323312109"},[".card-container.jsx-323312109{width:100%;position:relative;margin-bottom:1rem;}","hr.jsx-323312109{width:100%;color:#646464;}",".card.jsx-323312109{margin:auto;height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:1rem;border:1px solid #431785;border-radius:10px;background-color:white;}",".title.jsx-323312109{font-family:Viga;font-size:1.25rem;color:#05058d;}",".content.jsx-323312109{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;font-size:1.125rem;color:#646464;}",".link.jsx-323312109{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;font-size:1.125rem;font-weight:bold;}","a.jsx-323312109{color:#623fa2;-webkit-text-decoration:none;text-decoration:none;}","span.jsx-323312109{color:#646464;}","@media (max-width:576px){.title.jsx-323312109{font-size:1.125rem;}.content.jsx-323312109{font-size:1rem;}.link.jsx-323312109{font-size:1rem;}}"]),l(i.a,{id:"2048305778",dynamic:[m?"":"display: none;",m?"":"display: none;"]},["hr.__jsx-style-dynamic-selector{".concat(m?"":"display: none;",";}"),".link.__jsx-style-dynamic-selector{".concat(m?"":"display: none;",";}")]))}},tc18:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function l(e,t,n){return(l=c()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&i(r,n.prototype),r}).apply(null,arguments)}function d(e){var t="function"===typeof Map?new Map:void 0;return(d=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return l(e,arguments,s(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i(o,e)})(e)}n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var m=n("rePB");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return a(this,n)}}var f,p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,e);var t=u(n);function n(e,i){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),r=t.call(this,i||""),Object(m.a)(o(r),"code",void 0),Object(m.a)(o(r),"msg",void 0),r.code=e,r.msg=i||"",r}return n}(d(Error));!function(e){e[e.ERROR=0]="ERROR"}(f||(f={}))},zeE6:function(e,t,n){"use strict";var o=n("MX0m"),i=n.n(o),r=n("q1tI"),a=n("iaY6"),s=r.createElement;t.a=function(e){var t=e.children,n=e.headingLevel,o=void 0===n?1:n,c=e.color,l=void 0===c?a.a.headerColors.plbl:c,d=e.size,m="h".concat(o);return s(r.Fragment,null,s(m,{className:i.a.dynamic([["1197648362",[m,l,d?"font-size:"+d+";":""]]])},s("span",{className:i.a.dynamic([["1197648362",[m,l,d?"font-size:"+d+";":""]]])},t)),s(i.a,{id:"1197648362",dynamic:[m,l,d?"font-size:"+d+";":""]},["".concat(m,".__jsx-style-dynamic-selector{margin:0;}"),"span.__jsx-style-dynamic-selector{background-size:100%;background-image:".concat(l,";background-clip:text;-webkit-background-clip:text;text-fill-color:transparent;-webkit-text-fill-color:transparent;-moz-text-fill-color:transparent;-webkit-box-decoration-break:clone;").concat(d?"font-size:"+d+";":"",";}")]))}}}]);
//# sourceMappingURL=d37f7149db9a1b63691eaa76a39606670ca47c0f.709436f73aabb47502e3.js.map