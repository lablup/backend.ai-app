import{k as e,l as t,M as i,_ as s,q as r,p as o,o as a,u as n,F as c,h as l,s as d,r as u,v as p,w as h,b as m,c as g,L as _,d as b,I as v,a as y,x as f,e as w,B as x,g as k,f as S,t as $,y as R,z as T,A as j,C,D as A}from"./backend-ai-console-33bc2716.js";import{u as I}from"./unsafe-html-015207e0.js";import{g as q,a as B}from"./mwc-linear-progress-dd49070e.js";import"./paper-dropdown-menu-a208b033.js";import"./paper-item-9f2ac1d7.js";import"./label-d001d26a.js";import{R as G}from"./radio-behavior-0d67e81a.js";import"./expansion-d3426563.js";
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
 */var E={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",HAS_TRACK_MARKER:"mdc-slider--display-markers",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete",DISABLE_TOUCH_ACTION:"mdc-slider--disable-touch-action"},U={ARIA_DISABLED:"aria-disabled",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",STEP_DATA_ATTR:"data-step",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",TRACK_SELECTOR:".mdc-slider__track"},z={PAGE_FACTOR:4},D="undefined"!=typeof window,P=D&&!!window.PointerEvent,N=P?["pointerdown"]:["mousedown","touchstart"],L=P?["pointerup"]:["mouseup","touchend"],O={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"},M="ArrowDown",F="ArrowLeft",H="ArrowRight",V="ArrowUp",K="End",X="Home",W="PageDown",Q="PageUp",J=function(i){function s(e){var r=i.call(this,t(t({},s.defaultAdapter),e))||this;return r.savedTabIndex_=NaN,r.active_=!1,r.inTransit_=!1,r.isDiscrete_=!1,r.hasTrackMarker_=!1,r.handlingThumbTargetEvt_=!1,r.min_=0,r.max_=100,r.step_=0,r.value_=0,r.disabled_=!1,r.preventFocusState_=!1,r.thumbContainerPointerHandler_=function(){return r.handlingThumbTargetEvt_=!0},r.interactionStartHandler_=function(e){return r.handleDown_(e)},r.keydownHandler_=function(e){return r.handleKeydown_(e)},r.focusHandler_=function(){return r.handleFocus_()},r.blurHandler_=function(){return r.handleBlur_()},r.resizeHandler_=function(){return r.layout()},r}return e(s,i),Object.defineProperty(s,"cssClasses",{get:function(){return E},enumerable:!0,configurable:!0}),Object.defineProperty(s,"strings",{get:function(){return U},enumerable:!0,configurable:!0}),Object.defineProperty(s,"numbers",{get:function(){return z},enumerable:!0,configurable:!0}),Object.defineProperty(s,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabIndex:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerThumbContainerInteractionHandler:function(){},deregisterThumbContainerInteractionHandler:function(){},registerBodyInteractionHandler:function(){},deregisterBodyInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},notifyInput:function(){},notifyChange:function(){},setThumbContainerStyleProperty:function(){},setTrackStyleProperty:function(){},setMarkerValue:function(){},setTrackMarkers:function(){},isRTL:function(){return!1}}},enumerable:!0,configurable:!0}),s.prototype.init=function(){var e=this;this.isDiscrete_=this.adapter.hasClass(E.IS_DISCRETE),this.hasTrackMarker_=this.adapter.hasClass(E.HAS_TRACK_MARKER),N.forEach((function(t){e.adapter.registerInteractionHandler(t,e.interactionStartHandler_),e.adapter.registerThumbContainerInteractionHandler(t,e.thumbContainerPointerHandler_)})),P&&this.adapter.addClass(E.DISABLE_TOUCH_ACTION),this.adapter.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_),this.adapter.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0===this.getStep()&&(this.step_=1)},s.prototype.destroy=function(){var e=this;N.forEach((function(t){e.adapter.deregisterInteractionHandler(t,e.interactionStartHandler_),e.adapter.deregisterThumbContainerInteractionHandler(t,e.thumbContainerPointerHandler_)})),this.adapter.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.deregisterResizeHandler(this.resizeHandler_)},s.prototype.setupTrackMarker=function(){this.isDiscrete_&&this.hasTrackMarker_&&0!==this.getStep()&&this.adapter.setTrackMarkers(this.getStep(),this.getMax(),this.getMin())},s.prototype.layout=function(){this.rect_=this.adapter.computeBoundingRect(),this.updateUIForCurrentValue_()},s.prototype.getValue=function(){return this.value_},s.prototype.setValue=function(e){this.setValue_(e,!1)},s.prototype.getMax=function(){return this.max_},s.prototype.setMax=function(e){if(e<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=e,this.setValue_(this.value_,!1,!0),this.adapter.setAttribute(U.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()},s.prototype.getMin=function(){return this.min_},s.prototype.setMin=function(e){if(e>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=e,this.setValue_(this.value_,!1,!0),this.adapter.setAttribute(U.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()},s.prototype.getStep=function(){return this.step_},s.prototype.setStep=function(e){if(e<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof e||e<1)&&(e=1),this.step_=e,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()},s.prototype.isDisabled=function(){return this.disabled_},s.prototype.setDisabled=function(e){this.disabled_=e,this.toggleClass_(E.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter.getTabIndex(),this.adapter.setAttribute(U.ARIA_DISABLED,"true"),this.adapter.removeAttribute("tabindex")):(this.adapter.removeAttribute(U.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter.setAttribute("tabindex",String(this.savedTabIndex_)))},s.prototype.handleDown_=function(e){var t=this;if(!this.disabled_){this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);var i=function(e){t.handleMove_(e)},s=O[e.type],r=function(){t.handleUp_(),t.adapter.deregisterBodyInteractionHandler(s,i),L.forEach((function(e){return t.adapter.deregisterBodyInteractionHandler(e,r)}))};this.adapter.registerBodyInteractionHandler(s,i),L.forEach((function(e){return t.adapter.registerBodyInteractionHandler(e,r)})),this.setValueFromEvt_(e)}},s.prototype.handleMove_=function(e){e.preventDefault(),this.setValueFromEvt_(e)},s.prototype.handleUp_=function(){this.setActive_(!1),this.adapter.notifyChange()},s.prototype.getClientX_=function(e){return e.targetTouches&&e.targetTouches.length>0?e.targetTouches[0].clientX:e.clientX},s.prototype.setValueFromEvt_=function(e){var t=this.getClientX_(e),i=this.computeValueFromClientX_(t);this.setValue_(i,!0)},s.prototype.computeValueFromClientX_=function(e){var t=this.max_,i=this.min_,s=(e-this.rect_.left)/this.rect_.width;return this.adapter.isRTL()&&(s=1-s),i+s*(t-i)},s.prototype.handleKeydown_=function(e){var t=this.getKeyId_(e),i=this.getValueForKeyId_(t);isNaN(i)||(e.preventDefault(),this.adapter.addClass(E.FOCUS),this.setValue_(i,!0),this.adapter.notifyChange())},s.prototype.getKeyId_=function(e){return e.key===F||37===e.keyCode?F:e.key===H||39===e.keyCode?H:e.key===V||38===e.keyCode?V:e.key===M||40===e.keyCode?M:e.key===X||36===e.keyCode?X:e.key===K||35===e.keyCode?K:e.key===Q||33===e.keyCode?Q:e.key===W||34===e.keyCode?W:""},s.prototype.getValueForKeyId_=function(e){var t=this.max_,i=this.min_,s=this.step_||(t-i)/100;switch(this.adapter.isRTL()&&(e===F||e===H)&&(s=-s),e){case F:case M:return this.value_-s;case H:case V:return this.value_+s;case X:return this.min_;case K:return this.max_;case Q:return this.value_+s*z.PAGE_FACTOR;case W:return this.value_-s*z.PAGE_FACTOR;default:return NaN}},s.prototype.handleFocus_=function(){this.preventFocusState_||this.adapter.addClass(E.FOCUS)},s.prototype.handleBlur_=function(){this.preventFocusState_=!1,this.adapter.removeClass(E.FOCUS)},s.prototype.setValue_=function(e,t,i){if(void 0===i&&(i=!1),e!==this.value_||i){var s=this.min_,r=this.max_,o=e===s||e===r;this.step_&&!o&&(e=this.quantize_(e)),e<s?e=s:e>r&&(e=r),e=e||0,this.value_=e,this.adapter.setAttribute(U.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),t&&(this.adapter.notifyInput(),this.isDiscrete_&&this.adapter.setMarkerValue(e))}},s.prototype.quantize_=function(e){return Math.round(e/this.step_)*this.step_},s.prototype.updateUIForCurrentValue_=function(){var e=this,t=this.max_,i=this.min_,s=(this.value_-i)/(t-i),r=s*this.rect_.width;this.adapter.isRTL()&&(r=this.rect_.width-r);var o=D?q(window,"transform"):"transform",a=D?B(window,"transitionend"):"transitionend";if(this.inTransit_){var n=function(){e.setInTransit_(!1),e.adapter.deregisterThumbContainerInteractionHandler(a,n)};this.adapter.registerThumbContainerInteractionHandler(a,n)}requestAnimationFrame((function(){e.adapter.setThumbContainerStyleProperty(o,"translateX("+r+"px) translateX(-50%)"),e.adapter.setTrackStyleProperty(o,"scaleX("+s+")")}))},s.prototype.setActive_=function(e){this.active_=e,this.toggleClass_(E.ACTIVE,this.active_)},s.prototype.setInTransit_=function(e){this.inTransit_=e,this.toggleClass_(E.IN_TRANSIT,this.inTransit_)},s.prototype.toggleClass_=function(e,t){t?this.adapter.addClass(e):this.adapter.removeClass(e)},s}(i);class Y extends c{constructor(){super(...arguments),this.mdcFoundationClass=J,this.min=0,this.max=100,this._value=0,this.step=0,this.disabled=!1,this.pin=!1,this.markers=!1,this.pinMarkerText="",this.trackMarkerContainerStyles={},this.thumbContainerStyles={},this.trackStyles={},this.isFoundationDestroyed=!1}set value(e){this.mdcFoundation&&this.mdcFoundation.setValue(e),this._value=e,this.requestUpdate("value",e)}get value(){return this.mdcFoundation?this.mdcFoundation.getValue():this._value}render(){const e=0!==this.step,t={"mdc-slider--discrete":e,"mdc-slider--display-markers":this.markers&&e};let i="";e&&this.markers&&(i=l`
        <div
            class="mdc-slider__track-marker-container"
            style="${d(this.trackMarkerContainerStyles)}">
        </div>`);let s="";return this.pin&&(s=l`
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker">${this.pinMarkerText}</span>
      </div>`),l`
      <div class="mdc-slider ${u(t)}"
           tabindex="0" role="slider"
           aria-valuemin="${this.min}" aria-valuemax="${this.max}"
           aria-valuenow="${this.value}"
           aria-disabled="${this.disabled.toString()}"
           data-step="${this.step}"
           @mousedown=${this.layout}
           @touchstart=${this.layout}>
        <div class="mdc-slider__track-container">
          <div
              class="mdc-slider__track"
              style="${d(this.trackStyles)}">
          </div>
          ${i}
        </div>
        <div
            class="mdc-slider__thumb-container"
            style="${d(this.thumbContainerStyles)}">
          <!-- TODO: use cache() directive -->
          ${s}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`}connectedCallback(){super.connectedCallback(),this.mdcRoot&&this.isFoundationDestroyed&&(this.isFoundationDestroyed=!1,this.mdcFoundation.init())}updated(e){const t=e.has("min"),i=e.has("max");t&&i?this.max<this.mdcFoundation.getMin()?(this.mdcFoundation.setMin(this.min),this.mdcFoundation.setMax(this.max)):(this.mdcFoundation.setMax(this.max),this.mdcFoundation.setMin(this.min)):t?this.mdcFoundation.setMin(this.min):i&&this.mdcFoundation.setMax(this.max),super.updated(e)}disconnectedCallback(){super.disconnectedCallback(),this.isFoundationDestroyed=!0,this.mdcFoundation.destroy()}createAdapter(){return Object.assign(Object.assign({},p(this.mdcRoot)),{getAttribute:e=>this.mdcRoot.getAttribute(e),setAttribute:(e,t)=>this.mdcRoot.setAttribute(e,t),removeAttribute:e=>this.mdcRoot.removeAttribute(e),computeBoundingRect:()=>{const e=this.mdcRoot.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left+window.pageXOffset,right:e.right,top:e.top,width:e.width}},getTabIndex:()=>this.mdcRoot.tabIndex,registerInteractionHandler:(e,t)=>{const i="touchstart"===e?h():void 0;this.mdcRoot.addEventListener(e,t,i)},deregisterInteractionHandler:(e,t)=>this.mdcRoot.removeEventListener(e,t),registerThumbContainerInteractionHandler:(e,t)=>{const i="touchstart"===e?h():void 0;this.thumbContainer.addEventListener(e,t,i)},deregisterThumbContainerInteractionHandler:(e,t)=>this.thumbContainer.removeEventListener(e,t),registerBodyInteractionHandler:(e,t)=>document.body.addEventListener(e,t),deregisterBodyInteractionHandler:(e,t)=>document.body.removeEventListener(e,t),registerResizeHandler:e=>window.addEventListener("resize",e,h()),deregisterResizeHandler:e=>window.removeEventListener("resize",e),notifyInput:()=>{const e=this.mdcFoundation.getValue();e!==this._value&&(this.value=e,this.dispatchEvent(new CustomEvent("input",{detail:this,composed:!0,bubbles:!0,cancelable:!0})))},notifyChange:()=>{this.dispatchEvent(new CustomEvent("change",{detail:this,composed:!0,bubbles:!0,cancelable:!0}))},setThumbContainerStyleProperty:(e,t)=>{this.thumbContainerStyles[e]=t,this.requestUpdate()},setTrackStyleProperty:(e,t)=>{this.trackStyles[e]=t,this.requestUpdate()},setMarkerValue:e=>this.pinMarkerText=e.toLocaleString(),setTrackMarkers:(e,t,i)=>{const s=e.toLocaleString(),r="linear-gradient(to right, currentColor 2px, transparent 0) "+`0 center / calc((100% - 2px) / ${`((${t.toLocaleString()} - ${i.toLocaleString()}) / ${s})`}) 100% repeat-x`;this.trackMarkerContainerStyles.background=r,this.requestUpdate()},isRTL:()=>"rtl"===getComputedStyle(this.mdcRoot).direction})}resetFoundation(){this.mdcFoundation&&(this.mdcFoundation.destroy(),this.mdcFoundation.init())}async firstUpdated(){await super.firstUpdated(),this.mdcFoundation.setValue(this._value)}layout(){this.mdcFoundation.layout()}}s([r(".mdc-slider")],Y.prototype,"mdcRoot",void 0),s([r(".mdc-slider")],Y.prototype,"formElement",void 0),s([r(".mdc-slider__thumb-container")],Y.prototype,"thumbContainer",void 0),s([r(".mdc-slider__pin-value-marker")],Y.prototype,"pinMarker",void 0),s([o({type:Number})],Y.prototype,"min",void 0),s([o({type:Number})],Y.prototype,"max",void 0),s([o({type:Number})],Y.prototype,"value",null),s([o({type:Number}),a((function(e,t){0!==t!==(0!==e)&&this.resetFoundation(),this.mdcFoundation.setStep(e)}))],Y.prototype,"step",void 0),s([o({type:Boolean,reflect:!0}),a((function(e){this.mdcFoundation.setDisabled(e)}))],Y.prototype,"disabled",void 0),s([o({type:Boolean,reflect:!0})],Y.prototype,"pin",void 0),s([o({type:Boolean,reflect:!0}),a((function(){this.mdcFoundation.setupTrackMarker()}))],Y.prototype,"markers",void 0),s([o({type:String})],Y.prototype,"pinMarkerText",void 0),s([o({type:Object})],Y.prototype,"trackMarkerContainerStyles",void 0),s([o({type:Object})],Y.prototype,"thumbContainerStyles",void 0),s([o({type:Object})],Y.prototype,"trackStyles",void 0),s([n({capture:!0,passive:!0})],Y.prototype,"layout",null);
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
const Z=m`@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);opacity:.26}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary, #018786);stroke:#018786;stroke:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disable-touch-action{touch-action:none}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container::after{background-color:#9a9a9a;opacity:.26}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track-container::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;content:""}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:none}`;let ee=class extends Y{};ee.styles=Z,ee=s([g("mwc-slider")],ee);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let te=class extends _{constructor(){super(...arguments),this.editable=null,this.pin=null,this.markers=null,this.marker_limit=30,this.disabled=null}static get styles(){return[b,v,y,f,w,m`
        .mdc-text-field {
          height: 25px;
        }

        wl-textfield {
          --input-state-color-invalid :  var(--input-state-color-inactive,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));
          width: var(--textfield-min-width, 65px);
          margin-left: 10px;
        }

        mwc-slider {
          width: var(--slider-width, 100px);
          --mdc-theme-secondary: var(--slider-color, '#018786');
          color: var(--paper-grey-700);
        }
      `]}render(){return l`
      <div class="horizontal center layout">
      <mwc-slider id="slider" class="${this.id}" value="${this.value}"
          min="${this.min}" max="${this.max}"
          ?pin="${this.pin}"
          ?disabled="${this.disabled}"
          ?markers="${this.markers}"
          @change="${this.syncToText}">
      </mwc-slider>
      <wl-textfield style="display:none" id="textfield" class="${this.id}" type="number"
        value="${this.value}" min="${this.min}" max="${this.max}" step="${this.step}"
        @change="${this.syncToSlider}">
      </wl-textfield>
      </div>
    `}firstUpdated(){this.slider=this.shadowRoot.querySelector("#slider"),this.editable&&(this.textfield=this.shadowRoot.querySelector("#textfield"),this.textfield.style.display="flex");const e=this.shadowRoot.querySelectorAll("wl-textfield");setTimeout(()=>{e.forEach(e=>{const t=e.getAttribute("step");e.$formElement.step=t})},100),this.step||(this.step=1),this.checkMarkerDisplay()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(e){e.forEach((e,t)=>{if("value"===t){setTimeout(()=>{this.editable&&this.syncToSlider(),this.slider.layout()},500);const e=new CustomEvent("value-changed",{detail:{}});this.dispatchEvent(e)}["min","max"].includes(t)&&this.checkMarkerDisplay()});let t=new CustomEvent("changed",{detail:""});this.dispatchEvent(t)}syncToText(){this.value=this.slider.value}syncToSlider(){let e=Math.round(this.textfield.value/this.step)*this.step;var t;this.textfield.value=e.toFixed((t=this.step,Math.floor(t)===t?0:t.toString().split(".")[1].length||0)),this.textfield.value>this.max&&(this.textfield.value=this.max),this.textfield.value<this.min&&(this.textfield.value=this.min),this.value=this.textfield.value,this.slider.value=this.textfield.value,this.slider.step=this.step}checkMarkerDisplay(){this.markers&&(this.max-this.min)/this.step>this.marker_limit&&this.slider.removeAttribute("markers"),this.slider.setAttribute("step",this.step),this.slider.step=this.step}};s([o({type:Number})],te.prototype,"step",void 0),s([o({type:Number})],te.prototype,"value",void 0),s([o({type:Number})],te.prototype,"max",void 0),s([o({type:Number})],te.prototype,"min",void 0),s([o({type:Boolean})],te.prototype,"editable",void 0),s([o({type:Boolean})],te.prototype,"pin",void 0),s([o({type:Boolean})],te.prototype,"markers",void 0),s([o({type:Number})],te.prototype,"marker_limit",void 0),s([o({type:Boolean})],te.prototype,"disabled",void 0),s([o({type:Object})],te.prototype,"slider",void 0),s([o({type:Object})],te.prototype,"textfield",void 0),te=s([g("lablup-slider")],te);let ie=class extends x{constructor(){super(),this.is_connected=!1,this.direction="horizontal",this.location="",this.aliases=Object(),this.aggregate_updating=!1,this.resourceGauge=Object(),this.project_resource_monitor=!1,this.active=!1,this.resourceBroker=globalThis.resourceBroker,this.notification=globalThis.lablupNotification,this.init_resource()}static get is(){return"backend-ai-resource-monitor"}static get styles(){return[b,v,y,f,w,m`
        mwc-linear-progress {
          height: 5px;
          --mdc-theme-primary: #98be5a;
        }

        .horizontal-panel mwc-linear-progress {
          width: 90px;
        }

        .vertical-panel mwc-linear-progress {
          width: 180px;
        }

        #scaling-group-select-box {
          min-height: 61px;
        }

        .vertical-panel #resource-gauges {
          min-height: 200px;
        }

        mwc-linear-progress.project-bar {
          height: 15px;
        }

        mwc-linear-progress.start-bar {
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          --mdc-theme-primary: #3677eb;
        }

        mwc-linear-progress.middle-bar {
          --mdc-theme-primary: #4f8b46;
        }

        mwc-linear-progress.end-bar {
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          --mdc-theme-primary: #98be5a;
        }

        mwc-linear-progress.full-bar {
          border-radius: 3px;
          height: 10px;
        }

        .resources.horizontal .short-indicator mwc-linear-progress {
          width: 50px;
        }

        .resources.horizontal .short-indicator .gauge-label {
          width: 50px;
        }

        span.caption {
          width: 30px;
          display: block;
          font-size: 12px;
          padding-left: 10px;
        }

        div.caption {
          font-size: 12px;
          width: 100px;
        }

        #resource-gauges.horizontal {
          position: absolute;
          top: 48px;
          z-index: 100;
          left: 160px;
          width: 420px;
          height: 48px;
          color: #ffffff;
          background-color: transparent;
        }

        wl-icon {
          --icon-size: 24px;
        }

        img.resource-type-icon {
          width: 24px;
          height: 24px;
        }

        @media screen and (max-width: 749px) {
          #resource-gauge-toggle.horizontal {
            display: flex;
          }

          #resource-gauge-toggle.vertical {
            display: none;
          }

          #resource-gauges.horizontal {
            display: none;
          }

          #resource-gauges.vertical {
            display: flex;
          }

        }

        @media screen and (min-width: 750px) {
          #resource-gauge-toggle {
            display: none;
          }

          #resource-gauges.horizontal,
          #resource-gauges.vertical {
            display: flex;
          }
        }

        div.resource-type {
          font-size: 14px;
          width: 70px;
        }

        .resources.horizontal .monitor.session {
          margin-left: 5px;
        }

        .gauge-name {
          font-size: 10px;
        }

        .gauge-label {
          width: 100px;
          font-weight: 300;
          font-size: 12px;
        }

        .indicator {
          font-family: monospace;
        }

        .resource-button {
          height: 140px;
          width: 120px;
          margin: 5px;
          padding: 0;
          font-size: 14px;
        }

        #new-session-dialog {
          z-index: 100;
        }

        #scaling-group-select-box mwc-multi-select {
          width: 245px;
          margin-left: -4px;
          font-family: 'Quicksand', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", AppleSDGothic, "Apple SD Gothic Neo", NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
          --mdc-typography-subtitle1-font-family: 'Quicksand', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", AppleSDGothic, "Apple SD Gothic Neo", NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
          --mdc-typography-subtitle1-font-size: 14px;
          --mdc-typography-subtitle1-font-color: rgb(24, 24, 24);
          --mdc-typography-subtitle1-font-weight: 400;
          --mdc-typography-subtitle1-line-height: 16px;
          --mdc-select-fill-color: transparent;
          --mdc-select-label-ink-color: rgba(24, 24, 24, 1.0);
          --mdc-select-disabled-ink-color: rgba(24, 24, 24, 1.0);
          --mdc-select-dropdown-icon-color: rgba(24, 24, 24, 1.0);
          --mdc-select-focused-dropdown-icon-color: rgba(24, 24, 24, 0.87);
          --mdc-select-disabled-dropdown-icon-color: rgba(24, 24, 24, 0.87);
          --mdc-select-idle-line-color: transparent;
          --mdc-select-hover-line-color: rgba(255, 255, 255, 0.87);
          --mdc-select-ink-color: rgb(24, 24, 24);
          --mdc-select-outlined-idle-border-color: rgba(24, 24, 24, 0.42);
          --mdc-select-outlined-hover-border-color: rgba(24, 24, 24, 0.87);
          --mdc-theme-surface: white;
          --mdc-list-vertical-padding: 5px;
          --mdc-list-side-padding: 10px;
          --mdc-menu-item-height: 28px;
          --mdc-list-item__primary-text: {
            height: 20px;
            color: #222222;
          };
          margin-bottom: 5px;
        }

        #scaling-group-select {
          width: 245px;
        }

        wl-button.resource-button.iron-selected {
          --button-color: var(--paper-red-600);
          --button-bg: var(--paper-red-600);
          --button-bg-active: var(--paper-red-600);
          --button-bg-hover: var(--paper-red-600);
          --button-bg-active-flat: var(--paper-orange-50);
          --button-bg-flat: var(--paper-orange-50);
        }

        .resource-button h4 {
          padding: 5px 0;
          margin: 0;
          font-weight: 400;
        }

        .resource-button ul {
          padding: 0;
          list-style-type: none;
        }

        .resources .monitor {
          margin-right: 5px;
        }

        .resources.vertical .monitor {
          margin-bottom: 10px;
        }

        .resources.vertical .monitor div:first-child {
          width: 40px;
        }

        mwc-select,
        mwc-multi-select {
          width: 100%;
          font-family: 'Quicksand', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", AppleSDGothic, "Apple SD Gothic Neo", NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
          --mdc-typography-subtitle1-font-family: 'Quicksand', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", AppleSDGothic, "Apple SD Gothic Neo", NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
          --mdc-theme-primary: var(--paper-red-600);
          --mdc-select-fill-color: transparent;
          --mdc-select-label-ink-color: rgba(0, 0, 0, 0.75);
          --mdc-select-dropdown-icon-color: rgba(255, 0, 0, 0.87);
          --mdc-select-focused-dropdown-icon-color: rgba(255, 0, 0, 0.42);
          --mdc-select-disabled-dropdown-icon-color: rgba(255, 0, 0, 0.87);
          --mdc-select-idle-line-color: rgba(0, 0, 0, 0.42);
          --mdc-select-hover-line-color: rgba(255, 0, 0, 0.87);
          --mdc-select-outlined-idle-border-color: rgba(255, 0, 0, 0.42);
          --mdc-select-outlined-hover-border-color: rgba(255, 0, 0, 0.87);
          --mdc-theme-surface: white;
          --mdc-list-vertical-padding: 5px;
          --mdc-list-side-padding: 25px;
          --mdc-list-item__primary-text: {
            height: 20px;
          };
        }

        mwc-textfield {
          width: 100%;
          --mdc-text-field-idle-line-color: rgba(0, 0, 0, 0.42);
          --mdc-text-field-hover-line-color: rgba(255, 0, 0, 0.87);
          --mdc-text-field-fill-color: transparent;
          --mdc-theme-primary: var(--paper-red-600);
        }

        mwc-textfield#session-name {
          width: 50%;
          padding-top: 20px;
          padding-left: 0;
          margin-left: 0;
          margin-bottom: 1px;
        }

        wl-button[fab] {
          --button-fab-size: 70px;
          border-radius: 6px;
        }

        wl-label {
          margin-right: 10px;
          outline: none;
        }
      `]}init_resource(){this.total_slot={},this.total_resource_group_slot={},this.total_project_slot={},this.used_slot={},this.used_resource_group_slot={},this.used_project_slot={},this.available_slot={},this.used_slot_percent={},this.used_resource_group_slot_percent={},this.used_project_slot_percent={},this.concurrency_used=0,this.concurrency_max=0,this.concurrency_limit=0,this._status="inactive",this.scaling_groups=[{name:""}],this.scaling_group="",this.sessions_list=[],this.metric_updating=!1,this.metadata_updating=!1}firstUpdated(){this.resourceGauge=this.shadowRoot.querySelector("#resource-gauges"),document.body.clientWidth<750&&"horizontal"==this.direction&&(this.resourceGauge.style.display="none"),document.addEventListener("backend-ai-group-changed",e=>{this._updatePageVariables(!0)}),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.is_connected=!0},{once:!0}):this.is_connected=!0,document.addEventListener("backend-ai-session-list-refreshed",()=>{this._updatePageVariables(!0)})}_updateSelectedScalingGroup(){let e=this.shadowRoot.querySelector("#scaling-groups"),t=e.items.find(e=>e.value===this.resourceBroker.scaling_group),i=e.items.indexOf(t);e.select(i)}async updateScalingGroup(e=!1,t){if(await this.resourceBroker.updateScalingGroup(e,t.target.value),this.active){if("vertical"===this.direction){this.shadowRoot.querySelector("#scaling-group-select-box").firstChild.value=this.resourceBroker.scaling_group}!0===e&&(await this._refreshResourcePolicy(),this.aggregateResource("update-scaling-group"))}}async _viewStateChanged(e){await this.updateComplete,this.active&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.project_resource_monitor=this.resourceBroker.allow_project_resource_monitor,this._updatePageVariables(!0),this._disableEnterKey()},{once:!0}):(this.project_resource_monitor=this.resourceBroker.allow_project_resource_monitor,await this._updatePageVariables(!0),this._disableEnterKey()))}async _updatePageVariables(e){return this.active&&!1===this.metadata_updating?(this.metadata_updating=!0,await this.resourceBroker._updatePageVariables(e),setTimeout(()=>{this._updateScalingGroupSelector()},1e3),this.sessions_list=this.resourceBroker.sessions_list,await this._refreshResourcePolicy(),this.aggregateResource("update-page-variable"),this.metadata_updating=!1,Promise.resolve(!0)):Promise.resolve(!1)}_updateScalingGroupSelector(){if("vertical"===this.direction){const e=this.shadowRoot.querySelector("#scaling-group-select-box");e.hasChildNodes()&&e.removeChild(e.firstChild);const t=document.createElement("mwc-multi-select");t.label=k("session.launcher.ResourceGroup"),t.id="scaling-group-select",t.value=this.scaling_group,t.setAttribute("fullwidth","true"),t.setAttribute("icon","storage"),t.addEventListener("selected",this.updateScalingGroup.bind(this,!0));let i=document.createElement("mwc-list-item");i.setAttribute("disabled","true"),i.setAttribute("graphic","icon"),i.innerHTML=k("session.launcher.SelectResourceGroup"),i.style.borderBottom="1px solid #ccc",t.appendChild(i),this.resourceBroker.scaling_groups.map(e=>{i=document.createElement("mwc-list-item"),i.value=e.name,i.setAttribute("graphic","icon"),this.resourceBroker.scaling_group===e.name?i.selected=!0:i.selected=!1,i.innerHTML=e.name,t.appendChild(i)}),e.appendChild(t)}}async _refreshResourcePolicy(){return this.resourceBroker._refreshResourcePolicy().then(()=>{this.concurrency_used=this.resourceBroker.concurrency_used,this.concurrency_max=this.resourceBroker.concurrency_max}).catch(e=>{console.log(e),this.metadata_updating=!1,e&&e.message?(this.notification.text=S.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=S.relieve(e.title),this.notification.show(!0,e))})}_aliasName(e){let t={python:"Python",tensorflow:"TensorFlow",pytorch:"PyTorch",lua:"Lua",r:"R","r-base":"R",julia:"Julia",rust:"Rust",cpp:"C++",gcc:"GCC",go:"Go",tester:"Tester",haskell:"Haskell",matlab:"MATLAB",sagemath:"Sage",texlive:"TeXLive",java:"Java",php:"PHP",octave:"Octave",nodejs:"Node",caffe:"Caffe",scheme:"Scheme",scala:"Scala",base:"Base",cntk:"CNTK",h2o:"H2O.AI",digits:"DIGITS","ubuntu-linux":"Ubuntu Linux",tf1:"TensorFlow 1",tf2:"TensorFlow 2",py3:"Python 3",py2:"Python 2",py27:"Python 2.7",py35:"Python 3.5",py36:"Python 3.6",py37:"Python 3.7",py38:"Python 3.8",py39:"Python 3.9",lxde:"LXDE",lxqt:"LXQt",xfce:"XFCE",gnome:"GNOME",kde:"KDE","ubuntu16.04":"Ubuntu 16.04","ubuntu18.04":"Ubuntu 18.04","ubuntu20.04":"Ubuntu 20.04",intel:"Intel MKL",2018:"2018",2019:"2019",2020:"2020",2021:"2021",2022:"2022",tpu:"TPU:TPUv3",rocm:"GPU:ROCm",cuda9:"GPU:CUDA9",cuda10:"GPU:CUDA10","cuda10.0":"GPU:CUDA10","cuda10.1":"GPU:CUDA10.1","cuda10.2":"GPU:CUDA10.2","cuda10.3":"GPU:CUDA10.3",cuda11:"GPU:CUDA11","cuda11.0":"GPU:CUDA11","cuda11.1":"GPU:CUDA11.1","cuda11.2":"GPU:CUDA11.2",miniconda:"Miniconda","anaconda2018.12":"Anaconda 2018.12","anaconda2019.12":"Anaconda 2019.12","alpine3.8":"Alpine Linux 3.8",ngc:"Nvidia GPU Cloud",ff:"Research Env."};return e in t?t[e]:e}async _aggregateResourceUse(e=""){return this.resourceBroker._aggregateCurrentResource(e).then(t=>!1===t?setTimeout(()=>{this._aggregateResourceUse(e)},1e3):(this.concurrency_used=this.resourceBroker.concurrency_used,this.scaling_group=this.resourceBroker.scaling_group,this.scaling_groups=this.resourceBroker.scaling_groups,this.total_slot=this.resourceBroker.total_slot,this.total_resource_group_slot=this.resourceBroker.total_resource_group_slot,this.total_project_slot=this.resourceBroker.total_project_slot,this.used_slot=this.resourceBroker.used_slot,this.used_resource_group_slot=this.resourceBroker.used_resource_group_slot,this.used_project_slot=this.resourceBroker.used_project_slot,this.used_project_slot_percent=this.resourceBroker.used_project_slot_percent,this.concurrency_limit=this.resourceBroker.concurrency_limit,this.available_slot=this.resourceBroker.available_slot,this.used_slot_percent=this.resourceBroker.used_slot_percent,this.used_resource_group_slot_percent=this.resourceBroker.used_resource_group_slot_percent,Promise.resolve(!0))).catch(e=>(e&&e.message&&(console.log(e),this.notification.text=S.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)),Promise.resolve(!1)))}aggregateResource(e=""){void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._aggregateResourceUse(e)},!0):this._aggregateResourceUse(e)}_toggleResourceGauge(){""==this.resourceGauge.style.display||"flex"==this.resourceGauge.style.display||"block"==this.resourceGauge.style.display?this.resourceGauge.style.display="none":(document.body.clientWidth<750?(this.resourceGauge.style.left="20px",this.resourceGauge.style.right="20px",this.resourceGauge.style.backgroundColor="var(--paper-red-800)"):this.resourceGauge.style.backgroundColor="transparent",this.resourceGauge.style.display="flex")}_disableEnterKey(){this.shadowRoot.querySelectorAll("wl-expansion").forEach(e=>{e.onKeyDown=e=>{13===e.keyCode&&e.preventDefault()}})}render(){return l`
      ${"vertical"===this.direction?l`
      <div id="scaling-group-select-box" class="layout horizontal start-justified">
      </div>
      `:l``}
      <div class="layout horizontal">
        <mwc-icon-button id="resource-gauge-toggle" icon="assessment" class="fg blue ${this.direction}"
          @click="${()=>this._toggleResourceGauge()}">
        </mwc-icon-button>
        <div id="resource-gauges" class="layout ${this.direction} ${this.direction}-panel resources flex" style="align-items: flex-start">
        ${"horizontal"===this.direction?l`
          <div class="layout vertical end-justified wrap short-indicator">
            <span class="gauge-label">${$("session.launcher.TOTAL")}</span>
            <div style="font-size:8px;height:10px;">${$("session.launcher.RESOURCE")}</div>
            <span class="gauge-label">${$("session.launcher.MY")}</span>
          </div>
          `:l``}
          <div class="layout horizontal start-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <wl-icon class="fg blue">developer_board</wl-icon>
              <div class="gauge-name">CPU</div>
            </div>
            <div class="layout vertical start-justified wrap short-indicator">
              <span class="gauge-label">${this.used_resource_group_slot.cpu}/${this.total_resource_group_slot.cpu}</span>
              <mwc-linear-progress id="cpu-usage-bar" class="start-bar" progress="${this.used_resource_group_slot_percent.cpu/100}" buffer="${this.used_resource_group_slot_percent.cpu/100}"></mwc-linear-progress>
              <mwc-linear-progress id="cpu-usage-bar-2" class="end-bar" progress="${this.used_slot_percent.cpu/100}" buffer="${this.used_slot_percent.cpu/100}"></mwc-linear-progress>
              <span class="gauge-label">${this.used_slot.cpu}/${this.total_slot.cpu}</span>
            </div>
          </div>
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <wl-icon class="fg blue">memory</wl-icon>
              <span class="gauge-name">RAM</span>
            </div>
            <div class="layout vertical start-justified wrap">
              <span class="gauge-label">${this.used_resource_group_slot.mem}/${this.total_resource_group_slot.mem}GB</span>
              <mwc-linear-progress id="mem-usage-bar" class="start-bar" progress="${this.used_resource_group_slot_percent.mem/100}" buffer="${this.used_resource_group_slot_percent.mem/100}"></mwc-linear-progress>
              <mwc-linear-progress id="mem-usage-bar-2" class="end-bar" progress="${this.used_slot_percent.mem/100}" buffer="${this.used_slot_percent.mem/100}"></mwc-linear-progress>
              <span class="gauge-label">${this.used_slot.mem}/${this.total_slot.mem}GB</span>
            </div>
          </div>
          ${this.total_slot.cuda_device?l`
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <img class="resource-type-icon fg green" src="/resources/icons/file_type_cuda.svg" />
              <span class="gauge-name">GPU</span>
            </div>
            <div class="layout vertical center-justified wrap short-indicator">
              <span class="gauge-label">${this.used_resource_group_slot.cuda_device}/${this.total_resource_group_slot.cuda_device}</span>
              <mwc-linear-progress id="gpu-usage-bar" class="start-bar" progress="${this.used_resource_group_slot_percent.cuda_device/100}" buffer="${this.used_resource_group_slot_percent.cuda_device/100}"></mwc-linear-progress>
              <mwc-linear-progress id="gpu-usage-bar-2" class="end-bar" progress="${this.used_slot_percent.cuda_device/100}" buffer="${this.used_slot_percent.cuda_device/100}"></mwc-linear-progress>
              <span class="gauge-label">${this.used_slot.cuda_device}/${this.total_slot.cuda_device}</span>
            </div>
          </div>`:l``}
          ${this.total_slot.cuda_shares&&this.total_slot.cuda_shares>0?l`
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <img class="resource-type-icon fg green" src="/resources/icons/file_type_cuda.svg" />
              <span class="gauge-name">FGPU</span>
            </div>
            <div class="layout vertical start-justified wrap short-indicator">
              <span class="gauge-label">${this.used_resource_group_slot.cuda_shares}/${this.total_resource_group_slot.cuda_shares}</span>
              <mwc-linear-progress id="gpu-usage-bar" class="start-bar" progress="${this.used_resource_group_slot_percent.cuda_shares/100}" buffer="${this.used_resource_group_slot_percent.cuda_shares/100}"></mwc-linear-progress>
              <mwc-linear-progress id="gpu-usage-bar-2" class="end-bar" progress="${this.used_slot_percent.cuda_shares/100}" buffer="${this.used_slot_percent.cuda_shares/100}"></mwc-linear-progress>
              <span class="gauge-label">${this.used_slot.cuda_shares}/${this.total_slot.cuda_shares}</span>
            </div>
          </div>`:l``}
          ${this.total_slot.rocm_device_slot?l`
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <img class="resource-type-icon fg green" src="/resources/icons/ROCm.png" />
              <span class="gauge-name">ROCm<br/>GPU</span>
            </div>
            <div class="layout vertical center-justified wrap short-indicator">
              <span class="gauge-label">${this.used_resource_group_slot.rocm_device_slot}/${this.total_resource_group_slot.rocm_device_slot}</span>
              <mwc-linear-progress id="gpu-usage-bar" class="start-bar" progress="${this.used_resource_group_slot_percent.rocm_device_slot/100}" buffer="${this.used_resource_group_slot_percent.rocm_device_slot/100}"></mwc-linear-progress>
              <mwc-linear-progress id="gpu-usage-bar-2" class="end-bar" progress="${this.used_slot_percent.rocm_device_slot/100}" buffer="${this.used_slot_percent.rocm_device_slot/100}"></mwc-linear-progress>
              <span class="gauge-label">${this.used_slot.rocm_device_slot}/${this.total_slot.rocm_device_slot}</span>
            </div>
          </div>`:l``}
          ${this.total_slot.tpu_device_slot?l`
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <wl-icon class="fg blue">view_module</wl-icon>
              <span class="gauge-name">TPU</span>
            </div>
            <div class="layout vertical center-justified wrap short-indicator">
              <span class="gauge-label">${this.used_resource_group_slot.tpu_device_slot}/${this.total_resource_group_slot.tpu_device_slot}</span>
              <mwc-linear-progress id="gpu-usage-bar" class="start-bar" progress="${this.used_resource_group_slot_percent.tpu_device_slot/100}" buffer="${this.used_resource_group_slot_percent.tpu_device_slot/100}"></mwc-linear-progress>
              <mwc-linear-progress id="gpu-usage-bar-2" class="end-bar" progress="${this.used_slot_percent.tpu_device_slot/100}" buffer="${this.used_slot_percent.tpu_device_slot/100}"></mwc-linear-progress>
              <span class="gauge-label">${this.used_slot.tpu_device_slot}/${this.total_slot.tpu_device_slot}</span>
            </div>
          </div>`:l``}

          <div class="layout horizontal center-justified monitor session">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <wl-icon class="fg blue">assignment</wl-icon>
              <span class="gauge-name">${$("session.launcher.Session")}</span>
            </div>
            <div class="layout vertical start-justified wrap short-indicator">
              <span class="gauge-label">${this.concurrency_used}/${1e6===this.concurrency_max?l`∞`:this.concurrency_max}</span>
              <mwc-linear-progress class="short full-bar" id="concurrency-usage-bar" progress="${this.used_slot_percent.concurrency/100}"></mwc-linear-progress>
              <span class="gauge-label">&nbsp;</span>
            </div>
          </div>
        </div>
      </div>
      ${"vertical"===this.direction?l`
      <div class="vertical start-justified layout">
        <div class="layout horizontal center start-justified">
          <div style="width:10px;height:10px;margin-left:10px;margin-right:3px;background-color:#4775E3;"></div>
          <span style="margin-right:5px;">${$("session.launcher.CurrentResourceGroup")} (${this.scaling_group})</span>
        </div>
        <div class="layout horizontal center start-justified">
          <div style="width:10px;height:10px;margin-left:10px;margin-right:3px;background-color:#A0BD67"></div>
          <span style="margin-right:5px;">${$("session.launcher.UserResourceLimit")}</span>
        </div>
      </div>
      `:l``}
      ${"vertical"===this.direction&&!0===this.project_resource_monitor&&(this.total_project_slot.cpu>0||this.total_project_slot.cpu===1/0)?l`
      <hr />
      <div class="vertical start-justified layout">
        <div class="flex"></div>
        <div class="layout horizontal center-justified monitor">
          <div class="layout vertical center center-justified" style="margin-right:5px;">
            <wl-icon class="fg blue">group_work</wl-icon>
            <span class="gauge-name">${$("session.launcher.Project")}</span>
          </div>
          <div class="layout vertical start-justified wrap short-indicator">
            <div class="layout horizontal">
              <span style="width:35px; margin-left:5px; margin-right:5px;">CPU</span>
              <mwc-linear-progress id="cpu-project-usage-bar" class="start-bar project-bar" progress="${this.used_project_slot_percent.cpu/100}"></mwc-linear-progress>
              <span style="margin-left:5px;">${this.used_project_slot.cpu}/${this.total_project_slot.cpu===1/0?"∞":this.total_project_slot.cpu}</span>
            </div>
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">RAM</span>
              <mwc-linear-progress id="mem-project-usage-bar" class="middle-bar project-bar" progress="${this.used_project_slot_percent.mem/100}"></mwc-linear-progress>
              <span style="margin-left:5px;">${this.used_project_slot.mem}/${this.total_project_slot.mem===1/0?"∞":this.total_project_slot.mem}</span>
            </div>
            ${this.total_project_slot.cuda_device?l`
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">GPU</span>
              <mwc-linear-progress id="gpu-project-usage-bar" class="end-bar project-bar" progress="${this.used_project_slot_percent.cuda_device/100}"></mwc-linear-progress>
              <span style="margin-left:5px;">${this.used_project_slot.cuda_device}/${"Infinity"===this.total_project_slot.cuda_device?"∞":this.total_project_slot.cuda_device}</span>
            </div>`:l``}
            ${this.total_project_slot.cuda_shares?l`
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">fGPU</span>
              <mwc-linear-progress id="gpu-project-usage-bar" class="end-bar project-bar" progress="${this.used_project_slot_percent.cuda_shares/100}"></mwc-linear-progress>
              <span style="margin-left:5px;">${this.used_project_slot.cuda_shares}/${"Infinity"===this.total_project_slot.cuda_shares?"∞":this.total_project_slot.cuda_shares}</span>
            </div>`:l``}
            ${this.total_project_slot.rocm_device?l`
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">GPU</span>
              <mwc-linear-progress id="gpu-project-usage-bar" class="end-bar project-bar" progress="${this.used_project_slot_percent.rocm_device/100}"></mwc-linear-progress>
              <span style="margin-left:5px;">${this.used_project_slot.rocm_device}/${"Infinity"===this.total_project_slot.rocm_device?"∞":this.total_project_slot.rocm_device}</span>
            </div>`:l``}
            ${this.total_project_slot.tpu_device?l`
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">GPU</span>
              <mwc-linear-progress id="gpu-project-usage-bar" class="end-bar project-bar" progress="${this.used_project_slot_percent.tpu_device/100}"></mwc-linear-progress>
              <span style="margin-left:5px;">${this.used_project_slot.tpu_device}/${"Infinity"===this.total_project_slot.tpu_device?"∞":this.total_project_slot.cuda_device}</span>
            </div>`:l``}
          </div>
          <div class="flex"></div>
        </div>
      </div>
      `:l``}
