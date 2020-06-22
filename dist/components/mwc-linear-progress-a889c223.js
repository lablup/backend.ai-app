import{k as r,m as e,M as t,_ as i,q as a,p as s,o as n,n as o,h as m,r as c,b as d,c as l}from"./backend-ai-console-1b71da62.js";
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
 */var p={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},f={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function u(r){return Boolean(r.document)&&"function"==typeof r.document.createElement}function g(r,e){if(u(r)&&e in p){var t=r.document.createElement("div"),i=p[e],a=i.standard,s=i.prefixed;return a in t.style?a:s}return e}function b(r,e){if(u(r)&&e in f){var t=r.document.createElement("div"),i=f[e],a=i.standard,s=i.prefixed;return i.cssProperty in t.style?a:s}return e}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var _={CLOSED_CLASS:"mdc-linear-progress--closed",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed"},y={ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},v=function(t){function i(r){return t.call(this,e(e({},i.defaultAdapter),r))||this}return r(i,t),Object.defineProperty(i,"cssClasses",{get:function(){return _},enumerable:!0,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return y},enumerable:!0,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},hasClass:function(){return!1},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!0,configurable:!0}),i.prototype.init=function(){this.isDeterminate_=!this.adapter_.hasClass(_.INDETERMINATE_CLASS),this.isReversed_=this.adapter_.hasClass(_.REVERSED_CLASS),this.progress_=0,this.buffer_=1},i.prototype.setDeterminate=function(r){if(this.isDeterminate_=r,this.isDeterminate_)return this.adapter_.removeClass(_.INDETERMINATE_CLASS),this.adapter_.setAttribute(y.ARIA_VALUENOW,this.progress_.toString()),this.setPrimaryBarProgress_(this.progress_),void this.setBufferBarProgress_(this.buffer_);this.isReversed_&&(this.adapter_.removeClass(_.REVERSED_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(_.REVERSED_CLASS)),this.adapter_.addClass(_.INDETERMINATE_CLASS),this.adapter_.removeAttribute(y.ARIA_VALUENOW),this.setPrimaryBarProgress_(1),this.setBufferBarProgress_(1)},i.prototype.isDeterminate=function(){return this.isDeterminate_},i.prototype.setProgress=function(r){this.progress_=r,this.isDeterminate_&&(this.setPrimaryBarProgress_(r),this.adapter_.setAttribute(y.ARIA_VALUENOW,r.toString()))},i.prototype.getProgress=function(){return this.progress_},i.prototype.setBuffer=function(r){this.buffer_=r,this.isDeterminate_&&this.setBufferBarProgress_(r)},i.prototype.setReverse=function(r){this.isReversed_=r,this.isDeterminate_||(this.adapter_.removeClass(_.INDETERMINATE_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(_.INDETERMINATE_CLASS)),this.isReversed_?this.adapter_.addClass(_.REVERSED_CLASS):this.adapter_.removeClass(_.REVERSED_CLASS)},i.prototype.open=function(){this.adapter_.removeClass(_.CLOSED_CLASS)},i.prototype.close=function(){this.adapter_.addClass(_.CLOSED_CLASS)},i.prototype.setPrimaryBarProgress_=function(r){var e="scaleX("+r+")",t="undefined"!=typeof window?g(window,"transform"):"transform";this.adapter_.setPrimaryBarStyle(t,e)},i.prototype.setBufferBarProgress_=function(r){var e=100*r+"%";this.adapter_.setBufferBarStyle(y.FLEX_BASIS,e)},i}(t);class h extends o{constructor(){super(...arguments),this.mdcFoundationClass=v,this.indeterminate=!1,this.progress=0,this.buffer=1,this.reverse=!1,this.closed=!1,this.ariaLabel=""}render(){return m`
      <div role="progressbar"
        class="mdc-linear-progress"
        aria-label="${this.ariaLabel}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="0">
        <div class="mdc-linear-progress__buffer">
          <div class="mdc-linear-progress__buffer-bar"></div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`}createAdapter(){return Object.assign(Object.assign({},c(this.mdcRoot)),{forceLayout:()=>this.mdcRoot.offsetWidth,removeAttribute:r=>{this.mdcRoot.removeAttribute(r)},setAttribute:(r,e)=>{this.mdcRoot.setAttribute(r,e)},setBufferBarStyle:(r,e)=>{this.bufferElement.style[r]=e},setPrimaryBarStyle:(r,e)=>{this.primaryBar.style[r]=e}})}open(){this.closed=!1}close(){this.closed=!0}}i([a(".mdc-linear-progress")],h.prototype,"mdcRoot",void 0),i([a(".mdc-linear-progress__primary-bar")],h.prototype,"primaryBar",void 0),i([a(".mdc-linear-progress__buffer-bar")],h.prototype,"bufferElement",void 0),i([s({type:Boolean,reflect:!0}),n((function(r){this.mdcFoundation.setDeterminate(!r)}))],h.prototype,"indeterminate",void 0),i([s({type:Number}),n((function(r){this.mdcFoundation.setProgress(r)}))],h.prototype,"progress",void 0),i([s({type:Number}),n((function(r){this.mdcFoundation.setBuffer(r)}))],h.prototype,"buffer",void 0),i([s({type:Boolean,reflect:!0}),n((function(r){this.mdcFoundation.setReverse(r)}))],h.prototype,"reverse",void 0),i([s({type:Boolean,reflect:!0}),n((function(r){r?this.mdcFoundation.close():this.mdcFoundation.open()}))],h.prototype,"closed",void 0),i([s()],h.prototype,"ariaLabel",void 0);
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
const E=d`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{visibility:hidden}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%;animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;visibility:visible;animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--reversed .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;order:0;transform:rotate(0)}.mdc-linear-progress--reversed .mdc-linear-progress__buffer-bar{order:1}.mdc-linear-progress--closed{opacity:0;animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}:host{display:block}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6;background-color:var(--mdc-linear-progress-buffer-color, #e6e6e6)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}`;let x=class extends h{};x.styles=E,x=i([l("mwc-linear-progress")],x);export{b as a,g};
