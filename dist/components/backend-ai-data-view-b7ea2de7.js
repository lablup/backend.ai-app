import{_ as __decorate,p as property,c as customElement,B as BackendAIPage,d as BackendAiStyles,I as IronFlex,a as IronFlexAlignment,e as IronPositioning,b as css,h as html$1,t as translate,g as get,a3 as render,f as BackendAIPainKiller}from"./backend-ai-console-bf343de1.js";import{u as unsafeHTML}from"./unsafe-html-4880aecc.js";import"./mwc-tab-bar-58fe4f29.js";import"./input-behavior-023cba33.js";import"./select-c9ec1be8.js";import"./tab-group-f9f43f62.js";import"./textfield-67e7f371.js";import"./chart-js-e83113ea.js";import{h as html,E as ElementMixin,T as ThemableMixin,P as PolymerElement}from"./vaadin-grid-sorter-19260d21.js";import"./vaadin-grid-sort-column-a9880cbe.js";import"./vaadin-grid-selection-column-1d9252c1.js";import"./vaadin-item-2fcf1204.js";import"./lablup-activity-panel-ffd4d5dd.js";import"./radio-behavior-e101265b.js";const $_documentContainer=html`<dom-module id="lumo-progress-bar" theme-for="vaadin-progress-bar">
  <template>
    <style>
      :host {
        height: calc(var(--lumo-size-l) / 10);
        margin: var(--lumo-space-s) 0;
      }

      [part="bar"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }

      [part="value"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-primary-color);
        /* Use width instead of transform to preserve border radius */
        transform: none;
        width: calc(var(--vaadin-progress-value) * 100%);
        will-change: width;
        transition: 0.1s width linear;
      }

      /* Indeterminate mode */

      :host([indeterminate]) [part="value"] {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        width: 100%;
        background-color: transparent !important;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        opacity: 0.75;
        will-change: transform;
        animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-indeterminate {
        0% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
        }

        25% {
          transform: scaleX(0.4);
        }

        50% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        }

        50.1% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }

        75% {
          transform: scaleX(0.4);
        }

        100% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }
      }

      :host(:not([aria-valuenow])) [part="value"]::before,
      :host([indeterminate]) [part="value"]::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: var(--lumo-primary-color);
        will-change: opacity;
        animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-pulse3 {
        0% { opacity: 1; }
        10% { opacity: 0; }
        40% { opacity: 0; }
        50% { opacity: 1; }
        50.1% { opacity: 1; }
        60% { opacity: 0; }
        90% { opacity: 0; }
        100% { opacity: 1; }
      }

      /* Contrast color */

      :host([theme~="contrast"]) [part="value"],
      :host([theme~="contrast"]) [part="value"]::before {
        background-color: var(--lumo-contrast-80pct);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-80pct));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-60pct));
      }

      /* Error color */

      :host([theme~="error"]) [part="value"],
      :host([theme~="error"]) [part="value"]::before {
        background-color: var(--lumo-error-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
      }

      /* Primary color */

      :host([theme~="success"]) [part="value"],
      :host([theme~="success"]) [part="value"]::before {
        background-color: var(--lumo-success-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
      }

      /* RTL specific styles */

      :host([indeterminate][dir="rtl"]) [part="value"] {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(.355, .045, .645, 1);
      }

      :host(:not([aria-valuenow])[dir="rtl"]) [part="value"]::before,
      :host([indeterminate][dir="rtl"]) [part="value"]::before {
        animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(.355, .045, .645, 1);
      }

      @keyframes vaadin-progress-indeterminate-rtl {
        0% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
        }

        25% {
          transform: scaleX(0.4);
        }

        50% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        }

        50.1% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }

        75% {
          transform: scaleX(0.4);
        }

        100% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }
      }

      /* Contrast color */

      :host([theme~="contrast"][dir="rtl"]) [part="value"],
      :host([theme~="contrast"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-80pct));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-60pct));
      }

      /* Error color */

      :host([theme~="error"][dir="rtl"]) [part="value"],
      :host([theme~="error"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
      }

      /* Primary color */

      :host([theme~="success"][dir="rtl"]) [part="value"],
      :host([theme~="success"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const ProgressMixin=e=>class extends e{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,t,o){const i=this._normalizeValue(e,t,o);this.style.setProperty("--vaadin-progress-value",i),this.updateStyles({"--vaadin-progress-value":String(i)})}_valueChanged(e,t){this.setAttribute("aria-valuenow",e)}_minChanged(e,t){this.setAttribute("aria-valuemin",e)}_maxChanged(e,t){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,t,o){let i;return e||0==e?t>=o?i=1:(i=(e-t)/(o-t),i=Math.min(Math.max(i,0),1)):i=0,i}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/;class ProgressBarElement extends(ElementMixin(ThemableMixin(ProgressMixin(PolymerElement)))){static get template(){return html`
    <style>
      :host {
        display: block;
        width: 100%; /* prevent collapsing inside non-stretching column flex */
        height: 8px;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="bar"] {
        height: 100%;
      }

      [part="value"] {
        height: 100%;
        transform-origin: 0 50%;
        transform: scaleX(var(--vaadin-progress-value));
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="value"] {
        transform-origin: 100% 50%;
      }
    </style>

    <div part="bar">
      <div part="value"></div>
    </div>
