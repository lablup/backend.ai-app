var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};function t(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}var r=function(){return(r=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function o(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function n(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}const i=new WeakMap,a=e=>(...t)=>{const r=e(...t);return i.set(r,!0),r},s=e=>"function"==typeof e&&i.has(e),l=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,d=(e,t,r=null,o=null)=>{for(;t!==r;){const r=t.nextSibling;e.insertBefore(t,o),t=r}},c=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},p={},u={},h=`{{lit-${String(Math.random()).slice(2)}}}`,f=`\x3c!--${h}--\x3e`,g=new RegExp(`${h}|${f}`),b="$lit$";class m{constructor(e,t){this.parts=[],this.element=t;const r=[],o=[],n=document.createTreeWalker(t.content,133,null,!1);let i=0,a=-1,s=0;const{strings:l,values:{length:d}}=e;for(;s<d;){const e=n.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let o=0;for(let e=0;e<r;e++)x(t[e].name,b)&&o++;for(;o-- >0;){const t=l[s],r=v.exec(t)[2],o=r.toLowerCase()+b,n=e.getAttribute(o);e.removeAttribute(o);const i=n.split(g);this.parts.push({type:"attribute",index:a,name:r,strings:i}),s+=i.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(h)>=0){const o=e.parentNode,n=t.split(g),i=n.length-1;for(let t=0;t<i;t++){let r,i=n[t];if(""===i)r=w();else{const e=v.exec(i);null!==e&&x(e[2],b)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-b.length)+e[3]),r=document.createTextNode(i)}o.insertBefore(r,e),this.parts.push({type:"node",index:++a})}""===n[i]?(o.insertBefore(w(),e),r.push(e)):e.data=n[i],s+=i}}else if(8===e.nodeType)if(e.data===h){const t=e.parentNode;null!==e.previousSibling&&a!==i||(a++,t.insertBefore(w(),e)),i=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(r.push(e),a--),s++}else{let t=-1;for(;-1!==(t=e.data.indexOf(h,t+1));)this.parts.push({type:"node",index:-1}),s++}}else n.currentNode=o.pop()}for(const e of r)e.parentNode.removeChild(e)}}const x=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},y=e=>-1!==e.index,w=()=>document.createComment(""),v=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class k{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=l?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let n,i=0,a=0,s=o.nextNode();for(;i<r.length;)if(n=r[i],y(n)){for(;a<n.index;)a++,"TEMPLATE"===s.nodeName&&(t.push(s),o.currentNode=s.content),null===(s=o.nextNode())&&(o.currentNode=t.pop(),s=o.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(s,n.name,n.strings,this.options));i++}else this.__parts.push(void 0),i++;return l&&(document.adoptNode(e),customElements.upgrade(e)),e}}const _=` ${h} `;class S{constructor(e,t,r,o){this.strings=e,this.values=t,this.type=r,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let o=0;o<e;o++){const e=this.strings[o],n=e.lastIndexOf("\x3c!--");r=(n>-1||r)&&-1===e.indexOf("--\x3e",n+1);const i=v.exec(e);t+=null===i?e+(r?_:f):e.substr(0,i.index)+i[1]+i[2]+b+i[3]+h}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class C extends S{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,r=t.firstChild;return t.removeChild(r),d(t,r.firstChild),e}}const P=e=>null===e||!("object"==typeof e||"function"==typeof e),N=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class E{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new A(this)}_getValue(){const e=this.strings,t=e.length-1;let r="";for(let o=0;o<t;o++){r+=e[o];const t=this.parts[o];if(void 0!==t){const e=t.value;if(P(e)||!N(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class A{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===p||P(e)&&e===this.value||(this.value=e,s(e)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const e=this.value;this.value=p,e(this)}this.value!==p&&this.committer.commit()}}class T{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(w()),this.endNode=e.appendChild(w())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=w()),e.__insert(this.endNode=w())}insertAfterPart(e){e.__insert(this.startNode=w()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=p,e(this)}const e=this.__pendingValue;e!==p&&(P(e)?e!==this.value&&this.__commitText(e):e instanceof S?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):N(e)?this.__commitIterable(e):e===u?(this.value=u,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof k&&this.value.template===t)this.value.update(e.values);else{const r=new k(t,e.processor,this.options),o=r._clone();r.update(e.values),this.__commitNode(o),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,o=0;for(const n of e)void 0===(r=t[o])&&(r=new T(this.options),t.push(r),0===o?r.appendIntoPart(this):r.insertAfterPart(t[o-1])),r.setValue(n),r.commit(),o++;o<t.length&&(t.length=o,this.clear(r&&r.endNode))}clear(e=this.startNode){c(this.startNode.parentNode,e.nextSibling,this.endNode)}}class R{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=p,e(this)}if(this.__pendingValue===p)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=p}}class j extends E{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new V(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class V extends A{}let z=!1;try{const e={get capture(){return z=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class O{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=p,e(this)}if(this.__pendingValue===p)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),o=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=M(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=p}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const M=e=>e&&(z?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);const B=new class{handleAttributeExpressions(e,t,r,o){const n=t[0];if("."===n){return new j(e,t.slice(1),r).parts}return"@"===n?[new O(e,t.slice(1),o.eventContext)]:"?"===n?[new R(e,t.slice(1),r)]:new E(e,t,r).parts}handleTextExpression(e){return new T(e)}};function U(e){let t=I.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},I.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const o=e.strings.join(h);return void 0===(r=t.keyString.get(o))&&(r=new m(e,e.getTemplateElement()),t.keyString.set(o,r)),t.stringsArray.set(e.strings,r),r}const I=new Map,L=new WeakMap,$=(e,t,r)=>{let o=L.get(t);void 0===o&&(c(t,t.firstChild),L.set(t,o=new T(Object.assign({templateFactory:U},r))),o.appendInto(t)),o.setValue(e),o.commit()};(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const q=(e,...t)=>new S(e,t,"html",B),F=(e,...t)=>new C(e,t,"svg",B),D=133;function H(e,t){const{element:{content:r},parts:o}=e,n=document.createTreeWalker(r,D,null,!1);let i=G(o),a=o[i],s=-1,l=0;const d=[];let c=null;for(;n.nextNode();){s++;const e=n.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==a&&a.index===s;)a.index=null!==c?-1:a.index-l,a=o[i=G(o,i)]}d.forEach(e=>e.parentNode.removeChild(e))}const W=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,D,null,!1);for(;r.nextNode();)t++;return t},G=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(y(t))return r}return-1};const J=(e,t)=>`${e}--${t}`;let X=!0;void 0===window.ShadyCSS?X=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),X=!1);const Y=e=>t=>{const r=J(t.type,e);let o=I.get(r);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},I.set(r,o));let n=o.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(h);if(void 0===(n=o.keyString.get(i))){const r=t.getTemplateElement();X&&window.ShadyCSS.prepareTemplateDom(r,e),n=new m(t,r),o.keyString.set(i,n)}return o.stringsArray.set(t.strings,n),n},K=["html","svg"],Q=new Set,Z=(e,t,r)=>{Q.add(e);const o=r?r.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:i}=n;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(o,e);const a=document.createElement("style");for(let e=0;e<i;e++){const t=n[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{K.forEach(t=>{const r=I.get(J(t,e));void 0!==r&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),H(e,r)})})})(e);const s=o.content;r?function(e,t,r=null){const{element:{content:o},parts:n}=e;if(null==r)return void o.appendChild(t);const i=document.createTreeWalker(o,D,null,!1);let a=G(n),s=0,l=-1;for(;i.nextNode();){for(l++,i.currentNode===r&&(s=W(t),r.parentNode.insertBefore(t,r));-1!==a&&n[a].index===l;){if(s>0){for(;-1!==a;)n[a].index+=s,a=G(n,a);return}a=G(n,a)}}}(r,a,s.firstChild):s.insertBefore(a,s.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const l=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(r){s.insertBefore(a,s.firstChild);const e=new Set;e.add(a),H(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const ee={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},te=(e,t)=>t!==e&&(t==t||e==e),re={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:te},oe=Promise.resolve(!0),ne=1,ie=4,ae=8,se=16,le=32,de="finalized";class ce extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=oe,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const o=this._attributeNameForProperty(r,t);void 0!==o&&(this._attributeToPropertyMap.set(o,r),e.push(o))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=re){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[r]},set(t){const o=this[e];this[r]=t,this._requestUpdate(e,o)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(de)||e.finalize(),this[de]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=te){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,o=t.converter||ee,n="function"==typeof o?o:o.fromAttribute;return n?n(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,o=t.converter;return(o&&o.toAttribute||ee.toAttribute)(e,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|le,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=re){const o=this.constructor,n=o._attributeNameForProperty(e,r);if(void 0!==n){const e=o._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=this._updateState|ae,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=this._updateState&~ae}}_attributeToProperty(e,t){if(this._updateState&ae)return;const r=this.constructor,o=r._attributeToPropertyMap.get(e);if(void 0!==o){const e=r._classProperties.get(o)||re;this._updateState=this._updateState|se,this[o]=r._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~se}}_requestUpdate(e,t){let r=!0;if(void 0!==e){const o=this.constructor,n=o._classProperties.get(e)||re;o._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||this._updateState&se||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|ie;const r=this._updatePromise;this._updatePromise=new Promise((r,o)=>{e=r,t=o});try{await r}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&le}get _hasRequestedUpdate(){return this._updateState&ie}get hasUpdated(){return this._updateState&ne}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&ne||(this._updateState=this._updateState|ne,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~ie}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}ce[de]=!0;const pe=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:o}=t;return{kind:r,elements:o,finisher(t){window.customElements.define(e,t)}}})(e,t),ue=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}}:Object.assign({},t,{finisher(r){r.createProperty(t.key,e)}}),he=(e,t,r)=>{t.constructor.createProperty(r,e)};function fe(e){return(t,r)=>void 0!==r?he(e,t,r):ue(e,t)}function ge(e){return(t,r)=>{const o={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==r?be(o,t,r):me(o,t)}}const be=(e,t,r)=>{Object.defineProperty(t,r,e)},me=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),xe="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ye=Symbol();class we{constructor(e,t){if(t!==ye)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(xe?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ve=e=>new we(String(e),ye),ke=(e,...t)=>{const r=t.reduce((t,r,o)=>t+(e=>{if(e instanceof we)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[o+1],e[0]);return new we(r,ye)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const _e=e=>e.flat?e.flat(1/0):function e(t,r=[]){for(let o=0,n=t.length;o<n;o++){const n=t[o];Array.isArray(n)?e(n,r):r.push(n)}return r}(e);class Se extends ce{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){_e(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?xe?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof S&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}Se.finalized=!0,Se.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const o=r.scopeName,n=L.has(t),i=X&&11===t.nodeType&&!!t.host,a=i&&!Q.has(o),s=a?document.createDocumentFragment():t;if($(e,s,Object.assign({templateFactory:Y(o)},r)),a){const e=L.get(s);L.delete(s);const r=e.value instanceof k?e.value.template:void 0;Z(o,s,r),c(t,t.firstChild),t.appendChild(s),L.set(t,e)}!n&&i&&window.ShadyCSS.styleElement(t.host)};const Ce=ke`
    :host > *, html {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      --general-menu-background-color-r: 255;
      --general-menu-background-color-g: 255;
      --general-menu-background-color-b: 255;
      --general-menu-background-color-3: rgba(var(--general-menu-background-color-r),
      var(--general-menu-background-color-g),
      var(--general-menu-background-color-b),
      1.0);
      --general-menu-background-color-2: var(--paper-grey-200);
      --general-menu-background-color: var(--paper-green-600);
      --general-menu-background-color-less: rgba(255, 255, 255, 0.6);
      --general-menu-background-border: rgba(23, 23, 23, 1);
      --general-menu-background-opacity: 1;
      --general-menu-color-2: #242424;
      --general-menu-color: #efefef;
      --general-navbar-footer-background-color-r: 255;
      --general-navbar-footer-background-color-g: 255;
      --general-navbar-footer-background-color-b: 255;
      --general-navbar-footer-background-color: rgba(255, 255, 255, 0.95);
      --general-navbar-footer-background-color-less: rgba(255, 255, 255, 0.6);
      --general-navbar-footer-background-border: rgba(23, 23, 23, 1);
      --general-navbar-footer-background-opacity: 1;
      --general-navbar-footer-color: #424242;
      --general-panel-width: 280px;
      --general-big-panel-width: 560px;
      --general-content-container-width: 980px;
      --general-background-color: rgba(244, 245, 247, 1);
      --general-sidebar-color: #dddddd;
      --general-sidebar-background-color: rgba(24, 24, 24, 1.0);
      --general-sidebar-h3-color: #424242;
      --general-sidebar-h3-border-color: 1px solid #dddddd;
      --general-sidebar-topbar-background-color-3: #383e48;
      --general-sidebar-topbar-background-color-2: rgba(103, 172, 91, 1.00);
      --general-sidebar-topbar-background-color-4: var(--paper-grey-200);
      --general-sidebar-topbar-color-4: #222222;
      --general-sidebar-topbar-background-color: rgba(24, 24, 24, 1);
      --general-sidebar-topbar-color: #efefef;
      --general-sidebar-topbar-shadow: {
      };
      --general-sidebar-selected-color: var(--paper-green-400);
      --general-sidebar-selected-background-color: rgba(244, 245, 247, 1); /* removed transparent */
      --general-sidebar-selected-background-gradient-color: transparent;
      --general-sidebar-selected-border-left: 5px solid #2ab6f6;
      --general-sidebar-footer-color: #777777;
      --general-sidebar-navbar-footer-color: #222222;
      --general-sidebar-item-even-background-color: transparent;
      --general-sidebar-item-odd-background-color: rgba(239, 240, 242, 0.95);
      --general-dialog-background-color: #ffffff;
      --app-drawer-width: 190px;
      --general-font-family: 'Quicksand', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", AppleSDGothic, "Apple SD Gothic Neo", NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
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

    neon-animated-pages .iron-selected {
      position: static;
    }

    neon-animated-pages .iron-selected:not(.neon-animating) {
      position: relative;
    }

    span,
    iron-icon {
      pointer-events: none;
    }

    body,
    .fonts-loaded body {
      font-family: 'Quicksand', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans KR", "Noto Sans", AppleSDGothic, NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
    }

    section {
      padding: 5px 0;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }

    fieldset {
      padding: 20px;
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
      margin-left: 16px;
      padding-right: 5px;
    }

    #main-panel-toolbar-buttons paper-icon-button {
      min-width: 40px;
    }

    #main-panel-toolbar-title {
      padding-top: 4px;
      line-height: 22px;
      height: 30px;
      overflow: hidden;
    }

    #main-panel-toolbar-title-condensed {
      font-size: 12px;
      padding-top: 3px;
      overflow: hidden;
    }

    .clearfix:after {
      content: ".";
      visibility: hidden;
      display: block;
      height: 0;
      clear: both;
    }

    ul.errorlist {
      margin: 0;
      padding: 0;
    }

    .errorlist li {
      background-color: #ff7701;
      color: white;
      display: block;
      margin: 0 0 3px;
      padding: 4px 5px;
    }

    @media screen and (max-width: 699px) {
      #toolbar-username, #toolbar-back-button {
        display: none;
      }
    }

    .copy-link-input {
      font-size: inherit;
      border: 0;
      border-bottom: 1px solid #eeeeee;
      width: 100%;
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

    .drawer-menu {
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;
      /* pointer-events: none; */
      will-change: transform;
      /*@apply --shadow-elevation-4dp;*/
      /*border-bottom-right-radius: 20px;*/
      background-color: var(--general-sidebar-background-color, #fafafa);
    }

    app-drawer-layout:not([narrow]) [drawer-toggle] {
      display: none;
    }

    ::-webkit-scrollbar {
      max-width: 2px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 6px;
      background-color: #464646;
    }

    .drawer-menu::-webkit-scrollbar {
      display: none !important;
    }

    #portrait-bar {
      height: 48px;
    }

    #main-toolbar {
      background-color: var(--general-menu-background-color);
      color: var(--general-menu-color);
      z-index: 1;
      overflow: visible;
    }

    #main-toolbar h2 {
      margin: 0 0 0 15px;
      font-weight: 300;
    }

    .drawer-menu footer {
      bottom: 0;
      color: var(--general-sidebar-footer-color, #aaaaaa);
      background-color: var(--general-sidebar-background-color);
      margin: 0;
      padding-bottom: 5px;
      font-size: 10px;
    }

    .drawer-menu footer a {
      color: var(--general-sidebar-footer-color, #aaaaaa) !important;
    }

    #sidebar-navbar-footer {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0 !important; /* Workaround to prevent miscalculated height */
      text-align: center;
      height: 45px;
      border-top: 1px solid #eeeeee;
      background-color: var(--general-navbar-footer-background-color);
      color: var(--general-sidebar-navbar-footer-color);
    }

    #app-navbar-footer {
      position: fixed;
      display: none;
      right: 0;
      bottom: 0;
      left: 0;
      text-align: left;
      height: 245px;
      width: 100%;
      border-top: 1px solid #eeeeee;
      background-color: var(--general-navbar-footer-background-color);
      color: var(--general-navbar-footer-color);
      z-index: 1;
      --app-toolbar-font-size: 14px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
    }

    #app-navbar-footer,
    #sidebar-navbar-footer {
      background-color: var(--general-navbar-footer-background-color);
    }

    #app-navbar-footer:before,
    #sidebar-navbar-footer:before {
      content: "";
      position: absolute;
      top: -1px;
      display: block;
      width: 100%;
      height: 1px;
      background-color: rgba(214, 214, 214, 0.4);
    }

    @supports ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))) {
      #main-toolbar .bar {
        /*-webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);*/
      }

      #app-navbar-footer,
      #sidebar-navbar-footer {
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);
      }

      #app-navbar-footer,
      #sidebar-navbar-footer {
        border: 0px none;
      }

      #app-navbar-footer:before,
      #sidebar-navbar-footer:before {
        content: "";
        position: absolute;
        top: -1px;
        display: block;
        width: 100%;
        height: 1px;
        background-color: rgba(214, 214, 214, 0.4);
      }
    }

    .item paper-header-panel {
      width: 280px;
      height: 280px;
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

    paper-checkbox {
      display: block;
      margin-bottom: 40px;
    }

    iron-icon.tiny {
      --iron-icon-height: 12px;
      --iron-icon-width: 12px;
    }

    wl-card {
      display: block;
      background: white;
      box-sizing: border-box;
      margin: 16px;
      padding: 0;
      border-radius: 2px;
    }

    #content > wl-card {
      max-width: var(--general-content-container-width, 980px);
    }

    @media screen and (max-width: 399px) {
      wl-card {
        margin-left: 0;
        margin-right: 0;
      }
    }

    @media screen and (max-width: 449px) {
      #content > wl-card {
        width: 100%;
      }

      #app-navbar-footer {
        display: flex;
      }

      #sidebar-navbar-footer {
        border-top: 1px solid #eeeeee;
        background-color: var(--general-navbar-footer-background-color);
        color: var(--general-sidebar-navbar-footer-color);
      }
    }

    @media screen and (min-width: 450px) {
      #content > wl-card,
      #content > div {
        width: 95%;
      }

      #app-navbar-footer {
        display: none;
      }

      #sidebar-navbar-footer {
        border-top: 1px solid var(--general-sidebar-background-color);
        background-color: var(--general-sidebar-background-color);
        color: var(--general-sidebar-color);
      }
    }

    @media screen and (max-width: 899px) {
      .item div.layout {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }
    }

    wl-card p {
      padding: 10px;
    }

    wl-card > .entry > p {
      padding: 5px;
    }

    wl-card .commands {
      margin: 0;
      border-top: 1px solid #dddddd;
      text-align: left;
    }

    wl-card.item div.items {
      padding-bottom: 10px;
    }

    wl-card .commands.float {
      border-top: none;
      position: fixed;
      right: 0;
      bottom: 0;
      left: 0;
    }

    .panels wl-card {
      width: var(--general-panel-width);
    }

    .wide-panels {
      margin: 0 0 10px 0;
    }

    .wide-panels wl-card {
      width: 100%;
      margin: 0 0 16px 0;
    }

    paper-dialog form {
      margin-bottom: 0;
    }

    .commands-float {
      display: block;
      position: fixed;
      text-align: right;
      min-width: 250px;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: none;
      overflow: -moz-scrollbars-none;
      bottom: 52px;
      right: 12px;
      z-index: 10;
    }

    .commands-float::-webkit-scrollbar {
      display: none;
    }

    .commands-float a {
      display: block;
      margin: 5px;
      display: -ms-inline-flexbox;
      display: -webkit-inline-flex;
      display: inline-flex;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      margin-left: auto;
    }

    .commands-float a > span {
      margin-top: 0;
      padding: 3px 5px 3px 5px;
      margin-right: 15px;
      border-radius: 5px;
      background: rgba(225, 225, 225, 0.5);
    }

    .backbutton-float {
      display: block;
      position: fixed;
      text-align: left;
      bottom: 12px;
      left: 12px;
      z-index: 20;
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

    .icon-box {
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -ms-flex-direction: row;
      -webkit-flex-direction: row;
      flex-direction: row;
    }

    .icon-box iron-icon {
      width: 24px;
      margin-top: 2px;
    }

    .icon-box p {
      -ms-flex: 1 1 0.000000001px;
      -webkit-flex: 1;
      flex: 1;
      -webkit-flex-basis: 0.000000001px;
      flex-basis: 0.000000001px;
      margin: 0;
      padding: 5px;
    }

    paper-listbox.sidebar {
      cursor: pointer;
      color: var(--general-sidebar-color, #eeeeee);;
    }

    paper-listbox.sidebar a.iron-selected paper-item {
      color: var(--general-sidebar-selected-color, #eeeeee);
      background: var(--general-sidebar-selected-background-color, #23252b);
      border-left: var(--general-sidebar-selected-border-left);
      padding-left: 11px;
      border-right: 0;
      padding-right: 11px;
      font-weight: 900;

    }

    paper-toolbar span.welcome {
      margin-right: 30px;
      color: var(--general-menu-color);
    }

    paper-toolbar a {
      color: var(--general-menu-color);
    }

    wl-card > h3 {
      font-size: 20px;
      font-weight: 400;
      padding: 10px 20px;
      margin: 0;
      display: block;
      border-bottom: 1px solid #dddddd;
    }

    wl-card > h3 > .date {
      font-size: 12px;
      text-align: right;
      color: #888888;
      margin-left: 20px;
    }

    wl-card > h3.blue,
    wl-card > h4.blue {
      border-left: 3px solid var(--paper-light-blue-400);
    }

    wl-card > h3.red,
    wl-card > h4.red {
      border-left: 3px solid var(--paper-red-400);
    }

    wl-card > h3.green,
    wl-card > h4.green {
      border-left: 3px solid var(--paper-green-400);
    }

    wl-card > h3.orange,
    wl-card > h4.orange {

      border-left: 3px solid var(--paper-orange-400);
    }

    wl-card > h3.cyan,
    wl-card > h4.cyan {

      border-left: 3px solid var(--paper-cyan-400);
    }

    wl-card > h3.lime,
    wl-card > h4.lime {
      border-left: 3px solid var(--paper-lime-400);
    }

    wl-card > h3.pink,
    wl-card > h4.pink {
      border-left: 3px solid var(--paper-pink-400);
    }

    wl-card > h4 {
      font-size: 14px;
      padding: 5px 15px 5px 20px;
      margin: 0 0 10px 0;
      display: block;
      border-bottom: 1px solid #dddddd;
      -ms-flex-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
    }

    wl-card .flex {
      display: flex;
    }

    wl-card.entries > div {
      margin: 20px;
    }

    paper-toolbar {
      --paper-toolbar-sm-height: 45px;
    }

    .activity-counter {
      text-align: center;
    }

    lablup-activity-panel div[slot="message"] small {
      display: block;
      font-size: 10px;
    }

    lablup-activity-panel div[slot="message"] a {
      color: #2196f3;
    }

    lablup-activity-panel div[slot="message"] paper-button {
      margin-top: 10px;
      margin-bottom: 0;
    }

    .drawer-menu paper-badge {
      --paper-badge-background: var(--paper-light-blue-50);
      --paper-badge-opacity: 0.7;
      --paper-badge-text-color: #222222;
    }

    .bar paper-badge {
      --paper-badge-background: var(--paper-light-blue-50);
      --paper-badge-opacity: 0.7;
      --paper-badge-text-color: #222222;
      z-index: 1;
      --paper-badge-margin-left: -20px;
      --paper-badge-margin-bottom: -40px;
    }

    .bg-blue {
      background-color: var(--paper-light-blue-400);
    }

    .bg-red {
      background-color: var(--paper-red-400);
    }

    .bg-yellow {
      background-color: var(--paper-yellow-400);
    }

    .bg-orange {
      background-color: var(--paper-amber-400);
    }

    .bg-green {
      background-color: var(--paper-green-400);
    }

    .bg-cyan {
      background-color: var(--paper-cyan-400);
    }

    .bg-lime {
      background-color: var(--paper-lime-400);
    }

    .bg-pink {
      background-color: var(--paper-pink-a200);
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
    }

    .fg.red {
      color: var(--paper-red-400) !important;
    }

    .fg.yellow {
      color: var(--paper-yellow-400) !important;
    }

    .fg.orange {
      color: var(--paper-amber-400) !important;
    }

    .fg.green {
      color: var(--paper-green-400) !important;
    }

    .fg.cyan {
      color: var(--paper-cyan-400) !important;
    }

    .fg.lime {
      color: var(--paper-lime-400) !important;
    }

    .fg.pink {
      color: var(--paper-pink-a200) !important;
    }

    /* Drawer */

    .drawer-menu .portrait-bar {
      padding-left: 0 !important;
      background-color: transparent;
      color: var(--general-sidebar-topbar-color);
      height: 80px;
      @apply --general-sidebar-topbar-shadow;
    }

    .drawer-menu a {
      color: #dddddd;
    }

    .drawer-menu iron-icon {
      margin-right: 15px;
    }

    .drawer-menu h3 {
      font-size: 12px;
      font-weight: 400;
      padding: 5px 15px;
      margin: 0;
      display: block;
      color: var(--general-sidebar-h3-color);
      border-bottom: var(--general-sidebar-h3-border-color);
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

    wl-card > h4 {
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
    wl-card h3.tab {
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 0;
    }

    /* Button */
    wl-button {
      --button-padding: 8px;
      --button-font-size: 14px;
    }

    wl-button,
    wl-expansion {
      --font-family-serif: var(--general-font-family);
      --font-family-sans-serif: var(--general-font-family);
    }

    wl-dialog > wl-card {
      --card-elevation: 0;
    }

    wl-dialog > wl-card > section {
      margin: 5px 20px;
    }

    wl-dialog wl-title {
      border-bottom: 1px solid #cccccc;
    }

    wl-dialog wl-button.cancel {
      margin-right: 5px;
    }

    wl-dialog wl-button.ok {
      margin-right: 5px;
    }

    wl-dialog.dialog-ask {
      --dialog-min-width: 350px;
    }

    wl-dialog > wl-card > h3 {
      background-color: var(--general-dialog-background-color, #ffffff);
    }

    vaadin-grid {
      font-family: var(--general-font-family);
      }
  `;function Pe(e,t){e.tabIndex=t?-1:e.tabIndex<0?0:e.tabIndex}function Ne(e){return ve(e)}function Ee(e,t){for(const r in t){const o=!0===t[r]?"":t[r];o||""===o||0===o?e.getAttribute(r)!==o&&e.setAttribute(r,o.toString()):e.hasAttribute(r)&&e.removeAttribute(r)}}function Ae(e,t){if(null==e.shadowRoot)return[];const r=e.shadowRoot.host.getRootNode(),o=r.querySelectorAll(t);return o.length>0?Array.from(o):Ae(r,t)}function Te(e=document.activeElement){return null!=e&&null!=e.shadowRoot&&null!=e.shadowRoot.activeElement?Te(e.shadowRoot.activeElement):e}function Re(e){return Array.from(e.querySelector("slot").assignedNodes()).filter(e=>"#text"!==e.nodeName)}function je(e){for(;e.firstChild;)e.firstChild.remove()}function Ve(e,t){return null!=t?"none"===t.display:null===e.offsetParent}const ze=new Map;function Oe(e,t,r){const o=ze.get(r);null!=o&&window.clearTimeout(o),ze.set(r,window.setTimeout(()=>{e(),ze.delete(r)},t))}function Me(e,t,r,o,n){const i=Array.isArray(t)?t:[t],a=Math.random().toString(),s=e=>null==n?r(e):Oe(()=>r(e),n,a);return i.forEach(t=>e.addEventListener(t,s,o)),()=>i.forEach(t=>e.removeEventListener(t,s,o))}function Be(e){e.forEach(e=>e()),e.length=0}function Ue(e){e.preventDefault(),e.stopPropagation()}const Ie=a(e=>t=>{if(void 0===e&&t instanceof A){if(e!==t.value){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else t.setValue(e)}),Le="Space",$e="Enter",qe="Escape",Fe="ArrowRight",De="ArrowLeft",He="ArrowUp",We="ArrowDown";function Ge(e=10){return`_${Math.random().toString(36).substr(2,e)}`}const Je=Ne("*{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}");class Xe extends Se{constructor(){super(...arguments),this.disabled=!1,this.readonly=!1,this.required=!1,this.value="",this.formElementId=Ge(),this.listeners=[]}get validationMessage(){return this.$formElement.validationMessage}get valid(){return null==this.validity||this.validity.valid}get validity(){return this.$formElement.validity}get willValidate(){return this.$formElement.willValidate}get form(){return this.$formElement.form}checkValidity(){return this.$formElement.checkValidity()}setCustomValidity(e){return this.$formElement.setCustomValidity(e)}firstUpdated(e){super.firstUpdated(e),this.$formElement=this.queryFormElement(),this.appendChild(this.$formElement)}disconnectedCallback(){super.disconnectedCallback(),Be(this.listeners)}updated(e){super.updated(e),e.has("disabled")&&Ee(this,{"aria-disabled":this.disabled.toString()}),this.updateTabindex(e)}updateTabindex(e){e.has("disabled")&&Pe(this,this.disabled)}getFormItemValue(){return null!=this.$formElement?this.$formElement.value:this.initialValue||""}queryFormElement(){return this.shadowRoot.querySelector(`#${this.formElementId}`)}}function Ye(e,t,r){return e<t?t:e>r?r:e}function Ke(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))/2}function Qe(e,t){const r=function(e){return new WebKitCSSMatrix(e.webkitTransform)}(e);return{x:0===(null==t?e.getPropertyValue("width"):t.width)?0:r.a,y:0===(null==t?e.getPropertyValue("height"):t.height)?0:r.d}}Xe.styles=[Je,Ne("")],o([fe({type:Boolean,reflect:!0}),n("design:type",Boolean)],Xe.prototype,"disabled",void 0),o([fe({type:Boolean,reflect:!0}),n("design:type",Boolean)],Xe.prototype,"readonly",void 0),o([fe({type:Boolean,reflect:!0}),n("design:type",Boolean)],Xe.prototype,"required",void 0),o([fe({type:String}),n("design:type",String)],Xe.prototype,"name",void 0),o([fe({type:String}),n("design:type",String)],Xe.prototype,"value",void 0);const Ze={easing:"ease-out",fill:"both"};let et=class extends Se{constructor(){super(...arguments),this.unbounded=!1,this.centered=!1,this.overlay=!1,this.disabled=!1,this.focusable=!1,this.autoRelease=!1,this.initialDuration=350,this.releaseDuration=500,this.role="presentation",this.target=this,this.listeners=[],this.rippleAnimationListeners=[]}connectedCallback(){super.connectedCallback(),this.addListeners()}disconnectedCallback(){super.disconnectedCallback(),this.removeListeners()}updated(e){super.updated(e),e.has("target")&&null!=this.target&&(this.removeListeners(),this.addListeners())}addListeners(){null!=this.target&&this.listeners.push(Me(this.target,"mousedown",e=>this.spawnRipple(e),{passive:!0}),Me(this.target,"focusin",this.onFocusIn.bind(this),{passive:!0}),Me(this.target,"focusout",this.onFocusOut.bind(this),{passive:!0}))}removeListeners(){Be(this.listeners)}spawnRipple(e,t){if(this.disabled)return()=>{};this.releaseRipple();const r=this.getBoundingClientRect();let o=0,n=0;if(this.centered||null==e)o=r.width/2,n=r.height/2;else{let{clientX:t,clientY:i}=function(e){let t,r=!1;null!=e.changedTouches?(t=e.changedTouches[0],r=!0):t=e;let{clientX:o,clientY:n,pageX:i,pageY:a}=t;return{clientX:o,clientY:n,pageX:i,pageY:a,isTouch:r}}(e);o=t-r.left,n=i-r.top}const i=this.showRippleAtCoords({x:o,y:n},t);return this.rippleAnimationListeners.push(i),null==this.target||this.focusable||this.rippleAnimationListeners.push(Me(window,"mouseup",this.releaseRipple.bind(this),{passive:!0})),i}releaseRipple(){Be(this.rippleAnimationListeners)}showRippleAtCoords({x:e,y:t},r){const{offsetWidth:o,offsetHeight:n}=this,i=Qe(window.getComputedStyle(this)),{releaseDuration:a=this.releaseDuration,initialDuration:s=this.initialDuration,autoRelease:l=this.autoRelease}=r||{};e*=0===i.x?1:1/i.x,t*=0===i.y?1:1/i.y;const d=document.createElement("div");d.classList.add("ripple");const c=Ke(o,n),p=Ke(Math.abs(o/2-e),Math.abs(n/2-t)),u=Math.round(c+2*p),h=2*u;Object.assign(d.style,{left:`${e-u}px`,top:`${t-u}px`,height:`${h}px`,width:`${h}px`,position:"absolute"});let f=!1;const g=()=>{if(f)return;f=!0;const e=function(e){if("0px"===e.getPropertyValue("width")||"0px"===e.getPropertyValue("height"))return 0;const t=e.getPropertyValue("opacity");return isNaN(+t)?0:Number(t)}(window.getComputedStyle(d));d.animate({opacity:[e.toString(),"0"]},{...Ze,duration:a}).onfinish=()=>{requestAnimationFrame(()=>{this.shadowRoot.contains(d)&&this.shadowRoot.removeChild(d)})}};return this.shadowRoot.appendChild(d),l&&g(),d.animate({transform:["scale(0)","scale(1)"]},{...Ze,duration:s}),g}onFocusIn(){this.focusable&&this.spawnRipple(void 0,{autoRelease:!1})}onFocusOut(){this.focusable&&this.releaseRipple()}render(){return q``}};et.styles=[Je,Ne(":host{position:relative;display:block;outline:none;-webkit-user-select:none;user-select:none}:host(:not([unbounded])){overflow:hidden}:host([overlay]){position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%)}.ripple{background:var(--ripple-color,currentcolor);opacity:var(--ripple-opacity,.15);border-radius:100%;pointer-events:none;will-change:opacity,transform}")],o([fe({type:Boolean,reflect:!0}),n("design:type",Boolean)],et.prototype,"unbounded",void 0),o([fe({type:Boolean,reflect:!0}),n("design:type",Boolean)],et.prototype,"centered",void 0),o([fe({type:Boolean,reflect:!0}),n("design:type",Boolean)],et.prototype,"overlay",void 0),o([fe({type:Boolean,reflect:!0}),n("design:type",Boolean)],et.prototype,"disabled",void 0),o([fe({type:Boolean,reflect:!0}),n("design:type",Boolean)],et.prototype,"focusable",void 0),o([fe({type:Boolean,reflect:!0}),n("design:type",Boolean)],et.prototype,"autoRelease",void 0),o([fe({type:Number}),n("design:type",Number)],et.prototype,"initialDuration",void 0),o([fe({type:Number}),n("design:type",Number)],et.prototype,"releaseDuration",void 0),o([fe({type:String,reflect:!0}),n("design:type",String)],et.prototype,"role",void 0),o([fe({type:Object}),n("design:type",EventTarget)],et.prototype,"target",void 0),et=o([pe("wl-ripple")],et);let tt=class extends Se{constructor(){super(...arguments),this.hoverable=!1}render(){return q` <slot></slot> `}};tt.styles=[Je,Ne(":host{color:var(--card-color,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));background:var(--card-bg,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));transition:var(--card-transition,box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-ease,ease));box-shadow:var(--card-elevation,var(--elevation-1,0 .3125rem .625rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)));border-radius:var(--card-border-radius,.5rem);padding:var(--card-padding,0);display:flex;flex-direction:column;text-align:left}:host([hoverable]:hover){box-shadow:var(--card-elevation-hover,var(--elevation-4,0 .5rem 1rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)))}")],o([fe({reflect:!0,type:Boolean}),n("design:type",Boolean)],tt.prototype,"hoverable",void 0),tt=o([pe("wl-card")],tt);const rt=ke`
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
  `,ot=(ke`
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
  `,ke`

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
  `),nt=ke`
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
    }`,it=ke`
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
  `;export{A,Ce as B,Be as C,qe as D,$e as E,Xe as F,He as G,De as H,rt as I,We as J,Fe as K,Se as L,Ae as M,T as N,Pe as O,V as P,u as Q,et as R,Le as S,Re as T,$ as U,Ve as V,t as _,r as a,o as b,ke as c,a as d,pe as e,ot as f,nt as g,q as h,it as i,Ne as j,n as k,Me as l,Ie as m,p as n,je as o,fe as p,ge as q,Ee as r,Ue as s,U as t,Je as u,Ye as v,F as w,Oe as x,Ge as y,Te as z};
