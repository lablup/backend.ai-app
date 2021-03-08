import{a7 as e,b as t}from"./backend-ai-webui-a8a7eec7.js";class s extends HTMLElement{static get version(){return"1.6.1"}}customElements.define("vaadin-lumo-styles",s);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let i,r=null,n=window.HTMLImports&&window.HTMLImports.whenReady||null;function o(e){requestAnimationFrame((function(){n?n(e):(r||(r=new Promise((e=>{i=e})),"complete"===document.readyState?i():document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&i()}))),r.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const a="__shadyCSSCachedStyle";let l=null,h=null;class d{constructor(){this.customStyles=[],this.enqueued=!1,o((()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()}))}enqueueDocumentValidation(){!this.enqueued&&h&&(this.enqueued=!0,o(h))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[a])return e[a];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const s=e[t];if(s[a])continue;const i=this.getStyleForCustomStyle(s);if(i){const e=i.__appliedElement||i;l&&l(e),s[a]=e}}return e}}d.prototype.addCustomStyle=d.prototype.addCustomStyle,d.prototype.getStyleForCustomStyle=d.prototype.getStyleForCustomStyle,d.prototype.processStyles=d.prototype.processStyles,Object.defineProperties(d.prototype,{transformCallback:{get:()=>l,set(e){l=e}},validateCallback:{get:()=>h,set(e){let t=!1;h||(t=!0),h=e,t&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const c=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,u=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,p=/@media\s(.*)/;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function _(e,t){for(let s in t)null===s?e.style.removeProperty(s):e.style.setProperty(s,t[s])}function m(e,t){const s=window.getComputedStyle(e).getPropertyValue(t);return s?s.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const f=!(window.ShadyDOM&&window.ShadyDOM.inUse);let g,y;function b(e){g=(!e||!e.shimcssproperties)&&(f||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(y=window.ShadyCSS.cssBuild);const v=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?g=window.ShadyCSS.nativeCss:window.ShadyCSS?(b(window.ShadyCSS),window.ShadyCSS=void 0):b(window.WebComponents&&window.WebComponents.flags);const A=g,w=new d;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,s){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,s){},styleSubtree(e,t){w.processStyles(),_(e,t)},styleElement(e){w.processStyles()},styleDocument(e){w.processStyles(),_(document.body,e)},getComputedStyleValue:(e,t)=>m(e,t),flushCustomStyles(){},nativeCss:A,nativeShadow:f,cssBuild:y,disableRuntime:v}),window.ShadyCSS.CustomStyleInterface=w,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(e,t){return e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let C,x,S=/(url\()([^)]*)(\))/g,P=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function T(e,t){if(e&&P.test(e))return e;if("//"===e)return e;if(void 0===C){C=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",C="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),C)try{return new URL(e,t).href}catch(t){return e}return x||(x=document.implementation.createHTMLDocument("temp"),x.base=x.createElement("base"),x.head.appendChild(x.base),x.anchor=x.createElement("a"),x.body.appendChild(x.anchor)),x.base.href=t,x.anchor.href=e,x.anchor.href||e}function E(e,t){return e.replace(S,(function(e,s,i,r){return s+"'"+T(i.replace(/["']/g,""),t)+"'"+r}))}function I(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const O=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const z=O&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})();let N=window.Polymer&&window.Polymer.rootPath||I(document.baseURI||window.location.href),R=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,k=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,D=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,L=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,M=window.Polymer&&window.Polymer.legacyOptimizations||!1,F=window.Polymer&&window.Polymer.legacyWarnings||!1,H=window.Polymer&&window.Polymer.syncInitialRender||!1,B=window.Polymer&&window.Polymer.legacyUndefined||!1,$=window.Polymer&&window.Polymer.orderedComputed||!1,V=window.Polymer&&window.Polymer.removeNestedTemplates||!1,G=window.Polymer&&window.Polymer.fastDomIf||!1,j=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,U=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Y=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,q={},W={};function J(e,t){q[e]=W[e.toLowerCase()]=t}function X(e){return q[e]||W[e.toLowerCase()]}class Z extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let s=X(e);return s&&t?s.querySelector(t):s}return null}attributeChangedCallback(e,t,s,i){t!==s&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=T(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=I(t)}return this.__assetpath}register(e){if(e=e||this.id){if(D&&void 0!==X(e))throw J(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,J(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}Z.prototype.modules=q,customElements.define("dom-module",Z);function K(e){return Z.import(e)}function Q(e){const t=E((e.body?e.body:e).textContent,e.baseURI),s=document.createElement("style");return s.textContent=t,s}function ee(e){const t=e.trim().split(/\s+/),s=[];for(let e=0;e<t.length;e++)s.push(...te(t[e]));return s}function te(e){const t=K(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...ie(t));const s=t.querySelector("template");s&&e.push(...se(s,t.assetpath)),t._styles=e}return t._styles}function se(e,t){if(!e._styles){const s=[],i=e.content.querySelectorAll("style");for(let e=0;e<i.length;e++){let r=i[e],n=r.getAttribute("include");n&&s.push(...ee(n).filter((function(e,t,s){return s.indexOf(e)===t}))),t&&(r.textContent=E(r.textContent,t)),s.push(r)}e._styles=s}return e._styles}function ie(e){const t=[],s=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<s.length;e++){let i=s[e];if(i.import){const e=i.import,s=i.hasAttribute("shady-unscoped");if(s&&!e._unscopedStyle){const t=Q(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=Q(e));t.push(s?e._unscopedStyle:e._style)}}return t}function re(e){let t=K(e);if(t&&void 0===t._cssText){let e=function(e){let t="",s=ie(e);for(let e=0;e<s.length;e++)t+=s[e].textContent;return t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),s=t.querySelector("template");s&&(e+=function(e,t){let s="";const i=se(e,t);for(let e=0;e<i.length;e++){let t=i[e];t.parentNode&&t.parentNode.removeChild(t),s+=t.textContent}return s}(s,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const ne=window.ShadyCSS.CustomStyleInterface;class oe extends HTMLElement{constructor(){super(),this._style=null,ne.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=function(e){let t=e.trim().split(/\s+/),s="";for(let e=0;e<t.length;e++)s+=re(t[e]);return s}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",oe);const ae=document.createElement("template");ae.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ae.content);const le=document.createElement("template");le.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEcAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMAAAADZa/6SsaGhlYQAADhQAAAAdAAAAJAbpA35obXR4AAAONAAAABAAAACspBAAAGxvY2EAAA5EAAAAWAAAAFh55IAsbWF4cAAADpwAAAAfAAAAIAFKAXBuYW1lAAAOvAAAATEAAAIuUUJZCHBvc3QAAA/wAAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAA4pmJ6QHx/DZfGbiZXwBFGGpUNzQi6P+vmacy3QJyORiYQKIANoULVXicY2BkYGAO+p8FJF8wAAHzVAZGBlSgDQBW9gNvAAAAeJxjYGBgYH4xNDAAzwQmjwAAAAAATgCaAOgBCgEsAU4BcAGaAcQB7gIaApwC6ASaBLwE1gTyBQ4FKgV6BdAF/gZEBmYGtgcYB5AIGAhSCGoI/glGCb4J2goECjwKggq4CvALUAuWC7x4nGNgZGBg0GZMYRBlAAEmIOYCQgaG/2A+AwAYlAG8AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjtlugzAQRbkJUEJIuu/7vqR8lGNPAcWx0YAb5e/LklR96EgenSufGY038PqKvf9rhgGG8BEgxA4ijBBjjAQTTLGLPezjAIc4wjFOcIoznOMCl7jCNW5wizvc4wGPeMIzXvCKN7zjAzN8eonQRWZSSaYmjvug6ase98hFltexMJmmVNmV2WBvdNgZUc+ujAWzXW3UDnu1w43asStHc8GpzAXX/py0jqTQZJTgkcxJLpaCF0lD32xNt+43tAsn29Dft02uDKS2cjGUNgsk26qK2lFthYoU27INPqmiDqg5goe0pqR5qSoqMdek/CUZFywL46rEsiImleqiqoMyt4baXlu/1GLdNFf5zbcNmdr1YUWCZe47o+zUmb/DoStbw3cVsef9ALjjiPQA) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(le.content);const he=document.createElement("template");he.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(he.content);const de=document.createElement("template");de.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(de.content);const ce=document.createElement("template");ce.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(ce.content);const ue=document.createElement("template");ue.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ue.content);let pe=0;const _e={},me=(t,s,i)=>{const r=i&&i.moduleId||"custom-style-module-"+pe++;Array.isArray(s)||(s=s?[s]:[]),s.forEach((t=>{if(!(t instanceof e))throw new Error("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.");if(!_e[t]){const e=document.createElement("dom-module");e.innerHTML=`\n        <template>\n          <style>${t.toString()}</style>\n        </template>\n      `;const s="custom-style-module-"+pe++;e.register(s),_e[t]=s}}));const n=document.createElement("dom-module");if(t){const e=window.customElements&&window.customElements.get(t);e&&e.hasOwnProperty("__finalized")&&console.warn(`The custom element definition for "${t}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`),n.setAttribute("theme-for",t)}const o=i&&i.include||[];n.innerHTML=`\n    <template>\n      ${o.map((e=>`<style include=${e}></style>`))}\n      ${s.map((e=>`<style include=${_e[e]}></style>`))}\n    </template>\n  `,n.register(r)};me("vaadin-checkbox",t`
    :host {
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    [part='label']:not([empty]) {
      margin: 0.1875em 0.875em 0.1875em 0.375em;
    }

    [part='checkbox'] {
      width: calc(1em + 2px);
      height: calc(1em + 2px);
      margin: 0.1875em;
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      pointer-events: none;
      line-height: 1.2;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Needed to align the checkbox nicely on the baseline */
    [part='checkbox']::before {
      content: '\\2003';
    }

    /* Checkmark */
    [part='checkbox']::after {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border: 0 solid var(--lumo-primary-contrast-color);
      border-width: 0.1875em 0 0 0.1875em;
      box-sizing: border-box;
      transform-origin: 0 0;
      position: absolute;
      top: 0.8125em;
      left: 0.5em;
      transform: scale(0.55) rotate(-135deg);
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
      width: 0.625em;
      height: 1.0625em;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      transform: none;
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
      transition: opacity 0.25s;
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) [part='label'] ::slotted(*) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part='label']:not([empty]) {
      margin: 0.1875em 0.375em 0.1875em 0.875em;
    }

    /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
    :host(:hover) [part='checkbox']::after {
      transition: width 0.1s, height 0.25s;
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let fe=0;const ge=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let s=fe++;return function(i){let r=i.__mixinSet;if(r&&r[s])return i;let n=t,o=n.get(i);if(!o){o=e(i),n.set(i,o);let t=Object.create(o.__mixinSet||r||null);t[s]=!0,o.__mixinSet=t}return o}},ye=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function be(e){return e.indexOf(".")>=0}function ve(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function Ae(e,t){return 0===e.indexOf(t+".")}function we(e,t){return 0===t.indexOf(e+".")}function Ce(e,t,s){return t+s.slice(e.length)}function xe(e){if(Array.isArray(e)){let t=[];for(let s=0;s<e.length;s++){let i=e[s].toString().split(".");for(let e=0;e<i.length;e++)t.push(i[e])}return t.join(".")}return e}function Se(e){return Array.isArray(e)?xe(e).split("."):e.toString().split(".")}function Pe(e,t,s){let i=e,r=Se(t);for(let e=0;e<r.length;e++){if(!i)return;i=i[r[e]]}return s&&(s.path=r.join(".")),i}function Te(e,t,s){let i=e,r=Se(t),n=r[r.length-1];if(r.length>1){for(let e=0;e<r.length-1;e++){if(i=i[r[e]],!i)return}i[n]=s}else i[t]=s;return r.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ee={},Ie=/-[a-z]/g,Oe=/([A-Z])/g;function ze(e){return Ee[e]||(Ee[e]=e.indexOf("-")<0?e:e.replace(Ie,(e=>e[1].toUpperCase())))}function Ne(e){return Ee[e]||(Ee[e]=e.replace(Oe,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Re=0,ke=0,De=[],Le=0,Me=!1,Fe=document.createTextNode("");new window.MutationObserver((function(){Me=!1;const e=De.length;for(let t=0;t<e;t++){let e=De[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}De.splice(0,e),ke+=e})).observe(Fe,{characterData:!0});const He={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},Be={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},$e={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},Ve={run:e=>(Me||(Me=!0,Fe.textContent=Le++),De.push(e),Re++),cancel(e){const t=e-ke;if(t>=0){if(!De[t])throw new Error("invalid async handle: "+e);De[t]=null}}},Ge=Ve,je=ge((e=>class extends e{static createProperties(e){const t=this.prototype;for(let s in e)s in t||t._createPropertyAccessor(s)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,s){let i=this.__data[e],r=this._shouldPropertyChange(e,t,i);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=i),this.__data[e]=t,this.__dataPending[e]=t),r}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Ge.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,s=this.__dataOld;this._shouldPropertiesChange(e,t,s)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,s)),this.__dataCounter--}_shouldPropertiesChange(e,t,s){return Boolean(t)}_propertiesChanged(e,t,s){}_shouldPropertyChange(e,t,s){return s!==t&&(s==s||t==t)}attributeChangedCallback(e,t,s,i){t!==s&&this._attributeToProperty(e,s),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,s,i)}_attributeToProperty(e,t,s){if(!this.__serializing){const i=this.__dataAttributes,r=i&&i[e]||e;this[r]=this._deserializeValue(t,s||this.constructor.typeForProperty(r))}}_propertyToAttribute(e,t,s){this.__serializing=!0,s=arguments.length<3?this[e]:s,this._valueToNodeAttribute(this,s,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,s){const i=this._serializeValue(t);"class"!==s&&"name"!==s&&"slot"!==s||(e=ye(e)),void 0===i?e.removeAttribute(s):e.setAttribute(s,i)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})),Ue={};let Ye=HTMLElement.prototype;for(;Ye;){let e=Object.getOwnPropertyNames(Ye);for(let t=0;t<e.length;t++)Ue[e[t]]=!0;Ye=Object.getPrototypeOf(Ye)}const qe=ge((e=>{const t=je(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(ze(e[t]))}static attributeNameForProperty(e){return Ne(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const s=this;s.hasAttribute(e)||this._valueToNodeAttribute(s,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let s;switch(t){case Object:try{s=JSON.parse(e)}catch(t){s=e}break;case Array:try{s=JSON.parse(e)}catch(t){s=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:s=isNaN(e)?String(e):Number(e),s=new Date(s);break;default:s=super._deserializeValue(e,t)}return s}_definePropertyAccessor(e,t){!function(e,t){if(!Ue[t]){let s=e[t];void 0!==s&&(e.__data?e._setPendingProperty(t,s):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=s))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})),We={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Je=!1,Xe=!1;function Ze(e){(function(){if(!Je){Je=!0;const e=document.createElement("textarea");e.placeholder="a",Xe=e.placeholder===e.textContent}return Xe})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function Ke(e){let t=e.getAttribute("is");if(t&&We[t]){let s=e;for(s.removeAttribute("is"),e=s.ownerDocument.createElement(t),s.parentNode.replaceChild(e,s),e.appendChild(s);s.attributes.length;)e.setAttribute(s.attributes[0].name,s.attributes[0].value),s.removeAttribute(s.attributes[0].name)}return e}function Qe(e,t){let s=t.parentInfo&&Qe(e,t.parentInfo);if(!s)return e;for(let e=s.firstChild,i=0;e;e=e.nextSibling)if(t.parentIndex===i++)return e}function et(e,t,s,i){i.id&&(t[i.id]=s)}function tt(e,t,s){if(s.events&&s.events.length)for(let i,r=0,n=s.events;r<n.length&&(i=n[r]);r++)e._addMethodEventListenerToNode(t,i.name,i.value,e)}function st(e,t,s,i){s.templateInfo&&(t._templateInfo=s.templateInfo,t._parentTemplateInfo=i)}const it=ge((e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let s=e._templateInfo={};s.nodeInfoList=[],s.nestedTemplate=Boolean(t),s.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,s,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,s){return this._parseTemplateNode(e.content,t,s)}static _parseTemplateNode(e,t,s){let i=!1,r=e;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(t.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(r,t,s)||i,Ze(r),r.firstChild&&this._parseTemplateChildNodes(r,t,s),r.hasAttributes&&r.hasAttributes()&&(i=this._parseTemplateNodeAttributes(r,t,s)||i),i||s.noted}static _parseTemplateChildNodes(e,t,s){if("script"!==e.localName&&"style"!==e.localName)for(let i,r=e.firstChild,n=0;r;r=i){if("template"==r.localName&&(r=Ke(r)),i=r.nextSibling,r.nodeType===Node.TEXT_NODE){let s=i;for(;s&&s.nodeType===Node.TEXT_NODE;)r.textContent+=s.textContent,i=s.nextSibling,e.removeChild(s),s=i;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:n,parentInfo:s};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&n++}}static _parseTemplateNestedTemplate(e,t,s){let i=e,r=this._parseTemplate(i,t);return(r.content=i.content.ownerDocument.createDocumentFragment()).appendChild(i.content),s.templateInfo=r,!0}static _parseTemplateNodeAttributes(e,t,s){let i=!1,r=Array.from(e.attributes);for(let n,o=r.length-1;n=r[o];o--)i=this._parseTemplateNodeAttribute(e,t,s,n.name,n.value)||i;return i}static _parseTemplateNodeAttribute(e,t,s,i,r){return"on-"===i.slice(0,3)?(e.removeAttribute(i),s.events=s.events||[],s.events.push({name:i.slice(3),value:r}),!0):"id"===i&&(s.id=r,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let s=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,i=t.content||e.content,r=document.importNode(i,!0);r.__noInsertionPoint=!t.hasInsertionPoint;let n=r.nodeList=new Array(s.length);r.$={};for(let e,i=0,o=s.length;i<o&&(e=s[i]);i++){let s=n[i]=Qe(r,e);et(0,r.$,s,e),st(0,s,e,t),tt(this,s,e)}return r=r,r}_addMethodEventListenerToNode(e,t,s,i){let r=function(e,t,s){return e=e._methodHost||e,function(t){e[s]?e[s](t,t.detail):console.warn("listener method `"+s+"` not defined")}}(i=i||e,0,s);return this._addEventListenerToNode(e,t,r),r}_addEventListenerToNode(e,t,s){e.addEventListener(t,s)}_removeEventListenerFromNode(e,t,s){e.removeEventListener(t,s)}}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let rt=0;const nt=[],ot={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},at=/[A-Z]/;function lt(e,t,s){let i=e[t];if(i){if(!e.hasOwnProperty(t)&&(i=e[t]=Object.create(e[t]),s))for(let e in i){let t=i[e],s=i[e]=Array(t.length);for(let e=0;e<t.length;e++)s[e]=t[e]}}else i=e[t]={};return i}function ht(e,t,s,i,r,n){if(t){let o=!1;const a=rt++;for(let l in s){let h=t[r?ve(l):l];if(h)for(let t,d=0,c=h.length;d<c&&(t=h[d]);d++)t.info&&t.info.lastRun===a||r&&!ct(l,t.trigger)||(t.info&&(t.info.lastRun=a),t.fn(e,l,s,i,t.info,r,n),o=!0)}return o}return!1}function dt(e,t,s,i,r,n,o,a){let l=!1,h=t[o?ve(i):i];if(h)for(let t,d=0,c=h.length;d<c&&(t=h[d]);d++)t.info&&t.info.lastRun===s||o&&!ct(i,t.trigger)||(t.info&&(t.info.lastRun=s),t.fn(e,i,r,n,t.info,o,a),l=!0);return l}function ct(e,t){if(t){let s=t.name;return s==e||!(!t.structured||!Ae(s,e))||!(!t.wildcard||!we(s,e))}return!0}function ut(e,t,s,i,r){let n="string"==typeof r.method?e[r.method]:r.method,o=r.property;n?n.call(e,e.__data[o],i[o]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function pt(e,t,s){let i=ve(t);if(i!==t){return _t(e,Ne(i)+"-changed",s[t],t),!0}return!1}function _t(e,t,s,i){let r={value:s,queueProperty:!0};i&&(r.path=i),ye(e).dispatchEvent(new CustomEvent(t,{detail:r}))}function mt(e,t,s,i,r,n){let o=(n?ve(t):t)!=t?t:null,a=o?Pe(e,o):e.__data[t];o&&void 0===a&&(a=s[t]),_t(e,r.eventName,a,o)}function ft(e,t,s,i,r){let n=e.__data[t];R&&(n=R(n,r.attrName,"attribute",e)),e._propertyToAttribute(t,r.attrName,n)}function gt(e,t,s,i){let r=e[ot.COMPUTE];if(r)if($){rt++;const n=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const s=e[ot.COMPUTE];let i,{counts:r,ready:n,total:o}=function(e){const t=e.__computeInfo,s={},i=e[ot.COMPUTE],r=[];let n=0;for(let e in t){const i=t[e];n+=s[e]=i.args.filter((e=>!e.literal)).length+(i.dynamicFn?1:0)}for(let e in i)t[e]||r.push(e);return{counts:s,ready:r,total:n}}(e);for(;i=n.shift();){t.set(i,t.size);const e=s[i];e&&e.forEach((e=>{const t=e.info.methodInfo;--o,0==--r[t]&&n.push(t)}))}if(0!==o){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),o=[];for(let e in t)bt(e,r,o,n,i);let a;for(;a=o.shift();)vt(e,"",t,s,a)&&bt(a.methodInfo,r,o,n,i);Object.assign(s,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let n=t;for(;ht(e,r,n,s,i);)Object.assign(s,e.__dataOld),Object.assign(t,e.__dataPending),n=e.__dataPending,e.__dataPending=null}}const yt=(e,t,s)=>{let i=0,r=t.length-1,n=-1;for(;i<=r;){const o=i+r>>1,a=s.get(t[o].methodInfo)-s.get(e.methodInfo);if(a<0)i=o+1;else{if(!(a>0)){n=o;break}r=o-1}}n<0&&(n=r+1),t.splice(n,0,e)},bt=(e,t,s,i,r)=>{const n=t[r?ve(e):e];if(n)for(let t=0;t<n.length;t++){const o=n[t];o.info.lastRun===rt||r&&!ct(e,o.trigger)||(o.info.lastRun=rt,yt(o.info,s,i))}};function vt(e,t,s,i,r){let n=Tt(e,t,s,i,r);if(n===nt)return!1;let o=r.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,n,!0):(e[o]=n,!1)}function At(e,t,s,i,r,n,o){s.bindings=s.bindings||[];let a={kind:i,target:r,parts:n,literal:o,isCompound:1!==n.length};if(s.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||Ne(r)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let s=0;s<a.parts.length;s++){let i=a.parts[s];i.compoundIndex=s,wt(e,t,a,i,l)}}function wt(e,t,s,i,r){if(!i.literal)if("attribute"===s.kind&&"-"===s.target[0])console.warn("Cannot set attribute "+s.target+' because "-" is not a valid attribute starting character');else{let n=i.dependencies,o={index:r,binding:s,part:i,evaluator:e};for(let s=0;s<n.length;s++){let i=n[s];"string"==typeof i&&(i=Nt(i),i.wildcard=!0),e._addTemplatePropertyEffect(t,i.rootProperty,{fn:Ct,info:o,trigger:i})}}}function Ct(e,t,s,i,r,n,o){let a=o[r.index],l=r.binding,h=r.part;if(n&&h.source&&t.length>h.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let i=s[t];t=Ce(h.source,l.target,t),a._setPendingPropertyOrPath(t,i,!1,!0)&&e._enqueueClient(a)}else{let o=r.evaluator._evaluateBinding(e,h,t,s,i,n);o!==nt&&function(e,t,s,i,r){r=function(e,t,s,i){if(s.isCompound){let r=e.__dataCompoundStorage[s.target];r[i.compoundIndex]=t,t=r.join("")}"attribute"!==s.kind&&("textContent"!==s.target&&("value"!==s.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,r,s,i),R&&(r=R(r,s.target,s.kind,t));if("attribute"==s.kind)e._valueToNodeAttribute(t,r,s.target);else{let i=s.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[i]?t[ot.READ_ONLY]&&t[ot.READ_ONLY][i]||t._setPendingProperty(i,r)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,i,r)}}(e,a,l,h,o)}}function xt(e,t){if(t.isCompound){let s=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),i=t.parts,r=new Array(i.length);for(let e=0;e<i.length;e++)r[e]=i[e].literal;let n=t.target;s[n]=r,t.literal&&"property"==t.kind&&("className"===n&&(e=ye(e)),e[n]=t.literal)}}function St(e,t,s){if(s.listenerEvent){let i=s.parts[0];e.addEventListener(s.listenerEvent,(function(e){!function(e,t,s,i,r){let n,o=e.detail,a=o&&o.path;a?(i=Ce(s,i,a),n=o&&o.value):n=e.currentTarget[s],n=r?!n:n,t[ot.READ_ONLY]&&t[ot.READ_ONLY][i]||!t._setPendingPropertyOrPath(i,n,!0,Boolean(a))||o&&o.queueProperty||t._invalidateProperties()}(e,t,s.target,i.source,i.negate)}))}}function Pt(e,t,s,i,r,n){n=t.static||n&&("object"!=typeof n||n[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:n};for(let r,n=0;n<t.args.length&&(r=t.args[n]);n++)r.literal||e._addPropertyEffect(r.rootProperty,s,{fn:i,info:o,trigger:r});return n&&e._addPropertyEffect(t.methodName,s,{fn:i,info:o}),o}function Tt(e,t,s,i,r){let n=e._methodHost||e,o=n[r.methodName];if(o){let i=e._marshalArgs(r.args,t,s);return i===nt?nt:o.apply(n,i)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const Et=[],It=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function Ot(e){let t="";for(let s=0;s<e.length;s++){t+=e[s].literal||""}return t}function zt(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:Et};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let s=Nt(e);return s.literal||(t.static=!1),s}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function Nt(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),s={name:t,value:"",literal:!1},i=t[0];switch("-"===i&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':s.value=t.slice(1,-1),s.literal=!0;break;case"#":s.value=Number(t),s.literal=!0}return s.literal||(s.rootProperty=ve(t),s.structured=be(t),s.structured&&(s.wildcard=".*"==t.slice(-2),s.wildcard&&(s.name=t.slice(0,-2)))),s}function Rt(e,t,s){let i=Pe(e,s);return void 0===i&&(i=t[s]),i}function kt(e,t,s,i){const r={indexSplices:i};B&&!e._overrideLegacyUndefined&&(t.splices=r),e.notifyPath(s+".splices",r),e.notifyPath(s+".length",t.length),B&&!e._overrideLegacyUndefined&&(r.indexSplices=[])}function Dt(e,t,s,i,r,n){kt(e,t,s,[{index:i,addedCount:r,removed:n,object:t,type:"splice"}])}const Lt=ge((e=>{const t=it(qe(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return ot}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Mt.length){let e=Mt[Mt.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[ot.READ_ONLY];for(let s in e)t&&t[s]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[s]=this.__dataPending[s]=e[s])}_addPropertyEffect(e,t,s){this._createPropertyAccessor(e,t==ot.READ_ONLY);let i=lt(this,t,!0)[e];i||(i=this[t][e]=[]),i.push(s)}_removePropertyEffect(e,t,s){let i=lt(this,t,!0)[e],r=i.indexOf(s);r>=0&&i.splice(r,1)}_hasPropertyEffect(e,t){let s=this[t];return Boolean(s&&s[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,ot.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,ot.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,ot.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,ot.COMPUTE)}_setPendingPropertyOrPath(e,t,s,i){if(i||ve(Array.isArray(e)?e[0]:e)!==e){if(!i){let s=Pe(this,e);if(!(e=Te(this,e,t))||!super._shouldPropertyChange(e,t,s))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,s))return function(e,t,s){let i=e.__dataLinkedPaths;if(i){let r;for(let n in i){let o=i[n];we(n,t)?(r=Ce(n,o,t),e._setPendingPropertyOrPath(r,s,!0,!0)):we(o,t)&&(r=Ce(o,n,t),e._setPendingPropertyOrPath(r,s,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,s);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,s){s===e[t]&&"object"!=typeof s||("className"===t&&(e=ye(e)),e[t]=s)}_setPendingProperty(e,t,s){let i=this.__dataHasPaths&&be(e),r=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,r[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),i?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(i||this[ot.NOTIFY]&&this[ot.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=s),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let s=e[t];s.__dataEnabled?s.__dataPending&&s._flushProperties():s._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let s in e)!t&&this[ot.READ_ONLY]&&this[ot.READ_ONLY][s]||this._setPendingPropertyOrPath(s,e[s],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,s){let i,r=this.__dataHasPaths;this.__dataHasPaths=!1,gt(this,t,s,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,s,r),this._flushClients(),ht(this,this[ot.REFLECT],t,s,r),ht(this,this[ot.OBSERVE],t,s,r),i&&function(e,t,s,i,r){let n,o,a=e[ot.NOTIFY],l=rt++;for(let o in t)t[o]&&(a&&dt(e,a,l,o,s,i,r)||r&&pt(e,o,s))&&(n=!0);n&&(o=e.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,i,t,s,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,s){this[ot.PROPAGATE]&&ht(this,this[ot.PROPAGATE],e,t,s),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,s)}_runEffectsForTemplate(e,t,s,i){const r=(t,i)=>{ht(this,e.propertyEffects,t,s,i,e.nodeList);for(let r=e.firstChild;r;r=r.nextSibling)this._runEffectsForTemplate(r,t,s,i)};e.runEffects?e.runEffects(r,t,i):r(t,i)}linkPaths(e,t){e=xe(e),t=xe(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=xe(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let s={path:""};kt(this,Pe(this,e,s),s.path,t)}get(e,t){return Pe(t||this,e)}set(e,t,s){s?Te(s,e,t):this[ot.READ_ONLY]&&this[ot.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let s={path:""},i=Pe(this,e,s),r=i.length,n=i.push(...t);return t.length&&Dt(this,i,s.path,r,t.length,[]),n}pop(e){let t={path:""},s=Pe(this,e,t),i=Boolean(s.length),r=s.pop();return i&&Dt(this,s,t.path,s.length,0,[r]),r}splice(e,t,s,...i){let r,n={path:""},o=Pe(this,e,n);return t<0?t=o.length-Math.floor(-t):t&&(t=Math.floor(t)),r=2===arguments.length?o.splice(t):o.splice(t,s,...i),(i.length||r.length)&&Dt(this,o,n.path,t,i.length,r),r}shift(e){let t={path:""},s=Pe(this,e,t),i=Boolean(s.length),r=s.shift();return i&&Dt(this,s,t.path,0,0,[r]),r}unshift(e,...t){let s={path:""},i=Pe(this,e,s),r=i.unshift(...t);return t.length&&Dt(this,i,s.path,0,t.length,[]),r}notifyPath(e,t){let s;if(1==arguments.length){let i={path:""};t=Pe(this,e,i),s=i.path}else s=Array.isArray(e)?xe(e):e;this._setPendingPropertyOrPath(s,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var s;this._addPropertyEffect(e,ot.READ_ONLY),t&&(this["_set"+(s=e,s[0].toUpperCase()+s.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,s){let i={property:e,method:t,dynamicFn:Boolean(s)};this._addPropertyEffect(e,ot.OBSERVE,{fn:ut,info:i,trigger:{name:e}}),s&&this._addPropertyEffect(t,ot.OBSERVE,{fn:ut,info:i,trigger:{name:t}})}_createMethodObserver(e,t){let s=zt(e);if(!s)throw new Error("Malformed observer expression '"+e+"'");Pt(this,s,ot.OBSERVE,Tt,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,ot.NOTIFY,{fn:mt,info:{eventName:Ne(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,ot.REFLECT,{fn:ft,info:{attrName:t}})}_createComputedProperty(e,t,s){let i=zt(t);if(!i)throw new Error("Malformed computed expression '"+t+"'");const r=Pt(this,i,ot.COMPUTE,vt,e,s);lt(this,"__computeInfo")[e]=r}_marshalArgs(e,t,s){const i=this.__data,r=[];for(let n=0,o=e.length;n<o;n++){let{name:o,structured:a,wildcard:l,value:h,literal:d}=e[n];if(!d)if(l){const e=we(o,t),r=Rt(i,s,e?t:o);h={path:e?t:o,value:r,base:e?Pe(i,o):r}}else h=a?Rt(i,s,o):i[o];if(B&&!this._overrideLegacyUndefined&&void 0===h&&e.length>1)return nt;r[n]=h}return r}static addPropertyEffect(e,t,s){this.prototype._addPropertyEffect(e,t,s)}static createPropertyObserver(e,t,s){this.prototype._createPropertyObserver(e,t,s)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,s){this.prototype._createComputedProperty(e,t,s)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let s=this.constructor._parseTemplate(e),i=this.__preBoundTemplateInfo==s;if(!i)for(let e in s.propertyEffects)this._createPropertyAccessor(e);if(t)if(s=Object.create(s),s.wasPreBound=i,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,i=t.lastChild;s.parent=t,t.lastChild=s,s.previousSibling=i,i?i.nextSibling=s:t.firstChild=s}else this.__templateInfo=s;else this.__preBoundTemplateInfo=s;return s}static _addTemplatePropertyEffect(e,t,s){(e.hostProps=e.hostProps||{})[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(s)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),Mt.push(this);let s=super._stampTemplate(e,t);if(Mt.pop(),t.nodeList=s.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=s.firstChild;t;t=t.nextSibling)e.push(t)}return s.templateInfo=t,function(e,t){let{nodeList:s,nodeInfoList:i}=t;if(i.length)for(let t=0;t<i.length;t++){let r=i[t],n=s[t],o=r.bindings;if(o)for(let t=0;t<o.length;t++){let s=o[t];xt(n,s),St(n,e,s)}n.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),s}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:s,nextSibling:i,parent:r}=t;s?s.nextSibling=i:r&&(r.firstChild=i),i?i.previousSibling=s:r&&(r.lastChild=s),t.nextSibling=t.previousSibling=null;let n=t.childNodes;for(let e=0;e<n.length;e++){let t=n[e];ye(ye(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,s,i){let r=t._parseTemplateNode.call(this,e,s,i);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,s);t&&(e.textContent=Ot(t)||" ",At(this,s,i,"text","textContent",t),r=!0)}return r}static _parseTemplateNodeAttribute(e,s,i,r,n){let o=this._parseBindings(n,s);if(o){let t=r,n="property";at.test(r)?n="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),n="attribute");let a=Ot(o);return a&&"attribute"==n&&("class"==r&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(r)),e.setAttribute(r,a)),"attribute"==n&&"disable-upgrade$"==t&&e.setAttribute(r,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===n&&(r=ze(r)),At(this,s,i,n,r,o,a),!0}return t._parseTemplateNodeAttribute.call(this,e,s,i,r,n)}static _parseTemplateNestedTemplate(e,s,i){let r=t._parseTemplateNestedTemplate.call(this,e,s,i);const n=e.parentNode,o=i.templateInfo,a="dom-if"===n.localName,l="dom-repeat"===n.localName;V&&(a||l)&&(n.removeChild(e),(i=i.parentInfo).templateInfo=o,i.noted=!0,r=!1);let h=o.hostProps;if(G&&a)h&&(s.hostProps=Object.assign(s.hostProps||{},h),V||(i.parentInfo.noted=!0));else{let e="{";for(let t in h){At(this,s,i,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}}return r}static _parseBindings(e,t){let s,i=[],r=0;for(;null!==(s=It.exec(e));){s.index>r&&i.push({literal:e.slice(r,s.index)});let n=s[1][0],o=Boolean(s[2]),a=s[3].trim(),l=!1,h="",d=-1;"{"==n&&(d=a.indexOf("::"))>0&&(h=a.substring(d+2),a=a.substring(0,d),l=!0);let c=zt(a),u=[];if(c){let{args:e,methodName:s}=c;for(let t=0;t<e.length;t++){let s=e[t];s.literal||u.push(s)}let i=t.dynamicFns;(i&&i[s]||c.static)&&(u.push(s),c.dynamicFn=!0)}else u.push(a);i.push({source:a,mode:n,negate:o,customEvent:l,signature:c,dependencies:u,event:h}),r=It.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&i.push({literal:t})}return i.length?i:null}static _evaluateBinding(e,t,s,i,r,n){let o;return o=t.signature?Tt(e,s,i,0,t.signature):s!=t.source?Pe(e,t.source):n&&be(s)?Pe(e,s):e.__data[s],t.negate&&(o=!o),o}}})),Mt=[];const Ft=ge((e=>{const t=je(e);function s(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof r?t:null}function i(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const s=e.properties;s&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(e){const t={};for(let s in e){const i=e[s];t[s]="function"==typeof i?{type:i}:i}return t}(s))}e.__ownProperties=t}return e.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((e=>this.prototype._addPropertyToAttributeMap(e))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=s(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=i(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=s(this);this.__properties=Object.assign({},e&&e._properties,i(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r})),Ht=window.ShadyCSS&&window.ShadyCSS.cssBuild,Bt=ge((e=>{const t=Ft(Lt(e));function s(e,t,s,i){s.computed&&(s.readOnly=!0),s.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,s.computed,i)),s.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!s.computed):!1===s.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),s.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===s.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),s.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===s.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),s.observer&&e._createPropertyObserver(t,s.observer,i[s.observer]),e._addPropertyToAttributeMap(t)}function i(e,t,s,i){if(!Ht){const r=t.content.querySelectorAll("style"),n=se(t),o=function(e){let t=K(e);return t?ie(t):[]}(s),a=t.content.firstElementChild;for(let s=0;s<o.length;s++){let r=o[s];r.textContent=e._processStyleText(r.textContent,i),t.content.insertBefore(r,a)}let l=0;for(let t=0;t<n.length;t++){let s=n[t],o=r[l];o!==s?(s=s.cloneNode(!0),o.parentNode.insertBefore(s,o)):l++,s.textContent=e._processStyleText(s.textContent,i)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,s),Y&&Ht&&z){const s=t.content.querySelectorAll("style");if(s){let t="";Array.from(s).forEach((e=>{t+=e.textContent,e.parentNode.removeChild(e)})),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}return class extends t{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((s=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",s))||(s.__ownObservers=s.hasOwnProperty(JSCompiler_renameProperty("observers",s))?s.observers:null),s.__ownObservers);var s;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):M||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)s(this.prototype,t,e[t],e)}static createObservers(e,t){const s=this.prototype;for(let i=0;i<e.length;i++)s._createMethodObserver(e[i],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!D||L)&&(t=Z.import(e,"template"),D&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=I(e.url);else{const e=Z.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=N,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let s in t){let i=t[s];"value"in i&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[s]=i)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let s=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof s.value?s.value.call(this):s.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return E(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const s=this.importPath;i(this,t,e,s?T(s):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=ye(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),H&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=T(this.importPath)),T(e,t)}static _parseTemplateContent(e,s,i){return s.dynamicFns=s.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,s,i)}static _addTemplatePropertyEffect(e,s,i){return!F||s in this._properties||i.info.part.signature&&i.info.part.signature.static||i.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${s}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,s,i)}}}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class $t{constructor(e){this.value=e.toString()}toString(){return this.value}}function Vt(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof $t)return function(e){if(e instanceof $t)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const Gt=function(e,...t){const s=document.createElement("template");return s.innerHTML=t.reduce(((t,s,i)=>t+Vt(s)+e[i+1]),e[0]),s},jt=Bt(HTMLElement);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ut{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,Yt.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Yt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,s){return e instanceof Ut?e._cancelAsync():e=new Ut,e.setConfig(t,s),e}}let Yt=new Set;const qt=function(e){Yt.add(e)},Wt=function(){const e=Boolean(Yt.size);return Yt.forEach((e=>{try{e.flush()}catch(e){setTimeout((()=>{throw e}))}})),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Jt="string"==typeof document.head.style.touchAction,Xt="__polymerGestures",Zt="__polymerGesturesHandled",Kt="__polymerGesturesTouchAction",Qt=["mousedown","mousemove","mouseup","click"],es=[0,1,4,2],ts=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function ss(e){return Qt.indexOf(e)>-1}let is=!1;function rs(e){if(!ss(e)&&"touchend"!==e)return Jt&&is&&k?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){is=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let ns=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const os=[],as={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},ls={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function hs(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let s=e.getRootNode();if(e.id){let i=s.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<i.length;e++)t.push(i[e])}}return t}let ds=function(e){let t=e.sourceCapabilities;var s;if((!t||t.firesTouchEvents)&&(e[Zt]={skip:!0},"click"===e.type)){let t=!1,i=fs(e);for(let e=0;e<i.length;e++){if(i[e].nodeType===Node.ELEMENT_NODE)if("label"===i[e].localName)os.push(i[e]);else if(s=i[e],as[s.localName]){let s=hs(i[e]);for(let e=0;e<s.length;e++)t=t||os.indexOf(s[e])>-1}if(i[e]===ps.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function cs(e){let t=ns?["click"]:Qt;for(let s,i=0;i<t.length;i++)s=t[i],e?(os.length=0,document.addEventListener(s,ds,!0)):document.removeEventListener(s,ds,!0)}function us(e){let t=e.type;if(!ss(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!ts&&(t=es[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let ps={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function _s(e,t,s){e.movefn=t,e.upfn=s,document.addEventListener("mousemove",t),document.addEventListener("mouseup",s)}function ms(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){ps.mouse.mouseIgnoreJob||cs(!0),ps.mouse.target=fs(e)[0],ps.mouse.mouseIgnoreJob=Ut.debounce(ps.mouse.mouseIgnoreJob,He.after(2500),(function(){cs(),ps.mouse.target=null,ps.mouse.mouseIgnoreJob=null}))}),!!is&&{passive:!0});const fs=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],gs={},ys=[];function bs(e){const t=fs(e);return t.length>0?t[0]:e.target}function vs(e){let t,s=e.type,i=e.currentTarget.__polymerGestures;if(!i)return;let r=i[s];if(r){if(!e[Zt]&&(e[Zt]={},"touch"===s.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===s&&1===e.touches.length&&(ps.touch.id=t.identifier),ps.touch.id!==t.identifier)return;Jt||"touchstart"!==s&&"touchmove"!==s||function(e){let t=e.changedTouches[0],s=e.type;if("touchstart"===s)ps.touch.x=t.clientX,ps.touch.y=t.clientY,ps.touch.scrollDecided=!1;else if("touchmove"===s){if(ps.touch.scrollDecided)return;ps.touch.scrollDecided=!0;let s=function(e){let t="auto",s=fs(e);for(let e,i=0;i<s.length;i++)if(e=s[i],e[Kt]){t=e[Kt];break}return t}(e),i=!1,r=Math.abs(ps.touch.x-t.clientX),n=Math.abs(ps.touch.y-t.clientY);e.cancelable&&("none"===s?i=!0:"pan-x"===s?i=n>r:"pan-y"===s&&(i=r>n)),i?e.preventDefault():Ps("track")}}(e)}if(t=e[Zt],!t.skip){for(let s,i=0;i<ys.length;i++)s=ys[i],r[s.name]&&!t[s.name]&&s.flow&&s.flow.start.indexOf(e.type)>-1&&s.reset&&s.reset();for(let i,n=0;n<ys.length;n++)i=ys[n],r[i.name]&&!t[i.name]&&(t[i.name]=!0,i[s](e))}}}function As(e,t,s){return!!gs[t]&&(function(e,t,s){let i=gs[t],r=i.deps,n=i.name,o=e[Xt];o||(e[Xt]=o={});for(let t,s,i=0;i<r.length;i++)t=r[i],ns&&ss(t)&&"click"!==t||(s=o[t],s||(o[t]=s={_count:0}),0===s._count&&e.addEventListener(t,vs,rs(t)),s[n]=(s[n]||0)+1,s._count=(s._count||0)+1);e.addEventListener(t,s),i.touchAction&&xs(e,i.touchAction)}(e,t,s),!0)}function ws(e,t,s){return!!gs[t]&&(function(e,t,s){let i=gs[t],r=i.deps,n=i.name,o=e[Xt];if(o)for(let t,s,i=0;i<r.length;i++)t=r[i],s=o[t],s&&s[n]&&(s[n]=(s[n]||1)-1,s._count=(s._count||1)-1,0===s._count&&e.removeEventListener(t,vs,rs(t)));e.removeEventListener(t,s)}(e,t,s),!0)}function Cs(e){ys.push(e);for(let t=0;t<e.emits.length;t++)gs[e.emits[t]]=e}function xs(e,t){Jt&&e instanceof HTMLElement&&Ve.run((()=>{e.style.touchAction=t})),e[Kt]=t}function Ss(e,t,s){let i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=s,ye(e).dispatchEvent(i),i.defaultPrevented){let e=s.preventer||s.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function Ps(e){let t=function(e){for(let t,s=0;s<ys.length;s++){t=ys[s];for(let s,i=0;i<t.emits.length;i++)if(s=t.emits[i],s===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function Ts(e,t,s,i){t&&Ss(t,e,{x:s.clientX,y:s.clientY,sourceEvent:s,preventer:i,prevent:function(e){return Ps(e)}})}function Es(e,t,s){if(e.prevent)return!1;if(e.started)return!0;let i=Math.abs(e.x-t),r=Math.abs(e.y-s);return i>=5||r>=5}function Is(e,t,s){if(!t)return;let i,r=e.moves[e.moves.length-2],n=e.moves[e.moves.length-1],o=n.x-e.x,a=n.y-e.y,l=0;r&&(i=n.x-r.x,l=n.y-r.y),Ss(t,"track",{state:e.state,x:s.clientX,y:s.clientY,dx:o,dy:a,ddx:i,ddy:l,sourceEvent:s,hover:function(){return function(e,t){let s=document.elementFromPoint(e,t),i=s;for(;i&&i.shadowRoot&&!window.ShadyDOM;){let r=i;if(i=i.shadowRoot.elementFromPoint(e,t),r===i)break;i&&(s=i)}return s}(s.clientX,s.clientY)}})}function Os(e,t,s){let i=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),n=bs(s||t);!n||ls[n.localName]&&n.hasAttribute("disabled")||(isNaN(i)||isNaN(r)||i<=25&&r<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=bs(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let s=t.getBoundingClientRect(),i=e.pageX,r=e.pageY;return!(i>=s.left&&i<=s.right&&r>=s.top&&r<=s.bottom)}return!1}(t))&&(e.prevent||Ss(n,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:s}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Cs({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){ms(this.info)},mousedown:function(e){if(!us(e))return;let t=bs(e),s=this;_s(this.info,(function(e){us(e)||(Ts("up",t,e),ms(s.info))}),(function(e){us(e)&&Ts("up",t,e),ms(s.info)})),Ts("down",t,e)},touchstart:function(e){Ts("down",bs(e),e.changedTouches[0],e)},touchend:function(e){Ts("up",bs(e),e.changedTouches[0],e)}}),Cs({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,ms(this.info)},mousedown:function(e){if(!us(e))return;let t=bs(e),s=this,i=function(e){let i=e.clientX,r=e.clientY;Es(s.info,i,r)&&(s.info.state=s.info.started?"mouseup"===e.type?"end":"track":"start","start"===s.info.state&&Ps("tap"),s.info.addMove({x:i,y:r}),us(e)||(s.info.state="end",ms(s.info)),t&&Is(s.info,t,e),s.info.started=!0)};_s(this.info,i,(function(e){s.info.started&&i(e),ms(s.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=bs(e),s=e.changedTouches[0],i=s.clientX,r=s.clientY;Es(this.info,i,r)&&("start"===this.info.state&&Ps("tap"),this.info.addMove({x:i,y:r}),Is(this.info,t,s),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=bs(e),s=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:s.clientX,y:s.clientY}),Is(this.info,t,s))}}),Cs({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){us(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){us(e)&&Os(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){Os(this.info,e.changedTouches[0],e)}});const zs=ge((e=>class extends e{_addEventListenerToNode(e,t,s){As(e,t,s)||super._addEventListenerToNode(e,t,s)}_removeEventListenerFromNode(e,t,s){ws(e,t,s)||super._removeEventListenerFromNode(e,t,s)}})),Ns=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,s){super.attributeChangedCallback(e,t,s),"theme"===e&&this._setTheme(s)}},Rs=e=>class extends(Ns(e)){static finalize(){super.finalize();const e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,s=Object.getPrototypeOf(this.prototype)._template;s&&!t&&Array.from(s.content.querySelectorAll("style[include]")).forEach((t=>{this._includeStyle(t.getAttribute("include"),e)})),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){const t=Z.prototype.modules;let s=!1;const i=this.is+"-default-theme";Object.keys(t).sort(((e,t)=>{const s=0===e.indexOf("vaadin-"),i=0===t.indexOf("vaadin-"),r=["lumo-","material-"],n=r.filter((t=>0===e.indexOf(t))).length>0,o=r.filter((e=>0===t.indexOf(e))).length>0;return s!==i?s?-1:1:n!==o?n?-1:1:0})).forEach((r=>{if(r!==i){const i=t[r].getAttribute("theme-for");i&&i.split(" ").forEach((t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(s=!0,this._includeStyle(r,e))}))}})),!s&&t[i]&&this._includeStyle(i,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){const s=document.createElement("style");s.setAttribute("include",e),t.content.appendChild(s)}}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/;let ks=!1;window.addEventListener("keydown",(()=>{ks=!0}),{capture:!0}),window.addEventListener("mousedown",(()=>{ks=!1}),{capture:!0});const Ds=e=>class extends((e=>class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}})(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",(e=>{e.composedPath()[0]===this?this.contains(e.relatedTarget)||this._focus():-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)})),this.addEventListener("focusout",(e=>this._setFocused(!1))),super.ready();const e=e=>{e.composed||e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",e),this.shadowRoot.addEventListener("focusout",e),this.addEventListener("keydown",(e=>{if(!e.defaultPrevented&&9===e.keyCode)if(e.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout((()=>this._isShiftTabbing=!1),0);else{const e=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(e&&parseFloat(e[1])>=63&&parseFloat(e[1])<66&&this.parentNode&&this.nextSibling){const e=document.createElement("input");e.style.position="absolute",e.style.opacity="0",e.tabIndex=this.tabIndex,this.parentNode.insertBefore(e,this.nextSibling),e.focus(),e.addEventListener("focusout",(()=>this.parentNode.removeChild(e)))}}})),this.autofocus&&!this.disabled&&window.requestAnimationFrame((()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&ks?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e})}click(){this.disabled||super.click()}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/,Ls=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Wt()}while(e||t)};
/**
@license
Copyright (c) 2020 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class Ms{static detectScrollType(){const e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,s){const{scrollLeft:i}=s;if("rtl"!==t||!e)return i;switch(e){case"negative":return s.scrollWidth-s.clientWidth+i;case"reverse":return s.scrollWidth-s.clientWidth-i}return i}static setNormalizedScrollLeft(e,t,s,i){if("rtl"===t&&e)switch(e){case"negative":s.scrollLeft=s.clientWidth-s.scrollWidth+i;break;case"reverse":s.scrollLeft=s.scrollWidth-s.clientWidth-i;break;default:s.scrollLeft=i}else s.scrollLeft=i}}const Fs=[];let Hs;new MutationObserver((function(){const e=$s();Fs.forEach((t=>{Bs(t,e)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Bs=function(e,t){t?e.setAttribute("dir",t):e.removeAttribute("dir")},$s=function(){return document.documentElement.getAttribute("dir")},Vs=e=>class extends e{static get properties(){return{dir:{type:String,readOnly:!0}}}static finalize(){super.finalize(),Hs||(Hs=Ms.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),Bs(this,$s()))}attributeChangedCallback(e,t,s){if(super.attributeChangedCallback(e,t,s),"dir"!==e)return;const i=s===$s()&&-1===Fs.indexOf(this),r=!s&&t&&-1===Fs.indexOf(this),n=s!==$s()&&t===$s();i||r?(this.__subscribe(),Bs(this,$s())):n&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}__subscribe(e=!0){e?-1===Fs.indexOf(this)&&Fs.push(this):Fs.indexOf(this)>-1&&Fs.splice(Fs.indexOf(this),1)}__getNormalizedScrollLeft(e){return Ms.getNormalizedScrollLeft(Hs,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,t){return Ms.setNormalizedScrollLeft(Hs,this.getAttribute("dir")||"ltr",e,t)}};let Gs;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){};const js=new Set,Us=e=>class extends(Vs(e)){static finalize(){super.finalize();const{is:e}=this;e&&!js.has(e)&&(window.Vaadin.registrations.push(this),js.add(e),window.Vaadin.developmentModeCallback&&(Gs=Ut.debounce(Gs,$e,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),qt(Gs)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class Ys extends(Us(Ds(Rs(zs(jt))))){static get template(){return Gt`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        label {
          display: inline-flex;
          align-items: baseline;
          outline: none;
        }

        [part='checkbox'] {
          position: relative;
          display: inline-block;
          flex: none;
        }

        input[type='checkbox'] {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }
      </style>

      <label>
        <span part="checkbox">
          <input
            type="checkbox"
            checked="{{checked::change}}"
            disabled$="[[disabled]]"
            indeterminate="{{indeterminate::change}}"
            role="presentation"
            tabindex="-1"
          />
        </span>

        <span part="label">
          <slot></slot>
        </span>
      </label>
    `}static get is(){return"vaadin-checkbox"}static get version(){return"3.0.0"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super(),this.name}get name(){return this.checked?this._storedName:""}set name(e){this._storedName=e}ready(){super.ready(),this.setAttribute("role","checkbox"),this._nativeCheckbox=this.shadowRoot.querySelector('input[type="checkbox"]'),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();const e=this.getAttribute("name");e&&(this.name=e),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){const e=this.shadowRoot.querySelector('[part~="label"]'),t=e.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(t)?e.setAttribute("empty",""):e.removeAttribute("empty")}_isAssignedNodesEmpty(e){return 0===e.length||1==e.length&&e[0].nodeType==Node.TEXT_NODE&&""===e[0].textContent.trim()}_checkedChanged(e){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",Boolean(e))}_indeterminateChanged(e){e?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked)}_addActiveListeners(){this._addEventListenerToNode(this,"down",(e=>{this.__interactionsAllowed(e)&&this.setAttribute("active","")})),this._addEventListenerToNode(this,"up",(()=>this.removeAttribute("active"))),this.addEventListener("keydown",(e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this.setAttribute("active",""))})),this.addEventListener("keyup",(e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1))}))}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(e){return!this.disabled&&"a"!==e.target.localName}_handleClick(e){this.__interactionsAllowed(e)&&(this.indeterminate?(this.indeterminate=!1,e.preventDefault(),this._toggleChecked()):e.composedPath()[0]!==this._nativeCheckbox&&(e.preventDefault(),this._toggleChecked()))}_toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}}customElements.define(Ys.is,Ys),me("vaadin-grid",t`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
    }

    [part~='row'][dragstart] {
      /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */
      border-bottom: 100px solid transparent;
      z-index: 100 !important;
      opacity: 0.9;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    [ios] [part~='row'][dragstart] [part~='cell'] {
      background: var(--lumo-primary-color-50pct);
    }

    #scroller:not([ios]) [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='left']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='right']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"}),me("vaadin-checkbox",t`
    :host(.vaadin-grid-select-all-checkbox) {
      font-size: var(--lumo-font-size-m);
    }
  `,{moduleId:"vaadin-grid-select-all-checkbox-lumo"});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let qs=!1,Ws=[],Js=[];function Xs(){qs=!0,requestAnimationFrame((function(){qs=!1,function(e){for(;e.length;)Zs(e.shift())}(Ws),setTimeout((function(){!function(e){for(let t=0,s=e.length;t<s;t++)Zs(e.shift())}(Js)}))}))}function Zs(e){const t=e[0],s=e[1],i=e[2];try{s.apply(t,i)}catch(e){setTimeout((()=>{throw e}))}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ks{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Qs(e){return ei(function(e){let t=new Ks;t.start=0,t.end=e.length;let s=t;for(let i=0,r=e.length;i<r;i++)if(e[i]===ii){s.rules||(s.rules=[]);let e=s,t=e.rules[e.rules.length-1]||null;s=new Ks,s.start=i+1,s.parent=e,s.previous=t,e.rules.push(s)}else e[i]===ri&&(s.end=i+1,s=s.parent||t);return t}(e=e.replace(ni.comments,"").replace(ni.port,"")),e)}function ei(e,t){let s=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=s.trim(),e.parent){let i=e.previous?e.previous.end:e.parent.start;s=t.substring(i,e.start-1),s=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(s),s=s.replace(ni.multipleSpaces," "),s=s.substring(s.lastIndexOf(";")+1);let r=e.parsedSelector=e.selector=s.trim();e.atRule=0===r.indexOf(li),e.atRule?0===r.indexOf(ai)?e.type=si.MEDIA_RULE:r.match(ni.keyframesRule)&&(e.type=si.KEYFRAMES_RULE,e.keyframesName=e.selector.split(ni.multipleSpaces).pop()):0===r.indexOf(oi)?e.type=si.MIXIN_RULE:e.type=si.STYLE_RULE}let i=e.rules;if(i)for(let e,s=0,r=i.length;s<r&&(e=i[s]);s++)ei(e,t);return e}function ti(e,t,s=""){let i="";if(e.cssText||e.rules){let s=e.rules;if(s&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(oi)}(s))for(let e,r=0,n=s.length;r<n&&(e=s[r]);r++)i=ti(e,t,i);else i=t?e.cssText:function(e){return function(e){return e.replace(ni.mixinApply,"").replace(ni.varApply,"")}(e=function(e){return e.replace(ni.customProp,"").replace(ni.mixinProp,"")}(e))}(e.cssText),i=i.trim(),i&&(i="  "+i+"\n")}return i&&(e.selector&&(s+=e.selector+" "+ii+"\n"),s+=i,e.selector&&(s+=ri+"\n\n")),s}const si={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},ii="{",ri="}",ni={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},oi="--",ai="@media",li="@",hi=new Set;function di(e){const t=e.textContent;if(!hi.has(t)){hi.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function ci(e){return e.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ui(e,t){return e?("string"==typeof e&&(e=Qs(e)),t&&_i(e,t),ti(e,A)):""}function pi(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=Qs(e.textContent)),e.__cssRules||null}function _i(e,t,s,i){if(!e)return;let r=!1,n=e.type;if(i&&n===si.MEDIA_RULE){let t=e.selector.match(p);t&&(window.matchMedia(t[1]).matches||(r=!0))}n===si.STYLE_RULE?t(e):s&&n===si.KEYFRAMES_RULE?s(e):n===si.MIXIN_RULE&&(r=!0);let o=e.rules;if(o&&!r)for(let e,r=0,n=o.length;r<n&&(e=o[r]);r++)_i(e,t,s,i)}function mi(e,t){let s=e.indexOf("var(");if(-1===s)return t(e,"","","");let i=function(e,t){let s=0;for(let i=t,r=e.length;i<r;i++)if("("===e[i])s++;else if(")"===e[i]&&0==--s)return i;return-1}(e,s+3),r=e.substring(s+4,i),n=e.substring(0,s),o=mi(e.substring(i+1),t),a=r.indexOf(",");return-1===a?t(n,r.trim(),"",o):t(n,r.substring(0,a).trim(),r.substring(a+1).trim(),o)}window.ShadyDOM&&window.ShadyDOM.wrap;function fi(e){if(void 0!==y)return y;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),e.__cssBuild=t}}return e.__cssBuild||""}function gi(e){return""!==fi(e)}const yi=/;\s*/m,bi=/^\s*(initial)|(inherit)\s*$/,vi=/\s*!important/;class Ai{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let wi=null;class Ci{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Ai}detectMixin(e){return function(e){const t=u.test(e)||c.test(e);return u.lastIndex=0,c.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],s=e.querySelectorAll("style");for(let e=0;e<s.length;e++){const i=s[e];ci(i)?f||(di(i),i.parentNode.removeChild(i)):(t.push(i.textContent),i.parentNode.removeChild(i))}return t.join("").trim()}(e.content);if(t){const s=document.createElement("style");return s.textContent=t,e.content.insertBefore(s,e.content.firstChild),s}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const s=e._gatheredStyle;return s?this.transformStyle(s,t):null}transformStyle(e,t=""){let s=pi(e);return this.transformRules(s,t),e.textContent=ui(s),s}transformCustomStyle(e){let t=pi(e);return _i(t,(e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)})),e.textContent=ui(t),t}transformRules(e,t){this._currentElement=t,_i(e,(e=>{this.transformRule(e)})),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(c,((e,s,i,r)=>this._produceCssProperties(e,s,i,r,t))),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const s={};let i=!1;return _i(t,(t=>{i=i||t===e,i||t.selector===e.selector&&Object.assign(s,this._cssTextToMap(t.parsedCssText))})),s}_consumeCssProperties(e,t){let s=null;for(;s=u.exec(e);){let i=s[0],r=s[1],n=s.index,o=n+i.indexOf("@apply"),a=n+i.length,l=e.slice(0,o),h=e.slice(a),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(l));let c=this._atApplyToCssProperties(r,d);e=`${l}${c}${h}`,u.lastIndex=n+c.length}return e}_atApplyToCssProperties(e,t){e=e.replace(yi,"");let s=[],i=this._map.get(e);if(i||(this._map.set(e,{}),i=this._map.get(e)),i){let r,n,o;this._currentElement&&(i.dependants[this._currentElement]=!0);const a=i.properties;for(r in a)o=t&&t[r],n=[r,": var(",e,"_-_",r],o&&n.push(",",o.replace(vi,"")),n.push(")"),vi.test(a[r])&&n.push(" !important"),s.push(n.join(""))}return s.join("; ")}_replaceInitialOrInherit(e,t){let s=bi.exec(t);return s&&(t=s[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let s,i,r=e.split(";"),n={};for(let e,o,a=0;a<r.length;a++)e=r[a],e&&(o=e.split(":"),o.length>1&&(s=o[0].trim(),i=o.slice(1).join(":"),t&&(i=this._replaceInitialOrInherit(s,i)),n[s]=i));return n}_invalidateMixinEntry(e){if(wi)for(let t in e.dependants)t!==this._currentElement&&wi(t)}_produceCssProperties(e,t,s,i,r){if(s&&mi(s,((e,t)=>{t&&this._map.get(t)&&(i=`@apply ${t};`)})),!i)return e;let n=this._consumeCssProperties(""+i,r),o=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(n,!0),l=a,h=this._map.get(t),d=h&&h.properties;d?l=Object.assign(Object.create(d),a):this._map.set(t,l);let c,u,p=[],_=!1;for(c in l)u=a[c],void 0===u&&(u="initial"),d&&!(c in d)&&(_=!0),p.push(`${t}_-_${c}: ${u}`);return _&&this._invalidateMixinEntry(h),h&&(h.properties=l),s&&(o=`${e};${o}`),`${o}${p.join("; ")};`}}Ci.prototype.detectMixin=Ci.prototype.detectMixin,Ci.prototype.transformStyle=Ci.prototype.transformStyle,Ci.prototype.transformCustomStyle=Ci.prototype.transformCustomStyle,Ci.prototype.transformRules=Ci.prototype.transformRules,Ci.prototype.transformRule=Ci.prototype.transformRule,Ci.prototype.transformTemplate=Ci.prototype.transformTemplate,Ci.prototype._separator="_-_",Object.defineProperty(Ci.prototype,"invalidCallback",{get:()=>wi,set(e){wi=e}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const xi={},Si="_applyShimCurrentVersion",Pi="_applyShimNextVersion",Ti="_applyShimValidatingVersion",Ei=Promise.resolve();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ii(e){let t=xi[e];t&&function(e){e[Si]=e[Si]||0,e[Ti]=e[Ti]||0,e[Pi]=(e[Pi]||0)+1}(t)}function Oi(e){return e[Si]===e[Pi]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const zi=new Ci;class Ni{constructor(){this.customStyleInterface=null,zi.invalidCallback=Ii}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{zi.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame((()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()}))})}prepareTemplate(e,t){if(this.ensure(),gi(e))return;xi[t]=e;let s=zi.transformTemplate(e,t);e._styleAst=s}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let s=e[t],i=this.customStyleInterface.getStyleForCustomStyle(s);i&&zi.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&_(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,s="",i="";return t?t.indexOf("-")>-1?s=t:(i=t,s=e.getAttribute&&e.getAttribute("is")||""):(s=e.is,i=e.extends),{is:s,typeExtension:i}}(e),s=xi[t];if((!s||!gi(s))&&s&&!Oi(s)){(function(e){return!Oi(e)&&e[Ti]===e[Pi]})(s)||(this.prepareTemplate(s,t),function(e){e[Ti]=e[Pi],e._validating||(e._validating=!0,Ei.then((function(){e[Si]=e[Pi],e._validating=!1})))}(s));let i=e.shadowRoot;if(i){let e=i.querySelector("style");e&&(e.__cssRules=s._styleAst,e.textContent=ui(s._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Ni;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,s,i){e.flushCustomStyles(),e.prepareTemplate(t,s)},prepareTemplateStyles(e,t,s){window.ShadyCSS.prepareTemplate(e,t,s)},prepareTemplateDom(e,t){},styleSubtree(t,s){e.flushCustomStyles(),e.styleSubtree(t,s)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>m(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:A,nativeShadow:f,cssBuild:y,disableRuntime:v},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=zi;
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const Ri=/:host\(:dir\((ltr|rtl)\)\)/g,ki=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Di=/:dir\((?:ltr|rtl)\)/,Li=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),Mi=[];let Fi=null,Hi="";function Bi(){Hi=document.documentElement.getAttribute("dir")}function $i(e){if(!e.__autoDirOptOut){e.setAttribute("dir",Hi)}}function Vi(){Bi(),Hi=document.documentElement.getAttribute("dir");for(let e=0;e<Mi.length;e++)$i(Mi[e])}const Gi=ge((e=>{Li||Fi||(Bi(),Fi=new MutationObserver(Vi),Fi.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=qe(e);class s extends t{static _processStyleText(e,s){return e=t._processStyleText.call(this,e,s),!Li&&Di.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(Ri,':host([dir="$1"])'),t=t.replace(ki,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Fi&&Fi.takeRecords().length&&Vi(),Mi.push(this),$i(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=Mi.indexOf(this);e>-1&&Mi.splice(e,1)}}}return s.__activateDir=!1,s}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ji(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Ui(e,t,s){return{index:e,removed:t,addedCount:s}}"interactive"===document.readyState||"complete"===document.readyState?ji():window.addEventListener("DOMContentLoaded",ji);function Yi(e,t,s,i,r,n){let o,a=0,l=0,h=Math.min(s-t,n-r);if(0==t&&0==r&&(a=function(e,t,s){for(let i=0;i<s;i++)if(!Wi(e[i],t[i]))return i;return s}(e,i,h)),s==e.length&&n==i.length&&(l=function(e,t,s){let i=e.length,r=t.length,n=0;for(;n<s&&Wi(e[--i],t[--r]);)n++;return n}(e,i,h-a)),r+=a,n-=l,(s-=l)-(t+=a)==0&&n-r==0)return[];if(t==s){for(o=Ui(t,[],0);r<n;)o.removed.push(i[r++]);return[o]}if(r==n)return[Ui(t,[],s-t)];let d=function(e){let t=e.length-1,s=e[0].length-1,i=e[t][s],r=[];for(;t>0||s>0;){if(0==t){r.push(2),s--;continue}if(0==s){r.push(3),t--;continue}let n,o=e[t-1][s-1],a=e[t-1][s],l=e[t][s-1];n=a<l?a<o?a:o:l<o?l:o,n==o?(o==i?r.push(0):(r.push(1),i=o),t--,s--):n==a?(r.push(3),t--,i=a):(r.push(2),s--,i=l)}return r.reverse(),r}(function(e,t,s,i,r,n){let o=n-r+1,a=s-t+1,l=new Array(o);for(let e=0;e<o;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let s=1;s<o;s++)for(let n=1;n<a;n++)if(Wi(e[t+n-1],i[r+s-1]))l[s][n]=l[s-1][n-1];else{let e=l[s-1][n]+1,t=l[s][n-1]+1;l[s][n]=e<t?e:t}return l}(e,t,s,i,r,n));o=void 0;let c=[],u=t,p=r;for(let e=0;e<d.length;e++)switch(d[e]){case 0:o&&(c.push(o),o=void 0),u++,p++;break;case 1:o||(o=Ui(u,[],0)),o.addedCount++,u++,o.removed.push(i[p]),p++;break;case 2:o||(o=Ui(u,[],0)),o.addedCount++,u++;break;case 3:o||(o=Ui(u,[],0)),o.removed.push(i[p]),p++}return o&&c.push(o),c}function qi(e,t){return Yi(e,0,e.length,t,0,t.length)}function Wi(e,t){return e===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ji(e){return"slot"===e.localName}let Xi=class{static getFlattenedNodes(e){const t=ye(e);return Ji(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map((e=>Ji(e)?ye(e=e).assignedNodes({flatten:!0}):[e])).reduce(((e,t)=>e.concat(t)),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Ji(this._target)?this._listenSlots([this._target]):ye(this._target).children&&(this._listenSlots(ye(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(e=>{this._processMutations(e)})):(this._nativeChildrenObserver=new MutationObserver((e=>{this._processMutations(e)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Ji(this._target)?this._unlistenSlots([this._target]):ye(this._target).children&&(this._unlistenSlots(ye(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Ve.run((()=>this.flush())))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let s=e[t];s.addedNodes&&this._listenSlots(s.addedNodes),s.removedNodes&&this._unlistenSlots(s.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),s=qi(t,this._effectiveNodes);for(let t,i=0;i<s.length&&(t=s[i]);i++)for(let s,i=0;i<t.removed.length&&(s=t.removed[i]);i++)e.removedNodes.push(s);for(let i,r=0;r<s.length&&(i=s[r]);r++)for(let s=i.index;s<i.index+i.addedCount;s++)e.addedNodes.push(t[s]);this._effectiveNodes=t;let i=!1;return(e.addedNodes.length||e.removedNodes.length)&&(i=!0,this.callback.call(this._target,e)),i}_listenSlots(e){for(let t=0;t<e.length;t++){let s=e[t];Ji(s)&&s.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let s=e[t];Ji(s)&&s.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Zi=Element.prototype,Ki=Zi.matches||Zi.matchesSelector||Zi.mozMatchesSelector||Zi.msMatchesSelector||Zi.oMatchesSelector||Zi.webkitMatchesSelector,Qi=function(e,t){return Ki.call(e,t)};class er{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new Xi(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(ye(this.node).contains(e))return!0;let t=e,s=e.ownerDocument;for(;t&&t!==s&&t!==this.node;)t=ye(t).parentNode||ye(t).host;return t===this.node}getOwnerRoot(){return ye(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?ye(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=ye(this.node).assignedSlot;for(;t;)e.push(t),t=ye(t).assignedSlot;return e}importNode(e,t){let s=this.node instanceof Document?this.node:this.node.ownerDocument;return ye(s).importNode(e,t)}getEffectiveChildNodes(){return Xi.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),s=[];for(let i,r=0,n=t.length;r<n&&(i=t[r]);r++)i.nodeType===Node.ELEMENT_NODE&&Qi(i,e)&&s.push(i);return s}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function tr(e,t){for(let s=0;s<t.length;s++){let i=t[s];Object.defineProperty(e,i,{get:function(){return this.node[i]},configurable:!0})}}class sr{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}let ir=er;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(er.prototype).forEach((t=>{"activeElement"!=t&&(e.prototype[t]=er.prototype[t])})),tr(e.prototype,["classList"]),ir=e,Object.defineProperties(sr.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&rr(e).getOwnerRoot(),s=this.path;for(let e=0;e<s.length;e++){const i=s[e];if(rr(i).getOwnerRoot()===t)return i}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let s=0;s<t.length;s++){let i=t[s];e[i]=function(){return this.node[i].apply(this.node,arguments)}}}(er.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),tr(er.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let s=0;s<t.length;s++){let i=t[s];Object.defineProperty(e,i,{get:function(){return this.node[i]},set:function(e){this.node[i]=e},configurable:!0})}}(er.prototype,["textContent","innerHTML","className"]);const rr=function(e){if((e=e||document)instanceof ir)return e;if(e instanceof sr)return e;let t=e.__domApi;return t||(t=e instanceof Event?new sr(e):new ir(e),e.__domApi=t),t},nr=window.ShadyDOM,or=window.ShadyCSS;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ar(e,t){return ye(e).getRootNode()===t}
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const lr=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};ge((e=>{const t=Bt(e);let s=lr(t);return class extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return s.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,s,i){"disable-upgrade"==e?this.__isUpgradeDisabled&&null==s&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,ye(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,s,i)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}}));let hr=window.ShadyCSS;const dr=ge((e=>{const t=zs(Bt(e)),s=Ht?t:Gi(t),i=lr(s),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class n extends s{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,s){(this.__dataAttributes&&this.__dataAttributes[e]||"disable-upgrade"===e)&&this.attributeChangedCallback(e,t,s,null)}setAttribute(e,t){if(U&&!this._legacyForceObservedAttributes){const s=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,s,String(t))}else super.setAttribute(e,t)}removeAttribute(e){if(U&&!this._legacyForceObservedAttributes){const t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null)}else super.removeAttribute(e)}static get observedAttributes(){return U&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype),this.__observedAttributes):i.call(this).concat("disable-upgrade")}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,t,s,i){t!==s&&("disable-upgrade"==e?this.__isUpgradeDisabled&&null==s&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,ye(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,s,i),this.attributeChanged(e,t,s)))}attributeChanged(e,t,s){}_initializeProperties(){if(M&&this.hasAttribute("disable-upgrade"))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),U&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const e=this.attributes;for(let t=0,s=e.length;t<s;t++){const s=e[t];this.__attributeReaction(s.name,null,s.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,s){this._propertyToAttribute(e,t,s)}serializeValueToAttribute(e,t,s){this._valueToNodeAttribute(s||this,e,t)}extend(e,t){if(!e||!t)return e||t;let s=Object.getOwnPropertyNames(t);for(let i,r=0;r<s.length&&(i=s[r]);r++){let s=Object.getOwnPropertyDescriptor(t,i);s&&Object.defineProperty(e,i,s)}return e}mixin(e,t){for(let s in t)e[s]=t[s];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,s){s=s||{},t=null==t?{}:t;let i=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});i.detail=t;let r=s.node||this;return ye(r).dispatchEvent(i),i}listen(e,t,s){e=e||this;let i=this.__boundListeners||(this.__boundListeners=new WeakMap),r=i.get(e);r||(r={},i.set(e,r));let n=t+s;r[n]||(r[n]=this._addMethodEventListenerToNode(e,t,s,this))}unlisten(e,t,s){e=e||this;let i=this.__boundListeners&&this.__boundListeners.get(e),r=t+s,n=i&&i[r];n&&(this._removeEventListenerFromNode(e,t,n),i[r]=null)}setScrollDirection(e,t){xs(t||this,r[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=ye(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=rr(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return rr(this).getEffectiveChildNodes()}queryDistributedElements(e){return rr(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let s,i=0;s=e[i];i++)s.nodeType!==Node.COMMENT_NODE&&t.push(s.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?rr(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){const t=this;return t!==e&&ye(t).contains(e)&&ye(t).getRootNode()===ye(e).getRootNode()}isLocalDescendant(e){return this.root===ye(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!nr||!or)return null;if(!nr.handlesDynamicScoping)return null;const s=or.ScopingShim;if(!s)return null;const i=s.scopeForNode(e),r=ye(e).getRootNode(),n=e=>{if(!ar(e,r))return;const t=Array.from(nr.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const n=t[e];if(!ar(n,r))continue;const o=s.currentScopeForNode(n);o!==i&&(""!==o&&s.unscopeNode(n,o),s.scopeNode(n,i))}};if(n(e),t){const t=new MutationObserver((e=>{for(let t=0;t<e.length;t++){const s=e[t];for(let e=0;e<s.addedNodes.length;e++){const t=s.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&n(t)}}}));return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return hr.getComputedStyleValue(this,e)}debounce(e,t,s){return this._debouncers=this._debouncers||{},this._debouncers[e]=Ut.debounce(this._debouncers[e],s>0?He.after(s):Ve,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?He.run(e.bind(this),t):~Ve.run(e.bind(this))}cancelAsync(e){e<0?Ve.cancel(~e):He.cancel(e)}create(e,t){let s=document.createElement(e);if(t)if(s.setProperties)s.setProperties(t);else for(let e in t)s[e]=t[e];return s}elementMatches(e,t){return Qi(t||this,e)}toggleAttribute(e,t){let s=this;return 3===arguments.length&&(s=arguments[2]),1==arguments.length&&(t=!s.hasAttribute(e)),t?(ye(s).setAttribute(e,""),!0):(ye(s).removeAttribute(e),!1)}toggleClass(e,t,s){s=s||this,1==arguments.length&&(t=!s.classList.contains(e)),t?s.classList.add(e):s.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,s,i){i=i||this,this.transform("translate3d("+e+","+t+","+s+")",i)}arrayDelete(e,t){let s;if(Array.isArray(e)){if(s=e.indexOf(t),s>=0)return e.splice(s,1)}else{if(s=Pe(this,e).indexOf(t),s>=0)return this.splice(e,s,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return n.prototype.is="",n})),cr={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},ur={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},pr=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},ur);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function _r(e,t,s,i){!function(e,t,s){const i=e._noAccessors,r=Object.getOwnPropertyNames(e);for(let n=0;n<r.length;n++){let o=r[n];if(!(o in s))if(i)t[o]=e[o];else{let s=Object.getOwnPropertyDescriptor(e,o);s&&(s.configurable=!0,Object.defineProperty(t,o,s))}}}(t,e,i);for(let e in cr)t[e]&&(s[e]=s[e]||[],s[e].push(t[e]))}function mr(e,t,s){t=t||[];for(let i=e.length-1;i>=0;i--){let r=e[i];r?Array.isArray(r)?mr(r,t):t.indexOf(r)<0&&(!s||s.indexOf(r)<0)&&t.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return t}function fr(e,t){for(const s in t){const i=e[s],r=t[s];e[s]=!("value"in r)&&i&&"value"in i?Object.assign({value:i.value},r):r}}const gr=dr(HTMLElement);function yr(e,t,s){let i;const r={};class n extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(i)for(let e,t=0;t<i.length;t++)e=i[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(i)for(let e=0;e<i.length;e++)fr(t,i[e].properties);return fr(t,e.properties),t}static get observers(){let t=[];if(i)for(let e,s=0;s<i.length;s++)e=i[s],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=r.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=n.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered(),M&&o(e);const t=Object.getPrototypeOf(this);let s=r.beforeRegister;if(s)for(let e=0;e<s.length;e++)s[e].call(t);if(s=r.registered,s)for(let e=0;e<s.length;e++)s[e].call(t)}}_applyListeners(){super._applyListeners();const e=r.listeners;if(e)for(let t=0;t<e.length;t++){const s=e[t];if(s)for(let e in s)this._addMethodEventListenerToNode(this,e,s[e])}}_ensureAttributes(){const e=r.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const s=e[t];for(let e in s)this._ensureAttribute(e,s[e])}super._ensureAttributes()}ready(){super.ready();let e=r.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=r.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=r.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,s){super.attributeChanged();let i=r.attributeChanged;if(i)for(let r=0;r<i.length;r++)i[r].call(this,e,t,s)}}if(s){Array.isArray(s)||(s=[s]);let e=t.prototype.behaviors;i=mr(s,null,e),n.prototype.behaviors=e?e.concat(s):i}const o=t=>{i&&function(e,t,s){for(let i=0;i<t.length;i++)_r(e,t[i],s,pr)}(t,i,r),_r(t,e,r,ur)};return M||o(n.prototype),n.generatedFrom=e,n}const br=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let s=t?t(gr):gr;return s=yr(e,s,e.behaviors),s.is=s.prototype.is=e.is,s},vr=function(e){let t;return t="function"==typeof e?e:vr.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Ar(e,t,s,i,r){let n;r&&(n="object"==typeof s&&null!==s,n&&(i=e.__dataTemp[t]));let o=i!==s&&(i==i||s==s);return n&&o&&(e.__dataTemp[t]=s),o}vr.Class=br;const wr=ge((e=>class extends e{_shouldPropertyChange(e,t,s){return Ar(this,e,t,s,!0)}})),Cr=ge((e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,s){return Ar(this,e,t,s,this.mutableData)}}));wr._mutablePropertyChange=Ar;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let xr=null;function Sr(){return xr}Sr.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Sr,writable:!0}});const Pr=Lt(Sr),Tr=wr(Pr);const Er=Lt(class{});function Ir(e,t){for(let s=0;s<t.length;s++){let i=t[s];if(Boolean(e)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)e?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if("slot"===i.localName)if(e)i.__polymerReplaced__=document.createComment("hidden-slot"),ye(ye(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const e=i.__polymerReplaced__;e&&ye(ye(e).parentNode).replaceChild(i,e)}else i.style&&(e?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=e,i._showHideChildren&&i._showHideChildren(e)}}class Or extends Er{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let s=this.__templatizeOptions;(e&&s.instanceProps||!s.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,s){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,(e=>{e.model=this,s(e)}));else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(e,t,s)}}_showHideChildren(e){Ir(e,this.children)}_setUnmanagedPropertyToNode(e,t,s){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=s:super._setUnmanagedPropertyToNode(e,t,s)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}const zr=wr(Or);function Nr(e){let t=e.__dataHost;return t&&t._methodHost||t}function Rr(e,t,s){let i=s.mutableData?zr:Or;Mr.mixin&&(i=Mr.mixin(i));let r=class extends i{};return r.prototype.__templatizeOptions=s,r.prototype._bindTemplate(e),function(e,t,s,i){let r=s.hostProps||{};for(let t in i.instanceProps){delete r[t];let s=i.notifyInstanceProp;s&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Lr(t,s)})}if(i.forwardHostProp&&t.__dataHost)for(let t in r)s.hasHostProps||(s.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,s){e.__dataHost._setPendingPropertyOrPath("_host_"+t,s[t],!0,!0)}})}(r,e,t,s),r}function kr(e,t,s,i){let r=s.forwardHostProp;if(r&&t.hasHostProps){const a="template"==e.localName;let l=t.templatizeTemplateClass;if(!l){if(a){let e=s.mutableData?Tr:Pr;class i extends e{}l=t.templatizeTemplateClass=i}else{const s=e.constructor;class i extends s{}l=t.templatizeTemplateClass=i}let n=t.hostProps;for(let e in n)l.prototype._addPropertyEffect("_host_"+e,l.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Dr(e,r)}),l.prototype._createNotifyingProperty("_host_"+e);F&&i&&function(e,t,s){const i=s.constructor._properties,{propertyEffects:r}=e,{instanceProps:n}=t;for(let e in r)if(!(i[e]||n&&n[e])){const t=r[e];for(let s=0;s<t.length;s++){const{part:i}=t[s].info;if(!i.signature||!i.signature.static){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(t,s,i)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),a)o=l,xr=n=e,Object.setPrototypeOf(n,o.prototype),new o,xr=null,e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,l.prototype);const s=t.hostProps;for(let t in s)if(t="_host_"+t,t in e){const s=e[t];delete e[t],e.__data[t]=s}}}var n,o}function Dr(e,t){return function(e,s,i){t.call(e.__templatizeOwner,s.substring("_host_".length),i[s])}}function Lr(e,t){return function(e,s,i){t.call(e.__templatizeOwner,e,s,i[s])}}function Mr(e,t,s){if(D&&!Nr(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(s=s||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let i=(t?t.constructor:Or)._parseTemplate(e),r=i.templatizeInstanceClass;r||(r=Rr(e,i,s),i.templatizeInstanceClass=r);const n=Nr(e);kr(e,i,s,n);let o=class extends r{};return o.prototype._methodHost=n,o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=i.hostProps,o=o,o}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Fr=!1;function Hr(){if(M&&!O){if(!Fr){Fr=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Br=zs(Cr(Lt(HTMLElement)));customElements.define("dom-bind",class extends Br{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),D)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,s,i){this.mutableData=!0}connectedCallback(){Hr()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){ye(ye(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver((()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()}));return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const $r=Cr(jt);class Vr extends $r{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!j,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),Hr()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=ye(ye(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}let s={};s[this.as]=!0,s[this.indexAs]=!0,s[this.itemsIndexAs]=!0,this.__ctor=Mr(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:s,forwardHostProp:function(e,t){let s=this.__instances;for(let i,r=0;r<s.length&&(i=s[r]);r++)i.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,s){if((i=this.as)===(r=t)||Ae(i,r)||we(i,r)){let i=e[this.itemsIndexAs];t==this.as&&(this.items[i]=s);let r=Ce(this.as,`${JSCompiler_renameProperty("items",this)}.${i}`,t);this.notifyPath(r,s)}var i,r}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,s=this.__getMethodHost();return function(){return s[t].apply(s,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let s=0;s<t.length;s++)0===e.indexOf(t[s])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||("items"===e.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=Ut.debounce(this.__renderDebouncer,t>0?He.after(t):Ve,e.bind(this)),qt(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Ls()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),s=this.__calculateLimit(t.length);this.__updateInstances(e,s,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame((()=>this.__continueChunking()))),this._setRenderedItemCount(this.__instances.length),j&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let s=0;s<e.length;s++)t[s]=s;return this.__filterFn&&(t=t.filter(((t,s,i)=>this.__filterFn(e[t],s,i)))),this.__sortFn&&t.sort(((t,s)=>this.__sortFn(e[t],e[s]))),t}__calculateLimit(e){let t=e;const s=this.__instances.length;if(this.initialCount){let i;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),i=Math.max(t-s,0),this.__chunkCount=i||1):(i=Math.min(Math.max(e-s,0),this.__chunkCount),t=Math.min(s+i,e)),this.__shouldMeasureChunk=i===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,s){const i=this.__itemsIdxToInstIdx={};let r;for(r=0;r<t;r++){let t=this.__instances[r],n=s[r],o=e[n];i[n]=r,t?(t._setPendingProperty(this.as,o),t._setPendingProperty(this.indexAs,r),t._setPendingProperty(this.itemsIndexAs,n),t._flushProperties()):this.__insertInstance(o,r,n)}for(let e=this.__instances.length-1;e>=r;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const s=ye(t.root);for(let e=0;e<t.children.length;e++){let i=t.children[e];s.appendChild(i)}return t}__attachInstance(e,t){let s=this.__instances[e];t.insertBefore(s.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,s){let i={};return i[this.as]=e,i[this.indexAs]=t,i[this.itemsIndexAs]=s,new this.__ctor(i)}__insertInstance(e,t,s){const i=this.__stampInstance(e,t,s);let r=this.__instances[t+1],n=r?r.children[0]:this;return ye(ye(this).parentNode).insertBefore(i.root,n),this.__instances[t]=i,i}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let s=e.slice(6),i=s.indexOf("."),r=i<0?s:s.substring(0,i);if(r==parseInt(r,10)){let e=i<0?"":s.substring(i+1);this.__handleObservedPaths(e);let n=this.__itemsIdxToInstIdx[r],o=this.__instances[n];if(o){let s=this.as+(e?"."+e:"");o._setPendingPropertyOrPath(s,t,!1,!0),o._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let s;for(;t;)if(s=t.__dataHost?t:t.__templatizeInstance){if(s.__dataHost==e)return s;t=s.__dataHost}else t=ye(t).parentNode;return null}(this.template,e)}}customElements.define(Vr.is,Vr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Gr extends jt{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Ut.debounce(this.__renderDebouncer,Ve,(()=>this.__render())),qt(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=ye(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||ye(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Hr()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:ye(e).querySelector("template");if(!t){let e=new MutationObserver((()=>{if(!ye(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()}));return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=ye(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length){if(ye(this).previousSibling!==t[t.length-1])for(let s,i=0;i<t.length&&(s=t[i]);i++)ye(e).insertBefore(s,this)}}else{if(!e)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){Ls()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),j&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}const jr=G?class extends Gr{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(D&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const s=t._bindTemplate(this.__template,!0);s.runEffects=(e,t,s)=>{let i=this.__syncInfo;if(this.if)i&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(i.changedProps,t)),e(t,s);else if(this.__instance)if(i||(i=this.__syncInfo={runEffects:e,changedProps:{}}),s)for(const e in t){const t=ve(e);i.changedProps[t]=this.__dataHost[t]}else Object.assign(i.changedProps,t)},this.__instance=t._stampTemplate(this.__template,s),ye(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,Ir(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}:class extends Gr{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Mr(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[ve(e)]=!0))}})),this.__instance=new this.__ctor,ye(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=ye(e[0]).parentNode;if(t){t=ye(t);for(let s,i=0;i<e.length&&(s=e[i]);i++)t.removeChild(s)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}};customElements.define(jr.is,jr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Ur=ge((e=>{let t=Bt(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let s=t.path;if(s==JSCompiler_renameProperty("items",this)){let s=t.base||[],i=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),i){let e=qi(s,i);this.__applySplices(e)}this.__lastItems=s,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=s.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let s=0;s<e.length;s++){let i=e[s];t.forEach(((e,s)=>{e<i.index||(e>=i.index+i.removed.length?t.set(s,e+i.addedCount-i.removed.length):t.set(s,-1))}));for(let e=0;e<i.addedCount;e++){let s=i.index+e;t.has(this.items[s])&&t.set(this.items[s],s)}}this.__updateLinks();let s=0;t.forEach(((e,i)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),s,1):this.selected=this.selectedItem=null,t.delete(i)):s++}))}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach((t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)}))}else this.__selectedMap.forEach((e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)}))}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach(((s,i)=>{t==e++&&this.deselect(i)}))}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let s;this.__selectedMap.delete(e),this.multi&&(s=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),s,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}}))(jt);class Yr extends Ur{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Yr.is,Yr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const qr=dr(HTMLElement).prototype;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Wr=new Set;const Jr={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Wr.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():O||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=rr(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(Wr.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Wr.delete(this):Wr.add(this)}},Xr={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var s=this.domHost;this.scrollTarget=s&&s.$?s.$[e]:rr(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var s;"object"==typeof e?(s=e.left,t=e.top):s=e,s=s||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(s,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=s,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var s=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),s.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(s.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}},Zr=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),Kr=Zr&&Zr[1]>=8,Qr=br({behaviors:[Jr,Xr],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedVirtualIndex:-1,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){return Math.max(0,this._virtualCount-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this._virtualStartVal=e},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this._physicalStartVal=e},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let e=this._firstVisibleIndexVal;if(null==e){let t=this._physicalTop+this._scrollOffset;e=this._iterateItems((function(e,s){if(t+=this._physicalSizes[e],t>this._scrollPosition)return s}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){let e=this._lastVisibleIndexVal;if(null==e){let t=this._physicalTop+this._scrollOffset;this._iterateItems((function(s,i){t<this._scrollBottom&&(e=i),t+=this._physicalSizes[s]})),this._lastVisibleIndexVal=e}return e},get _scrollOffset(){return this._scrollerPaddingTop},attached:function(){this._debounce("_render",this._render,Be),this.listen(this,"iron-resize","_resizeHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler")},updateViewportBoundaries:function(){const e=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight},_scrollHandler:function(){const e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let t=e-this._scrollPosition;const s=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;const e=Math.round(t/this._physicalAverage);this._virtualStart=this._virtualStart+e,this._physicalStart=this._physicalStart+e,this._physicalTop=Math.floor(this._virtualStart)*this._physicalAverage,this._update()}else if(this._physicalCount>0){const{physicalTop:e,indexes:t}=this._getReusables(s);s?(this._physicalTop=e,this._virtualStart=this._virtualStart+t.length,this._physicalStart=this._physicalStart+t.length):(this._virtualStart=this._virtualStart-t.length,this._physicalStart=this._physicalStart-t.length),this._update(t,s?null:t),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),Ve)}},_getReusables:function(e){let t,s,i;const r=[],n=this._hiddenContentSize*this._ratio,o=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let h=this._physicalTop+this._scrollOffset;const d=this._physicalBottom+this._scrollOffset,c=this._scrollTop,u=this._scrollBottom;for(e?(t=this._physicalStart,s=c-h):(t=this._physicalEnd,s=d-u);i=this._physicalSizes[t],s-=i,!(r.length>=l||s<=n);)if(e){if(a+r.length+1>=this._virtualCount)break;if(h+i>=c-this._scrollOffset)break;r.push(t),h+=i,t=(t+1)%l}else{if(o-r.length<=0)break;if(h+this._physicalSize-i<=u)break;r.push(t),h-=i,t=0===t?l-1:t-1}return{indexes:r,physicalTop:h-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){const e=t.pop();this._physicalTop-=this._physicalSizes[e]}this._positionItems(),this._updateScrollerSize()}},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){const t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart)-this._physicalCount;let s=Math.round(.5*this._physicalCount);if(!(t<0)){if(t>0){const e=window.performance.now();[].push.apply(this._physicalItems,this._createPool(t));for(let e=0;e<t;e++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+t,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+t),this._update(),this._templateCost=(window.performance.now()-e)/t,s=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===s||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,s)),$e):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,s),Ve))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){const{physicalTop:e,indexes:t}=this._getReusables(!0);this._physicalTop=e,this._virtualStart=this._virtualStart+t.length,this._physicalStart=this._physicalStart+t.length,this._update(t),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged:function(e){"items"===e.path&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,Be))},_iterateItems:function(e,t){let s,i,r,n;if(2===arguments.length&&t){for(n=0;n<t.length;n++)if(s=t[n],i=this._computeVidx(s),null!=(r=e.call(this,s,i)))return r}else{for(s=this._physicalStart,i=this._virtualStart;s<this._physicalCount;s++,i++)if(null!=(r=e.call(this,s,i)))return r;for(s=0;s<this._physicalStart;s++,i++)if(null!=(r=e.call(this,s,i)))return r}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_updateMetrics:function(e){Ls();let t=0,s=0;const i=this._physicalAverageCount,r=this._physicalAverage;this._iterateItems((function(e){s+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this._physicalSize=this._physicalSize+t-s,this._physicalAverageCount!==i&&(this._physicalAverage=Math.round((r*i+t)/this._physicalAverageCount))},_positionItems:function(){this._adjustScrollPosition();let e=this._physicalTop;this._iterateItems((function(t){this.translate3d(0,e+"px",0,this._physicalItems[t]),e+=this._physicalSizes[t]}))},_adjustScrollPosition:function(){const e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;const t=this._scrollTop;!Kr&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(e){this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToIndex:function(e){if("number"!=typeof e||e<0||e>this.items.length-1)return;if(Ls(),0===this._physicalCount)return;e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=e-1),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart)*this._physicalAverage;let t=this._physicalStart,s=this._virtualStart,i=0;const r=this._hiddenContentSize;for(;s<e&&i<=r;)i+=this._physicalSizes[t],t=(t+1)%this._physicalCount,s++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+i),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this.updateViewportBoundaries(),this._isVisible?(this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),Be)},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_getPhysicalIndex:function(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},_clamp:function(e,t,s){return Math.min(s,Math.max(t,e))},_debounce:function(e,t,s){this._debouncers=this._debouncers||{},this._debouncers[e]=Ut.debounce(this._debouncers[e],s,t.bind(this)),qt(this._debouncers[e])}});
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class en extends Qr{static get properties(){return{size:{type:Number,notify:!0},_vidxOffset:{type:Number,value:0}}}static get observers(){return["_effectiveSizeChanged(_effectiveSize)"]}connectedCallback(){super.connectedCallback(),this._scrollHandler()}_updateScrollerItem(){}_afterScroll(){}_getRowTarget(){}_createScrollerRows(){}_canPopulate(){}scrollToIndex(e){this._warnPrivateAPIAccess("scrollToIndex"),this._scrollingToIndex=!0,e=Math.min(Math.max(e,0),this._effectiveSize-1),this.$.table.scrollTop=e/this._effectiveSize*(this.$.table.scrollHeight-this.$.table.offsetHeight),this._scrollHandler(),this._accessIronListAPI((()=>this._maxScrollTop))&&this._virtualCount<this._effectiveSize&&this._adjustVirtualIndexOffset(1e6),this._accessIronListAPI((()=>super.scrollToIndex(e-this._vidxOffset))),this._scrollHandler();const t=Array.from(this.$.items.children).filter((t=>t.index===e))[0];if(t){const e=t.getBoundingClientRect().top-this.$.header.getBoundingClientRect().bottom;Math.abs(e)>1&&(this.$.table.scrollTop+=e,this._scrollHandler())}this._scrollingToIndex=!1}_effectiveSizeChanged(e){let t,s=0;if(this._iterateItems(((e,i)=>{if(i===this._firstVisibleIndex){const i=this._physicalItems[e];t=i.index,s=i.getBoundingClientRect().top}})),this.items&&e<this.items.length&&(this._scrollTop=0),!Array.isArray(this.items)){const t=1e5;this.items={length:Math.min(e,t)}}this._accessIronListAPI((()=>super._itemsChanged({path:"items"}))),this._virtualCount=Math.min(this.items.length,e)||0,0===this._scrollTop&&(this._accessIronListAPI((()=>this._scrollToIndex(Math.min(e-1,t)))),this._iterateItems((e=>{const i=this._physicalItems[e];if(i.index===t&&(this.$.table.scrollTop+=Math.round(i.getBoundingClientRect().top-s)),i.index===this._focusedItemIndex&&this._itemsFocusable&&this.$.items.contains(this.shadowRoot.activeElement)){const e=Array.from(this._itemsFocusable.parentElement.children).indexOf(this._itemsFocusable);i.children[e].focus()}}))),this._assignModels(),requestAnimationFrame((()=>this._update())),this.__updateFooterPositioning()}_positionItems(){let e;this._adjustScrollPosition(),isNaN(this._physicalTop)&&(e=!0,this._physicalTop=0);let t=this._physicalTop;this._iterateItems((e=>{this._physicalItems[e].style.transform=`translateY(${t}px)`,t+=this._physicalSizes[e]})),e&&this._scrollToIndex(0)}_increasePoolIfNeeded(e){0===e&&this._scrollingToIndex||!this._canPopulate()||!this._effectiveSize||(this._initialPoolCreated?this._optPhysicalSize!==1/0&&(this._debounceIncreasePool=Ut.debounce(this._debounceIncreasePool,Be,(()=>{this._updateMetrics();const e=this._optPhysicalSize-this._physicalSize;let t=Math.ceil(e/this._physicalAverage);this._physicalCount+t>this._effectiveSize&&(t=Math.max(0,this._effectiveSize-this._physicalCount)),this._physicalSize&&t>0&&this._optPhysicalSize!==1/0&&(super._increasePoolIfNeeded(t),this.__reorderChildNodes())}))):(this._initialPoolCreated=!0,super._increasePoolIfNeeded(25)))}__reorderChildNodes(){const e=Array.from(this.$.items.childNodes);!!e.reduce(((e,t,s,i)=>{if(0===s||i[s-1].index===t.index-1)return e}),!0)||e.sort(((e,t)=>e.index-t.index)).forEach((e=>this.$.items.appendChild(e)))}_createPool(e){const t=document.createDocumentFragment(),s=this._createScrollerRows(e);s.forEach((e=>t.appendChild(e))),this._getRowTarget().appendChild(t);const i=this.querySelector("[slot]");if(i){const e=i.getAttribute("slot");i.setAttribute("slot","foo-bar"),i.setAttribute("slot",e)}var r,n,o;return r=this,n=()=>this.notifyResize(),qs||Xs(),Js.push([r,n,o]),s}_assignModels(e){this._iterateItems(((e,t)=>{const s=this._physicalItems[e];this._toggleAttribute("hidden",t>=this._effectiveSize,s),this._updateScrollerItem(s,t+(this._vidxOffset||0))}),e)}_scrollHandler(){const e=this.$.table.scrollTop-this._scrollPosition;this._accessIronListAPI(super._scrollHandler);const t=this._vidxOffset;this._accessIronListAPI((()=>this._maxScrollTop))&&this._virtualCount<this._effectiveSize?this._adjustVirtualIndexOffset(e):this._vidxOffset=0,this._vidxOffset!==t&&this._update(),this._afterScroll()}_adjustVirtualIndexOffset(e){if(Math.abs(e)>1e4){if(this._noScale)return void(this._noScale=!1);const e=this.$.table.scrollTop/(this.$.table.scrollHeight-this.$.table.offsetHeight),t=e*this._effectiveSize;this._vidxOffset=Math.round(t-e*this._virtualCount)}else{const e=this._vidxOffset||0,t=1e3,s=100;0===this._scrollTop?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<t&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,s),e!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)),this._noScale=!0);const i=this._effectiveSize-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=i,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount)):this.firstVisibleIndex>this._virtualCount-t&&this._vidxOffset<i&&(this._vidxOffset+=Math.min(i-this._vidxOffset,s),e!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)),this._noScale=!0)}}_accessIronListAPI(e){this._warnPrivateAPIAccessAsyncEnabled=!1;const t=e.apply(this);return this._debouncerWarnPrivateAPIAccess=Ut.debounce(this._debouncerWarnPrivateAPIAccess,Be,(()=>this._warnPrivateAPIAccessAsyncEnabled=!0)),t}_debounceRender(e,t){super._debounceRender((()=>this._accessIronListAPI(e)),t)}_warnPrivateAPIAccess(e){this._warnPrivateAPIAccessAsyncEnabled&&console.warn(`Accessing private API (${e})!`)}_render(){this._accessIronListAPI(super._render)}_itemsChanged(){}get _firstVisibleIndex(){return this._accessIronListAPI((()=>super.firstVisibleIndex))}get _lastVisibleIndex(){return this._accessIronListAPI((()=>super.lastVisibleIndex))}_scrollToIndex(e){this._accessIronListAPI((()=>this.scrollToIndex(e)))}get firstVisibleIndex(){return this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex}set firstVisibleIndex(e){this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex=e}get lastVisibleIndex(){return this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex}set lastVisibleIndex(e){this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex=e}updateViewportBoundaries(){this._warnPrivateAPIAccess("updateViewportBoundaries"),super.updateViewportBoundaries.apply(this,arguments)}_resizeHandler(){super._resizeHandler(),Ls()}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tn=e=>class extends e{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter((e=>e.some((e=>e._headerTemplate||e.headerRenderer||e.path||e.header)))).length}_a11yGetFooterRowCount(e){return e.filter((e=>e.some((e=>e._headerTemplate||e.headerRenderer)))).length}_a11yUpdateGridSize(e,t){if(void 0===e||void 0===t)return;const s=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",s&&s.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach(((e,t)=>e.setAttribute("aria-rowindex",t+1)))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach(((e,t)=>e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1)))}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",Boolean(t)),Array.from(e.children).forEach((e=>e.setAttribute("aria-selected",Boolean(t))))}_a11yUpdateRowLevel(e,t){e.setAttribute("aria-level",t+1)}_a11yUpdateRowDetailsOpened(e,t){Array.from(e.children).forEach((e=>{"boolean"==typeof t?e.setAttribute("aria-expanded",t):e.hasAttribute("aria-expanded")&&e.removeAttribute("aria-expanded")}))}_a11ySetRowDetailsCell(e,t){Array.from(e.children).forEach((e=>{e!==t&&e.setAttribute("aria-controls",t.id)}))}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach((e=>{let t=e.parentNode;for(;t&&"vaadin-grid-cell-content"!==t.localName;)t=t.parentNode;if(t&&t.assignedSlot){t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")}}))}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,sn=e=>class extends e{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this))}_activateItem(e){const t=e.detail.model,s=t?t.item:null;s&&(this.activeItem=this._itemsEqual(this.activeItem,s)?null:s)}_onClick(e){if(e.defaultPrevented)return;const t=e.composedPath(),s=t[t.indexOf(this.$.table)-3];if(!s||s.getAttribute("part").indexOf("details-cell")>-1)return;const i=s._content,r=this.getRootNode().activeElement;i.contains(r)||this._isFocusable(e.target)||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(s.parentElement)}}))}_isFocusable(e){return rn(e)}},rn=e=>{if(!e.parentNode)return!1;const t=-1!==Array.from(e.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter((e=>"cell body-cell"!==e.getAttribute("part"))).indexOf(e);return!e.disabled&&t},nn=e=>class extends e{static get properties(){return{items:Array}}static get observers(){return["_itemsChanged(items, items.*, isAttached)"]}_itemsChanged(e,t,s){if(s){if(!Array.isArray(e))return null==e&&(this.size=0),void(this.dataProvider===this._arrayDataProvider&&(this.dataProvider=void 0));this.size=e.length,this.dataProvider=this.dataProvider||this._arrayDataProvider,this.clearCache(),this._ensureFirstPageLoaded()}}_arrayDataProvider(e,t){let s=(Array.isArray(this.items)?this.items:[]).slice(0);this._filters&&this._checkPaths(this._filters,"filtering",s)&&(s=this._filter(s)),this.size=s.length,e.sortOrders.length&&this._checkPaths(this._sorters,"sorting",s)&&(s=s.sort(this._multiSort.bind(this)));const i=e.page*e.pageSize,r=i+e.pageSize;t(s.slice(i,r),s.length)}_checkPaths(e,t,s){if(!s.length)return!1;let i=!0;for(let r in e){const n=e[r].path;if(!n||-1===n.indexOf("."))continue;const o=n.replace(/\.[^.]*$/,"");void 0===qr.get(o,s[0])&&(console.warn(`Path "${n}" used for ${t} does not exist in all of the items, ${t} is disabled.`),i=!1)}return i}_multiSort(e,t){return this._sorters.map((s=>"asc"===s.direction?this._compare(qr.get(s.path,e),qr.get(s.path,t)):"desc"===s.direction?this._compare(qr.get(s.path,t),qr.get(s.path,e)):0)).reduce(((e,t)=>e||t),0)}_normalizeEmptyValue(e){return[void 0,null].indexOf(e)>=0?"":isNaN(e)?e.toString():e}_compare(e,t){return(e=this._normalizeEmptyValue(e))<(t=this._normalizeEmptyValue(t))?-1:e>t?1:0}_filter(e){return e.filter((e=>0===this._filters.filter((t=>{const s=this._normalizeEmptyValue(qr.get(t.path,e)),i=this._normalizeEmptyValue(t.value).toString().toLowerCase();return-1===s.toString().toLowerCase().indexOf(i)})).length))}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,on=e=>class extends(zs(e)){ready(){super.ready();const e=this.$.scroller;As(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",(t=>e.hasAttribute("column-resizing")&&t.preventDefault())),e.addEventListener("contextmenu",(e=>"resize-handle"==e.target.getAttribute("part")&&e.preventDefault())),e.addEventListener("mousedown",(e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault()))}_onHeaderTrack(e){const t=e.target;if("resize-handle"===t.getAttribute("part")){let s=t.parentElement._column;for(this._toggleAttribute("column-resizing",!0,this.$.scroller);"vaadin-grid-column-group"===s.localName;)s=Array.prototype.slice.call(s._childColumns,0).sort((function(e,t){return e._order-t._order})).filter((function(e){return!e.hidden})).pop();const i=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),r=i.filter((e=>e._column===s))[0];if(r.offsetWidth){const t=window.getComputedStyle(r),i=10+parseInt(t.paddingLeft)+parseInt(t.paddingRight)+parseInt(t.borderLeftWidth)+parseInt(t.borderRightWidth)+parseInt(t.marginLeft)+parseInt(t.marginRight),n=r.offsetWidth+(this.__isRTL?r.getBoundingClientRect().left-e.detail.x:e.detail.x-r.getBoundingClientRect().right);s.width=Math.max(i,n)+"px",s.flexGrow=0}i.sort((function(e,t){return e._column._order-t._column._order})).forEach((function(e,t,s){t<s.indexOf(r)&&(e._column.width=e.offsetWidth+"px",e._column.flexGrow=0)})),"end"===e.detail.state&&(this._toggleAttribute("column-resizing",!1,this.$.scroller),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:s}}))),this._resizeHandler()}}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,an=class e{constructor(e,t,s){this.grid=e,this.parentCache=t,this.parentItem=s,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter((e=>this.itemCaches[e].isLoading()))[0])}getItemForIndex(e){const{cache:t,scaledIndex:s}=this.getCacheAndIndex(e);return t.items[s]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce(((e,t)=>{const s=this.itemCaches[t];return s.updateSize(),e+s.effectiveSize}),0):0}ensureSubCacheForScaledIndex(t){if(!this.itemCaches[t]){const s=new e(this.grid,this,this.items[t]);this.itemCaches[t]=s,this.grid._loadPage(0,s)}}getCacheAndIndex(e){let t=e;const s=Object.keys(this.itemCaches);for(let e=0;e<s.length;e++){const i=Number(s[e]),r=this.itemCaches[i];if(t<=i)return{cache:this,scaledIndex:t};if(t<=i+r.effectiveSize)return r.getCacheAndIndex(t-i-1);t-=r.effectiveSize}return{cache:this,scaledIndex:t}}},ln=e=>class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function(){return new an(this)}},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_sizeChanged(size)","_itemIdPathChanged(itemIdPath)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){const t=e-this._cache.size;this._cache.size+=t,this._cache.effectiveSize+=t,this._effectiveSize=this._cache.effectiveSize,this._increasePoolIfNeeded(0),this._debounceIncreasePool&&this._debounceIncreasePool.flush()}_getItem(e,t){if(e>=this._effectiveSize)return;t.index=e;const{cache:s,scaledIndex:i}=this._cache.getCacheAndIndex(e),r=s.items[i];r?(this._toggleAttribute("loading",!1,t),this._updateItem(t,r),this._isExpanded(r)&&s.ensureSubCacheForScaledIndex(i)):(this._toggleAttribute("loading",!0,t),this._loadPage(this._getPageForIndex(i),s))}_expandedInstanceChangedCallback(e,t){void 0!==e.item&&(t?this.expandItem(e.item):this.collapseItem(e.item))}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this.__cacheExpandedKeys(),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this._assignModels()}_itemIdPathChanged(){this.__cacheExpandedKeys()}__cacheExpandedKeys(){this.expandedItems&&(this.__expandedKeys=new Set,this.expandedItems.forEach((e=>{this.__expandedKeys.add(this.getItemId(e))})))}expandItem(e){this._isExpanded(e)||this.push("expandedItems",e)}collapseItem(e){this._isExpanded(e)&&this.splice("expandedItems",this._getItemIndexInArray(e,this.expandedItems),1)}_getIndexLevel(e){let{cache:t}=this._cache.getCacheAndIndex(e),s=0;for(;t.parentCache;)t=t.parentCache,s++;return s}_canPopulate(){return Boolean(this._hasData&&this._columnTree)}_loadPage(e,t){if(!t.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),t.pendingRequests[e]=!0;const s={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:t.parentItem};this.dataProvider(s,((i,r)=>{void 0!==r?t.size=r:s.parentItem&&(t.size=i.length);const n=Array.from(this.$.items.children).map((e=>e._item));i.forEach(((s,i)=>{const r=e*this.pageSize+i;t.items[r]=s,this._isExpanded(s)&&n.indexOf(s)>-1&&t.ensureSubCacheForScaledIndex(r)})),this._hasData=!0,delete t.pendingRequests[e],this._debouncerApplyCachedData=Ut.debounce(this._debouncerApplyCachedData,He.after(0),(()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter((e=>!e.hidden)).forEach((e=>{this._cache.getItemForIndex(e.index)&&this._getItem(e.index,e)})),this._increasePoolIfNeeded(0),this.__scrollToPendingIndex()})),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__itemsReceived()}))}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new an(this),Array.from(this.$.items.children).forEach((e=>{Array.from(e.children).forEach((e=>{e._instance&&e._instance._setPendingProperty("item",{},!1)}))})),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this._assignModels(),this._effectiveSize&&this._initialPoolCreated||this._loadPage(0,this._cache)}_pageSizeChanged(e,t){void 0!==t&&e!==t&&this.clearCache()}_checkSize(){void 0===this.size&&0===this._effectiveSize&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`’s `callback` call.")}_dataProviderChanged(e,t){void 0!==t&&this.clearCache(),e&&this.items&&this.items.length&&this._scrollToIndex(this._firstVisibleIndex),this._ensureFirstPageLoaded(),this._debouncerCheckSize=Ut.debounce(this._debouncerCheckSize,He.after(2e3),this._checkSize.bind(this)),this._scrollHandler()}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let s=-1;return t.forEach(((t,i)=>{this._itemsEqual(t,e)&&(s=i)})),s}scrollToIndex(e){super.scrollToIndex(e),isNaN(e)||!this._cache.isLoading()&&this.clientHeight||(this.__pendingScrollToIndex=e)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){const e=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this.scrollToIndex(e)}}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,hn=e=>class extends e{ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){for(let t=0;t<e.length;t++)if("vaadin-grid-column-group"===e[t].localName)return!0;return!1}_getChildColumns(e){return Xi.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map((e=>"vaadin-grid-column-group"===e.localName?this._getChildColumns(e):[e])).reduce(((e,t)=>e.concat(t)),[])}_getColumnTree(){const e=[];for(let t=Xi.getFlattenedNodes(this).filter(this._isColumnElement);e.push(t),this._hasColumnGroups(t);)t=this._flattenColumnGroups(t);return e}_updateColumnTree(){const e=this._getColumnTree();this._arrayEquals(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new Xi(this,(e=>{const t=e.addedNodes.filter((e=>"template"===e.localName&&e.classList.contains("row-details")))[0];t&&this._rowDetailsTemplate!==t&&(this._rowDetailsTemplate=t),(e.addedNodes.filter(this._isColumnElement).length>0||e.removedNodes.filter(this._isColumnElement).length>0)&&this._updateColumnTree(),this._debouncerCheckImports=Ut.debounce(this._debouncerCheckImports,He.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()}))}_arrayEquals(e,t){if(!e||!t||e.length!=t.length)return!1;for(let s=0,i=e.length;s<i;s++)if(e[s]instanceof Array&&t[s]instanceof Array){if(!this._arrayEquals(e[s],t[s]))return!1}else if(e[s]!=t[s])return!1;return!0}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach((e=>{const t=this.querySelector(e);!t||t instanceof jt||console.warn(`Make sure you have imported the required module for <${e}> element.`)}))}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach((e=>this._updateFirstAndLastColumnForRow(e)))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort(((e,t)=>e._column._order-t._column._order)).forEach(((e,t,s)=>{this._toggleAttribute("first-column",0===t,e),this._toggleAttribute("last-column",t===s.length-1,e)}))}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,dn=e=>class extends e{getEventContext(e){const t={},s=e.composedPath(),i=s[s.indexOf(this.$.table)-3];return i?(t.section=["body","header","footer","details"].filter((e=>i.getAttribute("part").indexOf(e)>-1))[0],i._column&&(t.column=i._column),"body"!==t.section&&"details"!==t.section||Object.assign(t,this.__getRowModel(i.parentElement)),t):t}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,cn=e=>class extends e{static get properties(){return{_filters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){-1===this._filters.indexOf(e.target)&&this._filters.push(e.target),e.stopPropagation(),this.dataProvider&&this.clearCache()}_mapFilters(){return this._filters.map((e=>({path:e.path,value:e.value})))}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class un extends jt{static get is(){return"vaadin-grid-templatizer"}static get properties(){return{dataHost:Object,template:Object,_templateInstances:{type:Array,value:function(){return[]}},_parentPathValues:{value:function(){return{}}},_grid:Object}}static get observers(){return["_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)"]}constructor(){super(),this._instanceProps={detailsOpened:!0,index:!0,item:!0,selected:!0,expanded:!0,level:!0}}createInstance(){this._ensureTemplatized();const e=new this._TemplateClass({});return this.addInstance(e),e}addInstance(e){-1===this._templateInstances.indexOf(e)&&(this._templateInstances.push(e),requestAnimationFrame((()=>this.notifyPath("_templateInstances.*",this._templateInstances))))}removeInstance(e){const t=this._templateInstances.indexOf(e);this.splice("_templateInstances",t,1)}_ensureTemplatized(){this._TemplateClass||(this._TemplateClass=Mr(this.template,this,{instanceProps:this._instanceProps,parentModel:!0,forwardHostProp:function(e,t){this._forwardParentProp(e,t),this._templateInstances&&this._templateInstances.forEach((s=>s.notifyPath(e,t)))},notifyInstanceProp:function(e,t,s){if("index"===t||"item"===t)return;const i=`__${t}__`;if(e[i]===s)return;e[i]=s;const r=Array.from(this._grid.$.items.children).filter((t=>this._grid._itemsEqual(t._item,e.item)))[0];r&&Array.from(r.children).forEach((e=>{e._instance&&(e._instance[i]=s,e._instance.notifyPath(t,s))}));const n="item.";if(Array.isArray(this._grid.items)&&0===t.indexOf(n)){const i=this._grid.items.indexOf(e.item),r=t.slice(n.length);this._grid.notifyPath(`items.${i}.${r}`,s)}const o=`_${t}InstanceChangedCallback`;this._grid&&this._grid[o]&&this._grid[o](e,s)}}))}_forwardParentProp(e,t){this._parentPathValues[e]=t,this._templateInstances.forEach((s=>s.notifyPath(e,t)))}_templateInstancesChanged(e){let t,s;if("_templateInstances"===e.path)t=0,s=this._templateInstances.length;else{if("_templateInstances.splices"!==e.path)return;t=e.value.index,s=e.value.addedCount}Object.keys(this._parentPathValues||{}).forEach((e=>{for(let i=t;i<t+s;i++)this._templateInstances[i].set(e,this._parentPathValues[e])}))}}customElements.define(un.is,un);
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const pn=e=>class extends e{static get properties(){return{detailsOpenedItems:{type:Array,value:function(){return[]}},_rowDetailsTemplate:Object,rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)","_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)"]}_rowDetailsTemplateOrRendererChanged(e,t){if(e&&t)throw new Error("You should only use either a renderer or a template for row details");if(e||t){if(e&&!e.templatizer){const t=new un;t._grid=this,t.dataHost=this.dataHost,t.template=e,e.templatizer=t}this._columnTree&&Array.from(this.$.items.children).forEach((e=>{e.querySelector("[part~=details-cell]")||(this._updateRow(e,this._columnTree[this._columnTree.length-1]),this._a11yUpdateRowDetailsOpened(e,!1)),delete e.querySelector("[part~=details-cell]")._instance})),this.detailsOpenedItems.length&&(Array.from(this.$.items.children).forEach(this._toggleDetailsCell,this),this._update())}}_detailsOpenedItemsChanged(e){"detailsOpenedItems.length"!==e.path&&e.value&&Array.from(this.$.items.children).forEach((e=>{this._toggleDetailsCell(e,e._item),this._a11yUpdateRowDetailsOpened(e,this._isDetailsOpened(e._item)),this._toggleAttribute("details-opened",this._isDetailsOpened(e._item),e)}))}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),this._toggleAttribute("frozen",!0,e)}_toggleDetailsCell(e,t){const s=e.querySelector('[part~="details-cell"]');if(!s)return;const i=!this._isDetailsOpened(t),r=!!s.hidden!==i;(s._instance||s._renderer)&&s.hidden===i||(s.hidden=i,i?e.style.removeProperty("padding-bottom"):(this.rowDetailsRenderer?(s._renderer=this.rowDetailsRenderer,s._renderer.call(this,s._content,this,{index:e.index,item:t})):this._rowDetailsTemplate&&!s._instance&&(s._instance=this._rowDetailsTemplate.templatizer.createInstance(),s._content.innerHTML="",s._content.appendChild(s._instance.root),this._updateItem(e,t)),Ls(),e.style.setProperty("padding-bottom",`${s.offsetHeight}px`),requestAnimationFrame((()=>this.notifyResize())))),r&&(this._updateMetrics(),this._positionItems())}_updateDetailsCellHeights(){Array.from(this.$.items.querySelectorAll('[part~="details-cell"]:not([hidden])')).forEach((e=>{e.parentElement.style.setProperty("padding-bottom",`${e.offsetHeight}px`)}))}_isDetailsOpened(e){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(e,this.detailsOpenedItems)}openItemDetails(e){this._isDetailsOpened(e)||this.push("detailsOpenedItems",e)}closeItemDetails(e){this._isDetailsOpened(e)&&this.splice("detailsOpenedItems",this._getItemIndexInArray(e,this.detailsOpenedItems),1)}_detailsOpenedInstanceChangedCallback(e,t){t?this.openItemDetails(e.item):this.closeItemDetails(e.item)}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,_n=500,mn=500,fn=e=>class extends e{static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element,_deltaYAcc:{type:Number,value:0},_useSticky:{type:Boolean,value:window.CSS&&window.CSS.supports&&(window.CSS.supports("position","sticky")||window.CSS.supports("position","-webkit-sticky"))}}}static get observers(){return["_scrollViewportHeightUpdated(_viewportHeight)"]}set _scrollTop(e){this.$.table.scrollTop=e}get _scrollTop(){return this.$.table.scrollTop}constructor(){super(),this._scrollLineHeight=this._getScrollLineHeight()}_getScrollLineHeight(){const e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);const t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}_scrollViewportHeightUpdated(e){this._scrollPageHeight=e-this.$.header.clientHeight-this.$.footer.clientHeight-this._scrollLineHeight}ready(){super.ready(),this.$.outerscroller=document.createElement("div"),this.scrollTarget=this.$.table,this.addEventListener("wheel",this._onWheel),this.$.items.addEventListener("focusin",(e=>{const t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1]})),this.$.items.addEventListener("focusout",(()=>this._rowWithFocusedElement=void 0)),this.scrollTarget.addEventListener("mousedown",(()=>this.__mouseDown=!0)),this.scrollTarget.addEventListener("mouseup",(()=>{this.__mouseDown=!1,this.__pendingReorder&&(this.__pendingReorder=!1,setTimeout((()=>this._reorderRows()),_n))}))}scrollToIndex(e){this._accessIronListAPI((()=>super.scrollToIndex(e)))}_onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY))return;const t=this.$.table;let s=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?s*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(s*=this._scrollPageHeight),this._wheelAnimationFrame)return this._deltaYAcc+=s,void e.preventDefault();s+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this._debouncerWheelAnimationFrame=Ut.debounce(this._debouncerWheelAnimationFrame,Be,(()=>this._wheelAnimationFrame=!1));const i=Math.abs(e.deltaX)+Math.abs(s);this._canScroll(t,e.deltaX,s)?(e.preventDefault(),t.scrollTop+=s,t.scrollLeft+=e.deltaX,this._scrollHandler(),this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=Ut.debounce(this._debouncerIgnoreNewWheel,He.after(mn),(()=>this._ignoreNewWheel=!1))):this._hasResidualMomentum&&i<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():i>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=i}_hasScrolledAncestor(e,t,s){return"vaadin-grid-cell-content"!==e.localName&&(!(!this._canScroll(e,t,s)||-1===["auto","scroll"].indexOf(getComputedStyle(e).overflow))||(e!==this&&e.parentElement?this._hasScrolledAncestor(e.parentElement,t,s):void 0))}_canScroll(e,t,s){return s>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||s<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame((()=>this._toggleAttribute("scrolling",!0,this.$.scroller)))),this._debounceScrolling=Ut.debounce(this._debounceScrolling,He.after(_n),(()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this._toggleAttribute("scrolling",!1,this.$.scroller),this._reorderRows()}))}_afterScroll(){this._translateStationaryElements(),this.hasAttribute("reordering")||this._scheduleScrolling(),this._updateOverflow()}_updateOverflow(){let e="";const t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top"),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left"),this._debounceOverflow=Ut.debounce(this._debounceOverflow,Be,(()=>{const t=e.trim();t.length>0&&this.getAttribute("overflow")!==t?this.setAttribute("overflow",t):0==t.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}))}_reorderRows(){if(this.__mouseDown)return void(this.__pendingReorder=!0);const e=this.$.items,t=e.querySelectorAll("tr");if(!t.length)return;const s=this._virtualStart+this._vidxOffset,i=this._rowWithFocusedElement||Array.from(t).filter((e=>!e.hidden))[0];if(!i)return;const r=i.index-s,n=Array.from(t).indexOf(i)-r;if(n>0)for(let s=0;s<n;s++)e.appendChild(t[s]);else if(n<0)for(let s=t.length+n;s<t.length;s++)e.insertBefore(t[s],t[0]);if(this._safari){const{transform:e}=this.$.header.style;this.$.header.style.transform="",setTimeout((()=>this.$.header.style.transform=e))}}_frozenCellsChanged(){this._debouncerCacheElements=Ut.debounce(this._debouncerCacheElements,Ve,(()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach((function(e){e.style.transform=""})),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._updateScrollerMeasurements(),this._translateStationaryElements()})),this._updateLastFrozen()}_updateScrollerMeasurements(){this._frozenCells.length>0&&this.__isRTL&&(this.__scrollerMetrics={scrollWidth:this.$.table.scrollWidth,clientWidth:this.$.table.clientWidth})}_updateLastFrozen(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort(((e,t)=>e._order-t._order));const t=e.reduce(((e,t,s)=>(t._lastFrozen=!1,t.frozen&&!t.hidden?s:e)),void 0);void 0!==t&&(e[t]._lastFrozen=!0)}_translateStationaryElements(){const e=Math.max(0,this._scrollLeft),t=Math.max(0,this._scrollTop);let s=0,i=0,r=0;if(this._useSticky||(s=e,i=t,r=this.$.table.clientHeight-this.$.footer.offsetHeight-this.$.footer.offsetTop),this.$.header.style.transform=this._getTranslate(-e+s,i),this.$.footer.style.transform=this._getTranslate(-e+s,i+r),this.$.items.style.transform=this._getTranslate(-e+s,0),this._frozenCells.length>0){const e=this.__isRTL?this.__getNormalizedScrollLeft(this.$.table)+this.__scrollerMetrics.clientWidth-this.__scrollerMetrics.scrollWidth:this._scrollLeft,t=this._getTranslate(e,0);for(let e=0;e<this._frozenCells.length;e++)this._frozenCells[e].style.transform=t}}_getTranslate(e,t){return`translate(${e}px, ${t}px)`}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,gn=e=>class extends e{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_selectedItemsChanged(selectedItems.*)"]}_isSelected(e){return this.selectedItems&&this._getItemIndexInArray(e,this.selectedItems)>-1}selectItem(e){this._isSelected(e)||this.push("selectedItems",e)}deselectItem(e){const t=this._getItemIndexInArray(e,this.selectedItems);t>-1&&this.splice("selectedItems",t,1)}_toggleItem(e){-1===this._getItemIndexInArray(e,this.selectedItems)?this.selectItem(e):this.deselectItem(e)}_selectedItemsChanged(e){!this.$.items.children.length||"selectedItems"!==e.path&&"selectedItems.splices"!==e.path||Array.from(this.$.items.children).forEach((e=>{this._updateItem(e,e._item)}))}_selectedInstanceChangedCallback(e,t){t?this.selectItem(e.item):this.deselectItem(e.item)}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,yn=e=>class extends e{static get properties(){return{multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function(){return[]}},_previousSorters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const t=e.target;this._removeArrayItem(this._sorters,t),t._order=null,this.multiSort?(t.direction&&this._sorters.unshift(t),this._sorters.forEach(((e,t)=>e._order=this._sorters.length>1?t:null),this)):t.direction&&(this._sorters.forEach((e=>{e._order=null,e.direction=null})),this._sorters=[t]),e.stopPropagation(),this.dataProvider&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map((e=>({path:e.path,direction:e.direction})))}_removeArrayItem(e,t){const s=e.indexOf(t);s>-1&&e.splice(s,1)}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,bn=e=>class extends e{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter((e=>!e.hidden)).forEach((e=>this._generateCellClassNames(e,this.__getRowModel(e))))}_generateCellClassNames(e,t){Array.from(e.children).forEach((e=>{if(e.__generatedClasses&&e.__generatedClasses.forEach((t=>e.classList.remove(t))),this.cellClassNameGenerator){const s=this.cellClassNameGenerator(e._column,t);e.__generatedClasses=s&&s.split(" ").filter((e=>e.length>0)),e.__generatedClasses&&e.__generatedClasses.forEach((t=>e.classList.add(t)))}}))}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,vn="between",An="on-top-or-between",wn="on-grid",Cn="on-top",xn="above",Sn="below",Pn="empty",Tn=e=>class extends e{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",(e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())}))}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if("vaadin-grid-cell-content"===t.localName&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this._toggleAttribute("dragging-rows",!0,this),this._safari){const e=t.style.transform;t.style.top=/translateY\((.*)\)/.exec(e)[1],t.style.transform="none",requestAnimationFrame((()=>{t.style.top="",t.style.transform=e}))}const s=t.getBoundingClientRect();this._ios?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-s.left,e.clientY-s.top);let i=[t];this._isSelected(t._item)&&(i=this.__getViewportRows().filter((e=>this._isSelected(e._item))).filter((e=>!this.dragFilter||this.dragFilter(this.__getRowModel(e))))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(i)),t.setAttribute("dragstart",i.length>1?i.length:""),this.updateStyles({"--_grid-drag-start-x":e.clientX-s.left+20+"px","--_grid-drag-start-y":e.clientY-s.top+10+"px"}),requestAnimationFrame((()=>{t.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})}));const r=new CustomEvent("grid-dragstart",{detail:{draggedItems:i.map((e=>e._item)),setDragData:(t,s)=>e.dataTransfer.setData(t,s),setDraggedItemsCount:e=>t.setAttribute("dragstart",e)}});r.originalEvent=e,this.dispatchEvent(r)}}_onDragEnd(e){this._toggleAttribute("dragging-rows",!1,this),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY))return void this._clearDragStyles();let t=e.composedPath().filter((e=>"tr"===e.localName))[0];if(this._effectiveSize&&this.dropMode!==wn)if(t&&t.parentNode===this.$.items){const s=t.getBoundingClientRect();if(this._dropLocation=Cn,this.dropMode===vn){const t=e.clientY-s.top<s.bottom-e.clientY;this._dropLocation=t?xn:Sn}else this.dropMode===An&&(e.clientY-s.top<s.height/3?this._dropLocation=xn:e.clientY-s.top>s.height/3*2&&(this._dropLocation=Sn))}else{if(t)return;if(this.dropMode!==vn&&this.dropMode!==An)return;t=Array.from(this.$.items.children).filter((e=>!e.hidden)).pop(),this._dropLocation=Sn}else this._dropLocation=Pn;if(t&&t.hasAttribute("drop-disabled"))return void(this._dropLocation=void 0);e.stopPropagation(),e.preventDefault(),this._dropLocation===Pn?this._toggleAttribute("dragover",!0,this):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&t.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const t=this.$.header.getBoundingClientRect().bottom,s=this.$.footer.getBoundingClientRect().top,i=t-e+this.__dndAutoScrollThreshold,r=e-s+this.__dndAutoScrollThreshold;let n=0;if(r>0?n=2*r:i>0&&(n=2*-i),n){const e=this.$.table.scrollTop;this.$.table.scrollTop+=n;if(e!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout((()=>this.__dndAutoScrolling=!1),20),this._scrollHandler(),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter((s=>{const i=s.getBoundingClientRect();return i.bottom>e&&i.top<t}))}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach((e=>e.removeAttribute("dragover")))}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map((t=>({type:t,data:e.dataTransfer.getData(t)})));this._clearDragStyles();const s=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});s.originalEvent=e,this.dispatchEvent(s)}}__formatDefaultTransferData(e){return e.map((e=>Array.from(e.children).filter((e=>!e.hidden&&-1===e.getAttribute("part").indexOf("details-cell"))).sort(((e,t)=>e._column._order>t._column._order?1:-1)).map((e=>e._content.textContent.trim())).filter((e=>e)).join("\t"))).join("\n")}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter((e=>!e.hidden)).forEach((e=>{this._filterDragAndDrop(e,this.__getRowModel(e))}))}_filterDragAndDrop(e,t){const s=!this.rowsDraggable||this.dragFilter&&!this.dragFilter(t),i=!this.dropMode||this.dropFilter&&!this.dropFilter(t);Array.from(e.children).map((e=>e._content)).forEach((e=>{s?e.removeAttribute("draggable"):e.setAttribute("draggable",!0)})),this._toggleAttribute("drag-disabled",s,e),this._toggleAttribute("drop-disabled",i,e)}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,En=e=>class extends e{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number}}ready(){super.ready(),this._ios||this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onCellFocusIn.bind(this)),this.$.table.addEventListener("focusout",this._onCellFocusOut.bind(this)),this.addEventListener("mousedown",(()=>{this._toggleAttribute("navigating",!1,this),this._isMousedown=!0})),this.addEventListener("mouseup",(()=>this._isMousedown=!1)))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&e.setAttribute("tabindex","0")}_onKeyDown(e){const t=e.key;let s;switch(t){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":s="Navigation";break;case"Enter":case"Escape":case"F2":s="Interaction";break;case"Tab":s="Tab";break;case" ":s="Space"}this._detectInteracting(e),this.hasAttribute("interacting")&&"Interaction"!==s&&(s=void 0),s&&this[`_on${s}KeyDown`](e,t)}_ensureScrolledToIndex(e){Array.from(this.$.items.children).filter((t=>t.index===e))[0]||this._scrollToIndex(e)}_onNavigationKeyDown(e,t){function s(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}this._scrollHandler(),e.preventDefault();const i=this._lastVisibleIndex-this._firstVisibleIndex-1;let r=0,n=0;switch(t){case"ArrowRight":r=this.__isRTL?-1:1;break;case"ArrowLeft":r=this.__isRTL?1:-1;break;case"Home":r=-1/0,e.ctrlKey&&(n=-1/0);break;case"End":r=1/0,e.ctrlKey&&(n=1/0);break;case"ArrowDown":n=1;break;case"ArrowUp":n=-1;break;case"PageDown":n=i;break;case"PageUp":n=-i}const o=e.composedPath()[0],a=s(o),l=this._elementMatches(o,'[part~="details-cell"]'),h=o.parentNode,d=h.parentNode,c=(d===this.$.items?this._effectiveSize:d.children.length)-1,u=d===this.$.items?void 0!==this._focusedItemIndex?this._focusedItemIndex:h.index:s(h);let p=Math.max(0,Math.min(u+n,c)),_=!1;if(d===this.$.items){const e=h._item,t=this._cache.getItemForIndex(p);_=l?0===n:1===n&&this._isDetailsOpened(e)||-1===n&&p!==u&&this._isDetailsOpened(t),_!==l&&(1===n&&_||-1===n&&!_)&&(p=u)}if(d!==this.$.items)if(p>u)for(;p<c&&d.children[p].hidden;)p++;else if(p<u)for(;p>0&&d.children[p].hidden;)p--;void 0===this._focusedColumnOrder&&(this._focusedColumnOrder=l?0:this._getColumns(d,u).filter((e=>!e.hidden))[a]._order);const m=this._getColumns(d,p).filter((e=>!e.hidden)),f=m.map((e=>e._order)).sort(((e,t)=>e-t)),g=f.length-1,y=f.indexOf(f.slice(0).sort(((e,t)=>Math.abs(e-this._focusedColumnOrder)-Math.abs(t-this._focusedColumnOrder)))[0]),b=0===n&&l?y:Math.max(0,Math.min(y+r,g));b!==y&&(this._focusedColumnOrder=void 0),d===this.$.items&&this._ensureScrolledToIndex(p),this._toggleAttribute("navigating",!0,this);const v=m.reduce(((e,t,s)=>(e[t._order]=s,e)),{})[f[b]],A=d===this.$.items?Array.from(d.children).filter((e=>e.index===p))[0]:d.children[p];if(!A)return;const w=_?Array.from(A.children).filter((e=>this._elementMatches(e,'[part~="details-cell"]')))[0]:A.children[v];if(this._scrollHorizontallyToCell(w),d===this.$.items&&(this._focusedItemIndex=p),d===this.$.items){const e=w.getBoundingClientRect(),t=this.$.footer.getBoundingClientRect().top,s=this.$.header.getBoundingClientRect().bottom;e.bottom>t?(this.$.table.scrollTop+=e.bottom-t,this._scrollHandler()):e.top<s&&(this.$.table.scrollTop-=s-e.top,this._scrollHandler())}w.focus()}_parseEventPath(e){const t=e.indexOf(this.$.table);return{rowGroup:e[t-1],row:e[t-2],cell:e[t-3]}}_onInteractionKeyDown(e,t){const s=e.composedPath()[0],i="input"===s.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(s.type);let r;switch(t){case"Enter":r=!this.hasAttribute("interacting")||!i;break;case"Escape":r=!1;break;case"F2":r=!this.hasAttribute("interacting")}const{cell:n}=this._parseEventPath(e.composedPath());if(this.hasAttribute("interacting")!==r)if(r){const t=n._content.querySelector("[focus-target]")||n._content.firstElementChild;t&&(e.preventDefault(),t.focus(),this._toggleAttribute("interacting",!0,this),this._toggleAttribute("navigating",!1,this))}else e.preventDefault(),this._focusedColumnOrder=void 0,n.focus(),this._toggleAttribute("interacting",!1,this),this._toggleAttribute("navigating",!0,this)}_predictFocusStepTarget(e,t){const s=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let i=s.indexOf(e);for(i+=t;i>=0&&i<=s.length-1&&(!s[i]||s[i].parentNode.hidden);)i+=t;return s[i]}_onTabKeyDown(e){const t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(t===this.$.table)this.$.table.focus();else if(t===this.$.focusexit)this.$.focusexit.focus();else if(t===this._itemsFocusable){let s=t;const i=this._itemsFocusable.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),i.index!==this._focusedItemIndex){const e=Array.from(i.children).indexOf(this._itemsFocusable),t=Array.from(this.$.items.children).filter((e=>e.index===this._focusedItemIndex))[0];t&&(s=t.children[e])}e.preventDefault(),s.focus()}else e.preventDefault(),t.focus();this._toggleAttribute("navigating",!0,this)}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0];t._content&&t._content.firstElementChild||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(t.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/.test(e.key))return;e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const e=this.hasAttribute("navigating");t._content.firstElementChild.click(),this._toggleAttribute("navigating",e,this)}}_onFocusIn(e){this._isMousedown||this._toggleAttribute("navigating",!0,this);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._toggleAttribute("interacting",!1,this)):this._detectInteracting(e)}_onFocusOut(e){this._toggleAttribute("navigating",!1,this),this._detectInteracting(e)}_onCellFocusIn(e){if(this._detectInteracting(e),3===e.composedPath().indexOf(this.$.table)){const t=e.composedPath()[0];this._activeRowGroup=t.parentNode.parentNode,this._activeRowGroup===this.$.header?this._headerFocusable=t:this._activeRowGroup===this.$.items?this._itemsFocusable=t:this._activeRowGroup===this.$.footer&&(this._footerFocusable=t),t._content.dispatchEvent(new CustomEvent("cell-focusin",{bubbles:!1}))}this._detectFocusedItemIndex(e)}_onCellFocusOut(e){if(3===e.composedPath().indexOf(this.$.table)){e.composedPath()[0]._content.dispatchEvent(new CustomEvent("cell-focusout",{bubbles:!1}))}}_detectInteracting(e){this._toggleAttribute("interacting",e.composedPath().some((e=>"vaadin-grid-cell-content"===e.localName)),this)}_detectFocusedItemIndex(e){const{rowGroup:t,row:s}=this._parseEventPath(e.composedPath());t===this.$.items&&(this._focusedItemIndex=s.index)}_preventScrollerRotatingCellFocus(e,t){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this._toggleAttribute("navigating",!1,this)),t===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this._toggleAttribute("navigating",!0,this))}_getColumns(e,t){let s=this._columnTree.length-1;return e===this.$.header?s=t:e===this.$.footer&&(s=this._columnTree.length-1-t),this._columnTree[s]}_resetKeyboardNavigation(){if(this.$.header.firstElementChild&&(this._headerFocusable=Array.from(this.$.header.firstElementChild.children).filter((e=>!e.hidden))[0]),this.$.items.firstElementChild){const e=this._iterateItems(((e,t)=>{if(this._firstVisibleIndex===t)return this.$.items.children[e]}));e&&(this._itemsFocusable=Array.from(e.children).filter((e=>!e.hidden))[0])}this.$.footer.firstElementChild&&(this._footerFocusable=Array.from(this.$.footer.firstElementChild.children).filter((e=>!e.hidden))[0])}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||this._elementMatches(e,'[part~="details-cell"]'))return;const t=e.getBoundingClientRect(),s=e.parentNode,i=Array.from(s.children).indexOf(e),r=this.$.table.getBoundingClientRect();let n=r.left,o=r.right;for(let e=i-1;e>=0;e--){const t=s.children[e];if(!t.hasAttribute("hidden")&&!this._elementMatches(t,'[part~="details-cell"]')&&t.hasAttribute("frozen")){n=t.getBoundingClientRect().right;break}}for(let e=i+1;e<s.children.length;e++){const t=s.children[e];if(!t.hasAttribute("hidden")&&!this._elementMatches(t,'[part~="details-cell"]')&&t.hasAttribute("frozen")){o=t.getBoundingClientRect().left;break}}t.left<n&&(this.$.table.scrollLeft+=Math.round(t.left-n)),t.right>o&&(this.$.table.scrollLeft+=Math.round(t.right-o))}_elementMatches(e,t){return e.matches?e.matches(t):-1!==Array.from(e.parentNode.querySelectorAll(t)).indexOf(e)}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,In=e=>class extends(zs(e)){static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready(),As(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&e.preventDefault()}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout((()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})}),100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if("start"===e.detail.state){const t=e.composedPath(),s=t[t.indexOf(this.$.header)-2];if(!s||!s._content)return;if(s._content.contains(this.getRootNode().activeElement))return;if(this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else"track"===e.detail.state?this._onTrack(e):"end"===e.detail.state&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.composedPath&&e.composedPath();if(t&&t.filter((e=>e.hasAttribute&&e.hasAttribute("draggable")))[0])return;const s=this._cellFromPoint(e.detail.x,e.detail.y);if(s&&-1!==s.getAttribute("part").indexOf("header-cell")){for(this._toggleAttribute("reordering",!0,this),this._draggedColumn=s._column;1===this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(s),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const s=this._getTargetColumn(t,this._draggedColumn);this._isSwapAllowed(this._draggedColumn,s)&&this._isSwappableByPosition(s,e.detail.x)&&this._swapColumnOrders(this._draggedColumn,s),this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this._toggleAttribute("reordering",!1,this),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter((e=>!e.hidden)).sort(((e,t)=>e._order-t._order))}_cellFromPoint(e,t){e=e||0,t=t||0,this._draggedColumn||this._toggleAttribute("no-content-pointer-events",!0,this.$.scroller);const s=this.shadowRoot.elementFromPoint(e,t);if(this._toggleAttribute("no-content-pointer-events",!1,this.$.scroller),s&&s._column)return s}_updateGhostPosition(e,t){const s=this._reorderGhost.getBoundingClientRect(),i=e-s.width/2,r=t-s.height/2,n=parseInt(this._reorderGhost._left||0),o=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=n-(s.left-i),this._reorderGhost._top=o-(s.top-r),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const t=this._reorderGhost;t.textContent=e._content.innerText;const s=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach((e=>t.style[e]=s[e])),t}_updateOrders(e,t){void 0!==e&&void 0!==t&&(e[0].forEach((e=>e._order=0)),e[0].forEach(((e,t)=>e._order=(t+1)*this._orderBaseScope)))}_setSiblingsReorderStatus(e,t){Array.from(e.parentNode.children).filter((t=>/column/.test(t.localName)&&this._isSwapAllowed(t,e))).forEach((e=>e._reorderStatus=t))}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10),this._scrollHandler()}this._draggedColumn&&this.async(this._autoScroller,10)}_isSwapAllowed(e,t){if(e&&t){const s=e!==t,i=e.parentElement===t.parentElement,r=e.frozen===t.frozen;return s&&i&&r}}_isSwappableByPosition(e,t){const s=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter((t=>e.contains(t._column)))[0],i=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),r=s.getBoundingClientRect();return r.left>i.left?t>r.right-i.width:t<r.left+i.width}_swapColumnOrders(e,t){const s=e._order;e._order=t._order,t._order=s,this._updateLastFrozen(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){let s=e._column;for(;s.parentElement!==t.parentElement&&s!==this;)s=s.parentElement;return s.parentElement===t.parentElement?s:e._column}}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,On=e=>class extends e{static get properties(){return{resizable:{type:Boolean,value:function(){if("vaadin-grid-column-group"===this.localName)return;const e=this.parentNode;return e&&"vaadin-grid-column-group"===e.localName&&e.resizable||!1}},_headerTemplate:{type:Object},_footerTemplate:{type:Object},frozen:{type:Boolean,value:!1},hidden:{type:Boolean},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,headerRenderer:Function,footerRenderer:Function}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)","_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)","_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),this._bodyTemplate&&(this._bodyTemplate.templatizer._grid=this._grid),this._headerTemplate&&(this._headerTemplate.templatizer._grid=this._grid),this._footerTemplate&&(this._footerTemplate.templatizer._grid=this._grid),this._templateObserver.flush(),this._bodyTemplate||this._templateObserver.callback(),requestAnimationFrame((()=>{this._allCells.forEach((e=>{e._content.parentNode||this._grid&&this._grid.appendChild(e._content)}))}))}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame((()=>{this._findHostGrid()||this._allCells.forEach((e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)}))})),this._gridValue=void 0}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter((e=>e))}constructor(){super(),this._templateObserver=new Xi(this,(()=>{this._headerTemplate=this._prepareHeaderTemplate(),this._footerTemplate=this._prepareFooterTemplate(),this._bodyTemplate=this._prepareBodyTemplate()}))}_prepareHeaderTemplate(){return this._prepareTemplatizer(this._findTemplate(!0)||null,{})}_prepareFooterTemplate(){return this._prepareTemplatizer(this._findTemplate(!1,!0)||null,{})}_prepareBodyTemplate(){return this._prepareTemplatizer(this._findTemplate()||null)}_prepareTemplatizer(e,t){if(e&&!e.templatizer){const s=new un;s._grid=this._grid,s.dataHost=this.dataHost,s._instanceProps=t||s._instanceProps,s.template=e,e.templatizer=s}return e}_renderHeaderAndFooter(){this.headerRenderer&&this._headerCell&&this.__runRenderer(this.headerRenderer,this._headerCell),this.footerRenderer&&this._footerCell&&this.__runRenderer(this.footerRenderer,this._footerCell)}__runRenderer(e,t,s){const i=[t._content,this];s&&s.item&&i.push(s),e.apply(this,i)}__setColumnTemplateOrRenderer(e,t,s){if(e&&t)throw new Error("You should only use either a renderer or a template");s.forEach((s=>{const i=this._grid.__getRowModel(s.parentElement);if(t)s._renderer=t,(i.item||t===this.headerRenderer||t===this.footerRenderer)&&this.__runRenderer(t,s,i);else if(s._template!==e){s._template=e,s._content.innerHTML="",e.templatizer._grid=e.templatizer._grid||this._grid;const t=e.templatizer.createInstance();s._content.appendChild(t.root),s._instance=t,i.item&&s._instance.setProperties(i)}}))}_setBodyTemplateOrRenderer(e,t,s){(e||t)&&s&&this.__setColumnTemplateOrRenderer(e,t,s)}_setHeaderTemplateOrRenderer(e,t,s){(e||t)&&s&&this.__setColumnTemplateOrRenderer(e,t,[s])}_setFooterTemplateOrRenderer(e,t,s){(e||t)&&s&&(this.__setColumnTemplateOrRenderer(e,t,[s]),this._grid.__updateHeaderFooterRowVisibility(s.parentElement))}_selectFirstTemplate(e=!1,t=!1){return Xi.getFlattenedNodes(this).filter((s=>"template"===s.localName&&s.classList.contains("header")===e&&s.classList.contains("footer")===t))[0]}_findTemplate(e,t){const s=this._selectFirstTemplate(e,t);return s&&this.dataHost&&(s._rootDataHost=this.dataHost._rootDataHost||this.dataHost),s}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach((t=>t.style.flexGrow=e))}_orderChanged(e){this._allCells.forEach((t=>t.style.order=e))}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach((t=>t.style.width=e)),this._grid&&this._grid.__forceReflow&&this._grid.__forceReflow()}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach((t=>this._toggleAttribute("frozen",e,t))),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach((t=>this._toggleAttribute("last-frozen",e,t))),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_pathOrHeaderChanged(e,t,s,i,r,n,o,a,l){const h=void 0!==t;if(!o&&!l&&h&&s&&this.__setTextContent(s._content,t),e&&r.value){if(!n&&!a){const t=(t,s,{item:i})=>this.__setTextContent(t,this.get(e,i));this.__setColumnTemplateOrRenderer(void 0,t,r.value)}o||l||h||!s||null===t||this.__setTextContent(s._content,this._generateHeader(e))}s&&this._grid.__updateHeaderFooterRowVisibility(s.parentElement)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,(e=>e.toUpperCase()))}_toggleAttribute(e,t,s){s.hasAttribute(e)===!t&&(t?s.setAttribute(e,""):s.removeAttribute(e))}_reorderStatusChanged(e){this._allCells.forEach((t=>t.setAttribute("reorder-status",e)))}_resizableChanged(e,t){void 0!==e&&void 0!==t&&t&&[t].concat(this._emptyCells).forEach((t=>{if(t){const s=t.querySelector('[part~="resize-handle"]');if(s&&t.removeChild(s),e){const e=document.createElement("div");e.setAttribute("part","resize-handle"),t.appendChild(e)}}}))}_textAlignChanged(e){if(void 0===e)return;if(-1===["start","end","center"].indexOf(e))return void console.warn('textAlign can only be set as "start", "end" or "center"');let t;"ltr"===getComputedStyle(this._grid).direction?"start"===e?t="left":"end"===e&&(t="right"):"start"===e?t="right":"end"===e&&(t="left"),this._allCells.forEach((s=>{s._content.style.textAlign=e,getComputedStyle(s._content).textAlign!==e&&(s._content.style.textAlign=t)}))}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(!0===e&&this._allCells.forEach((e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})),this._grid._debouncerHiddenChanged=Ut.debounce(this._grid._debouncerHiddenChanged,Be,(()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)})),this._grid._updateLastFrozen&&this._grid._updateLastFrozen(),this._grid.notifyResize&&this._grid.notifyResize(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}};class zn extends(On(Vs(jt))){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,path:{type:String},autoWidth:{type:Boolean,value:!1},_bodyTemplate:{type:Object},_cells:Array}}}customElements.define(zn.is,zn),
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
me("vaadin-grid",t`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 1em;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }
  `,{moduleId:"vaadin-grid-styles"});
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Nn=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();class Rn extends(Us(Rs(ln(nn(hn(sn(fn(gn(yn(pn(En(tn(cn(In(on(dn(Tn(bn(en))))))))))))))))))){static get template(){return Gt`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}static get version(){return"6.0.0"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)"]}static get properties(){return{_safari:{type:Boolean,value:/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},_ios:{type:Boolean,value:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1},_firefox:{type:Boolean,value:navigator.userAgent.toLowerCase().indexOf("firefox")>-1},_android:{type:Boolean,value:/android/i.test(navigator.userAgent)},_touchDevice:{type:Boolean,value:Nn},heightByRows:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_heightByRowsChanged"},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.recalculateColumnWidths()}attributeChangedCallback(e,t,s){super.attributeChangedCallback(e,t,s),"dir"===e&&(this.__isRTL="rtl"===s,this._updateScrollerMeasurements())}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter((e=>e.clientHeight)).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}_recalculateColumnWidths(e){e.forEach((e=>{e.width="auto",e._origFlexGrow=e.flexGrow,e.flexGrow=0})),e.forEach((e=>{e._currentWidth=0,e._allCells.forEach((t=>{const s=t.offsetWidth+1;e._currentWidth=Math.max(e._currentWidth,s)}))})),e.forEach((e=>{e.width=`${e._currentWidth}px`,e.flexGrow=e._origFlexGrow,e._currentWidth=void 0,e._origFlexGrow=void 0}))}recalculateColumnWidths(){if(this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const e=this._getColumns().filter((e=>!e.hidden&&e.autoWidth));this._recalculateColumnWidths(e)}}_createScrollerRows(e){const t=[];for(let s=0;s<e;s++){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),this._columnTree&&this._updateRow(e,this._columnTree[this._columnTree.length-1],"body",!1,!0),t.push(e)}var s,i,r;return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach((e=>e.notifyPath&&e.notifyPath("_cells.*",e._cells))),s=this,i=()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation()},qs||Xs(),Ws.push([s,i,r]),t}_getRowTarget(){return this.$.items}_createCell(e){const t="vaadin-grid-cell-content-"+(this._contentIndex=this._contentIndex+1||0),s=document.createElement("vaadin-grid-cell-content");s.setAttribute("slot",t);const i=document.createElement(e);i.id=t.replace("-content-","-"),i.setAttribute("tabindex","-1"),i.setAttribute("role","td"===e?"gridcell":"columnheader");const r=document.createElement("slot");return r.setAttribute("name",t),i.appendChild(r),i._content=s,s.addEventListener("mousedown",(()=>{if(window.chrome){const e=()=>{s.contains(this.getRootNode().activeElement)||i.focus(),document.removeEventListener("mouseup",e,!0)};document.addEventListener("mouseup",e,!0)}else setTimeout((()=>{s.contains(this.getRootNode().activeElement)||i.focus()}))})),i}_updateRow(e,t,s,i,r){s=s||"body";const n=document.createDocumentFragment();Array.from(e.children).forEach((e=>e._vacant=!0)),e.innerHTML="","sizer"!==e.id&&(e.hidden=!0),t.filter((e=>!e.hidden)).forEach(((t,o,a)=>{let l;if("body"===s){if(t._cells=t._cells||[],l=t._cells.filter((e=>e._vacant))[0],l||(l=this._createCell("td"),t._cells.push(l)),l.setAttribute("part","cell body-cell"),e.appendChild(l),o===a.length-1&&(this._rowDetailsTemplate||this.rowDetailsRenderer)){this._detailsCells=this._detailsCells||[];const t=this._detailsCells.filter((e=>e._vacant))[0]||this._createCell("td");-1===this._detailsCells.indexOf(t)&&this._detailsCells.push(t),t._content.parentElement||n.appendChild(t._content),this._configureDetailsCell(t),e.appendChild(t),this._a11ySetRowDetailsCell(e,t),t._vacant=!1}t.notifyPath&&!r&&t.notifyPath("_cells.*",t._cells)}else{const r="header"===s?"th":"td";i||"vaadin-grid-column-group"===t.localName?(l=t[`_${s}Cell`]||this._createCell(r),l._column=t,e.appendChild(l),t[`_${s}Cell`]=l):(t._emptyCells=t._emptyCells||[],l=t._emptyCells.filter((e=>e._vacant))[0]||this._createCell(r),l._column=t,e.appendChild(l),-1===t._emptyCells.indexOf(l)&&t._emptyCells.push(l)),l.setAttribute("part",`cell ${s}-cell`),this.__updateHeaderFooterRowVisibility(e)}l._content.parentElement||n.appendChild(l._content),l._vacant=!1,l._column=t})),this.appendChild(n),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(e)}__updateHeaderFooterRowVisibility(e){if(!e)return;const t=Array.from(e.children).filter((t=>{const s=t._column;if(s._emptyCells&&s._emptyCells.indexOf(t)>-1)return!1;if(e.parentElement===this.$.header){if(s.headerRenderer||s._headerTemplate)return!0;if(null===s.header)return!1;if(s.path||void 0!==s.header)return!0}else if(s.footerRenderer||s._footerTemplate)return!0}));e.hidden!==!t.length&&(e.hidden=!t.length,this.notifyResize())}_updateScrollerItem(e,t){this._preventScrollerRotatingCellFocus(e,t),this._columnTree&&(this._toggleAttribute("first",0===t,e),this._toggleAttribute("odd",t%2,e),this._a11yUpdateRowRowindex(e,t),this._getItem(t,e))}_columnTreeChanged(e){this._renderColumnTree(e),this.recalculateColumnWidths()}_renderColumnTree(e){for(Array.from(this.$.items.children).forEach((t=>this._updateRow(t,e[e.length-1],null,!1,!0)));this.$.header.children.length<e.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),this.$.footer.appendChild(t)}for(;this.$.header.children.length>e.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach(((t,s)=>this._updateRow(t,e[s],"header",s===e.length-1))),Array.from(this.$.footer.children).forEach(((t,s)=>this._updateRow(t,e[e.length-1-s],"footer",0===s))),this._updateRow(this.$.sizer,e[e.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning()}__updateFooterPositioning(){if(this._firefox&&(this.$.items.style.paddingBottom=0,this.heightByRows||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`)),this._ios){!window.CSS.supports("position","sticky")&&(this.$.table.style.height="",this.$.table.style.minHeight="100%",this.$.table.style.maxHeight="100%",setTimeout((()=>this.$.table.style.height=`${this.$.scroller.offsetHeight}px`)))}}_updateItem(e,t){e._item=t;const s=this.__getRowModel(e);this._toggleAttribute("selected",s.selected,e),this._a11yUpdateRowSelected(e,s.selected),this._a11yUpdateRowLevel(e,s.level),this._toggleAttribute("expanded",s.expanded,e),(this._rowDetailsTemplate||this.rowDetailsRenderer)&&this._toggleDetailsCell(e,t),this._generateCellClassNames(e,s),this._filterDragAndDrop(e,s),Array.from(e.children).forEach((e=>{if(e._renderer){const t=e._column||this;e._renderer.call(t,e._content,t,s)}else e._instance&&(e._instance.__detailsOpened__=s.detailsOpened,e._instance.__selected__=s.selected,e._instance.__level__=s.level,e._instance.__expanded__=s.expanded,e._instance.setProperties(s))})),this._debouncerUpdateHeights=Ut.debounce(this._debouncerUpdateHeights,He.after(1),(()=>{this._updateMetrics(),this._positionItems(),this._updateScrollerSize()}))}_resizeHandler(){this._updateDetailsCellHeights(),this._accessIronListAPI(super._resizeHandler,!0),this._updateScrollerMeasurements(),this.__updateFooterPositioning()}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-grid-appear")&&(this._render(),e.stopPropagation(),this.notifyResize(),this.__itemsReceived(),requestAnimationFrame((()=>{this.__scrollToPendingIndex(),this.$.table.style.webkitOverflowScrolling="touch"})))}_toggleAttribute(e,t,s){s.hasAttribute(e)===!t&&(t?s.setAttribute(e,""):s.removeAttribute(e))}__getRowModel(e){return{index:e.index,item:e._item,level:this._getIndexLevel(e.index),expanded:this._isExpanded(e._item),selected:this._isSelected(e._item),detailsOpened:!(!this._rowDetailsTemplate&&!this.rowDetailsRenderer)&&this._isDetailsOpened(e._item)}}render(){this._columnTree&&(this._columnTree.forEach((e=>{e.forEach((e=>e._renderHeaderAndFooter()))})),this._update())}notifyResize(){super.notifyResize()}_heightByRowsChanged(e,t){(e||t)&&this.notifyResize()}__forceReflow(){this._debouncerForceReflow=Ut.debounce(this._debouncerForceReflow,Be,(()=>{this.$.scroller.style.overflow="hidden",setTimeout((()=>this.$.scroller.style.overflow=""))}))}}customElements.define(Rn.is,Rn),me("vaadin-grid-sorter",t`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    :host(:not([direction])) [part='indicators']::before {
      opacity: 0.2;
    }

    :host([direction]) {
      color: var(--lumo-primary-text-color);
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const kn=document.createElement("template");kn.innerHTML="\n  <style>\n    @font-face {\n      font-family: 'vaadin-grid-sorter-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n",document.head.appendChild(kn.content);class Dn extends(Rs(Vs(jt))){static get template(){return Gt`
      <style>
        :host {
          display: inline-flex;
          cursor: pointer;
          max-width: 100%;
        }

        [part='content'] {
          flex: 1 1 auto;
        }

        [part='indicators'] {
          position: relative;
          align-self: center;
          flex: none;
        }

        [part='order'] {
          display: inline;
          vertical-align: super;
        }

        [part='indicators']::before {
          font-family: 'vaadin-grid-sorter-icons';
          display: inline-block;
        }

        :host(:not([direction])) [part='indicators']::before {
          content: '\\e901';
        }

        :host([direction='asc']) [part='indicators']::before {
          content: '\\e900';
        }

        :host([direction='desc']) [part='indicators']::before {
          content: '\\e902';
        }
      </style>

      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,value:!1}}}static get observers(){return["_pathOrDirectionChanged(path, direction, _isConnected)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1}_pathOrDirectionChanged(e,t,s){void 0!==e&&void 0!==t&&void 0!==s&&s&&this.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}_getDisplayOrder(e){return null===e?"":e+1}_onClick(e){const t=this.getRootNode().activeElement;this!==t&&this.contains(t)||(e.preventDefault(),"asc"===this.direction?this.direction="desc":"desc"===this.direction?this.direction=null:this.direction="asc")}}customElements.define(Dn.is,Dn);export{qr as B,On as C,Vs as D,Us as E,Xi as F,zn as G,jt as P,Rs as T,vr as a,Ut as b,Be as c,rr as d,Ds as e,Gt as h,rn as i,Ve as m,me as r,He as t};
