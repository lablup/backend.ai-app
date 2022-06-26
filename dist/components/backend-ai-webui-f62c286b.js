var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(t,i)};function t(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function o(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}var i=function(){return(i=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function o(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}function n(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function r(e){var t="function"==typeof Symbol&&Symbol.iterator,i=t&&e[t],o=0;if(i)return i.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(e,t){var i="function"==typeof Symbol&&e[Symbol.iterator];if(!i)return e;var o,n,r=i.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=r.next()).done;)a.push(o.value)}catch(e){n={error:e}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}return a}function s(e,t,i){if(i||2===arguments.length)for(var o,n=0,r=t.length;n<r;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),d=new Map;class p{constructor(e,t){if(this._$cssResult$=!0,t!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=d.get(this.cssText);return l&&void 0===e&&(d.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const h=l?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new p("string"==typeof e?e:e+"",c))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var u;const m=window.trustedTypes,g=m?m.emptyScript:"",f=window.reactiveElementPolyfillSupport,b={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y};class _ extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const o=this._$Eh(i,t);void 0!==o&&(this._$Eu.set(o,i),e.push(o))})),e}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const n=this[e];this[t]=o,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(h(e))}else void 0!==e&&t.push(h(e));return t}static _$Eh(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{l?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=v){var o,n;const r=this.constructor._$Eh(e,i);if(void 0!==r&&!0===i.reflect){const a=(null!==(n=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==n?n:b.toAttribute)(t,i.type);this._$Ei=e,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Ei=null}}_$AK(e,t){var i,o,n;const r=this.constructor,a=r._$Eu.get(e);if(void 0!==a&&this._$Ei!==a){const e=r.getPropertyOptions(a),s=e.converter,l=null!==(n=null!==(o=null===(i=s)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof s?s:null)&&void 0!==n?n:b.fromAttribute;this._$Ei=a,this[a]=l(t,e.type),this._$Ei=null}}requestUpdate(e,t,i){let o=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||y)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var x;_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==f||f({ReactiveElement:_}),(null!==(u=globalThis.reactiveElementVersions)&&void 0!==u?u:globalThis.reactiveElementVersions=[]).push("1.3.2");const w=globalThis.trustedTypes,k=w?w.createPolicy("lit-html",{createHTML:e=>e}):void 0,S=`lit$${(Math.random()+"").slice(9)}$`,E="?"+S,T=`<${E}>`,C=document,A=(e="")=>C.createComment(e),I=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,P=/>/g,L=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,N=/'/g,M=/"/g,F=/^(?:script|style|textarea|title)$/i,z=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),B=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),U=new WeakMap,j=(e,t,i)=>{var o,n;const r=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:t;let a=r._$litPart$;if(void 0===a){const e=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=a=new X(t.insertBefore(A(),e),e,void 0,null!=i?i:{})}return a._$AI(e),a},H=C.createTreeWalker(C,129,null,!1),q=(e,t)=>{const i=e.length-1,o=[];let n,r=2===t?"<svg>":"",a=$;for(let t=0;t<i;t++){const i=e[t];let s,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===$?"!--"===l[1]?a=R:void 0!==l[1]?a=P:void 0!==l[2]?(F.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=L):void 0!==l[3]&&(a=L):a===L?">"===l[0]?(a=null!=n?n:$,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?L:'"'===l[3]?M:N):a===M||a===N?a=L:a===R||a===P?a=$:(a=L,n=void 0);const p=a===L&&e[t+1].startsWith("/>")?" ":"";r+=a===$?i+T:c>=0?(o.push(s),i.slice(0,c)+"$lit$"+i.slice(c)+S+p):i+S+(-2===c?(o.push(void 0),t):p)}const s=r+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==k?k.createHTML(s):s,o]};class V{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let n=0,r=0;const a=e.length-1,s=this.parts,[l,c]=q(e,t);if(this.el=V.createElement(l,i),H.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(o=H.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes()){const e=[];for(const t of o.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(S)){const i=c[r++];if(e.push(t),void 0!==i){const e=o.getAttribute(i.toLowerCase()+"$lit$").split(S),t=/([.?@])?(.*)/.exec(i);s.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?Y:"?"===t[1]?J:"@"===t[1]?Z:K})}else s.push({type:6,index:n})}for(const t of e)o.removeAttribute(t)}if(F.test(o.tagName)){const e=o.textContent.split(S),t=e.length-1;if(t>0){o.textContent=w?w.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],A()),H.nextNode(),s.push({type:2,index:++n});o.append(e[t],A())}}}else if(8===o.nodeType)if(o.data===E)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(S,e+1));)s.push({type:7,index:n}),e+=S.length-1}n++}}static createElement(e,t){const i=C.createElement("template");return i.innerHTML=e,i}}function W(e,t,i=e,o){var n,r,a,s;if(t===B)return t;let l=void 0!==o?null===(n=i._$Cl)||void 0===n?void 0:n[o]:i._$Cu;const c=I(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,i,o)),void 0!==o?(null!==(a=(s=i)._$Cl)&&void 0!==a?a:s._$Cl=[])[o]=l:i._$Cu=l),void 0!==l&&(t=W(e,l._$AS(e,t.values),l,o)),t}class G{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:o}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:C).importNode(i,!0);H.currentNode=n;let r=H.nextNode(),a=0,s=0,l=o[0];for(;void 0!==l;){if(a===l.index){let t;2===l.type?t=new X(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new ee(r,this,e)),this.v.push(t),l=o[++s]}a!==(null==l?void 0:l.index)&&(r=H.nextNode(),a++)}return n}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{constructor(e,t,i,o){var n;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cg=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),I(e)?e===D||null==e||""===e?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==B&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>{var t;return O(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==D&&I(this._$AH)?this._$AA.nextSibling.data=e:this.k(C.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=V.createElement(o.h,this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.m(i);else{const e=new G(n,this),t=e.p(this.options);e.m(i),this.k(t),this._$AH=e}}_$AC(e){let t=U.get(e.strings);return void 0===t&&U.set(e.strings,t=new V(e)),t}S(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const n of e)o===t.length?t.push(i=new X(this.M(A()),this.M(A()),this,this.options)):i=t[o],i._$AI(n),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class K{constructor(e,t,i,o,n){this.type=1,this._$AH=D,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const n=this.strings;let r=!1;if(void 0===n)e=W(this,e,t,0),r=!I(e)||e!==this._$AH&&e!==B,r&&(this._$AH=e);else{const o=e;let a,s;for(e=n[0],a=0;a<n.length-1;a++)s=W(this,o[i+a],t,a),s===B&&(s=this._$AH[a]),r||(r=!I(s)||s!==this._$AH[a]),s===D?e=D:e!==D&&(e+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}r&&!o&&this.C(e)}C(e){e===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Y extends K{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===D?void 0:e}}const Q=w?w.emptyScript:"";class J extends K{constructor(){super(...arguments),this.type=4}C(e){e&&e!==D?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class Z extends K{constructor(e,t,i,o,n){super(e,t,i,o,n),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=W(this,e,t,0))&&void 0!==i?i:D)===B)return;const o=this._$AH,n=e===D&&o!==D||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==D&&(o===D||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class ee{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}}const te=window.litHtmlPolyfillSupport;null==te||te(V,X),(null!==(x=globalThis.litHtmlVersions)&&void 0!==x?x:globalThis.litHtmlVersions=[]).push("2.2.3");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol(),ne=new Map;class re{constructor(e,t){if(this._$cssResult$=!0,t!==oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=ne.get(this.cssText);return ie&&void 0===e&&(ne.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const ae=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new re(i,oe)},se=ie?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new re("string"==typeof e?e:e+"",oe))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var le;const ce=window.trustedTypes,de=ce?ce.emptyScript:"",pe=window.reactiveElementPolyfillSupport,he={toAttribute(e,t){switch(t){case Boolean:e=e?de:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},ue=(e,t)=>t!==e&&(t==t||e==e),me={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:ue};class ge extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const o=this._$Eh(i,t);void 0!==o&&(this._$Eu.set(o,i),e.push(o))})),e}static createProperty(e,t=me){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const n=this[e];this[t]=o,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||me}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(se(e))}else void 0!==e&&t.push(se(e));return t}static _$Eh(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{ie?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=me){var o,n;const r=this.constructor._$Eh(e,i);if(void 0!==r&&!0===i.reflect){const a=(null!==(n=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==n?n:he.toAttribute)(t,i.type);this._$Ei=e,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Ei=null}}_$AK(e,t){var i,o,n;const r=this.constructor,a=r._$Eu.get(e);if(void 0!==a&&this._$Ei!==a){const e=r.getPropertyOptions(a),s=e.converter,l=null!==(n=null!==(o=null===(i=s)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof s?s:null)&&void 0!==n?n:he.fromAttribute;this._$Ei=a,this[a]=l(t,e.type),this._$Ei=null}}requestUpdate(e,t,i){let o=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||ue)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var fe,be;ge.finalized=!0,ge.elementProperties=new Map,ge.elementStyles=[],ge.shadowRootOptions={mode:"open"},null==pe||pe({ReactiveElement:ge}),(null!==(le=globalThis.reactiveElementVersions)&&void 0!==le?le:globalThis.reactiveElementVersions=[]).push("1.3.2");class ye extends ge{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=j(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return B}}ye.finalized=!0,ye._$litElement$=!0,null===(fe=globalThis.litElementHydrateSupport)||void 0===fe||fe.call(globalThis,{LitElement:ye});const ve=globalThis.litElementPolyfillSupport;null==ve||ve({LitElement:ye}),(null!==(be=globalThis.litElementVersions)&&void 0!==be?be:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _e=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:o}=t;return{kind:i,elements:o,finisher(t){window.customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,xe=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function we(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):xe(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ke(e){return we({...e,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=({finisher:e,descriptor:t})=>(i,o)=>{var n;if(void 0===o){const o=null!==(n=i.originalKey)&&void 0!==n?n:i.key,r=null!=t?{kind:"method",placement:"prototype",key:o,descriptor:t(i.key)}:{...i,key:o};return null!=e&&(r.finisher=function(t){e(t,o)}),r}{const n=i.constructor;void 0!==t&&Object.defineProperty(i,o,t(o)),null==e||e(n,o)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function Ee(e){return Se({finisher:(t,i)=>{Object.assign(t.prototype[i],e)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Te(e,t){return Se({descriptor:i=>{const o={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;o.get=function(){var i,o;return void 0===this[t]&&(this[t]=null!==(o=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==o?o:null),this[t]}}return o}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ce(e){return Se({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ae;const Ie=null!=(null===(Ae=window.HTMLSlotElement)||void 0===Ae?void 0:Ae.prototype.assignedElements)?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Oe(e,t,i){let o,n=e;return"object"==typeof e?(n=e.slot,o=e):o={flatten:t},i?function(e){const{slot:t,selector:i}=null!=e?e:{};return Se({descriptor:o=>({get(){var o;const n="slot"+(t?`[name=${t}]`:":not([name])"),r=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(n),a=null!=r?Ie(r,e):[];return i?a.filter((e=>e.matches(i))):a},enumerable:!0,configurable:!0})})}({slot:n,flatten:t,selector:i}):Se({descriptor:e=>({get(){var e,t;const i="slot"+(n?`[name=${n}]`:":not([name])"),r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(i);return null!==(t=null==r?void 0:r.assignedNodes(o))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}function $e(e,t,i){return Object.entries(Pe(t||{})).reduce(((e,[t,i])=>e.replace(new RegExp(`{{[  ]*${t}[  ]*}}`,"gm"),String(Pe(i)))),e)}function Re(e,t){const i=e.split(".");let o=t.strings;for(;null!=o&&i.length>0;)o=o[i.shift()];return null!=o?o.toString():null}function Pe(e){return"function"==typeof e?e():e}let Le={loader:()=>Promise.resolve({}),empty:e=>`[${e}]`,lookup:Re,interpolate:$e,translationCache:{}};function Ne(e){return Le=Object.assign(Object.assign({},Le),e)}function Me(e,t,i=Le){var o;o={previousStrings:i.strings,previousLang:i.lang,lang:i.lang=e,strings:i.strings=t},window.dispatchEvent(new CustomEvent("langChanged",{detail:o}))}async function Fe(e,t=Le){const i=await t.loader(e,t);t.translationCache={},Me(e,i,t)}function ze(e,t,i=Le){let o=i.translationCache[e]||(i.translationCache[e]=i.lookup(e,i)||i.empty(e,i));return null!=(t=null!=t?Pe(t):null)?i.interpolate(o,t,i):o}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=1,De=2,Ue=3,je=4,He=e=>(...t)=>({_$litDirective$:e,values:t});class qe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=e=>void 0===e.strings,We={},Ge=(e,t)=>{var i,o;const n=e._$AN;if(void 0===n)return!1;for(const e of n)null===(o=(i=e)._$AO)||void 0===o||o.call(i,t,!1),Ge(e,t);return!0},Xe=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===(null==i?void 0:i.size))},Ke=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Je(t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ye(e){void 0!==this._$AN?(Xe(this),this._$AM=e,Ke(this)):this._$AM=e}function Qe(e,t=!1,i=0){const o=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)Ge(o[e],!1),Xe(o[e]);else null!=o&&(Ge(o,!1),Xe(o));else Ge(this,e)}const Je=e=>{var t,i,o,n;e.type==De&&(null!==(t=(o=e)._$AP)&&void 0!==t||(o._$AP=Qe),null!==(i=(n=e)._$AQ)&&void 0!==i||(n._$AQ=Ye))};class Ze extends qe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Ke(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,o;e!==this.isConnected&&(this.isConnected=e,e?null===(i=this.reconnected)||void 0===i||i.call(this):null===(o=this.disconnected)||void 0===o||o.call(this)),t&&(Ge(this,e),Xe(this))}setValue(e){if(Ve(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class et extends Ze{constructor(){super(...arguments),this.langChangedSubscription=null,this.getValue=()=>""}renderValue(e){return this.getValue=e,this.subscribe(),this.getValue()}langChanged(e){this.setValue(this.getValue(e))}subscribe(){null==this.langChangedSubscription&&(this.langChangedSubscription=function(e,t){const i=t=>e(t.detail);return window.addEventListener("langChanged",i,t),()=>window.removeEventListener("langChanged",i)}(this.langChanged.bind(this)))}unsubscribe(){null!=this.langChangedSubscription&&this.langChangedSubscription()}disconnected(){this.unsubscribe()}reconnected(){this.subscribe()}}class tt extends et{render(e,t,i){return this.renderValue((()=>ze(e,t,i)))}}const it=He(tt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends qe{constructor(e){if(super(e),this.it=D,e.type!==De)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===D||null==e)return this.ft=void 0,this.it=e;if(e===B)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}ot.directiveName="unsafeHTML",ot.resultType=1;const nt=He(ot),rt=e=>t=>class extends t{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=e.subscribe((()=>this.stateChanged(e.getState()))),this.stateChanged(e.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(e){}}
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/;
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function at(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function st(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function lt(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?st(Object(i),!0).forEach((function(t){at(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):st(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function ct(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var dt="function"==typeof Symbol&&Symbol.observable||"@@observable",pt=function(){return Math.random().toString(36).substring(7).split("").join(".")},ht={INIT:"@@redux/INIT"+pt(),REPLACE:"@@redux/REPLACE"+pt(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+pt()}};function ut(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function mt(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function gt(e){return function(t){var i=t.dispatch,o=t.getState;return function(t){return function(n){return"function"==typeof n?n(i,o,e):t(n)}}}}var ft=gt();ft.withExtraArgument=gt;var bt=ft;
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const yt=(e,t={})=>i=>{if(!0!==["/summary","/job","/pipeline","/experiment","/data","/statistics","/usersettings","/agent","/resource","/user","/credential","/environment","/settings","/maintenance","/information","/github","/import"].includes(e)){const i=e.split(/[/]+/);i.length>1&&""===i[0]&&(e=i[1],t.requestURL=i.slice(2).join("/"))}let o;t.queryString=window.location.search,"index.html"!==e&&""!==e||(e="/"),o=["/","build","/build","app","/app"].includes(e)?"summary":"/"===e[0]?e.slice(1):e,i(vt(o,t)),i(kt(!1))},vt=(e,t={})=>i=>{switch(e){case"summary":import("./backend-ai-summary-view-21875ac7.js").then((e=>{}));break;case"job":import("./backend-ai-session-view-bc0683d3.js");break;case"pipeline":import("./backend-ai-pipeline-view-1bcb3199.js");break;case"data":import("./backend-ai-data-view-437d67f2.js");break;case"usersettings":import("./backend-ai-usersettings-view-be16b0ce.js");break;case"agent":case"resource":import("./backend-ai-agent-view-c167d020.js");break;case"credential":case"user":import("./backend-ai-credential-view-c6d17f23.js");break;case"environment":import("./backend-ai-environment-view-ff1da9a4.js");break;case"settings":import("./backend-ai-settings-view-83be51e2.js");break;case"maintenance":import("./backend-ai-maintenance-view-4e6b7934.js");break;case"information":import("./backend-ai-information-view-236734d3.js");break;case"statistics":import("./backend-ai-statistics-view-4c1a6eb2.js");break;case"verify-email":import("./backend-ai-email-verification-view-712d3696.js");break;case"change-password":import("./backend-ai-change-forgot-password-view-9b389765.js");break;case"github":case"gitlab":case"import":import("./backend-ai-import-view-62c8d7fe.js");break;case"edu-applauncher":import("./backend-ai-edu-applauncher-5bcaab4d.js");break;case"unauthorized":import("./backend-ai-permission-denied-view-c857fe08.js");break;case"error":default:if(void 0!==globalThis.backendaiPages){for(const e of globalThis.backendaiPages)"url"in e&&import("./plugins/"+e.url+".js");break}document.addEventListener("backend-ai-plugin-loaded",(()=>{})),import("./backend-ai-error-view-9a5af4f6.js").then((e=>{}))}i(_t(e,t))},_t=(e,t)=>({type:"UPDATE_PAGE",page:e,params:t});
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */let xt;const wt=e=>(t,i)=>{e!==i().app.offline&&t((e=>{e({type:"OPEN_SNACKBAR"}),window.clearTimeout(xt),xt=window.setTimeout((()=>e({type:"CLOSE_SNACKBAR"})),3e3)})),t({type:"UPDATE_OFFLINE",offline:e})},kt=e=>({type:"UPDATE_DRAWER_STATE",opened:e}),St={page:"",params:{},offline:!1,drawerOpened:!1,offlineIndicatorOpened:!1},Et=function e(t,i,o){var n;if("function"==typeof i&&"function"==typeof o||"function"==typeof o&&"function"==typeof arguments[3])throw new Error(ct(0));if("function"==typeof i&&void 0===o&&(o=i,i=void 0),void 0!==o){if("function"!=typeof o)throw new Error(ct(1));return o(e)(t,i)}if("function"!=typeof t)throw new Error(ct(2));var r=t,a=i,s=[],l=s,c=!1;function d(){l===s&&(l=s.slice())}function p(){if(c)throw new Error(ct(3));return a}function h(e){if("function"!=typeof e)throw new Error(ct(4));if(c)throw new Error(ct(5));var t=!0;return d(),l.push(e),function(){if(t){if(c)throw new Error(ct(6));t=!1,d();var i=l.indexOf(e);l.splice(i,1),s=null}}}function u(e){if(!ut(e))throw new Error(ct(7));if(void 0===e.type)throw new Error(ct(8));if(c)throw new Error(ct(9));try{c=!0,a=r(a,e)}finally{c=!1}for(var t=s=l,i=0;i<t.length;i++){(0,t[i])()}return e}function m(e){if("function"!=typeof e)throw new Error(ct(10));r=e,u({type:ht.REPLACE})}function g(){var e,t=h;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(ct(11));function i(){e.next&&e.next(p())}return i(),{unsubscribe:t(i)}}})[dt]=function(){return this},e}return u({type:ht.INIT}),(n={dispatch:u,subscribe:h,getState:p,replaceReducer:m})[dt]=g,n}((e=>e),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||mt)((e=>t=>(i,o)=>{let n={};const r=t(i,o);return Object.assign({},r,{addReducers(t){const i=Object.assign({},n,t);this.replaceReducer(e(n=i))}})})((function(e){for(var t=Object.keys(e),i={},o=0;o<t.length;o++){var n=t[o];"function"==typeof e[n]&&(i[n]=e[n])}var r,a=Object.keys(i);try{!function(e){Object.keys(e).forEach((function(t){var i=e[t];if(void 0===i(void 0,{type:ht.INIT}))throw new Error(ct(12));if(void 0===i(void 0,{type:ht.PROBE_UNKNOWN_ACTION()}))throw new Error(ct(13))}))}(i)}catch(e){r=e}return function(e,t){if(void 0===e&&(e={}),r)throw r;for(var o=!1,n={},s=0;s<a.length;s++){var l=a[s],c=i[l],d=e[l],p=c(d,t);if(void 0===p)throw t&&t.type,new Error(ct(14));n[l]=p,o=o||p!==d}return(o=o||a.length!==Object.keys(e).length)?n:e}})),function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(){var i=e.apply(void 0,arguments),o=function(){throw new Error(ct(15))},n={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},r=t.map((function(e){return e(n)}));return o=mt.apply(void 0,r)(i.dispatch),lt(lt({},i),{},{dispatch:o})}}}(bt)));Et.addReducers({app:(e=St,t)=>{switch(t.type){case"UPDATE_PAGE":return{...e,page:t.page,params:t.params};case"UPDATE_OFFLINE":return{...e,offline:t.offline};case"UPDATE_DRAWER_STATE":return{...e,drawerOpened:t.opened};case"OPEN_SNACKBAR":return{...e,offlineIndicatorOpened:!0};case"CLOSE_SNACKBAR":return{...e,offlineIndicatorOpened:!1};default:return e}}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Tt=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:o}=t;return{kind:i,elements:o,finisher(t){window.customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var Ct;null===(Ct=window.HTMLSlotElement)||void 0===Ct||Ct.prototype.assignedElements,
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information."),
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
(()=>{var e,t,i;const o=Symbol(),n=Symbol(),r=Symbol(),a=Symbol(),s=Symbol(),l=Symbol(),c=Symbol(),d=Symbol(),p=Symbol(),h=Symbol(),u=Symbol(),m=Symbol(),g=Symbol();class f{constructor(){this[e]=[],this[t]=[],this[i]=new Set}destructor(){this[p](this[r]);const e=this;e[o]=null,e[r]=null,e[n]=null}get top(){const e=this[o];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[l](e),this[o].push(e))}remove(e){const t=this[o].indexOf(e);return-1!==t&&(this[o].splice(t,1),t===this[o].length&&this[l](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[o].indexOf(e)}[(e=o,t=r,i=n,l)](e){const t=this[n],i=this[r];if(!e)return this[p](i),t.clear(),void(this[r]=[]);const o=this[h](e);if(o[o.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[r]=o;const a=this[u](e);if(!i.length)return void this[d](o,a,t);let s=i.length-1,l=o.length-1;for(;s>0&&l>0&&i[s]===o[l];)s--,l--;i[s]!==o[l]&&this[c](i[s],o[l]),s>0&&this[p](i.slice(0,s)),l>0&&this[d](o.slice(0,l),a,null)}[c](e,t){const i=e[a];this[m](e)&&!e.inert&&(e.inert=!0,i.add(e)),i.has(t)&&(t.inert=!1,i.delete(t)),t[s]=e[s],t[a]=i,e[s]=void 0,e[a]=void 0}[p](e){for(const t of e){t[s].disconnect(),t[s]=void 0;const e=t[a];for(const t of e)t.inert=!1;t[a]=void 0}}[d](e,t,i){for(const o of e){const e=o.parentNode,n=e.children,r=new Set;for(let e=0;e<n.length;e++){const a=n[e];a===o||!this[m](a)||t&&t.has(a)||(i&&a.inert?i.add(a):(a.inert=!0,r.add(a)))}o[a]=r;const l=new MutationObserver(this[g].bind(this));o[s]=l;let c=e;const d=c;d.__shady&&d.host&&(c=d.host),l.observe(c,{childList:!0})}}[g](e){const t=this[r],i=this[n];for(const o of e){const e=o.target.host||o.target,n=e===document.body?t.length:t.indexOf(e),r=t[n-1],s=r[a];for(let e=0;e<o.removedNodes.length;e++){const t=o.removedNodes[e];if(t===r)return console.info("Detected removal of the top Blocking Element."),void this.pop();s.has(t)&&(t.inert=!1,s.delete(t))}for(let e=0;e<o.addedNodes.length;e++){const t=o.addedNodes[e];this[m](t)&&(i&&t.inert?i.add(t):(t.inert=!0,s.add(t)))}}}[m](e){return!1===/^(style|template|script)$/.test(e.localName)}[h](e){const t=[];let i=e;for(;i&&i!==document.body;)if(i.nodeType===Node.ELEMENT_NODE&&t.push(i),i.assignedSlot){for(;i=i.assignedSlot;)t.push(i);i=t.pop()}else i=i.parentNode||i.host;return t}[u](e){const t=e.shadowRoot;if(!t)return null;const i=new Set;let o,n,r;const a=t.querySelectorAll("slot");if(a.length&&a[0].assignedNodes)for(o=0;o<a.length;o++)for(r=a[o].assignedNodes({flatten:!0}),n=0;n<r.length;n++)r[n].nodeType===Node.ELEMENT_NODE&&i.add(r[n]);return i}}document.$blockingElements=new f})();var At=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}();function It(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(){if("undefined"!=typeof window){var e=Array.prototype.slice,t=Element.prototype.matches||Element.prototype.msMatchesSelector,i=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),o=function(){function o(e,t){It(this,o),this._inertManager=t,this._rootElement=e,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return At(o,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(e){this._unmanageNode(e.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(e){var t=this;a(e,(function(e){return t._visitNode(e)}));var i=document.activeElement;if(!document.body.contains(e)){for(var o=e,n=void 0;o;){if(o.nodeType===Node.DOCUMENT_FRAGMENT_NODE){n=o;break}o=o.parentNode}n&&(i=n.activeElement)}e.contains(i)&&(i.blur(),i===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(e){if(e.nodeType===Node.ELEMENT_NODE){var o=e;o!==this._rootElement&&o.hasAttribute("inert")&&this._adoptInertRoot(o),(t.call(o,i)||o.hasAttribute("tabindex"))&&this._manageNode(o)}}},{key:"_manageNode",value:function(e){var t=this._inertManager.register(e,this);this._managedNodes.add(t)}},{key:"_unmanageNode",value:function(e){var t=this._inertManager.deregister(e,this);t&&this._managedNodes.delete(t)}},{key:"_unmanageSubtree",value:function(e){var t=this;a(e,(function(e){return t._unmanageNode(e)}))}},{key:"_adoptInertRoot",value:function(e){var t=this._inertManager.getInertRoot(e);t||(this._inertManager.setInert(e,!0),t=this._inertManager.getInertRoot(e)),t.managedNodes.forEach((function(e){this._manageNode(e.node)}),this)}},{key:"_onMutation",value:function(t,i){t.forEach((function(t){var i=t.target;if("childList"===t.type)e.call(t.addedNodes).forEach((function(e){this._makeSubtreeUnfocusable(e)}),this),e.call(t.removedNodes).forEach((function(e){this._unmanageSubtree(e)}),this);else if("attributes"===t.type)if("tabindex"===t.attributeName)this._manageNode(i);else if(i!==this._rootElement&&"inert"===t.attributeName&&i.hasAttribute("inert")){this._adoptInertRoot(i);var o=this._inertManager.getInertRoot(i);this._managedNodes.forEach((function(e){i.contains(e.node)&&o._manageNode(e.node)}))}}),this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return null!==this._savedAriaHidden}},{key:"savedAriaHidden",set:function(e){this._savedAriaHidden=e},get:function(){return this._savedAriaHidden}}]),o}(),n=function(){function e(t,i){It(this,e),this._node=t,this._overrodeFocusMethod=!1,this._inertRoots=new Set([i]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return At(e,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var e=this._node;null!==this._savedTabIndex?e.setAttribute("tabindex",this._savedTabIndex):e.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete e.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType===Node.ELEMENT_NODE){var e=this.node;if(t.call(e,i)){if(-1===e.tabIndex&&this.hasSavedTabIndex)return;e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)}else e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex"))}}},{key:"addInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.add(e)}},{key:"removeInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.delete(e),0===this._inertRoots.size&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return null!==this._savedTabIndex}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(e){this._throwIfDestroyed(),this._savedTabIndex=e},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),e}(),r=new(function(){function i(e){if(It(this,i),!e)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=e,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),s(e.head||e.body||e.documentElement),"loading"===e.readyState?e.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return At(i,[{key:"setInert",value:function(e,t){if(t){if(this._inertRoots.has(e))return;var i=new o(e,this);if(e.setAttribute("inert",""),this._inertRoots.set(e,i),!this._document.body.contains(e))for(var n=e.parentNode;n;)11===n.nodeType&&s(n),n=n.parentNode}else{if(!this._inertRoots.has(e))return;this._inertRoots.get(e).destructor(),this._inertRoots.delete(e),e.removeAttribute("inert")}}},{key:"getInertRoot",value:function(e){return this._inertRoots.get(e)}},{key:"register",value:function(e,t){var i=this._managedNodes.get(e);return void 0!==i?i.addInertRoot(t):i=new n(e,t),this._managedNodes.set(e,i),i}},{key:"deregister",value:function(e,t){var i=this._managedNodes.get(e);return i?(i.removeInertRoot(t),i.destroyed&&this._managedNodes.delete(e),i):null}},{key:"_onDocumentLoaded",value:function(){e.call(this._document.querySelectorAll("[inert]")).forEach((function(e){this.setInert(e,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(i,o){var n=this;i.forEach((function(i){switch(i.type){case"childList":e.call(i.addedNodes).forEach((function(i){if(i.nodeType===Node.ELEMENT_NODE){var o=e.call(i.querySelectorAll("[inert]"));t.call(i,"[inert]")&&o.unshift(i),o.forEach((function(e){this.setInert(e,!0)}),n)}}),n);break;case"attributes":if("inert"!==i.attributeName)return;var o=i.target,r=o.hasAttribute("inert");n.setInert(o,r)}}),this)}}]),i}())(document);Element.prototype.hasOwnProperty("inert")||Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(e){r.setInert(this,e)}})}function a(e,t,i){if(e.nodeType==Node.ELEMENT_NODE){var o=e;t&&t(o);var n=o.shadowRoot;if(n)return void a(n,t);if("content"==o.localName){for(var r=o,s=r.getDistributedNodes?r.getDistributedNodes():[],l=0;l<s.length;l++)a(s[l],t);return}if("slot"==o.localName){for(var c=o,d=c.assignedNodes?c.assignedNodes({flatten:!0}):[],p=0;p<d.length;p++)a(d[p],t);return}}for(var h=e.firstChild;null!=h;)a(h,t),h=h.nextSibling}function s(e){if(!e.querySelector("style#inert-style, link#inert-style")){var t=document.createElement("style");t.setAttribute("id","inert-style"),t.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n",e.appendChild(t)}}}();
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
var Ot={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},$t={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"},Rt=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),Pt=function(e){function o(t){var n=e.call(this,i(i({},o.defaultAdapter),t))||this;return n.animationFrame=0,n.animationTimer=0,n}return t(o,e),Object.defineProperty(o,"strings",{get:function(){return $t},enumerable:!1,configurable:!0}),Object.defineProperty(o,"cssClasses",{get:function(){return Ot},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),o.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},o.prototype.open=function(){var e=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(Ot.OPEN),this.adapter.addClass(Ot.ANIMATE),this.runNextAnimationFrame((function(){e.adapter.addClass(Ot.OPENING)})),this.adapter.saveFocus())},o.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(Ot.CLOSING)},o.prototype.isOpen=function(){return this.adapter.hasClass(Ot.OPEN)},o.prototype.isOpening=function(){return this.adapter.hasClass(Ot.OPENING)||this.adapter.hasClass(Ot.ANIMATE)},o.prototype.isClosing=function(){return this.adapter.hasClass(Ot.CLOSING)},o.prototype.handleKeydown=function(e){var t=e.keyCode;("Escape"===e.key||27===t)&&this.close()},o.prototype.handleTransitionEnd=function(e){var t=Ot.OPENING,i=Ot.CLOSING,o=Ot.OPEN,n=Ot.ANIMATE,r=Ot.ROOT;this.isElement(e.target)&&this.adapter.elementHasClass(e.target,r)&&(this.isClosing()?(this.adapter.removeClass(o),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(n),this.adapter.removeClass(t),this.adapter.removeClass(i))},o.prototype.opened=function(){},o.prototype.closed=function(){},o.prototype.runNextAnimationFrame=function(e){var t=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame((function(){t.animationFrame=0,clearTimeout(t.animationTimer),t.animationTimer=setTimeout(e,0)}))},o.prototype.isElement=function(e){return Boolean(e.classList)},o}(Rt),Lt=Pt,Nt=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return t(i,e),i.prototype.handleScrimClick=function(){this.close()},i.prototype.opened=function(){this.adapter.trapFocus()},i.prototype.closed=function(){this.adapter.releaseFocus()},i}(Pt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Mt=e=>e.nodeType===Node.ELEMENT_NODE;function Ft(e){return{addClass:t=>{e.classList.add(t)},removeClass:t=>{e.classList.remove(t)},hasClass:t=>e.classList.contains(t)}}let zt=!1;const Bt=()=>{},Dt={get passive(){return zt=!0,!1}};document.addEventListener("x",Bt,Dt),document.removeEventListener("x",Bt);const Ut=zt,jt=(e=window.document)=>{let t=e.activeElement;const i=[];if(!t)return i;for(;t&&(i.push(t),t.shadowRoot);)t=t.shadowRoot.activeElement;return i},Ht=e=>{const t=jt();if(!t.length)return!1;const i=t[t.length-1],o=new Event("check-if-focused",{bubbles:!0,composed:!0});let n=[];const r=e=>{n=e.composedPath()};return document.body.addEventListener("check-if-focused",r),i.dispatchEvent(o),document.body.removeEventListener("check-if-focused",r),-1!==n.indexOf(e)};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class qt extends ye{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Vt=e=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach(((e,i)=>t.constructor._observers.set(i,e)))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach(((e,t)=>{const i=this.constructor._observers.get(t);void 0!==i&&i.call(this,this[t],e)}))}}t.constructor._observers.set(i,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Wt=He(class extends qe{constructor(e){var t;if(super(e),e.type!==Be||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var i,o;if(void 0===this.et){this.et=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(i=this.st)||void 0===i?void 0:i.has(e))&&this.et.add(e);return this.render(t)}const n=e.element.classList;this.et.forEach((e=>{e in t||(n.remove(e),this.et.delete(e))}));for(const e in t){const i=!!t[e];i===this.et.has(e)||(null===(o=this.st)||void 0===o?void 0:o.has(e))||(i?(n.add(e),this.et.add(e)):(n.remove(e),this.et.delete(e)))}return B}}),Gt=document.$blockingElements;class Xt extends qt{constructor(){super(...arguments),this._previousFocus=null,this.open=!1,this.hasHeader=!1,this.type=""}get mdcFoundationClass(){return"modal"===this.type?Nt:Lt}createAdapter(){return Object.assign(Object.assign({},Ft(this.mdcRoot)),{elementHasClass:(e,t)=>e.classList.contains(t),saveFocus:()=>{this._previousFocus=this.getRootNode().activeElement},restoreFocus:()=>{this._previousFocus&&this._previousFocus.focus&&this._previousFocus.focus()},notifyClose:()=>{this.open=!1,this.dispatchEvent(new Event($t.CLOSE_EVENT,{bubbles:!0,cancelable:!0}))},notifyOpen:()=>{this.open=!0,this.dispatchEvent(new Event($t.OPEN_EVENT,{bubbles:!0,cancelable:!0}))},focusActiveNavigationItem:()=>{},trapFocus:()=>{Gt.push(this),this.appContent.inert=!0},releaseFocus:()=>{Gt.remove(this),this.appContent.inert=!1}})}_handleScrimClick(){this.mdcFoundation instanceof Nt&&this.mdcFoundation.handleScrimClick()}render(){const e="dismissible"===this.type||"modal"===this.type,t="modal"===this.type,i=this.hasHeader?z`
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      `:"";return z`
      <aside class="mdc-drawer ${Wt({"mdc-drawer--dismissible":e,"mdc-drawer--modal":t})}">
        ${i}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${t?z`<div class="mdc-drawer-scrim"
                          @click="${this._handleScrimClick}"></div>`:""}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `}firstUpdated(){this.mdcRoot.addEventListener("keydown",(e=>this.mdcFoundation.handleKeydown(e))),this.mdcRoot.addEventListener("transitionend",(e=>this.mdcFoundation.handleTransitionEnd(e)))}updated(e){e.has("type")&&this.createFoundation()}}o([Te(".mdc-drawer")],Xt.prototype,"mdcRoot",void 0),o([Te(".mdc-drawer-app-content")],Xt.prototype,"appContent",void 0),o([Vt((function(e){""!==this.type&&(e?this.mdcFoundation.open():this.mdcFoundation.close())})),we({type:Boolean,reflect:!0})],Xt.prototype,"open",void 0),o([we({type:Boolean})],Xt.prototype,"hasHeader",void 0),o([we({reflect:!0})],Xt.prototype,"type",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Kt=ae`.mdc-drawer{border-color:rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer .mdc-drawer__title{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-deprecated-list-group__subheader{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-deprecated-list-item__graphic{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-deprecated-list-item{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-deprecated-list-item--activated{color:rgba(98, 0, 238, 0.87)}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-deprecated-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-deprecated-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-deprecated-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-deprecated-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-deprecated-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-deprecated-list-group__subheader::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-deprecated-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-deprecated-list-item__text,.mdc-drawer .mdc-deprecated-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translateX(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translateX(100%)}.mdc-drawer--opening{transform:translateX(0);transition-duration:250ms}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translateX(0)}.mdc-drawer--closing{transform:translateX(-100%);transition-duration:200ms}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translateX(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0,0,0,.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0, 0, 0, 0.32)}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:200ms;opacity:0}.mdc-drawer-app-content{overflow:auto;flex:1}:host{display:flex;height:100%}.mdc-drawer{width:256px;width:var(--mdc-drawer-width, 256px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-left:var(--mdc-drawer-width, 256px);margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px;margin-right:var(--mdc-drawer-width, 256px)}`;let Yt=class extends Xt{static get styles(){return[Kt,ae`
    .mdc-drawer {
      background-color: var(--mdc-drawer-background-color, '#ffffff');
      width: var(--mdc-drawer-width, 256px);
      border-left: var(--mdc-drawer-border-left, 1px solid rgba(0,0,0,0.12));
      border-right:var(--mdc-drawer-border-right, 1px solid rgba(0,0,0,0.12));
    }
    .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing) + .mdc-drawer-app-content {
      margin-left: var(--mdc-drawer-width, 256px)!important;
      width: calc(100% - var(--mdc-drawer-width, 256px));
    }`]}};Yt=o([Tt("mwc-drawer")],Yt);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Qt=ae`.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:white;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:24px;border-bottom-left-radius:0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary, #fff);width:100%;width:var(--mdc-top-app-bar-width, 100%)}.mdc-top-app-bar--prominent #navigation ::slotted(*),.mdc-top-app-bar--prominent #actions ::slotted(*){align-self:flex-start}#navigation ::slotted(*),#actions ::slotted(*){--mdc-icon-button-ripple-opacity: 0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-start,.center-title .mdc-top-app-bar__section--align-end{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.mdc-top-app-bar--fixed-scrolled{box-shadow:var(--mdc-top-app-bar-fixed-box-shadow, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}`
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
 */,Jt=[ae`
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
  `,ae`
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
      --general-switch-on-background-color: #E3E7D8; 
      --general-slider-color: var(--general-textfield-selected-color);
      --general-dialog-background-color: #ffffff;
      --general-font-family: 'Ubuntu', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", AppleSDGothic, "Apple SD Gothic Neo", NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
      --general-monospace-font-family: 'Ubuntu Mono', Menlo, Courier, "Courier New", RobotoMono, sans-serif;
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
      font-family: 'Ubuntu', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans KR", "Noto Sans", AppleSDGothic, NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
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
      padding: 0;
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
      --mdc-switch-unselected-handle-color: var(--general-switch-off-color);
      --mdc-switch-unselected-track-color: var(--general-switch-on-background-color) !important;
      --mdc-switch-unselected-hover-handle-color: var(--general-switch-off-color);
      --mdc-switch-unselected-hover-track-color: var(--general-switch-on-background-color);
      --mdc-switch-unselected-focus-handle-color: var(--general-switch-off-color);
      --mdc-switch-unselected-focus-track-color: var(--general-switch-on-background-color);
      --mdc-switch-unselected-pressed-handle-color: var(--general-switch-off-color);
      --mdc-switch-unselected-pressed-track-color: var(--general-switch-on-background-color);
      --mdc-switch-selected-handle-color: var(--general-switch-on-color);
      --mdc-switch-selected-track-color: var(--general-switch-on-background-color) !important;
      --mdc-switch-selected-hover-handle-color: var(--general-switch-on-color);
      --mdc-switch-selected-hover-track-color: var(--general-switch-on-background-color);
      --mdc-switch-selected-hover-state-layer-color: var(--general-switch-on-color);
      --mdc-switch-selected-focus-handle-color: var(--general-switch-on-color);
      --mdc-switch-selected-focus-track-color: var(--general-switch-on-background-color);
      --mdc-switch-selected-focus-state-layer-color: var(--general-switch-on-color);
      --mdc-switch-selected-pressed-handle-color: var(--general-switch-on-color);
      --mdc-switch-selected-pressed-track-color: var(--general-switch-on-background-color);
      --mdc-switch-selected-pressed-state-layer-color: var(--general-switch-on-color);
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
      --mdc-theme-on-primary: var(--general-button-color);
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

    span.helper-text {
      font-size: 0.75rem;
      font-weight: bold;
      color: var(--general-textfield-selected-color);
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
var Zt={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},ei={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},ti={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},ii=function(e){function o(t){return e.call(this,i(i({},o.defaultAdapter),t))||this}return t(o,e),Object.defineProperty(o,"strings",{get:function(){return ti},enumerable:!1,configurable:!0}),Object.defineProperty(o,"cssClasses",{get:function(){return Zt},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return ei},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),o.prototype.handleTargetScroll=function(){},o.prototype.handleWindowResize=function(){},o.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},o}(Rt),oi=function(e){function i(t){var i=e.call(this,t)||this;return i.wasDocked=!0,i.isDockedShowing=!0,i.currentAppBarOffsetTop=0,i.isCurrentlyBeingResized=!1,i.resizeThrottleId=0,i.resizeDebounceId=0,i.lastScrollPosition=i.adapter.getViewportScrollY(),i.topAppBarHeight=i.adapter.getTopAppBarHeight(),i}return t(i,e),i.prototype.destroy=function(){e.prototype.destroy.call(this),this.adapter.setStyle("top","")},i.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter.getViewportScrollY(),0),t=e-this.lastScrollPosition;this.lastScrollPosition=e,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=t,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},i.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout((function(){e.resizeThrottleId=0,e.throttledResizeHandler()}),ei.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout((function(){e.handleTargetScroll(),e.isCurrentlyBeingResized=!1,e.resizeDebounceId=0}),ei.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},i.prototype.checkForUpdate=function(){var e=-this.topAppBarHeight,t=this.currentAppBarOffsetTop<0,i=this.currentAppBarOffsetTop>e,o=t&&i;if(o)this.wasDocked=!1;else{if(!this.wasDocked)return this.wasDocked=!0,!0;if(this.isDockedShowing!==i)return this.isDockedShowing=i,!0}return o},i.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var e=this.currentAppBarOffsetTop;Math.abs(e)>=this.topAppBarHeight&&(e=-ei.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",e+"px")}},i.prototype.throttledResizeHandler=function(){var e=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==e&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-e,this.topAppBarHeight=e),this.handleTargetScroll()},i}(ii),ni=oi;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ri=Ut?{passive:!0}:void 0;class si extends qt{constructor(){super(...arguments),this.centerTitle=!1,this.handleTargetScroll=()=>{this.mdcFoundation.handleTargetScroll()},this.handleNavigationClick=()=>{this.mdcFoundation.handleNavigationClick()}}get scrollTarget(){return this._scrollTarget||window}set scrollTarget(e){this.unregisterScrollListener();const t=this.scrollTarget;this._scrollTarget=e,this.updateRootPosition(),this.requestUpdate("scrollTarget",t),this.registerScrollListener()}updateRootPosition(){if(this.mdcRoot){const e=this.scrollTarget===window;this.mdcRoot.style.position=e?"":"absolute"}}render(){let e=z`<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;return this.centerTitle&&(e=z`<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${e}</section>`),z`
      <header class="mdc-top-app-bar ${Wt(this.barClasses())}">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation">
          <slot name="navigationIcon"
            @click=${this.handleNavigationClick}></slot>
          ${this.centerTitle?null:e}
        </section>
        ${this.centerTitle?e:null}
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar">
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>
    <div class="${Wt(this.contentClasses())}">
      <slot></slot>
    </div>
    `}createAdapter(){return Object.assign(Object.assign({},Ft(this.mdcRoot)),{setStyle:(e,t)=>this.mdcRoot.style.setProperty(e,t),getTopAppBarHeight:()=>this.mdcRoot.clientHeight,notifyNavigationIconClicked:()=>{this.dispatchEvent(new Event(ti.NAVIGATION_EVENT,{bubbles:!0,cancelable:!0}))},getViewportScrollY:()=>this.scrollTarget instanceof Window?this.scrollTarget.pageYOffset:this.scrollTarget.scrollTop,getTotalActionItems:()=>this._actionItemsSlot.assignedNodes({flatten:!0}).length})}registerListeners(){this.registerScrollListener()}unregisterListeners(){this.unregisterScrollListener()}registerScrollListener(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,ri)}unregisterScrollListener(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}firstUpdated(){super.firstUpdated(),this.updateRootPosition(),this.registerListeners()}disconnectedCallback(){super.disconnectedCallback(),this.unregisterListeners()}}o([Te(".mdc-top-app-bar")],si.prototype,"mdcRoot",void 0),o([Te('slot[name="actionItems"]')],si.prototype,"_actionItemsSlot",void 0),o([we({type:Boolean})],si.prototype,"centerTitle",void 0),o([we({type:Object})],si.prototype,"scrollTarget",null);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class li extends si{constructor(){super(...arguments),this.mdcFoundationClass=ni,this.prominent=!1,this.dense=!1,this.handleResize=()=>{this.mdcFoundation.handleWindowResize()}}barClasses(){return{"mdc-top-app-bar--dense":this.dense,"mdc-top-app-bar--prominent":this.prominent,"center-title":this.centerTitle}}contentClasses(){return{"mdc-top-app-bar--fixed-adjust":!this.dense&&!this.prominent,"mdc-top-app-bar--dense-fixed-adjust":this.dense&&!this.prominent,"mdc-top-app-bar--prominent-fixed-adjust":!this.dense&&this.prominent,"mdc-top-app-bar--dense-prominent-fixed-adjust":this.dense&&this.prominent}}registerListeners(){super.registerListeners(),window.addEventListener("resize",this.handleResize,ri)}unregisterListeners(){super.unregisterListeners(),window.removeEventListener("resize",this.handleResize)}}o([we({type:Boolean,reflect:!0})],li.prototype,"prominent",void 0),o([we({type:Boolean,reflect:!0})],li.prototype,"dense",void 0);
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
var ci=function(e){function i(){var t=null!==e&&e.apply(this,arguments)||this;return t.wasScrolled=!1,t}return t(i,e),i.prototype.handleTargetScroll=function(){this.adapter.getViewportScrollY()<=0?this.wasScrolled&&(this.adapter.removeClass(Zt.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(Zt.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},i}(oi);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class di extends li{constructor(){super(...arguments),this.mdcFoundationClass=ci}barClasses(){return Object.assign(Object.assign({},super.barClasses()),{"mdc-top-app-bar--fixed":!0})}registerListeners(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,ri)}unregisterListeners(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}}let pi=class extends di{static get styles(){return[Qt,Jt,ae`
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
      `]}};pi=o([_e("mwc-top-app-bar-fixed")],pi);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const hi=ae`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let ui=class extends ye{render(){return z`<span><slot></slot></span>`}};function mi(e,t){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t)}
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
 */ui.styles=[hi],ui=o([_e("mwc-icon")],ui);var gi={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},fi={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},bi={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
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
var yi=["touchstart","pointerdown","mousedown","keydown"],vi=["touchend","pointerup","mouseup","contextmenu"],_i=[],xi=function(e){function o(t){var n=e.call(this,i(i({},o.defaultAdapter),t))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(e){n.activateImpl(e)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return t(o,e),Object.defineProperty(o,"cssClasses",{get:function(){return gi},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return fi},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return bi},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),o.prototype.init=function(){var e=this,t=this.supportsPressRipple();if(this.registerRootHandlers(t),t){var i=o.cssClasses,n=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame((function(){e.adapter.addClass(n),e.adapter.isUnbounded()&&(e.adapter.addClass(r),e.layoutInternal())}))}},o.prototype.destroy=function(){var e=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(o.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(o.cssClasses.FG_DEACTIVATION));var t=o.cssClasses,i=t.ROOT,n=t.UNBOUNDED;requestAnimationFrame((function(){e.adapter.removeClass(i),e.adapter.removeClass(n),e.removeCssVars()}))}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},o.prototype.activate=function(e){this.activateImpl(e)},o.prototype.deactivate=function(){this.deactivateImpl()},o.prototype.layout=function(){var e=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame((function(){e.layoutInternal(),e.layoutFrame=0}))},o.prototype.setUnbounded=function(e){var t=o.cssClasses.UNBOUNDED;e?this.adapter.addClass(t):this.adapter.removeClass(t)},o.prototype.handleFocus=function(){var e=this;requestAnimationFrame((function(){return e.adapter.addClass(o.cssClasses.BG_FOCUSED)}))},o.prototype.handleBlur=function(){var e=this;requestAnimationFrame((function(){return e.adapter.removeClass(o.cssClasses.BG_FOCUSED)}))},o.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},o.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},o.prototype.registerRootHandlers=function(e){var t,i;if(e){try{for(var o=r(yi),n=o.next();!n.done;n=o.next()){var a=n.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(e){t={error:e}}finally{try{n&&!n.done&&(i=o.return)&&i.call(o)}finally{if(t)throw t.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},o.prototype.registerDeactivationHandlers=function(e){var t,i;if("keydown"===e.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var o=r(vi),n=o.next();!n.done;n=o.next()){var a=n.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(e){t={error:e}}finally{try{n&&!n.done&&(i=o.return)&&i.call(o)}finally{if(t)throw t.error}}},o.prototype.deregisterRootHandlers=function(){var e,t;try{for(var i=r(yi),o=i.next();!o.done;o=i.next()){var n=o.value;this.adapter.deregisterInteractionHandler(n,this.activateHandler)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},o.prototype.deregisterDeactivationHandlers=function(){var e,t;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=r(vi),o=i.next();!o.done;o=i.next()){var n=o.value;this.adapter.deregisterDocumentInteractionHandler(n,this.deactivateHandler)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}},o.prototype.removeCssVars=function(){var e=this,t=o.strings;Object.keys(t).forEach((function(i){0===i.indexOf("VAR_")&&e.adapter.updateCssVariable(t[i],null)}))},o.prototype.activateImpl=function(e){var t=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var o=this.previousActivationEvent;if(!(o&&void 0!==e&&o.type!==e.type))i.isActivated=!0,i.isProgrammatic=void 0===e,i.activationEvent=e,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&_i.length>0&&_i.some((function(e){return t.adapter.containsEventTarget(e)}))?this.resetActivationState():(void 0!==e&&(_i.push(e.target),this.registerDeactivationHandlers(e)),i.wasElementMadeActive=this.checkElementMadeActive(e),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame((function(){_i=[],i.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(i.wasElementMadeActive=t.checkElementMadeActive(e),i.wasElementMadeActive&&t.animateActivation()),i.wasElementMadeActive||(t.activationState=t.defaultActivationState())})))}}},o.prototype.checkElementMadeActive=function(e){return void 0===e||"keydown"!==e.type||this.adapter.isSurfaceActive()},o.prototype.animateActivation=function(){var e=this,t=o.strings,i=t.VAR_FG_TRANSLATE_START,n=t.VAR_FG_TRANSLATE_END,r=o.cssClasses,a=r.FG_DEACTIVATION,s=r.FG_ACTIVATION,l=o.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var c="",d="";if(!this.adapter.isUnbounded()){var p=this.getFgTranslationCoordinates(),h=p.startPoint,u=p.endPoint;c=h.x+"px, "+h.y+"px",d=u.x+"px, "+u.y+"px"}this.adapter.updateCssVariable(i,c),this.adapter.updateCssVariable(n,d),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer=setTimeout((function(){e.activationTimerCallback()}),l)},o.prototype.getFgTranslationCoordinates=function(){var e,t=this.activationState,i=t.activationEvent;return{startPoint:e={x:(e=t.wasActivatedByPointer?function(e,t,i){if(!e)return{x:0,y:0};var o,n,r=t.x,a=t.y,s=r+i.left,l=a+i.top;if("touchstart"===e.type){var c=e;o=c.changedTouches[0].pageX-s,n=c.changedTouches[0].pageY-l}else{var d=e;o=d.pageX-s,n=d.pageY-l}return{x:o,y:n}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2}).x-this.initialSize/2,y:e.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},o.prototype.runDeactivationUXLogicIfReady=function(){var e=this,t=o.cssClasses.FG_DEACTIVATION,i=this.activationState,n=i.hasDeactivationUXRun,r=i.isActivated;(n||!r)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(t),this.fgDeactivationRemovalTimer=setTimeout((function(){e.adapter.removeClass(t)}),bi.FG_DEACTIVATION_MS))},o.prototype.rmBoundedActivationClasses=function(){var e=o.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},o.prototype.resetActivationState=function(){var e=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout((function(){return e.previousActivationEvent=void 0}),o.numbers.TAP_DELAY_MS)},o.prototype.deactivateImpl=function(){var e=this,t=this.activationState;if(t.isActivated){var o=i({},t);t.isProgrammatic?(requestAnimationFrame((function(){e.animateDeactivation(o)})),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame((function(){e.activationState.hasDeactivationUXRun=!0,e.animateDeactivation(o),e.resetActivationState()})))}},o.prototype.animateDeactivation=function(e){var t=e.wasActivatedByPointer,i=e.wasElementMadeActive;(t||i)&&this.runDeactivationUXLogicIfReady()},o.prototype.layoutInternal=function(){var e=this;this.frame=this.adapter.computeBoundingRect();var t=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?t:Math.sqrt(Math.pow(e.frame.width,2)+Math.pow(e.frame.height,2))+o.numbers.PADDING;var i=Math.floor(t*o.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&i%2!=0?this.initialSize=i-1:this.initialSize=i,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},o.prototype.updateLayoutCssVars=function(){var e=o.strings,t=e.VAR_FG_SIZE,i=e.VAR_LEFT,n=e.VAR_TOP,r=e.VAR_FG_SCALE;this.adapter.updateCssVariable(t,this.initialSize+"px"),this.adapter.updateCssVariable(r,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords.top+"px"))},o}(Rt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const wi=He(class extends qe{constructor(e){var t;if(super(e),e.type!==Be||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const o=e[i];return null==o?t:t+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ct){this.ct=new Set;for(const e in t)this.ct.add(e);return this.render(t)}this.ct.forEach((e=>{null==t[e]&&(this.ct.delete(e),e.includes("-")?i.removeProperty(e):i[e]="")}));for(const e in t){const o=t[e];null!=o&&(this.ct.add(e),e.includes("-")?i.setProperty(e,o):i[e]=o)}return B}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ki extends qt{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.internalUseStateLayerCustomProperties=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=xi}get isActive(){return mi(this.parentElement||this,":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(e,t)=>{switch(e){case"--mdc-ripple-fg-scale":this.fgScale=t;break;case"--mdc-ripple-fg-size":this.fgSize=t;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=t;break;case"--mdc-ripple-fg-translate-start":this.translateStart=t;break;case"--mdc-ripple-left":this.leftPos=t;break;case"--mdc-ripple-top":this.topPos=t}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(e){this.waitForFoundation((()=>{this.mdcFoundation.activate(e)}))}endPress(){this.waitForFoundation((()=>{this.mdcFoundation.deactivate()}))}startFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleFocus()}))}endFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleBlur()}))}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(e){this.mdcFoundation?e():this.updateComplete.then(e)}update(e){e.has("disabled")&&this.disabled&&this.endHover(),super.update(e)}render(){const e=this.activated&&(this.primary||!this.accent),t=this.selected&&(this.primary||!this.accent),i={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":e,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":t,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties};return z`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Wt(i)}"
          style="${wi({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}o([Te(".mdc-ripple-surface")],ki.prototype,"mdcRoot",void 0),o([we({type:Boolean})],ki.prototype,"primary",void 0),o([we({type:Boolean})],ki.prototype,"accent",void 0),o([we({type:Boolean})],ki.prototype,"unbounded",void 0),o([we({type:Boolean})],ki.prototype,"disabled",void 0),o([we({type:Boolean})],ki.prototype,"activated",void 0),o([we({type:Boolean})],ki.prototype,"selected",void 0),o([we({type:Boolean})],ki.prototype,"internalUseStateLayerCustomProperties",void 0),o([ke()],ki.prototype,"hovering",void 0),o([ke()],ki.prototype,"bgFocused",void 0),o([ke()],ki.prototype,"fgActivation",void 0),o([ke()],ki.prototype,"fgDeactivation",void 0),o([ke()],ki.prototype,"fgScale",void 0),o([ke()],ki.prototype,"fgSize",void 0),o([ke()],ki.prototype,"translateStart",void 0),o([ke()],ki.prototype,"translateEnd",void 0),o([ke()],ki.prototype,"leftPos",void 0),o([ke()],ki.prototype,"topPos",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Si=ae`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Ei=class extends ki{};function Ti(e,t,i){if(void 0!==t)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
return function(e,t,i){const o=e.constructor;if(!i){const e=`__${t}`;if(!(i=o.getPropertyDescriptor(t,e)))throw new Error("@ariaProperty must be used after a @property decorator")}const n=i;let r="";if(!n.set)throw new Error(`@ariaProperty requires a setter for ${t}`);if(e.dispatchWizEvent)return i;const a={configurable:!0,enumerable:!0,set(e){if(""===r){const e=o.getPropertyOptions(t);r="string"==typeof e.attribute?e.attribute:t}this.hasAttribute(r)&&this.removeAttribute(r),n.set.call(this,e)}};return n.get&&(a.get=function(){return n.get.call(this)}),a}(e,t,i);throw new Error("@ariaProperty only supports TypeScript Decorators")}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */Ei.styles=[Si],Ei=o([_e("mwc-ripple")],Ei);class Ci{constructor(e){this.startPress=t=>{e().then((e=>{e&&e.startPress(t)}))},this.endPress=()=>{e().then((e=>{e&&e.endPress()}))},this.startFocus=()=>{e().then((e=>{e&&e.startFocus()}))},this.endFocus=()=>{e().then((e=>{e&&e.endFocus()}))},this.startHover=()=>{e().then((e=>{e&&e.startHover()}))},this.endHover=()=>{e().then((e=>{e&&e.endHover()}))}}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ai=e=>null!=e?e:D
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;class Ii extends ye{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.expandContent=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new Ci((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderOverlay(){return z``}renderRipple(){const e=this.raised||this.unelevated;return this.shouldRenderRipple?z`<mwc-ripple class="ripple" .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>`:""}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}getRenderClasses(){return{"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense}}render(){return z`
      <button
          id="button"
          class="mdc-button ${Wt(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          aria-haspopup="${Ai(this.ariaHasPopup)}"
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
        <span class="slot-container ${Wt({flex:this.expandContent})}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return z`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}Ii.shadowRootOptions={mode:"open",delegatesFocus:!0},o([Ti,we({type:String,attribute:"aria-haspopup"})],Ii.prototype,"ariaHasPopup",void 0),o([we({type:Boolean,reflect:!0})],Ii.prototype,"raised",void 0),o([we({type:Boolean,reflect:!0})],Ii.prototype,"unelevated",void 0),o([we({type:Boolean,reflect:!0})],Ii.prototype,"outlined",void 0),o([we({type:Boolean})],Ii.prototype,"dense",void 0),o([we({type:Boolean,reflect:!0})],Ii.prototype,"disabled",void 0),o([we({type:Boolean,attribute:"trailingicon"})],Ii.prototype,"trailingIcon",void 0),o([we({type:Boolean,reflect:!0})],Ii.prototype,"fullwidth",void 0),o([we({type:String})],Ii.prototype,"icon",void 0),o([we({type:String})],Ii.prototype,"label",void 0),o([we({type:Boolean})],Ii.prototype,"expandContent",void 0),o([Te("#button")],Ii.prototype,"buttonElement",void 0),o([Ce("mwc-ripple")],Ii.prototype,"ripple",void 0),o([ke()],Ii.prototype,"shouldRenderRipple",void 0),o([Ee({passive:!0})],Ii.prototype,"handleRippleActivate",null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Oi=ae`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:calc(-1 * 1px);left:calc(-1 * 1px);border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let $i=class extends Ii{};$i.styles=[Oi],$i=o([_e("mwc-button")],$i);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ri extends ye{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new Ci((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderRipple(){return this.shouldRenderRipple?z`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){return z`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel||this.icon}"
        aria-haspopup="${Ai(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    <i class="material-icons">${this.icon}</i>
    <span
      ><slot></slot
    ></span>
  </button>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}o([we({type:Boolean,reflect:!0})],Ri.prototype,"disabled",void 0),o([we({type:String})],Ri.prototype,"icon",void 0),o([Ti,we({type:String,attribute:"aria-label"})],Ri.prototype,"ariaLabel",void 0),o([Ti,we({type:String,attribute:"aria-haspopup"})],Ri.prototype,"ariaHasPopup",void 0),o([Te("button")],Ri.prototype,"buttonElement",void 0),o([Ce("mwc-ripple")],Ri.prototype,"ripple",void 0),o([ke()],Ri.prototype,"shouldRenderRipple",void 0),o([Ee({passive:!0})],Ri.prototype,"handleRippleMouseDown",null),o([Ee({passive:!0})],Ri.prototype,"handleRippleTouchStart",null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Pi=ae`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Li=class extends Ri{};Li.styles=[Pi],Li=o([_e("mwc-icon-button")],Li);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ni extends ye{constructor(){super(...arguments),this.disabled=!1,this.onIcon="",this.offIcon="",this.on=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new Ci((()=>(this.shouldRenderRipple=!0,this.ripple)))}handleClick(){this.on=!this.on,this.dispatchEvent(new CustomEvent("icon-button-toggle-change",{detail:{isOn:this.on},bubbles:!0}))}click(){this.mdcRoot.focus(),this.mdcRoot.click()}focus(){this.rippleHandlers.startFocus(),this.mdcRoot.focus()}blur(){this.rippleHandlers.endFocus(),this.mdcRoot.blur()}renderRipple(){return this.shouldRenderRipple?z`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}render(){const e={"mdc-icon-button--on":this.on},t=void 0!==this.ariaLabelOn&&void 0!==this.ariaLabelOff,i=t?void 0:this.on,o=t?this.on?this.ariaLabelOn:this.ariaLabelOff:this.ariaLabel;return z`<button
          class="mdc-icon-button mdc-icon-button--display-flex ${Wt(e)}"
          aria-pressed="${Ai(i)}"
          aria-label="${Ai(o)}"
          @click="${this.handleClick}"
          ?disabled="${this.disabled}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}"
        >${this.renderRipple()}
        <span class="mdc-icon-button__icon"
          ><slot name="offIcon"
            ><i class="material-icons">${this.offIcon}</i
          ></slot
        ></span>
        <span class="mdc-icon-button__icon mdc-icon-button__icon--on"
          ><slot name="onIcon"
            ><i class="material-icons">${this.onIcon}</i
          ></slot
        ></span>
      </button>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}o([Te(".mdc-icon-button")],Ni.prototype,"mdcRoot",void 0),o([Ti,we({type:String,attribute:"aria-label"})],Ni.prototype,"ariaLabel",void 0),o([we({type:Boolean,reflect:!0})],Ni.prototype,"disabled",void 0),o([we({type:String})],Ni.prototype,"onIcon",void 0),o([we({type:String})],Ni.prototype,"offIcon",void 0),o([we({type:String})],Ni.prototype,"ariaLabelOn",void 0),o([we({type:String})],Ni.prototype,"ariaLabelOff",void 0),o([we({type:Boolean,reflect:!0})],Ni.prototype,"on",void 0),o([Ce("mwc-ripple")],Ni.prototype,"ripple",void 0),o([ke()],Ni.prototype,"shouldRenderRipple",void 0),o([Ee({passive:!0})],Ni.prototype,"handleRippleMouseDown",null),o([Ee({passive:!0})],Ni.prototype,"handleRippleTouchStart",null);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Mi=class extends Ni{};Mi.styles=[Pi],Mi=o([_e("mwc-icon-button-toggle")],Mi);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Fi extends ye{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.multipleGraphics=!1,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.shouldRenderRipple=!1,this._managingList=null,this.boundOnClick=this.onClick.bind(this),this._firstChanged=!0,this._skipPropRequest=!1,this.rippleHandlers=new Ci((()=>(this.shouldRenderRipple=!0,this.ripple))),this.listeners=[{target:this,eventNames:["click"],cb:()=>{this.onClick()}},{target:this,eventNames:["mouseenter"],cb:this.rippleHandlers.startHover},{target:this,eventNames:["mouseleave"],cb:this.rippleHandlers.endHover},{target:this,eventNames:["focus"],cb:this.rippleHandlers.startFocus},{target:this,eventNames:["blur"],cb:this.rippleHandlers.endFocus},{target:this,eventNames:["mousedown","touchstart"],cb:e=>{const t=e.type;this.onDown("mousedown"===t?"mouseup":"touchend",e)}}]}get text(){const e=this.textContent;return e?e.trim():""}render(){const e=this.renderText(),t=this.graphic?this.renderGraphic():z``,i=this.hasMeta?this.renderMeta():z``;return z`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${i}`}renderRipple(){return this.shouldRenderRipple?z`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`:this.activated?z`<div class="fake-activated-ripple"></div>`:""}renderGraphic(){const e={multi:this.multipleGraphics};return z`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Wt(e)}">
        <slot name="graphic"></slot>
      </span>`}renderMeta(){return z`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`}renderText(){const e=this.twoline?this.renderTwoline():this.renderSingleLine();return z`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`}renderSingleLine(){return z`<slot></slot>`}renderTwoline(){return z`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `}onClick(){this.fireRequestSelected(!this.selected,"interaction")}onDown(e,t){const i=()=>{window.removeEventListener(e,i),this.rippleHandlers.endPress()};window.addEventListener(e,i),this.rippleHandlers.startPress(t)}fireRequestSelected(e,t){if(this.noninteractive)return;const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{source:t,selected:e}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.setAttribute("mwc-list-item","");for(const e of this.listeners)for(const t of e.eventNames)e.target.addEventListener(t,e.cb,{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const e of this.listeners)for(const t of e.eventNames)e.target.removeEventListener(t,e.cb);this._managingList&&(this._managingList.debouncedLayout?this._managingList.debouncedLayout(!0):this._managingList.layout(!0))}firstUpdated(){const e=new Event("list-item-rendered",{bubbles:!0,composed:!0});this.dispatchEvent(e)}}o([Te("slot")],Fi.prototype,"slotElement",void 0),o([Ce("mwc-ripple")],Fi.prototype,"ripple",void 0),o([we({type:String})],Fi.prototype,"value",void 0),o([we({type:String,reflect:!0})],Fi.prototype,"group",void 0),o([we({type:Number,reflect:!0})],Fi.prototype,"tabindex",void 0),o([we({type:Boolean,reflect:!0}),Vt((function(e){e?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}))],Fi.prototype,"disabled",void 0),o([we({type:Boolean,reflect:!0})],Fi.prototype,"twoline",void 0),o([we({type:Boolean,reflect:!0})],Fi.prototype,"activated",void 0),o([we({type:String,reflect:!0})],Fi.prototype,"graphic",void 0),o([we({type:Boolean})],Fi.prototype,"multipleGraphics",void 0),o([we({type:Boolean})],Fi.prototype,"hasMeta",void 0),o([we({type:Boolean,reflect:!0}),Vt((function(e){e?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.setAttribute("mwc-list-item","")}))],Fi.prototype,"noninteractive",void 0),o([we({type:Boolean,reflect:!0}),Vt((function(e){const t=this.getAttribute("role"),i="gridcell"===t||"option"===t||"row"===t||"tab"===t;i&&e?this.setAttribute("aria-selected","true"):i&&this.setAttribute("aria-selected","false"),this._firstChanged?this._firstChanged=!1:this._skipPropRequest||this.fireRequestSelected(e,"property")}))],Fi.prototype,"selected",void 0),o([ke()],Fi.prototype,"shouldRenderRipple",void 0),o([ke()],Fi.prototype,"_managingList",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const zi=ae`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Bi=class extends Fi{};Bi.styles=[zi],Bi=o([_e("mwc-list-item")],Bi);
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
var Di="Unknown",Ui="Backspace",ji="Enter",Hi="Spacebar",qi="PageUp",Vi="PageDown",Wi="End",Gi="Home",Xi="ArrowLeft",Ki="ArrowUp",Yi="ArrowRight",Qi="ArrowDown",Ji="Delete",Zi="Escape",eo="Tab",to=new Set;to.add(Ui),to.add(ji),to.add(Hi),to.add(qi),to.add(Vi),to.add(Wi),to.add(Gi),to.add(Xi),to.add(Ki),to.add(Yi),to.add(Qi),to.add(Ji),to.add(Zi),to.add(eo);var io=8,oo=13,no=32,ro=33,ao=34,so=35,lo=36,co=37,po=38,ho=39,uo=40,mo=46,go=27,fo=9,bo=new Map;bo.set(io,Ui),bo.set(oo,ji),bo.set(no,Hi),bo.set(ro,qi),bo.set(ao,Vi),bo.set(so,Wi),bo.set(lo,Gi),bo.set(co,Xi),bo.set(po,Ki),bo.set(ho,Yi),bo.set(uo,Qi),bo.set(mo,Ji),bo.set(go,Zi),bo.set(fo,eo);var yo,vo,_o=new Set;function xo(e){var t=e.key;if(to.has(t))return t;var i=bo.get(e.keyCode);return i||Di}
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
 */_o.add(qi),_o.add(Vi),_o.add(Wi),_o.add(Gi),_o.add(Xi),_o.add(Ki),_o.add(Yi),_o.add(Qi);var wo="mdc-list-item--activated",ko="mdc-list-item",So="mdc-list-item--disabled",Eo="mdc-list-item--selected",To="mdc-list-item__text",Co="mdc-list-item__primary-text",Ao="mdc-list";(yo={})[""+wo]="mdc-list-item--activated",yo[""+ko]="mdc-list-item",yo[""+So]="mdc-list-item--disabled",yo[""+Eo]="mdc-list-item--selected",yo[""+Co]="mdc-list-item__primary-text",yo[""+Ao]="mdc-list";var Io=((vo={})[""+wo]="mdc-deprecated-list-item--activated",vo[""+ko]="mdc-deprecated-list-item",vo[""+So]="mdc-deprecated-list-item--disabled",vo[""+Eo]="mdc-deprecated-list-item--selected",vo[""+To]="mdc-deprecated-list-item__text",vo[""+Co]="mdc-deprecated-list-item__primary-text",vo[""+Ao]="mdc-deprecated-list",vo),Oo={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+ko+" button:not(:disabled),\n    ."+ko+" a,\n    ."+Io[ko]+" button:not(:disabled),\n    ."+Io[ko]+" a\n  ",DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+ko+" button:not(:disabled),\n    ."+ko+" a,\n    ."+ko+' input[type="radio"]:not(:disabled),\n    .'+ko+' input[type="checkbox"]:not(:disabled),\n    .'+Io[ko]+" button:not(:disabled),\n    ."+Io[ko]+" a,\n    ."+Io[ko]+' input[type="radio"]:not(:disabled),\n    .'+Io[ko]+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},$o={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ro=(e,t)=>e-t,Po=["input","button","textarea","select"];function Lo(e){return e instanceof Set}const No=e=>{const t=e===$o.UNSET_INDEX?new Set:e;return Lo(t)?new Set(t):new Set([t])};class Mo extends Rt{constructor(e){super(Object.assign(Object.assign({},Mo.defaultAdapter),e)),this.isMulti_=!1,this.wrapFocus_=!1,this.isVertical_=!0,this.selectedIndex_=$o.UNSET_INDEX,this.focusedItemIndex_=$o.UNSET_INDEX,this.useActivatedClass_=!1,this.ariaCurrentAttrValue_=null}static get strings(){return Oo}static get numbers(){return $o}static get defaultAdapter(){return{focusItemAtIndex:()=>{},getFocusedElementIndex:()=>0,getListItemCount:()=>0,isFocusInsideList:()=>!1,isRootFocused:()=>!1,notifyAction:()=>{},notifySelected:()=>{},getSelectedStateForElementIndex:()=>!1,setDisabledStateForElementIndex:()=>{},getDisabledStateForElementIndex:()=>!1,setSelectedStateForElementIndex:()=>{},setActivatedStateForElementIndex:()=>{},setTabIndexForElementIndex:()=>{},setAttributeForElementIndex:()=>{},getAttributeForElementIndex:()=>null}}setWrapFocus(e){this.wrapFocus_=e}setMulti(e){this.isMulti_=e;const t=this.selectedIndex_;if(e){if(!Lo(t)){const e=t===$o.UNSET_INDEX;this.selectedIndex_=e?new Set:new Set([t])}}else if(Lo(t))if(t.size){const e=Array.from(t).sort(Ro);this.selectedIndex_=e[0]}else this.selectedIndex_=$o.UNSET_INDEX}setVerticalOrientation(e){this.isVertical_=e}setUseActivatedClass(e){this.useActivatedClass_=e}getSelectedIndex(){return this.selectedIndex_}setSelectedIndex(e){this.isIndexValid_(e)&&(this.isMulti_?this.setMultiSelectionAtIndex_(No(e)):this.setSingleSelectionAtIndex_(e))}handleFocusIn(e,t){t>=0&&this.adapter.setTabIndexForElementIndex(t,0)}handleFocusOut(e,t){t>=0&&this.adapter.setTabIndexForElementIndex(t,-1),setTimeout((()=>{this.adapter.isFocusInsideList()||this.setTabindexToFirstSelectedItem_()}),0)}handleKeydown(e,t,i){const o="ArrowLeft"===xo(e),n="ArrowUp"===xo(e),r="ArrowRight"===xo(e),a="ArrowDown"===xo(e),s="Home"===xo(e),l="End"===xo(e),c="Enter"===xo(e),d="Spacebar"===xo(e);if(this.adapter.isRootFocused())return void(n||l?(e.preventDefault(),this.focusLastElement()):(a||s)&&(e.preventDefault(),this.focusFirstElement()));let p,h=this.adapter.getFocusedElementIndex();if(!(-1===h&&(h=i,h<0))){if(this.isVertical_&&a||!this.isVertical_&&r)this.preventDefaultEvent(e),p=this.focusNextElement(h);else if(this.isVertical_&&n||!this.isVertical_&&o)this.preventDefaultEvent(e),p=this.focusPrevElement(h);else if(s)this.preventDefaultEvent(e),p=this.focusFirstElement();else if(l)this.preventDefaultEvent(e),p=this.focusLastElement();else if((c||d)&&t){const t=e.target;if(t&&"A"===t.tagName&&c)return;this.preventDefaultEvent(e),this.setSelectedIndexOnAction_(h,!0)}this.focusedItemIndex_=h,void 0!==p&&(this.setTabindexAtIndex_(p),this.focusedItemIndex_=p)}}handleSingleSelection(e,t,i){e!==$o.UNSET_INDEX&&(this.setSelectedIndexOnAction_(e,t,i),this.setTabindexAtIndex_(e),this.focusedItemIndex_=e)}focusNextElement(e){let t=e+1;if(t>=this.adapter.getListItemCount()){if(!this.wrapFocus_)return e;t=0}return this.adapter.focusItemAtIndex(t),t}focusPrevElement(e){let t=e-1;if(t<0){if(!this.wrapFocus_)return e;t=this.adapter.getListItemCount()-1}return this.adapter.focusItemAtIndex(t),t}focusFirstElement(){return this.adapter.focusItemAtIndex(0),0}focusLastElement(){const e=this.adapter.getListItemCount()-1;return this.adapter.focusItemAtIndex(e),e}setEnabled(e,t){this.isIndexValid_(e)&&this.adapter.setDisabledStateForElementIndex(e,!t)}preventDefaultEvent(e){const t=`${e.target.tagName}`.toLowerCase();-1===Po.indexOf(t)&&e.preventDefault()}setSingleSelectionAtIndex_(e,t=!0){this.selectedIndex_!==e&&(this.selectedIndex_!==$o.UNSET_INDEX&&(this.adapter.setSelectedStateForElementIndex(this.selectedIndex_,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(this.selectedIndex_,!1)),t&&this.adapter.setSelectedStateForElementIndex(e,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(e,!0),this.setAriaForSingleSelectionAtIndex_(e),this.selectedIndex_=e,this.adapter.notifySelected(e))}setMultiSelectionAtIndex_(e,t=!0){const i=((e,t)=>{const i=Array.from(e),o=Array.from(t),n={added:[],removed:[]},r=i.sort(Ro),a=o.sort(Ro);let s=0,l=0;for(;s<r.length||l<a.length;){const e=r[s],t=a[l];e!==t?void 0!==e&&(void 0===t||e<t)?(n.removed.push(e),s++):void 0!==t&&(void 0===e||t<e)&&(n.added.push(t),l++):(s++,l++)}return n})(No(this.selectedIndex_),e);if(i.removed.length||i.added.length){for(const e of i.removed)t&&this.adapter.setSelectedStateForElementIndex(e,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(e,!1);for(const e of i.added)t&&this.adapter.setSelectedStateForElementIndex(e,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(e,!0);this.selectedIndex_=e,this.adapter.notifySelected(e,i)}}setAriaForSingleSelectionAtIndex_(e){this.selectedIndex_===$o.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter.getAttributeForElementIndex(e,Oo.ARIA_CURRENT));const t=null!==this.ariaCurrentAttrValue_,i=t?Oo.ARIA_CURRENT:Oo.ARIA_SELECTED;this.selectedIndex_!==$o.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex_,i,"false");const o=t?this.ariaCurrentAttrValue_:"true";this.adapter.setAttributeForElementIndex(e,i,o)}setTabindexAtIndex_(e){this.focusedItemIndex_===$o.UNSET_INDEX&&0!==e?this.adapter.setTabIndexForElementIndex(0,-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==e&&this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_,-1),this.adapter.setTabIndexForElementIndex(e,0)}setTabindexToFirstSelectedItem_(){let e=0;"number"==typeof this.selectedIndex_&&this.selectedIndex_!==$o.UNSET_INDEX?e=this.selectedIndex_:Lo(this.selectedIndex_)&&this.selectedIndex_.size>0&&(e=Math.min(...this.selectedIndex_)),this.setTabindexAtIndex_(e)}isIndexValid_(e){if(e instanceof Set){if(!this.isMulti_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");if(0===e.size)return!0;{let t=!1;for(const i of e)if(t=this.isIndexInRange_(i),t)break;return t}}if("number"==typeof e){if(this.isMulti_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+e);return e===$o.UNSET_INDEX||this.isIndexInRange_(e)}return!1}isIndexInRange_(e){const t=this.adapter.getListItemCount();return e>=0&&e<t}setSelectedIndexOnAction_(e,t,i){if(this.adapter.getDisabledStateForElementIndex(e))return;let o=e;if(this.isMulti_&&(o=new Set([e])),this.isIndexValid_(o)){if(this.isMulti_)this.toggleMultiAtIndex(e,i,t);else if(t||i)this.setSingleSelectionAtIndex_(e,t);else{this.selectedIndex_===e&&this.setSingleSelectionAtIndex_($o.UNSET_INDEX)}t&&this.adapter.notifyAction(e)}}toggleMultiAtIndex(e,t,i=!0){let o=!1;o=void 0===t?!this.adapter.getSelectedStateForElementIndex(e):t;const n=No(this.selectedIndex_);o?n.add(e):n.delete(e),this.setMultiSelectionAtIndex_(n,i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Fo=e=>e.hasAttribute("mwc-list-item");function zo(){const e=this.itemsReadyResolver;this.itemsReady=new Promise((e=>this.itemsReadyResolver=e)),e()}class Bo extends qt{constructor(){super(),this.mdcAdapter=null,this.mdcFoundationClass=Mo,this.activatable=!1,this.multi=!1,this.wrapFocus=!1,this.itemRoles=null,this.innerRole=null,this.innerAriaLabel=null,this.rootTabbable=!1,this.previousTabindex=null,this.noninteractive=!1,this.itemsReadyResolver=()=>{},this.itemsReady=Promise.resolve([]),this.items_=[];const e=function(e,t=50){let i;return function(o=!0){clearTimeout(i),i=setTimeout((()=>{e(o)}),t)}}(this.layout.bind(this));this.debouncedLayout=(t=!0)=>{zo.call(this),e(t)}}async getUpdateComplete(){const e=await super.getUpdateComplete();return await this.itemsReady,e}get items(){return this.items_}updateItems(){var e;const t=null!==(e=this.assignedElements)&&void 0!==e?e:[],i=[];for(const e of t)Fo(e)&&(i.push(e),e._managingList=this),e.hasAttribute("divider")&&!e.hasAttribute("role")&&e.setAttribute("role","separator");this.items_=i;const o=new Set;if(this.items_.forEach(((e,t)=>{this.itemRoles?e.setAttribute("role",this.itemRoles):e.removeAttribute("role"),e.selected&&o.add(t)})),this.multi)this.select(o);else{const e=o.size?o.entries().next().value[1]:-1;this.select(e)}const n=new Event("items-updated",{bubbles:!0,composed:!0});this.dispatchEvent(n)}get selected(){const e=this.index;if(!Lo(e))return-1===e?null:this.items[e];const t=[];for(const i of e)t.push(this.items[i]);return t}get index(){return this.mdcFoundation?this.mdcFoundation.getSelectedIndex():-1}render(){const e=null===this.innerRole?void 0:this.innerRole,t=null===this.innerAriaLabel?void 0:this.innerAriaLabel,i=this.rootTabbable?"0":"-1";return z`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${Ai(e)}"
          aria-label="${Ai(t)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `}renderPlaceholder(){var e;const t=null!==(e=this.assignedElements)&&void 0!==e?e:[];return void 0!==this.emptyMessage&&0===t.length?z`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `:null}firstUpdated(){super.firstUpdated(),this.items.length||(this.mdcFoundation.setMulti(this.multi),this.layout())}onFocusIn(e){if(this.mdcFoundation&&this.mdcRoot){const t=this.getIndexOfTarget(e);this.mdcFoundation.handleFocusIn(e,t)}}onFocusOut(e){if(this.mdcFoundation&&this.mdcRoot){const t=this.getIndexOfTarget(e);this.mdcFoundation.handleFocusOut(e,t)}}onKeydown(e){if(this.mdcFoundation&&this.mdcRoot){const t=this.getIndexOfTarget(e),i=e.target,o=Fo(i);this.mdcFoundation.handleKeydown(e,o,t)}}onRequestSelected(e){if(this.mdcFoundation){let t=this.getIndexOfTarget(e);if(-1===t&&(this.layout(),t=this.getIndexOfTarget(e),-1===t))return;if(this.items[t].disabled)return;const i=e.detail.selected,o=e.detail.source;this.mdcFoundation.handleSingleSelection(t,"interaction"===o,i),e.stopPropagation()}}getIndexOfTarget(e){const t=this.items,i=e.composedPath();for(const e of i){let i=-1;if(Mt(e)&&Fo(e)&&(i=t.indexOf(e)),-1!==i)return i}return-1}createAdapter(){return this.mdcAdapter={getListItemCount:()=>this.mdcRoot?this.items.length:0,getFocusedElementIndex:this.getFocusedItemIndex,getAttributeForElementIndex:(e,t)=>{if(!this.mdcRoot)return"";const i=this.items[e];return i?i.getAttribute(t):""},setAttributeForElementIndex:(e,t,i)=>{if(!this.mdcRoot)return;const o=this.items[e];o&&o.setAttribute(t,i)},focusItemAtIndex:e=>{const t=this.items[e];t&&t.focus()},setTabIndexForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.tabindex=t)},notifyAction:e=>{const t={bubbles:!0,composed:!0};t.detail={index:e};const i=new CustomEvent("action",t);this.dispatchEvent(i)},notifySelected:(e,t)=>{const i={bubbles:!0,composed:!0};i.detail={index:e,diff:t};const o=new CustomEvent("selected",i);this.dispatchEvent(o)},isFocusInsideList:()=>Ht(this),isRootFocused:()=>{const e=this.mdcRoot;return e.getRootNode().activeElement===e},setDisabledStateForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.disabled=t)},getDisabledStateForElementIndex:e=>{const t=this.items[e];return!!t&&t.disabled},setSelectedStateForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.selected=t)},getSelectedStateForElementIndex:e=>{const t=this.items[e];return!!t&&t.selected},setActivatedStateForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.activated=t)}},this.mdcAdapter}selectUi(e,t=!1){const i=this.items[e];i&&(i.selected=!0,i.activated=t)}deselectUi(e){const t=this.items[e];t&&(t.selected=!1,t.activated=!1)}select(e){this.mdcFoundation&&this.mdcFoundation.setSelectedIndex(e)}toggle(e,t){this.multi&&this.mdcFoundation.toggleMultiAtIndex(e,t)}onListItemConnected(e){const t=e.target;this.layout(-1===this.items.indexOf(t))}layout(e=!0){e&&this.updateItems();const t=this.items[0];for(const e of this.items)e.tabindex=-1;t&&(this.noninteractive?this.previousTabindex||(this.previousTabindex=t):t.tabindex=0),this.itemsReadyResolver()}getFocusedItemIndex(){if(!this.mdcRoot)return-1;if(!this.items.length)return-1;const e=jt();if(!e.length)return-1;for(let t=e.length-1;t>=0;t--){const i=e[t];if(Fo(i))return this.items.indexOf(i)}return-1}focusItemAtIndex(e){for(const e of this.items)if(0===e.tabindex){e.tabindex=-1;break}this.items[e].tabindex=0,this.items[e].focus()}focus(){const e=this.mdcRoot;e&&e.focus()}blur(){const e=this.mdcRoot;e&&e.blur()}}o([we({type:String})],Bo.prototype,"emptyMessage",void 0),o([Te(".mdc-deprecated-list")],Bo.prototype,"mdcRoot",void 0),o([Oe("",!0,"*")],Bo.prototype,"assignedElements",void 0),o([Oe("",!0,'[tabindex="0"]')],Bo.prototype,"tabbableElements",void 0),o([we({type:Boolean}),Vt((function(e){this.mdcFoundation&&this.mdcFoundation.setUseActivatedClass(e)}))],Bo.prototype,"activatable",void 0),o([we({type:Boolean}),Vt((function(e,t){this.mdcFoundation&&this.mdcFoundation.setMulti(e),void 0!==t&&this.layout()}))],Bo.prototype,"multi",void 0),o([we({type:Boolean}),Vt((function(e){this.mdcFoundation&&this.mdcFoundation.setWrapFocus(e)}))],Bo.prototype,"wrapFocus",void 0),o([we({type:String}),Vt((function(e,t){void 0!==t&&this.updateItems()}))],Bo.prototype,"itemRoles",void 0),o([we({type:String})],Bo.prototype,"innerRole",void 0),o([we({type:String})],Bo.prototype,"innerAriaLabel",void 0),o([we({type:Boolean})],Bo.prototype,"rootTabbable",void 0),o([we({type:Boolean,reflect:!0}),Vt((function(e){var t,i;if(e){const e=null!==(i=null===(t=this.tabbableElements)||void 0===t?void 0:t[0])&&void 0!==i?i:null;this.previousTabindex=e,e&&e.setAttribute("tabindex","-1")}else!e&&this.previousTabindex&&(this.previousTabindex.setAttribute("tabindex","0"),this.previousTabindex=null)}))],Bo.prototype,"noninteractive",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Do=ae`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Uo=class extends Bo{};Uo.styles=[Do],Uo=o([_e("mwc-list")],Uo);
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
var jo,Ho,qo={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},Vo={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},Wo={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30};!function(e){e[e.BOTTOM=1]="BOTTOM",e[e.CENTER=2]="CENTER",e[e.RIGHT=4]="RIGHT",e[e.FLIP_RTL=8]="FLIP_RTL"}(jo||(jo={})),function(e){e[e.TOP_LEFT=0]="TOP_LEFT",e[e.TOP_RIGHT=4]="TOP_RIGHT",e[e.BOTTOM_LEFT=1]="BOTTOM_LEFT",e[e.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",e[e.TOP_START=8]="TOP_START",e[e.TOP_END=12]="TOP_END",e[e.BOTTOM_START=9]="BOTTOM_START",e[e.BOTTOM_END=13]="BOTTOM_END"}(Ho||(Ho={}));
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
var Go=function(e){function o(t){var n=e.call(this,i(i({},o.defaultAdapter),t))||this;return n.isSurfaceOpen=!1,n.isQuickOpen=!1,n.isHoistedElement=!1,n.isFixedPosition=!1,n.isHorizontallyCenteredOnViewport=!1,n.maxHeight=0,n.openBottomBias=0,n.openAnimationEndTimerId=0,n.closeAnimationEndTimerId=0,n.animationRequestId=0,n.anchorCorner=Ho.TOP_START,n.originCorner=Ho.TOP_START,n.anchorMargin={top:0,right:0,bottom:0,left:0},n.position={x:0,y:0},n}return t(o,e),Object.defineProperty(o,"cssClasses",{get:function(){return qo},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return Vo},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return Wo},enumerable:!1,configurable:!0}),Object.defineProperty(o,"Corner",{get:function(){return Ho},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),o.prototype.init=function(){var e=o.cssClasses,t=e.ROOT,i=e.OPEN;if(!this.adapter.hasClass(t))throw new Error(t+" class required in root element.");this.adapter.hasClass(i)&&(this.isSurfaceOpen=!0)},o.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},o.prototype.setAnchorCorner=function(e){this.anchorCorner=e},o.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^jo.RIGHT},o.prototype.setAnchorMargin=function(e){this.anchorMargin.top=e.top||0,this.anchorMargin.right=e.right||0,this.anchorMargin.bottom=e.bottom||0,this.anchorMargin.left=e.left||0},o.prototype.setIsHoisted=function(e){this.isHoistedElement=e},o.prototype.setFixedPosition=function(e){this.isFixedPosition=e},o.prototype.isFixed=function(){return this.isFixedPosition},o.prototype.setAbsolutePosition=function(e,t){this.position.x=this.isFinite(e)?e:0,this.position.y=this.isFinite(t)?t:0},o.prototype.setIsHorizontallyCenteredOnViewport=function(e){this.isHorizontallyCenteredOnViewport=e},o.prototype.setQuickOpen=function(e){this.isQuickOpen=e},o.prototype.setMaxHeight=function(e){this.maxHeight=e},o.prototype.setOpenBottomBias=function(e){this.openBottomBias=e},o.prototype.isOpen=function(){return this.isSurfaceOpen},o.prototype.open=function(){var e=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(o.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(o.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame((function(){e.dimensions=e.adapter.getInnerDimensions(),e.autoposition(),e.adapter.addClass(o.cssClasses.OPEN),e.openAnimationEndTimerId=setTimeout((function(){e.openAnimationEndTimerId=0,e.adapter.removeClass(o.cssClasses.ANIMATING_OPEN),e.adapter.notifyOpen()}),Wo.TRANSITION_OPEN_DURATION)})),this.isSurfaceOpen=!0))},o.prototype.close=function(e){var t=this;if(void 0===e&&(e=!1),this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen)return this.isSurfaceOpen=!1,e||this.maybeRestoreFocus(),this.adapter.removeClass(o.cssClasses.OPEN),this.adapter.removeClass(o.cssClasses.IS_OPEN_BELOW),void this.adapter.notifyClose();this.adapter.addClass(o.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){t.adapter.removeClass(o.cssClasses.OPEN),t.adapter.removeClass(o.cssClasses.IS_OPEN_BELOW),t.closeAnimationEndTimerId=setTimeout((function(){t.closeAnimationEndTimerId=0,t.adapter.removeClass(o.cssClasses.ANIMATING_CLOSED),t.adapter.notifyClose()}),Wo.TRANSITION_CLOSE_DURATION)})),this.isSurfaceOpen=!1,e||this.maybeRestoreFocus()}},o.prototype.handleBodyClick=function(e){var t=e.target;this.adapter.isElementInContainer(t)||this.close()},o.prototype.handleKeydown=function(e){var t=e.keyCode;("Escape"===e.key||27===t)&&this.close()},o.prototype.autoposition=function(){var e;this.measurements=this.getAutoLayoutmeasurements();var t=this.getoriginCorner(),i=this.getMenuSurfaceMaxHeight(t),n=this.hasBit(t,jo.BOTTOM)?"bottom":"top",r=this.hasBit(t,jo.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(t),s=this.getVerticalOriginOffset(t),l=this.measurements,c=l.anchorSize,d=l.surfaceSize,p=((e={})[r]=a,e[n]=s,e);c.width/d.width>Wo.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(r="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(p),this.adapter.setTransformOrigin(r+" "+n),this.adapter.setPosition(p),this.adapter.setMaxHeight(i?i+"px":""),this.hasBit(t,jo.BOTTOM)||this.adapter.addClass(o.cssClasses.IS_OPEN_BELOW)},o.prototype.getAutoLayoutmeasurements=function(){var e=this.adapter.getAnchorDimensions(),t=this.adapter.getBodyDimensions(),i=this.adapter.getWindowDimensions(),o=this.adapter.getWindowScroll();return e||(e={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:e,bodySize:t,surfaceSize:this.dimensions,viewportDistance:{top:e.top,right:i.width-e.right,bottom:i.height-e.bottom,left:e.left},viewportSize:i,windowScroll:o}},o.prototype.getoriginCorner=function(){var e,t,i=this.originCorner,n=this.measurements,r=n.viewportDistance,a=n.anchorSize,s=n.surfaceSize,l=o.numbers.MARGIN_TO_EDGE;this.hasBit(this.anchorCorner,jo.BOTTOM)?(e=r.top-l+this.anchorMargin.bottom,t=r.bottom-l-this.anchorMargin.bottom):(e=r.top-l+this.anchorMargin.top,t=r.bottom-l+a.height-this.anchorMargin.top),!(t-s.height>0)&&e>t+this.openBottomBias&&(i=this.setBit(i,jo.BOTTOM));var c,d,p=this.adapter.isRtl(),h=this.hasBit(this.anchorCorner,jo.FLIP_RTL),u=this.hasBit(this.anchorCorner,jo.RIGHT)||this.hasBit(i,jo.RIGHT),m=!1;(m=p&&h?!u:u)?(c=r.left+a.width+this.anchorMargin.right,d=r.right-this.anchorMargin.right):(c=r.left+this.anchorMargin.left,d=r.right+a.width-this.anchorMargin.left);var g=c-s.width>0,f=d-s.width>0,b=this.hasBit(i,jo.FLIP_RTL)&&this.hasBit(i,jo.RIGHT);return f&&b&&p||!g&&b?i=this.unsetBit(i,jo.RIGHT):(g&&m&&p||g&&!m&&u||!f&&c>=d)&&(i=this.setBit(i,jo.RIGHT)),i},o.prototype.getMenuSurfaceMaxHeight=function(e){if(this.maxHeight>0)return this.maxHeight;var t=this.measurements.viewportDistance,i=0,n=this.hasBit(e,jo.BOTTOM),r=this.hasBit(this.anchorCorner,jo.BOTTOM),a=o.numbers.MARGIN_TO_EDGE;return n?(i=t.top+this.anchorMargin.top-a,r||(i+=this.measurements.anchorSize.height)):(i=t.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,r&&(i-=this.measurements.anchorSize.height)),i},o.prototype.getHorizontalOriginOffset=function(e){var t=this.measurements.anchorSize,i=this.hasBit(e,jo.RIGHT),o=this.hasBit(this.anchorCorner,jo.RIGHT);if(i){var n=o?t.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?n-(this.measurements.viewportSize.width-this.measurements.bodySize.width):n}return o?t.width-this.anchorMargin.right:this.anchorMargin.left},o.prototype.getVerticalOriginOffset=function(e){var t=this.measurements.anchorSize,i=this.hasBit(e,jo.BOTTOM),o=this.hasBit(this.anchorCorner,jo.BOTTOM);return i?o?t.height-this.anchorMargin.top:-this.anchorMargin.bottom:o?t.height+this.anchorMargin.bottom:this.anchorMargin.top},o.prototype.adjustPositionForHoistedElement=function(e){var t,i,o=this.measurements,n=o.windowScroll,a=o.viewportDistance,s=o.surfaceSize,l=o.viewportSize,c=Object.keys(e);try{for(var d=r(c),p=d.next();!p.done;p=d.next()){var h=p.value,u=e[h]||0;!this.isHorizontallyCenteredOnViewport||"left"!==h&&"right"!==h?(u+=a[h],this.isFixedPosition||("top"===h?u+=n.y:"bottom"===h?u-=n.y:"left"===h?u+=n.x:u-=n.x),e[h]=u):e[h]=(l.width-s.width)/2}}catch(e){t={error:e}}finally{try{p&&!p.done&&(i=d.return)&&i.call(d)}finally{if(t)throw t.error}}},o.prototype.maybeRestoreFocus=function(){var e=this,t=this.adapter.isFocused(),i=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(t||i)&&setTimeout((function(){e.adapter.restoreFocus()}),Wo.TOUCH_EVENT_WAIT_MS)},o.prototype.hasBit=function(e,t){return Boolean(e&t)},o.prototype.setBit=function(e,t){return e|t},o.prototype.unsetBit=function(e,t){return e^t},o.prototype.isFinite=function(e){return"number"==typeof e&&isFinite(e)},o}(Rt),Xo=Go;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ko={TOP_LEFT:Ho.TOP_LEFT,TOP_RIGHT:Ho.TOP_RIGHT,BOTTOM_LEFT:Ho.BOTTOM_LEFT,BOTTOM_RIGHT:Ho.BOTTOM_RIGHT,TOP_START:Ho.TOP_START,TOP_END:Ho.TOP_END,BOTTOM_START:Ho.BOTTOM_START,BOTTOM_END:Ho.BOTTOM_END};class Yo extends qt{constructor(){super(...arguments),this.mdcFoundationClass=Xo,this.absolute=!1,this.fullwidth=!1,this.fixed=!1,this.x=null,this.y=null,this.quick=!1,this.open=!1,this.stayOpenOnBodyClick=!1,this.bitwiseCorner=Ho.TOP_START,this.previousMenuCorner=null,this.menuCorner="START",this.corner="TOP_START",this.styleTop="",this.styleLeft="",this.styleRight="",this.styleBottom="",this.styleMaxHeight="",this.styleTransformOrigin="",this.anchor=null,this.previouslyFocused=null,this.previousAnchor=null,this.onBodyClickBound=()=>{}}render(){const e={"mdc-menu-surface--fixed":this.fixed,"mdc-menu-surface--fullwidth":this.fullwidth},t={top:this.styleTop,left:this.styleLeft,right:this.styleRight,bottom:this.styleBottom,"max-height":this.styleMaxHeight,"transform-origin":this.styleTransformOrigin};return z`
      <div
          class="mdc-menu-surface ${Wt(e)}"
          style="${wi(t)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`}createAdapter(){return Object.assign(Object.assign({},Ft(this.mdcRoot)),{hasAnchor:()=>!!this.anchor,notifyClose:()=>{const e=new CustomEvent("closed",{bubbles:!0,composed:!0});this.open=!1,this.mdcRoot.dispatchEvent(e)},notifyClosing:()=>{const e=new CustomEvent("closing",{bubbles:!0,composed:!0});this.mdcRoot.dispatchEvent(e)},notifyOpen:()=>{const e=new CustomEvent("opened",{bubbles:!0,composed:!0});this.open=!0,this.mdcRoot.dispatchEvent(e)},isElementInContainer:()=>!1,isRtl:()=>!!this.mdcRoot&&"rtl"===getComputedStyle(this.mdcRoot).direction,setTransformOrigin:e=>{this.mdcRoot&&(this.styleTransformOrigin=e)},isFocused:()=>Ht(this),saveFocus:()=>{const e=jt(),t=e.length;t||(this.previouslyFocused=null),this.previouslyFocused=e[t-1]},restoreFocus:()=>{this.previouslyFocused&&"focus"in this.previouslyFocused&&this.previouslyFocused.focus()},getInnerDimensions:()=>{const e=this.mdcRoot;return e?{width:e.offsetWidth,height:e.offsetHeight}:{width:0,height:0}},getAnchorDimensions:()=>{const e=this.anchor;return e?e.getBoundingClientRect():null},getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:e=>{this.mdcRoot&&(this.styleLeft="left"in e?`${e.left}px`:"",this.styleRight="right"in e?`${e.right}px`:"",this.styleTop="top"in e?`${e.top}px`:"",this.styleBottom="bottom"in e?`${e.bottom}px`:"")},setMaxHeight:async e=>{this.mdcRoot&&(this.styleMaxHeight=e,await this.updateComplete,this.styleMaxHeight=`var(--mdc-menu-max-height, ${e})`)}})}onKeydown(e){this.mdcFoundation&&this.mdcFoundation.handleKeydown(e)}onBodyClick(e){if(this.stayOpenOnBodyClick)return;-1===e.composedPath().indexOf(this)&&this.close()}registerBodyClick(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound,{passive:!0,capture:!0})}deregisterBodyClick(){document.body.removeEventListener("click",this.onBodyClickBound,{capture:!0})}close(){this.open=!1}show(){this.open=!0}}o([Te(".mdc-menu-surface")],Yo.prototype,"mdcRoot",void 0),o([Te("slot")],Yo.prototype,"slotElement",void 0),o([we({type:Boolean}),Vt((function(e){this.mdcFoundation&&!this.fixed&&this.mdcFoundation.setIsHoisted(e)}))],Yo.prototype,"absolute",void 0),o([we({type:Boolean})],Yo.prototype,"fullwidth",void 0),o([we({type:Boolean}),Vt((function(e){this.mdcFoundation&&!this.absolute&&this.mdcFoundation.setFixedPosition(e)}))],Yo.prototype,"fixed",void 0),o([we({type:Number}),Vt((function(e){this.mdcFoundation&&null!==this.y&&null!==e&&(this.mdcFoundation.setAbsolutePosition(e,this.y),this.mdcFoundation.setAnchorMargin({left:e,top:this.y,right:-e,bottom:this.y}))}))],Yo.prototype,"x",void 0),o([we({type:Number}),Vt((function(e){this.mdcFoundation&&null!==this.x&&null!==e&&(this.mdcFoundation.setAbsolutePosition(this.x,e),this.mdcFoundation.setAnchorMargin({left:this.x,top:e,right:-this.x,bottom:e}))}))],Yo.prototype,"y",void 0),o([we({type:Boolean}),Vt((function(e){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(e)}))],Yo.prototype,"quick",void 0),o([we({type:Boolean,reflect:!0}),Vt((function(e,t){this.mdcFoundation&&(e?this.mdcFoundation.open():void 0!==t&&this.mdcFoundation.close())}))],Yo.prototype,"open",void 0),o([we({type:Boolean})],Yo.prototype,"stayOpenOnBodyClick",void 0),o([ke(),Vt((function(e){this.mdcFoundation&&this.mdcFoundation.setAnchorCorner(e)}))],Yo.prototype,"bitwiseCorner",void 0),o([we({type:String}),Vt((function(e){if(this.mdcFoundation){const t="START"===e||"END"===e,i=null===this.previousMenuCorner,o=!i&&e!==this.previousMenuCorner,n=i&&"END"===e;t&&(o||n)&&(this.bitwiseCorner=this.bitwiseCorner^jo.RIGHT,this.mdcFoundation.flipCornerHorizontally(),this.previousMenuCorner=e)}}))],Yo.prototype,"menuCorner",void 0),o([we({type:String}),Vt((function(e){if(this.mdcFoundation&&e){let t=Ko[e];"END"===this.menuCorner&&(t^=jo.RIGHT),this.bitwiseCorner=t}}))],Yo.prototype,"corner",void 0),o([ke()],Yo.prototype,"styleTop",void 0),o([ke()],Yo.prototype,"styleLeft",void 0),o([ke()],Yo.prototype,"styleRight",void 0),o([ke()],Yo.prototype,"styleBottom",void 0),o([ke()],Yo.prototype,"styleMaxHeight",void 0),o([ke()],Yo.prototype,"styleTransformOrigin",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Qo=ae`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Jo=class extends Yo{};Jo.styles=[Qo],Jo=o([_e("mwc-menu-surface")],Jo);
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
var Zo,en={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},tn={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},on={FOCUS_ROOT_INDEX:-1};!function(e){e[e.NONE=0]="NONE",e[e.LIST_ROOT=1]="LIST_ROOT",e[e.FIRST_ITEM=2]="FIRST_ITEM",e[e.LAST_ITEM=3]="LAST_ITEM"}(Zo||(Zo={}));
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
var nn=function(e){function o(t){var n=e.call(this,i(i({},o.defaultAdapter),t))||this;return n.closeAnimationEndTimerId=0,n.defaultFocusState=Zo.LIST_ROOT,n.selectedIndex=-1,n}return t(o,e),Object.defineProperty(o,"cssClasses",{get:function(){return en},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return tn},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return on},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),o.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},o.prototype.handleKeydown=function(e){var t=e.key,i=e.keyCode;("Tab"===t||9===i)&&this.adapter.closeSurface(!0)},o.prototype.handleItemAction=function(e){var t=this,i=this.adapter.getElementIndex(e);if(!(i<0)){this.adapter.notifySelected({index:i});var o="true"===this.adapter.getAttributeFromElementAtIndex(i,tn.SKIP_RESTORE_FOCUS);this.adapter.closeSurface(o),this.closeAnimationEndTimerId=setTimeout((function(){var i=t.adapter.getElementIndex(e);i>=0&&t.adapter.isSelectableItemAtIndex(i)&&t.setSelectedIndex(i)}),Go.numbers.TRANSITION_CLOSE_DURATION)}},o.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Zo.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Zo.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Zo.NONE:break;default:this.adapter.focusListRoot()}},o.prototype.setDefaultFocusState=function(e){this.defaultFocusState=e},o.prototype.getSelectedIndex=function(){return this.selectedIndex},o.prototype.setSelectedIndex=function(e){if(this.validatedIndex(e),!this.adapter.isSelectableItemAtIndex(e))throw new Error("MDCMenuFoundation: No selection group at specified index.");var t=this.adapter.getSelectedSiblingOfItemAtIndex(e);t>=0&&(this.adapter.removeAttributeFromElementAtIndex(t,tn.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(t,en.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(e,en.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(e,tn.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=e},o.prototype.setEnabled=function(e,t){this.validatedIndex(e),t?(this.adapter.removeClassFromElementAtIndex(e,So),this.adapter.addAttributeToElementAtIndex(e,tn.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(e,So),this.adapter.addAttributeToElementAtIndex(e,tn.ARIA_DISABLED_ATTR,"true"))},o.prototype.validatedIndex=function(e){var t=this.adapter.getMenuItemCount();if(!(e>=0&&e<t))throw new Error("MDCMenuFoundation: No list item at specified index.")},o}(Rt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class rn extends qt{constructor(){super(...arguments),this.mdcFoundationClass=nn,this.listElement_=null,this.anchor=null,this.open=!1,this.quick=!1,this.wrapFocus=!1,this.innerRole="menu",this.innerAriaLabel=null,this.corner="TOP_START",this.x=null,this.y=null,this.absolute=!1,this.multi=!1,this.activatable=!1,this.fixed=!1,this.forceGroupSelection=!1,this.fullwidth=!1,this.menuCorner="START",this.stayOpenOnBodyClick=!1,this.defaultFocus="LIST_ROOT",this._listUpdateComplete=null}get listElement(){return this.listElement_||(this.listElement_=this.renderRoot.querySelector("mwc-list")),this.listElement_}get items(){const e=this.listElement;return e?e.items:[]}get index(){const e=this.listElement;return e?e.index:-1}get selected(){const e=this.listElement;return e?e.selected:null}render(){const e="menu"===this.innerRole?"menuitem":"option";return z`
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
          ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerAriaLabel=${this.innerAriaLabel}
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-deprecated-list"
          .itemRoles=${e}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`}createAdapter(){return{addClassToElementAtIndex:(e,t)=>{const i=this.listElement;if(!i)return;const o=i.items[e];o&&("mdc-menu-item--selected"===t?this.forceGroupSelection&&!o.selected&&i.toggle(e,!0):o.classList.add(t))},removeClassFromElementAtIndex:(e,t)=>{const i=this.listElement;if(!i)return;const o=i.items[e];o&&("mdc-menu-item--selected"===t?o.selected&&i.toggle(e,!1):o.classList.remove(t))},addAttributeToElementAtIndex:(e,t,i)=>{const o=this.listElement;if(!o)return;const n=o.items[e];n&&n.setAttribute(t,i)},removeAttributeFromElementAtIndex:(e,t)=>{const i=this.listElement;if(!i)return;const o=i.items[e];o&&o.removeAttribute(t)},getAttributeFromElementAtIndex:(e,t)=>{const i=this.listElement;if(!i)return null;const o=i.items[e];return o?o.getAttribute(t):null},elementContainsClass:(e,t)=>e.classList.contains(t),closeSurface:()=>{this.open=!1},getElementIndex:e=>{const t=this.listElement;return t?t.items.indexOf(e):-1},notifySelected:()=>{},getMenuItemCount:()=>{const e=this.listElement;return e?e.items.length:0},focusItemAtIndex:e=>{const t=this.listElement;if(!t)return;const i=t.items[e];i&&i.focus()},focusListRoot:()=>{this.listElement&&this.listElement.focus()},getSelectedSiblingOfItemAtIndex:e=>{const t=this.listElement;if(!t)return-1;const i=t.items[e];if(!i||!i.group)return-1;for(let o=0;o<t.items.length;o++){if(o===e)continue;const n=t.items[o];if(n.selected&&n.group===i.group)return o}return-1},isSelectableItemAtIndex:e=>{const t=this.listElement;if(!t)return!1;const i=t.items[e];return!!i&&i.hasAttribute("group")}}}onKeydown(e){this.mdcFoundation&&this.mdcFoundation.handleKeydown(e)}onAction(e){const t=this.listElement;if(this.mdcFoundation&&t){const i=e.detail.index,o=t.items[i];o&&this.mdcFoundation.handleItemAction(o)}}onOpened(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}onClosed(){this.open=!1}async getUpdateComplete(){await this._listUpdateComplete;return await super.getUpdateComplete()}async firstUpdated(){super.firstUpdated();const e=this.listElement;e&&(this._listUpdateComplete=e.updateComplete,await this._listUpdateComplete)}select(e){const t=this.listElement;t&&t.select(e)}close(){this.open=!1}show(){this.open=!0}getFocusedItemIndex(){const e=this.listElement;return e?e.getFocusedItemIndex():-1}focusItemAtIndex(e){const t=this.listElement;t&&t.focusItemAtIndex(e)}layout(e=!0){const t=this.listElement;t&&t.layout(e)}}o([Te(".mdc-menu")],rn.prototype,"mdcRoot",void 0),o([Te("slot")],rn.prototype,"slotElement",void 0),o([we({type:Object})],rn.prototype,"anchor",void 0),o([we({type:Boolean,reflect:!0})],rn.prototype,"open",void 0),o([we({type:Boolean})],rn.prototype,"quick",void 0),o([we({type:Boolean})],rn.prototype,"wrapFocus",void 0),o([we({type:String})],rn.prototype,"innerRole",void 0),o([we({type:String})],rn.prototype,"innerAriaLabel",void 0),o([we({type:String})],rn.prototype,"corner",void 0),o([we({type:Number})],rn.prototype,"x",void 0),o([we({type:Number})],rn.prototype,"y",void 0),o([we({type:Boolean})],rn.prototype,"absolute",void 0),o([we({type:Boolean})],rn.prototype,"multi",void 0),o([we({type:Boolean})],rn.prototype,"activatable",void 0),o([we({type:Boolean})],rn.prototype,"fixed",void 0),o([we({type:Boolean})],rn.prototype,"forceGroupSelection",void 0),o([we({type:Boolean})],rn.prototype,"fullwidth",void 0),o([we({type:String})],rn.prototype,"menuCorner",void 0),o([we({type:Boolean})],rn.prototype,"stayOpenOnBodyClick",void 0),o([we({type:String}),Vt((function(e){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(Zo[e])}))],rn.prototype,"defaultFocus",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const an=ae`mwc-list ::slotted([mwc-list-item]:not([twoline])),mwc-list ::slotted([noninteractive]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let sn=class extends rn{};sn.styles=[an],sn=o([_e("mwc-menu")],sn);
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
var ln={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},cn={NOTCH_ELEMENT_PADDING:8},dn={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},pn=function(e){function o(t){return e.call(this,i(i({},o.defaultAdapter),t))||this}return t(o,e),Object.defineProperty(o,"strings",{get:function(){return ln},enumerable:!1,configurable:!0}),Object.defineProperty(o,"cssClasses",{get:function(){return dn},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return cn},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),o.prototype.notch=function(e){var t=o.cssClasses.OUTLINE_NOTCHED;e>0&&(e+=cn.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(e),this.adapter.addClass(t)},o.prototype.closeNotch=function(){var e=o.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(e),this.adapter.removeNotchWidthProperty()},o}(Rt);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class hn extends qt{constructor(){super(...arguments),this.mdcFoundationClass=pn,this.width=0,this.open=!1,this.lastOpen=this.open}createAdapter(){return{addClass:e=>this.mdcRoot.classList.add(e),removeClass:e=>this.mdcRoot.classList.remove(e),setNotchWidthProperty:e=>this.notchElement.style.setProperty("width",`${e}px`),removeNotchWidthProperty:()=>this.notchElement.style.removeProperty("width")}}openOrClose(e,t){this.mdcFoundation&&(e&&void 0!==t?this.mdcFoundation.notch(t):this.mdcFoundation.closeNotch())}render(){this.openOrClose(this.open,this.width);const e=Wt({"mdc-notched-outline--notched":this.open});return z`
      <span class="mdc-notched-outline ${e}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`}}o([Te(".mdc-notched-outline")],hn.prototype,"mdcRoot",void 0),o([we({type:Number})],hn.prototype,"width",void 0),o([we({type:Boolean,reflect:!0})],hn.prototype,"open",void 0),o([Te(".mdc-notched-outline__notch")],hn.prototype,"notchElement",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const un=ae`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let mn=class extends hn{};mn.styles=[un],mn=o([_e("mwc-notched-outline")],mn);
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
var gn,fn,bn=["input","button","textarea","select"],yn=function(e){var t=e.target;if(t){var i=(""+t.tagName).toLowerCase();-1===bn.indexOf(i)&&e.preventDefault()}};function vn(e,t){for(var i=new Map,o=0;o<e;o++){var n=t(o).trim();if(n){var r=n[0].toLowerCase();i.has(r)||i.set(r,[]),i.get(r).push({text:n.toLowerCase(),index:o})}}return i.forEach((function(e){e.sort((function(e,t){return e.index-t.index}))})),i}function _n(e,t){var i,o=e.nextChar,n=e.focusItemAtIndex,r=e.sortedIndexByFirstChar,a=e.focusedItemIndex,s=e.skipFocus,l=e.isItemAtIndexDisabled;return clearTimeout(t.bufferClearTimeout),t.bufferClearTimeout=setTimeout((function(){!function(e){e.typeaheadBuffer=""}(t)}),$o.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),t.typeaheadBuffer=t.typeaheadBuffer+o,-1===(i=1===t.typeaheadBuffer.length?function(e,t,i,o){var n=o.typeaheadBuffer[0],r=e.get(n);if(!r)return-1;if(n===o.currentFirstChar&&r[o.sortedIndexCursor].index===t){o.sortedIndexCursor=(o.sortedIndexCursor+1)%r.length;var a=r[o.sortedIndexCursor].index;if(!i(a))return a}o.currentFirstChar=n;var s,l=-1;for(s=0;s<r.length;s++)if(!i(r[s].index)){l=s;break}for(;s<r.length;s++)if(r[s].index>t&&!i(r[s].index)){l=s;break}if(-1!==l)return o.sortedIndexCursor=l,r[o.sortedIndexCursor].index;return-1}(r,a,l,t):function(e,t,i){var o=i.typeaheadBuffer[0],n=e.get(o);if(!n)return-1;var r=n[i.sortedIndexCursor];if(0===r.text.lastIndexOf(i.typeaheadBuffer,0)&&!t(r.index))return r.index;var a=(i.sortedIndexCursor+1)%n.length,s=-1;for(;a!==i.sortedIndexCursor;){var l=n[a],c=0===l.text.lastIndexOf(i.typeaheadBuffer,0),d=!t(l.index);if(c&&d){s=a;break}a=(a+1)%n.length}if(-1!==s)return i.sortedIndexCursor=s,n[i.sortedIndexCursor].index;return-1}(r,l,t))||s||n(i),i}function xn(e){return e.typeaheadBuffer.length>0}const wn=null!==(fn=null===(gn=window.ShadyDOM)||void 0===gn?void 0:gn.inUse)&&void 0!==fn&&fn;class kn extends qt{constructor(){super(...arguments),this.disabled=!1,this.containingForm=null,this.formDataListener=e=>{this.disabled||this.setFormData(e.formData)}}findFormElement(){if(!this.shadowRoot||wn)return null;const e=this.getRootNode().querySelectorAll("form");for(const t of Array.from(e))if(t.contains(this))return t;return null}connectedCallback(){var e;super.connectedCallback(),this.containingForm=this.findFormElement(),null===(e=this.containingForm)||void 0===e||e.addEventListener("formdata",this.formDataListener)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.containingForm)||void 0===e||e.removeEventListener("formdata",this.formDataListener),this.containingForm=null}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}}kn.shadowRootOptions={mode:"open",delegatesFocus:!0},o([we({type:Boolean})],kn.prototype,"disabled",void 0);
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
var Sn={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},En=function(e){function o(t){var n=e.call(this,i(i({},o.defaultAdapter),t))||this;return n.shakeAnimationEndHandler=function(){n.handleShakeAnimationEnd()},n}return t(o,e),Object.defineProperty(o,"cssClasses",{get:function(){return Sn},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),o.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},o.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},o.prototype.getWidth=function(){return this.adapter.getWidth()},o.prototype.shake=function(e){var t=o.cssClasses.LABEL_SHAKE;e?this.adapter.addClass(t):this.adapter.removeClass(t)},o.prototype.float=function(e){var t=o.cssClasses,i=t.LABEL_FLOAT_ABOVE,n=t.LABEL_SHAKE;e?this.adapter.addClass(i):(this.adapter.removeClass(i),this.adapter.removeClass(n))},o.prototype.setRequired=function(e){var t=o.cssClasses.LABEL_REQUIRED;e?this.adapter.addClass(t):this.adapter.removeClass(t)},o.prototype.handleShakeAnimationEnd=function(){var e=o.cssClasses.LABEL_SHAKE;this.adapter.removeClass(e)},o}(Rt);
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
 */const Tn=He(class extends qe{constructor(e){switch(super(e),this.foundation=null,this.previousPart=null,e.type){case Be:case Ue:break;default:throw new Error("FloatingLabel directive only support attribute and property parts")}}update(e,[t]){if(e!==this.previousPart){this.foundation&&this.foundation.destroy(),this.previousPart=e;const t=e.element;t.classList.add("mdc-floating-label");const i=(e=>({addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),getWidth:()=>e.scrollWidth,registerInteractionHandler:(t,i)=>{e.addEventListener(t,i)},deregisterInteractionHandler:(t,i)=>{e.removeEventListener(t,i)}}))(t);this.foundation=new En(i),this.foundation.init()}return this.render(t)}render(e){return this.foundation}});
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
 */var Cn={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},An=function(e){function o(t){var n=e.call(this,i(i({},o.defaultAdapter),t))||this;return n.transitionEndHandler=function(e){n.handleTransitionEnd(e)},n}return t(o,e),Object.defineProperty(o,"cssClasses",{get:function(){return Cn},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),o.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},o.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},o.prototype.activate=function(){this.adapter.removeClass(Cn.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(Cn.LINE_RIPPLE_ACTIVE)},o.prototype.setRippleCenter=function(e){this.adapter.setStyle("transform-origin",e+"px center")},o.prototype.deactivate=function(){this.adapter.addClass(Cn.LINE_RIPPLE_DEACTIVATING)},o.prototype.handleTransitionEnd=function(e){var t=this.adapter.hasClass(Cn.LINE_RIPPLE_DEACTIVATING);"opacity"===e.propertyName&&t&&(this.adapter.removeClass(Cn.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(Cn.LINE_RIPPLE_DEACTIVATING))},o}(Rt);
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
 */const In=He(class extends qe{constructor(e){switch(super(e),this.previousPart=null,this.foundation=null,e.type){case Be:case Ue:return;default:throw new Error("LineRipple only support attribute and property parts.")}}update(e,t){if(this.previousPart!==e){this.foundation&&this.foundation.destroy(),this.previousPart=e;const t=e.element;t.classList.add("mdc-line-ripple");const i=(e=>({addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),hasClass:t=>e.classList.contains(t),setStyle:(t,i)=>e.style.setProperty(t,i),registerEventHandler:(t,i)=>{e.addEventListener(t,i)},deregisterEventHandler:(t,i)=>{e.removeEventListener(t,i)}}))(t);this.foundation=new An(i),this.foundation.init()}return this.render()}render(){return this.foundation}});
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
 */var On={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},$n={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},Rn={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330},Pn=function(e){function o(t,n){void 0===n&&(n={});var r=e.call(this,i(i({},o.defaultAdapter),t))||this;return r.disabled=!1,r.isMenuOpen=!1,r.useDefaultValidation=!0,r.customValidity=!0,r.lastSelectedIndex=Rn.UNSET_INDEX,r.clickDebounceTimeout=0,r.recentlyClicked=!1,r.leadingIcon=n.leadingIcon,r.helperText=n.helperText,r}return t(o,e),Object.defineProperty(o,"cssClasses",{get:function(){return On},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return Rn},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return $n},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),o.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},o.prototype.setSelectedIndex=function(e,t,i){void 0===t&&(t=!1),void 0===i&&(i=!1),e>=this.adapter.getMenuItemCount()||(e===Rn.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(e).trim()),this.adapter.setSelectedIndex(e),t&&this.adapter.closeMenu(),i||this.lastSelectedIndex===e||this.handleChange(),this.lastSelectedIndex=e)},o.prototype.setValue=function(e,t){void 0===t&&(t=!1);var i=this.adapter.getMenuItemValues().indexOf(e);this.setSelectedIndex(i,!1,t)},o.prototype.getValue=function(){var e=this.adapter.getSelectedIndex(),t=this.adapter.getMenuItemValues();return e!==Rn.UNSET_INDEX?t[e]:""},o.prototype.getDisabled=function(){return this.disabled},o.prototype.setDisabled=function(e){this.disabled=e,this.disabled?(this.adapter.addClass(On.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(On.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},o.prototype.openMenu=function(){this.adapter.addClass(On.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},o.prototype.setHelperTextContent=function(e){this.helperText&&this.helperText.setContent(e)},o.prototype.layout=function(){if(this.adapter.hasLabel()){var e=this.getValue().length>0,t=this.adapter.hasClass(On.FOCUSED),i=e||t,o=this.adapter.hasClass(On.REQUIRED);this.notchOutline(i),this.adapter.floatLabel(i),this.adapter.setLabelRequired(o)}},o.prototype.layoutOptions=function(){var e=this.adapter.getMenuItemValues().indexOf(this.getValue());this.setSelectedIndex(e,!1,!0)},o.prototype.handleMenuOpened=function(){if(0!==this.adapter.getMenuItemValues().length){var e=this.getSelectedIndex(),t=e>=0?e:0;this.adapter.focusMenuItemAtIndex(t)}},o.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},o.prototype.handleMenuClosed=function(){this.adapter.removeClass(On.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},o.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue()),this.adapter.hasClass(On.REQUIRED)&&this.useDefaultValidation&&this.setValid(this.isValid())},o.prototype.handleMenuItemAction=function(e){this.setSelectedIndex(e,!0)},o.prototype.handleFocus=function(){this.adapter.addClass(On.FOCUSED),this.layout(),this.adapter.activateBottomLine()},o.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},o.prototype.handleClick=function(e){this.disabled||this.recentlyClicked||(this.setClickDebounceTimeout(),this.isMenuOpen?this.adapter.closeMenu():(this.adapter.setRippleCenter(e),this.openMenu()))},o.prototype.handleKeydown=function(e){if(!this.isMenuOpen&&this.adapter.hasClass(On.FOCUSED)){var t=xo(e)===ji,i=xo(e)===Hi,o=xo(e)===Ki,n=xo(e)===Qi;if(!(e.ctrlKey||e.metaKey)&&(!i&&e.key&&1===e.key.length||i&&this.adapter.isTypeaheadInProgress())){var r=i?" ":e.key,a=this.adapter.typeaheadMatchItem(r,this.getSelectedIndex());return a>=0&&this.setSelectedIndex(a),void e.preventDefault()}(t||i||o||n)&&(o&&this.getSelectedIndex()>0?this.setSelectedIndex(this.getSelectedIndex()-1):n&&this.getSelectedIndex()<this.adapter.getMenuItemCount()-1&&this.setSelectedIndex(this.getSelectedIndex()+1),this.openMenu(),e.preventDefault())}},o.prototype.notchOutline=function(e){if(this.adapter.hasOutline()){var t=this.adapter.hasClass(On.FOCUSED);if(e){var i=Rn.LABEL_SCALE,o=this.adapter.getLabelWidth()*i;this.adapter.notchOutline(o)}else t||this.adapter.closeOutline()}},o.prototype.setLeadingIconAriaLabel=function(e){this.leadingIcon&&this.leadingIcon.setAriaLabel(e)},o.prototype.setLeadingIconContent=function(e){this.leadingIcon&&this.leadingIcon.setContent(e)},o.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},o.prototype.setUseDefaultValidation=function(e){this.useDefaultValidation=e},o.prototype.setValid=function(e){this.useDefaultValidation||(this.customValidity=e),this.adapter.setSelectAnchorAttr("aria-invalid",(!e).toString()),e?(this.adapter.removeClass(On.INVALID),this.adapter.removeMenuClass(On.MENU_INVALID)):(this.adapter.addClass(On.INVALID),this.adapter.addMenuClass(On.MENU_INVALID)),this.syncHelperTextValidity(e)},o.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(On.REQUIRED)&&!this.adapter.hasClass(On.DISABLED)?this.getSelectedIndex()!==Rn.UNSET_INDEX&&(0!==this.getSelectedIndex()||Boolean(this.getValue())):this.customValidity},o.prototype.setRequired=function(e){e?this.adapter.addClass(On.REQUIRED):this.adapter.removeClass(On.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",e.toString()),this.adapter.setLabelRequired(e)},o.prototype.getRequired=function(){return"true"===this.adapter.getSelectAnchorAttr("aria-required")},o.prototype.init=function(){var e=this.adapter.getAnchorElement();e&&(this.adapter.setMenuAnchorElement(e),this.adapter.setMenuAnchorCorner(Ho.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(On.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(On.INVALID)),this.layout(),this.layoutOptions()},o.prototype.blur=function(){this.adapter.removeClass(On.FOCUSED),this.layout(),this.adapter.deactivateBottomLine(),this.adapter.hasClass(On.REQUIRED)&&this.useDefaultValidation&&this.setValid(this.isValid())},o.prototype.syncHelperTextValidity=function(e){if(this.helperText){this.helperText.setValidity(e);var t=this.helperText.isVisible(),i=this.helperText.getId();t&&i?this.adapter.setSelectAnchorAttr($n.ARIA_DESCRIBEDBY,i):this.adapter.removeSelectAnchorAttr($n.ARIA_DESCRIBEDBY)}},o.prototype.setClickDebounceTimeout=function(){var e=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout((function(){e.recentlyClicked=!1}),Rn.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},o}(Rt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ln=(e={})=>{const t={};for(const i in e)t[i]=e[i];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},t)};class Nn extends kn{constructor(){super(...arguments),this.mdcFoundationClass=Pn,this.disabled=!1,this.outlined=!1,this.label="",this.outlineOpen=!1,this.outlineWidth=0,this.value="",this.name="",this.selectedText="",this.icon="",this.menuOpen=!1,this.helper="",this.validateOnInitialRender=!1,this.validationMessage="",this.required=!1,this.naturalMenuWidth=!1,this.isUiValid=!0,this.fixedMenuPosition=!1,this.typeaheadState={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""},this.sortedIndexByFirstChar=new Map,this.menuElement_=null,this.listeners=[],this.onBodyClickBound=()=>{},this._menuUpdateComplete=null,this.valueSetDirectly=!1,this.validityTransform=null,this._validity=Ln()}get items(){return this.menuElement_||(this.menuElement_=this.menuElement),this.menuElement_?this.menuElement_.items:[]}get selected(){const e=this.menuElement;return e?e.selected:null}get index(){const e=this.menuElement;return e?e.index:-1}get shouldRenderHelperText(){return!!this.helper||!!this.validationMessage}get validity(){return this._checkValidity(this.value),this._validity}render(){const e={"mdc-select--disabled":this.disabled,"mdc-select--no-label":!this.label,"mdc-select--filled":!this.outlined,"mdc-select--outlined":this.outlined,"mdc-select--with-leading-icon":!!this.icon,"mdc-select--required":this.required,"mdc-select--invalid":!this.isUiValid},t={"mdc-select__menu--invalid":!this.isUiValid},i=this.label?"label":void 0,o=this.shouldRenderHelperText?"helper-text":void 0;return z`
      <div
          class="mdc-select ${Wt(e)}">
        <input
            class="formElement"
            name="${this.name}"
            .value="${this.value}"
            hidden
            ?disabled="${this.disabled}"
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby=${Ai(i)}
            aria-required=${this.required}
            aria-describedby=${Ai(o)}
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
            class="mdc-select__menu mdc-menu mdc-menu-surface ${Wt(t)}"
            activatable
            .fullwidth=${!this.fixedMenuPosition&&!this.naturalMenuWidth}
            .open=${this.menuOpen}
            .anchor=${this.anchorElement}
            .fixed=${this.fixedMenuPosition}
            @selected=${this.onSelected}
            @opened=${this.onOpened}
            @closed=${this.onClosed}
            @items-updated=${this.onItemsUpdated}
            @keydown=${this.handleTypeahead}>
          <slot></slot>
        </mwc-menu>
      </div>
      ${this.renderHelperText()}`}renderRipple(){return this.outlined?D:z`
      <span class="mdc-select__ripple"></span>
    `}renderOutline(){return this.outlined?z`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`:D}renderLabel(){return this.label?z`
      <span
          .floatingLabelFoundation=${Tn(this.label)}
          id="label">${this.label}</span>
    `:D}renderLeadingIcon(){return this.icon?z`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>`:D}renderLineRipple(){return this.outlined?D:z`
      <span .lineRippleFoundation=${In()}></span>
    `}renderHelperText(){if(!this.shouldRenderHelperText)return D;const e=this.validationMessage&&!this.isUiValid;return z`
        <p
          class="mdc-select-helper-text ${Wt({"mdc-select-helper-text--validation-msg":e})}"
          id="helper-text">${e?this.validationMessage:this.helper}</p>`}createAdapter(){return Object.assign(Object.assign({},Ft(this.mdcRoot)),{activateBottomLine:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateBottomLine:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},hasLabel:()=>!!this.label,floatLabel:e=>{this.labelElement&&this.labelElement.floatingLabelFoundation.float(e)},getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,setLabelRequired:e=>{this.labelElement&&this.labelElement.floatingLabelFoundation.setRequired(e)},hasOutline:()=>this.outlined,notchOutline:e=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=e,this.outlineOpen=!0)},closeOutline:()=>{this.outlineElement&&(this.outlineOpen=!1)},setRippleCenter:e=>{if(this.lineRippleElement){this.lineRippleElement.lineRippleFoundation.setRippleCenter(e)}},notifyChange:async e=>{if(!this.valueSetDirectly&&e===this.value)return;this.valueSetDirectly=!1,this.value=e,await this.updateComplete;const t=new Event("change",{bubbles:!0});this.dispatchEvent(t)},setSelectedText:e=>this.selectedText=e,isSelectAnchorFocused:()=>{const e=this.anchorElement;if(!e)return!1;return e.getRootNode().activeElement===e},getSelectAnchorAttr:e=>{const t=this.anchorElement;return t?t.getAttribute(e):null},setSelectAnchorAttr:(e,t)=>{const i=this.anchorElement;i&&i.setAttribute(e,t)},removeSelectAnchorAttr:e=>{const t=this.anchorElement;t&&t.removeAttribute(e)},openMenu:()=>{this.menuOpen=!0},closeMenu:()=>{this.menuOpen=!1},addMenuClass:()=>{},removeMenuClass:()=>{},getAnchorElement:()=>this.anchorElement,setMenuAnchorElement:()=>{},setMenuAnchorCorner:()=>{const e=this.menuElement;e&&(e.corner="BOTTOM_START")},setMenuWrapFocus:e=>{const t=this.menuElement;t&&(t.wrapFocus=e)},focusMenuItemAtIndex:e=>{const t=this.menuElement;if(!t)return;const i=t.items[e];i&&i.focus()},getMenuItemCount:()=>{const e=this.menuElement;return e?e.items.length:0},getMenuItemValues:()=>{const e=this.menuElement;if(!e)return[];return e.items.map((e=>e.value))},getMenuItemTextAtIndex:e=>{const t=this.menuElement;if(!t)return"";const i=t.items[e];return i?i.text:""},getSelectedIndex:()=>this.index,setSelectedIndex:()=>{},isTypeaheadInProgress:()=>xn(this.typeaheadState),typeaheadMatchItem:(e,t)=>{if(!this.menuElement)return-1;const i=_n({focusItemAtIndex:e=>{this.menuElement.focusItemAtIndex(e)},focusedItemIndex:t||this.menuElement.getFocusedItemIndex(),nextChar:e,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:!1,isItemAtIndexDisabled:e=>this.items[e].disabled},this.typeaheadState);return-1!==i&&this.select(i),i}})}checkValidity(){const e=this._checkValidity(this.value);if(!e){const e=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(e)}return e}reportValidity(){const e=this.checkValidity();return this.isUiValid=e,e}_checkValidity(e){const t=this.formElement.validity;let i=Ln(t);if(this.validityTransform){const t=this.validityTransform(e,i);i=Object.assign(Object.assign({},i),t)}return this._validity=i,this._validity.valid}setCustomValidity(e){this.validationMessage=e,this.formElement.setCustomValidity(e)}async getUpdateComplete(){await this._menuUpdateComplete;return await super.getUpdateComplete()}async firstUpdated(){const e=this.menuElement;if(e&&(this._menuUpdateComplete=e.updateComplete,await this._menuUpdateComplete),super.firstUpdated(),this.mdcFoundation.isValid=()=>!0,this.mdcFoundation.setValid=()=>{},this.mdcFoundation.setDisabled(this.disabled),this.validateOnInitialRender&&this.reportValidity(),!this.selected){!this.items.length&&this.slotElement&&this.slotElement.assignedNodes({flatten:!0}).length&&(await new Promise((e=>requestAnimationFrame(e))),await this.layout());const e=this.items.length&&""===this.items[0].value;if(!this.value&&e)return void this.select(0);this.selectByValue(this.value)}this.sortedIndexByFirstChar=vn(this.items.length,(e=>this.items[e].text))}onItemsUpdated(){this.sortedIndexByFirstChar=vn(this.items.length,(e=>this.items[e].text))}select(e){const t=this.menuElement;t&&t.select(e)}selectByValue(e){let t=-1;for(let i=0;i<this.items.length;i++){if(this.items[i].value===e){t=i;break}}this.valueSetDirectly=!0,this.select(t),this.mdcFoundation.handleChange()}disconnectedCallback(){super.disconnectedCallback();for(const e of this.listeners)e.target.removeEventListener(e.name,e.cb)}focus(){const e=new CustomEvent("focus"),t=this.anchorElement;t&&(t.dispatchEvent(e),t.focus())}blur(){const e=new CustomEvent("blur"),t=this.anchorElement;t&&(t.dispatchEvent(e),t.blur())}onFocus(){this.mdcFoundation&&this.mdcFoundation.handleFocus()}onBlur(){this.mdcFoundation&&this.mdcFoundation.handleBlur();const e=this.menuElement;e&&!e.open&&this.reportValidity()}onClick(e){if(this.mdcFoundation){this.focus();const t=e.target.getBoundingClientRect();let i=0;i="touches"in e?e.touches[0].clientX:e.clientX;const o=i-t.left;this.mdcFoundation.handleClick(o)}}onKeydown(e){const t=xo(e)===Ki,i=xo(e)===Qi;if(i||t){const o=t&&this.index>0,n=i&&this.index<this.items.length-1;return o?this.select(this.index-1):n&&this.select(this.index+1),e.preventDefault(),void this.mdcFoundation.openMenu()}this.mdcFoundation.handleKeydown(e)}handleTypeahead(e){if(!this.menuElement)return;const t=this.menuElement.getFocusedItemIndex(),i=Mt(e.target)?e.target:null;!function(e,t){var i=e.event,o=e.isTargetListItem,n=e.focusedItemIndex,r=e.focusItemAtIndex,a=e.sortedIndexByFirstChar,s=e.isItemAtIndexDisabled,l="ArrowLeft"===xo(i),c="ArrowUp"===xo(i),d="ArrowRight"===xo(i),p="ArrowDown"===xo(i),h="Home"===xo(i),u="End"===xo(i),m="Enter"===xo(i),g="Spacebar"===xo(i);i.ctrlKey||i.metaKey||l||c||d||p||h||u||m||(g||1!==i.key.length?g&&(o&&yn(i),o&&xn(t)&&_n({focusItemAtIndex:r,focusedItemIndex:n,nextChar:" ",sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:s},t)):(yn(i),_n({focusItemAtIndex:r,focusedItemIndex:n,nextChar:i.key.toLowerCase(),sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:s},t)))}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */({event:e,focusItemAtIndex:e=>{this.menuElement.focusItemAtIndex(e)},focusedItemIndex:t,isTargetListItem:!!i&&i.hasAttribute("mwc-list-item"),sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:e=>this.items[e].disabled},this.typeaheadState)}async onSelected(e){this.mdcFoundation||await this.updateComplete,this.mdcFoundation.handleMenuItemAction(e.detail.index);const t=this.items[e.detail.index];t&&(this.value=t.value)}onOpened(){this.mdcFoundation&&(this.menuOpen=!0,this.mdcFoundation.handleMenuOpened())}onClosed(){this.mdcFoundation&&(this.menuOpen=!1,this.mdcFoundation.handleMenuClosed())}setFormData(e){this.name&&null!==this.selected&&e.append(this.name,this.value)}async layout(e=!0){this.mdcFoundation&&this.mdcFoundation.layout(),await this.updateComplete;const t=this.menuElement;t&&t.layout(e);const i=this.labelElement;if(!i)return void(this.outlineOpen=!1);const o=!!this.label&&!!this.value;if(i.floatingLabelFoundation.float(o),!this.outlined)return;this.outlineOpen=o,await this.updateComplete;const n=i.floatingLabelFoundation.getWidth();this.outlineOpen&&(this.outlineWidth=n)}async layoutOptions(){this.mdcFoundation&&this.mdcFoundation.layoutOptions()}}o([Te(".mdc-select")],Nn.prototype,"mdcRoot",void 0),o([Te(".formElement")],Nn.prototype,"formElement",void 0),o([Te("slot")],Nn.prototype,"slotElement",void 0),o([Te("select")],Nn.prototype,"nativeSelectElement",void 0),o([Te("input")],Nn.prototype,"nativeInputElement",void 0),o([Te(".mdc-line-ripple")],Nn.prototype,"lineRippleElement",void 0),o([Te(".mdc-floating-label")],Nn.prototype,"labelElement",void 0),o([Te("mwc-notched-outline")],Nn.prototype,"outlineElement",void 0),o([Te(".mdc-menu")],Nn.prototype,"menuElement",void 0),o([Te(".mdc-select__anchor")],Nn.prototype,"anchorElement",void 0),o([we({type:Boolean,attribute:"disabled",reflect:!0}),Vt((function(e){this.mdcFoundation&&this.mdcFoundation.setDisabled(e)}))],Nn.prototype,"disabled",void 0),o([we({type:Boolean}),Vt((function(e,t){void 0!==t&&this.outlined!==t&&this.layout(!1)}))],Nn.prototype,"outlined",void 0),o([we({type:String}),Vt((function(e,t){void 0!==t&&this.label!==t&&this.layout(!1)}))],Nn.prototype,"label",void 0),o([ke()],Nn.prototype,"outlineOpen",void 0),o([ke()],Nn.prototype,"outlineWidth",void 0),o([we({type:String}),Vt((function(e){if(this.mdcFoundation){const t=null===this.selected&&!!e,i=this.selected&&this.selected.value!==e;(t||i)&&this.selectByValue(e),this.reportValidity()}}))],Nn.prototype,"value",void 0),o([we()],Nn.prototype,"name",void 0),o([ke()],Nn.prototype,"selectedText",void 0),o([we({type:String})],Nn.prototype,"icon",void 0),o([ke()],Nn.prototype,"menuOpen",void 0),o([we({type:String})],Nn.prototype,"helper",void 0),o([we({type:Boolean})],Nn.prototype,"validateOnInitialRender",void 0),o([we({type:String})],Nn.prototype,"validationMessage",void 0),o([we({type:Boolean})],Nn.prototype,"required",void 0),o([we({type:Boolean})],Nn.prototype,"naturalMenuWidth",void 0),o([ke()],Nn.prototype,"isUiValid",void 0),o([we({type:Boolean})],Nn.prototype,"fixedMenuPosition",void 0),o([Ee({capture:!0})],Nn.prototype,"handleTypeahead",null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Mn=ae`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl],.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list-item__start{display:inline-flex;align-items:center}.mdc-select__option{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select__option,.mdc-select__option[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select__one-line-option.mdc-list-item--with-one-line{height:48px}.mdc-select__two-line-option.mdc-list-item--with-two-lines{height:64px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__start{margin-top:20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-select__option-with-leading-content{padding-left:0;padding-right:12px}.mdc-select__option-with-leading-content.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-select__option-with-leading-content.mdc-list-item,.mdc-select__option-with-leading-content.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-select__option-with-leading-content .mdc-list-item__start{margin-left:12px;margin-right:0}[dir=rtl] .mdc-select__option-with-leading-content .mdc-list-item__start,.mdc-select__option-with-leading-content .mdc-list-item__start[dir=rtl]{margin-left:0;margin-right:12px}.mdc-select__option-with-leading-content .mdc-list-item__start{width:36px;height:24px}[dir=rtl] .mdc-select__option-with-leading-content,.mdc-select__option-with-leading-content[dir=rtl]{padding-left:12px;padding-right:0}.mdc-select__option-with-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-select__option-with-meta.mdc-list-item,.mdc-select__option-with-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-select__option-with-meta .mdc-list-item__end{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select__option-with-meta .mdc-list-item__end,.mdc-select__option-with-meta .mdc-list-item__end[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Fn=class extends Nn{};Fn.styles=[Mn],Fn=o([_e("mwc-select")],Fn);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class zn extends ye{constructor(){super(...arguments),this.indeterminate=!1,this.progress=0,this.density=0,this.closed=!1}open(){this.closed=!1}close(){this.closed=!0}render(){const e={"mdc-circular-progress--closed":this.closed,"mdc-circular-progress--indeterminate":this.indeterminate},t=48+4*this.density,i={width:`${t}px`,height:`${t}px`};return z`
      <div
        class="mdc-circular-progress ${Wt(e)}"
        style="${wi(i)}"
        role="progressbar"
        aria-label="${Ai(this.ariaLabel)}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="${Ai(this.indeterminate?void 0:this.progress)}">
        ${this.renderDeterminateContainer()}
        ${this.renderIndeterminateContainer()}
      </div>`}renderDeterminateContainer(){const e=48+4*this.density,t=e/2,i=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,o=6.2831852*i,n=(1-this.progress)*o,r=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return z`
      <div class="mdc-circular-progress__determinate-container">
        <svg class="mdc-circular-progress__determinate-circle-graphic"
             viewBox="0 0 ${e} ${e}">
          <circle class="mdc-circular-progress__determinate-track"
                  cx="${t}" cy="${t}" r="${i}"
                  stroke-width="${r}"></circle>
          <circle class="mdc-circular-progress__determinate-circle"
                  cx="${t}" cy="${t}" r="${i}"
                  stroke-dasharray="${6.2831852*i}"
                  stroke-dashoffset="${n}"
                  stroke-width="${r}"></circle>
        </svg>
      </div>`}renderIndeterminateContainer(){return z`
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
      </div>`}renderIndeterminateSpinnerLayer(){const e=48+4*this.density,t=e/2,i=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,o=6.2831852*i,n=.5*o,r=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return z`
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${i}"
                    stroke-dasharray="${o}"
                    stroke-dashoffset="${n}"
                    stroke-width="${r}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__gap-patch">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${i}"
                    stroke-dasharray="${o}"
                    stroke-dashoffset="${n}"
                    stroke-width="${.8*r}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${i}"
                    stroke-dasharray="${o}"
                    stroke-dashoffset="${n}"
                    stroke-width="${r}"></circle>
          </svg>
        </div>`}update(e){super.update(e),e.has("progress")&&(this.progress>1&&(this.progress=1),this.progress<0&&(this.progress=0))}}o([we({type:Boolean,reflect:!0})],zn.prototype,"indeterminate",void 0),o([we({type:Number,reflect:!0})],zn.prototype,"progress",void 0),o([we({type:Number,reflect:!0})],zn.prototype,"density",void 0),o([we({type:Boolean,reflect:!0})],zn.prototype,"closed",void 0),o([Ti,we({type:String,attribute:"aria-label"})],zn.prototype,"ariaLabel",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Bn=ae`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Dn=class extends zn{};function Un(e,t,i,o){void 0===o&&(o=!1);for(var n,r,a=0,s="",l=t;r=l.exec(e);)n=e.substring(a,r.index),a=l.lastIndex,s+=n,s+=i&&"function"==typeof i?i(e,r):i;return s+=e.substring(a),l.test(s)&&!0===o?Un(s,new RegExp(l),i,!0):s}function jn(e){var t=new RegExp("^\\s*\\[(\\[)?(.*?)\\]\\]?(?= *$)((?:[\\w\\W](?!^\\s*\\[))*)","gm"),i={};return Un(e=(e="["===e[0]?e:"[]\n"+e).replace(/('{3,}(?:(?!'{3,})[\w\W]+?)'{3,})/gm,(function(e,t){if(t)return t.replace(/^(\s*)(\[)/gm,"$1__>>[<<__")})),t,(function(e,t){t[1]?qn(i,t[2].trim(),Hn(t[3]),!0):""===t[2]?i=Object.assign({},i,Hn(t[3])):qn(i,t[2].trim(),Hn(t[3]),!1)})),JSON.parse(JSON.stringify(i,Vn),Wn)}function Hn(e){var t=new RegExp("^[ \t]*(.+?) *[=:] *(?:\"((?!\")[\\w\\W]+?)\"|'{3,}((?!'{3,})[\\w\\W]+?)'{3,}|(\\[[\\w\\W]+?(?:(?: *])+ *$\\n*)+)|(\\{[\\w\\W]+?(?:(?: *})+ *$\\n*)+)|(.+) *)|^(.+)$","gm"),i={};return Un(e,t,(function(e,t){var o,n;if(t[1]){if("#"===t[1].charAt(0))return;return o='"'===t[1].charAt(0)&&'"'===t[1].charAt(t[1].length-1)?t[1].slice(1,-1):t[1],(t[2]||t[3])&&(n=t[2]||t[3].replace(/^(\s*)(__>>\[<<__)/gm,"$1[")),(t[4]||t[5])&&(n=JSON.parse(""+(t[4]||t[5]))),t[6]&&(t[6]=t[6].trim(),n=+t[6]==+t[6]?Number(t[6]):"true"===t[6]||"false"===t[6]?"true"===t[6]:"inf"===t[6]||"+inf"===t[6]?1/0:"-inf"===t[6]?-1/0:parseInt(t[6],16).toString(16)===t[6].toLowerCase()?parseInt(t[6],16):parseInt(t[6],8).toString(8)===t[6].toLowerCase()?parseInt(t[6],8):parseInt(t[6],2).toString(2)===t[6].toLowerCase()?parseInt(t[6],2):t[6]),i[o]=n,""}if(t[7])return""})),i}function qn(e,t,i,o){o=!!o,t.split&&(t=t.split("."));for(var n,r=0,a=t.length,s=e;r<a;++r)t[r]=t[r].trim(),t[r]='"'===t[r].substr(0,1)&&'"'===t[r].substr(-1)?t[r].slice(1,-1):t[r],s instanceof Array?(n=s[s.length-1],r--):n=s[t[r]],r===a-1?n instanceof Array?s[t[r]].push(i):s[t[r]]=o?[i]:i:s=n instanceof Array?n:s[t[r]]=null==n?{}:n}Dn.styles=[Bn],Dn=o([_e("mwc-circular-progress")],Dn);var Vn=function(e,t){return t!=t?"__>>NaN<<__":t===1/0?"__>>Inf<<__":t===-1/0?"__>>-Inf<<__":t},Wn=function(e,t){return"__>>NaN<<__"===t?NaN:"__>>Inf<<__"===t?1/0:"__>>-Inf<<__"===t?-1/0:t};function Gn(e,t){e.tabIndex=t?-1:e.tabIndex<0?0:e.tabIndex}
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
 */const Xn="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Kn=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},Yn=`{{lit-${String(Math.random()).slice(2)}}}`,Qn=`\x3c!--${Yn}--\x3e`,Jn=new RegExp(`${Yn}|${Qn}`);class Zn{constructor(e,t){this.parts=[],this.element=t;const i=[],o=[],n=document.createTreeWalker(t.content,133,null,!1);let r=0,a=-1,s=0;const{strings:l,values:{length:c}}=e;for(;s<c;){const e=n.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let o=0;for(let e=0;e<i;e++)er(t[e].name,"$lit$")&&o++;for(;o-- >0;){const t=l[s],i=or.exec(t)[2],o=i.toLowerCase()+"$lit$",n=e.getAttribute(o);e.removeAttribute(o);const r=n.split(Jn);this.parts.push({type:"attribute",index:a,name:i,strings:r}),s+=r.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(Yn)>=0){const o=e.parentNode,n=t.split(Jn),r=n.length-1;for(let t=0;t<r;t++){let i,r=n[t];if(""===r)i=ir();else{const e=or.exec(r);null!==e&&er(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(r)}o.insertBefore(i,e),this.parts.push({type:"node",index:++a})}""===n[r]?(o.insertBefore(ir(),e),i.push(e)):e.data=n[r],s+=r}}else if(8===e.nodeType)if(e.data===Yn){const t=e.parentNode;null!==e.previousSibling&&a!==r||(a++,t.insertBefore(ir(),e)),r=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(i.push(e),a--),s++}else{let t=-1;for(;-1!==(t=e.data.indexOf(Yn,t+1));)this.parts.push({type:"node",index:-1}),s++}}else n.currentNode=o.pop()}for(const e of i)e.parentNode.removeChild(e)}}const er=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},tr=e=>-1!==e.index,ir=()=>document.createComment(""),or=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function nr(e,t){const{element:{content:i},parts:o}=e,n=document.createTreeWalker(i,133,null,!1);let r=ar(o),a=o[r],s=-1,l=0;const c=[];let d=null;for(;n.nextNode();){s++;const e=n.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==a&&a.index===s;)a.index=null!==d?-1:a.index-l,r=ar(o,r),a=o[r]}c.forEach((e=>e.parentNode.removeChild(e)))}const rr=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},ar=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(tr(t))return i}return-1};
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
const sr=new WeakMap,lr=e=>"function"==typeof e&&sr.has(e),cr={},dr={};
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
class pr{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=Xn?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let n,r=0,a=0,s=o.nextNode();for(;r<i.length;)if(n=i[r],tr(n)){for(;a<n.index;)a++,"TEMPLATE"===s.nodeName&&(t.push(s),o.currentNode=s.content),null===(s=o.nextNode())&&(o.currentNode=t.pop(),s=o.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(s,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return Xn&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const hr=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),ur=` ${Yn} `;class mr{constructor(e,t,i,o){this.strings=e,this.values=t,this.type=i,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let o=0;o<e;o++){const e=this.strings[o],n=e.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===e.indexOf("--\x3e",n+1);const r=or.exec(e);t+=null===r?e+(i?ur:Qn):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+Yn}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==hr&&(t=hr.createHTML(t)),e.innerHTML=t,e}}class gr extends mr{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,i=t.firstChild;return t.removeChild(i),((e,t,i=null,o=null)=>{for(;t!==i;){const i=t.nextSibling;e.insertBefore(t,o),t=i}})(t,i.firstChild),e}}
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
 */const fr=e=>null===e||!("object"==typeof e||"function"==typeof e),br=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class yr{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new vr(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!br(e))return e}let o="";for(let n=0;n<t;n++){o+=e[n];const t=i[n];if(void 0!==t){const e=t.value;if(fr(e)||!br(e))o+="string"==typeof e?e:String(e);else for(const t of e)o+="string"==typeof t?t:String(t)}}return o+=e[t],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class vr{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===cr||fr(e)&&e===this.value||(this.value=e,lr(e)||(this.committer.dirty=!0))}commit(){for(;lr(this.value);){const e=this.value;this.value=cr,e(this)}this.value!==cr&&this.committer.commit()}}class _r{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(ir()),this.endNode=e.appendChild(ir())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=ir()),e.__insert(this.endNode=ir())}insertAfterPart(e){e.__insert(this.startNode=ir()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;lr(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=cr,e(this)}const e=this.__pendingValue;e!==cr&&(fr(e)?e!==this.value&&this.__commitText(e):e instanceof mr?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):br(e)?this.__commitIterable(e):e===dr?(this.value=dr,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof pr&&this.value.template===t)this.value.update(e.values);else{const i=new pr(t,e.processor,this.options),o=i._clone();i.update(e.values),this.__commitNode(o),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,o=0;for(const n of e)i=t[o],void 0===i&&(i=new _r(this.options),t.push(i),0===o?i.appendIntoPart(this):i.insertAfterPart(t[o-1])),i.setValue(n),i.commit(),o++;o<t.length&&(t.length=o,this.clear(i&&i.endNode))}clear(e=this.startNode){Kn(this.startNode.parentNode,e.nextSibling,this.endNode)}}class xr{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;lr(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=cr,e(this)}if(this.__pendingValue===cr)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=cr}}class wr extends yr{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new kr(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class kr extends vr{}let Sr=!1;(()=>{try{const e={get capture(){return Sr=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class Er{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;lr(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=cr,e(this)}if(this.__pendingValue===cr)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),o=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=Tr(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=cr}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Tr=e=>e&&(Sr?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;function Cr(e){let t=Ar.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Ar.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(Yn);return i=t.keyString.get(o),void 0===i&&(i=new Zn(e,e.getTemplateElement()),t.keyString.set(o,i)),t.stringsArray.set(e.strings,i),i}const Ar=new Map,Ir=new WeakMap;
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
 */const Or=new
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
class{handleAttributeExpressions(e,t,i,o){const n=t[0];if("."===n){return new wr(e,t.slice(1),i).parts}if("@"===n)return[new Er(e,t.slice(1),o.eventContext)];if("?"===n)return[new xr(e,t.slice(1),i)];return new yr(e,t,i).parts}handleTextExpression(e){return new _r(e)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const $r=(e,...t)=>new mr(e,t,"html",Or),Rr=(e,...t)=>new gr(e,t,"svg",Or)
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
 */,Pr=(e,t)=>`${e}--${t}`;let Lr=!0;void 0===window.ShadyCSS?Lr=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Lr=!1);const Nr=e=>t=>{const i=Pr(t.type,e);let o=Ar.get(i);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},Ar.set(i,o));let n=o.stringsArray.get(t.strings);if(void 0!==n)return n;const r=t.strings.join(Yn);if(n=o.keyString.get(r),void 0===n){const i=t.getTemplateElement();Lr&&window.ShadyCSS.prepareTemplateDom(i,e),n=new Zn(t,i),o.keyString.set(r,n)}return o.stringsArray.set(t.strings,n),n},Mr=["html","svg"],Fr=new Set,zr=(e,t,i)=>{Fr.add(e);const o=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(o,e);const a=document.createElement("style");for(let e=0;e<r;e++){const t=n[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{Mr.forEach((t=>{const i=Ar.get(Pr(t,e));void 0!==i&&i.keyString.forEach((e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{i.add(e)})),nr(e,i)}))}))})(e);const s=o.content;i?function(e,t,i=null){const{element:{content:o},parts:n}=e;if(null==i)return void o.appendChild(t);const r=document.createTreeWalker(o,133,null,!1);let a=ar(n),s=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===i&&(s=rr(t),i.parentNode.insertBefore(t,i));-1!==a&&n[a].index===l;){if(s>0){for(;-1!==a;)n[a].index+=s,a=ar(n,a);return}a=ar(n,a)}}(i,a,s.firstChild):s.insertBefore(a,s.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const l=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){s.insertBefore(a,s.firstChild);const e=new Set;e.add(a),nr(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const Br={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Dr=(e,t)=>t!==e&&(t==t||e==e),Ur={attribute:!0,type:String,converter:Br,reflect:!1,hasChanged:Dr};class jr extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,i)=>{const o=this._attributeNameForProperty(i,t);void 0!==o&&(this._attributeToPropertyMap.set(o,i),e.push(o))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=Ur){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const n=this[e];this[t]=o,this.requestUpdateInternal(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Ur}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=Dr){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,o=t.converter||Br,n="function"==typeof o?o:o.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,o=t.converter;return(o&&o.toAttribute||Br.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=Ur){const o=this.constructor,n=o._attributeNameForProperty(e,i);if(void 0!==n){const e=o._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,o=i._attributeToPropertyMap.get(e);if(void 0!==o){const e=i.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let o=!0;if(void 0!==e){const n=this.constructor;i=i||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}jr.finalized=!0;
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
const Hr=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:o}=t;return{kind:i,elements:o,finisher(t){window.customElements.define(e,t)}}})(e,t),qr=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function Vr(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):qr(e,t)}function Wr(e,t){return(i,o)=>{const n={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};if(t){const t=void 0!==o?o:i.key,r="symbol"==typeof t?Symbol():`__${t}`;n.get=function(){return void 0===this[r]&&(this[r]=this.renderRoot.querySelector(e)),this[r]}}return void 0!==o?Gr(n,i,o):Xr(n,i)}}const Gr=(e,t,i)=>{Object.defineProperty(t,i,e)},Xr=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e})
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/,Kr=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yr=Symbol();class Qr{constructor(e,t){if(t!==Yr)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Kr?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Jr=e=>new Qr(String(e),Yr);
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
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const Zr={};class ea extends jr{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight(((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e)),i),i=t(e,new Set),o=[];i.forEach((e=>o.unshift(e))),this._styles=o}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!Kr){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return Jr(t)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Kr?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Zr&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return Zr}}function ta(e){return Jr(e)}function ia(e,t){for(const i in t){const o=!0===t[i]?"":t[i];o||""===o||0===o?e.getAttribute(i)!==o&&e.setAttribute(i,o.toString()):e.hasAttribute(i)&&e.removeAttribute(i)}}function oa(e,t){if(null==e.shadowRoot)return[];const i=e.shadowRoot.host.getRootNode(),o=i.querySelectorAll(t);return o.length>0?Array.from(o):oa(i,t)}function na(e=document.activeElement){return null!=e&&null!=e.shadowRoot&&null!=e.shadowRoot.activeElement?na(e.shadowRoot.activeElement):e}function ra(e){return Array.from(e.querySelector("slot").assignedNodes()).filter((e=>"#text"!==e.nodeName))}function aa(e){for(;e.firstChild;)e.firstChild.remove()}function sa(e,t){return null!=t?"none"===t.display:null===e.offsetParent}function la(e,t,i=document.documentElement){i.style.setProperty(e,t)}ea.finalized=!0,ea.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const o=i.scopeName,n=Ir.has(t),r=Lr&&11===t.nodeType&&!!t.host,a=r&&!Fr.has(o),s=a?document.createDocumentFragment():t;if(((e,t,i)=>{let o=Ir.get(t);void 0===o&&(Kn(t,t.firstChild),Ir.set(t,o=new _r(Object.assign({templateFactory:Cr},i))),o.appendInto(t)),o.setValue(e),o.commit()})(e,s,Object.assign({templateFactory:Nr(o)},i)),a){const e=Ir.get(s);Ir.delete(s);const i=e.value instanceof pr?e.value.template:void 0;zr(o,s,i),Kn(t,t.firstChild),t.appendChild(s),Ir.set(t,e)}!n&&r&&window.ShadyCSS.styleElement(t.host)},ea.shadowRootOptions={mode:"open"};const ca=new Map;function da(e,t,i){const o=ca.get(i);null!=o&&window.clearTimeout(o),ca.set(i,window.setTimeout((()=>{e(),ca.delete(i)}),t))}function pa(e,t,i,o,n){const r=Array.isArray(t)?t:[t],a=Math.random().toString(),s=e=>null==n?i(e):da((()=>i(e)),n,a);return r.forEach((t=>e.addEventListener(t,s,o))),()=>r.forEach((t=>e.removeEventListener(t,s,o)))}function ha(e){e.forEach((e=>e())),e.length=0}function ua(e){e.preventDefault(),e.stopPropagation()}var ma,ga;function fa({anchorOriginX:e,anchorOriginY:t},{left:i,top:o,width:n=0,height:r=0}){switch(e){case ma.CENTER:i+=n/2;break;case ma.RIGHT:i+=n}switch(t){case ga.CENTER:o+=r/2;break;case ga.BOTTOM:o+=r}return{left:i,top:o}}function ba(e,t){const i=function(e){return new WebKitCSSMatrix(e.webkitTransform)}(e);return{x:0===(null==t?e.getPropertyValue("width"):t.width)?0:i.a,y:0===(null==t?e.getPropertyValue("height"):t.height)?0:i.d}}function ya(e){if("0px"===e.getPropertyValue("width")||"0px"===e.getPropertyValue("height"))return 0;const t=e.getPropertyValue("opacity");return isNaN(+t)?0:Number(t)}function va(e,t,i,o=20,n=0){let r=[];if(n>=o)return r;const a=e=>{const r=e.assignedNodes().filter((e=>1===e.nodeType));return r.length>0?va(r[0].parentElement,t,i,o,n+1):[]},s=Array.from(e.children||[]);for(const e of s)t(e)||(i(e)&&r.push(e),null!=e.shadowRoot?r.push(...va(e.shadowRoot,t,i,o,n+1)):"SLOT"===e.tagName?r.push(...a(e)):r.push(...va(e,t,i,o,n+1)));return r}function _a(e){return e.hasAttribute("hidden")||e.hasAttribute("aria-hidden")&&"false"!==e.getAttribute("aria-hidden")||"none"===e.style.display||"0"===e.style.opacity||"hidden"===e.style.visibility||"collapse"===e.style.visibility}function xa(e){return"-1"!==e.getAttribute("tabindex")&&!_a(e)&&!function(e){return e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&"false"!==e.getAttribute("aria-disabled")}(e)&&(e.hasAttribute("tabindex")||(e instanceof HTMLAnchorElement||e instanceof HTMLAreaElement)&&e.hasAttribute("href")||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLIFrameElement)}!function(e){e.LEFT="left",e.CENTER="center",e.RIGHT="right"}(ma||(ma={})),function(e){e.TOP="top",e.CENTER="center",e.BOTTOM="bottom"}(ga||(ga={}));const wa=document.createElement("template");wa.innerHTML='\n\t<div id="start"></div>\n\t<div id="backup"></div>\n\t<slot></slot>\n\t<div id="end"></div>\n';class ka extends HTMLElement{constructor(){super(),this.debounceId=Math.random().toString(),this._focused=!1;const e=this.attachShadow({mode:"open"});e.appendChild(wa.content.cloneNode(!0)),this.$backup=e.querySelector("#backup"),this.$start=e.querySelector("#start"),this.$end=e.querySelector("#end"),this.focusLastElement=this.focusLastElement.bind(this),this.focusFirstElement=this.focusFirstElement.bind(this),this.onFocusIn=this.onFocusIn.bind(this),this.onFocusOut=this.onFocusOut.bind(this)}static get observedAttributes(){return["inactive"]}get inactive(){return this.hasAttribute("inactive")}set inactive(e){e?this.setAttribute("inactive",""):this.removeAttribute("inactive")}get focused(){return this._focused}connectedCallback(){this.$start.addEventListener("focus",this.focusLastElement),this.$end.addEventListener("focus",this.focusFirstElement),this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut),this.render()}disconnectedCallback(){this.$start.removeEventListener("focus",this.focusLastElement),this.$end.removeEventListener("focus",this.focusFirstElement),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut)}attributeChangedCallback(){this.render()}focusFirstElement(){this.trapFocus()}focusLastElement(){this.trapFocus(!0)}getFocusableElements(){return va(this,_a,xa)}trapFocus(e){if(this.inactive)return;let t=this.getFocusableElements();t.length>0?(e?t[t.length-1].focus():t[0].focus(),this.$backup.setAttribute("tabindex","-1")):(this.$backup.setAttribute("tabindex","0"),this.$backup.focus())}onFocusIn(){this.updateFocused(!0)}onFocusOut(){this.updateFocused(!1)}updateFocused(e){da((()=>{this.focused!==e&&(this._focused=e,this.render())}),0,this.debounceId)}render(){this.$start.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.$end.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.focused?this.setAttribute("focused",""):this.removeAttribute("focused")}}window.customElements.define("focus-trap",ka);let Sa=class extends ea{constructor(){super(...arguments),this.role="presentation"}render(){return $r``}};function Ea(e){e.onfinish=null,e.pause()}function Ta(e){for(const t of e)Ea(t);e.length=0}Sa.styles=[ta(":host{background:var(--backdrop-bg,rgba(0,0,0,.6));position:absolute;top:0;left:0;width:100%;height:100%;outline:none}")],o([Vr({type:String,reflect:!0}),n("design:type",String)],Sa.prototype,"role",void 0),Sa=o([Hr("wl-backdrop")],Sa);const Ca="ResizeObserver"in window;function Aa(e,t,{debounceMs:i}={}){const o=new ResizeObserver((e=>{e.forEach((({contentRect:e})=>null==i?t(e):da((()=>t(e)),i,Math.random().toString())))}));return o.observe(e),()=>o.disconnect()}function Ia(e=10){return`_${Math.random().toString(36).substr(2,e)}`}const Oa="cubic-bezier(0.4, 0, 0.2, 1)",$a="Enter",Ra="ArrowRight",Pa="ArrowLeft",La="ArrowUp",Na="ArrowDown";const Ma=ta("*{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}");var Fa;!function(e){e.DID_SHOW="didShow",e.DID_HIDE="didHide"}(Fa||(Fa={}));const za=document.documentElement,Ba=e=>`overlay-${e}`;class Da extends ea{constructor(){super(...arguments),this.open=!1,this.disableFocusTrap=!1,this.backdrop=!1,this.fixed=!1,this.persistent=!1,this.blockScrolling=!1,this.duration=200,this.scrollContainer=za,this.activeInAnimations=[],this.activeOutAnimations=[],this.resolvers=[],this.overlayId=Ia(),this.listeners=[]}get $blockableScrollContainer(){return this.scrollContainer instanceof HTMLElement?this.scrollContainer:za}get animationConfig(){return{duration:this.duration,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}trapFocus(){null!=this.$focusTrap&&(this.storeCurrentActiveElement(),this.$focusTrap.focusFirstElement())}storeCurrentActiveElement(){this.activeElementBeforeOpen=na()}show(e){return this.activeInAnimations.length>0||(this.prepareShowAnimation(e),this.animateIn(),this.open=!0),this.createResolver()}hide(e){this.activeOutAnimations.length>0||(this.prepareHideAnimation(),this.animateOut(e))}updated(e){super.updated(e),e.has("open")&&(this.open?this.removeAttribute("tabindex"):this.setAttribute("tabindex","-1")),this.updateAria()}updateAria(){ia(this,{"aria-hidden":!this.open})}createResolver(){return new Promise((e=>{this.resolvers.push(e)}))}resolve(e){for(const t of this.resolvers)t(e);this.resolvers.length=0}clickAway(){!this.persistent&&this.open&&this.hide()}dispatchOverlayEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,composed:!0,bubbles:!0}))}setConfig(e){Object.assign(this,e)}pauseAnimations(){this.pauseInAnimations(),this.pauseOutAnimations()}pauseInAnimations(){Ta(this.activeInAnimations)}pauseOutAnimations(){Ta(this.activeOutAnimations)}prepareShowAnimation(e){if(this.listeners.push(pa(this.scrollContainer,"scroll",this.updatePosition.bind(this),{passive:!0}),Ca?Aa(this,this.updatePosition.bind(this),{debounceMs:100}):pa(window,"resize",this.updatePosition.bind(this),{passive:!0})),this.pauseAnimations(),null!=e&&this.setConfig(e),this.blockScrolling){const e=this.$blockableScrollContainer;e.style.overflow="hidden",e.classList.add(Ba(this.overlayId))}}prepareHideAnimation(){ha(this.listeners),this.pauseAnimations()}didShow(){this.activeInAnimations.length=0,this.listeners.push(pa(this,"keydown",this.onKeyDown.bind(this))),this.disableFocusTrap||this.trapFocus(),this.dispatchOverlayEvent(Fa.DID_SHOW)}didHide(e){if(this.blockScrolling){const e=this.$blockableScrollContainer,t=e.className.match(new RegExp("overlay","gm"));(null===t||null!=t&&1===t.length)&&(e.style.overflow=""),e.classList.remove(Ba(this.overlayId))}null!=this.activeElementBeforeOpen&&(this.activeElementBeforeOpen.focus(),this.activeElementBeforeOpen=void 0),this.activeOutAnimations.length=0,this.open=!1,this.dispatchOverlayEvent(Fa.DID_HIDE,e)}updatePosition(){}onKeyDown(e){switch(e.code){case"Escape":this.open&&!this.persistent&&(this.hide(),ua(e))}}}Da.styles=[Ma,ta(":host([backdrop]) #backdrop{display:block}#backdrop{display:none;pointer-events:all}")],o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],Da.prototype,"open",void 0),o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],Da.prototype,"disableFocusTrap",void 0),o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],Da.prototype,"backdrop",void 0),o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],Da.prototype,"fixed",void 0),o([Vr({type:Boolean}),n("design:type",Boolean)],Da.prototype,"persistent",void 0),o([Vr({type:Boolean}),n("design:type",Boolean)],Da.prototype,"blockScrolling",void 0),o([Vr({type:Number}),n("design:type",Number)],Da.prototype,"duration",void 0),o([Vr({type:Object}),n("design:type",EventTarget)],Da.prototype,"scrollContainer",void 0);ma.LEFT,ga.TOP,ma.LEFT,ga.TOP;let Ua=class extends Da{constructor(){super(...arguments),this.closeOnClick=!1,this.noFallback=!1,this.transformOriginX=ma.LEFT,this.transformOriginY=ga.TOP,this.anchorOriginX=ma.LEFT,this.anchorOriginY=ga.TOP,this.role="menu",this.clickAwayListeners=[],this.anchorOpenEventListeners=[],this.anchorCloseEventListeners=[]}get $focusTrap(){return this.$content}disconnectedCallback(){super.disconnectedCallback(),this.detachClickAwayListeners(),ha(this.anchorOpenEventListeners),ha(this.anchorCloseEventListeners)}updated(e){super.updated(e),e.has("anchorOpenEvents")&&null!=this.anchorOpenEvents&&this.attachEventListenersToAnchor(this.anchorOpenEventListeners,this.anchorOpenEvents,(()=>!this.open&&this.show())),e.has("anchorCloseEvents")&&null!=this.anchorCloseEvents&&this.attachEventListenersToAnchor(this.anchorCloseEventListeners,this.anchorCloseEvents,(()=>this.open&&this.hide()))}showAtPosition(e,t){return this.anchorPosition=e,this.show(t)}getPositionStrategy(){return{transformOriginX:this.transformOriginX,transformOriginY:this.transformOriginY,anchorOriginX:this.anchorOriginX,anchorOriginY:this.anchorOriginY}}didShow(){super.didShow(),this.$focusTrap.focusFirstElement(),this.attachClickAwayListeners()}didHide(e){super.didHide(e),this.anchorPosition=void 0}attachEventListenersToAnchor(e,t,i){ha(e);const o=this.getAnchor();if(null==o)return this.throwNoAnchorError();e.push(pa(o,t,i))}throwNoAnchorError(){throw new Error(`No anchor could be found for the popover. "${this.anchor}" provided as anchor.`)}attachClickAwayListeners(){var e,t;this.clickAwayListeners.push((e=[this.$container],t=this.clickAway.bind(this),pa(window,["mousedown","pointerdown"],(i=>{if(!("composedPath"in i))return;const o=i.composedPath();null==e.find((e=>o.includes(e)))&&t()}),{passive:!0})),pa(this.$container,"click",this.onContainerClick.bind(this)))}detachClickAwayListeners(){ha(this.clickAwayListeners)}animateIn(){let e=!1;const t=()=>{e||(e=!0,this.didShow())},i=this.$backdrop.animate({opacity:[ya(window.getComputedStyle(this.$backdrop)).toString(),"1"]},this.animationConfig),o=window.getComputedStyle(this.$content),n=ba(o,this.$content.getBoundingClientRect()),r=ya(o),a=this.$content.animate({transform:[`scale(${n.x}, ${n.y})`,"scale(1)"],opacity:[`${r>.5?r:0}`,1]},this.animationConfig);a.onfinish=t,i.onfinish=t,this.activeInAnimations.push(a,i),this.updatePosition()}animateOut(e){let t=!1;const i=()=>{t||(t=!0,this.resolve(e),this.didHide(e))},o=this.$backdrop.animate({opacity:[ya(window.getComputedStyle(this.$backdrop)).toString(),"0"]},this.animationConfig),n=window.getComputedStyle(this.$content),r=ba(n,this.$content.getBoundingClientRect()),a=ya(n),s=this.$content.animate({opacity:[a.toString(),0],transform:[`scale(${r.x}, ${r.y})`,"scale(0)"]},this.animationConfig);o.onfinish=i,s.onfinish=i,this.detachClickAwayListeners(),this.activeOutAnimations.push(o,s)}updatePosition(){super.updatePosition(),requestAnimationFrame((()=>{const e=this.getAnchor();let t,i=this.getPositionStrategy(),o=!1,n=null;if(null!=this.anchorPosition)t=this.anchorPosition;else{if(null==e)return this.throwNoAnchorError();n=e.getBoundingClientRect(),t=fa(i,n)}if(!this.noFallback){const e=function({transformOriginX:e,transformOriginY:t,anchorOriginX:i,anchorOriginY:o},{top:n,left:r},a){const{innerHeight:s,innerWidth:l}=window;switch(t){case ga.TOP:n+a.height>s&&(t=ga.BOTTOM,o=ga.TOP);break;case ga.BOTTOM:}switch(e){case ma.LEFT:r+a.width>l&&(e=ma.RIGHT,i=ma.LEFT)}return{transformOriginY:t,transformOriginX:e,anchorOriginX:i,anchorOriginY:o}}(i,t,this.$container.getBoundingClientRect());a=e,o=(r=i).transformOriginX!==a.transformOriginX||r.transformOriginY!==a.transformOriginY||r.anchorOriginX!==a.anchorOriginX||r.anchorOriginY!==a.anchorOriginY,o&&(i=e,t=fa(e,n||t))}var r,a;const s=function({transformOriginX:e,transformOriginY:t}){let i=0,o=0;switch(e){case ma.CENTER:i="-50%";break;case ma.RIGHT:i="-100%"}switch(t){case ga.CENTER:o="-50%";break;case ga.BOTTOM:o="-100%"}return{x:i,y:o}}(i);this.$content.style.transformOrigin=`${i.transformOriginX} ${i.transformOriginY}`,Object.assign(this.$container.style,{top:`${t.top}px`,left:`${t.left}px`,transform:`translate(${s.x}, ${s.y})`}),ia(this.$container,{"data-fallback-strategy":o,"data-anchor-origin-x":i.anchorOriginX,"data-anchor-origin-y":i.anchorOriginY,"data-transform-origin-x":i.transformOriginX,"data-transform-origin-y":i.transformOriginY});const{maxWidth:l,maxHeight:c}=function({transformOriginX:e,transformOriginY:t},{left:i,top:o}){const{innerHeight:n,innerWidth:r}=window;return{maxWidth:e===ma.RIGHT?i:r-i,maxHeight:t===ga.BOTTOM?o:n-o}}(i,t);la("--popover-container-max-width",`${l}px`,this.$container),la("--popover-container-max-height",`${c}px`,this.$container)}))}getAnchor(){let e=this.anchor;if("string"==typeof e||e instanceof String){const t=oa(this,e);e=t.length>0?t[0]:void 0}return e}onContainerClick(){this.open&&this.closeOnClick&&this.hide()}renderContent(){return $r` <slot></slot> `}render(){return $r` <wl-backdrop id="backdrop" @click="${this.clickAway}"></wl-backdrop> <div id="container" aria-expanded="${this.open.toString()}"> <focus-trap id="content" ?inactive="${!this.open||this.disableFocusTrap}"> ${this.renderContent()} </focus-trap> </div> `}};Ua.styles=[...Da.styles,ta(":host{display:none;outline:none;pointer-events:none}:host([fixed]){z-index:var(--popover-z-index,12345678);position:fixed;top:0;left:0;width:100%;height:100%}:host([fixed]) #container{position:absolute}#content,:host([open]){display:block}#content{z-index:1;pointer-events:all}")],o([Vr({type:Boolean}),n("design:type",Boolean)],Ua.prototype,"closeOnClick",void 0),o([Vr({type:Boolean}),n("design:type",Boolean)],Ua.prototype,"noFallback",void 0),o([Vr({type:String,reflect:!0}),n("design:type",String)],Ua.prototype,"transformOriginX",void 0),o([Vr({type:String,reflect:!0}),n("design:type",String)],Ua.prototype,"transformOriginY",void 0),o([Vr({type:String,reflect:!0}),n("design:type",String)],Ua.prototype,"anchorOriginX",void 0),o([Vr({type:String,reflect:!0}),n("design:type",String)],Ua.prototype,"anchorOriginY",void 0),o([Vr({type:String,reflect:!0}),n("design:type",String)],Ua.prototype,"role",void 0),o([Vr({type:String}),n("design:type",Object)],Ua.prototype,"anchor",void 0),o([Vr({type:Array}),n("design:type",Array)],Ua.prototype,"anchorOpenEvents",void 0),o([Vr({type:Array}),n("design:type",Array)],Ua.prototype,"anchorCloseEvents",void 0),o([Wr("#content"),n("design:type",ka)],Ua.prototype,"$content",void 0),o([Wr("#container"),n("design:type",HTMLElement)],Ua.prototype,"$container",void 0),o([Wr("#backdrop"),n("design:type",Sa)],Ua.prototype,"$backdrop",void 0),Ua=o([Hr("wl-popover")],Ua);let ja=class extends ea{constructor(){super(...arguments),this.hoverable=!1}render(){return $r` <slot></slot> `}};ja.styles=[Ma,ta(":host{color:var(--card-color,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));background:var(--card-bg,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));transition:var(--card-transition,box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-ease,ease));box-shadow:var(--card-elevation,var(--elevation-1,0 .3125rem .625rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)));border-radius:var(--card-border-radius,.5rem);padding:var(--card-padding,0);display:flex;flex-direction:column;text-align:left}:host([hoverable]:hover){box-shadow:var(--card-elevation-hover,var(--elevation-4,0 .5rem 1rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)))}")],o([Vr({reflect:!0,type:Boolean}),n("design:type",Boolean)],ja.prototype,"hoverable",void 0),ja=o([Hr("wl-card")],ja);let Ha=class extends ea{render(){return $r` <svg id="arrow" viewBox="0 0 100 100" preserveAspectRatio="none"> <polygon points="50 0, 100 100, 0 100"/> </svg> <wl-card id="content"> <slot></slot> </wl-card> `}};Ha.styles=[Ma,ta(":host{--card-elevation:var(--popover-card-elevation,var(--elevation-4,0px 0.5rem 1rem -0.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),0.15)));display:flex;flex-direction:var(--_flex-direction,column)}#content{transform:translate(calc(var(--popover-card-arrow-width, .625rem) * var(--_content-translate-x-multiplier, 0)),calc(var(--popover-card-arrow-width, .625rem) * var(--_content-translate-y-multiplier, 0)));overflow:hidden}#arrow{transform:rotate(var(--_arrow-rotation,0deg)) translate(calc(50% * var(--_arrow-translate-x-multiplier, 0)),calc(50% * var(--_arrow-translate-y-multiplier, 0)));left:var(--_arrow-offset-x,unset);top:var(--_arrow-offset-y,unset);justify-self:var(--_justify-content,flex-start);align-self:var(--_align-items,flex-start);pointer-events:none;position:relative;width:var(--popover-card-arrow-width,.625rem);height:var(--popover-card-arrow-height,.375rem);fill:var(--popover-card-arrow-fill,var(--card-bg,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%)))));z-index:1;display:none}:host-context([data-transform-origin-x][data-transform-origin-y]) #arrow{display:block}:host-context([data-transform-origin-x=left]){--_align-items:flex-start}:host-context([data-transform-origin-x=center]){--_align-items:center}:host-context([data-transform-origin-x=right]){--_align-items:flex-end}:host-context([data-transform-origin-y=top]){--_justify-content:flex-start}:host-context([data-transform-origin-y=center]){--_justify-content:center}:host-context([data-transform-origin-y=bottom]){--_flex-direction:column-reverse}:host-context([data-transform-origin-x=center][data-transform-origin-y=center]) #arrow{display:none}:host-context([data-transform-origin-x=left][data-transform-origin-y=top]){--_content-translate-x-multiplier:-2;--_arrow-translate-x-multiplier:-1}:host-context([data-transform-origin-x=right][data-transform-origin-y=top]){--_content-translate-x-multiplier:2;--_arrow-translate-x-multiplier:1}:host-context([data-transform-origin-y=bottom]){--_arrow-rotation:180deg}:host-context([data-transform-origin-x=left][data-transform-origin-y=bottom]){--_content-translate-x-multiplier:-2;--_arrow-translate-x-multiplier:1}:host-context([data-transform-origin-x=right][data-transform-origin-y=bottom]){--_content-translate-x-multiplier:2;--_arrow-translate-x-multiplier:-1}:host-context([data-transform-origin-y=center]){--_arrow-translate-x-multiplier:0;--_align-items:center}:host-context([data-transform-origin-x=left][data-transform-origin-y=center]){--_flex-direction:row;--_arrow-rotation:-90deg}:host-context([data-transform-origin-x=left][data-transform-origin-y=center]) #content{transform:translateX(calc(((var(--popover-card-arrow-width, .625rem) - var(--popover-card-arrow-height, .375rem)) / 2) * -1))}:host-context([data-transform-origin-x=right][data-transform-origin-y=center]){--_flex-direction:row-reverse;--_arrow-rotation:90deg}:host-context([data-transform-origin-x=right][data-transform-origin-y=center]) #content{transform:translateX(calc((var(--popover-card-arrow-width, .625rem) - var(--popover-card-arrow-height, .375rem)) / 2))}")],Ha=o([Hr("wl-popover-card")],Ha);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class qa extends kn{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.name="",this.value="on",this.reducedTouchTarget=!1,this.animationClass="",this.shouldRenderRipple=!1,this.focused=!1,this.mdcFoundationClass=void 0,this.mdcFoundation=void 0,this.rippleElement=null,this.rippleHandlers=new Ci((()=>(this.shouldRenderRipple=!0,this.ripple.then((e=>this.rippleElement=e)),this.ripple)))}createAdapter(){return{}}update(e){const t=e.get("indeterminate"),i=e.get("checked"),o=e.get("disabled");if(void 0!==t||void 0!==i||void 0!==o){const e=this.calculateAnimationStateName(!!i,!!t,!!o),n=this.calculateAnimationStateName(this.checked,this.indeterminate,this.disabled);this.animationClass=`${e}-${n}`}super.update(e)}calculateAnimationStateName(e,t,i){return i?"disabled":t?"indeterminate":e?"checked":"unchecked"}renderRipple(){return this.shouldRenderRipple?this.renderRippleTemplate():""}renderRippleTemplate(){return z`<mwc-ripple
        .disabled="${this.disabled}"
        unbounded></mwc-ripple>`}render(){const e=this.indeterminate||this.checked,t={"mdc-checkbox--disabled":this.disabled,"mdc-checkbox--selected":e,"mdc-checkbox--touch":!this.reducedTouchTarget,"mdc-ripple-upgraded--background-focused":this.focused,"mdc-checkbox--anim-checked-indeterminate":"checked-indeterminate"==this.animationClass,"mdc-checkbox--anim-checked-unchecked":"checked-unchecked"==this.animationClass,"mdc-checkbox--anim-indeterminate-checked":"indeterminate-checked"==this.animationClass,"mdc-checkbox--anim-indeterminate-unchecked":"indeterminate-unchecked"==this.animationClass,"mdc-checkbox--anim-unchecked-checked":"unchecked-checked"==this.animationClass,"mdc-checkbox--anim-unchecked-indeterminate":"unchecked-indeterminate"==this.animationClass},i=this.indeterminate?"mixed":void 0;return z`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Wt(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${Ai(this.name)}"
              aria-checked="${Ai(i)}"
              aria-label="${Ai(this.ariaLabel)}"
              aria-labelledby="${Ai(this.ariaLabelledBy)}"
              aria-describedby="${Ai(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate?"true":"false"}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
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
      </div>`}setFormData(e){this.name&&this.checked&&e.append(this.name,this.value)}handleFocus(){this.focused=!0,this.handleRippleFocus()}handleBlur(){this.focused=!1,this.handleRippleBlur()}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}handleChange(){this.checked=this.formElement.checked,this.indeterminate=this.formElement.indeterminate}resetAnimationClass(){this.animationClass=""}get isRippleActive(){var e;return(null===(e=this.rippleElement)||void 0===e?void 0:e.isActive)||!1}}o([Te(".mdc-checkbox")],qa.prototype,"mdcRoot",void 0),o([Te("input")],qa.prototype,"formElement",void 0),o([we({type:Boolean,reflect:!0})],qa.prototype,"checked",void 0),o([we({type:Boolean})],qa.prototype,"indeterminate",void 0),o([we({type:Boolean,reflect:!0})],qa.prototype,"disabled",void 0),o([we({type:String,reflect:!0})],qa.prototype,"name",void 0),o([we({type:String})],qa.prototype,"value",void 0),o([Ti,we({type:String,attribute:"aria-label"})],qa.prototype,"ariaLabel",void 0),o([Ti,we({type:String,attribute:"aria-labelledby"})],qa.prototype,"ariaLabelledBy",void 0),o([Ti,we({type:String,attribute:"aria-describedby"})],qa.prototype,"ariaDescribedBy",void 0),o([we({type:Boolean})],qa.prototype,"reducedTouchTarget",void 0),o([ke()],qa.prototype,"animationClass",void 0),o([ke()],qa.prototype,"shouldRenderRipple",void 0),o([ke()],qa.prototype,"focused",void 0),o([Ce("mwc-ripple")],qa.prototype,"ripple",void 0),o([Ee({passive:!0})],qa.prototype,"handleRippleTouchStart",null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Va=ae`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Wa=class extends qa{};Wa.styles=[Va],Wa=o([_e("mwc-checkbox")],Wa);
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
var Ga={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},Xa={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},Ka={LABEL_SCALE:.75},Ya=["pattern","min","max","required","step","minlength","maxlength"],Qa=["color","date","datetime-local","month","range","time","week"],Ja=["mousedown","touchstart"],Za=["click","keydown"],es=function(e){function o(t,n){void 0===n&&(n={});var r=e.call(this,i(i({},o.defaultAdapter),t))||this;return r.isFocused=!1,r.receivedUserInput=!1,r.valid=!0,r.useNativeValidation=!0,r.validateOnValueChange=!0,r.helperText=n.helperText,r.characterCounter=n.characterCounter,r.leadingIcon=n.leadingIcon,r.trailingIcon=n.trailingIcon,r.inputFocusHandler=function(){r.activateFocus()},r.inputBlurHandler=function(){r.deactivateFocus()},r.inputInputHandler=function(){r.handleInput()},r.setPointerXOffset=function(e){r.setTransformOrigin(e)},r.textFieldInteractionHandler=function(){r.handleTextFieldInteraction()},r.validationAttributeChangeHandler=function(e){r.handleValidationAttributeChange(e)},r}return t(o,e),Object.defineProperty(o,"cssClasses",{get:function(){return Xa},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return Ga},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return Ka},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"shouldAlwaysFloat",{get:function(){var e=this.getNativeInput().type;return Qa.indexOf(e)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver((function(){}))},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),o.prototype.init=function(){var e,t,i,o;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var n=r(Ja),a=n.next();!a.done;a=n.next()){var s=a.value;this.adapter.registerInputInteractionHandler(s,this.setPointerXOffset)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}try{for(var l=r(Za),c=l.next();!c.done;c=l.next()){s=c.value;this.adapter.registerTextFieldInteractionHandler(s,this.textFieldInteractionHandler)}}catch(e){i={error:e}}finally{try{c&&!c.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},o.prototype.destroy=function(){var e,t,i,o;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var n=r(Ja),a=n.next();!a.done;a=n.next()){var s=a.value;this.adapter.deregisterInputInteractionHandler(s,this.setPointerXOffset)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}try{for(var l=r(Za),c=l.next();!c.done;c=l.next()){s=c.value;this.adapter.deregisterTextFieldInteractionHandler(s,this.textFieldInteractionHandler)}}catch(e){i={error:e}}finally{try{c&&!c.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},o.prototype.handleTextFieldInteraction=function(){var e=this.adapter.getNativeInput();e&&e.disabled||(this.receivedUserInput=!0)},o.prototype.handleValidationAttributeChange=function(e){var t=this;e.some((function(e){return Ya.indexOf(e)>-1&&(t.styleValidity(!0),t.adapter.setLabelRequired(t.getNativeInput().required),!0)})),e.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},o.prototype.notchOutline=function(e){if(this.adapter.hasOutline()&&this.adapter.hasLabel())if(e){var t=this.adapter.getLabelWidth()*Ka.LABEL_SCALE;this.adapter.notchOutline(t)}else this.adapter.closeOutline()},o.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),!this.helperText||!this.helperText.isPersistent()&&this.helperText.isValidation()&&this.valid||this.helperText.showToScreenReader()},o.prototype.setTransformOrigin=function(e){if(!this.isDisabled()&&!this.adapter.hasOutline()){var t=e.touches,i=t?t[0]:e,o=i.target.getBoundingClientRect(),n=i.clientX-o.left;this.adapter.setLineRippleTransformOrigin(n)}},o.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},o.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},o.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var e=this.isValid();this.styleValidity(e),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},o.prototype.getValue=function(){return this.getNativeInput().value},o.prototype.setValue=function(e){if(this.getValue()!==e&&(this.getNativeInput().value=e),this.setcharacterCounter(e.length),this.validateOnValueChange){var t=this.isValid();this.styleValidity(t)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},o.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},o.prototype.setValid=function(e){this.valid=e,this.styleValidity(e);var t=!e&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(t)},o.prototype.setValidateOnValueChange=function(e){this.validateOnValueChange=e},o.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},o.prototype.setUseNativeValidation=function(e){this.useNativeValidation=e},o.prototype.isDisabled=function(){return this.getNativeInput().disabled},o.prototype.setDisabled=function(e){this.getNativeInput().disabled=e,this.styleDisabled(e)},o.prototype.setHelperTextContent=function(e){this.helperText&&this.helperText.setContent(e)},o.prototype.setLeadingIconAriaLabel=function(e){this.leadingIcon&&this.leadingIcon.setAriaLabel(e)},o.prototype.setLeadingIconContent=function(e){this.leadingIcon&&this.leadingIcon.setContent(e)},o.prototype.setTrailingIconAriaLabel=function(e){this.trailingIcon&&this.trailingIcon.setAriaLabel(e)},o.prototype.setTrailingIconContent=function(e){this.trailingIcon&&this.trailingIcon.setContent(e)},o.prototype.setcharacterCounter=function(e){if(this.characterCounter){var t=this.getNativeInput().maxLength;if(-1===t)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(e,t)}},o.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},o.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},o.prototype.styleValidity=function(e){var t=o.cssClasses.INVALID;if(e?this.adapter.removeClass(t):this.adapter.addClass(t),this.helperText){if(this.helperText.setValidity(e),!this.helperText.isValidation())return;var i=this.helperText.isVisible(),n=this.helperText.getId();i&&n?this.adapter.setInputAttr(Ga.ARIA_DESCRIBEDBY,n):this.adapter.removeInputAttr(Ga.ARIA_DESCRIBEDBY)}},o.prototype.styleFocused=function(e){var t=o.cssClasses.FOCUSED;e?this.adapter.addClass(t):this.adapter.removeClass(t)},o.prototype.styleDisabled=function(e){var t=o.cssClasses,i=t.DISABLED,n=t.INVALID;e?(this.adapter.addClass(i),this.adapter.removeClass(n)):this.adapter.removeClass(i),this.leadingIcon&&this.leadingIcon.setDisabled(e),this.trailingIcon&&this.trailingIcon.setDisabled(e)},o.prototype.styleFloating=function(e){var t=o.cssClasses.LABEL_FLOATING;e?this.adapter.addClass(t):this.adapter.removeClass(t)},o.prototype.getNativeInput=function(){return(this.adapter?this.adapter.getNativeInput():null)||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},o}(Rt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ts=He(class extends qe{constructor(e){if(super(e),e.type!==Ue&&e.type!==Be&&e.type!==je)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ve(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===B||t===D)return t;const i=e.element,o=e.name;if(e.type===Ue){if(t===i[o])return B}else if(e.type===je){if(!!t===i.hasAttribute(o))return B}else if(e.type===Be&&i.getAttribute(o)===t+"")return B;return((e,t=We)=>{e._$AH=t})(e),t}}),is=["touchstart","touchmove","scroll","mousewheel"],os=(e={})=>{const t={};for(const i in e)t[i]=e[i];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},t)};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ns extends kn{constructor(){super(...arguments),this.mdcFoundationClass=es,this.value="",this.type="text",this.placeholder="",this.label="",this.icon="",this.iconTrailing="",this.disabled=!1,this.required=!1,this.minLength=-1,this.maxLength=-1,this.outlined=!1,this.helper="",this.validateOnInitialRender=!1,this.validationMessage="",this.autoValidate=!1,this.pattern="",this.min="",this.max="",this.step=null,this.size=null,this.helperPersistent=!1,this.charCounter=!1,this.endAligned=!1,this.prefix="",this.suffix="",this.name="",this.readOnly=!1,this.autocapitalize="",this.outlineOpen=!1,this.outlineWidth=0,this.isUiValid=!0,this.focused=!1,this._validity=os(),this.validityTransform=null}get validity(){return this._checkValidity(this.value),this._validity}get willValidate(){return this.formElement.willValidate}get selectionStart(){return this.formElement.selectionStart}get selectionEnd(){return this.formElement.selectionEnd}focus(){const e=new CustomEvent("focus");this.formElement.dispatchEvent(e),this.formElement.focus()}blur(){const e=new CustomEvent("blur");this.formElement.dispatchEvent(e),this.formElement.blur()}select(){this.formElement.select()}setSelectionRange(e,t,i){this.formElement.setSelectionRange(e,t,i)}update(e){e.has("autoValidate")&&this.mdcFoundation&&this.mdcFoundation.setValidateOnValueChange(this.autoValidate),e.has("value")&&"string"!=typeof this.value&&(this.value=`${this.value}`),super.update(e)}setFormData(e){this.name&&e.append(this.name,this.value)}render(){const e=this.charCounter&&-1!==this.maxLength,t=!!this.helper||!!this.validationMessage||e,i={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--with-leading-icon":this.icon,"mdc-text-field--with-trailing-icon":this.iconTrailing,"mdc-text-field--end-aligned":this.endAligned};return z`
      <label class="mdc-text-field ${Wt(i)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(t)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(t,e)}
    `}updated(e){e.has("value")&&void 0!==e.get("value")&&(this.mdcFoundation.setValue(this.value),this.autoValidate&&this.reportValidity())}renderRipple(){return this.outlined?"":z`
      <span class="mdc-text-field__ripple"></span>
    `}renderOutline(){return this.outlined?z`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`:""}renderLabel(){return this.label?z`
      <span
          .floatingLabelFoundation=${Tn(this.label)}
          id="label">${this.label}</span>
    `:""}renderLeadingIcon(){return this.icon?this.renderIcon(this.icon):""}renderTrailingIcon(){return this.iconTrailing?this.renderIcon(this.iconTrailing,!0):""}renderIcon(e,t=!1){return z`<i class="material-icons mdc-text-field__icon ${Wt({"mdc-text-field__icon--leading":!t,"mdc-text-field__icon--trailing":t})}">${e}</i>`}renderPrefix(){return this.prefix?this.renderAffix(this.prefix):""}renderSuffix(){return this.suffix?this.renderAffix(this.suffix,!0):""}renderAffix(e,t=!1){return z`<span class="mdc-text-field__affix ${Wt({"mdc-text-field__affix--prefix":!t,"mdc-text-field__affix--suffix":t})}">
        ${e}</span>`}renderInput(e){const t=-1===this.minLength?void 0:this.minLength,i=-1===this.maxLength?void 0:this.maxLength,o=this.autocapitalize?this.autocapitalize:void 0,n=this.validationMessage&&!this.isUiValid,r=this.label?"label":void 0,a=e?"helper-text":void 0,s=this.focused||this.helperPersistent||n?"helper-text":void 0;return z`
      <input
          aria-labelledby=${Ai(r)}
          aria-controls="${Ai(a)}"
          aria-describedby="${Ai(s)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${ts(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${Ai(t)}"
          maxlength="${Ai(i)}"
          pattern="${Ai(this.pattern?this.pattern:void 0)}"
          min="${Ai(""===this.min?void 0:this.min)}"
          max="${Ai(""===this.max?void 0:this.max)}"
          step="${Ai(null===this.step?void 0:this.step)}"
          size="${Ai(null===this.size?void 0:this.size)}"
          name="${Ai(""===this.name?void 0:this.name)}"
          inputmode="${Ai(this.inputMode)}"
          autocapitalize="${Ai(o)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`}renderLineRipple(){return this.outlined?"":z`
      <span .lineRippleFoundation=${In()}></span>
    `}renderHelperText(e,t){const i=this.validationMessage&&!this.isUiValid,o={"mdc-text-field-helper-text--persistent":this.helperPersistent,"mdc-text-field-helper-text--validation-msg":i},n=this.focused||this.helperPersistent||i?void 0:"true",r=i?this.validationMessage:this.helper;return e?z`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${Ai(n)}"
             class="mdc-text-field-helper-text ${Wt(o)}"
             >${r}</div>
        ${this.renderCharCounter(t)}
      </div>`:""}renderCharCounter(e){const t=Math.min(this.value.length,this.maxLength);return e?z`
      <span class="mdc-text-field-character-counter"
            >${t} / ${this.maxLength}</span>`:""}onInputFocus(){this.focused=!0}onInputBlur(){this.focused=!1,this.reportValidity()}checkValidity(){const e=this._checkValidity(this.value);if(!e){const e=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(e)}return e}reportValidity(){const e=this.checkValidity();return this.mdcFoundation.setValid(e),this.isUiValid=e,e}_checkValidity(e){const t=this.formElement.validity;let i=os(t);if(this.validityTransform){const t=this.validityTransform(e,i);i=Object.assign(Object.assign({},i),t),this.mdcFoundation.setUseNativeValidation(!1)}else this.mdcFoundation.setUseNativeValidation(!0);return this._validity=i,this._validity.valid}setCustomValidity(e){this.validationMessage=e,this.formElement.setCustomValidity(e)}handleInputChange(){this.value=this.formElement.value}createAdapter(){return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods())}getRootAdapterMethods(){return Object.assign({registerTextFieldInteractionHandler:(e,t)=>this.addEventListener(e,t),deregisterTextFieldInteractionHandler:(e,t)=>this.removeEventListener(e,t),registerValidationAttributeChangeHandler:e=>{const t=new MutationObserver((t=>{e((e=>e.map((e=>e.attributeName)).filter((e=>e)))(t))}));return t.observe(this.formElement,{attributes:!0}),t},deregisterValidationAttributeChangeHandler:e=>e.disconnect()},Ft(this.mdcRoot))}getInputAdapterMethods(){return{getNativeInput:()=>this.formElement,setInputAttr:()=>{},removeInputAttr:()=>{},isFocused:()=>!!this.shadowRoot&&this.shadowRoot.activeElement===this.formElement,registerInputInteractionHandler:(e,t)=>this.formElement.addEventListener(e,t,{passive:e in is}),deregisterInputInteractionHandler:(e,t)=>this.formElement.removeEventListener(e,t)}}getLabelAdapterMethods(){return{floatLabel:e=>this.labelElement&&this.labelElement.floatingLabelFoundation.float(e),getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,hasLabel:()=>Boolean(this.labelElement),shakeLabel:e=>this.labelElement&&this.labelElement.floatingLabelFoundation.shake(e),setLabelRequired:e=>{this.labelElement&&this.labelElement.floatingLabelFoundation.setRequired(e)}}}getLineRippleAdapterMethods(){return{activateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},setLineRippleTransformOrigin:e=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.setRippleCenter(e)}}}async getUpdateComplete(){var e;const t=await super.getUpdateComplete();return await(null===(e=this.outlineElement)||void 0===e?void 0:e.updateComplete),t}firstUpdated(){var e;super.firstUpdated(),this.mdcFoundation.setValidateOnValueChange(this.autoValidate),this.validateOnInitialRender&&this.reportValidity(),null===(e=this.outlineElement)||void 0===e||e.updateComplete.then((()=>{var e;this.outlineWidth=(null===(e=this.labelElement)||void 0===e?void 0:e.floatingLabelFoundation.getWidth())||0}))}getOutlineAdapterMethods(){return{closeOutline:()=>this.outlineElement&&(this.outlineOpen=!1),hasOutline:()=>Boolean(this.outlineElement),notchOutline:e=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=e,this.outlineOpen=!0)}}}async layout(){await this.updateComplete;const e=this.labelElement;if(!e)return void(this.outlineOpen=!1);const t=!!this.label&&!!this.value;if(e.floatingLabelFoundation.float(t),!this.outlined)return;this.outlineOpen=t,await this.updateComplete;const i=e.floatingLabelFoundation.getWidth();this.outlineOpen&&(this.outlineWidth=i,await this.updateComplete)}}o([Te(".mdc-text-field")],ns.prototype,"mdcRoot",void 0),o([Te("input")],ns.prototype,"formElement",void 0),o([Te(".mdc-floating-label")],ns.prototype,"labelElement",void 0),o([Te(".mdc-line-ripple")],ns.prototype,"lineRippleElement",void 0),o([Te("mwc-notched-outline")],ns.prototype,"outlineElement",void 0),o([Te(".mdc-notched-outline__notch")],ns.prototype,"notchElement",void 0),o([we({type:String})],ns.prototype,"value",void 0),o([we({type:String})],ns.prototype,"type",void 0),o([we({type:String})],ns.prototype,"placeholder",void 0),o([we({type:String}),Vt((function(e,t){void 0!==t&&this.label!==t&&this.layout()}))],ns.prototype,"label",void 0),o([we({type:String})],ns.prototype,"icon",void 0),o([we({type:String})],ns.prototype,"iconTrailing",void 0),o([we({type:Boolean,reflect:!0})],ns.prototype,"disabled",void 0),o([we({type:Boolean})],ns.prototype,"required",void 0),o([we({type:Number})],ns.prototype,"minLength",void 0),o([we({type:Number})],ns.prototype,"maxLength",void 0),o([we({type:Boolean,reflect:!0}),Vt((function(e,t){void 0!==t&&this.outlined!==t&&this.layout()}))],ns.prototype,"outlined",void 0),o([we({type:String})],ns.prototype,"helper",void 0),o([we({type:Boolean})],ns.prototype,"validateOnInitialRender",void 0),o([we({type:String})],ns.prototype,"validationMessage",void 0),o([we({type:Boolean})],ns.prototype,"autoValidate",void 0),o([we({type:String})],ns.prototype,"pattern",void 0),o([we({type:String})],ns.prototype,"min",void 0),o([we({type:String})],ns.prototype,"max",void 0),o([we({type:String})],ns.prototype,"step",void 0),o([we({type:Number})],ns.prototype,"size",void 0),o([we({type:Boolean})],ns.prototype,"helperPersistent",void 0),o([we({type:Boolean})],ns.prototype,"charCounter",void 0),o([we({type:Boolean})],ns.prototype,"endAligned",void 0),o([we({type:String})],ns.prototype,"prefix",void 0),o([we({type:String})],ns.prototype,"suffix",void 0),o([we({type:String})],ns.prototype,"name",void 0),o([we({type:String})],ns.prototype,"inputMode",void 0),o([we({type:Boolean})],ns.prototype,"readOnly",void 0),o([we({type:String})],ns.prototype,"autocapitalize",void 0),o([ke()],ns.prototype,"outlineOpen",void 0),o([ke()],ns.prototype,"outlineWidth",void 0),o([ke()],ns.prototype,"isUiValid",void 0),o([ke()],ns.prototype,"focused",void 0),o([Ee({passive:!0})],ns.prototype,"handleInputChange",null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const rs=ae`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field__input{direction:inherit}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let as=class extends ns{};function ss(e,t,i){return e<t?t:e>i?i:e}function ls(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))/2}as.styles=[rs],as=o([_e("mwc-textfield")],as),function(){let e;function t(t){return!!function(){if(void 0===e){e=!1;try{const t=Object.defineProperty({},"passive",{get:()=>{e=!0}});window.addEventListener("test",null,t)}catch(e){}}return e}()&&{passive:t}}function i(e,t=e,i=e){let o=e;if(t>i)throw new RangeError(`'min' ${t} should be lower than 'max' ${i}`);return e<t&&(o=t),e>i&&(o=i),o}function o(e,t,i){i?e.setAttribute(t,""):e.removeAttribute(t)}function n(e,t){return e.hasAttribute(t)}function r(e,t,i){e.setAttribute(t,i)}function a(e,t,i=0){const o=e.getAttribute(t);return null===o?i:parseInt(o,10)}function s(e){if("touchstart"===e.type||"touchmove"===e.type||"touchend"===e.type){const t=e.targetTouches[0]||e.changedTouches[0];return{x:t.clientX,y:t.clientY,id:t.identifier,event:e}}return{x:e.clientX,y:e.clientY,id:null,event:e}}const l=document.createElement("template");l.innerHTML='<style>:host{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;contain:content;-webkit-tap-highlight-color:rgba(0,0,0,0);--macro-carousel-gap:16px;--macro-carousel-background-color:transparent;--macro-carousel-slide-min-height:0px;--macro-carousel-slide-max-height:none;--macro-carousel-transition-duration:0.6s;--macro-carousel-transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94);--macro-carousel-pagination-gap:2px;--macro-carousel-pagination-height:44px;--macro-carousel-fallback-message-color-background:#fff;--macro-carousel__internal__slides-per-view:1}:host([hidden]){display:none}:host-context(.js-focus-visible) ::slotted(:focus:not(.focus-visible)),:host-context(.js-focus-visible) :focus:not(.focus-visible){outline:0}#externalWrapper{height:100%;overflow:hidden;contain:paint;background-color:var(--macro-carousel-background-color);-ms-touch-action:pan-y pinch-zoom;touch-action:pan-y pinch-zoom;cursor:-webkit-grab;cursor:grab}#externalWrapper:active{cursor:-webkit-grabbing;cursor:grabbing}:host([disable-drag]) #externalWrapper{cursor:default}#slidesWrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;min-height:var(--macro-carousel-slide-min-height);max-height:var(--macro-carousel-slide-max-height);will-change:transform}:host([transitioning]) #slidesWrapper{-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:var(--macro-carousel-transition-duration);transition-duration:var(--macro-carousel-transition-duration);-webkit-transition-timing-function:var(--macro-carousel-transition-timing-function);transition-timing-function:var(--macro-carousel-transition-timing-function)}#slidesWrapper ::slotted(*){-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-ms-flex-preferred-size:calc((100% - (var(--macro-carousel__internal__slides-per-view) - 1) * var(--macro-carousel-gap)) / var(--macro-carousel__internal__slides-per-view));flex-basis:calc((100% - (var(--macro-carousel__internal__slides-per-view) - 1) * var(--macro-carousel-gap)) / var(--macro-carousel__internal__slides-per-view));min-height:var(--macro-carousel-slide-min-height);max-height:var(--macro-carousel-slide-max-height);margin-right:var(--macro-carousel-gap);overflow:hidden;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.slidesFallback{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:.5em 1em;width:100%;background-color:var(--macro-carousel-fallback-message-color-background)}:host([disable-drag]) #slidesWrapper ::slotted(*){-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}#pagination{display:none}:host([pagination]) #pagination{-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:var(--macro-carousel-pagination-height);contain:strict;font-size:0}div ::slotted(macro-carousel-pagination-indicator){margin:0 calc(var(--macro-carousel-pagination-gap) / 2);padding:0;font-size:inherit;opacity:.8}div ::slotted(macro-carousel-pagination-indicator.selected),div ::slotted(macro-carousel-pagination-indicator:hover){opacity:1}#navigation{display:none}:host([navigation]) #navigation{display:block}div ::slotted(macro-carousel-nav-button){position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host([pagination]) div ::slotted(macro-carousel-nav-button){top:calc(50% - var(--macro-carousel-pagination-height) / 2)}div ::slotted(.macro-carousel-previous){left:0}div ::slotted(.macro-carousel-next){right:0}#aria-live ::slotted(*){position:absolute;height:1px;width:1px;margin:-1px;padding:0;clip:rect(0 0 0 0);overflow:hidden;border:0}@media print{#slidesWrapper ::slotted(*){margin-right:0;margin-bottom:.2em;outline:1px solid #000;color:#000;page-break-inside:avoid}:host([navigation]) #navigation,:host([pagination]) #pagination{display:none}#slidesWrapper{display:block;-webkit-transform:none!important;transform:none!important;-webkit-transition:0s;transition:0s}}</style> <div id="externalWrapper"> <div id="slidesWrapper"> <slot id="slidesSlot"> <p class="slidesFallback">No content available</p> </slot> </div> </div> <div id="navigation"> <slot id="navigationSlot" name="navigationSlot"></slot> </div> <div id="pagination"> <slot id="paginationSlot" name="paginationSlot"></slot> </div> <div id="aria-live"> <slot id="ariaSlot" name="ariaSlot"></slot> </div> ',window.ShadyCSS&&window.ShadyCSS.prepareTemplate(l,"macro-carousel");const c=Math.abs((35,Math.round(100*Math.tan(35*Math.PI/180))/100));window.customElements.define("macro-carousel",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(l.content.cloneNode(!0)),this.t=this.shadowRoot.querySelector("#externalWrapper"),this.i=this.shadowRoot.querySelector("#slidesWrapper"),this.s=this.shadowRoot.querySelector("#slidesSlot"),this.e=this.shadowRoot.querySelector("#ariaSlot"),this.o=this.shadowRoot.querySelector("#paginationSlot"),this.a=[],this.n=this.shadowRoot.querySelector("#navigationSlot"),this.r=void 0,this.h=void 0,this.c=[],this.l=-1,this.d=!1,this.u=0,this.m=0,this.g=0,this.p=0,this.b=0,this.v=0,this.w=void 0,this.f=!1,this.k=!1,this._=void 0,this.S=void 0,this.z=void 0,this.M=void 0,this.C=void 0,this.W=void 0,this.P=void 0,this.L=void 0,this.G=[],this.F=!1,this.I=50,this.$=20,this.A=.7,this.D=.04,this.T=0,this.N=!1}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this.hasAttribute("role")||this.setAttribute("role","list"),this.j("selected"),this.j("loop"),this.j("navigation"),this.j("pagination"),this.j("disableDrag"),this.j("slidesPerView"),this.j("reducedMotion"),this.j("autoFocus"),this.m=this.selected,this.O(),this.s.addEventListener("slotchange",this),window.addEventListener("resize",this,t(!0)),this.addEventListener("keydown",this),window.addEventListener("touchmove",(function(){})),this.q()}disconnectedCallback(){this.s.removeEventListener("slotchange",this),window.removeEventListener("resize",this),this.disableDrag||(this.t.removeEventListener("touchstart",this),this.t.removeEventListener("mousedown",this)),this.navigation&&(this.r.removeEventListener("macro-carousel-nav-button-clicked",this),this.h.removeEventListener("macro-carousel-nav-button-clicked",this)),this.pagination&&this.a.forEach((e=>{e.removeEventListener("macro-carousel-pagination-indicator-clicked",this)}))}handleEvent(e){"resize"===e.type&&e.target===window?(this.B(),this.update()):"slotchange"===e.type&&e.target===this.s?this.q():"macro-carousel-pagination-indicator-clicked"===e.type&&this.pagination?this.V(e):"macro-carousel-nav-button-clicked"===e.type&&this.navigation?e.target===this.r?this.previous():e.target===this.h&&this.next():"keydown"===e.type?37===e.keyCode||38===e.keyCode?this.previous():39!==e.keyCode&&40!==e.keyCode||this.next():"transitionend"===e.type&&e.target===this.i?(this.H(),this.R(),this.X()):"touchstart"===e.type||"mousedown"===e.type?this.Y(s(e)):"touchmove"===e.type||"mousemove"===e.type?this.U(s(e)):"touchend"===e.type||"mouseup"===e.type?this.J(s(e)):"touchcancel"===e.type&&this.K()}j(e){if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this[e]=t}}update(){clearTimeout(this.w),this.B(),this.w=setTimeout((()=>{this.Q()}),50)}Q(){this.Z(),this.tt(),this.it(),this.st(this.c.map((e=>e.layoutIndex)),!0),this.et(this.selected),this.ot(),this.at(),this.nt(),this.H(),this.X(),this.O()}previous(){this.selected=this.rt(this.selected)}rt(e){let t=e;return e>0?t=e-1:this.loop&&(this.d&&(this.u-=1),t=this.l),i(t,0,this.l)}next(){this.selected=this.ht(this.selected)}ht(e){let t=e;return e<this.l?t=e+1:this.loop&&(this.d&&(this.u+=1),t=0),i(t,0,this.l)}static get observedAttributes(){return["selected","loop","navigation","pagination","disable-drag","slides-per-view","reduced-motion","auto-focus"]}attributeChangedCallback(e,t,i){switch(0===this.c.length&&this.q(),e){case"selected":const e=parseInt(i,10);if(!Number.isFinite(e)||e>this.l||e<0)return void(this.selected=t||0);if(this.d){const e=this.selected+this.u*(this.l+1),t=this.m-e,i=[],o=t<0?this.slidesPerView+t:0;for(let n=-1;n<Math.abs(t);n++)i.push(n+e+o);this.st(i),this.m=e}this.et(this.selected),this.ot(),this.at(),this.dispatchEvent(new CustomEvent("macro-carousel-selected-changed",{detail:this.selected,bubbles:!0})),this.f||this.N||(this.H(),this.R(),this.X());break;case"loop":this.tt(),this.it(),this.st(this.c.map(((e,t)=>t))),this.at(),this.ot(),this.H(),this.R(),this.X(),window.ShadyCSS&&window.ShadyCSS.styleSubtree(this);break;case"navigation":this.update(),window.ShadyCSS&&window.ShadyCSS.styleSubtree(this);break;case"pagination":this.ot(),window.ShadyCSS&&window.ShadyCSS.styleSubtree(this);break;case"disable-drag":this.nt();break;case"slides-per-view":const o=parseInt(i,10);if(!Number.isFinite(o)||o<1||o>this.c.length)return void(this.slidesPerView=t||1);this.update(),window.ShadyCSS&&window.ShadyCSS.styleSubtree(this);break;case"reduced-motion":null!==i?this.B():this.O()}}set selected(e){r(this,"selected",e)}get selected(){return a(this,"selected")}set loop(e){o(this,"loop",e)}get loop(){return n(this,"loop")}set navigation(e){o(this,"navigation",e)}get navigation(){return n(this,"navigation")}set pagination(e){o(this,"pagination",e)}get pagination(){return n(this,"pagination")}set disableDrag(e){o(this,"disable-drag",e)}get disableDrag(){return n(this,"disable-drag")}set slidesPerView(e){r(this,"slides-per-view",e)}get slidesPerView(){return a(this,"slides-per-view",1)}set reducedMotion(e){o(this,"reduced-motion",e)}get reducedMotion(){return n(this,"reduced-motion")}set autoFocus(e){o(this,"auto-focus",e)}get autoFocus(){return n(this,"auto-focus")}B(){this.f=!1,this.removeAttribute("transitioning"),this.i.removeEventListener("transitionend",this,!1)}O(){this.reducedMotion||requestAnimationFrame((()=>{requestAnimationFrame((()=>{this.f=!0,this.setAttribute("transitioning",""),this.i.addEventListener("transitionend",this,!1)}))}))}Z(){this.g=this.i.getBoundingClientRect().width,this.p=this.ct(),this.b=this.lt()}lt(){return(this.g-(this.slidesPerView-1)*this.p)/this.slidesPerView}ct(){/\d$/.test(function(e,t){const i=getComputedStyle(e);return String(i.getPropertyValue("--macro-carousel-gap")).trim()}(this))&&console.warn("Warning: it looks like --macro-carousel-gap has a unitless value.\nAdd CSS units to its value to avoid breaking the slides layout.");const e=parseInt(getComputedStyle(this.c[0].element)["margin-right"],10);return Number.isFinite(e)?e:0}it(){var e,t;e="--macro-carousel__internal__slides-per-view",t=`${this.slidesPerView}`,this.style.setProperty(e,t),window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,{[e]:t}),this.l=this.d?this.c.length-1:this.dt(),!this.d&&this.selected>this.l&&(this.selected=this.l)}dt(){return Math.max(0,this.c.length-this.slidesPerView)}ut(e){let t=e;for(;t<0;)t+=this.c.length;return t%this.c.length}st(e,t=!1){let i;e.forEach((e=>{!t&&this.c.find((t=>t.layoutIndex===e))||(i=this.ut(e),this.c[i].layoutIndex=e,this.c[i].position=this.mt(e),this.c[i].element.style.transform=`translateX(${this.mt(i-e)}px)`)}))}mt(e){return-e*(this.b+this.p)}gt(e){this.i.style.transform=`translate3d(${e}px, 0, 0)`,this.v=e}et(e){this.i&&!this.N&&this.gt(this.c[e].position)}R(){this.autoFocus&&this.c[this.selected].element.focus()}H(){const e=[];for(let t=0;t<this.slidesPerView;t++)e.push((this.selected+t)%this.c.length);let t;this.c.map((e=>e.element)).forEach(((i,o)=>{t=void 0!==e.find((e=>e===o)),i.setAttribute("aria-hidden",t?"false":"true"),t?(i.removeAttribute("inert"),i.setAttribute("tabindex",-1)):i.setAttribute("inert","")}))}ot(){if((!this.pagination||this.pagination&&this.o.assignedNodes().length!==this.l+1)&&(this.a.forEach((e=>{e.removeEventListener("macro-carousel-pagination-indicator-clicked",this),this.removeChild(e)})),this.a.length=0),this.pagination){if(this.o.assignedNodes().length!==this.l+1){const e=document.createDocumentFragment();for(let t=0;t<=this.l;t++){const i=document.createElement("macro-carousel-pagination-indicator");i.textContent=t,i.setAttribute("slot","paginationSlot"),i.setAttribute("aria-label",`Go to item ${t+1}`),i.addEventListener("macro-carousel-pagination-indicator-clicked",this),e.appendChild(i),this.a.push(i)}this.appendChild(e)}this.a.forEach(((e,t)=>{t===this.selected?e.classList.add("selected"):e.classList.remove("selected")}))}}V(e){this.selected=parseInt(e.target.textContent,10)}pt(e){const t=document.createElement("macro-carousel-nav-button");return t.classList.add(e),t.setAttribute("slot","navigationSlot"),t.addEventListener("macro-carousel-nav-button-clicked",this),/next/.test(e)&&t.setAttribute("flipped",""),t}at(){(!this.navigation||this.navigation&&2!==this.n.assignedNodes().length)&&(this.n.assignedNodes().forEach((e=>{e.removeEventListener("macro-carousel-nav-button-clicked",this),this.removeChild(e)})),this.r=void 0,this.h=void 0),this.navigation&&(2!==this.n.assignedNodes().length&&(this.r=this.pt("macro-carousel-previous"),this.appendChild(this.r),this.h=this.pt("macro-carousel-next"),this.appendChild(this.h)),this.r.disabled=!this.loop&&0===this.selected,this.h.disabled=!this.loop&&this.selected===this.l,this.r.setAttribute("aria-label",`Go to ${this.loop&&0===this.selected?"last":"previous"} item`),this.h.setAttribute("aria-label",`Go to ${this.loop&&this.selected===this.l?"first":"next"} item`))}tt(){this.d=this.loop&&this.dt()>1}bt(){return this.s.assignedNodes({flatten:!0}).forEach((e=>{e.nodeType===Node.TEXT_NODE&&e.parentNode&&e.parentNode.removeChild(e)})),this.s.assignedNodes({flatten:!0}).filter((e=>e.nodeType===Node.ELEMENT_NODE)).map(((e,t)=>({element:e,layoutIndex:t,position:this.mt(t)})))||[]}q(){this.c=this.bt(),this.c.forEach((e=>{e.element.hasAttribute("tabindex")||e.element.setAttribute("tabindex",-1),"list"===this.getAttribute("role")&&e.element.setAttribute("role","listitem")}));const e=this.c.length>0&&-1===this.l;this.Q(),e&&(this.selected=this.selected)}X(){1!==this.e.assignedNodes().length&&(this.vt=document.createElement("div"),this.vt.setAttribute("slot","ariaSlot"),this.vt.setAttribute("aria-live","polite"),this.vt.setAttribute("aria-atomic","true"),this.appendChild(this.vt));const e=this.c[this.selected].layoutIndex;let t="";for(let i=0;i<this.slidesPerView;i++)t+=(e+i)%this.c.length+1,i<this.slidesPerView-2?t+=", ":i<this.slidesPerView-1&&(t+=" and ");this.vt.textContent=`Item${this.slidesPerView>1?"s":""} ${t} of ${this.c.length} visible`}nt(){this.disableDrag?(this.t.removeEventListener("touchstart",this),this.t.removeEventListener("mousedown",this)):(this.t.addEventListener("touchstart",this,t(!0)),this.t.addEventListener("mousedown",this,t(!0)))}Y(e){this.k||(this.N=!1,this.k=!0,this._=e.id,this.S=this.M=this.W=e.x,this.z=this.C=this.P=e.y,this.L=this.c[this.selected].layoutIndex,this.G=[],this.wt(this.M),window.addEventListener("touchmove",this,t(!1)),window.addEventListener("mousemove",this,t(!1)),window.addEventListener("mouseup",this),window.addEventListener("touchend",this),window.addEventListener("touchcancel",this))}U(e){if(this.k&&e.id===this._){this.W=e.x,this.P=e.y;const t=Math.abs(this.W-this.S),i=Math.abs(this.P-this.z);t/i>c||0===i||i>t&&i-t<5?(e.event.preventDefault(),this.wt(this.M),this.B(),this.ft()):this.K()}}J(e){this.k&&e.id===this._&&this.K()}K(){this.k=!1,this._=void 0,this.wt(this.M),window.removeEventListener("touchmove",this),window.removeEventListener("mousemove",this),window.removeEventListener("touchend",this),window.removeEventListener("mouseup",this),window.removeEventListener("touchcancel",this),this.kt()}wt(e){const t=Date.now();for(;this.G.length>0&&!(t-this.G[0].time<=100);)this.G.shift();this.G.push({x:e,time:t})}ft(){this.F||requestAnimationFrame(this.xt.bind(this)),this.F=!0}xt(){const e=this.v+this.W-this.M;let t,i;if(this.c.forEach(((o,n)=>{o.position>=e&&(void 0===i||o.position<i)&&(i=o.position,t=n)})),this.d){let e;if(void 0===t){const i=this.c.slice(0).sort(((e,t)=>e.layoutIndex>t.layoutIndex))[0];for(t=i.layoutIndex-1;t<0;)t+=this.c.length;t%=this.c.length,e=i.layoutIndex-2}else e=this.c[t].layoutIndex-1;const i=[],o=e+this.slidesPerView+2;for(let t=e;t<o;t++)i.push(t);this.st(i)}else t=t||0;this.L=this.c[t].layoutIndex,this.gt(e),this.M=this.W,this.C=this.P,this.F=!1}kt(){this.N=!0;const e=this.G[this.G.length-1],t=this.G[0],o=e.x-t.x||0;this.u=Math.floor(this.L/this.c.length);const n=this.ut(this.L);let r;if(0===o)this.T=0,r=this.c[n].position-this.v>this.b/2?this.ht(n):n;else{this.T=function(e,t,o){if(0===e)throw new RangeError("x must be different from `0`");return e/Math.abs(e)*i(Math.abs(e),t,o)}(o,this.$,this.I);let e=1;const t=.5*this.g;for(;Math.abs(o)>t*e&&e<this.slidesPerView+2;)e+=1;o>0&&(e-=1);let a=n;for(let t=0;t<e;t++)a=o<0?this.ht(a):this.rt(a);r=a}this.selected=i(r,0,this.l),requestAnimationFrame(this.yt.bind(this))}yt(){if(!this.N)return;const e=this.c[this.selected].position;this.T+=this.D*(e-this.v),this.T*=this.A;const t=this.v+this.T;(Math.abs(e-t)>=1||Math.abs(this.T)>=1)&&!this.reducedMotion?(this.gt(t),requestAnimationFrame(this.yt.bind(this))):(this.gt(e),this.N=!1,this.O(),requestAnimationFrame((()=>{this.H(),this.R(),this.X()})))}});class d extends HTMLElement{constructor(){super();const e=Object.getPrototypeOf(this).constructor.template;this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(e.content.cloneNode(!0))}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this._t=0,this.hasAttribute("role")||this.setAttribute("role","button"),this.hasAttribute("tabindex")?this._t=this.getAttribute("tabindex"):this.setAttribute("tabindex",this._t),this.j("disabled"),this.addEventListener("keydown",this),this.addEventListener("click",this)}j(e){if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this[e]=t}}static get observedAttributes(){return["disabled"]}set disabled(e){o(this,"disabled",e)}get disabled(){return n(this,"disabled")}attributeChangedCallback(e,t,i){switch(e){case"disabled":if(t===i)return;this.disabled?(this._t=this.getAttribute("tabindex"),this.removeAttribute("tabindex"),this.setAttribute("aria-disabled","true")):(this.setAttribute("tabindex",this._t),this.setAttribute("aria-disabled","false"))}}handleEvent(e){this.disabled?e.preventDefault():"click"===e.type?this.St&&this.St():"keydown"!==e.type||32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),this.St&&this.St())}}const p=document.createElement("template");p.innerHTML='<style>:host{--macro-carousel-navigation-color:#000;--macro-carousel-navigation-color-focus:var(--macro-carousel-navigation-color);--macro-carousel-navigation-color-background:transparent;--macro-carousel-navigation-color-background-focus:#f0f0f0;--macro-carousel-navigation-button-size:48px;--macro-carousel-navigation-icon-size:24px;--macro-carousel-navigation-icon-mask:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\'/%3E%3C/svg%3E");position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;min-width:var(--macro-carousel-navigation-button-size);min-height:var(--macro-carousel-navigation-button-size);border-radius:50%;overflow:hidden;cursor:pointer;contain:paint}:host([disabled]){opacity:.2}.bg,.content{position:absolute;top:0;right:0;bottom:0;left:0}.content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:var(--macro-carousel-navigation-color-background)}.bg{z-index:0;background-color:var(--macro-carousel-navigation-color-background-focus);opacity:0;will-change:opacity}.icon{position:relative;z-index:1;width:var(--macro-carousel-navigation-icon-size);height:var(--macro-carousel-navigation-icon-size);color:var(--macro-carousel-navigation-color);background:var(--macro-carousel-navigation-icon-mask)}@supports ((-webkit-mask-image:var(--macro-carousel-navigation-icon-mask)) or (mask-image:var(--macro-carousel-navigation-icon-mask))){.icon{background:var(--macro-carousel-navigation-color);-webkit-mask-image:var(--macro-carousel-navigation-icon-mask);mask-image:var(--macro-carousel-navigation-icon-mask)}}:host([flipped]) .icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.focus-visible) .bg,:host(:active:not([disabled])) .bg,:host(:focus:not([disabled])) .bg,:host(:hover:not([disabled])) .bg{opacity:1}:host-context(.js-focus-visible):host(:focus:not(:active):not(:hover):not(.focus-visible)) .bg{opacity:0}@supports ((-webkit-mask-image:var(--macro-carousel-navigation-icon-mask)) or (mask-image:var(--macro-carousel-navigation-icon-mask))){:host(.focus-visible) .icon,:host(:active:not([disabled])) .icon,:host(:focus:not([disabled])) .icon,:host(:hover:not([disabled])) .icon{background:var(--macro-carousel-navigation-color-focus)}:host-context(.js-focus-visible):host(:focus:not(:active):not(:hover):not(.focus-visible)) .icon{background:var(--macro-carousel-navigation-color)}}</style> <div class="content"> <div class="bg"></div> <div class="icon"></div> </div> ',window.ShadyCSS&&window.ShadyCSS.prepareTemplate(p,"macro-carousel-nav-button"),window.customElements.define("macro-carousel-nav-button",class extends d{static get template(){return p}St(){this.dispatchEvent(new CustomEvent("macro-carousel-nav-button-clicked"))}});const h=document.createElement("template");h.innerHTML='<style>:host{--macro-carousel-pagination-color:#999;--macro-carousel-pagination-color-selected:#000;--macro-carousel-pagination-size-clickable:24px;--macro-carousel-pagination-size-dot:8px;--macro-carousel-pagination-border:1px solid var(--macro-carousel-pagination-color);--macro-carousel-pagination-border-selected:1px solid var(--macro-carousel-pagination-color-selected);position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:var(--macro-carousel-pagination-size-clickable);height:var(--macro-carousel-pagination-size-clickable);overflow:hidden;cursor:pointer;contain:paint}.bg,.fg,:host{border-radius:50%}.bg,.fg{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:block;width:var(--macro-carousel-pagination-size-dot);height:var(--macro-carousel-pagination-size-dot);-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--macro-carousel-pagination-color);content:""}.bg{-webkit-transform:translate(-50%,-50%) scale(2);transform:translate(-50%,-50%) scale(2);opacity:0;will-change:opacity}.fg{border:var(--macro-carousel-pagination-border)}:host(.focus-visible) .bg,:host(:hover) .bg{opacity:.2}:host(.selected) .fg{background-color:var(--macro-carousel-pagination-color-selected);border:var(--macro-carousel-pagination-border-selected)}</style> <div class="bg"></div> <div class="fg"></div> ',window.ShadyCSS&&window.ShadyCSS.prepareTemplate(h,"macro-carousel-pagination-indicator"),window.customElements.define("macro-carousel-pagination-indicator",class extends d{static get template(){return h}St(){this.dispatchEvent(new CustomEvent("macro-carousel-pagination-indicator-clicked"))}})}();var cs;!function(e){e.INDETERMINATE="indeterminate",e.DETERMINATE="determinate"}(cs||(cs={}));class ds extends ea{constructor(){super(...arguments),this.mode=cs.INDETERMINATE,this.value=0,this.max=1,this.min=0,this.buffer=0,this.bufferMax=1,this.bufferMin=0,this.role="progressbar"}get progressPerc(){return ss(this.value/(this.max-this.min),0,1)}get bufferPerc(){return ss(this.buffer/(this.bufferMax-this.bufferMin),0,1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role",this.role)}updateAria(){ia(this,{"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.value,"aria-valuetext":100*this.progressPerc+"%","aria-busy":"true","aria-live":"polite"})}updated(e){super.updated(e),this.updateAria()}}ds.styles=[Ma,ta("")],o([Vr({type:String,reflect:!0}),n("design:type",String)],ds.prototype,"mode",void 0),o([Vr({type:Number}),n("design:type",Number)],ds.prototype,"value",void 0),o([Vr({type:Number}),n("design:type",Number)],ds.prototype,"max",void 0),o([Vr({type:Number}),n("design:type",Number)],ds.prototype,"min",void 0),o([Vr({type:Number}),n("design:type",Number)],ds.prototype,"buffer",void 0),o([Vr({type:Number}),n("design:type",Number)],ds.prototype,"bufferMax",void 0),o([Vr({type:Number}),n("design:type",Number)],ds.prototype,"bufferMin",void 0),o([Vr({type:String,reflect:!0}),n("design:type",String)],ds.prototype,"role",void 0);let ps=class extends ds{render(){return $r`
			<svg focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100">
				${this.bufferPerc>0?Rr`<circle id="buffer" cx="50%" cy="50%" r="45" fill="transparent" style="stroke-dashoffset: ${285-285*this.bufferPerc}px"></circle>`:""}
				<circle
					id="progress"
					cx="50%"
					cy="50%"
					r="45"
					fill="transparent"
					style="${this.mode===cs.DETERMINATE?`stroke-dashoffset: ${285-285*this.progressPerc}px;`:""}"
				></circle>
			</svg>
		`}};ps.styles=[...ds.styles,ta(":host{width:var(--progress-spinner-size,3rem);height:var(--progress-spinner-size,3rem);contain:strict;position:relative;display:inline-block}svg{width:100%;height:100%;position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center center;overflow:visible}#buffer,#progress{stroke-width:var(--progress-spinner-stroke-width,10%);stroke-dasharray:285px;transition-property:stroke;transform-origin:center}#buffer{stroke:var(--progress-spinner-buffer-color,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.2))}#progress{stroke:var(--progress-spinner-color,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}:host([mode=indeterminate]) svg{animation:rotate var(--progress-spinner-indeterminate-container-duration,2s) linear infinite}:host([mode=indeterminate]) #progress{animation-duration:var(--progress-spinner-indeterminate-progress-duration,4s);animation-timing-function:var(--progress-spinner-indeterminate-timing-function,var(--transition-timing-function-standard-curve,cubic-bezier(.4,0,.2,1)));animation-iteration-count:infinite;animation-name:indeterminate}#buffer,:host([mode=determinate]) #progress{transition:var(--progress-spinner-determinate-progress-transition,stroke-dashoffset var(--transition-timing-function-linear,linear))}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes indeterminate{0%{stroke-dashoffset:268px;transform:rotate(0)}12.5%{stroke-dashoffset:56px;transform:rotate(0)}12.5001%{stroke-dashoffset:56px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56px;transform:rotateX(180deg) rotate(341.5deg)}to{stroke-dashoffset:268px;transform:rotateX(180deg) rotate(341.5deg)}}")],ps=o([Hr("wl-progress-spinner")],ps);
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */
let hs=class extends ye{constructor(){super(),this.active=!1}static get styles(){return[ae`
        wl-progress-spinner {
          --progress-spinner-size: 48px;
          --progress-spinner-stroke-width: 12px;
          width: 48px;
          height: 48px;
          position: fixed;
          bottom: 60px;
          right: 60px;
        }
      `]}render(){return z`
      <wl-progress-spinner id="spinner"></wl-progress-spinner>
    `}shouldUpdate(){return this.active}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#spinner"),this.active=!0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}async show(){this.active=!0,await this.updateComplete,this.spinner.style.display="block"}async hide(){this.active=!0,await this.updateComplete,this.spinner.style.display="none",this.active=!1}async toggle(){await this.updateComplete,!0===this.spinner.active?(this.active=!0,this.spinner.style.display="none",this.active=!1):(this.active=!0,this.spinner.style.display="block")}};o([we({type:Object})],hs.prototype,"spinner",void 0),o([we({type:Boolean})],hs.prototype,"active",void 0),hs=o([_e("lablup-loading-spinner")],hs);const us={easing:"ease-out",fill:"both"};let ms=class extends ea{constructor(){super(...arguments),this.unbounded=!1,this.centered=!1,this.overlay=!1,this.disabled=!1,this.focusable=!1,this.autoRelease=!1,this.initialDuration=350,this.releaseDuration=500,this.role="presentation",this.target=this,this.listeners=[],this.rippleAnimationListeners=[]}connectedCallback(){super.connectedCallback(),this.addListeners()}disconnectedCallback(){super.disconnectedCallback(),this.removeListeners()}updated(e){super.updated(e),e.has("target")&&null!=this.target&&(this.removeListeners(),this.addListeners())}addListeners(){null!=this.target&&this.listeners.push(pa(this.target,"mousedown",(e=>this.spawnRipple(e)),{passive:!0}),pa(this.target,"focusin",this.onFocusIn.bind(this),{passive:!0}),pa(this.target,"focusout",this.onFocusOut.bind(this),{passive:!0}))}removeListeners(){ha(this.listeners)}spawnRipple(e,t){if(this.disabled)return()=>{};this.releaseRipple();const i=this.getBoundingClientRect();let o=0,n=0;if(this.centered||null==e)o=i.width/2,n=i.height/2;else{let{clientX:t,clientY:r}=function(e){let t,i=!1;null!=e.changedTouches?(t=e.changedTouches[0],i=!0):t=e;let{clientX:o,clientY:n,pageX:r,pageY:a}=t;return{clientX:o,clientY:n,pageX:r,pageY:a,isTouch:i}}(e);o=t-i.left,n=r-i.top}const r=this.showRippleAtCoords({x:o,y:n},t);return this.rippleAnimationListeners.push(r),null==this.target||this.focusable||this.rippleAnimationListeners.push(pa(window,"mouseup",this.releaseRipple.bind(this),{passive:!0})),r}releaseRipple(){ha(this.rippleAnimationListeners)}showRippleAtCoords({x:e,y:t},i){const{offsetWidth:o,offsetHeight:n}=this,r=ba(window.getComputedStyle(this)),{releaseDuration:a=this.releaseDuration,initialDuration:s=this.initialDuration,autoRelease:l=this.autoRelease}=i||{};e*=0===r.x?1:1/r.x,t*=0===r.y?1:1/r.y;const c=document.createElement("div");c.classList.add("ripple");const d=ls(o,n),p=ls(Math.abs(o/2-e),Math.abs(n/2-t)),h=Math.round(d+2*p),u=2*h;Object.assign(c.style,{left:e-h+"px",top:t-h+"px",height:`${u}px`,width:`${u}px`,position:"absolute"});let m=!1;const g=()=>{if(m)return;m=!0;const e=ya(window.getComputedStyle(c));c.animate({opacity:[e.toString(),"0"]},{...us,duration:a}).onfinish=()=>{requestAnimationFrame((()=>{this.shadowRoot.contains(c)&&this.shadowRoot.removeChild(c)}))}};return this.shadowRoot.appendChild(c),l&&g(),c.animate({transform:["scale(0)","scale(1)"]},{...us,duration:s}),g}onFocusIn(){this.focusable&&this.spawnRipple(void 0,{autoRelease:!1})}onFocusOut(){this.focusable&&this.releaseRipple()}render(){return $r``}};ms.styles=[Ma,ta(":host{position:relative;display:block;outline:none;-webkit-user-select:none;user-select:none}:host(:not([unbounded])){overflow:hidden}:host([overlay]){position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%)}.ripple{background:var(--ripple-color,currentcolor);opacity:var(--ripple-opacity,.15);border-radius:100%;pointer-events:none;will-change:opacity,transform}")],o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],ms.prototype,"unbounded",void 0),o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],ms.prototype,"centered",void 0),o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],ms.prototype,"overlay",void 0),o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],ms.prototype,"disabled",void 0),o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],ms.prototype,"focusable",void 0),o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],ms.prototype,"autoRelease",void 0),o([Vr({type:Number}),n("design:type",Number)],ms.prototype,"initialDuration",void 0),o([Vr({type:Number}),n("design:type",Number)],ms.prototype,"releaseDuration",void 0),o([Vr({type:String,reflect:!0}),n("design:type",String)],ms.prototype,"role",void 0),o([Vr({type:Object}),n("design:type",EventTarget)],ms.prototype,"target",void 0),ms=o([Hr("wl-ripple")],ms);
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
const gs=new WeakMap,fs=(e=>(...t)=>{const i=e(...t);return sr.set(i,!0),i})((e=>t=>{const i=gs.get(t);if(void 0===e&&t instanceof vr){if(void 0!==i||!gs.has(t)){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else e!==i&&t.setValue(e);gs.set(t,e)}));class bs extends ea{constructor(){super(...arguments),this.disabled=!1,this.readonly=!1,this.required=!1,this.value="",this.formElementId=Ia(),this.listeners=[]}get validationMessage(){return this.$formElement.validationMessage}get valid(){return null==this.validity||this.validity.valid}get validity(){return this.$formElement.validity}get willValidate(){return this.$formElement.willValidate}get form(){return this.$formElement.form}checkValidity(){return this.$formElement.checkValidity()}setCustomValidity(e){return this.$formElement.setCustomValidity(e)}firstUpdated(e){super.firstUpdated(e),this.$formElement=this.queryFormElement(),this.appendChild(this.$formElement)}disconnectedCallback(){super.disconnectedCallback(),ha(this.listeners)}updated(e){super.updated(e),e.has("disabled")&&ia(this,{"aria-disabled":this.disabled.toString()}),this.updateTabindex(e)}updateTabindex(e){e.has("disabled")&&Gn(this,this.disabled)}getFormItemValue(){return null!=this.$formElement?this.$formElement.value:this.initialValue||""}queryFormElement(){return this.shadowRoot.querySelector(`#${this.formElementId}`)}}bs.styles=[Ma,ta("")],o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],bs.prototype,"disabled",void 0),o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],bs.prototype,"readonly",void 0),o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],bs.prototype,"required",void 0),o([Vr({type:String}),n("design:type",String)],bs.prototype,"name",void 0),o([Vr({type:String}),n("design:type",String)],bs.prototype,"value",void 0);class ys extends bs{constructor(){super(...arguments),this.type="submit"}connectedCallback(){super.connectedCallback(),this.listeners.push(pa(this,"click",this.onClick.bind(this)),pa(this,"keydown",this.onKeyDown.bind(this)))}onKeyDown(e){e instanceof KeyboardEvent&&("Enter"===e.code||"Space"===e.code)&&(this.click(),ua(e),null!=this.$ripple&&this.$ripple.spawnRipple(void 0,{autoRelease:!0}))}onClick(e){this.disabled?ua(e):e.target!=this||e.defaultPrevented||this.$formElement.dispatchEvent(new MouseEvent("click",{relatedTarget:this,composed:!0}))}renderFormElement(){return $r` <button style="display: none;" id="${this.formElementId}" aria-hidden="true" tabindex="-1" type="${this.type}" ?disabled="${this.disabled}" name="${fs(this.name)}" value="${fs(this.value)}"></button> `}}ys.styles=[...bs.styles,ta("")],o([Vr({type:String}),n("design:type",String)],ys.prototype,"type",void 0);let vs=class extends ys{constructor(){super(...arguments),this.inverted=!1,this.fab=!1,this.outlined=!1,this.noRipple=!1,this.flat=!1,this.role="button"}render(){return $r` <wl-ripple id="ripple" overlay .target="${this}" ?disabled="${this.disabled||this.noRipple}"></wl-ripple> <slot></slot> ${this.renderFormElement()} `}};vs.styles=[...ys.styles,ta(':host{--_button-color:var(--button-color,hsl(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));--_button-bg:var(--button-bg,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_button-shadow-color:var(--button-shadow-color,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.2));color:var(--_button-color);background:var(--_button-bg);box-shadow:var(--elevation-1,0 .3125rem .625rem -.125rem var(--_button-shadow-color));padding:var(--button-padding,.75rem 1.5rem);font-size:var(--button-font-size,1rem);border-radius:var(--button-border-radius,.5rem);font-family:var(--button-font-family,var(--font-family-sans-serif,"Roboto Condensed",helvetica,sans-serif));transition:var(--button-transition,box-shadow var(--transition-duration-slow,.25s) var(--transition-timing-function-ease,ease),background var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease),color var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease));letter-spacing:var(--button-letter-spacing,.125rem);line-height:1;text-transform:uppercase;cursor:pointer;text-align:center;-webkit-user-select:none;user-select:none;outline:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;z-index:0}:host,:host([fab]){display:inline-flex;align-items:center;justify-content:center}:host([fab]){width:var(--button-fab-size,2.5rem);height:var(--button-fab-size,2.5rem);padding:0;letter-spacing:0;border-radius:100%}:host([inverted]){color:var(--_button-bg);background:var(--_button-color)}:host([outlined]){border:var(--button-border-outlined,.125rem solid currentColor)}:host(:focus),:host(:hover){--_button-color:var(--button-color-hover,hsl(var(--primary-400-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));--_button-bg:var(--button-bg-hover,hsl(var(--primary-400,var(--primary-hue,224),var(--primary-saturation,42%),var(--primary-lightness,52%))));--_button-shadow-color:var(--button-shadow-color-hover,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.5));will-change:background,color,box-shadow}:host(:active){--_button-color:var(--button-color-active,hsl(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));--_button-bg:var(--button-bg-active,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));box-shadow:var(--elevation-4,0 .5rem 1rem -.125rem var(--_button-shadow-color))}:host([flat]:focus){background:var(--button-bg-active-flat,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.08))}:host([disabled]){--_button-color:var(--button-color-disabled,hsl(var(--shade-400-contrast,var(--shade-hue-contrast,0),var(--shade-saturation-contrast,100%),var(--shade-lightness-contrast,100%))));--_button-bg:var(--button-bg-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));box-shadow:none;cursor:default;pointer-events:none}:host([flat]){box-shadow:none;background:none}#ripple{z-index:-1}')],o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],vs.prototype,"inverted",void 0),o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],vs.prototype,"fab",void 0),o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],vs.prototype,"outlined",void 0),o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],vs.prototype,"noRipple",void 0),o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],vs.prototype,"flat",void 0),o([Vr({type:String,reflect:!0}),n("design:type",String)],vs.prototype,"role",void 0),o([Wr("#ripple"),n("design:type",ms)],vs.prototype,"$ripple",void 0),vs=o([Hr("wl-button")],vs);let _s=class extends ea{constructor(){super(...arguments),this.role="presentation"}render(){return $r` <slot></slot> `}};_s.styles=[ta(':host{font-size:var(--icon-size,1.5em);font-family:var(--icon-font,"Material Icons");font-weight:400;font-style:normal;color:inherit;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}'),Ma],o([Vr({type:String,reflect:!0}),n("design:type",String)],_s.prototype,"role",void 0),_s=o([Hr("wl-icon")],_s);var xs=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}();function ws(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(){if("undefined"!=typeof window){var e=Array.prototype.slice,t=Element.prototype.matches||Element.prototype.msMatchesSelector,i=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),o=function(){function o(e,t){ws(this,o),this._inertManager=t,this._rootElement=e,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return xs(o,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(e){this._unmanageNode(e.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(e){var t=this;a(e,(function(e){return t._visitNode(e)}));var i=document.activeElement;if(!document.body.contains(e)){for(var o=e,n=void 0;o;){if(o.nodeType===Node.DOCUMENT_FRAGMENT_NODE){n=o;break}o=o.parentNode}n&&(i=n.activeElement)}e.contains(i)&&(i.blur(),i===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(e){if(e.nodeType===Node.ELEMENT_NODE){var o=e;o!==this._rootElement&&o.hasAttribute("inert")&&this._adoptInertRoot(o),(t.call(o,i)||o.hasAttribute("tabindex"))&&this._manageNode(o)}}},{key:"_manageNode",value:function(e){var t=this._inertManager.register(e,this);this._managedNodes.add(t)}},{key:"_unmanageNode",value:function(e){var t=this._inertManager.deregister(e,this);t&&this._managedNodes.delete(t)}},{key:"_unmanageSubtree",value:function(e){var t=this;a(e,(function(e){return t._unmanageNode(e)}))}},{key:"_adoptInertRoot",value:function(e){var t=this._inertManager.getInertRoot(e);t||(this._inertManager.setInert(e,!0),t=this._inertManager.getInertRoot(e)),t.managedNodes.forEach((function(e){this._manageNode(e.node)}),this)}},{key:"_onMutation",value:function(t,i){t.forEach((function(t){var i=t.target;if("childList"===t.type)e.call(t.addedNodes).forEach((function(e){this._makeSubtreeUnfocusable(e)}),this),e.call(t.removedNodes).forEach((function(e){this._unmanageSubtree(e)}),this);else if("attributes"===t.type)if("tabindex"===t.attributeName)this._manageNode(i);else if(i!==this._rootElement&&"inert"===t.attributeName&&i.hasAttribute("inert")){this._adoptInertRoot(i);var o=this._inertManager.getInertRoot(i);this._managedNodes.forEach((function(e){i.contains(e.node)&&o._manageNode(e.node)}))}}),this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return null!==this._savedAriaHidden}},{key:"savedAriaHidden",set:function(e){this._savedAriaHidden=e},get:function(){return this._savedAriaHidden}}]),o}(),n=function(){function e(t,i){ws(this,e),this._node=t,this._overrodeFocusMethod=!1,this._inertRoots=new Set([i]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return xs(e,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var e=this._node;null!==this._savedTabIndex?e.setAttribute("tabindex",this._savedTabIndex):e.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete e.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType===Node.ELEMENT_NODE){var e=this.node;if(t.call(e,i)){if(-1===e.tabIndex&&this.hasSavedTabIndex)return;e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)}else e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex"))}}},{key:"addInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.add(e)}},{key:"removeInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.delete(e),0===this._inertRoots.size&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return null!==this._savedTabIndex}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(e){this._throwIfDestroyed(),this._savedTabIndex=e},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),e}(),r=new(function(){function i(e){if(ws(this,i),!e)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=e,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),s(e.head||e.body||e.documentElement),"loading"===e.readyState?e.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return xs(i,[{key:"setInert",value:function(e,t){if(t){if(this._inertRoots.has(e))return;var i=new o(e,this);if(e.setAttribute("inert",""),this._inertRoots.set(e,i),!this._document.body.contains(e))for(var n=e.parentNode;n;)11===n.nodeType&&s(n),n=n.parentNode}else{if(!this._inertRoots.has(e))return;this._inertRoots.get(e).destructor(),this._inertRoots.delete(e),e.removeAttribute("inert")}}},{key:"getInertRoot",value:function(e){return this._inertRoots.get(e)}},{key:"register",value:function(e,t){var i=this._managedNodes.get(e);return void 0!==i?i.addInertRoot(t):i=new n(e,t),this._managedNodes.set(e,i),i}},{key:"deregister",value:function(e,t){var i=this._managedNodes.get(e);return i?(i.removeInertRoot(t),i.destroyed&&this._managedNodes.delete(e),i):null}},{key:"_onDocumentLoaded",value:function(){e.call(this._document.querySelectorAll("[inert]")).forEach((function(e){this.setInert(e,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(i,o){var n=this;i.forEach((function(i){switch(i.type){case"childList":e.call(i.addedNodes).forEach((function(i){if(i.nodeType===Node.ELEMENT_NODE){var o=e.call(i.querySelectorAll("[inert]"));t.call(i,"[inert]")&&o.unshift(i),o.forEach((function(e){this.setInert(e,!0)}),n)}}),n);break;case"attributes":if("inert"!==i.attributeName)return;var o=i.target,r=o.hasAttribute("inert");n.setInert(o,r)}}),this)}}]),i}())(document);Element.prototype.hasOwnProperty("inert")||Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(e){r.setInert(this,e)}})}function a(e,t,i){if(e.nodeType==Node.ELEMENT_NODE){var o=e;t&&t(o);var n=o.shadowRoot;if(n)return void a(n,t);if("content"==o.localName){for(var r=o,s=r.getDistributedNodes?r.getDistributedNodes():[],l=0;l<s.length;l++)a(s[l],t);return}if("slot"==o.localName){for(var c=o,d=c.assignedNodes?c.assignedNodes({flatten:!0}):[],p=0;p<d.length;p++)a(d[p],t);return}}for(var h=e.firstChild;null!=h;)a(h,t),h=h.nextSibling}function s(e){if(!e.querySelector("style#inert-style, link#inert-style")){var t=document.createElement("style");t.setAttribute("id","inert-style"),t.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n",e.appendChild(t)}}}();
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
var ks,Ss={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},Es={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},Ts={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150},Cs=function(){function e(){this.rafIDs=new Map}return e.prototype.request=function(e,t){var i=this;this.cancel(e);var o=requestAnimationFrame((function(o){i.rafIDs.delete(e),t(o)}));this.rafIDs.set(e,o)},e.prototype.cancel=function(e){var t=this.rafIDs.get(e);t&&(cancelAnimationFrame(t),this.rafIDs.delete(e))},e.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach((function(t,i){e.cancel(i)}))},e.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach((function(t,i){e.push(i)})),e},e}();!function(e){e.POLL_SCROLL_POS="poll_scroll_position",e.POLL_LAYOUT_CHANGE="poll_layout_change"}(ks||(ks={}));var As=function(e){function o(t){var n=e.call(this,i(i({},o.defaultAdapter),t))||this;return n.dialogOpen=!1,n.isFullscreen=!1,n.animationFrame=0,n.animationTimer=0,n.escapeKeyAction=Es.CLOSE_ACTION,n.scrimClickAction=Es.CLOSE_ACTION,n.autoStackButtons=!0,n.areButtonsStacked=!1,n.suppressDefaultPressSelector=Es.SUPPRESS_DEFAULT_PRESS_SELECTOR,n.animFrame=new Cs,n.contentScrollHandler=function(){n.handleScrollEvent()},n.windowResizeHandler=function(){n.layout()},n.windowOrientationChangeHandler=function(){n.layout()},n}return t(o,e),Object.defineProperty(o,"cssClasses",{get:function(){return Ss},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return Es},enumerable:!1,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return Ts},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),o.prototype.init=function(){this.adapter.hasClass(Ss.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(Ss.FULLSCREEN)},o.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},o.prototype.open=function(e){var t=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(Ss.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),e&&e.isAboveFullscreenDialog&&this.adapter.addClass(Ss.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame((function(){t.adapter.addClass(Ss.OPEN),t.adapter.addBodyClass(Ss.SCROLL_LOCK),t.layout(),t.animationTimer=setTimeout((function(){t.handleAnimationTimerEnd(),t.adapter.trapFocus(t.adapter.getInitialFocusEl()),t.adapter.notifyOpened()}),Ts.DIALOG_ANIMATION_OPEN_TIME_MS)}))},o.prototype.close=function(e){var t=this;void 0===e&&(e=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(e),this.adapter.addClass(Ss.CLOSING),this.adapter.removeClass(Ss.OPEN),this.adapter.removeBodyClass(Ss.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout((function(){t.adapter.releaseFocus(),t.handleAnimationTimerEnd(),t.adapter.notifyClosed(e)}),Ts.DIALOG_ANIMATION_CLOSE_TIME_MS))},o.prototype.showSurfaceScrim=function(){var e=this;this.adapter.addClass(Ss.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame((function(){e.adapter.addClass(Ss.SURFACE_SCRIM_SHOWN)}))},o.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(Ss.SURFACE_SCRIM_SHOWN),this.adapter.addClass(Ss.SURFACE_SCRIM_HIDING)},o.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(Ss.SURFACE_SCRIM_HIDING),this.adapter.removeClass(Ss.SURFACE_SCRIM_SHOWING)},o.prototype.isOpen=function(){return this.dialogOpen},o.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},o.prototype.setEscapeKeyAction=function(e){this.escapeKeyAction=e},o.prototype.getScrimClickAction=function(){return this.scrimClickAction},o.prototype.setScrimClickAction=function(e){this.scrimClickAction=e},o.prototype.getAutoStackButtons=function(){return this.autoStackButtons},o.prototype.setAutoStackButtons=function(e){this.autoStackButtons=e},o.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},o.prototype.setSuppressDefaultPressSelector=function(e){this.suppressDefaultPressSelector=e},o.prototype.layout=function(){var e=this;this.animFrame.request(ks.POLL_LAYOUT_CHANGE,(function(){e.layoutInternal()}))},o.prototype.handleClick=function(e){if(this.adapter.eventTargetMatches(e.target,Es.SCRIM_SELECTOR)&&""!==this.scrimClickAction)this.close(this.scrimClickAction);else{var t=this.adapter.getActionFromEvent(e);t&&this.close(t)}},o.prototype.handleKeydown=function(e){var t="Enter"===e.key||13===e.keyCode;if(t&&!this.adapter.getActionFromEvent(e)){var i=e.composedPath?e.composedPath()[0]:e.target,o=!this.suppressDefaultPressSelector||!this.adapter.eventTargetMatches(i,this.suppressDefaultPressSelector);t&&o&&this.adapter.clickDefaultButton()}},o.prototype.handleDocumentKeydown=function(e){("Escape"===e.key||27===e.keyCode)&&""!==this.escapeKeyAction&&this.close(this.escapeKeyAction)},o.prototype.handleScrollEvent=function(){var e=this;this.animFrame.request(ks.POLL_SCROLL_POS,(function(){e.toggleScrollDividerHeader(),e.toggleScrollDividerFooter()}))},o.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},o.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(Ss.OPENING),this.adapter.removeClass(Ss.CLOSING)},o.prototype.runNextAnimationFrame=function(e){var t=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame((function(){t.animationFrame=0,clearTimeout(t.animationTimer),t.animationTimer=setTimeout(e,0)}))},o.prototype.detectStackedButtons=function(){this.adapter.removeClass(Ss.STACKED);var e=this.adapter.areButtonsStacked();e&&this.adapter.addClass(Ss.STACKED),e!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=e)},o.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(Ss.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(Ss.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},o.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(Ss.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(Ss.SCROLL_DIVIDER_HEADER):this.adapter.addClass(Ss.SCROLL_DIVIDER_HEADER)},o.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(Ss.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(Ss.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(Ss.SCROLL_DIVIDER_FOOTER)},o}(Rt);
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
function Is(e){return void 0===e&&(e=window),!!function(e){void 0===e&&(e=window);var t=!1;try{var i={get passive(){return t=!0,!1}},o=function(){};e.document.addEventListener("test",o,i),e.document.removeEventListener("test",o,i)}catch(e){t=!1}return t}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */(e)&&{passive:!0}}const Os=document.$blockingElements;class $s extends qt{constructor(){super(...arguments),this.hideActions=!1,this.stacked=!1,this.heading="",this.scrimClickAction="close",this.escapeKeyAction="close",this.open=!1,this.defaultAction="close",this.actionAttribute="dialogAction",this.initialFocusAttribute="dialogInitialFocus",this.initialSupressDefaultPressSelector="",this.mdcFoundationClass=As,this.boundHandleClick=null,this.boundHandleKeydown=null,this.boundHandleDocumentKeydown=null}set suppressDefaultPressSelector(e){this.mdcFoundation?this.mdcFoundation.setSuppressDefaultPressSelector(e):this.initialSupressDefaultPressSelector=e}get suppressDefaultPressSelector(){return this.mdcFoundation?this.mdcFoundation.getSuppressDefaultPressSelector():this.initialSupressDefaultPressSelector}get primaryButton(){let e=this.primarySlot.assignedNodes();e=e.filter((e=>e instanceof HTMLElement));const t=e[0];return t||null}emitNotification(e,t){const i=new CustomEvent(e,{detail:t?{action:t}:{}});this.dispatchEvent(i)}getInitialFocusEl(){const e=`[${this.initialFocusAttribute}]`,t=this.querySelector(e);if(t)return t;const i=this.primarySlot.assignedNodes({flatten:!0}),o=this.searchNodeTreesForAttribute(i,this.initialFocusAttribute);if(o)return o;const n=this.secondarySlot.assignedNodes({flatten:!0}),r=this.searchNodeTreesForAttribute(n,this.initialFocusAttribute);if(r)return r;const a=this.contentSlot.assignedNodes({flatten:!0});return this.searchNodeTreesForAttribute(a,this.initialFocusAttribute)}searchNodeTreesForAttribute(e,t){for(const i of e)if(i instanceof HTMLElement){if(i.hasAttribute(t))return i;{const e=i.querySelector(`[${t}]`);if(e)return e}}return null}createAdapter(){return Object.assign(Object.assign({},Ft(this.mdcRoot)),{addBodyClass:()=>document.body.style.overflow="hidden",removeBodyClass:()=>document.body.style.overflow="",areButtonsStacked:()=>this.stacked,clickDefaultButton:()=>{const e=this.primaryButton;e&&e.click()},eventTargetMatches:(e,t)=>!!e&&mi(e,t),getActionFromEvent:e=>{if(!e.target)return"";const t=
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
function(e,t){if(e.closest)return e.closest(t);for(var i=e;i;){if(mi(i,t))return i;i=i.parentElement}return null}(e.target,`[${this.actionAttribute}]`);return t&&t.getAttribute(this.actionAttribute)},getInitialFocusEl:()=>this.getInitialFocusEl(),isContentScrollable:()=>{const e=this.contentElement;return!!e&&e.scrollHeight>e.offsetHeight},notifyClosed:e=>this.emitNotification("closed",e),notifyClosing:e=>{this.closingDueToDisconnect||(this.open=!1),this.emitNotification("closing",e)},notifyOpened:()=>this.emitNotification("opened"),notifyOpening:()=>{this.open=!0,this.emitNotification("opening")},reverseButtons:()=>{},releaseFocus:()=>{Os.remove(this)},trapFocus:e=>{this.isConnected&&(Os.push(this),e&&e.focus())},registerContentEventHandler:(e,t)=>{this.contentElement.addEventListener(e,t)},deregisterContentEventHandler:(e,t)=>{this.contentElement.removeEventListener(e,t)},isScrollableContentAtTop:()=>{const e=this.contentElement;return!!e&&0===e.scrollTop},isScrollableContentAtBottom:()=>{const e=this.contentElement;return!!e&&Math.ceil(e.scrollHeight-e.scrollTop)===e.clientHeight},registerWindowEventHandler:(e,t)=>{window.addEventListener(e,t,Is())},deregisterWindowEventHandler:(e,t)=>{window.removeEventListener(e,t,Is())}})}render(){const e={[Ss.STACKED]:this.stacked};let t=z``;this.heading&&(t=this.renderHeading());const i={"mdc-dialog__actions":!this.hideActions};return z`
    <div class="mdc-dialog ${Wt(e)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${t}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${Wt(i)}">
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
    </div>`}renderHeading(){return z`
      <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`}firstUpdated(){super.firstUpdated(),this.mdcFoundation.setAutoStackButtons(!0),this.initialSupressDefaultPressSelector?this.suppressDefaultPressSelector=this.initialSupressDefaultPressSelector:this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,"mwc-textarea","mwc-menu mwc-list-item","mwc-select mwc-list-item"].join(", "),this.boundHandleClick=this.mdcFoundation.handleClick.bind(this.mdcFoundation),this.boundHandleKeydown=this.mdcFoundation.handleKeydown.bind(this.mdcFoundation),this.boundHandleDocumentKeydown=this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation)}connectedCallback(){super.connectedCallback(),this.open&&this.mdcFoundation&&!this.mdcFoundation.isOpen()&&(this.setEventListeners(),this.mdcFoundation.open())}disconnectedCallback(){super.disconnectedCallback(),this.open&&this.mdcFoundation&&(this.removeEventListeners(),this.closingDueToDisconnect=!0,this.mdcFoundation.close(this.currentAction||this.defaultAction),this.closingDueToDisconnect=!1,this.currentAction=void 0,Os.remove(this))}forceLayout(){this.mdcFoundation.layout()}focus(){const e=this.getInitialFocusEl();e&&e.focus()}blur(){if(!this.shadowRoot)return;const e=this.shadowRoot.activeElement;if(e)e instanceof HTMLElement&&e.blur();else{const e=this.getRootNode(),t=e instanceof Document?e.activeElement:null;t instanceof HTMLElement&&t.blur()}}setEventListeners(){this.boundHandleClick&&this.mdcRoot.addEventListener("click",this.boundHandleClick),this.boundHandleKeydown&&this.mdcRoot.addEventListener("keydown",this.boundHandleKeydown,Is()),this.boundHandleDocumentKeydown&&document.addEventListener("keydown",this.boundHandleDocumentKeydown,Is())}removeEventListeners(){this.boundHandleClick&&this.mdcRoot.removeEventListener("click",this.boundHandleClick),this.boundHandleKeydown&&this.mdcRoot.removeEventListener("keydown",this.boundHandleKeydown),this.boundHandleDocumentKeydown&&document.removeEventListener("keydown",this.boundHandleDocumentKeydown)}close(){this.open=!1}show(){this.open=!0}}o([Te(".mdc-dialog")],$s.prototype,"mdcRoot",void 0),o([Te('slot[name="primaryAction"]')],$s.prototype,"primarySlot",void 0),o([Te('slot[name="secondaryAction"]')],$s.prototype,"secondarySlot",void 0),o([Te("#contentSlot")],$s.prototype,"contentSlot",void 0),o([Te(".mdc-dialog__content")],$s.prototype,"contentElement",void 0),o([Te(".mdc-container")],$s.prototype,"conatinerElement",void 0),o([we({type:Boolean})],$s.prototype,"hideActions",void 0),o([we({type:Boolean}),Vt((function(){this.forceLayout()}))],$s.prototype,"stacked",void 0),o([we({type:String})],$s.prototype,"heading",void 0),o([we({type:String}),Vt((function(e){this.mdcFoundation.setScrimClickAction(e)}))],$s.prototype,"scrimClickAction",void 0),o([we({type:String}),Vt((function(e){this.mdcFoundation.setEscapeKeyAction(e)}))],$s.prototype,"escapeKeyAction",void 0),o([we({type:Boolean,reflect:!0}),Vt((function(e){this.mdcFoundation&&this.isConnected&&(e?(this.setEventListeners(),this.mdcFoundation.open()):(this.removeEventListeners(),this.mdcFoundation.close(this.currentAction||this.defaultAction),this.currentAction=void 0))}))],$s.prototype,"open",void 0),o([we()],$s.prototype,"defaultAction",void 0),o([we()],$s.prototype,"actionAttribute",void 0),o([we()],$s.prototype,"initialFocusAttribute",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Rs=ae`.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12)}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){margin-left:0;margin-right:8px}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:.000000001px;margin-top:12px}`;let Ps=class extends $s{static get styles(){return[Rs,ae`
    .mdc-dialog .mdc-dialog__content {
      padding: 0;
    }
    .mdc-dialog .mdc-dialog__container,
    .mdc-dialog .mdc-dialog__surface {
      height: var(--mdc-dialog-height, auto)!important;
      width: var(--mdc-dialog-width, auto)!important;
    }
    `]}};Ps=o([Tt("mwc-dialog")],Ps);
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
const Ls=ae`
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
  `;ae`
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
  `;const Ns=ae`

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
  `,Ms=ae`
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
    }`,Fs=ae`
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
  `;let zs=class extends ye{constructor(){super(),this.fixed=!1,this.narrowLayout=!1,this.scrollable=!1,this.backdrop=!1,this.noclosebutton=!1,this.persistent=!1,this.blockscrolling=!1,this.hideActions=!0,this.open=!1,this.type="normal",this.closeWithConfirmation=!1,this.escapeKeyAction="close"}static get styles(){return[Jt,Ls,Ns,ae`
        mwc-dialog {
          --mdc-dialog-min-width: var(--component-min-width, auto);
          --mdc-dialog-max-width: var(--component-max-width, 100%);
          --mdc-dialog-min-height: var(--component-min-height, auto);
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
          max-height: calc(80vh - 127px);
        }

        mwc-dialog div.content h4 {
          font-size: 14px;
          padding: 5px 15px 5px 12px;
          margin: 0 0 10px 0;
          display: block;
          height: 20px;
          border-bottom: 1px solid #DDD !important;
        }
      `]}firstUpdated(){this.open=this.dialog.open,this.persistent&&(this.dialog.scrimClickAction=""),this.dialog.addEventListener("opened",(()=>{this.open=this.dialog.open})),this.dialog.addEventListener("closed",(e=>{if("dialog"===e.target.id&&"action"in e.detail&&"persistent"===e.detail.action?this.show():this.open=this.dialog.open,"dialog"===e.target.id&&"action"in e.detail&&"close"===e.detail.action){const e=new CustomEvent("dialog-closed",{detail:""});this.dispatchEvent(e)}}))}connectedCallback(){super.connectedCallback()}_hideDialog(){this.hide()}show(){this.dialog.show()}hide(){if(this.closeWithConfirmation){const e=new CustomEvent("dialog-closing-confirm",{detail:""});this.dispatchEvent(e)}else this.dialog.close(),this._resetScroll()}_resetScroll(){this.shadowRoot.querySelector(".content-area").scrollTo(0,0)}render(){return z`
      <link rel="stylesheet" href="resources/custom.css">
      <mwc-dialog id="dialog"
                    ?fixed="${this.fixed}"
                    ?narrow="${this.narrowLayout}"
                    ?backdrop="${this.backdrop}"
                    ?persistent="${this.persistent}"
                    ?scrollable="${this.scrollable}"
                    escapeKeyAction="${this.escapeKeyAction}"
                    blockscrolling="${this.blockscrolling}"
                    hideActions="${this.hideActions}"
                    style="padding:0;" class="${this.type}">
        <div elevation="1" class="card" style="margin: 0;padding:0;">
          <h3 class="horizontal justified layout" style="font-weight:bold">
            <span class="vertical center-justified layout"><slot name="title"></slot></span>
            <div class="flex"></div>
            <slot name="action"></slot>
            ${this.noclosebutton?z``:z`
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
      `}};o([we({type:Boolean})],zs.prototype,"fixed",void 0),o([we({type:Boolean})],zs.prototype,"narrowLayout",void 0),o([we({type:Boolean})],zs.prototype,"scrollable",void 0),o([we({type:Boolean})],zs.prototype,"backdrop",void 0),o([we({type:Boolean})],zs.prototype,"noclosebutton",void 0),o([we({type:Boolean})],zs.prototype,"persistent",void 0),o([we({type:Boolean})],zs.prototype,"blockscrolling",void 0),o([we({type:Boolean})],zs.prototype,"hideActions",void 0),o([we({type:Boolean})],zs.prototype,"open",void 0),o([we({type:String})],zs.prototype,"type",void 0),o([we({type:Boolean})],zs.prototype,"closeWithConfirmation",void 0),o([we({type:String})],zs.prototype,"escapeKeyAction",void 0),o([Te("#dialog")],zs.prototype,"dialog",void 0),zs=o([_e("backend-ai-dialog")],zs),Ne({loader:e=>fetch(`/resources/i18n/${e}.json`).then((e=>e.json()))});class Bs extends ye{constructor(){super(),this.active=!1,this.hasLoadedStrings=!1,this.active=!1,this.tasker=globalThis.tasker}get activeConnected(){return this.active&&void 0!==globalThis.backendaiclient&&null!==globalThis.backendaiclient&&!0===globalThis.backendaiclient.ready}get connected(){return void 0!==globalThis.backendaiclient&&null!==globalThis.backendaiclient&&!0===globalThis.backendaiclient.ready}_viewStateChanged(e){}shouldUpdate(){return this.active}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}attributeChangedCallback(e,t,i){"active"==e&&null!==i?(this.active=!0,this._viewStateChanged(!0)):"active"===e&&(this.active=!1,this._viewStateChanged(!1)),super.attributeChangedCallback(e,t,i)}_hideDialog(e){e.target.closest("backend-ai-dialog").hide()}_addInputValidator(e){if(!e.hasAttribute("auto-validate"))return;let t;null===e.validityTransform&&(t=e.getAttribute("error-message")?e.getAttribute("error-message"):e.getAttribute("validationMessage")?e.getAttribute("validationMessage"):ze("credential.validation.ValidationFailed"),e.validityTransform=(i,o)=>o.valid?{valid:o.valid}:o.patternMismatch?(e.validationMessage=t,{valid:o.valid,patternMismatch:!o.valid}):o.valueMissing?(e.validationMessage=ze("explorer.ValueRequired"),{valid:o.valid,valueMissing:!o.valid}):o.tooShort?(e.validationMessage=ze("explorer.InputTooShort"),{valid:o.valid,valueMissing:!o.valid}):(e.validationMessage=t,{valid:o.valid,patternMismatch:!o.valid}))}}o([we({type:Boolean})],Bs.prototype,"active",void 0),o([we({type:Boolean})],Bs.prototype,"hasLoadedStrings",void 0);let Ds=class extends Bs{constructor(){super(),this.active=!0,this.condition="running",this.jobs=Object(),this.appTemplate=Object(),this.imageInfo=Object(),this._selected_items=[],this.refreshing=!1,this.notification=Object(),this.spinner=Object(),this.refreshTimer=Object(),this.kernel_labels=Object(),this.indicator=Object(),this.sshPort=0,this.vncPort=0,this.xrdpPort=0,this.tensorboardPath="",this.isPathConfigured=!1,this.appLaunchBeforeTunneling=["nniboard","mlflow-ui"],this.appController=Object(),this.openPortToPublic=!1,this.appSupportWithCategory=[],this.appEnvs=Object(),this.appArgs=Object(),this.appSupportList=[],this.appSupportOption=[]}static get styles(){return[Jt,Ls,Ns,ae`
        mwc-icon-button.apps {
          --mdc-icon-button-size: 48px;
          --mdc-icon-size: 36px;
          padding: 3px;
        }

        mwc-icon-button#tensorboard-button {
          background-color: #e9852e;
          color: white;
          --mdc-icon-button-size: 24px;
          --mdc-icon-size: 24px;
          padding: 10px;
          margin-left: 10px;
          border-radius: 10px;
        }

        mwc-textfield#tensorboard-path {
          width: 100%;
          --mdc-text-field-fill-color: transparent;
          --mdc-theme-primary: var(--general-textfield-selected-color);
          --mdc-typography-font-family: var(--general-font-family);
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
        #tensorboard-dialog {
          --component-width: 400px;
        }

        #app-dialog {
          --component-width: 400px;
        }

        #allowed-client-ips-container {
          margin-left: 2em;
          margin-bottom: 1em;
          display:none;
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

        @media screen and (max-width: 810px) {
          #terminal-guide {
            --component-width: calc(100% - 50px);
          }
        }
      `]}firstUpdated(){this._initializeAppTemplate(),this.refreshTimer=null,fetch("resources/image_metadata.json").then((e=>e.json())).then((e=>{this.imageInfo=e.imageInfo;for(const e in this.imageInfo)({}).hasOwnProperty.call(this.imageInfo,e)&&(this.kernel_labels[e]=[],"label"in this.imageInfo[e]?this.kernel_labels[e]=this.imageInfo[e].label:this.kernel_labels[e]=[])})),this._createTerminalGuide(),this._createDonotShowOption(),this.notification=globalThis.lablupNotification;this.shadowRoot.querySelector("#hide-guide").addEventListener("change",(e=>{e.target.checked?localStorage.setItem("backendaiwebui.terminalguide","false"):localStorage.setItem("backendaiwebui.terminalguide","true")}))}async _viewStateChanged(e){await this.updateComplete}_initializeAppTemplate(){fetch("resources/app_template.json").then((e=>e.json())).then((e=>{this.appTemplate=e.appTemplate;const t=Object.keys(this.appTemplate);t.sort(((e,t)=>this.appTemplate[e][0].category>this.appTemplate[t][0].category?1:-1)),this.appOrder=t}))}async sendRequest(e){let t,i;try{"GET"==e.method&&(e.body=void 0),t=await fetch(e.uri,e);const o=t.headers.get("Content-Type");if(null===o){if(i=t.ok,!t.ok)throw new Error(t)}else i=o.startsWith("application/json")||o.startsWith("application/problem+json")?await t.json():o.startsWith("text/")?await t.text():await t.blob();if(!t.ok)throw i}catch(e){return t}return i}async _getProxyURL(e){let t="http://127.0.0.1:5050/";if(void 0!==globalThis.__local_proxy?t=globalThis.__local_proxy:void 0!==globalThis.backendaiclient._config.proxyURL&&(t=globalThis.backendaiclient._config.proxyURL),e){const i=await this._getWSProxyVersion(e);"v1"!==i&&(t+=`${i}/`)}return t}async _getWSProxyVersion(e){const t=(await globalThis.backendaiclient.computeSession.get(["scaling_group"],e)).compute_session.scaling_group,i=globalThis.backendaiclient.current_group_id();return globalThis.isElectron?"v1":(await globalThis.backendaiclient.scalingGroup.getWsproxyVersion(t,i)).wsproxy_version}showLauncher(e){this._showAppLauncher(e)}_showAppLauncher(e){const t=e["session-uuid"],i=e["access-key"],o=e["app-services"],n="app-services-option"in e?e["app-services-option"]:{};if("runtime"in e){const i={};return i["session-uuid"]=t,i["app-name"]=e.runtime,i["url-postfix"]="",i["file-name"]=e.filename,"jupyter"===i["app-name"]&&(i["url-postfix"]="&redirect=/notebooks/"+i["file-name"]),"arguments"in e&&(i.args=e.arguments),this._runAppWithParameters(i)}this.appSupportList=[],o.includes("ttyd")||this.appSupportList.push({name:"ttyd",title:"Console",category:"0.Default",redirect:"",src:"./resources/icons/terminal.svg"}),o.forEach((e=>{e in this.appTemplate||(this.appTemplate[e]=[],this.appTemplate[e].push({name:e,title:e,category:"99.",redirect:"",src:"./resources/icons/default_app.svg"}))})),o.sort(((e,t)=>this.appTemplate[e][0].category>this.appTemplate[t][0].category?1:-1));let r="";Object.keys(n).length>0&&(this.appSupportOption=n),o.forEach((e=>{e in this.appTemplate?("sshd"!==e||"sshd"===e&&globalThis.isElectron)&&(r!==this.appTemplate[e][0].category&&(this.appSupportList.push({name:this.appTemplate[e][0].category.substring(2),title:this.appTemplate[e][0].category.substring(2),category:"divider",redirect:"",src:""}),r=this.appTemplate[e][0].category),this.appTemplate[e].forEach((e=>{this.appSupportList.push(e)}))):["ttyd","ipython"].includes(e)||this.appSupportList.push({name:e,title:e,category:"Default",redirect:"",src:"./resources/icons/default_app.svg"})})),this.openPortToPublic=globalThis.backendaiclient._config.openPortToPublic,this._toggleChkOpenToPublic();const a=this.shadowRoot.querySelector("#app-dialog");a.setAttribute("session-uuid",t),a.setAttribute("access-key",i),this.shadowRoot.querySelector("#app-dialog").show()}_hideAppLauncher(){this.shadowRoot.querySelector("#app-dialog").hide()}async _resolveV1ProxyUri(e,t){const i={endpoint:globalThis.backendaiclient._config.endpoint};if("SESSION"===globalThis.backendaiclient._config.connectionMode?(i.mode="SESSION",i.session=globalThis.backendaiclient._config._session_id):(i.mode="API",i.access_key=globalThis.backendaiclient._config.accessKey,i.secret_key=globalThis.backendaiclient._config.secretKey),i.api_version=globalThis.backendaiclient.APIMajorVersion,globalThis.isElectron&&void 0===globalThis.__local_proxy)return this.indicator.end(),this.notification.text=ze("session.launcher.ProxyNotReady"),void this.notification.show();const o=await this._getProxyURL(e),n={method:"PUT",body:JSON.stringify(i),headers:{Accept:"application/json","Content-Type":"application/json"},uri:o+"conf"};this.indicator.set(20,ze("session.launcher.SettingUpProxyForApp"));const r=await this.sendRequest(n);if(void 0===r)return this.indicator.end(),this.notification.text=ze("session.launcher.ProxyConfiguratorNotResponding"),void this.notification.show();const a=r.token;return new URL(`proxy/${a}/${e}/add?app=${t}`,o).href}async _resolveV2ProxyUri(e,t,i=null,o=null,n=null){const r=globalThis.backendaiclient._config._session_id,a=await globalThis.backendaiclient.computeSession.startService(r,e,t,i,o,n);if(void 0===a)return this.indicator.end(),this.notification.text=ze("session.launcher.ProxyConfiguratorNotResponding"),void this.notification.show();const s=a.token;return new URL(`v2/proxy/${s}/${e}/add?app=${t}`,a.wsproxy_addr).href}async _open_wsproxy(e,t="jupyter",i=null,o=null,n=null){var r;if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)return!1;if(void 0===await globalThis.backendaiclient.computeSession.get(["scaling_group"],e))return this.indicator.end(),this.notification.text=ze("session.CreationFailed"),this.notification.show(),Promise.resolve(!1);let a="v1"==await this._getWSProxyVersion(e)?await this._resolveV1ProxyUri(e,t):await this._resolveV2ProxyUri(e,t,null,o,n);if(!a)return Promise.resolve(!1);const s=this.shadowRoot.querySelector("#chk-open-to-public"),l=null===(r=this.shadowRoot.querySelector("#allowed-client-ips"))||void 0===r?void 0:r.value;let c=!1;null==s||(c=s.checked,s.checked=!1),null!==i&&i>1024&&i<65535&&(a+=`&port=${i}`),c&&(a+="&open_to_public=true"),c&&(null==l?void 0:l.length)>0&&(a+="&allowed_client_ips="+l.replace(/\s/g,"")),null!==o&&Object.keys(o).length>0&&(a=a+"&envs="+encodeURI(JSON.stringify(o))),null!==n&&Object.keys(n).length>0&&(a=a+"&args="+encodeURI(JSON.stringify(n))),this.indicator.set(50,ze("session.launcher.AddingKernelToSocketQueue"));const d={method:"GET",app:t,uri:a};return await this.sendRequest(d)}async _close_wsproxy(e,t="jupyter"){if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)return!1;const i=globalThis.backendaiclient._config.accessKey;let o=await this._getProxyURL(e);o+=`proxy/${i}/${e}/delete?app=${t}`;const n={method:"GET",app:t,uri:o,credentials:"include",mode:"cors"};return await this.sendRequest(n)}async _runAppWithParameters(e){const t=e["session-uuid"];let i=e["url-postfix"];const o=e["app-name"];let n=null;if(null!=o)if(null==i&&(i=""),"args"in e&&(n=e.args),"tensorboard"!==o){if(void 0===globalThis.backendaiwsproxy||null===globalThis.backendaiwsproxy){this._hideAppLauncher(),this.indicator=await globalThis.lablupIndicator.start();let e=null;globalThis.isElectron&&"sshd"===o&&(e=globalThis.backendaioptions.get("custom_ssh_port",0),"0"!==e&&0!==e||(e=null)),this._open_wsproxy(t,o,e,null,n).then((async e=>{e.url&&(await this._connectToProxyWorker(e.url,i),this.indicator.set(100,ze("session.applauncher.Prepared")),setTimeout((()=>{globalThis.open(e.url+i,"_blank")}),1e3))}))}}else this._openTensorboardDialog()}async _connectToProxyWorker(e,t){const i={method:"GET",uri:e+t,mode:"no-cors",redirect:"follow",credentials:"include"};let o=0;for(;o<5;){const e=await this.sendRequest(i);"object"==typeof e&&"status"in e&&[500,501,502].includes(e.status)?(await this._sleep(1e3),o+=1):o=6}}async _sleep(e){return new Promise((t=>setTimeout(t,e)))}async _runThisAppWithConfirmationIfNeeded(e){const t=e.target["app-name"];if(!this.appLaunchBeforeTunneling.includes(t))return this._runThisApp(e);{const t=e.target;this.appController["app-name"]=t["app-name"];const i=t.closest("#app-dialog");this.appController["session-uuid"]=i.getAttribute("session-uuid"),this.appController["url-postfix"]=t["url-postfix"],this._openAppLaunchConfirmationDialog(e)}}async _runThisApp(e){const t=e.target.closest("mwc-icon-button");this.appController["app-name"]=t["app-name"];const i=t.closest("#app-dialog");return this.appController["session-uuid"]=i.getAttribute("session-uuid"),this.appController["url-postfix"]=t["url-postfix"],this._runApp(this.appController)}async _runApp(e){const t=e["app-name"],i=e["session-uuid"];let o=e["url-postfix"];if(null!=t)if(null==o&&(o=""),"tensorboard"!==t){if("ttyd"===t){const e=localStorage.getItem("backendaiwebui.terminalguide");e&&"true"!==e||this._openTerminalGuideDialog()}if(void 0===globalThis.backendaiwsproxy||null===globalThis.backendaiwsproxy){let e;this._hideAppLauncher(),this.indicator=await globalThis.lablupIndicator.start(),globalThis.isElectron&&"sshd"===t&&(e=globalThis.backendaioptions.get("custom_ssh_port",0),"0"!==e&&0!==e||(e=null));const n=this.shadowRoot.querySelector("#chk-preferred-port").checked,r=parseInt(this.shadowRoot.querySelector("#app-port").value);n&&r&&(e=r),this._open_wsproxy(i,t,e,null,null).then((async e=>{await this._connectToProxyWorker(e.url,o),"sshd"===t?(this.indicator.set(100,ze("session.applauncher.Prepared")),this.sshPort=e.port,this._readSSHKey(i),this._openSSHDialog(),setTimeout((()=>{this.indicator.end()}),1e3)):"vnc"===t?(this.indicator.set(100,ze("session.applauncher.Prepared")),this.vncPort=e.port,this._openVNCDialog()):"xrdp"===t?(this.indicator.set(100,ze("session.applauncher.Prepared")),this.xrdpPort=e.port,this._openXRDPDialog()):e.url&&(this.indicator.set(100,ze("session.applauncher.Prepared")),setTimeout((()=>{globalThis.open(e.url+o,"_blank")}),1e3))}))}}else this._openTensorboardDialog()}async _readSSHKey(e){const t=this.shadowRoot.querySelector("#sshkey-download-link"),i=await globalThis.backendaiclient.download_single(e,"/home/work/id_container"),o=(await i.text()).indexOf("-----"),n=await i.slice(o,i.size,i.type);t.href=globalThis.URL.createObjectURL(n),t.download="id_container"}async runTerminal(e){const t=localStorage.getItem("backendaiwebui.terminalguide");t&&"true"!==t||this._openTerminalGuideDialog(),null!=globalThis.backendaiwsproxy&&null!=globalThis.backendaiwsproxy||(this.indicator=await globalThis.lablupIndicator.start(),this._open_wsproxy(e,"ttyd").then((async e=>{await this._connectToProxyWorker(e.url,""),e.url&&(this.indicator.set(100,ze("session.applauncher.Prepared")),setTimeout((()=>{globalThis.open(e.url,"_blank"),this.indicator.end()}),1e3))})))}_openAppLaunchConfirmationDialog(e){this.shadowRoot.querySelector("#app-launch-confirmation-dialog").show()}_openSSHDialog(){this.shadowRoot.querySelector("#ssh-dialog").show()}_openVNCDialog(){this.shadowRoot.querySelector("#vnc-dialog").show()}_openXRDPDialog(){this.shadowRoot.querySelector("#xrdp-dialog").show()}_openTensorboardDialog(){this.shadowRoot.querySelector("#tensorboard-dialog").show()}_hideTensorboardDialog(){this.shadowRoot.querySelector("#tensorboard-dialog").hide()}async _addTensorboardPath(e){this.tensorboardPath=this.shadowRoot.querySelector("#tensorboard-path").value;const t=e.target;t.setAttribute("disabled",!0);try{const e=null,i=this.appController["app-name"],o=this.appController["session-uuid"],n=this.appController["url-postfix"];this.indicator=await globalThis.lablupIndicator.start(),this.indicator.set(50,"Shutdown TensorBoard instance if exist..."),await globalThis.backendaiclient.shutdown_service(o,"tensorboard"),this.indicator.set(70,"Clean up TensorBoard proxy..."),await this._close_wsproxy(o,"tensorboard"),this.indicator.set(100,"Proxy is ready."),this.tensorboardPath=""===this.tensorboardPath?"/home/work/logs":this.tensorboardPath;const r={"--logdir":this.tensorboardPath};this._open_wsproxy(o,i,e,null,r).then((async e=>{await this._connectToProxyWorker(e.url,n),this._hideAppLauncher(),this._hideTensorboardDialog(),t.removeAttribute("disabled"),setTimeout((()=>{globalThis.open(e.url+n,"_blank"),console.log(i+" proxy loaded: "),console.log(o)}),1e3)}))}catch(e){t.removeAttribute("disabled")}}_openTerminalGuideDialog(){this.shadowRoot.querySelector("#terminal-guide").show()}_createDonotShowOption(){const e=this.shadowRoot.querySelector("#terminal-guide"),t=e.children[e.children.length-1],i=document.createElement("div");i.setAttribute("class","horizontal layout flex center");const o=document.createElement("mwc-checkbox");o.setAttribute("id","hide-guide");const n=document.createElement("span");n.innerHTML=`${ze("dialog.hide.DonotShowThisAgain")}`,i.appendChild(o),i.appendChild(n),t.appendChild(i)}_adjustPreferredAppPortNumber(e){const t=e.target.value;t?(t<1025||t>65534)&&(this.shadowRoot.querySelector("#app-port").value=10250):this.shadowRoot.querySelector("#app-port").value=10250}_createTerminalGuide(){const e=this.shadowRoot.querySelector("#terminal-guide").children[1],t=document.createElement("div");t.setAttribute("class","vertical layout flex");let i=globalThis.backendaioptions.get("current_language");["en","ko","ru","fr","mn","id"].includes(i)||(i="en"),t.innerHTML=`\n      <macro-carousel pagination navigation selected="0" auto-focus reduced-motion disable-drag>\n        <article class="slide vertical layout center">\n          <span class="flex" style="background-image:url(/resources/images/web-terminal-guide-1.png); border:none;">\n            <span class="keyboard">Ctrl</span>\n            <span class="keyboard invert">+</span>\n            <span class="keyboard one-key">B</span>\n          </span>\n          <p>${ze("webTerminalUsageGuide.CopyGuideOne")}</p>\n        </article>\n        <article class="slide vertical layout center">\n          <span style="background-image:url(/resources/images/web-terminal-guide-2.png);"></span>\n          <p>${ze("webTerminalUsageGuide.CopyGuideTwo")}</p>\n        </article>\n        <article class="slide vertical layout center">\n          <span style="background-image:url(/resources/images/web-terminal-guide-3.png);"></span>\n          <p>${ze("webTerminalUsageGuide.CopyGuideThree")}</p>\n        </article>\n        <article class="slide vertical layout center">\n          <span style="background-image:url(/resources/images/web-terminal-guide-4.png);">\n            <span class="keyboard">Ctrl</span>\n            <span class="keyboard invert">+</span>\n            <span class="keyboard one-key">B</span>\n          </span>\n          <div class="flex layout center-justified vertical center">\n            <p>${ze("webTerminalUsageGuide.CopyGuideFour")}</p>\n            <a href="https://console.docs.backend.ai/${i}/latest/sessions_all/sessions_all.html#advanced-web-terminal-usage"\n               target="_blank" style="width:100%;text-align:right;">\n              <p>${ze("webTerminalUsageGuide.LearnMore")}</p>\n            </a>\n          </div>\n        </article>\n      </macro-carousel>`,e.appendChild(t)}_toggleChkOpenToPublic(){const e=this.shadowRoot.querySelector("#chk-open-to-public"),t=this.shadowRoot.querySelector("#allowed-client-ips-container");e&&t&&(e.checked?t.style.display="block":t.style.display="none")}render(){return z`
      <backend-ai-dialog id="app-dialog" fixed backdrop narrowLayout>
        <div slot="title" class="horizontal layout center">
          <span>App</span>
        </div>
        <div slot="content">
          <div style="padding:15px 0;" class="horizontal layout wrap center start-justified">
            ${this.appSupportList.map((e=>z`
              ${"divider"===e.category?z`
                <h3 style="width:100%;padding-left:15px;border-bottom:1px solid #ccc;">${e.title}</h3>
              `:z`
                <div class="vertical layout center center-justified app-icon">
                  <mwc-icon-button class="fg apps green" .app="${e.name}" .app-name="${e.name}"
                                   .url-postfix="${e.redirect}"
                                   @click="${e=>this._runThisAppWithConfirmationIfNeeded(e)}">
                    <img src="${e.src}"/>
                  </mwc-icon-button>
                  <span class="label">${e.title}</span>
                </div>`}
            `))}
          </div>
          <div style="padding:10px 20px 15px 20px">
            ${globalThis.isElectron||!this.openPortToPublic?"":z`
              <div class="horizontal layout center">
                <mwc-checkbox id="chk-open-to-public" style="margin-right:0.5em;"
                              @change="${this._toggleChkOpenToPublic}"></mwc-checkbox>
                ${it("session.OpenToPublic")}
              </div>
              <div class="horizontal layout center" id="allowed-client-ips-container">
                ${it("session.AllowedClientIps")}
                <mwc-textfield id="allowed-client-ips" style="margin-left:1em;" helperPersistent
                               .helper="(${it("session.CommaSeparated")})"></mwc-textfield>
              </div>
            `}
            <div class="horizontal layout center">
              <mwc-checkbox id="chk-preferred-port" style="margin-right:0.5em;"></mwc-checkbox>
              ${it("session.TryPreferredPort")}
              <mwc-textfield id="app-port" type="number" no-label-float value="10250"
                             min="1025" max="65534" style="margin-left:1em;width:90px;"
                             @change="${e=>this._adjustPreferredAppPortNumber(e)}"></mwc-textfield>
            </div>
          </div>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="ssh-dialog" fixed backdrop>
        <span slot="title">SSH / SFTP connection</span>
        <div slot="content" style="padding:15px;">
          <div style="padding:15px 0;">${it("session.SFTPDescription")}</div>
          <section class="vertical layout wrap start start-justified">
            <h4>${it("session.ConnectionInformation")}</h4>
            <div><span>SSH URL:</span> <a href="ssh://127.0.0.1:${this.sshPort}">ssh://127.0.0.1:${this.sshPort}</a>
            </div>
            <div><span>SFTP URL:</span> <a href="sftp://127.0.0.1:${this.sshPort}">sftp://127.0.0.1:${this.sshPort}</a>
            </div>
            <div><span>Port:</span> ${this.sshPort}</div>
          </section>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <a id="sshkey-download-link" style="margin-top:15px;width:100%;" href="">
            <mwc-button unelevated fullwidth>${it("DownloadSSHKey")}</mwc-button>
          </a>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="tensorboard-dialog" fixed>
        <span slot="title">${it("session.TensorboardPath")}</span>
        <div slot="content" class="vertical layout">
          <div>${it("session.InputTensorboardPath")}</div>
          <mwc-textfield id="tensorboard-path" value="${it("session.DefaultTensorboardPath")}"></mwc-textfield>
        </div>
        <div slot="footer" class="horizontal end-justified center flex layout">
          <mwc-button unelevated fullwidth
              icon="rowing" class="bg green" @click="${e=>this._addTensorboardPath(e)}">
            ${it("session.UseThisPath")}
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="argument-dialog" fixed>
        <span slot="title">${it("session.Arguments")}</span>
        <div slot="content" class="vertical layout" style="padding:15px 10px;">
          <div>${it("session.ModifyArguments")}</div>
          <mwc-textfield value=""></mwc-textfield>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button unelevated fullwidth class="fg apps green" @click="${e=>this._addTensorboardPath(e)}">
            ${it("session.UseThisArguments")}
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="vnc-dialog" fixed backdrop>
        <span slot="title">${it("session.VNCconnection")}</span>
        <div slot="content" style="padding:15px;">
          <div style="padding:15px 0;">${it("session.UseYourFavoriteVNCApp")}</div>
          <section class="vertical layout wrap start start-justified">
            <h4>${it("session.ConnectionInformation")}</h4>
            <div><span>VNC URL:</span> <a href="ssh://127.0.0.1:${this.vncPort}">vnc://127.0.0.1:${this.vncPort}</a>
            </div>
          </section>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="xrdp-dialog" fixed backdrop>
        <span slot="title">${it("session.XRDPconnection")}</span>
        <div slot="content" style="padding:15px;">
          <div style="padding:15px 0;">${it("session.UseYourFavoriteMSTSCApp")}</div>
          <section class="vertical layout wrap start start-justified">
            <h4>${it("session.ConnectionInformation")}</h4>
            <div><span>RDP URL:</span> <a href="rdp://127.0.0.1:${this.xrdpPort}">rdp://127.0.0.1:${this.xrdpPort}</a>
            </div>
          </section>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="app-launch-confirmation-dialog" warning fixed backdrop>
        <span slot="title">${it("session.applauncher.AppMustBeRun")}</span>
        <div slot="content" class="vertical layout">
          <p>${it("session.applauncher.AppMustBeRunDialog")}</p>
          <p>${it("dialog.ask.DoYouWantToProceed")}</p>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
            raised
            id="app-launch-confirmation-button"
            icon="rowing"
            label="${it("session.applauncher.ConfirmAndRun")}"
            fullwidth
            @click="${()=>this._runApp(this.appController)}">
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="terminal-guide" fixed backdrop>
        <span slot="title">${it("webTerminalUsageGuide.CopyGuide")}</span>
        <div slot="content"></div>
        <div slot="footer"></div>
      </backend-ai-dialog>
    `}};o([we({type:Boolean})],Ds.prototype,"active",void 0),o([we({type:String})],Ds.prototype,"condition",void 0),o([we({type:Object})],Ds.prototype,"jobs",void 0),o([we({type:Array})],Ds.prototype,"appSupportList",void 0),o([we({type:Array})],Ds.prototype,"appSupportOption",void 0),o([we({type:Object})],Ds.prototype,"appTemplate",void 0),o([we({type:Object})],Ds.prototype,"imageInfo",void 0),o([we({type:Array})],Ds.prototype,"_selected_items",void 0),o([we({type:Boolean})],Ds.prototype,"refreshing",void 0),o([we({type:Object})],Ds.prototype,"notification",void 0),o([we({type:Object})],Ds.prototype,"spinner",void 0),o([we({type:Object})],Ds.prototype,"refreshTimer",void 0),o([we({type:Object})],Ds.prototype,"kernel_labels",void 0),o([we({type:Object})],Ds.prototype,"indicator",void 0),o([we({type:Number})],Ds.prototype,"sshPort",void 0),o([we({type:Number})],Ds.prototype,"vncPort",void 0),o([we({type:Number})],Ds.prototype,"xrdpPort",void 0),o([we({type:String})],Ds.prototype,"tensorboardPath",void 0),o([we({type:Boolean})],Ds.prototype,"isPathConfigured",void 0),o([we({type:Array})],Ds.prototype,"appLaunchBeforeTunneling",void 0),o([we({type:Object})],Ds.prototype,"appController",void 0),o([we({type:Object})],Ds.prototype,"openPortToPublic",void 0),o([we({type:Array})],Ds.prototype,"appOrder",void 0),o([we({type:Array})],Ds.prototype,"appSupportWithCategory",void 0),o([we({type:Object})],Ds.prototype,"appEnvs",void 0),o([we({type:Object})],Ds.prototype,"appArgs",void 0),Ds=o([_e("backend-ai-app-launcher")],Ds);let Us=class extends Bs{constructor(){super(),this.options=Object()}_readRecentProjectGroup(){const e=globalThis.backendaiclient._config.endpointHost.replace(/\./g,"_"),t=globalThis.backendaioptions.get("projectGroup."+e);return t?globalThis.backendaiclient.groups.length>0&&globalThis.backendaiclient.groups.includes(t)?t:(this._deleteRecentProjectGroupInfo(),globalThis.backendaiclient.current_group):globalThis.backendaiclient.current_group}_writeRecentProjectGroup(e){const t=globalThis.backendaiclient._config.endpointHost.replace(/\./g,"_");globalThis.backendaioptions.set("projectGroup."+t,e||globalThis.backendaiclient.current_group)}_deleteRecentProjectGroupInfo(){const e=globalThis.backendaiclient._config.endpointHost.replace(/\./g,"_");globalThis.backendaioptions.delete("projectGroup."+e)}_humanReadableFileSize(e,t=2){if(0===e)return"0 Bytes";const i=Math.pow(2,10),o=t<0?0:t;let n=Math.floor(Math.log(e)/Math.log(i));return n=n<0?0:n,parseFloat((e/Math.pow(i,n)).toFixed(o))+" "+["Bytes","KiB","MiB","GiB","TiB","PiB"][n]}_maskString(e="",t="*",i=0,o=0){return o=i+o>e.length?e.length:o,e.substring(0,i)+t.repeat(o)+e.substring(i+o,e.length)}deleteNestedKeyFromObject(e,t,i="."){if(!e||e.constructor!==Object||!t)return e;const o=t.split(i),n=o.pop();return n&&delete o.reduce(((e,t)=>e[t]),e)[n],e}mergeNestedObjects(e,t){if(!e||!t)return e||t||{};return[e,t].reduce((function e(t,i){return Object.entries(i).reduce(((t,[i,o])=>(t[i]=o&&o.constructor===Object?e(t[i]=t[i]||(Array.isArray(o)?[]:{}),o):o,t)),t)}),{})}render(){return z`
    `}};o([we({type:Object})],Us.prototype,"options",void 0),Us=o([_e("backend-ai-common-utils")],Us);var js=Us;let Hs=class extends Bs{constructor(){super(),this.lang="default",this.manualURL="",this.disabled=!1,this.URLmatchingTable={"":"summary/summary.html",summary:"summary/summary.html",job:"sessions_all/sessions_all.html",import:"import_run/import_run.html",data:"vfolder/vfolder.html",statistics:"statistics/statistics.html",credential:"admin_menu/admin_menu.html",environment:"admin_menu/admin_menu.html#manage-images",agent:"admin_menu/admin_menu.html#query-agent-nodes",settings:"admin_menu/admin_menu.html#system-settings",mainetenance:"admin_menu/admin_menu.html#server-management",information:"admin_menu/admin_menu.html#detailed-information",usersettings:"user_settings/user_settings.html"}}static get styles(){return[ae`
    mwc-icon-button {
      color: white;
    }
    `]}firstUpdated(){this.currentPage}connectedCallback(){super.connectedCallback()}get currentPage(){const e=globalThis.location.toString().split(/[/]+/).pop();return void 0===this.page?this.page="error":this.page=e,this.page}showHelpPage(){let e="";if(""!==this.manualURL)e=this.manualURL;else if(this.currentPage in this.URLmatchingTable){e=this.URLmatchingTable[this.currentPage];const t=globalThis.backendaioptions.get("current_language");["ko","en"].includes(t)?this.lang=t:this.lang="en"}this.showOnlineHelpPage(e)}showOnlineHelpPage(e){window.open(`https://webui.docs.backend.ai/${this.lang}/latest/`+e,"_blank")}render(){return z`
      <mwc-icon-button id="help-page-button" icon="help_outline" @click="${()=>this.showHelpPage()}"></mwc-icon-button>
    `}};o([we({type:String})],Hs.prototype,"lang",void 0),o([we({type:String})],Hs.prototype,"manualURL",void 0),o([we({type:String})],Hs.prototype,"page",void 0),o([we({type:Boolean})],Hs.prototype,"disabled",void 0),o([we({type:Object})],Hs.prototype,"URLmatchingTable",void 0),Hs=o([_e("backend-ai-help-button")],Hs);var qs;!function(e){e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e.AUTO="auto",e.FULLSCREEN="fullscreen"}(qs||(qs={})),qs.MEDIUM;let Vs=class extends Da{constructor(){super(...arguments),this.scrollable=!1,this.role="dialog"}get $focusTrap(){return this.$dialog}animateIn(){let e=!1;const t=()=>{e||(e=!0,this.didShow())},i=this.$dialog.animate([{transform:"scale(0.9) translate(0, 30px)",opacity:"0"},{transform:"scale(1) translate(0, 0)",opacity:"1"}],this.animationConfig),o=this.$backdrop.animate([{opacity:"0"},{opacity:"1"}],this.animationConfig);i.onfinish=t,o.onfinish=t,this.activeInAnimations.push(i,o)}animateOut(e){let t=!1;const i=()=>{t||(t=!0,this.resolve(e),this.didHide(e))},o=this.$dialog.animate([{transform:"translateY(0)",opacity:"1"},{transform:"translateY(30px)",opacity:"0"}],this.animationConfig),n=this.$backdrop.animate([{opacity:"1"},{opacity:"0"}],this.animationConfig);o.onfinish=i,n.onfinish=i,this.activeOutAnimations.push(o,n)}render(){return $r` <wl-backdrop id="backdrop" @click="${this.clickAway}"></wl-backdrop> <focus-trap id="dialog" ?inactive="${!this.open||this.disableFocusTrap}"> <slot name="header"></slot> <slot name="content"></slot> <slot></slot> <slot name="footer"></slot> </focus-trap> `}};Vs.styles=[...Da.styles,ta(":host{--_dialog-width:var(--dialog-width,auto);--_dialog-height:var(--dialog-height,auto);text-align:left;display:none;position:relative;outline:none}:host([scrollable]) #dialog{overflow:hidden}:host([scrollable]) ::slotted([slot=header]){padding:var(--dialog-header-padding-scrollable,1.5rem);border-bottom:var(--dialog-scrollable-border,.0625rem solid hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))))}:host([scrollable]) ::slotted([slot=footer]){border-top:var(--dialog-scrollable-border,.0625rem solid hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))))}:host([scrollable]) ::slotted([slot=content]){overflow-y:scroll;-webkit-overflow-scrolling:touch}:host([open]){display:flex;align-items:center;justify-content:center}::slotted([slot=header]){--h-margin:0;padding:var(--dialog-header-padding,1.5rem 1.5rem 0);margin:0;flex-shrink:0}::slotted([slot=footer]){padding:var(--dialog-footer-padding,.75rem);display:flex;align-items:center;justify-content:flex-end;flex-shrink:0}::slotted([slot=content]){padding:var(--dialog-content-padding,1.5rem);flex-grow:1}:host([fixed]){z-index:var(--dialog-z-index,1234567);will-change:transform,opacity;position:fixed;top:0;left:0;width:100%;height:100%}:host([fixed]) #dialog{min-width:var(--dialog-min-width,260px);min-height:var(--dialog-min-height,auto);max-width:var(--dialog-max-width,100vw);max-height:var(--dialog-max-height,100vh)}:host([size=small][fixed]){--_dialog-width:var(--dialog-width-s,40%);--_dialog-height:var(--dialog-height-s,40%)}:host([size=medium][fixed]){--_dialog-width:var(--dialog-width-m,50%);--_dialog-height:var(--dialog-height-m,50%)}:host([size=large][fixed]){--_dialog-width:var(--dialog-width-l,60%);--_dialog-height:var(--dialog-height-l,60%)}:host([size=auto][fixed]){--_dialog-width:var(--dialog-width-auto,auto);--_dialog-height:var(--dialog-height-auto,auto)}:host([size=fullscreen][fixed]){--_dialog-width:var(--dialog-width-fullscreen,100%);--_dialog-height:var(--dialog-height-fullscreen,100%)}:host([size=fullscreen][fixed]) #dialog{border-radius:0}#dialog{width:var(--_dialog-width);height:var(--_dialog-height);box-shadow:var(--dialog-elevation,var(--elevation-4,0 .5rem 1rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)));border-radius:var(--dialog-border-radius,.5rem);background:var(--dialog-bg,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));color:var(--dialog-color,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));padding:0;margin:0;outline:none;display:flex;flex-direction:column;align-items:stretch;border:none;overflow-y:auto;overscroll-behavior:contain;position:relative;z-index:1}")],o([Vr({type:String,reflect:!0}),n("design:type",String)],Vs.prototype,"size",void 0),o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],Vs.prototype,"scrollable",void 0),o([Vr({type:String,reflect:!0}),n("design:type",String)],Vs.prototype,"role",void 0),o([Wr("#dialog"),n("design:type",ka)],Vs.prototype,"$dialog",void 0),o([Wr("#backdrop"),n("design:type",Sa)],Vs.prototype,"$backdrop",void 0),Vs=o([Hr("wl-dialog")],Vs);let Ws=class extends ea{constructor(){super(...arguments),this.role="separator",this.vertical=!1}render(){return $r` <slot></slot> `}};Ws.styles=[ta(":host{background:var(--divider-color,rgba(0,0,0,.15));height:var(--divider-size,.0625rem);display:block;width:100%}:host([vertical]){width:var(--divider-size,.0625rem);height:100%}"),Ma],o([Vr({type:String,reflect:!0}),n("design:type",String)],Ws.prototype,"role",void 0),o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],Ws.prototype,"vertical",void 0),Ws=o([Hr("wl-divider")],Ws);let Gs=class extends ea{constructor(){super(...arguments),this.role="banner"}render(){return $r` <div id="content"> <slot name="icon"></slot> <slot></slot> </div> <div id="actions"> <slot name="action"></slot> </div> <wl-divider id="divider"></wl-divider> `}};Gs.styles=[Ma,ta(":host{padding:var(--banner-padding,.375rem);color:var(--banner-color,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));background:var(--banner-bg,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));flex-wrap:wrap;justify-content:flex-end;text-align:left;position:relative}#actions,#content,:host{display:flex;align-items:center;flex-wrap:wrap}::slotted([slot=icon]){margin:var(--banner-icon-margin,0 .75rem 0 0);color:var(--banner-icon-color,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}#content{padding:var(--banner-content-padding,.375rem .75rem);flex-grow:1}#divider{position:absolute;left:0;bottom:0;width:100%}")],o([Vr({type:String,reflect:!0}),n("design:type",String)],Gs.prototype,"role",void 0),Gs=o([Hr("wl-banner")],Gs);let Xs=class extends ds{render(){return $r`
			${this.bufferPerc>0?$r`
						<div id="buffer" style="transform: scaleX(${this.bufferPerc})"></div>
				  `:""}
			<div id="progress" style="${this.mode===cs.DETERMINATE?`transform: scaleX(${this.progressPerc})`:""}">
				<div id="before"></div>
				<div id="after"></div>
			</div>
		`}};Xs.styles=[...ds.styles,ta(":host{height:var(--progress-bar-height,.25rem);background:var(--progress-bar-bg,hsl(var(--shade-300,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,75%))));contain:strict;position:relative;display:block;overflow:hidden}#progress{background:var(--progress-bar-color,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}#buffer{background:var(--progress-bar-buffer-color,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.5))}:host([mode=indeterminate]) #progress #after,:host([mode=indeterminate]) #progress #before{background-color:inherit;position:absolute;height:100%;left:0;top:0;bottom:0;animation-duration:var(--progress-bar-indeterminate-duration,2.1s);animation-timing-function:var(--progress-bar-indeterminate-timing-function,var(--transition-timing-function-standard-curve,cubic-bezier(.4,0,.2,1)));animation-iteration-count:infinite}:host([mode=indeterminate]) #progress #before{animation-name:indeterminate}:host([mode=indeterminate]) #progress #after{animation-name:indeterminate-short;animation-delay:var(--progress-bar-indeterminate-short-delay,1.15s)}#buffer,:host([mode=determinate]) #progress{transition:var(--progress-bar-determinate-transition,transform var(--transition-timing-function-linear,linear));transform-origin:top left;position:absolute;top:0;left:0;height:100%;width:100%}@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}")],Xs=o([Hr("wl-progress-bar")],Xs);let Ks=class extends ea{constructor(){super(...arguments),this.level=1,this.nowrap=!1,this.role="heading"}updated(e){super.updated(e),e.has("level")&&ia(this,{"aria-level":this.level})}render(){return $r` <slot></slot> `}};Ks.styles=[Ma,ta(':host{margin:var(--title-margin,0 0 .2em);font-family:var(--title-font-family,var(--font-family-sans-serif,"Roboto Condensed",helvetica,sans-serif));font-weight:var(--title-font-weight,var(--font-weight-bold,800));line-height:var(--title-line-height,var(--line-height-m,1.5em));display:block}:host([nowrap]){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;line-height:1.1}:host([level="1"]){font-size:var(--title-font-size-level-1,1.875rem)}:host([level="2"]){font-size:var(--title-font-size-level-2,1.5625rem)}:host([level="3"]){font-size:var(--title-font-size-level-3,1.25rem)}:host([level="4"]){font-size:var(--title-font-size-level-4,1rem)}:host([level="5"]){font-size:var(--title-font-size-level-5,.75rem)}:host([level="6"]){font-size:var(--title-font-size-level-6,.5rem)}')],o([Vr({type:Number,reflect:!0}),n("design:type",Number)],Ks.prototype,"level",void 0),o([Vr({type:Boolean}),n("design:type",Boolean)],Ks.prototype,"nowrap",void 0),o([Vr({type:String,reflect:!0}),n("design:type",String)],Ks.prototype,"role",void 0),Ks=o([Hr("wl-title")],Ks);let Ys=class extends ye{constructor(){super(),this.value=0,this.delay=1e3,this.text="",this.mode="determinate"}static get styles(){return[ae`
        wl-dialog {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 9000;
          --dialog-height: 80px;
          --dialog-width: 250px;
          --dialog-content-padding: 15px;
        }
      `]}firstUpdated(){this.dialog=this.shadowRoot.querySelector("#app-progress-dialog")}connectedCallback(){super.connectedCallback()}async start(e="determinate"){this.value=0,this.mode=e,await this.updateComplete,this.dialog.show()}set(e,t=""){this.value=e/100,this.text=t,this.value>=1&&this.end(this.delay)}end(e=1e3){0!==e&&(this.delay=e),setTimeout((()=>{this.dialog.hide()}),e)}render(){return z`
      <wl-dialog id="app-progress-dialog" blockscrolling>
        <wl-title level="5" id="app-progress-text" slot="header">${this.text}</wl-title>
        <div slot="content">
        <wl-progress-bar .mode="${this.mode}" id="app-progress" .value="${this.value}"></wl-progress-bar>
        </div>
      </wl-dialog>
    `}};o([we({type:Number})],Ys.prototype,"value",void 0),o([we({type:Number})],Ys.prototype,"delay",void 0),o([we({type:String})],Ys.prototype,"text",void 0),o([we({type:String})],Ys.prototype,"mode",void 0),o([we({type:Object})],Ys.prototype,"dialog",void 0),Ys=o([_e("backend-ai-indicator")],Ys);let Qs=class extends ye{constructor(){super(),this.value=0,this.step=0,this.text="",this.mode="determinate",this.pool=[]}static get styles(){return[]}firstUpdated(){this.dialog=this.shadowRoot.querySelector("#app-progress-dialog")}connectedCallback(){super.connectedCallback()}async start(e="determinate"){this.gc();const t=document.createElement("backend-ai-indicator");return t.value=0,t.text=ze("notification.Initializing"),t.mode=e,t.style.bottom=20+90*this.step+"px",document.body.appendChild(t),this.pool.push(t),this.step=this.pool.length,await this.updateComplete,await t.start(),t}removeIndicator(e){const t=this.pool.filter((t=>t===e));if(t.length>0){const e=this.pool.indexOf(t[0]);e>-1&&this.pool.splice(e,1),document.body.removeChild(t[0]),t[0].remove(),console.log("deleted")}}gc(){const e=[];this.pool.forEach((t=>{console.log(t.value),t.value>=1&&e.push(t)})),e.forEach((e=>{setTimeout((()=>{this.removeIndicator(e)}),e.delay+500)}))}render(){return z`
    `}};o([we({type:Number})],Qs.prototype,"value",void 0),o([we({type:Number})],Qs.prototype,"step",void 0),o([we({type:String})],Qs.prototype,"text",void 0),o([we({type:String})],Qs.prototype,"mode",void 0),o([we({type:Object})],Qs.prototype,"dialog",void 0),o([we({type:Array})],Qs.prototype,"pool",void 0),Qs=o([_e("backend-ai-indicator-pool")],Qs);let Js=class extends ye{constructor(){super(),this.app="",this.description="",this.color="green",this.appColor="grey",this.ui="flat"}static get styles(){return[Ls,Ns,Ms,Fs,ae`
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
      `]}get _colorScheme(){return{brightgreen:{colorB:"#44cc11",colorT:"#222222"},lightgreen:{colorB:"#f3f5d0",colorT:"#222222"},green:{colorB:"#97ca00"},darkgreen:{colorB:"#457b3b"},yellow:{colorB:"#dfb317"},yellowgreen:{colorB:"#a4a61d"},orange:{colorB:"#fe7d37"},red:{colorB:"#e05d44"},blue:{colorB:"#007ec6"},purple:{colorB:"#ab47bc"},lightblue:{colorB:"#caedfc",colorT:"#222222"},grey:{colorB:"#555555"},gray:{colorB:"#555555"},lightgrey:{colorB:"#9f9f9f"},lightgray:{colorB:"#9f9f9f"}}}render(){return z`
      <div class="shields layout horizontal flex">
        <div id="app" class="app horizontal layout center">
          <slot name="app-icon"></slot>
          <span id="app-text" class="text app-text">${this.app}</span></div>
        <div id="description" class="desc horizontal layout center">
          <slot name="desc-icon"></slot>
          <span id="desc-text" class="text desc-text">${this.description}</span></div>
      </div>
    `}firstUpdated(){this._colorChanged(),this._appColorChanged(),this._formatItem(),this._descriptionChanged(),""==this.app&&(this.shadowRoot.querySelector("#app-text").style.display="none")}connectedCallback(){super.connectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"app"==e&&(this.app=i,this._appChanged()),"description"==e&&(this.description=i,this._descriptionChanged())}updated(e){e.has("color")&&this._colorChanged(),e.has("appColor")&&this._appColorChanged()}_classChanged(){this._formatItem()}_colorChanged(){this._colorScheme[this.color]&&(this.shadowRoot.querySelector(".desc").style.backgroundColor=this._colorScheme[this.color].colorB,this._colorScheme[this.color].colorT&&(this.shadowRoot.querySelector(".desc-text").style.color=this._colorScheme[this.color].colorT))}_appColorChanged(){this._colorScheme[this.appColor]?(this.shadowRoot.querySelector(".app").style.backgroundColor=this._colorScheme[this.appColor].colorB,this._colorScheme[this.appColor].colorT&&(this.shadowRoot.querySelector(".app-text").style.color=this._colorScheme[this.appColor].colorT)):this.shadowRoot.querySelector(".app").style.backgroundColor="#555"}async _appChanged(){await this.updateComplete,void 0===this.app||"undefined"==this.app||""===this.app?this.shadowRoot.querySelector("#app").style.display="none":this.shadowRoot.querySelector("#app").style.display="block"}async _descriptionChanged(){await this.updateComplete,void 0===this.description||"undefined"==this.description||""===this.description?this.shadowRoot.querySelector("#description").style.display="none":this.shadowRoot.querySelector("#description").style.display="block"}_formatItem(){["round"].indexOf(this.ui)>=0&&(this.shadowRoot.querySelector(".shields").classList.add(this.ui),void 0===this.description||"undefined"==this.description||""===this.description?void 0===this.app||"undefined"==this.app||""===this.app||this.shadowRoot.querySelector("#app").classList.add(this.ui):void 0===this.app||"undefined"==this.app||""===this.app?this.shadowRoot.querySelector("#description").classList.add(this.ui):(this.shadowRoot.querySelector("#app").classList.add(this.ui+"-left"),this.shadowRoot.querySelector("#description").classList.add(this.ui+"-right")))}};o([we({type:String})],Js.prototype,"app",void 0),o([we({type:String})],Js.prototype,"description",void 0),o([we({type:String})],Js.prototype,"color",void 0),o([we({type:String})],Js.prototype,"appColor",void 0),o([we({type:String})],Js.prototype,"ui",void 0),Js=o([_e("lablup-shields")],Js);var Zs;!function(e){e.CHANGE="change"}(Zs||(Zs={}));class el extends bs{constructor(){super(...arguments),this.checked=!1,this.ariaChecked=this.checked.toString(),this.role="checkbox",this.formElementType="checkbox"}firstUpdated(e){super.firstUpdated(e),this.onClick=this.onClick.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.attachListeners()}updated(e){super.updated(e),this.updateAria(e)}updateAria(e){e.has("checked")&&(this.ariaChecked=this.checked.toString())}attachListeners(){this.listeners.push(pa(this,"click",this.onClick.bind(this)),pa(this,"keydown",this.onKeyDown.bind(this)))}onClick(e){this.disabled?ua(e):this.toggle()}toggle(){this.checked=!this.checked,this.dispatchChangeEvent()}dispatchChangeEvent(){requestAnimationFrame((()=>{this.dispatchEvent(new CustomEvent(Zs.CHANGE,{composed:!0,bubbles:!0,detail:this.checked}))}))}onKeyDown(e){"Space"!==e.code&&"Enter"!==e.code||(this.click(),ua(e))}renderFormElement(){return $r` <input style="display: none;" id="${this.formElementId}" type="${this.formElementType}" ?checked="${this.checked}" ?required="${this.required}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" .value="${this.value}" name="${fs(this.name)}" aria-hidden="true" tabindex="-1"> `}}el.styles=[...bs.styles,ta("")],o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],el.prototype,"checked",void 0),o([Vr({type:String,reflect:!0,attribute:"aria-checked"}),n("design:type",String)],el.prototype,"ariaChecked",void 0),o([Vr({type:String,reflect:!0}),n("design:type",String)],el.prototype,"role",void 0);class tl extends el{constructor(){super(...arguments),this.indeterminate=!1}toggle(){this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked,this.dispatchChangeEvent()}updateAria(e){(e.has("checked")||e.has("indeterminate"))&&(this.ariaChecked=this.indeterminate?"mixed":this.checked.toString())}}tl.styles=[...el.styles,ta("")],o([Vr({type:Boolean,reflect:!0}),n("design:type",Boolean)],tl.prototype,"indeterminate",void 0);let il=class extends tl{render(){return $r` <svg id="checkmark" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 24 24"> <path id="checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path> <line id="indeterminate-path" fill="none" x1="0" y1="12.5" x2="24" y2="12.5"/> </svg> <wl-ripple id="ripple" .target="${this}" focusable overlay unbounded centered initialDuration="200"></wl-ripple> <slot></slot> ${this.renderFormElement()} `}};il.styles=[...el.styles,ta(":host{--_checkbox-bg:var(--checkbox-bg,transparent);--_checkbox-color:var(--checkbox-color,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))));background:var(--_checkbox-bg);color:var(--_checkbox-color);width:var(--checkbox-size,1.25rem);height:var(--checkbox-size,1.25rem);border:var(--checkbox-border-config,.125rem solid) currentColor;border-radius:var(--checkbox-border-radius,.375rem);transition:var(--checkbox-transition,background var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),border-color var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));position:relative;display:inline-flex;align-items:center;justify-content:center;outline:none;-webkit-user-select:none;user-select:none}:host(:not([disabled])){cursor:pointer}:host([checked]),:host([indeterminate]){--_checkbox-bg:var(--checkbox-bg-checked,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_checkbox-color:var(--checkbox-color-checked,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}:host([checked]:not([indeterminate])) #checkmark-path,:host([indeterminate]) #indeterminate-path{stroke-dashoffset:0}:host(:focus),:host(:hover){will-change:border,background}:host(:focus) #checkmark-path,:host(:hover) #checkmark-path{will-change:stroke-dashoffset}:host([disabled]){--_checkbox-bg:var(--checkbox-bg-disabled,transparent);--_checkbox-color:var(--checkbox-color-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));pointer-events:none}:host([disabled][checked]),:host([disabled][indeterminate]){--_checkbox-bg:var(--checkbox-bg-disabled-checked,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))));--_checkbox-color:var(--checkbox-color-disabled-checked,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))))}#checkmark{width:var(--checkbox-checkmark-size,.75rem);height:var(--checkbox-checkmark-size,.75rem)}#checkmark-path,#indeterminate-path{stroke-width:var(--checkbox-checkmark-path-width,.1875rem);stroke:var(--checkbox-checkmark-stroke-color,hsl(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));stroke-dasharray:var(--checkbox-checkmark-path-dasharray,30);stroke-dashoffset:var(--checkbox-checkmark-path-dasharray,30);transition:var(--checkbox-checkmark-transition,stroke-dashoffset var(--transition-duration-medium,.18s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)))}#checkmark-path{transition-delay:var(--checkbox-checkmark-path-delay,50ms)}#ripple{transform:var(--checkbox-ripple-transform,translate(-50%,-50%) scale(1.8))}")],il=o([Hr("wl-checkbox")],il);class ol{static relieve(e){if(void 0===e)return"Problem occurred.";if(console.log("Error:",e),!0===globalThis.backendaiwebui.debug)return e;if({}.hasOwnProperty.call(this.errorMessageTable,e))return ze(this.errorMessageTable[e]);for(const t of Object.keys(this.regexTable))if(RegExp(t).test(e))return ze(this.regexTable[t]);return e}}ol.errorMessageTable={"Cannot read property 'map' of null":"error.APINotSupported","TypeError: NetworkError when attempting to fetch resource.":"error.NetworkConnectionFailed","Login failed. Check login information.":"error.LoginFailed","User credential mismatch.":"error.LoginFailed","Authentication failed. Check information and manager status.":"error.AuthenticationFailed","Too many failed login attempts":"error.TooManyLoginFailures","server responded failure: 400 Bad Request - The virtual folder already exists with the same name.":"error.VirtualFolderAlreadyExist","400 Bad Request - The virtual folder already exists with the same name.":"error.VirtualFolderAlreadyExist","server responded failure: 400 Bad Request - One of your accessible vfolders already has the name you requested.":"error.VirtualFolderAlreadyExist","server responded failure: 400 Bad Request - You cannot create more vfolders.":"error.MaximumVfolderCreation","server responded failure: 400 Bad Request - Missing or invalid API parameters. (You cannot create more vfolders.)":"error.MaximumVfolderCreation","server responded failure: 400 Bad Request - Cannot change the options of a vfolder that is not owned by myself.":"error.CannotChangeVirtualFolderOption","server responded failure: 412 Precondition Failed - You have reached your resource limit.":"error.ReachedResourceLimit","Cannot read property 'split' of undefined":"error.UserHasNoGroup"},ol.regexTable={"\\w*not found matched token with email\\w*":"error.InvalidSignupToken","\\w*Access key not found\\w*":"error.LoginInformationMismatch","\\w*401 Unauthorized - Credential/signature mismatch\\w*":"error.LoginInformationMismatch",'integrity error: duplicate key value violates unique constraint "pk_resource_presets"[\\n]DETAIL:  Key \\(name\\)=\\([\\w]+\\) already exists.[\\n]':"error.ResourcePolicyAlreadyExist",'integrity error: duplicate key value violates unique constraint "pk_scaling_groups"[\\n]DETAIL:  Key \\(name\\)=\\([\\w]+\\) already exists.[\\n]':"error.ScalingGroupAlreadyExist",'integrity error: duplicate key value violates unique constraint "uq_users_username"[\\n]DETAIL:  Key \\(username\\)=\\([\\w]+\\) already exists.[\\n]':"error.UserNameAlreadyExist","server responded failure: 400 Bad Request - Missing or invalid API parameters. (Your resource quota is exceeded. (cpu=24 mem=512g cuda.shares=80))":"error.ResourceLimitExceed",'integrity error: update or delete on table "keypair_resource_policies" violates foreign key constraint "fk_keypairs_resource_policy_keypair_resource_policies" on table "keypairs"[\\n]DETAIL:  Key \\(name\\)=\\([\\w]+\\) is still referenced from table "keypairs".[\\n]':"error.ResourcePolicyStillReferenced","Your resource request is smaller than the minimum required by the image. (\\w*)":"error.SmallerResourceThenImageRequires"};let nl=class extends ye{constructor(){super(),this.tosEntryURL="/resources/documents/terms-of-service.en.html",this.tosEntry="terms-of-service",this.tosContent="",this.tosLanguage="en",this.tosLanguages=[{code:"ko",text:ze("language.Korean")},{code:"en",text:ze("language.English")}],this.title="",this.show=!1,this.approved=!1,this.block=!1,this.approveCheckbox=Object(),this.dialog=Object()}static get styles(){return[Jt,Ls,Ns,Ms,Fs,ae`
        @media screen and (max-width: 669px) {
          backend-ai-dialog.terms-of-service-dialog {
            --component-width: auto !important;
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
          width: 135px;
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

        #terms-of-service-dialog-content h1 {
          line-height: 1.2em;
        }
      `]}tos_contents(){return z`
    `}render(){return z`
      <backend-ai-dialog id="terms-of-service-dialog" class="terms-of-service-dialog" fixed blockscrolling persistent scrollable @dialog-closed=${()=>this.close()}>
        <span slot="title">${this.title}</span>
        <div slot="action" class="horizontal end-justified center flex layout">
          ${this.tosLanguages?z`
            <mwc-select id="select-language" label="${ze("language.Language")}"
              @change=${()=>this.changeLanguage()}>
              ${this.tosLanguages.map((e=>z`
                <mwc-list-item value="${e.text}" ?selected="${this.tosLanguage===e.code}">${e.text}</mwc-list-item>
              `))}
            </mwc-select>
          `:z``}
        </div>
        <div slot="content">
          <div id="terms-of-service-dialog-content"></div>
          <div class="horizontal end-justified flex layout">
            <div class="flex"></div>
            <mwc-button
                unelevated
                id="dismiss-button"
                label=${it("button.Dismiss")}
                @click="${()=>{this.close()}}"></mwc-button>
          </div>
        </div>
      </backend-ai-dialog>
    `}firstUpdated(){this.notification=globalThis.lablupNotification,this.dialog=this.shadowRoot.querySelector("#terms-of-service-dialog"),this.dialog.addEventListener("didShow",(()=>{this._syncOpenState()})),this.dialog.addEventListener("didHide",(()=>{this._syncOpenState()})),this.block&&(this.dialog.backdrop=!0),this.show&&this._showTOSdialog()}_syncOpenState(){this.show=this.dialog.open}async open(){await this.updateComplete,this._showTOSdialog()}close(){this.show=!1,this._hideTOSdialog()}changeLanguage(){const e=this.shadowRoot.querySelector("#select-language").value;this.tosContent="",this.tosLanguage=this.tosLanguages.filter((t=>t.text===e)).map((e=>e.code)).toString(),this._showTOSdialog(!0)}async sendRequest(e){let t,i;try{"GET"==e.method&&(e.body=void 0),t=await fetch(e.uri,e);const o=t.headers.get("Content-Type");if(i=o.startsWith("application/json")||o.startsWith("application/problem+json")?await t.json():o.startsWith("text/")?await t.text():await t.blob(),!t.ok)throw i}catch(e){console.log(e)}return i}_showTOSdialog(e=!1){if("default"===this.tosLanguage&&globalThis.backendaioptions.exists("current_language")&&(this.tosLanguage=globalThis.backendaioptions.get("current_language")),["ko","en"].includes(this.tosLanguage)||(this.tosLanguage="en"),this.tosEntryURL="/resources/documents/"+this.tosEntry+"."+this.tosLanguage+".html",""==this.tosContent){const t={method:"GET",uri:this.tosEntryURL,body:JSON.stringify({mode:"dialog"})};this.sendRequest(t).then((t=>{this.tosContent=void 0!==t?t:"",this.shadowRoot.querySelector("#terms-of-service-dialog-content").innerHTML=this.tosContent,this.show=!0,!1===e&&this.dialog.show()})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=ol.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)),this.shadowRoot.querySelector("#terms-of-service-dialog-content").innerHTML="Problem found while loading contents. Please try again later."}))}else this.show=!0,!1===e&&this.dialog.show()}_hideTOSdialog(){this.show=!1,this.dialog.hide()}_changeApproved(){return!0===this.approveCheckbox.checked?(this.show=!1,this.dialog.hide(),void(this.approved=!0)):void(this.approved=!1)}};o([we({type:String})],nl.prototype,"tosEntryURL",void 0),o([we({type:String})],nl.prototype,"tosEntry",void 0),o([we({type:String})],nl.prototype,"tosContent",void 0),o([we({type:String})],nl.prototype,"tosLanguage",void 0),o([we({type:Array})],nl.prototype,"tosLanguages",void 0),o([we({type:String})],nl.prototype,"title",void 0),o([we({type:Boolean})],nl.prototype,"show",void 0),o([we({type:Boolean})],nl.prototype,"approved",void 0),o([we({type:Boolean})],nl.prototype,"block",void 0),o([we({type:Object})],nl.prototype,"notification",void 0),o([we({type:Object})],nl.prototype,"approveCheckbox",void 0),o([we({type:Object})],nl.prototype,"dialog",void 0),nl=o([_e("lablup-terms-of-service")],nl);class rl{static create(...e){return new this(...e)}mixIn(e){return Object.assign(this,e)}clone(){const e=new this.constructor;return Object.assign(e,this),e}}class al extends rl{constructor(e=[],t=4*e.length){super();let i=e;if(i instanceof ArrayBuffer&&(i=new Uint8Array(i)),(i instanceof Int8Array||i instanceof Uint8ClampedArray||i instanceof Int16Array||i instanceof Uint16Array||i instanceof Int32Array||i instanceof Uint32Array||i instanceof Float32Array||i instanceof Float64Array)&&(i=new Uint8Array(i.buffer,i.byteOffset,i.byteLength)),i instanceof Uint8Array){const e=i.byteLength,t=[];for(let o=0;o<e;o+=1)t[o>>>2]|=i[o]<<24-o%4*8;this.words=t,this.sigBytes=e}else this.words=e,this.sigBytes=t}static random(e){const t=[],i=e=>{let t=e,i=987654321;const o=4294967295;return()=>{i=36969*(65535&i)+(i>>16)&o,t=18e3*(65535&t)+(t>>16)&o;let e=(i<<16)+t&o;return e/=4294967296,e+=.5,e*(Math.random()>.5?1:-1)}};for(let o,n=0;n<e;n+=4){const e=i(4294967296*(o||Math.random()));o=987654071*e(),t.push(4294967296*e()|0)}return new al(t,e)}toString(e=sl){return e.stringify(this)}concat(e){const t=this.words,i=e.words,o=this.sigBytes,n=e.sigBytes;if(this.clamp(),o%4)for(let e=0;e<n;e+=1){const n=i[e>>>2]>>>24-e%4*8&255;t[o+e>>>2]|=n<<24-(o+e)%4*8}else for(let e=0;e<n;e+=4)t[o+e>>>2]=i[e>>>2];return this.sigBytes+=n,this}clamp(){const{words:e,sigBytes:t}=this;e[t>>>2]&=4294967295<<32-t%4*8,e.length=Math.ceil(t/4)}clone(){const e=super.clone.call(this);return e.words=this.words.slice(0),e}}const sl={stringify(e){const{words:t,sigBytes:i}=e,o=[];for(let e=0;e<i;e+=1){const i=t[e>>>2]>>>24-e%4*8&255;o.push((i>>>4).toString(16)),o.push((15&i).toString(16))}return o.join("")},parse(e){const t=e.length,i=[];for(let o=0;o<t;o+=2)i[o>>>3]|=parseInt(e.substr(o,2),16)<<24-o%8*4;return new al(i,t/2)}},ll={stringify(e){const{words:t,sigBytes:i}=e,o=[];for(let e=0;e<i;e+=1){const i=t[e>>>2]>>>24-e%4*8&255;o.push(String.fromCharCode(i))}return o.join("")},parse(e){const t=e.length,i=[];for(let o=0;o<t;o+=1)i[o>>>2]|=(255&e.charCodeAt(o))<<24-o%4*8;return new al(i,t)}},cl={stringify(e){try{return decodeURIComponent(escape(ll.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:e=>ll.parse(unescape(encodeURIComponent(e)))};class dl extends rl{constructor(){super(),this._minBufferSize=0}reset(){this._data=new al,this._nDataBytes=0}_append(e){let t=e;"string"==typeof t&&(t=cl.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes}_process(e){let t;const{_data:i,blockSize:o}=this,n=i.words,r=i.sigBytes;let a=r/(4*o);a=e?Math.ceil(a):Math.max((0|a)-this._minBufferSize,0);const s=a*o,l=Math.min(4*s,r);if(s){for(let e=0;e<s;e+=o)this._doProcessBlock(n,e);t=n.splice(0,s),i.sigBytes-=l}return new al(t,l)}clone(){const e=super.clone.call(this);return e._data=this._data.clone(),e}}class pl extends dl{constructor(e){super(),this.blockSize=16,this.cfg=Object.assign(new rl,e),this.reset()}static _createHelper(e){return(t,i)=>new e(i).finalize(t)}static _createHmacHelper(e){return(t,i)=>new hl(e,i).finalize(t)}reset(){super.reset.call(this),this._doReset()}update(e){return this._append(e),this._process(),this}finalize(e){e&&this._append(e);return this._doFinalize()}}class hl extends rl{constructor(e,t){super();const i=new e;this._hasher=i;let o=t;"string"==typeof o&&(o=cl.parse(o));const n=i.blockSize,r=4*n;o.sigBytes>r&&(o=i.finalize(t)),o.clamp();const a=o.clone();this._oKey=a;const s=o.clone();this._iKey=s;const l=a.words,c=s.words;for(let e=0;e<n;e+=1)l[e]^=1549556828,c[e]^=909522486;a.sigBytes=r,s.sigBytes=r,this.reset()}reset(){const e=this._hasher;e.reset(),e.update(this._iKey)}update(e){return this._hasher.update(e),this}finalize(e){const t=this._hasher,i=t.finalize(e);t.reset();return t.finalize(this._oKey.clone().concat(i))}}const ul=al;class ml extends rl{constructor(e,t){super(),this.high=e,this.low=t}}class gl extends rl{constructor(e=[],t=8*e.length){super(),this.words=e,this.sigBytes=t}toX32(){const e=this.words,t=e.length,i=[];for(let o=0;o<t;o+=1){const t=e[o];i.push(t.high),i.push(t.low)}return ul.create(i,this.sigBytes)}clone(){const e=super.clone.call(this);e.words=this.words.slice(0);const{words:t}=e,i=t.length;for(let e=0;e<i;e+=1)t[e]=t[e].clone();return e}}const fl={stringify(e){const{words:t,sigBytes:i}=e,o=this._map;e.clamp();const n=[];for(let e=0;e<i;e+=3){const r=(t[e>>>2]>>>24-e%4*8&255)<<16|(t[e+1>>>2]>>>24-(e+1)%4*8&255)<<8|t[e+2>>>2]>>>24-(e+2)%4*8&255;for(let t=0;t<4&&e+.75*t<i;t+=1)n.push(o.charAt(r>>>6*(3-t)&63))}const r=o.charAt(64);if(r)for(;n.length%4;)n.push(r);return n.join("")},parse(e){let t=e.length;const i=this._map;let o=this._reverseMap;if(!o){this._reverseMap=[],o=this._reverseMap;for(let e=0;e<i.length;e+=1)o[i.charCodeAt(e)]=e}const n=i.charAt(64);if(n){const i=e.indexOf(n);-1!==i&&(t=i)}return((e,t,i)=>{const o=[];let n=0;for(let r=0;r<t;r+=1)if(r%4){const t=i[e.charCodeAt(r-1)]<<r%4*2|i[e.charCodeAt(r)]>>>6-r%4*2;o[n>>>2]|=t<<24-n%4*8,n+=1}return al.create(o,n)})(e,t,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},bl=[];for(let e=0;e<64;e+=1)bl[e]=4294967296*Math.abs(Math.sin(e+1))|0;const yl=(e,t,i,o,n,r,a)=>{const s=e+(t&i|~t&o)+n+a;return(s<<r|s>>>32-r)+t},vl=(e,t,i,o,n,r,a)=>{const s=e+(t&o|i&~o)+n+a;return(s<<r|s>>>32-r)+t},_l=(e,t,i,o,n,r,a)=>{const s=e+(t^i^o)+n+a;return(s<<r|s>>>32-r)+t},xl=(e,t,i,o,n,r,a)=>{const s=e+(i^(t|~o))+n+a;return(s<<r|s>>>32-r)+t};class wl extends pl{_doReset(){this._hash=new al([1732584193,4023233417,2562383102,271733878])}_doProcessBlock(e,t){const i=e;for(let o=0;o<16;o+=1){const n=t+o,r=e[n];i[n]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8)}const o=this._hash.words,n=i[t+0],r=i[t+1],a=i[t+2],s=i[t+3],l=i[t+4],c=i[t+5],d=i[t+6],p=i[t+7],h=i[t+8],u=i[t+9],m=i[t+10],g=i[t+11],f=i[t+12],b=i[t+13],y=i[t+14],v=i[t+15];let _=o[0],x=o[1],w=o[2],k=o[3];_=yl(_,x,w,k,n,7,bl[0]),k=yl(k,_,x,w,r,12,bl[1]),w=yl(w,k,_,x,a,17,bl[2]),x=yl(x,w,k,_,s,22,bl[3]),_=yl(_,x,w,k,l,7,bl[4]),k=yl(k,_,x,w,c,12,bl[5]),w=yl(w,k,_,x,d,17,bl[6]),x=yl(x,w,k,_,p,22,bl[7]),_=yl(_,x,w,k,h,7,bl[8]),k=yl(k,_,x,w,u,12,bl[9]),w=yl(w,k,_,x,m,17,bl[10]),x=yl(x,w,k,_,g,22,bl[11]),_=yl(_,x,w,k,f,7,bl[12]),k=yl(k,_,x,w,b,12,bl[13]),w=yl(w,k,_,x,y,17,bl[14]),x=yl(x,w,k,_,v,22,bl[15]),_=vl(_,x,w,k,r,5,bl[16]),k=vl(k,_,x,w,d,9,bl[17]),w=vl(w,k,_,x,g,14,bl[18]),x=vl(x,w,k,_,n,20,bl[19]),_=vl(_,x,w,k,c,5,bl[20]),k=vl(k,_,x,w,m,9,bl[21]),w=vl(w,k,_,x,v,14,bl[22]),x=vl(x,w,k,_,l,20,bl[23]),_=vl(_,x,w,k,u,5,bl[24]),k=vl(k,_,x,w,y,9,bl[25]),w=vl(w,k,_,x,s,14,bl[26]),x=vl(x,w,k,_,h,20,bl[27]),_=vl(_,x,w,k,b,5,bl[28]),k=vl(k,_,x,w,a,9,bl[29]),w=vl(w,k,_,x,p,14,bl[30]),x=vl(x,w,k,_,f,20,bl[31]),_=_l(_,x,w,k,c,4,bl[32]),k=_l(k,_,x,w,h,11,bl[33]),w=_l(w,k,_,x,g,16,bl[34]),x=_l(x,w,k,_,y,23,bl[35]),_=_l(_,x,w,k,r,4,bl[36]),k=_l(k,_,x,w,l,11,bl[37]),w=_l(w,k,_,x,p,16,bl[38]),x=_l(x,w,k,_,m,23,bl[39]),_=_l(_,x,w,k,b,4,bl[40]),k=_l(k,_,x,w,n,11,bl[41]),w=_l(w,k,_,x,s,16,bl[42]),x=_l(x,w,k,_,d,23,bl[43]),_=_l(_,x,w,k,u,4,bl[44]),k=_l(k,_,x,w,f,11,bl[45]),w=_l(w,k,_,x,v,16,bl[46]),x=_l(x,w,k,_,a,23,bl[47]),_=xl(_,x,w,k,n,6,bl[48]),k=xl(k,_,x,w,p,10,bl[49]),w=xl(w,k,_,x,y,15,bl[50]),x=xl(x,w,k,_,c,21,bl[51]),_=xl(_,x,w,k,f,6,bl[52]),k=xl(k,_,x,w,s,10,bl[53]),w=xl(w,k,_,x,m,15,bl[54]),x=xl(x,w,k,_,r,21,bl[55]),_=xl(_,x,w,k,h,6,bl[56]),k=xl(k,_,x,w,v,10,bl[57]),w=xl(w,k,_,x,d,15,bl[58]),x=xl(x,w,k,_,b,21,bl[59]),_=xl(_,x,w,k,l,6,bl[60]),k=xl(k,_,x,w,g,10,bl[61]),w=xl(w,k,_,x,a,15,bl[62]),x=xl(x,w,k,_,u,21,bl[63]),o[0]=o[0]+_|0,o[1]=o[1]+x|0,o[2]=o[2]+w|0,o[3]=o[3]+k|0}_doFinalize(){const e=this._data,t=e.words,i=8*this._nDataBytes,o=8*e.sigBytes;t[o>>>5]|=128<<24-o%32;const n=Math.floor(i/4294967296),r=i;t[15+(o+64>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),t[14+(o+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),e.sigBytes=4*(t.length+1),this._process();const a=this._hash,s=a.words;for(let e=0;e<4;e+=1){const t=s[e];s[e]=16711935&(t<<8|t>>>24)|4278255360&(t<<24|t>>>8)}return a}clone(){const e=super.clone.call(this);return e._hash=this._hash.clone(),e}}const kl=pl._createHelper(wl),Sl=pl._createHmacHelper(wl);class El extends rl{constructor(e){super(),this.cfg=Object.assign(new rl,{keySize:4,hasher:wl,iterations:1},e)}compute(e,t){let i;const{cfg:o}=this,n=o.hasher.create(),r=al.create(),a=r.words,{keySize:s,iterations:l}=o;for(;a.length<s;){i&&n.update(i),i=n.update(e).finalize(t),n.reset();for(let e=1;e<l;e+=1)i=n.finalize(i),n.reset();r.concat(i)}return r.sigBytes=4*s,r}}class Tl extends dl{constructor(e,t,i){super(),this.cfg=Object.assign(new rl,i),this._xformMode=e,this._key=t,this.reset()}static createEncryptor(e,t){return this.create(this._ENC_XFORM_MODE,e,t)}static createDecryptor(e,t){return this.create(this._DEC_XFORM_MODE,e,t)}static _createHelper(e){const t=e=>"string"==typeof e?Fl:Nl;return{encrypt:(i,o,n)=>t(o).encrypt(e,i,o,n),decrypt:(i,o,n)=>t(o).decrypt(e,i,o,n)}}reset(){super.reset.call(this),this._doReset()}process(e){return this._append(e),this._process()}finalize(e){e&&this._append(e);return this._doFinalize()}}Tl._ENC_XFORM_MODE=1,Tl._DEC_XFORM_MODE=2,Tl.keySize=4,Tl.ivSize=4;class Cl extends Tl{constructor(...e){super(...e),this.blockSize=1}_doFinalize(){return this._process(!0)}}class Al extends rl{constructor(e,t){super(),this._cipher=e,this._iv=t}static createEncryptor(e,t){return this.Encryptor.create(e,t)}static createDecryptor(e,t){return this.Decryptor.create(e,t)}}function Il(e,t,i){const o=e;let n;const r=this._iv;r?(n=r,this._iv=void 0):n=this._prevBlock;for(let e=0;e<i;e+=1)o[t+e]^=n[e]}class Ol extends Al{}Ol.Encryptor=class extends Ol{processBlock(e,t){const i=this._cipher,{blockSize:o}=i;Il.call(this,e,t,o),i.encryptBlock(e,t),this._prevBlock=e.slice(t,t+o)}},Ol.Decryptor=class extends Ol{processBlock(e,t){const i=this._cipher,{blockSize:o}=i,n=e.slice(t,t+o);i.decryptBlock(e,t),Il.call(this,e,t,o),this._prevBlock=n}};const $l={pad(e,t){const i=4*t,o=i-e.sigBytes%i,n=o<<24|o<<16|o<<8|o,r=[];for(let e=0;e<o;e+=4)r.push(n);const a=al.create(r,o);e.concat(a)},unpad(e){const t=e,i=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=i}};class Rl extends Tl{constructor(e,t,i){super(e,t,Object.assign({mode:Ol,padding:$l},i)),this.blockSize=4}reset(){let e;super.reset.call(this);const{cfg:t}=this,{iv:i,mode:o}=t;this._xformMode===this.constructor._ENC_XFORM_MODE?e=o.createEncryptor:(e=o.createDecryptor,this._minBufferSize=1),this._mode=e.call(o,this,i&&i.words),this._mode.__creator=e}_doProcessBlock(e,t){this._mode.processBlock(e,t)}_doFinalize(){let e;const{padding:t}=this.cfg;return this._xformMode===this.constructor._ENC_XFORM_MODE?(t.pad(this._data,this.blockSize),e=this._process(!0)):(e=this._process(!0),t.unpad(e)),e}}class Pl extends rl{constructor(e){super(),this.mixIn(e)}toString(e){return(e||this.formatter).stringify(this)}}const Ll={stringify(e){let t;const{ciphertext:i,salt:o}=e;return t=o?al.create([1398893684,1701076831]).concat(o).concat(i):i,t.toString(fl)},parse(e){let t;const i=fl.parse(e),o=i.words;return 1398893684===o[0]&&1701076831===o[1]&&(t=al.create(o.slice(2,4)),o.splice(0,4),i.sigBytes-=16),Pl.create({ciphertext:i,salt:t})}};class Nl extends rl{static encrypt(e,t,i,o){const n=Object.assign(new rl,this.cfg,o),r=e.createEncryptor(i,n),a=r.finalize(t),s=r.cfg;return Pl.create({ciphertext:a,key:i,iv:s.iv,algorithm:e,mode:s.mode,padding:s.padding,blockSize:r.blockSize,formatter:n.format})}static decrypt(e,t,i,o){let n=t;const r=Object.assign(new rl,this.cfg,o);n=this._parse(n,r.format);return e.createDecryptor(i,r).finalize(n.ciphertext)}static _parse(e,t){return"string"==typeof e?t.parse(e,this):e}}Nl.cfg=Object.assign(new rl,{format:Ll});const Ml={execute(e,t,i,o){let n=o;n||(n=al.random(8));const r=El.create({keySize:t+i}).compute(e,n),a=al.create(r.words.slice(t),4*i);return r.sigBytes=4*t,Pl.create({key:r,iv:a,salt:n})}};class Fl extends Nl{static encrypt(e,t,i,o){const n=Object.assign(new rl,this.cfg,o),r=n.kdf.execute(i,e.keySize,e.ivSize);n.iv=r.iv;const a=Nl.encrypt.call(this,e,t,r.key,n);return a.mixIn(r),a}static decrypt(e,t,i,o){let n=t;const r=Object.assign(new rl,this.cfg,o);n=this._parse(n,r.format);const a=r.kdf.execute(i,e.keySize,e.ivSize,n.salt);r.iv=a.iv;return Nl.decrypt.call(this,e,n,a.key,r)}}Fl.cfg=Object.assign(Nl.cfg,{kdf:Ml});const zl=e=>e<<8&4278255360|e>>>8&16711935,Bl={stringify(e){const{words:t,sigBytes:i}=e,o=[];for(let e=0;e<i;e+=2){const i=t[e>>>2]>>>16-e%4*8&65535;o.push(String.fromCharCode(i))}return o.join("")},parse(e){const t=e.length,i=[];for(let o=0;o<t;o+=1)i[o>>>1]|=e.charCodeAt(o)<<16-o%2*16;return al.create(i,2*t)}},Dl=Bl,Ul={stringify(e){const{words:t,sigBytes:i}=e,o=[];for(let e=0;e<i;e+=2){const i=zl(t[e>>>2]>>>16-e%4*8&65535);o.push(String.fromCharCode(i))}return o.join("")},parse(e){const t=e.length,i=[];for(let o=0;o<t;o+=1)i[o>>>1]|=zl(e.charCodeAt(o)<<16-o%2*16);return al.create(i,2*t)}},jl=[];class Hl extends pl{_doReset(){this._hash=new al([1732584193,4023233417,2562383102,271733878,3285377520])}_doProcessBlock(e,t){const i=this._hash.words;let o=i[0],n=i[1],r=i[2],a=i[3],s=i[4];for(let i=0;i<80;i+=1){if(i<16)jl[i]=0|e[t+i];else{const e=jl[i-3]^jl[i-8]^jl[i-14]^jl[i-16];jl[i]=e<<1|e>>>31}let l=(o<<5|o>>>27)+s+jl[i];l+=i<20?1518500249+(n&r|~n&a):i<40?1859775393+(n^r^a):i<60?(n&r|n&a|r&a)-1894007588:(n^r^a)-899497514,s=a,a=r,r=n<<30|n>>>2,n=o,o=l}i[0]=i[0]+o|0,i[1]=i[1]+n|0,i[2]=i[2]+r|0,i[3]=i[3]+a|0,i[4]=i[4]+s|0}_doFinalize(){const e=this._data,t=e.words,i=8*this._nDataBytes,o=8*e.sigBytes;return t[o>>>5]|=128<<24-o%32,t[14+(o+64>>>9<<4)]=Math.floor(i/4294967296),t[15+(o+64>>>9<<4)]=i,e.sigBytes=4*t.length,this._process(),this._hash}clone(){const e=super.clone.call(this);return e._hash=this._hash.clone(),e}}const ql=pl._createHelper(Hl),Vl=pl._createHmacHelper(Hl),Wl=[],Gl=[],Xl=e=>{const t=Math.sqrt(e);for(let i=2;i<=t;i+=1)if(!(e%i))return!1;return!0},Kl=e=>4294967296*(e-(0|e))|0;let Yl=2,Ql=0;for(;Ql<64;)Xl(Yl)&&(Ql<8&&(Wl[Ql]=Kl(Yl**.5)),Gl[Ql]=Kl(Yl**(1/3)),Ql+=1),Yl+=1;const Jl=[];class Zl extends pl{_doReset(){this._hash=new al(Wl.slice(0))}_doProcessBlock(e,t){const i=this._hash.words;let o=i[0],n=i[1],r=i[2],a=i[3],s=i[4],l=i[5],c=i[6],d=i[7];for(let i=0;i<64;i+=1){if(i<16)Jl[i]=0|e[t+i];else{const e=Jl[i-15],t=(e<<25|e>>>7)^(e<<14|e>>>18)^e>>>3,o=Jl[i-2],n=(o<<15|o>>>17)^(o<<13|o>>>19)^o>>>10;Jl[i]=t+Jl[i-7]+n+Jl[i-16]}const p=o&n^o&r^n&r,h=(o<<30|o>>>2)^(o<<19|o>>>13)^(o<<10|o>>>22),u=d+((s<<26|s>>>6)^(s<<21|s>>>11)^(s<<7|s>>>25))+(s&l^~s&c)+Gl[i]+Jl[i];d=c,c=l,l=s,s=a+u|0,a=r,r=n,n=o,o=u+(h+p)|0}i[0]=i[0]+o|0,i[1]=i[1]+n|0,i[2]=i[2]+r|0,i[3]=i[3]+a|0,i[4]=i[4]+s|0,i[5]=i[5]+l|0,i[6]=i[6]+c|0,i[7]=i[7]+d|0}_doFinalize(){const e=this._data,t=e.words,i=8*this._nDataBytes,o=8*e.sigBytes;return t[o>>>5]|=128<<24-o%32,t[14+(o+64>>>9<<4)]=Math.floor(i/4294967296),t[15+(o+64>>>9<<4)]=i,e.sigBytes=4*t.length,this._process(),this._hash}clone(){const e=super.clone.call(this);return e._hash=this._hash.clone(),e}}const ec=pl._createHelper(Zl),tc=pl._createHmacHelper(Zl);class ic extends Zl{_doReset(){this._hash=new al([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])}_doFinalize(){const e=super._doFinalize.call(this);return e.sigBytes-=4,e}}const oc=Zl._createHelper(ic),nc=Zl._createHmacHelper(ic),rc=[new ml(1116352408,3609767458),new ml(1899447441,602891725),new ml(3049323471,3964484399),new ml(3921009573,2173295548),new ml(961987163,4081628472),new ml(1508970993,3053834265),new ml(2453635748,2937671579),new ml(2870763221,3664609560),new ml(3624381080,2734883394),new ml(310598401,1164996542),new ml(607225278,1323610764),new ml(1426881987,3590304994),new ml(1925078388,4068182383),new ml(2162078206,991336113),new ml(2614888103,633803317),new ml(3248222580,3479774868),new ml(3835390401,2666613458),new ml(4022224774,944711139),new ml(264347078,2341262773),new ml(604807628,2007800933),new ml(770255983,1495990901),new ml(1249150122,1856431235),new ml(1555081692,3175218132),new ml(1996064986,2198950837),new ml(2554220882,3999719339),new ml(2821834349,766784016),new ml(2952996808,2566594879),new ml(3210313671,3203337956),new ml(3336571891,1034457026),new ml(3584528711,2466948901),new ml(113926993,3758326383),new ml(338241895,168717936),new ml(666307205,1188179964),new ml(773529912,1546045734),new ml(1294757372,1522805485),new ml(1396182291,2643833823),new ml(1695183700,2343527390),new ml(1986661051,1014477480),new ml(2177026350,1206759142),new ml(2456956037,344077627),new ml(2730485921,1290863460),new ml(2820302411,3158454273),new ml(3259730800,3505952657),new ml(3345764771,106217008),new ml(3516065817,3606008344),new ml(3600352804,1432725776),new ml(4094571909,1467031594),new ml(275423344,851169720),new ml(430227734,3100823752),new ml(506948616,1363258195),new ml(659060556,3750685593),new ml(883997877,3785050280),new ml(958139571,3318307427),new ml(1322822218,3812723403),new ml(1537002063,2003034995),new ml(1747873779,3602036899),new ml(1955562222,1575990012),new ml(2024104815,1125592928),new ml(2227730452,2716904306),new ml(2361852424,442776044),new ml(2428436474,593698344),new ml(2756734187,3733110249),new ml(3204031479,2999351573),new ml(3329325298,3815920427),new ml(3391569614,3928383900),new ml(3515267271,566280711),new ml(3940187606,3454069534),new ml(4118630271,4000239992),new ml(116418474,1914138554),new ml(174292421,2731055270),new ml(289380356,3203993006),new ml(460393269,320620315),new ml(685471733,587496836),new ml(852142971,1086792851),new ml(1017036298,365543100),new ml(1126000580,2618297676),new ml(1288033470,3409855158),new ml(1501505948,4234509866),new ml(1607167915,987167468),new ml(1816402316,1246189591)],ac=[];for(let e=0;e<80;e+=1)ac[e]=new ml;class sc extends pl{constructor(){super(),this.blockSize=32}_doReset(){this._hash=new gl([new ml(1779033703,4089235720),new ml(3144134277,2227873595),new ml(1013904242,4271175723),new ml(2773480762,1595750129),new ml(1359893119,2917565137),new ml(2600822924,725511199),new ml(528734635,4215389547),new ml(1541459225,327033209)])}_doProcessBlock(e,t){const i=this._hash.words,o=i[0],n=i[1],r=i[2],a=i[3],s=i[4],l=i[5],c=i[6],d=i[7],p=o.high;let h=o.low;const u=n.high;let m=n.low;const g=r.high;let f=r.low;const b=a.high;let y=a.low;const v=s.high;let _=s.low;const x=l.high;let w=l.low;const k=c.high;let S=c.low;const E=d.high;let T=d.low,C=p,A=h,I=u,O=m,$=g,R=f,P=b,L=y,N=v,M=_,F=x,z=w,B=k,D=S,U=E,j=T;for(let i=0;i<80;i+=1){let o,n;const r=ac[i];if(i<16)r.high=0|e[t+2*i],n=r.high,r.low=0|e[t+2*i+1],o=r.low;else{const e=ac[i-15],t=e.high,a=e.low,s=(t>>>1|a<<31)^(t>>>8|a<<24)^t>>>7,l=(a>>>1|t<<31)^(a>>>8|t<<24)^(a>>>7|t<<25),c=ac[i-2],d=c.high,p=c.low,h=(d>>>19|p<<13)^(d<<3|p>>>29)^d>>>6,u=(p>>>19|d<<13)^(p<<3|d>>>29)^(p>>>6|d<<26),m=ac[i-7],g=m.high,f=m.low,b=ac[i-16],y=b.high,v=b.low;o=l+f,n=s+g+(o>>>0<l>>>0?1:0),o+=u,n=n+h+(o>>>0<u>>>0?1:0),o+=v,n=n+y+(o>>>0<v>>>0?1:0),r.high=n,r.low=o}const a=N&F^~N&B,s=M&z^~M&D,l=C&I^C&$^I&$,c=A&O^A&R^O&R,d=(C>>>28|A<<4)^(C<<30|A>>>2)^(C<<25|A>>>7),p=(A>>>28|C<<4)^(A<<30|C>>>2)^(A<<25|C>>>7),h=(N>>>14|M<<18)^(N>>>18|M<<14)^(N<<23|M>>>9),u=(M>>>14|N<<18)^(M>>>18|N<<14)^(M<<23|N>>>9),m=rc[i],g=m.high,f=m.low;let b=j+u,y=U+h+(b>>>0<j>>>0?1:0);b+=s,y=y+a+(b>>>0<s>>>0?1:0),b+=f,y=y+g+(b>>>0<f>>>0?1:0),b+=o,y=y+n+(b>>>0<o>>>0?1:0);const v=p+c;U=B,j=D,B=F,D=z,F=N,z=M,M=L+b|0,N=P+y+(M>>>0<L>>>0?1:0)|0,P=$,L=R,$=I,R=O,I=C,O=A,A=b+v|0,C=y+(d+l+(v>>>0<p>>>0?1:0))+(A>>>0<b>>>0?1:0)|0}o.low=h+A,h=o.low,o.high=p+C+(h>>>0<A>>>0?1:0),n.low=m+O,m=n.low,n.high=u+I+(m>>>0<O>>>0?1:0),r.low=f+R,f=r.low,r.high=g+$+(f>>>0<R>>>0?1:0),a.low=y+L,y=a.low,a.high=b+P+(y>>>0<L>>>0?1:0),s.low=_+M,_=s.low,s.high=v+N+(_>>>0<M>>>0?1:0),l.low=w+z,w=l.low,l.high=x+F+(w>>>0<z>>>0?1:0),c.low=S+D,S=c.low,c.high=k+B+(S>>>0<D>>>0?1:0),d.low=T+j,T=d.low,d.high=E+U+(T>>>0<j>>>0?1:0)}_doFinalize(){const e=this._data,t=e.words,i=8*this._nDataBytes,o=8*e.sigBytes;t[o>>>5]|=128<<24-o%32,t[30+(o+128>>>10<<5)]=Math.floor(i/4294967296),t[31+(o+128>>>10<<5)]=i,e.sigBytes=4*t.length,this._process();return this._hash.toX32()}clone(){const e=super.clone.call(this);return e._hash=this._hash.clone(),e}}const lc=pl._createHelper(sc),cc=pl._createHmacHelper(sc);class dc extends sc{_doReset(){this._hash=new gl([new ml(3418070365,3238371032),new ml(1654270250,914150663),new ml(2438529370,812702999),new ml(355462360,4144912697),new ml(1731405415,4290775857),new ml(2394180231,1750603025),new ml(3675008525,1694076839),new ml(1203062813,3204075428)])}_doFinalize(){const e=super._doFinalize.call(this);return e.sigBytes-=16,e}}const pc=sc._createHelper(dc),hc=sc._createHmacHelper(dc),uc=[],mc=[],gc=[];let fc=1,bc=0;for(let e=0;e<24;e+=1){uc[fc+5*bc]=(e+1)*(e+2)/2%64;const t=(2*fc+3*bc)%5;fc=bc%5,bc=t}for(let e=0;e<5;e+=1)for(let t=0;t<5;t+=1)mc[e+5*t]=t+(2*e+3*t)%5*5;let yc=1;for(let e=0;e<24;e+=1){let t=0,i=0;for(let e=0;e<7;e+=1){if(1&yc){const o=(1<<e)-1;o<32?i^=1<<o:t^=1<<o-32}128&yc?yc=yc<<1^113:yc<<=1}gc[e]=ml.create(t,i)}const vc=[];for(let e=0;e<25;e+=1)vc[e]=ml.create();class _c extends pl{constructor(e){super(Object.assign({outputLength:512},e))}_doReset(){this._state=[];const e=this._state;for(let t=0;t<25;t+=1)e[t]=new ml;this.blockSize=(1600-2*this.cfg.outputLength)/32}_doProcessBlock(e,t){const i=this._state,o=this.blockSize/2;for(let n=0;n<o;n+=1){let o=e[t+2*n],r=e[t+2*n+1];o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8);const a=i[n];a.high^=r,a.low^=o}for(let e=0;e<24;e+=1){for(let e=0;e<5;e+=1){let t=0,o=0;for(let n=0;n<5;n+=1){const r=i[e+5*n];t^=r.high,o^=r.low}const n=vc[e];n.high=t,n.low=o}for(let e=0;e<5;e+=1){const t=vc[(e+4)%5],o=vc[(e+1)%5],n=o.high,r=o.low,a=t.high^(n<<1|r>>>31),s=t.low^(r<<1|n>>>31);for(let t=0;t<5;t+=1){const o=i[e+5*t];o.high^=a,o.low^=s}}for(let e=1;e<25;e+=1){let t,o;const n=i[e],r=n.high,a=n.low,s=uc[e];s<32?(t=r<<s|a>>>32-s,o=a<<s|r>>>32-s):(t=a<<s-32|r>>>64-s,o=r<<s-32|a>>>64-s);const l=vc[mc[e]];l.high=t,l.low=o}const t=vc[0],o=i[0];t.high=o.high,t.low=o.low;for(let e=0;e<5;e+=1)for(let t=0;t<5;t+=1){const o=e+5*t,n=i[o],r=vc[o],a=vc[(e+1)%5+5*t],s=vc[(e+2)%5+5*t];n.high=r.high^~a.high&s.high,n.low=r.low^~a.low&s.low}const n=i[0],r=gc[e];n.high^=r.high,n.low^=r.low}}_doFinalize(){const e=this._data,t=e.words,i=8*e.sigBytes,o=32*this.blockSize;t[i>>>5]|=1<<24-i%32,t[(Math.ceil((i+1)/o)*o>>>5)-1]|=128,e.sigBytes=4*t.length,this._process();const n=this._state,r=this.cfg.outputLength/8,a=r/8,s=[];for(let e=0;e<a;e+=1){const t=n[e];let i=t.high,o=t.low;i=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),s.push(o),s.push(i)}return new al(s,r)}clone(){const e=super.clone.call(this);e._state=this._state.slice(0);const t=e._state;for(let e=0;e<25;e+=1)t[e]=t[e].clone();return e}}const xc=pl._createHelper(_c),wc=pl._createHmacHelper(_c),kc=al.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),Sc=al.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),Ec=al.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),Tc=al.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),Cc=al.create([0,1518500249,1859775393,2400959708,2840853838]),Ac=al.create([1352829926,1548603684,1836072691,2053994217,0]),Ic=(e,t,i)=>e^t^i,Oc=(e,t,i)=>e&t|~e&i,$c=(e,t,i)=>(e|~t)^i,Rc=(e,t,i)=>e&i|t&~i,Pc=(e,t,i)=>e^(t|~i),Lc=(e,t)=>e<<t|e>>>32-t;class Nc extends pl{_doReset(){this._hash=al.create([1732584193,4023233417,2562383102,271733878,3285377520])}_doProcessBlock(e,t){const i=e;for(let e=0;e<16;e+=1){const o=t+e,n=i[o];i[o]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}const o=this._hash.words,n=Cc.words,r=Ac.words,a=kc.words,s=Sc.words,l=Ec.words,c=Tc.words;let d,p=o[0],h=o[1],u=o[2],m=o[3],g=o[4],f=o[0],b=o[1],y=o[2],v=o[3],_=o[4];for(let e=0;e<80;e+=1)d=p+i[t+a[e]]|0,d+=e<16?Ic(h,u,m)+n[0]:e<32?Oc(h,u,m)+n[1]:e<48?$c(h,u,m)+n[2]:e<64?Rc(h,u,m)+n[3]:Pc(h,u,m)+n[4],d|=0,d=Lc(d,l[e]),d=d+g|0,p=g,g=m,m=Lc(u,10),u=h,h=d,d=f+i[t+s[e]]|0,d+=e<16?Pc(b,y,v)+r[0]:e<32?Rc(b,y,v)+r[1]:e<48?$c(b,y,v)+r[2]:e<64?Oc(b,y,v)+r[3]:Ic(b,y,v)+r[4],d|=0,d=Lc(d,c[e]),d=d+_|0,f=_,_=v,v=Lc(y,10),y=b,b=d;d=o[1]+u+v|0,o[1]=o[2]+m+_|0,o[2]=o[3]+g+f|0,o[3]=o[4]+p+b|0,o[4]=o[0]+h+y|0,o[0]=d}_doFinalize(){const e=this._data,t=e.words,i=8*this._nDataBytes,o=8*e.sigBytes;t[o>>>5]|=128<<24-o%32,t[14+(o+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),e.sigBytes=4*(t.length+1),this._process();const n=this._hash,r=n.words;for(let e=0;e<5;e+=1){const t=r[e];r[e]=16711935&(t<<8|t>>>24)|4278255360&(t<<24|t>>>8)}return n}clone(){const e=super.clone.call(this);return e._hash=this._hash.clone(),e}}const Mc=pl._createHelper(Nc),Fc=pl._createHmacHelper(Nc);class zc extends rl{constructor(e){super(),this.cfg=Object.assign(new rl,{keySize:4,hasher:Hl,iterations:1},e)}compute(e,t){const{cfg:i}=this,o=hl.create(i.hasher,e),n=al.create(),r=al.create([1]),a=n.words,s=r.words,{keySize:l,iterations:c}=i;for(;a.length<l;){const e=o.update(t).finalize(r);o.reset();const i=e.words,a=i.length;let l=e;for(let e=1;e<c;e+=1){l=o.finalize(l),o.reset();const e=l.words;for(let t=0;t<a;t+=1)i[t]^=e[t]}n.concat(e),s[0]+=1}return n.sigBytes=4*l,n}}const Bc=[],Dc=[],Uc=[],jc=[],Hc=[],qc=[],Vc=[],Wc=[],Gc=[],Xc=[],Kc=[];for(let e=0;e<256;e+=1)Kc[e]=e<128?e<<1:e<<1^283;let Yc=0,Qc=0;for(let e=0;e<256;e+=1){let e=Qc^Qc<<1^Qc<<2^Qc<<3^Qc<<4;e=e>>>8^255&e^99,Bc[Yc]=e,Dc[e]=Yc;const t=Kc[Yc],i=Kc[t],o=Kc[i];let n=257*Kc[e]^16843008*e;Uc[Yc]=n<<24|n>>>8,jc[Yc]=n<<16|n>>>16,Hc[Yc]=n<<8|n>>>24,qc[Yc]=n,n=16843009*o^65537*i^257*t^16843008*Yc,Vc[e]=n<<24|n>>>8,Wc[e]=n<<16|n>>>16,Gc[e]=n<<8|n>>>24,Xc[e]=n,Yc?(Yc=t^Kc[Kc[Kc[o^t]]],Qc^=Kc[Kc[Qc]]):(Qc=1,Yc=Qc)}const Jc=[0,1,2,4,8,16,32,64,128,27,54];class Zc extends Rl{_doReset(){let e;if(this._nRounds&&this._keyPriorReset===this._key)return;this._keyPriorReset=this._key;const t=this._keyPriorReset,i=t.words,o=t.sigBytes/4;this._nRounds=o+6;const n=4*(this._nRounds+1);this._keySchedule=[];const r=this._keySchedule;for(let t=0;t<n;t+=1)t<o?r[t]=i[t]:(e=r[t-1],t%o?o>6&&t%o==4&&(e=Bc[e>>>24]<<24|Bc[e>>>16&255]<<16|Bc[e>>>8&255]<<8|Bc[255&e]):(e=e<<8|e>>>24,e=Bc[e>>>24]<<24|Bc[e>>>16&255]<<16|Bc[e>>>8&255]<<8|Bc[255&e],e^=Jc[t/o|0]<<24),r[t]=r[t-o]^e);this._invKeySchedule=[];const a=this._invKeySchedule;for(let t=0;t<n;t+=1){const i=n-t;e=t%4?r[i]:r[i-4],a[t]=t<4||i<=4?e:Vc[Bc[e>>>24]]^Wc[Bc[e>>>16&255]]^Gc[Bc[e>>>8&255]]^Xc[Bc[255&e]]}}encryptBlock(e,t){this._doCryptBlock(e,t,this._keySchedule,Uc,jc,Hc,qc,Bc)}decryptBlock(e,t){const i=e;let o=i[t+1];i[t+1]=i[t+3],i[t+3]=o,this._doCryptBlock(i,t,this._invKeySchedule,Vc,Wc,Gc,Xc,Dc),o=i[t+1],i[t+1]=i[t+3],i[t+3]=o}_doCryptBlock(e,t,i,o,n,r,a,s){const l=e,c=this._nRounds;let d=l[t]^i[0],p=l[t+1]^i[1],h=l[t+2]^i[2],u=l[t+3]^i[3],m=4;for(let e=1;e<c;e+=1){const e=o[d>>>24]^n[p>>>16&255]^r[h>>>8&255]^a[255&u]^i[m];m+=1;const t=o[p>>>24]^n[h>>>16&255]^r[u>>>8&255]^a[255&d]^i[m];m+=1;const s=o[h>>>24]^n[u>>>16&255]^r[d>>>8&255]^a[255&p]^i[m];m+=1;const l=o[u>>>24]^n[d>>>16&255]^r[p>>>8&255]^a[255&h]^i[m];m+=1,d=e,p=t,h=s,u=l}const g=(s[d>>>24]<<24|s[p>>>16&255]<<16|s[h>>>8&255]<<8|s[255&u])^i[m];m+=1;const f=(s[p>>>24]<<24|s[h>>>16&255]<<16|s[u>>>8&255]<<8|s[255&d])^i[m];m+=1;const b=(s[h>>>24]<<24|s[u>>>16&255]<<16|s[d>>>8&255]<<8|s[255&p])^i[m];m+=1;const y=(s[u>>>24]<<24|s[d>>>16&255]<<16|s[p>>>8&255]<<8|s[255&h])^i[m];m+=1,l[t]=g,l[t+1]=f,l[t+2]=b,l[t+3]=y}}Zc.keySize=8;const ed=Rl._createHelper(Zc),td=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],id=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],od=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],nd=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],rd=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679];function ad(e,t){const i=(this._lBlock>>>e^this._rBlock)&t;this._rBlock^=i,this._lBlock^=i<<e}function sd(e,t){const i=(this._rBlock>>>e^this._lBlock)&t;this._lBlock^=i,this._rBlock^=i<<e}class ld extends Rl{_doReset(){const e=this._key.words,t=[];for(let i=0;i<56;i+=1){const o=td[i]-1;t[i]=e[o>>>5]>>>31-o%32&1}this._subKeys=[];const i=this._subKeys;for(let e=0;e<16;e+=1){i[e]=[];const o=i[e],n=od[e];for(let e=0;e<24;e+=1)o[e/6|0]|=t[(id[e]-1+n)%28]<<31-e%6,o[4+(e/6|0)]|=t[28+(id[e+24]-1+n)%28]<<31-e%6;o[0]=o[0]<<1|o[0]>>>31;for(let e=1;e<7;e+=1)o[e]>>>=4*(e-1)+3;o[7]=o[7]<<5|o[7]>>>27}this._invSubKeys=[];const o=this._invSubKeys;for(let e=0;e<16;e+=1)o[e]=i[15-e]}encryptBlock(e,t){this._doCryptBlock(e,t,this._subKeys)}decryptBlock(e,t){this._doCryptBlock(e,t,this._invSubKeys)}_doCryptBlock(e,t,i){const o=e;this._lBlock=e[t],this._rBlock=e[t+1],ad.call(this,4,252645135),ad.call(this,16,65535),sd.call(this,2,858993459),sd.call(this,8,16711935),ad.call(this,1,1431655765);for(let e=0;e<16;e+=1){const t=i[e],o=this._lBlock,n=this._rBlock;let r=0;for(let e=0;e<8;e+=1)r|=nd[e][((n^t[e])&rd[e])>>>0];this._lBlock=n,this._rBlock=o^r}const n=this._lBlock;this._lBlock=this._rBlock,this._rBlock=n,ad.call(this,1,1431655765),sd.call(this,8,16711935),sd.call(this,2,858993459),ad.call(this,16,65535),ad.call(this,4,252645135),o[t]=this._lBlock,o[t+1]=this._rBlock}}ld.keySize=2,ld.ivSize=2,ld.blockSize=2;const cd=Rl._createHelper(ld);class dd extends Rl{_doReset(){const e=this._key.words;if(2!==e.length&&4!==e.length&&e.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");const t=e.slice(0,2),i=e.length<4?e.slice(0,2):e.slice(2,4),o=e.length<6?e.slice(0,2):e.slice(4,6);this._des1=ld.createEncryptor(al.create(t)),this._des2=ld.createEncryptor(al.create(i)),this._des3=ld.createEncryptor(al.create(o))}encryptBlock(e,t){this._des1.encryptBlock(e,t),this._des2.decryptBlock(e,t),this._des3.encryptBlock(e,t)}decryptBlock(e,t){this._des3.decryptBlock(e,t),this._des2.encryptBlock(e,t),this._des1.decryptBlock(e,t)}}dd.keySize=6,dd.ivSize=2,dd.blockSize=2;const pd=Rl._createHelper(dd),hd=[],ud=[],md=[];function gd(){const e=this._X,t=this._C;for(let e=0;e<8;e+=1)ud[e]=t[e];t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+(t[0]>>>0<ud[0]>>>0?1:0)|0,t[2]=t[2]+886263092+(t[1]>>>0<ud[1]>>>0?1:0)|0,t[3]=t[3]+1295307597+(t[2]>>>0<ud[2]>>>0?1:0)|0,t[4]=t[4]+3545052371+(t[3]>>>0<ud[3]>>>0?1:0)|0,t[5]=t[5]+886263092+(t[4]>>>0<ud[4]>>>0?1:0)|0,t[6]=t[6]+1295307597+(t[5]>>>0<ud[5]>>>0?1:0)|0,t[7]=t[7]+3545052371+(t[6]>>>0<ud[6]>>>0?1:0)|0,this._b=t[7]>>>0<ud[7]>>>0?1:0;for(let i=0;i<8;i+=1){const o=e[i]+t[i],n=65535&o,r=o>>>16,a=((n*n>>>17)+n*r>>>15)+r*r,s=((4294901760&o)*o|0)+((65535&o)*o|0);md[i]=a^s}e[0]=md[0]+(md[7]<<16|md[7]>>>16)+(md[6]<<16|md[6]>>>16)|0,e[1]=md[1]+(md[0]<<8|md[0]>>>24)+md[7]|0,e[2]=md[2]+(md[1]<<16|md[1]>>>16)+(md[0]<<16|md[0]>>>16)|0,e[3]=md[3]+(md[2]<<8|md[2]>>>24)+md[1]|0,e[4]=md[4]+(md[3]<<16|md[3]>>>16)+(md[2]<<16|md[2]>>>16)|0,e[5]=md[5]+(md[4]<<8|md[4]>>>24)+md[3]|0,e[6]=md[6]+(md[5]<<16|md[5]>>>16)+(md[4]<<16|md[4]>>>16)|0,e[7]=md[7]+(md[6]<<8|md[6]>>>24)+md[5]|0}class fd extends Cl{constructor(...e){super(...e),this.blockSize=4,this.ivSize=2}_doReset(){const e=this._key.words,{iv:t}=this.cfg;for(let t=0;t<4;t+=1)e[t]=16711935&(e[t]<<8|e[t]>>>24)|4278255360&(e[t]<<24|e[t]>>>8);this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16];const i=this._X;this._C=[e[2]<<16|e[2]>>>16,4294901760&e[0]|65535&e[1],e[3]<<16|e[3]>>>16,4294901760&e[1]|65535&e[2],e[0]<<16|e[0]>>>16,4294901760&e[2]|65535&e[3],e[1]<<16|e[1]>>>16,4294901760&e[3]|65535&e[0]];const o=this._C;this._b=0;for(let e=0;e<4;e+=1)gd.call(this);for(let e=0;e<8;e+=1)o[e]^=i[e+4&7];if(t){const e=t.words,i=e[0],n=e[1],r=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),a=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),s=r>>>16|4294901760&a,l=a<<16|65535&r;o[0]^=r,o[1]^=s,o[2]^=a,o[3]^=l,o[4]^=r,o[5]^=s,o[6]^=a,o[7]^=l;for(let e=0;e<4;e+=1)gd.call(this)}}_doProcessBlock(e,t){const i=e,o=this._X;gd.call(this),hd[0]=o[0]^o[5]>>>16^o[3]<<16,hd[1]=o[2]^o[7]>>>16^o[5]<<16,hd[2]=o[4]^o[1]>>>16^o[7]<<16,hd[3]=o[6]^o[3]>>>16^o[1]<<16;for(let e=0;e<4;e+=1)hd[e]=16711935&(hd[e]<<8|hd[e]>>>24)|4278255360&(hd[e]<<24|hd[e]>>>8),i[t+e]^=hd[e]}}const bd=Cl._createHelper(fd),yd=[],vd=[],_d=[];function xd(){const e=this._X,t=this._C;for(let e=0;e<8;e+=1)vd[e]=t[e];t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+(t[0]>>>0<vd[0]>>>0?1:0)|0,t[2]=t[2]+886263092+(t[1]>>>0<vd[1]>>>0?1:0)|0,t[3]=t[3]+1295307597+(t[2]>>>0<vd[2]>>>0?1:0)|0,t[4]=t[4]+3545052371+(t[3]>>>0<vd[3]>>>0?1:0)|0,t[5]=t[5]+886263092+(t[4]>>>0<vd[4]>>>0?1:0)|0,t[6]=t[6]+1295307597+(t[5]>>>0<vd[5]>>>0?1:0)|0,t[7]=t[7]+3545052371+(t[6]>>>0<vd[6]>>>0?1:0)|0,this._b=t[7]>>>0<vd[7]>>>0?1:0;for(let i=0;i<8;i+=1){const o=e[i]+t[i],n=65535&o,r=o>>>16,a=((n*n>>>17)+n*r>>>15)+r*r,s=((4294901760&o)*o|0)+((65535&o)*o|0);_d[i]=a^s}e[0]=_d[0]+(_d[7]<<16|_d[7]>>>16)+(_d[6]<<16|_d[6]>>>16)|0,e[1]=_d[1]+(_d[0]<<8|_d[0]>>>24)+_d[7]|0,e[2]=_d[2]+(_d[1]<<16|_d[1]>>>16)+(_d[0]<<16|_d[0]>>>16)|0,e[3]=_d[3]+(_d[2]<<8|_d[2]>>>24)+_d[1]|0,e[4]=_d[4]+(_d[3]<<16|_d[3]>>>16)+(_d[2]<<16|_d[2]>>>16)|0,e[5]=_d[5]+(_d[4]<<8|_d[4]>>>24)+_d[3]|0,e[6]=_d[6]+(_d[5]<<16|_d[5]>>>16)+(_d[4]<<16|_d[4]>>>16)|0,e[7]=_d[7]+(_d[6]<<8|_d[6]>>>24)+_d[5]|0}class wd extends Cl{constructor(...e){super(...e),this.blockSize=4,this.ivSize=2}_doReset(){const e=this._key.words,{iv:t}=this.cfg;this._X=[e[0],e[3]<<16|e[2]>>>16,e[1],e[0]<<16|e[3]>>>16,e[2],e[1]<<16|e[0]>>>16,e[3],e[2]<<16|e[1]>>>16];const i=this._X;this._C=[e[2]<<16|e[2]>>>16,4294901760&e[0]|65535&e[1],e[3]<<16|e[3]>>>16,4294901760&e[1]|65535&e[2],e[0]<<16|e[0]>>>16,4294901760&e[2]|65535&e[3],e[1]<<16|e[1]>>>16,4294901760&e[3]|65535&e[0]];const o=this._C;this._b=0;for(let e=0;e<4;e+=1)xd.call(this);for(let e=0;e<8;e+=1)o[e]^=i[e+4&7];if(t){const e=t.words,i=e[0],n=e[1],r=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),a=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),s=r>>>16|4294901760&a,l=a<<16|65535&r;o[0]^=r,o[1]^=s,o[2]^=a,o[3]^=l,o[4]^=r,o[5]^=s,o[6]^=a,o[7]^=l;for(let e=0;e<4;e+=1)xd.call(this)}}_doProcessBlock(e,t){const i=e,o=this._X;xd.call(this),yd[0]=o[0]^o[5]>>>16^o[3]<<16,yd[1]=o[2]^o[7]>>>16^o[5]<<16,yd[2]=o[4]^o[1]>>>16^o[7]<<16,yd[3]=o[6]^o[3]>>>16^o[1]<<16;for(let e=0;e<4;e+=1)yd[e]=16711935&(yd[e]<<8|yd[e]>>>24)|4278255360&(yd[e]<<24|yd[e]>>>8),i[t+e]^=yd[e]}}const kd=Cl._createHelper(wd);function Sd(){const e=this._S;let t=this._i,i=this._j,o=0;for(let n=0;n<4;n+=1){t=(t+1)%256,i=(i+e[t])%256;const r=e[t];e[t]=e[i],e[i]=r,o|=e[(e[t]+e[i])%256]<<24-8*n}return this._i=t,this._j=i,o}class Ed extends Cl{_doReset(){const e=this._key,t=e.words,i=e.sigBytes;this._S=[];const o=this._S;for(let e=0;e<256;e+=1)o[e]=e;for(let e=0,n=0;e<256;e+=1){const r=e%i,a=t[r>>>2]>>>24-r%4*8&255;n=(n+o[e]+a)%256;const s=o[e];o[e]=o[n],o[n]=s}this._j=0,this._i=this._j}_doProcessBlock(e,t){e[t]^=Sd.call(this)}}Ed.keySize=8,Ed.ivSize=0;const Td=Cl._createHelper(Ed);class Cd extends Ed{constructor(...e){super(...e),Object.assign(this.cfg,{drop:192})}_doReset(){super._doReset.call(this);for(let e=this.cfg.drop;e>0;e-=1)Sd.call(this)}}const Ad=Cl._createHelper(Cd);function Id(e,t,i,o){const n=e;let r;const a=this._iv;a?(r=a.slice(0),this._iv=void 0):r=this._prevBlock,o.encryptBlock(r,0);for(let e=0;e<i;e+=1)n[t+e]^=r[e]}class Od extends Al{}Od.Encryptor=class extends Od{processBlock(e,t){const i=this._cipher,{blockSize:o}=i;Id.call(this,e,t,o,i),this._prevBlock=e.slice(t,t+o)}},Od.Decryptor=class extends Od{processBlock(e,t){const i=this._cipher,{blockSize:o}=i,n=e.slice(t,t+o);Id.call(this,e,t,o,i),this._prevBlock=n}};class $d extends Al{}$d.Encryptor=class extends $d{processBlock(e,t){const i=e,o=this._cipher,{blockSize:n}=o,r=this._iv;let a=this._counter;r&&(this._counter=r.slice(0),a=this._counter,this._iv=void 0);const s=a.slice(0);o.encryptBlock(s,0),a[n-1]=a[n-1]+1|0;for(let e=0;e<n;e+=1)i[t+e]^=s[e]}},$d.Decryptor=$d.Encryptor;const Rd=e=>{let t=e;if(255==(e>>24&255)){let i=e>>16&255,o=e>>8&255,n=255&e;255===i?(i=0,255===o?(o=0,255===n?n=0:n+=1):o+=1):i+=1,t=0,t+=i<<16,t+=o<<8,t+=n}else t+=1<<24;return t};
/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */
class Pd extends Al{}Pd.Encryptor=class extends Pd{processBlock(e,t){const i=e,o=this._cipher,{blockSize:n}=o,r=this._iv;let a=this._counter;r&&(this._counter=r.slice(0),a=this._counter,this._iv=void 0),(e=>{const t=e;t[0]=Rd(t[0]),0===t[0]&&(t[1]=Rd(t[1]))})(a);const s=a.slice(0);o.encryptBlock(s,0);for(let e=0;e<n;e+=1)i[t+e]^=s[e]}},Pd.Decryptor=Pd.Encryptor;class Ld extends Al{}Ld.Encryptor=class extends Ld{processBlock(e,t){this._cipher.encryptBlock(e,t)}},Ld.Decryptor=class extends Ld{processBlock(e,t){this._cipher.decryptBlock(e,t)}};class Nd extends Al{}Nd.Encryptor=class extends Nd{processBlock(e,t){const i=e,o=this._cipher,{blockSize:n}=o,r=this._iv;let a=this._keystream;r&&(this._keystream=r.slice(0),a=this._keystream,this._iv=void 0),o.encryptBlock(a,0);for(let e=0;e<n;e+=1)i[t+e]^=a[e]}},Nd.Decryptor=Nd.Encryptor;const Md={pad(e,t){const i=4*t,o=i-e.sigBytes%i;e.concat(al.random(o-1)).concat(al.create([o<<24],1))},unpad(e){const t=e,i=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=i}},Fd={pad(e,t){const i=e,o=4*t;i.clamp(),i.sigBytes+=o-(e.sigBytes%o||o)},unpad(e){const t=e,i=t.words;for(let e=t.sigBytes-1;e>=0;e-=1)if(i[e>>>2]>>>24-e%4*8&255){t.sigBytes=e+1;break}}},zd={pad(e,t){e.concat(al.create([2147483648],1)),Fd.pad(e,t)},unpad(e){const t=e;Fd.unpad(t),t.sigBytes-=1}},Bd={stringify:e=>e.ciphertext.toString(sl),parse(e){const t=sl.parse(e);return Pl.create({ciphertext:t})}};var Dd={lib:{Base:rl,WordArray:al,BufferedBlockAlgorithm:dl,Hasher:pl,Cipher:Tl,StreamCipher:Cl,BlockCipherMode:Al,BlockCipher:Rl,CipherParams:Pl,SerializableCipher:Nl,PasswordBasedCipher:Fl},x64:{Word:ml,WordArray:gl},enc:{Hex:sl,Latin1:ll,Utf8:cl,Utf16:Dl,Utf16BE:Bl,Utf16LE:Ul,Base64:fl},algo:{HMAC:hl,MD5:wl,SHA1:Hl,SHA224:ic,SHA256:Zl,SHA384:dc,SHA512:sc,SHA3:_c,RIPEMD160:Nc,PBKDF2:zc,EvpKDF:El,AES:Zc,DES:ld,TripleDES:dd,Rabbit:fd,RabbitLegacy:wd,RC4:Ed,RC4Drop:Cd},mode:{CBC:Ol,CFB:Od,CTR:$d,CTRGladman:Pd,ECB:Ld,OFB:Nd},pad:{Pkcs7:$l,AnsiX923:{pad(e,t){const i=e,o=i.sigBytes,n=4*t,r=n-o%n,a=o+r-1;i.clamp(),i.words[a>>>2]|=r<<24-a%4*8,i.sigBytes+=r},unpad(e){const t=e,i=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=i}},Iso10126:Md,Iso97971:zd,NoPadding:{pad(){},unpad(){}},ZeroPadding:Fd},format:{OpenSSL:Ll,Hex:Bd},kdf:{OpenSSL:Ml},MD5:kl,HmacMD5:Sl,SHA1:ql,HmacSHA1:Vl,SHA224:oc,HmacSHA224:nc,SHA256:ec,HmacSHA256:tc,SHA384:pc,HmacSHA384:hc,SHA512:lc,HmacSHA512:cc,SHA3:xc,HmacSHA3:wc,RIPEMD160:Mc,HmacRIPEMD160:Fc,PBKDF2:(e,t,i)=>zc.create(i).compute(e,t),EvpKDF:(e,t,i)=>El.create(i).compute(e,t),AES:ed,DES:cd,TripleDES:pd,Rabbit:bd,RabbitLegacy:kd,RC4:Td,RC4Drop:Ad};class Ud{constructor(e,t,i,o="API"){if(this._apiVersionMajor="4",this._apiVersion="v4.20190615",this._hashType="sha256",null==i&&(i="https://api.backend.ai"),this._endpoint=i,this._endpointHost=i.replace(/^[^:]+:\/\//,""),"API"===o){if(null==e)throw"You must set accessKey! (either as argument or environment variable)";if(null==t)throw"You must set secretKey! (either as argument or environment variable)";this._accessKey=e,this._secretKey=t,this._userId="",this._password=""}else{if(null==e)throw"You must set user id! (either as argument or environment variable)";if(null==t)throw"You must set password! (either as argument or environment variable)";this._accessKey="",this._secretKey="",this._userId=e,this._password=t}this._proxyURL=null,this._proxyToken=null,this._connectionMode=o}get accessKey(){return this._accessKey}get secretKey(){return this._secretKey}get userId(){return this._userId}get password(){return this._password}get endpoint(){return this._endpoint}get proxyURL(){return this._proxyURL}get proxyToken(){return this._proxyToken}get endpointHost(){return this._endpointHost}get apiVersion(){return this._apiVersion}get apiVersionMajor(){return this._apiVersionMajor}get hashType(){return this._hashType}get connectionMode(){return this._connectionMode}static createFromEnv(){return new this(process.env.BACKEND_ACCESS_KEY,process.env.BACKEND_SECRET_KEY,process.env.BACKEND_ENDPOINT)}}class jd{constructor(e,t){this.ready=!1,this.code=null,this.sessionId=null,this.kernelType=null,this.clientVersion="20.11.0",this.agentSignature=t,this._config=void 0===e?Ud.createFromEnv():e,this._managerVersion=null,this._apiVersion=null,this._apiVersionMajor=null,this.is_admin=!1,this.is_superadmin=!1,this.kernelPrefix="/kernel",this.resourcePreset=new Hd(this),this.vfolder=new qd(this),this.agent=new Vd(this),this.keypair=new Gd(this),this.image=new Kd(this),this.utils=new pp(this),this.computeSession=new Yd(this),this.sessionTemplate=new Qd(this),this.resourcePolicy=new Xd(this),this.user=new ip(this),this.group=new Zd(this),this.domain=new ep(this),this.resources=new Jd(this),this.storageproxy=new Wd(this),this.maintenance=new tp(this),this.scalingGroup=new op(this),this.registry=new np(this),this.setting=new rp(this),this.userConfig=new sp(this),this.service=new ap(this),this.domain=new ep(this),this.enterprise=new lp(this),this.cloud=new cp(this),this.eduApp=new dp(this),this._features={},this.abortController=new AbortController,this.abortSignal=this.abortController.signal,this.requestTimeout=5e3}get managerVersion(){return this._managerVersion}get apiVersion(){return this._apiVersion}async _wrapWithPromise(e,t=!1,i=null,o=0,n=0,r={}){let a,s,l,c,d=jd.ERR_REQUEST,p="",h="";try{if("GET"==e.method&&(e.body=void 0),"SESSION"===this._config.connectionMode&&(e.credentials="include",e.mode="cors"),null!==i)e.signal=i;else{let t=new AbortController;e.signal=t.signal,c=setTimeout((()=>{d=jd.ERR_TIMEOUT,t.abort()}),0===o?this.requestTimeout:o)}s=await fetch(e.uri,e),void 0!==c&&clearTimeout(c),d=jd.ERR_RESPONSE;let n=s.headers.get("Content-Type");if(!1===t&&null===n?l=void 0===s.blob?await s.buffer():await s.blob():!1===t&&(n.startsWith("application/json")||n.startsWith("application/problem+json"))?(l=await s.json(),d=l.type,p=l.title):l=!1===t&&n.startsWith("text/")?await s.text():void 0===s.blob?await s.buffer():await s.blob(),d=jd.ERR_SERVER,!s.ok)throw l}catch(c){if(n>0)return await new Promise((e=>setTimeout(e,2e3))),this._wrapWithPromise(e,t,i,o,n-1,r);let u;switch(u="object"==typeof c&&c.constructor===Object&&"title"in c?c.title:c,void 0===s&&(s={}),d){case jd.ERR_REQUEST:d="https://api.backend.ai/probs/client-request-error",navigator.onLine?(p=u,a=`sending request has failed: ${u}`,h=u):(p="Network disconnected.",a="sending request has failed: Network disconnected",h="Network disconnected");break;case jd.ERR_RESPONSE:d="https://api.backend.ai/probs/client-response-error",p=u,a=`reading response has failed: ${u}`,h=u;break;case jd.ERR_SERVER:d="https://api.backend.ai/probs/server-error",p=`${s.status} ${s.statusText} - ${l.title}`,a="server responded failure: ",l.msg?(a+=`${s.status} ${s.statusText} - ${l.msg}`,h=l.msg):(a+=`${s.status} ${s.statusText} - ${l.title}`,h=l.title);break;case jd.ERR_ABORT:d="https://api.backend.ai/probs/request-abort-error",p="Request aborted",a="Request aborted by user",h=a,s.status=408,s.statusText="Request aborted by user";break;case jd.ERR_TIMEOUT:d="https://api.backend.ai/probs/request-timeout-error",p="Request timeout",a="No response returned within timeout",h=a,s.status=408,s.statusText="Timeout exceeded";break;default:void 0===s.status&&(s.status=500,s.statusText="Server error"),""===d&&(d=jd.ERR_UNKNOWN),""===p&&(p=l.title),a=`server responded failure: ${s.status} ${s.statusText} - ${l.title}`,""!==l.title&&(h=l.title)}throw{isError:!0,timestamp:(new Date).toUTCString(),type:d,requestUrl:e.uri,requestMethod:e.method,requestParameters:e.body,statusCode:s.status,statusText:s.statusText,title:p,message:a,description:h}}let u=JSON.parse(localStorage.getItem("backendaiwebui.logs"));u&&u.length>3e3&&(u=u.slice(1,3e3));let m=Array();void 0===s&&(s={status:"No status",statusText:"No response given."});let g={isError:!1,timestamp:(new Date).toUTCString(),type:"",requestUrl:e.uri,requestMethod:e.method,requestParameters:e.body,statusCode:s.status,statusText:s.statusText,title:l.title,message:""};"log"in r&&(g.requestParameters=r.log),m.push(g),u&&(m=m.concat(u));try{localStorage.setItem("backendaiwebui.logs",JSON.stringify(m))}catch(e){console.warn("Local storage is full. Clearing part of the logs.");let t=JSON.parse(localStorage.getItem("backendaiwebui.logs")||"[]");t=t.slice(0,Math.round(2*t.length/3)),localStorage.setItem("backendaiwebui.logs",JSON.stringify(t)),Object.entries(localStorage).map((e=>e[0])).filter((e=>e.startsWith("backendaiconsole"))).map((e=>localStorage.removeItem(e)))}return l}getServerVersion(e=null){let t=this.newPublicRequest("GET","/",null,"");return this._wrapWithPromise(t,!1,e)}get APIMajorVersion(){return this._apiVersionMajor}set APIMajorVersion(e){this._apiVersionMajor=e,this._config._apiVersionMajor=this._apiVersionMajor}async get_manager_version(e=null){if(null===this._managerVersion){let t=await this.getServerVersion(e);this._managerVersion=t.manager,this._apiVersion=t.version,this._config._apiVersion=this._apiVersion,this._apiVersionMajor=t.version.substr(1,2),this._config._apiVersionMajor=this._apiVersionMajor,this._apiVersionMajor>4&&(this.kernelPrefix="/session")}return this._managerVersion}supports(e){return 0===Object.keys(this._features).length&&this._updateSupportList(),e in this._features&&this._features[e]}_updateFieldCompatibilityByAPIVersion(e){const t={session_name:"sess_id"};return this._apiVersionMajor<5&&Object.keys(t).forEach((i=>{let o=e.indexOf(i);-1!==o&&(e[o]=t[i])})),e}_updateSupportList(){this.isAPIVersionCompatibleWith("v4.20190601")&&(this._features["scaling-group"]=!0,this._features.group=!0,this._features["group-folder"]=!0,this._features["system-images"]=!0,this._features["detailed-session-states"]=!0,this._features["change-user-name"]=!0),this.isAPIVersionCompatibleWith("v6.20200815")&&(this._features["multi-container"]=!0,this._features["multi-node"]=!0,this._features["storage-proxy"]=!0,this._features["hardware-metadata"]=!0),this.isManagerVersionCompatibleWith("20.09.16")&&(this._features["avoid-hol-blocking"]=!0,this._features["session-detail-status"]=!0),this.isManagerVersionCompatibleWith("21.09")&&(this._features.schedulable=!0,this._features["wsproxy-addr"]=!0),this.isManagerVersionCompatibleWith("22.03")&&(this._features["scheduler-opts"]=!0,this._features["session-lifetime"]=!0),this.isAPIVersionCompatibleWith("v6.20220615")&&(this._features["secure-payload"]=!0)}isManagerVersionCompatibleWith(e){let t=this._managerVersion;return t=t.split(".").map((e=>e.padStart(10))).join("."),(e=e.split(".").map((e=>e.padStart(10))).join("."))<=t}isAPIVersionCompatibleWith(e){let t=this._apiVersion;return null!==t&&null!==e&&(t=t.split(".").map((e=>e.padStart(10))).join("."),e=e.split(".").map((e=>e.padStart(10))).join(".")),e<=t}async check_login(){let e,t=this.newSignedRequest("POST","/server/login-check",null);try{e=await this._wrapWithPromise(t),!0===e.authenticated&&(this._config._accessKey=e.data.access_key,this._config._session_id=e.session_id)}catch(e){return console.log(e),Promise.resolve(!1)}return e.authenticated}async login(){let e,t={username:this._config.userId,password:this._config.password},i=this.newSignedRequest("POST","/server/login",t,!0);try{if(e=await this._wrapWithPromise(i,!1,null,0,0,{log:JSON.stringify({username:this._config.userId,password:"********"})}),!0===e.authenticated)return"monitor"===e.data.role?(this.logout(),Promise.resolve({fail_reason:"Monitor user does not allow to login."})):(await this.get_manager_version(),this.check_login());if(!1===e.authenticated)return e.data&&e.data.details?Promise.resolve({fail_reason:e.data.details}):Promise.resolve(!1)}catch(e){throw"statusCode"in e&&429===e.statusCode?{title:e.description,message:"Too many failed login attempts."}:{title:"No manager found at API Endpoint.",message:"Authentication failed. Check information and manager status."}}}logout(){let e=this.newSignedRequest("POST","/server/logout",{});return localStorage.getItem("backendaiwebui.logs")&&localStorage.removeItem("backendaiwebui.logs"),this._wrapWithPromise(e)}async token_login(){const e=this.newSignedRequest("POST","/server/token-login",{});try{const t=await this._wrapWithPromise(e);if(!0===t.authenticated)return await this.get_manager_version(),this.check_login();if(!1===t.authenticated)return t.data&&t.data.details?Promise.resolve({fail_reason:t.data.details}):Promise.resolve(!1)}catch(e){throw"statusCode"in e&&429===e.statusCode?{title:e.description,message:"Too many failed login attempts."}:{title:"No manager found at API Endpoint.",message:"Authentication failed. Check information and manager status."}}}async signout(e,t){let i={username:e,password:t},o=this.newSignedRequest("POST","/auth/signout",i);return this._wrapWithPromise(o)}async update_full_name(e,t){let i={email:e,full_name:t},o=this.newSignedRequest("POST","/auth/update-full-name",i);return this._wrapWithPromise(o)}async update_password(e,t,i){let o={old_password:e,new_password:t,new_password2:i},n=this.newSignedRequest("POST","/auth/update-password",o,!0);return this._wrapWithPromise(n)}async get_resource_slots(){let e;return e=this.isAPIVersionCompatibleWith("v4.20190601")?this.newPublicRequest("GET","/config/resource-slots",null,""):this.newPublicRequest("GET","/etcd/resource-slots",null,""),this._wrapWithPromise(e)}async createIfNotExists(e,t,i={},o=0,n="x86_64"){null==t&&(t=this.generateSessionId());let r,a={lang:e,clientSessionToken:t,architecture:n};if(i!={}){let e={};i.cpu&&(e.cpu=i.cpu),i.mem&&(e.mem=i.mem),i.gpu&&(e["cuda.device"]=parseInt(i.gpu)),i["cuda.device"]&&(e["cuda.device"]=parseInt(i["cuda.device"])),i.vgpu?e["cuda.shares"]=parseFloat(i.vgpu).toFixed(2):i.fgpu&&(e["cuda.shares"]=parseFloat(i.fgpu).toFixed(2)),i["cuda.shares"]&&(e["cuda.shares"]=parseFloat(i["cuda.shares"]).toFixed(2)),i.rocm&&(e["rocm.device"]=i.rocm),i.tpu&&(e["tpu.device"]=i.tpu),i.cluster_size&&(a.cluster_size=i.cluster_size),i.cluster_mode&&(a.cluster_mode=i.cluster_mode),i.group_name&&(a.group_name=i.group_name),i.domain&&(a.domain=i.domain),i.type&&(a.type=i.type),i.startsAt&&(a.starts_at=i.startsAt),i.enqueueOnly&&(a.enqueueOnly=i.enqueueOnly),i.maxWaitSeconds&&(a.maxWaitSeconds=i.maxWaitSeconds),i.reuseIfExists&&(a.reuseIfExists=i.reuseIfExists),i.startupCommand&&(a.startupCommand=i.startupCommand),i.bootstrapScript&&(a.bootstrapScript=i.bootstrapScript),i.bootstrap_script&&(a.bootstrap_script=i.bootstrap_script),i.owner_access_key&&(a.owner_access_key=i.owner_access_key),a.config={resources:e},i.mounts&&(a.config.mounts=i.mounts),i.mount_map&&(a.config.mount_map=i.mount_map),i.scaling_group&&(a.config.scaling_group=i.scaling_group),i.shmem&&(a.config.resource_opts={},a.config.resource_opts.shmem=i.shmem),i.env&&(a.config.environ=i.env)}return r=this._apiVersionMajor<5?this.newSignedRequest("POST",`${this.kernelPrefix}/create`,a):this.newSignedRequest("POST",`${this.kernelPrefix}`,a),this._wrapWithPromise(r,!1,null,o)}async createSessionFromTemplate(e,t=null,i=null,o={},n=0){null==i&&(i=this.generateSessionId());const r={template_id:e};if(t&&(r.image=t),i&&(r.name=i),o&&Object.keys(o).length>0){let e={};o.cpu&&(e.cpu=o.cpu),o.mem&&(e.mem=o.mem),o["cuda.device"]&&(e["cuda.device"]=parseInt(o["cuda.device"])),o.fgpu&&(e["cuda.shares"]=parseFloat(o.fgpu).toFixed(2)),o["cuda.shares"]&&(e["cuda.shares"]=parseFloat(o["cuda.shares"]).toFixed(2)),o.rocm&&(e["rocm.device"]=o.rocm),o.tpu&&(e["tpu.device"]=o.tpu),o.cluster_size&&(r.cluster_size=o.cluster_size),o.cluster_mode&&(r.cluster_mode=o.cluster_mode),o.group_name&&(r.group_name=o.group_name),o.domain&&(r.domain=o.domain),o.type&&(r.type=o.type),o.starts_at&&(r.starts_at=o.startsAt),o.enqueueOnly&&(r.enqueueOnly=o.enqueueOnly),o.maxWaitSeconds&&(r.maxWaitSeconds=o.maxWaitSeconds),o.reuseIfExists&&(r.reuseIfExists=o.reuseIfExists),o.startupCommand&&(r.startupCommand=o.startupCommand),o.bootstrap_script&&(r.bootstrap_script=o.bootstrap_script),o.owner_access_key&&(r.owner_access_key=o.owner_access_key),r.config={resources:e},o.mounts&&(r.config.mounts=o.mounts),o.scaling_group&&(r.config.scaling_group=o.scaling_group),o.shmem&&(r.config.resource_opts={},r.config.resource_opts.shmem=o.shmem),o.env&&(r.config.environ=o.env)}const a=this.newSignedRequest("POST",`${this.kernelPrefix}/_/create-from-template`,r);return this._wrapWithPromise(a,!1,null,n)}async get_info(e,t=null){let i=`${this.kernelPrefix}/${e}`;null!=t&&(i=`${i}?owner_access_key=${t}`);let o=this.newSignedRequest("GET",i,null);return this._wrapWithPromise(o)}async get_logs(e,t=null,i=0){let o=`${this.kernelPrefix}/${e}/logs`;null!=t&&(o=`${o}?owner_access_key=${t}`);let n=this.newSignedRequest("GET",o,null);return this._wrapWithPromise(n,!1,null,i)}getTaskLogs(e){const t=`${this.kernelPrefix}/_/logs?session_name=${e}`;let i=this.newSignedRequest("GET",t,null);return this._wrapWithPromise(i)}async destroy(e,t=null,i=!1){let o=`${this.kernelPrefix}/${e}`;o=null!==t?`${o}?owner_access_key=${t}${i?"&forced=true":""}`:`${o}${i?"?forced=true":""}`;let n=this.newSignedRequest("DELETE",o,null);return this._wrapWithPromise(n,!1,null,15e3,2)}async restart(e,t=null){let i=`${this.kernelPrefix}/${e}`;null!=t&&(i=`${i}?owner_access_key=${t}`);let o=this.newSignedRequest("PATCH",i,null);return this._wrapWithPromise(o)}async execute(e,t,i,o,n,r=0){let a={mode:i,code:o,runId:t,options:n},s=this.newSignedRequest("POST",`${this.kernelPrefix}/${e}`,a);return this._wrapWithPromise(s,!1,null,r)}createKernel(e,t,i={},o=0){return this.createIfNotExists(e,t,i,o,"x86_64")}destroyKernel(e,t=null){return this.destroy(e,t)}refreshKernel(e,t=null){return this.restart(e,t)}runCode(e,t,i,o){return this.execute(t,i,o,e,{})}async rename(e,t){let i={name:t},o=this.newSignedRequest("POST",`${this.kernelPrefix}/${e}/rename`,i);return this._wrapWithPromise(o)}async shutdown_service(e,t){const i=new URLSearchParams({service_name:t}).toString();let o=this.newSignedRequest("POST",`${this.kernelPrefix}/${e}/shutdown-service?${i}`,null);return this._wrapWithPromise(o,!0)}async upload(e,t,i){const o=new FormData;o.append("src",i,t);let n=this.newSignedRequest("POST",`${this.kernelPrefix}/${e}/upload`,o);return this._wrapWithPromise(n)}async download(e,t){const i=new URLSearchParams({files:t}).toString();let o=this.newSignedRequest("GET",`${this.kernelPrefix}/${e}/download?${i}`,null);return this._wrapWithPromise(o,!0)}async download_single(e,t){const i=new URLSearchParams({file:t}).toString();let o=this.newSignedRequest("GET",`${this.kernelPrefix}/${e}/download_single?${i}`,null);return this._wrapWithPromise(o,!0)}mangleUserAgentSignature(){return this.clientVersion+(this.agentSignature?"; "+this.agentSignature:"")}async query(e,t,i=null,o=0,n=0,r=!1){let a={query:e,variables:t},s=this.newSignedRequest("POST","/admin/graphql",a,r);return this._wrapWithPromise(s,!1,i,o,n)}newSignedRequest(e,t,i,o=!1){let n,r,a,s,l,c="application/json",d=new Date;if(null==i?(n="",r=n):"function"==typeof i.getBoundary||i instanceof FormData?(n=i,r="",c="multipart/form-data"):(n=JSON.stringify(i),r=n),l="","SESSION"===this._config.connectionMode)s=new Headers({"User-Agent":`Backend.AI Client for Javascript ${this.mangleUserAgentSignature()}`,"X-BackendAI-Version":this._config.apiVersion,"X-BackendAI-Date":d.toISOString()}),l=!0===t.startsWith("/server")?this._config.endpoint+t:this._config.endpoint+"/func"+t;else{a=this._config._apiVersion[1]<4?this.getAuthenticationString(e,t,d.toISOString(),r,c):this.getAuthenticationString(e,t,d.toISOString(),"",c);let i=this.getSignKey(this._config.secretKey,d),o=this.sign(i,"binary",a,"hex");s=new Headers({"User-Agent":`Backend.AI Client for Javascript ${this.mangleUserAgentSignature()}`,"X-BackendAI-Version":this._config.apiVersion,"X-BackendAI-Date":d.toISOString(),Authorization:`BackendAI signMethod=HMAC-SHA256, credential=${this._config.accessKey}:${o}`}),l=this._config.endpoint+t}return null!=i?("function"==typeof i.getBoundary&&s.set("Content-Type",i.getHeaders()["content-type"]),i instanceof FormData||(s.set("Content-Type",c),s.set("Content-Length",(new TextEncoder).encode(r).length))):s.set("Content-Type",c),o&&this.supports("secure-payload")&&"string"==typeof n&&(s.set("X-BackendAI-Encoded","true"),n=this.getEncodedPayload(n)),{method:e,headers:s,cache:"default",body:n,uri:l}}newUnsignedRequest(e,t,i){return this.newPublicRequest(e,t,i,this._config.apiVersionMajor)}newPublicRequest(e,t,i,o){let n=new Date,r={method:e,headers:new Headers({"Content-Type":"application/json","User-Agent":`Backend.AI Client for Javascript ${this.mangleUserAgentSignature()}`,"X-BackendAI-Version":this._config.apiVersion,"X-BackendAI-Date":n.toISOString(),credentials:"include",mode:"cors"}),mode:"cors",cache:"default",uri:""};return"SESSION"===this._config.connectionMode&&!0===t.startsWith("/server")?r.uri=this._config.endpoint+t:"SESSION"===this._config.connectionMode&&!1===t.startsWith("/server")?r.uri=this._config.endpoint+"/func"+t:r.uri=this._config.endpoint+t,r}getAuthenticationString(e,t,i,o,n="application/json"){let r=Dd.SHA256(o);return e+"\n"+t+"\n"+i+"\nhost:"+this._config.endpointHost+"\ncontent-type:"+n+"\nx-backendai-version:"+this._config.apiVersion+"\n"+r}getCurrentDate(e){return`0000${e.getUTCFullYear()}`.slice(-4)+`0${e.getUTCMonth()+1}`.slice(-2)+`0${e.getUTCDate()}`.slice(-2)}getEncodedPayload(e){let t=this.generateRandomStr(16),i=(btoa(this._config.endpoint)+t+t).substring(0,32);return t+":"+Dd.AES.encrypt(e,Dd.enc.Utf8.parse(i),{iv:Dd.enc.Utf8.parse(t),padding:Dd.pad.Pkcs7,mode:Dd.mode.CBC}).toString()}sign(e,t,i,o){const n=Dd.enc.Utf8.parse(i);let r;return e="utf8"==t?Dd.enc.Utf8.parse(e):"binary"==t?Dd.enc.Hex.parse(e):Dd.enc.Utf8.parse(e),r=["binary","hex"].includes(o)?Dd.enc.Hex.stringify(Dd.HmacSHA256(n,e)):Dd.enc.Base64.stringify(Dd.HmacSHA256(n,e)),r}getSignKey(e,t){let i=this.sign(e,"utf8",this.getCurrentDate(t),"binary");return this.sign(i,"binary",this._config.endpointHost,"binary")}generateRandomStr(e){for(var t="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<e;o++)t+=i.charAt(Math.floor(Math.random()*i.length));return t}generateSessionId(e=8,t=!1){var i=this.generateRandomStr(e);return t?i:i+"-jsSDK"}slugify(e){const t="àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;",i=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(i,(e=>"aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------".charAt(t.indexOf(e)))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}async fetchSSHKeypair(){let e=this.newSignedRequest("GET","/auth/ssh-keypair",null);return this._wrapWithPromise(e,!1)}async refreshSSHKeypair(){let e=this.newSignedRequest("PATCH","/auth/ssh-keypair",null);return this._wrapWithPromise(e,!1)}}class Hd{constructor(e){this.client=e,this.urlPrefix="/resource"}async list(e=null){let t=this.client.newSignedRequest("GET",`${this.urlPrefix}/presets`,e);return this.client._wrapWithPromise(t)}async check(e=null){let t=this.client.newSignedRequest("POST",`${this.urlPrefix}/check-presets`,e);return this.client._wrapWithPromise(t)}async add(e=null,t){if(!0===this.client.is_admin&&null!==e){let i="mutation($name: String!, $input: CreateResourcePresetInput!) {  create_resource_preset(name: $name, props: $input) {    ok msg   }}",o={name:e,input:t};return this.client.query(i,o)}return Promise.resolve(!1)}async mutate(e=null,t){if(!0===this.client.is_admin&&null!==e){let i="mutation($name: String!, $input: ModifyResourcePresetInput!) {  modify_resource_preset(name: $name, props: $input) {    ok msg   }}",o={name:e,input:t};return this.client.query(i,o)}return Promise.resolve(!1)}async delete(e=null){if(!0===this.client.is_admin&&null!==e){let t="mutation($name: String!) {  delete_resource_preset(name: $name) {    ok msg   }}",i={name:e};return this.client.query(t,i)}return Promise.resolve(!1)}}class qd{constructor(e,t=null){this.client=e,this.name=t,this.urlPrefix="/folders"}async list_allowed_types(){let e=this.client.newSignedRequest("GET",`${this.urlPrefix}/_/allowed_types`,null);return this.client._wrapWithPromise(e)}async create(e,t="",i="",o="general",n="rw",r=!1){let a;""!==t&&(a={name:e,host:t}),this.client.supports("group-folder")&&""!==i&&(a={name:e,host:t,group:i}),this.client.isAPIVersionCompatibleWith("v4.20191215")&&(o&&(a.usage_mode=o),n&&(a.permission=n)),this.client.supports("storage-proxy")&&(a.cloneable=r);let s=this.client.newSignedRequest("POST",`${this.urlPrefix}`,a);return this.client._wrapWithPromise(s)}async clone(e,t=null){let i=this.client.newSignedRequest("POST",`${this.urlPrefix}/${t}/clone`,e);return this.client._wrapWithPromise(i)}async update_folder(e,t=null){let i=this.client.newSignedRequest("POST",`${this.urlPrefix}/${t}/update-options`,e);return this.client._wrapWithPromise(i)}async list(e=null,t=null){let i=this.urlPrefix,o={};e&&(o.group_id=e),t&&(o.owner_user_email=t);i+=`?${new URLSearchParams(o).toString()}`;let n=this.client.newSignedRequest("GET",i,null);return this.client._wrapWithPromise(n)}async list_hosts(e=null){let t=`${this.urlPrefix}/_/hosts`,i={};this.client.isManagerVersionCompatibleWith("22.03.0")&&e&&(i.group_id=e);t+=`?${new URLSearchParams(i).toString()}`;let o=this.client.newSignedRequest("GET",t,null);return this.client._wrapWithPromise(o)}async info(e=null){null==e&&(e=this.name);let t=this.client.newSignedRequest("GET",`${this.urlPrefix}/${e}`,null);return this.client._wrapWithPromise(t)}async rename(e=null){const t={new_name:e};let i=this.client.newSignedRequest("POST",`${this.urlPrefix}/${this.name}/rename`,t);return this.client._wrapWithPromise(i)}async delete(e=null){null==e&&(e=this.name);let t=this.client.newSignedRequest("DELETE",`${this.urlPrefix}/${e}`,null);return this.client._wrapWithPromise(t)}async leave_invited(e=null){null==e&&(e=this.name);let t=this.client.newSignedRequest("POST",`${this.urlPrefix}/${e}/leave`,null);return this.client._wrapWithPromise(t)}async upload(e,t,i=null){null==i&&(i=this.name);let o=new FormData;o.append("src",t,e);let n=this.client.newSignedRequest("POST",`${this.urlPrefix}/${i}/upload`,o);return this.client._wrapWithPromise(n)}async uploadFormData(e,t=null){let i=this.client.newSignedRequest("POST",`${this.urlPrefix}/${t}/upload`,e);return this.client._wrapWithPromise(i)}async create_upload_session(e,t,i=null){null==i&&(i=this.name);let o,n={path:e,size:t.size};o=this.client._apiVersionMajor<6?`${this.urlPrefix}/${i}/create_upload_session`:`${this.urlPrefix}/${i}/request-upload`;const r=this.client.newSignedRequest("POST",o,n),a=await this.client._wrapWithPromise(r),s=a.token;let l;return this.client._apiVersionMajor<6?(l=this.client._config.endpoint,"SESSION"===this.client._config.connectionMode&&(l+="/func"),l+=`${this.urlPrefix}/_/tus/upload/${s}`):l=`${a.url}?token=${s}`,Promise.resolve(l)}async mkdir(e,t=null,i=null,o=null){null==t&&(t=this.name);const n={path:e};i&&(n.parents=i),o&&(n.exist_ok=o);const r=this.client.newSignedRequest("POST",`${this.urlPrefix}/${t}/mkdir`,n);return this.client._wrapWithPromise(r)}async rename_file(e,t,i=null,o=!1){let n;null==i&&(i=this.name),n=this.client.isAPIVersionCompatibleWith("v6.20200815")?{target_path:e,new_name:t,is_dir:o}:{target_path:e,new_name:t};let r=this.client.newSignedRequest("POST",`${this.urlPrefix}/${i}/rename_file`,n);return this.client._wrapWithPromise(r)}async delete_files(e,t=!1,i=null){null==i&&(i=this.name),null==t&&(t=!1);let o={files:e,recursive:t},n=this.client.newSignedRequest("DELETE",`${this.urlPrefix}/${i}/delete_files`,o);return this.client._wrapWithPromise(n)}async download(e,t=!1,i=!1,o=!1){const n=new URLSearchParams({file:e,archive:i?"true":"false"}).toString();if(this.client._apiVersionMajor<6){const e=this.client.newSignedRequest("GET",`${this.urlPrefix}/${t}/download_single?${n}`,null);return this.client._wrapWithPromise(e,!0)}{const n=await this.request_download_token(e,t),r=`${n.url}?token=${n.token}&archive=${i}&no_cache=${o}`;return fetch(r)}}async request_download_token(e,t=!1,i=!1){let o,n={file:e,archive:i};o=this.client._apiVersionMajor<6?`${this.urlPrefix}/${t}/request_download`:`${this.urlPrefix}/${t}/request-download`;const r=this.client.newSignedRequest("POST",o,n);return this.client._wrapWithPromise(r)}async download_with_token(e=""){let t=new URLSearchParams({token:e}).toString(),i=this.client.newSignedRequest("GET",`${this.urlPrefix}/_/download_with_token?${t}`,null);return this.client._wrapWithPromise(i,!0)}get_download_url_with_token(e=""){let t=new URLSearchParams({token:e}).toString();return"SESSION"===this.client._config.connectionMode?`${this.client._config.endpoint}/func${this.urlPrefix}/_/download_with_token?${t}`:`${this.client._config.endpoint}${this.urlPrefix}/_/download_with_token?${t}`}async list_files(e,t=null){null==t&&(t=this.name);let i=new URLSearchParams({path:e}).toString(),o=this.client.newSignedRequest("GET",`${this.urlPrefix}/${t}/files?${i}`,null);return this.client._wrapWithPromise(o)}async invite(e,t,i=null){null==i&&(i=this.name);let o={perm:e,user_ids:t},n=this.client.newSignedRequest("POST",`${this.urlPrefix}/${i}/invite`,o);return this.client._wrapWithPromise(n)}async invitations(){let e=this.client.newSignedRequest("GET",`${this.urlPrefix}/invitations/list`,null);return this.client._wrapWithPromise(e)}async accept_invitation(e){let t={inv_id:e},i=this.client.newSignedRequest("POST",`${this.urlPrefix}/invitations/accept`,t);return this.client._wrapWithPromise(i)}async delete_invitation(e){let t={inv_id:e},i=this.client.newSignedRequest("DELETE",`${this.urlPrefix}/invitations/delete`,t);return this.client._wrapWithPromise(i)}async list_invitees(e=null){let t="/folders/_/shared";null!==e&&(t=`${t}?vfolder_id=${e}`);let i=this.client.newSignedRequest("GET",t,null);return this.client._wrapWithPromise(i)}async modify_invitee_permission(e){let t=this.client.newSignedRequest("POST","/folders/_/shared",e);return this.client._wrapWithPromise(t)}async share(e,t,i=null){i||(i=this.name);const o={permission:e,emails:t},n=this.client.newSignedRequest("POST",`${this.urlPrefix}/${i}/share`,o);return this.client._wrapWithPromise(n)}async unshare(e,t=null){t||(t=this.name);const i={emails:e},o=this.client.newSignedRequest("DELETE",`${this.urlPrefix}/${t}/unshare`,i);return this.client._wrapWithPromise(o)}async get_quota(e,t){let i=new URLSearchParams({folder_host:e,id:t}).toString();const o=this.client.newSignedRequest("GET",`${this.urlPrefix}/_/quota?${i}`,null);return this.client._wrapWithPromise(o)}async set_quota(e,t,i){const o={folder_host:e,id:t,input:{size_bytes:i}},n=this.client.newSignedRequest("POST",`${this.urlPrefix}/_/quota`,o);return this.client._wrapWithPromise(n)}}class Vd{constructor(e){this.client=e}async list(e="ALIVE",t=["id","status","region","first_contact","cpu_cur_pct","mem_cur_bytes","available_slots","occupied_slots"],i=0){if(!1===["ALIVE","TERMINATED"].includes(e))return Promise.resolve(!1);let o=`query($status: String) {  agents(status: $status) {     ${t.join(" ")}  }}`,n={status:e};return this.client.query(o,n,null,i)}async update(e=null,t){if(!0===this.client.is_superadmin&&null!==e){let i="mutation($id: String!, $input: ModifyAgentInput!) {  modify_agent(id: $id, props: $input) {    ok msg   }}",o={id:e,input:t};return this.client.query(i,o)}return Promise.resolve(!1)}}class Wd{constructor(e){this.client=e}async list(e=["id","backend","capabilities"],t=20,i=0){let o=`query($offset:Int!, $limit:Int!) {  storage_volume_list(limit:$limit, offset:$offset) {     items { ${e.join(" ")} }     total_count  }}`,n={limit:t,offset:i};return this.client.query(o,n)}async detail(e="",t=["id","backend","path","fsprefix","capabilities"]){let i=`query($vfolder_host: String!) {  storage_volume(id: $vfolder_host) {     ${t.join(" ")}  }}`,o={vfolder_host:e};return this.client.query(i,o)}}class Gd{constructor(e,t=null){this.client=e,this.name=t}async info(e,t=["access_key","secret_key","is_active","is_admin","user_id","created_at","last_used","concurrency_limit","concurrency_used","rate_limit","num_queries","resource_policy"]){let i,o;return this.client.is_admin?(i=`query($access_key: String!) {  keypair(access_key: $access_key) {    ${t.join(" ")}  }}`,o={access_key:e}):(i=`query {  keypair {    ${t.join(" ")}  }}`,o={}),this.client.query(i,o)}async list(e=null,t=["access_key","is_active","is_admin","user_id","created_at","last_used","concurrency_used","rate_limit","num_queries","resource_policy"],i=!0){let o,n;if(this.client._apiVersionMajor<5)return o=this.client.is_admin&&null==e?`\n        query($is_active: Boolean) {\n          keypairs(is_active: $is_active) {\n            ${t.join(" ")}\n          }\n        }\n      `:`\n        query($email: String!, $is_active: Boolean) {\n          keypairs(email: $email, is_active: $is_active) {\n            ${t.join(" ")}\n          }\n        }\n      `,n={email:e||this.client.email,is_active:i},this.client.query(o,n);{const r=100,a=[];o=this.client.is_admin&&null==e?`\n        query($offset:Int!, $limit:Int!, $is_active: Boolean) {\n          keypair_list(offset:$offset, limit:$limit, is_active: $is_active) {\n            items { ${t.join(" ")} }\n            total_count\n          }\n        }\n      `:`\n        query($offset:Int!, $limit:Int!, $email: String!, $is_active: Boolean) {\n          keypair_list(offset:$offset, limit:$limit, email: $email, is_active: $is_active) {\n            items { ${t.join(" ")} }\n            total_count\n          }\n        }\n      `;for(let t=0;t<10*r;t+=r){n={offset:t,limit:r,email:e||this.client.email,is_active:i};const s=await this.client.query(o,n);if(a.push(...s.keypair_list.items),t>=s.keypair_list.total_count)break}const s={keypairs:a};return Promise.resolve(s)}}async add(e=null,t=!0,i=!1,o="default",n=1e3){let r=`mutation($user_id: String!, $input: KeyPairInput!) {  create_keypair(user_id: $user_id, props: $input) {    ok msg keypair { ${["is_active","is_admin","resource_policy","concurrency_limit","rate_limit"].join(" ")} }  }}`,a={user_id:e,input:{is_active:t,is_admin:i,resource_policy:o,rate_limit:n}};return this.client.query(r,a)}async mutate(e,t){let i={access_key:e,input:t};return this.client.query("mutation($access_key: String!, $input: ModifyKeyPairInput!) {  modify_keypair(access_key: $access_key, props: $input) {    ok msg  }}",i)}async delete(e){let t={access_key:e};return this.client.query("mutation($access_key: String!) {  delete_keypair(access_key: $access_key) {    ok msg  }}",t)}}class Xd{constructor(e){this.client=e}async get(e=null,t=["name","created_at","default_for_unspecified","total_resource_slots","max_concurrent_sessions","max_containers_per_session","max_vfolder_count","max_vfolder_size","allowed_vfolder_hosts","idle_timeout"]){let i,o;return this.client.supports("session-lifetime")&&t.push("max_session_lifetime"),null===e?(i=`query {  keypair_resource_policies { ${t.join(" ")} }}`,o={n:e}):(i=`query($n:String!) {  keypair_resource_policy(name: $n) { ${t.join(" ")} }}`,o={n:e}),this.client.query(i,o)}async add(e=null,t){let i=["name","created_at","default_for_unspecified","total_resource_slots","max_concurrent_sessions","max_containers_per_session","max_vfolder_count","max_vfolder_size","allowed_vfolder_hosts","idle_timeout"];if(this.client.supports("session-lifetime")&&i.push("max_session_lifetime"),!0===this.client.is_admin&&null!==e){let o=`mutation($name: String!, $input: CreateKeyPairResourcePolicyInput!) {  create_keypair_resource_policy(name: $name, props: $input) {    ok msg resource_policy { ${i.join(" ")} }  }}`,n={name:e,input:t};return this.client.query(o,n)}return Promise.resolve(!1)}async mutate(e=null,t){if(!0===this.client.is_admin&&null!==e){let i="mutation($name: String!, $input: ModifyKeyPairResourcePolicyInput!) {  modify_keypair_resource_policy(name: $name, props: $input) {    ok msg   }}",o={name:e,input:t};return this.client.query(i,o)}return Promise.resolve(!1)}async delete(e=null){if(!0===this.client.is_superadmin&&null!==e){let t="mutation($name: String!) { delete_keypair_resource_policy(name: $name) {   ok msg  }}",i={name:e};return this.client.query(t,i)}return Promise.resolve(!1)}}class Kd{constructor(e){this.client=e}async list(e=["name","tag","registry","digest","installed","labels { key value }","resource_limits { key min max }"],t=!1,i=!1){let o,n;return this.client.supports("system-images")?!0===t?(o=`query($installed:Boolean) {  images(is_installed:$installed) { ${e.join(" ")} }}`,n={installed:t,is_operation:i}):(o=`query {  images { ${e.join(" ")} }}`,n={is_operation:i}):(o=`query {  images { ${e.join(" ")} }}`,n={}),this.client.query(o,n)}async modifyResource(e,t,i,o){let n=[];return e=e.replace(":","%3A"),t=t.replace("/","%2F"),Object.keys(o).forEach((r=>{Object.keys(o[r]).forEach((a=>{const s=this.client.newSignedRequest("POST","/config/set",{key:`images/${e}/${t}/${i}/resource/${r}/${a}`,value:o[r][a]});n.push(this.client._wrapWithPromise(s))}))})),Promise.all(n)}async modifyLabel(e,t,i,o,n){e=e.replace(":","%3A"),t=t.replace("/","%2F"),i=i.replace("/","%2F");const r=this.client.newSignedRequest("POST","/config/set",{key:`images/${e}/${t}/${i}/labels/${o}`,value:n});return this.client._wrapWithPromise(r)}async install(e,t,i={},o="index.docker.io"){"index.docker.io"!=o?o+="/":o="",o=o.replace(":","%3A");let n=this.client.generateSessionId();return 0===Object.keys(i).length&&(i={cpu:"1",mem:"512m"}),this.client.createIfNotExists(o+e,n,i,6e5,t).then((e=>this.client.destroy(n))).catch((e=>{throw e}))}async uninstall(e,t="index.docker.io"){return Promise.resolve(!1)}async get(e,t,i){e=e.replace(":","%3A");const o=this.client.newSignedRequest("POST","/config/get",{key:`images/${e}/${t}/${i}/resource/`,prefix:!0});return this.client._wrapWithPromise(o)}}class Yd{constructor(e){this.client=e}async total_count(e="RUNNING",t="",i=1,o=0,n=""){let r,a;return r="query($limit:Int!, $offset:Int!, $ak:String, $group_id:String, $status:String) {\n      compute_session_list(limit:$limit, offset:$offset, access_key:$ak, group_id:$group_id, status:$status) {\n        total_count\n      }\n    }",a={limit:i,offset:o,status:e},""!=t&&(a.ak=t),""!=n&&(a.group_id=n),this.client.query("query($limit:Int!, $offset:Int!, $ak:String, $group_id:String, $status:String) {\n      compute_session_list(limit:$limit, offset:$offset, access_key:$ak, group_id:$group_id, status:$status) {\n        total_count\n      }\n    }",a)}async list(e=["id","name","image","created_at","terminated_at","status","status_info","occupied_slots","containers {live_stat last_stat}","starts_at"],t="RUNNING",i="",o=30,n=0,r="",a=0){let s,l;return s=`query($limit:Int!, $offset:Int!, $ak:String, $group_id:String, $status:String) {\n      compute_session_list(limit:$limit, offset:$offset, access_key:$ak, group_id:$group_id, status:$status) {\n        items { ${(e=this.client._updateFieldCompatibilityByAPIVersion(e)).join(" ")}}\n        total_count\n      }\n    }`,l={limit:o,offset:n,status:t},""!=i&&(l.ak=i),""!=r&&(l.group_id=r),this.client.query(s,l,null,a)}async listAll(e=["id","name","image","created_at","terminated_at","status","status_info","occupied_slots","containers {live_stat last_stat}"],t="RUNNING,RESTARTING,TERMINATING,PENDING,SCHEDULED,PREPARING,PULLING,TERMINATED,CANCELLED,ERROR",i="",o=100,n=0,r="",a=0){let s,l;e=this.client._updateFieldCompatibilityByAPIVersion(e),this.client.supports("avoid-hol-blocking")||(t.replace("SCHEDULED,",""),t.replace("SCHEDULED",""));const c=[];s=`query($limit:Int!, $offset:Int!, $ak:String, $group_id:String, $status:String) {\n      compute_session_list(limit:$limit, offset:$offset, access_key:$ak, group_id:$group_id, status:$status) {\n        items { ${e.join(" ")}}\n        total_count\n      }\n    }`;for(let e=0;e<10*o;e+=o){l={limit:o,offset:e,status:t},""!=i&&(l.access_key=i),""!=r&&(l.group_id=r);const n=await this.client.query(s,l,null,a);if(console.log(n.compute_session_list.total_count),c.push(...n.compute_session_list.items),e>=n.compute_session_list.total_count)break}return Promise.resolve(c)}async get(e=["id","session_name","lang","created_at","terminated_at","status","status_info","occupied_slots","cpu_used","io_read_bytes","io_write_bytes","scaling_group"],t=""){let i,o;return i=`query($session_uuid: UUID!) {\n      compute_session(id:$session_uuid) {\n        ${(e=this.client._updateFieldCompatibilityByAPIVersion(e)).join(" ")}\n      }\n    }`,o={session_uuid:t},this.client.query(i,o)}async startService(e,t,i,o=null,n=null,r=null){let a=this.client.newSignedRequest("POST",`/session/${t}/start-service`,{login_session_token:e,app:i,port:o||void 0,envs:n||void 0,arguments:JSON.stringify(r)||void 0});return this.client._wrapWithPromise(a)}}class Qd{constructor(e){this.client=e,this.urlPrefix="/template/session"}async list(e=!1,t=null){let i=this.urlPrefix;if(e){i+=`?${new URLSearchParams({all:e?"true":"false"}).toString()}`}if(t){i+=`?${new URLSearchParams({group_id:t}).toString()}`}let o=this.client.newSignedRequest("GET",i,null);return this.client._wrapWithPromise(o)}}class Jd{constructor(e){this.client=e,this.resources={},this._init_resource_values()}_init_resource_values(){this.resources.cpu={},this.resources.cpu.total=0,this.resources.cpu.used=0,this.resources.cpu.percent=0,this.resources.mem={},this.resources.mem.total=0,this.resources.mem.allocated=0,this.resources.mem.used=0,this.resources.gpu={},this.resources.gpu.total=0,this.resources.gpu.used=0,this.resources["cuda.device"]={},this.resources["cuda.device"].total=0,this.resources["cuda.device"].used=0,this.resources.fgpu={},this.resources.fgpu.total=0,this.resources.fgpu.used=0,this.resources["cuda.shares"]={},this.resources["cuda.shares"].total=0,this.resources["cuda.shares"].used=0,this.resources["rocm.device"]={},this.resources["rocm.device"].total=0,this.resources["rocm.device"].used=0,this.resources["tpu.device"]={},this.resources["tpu.device"].total=0,this.resources["tpu.device"].used=0,this.resources.agents={},this.resources.agents.total=0,this.resources.agents.using=0,this.agents=[]}async totalResourceInformation(e="ALIVE"){if(this.client.is_admin){let t=["id","addr","status","first_contact","cpu_cur_pct","mem_cur_bytes","occupied_slots","available_slots"];return this.client.agent.list(e,t).then((e=>(this._init_resource_values(),this.agents=e.agents,Object.keys(this.agents).map(((e,t)=>{let i=this.agents[e],o=JSON.parse(i.occupied_slots),n=JSON.parse(i.available_slots);"cpu"in n&&(this.resources.cpu.total=this.resources.cpu.total+Math.floor(Number(n.cpu))),"cpu"in o&&(this.resources.cpu.used=this.resources.cpu.used+Math.floor(Number(o.cpu))),this.resources.cpu.percent=this.resources.cpu.percent+parseFloat(i.cpu_cur_pct),void 0===o.mem&&(o.mem=0),this.resources.mem.total=parseFloat(this.resources.mem.total)+parseInt(this.client.utils.changeBinaryUnit(n.mem,"b")),this.resources.mem.allocated=parseInt(this.resources.mem.allocated)+parseInt(this.client.utils.changeBinaryUnit(o.mem,"b")),this.resources.mem.used=parseInt(this.resources.mem.used)+parseInt(this.client.utils.changeBinaryUnit(i.mem_cur_bytes,"b")),"cuda.device"in n&&(this.resources["cuda.device"].total=parseInt(this.resources["cuda.device"].total)+Math.floor(Number(n["cuda.device"]))),"cuda.device"in o&&(this.resources["cuda.device"].used=parseInt(this.resources["cuda.device"].used)+Math.floor(Number(o["cuda.device"]))),"cuda.shares"in n&&(this.resources["cuda.shares"].total=parseFloat(this.resources["cuda.shares"].total)+parseFloat(n["cuda.shares"])),"cuda.shares"in o&&(this.resources["cuda.shares"].used=parseFloat(this.resources["cuda.shares"].used)+parseFloat(o["cuda.shares"])),"rocm.device"in n&&(this.resources["rocm.device"].total=parseInt(this.resources["rocm.device"].total)+Math.floor(Number(n["rocm.device"]))),"rocm.device"in o&&(this.resources["rocm.device"].used=parseInt(this.resources["rocm.device"].used)+Math.floor(Number(o["rocm.device"]))),"tpu.device"in n&&(this.resources["tpu.device"].total=parseInt(this.resources["tpu.device"].total)+Math.floor(Number(n["tpu.device"]))),"tpu.device"in o&&(this.resources["tpu.device"].used=parseInt(this.resources["tpu.device"].used)+Math.floor(Number(o["tpu.device"]))),isNaN(this.resources.cpu.used)&&(this.resources.cpu.used=0),isNaN(this.resources.mem.used)&&(this.resources.mem.used=0),isNaN(this.resources.gpu.used)&&(this.resources.gpu.used=0),isNaN(this.resources.fgpu.used)&&(this.resources.fgpu.used=0)})),this.resources.gpu.total=this.resources["cuda.device"].total,this.resources.gpu.used=this.resources["cuda.device"].used,this.resources.fgpu.used=this.resources["cuda.shares"].used.toFixed(2),this.resources.fgpu.total=this.resources["cuda.shares"].total.toFixed(2),this.resources.agents.total=Object.keys(this.agents).length,this.resources.agents.using=Object.keys(this.agents).length,Promise.resolve(this.resources)))).catch((e=>{throw e}))}return Promise.resolve(!1)}async user_stats(){const e=this.client.newSignedRequest("GET","/resource/stats/user/month",null);return this.client._wrapWithPromise(e)}}class Zd{constructor(e){this.client=e}async list(e=!0,t=!1,i=["id","name","description","is_active","created_at","modified_at","domain_name"]){let o,n;return!0===this.client.is_admin?(o=`query($is_active:Boolean) {  groups(is_active:$is_active) { ${i.join(" ")} }}`,n={is_active:e},!1!==t&&(o=`query($domain_name: String, $is_active:Boolean) {  groups(domain_name: $domain_name, is_active:$is_active) { ${i.join(" ")} }}`,n={is_active:e,domain_name:t})):(o=`query($is_active:Boolean) {  groups(is_active:$is_active) { ${i.join(" ")} }}`,n={is_active:e}),this.client.query(o,n)}}class ep{constructor(e){this.client=e}async get(e=!1,t=["name","description","is_active","created_at","modified_at","total_resource_slots","allowed_vfolder_hosts","allowed_docker_registries","integration_id","scaling_groups"]){let i,o;if(!1!==e)return i=`query($name: String) {  domain(name: $name) { ${t.join(" ")} }}`,o={name:e},this.client.query(i,o)}async list(e=["name","description","is_active","created_at","total_resource_slots","allowed_vfolder_hosts","allowed_docker_registries","integration_id"]){let t=`query { domains { ${e.join(" ")} }}`;return this.client.query(t,{})}async update(e=!1,t){if(!0===this.client.is_superadmin){let i="mutation($name: String!, $input: ModifyDomainInput!) {  modify_domain(name: $name, props: $input) {    ok msg  }}",o={name:e,input:t};return this.client.query(i,o)}return Promise.resolve(!1)}}class tp{constructor(e){this.client=e,this.urlPrefix="/resource"}attach_background_task(e){var t="/events/background-task?task_id="+e;let i=this.client.newSignedRequest("GET",t,null);return new EventSource(i.uri,{withCredentials:!0})}async rescan_images(e=""){if(!0===this.client.is_admin){let t,i;return""!==e?(e=decodeURIComponent(e),t="mutation($registry: String) {  rescan_images(registry: $registry) {    ok msg task_id   }}",i={registry:e}):(t="mutation {  rescan_images {    ok msg task_id   }}",i={}),this.client.query(t,i,null,6e5)}return Promise.resolve(!1)}async recalculate_usage(){if(!0===this.client.is_superadmin){let e=this.client.newSignedRequest("POST",`${this.urlPrefix}/recalculate-usage`,null);return this.client._wrapWithPromise(e,null,null,6e4)}}}class ip{constructor(e){this.client=e}async list(e=!0,t=["username","password","need_password_change","full_name","description","is_active","domain_name","role","groups {id name}","status"]){let i,o;if(this.client._apiVersionMajor<5)return i=this.client.is_admin?`\n        query($is_active:Boolean) {\n          users(is_active:$is_active) { ${t.join(" ")} }\n        }\n      `:`\n        query {\n          users { ${t.join(" ")} }\n        }\n      `,o=this.client.is_admin?{is_active:e}:{},this.client.query(i,o);{const n=100,r=[];i=this.client.is_admin?`\n        query($offset:Int!, $limit:Int!, $is_active:Boolean) {\n          user_list(offset:$offset, limit:$limit, is_active:$is_active) {\n            items { ${t.join(" ")} }\n            total_count\n          }\n        }\n      `:`\n        query($offset:Int!, $limit:Int!) {\n          user_list(offset:$offset, limit:$limit) {\n            items { ${t.join(" ")} }\n            total_count\n          }\n        }\n      `;for(let t=0;t<10*n;t+=n){o=this.client.is_admin?{offset:t,limit:n,is_active:e}:{offset:t,limit:n};const a=await this.client.query(i,o);if(r.push(...a.user_list.items),t>=a.user_list.total_count)break}const a={users:r};return Promise.resolve(a)}}async get(e,t=["email","username","password","need_password_change","full_name","description","is_active","domain_name","role","groups {id name}"]){let i,o;return!0===this.client.is_admin?(i=`query($email:String) {  user (email:$email) { ${t.join(" ")} }}`,o={email:e}):(i=`query {  user { ${t.join(" ")} }}`,o={}),this.client.query(i,o)}async create(e=null,t){if(!0===this.client.is_admin){let i="mutation($email: String!, $input: UserInput!) {  create_user(email: $email, props: $input) {    ok msg  }}",o={email:e,input:t};return this.client.query(i,o,null,0,0,!0)}return Promise.resolve(!1)}async update(e=null,t){if(!0===this.client.is_superadmin){let i="mutation($email: String!, $input: ModifyUserInput!) {  modify_user(email: $email, props: $input) {    ok msg  }}",o={email:e,input:t};return this.client.query(i,o,null,0,0,!0)}return Promise.resolve(!1)}async delete(e){if(!0===this.client.is_superadmin){let t="mutation($email: String!) {  delete_user(email: $email) {    ok msg  }}",i={email:e};return this.client.query(t,i,null,0,0,!0)}return Promise.resolve(!1)}}class op{constructor(e){this.client=e}async list_available(){if(!0===this.client.is_superadmin){const e=["name","description","is_active","created_at","driver","driver_opts","scheduler","scheduler_opts"];this.client.isManagerVersionCompatibleWith("21.09.0")&&e.push("wsproxy_addr");const t=`query {  scaling_groups { ${e.join(" ")} }}`,i={};return this.client.query(t,i)}return Promise.resolve(!1)}async list(e="default"){const t=`/scaling-groups?group=${e}`,i=this.client.newSignedRequest("GET",t,null);return this.client._wrapWithPromise(i)}async getWsproxyVersion(e,t){if(!this.client.isManagerVersionCompatibleWith("21.09.0"))return Promise.resolve({wsproxy_version:"v1"});const i=`/scaling-groups/${e}/wsproxy-version?group=${t}`,o=this.client.newSignedRequest("GET",i,null);return this.client._wrapWithPromise(o)}async create(e,t){let i={name:e,input:t};return this.client.query("mutation($name: String!, $input: CreateScalingGroupInput!) {  create_scaling_group(name: $name, props: $input) {    ok msg  }}",i)}async associate_domain(e,t){let i={domain:e,scaling_group:t};return this.client.query("mutation($domain: String!, $scaling_group: String!) {  associate_scaling_group_with_domain(domain: $domain, scaling_group: $scaling_group) {    ok msg  }}",i)}async update(e,t){if(!this.client.isManagerVersionCompatibleWith("21.09.0")&&(delete t.wsproxy_addr,Object.keys(t).length<1))return Promise.resolve({modify_scaling_group:{ok:!0}});let i={name:e,input:t};return this.client.query("mutation($name: String!, $input: ModifyScalingGroupInput!) {  modify_scaling_group(name: $name, props: $input) {    ok msg  }}",i)}async delete(e){let t={name:e};return this.client.query("mutation($name: String!) {  delete_scaling_group(name: $name) {    ok msg  }}",t)}}class np{constructor(e){this.client=e}async list(){const e=this.client.newSignedRequest("POST","/config/get",{key:"config/docker/registry",prefix:!0});return this.client._wrapWithPromise(e)}async set(e,t){let i=`config/docker/registry/${e=encodeURIComponent(e)}`;const o=this.client.newSignedRequest("POST","/config/set",{key:i,value:t});return this.client._wrapWithPromise(o)}async delete(e){e=encodeURIComponent(e);const t=this.client.newSignedRequest("POST","/config/delete",{key:`config/docker/registry/${e}`,prefix:!0});return this.client._wrapWithPromise(t)}}class rp{constructor(e){this.client=e,this.config=null}async list(e=""){e=`config/${e}`;const t=this.client.newSignedRequest("POST","/config/get",{key:e,prefix:!0});return this.client._wrapWithPromise(t)}async get(e){e=`config/${e}`;const t=this.client.newSignedRequest("POST","/config/get",{key:e,prefix:!1});return this.client._wrapWithPromise(t)}async set(e,t){e=`config/${e}`;const i=this.client.newSignedRequest("POST","/config/set",{key:e,value:t});return this.client._wrapWithPromise(i)}async delete(e,t=!1){e=`config/${e}`;const i=this.client.newSignedRequest("POST","/config/delete",{key:`${e}`,prefix:t});return this.client._wrapWithPromise(i)}}class ap{constructor(e){this.client=e,this.config=null}async get_announcement(){const e=this.client.newSignedRequest("GET","/manager/announcement",null);return this.client._wrapWithPromise(e)}async update_announcement(e=!0,t){const i=this.client.newSignedRequest("POST","/manager/announcement",{enabled:e,message:t});return this.client._wrapWithPromise(i)}}class sp{constructor(e){this.client=e,this.config=null}async get_bootstrap_script(){if(!this.client._config.accessKey)throw"Your access key is not set";const e=this.client.newSignedRequest("GET","/user-config/bootstrap-script");return this.client._wrapWithPromise(e)}async update_bootstrap_script(e){const t=this.client.newSignedRequest("POST","/user-config/bootstrap-script",{script:e});return this.client._wrapWithPromise(t)}async create(e="",t){if(!this.client._config.accessKey)throw"Your access key is not set";let i={path:t,data:e,permission:"644"};const o=this.client.newSignedRequest("POST","/user-config/dotfiles",i);return this.client._wrapWithPromise(o)}async get(){if(!this.client._config.accessKey)throw"Your access key is not set";const e=this.client.newSignedRequest("GET","/user-config/dotfiles");return this.client._wrapWithPromise(e)}async update(e,t){let i={data:e,path:t,permission:"644"};const o=this.client.newSignedRequest("PATCH","/user-config/dotfiles",i);return this.client._wrapWithPromise(o)}async delete(e){let t={path:e};const i=this.client.newSignedRequest("DELETE","/user-config/dotfiles",t);return this.client._wrapWithPromise(i)}}class lp{constructor(e){this.client=e,this.config=null}async getLicense(){if(!0!==this.client.is_superadmin)return Promise.resolve(!1);if(void 0===this.certificate){const e=this.client.newSignedRequest("GET","/license");let t=await this.client._wrapWithPromise(e);return this.certificate=t.certificate,"valid"===t.status?this.certificate.valid=!0:this.certificate.valid=!1,Promise.resolve(this.certificate)}}}class cp{constructor(e){this.client=e,this.config=null}async ping(){const e=this.client.newSignedRequest("GET","/cloud/ping");return this.client._wrapWithPromise(e)}async verify_email(e){const t={verification_code:e},i=this.client.newSignedRequest("POST","/cloud/verify-email",t);return this.client._wrapWithPromise(i)}async send_verification_email(e){const t={email:e},i=this.client.newSignedRequest("POST","/cloud/send-verification-email",t);return this.client._wrapWithPromise(i)}async send_password_change_email(e){const t={email:e},i=this.client.newSignedRequest("POST","/cloud/send-password-change-email",t);return this.client._wrapWithPromise(i)}async change_password(e,t,i){const o={email:e,password:t,token:i},n=this.client.newSignedRequest("POST","/cloud/change-password",o);return this.client._wrapWithPromise(n)}}class dp{constructor(e){this.client=e,this.config=null}async ping(){const e=this.client.newSignedRequest("GET","/eduapp/ping");return this.client._wrapWithPromise(e)}async get_mount_folders(){const e=this.client.newSignedRequest("GET","/eduapp/mounts");return this.client._wrapWithPromise(e)}}class pp{constructor(e){this.client=e}changeBinaryUnit(e,t="g",i="b"){if(null==e)return e;let o;const n=["b","k","m","g","t","p","auto"],r=["B","KiB","MiB","GiB","TiB","PiB"];if(!n.includes(t))return!1;if((e=e.toString()).indexOf(" ")>=0){let t=e.split(/(\s+)/);e=r.includes(t[2])?t[0]+n[r.indexOf(t[2])]:t[0]}return n.includes(e.substr(-1))?(o=e.substr(-1),e=e.slice(0,-1)):o=i,e*Math.pow(1024,Math.floor(n.indexOf(o)-n.indexOf(t)))}elapsedTime(e,t){var i=new Date(e);if(null===t)var o=new Date;else o=new Date(t);var n=Math.floor((o.getTime()-i.getTime())/1e3),r=Math.floor(n/86400);n-=86400*r;var a=Math.floor(n/3600);n-=3600*a;var s=Math.floor(n/60),l=n-=60*s,c="";return void 0!==r&&r>0&&(c=c+String(r)+" Day "),void 0!==a&&(c=c+this._padding_zeros(a,2)+":"),void 0!==s&&(c=c+this._padding_zeros(s,2)+":"),c+this._padding_zeros(l,2)+""}_padding_zeros(e,t){return(e+="").length>=t?e:new Array(t-e.length+1).join("0")+e}clamp(e,t,i){return Math.max(t,Math.min(e,i))}gqlToObject(e,t){let i={};return e.forEach((function(e){i[e[t]]=e})),i}gqlToList(e,t){let i=[];return e.forEach((function(e){i.push(e[t])})),i}}Object.defineProperty(jd,"ERR_SERVER",{value:0,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(jd,"ERR_RESPONSE",{value:1,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(jd,"ERR_REQUEST",{value:2,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(jd,"ERR_ABORT",{value:3,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(jd,"ERR_TIMEOUT",{value:4,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(jd,"ERR_UNKNOWN",{value:99,writable:!1,enumerable:!0,configurable:!1});const hp={Client:jd,ClientConfig:Ud};let up=class extends Bs{constructor(){super(),this.company_name="",this.company_id="",this.user_name="",this.user_email="",this.errorMsg="",this.endpoint="",this.notification=Object(),this.signupPanel=Object(),this.blockPanel=Object(),this.TOSlanguage="en",this.TOSdialog=Object()}static get styles(){return[Jt,Ls,Ns,Ms,Fs,ae`
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
            width: 70%;
          }

          mwc-button {
            background-image: none;
            --mdc-theme-primary: var(--general-button-background-color);
            --mdc-theme-on-primary: var(--general-button-color);
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
            --mdc-theme-on-primary: var(--general-button-color);
          }

          mwc-checkbox {
            --mdc-theme-secondary: var(--general-checkbox-color);
          }
      `]}firstUpdated(){this.signupPanel=this.shadowRoot.querySelector("#signup-panel"),this.blockPanel=this.shadowRoot.querySelector("#block-panel"),this.notification=globalThis.lablupNotification,this.TOSdialog=this.shadowRoot.querySelector("#terms-of-service");const e=this.shadowRoot.querySelectorAll("mwc-textfield");for(const t of e)this._addInputValidator(t)}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0!==globalThis.backendaiclient&&null!==globalThis.backendaiclient&&!1!==globalThis.backendaiclient.ready||document.addEventListener("backend-ai-connected",(()=>!0),!0))}receiveTOSAgreement(){!1===this.TOSdialog.show&&(this.TOSdialog.tosContent="",this.TOSdialog.tosLanguage=globalThis.backendaioptions.get("language"),this.TOSdialog.title=it("webui.menu.TermsOfService"),this.TOSdialog.tosEntry="terms-of-service",this.TOSdialog.open())}receivePPAgreement(){!1===this.TOSdialog.show&&(this.TOSdialog.tosContent="",this.TOSdialog.tosLanguage=globalThis.backendaioptions.get("language"),this.TOSdialog.title=it("webui.menu.PrivacyPolicy"),this.TOSdialog.tosEntry="privacy-policy",this.TOSdialog.open())}open(){!0!==this.signupPanel.open&&(this._clearUserInput(),this.signupPanel.show())}close(){!0===this.signupPanel.open&&this.signupPanel.hide()}init_client(){if(void 0===this.client&&""!==this.endpoint&&this.client!=={}){const e={connectionMode:"SESSION",apiVersionMajor:"v4",apiVersion:"v4.20190615",_apiVersion:"v4.20190615",endpoint:this.endpoint};this.client=new ai.backend.Client(e,"Backend.AI Console.")}}block(e=""){this.errorMsg=e,this.blockPanel.show()}_validate_data(e){return null!=e&&null!=e&&""!=e}_clear_info(){this.company_name="",this.user_name=""}_clearUserInput(){this._toggleInputField(!0);let e=["#id_user_email","#id_token","#id_password1","#id_password2"];this.allowSignupWithoutConfirmation&&(e=e.filter((e=>"#id_token"!==e))),e.forEach((e=>{this.shadowRoot.querySelector(e).value=""})),this.shadowRoot.querySelector("#signup-button-message").innerHTML=ze("signup.Signup")}_toggleInputField(e){let t=["#id_user_name","#id_token","#signup-button"];this.allowSignupWithoutConfirmation&&(t=t.filter((e=>"#id_token"!==e))),t.forEach((t=>{e?this.shadowRoot.querySelector(t).removeAttribute("disabled"):this.shadowRoot.querySelector(t).removeAttribute("disabled","true")}))}_signup(){var e;let t=["#id_user_email","#id_token","#id_password1","#id_password2"];this.allowSignupWithoutConfirmation&&(t=t.filter((e=>"#id_token"!==e)));const i=t.map((e=>(this.shadowRoot.querySelector(e).reportValidity(),this.shadowRoot.querySelector(e).checkValidity())));if(!1===this.shadowRoot.querySelector("#approve-terms-of-service").checked)return this.notification.text=ze("signup.RequestAgreementTermsOfService"),void this.notification.show();if(i.includes(!1))return;const o=null===(e=this.shadowRoot.querySelector("#id_token"))||void 0===e?void 0:e.value,n=this.shadowRoot.querySelector("#id_user_email").value,r=this.shadowRoot.querySelector("#id_user_name").value,a=this.shadowRoot.querySelector("#id_password1").value;this.notification.text=ze("signup.Processing"),this.notification.show();const s={email:n,user_name:r,password:a,token:o};this.allowSignupWithoutConfirmation&&delete s[o],this.init_client();const l=this.client.newSignedRequest("POST","/auth/signup",s);this.client._wrapWithPromise(l).then((e=>{this._toggleInputField(!1),this.shadowRoot.querySelector("#signup-button-message").innerHTML=ze("signup.SignupSucceeded"),this.notification.text=ze("signup.SignupSucceeded"),this.notification.show(),setTimeout((()=>{this.signupPanel.hide(),this._clearUserInput(),this.allowSignupWithoutConfirmation||this.shadowRoot.querySelector("#email-sent-dialog").show()}),1e3)})).catch((e=>{e.message&&(this.notification.text=ol.relieve(e.message),this.notification.show(!0,e)),console.log(e)}))}_politeErrorMessage(e){const t={"Cannot read property 'map' of null":"User has no group. Please contact administrator to fix it.","Cannot read property 'split' of undefined":"Wrong API server address."};return console.log(e),e in t?t[e]:e}_togglePasswordVisibility(e){const t=e.__on,i=e.closest("div").querySelector("mwc-textfield");t?i.setAttribute("type","text"):i.setAttribute("type","password")}_validateEmail(){const e=this.shadowRoot.querySelector("#id_user_email");e.validityTransform=(t,i)=>{if(i.valid){const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.exec(e.value);return t||(e.validationMessage=ze("signup.InvalidEmail")),{valid:t,customError:!t}}return i.valueMissing?(e.validationMessage=ze("signup.EmailInputRequired"),{valid:i.valid,customError:!i.valid}):(e.validationMessage=ze("signup.InvalidEmail"),{valid:i.valid,customError:!i.valid})}}_validatePassword1(){const e=this.shadowRoot.querySelector("#id_password1");this.shadowRoot.querySelector("#id_password2").reportValidity(),e.validityTransform=(t,i)=>i.valid?{valid:i.valid,customError:!i.valid}:i.valueMissing?(e.validationMessage=ze("signup.PasswordInputRequired"),{valid:i.valid,customError:!i.valid}):(e.validationMessage=ze("signup.PasswordInvalid"),{valid:i.valid,customError:!i.valid})}_validatePassword2(){const e=this.shadowRoot.querySelector("#id_password2");e.validityTransform=(t,i)=>{if(i.valid){const t=this.shadowRoot.querySelector("#id_password1").value===e.value;return t||(e.validationMessage=ze("signup.PasswordNotMatched")),{valid:t,customError:!t}}return i.valueMissing?(e.validationMessage=ze("signup.PasswordInputRequired"),{valid:i.valid,customError:!i.valid}):(e.validationMessage=ze("signup.PasswordInvalid"),{valid:i.valid,customError:!i.valid})}}_validatePassword(){this._validatePassword1(),this._validatePassword2()}render(){return z`
      <backend-ai-dialog id="signup-panel" fixed blockscrolling persistent disablefocustrap>
        <span slot="title">${this.allowSignupWithoutConfirmation?z`
          ${it("signup.Signup")}`:z`${it("signup.SignupBETA")}
          `}
        </span>
        <div slot="content" class="vertical flex layout">
          <mwc-textfield type="email" name="user_email" id="id_user_email" autofocus
                       maxlength="64" placeholder="${ze("maxLength.64chars")}"
                       label="${it("signup.E-mail")}" validateOnInitialRender
                       @change="${this._validateEmail}"
                       validationMessage="${it("signup.EmailInputRequired")}"
                       value="${this.user_email}" required></mwc-textfield>
          <mwc-textfield type="text" name="user_name" id="id_user_name"
                       maxlength="64" placeholder="${ze("maxLength.64chars")}"
                       label="${it("signup.UserName")}" value="${this.user_name}"></mwc-textfield>
          ${this.allowSignupWithoutConfirmation?z``:z`
            <mwc-textfield type="text" name="token" id="id_token"
                        maxlength="50"
                        label="${it("signup.InvitationToken")}"
                        validationMessage="${it("signup.TokenInputRequired")}" required></mwc-textfield>
          `}
          <div class="horizontal flex layout">
            <mwc-textfield type="password" name="password1" id="id_password1"
                        label="${it("signup.Password")}" maxLength="64"
                        pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
                        validationMessage="${it("signup.PasswordInputRequired")}"
                        @change="${this._validatePassword}"
                        value="" required></mwc-textfield>
            <mwc-icon-button-toggle off onIcon="visibility" offIcon="visibility_off"
                                    @click="${e=>this._togglePasswordVisibility(e.target)}">
            </mwc-icon-button-toggle>
          </div>
          <div class="horizontal flex layout">
            <mwc-textfield type="password" name="password2" id="id_password2"
                        label="${it("signup.PasswordAgain")}" maxLength="64"
                        pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
                        validationMessage="${it("signup.PasswordInputRequired")}"
                        @change="${this._validatePassword}"
                        value="" required></mwc-textfield>
            <mwc-icon-button-toggle off onIcon="visibility" offIcon="visibility_off"
                                    @click="${e=>this._togglePasswordVisibility(e.target)}">
            </mwc-icon-button-toggle>
          </div>
          <div style="margin-top:10px;" class="horizontal layout center center-justified">
            <mwc-checkbox id="approve-terms-of-service"></mwc-checkbox>
            <p style="font-size:12px;">
              ${ze("signup.PolicyAgreement_1")}
              <a style="color:forestgreen;" @click="${()=>this.receiveTOSAgreement()}">
                ${it("signup.TermsOfService")}
              </a>
              ${ze("signup.PolicyAgreement_2")}
              <a style="color:forestgreen;" @click="${()=>this.receivePPAgreement()}">
                ${it("signup.PrivacyPolicy")}
              </a>
              ${ze("signup.PolicyAgreement_3")}
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
                <span id="signup-button-message">${ze("signup.Signup")}</span>
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="block-panel" fixed type="error" backdrop blockscrolling persistent>
        <span slot="title">${it("dialog.error.Error")}</span>
        <div slot="content" style="text-align:center;">
          ${this.errorMsg}
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="email-sent-dialog" noclosebutton fixed backdrop blockscrolling persistent>
        <span slot="title">${it("signup.ThankYou")}</span>
        <div slot="content">
          <p style="max-width:350px">${it("signup.VerificationMessage")}</p>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              unelevated
              label="${it("button.Okay")}"
              @click="${e=>e.target.closest("backend-ai-dialog").hide()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <lablup-terms-of-service id="terms-of-service"></lablup-terms-of-service>
    `}};o([we({type:String})],up.prototype,"company_name",void 0),o([we({type:String})],up.prototype,"company_id",void 0),o([we({type:String})],up.prototype,"user_name",void 0),o([we({type:String})],up.prototype,"user_email",void 0),o([we({type:String})],up.prototype,"errorMsg",void 0),o([we({type:String})],up.prototype,"endpoint",void 0),o([we({type:Object})],up.prototype,"notification",void 0),o([we({type:Object})],up.prototype,"signupPanel",void 0),o([we({type:Object})],up.prototype,"blockPanel",void 0),o([we({type:Object})],up.prototype,"client",void 0),o([we({type:String})],up.prototype,"TOSlanguage",void 0),o([we({type:Object})],up.prototype,"TOSdialog",void 0),o([we({type:Boolean})],up.prototype,"allowSignupWithoutConfirmation",void 0),up=o([_e("backend-ai-signup")],up);
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */
let mp=class extends Bs{constructor(){super(),this.api_key="",this.secret_key="",this.user_id="",this.password="",this.proxy_url="http://127.0.0.1:5050/",this.api_endpoint="",this.domain_name="",this.default_session_environment="",this.default_import_environment="",this.blockType="",this.blockMessage="",this.connection_mode="SESSION",this.login_attempt_limit=500,this.login_block_time=180,this.config=Object(),this.is_connected=!1,this.signup_support=!1,this.allowAnonymousChangePassword=!1,this.change_signin_support=!1,this.allow_signout=!1,this.allow_project_resource_monitor=!1,this.allow_manual_image_name_for_session=!1,this.allowSignupWithoutConfirmation=!1,this.openPortToPublic=!1,this.maxCPUCoresPerContainer=64,this.maxMemoryPerContainer=16,this.maxCUDADevicesPerContainer=16,this.maxCUDASharesPerContainer=16,this.maxShmPerContainer=2,this.maxFileUploadSize=-1,this.maskUserInfo=!1,globalThis.backendaiwebui={},this.endpoints=[]}static get styles(){return[Jt,Ls,Ns,Ms,Fs,ae`
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
          --mdc-theme-on-primary: var(--general-button-color);
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
          --mdc-theme-on-primary: var(--general-button-color);
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

        #login-title-area {
          height: var(--login-banner-height, 0);
          width: var(--login-banner-width, 0);
          background: var(--login-banner-background, none);
        }

        .login-form {
          position: relative;
        }

        .waiting-animation {
          top: 20%;
          left: 40%;
          position: absolute;
          z-index: 2;
        }

        .sk-folding-cube {
          margin: 20px auto;
          width: 15px;
          height: 15px;
          position: relative;
          margin: auto;
          -webkit-transform: rotateZ(45deg);
          transform: rotateZ(45deg);
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
          0%,
          10% {
            -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
            opacity: 0;
          }
          25%,
          75% {
            -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
            opacity: 1;
          }
          90%,
          100% {
            -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
            opacity: 0;
          }
        }

        @keyframes sk-foldCubeAngle {
          0%,
          10% {
            -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
            opacity: 0;
          }
          25%,
          75% {
            -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
            opacity: 1;
          }
          90%,
          100% {
            -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
            opacity: 0;
          }
        }

        #loading-message {
          margin-left: 10px;
        }

      `]}firstUpdated(){this.loginPanel=this.shadowRoot.querySelector("#login-panel"),this.signoutPanel=this.shadowRoot.querySelector("#signout-panel"),this.blockPanel=this.shadowRoot.querySelector("#block-panel"),this.notification=globalThis.lablupNotification,this.endpoints=globalThis.backendaioptions.get("endpoints",[])}_changeSigninMode(){!0===this.change_signin_support&&("SESSION"==this.connection_mode?(this.connection_mode="API",localStorage.setItem("backendaiwebui.connection_mode","API")):(this.connection_mode="SESSION",localStorage.setItem("backendaiwebui.connection_mode","SESSION")),this.requestUpdate())}refreshWithConfig(e){void 0===e.plugin||void 0===e.plugin.login||""===e.plugin.login?this._enableUserInput():import("../plugins/"+e.plugin.login).then((()=>{console.log("Plugin loaded.")})).catch((e=>{!0!==this.loginPanel.open?(void 0!==e.message?(this.notification.text=ol.relieve(e.title),this.notification.detail=e.message):this.notification.text=ol.relieve("Plugin loading failed."),this.notification.show(!1,e),this.open()):(this.notification.text=ol.relieve("Login failed. Check login information."),this.notification.show(!1,e))})),void 0===e.general||void 0===e.general.debug||""===e.general.debug?globalThis.backendaiwebui.debug=!1:!0===e.general.debug&&(globalThis.backendaiwebui.debug=!0,console.log("Debug flag is set to true")),void 0===e.general||void 0===e.general.signupSupport||""===e.general.signupSupport||0==e.general.signupSupport?this.signup_support=!1:(this.signup_support=!0,this.shadowRoot.querySelector("#signup-dialog").active=!0),void 0===e.general||void 0===e.general.allowAnonymousChangePassword||""===e.general.allowAnonymousChangePassword||0==e.general.allowAnonymousChangePassword?this.allowAnonymousChangePassword=!1:this.allowAnonymousChangePassword=!0,void 0===e.general||void 0===e.general.allowChangeSigninMode||""===e.general.allowChangeSigninMode||0==e.general.allowChangeSigninMode?this.change_signin_support=!1:this.change_signin_support=!0,void 0===e.general||void 0===e.general.allowProjectResourceMonitor||""===e.general.allowProjectResourceMonitor||0==e.general.allowProjectResourceMonitor?this.allow_project_resource_monitor=!1:this.allow_project_resource_monitor=!0,void 0===e.general||void 0===e.general.allowManualImageNameForSession||""===e.general.allowManualImageNameForSession||0==e.general.allowManualImageNameForSession?this.allow_manual_image_name_for_session=!1:this.allow_manual_image_name_for_session=!0,void 0===e.resources||void 0===e.resources.openPortToPublic||""===e.resources.openPortToPublic||0==e.resources.openPortToPublic?this.openPortToPublic=!1:this.openPortToPublic=!0,void 0===e.resources||void 0===e.resources.maxCPUCoresPerContainer||isNaN(parseInt(e.resources.maxCPUCoresPerContainer))?this.maxCPUCoresPerContainer=64:this.maxCPUCoresPerContainer=parseInt(e.resources.maxCPUCoresPerContainer),void 0===e.resources||void 0===e.resources.maxMemoryPerContainer||isNaN(parseInt(e.resources.maxMemoryPerContainer))?this.maxMemoryPerContainer=16:this.maxMemoryPerContainer=parseInt(e.resources.maxMemoryPerContainer),void 0===e.resources||void 0===e.resources.maxCUDADevicesPerContainer||isNaN(parseInt(e.resources.maxCUDADevicesPerContainer))?this.maxCUDADevicesPerContainer=16:this.maxCUDADevicesPerContainer=parseInt(e.resources.maxCUDADevicesPerContainer),void 0===e.resources||void 0===e.resources.maxCUDASharesPerContainer||isNaN(parseInt(e.resources.maxCUDASharesPerContainer))?this.maxCUDASharesPerContainer=16:this.maxCUDASharesPerContainer=parseInt(e.resources.maxCUDASharesPerContainer),void 0===e.resources||void 0===e.resources.maxShmPerContainer||isNaN(parseFloat(e.resources.maxShmPerContainer))?this.maxShmPerContainer=2:this.maxShmPerContainer=parseFloat(e.resources.maxShmPerContainer),void 0===e.resources||void 0===e.resources.maxFileUploadSize||""===e.resources.maxFileUploadSize?this.maxFileUploadSize=-1:this.maxFileUploadSize=parseInt(e.resources.maxFileUploadSize),void 0===e.general||void 0===e.general.allowSignout||""===e.general.allowSignout||0==e.general.allowSignout?this.allow_signout=!1:this.allow_signout=!0,void 0===e.general||void 0===e.general.loginAttemptLimit||""===e.general.loginAttemptLimit||(this.login_attempt_limit=parseInt(e.general.loginAttemptLimit)),void 0===e.general||void 0===e.general.loginBlockTime||""===e.general.loginBlockTime||(this.login_block_time=parseInt(e.general.loginBlockTime)),void 0===e.wsproxy||void 0===e.wsproxy.proxyURL||""===e.wsproxy.proxyURL?this.proxy_url="http://127.0.0.1:5050/":this.proxy_url=e.wsproxy.proxyURL,void 0===e.general||void 0===e.general.apiEndpoint||""===e.general.apiEndpoint?(this.shadowRoot.querySelector("#id_api_endpoint_container").style.display="flex",this.shadowRoot.querySelector("#id_api_endpoint_humanized").style.display="none"):(this.api_endpoint=e.general.apiEndpoint,void 0===e.general||void 0===e.general.apiEndpointText||""===e.general.apiEndpointText?(this.shadowRoot.querySelector("#id_api_endpoint_container").style.display="flex",this.shadowRoot.querySelector("#id_api_endpoint_humanized").style.display="none",this.shadowRoot.querySelector("#endpoint-button").disabled="true"):(this.shadowRoot.querySelector("#id_api_endpoint_container").style.display="none",this.shadowRoot.querySelector("#id_api_endpoint_humanized").style.display="block",this.shadowRoot.querySelector("#id_api_endpoint_humanized").value=e.general.apiEndpointText),this.shadowRoot.querySelector("#id_api_endpoint").disabled=!0,this.shadowRoot.querySelector("#id_api_endpoint_humanized").disabled=!0),void 0===e.general||void 0===e.general.allowSignupWithoutConfirmation||""===e.general.allowSignupWithoutConfirmation||0==e.general.allowSignupWithoutConfirmation?this.allowSignupWithoutConfirmation=!1:this.allowSignupWithoutConfirmation=!0,void 0===e.general||void 0===e.general.defaultSessionEnvironment||""===e.general.defaultSessionEnvironment?this.default_session_environment="":this.default_session_environment=e.general.defaultSessionEnvironment,void 0===e.general||void 0===e.general.defaultImportEnvironment||""===e.general.defaultImportEnvironment?this.default_import_environment="index.docker.io/lablup/python:3.8-ubuntu18.04":this.default_import_environment=e.general.defaultImportEnvironment,void 0===e.environments||void 0===e.environments.allowlist||""===e.environments.allowlist?this.allow_image_list=[]:this.allow_image_list=e.environments.allowlist.split(","),void 0===e.general||void 0===e.general.maskUserInfo||""===e.general.maskUserInfo?this.maskUserInfo=!1:this.maskUserInfo=e.general.maskUserInfo;const t=localStorage.getItem("backendaiwebui.connection_mode");globalThis.isElectron&&null!==t&&""!=t&&'""'!=t?this.connection_mode="SESSION"===t?"SESSION":"API":void 0===e.general||void 0===e.general.connectionMode||""===e.general.connectionMode||"SESSION"===e.general.connectionMode.toUpperCase()?this.connection_mode="SESSION":this.connection_mode="API"}open(){!0!==this.loginPanel.open&&this.loginPanel.show(),!0===this.blockPanel.open&&this.blockPanel.hide()}close(){!0===this.loginPanel.open&&this.loginPanel.hide(),!0===this.blockPanel.open&&this.blockPanel.hide()}block(e="",t=""){this.blockMessage=e,this.blockType=t,setTimeout((()=>{!1===this.blockPanel.open&&!1===this.is_connected&&!1===this.loginPanel.open&&this.blockPanel.show()}),2e3)}free(){this.blockPanel.hide()}_trimChar(e,t){return e.replace(/^\|+|\|+$/g,"")}_loadConfigFromWebServer(){if(!window.location.href.startsWith(this.api_endpoint)){const e=document.querySelector("backend-ai-webui");if(e){const t=["general.apiEndpoint","general.apiEndpointText","general.siteDescription","wsproxy"],i=new URL("./config.toml",this.api_endpoint).href;e._parseConfig(i,!0).then((i=>{t.forEach((e=>{globalThis.backendaiutils.deleteNestedKeyFromObject(i,e)}));const o=globalThis.backendaiutils.mergeNestedObjects(e.config,i);e.config=o,this.refreshWithConfig(o)}))}}}login(e=!0){if(""===this.api_endpoint){const e=localStorage.getItem("backendaiwebui.api_endpoint");null!=e&&(this.api_endpoint=e.replace(/^"+|"+$/g,""))}this.api_endpoint=this.api_endpoint.trim(),"SESSION"===this.connection_mode?(globalThis.isElectron&&this._loadConfigFromWebServer(),this._connectUsingSession(e)):"API"===this.connection_mode?this._connectUsingAPI(e):this.open()}async check_login(e=!0){if(""===this.api_endpoint){const e=localStorage.getItem("backendaiwebui.api_endpoint");null!=e&&(this.api_endpoint=e.replace(/^"+|"+$/g,""))}return this.api_endpoint=this.api_endpoint.trim(),"SESSION"===this.connection_mode?(globalThis.isElectron&&this._loadConfigFromWebServer(),this._checkLoginUsingSession()):(this.connection_mode,Promise.resolve(!1))}async _checkLoginUsingSession(e=!0){return""===this.api_endpoint?Promise.resolve(!1):(this.clientConfig=new hp.ClientConfig(this.user_id,this.password,this.api_endpoint,"SESSION"),this.client=new hp.Client(this.clientConfig,"Backend.AI Console."),this.client.get_manager_version().then((async()=>{const e=await this.client.check_login();return Promise.resolve(e)})))}async _logoutSession(e=!0){return this.client.logout()}signout(){this.signoutPanel.show()}_showSignupDialog(){if(this.api_endpoint=this.api_endpoint.trim(),""===this.api_endpoint)return this.notification.text=ze("error.APIEndpointIsEmpty"),void this.notification.show();const e=this.shadowRoot.querySelector("#signup-dialog");e.endpoint=this.api_endpoint,e.allowSignupWithoutConfirmation=this.allowSignupWithoutConfirmation,e.open()}_showChangePasswordEmailDialog(){this.shadowRoot.querySelector("#change-password-confirm-dialog").show()}async _sendChangePasswordEmail(){const e=this.shadowRoot.querySelector("#password-change-email");if(e.value&&e.validity.valid)try{const t=new hp.ClientConfig("","",this.api_endpoint,"SESSION"),i=new hp.Client(t,"Backend.AI Console.");await i.cloud.send_password_change_email(e.value),this.shadowRoot.querySelector("#change-password-confirm-dialog").hide(),this.notification.text=ze("signup.EmailSent"),this.notification.show()}catch(e){console.error(e),this.notification.text=e.message||ze("signup.SendError"),this.notification.show()}}_cancelLogin(e){this._hideDialog(e),this.open()}_validate_data(e){return null!=e&&null!=e&&""!=e}_submitIfEnter(e){13==e.keyCode&&this._login()}_signoutIfEnter(e){13==e.keyCode&&this._signout()}_signout(){const e=this.shadowRoot.querySelector("#id_signout_user_id").value,t=this.shadowRoot.querySelector("#id_signout_password").value;this.client.signout(e,t).then((e=>{this.notification.text=ze("login.SignoutFinished"),this.notification.show();const t=new CustomEvent("backend-ai-logout",{detail:""});document.dispatchEvent(t)})).catch((e=>{this.free(),!0!==this.signoutPanel.open?(console.log(e),void 0!==e.message?(this.notification.text=ol.relieve(e.title),this.notification.detail=e.message):this.notification.text=ol.relieve("Login information mismatch. Check your information and try again."),this.notification.show()):(this.notification.text=ol.relieve("Signout failed. Check ID/password information."),this.notification.show())}))}_login(){const e=globalThis.backendaioptions.get("login_attempt",0,"general"),t=globalThis.backendaioptions.get("last_login",Math.floor(Date.now()/1e3),"general"),i=Math.floor(Date.now()/1e3);if(e>=this.login_attempt_limit&&i-t>this.login_block_time)globalThis.backendaioptions.set("last_login",i,"general"),globalThis.backendaioptions.set("login_attempt",0,"general");else{if(e>=this.login_attempt_limit)return globalThis.backendaioptions.set("last_login",i,"general"),globalThis.backendaioptions.set("login_attempt",e+1,"general"),this.notification.text=ze("login.TooManyAttempt"),void this.notification.show();globalThis.backendaioptions.set("login_attempt",e+1,"general")}if(this.api_endpoint=this.shadowRoot.querySelector("#id_api_endpoint").value,this.api_endpoint=this.api_endpoint.replace(/\/+$/,""),""===this.api_endpoint)return this.notification.text=ze("login.APIEndpointEmpty"),void this.notification.show();"SESSION"===this.connection_mode?(this._disableUserInput(),this.user_id=this.shadowRoot.querySelector("#id_user_id").value,this.password=this.shadowRoot.querySelector("#id_password").value,""===this.user_id||"undefined"===this.user_id||""===this.password||"undefined"===this.password?(this.notification.text=ze("login.PleaseInputLoginInfo"),this.notification.show(),this._enableUserInput()):this._connectUsingSession(!0)):(this._disableUserInput(),this.api_key=this.shadowRoot.querySelector("#id_api_key").value,this.secret_key=this.shadowRoot.querySelector("#id_secret_key").value,this._connectUsingAPI(!0))}async _connectUsingSession(e=!0){return""===this.api_endpoint?(this.free(),this.open(),Promise.resolve(!1)):(this.clientConfig=new hp.ClientConfig(this.user_id,this.password,this.api_endpoint,"SESSION"),this.client=new hp.Client(this.clientConfig,"Backend.AI Console."),this.client.get_manager_version().then((async()=>{if(!1!==await this.client.check_login())return this.is_connected=!0,this._connectGQL();this.block(ze("login.PleaseWait"),ze("login.ConnectingToCluster")),this.client.login().then((e=>{if(!1===e)this.open(),""!=this.user_id&&""!=this.password&&(this.notification.text=ol.relieve("Login information mismatch. Please check your login information."),this.notification.show());else{if(!e.fail_reason)return this.is_connected=!0,this._connectGQL();this.open(),""!=this.user_id&&""!=this.password&&(this.notification.text=ol.relieve(e.fail_reason),this.notification.show())}})).catch((t=>{this.free(),console.log(t),e&&(!0!==this.loginPanel.open?void 0!==t.message?(this.notification.text=ol.relieve(t.title),this.notification.detail=t.message):this.notification.text=ol.relieve("Login information mismatch. If the information is correct, logout and login again."):(void 0!==t.message?(this.notification.text=ol.relieve(t.title),this.notification.detail=t.message):this.notification.text=ol.relieve("Login failed. Check login information."),console.log(t)),this.notification.show())})),this.open(),this._enableUserInput()})).catch((t=>(this.free(),this.open(),this._enableUserInput(),e&&(this.notification.text=ol.relieve("Endpoint is unreachable. Please check the connection or endpoint"),this.notification.show()),Promise.resolve(!1)))))}_connectUsingAPI(e=!0){this.clientConfig=new hp.ClientConfig(this.api_key,this.secret_key,this.api_endpoint),this.client=new hp.Client(this.clientConfig,"Backend.AI Console."),this.client.ready=!1,this.client.get_manager_version().then((t=>this._connectGQL(e)))}_connectGQL(e=!0){!0!==this.loginPanel.open&&this.block(),new Promise((()=>{const e=Math.floor(Date.now()/1e3);globalThis.backendaioptions.set("last_login",e,"general"),globalThis.backendaioptions.set("login_attempt",0,"general"),this._connectViaGQL()})).catch((t=>{this.free(),e&&(!0!==this.loginPanel.open?(void 0!==t.message?408===t.status?(this.notification.text=ze("error.LoginSucceededManagerNotResponding"),this.notification.detail=t.message):(this.notification.text=ol.relieve(t.title),this.notification.detail=t.message):this.notification.text=ol.relieve("Login information mismatch. If the information is correct, logout and login again."),this.notification.show(!1,t),this.open()):(this.notification.text=ol.relieve("Login failed. Check login information."),this.notification.show())),this.open(),this._enableUserInput()}))}_connectViaGQL(){const e=`query { keypair { ${["user_id","resource_policy","user"].join(" ")} } }`;return this.client.query(e,{}).then((e=>{this.is_connected=!0,globalThis.backendaiclient=this.client;const t=e.keypair.resource_policy;globalThis.backendaiclient.resource_policy=t,this.user=e.keypair.user;const i=`query { user{ ${["username","email","full_name","is_active","role","domain_name","groups {name, id}","need_password_change"].join(" ")} } }`,o={uuid:this.user};return globalThis.backendaiclient.query(i,o)})).then((e=>{const t=e.user.email;this.email!==t&&(this.email=t),this.user_groups=e.user.groups;const i=e.user.role;return this.domain_name=e.user.domain_name,globalThis.backendaiclient.email=this.email,globalThis.backendaiclient.full_name=e.user.full_name,globalThis.backendaiclient.is_admin=!1,globalThis.backendaiclient.is_superadmin=!1,globalThis.backendaiclient.need_password_change=e.user.need_password_change,["superadmin","admin"].includes(i)&&(globalThis.backendaiclient.is_admin=!0),["superadmin"].includes(i)&&(globalThis.backendaiclient.is_superadmin=!0),globalThis.backendaiclient.group.list(!0,!1,["id","name","description","is_active"])})).then((e=>{const t=e.groups,i=this.user_groups.map((({id:e})=>e));if(null!==t){globalThis.backendaiclient.groups=t.filter((e=>{if(i.includes(e.id))return e})).map((e=>e.name));const e=Object();t.forEach((function(t){e[t.name]=t.id})),globalThis.backendaiclient.groupIds=e}else globalThis.backendaiclient.groups=["default"];const o=globalThis.backendaiutils._readRecentProjectGroup();globalThis.backendaiclient.current_group=o||globalThis.backendaiclient.groups[0],globalThis.backendaiclient.current_group_id=()=>globalThis.backendaiclient.groupIds[globalThis.backendaiclient.current_group],globalThis.backendaiclient._config._proxyURL=this.proxy_url,globalThis.backendaiclient._config._proxyToken="",globalThis.backendaiclient._config.domainName=this.domain_name,globalThis.backendaiclient._config.default_session_environment=this.default_session_environment,globalThis.backendaiclient._config.default_import_environment=this.default_import_environment,globalThis.backendaiclient._config.allow_project_resource_monitor=this.allow_project_resource_monitor,globalThis.backendaiclient._config.allow_manual_image_name_for_session=this.allow_manual_image_name_for_session,globalThis.backendaiclient._config.openPortToPublic=this.openPortToPublic,globalThis.backendaiclient._config.maxCPUCoresPerContainer=this.maxCPUCoresPerContainer,globalThis.backendaiclient._config.maxMemoryPerContainer=this.maxMemoryPerContainer,globalThis.backendaiclient._config.maxCUDADevicesPerContainer=this.maxCUDADevicesPerContainer,globalThis.backendaiclient._config.maxCUDASharesPerContainer=this.maxCUDASharesPerContainer,globalThis.backendaiclient._config.maxShmPerContainer=this.maxShmPerContainer,globalThis.backendaiclient._config.maxFileUploadSize=this.maxFileUploadSize,globalThis.backendaiclient._config.allow_image_list=this.allow_image_list,globalThis.backendaiclient._config.maskUserInfo=this.maskUserInfo,globalThis.backendaiclient.ready=!0,-1===this.endpoints.indexOf(globalThis.backendaiclient._config.endpoint)&&(this.endpoints.push(globalThis.backendaiclient._config.endpoint),this.endpoints.length>5&&(this.endpoints=this.endpoints.slice(1,6)),globalThis.backendaioptions.set("endpoints",this.endpoints));const n=new CustomEvent("backend-ai-connected",{detail:this.client});document.dispatchEvent(n),this.close(),this._saveLoginInfo(),localStorage.setItem("backendaiwebui.api_endpoint",this.api_endpoint)})).catch((e=>{!0!==this.loginPanel.open?(void 0!==e.message?void 0!==e.title?(this.notification.text=ol.relieve(e.title),this.notification.detail=e.message):(this.notification.text=ol.relieve(e),this.notification.detail=e):this.notification.text=ol.relieve("Login information mismatch. If the information is correct, logout and login again."),this.notification.show(!1,e),this.open()):(this.notification.text=ol.relieve("Login failed. Check login information."),this.notification.show(!0)),401===e.statusCode&&(console.log("automatic logout ..."),this.client.logout()),this._enableUserInput()}))}async _saveLoginInfo(){localStorage.removeItem("backendaiwebui.login.api_key"),localStorage.removeItem("backendaiwebui.login.secret_key"),localStorage.removeItem("backendaiwebui.login.user_id"),localStorage.removeItem("backendaiwebui.login.password")}_toggleEndpoint(){const e=this.shadowRoot.querySelector("#endpoint-list"),t=this.shadowRoot.querySelector("#endpoint-button");e.anchor=t,e.open=!e.open}_updateEndpoint(){const e=this.shadowRoot.querySelector("#endpoint-list");this.api_endpoint=e.selected.value}_deleteEndpoint(e){const t=this.endpoints.indexOf(e);t>-1&&this.endpoints.splice(t,1),globalThis.backendaioptions.set("endpoints",this.endpoints),this.requestUpdate()}_disableUserInput(){this.connection_mode,this.shadowRoot.querySelector("#id_user_id").disabled=!0,this.shadowRoot.querySelector("#id_password").disabled=!0,this.shadowRoot.querySelector(".waiting-animation").style.display="flex"}_enableUserInput(){this.shadowRoot.querySelector("#id_user_id").disabled=!1,this.shadowRoot.querySelector("#id_password").disabled=!1,this.shadowRoot.querySelector("#id_user_id").disabled=!1,this.shadowRoot.querySelector("#id_password").disabled=!1,this.shadowRoot.querySelector(".waiting-animation").style.display="none"}render(){return z`
      <link rel="stylesheet" href="resources/custom.css">
      <backend-ai-dialog id="login-panel" noclosebutton fixed blockscrolling persistent disablefocustrap escapeKeyAction>
        <div slot="title">
          <div id="login-title-area"></div>
          <div class="horizontal center layout">
            <img src="manifest/backend.ai-text.svg" style="height:35px;padding:15px 0 15px 5px;" />
            <div class="flex"></div>
          </div>
        </div>
        <div slot="content" class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout" style="margin: 0 25px;font-weight:700;min-height:40px;">
            <div>${"SESSION"==this.connection_mode?it("login.LoginWithE-mail"):it("login.LoginWithIAM")}</div>
            <div class="flex"></div>
            ${this.change_signin_support?z`
                <div class="vertical center-justified layout">
                  <div style="font-size:12px;margin:5px 10px;text-align:center;font-weight:400;">${it("login.LoginAnotherway")}</div>
                  <mwc-button
                      class="change-login-mode-button"
                      outlined
                      label="${"SESSION"==this.connection_mode?it("login.ClickToUseIAM"):it("login.ClickToUseID")}"
                      @click="${()=>this._changeSigninMode()}">
                  </mwc-button>
                </div>
            `:z``}
          </h3>
          <div class="login-form">
            <div class="waiting-animation horizontal layout wrap">
              <div class="sk-folding-cube">
                <div class="sk-cube1 sk-cube"></div>
                <div class="sk-cube2 sk-cube"></div>
                <div class="sk-cube4 sk-cube"></div>
                <div class="sk-cube3 sk-cube"></div>
              </div>
              <div id="loading-message">Waiting...</div>
            </div>
            <form id="session-login-form" style="${"SESSION"==this.connection_mode?"display:block;":"display:none;"}">
              <fieldset>
                <div class="horizontal layout start-justified center login-input">
                  <mwc-icon>email</mwc-icon>
                  <input type="email" id="id_user_id" maxlength="64" autocomplete="username"
                              label="${it("login.E-mail")}" placeholder="${it("login.E-mail")}" icon="email" value="${this.user_id}" @keyup="${this._submitIfEnter}"></input>
                </div>
                <div class="horizontal layout start-justified center login-input">
                  <mwc-icon>vpn_key</mwc-icon>
                  <input type="password" id="id_password" autocomplete="current-password"
                              label="${it("login.Password")}" placeholder="${it("login.Password")}" icon="vpn_key" value="${this.password}" @keyup="${this._submitIfEnter}"></input>
                </div>
              </fieldset>
            </form>
            <form id="api-login-form" style="${"SESSION"==this.connection_mode?"display:none;":"display:block;"}">
              <fieldset>
                <mwc-textfield type="text" id="id_api_key" maxLength="20"
                            label="${it("login.APIKey")}" icon="lock" value="${this.api_key}" @keyup="${this._submitIfEnter}"></mwc-textfield>
                <mwc-textfield type="password" id="id_secret_key" maxLength="40"
                            label="${it("login.SecretKey")}" icon="vpn_key" value="${this.secret_key}" @keyup="${this._submitIfEnter}" ></mwc-textfield>
              </fieldset>
            </form>
            <form>
              <fieldset>
                <div class="horizontal layout" id="id_api_endpoint_container" style="display:none;">
                  <mwc-icon-button id="endpoint-button" icon="cloud_queue" style="padding-left: 3px; background-color: rgb(250, 250, 250);" @click="${()=>this._toggleEndpoint()}"></mwc-icon-button>
                  <mwc-menu id="endpoint-list" @selected="${()=>this._updateEndpoint()}">
                    <mwc-list-item disabled>${it("login.EndpointHistory")}</mwc-list-item>
                    ${0===this.endpoints.length?z`
                    <mwc-list-item value="">${it("login.NoEndpointSaved")}</mwc-list-item>
                    `:z``}

                    ${this.endpoints.map((e=>z`<mwc-list-item value="${e}">
                      <div class="horizontal justified center flex layout" style="width:365px;">
                        <span>${e}</span><span class="flex"></span>
                        <mwc-icon-button icon="delete" @click="${()=>this._deleteEndpoint(e)}" class="endpoint-control-button"></mwc-icon-button>
                      </div>
                    </mwc-list-item>`))}
                  </mwc-menu>
                  <mwc-textfield class="endpoint-text" type="text" id="id_api_endpoint" maxLength="2048"
                              style="--mdc-text-field-idle-line-color:rgba(255,255,255,0);--mdc-text-field-hover-line-color:rgba(255,255,255,0);"
                              label="${it("login.Endpoint")}" value="${this.api_endpoint}" @keyup="${this._submitIfEnter}"></mwc-textfield>
                </div>
                <mwc-textfield class="endpoint-text" type="text" id="id_api_endpoint_humanized" maxLength="2048"
                            style="display:none;--mdc-text-field-idle-line-color:rgba(255,255,255,0);--mdc-text-field-hover-line-color:rgba(255,255,255,0);"
                            label="${it("login.Endpoint")}" icon="cloud" value=""></mwc-textfield>
                <mwc-button
                      unelevated
                      id="login-button"
                      icon="check"
                      fullwidth
                      label="${it("login.Login")}"
                      @click="${()=>this._login()}"></mwc-button>
                <div class="layout horizontal" style="margin-top:2em;">
                  ${this.signup_support?z`
                    <div class="vertical center-justified layout" style="width:100%;">
                      <div style="font-size:12px; margin:0 10px; text-align:center;">${it("login.NotAUser")}</div>
                      <mwc-button
                          outlined
                          label="${it("login.SignUp")}"
                          @click="${()=>this._showSignupDialog()}"></mwc-button>
                    </div>
                  `:z``}
                  ${this.signup_support&&this.allowAnonymousChangePassword?z`
                    <span class="flex" style="min-width:1em;"></span>
                  `:z``}
                  ${this.allowAnonymousChangePassword?z`
                    <div class="vertical center-justified layout" style="width:100%;">
                      <div style="font-size:12px; margin:0 10px; text-align:center;">${it("login.ForgotPassword")}</div>
                      <mwc-button
                          outlined
                          label="${it("login.ChangePassword")}"
                          @click="${()=>this._showChangePasswordEmailDialog()}"></mwc-button>
                    </div>
                  `:z``}
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="signout-panel" fixed backdrop blockscrolling persistent disablefocustrap>
        <span slot="title">${it("login.LeaveService")}</span>
        <div slot="content">
          <section>
            <div class="warning">${it("login.DescConfirmLeave")}</div>
          </section>
          <mwc-textfield type="email" name="signout_user_id" id="id_signout_user_id" maxLength="64"
              label="E-mail" value="" @keyup="${this._signoutIfEnter}"></mwc-textfield>
          <mwc-textfield type="password" name="signout_password" id="id_signout_password" maxLength="64"
              label="Password" value="" @keyup="${this._signoutIfEnter}"></mwc-textfield>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
              outlined
              fullwidth
              id="signout-button"
              icon="check"
              label="${it("login.LeaveService")}"
              @click="${()=>this._signout()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="change-password-confirm-dialog" fixed backdrop blockscrolling persistent disablefocustrap>
        <span slot="title">${it("login.SendChangePasswordEmail")}</span>
        <div slot="content">
          <section>
            <div style="padding:1em">${it("login.DescChangePasswordEmail")}</div>
          </section>
          <mwc-textfield type="email" id="password-change-email" maxLength="64"
              label="E-mail" value="" autofocus auto-validate
              validationMessage="${it("signup.InvalidEmail")}"
              pattern="^[A-Z0-9a-z#-_]+@.+\\..+$"></mwc-textfield>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
              outlined
              fullwidth
              icon="check"
              label="${it("login.EmailSendButton")}"
              @click="${()=>this._sendChangePasswordEmail()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="block-panel" fixed blockscrolling persistent escapeKeyAction>
        ${""!=this.blockMessage?z`
          ${""!==this.blockType?z`
            <span slot="title" id="work-title">${this.blockType}</span>
          `:z``}
          <div slot="content" style="text-align:center;padding-top:15px;">
          ${this.blockMessage}
          </div>
          <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
              outlined
              fullwidth
              label="${it("login.CancelLogin")}"
              @click="${e=>this._cancelLogin(e)}"></mwc-button>
          </div>
        `:z``}
      </backend-ai-dialog>
      <backend-ai-signup id="signup-dialog"></backend-ai-signup>
    `}};o([we({type:String})],mp.prototype,"api_key",void 0),o([we({type:String})],mp.prototype,"secret_key",void 0),o([we({type:String})],mp.prototype,"user_id",void 0),o([we({type:String})],mp.prototype,"password",void 0),o([we({type:String})],mp.prototype,"proxy_url",void 0),o([we({type:String})],mp.prototype,"api_endpoint",void 0),o([we({type:String})],mp.prototype,"domain_name",void 0),o([we({type:String})],mp.prototype,"default_session_environment",void 0),o([we({type:String})],mp.prototype,"default_import_environment",void 0),o([we({type:String})],mp.prototype,"blockType",void 0),o([we({type:String})],mp.prototype,"blockMessage",void 0),o([we({type:String})],mp.prototype,"connection_mode",void 0),o([we({type:Number})],mp.prototype,"login_attempt_limit",void 0),o([we({type:Number})],mp.prototype,"login_block_time",void 0),o([we({type:String})],mp.prototype,"user",void 0),o([we({type:String})],mp.prototype,"email",void 0),o([we({type:Object})],mp.prototype,"config",void 0),o([we({type:Object})],mp.prototype,"loginPanel",void 0),o([we({type:Object})],mp.prototype,"signoutPanel",void 0),o([we({type:Object})],mp.prototype,"blockPanel",void 0),o([we({type:Boolean})],mp.prototype,"is_connected",void 0),o([we({type:Object})],mp.prototype,"clientConfig",void 0),o([we({type:Object})],mp.prototype,"client",void 0),o([we({type:Object})],mp.prototype,"notification",void 0),o([we({type:Object})],mp.prototype,"user_groups",void 0),o([we({type:Boolean})],mp.prototype,"signup_support",void 0),o([we({type:Boolean})],mp.prototype,"allowAnonymousChangePassword",void 0),o([we({type:Boolean})],mp.prototype,"change_signin_support",void 0),o([we({type:Boolean})],mp.prototype,"allow_signout",void 0),o([we({type:Boolean})],mp.prototype,"allow_project_resource_monitor",void 0),o([we({type:Boolean})],mp.prototype,"allow_manual_image_name_for_session",void 0),o([we({type:Boolean})],mp.prototype,"allowSignupWithoutConfirmation",void 0),o([we({type:Boolean})],mp.prototype,"openPortToPublic",void 0),o([we({type:Boolean})],mp.prototype,"maxCPUCoresPerContainer",void 0),o([we({type:Boolean})],mp.prototype,"maxMemoryPerContainer",void 0),o([we({type:Number})],mp.prototype,"maxCUDADevicesPerContainer",void 0),o([we({type:Number})],mp.prototype,"maxCUDASharesPerContainer",void 0),o([we({type:Boolean})],mp.prototype,"maxShmPerContainer",void 0),o([we({type:Boolean})],mp.prototype,"maxFileUploadSize",void 0),o([we({type:Boolean})],mp.prototype,"maskUserInfo",void 0),o([we({type:Array})],mp.prototype,"allow_image_list",void 0),o([we({type:Array})],mp.prototype,"endpoints",void 0),o([we({type:Object})],mp.prototype,"logoutTimerBeforeOneMin",void 0),o([we({type:Object})],mp.prototype,"logoutTimer",void 0),mp=o([_e("backend-ai-login")],mp);let gp=class extends ye{static get styles(){return[ae`
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
      `]}render(){return z`
      <slot></slot>
    `}};gp=o([_e("backend-ai-offline-indicator")],gp);let fp=class extends Bs{constructor(){super(),this.supports=Object(),this.supportImages=Object(),this.imageRequirements=Object(),this.imageArchitectures=Object(),this.aliases=Object(),this.tags=Object(),this.imageInfo=Object(),this.imageNames=Object(),this.resourceLimits=Object(),this.userResourceLimit=Object(),this.icons=Object(),this.kernel="",this.gpu_modes=[],this.gpu_step=.1,this.cpu_metric={min:"1",max:"1"},this.mem_metric={min:"1",max:"1"},this.shmem_metric={min:.0625,max:1,preferred:.0625},this.cuda_device_metric={min:0,max:0},this.rocm_device_metric={min:"0",max:"0"},this.tpu_device_metric={min:"1",max:"1"},this.lastQueryTime=0,this.lastResourcePolicyQueryTime=0,this.lastVFolderQueryTime=0,this.aggregate_updating=!1,this._default_language_updated=!1,this._default_version_updated=!1,this._GPUmodeUpdated=!1,this.allow_project_resource_monitor=!1,this.max_cpu_core_per_session=64,this.active=!1,this.init_resource()}static get is(){return"backend-ai-resource-broker"}static get styles(){return[]}init_resource(){this.languages=[],this.total_slot={},this.total_resource_group_slot={},this.total_project_slot={},this.used_slot={},this.used_resource_group_slot={},this.used_project_slot={},this.available_slot={},this.used_slot_percent={},this.used_resource_group_slot_percent={},this.used_project_slot_percent={},this.resource_templates=[],this.resource_templates_filtered=[],this.vfolders=[],this.default_language="",this.concurrency_used=0,this.concurrency_max=0,this.concurrency_limit=0,this.scaling_groups=[{name:""}],this.scaling_group="",this.current_user_group="",this.sessions_list=[],this.metric_updating=!1,this.metadata_updating=!1,this.image_updating=!0,this.disableLaunch=[]}firstUpdated(){fetch("resources/image_metadata.json").then((e=>e.json())).then((e=>{this.imageInfo=e.imageInfo;for(const e in this.imageInfo)({}).hasOwnProperty.call(this.imageInfo,e)&&(this.tags[e]=[],"name"in this.imageInfo[e]&&(this.aliases[e]=this.imageInfo[e].name,this.imageNames[e]=this.imageInfo[e].name),"icon"in this.imageInfo[e]?this.icons[e]=this.imageInfo[e].icon:this.icons[e]="default.png","label"in this.imageInfo[e]&&this.imageInfo[e].label.forEach((t=>{"category"in t||this.tags[e].push(t)})));void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._refreshImageList()}),{once:!0}):this._refreshImageList()})),document.addEventListener("backend-ai-resource-refreshed",(()=>{this.active&&!1===this.metadata_updating&&(this.metadata_updating=!0,this.aggregateResource("resource-refreshed"),this.metadata_updating=!1)})),document.addEventListener("backend-ai-group-changed",(e=>{this._updatePageVariables(!0)})),document.addEventListener("backend-ai-calculate-current-resource",(e=>{this.aggregateResource("resource-refreshed"),globalThis.backendaioptions.set("current-resource",this.available_slot)}))}_initAliases(){for(const e in this.aliases)({}).hasOwnProperty.call(this.aliases,e)&&(this.aliases[this.aliases[e]]=e)}async updateScalingGroup(e=!1,t){""!=this.scaling_group&&""!==t&&t!==this.scaling_group&&(this.scaling_group=t,this.active&&(this.lastQueryTime=0,!0===e&&await this._refreshResourcePolicy()))}async _viewStateChanged(e){await this.updateComplete,this.active&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.allow_project_resource_monitor=globalThis.backendaiclient._config.allow_project_resource_monitor,this._updatePageVariables(!0)}),{once:!0}):(this.allow_project_resource_monitor=globalThis.backendaiclient._config.allow_project_resource_monitor,await this._updatePageVariables(!0)))}async _updatePageVariables(e){if(!1===this.metadata_updating){if(this.metadata_updating=!0,e&&(this.lastQueryTime=0),""===this.scaling_group||e){""===this.current_user_group&&(this.current_user_group=globalThis.backendaiclient.current_group);const e=await globalThis.backendaiclient.scalingGroup.list(this.current_user_group);this.scaling_groups=e.scaling_groups.length>0?e.scaling_groups:[{name:""}],this.scaling_group=this.scaling_groups[0].name}const t=["name"];await globalThis.backendaiclient.computeSession.list(t,"RUNNING",null,1e3).then((e=>{!e.compute_session_list&&e.legacy_compute_session_list&&(e.compute_session_list=e.legacy_compute_session_list),this.sessions_list=e.compute_session_list.items.map((e=>e.name))})),this._initAliases(),await this._refreshResourcePolicy(),this.aggregateResource("update-page-variable"),this.metadata_updating=!1;const i=new CustomEvent("backend-ai-resource-broker-updated",{detail:""});return document.dispatchEvent(i),Promise.resolve(!0)}return Promise.resolve(!1)}_refreshConcurrency(){return globalThis.backendaiclient.keypair.info(globalThis.backendaiclient._config.accessKey,["concurrency_used"]).then((e=>{this.concurrency_used=e.keypair.concurrency_used}))}async _refreshResourcePolicy(){return Date.now()-this.lastResourcePolicyQueryTime<2e3?Promise.resolve(!1):(this.lastResourcePolicyQueryTime=Date.now(),globalThis.backendaiclient.keypair.info(globalThis.backendaiclient._config.accessKey,["resource_policy","concurrency_used"]).then((e=>{const t=e.keypair.resource_policy;return this.concurrency_used=e.keypair.concurrency_used,globalThis.backendaiclient.resourcePolicy.get(t,["default_for_unspecified","total_resource_slots","max_concurrent_sessions","max_containers_per_session"])})).then((e=>{const t=e.keypair_resource_policy;return this.userResourceLimit=JSON.parse(e.keypair_resource_policy.total_resource_slots),this.concurrency_max=t.max_concurrent_sessions,this.max_containers_per_session=t.max_containers_per_session,this._updateGPUMode()})).catch((e=>{throw this.metadata_updating=!1,e})))}_updateGPUMode(){return this._GPUmodeUpdated?Promise.resolve(!0):(this._GPUmodeUpdated=!0,globalThis.backendaiclient.get_resource_slots().then((e=>{const t=e;["cuda.device","cuda.shares","rocm.device","tpu.device"].forEach((e=>{e in t&&!this.gpu_modes.includes(e)&&(this.gpu_mode=e,this.gpu_modes.push(e),this.gpu_step="cuda.shares"===e?.1:1)})),void 0===this.gpu_mode&&(this.gpu_mode="none")})))}generateSessionId(){let e="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<8;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e+"-session"}async updateVirtualFolderList(e=null){if(Date.now()-this.lastVFolderQueryTime<2e3)return Promise.resolve(!1);const t=(await globalThis.backendaiclient.vfolder.list_hosts(globalThis.backendaiclient.current_group_id())).allowed;return globalThis.backendaiclient.vfolder.list(globalThis.backendaiclient.current_group_id(),e).then((e=>{this.lastVFolderQueryTime=Date.now();const i=[],o=[];e.forEach((e=>{t.includes(e.host)&&(e.name.startsWith(".")?(e.disabled=!0,e.name=e.name+" (Automount folder)",o.push(e)):i.push(e))})),this.vfolders=i.concat(o)}))}async _aggregateCurrentResource(e=""){if(this.aggregate_updating)return Promise.resolve(!1);if(Date.now()-this.lastQueryTime<1e3)return Promise.resolve(!1);this.aggregate_updating=!0;const t={},i={},o={};return globalThis.backendaiclient.keypair.info(globalThis.backendaiclient._config.accessKey,["concurrency_used"]).then((async e=>{this.concurrency_used=e.keypair.concurrency_used,""===this.current_user_group&&(this.current_user_group=globalThis.backendaiclient.current_group);const t={group:globalThis.backendaiclient.current_group};if(this.current_user_group!==globalThis.backendaiclient.current_group||0==this.scaling_groups.length||1===this.scaling_groups.length&&""===this.scaling_groups[0].name){this.current_user_group=globalThis.backendaiclient.current_group;const e=await globalThis.backendaiclient.scalingGroup.list(this.current_user_group);this.scaling_groups=e.scaling_groups.length>0?e.scaling_groups:[{name:""}]}if(this.scaling_groups.length>0){const e=[];this.scaling_groups.map((t=>{e.push(t.name)})),""!==this.scaling_group&&e.includes(this.scaling_group)||(this.scaling_group=this.scaling_groups[0].name),t.scaling_group=this.scaling_group}return globalThis.backendaiclient.resourcePreset.check(t)})).then((e=>{if(e.presets){const t=e.presets,i=[];t.forEach((e=>{!0===e.allocatable&&("cuda.shares"in e.resource_slots?e.cuda_shares=e.resource_slots["cuda.shares"]:"cuda.device"in e.resource_slots&&(e.cuda_device=e.resource_slots["cuda.device"]),"rocm.device"in e.resource_slots&&(e.rocm_device=e.resource_slots["rocm.device"]),"tpu.device"in e.resource_slots&&(e.tpu_device=e.resource_slots["tpu.device"]),e.cpu=e.resource_slots.cpu,e.mem=globalThis.backendaiclient.utils.changeBinaryUnit(e.resource_slots.mem,"g"),e.shared_memory?e.shmem=globalThis.backendaiclient.utils.changeBinaryUnit(e.shared_memory,"g"):e.shmem=null,i.push(e))})),i.sort(((e,t)=>e.name>t.name?1:-1)),this.resource_templates=i,0===this.resource_templates_filtered.length&&(this.resource_templates_filtered=this.resource_templates)}const n=e.keypair_remaining,r=e.keypair_using,a=e.group_limits,s=e.group_using,l={"cuda.device":"cuda_device","cuda.shares":"cuda_shares","rocm.device":"rocm_device","tpu.device":"tpu_device"};if(""===this.scaling_group&&this.scaling_groups.length>0)e.scaling_groups[""]={using:{cpu:0,mem:0},remaining:{cpu:0,mem:0}};else if(0===this.scaling_groups.length)return this.aggregate_updating=!1,Promise.resolve(!1);const c=e.scaling_groups[this.scaling_group].using,d=e.scaling_groups[this.scaling_group].remaining,p=e.keypair_limits;"cpu"in p&&(i.cpu=Number(d.cpu)+Number(c.cpu),o.cpu=Number(a.cpu),"Infinity"===p.cpu?t.cpu=i.cpu:t.cpu=p.cpu),"mem"in p&&(i.mem=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(d.mem,"g"))+parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(c.mem,"g")),o.mem=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(a.mem,"g")),"Infinity"===p.mem?t.mem=i.mem:t.mem=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(p.mem,"g"))),t.mem=t.mem.toFixed(2),i.mem=i.mem.toFixed(2);for(const[e,n]of Object.entries(l))e in p&&(i[n]=Number(d[e])+Number(c[e]),o[n]=Number(a[e]),"Infinity"===p[e]?t[n]=i[n]:t[n]=p[e]);const h=Object(),u=Object(),m=Object(),g=Object(),f=Object();"cpu"in n&&(u.cpu="cpu"in r?r.cpu:0,"Infinity"===n.cpu?h.cpu=t.cpu-u.cpu:h.cpu=n.cpu),"cpu"in d&&(g.cpu="cpu"in c?c.cpu:0,m.cpu=d.cpu),f.cpu="cpu"in s?s.cpu:0,"mem"in n&&(u.mem="mem"in r?parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(r.mem,"g")):0,"Infinity"===n.mem?h.mem=t.mem-u.mem:h.mem=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(n.mem,"g"))),u.mem=u.mem.toFixed(2),"mem"in d&&(g.mem="mem"in c?parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(c.mem,"g")):0,m.mem=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(d.mem,"g"))),g.mem=g.mem.toFixed(2),f.mem="mem"in s?parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(s.mem,"g")):0,f.mem=f.mem.toFixed(2);for(const[e,t]of Object.entries(l))e in n&&(h[t]=n[e],u[t]=e in r?r[e]:0),e in d&&(m[t]=d[e],g[t]=e in c?c[e]:0),f[t]=e in s?s[e]:0;"cuda_shares"in u&&(t.cuda_shares=parseFloat(t.cuda_shares).toFixed(2)),"cuda_shares"in g&&(i.cuda_shares=parseFloat(i.cuda_shares).toFixed(2)),"cuda_shares"in f&&(o.cuda_shares=parseFloat(o.cuda_shares).toFixed(2)),this.total_slot=t,this.total_resource_group_slot=i,this.total_project_slot=o,this.used_slot=u,this.used_resource_group_slot=g,this.used_project_slot=f;const b={},y={},v={};return["cpu","mem","cuda_device","cuda_shares","rocm_device","tpu_device"].forEach((e=>{e in u&&(Number(t[e])<Number(u[e])&&(t[e]=u[e]),0!=t[e]?b[e]=u[e]/t[e]*100:b[e]=0,0!=i[e]?y[e]=g[e]/i[e]*100:y[e]=0,0!=o[e]?v[e]=f[e]/o[e]*100:v[e]=0),e in h&&"Infinity"===h[e]&&(h[e]=m[e])})),this.used_project_slot_percent=v,0===this.concurrency_max?(b.concurrency=0,h.concurrency=this.concurrency_max):(b.concurrency=this.concurrency_used/this.concurrency_max*100,h.concurrency=this.concurrency_max-this.concurrency_used),this.concurrency_limit=Math.min(h.concurrency,3),this.available_slot=m,this.used_slot_percent=b,this.used_resource_group_slot_percent=y,this.lastQueryTime=Date.now(),this.aggregate_updating=!1,Promise.resolve(!0)})).catch((e=>{throw this.lastQueryTime=Date.now(),this.aggregate_updating=!1,e}))}aggregateResource(e=""){void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._aggregateCurrentResource(e)}),!0):this._aggregateCurrentResource(e)}async _refreshImageList(){return globalThis.backendaiclient.image.list(["name","humanized_name","tag","registry","architecture","digest","installed","resource_limits { key min max }","labels { key value }"],!0,!1).then((e=>{if(0===e.images.length)return;this.images=e.images,this.supports={},this.supportImages={},this.imageRequirements={},this.imageArchitectures={};const t={};Object.keys(this.images).map(((e,i)=>{const o=this.images[e],n=`${o.registry}/${o.name}`;let r;n in this.supports||(this.supports[n]=[]),-1===this.supports[n].indexOf(o.tag)&&this.supports[n].push(o.tag);const a=o.name.split("/");r=1===a.length?a[0]:a[1],this.supportImages[n]=this.imageInfo[r]||{name:"Custom Environments",description:"Custom-built images.",group:"Custom Environments",tags:[],label:[{category:"Custom",tag:"Custom",color:"black"}]},"group"in this.supportImages[n]||(this.supportImages[n].group="Custom Environments"),this.resourceLimits[`${n}:${o.tag}`]=o.resource_limits,this.imageRequirements[`${n}:${o.tag}`]={},this.imageArchitectures[`${n}:${o.tag}`]||(this.imageArchitectures[`${n}:${o.tag}`]=[]),this.imageArchitectures[`${n}:${o.tag}`].push(o.architecture),o.labels.forEach((e=>{"com.nvidia.tensorflow.version"===e.key&&(this.imageRequirements[`${n}:${o.tag}`].framework="TensorFlow "+e.value),"com.nvidia.pytorch.version"===e.key&&(this.imageRequirements[`${n}:${o.tag}`].framework="PyTorch "+e.value),"ai.backend.features"===e.key&&e.value.includes("private")&&(n in t||(t[n]=[]),t[n].push(o.tag))}))})),Object.keys(t).forEach((e=>{const i=this.supports[e];this.supports[e]=i.filter((i=>!t[e].includes(i))),this.supports[e].length<1&&delete this.supports[e]})),this._updateEnvironment()})).catch((e=>{throw this.metadata_updating=!1,e}))}_guessHumanizedNames(e){const t=this.imageNames;let i="",o=null,n="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";return Object.keys(t).forEach(((r,a)=>{const s=e.split("/");i=2==s.length?s[1]:s[2],(i===r||""===i&&e.endsWith(r)&&r.length<n.length)&&(o=t[r],n=r)})),o}_cap(e){return e.includes("/")||(e=e.replace(/^./,e[0].toUpperCase())),e}_updateEnvironment(){const e=Object.keys(this.supports);if(void 0===e)return;e.sort(((e,t)=>this.supportImages[e].group>this.supportImages[t].group?1:-1));let t="";this.languages=[],e.forEach(((e,i)=>{if(!Object.keys(this.aliases).includes(e)){const t=this._guessHumanizedNames(e);this.aliases[e]=null!==t?t:e}const o=e.split("/"),n=o[0];let r,a;2==o.length?(r="",a=o[1]):o.length>2&&(r=o.slice(1,o.length-1).join("/"),a=o[o.length-1]);let s,l=this.aliases[e];s=void 0!==l?l.split(" (")[0]:a,l=l.split("/").slice(-1)[0],s=s.split("/").slice(-1)[0];let c=[];a in this.tags&&(c=c.concat(this.tags[a])),""==r||["lablup","cloud","stable"].includes(r)||c.push({tag:this._cap(r),color:"purple"});let d="default.png";a in this.icons&&(d=this.icons[a]),void 0!==globalThis.backendaiclient._config.allow_image_list&&globalThis.backendaiclient._config.allow_image_list.length>0&&!globalThis.backendaiclient._config.allow_image_list.includes(e)||(t!==this.supportImages[e].group&&(this.languages.push({name:"",registry:"",prefix:"",kernelname:"",alias:"",icon:"",basename:this.supportImages[e].group,tags:[],clickable:!1}),t=this.supportImages[e].group),this.languages.push({name:e,registry:n,prefix:r,kernelname:a,alias:l,basename:s,tags:c,icon:d}))})),this.image_updating=!1}async initDefaultLanguage(){if(!this._default_language_updated)return void 0!==globalThis.backendaiclient._config.default_session_environment&&"default_session_environment"in globalThis.backendaiclient._config&&""!==globalThis.backendaiclient._config.default_session_environment?this.default_language=globalThis.backendaiclient._config.default_session_environment:this.languages.length>1?this.default_language=this.languages[1].name:0!==this.languages.length?this.default_language=this.languages[0].name:this.default_language="index.docker.io/lablup/ngc-tensorflow",this._default_language_updated=!0,this.default_language}render(){return z``}};o([we({type:Object})],fp.prototype,"supports",void 0),o([we({type:Object})],fp.prototype,"images",void 0),o([we({type:Object})],fp.prototype,"supportImages",void 0),o([we({type:Object})],fp.prototype,"imageRequirements",void 0),o([we({type:Object})],fp.prototype,"imageArchitectures",void 0),o([we({type:Object})],fp.prototype,"aliases",void 0),o([we({type:Object})],fp.prototype,"tags",void 0),o([we({type:Object})],fp.prototype,"imageInfo",void 0),o([we({type:Object})],fp.prototype,"imageNames",void 0),o([we({type:Object})],fp.prototype,"resourceLimits",void 0),o([we({type:Object})],fp.prototype,"userResourceLimit",void 0),o([we({type:Object})],fp.prototype,"icons",void 0),o([we({type:String})],fp.prototype,"kernel",void 0),o([we({type:Array})],fp.prototype,"versions",void 0),o([we({type:Array})],fp.prototype,"languages",void 0),o([we({type:String})],fp.prototype,"gpu_mode",void 0),o([we({type:Array})],fp.prototype,"gpu_modes",void 0),o([we({type:Number})],fp.prototype,"gpu_step",void 0),o([we({type:Object})],fp.prototype,"total_slot",void 0),o([we({type:Object})],fp.prototype,"total_resource_group_slot",void 0),o([we({type:Object})],fp.prototype,"total_project_slot",void 0),o([we({type:Object})],fp.prototype,"used_slot",void 0),o([we({type:Object})],fp.prototype,"used_resource_group_slot",void 0),o([we({type:Object})],fp.prototype,"used_project_slot",void 0),o([we({type:Object})],fp.prototype,"available_slot",void 0),o([we({type:Number})],fp.prototype,"concurrency_used",void 0),o([we({type:Number})],fp.prototype,"concurrency_max",void 0),o([we({type:Number})],fp.prototype,"concurrency_limit",void 0),o([we({type:Number})],fp.prototype,"max_containers_per_session",void 0),o([we({type:Array})],fp.prototype,"vfolders",void 0),o([we({type:Object})],fp.prototype,"used_slot_percent",void 0),o([we({type:Object})],fp.prototype,"used_resource_group_slot_percent",void 0),o([we({type:Object})],fp.prototype,"used_project_slot_percent",void 0),o([we({type:Array})],fp.prototype,"resource_templates",void 0),o([we({type:Array})],fp.prototype,"resource_templates_filtered",void 0),o([we({type:String})],fp.prototype,"default_language",void 0),o([we({type:Object})],fp.prototype,"cpu_metric",void 0),o([we({type:Object})],fp.prototype,"mem_metric",void 0),o([we({type:Object})],fp.prototype,"shmem_metric",void 0),o([we({type:Object})],fp.prototype,"cuda_device_metric",void 0),o([we({type:Object})],fp.prototype,"cuda_shares_metric",void 0),o([we({type:Object})],fp.prototype,"rocm_device_metric",void 0),o([we({type:Object})],fp.prototype,"tpu_device_metric",void 0),o([we({type:Number})],fp.prototype,"lastQueryTime",void 0),o([we({type:Number})],fp.prototype,"lastResourcePolicyQueryTime",void 0),o([we({type:Number})],fp.prototype,"lastVFolderQueryTime",void 0),o([we({type:String})],fp.prototype,"scaling_group",void 0),o([we({type:String})],fp.prototype,"current_user_group",void 0),o([we({type:Array})],fp.prototype,"scaling_groups",void 0),o([we({type:Array})],fp.prototype,"sessions_list",void 0),o([we({type:Boolean})],fp.prototype,"metric_updating",void 0),o([we({type:Boolean})],fp.prototype,"metadata_updating",void 0),o([we({type:Boolean})],fp.prototype,"aggregate_updating",void 0),o([we({type:Boolean})],fp.prototype,"image_updating",void 0),o([we({type:Boolean})],fp.prototype,"_default_language_updated",void 0),o([we({type:Boolean})],fp.prototype,"_default_version_updated",void 0),o([we({type:Boolean})],fp.prototype,"_GPUmodeUpdated",void 0),o([we({type:Boolean})],fp.prototype,"allow_project_resource_monitor",void 0),o([we({type:Array})],fp.prototype,"disableLaunch",void 0),o([we({type:Number})],fp.prototype,"max_cpu_core_per_session",void 0),fp=o([_e("backend-ai-resource-broker")],fp);let bp=class extends Bs{constructor(){super(),this.options=Object(),this.options={"user.desktop_notification":!0,"user.compact_sidebar":!1,"user.preserve_login":!1,"user.language":"default","user.automatic_update_check":!0,"user.custom_ssh_port":"","user.beta_feature":!1},this.readSettings()}readSettings(){this._readSettings()}_readSettings(){for(let e=0,t=localStorage.length;e<t;++e)if(localStorage.key(e).startsWith("backendaiwebui.settings")){const t=localStorage.key(e).replace("backendaiwebui.settings.","");this._readSetting(t)}}exists(e,t="user"){return t+"."+e in this.options}get(e,t=null,i="user"){return i+"."+e in this.options?this.options[i+"."+e]:t}set(e,t,i="user"){return this._writeUserSetting(e,t,i)}delete(e,t="user"){return this._deleteUserSetting(e,t)}_readSetting(e,t=!0,i="user"){const o=localStorage.getItem("backendaiwebui.settings."+e);null!==o&&""!=o&&'""'!=o?"false"===o?this.options[e]=!1:"true"===o?this.options[e]=!0:this.isJson(o)?this.options[e]=JSON.parse(o):this.options[e]=o:this.options[e]=t}_writeUserSetting(e,t,i){!1===t?localStorage.setItem("backendaiwebui.settings."+i+"."+e,"false"):!0===t?localStorage.setItem("backendaiwebui.settings."+i+"."+e,"true"):"object"==typeof t?localStorage.setItem("backendaiwebui.settings."+i+"."+e,JSON.stringify(t)):localStorage.setItem("backendaiwebui.settings."+i+"."+e,t),this.options[i+"."+e]=t}_deleteUserSetting(e,t){return localStorage.removeItem("backendaiwebui.settings."+t+"."+e),delete this.options[t+"."+e],!0}isJson(e){try{JSON.parse(e)}catch(e){return!1}return!0}render(){return z`
    `}};o([we({type:Object})],bp.prototype,"options",void 0),bp=o([_e("backend-ai-settings-store")],bp);var yp=bp;const vp=[Jt,ae`
    .loading-background {
      transition: all 0.3s linear;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('/resources/images/loading-background-large.jpg');
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: top left;
      -webkit-user-select: none !important;
      -webkit-app-region: drag !important;
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

    .user-name {
      max-width: 10vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    #project {
      font-size: 12px;
      color: #8c8484;
      padding-right: 8px;
    }

    mwc-menu#dropdown-menu {
      position: relative;
      left: 170px;
      top: 20px;
    }

    .dropdown-menu-name {
      position: absolute;
      margin-top: 3px;
    }

    mwc-button {
      margin: auto 10px;
      background-image: none;
      --mdc-theme-primary: var(--general-button-background-color);
      --mdc-theme-on-primary: var(--general-button-color);
    }

    mwc-button[unelevated] {
      --mdc-theme-primary: var(--general-button-background-color);
      --mdc-theme-on-primary: var(--general-button-color);
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

    mwc-select.fixed-position > mwc-list-item {
      width: 255px;
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

    #user-preference-dialog mwc-textfield#secretkey {
      --mdc-typography-subtitle1-font-size: 0.7rem;
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
      --mdc-menu-min-width: 200px;
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
      background-image: url('/manifest/backend.ai-brand-simple.svg');
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

    .terms-of-use {
      margin-bottom: 10px;
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

    #password-change-request {
      background-color: var(--paper-orange-400);
      color: white;
      font-size: 14px;
      height: 28px;
      position: absolute;
      right: 0;
      width: 100vw;
    }

    #password-change-request > mwc-icon-button > i {
      font-size: 14px;
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

    @media screen and (max-width: 1030px) {
      span.email, p#project {
        display: none;
      }

      div#welcome-message {
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
  `];let _p=class extends Bs{constructor(){super(),this.active=!0,this.notifications=[]}static get styles(){return[vp,Ls,Ns,Ms,Fs,ae`
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
      `]}async _viewStateChanged(e){await this.updateComplete}render(){return z`
      <div id="container">
        <h3>${it("sidepanel.Notification")}</h3>
        <mwc-list>
        ${this.notifications.map((e=>z`
          <mwc-list-item twoline>
            <span>${e.outerText}</span>
            <span slot="secondary">${e.getAttribute("created")}</span>
          </mwc-list-item>
          <li divider role="separator"></li>`))}
          ${0===this.notifications.length?z`
            <div style="padding:15px 0;width:100%;text-align:center;">
              ${it("sidepanel.NoNotification")}
            </div>
        `:z``}
        </mwc-list>
      </div>
    `}shouldUpdate(){return this.active}firstUpdated(){this.notifications=globalThis.lablupNotification.notifications,document.addEventListener("backend-ai-notification-changed",(()=>this.refresh()))}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}async refresh(){this.notifications=globalThis.lablupNotification.notifications,await this.requestUpdate()}};o([we({type:Boolean})],_p.prototype,"active",void 0),o([we({type:Array})],_p.prototype,"notifications",void 0),_p=o([_e("backend-ai-sidepanel-notification")],_p);let xp=class extends Bs{constructor(){super(),this.active=!0,this.tasks=[]}static get styles(){return[vp,Ls,Ns,Ms,Fs,ae`
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
      `]}async _viewStateChanged(e){await this.updateComplete}_taskIcon(e){switch(e){case"session":return"subject";case"database":return"dns";case"image":return"extension";case"general":default:return"widget"}}render(){return z`
      <div id="container">
        <h3>${it("sidepanel.BackgroundTasks")}</h3>
        <mwc-list>
        ${this.tasks.map((e=>z`
          <mwc-list-item graphic="icon" twoline>
            <mwc-icon id="summary-menu-icon" slot="graphic" id="activities-icon" class="fg black">${this._taskIcon(e.tasktype)}</mwc-icon>
            <span>${e.tasktitle}</span>
            <span slot="secondary">${it("sidepanel.Running")}</span>
          </mwc-list-item>
          <li divider role="separator"></li>`))}
          ${0===this.tasks.length?z`
            <div style="padding:15px 0;width:100%;text-align:center;">
              ${it("sidepanel.NoBackgroundTask")}
            </div>
        `:z``}
        </mwc-list>
      </div>
    `}shouldUpdate(){return this.active}firstUpdated(){this.tasks=[],document.addEventListener("backend-ai-task-changed",(()=>this.refresh()))}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}async refresh(){this.tasks=globalThis.tasker.taskstore,await this.requestUpdate()}};o([we({type:Boolean})],xp.prototype,"active",void 0),o([we({type:Array})],xp.prototype,"tasks",void 0),xp=o([_e("backend-ai-sidepanel-task")],xp);
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */
class wp{constructor(e,t,i,o){this.tasktitle=e,this.taskid=i,this.taskobj=t,this.tasktype=o,this.created_at=Date.now(),this.finished_at=0,this.status="active"}remove(){delete this.taskobj}}let kp=class extends ye{constructor(){super(),this.active=!0,this.isGCworking=!1,this.taskstore=[],this.finished=[],this.indicator=globalThis.lablupIndicator,this.pooler=setInterval((()=>{this.gc()}),1e4)}static get styles(){return[ae``]}render(){return z`
    `}shouldUpdate(){return this.active}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}add(e,t,i="",o="general"){""===i&&(i=this.generate_UUID());const n=new wp(e,t,i,o);return null!=t&&"function"==typeof t.then&&(t.then().catch((e=>{})).finally((()=>{this.finished.push(i),this.gc()})),this.taskstore.push(n),this.signal(),n)}remove(e=""){const t=this.taskstore.filter((t=>t.taskid===e));if(t.length>0){let i=this.taskstore.indexOf(t[0]);i>-1&&(t[0].remove(),this.taskstore.splice(i,1)),delete t[0],i=this.finished.indexOf(e),i>-1&&this.finished.splice(i,1),this.signal()}}list(){return this.taskstore}generate_UUID(){let e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(t=>{const i=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?i:3&i|8).toString(16)}))}async gc(){this.isGCworking||(this.isGCworking=!0,this.finished.length>0&&this.finished.forEach((e=>{this.remove(e)})),this.isGCworking=!1)}signal(){const e=new CustomEvent("backend-ai-task-changed",{detail:{tasks:this.taskstore}});document.dispatchEvent(e)}};o([we({type:Object})],kp.prototype,"indicator",void 0),o([we({type:Array})],kp.prototype,"taskstore",void 0),o([we({type:Array})],kp.prototype,"finished",void 0),o([we({type:Object})],kp.prototype,"pooler",void 0),o([we({type:Boolean})],kp.prototype,"active",void 0),o([we({type:Boolean})],kp.prototype,"isGCworking",void 0),kp=o([_e("backend-ai-tasker")],kp);var Sp=kp;let Ep=class extends ye{constructor(){super(),this.dialog=Object(),this.edition="Open Source",this.license="Subscription",this.validUntil="",this.version="",this.managerVersion=""}static get styles(){return[ae`
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

      `]}firstUpdated(){this.dialog=this.shadowRoot.querySelector("wl-dialog")}connectedCallback(){super.connectedCallback()}show(){this.edition=globalThis.packageEdition,this.validUntil=globalThis.packageValidUntil,this.version=globalThis.packageVersion,this.managerVersion=globalThis.backendaiclient.managerVersion,"Open Source"!==this.edition?"2099-12-31"===globalThis.packageValidUntil||'""'===this.validUntil||""==this.validUntil?this.license=ze("license.Perpetual"):this.license=ze("license.Subscription"):this.license=ze("license.OpenSource"),this.dialog.show()}hide(){this.dialog.hide()}render(){return z`
      <wl-dialog id="splash-panel" fixed backdrop blockscrolling persistent>
        <div class="splash-header">
          <img src="manifest/backend.ai-text.svg" style="height:50px;padding:35px 20px;" />
          <wl-button style="position:absolute;top:0;right:0;" fab flat inverted @click="${()=>this.hide()}">
            <wl-icon>close</wl-icon>
          </wl-button>
        </div>
        <div class="splash-information">
          <ul>
            <li>Backend.AI Web UI <span id="version-detail" class="detail">${globalThis.packageVersion}</span></li>
            <li><span id="license-detail">${this.edition} Edition</span></li>
            <li><span id="valid-until" class="detail">
              ${"Subscription"===this.license?z`Subscription is active until ${this.validUntil}`:z``}
              ${"Perpetual"===this.license?z`Perpetual License`:z``}
              </span></li>
            <li style="margin-top:15px;"><span id="mode-detail" class="detail">Backend.AI Cluster</span> <span id="manager-build-detail" class="detail">${this.managerVersion}</span></li>
            <li><span id="mode-detail" class="detail">${globalThis.isElectron?"App":"WebServer"}</span> <span id="build-detail" class="detail">Build ${globalThis.buildVersion}</span></li>
          </ul>
          <ul>
            <li>Powered by <a target="_blank" href="https://github.com/lablup/backend.ai/blob/master/LICENSE">open-source software</a></li>
            <li class="copyright">Copyright &copy; 2015-2022 Lablup Inc.</li>
            <li class="release-note">
              <a target="_blank" href="https://github.com/lablup/backend.ai-webui/releases/tag/v${this.version}">Release Note</a>
              <a target="_blank" href="https://github.com/lablup/backend.ai-webui/blob/main/LICENSE">License</a>
            </li>
            </ul>
          </ul>
        </div>
      </wl-dialog>
    `}};o([we({type:Object})],Ep.prototype,"dialog",void 0),o([we({type:String})],Ep.prototype,"edition",void 0),o([we({type:String})],Ep.prototype,"license",void 0),o([we({type:String})],Ep.prototype,"validUntil",void 0),o([we({type:String})],Ep.prototype,"version",void 0),o([we({type:String})],Ep.prototype,"managerVersion",void 0),Ep=o([_e("backend-ai-splash")],Ep);let Tp=class extends Da{constructor(){super(...arguments),this.role="banner",this.hideDelay=5e3,this.autoHideTimeout=null}get $focusTrap(){return this.$snackbar}animateIn(){let e=!1;const t=()=>{e||(e=!0,this.didShow())},i=this.$snackbar.animate([{transform:"translateY(100%)",opacity:"0"},{transform:"translateY(0)",opacity:"1"}],this.animationConfig),o=this.$backdrop.animate([{opacity:"0"},{opacity:"1"}],this.animationConfig);o.onfinish=t,i.onfinish=t,this.activeInAnimations.push(i,o)}animateOut(e){null!=this.autoHideTimeout&&window.clearTimeout(this.autoHideTimeout);let t=!1;const i=()=>{t||(t=!0,this.resolve(e),this.didHide(e))},o=this.$snackbar.animate([{transform:"translateY(0)",opacity:"1"},{transform:"translateY(100%)",opacity:"0"}],this.animationConfig),n=this.$backdrop.animate([{opacity:"1"},{opacity:"0"}],this.animationConfig);n.onfinish=i,o.onfinish=i,this.activeOutAnimations.push(o,n)}didShow(){super.didShow(),this.autoHideTimeout=window.setTimeout((()=>{this.persistent||this.hide()}),this.hideDelay)}render(){return $r` <wl-backdrop id="backdrop" @click="${this.clickAway}"></wl-backdrop> <focus-trap id="snackbar" ?inactive="${!this.open||this.disableFocusTrap}"> <div id="content"> <slot name="icon"></slot> <slot></slot> </div> <div id="actions"> <slot name="action"></slot> </div> </focus-trap> `}};Tp.styles=[...Da.styles,ta(":host{display:none;pointer-events:none;outline:none}:host([open]){display:block}:host([fixed]){padding:var(--snackbar-fixed-padding,.75rem);z-index:var(--snackbar-z-index,12345678);position:fixed;left:0;bottom:0;top:0;right:0}:host([fixed][open]){display:flex;align-items:flex-end}#snackbar{padding:var(--snackbar-padding,.375rem);color:var(--snackbar-color,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));background:var(--snackbar-bg,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));border-radius:var(--snackbar-border-radius,.5rem);box-shadow:var(--snackbar-elevation,var(--elevation-1,0 .3125rem .625rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)));flex-wrap:wrap;justify-content:flex-end;text-align:left;position:relative;pointer-events:all}#actions,#content,#snackbar{display:flex;align-items:center;flex-wrap:wrap}::slotted([slot=icon]){margin:var(--snackbar-icon-margin,0 .75rem 0 0);color:var(--snackbar-icon-color,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}#content{padding:var(--snackbar-content-padding,.375rem .75rem);flex-grow:1}")],o([Vr({type:String,reflect:!0}),n("design:type",String)],Tp.prototype,"role",void 0),o([Vr({type:Number}),n("design:type",Object)],Tp.prototype,"hideDelay",void 0),o([Wr("#backdrop"),n("design:type",Sa)],Tp.prototype,"$backdrop",void 0),o([Wr("#snackbar"),n("design:type",ka)],Tp.prototype,"$snackbar",void 0),Tp=o([Hr("wl-snackbar")],Tp);
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */
let Cp=class extends ye{constructor(){super(),this.text="",this.detail="",this.url="",this.message="",this.requestUrl="",this.status="",this.timestamp="",this.active=!0,this.supportDesktopNotification=!1,this.step=0,this.newDesktopNotification=Object(),this.options=Object(),this.options={desktop_notification:!0},this.notifications=[],this.notificationstore=[]}static get is(){return"lablup-notification"}static get styles(){return[ae`
        wl-snackbar {
          position: fixed;
          right: 20px;
          font-size: 16px;
          font-weight: 400;
          font-family: 'Ubuntu', Roboto, sans-serif;
          z-index: 12345678;
        }

        wl-button {
          --button-font-size: 11px;
          --button-fab-size: 12px;
        }

        wl-icon {
          --icon-size: 10px;
        }
      `]}render(){return z``}shouldUpdate(){return this.active}firstUpdated(){"Notification"in window&&Promise.resolve(Notification.requestPermission()).then((e=>{["default","granted","denied"].includes(e)&&(this.supportDesktopNotification=!0)})),this._readUserSetting("desktop_notification",!0),!1===this.options.desktop_notification&&(this.supportDesktopNotification=!1)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}_readUserSetting(e,t=!0){const i=localStorage.getItem("backendaiwebui.usersetting."+e);this.options[e]=null!==i&&""!=i&&'""'!=i?"false"!==i&&("true"===i||i):t}_hideNotification(e){e.target.closest("wl-snackbar").hide()}_moreNotification(e){this._hideNotification(e);const t=globalThis.location.toString().split(/[/]+/).pop();if(globalThis.history.pushState({},"","/usersettings"),Et.dispatch(yt(decodeURIComponent("/usersettings"),{tab:"logs"})),t&&"usersettings"===t){const e=new CustomEvent("backend-ai-usersettings-logs",{});document.dispatchEvent(e)}}_createCloseButton(e){const t=document.createElement("wl-button");t.setAttribute("slot","action"),t.setAttribute("flat",""),t.setAttribute("fab",""),t.addEventListener("click",this._hideNotification.bind(this)),t.innerHTML="<wl-icon>close</wl-icon>",e.appendChild(t)}async show(e=!1,t=Object()){const i=document.querySelector("wl-snackbar[persistent='true']");i&&(this.notifications=[],document.body.removeChild(i)),this.gc();const o=document.createElement("wl-snackbar");if(o.innerHTML='<span style="overflow-x:hidden">'+this.text+"</span>",""!=this.detail&&(o.innerHTML=o.innerHTML+'<div style="display:none;"> : '+this.detail+"</div>"),0!==Object.keys(t).length&&(console.log(t),this._saveToLocalStorage("backendaiwebui.logs",t)),""!==this.detail){const e=document.createElement("wl-button");e.style.fontSize="12px",e.setAttribute("slot","action"),e.setAttribute("flat",""),e.setAttribute("fab",""),e.style.width="80px",""!=this.url?(e.innerHTML=ze("notification.Visit"),e.addEventListener("click",this._openURL.bind(this,this.url))):(e.innerHTML=ze("notification.SeeDetail"),e.addEventListener("click",this._moreNotification.bind(this))),o.appendChild(e)}this.detail="",this.url="",!1===e?o.setAttribute("hideDelay","3000"):(o.setAttribute("persistent","true"),this._createCloseButton(o)),o.setAttribute("backdrop",""),o.style.bottom=20+55*this.step+"px",o.style.position="fixed",o.querySelector("span").style.overflowX="hidden",o.querySelector("span").style.maxWidth="70vw",o.style.right="20px",o.style.fontSize="16px",o.style.fontWeight="400",o.style.fontFamily="'Ubuntu', Roboto, sans-serif",o.style.zIndex="12345678";const n=new Date;o.setAttribute("created",n.toLocaleString()),document.body.appendChild(o),this.notifications.push(o),await this.updateComplete,o.show();const r=new CustomEvent("backend-ai-notification-changed",{});document.dispatchEvent(r),this._spawnDesktopNotification("Backend.AI",this.text,"")}_spawnDesktopNotification(e,t,i){if(!1===this.supportDesktopNotification)return;const o={body:t,icon:i};this.newDesktopNotification=new Notification(e,o)}_openURL(e){window.open(e,"_blank")}_saveToLocalStorage(e,t){console.log(t);const i=JSON.parse(localStorage.getItem(e)||"{}");let o=[];o.push(t),o=o.concat(i),localStorage.setItem(e,JSON.stringify(o))}gc(){if(this.notifications.length>0){const e=this.notifications.filter((e=>!0===e.open));this.notifications=e;const t=new CustomEvent("backend-ai-notification-changed",{});document.dispatchEvent(t)}let e=JSON.parse(localStorage.getItem("backendaiwebui.logs")||"{}");e.length>3e3&&(e=e.slice(0,2999)),this.step=this.notifications.length,localStorage.setItem("backendaiwebui.logs",JSON.stringify(e))}};o([we({type:String})],Cp.prototype,"text",void 0),o([we({type:String})],Cp.prototype,"detail",void 0),o([we({type:String})],Cp.prototype,"url",void 0),o([we({type:String})],Cp.prototype,"message",void 0),o([we({type:String})],Cp.prototype,"requestUrl",void 0),o([we({type:String})],Cp.prototype,"status",void 0),o([we({type:String})],Cp.prototype,"timestamp",void 0),o([we({type:Object})],Cp.prototype,"indicator",void 0),o([we({type:Array})],Cp.prototype,"notifications",void 0),o([we({type:Array})],Cp.prototype,"notificationstore",void 0),o([we({type:Boolean})],Cp.prototype,"active",void 0),o([we({type:Boolean})],Cp.prototype,"supportDesktopNotification",void 0),o([we({type:Number})],Cp.prototype,"step",void 0),o([we({type:Object})],Cp.prototype,"newDesktopNotification",void 0),o([we({type:Object})],Cp.prototype,"options",void 0),Cp=o([_e("lablup-notification")],Cp);var Ap=function(){var e=this;this.updateInterval=1e3,this.tabId=Math.random().toString(36).substring(7),this.tabsCounter=0,this.onTabCountUpdate=[],this.updateActiveInterval=0,this.tabsCount=function(t){void 0===t&&(t=!0);var i=e.getData(),o=Object.keys(i.list),n=Date.now(),r=0;return o.forEach((function(t){i.list[t].lastActive+1.2*e.updateInterval>n&&r++})),t||e.tabsCounter===r||e.onTabCountUpdate.forEach((function(e){e(r)})),e.tabsCounter=r},this.updateActive=function(){var t=e.getData(),i=Date.now();void 0===t.list[e.tabId]&&(t.list[e.tabId]={TabOpenedTimeStamp:i}),t.list[e.tabId].url=window.location.href,t.list[e.tabId].lastActive=i,(void 0===t.lastCleaned||+t.lastCleaned+2e4<i)&&(t=e.clearList(t)),e.updateData(t),e.tabsCount(!1)},this.clearList=function(t){var i=Object.keys(t.list),o=Date.now();return i.forEach((function(i){t.list[i].lastActive+Math.max(8e3,1.5*e.updateInterval)<o&&delete t.list[i]})),t.lastCleaned=o,t},this.onTabChange=function(t,i){void 0===i&&(i=!1),"function"==typeof t&&(e.onTabCountUpdate.push(t),i&&t(e.tabsCount()))},this.updateData=function(e){localStorage.setItem("tabCountData","string"==typeof e?e:JSON.stringify(e))},this.getData=function(){var e=localStorage.getItem("tabCountData");return null==e?{list:{},lastCleaned:0}:JSON.parse(e)},this.getUrls=function(t){void 0===t&&(t=!1);var i=e.getData(),o=[];return Object.keys(i.list).forEach((function(e){t&&-1!==o.indexOf(i.list[e].url)||o.push(i.list[e].url)})),o},this.setUpdateInterval=function(t){void 0===t&&(t=e.updateInterval),null!==e.updateActiveInterval&&e.pause(),e.start(t)},this.pause=function(){clearInterval(e.updateActiveInterval),e.updateActiveInterval=0},this.start=function(t){void 0===t&&(t=e.updateInterval),e.updateActiveInterval=setInterval((function(){e.updateActive()}),e.updateInterval=t)},this.updateActive(),this.start(),window.onbeforeunload=function(t){var i=e.getData();delete i.list[e.tabId],e.updateData(i)}};let Ip=class extends Nn{static get styles(){return[Mn,ae`
        .mdc-select__anchor {
          min-width: var(--mdc-select-min-width, 200px);
        }
        .mdc-select--filled {
          min-width: var(--mdc-select-min-width, 200px);
        }
      `]}};Ip=o([_e("mwc-multi-select")],Ip),Ne({loader:e=>fetch(`/resources/i18n/${e}.json`).then((e=>e.json()))}),globalThis.backendaioptions=new yp,globalThis.tasker=new Sp,globalThis.backendaiutils=new js;let Op=class extends(rt(Et)(ye)){constructor(){super(),this.hasLoadedStrings=!1,this.menuTitle="LOGIN REQUIRED",this.siteDescription="",this.user_id="DISCONNECTED",this.full_name="DISCONNECTED",this.domain="CLICK TO CONNECT",this.is_connected=!1,this.is_admin=!1,this.is_superadmin=!1,this.allow_signout=!1,this.needPasswordChange=!1,this.proxy_url="",this.connection_mode="API",this.connection_server="",this.edition="Open Source",this.validUntil="",this.groups=[],this.current_group="",this.plugins=Object(),this.splash=Object(),this.loginPanel=Object(),this._page="",this._lazyPage="",this._pageParams={},this._sidepanel="",this._drawerOpened=!1,this._offlineIndicatorOpened=!1,this._offline=!1,this._dropdownMenuIcon=Object(),this.config=Object(),this.TOSdialog=Object(),this.mini_ui=!1,this.auto_logout=!1,this.lang="default",this.supportLanguageCodes=["en","ko","ru","fr","mn","id"],this.minibarWidth=88,this.sidebarWidth=250,this.sidepanelWidth=250,this.supports=Object(),this.availablePages=["summary","verify-email","change-password","job","data","pipeline","statistics","usersettings","credential","environment","agent","settings","maintenance","information","github","import","unauthorized"],this.adminOnlyPages=["experiment","credential","environment","agent","settings","maintenance","information"],this.superAdminOnlyPages=["agent","settings","maintenance","information"],this.timeoutSec=5,this.use_experiment=!1,this.loggedAccount=Object(),this.roleInfo=Object(),this.keyPairInfo=Object(),this.blockedMenuitem=[]}static get styles(){return[vp,Ls,Ns,Ms,Fs]}firstUpdated(){var e,t;let i;globalThis.lablupNotification=this.shadowRoot.querySelector("#notification"),globalThis.lablupIndicator=this.shadowRoot.querySelector("#indicator"),globalThis.appLauncher=this.shadowRoot.querySelector("#app-launcher"),globalThis.resourceBroker=this.shadowRoot.querySelector("#resource-broker"),globalThis.currentPage=this._page,globalThis.currentPageParams=this._pageParams,this.notification=globalThis.lablupNotification,this.appBody=this.shadowRoot.querySelector("#app-body"),this.appPage=this.shadowRoot.querySelector("#app-page"),this.contentBody=this.shadowRoot.querySelector("#content-body"),this.contentBody.type="dismissible",this.mainToolbar=this.shadowRoot.querySelector("#main-toolbar"),this.drawerToggleButton=this.shadowRoot.querySelector("#drawer-toggle-button"),this.sidebarMenu=this.shadowRoot.getElementById("sidebar-menu"),this.splash=this.shadowRoot.querySelector("#about-backendai-panel"),this.loginPanel=this.shadowRoot.querySelector("#login-panel"),this.TOSdialog=this.shadowRoot.querySelector("#terms-of-service"),this._dropdownMenuIcon=this.shadowRoot.querySelector("#dropdown-button"),globalThis.isElectron&&navigator.platform.indexOf("Mac")>=0&&(this.shadowRoot.querySelector(".portrait-canvas").style.visibility="hidden"),e=e=>Et.dispatch(yt(decodeURIComponent(e.pathname))),document.body.addEventListener("click",(t=>{if(t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)return;const i=t.composedPath().filter((e=>"A"===e.tagName))[0];if(!i||i.target||i.hasAttribute("download")||"external"===i.getAttribute("rel"))return;const o=i.href;if(!o||-1!==o.indexOf("mailto:"))return;const n=window.location,r=n.origin||n.protocol+"//"+n.host;0===o.indexOf(r)&&(t.preventDefault(),o!==n.href&&(window.history.pushState({},"",o),e(n,t)))})),window.addEventListener("popstate",(t=>e(window.location,t))),e(window.location,null),t=e=>Et.dispatch(wt(e)),window.addEventListener("online",(()=>t(!1))),window.addEventListener("offline",(()=>t(!0))),t(!1===navigator.onLine),globalThis.isElectron?(i="./config.toml",document.addEventListener("backend-ai-logout",(()=>this.logout(!0))),document.addEventListener("backend-ai-app-close",(()=>this.close_app_window(!0))),document.addEventListener("backend-ai-show-splash",(()=>this.splash.show()))):(i="../../config.toml",document.addEventListener("backend-ai-logout",(()=>this.logout(!1)))),globalThis.addEventListener("beforeunload",(function(e){globalThis.backendaioptions.set("last_window_close_time",(new Date).getTime()/1e3)})),this._parseConfig(i).then((()=>{if(this.loadConfig(this.config),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)if("verify-email"===this._page){const e=this.shadowRoot.querySelector("backend-ai-email-verification-view");window.setTimeout((()=>{e.verify(this.loginPanel.api_endpoint)}),1e3)}else if("change-password"===this._page){const e=this.shadowRoot.querySelector("backend-ai-change-forgot-password-view");window.setTimeout((()=>{e.open(this.loginPanel.api_endpoint)}),1e3)}else if("edu-applauncher"===this._page){const e=this.shadowRoot.querySelector("backend-ai-edu-applauncher");window.setTimeout((()=>{e.launch(this.loginPanel.api_endpoint)}),1e3)}else{const e=new Ap,t=window.performance.navigation&&1===window.performance.navigation.type||window.performance.getEntriesByType("navigation").map((e=>e.type)).includes("reload");e.tabsCount(!0),!0!==this.auto_logout||1!==e.tabsCounter||t?this.loginPanel.login(!1):this.loginPanel.check_login().then((e=>{const t=(new Date).getTime()/1e3;!0===e&&t-globalThis.backendaioptions.get("last_window_close_time",t)>3?this.loginPanel._logoutSession().then((()=>{this.loginPanel.open()})):!0===e?this.loginPanel.login(!1):this.loginPanel.open()}))}})).catch((e=>{console.log("Initialization failed."),void 0!==globalThis.backendaiclient&&null!==globalThis.backendaiclient&&!1!==globalThis.backendaiclient.ready||this.loginPanel.block("Configuration is not loaded.","Error")})),this.mini_ui=globalThis.backendaioptions.get("compact_sidebar"),globalThis.mini_ui=this.mini_ui,this._changeDrawerLayout(document.body.clientWidth,document.body.clientHeight),globalThis.addEventListener("resize",(e=>{this._changeDrawerLayout(document.body.clientWidth,document.body.clientHeight),document.body.dispatchEvent(new Event("click"))})),document.addEventListener("current-user-info-changed",(e=>{if(globalThis.backendaiclient.supports("change-user-name")){const t=e.detail;this._updateFullname(t.full_name)}}))}async connectedCallback(){super.connectedCallback(),document.addEventListener("backend-ai-connected",(()=>this.refreshPage()));const e=globalThis.navigator.language.split("-")[0];"default"===globalThis.backendaioptions.get("language")&&this.supportLanguageCodes.includes(e)?this.lang=e:this.supportLanguageCodes.includes(globalThis.backendaioptions.get("language"))?this.lang=globalThis.backendaioptions.get("language"):this.lang="en",globalThis.backendaioptions.set("current_language",this.lang),await Fe(this.lang),this.hasLoadedStrings=!0}disconnectedCallback(){document.removeEventListener("backend-ai-connected",(()=>this.refreshPage())),super.disconnectedCallback()}shouldUpdate(e){return this.hasLoadedStrings&&super.shouldUpdate(e)}loadConfig(e){if(void 0!==e.general&&"siteDescription"in e.general&&(this.siteDescription=e.general.siteDescription),void 0!==e.general&&"connectionMode"in e.general&&(this.connection_mode=e.general.connectionMode),void 0!==e.general&&"connectionServer"in e.general&&(this.connection_server=e.general.connectionServer),void 0!==e.general&&"autoLogout"in e.general&&null===globalThis.backendaioptions.get("auto_logout")?this.auto_logout=e.general.autoLogout:this.auto_logout=globalThis.backendaioptions.get("auto_logout",!1),void 0!==e.license&&"edition"in e.license&&(this.edition=e.license.edition),void 0!==e.menu&&"blocklist"in e.menu&&(this.blockedMenuitem=e.menu.blocklist.split(",")),void 0!==e.general&&"maskUserInfo"in e.general&&(this.isUserInfoMaskEnabled=e.general.maskUserInfo),globalThis.packageEdition=this.edition,void 0!==e.license&&"validUntil"in e.license&&(this.validUntil=e.license.validUntil),globalThis.packageValidUntil=this.validUntil,void 0===e.general||void 0===e.general.allowSignout||""===e.general.allowSignout||0==e.general.allowSignout?this.allow_signout=!1:this.allow_signout=!0,void 0!==e.plugin&&("login"in e.plugin&&(this.plugins.login=e.plugin.login),"page"in e.plugin)){this.plugins.page=[],this.plugins.menuitem=[],this.plugins["menuitem-user"]=[],this.plugins["menuitem-admin"]=[],this.plugins["menuitem-superadmin"]=[];const t=[];for(const i of e.plugin.page.split(","))t.push(import("../plugins/"+i+".js").then((e=>{const t=document.createElement(i);switch(t.classList.add("page"),t.setAttribute("name",i),this.appPage.appendChild(t),this.plugins.menuitem.push(i),this.availablePages.push(i),t.permission){case"superadmin":this.plugins["menuitem-superadmin"].push(i),this.adminOnlyPages.push(i);break;case"admin":this.plugins["menuitem-admin"].push(i),this.adminOnlyPages.push(i);break;default:this.plugins["menuitem-user"].push(i)}return this.plugins.page.push({name:i,url:i,menuitem:t.menuitem}),Promise.resolve(!0)})));Promise.all(t).then((e=>{globalThis.backendaiPages=this.plugins.page;const t=new CustomEvent("backend-ai-plugin-loaded",{detail:!0});document.dispatchEvent(t),this.requestUpdate()}))}this.loginPanel.refreshWithConfig(e)}refreshPage(){this.shadowRoot.getElementById("sign-button").icon="exit_to_app",this.loggedAccount.access_key=globalThis.backendaiclient._config.accessKey,this.isUserInfoMaskEnabled=globalThis.backendaiclient._config.maskUserInfo,this.needPasswordChange=globalThis.backendaiclient.need_password_change,globalThis.backendaiclient.proxyURL=this.proxy_url,void 0!==globalThis.backendaiclient&&null!=globalThis.backendaiclient&&void 0!==globalThis.backendaiclient.is_admin&&!0===globalThis.backendaiclient.is_admin?this.is_admin=!0:this.is_admin=!1,void 0!==globalThis.backendaiclient&&null!=globalThis.backendaiclient&&void 0!==globalThis.backendaiclient.is_superadmin&&!0===globalThis.backendaiclient.is_superadmin?this.is_superadmin=!0:this.is_superadmin=!1,this._refreshUserInfoPanel(),globalThis.backendaiutils._writeRecentProjectGroup(this.current_group),document.body.style.backgroundImage="none",this.appBody.style.visibility="visible";const e=this.shadowRoot.getElementById("loading-curtain");e.classList.add("visuallyhidden"),e.addEventListener("transitionend",(()=>{e.classList.add("hidden"),this.is_connected=!0}),{capture:!1,once:!0,passive:!1}),this.addTooltips(),this.sidebarMenu.style.minHeight=this.is_admin||this.is_superadmin?"600px":"250px",this.is_admin||this.is_superadmin||(this.adminOnlyPages.includes(this._page)||"unauthorized"===this._page)&&(this._page="unauthorized",globalThis.history.pushState({},"","/unauthorized"),Et.dispatch(yt(decodeURIComponent(this._page)))),!this.is_superadmin&&this.superAdminOnlyPages.includes(this._page)&&(this._page="unauthorized",globalThis.history.pushState({},"","/unauthorized"),Et.dispatch(yt(decodeURIComponent(this._page))))}showUpdateNotifier(){const e=this.shadowRoot.getElementById("backend-ai-indicator");e.innerHTML='New Web UI is available. Please <a onclick="globalThis.location.reload()">reload</a> to update.',e.show()}_parseConfig(e,t=!1){return fetch(e).then((e=>200==e.status?e.text():"")).then((e=>{const i=jn(e);if(t)return i;this.config=jn(e)})).catch((e=>{console.log("Configuration file missing.")}))}toggleSidebarUI(){!0===this.contentBody.open&&(this._sidepanel="",this.toggleSidePanelUI()),this.mini_ui?this.mini_ui=!1:this.mini_ui=!0,globalThis.mini_ui=this.mini_ui;const e=new CustomEvent("backend-ai-ui-changed",{detail:{"mini-ui":this.mini_ui}});document.dispatchEvent(e),this._changeDrawerLayout(document.body.clientWidth,document.body.clientHeight)}toggleSidePanelUI(){this.contentBody.open?(this.contentBody.open=!1,this.mini_ui?this.mainToolbar.style.setProperty("--mdc-drawer-width",this.minibarWidth+"px"):this.mainToolbar.style.setProperty("--mdc-drawer-width",this.sidebarWidth+"px")):(this.contentBody.open=!0,this.contentBody.style.setProperty("--mdc-drawer-width",this.sidepanelWidth+"px"),this.mini_ui?this.mainToolbar.style.setProperty("--mdc-drawer-width",this.minibarWidth+this.sidepanelWidth+"px"):this.mainToolbar.style.setProperty("--mdc-drawer-width",this.sidebarWidth+this.sidepanelWidth+"px"))}toggleSidePanelType(){this.contentBody.type,this.contentBody.type}_openSidePanel(e){document.body.clientWidth<750&&(this.mini_ui=!0,this._changeDrawerLayout(document.body.clientWidth,document.body.clientHeight,!0)),!0===this.contentBody.open?e!=this._sidepanel?this._sidepanel=e:(this._sidepanel="",this.toggleSidePanelUI()):(this._sidepanel=e,this.toggleSidePanelUI())}_changeDrawerLayout(e,t,i=!1){this.mainToolbar.style.setProperty("--mdc-drawer-width","0px"),e<700&&!i?(this.appBody.style.setProperty("--mdc-drawer-width",this.sidebarWidth+"px"),this.appBody.type="modal",this.appBody.open=!1,this.contentBody.style.width=e+"px",this.mainToolbar.style.setProperty("--mdc-drawer-width","0px"),this.drawerToggleButton.style.display="block",this.mini_ui&&(this.mini_ui=!1,globalThis.mini_ui=this.mini_ui),this.contentBody.open&&(this.contentBody.open=!1)):(this.mini_ui?(this.appBody.style.setProperty("--mdc-drawer-width",this.minibarWidth+"px"),this.mainToolbar.style.setProperty("--mdc-drawer-width",this.minibarWidth+"px"),this.contentBody.style.width=e-this.minibarWidth+"px",this.contentBody.open&&this.mainToolbar.style.setProperty("--mdc-drawer-width",this.minibarWidth+this.sidebarWidth+"px")):(this.appBody.style.setProperty("--mdc-drawer-width",this.sidebarWidth+"px"),this.mainToolbar.style.setProperty("--mdc-drawer-width",this.sidebarWidth+"px"),this.contentBody.style.width=e-this.sidebarWidth+"px",this.contentBody.open&&this.mainToolbar.style.setProperty("--mdc-drawer-width",this.sidebarWidth+this.sidepanelWidth+"px")),this.appBody.type="dismissible",this.appBody.open=!0,this.drawerToggleButton.style.display="none"),this.contentBody.open&&this.contentBody.style.setProperty("--mdc-drawer-width",this.sidepanelWidth+"px")}_refreshUserInfoPanel(){this.user_id=globalThis.backendaiclient.email,this.full_name=globalThis.backendaiclient.full_name,this.domain=globalThis.backendaiclient._config.domainName,this.current_group=globalThis.backendaiutils._readRecentProjectGroup(),this._showRole(),globalThis.backendaiclient.current_group=this.current_group,this.groups=globalThis.backendaiclient.groups;const e=this.shadowRoot.getElementById("group-select-box");e.hasChildNodes()&&e.removeChild(e.firstChild);const t=document.createElement("div");t.className="horizontal center center-justified layout";const i=document.createElement("mwc-select");i.id="group-select",i.value=this.current_group,i.style="width: auto;max-width: 200px;",i.addEventListener("selected",(e=>this.changeGroup(e)));let o=document.createElement("mwc-list-item");o.setAttribute("disabled","true"),o.innerHTML=ze("webui.menu.SelectProject"),o.style.borderBottom="1px solid #ccc",i.appendChild(o),this.groups.map((e=>{o=document.createElement("mwc-list-item"),o.value=e,this.current_group===e?o.selected=!0:o.selected=!1,o.innerHTML=e,i.appendChild(o)})),t.appendChild(i),e.appendChild(t)}_loadPageElement(){"index.html"!==this._page&&""!==this._page||(this._page="summary")}async _openUserPrefDialog(){this._showKeypairInfo();this.shadowRoot.querySelector("#user-preference-dialog").show()}_hideUserPrefDialog(){this.shadowRoot.querySelector("#user-preference-dialog").hide()}_togglePasswordVisibility(e){const t=e.__on,i=e.closest("div").querySelector("mwc-textfield");t?i.setAttribute("type","text"):i.setAttribute("type","password")}_validatePassword1(){const e=this.shadowRoot.querySelector("#pref-new-password");this.shadowRoot.querySelector("#pref-new-password2").reportValidity(),e.validityTransform=(t,i)=>i.valid?{valid:i.valid,customError:!i.valid}:i.valueMissing?(e.validationMessage=ze("signup.PasswordInputRequired"),{valid:i.valid,customError:!i.valid}):(e.validationMessage=ze("signup.PasswordInvalid"),{valid:i.valid,customError:!i.valid})}_validatePassword2(){const e=this.shadowRoot.querySelector("#pref-new-password2");e.validityTransform=(t,i)=>{if(i.valid){const t=this.shadowRoot.querySelector("#pref-new-password").value===e.value;return t||(e.validationMessage=ze("signup.PasswordNotMatched")),{valid:t,customError:!t}}return i.valueMissing?(e.validationMessage=ze("signup.PasswordInputRequired"),{valid:i.valid,customError:!i.valid}):(e.validationMessage=ze("signup.PasswordInvalid"),{valid:i.valid,customError:!i.valid})}}_validatePassword(){this._validatePassword1(),this._validatePassword2()}_updateUserInformation(){globalThis.backendaiclient.supports("change-user-name")&&this._updateFullname(),this._updateUserPassword()}async _updateFullname(e=""){if((e=""===e?this.shadowRoot.querySelector("#pref-original-name").value:e).length>64)return this.notification.text=ze("webui.menu.FullNameInvalid"),void this.notification.show();globalThis.backendaiclient.supports("change-user-name")?e&&e!==this.full_name&&globalThis.backendaiclient.update_full_name(this.user_id,e).then((t=>{this.notification.text=ze("webui.menu.FullnameUpdated"),this.notification.show(),this.full_name=globalThis.backendaiclient.full_name=e,this.shadowRoot.querySelector("#pref-original-name").value=this.full_name})).catch((e=>e&&e.message?(this.notification.text=e.message,this.notification.detail=e.message,void this.notification.show(!0,e)):e&&e.title?(this.notification.text=e.title,this.notification.detail=e.message,void this.notification.show(!0,e)):void 0)):(this.notification.text=ze("error.APINotSupported"),this.notification.show())}async _updateUserPassword(){const e=this.shadowRoot.querySelector("#user-preference-dialog"),t=e.querySelector("#pref-original-password").value,i=e.querySelector("#pref-new-password"),o=e.querySelector("#pref-new-password2");if(!t&&!i.value&&!o.value)return void this._hideUserPrefDialog();if(!t)return this.notification.text=ze("webui.menu.InputOriginalPassword"),void this.notification.show();if(!i.value||!i.validity.valid)return this.notification.text=ze("webui.menu.InvalidPasswordMessage"),void this.notification.show();if(i.value!==o.value)return this.notification.text=ze("webui.menu.NewPasswordMismatch"),void this.notification.show();globalThis.backendaiclient.update_password(t,i.value,o.value).then((e=>{this.notification.text=ze("webui.menu.PasswordUpdated"),this.notification.show(),this._hideUserPrefDialog()})).catch((e=>e&&e.message?(this.notification.text=e.message,this.notification.detail=e.message,void this.notification.show(!0,e)):e&&e.title?(this.notification.text=e.title,this.notification.detail=e.message,void this.notification.show(!0,e)):void 0)).finally((()=>{this.shadowRoot.querySelector("#pref-original-password").value="",this.shadowRoot.querySelector("#pref-new-password").value="",this.shadowRoot.querySelector("#pref-new-password2").value=""}))}_menuSelected(e){}updated(e){if(e.has("_page")){let e=this._page;if(!0!==this.availablePages.includes(e)){const t=e.split(/[/]+/).pop();void 0!==t&&(e=t)}this._page=e,this._updateSidebar(e)}}_updateSidebar(e){switch(e){case"summary":case"verify-email":this.menuTitle=ze("webui.menu.Summary");break;case"change-password":this.menuTitle=ze("webui.menu.Summary")+this.user_id;break;case"job":this.menuTitle=ze("webui.menu.Sessions");break;case"experiment":this.menuTitle=ze("webui.menu.Experiments");break;case"data":this.menuTitle=ze("webui.menu.Data&Storage");break;case"pipeline":this.menuTitle=ze("webui.menu.Pipeline");break;case"statistics":this.menuTitle=ze("webui.menu.Statistics");break;case"usersettings":this.menuTitle=ze("webui.menu.Settings&Logs");break;case"credential":this.menuTitle=ze("webui.menu.UserCredentials&Policies");break;case"environment":this.menuTitle=ze("webui.menu.Environments&Presets");break;case"agent":this.menuTitle=ze("webui.menu.ComputationResources");break;case"settings":this.menuTitle=ze("webui.menu.Configurations");break;case"maintenance":this.menuTitle=ze("webui.menu.Maintenance");break;case"information":this.menuTitle=ze("webui.menu.Information");break;case"logs":this.menuTitle=ze("webui.menu.Logs");break;case"github":case"import":this.menuTitle=ze("webui.menu.Import&Run");break;default:if("menuitem"in this.plugins&&this.plugins.menuitem.includes(e)){this.menuTitle=e;break}"error"!==this._page&&(this._lazyPage=this._page),document.addEventListener("backend-ai-plugin-loaded",(()=>{if(this._page=this._lazyPage,!0!==this.availablePages.includes(this._page)&&(this._page="error"),"menuitem"in this.plugins&&this.plugins.menuitem.includes(this._page)){const e=this.shadowRoot.querySelector(this._page);e.active=!0,e.setAttribute("active",!0),e.render()}}))}}async close_app_window(e=!1){if(!1===globalThis.backendaioptions.get("preserve_login")){this.notification.text=ze("webui.CleanUpLoginSession"),this.notification.show();const e=Object.keys(localStorage);for(let t=0;t<e.length;t++){const i=e[t];/^(BackendAIWebUI\.login\.)/.test(i)&&localStorage.removeItem(i)}sessionStorage.clear()}void 0!==globalThis.backendaiclient&&null!==globalThis.backendaiclient&&("SESSION"===globalThis.backendaiclient._config.connectionMode&&await globalThis.backendaiclient.logout(),globalThis.backendaiclient=null)}async logout(e=!1){if(console.log("also close the app:",e),globalThis.backendaiutils._deleteRecentProjectGroupInfo(),void 0!==globalThis.backendaiclient&&null!==globalThis.backendaiclient){this.notification.text=ze("webui.CleanUpNow"),this.notification.show(),"SESSION"===globalThis.backendaiclient._config.connectionMode&&await globalThis.backendaiclient.logout(),this.is_admin=!1,this.is_superadmin=!1,globalThis.backendaiclient=null;const t=Object.keys(localStorage);for(let e=0;e<t.length;e++){const i=t[e];/^(BackendAIWebUI\.login\.)/.test(i)&&localStorage.removeItem(i)}if(sessionStorage.clear(),!0===e);else if(globalThis.isElectron){this.user_id="",this.domain="",this._page="summary",globalThis.history.pushState({},"","/summary"),Et.dispatch(yt(decodeURIComponent("/"))),document.body.style.backgroundImage='url("/resources/images/loading-background-large.jpg")',this.appBody.style.visibility="hidden";const e=this.shadowRoot.getElementById("loading-curtain");e.classList.remove("visuallyhidden"),e.addEventListener("transitionend",(()=>{e.classList.remove("hidden")}),{capture:!1,once:!0,passive:!1}),this.loginPanel.open()}else globalThis.location.reload()}}updateTitleColor(e,t){this.shadowRoot.querySelector("#main-toolbar").style.setProperty("--mdc-theme-primary",e),this.shadowRoot.querySelector("#main-toolbar").style.color=t}changeGroup(e){globalThis.backendaiclient.current_group=e.target.value,this.current_group=globalThis.backendaiclient.current_group,globalThis.backendaiutils._writeRecentProjectGroup(globalThis.backendaiclient.current_group);const t=new CustomEvent("backend-ai-group-changed",{detail:globalThis.backendaiclient.current_group});document.dispatchEvent(t)}toggleDrawer(){const e=this.shadowRoot.querySelector("mwc-drawer");!0===e.open?e.open=!1:e.open=!0}_toggleDropdown(){const e=this.shadowRoot.querySelector("#dropdown-menu"),t=this._dropdownMenuIcon;e.anchor=t,e.open=!e.open}showTOSAgreement(){this.TOSdialog.tosContent="",this.TOSdialog.tosLanguage=this.lang,this.TOSdialog.title=ze("webui.menu.TermsOfService"),this.TOSdialog.tosEntry="terms-of-service",this.TOSdialog.open()}showPPAgreement(){this.TOSdialog.tosContent="",this.TOSdialog.tosLanguage=this.lang,this.TOSdialog.title=ze("webui.menu.PrivacyPolicy"),this.TOSdialog.tosEntry="privacy-policy",this.TOSdialog.open()}_moveTo(e){const t=e.split("/")[1];if(!this.availablePages.includes(t)&&this.is_admin&&!this.adminOnlyPages.includes(t))return Et.dispatch(yt(decodeURIComponent("/error"))),void(this._page="error");if(globalThis.history.pushState({},"",e),Et.dispatch(yt(decodeURIComponent(e),{})),"menuitem"in this.plugins){for(const e of this.plugins.menuitem)if(e!==this._page){const t=this.shadowRoot.querySelector(e);t.active=!1,t.removeAttribute("active")}if(this.plugins.menuitem.includes(this._page)){const e=this.shadowRoot.querySelector(this._page);e.active=!0,e.setAttribute("active",!0),e.render()}}}_moveToLogPage(){const e=globalThis.location.toString().split(/[/]+/).pop();if(globalThis.history.pushState({},"","/usersettings"),Et.dispatch(yt(decodeURIComponent("/usersettings"),{tab:"logs"})),e&&"usersettings"===e){const e=new CustomEvent("backend-ai-usersettings-logs",{});document.dispatchEvent(e)}}_moveToUserSettingsPage(){const e=globalThis.location.toString().split(/[/]+/).pop();if(globalThis.history.pushState({},"","/usersettings"),Et.dispatch(yt(decodeURIComponent("/usersettings"),{tab:"general"})),e&&"usersettings"===e){const e=new CustomEvent("backend-ai-usersettings",{});document.dispatchEvent(e)}}async addTooltips(){this._createPopover("#summary-menu-icon",ze("webui.menu.Summary")),this._createPopover("#sessions-menu-icon",ze("webui.menu.Sessions")),this._createPopover("#data-menu-icon",ze("webui.menu.Data&Storage")),this._createPopover("#import-menu-icon",ze("webui.menu.Import&Run")),this._createPopover("#pipeline-menu-icon",ze("webui.menu.Pipeline")),this._createPopover("#statistics-menu-icon",ze("webui.menu.Statistics")),this._createPopover("#usersettings-menu-icon",ze("webui.menu.Settings")),this._createPopover("backend-ai-help-button",ze("webui.menu.Help")),this.is_admin&&this._createPopover("#user-menu-icon",ze("webui.menu.Users")),this.is_superadmin&&(this._createPopover("#resources-menu-icon",ze("webui.menu.Resources")),this._createPopover("#environments-menu-icon",ze("webui.menu.Environments")),this._createPopover("#configurations-menu-icon",ze("webui.menu.Configurations")),this._createPopover("#maintenance-menu-icon",ze("webui.menu.Maintenance")),this._createPopover("#information-menu-icon",ze("webui.menu.Information")))}_createPopover(e,t){const i=document.createElement("wl-popover");i.anchor=e,i.setAttribute("fixed",""),i.setAttribute("disablefocustrap",""),i.setAttribute("anchororiginx","right"),i.setAttribute("anchororiginy","center"),i.setAttribute("transformoriginx","left"),i.setAttribute("transformoriginy","center"),i.anchorOpenEvents=["mouseover"],i.anchorCloseEvents=["mouseout"];const o=document.createElement("wl-popover-card"),n=document.createElement("div");n.style.padding="5px",n.innerText=t,o.appendChild(n),i.appendChild(o);this.shadowRoot.querySelector("#mini-tooltips").appendChild(i)}stateChanged(e){this._page=e.app.page,this._pageParams=e.app.params,this._offline=e.app.offline,this._offlineIndicatorOpened=e.app.offlineIndicatorOpened,this._drawerOpened=e.app.drawerOpened,globalThis.currentPage=this._page,globalThis.currentPageParams=this._pageParams}_getUsername(){let e=this.full_name?this.full_name:this.user_id;if(this.isUserInfoMaskEnabled){const t=2,i=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)?e.split("@")[0].length-t:e.length-t;e=globalThis.backendaiutils._maskString(e,"*",t,i)}return e}_getUserId(){let e=this.user_id;if(this.isUserInfoMaskEnabled){const t=2,i=e.split("@")[0].length-t;e=globalThis.backendaiutils._maskString(e,"*",t,i)}return e}_getRole(e){return globalThis.backendaiclient.user.get(e,["role"])}async _showRole(){const e=await this._getRole(this.user_id);this.roleInfo=e.user}_getKeypairInfo(e){return globalThis.backendaiclient.keypair.list(e,["access_key","secret_key"],!0)}async _showKeypairInfo(){const e=await this._getKeypairInfo(this.user_id);this.keyPairInfo=e,this.keyPairInfo.keypairs.reverse()}async _showSecretKey(e){const t=this.shadowRoot.querySelector("#secretkey");for(let i=0;i<this.keyPairInfo.keypairs.length;i++)if(e.target.selected.value==this.keyPairInfo.keypairs[i].access_key){t.value=this.keyPairInfo.keypairs[i].secret_key;break}}_hidePasswordChangeRequest(){this.shadowRoot.querySelector("#password-change-request").style.display="none"}render(){var e;return z`
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
                ${this.siteDescription?z`
                  <div class="site-name" style="font-size:13px;text-align:left;">
                    ${this.siteDescription}
                  </div>`:z``}
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
          <mwc-list id="sidebar-menu" class="sidebar list" @selected="${e=>this._menuSelected(e)}">
            <mwc-list-item graphic="icon" ?selected="${"summary"===this._page}" @click="${()=>this._moveTo("/summary")}" ?disabled="${this.blockedMenuitem.includes("summary")}">
              <i class="fas fa-th-large" slot="graphic" id="summary-menu-icon"></i>
              <span class="full-menu">${it("webui.menu.Summary")}</span>
            </mwc-list-item>
            <mwc-list-item graphic="icon" ?selected="${"job"===this._page}" @click="${()=>this._moveTo("/job")}" ?disabled="${this.blockedMenuitem.includes("job")}">
              <i class="fas fa-list-alt" slot="graphic" id="sessions-menu-icon"></i>
              <span class="full-menu">${it("webui.menu.Sessions")}</span>
            </mwc-list-item>
            ${this.use_experiment?z`
            <mwc-list-item graphic="icon" ?selected="${"experiment"===this._page}" @click="${()=>this._moveTo("/experiment")}" ?disabled="${this.blockedMenuitem.includes("experiment")}">
              <i class="fas fa-flask" slot="graphic"></i>
              <span class="full-menu">${it("webui.menu.Experiments")}</span>
            </mwc-list-item>`:z``}
            <mwc-list-item graphic="icon" ?selected="${"github"===this._page||"import"===this._page}" @click="${()=>this._moveTo("/import")}" ?disabled="${this.blockedMenuitem.includes("import")}">
              <i class="fas fa-play" slot="graphic" id="import-menu-icon"></i>
              <span class="full-menu">${it("webui.menu.Import&Run")}</span>
            </mwc-list-item>
            <mwc-list-item graphic="icon" ?selected="${"data"===this._page}" @click="${()=>this._moveTo("/data")}" ?disabled="${this.blockedMenuitem.includes("data")}">
              <i class="fas fa-cloud-upload-alt" slot="graphic" id="data-menu-icon"></i>
              <span class="full-menu">${it("webui.menu.Data&Storage")}</span>
            </mwc-list-item>
            <mwc-list-item graphic="icon" ?selected="${"pipeline"===this._page}" @click="${()=>this._moveTo("/pipeline")}" ?disabled="${this.blockedMenuitem.includes("pipeline")}" style="display:none">
              <i class="fas fa-stream" slot="graphic" id="pipeline-menu-icon"></i>
              <span class="full-menu">${it("webui.menu.Pipeline")}</span>
            </mwc-list-item>
            <mwc-list-item graphic="icon" ?selected="${"statistics"===this._page}" @click="${()=>this._moveTo("/statistics")}" ?disabled="${this.blockedMenuitem.includes("statistics")}">
              <i class="fas fa-chart-bar" slot="graphic" id="statistics-menu-icon"></i>
              <span class="full-menu">${it("webui.menu.Statistics")}</span>
            </mwc-list-item>
            ${"page"in this.plugins?this.plugins.page.filter((e=>this.plugins["menuitem-user"].includes(e.url))).map((e=>z`
            <mwc-list-item graphic="icon" ?selected="${this._page===e.url}" @click="${()=>this._moveTo("/"+e.url)}" ?disabled="${!this.is_admin}">
              <i class="fas fa-puzzle-piece" slot="graphic" id="${e}-menu-icon"></i>
              <span class="full-menu">${e.menuitem}</span>
            </mwc-list-item>
            `)):z``}
            ${this.is_admin?z`
                <h3 class="full-menu">${it("webui.menu.Administration")}</h3>
                <mwc-list-item graphic="icon" ?selected="${"credential"===this._page}" @click="${()=>this._moveTo("/credential")}" ?disabled="${!this.is_admin}">
                  <i class="fas fa-address-card" slot="graphic" id="user-menu-icon"></i>
                  <span class="full-menu">${it("webui.menu.Users")}</span>
                </mwc-list-item>
                <mwc-list-item graphic="icon" ?selected="${"environment"===this._page}" @click="${()=>this._moveTo("/environment")}" ?disabled="${!this.is_admin}">
                  <i class="fas fa-microchip" slot="graphic" id="environments-menu-icon"></i>
                  <span class="full-menu">${it("webui.menu.Environments")}</span>
                </mwc-list-item>`:z``}
                ${"page"in this.plugins?this.plugins.page.filter((e=>this.plugins["menuitem-admin"].includes(e.url))).map((e=>z`
                <mwc-list-item graphic="icon" ?selected="${this._page===e.url}" @click="${()=>this._moveTo("/"+e.url)}" ?disabled="${!this.is_admin}">
                  <i class="fas fa-puzzle-piece" slot="graphic" id="${e}-menu-icon"></i>
                  <span class="full-menu">${e.menuitem}</span>
                </mwc-list-item>
                `)):z``}
            ${this.is_superadmin?z`
                <mwc-list-item graphic="icon" ?selected="${"agent"===this._page}" @click="${()=>this._moveTo("/agent")}" ?disabled="${!this.is_superadmin}">
                  <i class="fas fa-server" slot="graphic" id="resources-menu-icon"></i>
                  <span class="full-menu">${it("webui.menu.Resources")}</span>
                </mwc-list-item>
                <mwc-list-item graphic="icon" ?selected="${"settings"===this._page}" @click="${()=>this._moveTo("/settings")}" ?disabled="${!this.is_superadmin}">
                  <i class="fas fa-cog" slot="graphic" id="configurations-menu-icon"></i>
                  <span class="full-menu">${it("webui.menu.Configurations")}</span>
                </mwc-list-item>
                <mwc-list-item graphic="icon" ?selected="${"maintenance"===this._page}" @click="${()=>this._moveTo("/maintenance")}" ?disabled="${!this.is_superadmin}">
                  <i class="fas fa-wrench" slot="graphic" id="maintenance-menu-icon"></i>
                  <span class="full-menu">${it("webui.menu.Maintenance")}</span>
                </mwc-list-item>
                <mwc-list-item graphic="icon" ?selected="${"information"===this._page}" @click="${()=>this._moveTo("/information")}" ?disabled="${!this.is_superadmin}">
                  <i class="fas fa-info-circle" slot="graphic" id="information-menu-icon"></i>
                  <span class="full-menu">${it("webui.menu.Information")}</span>
                </mwc-list-item>
                ${"page"in this.plugins?this.plugins.page.filter((e=>this.plugins["menuitem-superadmin"].includes(e.url))).map((e=>z`
                <mwc-list-item graphic="icon" ?selected="${this._page===e.url}" @click="${()=>this._moveTo("/"+e.url)}" ?disabled="${!this.is_admin}">
                  <i class="fas fa-puzzle-piece" slot="graphic" id="${e}-menu-icon"></i>
                  <span class="full-menu">${e.menuitem}</span>
                </mwc-list-item>
                `)):z``}
            `:z``}
            <footer id="short-height">
              <div class="terms-of-use full-menu">
                <small style="font-size:11px;">
                  <a @click="${()=>this.showTOSAgreement()}">${it("webui.menu.TermsOfService")}</a>
                  ·
                  <a style="color:forestgreen;" @click="${()=>this.showPPAgreement()}">${it("webui.menu.PrivacyPolicy")}</a>
                  ·
                  <a @click="${()=>this.splash.show()}">${it("webui.menu.AboutBackendAI")}</a>
                  ${!0===this.allow_signout?z`
                  ·
                  <a @click="${()=>this.loginPanel.signout()}">${it("webui.menu.LeaveService")}</a>
                  `:z``}
                </small>
              </div>
              <address class="full-menu">
                <small class="sidebar-footer">Lablup Inc.</small>
                <small class="sidebar-footer" style="font-size:9px;">22.03.3.220626</small>
              </address>
              <div id="sidebar-navbar-footer" class="vertical start end-justified layout" style="margin-left:16px;">
                <backend-ai-help-button active style="margin-left:4px;"></backend-ai-help-button>
                <mwc-icon-button id="usersettings-menu-icon" icon="settings" slot="graphic" class="fg ${"usersettings"===this._page?"yellow":"white"}" style="margin-left:4px;" @click="${()=>this._moveTo("/usersettings")}"></mwc-icon-button>
              </div>
            </footer>
          </mwc-list>
          <footer>
            <div class="terms-of-use full-menu">
              <small style="font-size:11px;">
                <a @click="${()=>this.showTOSAgreement()}">${it("webui.menu.TermsOfService")}</a>
                ·
                <a style="color:forestgreen;" @click="${()=>this.showPPAgreement()}">${it("webui.menu.PrivacyPolicy")}</a>
                ·
                <a @click="${()=>this.splash.show()}">${it("webui.menu.AboutBackendAI")}</a>
                ${!0===this.allow_signout?z`
                ·
                <a @click="${()=>this.loginPanel.signout()}">${it("webui.menu.LeaveService")}</a>
                `:z``}
              </small>
            </div>
            <address class="full-menu">
              <small class="sidebar-footer">Lablup Inc.</small>
              <small class="sidebar-footer" style="font-size:9px;">22.03.3.220626</small>
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
                <div class="horizontal layout" slot="title" id="welcome-message" style="font-size:12px;margin-left:10px;padding-top:10px;">
                  <p>${it("webui.menu.WelcomeMessage")}</p>
                  <p class="user-name">${this._getUsername()}</p>
                  <p>${it("webui.menu.WelcomeMessage_2")}</p>
                </div>
                <div slot="actionItems" style="margin:0;">
                  <div class="horizontal flex center layout">
                    <div style="height:48px;">
                      <div class="horizontal center center-justified layout">
                        <p id="project">${it("webui.menu.Project")}</p>
                        <div id="group-select-box"></div>
                      </div>
                    </div>
                    <div class="vertical-line" style="height:35px;"></div>
                    <div class="horizontal center layout">
                      <div class="vertical layout center" style="position:relative;padding-top:10px;">
                        <span class="email" style="color:#8c8484;font-size:12px;line-height:22px;text-align:left;-webkit-font-smoothing:antialiased;margin:auto 10px;">
                          ${it("webui.menu.UserName")}
                        </span>
                        <mwc-menu id="dropdown-menu" class="user-menu">
                          ${"default"!==this.domain&&""!==this.domain?z`
                          <mwc-list-item class="horizontal layout start center" disabled style="border-bottom:1px solid #ccc;">
                              ${this.domain}
                          </mwc-list-item>
                          `:z``}
                          <mwc-list-item class="horizontal layout start center" style="border-bottom:1px solid #ccc;">
                              <mwc-icon class="dropdown-menu">perm_identity</mwc-icon>
                              <span class="dropdown-menu-name">${this._getUserId()}</span>
                          </mwc-list-item>
                          <mwc-list-item class="horizontal layout start center" disabled style="border-bottom:1px solid #ccc;">
                              <mwc-icon class="dropdown-menu">admin_panel_settings</mwc-icon>
                              <span class="dropdown-menu-name">${this.roleInfo.role}</span>
                          </mwc-list-item>
                          <mwc-list-item class="horizontal layout start center" @click="${()=>this.splash.show()}">
                              <mwc-icon class="dropdown-menu">info</mwc-icon>
                              <span class="dropdown-menu-name">${it("webui.menu.AboutBackendAI")}</span>
                          </mwc-list-item>
                          <mwc-list-item class="horizontal layout start center" @click="${()=>this._openUserPrefDialog()}">
                              <mwc-icon class="dropdown-menu">lock</mwc-icon>
                              <span class="dropdown-menu-name">${it("webui.menu.MyAccount")}</span>
                          </mwc-list-item>
                          <mwc-list-item class="horizontal layout start center" @click="${()=>this._moveToUserSettingsPage()}">
                              <mwc-icon class="dropdown-menu">drag_indicator</mwc-icon>
                              <span class="dropdown-menu-name">${it("webui.menu.Preferences")}</span>
                          </mwc-list-item>
                          <mwc-list-item class="horizontal layout start center" @click="${()=>this._moveToLogPage()}">
                              <mwc-icon class="dropdown-menu">assignment</mwc-icon>
                              <span class="dropdown-menu-name">${it("webui.menu.LogsErrors")}</span>
                          </mwc-list-item>
                          <mwc-list-item class="horizontal layout start center" id="sign-button" @click="${()=>this.logout()}">
                              <mwc-icon class="dropdown-menu">logout</mwc-icon>
                              <span class="dropdown-menu-name">${it("webui.menu.LogOut")}</span>
                          </mwc-list-item>
                        </mwc-menu>
                      </div>
                      <span class="full_name user-name" style="font-size:14px;text-align:right;-webkit-font-smoothing:antialiased;margin:auto 0px auto 10px; padding-top:10px;">
                        ${this._getUsername()}
                      </span>
                      <mwc-icon-button id="dropdown-button" @click="${()=>this._toggleDropdown()}" style="font-size: 0.5rem;">
                        <i class="fas fa-user-alt fa-xs" style="color:#8c8484;"></i>
                      </mwc-icon-button>
                      <div class="vertical-line" style="height:35px;"></div>
                      <div class="horizontal layout center" style="margin:auto 10px;padding-top:10px;">
                        <span class="log_out" style="font-size:12px;margin:auto 0px;color:#8c8484;">
                          ${it("webui.menu.LogOut")}
                        </span>
                        <mwc-icon-button @click="${()=>this.logout()}" style="padding-bottom:5px;">
                          <i class="fas fa-sign-out-alt fa-xs" style="color:#8c8484;"></i>
                        </mwc-icon-button>
                      </div>
                    </div>
                  </div>
                  <div id="password-change-request" class="horizontal layout center end-justified" style="display:${this.needPasswordChange?"flex":"none"};">
                    <span>${it("webui.menu.PleaseChangeYourPassword")} (${it("webui.menu.PasswordChangePlace")})</span>
                    <mwc-icon-button @click="${()=>this._hidePasswordChangeRequest()}">
                      <i class="fa fa-times"></i>
                    </mwc-icon-button>
                  </div>
                </div>
              </mwc-top-app-bar-fixed>

              <div class="content" style="box-sizing:border-box; padding:14px;">
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
                    <backend-ai-pipeline-view class="page" name="pipeline" ?active="${"pipeline"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-pipeline-view>
                    <backend-ai-environment-view class="page" name="environment" ?active="${"environment"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-environment-view>
                    <backend-ai-settings-view class="page" name="settings" ?active="${"settings"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-settings-view>
                    <backend-ai-maintenance-view class="page" name="maintenance" ?active="${"maintenance"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-maintenance-view>
                    <backend-ai-information-view class="page" name="information" ?active="${"information"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-information-view>
                    <backend-ai-statistics-view class="page" name="statistics" ?active="${"statistics"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-statistics-view>
                    <backend-ai-email-verification-view class="page" name="email-verification" ?active="${"verify-email"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-email-verification-view>
                    <backend-ai-change-forgot-password-view class="page" name="change-forgot-password" ?active="${"change-password"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-change-forgot-password-view>
                    <backend-ai-edu-applauncher class="page" name="edu-applauncher" ?active="${"edu-applauncher"===this._page}"><mwc-circular-progress indeterminate></mwc-circular-progress></backend-ai-edu-applauncher>
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
        ${this._offline?it("webui.YouAreOffline"):it("webui.YouAreOnline")}.
      </backend-ai-offline-indicator>
      <backend-ai-login active id="login-panel"></backend-ai-login>
      <backend-ai-splash id="about-backendai-panel"></backend-ai-splash>
      <lablup-notification id="notification"></lablup-notification>
      <backend-ai-indicator-pool id="indicator"></backend-ai-indicator-pool>
      <lablup-terms-of-service id="terms-of-service" block></lablup-terms-of-service>
      <backend-ai-dialog id="user-preference-dialog" fixed backdrop>
        <span slot="title">${it("webui.menu.MyAccountInformation")}</span>
        <div slot="content" class="layout vertical" style="width:300px;">
          <mwc-textfield id="pref-original-name" type="text"
              label="${it("webui.menu.FullName")}" maxLength="64" autofocus
              value="${this.full_name}"
              helper="${it("maxLength.64chars")}">
          </mwc-textfield>
        </div>
        <div slot="content" class="layout vertical" style="width:300px">
          <mwc-select id="access-key-select" class="fixed-position" fixedMenuPosition required
                      label="${it("general.AccessKey")}"
                      @selected="${e=>this._showSecretKey(e)}">
            ${null===(e=this.keyPairInfo.keypairs)||void 0===e?void 0:e.map((e=>z`
              <mwc-list-item value="${e.access_key}" ?selected=${this.loggedAccount.access_key===e.access_key}>
                ${e.access_key}
              </mwc-list-item>`))}
          </mwc-select>
          <mwc-textfield id="secretkey" disabled type="text"
              label="${it("general.SecretKey")}"
              style="margin-bottom:20px; margin-top:20px;" value="" readonly>
          </mwc-textfield>
        </div>
        <div slot="content" class="layout vertical" style="width:300px;">
          <mwc-textfield id="pref-original-password" type="password"
              label="${it("webui.menu.OriginalPassword")}" maxLength="64"
              style="margin-bottom:20px;">
          </mwc-textfield>
          <div class="horizontal flex layout">
            <mwc-textfield id="pref-new-password" label="${it("webui.menu.NewPassword")}"
                type="password" maxLength="64"
                auto-validate validationMessage="${it("webui.menu.InvalidPasswordMessage")}"
                pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
                @change="${this._validatePassword}">
            </mwc-textfield>
            <mwc-icon-button-toggle off onIcon="visibility" offIcon="visibility_off"
                                      @click="${e=>this._togglePasswordVisibility(e.target)}">
            </mwc-icon-button-toggle>
          </div>
          <div class="horizontal flex layout">
            <mwc-textfield id="pref-new-password2" label="${it("webui.menu.NewPasswordAgain")}"
                type="password" maxLength="64"
                @change="${this._validatePassword}">
            </mwc-textfield>
            <mwc-icon-button-toggle off onIcon="visibility" offIcon="visibility_off"
                                      @click="${e=>this._togglePasswordVisibility(e.target)}">
              </mwc-icon-button-toggle>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <div class="flex"></div>
          <mwc-button
              label="${it("webui.menu.Cancel")}"
              @click="${this._hideUserPrefDialog}"></mwc-button>
          <mwc-button
              unelevated
              label="${it("webui.menu.Update")}"
              @click="${this._updateUserInformation}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-app-launcher id="app-launcher"></backend-ai-app-launcher>
      <backend-ai-resource-broker id="resource-broker" ?active="${this.is_connected}"></backend-ai-resource-broker>
    `}};o([we({type:Boolean})],Op.prototype,"hasLoadedStrings",void 0),o([we({type:String})],Op.prototype,"menuTitle",void 0),o([we({type:String})],Op.prototype,"siteDescription",void 0),o([we({type:String})],Op.prototype,"user_id",void 0),o([we({type:String})],Op.prototype,"full_name",void 0),o([we({type:String})],Op.prototype,"domain",void 0),o([we({type:Boolean})],Op.prototype,"is_connected",void 0),o([we({type:Boolean})],Op.prototype,"is_admin",void 0),o([we({type:Boolean})],Op.prototype,"is_superadmin",void 0),o([we({type:Boolean})],Op.prototype,"allow_signout",void 0),o([we({type:Boolean})],Op.prototype,"needPasswordChange",void 0),o([we({type:String})],Op.prototype,"proxy_url",void 0),o([we({type:String})],Op.prototype,"connection_mode",void 0),o([we({type:String})],Op.prototype,"connection_server",void 0),o([we({type:String})],Op.prototype,"edition",void 0),o([we({type:String})],Op.prototype,"validUntil",void 0),o([we({type:Array})],Op.prototype,"groups",void 0),o([we({type:String})],Op.prototype,"current_group",void 0),o([we({type:Object})],Op.prototype,"plugins",void 0),o([we({type:Object})],Op.prototype,"splash",void 0),o([we({type:Object})],Op.prototype,"loginPanel",void 0),o([we({type:String})],Op.prototype,"_page",void 0),o([we({type:String})],Op.prototype,"_lazyPage",void 0),o([we({type:Object})],Op.prototype,"_pageParams",void 0),o([we({type:String})],Op.prototype,"_sidepanel",void 0),o([we({type:Boolean})],Op.prototype,"_drawerOpened",void 0),o([we({type:Boolean})],Op.prototype,"_offlineIndicatorOpened",void 0),o([we({type:Boolean})],Op.prototype,"_offline",void 0),o([we({type:Object})],Op.prototype,"_dropdownMenuIcon",void 0),o([we({type:Object})],Op.prototype,"config",void 0),o([we({type:Object})],Op.prototype,"notification",void 0),o([we({type:Object})],Op.prototype,"appBody",void 0),o([we({type:Object})],Op.prototype,"appPage",void 0),o([we({type:Object})],Op.prototype,"contentBody",void 0),o([we({type:Object})],Op.prototype,"mainToolbar",void 0),o([we({type:Object})],Op.prototype,"drawerToggleButton",void 0),o([we({type:Object})],Op.prototype,"sidebarMenu",void 0),o([we({type:Object})],Op.prototype,"TOSdialog",void 0),o([we({type:Boolean})],Op.prototype,"mini_ui",void 0),o([we({type:Boolean})],Op.prototype,"auto_logout",void 0),o([we({type:Boolean})],Op.prototype,"isUserInfoMaskEnabled",void 0),o([we({type:String})],Op.prototype,"lang",void 0),o([we({type:Array})],Op.prototype,"supportLanguageCodes",void 0),o([we({type:Array})],Op.prototype,"blockedMenuitem",void 0),o([we({type:Number})],Op.prototype,"minibarWidth",void 0),o([we({type:Number})],Op.prototype,"sidebarWidth",void 0),o([we({type:Number})],Op.prototype,"sidepanelWidth",void 0),o([we({type:Object})],Op.prototype,"supports",void 0),o([we({type:Array})],Op.prototype,"availablePages",void 0),o([we({type:Array})],Op.prototype,"adminOnlyPages",void 0),o([we({type:Array})],Op.prototype,"superAdminOnlyPages",void 0),o([we({type:Number})],Op.prototype,"timeoutSec",void 0),o([we({type:Boolean})],Op.prototype,"use_experiment",void 0),o([we({type:Object})],Op.prototype,"loggedAccount",void 0),o([we({type:Object})],Op.prototype,"roleInfo",void 0),o([we({type:Object})],Op.prototype,"keyPairInfo",void 0),Op=o([_e("backend-ai-webui")],Op);var $p=Op;export{z as $,i as A,Bs as B,r as C,t as D,s as E,a as F,Ce as G,Ee as H,Ls as I,kn as J,Ma as K,Fi as L,Rt as M,ea as N,pa as O,ha as P,ra as Q,Ci as R,oa as S,Ia as T,He as U,tt as V,Cs as W,D as X,jt as Y,re as Z,o as _,Ns as a,Wr as a0,ms as a1,Oa as a2,dr as a3,bs as a4,ia as a5,$a as a6,ua as a7,La as a8,Pa as a9,Na as aa,Ra as ab,el as ac,Gn as ad,Ua as ae,qt as af,Ft as ag,Vt as ah,mi as ai,ys as aj,aa as ak,Ca as al,Aa as am,Fe as an,Et as ao,ns as ap,ts as aq,rs as ar,sa as as,yt as at,$p as au,Jt as b,Fs as c,ol as d,we as e,ta as f,ze as g,n as h,Hr as i,$r as j,fs as k,Te as l,Ti as m,_e as n,nt as o,Vr as p,ke as q,ae as r,ye as s,it as t,Wt as u,wi as v,Ai as w,Ms as x,zi as y,j as z};
