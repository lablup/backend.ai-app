import{a1 as t,a2 as e,a3 as n,_ as o,Q as i,p as r,ad as d,h as a,a as s,c as l,a4 as c}from"./backend-ai-console-e6443854.js";import"./form-element-cd33b7f7.js";
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
 */var h={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},p={NOTCH_ELEMENT_PADDING:8},u={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},m=function(n){function o(t){return n.call(this,e({},o.defaultAdapter,t))||this}return t(o,n),Object.defineProperty(o,"strings",{get:function(){return h},enumerable:!0,configurable:!0}),Object.defineProperty(o,"cssClasses",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!0,configurable:!0}),o.prototype.notch=function(t){var e=o.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=p.NOTCH_ELEMENT_PADDING),this.adapter_.setNotchWidthProperty(t),this.adapter_.addClass(e)},o.prototype.closeNotch=function(){var t=o.cssClasses.OUTLINE_NOTCHED;this.adapter_.removeClass(t),this.adapter_.removeNotchWidthProperty()},o}(n);class _ extends d{constructor(){super(...arguments),this.mdcFoundationClass=m,this.width=0,this.open=!1,this.lastOpen=this.open}createAdapter(){return{addClass:t=>this.mdcRoot.classList.add(t),removeClass:t=>this.mdcRoot.classList.remove(t),setNotchWidthProperty:t=>this.notchElement.style.setProperty("width",`${t}px`),removeNotchWidthProperty:()=>this.notchElement.style.removeProperty("width")}}openOrClose(t,e){this.mdcFoundation&&(t&&void 0!==e?this.mdcFoundation.notch(e):this.mdcFoundation.closeNotch())}render(){return this.openOrClose(this.open,this.width),a`
      <div class="mdc-notched-outline">
        <div class="mdc-notched-outline__leading"></div>
        <div class="mdc-notched-outline__notch">
          <slot></slot>
        </div>
        <div class="mdc-notched-outline__trailing"></div>
      </div>`}}o([i(".mdc-notched-outline")],_.prototype,"mdcRoot",void 0),o([r({type:Number})],_.prototype,"width",void 0),o([r({type:Boolean,reflect:!0})],_.prototype,"open",void 0),o([i(".mdc-notched-outline__notch")],_.prototype,"notchElement",void 0);
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
const f=s`.mdc-notched-outline{display:flex;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / .75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host[dir=rtl]{text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / .75)}.mdc-notched-outline__leading{width:12px;width:var(--mdc-notched-outline-leading-width, 12px);border-radius:4px 0 0 4px;border-radius:var(--mdc-notched-outline-leading-border-radius, 4px 0 0 4px)}.mdc-notched-outline__trailing{border-radius:0 4px 4px 0;border-radius:var(--mdc-notched-outline-trailing-border-radius, 0 4px 4px 0)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}`;let g=class extends _{};g.styles=f,g=o([l("mwc-notched-outline")],g);
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
var b={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},v=function(n){function o(t){var i=n.call(this,e({},o.defaultAdapter,t))||this;return i.shakeAnimationEndHandler_=function(){return i.handleShakeAnimationEnd_()},i}return t(o,n),Object.defineProperty(o,"cssClasses",{get:function(){return b},enumerable:!0,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),o.prototype.init=function(){this.adapter_.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)},o.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)},o.prototype.getWidth=function(){return this.adapter_.getWidth()},o.prototype.shake=function(t){var e=o.cssClasses.LABEL_SHAKE;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},o.prototype.float=function(t){var e=o.cssClasses,n=e.LABEL_FLOAT_ABOVE,i=e.LABEL_SHAKE;t?this.adapter_.addClass(n):(this.adapter_.removeClass(n),this.adapter_.removeClass(i))},o.prototype.handleShakeAnimationEnd_=function(){var t=o.cssClasses.LABEL_SHAKE;this.adapter_.removeClass(t)},o}(n);
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
 */const E=new WeakMap,C=c(t=>e=>{const n=E.get(e);if(n){if(n.label!==t){const t=e.committer.element,n=new Event("labelchange");t.dispatchEvent(n)}}else{const n=e.committer.element;n.classList.add("mdc-floating-label");const o=(t=>({addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),getWidth:()=>t.scrollWidth,registerInteractionHandler:(e,n)=>{t.addEventListener(e,n)},deregisterInteractionHandler:(e,n)=>{t.removeEventListener(e,n)}}))(n),i=new v(o);i.init(),e.setValue(i),E.set(e,{label:t,foundation:i})}});
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
var y={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},L=function(n){function o(t){var i=n.call(this,e({},o.defaultAdapter,t))||this;return i.transitionEndHandler_=function(t){return i.handleTransitionEnd(t)},i}return t(o,n),Object.defineProperty(o,"cssClasses",{get:function(){return y},enumerable:!0,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!0,configurable:!0}),o.prototype.init=function(){this.adapter_.registerEventHandler("transitionend",this.transitionEndHandler_)},o.prototype.destroy=function(){this.adapter_.deregisterEventHandler("transitionend",this.transitionEndHandler_)},o.prototype.activate=function(){this.adapter_.removeClass(y.LINE_RIPPLE_DEACTIVATING),this.adapter_.addClass(y.LINE_RIPPLE_ACTIVE)},o.prototype.setRippleCenter=function(t){this.adapter_.setStyle("transform-origin",t+"px center")},o.prototype.deactivate=function(){this.adapter_.addClass(y.LINE_RIPPLE_DEACTIVATING)},o.prototype.handleTransitionEnd=function(t){var e=this.adapter_.hasClass(y.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&e&&(this.adapter_.removeClass(y.LINE_RIPPLE_ACTIVE),this.adapter_.removeClass(y.LINE_RIPPLE_DEACTIVATING))},o}(n);
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
 */const x=new WeakMap,A=c(()=>t=>{if(!x.get(t)){const e=t.committer.element;e.classList.add("mdc-line-ripple");const n=(t=>({addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),hasClass:e=>t.classList.contains(e),setStyle:(e,n)=>t.style.setProperty(e,n),registerEventHandler:(e,n)=>{t.addEventListener(e,n)},deregisterEventHandler:(e,n)=>{t.removeEventListener(e,n)}}))(e),o=new L(n);o.init(),t.setValue(o),x.set(t,o)}});export{C as f,A as l};
