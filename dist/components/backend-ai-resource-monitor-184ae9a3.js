import{x as e,_ as t,c as i,h as s,a0 as r,p as a,y as o,Q as n,V as l,U as c,a1 as d,a2 as u,a3 as p,a4 as h,a5 as m,a6 as g,a7 as _,a8 as b,a9 as v,aa as y,ab as f,ac as w,a as x,L as k,k as S,I as R,j as $,ad as I,l as j,m as C}from"./backend-ai-console-1bd0067f.js";import{B as E}from"./backend-ai-page-a399cbad.js";import{R as q}from"./radio-behavior-5893f492.js";import"./backend-ai-dropdown-menu-0210f258.js";import"./paper-dropdown-menu-33d7a549.js";import"./index-7bb018aa.js";import"./index-85637cc4.js";let A=class extends q{render(){return s` <div id="dot"></div> <wl-ripple id="ripple" .target="${this}" focusable overlay unbounded centered initialDuration="200"></wl-ripple> <slot></slot> ${this.renderFormElement()} `}};A.styles=[...q.styles,e(":host{--_radio-bg:var(--radio-bg,transparent);--_radio-color:var(--radio-color,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))));background:var(--_radio-bg);color:var(--_radio-color);width:var(--radio-size,1.25rem);height:var(--radio-size,1.25rem);border:var(--radio-border-config,.125rem solid) currentColor;border-radius:var(--radio-border-radius,100%);transition:var(--radio-transition,background var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),border-color var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));position:relative;display:inline-flex;align-items:center;justify-content:center;outline:none;-webkit-user-select:none;user-select:none}:host(:not([disabled])){cursor:pointer}:host([checked]){--_radio-bg:var(--radio-bg-checked,transparent);--_radio-color:var(--radio-color-checked,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}:host([checked]) #dot{transform:scale(1)}:host(:focus),:host(:hover){will-change:border,background}:host(:focus) #dot,:host(:hover) #dot{will-change:transform,background}:host([disabled]){--_radio-bg:var(--radio-bg-disabled,transparent);--_radio-color:var(--radio-color-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));pointer-events:none}:host([disabled][checked]){--_radio-bg:var(--radio-bg-disabled-checked,transparent);--_radio-color:var(--radio-color-disabled-checked,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))))}#dot{background:currentColor;width:var(--radio-dot-size,.625rem);height:var(--radio-dot-size,.625rem);border-radius:var(--radio-dot-border-radius,100%);transition:var(--radio-dot-transition,transform var(--transition-duration-medium,.18s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));transform:scale(0)}#ripple{transform:var(--radio-ripple-transform,translate(-50%,-50%) scale(1.8))}")],A=t([i("wl-radio")],A);let N=class extends r{constructor(){super(...arguments),this.role="slider",this.thumbLabel=!1,this.min=0,this.max=100,this.bufferMin=0,this.bufferMax=100}get $interactiveElement(){return this.$slider}get perc(){return(this.$slider.valueAsNumber-this.min)/(this.max-this.min)}get bufferPerc(){return((this.bufferValue||0)-this.bufferMin)/(this.bufferMax-this.bufferMin)}updated(e){super.updated(e),this.updateBackground()}setValue(e){super.setValue(e),null!=this.$slider&&(this.$slider.value=e,this.updateBackground(),this.requestUpdate().then())}updateBackground(){requestAnimationFrame(()=>{this.style.setProperty("--_perc",this.perc.toString()),this.style.setProperty("--_buffer-perc",this.bufferPerc.toString())})}sliderValueChanged(){this.value=this.$slider.value,this.requestUpdate().then()}renderFormElement(e,t,i,r){return s` <input type="range" style="${l(t)}" id="${l(e)}" .value="${this.value}" ?required="${this.required}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" aria-label="${l(this.label)}" name="${l(this.name)}" autocomplete="${l(this.autocomplete)}" min="${l(this.min)}" max="${l(this.max)}" step="${l(this.step)}" @input="${i||(()=>{})}" tabindex="${r||this.disabled?-1:0}"> `}render(){return s` <div id="container"> <slot id="before" name="before"></slot> <div id="wrapper"> <div id="label">${this.label}</div> <div id="slot-wrapper"> ${this.renderFormElement("slider",void 0,this.sliderValueChanged)} ${this.thumbLabel?s` <div id="thumb-container"> <div id="thumb-label"><slot name="thumb-label">${this.value}</slot></div> </div> `:c} <slot id="slot"></slot> </div> ${this.renderFormElement(this.formElementId,"display: none",void 0,"-1")} </div> <slot id="after" name="after"></slot> </div> `}};N.styles=[...r.styles,e(':host{--_buffer-perc:0;--_perc:0;--_slider-track-bg:var(--slider-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.3));--_slider-track-bg-buffer:var(--slider-bg-buffer,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.6));--_slider-track-bg-active:var(--slider-bg-active,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_slider-thumb-bg:var(--slider-thumb-bg,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}:host([disabled]){--_slider-track-bg:var(--slider-bg-disabled,hsla(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%)),0.3));--_slider-track-bg-buffer:var(--slider-bg-buffer-disabled,hsla(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%)),0.6));--_slider-track-bg-active:var(--slider-bg-active-disabled,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))));--_slider-thumb-bg:var(--slider-thumb-bg-disabled,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))))}#container{overflow:visible;border:none}#slider{height:var(--slider-height,.3125rem);background:linear-gradient(90deg,var(--_slider-track-bg-active) 0,var(--_slider-track-bg-active) calc(var(--_perc) * 100%),var(--_slider-track-bg-buffer) calc(var(--_perc) * 100%),var(--_slider-track-bg-buffer) calc(var(--_buffer-perc) * 100%),var(--_slider-track-bg) calc(var(--_buffer-perc) * 100%),var(--_slider-track-bg));cursor:grab;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;outline:none;box-sizing:border-box;margin:0;border-radius:0;top:calc((var(--slider-height, .3125rem) * -1) / 2)}#slider,#thumb-container{width:100%;position:relative}#thumb-label{--_thumb-label-transform-y:0.625rem;left:calc((var(--_perc) * 100%) - (var(--slider-thumb-size, .75rem) * var(--_perc)));transform:translate(calc(-50% + (var(--slider-thumb-size, .75rem) / 2)),var(--_thumb-label-transform-y));width:var(--slider-thumb-label-size,1.875rem);height:var(--slider-thumb-label-size,1.875rem);border-radius:var(--slider-thumb-label-border-radius,100%);color:var(--slider-thumb-label-color,hsl(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));font-size:var(--slider-thumb-label-font-size,.75rem);transition:var(--slider-thumb-label-transition,opacity var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));opacity:0;display:flex;align-items:center;justify-content:center;pointer-events:none;text-overflow:ellipsis;bottom:calc(100% + var(--slider-thumb-size, .75rem) + var(--slider-height, .3125rem) + var(--slider-thumb-space, .75rem))}#thumb-label,#thumb-label:before{background:var(--slider-thumb-label-bg,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));position:absolute}#thumb-label:before{content:"";border-radius:0 50% 50% 50%;transform:rotate(225deg);width:100%;left:0;top:0;height:100%;z-index:-1}#slider:focus+#thumb-container #thumb-label,:host:focus #thumb-label{--_thumb-label-transform-y:0;opacity:1}#slider::-webkit-slider-thumb{background:var(--_slider-thumb-bg);width:var(--slider-thumb-size,.75rem);height:var(--slider-thumb-size,.75rem);border-radius:var(--slider-thumb-border-radius,100%);-webkit-transition:var(--slider-thumb-transition,transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));transition:var(--slider-thumb-transition,transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));box-shadow:0 0 0 0 var(--slider-thumb-focus-ring-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.1));-webkit-appearance:none;appearance:none;border:none;cursor:grab;position:relative}#slider::-moz-range-thumb{background:var(--_slider-thumb-bg);width:var(--slider-thumb-size,.75rem);height:var(--slider-thumb-size,.75rem);border-radius:var(--slider-thumb-border-radius,100%);-moz-transition:var(--slider-thumb-transition,transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));transition:var(--slider-thumb-transition,transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));box-shadow:0 0 0 0 var(--slider-thumb-focus-ring-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.1));-moz-appearance:none;appearance:none;border:none;cursor:grab;position:relative}#slider:focus::-webkit-slider-thumb{transform:var(--slider-thumb-transform-focus,scale(1.2));box-shadow:0 0 0 var(--slider-thumb-focus-ring-size,.75rem) var(--slider-thumb-focus-ring-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.1))}#slider:focus::-moz-range-thumb{transform:var(--slider-thumb-transform-focus,scale(1.2));box-shadow:0 0 0 var(--slider-thumb-focus-ring-size,.75rem) var(--slider-thumb-focus-ring-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.1))}')],t([a({type:String,reflect:!0}),o("design:type",String)],N.prototype,"role",void 0),t([a({type:Boolean}),o("design:type",Boolean)],N.prototype,"thumbLabel",void 0),t([a({type:Number}),o("design:type",Number)],N.prototype,"min",void 0),t([a({type:Number}),o("design:type",Number)],N.prototype,"max",void 0),t([a({type:Number}),o("design:type",Number)],N.prototype,"step",void 0),t([a({type:Number}),o("design:type",Number)],N.prototype,"bufferMin",void 0),t([a({type:Number}),o("design:type",Number)],N.prototype,"bufferMax",void 0),t([a({type:Number}),o("design:type",Number)],N.prototype,"bufferValue",void 0),t([n("#slider"),o("design:type",HTMLInputElement)],N.prototype,"$slider",void 0),N=t([i("wl-slider")],N);
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
class z extends d{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(e){this.formElement&&this.formElement.setAttribute("aria-label",e)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",e=>{this.dispatchEvent(new Event("change",e))})}}
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
 */var T={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},F={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function M(e){return Boolean(e.document)&&"function"==typeof e.document.createElement}
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
 */
var L={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",HAS_TRACK_MARKER:"mdc-slider--display-markers",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete"},O={ARIA_DISABLED:"aria-disabled",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",STEP_DATA_ATTR:"data-step",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",TRACK_SELECTOR:".mdc-slider__track"},U={PAGE_FACTOR:4},G=["mousedown","pointerdown","touchstart"],D=["mouseup","pointerup","touchend"],B={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"},P="ArrowDown",H="ArrowLeft",V="ArrowRight",K="ArrowUp",X="End",W="Home",Q="PageDown",J="PageUp",Z=function(e){function t(i){var s=e.call(this,p({},t.defaultAdapter,i))||this;return s.savedTabIndex_=NaN,s.active_=!1,s.inTransit_=!1,s.isDiscrete_=!1,s.hasTrackMarker_=!1,s.handlingThumbTargetEvt_=!1,s.min_=0,s.max_=100,s.step_=0,s.value_=0,s.disabled_=!1,s.preventFocusState_=!1,s.thumbContainerPointerHandler_=function(){return s.handlingThumbTargetEvt_=!0},s.interactionStartHandler_=function(e){return s.handleDown_(e)},s.keydownHandler_=function(e){return s.handleKeydown_(e)},s.focusHandler_=function(){return s.handleFocus_()},s.blurHandler_=function(){return s.handleBlur_()},s.resizeHandler_=function(){return s.layout()},s}return u(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return L},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return O},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return U},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabIndex:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerThumbContainerInteractionHandler:function(){},deregisterThumbContainerInteractionHandler:function(){},registerBodyInteractionHandler:function(){},deregisterBodyInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},notifyInput:function(){},notifyChange:function(){},setThumbContainerStyleProperty:function(){},setTrackStyleProperty:function(){},setMarkerValue:function(){},setTrackMarkers:function(){},isRTL:function(){return!1}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this;this.isDiscrete_=this.adapter_.hasClass(L.IS_DISCRETE),this.hasTrackMarker_=this.adapter_.hasClass(L.HAS_TRACK_MARKER),G.forEach((function(t){e.adapter_.registerInteractionHandler(t,e.interactionStartHandler_),e.adapter_.registerThumbContainerInteractionHandler(t,e.thumbContainerPointerHandler_)})),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0===this.getStep()&&(this.step_=1)},t.prototype.destroy=function(){var e=this;G.forEach((function(t){e.adapter_.deregisterInteractionHandler(t,e.interactionStartHandler_),e.adapter_.deregisterThumbContainerInteractionHandler(t,e.thumbContainerPointerHandler_)})),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_)},t.prototype.setupTrackMarker=function(){this.isDiscrete_&&this.hasTrackMarker_&&0!==this.getStep()&&this.adapter_.setTrackMarkers(this.getStep(),this.getMax(),this.getMin())},t.prototype.layout=function(){this.rect_=this.adapter_.computeBoundingRect(),this.updateUIForCurrentValue_()},t.prototype.getValue=function(){return this.value_},t.prototype.setValue=function(e){this.setValue_(e,!1)},t.prototype.getMax=function(){return this.max_},t.prototype.setMax=function(e){if(e<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=e,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(O.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()},t.prototype.getMin=function(){return this.min_},t.prototype.setMin=function(e){if(e>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=e,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(O.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()},t.prototype.getStep=function(){return this.step_},t.prototype.setStep=function(e){if(e<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof e||e<1)&&(e=1),this.step_=e,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()},t.prototype.isDisabled=function(){return this.disabled_},t.prototype.setDisabled=function(e){this.disabled_=e,this.toggleClass_(L.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.setAttribute(O.ARIA_DISABLED,"true"),this.adapter_.removeAttribute("tabindex")):(this.adapter_.removeAttribute(O.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter_.setAttribute("tabindex",String(this.savedTabIndex_)))},t.prototype.handleDown_=function(e){var t=this;if(!this.disabled_){this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);var i=function(e){t.handleMove_(e)},s=B[e.type],r=function(){t.handleUp_(),t.adapter_.deregisterBodyInteractionHandler(s,i),D.forEach((function(e){return t.adapter_.deregisterBodyInteractionHandler(e,r)}))};this.adapter_.registerBodyInteractionHandler(s,i),D.forEach((function(e){return t.adapter_.registerBodyInteractionHandler(e,r)})),this.setValueFromEvt_(e)}},t.prototype.handleMove_=function(e){e.preventDefault(),this.setValueFromEvt_(e)},t.prototype.handleUp_=function(){this.setActive_(!1),this.adapter_.notifyChange()},t.prototype.getClientX_=function(e){return e.targetTouches&&e.targetTouches.length>0?e.targetTouches[0].clientX:e.clientX},t.prototype.setValueFromEvt_=function(e){var t=this.getClientX_(e),i=this.computeValueFromClientX_(t);this.setValue_(i,!0)},t.prototype.computeValueFromClientX_=function(e){var t=this.max_,i=this.min_,s=(e-this.rect_.left)/this.rect_.width;return this.adapter_.isRTL()&&(s=1-s),i+s*(t-i)},t.prototype.handleKeydown_=function(e){var t=this.getKeyId_(e),i=this.getValueForKeyId_(t);isNaN(i)||(e.preventDefault(),this.adapter_.addClass(L.FOCUS),this.setValue_(i,!0),this.adapter_.notifyChange())},t.prototype.getKeyId_=function(e){return e.key===H||37===e.keyCode?H:e.key===V||39===e.keyCode?V:e.key===K||38===e.keyCode?K:e.key===P||40===e.keyCode?P:e.key===W||36===e.keyCode?W:e.key===X||35===e.keyCode?X:e.key===J||33===e.keyCode?J:e.key===Q||34===e.keyCode?Q:""},t.prototype.getValueForKeyId_=function(e){var t=this.max_,i=this.min_,s=this.step_||(t-i)/100;switch(this.adapter_.isRTL()&&(e===H||e===V)&&(s=-s),e){case H:case P:return this.value_-s;case V:case K:return this.value_+s;case W:return this.min_;case X:return this.max_;case J:return this.value_+s*U.PAGE_FACTOR;case Q:return this.value_-s*U.PAGE_FACTOR;default:return NaN}},t.prototype.handleFocus_=function(){this.preventFocusState_||this.adapter_.addClass(L.FOCUS)},t.prototype.handleBlur_=function(){this.preventFocusState_=!1,this.adapter_.removeClass(L.FOCUS)},t.prototype.setValue_=function(e,t,i){if(void 0===i&&(i=!1),e!==this.value_||i){var s=this.min_,r=this.max_,a=e===s||e===r;this.step_&&!a&&(e=this.quantize_(e)),e<s?e=s:e>r&&(e=r),e=e||0,this.value_=e,this.adapter_.setAttribute(O.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),t&&(this.adapter_.notifyInput(),this.isDiscrete_&&this.adapter_.setMarkerValue(e))}},t.prototype.quantize_=function(e){return Math.round(e/this.step_)*this.step_},t.prototype.updateUIForCurrentValue_=function(){var e=this,t=this.max_,i=this.min_,s=(this.value_-i)/(t-i),r=s*this.rect_.width;this.adapter_.isRTL()&&(r=this.rect_.width-r);var a=function(e,t){if(M(e)&&t in T){var i=e.document.createElement("div"),s=T[t],r=s.standard,a=s.prefixed;return r in i.style?r:a}return t}(window,"transform"),o=function(e,t){if(M(e)&&t in F){var i=e.document.createElement("div"),s=F[t],r=s.standard,a=s.prefixed;return s.cssProperty in i.style?r:a}return t}(window,"transitionend");if(this.inTransit_){var n=function(){e.setInTransit_(!1),e.adapter_.deregisterThumbContainerInteractionHandler(o,n)};this.adapter_.registerThumbContainerInteractionHandler(o,n)}requestAnimationFrame((function(){e.adapter_.setThumbContainerStyleProperty(a,"translateX("+r+"px) translateX(-50%)"),e.adapter_.setTrackStyleProperty(a,"scaleX("+s+")")}))},t.prototype.setActive_=function(e){this.active_=e,this.toggleClass_(L.ACTIVE,this.active_)},t.prototype.setInTransit_=function(e){this.inTransit_=e,this.toggleClass_(L.IN_TRANSIT,this.inTransit_)},t.prototype.toggleClass_=function(e,t){t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},t}(h);
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
const Y=new WeakMap,ee=m(e=>t=>{if(!(t instanceof g)||t instanceof _||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=t,{style:s}=i.element;Y.has(t)||(s.cssText=i.strings.join(" "));const r=Y.get(t);for(const t in r)t in e||(-1===t.indexOf("-")?s[t]=null:s.removeProperty(t));for(const t in e)-1===t.indexOf("-")?s[t]=e[t]:s.setProperty(t,e[t]);Y.set(t,e)});class te extends z{constructor(){super(...arguments),this.mdcFoundationClass=Z,this.value=0,this.min=0,this.max=100,this.step=0,this.disabled=!1,this.pin=!1,this.markers=!1,this.pinMarkerText="",this.trackMarkerContainerStyles={},this.thumbContainerStyles={},this.trackStyles={},this.isFoundationDestroyed=!1}render(){const e=0!==this.step,t={"mdc-slider--discrete":e,"mdc-slider--display-markers":this.markers&&e};let i="";e&&this.markers&&(i=s`
        <div
            class="mdc-slider__track-marker-container"
            style="${ee(this.trackMarkerContainerStyles)}">
        </div>`);let r="";return this.pin&&(r=s`
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker">${this.pinMarkerText}</span>
      </div>`),s`
      <div class="mdc-slider ${y(t)}"
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
              style="${ee(this.trackStyles)}">
          </div>
          ${i}
        </div>
        <div
            class="mdc-slider__thumb-container"
            style="${ee(this.thumbContainerStyles)}">
          <!-- TODO: use cache() directive -->
          ${r}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`}connectedCallback(){super.connectedCallback(),this.mdcRoot&&this.isFoundationDestroyed&&(this.isFoundationDestroyed=!1,this.mdcFoundation.init())}disconnectedCallback(){super.disconnectedCallback(),this.isFoundationDestroyed=!0,this.mdcFoundation.destroy()}createAdapter(){return Object.assign(Object.assign({},f(this.mdcRoot)),{getAttribute:e=>this.mdcRoot.getAttribute(e),setAttribute:(e,t)=>this.mdcRoot.setAttribute(e,t),removeAttribute:e=>this.mdcRoot.removeAttribute(e),computeBoundingRect:()=>{const e=this.mdcRoot.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left+window.pageXOffset,right:e.right,top:e.top,width:e.width}},getTabIndex:()=>this.mdcRoot.tabIndex,registerInteractionHandler:(e,t)=>{const i="touchstart"===e?w():void 0;this.mdcRoot.addEventListener(e,t,i)},deregisterInteractionHandler:(e,t)=>this.mdcRoot.removeEventListener(e,t),registerThumbContainerInteractionHandler:(e,t)=>{const i="touchstart"===e?w():void 0;this.thumbContainer.addEventListener(e,t,i)},deregisterThumbContainerInteractionHandler:(e,t)=>this.thumbContainer.removeEventListener(e,t),registerBodyInteractionHandler:(e,t)=>document.body.addEventListener(e,t),deregisterBodyInteractionHandler:(e,t)=>document.body.removeEventListener(e,t),registerResizeHandler:e=>window.addEventListener("resize",e,w()),deregisterResizeHandler:e=>window.removeEventListener("resize",e),notifyInput:()=>{const e=this.mdcFoundation.getValue();e!==this.value&&(this.value=e,this.dispatchEvent(new CustomEvent("input",{detail:this,composed:!0,bubbles:!0,cancelable:!0})))},notifyChange:()=>{this.dispatchEvent(new CustomEvent("change",{detail:this,composed:!0,bubbles:!0,cancelable:!0}))},setThumbContainerStyleProperty:(e,t)=>{this.thumbContainerStyles[e]=t,this.requestUpdate()},setTrackStyleProperty:(e,t)=>{this.trackStyles[e]=t,this.requestUpdate()},setMarkerValue:e=>this.pinMarkerText=e.toLocaleString(),setTrackMarkers:(e,t,i)=>{const s=e.toLocaleString(),r=`linear-gradient(to right, currentColor 2px, transparent 0) ${`0 center / calc((100% - 2px) / ${`((${t.toLocaleString()} - ${i.toLocaleString()}) / ${s})`}) 100% repeat-x`}`;this.trackMarkerContainerStyles.background=r,this.requestUpdate()},isRTL:()=>"rtl"===getComputedStyle(this.mdcRoot).direction})}resetFoundation(){this.mdcFoundation&&(this.mdcFoundation.destroy(),this.mdcFoundation.init())}layout(){this.mdcFoundation.layout()}}t([n(".mdc-slider")],te.prototype,"mdcRoot",void 0),t([n(".mdc-slider")],te.prototype,"formElement",void 0),t([n(".mdc-slider__thumb-container")],te.prototype,"thumbContainer",void 0),t([n(".mdc-slider__pin-value-marker")],te.prototype,"pinMarker",void 0),t([a({type:Number}),b((function(e){this.mdcFoundation.setValue(e)}))],te.prototype,"value",void 0),t([a({type:Number}),b((function(e){this.mdcFoundation.setMin(e)}))],te.prototype,"min",void 0),t([a({type:Number}),b((function(e){this.mdcFoundation.setMax(e)}))],te.prototype,"max",void 0),t([a({type:Number}),b((function(e,t){0!==t!==(0!==e)&&this.resetFoundation(),this.mdcFoundation.setStep(e)}))],te.prototype,"step",void 0),t([a({type:Boolean,reflect:!0}),b((function(e){this.mdcFoundation.setDisabled(e)}))],te.prototype,"disabled",void 0),t([a({type:Boolean,reflect:!0})],te.prototype,"pin",void 0),t([a({type:Boolean,reflect:!0}),b((function(){this.mdcFoundation.setupTrackMarker()}))],te.prototype,"markers",void 0),t([a({type:String})],te.prototype,"pinMarkerText",void 0),t([a({type:Object})],te.prototype,"trackMarkerContainerStyles",void 0),t([a({type:Object})],te.prototype,"thumbContainerStyles",void 0),t([a({type:Object})],te.prototype,"trackStyles",void 0),t([v({capture:!0,passive:!0})],te.prototype,"layout",null);
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
const ie=x`@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);opacity:.26}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary, #018786);stroke:#018786;stroke:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container::after{background-color:#9a9a9a;opacity:.26}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track-container::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;content:""}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:none}`;let se=class extends te{};se.styles=ie,se=t([i("mwc-slider")],se);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let re=class extends k{constructor(){super(...arguments),this.step=1,this.value=0,this.max=0,this.min=0,this.editable=null,this.pin=null,this.markers=null,this.marker_limit=30,this.disabled=null}static get styles(){return[S,R,$,I,j,x`
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
      `]}render(){return s`
      <div class="horizontal center layout">
      <mwc-slider id="slider" class="${this.id}" value="${this.value}"
          min="${this.min}" max="${this.max}" step="${this.step}"
          ?pin="${this.pin}"
          ?markers="${this.markers}"
          @change="${this.syncToText}">
      </mwc-slider>
      ${this.editable?s`
        <wl-textfield id="textfield" class="${this.id}" type="number"
          value="${this.value}" min="${this.min}" max="${this.max}" step="${this.step}"
          @change="${this.syncToSlider}">
        </wl-textfield>
      `:s``}
      </div>
    `}firstUpdated(){this.slider=this.shadowRoot.querySelector("#slider"),this.editable&&(this.textfield=this.shadowRoot.querySelector("#textfield"));const e=this.shadowRoot.querySelectorAll("wl-textfield");setTimeout(()=>{e.forEach(e=>{const t=e.getAttribute("step");e.$formElement.step=t})},100),this.checkMarkerDisplay()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(e){e.forEach((e,t)=>{if("value"===t){this.slider.layout();const e=new CustomEvent("value-changed",{detail:{}});this.dispatchEvent(e)}["min","max"].includes(t)&&this.checkMarkerDisplay()})}syncToText(){this.value=this.slider.value}syncToSlider(){let e=Math.round(this.textfield.value/this.step)*this.step;var t;this.textfield.value=e.toFixed((t=this.step,Math.floor(t)===t?0:t.toString().split(".")[1].length||0)),this.textfield.value>this.max&&(this.textfield.value=this.max),this.textfield.value<this.min&&(this.textfield.value=this.min),this.value=this.textfield.value}checkMarkerDisplay(){this.markers&&(this.max-this.min)/this.step>this.marker_limit&&this.slider.removeAttribute("markers")}};t([a({type:Number})],re.prototype,"step",void 0),t([a({type:Number})],re.prototype,"value",void 0),t([a({type:Number})],re.prototype,"max",void 0),t([a({type:Number})],re.prototype,"min",void 0),t([a({type:Boolean})],re.prototype,"editable",void 0),t([a({type:Boolean})],re.prototype,"pin",void 0),t([a({type:Boolean})],re.prototype,"markers",void 0),t([a({type:Number})],re.prototype,"marker_limit",void 0),t([a({type:Boolean})],re.prototype,"disabled",void 0),t([a({type:Object})],re.prototype,"slider",void 0),t([a({type:Object})],re.prototype,"textfield",void 0),re=t([i("lablup-slider")],re);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let ae=class extends E{constructor(){super(),this.direction="horizontal",this.location="",this.supports=Object(),this.supportImages=Object(),this.resourceLimits=Object(),this.userResourceLimit=Object(),this.aliases=Object(),this.tags=Object(),this.imageInfo=Object(),this.imageNames=Object(),this.marker_limit=25,this.gpu_step=.05,this.cpu_metric={min:"1",max:"1"},this.mem_metric={min:"1",max:"1"},this.shmem_metric={min:.0625,max:1,preferred:.0625},this.gpu_metric={min:0,max:0},this.tpu_metric={min:"1",max:"1"},this.aggregate_updating=!1,this.resourceGauge=Object(),this.ownerFeatureInitialized=!1,this.ownerDomain="",this.project_resource_monitor=!1,this.active=!1,this.ownerKeypairs=[],this.ownerGroups=[],this.ownerScalingGroups=[],this.init_resource()}static get is(){return"backend-ai-resource-monitor"}static get styles(){return[S,R,$,I,j,x`
        wl-card h4 {
          padding: 5px 20px;
          border-bottom: 1px solid #dddddd;
          font-weight: 100;
        }

        lablup-slider {
          width: 245px !important;
          --textfield-width: 50px;
          --slider-width: 170px;
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

        paper-progress {
          width: 90px;
          --paper-progress-height: 5px;
          --paper-progress-active-color: #98be5a;
          --paper-progress-secondary-color: #3677eb;
          --paper-progress-transition-duration: 0.08s;
          --paper-progress-transition-timing-function: ease;
          --paper-progress-transition-delay: 0s;
        }

        paper-progress.project-bar {
          --paper-progress-height: 15px;
        }

        paper-progress.start-bar {
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          --paper-progress-active-color: #3677eb;
        }

        paper-progress.middle-bar {
          --paper-progress-active-color: #4f8b46;
        }

        paper-progress.end-bar {
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          --paper-progress-active-color: #98be5a;
        }

        paper-progress.full-bar {
          border-radius: 3px;
          --paper-progress-height: 10px;
        }

        .resources.horizontal .short-indicator paper-progress {
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

        wl-select {
          --input-bg: transparent;
          --input-color: rgb(24, 24, 24);
          --input-color-disabled: rgb(24, 24, 24);
          --input-label-color: rgb(24, 24, 24);
          --input-label-font-size: 10px;
          --input-border-style: 0;
          --input-font-family: 'Quicksand', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", AppleSDGothic, "Apple SD Gothic Neo", NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
        }

        #scaling-group-select {
          width: 250px;
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

        #scaling-groups {
          width: 50%;
        }

        backend-ai-dropdown-menu {
          width: 100%;
        }

        #launch-session {
          --button-bg: var(--paper-red-50);
          --button-bg-hover: var(--paper-red-100);
          --button-bg-active: var(--paper-red-600);
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

        wl-button[fab] {
          --button-fab-size: 70px;
          border-radius: 6px;
        }

        wl-label {
          margin-right: 10px;
          outline: none;
        }
      `]}init_resource(){this.versions=["3.6"],this.languages=[],this.gpu_mode="no",this.defaultResourcePolicy="UNLIMITED",this.total_slot={},this.total_sg_slot={},this.total_pj_slot={},this.used_slot={},this.used_sg_slot={},this.used_pj_slot={},this.available_slot={},this.used_slot_percent={},this.used_sg_slot_percent={},this.used_pj_slot_percent={},this.resource_templates=[],this.vfolders=[],this.default_language="",this.launch_ready=!1,this.concurrency_used=0,this.concurrency_max=0,this.concurrency_limit=0,this._status="inactive",this.cpu_request=1,this.mem_request=1,this.shmem_request=.0625,this.gpu_request=0,this.session_request=1,this.scaling_groups=[],this.scaling_group="",this.enable_scaling_group=!1,this.sessions_list=[],this.metric_updating=!1,this.metadata_updating=!1,this.ownerFeatureInitialized=!1,this.ownerDomain="",this.ownerKeypairs=[],this.ownerGroups=[],this.ownerScalingGroups=[]}firstUpdated(){fetch("resources/image_metadata.json").then(e=>e.json()).then(e=>{this.imageInfo=e.imageInfo;for(let e in this.imageInfo)this.tags[e]=[],"name"in this.imageInfo[e]&&(this.aliases[e]=this.imageInfo[e].name,this.imageNames[e]=this.imageInfo[e].name),"label"in this.imageInfo[e]&&this.imageInfo[e].label.forEach(t=>{"category"in t||this.tags[e].push(t.tag)})}),this.shadowRoot.querySelector("#environment").addEventListener("selected-item-label-changed",this.updateLanguage.bind(this)),this.shadowRoot.querySelector("#version").addEventListener("selected-item-label-changed",this.updateMetric.bind(this)),this.resourceGauge=this.shadowRoot.querySelector("#resource-gauges"),document.body.clientWidth<750&&"horizontal"==this.direction&&(this.resourceGauge.style.display="none"),this.notification=window.lablupNotification;const e=this.shadowRoot.querySelector("#gpu-resource");document.addEventListener("backend-ai-resource-refreshed",()=>{this.active&&!1===this.metadata_updating&&(this.metadata_updating=!0,this.aggregateResource("resource-refreshed"),this.metadata_updating=!1)}),e.addEventListener("value-changed",()=>{e.value>0?this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!0:this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!1}),this.shadowRoot.querySelector("#use-gpu-checkbox").addEventListener("change",()=>{!0===this.shadowRoot.querySelector("#use-gpu-checkbox").checked?this.shadowRoot.querySelector("#gpu-resource").disabled=this.gpu_metric.min===this.gpu_metric.max:this.shadowRoot.querySelector("#gpu-resource").disabled=!0}),this.shadowRoot.querySelectorAll("wl-expansion").forEach(e=>{e.onKeyDown=e=>{13===e.keyCode&&e.preventDefault()}})}_initAliases(){for(let e in this.aliases)this.aliases[this.aliases[e]]=e}async updateScalingGroup(e=!1,t){if(""!=this.scaling_group&&""!==t.target.value&&t.target.value!==this.scaling_group&&(this.scaling_group=t.target.value,console.log(this.active),this.active)){if("vertical"===this.direction){this.shadowRoot.querySelector("#scaling-group-select-box").firstChild.value=this.scaling_group}this.shadowRoot.querySelector("#scaling-groups").value=this.scaling_group,!0===e?this._refreshResourcePolicy():this.updateMetric("session dialog")}}async _viewStateChanged(e){await this.updateComplete,this.active&&(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.project_resource_monitor=window.backendaiclient._config.allow_project_resource_monitor,this._updatePageVariables()},!0):(this.project_resource_monitor=window.backendaiclient._config.allow_project_resource_monitor,this._updatePageVariables()))}async _updatePageVariables(){if(this.active&&!1===this.metadata_updating){if(this.metadata_updating=!0,this.enable_scaling_group=window.backendaiclient.supports("scaling-group"),!0===this.enable_scaling_group&&""===this.scaling_group){const e=window.backendaiclient.current_group||null;let t=await window.backendaiclient.scalingGroup.list(e);if(this.scaling_groups=t.scaling_groups,"vertical"===this.direction){this.scaling_group=this.scaling_groups[0].name;let e=this.shadowRoot.querySelector("#scaling-group-select-box");e.hasChildNodes()&&e.removeChild(e.firstChild);let t=document.createElement("wl-select");t.label="Resource Group",t.name="scaling-group-select",t.id="scaling-group-select",t.value=this.scaling_group,t.addEventListener("input",this.updateScalingGroup.bind(this,!0));let i=document.createElement("option");i.setAttribute("disabled","true"),i.innerHTML="Select Resource Group",t.appendChild(i),this.scaling_groups.map(e=>{i=document.createElement("option"),i.value=e.name,this.scaling_group===e.name?i.selected=!0:i.selected=!1,i.innerHTML=e.name,t.appendChild(i)}),e.appendChild(t)}this.shadowRoot.querySelector("#scaling-groups").addEventListener("selected-item-label-changed",this.updateScalingGroup.bind(this,!1))}let e=["created_at"];window.backendaiclient.computeSession.list(e=e,status="RUNNING",null,1e3).then(e=>{this.sessions_list=e.compute_session_list.items.map(e=>e.created_at)}),this._initAliases(),this._refreshResourcePolicy(),this.aggregateResource("update-page-variable"),this.metadata_updating=!1}}_refreshConcurrency(){return window.backendaiclient.keypair.info(window.backendaiclient._config.accessKey,["concurrency_used"]).then(e=>{this.concurrency_used=e.keypair.concurrency_used})}_refreshResourcePolicy(){window.backendaiclient.keypair.info(window.backendaiclient._config.accessKey,["resource_policy","concurrency_used"]).then(e=>{let t=e.keypair.resource_policy;return this.concurrency_used=e.keypair.concurrency_used,window.backendaiclient.resourcePolicy.get(t,["default_for_unspecified","total_resource_slots","max_concurrent_sessions","max_containers_per_session"])}).then(e=>{let t=e.keypair_resource_policy;"UNLIMITED"===t.default_for_unspecified||"DefaultForUnspecified.UNLIMITED"===t.default_for_unspecified?this.defaultResourcePolicy="UNLIMITED":this.defaultResourcePolicy="LIMITED",this.userResourceLimit=JSON.parse(e.keypair_resource_policy.total_resource_slots),this.concurrency_max=t.max_concurrent_sessions,this._refreshImageList(),this._updateGPUMode(),this.updateMetric("refresh resource policy")}).catch(e=>{console.log(e),this.metadata_updating=!1,e&&e.message?(this.notification.text=C.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=C.relieve(e.title),this.notification.show(!0,e))})}async _launchSessionDialog(){if(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready)this.notification.text="Please wait while initializing...",this.notification.show();else{this.selectDefaultLanguage(),await this.updateMetric("launch session dialog"),this.shadowRoot.querySelector("#gpu-resource").value>0?this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!0:this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!1;const e=this.shadowRoot.querySelector('wl-expansion[name="ownership"]');window.backendaiclient.is_admin?e.style.display="block":e.style.display="none",this.shadowRoot.querySelector("#new-session-dialog").show()}}_updateGPUMode(){window.backendaiclient.getResourceSlots().then(e=>{let t=e;"cuda.device"in t&&(this.gpu_mode="gpu",this.gpu_step=1),"cuda.shares"in t&&(this.gpu_mode="fgpu",this.gpu_step=.05)})}_generateKernelIndex(e,t){return e+":"+t}_newSession(){let e=this.shadowRoot.querySelector("#environment").selectedItem.id,t=this.shadowRoot.querySelector("#version").value,i=this.shadowRoot.querySelector("#session-name").value,s=this.shadowRoot.querySelector("#vfolder").selectedValues;if(this.cpu_request=this.shadowRoot.querySelector("#cpu-resource").value,this.mem_request=this.shadowRoot.querySelector("#mem-resource").value,this.shmem_request=this.shadowRoot.querySelector("#shmem-resource").value,this.gpu_request=this.shadowRoot.querySelector("#gpu-resource").value,this.session_request=this.shadowRoot.querySelector("#session-resource").value,this.num_sessions=this.session_request,this.sessions_list.includes(i))return this.notification.text="Duplicate session name not allowed.",void this.notification.show();this.enable_scaling_group&&(this.scaling_group=this.shadowRoot.querySelector("#scaling-groups").value);let r={};if(window.backendaiclient.isAPIVersionCompatibleWith("v4.20190601")){r.group_name=window.backendaiclient.current_group,r.domain=window.backendaiclient._config.domainName,r.scaling_group=this.scaling_group,r.maxWaitSeconds=5;const e=this.shadowRoot.querySelector("#owner-enabled");if(e&&e.checked&&(r.group_name=this.shadowRoot.querySelector("#owner-group").selectedItemLabel,r.domain=this.ownerDomain,r.scaling_group=this.shadowRoot.querySelector("#owner-scaling-group").selectedItemLabel,r.owner_access_key=this.shadowRoot.querySelector("#owner-accesskey").selectedItemLabel,!(r.group_name&&r.domain&&r.scaling_group&&r.owner_access_key)))return this.notification.text="Not enough ownership information",void this.notification.show()}r.cpu=this.cpu_request,"fgpu"==this.gpu_mode?r.fgpu=this.gpu_request:r.gpu=this.gpu_request,"Infinity"===String(this.shadowRoot.querySelector("#mem-resource").value)?r.mem=String(this.shadowRoot.querySelector("#mem-resource").value):r.mem=String(this.mem_request)+"g",window.backendaiclient.isAPIVersionCompatibleWith("v4.20190601")&&(r.shmem=String(this.shmem_request)+"g"),!0!==this.shadowRoot.querySelector("#use-gpu-checkbox").checked&&("fgpu"==this.gpu_mode?r.fgpu=0:r.gpu=0),0==i.length&&(i=this.generateSessionId()),0!==s.length&&(r.mounts=s);const a=this._generateKernelIndex(e,t);this.shadowRoot.querySelector("#launch-button").disabled=!0,this.shadowRoot.querySelector("#launch-button-msg").textContent="Preparing...",this.notification.text="Preparing session...",this.notification.show();let o=[];const n=this._getRandomString();if(this.num_sessions>1)for(let e=1;e<=this.num_sessions;e++){let t={kernelName:a,sessionName:`${i}-${n}-${e}`,config:r};o.push(t)}else o.push({kernelName:a,sessionName:i,config:r});const l=o.map(e=>this._createKernel(e.kernelName,e.sessionName,e.config));Promise.all(l).then(e=>{this.shadowRoot.querySelector("#new-session-dialog").hide(),this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent="Launch",this.aggregateResource("session-creation");let t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t)}).catch(e=>{this.metadata_updating=!1,e&&e.message?(this.notification.text=C.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=C.relieve(e.title),this.notification.show(!0,e));let t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t),this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent="Launch"})}_getRandomString(){let e=Math.floor(52*Math.random()*52*52);let t="";for(let s=0;s<3;s++)t+=(i=e%52)<26?String.fromCharCode(65+i):String.fromCharCode(97+i-26),e=Math.floor(e/52);var i;return t}_createKernel(e,t,i){return window.backendaiclient.createKernel(e,t,i)}_hideSessionDialog(){this.shadowRoot.querySelector("#new-session-dialog").hide()}_guessHumanizedNames(e){const t=this.imageNames;let i="",s=null,r="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";return Object.keys(t).forEach((a,o)=>{let n=e.split("/");i=2==n.length?n[1]:n[2],i===a?(s=t[a],r=a):""===i&&e.endsWith(a)&&a.length<r.length&&(s=t[a],r=a)}),s}_updateEnvironment(){const e=Object.keys(this.supports);if(void 0===e)return;e.sort((e,t)=>this.supportImages[e].group>this.supportImages[t].group?1:-1);let t="";this.languages=[],e.forEach((e,i)=>{if(!Object.keys(this.aliases).includes(e)){const t=this._guessHumanizedNames(e);this.aliases[e]=null!==t?t:e}let s,r,a=e.split("/"),o=a[0];2==a.length?(s="",r=a[1]):(s=a[1],r=a[2]);let n,l=this.aliases[e];n=void 0!==l?l.split(" (")[0]:r,l=l.split("/").slice(-1)[0],n=n.split("/").slice(-1)[0];let c=[];r in this.tags&&(c=c.concat(this.tags[r])),""!=s&&c.push(s),t!==this.supportImages[e].group&&(this.languages.push({name:"",registry:"",prefix:"",kernelname:"",alias:"",basename:this.supportImages[e].group,tags:[],clickable:!1}),t=this.supportImages[e].group),this.languages.push({name:e,registry:o,prefix:s,kernelname:r,alias:l,basename:n,tags:c})}),this._initAliases()}_updateVersions(e){e in this.supports&&(this.versions=this.supports[e],this.versions.sort(),this.versions.reverse()),void 0!==this.versions&&(this.shadowRoot.querySelector("#version").value=this.versions[0],this.updateMetric("update versions"));const t=this.shadowRoot.querySelector("#version paper-listbox");t&&(t.selected=0)}generateSessionId(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=0;i<8;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e+"-console"}async _updateVirtualFolderList(){window.backendaiclient.vfolder.list(window.backendaiclient.current_group_id()).then(e=>{this.vfolders=e})}async _aggregateResourceUse(e=""){if(!0===this.aggregate_updating)return;this.aggregate_updating=!0;let t={},i={},s={};return window.backendaiclient.keypair.info(window.backendaiclient._config.accessKey,["concurrency_used"]).then(e=>{let t;if(this.concurrency_used=e.keypair.concurrency_used,1==this.enable_scaling_group&&this.scaling_groups.length>0){let e="";""!==this.scaling_group?e=this.scaling_group:(e=this.scaling_groups[0].name,this.scaling_group=e),t={group:window.backendaiclient.current_group,scaling_group:e}}else t={group:window.backendaiclient.current_group};return window.backendaiclient.resourcePreset.check(t)}).then(e=>{if(e.presets){let t=e.presets,i=[];t.forEach(e=>{!0===e.allocatable&&("cuda.shares"in e.resource_slots?e.gpu=e.resource_slots["cuda.shares"]:"cuda.device"in e.resource_slots?e.gpu=e.resource_slots["cuda.device"]:e.gpu=0,e.cpu=e.resource_slots.cpu,e.mem=window.backendaiclient.utils.changeBinaryUnit(e.resource_slots.mem,"g"),i.push(e))}),this.resource_templates=i}let r=e.keypair_remaining,a=e.keypair_using,o=e.group_limits,n=e.group_using;this.scaling_group;let l=e.scaling_groups[this.scaling_group].using,c=e.scaling_groups[this.scaling_group].remaining,d=e.keypair_limits;"cpu"in d&&(i.cpu_slot=Number(c.cpu)+Number(l.cpu),s.cpu_slot=Number(o.cpu),"Infinity"===d.cpu?t.cpu_slot=i.cpu_slot:t.cpu_slot=d.cpu),"mem"in d&&(i.mem_slot=parseFloat(window.backendaiclient.utils.changeBinaryUnit(c.mem,"g"))+parseFloat(window.backendaiclient.utils.changeBinaryUnit(l.mem,"g")),s.mem_slot=parseFloat(window.backendaiclient.utils.changeBinaryUnit(o.mem,"g")),"Infinity"===d.mem?t.mem_slot=i.mem_slot:t.mem_slot=parseFloat(window.backendaiclient.utils.changeBinaryUnit(d.mem,"g"))),t.mem_slot=t.mem_slot.toFixed(2),i.mem_slot=i.mem_slot.toFixed(2),"cuda.device"in d&&(i.gpu_slot=Number(c["cuda.device"])+Number(l["cuda.device"]),s.gpu_slot=Number(o["cuda.device"]),"Infinity"===d["cuda.device"]?t.gpu_slot=i.gpu_slot:t.gpu_slot=d["cuda.device"]),"cuda.shares"in d&&(i.fgpu_slot=Number(c["cuda.shares"])+Number(l["cuda.shares"]),s.fgpu_slot=Number(o["cuda.shares"]),"Infinity"===d["cuda.shares"]?t.fgpu_slot=i.fgpu_slot:t.fgpu_slot=d["cuda.shares"]);let u=Object(),p=Object(),h=Object(),m=Object(),g=Object();"cpu"in r&&(p.cpu_slot="cpu"in a?a.cpu:0,"Infinity"===r.cpu?u.cpu_slot=t.cpu_slot-p.cpu_slot:u.cpu_slot=r.cpu),"cpu"in c&&(m.cpu_slot="cpu"in l?l.cpu:0,h.cpu_slot=c.cpu),g.cpu_slot="cpu"in n?n.cpu:0,"mem"in r&&(p.mem_slot="mem"in a?parseFloat(window.backendaiclient.utils.changeBinaryUnit(a.mem,"g")):0,"Infinity"===r.mem?u.mem_slot=t.mem_slot-p.mem_slot:u.mem_slot=parseFloat(window.backendaiclient.utils.changeBinaryUnit(r.mem,"g"))),p.mem_slot=p.mem_slot.toFixed(2),"mem"in c&&(m.mem_slot="mem"in l?parseFloat(window.backendaiclient.utils.changeBinaryUnit(l.mem,"g")):0,h.mem_slot=parseFloat(window.backendaiclient.utils.changeBinaryUnit(c.mem,"g"))),m.mem_slot=m.mem_slot.toFixed(2),g.mem_slot="mem"in n?parseFloat(window.backendaiclient.utils.changeBinaryUnit(n.mem,"g")):0,g.mem_slot=g.mem_slot.toFixed(2),"cuda.device"in r&&(u.gpu_slot=r["cuda.device"],p.gpu_slot="cuda.device"in a?a["cuda.device"]:0),"cuda.device"in c&&(h.gpu_slot=c["cuda.device"],m.gpu_slot="cuda.device"in l?l["cuda.device"]:0),g.gpu_slot="cuda.device"in n?n["cuda.device"]:0,"cuda.shares"in r&&(u.fgpu_slot=r["cuda.shares"],p.fgpu_slot="cuda.shares"in a?parseFloat(a["cuda.shares"]).toFixed(2):0),"cuda.shares"in c&&(h.fgpu_slot=c["cuda.shares"],m.fgpu_slot="cuda.shares"in a?parseFloat(l["cuda.shares"]).toFixed(2):0),g.fgpu_slot="cuda.shares"in n?parseFloat(n["cuda.shares"]).toFixed(2):0,"fgpu_slot"in p&&(t.fgpu_slot=parseFloat(t.fgpu_slot).toFixed(2)),"fgpu_slot"in m&&(i.fgpu_slot=parseFloat(i.fgpu_slot).toFixed(2)),"fgpu_slot"in g&&(s.fgpu_slot=parseFloat(s.fgpu_slot).toFixed(2)),this.total_slot=t,this.total_sg_slot=i,this.total_pj_slot=s,this.used_slot=p,this.used_sg_slot=m,this.used_pj_slot=g;let _={},b={},v={};return["cpu_slot","mem_slot","gpu_slot","fgpu_slot"].forEach(e=>{e in p&&(Number(t[e])<Number(p[e])&&(t[e]=p[e]),0!=t[e]?_[e]=p[e]/t[e]*100:_[e]=0,0!=i[e]?b[e]=m[e]/i[e]*100:b[e]=0,0!=s[e]?v[e]=g[e]/s[e]*100:v[e]=0),e in u&&"Infinity"===u[e]&&(u[e]=h[e])}),this.used_pj_slot_percent=v,0===this.concurrency_max?(_.concurrency=0,u.concurrency=this.concurrency_max):(_.concurrency=this.concurrency_used/this.concurrency_max*100,u.concurrency=this.concurrency_max-this.concurrency_used),this.concurrency_limit=Math.min(u.concurrency,5),this.available_slot=h,this.used_slot_percent=_,this.used_sg_slot_percent=b,this.aggregate_updating=!1,this.available_slot}).catch(e=>{this.aggregate_updating=!1,e&&e.message&&(this.notification.text=C.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}aggregateResource(e=""){void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._aggregateResourceUse(e)},!0):this._aggregateResourceUse(e)}async updateMetric(e=""){if(1==this.metric_updating)return;if("refresh resource policy"===e)return this.metric_updating=!1,this._aggregateResourceUse("update-metric");let t=this.shadowRoot.querySelector("#environment").selectedItem,i=this.shadowRoot.querySelector("#version").value;if(null==t||t.getAttribute("disabled"))this.metric_updating=!1;else if(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready)document.addEventListener("backend-ai-connected",()=>{this.updateMetric(e)},!0);else{if(this.metric_updating=!0,await this._aggregateResourceUse("update-metric"),null==t)return void(this.metric_updating=!1);let e=t.id+":"+i,r=this.resourceLimits[e];await this._updateVirtualFolderList();let a=this.available_slot;if(!r)return void(this.metric_updating=!1);this.shadowRoot.querySelector("#cpu-resource").disabled=!1,this.shadowRoot.querySelector("#mem-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").disabled=!1,this.shadowRoot.querySelector("#session-resource").disabled=!1,this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent="Launch";let o=!1,n={min:.0625,max:1,preferred:.125};if(this.gpu_metric={min:0,max:0},r.forEach(e=>{if("cpu"===e.key){let t=Object.assign({},e);t.min=parseInt(t.min),"cpu"in this.userResourceLimit?0!==parseInt(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseInt(t.max),parseInt(this.userResourceLimit.cpu),a.cpu_slot):t.max=Math.min(parseInt(this.userResourceLimit.cpu),a.cpu_slot):0!==parseInt(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseInt(t.max),a.cpu_slot):t.max=this.available_slot.cpu_slot,t.min>=t.max&&(t.min>t.max?(t.min=t.max,t.max=t.max+1,o=!0,this.shadowRoot.querySelector("#cpu-resource").disabled=!0):(t.max=t.max+1,this.shadowRoot.querySelector("#cpu-resource").disabled=!0)),this.cpu_metric=t}if("cuda.device"===e.key&&"gpu"==this.gpu_mode){let t=Object.assign({},e);t.min=parseInt(t.min),"cuda.device"in this.userResourceLimit?0!==parseInt(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseInt(t.max),parseInt(this.userResourceLimit["cuda.device"]),a.fgpu_slot):t.max=Math.min(parseInt(this.userResourceLimit["cuda.device"]),a.gpu_slot):0!==parseInt(t.max)?t.max=Math.min(parseInt(t.max),a.gpu_slot):t.max=this.available_slot.gpu_slot,t.min>=t.max&&(t.min>t.max?(t.min=t.max,o=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!0):(t.max=t.max+1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0)),this.gpu_metric=t}if("cuda.shares"===e.key&&"fgpu"===this.gpu_mode){let t=Object.assign({},e);t.min=parseFloat(t.min),"cuda.shares"in this.userResourceLimit?0!==parseFloat(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseFloat(t.max),parseFloat(this.userResourceLimit["cuda.shares"]),a.fgpu_slot):t.max=Math.min(parseFloat(this.userResourceLimit["cuda.shares"]),a.fgpu_slot):0!==parseFloat(t.max)?t.max=Math.min(parseFloat(t.max),a.fgpu_slot):t.max=0,t.min>=t.max&&(t.min>t.max?(t.min=t.max,o=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!0):(t.max=t.max+1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0)),this.fgpu_metric=t,t.max>0&&(this.gpu_metric=t)}if("tpu"===e.key){let t=Object.assign({},e);t.min=parseInt(t.min),t.max=parseInt(t.max),t.min,t.max,this.tpu_metric=t}if("mem"===e.key){let t=Object.assign({},e);t.min=window.backendaiclient.utils.changeBinaryUnit(t.min,"g"),t.min<.1&&(t.min=.1);let i=window.backendaiclient.utils.changeBinaryUnit(t.max,"g","g");if("mem"in this.userResourceLimit){let e=window.backendaiclient.utils.changeBinaryUnit(this.userResourceLimit.mem,"g");0!==parseInt(i)?t.max=Math.min(parseFloat(i),parseFloat(e),a.mem_slot):t.max=parseFloat(e)}else 0!==parseInt(t.max)&&"Infinity"!==t.max&&!0!==isNaN(t.max)?t.max=Math.min(parseFloat(window.backendaiclient.utils.changeBinaryUnit(t.max,"g","g")),a.mem_slot):t.max=a.mem_slot;t.min>=t.max&&(t.min>t.max?(t.min=t.max,t.max=t.max+1,o=!0,this.shadowRoot.querySelector("#mem-resource").disabled=!0):(t.max=t.max+1,this.shadowRoot.querySelector("#mem-resource").disabled=!0)),t.min=Number(t.min.toFixed(2)),t.max=Number(t.max.toFixed(2)),this.mem_metric=t}"shmem"===e.key&&(n=Object.assign({},e),n.preferred="preferred"in n?window.backendaiclient.utils.changeBinaryUnit(n.preferred,"g","g"):.0625)}),n.max=this.mem_metric.max,n.min=.0625,n.min>=n.max&&(n.min>n.max?(n.min=n.max,n.max=n.max+1,o=!0,this.shadowRoot.querySelector("#shmem-resource").disabled=!0):(n.max=n.max+1,this.shadowRoot.querySelector("#shmem-resource").disabled=!0)),n.min=Number(n.min.toFixed(2)),n.max=Number(n.max.toFixed(2)),this.shmem_metric=n,0==this.gpu_metric.min&&0==this.gpu_metric.max){if(this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0,this.shadowRoot.querySelector("#gpu-resource").value=0,this.resource_templates!==[]&&this.resource_templates.length>0)for(var s=0;s<this.resource_templates.length;s++)parseFloat(this.resource_templates[s].gpu)>0&&(this.resource_templates.splice(s,1),s--)}else this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").value=this.gpu_metric.max;if(this.resource_templates!==[]&&this.resource_templates.length>0){let e=this.resource_templates[0];this._updateResourceIndicator(e.cpu,e.mem,e.gpu);let t=this.shadowRoot.querySelector("#resource-templates").getElementsByTagName("wl-button")[0];this.shadowRoot.querySelector("#resource-templates").selected="0",t.setAttribute("active",!0)}else this._updateResourceIndicator(this.cpu_metric.min,this.mem_metric.min,this.gpu_metric.min);o&&(this.shadowRoot.querySelector("#cpu-resource").disabled=!0,this.shadowRoot.querySelector("#mem-resource").disabled=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!0,this.shadowRoot.querySelector("#session-resource").disabled=!0,this.shadowRoot.querySelector("#launch-button").disabled=!0,this.shadowRoot.querySelector("#launch-button-msg").textContent="Not enough resource"),this.gpu_metric.min==this.gpu_metric.max&&(this.shadowRoot.querySelector("#gpu-resource").max=this.gpu_metric.max+1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0),1==this.concurrency_limit&&(this.shadowRoot.querySelector("#session-resource").max=2,this.shadowRoot.querySelector("#session-resource").value=1,this.shadowRoot.querySelector("#session-resource").disabled=!0),this.metric_updating=!1}}updateLanguage(){let e=this.shadowRoot.querySelector("#environment").selectedItem;if(null===e)return;let t=e.id;this._updateVersions(t)}_refreshImageList(){window.backendaiclient.image.list(["name","humanized_name","tag","registry","digest","installed","resource_limits { key min max }"],!0).then(e=>{const t=[];Object.keys(e.images).map((i,s)=>{const r=e.images[i];!0===r.installed&&t.push(r)}),0!==t.length&&(this.images=t,this.supports={},this.supportImages={},Object.keys(this.images).map((e,t)=>{const i=this.images[e],s=`${i.registry}/${i.name}`;let r;s in this.supports||(this.supports[s]=[]),this.supports[s].push(i.tag);let a=i.name.split("/");r=1===a.length?a[0]:a[1],this.supportImages[s]=this.imageInfo[r]||{name:"Custom Environments",description:"Custom-built images.",group:"Custom Environments",tags:[],label:[{category:"Custom",tag:"Custom",color:"black"}]},"group"in this.supportImages[s]||(this.supportImages[s].group="Custom Environments"),this.resourceLimits[`${s}:${i.tag}`]=i.resource_limits}),this._updateEnvironment())}).catch(e=>{this.metadata_updating=!1,e&&e.message&&(this.notification.text=C.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}changed(e){console.log(e)}isEmpty(e){return 0===e.length}_toggleAdvancedSettings(){this.shadowRoot.querySelector("#advanced-resource-settings").toggle()}_chooseResourceTemplate(e){const t=e.target.closest("wl-button"),i=t.cpu,s=t.mem,r=t.gpu;this.shmem_request=.0625,this._updateResourceIndicator(i,s,r)}_updateResourceIndicator(e,t,i){this.shadowRoot.querySelector("#gpu-resource").value=i,this.shadowRoot.querySelector("#shmem-resource").value=this.shmem_request,this.cpu_request=e,this.mem_request=t,this.gpu_request=i}selectDefaultLanguage(){void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._selectDefaultLanguage()},!0):this._selectDefaultLanguage()}_selectDefaultLanguage(){return void 0!==window.backendaiclient._config.default_session_environment&&"default_session_environment"in window.backendaiclient._config&&""!==window.backendaiclient._config.default_session_environment?this.default_language=window.backendaiclient._config.default_session_environment:this.languages.length>1?this.default_language=this.languages[1].name:0!==this.languages.length?this.default_language=this.languages[0].name:this.default_language="index.docker.io/lablup/ngc-tensorflow",!0}_selectDefaultVersion(e){return!1}async _fetchSessionOwnerGroups(){this.ownerFeatureInitialized||(this.shadowRoot.querySelector("#owner-group").addEventListener("selected-item-label-changed",this._fetchSessionOwnerScalingGroups.bind(this)),this.ownerFeatureInitialized=!0);const e=this.shadowRoot.querySelector("#owner-email"),t=e.value;if(!e.validate())return this.notification.text="Invalid email address",this.notification.show(),this.ownerKeypairs=[],void(this.ownerGroups=[]);const i=await window.backendaiclient.keypair.list(t,["access_key"]);if(this.ownerKeypairs=i.keypairs,this.ownerKeypairs.length<1)return this.notification.text="No active keypair",this.notification.show(),this.ownerKeypairs=[],void(this.ownerGroups=[]);this.shadowRoot.querySelector("#owner-accesskey paper-listbox").selected=this.ownerKeypairs[0].access_key;const s=await window.backendaiclient.user.get(t,["domain_name","groups {id name}"]);this.ownerDomain=s.user.domain_name,this.ownerGroups=s.user.groups,this.ownerGroups&&(this.shadowRoot.querySelector("#owner-group paper-listbox").selected=this.ownerGroups[0].name)}async _fetchSessionOwnerScalingGroups(){const e=this.shadowRoot.querySelector("#owner-group").selectedItemLabel;if(!e)return void(this.ownerScalingGroups=[]);const t=await window.backendaiclient.scalingGroup.list(e);this.ownerScalingGroups=t.scaling_groups,this.ownerScalingGroups&&(this.shadowRoot.querySelector("#owner-scaling-group paper-listbox").selected=0)}_toggleResourceGauge(){""==this.resourceGauge.style.display||"flex"==this.resourceGauge.style.display||"block"==this.resourceGauge.style.display?this.resourceGauge.style.display="none":(document.body.clientWidth<750?(this.resourceGauge.style.left="20px",this.resourceGauge.style.right="20px",this.resourceGauge.style.backgroundColor="var(--paper-red-800)"):this.resourceGauge.style.backgroundColor="transparent",this.resourceGauge.style.display="flex")}render(){return s`
      ${this.enable_scaling_group&&"vertical"===this.direction?s`
      <div id="scaling-group-select-box" class="layout horizontal start-justified">
      </div>
      `:s``}
      <div class="layout horizontal">
        <mwc-icon-button id="resource-gauge-toggle" icon="assessment" class="fg blue ${this.direction}"
          @click="${()=>this._toggleResourceGauge()}">
        </mwc-icon-button>
        <div id="resource-gauges" class="layout ${this.direction} resources flex" style="align-items: flex-start">
          <div class="layout horizontal start-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <iron-icon class="fg blue" icon="hardware:developer-board"></iron-icon>
              <div class="gauge-name">CPU</div>
            </div>
            <div class="layout vertical start-justified wrap short-indicator">
              <span class="gauge-label">${this.used_sg_slot.cpu_slot}/${this.total_sg_slot.cpu_slot}</span>
              <paper-progress id="cpu-usage-bar" class="start-bar" value="${this.used_sg_slot_percent.cpu_slot}"></paper-progress>
              <paper-progress id="cpu-usage-bar-2" class="end-bar" value="${this.used_slot_percent.cpu_slot}"></paper-progress>
              <span class="gauge-label">${this.used_slot.cpu_slot}/${this.total_slot.cpu_slot}</span>
            </div>
          </div>
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <iron-icon class="fg blue" icon="hardware:memory"></iron-icon>
              <span class="gauge-name">RAM</span>
            </div>
            <div class="layout vertical start-justified wrap">
              <span class="gauge-label">${this.used_sg_slot.mem_slot}/${this.total_sg_slot.mem_slot}GB</span>
              <paper-progress id="mem-usage-bar" class="start-bar" value="${this.used_sg_slot_percent.mem_slot}"></paper-progress>
              <paper-progress id="mem-usage-bar-2" class="end-bar" value="${this.used_slot_percent.mem_slot}"></paper-progress>
              <span class="gauge-label">${this.used_slot.mem_slot}/${this.total_slot.mem_slot}GB</span>
            </div>
          </div>
          ${this.total_slot.gpu_slot?s`
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <iron-icon class="fg blue" icon="icons:view-module"></iron-icon>
              <span class="gauge-name">GPU</span>
            </div>
            <div class="layout vertical center-justified wrap short-indicator">
              <span class="gauge-label">${this.used_sg_slot.gpu_slot}/${this.total_sg_slot.gpu_slot}</span>
              <paper-progress id="gpu-usage-bar" class="start-bar" value="${this.used_sg_slot_percent.gpu_slot}"></paper-progress>
              <paper-progress id="gpu-usage-bar-2" class="end-bar" value="${this.used_slot_percent.gpu_slot}"></paper-progress>
              <span class="gauge-label">${this.used_slot.gpu_slot}/${this.total_slot.gpu_slot}</span>
            </div>
          </div>`:s``}
          ${this.total_slot.fgpu_slot?s`
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <iron-icon class="fg blue" icon="icons:view-module"></iron-icon>
              <span class="gauge-name">FGPU</span>
            </div>
            <div class="layout vertical start-justified wrap short-indicator">
              <span class="gauge-label">${this.used_sg_slot.fgpu_slot}/${this.total_sg_slot.fgpu_slot}</span>
              <paper-progress id="gpu-usage-bar" class="start-bar" value="${this.used_sg_slot_percent.fgpu_slot}"></paper-progress>
              <paper-progress id="gpu-usage-bar-2" class="end-bar" value="${this.used_slot_percent.fgpu_slot}"></paper-progress>
              <span class="gauge-label">${this.used_slot.fgpu_slot}/${this.total_slot.fgpu_slot}</span>
            </div>
          </div>`:s``}
          <div class="layout horizontal center-justified monitor session">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <iron-icon class="fg blue" icon="icons:assignment"></iron-icon>
              <span class="gauge-name">Session</span>
            </div>
            <div class="layout vertical start-justified wrap short-indicator">
              <span class="gauge-label">${this.concurrency_used}/${this.concurrency_max}</span>
              <paper-progress class="short full-bar" id="concurrency-usage-bar" value="${this.used_slot_percent.concurrency}"></paper-progress>
              <span class="gauge-label">&nbsp;</span>
            </div>
          </div>
        </div>
        <div class="layout vertical" style="align-self: center;">
          <wl-button class="fg red" id="launch-session" ?fab=${"vertical"===this.direction} outlined @click="${()=>this._launchSessionDialog()}">
            <wl-icon>add</wl-icon>
            Start
          </wl-button>
        </div>
        <div class="flex"></div>
      </div>
      ${this.enable_scaling_group&&"vertical"===this.direction?s`
      <div class="vertical start-justified layout">
        <div class="layout horizontal center start-justified">
          <div style="width:10px;height:10px;margin-left:10px;margin-right:3px;background-color:#4775E3;"></div>
          <span style="margin-right:5px;">Current Resource Group (${this.scaling_group})</span>
        </div>
        <div class="layout horizontal center start-justified">
          <div style="width:10px;height:10px;margin-left:10px;margin-right:3px;background-color:#A0BD67"></div>
          <span style="margin-right:5px;">User Resource Limit</span>
        </div>
      </div>
`:s``}
      ${"vertical"===this.direction&&!0===this.project_resource_monitor&&0!=this.total_pj_slot.cpu_slot?s`
      <hr />
      <div class="vertical start-justified layout">
          <div class="flex"></div>
        <div class="layout horizontal center-justified monitor">
          <div class="layout vertical center center-justified" style="margin-right:5px;">
            <iron-icon class="fg blue" icon="icons:group-work"></iron-icon>
            <span class="gauge-name">Project</span>
          </div>
          <div class="layout vertical start-justified wrap short-indicator">
            <div class="layout horizontal">
              <span style="width:35px; margin-left:5px; margin-right:5px;">CPU</span>
              <paper-progress id="cpu-project-usage-bar" class="start-bar project-bar" value="${this.used_pj_slot_percent.cpu_slot}"></paper-progress>
              <span style="margin-left:5px;">${this.used_pj_slot.cpu_slot}/${this.total_pj_slot.cpu_slot===1/0?"∞":this.total_pj_slot.cpu_slot}</span>
            </div>
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">RAM</span>
              <paper-progress id="mem-project-usage-bar" class="middle-bar project-bar" value="${this.used_pj_slot_percent.mem_slot}"></paper-progress>
              <span style="margin-left:5px;">${this.used_pj_slot.mem_slot}/${this.total_pj_slot.mem_slot===1/0?"∞":this.total_pj_slot.mem_slot}</span>
            </div>
            ${this.total_pj_slot.gpu_slot?s`
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">GPU</span>
              <paper-progress id="gpu-project-usage-bar" class="end-bar project-bar" value="${this.used_pj_slot_percent.gpu_slot}"></paper-progress>
              <span style="margin-left:5px;">${this.used_pj_slot.gpu_slot}/${"Infinity"===this.total_pj_slot.gpu_slot?"∞":this.total_pj_slot.gpu_slot}</span>
            </div>`:s``}
            ${this.total_pj_slot.fgpu_slot?s`
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">GPU</span>
              <paper-progress id="gpu-project-usage-bar" class="end-bar project-bar" value="${this.used_pj_slot_percent.fgpu_slot}"></paper-progress>
              <span style="margin-left:5px;">${this.used_pj_slot.fgpu_slot}/${"Infinity"===this.total_pj_slot.fgpu_slot?"∞":this.total_pj_slot.fgpu_slot}</span>
            </div>`:s``}
          </div>
          <div class="flex"></div>
        </div>
      </div>
`:s``}
      <wl-dialog id="new-session-dialog"
                    fixed backdrop blockscrolling persistent
                    style="padding:0;">
        <wl-card class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>Start new session</span>
            <div class="flex"></div>
            <mwc-icon-button icon="close" class="blue close-button"
              @click="${()=>this._hideSessionDialog()}">
            </mwc-icon-button>
          </h3>
          <form id="launch-session-form">
            <fieldset>
              <div class="horizontal center layout">
                <paper-dropdown-menu id="environment" label="Environments" horizontal-align="left">
                  <paper-listbox slot="dropdown-content" attr-for-selected="id"
                                 selected="${this.default_language}">
                    ${this.languages.map(e=>s`
                      ${!1===e.clickable?s`
                        <h5 style="font-size:12px;padding: 0 10px 3px 10px;border-bottom:1px solid #ccc;" disabled="true">${e.basename}</h5>
                      `:s`
                        <paper-item id="${e.name}" label="${e.alias}">${e.basename}
                          ${e.tags?e.tags.map(e=>s`
                            <lablup-shields style="margin-left:5px;" description="${e}"></lablup-shields>
                          `):""}
                        </paper-item>
                      `}
                    `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu id="version" label="Version">
                  <paper-listbox slot="dropdown-content" selected="0">
              ${this.versions.map(e=>s`
                    <paper-item id="${e}" label="${e}">${e}</paper-item>
              `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
              <div style="display:none;">
                <paper-checkbox id="use-gpu-checkbox">Use GPU</paper-checkbox>
              </div>
              <div class="horizontal center layout">
                ${this.enable_scaling_group?s`
                <paper-dropdown-menu id="scaling-groups" label="Resource Group" horizontal-align="left">
                  <paper-listbox selected="0" slot="dropdown-content">
${this.scaling_groups.map(e=>s`
                      <paper-item id="${e.name}" label="${e.name}">${e.name}</paper-item>
      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                `:s``}
                <paper-input id="session-name" label="Session name (optional)"
                             value="" pattern="[a-zA-Z0-9_-]{4,}" auto-validate
                             error-message="4 or more characters / no whitespace">
                </paper-input>
              </div>
              <div class="horizontal center layout">
                <backend-ai-dropdown-menu id="vfolder" multi attr-for-selected="value" label="Folders to mount">
                ${this.vfolders.map(e=>s`
                  <paper-item value="${e.name}">${e.name}</paper-item>
                `)}
                </backend-ai-dropdown-menu>
              </div>

            </fieldset>
            <wl-expansion name="resource-group" open>
              <span slot="title">Resource allocation</span>
              <span slot="description"></span>
              <paper-listbox id="resource-templates" selected="0" class="horizontal center layout"
                             style="width:350px; overflow:scroll;">
${this.resource_templates.map(e=>s`
                <wl-button class="resource-button vertical center start layout" role="option"
                            style="height:140px;min-width:120px;" type="button"
                            flat outlined
                            @click="${this._chooseResourceTemplate}"
                            id="${e.name}-button"
                            .cpu="${e.cpu}"
                            .mem="${e.mem}"
                            .gpu="${e.gpu}">
                  <div>
                    <h4>${e.name}</h4>
                    <ul>
                      <li>${e.cpu} CPU</li>
                      <li>${e.mem}GB RAM</li>
                      ${e.gpu?s`<li>${e.gpu} fGPU</li>`:s`<li>NO GPU</li>`}
                      </ul>
                  </div>
                </wl-button>
              `)}
              ${this.isEmpty(this.resource_templates)?s`
                <wl-button class="resource-button vertical center start layout" role="option"
                            style="height:140px;width:350px;" type="button"
                            flat inverted outlined disabled>
                  <div>
                    <h4>No suitable preset</h4>
                    <div style="font-size:12px;">Use advanced settings to <br>start custom session</div>
                  </div>
                </wl-button>
`:s``}
              </paper-listbox>
            </wl-expansion>
            <wl-expansion name="resource-group">
              <span slot="title">Advanced</span>
              <span slot="description">Custom allocation</span>
              <div class="vertical layout">
                <div class="horizontal center layout">
                  <div class="resource-type" style="width:70px;">CPU</div>
                  <lablup-slider id="cpu-resource" class="cpu"
                                pin snaps expand editable markers
                                marker_limit="${this.marker_limit}"
                                min="${this.cpu_metric.min}" max="${this.cpu_metric.max}"
                                value="${this.cpu_request}"></lablup-slider>
                  <span class="caption">Core</span>
                </div>
                <div class="horizontal center layout">
                  <div class="resource-type" style="width:70px;">RAM</div>
                  <lablup-slider id="mem-resource" class="mem"
                                pin snaps step=0.05 editable markers
                                marker_limit="${this.marker_limit}"
                                min="${this.mem_metric.min}" max="${this.mem_metric.max}"
                                value="${this.mem_request}"></lablup-slider>
                  <span class="caption">GB</span>
                </div>
                <div class="horizontal center layout">
                  <div class="resource-type" style="width:70px;">Shared Memory</div>
                  <lablup-slider id="shmem-resource" class="mem"
                                pin snaps step=0.0025 editable markers
                                marker_limit="${this.marker_limit}"
                                min="0.0" max="${this.shmem_metric.max}"
                                value="${this.shmem_request}"></lablup-slider>
                  <span class="caption">GB</span>
                </div>
                <div class="horizontal center layout">
                  <div class="resource-type" style="width:70px;">GPU</div>
                  <lablup-slider id="gpu-resource" class="gpu"
                                pin snaps editable markers step="${this.gpu_step}"
                                marker_limit="${this.marker_limit}"
                                min="0.0" max="${this.gpu_metric.max}" value="${this.gpu_request}"></lablup-slider>
                  <span class="caption">GPU</span>
                </div>
                <div class="horizontal center layout">
                  <div class="resource-type" style="width:70px;">Sessions</div>
                  <lablup-slider id="session-resource" class="session"
                                pin snaps editable markers step="1"
                                marker_limit="${this.marker_limit}"
                                min="1" max="${this.concurrency_limit}" value="${this.session_request}"></lablup-slider>
                  <span class="caption">#</span>
                </div>
              </div>
            </wl-expansion>

            <wl-expansion name="ownership">
              <span slot="title">Ownership</span>
              <span slot="description">Set session owner</span>
              <div class="vertical layout">
                <div class="horizontal center layout">
                  <paper-input id="owner-email" class="flex" value=""
                    pattern="^.+@.+\..+$"
                    label="Owner Email" size="40"></paper-input>
                  <mwc-icon-button icon="refresh" class="blue"
                    @click="${()=>this._fetchSessionOwnerGroups()}">
                  </mwc-icon-button>
                </div>
                <paper-dropdown-menu id="owner-accesskey" label="Owner access key">
                  <paper-listbox slot="dropdown-content" attr-for-selected="id">
                    ${this.ownerKeypairs.map(e=>s`
                      <paper-item id="${e.access_key}" label="${e.access_key}">${e.access_key}</paper-item>
                    `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <div class="horizontal center layout">
                  <paper-dropdown-menu id="owner-group" label="Owner group" horizontal-align="left">
                    <paper-listbox slot="dropdown-content" attr-for-selected="id"
                                  selected="${this.default_language}">
                      ${this.ownerGroups.map(e=>s`
                        <paper-item id="${e.name}" label="${e.name}">${e.name}</paper-item>
                      `)}
                    </paper-listbox>
                  </paper-dropdown-menu>
                  <paper-dropdown-menu id="owner-scaling-group" label="Owner resource group">
                    <paper-listbox slot="dropdown-content" selected="0">
                      ${this.ownerScalingGroups.map(e=>s`
                        <paper-item id="${e.name}" label="${e.name}">${e.name}</paper-item>
                      `)}
                    </paper-listbox>
                  </paper-dropdown-menu>
                </div>
                <wl-label>
                  <wl-checkbox id="owner-enabled"></wl-checkbox>
                  Launch session on behalf of the access key
                </wl-label>
              </div>
            </wl-expansion>

            <fieldset style="padding-top:0;">
              <wl-button class="launch-button" type="button" id="launch-button"
                                           outlined @click="${()=>this._newSession()}">
                                          <wl-icon>rowing</wl-icon>
                <span id="launch-button-msg">Launch</span>
              </wl-button>
            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>
`}};t([a({type:String})],ae.prototype,"direction",void 0),t([a({type:String})],ae.prototype,"location",void 0),t([a({type:Object})],ae.prototype,"supports",void 0),t([a({type:Object})],ae.prototype,"supportImages",void 0),t([a({type:Object})],ae.prototype,"resourceLimits",void 0),t([a({type:Object})],ae.prototype,"userResourceLimit",void 0),t([a({type:Object})],ae.prototype,"aliases",void 0),t([a({type:Object})],ae.prototype,"tags",void 0),t([a({type:Object})],ae.prototype,"imageInfo",void 0),t([a({type:Object})],ae.prototype,"imageNames",void 0),t([a({type:Array})],ae.prototype,"versions",void 0),t([a({type:Array})],ae.prototype,"languages",void 0),t([a({type:Number})],ae.prototype,"marker_limit",void 0),t([a({type:String})],ae.prototype,"gpu_mode",void 0),t([a({type:Number})],ae.prototype,"gpu_step",void 0),t([a({type:Object})],ae.prototype,"cpu_metric",void 0),t([a({type:Object})],ae.prototype,"mem_metric",void 0),t([a({type:Object})],ae.prototype,"shmem_metric",void 0),t([a({type:Object})],ae.prototype,"gpu_metric",void 0),t([a({type:Object})],ae.prototype,"fgpu_metric",void 0),t([a({type:Object})],ae.prototype,"tpu_metric",void 0),t([a({type:Object})],ae.prototype,"images",void 0),t([a({type:String})],ae.prototype,"defaultResourcePolicy",void 0),t([a({type:Object})],ae.prototype,"total_slot",void 0),t([a({type:Object})],ae.prototype,"total_sg_slot",void 0),t([a({type:Object})],ae.prototype,"total_pj_slot",void 0),t([a({type:Object})],ae.prototype,"used_slot",void 0),t([a({type:Object})],ae.prototype,"used_sg_slot",void 0),t([a({type:Object})],ae.prototype,"used_pj_slot",void 0),t([a({type:Object})],ae.prototype,"available_slot",void 0),t([a({type:Number})],ae.prototype,"concurrency_used",void 0),t([a({type:Number})],ae.prototype,"concurrency_max",void 0),t([a({type:Number})],ae.prototype,"concurrency_limit",void 0),t([a({type:Array})],ae.prototype,"vfolders",void 0),t([a({type:Object})],ae.prototype,"used_slot_percent",void 0),t([a({type:Object})],ae.prototype,"used_sg_slot_percent",void 0),t([a({type:Object})],ae.prototype,"used_pj_slot_percent",void 0),t([a({type:Array})],ae.prototype,"resource_templates",void 0),t([a({type:String})],ae.prototype,"default_language",void 0),t([a({type:Boolean})],ae.prototype,"launch_ready",void 0),t([a({type:Number})],ae.prototype,"cpu_request",void 0),t([a({type:Number})],ae.prototype,"mem_request",void 0),t([a({type:Number})],ae.prototype,"shmem_request",void 0),t([a({type:Number})],ae.prototype,"gpu_request",void 0),t([a({type:Number})],ae.prototype,"session_request",void 0),t([a({type:Boolean})],ae.prototype,"_status",void 0),t([a({type:Number})],ae.prototype,"num_sessions",void 0),t([a({type:String})],ae.prototype,"scaling_group",void 0),t([a({type:Array})],ae.prototype,"scaling_groups",void 0),t([a({type:Boolean})],ae.prototype,"enable_scaling_group",void 0),t([a({type:Array})],ae.prototype,"sessions_list",void 0),t([a({type:Boolean})],ae.prototype,"metric_updating",void 0),t([a({type:Boolean})],ae.prototype,"metadata_updating",void 0),t([a({type:Boolean})],ae.prototype,"aggregate_updating",void 0),t([a({type:Object})],ae.prototype,"scaling_group_selection_box",void 0),t([a({type:Object})],ae.prototype,"resourceGauge",void 0),t([a({type:Boolean})],ae.prototype,"ownerFeatureInitialized",void 0),t([a({type:String})],ae.prototype,"ownerDomain",void 0),t([a({type:Array})],ae.prototype,"ownerKeypairs",void 0),t([a({type:Array})],ae.prototype,"ownerGroups",void 0),t([a({type:Array})],ae.prototype,"ownerScalingGroups",void 0),t([a({type:Boolean})],ae.prototype,"project_resource_monitor",void 0),ae=t([i("backend-ai-resource-monitor")],ae);
