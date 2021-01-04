/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};function e(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}var i=function(){return(i=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function r(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a}function n(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function o(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var r,n,o=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(t){n={error:t}}finally{try{r&&!r.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}return a}function a(t,e,i){return Object.entries(l(e||{})).reduce(((t,[e,i])=>t.replace(new RegExp(`{{[  ]*${e}[  ]*}}`,"gm"),String(l(i)))),t)}function s(t,e){const i=t.split(".");let r=e.strings;for(;null!=r&&i.length>0;)r=r[i.shift()];return null!=r?r.toString():null}function l(t){return"function"==typeof t?t():t}let d={loader:()=>Promise.resolve({}),empty:t=>`[${t}]`,lookup:s,interpolate:a,translationCache:{}};function c(t){return d=Object.assign(Object.assign({},d),t)}function h(t,e,i=d){var r;r={previousStrings:i.strings,previousLang:i.lang,lang:i.lang=t,strings:i.strings=e},window.dispatchEvent(new CustomEvent("langChanged",{detail:r}))}async function u(t,e=d){const i=await e.loader(t,e);e.translationCache={},h(t,i,e)}function p(t,e,i=d){let r=i.translationCache[t]||(i.translationCache[t]=i.lookup(t,i)||i.empty(t,i));return null!=(e=null!=e?l(e):null)?i.interpolate(r,e,i):r}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const f=new WeakMap,m=t=>(...e)=>{const i=t(...e);return f.set(i,!0),i},g=t=>"function"==typeof t&&f.has(t),b="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,v=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},y={},_={},w=`{{lit-${String(Math.random()).slice(2)}}}`,x=`\x3c!--${w}--\x3e`,M=new RegExp(`${w}|${x}`);class k{constructor(t,e){this.parts=[],this.element=e;const i=[],r=[],n=document.createTreeWalker(e.content,133,null,!1);let o=0,a=-1,s=0;const{strings:l,values:{length:d}}=t;for(;s<d;){const t=n.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let r=0;for(let t=0;t<i;t++)S(e[t].name,"$lit$")&&r++;for(;r-- >0;){const e=l[s],i=T.exec(e)[2],r=i.toLowerCase()+"$lit$",n=t.getAttribute(r);t.removeAttribute(r);const o=n.split(M);this.parts.push({type:"attribute",index:a,name:i,strings:o}),s+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(w)>=0){const r=t.parentNode,n=e.split(M),o=n.length-1;for(let e=0;e<o;e++){let i,o=n[e];if(""===o)i=A();else{const t=T.exec(o);null!==t&&S(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(o)}r.insertBefore(i,t),this.parts.push({type:"node",index:++a})}""===n[o]?(r.insertBefore(A(),t),i.push(t)):t.data=n[o],s+=o}}else if(8===t.nodeType)if(t.data===w){const e=t.parentNode;null!==t.previousSibling&&a!==o||(a++,e.insertBefore(A(),t)),o=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(i.push(t),a--),s++}else{let e=-1;for(;-1!==(e=t.data.indexOf(w,e+1));)this.parts.push({type:"node",index:-1}),s++}}else n.currentNode=r.pop()}for(const t of i)t.parentNode.removeChild(t)}}const S=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},E=t=>-1!==t.index,A=()=>document.createComment(""),T=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class I{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=b?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let n,o=0,a=0,s=r.nextNode();for(;o<i.length;)if(n=i[o],E(n)){for(;a<n.index;)a++,"TEMPLATE"===s.nodeName&&(e.push(s),r.currentNode=s.content),null===(s=r.nextNode())&&(r.currentNode=e.pop(),s=r.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(s.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(s,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return b&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const C=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),R=` ${w} `;class O{constructor(t,e,i,r){this.strings=t,this.values=e,this.type=i,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let r=0;r<t;r++){const t=this.strings[r],n=t.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===t.indexOf("--\x3e",n+1);const o=T.exec(t);e+=null===o?t+(i?R:x):t.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+w}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==C&&(e=C.createHTML(e)),t.innerHTML=e,t}}class P extends O{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,i=e.firstChild;return e.removeChild(i),((t,e,i=null,r=null)=>{for(;e!==i;){const i=e.nextSibling;t.insertBefore(e,r),e=i}})(e,i.firstChild),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const L=t=>null===t||!("object"==typeof t||"function"==typeof t),B=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class N{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new $(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!B(t))return t}let r="";for(let n=0;n<e;n++){r+=t[n];const e=i[n];if(void 0!==e){const t=e.value;if(L(t)||!B(t))r+="string"==typeof t?t:String(t);else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ${constructor(t){this.value=void 0,this.committer=t}setValue(t){t===y||L(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=y,t(this)}this.value!==y&&this.committer.commit()}}class z{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(A()),this.endNode=t.appendChild(A())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=A()),t.__insert(this.endNode=A())}insertAfterPart(t){t.__insert(this.startNode=A()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}const t=this.__pendingValue;t!==y&&(L(t)?t!==this.value&&this.__commitText(t):t instanceof O?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):B(t)?this.__commitIterable(t):t===_?(this.value=_,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof I&&this.value.template===e)this.value.update(t.values);else{const i=new I(e,t.processor,this.options),r=i._clone();i.update(t.values),this.__commitNode(r),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,r=0;for(const n of t)i=e[r],void 0===i&&(i=new z(this.options),e.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(e[r-1])),i.setValue(n),i.commit(),r++;r<e.length&&(e.length=r,this.clear(i&&i.endNode))}clear(t=this.startNode){v(this.startNode.parentNode,t.nextSibling,this.endNode)}}class F{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}if(this.__pendingValue===y)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=y}}class j extends N{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new D(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class D extends ${}let q=!1;(()=>{try{const t={get capture(){return q=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class U{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}if(this.__pendingValue===y)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=H(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=y}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const H=t=>t&&(q?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const V=new class{handleAttributeExpressions(t,e,i,r){const n=e[0];if("."===n){return new j(t,e.slice(1),i).parts}if("@"===n)return[new U(t,e.slice(1),r.eventContext)];if("?"===n)return[new F(t,e.slice(1),i)];return new N(t,e,i).parts}handleTextExpression(t){return new z(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function W(t){let e=G.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},G.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(w);return i=e.keyString.get(r),void 0===i&&(i=new k(t,t.getTemplateElement()),e.keyString.set(r,i)),e.stringsArray.set(t.strings,i),i}const G=new Map,K=new WeakMap,X=(t,e,i)=>{let r=K.get(e);void 0===r&&(v(e,e.firstChild),K.set(e,r=new z(Object.assign({templateFactory:W},i))),r.appendInto(e)),r.setValue(t),r.commit()};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const Z=(t,...e)=>new O(t,e,"html",V),Y=(t,...e)=>new P(t,e,"svg",V);function J(t){return t instanceof z?t.startNode.isConnected:t instanceof $?t.committer.element.isConnected:t.element.isConnected}const Q=new Map;var tt;function et(t,e,i){const r=e(i);t.value!==r&&(t.setValue(r),t.commit())}!function(t,e){const i=e=>t(e.detail);window.addEventListener("langChanged",i,e)}((t=>{for(const[e,i]of Q)J(e)&&et(e,i,t)})),tt=Q,setInterval((()=>{return t=()=>function(t){for(const[e]of t)J(e)||t.delete(e)}(tt),void("requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t));var t}),6e4);const it=m((t=>e=>{Q.set(e,t),et(e,t)})),rt=(t,e,i)=>it((()=>p(t,e,i)))
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function nt(t,e){const{element:{content:i},parts:r}=t,n=document.createTreeWalker(i,133,null,!1);let o=at(r),a=r[o],s=-1,l=0;const d=[];let c=null;for(;n.nextNode();){s++;const t=n.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(d.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==a&&a.index===s;)a.index=null!==c?-1:a.index-l,o=at(r,o),a=r[o]}d.forEach((t=>t.parentNode.removeChild(t)))}const ot=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},at=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(E(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const st=(t,e)=>`${t}--${e}`;let lt=!0;void 0===window.ShadyCSS?lt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),lt=!1);const dt=t=>e=>{const i=st(e.type,t);let r=G.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},G.set(i,r));let n=r.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(w);if(n=r.keyString.get(o),void 0===n){const i=e.getTemplateElement();lt&&window.ShadyCSS.prepareTemplateDom(i,t),n=new k(e,i),r.keyString.set(o,n)}return r.stringsArray.set(e.strings,n),n},ct=["html","svg"],ht=new Set,ut=(t,e,i)=>{ht.add(t);const r=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(r,t);const a=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{ct.forEach((e=>{const i=G.get(st(e,t));void 0!==i&&i.keyString.forEach((t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{i.add(t)})),nt(t,i)}))}))})(t);const s=r.content;i?function(t,e,i=null){const{element:{content:r},parts:n}=t;if(null==i)return void r.appendChild(e);const o=document.createTreeWalker(r,133,null,!1);let a=at(n),s=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===i&&(s=ot(e),i.parentNode.insertBefore(e,i));-1!==a&&n[a].index===l;){if(s>0){for(;-1!==a;)n[a].index+=s,a=at(n,a);return}a=at(n,a)}}(i,a,s.firstChild):s.insertBefore(a,s.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const l=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){s.insertBefore(a,s.firstChild);const t=new Set;t.add(a),nt(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const pt={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},ft=(t,e)=>e!==t&&(e==e||t==t),mt={attribute:!0,type:String,converter:pt,reflect:!1,hasChanged:ft};class gt extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,i)=>{const r=this._attributeNameForProperty(i,e);void 0!==r&&(this._attributeToPropertyMap.set(r,i),t.push(r))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=mt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdateInternal(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||mt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=ft){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,r=e.converter||pt,n="function"==typeof r?r:r.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,r=e.converter;return(r&&r.toAttribute||pt.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=mt){const r=this.constructor,n=r._attributeNameForProperty(t,i);if(void 0!==n){const t=r._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(t);if(void 0!==r){const t=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let r=!0;if(void 0!==t){const n=this.constructor;i=i||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}gt.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const bt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),vt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function yt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):vt(t,e)}function _t(t){return yt({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}function wt(t,e){return(i,r)=>{const n={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof r?Symbol():"__"+r;n.get=function(){return void 0===this[e]&&(this[e]=this.renderRoot.querySelector(t)),this[e]}}return void 0!==r?Mt(n,i,r):kt(n,i)}}function xt(t){return(e,i)=>{const r={async get(){return await this.updateComplete,this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==i?Mt(r,e,i):kt(r,e)}}const Mt=(t,e,i)=>{Object.defineProperty(e,i,t)},kt=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function St(t){return(e,i)=>void 0!==i?((t,e,i)=>{Object.assign(e[i],t)})(t,e,i):((t,e)=>Object.assign(Object.assign({},e),{finisher(i){Object.assign(i.prototype[e.key],t)}}))(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Et=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,At=Symbol();class Tt{constructor(t,e){if(e!==At)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Et?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const It=t=>new Tt(String(t),At),Ct=(t,...e)=>{const i=e.reduce(((e,i,r)=>e+(t=>{if(t instanceof Tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1]),t[0]);return new Tt(i,At)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Rt={};class Ot extends gt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t)),i),i=e(t,new Set),r=[];i.forEach((t=>r.unshift(t))),this._styles=r}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Et){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return It(e)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Et?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Rt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return Rt}}Ot.finalized=!0,Ot.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,n=K.has(e),o=lt&&11===e.nodeType&&!!e.host,a=o&&!ht.has(r),s=a?document.createDocumentFragment():e;if(X(t,s,Object.assign({templateFactory:dt(r)},i)),a){const t=K.get(s);K.delete(s);const i=t.value instanceof I?t.value.template:void 0;ut(r,s,i),v(e,e.firstChild),e.appendChild(s),K.set(e,t)}!n&&o&&window.ShadyCSS.styleElement(e.host)};
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Pt=t=>e=>class extends e{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=t.subscribe((()=>this.stateChanged(t.getState()))),this.stateChanged(t.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(t){}}
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/;var Lt=function(t){var e,i=t.Symbol;return"function"==typeof i?i.observable?e=i.observable:(e=i("observable"),i.observable=e):e="@@observable",e}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()),Bt=function(){return Math.random().toString(36).substring(7).split("").join(".")},Nt={INIT:"@@redux/INIT"+Bt(),REPLACE:"@@redux/REPLACE"+Bt(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Bt()}};function $t(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function zt(t,e){var i=e&&e.type;return"Given "+(i&&'action "'+String(i)+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function Ft(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function jt(t,e){var i=Object.keys(t);return Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(t)),e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i}function Dt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?jt(i,!0).forEach((function(e){Ft(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):jt(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function qt(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function Ut(t){return function(e){var i=e.dispatch,r=e.getState;return function(e){return function(n){return"function"==typeof n?n(i,r,t):e(n)}}}}var Ht=Ut();Ht.withExtraArgument=Ut;
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Vt=(t,e={})=>i=>{if(!0!==["/summary","/job","/data","/statistics","/usersettings","/agent","/resource","/user","/credential","/environment","/settings","/maintenance","/information","/github","/import"].includes(t)){let i=t.split(/[\/]+/);i.length>1&&""===i[0]&&(t=i[1],e.requestURL=i.slice(2).join("/"))}let r;e.queryString=window.location.search,"index.html"!==t&&""!==t||(t="/"),r=["/","build","/build","app","/app"].includes(t)?"summary":"/"===t[0]?t.slice(1):t,i(Wt(r,e)),i(Zt(!1))},Wt=(t,e={})=>i=>{switch(t){case"summary":import("./backend-ai-summary-view-6b2e3eb8.js").then((t=>{}));break;case"job":import("./backend-ai-session-view-ba7db1bc.js");break;case"data":import("./backend-ai-data-view-605c4da7.js");break;case"usersettings":import("./backend-ai-usersettings-view-4da6482d.js");break;case"agent":case"resource":import("./backend-ai-agent-view-43aab037.js");break;case"credential":case"user":import("./backend-ai-credential-view-9f7a3f0f.js");break;case"environment":import("./backend-ai-environment-view-53b91487.js");break;case"settings":import("./backend-ai-settings-view-54bc4305.js");break;case"maintenance":import("./backend-ai-maintenance-view-1e48d7e2.js");break;case"information":import("./backend-ai-information-view-d9bf3112.js");break;case"statistics":import("./backend-ai-statistics-view-03d5a83f.js");break;case"verify-email":import("./backend-ai-email-verification-view-ac4ff1c6.js");break;case"change-password":import("./backend-ai-change-forgot-password-view-4f13421f.js");break;case"github":case"gitlab":case"import":import("./backend-ai-import-view-2a9bd18d.js");break;case"unauthorized":import("./backend-ai-permission-denied-view-900586a6.js");break;case"error":default:if(void 0!==globalThis.backendaiPages){for(let t of globalThis.backendaiPages)"url"in t&&import("./plugins/"+t.url+".js");break}document.addEventListener("backend-ai-plugin-loaded",(()=>{})),import("./backend-ai-error-view-10242a61.js").then((t=>{}))}i(Gt(t,e))},Gt=(t,e)=>({type:"UPDATE_PAGE",page:t,params:e});
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let Kt;const Xt=t=>(e,i)=>{t!==i().app.offline&&e((t=>{t({type:"OPEN_SNACKBAR"}),window.clearTimeout(Kt),Kt=window.setTimeout((()=>t({type:"CLOSE_SNACKBAR"})),3e3)})),e({type:"UPDATE_OFFLINE",offline:t})},Zt=t=>({type:"UPDATE_DRAWER_STATE",opened:t}),Yt={page:"",params:{},offline:!1,drawerOpened:!1,offlineIndicatorOpened:!1},Jt=function t(e,i,r){var n;if("function"==typeof i&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof i&&void 0===r&&(r=i,i=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(t)(e,i)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var o=e,a=i,s=[],l=s,d=!1;function c(){l===s&&(l=s.slice())}function h(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return a}function u(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var e=!0;return c(),l.push(t),function(){if(e){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");e=!1,c();var i=l.indexOf(t);l.splice(i,1),s=null}}}function p(t){if(!$t(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,a=o(a,t)}finally{d=!1}for(var e=s=l,i=0;i<e.length;i++){(0,e[i])()}return t}function f(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");o=t,p({type:Nt.REPLACE})}function m(){var t,e=u;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function i(){t.next&&t.next(h())}return i(),{unsubscribe:e(i)}}})[Lt]=function(){return this},t}return p({type:Nt.INIT}),(n={dispatch:p,subscribe:u,getState:h,replaceReducer:f})[Lt]=m,n}((t=>t),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||qt)((t=>e=>(i,r)=>{let n={};const o=e(i,r);return Object.assign({},o,{addReducers(e){const i=Object.assign({},n,e);this.replaceReducer(t(n=i))}})})((function(t){for(var e=Object.keys(t),i={},r=0;r<e.length;r++){var n=e[r];"function"==typeof t[n]&&(i[n]=t[n])}var o,a=Object.keys(i);try{!function(t){Object.keys(t).forEach((function(e){var i=t[e];if(void 0===i(void 0,{type:Nt.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===i(void 0,{type:Nt.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+Nt.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(i)}catch(t){o=t}return function(t,e){if(void 0===t&&(t={}),o)throw o;for(var r=!1,n={},s=0;s<a.length;s++){var l=a[s],d=i[l],c=t[l],h=d(c,e);if(void 0===h){var u=zt(l,e);throw new Error(u)}n[l]=h,r=r||h!==c}return(r=r||a.length!==Object.keys(t).length)?n:t}})),function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(t){return function(){var i=t.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},n={getState:i.getState,dispatch:function(){return r.apply(void 0,arguments)}},o=e.map((function(t){return t(n)}));return Dt({},i,{dispatch:r=qt.apply(void 0,o)(i.dispatch)})}}}(Ht)));Jt.addReducers({app:(t=Yt,e)=>{switch(e.type){case"UPDATE_PAGE":return Object.assign(Object.assign({},t),{page:e.page,params:e.params});case"UPDATE_OFFLINE":return Object.assign(Object.assign({},t),{offline:e.offline});case"UPDATE_DRAWER_STATE":return Object.assign(Object.assign({},t),{drawerOpened:e.opened});case"OPEN_SNACKBAR":return Object.assign(Object.assign({},t),{offlineIndicatorOpened:!0});case"CLOSE_SNACKBAR":return Object.assign(Object.assign({},t),{offlineIndicatorOpened:!1});default:return t}}}),
/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(()=>{var t,e,i;const r=Symbol(),n=Symbol(),o=Symbol(),a=Symbol(),s=Symbol(),l=Symbol(),d=Symbol(),c=Symbol(),h=Symbol(),u=Symbol(),p=Symbol(),f=Symbol(),m=Symbol();class g{constructor(){this[t]=[],this[e]=[],this[i]=new Set}destructor(){this[h](this[o]);const t=this;t[r]=null,t[o]=null,t[n]=null}get top(){const t=this[r];return t[t.length-1]||null}push(t){t&&t!==this.top&&(this.remove(t),this[l](t),this[r].push(t))}remove(t){const e=this[r].indexOf(t);return-1!==e&&(this[r].splice(e,1),e===this[r].length&&this[l](this.top),!0)}pop(){const t=this.top;return t&&this.remove(t),t}has(t){return-1!==this[r].indexOf(t)}[(t=r,e=o,i=n,l)](t){const e=this[n],i=this[o];if(!t)return this[h](i),e.clear(),void(this[o]=[]);const r=this[u](t);if(r[r.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[o]=r;const a=this[p](t);if(!i.length)return void this[c](r,a,e);let s=i.length-1,l=r.length-1;for(;s>0&&l>0&&i[s]===r[l];)s--,l--;i[s]!==r[l]&&this[d](i[s],r[l]),s>0&&this[h](i.slice(0,s)),l>0&&this[c](r.slice(0,l),a,null)}[d](t,e){const i=t[a];this[f](t)&&!t.inert&&(t.inert=!0,i.add(t)),i.has(e)&&(e.inert=!1,i.delete(e)),e[s]=t[s],e[a]=i,t[s]=void 0,t[a]=void 0}[h](t){for(const e of t){e[s].disconnect(),e[s]=void 0;const t=e[a];for(const e of t)e.inert=!1;e[a]=void 0}}[c](t,e,i){for(const r of t){const t=r.parentNode,n=t.children,o=new Set;for(let t=0;t<n.length;t++){const a=n[t];a===r||!this[f](a)||e&&e.has(a)||(i&&a.inert?i.add(a):(a.inert=!0,o.add(a)))}r[a]=o;const l=new MutationObserver(this[m].bind(this));r[s]=l;let d=t;const c=d;c.__shady&&c.host&&(d=c.host),l.observe(d,{childList:!0})}}[m](t){const e=this[o],i=this[n];for(const r of t){const t=r.target.host||r.target,n=t===document.body?e.length:e.indexOf(t),o=e[n-1],s=o[a];for(let t=0;t<r.removedNodes.length;t++){const e=r.removedNodes[t];if(e===o)return console.info("Detected removal of the top Blocking Element."),void this.pop();s.has(e)&&(e.inert=!1,s.delete(e))}for(let t=0;t<r.addedNodes.length;t++){const e=r.addedNodes[t];this[f](e)&&(i&&e.inert?i.add(e):(e.inert=!0,s.add(e)))}}}[f](t){return!1===/^(style|template|script)$/.test(t.localName)}[u](t){const e=[];let i=t;for(;i&&i!==document.body;)if(i.nodeType===Node.ELEMENT_NODE&&e.push(i),i.assignedSlot){for(;i=i.assignedSlot;)e.push(i);i=e.pop()}else i=i.parentNode||i.host;return e}[p](t){const e=t.shadowRoot;if(!e)return null;const i=new Set;let r,n,o;const a=e.querySelectorAll("slot");if(a.length&&a[0].assignedNodes)for(r=0;r<a.length;r++)for(o=a[r].assignedNodes({flatten:!0}),n=0;n<o.length;n++)o[n].nodeType===Node.ELEMENT_NODE&&i.add(o[n]);return i}}document.$blockingElements=new g})();var Qt=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}();function te(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}!function(){if("undefined"!=typeof window){var t=Array.prototype.slice,e=Element.prototype.matches||Element.prototype.msMatchesSelector,i=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),r=function(){function r(t,e){te(this,r),this._inertManager=e,this._rootElement=t,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return Qt(r,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(t){this._unmanageNode(t.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(t){var e=this;a(t,(function(t){return e._visitNode(t)}));var i=document.activeElement;if(!document.body.contains(t)){for(var r=t,n=void 0;r;){if(r.nodeType===Node.DOCUMENT_FRAGMENT_NODE){n=r;break}r=r.parentNode}n&&(i=n.activeElement)}t.contains(i)&&(i.blur(),i===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(t){if(t.nodeType===Node.ELEMENT_NODE){var r=t;r!==this._rootElement&&r.hasAttribute("inert")&&this._adoptInertRoot(r),(e.call(r,i)||r.hasAttribute("tabindex"))&&this._manageNode(r)}}},{key:"_manageNode",value:function(t){var e=this._inertManager.register(t,this);this._managedNodes.add(e)}},{key:"_unmanageNode",value:function(t){var e=this._inertManager.deregister(t,this);e&&this._managedNodes.delete(e)}},{key:"_unmanageSubtree",value:function(t){var e=this;a(t,(function(t){return e._unmanageNode(t)}))}},{key:"_adoptInertRoot",value:function(t){var e=this._inertManager.getInertRoot(t);e||(this._inertManager.setInert(t,!0),e=this._inertManager.getInertRoot(t)),e.managedNodes.forEach((function(t){this._manageNode(t.node)}),this)}},{key:"_onMutation",value:function(e,i){e.forEach((function(e){var i=e.target;if("childList"===e.type)t.call(e.addedNodes).forEach((function(t){this._makeSubtreeUnfocusable(t)}),this),t.call(e.removedNodes).forEach((function(t){this._unmanageSubtree(t)}),this);else if("attributes"===e.type)if("tabindex"===e.attributeName)this._manageNode(i);else if(i!==this._rootElement&&"inert"===e.attributeName&&i.hasAttribute("inert")){this._adoptInertRoot(i);var r=this._inertManager.getInertRoot(i);this._managedNodes.forEach((function(t){i.contains(t.node)&&r._manageNode(t.node)}))}}),this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return null!==this._savedAriaHidden}},{key:"savedAriaHidden",set:function(t){this._savedAriaHidden=t},get:function(){return this._savedAriaHidden}}]),r}(),n=function(){function t(e,i){te(this,t),this._node=e,this._overrodeFocusMethod=!1,this._inertRoots=new Set([i]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return Qt(t,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var t=this._node;null!==this._savedTabIndex?t.setAttribute("tabindex",this._savedTabIndex):t.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete t.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType===Node.ELEMENT_NODE){var t=this.node;if(e.call(t,i)){if(-1===t.tabIndex&&this.hasSavedTabIndex)return;t.hasAttribute("tabindex")&&(this._savedTabIndex=t.tabIndex),t.setAttribute("tabindex","-1"),t.nodeType===Node.ELEMENT_NODE&&(t.focus=function(){},this._overrodeFocusMethod=!0)}else t.hasAttribute("tabindex")&&(this._savedTabIndex=t.tabIndex,t.removeAttribute("tabindex"))}}},{key:"addInertRoot",value:function(t){this._throwIfDestroyed(),this._inertRoots.add(t)}},{key:"removeInertRoot",value:function(t){this._throwIfDestroyed(),this._inertRoots.delete(t),0===this._inertRoots.size&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return null!==this._savedTabIndex}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(t){this._throwIfDestroyed(),this._savedTabIndex=t},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),t}(),o=new(function(){function i(t){if(te(this,i),!t)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=t,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),s(t.head||t.body||t.documentElement),"loading"===t.readyState?t.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return Qt(i,[{key:"setInert",value:function(t,e){if(e){if(this._inertRoots.has(t))return;var i=new r(t,this);if(t.setAttribute("inert",""),this._inertRoots.set(t,i),!this._document.body.contains(t))for(var n=t.parentNode;n;)11===n.nodeType&&s(n),n=n.parentNode}else{if(!this._inertRoots.has(t))return;this._inertRoots.get(t).destructor(),this._inertRoots.delete(t),t.removeAttribute("inert")}}},{key:"getInertRoot",value:function(t){return this._inertRoots.get(t)}},{key:"register",value:function(t,e){var i=this._managedNodes.get(t);return void 0!==i?i.addInertRoot(e):i=new n(t,e),this._managedNodes.set(t,i),i}},{key:"deregister",value:function(t,e){var i=this._managedNodes.get(t);return i?(i.removeInertRoot(e),i.destroyed&&this._managedNodes.delete(t),i):null}},{key:"_onDocumentLoaded",value:function(){t.call(this._document.querySelectorAll("[inert]")).forEach((function(t){this.setInert(t,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(i,r){var n=this;i.forEach((function(i){switch(i.type){case"childList":t.call(i.addedNodes).forEach((function(i){if(i.nodeType===Node.ELEMENT_NODE){var r=t.call(i.querySelectorAll("[inert]"));e.call(i,"[inert]")&&r.unshift(i),r.forEach((function(t){this.setInert(t,!0)}),n)}}),n);break;case"attributes":if("inert"!==i.attributeName)return;var r=i.target,o=r.hasAttribute("inert");n.setInert(r,o)}}),this)}}]),i}())(document);Element.prototype.hasOwnProperty("inert")||Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(t){o.setInert(this,t)}})}function a(t,e,i){if(t.nodeType==Node.ELEMENT_NODE){var r=t;e&&e(r);var n=r.shadowRoot;if(n)return void a(n,e);if("content"==r.localName){for(var o=r,s=o.getDistributedNodes?o.getDistributedNodes():[],l=0;l<s.length;l++)a(s[l],e);return}if("slot"==r.localName){for(var d=r,c=d.assignedNodes?d.assignedNodes({flatten:!0}):[],h=0;h<c.length;h++)a(c[h],e);return}}for(var u=t.firstChild;null!=u;)a(u,e),u=u.nextSibling}function s(t){if(!t.querySelector("style#inert-style, link#inert-style")){var e=document.createElement("style");e.setAttribute("id","inert-style"),e.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n",t.appendChild(e)}}}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ee={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},ie={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim"},re=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),ne=function(t){function r(e){var n=t.call(this,i(i({},r.defaultAdapter),e))||this;return n.animationFrame_=0,n.animationTimer_=0,n}return e(r,t),Object.defineProperty(r,"strings",{get:function(){return ie},enumerable:!0,configurable:!0}),Object.defineProperty(r,"cssClasses",{get:function(){return ee},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!0,configurable:!0}),r.prototype.destroy=function(){this.animationFrame_&&cancelAnimationFrame(this.animationFrame_),this.animationTimer_&&clearTimeout(this.animationTimer_)},r.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(ee.OPEN),this.adapter.addClass(ee.ANIMATE),this.runNextAnimationFrame_((function(){t.adapter.addClass(ee.OPENING)})),this.adapter.saveFocus())},r.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(ee.CLOSING)},r.prototype.isOpen=function(){return this.adapter.hasClass(ee.OPEN)},r.prototype.isOpening=function(){return this.adapter.hasClass(ee.OPENING)||this.adapter.hasClass(ee.ANIMATE)},r.prototype.isClosing=function(){return this.adapter.hasClass(ee.CLOSING)},r.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},r.prototype.handleTransitionEnd=function(t){var e=ee.OPENING,i=ee.CLOSING,r=ee.OPEN,n=ee.ANIMATE,o=ee.ROOT;this.isElement_(t.target)&&this.adapter.elementHasClass(t.target,o)&&(this.isClosing()?(this.adapter.removeClass(r),this.closed_(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened_(),this.adapter.notifyOpen()),this.adapter.removeClass(n),this.adapter.removeClass(e),this.adapter.removeClass(i))},r.prototype.opened_=function(){},r.prototype.closed_=function(){},r.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)}))},r.prototype.isElement_=function(t){return Boolean(t.classList)},r}(re),oe=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return e(i,t),i.prototype.handleScrimClick=function(){this.close()},i.prototype.opened_=function(){this.adapter.trapFocus()},i.prototype.closed_=function(){this.adapter.releaseFocus()},i}(ne);function ae(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const se=t=>t.nodeType===Node.ELEMENT_NODE;function le(t){return{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)}}let de=!1;const ce=()=>{},he={get passive(){return de=!0,!1}};document.addEventListener("x",ce,he),document.removeEventListener("x",ce);const ue=de,pe=(t=window.document)=>{let e=t.activeElement;const i=[];if(!e)return i;for(;e&&(i.push(e),e.shadowRoot);)e=e.shadowRoot.activeElement;return i},fe=t=>{const e=pe();if(!e.length)return!1;const i=e[e.length-1],r=new Event("check-if-focused",{bubbles:!0,composed:!0});let n=[];const o=t=>{n=t.composedPath()};return document.body.addEventListener("check-if-focused",o),i.dispatchEvent(r),document.body.removeEventListener("check-if-focused",o),-1!==n.indexOf(t)};
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class me extends Ot{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const ge=t=>(e,i)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach(((t,i)=>e.constructor._observers.set(i,t)))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach(((t,e)=>{const i=this.constructor._observers.get(e);void 0!==i&&i.call(this,this[e],t)}))}}e.constructor._observers.set(i,t)}
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;class be{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach((e=>t+=e+" ")),this.element.setAttribute("class",t)}}}const ve=new WeakMap,ye=m((t=>e=>{if(!(e instanceof $)||e instanceof D||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:r}=i;let n=ve.get(e);void 0===n&&(r.setAttribute("class",i.strings.join(" ")),ve.set(e,n=new Set));const o=r.classList||new be(r);n.forEach((e=>{e in t||(o.remove(e),n.delete(e))}));for(const e in t){const i=t[e];i!=n.has(e)&&(i?(o.add(e),n.add(e)):(o.remove(e),n.delete(e)))}"function"==typeof o.commit&&o.commit()})),_e=document.$blockingElements;class we extends me{constructor(){super(...arguments),this._previousFocus=null,this.open=!1,this.hasHeader=!1,this.type=""}get mdcFoundationClass(){return"modal"===this.type?oe:ne}createAdapter(){return Object.assign(Object.assign({},le(this.mdcRoot)),{elementHasClass:(t,e)=>t.classList.contains(e),saveFocus:()=>{this._previousFocus=this.getRootNode().activeElement},restoreFocus:()=>{this._previousFocus&&this._previousFocus.focus&&this._previousFocus.focus()},notifyClose:()=>{this.open=!1,this.dispatchEvent(new Event(ie.CLOSE_EVENT,{bubbles:!0,cancelable:!0}))},notifyOpen:()=>{this.open=!0,this.dispatchEvent(new Event(ie.OPEN_EVENT,{bubbles:!0,cancelable:!0}))},focusActiveNavigationItem:()=>{},trapFocus:()=>{_e.push(this),this.appContent.inert=!0},releaseFocus:()=>{_e.remove(this),this.appContent.inert=!1}})}_handleScrimClick(){this.mdcFoundation instanceof oe&&this.mdcFoundation.handleScrimClick()}render(){const t="dismissible"===this.type||"modal"===this.type,e="modal"===this.type,i=this.hasHeader?Z`
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      `:"";return Z`
      <aside class="mdc-drawer ${ye({"mdc-drawer--dismissible":t,"mdc-drawer--modal":e})}">
        ${i}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${e?Z`<div class="mdc-drawer-scrim"
                          @click="${this._handleScrimClick}"></div>`:""}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `}firstUpdated(){this.mdcRoot.addEventListener("keydown",(t=>this.mdcFoundation.handleKeydown(t))),this.mdcRoot.addEventListener("transitionend",(t=>this.mdcFoundation.handleTransitionEnd(t)))}updated(t){t.has("type")&&this.createFoundation()}}r([wt(".mdc-drawer")],we.prototype,"mdcRoot",void 0),r([wt(".mdc-drawer-app-content")],we.prototype,"appContent",void 0),r([ge((function(t){""!==this.type&&(t?this.mdcFoundation.open():this.mdcFoundation.close())})),yt({type:Boolean,reflect:!0})],we.prototype,"open",void 0),r([yt({type:Boolean})],we.prototype,"hasHeader",void 0),r([yt({reflect:!0})],we.prototype,"type",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const xe=Ct`.mdc-drawer{border-color:rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer .mdc-drawer__title{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-list-group__subheader{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-list-item__graphic{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-list-item{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-list-item--activated{color:rgba(98, 0, 238, 0.87)}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-list-group__subheader::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-list-item__text,.mdc-drawer .mdc-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translateX(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translateX(100%)}.mdc-drawer--opening{transform:translateX(0);transition-duration:250ms}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translateX(0)}.mdc-drawer--closing{transform:translateX(-100%);transition-duration:200ms}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translateX(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0,0,0,.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0, 0, 0, 0.32)}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:200ms;opacity:0}.mdc-drawer-app-content{overflow:auto;flex:1}:host{display:flex;height:100%}.mdc-drawer{width:256px;width:var(--mdc-drawer-width, 256px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-left:var(--mdc-drawer-width, 256px);margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px;margin-right:var(--mdc-drawer-width, 256px)}`;let Me=class extends we{static get styles(){return[xe,Ct`
    .mdc-drawer {
      background-color: var(--mdc-drawer-background-color, '#ffffff');
      width: var(--mdc-drawer-width, 256px);
      border-left: var(--mdc-drawer-border-left, 1px solid rgba(0,0,0,0.12));
      border-right:var(--mdc-drawer-border-right, 1px solid rgba(0,0,0,0.12));
    }
    .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing) + .mdc-drawer-app-content {
      margin-left: var(--mdc-drawer-width, 256px)!important;
      width: calc(100% - var(--mdc-drawer-width, 256px));
    }`]}};Me=r([bt("mwc-drawer")],Me);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const ke=Ct`.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:white;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:24px;border-bottom-left-radius:0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary, #fff);width:100%;width:var(--mdc-top-app-bar-width, 100%)}.mdc-top-app-bar--prominent #navigation ::slotted(*),.mdc-top-app-bar--prominent #actions ::slotted(*){align-self:flex-start}#navigation ::slotted(*),#actions ::slotted(*){--mdc-icon-button-ripple-opacity: 0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-start,.center-title .mdc-top-app-bar__section--align-end{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.mdc-top-app-bar--fixed-scrolled{box-shadow:var(--mdc-top-app-bar-fixed-box-shadow, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}`
/**
 @license
 Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
 http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
 found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
 part of the polymer project is also subject to an additional IP rights grant
 found at http://polymer.github.io/PATENTS.txt

 Modified for Backend.AI Console Project / Lit-element with TypeScript
 */,Se=[Ct`
    :host > *, html {
      /* Material Design color palette for Google products */
      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;
    }
  `,Ct`
    :host > *, html {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      --general-menu-background-color: transparent;
      --general-menu-background-color-less: rgba(255, 255, 255, 0.6);
      --general-menu-background-border: rgba(23, 23, 23, 1);
      --general-menu-background-opacity: 1;
      --general-menu-color-2: #242424;
      --general-menu-color: #efefef;
      --general-navbar-footer-background-color-r: 255;
      --general-navbar-footer-background-color-g: 255;
      --general-navbar-footer-background-color-b: 255;
      --general-navbar-footer-background-color: #2a2c30;
      --general-navbar-footer-background-color-less: rgba(255, 255, 255, 0.6);
      --general-navbar-footer-background-border: rgba(23, 23, 23, 1);
      --general-navbar-footer-background-opacity: 1;
      --general-navbar-footer-color: #424242;
      --general-panel-width: 280px;
      --general-big-panel-width: 560px;
      --general-content-container-width: 980px;
      --general-background-color: rgba(247, 246, 246, 1);
      --general-sidebar-color: #949494;
      --general-sidebar-background-color: #2a2c30;
      --general-sidebar-h3-color: #cccccc;
      --general-sidebar-h3-border-color: 1px solid #444444;
      --general-sidebar-topbar-background-color-3: #383e48;
      --general-sidebar-topbar-background-color-2: rgba(103, 172, 91, 1.00);
      --general-sidebar-topbar-background-color-4: var(--paper-grey-200);
      --general-sidebar-topbar-color-4: #222222;
      --general-sidebar-topbar-background-color: rgba(24, 24, 24, 1);
      --general-sidebar-topbar-color: #efefef;
      --general-sidebar-selected-color: #72EB51; /*var(--paper-green-400);*/
      --general-sidebar-selected-background-color: transparent;
      --general-sidebar-selected-background-gradient-color: transparent;
      --general-sidebar-selected-border-left: 3px solid var(--general-sidebar-selected-color);
      --general-sidebar-footer-color: #777777;
      --general-sidebar-navbar-footer-color: #222222;
      --general-sidebar-item-even-background-color: transparent;
      --general-sidebar-item-odd-background-color: rgba(239, 240, 242, 0.95);
      --general-sidepanel-color: #dddddd;
      --general-sidepanel-background-color: #ffffff; /*rgba(244, 245, 247, 1); rgba(48, 48, 48, 1.0);*/
      --general-tabbar-background-color: var(--general-sidebar-background-color);
      --general-tabbar-tab-disabled-color: var(--general-sidebar-color);
      --general-tabbar-button-color: var(--general-sidebar-selected-color);
      --general-textfield-selected-color: #27824F;
      --general-textfield-idle-color: #27824F;
      --general-dropdown-color: var(--general-sidebar-color);
      --general-checkbox-color: var(--general-textfield-selected-color);
      --general-textarea-color: var(--general-textfield-selected-color);
      --general-textarea-idle-color: var(--general-textfield-selected-color);
      --general-select-color: var(--general-textfield-selected-color);
      --general-select-idle-color: var(--general-textfield-selected-color);
      --general-button-background-color: #27824F;
      --general-button-color: #ffffff;
      --general-switch-off-color: #AAA;
      --general-switch-on-color: #27824F;
      --general-slider-color: var(--general-textfield-selected-color);
      --general-dialog-background-color: #ffffff;
      --general-font-family: 'Ubuntu', 'Quicksand', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", AppleSDGothic, "Apple SD Gothic Neo", NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
      --general-monospace-font-family: Menlo, Courier, "Courier New", RobotoMono, sans-serif;
      --general-progress-bar-bg: #e8e8e8;
      --general-progress-bar-reserved: linear-gradient(to left, #722cd7, #5c7cfa);
      --general-progress-bar-using: linear-gradient(to left, #18aa7c, #60bb43),
                                       linear-gradient(to left, #722cd7, #5c7cfa);
    }

    body {
      background-color: var(--general-background-color, #fafafa);
      font-family: var(--general-font-family);
      font-weight: 400;
      font-size: 14px;
      color: #222222;
      margin: 0;
      overflow-x: hidden;
      word-break: keep-all;
    }

    [unresolved] {
      background-repeat: no-repeat;
      background-position: 50% 50vh;
      background-color: var(--general-background-color, #fafafa);
    }

    span,
    wl-icon {
      pointer-events: none;
    }

    body,
    .fonts-loaded body {
      font-family: 'Ubuntu', 'Quicksand', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans KR", "Noto Sans", AppleSDGothic, NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
    }

    section {
      padding: 5px 0;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }

    fieldset {
      padding: 0;
      border: 0;
    }

    footer {
      bottom: 0;
      text-align: center;
      color: #aaaaaa;
    }

    footer a {
      color: #cccccc !important;
    }

    #content {
      padding: 0 auto;
      margin: 0 auto 5px auto;
    }

    .monospace {
      font-family: var(--general-monospace-font-family);
    }

    .clearfix:after {
      content: ".";
      visibility: hidden;
      display: block;
      height: 0;
      clear: both;
    }

    div.ui-draggable {
      width: 100%;
    }

    .lazyload {
      opacity: 0;
      transform: scale(0.8);
    }

    .lazyloaded {
      opacity: 1;
      transform: scale(1);
      transition: all 400ms;
    }

    .wl-card-title {
      font-weight: 200;
    }

    wl-select {
      --input-font-family: var(--general-font-family);
    }

    ::-webkit-scrollbar {
      max-width: 2px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 6px;
      background-color: #464646;
    }

    .paper-header {
      height: 60px;
      font-size: 16px;
      line-height: 60px;
      padding: 0 10px;
      color: white;
      transition: height 0.2s;
    }

    .paper-header a {
      color: white;
    }

    .paper-header.tall {
      height: 120px;
    }

    .paper-header.medium-tall {
      height: 100px;
      line-height: 50px;
    }

    .cover {
      margin: 60px;
    }

    wl-icon.tiny {
      --icon-size: 12px;
    }

    wl-card,
    div.card {
      display: block;
      background: white;
      box-sizing: border-box;
      padding: 0;
      border-radius: 2px;
    }

    div.item {
      color: #000000;
    }

    #content > wl-card,
    #content > div.card {
      max-width: var(--general-content-container-width, 980px);
    }

    @media screen and (max-width: 399px) {
      wl-card, div.card {
        margin-left: 0;
        margin-right: 0;
      }
    }

    @media screen and (max-width: 449px) {
      #content > wl-card, #content > div.card {
        width: 100%;
      }
    }

    @media screen and (min-width: 450px) {
      #content > wl-card,
      #content > div,
      #content > div.card {
        width: 100%;
        --card-elevation: 0;
        --card-padding: 0;
      }

      #content > wl-card,
      #content > div.card {
        margin: 0 !important;
      }
    }

    @media screen and (max-width: 899px) {
      .item div.layout {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }
    }

    wl-button.primary-action[raised] {
      background-image: linear-gradient(to bottom, #69cee0 0%, #38bd73 100%);
      height: 20px;
    }

    mwc-multi-select {
      --mdc-select-min-width: 100px; /* Fallback to apply width */
    }

    mwc-button.primary-action,
    mwc-button.primary-action[outlined],
    mwc-button.primary-action[raised],
    mwc-button.primary-action[unelevated] {
      border-radius: 5px;
      background-image: linear-gradient(to bottom, #69cee0 0%, #38bd73 100%);
      --mdc-theme-primary: transparent; /* gradient-color doesn't work in mwc-button styling */
      --mdc-theme-on-primary: var(--general-button-color);
    }


    mwc-button.operation {
      margin: 0px 5px;
    }

    mwc-icon-button.pagination {
      --mdc-icon-button-size: 30px;
      --mdc-theme-text-disabled-on-light: var(--paper-grey-400);
      color: var(--general-button-background-color);
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }

    mwc-icon-button[disabled].pagination {
      background-color: var(--paper-grey-100);
    }

    mwc-list mwc-list-item {
      font-size: 14px;
      font-family: var(--general-font-family);
      --mdc-typography-font-family: var(--general-font-family);
    }

    mwc-switch {
      --mdc-theme-surface: var(--general-switch-off-color);
      --mdc-theme-on-surface: var(--general-switch-off-color);
      --mdc-theme-secondary: var(--general-switch-on-color);
    }

    wl-card p,
    div.card p {
      padding: 10px;
    }

    wl-card > .entry > p,
    div.card > .entry > p {
      padding: 5px;
    }

    wl-card .commands,
    div.card .commands {
      margin: 0;
      border-top: 1px solid #dddddd;
      text-align: left;
    }

    wl-card.item div.items,
    div.card.item div.items {
      padding-bottom: 10px;
    }

    wl-card .commands.float,
    div.card .commands.float {
      border-top: none;
      position: fixed;
      right: 0;
      bottom: 0;
      left: 0;
    }

    .panels wl-card,
    .panels div.card,
    .panels div {
      width: var(--general-panel-width);
    }

    .wide-panels {
      margin: 0 0 10px 0;
    }

    .wide-panels wl-card,
    .wide-panels div.card {
      width: 100%;
      margin: 0 0 16px 0;
    }

    .line {
      margin-bottom: 10px;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -ms-flex-direction: row;
      -webkit-flex-direction: row;
      flex-direction: row;
    }

    .line span {
      margin-left: 24px;
    }

    .line {
      display: inline-block;
      width: auto;
      height: 1px;
      border: 0;
      border-top: 1px solid #ccc;
      margin: 20px;
      padding: 0;
    }

    .resource-line {
      border-bottom: 1px solid #ccc;
      height: 1px;
      width: 60%;
      margin-left: 80px;
      margin-bottom: 10px;
    }

    wl-card > h3,
    div.card > h3 {
      font-size: 20px;
      font-weight: 400;
      padding: 10px 20px;
      margin: 0;
      display: block;
      border-bottom: 1px solid #dddddd;
    }

    wl-card > h3 > .date,
    div.card > h3 > .date {
      font-size: 12px;
      text-align: right;
      color: #888888;
      margin-left: 20px;
    }

    wl-card > h3.blue,
    wl-card > h4.blue,
    div.card > h3.blue,
    div.card > h4.blue {
      border-left: 3px solid var(--paper-light-blue-400);
    }

    wl-card > h3.red,
    wl-card > h4.red,
    div.card > h3.red,
    div.card > h4.red {
      border-left: 3px solid var(--paper-red-400);
    }

    wl-card > h3.green,
    wl-card > h4.green,
    div.card > h3.green,
    div.card > h4.green {
      border-left: 3px solid var(--paper-green-400);
    }

    wl-card > h3.orange,
    wl-card > h4.orange,
    div.card > h3.orange,
    div.card > h4.orange {

      border-left: 3px solid var(--paper-orange-400);
    }

    wl-card > h3.cyan,
    wl-card > h4.cyan,
    div.card > h3.cyan,
    div.card > h4.cyan {

      border-left: 3px solid var(--paper-cyan-400);
    }

    wl-card > h3.lime,
    wl-card > h4.lime,
    div.card > h3.lime,
    div.card > h4.lime {
      border-left: 3px solid var(--paper-lime-400);
    }

    wl-card > h3.pink,
    wl-card > h4.pink,
    div.card > h3.pink,
    div.card > h4.pink {
      border-left: 3px solid var(--paper-pink-400);
    }

    wl-card > h4,
    div.card > h4 {
      font-size: 14px;
      padding: 5px 15px 5px 20px;
      margin: 0 0 10px 0;
      display: block;
      border-bottom: 1px solid #dddddd;
      -ms-flex-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
    }

    wl-card .flex
    div.card .flex {
      display: flex;
    }

    wl-card.entries > div,
    div.card.entries > div {
      margin: 20px;
    }

    wl-backdrop {
      --backdrop-bg: rgba(255, 0, 0, 0.3);
      background: rgba(255, 0, 0, 0.3) !important;
    }

    paper-toolbar {
      --paper-toolbar-sm-height: 45px;
    }

    mwc-button, mwc-button[unelevated] {
      background-image: none;
      --mdc-theme-primary: var(--general-button-background-color);
      --mdc-on-theme-primary: var(--general-button-background-color);
      --mdc-typography-font-family: var(--general-font-family);
    }

    mwc-textfield {
      --mdc-text-field-fill-color: transparent;
      --mdc-theme-primary: var(--general-textfield-selected-color);
      --mdc-text-field-hover-line-color: transparent;
      --mdc-text-field-idle-line-color: var(--general-textfield-idle-color);
      --mdc-text-field-fill-color: rgb(250, 250, 250);
      font-family: var(--general-font-family);
      --mdc-typography-font-family: var(--general-font-family);
      --mdc-typography-subtitle1-font-family: var(--general-font-family);
      --mdc-typography-subtitle1-font-size: 14px;
      --mdc-typography-subtitle1-font-color: black;
      --mdc-typography-subtitle1-font-weight: 400;
      --mdc-typography-subtitle1-line-height: 16px;
    }

    mwc-textarea {
      --mdc-text-field-fill-color: transparent;
      --mdc-theme-primary: var(--general-textarea-color);
      --mdc-text-area-outlined-idle-border-color: var(--general-textarea-idle-color);
      font-family: var(--general-font-family);
      --mdc-typography-subtitle1-font-family: var(--general-font-family);
      --mdc-typography-subtitle1-font-size: 14px;
      --mdc-typography-subtitle1-font-color: black;
      --mdc-typography-subtitle1-font-weight: 400;
      --mdc-typography-subtitle1-line-height: 16px;
    }

    mwc-select {
      font-family: var(--general-font-family);
      --mdc-typography-subtitle1-font-family: var(--general-font-family);
      --mdc-typography-subtitle1-font-size: 14px;
      --mdc-typography-subtitle1-font-color: black;
      --mdc-typography-subtitle1-font-weight: 400;
      --mdc-typography-subtitle1-line-height: 16px;
      --mdc-theme-primary: var(--general-select-color);
      --mdc-select-idle-line-color: var(--general-select-idle-color);
      --mdc-select-hover-line-color: var(--general-select-color);
      --mdc-select-outlined-idle-border-color: var(--general-select-idle-color);
      --mdc-select-outlined-hover-border-color: var(--general-select-color);
      --mdc-select-outlined-disabled-border-color: rgba(255, 255, 255, 0.87);
      --mdc-select-fill-color: transparent;
      --mdc-select-disabled-fill-color: transparent;
      --mdc-select-ink-color: black;
      --mdc-select-label-ink-color: black;
      --mdc-select-focused-label-color: rgba(24, 24, 24, 1.0);
      --mdc-select-disabled-ink-color: rgba(255, 255, 255, 1.0);
      --mdc-select-dropdown-icon-color: #747474;
      --mdc-select-focused-dropdown-icon-color: rgba(255, 255, 255, 0.42);
      --mdc-select-disabled-dropdown-icon-color: #747474;
    }

    .bg-blue {
      background-color: var(--paper-light-blue-400);
      --mdc-theme-primary: var(--paper-light-blue-400);
    }

    .bg-red {
      background-color: var(--paper-red-400);
      --mdc-theme-primary: var(--paper-red-400);
    }

    .bg-yellow {
      background-color: var(--paper-yellow-400);
      --mdc-theme-primary: var(--paper-yellow-400);
    }

    .bg-orange {
      background-color: var(--paper-amber-400);
      --mdc-theme-primary: var(--paper-amber-400);
    }

    .bg-green {
      background-color: var(--paper-green-400);
      --mdc-theme-primary: var(--paper-green-400);
    }

    .bg-cyan {
      background-color: var(--paper-cyan-400);
      --mdc-theme-primary: var(--paper-cyan-400);
    }

    .bg-lime {
      background-color: var(--paper-lime-400);
      --mdc-theme-primary: var(--paper-lime-400);
    }

    .bg-pink {
      background-color: var(--paper-pink-a200);
      --mdc-theme-primary: var(--paper-pink-a200);
    }

    .bg-purple {
      background-color: var(--paper-purple-400);
      --mdc-theme-primary: var(--paper-purple-400);
    }

    .white {
      color: #ffffff !important;
    }

    .black {
      color: #222222 !important;
    }

    .fg.black {
      color: #222222;
    }

    .fg.blue {
      color: var(--paper-light-blue-400) !important;
      --mdc-theme-on-primary: var(--paper-light-blue-400) !important;
    }

    .fg.red {
      color: var(--paper-red-400) !important;
      --mdc-theme-on-primary: var(--paper-red-400) !important;
    }

    .fg.yellow {
      color: var(--paper-yellow-400) !important;
      --mdc-theme-on-primary: var(--paper-yellow-400) !important;
    }

    .fg.orange {
      color: var(--paper-amber-400) !important;
      --mdc-theme-on-primary: var(--paper-amber-400) !important;
    }

    .fg.green {
      color: var(--paper-green-400) !important;
      --mdc-theme-on-primary: var(--paper-green-400) !important;
    }

    .fg.teal {
      color: var(--paper-teal-400) !important;
      --mdc-theme-on-primary: var(--paper-teal-400) !important;
    }

    .fg.cyan {
      color: var(--paper-cyan-400) !important;
      --mdc-theme-on-primary: var(--paper-cyan-400) !important;
    }

    .fg.lime {
      color: var(--paper-lime-400) !important;
      --mdc-theme-on-primary: var(--paper-lime-400) !important;
    }

    .fg.pink {
      color: var(--paper-pink-a200) !important;
      --mdc-theme-on-primary: var(--paper-pink-a200) !important;
    }

    .fg.purple {
      color: var(--paper-purple-400) !important;
      --mdc-theme-on-primary: var(--paper-purple-400) !important;
    }

    /* Layout */
    .flex-1-container {
      -ms-flex: 1 1 0.000000001px;
      -webkit-flex: 1;
      flex: 1;
      -webkit-flex-basis: 0.000000001px;
      flex-basis: 0.000000001px;
    }

    .centered {
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }

    .distancing {
      margin: 15px;
    }

    wl-card > h4,
    div.card > h4 {
      font-weight: 200;
    }

    /* Loading spinner */
    #lablup-loading-spinner {
      position: fixed;
      width: 30px;
      height: 30px;
      bottom: 6px;
      left: 6px;
      z-index: 1000;
    }

    /* Tab on head */
    wl-card h3.tab,
    div.card h3.tab {
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 0;
    }

    /* Button */
    wl-button {
      --button-padding: 8px;
      --button-font-size: 14px;
    }

    wl-button.full-size,
    wl-button.full {
      width: 100%;
    }

    wl-button,
    wl-expansion,
    wl-textfield {
      --font-family-serif: var(--general-font-family);
      --font-family-sans-serif: var(--general-font-family);
    }

    lablup-progress-bar {
      --progress-bar-width: 186px;
      --progress-bar-height: 17px;
      --progres-bar-font-family: var(--general-font-family);
      --progress-bar-border-radius: 3px;
      --progress-bar-font-color-inverse: white;
      --progress-bar-font-color: black;
      margin-bottom: 5px;
    }

    lablup-progress-bar.start {
      --progress-bar-background: var(--general-progress-bar-reserved);
    }

    lablup-progress-bar.end {
      --progress-bar-background: var(--general-progress-bar-using);
    }

    div.progress-bar {
      position: relative;
    }

    div.progress-bar > span.gauge-label {
      position: absolute;
      left: 0.5em;
      top: 25%;
      z-index: 1;
      color: #2f2f2f;
    }

    .gauge-label {
      width: inherit;
      font-weight: bold;
      font-size: 10px;
      color: #2f2f2f;
    }

    .gauge-name {
      float: right;
      font-size: 14px;
      font-weight: bold;
      color: #2f2f2f;
    }

    span.percentage {
      font-size: 10px;
      color: #2f2f2f;
    }

    span.start-bar {
      margin-bottom: 5px;
      margin-left: 5px;
      padding-bottom: 5px;
    }

    span.end-bar {
      margin-top: 5px;
      margin-left: 5px;
      padding-bottom: 5px;
    }

    .resource-name {
      width: 60px;
      text-align: right;
      display: inline-block !important;
      margin: auto 20px auto 0px;
    }

    .resource-legend-stack {
      margin-bottom: 5px;
    }

    span.resource-legend {
      color: var(--general-sidebar-color);
      margin-right: 5px;
    }

    .resource-legend-icon {
      width:10px;
      height: 10px;
      margin-top: 2px;
      margin-left: 10px;
      margin-right: 3px;
      border-radius: 4px;
    }

    .resource-legend-icon.start {
      background-color: rgba(103, 82, 232, 1);
    }

    .resource-legend-icon.end {
      background-color: rgba(58, 178, 97, 1);
    }

    .resource-legend-icon.total {
      background-color: #E0E0E0;
    }

    .vertical-card {
      margin: 20px;
    }

    vaadin-grid {
      font-family: var(--general-font-family);
    }

    backend-ai-session-launcher#session-launcher {
      --component-color: #ffffff;
      --component-bg: rgb(104, 185, 155);
      --component-bg: linear-gradient(rgba(56,189,115, 0.5), rgba(56,189,115, 0.5)), linear-gradient(to bottom, #69cee0 0%, #38bd73 100%);
      --component-bg-hover: linear-gradient(180deg, rgba(98, 180, 131, 1) 0%, rgba(104, 185, 155, 1) 50%, rgba(93, 178, 113, 1) 100%);
      --component-bg-active: rgb(104, 185, 155);
      --component-shadow-color: #37c995;
    }

    .temporarily-hide {
      display: none !important;
    }
  `];
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ee={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},Ae={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Te={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},Ie=function(t){function r(e){return t.call(this,i(i({},r.defaultAdapter),e))||this}return e(r,t),Object.defineProperty(r,"strings",{get:function(){return Te},enumerable:!0,configurable:!0}),Object.defineProperty(r,"cssClasses",{get:function(){return Ee},enumerable:!0,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return Ae},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!0,configurable:!0}),r.prototype.handleTargetScroll=function(){},r.prototype.handleWindowResize=function(){},r.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},r}(re),Ce=function(t){function i(e){var i=t.call(this,e)||this;return i.wasDocked_=!0,i.isDockedShowing_=!0,i.currentAppBarOffsetTop_=0,i.isCurrentlyBeingResized_=!1,i.resizeThrottleId_=0,i.resizeDebounceId_=0,i.lastScrollPosition_=i.adapter.getViewportScrollY(),i.topAppBarHeight_=i.adapter.getTopAppBarHeight(),i}return e(i,t),i.prototype.destroy=function(){t.prototype.destroy.call(this),this.adapter.setStyle("top","")},i.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())},i.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout((function(){t.resizeThrottleId_=0,t.throttledResizeHandler_()}),Ae.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout((function(){t.handleTargetScroll(),t.isCurrentlyBeingResized_=!1,t.resizeDebounceId_=0}),Ae.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},i.prototype.checkForUpdate_=function(){var t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,i=this.currentAppBarOffsetTop_>t,r=e&&i;if(r)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==i)return this.isDockedShowing_=i,!0}return r},i.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){var t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-Ae.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},i.prototype.throttledResizeHandler_=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.handleTargetScroll()},i}(Ie);const Re=ue?{passive:!0}:void 0;class Oe extends me{constructor(){super(...arguments),this.mdcFoundationClass=Ie,this.centerTitle=!1,this.handleTargetScroll=()=>{this.mdcFoundation.handleTargetScroll()},this.handleNavigationClick=()=>{this.mdcFoundation.handleNavigationClick()}}get scrollTarget(){return this._scrollTarget||window}set scrollTarget(t){this.unregisterScrollListener();const e=this.scrollTarget;this._scrollTarget=t,this.updateRootPosition(),this.requestUpdate("scrollTarget",e),this.registerScrollListener()}updateRootPosition(){if(this.mdcRoot){const t=this.scrollTarget===window;this.mdcRoot.style.position=t?"":"absolute"}}render(){let t=Z`<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;return this.centerTitle&&(t=Z`<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${t}</section>`),Z`
      <header class="mdc-top-app-bar ${ye(this.barClasses())}">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation">
          <slot name="navigationIcon"
            @click=${this.handleNavigationClick}></slot>
          ${this.centerTitle?null:t}
        </section>
        ${this.centerTitle?t:null}
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar">
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>
    <div class="${ye(this.contentClasses())}">
      <slot></slot>
    </div>
    `}createAdapter(){return Object.assign(Object.assign({},le(this.mdcRoot)),{setStyle:(t,e)=>this.mdcRoot.style.setProperty(t,e),getTopAppBarHeight:()=>this.mdcRoot.clientHeight,notifyNavigationIconClicked:()=>{this.dispatchEvent(new Event(Te.NAVIGATION_EVENT,{bubbles:!0,cancelable:!0}))},getViewportScrollY:()=>this.scrollTarget instanceof Window?this.scrollTarget.pageYOffset:this.scrollTarget.scrollTop,getTotalActionItems:()=>this._actionItemsSlot.assignedNodes({flatten:!0}).length})}registerListeners(){this.registerScrollListener()}unregisterListeners(){this.unregisterScrollListener()}registerScrollListener(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,Re)}unregisterScrollListener(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}firstUpdated(){super.firstUpdated(),this.updateRootPosition(),this.registerListeners()}disconnectedCallback(){super.disconnectedCallback(),this.unregisterListeners()}}r([wt(".mdc-top-app-bar")],Oe.prototype,"mdcRoot",void 0),r([wt('slot[name="actionItems"]')],Oe.prototype,"_actionItemsSlot",void 0),r([yt({type:Boolean})],Oe.prototype,"centerTitle",void 0),r([yt()],Oe.prototype,"scrollTarget",null);class Pe extends Oe{constructor(){super(...arguments),this.mdcFoundationClass=Ce,this.prominent=!1,this.dense=!1,this.handleResize=()=>{this.mdcFoundation.handleWindowResize()}}barClasses(){return{"mdc-top-app-bar--dense":this.dense,"mdc-top-app-bar--prominent":this.prominent,"center-title":this.centerTitle}}contentClasses(){return{"mdc-top-app-bar--fixed-adjust":!this.dense&&!this.prominent,"mdc-top-app-bar--dense-fixed-adjust":this.dense&&!this.prominent,"mdc-top-app-bar--prominent-fixed-adjust":!this.dense&&this.prominent,"mdc-top-app-bar--dense-prominent-fixed-adjust":this.dense&&this.prominent}}registerListeners(){super.registerListeners(),window.addEventListener("resize",this.handleResize,Re)}unregisterListeners(){super.unregisterListeners(),window.removeEventListener("resize",this.handleResize)}}r([yt({type:Boolean,reflect:!0})],Pe.prototype,"prominent",void 0),r([yt({type:Boolean,reflect:!0})],Pe.prototype,"dense",void 0);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Le=function(t){function i(){var e=null!==t&&t.apply(this,arguments)||this;return e.wasScrolled_=!1,e}return e(i,t),i.prototype.handleTargetScroll=function(){this.adapter.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter.removeClass(Ee.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter.addClass(Ee.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)},i}(Ce);
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class Be extends Pe{constructor(){super(...arguments),this.mdcFoundationClass=Le}barClasses(){return Object.assign(Object.assign({},super.barClasses()),{"mdc-top-app-bar--fixed":!0})}registerListeners(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,Re)}unregisterListeners(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}}let Ne=class extends Be{static get styles(){return[ke,Se,Ct`
        .mdc-top-app-bar {
          width: calc(100% - var(--mdc-drawer-width, 256px));
        }
        .mdc-top-app-bar__title {
          padding-left:0;
        }
        .mdc-top-app-bar--prominent .mdc-top-app-bar__row {
          height: 96px;
        }
        .mdc-top-app-bar--prominent-fixed-adjust {
          padding-top: 96px;
        }

        /* min-width for mobile-view */
        @media screen and (max-width: 375px) {
          .mdc-top-app-bar {
            min-width: 375px !important;
          }
        }
      `]}};Ne=r([bt("mwc-top-app-bar-fixed")],Ne);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const $e=Ct`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;let ze=class extends Ot{render(){return Z`<slot></slot>`}};ze.styles=$e,ze=r([bt("mwc-icon")],ze);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Fe={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},je={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},De={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var qe=["touchstart","pointerdown","mousedown","keydown"],Ue=["touchend","pointerup","mouseup","contextmenu"],He=[],Ve=function(t){function r(e){var n=t.call(this,i(i({},r.defaultAdapter),e))||this;return n.activationAnimationHasEnded_=!1,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.fgScale_="0",n.frame_={width:0,height:0},n.initialSize_=0,n.layoutFrame_=0,n.maxRadius_=0,n.unboundedCoords_={left:0,top:0},n.activationState_=n.defaultActivationState_(),n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.activateHandler_=function(t){return n.activate_(t)},n.deactivateHandler_=function(){return n.deactivate_()},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n}return e(r,t),Object.defineProperty(r,"cssClasses",{get:function(){return Fe},enumerable:!0,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return je},enumerable:!0,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return De},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),r.prototype.init=function(){var t=this,e=this.supportsPressRipple_();if(this.registerRootHandlers_(e),e){var i=r.cssClasses,n=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter.addClass(n),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal_())}))}},r.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter.removeClass(r.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter.removeClass(r.cssClasses.FG_DEACTIVATION));var e=r.cssClasses,i=e.ROOT,n=e.UNBOUNDED;requestAnimationFrame((function(){t.adapter.removeClass(i),t.adapter.removeClass(n),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},r.prototype.activate=function(t){this.activate_(t)},r.prototype.deactivate=function(){this.deactivate_()},r.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},r.prototype.setUnbounded=function(t){var e=r.cssClasses.UNBOUNDED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},r.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter.addClass(r.cssClasses.BG_FOCUSED)}))},r.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter.removeClass(r.cssClasses.BG_FOCUSED)}))},r.prototype.supportsPressRipple_=function(){return this.adapter.browserSupportsCssVars()},r.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},r.prototype.registerRootHandlers_=function(t){var e=this;t&&(qe.forEach((function(t){e.adapter.registerInteractionHandler(t,e.activateHandler_)})),this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler_)),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_)},r.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter.registerInteractionHandler("keyup",this.deactivateHandler_):Ue.forEach((function(t){e.adapter.registerDocumentInteractionHandler(t,e.deactivateHandler_)}))},r.prototype.deregisterRootHandlers_=function(){var t=this;qe.forEach((function(e){t.adapter.deregisterInteractionHandler(e,t.activateHandler_)})),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler_)},r.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler_),Ue.forEach((function(e){t.adapter.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)}))},r.prototype.removeCssVars_=function(){var t=this,e=r.strings;Object.keys(e).forEach((function(i){0===i.indexOf("VAR_")&&t.adapter.updateCssVariable(e[i],null)}))},r.prototype.activate_=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var r=this.previousActivationEvent_;if(!(r&&void 0!==t&&r.type!==t.type))i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&He.length>0&&He.some((function(t){return e.adapter.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&(He.push(t.target),this.registerDeactivationHandlers_(t)),i.wasElementMadeActive=this.checkElementMadeActive_(t),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){He=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive_(t),i.wasElementMadeActive&&e.animateActivation_()),i.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},r.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},r.prototype.animateActivation_=function(){var t=this,e=r.strings,i=e.VAR_FG_TRANSLATE_START,n=e.VAR_FG_TRANSLATE_END,o=r.cssClasses,a=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,l=r.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var d="",c="";if(!this.adapter.isUnbounded()){var h=this.getFgTranslationCoordinates_(),u=h.startPoint,p=h.endPoint;d=u.x+"px, "+u.y+"px",c=p.x+"px, "+p.y+"px"}this.adapter.updateCssVariable(i,d),this.adapter.updateCssVariable(n,c),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),l)},r.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,i=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,i){if(!t)return{x:0,y:0};var r,n,o=e.x,a=e.y,s=o+i.left,l=a+i.top;if("touchstart"===t.type){var d=t;r=d.changedTouches[0].pageX-s,n=d.changedTouches[0].pageY-l}else{var c=t;r=c.pageX-s,n=c.pageY-l}return{x:r,y:n}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},r.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,e=r.cssClasses.FG_DEACTIVATION,i=this.activationState_,n=i.hasDeactivationUXRun,o=i.isActivated;(n||!o)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter.addClass(e),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter.removeClass(e)}),De.FG_DEACTIVATION_MS))},r.prototype.rmBoundedActivationClasses_=function(){var t=r.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter.computeBoundingRect()},r.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),r.numbers.TAP_DELAY_MS)},r.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var r=i({},e);e.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(r)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(r),t.resetActivationState_()})))}},r.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady_()},r.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter.computeBoundingRect();var e=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter.isUnbounded()?e:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+r.numbers.PADDING;var i=Math.floor(e*r.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&i%2!=0?this.initialSize_=i-1:this.initialSize_=i,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},r.prototype.updateLayoutCssVars_=function(){var t=r.strings,e=t.VAR_FG_SIZE,i=t.VAR_LEFT,n=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(e,this.initialSize_+"px"),this.adapter.updateCssVariable(o,this.fgScale_),this.adapter.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords_.top+"px"))},r}(re);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const We=new WeakMap,Ge=m((t=>e=>{if(!(e instanceof $)||e instanceof D||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:r}=i.element;let n=We.get(e);void 0===n&&(r.cssText=i.strings.join(" "),We.set(e,n=new Set)),n.forEach((e=>{e in t||(n.delete(e),-1===e.indexOf("-")?r[e]=null:r.removeProperty(e))}));for(const e in t)n.add(e),-1===e.indexOf("-")?r[e]=t[e]:r.setProperty(e,t[e])}));class Ke extends me{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=Ve}get isActive(){return(this.parentElement||this).matches(":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(t,e)=>{switch(t){case"--mdc-ripple-fg-scale":this.fgScale=e;break;case"--mdc-ripple-fg-size":this.fgSize=e;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=e;break;case"--mdc-ripple-fg-translate-start":this.translateStart=e;break;case"--mdc-ripple-left":this.leftPos=e;break;case"--mdc-ripple-top":this.topPos=e}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(t){this.waitForFoundation((()=>{this.mdcFoundation.activate(t)}))}endPress(){this.waitForFoundation((()=>{this.mdcFoundation.deactivate()}))}startFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleFocus()}))}endFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleBlur()}))}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(t){this.mdcFoundation?t():this.updateComplete.then(t)}render(){const t=this.activated&&(this.primary||!this.accent),e=this.selected&&(this.primary||!this.accent),i={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":t,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":e,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded};return Z`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${ye(i)}"
          style="${Ge({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}r([wt(".mdc-ripple-surface")],Ke.prototype,"mdcRoot",void 0),r([yt({type:Boolean})],Ke.prototype,"primary",void 0),r([yt({type:Boolean})],Ke.prototype,"accent",void 0),r([yt({type:Boolean})],Ke.prototype,"unbounded",void 0),r([yt({type:Boolean})],Ke.prototype,"disabled",void 0),r([yt({type:Boolean})],Ke.prototype,"activated",void 0),r([yt({type:Boolean})],Ke.prototype,"selected",void 0),r([_t()],Ke.prototype,"hovering",void 0),r([_t()],Ke.prototype,"bgFocused",void 0),r([_t()],Ke.prototype,"fgActivation",void 0),r([_t()],Ke.prototype,"fgDeactivation",void 0),r([_t()],Ke.prototype,"fgScale",void 0),r([_t()],Ke.prototype,"fgSize",void 0),r([_t()],Ke.prototype,"translateStart",void 0),r([_t()],Ke.prototype,"translateEnd",void 0),r([_t()],Ke.prototype,"leftPos",void 0),r([_t()],Ke.prototype,"topPos",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Xe=Ct`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}`;let Ze=class extends Ke{};Ze.styles=Xe,Ze=r([bt("mwc-ripple")],Ze);
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class Ye{constructor(t){this.startPress=e=>{t().then((t=>{t&&t.startPress(e)}))},this.endPress=()=>{t().then((t=>{t&&t.endPress()}))},this.startFocus=()=>{t().then((t=>{t&&t.startFocus()}))},this.endFocus=()=>{t().then((t=>{t&&t.endFocus()}))},this.startHover=()=>{t().then((t=>{t&&t.startHover()}))},this.endHover=()=>{t().then((t=>{t&&t.endHover()}))}}}class Je extends Ot{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.expandContent=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new Ye((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderOverlay(){return Z``}renderRipple(){const t=this.raised||this.unelevated;return this.shouldRenderRipple?Z`<mwc-ripple class="ripple" .primary="${!t}" .disabled="${this.disabled}"></mwc-ripple>`:""}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}focus(){const t=this.buttonElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.buttonElement;t&&(this.rippleHandlers.endFocus(),t.blur())}getRenderClasses(){return ye({"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense})}render(){return Z`
      <button
          id="button"
          class="mdc-button ${this.getRenderClasses()}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${ye({flex:this.expandContent})}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return Z`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}r([yt({type:Boolean,reflect:!0})],Je.prototype,"raised",void 0),r([yt({type:Boolean,reflect:!0})],Je.prototype,"unelevated",void 0),r([yt({type:Boolean,reflect:!0})],Je.prototype,"outlined",void 0),r([yt({type:Boolean})],Je.prototype,"dense",void 0),r([yt({type:Boolean,reflect:!0})],Je.prototype,"disabled",void 0),r([yt({type:Boolean,attribute:"trailingicon"})],Je.prototype,"trailingIcon",void 0),r([yt({type:Boolean,reflect:!0})],Je.prototype,"fullwidth",void 0),r([yt({type:String})],Je.prototype,"icon",void 0),r([yt({type:String})],Je.prototype,"label",void 0),r([yt({type:Boolean})],Je.prototype,"expandContent",void 0),r([wt("#button")],Je.prototype,"buttonElement",void 0),r([xt("mwc-ripple")],Je.prototype,"ripple",void 0),r([_t()],Je.prototype,"shouldRenderRipple",void 0),r([St({passive:!0})],Je.prototype,"handleRippleActivate",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Qe=Ct`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);height:36px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color: #fff;--mdc-ripple-focus-opacity: 0.24;--mdc-ripple-hover-opacity: 0.08;--mdc-ripple-press-opacity: 0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl],[dir=rtl] .leading-icon ::slotted(*),.leading-icon ::slotted(*)[dir=rtl],[dir=rtl] .leading-icon .mdc-button__icon,.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;let ti=class extends Je{};ti.styles=Qe,ti=r([bt("mwc-button")],ti);class ei extends Ot{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.label="",this.shouldRenderRipple=!1,this.rippleHandlers=new Ye((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderRipple(){return this.shouldRenderRipple?Z`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const t=this.buttonElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.buttonElement;t&&(this.rippleHandlers.endFocus(),t.blur())}render(){return Z`<button
        class="mdc-icon-button"
        aria-label="${this.label||this.icon}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}">
      ${this.renderRipple()}
    <i class="material-icons">${this.icon}</i>
    <span class="default-slot-container">
        <slot></slot>
    </span>
  </button>`}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}r([yt({type:Boolean,reflect:!0})],ei.prototype,"disabled",void 0),r([yt({type:String})],ei.prototype,"icon",void 0),r([yt({type:String})],ei.prototype,"label",void 0),r([wt("button")],ei.prototype,"buttonElement",void 0),r([xt("mwc-ripple")],ei.prototype,"ripple",void 0),r([_t()],ei.prototype,"shouldRenderRipple",void 0),r([St({passive:!0})],ei.prototype,"handleRippleMouseDown",null),r([St({passive:!0})],ei.prototype,"handleRippleTouchStart",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const ii=Ct`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let ri=class extends ei{};ri.styles=ii,ri=r([bt("mwc-icon-button")],ri);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ni={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},oi={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"},si=function(t){function r(e){var n=t.call(this,i(i({},r.defaultAdapter),e))||this;return n.hasToggledAriaLabel=!1,n}return e(r,t),Object.defineProperty(r,"cssClasses",{get:function(){return ni},enumerable:!0,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return oi},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!0,configurable:!0}),r.prototype.init=function(){var t=this.adapter.getAttr(oi.DATA_ARIA_LABEL_ON),e=this.adapter.getAttr(oi.DATA_ARIA_LABEL_OFF);if(t&&e){if(null!==this.adapter.getAttr(oi.ARIA_PRESSED))throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(oi.ARIA_PRESSED,String(this.isOn()))},r.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},r.prototype.isOn=function(){return this.adapter.hasClass(ni.ICON_BUTTON_ON)},r.prototype.toggle=function(t){if(void 0===t&&(t=!this.isOn()),t?this.adapter.addClass(ni.ICON_BUTTON_ON):this.adapter.removeClass(ni.ICON_BUTTON_ON),this.hasToggledAriaLabel){var e=t?this.adapter.getAttr(oi.DATA_ARIA_LABEL_ON):this.adapter.getAttr(oi.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(oi.ARIA_LABEL,e||"")}else this.adapter.setAttr(oi.ARIA_PRESSED,""+t)},r}(re);class li extends me{constructor(){super(...arguments),this.mdcFoundationClass=si,this.label="",this.disabled=!1,this.onIcon="",this.offIcon="",this.on=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new Ye((()=>(this.shouldRenderRipple=!0,this.ripple)))}createAdapter(){return Object.assign(Object.assign({},le(this.mdcRoot)),{getAttr:t=>this.mdcRoot.getAttribute(t),setAttr:(t,e)=>{this.mdcRoot.setAttribute(t,e)},notifyChange:t=>{this.dispatchEvent(new CustomEvent("MDCIconButtonToggle:change",{detail:t,bubbles:!0}))}})}handleClick(){this.on=!this.on,this.mdcFoundation.handleClick()}focus(){this.rippleHandlers.startFocus(),this.mdcRoot.focus()}blur(){this.rippleHandlers.endFocus(),this.mdcRoot.blur()}renderRipple(){return this.shouldRenderRipple?Z`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}render(){return Z`
      <button
          class="mdc-icon-button"
          @click="${this.handleClick}"
          aria-label="${this.label}"
          ?disabled="${this.disabled}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderRipple()}
        <span class="mdc-icon-button__icon">
          <slot name="offIcon">
            <i class="material-icons">${this.offIcon}</i>
          </slot>
        </span>
        <span class="mdc-icon-button__icon mdc-icon-button__icon--on">
          <slot name="onIcon">
            <i class="material-icons">${this.onIcon}</i>
          </slot>
        </span>
      </button>`}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}r([wt(".mdc-icon-button")],li.prototype,"mdcRoot",void 0),r([yt({type:String})],li.prototype,"label",void 0),r([yt({type:Boolean,reflect:!0})],li.prototype,"disabled",void 0),r([yt({type:String})],li.prototype,"onIcon",void 0),r([yt({type:String})],li.prototype,"offIcon",void 0),r([yt({type:Boolean,reflect:!0}),ge((function(t){this.mdcFoundation.toggle(t)}))],li.prototype,"on",void 0),r([xt("mwc-ripple")],li.prototype,"ripple",void 0),r([_t()],li.prototype,"shouldRenderRipple",void 0),r([St({passive:!0})],li.prototype,"handleRippleMouseDown",null),r([St({passive:!0})],li.prototype,"handleRippleTouchStart",null);
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
let di=class extends li{};di.styles=ii,di=r([bt("mwc-icon-button-toggle")],di);
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
class ci extends Ot{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.multipleGraphics=!1,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.shouldRenderRipple=!1,this._managingList=null,this.boundOnClick=this.onClick.bind(this),this._firstChanged=!0,this._skipPropRequest=!1,this.rippleHandlers=new Ye((()=>(this.shouldRenderRipple=!0,this.ripple))),this.listeners=[{target:this,eventNames:["click"],cb:()=>{this.onClick()}},{target:this,eventNames:["mouseenter"],cb:this.rippleHandlers.startHover},{target:this,eventNames:["mouseleave"],cb:this.rippleHandlers.endHover},{target:this,eventNames:["focus"],cb:this.rippleHandlers.startFocus},{target:this,eventNames:["blur"],cb:this.rippleHandlers.endFocus},{target:this,eventNames:["mousedown","touchstart"],cb:t=>{const e=t.type;this.onDown("mousedown"===e?"mouseup":"touchend",t)}}]}get text(){const t=this.textContent;return t?t.trim():""}render(){const t=this.renderText(),e=this.graphic?this.renderGraphic():Z``,i=this.hasMeta?this.renderMeta():Z``;return Z`
      ${this.renderRipple()}
      ${e}
      ${t}
      ${i}`}renderRipple(){return this.shouldRenderRipple?Z`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`:this.activated?Z`<div class="fake-activated-ripple"></div>`:""}renderGraphic(){const t={multi:this.multipleGraphics};return Z`
      <span class="mdc-list-item__graphic material-icons ${ye(t)}">
        <slot name="graphic"></slot>
      </span>`}renderMeta(){return Z`
      <span class="mdc-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`}renderText(){const t=this.twoline?this.renderTwoline():this.renderSingleLine();return Z`
      <span class="mdc-list-item__text">
        ${t}
      </span>`}renderSingleLine(){return Z`<slot></slot>`}renderTwoline(){return Z`
      <span class="mdc-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `}onClick(){this.fireRequestSelected(!this.selected,"interaction")}onDown(t,e){const i=()=>{window.removeEventListener(t,i),this.rippleHandlers.endPress()};window.addEventListener(t,i),this.rippleHandlers.startPress(e)}fireRequestSelected(t,e){if(this.noninteractive)return;const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{source:e,selected:t}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.setAttribute("mwc-list-item","");for(const t of this.listeners)for(const e of t.eventNames)t.target.addEventListener(e,t.cb,{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const t of this.listeners)for(const e of t.eventNames)t.target.removeEventListener(e,t.cb);this._managingList&&(this._managingList.debouncedLayout?this._managingList.debouncedLayout(!0):this._managingList.layout(!0))}firstUpdated(){const t=new Event("list-item-rendered",{bubbles:!0,composed:!0});this.dispatchEvent(t)}}r([wt("slot")],ci.prototype,"slotElement",void 0),r([xt("mwc-ripple")],ci.prototype,"ripple",void 0),r([yt({type:String})],ci.prototype,"value",void 0),r([yt({type:String,reflect:!0})],ci.prototype,"group",void 0),r([yt({type:Number,reflect:!0})],ci.prototype,"tabindex",void 0),r([yt({type:Boolean,reflect:!0}),ge((function(t){t?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}))],ci.prototype,"disabled",void 0),r([yt({type:Boolean,reflect:!0})],ci.prototype,"twoline",void 0),r([yt({type:Boolean,reflect:!0})],ci.prototype,"activated",void 0),r([yt({type:String,reflect:!0})],ci.prototype,"graphic",void 0),r([yt({type:Boolean})],ci.prototype,"multipleGraphics",void 0),r([yt({type:Boolean})],ci.prototype,"hasMeta",void 0),r([yt({type:Boolean,reflect:!0}),ge((function(t){t?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.setAttribute("mwc-list-item","")}))],ci.prototype,"noninteractive",void 0),r([yt({type:Boolean,reflect:!0}),ge((function(t){const e=this.getAttribute("role"),i="gridcell"===e||"option"===e||"row"===e||"tab"===e;i&&t?this.setAttribute("aria-selected","true"):i&&this.setAttribute("aria-selected","false"),this._firstChanged?this._firstChanged=!1:this._skipPropRequest||this.fireRequestSelected(t,"property")}))],ci.prototype,"selected",void 0),r([_t()],ci.prototype,"shouldRenderRipple",void 0),r([_t()],ci.prototype,"_managingList",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const hi=Ct`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var(--mdc-theme-primary, #6200ee)}:host([activated]) .mdc-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item__meta.multi{width:auto}.mdc-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-list-item__meta ::slotted(.material-icons),.mdc-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}:host[dir=rtl] .mdc-list-item__meta,[dir=rtl] :host .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text ::slotted([for]),.mdc-list-item__text[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list--dense .mdc-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-list-item__text ::slotted(*),:host([disabled]) .mdc-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}:host[dir=rtl] :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}:host[dir=rtl] :host([graphic=icon]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=icon]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-list-item__graphic,:host([graphic=large]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic.multi,:host([graphic=large]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let ui=class extends ci{};ui.styles=hi,ui=r([bt("mwc-list-item")],ui);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const pi=new WeakMap,fi=m((t=>e=>{const i=pi.get(e);if(void 0===t&&e instanceof $){if(void 0!==i||!pi.has(e)){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else t!==i&&e.setValue(t);pi.set(e,t)}));
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var mi="Unknown",gi="Backspace",bi="Enter",vi="Spacebar",yi="PageUp",_i="PageDown",wi="End",xi="Home",Mi="ArrowLeft",ki="ArrowUp",Si="ArrowRight",Ei="ArrowDown",Ai="Delete",Ti="Escape",Ii=new Set;Ii.add(gi),Ii.add(bi),Ii.add(vi),Ii.add(yi),Ii.add(_i),Ii.add(wi),Ii.add(xi),Ii.add(Mi),Ii.add(ki),Ii.add(Si),Ii.add(Ei),Ii.add(Ai),Ii.add(Ti);var Ci=8,Ri=13,Oi=32,Pi=33,Li=34,Bi=35,Ni=36,$i=37,zi=38,Fi=39,ji=40,Di=46,qi=27,Ui=new Map;Ui.set(Ci,gi),Ui.set(Ri,bi),Ui.set(Oi,vi),Ui.set(Pi,yi),Ui.set(Li,_i),Ui.set(Bi,wi),Ui.set(Ni,xi),Ui.set($i,Mi),Ui.set(zi,ki),Ui.set(Fi,Si),Ui.set(ji,Ei),Ui.set(Di,Ai),Ui.set(qi,Ti);var Hi=new Set;function Vi(t){var e=t.key;if(Ii.has(e))return e;var i=Ui.get(t.keyCode);return i||mi}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */Hi.add(yi),Hi.add(_i),Hi.add(wi),Hi.add(xi),Hi.add(Mi),Hi.add(ki),Hi.add(Si),Hi.add(Ei);var Wi="mdc-list-item",Gi="mdc-list-item--disabled",Ki={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+Wi+" button:not(:disabled),\n    ."+Wi+" a\n  ",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+Wi+" button:not(:disabled),\n    ."+Wi+" a,\n    ."+Wi+' input[type="radio"]:not(:disabled),\n    .'+Wi+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]'},Xi={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
const Zi=["input","button","textarea","select"];function Yi(t){return t instanceof Set}const Ji=t=>{const e=t===Xi.UNSET_INDEX?new Set:t;return Yi(e)?new Set(e):new Set([e])};class Qi extends re{constructor(t){super(Object.assign(Object.assign({},Qi.defaultAdapter),t)),this.isMulti_=!1,this.wrapFocus_=!1,this.isVertical_=!0,this.selectedIndex_=Xi.UNSET_INDEX,this.focusedItemIndex_=Xi.UNSET_INDEX,this.useActivatedClass_=!1,this.ariaCurrentAttrValue_=null}static get strings(){return Ki}static get numbers(){return Xi}static get defaultAdapter(){return{focusItemAtIndex:()=>{},getFocusedElementIndex:()=>0,getListItemCount:()=>0,isFocusInsideList:()=>!1,isRootFocused:()=>!1,notifyAction:()=>{},notifySelected:()=>{},getSelectedStateForElementIndex:()=>!1,setDisabledStateForElementIndex:()=>{},getDisabledStateForElementIndex:()=>!1,setSelectedStateForElementIndex:()=>{},setActivatedStateForElementIndex:()=>{},setTabIndexForElementIndex:()=>{},setAttributeForElementIndex:()=>{},getAttributeForElementIndex:()=>null}}setWrapFocus(t){this.wrapFocus_=t}setMulti(t){this.isMulti_=t;const e=this.selectedIndex_;if(t){if(!Yi(e)){const t=e===Xi.UNSET_INDEX;this.selectedIndex_=t?new Set:new Set([e])}}else if(Yi(e))if(e.size){const t=Array.from(e).sort();this.selectedIndex_=t[0]}else this.selectedIndex_=Xi.UNSET_INDEX}setVerticalOrientation(t){this.isVertical_=t}setUseActivatedClass(t){this.useActivatedClass_=t}getSelectedIndex(){return this.selectedIndex_}setSelectedIndex(t){this.isIndexValid_(t)&&(this.isMulti_?this.setMultiSelectionAtIndex_(Ji(t)):this.setSingleSelectionAtIndex_(t))}handleFocusIn(t,e){e>=0&&this.adapter.setTabIndexForElementIndex(e,0)}handleFocusOut(t,e){e>=0&&this.adapter.setTabIndexForElementIndex(e,-1),setTimeout((()=>{this.adapter.isFocusInsideList()||this.setTabindexToFirstSelectedItem_()}),0)}handleKeydown(t,e,i){const r="ArrowLeft"===Vi(t),n="ArrowUp"===Vi(t),o="ArrowRight"===Vi(t),a="ArrowDown"===Vi(t),s="Home"===Vi(t),l="End"===Vi(t),d="Enter"===Vi(t),c="Spacebar"===Vi(t);if(this.adapter.isRootFocused())return void(n||l?(t.preventDefault(),this.focusLastElement()):(a||s)&&(t.preventDefault(),this.focusFirstElement()));let h,u=this.adapter.getFocusedElementIndex();if(!(-1===u&&(u=i,u<0))){if(this.isVertical_&&a||!this.isVertical_&&o)this.preventDefaultEvent(t),h=this.focusNextElement(u);else if(this.isVertical_&&n||!this.isVertical_&&r)this.preventDefaultEvent(t),h=this.focusPrevElement(u);else if(s)this.preventDefaultEvent(t),h=this.focusFirstElement();else if(l)this.preventDefaultEvent(t),h=this.focusLastElement();else if((d||c)&&e){const e=t.target;if(e&&"A"===e.tagName&&d)return;this.preventDefaultEvent(t),this.setSelectedIndexOnAction_(u,!0)}this.focusedItemIndex_=u,void 0!==h&&(this.setTabindexAtIndex_(h),this.focusedItemIndex_=h)}}handleSingleSelection(t,e,i){t!==Xi.UNSET_INDEX&&(this.setSelectedIndexOnAction_(t,e,i),this.setTabindexAtIndex_(t),this.focusedItemIndex_=t)}focusNextElement(t){let e=t+1;if(e>=this.adapter.getListItemCount()){if(!this.wrapFocus_)return t;e=0}return this.adapter.focusItemAtIndex(e),e}focusPrevElement(t){let e=t-1;if(e<0){if(!this.wrapFocus_)return t;e=this.adapter.getListItemCount()-1}return this.adapter.focusItemAtIndex(e),e}focusFirstElement(){return this.adapter.focusItemAtIndex(0),0}focusLastElement(){const t=this.adapter.getListItemCount()-1;return this.adapter.focusItemAtIndex(t),t}setEnabled(t,e){this.isIndexValid_(t)&&this.adapter.setDisabledStateForElementIndex(t,!e)}preventDefaultEvent(t){const e=(""+t.target.tagName).toLowerCase();-1===Zi.indexOf(e)&&t.preventDefault()}setSingleSelectionAtIndex_(t,e=!0){this.selectedIndex_!==t&&(this.selectedIndex_!==Xi.UNSET_INDEX&&(this.adapter.setSelectedStateForElementIndex(this.selectedIndex_,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(this.selectedIndex_,!1)),e&&this.adapter.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(t,!0),this.setAriaForSingleSelectionAtIndex_(t),this.selectedIndex_=t,this.adapter.notifySelected(t))}setMultiSelectionAtIndex_(t,e=!0){const i=((t,e)=>{const i=Array.from(t),r=Array.from(e),n={added:[],removed:[]},o=i.sort(),a=r.sort();let s=0,l=0;for(;s<o.length||l<a.length;){const t=o[s],e=a[l];t!==e?void 0!==t&&(void 0===e||t<e)?(n.removed.push(t),s++):void 0!==e&&(void 0===t||e<t)&&(n.added.push(e),l++):(s++,l++)}return n})(Ji(this.selectedIndex_),t);if(i.removed.length||i.added.length){for(const t of i.removed)e&&this.adapter.setSelectedStateForElementIndex(t,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(t,!1);for(const t of i.added)e&&this.adapter.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(t,!0);this.selectedIndex_=t,this.adapter.notifySelected(t,i)}}setAriaForSingleSelectionAtIndex_(t){this.selectedIndex_===Xi.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter.getAttributeForElementIndex(t,Ki.ARIA_CURRENT));const e=null!==this.ariaCurrentAttrValue_,i=e?Ki.ARIA_CURRENT:Ki.ARIA_SELECTED;this.selectedIndex_!==Xi.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex_,i,"false");const r=e?this.ariaCurrentAttrValue_:"true";this.adapter.setAttributeForElementIndex(t,i,r)}setTabindexAtIndex_(t){this.focusedItemIndex_===Xi.UNSET_INDEX&&0!==t?this.adapter.setTabIndexForElementIndex(0,-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==t&&this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_,-1),this.adapter.setTabIndexForElementIndex(t,0)}setTabindexToFirstSelectedItem_(){let t=0;"number"==typeof this.selectedIndex_&&this.selectedIndex_!==Xi.UNSET_INDEX?t=this.selectedIndex_:Yi(this.selectedIndex_)&&this.selectedIndex_.size>0&&(t=Math.min(...this.selectedIndex_)),this.setTabindexAtIndex_(t)}isIndexValid_(t){if(t instanceof Set){if(!this.isMulti_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");if(0===t.size)return!0;{let e=!1;for(const i of t)if(e=this.isIndexInRange_(i),e)break;return e}}if("number"==typeof t){if(this.isMulti_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return t===Xi.UNSET_INDEX||this.isIndexInRange_(t)}return!1}isIndexInRange_(t){const e=this.adapter.getListItemCount();return t>=0&&t<e}setSelectedIndexOnAction_(t,e,i){if(this.adapter.getDisabledStateForElementIndex(t))return;let r=t;if(this.isMulti_&&(r=new Set([t])),this.isIndexValid_(r)){if(this.isMulti_)this.toggleMultiAtIndex(t,i,e);else if(e||i)this.setSingleSelectionAtIndex_(t,e);else{this.selectedIndex_===t&&this.setSingleSelectionAtIndex_(Xi.UNSET_INDEX)}e&&this.adapter.notifyAction(t)}}toggleMultiAtIndex(t,e,i=!0){let r=!1;r=void 0===e?!this.adapter.getSelectedStateForElementIndex(t):e;const n=Ji(this.selectedIndex_);r?n.add(t):n.delete(t),this.setMultiSelectionAtIndex_(n,i)}}const tr=t=>t.hasAttribute("mwc-list-item");function er(){const t=this.itemsReadyResolver;this.itemsReady=new Promise((t=>this.itemsReadyResolver=t)),t()}class ir extends me{constructor(){super(),this.mdcAdapter=null,this.mdcFoundationClass=Qi,this.activatable=!1,this.multi=!1,this.wrapFocus=!1,this.itemRoles=null,this.innerRole=null,this.innerAriaLabel=null,this.rootTabbable=!1,this.previousTabindex=null,this.noninteractive=!1,this.itemsReadyResolver=()=>{},this.itemsReady=Promise.resolve([]),this.items_=[];const t=function(t,e=50){let i;return function(r=!0){clearTimeout(i),i=setTimeout((()=>{t(r)}),e)}}(this.layout.bind(this));this.debouncedLayout=(e=!0)=>{er.call(this),t(e)}}async _getUpdateComplete(){await super._getUpdateComplete(),await this.itemsReady}get assignedElements(){const t=this.slotElement;return t?t.assignedNodes({flatten:!0}).filter(se):[]}get items(){return this.items_}updateItems(){const t=this.assignedElements,e=[];for(const i of t)tr(i)&&(e.push(i),i._managingList=this),i.hasAttribute("divider")&&!i.hasAttribute("role")&&i.setAttribute("role","separator");this.items_=e;const i=new Set;if(this.items_.forEach(((t,e)=>{this.itemRoles?t.setAttribute("role",this.itemRoles):t.removeAttribute("role"),t.selected&&i.add(e)})),this.multi)this.select(i);else{const t=i.size?i.entries().next().value[1]:-1;this.select(t)}const r=new Event("items-updated",{bubbles:!0,composed:!0});this.dispatchEvent(r)}get selected(){const t=this.index;if(!Yi(t))return-1===t?null:this.items[t];const e=[];for(const i of t)e.push(this.items[i]);return e}get index(){return this.mdcFoundation?this.mdcFoundation.getSelectedIndex():-1}render(){const t=null===this.innerRole?void 0:this.innerRole,e=null===this.innerAriaLabel?void 0:this.innerAriaLabel,i=this.rootTabbable?"0":"-1";return Z`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${fi(t)}"
          aria-label="${fi(e)}"
          class="mdc-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `}renderPlaceholder(){return void 0!==this.emptyMessage&&0===this.assignedElements.length?Z`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `:null}firstUpdated(){super.firstUpdated(),this.items.length||(this.mdcFoundation.setMulti(this.multi),this.layout())}onFocusIn(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusIn(t,e)}}onFocusOut(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusOut(t,e)}}onKeydown(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t),i=t.target,r=tr(i);this.mdcFoundation.handleKeydown(t,r,e)}}onRequestSelected(t){if(this.mdcFoundation){let e=this.getIndexOfTarget(t);if(-1===e&&(this.layout(),e=this.getIndexOfTarget(t),-1===e))return;if(this.items[e].disabled)return;const i=t.detail.selected,r=t.detail.source;this.mdcFoundation.handleSingleSelection(e,"interaction"===r,i),t.stopPropagation()}}getIndexOfTarget(t){const e=this.items,i=t.composedPath();for(const t of i){let i=-1;if(se(t)&&tr(t)&&(i=e.indexOf(t)),-1!==i)return i}return-1}createAdapter(){return this.mdcAdapter={getListItemCount:()=>this.mdcRoot?this.items.length:0,getFocusedElementIndex:this.getFocusedItemIndex,getAttributeForElementIndex:(t,e)=>{if(!this.mdcRoot)return"";const i=this.items[t];return i?i.getAttribute(e):""},setAttributeForElementIndex:(t,e,i)=>{if(!this.mdcRoot)return;const r=this.items[t];r&&r.setAttribute(e,i)},focusItemAtIndex:t=>{const e=this.items[t];e&&e.focus()},setTabIndexForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.tabindex=e)},notifyAction:t=>{const e={bubbles:!0,composed:!0};e.detail={index:t};const i=new CustomEvent("action",e);this.dispatchEvent(i)},notifySelected:(t,e)=>{const i={bubbles:!0,composed:!0};i.detail={index:t,diff:e};const r=new CustomEvent("selected",i);this.dispatchEvent(r)},isFocusInsideList:()=>fe(this),isRootFocused:()=>{const t=this.mdcRoot;return t.getRootNode().activeElement===t},setDisabledStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.disabled=e)},getDisabledStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.disabled},setSelectedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.selected=e)},getSelectedStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.selected},setActivatedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.activated=e)}},this.mdcAdapter}selectUi(t,e=!1){const i=this.items[t];i&&(i.selected=!0,i.activated=e)}deselectUi(t){const e=this.items[t];e&&(e.selected=!1,e.activated=!1)}select(t){this.mdcFoundation&&this.mdcFoundation.setSelectedIndex(t)}toggle(t,e){this.multi&&this.mdcFoundation.toggleMultiAtIndex(t,e)}onListItemConnected(t){const e=t.target;this.layout(-1===this.items.indexOf(e))}layout(t=!0){t&&this.updateItems();const e=this.items[0];for(const t of this.items)t.tabindex=-1;e&&(this.noninteractive?this.previousTabindex||(this.previousTabindex=e):e.tabindex=0),this.itemsReadyResolver()}getFocusedItemIndex(){if(!this.mdcRoot)return-1;if(!this.items.length)return-1;const t=pe();if(!t.length)return-1;for(let e=t.length-1;e>=0;e--){const i=t[e];if(tr(i))return this.items.indexOf(i)}return-1}focusItemAtIndex(t){for(const t of this.items)if(0===t.tabindex){t.tabindex=-1;break}this.items[t].tabindex=0,this.items[t].focus()}focus(){const t=this.mdcRoot;t&&t.focus()}blur(){const t=this.mdcRoot;t&&t.blur()}}r([yt({type:String})],ir.prototype,"emptyMessage",void 0),r([wt(".mdc-list")],ir.prototype,"mdcRoot",void 0),r([wt("slot")],ir.prototype,"slotElement",void 0),r([yt({type:Boolean}),ge((function(t){this.mdcFoundation&&this.mdcFoundation.setUseActivatedClass(t)}))],ir.prototype,"activatable",void 0),r([yt({type:Boolean}),ge((function(t,e){this.mdcFoundation&&this.mdcFoundation.setMulti(t),void 0!==e&&this.layout()}))],ir.prototype,"multi",void 0),r([yt({type:Boolean}),ge((function(t){this.mdcFoundation&&this.mdcFoundation.setWrapFocus(t)}))],ir.prototype,"wrapFocus",void 0),r([yt({type:String}),ge((function(t,e){void 0!==e&&this.updateItems()}))],ir.prototype,"itemRoles",void 0),r([yt({type:String})],ir.prototype,"innerRole",void 0),r([yt({type:String})],ir.prototype,"innerAriaLabel",void 0),r([yt({type:Boolean})],ir.prototype,"rootTabbable",void 0),r([yt({type:Boolean,reflect:!0}),ge((function(t){const e=this.slotElement;if(t&&e){const t=function(t,e){for(const i of t.assignedNodes({flatten:!0}))if(se(i)){const t=i;if(ae(t,e))return t}return null}(e,'[tabindex="0"]');this.previousTabindex=t,t&&t.setAttribute("tabindex","-1")}else!t&&this.previousTabindex&&(this.previousTabindex.setAttribute("tabindex","0"),this.previousTabindex=null)}))],ir.prototype,"noninteractive",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const rr=Ct`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-list:focus{outline:none}.mdc-list-item{height:48px}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc(100% - var(--mdc-list-inset-margin, 72px))}.mdc-list-group[dir=rtl] .mdc-list ::slotted([divider][inset]),[dir=rtl] .mdc-list-group .mdc-list ::slotted([divider][inset]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-list ::slotted([divider][inset][padded]){width:calc(100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px))}.mdc-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-list--two-line.mdc-list--dense ::slotted([mwc-list-item]),.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-list--dense ::slotted(.mdc-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let nr=class extends ir{};nr.styles=rr,nr=r([bt("mwc-list")],nr);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var or,ar,sr={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},lr={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},dr={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67};!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}(or||(or={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(ar||(ar={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cr=function(t){function r(e){var n=t.call(this,i(i({},r.defaultAdapter),e))||this;return n.isSurfaceOpen=!1,n.isQuickOpen=!1,n.isHoistedElement=!1,n.isFixedPosition=!1,n.openAnimationEndTimerId=0,n.closeAnimationEndTimerId=0,n.animationRequestId=0,n.anchorCorner=ar.TOP_START,n.originCorner=ar.TOP_START,n.anchorMargin={top:0,right:0,bottom:0,left:0},n.position={x:0,y:0},n}return e(r,t),Object.defineProperty(r,"cssClasses",{get:function(){return sr},enumerable:!0,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return lr},enumerable:!0,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return dr},enumerable:!0,configurable:!0}),Object.defineProperty(r,"Corner",{get:function(){return ar},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){}}},enumerable:!0,configurable:!0}),r.prototype.init=function(){var t=r.cssClasses,e=t.ROOT,i=t.OPEN;if(!this.adapter.hasClass(e))throw new Error(e+" class required in root element.");this.adapter.hasClass(i)&&(this.isSurfaceOpen=!0)},r.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},r.prototype.setAnchorCorner=function(t){this.anchorCorner=t},r.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^or.RIGHT},r.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},r.prototype.setIsHoisted=function(t){this.isHoistedElement=t},r.prototype.setFixedPosition=function(t){this.isFixedPosition=t},r.prototype.setAbsolutePosition=function(t,e){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(e)?e:0},r.prototype.setQuickOpen=function(t){this.isQuickOpen=t},r.prototype.isOpen=function(){return this.isSurfaceOpen},r.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(r.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(r.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame((function(){t.adapter.addClass(r.cssClasses.OPEN),t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.openAnimationEndTimerId=setTimeout((function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(r.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()}),dr.TRANSITION_OPEN_DURATION)})),this.isSurfaceOpen=!0))},r.prototype.close=function(t){var e=this;void 0===t&&(t=!1),this.isSurfaceOpen&&(this.isQuickOpen?(this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(r.cssClasses.OPEN),this.adapter.removeClass(r.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose()):(this.adapter.addClass(r.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){e.adapter.removeClass(r.cssClasses.OPEN),e.adapter.removeClass(r.cssClasses.IS_OPEN_BELOW),e.closeAnimationEndTimerId=setTimeout((function(){e.closeAnimationEndTimerId=0,e.adapter.removeClass(r.cssClasses.ANIMATING_CLOSED),e.adapter.notifyClose()}),dr.TRANSITION_CLOSE_DURATION)})),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()))},r.prototype.handleBodyClick=function(t){var e=t.target;this.adapter.isElementInContainer(e)||this.close()},r.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},r.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var e=this.getoriginCorner(),i=this.getMenuSurfaceMaxHeight(e),n=this.hasBit(e,or.BOTTOM)?"bottom":"top",o=this.hasBit(e,or.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(e),s=this.getVerticalOriginOffset(e),l=this.measurements,d=l.anchorSize,c=l.surfaceSize,h=((t={})[o]=a,t[n]=s,t);d.width/c.width>dr.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(h),this.adapter.setTransformOrigin(o+" "+n),this.adapter.setPosition(h),this.adapter.setMaxHeight(i?i+"px":""),this.hasBit(e,or.BOTTOM)||this.adapter.addClass(r.cssClasses.IS_OPEN_BELOW)},r.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),e=this.adapter.getBodyDimensions(),i=this.adapter.getWindowDimensions(),r=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:i.width-t.right,bottom:i.height-t.bottom,left:t.left},viewportSize:i,windowScroll:r}},r.prototype.getoriginCorner=function(){var t,e,i=this.originCorner,n=this.measurements,o=n.viewportDistance,a=n.anchorSize,s=n.surfaceSize,l=r.numbers.MARGIN_TO_EDGE;this.hasBit(this.anchorCorner,or.BOTTOM)?(t=o.top-l+a.height+this.anchorMargin.bottom,e=o.bottom-l-this.anchorMargin.bottom):(t=o.top-l+this.anchorMargin.top,e=o.bottom-l+a.height-this.anchorMargin.top),!(e-s.height>0)&&t>=e&&(i=this.setBit(i,or.BOTTOM));var d,c,h=this.adapter.isRtl(),u=this.hasBit(this.anchorCorner,or.FLIP_RTL),p=this.hasBit(this.anchorCorner,or.RIGHT)||this.hasBit(i,or.RIGHT),f=!1;(f=h&&u?!p:p)?(d=o.left+a.width+this.anchorMargin.right,c=o.right-this.anchorMargin.right):(d=o.left+this.anchorMargin.left,c=o.right+a.width-this.anchorMargin.left);var m=d-s.width>0,g=c-s.width>0,b=this.hasBit(i,or.FLIP_RTL)&&this.hasBit(i,or.RIGHT);return g&&b&&h||!m&&b?i=this.unsetBit(i,or.RIGHT):(m&&f&&h||m&&!f&&p||!g&&d>=c)&&(i=this.setBit(i,or.RIGHT)),i},r.prototype.getMenuSurfaceMaxHeight=function(t){var e=this.measurements.viewportDistance,i=0,n=this.hasBit(t,or.BOTTOM),o=this.hasBit(this.anchorCorner,or.BOTTOM),a=r.numbers.MARGIN_TO_EDGE;return n?(i=e.top+this.anchorMargin.top-a,o||(i+=this.measurements.anchorSize.height)):(i=e.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,o&&(i-=this.measurements.anchorSize.height)),i},r.prototype.getHorizontalOriginOffset=function(t){var e=this.measurements.anchorSize,i=this.hasBit(t,or.RIGHT),r=this.hasBit(this.anchorCorner,or.RIGHT);if(i){var n=r?e.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?n-(this.measurements.viewportSize.width-this.measurements.bodySize.width):n}return r?e.width-this.anchorMargin.right:this.anchorMargin.left},r.prototype.getVerticalOriginOffset=function(t){var e=this.measurements.anchorSize,i=this.hasBit(t,or.BOTTOM),r=this.hasBit(this.anchorCorner,or.BOTTOM);return i?r?e.height-this.anchorMargin.top:-this.anchorMargin.bottom:r?e.height+this.anchorMargin.bottom:this.anchorMargin.top},r.prototype.adjustPositionForHoistedElement=function(t){var e,i,r=this.measurements,n=r.windowScroll,o=r.viewportDistance,a=Object.keys(t);try{for(var s=function(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],r=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(a),l=s.next();!l.done;l=s.next()){var d=l.value,c=t[d]||0;c+=o[d],this.isFixedPosition||("top"===d?c+=n.y:"bottom"===d?c-=n.y:"left"===d?c+=n.x:c-=n.x),t[d]=c}}catch(t){e={error:t}}finally{try{l&&!l.done&&(i=s.return)&&i.call(s)}finally{if(e)throw e.error}}},r.prototype.maybeRestoreFocus=function(){var t=this.adapter.isFocused(),e=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(t||e)&&this.adapter.restoreFocus()},r.prototype.hasBit=function(t,e){return Boolean(t&e)},r.prototype.setBit=function(t,e){return t|e},r.prototype.unsetBit=function(t,e){return t^e},r.prototype.isFinite=function(t){return"number"==typeof t&&isFinite(t)},r}(re);const hr={TOP_LEFT:ar.TOP_LEFT,TOP_RIGHT:ar.TOP_RIGHT,BOTTOM_LEFT:ar.BOTTOM_LEFT,BOTTOM_RIGHT:ar.BOTTOM_RIGHT,TOP_START:ar.TOP_START,TOP_END:ar.TOP_END,BOTTOM_START:ar.BOTTOM_START,BOTTOM_END:ar.BOTTOM_END};class ur extends me{constructor(){super(...arguments),this.mdcFoundationClass=cr,this.absolute=!1,this.fullwidth=!1,this.fixed=!1,this.x=null,this.y=null,this.quick=!1,this.open=!1,this.bitwiseCorner=ar.TOP_START,this.previousMenuCorner=null,this.menuCorner="START",this.corner="TOP_START",this.styleTop="",this.styleLeft="",this.styleRight="",this.styleBottom="",this.styleMaxHeight="",this.styleTransformOrigin="",this.anchor=null,this.previouslyFocused=null,this.previousAnchor=null,this.onBodyClickBound=()=>{}}render(){const t={"mdc-menu-surface--fixed":this.fixed,"mdc-menu-surface--fullwidth":this.fullwidth},e={top:this.styleTop,left:this.styleLeft,right:this.styleRight,bottom:this.styleBottom,"max-height":this.styleMaxHeight,"transform-origin":this.styleTransformOrigin};return Z`
      <div
          class="mdc-menu-surface ${ye(t)}"
          style="${Ge(e)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`}createAdapter(){return Object.assign(Object.assign({},le(this.mdcRoot)),{hasAnchor:()=>!!this.anchor,notifyClose:()=>{const t=new CustomEvent("closed",{bubbles:!0,composed:!0});this.open=!1,this.mdcRoot.dispatchEvent(t)},notifyOpen:()=>{const t=new CustomEvent("opened",{bubbles:!0,composed:!0});this.open=!0,this.mdcRoot.dispatchEvent(t)},isElementInContainer:()=>!1,isRtl:()=>!!this.mdcRoot&&"rtl"===getComputedStyle(this.mdcRoot).direction,setTransformOrigin:t=>{this.mdcRoot&&(this.styleTransformOrigin=t)},isFocused:()=>fe(this),saveFocus:()=>{const t=pe(),e=t.length;e||(this.previouslyFocused=null),this.previouslyFocused=t[e-1]},restoreFocus:()=>{this.previouslyFocused&&"focus"in this.previouslyFocused&&this.previouslyFocused.focus()},getInnerDimensions:()=>{const t=this.mdcRoot;return t?{width:t.offsetWidth,height:t.offsetHeight}:{width:0,height:0}},getAnchorDimensions:()=>{const t=this.anchor;return t?t.getBoundingClientRect():null},getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:t=>{this.mdcRoot&&(this.styleLeft="left"in t?t.left+"px":"",this.styleRight="right"in t?t.right+"px":"",this.styleTop="top"in t?t.top+"px":"",this.styleBottom="bottom"in t?t.bottom+"px":"")},setMaxHeight:async t=>{this.mdcRoot&&(this.styleMaxHeight=t,await this.updateComplete,this.styleMaxHeight=`var(--mdc-menu-max-height, ${t})`)}})}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onBodyClick(t){-1===t.composedPath().indexOf(this)&&this.close()}registerBodyClick(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound,{passive:!0,capture:!0})}deregisterBodyClick(){document.body.removeEventListener("click",this.onBodyClickBound,{capture:!0})}close(){this.open=!1}show(){this.open=!0}}r([wt(".mdc-menu-surface")],ur.prototype,"mdcRoot",void 0),r([wt("slot")],ur.prototype,"slotElement",void 0),r([yt({type:Boolean}),ge((function(t){this.mdcFoundation&&!this.fixed&&this.mdcFoundation.setIsHoisted(t)}))],ur.prototype,"absolute",void 0),r([yt({type:Boolean})],ur.prototype,"fullwidth",void 0),r([yt({type:Boolean}),ge((function(t){this.mdcFoundation&&!this.absolute&&this.mdcFoundation.setIsHoisted(t)}))],ur.prototype,"fixed",void 0),r([yt({type:Number}),ge((function(t){this.mdcFoundation&&null!==this.y&&null!==t&&(this.mdcFoundation.setAbsolutePosition(t,this.y),this.mdcFoundation.setAnchorMargin({left:t,top:this.y,right:-t,bottom:this.y}))}))],ur.prototype,"x",void 0),r([yt({type:Number}),ge((function(t){this.mdcFoundation&&null!==this.x&&null!==t&&(this.mdcFoundation.setAbsolutePosition(this.x,t),this.mdcFoundation.setAnchorMargin({left:this.x,top:t,right:-this.x,bottom:t}))}))],ur.prototype,"y",void 0),r([yt({type:Boolean}),ge((function(t){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(t)}))],ur.prototype,"quick",void 0),r([yt({type:Boolean,reflect:!0}),ge((function(t,e){this.mdcFoundation&&(t?this.mdcFoundation.open():void 0!==e&&this.mdcFoundation.close())}))],ur.prototype,"open",void 0),r([_t(),ge((function(t){this.mdcFoundation&&this.mdcFoundation.setAnchorCorner(t)}))],ur.prototype,"bitwiseCorner",void 0),r([yt({type:String}),ge((function(t){if(this.mdcFoundation){const e="START"===t||"END"===t,i=null===this.previousMenuCorner,r=!i&&t!==this.previousMenuCorner,n=i&&"END"===t;e&&(r||n)&&(this.bitwiseCorner=this.bitwiseCorner^or.RIGHT,this.mdcFoundation.flipCornerHorizontally(),this.previousMenuCorner=t)}}))],ur.prototype,"menuCorner",void 0),r([yt({type:String}),ge((function(t){if(this.mdcFoundation&&t){let e=hr[t];"END"===this.menuCorner&&(e^=or.RIGHT),this.bitwiseCorner=e}}))],ur.prototype,"corner",void 0),r([_t()],ur.prototype,"styleTop",void 0),r([_t()],ur.prototype,"styleLeft",void 0),r([_t()],ur.prototype,"styleRight",void 0),r([_t()],ur.prototype,"styleBottom",void 0),r([_t()],ur.prototype,"styleMaxHeight",void 0),r([_t()],ur.prototype,"styleTransformOrigin",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const pr=Ct`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px))}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let fr=class extends ur{};fr.styles=pr,fr=r([bt("mwc-menu-surface")],fr);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var mr,gr={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},br={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list",SELECTED_EVENT:"MDCMenu:selected"},vr={FOCUS_ROOT_INDEX:-1};!function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"}(mr||(mr={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var yr=function(t){function r(e){var n=t.call(this,i(i({},r.defaultAdapter),e))||this;return n.closeAnimationEndTimerId_=0,n.defaultFocusState_=mr.LIST_ROOT,n}return e(r,t),Object.defineProperty(r,"cssClasses",{get:function(){return gr},enumerable:!0,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return br},enumerable:!0,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return vr},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!0,configurable:!0}),r.prototype.destroy=function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter.closeSurface()},r.prototype.handleKeydown=function(t){var e=t.key,i=t.keyCode;("Tab"===e||9===i)&&this.adapter.closeSurface(!0)},r.prototype.handleItemAction=function(t){var e=this,i=this.adapter.getElementIndex(t);i<0||(this.adapter.notifySelected({index:i}),this.adapter.closeSurface(),this.closeAnimationEndTimerId_=setTimeout((function(){var i=e.adapter.getElementIndex(t);i>=0&&e.adapter.isSelectableItemAtIndex(i)&&e.setSelectedIndex(i)}),cr.numbers.TRANSITION_CLOSE_DURATION))},r.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState_){case mr.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case mr.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case mr.NONE:break;default:this.adapter.focusListRoot()}},r.prototype.setDefaultFocusState=function(t){this.defaultFocusState_=t},r.prototype.setSelectedIndex=function(t){if(this.validatedIndex_(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var e=this.adapter.getSelectedSiblingOfItemAtIndex(t);e>=0&&(this.adapter.removeAttributeFromElementAtIndex(e,br.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(e,gr.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,gr.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,br.ARIA_CHECKED_ATTR,"true")},r.prototype.setEnabled=function(t,e){this.validatedIndex_(t),e?(this.adapter.removeClassFromElementAtIndex(t,Gi),this.adapter.addAttributeToElementAtIndex(t,br.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,Gi),this.adapter.addAttributeToElementAtIndex(t,br.ARIA_DISABLED_ATTR,"true"))},r.prototype.validatedIndex_=function(t){var e=this.adapter.getMenuItemCount();if(!(t>=0&&t<e))throw new Error("MDCMenuFoundation: No list item at specified index.")},r}(re);class _r extends me{constructor(){super(...arguments),this.mdcFoundationClass=yr,this.listElement_=null,this.anchor=null,this.open=!1,this.quick=!1,this.wrapFocus=!1,this.innerRole="menu",this.corner="TOP_START",this.x=null,this.y=null,this.absolute=!1,this.multi=!1,this.activatable=!1,this.fixed=!1,this.forceGroupSelection=!1,this.fullwidth=!1,this.menuCorner="START",this.defaultFocus="LIST_ROOT",this._listUpdateComplete=null}get listElement(){return this.listElement_||(this.listElement_=this.renderRoot.querySelector("mwc-list")),this.listElement_}get items(){const t=this.listElement;return t?t.items:[]}get index(){const t=this.listElement;return t?t.index:-1}get selected(){const t=this.listElement;return t?t.selected:null}render(){const t="menu"===this.innerRole?"menuitem":"option";return Z`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          .menuCorner=${this.menuCorner}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-list"
          .itemRoles=${t}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`}createAdapter(){return{addClassToElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const r=i.items[t];r&&("mdc-menu-item--selected"===e?this.forceGroupSelection&&!r.selected&&i.toggle(t,!0):r.classList.add(e))},removeClassFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const r=i.items[t];r&&("mdc-menu-item--selected"===e?r.selected&&i.toggle(t,!1):r.classList.remove(e))},addAttributeToElementAtIndex:(t,e,i)=>{const r=this.listElement;if(!r)return;const n=r.items[t];n&&n.setAttribute(e,i)},removeAttributeFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const r=i.items[t];r&&r.removeAttribute(e)},elementContainsClass:(t,e)=>t.classList.contains(e),closeSurface:()=>{this.open=!1},getElementIndex:t=>{const e=this.listElement;return e?e.items.indexOf(t):-1},notifySelected:()=>{},getMenuItemCount:()=>{const t=this.listElement;return t?t.items.length:0},focusItemAtIndex:t=>{const e=this.listElement;if(!e)return;const i=e.items[t];i&&i.focus()},focusListRoot:()=>{this.listElement&&this.listElement.focus()},getSelectedSiblingOfItemAtIndex:t=>{const e=this.listElement;if(!e)return-1;const i=e.items[t];if(!i||!i.group)return-1;for(let r=0;r<e.items.length;r++){if(r===t)continue;const n=e.items[r];if(n.selected&&n.group===i.group)return r}return-1},isSelectableItemAtIndex:t=>{const e=this.listElement;if(!e)return!1;const i=e.items[t];return!!i&&i.hasAttribute("group")}}}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onAction(t){const e=this.listElement;if(this.mdcFoundation&&e){const i=t.detail.index,r=e.items[i];r&&this.mdcFoundation.handleItemAction(r)}}onOpened(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}onClosed(){this.open=!1}async _getUpdateComplete(){await this._listUpdateComplete,await super._getUpdateComplete()}async firstUpdated(){super.firstUpdated();const t=this.listElement;t&&(this._listUpdateComplete=t.updateComplete,await this._listUpdateComplete)}select(t){const e=this.listElement;e&&e.select(t)}close(){this.open=!1}show(){this.open=!0}getFocusedItemIndex(){const t=this.listElement;return t?t.getFocusedItemIndex():-1}focusItemAtIndex(t){const e=this.listElement;e&&e.focusItemAtIndex(t)}layout(t=!0){const e=this.listElement;e&&e.layout(t)}}r([wt(".mdc-menu")],_r.prototype,"mdcRoot",void 0),r([wt("slot")],_r.prototype,"slotElement",void 0),r([yt({type:Object})],_r.prototype,"anchor",void 0),r([yt({type:Boolean,reflect:!0})],_r.prototype,"open",void 0),r([yt({type:Boolean})],_r.prototype,"quick",void 0),r([yt({type:Boolean})],_r.prototype,"wrapFocus",void 0),r([yt({type:String})],_r.prototype,"innerRole",void 0),r([yt({type:String})],_r.prototype,"corner",void 0),r([yt({type:Number})],_r.prototype,"x",void 0),r([yt({type:Number})],_r.prototype,"y",void 0),r([yt({type:Boolean})],_r.prototype,"absolute",void 0),r([yt({type:Boolean})],_r.prototype,"multi",void 0),r([yt({type:Boolean})],_r.prototype,"activatable",void 0),r([yt({type:Boolean})],_r.prototype,"fixed",void 0),r([yt({type:Boolean})],_r.prototype,"forceGroupSelection",void 0),r([yt({type:Boolean})],_r.prototype,"fullwidth",void 0),r([yt({type:String})],_r.prototype,"menuCorner",void 0),r([yt({type:String}),ge((function(t){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(mr[t])}))],_r.prototype,"defaultFocus",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const wr=Ct`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}mwc-list{max-width:var(--mdc-menu-max-width, auto);min-width:var(--mdc-menu-min-width, auto)}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let xr=class extends _r{};xr.styles=wr,xr=r([bt("mwc-menu")],xr);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Mr={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},kr={NOTCH_ELEMENT_PADDING:8},Sr={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},Er=function(t){function r(e){return t.call(this,i(i({},r.defaultAdapter),e))||this}return e(r,t),Object.defineProperty(r,"strings",{get:function(){return Mr},enumerable:!0,configurable:!0}),Object.defineProperty(r,"cssClasses",{get:function(){return Sr},enumerable:!0,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return kr},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!0,configurable:!0}),r.prototype.notch=function(t){var e=r.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=kr.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(e)},r.prototype.closeNotch=function(){var t=r.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},r}(re);class Ar extends me{constructor(){super(...arguments),this.mdcFoundationClass=Er,this.width=0,this.open=!1,this.lastOpen=this.open}createAdapter(){return{addClass:t=>this.mdcRoot.classList.add(t),removeClass:t=>this.mdcRoot.classList.remove(t),setNotchWidthProperty:t=>this.notchElement.style.setProperty("width",t+"px"),removeNotchWidthProperty:()=>this.notchElement.style.removeProperty("width")}}openOrClose(t,e){this.mdcFoundation&&(t&&void 0!==e?this.mdcFoundation.notch(e):this.mdcFoundation.closeNotch())}render(){this.openOrClose(this.open,this.width);const t=ye({"mdc-notched-outline--notched":this.open});return Z`
      <span class="mdc-notched-outline ${t}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`}}r([wt(".mdc-notched-outline")],Ar.prototype,"mdcRoot",void 0),r([yt({type:Number})],Ar.prototype,"width",void 0),r([yt({type:Boolean,reflect:!0})],Ar.prototype,"open",void 0),r([wt(".mdc-notched-outline__notch")],Ar.prototype,"notchElement",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Tr=Ct`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host[dir=rtl]{text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / .75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;let Ir=class extends Ar{};Ir.styles=Tr,Ir=r([bt("mwc-notched-outline")],Ir);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Cr=["input","button","textarea","select"],Rr=function(t){var e=t.target;if(e){var i=(""+e.tagName).toLowerCase();-1===Cr.indexOf(i)&&t.preventDefault()}};function Or(t,e){for(var i=new Map,r=0;r<t;r++){var n=e(r).trim();if(n){var o=n[0].toLowerCase();i.has(o)||i.set(o,[]),i.get(o).push({text:n.toLowerCase(),index:r})}}return i.forEach((function(t){t.sort((function(t,e){return t.index-e.index}))})),i}function Pr(t,e){var i,r=t.nextChar,n=t.focusItemAtIndex,o=t.sortedIndexByFirstChar,a=t.focusedItemIndex,s=t.skipFocus,l=t.isItemAtIndexDisabled;return clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout((function(){!function(t){t.typeaheadBuffer=""}(e)}),Xi.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+r,-1===(i=1===e.typeaheadBuffer.length?function(t,e,i,r){var n=r.typeaheadBuffer[0],o=t.get(n);if(!o)return-1;if(n===r.currentFirstChar&&o[r.sortedIndexCursor].index===e){r.sortedIndexCursor=(r.sortedIndexCursor+1)%o.length;var a=o[r.sortedIndexCursor].index;if(!i(a))return a}r.currentFirstChar=n;var s,l=-1;for(s=0;s<o.length;s++)if(!i(o[s].index)){l=s;break}for(;s<o.length;s++)if(o[s].index>e&&!i(o[s].index)){l=s;break}if(-1!==l)return r.sortedIndexCursor=l,o[r.sortedIndexCursor].index;return-1}(o,a,l,e):function(t,e,i){var r=i.typeaheadBuffer[0],n=t.get(r);if(!n)return-1;var o=n[i.sortedIndexCursor];if(0===o.text.lastIndexOf(i.typeaheadBuffer,0)&&!e(o.index))return o.index;var a=(i.sortedIndexCursor+1)%n.length,s=-1;for(;a!==i.sortedIndexCursor;){var l=n[a],d=0===l.text.lastIndexOf(i.typeaheadBuffer,0),c=!e(l.index);if(d&&c){s=a;break}a=(a+1)%n.length}if(-1!==s)return i.sortedIndexCursor=s,n[i.sortedIndexCursor].index;return-1}(o,l,e))||s||n(i),i}function Lr(t){return t.typeaheadBuffer.length>0}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class Br extends me{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(t){this.formElement&&this.formElement.setAttribute("aria-label",t)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",(t=>{this.dispatchEvent(new Event("change",t))}))}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Nr={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},$r=function(t){function r(e){var n=t.call(this,i(i({},r.defaultAdapter),e))||this;return n.shakeAnimationEndHandler_=function(){return n.handleShakeAnimationEnd_()},n}return e(r,t),Object.defineProperty(r,"cssClasses",{get:function(){return Nr},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),r.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)},r.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)},r.prototype.getWidth=function(){return this.adapter.getWidth()},r.prototype.shake=function(t){var e=r.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(e):this.adapter.removeClass(e)},r.prototype.float=function(t){var e=r.cssClasses,i=e.LABEL_FLOAT_ABOVE,n=e.LABEL_SHAKE;t?this.adapter.addClass(i):(this.adapter.removeClass(i),this.adapter.removeClass(n))},r.prototype.setRequired=function(t){var e=r.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},r.prototype.handleShakeAnimationEnd_=function(){var t=r.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},r}(re);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const zr=new WeakMap,Fr=m((t=>e=>{if(!zr.get(e)){const i=e.committer.element;i.classList.add("mdc-floating-label");const r=(t=>({addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),getWidth:()=>t.scrollWidth,registerInteractionHandler:(e,i)=>{t.addEventListener(e,i)},deregisterInteractionHandler:(e,i)=>{t.removeEventListener(e,i)}}))(i),n=new $r(r);n.init(),e.setValue(n),zr.set(e,{label:t,foundation:n})}}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var jr={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},Dr=function(t){function r(e){var n=t.call(this,i(i({},r.defaultAdapter),e))||this;return n.transitionEndHandler_=function(t){return n.handleTransitionEnd(t)},n}return e(r,t),Object.defineProperty(r,"cssClasses",{get:function(){return jr},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!0,configurable:!0}),r.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler_)},r.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler_)},r.prototype.activate=function(){this.adapter.removeClass(jr.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(jr.LINE_RIPPLE_ACTIVE)},r.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},r.prototype.deactivate=function(){this.adapter.addClass(jr.LINE_RIPPLE_DEACTIVATING)},r.prototype.handleTransitionEnd=function(t){var e=this.adapter.hasClass(jr.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&e&&(this.adapter.removeClass(jr.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(jr.LINE_RIPPLE_DEACTIVATING))},r}(re);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const qr=new WeakMap,Ur=m((()=>t=>{if(!qr.get(t)){const e=t.committer.element;e.classList.add("mdc-line-ripple");const i=(t=>({addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),hasClass:e=>t.classList.contains(e),setStyle:(e,i)=>t.style.setProperty(e,i),registerEventHandler:(e,i)=>{t.addEventListener(e,i)},deregisterEventHandler:(e,i)=>{t.removeEventListener(e,i)}}))(e),r=new Dr(i);r.init(),t.setValue(r),qr.set(t,r)}}));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Hr={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},Vr={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},Wr={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330},Gr=function(t){function r(e,n){void 0===n&&(n={});var o=t.call(this,i(i({},r.defaultAdapter),e))||this;return o.disabled=!1,o.isMenuOpen=!1,o.useDefaultValidation=!0,o.customValidity=!0,o.lastSelectedIndex=Wr.UNSET_INDEX,o.clickDebounceTimeout=0,o.recentlyClicked=!1,o.leadingIcon=n.leadingIcon,o.helperText=n.helperText,o}return e(r,t),Object.defineProperty(r,"cssClasses",{get:function(){return Hr},enumerable:!0,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return Wr},enumerable:!0,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return Vr},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!0,configurable:!0}),r.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},r.prototype.setSelectedIndex=function(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1),t>=this.adapter.getMenuItemCount()||(t===Wr.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()),this.adapter.setSelectedIndex(t),e&&this.adapter.closeMenu(),i||this.lastSelectedIndex===t||this.handleChange(),this.lastSelectedIndex=t)},r.prototype.setValue=function(t,e){void 0===e&&(e=!1);var i=this.adapter.getMenuItemValues().indexOf(t);this.setSelectedIndex(i,!1,e)},r.prototype.getValue=function(){var t=this.adapter.getSelectedIndex(),e=this.adapter.getMenuItemValues();return t!==Wr.UNSET_INDEX?e[t]:""},r.prototype.getDisabled=function(){return this.disabled},r.prototype.setDisabled=function(t){this.disabled=t,this.disabled?(this.adapter.addClass(Hr.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(Hr.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},r.prototype.openMenu=function(){this.adapter.addClass(Hr.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},r.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},r.prototype.layout=function(){if(this.adapter.hasLabel()){var t=this.getValue().length>0,e=this.adapter.hasClass(Hr.FOCUSED),i=t||e,r=this.adapter.hasClass(Hr.REQUIRED);this.notchOutline(i),this.adapter.floatLabel(i),this.adapter.setLabelRequired(r)}},r.prototype.layoutOptions=function(){var t=this.adapter.getMenuItemValues().indexOf(this.getValue());this.setSelectedIndex(t,!1,!0)},r.prototype.handleMenuOpened=function(){if(0!==this.adapter.getMenuItemValues().length){var t=this.getSelectedIndex(),e=t>=0?t:0;this.adapter.focusMenuItemAtIndex(e)}},r.prototype.handleMenuClosed=function(){this.adapter.removeClass(Hr.ACTIVATED),this.isMenuOpen=!1,this.adapter.setSelectAnchorAttr("aria-expanded","false"),this.adapter.isSelectAnchorFocused()||this.blur()},r.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue()),this.adapter.hasClass(Hr.REQUIRED)&&this.useDefaultValidation&&this.setValid(this.isValid())},r.prototype.handleMenuItemAction=function(t){this.setSelectedIndex(t,!0)},r.prototype.handleFocus=function(){this.adapter.addClass(Hr.FOCUSED),this.layout(),this.adapter.activateBottomLine()},r.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},r.prototype.handleClick=function(t){this.disabled||this.recentlyClicked||(this.setClickDebounceTimeout(),this.isMenuOpen?this.adapter.closeMenu():(this.adapter.setRippleCenter(t),this.openMenu()))},r.prototype.handleKeydown=function(t){if(!this.isMenuOpen&&this.adapter.hasClass(Hr.FOCUSED)){var e=Vi(t)===bi,i=Vi(t)===vi,r=Vi(t)===ki,n=Vi(t)===Ei;if(!i&&t.key&&1===t.key.length||i&&this.adapter.isTypeaheadInProgress()){var o=i?" ":t.key,a=this.adapter.typeaheadMatchItem(o,this.getSelectedIndex());return a>=0&&this.setSelectedIndex(a),void t.preventDefault()}(e||i||r||n)&&(r&&this.getSelectedIndex()>0?this.setSelectedIndex(this.getSelectedIndex()-1):n&&this.getSelectedIndex()<this.adapter.getMenuItemCount()-1&&this.setSelectedIndex(this.getSelectedIndex()+1),this.openMenu(),t.preventDefault())}},r.prototype.notchOutline=function(t){if(this.adapter.hasOutline()){var e=this.adapter.hasClass(Hr.FOCUSED);if(t){var i=Wr.LABEL_SCALE,r=this.adapter.getLabelWidth()*i;this.adapter.notchOutline(r)}else e||this.adapter.closeOutline()}},r.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},r.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},r.prototype.setUseDefaultValidation=function(t){this.useDefaultValidation=t},r.prototype.setValid=function(t){this.useDefaultValidation||(this.customValidity=t),this.adapter.setSelectAnchorAttr("aria-invalid",(!t).toString()),t?(this.adapter.removeClass(Hr.INVALID),this.adapter.removeMenuClass(Hr.MENU_INVALID)):(this.adapter.addClass(Hr.INVALID),this.adapter.addMenuClass(Hr.MENU_INVALID)),this.syncHelperTextValidity(t)},r.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(Hr.REQUIRED)&&!this.adapter.hasClass(Hr.DISABLED)?this.getSelectedIndex()!==Wr.UNSET_INDEX&&(0!==this.getSelectedIndex()||Boolean(this.getValue())):this.customValidity},r.prototype.setRequired=function(t){t?this.adapter.addClass(Hr.REQUIRED):this.adapter.removeClass(Hr.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",t.toString()),this.adapter.setLabelRequired(t)},r.prototype.getRequired=function(){return"true"===this.adapter.getSelectAnchorAttr("aria-required")},r.prototype.init=function(){var t=this.adapter.getAnchorElement();t&&(this.adapter.setMenuAnchorElement(t),this.adapter.setMenuAnchorCorner(ar.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(Hr.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(Hr.INVALID)),this.layout(),this.layoutOptions()},r.prototype.blur=function(){this.adapter.removeClass(Hr.FOCUSED),this.layout(),this.adapter.deactivateBottomLine(),this.adapter.hasClass(Hr.REQUIRED)&&this.useDefaultValidation&&this.setValid(this.isValid())},r.prototype.syncHelperTextValidity=function(t){if(this.helperText){this.helperText.setValidity(t);var e=this.helperText.isVisible(),i=this.helperText.getId();e&&i?this.adapter.setSelectAnchorAttr(Vr.ARIA_DESCRIBEDBY,i):this.adapter.removeSelectAnchorAttr(Vr.ARIA_DESCRIBEDBY)}},r.prototype.setClickDebounceTimeout=function(){var t=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout((function(){t.recentlyClicked=!1}),Wr.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},r}(re);const Kr=(t={})=>{const e={};for(const i in t)e[i]=t[i];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},e)};class Xr extends Br{constructor(){super(...arguments),this.mdcFoundationClass=Gr,this.disabled=!1,this.outlined=!1,this.label="",this.outlineOpen=!1,this.outlineWidth=0,this.value="",this.selectedText="",this.icon="",this.menuOpen=!1,this.helper="",this.validateOnInitialRender=!1,this.validationMessage="",this.required=!1,this.naturalMenuWidth=!1,this.isUiValid=!0,this.typeaheadState={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""},this.sortedIndexByFirstChar=new Map,this.menuElement_=null,this.listeners=[],this.onBodyClickBound=()=>{},this._menuUpdateComplete=null,this.renderReady=!1,this.valueSetDirectly=!1,this.validityTransform=null,this._validity=Kr()}get items(){return this.menuElement_||(this.menuElement_=this.menuElement),this.menuElement_?this.menuElement_.items:[]}get selected(){const t=this.menuElement;return t?t.selected:null}get index(){const t=this.menuElement;return t?t.index:-1}get shouldRenderHelperText(){return!!this.helper||!!this.validationMessage}get validity(){return this._checkValidity(this.value),this._validity}render(){const t={"mdc-select--disabled":this.disabled,"mdc-select--no-label":!this.label,"mdc-select--filled":!this.outlined,"mdc-select--outlined":this.outlined,"mdc-select--with-leading-icon":!!this.icon,"mdc-select--required":this.required,"mdc-select--invalid":!this.isUiValid},e={"mdc-select__menu--invalid":!this.isUiValid},i=this.shouldRenderHelperText?"helper-text":void 0;return Z`
      <div
          class="mdc-select ${ye(t)}">
        <input
            class="formElement"
            .value=${this.value}
            hidden
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby="label"
            aria-required=${this.required}
            aria-describedby=${fi(i)}
            @click=${this.onClick}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            @keydown=${this.onKeydown}>
          ${this.renderRipple()}
          ${this.outlined?this.renderOutline():this.renderLabel()}
          ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text">${this.selectedText}</span>
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
                focusable="false">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${this.renderLineRipple()}
        </div>
        <mwc-menu
            innerRole="listbox"
            wrapFocus
            class="mdc-select__menu mdc-menu mdc-menu-surface ${ye(e)}"
            activatable
            .fullwidth=${!this.naturalMenuWidth}
            .open=${this.menuOpen}
            .anchor=${this.anchorElement}
            @selected=${this.onSelected}
            @opened=${this.onOpened}
            @closed=${this.onClosed}
            @items-updated=${this.onItemsUpdated}
            @keydown=${this.handleTypeahead}>
          <slot></slot>
        </mwc-menu>
      </div>
      ${this.renderHelperText()}`}renderRipple(){return this.outlined?_:Z`
      <span class="mdc-select__ripple"></span>
    `}renderOutline(){return this.outlined?Z`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`:_}renderLabel(){return this.label?Z`
      <span
          .floatingLabelFoundation=${Fr(this.label)}
          id="label">${this.label}</span>
    `:_}renderLeadingIcon(){return this.icon?Z`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>`:_}renderLineRipple(){return this.outlined?_:Z`
      <span .lineRippleFoundation=${Ur()}></span>
    `}renderHelperText(){if(!this.shouldRenderHelperText)return _;const t=this.validationMessage&&!this.isUiValid;return Z`
        <p
          class="mdc-select-helper-text ${ye({"mdc-select-helper-text--validation-msg":t})}"
          id="helper-text">${t?this.validationMessage:this.helper}</p>`}createAdapter(){return Object.assign(Object.assign({},le(this.mdcRoot)),{activateBottomLine:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateBottomLine:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},hasLabel:()=>!!this.label,floatLabel:t=>{this.labelElement&&this.labelElement.floatingLabelFoundation.float(t)},getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,setLabelRequired:t=>{this.labelElement&&this.labelElement.floatingLabelFoundation.setRequired(t)},hasOutline:()=>this.outlined,notchOutline:t=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=t,this.outlineOpen=!0)},closeOutline:()=>{this.outlineElement&&(this.outlineOpen=!1)},setRippleCenter:t=>{if(this.lineRippleElement){this.lineRippleElement.lineRippleFoundation.setRippleCenter(t)}},notifyChange:async t=>{if(!this.valueSetDirectly&&t===this.value)return;this.valueSetDirectly=!1,this.value=t,await this.updateComplete;const e=new Event("change",{bubbles:!0});this.dispatchEvent(e)},setSelectedText:t=>this.selectedText=t,isSelectAnchorFocused:()=>{const t=this.anchorElement;if(!t)return!1;return t.getRootNode().activeElement===t},getSelectAnchorAttr:t=>{const e=this.anchorElement;return e?e.getAttribute(t):null},setSelectAnchorAttr:(t,e)=>{const i=this.anchorElement;i&&i.setAttribute(t,e)},removeSelectAnchorAttr:t=>{const e=this.anchorElement;e&&e.removeAttribute(t)},openMenu:()=>{this.menuOpen=!0},closeMenu:()=>{this.menuOpen=!1},addMenuClass:()=>{},removeMenuClass:()=>{},getAnchorElement:()=>this.anchorElement,setMenuAnchorElement:()=>{},setMenuAnchorCorner:()=>{const t=this.menuElement;t&&(t.corner="BOTTOM_START")},setMenuWrapFocus:t=>{const e=this.menuElement;e&&(e.wrapFocus=t)},focusMenuItemAtIndex:t=>{const e=this.menuElement;if(!e)return;const i=e.items[t];i&&i.focus()},getMenuItemCount:()=>{const t=this.menuElement;return t?t.items.length:0},getMenuItemValues:()=>{const t=this.menuElement;if(!t)return[];return t.items.map((t=>t.value))},getMenuItemTextAtIndex:t=>{const e=this.menuElement;if(!e)return"";const i=e.items[t];return i?i.text:""},getSelectedIndex:()=>this.index,setSelectedIndex:()=>{},isTypeaheadInProgress:()=>Lr(this.typeaheadState),typeaheadMatchItem:(t,e)=>{if(!this.menuElement)return-1;const i=Pr({focusItemAtIndex:t=>{this.menuElement.focusItemAtIndex(t)},focusedItemIndex:e||this.menuElement.getFocusedItemIndex(),nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:!1,isItemAtIndexDisabled:t=>this.items[t].disabled},this.typeaheadState);return-1!==i&&this.select(i),i}})}checkValidity(){const t=this._checkValidity(this.value);if(!t){const t=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(t)}return t}reportValidity(){const t=this.checkValidity();return this.isUiValid=t,t}_checkValidity(t){const e=this.formElement.validity;let i=Kr(e);if(this.validityTransform){const e=this.validityTransform(t,i);i=Object.assign(Object.assign({},i),e)}return this._validity=i,this._validity.valid}setCustomValidity(t){this.validationMessage=t,this.formElement.setCustomValidity(t)}async _getUpdateComplete(){await this._menuUpdateComplete,await super._getUpdateComplete()}async firstUpdated(){const t=this.menuElement;if(t&&(this._menuUpdateComplete=t.updateComplete,await this._menuUpdateComplete),super.firstUpdated(),this.mdcFoundation.isValid=()=>!0,this.mdcFoundation.setValid=()=>{},this.mdcFoundation.setDisabled(this.disabled),this.validateOnInitialRender&&this.reportValidity(),!this.selected){!this.items.length&&this.slotElement&&this.slotElement.assignedNodes({flatten:!0}).length&&(await new Promise((t=>requestAnimationFrame(t))),await this.layout());const t=this.items.length&&""===this.items[0].value;if(!this.value&&t)return void this.select(0);this.selectByValue(this.value)}this.sortedIndexByFirstChar=Or(this.items.length,(t=>this.items[t].text)),this.renderReady=!0}onItemsUpdated(){this.sortedIndexByFirstChar=Or(this.items.length,(t=>this.items[t].text))}select(t){const e=this.menuElement;e&&e.select(t)}selectByValue(t){let e=-1;for(let i=0;i<this.items.length;i++){if(this.items[i].value===t){e=i;break}}this.valueSetDirectly=!0,this.select(e),this.mdcFoundation.handleChange()}disconnectedCallback(){super.disconnectedCallback();for(const t of this.listeners)t.target.removeEventListener(t.name,t.cb)}focus(){const t=new CustomEvent("focus"),e=this.anchorElement;e&&(e.dispatchEvent(t),e.focus())}blur(){const t=new CustomEvent("blur"),e=this.anchorElement;e&&(e.dispatchEvent(t),e.blur())}onFocus(){this.mdcFoundation&&this.mdcFoundation.handleFocus()}onBlur(){this.mdcFoundation&&this.mdcFoundation.handleBlur();const t=this.menuElement;t&&!t.open&&this.reportValidity()}onClick(t){if(this.mdcFoundation){this.focus();const e=t.target.getBoundingClientRect();let i=0;i="touches"in t?t.touches[0].clientX:t.clientX;const r=i-e.left;this.mdcFoundation.handleClick(r)}}onKeydown(t){const e=Vi(t)===ki,i=Vi(t)===Ei;if(i||e){const r=e&&this.index>0,n=i&&this.index<this.items.length-1;return r?this.select(this.index-1):n&&this.select(this.index+1),t.preventDefault(),void this.mdcFoundation.openMenu()}this.mdcFoundation.handleKeydown(t)}handleTypeahead(t){if(!this.menuElement)return;const e=this.menuElement.getFocusedItemIndex(),i=se(t.target)?t.target:null;!function(t,e){var i=t.event,r=t.isTargetListItem,n=t.focusedItemIndex,o=t.focusItemAtIndex,a=t.sortedIndexByFirstChar,s=t.isItemAtIndexDisabled,l="ArrowLeft"===Vi(i),d="ArrowUp"===Vi(i),c="ArrowRight"===Vi(i),h="ArrowDown"===Vi(i),u="Home"===Vi(i),p="End"===Vi(i),f="Enter"===Vi(i),m="Spacebar"===Vi(i);l||d||c||h||u||p||f||(m||1!==i.key.length?m&&(r&&Rr(i),r&&Lr(e)&&Pr({focusItemAtIndex:o,focusedItemIndex:n,nextChar:" ",sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:s},e)):(Rr(i),Pr({focusItemAtIndex:o,focusedItemIndex:n,nextChar:i.key.toLowerCase(),sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:s},e)))}({event:t,focusItemAtIndex:t=>{this.menuElement.focusItemAtIndex(t)},focusedItemIndex:e,isTargetListItem:!!i&&i.hasAttribute("mwc-list-item"),sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:t=>this.items[t].disabled},this.typeaheadState)}async onSelected(t){this.mdcFoundation||await this.updateComplete,this.mdcFoundation.handleMenuItemAction(t.detail.index);const e=this.items[t.detail.index];e&&(this.value=e.value)}onOpened(){this.mdcFoundation&&(this.menuOpen=!0,this.mdcFoundation.handleMenuOpened())}onClosed(){this.mdcFoundation&&(this.menuOpen=!1,this.mdcFoundation.handleMenuClosed())}async layout(t=!0){this.mdcFoundation&&this.mdcFoundation.layout(),await this.updateComplete;const e=this.menuElement;e&&e.layout(t);const i=this.labelElement;if(!i)return void(this.outlineOpen=!1);const r=!!this.label&&!!this.value;if(i.floatingLabelFoundation.float(r),!this.outlined)return;this.outlineOpen=r,await this.updateComplete;const n=i.floatingLabelFoundation.getWidth();this.outlineOpen&&(this.outlineWidth=n)}}r([wt(".mdc-select")],Xr.prototype,"mdcRoot",void 0),r([wt(".formElement")],Xr.prototype,"formElement",void 0),r([wt("slot")],Xr.prototype,"slotElement",void 0),r([wt("select")],Xr.prototype,"nativeSelectElement",void 0),r([wt("input")],Xr.prototype,"nativeInputElement",void 0),r([wt(".mdc-line-ripple")],Xr.prototype,"lineRippleElement",void 0),r([wt(".mdc-floating-label")],Xr.prototype,"labelElement",void 0),r([wt("mwc-notched-outline")],Xr.prototype,"outlineElement",void 0),r([wt(".mdc-menu")],Xr.prototype,"menuElement",void 0),r([wt(".mdc-select__anchor")],Xr.prototype,"anchorElement",void 0),r([yt({type:Boolean,attribute:"disabled",reflect:!0}),ge((function(t){this.renderReady&&this.mdcFoundation.setDisabled(t)}))],Xr.prototype,"disabled",void 0),r([yt({type:Boolean}),ge((function(t,e){void 0!==e&&this.outlined!==e&&this.layout(!1)}))],Xr.prototype,"outlined",void 0),r([yt({type:String}),ge((function(t,e){void 0!==e&&this.label!==e&&this.layout(!1)}))],Xr.prototype,"label",void 0),r([yt({type:Boolean})],Xr.prototype,"outlineOpen",void 0),r([yt({type:Number})],Xr.prototype,"outlineWidth",void 0),r([yt({type:String}),ge((function(t){if(this.mdcFoundation){const e=null===this.selected&&!!t,i=this.selected&&this.selected.value!==t;(e||i)&&this.selectByValue(t),this.reportValidity()}}))],Xr.prototype,"value",void 0),r([yt({type:String})],Xr.prototype,"selectedText",void 0),r([yt({type:String})],Xr.prototype,"icon",void 0),r([yt({type:Boolean})],Xr.prototype,"menuOpen",void 0),r([yt({type:String})],Xr.prototype,"helper",void 0),r([yt({type:Boolean})],Xr.prototype,"validateOnInitialRender",void 0),r([yt({type:String})],Xr.prototype,"validationMessage",void 0),r([yt({type:Boolean})],Xr.prototype,"required",void 0),r([yt({type:Boolean})],Xr.prototype,"naturalMenuWidth",void 0),r([yt({type:Boolean})],Xr.prototype,"isUiValid",void 0),r([St({capture:!0})],Xr.prototype,"handleTypeahead",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Zr=Ct`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-list-item,.mdc-select .mdc-select__menu .mdc-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-list-item__graphic,.mdc-select .mdc-select__menu .mdc-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-list .mdc-list-item--selected,.mdc-select__menu .mdc-list .mdc-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list .mdc-list-item--selected .mdc-list-item__graphic,.mdc-select__menu .mdc-list .mdc-list-item--activated .mdc-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-list .mdc-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-list .mdc-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-list .mdc-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc(48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px))}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38));--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06))}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let Yr=class extends Xr{};Yr.styles=Zr,Yr=r([bt("mwc-select")],Yr);class Jr extends Ot{constructor(){super(...arguments),this.indeterminate=!1,this.progress=0,this.density=0,this.closed=!1,this.ariaLabel=""}open(){this.closed=!1}close(){this.closed=!0}render(){const t={"mdc-circular-progress--closed":this.closed,"mdc-circular-progress--indeterminate":this.indeterminate},e=48+4*this.density,i={width:e+"px",height:e+"px"};return Z`
      <div
        class="mdc-circular-progress ${ye(t)}"
        style="${Ge(i)}"
        role="progressbar"
        aria-label="${this.ariaLabel}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="${fi(this.indeterminate?void 0:this.progress)}">
        ${this.renderDeterminateContainer()}
        ${this.renderIndeterminateContainer()}
      </div>`}renderDeterminateContainer(){const t=48+4*this.density,e=t/2,i=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,r=6.2831852*i,n=(1-this.progress)*r,o=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return Z`
      <div class="mdc-circular-progress__determinate-container">
        <svg class="mdc-circular-progress__determinate-circle-graphic"
             viewBox="0 0 ${t} ${t}">
          <circle class="mdc-circular-progress__determinate-track"
                  cx="${e}" cy="${e}" r="${i}"
                  stroke-width="${o}"></circle>
          <circle class="mdc-circular-progress__determinate-circle"
                  cx="${e}" cy="${e}" r="${i}"
                  stroke-dasharray="${6.2831852*i}"
                  stroke-dashoffset="${n}"
                  stroke-width="${o}"></circle>
        </svg>
      </div>`}renderIndeterminateContainer(){return Z`
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
      </div>`}renderIndeterminateSpinnerLayer(){const t=48+4*this.density,e=t/2,i=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,r=6.2831852*i,n=.5*r,o=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return Z`
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${t} ${t}">
            <circle cx="${e}" cy="${e}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${n}"
                    stroke-width="${o}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__gap-patch">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${t} ${t}">
            <circle cx="${e}" cy="${e}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${n}"
                    stroke-width="${.8*o}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${t} ${t}">
            <circle cx="${e}" cy="${e}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${n}"
                    stroke-width="${o}"></circle>
          </svg>
        </div>`}update(t){super.update(t),t.has("progress")&&(this.progress>1&&(this.progress=1),this.progress<0&&(this.progress=0))}}r([yt({type:Boolean,reflect:!0})],Jr.prototype,"indeterminate",void 0),r([yt({type:Number,reflect:!0})],Jr.prototype,"progress",void 0),r([yt({type:Number,reflect:!0})],Jr.prototype,"density",void 0),r([yt({type:Boolean,reflect:!0})],Jr.prototype,"closed",void 0),r([yt({type:String})],Jr.prototype,"ariaLabel",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Qr=Ct`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}`;let tn=class extends Jr{};function en(t,e,i,r){void 0===r&&(r=!1);for(var n,o,a=0,s="",l=e;o=l.exec(t);)n=t.substring(a,o.index),a=l.lastIndex,s+=n,s+=i&&"function"==typeof i?i(t,o):i;return s+=t.substring(a),l.test(s)&&!0===r?en(s,new RegExp(l),i,!0):s}function rn(t){var e=new RegExp("^[ \t]*(.+?) *[=:] *(?:\"((?!\")[\\w\\W]+?)\"|'{3,}((?!'{3,})[\\w\\W]+?)'{3,}|(\\[[\\w\\W]+?(?:(?: *])+ *$\\n*)+)|(\\{[\\w\\W]+?(?:(?: *})+ *$\\n*)+)|(.+) *)|^(.+)$","gm"),i={};return en(t,e,(function(t,e){var r,n;if(e[1]){if("#"===e[1].charAt(0))return;return r='"'===e[1].charAt(0)&&'"'===e[1].charAt(e[1].length-1)?e[1].slice(1,-1):e[1],(e[2]||e[3])&&(n=e[2]||e[3].replace(/^(\s*)(__>>\[<<__)/gm,"$1[")),(e[4]||e[5])&&(n=JSON.parse(""+(e[4]||e[5]))),e[6]&&(e[6]=e[6].trim(),n=+e[6]==+e[6]?Number(e[6]):"true"===e[6]||"false"===e[6]?"true"===e[6]:"inf"===e[6]||"+inf"===e[6]?1/0:"-inf"===e[6]?-1/0:parseInt(e[6],16).toString(16)===e[6].toLowerCase()?parseInt(e[6],16):parseInt(e[6],8).toString(8)===e[6].toLowerCase()?parseInt(e[6],8):parseInt(e[6],2).toString(2)===e[6].toLowerCase()?parseInt(e[6],2):e[6]),i[r]=n,""}if(e[7])return""})),i}function nn(t,e,i,r){r=!!r,e.split&&(e=e.split("."));for(var n,o=0,a=e.length,s=t;o<a;++o)e[o]=e[o].trim(),e[o]='"'===e[o].substr(0,1)&&'"'===e[o].substr(-1)?e[o].slice(1,-1):e[o],s instanceof Array?(n=s[s.length-1],o--):n=s[e[o]],o===a-1?n instanceof Array?s[e[o]].push(i):s[e[o]]=r?[i]:i:s=n instanceof Array?n:s[e[o]]=null==n?{}:n}tn.styles=Qr,tn=r([bt("mwc-circular-progress")],tn);var on=function(t,e){return e!=e?"__>>NaN<<__":e===1/0?"__>>Inf<<__":e===-1/0?"__>>-Inf<<__":e},an=function(t,e){return"__>>NaN<<__"===e?NaN:"__>>Inf<<__"===e?1/0:"__>>-Inf<<__"===e?-1/0:e};function sn(t,e){t.tabIndex=e?-1:t.tabIndex<0?0:t.tabIndex}function ln(t){return It(t)}function dn(t,e){for(const i in e){const r=!0===e[i]?"":e[i];r||""===r||0===r?t.getAttribute(i)!==r&&t.setAttribute(i,r.toString()):t.hasAttribute(i)&&t.removeAttribute(i)}}function cn(t,e){if(null==t.shadowRoot)return[];const i=t.shadowRoot.host.getRootNode(),r=i.querySelectorAll(e);return r.length>0?Array.from(r):cn(i,e)}function hn(t=document.activeElement){return null!=t&&null!=t.shadowRoot&&null!=t.shadowRoot.activeElement?hn(t.shadowRoot.activeElement):t}function un(t){return Array.from(t.querySelector("slot").assignedNodes()).filter((t=>"#text"!==t.nodeName))}function pn(t){for(;t.firstChild;)t.firstChild.remove()}function fn(t,e){return null!=e?"none"===e.display:null===t.offsetParent}function mn(t,e,i=document.documentElement){i.style.setProperty(t,e)}const gn=new Map;function bn(t,e,i){const r=gn.get(i);null!=r&&window.clearTimeout(r),gn.set(i,window.setTimeout((()=>{t(),gn.delete(i)}),e))}function vn(t,e,i,r,n){const o=Array.isArray(e)?e:[e],a=Math.random().toString(),s=t=>null==n?i(t):bn((()=>i(t)),n,a);return o.forEach((e=>t.addEventListener(e,s,r))),()=>o.forEach((e=>t.removeEventListener(e,s,r)))}function yn(t){t.forEach((t=>t())),t.length=0}function _n(t){t.preventDefault(),t.stopPropagation()}var wn,xn;function Mn({anchorOriginX:t,anchorOriginY:e},{left:i,top:r,width:n=0,height:o=0}){switch(t){case wn.CENTER:i+=n/2;break;case wn.RIGHT:i+=n}switch(e){case xn.CENTER:r+=o/2;break;case xn.BOTTOM:r+=o}return{left:i,top:r}}function kn(t,e){const i=function(t){return new WebKitCSSMatrix(t.webkitTransform)}(t);return{x:0===(null==e?t.getPropertyValue("width"):e.width)?0:i.a,y:0===(null==e?t.getPropertyValue("height"):e.height)?0:i.d}}function Sn(t){if("0px"===t.getPropertyValue("width")||"0px"===t.getPropertyValue("height"))return 0;const e=t.getPropertyValue("opacity");return isNaN(+e)?0:Number(e)}function En(t,e,i,r=20,n=0){let o=[];if(n>=r)return o;const a=t=>{const o=t.assignedNodes().filter((t=>1===t.nodeType));return o.length>0?En(o[0].parentElement,e,i,r,n+1):[]},s=Array.from(t.children||[]);for(const t of s)e(t)||(i(t)&&o.push(t),null!=t.shadowRoot?o.push(...En(t.shadowRoot,e,i,r,n+1)):"SLOT"===t.tagName?o.push(...a(t)):o.push(...En(t,e,i,r,n+1)));return o}function An(t){return t.hasAttribute("hidden")||t.hasAttribute("aria-hidden")&&"false"!==t.getAttribute("aria-hidden")||"none"===t.style.display||"0"===t.style.opacity||"hidden"===t.style.visibility||"collapse"===t.style.visibility}function Tn(t){return"-1"!==t.getAttribute("tabindex")&&!An(t)&&!function(t){return t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&"false"!==t.getAttribute("aria-disabled")}(t)&&(t.hasAttribute("tabindex")||(t instanceof HTMLAnchorElement||t instanceof HTMLAreaElement)&&t.hasAttribute("href")||t instanceof HTMLButtonElement||t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLIFrameElement)}!function(t){t.LEFT="left",t.CENTER="center",t.RIGHT="right"}(wn||(wn={})),function(t){t.TOP="top",t.CENTER="center",t.BOTTOM="bottom"}(xn||(xn={}));const In=document.createElement("template");In.innerHTML='\n\t<div id="start"></div>\n\t<div id="backup"></div>\n\t<slot></slot>\n\t<div id="end"></div>\n';class Cn extends HTMLElement{constructor(){super(),this.debounceId=Math.random().toString(),this._focused=!1;const t=this.attachShadow({mode:"open"});t.appendChild(In.content.cloneNode(!0)),this.$backup=t.querySelector("#backup"),this.$start=t.querySelector("#start"),this.$end=t.querySelector("#end"),this.focusLastElement=this.focusLastElement.bind(this),this.focusFirstElement=this.focusFirstElement.bind(this),this.onFocusIn=this.onFocusIn.bind(this),this.onFocusOut=this.onFocusOut.bind(this)}static get observedAttributes(){return["inactive"]}get inactive(){return this.hasAttribute("inactive")}set inactive(t){t?this.setAttribute("inactive",""):this.removeAttribute("inactive")}get focused(){return this._focused}connectedCallback(){this.$start.addEventListener("focus",this.focusLastElement),this.$end.addEventListener("focus",this.focusFirstElement),this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut),this.render()}disconnectedCallback(){this.$start.removeEventListener("focus",this.focusLastElement),this.$end.removeEventListener("focus",this.focusFirstElement),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut)}attributeChangedCallback(){this.render()}focusFirstElement(){this.trapFocus()}focusLastElement(){this.trapFocus(!0)}getFocusableElements(){return En(this,An,Tn)}trapFocus(t){if(this.inactive)return;let e=this.getFocusableElements();e.length>0?(t?e[e.length-1].focus():e[0].focus(),this.$backup.setAttribute("tabindex","-1")):(this.$backup.setAttribute("tabindex","0"),this.$backup.focus())}onFocusIn(){this.updateFocused(!0)}onFocusOut(){this.updateFocused(!1)}updateFocused(t){bn((()=>{this.focused!==t&&(this._focused=t,this.render())}),0,this.debounceId)}render(){this.$start.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.$end.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.focused?this.setAttribute("focused",""):this.removeAttribute("focused")}}window.customElements.define("focus-trap",Cn);let Rn=class extends Ot{constructor(){super(...arguments),this.role="presentation"}render(){return Z``}};function On(t){t.onfinish=null,t.pause()}function Pn(t){for(const e of t)On(e);t.length=0}Rn.styles=[ln(":host{background:var(--backdrop-bg,rgba(0,0,0,.6));position:absolute;top:0;left:0;width:100%;height:100%;outline:none}")],r([yt({type:String,reflect:!0}),n("design:type",String)],Rn.prototype,"role",void 0),Rn=r([bt("wl-backdrop")],Rn);const Ln="ResizeObserver"in window;function Bn(t,e,{debounceMs:i}={}){const r=new ResizeObserver((t=>{t.forEach((({contentRect:t})=>null==i?e(t):bn((()=>e(t)),i,Math.random().toString())))}));return r.observe(t),()=>r.disconnect()}function Nn(t=10){return"_"+Math.random().toString(36).substr(2,t)}const $n="cubic-bezier(0.4, 0, 0.2, 1)",zn="Enter",Fn="ArrowRight",jn="ArrowLeft",Dn="ArrowUp",qn="ArrowDown";const Un=ln("*{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}");var Hn;!function(t){t.DID_SHOW="didShow",t.DID_HIDE="didHide"}(Hn||(Hn={}));const Vn=document.documentElement,Wn=t=>"overlay-"+t;class Gn extends Ot{constructor(){super(...arguments),this.open=!1,this.disableFocusTrap=!1,this.backdrop=!1,this.fixed=!1,this.persistent=!1,this.blockScrolling=!1,this.duration=200,this.scrollContainer=Vn,this.activeInAnimations=[],this.activeOutAnimations=[],this.resolvers=[],this.overlayId=Nn(),this.listeners=[]}get $blockableScrollContainer(){return this.scrollContainer instanceof HTMLElement?this.scrollContainer:Vn}get animationConfig(){return{duration:this.duration,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}trapFocus(){null!=this.$focusTrap&&(this.storeCurrentActiveElement(),this.$focusTrap.focusFirstElement())}storeCurrentActiveElement(){this.activeElementBeforeOpen=hn()}show(t){return this.activeInAnimations.length>0||(this.prepareShowAnimation(t),this.animateIn(),this.open=!0),this.createResolver()}hide(t){this.activeOutAnimations.length>0||(this.prepareHideAnimation(),this.animateOut(t))}updated(t){super.updated(t),t.has("open")&&(this.open?this.removeAttribute("tabindex"):this.setAttribute("tabindex","-1")),this.updateAria()}updateAria(){dn(this,{"aria-hidden":!this.open})}createResolver(){return new Promise((t=>{this.resolvers.push(t)}))}resolve(t){for(const e of this.resolvers)e(t);this.resolvers.length=0}clickAway(){!this.persistent&&this.open&&this.hide()}dispatchOverlayEvent(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,composed:!0,bubbles:!0}))}setConfig(t){Object.assign(this,t)}pauseAnimations(){this.pauseInAnimations(),this.pauseOutAnimations()}pauseInAnimations(){Pn(this.activeInAnimations)}pauseOutAnimations(){Pn(this.activeOutAnimations)}prepareShowAnimation(t){if(this.listeners.push(vn(this.scrollContainer,"scroll",this.updatePosition.bind(this),{passive:!0}),Ln?Bn(this,this.updatePosition.bind(this),{debounceMs:100}):vn(window,"resize",this.updatePosition.bind(this),{passive:!0})),this.pauseAnimations(),null!=t&&this.setConfig(t),this.blockScrolling){const t=this.$blockableScrollContainer;t.style.overflow="hidden",t.classList.add(Wn(this.overlayId))}}prepareHideAnimation(){yn(this.listeners),this.pauseAnimations()}didShow(){this.activeInAnimations.length=0,this.listeners.push(vn(this,"keydown",this.onKeyDown.bind(this))),this.disableFocusTrap||this.trapFocus(),this.dispatchOverlayEvent(Hn.DID_SHOW)}didHide(t){if(this.blockScrolling){const t=this.$blockableScrollContainer,e=t.className.match(new RegExp("overlay","gm"));(null===e||null!=e&&1===e.length)&&(t.style.overflow=""),t.classList.remove(Wn(this.overlayId))}null!=this.activeElementBeforeOpen&&(this.activeElementBeforeOpen.focus(),this.activeElementBeforeOpen=void 0),this.activeOutAnimations.length=0,this.open=!1,this.dispatchOverlayEvent(Hn.DID_HIDE,t)}updatePosition(){}onKeyDown(t){switch(t.code){case"Escape":this.open&&!this.persistent&&(this.hide(),_n(t))}}}Gn.styles=[Un,ln(":host([backdrop]) #backdrop{display:block}#backdrop{display:none;pointer-events:all}")],r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],Gn.prototype,"open",void 0),r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],Gn.prototype,"disableFocusTrap",void 0),r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],Gn.prototype,"backdrop",void 0),r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],Gn.prototype,"fixed",void 0),r([yt({type:Boolean}),n("design:type",Boolean)],Gn.prototype,"persistent",void 0),r([yt({type:Boolean}),n("design:type",Boolean)],Gn.prototype,"blockScrolling",void 0),r([yt({type:Number}),n("design:type",Number)],Gn.prototype,"duration",void 0),r([yt({type:Object}),n("design:type",EventTarget)],Gn.prototype,"scrollContainer",void 0);wn.LEFT,xn.TOP,wn.LEFT,xn.TOP;let Kn=class extends Gn{constructor(){super(...arguments),this.closeOnClick=!1,this.noFallback=!1,this.transformOriginX=wn.LEFT,this.transformOriginY=xn.TOP,this.anchorOriginX=wn.LEFT,this.anchorOriginY=xn.TOP,this.role="menu",this.clickAwayListeners=[],this.anchorOpenEventListeners=[],this.anchorCloseEventListeners=[]}get $focusTrap(){return this.$content}disconnectedCallback(){super.disconnectedCallback(),this.detachClickAwayListeners(),yn(this.anchorOpenEventListeners),yn(this.anchorCloseEventListeners)}updated(t){super.updated(t),t.has("anchorOpenEvents")&&null!=this.anchorOpenEvents&&this.attachEventListenersToAnchor(this.anchorOpenEventListeners,this.anchorOpenEvents,(()=>!this.open&&this.show())),t.has("anchorCloseEvents")&&null!=this.anchorCloseEvents&&this.attachEventListenersToAnchor(this.anchorCloseEventListeners,this.anchorCloseEvents,(()=>this.open&&this.hide()))}showAtPosition(t,e){return this.anchorPosition=t,this.show(e)}getPositionStrategy(){return{transformOriginX:this.transformOriginX,transformOriginY:this.transformOriginY,anchorOriginX:this.anchorOriginX,anchorOriginY:this.anchorOriginY}}didShow(){super.didShow(),this.$focusTrap.focusFirstElement(),this.attachClickAwayListeners()}didHide(t){super.didHide(t),this.anchorPosition=void 0}attachEventListenersToAnchor(t,e,i){yn(t);const r=this.getAnchor();if(null==r)return this.throwNoAnchorError();t.push(vn(r,e,i))}throwNoAnchorError(){throw new Error(`No anchor could be found for the popover. "${this.anchor}" provided as anchor.`)}attachClickAwayListeners(){var t,e;this.clickAwayListeners.push((t=[this.$container],e=this.clickAway.bind(this),vn(window,["mousedown","pointerdown"],(i=>{if(!("composedPath"in i))return;const r=i.composedPath();null==t.find((t=>r.includes(t)))&&e()}),{passive:!0})),vn(this.$container,"click",this.onContainerClick.bind(this)))}detachClickAwayListeners(){yn(this.clickAwayListeners)}animateIn(){let t=!1;const e=()=>{t||(t=!0,this.didShow())},i=this.$backdrop.animate({opacity:[Sn(window.getComputedStyle(this.$backdrop)).toString(),"1"]},this.animationConfig),r=window.getComputedStyle(this.$content),n=kn(r,this.$content.getBoundingClientRect()),o=Sn(r),a=this.$content.animate({transform:[`scale(${n.x}, ${n.y})`,"scale(1)"],opacity:[""+(o>.5?o:0),1]},this.animationConfig);a.onfinish=e,i.onfinish=e,this.activeInAnimations.push(a,i),this.updatePosition()}animateOut(t){let e=!1;const i=()=>{e||(e=!0,this.resolve(t),this.didHide(t))},r=this.$backdrop.animate({opacity:[Sn(window.getComputedStyle(this.$backdrop)).toString(),"0"]},this.animationConfig),n=window.getComputedStyle(this.$content),o=kn(n,this.$content.getBoundingClientRect()),a=Sn(n),s=this.$content.animate({opacity:[a.toString(),0],transform:[`scale(${o.x}, ${o.y})`,"scale(0)"]},this.animationConfig);r.onfinish=i,s.onfinish=i,this.detachClickAwayListeners(),this.activeOutAnimations.push(r,s)}updatePosition(){super.updatePosition(),requestAnimationFrame((()=>{const t=this.getAnchor();let e,i=this.getPositionStrategy(),r=!1,n=null;if(null!=this.anchorPosition)e=this.anchorPosition;else{if(null==t)return this.throwNoAnchorError();n=t.getBoundingClientRect(),e=Mn(i,n)}if(!this.noFallback){const t=function({transformOriginX:t,transformOriginY:e,anchorOriginX:i,anchorOriginY:r},{top:n,left:o},a){const{innerHeight:s,innerWidth:l}=window;switch(e){case xn.TOP:n+a.height>s&&(e=xn.BOTTOM,r=xn.TOP);break;case xn.BOTTOM:}switch(t){case wn.LEFT:o+a.width>l&&(t=wn.RIGHT,i=wn.LEFT)}return{transformOriginY:e,transformOriginX:t,anchorOriginX:i,anchorOriginY:r}}(i,e,this.$container.getBoundingClientRect());a=t,r=(o=i).transformOriginX!==a.transformOriginX||o.transformOriginY!==a.transformOriginY||o.anchorOriginX!==a.anchorOriginX||o.anchorOriginY!==a.anchorOriginY,r&&(i=t,e=Mn(t,n||e))}var o,a;const s=function({transformOriginX:t,transformOriginY:e}){let i=0,r=0;switch(t){case wn.CENTER:i="-50%";break;case wn.RIGHT:i="-100%"}switch(e){case xn.CENTER:r="-50%";break;case xn.BOTTOM:r="-100%"}return{x:i,y:r}}(i);this.$content.style.transformOrigin=`${i.transformOriginX} ${i.transformOriginY}`,Object.assign(this.$container.style,{top:e.top+"px",left:e.left+"px",transform:`translate(${s.x}, ${s.y})`}),dn(this.$container,{"data-fallback-strategy":r,"data-anchor-origin-x":i.anchorOriginX,"data-anchor-origin-y":i.anchorOriginY,"data-transform-origin-x":i.transformOriginX,"data-transform-origin-y":i.transformOriginY});const{maxWidth:l,maxHeight:d}=function({transformOriginX:t,transformOriginY:e},{left:i,top:r}){const{innerHeight:n,innerWidth:o}=window;return{maxWidth:t===wn.RIGHT?i:o-i,maxHeight:e===xn.BOTTOM?r:n-r}}(i,e);mn("--popover-container-max-width",l+"px",this.$container),mn("--popover-container-max-height",d+"px",this.$container)}))}getAnchor(){let t=this.anchor;if("string"==typeof t||t instanceof String){const e=cn(this,t);t=e.length>0?e[0]:void 0}return t}onContainerClick(){this.open&&this.closeOnClick&&this.hide()}renderContent(){return Z` <slot></slot> `}render(){return Z` <wl-backdrop id="backdrop" @click="${this.clickAway}"></wl-backdrop> <div id="container" aria-expanded="${this.open.toString()}"> <focus-trap id="content" ?inactive="${!this.open||this.disableFocusTrap}"> ${this.renderContent()} </focus-trap> </div> `}};Kn.styles=[...Gn.styles,ln(":host{display:none;outline:none;pointer-events:none}:host([fixed]){z-index:var(--popover-z-index,12345678);position:fixed;top:0;left:0;width:100%;height:100%}:host([fixed]) #container{position:absolute}#content,:host([open]){display:block}#content{z-index:1;pointer-events:all}")],r([yt({type:Boolean}),n("design:type",Boolean)],Kn.prototype,"closeOnClick",void 0),r([yt({type:Boolean}),n("design:type",Boolean)],Kn.prototype,"noFallback",void 0),r([yt({type:String,reflect:!0}),n("design:type",String)],Kn.prototype,"transformOriginX",void 0),r([yt({type:String,reflect:!0}),n("design:type",String)],Kn.prototype,"transformOriginY",void 0),r([yt({type:String,reflect:!0}),n("design:type",String)],Kn.prototype,"anchorOriginX",void 0),r([yt({type:String,reflect:!0}),n("design:type",String)],Kn.prototype,"anchorOriginY",void 0),r([yt({type:String,reflect:!0}),n("design:type",String)],Kn.prototype,"role",void 0),r([yt({type:String}),n("design:type",Object)],Kn.prototype,"anchor",void 0),r([yt({type:Array}),n("design:type",Array)],Kn.prototype,"anchorOpenEvents",void 0),r([yt({type:Array}),n("design:type",Array)],Kn.prototype,"anchorCloseEvents",void 0),r([wt("#content"),n("design:type",Cn)],Kn.prototype,"$content",void 0),r([wt("#container"),n("design:type",HTMLElement)],Kn.prototype,"$container",void 0),r([wt("#backdrop"),n("design:type",Rn)],Kn.prototype,"$backdrop",void 0),Kn=r([bt("wl-popover")],Kn);let Xn=class extends Ot{constructor(){super(...arguments),this.hoverable=!1}render(){return Z` <slot></slot> `}};Xn.styles=[Un,ln(":host{color:var(--card-color,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));background:var(--card-bg,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));transition:var(--card-transition,box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-ease,ease));box-shadow:var(--card-elevation,var(--elevation-1,0 .3125rem .625rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)));border-radius:var(--card-border-radius,.5rem);padding:var(--card-padding,0);display:flex;flex-direction:column;text-align:left}:host([hoverable]:hover){box-shadow:var(--card-elevation-hover,var(--elevation-4,0 .5rem 1rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)))}")],r([yt({reflect:!0,type:Boolean}),n("design:type",Boolean)],Xn.prototype,"hoverable",void 0),Xn=r([bt("wl-card")],Xn);let Zn=class extends Ot{render(){return Z` <svg id="arrow" viewBox="0 0 100 100" preserveAspectRatio="none"> <polygon points="50 0, 100 100, 0 100"/> </svg> <wl-card id="content"> <slot></slot> </wl-card> `}};Zn.styles=[Un,ln(":host{--card-elevation:var(--popover-card-elevation,var(--elevation-4,0px 0.5rem 1rem -0.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),0.15)));display:flex;flex-direction:var(--_flex-direction,column)}#content{transform:translate(calc(var(--popover-card-arrow-width, .625rem) * var(--_content-translate-x-multiplier, 0)),calc(var(--popover-card-arrow-width, .625rem) * var(--_content-translate-y-multiplier, 0)));overflow:hidden}#arrow{transform:rotate(var(--_arrow-rotation,0deg)) translate(calc(50% * var(--_arrow-translate-x-multiplier, 0)),calc(50% * var(--_arrow-translate-y-multiplier, 0)));left:var(--_arrow-offset-x,unset);top:var(--_arrow-offset-y,unset);justify-self:var(--_justify-content,flex-start);align-self:var(--_align-items,flex-start);pointer-events:none;position:relative;width:var(--popover-card-arrow-width,.625rem);height:var(--popover-card-arrow-height,.375rem);fill:var(--popover-card-arrow-fill,var(--card-bg,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%)))));z-index:1;display:none}:host-context([data-transform-origin-x][data-transform-origin-y]) #arrow{display:block}:host-context([data-transform-origin-x=left]){--_align-items:flex-start}:host-context([data-transform-origin-x=center]){--_align-items:center}:host-context([data-transform-origin-x=right]){--_align-items:flex-end}:host-context([data-transform-origin-y=top]){--_justify-content:flex-start}:host-context([data-transform-origin-y=center]){--_justify-content:center}:host-context([data-transform-origin-y=bottom]){--_flex-direction:column-reverse}:host-context([data-transform-origin-x=center][data-transform-origin-y=center]) #arrow{display:none}:host-context([data-transform-origin-x=left][data-transform-origin-y=top]){--_content-translate-x-multiplier:-2;--_arrow-translate-x-multiplier:-1}:host-context([data-transform-origin-x=right][data-transform-origin-y=top]){--_content-translate-x-multiplier:2;--_arrow-translate-x-multiplier:1}:host-context([data-transform-origin-y=bottom]){--_arrow-rotation:180deg}:host-context([data-transform-origin-x=left][data-transform-origin-y=bottom]){--_content-translate-x-multiplier:-2;--_arrow-translate-x-multiplier:1}:host-context([data-transform-origin-x=right][data-transform-origin-y=bottom]){--_content-translate-x-multiplier:2;--_arrow-translate-x-multiplier:-1}:host-context([data-transform-origin-y=center]){--_arrow-translate-x-multiplier:0;--_align-items:center}:host-context([data-transform-origin-x=left][data-transform-origin-y=center]){--_flex-direction:row;--_arrow-rotation:-90deg}:host-context([data-transform-origin-x=left][data-transform-origin-y=center]) #content{transform:translateX(calc(((var(--popover-card-arrow-width, .625rem) - var(--popover-card-arrow-height, .375rem)) / 2) * -1))}:host-context([data-transform-origin-x=right][data-transform-origin-y=center]){--_flex-direction:row-reverse;--_arrow-rotation:90deg}:host-context([data-transform-origin-x=right][data-transform-origin-y=center]) #content{transform:translateX(calc((var(--popover-card-arrow-width, .625rem) - var(--popover-card-arrow-height, .375rem)) / 2))}")],Zn=r([bt("wl-popover-card")],Zn),c({loader:t=>fetch(`/resources/i18n/${t}.json`).then((t=>t.json()))});class Yn extends Ot{constructor(){super(),this.active=!1,this.hasLoadedStrings=!1,this.run_after_connection=t=>{},this.active=!1,this.tasker=globalThis.tasker}get activeConnected(){return this.active&&void 0!==globalThis.backendaiclient&&null!==globalThis.backendaiclient&&!0===globalThis.backendaiclient.ready}get connected(){return void 0!==globalThis.backendaiclient&&null!==globalThis.backendaiclient&&!0===globalThis.backendaiclient.ready}_viewStateChanged(t){}shouldUpdate(){return this.active}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}attributeChangedCallback(t,e,i){"active"==t&&null!==i?(this.active=!0,this._viewStateChanged(!0)):(this.active=!1,this._viewStateChanged(!1)),super.attributeChangedCallback(t,e,i)}_hideDialog(t){t.target.closest("backend-ai-dialog").hide()}_addInputValidator(t){if(!t.hasAttribute("auto-validate"))return;let e;null===t.validityTransform&&(e=t.getAttribute("error-message")?t.getAttribute("error-message"):t.getAttribute("validationMessage")?t.getAttribute("validationMessage"):p("credential.validation.ValidationFailed"),t.validityTransform=(i,r)=>r.valid?{valid:r.valid}:r.patternMismatch?(t.validationMessage=e,{valid:r.valid,patternMismatch:!r.valid}):r.valueMissing?(t.validationMessage=p("explorer.ValueRequired"),{valid:r.valid,valueMissing:!r.valid}):r.tooShort?(t.validationMessage=p("explorer.InputTooShort"),{valid:r.valid,valueMissing:!r.valid}):(t.validationMessage=e,{valid:r.valid,patternMismatch:!r.valid}))}}r([yt({type:Boolean})],Yn.prototype,"active",void 0),r([yt({type:Boolean})],Yn.prototype,"hasLoadedStrings",void 0);let Jn=class extends Yn{constructor(){super(),this.options=Object(),this.options={"user.desktop_notification":!0,"user.compact_sidebar":!1,"user.preserve_login":!1,"user.language":"default","user.automatic_update_check":!0,"user.custom_ssh_port":"","user.beta_feature":!1},this.readSettings()}firstUpdated(){}readSettings(){this._readSettings()}_readSettings(){for(let t=0,e=localStorage.length;t<e;++t)if(localStorage.key(t).startsWith("backendaiconsole.settings")){let e=localStorage.key(t).replace("backendaiconsole.settings.","");this._readSetting(e)}}exists(t,e="user"){return e+"."+t in this.options}get(t,e=null,i="user"){return i+"."+t in this.options?this.options[i+"."+t]:e}set(t,e,i="user"){return this._writeUserSetting(t,e,i)}delete(t,e="user"){return this._deleteUserSetting(t,e)}_readSetting(t,e=!0,i="user"){let r=localStorage.getItem("backendaiconsole.settings."+t);null!==r&&""!=r&&'""'!=r?"false"===r?this.options[t]=!1:"true"===r?this.options[t]=!0:this.isJson(r)?this.options[t]=JSON.parse(r):this.options[t]=r:this.options[t]=e}_writeUserSetting(t,e,i){!1===e?localStorage.setItem("backendaiconsole.settings."+i+"."+t,"false"):!0===e?localStorage.setItem("backendaiconsole.settings."+i+"."+t,"true"):"object"==typeof e?localStorage.setItem("backendaiconsole.settings."+i+"."+t,JSON.stringify(e)):localStorage.setItem("backendaiconsole.settings."+i+"."+t,e),this.options[i+"."+t]=e}_deleteUserSetting(t,e){return localStorage.removeItem("backendaiconsole.settings."+e+"."+t),delete this.options[e+"."+t],!0}isJson(t){try{JSON.parse(t)}catch(t){return!1}return!0}render(){return Z`
    `}};r([yt({type:Object})],Jn.prototype,"options",void 0),Jn=r([bt("backend-ai-settings-store")],Jn);var Qn=Jn;function to(t,e,i){return t<e?e:t>i?i:t}function eo(t,e){return Math.sqrt(Math.pow(t,2)+Math.pow(e,2))/2}const io={easing:"ease-out",fill:"both"};let ro=class extends Ot{constructor(){super(...arguments),this.unbounded=!1,this.centered=!1,this.overlay=!1,this.disabled=!1,this.focusable=!1,this.autoRelease=!1,this.initialDuration=350,this.releaseDuration=500,this.role="presentation",this.target=this,this.listeners=[],this.rippleAnimationListeners=[]}connectedCallback(){super.connectedCallback(),this.addListeners()}disconnectedCallback(){super.disconnectedCallback(),this.removeListeners()}updated(t){super.updated(t),t.has("target")&&null!=this.target&&(this.removeListeners(),this.addListeners())}addListeners(){null!=this.target&&this.listeners.push(vn(this.target,"mousedown",(t=>this.spawnRipple(t)),{passive:!0}),vn(this.target,"focusin",this.onFocusIn.bind(this),{passive:!0}),vn(this.target,"focusout",this.onFocusOut.bind(this),{passive:!0}))}removeListeners(){yn(this.listeners)}spawnRipple(t,e){if(this.disabled)return()=>{};this.releaseRipple();const i=this.getBoundingClientRect();let r=0,n=0;if(this.centered||null==t)r=i.width/2,n=i.height/2;else{let{clientX:e,clientY:o}=function(t){let e,i=!1;null!=t.changedTouches?(e=t.changedTouches[0],i=!0):e=t;let{clientX:r,clientY:n,pageX:o,pageY:a}=e;return{clientX:r,clientY:n,pageX:o,pageY:a,isTouch:i}}(t);r=e-i.left,n=o-i.top}const o=this.showRippleAtCoords({x:r,y:n},e);return this.rippleAnimationListeners.push(o),null==this.target||this.focusable||this.rippleAnimationListeners.push(vn(window,"mouseup",this.releaseRipple.bind(this),{passive:!0})),o}releaseRipple(){yn(this.rippleAnimationListeners)}showRippleAtCoords({x:t,y:e},i){const{offsetWidth:r,offsetHeight:n}=this,o=kn(window.getComputedStyle(this)),{releaseDuration:a=this.releaseDuration,initialDuration:s=this.initialDuration,autoRelease:l=this.autoRelease}=i||{};t*=0===o.x?1:1/o.x,e*=0===o.y?1:1/o.y;const d=document.createElement("div");d.classList.add("ripple");const c=eo(r,n),h=eo(Math.abs(r/2-t),Math.abs(n/2-e)),u=Math.round(c+2*h),p=2*u;Object.assign(d.style,{left:t-u+"px",top:e-u+"px",height:p+"px",width:p+"px",position:"absolute"});let f=!1;const m=()=>{if(f)return;f=!0;const t=Sn(window.getComputedStyle(d));d.animate({opacity:[t.toString(),"0"]},{...io,duration:a}).onfinish=()=>{requestAnimationFrame((()=>{this.shadowRoot.contains(d)&&this.shadowRoot.removeChild(d)}))}};return this.shadowRoot.appendChild(d),l&&m(),d.animate({transform:["scale(0)","scale(1)"]},{...io,duration:s}),m}onFocusIn(){this.focusable&&this.spawnRipple(void 0,{autoRelease:!1})}onFocusOut(){this.focusable&&this.releaseRipple()}render(){return Z``}};ro.styles=[Un,ln(":host{position:relative;display:block;outline:none;-webkit-user-select:none;user-select:none}:host(:not([unbounded])){overflow:hidden}:host([overlay]){position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%)}.ripple{background:var(--ripple-color,currentcolor);opacity:var(--ripple-opacity,.15);border-radius:100%;pointer-events:none;will-change:opacity,transform}")],r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],ro.prototype,"unbounded",void 0),r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],ro.prototype,"centered",void 0),r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],ro.prototype,"overlay",void 0),r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],ro.prototype,"disabled",void 0),r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],ro.prototype,"focusable",void 0),r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],ro.prototype,"autoRelease",void 0),r([yt({type:Number}),n("design:type",Number)],ro.prototype,"initialDuration",void 0),r([yt({type:Number}),n("design:type",Number)],ro.prototype,"releaseDuration",void 0),r([yt({type:String,reflect:!0}),n("design:type",String)],ro.prototype,"role",void 0),r([yt({type:Object}),n("design:type",EventTarget)],ro.prototype,"target",void 0),ro=r([bt("wl-ripple")],ro);class no extends Ot{constructor(){super(...arguments),this.disabled=!1,this.readonly=!1,this.required=!1,this.value="",this.formElementId=Nn(),this.listeners=[]}get validationMessage(){return this.$formElement.validationMessage}get valid(){return null==this.validity||this.validity.valid}get validity(){return this.$formElement.validity}get willValidate(){return this.$formElement.willValidate}get form(){return this.$formElement.form}checkValidity(){return this.$formElement.checkValidity()}setCustomValidity(t){return this.$formElement.setCustomValidity(t)}firstUpdated(t){super.firstUpdated(t),this.$formElement=this.queryFormElement(),this.appendChild(this.$formElement)}disconnectedCallback(){super.disconnectedCallback(),yn(this.listeners)}updated(t){super.updated(t),t.has("disabled")&&dn(this,{"aria-disabled":this.disabled.toString()}),this.updateTabindex(t)}updateTabindex(t){t.has("disabled")&&sn(this,this.disabled)}getFormItemValue(){return null!=this.$formElement?this.$formElement.value:this.initialValue||""}queryFormElement(){return this.shadowRoot.querySelector("#"+this.formElementId)}}no.styles=[Un,ln("")],r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],no.prototype,"disabled",void 0),r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],no.prototype,"readonly",void 0),r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],no.prototype,"required",void 0),r([yt({type:String}),n("design:type",String)],no.prototype,"name",void 0),r([yt({type:String}),n("design:type",String)],no.prototype,"value",void 0);class oo extends no{constructor(){super(...arguments),this.type="submit"}connectedCallback(){super.connectedCallback(),this.listeners.push(vn(this,"click",this.onClick.bind(this)),vn(this,"keydown",this.onKeyDown.bind(this)))}onKeyDown(t){t instanceof KeyboardEvent&&("Enter"===t.code||"Space"===t.code)&&(this.click(),_n(t),null!=this.$ripple&&this.$ripple.spawnRipple(void 0,{autoRelease:!0}))}onClick(t){this.disabled?_n(t):t.target!=this||t.defaultPrevented||this.$formElement.dispatchEvent(new MouseEvent("click",{relatedTarget:this,composed:!0}))}renderFormElement(){return Z` <button style="display: none;" id="${this.formElementId}" aria-hidden="true" tabindex="-1" type="${this.type}" ?disabled="${this.disabled}" name="${fi(this.name)}" value="${fi(this.value)}"></button> `}}oo.styles=[...no.styles,ln("")],r([yt({type:String}),n("design:type",String)],oo.prototype,"type",void 0);let ao=class extends oo{constructor(){super(...arguments),this.inverted=!1,this.fab=!1,this.outlined=!1,this.noRipple=!1,this.flat=!1,this.role="button"}render(){return Z` <wl-ripple id="ripple" overlay .target="${this}" ?disabled="${this.disabled||this.noRipple}"></wl-ripple> <slot></slot> ${this.renderFormElement()} `}};ao.styles=[...oo.styles,ln(':host{--_button-color:var(--button-color,hsl(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));--_button-bg:var(--button-bg,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_button-shadow-color:var(--button-shadow-color,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.2));color:var(--_button-color);background:var(--_button-bg);box-shadow:var(--elevation-1,0 .3125rem .625rem -.125rem var(--_button-shadow-color));padding:var(--button-padding,.75rem 1.5rem);font-size:var(--button-font-size,1rem);border-radius:var(--button-border-radius,.5rem);font-family:var(--button-font-family,var(--font-family-sans-serif,"Roboto Condensed",helvetica,sans-serif));transition:var(--button-transition,box-shadow var(--transition-duration-slow,.25s) var(--transition-timing-function-ease,ease),background var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease),color var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease));letter-spacing:var(--button-letter-spacing,.125rem);line-height:1;text-transform:uppercase;cursor:pointer;text-align:center;-webkit-user-select:none;user-select:none;outline:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;z-index:0}:host,:host([fab]){display:inline-flex;align-items:center;justify-content:center}:host([fab]){width:var(--button-fab-size,2.5rem);height:var(--button-fab-size,2.5rem);padding:0;letter-spacing:0;border-radius:100%}:host([inverted]){color:var(--_button-bg);background:var(--_button-color)}:host([outlined]){border:var(--button-border-outlined,.125rem solid currentColor)}:host(:focus),:host(:hover){--_button-color:var(--button-color-hover,hsl(var(--primary-400-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));--_button-bg:var(--button-bg-hover,hsl(var(--primary-400,var(--primary-hue,224),var(--primary-saturation,42%),var(--primary-lightness,52%))));--_button-shadow-color:var(--button-shadow-color-hover,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.5));will-change:background,color,box-shadow}:host(:active){--_button-color:var(--button-color-active,hsl(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));--_button-bg:var(--button-bg-active,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));box-shadow:var(--elevation-4,0 .5rem 1rem -.125rem var(--_button-shadow-color))}:host([flat]:focus){background:var(--button-bg-active-flat,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.08))}:host([disabled]){--_button-color:var(--button-color-disabled,hsl(var(--shade-400-contrast,var(--shade-hue-contrast,0),var(--shade-saturation-contrast,100%),var(--shade-lightness-contrast,100%))));--_button-bg:var(--button-bg-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));box-shadow:none;cursor:default;pointer-events:none}:host([flat]){box-shadow:none;background:none}#ripple{z-index:-1}')],r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],ao.prototype,"inverted",void 0),r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],ao.prototype,"fab",void 0),r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],ao.prototype,"outlined",void 0),r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],ao.prototype,"noRipple",void 0),r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],ao.prototype,"flat",void 0),r([yt({type:String,reflect:!0}),n("design:type",String)],ao.prototype,"role",void 0),r([wt("#ripple"),n("design:type",ro)],ao.prototype,"$ripple",void 0),ao=r([bt("wl-button")],ao);var so;!function(t){t.SMALL="small",t.MEDIUM="medium",t.LARGE="large",t.AUTO="auto",t.FULLSCREEN="fullscreen"}(so||(so={}));so.MEDIUM;let lo=class extends Gn{constructor(){super(...arguments),this.scrollable=!1,this.role="dialog"}get $focusTrap(){return this.$dialog}animateIn(){let t=!1;const e=()=>{t||(t=!0,this.didShow())},i=this.$dialog.animate([{transform:"scale(0.9) translate(0, 30px)",opacity:"0"},{transform:"scale(1) translate(0, 0)",opacity:"1"}],this.animationConfig),r=this.$backdrop.animate([{opacity:"0"},{opacity:"1"}],this.animationConfig);i.onfinish=e,r.onfinish=e,this.activeInAnimations.push(i,r)}animateOut(t){let e=!1;const i=()=>{e||(e=!0,this.resolve(t),this.didHide(t))},r=this.$dialog.animate([{transform:"translateY(0)",opacity:"1"},{transform:"translateY(30px)",opacity:"0"}],this.animationConfig),n=this.$backdrop.animate([{opacity:"1"},{opacity:"0"}],this.animationConfig);r.onfinish=i,n.onfinish=i,this.activeOutAnimations.push(r,n)}render(){return Z` <wl-backdrop id="backdrop" @click="${this.clickAway}"></wl-backdrop> <focus-trap id="dialog" ?inactive="${!this.open||this.disableFocusTrap}"> <slot name="header"></slot> <slot name="content"></slot> <slot></slot> <slot name="footer"></slot> </focus-trap> `}};lo.styles=[...Gn.styles,ln(":host{--_dialog-width:var(--dialog-width,auto);--_dialog-height:var(--dialog-height,auto);text-align:left;display:none;position:relative;outline:none}:host([scrollable]) #dialog{overflow:hidden}:host([scrollable]) ::slotted([slot=header]){padding:var(--dialog-header-padding-scrollable,1.5rem);border-bottom:var(--dialog-scrollable-border,.0625rem solid hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))))}:host([scrollable]) ::slotted([slot=footer]){border-top:var(--dialog-scrollable-border,.0625rem solid hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))))}:host([scrollable]) ::slotted([slot=content]){overflow-y:scroll;-webkit-overflow-scrolling:touch}:host([open]){display:flex;align-items:center;justify-content:center}::slotted([slot=header]){--h-margin:0;padding:var(--dialog-header-padding,1.5rem 1.5rem 0);margin:0;flex-shrink:0}::slotted([slot=footer]){padding:var(--dialog-footer-padding,.75rem);display:flex;align-items:center;justify-content:flex-end;flex-shrink:0}::slotted([slot=content]){padding:var(--dialog-content-padding,1.5rem);flex-grow:1}:host([fixed]){z-index:var(--dialog-z-index,1234567);will-change:transform,opacity;position:fixed;top:0;left:0;width:100%;height:100%}:host([fixed]) #dialog{min-width:var(--dialog-min-width,260px);min-height:var(--dialog-min-height,auto);max-width:var(--dialog-max-width,100vw);max-height:var(--dialog-max-height,100vh)}:host([size=small][fixed]){--_dialog-width:var(--dialog-width-s,40%);--_dialog-height:var(--dialog-height-s,40%)}:host([size=medium][fixed]){--_dialog-width:var(--dialog-width-m,50%);--_dialog-height:var(--dialog-height-m,50%)}:host([size=large][fixed]){--_dialog-width:var(--dialog-width-l,60%);--_dialog-height:var(--dialog-height-l,60%)}:host([size=auto][fixed]){--_dialog-width:var(--dialog-width-auto,auto);--_dialog-height:var(--dialog-height-auto,auto)}:host([size=fullscreen][fixed]){--_dialog-width:var(--dialog-width-fullscreen,100%);--_dialog-height:var(--dialog-height-fullscreen,100%)}:host([size=fullscreen][fixed]) #dialog{border-radius:0}#dialog{width:var(--_dialog-width);height:var(--_dialog-height);box-shadow:var(--dialog-elevation,var(--elevation-4,0 .5rem 1rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)));border-radius:var(--dialog-border-radius,.5rem);background:var(--dialog-bg,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));color:var(--dialog-color,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));padding:0;margin:0;outline:none;display:flex;flex-direction:column;align-items:stretch;border:none;overflow-y:auto;overscroll-behavior:contain;position:relative;z-index:1}")],r([yt({type:String,reflect:!0}),n("design:type",String)],lo.prototype,"size",void 0),r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],lo.prototype,"scrollable",void 0),r([yt({type:String,reflect:!0}),n("design:type",String)],lo.prototype,"role",void 0),r([wt("#dialog"),n("design:type",Cn)],lo.prototype,"$dialog",void 0),r([wt("#backdrop"),n("design:type",Rn)],lo.prototype,"$backdrop",void 0),lo=r([bt("wl-dialog")],lo);let co=class extends Ot{constructor(){super(...arguments),this.role="presentation"}render(){return Z` <slot></slot> `}};co.styles=[ln(':host{font-size:var(--icon-size,1.5em);font-family:var(--icon-font,"Material Icons");font-weight:400;font-style:normal;color:inherit;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}'),Un],r([yt({type:String,reflect:!0}),n("design:type",String)],co.prototype,"role",void 0),co=r([bt("wl-icon")],co);let ho=class extends Ot{constructor(){super(),this.dialog=Object(),this.edition="Open Source",this.license="Subscription",this.validUntil="",this.version="",this.managerVersion=""}static get styles(){return[Ct`
        :host > *, html {
          font-family: var(--general-font-family);
        }

        a,
        a:visited {
          color: #222222;
        }

        a:hover {
          color: #3e872d;
        }

        #splash-panel {
          --dialog-width: 345px;
          --dialog-height: 345px;
          --dialog-border-radius: 10px;
        }

        .splash-header {
          height: 120px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: left top;
          background-color: RGB(246, 253, 247);
          font-size: 28px;
          font-weight: 400;
          line-height: 60px;
        }

        ul {
          list-style-type: none;
        }

        .splash-information .detail {
          font-weight: 400;
          font-size: 13px;
        }

        .copyright {
          font-size: 12px;
        }

        .release-note {
          font-size: 12px;
        }

      `]}firstUpdated(){this.dialog=this.shadowRoot.querySelector("wl-dialog")}connectedCallback(){super.connectedCallback()}show(){this.edition=globalThis.packageEdition,this.validUntil=globalThis.packageValidUntil,this.version=globalThis.packageVersion,this.managerVersion=globalThis.backendaiclient.managerVersion,"Open Source"!==this.edition?"2099-12-31"===globalThis.packageValidUntil||'""'===this.validUntil||""==this.validUntil?this.license=p("license.Perpetual"):this.license=p("license.Subscription"):this.license=p("license.OpenSource"),this.dialog.show()}hide(){this.dialog.hide()}render(){return Z`
      <wl-dialog id="splash-panel" fixed backdrop blockscrolling persistent>
        <div class="splash-header">
          <img src="manifest/backend.ai-text.svg" style="height:50px;padding:35px 20px;" />
          <wl-button style="position:absolute;top:0;right:0;" fab flat inverted @click="${()=>this.hide()}">
            <wl-icon>close</wl-icon>
          </wl-button>
        </div>
        <div class="splash-information">
          <ul>
            <li>Backend.AI Console <span id="version-detail" class="detail">${globalThis.packageVersion}</span></li>
            <li><span id="license-detail">${this.edition} Edition</span></li>
            <li><span id="valid-until" class="detail">
              ${"Subscription"===this.license?Z`Subscription is active until ${this.validUntil}`:Z``}
              ${"Perpetual"===this.license?Z`Perpetual License`:Z``}
              </span></li>
            <li style="margin-top:15px;"><span id="mode-detail" class="detail">Backend.AI Cluster</span> <span id="manager-build-detail" class="detail">${this.managerVersion}</span></li>
            <li><span id="mode-detail" class="detail">${globalThis.isElectron?"App":"WebServer"}</span> <span id="build-detail" class="detail">Build ${globalThis.buildVersion}</span></li>
          </ul>
          <ul>
            <li>Powered by <a target="_blank" href="https://github.com/lablup/backend.ai/blob/master/LICENSE">open-source software</a></li>
            <li class="copyright">Copyright &copy; 2015-2020 Lablup Inc.</li>
            <li class="release-note">
              <a target="_blank" href="https://github.com/lablup/backend.ai-console/releases/tag/v${this.version}">Release Note</a>
              <a target="_blank" href="https://github.com/lablup/backend.ai-console/blob/main/LICENSE">License</a>
            </li>
            </ul>
          </ul>
        </div>
      </wl-dialog>
    `}};r([yt({type:Object})],ho.prototype,"dialog",void 0),r([yt({type:String})],ho.prototype,"edition",void 0),r([yt({type:String})],ho.prototype,"license",void 0),r([yt({type:String})],ho.prototype,"validUntil",void 0),r([yt({type:String})],ho.prototype,"version",void 0),r([yt({type:String})],ho.prototype,"managerVersion",void 0),ho=r([bt("backend-ai-splash")],ho);let uo=class extends Yn{constructor(){super(),this.lang="default",this.manualURL="",this.disabled=!1,this.URLmatchingTable={"":"summary/summary.html",summary:"summary/summary.html",data:"vfolder/vfolder.html",job:"session_use/session_use.html",credential:"admin_user_keypair_management/admin_user_keypair_management.html",environment:"admin_user_keypair_management/admin_user_keypair_management.html#manage-images",agent:"admin_user_keypair_management/admin_user_keypair_management.html#query-agent-nodes",settings:"admin_user_keypair_management/admin_user_keypair_management.html#system-settings",usersettings:"user_settings/user_settings.html"}}static get styles(){return[Ct`
    mwc-icon-button {
      color: white;
    }
    `]}firstUpdated(){this.currentPage}connectedCallback(){super.connectedCallback()}get currentPage(){let t=globalThis.location.toString().split(/[\/]+/).pop();return void 0===this.page?this.page="error":this.page=t,this.page}showHelpPage(){let t="";if(""!==this.manualURL)t=this.manualURL;else if(this.currentPage in this.URLmatchingTable){t=this.URLmatchingTable[this.currentPage];let e=globalThis.backendaioptions.get("current_language");["ko","en"].includes(e)?this.lang=e:this.lang="en"}this.showOnlineHelpPage(t)}showOnlineHelpPage(t){window.open(`https://console.docs.backend.ai/${this.lang}/latest/`+t,"_blank")}render(){return Z`
      <mwc-icon-button id="help-page-button" icon="help_outline" @click="${()=>this.showHelpPage()}"></mwc-icon-button>
    `}};r([yt({type:String})],uo.prototype,"lang",void 0),r([yt({type:String})],uo.prototype,"manualURL",void 0),r([yt({type:String})],uo.prototype,"page",void 0),r([yt({type:Boolean})],uo.prototype,"disabled",void 0),r([yt({type:Object})],uo.prototype,"URLmatchingTable",void 0),uo=r([bt("backend-ai-help-button")],uo);let po=class extends Gn{constructor(){super(...arguments),this.role="banner",this.hideDelay=5e3,this.autoHideTimeout=null}get $focusTrap(){return this.$snackbar}animateIn(){let t=!1;const e=()=>{t||(t=!0,this.didShow())},i=this.$snackbar.animate([{transform:"translateY(100%)",opacity:"0"},{transform:"translateY(0)",opacity:"1"}],this.animationConfig),r=this.$backdrop.animate([{opacity:"0"},{opacity:"1"}],this.animationConfig);r.onfinish=e,i.onfinish=e,this.activeInAnimations.push(i,r)}animateOut(t){null!=this.autoHideTimeout&&window.clearTimeout(this.autoHideTimeout);let e=!1;const i=()=>{e||(e=!0,this.resolve(t),this.didHide(t))},r=this.$snackbar.animate([{transform:"translateY(0)",opacity:"1"},{transform:"translateY(100%)",opacity:"0"}],this.animationConfig),n=this.$backdrop.animate([{opacity:"1"},{opacity:"0"}],this.animationConfig);n.onfinish=i,r.onfinish=i,this.activeOutAnimations.push(r,n)}didShow(){super.didShow(),this.autoHideTimeout=window.setTimeout((()=>{this.persistent||this.hide()}),this.hideDelay)}render(){return Z` <wl-backdrop id="backdrop" @click="${this.clickAway}"></wl-backdrop> <focus-trap id="snackbar" ?inactive="${!this.open||this.disableFocusTrap}"> <div id="content"> <slot name="icon"></slot> <slot></slot> </div> <div id="actions"> <slot name="action"></slot> </div> </focus-trap> `}};po.styles=[...Gn.styles,ln(":host{display:none;pointer-events:none;outline:none}:host([open]){display:block}:host([fixed]){padding:var(--snackbar-fixed-padding,.75rem);z-index:var(--snackbar-z-index,12345678);position:fixed;left:0;bottom:0;top:0;right:0}:host([fixed][open]){display:flex;align-items:flex-end}#snackbar{padding:var(--snackbar-padding,.375rem);color:var(--snackbar-color,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));background:var(--snackbar-bg,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));border-radius:var(--snackbar-border-radius,.5rem);box-shadow:var(--snackbar-elevation,var(--elevation-1,0 .3125rem .625rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)));flex-wrap:wrap;justify-content:flex-end;text-align:left;position:relative;pointer-events:all}#actions,#content,#snackbar{display:flex;align-items:center;flex-wrap:wrap}::slotted([slot=icon]){margin:var(--snackbar-icon-margin,0 .75rem 0 0);color:var(--snackbar-icon-color,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}#content{padding:var(--snackbar-content-padding,.375rem .75rem);flex-grow:1}")],r([yt({type:String,reflect:!0}),n("design:type",String)],po.prototype,"role",void 0),r([yt({type:Number}),n("design:type",Object)],po.prototype,"hideDelay",void 0),r([wt("#backdrop"),n("design:type",Rn)],po.prototype,"$backdrop",void 0),r([wt("#snackbar"),n("design:type",Cn)],po.prototype,"$snackbar",void 0),po=r([bt("wl-snackbar")],po);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let fo=class extends Ot{constructor(){super(),this.text="",this.detail="",this.url="",this.message="",this.requestUrl="",this.status="",this.timestamp="",this.notifications=Array(),this.notificationstore=Array(),this.active=!0,this.supportDesktopNotification=!1,this.step=0,this.newDesktopNotification=Object(),this.options=Object(),this.options={desktop_notification:!0}}static get is(){return"lablup-notification"}static get styles(){return[Ct`
        wl-snackbar {
          position: fixed;
          right: 20px;
          font-size: 16px;
          font-weight: 400;
          font-family: 'Ubuntu', 'Quicksand', Roboto, sans-serif;
          z-index: 12345678;
        }

        wl-button {
          --button-font-size: 11px;
          --button-fab-size: 12px;
        }

        wl-icon {
          --icon-size: 10px;
        }
      `]}render(){return Z``}shouldUpdate(){return this.active}firstUpdated(){"Notification"in window&&Promise.resolve(Notification.requestPermission()).then((t=>{["default","granted","denied"].includes(t)&&(this.supportDesktopNotification=!0)})),this._readUserSetting("desktop_notification",!0),!1===this.options.desktop_notification&&(this.supportDesktopNotification=!1)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}async getMoreState(){}async ladder(){}_readUserSetting(t,e=!0){let i=localStorage.getItem("backendaiconsole.usersetting."+t);this.options[t]=null!==i&&""!=i&&'""'!=i?"false"!==i&&("true"===i||i):e}_hideNotification(t){t.target.closest("wl-snackbar").hide()}_moreNotification(t){this._hideNotification(t);let e=globalThis.location.toString().split(/[\/]+/).pop();if(globalThis.history.pushState({},"","/usersettings"),Jt.dispatch(Vt(decodeURIComponent("/usersettings"),{tab:"logs"})),e&&"usersettings"===e){let t=new CustomEvent("backend-ai-usersettings-logs",{});document.dispatchEvent(t)}}_createCloseButton(t){let e=document.createElement("wl-button");e.setAttribute("slot","action"),e.setAttribute("flat",""),e.setAttribute("fab",""),e.addEventListener("click",this._hideNotification.bind(this)),e.innerHTML="<wl-icon>close</wl-icon>",t.appendChild(e)}async show(t=!1,e=Object()){let i=document.querySelector("wl-snackbar[persistent='true']");i&&(this.notifications=[],document.body.removeChild(i)),this.gc();let r=document.createElement("wl-snackbar");if(r.innerHTML='<span style="overflow-x:hidden">'+this.text+"</span>",""!=this.detail&&(r.innerHTML=r.innerHTML+'<div style="display:none;"> : '+this.detail+"</div>"),0!==Object.keys(e).length&&this._saveToLocalStorage("backendaiconsole.logs",e),""!==this.detail){let t=document.createElement("wl-button");t.style.fontSize="12px",t.setAttribute("slot","action"),t.setAttribute("flat",""),t.setAttribute("fab",""),t.style.width="80px",""!=this.url?(t.innerHTML=p("notification.Visit"),t.addEventListener("click",this._openURL.bind(this,this.url))):(t.innerHTML=p("notification.SeeDetail"),t.addEventListener("click",this._moreNotification.bind(this))),r.appendChild(t)}this.detail="",this.url="",!1===t?r.setAttribute("hideDelay","3000"):(r.setAttribute("persistent","true"),this._createCloseButton(r)),r.setAttribute("backdrop",""),r.style.bottom=20+55*this.step+"px",r.style.position="fixed",r.querySelector("span").style.overflowX="hidden",r.querySelector("span").style.maxWidth="70vw",r.style.right="20px",r.style.fontSize="16px",r.style.fontWeight="400",r.style.fontFamily="'Ubuntu', 'Quicksand', Roboto, sans-serif",r.style.zIndex="12345678";let n=new Date;r.setAttribute("created",n.toLocaleString()),document.body.appendChild(r),this.notifications.push(r),await this.updateComplete,r.show();let o=new CustomEvent("backend-ai-notification-changed",{});document.dispatchEvent(o),this._spawnDesktopNotification("Backend.AI",this.text,"")}_spawnDesktopNotification(t,e,i){if(!1===this.supportDesktopNotification)return;let r={body:e,icon:i};this.newDesktopNotification=new Notification(t,r)}_openURL(t){window.open(t,"_blank")}_saveToLocalStorage(t,e){const i=JSON.parse(localStorage.getItem(t)||"{}");let r=Array();r.push(e),r=r.concat(i),localStorage.setItem(t,JSON.stringify(r))}gc(){if(this.notifications.length>0){let t=this.notifications.filter((t=>!0===t.open));this.notifications=t;let e=new CustomEvent("backend-ai-notification-changed",{});document.dispatchEvent(e)}let t=JSON.parse(localStorage.getItem("backendaiconsole.logs")||"{}");t.length>3e3&&(t=t.slice(0,2999)),this.step=this.notifications.length,localStorage.setItem("backendaiconsole.logs",JSON.stringify(t))}};r([yt({type:String})],fo.prototype,"text",void 0),r([yt({type:String})],fo.prototype,"detail",void 0),r([yt({type:String})],fo.prototype,"url",void 0),r([yt({type:String})],fo.prototype,"message",void 0),r([yt({type:String})],fo.prototype,"requestUrl",void 0),r([yt({type:String})],fo.prototype,"status",void 0),r([yt({type:String})],fo.prototype,"timestamp",void 0),r([yt({type:Object})],fo.prototype,"indicator",void 0),r([yt({type:Array})],fo.prototype,"notifications",void 0),r([yt({type:Array})],fo.prototype,"notificationstore",void 0),r([yt({type:Boolean})],fo.prototype,"active",void 0),r([yt({type:Boolean})],fo.prototype,"supportDesktopNotification",void 0),r([yt({type:Number})],fo.prototype,"step",void 0),r([yt({type:Object})],fo.prototype,"newDesktopNotification",void 0),r([yt({type:Object})],fo.prototype,"options",void 0),fo=r([bt("lablup-notification")],fo);let mo=class extends Ot{constructor(){super(...arguments),this.role="separator",this.vertical=!1}render(){return Z` <slot></slot> `}};mo.styles=[ln(":host{background:var(--divider-color,rgba(0,0,0,.15));height:var(--divider-size,.0625rem);display:block;width:100%}:host([vertical]){width:var(--divider-size,.0625rem);height:100%}"),Un],r([yt({type:String,reflect:!0}),n("design:type",String)],mo.prototype,"role",void 0),r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],mo.prototype,"vertical",void 0),mo=r([bt("wl-divider")],mo);let go=class extends Ot{constructor(){super(...arguments),this.role="banner"}render(){return Z` <div id="content"> <slot name="icon"></slot> <slot></slot> </div> <div id="actions"> <slot name="action"></slot> </div> <wl-divider id="divider"></wl-divider> `}};go.styles=[Un,ln(":host{padding:var(--banner-padding,.375rem);color:var(--banner-color,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));background:var(--banner-bg,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));flex-wrap:wrap;justify-content:flex-end;text-align:left;position:relative}#actions,#content,:host{display:flex;align-items:center;flex-wrap:wrap}::slotted([slot=icon]){margin:var(--banner-icon-margin,0 .75rem 0 0);color:var(--banner-icon-color,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}#content{padding:var(--banner-content-padding,.375rem .75rem);flex-grow:1}#divider{position:absolute;left:0;bottom:0;width:100%}")],r([yt({type:String,reflect:!0}),n("design:type",String)],go.prototype,"role",void 0),go=r([bt("wl-banner")],go);var bo;!function(t){t.INDETERMINATE="indeterminate",t.DETERMINATE="determinate"}(bo||(bo={}));class vo extends Ot{constructor(){super(...arguments),this.mode=bo.INDETERMINATE,this.value=0,this.max=1,this.min=0,this.buffer=0,this.bufferMax=1,this.bufferMin=0,this.role="progressbar"}get progressPerc(){return to(this.value/(this.max-this.min),0,1)}get bufferPerc(){return to(this.buffer/(this.bufferMax-this.bufferMin),0,1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role",this.role)}updateAria(){dn(this,{"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.value,"aria-valuetext":100*this.progressPerc+"%","aria-busy":"true","aria-live":"polite"})}updated(t){super.updated(t),this.updateAria()}}vo.styles=[Un,ln("")],r([yt({type:String,reflect:!0}),n("design:type",String)],vo.prototype,"mode",void 0),r([yt({type:Number}),n("design:type",Number)],vo.prototype,"value",void 0),r([yt({type:Number}),n("design:type",Number)],vo.prototype,"max",void 0),r([yt({type:Number}),n("design:type",Number)],vo.prototype,"min",void 0),r([yt({type:Number}),n("design:type",Number)],vo.prototype,"buffer",void 0),r([yt({type:Number}),n("design:type",Number)],vo.prototype,"bufferMax",void 0),r([yt({type:Number}),n("design:type",Number)],vo.prototype,"bufferMin",void 0),r([yt({type:String,reflect:!0}),n("design:type",String)],vo.prototype,"role",void 0);let yo=class extends vo{render(){return Z`
			${this.bufferPerc>0?Z`
						<div id="buffer" style="transform: scaleX(${this.bufferPerc})"></div>
				  `:""}
			<div id="progress" style="${this.mode===bo.DETERMINATE?`transform: scaleX(${this.progressPerc})`:""}">
				<div id="before"></div>
				<div id="after"></div>
			</div>
		`}};yo.styles=[...vo.styles,ln(":host{height:var(--progress-bar-height,.25rem);background:var(--progress-bar-bg,hsl(var(--shade-300,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,75%))));contain:strict;position:relative;display:block;overflow:hidden}#progress{background:var(--progress-bar-color,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}#buffer{background:var(--progress-bar-buffer-color,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.5))}:host([mode=indeterminate]) #progress #after,:host([mode=indeterminate]) #progress #before{background-color:inherit;position:absolute;height:100%;left:0;top:0;bottom:0;animation-duration:var(--progress-bar-indeterminate-duration,2.1s);animation-timing-function:var(--progress-bar-indeterminate-timing-function,var(--transition-timing-function-standard-curve,cubic-bezier(.4,0,.2,1)));animation-iteration-count:infinite}:host([mode=indeterminate]) #progress #before{animation-name:indeterminate}:host([mode=indeterminate]) #progress #after{animation-name:indeterminate-short;animation-delay:var(--progress-bar-indeterminate-short-delay,1.15s)}#buffer,:host([mode=determinate]) #progress{transition:var(--progress-bar-determinate-transition,transform var(--transition-timing-function-linear,linear));transform-origin:top left;position:absolute;top:0;left:0;height:100%;width:100%}@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}")],yo=r([bt("wl-progress-bar")],yo);let _o=class extends Ot{constructor(){super(...arguments),this.level=1,this.nowrap=!1,this.role="heading"}updated(t){super.updated(t),t.has("level")&&dn(this,{"aria-level":this.level})}render(){return Z` <slot></slot> `}};_o.styles=[Un,ln(':host{margin:var(--title-margin,0 0 .2em);font-family:var(--title-font-family,var(--font-family-sans-serif,"Roboto Condensed",helvetica,sans-serif));font-weight:var(--title-font-weight,var(--font-weight-bold,800));line-height:var(--title-line-height,var(--line-height-m,1.5em));display:block}:host([nowrap]){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;line-height:1.1}:host([level="1"]){font-size:var(--title-font-size-level-1,1.875rem)}:host([level="2"]){font-size:var(--title-font-size-level-2,1.5625rem)}:host([level="3"]){font-size:var(--title-font-size-level-3,1.25rem)}:host([level="4"]){font-size:var(--title-font-size-level-4,1rem)}:host([level="5"]){font-size:var(--title-font-size-level-5,.75rem)}:host([level="6"]){font-size:var(--title-font-size-level-6,.5rem)}')],r([yt({type:Number,reflect:!0}),n("design:type",Number)],_o.prototype,"level",void 0),r([yt({type:Boolean}),n("design:type",Boolean)],_o.prototype,"nowrap",void 0),r([yt({type:String,reflect:!0}),n("design:type",String)],_o.prototype,"role",void 0),_o=r([bt("wl-title")],_o);let wo=class extends Ot{constructor(){super(),this.value=0,this.delay=1e3,this.text="",this.mode="determinate"}static get styles(){return[Ct`
        wl-dialog {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 9000;
          --dialog-height: 80px;
          --dialog-width: 250px;
          --dialog-content-padding: 15px;
        }
      `]}firstUpdated(){this.dialog=this.shadowRoot.querySelector("#app-progress-dialog")}connectedCallback(){super.connectedCallback()}async start(t="determinate"){this.value=0,this.mode=t,await this.updateComplete,this.dialog.show()}set(t,e=""){this.value=t/100,this.text=e,this.value>=1&&this.end(this.delay)}end(t=1e3){0!==t&&(this.delay=t),setTimeout((()=>{this.dialog.hide()}),t)}render(){return Z`
      <wl-dialog id="app-progress-dialog" blockscrolling>
        <wl-title level="5" id="app-progress-text" slot="header">${this.text}</wl-title>
        <div slot="content">
        <wl-progress-bar .mode="${this.mode}" id="app-progress" .value="${this.value}"></wl-progress-bar>
        </div>
      </wl-dialog>
    `}};r([yt({type:Number})],wo.prototype,"value",void 0),r([yt({type:Number})],wo.prototype,"delay",void 0),r([yt({type:String})],wo.prototype,"text",void 0),r([yt({type:String})],wo.prototype,"mode",void 0),r([yt({type:Object})],wo.prototype,"dialog",void 0),wo=r([bt("backend-ai-indicator")],wo);let xo=class extends Ot{constructor(){super(),this.value=0,this.step=0,this.text="",this.mode="determinate",this.pool=Array()}static get styles(){return[]}firstUpdated(){this.dialog=this.shadowRoot.querySelector("#app-progress-dialog")}connectedCallback(){super.connectedCallback()}async start(t="determinate"){this.gc();let e=document.createElement("backend-ai-indicator");return e.value=0,e.text=p("notification.Initializing"),e.mode=t,e.style.bottom=20+90*this.step+"px",document.body.appendChild(e),this.pool.push(e),this.step=this.pool.length,await this.updateComplete,await e.start(),e}removeIndicator(t){let e=this.pool.filter((e=>e===t));if(e.length>0){let t=this.pool.indexOf(e[0]);t>-1&&this.pool.splice(t,1),document.body.removeChild(e[0]),e[0].remove(),console.log("deleted")}}gc(){let t=[];this.pool.forEach((e=>{console.log(e.value),e.value>=1&&t.push(e)})),t.forEach((t=>{setTimeout((()=>{this.removeIndicator(t)}),t.delay+500)}))}render(){return Z`
    `}};r([yt({type:Number})],xo.prototype,"value",void 0),r([yt({type:Number})],xo.prototype,"step",void 0),r([yt({type:String})],xo.prototype,"text",void 0),r([yt({type:String})],xo.prototype,"mode",void 0),r([yt({type:Object})],xo.prototype,"dialog",void 0),r([yt({type:Array})],xo.prototype,"pool",void 0),xo=r([bt("backend-ai-indicator-pool")],xo);var Mo;!function(t){t.CHANGE="change"}(Mo||(Mo={}));class ko extends no{constructor(){super(...arguments),this.checked=!1,this.ariaChecked=this.checked.toString(),this.role="checkbox",this.formElementType="checkbox"}firstUpdated(t){super.firstUpdated(t),this.onClick=this.onClick.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.attachListeners()}updated(t){super.updated(t),this.updateAria(t)}updateAria(t){t.has("checked")&&(this.ariaChecked=this.checked.toString())}attachListeners(){this.listeners.push(vn(this,"click",this.onClick.bind(this)),vn(this,"keydown",this.onKeyDown.bind(this)))}onClick(t){this.disabled?_n(t):this.toggle()}toggle(){this.checked=!this.checked,this.dispatchChangeEvent()}dispatchChangeEvent(){requestAnimationFrame((()=>{this.dispatchEvent(new CustomEvent(Mo.CHANGE,{composed:!0,bubbles:!0,detail:this.checked}))}))}onKeyDown(t){"Space"!==t.code&&"Enter"!==t.code||(this.click(),_n(t))}renderFormElement(){return Z` <input style="display: none;" id="${this.formElementId}" type="${this.formElementType}" ?checked="${this.checked}" ?required="${this.required}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" .value="${this.value}" name="${fi(this.name)}" aria-hidden="true" tabindex="-1"> `}}ko.styles=[...no.styles,ln("")],r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],ko.prototype,"checked",void 0),r([yt({type:String,reflect:!0,attribute:"aria-checked"}),n("design:type",String)],ko.prototype,"ariaChecked",void 0),r([yt({type:String,reflect:!0}),n("design:type",String)],ko.prototype,"role",void 0);class So extends ko{constructor(){super(...arguments),this.indeterminate=!1}toggle(){this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked,this.dispatchChangeEvent()}updateAria(t){(t.has("checked")||t.has("indeterminate"))&&(this.ariaChecked=this.indeterminate?"mixed":this.checked.toString())}}So.styles=[...ko.styles,ln("")],r([yt({type:Boolean,reflect:!0}),n("design:type",Boolean)],So.prototype,"indeterminate",void 0);let Eo=class extends So{render(){return Z` <svg id="checkmark" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 24 24"> <path id="checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path> <line id="indeterminate-path" fill="none" x1="0" y1="12.5" x2="24" y2="12.5"/> </svg> <wl-ripple id="ripple" .target="${this}" focusable overlay unbounded centered initialDuration="200"></wl-ripple> <slot></slot> ${this.renderFormElement()} `}};Eo.styles=[...ko.styles,ln(":host{--_checkbox-bg:var(--checkbox-bg,transparent);--_checkbox-color:var(--checkbox-color,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))));background:var(--_checkbox-bg);color:var(--_checkbox-color);width:var(--checkbox-size,1.25rem);height:var(--checkbox-size,1.25rem);border:var(--checkbox-border-config,.125rem solid) currentColor;border-radius:var(--checkbox-border-radius,.375rem);transition:var(--checkbox-transition,background var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),border-color var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));position:relative;display:inline-flex;align-items:center;justify-content:center;outline:none;-webkit-user-select:none;user-select:none}:host(:not([disabled])){cursor:pointer}:host([checked]),:host([indeterminate]){--_checkbox-bg:var(--checkbox-bg-checked,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_checkbox-color:var(--checkbox-color-checked,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}:host([checked]:not([indeterminate])) #checkmark-path,:host([indeterminate]) #indeterminate-path{stroke-dashoffset:0}:host(:focus),:host(:hover){will-change:border,background}:host(:focus) #checkmark-path,:host(:hover) #checkmark-path{will-change:stroke-dashoffset}:host([disabled]){--_checkbox-bg:var(--checkbox-bg-disabled,transparent);--_checkbox-color:var(--checkbox-color-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));pointer-events:none}:host([disabled][checked]),:host([disabled][indeterminate]){--_checkbox-bg:var(--checkbox-bg-disabled-checked,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))));--_checkbox-color:var(--checkbox-color-disabled-checked,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))))}#checkmark{width:var(--checkbox-checkmark-size,.75rem);height:var(--checkbox-checkmark-size,.75rem)}#checkmark-path,#indeterminate-path{stroke-width:var(--checkbox-checkmark-path-width,.1875rem);stroke:var(--checkbox-checkmark-stroke-color,hsl(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));stroke-dasharray:var(--checkbox-checkmark-path-dasharray,30);stroke-dashoffset:var(--checkbox-checkmark-path-dasharray,30);transition:var(--checkbox-checkmark-transition,stroke-dashoffset var(--transition-duration-medium,.18s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)))}#checkmark-path{transition-delay:var(--checkbox-checkmark-path-delay,50ms)}#ripple{transform:var(--checkbox-ripple-transform,translate(-50%,-50%) scale(1.8))}")],Eo=r([bt("wl-checkbox")],Eo);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ao={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked"},To={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},Io={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150},Co=function(t){function r(e){var n=t.call(this,i(i({},r.defaultAdapter),e))||this;return n.isOpen_=!1,n.animationFrame_=0,n.animationTimer_=0,n.layoutFrame_=0,n.escapeKeyAction_=To.CLOSE_ACTION,n.scrimClickAction_=To.CLOSE_ACTION,n.autoStackButtons_=!0,n.areButtonsStacked_=!1,n.suppressDefaultPressSelector=To.SUPPRESS_DEFAULT_PRESS_SELECTOR,n}return e(r,t),Object.defineProperty(r,"cssClasses",{get:function(){return Ao},enumerable:!0,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return To},enumerable:!0,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return Io},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){}}},enumerable:!0,configurable:!0}),r.prototype.init=function(){this.adapter.hasClass(Ao.STACKED)&&this.setAutoStackButtons(!1)},r.prototype.destroy=function(){this.isOpen_&&this.close(To.DESTROY_ACTION),this.animationTimer_&&(clearTimeout(this.animationTimer_),this.handleAnimationTimerEnd_()),this.layoutFrame_&&(cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=0)},r.prototype.open=function(){var t=this;this.isOpen_=!0,this.adapter.notifyOpening(),this.adapter.addClass(Ao.OPENING),this.runNextAnimationFrame_((function(){t.adapter.addClass(Ao.OPEN),t.adapter.addBodyClass(Ao.SCROLL_LOCK),t.layout(),t.animationTimer_=setTimeout((function(){t.handleAnimationTimerEnd_(),t.adapter.trapFocus(t.adapter.getInitialFocusEl()),t.adapter.notifyOpened()}),Io.DIALOG_ANIMATION_OPEN_TIME_MS)}))},r.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.isOpen_&&(this.isOpen_=!1,this.adapter.notifyClosing(t),this.adapter.addClass(Ao.CLOSING),this.adapter.removeClass(Ao.OPEN),this.adapter.removeBodyClass(Ao.SCROLL_LOCK),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){e.adapter.releaseFocus(),e.handleAnimationTimerEnd_(),e.adapter.notifyClosed(t)}),Io.DIALOG_ANIMATION_CLOSE_TIME_MS))},r.prototype.isOpen=function(){return this.isOpen_},r.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction_},r.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction_=t},r.prototype.getScrimClickAction=function(){return this.scrimClickAction_},r.prototype.setScrimClickAction=function(t){this.scrimClickAction_=t},r.prototype.getAutoStackButtons=function(){return this.autoStackButtons_},r.prototype.setAutoStackButtons=function(t){this.autoStackButtons_=t},r.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},r.prototype.setSuppressDefaultPressSelector=function(t){this.suppressDefaultPressSelector=t},r.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},r.prototype.handleClick=function(t){if(this.adapter.eventTargetMatches(t.target,To.SCRIM_SELECTOR)&&""!==this.scrimClickAction_)this.close(this.scrimClickAction_);else{var e=this.adapter.getActionFromEvent(t);e&&this.close(e)}},r.prototype.handleKeydown=function(t){var e="Enter"===t.key||13===t.keyCode;if(e&&!this.adapter.getActionFromEvent(t)){var i=t.composedPath?t.composedPath()[0]:t.target,r=!this.adapter.eventTargetMatches(i,this.suppressDefaultPressSelector);e&&r&&this.adapter.clickDefaultButton()}},r.prototype.handleDocumentKeydown=function(t){("Escape"===t.key||27===t.keyCode)&&""!==this.escapeKeyAction_&&this.close(this.escapeKeyAction_)},r.prototype.layoutInternal_=function(){this.autoStackButtons_&&this.detectStackedButtons_(),this.detectScrollableContent_()},r.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter.removeClass(Ao.OPENING),this.adapter.removeClass(Ao.CLOSING)},r.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)}))},r.prototype.detectStackedButtons_=function(){this.adapter.removeClass(Ao.STACKED);var t=this.adapter.areButtonsStacked();t&&this.adapter.addClass(Ao.STACKED),t!==this.areButtonsStacked_&&(this.adapter.reverseButtons(),this.areButtonsStacked_=t)},r.prototype.detectScrollableContent_=function(){this.adapter.removeClass(Ao.SCROLLABLE),this.adapter.isContentScrollable()&&this.adapter.addClass(Ao.SCROLLABLE)},r}(re);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Ro(t){return void 0===t&&(t=window),!!function(t){void 0===t&&(t=window);var e=!1;try{var i={get passive(){return e=!0,!1}},r=function(){};t.document.addEventListener("test",r,i),t.document.removeEventListener("test",r,i)}catch(t){e=!1}return e}(t)&&{passive:!0}}const Oo=document.$blockingElements;class Po extends me{constructor(){super(...arguments),this.hideActions=!1,this.stacked=!1,this.heading="",this.scrimClickAction="close",this.escapeKeyAction="close",this.open=!1,this.defaultAction="close",this.actionAttribute="dialogAction",this.initialFocusAttribute="dialogInitialFocus",this.mdcFoundationClass=Co,this.boundLayout=null,this.boundHandleClick=null,this.boundHandleKeydown=null,this.boundHandleDocumentKeydown=null}get primaryButton(){let t=this.primarySlot.assignedNodes();t=t.filter((t=>t instanceof HTMLElement));const e=t[0];return e||null}emitNotification(t,e){const i=new CustomEvent(t,{detail:e?{action:e}:{}});this.dispatchEvent(i)}getInitialFocusEl(){const t=`[${this.initialFocusAttribute}]`,e=this.querySelector(t);if(e)return e;const i=this.primarySlot.assignedNodes({flatten:!0}),r=this.searchNodeTreesForAttribute(i,this.initialFocusAttribute);if(r)return r;const n=this.secondarySlot.assignedNodes({flatten:!0}),o=this.searchNodeTreesForAttribute(n,this.initialFocusAttribute);if(o)return o;const a=this.contentSlot.assignedNodes({flatten:!0});return this.searchNodeTreesForAttribute(a,this.initialFocusAttribute)}searchNodeTreesForAttribute(t,e){for(const i of t)if(i instanceof HTMLElement){if(i.hasAttribute(e))return i;{const t=i.querySelector(`[${e}]`);if(t)return t}}return null}createAdapter(){return Object.assign(Object.assign({},le(this.mdcRoot)),{addBodyClass:()=>document.body.style.overflow="hidden",removeBodyClass:()=>document.body.style.overflow="",areButtonsStacked:()=>this.stacked,clickDefaultButton:()=>{const t=this.primaryButton;t&&t.click()},eventTargetMatches:(t,e)=>!!t&&ae(t,e),getActionFromEvent:t=>{if(!t.target)return"";const e=
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function(t,e){if(t.closest)return t.closest(e);for(var i=t;i;){if(ae(i,e))return i;i=i.parentElement}return null}(t.target,`[${this.actionAttribute}]`);return e&&e.getAttribute(this.actionAttribute)},getInitialFocusEl:()=>this.getInitialFocusEl(),isContentScrollable:()=>{const t=this.contentElement;return!!t&&t.scrollHeight>t.offsetHeight},notifyClosed:t=>this.emitNotification("closed",t),notifyClosing:t=>{this.closingDueToDisconnect||(this.open=!1),this.emitNotification("closing",t)},notifyOpened:()=>this.emitNotification("opened"),notifyOpening:()=>{this.open=!0,this.emitNotification("opening")},reverseButtons:()=>{},releaseFocus:()=>{Oo.remove(this)},trapFocus:t=>{Oo.push(this),t&&t.focus()}})}render(){const t={[Ao.STACKED]:this.stacked};let e=Z``;this.heading&&(e=this.renderHeading());const i={"mdc-dialog__actions":!this.hideActions};return Z`
    <div class="mdc-dialog ${ye(t)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${e}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${ye(i)}">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`}renderHeading(){return Z`
      <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`}firstUpdated(){super.firstUpdated(),this.mdcFoundation.setAutoStackButtons(!0)}connectedCallback(){super.connectedCallback(),this.open&&this.mdcFoundation&&!this.mdcFoundation.isOpen()&&(this.setEventListeners(),this.mdcFoundation.open())}disconnectedCallback(){super.disconnectedCallback(),this.open&&this.mdcFoundation&&(this.removeEventListeners(),this.closingDueToDisconnect=!0,this.mdcFoundation.close(this.currentAction||this.defaultAction),this.closingDueToDisconnect=!1,this.currentAction=void 0,Oo.remove(this))}forceLayout(){this.mdcFoundation.layout()}focus(){const t=this.getInitialFocusEl();t&&t.focus()}blur(){if(!this.shadowRoot)return;const t=this.shadowRoot.activeElement;if(t)t instanceof HTMLElement&&t.blur();else{const t=this.getRootNode(),e=t instanceof Document?t.activeElement:null;e instanceof HTMLElement&&e.blur()}}setEventListeners(){this.boundHandleClick=this.mdcFoundation.handleClick.bind(this.mdcFoundation),this.boundLayout=()=>{this.open&&this.mdcFoundation.layout.bind(this.mdcFoundation)},this.boundHandleKeydown=this.mdcFoundation.handleKeydown.bind(this.mdcFoundation),this.boundHandleDocumentKeydown=this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation),this.mdcRoot.addEventListener("click",this.boundHandleClick),window.addEventListener("resize",this.boundLayout,Ro()),window.addEventListener("orientationchange",this.boundLayout,Ro()),this.mdcRoot.addEventListener("keydown",this.boundHandleKeydown,Ro()),document.addEventListener("keydown",this.boundHandleDocumentKeydown,Ro())}removeEventListeners(){this.boundHandleClick&&this.mdcRoot.removeEventListener("click",this.boundHandleClick),this.boundLayout&&(window.removeEventListener("resize",this.boundLayout),window.removeEventListener("orientationchange",this.boundLayout)),this.boundHandleKeydown&&this.mdcRoot.removeEventListener("keydown",this.boundHandleKeydown),this.boundHandleDocumentKeydown&&this.mdcRoot.removeEventListener("keydown",this.boundHandleDocumentKeydown)}close(){this.open=!1}show(){this.open=!0}}r([wt(".mdc-dialog")],Po.prototype,"mdcRoot",void 0),r([wt('slot[name="primaryAction"]')],Po.prototype,"primarySlot",void 0),r([wt('slot[name="secondaryAction"]')],Po.prototype,"secondarySlot",void 0),r([wt("#contentSlot")],Po.prototype,"contentSlot",void 0),r([wt(".mdc-dialog__content")],Po.prototype,"contentElement",void 0),r([wt(".mdc-container")],Po.prototype,"conatinerElement",void 0),r([yt({type:Boolean})],Po.prototype,"hideActions",void 0),r([yt({type:Boolean}),ge((function(){this.forceLayout()}))],Po.prototype,"stacked",void 0),r([yt({type:String})],Po.prototype,"heading",void 0),r([yt({type:String}),ge((function(t){this.mdcFoundation.setScrimClickAction(t)}))],Po.prototype,"scrimClickAction",void 0),r([yt({type:String}),ge((function(t){this.mdcFoundation.setEscapeKeyAction(t)}))],Po.prototype,"escapeKeyAction",void 0),r([yt({type:Boolean,reflect:!0}),ge((function(t){this.mdcFoundation&&this.isConnected&&(t?(this.setEventListeners(),this.mdcFoundation.open()):(this.removeEventListeners(),this.mdcFoundation.close(this.currentAction||this.defaultAction),this.currentAction=void 0))}))],Po.prototype,"open",void 0),r([yt()],Po.prototype,"defaultAction",void 0),r([yt()],Po.prototype,"actionAttribute",void 0),r([yt()],Po.prototype,"initialFocusAttribute",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Lo=Ct`.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface{text-align:right}.mdc-dialog__title{display:block;margin-top:0;line-height:normal;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);position:relative;flex-shrink:0;box-sizing:border-box;margin:0;padding:0 24px 9px;border-bottom:1px solid transparent}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-dialog[dir=rtl] .mdc-dialog__title,[dir=rtl] .mdc-dialog .mdc-dialog__title{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{padding-bottom:15px}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit);flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-dialog[dir=rtl] .mdc-dialog__button,[dir=rtl] .mdc-dialog .mdc-dialog__button{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog-scroll-lock{overflow:hidden}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*)[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog[dir=rtl] #actions ::slotted(*),[dir=rtl] .mdc-dialog #actions ::slotted(*){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:1e-9px;margin-top:12px}`;let Bo=class extends Po{static get styles(){return[Lo,Ct`
    .mdc-dialog .mdc-dialog__content {
      padding: 0;
    }
    .mdc-dialog .mdc-dialog__container,
    .mdc-dialog .mdc-dialog__surface {
      height: var(--mdc-dialog-height, auto)!important;
      width: var(--mdc-dialog-width, auto)!important;
    }
    `]}};Bo=r([bt("mwc-dialog")],Bo);
/**
 @license
 Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
 http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
 found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
 part of the polymer project is also subject to an additional IP rights grant
 found at http://polymer.github.io/PATENTS.txt
 */
const No=Ct`
    /* Most common used flex styles*/
    .layout.horizontal,
    .layout.vertical {
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
    }

    .layout.inline {
      display: -ms-inline-flexbox;
      display: -webkit-inline-flex;
      display: inline-flex;
    }

    .layout.horizontal {
      -ms-flex-direction: row;
      -webkit-flex-direction: row;
      flex-direction: row;
    }

    .layout.vertical {
      -ms-flex-direction: column;
      -webkit-flex-direction: column;
      flex-direction: column;
    }

    .layout.wrap {
      -ms-flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
    }

    .layout.no-wrap {
      -ms-flex-wrap: nowrap;
      -webkit-flex-wrap: nowrap;
      flex-wrap: nowrap;
    }

    .layout.center,
    .layout.center-center {
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    .layout.center-justified,
    .layout.center-center {
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
    }

    .flex {
      -ms-flex: 1 1 0.000000001px;
      -webkit-flex: 1;
      flex: 1;
      -webkit-flex-basis: 0.000000001px;
      flex-basis: 0.000000001px;
    }

    .flex-auto {
      -ms-flex: 1 1 auto;
      -webkit-flex: 1 1 auto;
      flex: 1 1 auto;
    }

    .flex-none {
      -ms-flex: none;
      -webkit-flex: none;
      flex: none;
    }
  `,$o=(Ct`
    .layout.horizontal-reverse,
    .layout.vertical-reverse {
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
    }

    .layout.horizontal-reverse {
      -ms-flex-direction: row-reverse;
      -webkit-flex-direction: row-reverse;
      flex-direction: row-reverse;
    }

    .layout.vertical-reverse {
      -ms-flex-direction: column-reverse;
      -webkit-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }

    .layout.wrap-reverse {
      -ms-flex-wrap: wrap-reverse;
      -webkit-flex-wrap: wrap-reverse;
      flex-wrap: wrap-reverse;
    }
  `,Ct`

    /**
     * Alignment in cross axis.
     */
    .layout.start {
      -ms-flex-align: start;
      -webkit-align-items: flex-start;
      align-items: flex-start;
    }

    .layout.center,
    .layout.center-center {
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    .layout.end {
      -ms-flex-align: end;
      -webkit-align-items: flex-end;
      align-items: flex-end;
    }

    .layout.baseline {
      -ms-flex-align: baseline;
      -webkit-align-items: baseline;
      align-items: baseline;
    }

    /**
     * Alignment in main axis.
     */
    .layout.start-justified {
      -ms-flex-pack: start;
      -webkit-justify-content: flex-start;
      justify-content: flex-start;
    }

    .layout.center-justified,
    .layout.center-center {
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
    }

    .layout.end-justified {
      -ms-flex-pack: end;
      -webkit-justify-content: flex-end;
      justify-content: flex-end;
    }

    .layout.around-justified {
      -ms-flex-pack: distribute;
      -webkit-justify-content: space-around;
      justify-content: space-around;
    }

    .layout.justified {
      -ms-flex-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
    }

    /**
     * Self alignment.
     */
    .self-start {
      -ms-align-self: flex-start;
      -webkit-align-self: flex-start;
      align-self: flex-start;
    }

    .self-center {
      -ms-align-self: center;
      -webkit-align-self: center;
      align-self: center;
    }

    .self-end {
      -ms-align-self: flex-end;
      -webkit-align-self: flex-end;
      align-self: flex-end;
    }

    .self-stretch {
      -ms-align-self: stretch;
      -webkit-align-self: stretch;
      align-self: stretch;
    }

    .self-baseline {
      -ms-align-self: baseline;
      -webkit-align-self: baseline;
      align-self: baseline;
    }

    /**
     * multi-line alignment in main axis.
     */
    .layout.start-aligned {
      -ms-flex-line-pack: start; /* IE10 */
      -ms-align-content: flex-start;
      -webkit-align-content: flex-start;
      align-content: flex-start;
    }

    .layout.end-aligned {
      -ms-flex-line-pack: end; /* IE10 */
      -ms-align-content: flex-end;
      -webkit-align-content: flex-end;
      align-content: flex-end;
    }

    .layout.center-aligned {
      -ms-flex-line-pack: center; /* IE10 */
      -ms-align-content: center;
      -webkit-align-content: center;
      align-content: center;
    }

    .layout.between-aligned {
      -ms-flex-line-pack: justify; /* IE10 */
      -ms-align-content: space-between;
      -webkit-align-content: space-between;
      align-content: space-between;
    }

    .layout.around-aligned {
      -ms-flex-line-pack: distribute; /* IE10 */
      -ms-align-content: space-around;
      -webkit-align-content: space-around;
      align-content: space-around;
    }
  `),zo=Ct`
    .flex,
    .flex-1 {
      -ms-flex: 1 1 0.000000001px;
      -webkit-flex: 1;
      flex: 1;
      -webkit-flex-basis: 0.000000001px;
      flex-basis: 0.000000001px;
    }

    .flex-2 {
      -ms-flex: 2;
      -webkit-flex: 2;
      flex: 2;
    }

    .flex-3 {
      -ms-flex: 3;
      -webkit-flex: 3;
      flex: 3;
    }

    .flex-4 {
      -ms-flex: 4;
      -webkit-flex: 4;
      flex: 4;
    }

    .flex-5 {
      -ms-flex: 5;
      -webkit-flex: 5;
      flex: 5;
    }

    .flex-6 {
      -ms-flex: 6;
      -webkit-flex: 6;
      flex: 6;
    }

    .flex-7 {
      -ms-flex: 7;
      -webkit-flex: 7;
      flex: 7;
    }

    .flex-8 {
      -ms-flex: 8;
      -webkit-flex: 8;
      flex: 8;
    }

    .flex-9 {
      -ms-flex: 9;
      -webkit-flex: 9;
      flex: 9;
    }

    .flex-10 {
      -ms-flex: 10;
      -webkit-flex: 10;
      flex: 10;
    }

    .flex-11 {
      -ms-flex: 11;
      -webkit-flex: 11;
      flex: 11;
    }

    .flex-12 {
      -ms-flex: 12;
      -webkit-flex: 12;
      flex: 12;
    }`,Fo=Ct`
    .block {
      display: block;
    }

    [hidden] {
      display: none !important;
    }

    .invisible {
      visibility: hidden !important;
    }

    .relative {
      position: relative;
    }

    .fit {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    body.fullbleed {
      margin: 0;
      height: 100vh;
    }

    .scroll {
      -webkit-overflow-scrolling: touch;
      overflow: auto;
    }

    /* fixed position */
    .fixed-bottom,
    .fixed-left,
    .fixed-right,
    .fixed-top {
      position: fixed;
    }

    .fixed-top {
      top: 0;
      left: 0;
      right: 0;
    }

    .fixed-right {
      top: 0;
      right: 0;
      bottom: 0;
    }

    .fixed-bottom {
      right: 0;
      bottom: 0;
      left: 0;
    }

    .fixed-left {
      top: 0;
      bottom: 0;
      left: 0;
    }
  `;let jo=class extends Ot{constructor(){super(),this.fixed=!1,this.narrowLayout=!1,this.scrollable=!1,this.backdrop=!1,this.noclosebutton=!1,this.persistent=!1,this.blockscrolling=!1,this.hideActions=!0,this.open=!1,this.type="normal"}static get styles(){return[Se,No,$o,Ct`
        mwc-dialog {
          --mdc-dialog-min-width: var(--component-min-width, auto);
          --mdc-dialog-max-width: var(--component-max-width, 100%);
          --mdc-dialog-max-height: var(--component-max-height, calc(100vh - 45px));
          --mdc-dialog-width: var(--component-width, auto);
          --mdc-dialog-height: var(--component-height, auto);
          --mdc-typography-body1-font-family: var(--general-font-family);
          --mdc-typography-body1-font-color: black;
          --mdc-typography-headline6-font-family: var(--general-font-family);
          --mdc-typography-headline6-font-color: black;
          --mdc-shape-medium: 10px;
        }

        mwc-dialog > div.card {
          padding:0;
          margin:0;
        }

        mwc-dialog > div.card > h3 {
          background-color: var(--general-dialog-background-color, #ffffff);
        }

        mwc-dialog.warning h3 {
          color: red;
        }

        mwc-dialog div.content {
          padding: var(--component-padding, 15px);
          font-size: var(--component-font-size, 14px);
          word-break: keep-all;
          overflow-x: hidden;
        }

        mwc-dialog div.footer {
          padding: 5px 15px 15px 15px;
        }

        mwc-dialog[narrow] div.content,
        mwc-dialog[narrow] div.footer {
          padding: 0;
          margin: 0;
        }

        mwc-dialog[scrollable]::slotted([slot="content"]),
        mwc-dialog[scrollable] div.content-area {
          overflow-y: scroll; /* Has to be scroll (not auto) to get smooth scrolling on iOS */
          -webkit-overflow-scrolling: touch;
          max-height: calc(100vh - 120px);
        }

        mwc-dialog div.content h4 {
          font-size: 14px;
          padding: 5px 15px 5px 12px;
          margin: 0 0 10px 0;
          display: block;
          height: 20px;
          border-bottom: 1px solid #DDD;
        }
      `]}firstUpdated(){this.open=this.dialog.open,this.persistent&&(this.dialog.scrimClickAction=""),this.dialog.addEventListener("opened",(()=>{this.open=this.dialog.open})),this.dialog.addEventListener("closed",(t=>{"dialog"===t.target.id&&"action"in t.detail&&"persistent"===t.detail.action?this.show():this.open=this.dialog.open}))}connectedCallback(){super.connectedCallback()}_hideDialog(){this.dialog.close()}show(){this.dialog.show()}hide(){this.dialog.close()}render(){return Z`
      <mwc-dialog id="dialog"
                    ?fixed="${this.fixed}"
                    ?narrow="${this.narrowLayout}"
                    ?backdrop="${this.backdrop}"
                    ?persistent="${this.persistent}"
                    ?scrollable="${this.scrollable}"
                    blockscrolling="${this.blockscrolling}"
                    hideActions="${this.hideActions}"
                    style="padding:0;" class="${this.type}">
        <div elevation="1" class="card" style="margin: 0;padding:0;">
          <h3 class="horizontal center layout" style="font-weight:bold">
            <span><slot name="title"></slot></span>
            <div class="flex"></div>
            <slot name="action"></slot>
            ${this.noclosebutton?Z``:Z`
            <mwc-icon-button icon="close" fab flat inverted @click="${()=>this._hideDialog()}">
            </mwc-icon-button>
            `}
          </h3>
          <div class="content content-area">
            <slot name="content"></slot>
          </div>
          <div class="footer horizontal flex layout">
            <slot name="footer"></slot>
          </div>
        </div>
      </mwc-dialog>
      `}};r([yt({type:Boolean})],jo.prototype,"fixed",void 0),r([yt({type:Boolean})],jo.prototype,"narrowLayout",void 0),r([yt({type:Boolean})],jo.prototype,"scrollable",void 0),r([yt({type:Boolean})],jo.prototype,"backdrop",void 0),r([yt({type:Boolean})],jo.prototype,"noclosebutton",void 0),r([yt({type:Boolean})],jo.prototype,"persistent",void 0),r([yt({type:Boolean})],jo.prototype,"blockscrolling",void 0),r([yt({type:Boolean})],jo.prototype,"hideActions",void 0),r([yt({type:Boolean})],jo.prototype,"open",void 0),r([yt({type:String})],jo.prototype,"type",void 0),r([wt("#dialog")],jo.prototype,"dialog",void 0),jo=r([bt("backend-ai-dialog")],jo);class Do{static relieve(t){if(void 0===t)return"Problem occurred.";if(console.log("Error:",t),!0===globalThis.backendaiconsole.debug)return t;if(this.errorMessageTable.hasOwnProperty(t))return p(this.errorMessageTable[t]);for(const e of Object.keys(this.regexTable))if(RegExp(e).test(t))return p(this.regexTable[e]);return t}}Do.errorMessageTable={"Cannot read property 'map' of null":"error.APINotSupported","TypeError: NetworkError when attempting to fetch resource.":"error.NetworkConnectionFailed","Login failed. Check login information.":"error.LoginFailed","User credential mismatch.":"error.LoginFailed","Authentication failed. Check information and manager status.":"error.AuthenticationFailed","Too many failed login attempts":"error.TooManyLoginFailures","server responded failure: 400 Bad Request - The virtual folder already exists with the same name.":"error.VirtualFolderAlreadyExist","400 Bad Request - The virtual folder already exists with the same name.":"error.VirtualFolderAlreadyExist","server responded failure: 400 Bad Request - You cannot create more vfolders.":"error.MaximumVfolderCreation","server responded failure: 400 Bad Request - Missing or invalid API parameters. (You cannot create more vfolders.)":"error.MaximumVfolderCreation","server responded failure: 412 Precondition Failed - You have reached your resource limit.":"error.ReachedResourceLimit","Cannot read property 'split' of undefined":"error.UserHasNoGroup"},Do.regexTable={"\\w*not found matched token with email\\w*":"error.InvalidSignupToken","\\w*Access key not found\\w*":"error.LoginInformationMismatch","\\w*401 Unauthorized - Credential/signature mismatch\\w*":"error.LoginInformationMismatch",'integrity error: duplicate key value violates unique constraint "pk_resource_presets"[\\n]DETAIL:  Key \\(name\\)=\\([\\w]+\\) already exists.[\\n]':"error.ResourcePolicyAlreadyExist",'integrity error: duplicate key value violates unique constraint "pk_scaling_groups"[\\n]DETAIL:  Key \\(name\\)=\\([\\w]+\\) already exists.[\\n]':"error.ScalingGroupAlreadyExist",'integrity error: duplicate key value violates unique constraint "uq_users_username"[\\n]DETAIL:  Key \\(username\\)=\\([\\w]+\\) already exists.[\\n]':"error.UserNameAlreadyExist","server responded failure: 400 Bad Request - Missing or invalid API parameters. (Your resource quota is exceeded. (cpu=24 mem=512g cuda.shares=80))":"error.ResourceLimitExceed",'integrity error: update or delete on table "keypair_resource_policies" violates foreign key constraint "fk_keypairs_resource_policy_keypair_resource_policies" on table "keypairs"[\\n]DETAIL:  Key \\(name\\)=\\([\\w]+\\) is still referenced from table "keypairs".[\\n]':"error.ResourcePolicyStillReferenced","Your resource request is smaller than the minimum required by the image. (\\w*)":"error.SmallerResourceThenImageRequires"};let qo=class extends Ot{constructor(){super(),this.tosEntryURL="/resources/documents/terms-of-service.en.html",this.tosEntry="terms-of-service",this.tosContent="",this.tosLanguage="en",this.tosLanguages=[{code:"ko",text:p("language.Korean")},{code:"en",text:p("language.English")}],this.title="",this.show=!1,this.approved=!1,this.block=!1,this.approveCheckbox=Object(),this.dialog=Object()}static get styles(){return[Se,No,$o,zo,Fo,Ct`
        @media screen and (max-width: 669px) {
          backend-ai-dialog.terms-of-service-dialog {
            --component-width: 85% !important;
            --component-height: 80vh;
          }
        }

        @media screen and (min-width: 670px) {
          backend-ai-dialog.terms-of-service-dialog {
            --component-width: 650px !important;
            --component-height: 80vh;
          }
        }

        mwc-select {
          width: 100%;
          font-family: var(--general-font-family);
          --mdc-typography-subtitle1-font-family: var(--general-font-family);
          --mdc-theme-primary: var(--general-sidebar-color);
          --mdc-select-fill-color: transparent;
          --mdc-select-label-ink-color: rgba(0, 0, 0, 0.75);
          --mdc-select-focused-dropdown-icon-color: var(--general-sidebar-color);
          --mdc-select-disabled-dropdown-icon-color: var(--general-sidebar-color);
          --mdc-select-idle-line-color: rgba(0, 0, 0, 0.42);
          --mdc-select-hover-line-color: var(--general-sidebar-color);
          --mdc-select-outlined-idle-border-color: var(--general-sidebar-color);
          --mdc-select-outlined-hover-border-color: var(--general-sidebar-color);
          --mdc-theme-surface: white;
          --mdc-list-vertical-padding: 5px;
          --mdc-list-side-padding: 25px;
          --mdc-list-item__primary-text: {
            height: 20px;
          };
        }
      `]}tos_contents(){return Z`
    `}render(){return Z`
      <backend-ai-dialog id="terms-of-service-dialog" class="terms-of-service-dialog" fixed blockscrolling persistent scrollable>
        <span slot="title">${this.title}</span>
        <div slot="action" class="horizontal end-justified center flex layout">
          ${this.tosLanguages?Z`
            <mwc-select id="select-language" label="${p("language.Language")}"
              @change=${()=>this.changeLanguage()}>
              ${this.tosLanguages.map((t=>Z`
                <mwc-list-item value="${t.text}" ?selected="${this.tosLanguage===t.code}">${t.text}</mwc-list-item>
              `))}
            </mwc-select>
          `:Z``}
        </div>
        <div slot="content">
          <div id="terms-of-service-dialog-content"></div>
          <div class="horizontal end-justified flex layout">
            <div class="flex"></div>
            <mwc-button
                unelevated
                id="dismiss-button"
                label=${rt("button.Dismiss")}
                @click="${()=>{this.close()}}"></mwc-button>
          </div>
        </div>
      </backend-ai-dialog>
    `}firstUpdated(){this.notification=globalThis.lablupNotification,this.dialog=this.shadowRoot.querySelector("#terms-of-service-dialog"),this.dialog.addEventListener("didShow",(()=>{this._syncOpenState()})),this.dialog.addEventListener("didHide",(()=>{this._syncOpenState()})),this.block&&(this.dialog.backdrop=!0),this.show&&this._showTOSdialog()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}_syncOpenState(){this.show=this.dialog.open}async open(){await this.updateComplete,this._showTOSdialog()}close(){this.show=!1,this._hideTOSdialog()}changeLanguage(){let t=this.shadowRoot.querySelector("#select-language").value;this.tosContent="",this.tosLanguage=this.tosLanguages.filter((e=>e.text===t)).map((t=>t.code)).toString(),this._showTOSdialog(!0)}async sendRequest(t){let e,i;try{"GET"==t.method&&(t.body=void 0),e=await fetch(t.uri,t);let r=e.headers.get("Content-Type");if(i=r.startsWith("application/json")||r.startsWith("application/problem+json")?await e.json():r.startsWith("text/")?await e.text():await e.blob(),!e.ok)throw i}catch(t){console.log(t)}return i}_showTOSdialog(t=!1){if("default"===this.tosLanguage&&globalThis.backendaioptions.exists("current_language")&&(this.tosLanguage=globalThis.backendaioptions.get("current_language")),["ko","en"].includes(this.tosLanguage)||(this.tosLanguage="en"),this.tosEntryURL="/resources/documents/"+this.tosEntry+"."+this.tosLanguage+".html",""==this.tosContent){let e={method:"GET",uri:this.tosEntryURL,body:JSON.stringify({mode:"dialog"})};this.sendRequest(e).then((e=>{this.tosContent=void 0!==e?e:"",this.shadowRoot.querySelector("#terms-of-service-dialog-content").innerHTML=this.tosContent,this.show=!0,!1===t&&this.dialog.show()})).catch((t=>{console.log(t),t&&t.message&&(this.notification.text=Do.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t)),this.shadowRoot.querySelector("#terms-of-service-dialog-content").innerHTML="Problem found while loading contents. Please try again later."}))}else this.show=!0,!1===t&&this.dialog.show()}_hideTOSdialog(){this.show=!1,this.dialog.hide()}_changeApproved(){return!0===this.approveCheckbox.checked?(this.show=!1,this.dialog.hide(),void(this.approved=!0)):void(this.approved=!1)}};r([yt({type:String})],qo.prototype,"tosEntryURL",void 0),r([yt({type:String})],qo.prototype,"tosEntry",void 0),r([yt({type:String})],qo.prototype,"tosContent",void 0),r([yt({type:String})],qo.prototype,"tosLanguage",void 0),r([yt({type:Array})],qo.prototype,"tosLanguages",void 0),r([yt({type:String})],qo.prototype,"title",void 0),r([yt({type:Boolean})],qo.prototype,"show",void 0),r([yt({type:Boolean})],qo.prototype,"approved",void 0),r([yt({type:Boolean})],qo.prototype,"block",void 0),r([yt({type:Object})],qo.prototype,"notification",void 0),r([yt({type:Object})],qo.prototype,"approveCheckbox",void 0),r([yt({type:Object})],qo.prototype,"dialog",void 0),qo=r([bt("lablup-terms-of-service")],qo);const Uo=[Se,Ct`
    .loading-background {
      transition: all 0.3s linear;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("/resources/images/loading-background-large.jpg");
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: top left;
    }

    .loading-background[inactive] {
      display: none;
    }

    .hidden {
      display: none;
    }

    .visuallyhidden {
      opacity: 0;
    }

    mwc-top-app-bar-fixed {
      --mdc-typography-headline6-font-family: var(--general-font-family);
      --mdc-typography-font-family: var(--general-font-family);
    }

    .site-name {
      text-align: center;
      margin-left: 0;
      margin-right: auto;
      line-height: 16px;
      font-size: 16px;
      font-weight: 100;
      color: var(--general-sidebar-topbar-color, #efefef);
      font-family: var(--general-font-family);
    }

    .site-name > .bold {
      font-weight: 400;
    }

    .mini-ui .site-name {
      display: none;
    }

    .vertical-line {
      width: 1px; /* Line width */
      background-color: #dbdbdb; /* Line color */
      height: 100%;
      float: left;
      margin-top: 10px;
    }

    .drawer-menu {
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;
      will-change: transform;
      background-color: var(--general-sidebar-background-color, #fafafa);
      scrollbar-width: none;
    }

    .drawer-menu .portrait-bar {
      padding-left: 0 !important;
      background-color: transparent;
      color: var(--general-sidebar-topbar-color);
      height: 80px;
      max-width: 250px; /* prevent sidebar from expanding over its width limit */
    }

    .drawer-menu h3 {
      height: 12px;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      padding: 5px 15px 10px 0;
      margin: 20px 25px 20px 25px;
      display: block;
      color: var(--general-sidebar-h3-color);
      border-bottom: var(--general-sidebar-h3-border-color);
    }

    #sidebar-menu {
      height:calc(100vh - 280px);
    }

    .mini-ui #sidebar-menu {
      height:calc(100vh - 226px)!important;
    }

    mwc-list.sidebar {
      cursor: pointer;
      color: var(--general-sidebar-color, #949494);
      --mdc-list-side-padding: 32px;
    }

    mwc-list.sidebar mwc-list-item {
      --mdc-theme-primary: var(--general-sidebar-selected-color, #949494);
      --mdc-theme-text-primary-on-background: var(--general-sidebar-color, #949494);
      --mdc-list-item-graphic-margin: 15px;
      height: 36px;
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 14px;
    }

    mwc-list.sidebar > mwc-list-item > i {
      color: #949494;
      font-size: 17px;
      padding-top: 5px;
    }

    mwc-list.sidebar mwc-list-item[selected] {
      color: var(--general-sidebar-selected-color, #949494);
      background: var(--general-sidebar-selected-background-color, #23252b);
      border-left: var(--general-sidebar-selected-border-left);
      padding-left: 29px; /* 32px - 3px */
      border-right: 0;
      padding-right: 11px;
      font-weight: 900;
    }

    mwc-list.sidebar mwc-list-item[selected] > i {
      color: inherit;
    }

    mwc-list.sidebar mwc-list-item[disabled],
    mwc-list.sidebar mwc-list-item[disabled] mwc-icon {
      --mdc-theme-on-surface: #888888;
      color: #888888 !important;
    }

    .mini-ui mwc-list.sidebar mwc-list-item {
      --mdc-list-item-graphic-margin: 0;
    }

    #app-body {
      --mdc-drawer-background-color: var(--sidebar-background-color, var(--general-sidebar-background-color, #fafafa));
      --mdc-drawer-border-left: 0;
      --mdc-drawer-border-right: 0;
    }

    app-drawer-layout:not([narrow]) [drawer-toggle] {
      display: none;
    }

    .drawer-menu footer,
    footer#short-height {
      bottom: 0;
      color: var(--general-sidebar-footer-color, #aaaaaa);
      background-color: var(--general-sidebar-background-color);
      margin: 0;
      padding-bottom: 5px;
      line-height: 1;
      font-size: 10px;
    }

    .drawer-menu footer a,
    footer#short-height a {
      color: var(--general-sidebar-footer-color, #aaaaaa) !important;
    }

    mwc-menu#dropdown-menu {
      position: relative;
      left: 170px;
      top: 20px;
    }

    mwc-button {
      margin: auto 10px;
      background-image: none;
      --mdc-theme-primary: var(--general-button-background-color);
      --mdc-on-theme-primary: var(--general-button-background-color);
    }

    mwc-button[unelevate--mdc-theme-primary] {
      : var(--general-button-background-color);
      --mdc-on-theme-primary: var(--general-button-background-color);
    }

    .page {
      display: none;
    }

    .page[active] {
      display: block;
    }

    .sidepanel {
      display: none;
    }

    .sidepanel[active] {
      display: block;
    }

    #content-body {
      background-color: var(--general-background-color, #ffffff);
      color: var(--general-sidepanel-color, #fafafa);
      --mdc-drawer-background-color: var(--sidepanel-background-color, var(--general-sidepanel-background-color, #fafafa));
    }

    .sidepanel-drawer {
      border-right: 1px solid #cccccc;
      height: 100vh;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;
      will-change: transform;
    }

    wl-progress-spinner {
      --progress-spinner-size: 48px;
      --progress-spinner-stroke-width: 12px;
      width: 48px;
      height: 48px;
      position: fixed;
      top: calc(50vh - 24px);
    }

    mwc-circular-progress {
      width: 48px;
      height: 48px;
      position: fixed;
      --mdc-theme-primary: #e91e63;
      top: calc(50vh - 24px);
    }

    @media screen and (max-width: 899px) {
      wl-progress-spinner {
        left: calc(50% - 24px);
      }

      mwc-circular-progress {
        left: calc(50% - 24px);
      }
    }

    @media screen and (min-width: 900px) {
      wl-progress-spinner {
        left: calc(50% + 71px);
      }

      .mini-ui wl-progress-spinner {
        left: calc(50% + 29px);
      }

      mwc-circular-progress {
        left: calc(50% + 71px);
      }

      .mini-ui mwc-circular-progress {
        left: calc(50% + 29px);
      }
    }

    .draggable {
      -webkit-user-select: none !important;
      -webkit-app-region: drag !important;
    }

    .drawer-menu footer,
    footer#short-height {
      width: 250px;
    }

    mwc-tab {
      color: #ffffff;
    }

    mwc-menu {
      font-family: var(--general-font-family);
      --mdc-typography-subtitle1-font-family: var(--general-font-family);
    }

    span.full_name, mwc-select {
      font-weight: bold;
    }

    mwc-select#group-select {
      font-family: var(--general-font-family);
      --mdc-typography-subtitle1-font-family: var(--general-font-family);
      --mdc-typography-subtitle1-font-size: 14px;
      --mdc-typography-subtitle1-font-color: black;
      --mdc-typography-subtitle1-font-weight: 400;
      --mdc-typography-subtitle1-line-height: 16px;
      --mdc-theme-primary: transparent;
      --mdc-select-idle-line-color: transparent;
      --mdc-select-hover-line-color: transparent;
      --mdc-select-outlined-idle-border-color: rgba(255, 255, 255, 0.42);
      --mdc-select-outlined-hover-border-color: rgba(255, 255, 255, 0.87);
      --mdc-select-outlined-disabled-border-color: rgba(255, 255, 255, 0.87);
      --mdc-select-fill-color: transparent;
      --mdc-select-disabled-fill-color: transparent;
      --mdc-select-ink-color: black;
      --mdc-select-label-ink-color: black;
      --mdc-select-focused-label-color: rgba(24, 24, 24, 1.0);
      --mdc-select-disabled-ink-color: rgba(255, 255, 255, 1.0);
      --mdc-select-dropdown-icon-color: #747474;
      --mdc-select-focused-dropdown-icon-color: rgba(255, 255, 255, 0.42);
      --mdc-select-disabled-dropdown-icon-color: #747474;
    }

    mwc-multi-select {
      width: 135px;
      min-width: 135px;
      font-family: var(--general-font-family);
      --mdc-typography-subtitle1-font-family: var(--general-font-family);
      --mdc-typography-subtitle1-font-size: 14px;
      --mdc-typography-subtitle1-font-color: white;
      --mdc-typography-subtitle1-font-weight: 400;
      --mdc-typography-subtitle1-line-height: 16px;
      --mdc-theme-primary: rgba(255, 255, 255, 1.0);
      --mdc-select-idle-line-color: transparent;
      --mdc-select-hover-line-color: transparent;
      --mdc-select-outlined-idle-border-color: rgba(255, 255, 255, 0.42);
      --mdc-select-outlined-hover-border-color: rgba(255, 255, 255, 0.87);
      --mdc-select-outlined-disabled-border-color: rgba(255, 255, 255, 0.87);
      --mdc-select-fill-color: transparent;
      --mdc-select-disabled-fill-color: transparent;
      --mdc-select-ink-color: rgba(255, 255, 255, 1.0);
      --mdc-select-label-ink-color: rgba(255, 255, 255, 1.0);
      --mdc-select-focused-label-color: rgba(24, 24, 24, 1.0);
      --mdc-select-disabled-ink-color: rgba(255, 255, 255, 1.0);
      --mdc-select-dropdown-icon-color: rgba(255, 255, 255, 1.0);
      --mdc-select-focused-dropdown-icon-color: rgba(255, 255, 255, 0.42);
      --mdc-select-disabled-dropdown-icon-color: rgba(255, 255, 255, 0.87);
      --mdc-theme-surface: white;
      --mdc-list-vertical-padding: 5px;
      --mdc-list-side-padding: 10px;
      --mdc-menu-item-height: 28px;
      --mdc-list-item__primary-text: {
        height: 20px;
        color: #222222;
      };
      --mdc-select-min-width: 100px;
    }

    mwc-list-item[activated] {
      color: black;
      background-color: #e1e1e1;
    }

    mwc-list-item > mwc-icon {
      font-size: 20px;
      margin: 5px;
    }

    mwc-icon.dropdown-menu {
      color: #242424;
      padding-right: 10px;
    }

    mwc-textfield {
      width: 100%;
    }

    mwc-textarea {
      width: 100%;
    }

    wl-popover-card {
      padding: 5px;
    }

    backend-ai-dialog wl-textfield,
    wl-dialog wl-textfield {
      --input-font-family: var(--general-font-family);
      --input-color-disabled: #222222;
      --input-label-color-disabled: #222222;
      --input-label-font-size: 12px;
      --input-border-style-disabled: 1px solid #cccccc;
    }

    mwc-list-item {
      font-family: var(--general-font-family);
      --mdc-typography-subtitle1-font-family: var(--general-font-family);
      --mdc-typography-body2-font-family: var(--general-font-family);
      font-weight: 400;
    }

    a.email:hover {
      color: #29b6f6;
    }

    mwc-menu.user-menu {
      --mdc-theme-surface: #f1f1f1;
      --mdc-menu-item-height: 28px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }

    mwc-menu.user-menu mwc-list-item {
      font-size: 14px;
    }


    mwc-icon-button.side-menu {
      --mdc-icon-button-size: 44px;
      --mdc-theme-text-disabled-on-light: var(--paper-grey-800);
    }

    #sidebar-navbar-footer mwc-icon-button {
      --mdc-theme-text-disabled-on-light: var(--paper-grey-800);
    }

    .mini-ui .full-menu {
      display: none;
      margin: 0 !important;
    }

    .mini-menu {
      display: none;
    }

    .mini-ui .mini-menu {
      display: block;
    }

    .sidebar-footer {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      line-height: 16px;
      font-size: 12px;
      font-weight: 100;
      font-family: var(--general-font-family);
    }

    .portrait-canvas {
      margin-left: 18px;
      border-radius: 8px;
      min-width: 48px; /* only apply this style feature if it's Backend.AI logo */
      width: 48px;
      height: 48px;
      background-color: #ffffff;
      background-image: url("/manifest/backend.ai-brand-simple.svg");
      background-repeat: no-repeat;
      background-size: 36px 36px;
      background-position: center center;
    }

    .mini-ui .portrait-canvas {
      margin-left: 18px;
      padding-right: 0;
    }

    .drawer-menu::-webkit-scrollbar {
      display: none !important;
      -webkit-appearance: none;
      width: 0 !important;
      height: 0;
    }

    footer#short-height {
      display: none;
    }

    #portrait-bar {
      height: 64px;
      padding-top: 15px;
    }

    #content-body {
      height: 100vh;
    }

    #main-toolbar {
      background-color: var(--general-menu-background-color);
      color: var(--general-menu-color);
      z-index: 1;
      overflow: visible;
      --mdc-theme-on-primary: black;
      --mdc-theme-primary: rgba(247, 246, 246, 1);
      border-bottom: 1px solid #dbdbdb;
    }

    #main-toolbar > p {
      padding: 10px;
      margin: auto;
      font-size: 14px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #090909;
    }

    #content {
      padding-top: 0;
    }

    #sidebar-navbar-footer {
      right: 0;
      left: 0;
      bottom: 0 !important; /* Workaround to prevent miscalculated height */
      text-align: center;
      height: 100px;
      background-color: var(--general-navbar-footer-background-color);
      color: var(--general-sidebar-navbar-footer-color);
    }

    @supports ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))) {
      #main-toolbar {
        /*-webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);*/
      }

      #sidebar-navbar-footer {
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);
        border: 0;
      }
    }

    @media screen and (max-width: 449px) {
      #sidebar-navbar-footer {
        background-color: var(--general-navbar-footer-background-color);
        color: var(--general-sidebar-navbar-footer-color);
      }
      div#center-area, span.email, span.full_name, span.log_out {
        display: none;
      }
      mwc-menu#dropdown-menu {
        position: relative;
        left: 12vw;
      }
      mwc-top-app-bar-fixed {
        --mdc-top-app-bar-width: 410px !important;
      }
    }

    @media screen and (max-width: 889px) {
      mwc-select#group-select {
        display: none;
      }

    }

    @media screen and (max-width: 1030px) {
      span.email, #group-select-box > div > p
       {
        display: none;
      }
    }

    @media screen and (min-width: 450px) {
      #sidebar-navbar-footer {
        background-color: var(--general-sidebar-background-color);
        color: var(--general-sidebar-color);
      }
    }

    @media screen and (max-height: 953px) {
      footer#short-height {
        display: block;
      }

      footer {
        display: none;
      }
    }

    .temporarily-hide {
      display: none !important;
    }
  `];let Ho=class extends Yn{constructor(){super(),this.active=!0,this.tasks=Array()}static get styles(){return[Uo,No,$o,zo,Fo,Ct`
        h3 {
          font-size: 16px;
          color: #242424;
          display: block;
          width: 100%;
          height: 25px;
          padding: 5px 15px;
          border-bottom: 1px solid #cccccc;
        }

        mwc-list {
          padding: 0;
          margin: 0;
        }
      `]}async _viewStateChanged(t){await this.updateComplete}_taskIcon(t){switch(t){case"session":return"subject";case"database":return"dns";case"image":return"extension";case"general":default:return"widget"}}render(){return Z`
      <div id="container">
        <h3>${rt("sidepanel.BackgroundTasks")}</h3>
        <mwc-list>
        ${this.tasks.map((t=>Z`
          <mwc-list-item graphic="icon" twoline>
            <mwc-icon id="summary-menu-icon" slot="graphic" id="activities-icon" class="fg black">${this._taskIcon(t.tasktype)}</mwc-icon>
            <span>${t.tasktitle}</span>
            <span slot="secondary">${rt("sidepanel.Running")}</span>
          </mwc-list-item>
          <li divider role="separator"></li>`))}
          ${0===this.tasks.length?Z`
            <div style="padding:15px 0;width:100%;text-align:center;">
              ${rt("sidepanel.NoBackgroundTask")}
            </div>
        `:Z``}
        </mwc-list>
      </div>
    `}shouldUpdate(){return this.active}firstUpdated(){this.tasks=[],document.addEventListener("backend-ai-task-changed",(()=>this.refresh()))}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}async refresh(){this.tasks=globalThis.tasker.taskstore,await this.requestUpdate()}};r([yt({type:Boolean})],Ho.prototype,"active",void 0),r([yt({type:Array})],Ho.prototype,"tasks",void 0),Ho=r([bt("backend-ai-sidepanel-task")],Ho);let Vo=class extends Yn{constructor(){super(),this.active=!0,this.notifications=Array()}static get styles(){return[Uo,No,$o,zo,Fo,Ct`
        h3 {
          font-size: 16px;
          color: #242424;
          display: block;
          width: 100%;
          height: 25px;
          padding: 5px 15px;
          border-bottom: 1px solid #cccccc;
        }

        mwc-list {
          padding: 0;
          margin: 0;
        }
      `]}async _viewStateChanged(t){await this.updateComplete}render(){return Z`
      <div id="container">
        <h3>${rt("sidepanel.Notification")}</h3>
        <mwc-list>
        ${this.notifications.map((t=>Z`
          <mwc-list-item twoline>
            <span>${t.outerText}</span>
            <span slot="secondary">${t.getAttribute("created")}</span>
          </mwc-list-item>
          <li divider role="separator"></li>`))}
          ${0===this.notifications.length?Z`
            <div style="padding:15px 0;width:100%;text-align:center;">
              ${rt("sidepanel.NoNotification")}
            </div>
        `:Z``}
        </mwc-list>
      </div>
    `}shouldUpdate(){return this.active}firstUpdated(){this.notifications=globalThis.lablupNotification.notifications,document.addEventListener("backend-ai-notification-changed",(()=>this.refresh()))}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}async refresh(){this.notifications=globalThis.lablupNotification.notifications,await this.requestUpdate()}};r([yt({type:Boolean})],Vo.prototype,"active",void 0),r([yt({type:Array})],Vo.prototype,"notifications",void 0),Vo=r([bt("backend-ai-sidepanel-notification")],Vo);class Wo extends Br{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="",this.reducedTouchTarget=!1,this.animationClass="",this.shouldRenderRipple=!1,this.focused=!1,this.mdcFoundationClass=void 0,this.mdcFoundation=void 0,this.rippleElement=null,this.rippleHandlers=new Ye((()=>(this.shouldRenderRipple=!0,this.ripple.then((t=>this.rippleElement=t)),this.ripple)))}createAdapter(){return{}}update(t){const e=t.get("indeterminate"),i=t.get("checked"),r=t.get("disabled");if(void 0!==e||void 0!==i||void 0!==r){const t=this.calculateAnimationStateName(!!i,!!e,!!r),n=this.calculateAnimationStateName(this.checked,this.indeterminate,this.disabled);this.animationClass=`${t}-${n}`}super.update(t)}calculateAnimationStateName(t,e,i){return i?"disabled":e?"indeterminate":t?"checked":"unchecked"}renderRipple(){const t=this.indeterminate||this.checked;return this.shouldRenderRipple?Z`
        <mwc-ripple
          .accent="${t}"
          .disabled="${this.disabled}"
          unbounded>
        </mwc-ripple>`:""}render(){const t=this.indeterminate||this.checked,e={"mdc-checkbox--disabled":this.disabled,"mdc-checkbox--selected":t,"mdc-checkbox--touch":!this.reducedTouchTarget,"mdc-ripple-upgraded--background-focused":this.focused,"mdc-checkbox--anim-checked-indeterminate":"checked-indeterminate"==this.animationClass,"mdc-checkbox--anim-checked-unchecked":"checked-unchecked"==this.animationClass,"mdc-checkbox--anim-indeterminate-checked":"indeterminate-checked"==this.animationClass,"mdc-checkbox--anim-indeterminate-unchecked":"indeterminate-unchecked"==this.animationClass,"mdc-checkbox--anim-unchecked-checked":"unchecked-checked"==this.animationClass,"mdc-checkbox--anim-unchecked-indeterminate":"unchecked-indeterminate"==this.animationClass},i=this.indeterminate?"mixed":void 0;return Z`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${ye(e)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              aria-checked="${fi(i)}"
              data-indeterminate="${this.indeterminate?"true":"false"}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this._changeHandler}"
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`}_handleFocus(){this.focused=!0,this.handleRippleFocus()}_handleBlur(){this.focused=!1,this.handleRippleBlur()}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}_changeHandler(){this.checked=this.formElement.checked,this.indeterminate=this.formElement.indeterminate}resetAnimationClass(){this.animationClass=""}get isRippleActive(){var t;return(null===(t=this.rippleElement)||void 0===t?void 0:t.isActive)||!1}}r([wt(".mdc-checkbox")],Wo.prototype,"mdcRoot",void 0),r([wt("input")],Wo.prototype,"formElement",void 0),r([yt({type:Boolean,reflect:!0})],Wo.prototype,"checked",void 0),r([yt({type:Boolean})],Wo.prototype,"indeterminate",void 0),r([yt({type:Boolean,reflect:!0})],Wo.prototype,"disabled",void 0),r([yt({type:String})],Wo.prototype,"value",void 0),r([yt({type:Boolean})],Wo.prototype,"reducedTouchTarget",void 0),r([_t()],Wo.prototype,"animationClass",void 0),r([_t()],Wo.prototype,"shouldRenderRipple",void 0),r([_t()],Wo.prototype,"focused",void 0),r([xt("mwc-ripple")],Wo.prototype,"ripple",void 0),r([St({passive:!0})],Wo.prototype,"handleRippleTouchStart",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Go=Ct`.mdc-checkbox{padding:11px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:11px;left:11px}.mdc-checkbox .mdc-checkbox__background::before{top:-13px;left:-13px;width:40px;height:40px}.mdc-checkbox .mdc-checkbox__native-control{top:0px;right:0px;left:0px;width:40px;height:40px}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity,transform;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{transform:scale(1);opacity:.12;transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-checkbox--touch .mdc-checkbox__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;let Ko=class extends Wo{};Ko.styles=Go,Ko=r([bt("mwc-checkbox")],Ko);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Xo={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},Zo={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon"},Yo={LABEL_SCALE:.75},Jo=["pattern","min","max","required","step","minlength","maxlength"],Qo=["color","date","datetime-local","month","range","time","week"],ta=["mousedown","touchstart"],ea=["click","keydown"],ia=function(t){function r(e,n){void 0===n&&(n={});var o=t.call(this,i(i({},r.defaultAdapter),e))||this;return o.isFocused_=!1,o.receivedUserInput_=!1,o.isValid_=!0,o.useNativeValidation_=!0,o.validateOnValueChange_=!0,o.helperText_=n.helperText,o.characterCounter_=n.characterCounter,o.leadingIcon_=n.leadingIcon,o.trailingIcon_=n.trailingIcon,o.inputFocusHandler_=function(){return o.activateFocus()},o.inputBlurHandler_=function(){return o.deactivateFocus()},o.inputInputHandler_=function(){return o.handleInput()},o.setPointerXOffset_=function(t){return o.setTransformOrigin(t)},o.textFieldInteractionHandler_=function(){return o.handleTextFieldInteraction()},o.validationAttributeChangeHandler_=function(t){return o.handleValidationAttributeChange(t)},o}return e(r,t),Object.defineProperty(r,"cssClasses",{get:function(){return Zo},enumerable:!0,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return Xo},enumerable:!0,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return Yo},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"shouldAlwaysFloat_",{get:function(){var t=this.getNativeInput_().type;return Qo.indexOf(t)>=0},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat_||this.isFocused_||!!this.getValue()||this.isBadInput_()},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"shouldShake",{get:function(){return!this.isFocused_&&!this.isValid()&&!!this.getValue()},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver((function(){}))},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!0,configurable:!0}),r.prototype.init=function(){var t=this;this.adapter.hasLabel()&&this.getNativeInput_().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler_():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating_(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler_),ta.forEach((function(e){t.adapter.registerInputInteractionHandler(e,t.setPointerXOffset_)})),ea.forEach((function(e){t.adapter.registerTextFieldInteractionHandler(e,t.textFieldInteractionHandler_)})),this.validationObserver_=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_),this.setCharacterCounter_(this.getValue().length)},r.prototype.destroy=function(){var t=this;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler_),ta.forEach((function(e){t.adapter.deregisterInputInteractionHandler(e,t.setPointerXOffset_)})),ea.forEach((function(e){t.adapter.deregisterTextFieldInteractionHandler(e,t.textFieldInteractionHandler_)})),this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver_)},r.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput_=!0)},r.prototype.handleValidationAttributeChange=function(t){var e=this;t.some((function(t){return Jo.indexOf(t)>-1&&(e.styleValidity_(!0),e.adapter.setLabelRequired(e.getNativeInput_().required),!0)})),t.indexOf("maxlength")>-1&&this.setCharacterCounter_(this.getValue().length)},r.prototype.notchOutline=function(t){if(this.adapter.hasOutline()&&this.adapter.hasLabel())if(t){var e=this.adapter.getLabelWidth()*Yo.LABEL_SCALE;this.adapter.notchOutline(e)}else this.adapter.closeOutline()},r.prototype.activateFocus=function(){this.isFocused_=!0,this.styleFocused_(this.isFocused_),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating_(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),!this.helperText_||!this.helperText_.isPersistent()&&this.helperText_.isValidation()&&this.isValid_||this.helperText_.showToScreenReader()},r.prototype.setTransformOrigin=function(t){if(!this.isDisabled()&&!this.adapter.hasOutline()){var e=t.touches,i=e?e[0]:t,r=i.target.getBoundingClientRect(),n=i.clientX-r.left;this.adapter.setLineRippleTransformOrigin(n)}},r.prototype.handleInput=function(){this.autoCompleteFocus(),this.setCharacterCounter_(this.getValue().length)},r.prototype.autoCompleteFocus=function(){this.receivedUserInput_||this.activateFocus()},r.prototype.deactivateFocus=function(){this.isFocused_=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity_(t),this.styleFocused_(this.isFocused_),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating_(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput_=!1)},r.prototype.getValue=function(){return this.getNativeInput_().value},r.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput_().value=t),this.setCharacterCounter_(t.length),this.validateOnValueChange_){var e=this.isValid();this.styleValidity_(e)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating_(this.shouldFloat),this.validateOnValueChange_&&this.adapter.shakeLabel(this.shouldShake))},r.prototype.isValid=function(){return this.useNativeValidation_?this.isNativeInputValid_():this.isValid_},r.prototype.setValid=function(t){this.isValid_=t,this.styleValidity_(t);var e=!t&&!this.isFocused_&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(e)},r.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange_=t},r.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange_},r.prototype.setUseNativeValidation=function(t){this.useNativeValidation_=t},r.prototype.isDisabled=function(){return this.getNativeInput_().disabled},r.prototype.setDisabled=function(t){this.getNativeInput_().disabled=t,this.styleDisabled_(t)},r.prototype.setHelperTextContent=function(t){this.helperText_&&this.helperText_.setContent(t)},r.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(t)},r.prototype.setLeadingIconContent=function(t){this.leadingIcon_&&this.leadingIcon_.setContent(t)},r.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon_&&this.trailingIcon_.setAriaLabel(t)},r.prototype.setTrailingIconContent=function(t){this.trailingIcon_&&this.trailingIcon_.setContent(t)},r.prototype.setCharacterCounter_=function(t){if(this.characterCounter_){var e=this.getNativeInput_().maxLength;if(-1===e)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter_.setCounterValue(t,e)}},r.prototype.isBadInput_=function(){return this.getNativeInput_().validity.badInput||!1},r.prototype.isNativeInputValid_=function(){return this.getNativeInput_().validity.valid},r.prototype.styleValidity_=function(t){var e=r.cssClasses.INVALID;if(t?this.adapter.removeClass(e):this.adapter.addClass(e),this.helperText_){if(this.helperText_.setValidity(t),!this.helperText_.isValidation())return;var i=this.helperText_.isVisible(),n=this.helperText_.getId();i&&n?this.adapter.setInputAttr(Xo.ARIA_DESCRIBEDBY,n):this.adapter.removeInputAttr(Xo.ARIA_DESCRIBEDBY)}},r.prototype.styleFocused_=function(t){var e=r.cssClasses.FOCUSED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},r.prototype.styleDisabled_=function(t){var e=r.cssClasses,i=e.DISABLED,n=e.INVALID;t?(this.adapter.addClass(i),this.adapter.removeClass(n)):this.adapter.removeClass(i),this.leadingIcon_&&this.leadingIcon_.setDisabled(t),this.trailingIcon_&&this.trailingIcon_.setDisabled(t)},r.prototype.styleFloating_=function(t){var e=r.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(e):this.adapter.removeClass(e)},r.prototype.getNativeInput_=function(){return(this.adapter?this.adapter.getNativeInput():null)||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},r}(re);
/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ra=m((t=>e=>{let i;if(e instanceof U||e instanceof z)throw new Error("The `live` directive is not allowed on text or event bindings");if(e instanceof F)na(e.strings),i=e.element.hasAttribute(e.name),e.value=i;else{const{element:r,name:n,strings:o}=e.committer;if(na(o),e instanceof D){if(i=r[n],i===t)return}else e instanceof $&&(i=r.getAttribute(n));if(i===String(t))return}e.setValue(t)})),na=t=>{if(2!==t.length||""!==t[0]||""!==t[1])throw new Error("`live` bindings can only contain a single expression")},oa=["touchstart","touchmove","scroll","mousewheel"],aa=(t={})=>{const e={};for(const i in t)e[i]=t[i];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},e)};class sa extends Br{constructor(){super(...arguments),this.mdcFoundationClass=ia,this.value="",this.type="text",this.placeholder="",this.label="",this.icon="",this.iconTrailing="",this.disabled=!1,this.required=!1,this.minLength=-1,this.maxLength=-1,this.outlined=!1,this.helper="",this.validateOnInitialRender=!1,this.validationMessage="",this.autoValidate=!1,this.pattern="",this.min="",this.max="",this.step=null,this.size=null,this.helperPersistent=!1,this.charCounter=!1,this.endAligned=!1,this.prefix="",this.suffix="",this.name="",this.readOnly=!1,this.autocapitalize="",this.outlineOpen=!1,this.outlineWidth=0,this.isUiValid=!0,this.focused=!1,this._validity=aa(),this._outlineUpdateComplete=null,this.validityTransform=null}get validity(){return this._checkValidity(this.value),this._validity}get willValidate(){return this.formElement.willValidate}get selectionStart(){return this.formElement.selectionStart}get selectionEnd(){return this.formElement.selectionEnd}focus(){const t=new CustomEvent("focus");this.formElement.dispatchEvent(t),this.formElement.focus()}blur(){const t=new CustomEvent("blur");this.formElement.dispatchEvent(t),this.formElement.blur()}select(){this.formElement.select()}setSelectionRange(t,e,i){this.formElement.setSelectionRange(t,e,i)}update(t){t.has("autoValidate")&&this.mdcFoundation&&this.mdcFoundation.setValidateOnValueChange(this.autoValidate),t.has("value")&&"string"!=typeof this.value&&(this.value=""+this.value),super.update(t)}render(){const t=this.charCounter&&-1!==this.maxLength,e=!!this.helper||!!this.validationMessage||t,i={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--with-leading-icon":this.icon,"mdc-text-field--with-trailing-icon":this.iconTrailing,"mdc-text-field--end-aligned":this.endAligned};return Z`
      <label class="mdc-text-field ${ye(i)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(e)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(e,t)}
    `}updated(t){t.has("value")&&void 0!==t.get("value")&&(this.mdcFoundation.setValue(this.value),this.autoValidate&&this.reportValidity())}renderRipple(){return this.outlined?"":Z`
      <span class="mdc-text-field__ripple"></span>
    `}renderOutline(){return this.outlined?Z`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`:""}renderLabel(){return this.label?Z`
      <span
          .floatingLabelFoundation=${Fr(this.label)}
          id="label">${this.label}</span>
    `:""}renderLeadingIcon(){return this.icon?this.renderIcon(this.icon):""}renderTrailingIcon(){return this.iconTrailing?this.renderIcon(this.iconTrailing,!0):""}renderIcon(t,e=!1){return Z`<i class="material-icons mdc-text-field__icon ${ye({"mdc-text-field__icon--leading":!e,"mdc-text-field__icon--trailing":e})}">${t}</i>`}renderPrefix(){return this.prefix?this.renderAffix(this.prefix):""}renderSuffix(){return this.suffix?this.renderAffix(this.suffix,!0):""}renderAffix(t,e=!1){return Z`<span class="mdc-text-field__affix ${ye({"mdc-text-field__affix--prefix":!e,"mdc-text-field__affix--suffix":e})}">
        ${t}</span>`}renderInput(t){const e=-1===this.minLength?void 0:this.minLength,i=-1===this.maxLength?void 0:this.maxLength,r=this.autocapitalize?this.autocapitalize:void 0,n=this.validationMessage&&!this.isUiValid,o=t?"helper-text":void 0,a=this.focused||this.helperPersistent||n?"helper-text":void 0,s=n?"helper-text":void 0;return Z`
      <input
          aria-labelledby="label"
          aria-controls="${fi(o)}"
          aria-describedby="${fi(a)}"
          aria-errortext="${fi(s)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${ra(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${fi(e)}"
          maxlength="${fi(i)}"
          pattern="${fi(this.pattern?this.pattern:void 0)}"
          min="${fi(""===this.min?void 0:this.min)}"
          max="${fi(""===this.max?void 0:this.max)}"
          step="${fi(null===this.step?void 0:this.step)}"
          size="${fi(null===this.size?void 0:this.size)}"
          name="${fi(""===this.name?void 0:this.name)}"
          inputmode="${fi(this.inputMode)}"
          autocapitalize="${fi(r)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`}renderLineRipple(){return this.outlined?"":Z`
      <span .lineRippleFoundation=${Ur()}></span>
    `}renderHelperText(t,e){const i=this.validationMessage&&!this.isUiValid,r={"mdc-text-field-helper-text--persistent":this.helperPersistent,"mdc-text-field-helper-text--validation-msg":i},n=this.focused||this.helperPersistent||i?void 0:"true",o=i?this.validationMessage:this.helper;return t?Z`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${fi(n)}"
             class="mdc-text-field-helper-text ${ye(r)}"
             >${o}</div>
        ${this.renderCharCounter(e)}
      </div>`:""}renderCharCounter(t){const e=Math.min(this.value.length,this.maxLength);return t?Z`
      <span class="mdc-text-field-character-counter"
            >${e} / ${this.maxLength}</span>`:""}onInputFocus(){this.focused=!0}onInputBlur(){this.focused=!1,this.reportValidity()}checkValidity(){const t=this._checkValidity(this.value);if(!t){const t=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(t)}return t}reportValidity(){const t=this.checkValidity();return this.mdcFoundation.setValid(t),this.isUiValid=t,t}_checkValidity(t){const e=this.formElement.validity;let i=aa(e);if(this.validityTransform){const e=this.validityTransform(t,i);i=Object.assign(Object.assign({},i),e),this.mdcFoundation.setUseNativeValidation(!1)}else this.mdcFoundation.setUseNativeValidation(!0);return this._validity=i,this._validity.valid}setCustomValidity(t){this.validationMessage=t,this.formElement.setCustomValidity(t)}handleInputChange(){this.value=this.formElement.value}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init()}createAdapter(){return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods())}getRootAdapterMethods(){return Object.assign({registerTextFieldInteractionHandler:(t,e)=>this.addEventListener(t,e),deregisterTextFieldInteractionHandler:(t,e)=>this.removeEventListener(t,e),registerValidationAttributeChangeHandler:t=>{const e=new MutationObserver((e=>{t((t=>t.map((t=>t.attributeName)).filter((t=>t)))(e))}));return e.observe(this.formElement,{attributes:!0}),e},deregisterValidationAttributeChangeHandler:t=>t.disconnect()},le(this.mdcRoot))}getInputAdapterMethods(){return{getNativeInput:()=>this.formElement,setInputAttr:()=>{},removeInputAttr:()=>{},isFocused:()=>!!this.shadowRoot&&this.shadowRoot.activeElement===this.formElement,registerInputInteractionHandler:(t,e)=>this.formElement.addEventListener(t,e,{passive:t in oa}),deregisterInputInteractionHandler:(t,e)=>this.formElement.removeEventListener(t,e)}}getLabelAdapterMethods(){return{floatLabel:t=>this.labelElement&&this.labelElement.floatingLabelFoundation.float(t),getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,hasLabel:()=>Boolean(this.labelElement),shakeLabel:t=>this.labelElement&&this.labelElement.floatingLabelFoundation.shake(t),setLabelRequired:t=>{this.labelElement&&this.labelElement.floatingLabelFoundation.setRequired(t)}}}getLineRippleAdapterMethods(){return{activateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},setLineRippleTransformOrigin:t=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.setRippleCenter(t)}}}async _getUpdateComplete(){await super._getUpdateComplete(),await this._outlineUpdateComplete}async firstUpdated(){const t=this.outlineElement;t&&(this._outlineUpdateComplete=t.updateComplete,await this._outlineUpdateComplete),super.firstUpdated(),this.mdcFoundation.setValidateOnValueChange(this.autoValidate),this.validateOnInitialRender&&this.reportValidity()}getOutlineAdapterMethods(){return{closeOutline:()=>this.outlineElement&&(this.outlineOpen=!1),hasOutline:()=>Boolean(this.outlineElement),notchOutline:t=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=t,this.outlineOpen=!0)}}}async layout(){await this.updateComplete;const t=this.labelElement;if(!t)return void(this.outlineOpen=!1);const e=!!this.label&&!!this.value;if(t.floatingLabelFoundation.float(e),!this.outlined)return;this.outlineOpen=e,await this.updateComplete;const i=t.floatingLabelFoundation.getWidth();this.outlineOpen&&(this.outlineWidth=i)}}r([wt(".mdc-text-field")],sa.prototype,"mdcRoot",void 0),r([wt("input")],sa.prototype,"formElement",void 0),r([wt(".mdc-floating-label")],sa.prototype,"labelElement",void 0),r([wt(".mdc-line-ripple")],sa.prototype,"lineRippleElement",void 0),r([wt("mwc-notched-outline")],sa.prototype,"outlineElement",void 0),r([wt(".mdc-notched-outline__notch")],sa.prototype,"notchElement",void 0),r([yt({type:String})],sa.prototype,"value",void 0),r([yt({type:String})],sa.prototype,"type",void 0),r([yt({type:String})],sa.prototype,"placeholder",void 0),r([yt({type:String}),ge((function(t,e){void 0!==e&&this.label!==e&&this.layout()}))],sa.prototype,"label",void 0),r([yt({type:String})],sa.prototype,"icon",void 0),r([yt({type:String})],sa.prototype,"iconTrailing",void 0),r([yt({type:Boolean,reflect:!0})],sa.prototype,"disabled",void 0),r([yt({type:Boolean})],sa.prototype,"required",void 0),r([yt({type:Number})],sa.prototype,"minLength",void 0),r([yt({type:Number})],sa.prototype,"maxLength",void 0),r([yt({type:Boolean,reflect:!0}),ge((function(t,e){void 0!==e&&this.outlined!==e&&this.layout()}))],sa.prototype,"outlined",void 0),r([yt({type:String})],sa.prototype,"helper",void 0),r([yt({type:Boolean})],sa.prototype,"validateOnInitialRender",void 0),r([yt({type:String})],sa.prototype,"validationMessage",void 0),r([yt({type:Boolean})],sa.prototype,"autoValidate",void 0),r([yt({type:String})],sa.prototype,"pattern",void 0),r([yt({type:String})],sa.prototype,"min",void 0),r([yt({type:String})],sa.prototype,"max",void 0),r([yt({type:Number})],sa.prototype,"step",void 0),r([yt({type:Number})],sa.prototype,"size",void 0),r([yt({type:Boolean})],sa.prototype,"helperPersistent",void 0),r([yt({type:Boolean})],sa.prototype,"charCounter",void 0),r([yt({type:Boolean})],sa.prototype,"endAligned",void 0),r([yt({type:String})],sa.prototype,"prefix",void 0),r([yt({type:String})],sa.prototype,"suffix",void 0),r([yt({type:String})],sa.prototype,"name",void 0),r([yt({type:String})],sa.prototype,"inputMode",void 0),r([yt({type:Boolean})],sa.prototype,"readOnly",void 0),r([yt({type:String})],sa.prototype,"autocapitalize",void 0),r([yt({type:Boolean})],sa.prototype,"outlineOpen",void 0),r([yt({type:Number})],sa.prototype,"outlineWidth",void 0),r([yt({type:Boolean})],sa.prototype,"isUiValid",void 0),r([_t()],sa.prototype,"focused",void 0),r([St({passive:!0})],sa.prototype,"handleInputChange",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const la=Ct`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38))}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let da=class extends sa{};da.styles=la,da=r([bt("mwc-textfield")],da),function(){let t;function e(e){return!!function(){if(void 0===t){t=!1;try{const e=Object.defineProperty({},"passive",{get:()=>{t=!0}});window.addEventListener("test",null,e)}catch(t){}}return t}()&&{passive:e}}function i(t,e=t,i=t){let r=t;if(e>i)throw new RangeError(`'min' ${e} should be lower than 'max' ${i}`);return t<e&&(r=e),t>i&&(r=i),r}function r(t,e,i){i?t.setAttribute(e,""):t.removeAttribute(e)}function n(t,e){return t.hasAttribute(e)}function o(t,e,i){t.setAttribute(e,i)}function a(t,e,i=0){const r=t.getAttribute(e);return null===r?i:parseInt(r,10)}function s(t){if("touchstart"===t.type||"touchmove"===t.type||"touchend"===t.type){const e=t.targetTouches[0]||t.changedTouches[0];return{x:e.clientX,y:e.clientY,id:e.identifier,event:t}}return{x:t.clientX,y:t.clientY,id:null,event:t}}const l=document.createElement("template");l.innerHTML='<style>:host{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;contain:content;-webkit-tap-highlight-color:rgba(0,0,0,0);--macro-carousel-gap:16px;--macro-carousel-background-color:transparent;--macro-carousel-slide-min-height:0px;--macro-carousel-slide-max-height:none;--macro-carousel-transition-duration:0.6s;--macro-carousel-transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94);--macro-carousel-pagination-gap:2px;--macro-carousel-pagination-height:44px;--macro-carousel-fallback-message-color-background:#fff;--macro-carousel__internal__slides-per-view:1}:host([hidden]){display:none}:host-context(.js-focus-visible) ::slotted(:focus:not(.focus-visible)),:host-context(.js-focus-visible) :focus:not(.focus-visible){outline:0}#externalWrapper{height:100%;overflow:hidden;contain:paint;background-color:var(--macro-carousel-background-color);-ms-touch-action:pan-y pinch-zoom;touch-action:pan-y pinch-zoom;cursor:-webkit-grab;cursor:grab}#externalWrapper:active{cursor:-webkit-grabbing;cursor:grabbing}:host([disable-drag]) #externalWrapper{cursor:default}#slidesWrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;min-height:var(--macro-carousel-slide-min-height);max-height:var(--macro-carousel-slide-max-height);will-change:transform}:host([transitioning]) #slidesWrapper{-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:var(--macro-carousel-transition-duration);transition-duration:var(--macro-carousel-transition-duration);-webkit-transition-timing-function:var(--macro-carousel-transition-timing-function);transition-timing-function:var(--macro-carousel-transition-timing-function)}#slidesWrapper ::slotted(*){-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-ms-flex-preferred-size:calc((100% - (var(--macro-carousel__internal__slides-per-view) - 1) * var(--macro-carousel-gap)) / var(--macro-carousel__internal__slides-per-view));flex-basis:calc((100% - (var(--macro-carousel__internal__slides-per-view) - 1) * var(--macro-carousel-gap)) / var(--macro-carousel__internal__slides-per-view));min-height:var(--macro-carousel-slide-min-height);max-height:var(--macro-carousel-slide-max-height);margin-right:var(--macro-carousel-gap);overflow:hidden;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.slidesFallback{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:.5em 1em;width:100%;background-color:var(--macro-carousel-fallback-message-color-background)}:host([disable-drag]) #slidesWrapper ::slotted(*){-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}#pagination{display:none}:host([pagination]) #pagination{-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:var(--macro-carousel-pagination-height);contain:strict;font-size:0}div ::slotted(macro-carousel-pagination-indicator){margin:0 calc(var(--macro-carousel-pagination-gap) / 2);padding:0;font-size:inherit;opacity:.8}div ::slotted(macro-carousel-pagination-indicator.selected),div ::slotted(macro-carousel-pagination-indicator:hover){opacity:1}#navigation{display:none}:host([navigation]) #navigation{display:block}div ::slotted(macro-carousel-nav-button){position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host([pagination]) div ::slotted(macro-carousel-nav-button){top:calc(50% - var(--macro-carousel-pagination-height) / 2)}div ::slotted(.macro-carousel-previous){left:0}div ::slotted(.macro-carousel-next){right:0}#aria-live ::slotted(*){position:absolute;height:1px;width:1px;margin:-1px;padding:0;clip:rect(0 0 0 0);overflow:hidden;border:0}@media print{#slidesWrapper ::slotted(*){margin-right:0;margin-bottom:.2em;outline:1px solid #000;color:#000;page-break-inside:avoid}:host([navigation]) #navigation,:host([pagination]) #pagination{display:none}#slidesWrapper{display:block;-webkit-transform:none!important;transform:none!important;-webkit-transition:0s;transition:0s}}</style> <div id="externalWrapper"> <div id="slidesWrapper"> <slot id="slidesSlot"> <p class="slidesFallback">No content available</p> </slot> </div> </div> <div id="navigation"> <slot id="navigationSlot" name="navigationSlot"></slot> </div> <div id="pagination"> <slot id="paginationSlot" name="paginationSlot"></slot> </div> <div id="aria-live"> <slot id="ariaSlot" name="ariaSlot"></slot> </div> ',window.ShadyCSS&&window.ShadyCSS.prepareTemplate(l,"macro-carousel");const d=Math.abs((35,Math.round(100*Math.tan(35*Math.PI/180))/100));window.customElements.define("macro-carousel",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(l.content.cloneNode(!0)),this.t=this.shadowRoot.querySelector("#externalWrapper"),this.i=this.shadowRoot.querySelector("#slidesWrapper"),this.s=this.shadowRoot.querySelector("#slidesSlot"),this.e=this.shadowRoot.querySelector("#ariaSlot"),this.o=this.shadowRoot.querySelector("#paginationSlot"),this.a=[],this.n=this.shadowRoot.querySelector("#navigationSlot"),this.r=void 0,this.h=void 0,this.c=[],this.l=-1,this.d=!1,this.u=0,this.m=0,this.g=0,this.p=0,this.b=0,this.v=0,this.w=void 0,this.f=!1,this.k=!1,this._=void 0,this.S=void 0,this.z=void 0,this.M=void 0,this.C=void 0,this.W=void 0,this.P=void 0,this.L=void 0,this.G=[],this.F=!1,this.I=50,this.$=20,this.A=.7,this.D=.04,this.T=0,this.N=!1}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this.hasAttribute("role")||this.setAttribute("role","list"),this.j("selected"),this.j("loop"),this.j("navigation"),this.j("pagination"),this.j("disableDrag"),this.j("slidesPerView"),this.j("reducedMotion"),this.j("autoFocus"),this.m=this.selected,this.O(),this.s.addEventListener("slotchange",this),window.addEventListener("resize",this,e(!0)),this.addEventListener("keydown",this),window.addEventListener("touchmove",(function(){})),this.q()}disconnectedCallback(){this.s.removeEventListener("slotchange",this),window.removeEventListener("resize",this),this.disableDrag||(this.t.removeEventListener("touchstart",this),this.t.removeEventListener("mousedown",this)),this.navigation&&(this.r.removeEventListener("macro-carousel-nav-button-clicked",this),this.h.removeEventListener("macro-carousel-nav-button-clicked",this)),this.pagination&&this.a.forEach((t=>{t.removeEventListener("macro-carousel-pagination-indicator-clicked",this)}))}handleEvent(t){"resize"===t.type&&t.target===window?(this.B(),this.update()):"slotchange"===t.type&&t.target===this.s?this.q():"macro-carousel-pagination-indicator-clicked"===t.type&&this.pagination?this.V(t):"macro-carousel-nav-button-clicked"===t.type&&this.navigation?t.target===this.r?this.previous():t.target===this.h&&this.next():"keydown"===t.type?37===t.keyCode||38===t.keyCode?this.previous():39!==t.keyCode&&40!==t.keyCode||this.next():"transitionend"===t.type&&t.target===this.i?(this.H(),this.R(),this.X()):"touchstart"===t.type||"mousedown"===t.type?this.Y(s(t)):"touchmove"===t.type||"mousemove"===t.type?this.U(s(t)):"touchend"===t.type||"mouseup"===t.type?this.J(s(t)):"touchcancel"===t.type&&this.K()}j(t){if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this[t]=e}}update(){clearTimeout(this.w),this.B(),this.w=setTimeout((()=>{this.Q()}),50)}Q(){this.Z(),this.tt(),this.it(),this.st(this.c.map((t=>t.layoutIndex)),!0),this.et(this.selected),this.ot(),this.at(),this.nt(),this.H(),this.X(),this.O()}previous(){this.selected=this.rt(this.selected)}rt(t){let e=t;return t>0?e=t-1:this.loop&&(this.d&&(this.u-=1),e=this.l),i(e,0,this.l)}next(){this.selected=this.ht(this.selected)}ht(t){let e=t;return t<this.l?e=t+1:this.loop&&(this.d&&(this.u+=1),e=0),i(e,0,this.l)}static get observedAttributes(){return["selected","loop","navigation","pagination","disable-drag","slides-per-view","reduced-motion","auto-focus"]}attributeChangedCallback(t,e,i){switch(0===this.c.length&&this.q(),t){case"selected":const t=parseInt(i,10);if(!Number.isFinite(t)||t>this.l||t<0)return void(this.selected=e||0);if(this.d){const t=this.selected+this.u*(this.l+1),e=this.m-t,i=[],r=e<0?this.slidesPerView+e:0;for(let n=-1;n<Math.abs(e);n++)i.push(n+t+r);this.st(i),this.m=t}this.et(this.selected),this.ot(),this.at(),this.dispatchEvent(new CustomEvent("macro-carousel-selected-changed",{detail:this.selected,bubbles:!0})),this.f||this.N||(this.H(),this.R(),this.X());break;case"loop":this.tt(),this.it(),this.st(this.c.map(((t,e)=>e))),this.at(),this.ot(),this.H(),this.R(),this.X(),window.ShadyCSS&&window.ShadyCSS.styleSubtree(this);break;case"navigation":this.update(),window.ShadyCSS&&window.ShadyCSS.styleSubtree(this);break;case"pagination":this.ot(),window.ShadyCSS&&window.ShadyCSS.styleSubtree(this);break;case"disable-drag":this.nt();break;case"slides-per-view":const r=parseInt(i,10);if(!Number.isFinite(r)||r<1||r>this.c.length)return void(this.slidesPerView=e||1);this.update(),window.ShadyCSS&&window.ShadyCSS.styleSubtree(this);break;case"reduced-motion":null!==i?this.B():this.O()}}set selected(t){o(this,"selected",t)}get selected(){return a(this,"selected")}set loop(t){r(this,"loop",t)}get loop(){return n(this,"loop")}set navigation(t){r(this,"navigation",t)}get navigation(){return n(this,"navigation")}set pagination(t){r(this,"pagination",t)}get pagination(){return n(this,"pagination")}set disableDrag(t){r(this,"disable-drag",t)}get disableDrag(){return n(this,"disable-drag")}set slidesPerView(t){o(this,"slides-per-view",t)}get slidesPerView(){return a(this,"slides-per-view",1)}set reducedMotion(t){r(this,"reduced-motion",t)}get reducedMotion(){return n(this,"reduced-motion")}set autoFocus(t){r(this,"auto-focus",t)}get autoFocus(){return n(this,"auto-focus")}B(){this.f=!1,this.removeAttribute("transitioning"),this.i.removeEventListener("transitionend",this,!1)}O(){this.reducedMotion||requestAnimationFrame((()=>{requestAnimationFrame((()=>{this.f=!0,this.setAttribute("transitioning",""),this.i.addEventListener("transitionend",this,!1)}))}))}Z(){this.g=this.i.getBoundingClientRect().width,this.p=this.ct(),this.b=this.lt()}lt(){return(this.g-(this.slidesPerView-1)*this.p)/this.slidesPerView}ct(){/\d$/.test(function(t,e){const i=getComputedStyle(t);return String(i.getPropertyValue("--macro-carousel-gap")).trim()}(this))&&console.warn("Warning: it looks like --macro-carousel-gap has a unitless value.\nAdd CSS units to its value to avoid breaking the slides layout.");const t=parseInt(getComputedStyle(this.c[0].element)["margin-right"],10);return Number.isFinite(t)?t:0}it(){var t,e;t="--macro-carousel__internal__slides-per-view",e=""+this.slidesPerView,this.style.setProperty(t,e),window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,{[t]:e}),this.l=this.d?this.c.length-1:this.dt(),!this.d&&this.selected>this.l&&(this.selected=this.l)}dt(){return Math.max(0,this.c.length-this.slidesPerView)}ut(t){let e=t;for(;e<0;)e+=this.c.length;return e%this.c.length}st(t,e=!1){let i;t.forEach((t=>{!e&&this.c.find((e=>e.layoutIndex===t))||(i=this.ut(t),this.c[i].layoutIndex=t,this.c[i].position=this.mt(t),this.c[i].element.style.transform=`translateX(${this.mt(i-t)}px)`)}))}mt(t){return-t*(this.b+this.p)}gt(t){this.i.style.transform=`translate3d(${t}px, 0, 0)`,this.v=t}et(t){this.i&&!this.N&&this.gt(this.c[t].position)}R(){this.autoFocus&&this.c[this.selected].element.focus()}H(){const t=[];for(let e=0;e<this.slidesPerView;e++)t.push((this.selected+e)%this.c.length);let e;this.c.map((t=>t.element)).forEach(((i,r)=>{e=void 0!==t.find((t=>t===r)),i.setAttribute("aria-hidden",e?"false":"true"),e?(i.removeAttribute("inert"),i.setAttribute("tabindex",-1)):i.setAttribute("inert","")}))}ot(){if((!this.pagination||this.pagination&&this.o.assignedNodes().length!==this.l+1)&&(this.a.forEach((t=>{t.removeEventListener("macro-carousel-pagination-indicator-clicked",this),this.removeChild(t)})),this.a.length=0),this.pagination){if(this.o.assignedNodes().length!==this.l+1){const t=document.createDocumentFragment();for(let e=0;e<=this.l;e++){const i=document.createElement("macro-carousel-pagination-indicator");i.textContent=e,i.setAttribute("slot","paginationSlot"),i.setAttribute("aria-label","Go to item "+(e+1)),i.addEventListener("macro-carousel-pagination-indicator-clicked",this),t.appendChild(i),this.a.push(i)}this.appendChild(t)}this.a.forEach(((t,e)=>{e===this.selected?t.classList.add("selected"):t.classList.remove("selected")}))}}V(t){this.selected=parseInt(t.target.textContent,10)}pt(t){const e=document.createElement("macro-carousel-nav-button");return e.classList.add(t),e.setAttribute("slot","navigationSlot"),e.addEventListener("macro-carousel-nav-button-clicked",this),/next/.test(t)&&e.setAttribute("flipped",""),e}at(){(!this.navigation||this.navigation&&2!==this.n.assignedNodes().length)&&(this.n.assignedNodes().forEach((t=>{t.removeEventListener("macro-carousel-nav-button-clicked",this),this.removeChild(t)})),this.r=void 0,this.h=void 0),this.navigation&&(2!==this.n.assignedNodes().length&&(this.r=this.pt("macro-carousel-previous"),this.appendChild(this.r),this.h=this.pt("macro-carousel-next"),this.appendChild(this.h)),this.r.disabled=!this.loop&&0===this.selected,this.h.disabled=!this.loop&&this.selected===this.l,this.r.setAttribute("aria-label",`Go to ${this.loop&&0===this.selected?"last":"previous"} item`),this.h.setAttribute("aria-label",`Go to ${this.loop&&this.selected===this.l?"first":"next"} item`))}tt(){this.d=this.loop&&this.dt()>1}bt(){return this.s.assignedNodes({flatten:!0}).forEach((t=>{t.nodeType===Node.TEXT_NODE&&t.parentNode&&t.parentNode.removeChild(t)})),this.s.assignedNodes({flatten:!0}).filter((t=>t.nodeType===Node.ELEMENT_NODE)).map(((t,e)=>({element:t,layoutIndex:e,position:this.mt(e)})))||[]}q(){this.c=this.bt(),this.c.forEach((t=>{t.element.hasAttribute("tabindex")||t.element.setAttribute("tabindex",-1),"list"===this.getAttribute("role")&&t.element.setAttribute("role","listitem")}));const t=this.c.length>0&&-1===this.l;this.Q(),t&&(this.selected=this.selected)}X(){1!==this.e.assignedNodes().length&&(this.vt=document.createElement("div"),this.vt.setAttribute("slot","ariaSlot"),this.vt.setAttribute("aria-live","polite"),this.vt.setAttribute("aria-atomic","true"),this.appendChild(this.vt));const t=this.c[this.selected].layoutIndex;let e="";for(let i=0;i<this.slidesPerView;i++)e+=(t+i)%this.c.length+1,i<this.slidesPerView-2?e+=", ":i<this.slidesPerView-1&&(e+=" and ");this.vt.textContent=`Item${this.slidesPerView>1?"s":""} ${e} of ${this.c.length} visible`}nt(){this.disableDrag?(this.t.removeEventListener("touchstart",this),this.t.removeEventListener("mousedown",this)):(this.t.addEventListener("touchstart",this,e(!0)),this.t.addEventListener("mousedown",this,e(!0)))}Y(t){this.k||(this.N=!1,this.k=!0,this._=t.id,this.S=this.M=this.W=t.x,this.z=this.C=this.P=t.y,this.L=this.c[this.selected].layoutIndex,this.G=[],this.wt(this.M),window.addEventListener("touchmove",this,e(!1)),window.addEventListener("mousemove",this,e(!1)),window.addEventListener("mouseup",this),window.addEventListener("touchend",this),window.addEventListener("touchcancel",this))}U(t){if(this.k&&t.id===this._){this.W=t.x,this.P=t.y;const e=Math.abs(this.W-this.S),i=Math.abs(this.P-this.z);e/i>d||0===i||i>e&&i-e<5?(t.event.preventDefault(),this.wt(this.M),this.B(),this.ft()):this.K()}}J(t){this.k&&t.id===this._&&this.K()}K(){this.k=!1,this._=void 0,this.wt(this.M),window.removeEventListener("touchmove",this),window.removeEventListener("mousemove",this),window.removeEventListener("touchend",this),window.removeEventListener("mouseup",this),window.removeEventListener("touchcancel",this),this.kt()}wt(t){const e=Date.now();for(;this.G.length>0&&!(e-this.G[0].time<=100);)this.G.shift();this.G.push({x:t,time:e})}ft(){this.F||requestAnimationFrame(this.xt.bind(this)),this.F=!0}xt(){const t=this.v+this.W-this.M;let e,i;if(this.c.forEach(((r,n)=>{r.position>=t&&(void 0===i||r.position<i)&&(i=r.position,e=n)})),this.d){let t;if(void 0===e){const i=this.c.slice(0).sort(((t,e)=>t.layoutIndex>e.layoutIndex))[0];for(e=i.layoutIndex-1;e<0;)e+=this.c.length;e%=this.c.length,t=i.layoutIndex-2}else t=this.c[e].layoutIndex-1;const i=[],r=t+this.slidesPerView+2;for(let e=t;e<r;e++)i.push(e);this.st(i)}else e=e||0;this.L=this.c[e].layoutIndex,this.gt(t),this.M=this.W,this.C=this.P,this.F=!1}kt(){this.N=!0;const t=this.G[this.G.length-1],e=this.G[0],r=t.x-e.x||0;this.u=Math.floor(this.L/this.c.length);const n=this.ut(this.L);let o;if(0===r)this.T=0,o=this.c[n].position-this.v>this.b/2?this.ht(n):n;else{this.T=function(t,e,r){if(0===t)throw new RangeError("x must be different from `0`");return t/Math.abs(t)*i(Math.abs(t),e,r)}(r,this.$,this.I);let t=1;const e=.5*this.g;for(;Math.abs(r)>e*t&&t<this.slidesPerView+2;)t+=1;r>0&&(t-=1);let a=n;for(let e=0;e<t;e++)a=r<0?this.ht(a):this.rt(a);o=a}this.selected=i(o,0,this.l),requestAnimationFrame(this.yt.bind(this))}yt(){if(!this.N)return;const t=this.c[this.selected].position;this.T+=this.D*(t-this.v),this.T*=this.A;const e=this.v+this.T;(Math.abs(t-e)>=1||Math.abs(this.T)>=1)&&!this.reducedMotion?(this.gt(e),requestAnimationFrame(this.yt.bind(this))):(this.gt(t),this.N=!1,this.O(),requestAnimationFrame((()=>{this.H(),this.R(),this.X()})))}});class c extends HTMLElement{constructor(){super();const t=Object.getPrototypeOf(this).constructor.template;this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t.content.cloneNode(!0))}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this._t=0,this.hasAttribute("role")||this.setAttribute("role","button"),this.hasAttribute("tabindex")?this._t=this.getAttribute("tabindex"):this.setAttribute("tabindex",this._t),this.j("disabled"),this.addEventListener("keydown",this),this.addEventListener("click",this)}j(t){if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this[t]=e}}static get observedAttributes(){return["disabled"]}set disabled(t){r(this,"disabled",t)}get disabled(){return n(this,"disabled")}attributeChangedCallback(t,e,i){switch(t){case"disabled":if(e===i)return;this.disabled?(this._t=this.getAttribute("tabindex"),this.removeAttribute("tabindex"),this.setAttribute("aria-disabled","true")):(this.setAttribute("tabindex",this._t),this.setAttribute("aria-disabled","false"))}}handleEvent(t){this.disabled?t.preventDefault():"click"===t.type?this.St&&this.St():"keydown"!==t.type||32!==t.keyCode&&13!==t.keyCode||(t.preventDefault(),this.St&&this.St())}}const h=document.createElement("template");h.innerHTML='<style>:host{--macro-carousel-navigation-color:#000;--macro-carousel-navigation-color-focus:var(--macro-carousel-navigation-color);--macro-carousel-navigation-color-background:transparent;--macro-carousel-navigation-color-background-focus:#f0f0f0;--macro-carousel-navigation-button-size:48px;--macro-carousel-navigation-icon-size:24px;--macro-carousel-navigation-icon-mask:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\'/%3E%3C/svg%3E");position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;min-width:var(--macro-carousel-navigation-button-size);min-height:var(--macro-carousel-navigation-button-size);border-radius:50%;overflow:hidden;cursor:pointer;contain:paint}:host([disabled]){opacity:.2}.bg,.content{position:absolute;top:0;right:0;bottom:0;left:0}.content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:var(--macro-carousel-navigation-color-background)}.bg{z-index:0;background-color:var(--macro-carousel-navigation-color-background-focus);opacity:0;will-change:opacity}.icon{position:relative;z-index:1;width:var(--macro-carousel-navigation-icon-size);height:var(--macro-carousel-navigation-icon-size);color:var(--macro-carousel-navigation-color);background:var(--macro-carousel-navigation-icon-mask)}@supports ((-webkit-mask-image:var(--macro-carousel-navigation-icon-mask)) or (mask-image:var(--macro-carousel-navigation-icon-mask))){.icon{background:var(--macro-carousel-navigation-color);-webkit-mask-image:var(--macro-carousel-navigation-icon-mask);mask-image:var(--macro-carousel-navigation-icon-mask)}}:host([flipped]) .icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.focus-visible) .bg,:host(:active:not([disabled])) .bg,:host(:focus:not([disabled])) .bg,:host(:hover:not([disabled])) .bg{opacity:1}:host-context(.js-focus-visible):host(:focus:not(:active):not(:hover):not(.focus-visible)) .bg{opacity:0}@supports ((-webkit-mask-image:var(--macro-carousel-navigation-icon-mask)) or (mask-image:var(--macro-carousel-navigation-icon-mask))){:host(.focus-visible) .icon,:host(:active:not([disabled])) .icon,:host(:focus:not([disabled])) .icon,:host(:hover:not([disabled])) .icon{background:var(--macro-carousel-navigation-color-focus)}:host-context(.js-focus-visible):host(:focus:not(:active):not(:hover):not(.focus-visible)) .icon{background:var(--macro-carousel-navigation-color)}}</style> <div class="content"> <div class="bg"></div> <div class="icon"></div> </div> ',window.ShadyCSS&&window.ShadyCSS.prepareTemplate(h,"macro-carousel-nav-button"),window.customElements.define("macro-carousel-nav-button",class extends c{static get template(){return h}St(){this.dispatchEvent(new CustomEvent("macro-carousel-nav-button-clicked"))}});const u=document.createElement("template");u.innerHTML='<style>:host{--macro-carousel-pagination-color:#999;--macro-carousel-pagination-color-selected:#000;--macro-carousel-pagination-size-clickable:24px;--macro-carousel-pagination-size-dot:8px;--macro-carousel-pagination-border:1px solid var(--macro-carousel-pagination-color);--macro-carousel-pagination-border-selected:1px solid var(--macro-carousel-pagination-color-selected);position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:var(--macro-carousel-pagination-size-clickable);height:var(--macro-carousel-pagination-size-clickable);overflow:hidden;cursor:pointer;contain:paint}.bg,.fg,:host{border-radius:50%}.bg,.fg{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:block;width:var(--macro-carousel-pagination-size-dot);height:var(--macro-carousel-pagination-size-dot);-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--macro-carousel-pagination-color);content:""}.bg{-webkit-transform:translate(-50%,-50%) scale(2);transform:translate(-50%,-50%) scale(2);opacity:0;will-change:opacity}.fg{border:var(--macro-carousel-pagination-border)}:host(.focus-visible) .bg,:host(:hover) .bg{opacity:.2}:host(.selected) .fg{background-color:var(--macro-carousel-pagination-color-selected);border:var(--macro-carousel-pagination-border-selected)}</style> <div class="bg"></div> <div class="fg"></div> ',window.ShadyCSS&&window.ShadyCSS.prepareTemplate(u,"macro-carousel-pagination-indicator"),window.customElements.define("macro-carousel-pagination-indicator",class extends c{static get template(){return u}St(){this.dispatchEvent(new CustomEvent("macro-carousel-pagination-indicator-clicked"))}})}();let ca=class extends vo{render(){return Z`
			<svg focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100">
				${this.bufferPerc>0?Y`<circle id="buffer" cx="50%" cy="50%" r="45" fill="transparent" style="stroke-dashoffset: ${285-285*this.bufferPerc}px"></circle>`:""}
				<circle
					id="progress"
					cx="50%"
					cy="50%"
					r="45"
					fill="transparent"
					style="${this.mode===bo.DETERMINATE?`stroke-dashoffset: ${285-285*this.progressPerc}px;`:""}"
				></circle>
			</svg>
		`}};ca.styles=[...vo.styles,ln(":host{width:var(--progress-spinner-size,3rem);height:var(--progress-spinner-size,3rem);contain:strict;position:relative;display:inline-block}svg{width:100%;height:100%;position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center center;overflow:visible}#buffer,#progress{stroke-width:var(--progress-spinner-stroke-width,10%);stroke-dasharray:285px;transition-property:stroke;transform-origin:center}#buffer{stroke:var(--progress-spinner-buffer-color,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.2))}#progress{stroke:var(--progress-spinner-color,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}:host([mode=indeterminate]) svg{animation:rotate var(--progress-spinner-indeterminate-container-duration,2s) linear infinite}:host([mode=indeterminate]) #progress{animation-duration:var(--progress-spinner-indeterminate-progress-duration,4s);animation-timing-function:var(--progress-spinner-indeterminate-timing-function,var(--transition-timing-function-standard-curve,cubic-bezier(.4,0,.2,1)));animation-iteration-count:infinite;animation-name:indeterminate}#buffer,:host([mode=determinate]) #progress{transition:var(--progress-spinner-determinate-progress-transition,stroke-dashoffset var(--transition-timing-function-linear,linear))}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes indeterminate{0%{stroke-dashoffset:268px;transform:rotate(0)}12.5%{stroke-dashoffset:56px;transform:rotate(0)}12.5001%{stroke-dashoffset:56px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56px;transform:rotateX(180deg) rotate(341.5deg)}to{stroke-dashoffset:268px;transform:rotateX(180deg) rotate(341.5deg)}}")],ca=r([bt("wl-progress-spinner")],ca);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let ha=class extends Ot{constructor(){super(),this.active=!1}static get styles(){return[Ct`
        wl-progress-spinner {
          --progress-spinner-size: 48px;
          --progress-spinner-stroke-width: 12px;
          width: 48px;
          height: 48px;
          position: fixed;
          bottom: 60px;
          right: 60px;
        }
      `]}render(){return Z`
      <wl-progress-spinner id="spinner"></wl-progress-spinner>
    `}shouldUpdate(){return this.active}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#spinner"),this.active=!0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}async getMoreState(){}async show(){this.active=!0,await this.updateComplete,this.spinner.style.display="block"}async hide(){this.active=!0,await this.updateComplete,this.spinner.style.display="none",this.active=!1}async toggle(){await this.updateComplete,!0===this.spinner.active?(this.active=!0,this.spinner.style.display="none",this.active=!1):(this.active=!0,this.spinner.style.display="block")}};r([yt({type:Object})],ha.prototype,"spinner",void 0),r([yt({type:Boolean})],ha.prototype,"active",void 0),ha=r([bt("lablup-loading-spinner")],ha);let ua=class extends Yn{constructor(){super(),this.active=!0,this.condition="running",this.jobs=Object(),this.appSupportList=Array(),this.appTemplate=Object(),this.imageInfo=Object(),this._selected_items=Array(),this.refreshing=!1,this.notification=Object(),this.spinner=Object(),this.refreshTimer=Object(),this.kernel_labels=Object(),this.indicator=Object(),this.sshPort=0,this.vncPort=0,this.appLaunchBeforeTunneling=["nniboard","mlflow-ui"],this.appController=Object(),this.openPortToPublic=!1,this.appSupportWithCategory=[]}static get styles(){return[Se,No,$o,Ct`
        mwc-icon-button.apps {
          --mdc-icon-button-size: 48px;
          --mdc-icon-size: 36px;
          padding: 3px;
        }

        #ssh-dialog {
          --component-width: 330px;
        }

        .app-icon {
          margin-left: 15px;
          margin-right: 5px;
        }

        .app-icon .label {
          display: block;
          width: 80px;
          text-align: center;
          line-height: 15px;
          height: 25px;
          font-size: 13px;
        }

        #app-launch-confirmation-dialog {
          --component-width: 400px;
          --component-font-size: 14px;
        }

        #app-dialog {
          --component-width: 400px;
        }

        mwc-textfield {
          --mdc-shape-small: 14px;
        }

        macro-carousel {
          max-width: 700px;
          height: 450px;
          padding: 0 30px;
          margin: 0 10px;
        }

        .slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slide > span {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: top center;
        }

        .slide > p {
          font-size: 14px;
        }

        macro-carousel-pagination-indicator {
          /* Change the dots color */
          --macro-carousel-pagination-color: var(--paper-grey-400);
          /* Change the aspect of the selected dot */
          --macro-carousel-pagination-color-selected: var(--paper-green-400);
          /* Change the dots size */
          --macro-carousel-pagination-size-clickable: 32px;
          --macro-carousel-pagination-size-dot: 10px;
        }

        span.keyboard {
          font-family: Menlo, Courier, "Courier New";
          padding: 20px;
          background-color: var(--paper-grey-200);
          border-radius: 10px;
          margin: 0px 10px;
        }

        span.invert {
          font-size: 26px;
          color: var(--paper-grey-200);
          background-color: transparent;
          margin: 0px 10px;
        }

        span.one-key {
          text-align: center;
          width: 24px;
        }

        mwc-checkbox#hide-guide {
          margin-right: 10px;
        }

        p code {
          font: 12px Monaco, "Courier New", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", monospace;
          color: #52595d;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          border-radius: 3px;
          -moz-background-clip: padding;
          -webkit-background-clip: padding-box;
          background-clip: padding-box;
          border: 1px solid #cccccc;
          background-color: #f9f9f9;
          padding: 0px 3px;
          display: inline-block;
        }
      `]}firstUpdated(){this._initializeAppTemplate(),this.refreshTimer=null,fetch("resources/image_metadata.json").then((t=>t.json())).then((t=>{this.imageInfo=t.imageInfo;for(let t in this.imageInfo)this.kernel_labels[t]=[],"label"in this.imageInfo[t]?this.kernel_labels[t]=this.imageInfo[t].label:this.kernel_labels[t]=[]})),this._createTerminalGuide(),this._createDonotShowOption(),this.notification=globalThis.lablupNotification;this.shadowRoot.querySelector("#hide-guide").addEventListener("change",(t=>{t.target.checked?localStorage.setItem("backendaiconsole.terminalguide","false"):localStorage.setItem("backendaiconsole.terminalguide","true")}))}async _viewStateChanged(t){await this.updateComplete}_initializeAppTemplate(){fetch("resources/app_template.json").then((t=>t.json())).then((t=>{this.appTemplate=t.appTemplate;const e=Object.keys(this.appTemplate);e.sort(((t,e)=>this.appTemplate[t][0].category>this.appTemplate[e][0].category?1:-1)),this.appOrder=e}))}async sendRequest(t){let e,i;try{"GET"==t.method&&(t.body=void 0),e=await fetch(t.uri,t);let r=e.headers.get("Content-Type");if(null===r){if(i=e.ok,!e.ok)throw new Error(e)}else i=r.startsWith("application/json")||r.startsWith("application/problem+json")?await e.json():r.startsWith("text/")?await e.text():await e.blob();if(!e.ok)throw i}catch(t){return e}return i}_getProxyURL(){let t="http://127.0.0.1:5050/";return void 0!==globalThis.__local_proxy?t=globalThis.__local_proxy:void 0!==globalThis.backendaiclient._config.proxyURL&&(t=globalThis.backendaiclient._config.proxyURL),t}showLauncher(t){return this._showAppLauncher(t)}_showAppLauncher(t){const e=t["session-uuid"],i=t["access-key"],r=t["app-services"];if("runtime"in t){let i={};return i["session-uuid"]=e,i["app-name"]=t.runtime,i["url-postfix"]="",i["file-name"]=t.filename,"jupyter"===i["app-name"]&&(i["url-postfix"]="&redirect=/notebooks/"+i["file-name"]),this._runAppWithParameters(i)}this.appSupportList=[],r.includes("ttyd")||this.appSupportList.push({name:"ttyd",title:"Console",category:"0.Default",redirect:"",src:"./resources/icons/terminal.svg"}),r.sort(((t,e)=>this.appTemplate[t][0].category>this.appTemplate[e][0].category?1:-1));let n="";r.forEach((t=>{t in this.appTemplate?("sshd"!==t||"sshd"===t&&globalThis.isElectron)&&(n!==this.appTemplate[t][0].category&&(this.appSupportList.push({name:this.appTemplate[t][0].category.substring(2),title:this.appTemplate[t][0].category.substring(2),category:"divider",redirect:"",src:""}),n=this.appTemplate[t][0].category),this.appTemplate[t].forEach((t=>{this.appSupportList.push(t)}))):["ttyd","ipython"].includes(t)||this.appSupportList.push({name:t,title:t,category:"Default",redirect:"",src:"./resources/icons/default_app.svg"})})),this.openPortToPublic=globalThis.backendaiclient._config.openPortToPublic;const o=this.shadowRoot.querySelector("#app-dialog");o.setAttribute("session-uuid",e),o.setAttribute("access-key",i),this.shadowRoot.querySelector("#app-dialog").show()}_hideAppLauncher(){this.shadowRoot.querySelector("#app-dialog").hide()}async _open_wsproxy(t,e="jupyter",i=null){if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)return!1;let r=this.shadowRoot.querySelector("#chk-open-to-public"),n=!1;null==r||(n=r.checked,r.checked=!1);let o={endpoint:globalThis.backendaiclient._config.endpoint};if("SESSION"===globalThis.backendaiclient._config.connectionMode?(o.mode="SESSION",o.session=globalThis.backendaiclient._config._session_id):(o.mode="DEFAULT",o.access_key=globalThis.backendaiclient._config.accessKey,o.secret_key=globalThis.backendaiclient._config.secretKey),o.api_version=globalThis.backendaiclient.APIMajorVersion,globalThis.isElectron&&void 0===globalThis.__local_proxy)return this.indicator.end(),this.notification.text=p("session.launcher.ProxyNotReady"),this.notification.show(),Promise.resolve(!1);let a={method:"PUT",body:JSON.stringify(o),headers:{Accept:"application/json","Content-Type":"application/json"},uri:this._getProxyURL()+"conf"};this.indicator.set(20,p("session.launcher.SettingUpProxyForApp"));try{const r=await this.sendRequest(a);if(void 0===r)return this.indicator.end(),this.notification.text=p("session.launcher.ProxyConfiguratorNotResponding"),this.notification.show(),Promise.resolve(!1);let o=r.token,s=this._getProxyURL()+`proxy/${o}/${t}/add?app=${e}`;null!==i&&i>1024&&i<65535&&(s+="&port="+i),n&&(s+="&open_to_public=true"),this.indicator.set(50,p("session.launcher.AddingKernelToSocketQueue"));const l={method:"GET",app:e,uri:s};return await this.sendRequest(l)}catch(t){throw t}}async _runAppWithParameters(t){let e=t["session-uuid"],i=t["url-postfix"],r=t["app-name"];if(null!=r&&(null==i&&(i=""),void 0===globalThis.backendaiwsproxy||null===globalThis.backendaiwsproxy)){this._hideAppLauncher(),this.indicator=await globalThis.lablupIndicator.start();let t=null;globalThis.isElectron&&"sshd"===r&&(t=globalThis.backendaioptions.get("custom_ssh_port",0),"0"!==t&&0!==t||(t=null)),this._open_wsproxy(e,r,t).then((async t=>{t.url&&(await this._connectToProxyWorker(t.url,i),this.indicator.set(100,p("session.applauncher.Prepared")),setTimeout((()=>{globalThis.open(t.url+i,"_blank")}),1e3))}))}}async _connectToProxyWorker(t,e){const i={method:"GET",uri:t+e,mode:"no-cors",redirect:"follow",credentials:"include"};let r=0;for(;r<5;){let t=await this.sendRequest(i);"object"==typeof t&&"status"in t&&[500,501,502].includes(t.status)?(await this._sleep(1e3),r+=1):r=6}}async _sleep(t){return new Promise((e=>setTimeout(e,t)))}async _runThisAppWithConfirmationIfNeeded(t){const e=t.target["app-name"];if(!this.appLaunchBeforeTunneling.includes(e))return this._runThisApp(t);{const e=t.target;this.appController["app-name"]=e["app-name"];let i=e.closest("#app-dialog");this.appController["session-uuid"]=i.getAttribute("session-uuid"),this.appController["url-postfix"]=e["url-postfix"],this._openAppLaunchConfirmationDialog(t)}}async _runThisApp(t){const e=t.target;this.appController["app-name"]=e["app-name"];let i=e.closest("#app-dialog");return this.appController["session-uuid"]=i.getAttribute("session-uuid"),this.appController["url-postfix"]=e["url-postfix"],this._runApp(this.appController)}async _runApp(t){let e=t["app-name"],i=t["session-uuid"],r=t["url-postfix"];if(null!=e){if(null==r&&(r=""),"ttyd"===e){let t=localStorage.getItem("backendaiconsole.terminalguide");t&&"true"!==t||this._openTerminalGuideDialog()}if(void 0===globalThis.backendaiwsproxy||null===globalThis.backendaiwsproxy){let t;this._hideAppLauncher(),this.indicator=await globalThis.lablupIndicator.start(),globalThis.isElectron&&"sshd"===e&&(t=globalThis.backendaioptions.get("custom_ssh_port",0),"0"!==t&&0!==t||(t=null));const n=this.shadowRoot.querySelector("#chk-preferred-port").checked,o=parseInt(this.shadowRoot.querySelector("#app-port").value);n&&o&&(t=o),this._open_wsproxy(i,e,t).then((async t=>{await this._connectToProxyWorker(t.url,r),"sshd"===e?(this.indicator.set(100,p("session.applauncher.Prepared")),this.sshPort=t.port,this._readSSHKey(i),this._openSSHDialog(),setTimeout((()=>{this.indicator.end()}),1e3)):"vnc"===e?(this.indicator.set(100,p("session.applauncher.Prepared")),this.vncPort=t.port,this._openVNCDialog()):t.url&&(this.indicator.set(100,p("session.applauncher.Prepared")),setTimeout((()=>{globalThis.open(t.url+r,"_blank")}),1e3))}))}}}async _readSSHKey(t){const e=this.shadowRoot.querySelector("#sshkey-download-link"),i=await globalThis.backendaiclient.download_single(t,"/home/work/id_container"),r=(await i.text()).indexOf("-----"),n=await i.slice(r,i.size,i.type);e.href=globalThis.URL.createObjectURL(n),e.download="id_container"}async runTerminal(t){let e=localStorage.getItem("backendaiconsole.terminalguide");e&&"true"!==e||this._openTerminalGuideDialog(),null!=globalThis.backendaiwsproxy&&null!=globalThis.backendaiwsproxy||(this.indicator=await globalThis.lablupIndicator.start(),this._open_wsproxy(t,"ttyd").then((async t=>{await this._connectToProxyWorker(t.url,""),t.url&&(this.indicator.set(100,p("session.applauncher.Prepared")),setTimeout((()=>{globalThis.open(t.url,"_blank"),this.indicator.end()}),1e3))})))}_openAppLaunchConfirmationDialog(t){this.shadowRoot.querySelector("#app-launch-confirmation-dialog").show()}_openSSHDialog(){this.shadowRoot.querySelector("#ssh-dialog").show()}_openVNCDialog(){this.shadowRoot.querySelector("#vnc-dialog").show()}_openTerminalGuideDialog(){this.shadowRoot.querySelector("#terminal-guide").show()}_createDonotShowOption(){let t=this.shadowRoot.querySelector("#terminal-guide");const e=t.children[t.children.length-1],i=document.createElement("div");i.setAttribute("class","horizontal layout flex center");const r=document.createElement("mwc-checkbox");r.setAttribute("id","hide-guide");const n=document.createElement("span");n.innerHTML=""+p("dialog.hide.DonotShowThisAgain"),i.appendChild(r),i.appendChild(n),e.appendChild(i)}_adjustPreferredAppPortNumber(t){const e=t.target.value;e?(e<1025||e>65534)&&(this.shadowRoot.querySelector("#app-port").value=10250):this.shadowRoot.querySelector("#app-port").value=10250}_createTerminalGuide(){const t=this.shadowRoot.querySelector("#terminal-guide").children[1],e=document.createElement("div");e.setAttribute("class","vertical layout flex");let i=globalThis.backendaioptions.get("current_language");["ko","en"].includes(i)||(i="en"),e.innerHTML=`\n      <macro-carousel pagination navigation selected="0" auto-focus reduced-motion disable-drag>\n        <article class="slide vertical layout center">\n          <span class="flex" style="background-image:url(/resources/images/web-terminal-guide-1.png); border:auto;">\n            <span class="keyboard">Ctrl</span>\n            <span class="keyboard invert">+</span>\n            <span class="keyboard one-key">B</span>\n          </span>\n          <p>${p("webTerminalUsageGuide.CopyGuideOne")}</p>\n        </article>\n        <article class="slide vertical layout center">\n          <span style="background-image:url(/resources/images/web-terminal-guide-2.png);"></span>\n          <p>${p("webTerminalUsageGuide.CopyGuideTwo")}</p>\n        </article>\n        <article class="slide vertical layout center">\n          <span style="background-image:url(/resources/images/web-terminal-guide-3.png);"></span>\n          <p>${p("webTerminalUsageGuide.CopyGuideThree")}</p>\n        </article>\n        <article class="slide vertical layout center">\n          <span style="background-image:url(/resources/images/web-terminal-guide-4.png);">\n            <span class="keyboard">Ctrl</span>\n            <span class="keyboard invert">+</span>\n            <span class="keyboard one-key">B</span>\n          </span>\n          <div class="flex layout center-justified vertical center">\n            <p>${p("webTerminalUsageGuide.CopyGuideFour")}</p>\n            <a href="https://console.docs.backend.ai/${i}/latest/session_use/session_use.html#advanced-web-terminal-usage"\n               target="_blank" style="width:100%;text-align:right;">\n              <p>${p("webTerminalUsageGuide.LearnMore")}</p>\n            </a>\n          </div>\n        </article>\n      </macro-carousel>`,t.appendChild(e)}render(){return Z`
      <backend-ai-dialog id="app-dialog" fixed backdrop narrowLayout>
        <div slot="title" class="horizontal layout center">
          <span>App</span>
        </div>
        <div slot="content">
          <div style="padding:15px 0;" class="horizontal layout wrap center start-justified">
            ${this.appSupportList.map((t=>Z`
              ${"divider"===t.category?Z`
              <h3 style="width:100%;padding-left:15px;border-bottom:1px solid #ccc;">${t.title}</h3>
              `:Z`
              <div class="vertical layout center center-justified app-icon">
                <mwc-icon-button class="fg apps green" .app="${t.name}" .app-name="${t.name}"
                                 .url-postfix="${t.redirect}"
                                 @click="${t=>this._runThisAppWithConfirmationIfNeeded(t)}">
                  <img src="${t.src}"/>
                </mwc-icon-button>
                <span class="label">${t.title}</span>
              </div>`}
            `))}
          </div>
          <div style="padding:10px 20px 15px 20px">
            ${globalThis.isElectron||!this.openPortToPublic?"":Z`
              <div class="horizontal layout center">
                <mwc-checkbox id="chk-open-to-public" style="margin-right:0.5em"></mwc-checkbox>
                ${rt("session.OpenToPublic")}
              </div>
            `}
            <div class="horizontal layout center">
              <mwc-checkbox id="chk-preferred-port" style="margin-right:0.5em"></mwc-checkbox>
              ${rt("session.TryPreferredPort")}
              <mwc-textfield id="app-port" type="number" no-label-float value="10250"
                             min="1025" max="65534" style="margin-left:1em; width:90px"
                             @change="${t=>this._adjustPreferredAppPortNumber(t)}"></mwc-textfield>
            </div>
          </div>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="ssh-dialog" fixed backdrop>
        <span slot="title">SSH / SFTP connection</span>
        <div slot="content" style="padding:15px;">
          <div style="padding:15px 0;">${rt("session.SFTPDescription")}</div>
          <section class="vertical layout wrap start start-justified">
            <h4>${rt("session.ConnectionInformation")}</h4>
            <div><span>SSH URL:</span> <a href="ssh://127.0.0.1:${this.sshPort}">ssh://127.0.0.1:${this.sshPort}</a>
            </div>
            <div><span>SFTP URL:</span> <a href="sftp://127.0.0.1:${this.sshPort}">sftp://127.0.0.1:${this.sshPort}</a>
            </div>
            <div><span>Port:</span> ${this.sshPort}</div>
            <a id="sshkey-download-link" style="margin-top:15px;" href="">
              <mwc-button class="fg apps green">${rt("DownloadSSHKey")}</mwc-button>
            </a>
          </section>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="vnc-dialog" fixed backdrop>
        <span slot="title">${rt("session.VNCconnection")}</span>
        <div slot="content" style="padding:15px;">
          <div style="padding:15px 0;">${rt("session.UseYourFavoriteSSHApp")}</div>
          <section class="vertical layout wrap start start-justified">
            <h4>${rt("session.ConnectionInformation")}</h4>
            <div><span>VNC URL:</span> <a href="ssh://127.0.0.1:${this.vncPort}">vnc://127.0.0.1:${this.vncPort}</a>
            </div>
          </section>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="app-launch-confirmation-dialog" warning fixed backdrop>
        <span slot="title">${rt("session.applauncher.AppMustBeRun")}</span>
        <div slot="content" class="vertical layout">
          <p>${rt("session.applauncher.AppMustBeRunDialog")}</p>
          <p>${rt("dialog.ask.DoYouWantToProceed")}</p>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
            raised
            id="app-launch-confirmation-button"
            icon="rowing"
            label="${rt("session.applauncher.ConfirmAndRun")}"
            style="width:100%;"
            @click="${()=>this._runApp(this.appController)}">
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="terminal-guide" fixed backdrop>
        <span slot="title">${rt("webTerminalUsageGuide.CopyGuide")}</span>
        <div slot="content"></div>
        <div slot="footer"></div>
      </backend-ai-dialog>
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */let ma=class extends Xr{static get styles(){return[Zr,Ct`
        .mdc-select__anchor {
          min-width: var(--mdc-select-min-width, 200px);
        }
        .mdc-select--filled {
          min-width: var(--mdc-select-min-width, 200px);
        }
      `]}};ma=r([bt("mwc-multi-select")],ma);let ga=class extends Ot{static get styles(){return[Ct`
        :host {
          display: block;
          position: fixed;
          top: 100%;
          left: 0;
          right: 0;
          padding: 12px;
          background-color: #246;
          color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          text-align: center;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          transition-property: visibility, transform;
          transition-duration: 0.2s;
          visibility: hidden;
        }

        :host([active]) {
          visibility: visible;
          transform: translate3d(0, -100%, 0);
        }

        @media (min-width: 460px) {
          :host {
            width: 320px;
            margin: auto;
          }
        }
      `]}render(){return Z`
      <slot></slot>
    `}};ga=r([bt("backend-ai-offline-indicator")],ga);let ba=class extends Ot{constructor(){super(),this.app="",this.description="",this.color="green",this.appColor="grey",this.ui="flat"}static get styles(){return[No,$o,zo,Fo,Ct`
        .text {
          font-family: 'DejaVu Sans', Verdana, Geneva, sans-serif;
          font-size: 11px;
          line-height: 11px;
          padding: 4px;
          display: block;
          color: #ffffff;
        }

        .round {
          border-radius: 4px;
        }
        .round-left {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        .round-right {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      `]}get _colorScheme(){return{brightgreen:{colorB:"#44cc11",colorT:"#222222"},lightgreen:{colorB:"#f3f5d0",colorT:"#222222"},green:{colorB:"#97ca00"},darkgreen:{colorB:"#457b3b"},yellow:{colorB:"#dfb317"},yellowgreen:{colorB:"#a4a61d"},orange:{colorB:"#fe7d37"},red:{colorB:"#e05d44"},blue:{colorB:"#007ec6"},purple:{colorB:"#ab47bc"},lightblue:{colorB:"#caedfc",colorT:"#222222"},grey:{colorB:"#555555"},gray:{colorB:"#555555"},lightgrey:{colorB:"#9f9f9f"},lightgray:{colorB:"#9f9f9f"}}}render(){return Z`
      <div class="shields layout horizontal flex">
        <div id="app" class="app horizontal layout center">
          <slot name="app-icon"></slot>
          <span id="app-text" class="text app-text">${this.app}</span></div>
        <div id="description" class="desc horizontal layout center">
          <slot name="desc-icon"></slot>
          <span id="desc-text" class="text desc-text">${this.description}</span></div>
      </div>
    `}firstUpdated(){this._colorChanged(),this._appColorChanged(),this._formatItem(),this._descriptionChanged(),""==this.app&&(this.shadowRoot.querySelector("#app-text").style.display="none")}connectedCallback(){super.connectedCallback()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),"app"==t&&(this.app=i,this._appChanged()),"description"==t&&(this.description=i,this._descriptionChanged())}updated(t){t.has("color")&&this._colorChanged(),t.has("appColor")&&this._appColorChanged()}_classChanged(){this._formatItem()}_colorChanged(){this._colorScheme[this.color]&&(this.shadowRoot.querySelector(".desc").style.backgroundColor=this._colorScheme[this.color].colorB,this._colorScheme[this.color].colorT&&(this.shadowRoot.querySelector(".desc-text").style.color=this._colorScheme[this.color].colorT))}_appColorChanged(){this._colorScheme[this.appColor]?(this.shadowRoot.querySelector(".app").style.backgroundColor=this._colorScheme[this.appColor].colorB,this._colorScheme[this.appColor].colorT&&(this.shadowRoot.querySelector(".app-text").style.color=this._colorScheme[this.appColor].colorT)):this.shadowRoot.querySelector(".app").style.backgroundColor="#555"}async _appChanged(){await this.updateComplete,void 0===this.app||"undefined"==this.app||""===this.app?this.shadowRoot.querySelector("#app").style.display="none":this.shadowRoot.querySelector("#app").style.display="block"}async _descriptionChanged(){await this.updateComplete,void 0===this.description||"undefined"==this.description||""===this.description?this.shadowRoot.querySelector("#description").style.display="none":this.shadowRoot.querySelector("#description").style.display="block"}_formatItem(){["round"].indexOf(this.ui)>=0&&(this.shadowRoot.querySelector(".shields").classList.add(this.ui),void 0===this.description||"undefined"==this.description||""===this.description?void 0===this.app||"undefined"==this.app||""===this.app||this.shadowRoot.querySelector("#app").classList.add(this.ui):void 0===this.app||"undefined"==this.app||""===this.app?this.shadowRoot.querySelector("#description").classList.add(this.ui):(this.shadowRoot.querySelector("#app").classList.add(this.ui+"-left"),this.shadowRoot.querySelector("#description").classList.add(this.ui+"-right")))}};r([yt({type:String})],ba.prototype,"app",void 0),r([yt({type:String})],ba.prototype,"description",void 0),r([yt({type:String})],ba.prototype,"color",void 0),r([yt({type:String})],ba.prototype,"appColor",void 0),r([yt({type:String})],ba.prototype,"ui",void 0),ba=r([bt("lablup-shields")],ba);let va=class extends Yn{constructor(){super(),this.company_name="",this.company_id="",this.user_name="",this.user_email="",this.errorMsg="",this.endpoint="",this.notification=Object(),this.signupPanel=Object(),this.blockPanel=Object(),this.TOSlanguage="en",this.TOSdialog=Object()}static get styles(){return[Se,No,$o,zo,Fo,Ct`
          fieldset input {
              width: 100%;
              border: 0;
              border-bottom: 1px solid #aaa;
              margin: 15px 0;
            font: inherit;
            font-size: 16px;
            outline: none;
          }

          fieldset input:focus {
            border-bottom: 1.5px solid #0d47a1;
          }

          #signup-panel {
            --dialog-width: 400px;
            --dialog-elevation: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);
          }

          mwc-textfield {
            width: 100%;
            --mdc-text-field-fill-color: transparent;
            --mdc-theme-primary: var(--general-textfield-selected-color);
            --mdc-typography-font-family: var(--general-font-family);
          }

          mwc-textfield#id_user_name {
            margin-bottom: 18px;
          }

          mwc-button.full {
            width: 335px;
          }

          mwc-button {
            background-image: none;
            --mdc-theme-primary: var(--general-button-background-color);
            --mdc-on-theme-primary: var(--general-button-background-color);
          }

          mwc-button[unelevated] {
            background-image: none;
            --mdc-theme-primary: var(--general-button-background-color);
          }

          mwc-button[outlined] {
            background-image: none;
            --mdc-button-outline-width: 2px;
            --mdc-button-disabled-outline-color: var(--general-button-background-color);
            --mdc-button-disabled-ink-color: var(--general-button-background-color);
            --mdc-theme-primary: var(--general-button-background-color);
            --mdc-on-theme-primary: var(--general-button-background-color);
          }

          mwc-checkbox {
            --mdc-theme-secondary: var(--general-checkbox-color);
          }
      `]}firstUpdated(){this.signupPanel=this.shadowRoot.querySelector("#signup-panel"),this.blockPanel=this.shadowRoot.querySelector("#block-panel"),this.notification=globalThis.lablupNotification,this.TOSdialog=this.shadowRoot.querySelector("#terms-of-service");let t=this.shadowRoot.querySelectorAll("mwc-textfield");for(const e of t)this._addInputValidator(e)}async _viewStateChanged(t){await this.updateComplete,!1!==t&&(void 0!==globalThis.backendaiclient&&null!==globalThis.backendaiclient&&!1!==globalThis.backendaiclient.ready||document.addEventListener("backend-ai-connected",(()=>{}),!0))}receiveTOSAgreement(){!1===this.TOSdialog.show&&(this.TOSdialog.tosContent="",this.TOSdialog.tosLanguage=globalThis.backendaioptions.get("language"),this.TOSdialog.title=rt("console.menu.TermsOfService"),this.TOSdialog.tosEntry="terms-of-service",this.TOSdialog.open())}receivePPAgreement(){!1===this.TOSdialog.show&&(this.TOSdialog.tosContent="",this.TOSdialog.tosLanguage=globalThis.backendaioptions.get("language"),this.TOSdialog.title=rt("console.menu.PrivacyPolicy"),this.TOSdialog.tosEntry="privacy-policy",this.TOSdialog.open())}open(){!0!==this.signupPanel.open&&(this._clearUserInput(),this.signupPanel.show())}close(){!0===this.signupPanel.open&&this.signupPanel.hide()}init_client(){if(void 0===this.client&&""!==this.endpoint&&this.client!=={}){let t={connectionMode:"SESSION",apiVersionMajor:"v4",apiVersion:"v4.20190615",_apiVersion:"v4.20190615",endpoint:this.endpoint};this.client=new ai.backend.Client(t,"Backend.AI Console.")}}block(t=""){this.errorMsg=t,this.blockPanel.show()}_validate_data(t){return null!=t&&null!=t&&""!=t}_clear_info(){this.company_name="",this.user_name=""}_clearUserInput(){this._toggleInputField(!0);["#id_user_email","#id_token","#id_password1","#id_password2"].map((t=>{this.shadowRoot.querySelector(t).value=""})),this.shadowRoot.querySelector("#signup-button-message").innerHTML=p("signup.Signup")}_toggleInputField(t){t?(this.shadowRoot.querySelector("#id_user_name").removeAttribute("disabled"),this.shadowRoot.querySelector("#id_token").removeAttribute("disabled"),this.shadowRoot.querySelector("#signup-button").removeAttribute("disabled")):(this.shadowRoot.querySelector("#id_user_name").setAttribute("disabled","true"),this.shadowRoot.querySelector("#id_token").setAttribute("disabled","true"),this.shadowRoot.querySelector("#signup-button").setAttribute("disabled","true"))}_signup(){let t=["#id_user_email","#id_token","#id_password1","#id_password2"].map((t=>(this.shadowRoot.querySelector(t).reportValidity(),this.shadowRoot.querySelector(t).checkValidity())));if(!1===this.shadowRoot.querySelector("#approve-terms-of-service").checked)return this.notification.text=p("signup.RequestAgreementTermsOfService"),void this.notification.show();if(t.includes(!1))return;const e=this.shadowRoot.querySelector("#id_token").value,i=this.shadowRoot.querySelector("#id_user_email").value,r=this.shadowRoot.querySelector("#id_user_name").value,n=this.shadowRoot.querySelector("#id_password1").value;this.notification.text=p("signup.Processing"),this.notification.show();const o={email:i,user_name:r,password:n,token:e};this.init_client();let a=this.client.newSignedRequest("POST","/auth/signup",o);this.client._wrapWithPromise(a).then((t=>{this._toggleInputField(!1),this.shadowRoot.querySelector("#signup-button-message").innerHTML=p("signup.SignupSucceeded"),this.notification.text=p("signup.SignupSucceeded"),this.notification.show(),setTimeout((()=>{this.signupPanel.hide(),this._clearUserInput(),this.shadowRoot.querySelector("#email-sent-dialog").show()}),1e3)})).catch((t=>{t.message&&(this.notification.text=Do.relieve(t.message),this.notification.show(!0,t)),console.log(t)}))}_politeErrorMessage(t){const e={"Cannot read property 'map' of null":"User has no group. Please contact administrator to fix it.","Cannot read property 'split' of undefined":"Wrong API server address."};return console.log(t),t in e?e[t]:t}_togglePasswordVisibility(t){const e=t.__on,i=t.closest("div").querySelector("mwc-textfield");e?i.setAttribute("type","text"):i.setAttribute("type","password")}_validateEmail(){const t=this.shadowRoot.querySelector("#id_user_email");t.validityTransform=(e,i)=>{if(i.valid){let e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.exec(t.value);return e||(t.validationMessage=p("signup.InvalidEmail")),{valid:e,customError:!e}}return i.valueMissing?(t.validationMessage=p("signup.EmailInputRequired"),{valid:i.valid,customError:!i.valid}):(t.validationMessage=p("signup.InvalidEmail"),{valid:i.valid,customError:!i.valid})}}_validatePassword1(){const t=this.shadowRoot.querySelector("#id_password1");this.shadowRoot.querySelector("#id_password2").reportValidity(),t.validityTransform=(e,i)=>i.valid?{valid:i.valid,customError:!i.valid}:i.valueMissing?(t.validationMessage=p("signup.PasswordInputRequired"),{valid:i.valid,customError:!i.valid}):(t.validationMessage=p("signup.PasswordInvalid"),{valid:i.valid,customError:!i.valid})}_validatePassword2(){const t=this.shadowRoot.querySelector("#id_password2");t.validityTransform=(e,i)=>{if(i.valid){let e=this.shadowRoot.querySelector("#id_password1").value===t.value;return e||(t.validationMessage=p("signup.PasswordNotMatched")),{valid:e,customError:!e}}return i.valueMissing?(t.validationMessage=p("signup.PasswordInputRequired"),{valid:i.valid,customError:!i.valid}):(t.validationMessage=p("signup.PasswordInvalid"),{valid:i.valid,customError:!i.valid})}}_validatePassword(){this._validatePassword1(),this._validatePassword2()}render(){return Z`
      <backend-ai-dialog id="signup-panel" fixed blockscrolling persistent disablefocustrap>
        <span slot="title">${rt("signup.SignupBETA")}</span>
        <div slot="content">
          <mwc-textfield type="email" name="user_email" id="id_user_email" autofocus
                       maxlength="64" placeholder="${p("maxLength.64chars")}"
                       label="${rt("signup.E-mail")}" validateOnInitialRender
                       @change="${this._validateEmail}"
                       validationMessage="${rt("signup.EmailInputRequired")}"
                       value="${this.user_email}" required></mwc-textfield>
          <mwc-textfield type="text" name="user_name" id="id_user_name"
                       maxlength="64" placeholder="${p("maxLength.64chars")}"
                       label="${rt("signup.UserName")}" value="${this.user_name}"></mwc-textfield>
          <mwc-textfield type="text" name="token" id="id_token" maxlength="50"
                       label="${rt("signup.InvitationToken")}"
                       validationMessage="${rt("signup.TokenInputRequired")}" required></mwc-textfield>
          <div class="horizontal flex layout">
            <mwc-textfield type="password" name="password1" id="id_password1"
                        label="${rt("signup.Password")}" maxLength="64"
                        pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
                        validationMessage="${rt("signup.PasswordInputRequired")}"
                        @change="${this._validatePassword}"
                        value="" required></mwc-textfield>
            <mwc-icon-button-toggle off onIcon="visibility" offIcon="visibility_off"
                                    @click="${t=>this._togglePasswordVisibility(t.target)}">
            </mwc-icon-button-toggle>
          </div>
          <div class="horizontal flex layout">
            <mwc-textfield type="password" name="password2" id="id_password2"
                        label="${rt("signup.PasswordAgain")}" maxLength="64"
                        pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
                        validationMessage="${rt("signup.PasswordInputRequired")}"
                        @change="${this._validatePassword}"
                        value="" required></mwc-textfield>
            <mwc-icon-button-toggle off onIcon="visibility" offIcon="visibility_off"
                                    @click="${t=>this._togglePasswordVisibility(t.target)}">
            </mwc-icon-button-toggle>
          </div>
          <div style="margin-top:10px;" class="horizontal layout center center-justified">
            <mwc-checkbox id="approve-terms-of-service"></mwc-checkbox>
            <p style="font-size:12px;">
              ${p("signup.PolicyAgreement_1")}
              <a style="color:forestgreen;" @click="${()=>this.receiveTOSAgreement()}">
                ${rt("signup.TermsOfService")}
              </a>
              ${p("signup.PolicyAgreement_2")}
              <a style="color:forestgreen;" @click="${()=>this.receivePPAgreement()}">
                ${rt("signup.PrivacyPolicy")}
              </a>
              ${p("signup.PolicyAgreement_3")}
            </p>
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
              id="signup-button"
              raised
              class="full"
              icon="check"
              @click="${()=>this._signup()}">
                <span id="signup-button-message">${p("signup.Signup")}</span>
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="block-panel" fixed type="error" backdrop blockscrolling persistent>
        <span slot="title">${rt("dialog.error.Error")}</span>
        <div slot="content" style="text-align:center;">
          ${this.errorMsg}
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="email-sent-dialog" noclosebutton fixed backdrop blockscrolling persistent>
        <span slot="title">${rt("signup.ThankYou")}</span>
        <div slot="content">
          <p style="max-width:350px">${rt("signup.VerificationMessage")}</p>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              unelevated
              label="${rt("button.Okay")}"
              @click="${t=>t.target.closest("backend-ai-dialog").hide()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <lablup-terms-of-service id="terms-of-service"></lablup-terms-of-service>
    `}};r([yt({type:String})],va.prototype,"company_name",void 0),r([yt({type:String})],va.prototype,"company_id",void 0),r([yt({type:String})],va.prototype,"user_name",void 0),r([yt({type:String})],va.prototype,"user_email",void 0),r([yt({type:String})],va.prototype,"errorMsg",void 0),r([yt({type:String})],va.prototype,"endpoint",void 0),r([yt({type:Object})],va.prototype,"notification",void 0),r([yt({type:Object})],va.prototype,"signupPanel",void 0),r([yt({type:Object})],va.prototype,"blockPanel",void 0),r([yt({type:Object})],va.prototype,"client",void 0),r([yt({type:String})],va.prototype,"TOSlanguage",void 0),r([yt({type:Object})],va.prototype,"TOSdialog",void 0),va=r([bt("backend-ai-signup")],va);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let ya=class extends Yn{constructor(){super(),this.api_key="",this.secret_key="",this.user_id="",this.password="",this.proxy_url="http://127.0.0.1:5050/",this.api_endpoint="",this.domain_name="",this.default_session_environment="",this.default_import_environment="",this.blockType="",this.blockMessage="",this.connection_mode="SESSION",this.login_attempt_limit=500,this.login_block_time=180,this.config=Object(),this.is_connected=!1,this.signup_support=!1,this.allowAnonymousChangePassword=!1,this.change_signin_support=!1,this.allow_signout=!1,this.allow_project_resource_monitor=!1,this.openPortToPublic=!1,this.maxCPUCoresPerSession=64,this.maxCUDADevicesPerSession=16,this.maxShmPerSession=2,this.maxFileUploadSize=-1,globalThis.backendaiconsole={},this.endpoints=[]}static get styles(){return[Se,No,$o,zo,Fo,Ct`
        .warning {
          color: red;
        }

        backend-ai-dialog {
          --component-width: 400px;
          --component-padding: 0;
        }

        fieldset input {
          width: 100%;
          border: 0;
          margin: 15px 0 0 0;
          font: inherit;
          font-size: 16px;
          outline: none;
        }

        mwc-textfield {
          font-family: var(--general-font-family);
          --mdc-theme-primary: black;
          --mdc-text-field-fill-color: rgb(250, 250, 250);
          width: 100%;
        }

        .endpoint-text {
          --mdc-text-field-disabled-line-color: rgba(0, 0, 0, 0.0);
        }

        mwc-icon-button {
          /*color: rgba(0, 0, 0, 0.54); Matched color with above icons*/
          color: var(--paper-blue-600);
          --mdc-icon-size: 24px;
        }

        mwc-icon-button.endpoint-control-button {
          --mdc-icon-size: 16px;
          --mdc-icon-button-size: 24px;
          color: red;
        }

        mwc-menu {
          font-family: var(--general-font-family);
          --mdc-menu-min-width: 400px;
          --mdc-menu-max-width: 400px;
        }

        mwc-list-item[disabled] {
          --mdc-menu-item-height: 30px;
          border-bottom: 1px solid #ccc;
        }

        mwc-button {
          background-image: none;
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-on-theme-primary: var(--general-button-background-color);
        }

        mwc-button[unelevated] {
          background-image: none;
          --mdc-theme-primary: var(--general-button-background-color);
        }

        mwc-button[outlined] {
          background-image: none;
          --mdc-button-outline-width: 2px;
          --mdc-button-disabled-outline-color: var(--general-button-background-color);
          --mdc-button-disabled-ink-color: var(--general-button-background-color);
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-on-theme-primary: var(--general-button-background-color);
        }

        h3 small {
          --button-font-size: 12px;
        }

        wl-icon {
          --icon-size: 16px;
          padding: 0;
        }

        .login-input {
          background-color: #FAFAFA;
          border-bottom: 1px solid #ccc;
          height: 50px;
        }

        .login-input mwc-icon {
          margin: 5px 15px 5px 15px;
          color: #737373;
        }

        .login-input input {
          width: 100%;
          background-color: #FAFAFA;
          margin-bottom: 5px;
          font-size: 18px;
          margin-top: 5px;
        }

        .sk-folding-cube {
          margin: 20px auto;
          width: 30px;
          height: 30px;
          position: relative;
          -webkit-transform: rotateZ(45deg);
                  transform: rotateZ(45deg);
          z-index: 10;
          position: absolute;
          top: 35%;
          left: 50%;
        }

        .sk-folding-cube > .loading {
          -webkit-transform: rotateZ(-45deg);
                  transform: rotateZ(-45deg);
          font-size: 12px;
          letter-spacing: 0.1em;
          display: block;
          position: relative;
          top: 50%;
          left: 40%;
        }

        .sk-folding-cube .sk-cube {
          float: left;
          width: 50%;
          height: 50%;
          position: relative;
          -webkit-transform: scale(1.1);
              -ms-transform: scale(1.1);
                  transform: scale(1.1);
        }
        .sk-folding-cube .sk-cube:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #3e872d;
          -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
                  animation: sk-foldCubeAngle 2.4s infinite linear both;
          -webkit-transform-origin: 100% 100%;
              -ms-transform-origin: 100% 100%;
                  transform-origin: 100% 100%;
        }
        .sk-folding-cube .sk-cube2 {
          -webkit-transform: scale(1.1) rotateZ(90deg);
                  transform: scale(1.1) rotateZ(90deg);
        }
        .sk-folding-cube .sk-cube3 {
          -webkit-transform: scale(1.1) rotateZ(180deg);
                  transform: scale(1.1) rotateZ(180deg);
        }
        .sk-folding-cube .sk-cube4 {
          -webkit-transform: scale(1.1) rotateZ(270deg);
                  transform: scale(1.1) rotateZ(270deg);
        }
        .sk-folding-cube .sk-cube2:before {
          -webkit-animation-delay: 0.3s;
                  animation-delay: 0.3s;
        }
        .sk-folding-cube .sk-cube3:before {
          -webkit-animation-delay: 0.6s;
                  animation-delay: 0.6s;
        }
        .sk-folding-cube .sk-cube4:before {
          -webkit-animation-delay: 0.9s;
                  animation-delay: 0.9s;
        }
        @-webkit-keyframes sk-foldCubeAngle {
          0%, 10% {
            -webkit-transform: perspective(140px) rotateX(-180deg);
                    transform: perspective(140px) rotateX(-180deg);
            opacity: 0;
          } 25%, 75% {
            -webkit-transform: perspective(140px) rotateX(0deg);
                    transform: perspective(140px) rotateX(0deg);
            opacity: 1;
          } 90%, 100% {
            -webkit-transform: perspective(140px) rotateY(180deg);
                    transform: perspective(140px) rotateY(180deg);
            opacity: 0;
          }
        }

        @keyframes sk-foldCubeAngle {
          0%, 10% {
            -webkit-transform: perspective(140px) rotateX(-180deg);
                    transform: perspective(140px) rotateX(-180deg);
            opacity: 0;
          } 25%, 75% {
            -webkit-transform: perspective(140px) rotateX(0deg);
                    transform: perspective(140px) rotateX(0deg);
            opacity: 1;
          } 90%, 100% {
            -webkit-transform: perspective(140px) rotateY(180deg);
                    transform: perspective(140px) rotateY(180deg);
            opacity: 0;
          }
        }
      `]}firstUpdated(){this.loginPanel=this.shadowRoot.querySelector("#login-panel"),this.signoutPanel=this.shadowRoot.querySelector("#signout-panel"),this.blockPanel=this.shadowRoot.querySelector("#block-panel"),this.notification=globalThis.lablupNotification,this.endpoints=globalThis.backendaioptions.get("endpoints",[])}_changeSigninMode(){!0===this.change_signin_support&&("SESSION"==this.connection_mode?(this.connection_mode="API",localStorage.setItem("backendaiconsole.connection_mode","API")):(this.connection_mode="SESSION",localStorage.setItem("backendaiconsole.connection_mode","SESSION")),this.requestUpdate())}refreshWithConfig(t){void 0===t.plugin||void 0===t.plugin.login||""===t.plugin.login||import("../plugins/"+t.plugin.login).then((()=>{console.log("Plugin loaded.")})).catch((t=>{!0!==this.loginPanel.open?(void 0!==t.message?(this.notification.text=Do.relieve(t.title),this.notification.detail=t.message):this.notification.text=Do.relieve("Plugin loading failed."),this.notification.show(!1,t),this.open()):(this.notification.text=Do.relieve("Login failed. Check login information."),this.notification.show(!1,t))})),void 0===t.general||void 0===t.general.debug||""===t.general.debug?globalThis.backendaiconsole.debug=!1:!0===t.general.debug&&(globalThis.backendaiconsole.debug=!0,console.log("Debug flag is set to true")),void 0===t.general||void 0===t.general.signupSupport||""===t.general.signupSupport||0==t.general.signupSupport?this.signup_support=!1:(this.signup_support=!0,this.shadowRoot.querySelector("#signup-dialog").active=!0),void 0===t.general||void 0===t.general.allowAnonymousChangePassword||""===t.general.allowAnonymousChangePassword||0==t.general.allowAnonymousChangePassword?this.allowAnonymousChangePassword=!1:this.allowAnonymousChangePassword=!0,void 0===t.general||void 0===t.general.allowChangeSigninMode||""===t.general.allowChangeSigninMode||0==t.general.allowChangeSigninMode?this.change_signin_support=!1:this.change_signin_support=!0,void 0===t.general||void 0===t.general.allowProjectResourceMonitor||""===t.general.allowProjectResourceMonitor||0==t.general.allowProjectResourceMonitor?this.allow_project_resource_monitor=!1:this.allow_project_resource_monitor=!0,void 0===t.resources||void 0===t.resources.openPortToPublic||""===t.resources.openPortToPublic||0==t.resources.openPortToPublic?this.openPortToPublic=!1:this.openPortToPublic=!0,void 0===t.resources||void 0===t.resources.maxCPUCoresPerSession||isNaN(parseInt(t.resources.maxCPUCoresPerSession))?this.maxCPUCoresPerSession=64:this.maxCPUCoresPerSession=parseInt(t.resources.maxCPUCoresPerSession),void 0===t.resources||void 0===t.resources.maxCUDADevicesPerSession||isNaN(parseInt(t.resources.maxCUDADevicesPerSession))?this.maxCUDADevicesPerSession=16:this.maxCUDADevicesPerSession=parseInt(t.resources.maxCUDADevicesPerSession),void 0===t.resources||void 0===t.resources.maxShmPerSession||isNaN(parseFloat(t.resources.maxShmPerSession))?this.maxShmPerSession=2:this.maxShmPerSession=parseFloat(t.resources.maxShmPerSession),void 0===t.resources||void 0===t.resources.maxFileUploadSize||""===t.resources.maxFileUploadSize?this.maxFileUploadSize=-1:this.maxFileUploadSize=parseInt(t.resources.maxFileUploadSize),void 0===t.general||void 0===t.general.allowSignout||""===t.general.allowSignout||0==t.general.allowSignout?this.allow_signout=!1:this.allow_signout=!0,void 0===t.general||void 0===t.general.loginAttemptLimit||""===t.general.loginAttemptLimit||(this.login_attempt_limit=parseInt(t.general.loginAttemptLimit)),void 0===t.general||void 0===t.general.loginBlockTime||""===t.general.loginBlockTime||(this.login_block_time=parseInt(t.general.loginBlockTime)),void 0===t.wsproxy||void 0===t.wsproxy.proxyURL||""===t.wsproxy.proxyURL?this.proxy_url="http://127.0.0.1:5050/":this.proxy_url=t.wsproxy.proxyURL,void 0===t.general||void 0===t.general.apiEndpoint||""===t.general.apiEndpoint?(this.shadowRoot.querySelector("#id_api_endpoint_container").style.display="flex",this.shadowRoot.querySelector("#id_api_endpoint_humanized").style.display="none"):(this.api_endpoint=t.general.apiEndpoint,void 0===t.general||void 0===t.general.apiEndpointText||""===t.general.apiEndpointText?(this.shadowRoot.querySelector("#id_api_endpoint_container").style.display="flex",this.shadowRoot.querySelector("#id_api_endpoint_humanized").style.display="none",this.shadowRoot.querySelector("#endpoint-button").disabled="true"):(this.shadowRoot.querySelector("#id_api_endpoint_container").style.display="none",this.shadowRoot.querySelector("#id_api_endpoint_humanized").style.display="block",this.shadowRoot.querySelector("#id_api_endpoint_humanized").value=t.general.apiEndpointText),this.shadowRoot.querySelector("#id_api_endpoint").disabled=!0,this.shadowRoot.querySelector("#id_api_endpoint_humanized").disabled=!0),void 0===t.general||void 0===t.general.defaultSessionEnvironment||""===t.general.defaultSessionEnvironment?this.default_session_environment="":this.default_session_environment=t.general.defaultSessionEnvironment,void 0===t.general||void 0===t.general.defaultImportEnvironment||""===t.general.defaultImportEnvironment?this.default_import_environment="index.docker.io/lablup/python:3.8-ubuntu18.04":this.default_import_environment=t.general.defaultImportEnvironment;let e=localStorage.getItem("backendaiconsole.connection_mode");globalThis.isElectron&&null!==e&&""!=e&&'""'!=e?this.connection_mode="SESSION"===e?"SESSION":"API":void 0===t.general||void 0===t.general.connectionMode||""===t.general.connectionMode||"SESSION"===t.general.connectionMode.toUpperCase()?this.connection_mode="SESSION":this.connection_mode="API"}open(){!0!==this.loginPanel.open&&this.loginPanel.show(),!0===this.blockPanel.open&&this.blockPanel.hide()}close(){!0===this.loginPanel.open&&this.loginPanel.hide(),!0===this.blockPanel.open&&this.blockPanel.hide()}block(t="",e=""){this.blockMessage=t,this.blockType=e,setTimeout((()=>{!1===this.blockPanel.open&&!1===this.is_connected&&!1===this.loginPanel.open&&this.blockPanel.show()}),2e3)}free(){this.blockPanel.hide()}_trimChar(t,e){return t.replace(/^\|+|\|+$/g,"")}login(t=!0){if(""===this.api_endpoint){let t=localStorage.getItem("backendaiconsole.api_endpoint");null!=t&&(this.api_endpoint=t.replace(/^\"+|\"+$/g,""))}this.api_endpoint=this.api_endpoint.trim(),"SESSION"===this.connection_mode?this._connectUsingSession(t):"API"===this.connection_mode?this._connectUsingAPI(t):this.open()}async check_login(t=!0){if(""===this.api_endpoint){let t=localStorage.getItem("backendaiconsole.api_endpoint");null!=t&&(this.api_endpoint=t.replace(/^\"+|\"+$/g,""))}return this.api_endpoint=this.api_endpoint.trim(),"SESSION"===this.connection_mode?this._checkLoginUsingSession():(this.connection_mode,Promise.resolve(!1))}async _checkLoginUsingSession(t=!0){return""===this.api_endpoint?Promise.resolve(!1):(this.clientConfig=new ai.backend.ClientConfig(this.user_id,this.password,this.api_endpoint,"SESSION"),this.client=new ai.backend.Client(this.clientConfig,"Backend.AI Console."),this.client.get_manager_version().then((async()=>{let t=await this.client.check_login();return Promise.resolve(t)})))}async _logoutSession(t=!0){return this.client.logout()}signout(){this.signoutPanel.show()}_showSignupDialog(){if(this.api_endpoint=this.api_endpoint.trim(),""===this.api_endpoint)return this.notification.text=p("error.APIEndpointIsEmpty"),void this.notification.show();this.shadowRoot.querySelector("#signup-dialog").endpoint=this.api_endpoint,this.shadowRoot.querySelector("#signup-dialog").open()}_showChangePasswordEmailDialog(){this.shadowRoot.querySelector("#change-password-confirm-dialog").show()}async _sendChangePasswordEmail(){const t=this.shadowRoot.querySelector("#password-change-email");if(t.value&&t.validity.valid)try{const e=new ai.backend.ClientConfig("","",this.api_endpoint,"SESSION"),i=new ai.backend.Client(e,"Backend.AI Console.");await i.cloud.send_password_change_email(t.value),this.shadowRoot.querySelector("#change-password-confirm-dialog").hide(),this.notification.text=p("signup.EmailSent"),this.notification.show()}catch(t){console.error(t),this.notification.text=t.message||p("signup.SendError"),this.notification.show()}}_cancelLogin(t){this._hideDialog(t),this.open()}_validate_data(t){return null!=t&&null!=t&&""!=t}_submitIfEnter(t){13==t.keyCode&&this._login()}_signoutIfEnter(t){13==t.keyCode&&this._signout()}_signout(){let t=this.shadowRoot.querySelector("#id_signout_user_id").value,e=this.shadowRoot.querySelector("#id_signout_password").value;this.client.signout(t,e).then((t=>{this.notification.text=p("login.SignoutFinished"),this.notification.show();let e=new CustomEvent("backend-ai-logout",{detail:""});document.dispatchEvent(e)})).catch((t=>{this.free(),!0!==this.signoutPanel.open?(console.log(t),void 0!==t.message?(this.notification.text=Do.relieve(t.title),this.notification.detail=t.message):this.notification.text=Do.relieve("Login information mismatch. Check your information and try again."),this.notification.show()):(this.notification.text=Do.relieve("Signout failed. Check ID/password information."),this.notification.show())}))}_login(){let t=globalThis.backendaioptions.get("login_attempt",0,"general"),e=globalThis.backendaioptions.get("last_login",Math.floor(Date.now()/1e3),"general"),i=Math.floor(Date.now()/1e3);if(t>=this.login_attempt_limit&&i-e>this.login_block_time)globalThis.backendaioptions.set("last_login",i,"general"),globalThis.backendaioptions.set("login_attempt",0,"general");else{if(t>=this.login_attempt_limit)return globalThis.backendaioptions.set("last_login",i,"general"),globalThis.backendaioptions.set("login_attempt",t+1,"general"),this.notification.text=p("login.TooManyAttempt"),void this.notification.show();globalThis.backendaioptions.set("login_attempt",t+1,"general")}if(this.api_endpoint=this.shadowRoot.querySelector("#id_api_endpoint").value,this.api_endpoint=this.api_endpoint.replace(/\/+$/,""),""===this.api_endpoint)return this.notification.text=p("login.APIEndpointEmpty"),void this.notification.show();"SESSION"===this.connection_mode?(this._disableUserInput(),this.user_id=this.shadowRoot.querySelector("#id_user_id").value,this.password=this.shadowRoot.querySelector("#id_password").value,""===this.user_id||"undefined"===this.user_id||""===this.password||"undefined"===this.password?(this.notification.text=p("login.PleaseInputLoginInfo"),this.notification.show(),this._enableUserInput()):this._connectUsingSession(!0)):(this._disableUserInput(),this.api_key=this.shadowRoot.querySelector("#id_api_key").value,this.secret_key=this.shadowRoot.querySelector("#id_secret_key").value,this._connectUsingAPI(!0))}async _connectUsingSession(t=!0){return""===this.api_endpoint?(this.free(),this.open(),Promise.resolve(!1)):(this.clientConfig=new ai.backend.ClientConfig(this.user_id,this.password,this.api_endpoint,"SESSION"),this.client=new ai.backend.Client(this.clientConfig,"Backend.AI Console."),this.client.get_manager_version().then((async()=>{if(!1!==await this.client.check_login())return this.is_connected=!0,this._connectGQL();this.block(p("login.PleaseWait"),p("login.ConnectingToCluster")),this.client.login().then((t=>{if(!1===t)this.open(),""!=this.user_id&&""!=this.password&&(this.notification.text=Do.relieve("Login information mismatch. Please check your login information."),this.notification.show());else{if(!t.fail_reason)return this.is_connected=!0,this._connectGQL();this.open(),""!=this.user_id&&""!=this.password&&(this.notification.text=Do.relieve(t.fail_reason),this.notification.show())}})).catch((e=>{this.free(),console.log(e),t&&(!0!==this.loginPanel.open?void 0!==e.message?(this.notification.text=Do.relieve(e.title),this.notification.detail=e.message):this.notification.text=Do.relieve("Login information mismatch. If the information is correct, logout and login again."):(void 0!==e.message?(this.notification.text=Do.relieve(e.title),this.notification.detail=e.message):this.notification.text=Do.relieve("Login failed. Check login information."),console.log(e)),this.notification.show())})),this.open(),this._enableUserInput()})).catch((e=>(this.free(),this.open(),this._enableUserInput(),t&&(this.notification.text=Do.relieve("Endpoint is unreachable. Please check the connection or endpoint"),this.notification.show()),Promise.resolve(!1)))))}_connectUsingAPI(t=!0){this.clientConfig=new ai.backend.ClientConfig(this.api_key,this.secret_key,this.api_endpoint),this.client=new ai.backend.Client(this.clientConfig,"Backend.AI Console."),this.client.ready=!1,this.client.get_manager_version().then((e=>this._connectGQL(t)))}_connectGQL(t=!0){!0!==this.loginPanel.open&&this.block(),new Promise((()=>{const t=Math.floor(Date.now()/1e3);globalThis.backendaioptions.set("last_login",t,"general"),globalThis.backendaioptions.set("login_attempt",0,"general"),this._connectViaGQL()})).catch((e=>{this.free(),t&&(!0!==this.loginPanel.open?(void 0!==e.message?408===e.status?(this.notification.text=p("error.LoginSucceededManagerNotResponding"),this.notification.detail=e.message):(this.notification.text=Do.relieve(e.title),this.notification.detail=e.message):this.notification.text=Do.relieve("Login information mismatch. If the information is correct, logout and login again."),this.notification.show(!1,e),this.open()):(this.notification.text=Do.relieve("Login failed. Check login information."),this.notification.show())),this.open(),this._enableUserInput()}))}_connectViaGQL(){let t=`query { keypair { ${["user_id","resource_policy","user"].join(" ")} } }`;return this.client.query(t,{}).then((t=>{this.is_connected=!0,globalThis.backendaiclient=this.client;let e=t.keypair.resource_policy;globalThis.backendaiclient.resource_policy=e,this.user=t.keypair.user;let i=`query { user{ ${["username","email","full_name","is_active","role","domain_name","groups {name, id}"].join(" ")} } }`,r={uuid:this.user};return globalThis.backendaiclient.query(i,r)})).then((t=>{let e=t.user.email;this.email!==e&&(this.email=e),this.user_groups=t.user.groups;let i=t.user.role;return this.domain_name=t.user.domain_name,globalThis.backendaiclient.email=this.email,globalThis.backendaiclient.full_name=t.user.full_name,globalThis.backendaiclient.is_admin=!1,globalThis.backendaiclient.is_superadmin=!1,["superadmin","admin"].includes(i)&&(globalThis.backendaiclient.is_admin=!0),["superadmin"].includes(i)&&(globalThis.backendaiclient.is_superadmin=!0),globalThis.backendaiclient.group.list(!0,!1,["id","name","description","is_active"])})).then((t=>{let e=t.groups,i=this.user_groups.map((({id:t})=>t));if(null!==e){globalThis.backendaiclient.groups=e.filter((t=>{if(i.includes(t.id))return t})).map((t=>t.name));let t=Object();e.forEach((function(e){t[e.name]=e.id})),globalThis.backendaiclient.groupIds=t}else globalThis.backendaiclient.groups=["default"];globalThis.backendaiclient.current_group=globalThis.backendaiclient.groups[0],globalThis.backendaiclient.current_group_id=()=>globalThis.backendaiclient.groupIds[globalThis.backendaiclient.current_group],globalThis.backendaiclient._config._proxyURL=this.proxy_url,globalThis.backendaiclient._config.domainName=this.domain_name,globalThis.backendaiclient._config.default_session_environment=this.default_session_environment,globalThis.backendaiclient._config.default_import_environment=this.default_import_environment,globalThis.backendaiclient._config.allow_project_resource_monitor=this.allow_project_resource_monitor,globalThis.backendaiclient._config.openPortToPublic=this.openPortToPublic,globalThis.backendaiclient._config.maxCPUCoresPerSession=this.maxCPUCoresPerSession,globalThis.backendaiclient._config.maxCUDADevicesPerSession=this.maxCUDADevicesPerSession,globalThis.backendaiclient._config.maxShmPerSession=this.maxShmPerSession,globalThis.backendaiclient._config.maxFileUploadSize=this.maxFileUploadSize,globalThis.backendaiclient.ready=!0,-1===this.endpoints.indexOf(globalThis.backendaiclient._config.endpoint)&&(this.endpoints.push(globalThis.backendaiclient._config.endpoint),this.endpoints.length>5&&(this.endpoints=this.endpoints.slice(1,6)),globalThis.backendaioptions.set("endpoints",this.endpoints));let r=new CustomEvent("backend-ai-connected",{detail:this.client});document.dispatchEvent(r),this.close(),this._saveLoginInfo(),localStorage.setItem("backendaiconsole.api_endpoint",this.api_endpoint)})).catch((t=>{!0!==this.loginPanel.open?(void 0!==t.message?void 0!==t.title?(this.notification.text=Do.relieve(t.title),this.notification.detail=t.message):(this.notification.text=Do.relieve(t),this.notification.detail=t):this.notification.text=Do.relieve("Login information mismatch. If the information is correct, logout and login again."),this.notification.show(!1,t),this.open()):(this.notification.text=Do.relieve("Login failed. Check login information."),this.notification.show(!0)),401===t.statusCode&&(console.log("automatic logout ..."),this.client.logout()),this._enableUserInput()}))}async _saveLoginInfo(){localStorage.removeItem("backendaiconsole.login.api_key"),localStorage.removeItem("backendaiconsole.login.secret_key"),localStorage.removeItem("backendaiconsole.login.user_id"),localStorage.removeItem("backendaiconsole.login.password")}_toggleEndpoint(){let t=this.shadowRoot.querySelector("#endpoint-list"),e=this.shadowRoot.querySelector("#endpoint-button");t.anchor=e,t.open=!t.open}_updateEndpoint(){let t=this.shadowRoot.querySelector("#endpoint-list");this.api_endpoint=t.selected.value}_deleteEndpoint(t){let e=this.endpoints.indexOf(t);e>-1&&this.endpoints.splice(e,1),globalThis.backendaioptions.set("endpoints",this.endpoints),this.requestUpdate()}_disableUserInput(){this.connection_mode,this.shadowRoot.querySelector("#id_user_id").disabled=!0,this.shadowRoot.querySelector("#id_password").disabled=!0,this.shadowRoot.querySelector("#loading-animator").style.display="block"}_enableUserInput(){this.shadowRoot.querySelector("#id_user_id").disabled=!1,this.shadowRoot.querySelector("#id_password").disabled=!1,this.shadowRoot.querySelector("#id_user_id").disabled=!1,this.shadowRoot.querySelector("#id_password").disabled=!1,this.shadowRoot.querySelector("#loading-animator").style.display="none"}render(){return Z`
      <backend-ai-dialog id="login-panel" noclosebutton fixed blockscrolling persistent disablefocustrap>
        <div slot="title" class="horizontal center layout">
          <img src="manifest/backend.ai-text.svg" style="height:35px;padding:15px 0 15px 5px;" />
          <div class="flex"></div>
        </div>
        <div slot="content" class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout" style="margin: 0 25px;font-weight:700;min-height:40px;">
            <div>${"SESSION"==this.connection_mode?rt("login.LoginWithE-mail"):rt("login.LoginWithIAM")}</div>
            <div class="flex"></div>
            ${this.change_signin_support?Z`
                <div class="vertical center-justified layout">
                  <div style="font-size:12px;margin:5px 10px;text-align:center;font-weight:400;">${rt("login.LoginAnotherway")}</div>
                  <mwc-button
                      class="change-login-mode-button"
                      outlined
                      label="${"SESSION"==this.connection_mode?rt("login.ClickToUseIAM"):rt("login.ClickToUseID")}"
                      @click="${()=>this._changeSigninMode()}">
                  </mwc-button>
                </div>
            `:Z``}
          </h3>
          <div class="login-form">
            <div class="sk-folding-cube" id="loading-animator" style="display:none;">
              <div class="sk-cube1 sk-cube"></div>
              <div class="sk-cube2 sk-cube"></div>
              <div class="sk-cube4 sk-cube"></div>
              <div class="sk-cube3 sk-cube"></div>
              <span class="loading">Waiting...</span>
            </div>
            <form id="session-login-form" style="${"SESSION"==this.connection_mode?"display:block;":"display:none;"}">
              <fieldset>
                <div class="horizontal layout start-justified center login-input">
                  <mwc-icon>email</mwc-icon>
                  <input type="email" id="id_user_id" maxlength="64" autocomplete="username"
                              label="${rt("login.E-mail")}" placeholder="${rt("login.E-mail")}" icon="email" value="${this.user_id}" @keyup="${this._submitIfEnter}"></input>
                </div>
                <div class="horizontal layout start-justified center login-input">
                  <mwc-icon>vpn_key</mwc-icon>
                  <input type="password" id="id_password" autocomplete="current-password"
                              label="${rt("login.Password")}" placeholder="${rt("login.Password")}" icon="vpn_key" value="${this.password}" @keyup="${this._submitIfEnter}"></input>
                </div>
              </fieldset>
            </form>
            <form id="api-login-form" style="${"SESSION"==this.connection_mode?"display:none;":"display:block;"}">
              <fieldset>
                <mwc-textfield type="text" id="id_api_key" maxLength="20"
                            label="${rt("login.APIKey")}" icon="lock" value="${this.api_key}" @keyup="${this._submitIfEnter}"></mwc-textfield>
                <mwc-textfield type="password" id="id_secret_key" maxLength="40"
                            label="${rt("login.SecretKey")}" icon="vpn_key" value="${this.secret_key}" @keyup="${this._submitIfEnter}" ></mwc-textfield>
              </fieldset>
            </form>
            <form>
              <fieldset>
                <div class="horizontal layout" id="id_api_endpoint_container" style="display:none;">
                  <mwc-icon-button id="endpoint-button" icon="cloud_queue" style="margin-left:5px;" @click="${()=>this._toggleEndpoint()}"></mwc-icon-button>
                  <mwc-menu id="endpoint-list" @selected="${()=>this._updateEndpoint()}">
                    <mwc-list-item disabled>${rt("login.EndpointHistory")}</mwc-list-item>
                    ${0===this.endpoints.length?Z`
                    <mwc-list-item value="">${rt("login.NoEndpointSaved")}</mwc-list-item>
                    `:Z``}

                    ${this.endpoints.map((t=>Z`<mwc-list-item value="${t}">
                      <div class="horizontal justified center flex layout" style="width:365px;">
                        <span>${t}</span><span class="flex"></span>
                        <mwc-icon-button icon="delete" @click="${()=>this._deleteEndpoint(t)}" class="endpoint-control-button"></mwc-icon-button>
                      </div>
                    </mwc-list-item>`))}
                  </mwc-menu>
                  <mwc-textfield class="endpoint-text" type="text" id="id_api_endpoint" maxLength="2048"
                              style="--mdc-text-field-idle-line-color:rgba(255,255,255,0);--mdc-text-field-hover-line-color:rgba(255,255,255,0);"
                              label="${rt("login.Endpoint")}" value="${this.api_endpoint}" @keyup="${this._submitIfEnter}"></mwc-textfield>
                </div>
                <mwc-textfield class="endpoint-text" type="text" id="id_api_endpoint_humanized" maxLength="2048"
                            style="display:none;--mdc-text-field-idle-line-color:rgba(255,255,255,0);--mdc-text-field-hover-line-color:rgba(255,255,255,0);"
                            label="${rt("login.Endpoint")}" icon="cloud" value=""></mwc-textfield>
                <mwc-button
                      unelevated
                      id="login-button"
                      icon="check"
                      style="width:100%;"
                      label="${rt("login.Login")}"
                      @click="${()=>this._login()}"></mwc-button>
                ${this.signup_support&&this.allowAnonymousChangePassword?Z`
                <div class="layout horizontal" style="margin-top:2em;">
                  ${this.signup_support?Z`
                    <div class="vertical center-justified layout" style="width:100%;">
                      <div style="font-size:12px; margin:0 10px; text-align:center;">${rt("login.NotAUser")}</div>
                      <mwc-button
                          outlined
                          label="${rt("login.SignUp")}"
                          @click="${()=>this._showSignupDialog()}"></mwc-button>
                    </div>
                  `:Z``}
                  ${this.signup_support&&this.allowAnonymousChangePassword?Z`
                    <span class="flex" style="min-width:1em;"></span>
                  `:Z``}
                  ${this.allowAnonymousChangePassword?Z`
                    <div class="vertical center-justified layout" style="width:100%;">
                      <div style="font-size:12px; margin:0 10px; text-align:center;">${rt("login.ForgotPassword")}</div>
                      <mwc-button
                          outlined
                          label="${rt("login.ChangePassword")}"
                          @click="${()=>this._showChangePasswordEmailDialog()}"></mwc-button>
                    </div>
                  `:Z``}
                </div>`:Z``}
              </fieldset>
            </form>
          </div>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="signout-panel" fixed backdrop blockscrolling persistent disablefocustrap>
        <span slot="title">${rt("login.LeaveService")}</span>
        <div slot="content">
          <section>
            <div class="warning">${rt("login.DescConfirmLeave")}</div>
          </section>
          <mwc-textfield type="email" name="signout_user_id" id="id_signout_user_id" maxLength="64"
              label="E-mail" value="" @keyup="${this._signoutIfEnter}"></mwc-textfield>
          <mwc-textfield type="password" name="signout_password" id="id_signout_password" maxLength="64"
              label="Password" value="" @keyup="${this._signoutIfEnter}"></mwc-textfield>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              outlined
              id="signout-button"
              icon="check"
              label="${rt("login.LeaveService")}"
              @click="${()=>this._signout()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="change-password-confirm-dialog" fixed backdrop blockscrolling persistent disablefocustrap>
        <span slot="title">${rt("login.SendChangePasswordEmail")}</span>
        <div slot="content">
          <section>
            <div style="padding:1em">${rt("login.DescChangePasswordEmail")}</div>
          </section>
          <mwc-textfield type="email" id="password-change-email" maxLength="64"
              label="E-mail" value="" autofocus auto-validate
              validationMessage="${rt("signup.InvalidEmail")}"
              pattern="^[A-Z0-9a-z#-_]+@.+\\..+$"></mwc-textfield>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              outlined
              icon="check"
              label="${rt("login.EmailSendButton")}"
              @click="${()=>this._sendChangePasswordEmail()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="block-panel" fixed blockscrolling persistent>
        ${""!=this.blockMessage?Z`
          ${""!==this.blockType?Z`
            <span slot="title" id="work-title">${this.blockType}</span>
          `:Z``}
          <div slot="content" style="text-align:center;padding-top:15px;">
          ${this.blockMessage}
          </div>
          <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              outlined
              label="${rt("login.CancelLogin")}"
              @click="${t=>this._cancelLogin(t)}"></mwc-button>
          </div>
        `:Z``}
      </backend-ai-dialog>
      <backend-ai-signup id="signup-dialog"></backend-ai-signup>
    `}};r([yt({type:String})],ya.prototype,"api_key",void 0),r([yt({type:String})],ya.prototype,"secret_key",void 0),r([yt({type:String})],ya.prototype,"user_id",void 0),r([yt({type:String})],ya.prototype,"password",void 0),r([yt({type:String})],ya.prototype,"proxy_url",void 0),r([yt({type:String})],ya.prototype,"api_endpoint",void 0),r([yt({type:String})],ya.prototype,"domain_name",void 0),r([yt({type:String})],ya.prototype,"default_session_environment",void 0),r([yt({type:String})],ya.prototype,"default_import_environment",void 0),r([yt({type:String})],ya.prototype,"blockType",void 0),r([yt({type:String})],ya.prototype,"blockMessage",void 0),r([yt({type:String})],ya.prototype,"connection_mode",void 0),r([yt({type:Number})],ya.prototype,"login_attempt_limit",void 0),r([yt({type:Number})],ya.prototype,"login_block_time",void 0),r([yt({type:String})],ya.prototype,"user",void 0),r([yt({type:String})],ya.prototype,"email",void 0),r([yt({type:Object})],ya.prototype,"config",void 0),r([yt({type:Object})],ya.prototype,"loginPanel",void 0),r([yt({type:Object})],ya.prototype,"signoutPanel",void 0),r([yt({type:Object})],ya.prototype,"blockPanel",void 0),r([yt({type:Boolean})],ya.prototype,"is_connected",void 0),r([yt({type:Object})],ya.prototype,"clientConfig",void 0),r([yt({type:Object})],ya.prototype,"client",void 0),r([yt({type:Object})],ya.prototype,"notification",void 0),r([yt({type:Object})],ya.prototype,"user_groups",void 0),r([yt({type:Boolean})],ya.prototype,"signup_support",void 0),r([yt({type:Boolean})],ya.prototype,"allowAnonymousChangePassword",void 0),r([yt({type:Boolean})],ya.prototype,"change_signin_support",void 0),r([yt({type:Boolean})],ya.prototype,"allow_signout",void 0),r([yt({type:Boolean})],ya.prototype,"allow_project_resource_monitor",void 0),r([yt({type:Boolean})],ya.prototype,"openPortToPublic",void 0),r([yt({type:Boolean})],ya.prototype,"maxCPUCoresPerSession",void 0),r([yt({type:Boolean})],ya.prototype,"maxCUDADevicesPerSession",void 0),r([yt({type:Boolean})],ya.prototype,"maxShmPerSession",void 0),r([yt({type:Boolean})],ya.prototype,"maxFileUploadSize",void 0),r([yt({type:Array})],ya.prototype,"endpoints",void 0),r([yt({type:Object})],ya.prototype,"logoutTimerBeforeOneMin",void 0),r([yt({type:Object})],ya.prototype,"logoutTimer",void 0),ya=r([bt("backend-ai-login")],ya);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
class _a{constructor(t,e,i,r){this.tasktitle=t,this.taskid=i,this.taskobj=e,this.tasktype=r,this.created_at=Date.now(),this.finished_at=0,this.status="active"}remove(){delete this.taskobj}}let wa=class extends Ot{constructor(){super(),this.active=!0,this.isGCworking=!1,this.taskstore=[],this.finished=[],this.indicator=globalThis.lablupIndicator,this.pooler=setInterval((()=>{this.gc()}),1e4)}static get styles(){return[Ct``]}render(){return Z`
    `}shouldUpdate(){return this.active}firstUpdated(){}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}add(t,e,i="",r="general"){""===i&&(i=this.generate_UUID());let n=new _a(t,e,i,r);return null!=e&&"function"==typeof e.then&&(e.then().catch((t=>{})).finally((()=>{this.finished.push(i),this.gc()})),this.taskstore.push(n),this.signal(),n)}remove(t=""){let e=this.taskstore.filter((e=>e.taskid===t));if(e.length>0){let i=this.taskstore.indexOf(e[0]);i>-1&&(e[0].remove(),this.taskstore.splice(i,1)),delete e[0],i=this.finished.indexOf(t),i>-1&&this.finished.splice(i,1),this.signal()}}list(){return this.taskstore}generate_UUID(){let t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{let i=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?i:3&i|8).toString(16)}))}async gc(){this.isGCworking||(this.isGCworking=!0,this.finished.length>0&&this.finished.forEach((t=>{this.remove(t)})),this.isGCworking=!1)}signal(){let t=new CustomEvent("backend-ai-task-changed",{detail:{tasks:this.taskstore}});document.dispatchEvent(t)}};r([yt({type:Object})],wa.prototype,"indicator",void 0),r([yt({type:Array})],wa.prototype,"taskstore",void 0),r([yt({type:Array})],wa.prototype,"finished",void 0),r([yt({type:Object})],wa.prototype,"pooler",void 0),r([yt({type:Boolean})],wa.prototype,"active",void 0),r([yt({type:Boolean})],wa.prototype,"isGCworking",void 0),wa=r([bt("backend-ai-tasker")],wa);var xa=wa;c({loader:t=>fetch(`/resources/i18n/${t}.json`).then((t=>t.json()))}),globalThis.backendaioptions=new Qn,globalThis.tasker=new xa;let Ma=class extends(Pt(Jt)(Ot)){constructor(){super(),this.hasLoadedStrings=!1,this.menuTitle="LOGIN REQUIRED",this.siteDescription="",this.user_id="DISCONNECTED",this.full_name="DISCONNECTED",this.domain="CLICK TO CONNECT",this.is_connected=!1,this.is_admin=!1,this.is_superadmin=!1,this.allow_signout=!1,this.proxy_url="",this.connection_mode="API",this.connection_server="",this.edition="Open Source",this.validUntil="",this.groups=Array(),this.current_group="",this.plugins=Object(),this.splash=Object(),this.loginPanel=Object(),this._page="",this._lazyPage="",this._pageParams={},this._sidepanel="",this._drawerOpened=!1,this._offlineIndicatorOpened=!1,this._offline=!1,this._dropdownMenuIcon=Object(),this.config=Object(),this.TOSdialog=Object(),this.mini_ui=!1,this.auto_logout=!1,this.lang="default",this.supportLanguageCodes=["en","ko"],this.minibarWidth=88,this.sidebarWidth=250,this.sidepanelWidth=250,this.supports=Object(),this.availablePages=["summary","verify-email","change-password","job","data","statistics","usersettings","credential","environment","agent","settings","maintenance","information","github","import","unauthorized"],this.adminOnlyPages=["experiment","credential","environment","agent","settings","maintenance","information"],this.superAdminOnlyPages=["agent","settings","maintenance","information"],this.timeoutSec=5,this.blockedMenuitem=[]}static get styles(){return[Uo,No,$o,zo,Fo,Ct`
    `]}firstUpdated(){var t,e;let i;globalThis.lablupNotification=this.shadowRoot.querySelector("#notification"),globalThis.lablupIndicator=this.shadowRoot.querySelector("#indicator"),globalThis.appLauncher=this.shadowRoot.querySelector("#app-launcher"),globalThis.resourceBroker=this.shadowRoot.querySelector("#resource-broker"),globalThis.currentPage=this._page,globalThis.currentPageParams=this._pageParams,this.notification=globalThis.lablupNotification,this.appBody=this.shadowRoot.querySelector("#app-body"),this.appPage=this.shadowRoot.querySelector("#app-page"),this.contentBody=this.shadowRoot.querySelector("#content-body"),this.contentBody.type="dismissible",this.mainToolbar=this.shadowRoot.querySelector("#main-toolbar"),this.drawerToggleButton=this.shadowRoot.querySelector("#drawer-toggle-button"),this.sidebarMenu=this.shadowRoot.getElementById("sidebar-menu"),this.splash=this.shadowRoot.querySelector("#about-backendai-panel"),this.loginPanel=this.shadowRoot.querySelector("#login-panel"),this.TOSdialog=this.shadowRoot.querySelector("#terms-of-service"),this._dropdownMenuIcon=this.shadowRoot.querySelector("#dropdown-button"),globalThis.isElectron&&navigator.platform.indexOf("Mac")>=0&&(this.shadowRoot.querySelector(".portrait-canvas").style.visibility="hidden"),t=t=>Jt.dispatch(Vt(decodeURIComponent(t.pathname))),document.body.addEventListener("click",(e=>{if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const i=e.composedPath().filter((t=>"A"===t.tagName))[0];if(!i||i.target||i.hasAttribute("download")||"external"===i.getAttribute("rel"))return;const r=i.href;if(!r||-1!==r.indexOf("mailto:"))return;const n=window.location,o=n.origin||n.protocol+"//"+n.host;0===r.indexOf(o)&&(e.preventDefault(),r!==n.href&&(window.history.pushState({},"",r),t(n,e)))})),window.addEventListener("popstate",(e=>t(window.location,e))),t(window.location,null),e=t=>Jt.dispatch(Xt(t)),window.addEventListener("online",(()=>e(!1))),window.addEventListener("offline",(()=>e(!0))),e(!1===navigator.onLine),globalThis.isElectron?(i="./config.toml",document.addEventListener("backend-ai-logout",(()=>this.logout(!0))),document.addEventListener("backend-ai-app-close",(()=>this.close_app_window(!0))),document.addEventListener("backend-ai-show-splash",(()=>this.splash.show()))):(i="../../config.toml",document.addEventListener("backend-ai-logout",(()=>this.logout(!1)))),globalThis.addEventListener("beforeunload",(function(t){globalThis.backendaioptions.set("last_window_close_time",(new Date).getTime()/1e3)})),this._parseConfig(i).then((()=>{if(this.loadConfig(this.config),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)if("verify-email"===this._page){const t=this.shadowRoot.querySelector("backend-ai-email-verification-view");window.setTimeout((()=>{t.verify(this.loginPanel.api_endpoint)}),1e3)}else if("change-password"===this._page){const t=this.shadowRoot.querySelector("backend-ai-change-forgot-password-view");window.setTimeout((()=>{t.open(this.loginPanel.api_endpoint)}),1e3)}else{const t=new fa,e=window.performance.navigation&&1===window.performance.navigation.type||window.performance.getEntriesByType("navigation").map((t=>t.type)).includes("reload");t.tabsCount(!0),!0!==this.auto_logout||1!==t.tabsCounter||e||!0!==globalThis.backendaioptions.get("auto_logout",!1)?this.loginPanel.login(!1):this.loginPanel.check_login().then((t=>{let e=(new Date).getTime()/1e3;!0===t&&e-globalThis.backendaioptions.get("last_window_close_time",e)>3?this.loginPanel._logoutSession().then((()=>{this.loginPanel.open()})):!0===t?this.loginPanel.login(!1):this.loginPanel.open()}))}})).catch((t=>{console.log("Initialization failed."),void 0!==globalThis.backendaiclient&&null!==globalThis.backendaiclient&&!1!==globalThis.backendaiclient.ready||this.loginPanel.block("Configuration is not loaded.","Error")})),this.mini_ui=globalThis.backendaioptions.get("compact_sidebar"),globalThis.mini_ui=this.mini_ui,this._changeDrawerLayout(document.body.clientWidth,document.body.clientHeight),globalThis.addEventListener("resize",(t=>{this._changeDrawerLayout(document.body.clientWidth,document.body.clientHeight)})),document.addEventListener("current-user-info-changed",(t=>{if(globalThis.backendaiclient.supports("change-user-name")){let e=t.detail;this._updateFullname(e.full_name)}}))}async connectedCallback(){super.connectedCallback(),document.addEventListener("backend-ai-connected",(()=>this.refreshPage()));const t=globalThis.navigator.language.split("-")[0];"default"===globalThis.backendaioptions.get("language")&&this.supportLanguageCodes.includes(t)?this.lang=t:this.supportLanguageCodes.includes(globalThis.backendaioptions.get("language"))?this.lang=globalThis.backendaioptions.get("language"):this.lang="en",globalThis.backendaioptions.set("current_language",this.lang),await u(this.lang),this.hasLoadedStrings=!0}disconnectedCallback(){document.removeEventListener("backend-ai-connected",(()=>this.refreshPage())),super.disconnectedCallback()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}shouldUpdate(t){return this.hasLoadedStrings&&super.shouldUpdate(t)}loadConfig(t){if(void 0!==t.general&&"siteDescription"in t.general&&(this.siteDescription=t.general.siteDescription),void 0!==t.general&&"connectionMode"in t.general&&(this.connection_mode=t.general.connectionMode),void 0!==t.general&&"connectionServer"in t.general&&(this.connection_server=t.general.connectionServer),void 0!==t.general&&"autoLogout"in t.general&&(this.auto_logout=t.general.autoLogout),void 0!==t.license&&"edition"in t.license&&(this.edition=t.license.edition),void 0!==t.menu&&"blocklist"in t.menu&&(this.blockedMenuitem=t.menu.blocklist.split(",")),globalThis.packageEdition=this.edition,void 0!==t.license&&"validUntil"in t.license&&(this.validUntil=t.license.validUntil),globalThis.packageValidUntil=this.validUntil,void 0===t.general||void 0===t.general.allowSignout||""===t.general.allowSignout||0==t.general.allowSignout?this.allow_signout=!1:this.allow_signout=!0,void 0!==t.plugin&&("login"in t.plugin&&(this.plugins.login=t.plugin.login),"page"in t.plugin)){this.plugins.page=[],this.plugins.menuitem=[],this.plugins["menuitem-user"]=[],this.plugins["menuitem-admin"]=[],this.plugins["menuitem-superadmin"]=[];const e=[];for(let i of t.plugin.page.split(","))e.push(import("../plugins/"+i+".js").then((t=>{let e=document.createElement(i);switch(e.classList.add("page"),e.setAttribute("name",i),this.appPage.appendChild(e),this.plugins.menuitem.push(i),this.availablePages.push(i),e.permission){case"superadmin":this.plugins["menuitem-superadmin"].push(i),this.adminOnlyPages.push(i);break;case"admin":this.plugins["menuitem-admin"].push(i),this.adminOnlyPages.push(i);break;default:this.plugins["menuitem-user"].push(i)}return this.plugins.page.push({name:i,url:i,menuitem:e.menuitem}),Promise.resolve(!0)})));Promise.all(e).then((t=>{globalThis.backendaiPages=this.plugins.page;let e=new CustomEvent("backend-ai-plugin-loaded",{detail:!0});document.dispatchEvent(e),this.requestUpdate()}))}this.loginPanel.refreshWithConfig(t)}refreshPage(){this.shadowRoot.getElementById("sign-button").icon="exit_to_app",globalThis.backendaiclient.proxyURL=this.proxy_url,void 0!==globalThis.backendaiclient&&null!=globalThis.backendaiclient&&void 0!==globalThis.backendaiclient.is_admin&&!0===globalThis.backendaiclient.is_admin?this.is_admin=!0:this.is_admin=!1,void 0!==globalThis.backendaiclient&&null!=globalThis.backendaiclient&&void 0!==globalThis.backendaiclient.is_superadmin&&!0===globalThis.backendaiclient.is_superadmin?this.is_superadmin=!0:this.is_superadmin=!1,this._refreshUserInfoPanel(),this._writeRecentProjectGroup(this.current_group),document.body.style.backgroundImage="none",this.appBody.style.visibility="visible";let t=this.shadowRoot.getElementById("loading-curtain");t.classList.add("visuallyhidden"),t.addEventListener("transitionend",(()=>{t.classList.add("hidden"),this.is_connected=!0}),{capture:!1,once:!0,passive:!1}),this.addTooltips(),this.sidebarMenu.style.minHeight=this.is_admin||this.is_superadmin?"600px":"250px",this.is_admin||this.is_superadmin||(this.adminOnlyPages.includes(this._page)||"unauthorized"===this._page)&&(this._page="unauthorized",globalThis.history.pushState({},"","/unauthorized"),Jt.dispatch(Vt(decodeURIComponent(this._page)))),!this.is_superadmin&&this.superAdminOnlyPages.includes(this._page)&&(this._page="unauthorized",globalThis.history.pushState({},"","/unauthorized"),Jt.dispatch(Vt(decodeURIComponent(this._page))))}showUpdateNotifier(){let t=this.shadowRoot.getElementById("backend-ai-indicator");t.innerHTML='New console available. Please <a onclick="globalThis.location.reload()">reload</a> to update.',t.show()}_parseConfig(t){return fetch(t).then((t=>200==t.status?t.text():"")).then((t=>{var e,i,r;this.config=(e=t,i=new RegExp("^\\s*\\[(\\[)?(.*?)\\]\\]?(?= *$)((?:[\\w\\W](?!^\\s*\\[))*)","gm"),r={},en(e=(e="["===e[0]?e:"[]\n"+e).replace(/('{3,}(?:(?!'{3,})[\w\W]+?)'{3,})/gm,(function(t,e){if(e)return e.replace(/^(\s*)(\[)/gm,"$1__>>[<<__")})),i,(function(t,e){e[1]?nn(r,e[2].trim(),rn(e[3]),!0):""===e[2]?r=Object.assign({},r,rn(e[3])):nn(r,e[2].trim(),rn(e[3]),!1)})),JSON.parse(JSON.stringify(r,on),an))})).catch((t=>{console.log("Configuration file missing.")}))}toggleSidebarUI(){!0===this.contentBody.open&&(this._sidepanel="",this.toggleSidePanelUI()),this.mini_ui?this.mini_ui=!1:this.mini_ui=!0,globalThis.mini_ui=this.mini_ui;let t=new CustomEvent("backend-ai-ui-changed",{detail:{"mini-ui":this.mini_ui}});document.dispatchEvent(t),this._changeDrawerLayout(document.body.clientWidth,document.body.clientHeight)}toggleSidePanelUI(){this.contentBody.open?(this.contentBody.open=!1,this.mini_ui?this.mainToolbar.style.setProperty("--mdc-drawer-width",this.minibarWidth+"px"):this.mainToolbar.style.setProperty("--mdc-drawer-width",this.sidebarWidth+"px")):(this.contentBody.open=!0,this.contentBody.style.setProperty("--mdc-drawer-width",this.sidepanelWidth+"px"),this.mini_ui?this.mainToolbar.style.setProperty("--mdc-drawer-width",this.minibarWidth+this.sidepanelWidth+"px"):this.mainToolbar.style.setProperty("--mdc-drawer-width",this.sidebarWidth+this.sidepanelWidth+"px"))}toggleSidePanelType(){this.contentBody.type,this.contentBody.type}_openSidePanel(t){document.body.clientWidth<750&&(this.mini_ui=!0,this._changeDrawerLayout(document.body.clientWidth,document.body.clientHeight,!0)),!0===this.contentBody.open?t!=this._sidepanel?this._sidepanel=t:(this._sidepanel="",this.toggleSidePanelUI()):(this._sidepanel=t,this.toggleSidePanelUI())}_changeDrawerLayout(t,e,i=!1){this.mainToolbar.style.setProperty("--mdc-drawer-width","0px"),t<700&&!i?(this.appBody.style.setProperty("--mdc-drawer-width",this.sidebarWidth+"px"),this.appBody.type="modal",this.appBody.open=!1,this.mainToolbar.style.setProperty("--mdc-drawer-width","0px"),this.drawerToggleButton.style.display="block",this.mini_ui&&(this.mini_ui=!1,globalThis.mini_ui=this.mini_ui),this.contentBody.open&&(this.contentBody.open=!1)):(this.mini_ui?(this.appBody.style.setProperty("--mdc-drawer-width",this.minibarWidth+"px"),this.mainToolbar.style.setProperty("--mdc-drawer-width",this.minibarWidth+"px"),this.contentBody.style.width=t-this.minibarWidth+"px",this.contentBody.open&&this.mainToolbar.style.setProperty("--mdc-drawer-width",this.minibarWidth+this.sidebarWidth+"px")):(this.appBody.style.setProperty("--mdc-drawer-width",this.sidebarWidth+"px"),this.mainToolbar.style.setProperty("--mdc-drawer-width",this.sidebarWidth+"px"),this.contentBody.style.width=t-this.sidebarWidth+"px",this.contentBody.open&&this.mainToolbar.style.setProperty("--mdc-drawer-width",this.sidebarWidth+this.sidepanelWidth+"px")),this.appBody.type="dismissible",this.appBody.open=!0,this.drawerToggleButton.style.display="none"),this.contentBody.open&&this.contentBody.style.setProperty("--mdc-drawer-width",this.sidepanelWidth+"px")}_refreshUserInfoPanel(){this.user_id=globalThis.backendaiclient.email,this.full_name=globalThis.backendaiclient.full_name,this.domain=globalThis.backendaiclient._config.domainName,this.current_group=this._readRecentProjectGroup(),globalThis.backendaiclient.current_group=this.current_group,this.groups=globalThis.backendaiclient.groups;let t=this.shadowRoot.getElementById("group-select-box");t.hasChildNodes()&&t.removeChild(t.firstChild);let e=document.createElement("div");e.className="horizontal center center-justified layout";let i=document.createElement("p");i.setAttribute("style","font-size:12px;color:#8c8484;"),i.innerHTML=""+p("console.menu.Project");let r=document.createElement("mwc-select");r.id="group-select",r.value=this.current_group,r.style.width="auto",r.addEventListener("selected",(t=>this.changeGroup(t)));let n=document.createElement("mwc-list-item");n.setAttribute("disabled","true"),n.innerHTML=p("console.menu.SelectProject"),n.style.borderBottom="1px solid #ccc",r.appendChild(n),this.groups.map((t=>{n=document.createElement("mwc-list-item"),n.value=t,this.current_group===t?n.selected=!0:n.selected=!1,n.innerHTML=t,r.appendChild(n)})),e.appendChild(i),e.appendChild(r),t.appendChild(e)}_loadPageElement(){"index.html"!==this._page&&""!==this._page||(this._page="summary")}async _openUserPrefDialog(){this.shadowRoot.querySelector("#user-preference-dialog").show()}_hideUserPrefDialog(){this.shadowRoot.querySelector("#user-preference-dialog").hide()}_togglePasswordVisibility(t){const e=t.__on,i=t.closest("div").querySelector("mwc-textfield");e?i.setAttribute("type","text"):i.setAttribute("type","password")}_validatePassword1(){const t=this.shadowRoot.querySelector("#pref-new-password");this.shadowRoot.querySelector("#pref-new-password2").reportValidity(),t.validityTransform=(e,i)=>i.valid?{valid:i.valid,customError:!i.valid}:i.valueMissing?(t.validationMessage=p("signup.PasswordInputRequired"),{valid:i.valid,customError:!i.valid}):(t.validationMessage=p("signup.PasswordInvalid"),{valid:i.valid,customError:!i.valid})}_validatePassword2(){const t=this.shadowRoot.querySelector("#pref-new-password2");t.validityTransform=(e,i)=>{if(i.valid){let e=this.shadowRoot.querySelector("#pref-new-password").value===t.value;return e||(t.validationMessage=p("signup.PasswordNotMatched")),{valid:e,customError:!e}}return i.valueMissing?(t.validationMessage=p("signup.PasswordInputRequired"),{valid:i.valid,customError:!i.valid}):(t.validationMessage=p("signup.PasswordInvalid"),{valid:i.valid,customError:!i.valid})}}_validatePassword(){this._validatePassword1(),this._validatePassword2()}_updateUserInformation(){globalThis.backendaiclient.supports("change-user-name")&&this._updateFullname(),this._updateUserPassword()}async _updateFullname(t=""){if((t=""===t?this.shadowRoot.querySelector("#pref-original-name").value:t).length>64)return this.notification.text=p("console.menu.FullNameInvalid"),void this.notification.show();globalThis.backendaiclient.supports("change-user-name")?t&&t!==this.full_name&&globalThis.backendaiclient.user.update(this.user_id,{full_name:t}).then((e=>{this.notification.text=p("console.menu.FullnameUpdated"),this.notification.show(),this.full_name=globalThis.backendaiclient.full_name=t,this.shadowRoot.querySelector("#pref-original-name").value=this.full_name})).catch((t=>t&&t.message?(this.notification.text=t.message,this.notification.detail=t.message,void this.notification.show(!0,t)):t&&t.title?(this.notification.text=t.title,this.notification.detail=t.message,void this.notification.show(!0,t)):void 0)):(this.notification.text=p("error.APINotSupported"),this.notification.show())}async _updateUserPassword(){const t=this.shadowRoot.querySelector("#user-preference-dialog"),e=t.querySelector("#pref-original-password").value,i=t.querySelector("#pref-new-password"),r=t.querySelector("#pref-new-password2");if(!e&&!i.value&&!r.value)return void this._hideUserPrefDialog();if(!e)return this.notification.text=p("console.menu.InputOriginalPassword"),void this.notification.show();if(!i.value||!i.validity.valid)return this.notification.text=p("console.menu.InvalidPasswordMessage"),void this.notification.show();if(i.value!==r.value)return this.notification.text=p("console.menu.NewPasswordMismatch"),void this.notification.show();globalThis.backendaiclient.update_password(e,i.value,r.value).then((t=>{this.notification.text=p("console.menu.PasswordUpdated"),this.notification.show(),this._hideUserPrefDialog()})).catch((t=>t&&t.message?(this.notification.text=t.message,this.notification.detail=t.message,void this.notification.show(!0,t)):t&&t.title?(this.notification.text=t.title,this.notification.detail=t.message,void this.notification.show(!0,t)):void 0)).finally((()=>{this.shadowRoot.querySelector("#pref-original-password").value="",this.shadowRoot.querySelector("#pref-new-password").value="",this.shadowRoot.querySelector("#pref-new-password2").value=""}))}_menuSelected(t){}updated(t){if(t.has("_page")){let t=this._page;if(!0!==this.availablePages.includes(t)){let e=t.split(/[\/]+/).pop();void 0!==e&&(t=e)}this._page=t,this._updateSidebar(t)}}_updateSidebar(t){switch(t){case"summary":case"verify-email":this.menuTitle=p("console.menu.Summary");break;case"change-password":this.menuTitle=p("console.menu.Summary")+this.user_id;break;case"job":this.menuTitle=p("console.menu.Sessions");break;case"experiment":this.menuTitle=p("console.menu.Experiments");break;case"data":this.menuTitle=p("console.menu.Data&Storage");break;case"statistics":this.menuTitle=p("console.menu.Statistics");break;case"usersettings":this.menuTitle=p("console.menu.Settings&Logs");break;case"credential":this.menuTitle=p("console.menu.UserCredentials&Policies");break;case"environment":this.menuTitle=p("console.menu.Environments&Presets");break;case"agent":this.menuTitle=p("console.menu.ComputationResources");break;case"settings":this.menuTitle=p("console.menu.Configurations");break;case"maintenance":this.menuTitle=p("console.menu.Maintenance");break;case"information":this.menuTitle=p("console.menu.Information");break;case"logs":this.menuTitle=p("console.menu.Logs");break;case"github":case"import":this.menuTitle=p("console.menu.Import&Run");break;default:if("menuitem"in this.plugins&&this.plugins.menuitem.includes(t)){this.menuTitle=t;break}"error"!==this._page&&(this._lazyPage=this._page),document.addEventListener("backend-ai-plugin-loaded",(()=>{if(this._page=this._lazyPage,!0!==this.availablePages.includes(this._page)&&(this._page="error"),"menuitem"in this.plugins&&this.plugins.menuitem.includes(this._page)){let t=this.shadowRoot.querySelector(this._page);t.active=!0,t.setAttribute("active",!0),t.render()}}))}}async close_app_window(t=!1){if(!1===globalThis.backendaioptions.get("preserve_login")){this.notification.text=p("console.CleanUpLoginSession"),this.notification.show();const t=Object.keys(localStorage);for(let e=0;e<t.length;e++){const i=t[e];/^(backendaiconsole\.login\.)/.test(i)&&localStorage.removeItem(i)}sessionStorage.clear()}void 0!==globalThis.backendaiclient&&null!==globalThis.backendaiclient&&("SESSION"===globalThis.backendaiclient._config.connectionMode&&await globalThis.backendaiclient.logout(),globalThis.backendaiclient=null)}async logout(t=!1){if(console.log("also close the app:",t),this._deleteRecentProjectGroupInfo(),void 0!==globalThis.backendaiclient&&null!==globalThis.backendaiclient){this.notification.text=p("console.CleanUpNow"),this.notification.show(),"SESSION"===globalThis.backendaiclient._config.connectionMode&&await globalThis.backendaiclient.logout(),this.is_admin=!1,this.is_superadmin=!1,globalThis.backendaiclient=null;const e=Object.keys(localStorage);for(let t=0;t<e.length;t++){const i=e[t];/^(backendaiconsole\.login\.)/.test(i)&&localStorage.removeItem(i)}if(sessionStorage.clear(),!0===t);else if(globalThis.isElectron){this.user_id="",this.domain="",this._page="summary",globalThis.history.pushState({},"","/summary"),Jt.dispatch(Vt(decodeURIComponent("/"))),document.body.style.backgroundImage='url("/resources/images/loading-background-large.jpg")',this.appBody.style.visibility="hidden";let t=this.shadowRoot.getElementById("loading-curtain");t.classList.remove("visuallyhidden"),t.addEventListener("transitionend",(()=>{t.classList.remove("hidden")}),{capture:!1,once:!0,passive:!1}),this.loginPanel.open()}else globalThis.location.reload()}}updateTitleColor(t,e){this.shadowRoot.querySelector("#main-toolbar").style.setProperty("--mdc-theme-primary",t),this.shadowRoot.querySelector("#main-toolbar").style.color=e}changeGroup(t){globalThis.backendaiclient.current_group=t.target.value,this.current_group=globalThis.backendaiclient.current_group,this._writeRecentProjectGroup(globalThis.backendaiclient.current_group);let e=new CustomEvent("backend-ai-group-changed",{detail:globalThis.backendaiclient.current_group});document.dispatchEvent(e)}toggleDrawer(){let t=this.shadowRoot.querySelector("mwc-drawer");!0===t.open?t.open=!1:t.open=!0}_toggleDropdown(){let t=this.shadowRoot.querySelector("#dropdown-menu"),e=this._dropdownMenuIcon;t.anchor=e,t.open=!t.open}showTOSAgreement(){this.TOSdialog.tosContent="",this.TOSdialog.tosLanguage=this.lang,this.TOSdialog.title=p("console.menu.TermsOfService"),this.TOSdialog.tosEntry="terms-of-service",this.TOSdialog.open()}showPPAgreement(){this.TOSdialog.tosContent="",this.TOSdialog.tosLanguage=this.lang,this.TOSdialog.title=p("console.menu.PrivacyPolicy"),this.TOSdialog.tosEntry="privacy-policy",this.TOSdialog.open()}_moveTo(t){let e=t.split("/")[1];if(!this.availablePages.includes(e)&&this.is_admin&&!this.adminOnlyPages.includes(e))return Jt.dispatch(Vt(decodeURIComponent("/error"))),void(this._page="error");if(globalThis.history.pushState({},"",t),Jt.dispatch(Vt(decodeURIComponent(t),{})),"menuitem"in this.plugins){for(let t of this.plugins.menuitem)if(t!==this._page){let e=this.shadowRoot.querySelector(t);e.active=!1,e.removeAttribute("active")}if(this.plugins.menuitem.includes(this._page)){let t=this.shadowRoot.querySelector(this._page);t.active=!0,t.setAttribute("active",!0),t.render()}}}_moveToLogPage(){let t=globalThis.location.toString().split(/[\/]+/).pop();if(globalThis.history.pushState({},"","/usersettings"),Jt.dispatch(Vt(decodeURIComponent("/usersettings"),{tab:"logs"})),t&&"usersettings"===t){let t=new CustomEvent("backend-ai-usersettings-logs",{});document.dispatchEvent(t)}}_readRecentProjectGroup(){let t=globalThis.backendaiclient._config.endpointHost.replace(/\./g,"_"),e=globalThis.backendaioptions.get("projectGroup."+t);return e?globalThis.backendaiclient.groups.length>0&&globalThis.backendaiclient.groups.includes(e)?e:(this._deleteRecentProjectGroupInfo(),globalThis.backendaiclient.current_group):globalThis.backendaiclient.current_group}_writeRecentProjectGroup(t){let e=globalThis.backendaiclient._config.endpointHost.replace(/\./g,"_");globalThis.backendaioptions.set("projectGroup."+e,t||globalThis.backendaiclient.current_group)}_deleteRecentProjectGroupInfo(){let t=globalThis.backendaiclient._config.endpointHost.replace(/\./g,"_");globalThis.backendaioptions.delete("projectGroup."+t)}_moveToUserSettingsPage(){let t=globalThis.location.toString().split(/[\/]+/).pop();if(globalThis.history.pushState({},"","/usersettings"),Jt.dispatch(Vt(decodeURIComponent("/usersettings"),{tab:"general"})),t&&"usersettings"===t){let t=new CustomEvent("backend-ai-usersettings",{});document.dispatchEvent(t)}}async addTooltips(){this._createPopover("#summary-menu-icon",p("console.menu.Summary")),this._createPopover("#sessions-menu-icon",p("console.menu.Sessions")),this._createPopover("#data-menu-icon",p("console.menu.Data&Storage")),this._createPopover("#import-menu-icon",p("console.menu.Import&Run")),this._createPopover("#statistics-menu-icon",p("console.menu.Statistics")),this._createPopover("#usersettings-menu-icon",p("console.menu.Settings")),this._createPopover("backend-ai-help-button",p("console.menu.Help")),this.is_admin&&this._createPopover("#user-menu-icon",p("console.menu.Users")),this.is_superadmin&&(this._createPopover("#resources-menu-icon",p("console.menu.Resources")),this._createPopover("#environments-menu-icon",p("console.menu.Environments")),this._createPopover("#configurations-menu-icon",p("console.menu.Configurations")),this._createPopover("#maintenance-menu-icon",p("console.menu.Maintenance")),this._createPopover("#information-menu-icon",p("console.menu.Information")))}_createPopover(t,e){let i=document.createElement("wl-popover");i.anchor=t,i.setAttribute("fixed",""),i.setAttribute("disablefocustrap",""),i.setAttribute("anchororiginx","right"),i.setAttribute("anchororiginy","center"),i.setAttribute("transformoriginx","left"),i.setAttribute("transformoriginy","center"),i.anchorOpenEvents=["mouseover"],i.anchorCloseEvents=["mouseout"];let r=document.createElement("wl-popover-card"),n=document.createElement("div");n.style.padding="5px",n.innerText=e,r.appendChild(n),i.appendChild(r),this.shadowRoot.querySelector("#mini-tooltips").appendChild(i)}stateChanged(t){this._page=t.app.page,this._pageParams=t.app.params,this._offline=t.app.offline,this._offlineIndicatorOpened=t.app.offlineIndicatorOpened,this._drawerOpened=t.app.drawerOpened,globalThis.currentPage=this._page,globalThis.currentPageParams=this._pageParams}_getUsername(){return this.full_name?this.full_name:this.user_id}render(){return Z`
      <link rel="stylesheet" href="resources/fonts/font-awesome-all.min.css">
      <link rel="stylesheet" href="resources/custom.css">
      <div id="loading-curtain" class="loading-background"></div>
      <mwc-drawer id="app-body" class="${this.mini_ui?"mini-ui":""}" style="visibility:hidden;">
        <div class="drawer-menu" style="height:100vh;">
          <div id="portrait-bar" class="draggable">
            <div class="horizontal center layout flex bar draggable" style="cursor:pointer;" @click="${()=>this._moveTo("/summary")}">
              <div class="portrait-canvas"></div>
              <div class="vertical start-justified layout full-menu" style="margin-left:10px;margin-right:10px;">
                <div class="site-name"><span class="bold">Backend</span>.AI</div>
                ${this.siteDescription?Z`
                  <div class="site-name" style="font-size:13px;text-align:left;">
                    ${this.siteDescription}
                  </div>`:Z``}
              </div>
              <span class="flex"></span>
            </div>
          </div>
          <div class="horizontal center-justified center layout flex" style="max-height:40px;">
            <mwc-icon-button id="mini-ui-toggle-button" style="color:#fff;" icon="menu" slot="navigationIcon" @click="${()=>this.toggleSidebarUI()}"></mwc-icon-button>
            <mwc-icon-button disabled class="temporarily-hide full-menu side-menu fg ${this.contentBody&&!0===this.contentBody.open&&"feedback"===this._sidepanel?"yellow":"white"}" id="feedback-icon" icon="question_answer"></mwc-icon-button>
            <mwc-icon-button class="full-menu side-menu fg ${this.contentBody&&!0===this.contentBody.open&&"notification"===this._sidepanel?"yellow":"white"}" id="notification-icon" icon="notification_important" @click="${()=>this._openSidePanel("notification")}"></mwc-icon-button>
            <mwc-icon-button class="full-menu side-menu fg ${this.contentBody&&!0===this.contentBody.open&&"task"===this._sidepanel?"yellow":"white"}" id="task-icon" icon="ballot" @click="${()=>this._openSidePanel("task")}"></mwc-icon-button>
          </div>
          <mwc-list id="sidebar-menu" class="sidebar list" @selected="${t=>this._menuSelected(t)}">
            <mwc-list-item graphic="icon" ?selected="${"summary"===this._page}" @click="${()=>this._moveTo("/summary")}" ?disabled="${this.blockedMenuitem.includes("summary")}">
              <i class="fas fa-th-large" slot="graphic" id="summary-menu-icon"></i>
              <span class="full-menu">${rt("console.menu.Summary")}</span>
            </mwc-list-item>
            <mwc-list-item graphic="icon" ?selected="${"job"===this._page}" @click="${()=>this._moveTo("/job")}" ?disabled="${this.blockedMenuitem.includes("job")}">
              <i class="fas fa-list-alt" slot="graphic" id="sessions-menu-icon"></i>
              <span class="full-menu">${rt("console.menu.Sessions")}</span>
            </mwc-list-item>
            ${Z``}
            <mwc-list-item graphic="icon" ?selected="${"github"===this._page||"import"===this._page}" @click="${()=>this._moveTo("/import")}" ?disabled="${this.blockedMenuitem.includes("import")}">
              <i class="fas fa-play" slot="graphic" id="import-menu-icon"></i>
              <span class="full-menu">${rt("console.menu.Import&Run")}</span>
            </mwc-list-item>
            <mwc-list-item graphic="icon" ?selected="${"data"===this._page}" @click="${()=>this._moveTo("/data")}" ?disabled="${this.blockedMenuitem.includes("data")}">
              <i class="fas fa-cloud-upload-alt" slot="graphic" id="data-menu-icon"></i>
              <span class="full-menu">${rt("console.menu.Data&Storage")}</span>
            </mwc-list-item>
            <mwc-list-item graphic="icon" ?selected="${"statistics"===this._page}" @click="${()=>this._moveTo("/statistics")}" ?disabled="${this.blockedMenuitem.includes("statistics")}">
              <i class="fas fa-chart-bar" slot="graphic" id="statistics-menu-icon"></i>
              <span class="full-menu">${rt("console.menu.Statistics")}</span>
            </mwc-list-item>
            ${"page"in this.plugins?this.plugins.page.filter((t=>this.plugins["menuitem-user"].includes(t.url))).map((t=>Z`
            <mwc-list-item graphic="icon" ?selected="${this._page===t.url}" @click="${()=>this._moveTo("/"+t.url)}" ?disabled="${!this.is_admin}">
              <i class="fas fa-puzzle-piece" slot="graphic" id="${t}-menu-icon"></i>
              <span class="full-menu">${t.menuitem}</span>
            </mwc-list-item>
            `)):Z``}
            ${this.is_admin?Z`
                <h3 class="full-menu">${rt("console.menu.Administration")}</h3>
                <mwc-list-item graphic="icon" ?selected="${"credential"===this._page}" @click="${()=>this._moveTo("/credential")}" ?disabled="${!this.is_admin}">
                  <i class="fas fa-address-card" slot="graphic" id="user-menu-icon"></i>
                  <span class="full-menu">${rt("console.menu.Users")}</span>
                </mwc-list-item>
                <mwc-list-item graphic="icon" ?selected="${"environment"===this._page}" @click="${()=>this._moveTo("/environment")}" ?disabled="${!this.is_admin}">
                  <i class="fas fa-microchip" slot="graphic" id="environments-menu-icon"></i>
                  <span class="full-menu">${rt("console.menu.Environments")}</span>
                </mwc-list-item>`:Z``}
                ${"page"in this.plugins?this.plugins.page.filter((t=>this.plugins["menuitem-admin"].includes(t.url))).map((t=>Z`
                <mwc-list-item graphic="icon" ?selected="${this._page===t.url}" @click="${()=>this._moveTo("/"+t.url)}" ?disabled="${!this.is_admin}">
                  <i class="fas fa-puzzle-piece" slot="graphic" id="${t}-menu-icon"></i>
                  <span class="full-menu">${t.menuitem}</span>
                </mwc-list-item>
                `)):Z``}
            ${this.is_superadmin?Z`
                <mwc-list-item graphic="icon" ?selected="${"agent"===this._page}" @click="${()=>this._moveTo("/agent")}" ?disabled="${!this.is_superadmin}">
                  <i class="fas fa-server" slot="graphic" id="resources-menu-icon"></i>
                  <span class="full-menu">${rt("console.menu.Resources")}</span>
                </mwc-list-item>
                <mwc-list-item graphic="icon" ?selected="${"settings"===this._page}" @click="${()=>this._moveTo("/settings")}" ?disabled="${!this.is_superadmin}">
                  <i class="fas fa-cog" slot="graphic" id="configurations-menu-icon"></i>
                  <span class="full-menu">${rt("console.menu.Configurations")}</span>
                </mwc-list-item>
                <mwc-list-item graphic="icon" ?selected="${"maintenance"===this._page}" @click="${()=>this._moveTo("/maintenance")}" ?disabled="${!this.is_superadmin}">
                  <i class="fas fa-wrench" slot="graphic" id="maintenance-menu-icon"></i>
                  <span class="full-menu">${rt("console.menu.Maintenance")}</span>
                </mwc-list-item>
                <mwc-list-item graphic="icon" ?selected="${"information"===this._page}" @click="${()=>this._moveTo("/information")}" ?disabled="${!this.is_superadmin}">
                  <i class="fas fa-info-circle" slot="graphic" id="information-menu-icon"></i>
                  <span class="full-menu">${rt("console.menu.Information")}</span>
                </mwc-list-item>
                ${"page"in this.plugins?this.plugins.page.filter((t=>this.plugins["menuitem-superadmin"].includes(t.url))).map((t=>Z`
                <mwc-list-item graphic="icon" ?selected="${this._page===t.url}" @click="${()=>this._moveTo("/"+t.url)}" ?disabled="${!this.is_admin}">
                  <i class="fas fa-puzzle-piece" slot="graphic" id="${t}-menu-icon"></i>
                  <span class="full-menu">${t.menuitem}</span>
                </mwc-list-item>
                `)):Z``}
            `:Z``}
            <footer id="short-height">
              <div class="terms-of-use full-menu" style="margin-bottom:10px;">
                <small style="font-size:11px;">
                  <a @click="${()=>this.showTOSAgreement()}">${rt("console.menu.TermsOfService")}</a>
                  ·
                  <a style="color:forestgreen;" @click="${()=>this.showPPAgreement()}">${rt("console.menu.PrivacyPolicy")}</a>
                  ·
                  <a @click="${()=>this.splash.show()}">${rt("console.menu.AboutBackendAI")}</a>
                  ${!0===this.allow_signout?Z`
                  ·
                  <a @click="${()=>this.loginPanel.signout()}">${rt("console.menu.LeaveService")}</a>
                  `:Z``}
                </small>
              </div>
              <address class="full-menu">
                <small class="sidebar-footer">Lablup Inc.</small>
                <small class="sidebar-footer" style="font-size:9px;">21.01.0.210104</small>
              </address>
              <div id="sidebar-navbar-footer" class="vertical start end-justified layout" style="margin-left:16px;">
                <backend-ai-help-button active style="margin-left:4px;"></backend-ai-help-button>
                <mwc-icon-button id="usersettings-menu-icon" icon="settings" slot="graphic" class="fg ${"usersettings"===this._page?"yellow":"white"}" style="margin-left:4px;" @click="${()=>this._moveTo("/usersettings")}"></mwc-icon-button>
              </div>
            </footer>
          </mwc-list>
          <footer>
            <div class="terms-of-use full-menu" style="margin-bottom:10px;">
              <small style="font-size:11px;">
                <a @click="${()=>this.showTOSAgreement()}">${rt("console.menu.TermsOfService")}</a>
                ·
                <a style="color:forestgreen;" @click="${()=>this.showPPAgreement()}">${rt("console.menu.PrivacyPolicy")}</a>
                ·
                <a @click="${()=>this.splash.show()}">${rt("console.menu.AboutBackendAI")}</a>
                ${!0===this.allow_signout?Z`
                ·
                <a @click="${()=>this.loginPanel.signout()}">${rt("console.menu.LeaveService")}</a>
                `:Z``}
              </small>
            </div>
            <address class="full-menu">
              <small class="sidebar-footer">Lablup Inc.</small>
              <small class="sidebar-footer" style="font-size:9px;">21.01.0.210104</small>
            </address>
            <div id="sidebar-navbar-footer" class="vertical start end-justified layout" style="margin-left:16px;">
              <backend-ai-help-button active style="margin-left:4px;"></backend-ai-help-button>
              <mwc-icon-button id="usersettings-menu-icon" icon="settings" slot="graphic" class="fg ${"usersettings"===this._page?"yellow":"white"}" style="margin-left:4px;" @click="${()=>this._moveTo("/usersettings")}"></mwc-icon-button>
            </div>
          </footer>
        </div>
        <div id="app-content" slot="appContent">
          <mwc-drawer id="content-body">
            <div class="sidepanel-drawer">
              <backend-ai-sidepanel-notification class="sidepanel" ?active="${"notification"===this._sidepanel}"></backend-ai-sidepanel-notification>
              <backend-ai-sidepanel-task class="sidepanel" ?active="${"task"===this._sidepanel}"></backend-ai-sidepanel-task>
            </div>
            <div slot="appContent">
              <mwc-top-app-bar-fixed id="main-toolbar" class="draggable">
                <div class="horizontal layout center" id="drawer-toggle-button" slot="navigationIcon" style="margin:auto 20px;" @click="${()=>this.toggleDrawer()}">
                  <i class="fas fa-bars fa-lg" style="color:#747474;"></i>
                </div>
                <div slot="navigationIcon" class="vertical-line" style="height:35px;"></div>
                <div class="horizontal layout" slot="title" style="font-size:12px;margin-left:10px;padding-top:10px;">
                  <p>${rt("console.menu.WelcomeMessage")}</p>
                  <p>&nbsp;${this._getUsername()}${rt("console.menu.WelcomeMessage_2")}</p>
                </div>
                <div slot="actionItems" style="margin:0px;">
                  <div class="horizontal flex center layout">
                    <div id="group-select-box" style="height:48px;"></div>
                    <div class="vertical-line" style="height:35px;"></div>
                    <div class="horizontal center layout">
                      <div class="vertical layout center" style="position:relative;padding-top:10px;">
                        <span class="email" style="color:#8c8484;font-size:12px;line-height:22px;text-align:left;-webkit-font-smoothing:antialiased;margin:auto 10px;">
                          ${rt("console.menu.UserName")}
                        </span>
                        <mwc-menu id="dropdown-menu" class="user-menu">
                          ${"default"!==this.domain&&""!==this.domain?Z`
                          <mwc-list-item class="horizontal layout start center" disabled style="border-bottom:1px solid #ccc;">
                              ${this.domain}
                          </mwc-list-item>
                          `:Z``}
                          <mwc-list-item class="horizontal layout start center" disabled style="border-bottom:1px solid #ccc;">
                              ${this.user_id}
                          </mwc-list-item>
                          <mwc-list-item class="horizontal layout start center" @click="${()=>this.splash.show()}">
                              <mwc-icon class="dropdown-menu">info</mwc-icon>
                              ${rt("console.menu.AboutBackendAI")}
                          </mwc-list-item>
                          <mwc-list-item class="horizontal layout start center" @click="${()=>this._openUserPrefDialog()}">
                              <mwc-icon class="dropdown-menu">lock</mwc-icon>
                              ${rt("console.menu.ChangeUserInfo")}
                          </mwc-list-item>
                          <mwc-list-item class="horizontal layout start center" @click="${()=>this._moveToUserSettingsPage()}">
                              <mwc-icon class="dropdown-menu">drag_indicator</mwc-icon>
                              ${rt("console.menu.Preferences")}
                          </mwc-list-item>
                          <mwc-list-item class="horizontal layout start center" @click="${()=>this._moveToLogPage()}">
                              <mwc-icon class="dropdown-menu">assignment</mwc-icon>
                              ${rt("console.menu.LogsErrors")}
                          </mwc-list-item>
                          <mwc-list-item class="horizontal layout start center" id="sign-button" @click="${()=>this.logout()}">
                              <mwc-icon class="dropdown-menu">logout</mwc-icon>
                              ${rt("console.menu.LogOut")}
                          </mwc-list-item>
                        </mwc-menu>
                      </div>
                      <span class="full_name" style="font-size:14px;text-align:right;-webkit-font-smoothing:antialiased;margin:auto 0px auto 10px; padding-top:10px;">
                        ${this.full_name}
                      </span>
                      <mwc-icon-button id="dropdown-button" @click="${()=>this._toggleDropdown()}" style="font-size: 0.5rem;">
                        <i class="fas fa-user-alt fa-xs" style="color:#8c8484;"></i>
                      </mwc-icon-button>
                      <div class="vertical-line" style="height:35px;"></div>
                      <div class="horizontal layout center" style="margin:auto 10px;padding-top:10px;">
                        <span class="log_out" style="font-size:12px;margin:auto 0px;color:#8c8484;">
                          ${p("console.menu.LogOut")}
                        </span>
                        <mwc-icon-button @click="${()=>this.logout()}" style="padding-bottom:5px;">
                          <i class="fas fa-sign-out-alt fa-xs" style="color:#8c8484;"></i>
                        </mwc-icon-button>
                      </div>
                    </div>
                  </div>
                </div>
              </mwc-top-app-bar-fixed>

              <div class="content">
                <div id="navbar-top" class="navbar-top horizontal flex layout wrap"></div>
                <section role="main" id="content" class="container layout vertical center">
                  <div id="app-page">
                    <backend-ai-summary-view class="page" name="summary" ?active="${"summary"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-summary-view>
                    <backend-ai-import-view class="page" name="import" ?active="${"github"===this._page||"import"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-import-view>
                    <backend-ai-session-view class="page" name="job" ?active="${"job"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-session-view>
                    <!--<backend-ai-experiment-view class="page" name="experiment" ?active="${"experiment"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-experiment-view>-->
                    <backend-ai-usersettings-view class="page" name="usersettings" ?active="${"usersettings"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-usersettings-view>
                    <backend-ai-credential-view class="page" name="credential" ?active="${"credential"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-credential-view>
                    <backend-ai-agent-view class="page" name="agent" ?active="${"agent"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-agent-view>
                    <backend-ai-data-view class="page" name="data" ?active="${"data"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-data-view>
                    <backend-ai-environment-view class="page" name="environment" ?active="${"environment"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-environment-view>
                    <backend-ai-settings-view class="page" name="settings" ?active="${"settings"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-settings-view>
                    <backend-ai-maintenance-view class="page" name="maintenance" ?active="${"maintenance"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-maintenance-view>
                    <backend-ai-information-view class="page" name="information" ?active="${"information"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-information-view>
                    <backend-ai-statistics-view class="page" name="statistics" ?active="${"statistics"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-statistics-view>
                    <backend-ai-email-verification-view class="page" name="email-verification" ?active="${"verify-email"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-email-verification-view>
                    <backend-ai-change-forgot-password-view class="page" name="change-forgot-password" ?active="${"change-password"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-change-forgot-password-view>
                    <backend-ai-error-view class="page" name="error" ?active="${"error"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-error-view>
                    <backend-ai-permission-denied-view class="page" name="unauthorized" ?active="${"unauthorized"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-permission-denied-view>
                  </div>
                </section>
              </div>
            </div>
          </mwc-drawer>
        </div>
      </mwc-drawer>
      <div id="mini-tooltips" style="display:${this.mini_ui?"block":"none"};">
        <wl-popover anchor="#mini-ui-toggle-button" .anchorOpenEvents="${["mouseover"]}" fixed disablefocustrap
           anchororiginx="right" anchororiginy="center" transformoriginx="left" transformOriginY="center">
          <wl-popover-card>
            <div style="padding:5px">
              <mwc-icon-button disabled class="temporarily-hide side-menu fg ${this.contentBody&&!0===this.contentBody.open&&"feedback"===this._sidepanel?"red":"black"}" id="feedback-icon-popover" icon="question_answer"></mwc-icon-button>
              <mwc-icon-button class="side-menu fg ${this.contentBody&&!0===this.contentBody.open&&"notification"===this._sidepanel?"red":"black"}" id="notification-icon-popover" icon="notification_important" @click="${()=>this._openSidePanel("notification")}"></mwc-icon-button>
              <mwc-icon-button class="side-menu fg ${this.contentBody&&!0===this.contentBody.open&&"task"===this._sidepanel?"red":"black"}" id="task-icon-popover" icon="ballot" @click="${()=>this._openSidePanel("task")}"></mwc-icon-button>
            </div>
          </wl-popover-card>
        </wl-popover>
      </div>
      <backend-ai-offline-indicator ?active="${this._offlineIndicatorOpened}">
        ${this._offline?rt("console.YouAreOffline"):rt("console.YouAreOnline")}.
      </backend-ai-offline-indicator>
      <backend-ai-login active id="login-panel"></backend-ai-login>
      <backend-ai-splash id="about-backendai-panel"></backend-ai-splash>
      <lablup-notification id="notification"></lablup-notification>
      <backend-ai-indicator-pool id="indicator"></backend-ai-indicator-pool>
      <lablup-terms-of-service id="terms-of-service" block></lablup-terms-of-service>
      <backend-ai-dialog id="user-preference-dialog" fixed backdrop>
        <span slot="title">${rt("console.menu.ChangeUserInformation")}</span>
        <div slot="content" class="layout vertical" style="width:300px;">
          <mwc-textfield id="pref-original-name" type="text"
              label="${rt("console.menu.FullName")}" maxLength="64" autofocus
              style="margin-bottom:20px;" value="${this.full_name}"
              helper="${rt("maxLength.64chars")}">
          </mwc-text-field>
        </div>
        <div slot="content" class="layout vertical" style="width:300px;">
          <mwc-textfield id="pref-original-password" type="password"
              label="${rt("console.menu.OriginalPassword")}" maxLength="64"
              style="margin-bottom:20px;">
          </mwc-textfield>
          <div class="horizontal flex layout">
            <mwc-textfield id="pref-new-password" label="${rt("console.menu.NewPassword")}"
                type="password" maxLength="64"
                auto-validate validationMessage="${rt("console.menu.InvalidPasswordMessage")}"
                pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
                @change="${this._validatePassword}">
            </mwc-textfield>
            <mwc-icon-button-toggle off onIcon="visibility" offIcon="visibility_off"
                                      @click="${t=>this._togglePasswordVisibility(t.target)}">
            </mwc-icon-button-toggle>
          </div>
          <div class="horizontal flex layout">
            <mwc-textfield id="pref-new-password2" label="${rt("console.menu.NewPasswordAgain")}"
                type="password" maxLength="64"
                @change="${this._validatePassword}">
            </mwc-textfield>
            <mwc-icon-button-toggle off onIcon="visibility" offIcon="visibility_off"
                                      @click="${t=>this._togglePasswordVisibility(t.target)}">
              </mwc-icon-button-toggle>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <div class="flex"></div>
          <mwc-button
              label="${rt("console.menu.Cancel")}"
              @click="${this._hideUserPrefDialog}"></mwc-button>
          <mwc-button
              unelevated
              label="${rt("console.menu.Update")}"
              @click="${this._updateUserInformation}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-app-launcher id="app-launcher"></backend-ai-app-launcher>
      <backend-ai-resource-broker id="resource-broker" ?active="${this.is_connected}"></backend-ai-resource-broker>
    `}};r([yt({type:Boolean})],Ma.prototype,"hasLoadedStrings",void 0),r([yt({type:String})],Ma.prototype,"menuTitle",void 0),r([yt({type:String})],Ma.prototype,"siteDescription",void 0),r([yt({type:String})],Ma.prototype,"user_id",void 0),r([yt({type:String})],Ma.prototype,"full_name",void 0),r([yt({type:String})],Ma.prototype,"domain",void 0),r([yt({type:Boolean})],Ma.prototype,"is_connected",void 0),r([yt({type:Boolean})],Ma.prototype,"is_admin",void 0),r([yt({type:Boolean})],Ma.prototype,"is_superadmin",void 0),r([yt({type:Boolean})],Ma.prototype,"allow_signout",void 0),r([yt({type:String})],Ma.prototype,"proxy_url",void 0),r([yt({type:String})],Ma.prototype,"connection_mode",void 0),r([yt({type:String})],Ma.prototype,"connection_server",void 0),r([yt({type:String})],Ma.prototype,"edition",void 0),r([yt({type:String})],Ma.prototype,"validUntil",void 0),r([yt({type:Array})],Ma.prototype,"groups",void 0),r([yt({type:String})],Ma.prototype,"current_group",void 0),r([yt({type:Object})],Ma.prototype,"plugins",void 0),r([yt({type:Object})],Ma.prototype,"splash",void 0),r([yt({type:Object})],Ma.prototype,"loginPanel",void 0),r([yt({type:String})],Ma.prototype,"_page",void 0),r([yt({type:String})],Ma.prototype,"_lazyPage",void 0),r([yt({type:Object})],Ma.prototype,"_pageParams",void 0),r([yt({type:String})],Ma.prototype,"_sidepanel",void 0),r([yt({type:Boolean})],Ma.prototype,"_drawerOpened",void 0),r([yt({type:Boolean})],Ma.prototype,"_offlineIndicatorOpened",void 0),r([yt({type:Boolean})],Ma.prototype,"_offline",void 0),r([yt({type:Object})],Ma.prototype,"_dropdownMenuIcon",void 0),r([yt({type:Object})],Ma.prototype,"config",void 0),r([yt({type:Object})],Ma.prototype,"notification",void 0),r([yt({type:Object})],Ma.prototype,"appBody",void 0),r([yt({type:Object})],Ma.prototype,"appPage",void 0),r([yt({type:Object})],Ma.prototype,"contentBody",void 0),r([yt({type:Object})],Ma.prototype,"mainToolbar",void 0),r([yt({type:Object})],Ma.prototype,"drawerToggleButton",void 0),r([yt({type:Object})],Ma.prototype,"sidebarMenu",void 0),r([yt({type:Object})],Ma.prototype,"TOSdialog",void 0),r([yt({type:Boolean})],Ma.prototype,"mini_ui",void 0),r([yt({type:Boolean})],Ma.prototype,"auto_logout",void 0),r([yt({type:String})],Ma.prototype,"lang",void 0),r([yt({type:Array})],Ma.prototype,"supportLanguageCodes",void 0),r([yt({type:Array})],Ma.prototype,"blockedMenuitem",void 0),r([yt({type:Number})],Ma.prototype,"minibarWidth",void 0),r([yt({type:Number})],Ma.prototype,"sidebarWidth",void 0),r([yt({type:Number})],Ma.prototype,"sidepanelWidth",void 0),r([yt({type:Object})],Ma.prototype,"supports",void 0),r([yt({type:Array})],Ma.prototype,"availablePages",void 0),r([yt({type:Array})],Ma.prototype,"adminOnlyPages",void 0),r([yt({type:Array})],Ma.prototype,"superAdminOnlyPages",void 0),r([yt({type:Number})],Ma.prototype,"timeoutSec",void 0),Ma=r([bt("backend-ai-console")],Ma);var ka=Ma;export{qn as $,Un as A,Yn as B,ln as C,n as D,vn as E,Br as F,yn as G,un as H,No as I,cn as J,Nn as K,Ot as L,re as M,z as N,no as O,dn as P,zn as Q,Ye as R,it as S,$n as T,_ as U,ro as V,Ro as W,_n as X,Dn as Y,jn as Z,r as _,$o as a,Fn as a0,ko as a1,sn as a2,X as a3,me as a4,o as a5,ae as a6,pn as a7,Ln as a8,Bn as a9,u as aa,Jt as ab,sa as ac,ra as ad,la as ae,fn as af,Vt as ag,ka as ah,Ct as b,bt as c,Se as d,Fo as e,Do as f,p as g,Z as h,m as i,L as j,_t as k,ye as l,fi as m,zo as n,ci as o,yt as p,wt as q,hi as r,Ge as s,rt as t,e as u,i as v,ge as w,xt as x,St as y,le as z};