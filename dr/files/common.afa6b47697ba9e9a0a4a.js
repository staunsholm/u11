/*! For license information please see common.afa6b47697ba9e9a0a4a.js.LICENSE.txt */
(self.webpackChunkhydra=self.webpackChunkhydra||[]).push([[592],{1910:e=>{"use strict";var t,r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i="SCOPED",a="UNSCOPED",u=(o(t={},i,l(!0)),o(t,a,l(!1)),t);function c(e,t){for(var r=arguments.length,n=Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return n.reduce(u[e?i:a],[t])}function l(e){return function(t,r){if("object"===(void 0===r?"undefined":n(r)))return function(e,t,r){return e.concat((n=t,Object.keys(n).map((function(e){return[e,n[e]]})).reduce(s,[])).reduce((function(t,n){return t.concat(f(e,n,r))}),[]));var n}(t,r,"--");var o=f(t,r,"__");return e?o:[r].concat(o)}}function s(e,t){var n=r(t,2),o=n[0],i=n[1];return!1!==i&&""!==i&&null!=i&&e.push(o+(!0!==i?"-"+i:"")),e}function f(e,t,r){return e.map((function(e){return""+e+r+t}))}e.exports=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return c.apply(void 0,[!1].concat(t)).join(" ")},e.exports.scoped=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return c.apply(void 0,[!0].concat(t)).join(" ")},e.exports.single=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return c.apply(void 0,[!0].concat(t)).pop()}},9983:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(5697),o=r.n(n),i=r(7294),a=r(2436);function u(e){let{variables:t,children:r}=e;const n=(0,i.useMemo)((()=>({...t})),[JSON.stringify(t)]);return i.createElement(a.Z.Provider,{value:n},r)}u.displayName="Environment.Provider",u.propTypes={},u.defaultProps={variables:{}};var c=r(8452);function l(e){let{children:t}=e;return i.createElement(i.Fragment,null,t((0,c.Z)()))}l.propTypes={children:o().func.isRequired},l.Provider=u},2436:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(7294),o=r(4155);const i=n.createContext(null!==o&&void 0!==o&&o.env?{USER_UPLOAD_API_BASE_PATH:o.env.USER_UPLOAD_API_BASE_PATH,TTS_BASE_PATH:o.env.TTS_BASE_PATH,FRONT_PAGE_EDITION_ID:o.env.FRONT_PAGE_EDITION_ID,CXENSE_RECOMMENDED_NEWS_WIDGET_ID:o.env.CXENSE_RECOMMENDED_NEWS_WIDGET_ID,CXENSE_MOST_VIEWED_DAY_WIDGET_ID:o.env.CXENSE_MOST_VIEWED_DAY_WIDGET_ID,CXENSE_MOST_VIEWED_WEEK_WIDGET_ID:o.env.CXENSE_MOST_VIEWED_WEEK_WIDGET_ID,NAVIGATION_SITE_URN:o.env.NAVIGATION_SITE_URN,CXENSE_PATH:o.env.CXENSE_PATH,GRAPHQL_BASE_PATH:o.env.GRAPHQL_BASE_PATH,GRAPHQL_APPLICATION_NAME:o.env.GRAPHQL_APPLICATION_NAME,MIDAS_OEMBED_BASE_PATH:o.env.MIDAS_OEMBED_BASE_PATH,BASE_HREF:o.env.BASE_HREF}:{})},8452:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(7294),o=r(2436);function i(){const e=(0,n.useContext)(o.Z);return(0,n.useMemo)((()=>e),[JSON.stringify(e)])}},6864:(e,t,r)=>{"use strict";r.d(t,{J:()=>l,Z:()=>s});var n=r(7294),o=r(5697),i=r.n(o),a=r(3422);function u(e){const{children:t}=e,[r,o]=(0,n.useState)(),[i,u]=(0,n.useState)(),c=(0,n.useCallback)(((e,t)=>(o(e),u(t||l.DEFAULT),!0)),[]),s=(0,n.useMemo)((()=>({requestPriority:c,priorityPlayer:r,playerType:i})),[i,r,c]);return n.createElement(a.Z.Provider,{value:s},t)}u.displayName="PlayerPriority.Provider",u.propTypes={};var c=r(6575);const l={AUDIO_ONLY:"AUDIO_ONLY",DEFAULT:"DEFAULT"};function s(e){let{onChange:t,children:r}=e;const{requestPriority:o,priorityPlayer:i,playerType:a}=(0,c.Z)();return(0,n.useEffect)((()=>{i&&t&&t(i,a)}),[i,a]),n.createElement(n.Fragment,null,r({requestPriority:o}))}s.propTypes={children:i().func.isRequired,onChange:i().func},s.defaultProps={onChange:void 0},s.Provider=u},3422:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r(7294).createContext({requestPriority:()=>!0})},6575:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(7294),o=r(3422);function i(){const{requestPriority:e,priorityPlayer:t,playerType:r}=(0,n.useContext)(o.Z);return{requestPriority:e,priorityPlayer:t,playerType:r}}},7697:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r(7294).createContext({dispatchEvent:()=>{}})},1622:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(7294),o=r(7697);function i(){const{dispatchEvent:e}=(0,n.useContext)(o.Z);return{dispatchEvent:e}}},8726:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(2928),o=r(7294),i=r(3935),a=r(405),u=r(6864),c=r(5697),l=r.n(c),s=r(7697);function f(e){let{productName:t,applicationName:r,pageName:n,allowedEvents:i,children:a}=e;const u=(0,o.useCallback)((e=>{if(!(t&&r&&n&&e&&"string"==typeof e.action&&Array.isArray(e.context)))return;const o=e.context.filter((e=>e&&"string"==typeof e))||[],a=[n,...o,e.action].join(":");if(null==i||!i.length||!i.some((e=>e.test(a))))return;const u=new CustomEvent("dr:analytics",{bubbles:!0,detail:{product:t,application:r,pageName:n,context:o,action:e.action,actionValue:"string"==typeof e.actionValue?e.actionValue:void 0}});window.dispatchEvent(u);let c=window;for(;c.parent!==c;){c=c.parent;try{c.dispatchEvent(u)}catch(e){break}}}),[t,r,n,JSON.stringify(i.map((e=>null==e?void 0:e.toString())))]),c=(0,o.useMemo)((()=>({dispatchEvent:u})),[u]);return o.createElement(s.Z.Provider,{value:c},a)}f.displayName="Analytics.Provider",f.propTypes={},f.defaultProps={allowedEvents:[]};var p=r(1622);function y(e){let{children:t}=e;return o.createElement(o.Fragment,null,t((0,p.Z)()))}y.propTypes={children:l().func.isRequired},y.Provider=f;var d=r(9983);r.p=window.HYDRA_PUBLIC_PATH;const v=e=>{const{displayName:t}=e,r=document.querySelector('.hydra-root[data-hydra-name="'.concat(t,'"]')),c=r.innerHTML;try{(0,i.hydrate)((0,n.Z)(a.B6,{},void 0,(0,n.Z)(u.Z.Provider,{},void 0,(0,n.Z)(y.Provider,{applicationName:"hydra",productName:"drdk",pageName:(l=t,l.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),allowedEvents:[/^search-page:search-page-content:.*/]},void 0,(0,n.Z)(d.Z.Provider,{variables:{...window.HYDRA_ENV}},void 0,o.createElement(e,window.HYDRA_PROPS[t]))))),r)}catch(e){throw console.log("Shows the SSR version - Hydrate failed - react is not active. Error: ".concat(e)),r.innerHTML=c,e}var l}},1143:e=>{"use strict";e.exports=function(e,t,r,n,o,i,a,u){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,o,i,a,u],s=0;(c=new Error(t.replace(/%s/g,(function(){return l[s++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},7418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))r.call(i,l)&&(u[l]=i[l]);if(t){a=t(i);for(var s=0;s<a.length;s++)n.call(i,a[s])&&(u[a[s]]=i[a[s]])}}return u}},4155:e=>{var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,c=[],l=!1,s=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):s=-1,c.length&&p())}function p(){if(!l){var e=a(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++s<t;)u&&u[s].run();s=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function d(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new y(e,t)),1!==c.length||l||a(p)},y.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},2703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},5697:(e,t,r)=>{e.exports=r(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9590:e=>{var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var u,c,l,s;if(Array.isArray(e)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!a.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((u=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!i(e[l[c]],a[l[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},2408:(e,t,r)=>{"use strict";var n=r(7418),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,u=60110,c=60112;t.Suspense=60113;var l=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),a=f("react.provider"),u=f("react.context"),c=f("react.forward_ref"),t.Suspense=f("react.suspense"),l=f("react.memo"),s=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function h(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}function m(){}function _(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var b=_.prototype=new m;b.constructor=_,n(b,h.prototype),b.isPureReactComponent=!0;var E={current:null},g=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,r){var n,i={},a=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)g.call(t,n)&&!w.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];i.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===i[n]&&(i[n]=c[n]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:E.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,r,n,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===n?"."+A(c,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),O(a,t,r,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(S,"$&/")+"/")+e)),t.push(a)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=n+A(u=e[l],l);c+=O(u,t,r,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(u=e.next()).done;)c+=O(u=u.value,t,r,s=n+A(u,l++),a);else if("object"===u)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function k(e,t,r){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function j(){var e=I.current;if(null===e)throw Error(y(321));return e}var N={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:k,forEach:function(e,t,r){k(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return k(e,(function(){t++})),t},toArray:function(e){return k(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error(y(143));return e}},t.Component=h,t.PureComponent=_,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var i=n({},e.props),a=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=E.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)g.call(t,s)&&!w.hasOwnProperty(s)&&(i[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];i.children=l}return{$$typeof:o,type:e.type,key:a,ref:u,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=T,t.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return j().useCallback(e,t)},t.useContext=function(e,t){return j().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return j().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return j().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return j().useLayoutEffect(e,t)},t.useMemo=function(e,t){return j().useMemo(e,t)},t.useReducer=function(e,t,r){return j().useReducer(e,t,r)},t.useRef=function(e){return j().useRef(e)},t.useState=function(e){return j().useState(e)},t.version="17.0.2"},53:(e,t)=>{"use strict";var r,n,o,i;if("object"==typeof performance&&"function"==typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();t.unstable_now=function(){return u.now()-c}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var l=null,s=null,f=function(){if(null!==l)try{var e=t.unstable_now();l(!0,e),l=null}catch(e){throw setTimeout(f,0),e}};r=function(e){null!==l?setTimeout(r,0,e):(l=e,setTimeout(f,0))},n=function(e,t){s=setTimeout(e,t)},o=function(){clearTimeout(s)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,y=window.clearTimeout;if("undefined"!=typeof console){var d=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof d&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var v=!1,h=null,m=-1,_=5,b=0;t.unstable_shouldYield=function(){return t.unstable_now()>=b},i=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5};var E=new MessageChannel,g=E.port2;E.port1.onmessage=function(){if(null!==h){var e=t.unstable_now();b=e+_;try{h(!0,e)?g.postMessage(null):(v=!1,h=null)}catch(e){throw g.postMessage(null),e}}else v=!1},r=function(e){h=e,v||(v=!0,g.postMessage(null))},n=function(e,r){m=p((function(){e(t.unstable_now())}),r)},o=function(){y(m),m=-1}}function w(e,t){var r=e.length;e.push(t);e:for(;;){var n=r-1>>>1,o=e[n];if(!(void 0!==o&&0<S(o,t)))break e;e[n]=t,e[r]=o,r=n}}function T(e){return void 0===(e=e[0])?null:e}function P(e){var t=e[0];if(void 0!==t){var r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length;n<o;){var i=2*(n+1)-1,a=e[i],u=i+1,c=e[u];if(void 0!==a&&0>S(a,r))void 0!==c&&0>S(c,a)?(e[n]=c,e[u]=r,n=u):(e[n]=a,e[i]=r,n=i);else{if(!(void 0!==c&&0>S(c,r)))break e;e[n]=c,e[u]=r,n=u}}}return t}return null}function S(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}var A=[],O=[],k=1,C=null,I=3,j=!1,N=!1,x=!1;function R(e){for(var t=T(O);null!==t;){if(null===t.callback)P(O);else{if(!(t.startTime<=e))break;P(O),t.sortIndex=t.expirationTime,w(A,t)}t=T(O)}}function D(e){if(x=!1,R(e),!N)if(null!==T(A))N=!0,r(M);else{var t=T(O);null!==t&&n(D,t.startTime-e)}}function M(e,r){N=!1,x&&(x=!1,o()),j=!0;var i=I;try{for(R(r),C=T(A);null!==C&&(!(C.expirationTime>r)||e&&!t.unstable_shouldYield());){var a=C.callback;if("function"==typeof a){C.callback=null,I=C.priorityLevel;var u=a(C.expirationTime<=r);r=t.unstable_now(),"function"==typeof u?C.callback=u:C===T(A)&&P(A),R(r)}else P(A);C=T(A)}if(null!==C)var c=!0;else{var l=T(O);null!==l&&n(D,l.startTime-r),c=!1}return c}finally{C=null,I=i,j=!1}}var L=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){N||j||(N=!0,r(M))},t.unstable_getCurrentPriorityLevel=function(){return I},t.unstable_getFirstCallbackNode=function(){return T(A)},t.unstable_next=function(e){switch(I){case 1:case 2:case 3:var t=3;break;default:t=I}var r=I;I=t;try{return e()}finally{I=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=L,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=I;I=e;try{return t()}finally{I=r}},t.unstable_scheduleCallback=function(e,i,a){var u=t.unstable_now();switch("object"==typeof a&&null!==a?a="number"==typeof(a=a.delay)&&0<a?u+a:u:a=u,e){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return e={id:k++,callback:i,priorityLevel:e,startTime:a,expirationTime:c=a+c,sortIndex:-1},a>u?(e.sortIndex=a,w(O,e),null===T(A)&&e===T(O)&&(x?o():x=!0,n(D,a-u))):(e.sortIndex=c,w(A,e),N||j||(N=!0,r(M))),e},t.unstable_wrapCallback=function(e){var t=I;return function(){var r=I;I=t;try{return e.apply(this,arguments)}finally{I=r}}}},3840:(e,t,r)=>{"use strict";e.exports=r(53)},6774:e=>{e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var l=i[c];if(!u(l))return!1;var s=e[l],f=t[l];if(!1===(o=r?r.call(n,s,f,l):void 0)||void 0===o&&s!==f)return!1}return!0}},2928:(e,t,r)=>{"use strict";var n;function o(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var u=new Array(a),c=0;c<a;c++)u[c]=arguments[c+3];t.children=u}if(t&&i)for(var l in i)void 0===t[l]&&(t[l]=i[l]);else t||(t=i||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}r.d(t,{Z:()=>o})}}]);