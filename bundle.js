!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){e.exports=r(4)()},function(e,t,r){"use strict";e.exports=r(2)},function(e,t,r){"use strict";
/** @license React v16.8.4
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(3),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,u,i,c){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=[r,n,o,u,i,c],f=0;(e=Error(t.replace(/%s/g,function(){return a[f++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_={};function O(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||g}function S(){}function j(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=O.prototype;var P=j.prototype=new S;P.constructor=j,n(P,O.prototype),P.isPureReactComponent=!0;var w={current:null},k={current:null},x=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n=void 0,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var f=Array(a),l=0;l<a;l++)f[l]=arguments[l+2];o.children=f}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:u,type:e,key:i,ref:c,props:o,_owner:k.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var T=/\/+/g,$=[];function A(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function M(e,t,r){return null==e?0:function e(t,r,n,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var a=!1;if(null===t)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case u:case i:a=!0}}if(a)return n(o,t,""===r?"."+D(t,0):r),1;if(a=0,r=""===r?".":r+":",Array.isArray(t))for(var f=0;f<t.length;f++){var l=r+D(c=t[f],f);a+=e(c,l,n,o)}else if(l=null===t||"object"!=typeof t?null:"function"==typeof(l=h&&t[h]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),f=0;!(c=t.next()).done;)a+=e(c=c.value,l=r+D(c,f++),n,o);else"object"===c&&v("31","[object Object]"==(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return a}(e,"",t,r)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,function(e){return e}):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(T,"$&/")+"/"),M(e,q,t=A(t,u,n,o)),I(t)}function z(){var e=w.current;return null===e&&v("307"),e}var B={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,U,t=A(null,null,t,r)),I(t)},count:function(e){return M(e,function(){return null},null)},toArray:function(e){var t=[];return L(e,t,null,function(e){return e}),t},only:function(e){return R(e)||v("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:j,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return z().useCallback(e,t)},useContext:function(e,t){return z().useContext(e,t)},useEffect:function(e,t){return z().useEffect(e,t)},useImperativeHandle:function(e,t,r){return z().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return z().useLayoutEffect(e,t)},useMemo:function(e,t){return z().useMemo(e,t)},useReducer:function(e,t,r){return z().useReducer(e,t,r)},useRef:function(e){return z().useRef(e)},useState:function(e){return z().useState(e)},Fragment:c,StrictMode:a,Suspense:d,createElement:C,cloneElement:function(e,t,r){null==e&&v("267",e);var o=void 0,i=n({},e.props),c=e.key,a=e.ref,f=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,f=k.current),void 0!==t.key&&(c=""+t.key);var l=void 0;for(o in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)x.call(t,o)&&!E.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==l?l[o]:t[o])}if(1===(o=arguments.length-2))i.children=r;else if(1<o){l=Array(o);for(var s=0;s<o;s++)l[s]=arguments[s+2];i.children=l}return{$$typeof:u,type:e.type,key:c,ref:a,props:i,_owner:f}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.8.4",unstable_ConcurrentMode:p,unstable_Profiler:f,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:w,ReactCurrentOwner:k,assign:n}},F={default:B},N=F&&B||F;e.exports=N.default||N},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var f in r=Object(arguments[a]))o.call(r,f)&&(c[f]=r[f]);if(n){i=n(r);for(var l=0;l<i.length;l++)u.call(r,i[l])&&(c[i[l]]=r[i[l]])}}return c}},function(e,t,r){"use strict";var n=r(5);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,u,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),u=r(0),i=r.n(u);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=function(e){var t=function(t){function r(e){var t,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),n=this,o=f(r).call(this,e),t=!o||"object"!==c(o)&&"function"!=typeof o?l(n):o,p(l(t),"_getAuthParams",function(){if(t.props.authParams)return t.props.authParams;var e={client_id:t.props.clientId,cookie_policy:t.props.cookiePolicy,login_hint:t.props.loginHint,hosted_domain:t.props.hostedDomain,fetch_basic_profile:t.props.fetchBasicProfile,ux_mode:t.props.uxMode,redirect_uri:t.props.redirectUrl,include_granted_scopes:!0,discoveryDocs:t.props.discoveryDocs,prompt:t.props.prompt,scope:t.props.scope};return"code"===t.props.responseType&&(e.response_type=t.props.responseType,e.access_type="offline"),e}),p(l(t),"authorize",function(){t.state.gapiLoaded&&(t.props.preAuthorize&&t.props.preAuthorize(),window.gapi.auth2.authorize(t._getAuthParams(),function(e){e.error?t.props.onError(e):t.props.onSuccess(e)}))}),t.state={gapiLoaded:!1},t.gapiUrl="https://apis.google.com/js/client.js",t}var u,i,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(r,n.Component),u=r,(i=[{key:"componentDidMount",value:function(){var e=this;!function(e,t,r){if(document.getElementById(e))r();else{var n=document.createElement("script");n.id=e,n.src=t,n.onload=function(){r()},document.body.appendChild(n)}}("gapi",this.gapiUrl,function(){e.setState({gapiLoaded:!0})})}},{key:"render",value:function(){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){p(e,t,r[t])})}return e}({},this.props,this.state,{authorize:this.authorize});return o.a.createElement(e,t)}}])&&a(u.prototype,i),y&&a(u,y),r}();return t.propTypes={onSuccess:i.a.func.isRequired,onError:i.a.func.isRequired,preAuthorize:i.a.func,authParams:i.a.object,clientId:i.a.string,scope:i.a.string,redirectUri:i.a.string,cookiePolicy:i.a.string,loginHint:i.a.string,hostedDomain:i.a.string,fetchBasicProfile:i.a.bool,prompt:i.a.string,discoveryDocs:i.a.array,uxMode:i.a.string,responseType:i.a.string},t};t.default={withGoogleOAuth:y}}]);