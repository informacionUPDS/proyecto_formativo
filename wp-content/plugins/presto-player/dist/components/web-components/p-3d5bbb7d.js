const t=t=>null!=t?t.constructor:null,e=t=>null==t,n=e=>t(e)===Object,i=e=>t(e)===String,r=e,s=n,c=i,o=t=>e(t)||(i(t)||(t=>Array.isArray(t))(t)||(t=>((t,e)=>Boolean(t&&e&&t instanceof e))(t,NodeList))(t))&&!t.length||n(t)&&!Object.keys(t).length;function a(t){return Array.isArray?Array.isArray(t):"[object Array]"===g(t)}function u(t){return"string"==typeof t}function l(t){return"number"==typeof t}function h(t){return"object"==typeof t}function d(t){return null!=t}function f(t){return!t.trim().length}function g(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const v=Object.prototype.hasOwnProperty;class M{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach((t=>{let n=m(t);e+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,e+=n.weight})),this._keys.forEach((t=>{t.weight/=e}))}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function m(t){let e=null,n=null,r=null,s=1,i=null;if(u(t)||a(t))r=t,e=x(t),n=p(t);else{if(!v.call(t,"name"))throw new Error("Missing name property in key");const c=t.name;if(r=c,v.call(t,"weight")&&(s=t.weight,s<=0))throw new Error((t=>`Property 'weight' in key '${t}' must be a positive integer`)(c));e=x(c),n=p(c),i=t.getFn}return{path:e,id:n,weight:s,src:r,getFn:i}}function x(t){return a(t)?t:t.split(".")}function p(t){return a(t)?t.join("."):t}var y={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(t,e){let n=[],r=!1;const s=(t,e,i)=>{if(d(t))if(e[i]){const c=t[e[i]];if(!d(c))return;if(i===e.length-1&&(u(c)||l(c)||function(t){return!0===t||!1===t||function(t){return h(t)&&null!==t}(t)&&"[object Boolean]"==g(t)}(c)))n.push(function(t){return null==t?"":function(t){if("string"==typeof t)return t;let e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(t)}(c));else if(a(c)){r=!0;for(let t=0,n=c.length;t<n;t+=1)s(c[t],e,i+1)}else e.length&&s(c,e,i+1)}else n.push(t)};return s(t,u(e)?e.split("."):e,0),r?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};const L=/[^ ]+/g;class b{constructor({getFn:t=y.getFn,fieldNormWeight:e=y.fieldNormWeight}={}){this.norm=function(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(e){const s=e.match(L).length;if(n.has(s))return n.get(s);const i=1/Math.pow(s,.5*t),c=parseFloat(Math.round(i*r)/r);return n.set(s,c),c},clear(){n.clear()}}}(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach(((t,e)=>{this._keysMap[t.id]=e}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,u(this.docs[0])?this.docs.forEach(((t,e)=>{this._addString(t,e)})):this.docs.forEach(((t,e)=>{this._addObject(t,e)})),this.norm.clear())}add(t){const e=this.size();u(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,n=this.size();e<n;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!d(t)||f(t))return;let n={v:t,i:e,n:this.norm.get(t)};this.records.push(n)}_addObject(t,e){let n={i:e,$:{}};this.keys.forEach(((e,r)=>{let s=e.getFn?e.getFn(t):this.getFn(t,e.path);if(d(s))if(a(s)){let t=[];const e=[{nestedArrIndex:-1,value:s}];for(;e.length;){const{nestedArrIndex:n,value:r}=e.pop();if(d(r))if(u(r)&&!f(r)){let e={v:r,i:n,n:this.norm.get(r)};t.push(e)}else a(r)&&r.forEach(((t,n)=>{e.push({nestedArrIndex:n,value:t})}))}n.$[r]=t}else if(u(s)&&!f(s)){let t={v:s,n:this.norm.get(s)};n.$[r]=t}})),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function S(t,e,{getFn:n=y.getFn,fieldNormWeight:r=y.fieldNormWeight}={}){const s=new b({getFn:n,fieldNormWeight:r});return s.setKeys(t.map(m)),s.setSources(e),s.create(),s}function $(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:s=y.distance,ignoreLocation:i=y.ignoreLocation}={}){const c=e/t.length;if(i)return c;const o=Math.abs(r-n);return s?c+o/s:o?1:c}function k(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const s=t.charAt(n);e[s]=(e[s]||0)|1<<r-n-1}return e}class w{constructor(t,{location:e=y.location,threshold:n=y.threshold,distance:r=y.distance,includeMatches:s=y.includeMatches,findAllMatches:i=y.findAllMatches,minMatchCharLength:c=y.minMatchCharLength,isCaseSensitive:o=y.isCaseSensitive,ignoreLocation:a=y.ignoreLocation}={}){if(this.options={location:e,threshold:n,distance:r,includeMatches:s,findAllMatches:i,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:a},this.pattern=o?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(t,e)=>{this.chunks.push({pattern:t,alphabet:k(t),startIndex:e})},l=this.pattern.length;if(l>32){let t=0;const e=l%32,n=l-e;for(;t<n;)h(this.pattern.substr(t,32),t),t+=32;if(e){const t=l-32;h(this.pattern.substr(t),t)}}else h(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:n}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let e={isMatch:!0,score:0};return n&&(e.indices=[[0,t.length-1]]),e}const{location:r,distance:s,threshold:i,findAllMatches:c,minMatchCharLength:o,ignoreLocation:a}=this.options;let h=[],l=0,u=!1;this.chunks.forEach((({pattern:e,alphabet:d,startIndex:g})=>{const{isMatch:f,score:p,indices:m}=function(t,e,n,{location:r=y.location,distance:s=y.distance,threshold:i=y.threshold,findAllMatches:c=y.findAllMatches,minMatchCharLength:o=y.minMatchCharLength,includeMatches:a=y.includeMatches,ignoreLocation:h=y.ignoreLocation}={}){if(e.length>32)throw new Error("Pattern length exceeds max of 32.");const l=e.length,u=t.length,d=Math.max(0,Math.min(r,u));let g=i,f=d;const p=o>1||a,m=p?Array(u):[];let M;for(;(M=t.indexOf(e,f))>-1;){let t=$(e,{currentLocation:M,expectedLocation:d,distance:s,ignoreLocation:h});if(g=Math.min(t,g),f=M+l,p){let t=0;for(;t<l;)m[M+t]=1,t+=1}}f=-1;let x=[],v=1,k=l+u;const L=1<<l-1;for(let r=0;r<l;r+=1){let i=0,o=k;for(;i<o;)$(e,{errors:r,currentLocation:d+o,expectedLocation:d,distance:s,ignoreLocation:h})<=g?i=o:k=o,o=Math.floor((k-i)/2+i);k=o;let a=Math.max(1,d-o+1),y=c?u:Math.min(d+o,u)+l,M=Array(y+2);M[y+1]=(1<<r)-1;for(let i=y;i>=a;i-=1){let c=i-1,o=n[t.charAt(c)];if(p&&(m[c]=+!!o),M[i]=(M[i+1]<<1|1)&o,r&&(M[i]|=(x[i+1]|x[i])<<1|1|x[i+1]),M[i]&L&&(v=$(e,{errors:r,currentLocation:c,expectedLocation:d,distance:s,ignoreLocation:h}),v<=g)){if(g=v,f=c,f<=d)break;a=Math.max(1,2*d-f)}}if($(e,{errors:r+1,currentLocation:d,expectedLocation:d,distance:s,ignoreLocation:h})>g)break;x=M}const _={isMatch:f>=0,score:Math.max(.001,v)};if(p){const t=function(t=[],e=y.minMatchCharLength){let n=[],r=-1,s=-1,i=0;for(let c=t.length;i<c;i+=1){let c=t[i];c&&-1===r?r=i:c||-1===r||(s=i-1,s-r+1>=e&&n.push([r,s]),r=-1)}return t[i-1]&&i-r>=e&&n.push([r,i-1]),n}(m,o);t.length?a&&(_.indices=t):_.isMatch=!1}return _}(t,e,d,{location:r+g,distance:s,threshold:i,findAllMatches:c,minMatchCharLength:o,includeMatches:n,ignoreLocation:a});f&&(u=!0),l+=p,f&&m&&(h=[...h,...m])}));let d={isMatch:u,score:u?l/this.chunks.length:1};return u&&n&&(d.indices=h),d}}class A{constructor(t){this.pattern=t}static isMultiMatch(t){return j(t,this.multiRegex)}static isSingleMatch(t){return j(t,this.singleRegex)}search(){}}function j(t,e){const n=t.match(e);return n?n[1]:null}class C extends A{constructor(t,{location:e=y.location,threshold:n=y.threshold,distance:r=y.distance,includeMatches:s=y.includeMatches,findAllMatches:i=y.findAllMatches,minMatchCharLength:c=y.minMatchCharLength,isCaseSensitive:o=y.isCaseSensitive,ignoreLocation:a=y.ignoreLocation}={}){super(t),this._bitapSearch=new w(t,{location:e,threshold:n,distance:r,includeMatches:s,findAllMatches:i,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class N extends A{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e,n=0;const r=[],s=this.pattern.length;for(;(e=t.indexOf(this.pattern,n))>-1;)n=e+s,r.push([e,n-1]);const i=!!r.length;return{isMatch:i,score:i?0:1,indices:r}}}const I=[class extends A{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},N,class extends A{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},class extends A{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends A{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends A{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}},class extends A{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const e=-1===t.indexOf(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},C],O=I.length,R=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,F=new Set([C.type,N.type]),_=[];function W(t,e){for(let n=0,r=_.length;n<r;n+=1){let r=_[n];if(r.condition(t,e))return new r(t,e)}return new w(t,e)}const E=t=>!(!t.$and&&!t.$or),J=t=>({$and:Object.keys(t).map((e=>({[e]:t[e]})))});function T(t,e,{auto:n=!0}={}){const r=t=>{let s=Object.keys(t);const i=(t=>!!t.$path)(t);if(!i&&s.length>1&&!E(t))return r(J(t));if((t=>!a(t)&&h(t)&&!E(t))(t)){const r=i?t.$path:s[0],c=i?t.$val:t[r];if(!u(c))throw new Error((t=>`Invalid value for key ${t}`)(r));const o={keyId:p(r),pattern:c};return n&&(o.searcher=W(c,e)),o}let c={children:[],operator:s[0]};return s.forEach((e=>{const n=t[e];a(n)&&n.forEach((t=>{c.children.push(r(t))}))})),c};return E(t)||(t=J(t)),r(t)}function z(t,e){const n=t.matches;e.matches=[],d(n)&&n.forEach((t=>{if(!d(t.indices)||!t.indices.length)return;const{indices:n,value:r}=t;let s={indices:n,value:r};t.key&&(s.key=t.key.src),t.idx>-1&&(s.refIndex=t.idx),e.matches.push(s)}))}function B(t,e){e.score=t.score}class K{constructor(t,e={},n){this.options={...y,...e},this._keyStore=new M(this.options.keys),this.setCollection(t,n)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof b))throw new Error("Incorrect 'index' type");this._myIndex=e||S(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){d(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=(()=>!1)){const e=[];for(let n=0,r=this._docs.length;n<r;n+=1){const s=this._docs[n];t(s,n)&&(this.removeAt(n),n-=1,r-=1,e.push(s))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:s,sortFn:i,ignoreFieldNorm:c}=this.options;let o=u(t)?u(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return function(t,{ignoreFieldNorm:e=y.ignoreFieldNorm}){t.forEach((t=>{let n=1;t.matches.forEach((({key:t,norm:r,score:s})=>{const i=t?t.weight:null;n*=Math.pow(0===s&&i?Number.EPSILON:s,(i||1)*(e?1:r))})),t.score=n}))}(o,{ignoreFieldNorm:c}),s&&o.sort(i),l(e)&&e>-1&&(o=o.slice(0,e)),function(t,e,{includeMatches:n=y.includeMatches,includeScore:r=y.includeScore}={}){const s=[];return n&&s.push(z),r&&s.push(B),t.map((t=>{const{idx:n}=t,r={item:e[n],refIndex:n};return s.length&&s.forEach((e=>{e(t,r)})),r}))}(o,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(t){const e=W(t,this.options),{records:n}=this._myIndex,r=[];return n.forEach((({v:t,i:n,n:s})=>{if(!d(t))return;const{isMatch:i,score:c,indices:o}=e.searchIn(t);i&&r.push({item:t,idx:n,matches:[{score:c,value:t,norm:s,indices:o}]})})),r}_searchLogical(t){const e=T(t,this.options),n=(t,e,r)=>{if(!t.children){const{keyId:n,searcher:s}=t,i=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(e,n),searcher:s});return i&&i.length?[{idx:r,item:e,matches:i}]:[]}const s=[];for(let i=0,c=t.children.length;i<c;i+=1){const c=n(t.children[i],e,r);if(c.length)s.push(...c);else if("$and"===t.operator)return[]}return s},r={},s=[];return this._myIndex.records.forEach((({$:t,i:i})=>{if(d(t)){let c=n(e,t,i);c.length&&(r[i]||(r[i]={idx:i,item:t,matches:[]},s.push(r[i])),c.forEach((({matches:t})=>{r[i].matches.push(...t)})))}})),s}_searchObjectList(t){const e=W(t,this.options),{keys:n,records:r}=this._myIndex,s=[];return r.forEach((({$:t,i:r})=>{if(!d(t))return;let i=[];n.forEach(((n,r)=>{i.push(...this._findMatches({key:n,value:t[r],searcher:e}))})),i.length&&s.push({idx:r,item:t,matches:i})})),s}_findMatches({key:t,value:e,searcher:n}){if(!d(e))return[];let r=[];if(a(e))e.forEach((({v:e,i:s,n:i})=>{if(!d(e))return;const{isMatch:c,score:o,indices:a}=n.searchIn(e);c&&r.push({score:o,key:t,value:e,idx:s,norm:i,indices:a})}));else{const{v:s,n:i}=e,{isMatch:c,score:o,indices:a}=n.searchIn(s);c&&r.push({score:o,key:t,value:s,norm:i,indices:a})}return r}}function P(t){return"string"==typeof t&&t.includes(".m3u8")}function D(t){for(var e=[];t.parentNode&&"body"!=t.parentNode.nodeName.toLowerCase();)e.push(t=t.parentNode);return e}K.version="6.6.2",K.createIndex=S,K.parseIndex=function(t,{getFn:e=y.getFn,fieldNormWeight:n=y.fieldNormWeight}={}){const{keys:r,records:s}=t,i=new b({getFn:e,fieldNormWeight:n});return i.setKeys(r),i.setIndexRecords(s),i},K.config=y,K.parseQuery=T,_.push(class{constructor(t,{isCaseSensitive:e=y.isCaseSensitive,includeMatches:n=y.includeMatches,minMatchCharLength:r=y.minMatchCharLength,ignoreLocation:s=y.ignoreLocation,findAllMatches:i=y.findAllMatches,location:c=y.location,threshold:o=y.threshold,distance:a=y.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:n,minMatchCharLength:r,findAllMatches:i,ignoreLocation:s,location:c,threshold:o,distance:a},this.pattern=e?t:t.toLowerCase(),this.query=function(t,e={}){return t.split("|").map((t=>{let n=t.trim().split(R).filter((t=>t&&!!t.trim())),r=[];for(let t=0,s=n.length;t<s;t+=1){const s=n[t];let i=!1,c=-1;for(;!i&&++c<O;){const t=I[c];let n=t.isMultiMatch(s);n&&(r.push(new t(n,e)),i=!0)}if(!i)for(c=-1;++c<O;){const t=I[c];let n=t.isSingleMatch(s);if(n){r.push(new t(n,e));break}}}return r}))}(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let s=0,i=[],c=0;for(let r=0,o=e.length;r<o;r+=1){const o=e[r];i.length=0,s=0;for(let e=0,r=o.length;e<r;e+=1){const r=o[e],{isMatch:a,indices:h,score:l}=r.search(t);if(!a){c=0,s=0,i.length=0;break}s+=1,c+=l,n&&(F.has(r.constructor.type)?i=[...i,...h]:i.push(h))}if(s){let t={isMatch:!0,score:c/s};return n&&(t.indices=i),t}}return{isMatch:!1,score:1}}});const U=t=>t?["kind","label","language","id","inBandMetadataTrackDispatchType","mode","src"].reduce(((e,n)=>(t[n]&&(e[n]=t[n]),e)),{cues:t.cues&&Array.prototype.map.call(t.cues,(function(t){return{startTime:t.startTime,endTime:t.endTime,text:t.text,id:t.id}}))}):null;function V(t,e){var n,r,s,i;if(!t)return;if(!(null===(n=null==t?void 0:t.media)||void 0===n?void 0:n.textTracks)||0===(null===(s=null===(r=null==t?void 0:t.media)||void 0===r?void 0:r.textTracks)||void 0===s?void 0:s.length))return;const a=t.media.textTracks,h=(null===(i=t.config.preset)||void 0===i?void 0:i.search)||"";let l="";if(l=-1===t.captions.currentTrack?function(t){if(!t)return;const e=localStorage.getItem("presto-player-"+t.id+"-cues");return o(e)?"":JSON.parse(e)}(t):a[t.captions.currentTrack],o(l))return[];const u=U(l);return o(u)?[]:((t,e,n)=>{if(!c(t))return[];if(o(e))return[];if(o(n))return[];const r=((t,e,n)=>{if(o(e))return[];if(o(n))return[];if(!c(t))return[];const r=Object.assign(Object.assign(Object.assign({},null==n?void 0:n.minMatchCharLength),null==n?void 0:n.threshold),{shouldSort:!1,includeMatches:!0,threshold:.3,keys:["text"]});return null!==e&&e&&0!==e.length?new K(e,r).search(t):[]})(t,e,n);return r&&Array.prototype.map.call(r,(function(t){return{time:Math.ceil(t.item.startTime),label:""}}))})(e,null==u?void 0:u.cues,h)}function q(t){var e;if(!t)return;if(!(null==t?void 0:t.elements)||!(null===(e=null==t?void 0:t.elements)||void 0===e?void 0:e.progress))return;let n=t.elements.progress.querySelectorAll(".plyr__progress__marker");if(!o(n))for(var r=0;r<n.length;r++)n[r].remove()}function G(t,e){if(!t)return;if(q(t),!(null==e?void 0:e.length))return;const n=document.createDocumentFragment(),i=document.createDocumentFragment();e.forEach((e=>{const n=function(t,e,n){const i=document.createElement("span");return s(e)&&function(t,e){var n;null!==(n=t)&&"object"==typeof n&&1===n.nodeType&&"object"==typeof n.style&&"object"==typeof n.ownerDocument&&!o(e)&&Object.entries(e).filter((([,t])=>!r(t))).forEach((([e,n])=>t.setAttribute(e,n)))}(i,e),c("")&&(i.innerText=""),i}(0,{class:"plyr__progress__marker"}),a=e.time/t.duration*100+"%";n.addEventListener("click",(()=>{t.currentTime=e.time})),n.style.left=a,i.appendChild(n)})),n.appendChild(i),t.elements.markers={points:i,tip:null},t.elements.progress.appendChild(n)}function H(t){var e,n;if(!(null===(n=null===(e=t.config.preset)||void 0===e?void 0:e.search)||void 0===n?void 0:n.enabled))return;if(0===t.media.textTracks.length)return;if(-1!==t.currentTrack)return;t.toggleCaptions(!0);let r=setInterval((()=>{var e;const n=null===(e=t.media.textTracks[0])||void 0===e?void 0:e.cues;(null==n?void 0:n.length)>0&&(function(t){var e,n,r;if(!t)return;if(!(null===(e=null==t?void 0:t.media)||void 0===e?void 0:e.textTracks)||0===(null===(r=null===(n=null==t?void 0:t.media)||void 0===n?void 0:n.textTracks)||void 0===r?void 0:r.length))return;const s="presto-player-"+t.id+"-cues",i=U(t.media.textTracks[0]);localStorage.setItem(s,JSON.stringify(i))}(t),t.toggleCaptions(!1),clearInterval(r))}),200)}export{G as a,H as c,D as g,P as i,q as r,V as s};