import{M as t,_ as e,q as o,p as r,a2 as n,h as i,l as a,x as c,b as l,c as s,u as d,k as p,v as h,w as u,R as f,a3 as m}from"./backend-ai-webui-3ec8f434.js";
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
***************************************************************************** */var b=function(t,e){return(b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};function _(t,e){function o(){this.constructor=t}b(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}var g=function(){return(g=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},y={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},v={CONTENT_SELECTOR:".mdc-tab-indicator__content"},S=function(t){function e(o){return t.call(this,g(g({},e.defaultAdapter),o))||this}return _(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return y},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return v},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!0,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(t),A=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return _(e,t),e.prototype.activate=function(){this.adapter.addClass(S.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(S.cssClasses.ACTIVE)},e}(S),T=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return _(e,t),e.prototype.activate=function(t){if(t){var e=this.computeContentClientRect(),o=t.width/e.width,r=t.left-e.left;this.adapter.addClass(S.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+r+"px) scaleX("+o+")"),this.computeContentClientRect(),this.adapter.removeClass(S.cssClasses.NO_TRANSITION),this.adapter.addClass(S.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")}else this.adapter.addClass(S.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(S.cssClasses.ACTIVE)},e}(S);
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
 */class E extends n{constructor(){super(...arguments),this.icon="",this.fade=!1}get mdcFoundationClass(){return this.fade?A:T}render(){const t={"mdc-tab-indicator__content--icon":this.icon,"material-icons":this.icon,"mdc-tab-indicator__content--underline":!this.icon};return i`
      <span class="mdc-tab-indicator ${a({"mdc-tab-indicator--fade":this.fade})}">
        <span class="mdc-tab-indicator__content ${a(t)}">${this.icon}</span>
      </span>
      `}updated(t){t.has("fade")&&this.createFoundation()}createAdapter(){return Object.assign(Object.assign({},c(this.mdcRoot)),{computeContentClientRect:()=>this.contentElement.getBoundingClientRect(),setContentStyleProperty:(t,e)=>this.contentElement.style.setProperty(t,e)})}computeContentClientRect(){return this.mdcFoundation.computeContentClientRect()}activate(t){this.mdcFoundation.activate(t)}deactivate(){this.mdcFoundation.deactivate()}}e([o(".mdc-tab-indicator")],E.prototype,"mdcRoot",void 0),e([o(".mdc-tab-indicator__content")],E.prototype,"contentElement",void 0),e([r()],E.prototype,"icon",void 0),e([r({type:Boolean})],E.prototype,"fade",void 0);
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
const C=l`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-tab-indicator .mdc-tab-indicator__content--icon{color:#018786;color:var(--mdc-theme-secondary, #018786)}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}`;let R=class extends E{};R.styles=C,R=e([s("mwc-tab-indicator")],R);
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
var I=function(t,e){return(I=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};var x=function(){return(x=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},O={ACTIVE:"mdc-tab--active"},L={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"},w=function(t){function e(o){var r=t.call(this,x(x({},e.defaultAdapter),o))||this;return r.focusOnActivate_=!0,r}return function(t,e){function o(){this.constructor=t}I(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return O},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return L},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!0,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(O.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate_=t},e.prototype.activate=function(t){this.adapter.addClass(O.ACTIVE),this.adapter.setAttr(L.ARIA_SELECTED,"true"),this.adapter.setAttr(L.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate_&&this.adapter.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(O.ACTIVE),this.adapter.setAttr(L.ARIA_SELECTED,"false"),this.adapter.setAttr(L.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),e=this.adapter.getOffsetLeft(),o=this.adapter.getContentOffsetWidth(),r=this.adapter.getContentOffsetLeft();return{contentLeft:e+r,contentRight:e+r+o,rootLeft:e,rootRight:e+t}},e}(t);
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
 */let P=0;class F extends n{constructor(){super(...arguments),this.mdcFoundationClass=w,this.label="",this.icon="",this.hasImageIcon=!1,this.isFadingIndicator=!1,this.minWidth=!1,this.isMinWidthIndicator=!1,this.indicatorIcon="",this.stacked=!1,this.focusOnActivate=!0,this._active=!1,this.initFocus=!1,this.shouldRenderRipple=!1,this.rippleElement=null,this.rippleHandlers=new f((()=>(this.shouldRenderRipple=!0,this.ripple.then((t=>this.rippleElement=t)),this.ripple)))}get active(){return this._active}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}connectedCallback(){this.dir=document.dir,super.connectedCallback()}firstUpdated(){super.firstUpdated(),this.id=this.id||"mdc-tab-"+ ++P}render(){const t={"mdc-tab--min-width":this.minWidth,"mdc-tab--stacked":this.stacked};let e=i``;(this.hasImageIcon||this.icon)&&(e=i`
        <span class="mdc-tab__icon material-icons"><slot name="icon">${this.icon}</slot></span>`);let o=i``;return this.label&&(o=i`
        <span class="mdc-tab__text-label">${this.label}</span>`),i`
      <button
        @click="${this.handleClick}"
        class="mdc-tab ${a(t)}"
        role="tab"
        aria-selected="false"
        tabindex="-1"
        @focus="${this.focus}"
        @blur="${this.handleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}">
        <span class="mdc-tab__content">
          ${e}
          ${o}
          ${this.isMinWidthIndicator?this.renderIndicator():""}
        </span>
        ${this.isMinWidthIndicator?"":this.renderIndicator()}
        ${this.renderRipple()}
      </button>`}renderIndicator(){return i`<mwc-tab-indicator
        .icon="${this.indicatorIcon}"
        .fade="${this.isFadingIndicator}"></mwc-tab-indicator>`}renderRipple(){return this.shouldRenderRipple?i`
          <mwc-ripple primary></mwc-ripple>
        `:""}createAdapter(){return Object.assign(Object.assign({},c(this.mdcRoot)),{setAttr:(t,e)=>this.mdcRoot.setAttribute(t,e),activateIndicator:async t=>{await this.tabIndicator.updateComplete,this.tabIndicator.activate(t)},deactivateIndicator:async()=>{await this.tabIndicator.updateComplete,this.tabIndicator.deactivate()},notifyInteracted:()=>this.dispatchEvent(new CustomEvent(w.strings.INTERACTED_EVENT,{detail:{tabId:this.id},bubbles:!0,composed:!0,cancelable:!0})),getOffsetLeft:()=>this.offsetLeft,getOffsetWidth:()=>this.mdcRoot.offsetWidth,getContentOffsetLeft:()=>this._contentElement.offsetLeft,getContentOffsetWidth:()=>this._contentElement.offsetWidth,focus:()=>{this.initFocus?this.initFocus=!1:this.mdcRoot.focus()}})}activate(t){t||(this.initFocus=!0),this.mdcFoundation?(this.mdcFoundation.activate(t),this.setActive(this.mdcFoundation.isActive())):this.updateComplete.then((()=>{this.mdcFoundation.activate(t),this.setActive(this.mdcFoundation.isActive())}))}deactivate(){this.mdcFoundation.deactivate(),this.setActive(this.mdcFoundation.isActive())}setActive(t){const e=this.active;e!==t&&(this._active=t,this.requestUpdate("active",e))}computeDimensions(){return this.mdcFoundation.computeDimensions()}computeIndicatorClientRect(){return this.tabIndicator.computeContentClientRect()}focus(){this.mdcRoot.focus(),this.handleFocus()}handleClick(){this.handleFocus(),this.mdcFoundation.handleClick()}handleFocus(){this.handleRippleFocus()}handleBlur(){this.handleRippleBlur()}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}get isRippleActive(){var t;return(null===(t=this.rippleElement)||void 0===t?void 0:t.isActive)||!1}}e([o(".mdc-tab")],F.prototype,"mdcRoot",void 0),e([o("mwc-tab-indicator")],F.prototype,"tabIndicator",void 0),e([r()],F.prototype,"label",void 0),e([r()],F.prototype,"icon",void 0),e([r({type:Boolean})],F.prototype,"hasImageIcon",void 0),e([r({type:Boolean})],F.prototype,"isFadingIndicator",void 0),e([r({type:Boolean})],F.prototype,"minWidth",void 0),e([r({type:Boolean})],F.prototype,"isMinWidthIndicator",void 0),e([r({type:Boolean,reflect:!0,attribute:"active"})],F.prototype,"active",null),e([r()],F.prototype,"indicatorIcon",void 0),e([r({type:Boolean})],F.prototype,"stacked",void 0),e([d((async function(t){await this.updateComplete,this.mdcFoundation.setFocusOnActivate(t)})),r({type:Boolean})],F.prototype,"focusOnActivate",void 0),e([o(".mdc-tab__content")],F.prototype,"_contentElement",void 0),e([p()],F.prototype,"shouldRenderRipple",void 0),e([h("mwc-ripple")],F.prototype,"ripple",void 0),e([u({passive:!0})],F.prototype,"handleRippleTouchStart",null);
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
const D=l`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-tab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding-right:24px;padding-left:24px;min-width:90px;position:relative;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;background:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab .mdc-tab__text-label{color:rgba(0, 0, 0, 0.6)}.mdc-tab .mdc-tab__icon{color:rgba(0, 0, 0, 0.54);fill:currentColor}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{position:relative;display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;width:24px;height:24px;font-size:24px;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-tab--active .mdc-tab__icon{color:#6200ee;color:var(--mdc-theme-primary, #6200ee);fill:currentColor}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-tab__ripple{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.mdc-tab__ripple::before,.mdc-tab__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-tab__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-tab__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-tab__ripple.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab__ripple.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-tab__ripple.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-tab__ripple.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-tab__ripple.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab__ripple::before,.mdc-tab__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-tab__ripple.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-tab__ripple::before,.mdc-tab__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-tab__ripple:hover::before,.mdc-tab__ripple.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before,.mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-tab__ripple:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-tab__ripple.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}:host{outline:none;flex:1 0 auto;display:flex;justify-content:center;-webkit-tap-highlight-color:transparent}.mdc-tab{height:var(--mdc-tab-height, 48px);margin-left:0;margin-right:0;padding-right:var(--mdc-tab-horizontal-padding, 24px);padding-left:var(--mdc-tab-horizontal-padding, 24px)}.mdc-tab--stacked{height:var(--mdc-tab-stacked-height, 72px)}.mdc-tab::-moz-focus-inner{border:0}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mdc-tab-text-label-color-default, rgba(0, 0, 0, 0.6))}.mdc-tab:not(.mdc-tab--active) .mdc-tab__icon{color:var(--mdc-tab-color-default, rgba(0, 0, 0, 0.54))}`;let N=class extends F{};N.styles=D,N=e([s("mwc-tab")],N);
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
var W=function(t,e){return(W=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};function k(t,e){function o(){this.constructor=t}W(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}var M=function(){return(M=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};
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
var K={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},j={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"},V=function(t){this.adapter=t},z=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return k(e,t),e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),e=this.calculateScrollEdges_().right;return Math.round(e-t)},e.prototype.scrollToRTL=function(t){var e=this.calculateScrollEdges_(),o=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue_(e.right-t);return{finalScrollPosition:r,scrollDelta:r-o}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),o=this.clampScrollValue_(e-t);return{finalScrollPosition:o,scrollDelta:o-e}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges_=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},e.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)},e}(V),Y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return k(e,t),e.prototype.getScrollPositionRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();return Math.round(t-e)},e.prototype.scrollToRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),o=this.clampScrollValue_(-t);return{finalScrollPosition:o,scrollDelta:o-e}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),o=this.clampScrollValue_(e-t);return{finalScrollPosition:o,scrollDelta:o-e}},e.prototype.getAnimatingScrollPosition=function(t,e){return t-e},e.prototype.calculateScrollEdges_=function(){var t=this.adapter.getScrollContentOffsetWidth();return{left:this.adapter.getScrollAreaOffsetWidth()-t,right:0}},e.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.max(Math.min(e.right,t),e.left)},e}(V),H=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return k(e,t),e.prototype.getScrollPositionRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();return Math.round(e-t)},e.prototype.scrollToRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),o=this.clampScrollValue_(t);return{finalScrollPosition:o,scrollDelta:e-o}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),o=this.clampScrollValue_(e+t);return{finalScrollPosition:o,scrollDelta:e-o}},e.prototype.getAnimatingScrollPosition=function(t,e){return t+e},e.prototype.calculateScrollEdges_=function(){return{left:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth(),right:0}},e.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.min(Math.max(e.right,t),e.left)},e}(V),$=function(t){function e(o){var r=t.call(this,M(M({},e.defaultAdapter),o))||this;return r.isAnimating_=!1,r}return k(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return K},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return j},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL_())return this.computeCurrentScrollPositionRTL_();var t=this.calculateCurrentTranslateX_();return this.adapter.getScrollAreaScrollLeft()-t},e.prototype.handleInteraction=function(){this.isAnimating_&&this.stopScrollAnimation_()},e.prototype.handleTransitionEnd=function(t){var o=t.target;this.isAnimating_&&this.adapter.eventTargetMatchesSelector(o,e.strings.CONTENT_SELECTOR)&&(this.isAnimating_=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){0!==t&&this.animate_(this.getIncrementScrollOperation_(t))},e.prototype.incrementScrollImmediate=function(t){if(0!==t){var e=this.getIncrementScrollOperation_(t);0!==e.scrollDelta&&(this.stopScrollAnimation_(),this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition))}},e.prototype.scrollTo=function(t){if(this.isRTL_())return this.scrollToRTL_(t);this.scrollTo_(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance_||(this.rtlScrollerInstance_=this.rtlScrollerFactory_()),this.rtlScrollerInstance_},e.prototype.calculateCurrentTranslateX_=function(){var t=this.adapter.getScrollContentStyleValue("transform");if("none"===t)return 0;var e=/\((.+?)\)/.exec(t);if(!e)return 0;var o=function(t,e){var o="function"==typeof Symbol&&t[Symbol.iterator];if(!o)return t;var r,n,i=o.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){n={error:t}}finally{try{r&&!r.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}return a}(e[1].split(","),6);o[0],o[1],o[2],o[3];var r=o[4];return o[5],parseFloat(r)},e.prototype.clampScrollValue_=function(t){var e=this.calculateScrollEdges_();return Math.min(Math.max(e.left,t),e.right)},e.prototype.computeCurrentScrollPositionRTL_=function(){var t=this.calculateCurrentTranslateX_();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges_=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},e.prototype.scrollTo_=function(t){var e=this.getScrollPosition(),o=this.clampScrollValue_(t),r=o-e;this.animate_({finalScrollPosition:o,scrollDelta:r})},e.prototype.scrollToRTL_=function(t){var e=this.getRTLScroller().scrollToRTL(t);this.animate_(e)},e.prototype.getIncrementScrollOperation_=function(t){if(this.isRTL_())return this.getRTLScroller().incrementScrollRTL(t);var e=this.getScrollPosition(),o=t+e,r=this.clampScrollValue_(o);return{finalScrollPosition:r,scrollDelta:r-e}},e.prototype.animate_=function(t){var o=this;0!==t.scrollDelta&&(this.stopScrollAnimation_(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame((function(){o.adapter.addClass(e.cssClasses.ANIMATING),o.adapter.setScrollContentStyleProperty("transform","none")})),this.isAnimating_=!0)},e.prototype.stopScrollAnimation_=function(){this.isAnimating_=!1;var t=this.getAnimatingScrollPosition_();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition_=function(){var t=this.calculateCurrentTranslateX_(),e=this.adapter.getScrollAreaScrollLeft();return this.isRTL_()?this.getRTLScroller().getAnimatingScrollPosition(e,t):e-t},e.prototype.rtlScrollerFactory_=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var e=this.adapter.getScrollAreaScrollLeft();if(e<0)return this.adapter.setScrollAreaScrollLeft(t),new Y(this.adapter);var o=this.adapter.computeScrollAreaClientRect(),r=this.adapter.computeScrollContentClientRect(),n=Math.round(r.right-o.right);return this.adapter.setScrollAreaScrollLeft(t),n===e?new H(this.adapter):new z(this.adapter)},e.prototype.isRTL_=function(){return"rtl"===this.adapter.getScrollContentStyleValue("direction")},e}(t);class B extends n{constructor(){super(...arguments),this.mdcFoundationClass=$,this._scrollbarHeight=-1}_handleInteraction(){this.mdcFoundation.handleInteraction()}_handleTransitionEnd(t){this.mdcFoundation.handleTransitionEnd(t)}render(){return i`
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area"
            @wheel="${this._handleInteraction}"
            @touchstart="${this._handleInteraction}"
            @pointerdown="${this._handleInteraction}"
            @mousedown="${this._handleInteraction}"
            @keydown="${this._handleInteraction}"
            @transitionend="${this._handleTransitionEnd}">
          <div class="mdc-tab-scroller__scroll-content"><slot></slot></div>
        </div>
      </div>
      `}createAdapter(){return Object.assign(Object.assign({},c(this.mdcRoot)),{eventTargetMatchesSelector:(t,e)=>m(t,e),addScrollAreaClass:t=>this.scrollAreaElement.classList.add(t),setScrollAreaStyleProperty:(t,e)=>this.scrollAreaElement.style.setProperty(t,e),setScrollContentStyleProperty:(t,e)=>this.scrollContentElement.style.setProperty(t,e),getScrollContentStyleValue:t=>window.getComputedStyle(this.scrollContentElement).getPropertyValue(t),setScrollAreaScrollLeft:t=>this.scrollAreaElement.scrollLeft=t,getScrollAreaScrollLeft:()=>this.scrollAreaElement.scrollLeft,getScrollContentOffsetWidth:()=>this.scrollContentElement.offsetWidth,getScrollAreaOffsetWidth:()=>this.scrollAreaElement.offsetWidth,computeScrollAreaClientRect:()=>this.scrollAreaElement.getBoundingClientRect(),computeScrollContentClientRect:()=>this.scrollContentElement.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>(-1===this._scrollbarHeight&&(this.scrollAreaElement.style.overflowX="scroll",this._scrollbarHeight=this.scrollAreaElement.offsetHeight-this.scrollAreaElement.clientHeight,this.scrollAreaElement.style.overflowX=""),this._scrollbarHeight)})}getScrollPosition(){return this.mdcFoundation.getScrollPosition()}getScrollContentWidth(){return this.scrollContentElement.offsetWidth}incrementScrollPosition(t){this.mdcFoundation.incrementScroll(t)}scrollToPosition(t){this.mdcFoundation.scrollTo(t)}}e([o(".mdc-tab-scroller")],B.prototype,"mdcRoot",void 0),e([o(".mdc-tab-scroller__scroll-area")],B.prototype,"scrollAreaElement",void 0),e([o(".mdc-tab-scroller__scroll-content")],B.prototype,"scrollContentElement",void 0),e([u({passive:!0})],B.prototype,"_handleInteraction",null);
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
const X=l`.mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:flex;flex:1 0 auto;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}:host{display:flex}.mdc-tab-scroller{flex:1}`;let U=class extends B{};U.styles=X,U=e([s("mwc-tab-scroller")],U);
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
var G=function(t,e){return(G=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};var q=function(){return(q=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},J={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},Q={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32},Z=new Set;
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
 */Z.add(J.ARROW_LEFT_KEY),Z.add(J.ARROW_RIGHT_KEY),Z.add(J.END_KEY),Z.add(J.HOME_KEY),Z.add(J.ENTER_KEY),Z.add(J.SPACE_KEY);var tt=new Map;tt.set(Q.ARROW_LEFT_KEYCODE,J.ARROW_LEFT_KEY),tt.set(Q.ARROW_RIGHT_KEYCODE,J.ARROW_RIGHT_KEY),tt.set(Q.END_KEYCODE,J.END_KEY),tt.set(Q.HOME_KEYCODE,J.HOME_KEY),tt.set(Q.ENTER_KEYCODE,J.ENTER_KEY),tt.set(Q.SPACE_KEYCODE,J.SPACE_KEY);var et=function(t){function e(o){var r=t.call(this,q(q({},e.defaultAdapter),o))||this;return r.useAutomaticActivation_=!1,r}return function(t,e){function o(){this.constructor=t}G(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(e,t),Object.defineProperty(e,"strings",{get:function(){return J},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Q},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation_=t},e.prototype.activateTab=function(t){var e,o=this.adapter.getPreviousActiveTabIndex();this.indexIsInRange_(t)&&t!==o&&(-1!==o&&(this.adapter.deactivateTabAtIndex(o),e=this.adapter.getTabIndicatorClientRectAtIndex(o)),this.adapter.activateTabAtIndex(t,e),this.scrollIntoView(t),this.adapter.notifyTabActivated(t))},e.prototype.handleKeyDown=function(t){var e=this.getKeyFromEvent_(t);if(void 0!==e)if(this.isActivationKey_(e)||t.preventDefault(),this.useAutomaticActivation_){if(this.isActivationKey_(e))return;var o=this.determineTargetFromKey_(this.adapter.getPreviousActiveTabIndex(),e);this.adapter.setActiveTab(o),this.scrollIntoView(o)}else{var r=this.adapter.getFocusedTabIndex();if(this.isActivationKey_(e))this.adapter.setActiveTab(r);else{o=this.determineTargetFromKey_(r,e);this.adapter.focusTabAtIndex(o),this.scrollIntoView(o)}}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){if(this.indexIsInRange_(t))return 0===t?this.adapter.scrollTo(0):t===this.adapter.getTabListLength()-1?this.adapter.scrollTo(this.adapter.getScrollContentWidth()):this.isRTL_()?this.scrollIntoViewRTL_(t):void this.scrollIntoView_(t)},e.prototype.determineTargetFromKey_=function(t,e){var o=this.isRTL_(),r=this.adapter.getTabListLength()-1,n=t;return e===J.END_KEY?n=r:e===J.ARROW_LEFT_KEY&&!o||e===J.ARROW_RIGHT_KEY&&o?n-=1:e===J.ARROW_RIGHT_KEY&&!o||e===J.ARROW_LEFT_KEY&&o?n+=1:n=0,n<0?n=r:n>r&&(n=0),n},e.prototype.calculateScrollIncrement_=function(t,e,o,r){var n=this.adapter.getTabDimensionsAtIndex(e),i=n.contentLeft-o-r,a=n.contentRight-o-Q.EXTRA_SCROLL_AMOUNT,c=i+Q.EXTRA_SCROLL_AMOUNT;return e<t?Math.min(a,0):Math.max(c,0)},e.prototype.calculateScrollIncrementRTL_=function(t,e,o,r,n){var i=this.adapter.getTabDimensionsAtIndex(e),a=n-i.contentLeft-o,c=n-i.contentRight-o-r+Q.EXTRA_SCROLL_AMOUNT,l=a-Q.EXTRA_SCROLL_AMOUNT;return e>t?Math.max(c,0):Math.min(l,0)},e.prototype.findAdjacentTabIndexClosestToEdge_=function(t,e,o,r){var n=e.rootLeft-o,i=e.rootRight-o-r,a=n+i;return n<0||a<0?t-1:i>0||a>0?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL_=function(t,e,o,r,n){var i=n-e.rootLeft-r-o,a=n-e.rootRight-o,c=i+a;return i>0||c>0?t+1:a<0||c<0?t-1:-1},e.prototype.getKeyFromEvent_=function(t){return Z.has(t.key)?t.key:tt.get(t.keyCode)},e.prototype.isActivationKey_=function(t){return t===J.SPACE_KEY||t===J.ENTER_KEY},e.prototype.indexIsInRange_=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL_=function(){return this.adapter.isRTL()},e.prototype.scrollIntoView_=function(t){var e=this.adapter.getScrollPosition(),o=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),n=this.findAdjacentTabIndexClosestToEdge_(t,r,e,o);if(this.indexIsInRange_(n)){var i=this.calculateScrollIncrement_(t,n,e,o);this.adapter.incrementScroll(i)}},e.prototype.scrollIntoViewRTL_=function(t){var e=this.adapter.getScrollPosition(),o=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),n=this.adapter.getScrollContentWidth(),i=this.findAdjacentTabIndexClosestToEdgeRTL_(t,r,e,o,n);if(this.indexIsInRange_(i)){var a=this.calculateScrollIncrementRTL_(t,i,e,o,n);this.adapter.incrementScroll(a)}},e}(t);class ot extends n{constructor(){super(...arguments),this.mdcFoundationClass=et,this.activeIndex=0,this._previousActiveIndex=-1}_handleTabInteraction(t){this.mdcFoundation.handleTabInteraction(t)}_handleKeydown(t){this.mdcFoundation.handleKeyDown(t)}render(){return i`
      <div class="mdc-tab-bar" role="tablist"
          @MDCTab:interacted="${this._handleTabInteraction}"
          @keydown="${this._handleKeydown}">
        <mwc-tab-scroller><slot></slot></mwc-tab-scroller>
      </div>
      `}_getTabs(){return this.tabsSlot.assignedNodes({flatten:!0}).filter((t=>t instanceof N))}_getTab(t){return this._getTabs()[t]}createAdapter(){return{scrollTo:t=>this.scrollerElement.scrollToPosition(t),incrementScroll:t=>this.scrollerElement.incrementScrollPosition(t),getScrollPosition:()=>this.scrollerElement.getScrollPosition(),getScrollContentWidth:()=>this.scrollerElement.getScrollContentWidth(),getOffsetWidth:()=>this.mdcRoot.offsetWidth,isRTL:()=>"rtl"===window.getComputedStyle(this.mdcRoot).getPropertyValue("direction"),setActiveTab:t=>this.mdcFoundation.activateTab(t),activateTabAtIndex:(t,e)=>{const o=this._getTab(t);void 0!==o&&o.activate(e),this._previousActiveIndex=t},deactivateTabAtIndex:t=>{const e=this._getTab(t);void 0!==e&&e.deactivate()},focusTabAtIndex:t=>{const e=this._getTab(t);void 0!==e&&e.focus()},getTabIndicatorClientRectAtIndex:t=>{const e=this._getTab(t);return void 0!==e?e.computeIndicatorClientRect():new DOMRect},getTabDimensionsAtIndex:t=>{const e=this._getTab(t);return void 0!==e?e.computeDimensions():{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:()=>this._previousActiveIndex,getFocusedTabIndex:()=>{const t=this._getTabs(),e=this.getRootNode().activeElement;return t.indexOf(e)},getIndexOfTabById:t=>{const e=this._getTabs();for(let o=0;o<e.length;o++)if(e[o].id===t)return o;return-1},getTabListLength:()=>this._getTabs().length,notifyTabActivated:t=>{this.activeIndex=t,this.dispatchEvent(new CustomEvent(et.strings.TAB_ACTIVATED_EVENT,{detail:{index:t},bubbles:!0,cancelable:!0}))}}}firstUpdated(){}_getUpdateComplete(){return super._getUpdateComplete().then((()=>this.scrollerElement.updateComplete)).then((()=>{void 0===this.mdcFoundation&&this.createFoundation()}))}scrollIndexIntoView(t){this.mdcFoundation.scrollIntoView(t)}}e([o(".mdc-tab-bar")],ot.prototype,"mdcRoot",void 0),e([o("mwc-tab-scroller")],ot.prototype,"scrollerElement",void 0),e([o("slot")],ot.prototype,"tabsSlot",void 0),e([d((async function(){await this.updateComplete,this.activeIndex!==this._previousActiveIndex&&this.mdcFoundation.activateTab(this.activeIndex)})),r({type:Number})],ot.prototype,"activeIndex",void 0);
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
const rt=l`.mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}:host{display:block}.mdc-tab-bar{flex:1}mwc-tab{--mdc-tab-height: 48px;--mdc-tab-stacked-height: 72px}`;let nt=class extends ot{};nt.styles=rt,nt=e([s("mwc-tab-bar")],nt);
