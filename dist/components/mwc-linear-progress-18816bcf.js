import{i as e,j as r,M as t,_ as i,q as a,p as n,o as s,k as o,h as c,l as m,b as d,c as l}from"./backend-ai-console-7b9ac755.js";
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
 */var p={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},f={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function g(e){return Boolean(e.document)&&"function"==typeof e.document.createElement}function u(e,r){if(g(e)&&r in p){var t=e.document.createElement("div"),i=p[r],a=i.standard,n=i.prefixed;return a in t.style?a:n}return r}function b(e,r){if(g(e)&&r in f){var t=e.document.createElement("div"),i=f[r],a=i.standard,n=i.prefixed;return i.cssProperty in t.style?a:n}return r}
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
 */var _={CLOSED_CLASS:"mdc-linear-progress--closed",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed"},h={ARIA_VALUENOW:"aria-valuenow",BUFFER_SELECTOR:".mdc-linear-progress__buffer",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},y=function(t){function i(e){return t.call(this,r({},i.defaultAdapter,e))||this}return e(i,t),Object.defineProperty(i,"cssClasses",{get:function(){return _},enumerable:!0,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return h},enumerable:!0,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},getBuffer:function(){return null},getPrimaryBar:function(){return null},hasClass:function(){return!1},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){},setStyle:function(){}}},enumerable:!0,configurable:!0}),i.prototype.init=function(){this.isDeterminate_=!this.adapter_.hasClass(_.INDETERMINATE_CLASS),this.isReversed_=this.adapter_.hasClass(_.REVERSED_CLASS),this.progress_=0,this.buffer_=1},i.prototype.setDeterminate=function(e){this.isDeterminate_=e,this.isDeterminate_?(this.adapter_.removeClass(_.INDETERMINATE_CLASS),this.adapter_.setAttribute(h.ARIA_VALUENOW,this.progress_.toString()),this.setScale_(this.adapter_.getPrimaryBar(),this.progress_),this.setScale_(this.adapter_.getBuffer(),this.buffer_)):(this.isReversed_&&(this.adapter_.removeClass(_.REVERSED_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(_.REVERSED_CLASS)),this.adapter_.addClass(_.INDETERMINATE_CLASS),this.adapter_.removeAttribute(h.ARIA_VALUENOW),this.setScale_(this.adapter_.getPrimaryBar(),1),this.setScale_(this.adapter_.getBuffer(),1))},i.prototype.setProgress=function(e){this.progress_=e,this.isDeterminate_&&(this.setScale_(this.adapter_.getPrimaryBar(),e),this.adapter_.setAttribute(h.ARIA_VALUENOW,e.toString()))},i.prototype.setBuffer=function(e){this.buffer_=e,this.isDeterminate_&&this.setScale_(this.adapter_.getBuffer(),e)},i.prototype.setReverse=function(e){this.isReversed_=e,this.isDeterminate_||(this.adapter_.removeClass(_.INDETERMINATE_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(_.INDETERMINATE_CLASS)),this.isReversed_?this.adapter_.addClass(_.REVERSED_CLASS):this.adapter_.removeClass(_.REVERSED_CLASS)},i.prototype.open=function(){this.adapter_.removeClass(_.CLOSED_CLASS)},i.prototype.close=function(){this.adapter_.addClass(_.CLOSED_CLASS)},i.prototype.setScale_=function(e,r){if(e){var t="scaleX("+r+")";this.adapter_.setStyle(e,u(window,"transform"),t)}},i}(t);class v extends o{constructor(){super(...arguments),this.mdcFoundationClass=y,this.indeterminate=!1,this.progress=0,this.buffer=1,this.reverse=!1,this.closed=!1,this.ariaLabel=""}render(){return c`
      <div role="progressbar"
        class="mdc-linear-progress"
        aria-label="${this.ariaLabel}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="0">
        <div class="mdc-linear-progress__buffering-dots"></div>
        <div class="mdc-linear-progress__buffer"></div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`}createAdapter(){return Object.assign(Object.assign({},m(this.mdcRoot)),{forceLayout:()=>this.mdcRoot.offsetWidth,getPrimaryBar:()=>this.primaryBar,getBuffer:()=>this.bufferElement,removeAttribute:e=>{this.mdcRoot.removeAttribute(e)},setAttribute:(e,r)=>{this.mdcRoot.setAttribute(e,r)},setStyle:(e,r,t)=>{e.style[r]=t}})}open(){this.closed=!1}close(){this.closed=!0}}i([a(".mdc-linear-progress")],v.prototype,"mdcRoot",void 0),i([a(".mdc-linear-progress__primary-bar")],v.prototype,"primaryBar",void 0),i([a(".mdc-linear-progress__buffer")],v.prototype,"bufferElement",void 0),i([n({type:Boolean,reflect:!0}),s((function(e){this.mdcFoundation.setDeterminate(!e)}))],v.prototype,"indeterminate",void 0),i([n({type:Number}),s((function(e){this.mdcFoundation.setProgress(e)}))],v.prototype,"progress",void 0),i([n({type:Number}),s((function(e){this.mdcFoundation.setBuffer(e)}))],v.prototype,"buffer",void 0),i([n({type:Boolean,reflect:!0}),s((function(e){this.mdcFoundation.setReverse(e)}))],v.prototype,"reverse",void 0),i([n({type:Boolean,reflect:!0}),s((function(e){e?this.mdcFoundation.close():this.mdcFoundation.open()}))],v.prototype,"closed",void 0),i([n()],v.prototype,"ariaLabel",void 0);
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
const E=d`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{to{transform:translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{to{transform:translateX(10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffering-dots{position:absolute;width:100%;height:100%;background-repeat:repeat-x;background-size:10px 4px;animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer{position:absolute;width:100%;height:100%;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{visibility:hidden}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%;animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;visibility:visible;animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--reversed .mdc-linear-progress__bar,.mdc-linear-progress--reversed .mdc-linear-progress__buffer{right:0;transform-origin:center right}.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__buffering-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear}.mdc-linear-progress--closed{opacity:0;animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffering-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer{background-color:#e6e6e6}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}:host{display:block}.mdc-linear-progress__buffer{background-color:#e6e6e6;background-color:var(--mdc-linear-progress-buffer-color, #e6e6e6)}.mdc-linear-progress__buffering-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}`;let x=class extends v{};x.styles=E,x=i([l("mwc-linear-progress")],x);export{b as a,u as g};
