import{d as t,q as e,w as o,v as s,K as r}from"./vaadin-grid-69a293c4.js";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function n(t,e,o,s,r){let n;r&&(n="object"==typeof o&&null!==o,n&&(s=t.__dataTemp[e]));let a=s!==o&&(s==s||o==o);return n&&a&&(t.__dataTemp[e]=o),a}const a=t((t=>class extends t{_shouldPropertyChange(t,e,o){return n(this,t,e,o,!0)}})),_=t((t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,o){return n(this,t,e,o,this.mutableData)}}));a._mutablePropertyChange=n;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let l=null;function i(){return l}i.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:i,writable:!0}});const p=e(i),d=a(p);const c=e(class{});function h(t,e){for(let s=0;s<e.length;s++){let r=e[s];if(Boolean(t)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)t?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"===r.localName)if(t)r.__polymerReplaced__=document.createComment("hidden-slot"),o(o(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{const t=r.__polymerReplaced__;t&&o(o(t).parentNode).replaceChild(r,t)}else r.style&&(t?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=t,r._showHideChildren&&r._showHideChildren(t)}}class m extends c{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let o=this.__templatizeOptions;(t&&o.instanceProps||!o.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,o){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,(t=>{t.model=this,o(t)}));else{let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(t,e,o)}}_showHideChildren(t){h(t,this.children)}_setUnmanagedPropertyToNode(t,e,o){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=o:super._setUnmanagedPropertyToNode(t,e,o)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}m.prototype.__dataHost,m.prototype.__templatizeOptions,m.prototype._methodHost,m.prototype.__templatizeOwner,m.prototype.__hostProps;const f=a(m);function u(t){let e=t.__dataHost;return e&&e._methodHost||e}function y(t,e,o){let s=o.mutableData?f:m;O.mixin&&(s=O.mixin(s));let r=class extends s{};return r.prototype.__templatizeOptions=o,r.prototype._bindTemplate(t),function(t,e,o,s){let r=o.hostProps||{};for(let e in s.instanceProps){delete r[e];let o=s.notifyInstanceProp;o&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:H(e,o)})}if(s.forwardHostProp&&e.__dataHost)for(let e in r)o.hasHostProps||(o.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,o){t.__dataHost._setPendingPropertyOrPath("_host_"+e,o[e],!0,!0)}})}(r,t,e,o),r}function P(t,e,o,s){let n=o.forwardHostProp;if(n&&e.hasHostProps){const i="template"==t.localName;let c=e.templatizeTemplateClass;if(!c){if(i){let t=o.mutableData?d:p;class s extends t{}c=e.templatizeTemplateClass=s}else{const o=t.constructor;class s extends o{}c=e.templatizeTemplateClass=s}let a=e.hostProps;for(let t in a)c.prototype._addPropertyEffect("_host_"+t,c.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:T(t,n)}),c.prototype._createNotifyingProperty("_host_"+t);r&&s&&function(t,e,o){const s=o.constructor._properties,{propertyEffects:r}=t,{instanceProps:n}=e;for(let t in r)if(!(s[t]||n&&n[t])){const e=r[t];for(let o=0;o<e.length;o++){const{part:s}=e[o].info;if(!s.signature||!s.signature.static){console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(e,o,s)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),i)_=c,l=a=t,Object.setPrototypeOf(a,_.prototype),new _,l=null,t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,c.prototype);const o=e.hostProps;for(let e in o)if(e="_host_"+e,e in t){const o=t[e];delete t[e],t.__data[e]=o}}}var a,_}function T(t,e){return function(t,o,s){e.call(t.__templatizeOwner,o.substring("_host_".length),s[o])}}function H(t,e){return function(t,o,s){e.call(t.__templatizeOwner,t,o,s[o])}}function O(t,e,o){if(s&&!u(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(o=o||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let r=(e?e.constructor:m)._parseTemplate(t),n=r.templatizeInstanceClass;n||(n=y(t,r,o),r.templatizeInstanceClass=n);const a=u(t);P(t,r,o,a);let _=class extends n{};return _.prototype._methodHost=a,_.prototype.__dataHost=t,_.prototype.__templatizeOwner=e,_.prototype.__hostProps=r.hostProps,_=_,_}function C(t,e){let s;for(;e;)if(s=e.__dataHost?e:e.__templatizeInstance){if(s.__dataHost==t)return s;e=s.__dataHost}else e=o(e).parentNode;return null}export{_ as O,C as m,h as s,O as t};