`}};s([o({type:Boolean})],ie.prototype,"is_connected",void 0),s([o({type:String})],ie.prototype,"direction",void 0),s([o({type:String})],ie.prototype,"location",void 0),s([o({type:Object})],ie.prototype,"aliases",void 0),s([o({type:Object})],ie.prototype,"total_slot",void 0),s([o({type:Object})],ie.prototype,"total_resource_group_slot",void 0),s([o({type:Object})],ie.prototype,"total_project_slot",void 0),s([o({type:Object})],ie.prototype,"used_slot",void 0),s([o({type:Object})],ie.prototype,"used_resource_group_slot",void 0),s([o({type:Object})],ie.prototype,"used_project_slot",void 0),s([o({type:Object})],ie.prototype,"available_slot",void 0),s([o({type:Number})],ie.prototype,"concurrency_used",void 0),s([o({type:Number})],ie.prototype,"concurrency_max",void 0),s([o({type:Number})],ie.prototype,"concurrency_limit",void 0),s([o({type:Object})],ie.prototype,"used_slot_percent",void 0),s([o({type:Object})],ie.prototype,"used_resource_group_slot_percent",void 0),s([o({type:Object})],ie.prototype,"used_project_slot_percent",void 0),s([o({type:String})],ie.prototype,"default_language",void 0),s([o({type:Boolean})],ie.prototype,"_status",void 0),s([o({type:Number})],ie.prototype,"num_sessions",void 0),s([o({type:String})],ie.prototype,"scaling_group",void 0),s([o({type:Array})],ie.prototype,"scaling_groups",void 0),s([o({type:Array})],ie.prototype,"sessions_list",void 0),s([o({type:Boolean})],ie.prototype,"metric_updating",void 0),s([o({type:Boolean})],ie.prototype,"metadata_updating",void 0),s([o({type:Boolean})],ie.prototype,"aggregate_updating",void 0),s([o({type:Object})],ie.prototype,"scaling_group_selection_box",void 0),s([o({type:Object})],ie.prototype,"resourceGauge",void 0),s([o({type:Boolean})],ie.prototype,"project_resource_monitor",void 0),s([o({type:Object})],ie.prototype,"resourceBroker",void 0),ie=s([g("backend-ai-resource-monitor")],ie);let se=class extends G{render(){return l` <div id="dot"></div> <wl-ripple id="ripple" .target="${this}" focusable overlay unbounded centered initialDuration="200"></wl-ripple> <slot></slot> ${this.renderFormElement()} `}};se.styles=[...G.styles,R(":host{--_radio-bg:var(--radio-bg,transparent);--_radio-color:var(--radio-color,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))));background:var(--_radio-bg);color:var(--_radio-color);width:var(--radio-size,1.25rem);height:var(--radio-size,1.25rem);border:var(--radio-border-config,.125rem solid) currentColor;border-radius:var(--radio-border-radius,100%);transition:var(--radio-transition,background var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),border-color var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));position:relative;display:inline-flex;align-items:center;justify-content:center;outline:none;-webkit-user-select:none;user-select:none}:host(:not([disabled])){cursor:pointer}:host([checked]){--_radio-bg:var(--radio-bg-checked,transparent);--_radio-color:var(--radio-color-checked,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}:host([checked]) #dot{transform:scale(1)}:host(:focus),:host(:hover){will-change:border,background}:host(:focus) #dot,:host(:hover) #dot{will-change:transform,background}:host([disabled]){--_radio-bg:var(--radio-bg-disabled,transparent);--_radio-color:var(--radio-color-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));pointer-events:none}:host([disabled][checked]){--_radio-bg:var(--radio-bg-disabled-checked,transparent);--_radio-color:var(--radio-color-disabled-checked,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))))}#dot{background:currentColor;width:var(--radio-dot-size,.625rem);height:var(--radio-dot-size,.625rem);border-radius:var(--radio-dot-border-radius,100%);transition:var(--radio-dot-transition,transform var(--transition-duration-medium,.18s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));transform:scale(0)}#ripple{transform:var(--radio-ripple-transform,translate(-50%,-50%) scale(1.8))}")],se=s([g("wl-radio")],se);let re=class extends T{constructor(){super(...arguments),this.role="slider",this.thumbLabel=!1,this.min=0,this.max=100,this.bufferMin=0,this.bufferMax=100}get $interactiveElement(){return this.$slider}get perc(){return(this.$slider.valueAsNumber-this.min)/(this.max-this.min)}get bufferPerc(){return((this.bufferValue||0)-this.bufferMin)/(this.bufferMax-this.bufferMin)}updated(e){super.updated(e),this.updateBackground()}setValue(e){super.setValue(e),null!=this.$slider&&(this.$slider.value=e,this.updateBackground(),this.requestUpdate().then())}updateBackground(){requestAnimationFrame(()=>{this.style.setProperty("--_perc",this.perc.toString()),this.style.setProperty("--_buffer-perc",this.bufferPerc.toString())})}sliderValueChanged(){this.value=this.$slider.value,this.requestUpdate().then()}renderFormElement(e,t,i,s){return l` <input type="range" style="${C(t)}" id="${C(e)}" .value="${this.value}" ?required="${this.required}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" aria-label="${C(this.label)}" name="${C(this.name)}" autocomplete="${C(this.autocomplete)}" min="${C(this.min)}" max="${C(this.max)}" step="${C(this.step)}" @input="${i||(()=>{})}" tabindex="${s||this.disabled?-1:0}"> `}render(){return l` <div id="container"> <slot id="before" name="before"></slot> <div id="wrapper"> <div id="label">${this.label}</div> <div id="slot-wrapper"> ${this.renderFormElement("slider",void 0,this.sliderValueChanged)} ${this.thumbLabel?l` <div id="thumb-container"> <div id="thumb-label"><slot name="thumb-label">${this.value}</slot></div> </div> `:A} <slot id="slot"></slot> </div> ${this.renderFormElement(this.formElementId,"display: none",void 0,"-1")} </div> <slot id="after" name="after"></slot> </div> `}};re.styles=[...T.styles,R(':host{--_buffer-perc:0;--_perc:0;--_slider-track-bg:var(--slider-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.3));--_slider-track-bg-buffer:var(--slider-bg-buffer,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.6));--_slider-track-bg-active:var(--slider-bg-active,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_slider-thumb-bg:var(--slider-thumb-bg,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}:host([disabled]){--_slider-track-bg:var(--slider-bg-disabled,hsla(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%)),0.3));--_slider-track-bg-buffer:var(--slider-bg-buffer-disabled,hsla(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%)),0.6));--_slider-track-bg-active:var(--slider-bg-active-disabled,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))));--_slider-thumb-bg:var(--slider-thumb-bg-disabled,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))))}#container{overflow:visible;border:none}#slider{height:var(--slider-height,.3125rem);background:linear-gradient(90deg,var(--_slider-track-bg-active) 0,var(--_slider-track-bg-active) calc(var(--_perc) * 100%),var(--_slider-track-bg-buffer) calc(var(--_perc) * 100%),var(--_slider-track-bg-buffer) calc(var(--_buffer-perc) * 100%),var(--_slider-track-bg) calc(var(--_buffer-perc) * 100%),var(--_slider-track-bg));cursor:grab;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;outline:none;box-sizing:border-box;margin:0;border-radius:0;top:calc((var(--slider-height, .3125rem) * -1) / 2)}#slider,#thumb-container{width:100%;position:relative}#thumb-label{--_thumb-label-transform-y:0.625rem;left:calc((var(--_perc) * 100%) - (var(--slider-thumb-size, .75rem) * var(--_perc)));transform:translate(calc(-50% + (var(--slider-thumb-size, .75rem) / 2)),var(--_thumb-label-transform-y));width:var(--slider-thumb-label-size,1.875rem);height:var(--slider-thumb-label-size,1.875rem);border-radius:var(--slider-thumb-label-border-radius,100%);color:var(--slider-thumb-label-color,hsl(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));font-size:var(--slider-thumb-label-font-size,.75rem);transition:var(--slider-thumb-label-transition,opacity var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));opacity:0;display:flex;align-items:center;justify-content:center;pointer-events:none;text-overflow:ellipsis;bottom:calc(100% + var(--slider-thumb-size, .75rem) + var(--slider-height, .3125rem) + var(--slider-thumb-space, .75rem))}#thumb-label,#thumb-label:before{background:var(--slider-thumb-label-bg,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));position:absolute}#thumb-label:before{content:"";border-radius:0 50% 50% 50%;transform:rotate(225deg);width:100%;left:0;top:0;height:100%;z-index:-1}#slider:focus+#thumb-container #thumb-label,:host:focus #thumb-label{--_thumb-label-transform-y:0;opacity:1}#slider::-webkit-slider-thumb{background:var(--_slider-thumb-bg);width:var(--slider-thumb-size,.75rem);height:var(--slider-thumb-size,.75rem);border-radius:var(--slider-thumb-border-radius,100%);-webkit-transition:var(--slider-thumb-transition,transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));transition:var(--slider-thumb-transition,transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));box-shadow:0 0 0 0 var(--slider-thumb-focus-ring-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.1));-webkit-appearance:none;appearance:none;border:none;cursor:grab;position:relative}#slider::-moz-range-thumb{background:var(--_slider-thumb-bg);width:var(--slider-thumb-size,.75rem);height:var(--slider-thumb-size,.75rem);border-radius:var(--slider-thumb-border-radius,100%);-moz-transition:var(--slider-thumb-transition,transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));transition:var(--slider-thumb-transition,transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));box-shadow:0 0 0 0 var(--slider-thumb-focus-ring-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.1));-moz-appearance:none;appearance:none;border:none;cursor:grab;position:relative}#slider:focus::-webkit-slider-thumb{transform:var(--slider-thumb-transform-focus,scale(1.2));box-shadow:0 0 0 var(--slider-thumb-focus-ring-size,.75rem) var(--slider-thumb-focus-ring-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.1))}#slider:focus::-moz-range-thumb{transform:var(--slider-thumb-transform-focus,scale(1.2));box-shadow:0 0 0 var(--slider-thumb-focus-ring-size,.75rem) var(--slider-thumb-focus-ring-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.1))}')],s([o({type:String,reflect:!0}),j("design:type",String)],re.prototype,"role",void 0),s([o({type:Boolean}),j("design:type",Boolean)],re.prototype,"thumbLabel",void 0),s([o({type:Number}),j("design:type",Number)],re.prototype,"min",void 0),s([o({type:Number}),j("design:type",Number)],re.prototype,"max",void 0),s([o({type:Number}),j("design:type",Number)],re.prototype,"step",void 0),s([o({type:Number}),j("design:type",Number)],re.prototype,"bufferMin",void 0),s([o({type:Number}),j("design:type",Number)],re.prototype,"bufferMax",void 0),s([o({type:Number}),j("design:type",Number)],re.prototype,"bufferValue",void 0),s([r("#slider"),j("design:type",HTMLInputElement)],re.prototype,"$slider",void 0),re=s([g("wl-slider")],re);let oe=class extends x{constructor(){super(),this.is_connected=!1,this.enableLaunchButton=!1,this.hideLaunchButton=!1,this.location="",this.mode="normal",this.newSessionDialogTitle="",this.importScript="",this.importFilename="",this.imageRequirements=Object(),this.resourceLimits=Object(),this.userResourceLimit=Object(),this.aliases=Object(),this.tags=Object(),this.icons=Object(),this.imageInfo=Object(),this.kernel="",this.marker_limit=25,this.gpu_modes=[],this.gpu_step=.05,this.cpu_metric={min:"1",max:"1"},this.mem_metric={min:"1",max:"1"},this.shmem_metric={min:.0625,max:1,preferred:.0625},this.cuda_device_metric={min:0,max:0},this.rocm_device_metric={min:"0",max:"0"},this.tpu_device_metric={min:"1",max:"1"},this.aggregate_updating=!1,this.resourceGauge=Object(),this.ownerFeatureInitialized=!1,this.ownerDomain="",this.project_resource_monitor=!1,this.version_selector=Object(),this._default_language_updated=!1,this._default_version_updated=!1,this._helpDescription="",this._helpDescriptionTitle="",this._helpDescriptionIcon="",this.max_cpu_core_per_session=64,this.max_cuda_device_per_session=16,this.max_shm_per_session=2,this.active=!1,this.ownerKeypairs=[],this.ownerGroups=[],this.ownerScalingGroups=[],this.resourceBroker=globalThis.resourceBroker,this.notification=globalThis.lablupNotification,this.init_resource()}static get is(){return"backend-ai-session-launcher"}static get styles(){return[b,v,y,f,w,m`
        wl-card h4 {
          padding: 5px 20px;
          border-bottom: 1px solid #dddddd;
          font-weight: 100;
        }

        lablup-slider {
          width: 210px !important;
          --textfield-width: 50px;
          --slider-width: 135px;
        }

        lablup-slider.mem,
        lablup-slider.shmem {
          --slider-color: var(--paper-orange-400);
        }

        lablup-slider.cpu {
          --slider-color: var(--paper-light-green-400);
        }

        lablup-slider.gpu {
          --slider-color: var(--paper-cyan-400);
        }

        lablup-slider.session {
          --slider-color: var(--paper-pink-400);
        }

        mwc-linear-progress {
          width: 90px;
          height: 5px;
          --mdc-theme-primary: #98be5a;
        }

        mwc-linear-progress.project-bar {
          height: 15px;
        }

        mwc-linear-progress.start-bar {
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          --mdc-theme-primary: #3677eb;
        }

        mwc-linear-progress.middle-bar {
          --mdc-theme-primary: #4f8b46;
        }

        mwc-linear-progress.end-bar {
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          --mdc-theme-primary: #98be5a;
        }

        mwc-linear-progress.full-bar {
          border-radius: 3px;
          height: 10px;
        }

        .resources.horizontal .short-indicator mwc-linear-progress {
          width: 50px;
        }

        .resources.horizontal .short-indicator .gauge-label {
          width: 50px;
        }

        span.caption {
          width: 30px;
          display: block;
          font-size: 12px;
          padding-left: 10px;
        }

        div.caption {
          font-size: 12px;
          width: 100px;
        }

        wl-icon {
          --icon-size: 24px;
        }

        img.resource-type-icon {
          width: 24px;
          height: 24px;
        }

        div.resource-type {
          font-size: 14px;
          width: 70px;
        }

        .resources.horizontal .monitor.session {
          margin-left: 5px;
        }

        .gauge-name {
          font-size: 10px;
        }

        .gauge-label {
          width: 100px;
          font-weight: 300;
          font-size: 12px;
        }

        .indicator {
          font-family: monospace;
        }

        .resource-button {
          height: 140px;
          width: 330px;
          margin: 5px;
          padding: 0;
          font-size: 14px;
        }

        #new-session-dialog {
          z-index: 100;
        }

        .resource-button.iron-selected {
          --button-color: var(--paper-red-600);
          --button-bg: var(--paper-red-600);
          --button-bg-active: var(--paper-red-600);
          --button-bg-hover: var(--paper-red-600);
          --button-bg-active-flat: var(--paper-orange-50);
          --button-bg-flat: var(--paper-orange-50);
        }

        .resource-button h4 {
          padding: 5px 0;
          margin: 0;
          font-weight: 400;
        }

        .resource-button ul {
          padding: 0;
          list-style-type: none;
        }

        #scaling-groups {
          width: 50%;
        }

        #launch-session {
          height: var(--component-height, auto);
          width: var(--component-width, auto);
          --button-color: var(--paper-red-600);
          --button-bg: var(--paper-red-50);
          --button-bg-hover: var(--paper-red-100);
          --button-bg-active: var(--paper-red-600);
        }

        #launch-session[disabled] {
          --button-color: var(--paper-gray-600);
          --button-color-disabled: var(--paper-gray-600);
          --button-bg: var(--paper-gray-50);
          --button-bg-hover: var(--paper-gray-100);
          --button-bg-active: var(--paper-gray-600);
        }

        wl-button.launch-button {
          width: 335px;
          --button-bg: var(--paper-red-50);
          --button-bg-active: var(--paper-red-300);
          --button-bg-hover: var(--paper-red-300);
          --button-bg-active-flat: var(--paper-orange-50);
          --button-color: var(--paper-red-600);
          --button-color-active: red;
          --button-color-hover: red;
        }

        wl-button.launch-confirmation-button {
          width: 335px;
          --button-bg: var(--paper-red-50);
          --button-bg-active: var(--paper-red-300);
          --button-bg-hover: var(--paper-red-300);
          --button-bg-active-flat: var(--paper-orange-50);
          --button-color: var(--paper-red-600);
          --button-color-active: red;
          --button-color-hover: red;
        }

        wl-button.resource-button {
          --button-bg: white;
          --button-bg-active: var(--paper-red-600);
          --button-bg-hover: var(--paper-red-600);
          --button-bg-active-flat: var(--paper-orange-50);
          --button-color: #8899aa;
          --button-color-active: red;
          --button-color-hover: red;
        }

        wl-expansion {
          --font-family-serif: 'Quicksand', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", AppleSDGothic, "Apple SD Gothic Neo", NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
          --expansion-elevation: 0;
          --expansion-elevation-open: 0;
          --expansion-elevation-hover: 0;
          --expansion-margin-open: 0;
        }

        wl-expansion span {
          font-size: 20px;
          font-weight: 200;
          display: block;
        }

        .resources .monitor {
          margin-right: 5px;
        }

        .resources.vertical .monitor {
          margin-bottom: 10px;
        }

        .resources.vertical .monitor div:first-child {
          width: 40px;
        }

        mwc-select,
        mwc-multi-select {
          width: 100%;
          font-family: 'Quicksand', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", AppleSDGothic, "Apple SD Gothic Neo", NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
          --mdc-typography-subtitle1-font-family: 'Quicksand', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", AppleSDGothic, "Apple SD Gothic Neo", NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
          --mdc-theme-primary: var(--paper-red-600);
          --mdc-select-fill-color: transparent;
          --mdc-select-label-ink-color: rgba(0, 0, 0, 0.75);
          --mdc-select-dropdown-icon-color: rgba(255, 0, 0, 0.87);
          --mdc-select-focused-dropdown-icon-color: rgba(255, 0, 0, 0.42);
          --mdc-select-disabled-dropdown-icon-color: rgba(255, 0, 0, 0.87);
          --mdc-select-idle-line-color: rgba(0, 0, 0, 0.42);
          --mdc-select-hover-line-color: rgba(255, 0, 0, 0.87);
          --mdc-select-outlined-idle-border-color: rgba(255, 0, 0, 0.42);
          --mdc-select-outlined-hover-border-color: rgba(255, 0, 0, 0.87);
          --mdc-theme-surface: white;
          --mdc-list-vertical-padding: 5px;
          --mdc-list-side-padding: 25px;
          --mdc-list-item__primary-text: {
            height: 20px;
          };
        }

        mwc-multi-select#scaling-groups {
          margin-right: 0;
          padding-right: 0;
          width: 50%;
          --mdc-select-min-width: 190px;
        }

        mwc-textfield {
          width: 100%;
          --mdc-text-field-idle-line-color: rgba(0, 0, 0, 0.42);
          --mdc-text-field-hover-line-color: rgba(255, 0, 0, 0.87);
          --mdc-text-field-fill-color: transparent;
          --mdc-theme-primary: var(--paper-red-600);
        }

        mwc-textfield#session-name {
          width: 50%;
          padding-top: 20px;
          padding-left: 0;
          margin-left: 0;
          margin-bottom: 1px;
        }

        #environment {
          --mdc-menu-item-height: 40px;
          z-index: 10000;
          max-height: 300px;
        }

        #version {
          --mdc-menu-item-height: 35px;
        }

        #vfolder {
          width: 100%;
        }

        #vfolder mwc-list-item[disabled] {
          background-color: rgba(255, 0, 0, 0.04) !important;
        }

        wl-button[fab] {
          --button-fab-size: 70px;
          border-radius: 6px;
        }

        wl-label {
          margin-right: 10px;
          outline: none;
        }

        #help-description {
          --component-width: 350px;
        }

        #help-description p {
          padding: 5px !important;
        }

        #new-session-dialog {
          --component-width: 400px;
        }

        #launch-confirmation-dialog {
          --component-width: 400px;
          --component-font-size: 14px;
        }

        mwc-icon-button.info {
          --mdc-icon-button-size: 30px;
        }
      `]}init_resource(){this.versions=["Not Selected"],this.languages=[],this.gpu_mode="none",this.total_slot={},this.total_resource_group_slot={},this.total_project_slot={},this.used_slot={},this.used_resource_group_slot={},this.used_project_slot={},this.available_slot={},this.used_slot_percent={},this.used_resource_group_slot_percent={},this.used_project_slot_percent={},this.resource_templates=[],this.resource_templates_filtered=[],this.vfolders=[],this.default_language="",this.concurrency_used=0,this.concurrency_max=0,this.concurrency_limit=0,this._status="inactive",this.cpu_request=1,this.mem_request=1,this.shmem_request=.0625,this.gpu_request=0,this.gpu_request_type="cuda.device",this.session_request=1,this.scaling_groups=[{name:""}],this.scaling_group="",this.sessions_list=[],this.metric_updating=!1,this.metadata_updating=!1,this.ownerFeatureInitialized=!1,this.ownerDomain="",this.ownerKeypairs=[],this.ownerGroups=[],this.ownerScalingGroups=[]}firstUpdated(){this.shadowRoot.querySelector("#environment").addEventListener("selected",this.updateLanguage.bind(this)),this.version_selector=this.shadowRoot.querySelector("#version"),this.version_selector.addEventListener("selected",()=>{this.updateResourceAllocationPane()}),this.resourceGauge=this.shadowRoot.querySelector("#resource-gauges");const e=this.shadowRoot.querySelector("#gpu-resource");e.addEventListener("value-changed",()=>{e.value>0?this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!0:this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!1}),this.shadowRoot.querySelector("#use-gpu-checkbox").addEventListener("change",()=>{!0===this.shadowRoot.querySelector("#use-gpu-checkbox").checked?this.shadowRoot.querySelector("#gpu-resource").disabled=this.cuda_device_metric.min===this.cuda_device_metric.max:this.shadowRoot.querySelector("#gpu-resource").disabled=!0}),document.addEventListener("backend-ai-group-changed",e=>{this._updatePageVariables(!0)}),document.addEventListener("backend-ai-resource-broker-updated",e=>{}),!0===this.hideLaunchButton&&(this.shadowRoot.querySelector("#launch-session").style.display="none"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.is_connected=!0,this._enableLaunchButton()},{once:!0}):(this.is_connected=!0,this._enableLaunchButton())}_enableLaunchButton(){this.resourceBroker.image_updating?setTimeout(()=>{this._enableLaunchButton()},1e3):(this.languages=this.resourceBroker.languages,this.enableLaunchButton=!0)}_updateSelectedScalingGroup(){let e=this.shadowRoot.querySelector("#scaling-groups");this.scaling_groups=this.resourceBroker.scaling_groups;let t=e.items.find(e=>e.value===this.resourceBroker.scaling_group);if(""===this.resourceBroker.scaling_group||void 0===t)return void setTimeout(()=>{this._updateSelectedScalingGroup()},500);let i=e.items.indexOf(t);e.select(-1),e.select(i),e.value=t.value,e.requestUpdate()}async updateScalingGroup(e=!1,t){this.active&&(await this.resourceBroker.updateScalingGroup(e,t.target.value),!0===e?await this._refreshResourcePolicy():this.updateResourceAllocationPane("session dialog"))}_updateSelectedFolder(){let e=this.shadowRoot.querySelector("#vfolder"),t=e.value,i=Array();e.items.map((e,s)=>{t.indexOf(e.value)>-1&&i.push(s)}),e.select(i)}async _viewStateChanged(e){await this.updateComplete,this.active&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.project_resource_monitor=this.resourceBroker.allow_project_resource_monitor,this._updatePageVariables(!0),this._disableEnterKey()},{once:!0}):(this.project_resource_monitor=this.resourceBroker.allow_project_resource_monitor,await this._updatePageVariables(!0),this._disableEnterKey()))}async _updatePageVariables(e){this.active&&!1===this.metadata_updating&&(this.metadata_updating=!0,await this.resourceBroker._updatePageVariables(e),this._updateSelectedScalingGroup(),this.sessions_list=this.resourceBroker.sessions_list,await this._refreshResourcePolicy(),this.aggregateResource("update-page-variable"),this.metadata_updating=!1)}async _refreshResourcePolicy(){return this.resourceBroker._refreshResourcePolicy().then(()=>{this.concurrency_used=this.resourceBroker.concurrency_used,this.userResourceLimit=this.resourceBroker.userResourceLimit,this.concurrency_max=this.resourceBroker.concurrency_max,this.gpu_mode=this.resourceBroker.gpu_mode,this.gpu_step=this.resourceBroker.gpu_step,this.gpu_modes=this.resourceBroker.gpu_modes,this.updateResourceAllocationPane("refresh resource policy")}).catch(e=>{console.log(e),this.metadata_updating=!1,e&&e.message?(this.notification.text=S.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=S.relieve(e.title),this.notification.show(!0,e))})}async _launchSessionDialog(){if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready||!0===this.resourceBroker.image_updating)setTimeout(()=>{this._launchSessionDialog()},1e3);else{await this.selectDefaultLanguage();this.shadowRoot.querySelector("#gpu-resource").value>0?this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!0:this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!1;const e=this.shadowRoot.querySelector('wl-expansion[name="ownership"]');globalThis.backendaiclient.is_admin?e.style.display="block":e.style.display="none",this._updateSelectedScalingGroup(),this.requestUpdate(),this.shadowRoot.querySelector("#new-session-dialog").show()}}_generateKernelIndex(e,t){return e+":"+t}_newSessionWithConfirmation(){if(0!==this.shadowRoot.querySelector("#vfolder").value.length)return this._newSession();this.shadowRoot.querySelector("#launch-confirmation-dialog").show()}_newSession(){this.shadowRoot.querySelector("#launch-confirmation-dialog").hide();let e=this.shadowRoot.querySelector("#environment").selected.id,t=this.shadowRoot.querySelector("#version").value,i=this.shadowRoot.querySelector("#session-name").value,s=this.shadowRoot.querySelector("#vfolder").value;if(this.cpu_request=this.shadowRoot.querySelector("#cpu-resource").value,this.mem_request=this.shadowRoot.querySelector("#mem-resource").value,this.shmem_request=this.shadowRoot.querySelector("#shmem-resource").value,this.gpu_request=this.shadowRoot.querySelector("#gpu-resource").value,this.session_request=this.shadowRoot.querySelector("#session-resource").value,this.num_sessions=this.session_request,this.sessions_list.includes(i))return this.notification.text="Duplicate session name not allowed.",void this.notification.show();if(""===e||""===t||"Not Selected"===t)return this.notification.text=k("session.launcher.MustSpecifyVersion"),void this.notification.show();this.scaling_group=this.shadowRoot.querySelector("#scaling-groups").value;let r={};r.group_name=globalThis.backendaiclient.current_group,r.domain=globalThis.backendaiclient._config.domainName,r.scaling_group=this.scaling_group,r.maxWaitSeconds=10;const o=this.shadowRoot.querySelector("#owner-enabled");if(o&&o.checked&&(r.group_name=this.shadowRoot.querySelector("#owner-group").selectedItemLabel,r.domain=this.ownerDomain,r.scaling_group=this.shadowRoot.querySelector("#owner-scaling-group").selectedItemLabel,r.owner_access_key=this.shadowRoot.querySelector("#owner-accesskey").selectedItemLabel,!(r.group_name&&r.domain&&r.scaling_group&&r.owner_access_key)))return this.notification.text=k("session.launcher.NotEnoughOwnershipInfo"),void this.notification.show();switch(r.cpu=this.cpu_request,this.gpu_request_type){case"cuda.shares":r["cuda.shares"]=this.gpu_request;break;case"cuda.device":r["cuda.device"]=this.gpu_request;break;case"rocm.device":r["rocm.device"]=this.gpu_request;break;case"tpu.device":r["tpu.device"]=this.gpu_request;break;default:this.gpu_request>0&&this.gpu_mode&&(r[this.gpu_mode]=this.gpu_request)}"Infinity"===String(this.shadowRoot.querySelector("#mem-resource").value)?r.mem=String(this.shadowRoot.querySelector("#mem-resource").value):r.mem=String(this.mem_request)+"g",this.shmem_request>this.mem_request&&(this.shmem_request=this.mem_request,this.notification.text="Shared memory setting is reduced to below the allocated memory.",this.notification.show()),this.mem_request>4&&this.shmem_request<1&&(this.shmem_request=1),r.shmem=String(this.shmem_request)+"g",!0!==this.shadowRoot.querySelector("#use-gpu-checkbox").checked&&("cuda.shares"==this.gpu_mode?r.fgpu=0:r.gpu=0),0==i.length&&(i=this.generateSessionId()),0!==s.length&&(r.mounts=s),"import"===this.mode&&""!==this.importScript&&(r.bootstrap_script=this.importScript);const a=this._generateKernelIndex(e,t);this.shadowRoot.querySelector("#launch-button").disabled=!0,this.shadowRoot.querySelector("#launch-button-msg").textContent="Preparing...",this.notification.text="Preparing session...",this.notification.show();let n=[];const c=this._getRandomString();if(this.num_sessions>1)for(let e=1;e<=this.num_sessions;e++){let t={kernelName:a,sessionName:`${i}-${c}-${e}`,config:r};n.push(t)}else n.push({kernelName:a,sessionName:i,config:r});const l=n.map(e=>this.tasker.add("Creating "+e.sessionName,this._createKernel(e.kernelName,e.sessionName,e.config),"","session"));Promise.all(l).then(e=>{this.shadowRoot.querySelector("#new-session-dialog").hide(),this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent=k("session.launcher.Launch"),setTimeout(()=>{this.metadata_updating=!0,this.aggregateResource("session-creation"),this.metadata_updating=!1},1500);let t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t),1===e.length&&e[0].taskobj.then(e=>{let t;t="kernelId"in e?{"session-name":e.kernelId,"access-key":""}:{"session-name":e.sessionId,"access-key":""};let i=e.servicePorts;!0===Array.isArray(i)?t["app-services"]=i.map(e=>e.name):t["app-services"]=[],"import"===this.mode&&(t.runtime="jupyter",t.filename=this.importFilename),globalThis.appLauncher.showLauncher(t)})}).catch(e=>{this.metadata_updating=!1,e&&e.message?(this.notification.text=S.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=S.relieve(e.title),this.notification.show(!0,e));let t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t),this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent=k("session.launcher.Launch")})}_getRandomString(){let e=Math.floor(52*Math.random()*52*52);let t="";for(let s=0;s<3;s++)t+=(i=e%52)<26?String.fromCharCode(65+i):String.fromCharCode(97+i-26),e=Math.floor(e/52);var i;return t}_createKernel(e,t,i){return globalThis.backendaiclient.createKernel(e,t,i,1e4)}_hideSessionDialog(){this.shadowRoot.querySelector("#new-session-dialog").hide()}_aliasName(e){let t={python:"Python",tensorflow:"TensorFlow",pytorch:"PyTorch",lua:"Lua",r:"R","r-base":"R",julia:"Julia",rust:"Rust",cpp:"C++",gcc:"GCC",go:"Go",tester:"Tester",haskell:"Haskell",matlab:"MATLAB",sagemath:"Sage",texlive:"TeXLive",java:"Java",php:"PHP",octave:"Octave",nodejs:"Node",caffe:"Caffe",scheme:"Scheme",scala:"Scala",base:"Base",cntk:"CNTK",h2o:"H2O.AI",digits:"DIGITS","ubuntu-linux":"Ubuntu Linux",tf1:"TensorFlow 1",tf2:"TensorFlow 2",py3:"Python 3",py2:"Python 2",py27:"Python 2.7",py35:"Python 3.5",py36:"Python 3.6",py37:"Python 3.7",py38:"Python 3.8",py39:"Python 3.9",lxde:"LXDE",lxqt:"LXQt",xfce:"XFCE",gnome:"GNOME",kde:"KDE","ubuntu16.04":"Ubuntu 16.04","ubuntu18.04":"Ubuntu 18.04","ubuntu20.04":"Ubuntu 20.04",intel:"Intel MKL",2018:"2018",2019:"2019",2020:"2020",2021:"2021",2022:"2022",tpu:"TPU:TPUv3",rocm:"GPU:ROCm",cuda9:"GPU:CUDA9",cuda10:"GPU:CUDA10","cuda10.0":"GPU:CUDA10","cuda10.1":"GPU:CUDA10.1","cuda10.2":"GPU:CUDA10.2","cuda10.3":"GPU:CUDA10.3",cuda11:"GPU:CUDA11","cuda11.0":"GPU:CUDA11","cuda11.1":"GPU:CUDA11.1","cuda11.2":"GPU:CUDA11.2",miniconda:"Miniconda","anaconda2018.12":"Anaconda 2018.12","anaconda2019.12":"Anaconda 2019.12","alpine3.8":"Alpine Linux 3.8",ngc:"Nvidia GPU Cloud",ff:"Research Env."};return e in t?t[e]:e}_updateVersions(e){if(e in this.resourceBroker.supports){{this.version_selector.disabled=!0;let t=this.resourceBroker.supports[e];t.sort(),t.reverse(),this.versions=t,this.kernel=e}return void 0!==this.versions?this.version_selector.layout(!0).then(()=>{this.version_selector.select(1),this.version_selector.value=this.versions[0],this._updateVersionSelectorText(this.version_selector.value),this.version_selector.disabled=!1,this.updateResourceAllocationPane("update versions")}):void 0}}_updateVersionSelectorText(e){let t=this._getVersionInfo(e),i=[];t.forEach(e=>{i.push(e.tag)}),this.version_selector.selectedText=i.join(" / ")}generateSessionId(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=0;i<8;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e+"-console"}async _updateVirtualFolderList(){return this.resourceBroker.updateVirtualFolderList().then(()=>{this.vfolders=this.resourceBroker.vfolders})}async _aggregateResourceUse(e=""){return this.resourceBroker._aggregateCurrentResource(e).then(async e=>(this.concurrency_used=this.resourceBroker.concurrency_used,this.scaling_group=this.resourceBroker.scaling_group,this.scaling_groups=this.resourceBroker.scaling_groups,this.resource_templates=this.resourceBroker.resource_templates,this.resource_templates_filtered=this.resourceBroker.resource_templates_filtered,this.total_slot=this.resourceBroker.total_slot,this.total_resource_group_slot=this.resourceBroker.total_resource_group_slot,this.total_project_slot=this.resourceBroker.total_project_slot,this.used_slot=this.resourceBroker.used_slot,this.used_resource_group_slot=this.resourceBroker.used_resource_group_slot,this.used_project_slot=this.resourceBroker.used_project_slot,this.used_project_slot_percent=this.resourceBroker.used_project_slot_percent,this.concurrency_limit=this.resourceBroker.concurrency_limit,this.available_slot=this.resourceBroker.available_slot,this.used_slot_percent=this.resourceBroker.used_slot_percent,this.used_resource_group_slot_percent=this.resourceBroker.used_resource_group_slot_percent,await this.updateComplete,Promise.resolve(!0))).catch(e=>(e&&e.message&&(console.log(e),this.notification.text=S.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)),Promise.resolve(!1)))}aggregateResource(e=""){void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._aggregateResourceUse(e)},!0):this._aggregateResourceUse(e)}async updateResourceAllocationPane(e=""){if(1==this.metric_updating)return;if("refresh resource policy"===e)return this.metric_updating=!1,this._aggregateResourceUse("update-metric").then(()=>this.updateResourceAllocationPane("after refresh resource policy"));let t=this.shadowRoot.querySelector("#environment").selected,i=this.version_selector.selected;if(null===i)return void(this.metric_updating=!1);let s=i.value;if(this._updateVersionSelectorText(s),null==t||t.getAttribute("disabled"))this.metric_updating=!1;else if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)document.addEventListener("backend-ai-connected",()=>{this.updateResourceAllocationPane(e)},!0);else{if(this.metric_updating=!0,await this._aggregateResourceUse("update-metric"),await this._updateVirtualFolderList(),0===Object.keys(this.resourceBroker.resourceLimits).length)return void(this.metric_updating=!1);let e=t.id,i=s;if(""===e||""===i)return void(this.metric_updating=!1);let r=e+":"+i,o=this.resourceBroker.resourceLimits[r];if(!o)return void(this.metric_updating=!1);this.gpu_mode=this.resourceBroker.gpu_mode,this.gpu_step=this.resourceBroker.gpu_step,this.gpu_modes=this.resourceBroker.gpu_modes;let a=this.resourceBroker.available_slot;this.shadowRoot.querySelector("#cpu-resource").disabled=!1,this.shadowRoot.querySelector("#mem-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").disabled=!1,this.shadowRoot.querySelector("#session-resource").disabled=!1,this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent=k("session.launcher.Launch");let n=!1,c={min:.0625,max:2,preferred:.125};if(this.cuda_device_metric={min:0,max:0},o.forEach(e=>{if("cpu"===e.key){let t=Object.assign({},e);t.min=parseInt(t.min),"cpu"in this.userResourceLimit?0!==parseInt(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseInt(t.max),parseInt(this.userResourceLimit.cpu),a.cpu,this.max_cpu_core_per_session):t.max=Math.min(parseInt(this.userResourceLimit.cpu),a.cpu,this.max_cpu_core_per_session):0!==parseInt(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseInt(t.max),a.cpu,this.max_cpu_core_per_session):t.max=Math.min(this.available_slot.cpu,this.max_cpu_core_per_session),t.min>=t.max&&(t.min>t.max?(t.min=t.max,t.max=t.max+1,n=!0,this.shadowRoot.querySelector("#cpu-resource").disabled=!0):(t.max=t.max+1,this.shadowRoot.querySelector("#cpu-resource").disabled=!0)),this.cpu_metric=t}if("cuda.device"===e.key&&"cuda.device"==this.gpu_mode){let t=Object.assign({},e);t.min=parseInt(t.min),"cuda.device"in this.userResourceLimit?0!==parseInt(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseInt(t.max),parseInt(this.userResourceLimit["cuda.device"]),a.cuda_shares,this.max_cuda_device_per_session):t.max=Math.min(parseInt(this.userResourceLimit["cuda.device"]),a.cuda_device,this.max_cuda_device_per_session):0!==parseInt(t.max)?t.max=Math.min(parseInt(t.max),a.cuda_device,this.max_cuda_device_per_session):t.max=this.available_slot.cuda_device,t.min>=t.max&&(t.min>t.max?(t.min=t.max,n=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!0):(t.max=t.max+1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0)),this.cuda_device_metric=t}if("cuda.shares"===e.key&&"cuda.shares"===this.gpu_mode){let t=Object.assign({},e);t.min=parseFloat(t.min),"cuda.shares"in this.userResourceLimit?0!==parseFloat(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseFloat(t.max),parseFloat(this.userResourceLimit["cuda.shares"]),a.cuda_shares):t.max=Math.min(parseFloat(this.userResourceLimit["cuda.shares"]),a.cuda_shares):0!==parseFloat(t.max)?t.max=Math.min(parseFloat(t.max),a.cuda_shares):t.max=0,t.min>=t.max&&(t.min>t.max?(t.min=t.max,n=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!0):(t.max=t.max+1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0)),this.cuda_shares_metric=t,t.max>0&&(this.cuda_device_metric=t)}if("rocm.device"===e.key&&"rocm.device"===this.gpu_mode){let t=Object.assign({},e);t.min=parseInt(t.min),t.max=parseInt(t.max),t.min,t.max,this.rocm_device_metric=t}if("tpu.device"===e.key){let t=Object.assign({},e);t.min=parseInt(t.min),t.max=parseInt(t.max),t.min,t.max,this.tpu_device_metric=t}if("mem"===e.key){let t=Object.assign({},e);t.min=globalThis.backendaiclient.utils.changeBinaryUnit(t.min,"g"),t.min<.1&&(t.min=.1);let i=globalThis.backendaiclient.utils.changeBinaryUnit(t.max,"g","g");if("mem"in this.userResourceLimit){let e=globalThis.backendaiclient.utils.changeBinaryUnit(this.userResourceLimit.mem,"g");0!==parseInt(i)?t.max=Math.min(parseFloat(i),parseFloat(e),a.mem):t.max=parseFloat(e)}else 0!==parseInt(t.max)&&"Infinity"!==t.max&&!0!==isNaN(t.max)?t.max=Math.min(parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(t.max,"g","g")),a.mem):t.max=a.mem;t.min>=t.max&&(t.min>t.max?(t.min=t.max,t.max=t.max+1,n=!0,this.shadowRoot.querySelector("#mem-resource").disabled=!0):(t.max=t.max+1,this.shadowRoot.querySelector("#mem-resource").disabled=!0)),t.min=Number(t.min.toFixed(2)),t.max=Number(t.max.toFixed(2)),this.mem_metric=t}"shmem"===e.key&&(c=Object.assign({},e),c.preferred="preferred"in c?globalThis.backendaiclient.utils.changeBinaryUnit(c.preferred,"g","g"):.0625)}),c.max=this.max_shm_per_session,c.min=.0625,c.min>=c.max&&(c.min>c.max?(c.min=c.max,c.max=c.max+1,n=!0,this.shadowRoot.querySelector("#shmem-resource").disabled=!0):(c.max=c.max+1,this.shadowRoot.querySelector("#shmem-resource").disabled=!0)),c.min=Number(c.min.toFixed(2)),c.max=Number(c.max.toFixed(2)),this.shmem_metric=c,0==this.cuda_device_metric.min&&0==this.cuda_device_metric.max)if(this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0,this.shadowRoot.querySelector("#gpu-resource").value=0,this.resource_templates!==[]&&this.resource_templates.length>0){let e=[];for(let t=0;t<this.resource_templates.length;t++)"cuda_device"in this.resource_templates[t]||"cuda_shares"in this.resource_templates[t]?(parseFloat(this.resource_templates[t].cuda_device)<=0&&!("cuda_shares"in this.resource_templates[t])||parseFloat(this.resource_templates[t].cuda_shares)<=0&&!("cuda_device"in this.resource_templates[t])||parseFloat(this.resource_templates[t].cuda_device)<=0&&parseFloat(this.resource_templates[t].cuda_shares)<=0)&&e.push(this.resource_templates[t]):e.push(this.resource_templates[t]);this.resource_templates_filtered=e}else this.resource_templates_filtered=this.resource_templates;else this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").value=this.cuda_device_metric.max,this.resource_templates_filtered=this.resource_templates;if(this.resource_templates_filtered!==[]&&this.resource_templates_filtered.length>0){let e=this.resource_templates_filtered[0];this._chooseResourceTemplate(e),this.shadowRoot.querySelector("#resource-templates").layout(!0).then(()=>{this.shadowRoot.querySelector("#resource-templates").select(1)})}else this._updateResourceIndicator(this.cpu_metric.min,this.mem_metric.min,"none",0);n&&(this.shadowRoot.querySelector("#cpu-resource").disabled=!0,this.shadowRoot.querySelector("#mem-resource").disabled=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!0,this.shadowRoot.querySelector("#session-resource").disabled=!0,this.shadowRoot.querySelector("#launch-button").disabled=!0,this.shadowRoot.querySelector("#launch-button-msg").textContent="Not enough resource"),this.cuda_device_metric.min==this.cuda_device_metric.max&&(this.shadowRoot.querySelector("#gpu-resource").max=this.cuda_device_metric.max+1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0),1==this.concurrency_limit&&(this.shadowRoot.querySelector("#session-resource").max=2,this.shadowRoot.querySelector("#session-resource").value=1,this.shadowRoot.querySelector("#session-resource").disabled=!0),this.metric_updating=!1}}updateLanguage(){let e=this.shadowRoot.querySelector("#environment").selected;if(null===e)return;let t=e.id;this._updateVersions(t)}changed(e){console.log(e)}isEmpty(e){return 0===e.length}_toggleAdvancedSettings(){this.shadowRoot.querySelector("#advanced-resource-settings").toggle()}_chooseResourceTemplate(e){let t;t=void 0!==e.cpu?e:e.target.closest("mwc-list-item");const i=t.cpu,s=t.mem,r=t.cuda_device,o=t.cuda_shares,a=t.rocm_device,n=t.tpu_device;let c,l;void 0!==r||void 0!==o?void 0===r?(c="cuda.shares",l=o):(c="cuda.device",l=r):void 0!==a?(c="rocm.device",l=a):void 0!==n?(c="tpu.device",l=n):(c="none",l=0);const d=t.shmem;this.shmem_request=d||.0625,this._updateResourceIndicator(i,s,c,l)}_updateResourceIndicator(e,t,i,s){this.shadowRoot.querySelector("#cpu-resource").value=e,this.shadowRoot.querySelector("#mem-resource").value=t,this.shadowRoot.querySelector("#gpu-resource").value=s,this.shadowRoot.querySelector("#shmem-resource").value=this.shmem_request,this.cpu_request=e,this.mem_request=t,this.gpu_request=s,this.gpu_request_type=i}async selectDefaultLanguage(e=!1,t=""){if(!0===this._default_language_updated&&!1===e)return;""!==t?this.default_language=t:void 0!==globalThis.backendaiclient._config.default_session_environment&&"default_session_environment"in globalThis.backendaiclient._config&&""!==globalThis.backendaiclient._config.default_session_environment?this.default_language=globalThis.backendaiclient._config.default_session_environment:this.languages.length>1?this.default_language=this.languages[1].name:0!==this.languages.length?this.default_language=this.languages[0].name:this.default_language="index.docker.io/lablup/ngc-tensorflow";let i=this.shadowRoot.querySelector("#environment"),s=i.items.find(e=>e.value===this.default_language);if(void 0===s)return setTimeout(()=>(console.log("Environment selector is not ready yet. Trying to set the default language again."),this.selectDefaultLanguage(e,t)),500),Promise.resolve(!0);let r=i.items.indexOf(s);return i.select(r),this._default_language_updated=!0,Promise.resolve(!0)}_selectDefaultVersion(e){return!1}async _fetchSessionOwnerGroups(){this.ownerFeatureInitialized||(this.shadowRoot.querySelector("#owner-group").addEventListener("selected-item-label-changed",this._fetchSessionOwnerScalingGroups.bind(this)),this.ownerFeatureInitialized=!0);const e=this.shadowRoot.querySelector("#owner-email"),t=e.value;if(!e.checkValidity())return this.notification.text="Invalid email address",this.notification.show(),this.ownerKeypairs=[],void(this.ownerGroups=[]);const i=await globalThis.backendaiclient.keypair.list(t,["access_key"]);if(this.ownerKeypairs=i.keypairs,this.ownerKeypairs.length<1)return this.notification.text="No active keypair",this.notification.show(),this.ownerKeypairs=[],void(this.ownerGroups=[]);this.shadowRoot.querySelector("#owner-accesskey paper-listbox").selected=this.ownerKeypairs[0].access_key;const s=await globalThis.backendaiclient.user.get(t,["domain_name","groups {id name}"]);this.ownerDomain=s.user.domain_name,this.ownerGroups=s.user.groups,this.ownerGroups&&(this.shadowRoot.querySelector("#owner-group paper-listbox").selected=this.ownerGroups[0].name)}async _fetchSessionOwnerScalingGroups(){const e=this.shadowRoot.querySelector("#owner-group").selectedItemLabel;if(!e)return void(this.ownerScalingGroups=[]);const t=await globalThis.backendaiclient.scalingGroup.list(e);this.ownerScalingGroups=t.scaling_groups,this.ownerScalingGroups&&(this.shadowRoot.querySelector("#owner-scaling-group paper-listbox").selected=0)}_toggleResourceGauge(){""==this.resourceGauge.style.display||"flex"==this.resourceGauge.style.display||"block"==this.resourceGauge.style.display?this.resourceGauge.style.display="none":(document.body.clientWidth<750?(this.resourceGauge.style.left="20px",this.resourceGauge.style.right="20px",this.resourceGauge.style.backgroundColor="var(--paper-red-800)"):this.resourceGauge.style.backgroundColor="transparent",this.resourceGauge.style.display="flex")}_showKernelDescription(e,t){e.stopPropagation();let i=t.kernelname;if(i in this.resourceBroker.imageInfo&&"description"in this.resourceBroker.imageInfo[i]){let e=this.shadowRoot.querySelector("#help-description");this._helpDescriptionTitle=this.resourceBroker.imageInfo[i].name,this._helpDescription=this.resourceBroker.imageInfo[i].description,this._helpDescriptionIcon=t.icon,e.show()}else i in this.imageInfo?this._helpDescriptionTitle=this.resourceBroker.imageInfo[i].name:this._helpDescriptionTitle=i,this._helpDescription=k("session.launcher.NoDescriptionFound")}_showResourceDescription(e,t){e.stopPropagation();const i={cpu:{name:k("session.launcher.CPU"),desc:k("session.launcher.DescCPU")},mem:{name:k("session.launcher.Memory"),desc:k("session.launcher.DescMemory")},shmem:{name:k("session.launcher.SharedMemory"),desc:k("session.launcher.DescSharedMemory")},gpu:{name:k("session.launcher.GPU"),desc:k("session.launcher.DescGPU")},session:{name:k("session.launcher.TitleSession"),desc:k("session.launcher.DescSession")}};if(t in i){this._helpDescriptionTitle=i[t].name,this._helpDescription=i[t].desc,this._helpDescriptionIcon="",this.shadowRoot.querySelector("#help-description").show()}}_resourceTemplateToCustom(){this.shadowRoot.querySelector("#resource-templates").selectedText=k("session.launcher.CustomResourceApplied")}_getVersionInfo(e){let t=[],i=e.split("-");if(t.push({tag:this._aliasName(i[0]),color:"blue",size:"80px"}),i.length>1&&(this.kernel+":"+e in this.imageRequirements&&"framework"in this.imageRequirements[this.kernel+":"+e]?t.push({tag:this.imageRequirements[this.kernel+":"+e].framework,color:"red",size:"120px"}):t.push({tag:this._aliasName(i[1]),color:"red",size:"120px"})),i.length>2){let e=this._aliasName(i[2]).split(":");e.length>1?t.push({tag:e[1],app:e[0],color:"green",size:"150px"}):t.push({tag:e[0],color:"green",size:"150px"})}return t}_disableEnterKey(){this.shadowRoot.querySelectorAll("wl-expansion").forEach(e=>{e.onKeyDown=e=>{13===e.keyCode&&e.preventDefault()}})}render(){return l`
      <wl-button ?disabled="${!this.enableLaunchButton}" id="launch-session" outlined @click="${()=>this._launchSessionDialog()}">
        <wl-icon>add</wl-icon>
        ${$("session.launcher.Start")}
      </wl-button>
      <backend-ai-dialog id="new-session-dialog" narrowLayout fixed backdrop>
        <span slot="title">${this.newSessionDialogTitle?this.newSessionDialogTitle:$("session.launcher.StartNewSession")}</span>
        <form slot="content" id="launch-session-form" class="centered">
          <div class="vertical center layout" style="padding-top:15px;">
            <mwc-select id="environment" label="${$("session.launcher.Environments")}" fullwidth required
              value="${this.default_language}">
              <mwc-list-item selected style="display:none!important;">${$("session.launcher.ChooseEnvironment")}</mwc-list-item>
                ${this.languages.map(e=>l`
                  ${!1===e.clickable?l`
                    <h5 style="font-size:12px;padding: 0 10px 3px 10px;margin:0; border-bottom:1px solid #ccc;" role="separator" disabled="true">${e.basename}</h5>
                  `:l`
                    <mwc-list-item id="${e.name}" value="${e.name}" graphic="icon">
                      <img slot="graphic" src="resources/icons/${e.icon}" style="width:32px;height:32px;" />
                      <div class="horizontal justified center flex layout" style="width:293px;">
                        <div style="padding-right:5px;">${e.basename}</div>
                        <div class="flex"></div>
                        <div class="horizontal layout end-justified center flex">
                        ${e.tags?e.tags.map(e=>l`
                          <lablup-shields slot="meta" style="margin-right:5px;" color="${e.color}" description="${e.tag}"></lablup-shields>
                          <span style="display:none">(${e.tag})</span>
                        `):""}
                          <mwc-icon-button icon="info" class="fg blue info"
                                           @click="${t=>{this._showKernelDescription(t,e)}}">
                          </mwc-icon-button>
                        </div>
                      </div>
                    </mwc-list-item>
                  `}
                `)}
            </mwc-select>
            <mwc-select id="version" label="${$("session.launcher.Version")}" fullwidth required>
              <mwc-list-item selected style="display:none!important"></mwc-list-item>
                <h5 style="font-size:12px;padding: 0 10px 3px 25px;margin:0; border-bottom:1px solid #ccc;" role="separator" disabled="true" class="horizontal layout">
                  <div style="width:80px;">${$("session.launcher.Version")}</div>
                  <div style="width:120px;">${$("session.launcher.Base")}</div>
                  <div style="width:150px;">${$("session.launcher.Requirements")}</div>
                </h5>
            ${this.versions.map(e=>l`
              <mwc-list-item id="${e}" value="${e}">
                <span style="display:none">${e}</span>
                <div class="horizontal layout end-justified">
                  ${this._getVersionInfo(e).map(e=>l`
                    <lablup-shields style="width:${e.size}!important;"
                                    color="${e.color}"
                                    app="${void 0!==e.app&&""!=e.app&&" "!=e.app?e.app:""}"
                                    description="${e.tag}">
                    </lablup-shields>
                  `)}
                </div>
              </mwc-list-item>
            `)}
            </mwc-select>
          </div>
          <div style="display:none;">
            <wl-checkbox id="use-gpu-checkbox">${$("session.launcher.UseGPU")}</wl-checkbox>
          </div>
          <div class="horizontal center layout">
            <mwc-multi-select id="scaling-groups" label="${$("session.launcher.ResourceGroup")}" required naturalMenuWidth
                        @selected="${e=>this.updateScalingGroup(!1,e)}">
              ${this.scaling_groups.map(e=>l`
                <mwc-list-item class="scaling-group-dropdown"
                               id="${e.name}"
                               value="${e.name}">
                  ${e.name}
                </mwc-list-item>
              `)}
            </mwc-multi-select>
            <mwc-textfield id="session-name" placeholder="${$("session.launcher.SessionNameOptional")}"
                           pattern="[a-zA-Z0-9_-]{4,}" fullwidth
                           validationMessage="4 or more characters / no whitespace."
                           style="margin-left:5px;">
            </mwc-textfield>
          </div>
          <div class="horizontal center layout">
            <mwc-multi-select fullwidth id="vfolder" label="${$("session.launcher.FolderToMount")}" multi
            @selected="${this._updateSelectedFolder}">
            ${this.vfolders.map(e=>l`
              <mwc-list-item value="${e.name}" ?disabled="${e.disabled}">${e.name}</mwc-list-item>
            `)}
            </mwc-multi-select>
          </div>
          <div class="vertical center layout" style="padding-top:15px;">
            <mwc-select id="resource-templates" label="${$("session.launcher.ResourceAllocation")}" fullwidth required>
              <mwc-list-item selected style="display:none!important"></mwc-list-item>
                <h5 style="font-size:12px;padding: 0 10px 3px 25px;margin:0; border-bottom:1px solid #ccc;" role="separator" disabled="true" class="horizontal layout center">
                  <div style="width:110px;">Name</div>
                  <div style="width:50px;text-align:right;">CPU</div>
                  <div style="width:50px;text-align:right;">RAM</div>
                  <div style="width:50px;text-align:right;">${$("session.launcher.SharedMemory")}</div>
                  <div style="width:90px;text-align:right;">${$("session.launcher.Accelerator")}</div>
                </h5>
            ${this.resource_templates_filtered.map(e=>l`
              <mwc-list-item value="${e.name}"
                           id="${e.name}-button"
                           @click="${e=>{this._chooseResourceTemplate(e)}}"
                           .cpu="${e.cpu}"
                           .mem="${e.mem}"
                           .cuda_device="${e.cuda_device}"
                           .cuda_shares="${e.cuda_shares}"
                           .rocm_device="${e.rocm_device}"
                           .tpu_device="${e.tpu_device}"
                           .shmem="${e.shmem}">
                <div class="horizontal layout end-justified">
                  <div style="width:110px;">${e.name}</div>
                  <div style="display:none"> (</div>
                  <div style="width:50px;text-align:right;">${e.cpu}<span style="display:none">CPU</span></div>
                  <div style="width:50px;text-align:right;">${e.mem}GB</div>
                  <div style="width:50px;text-align:right;">${e.shmem?l`${e.shmem}GB`:l`64MB`}</div>
                  <div style="width:90px;text-align:right;">
                    ${e.cuda_device&&e.cuda_device>0?l`${e.cuda_device} CUDA GPU`:l``}
                    ${e.cuda_shares&&e.cuda_shares>0?l`${e.cuda_shares} GPU`:l``}
                    ${e.rocm_device&&e.rocm_device>0?l`${e.rocm_device} ROCM GPU`:l``}
                    ${e.tpu_device&&e.tpu_device>0?l`${e.tpu_device} TPU`:l``}
                  </div>
                  <div style="display:none">)</div>
                </div>
              </mwc-list-item>
            `)}
            ${this.isEmpty(this.resource_templates_filtered)?l`
              <mwc-list-item class="resource-button vertical center start layout" role="option"
                         style="height:140px;width:350px;" type="button"
                         flat inverted outlined disabled>
                <div>
                  <h4>${$("session.launcher.NoSuitablePreset")}</h4>
                  <div style="font-size:12px;">Use advanced settings to <br>start custom session</div>
                </div>
              </mwc-list-item>
              `:l``}
            </mwc-select>
          </div>
          <wl-expansion name="resource-group" open style="--expansion-header-padding:16px;">
            <span slot="title" style="font-size:12px;color:#404040;">${$("session.launcher.CustomAllocation")}</span>
            <span slot="description" style="font-size:12px;color:#646464;"></span>
            <div class="vertical layout">
              <div class="horizontal center layout">
                <div class="resource-type" style="width:70px;">CPU</div>
                <lablup-slider id="cpu-resource" class="cpu"
                               pin snaps expand editable markers
                               @click="${this._resourceTemplateToCustom}"
                               marker_limit="${this.marker_limit}"
                               min="${this.cpu_metric.min}" max="${this.cpu_metric.max}"
                               value="${this.cpu_request}"></lablup-slider>
                <span class="caption">${$("session.launcher.Core")}</span>
                <mwc-icon-button icon="info" class="fg green info" @click="${e=>{this._showResourceDescription(e,"cpu")}}"></mwc-icon-button>
            </div>
            <div class="horizontal center layout">
              <div class="resource-type" style="width:70px;">RAM</div>
              <lablup-slider id="mem-resource" class="mem"
                             pin snaps step=0.05 editable markers
                             @click="${this._resourceTemplateToCustom}"
                             marker_limit="${this.marker_limit}"
                             min="${this.mem_metric.min}" max="${this.mem_metric.max}"
                             value="${this.mem_request}"></lablup-slider>
              <span class="caption">GB</span>
              <mwc-icon-button icon="info" class="fg orange info" @click="${e=>{this._showResourceDescription(e,"mem")}}"></mwc-icon-button>
            </div>
            <div class="horizontal center layout">
              <div class="resource-type" style="width:70px;">${$("session.launcher.SharedMemory")}</div>
              <lablup-slider id="shmem-resource" class="mem"
                             pin snaps step="0.0025" editable markers
                             @click="${this._resourceTemplateToCustom}"
                             marker_limit="${this.marker_limit}"
                             min="0.0625" max="${this.shmem_metric.max}"
                             value="${this.shmem_request}"></lablup-slider>
              <span class="caption">GB</span>
              <mwc-icon-button icon="info" class="fg orange info" @click="${e=>{this._showResourceDescription(e,"shmem")}}"></mwc-icon-button>
            </div>
            <div class="horizontal center layout">
              <div class="resource-type" style="width:70px;">GPU</div>
              <lablup-slider id="gpu-resource" class="gpu"
                             pin snaps editable markers step="${this.gpu_step}"
                             @click="${this._resourceTemplateToCustom}"
                             marker_limit="${this.marker_limit}"
                             min="0.0" max="${this.cuda_device_metric.max}" value="${this.gpu_request}"></lablup-slider>
              <span class="caption">GPU</span>
              <mwc-icon-button icon="info" class="fg blue info" @click="${e=>{this._showResourceDescription(e,"gpu")}}"></mwc-icon-button>
            </div>
            <div class="horizontal center layout">
              <div class="resource-type" style="width:70px;">Sessions</div>
              <lablup-slider id="session-resource" class="session"
                             pin snaps editable markers step="1"
                             @click="${this._resourceTemplateToCustom}"
                             marker_limit="${this.marker_limit}"
                             min="1" max="${this.concurrency_limit}" value="${this.session_request}"></lablup-slider>
              <span class="caption">#</span>
              <mwc-icon-button icon="info" class="fg red info" @click="${e=>{this._showResourceDescription(e,"session")}}"></mwc-icon-button>
            </div>
          </div>
        </wl-expansion>

        <wl-expansion name="ownership" style="--expansion-header-padding:16px;">
          <span slot="title" style="font-size:12px;color:#404040;">${$("session.launcher.SetSessionOwner")}</span>
          <span slot="description"></span>
          <div class="vertical layout">
            <div class="horizontal center layout">
              <mwc-textfield id="owner-email" type="email" class="flex" value=""
                pattern="^.+@.+\..+$"
                label="${$("session.launcher.OwnerEmail")}" size="40"></mwc-textfield>
              <mwc-icon-button icon="refresh" class="blue"
                @click="${()=>this._fetchSessionOwnerGroups()}">
              </mwc-icon-button>
            </div>
            <paper-dropdown-menu id="owner-accesskey" label="${$("session.launcher.OwnerAccessKey")}">
              <paper-listbox slot="dropdown-content" attr-for-selected="id">
                ${this.ownerKeypairs.map(e=>l`
                  <paper-item id="${e.access_key}" label="${e.access_key}">${e.access_key}</paper-item>
                `)}
              </paper-listbox>
            </paper-dropdown-menu>
            <div class="horizontal center layout">
              <paper-dropdown-menu id="owner-group" label="${$("session.launcher.OwnerGroup")}" horizontal-align="left">
                <paper-listbox slot="dropdown-content" attr-for-selected="id"
                               selected="${this.default_language}">
                  ${this.ownerGroups.map(e=>l`
                    <paper-item id="${e.name}" label="${e.name}">${e.name}</paper-item>
                  `)}
                </paper-listbox>
              </paper-dropdown-menu>
              <paper-dropdown-menu id="owner-scaling-group" label="${$("session.launcher.OwnerResourceGroup")}">
                <paper-listbox slot="dropdown-content" selected="0">
                  ${this.ownerScalingGroups.map(e=>l`
                    <paper-item id="${e.name}" label="${e.name}">${e.name}</paper-item>
                  `)}
                </paper-listbox>
              </paper-dropdown-menu>
            </div>
            <wl-label>
              <wl-checkbox id="owner-enabled"></wl-checkbox>
              ${$("session.launcher.LaunchSessionWithAccessKey")}
            </wl-label>
          </div>
        </wl-expansion>
        <fieldset slot="footer" style="padding-top:0;">
          <wl-button class="launch-button" type="button" id="launch-button"
                                       outlined @click="${()=>this._newSessionWithConfirmation()}">
                                      <wl-icon>rowing</wl-icon>
            <span id="launch-button-msg">${$("session.launcher.Launch")}</span>
          </wl-button>
        </fieldset>
      </form>
    </backend-ai-dialog>
    <backend-ai-dialog id="help-description" fixed backdrop>
      <span slot="title">${this._helpDescriptionTitle}</span>
      <div slot="content" class="horizontal layout center" style="margin:5px;">
      ${""==this._helpDescriptionIcon?l``:l`
        <img slot="graphic" src="resources/icons/${this._helpDescriptionIcon}" style="width:64px;height:64px;margin-right:10px;" />
        `}
        <p style="font-size:14px;">${I(this._helpDescription)}</p>
      </div>
    </backend-ai-dialog>
    <backend-ai-dialog id="launch-confirmation-dialog" warning fixed backdrop>
      <span slot="title">${$("session.launcher.NoFolderMounted")}</span>
      <div slot="content" class="vertical layout">
        <p>${$("session.launcher.HomeDirectoryDeletionDialog")}</p>
        <p>${$("session.launcher.LaunchConfirmationDialog")}</p>
        <p>${$("dialog.ask.DoYouWantToProceed")}</p>
      </div>
      <div slot="footer" style="padding-top:0;margin:0 5px;">
        <wl-button class="launch-confirmation-button" type="button" id="launch-confirmation-button"
                                     outlined @click="${()=>this._newSession()}">
                                    <wl-icon>rowing</wl-icon>
          <span>${$("session.launcher.LaunchWithoutMount")}</span>
        </wl-button>
      </div>
    </backend-ai-dialog>