`}static get is(){return"vaadin-progress-bar"}static get version(){return"1.3.0"}}customElements.define(ProgressBarElement.is,ProgressBarElement),function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).tus=e()}((function(){var define;return function e(t,o,i){function r(n,l){if(!o[n]){if(!t[n]){var s="function"==typeof require&&require;if(!l&&s)return s(n,!0);if(a)return a(n,!0);var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}var c=o[n]={exports:{}};t[n][0].call(c.exports,(function(e){return r(t[n][1][e]||e)}),c,c.exports,e,t,o,i)}return o[n].exports}for(var a="function"==typeof require&&require,n=0;n<i.length;n++)r(i[n]);return r}({1:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=l(e("./isReactNative")),r=l(e("./uriToBlob")),a=l(e("./isCordova")),n=l(e("./readAsByteArray"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e,t,o){return t&&d(e.prototype,t),o&&d(e,o),e}var u=function(){function e(t){s(this,e),this._file=t,this.size=t.size}return c(e,[{key:"slice",value:function(e,t){if((0,a.default)())return(0,n.default)(this._file.slice(e,t));var o=this._file.slice(e,t);return Promise.resolve({value:o})}},{key:"close",value:function(){}}]),e}(),p=function(){function e(t,o){s(this,e),this._chunkSize=o,this._buffer=void 0,this._bufferOffset=0,this._reader=t,this._done=!1}return c(e,[{key:"slice",value:function(e,t){return e<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(e,t)}},{key:"_readUntilEnoughDataOrDone",value:function(e,t){var o=this,i=t<=this._bufferOffset+h(this._buffer);if(this._done||i){var r=this._getDataFromBuffer(e,t),a=null==r&&this._done;return Promise.resolve({value:r,done:a})}return this._reader.read().then((function(i){var r=i.value;return i.done?o._done=!0:void 0===o._buffer?o._buffer=r:o._buffer=function(e,t){if(e.concat)return e.concat(t);if(e instanceof Blob)return new Blob([e,t],{type:e.type});if(e.set){var o=new e.constructor(e.length+t.length);return o.set(e),o.set(t,e.length),o}throw new Error("Unknown data type")}(o._buffer,r),o._readUntilEnoughDataOrDone(e,t)}))}},{key:"_getDataFromBuffer",value:function(e,t){e>this._bufferOffset&&(this._buffer=this._buffer.slice(e-this._bufferOffset),this._bufferOffset=e);var o=0===h(this._buffer);return this._done&&o?null:this._buffer.slice(0,t-e)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}]),e}();function h(e){return void 0===e?0:void 0!==e.size?e.size:e.length}var f=function(){function e(){s(this,e)}return c(e,[{key:"openFile",value:function(e,t){return(0,i.default)()&&e&&void 0!==e.uri?(0,r.default)(e.uri).then((function(e){return new u(e)})).catch((function(e){throw new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. "+e)})):"function"==typeof e.slice&&void 0!==e.size?Promise.resolve(new u(e)):"function"==typeof e.read?(t=+t,isFinite(t)?Promise.resolve(new p(e,t)):Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option"))):Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment"))}}]),e}();o.default=f},{"./isCordova":5,"./isReactNative":6,"./readAsByteArray":7,"./uriToBlob":8}],2:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){return(0,r.default)()?Promise.resolve(function(e,t){var o=e.exif?function(e){var t=0;if(0===e.length)return t;for(var o=0;o<e.length;o++){t=(t<<5)-t+e.charCodeAt(o),t&=t}return t}(JSON.stringify(e.exif)):"noexif";return["tus-rn",e.name||"noname",e.size||"nosize",o,t.endpoint].join("/")}(e,t)):Promise.resolve(["tus-br",e.name,e.type,e.size,e.lastModified,t.endpoint].join("-"))};var i,r=(i=e("./isReactNative"))&&i.__esModule?i:{default:i}},{"./isReactNative":6}],3:[function(e,t,o){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),e}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=function(){function e(){i(this,e)}return a(e,[{key:"createRequest",value:function(e,t){return new l(e,t)}},{key:"getName",value:function(){return"XHRHttpStack"}}]),e}();o.default=n;var l=function(){function e(t,o){i(this,e),this._xhr=new XMLHttpRequest,this._xhr.open(t,o,!0),this._method=t,this._url=o,this._headers={}}return a(e,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(e,t){this._xhr.setRequestHeader(e,t),this._headers[e]=t}},{key:"getHeader",value:function(e){return this._headers[e]}},{key:"setProgressHandler",value:function(e){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(t){t.lengthComputable&&e(t.loaded)})}},{key:"send",value:function(e){var t=this,o=0<arguments.length&&void 0!==e?e:null;return new Promise((function(e,i){t._xhr.onload=function(){e(new s(t._xhr))},t._xhr.onerror=function(e){i(e)},t._xhr.send(o)}))}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}]),e}(),s=function(){function e(t){i(this,e),this._xhr=t}return a(e,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(e){return this._xhr.getResponseHeader(e)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}]),e}()},{}],4:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"enableDebugLog",{enumerable:!0,get:function(){return a.enableDebugLog}}),Object.defineProperty(o,"canStoreURLs",{enumerable:!0,get:function(){return n.canStoreURLs}}),o.isSupported=o.defaultOptions=o.Upload=void 0;var i=c(e("../upload")),r=c(e("../noopUrlStorage")),a=e("../logger"),n=e("./urlStorage"),l=c(e("./httpStack")),s=c(e("./fileReader")),d=c(e("./fingerprint"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){var o,i=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)),i}function g(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?m(Object(o),!0).forEach((function(t){b(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function b(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var v=g({},i.default.defaultOptions,{httpStack:new l.default,fileReader:new s.default,urlStorage:n.canStoreURLs?new n.WebStorageUrlStorage:new r.default,fingerprint:d.default});o.defaultOptions=v;var y=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(r,i.default);var e,t,o=function(e){return function(){var t,o,i,r=f(e);return o=this,!(i=function(){if("undefined"!=typeof Reflect&&Reflect.construct&&!Reflect.construct.sham){if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),1}catch(e){return}}}()?(t=f(this).constructor,Reflect.construct(r,arguments,t)):r.apply(this,arguments))||"object"!==u(i)&&"function"!=typeof i?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(o):i}}(r);function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t=g({},v,{},t),o.call(this,e,t)}return e=r,t=[{key:"terminate",value:function(e,t,o){return t=g({},v,{},t),i.default.terminate(e,t,o)}}],null&&p(e.prototype,null),t&&p(e,t),r}();o.Upload=y;var _=window,w=_.XMLHttpRequest,x=_.Blob,k=w&&x&&"function"==typeof x.prototype.slice;o.isSupported=k},{"../logger":11,"../noopUrlStorage":12,"../upload":13,"./fileReader":1,"./fingerprint":2,"./httpStack":3,"./urlStorage":9}],5:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,o.default=function(){return"undefined"!=typeof window&&(void 0!==window.PhoneGap||void 0!==window.Cordova||void 0!==window.cordova)}},{}],6:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,o.default=function(){return"undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase()}},{}],7:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return new Promise((function(t,o){var i=new FileReader;i.onload=function(){var e=new Uint8Array(i.result);t({value:e})},i.onerror=function(e){o(e)},i.readAsArrayBuffer(e)}))}},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return new Promise((function(t,o){var i=new XMLHttpRequest;i.responseType="blob",i.onload=function(){var e=i.response;t(e)},i.onerror=function(e){o(e)},i.open("GET",e),i.send()}))}},{}],9:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.WebStorageUrlStorage=o.canStoreURLs=void 0;var i=!1;try{i="localStorage"in window;var r="tusSupport";localStorage.setItem(r,localStorage.getItem(r))}catch(e){if(e.code!==e.SECURITY_ERR&&e.code!==e.QUOTA_EXCEEDED_ERR)throw e;i=!1}o.canStoreURLs=i;var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t;return(t=[{key:"findAllUploads",value:function(){var e=this._findEntries("tus::");return Promise.resolve(e)}},{key:"findUploadsByFingerprint",value:function(e){var t=this._findEntries("tus::".concat(e,"::"));return Promise.resolve(t)}},{key:"removeUpload",value:function(e){return localStorage.removeItem(e),Promise.resolve()}},{key:"addUpload",value:function(e,t){var o=Math.round(1e12*Math.random()),i="tus::".concat(e,"::").concat(o);return localStorage.setItem(i,JSON.stringify(t)),Promise.resolve(i)}},{key:"_findEntries",value:function(e){for(var t=[],o=0;o<localStorage.length;o++){var i=localStorage.key(o);if(0===i.indexOf(e))try{var r=JSON.parse(localStorage.getItem(i));r.urlStorageKey=i,t.push(r)}catch(e){}}return t}}])&&function(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,t),e}();o.WebStorageUrlStorage=a},{}],10:[function(e,t,o){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){var t="function"==typeof Map?new Map:void 0;return(r=function(e){if(null===e||(o=e,-1===Function.toString.call(o).indexOf("[native code]")))return e;var o;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return a(e,arguments,s(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),l(i,e)})(e)}function a(e,t,o){return(a=n()?Reflect.construct:function(e,t,o){var i=[null];i.push.apply(i,t);var r=new(Function.bind.apply(e,i));return o&&l(r,o.prototype),r}).apply(null,arguments)}function n(){if("undefined"!=typeof Reflect&&Reflect.construct&&!Reflect.construct.sham){if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),1}catch(e){return}}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var d=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,r(Error));var e=function(e){return function(){var t,o,r,a=s(e);return o=this,!(r=n()?(t=s(this).constructor,Reflect.construct(a,arguments,t)):a.apply(this,arguments))||"object"!==i(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(o):r}}(t);function t(o){var i,r,a,n,l,s,d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,u=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(i=e.call(this,o)).originalRequest=c,i.originalResponse=u,null!=(i.causingError=d)&&(o+=", caused by ".concat(d.toString())),null!=c&&(r=c.getHeader("X-Request-ID")||"n/a",a=c.getMethod(),n=c.getURL(),l=u?u.getStatus():"n/a",s=u?u.getBody()||"":"n/a",o+=", originated from request (method: ".concat(a,", url: ").concat(n,", response code: ").concat(l,", response text: ").concat(s,", request id: ").concat(r,")")),i.message=o,i}return t}();o.default=d},{}],11:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.enableDebugLog=function(){i=!0};var i=!(o.log=function(e){i&&console.log(e)})},{}],12:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t;return(t=[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(){return Promise.resolve([])}},{key:"removeUpload",value:function(){return Promise.resolve()}},{key:"addUpload",value:function(){return Promise.resolve(null)}}])&&function(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,t),e}();o.default=i},{}],13:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=s(e("./error")),r=s(e("./uuid")),a=e("js-base64"),n=s(e("url-parse")),l=e("./logger");function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var o,i=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)),i}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach((function(t){u(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var h=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),"resume"in o&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=o,this._urlStorage=this.options.urlStorage,this.file=t,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}var t,o,r;return t=e,r=[{key:"terminate",value:function(t,o,r){var a=1<arguments.length&&void 0!==o?o:{};if("function"==typeof a||"function"==typeof(2<arguments.length?r:void 0))throw new Error("tus: the terminate function does not accept a callback since v2 anymore; please use the returned Promise instead");var n=g("DELETE",t,a);return n.send().then((function(e){if(204!==e.getStatus())throw new i.default("tus: unexpected response while terminating upload",null,n,e)})).catch((function(o){if(o instanceof i.default||(o=new i.default("tus: failed to terminate upload",o,n,null)),!b(o,0,a))throw o;var r=a.retryDelays[0],l=a.retryDelays.slice(1),s=c({},a,{retryDelays:l});return new Promise((function(e){return setTimeout(e,r)})).then((function(){return e.terminate(t,s)}))}))}}],(o=[{key:"findPreviousUploads",value:function(){var e=this;return this.options.fingerprint(this.file,this.options).then((function(t){return e._urlStorage.findUploadsByFingerprint(t)}))}},{key:"resumeFromPreviousUpload",value:function(e){this.url=e.uploadUrl||null,this._parallelUploadUrls=e.parallelUploadUrls||null,this._urlStorageKey=e.urlStorageKey}},{key:"start",value:function(){var e,t=this,o=this.file;o?this.options.endpoint||this.options.uploadUrl?null==(e=this.options.retryDelays)||"[object Array]"===Object.prototype.toString.call(e)?(1<this.options.parallelUploads&&["uploadUrl","uploadSize","uploadLengthDeferred"].forEach((function(e){t.options[e]&&t._emitError(new Error("tus: cannot use the ".concat(e," option when parallelUploads is enabled")))})),this.options.fingerprint(o,this.options).then((function(e){return null==e?(0,l.log)("No fingerprint was calculated meaning that the upload cannot be stored in the URL storage."):(0,l.log)("Calculated fingerprint: ".concat(e)),t._fingerprint=e,t._source?t._source:t.options.fileReader.openFile(o,t.options.chunkSize)})).then((function(e){t._source=e,1<t.options.parallelUploads||null!=t._parallelUploadUrls?t._startParallelUpload():t._startSingleUpload()})).catch((function(e){t._emitError(e)}))):this._emitError(new Error("tus: the `retryDelays` option must either be an array or null")):this._emitError(new Error("tus: neither an endpoint or an upload URL is provided")):this._emitError(new Error("tus: no file or stream to upload provided"))}},{key:"_startParallelUpload",value:function(){var t=this,o=this._size=this._source.size,i=0;this._parallelUploads=[];var r=null!=this._parallelUploadUrls?this._parallelUploadUrls.length:this.options.parallelUploads,a=function(e,t,o){for(var i=Math.floor(e/t),r=[],a=0;a<t;a++)r.push({start:i*a,end:i*(a+1)});return r[t-1].end=e,o&&r.forEach((function(e,t){e.uploadUrl=o[t]||null})),r}(this._source.size,r,this._parallelUploadUrls);this._parallelUploadUrls=new Array(a.length);var n,s=a.map((function(r,n){var l=0;return t._source.slice(r.start,r.end).then((function(s){var d=s.value;return new Promise((function(s,u){var p=c({},t.options,{uploadUrl:r.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,metadata:{},headers:c({},t.options.headers,{"Upload-Concat":"partial"}),onSuccess:s,onError:u,onProgress:function(e){i=i-l+e,l=e,t._emitProgress(i,o)},_onUploadUrlAvailable:function(){t._parallelUploadUrls[n]=h.url,t._parallelUploadUrls.filter((function(e){return!!e})).length===a.length&&t._saveUploadInUrlStorage()}}),h=new e(d,p);h.start(),t._parallelUploads.push(h)}))}))}));Promise.all(s).then((function(){(n=t._openRequest("POST",t.options.endpoint)).setHeader("Upload-Concat","final;".concat(t._parallelUploadUrls.join(" ")));var e=f(t.options.metadata);return""!==e&&n.setHeader("Upload-Metadata",e),t._sendRequest(n,null)})).then((function(e){var o;m(e.getStatus(),200)?null!=(o=e.getHeader("Location"))?(t.url=v(t.options.endpoint,o),(0,l.log)("Created upload at ".concat(t.url)),t._emitSuccess()):t._emitHttpError(n,e,"tus: invalid or missing Location header"):t._emitHttpError(n,e,"tus: unexpected response while creating upload")})).catch((function(e){t._emitError(e)}))}},{key:"_startSingleUpload",value:function(){if(this.options.uploadLengthDeferred)this._size=null;else if(null!=this.options.uploadSize){if(this._size=+this.options.uploadSize,isNaN(this._size))return void this._emitError(new Error("tus: cannot convert `uploadSize` option into a number"))}else if(this._size=this._source.size,null==this._size)return void this._emitError(new Error("tus: cannot automatically derive upload's size from input and must be specified manually using the `uploadSize` option"));return this._aborted=!1,null!=this.url?((0,l.log)("Resuming upload from previous URL: ".concat(this.url)),void this._resumeUpload()):null!=this.options.uploadUrl?((0,l.log)("Resuming upload from provided URL: ".concat(this.options.url)),this.url=this.options.uploadUrl,void this._resumeUpload()):((0,l.log)("Creating a new upload"),void this._createUpload())}},{key:"abort",value:function(t,o){var i=this;if("function"==typeof o)throw new Error("tus: the abort function does not accept a callback since v2 anymore; please use the returned Promise instead");return null!=this._parallelUploads&&this._parallelUploads.forEach((function(e){e.abort(t)})),null!==this._req&&(this._req.abort(),this._source.close()),this._aborted=!0,null!=this._retryTimeout&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),t&&null!=this.url?e.terminate(this.url,this.options).then((function(){return i._removeFromUrlStorage()})):Promise.resolve()}},{key:"_emitHttpError",value:function(e,t,o,r){this._emitError(new i.default(o,r,e,t))}},{key:"_emitError",value:function(e){var t=this;if(!this._aborted){if(null!=this.options.retryDelays&&(null!=this._offset&&this._offset>this._offsetBeforeRetry&&(this._retryAttempt=0),b(e,this._retryAttempt,this.options))){var o=this.options.retryDelays[this._retryAttempt++];return this._offsetBeforeRetry=this._offset,void(this._retryTimeout=setTimeout((function(){t.start()}),o))}if("function"!=typeof this.options.onError)throw e;this.options.onError(e)}}},{key:"_emitSuccess",value:function(){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),"function"==typeof this.options.onSuccess&&this.options.onSuccess()}},{key:"_emitProgress",value:function(e,t){"function"==typeof this.options.onProgress&&this.options.onProgress(e,t)}},{key:"_emitChunkComplete",value:function(e,t,o){"function"==typeof this.options.onChunkComplete&&this.options.onChunkComplete(e,t,o)}},{key:"_createUpload",value:function(){var e,t,o=this;this.options.endpoint?(e=this._openRequest("POST",this.options.endpoint),this.options.uploadLengthDeferred?e.setHeader("Upload-Defer-Length",1):e.setHeader("Upload-Length",this._size),""!==(t=f(this.options.metadata))&&e.setHeader("Upload-Metadata",t),(this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,this._addChunkToRequest(e)):this._sendRequest(e,null)).then((function(t){if(m(t.getStatus(),200)){var i=t.getHeader("Location");if(null!=i){if(o.url=v(o.options.endpoint,i),(0,l.log)("Created upload at ".concat(o.url)),"function"==typeof o.options._onUploadUrlAvailable&&o.options._onUploadUrlAvailable(),0===o._size)return o._emitSuccess(),void o._source.close();o._saveUploadInUrlStorage(),o.options.uploadDataDuringCreation?o._handleUploadResponse(e,t):(o._offset=0,o._performUpload())}else o._emitHttpError(e,t,"tus: invalid or missing Location header")}else o._emitHttpError(e,t,"tus: unexpected response while creating upload")})).catch((function(t){o._emitHttpError(e,null,"tus: failed to create upload",t)}))):this._emitError(new Error("tus: unable to create upload because no endpoint is provided"))}},{key:"_resumeUpload",value:function(){var e=this,t=this._openRequest("HEAD",this.url);this._sendRequest(t,null).then((function(o){var i=o.getStatus();if(!m(i,200))return m(i,400)&&e._removeFromUrlStorage(),423===i?void e._emitHttpError(t,o,"tus: upload is currently locked; retry later"):e.options.endpoint?(e.url=null,void e._createUpload()):void e._emitHttpError(t,o,"tus: unable to resume upload (new upload cannot be created without an endpoint)");var r=parseInt(o.getHeader("Upload-Offset"),10);if(isNaN(r))e._emitHttpError(t,o,"tus: invalid or missing offset value");else{var a=parseInt(o.getHeader("Upload-Length"),10);if(!isNaN(a)||e.options.uploadLengthDeferred){if("function"==typeof e.options._onUploadUrlAvailable&&e.options._onUploadUrlAvailable(),r===a)return e._emitProgress(a,a),void e._emitSuccess();e._offset=r,e._performUpload()}else e._emitHttpError(t,o,"tus: invalid or missing length value")}})).catch((function(o){e._emitHttpError(t,null,"tus: failed to resume upload",o)}))}},{key:"_performUpload",value:function(){var e,t=this;this._aborted||(this.options.overridePatchMethod?(e=this._openRequest("POST",this.url)).setHeader("X-HTTP-Method-Override","PATCH"):e=this._openRequest("PATCH",this.url),e.setHeader("Upload-Offset",this._offset),this._addChunkToRequest(e).then((function(o){m(o.getStatus(),200)?t._handleUploadResponse(e,o):t._emitHttpError(e,o,"tus: unexpected response while uploading chunk")})).catch((function(o){t._aborted||t._emitHttpError(e,null,"tus: failed to upload chunk at offset "+t._offset,o)})))}},{key:"_addChunkToRequest",value:function(e){var t=this,o=this._offset,i=this._offset+this.options.chunkSize;return e.setProgressHandler((function(e){t._emitProgress(o+e,t._size)})),e.setHeader("Content-Type","application/offset+octet-stream"),(i===1/0||i>this._size)&&!this.options.uploadLengthDeferred&&(i=this._size),this._source.slice(o,i).then((function(o){var i=o.value,r=o.done;return t.options.uploadLengthDeferred&&r&&(t._size=t._offset+(i&&i.size?i.size:0),e.setHeader("Upload-Length",t._size)),null===i?t._sendRequest(e):(t._emitProgress(t._offset,t._size),t._sendRequest(e,i))}))}},{key:"_handleUploadResponse",value:function(e,t){var o=parseInt(t.getHeader("Upload-Offset"),10);if(isNaN(o))this._emitHttpError(e,t,"tus: invalid or missing offset value");else{if(this._emitProgress(o,this._size),this._emitChunkComplete(o-this._offset,o,this._size),(this._offset=o)==this._size)return this._emitSuccess(),void this._source.close();this._performUpload()}}},{key:"_openRequest",value:function(e,t){var o=g(e,t,this.options);return this._req=o}},{key:"_removeFromUrlStorage",value:function(){var e=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch((function(t){e._emitError(t)})),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var e,t=this;this.options.storeFingerprintForResuming&&this._fingerprint&&(e={size:this._size,metadata:this.options.metadata,creationTime:(new Date).toString()},this._parallelUploads?e.parallelUploadUrls=this._parallelUploadUrls:e.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,e).then((function(e){return t._urlStorageKey=e})).catch((function(e){t._emitError(e)})))}},{key:"_sendRequest",value:function(e,t){var o=this,i=1<arguments.length&&void 0!==t?t:null;return"function"==typeof this.options.onBeforeRequest&&this.options.onBeforeRequest(e),e.send(i).then((function(t){return"function"==typeof o.options.onAfterResponse&&o.options.onAfterResponse(e,t),t}))}}])&&p(t.prototype,o),r&&p(t,r),e}();function f(e){var t=[];for(var o in e)t.push(o+" "+a.Base64.encode(e[o]));return t.join(",")}function m(e,t){return t<=e&&e<t+100}function g(e,t,o){var i=o.httpStack.createRequest(e,t);i.setHeader("Tus-Resumable","1.0.0");var a,n=o.headers||{};for(var l in n)i.setHeader(l,n[l]);return o.addRequestId&&(a=(0,r.default)(),i.setHeader("X-Request-ID",a)),i}function b(e,t,o){var i,r=e.originalResponse?e.originalResponse.getStatus():0,a=!m(r,400)||409===r||423===r;return null!=o.retryDelays&&t<o.retryDelays.length&&null!=e.originalRequest&&a&&(i=!0,"undefined"!=typeof window&&"navigator"in window&&!1===window.navigator.onLine&&(i=!1),i)}function v(e,t){return new n.default(t,e).toString()}h.defaultOptions={endpoint:null,uploadUrl:null,metadata:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,_onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,chunkSize:1/0,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null},o.default=h},{"./error":10,"./logger":11,"./uuid":14,"js-base64":15,"url-parse":18}],14:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}},{}],15:[function(require,module,exports){(function(global){var Gk,Hk;Gk="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==global?global:this,Hk=function(global){var _Base64=global.Base64,version="2.4.9",buffer;if(void 0!==module&&module.exports)try{buffer=eval("require('buffer').Buffer")}catch(e){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(e){for(var t={},o=0,i=e.length;o<i;o++)t[e.charAt(o)]=o;return t}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(e){if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?fromCharCode(192|t>>>6)+fromCharCode(128|63&t):fromCharCode(224|t>>>12&15)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return fromCharCode(240|t>>>18&7)+fromCharCode(128|t>>>12&63)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(e){return e.replace(re_utob,cb_utob)},cb_encode=function(e){var t=[0,2,1][e.length%3],o=e.charCodeAt(0)<<16|(1<e.length?e.charCodeAt(1):0)<<8|(2<e.length?e.charCodeAt(2):0);return[b64chars.charAt(o>>>18),b64chars.charAt(o>>>12&63),2<=t?"=":b64chars.charAt(o>>>6&63),1<=t?"=":b64chars.charAt(63&o)].join("")},btoa=global.btoa?function(e){return global.btoa(e)}:function(e){return e.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e)).toString("base64")}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e)).toString("base64")}:function(e){return btoa(utob(e))},encode=function(e,t){return t?_encode(String(e)).replace(/[+\/]/g,(function(e){return"+"==e?"-":"_"})).replace(/=/g,""):_encode(String(e))},encodeURI=function(e){return encode(e,!0)},re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),cb_btou=function(e){switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return fromCharCode(55296+(t>>>10))+fromCharCode(56320+(1023&t));case 3:return fromCharCode((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return fromCharCode((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},btou=function(e){return e.replace(re_btou,cb_btou)},cb_decode=function(e){var t=e.length,o=t%4,i=(0<t?b64tab[e.charAt(0)]<<18:0)|(1<t?b64tab[e.charAt(1)]<<12:0)|(2<t?b64tab[e.charAt(2)]<<6:0)|(3<t?b64tab[e.charAt(3)]:0),r=[fromCharCode(i>>>16),fromCharCode(i>>>8&255),fromCharCode(255&i)];return r.length-=[0,0,2,1][o],r.join("")},atob=global.atob?function(e){return global.atob(e)}:function(e){return e.replace(/[\s\S]{1,4}/g,cb_decode)},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e,"base64")).toString()}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e,"base64")).toString()}:function(e){return btou(atob(e))},decode=function(e){return _decode(String(e).replace(/[-_]/g,(function(e){return"-"==e?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var e=global.Base64;return global.Base64=_Base64,e},noEnum;return global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"==typeof Object.defineProperty&&(noEnum=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}},global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum((function(){return decode(this)}))),Object.defineProperty(String.prototype,"toBase64",noEnum((function(e){return encode(this,e)}))),Object.defineProperty(String.prototype,"toBase64URI",noEnum((function(){return encode(this,!0)})))}),global.Meteor&&(Base64=global.Base64),void 0!==module&&module.exports&&(module.exports.Base64=global.Base64),{Base64:global.Base64}},"object"==typeof exports&&void 0!==module?module.exports=Hk(Gk):Hk(Gk)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],16:[function(e,t,o){var i=Object.prototype.hasOwnProperty;function r(e){return decodeURIComponent(e.replace(/\+/g," "))}o.stringify=function(e,t){t=t||"";var o=[];for(var r in"string"!=typeof t&&(t="?"),e)i.call(e,r)&&o.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return o.length?t+o.join("&"):""},o.parse=function(e){for(var t,o=/([^=?&]+)=?([^&]*)/g,i={};t=o.exec(e);){var a=r(t[1]),n=r(t[2]);a in i||(i[a]=n)}return i}},{}],17:[function(e,t,o){t.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},{}],18:[function(e,t,o){(function(o){var i=e("requires-port"),r=e("querystringify"),a=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,n=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,l=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],s={hash:1,query:1};function d(e){var t,i=o&&o.location||{},r={},a=typeof(e=e||i);if("blob:"===e.protocol)r=new u(unescape(e.pathname),{});else if("string"==a)for(t in r=new u(e,{}),s)delete r[t];else if("object"==a){for(t in e)t in s||(r[t]=e[t]);void 0===r.slashes&&(r.slashes=n.test(e.href))}return r}function c(e){var t=a.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function u(e,t,o){if(!(this instanceof u))return new u(e,t,o);var a,n,s,p,h,f,m=l.slice(),g=typeof t,b=this,v=0;for("object"!=g&&"string"!=g&&(o=t,t=null),o&&"function"!=typeof o&&(o=r.parse),t=d(t),a=!(n=c(e||"")).protocol&&!n.slashes,b.slashes=n.slashes||a&&t.slashes,b.protocol=n.protocol||t.protocol||"",e=n.rest,n.slashes||(m[3]=[/(.*)/,"pathname"]);v<m.length;v++)"function"!=typeof(p=m[v])?(s=p[0],f=p[1],s!=s?b[f]=e:"string"==typeof s?~(h=e.indexOf(s))&&(e="number"==typeof p[2]?(b[f]=e.slice(0,h),e.slice(h+p[2])):(b[f]=e.slice(h),e.slice(0,h))):(h=s.exec(e))&&(b[f]=h[1],e=e.slice(0,h.index)),b[f]=b[f]||a&&p[3]&&t[f]||"",p[4]&&(b[f]=b[f].toLowerCase())):e=p(e);o&&(b.query=o(b.query)),a&&t.slashes&&"/"!==b.pathname.charAt(0)&&(""!==b.pathname||""!==t.pathname)&&(b.pathname=function(e,t){for(var o=(t||"/").split("/").slice(0,-1).concat(e.split("/")),i=o.length,r=o[i-1],a=!1,n=0;i--;)"."===o[i]?o.splice(i,1):".."===o[i]?(o.splice(i,1),n++):n&&(0===i&&(a=!0),o.splice(i,1),n--);return a&&o.unshift(""),"."!==r&&".."!==r||o.push(""),o.join("/")}(b.pathname,t.pathname)),i(b.port,b.protocol)||(b.host=b.hostname,b.port=""),b.username=b.password="",b.auth&&(p=b.auth.split(":"),b.username=p[0]||"",b.password=p[1]||""),b.origin=b.protocol&&b.host&&"file:"!==b.protocol?b.protocol+"//"+b.host:"null",b.href=b.toString()}u.prototype={set:function(e,t,o){var a,n=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(o||r.parse)(t)),n[e]=t;break;case"port":n[e]=t,i(t,n.protocol)?t&&(n.host=n.hostname+":"+t):(n.host=n.hostname,n[e]="");break;case"hostname":n[e]=t,n.port&&(t+=":"+n.port),n.host=t;break;case"host":n[e]=t,/:\d+$/.test(t)?(t=t.split(":"),n.port=t.pop(),n.hostname=t.join(":")):(n.hostname=t,n.port="");break;case"protocol":n.protocol=t.toLowerCase(),n.slashes=!o;break;case"pathname":case"hash":t?(a="pathname"===e?"/":"#",n[e]=t.charAt(0)!==a?a+t:t):n[e]=t;break;default:n[e]=t}for(var s=0;s<l.length;s++){var d=l[s];d[4]&&(n[d[1]]=n[d[1]].toLowerCase())}return n.origin=n.protocol&&n.host&&"file:"!==n.protocol?n.protocol+"//"+n.host:"null",n.href=n.toString(),n},toString:function(e){e&&"function"==typeof e||(e=r.stringify);var t,o=this,i=o.protocol;i&&":"!==i.charAt(i.length-1)&&(i+=":");var a=i+(o.slashes?"//":"");return o.username&&(a+=o.username,o.password&&(a+=":"+o.password),a+="@"),a+=o.host+o.pathname,(t="object"==typeof o.query?e(o.query):o.query)&&(a+="?"!==t.charAt(0)?"?"+t:t),o.hash&&(a+=o.hash),a}},u.extractProtocol=c,u.location=d,u.qs=r,t.exports=u}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{querystringify:16,"requires-port":17}]},{},[4])(4)}));var tus$1=tus;
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let BackendAiStorageList=class extends BackendAIPage{constructor(){super(),this._APIMajorVersion=5,this.storageType="general",this.folders=Object(),this.folderInfo=Object(),this.is_admin=!1,this.authenticated=!1,this.renameFolderId="",this.deleteFolderId="",this.explorer=Object(),this.explorerFiles=Array(),this.existingFile="",this.invitees=[],this.selectedFolder="",this.downloadURL="",this.uploadFiles=Array(),this.fileUploadQueue=[],this.fileUploadCount=0,this.concurrentFileUploadLimit=2,this.vhost="",this.vhosts=[],this.allowedGroups=[],this.fileListGrid=Object(),this.indicator=Object(),this.notification=Object(),this.renameFileDialog=Object(),this.deleteFileDialog=Object(),this.downloadFileDialog=Object(),this.sessionLauncher=Object(),this.spinner=Object(),this.allowed_folder_type=[],this.uploadFilesExist=!1,this._boundIndexRenderer=Object(),this._boundTypeRenderer=Object(),this._boundControlFolderListRenderer=Object(),this._boundControlFileListRenderer=Object(),this._boundPermissionViewRenderer=Object(),this._boundOwnerRenderer=Object(),this._boundFileNameRenderer=Object(),this._boundCreatedTimeRenderer=Object(),this._boundPermissionRenderer=Object(),this._uploadFlag=!0,this.isWritable=!1,this._maxFileUploadSize=-1,this.minimumResource={cpu:1,mem:.5},this.filebrowserSupportedImages=[],this._boundIndexRenderer=this.indexRenderer.bind(this),this._boundTypeRenderer=this.typeRenderer.bind(this),this._boundControlFolderListRenderer=this.controlFolderListRenderer.bind(this),this._boundControlFileListRenderer=this.controlFileListRenderer.bind(this),this._boundPermissionViewRenderer=this.permissionViewRenderer.bind(this),this._boundOwnerRenderer=this.OwnerRenderer.bind(this),this._boundFileNameRenderer=this.fileNameRenderer.bind(this),this._boundCreatedTimeRenderer=this.createdTimeRenderer.bind(this),this._boundPermissionRenderer=this.permissionRenderer.bind(this)}static get styles(){return[BackendAiStyles,IronFlex,IronFlexAlignment,IronPositioning,css`
        vaadin-grid {
          border: 0 !important;
        }

        vaadin-grid.folderlist {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 230px);
        }

        vaadin-grid.explorer {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 370px);
        }

        ul {
          padding-left: 0;
        }

        ul li {
          list-style: none;
          font-size: 13px;
        }

        span.indicator {
          width: 100px;
          font-size: 10px;
        }

        .info-indicator {
          min-width: 90px;
          padding: 0 10px;
        }

        div.big.indicator {
          font-size: 48px;
          margin-top:10px;
          margin-bottom: 10px;
        }

        .folder-action-buttons wl-button {
          margin-right: 10px;
        }

        wl-button > wl-icon {
          --icon-size: 24px;
          padding: 0;
        }

        wl-icon {
          --icon-size: 16px;
          padding: 0;
        }

        wl-button.button {
          width: 330px;
        }

        mwc-icon-button.tiny {
          width: 35px;
          height: 35px;
        }

        .warning {
          color: red;
        }

        vaadin-item {
          font-size: 13px;
          font-weight: 100;
        }

        #folder-explorer-dialog {
          width: calc(100% - 250px); /* 250px is width for drawer menu */
          --component-height: calc(100vh - 200px); /* calc(100vh - 170px); */
          right: 0;
          top: 0;
          margin: 170px 0 0 0;
        }

        #folder-explorer-dialog.mini_ui {
          width: calc(100% - 88px); /* 88px is width for mini-ui icon of drawer menu */
        }

        #folder-explorer-dialog vaadin-grid vaadin-grid-column {
          height: 32px !important;
        }

        #folder-explorer-dialog vaadin-grid mwc-icon-button {
          --mdc-icon-size: 24px;
          --mdc-icon-button-size: 28px;
        }

        @media screen and (max-width: 700px) {
          #folder-explorer-dialog,
          #folder-explorer-dialog.mini_ui {
            min-width: 410px;
            --component-width: 100%;
            width: 100%;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            left: 0px;
            right: 0px;
          }
        }

        @media screen and (max-width: 750px) {
          #folder-explorer-dialog,
          #folder-explorer-dialog.mini_ui {
            --component-width: auto;
          }
        }

        @media screen and (min-width: 900px) {
          #folder-explorer-dialog,
          #folder-explorer-dialog.mini_ui
           {
            --component-width: calc(100% - 45px); /* calc(100% - 30px); */
          }
        }

        div.breadcrumb {
          color: #637282;
          font-size: 1em;
          margin-bottom: 10px;
        }

        div.breadcrumb span:first-child {
          display: none;
        }

        .breadcrumb li:before {
          padding: 3px;
          transform: rotate(-45deg) translateY(-2px);
          transition: color ease-in .2s;
          border: solid;
          border-width: 0 2px 2px 0;
          border-color: #242424;
          margin-right: 10px;
          content: '';
          display: inline-block;
        }

        .breadcrumb li {
          display: inline-block;
          font-size: 16px;
        }

        .breadcrumb mwc-icon-button {
          --mdc-icon-size: 20px;
          --mdc-icon-button-size: 22px;
        }

        mwc-textfield {
          width: 100%;
          --mdc-theme-primary: #242424;
          --mdc-text-field-fill-color: transparent;
        }

        mwc-textfield.red {
          --mdc-theme-primary: var(--paper-red-400) !important;
        }

        mwc-button {
          margin: auto 10px;
          --mdc-typography-button-font-size: 12px;
        }

        wl-button.goto {
          margin: 0;
          padding: 5px;
          min-width: 0;
        }

        wl-button.goto:last-of-type {
          font-weight: bold;
        }

        mwc-button.fullwidth {
          width: 100%;
        }

        mwc-button#readonly-btn {
          width: 150px;
        }

        div#upload {
          margin: 0;
          padding: 0;
        }

        div#dropzone {
          display: none;
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          z-index: 10;
        }

        div#dropzone, div#dropzone p {
          margin: 0;
          padding: 0;
          width: 100%;
          background: rgba(211, 211, 211, .5);
          text-align: center;
        }

        .progress {
          padding: 30px 10px;
          border: 1px solid lightgray;
        }

        .progress-item {
          padding: 10px 30px;
        }

        wl-button {
          --button-bg: var(--paper-orange-50);
          --button-bg-hover: var(--paper-orange-100);
          --button-bg-active: var(--paper-orange-600);
          color: var(--paper-orange-900);
        }

        backend-ai-dialog mwc-textfield,
        backend-ai-dialog mwc-select {
          --mdc-typography-font-family: var(--general-font-family);
          --mdc-typography-label-font-size: 12px;
          --mdc-theme-primary: var(--general-textfield-selected-color);
        }

        #textfields wl-textfield,
        wl-label {
          margin-bottom: 20px;
        }

        wl-label {
          --label-font-family: Roboto, Noto, sans-serif;
          --label-color: black;
        }
        wl-checkbox {
          --checkbox-color: var(--paper-orange-900);
          --checkbox-color-checked: var(--paper-orange-900);
          --checkbox-bg-checked: var(--paper-orange-900);
          --checkbox-color-disabled-checked: var(--paper-orange-900);
          --checkbox-bg-disabled-checked: var(--paper-orange-900);
        }

        #modify-permission-dialog {
          --component-min-width: 600px;
        }

        backend-ai-dialog {
          --component-min-width: 350px;
        }

        .apply-grayscale {
          -webkit-filter: grayscale(1.0);
          filter: grayscale(1.0);
        }

        img#filebrowser-img {
          width:24px;
          margin:15px 10px;
        }

        @media screen and (max-width: 750px) {
          mwc-button {
            width: auto;
          }
          mwc-button > span {
            display: none;
          }
          #modify-permission-dialog {
            --component-min-width: 100%;
          }
        }
      `]}_toggleCheckbox(){let e=this.shadowRoot.querySelectorAll(".multiple-action-buttons");this.fileListGrid.selectedItems.length>0?[].forEach.call(e,(e=>{e.style.display="block"})):[].forEach.call(e,(e=>{e.style.display="none"}))}render(){return html$1`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <vaadin-grid class="folderlist" theme="row-stripes column-borders wrap-cell-content compact" column-reordering-allowed aria-label="Folder list" .items="${this.folders}">
        <vaadin-grid-column width="40px" flex-grow="0" resizable header="#" text-align="center" .renderer="${this._boundIndexRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable header="${translate("data.folders.Name")}">
          <template>
            <div class="indicator" @click="[[_folderExplorer()]]" .folder-id="[[item.name]]">[[item.name]]</div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable>
          <template class="header">id</template>
          <template>
            <div class="layout vertical">
              <span class="indicator monospace">[[item.id]]</span>
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column width="85px" flex-grow="0" resizable header="${translate("data.folders.Location")}">
          <template>
            <div class="layout vertical">
              <span>[[item.host]]</span>
            </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="45px" flex-grow="0" resizable header="${translate("data.folders.Type")}" .renderer="${this._boundTypeRenderer}"></vaadin-grid-column>
        <vaadin-grid-column width="85px" flex-grow="0" resizable header="${translate("data.folders.Permission")}" .renderer="${this._boundPermissionViewRenderer}"></vaadin-grid-column>
        <vaadin-grid-column auto-width flex-grow="0" resizable header="${translate("data.folders.Owner")}" .renderer="${this._boundOwnerRenderer}"></vaadin-grid-column>
        <vaadin-grid-column auto-width resizable header="${translate("data.folders.Control")}" .renderer="${this._boundControlFolderListRenderer}"></vaadin-grid-column>
      </vaadin-grid>

      <backend-ai-dialog id="rename-folder-dialog" fixed backdrop>
        <span slot="title">${translate("data.folders.RenameAFolder")}</span>
        <div slot="content">
          <mwc-textfield class="red" id="new-folder-name" label="${translate("data.folders.TypeNewFolderName")}"
           pattern="^[a-zA-Z0-9\._-]*$"
           required autoValidate validationMessage="${translate("data.Allowslettersnumbersand-_dot")}"
           style="width:320px;" maxLength="64" placeholder="${get("maxLength.64chars")}"
           @change="${()=>{this._validateFolderName(!0)}}"></mwc-textfield>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button unelevated class="fullwidth bg-blue button" type="submit" icon="edit" id="rename-button" outlined @click="${()=>this._renameFolder()}">
            ${translate("data.folders.Rename")}
          </mwc-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="delete-folder-dialog" fixed backdrop>
        <span slot="title">${translate("data.folders.DeleteAFolder")}</span>
        <div slot="content" style="width:100%;">
          <div class="warning" style="margin-left:16px;">${translate("dialog.warning.CannotBeUndone")}</div>
          <mwc-textfield class="red" id="delete-folder-name" label="${translate("data.folders.TypeFolderNameToDelete")}"
                         maxLength="64" placeholder="${get("maxLength.64chars")}"></mwc-textfield>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button unelevated class="fullwidth red button" type="submit" icon="close" id="delete-button" @click="${()=>this._deleteFolderWithCheck()}">
            ${translate("data.folders.Delete")}
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="info-folder-dialog" fixed backdrop>
        <span slot="title">${this.folderInfo.name}</span>
        <div slot="content" role="listbox" style="margin: 0;width:100%;">
          <div class="horizontal justified layout wrap" style="margin-top:15px;">
              <div class="vertical layout center info-indicator">
                <div class="big indicator">${this.folderInfo.host}</div>
                <span>${translate("data.folders.Location")}</span>
              </div>
            <div class="vertical layout center info-indicator">
              <div class="big indicator">${this.folderInfo.numFiles}</div>
              <span>${translate("data.folders.NumberOfFiles")}</span>
            </div>
          </div>
          <mwc-list>
            <mwc-list-item twoline>
              <span><strong>ID</strong></span>
              <span class="monospace" slot="secondary">${this.folderInfo.id}</span>
            </mwc-list-item>
            ${this.folderInfo.is_owner?html$1`
              <mwc-list-item twoline>
                <span><strong>${translate("data.folders.Ownership")}</strong></span>
                <span slot="secondary">${translate("data.folders.DescYouAreFolderOwner")}</span>
              </mwc-list-item>
            `:html$1``}
            <mwc-list-item twoline>
              <span><strong>${translate("data.folders.Permission")}</strong></span>
              <div slot="secondary" class="horizontal layout">
              ${this.folderInfo.permission?html$1`
                ${this._hasPermission(this.folderInfo,"r")?html$1`
                    <lablup-shields app="" color="green"
                                    description="R" ui="flat"></lablup-shields>`:html$1``}
                ${this._hasPermission(this.folderInfo,"w")?html$1`
                    <lablup-shields app="" color="blue"
                                    description="W" ui="flat"></lablup-shields>`:html$1``}
                ${this._hasPermission(this.folderInfo,"d")?html$1`
                    <lablup-shields app="" color="red"
                                    description="D" ui="flat"></lablup-shields>`:html$1``}`:html$1``}
              </div>
            </mwc-list-item>
          </mwc-list>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="folder-explorer-dialog" class="folder-explorer" narrowLayout>
        <span slot="title">${this.explorer.id}</span>
        <div slot="action" class="horizontal layout flex folder-action-buttons">
          <div class="flex"></div>
          ${this.isWritable?html$1`
            <mwc-button
                outlined
                class="multiple-action-buttons fg red"
                icon="delete"
                @click="${()=>this._openDeleteMultipleFileDialog()}"
                style="display:none;">
                <span>${translate("data.explorer.Delete")}</span>
            </mwc-button>
            <div id="filebrowser-btn-cover">
              <mwc-button
                  id="filebrowser-btn"
                  ?disabled=${!this.isWritable}
                  @click="${()=>this._executeFileBrowser()}">
                  <img class=${!this.isWritable}
                       id="filebrowser-img"
                       src="./resources/icons/filebrowser.svg"></img>
                  <span>${translate("data.explorer.ExecuteFileBrowser")}</span>
              </mwc-button>
            </div>
            <div id="add-btn-cover">
              <mwc-button
                  id="add-btn"
                  icon="cloud_upload"
                  ?disabled=${!this.isWritable}
                  @click="${e=>this._uploadFileBtnClick(e)}">
                  <span>${translate("data.explorer.UploadFiles")}</span>
              </mwc-button>
            </div>
            <div id="mkdir-cover">
              <mwc-button
                  id="mkdir"
                  class="tooltip"
                  icon="create_new_folder"
                  ?disabled=${!this.isWritable}
                  @click="${()=>this._mkdirDialog()}">
                  <span>${translate("data.explorer.NewFolder")}</span>
              </mwc-button>
            </div>
          `:html$1`
          <mwc-button
              id="readonly-btn"
              disabled>
            <span>${translate("data.explorer.ReadonlyFolder")}</span>
          </mwc-button>
          `}
        </div>
        <div slot="content">
          <div class="breadcrumb">
            ${this.explorer.breadcrumb?html$1`
              <ul>
                ${this.explorer.breadcrumb.map((e=>html$1`
                  <li>
                    ${"."===e?html$1`
                      <mwc-icon-button
                        icon="folder_open" dest="${e}"
                        @click="${e=>this._gotoFolder(e)}"
                      ></mwc-icon-button>
                    `:html$1`
                      <a outlined class="goto" path="item" @click="${e=>this._gotoFolder(e)}" dest="${e}">${e}</a>
                    `}
                  </li>
                `))}
              </ul>
            `:html$1``}
          </div>
          <div id="dropzone"><p>drag</p></div>
          <input type="file" id="fileInput" @change="${e=>this._uploadFileChange(e)}" hidden multiple>
          ${this.uploadFilesExist?html$1`
          <mwc-button icon="cancel" id="cancel_upload" @click="${()=>this._cancelUpload()}">
            ${translate("data.explorer.StopUploading")}
          </mwc-button>
          <vaadin-grid class="progress" theme="row-stripes compact" aria-label="uploadFiles" .items="${this.uploadFiles}"
                       height-by-rows>
            <vaadin-grid-column width="100px" flex-grow="0">
              <template>
                <vaadin-item class="progress-item">
                  <div>
                    <template is="dom-if" if="[[item.complete]]">
                      <wl-icon>check</wl-icon>
                    </template>
                  </div>
                </vaadin-item>
              </template>
            </vaadin-grid-column>

            <vaadin-grid-column>
              <template>
                <vaadin-item>
                  <span>[[item.name]]</span>
                  <template is="dom-if" if="[[!item.complete]]">
                    <div>
                      <vaadin-progress-bar value="[[item.progress]]"></vaadin-progress-bar>
                    </div>
                    <div>
                      <span>[[item.caption]]</span>
                    </div>
                  </template>
                </vaadin-item>
              </template>
            </vaadin-grid-column>
          </vaadin-grid>`:html$1``}
          <vaadin-grid id="fileList-grid" class="explorer" theme="row-stripes compact" aria-label="Explorer" .items="${this.explorerFiles}">
            <vaadin-grid-selection-column auto-select></vaadin-grid-selection-column>
            <vaadin-grid-column width="40px" flex-grow="0" resizable header="#" .renderer="${this._boundIndexRenderer}">
            </vaadin-grid-column>

            <vaadin-grid-sort-column flex-grow="2" resizable header="${translate("data.explorer.Name")}" path="filename" .renderer="${this._boundFileNameRenderer}">
            </vaadin-grid-sort-column>

            <vaadin-grid-sort-column flex-grow="2" resizable header="${translate("data.explorer.Created")}" path="ctime" .renderer="${this._boundCreatedTimeRenderer}">
            </vaadin-grid-sort-column>

            <vaadin-grid-column auto-width resizable>
              <template class="header">
                <vaadin-grid-sorter path="size">${translate("data.explorer.Size")}</vaadin-grid-sorter>
              </template>
              <template>
                <div class="layout vertical">
                  <span>[[item.size]]</span>
                </div>
              </template>
            </vaadin-grid-column>
            <vaadin-grid-column resizable auto-width header="${translate("data.explorer.Actions")}" .renderer="${this._boundControlFileListRenderer}"></vaadin-grid-column>
          </vaadin-grid>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="mkdir-dialog" fixed backdrop>
        <span slot="title">${translate("data.explorer.CreateANewFolder")}</span>
        <div slot="content">
          <mwc-textfield id="mkdir-name"
                         label="${translate("data.explorer.Foldername")}"
                         @change="${()=>this._validatePathName()}"
                         required
                         maxLength="255" placeholder="${get("maxLength.255chars")}"
                         validationMessage="${get("data.explorer.ValueRequired")}"></mwc-textfield>
          <br/>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout distancing">
          <mwc-button icon="rowing" class="fullwidth blue button" type="submit" id="mkdir-btn" @click="${e=>this._mkdir(e)}" outlined>
            ${translate("button.Create")}
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="share-folder-dialog" fixed backdrop persistent>
        <span slot="title">${translate("data.explorer.ShareFolder")}</span>
        <div slot="content" role="listbox" style="margin: 0;width:100%;" >
          <div style="margin: 10px 0px">${translate("data.explorer.People")}</div>
          <div class="vertical layout flex" id="textfields">
            <div class="horizontal layout">
              <div style="flex-grow: 2">
                <mwc-textfield class="share-email" type="email" id="first-email"
                    label="${translate("data.explorer.EnterEmailAddress")}"
                    maxLength="64" placeholder="${get("maxLength.64chars")}">
                </mwc-textfield>
              </div>
              <div>
                <wl-button fab flat @click="${()=>this._addTextField()}">
                  <wl-icon>add</wl-icon>
                </wl-button>
                <wl-button fab flat @click="${()=>this._removeTextField()}">
                  <wl-icon>remove</wl-icon>
                </wl-button>
              </div>
            </div>
          </div>
          <div style="margin: 10px 0px">${translate("data.explorer.Permissions")}</div>
          <div style="display: flex; justify-content: space-evenly;">
            <wl-label>
              <wl-checkbox checked disabled></wl-checkbox>
              ${translate("button.View")}
            </wl-label>
            <wl-label>
              <wl-checkbox id="share-folder-write"></wl-checkbox>
              ${translate("button.Edit")}
            </wl-label>
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
            icon="share"
            type="button"
            class="fullwidth button"
            unelevated
            id="share-button"
            @click=${e=>this._shareFolder(e)}
          >
            ${translate("button.Share")}
          </mwc-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="modify-permission-dialog" fixed backdrop>
        <span slot="title">${translate("data.explorer.ModifyPermissions")}</span>
        <div slot="content" role="listbox" style="margin: 0; padding: 10px;">
          <vaadin-grid theme="row-stripes column-borders compact" .items="${this.invitees}">
            <vaadin-grid-column
              width="30px"
              flex-grow="0"
              header="#"
              .renderer="${this._boundIndexRenderer}"
            ></vaadin-grid-column>
            <vaadin-grid-column header="${translate("data.explorer.InviteeEmail")}">
              <template>
                <div>[[item.shared_to.email]]</div>
              </template>
            </vaadin-grid-column>
            <vaadin-grid-column header="${translate("data.explorer.Permission")}" .renderer="${this._boundPermissionRenderer}">
            </vaadin-grid-column>
          </vaadin-grid>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
            icon="check"
            type="button"
            class="fullwidth button"
            unelevated
            @click=${()=>this._modifySharedFolderPermissions()}
          >
            ${translate("button.SaveChanges")}
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="rename-file-dialog" fixed backdrop blockscrolling>
        <span slot="title">${translate("data.explorer.RenameAFile")}</span>
        <div slot="content">
          <mwc-textfield class="red" id="new-file-name" label="${translate("data.explorer.NewFileName")}"
          required @change="${()=>this._validateExistingFileName()}" auto-validate style="width:320px;"
          maxLength="255" placeholder="${get("maxLength.255chars")}"></mwc-textfield>
          <div id="old-file-name" style="padding-left:15px;height:2.5em;"></div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button icon="edit" class="fullwidth blue button" type="button" id="rename-file-button" unelevated @click="${e=>this._renameFile(e)}">
            ${translate("data.explorer.RenameAFile")}
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="delete-file-dialog" fixed backdrop>
        <span slot="title">${translate("dialog.title.LetsDouble-Check")}</span>
        <div slot="content">
          <p>${translate("dialog.warning.CannotBeUndone")}
          ${translate("dialog.ask.DoYouWantToProceed")}</p>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button outlined @click="${e=>this._hideDialog(e)}">${translate("button.Cancel")}</mwc-button>
          <mwc-button raised @click="${e=>this._deleteFileWithCheck(e)}">${translate("button.Okay")}</mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="download-file-dialog" fixed backdrop>
        <span slot="title">${translate("data.explorer.DownloadFile")}</span>
        <div slot="content">
          <a href="${this.downloadURL}">
            <wl-button outlined>${translate("data.explorer.TouchToDownload")}</wl-button>
          </a>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout distancing">
          <mwc-button @click="${e=>this._hideDialog(e)}">${translate("button.Close")}</mwc-button>
        </div>
      </backend-ai-dialog>
    `}firstUpdated(){this._addEventListenerDropZone(),this._mkdir=this._mkdir.bind(this),this.renameFileDialog=this.shadowRoot.querySelector("#rename-file-dialog"),this.deleteFileDialog=this.shadowRoot.querySelector("#delete-file-dialog"),this.downloadFileDialog=this.shadowRoot.querySelector("#download-file-dialog"),this.sessionLauncher=this.shadowRoot.querySelector("#session-launcher"),this.fileListGrid=this.shadowRoot.querySelector("#fileList-grid"),this.fileListGrid.addEventListener("selected-items-changed",(()=>{this._toggleCheckbox()})),this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.indicator=globalThis.lablupIndicator,this.notification=globalThis.lablupNotification;let e=this.shadowRoot.querySelectorAll("mwc-textfield");for(const t of e)this._addInputValidator(t);"automount"===this.storageType?this.shadowRoot.querySelector("vaadin-grid.folderlist").style.height="calc(100vh - 230px)":this.shadowRoot.querySelector("vaadin-grid.folderlist").style.height="calc(100vh - 185px)",document.addEventListener("backend-ai-group-changed",(e=>this._refreshFolderList())),document.addEventListener("backend-ai-ui-changed",(e=>this._refreshFolderUI(e))),this._refreshFolderUI({detail:{"mini-ui":globalThis.mini_ui}})}_modifySharedFolderPermissions(){const e=this.shadowRoot.querySelectorAll("#modify-permission-dialog wl-select"),t=Array.prototype.filter.call(e,((e,t)=>e.value!==this.invitees[t].perm)).map(((e,t)=>({perm:"kickout"===e.value?null:e.value,user:this.invitees[t].shared_to.uuid,vfolder:this.invitees[t].vfolder_id}))).map((e=>globalThis.backendaiclient.vfolder.modify_invitee_permission(e)));Promise.all(t).then((e=>{0===e.length?this.notification.text=get("data.permission.NoChanges"):this.notification.text=get("data.permission.PermissionModified"),this.notification.show(),this.shadowRoot.querySelector("#modify-permission-dialog").hide()}))}permissionRenderer(e,t,o){render(html$1`
        <div class="vertical layout">
          <wl-select label="${translate("data.folders.SelectPermission")}">
            <option ?selected=${"ro"===o.item.perm} value="ro">${translate("data.folders.View")}</option>
            <option ?selected=${"rw"===o.item.perm} value="rw">${translate("data.folders.Edit")}</option>
            <option ?selected=${"wd"===o.item.perm} value="wd">${translate("data.folders.EditDelete")}</option>
            <option value=kickout>${translate("data.folders.KickOut")}</option>
          </wl-select>
          <!--<mwc-select outlined label="${translate("data.folders.SelectPermission")}">
            <mwc-list-item ?selected=${"ro"===o.item.perm} value="ro">
            <mwc-list-item ?selected=${"rw"===o.item.perm} value="rw">${translate("data.folders.Edit")}</mwc-list-item>
            <mwc-list-item ?selected=${"wd"===o.item.perm} value="wd">${translate("data.folders.EditDelete")}</mwc-list-item>
            <mwc-list-item value="kickout">${translate("data.folders.KickOut")}</mwc-list-item>
          </mwc-select>-->
        </div>
      `,e)}_addTextField(){let e=document.createElement("mwc-textfield");e.label=get("data.explorer.EnterEmailAddress"),e.type="email",e.className="share-email",e.style.width="auto",e.style.marginRight="83px",this.shadowRoot.querySelector("#textfields").appendChild(e)}_removeTextField(){const e=this.shadowRoot.querySelector("#textfields");e.children.length>1&&e.removeChild(e.lastChild)}indexRenderer(e,t,o){render(html$1`${this._indexFrom1(o.index)}`,e)}controlFolderListRenderer(e,t,o){render(html$1`
        <div
          id="controls"
          class="layout flex center wrap"
          folder-id="${o.item.name}"
        >
          <mwc-icon-button
            class="fg green controls-running"
            icon="info"
            @click="${e=>this._infoFolder(e)}"
          ></mwc-icon-button>

          ${this._hasPermission(o.item,"r")?html$1`
              <mwc-icon-button
                class="fg blue controls-running"
                icon="folder_open"
                @click="${e=>this._folderExplorer(e,this._hasPermission(o.item,"w")||o.item.is_owner||"group"===o.item.type&&this.is_admin)}"
                .folder-id="${o.item.name}"></mwc-icon-button>
            `:html$1``}
          ${o.item.is_owner&&"user"==o.item.type?html$1`
              <mwc-icon-button
                class="fg blue controls-running"
                icon="share"
                @click="${e=>this._shareFolderDialog(e)}"
              ></mwc-icon-button>
            `:html$1``}

          ${o.item.is_owner?html$1`
              <mwc-icon-button
                class="fg cyan controls-running"
                icon="perm_identity"
                @click=${e=>this._modifyPermissionDialog(o.item.id)}
              ></mwc-icon-button>
            `:html$1``}
          ${o.item.is_owner?html$1`
              <mwc-icon-button
                class="fg blue controls-running"
                icon="edit"
                @click="${e=>this._renameFolderDialog(e)}"
              ></mwc-icon-button>
            `:html$1``}
          ${o.item.is_owner||this._hasPermission(o.item,"d")||"group"===o.item.type&&this.is_admin?html$1`
              <mwc-icon-button
                class="fg red controls-running"
                icon="delete"
                @click="${e=>this._deleteFolderDialog(e)}"
              ></mwc-icon-button>
            `:html$1``}
        </div>
       `,e)}controlFileListRenderer(e,t,o){render(html$1`
        <div class="flex layout wrap">
          ${this._isDir(o.item)?html$1`
            <mwc-icon-button id="download-btn" class="tiny fg blue" icon="cloud_download"
                filename="${o.item.filename}" @click="${e=>this._downloadFile(e,!0)}"></mwc-icon-button>
          `:html$1`
            <mwc-icon-button id="download-btn" class="tiny fg blue" icon="cloud_download"
                filename="${o.item.filename}" @click="${e=>this._downloadFile(e)}"></mwc-icon-button>
          `}
          <mwc-icon-button id="rename-btn" ?disabled="${!this.isWritable}" class="tiny fg green" icon="edit" required
              filename="${o.item.filename}" @click="${this._openRenameFileDialog.bind(this)}"></mwc-icon-button>
          <mwc-icon-button id="delete-btn" ?disabled="${!this.isWritable}" class="tiny fg red" icon="delete_forever"
              filename="${o.item.filename}" @click="${e=>this._openDeleteFileDialog(e)}"></mwc-icon-button>
        </div>
       `,e)}fileNameRenderer(e,t,o){render(html$1`
        ${this._isDir(o.item)?html$1`
          <div class="indicator horizontal center layout" name="${o.item.filename}">
            <mwc-icon-button class="fg controls-running" icon="folder_open" name="${o.item.filename}"
                               @click="${e=>this._enqueueFolder(e)}"></mwc-icon-button>
            ${o.item.filename}
          </div>
       `:html$1`
          <div class="indicator horizontal center layout">
            <mwc-icon-button class="fg controls-running" icon="insert_drive_file"></mwc-icon-button>
            ${o.item.filename}
          </div>
       `}
      `,e)}permissionViewRenderer(e,t,o){render(html$1`
        <div class="horizontal center-justified wrap layout">
        ${this._hasPermission(o.item,"r")?html$1`
            <lablup-shields app="" color="green"
                            description="R" ui="flat"></lablup-shields>`:html$1``}
        ${this._hasPermission(o.item,"w")?html$1`
            <lablup-shields app="" color="blue"
                            description="W" ui="flat"></lablup-shields>`:html$1``}
        ${this._hasPermission(o.item,"d")?html$1`
            <lablup-shields app="" color="red"
                            description="D" ui="flat"></lablup-shields>`:html$1``}
        </div>`,e)}OwnerRenderer(e,t,o){render(html$1`
        ${o.item.is_owner?html$1`
          <div class="horizontal center-justified center layout">
            <mwc-icon-button class="fg green" icon="done"></mwc-icon-button>
          </div>`:html$1``}
        `,e)}createdTimeRenderer(e,t,o){render(html$1`
        <div class="layout vertical">
            <span>${this._humanReadableTime(o.item.ctime)}</span>
        </div>`,e)}typeRenderer(e,t,o){render(html$1`
        <div class="layout vertical center-justified">
        ${"user"==o.item.type?html$1`
          <wl-icon>person</wl-icon>
        `:html$1`
          <wl-icon>group</wl-icon>
        `}
        </div>`,e)}refreshFolderList(){return this._triggerFolderListChanged(),this._refreshFolderList()}_refreshFolderList(e=!1){this.spinner.show();let t=null;t=globalThis.backendaiclient.current_group_id(),globalThis.backendaiclient.vfolder.list(t).then((e=>{this.spinner.hide();let t=e.filter((e=>"general"!==this.storageType||e.name.startsWith(".")?"automount"===this.storageType&&e.name.startsWith(".")?e:void 0:e));this.folders=t})),globalThis.backendaiclient.vfolder.list_hosts().then((t=>{this.active&&!e&&setTimeout((()=>{this._refreshFolderList()}),1e4)}))}_refreshFolderUI(e){let t=this.shadowRoot.querySelector("#folder-explorer-dialog");e.detail.hasOwnProperty("mini-ui")&&!0===e.detail["mini-ui"]?t.classList.add("mini_ui"):t.classList.remove("mini_ui")}async _checkFilebrowserSupported(){let e=(await globalThis.backendaiclient.image.list(["name","tag","registry","digest","installed","labels { key value }","resource_limits { key min max }"],!1,!0)).images;this.filebrowserSupportedImages=e.filter((e=>e.installed&&e.labels.find((e=>"ai.backend.service-ports"===e.key&&e.value.toLowerCase().includes("filebrowser")))))}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this._APIMajorVersion=globalThis.backendaiclient.APIMajorVersion,this._maxFileUploadSize=globalThis.backendaiclient._config.maxFileUploadSize,this._checkFilebrowserSupported(),this._refreshFolderList()}),!0):(this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this._APIMajorVersion=globalThis.backendaiclient.APIMajorVersion,this._maxFileUploadSize=globalThis.backendaiclient._config.maxFileUploadSize,this._checkFilebrowserSupported(),this._refreshFolderList()))}async _addFolderDialog(){let e=await globalThis.backendaiclient.vfolder.list_hosts();if(this.vhosts=e.allowed,this.vhost=e.default,this.allowed_folder_type.includes("group")){const e=await globalThis.backendaiclient.group.list();this.allowedGroups=e.groups}this.openDialog("add-folder-dialog")}_folderExplorerDialog(){this.openDialog("folder-explorer-dialog")}_mkdirDialog(){this.shadowRoot.querySelector("#mkdir-name").value="",this.openDialog("mkdir-dialog")}openDialog(e){this.shadowRoot.querySelector("#"+e).show()}closeDialog(e){this.shadowRoot.querySelector("#"+e).hide()}_indexFrom1(e){return e+1}_hasPermission(e,t){return!!e.permission.includes(t)||!(!e.permission.includes("w")||"r"!==t)}_getControlId(e){return e.target.closest("#controls").getAttribute("folder-id")}_infoFolder(e){const t=this._getControlId(e);globalThis.backendaiclient.vfolder.info(t).then((e=>{this.folderInfo=e,this.openDialog("info-folder-dialog")})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_renameFolderDialog(e){this.renameFolderId=this._getControlId(e),this.shadowRoot.querySelector("#new-folder-name").value="",this.openDialog("rename-folder-dialog")}_renameFolder(){globalThis.backendaiclient.vfolder.name=this.renameFolderId;const e=this.shadowRoot.querySelector("#new-folder-name"),t=e.value;if(e.reportValidity(),e.checkValidity()){const e=globalThis.backendaiclient.vfolder.rename(t);this.closeDialog("rename-folder-dialog"),e.then((e=>{this.notification.text=get("data.folders.FolderRenamed"),this.notification.show(),this._refreshFolderList()})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}}_deleteFolderDialog(e){this.deleteFolderId=this._getControlId(e),this.shadowRoot.querySelector("#delete-folder-name").value="",this.openDialog("delete-folder-dialog")}_deleteFolderWithCheck(){if(this.shadowRoot.querySelector("#delete-folder-name").value!==this.deleteFolderId)return this.notification.text=get("data.folders.FolderNameMismatched"),void this.notification.show();this.closeDialog("delete-folder-dialog"),this._deleteFolder(this.deleteFolderId)}_deleteFolder(e){globalThis.backendaiclient.vfolder.delete(e).then((e=>{this.notification.text=get("data.folders.FolderDeleted"),this.notification.show(),this.refreshFolderList(),this._triggerFolderListChanged()})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_triggerFolderListChanged(){let e=new CustomEvent("backend-ai-folder-list-changed");document.dispatchEvent(e)}_validateExistingFileName(){const e=this.shadowRoot.querySelector("#new-file-name");e.validityTransform=(t,o)=>{if(o.valid){let t,o=/[`~!@#$%^&*()|+=?;:'",<>\{\}\[\]\\\/]/gi;return e.value===this.renameFileDialog.querySelector("#old-file-name").textContent?(e.validationMessage=get("data.EnterDifferentValue"),t=!1,{valid:t,customError:!t}):(t=!0,t=!o.test(e.value),t||(e.validationMessage=get("data.Allowslettersnumbersand-_dot")),{valid:t,customError:!t})}return o.valueMissing?(e.validationMessage=get("data.FileandFoldernameRequired"),{valid:o.valid,customError:!o.valid}):(e.validationMessage=get("data.Allowslettersnumbersand-_dot"),{valid:o.valid,customError:!o.valid})}}_validateFolderName(e=!1){const t=e?this.shadowRoot.querySelector("#new-folder-name"):this.shadowRoot.querySelector("#add-folder-name");t.validityTransform=(o,i)=>{if(i.valid){let o,i=/[`~!@#$%^&*()|+=?;:'",<>\{\}\[\]\\\/\s]/gi;if(e){if(t.value===this.renameFolderId)return t.validationMessage=get("data.EnterDifferentValue"),o=!1,{valid:o,customError:!o};o=!0}return o=!i.test(t.value),o||(t.validationMessage=get("data.Allowslettersnumbersand-_dot")),{valid:o,customError:!o}}return i.valueMissing?(t.validationMessage=get("data.FolderNameRequired"),{valid:i.valid,customError:!i.valid}):(t.validationMessage=get("data.Allowslettersnumbersand-_dot"),{valid:i.valid,customError:!i.valid})}}async _clearExplorer(e=this.explorer.breadcrumb.join("/"),t=this.explorer.id,o=!1){let i=await globalThis.backendaiclient.vfolder.list_files(e,t);if(this.shadowRoot.querySelector("#fileList-grid").selectedItems=[],this._APIMajorVersion<6)this.explorer.files=JSON.parse(i.files);else{const e=JSON.parse(i.files);e.forEach(((e,t)=>{let o="FILE";if(e.filename===i.items[t].name)o=i.items[t].type;else for(let t=0;t<i.items.length;t++)if(e.filename===i.items[t].name){o=i.items[t].type;break}e.type=o})),this.explorer.files=e}this.explorerFiles=this.explorer.files,o&&(0===this.filebrowserSupportedImages.length&&await this._checkFilebrowserSupported(),this._toggleFilebrowserButton(),this.openDialog("folder-explorer-dialog"))}_toggleFilebrowserButton(){let e=!!(this.filebrowserSupportedImages.length>0&&this._isResourceEnough()),t=this.shadowRoot.querySelector("#filebrowser-img");this.shadowRoot.querySelector("#filebrowser-btn").disabled=!e;let o=e?"":"apply-grayscale";t.setAttribute("class",o)}_folderExplorer(e,t){let o={id:this._getControlId(e),breadcrumb:["."]};this.isWritable=t,this.explorer=o,this._clearExplorer(o.breadcrumb.join("/"),o.id,!0)}_enqueueFolder(e){const t=e.target;t.setAttribute("disabled","true");const o=e.target.getAttribute("name");this.explorer.breadcrumb.push(o),this._clearExplorer().then((e=>{t.removeAttribute("disabled")}))}_gotoFolder(e){const t=e.target.getAttribute("dest");let o=this.explorer.breadcrumb;const i=o.indexOf(t);-1!==i&&(o=o.slice(0,i+1),this.explorer.breadcrumb=o,this._clearExplorer(o.join("/"),this.explorer.id,!1))}_mkdir(e){const t=this.shadowRoot.querySelector("#mkdir-name"),o=t.value,i=this.explorer;if(t.reportValidity(),t.checkValidity()){globalThis.backendaiclient.vfolder.mkdir([...i.breadcrumb,o].join("/"),i.id).catch((e=>{e&e.message?(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.show(!0,e))})).then((e=>{this.closeDialog("mkdir-dialog"),this._clearExplorer()}))}}_isDir(e){return this._APIMajorVersion<6?e.mode.startsWith("d"):"DIRECTORY"===e.type}_byteToMB(e){return Math.floor(e/1e6)}_humanReadableFileSize(e){return e>1e9?Math.floor(e/1e9)+"GB":e>1e6?Math.floor(e/1e6)+"MB":e>1e3?Math.floor(e/1e3)+"KB":Math.floor(e)+"Bytes"}_addEventListenerDropZone(){const e=this.shadowRoot.querySelector("#folder-explorer-dialog"),t=this.shadowRoot.querySelector("#dropzone");t.addEventListener("dragleave",(()=>{t.style.display="none"})),e.addEventListener("dragover",(e=>(e.stopPropagation(),e.preventDefault(),!this.isWritable||(e.dataTransfer.dropEffect="copy",t.style.display="flex",!1)))),e.addEventListener("drop",(e=>{let o=!1;if(e.stopPropagation(),e.preventDefault(),t.style.display="none",this.isWritable){for(let t=0;t<e.dataTransfer.files.length;t++)if(e.dataTransfer.items[t].webkitGetAsEntry().isFile){const o=e.dataTransfer.files[t];if(this._maxFileUploadSize>0&&o.size>this._maxFileUploadSize)return this.notification.text=get("data.explorer.FileUploadSizeLimit")+` (${this._humanReadableFileSize(this._maxFileUploadSize)})`,void this.notification.show();if(this.explorerFiles.find((e=>e.filename===o.name))){window.confirm(`${get("data.explorer.FileAlreadyExists")}\n${o.name}\n${get("data.explorer.DoYouWantToOverwrite")}`)&&(o.progress=0,o.caption="",o.error=!1,o.complete=!1,this.uploadFiles.push(o))}else o.progress=0,o.caption="",o.error=!1,o.complete=!1,this.uploadFiles.push(o)}else o||(this.filebrowserSupportedImages.length>0?(this.notification.text=get("data.explorer.ClickFilebrowserButton"),this.notification.show()):(this.notification.text=get("data.explorer.NoImagesSupportingFileBrowser"),this.notification.show())),o=!0;for(let e=0;e<this.uploadFiles.length;e++)this.fileUpload(this.uploadFiles[e]),this._clearExplorer()}else this.notification.text=get("data.explorer.WritePermissionRequiredInUploadFiles"),this.notification.show()}))}_uploadFileBtnClick(e){const t=this.shadowRoot.querySelector("#fileInput");if(t&&document.createEvent){const e=document.createEvent("MouseEvents");e.initEvent("click",!0,!1),t.dispatchEvent(e)}}_uploadFileChange(e){let t=e.target.files.length;for(let o=0;o<t;o++){const t=e.target.files[o];let i="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let e=0;e<5;e++)i+=r.charAt(Math.floor(Math.random()*r.length));if(this._maxFileUploadSize>0&&t.size>this._maxFileUploadSize)return this.notification.text=get("data.explorer.FileUploadSizeLimit")+` (${this._humanReadableFileSize(this._maxFileUploadSize)})`,void this.notification.show();if(this.explorerFiles.find((e=>e.filename===t.name))){window.confirm(`${get("data.explorer.FileAlreadyExists")}\n${t.name}\n${get("data.explorer.DoYouWantToOverwrite")}`)&&(t.id=i,t.progress=0,t.caption="",t.error=!1,t.complete=!1,this.uploadFiles.push(t))}else t.id=i,t.progress=0,t.caption="",t.error=!1,t.complete=!1,this.uploadFiles.push(t)}for(let e=0;e<this.uploadFiles.length;e++)this.fileUpload(this.uploadFiles[e]);this.shadowRoot.querySelector("#fileInput").value=""}runFileUploadQueue(e=null){let t;null!==e&&this.fileUploadQueue.push(e);for(let e=this.fileUploadCount;e<this.concurrentFileUploadLimit;e++)this.fileUploadQueue.length>0&&(t=this.fileUploadQueue.shift(),this.fileUploadCount=this.fileUploadCount+1,t.start())}fileUpload(e){this._uploadFlag=!0,this.uploadFilesExist=this.uploadFiles.length>0;const t=this.explorer.breadcrumb.concat(e.name).join("/");globalThis.backendaiclient.vfolder.create_upload_session(t,e,this.explorer.id).then((o=>{const i=(new Date).getTime(),r=new tus$1.Upload(e,{endpoint:o,retryDelays:[0,3e3,5e3,1e4,2e4],uploadUrl:o,chunkSize:15728640,metadata:{filename:t,filetype:e.type},onError:e=>{console.log("Failed because: "+e),this.fileUploadCount=this.fileUploadCount-1,this.runFileUploadQueue()},onProgress:(t,o)=>{if(!this._uploadFlag)return r.abort(),this.uploadFiles[this.uploadFiles.indexOf(e)].caption="Canceling...",this.uploadFiles=this.uploadFiles.slice(),void setTimeout((()=>{this.uploadFiles=[],this.uploadFilesExist=!1}),1e3);const a=(new Date).getTime(),n=(t/1048576/((a-i)/1e3)).toFixed(1)+"MB/s",l=Math.floor((o-t)/(t/(a-i)*1e3));let s=get("data.explorer.LessThan10Sec");if(l>=86400)s=get("data.explorer.MoreThanADay");else if(l>10){s=`${Math.floor(l/3600)}:${Math.floor(l%3600/60)}:${l%60}`}const d=(t/o*100).toFixed(1);this.uploadFiles[this.uploadFiles.indexOf(e)].progress=t/o,this.uploadFiles[this.uploadFiles.indexOf(e)].caption=`${d}% / Time left : ${s} / Speed : ${n}`,this.uploadFiles=this.uploadFiles.slice()},onSuccess:()=>{this._clearExplorer(),this.uploadFiles[this.uploadFiles.indexOf(e)].complete=!0,this.uploadFiles=this.uploadFiles.slice(),setTimeout((()=>{this.uploadFiles.splice(this.uploadFiles.indexOf(e),1),this.uploadFilesExist=this.uploadFiles.length>0,this.uploadFiles=this.uploadFiles.slice(),this.fileUploadCount=this.fileUploadCount-1,this.runFileUploadQueue()}),1e3)}});this.runFileUploadQueue(r)}))}_cancelUpload(){this._uploadFlag=!1}_downloadFile(e,t=!1){let o=e.target.getAttribute("filename"),i=this.explorer.breadcrumb.concat(o).join("/");globalThis.backendaiclient.vfolder.request_download_token(i,this.explorer.id,t).then((e=>{const i=e.token;let r;if(r=this._APIMajorVersion<6?globalThis.backendaiclient.vfolder.get_download_url_with_token(i):`${e.url}?token=${e.token}&archive=${t}`,globalThis.iOSSafari)this.downloadURL=r,this.downloadFileDialog.show(),URL.revokeObjectURL(r);else{let e=document.createElement("a");e.style.display="none",e.addEventListener("click",(function(e){e.stopPropagation()})),e.href=r,e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(r)}}))}_executeFileBrowser(){this._isResourceEnough()?this.filebrowserSupportedImages.length>0?(this._launchSession(),this._toggleFilebrowserButton()):(this.notification.text=get("data.explorer.NoImagesSupportingFileBrowser"),this.notification.show()):(this.notification.text=get("data.explorer.NotEnoughResourceForFileBrowserSession"),this.notification.show())}async _launchSession(){let e,t={},o=this.filebrowserSupportedImages.filter((e=>e.name.toLowerCase().includes("filebrowser")&&e.installed))[0];const i=o.registry+"/"+o.name+":"+o.tag;t.mounts=[this.explorer.id],t.cpu=1,t.mem=this.minimumResource.mem+"g",t.domain=globalThis.backendaiclient._config.domainName,t.group_name=globalThis.backendaiclient.current_group;let r=await this.indicator.start("indeterminate");return globalThis.backendaiclient.get_resource_slots().then((e=>(r.set(200,get("data.explorer.ExecutingFileBrowser")),globalThis.backendaiclient.createIfNotExists(i,null,t,1e4)))).then((async t=>{let o=t.servicePorts;e={"session-uuid":t.sessionId,"session-name":t.sessionName,"access-key":"",runtime:"filebrowser"},o.length>0&&o.filter((e=>"filebrowser"===e.name)).length>0&&globalThis.appLauncher.showLauncher(e),this.shadowRoot.querySelector("#folder-explorer-dialog").open&&this.closeDialog("folder-explorer-dialog"),r.end(1e3)})).catch((e=>{this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e),r.end(1e3)}))}_openRenameFileDialog(e){const t=e.target.getAttribute("filename");this.renameFileDialog.querySelector("#old-file-name").textContent=t,this.renameFileDialog.filename=t,this.renameFileDialog.show()}_renameFile(e){const t=this.renameFileDialog.filename,o=this.explorer.breadcrumb.concat(t).join("/"),i=this.renameFileDialog.querySelector("#new-file-name"),r=i.value;if(i.reportValidity(),i.checkValidity()){globalThis.backendaiclient.vfolder.rename_file(o,r,this.explorer.id).then((e=>{this.notification.text=get("data.folders.FileRenamed"),this.notification.show(),this._clearExplorer(),this.renameFileDialog.hide()})).catch((e=>{console.error(e),e&&e.message&&(this.notification.text=e.title,this.notification.detail=e.message,this.notification.show(!0,e))}))}}_openDeleteFileDialog(e){let t=e.target.getAttribute("filename");this.deleteFileDialog.filename=t,this.deleteFileDialog.files=[],this.deleteFileDialog.show()}_openDeleteMultipleFileDialog(e){this.deleteFileDialog.files=this.fileListGrid.selectedItems,this.deleteFileDialog.filename="",this.deleteFileDialog.show()}_deleteFileWithCheck(e){let t=this.deleteFileDialog.files;if(t.length>0){let e=[];t.forEach((t=>{let o=this.explorer.breadcrumb.concat(t.filename).join("/");e.push(o)})),globalThis.backendaiclient.vfolder.delete_files(e,!0,this.explorer.id).then((e=>{this.notification.text=get("data.folders.MultipleFilesDeleted"),this.notification.show(),this._clearExplorer(),this.deleteFileDialog.hide()}))}else if(""!=this.deleteFileDialog.filename){let e=this.explorer.breadcrumb.concat(this.deleteFileDialog.filename).join("/");globalThis.backendaiclient.vfolder.delete_files([e],!0,this.explorer.id).then((e=>{this.notification.text=get("data.folders.FileDeleted"),this.notification.show(),this._clearExplorer(),this.deleteFileDialog.hide()}))}}_deleteFile(e){let t=e.target.getAttribute("filename"),o=this.explorer.breadcrumb.concat(t).join("/");globalThis.backendaiclient.vfolder.delete_files([o],!0,this.explorer.id).then((e=>{this.notification.text=get("data.folders.FileDeleted"),this.notification.show(),this._clearExplorer()}))}_isResourceEnough(){let e=new CustomEvent("backend-ai-calculate-current-resource");document.dispatchEvent(e);let t=globalThis.backendaioptions.get("current-resource");return!!(t&&(t.cpu="string"==typeof t.cpu?parseInt(t.cpu):t.cpu,t.cpu>=this.minimumResource.cpu&&t.mem>=this.minimumResource.mem))}_humanReadableTime(e){const t=new Date(1e3*e),o=t.getTimezoneOffset()/60,i=t.getHours();return t.setHours(i-o),t.toUTCString()}_isDownloadable(e){return!0}_initializeSharingFolderDialogLayout(){let e=this.shadowRoot.querySelectorAll("#share-folder-dialog mwc-textfield.share-email");e.length>1&&Array.prototype.forEach.call(e,((e,t)=>{"first-email"!==e.id&&e.parentNode.removeChild(e)}))}_shareFolderDialog(e){this.selectedFolder=this._getControlId(e),this._initializeSharingFolderDialogLayout(),this.openDialog("share-folder-dialog")}_modifyPermissionDialog(e){globalThis.backendaiclient.vfolder.list_invitees(e).then((e=>{this.invitees=e.shared,this.openDialog("modify-permission-dialog")}))}_shareFolder(e){const t=this.shadowRoot.querySelectorAll("mwc-textfield.share-email"),o=Array.prototype.filter.call(t,(e=>e.isUiValid&&""!==e.value)).map((e=>e.value.trim())),i="r"+(this.shadowRoot.querySelector("#share-folder-write").checked?"w":"o");if(0!==o.length)globalThis.backendaiclient.vfolder.invite(i,o,this.selectedFolder).then((e=>{let o;o=e.invited_ids&&e.invited_ids.length>0?get("data.invitation.Invited"):get("data.invitation.NoOneWasInvited"),this.notification.text=o,this.notification.show(),this.shadowRoot.querySelector("#share-folder-dialog").hide();for(let e=t.length-1;e>0;e--){const o=t[e];o.parentElement.removeChild(o)}})).catch((e=>{this.notification.text=get("data.invitation.InvitationError"),e&&e.message&&(this.notification.detail=e.message),this.notification.show(!0,e)}));else{this.notification.text=get("data.invitation.NoValidEmails"),this.notification.show(),this.shadowRoot.querySelector("#share-folder-dialog").hide();for(let e of t)e.value=""}}_validatePathName(){let e=this.shadowRoot.querySelector("#mkdir-name");e.validityTransform=(t,o)=>{if(o.valid){let t=/^([^`~!@#$%^&*()|+=?;:'",<>\{\}\[\]\r\n\/]{1,})+(\/[^`~!@#$%^&*()|+=?;:'",<>\{\}\[\]\r\n\/]{1,})*([\/,\\]{0,1})$/gm.test(e.value);return t&&"./"!==e.value||(e.validationMessage=get("data.explorer.ValueShouldBeStarted"),t=!1),{valid:t,customError:!t}}return o.valueMissing?(e.validationMessage=get("data.explorer.ValueRequired"),{valid:o.valid,customError:!o.valid}):{valid:o.valid,customError:!o.valid}}}};__decorate([property({type:Number})],BackendAiStorageList.prototype,"_APIMajorVersion",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"storageType",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"folders",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"folderInfo",void 0),__decorate([property({type:Boolean})],BackendAiStorageList.prototype,"is_admin",void 0),__decorate([property({type:Boolean})],BackendAiStorageList.prototype,"authenticated",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"renameFolderId",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"deleteFolderId",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"explorer",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"explorerFiles",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"existingFile",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"invitees",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"selectedFolder",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"downloadURL",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"uploadFiles",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"fileUploadQueue",void 0),__decorate([property({type:Number})],BackendAiStorageList.prototype,"fileUploadCount",void 0),__decorate([property({type:Number})],BackendAiStorageList.prototype,"concurrentFileUploadLimit",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"vhost",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"vhosts",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"allowedGroups",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"fileListGrid",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"indicator",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"notification",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"renameFileDialog",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"deleteFileDialog",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"downloadFileDialog",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"sessionLauncher",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"spinner",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"allowed_folder_type",void 0),__decorate([property({type:Boolean})],BackendAiStorageList.prototype,"uploadFilesExist",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundIndexRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundTypeRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundControlFolderListRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundControlFileListRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundPermissionViewRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundOwnerRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundFileNameRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundCreatedTimeRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundPermissionRenderer",void 0),__decorate([property({type:Boolean})],BackendAiStorageList.prototype,"_uploadFlag",void 0),__decorate([property({type:Boolean})],BackendAiStorageList.prototype,"isWritable",void 0),__decorate([property({type:Number})],BackendAiStorageList.prototype,"_maxFileUploadSize",void 0),__decorate([property({type:Number})],BackendAiStorageList.prototype,"minimumResource",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"filebrowserSupportedImages",void 0),BackendAiStorageList=__decorate([customElement("backend-ai-storage-list")],BackendAiStorageList);let BackendAIData=class extends BackendAIPage{constructor(){super(),this.apiMajorVersion="",this.folders=Object(),this.folderInfo=Object(),this.is_admin=!1,this.authenticated=!1,this.deleteFolderId="",this.vhost="",this.vhosts=[],this.usageModes=["General","Data","Model"],this.permissions=["Read-Write","Read-Only","Delete"],this.allowedGroups=[],this.allowed_folder_type=[],this.notification=Object(),this.spinner=Object(),this.folderLists=Object(),this._status="inactive",this.active=!0,this._lists=Object(),this._vfolderInnatePermissionSupport=!1,this.storageInfo=Object(),this._helpDescription="",this._helpDescriptionTitle="",this._helpDescriptionIcon=""}static get styles(){return[BackendAiStyles,IronFlex,IronFlexAlignment,IronPositioning,css`
        ul {
          padding-left: 0;
        }

        ul li {
          list-style: none;
          font-size: 13px;
        }

        span.indicator {
          width: 100px;
          font-size: 10px;
        }

        .folder-action-buttons wl-button {
          margin-right: 10px;
        }

        wl-button > wl-icon {
          --icon-size: 24px;
          padding: 0;
        }

        wl-icon {
          --icon-size: 16px;
          padding: 0;
        }

        wl-button.button {
          width: 350px;
        }

        wl-card.item {
          height: calc(100vh - 145px) !important;
        }

        .tab-content {
          border: 0;
          font-size: 14px;
        }

        mwc-textfield {
          width: 100%;
          --mdc-theme-primary: #242424;
          --mdc-text-field-fill-color: transparent;
        }

        mwc-textfield.red {
          --mdc-theme-primary: var(--paper-red-400) !important;
        }

        h3.tab {
          background-color: var(--general-tabbar-background-color);
          border-radius: 5px 5px 0px 0px;
          margin: 0px auto;
        }

        mwc-tab-bar {
          --mdc-theme-primary: var(--general-sidebar-selected-color);
          --mdc-text-transform: none;
          --mdc-tab-color-default: var(--general-tabbar-background-color);
          --mdc-tab-text-label-color-default: var(--general-tabbar-tab-disabled-color);
        }

        wl-tab-group {
          --tab-group-indicator-bg: var(--paper-orange-500);
        }

        wl-tab {
          --tab-color: #666666;
          --tab-color-hover: #222222;
          --tab-color-hover-filled: #222222;
          --tab-color-active: #222222;
          --tab-color-active-hover: #222222;
          --tab-color-active-filled: #cccccc;
          --tab-bg-active: var(--paper-orange-50);
          --tab-bg-filled: var(--paper-orange-50);
          --tab-bg-active-hover: var(--paper-orange-100);
        }

        wl-button {
          --button-bg: var(--paper-orange-50);
          --button-bg-hover: var(--paper-orange-100);
          --button-bg-active: var(--paper-orange-600);
          color: var(--paper-orange-900);
        }

        #add-folder-dialog {
          --component-width: 400px;
        }

        backend-ai-dialog wl-textfield,
        backend-ai-dialog wl-select {
          --input-font-family: Roboto, Noto, sans-serif;
          --input-color-disabled: #222222;
          --input-label-color-disabled: #222222;
          --input-label-font-size: 12px;
          --input-border-style-disabled: 1px solid #cccccc;
        }

        #help-description {
          --component-width: 350px;
        }

        #textfields wl-textfield,
        wl-label {
          margin-bottom: 20px;
        }

        wl-label {
          --label-font-family: Roboto, Noto, sans-serif;
          --label-color: black;
        }

        mwc-multi-select {
          width: 180px;
          --mdc-select-min-width: 180px;
          margin-bottom: 10px;
          --mdc-theme-primary: var(--general-textfield-selected-color);
          --mdc-select-fill-color: transparent;
          --mdc-select-label-ink-color: rgba(0, 0, 0, 0.75);
          --mdc-select-dropdown-icon-color: var(--general-textfield-selected-color);
          --mdc-select-hover-line-color: var(--general-textfield-selected-color);
          --mdc-list-vertical-padding: 5px;
        }

        #help-description {
          --dialog-width: 350px;
        }

        #help-description p {
          padding: 5px !important;
        }

        mwc-multi-select mwc-icon-button {
          --mdc-icon-button-size: 24px;
          color: var(--general-textfield-selected-color);
        }

        #automount-folder-lists > div {
          background-color: white;
          color: var(--general-textfield-selected-color);
          border-bottom:0.5px solid var(--general-textfield-selected-color);
        }

        #automount-folder-lists > div > p {
          color: var(--general-sidebar-color);
          margin-left: 10px;
        }

        @media screen and (max-width: 750px) {
          mwc-tab {
            --mdc-typography-button-font-size: 10px;
          }

          mwc-button > span {
            display: none;
          }
        }

        .storage-status-indicator {
          width: 90px;
          color: black;
        }

        div.big {
          font-size: 72px;
        }

        .storage-chart-wrapper {
          margin: 20px 50px 0px 50px;
        }

      `]}render(){return html$1`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <div class="vertical layout" style="margin:20px;">
        <lablup-activity-panel elevation="1" narrow title=${translate("data.StorageStatus")} autowidth>
          <div slot="message">
            <div class="horizontal layout wrap flex center center-justified">
              <div class="storage-chart-wrapper">
                <chart-js id="storage-status" type="doughnut" .data="${this.folders}" .options="${this.options}" height="250" width="250"></chart-js>
              </div>
              <div class="horizontal layout justified">
                <div class="vertical layout center storage-status-indicator">
                  <div class="big">${this.createdCount}</div>
                  <span>${translate("data.Created")}</span>
                </div>
                <div class="vertical layout center storage-status-indicator">
                  <div class="big">${this.invitedCount}</div>
                  <span>${translate("data.Invited")}</span>
                </div>
                <div class="vertical layout center storage-status-indicator">
                  <div class="big">${this.capacity}</div>
                  <span>${translate("data.Capacity")}</span>
                </div>
              </div>
            </div>
          </div>
        </lablup-activity-panel>
        <lablup-activity-panel elevation="1" noheader narrow autowidth>
          <div slot="message">
            <h3 class="horizontal center flex layout tab">
              <mwc-tab-bar>
                <mwc-tab title="general-folder" label="${translate("data.Folders")}"
                    @click="${e=>this._showTab(e.target)}">
                </mwc-tab>
                <mwc-tab title="automount-folder" label="${translate("data.AutomountFolders")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
              </mwc-tab-bar>
              <span class="flex"></span>
              <mwc-button dense raised id="add-folder" icon="add" @click="${()=>this._addFolderDialog()}" style="margin-right:15px;">
                <span>${translate("data.NewFolder")}</span>
              </mwc-button>
            </h3>
            <div id="general-folder-lists" class="tab-content">
              <backend-ai-storage-list id="general-folder-storage" storageType="general" ?active="${!0===this.active}"></backend-ai-storage-list>
            </div>
            <div id="automount-folder-lists" class="tab-content" style="display:none;">
              <div class="horizontal layout">
                <p>${translate("data.DialogFolderStartingWithDotAutomount")}</p>
              </div>
              <backend-ai-storage-list id="automount-folder-storage" storageType="automount" ?active="${!0===this.active}"></backend-ai-storage-list>
            </div>
          </div>
        </lablup-activity-panel>
      </div>
      <backend-ai-dialog id="add-folder-dialog" fixed backdrop>
        <span slot="title">${translate("data.CreateANewStorageFolder")}</span>
        <div slot="content">
          <mwc-textfield id="add-folder-name" label="${translate("data.Foldername")}"
          @change="${()=>this._validateFolderName()}" pattern="^[a-zA-Z0-9\._-]*$"
            required validationMessage="${translate("data.Allowslettersnumbersand-_dot")}" maxLength="64"
            placeholder="${translate("maxLength.64chars")}"></mwc-textfield>
          <div class="horizontal layout">
            <mwc-multi-select id="add-folder-host" label="${translate("data.Host")}">
              ${this.vhosts.map(((e,t)=>html$1`
                <mwc-list-item hasMeta value="${e}" ?selected="${0===t}">
                  <span>${e}</span>
                  <mwc-icon-button slot="meta" icon="info"
                      @click="${t=>this._showStorageDescription(t,e)}">
                  </mwc-icon-button>
                </mwc-list-item>
              `))}
            </mwc-multi-select>
            <mwc-multi-select id="add-folder-type" label="${translate("data.Type")}">
              ${this.allowed_folder_type.includes("user")?html$1`
                <mwc-list-item value="user" selected>${translate("data.User")}</mwc-list-item>
              `:html$1``}
              ${this.is_admin&&this.allowed_folder_type.includes("group")?html$1`
                <mwc-list-item value="group" ?selected="${!this.allowed_folder_type.includes("user")}">${translate("data.Group")}</mwc-list-item>
              `:html$1``}
            </mwc-multi-select>
          </div>
          ${this._vfolderInnatePermissionSupport?html$1`
            <div class="horizontal layout">
              <mwc-multi-select id="add-folder-usage-mode" label="${translate("data.UsageMode")}">
                ${this.usageModes.map(((e,t)=>html$1`
                  <mwc-list-item value="${e}" ?selected="${0===t}">${e}</mwc-list-item>
                `))}
              </mwc-multi-select>
              <mwc-multi-select id="add-folder-permission" label="${translate("data.Type")}">
                ${this.permissions.map(((e,t)=>html$1`
                  <mwc-list-item value="${e}" ?selected="${0===t}">${e}</mwc-list-item>
                `))}
              </mwc-multi-select>
            </div>
          `:html$1``}
          ${this.is_admin&&this.allowed_folder_type.includes("group")?html$1`
            <div class="horizontal layout">
              <mwc-multi-select id="add-folder-group" label="${translate("data.Group")}">
                ${this.allowedGroups.map(((e,t)=>html$1`
                  <mwc-list-item value="${e.name}" ?selected="${0===t}">${e.name}</mwc-list-item>
                `))}
              </mwc-multi-select>
            </div>
          `:html$1``}
          <div style="font-size:11px;">
            ${translate("data.DialogFolderStartingWithDotAutomount")}
          </div>
        </div>
        <div slot="footer" class="horizontal flex">
          <mwc-button
              unelevated
              id="add-button"
              icon="rowing"
              label="${translate("data.Create")}"
              style="width:100%;"
              @click="${()=>this._addFolder()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="help-description" fixed backdrop>
        <span slot="title">${this._helpDescriptionTitle}</span>
        <div slot="content" class="horizontal layout center">
        ${""==this._helpDescriptionIcon?html$1``:html$1`
          <img slot="graphic" src="resources/icons/${this._helpDescriptionIcon}" style="width:64px;height:64px;margin-right:10px;" />
          `}
          <p style="font-size:14px;width:256px;">${unsafeHTML(this._helpDescription)}</p>
        </div>
      </backend-ai-dialog>
    `}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification,this.folderLists=this.shadowRoot.querySelectorAll("backend-ai-storage-list"),fetch("resources/storage_metadata.json").then((e=>e.json())).then((e=>{let t=Object();for(let o in e.storageInfo)t[o]={},"name"in e.storageInfo[o]&&(t[o].name=e.storageInfo[o].name),"description"in e.storageInfo[o]?t[o].description=e.storageInfo[o].description:t[o].description=get("data.NoStorageDescriptionFound"),"icon"in e.storageInfo[o]?t[o].icon=e.storageInfo[o].icon:t[o].icon="local.png","dialects"in e.storageInfo[o]&&e.storageInfo[o].dialects.forEach((e=>{t[e]=t[o]}));this.storageInfo=t})),this.options={responsive:!0,maintainAspectRatio:!0,legend:{display:!0,position:"bottom",align:"center",labels:{fontSize:20,boxWidth:10}}},document.addEventListener("backend-ai-folder-list-changed",(()=>{this._createStorageChart()}))}async _viewStateChanged(e){if(await this.updateComplete,!1===e)return;const t=()=>{this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this.apiMajorVersion=globalThis.backendaiclient.APIMajorVersion,globalThis.backendaiclient.isAPIVersionCompatibleWith("v4.20191215")&&(this._vfolderInnatePermissionSupport=!0),globalThis.backendaiclient.vfolder.list_allowed_types().then((e=>{this.allowed_folder_type=e}))};void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{t(),this._createStorageChart()}),!0):(t(),this._createStorageChart())}async _createStorageChart(){let e=globalThis.backendaiclient._config.accessKey,t=(await globalThis.backendaiclient.keypair.info(e,["resource_policy"])).keypair.resource_policy,o=(await globalThis.backendaiclient.resourcePolicy.get(t,["max_vfolder_count"])).keypair_resource_policy.max_vfolder_count,i=globalThis.backendaiclient.current_group_id(),r=await globalThis.backendaiclient.vfolder.list(i);this.createdCount=r.filter((e=>e.is_owner)).length,this.invitedCount=r.length-this.createdCount,this.capacity=this.createdCount<o?o-this.createdCount:0,this.totalCount=this.capacity+this.createdCount+this.invitedCount,this.folders={labels:[get("data.Created"),get("data.Invited"),get("data.Capacity")],datasets:[{data:[this.createdCount,this.invitedCount,this.capacity],backgroundColor:["#722cd7","#60bb43","#efefef"]}]}}_showTab(e){let t=this.shadowRoot.querySelectorAll(".tab-content");for(let e=0;e<t.length;e++)t[e].style.display="none";this.shadowRoot.querySelector("#"+e.title+"-lists").style.display="block";for(let e=0;e<this._lists.length;e++)this._lists[e].removeAttribute("active");this.shadowRoot.querySelector("#"+e.title+"-storage").setAttribute("active",!0)}async _addFolderDialog(){let e=await globalThis.backendaiclient.vfolder.list_hosts();if(this.shadowRoot.querySelector("#add-folder-name").value="",this.vhosts=e.allowed,this.vhost=e.default,this.allowed_folder_type.includes("group")){const e=await globalThis.backendaiclient.group.list();this.allowedGroups=e.groups}this.openDialog("add-folder-dialog")}openDialog(e){this.shadowRoot.querySelector("#"+e).show()}closeDialog(e){this.shadowRoot.querySelector("#"+e).hide()}_showStorageDescription(e,t){e.stopPropagation(),t in this.storageInfo?(this._helpDescriptionTitle=this.storageInfo[t].name,this._helpDescription=this.storageInfo[t].description,this._helpDescriptionIcon=this.storageInfo[t].icon):(this._helpDescriptionTitle=t,this._helpDescriptionIcon="local.png",this._helpDescription=get("data.NoStorageDescriptionFound")),this.shadowRoot.querySelector("#help-description").show()}_indexFrom1(e){return e+1}_addFolder(){let e,t=this.shadowRoot.querySelector("#add-folder-name"),o=t.value,i=this.shadowRoot.querySelector("#add-folder-host").value,r=this.shadowRoot.querySelector("#add-folder-type").value;const a=this.shadowRoot.querySelector("#add-folder-usage-mode"),n=this.shadowRoot.querySelector("#add-folder-permission");let l="",s="";if(!1===["user","group"].includes(r)&&(r="user"),e="user"===r?"":this.is_admin?this.shadowRoot.querySelector("#add-folder-group").value:globalThis.backendaiclient.current_group,a&&(l=a.value,l=l.toLowerCase()),n)switch(s=n.value,s){case"Read-Write":s="rw";break;case"Read-Only":s="ro";break;case"Delete":s="wd";break;default:s="rw"}if(t.reportValidity(),t.checkValidity()){globalThis.backendaiclient.vfolder.create(o,i,e,l,s).then((e=>{this.notification.text=get("data.folders.FolderCreated"),this.notification.show(),this._refreshFolderList()})).catch((e=>{e&&e.message&&(this.notification.text=BackendAIPainKiller.relieve(e.message),this.notification.detail=e.message,this.notification.show(!0,e))})),this.closeDialog("add-folder-dialog")}}_validateFolderName(){const e=this.shadowRoot.querySelector("#add-folder-name");e.validityTransform=(t,o)=>{if(o.valid){let t=!/[`~!@#$%^&*()|+=?;:'",<>\{\}\[\]\\\/\s]/gi.test(e.value);return t||(e.validationMessage=get("data.Allowslettersnumbersand-_dot")),e.value.length>64&&(t=!1,e.validationMessage=get("data.FolderNameTooLong")),{valid:t,customError:!t}}return o.valueMissing?(e.validationMessage=get("data.FolderNameRequired"),{valid:o.valid,customError:!o.valid}):(e.validationMessage=get("data.Allowslettersnumbersand-_dot"),{valid:o.valid,customError:!o.valid})}}_refreshFolderList(){for(const e of this.folderLists)e.refreshFolderList()}};__decorate([property({type:String})],BackendAIData.prototype,"apiMajorVersion",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"folders",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"folderInfo",void 0),__decorate([property({type:Boolean})],BackendAIData.prototype,"is_admin",void 0),__decorate([property({type:Boolean})],BackendAIData.prototype,"authenticated",void 0),__decorate([property({type:String})],BackendAIData.prototype,"deleteFolderId",void 0),__decorate([property({type:String})],BackendAIData.prototype,"vhost",void 0),__decorate([property({type:Array})],BackendAIData.prototype,"vhosts",void 0),__decorate([property({type:Array})],BackendAIData.prototype,"usageModes",void 0),__decorate([property({type:Array})],BackendAIData.prototype,"permissions",void 0),__decorate([property({type:Array})],BackendAIData.prototype,"allowedGroups",void 0),__decorate([property({type:Array})],BackendAIData.prototype,"allowed_folder_type",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"notification",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"spinner",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"folderLists",void 0),__decorate([property({type:String})],BackendAIData.prototype,"_status",void 0),__decorate([property({type:Boolean})],BackendAIData.prototype,"active",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"_lists",void 0),__decorate([property({type:Boolean})],BackendAIData.prototype,"_vfolderInnatePermissionSupport",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"storageInfo",void 0),__decorate([property({type:String})],BackendAIData.prototype,"_helpDescription",void 0),__decorate([property({type:String})],BackendAIData.prototype,"_helpDescriptionTitle",void 0),__decorate([property({type:String})],BackendAIData.prototype,"_helpDescriptionIcon",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"options",void 0),__decorate([property({type:Number})],BackendAIData.prototype,"createdCount",void 0),__decorate([property({type:Number})],BackendAIData.prototype,"invitedCount",void 0),__decorate([property({type:Number})],BackendAIData.prototype,"totalCount",void 0),__decorate([property({type:Number})],BackendAIData.prototype,"capacity",void 0),BackendAIData=__decorate([customElement("backend-ai-data-view")],BackendAIData);var BackendAIData$1=BackendAIData;export default BackendAIData$1;
