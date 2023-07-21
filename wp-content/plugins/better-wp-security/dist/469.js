(globalThis.itsecWebpackJsonP=globalThis.itsecWebpackJsonP||[]).push([[469],{31511:(e,t,r)=>{"use strict";r.d(t,{sE:()=>k,x4:()=>p,PN:()=>d,pL:()=>E,NC:()=>m,N4:()=>w,CO:()=>x,AW:()=>O,SU:()=>j,ZE:()=>Z,UC:()=>C,xJ:()=>S,z8:()=>y,Y3:()=>P,bv:()=>b});var n=r(92819),o=r(6293),i=r(73470),s=r(4942),a=r(13092),c=r(86033);function u(e,t,r){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,r)}var l=new WeakMap,f=new WeakMap;class d{constructor(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;u(this,l,{writable:!0,value:{}}),u(this,f,{writable:!0,value:{}}),(0,s.Z)(this,"add",((e,t,r)=>((0,c.Z)(this,l)[e]||((0,c.Z)(this,l)[e]=[]),(0,c.Z)(this,l)[e].push(t),r&&((0,c.Z)(this,f)[e]||((0,c.Z)(this,f)[e]=[]),(0,c.Z)(this,f)[e].push(r)),this))),(0,s.Z)(this,"hasErrors",(()=>this.getErrorCodes().length>0)),(0,s.Z)(this,"getErrorCodes",(()=>Object.keys((0,c.Z)(this,l)))),(0,s.Z)(this,"getErrorCode",(()=>this.getErrorCodes()[0])),(0,s.Z)(this,"getErrorMessages",(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(t)return(0,c.Z)(e,l)[t];const r=[];for(const t in(0,c.Z)(e,l))(0,c.Z)(e,l).hasOwnProperty(t)&&r.concat((0,c.Z)(e,l)[t]);return r})),(0,s.Z)(this,"getErrorMessage",(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return t=t||e.getErrorCode(),e.getErrorMessages(t)[0]})),(0,s.Z)(this,"getErrorData",(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return t=t||e.getErrorCode(),(0,c.Z)(e,f)[t]})),(0,s.Z)(this,"getAllErrorMessages",(()=>{const e=[];for(const t in(0,c.Z)(this,l))(0,c.Z)(this,l).hasOwnProperty(t)&&e.push(...(0,c.Z)(this,l)[t]);return e})),t&&(r&&((0,c.Z)(this,l)[t]=[r]),n&&((0,c.Z)(this,f)[t]=n))}static fromPHPObject(e){const t=new d;return(0,a.Z)(t,l,e.errors),(0,a.Z)(t,f,e.error_data),t}static fromApiError(e){const t=new d;if((0,c.Z)(t,l)[e.code]=[e.message],(0,c.Z)(t,f)[e.code]=[e.data],e.additional_errors)for(const r of e.additional_errors)(0,c.Z)(t,l)[r.code]=[r.message],r.data&&((0,c.Z)(t,f)||(0,a.Z)(t,f,[]),(0,c.Z)(t,f)[r.code].push(r.data));return t}}var h=r(95122);class g extends Error{constructor(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];super(e.message||(0,h.__)("An unknown error occurred.","better-wp-security"),...r),Error.captureStackTrace&&Error.captureStackTrace(this,g),this.__response=e;for(const t in e)e.hasOwnProperty(t)&&Object.defineProperty(this,t,{value:e[t],configurable:!0,enumerable:!0,writable:!0})}toString(){return this.__response.toString()}getResponse(){return this.__response}}class p{constructor(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];(0,s.Z)(this,"type",void 0),(0,s.Z)(this,"error",void 0),(0,s.Z)(this,"data",void 0),(0,s.Z)(this,"success",void 0),(0,s.Z)(this,"info",void 0),(0,s.Z)(this,"warning",void 0),this.type=e,this.error=t,this.data=r,this.success=n,this.info=o,this.warning=i,Object.seal(this)}isSuccess(){return this.type===p.SUCCESS}static async fromResponse(e){const t=t=>{const r=e.headers?.get(`X-Messages-${t}`);return r?JSON.parse(r):[]},r=204!==e.status&&e.json?await e.json():null,n=m(r),o=n.hasErrors()?p.ERROR:p.SUCCESS,i=t("Success"),s=t("Info"),a=t("Warning");return new p(o,n,r,i,s,a)}}Object.defineProperty(p,"SUCCESS",{value:"success",writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(p,"ERROR",{value:"error",writable:!1,enumerable:!1,configurable:!1});const v=(0,o.createContext)({getUrl(e){e="settings"===e?"itsec":"itsec-"+e;const t=(0,i.removeQueryArgs)(document.location.href,...Object.keys((0,i.getQueryArgs)(document.location.href)));return(0,i.addQueryArgs)(t,{page:e})}});function b(e){const{getUrl:t}=(0,o.useContext)(v);return t(e)}function y(e){if(e<=999)return e.toString();if(e<=9999){const t=(e/1e3).toFixed(1);return"0"===t.charAt(t.length-1)?t.replace(".0","k"):`${t}k`}if(e<=99999)return e.toString().substring(0,2)+"k";if(e<=999999)return e.toString().substring(0,3)+"k";if(e<=9999999){const t=(e/1e6).toFixed(1);return"0"===t.charAt(t.length-1)?t.replace(".0","m"):`${t}m`}if(e<=99999999)return e.toString().substring(0,2)+"m";if(e<=999999999)return e.toString().substring(0,3)+"m";if(e<=9999999999){const t=(e/1e9).toFixed(1);return"0"===t.charAt(t.length-1)?t.replace(".0","b"):`${t}b`}return e}function Z(e){if(!(0,n.isPlainObject)(e))return!1;const t=Object.keys(e);return 2===t.length&&t.includes("errors")&&t.includes("error_data")}function m(e){return e instanceof d?e:Z(e)?d.fromPHPObject(e):function(e){if(!(0,n.isPlainObject)(e))return!1;const t=Object.keys(e);return(3===t.length||4===t.length)&&!(4===t.length&&!t.includes("additional_errors"))&&t.includes("code")&&t.includes("message")&&t.includes("data")}(e)?d.fromApiError(e):new d}function w(e){const t={};for(const[r,n]of e)t[r]=n;return t}function E(e,t){const r=[[],[]];for(const n of e)r[t(n)?0:1].push(n);return r}function S(e){if(e instanceof Error)throw e;throw new g(e)}const k="https://secure.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=96&d=mm&f=y&r=g";function j(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,n.get)(e,["_links","self",0,"targetHints",t],r?void 0:[])}function O(e){return function(e,t){return(0,n.get)(e,["_links","self",0,"href"])}(e)}function x(e,t){if(e&&e.links)for(const r of e.links)if(r.rel===t)return r}function C(e,t){if("object"!==e.type)return e;let r;for(const o in t)t.hasOwnProperty(o)&&"hidden"===t[o]["ui:widget"]&&(r||(r=(0,n.cloneDeep)(e)),delete r.properties[o]);return r||e}function P(e){let t=[];if(!e)return t;const r=e instanceof d?e:m((0,n.pick)(e,["code","message","data"]));return"rest_invalid_param"===r.getErrorCode()&&(t=Object.values(r.getErrorData().params)),[...r.getAllErrorMessages(),...t]}},38085:function(e,t,r){var n,o,i,s;i=function(){var e=/^;\s*([^"=]+)=(?:"([^"]+)"|([^";,]+)(?:[;,]|$))/,t=/^<([^>]*)>/,r=/^\s*,\s*/;return{parse:function(n,o){for(var i,s,a,c=o&&o.extended||!1,u=[];n&&(n=n.trim(),s=t.exec(n));){for(var l={link:s[1]},f=(n=n.slice(s[0].length)).match(r);n&&(!f||f.index>0)&&(i=e.exec(n));)f=(n=n.slice(i[0].length)).match(r),"rel"===i[1]||"rev"===i[1]?(a=(i[2]||i[3]).split(/\s+/),l[i[1]]=a):l[i[1]]=i[2]||i[3];u.push(l),n=n.replace(r,"")}return c?u:u.reduce((function(e,t){return t.rel&&t.rel.forEach((function(r){e[r]=t.link})),e}),{})},stringify:function(e){var t=Object.keys(e).reduce((function(t,r){return t[e[r]]=t[e[r]]||[],t[e[r]].push(r),t}),{});return Object.keys(t).reduce((function(e,r){return e.concat("<"+r+'>; rel="'+t[r].join(" ")+'"')}),[]).join(", ")}}},s=this,e.exports?e.exports=i():"function"==typeof s.define&&s.define.amd?void 0===(o="function"==typeof(n=i)?n.call(t,r,t,e):n)||(e.exports=o):s.li=i()},28306:(e,t,r)=>{"use strict";var n,o;function i(e){return[e]}function s(){var e={clear:function(){e.head=null}};return e}function a(e,t,r){var n;if(e.length!==t.length)return!1;for(n=r;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function c(e,t){var r,c;function u(){r=o?new WeakMap:s()}function l(){var r,n,o,i,s,u=arguments.length;for(i=new Array(u),o=0;o<u;o++)i[o]=arguments[o];for(s=t.apply(null,i),(r=c(s)).isUniqueByDependants||(r.lastDependants&&!a(s,r.lastDependants,0)&&r.clear(),r.lastDependants=s),n=r.head;n;){if(a(n.args,i,1))return n!==r.head&&(n.prev.next=n.next,n.next&&(n.next.prev=n.prev),n.next=r.head,n.prev=null,r.head.prev=n,r.head=n),n.val;n=n.next}return n={val:e.apply(null,i)},i[0]=null,n.args=i,r.head&&(r.head.prev=n,n.next=r.head),r.head=n,n.val}return t||(t=i),c=o?function(e){var t,o,i,a,c,u=r,l=!0;for(t=0;t<e.length;t++){if(!(c=o=e[t])||"object"!=typeof c){l=!1;break}u.has(o)?u=u.get(o):(i=new WeakMap,u.set(o,i),u=i)}return u.has(n)||((a=s()).isUniqueByDependants=l,u.set(n,a)),u.get(n)}:function(){return r},l.getDependants=t,l.clear=u,u(),l}r.d(t,{Z:()=>c}),n={},o="undefined"!=typeof WeakMap},1519:(e,t,r)=>{"use strict";function n(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}r.d(t,{Z:()=>n})},86033:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(1519);function o(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,(0,n.Z)(e,t,"get"))}},13092:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(1519);function o(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}(e,(0,n.Z)(e,t,"set"),r),r}},4942:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(49142);function o(e,t,r){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},49142:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(71002);function o(e){var t=function(e,t){if("object"!==(0,n.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t);if("object"!==(0,n.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===(0,n.Z)(t)?t:String(t)}},71002:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.d(t,{Z:()=>n})}}]);