`}};s([o({type:Boolean})],oe.prototype,"is_connected",void 0),s([o({type:Boolean})],oe.prototype,"enableLaunchButton",void 0),s([o({type:Boolean})],oe.prototype,"hideLaunchButton",void 0),s([o({type:String})],oe.prototype,"location",void 0),s([o({type:String})],oe.prototype,"mode",void 0),s([o({type:String})],oe.prototype,"newSessionDialogTitle",void 0),s([o({type:String})],oe.prototype,"importScript",void 0),s([o({type:String})],oe.prototype,"importFilename",void 0),s([o({type:Object})],oe.prototype,"imageRequirements",void 0),s([o({type:Object})],oe.prototype,"resourceLimits",void 0),s([o({type:Object})],oe.prototype,"userResourceLimit",void 0),s([o({type:Object})],oe.prototype,"aliases",void 0),s([o({type:Object})],oe.prototype,"tags",void 0),s([o({type:Object})],oe.prototype,"icons",void 0),s([o({type:Object})],oe.prototype,"imageInfo",void 0),s([o({type:String})],oe.prototype,"kernel",void 0),s([o({type:Array})],oe.prototype,"versions",void 0),s([o({type:Array})],oe.prototype,"languages",void 0),s([o({type:Number})],oe.prototype,"marker_limit",void 0),s([o({type:String})],oe.prototype,"gpu_mode",void 0),s([o({type:Array})],oe.prototype,"gpu_modes",void 0),s([o({type:Number})],oe.prototype,"gpu_step",void 0),s([o({type:Object})],oe.prototype,"cpu_metric",void 0),s([o({type:Object})],oe.prototype,"mem_metric",void 0),s([o({type:Object})],oe.prototype,"shmem_metric",void 0),s([o({type:Object})],oe.prototype,"cuda_device_metric",void 0),s([o({type:Object})],oe.prototype,"cuda_shares_metric",void 0),s([o({type:Object})],oe.prototype,"rocm_device_metric",void 0),s([o({type:Object})],oe.prototype,"tpu_device_metric",void 0),s([o({type:Object})],oe.prototype,"images",void 0),s([o({type:Object})],oe.prototype,"total_slot",void 0),s([o({type:Object})],oe.prototype,"total_resource_group_slot",void 0),s([o({type:Object})],oe.prototype,"total_project_slot",void 0),s([o({type:Object})],oe.prototype,"used_slot",void 0),s([o({type:Object})],oe.prototype,"used_resource_group_slot",void 0),s([o({type:Object})],oe.prototype,"used_project_slot",void 0),s([o({type:Object})],oe.prototype,"available_slot",void 0),s([o({type:Number})],oe.prototype,"concurrency_used",void 0),s([o({type:Number})],oe.prototype,"concurrency_max",void 0),s([o({type:Number})],oe.prototype,"concurrency_limit",void 0),s([o({type:Array})],oe.prototype,"vfolders",void 0),s([o({type:Object})],oe.prototype,"used_slot_percent",void 0),s([o({type:Object})],oe.prototype,"used_resource_group_slot_percent",void 0),s([o({type:Object})],oe.prototype,"used_project_slot_percent",void 0),s([o({type:Array})],oe.prototype,"resource_templates",void 0),s([o({type:Array})],oe.prototype,"resource_templates_filtered",void 0),s([o({type:String})],oe.prototype,"default_language",void 0),s([o({type:Number})],oe.prototype,"cpu_request",void 0),s([o({type:Number})],oe.prototype,"mem_request",void 0),s([o({type:Number})],oe.prototype,"shmem_request",void 0),s([o({type:Number})],oe.prototype,"gpu_request",void 0),s([o({type:String})],oe.prototype,"gpu_request_type",void 0),s([o({type:Number})],oe.prototype,"session_request",void 0),s([o({type:Boolean})],oe.prototype,"_status",void 0),s([o({type:Number})],oe.prototype,"num_sessions",void 0),s([o({type:String})],oe.prototype,"scaling_group",void 0),s([o({type:Array})],oe.prototype,"scaling_groups",void 0),s([o({type:Array})],oe.prototype,"sessions_list",void 0),s([o({type:Boolean})],oe.prototype,"metric_updating",void 0),s([o({type:Boolean})],oe.prototype,"metadata_updating",void 0),s([o({type:Boolean})],oe.prototype,"aggregate_updating",void 0),s([o({type:Object})],oe.prototype,"scaling_group_selection_box",void 0),s([o({type:Object})],oe.prototype,"resourceGauge",void 0),s([o({type:Boolean})],oe.prototype,"ownerFeatureInitialized",void 0),s([o({type:String})],oe.prototype,"ownerDomain",void 0),s([o({type:Array})],oe.prototype,"ownerKeypairs",void 0),s([o({type:Array})],oe.prototype,"ownerGroups",void 0),s([o({type:Array})],oe.prototype,"ownerScalingGroups",void 0),s([o({type:Boolean})],oe.prototype,"project_resource_monitor",void 0),s([o({type:Object})],oe.prototype,"version_selector",void 0),s([o({type:Boolean})],oe.prototype,"_default_language_updated",void 0),s([o({type:Boolean})],oe.prototype,"_default_version_updated",void 0),s([o({type:String})],oe.prototype,"_helpDescription",void 0),s([o({type:String})],oe.prototype,"_helpDescriptionTitle",void 0),s([o({type:String})],oe.prototype,"_helpDescriptionIcon",void 0),s([o({type:Number})],oe.prototype,"max_cpu_core_per_session",void 0),s([o({type:Number})],oe.prototype,"max_cuda_device_per_session",void 0),s([o({type:Number})],oe.prototype,"max_shm_per_session",void 0),s([o({type:Object})],oe.prototype,"resourceBroker",void 0),oe=s([g("backend-ai-session-launcher")],oe);
