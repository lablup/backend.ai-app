import{C as e,z as t,M as i,_ as o,l as a,q as r,e as l,ah as s,F as d,m as n,G as c,H as h,R as p,$ as u,ag as m,u as g,w as f,r as b,n as v,ak as y,af as w,B as _,b as x,I as k,a as F,c as $,t as S,g as R,y as C,d as z,o as T}from"./backend-ai-webui-29a04808.js";import"./mwc-switch-e596012f.js";import"./mwc-tab-bar-83be8cdd.js";import"./label-f49b9d87.js";import"./select-4843f23c.js";import"./tab-group-eb36573d.js";import"./textfield-e939229b.js";import"./chart-js-c8c78020.js";import{a2 as E,a3 as D,F as I,a4 as j,P as L,r as O,E as q,T as P,h as N}from"./vaadin-grid-324151db.js";import"./vaadin-grid-sort-column-5a315bda.js";import"./vaadin-grid-filter-column-6c0e4354.js";import"./vaadin-grid-selection-column-ef5940fe.js";import"./vaadin-item-styles-461be75c.js";import"./vaadin-item-c98fe8ed.js";import{t as A}from"./tus-4013acdb.js";import"./lablup-activity-panel-0d4aa16a.js";import"./input-behavior-3fd94ba0.js";import"./radio-behavior-57c4111b.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const M=Symbol("selection controller");class U{constructor(){this.selected=null,this.ordered=null,this.set=new Set}}class B{constructor(e){this.sets={},this.focusedSet=null,this.mouseIsDown=!1,this.updating=!1,e.addEventListener("keydown",(e=>{this.keyDownHandler(e)})),e.addEventListener("mousedown",(()=>{this.mousedownHandler()})),e.addEventListener("mouseup",(()=>{this.mouseupHandler()}))}static getController(e){const t=!("global"in e)||"global"in e&&e.global?document:e.getRootNode();let i=t[M];return void 0===i&&(i=new B(t),t[M]=i),i}keyDownHandler(e){const t=e.target;"checked"in t&&this.has(t)&&("ArrowRight"==e.key||"ArrowDown"==e.key?this.selectNext(t):"ArrowLeft"!=e.key&&"ArrowUp"!=e.key||this.selectPrevious(t))}mousedownHandler(){this.mouseIsDown=!0}mouseupHandler(){this.mouseIsDown=!1}has(e){return this.getSet(e.name).set.has(e)}selectPrevious(e){const t=this.getOrdered(e),i=t.indexOf(e),o=t[i-1]||t[t.length-1];return this.select(o),o}selectNext(e){const t=this.getOrdered(e),i=t.indexOf(e),o=t[i+1]||t[0];return this.select(o),o}select(e){e.click()}focus(e){if(this.mouseIsDown)return;const t=this.getSet(e.name),i=this.focusedSet;this.focusedSet=t,i!=t&&t.selected&&t.selected!=e&&t.selected.focus()}isAnySelected(e){const t=this.getSet(e.name);for(const e of t.set)if(e.checked)return!0;return!1}getOrdered(e){const t=this.getSet(e.name);return t.ordered||(t.ordered=Array.from(t.set),t.ordered.sort(((e,t)=>e.compareDocumentPosition(t)==Node.DOCUMENT_POSITION_PRECEDING?1:0))),t.ordered}getSet(e){return this.sets[e]||(this.sets[e]=new U),this.sets[e]}register(e){const t=e.name||e.getAttribute("name")||"",i=this.getSet(t);i.set.add(e),i.ordered=null}unregister(e){const t=this.getSet(e.name);t.set.delete(e),t.ordered=null,t.selected==e&&(t.selected=null)}update(e){if(this.updating)return;this.updating=!0;const t=this.getSet(e.name);if(e.checked){for(const i of t.set)i!=e&&(i.checked=!1);t.selected=e}if(this.isAnySelected(e))for(const e of t.set){if(void 0===e.formElementTabIndex)break;e.formElementTabIndex=e.checked?0:-1}this.updating=!1}}
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
 */var V={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},H={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"},W=function(i){function o(e){return i.call(this,t(t({},o.defaultAdapter),e))||this}return e(o,i),Object.defineProperty(o,"cssClasses",{get:function(){return H},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return V},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),o.prototype.setDisabled=function(e){var t=o.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(t):this.adapter.removeClass(t)},o}(i);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Q extends h{constructor(){super(...arguments),this._checked=!1,this.useStateLayerCustomProperties=!1,this.global=!1,this.disabled=!1,this.value="on",this.name="",this.reducedTouchTarget=!1,this.mdcFoundationClass=W,this.formElementTabIndex=0,this.focused=!1,this.shouldRenderRipple=!1,this.rippleElement=null,this.rippleHandlers=new p((()=>(this.shouldRenderRipple=!0,this.ripple.then((e=>{this.rippleElement=e})),this.ripple)))}get checked(){return this._checked}set checked(e){var t,i;const o=this._checked;e!==o&&(this._checked=e,this.formElement&&(this.formElement.checked=e),null===(t=this._selectionController)||void 0===t||t.update(this),!1===e&&(null===(i=this.formElement)||void 0===i||i.blur()),this.requestUpdate("checked",o),this.dispatchEvent(new Event("checked",{bubbles:!0,composed:!0})))}_handleUpdatedValue(e){this.formElement.value=e}renderRipple(){return this.shouldRenderRipple?u`<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>`:""}get isRippleActive(){var e;return(null===(e=this.rippleElement)||void 0===e?void 0:e.isActive)||!1}connectedCallback(){super.connectedCallback(),this._selectionController=B.getController(this),this._selectionController.register(this),this._selectionController.update(this)}disconnectedCallback(){this._selectionController.unregister(this),this._selectionController=void 0}focus(){this.formElement.focus()}createAdapter(){return Object.assign(Object.assign({},m(this.mdcRoot)),{setNativeControlDisabled:e=>{this.formElement.disabled=e}})}handleFocus(){this.focused=!0,this.handleRippleFocus()}handleClick(){this.formElement.focus()}handleBlur(){this.focused=!1,this.formElement.blur(),this.rippleHandlers.endFocus()}setFormData(e){this.name&&this.checked&&e.append(this.name,this.value)}render(){const e={"mdc-radio--touch":!this.reducedTouchTarget,"mdc-ripple-upgraded--background-focused":this.focused,"mdc-radio--disabled":this.disabled};return u`
      <div class="mdc-radio ${g(e)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${f(this.ariaLabel)}"
          aria-labelledby="${f(this.ariaLabelledBy)}"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        ${this.renderRipple()}
      </div>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}changeHandler(){this.checked=this.formElement.checked}}o([a(".mdc-radio")],Q.prototype,"mdcRoot",void 0),o([a("input")],Q.prototype,"formElement",void 0),o([r()],Q.prototype,"useStateLayerCustomProperties",void 0),o([l({type:Boolean})],Q.prototype,"global",void 0),o([l({type:Boolean,reflect:!0})],Q.prototype,"checked",null),o([l({type:Boolean}),s((function(e){this.mdcFoundation.setDisabled(e)}))],Q.prototype,"disabled",void 0),o([l({type:String}),s((function(e){this._handleUpdatedValue(e)}))],Q.prototype,"value",void 0),o([l({type:String})],Q.prototype,"name",void 0),o([l({type:Boolean})],Q.prototype,"reducedTouchTarget",void 0),o([l({type:Number})],Q.prototype,"formElementTabIndex",void 0),o([r()],Q.prototype,"focused",void 0),o([r()],Q.prototype,"shouldRenderRipple",void 0),o([d("mwc-ripple")],Q.prototype,"ripple",void 0),o([n,l({attribute:"aria-label"})],Q.prototype,"ariaLabel",void 0),o([n,l({attribute:"aria-labelledby"})],Q.prototype,"ariaLabelledBy",void 0),o([c({passive:!0})],Q.prototype,"handleRippleTouchStart",null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const G=b`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let X=class extends Q{};X.styles=[G],X=o([v("mwc-radio")],X);
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
var K={ROOT:"mdc-form-field"},Y={LABEL_SELECTOR:".mdc-form-field > label"},Z=function(i){function o(e){var a=i.call(this,t(t({},o.defaultAdapter),e))||this;return a.click=function(){a.handleClick()},a}return e(o,i),Object.defineProperty(o,"cssClasses",{get:function(){return K},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return Y},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),o.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},o.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},o.prototype.handleClick=function(){var e=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){e.adapter.deactivateInputRipple()}))},o}(i);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class J extends w{constructor(){super(...arguments),this.alignEnd=!1,this.spaceBetween=!1,this.nowrap=!1,this.label="",this.mdcFoundationClass=Z}createAdapter(){return{registerInteractionHandler:(e,t)=>{this.labelEl.addEventListener(e,t)},deregisterInteractionHandler:(e,t)=>{this.labelEl.removeEventListener(e,t)},activateInputRipple:async()=>{const e=this.input;if(e instanceof h){const t=await e.ripple;t&&t.startPress()}},deactivateInputRipple:async()=>{const e=this.input;if(e instanceof h){const t=await e.ripple;t&&t.endPress()}}}}get input(){var e,t;return null!==(t=null===(e=this.slottedInputs)||void 0===e?void 0:e[0])&&void 0!==t?t:null}render(){const e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return u`
      <div class="mdc-form-field ${g(e)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`}click(){this._labelClick()}_labelClick(){const e=this.input;e&&(e.focus(),e.click())}}o([l({type:Boolean})],J.prototype,"alignEnd",void 0),o([l({type:Boolean})],J.prototype,"spaceBetween",void 0),o([l({type:Boolean})],J.prototype,"nowrap",void 0),o([l({type:String}),s((async function(e){var t;null===(t=this.input)||void 0===t||t.setAttribute("aria-label",e)}))],J.prototype,"label",void 0),o([a(".mdc-form-field")],J.prototype,"mdcRoot",void 0),o([y("",!0,"*")],J.prototype,"slottedInputs",void 0),o([a("label")],J.prototype,"labelEl",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ee=b`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let te=class extends J{};te.styles=[ee],te=o([v("mwc-formfield")],te);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class ie extends(E(L)){static get is(){return"vaadin-grid-column-group"}static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_groupFrozenChanged(frozen, _rootColumns)","_groupFrozenToEndChanged(frozenToEnd, _rootColumns)","_groupHiddenChanged(hidden)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(e,t){"hidden"===e&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1),/flexGrow|width|hidden|_childColumns/.test(e)&&this._updateFlexAndWidth(),"frozen"===e&&(this.frozen=this.frozen||t),"lastFrozen"===e&&(this._lastFrozen=this._lastFrozen||t),"frozenToEnd"===e&&(this.frozenToEnd=this.frozenToEnd||t),"firstFrozenToEnd"===e&&(this._firstFrozenToEnd=this._firstFrozenToEnd||t)}_groupOrderChanged(e,t){if(t){const i=t.slice(0);if(!e)return void i.forEach((e=>e._order=0));const o=10**(/(0+)$/.exec(e).pop().length-(1+~~(Math.log(t.length)/Math.LN10)));i[0]&&i[0]._order&&i.sort(((e,t)=>e._order-t._order)),D(i,o,e)}}_groupReorderStatusChanged(e,t){void 0!==e&&void 0!==t&&t.forEach((t=>t._reorderStatus=e))}_groupResizableChanged(e,t){void 0!==e&&void 0!==t&&t.forEach((t=>t.resizable=e))}_updateVisibleChildColumns(e){this._visibleChildColumns=Array.prototype.filter.call(e,(e=>!e.hidden)),this._colSpan=this._visibleChildColumns.length,this._updateAutoHidden()}_updateFlexAndWidth(){if(this._visibleChildColumns){if(this._visibleChildColumns.length>0){const e=this._visibleChildColumns.reduce(((e,t)=>e+` + ${(t.width||"0px").replace("calc","")}`),"").substring(3);this._setWidth(`calc(${e})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,((e,t)=>e+t.flexGrow),0))}}_groupFrozenChanged(e,t){void 0!==t&&void 0!==e&&!1!==e&&Array.from(t).forEach((t=>t.frozen=e))}_groupFrozenToEndChanged(e,t){void 0!==t&&void 0!==e&&!1!==e&&Array.from(t).forEach((t=>t.frozenToEnd=e))}_groupHiddenChanged(e){(e||this.__groupHiddenInitialized)&&this._synchronizeHidden(),this.__groupHiddenInitialized=!0}_updateAutoHidden(){const e=this._autoHidden;this._autoHidden=0===(this._visibleChildColumns||[]).length,(e||this._autoHidden)&&(this.hidden=this._autoHidden)}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach((e=>e.hidden=this.hidden))}_colSpanChanged(e,t,i){t&&(t.setAttribute("colspan",e),this._grid&&this._grid._a11yUpdateCellColspan(t,e)),i&&(i.setAttribute("colspan",e),this._grid&&this._grid._a11yUpdateCellColspan(i,e))}_getChildColumns(e){return I.getFlattenedNodes(e).filter(this._isColumnElement)}_addNodeObserver(){this._observer=new I(this,(e=>{(e.addedNodes.filter(this._isColumnElement).length>0||e.removedNodes.filter(this._isColumnElement).length>0)&&(this._preventHiddenSynchronization=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1,j.run((()=>{this._grid&&this._grid._updateColumnTree&&this._grid._updateColumnTree()})))})),this._observer.flush()}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}}customElements.define(ie.is,ie),O("vaadin-progress-bar",b`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
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

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
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
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const oe=document.createElement("template");oe.innerHTML="\n  <style>\n    @keyframes vaadin-progress-pulse3 {\n      0% { opacity: 1; }\n      10% { opacity: 0; }\n      40% { opacity: 0; }\n      50% { opacity: 1; }\n      50.1% { opacity: 1; }\n      60% { opacity: 0; }\n      90% { opacity: 0; }\n      100% { opacity: 1; }\n    }\n  </style>\n",document.head.appendChild(oe.content);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const ae=e=>class extends e{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,t,i){const o=this._normalizeValue(e,t,i);this.style.setProperty("--vaadin-progress-value",o)}_valueChanged(e){this.setAttribute("aria-valuenow",e)}_minChanged(e){this.setAttribute("aria-valuemin",e)}_maxChanged(e){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,t,i){let o;return e||0===e?t>=i?o=1:(o=(e-t)/(i-t),o=Math.min(Math.max(o,0),1)):o=0,o}}
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class re extends(q(P(ae(L)))){static get template(){return N`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          height: 8px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='bar'] {
          height: 100%;
        }

        [part='value'] {
          height: 100%;
          transform-origin: 0 50%;
          transform: scaleX(var(--vaadin-progress-value));
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='value'] {
          transform-origin: 100% 50%;
        }
      </style>

      <div part="bar">
        <div part="value"></div>
      </div>
    `}static get is(){return"vaadin-progress-bar"}}customElements.define(re.is,re);
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */
let le=class extends _{constructor(){super(),this._APIMajorVersion=5,this.storageType="general",this.folders=[],this.folderInfo=Object(),this.is_admin=!1,this.enableStorageProxy=!1,this.authenticated=!1,this.renameFolderName="",this.deleteFolderName="",this.leaveFolderName="",this.explorer=Object(),this.explorerFiles=[],this.existingFile="",this.invitees=[],this.selectedFolder="",this.selectedFolderType="",this.downloadURL="",this.uploadFiles=[],this.fileUploadQueue=[],this.fileUploadCount=0,this.concurrentFileUploadLimit=2,this.vhost="",this.vhosts=[],this.allowedGroups=[],this.fileListGrid=Object(),this.indicator=Object(),this.notification=Object(),this.renameFileDialog=Object(),this.deleteFileDialog=Object(),this.downloadFileDialog=Object(),this.sessionLauncher=Object(),this.spinner=Object(),this.allowed_folder_type=[],this.uploadFilesExist=!1,this._boundIndexRenderer=Object(),this._boundTypeRenderer=Object(),this._boundFolderListRenderer=Object(),this._boundControlFolderListRenderer=Object(),this._boundControlFileListRenderer=Object(),this._boundPermissionViewRenderer=Object(),this._boundOwnerRenderer=Object(),this._boundFileNameRenderer=Object(),this._boundCreatedTimeRenderer=Object(),this._boundPermissionRenderer=Object(),this._boundCloneableRenderer=Object(),this._boundQuotaRenderer=Object(),this._boundUploadListRenderer=Object(),this._boundUploadProgressRenderer=Object(),this._boundInviteeInfoRenderer=Object(),this._boundIDRenderer=Object(),this._uploadFlag=!0,this._folderRefreshing=!1,this.lastQueryTime=0,this.isWritable=!1,this.permissions={rw:"Read-Write",ro:"Read-Only",wd:"Delete"},this._maxFileUploadSize=-1,this.oldFileExtension="",this.newFileExtension="",this.is_dir=!1,this.minimumResource={cpu:1,mem:.5},this.filebrowserSupportedImages=[],this.storageProxyInfo=Object(),this.quotaSupportStorageBackends=["xfs","weka"],this.quotaUnit={MiB:Math.pow(2,20),GiB:Math.pow(2,30),TiB:Math.pow(2,40),PiB:Math.pow(2,50)},this.maxSize={value:0,unit:"MiB"},this.quota={value:0,unit:"MiB"},this._boundIndexRenderer=this.indexRenderer.bind(this),this._boundTypeRenderer=this.typeRenderer.bind(this),this._boundControlFolderListRenderer=this.controlFolderListRenderer.bind(this),this._boundControlFileListRenderer=this.controlFileListRenderer.bind(this),this._boundPermissionViewRenderer=this.permissionViewRenderer.bind(this),this._boundCloneableRenderer=this.CloneableRenderer.bind(this),this._boundOwnerRenderer=this.OwnerRenderer.bind(this),this._boundFileNameRenderer=this.fileNameRenderer.bind(this),this._boundCreatedTimeRenderer=this.createdTimeRenderer.bind(this),this._boundPermissionRenderer=this.permissionRenderer.bind(this),this._boundFolderListRenderer=this.folderListRenderer.bind(this),this._boundQuotaRenderer=this.quotaRenderer.bind(this),this._boundUploadListRenderer=this.uploadListRenderer.bind(this),this._boundUploadProgressRenderer=this.uploadProgressRenderer.bind(this),this._boundInviteeInfoRenderer=this.inviteeInfoRenderer.bind(this),this._boundIDRenderer=this.iDRenderer.bind(this)}static get styles(){return[x,k,F,$,b`
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

        span.title {
          margin: auto 10px;
          min-width: 35px;
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

        mwc-icon.cloneable {
          padding-top: 10px;
        }

        .warning {
          color: red;
        }

        vaadin-item {
          font-size: 13px;
          font-weight: 100;
        }

        mwc-checkbox {
          --mdc-theme-secondary: var(--general-checkbox-color);
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

        #filebrowser-notification-dialog {
          --component-width: 350px;
        }

        vaadin-text-field {
          --vaadin-text-field-default-width: auto;
        }

        div.breadcrumb {
          color: #637282;
          font-size: 1em;
          margin-bottom: 10px;
          margin-left: 20px;
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

        mwc-textfield#modify-folder-quota {
          width: 100%;
          max-width: 200px;
          padding: 0;
        }

        mwc-button {
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

        mwc-select#modify-folder-quota-unit {
          width: 120px;
        }

        mwc-select.full-width {
          width: 100%;
        }

        mwc-select.full-width.fixed-position > mwc-list-item {
          width: 288px; // default width
        }

        mwc-select.fixed-position {
          /* Need to be set when fixedMenuPosition attribute is enabled */
          --mdc-menu-max-width: 320px;
          --mdc-menu-min-width: 320px;
        }

        mwc-select.fixed-position > mwc-list-item {
          width: 147px; // default width
        }

        mwc-select.fixed-position#modify-folder-quota-unit > mwc-list-item {
          width: 88px; // default width
        }

        mwc-radio {
          --mdc-theme-secondary: var(--general-textfield-selected-color);
        }

        #textfields wl-textfield,
        wl-label {
          margin-bottom: 20px;
        }

        wl-label {
          --label-font-family: 'Ubuntu', Roboto;
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

        backend-ai-dialog#modify-folder-dialog {
          --component-max-width: 375px;
        }

        .apply-grayscale {
          -webkit-filter: grayscale(1.0);
          filter: grayscale(1.0);
        }

        img#filebrowser-img {
          width:24px;
          margin:15px 10px;
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

        @media screen and (min-width: 900px) {
          #folder-explorer-dialog,
          #folder-explorer-dialog.mini_ui
           {
            --component-width: calc(100% - 45px); /* calc(100% - 30px); */
          }
        }
      `]}_toggleFileListCheckbox(){const e=this.shadowRoot.querySelectorAll(".multiple-action-buttons");this.fileListGrid.selectedItems.length>0?[].forEach.call(e,(e=>{e.style.display="block"})):[].forEach.call(e,(e=>{e.style.display="none"}))}_updateQuotaInputHumanReadableValue(){const e=this.shadowRoot.querySelector("#modify-folder-quota"),t=this.shadowRoot.querySelector("#modify-folder-quota-unit");let i="MiB";const o=e.value*this.quotaUnit[t.value],a=this.maxSize.value*this.quotaUnit[this.maxSize.unit];[e.value,i]=globalThis.backendaiutils._humanReadableFileSize(o).split(" "),["Bytes","KiB","MiB"].includes(i)?(e.value="MiB"===i?e.value<1?1:Math.round(e.value):1,i="MiB"):(e.value=parseFloat(e.value).toFixed(1),a<o&&(e.value=this.maxSize.value,i=this.maxSize.unit)),e.step="MiB"===t.value?0:.1;const r=t.items.findIndex((e=>e.value===i));t.select(r)}render(){return u`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <vaadin-grid class="folderlist" theme="row-stripes column-borders wrap-cell-content compact" column-reordering-allowed aria-label="Folder list" .items="${this.folders}">
        <vaadin-grid-column width="40px" flex-grow="0" resizable header="#" text-align="center" .renderer="${this._boundIndexRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-filter-column path="name" width="80px" resizable .renderer="${this._boundFolderListRenderer}"
            header="${S("data.folders.Name")}"></vaadin-grid-filter-column>
        <vaadin-grid-column width="135px" flex-grow="0" resizable header="ID" .renderer="${this._boundIDRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-filter-column path="host" width="105px" flex-grow="0" resizable
            header="${S("data.folders.Location")}"></vaadin-grid-filter-column>
        <vaadin-grid-column auto-width flex-grow="0" resizable header="${S("data.folders.FolderQuota")}" .renderer="${this._boundQuotaRenderer}"></vaadin-grid-column>
        <vaadin-grid-column width="55px" flex-grow="0" resizable header="${S("data.folders.Type")}" .renderer="${this._boundTypeRenderer}"></vaadin-grid-column>
        <vaadin-grid-column width="95px" flex-grow="0" resizable header="${S("data.folders.Permission")}" .renderer="${this._boundPermissionViewRenderer}"></vaadin-grid-column>
        <vaadin-grid-column auto-width flex-grow="0" resizable header="${S("data.folders.Owner")}" .renderer="${this._boundOwnerRenderer}"></vaadin-grid-column>
        ${this.enableStorageProxy?u`
          <!--<vaadin-grid-column
              auto-width flex-grow="0" resizable header="${S("data.folders.Cloneable")}"
              .renderer="${this._boundCloneableRenderer}"></vaadin-grid-column>`:u``}
        <vaadin-grid-column auto-width resizable header="${S("data.folders.Control")}" .renderer="${this._boundControlFolderListRenderer}"></vaadin-grid-column>-->
      </vaadin-grid>

      <backend-ai-dialog id="modify-folder-dialog" fixed backdrop>
        <span slot="title">${S("data.folders.FolderOptionUpdate")}</span>
        <div slot="content" class="vertical layout flex">
          <div class="vertical layout" id="modify-quota-controls"
               style="display:${this._checkFolderSupportSizeQuota(this.folderInfo.host)?"flex":"none"}">
            <div class="horizontal layout center justified">
                <mwc-textfield id="modify-folder-quota" label="${S("data.folders.FolderQuota")}" value="${this.maxSize.value}"
                    type="number" min="0" step="0.1" @change="${()=>this._updateQuotaInputHumanReadableValue()}"></mwc-textfield>
                <mwc-select class="fixed-position" id="modify-folder-quota-unit" @change="${()=>this._updateQuotaInputHumanReadableValue()}" fixedMenuPosition>
                ${Object.keys(this.quotaUnit).map(((e,t)=>u`
                      <mwc-list-item value="${e}" ?selected="${e===this.maxSize.unit}">${e}</mwc-list-item>
                    `))}
                </mwc-select>
            </div>
            <span class="helper-text">${S("data.folders.MaxFolderQuota")} : ${this.maxSize.value+" "+this.maxSize.unit}</span>
          </div>
          <mwc-select class="full-width fixed-position" id="update-folder-permission" style="width:100%;" label="${S("data.Permission")}"
                  fixedMenuPosition>
                  ${Object.keys(this.permissions).map((e=>u`
                    <mwc-list-item value="${this.permissions[e]}">${this.permissions[e]}</mwc-list-item>
                  `))}
          </mwc-select>
          ${this.enableStorageProxy?u`
          <!--<div class="horizontal layout flex wrap center justified">
            <p style="color:rgba(0, 0, 0, 0.6);">
              ${S("data.folders.Cloneable")}
            </p>
            <mwc-switch id="update-folder-cloneable" style="margin-right:10px;">
            </mwc-switch>
          </div>-->
          `:u``}
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button unelevated fullwidth type="submit" icon="edit" id="update-button" @click="${()=>this._updateFolder()}">
            ${S("data.Update")}
          </mwc-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="modify-folder-name-dialog" fixed backdrop>
        <span slot="title">${S("data.folders.RenameAFolder")}</span>
        <div slot="content" class="vertical layout flex">
          <mwc-textfield
              id="clone-folder-src" label="${S("data.ExistingFolderName")}" value="${this.renameFolderName}"
              disabled></mwc-textfield>
          <mwc-textfield class="red" id="new-folder-name" label="${S("data.folders.TypeNewFolderName")}"
              pattern="^[a-zA-Z0-9\._-]*$" autoValidate validationMessage="${S("data.Allowslettersnumbersand-_dot")}"
              maxLength="64" placeholder="${R("maxLength.64chars")}"
              @change="${()=>this._validateFolderName(!0)}"></mwc-textfield>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button unelevated fullwidth type="submit" icon="edit" id="update-button" @click="${()=>this._updateFolderName()}">
            ${S("data.Update")}
          </mwc-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="delete-folder-dialog" fixed backdrop>
        <span slot="title">${S("data.folders.DeleteAFolder")}</span>
        <div slot="content">
          <div class="warning" style="margin-left:16px;">${S("dialog.warning.CannotBeUndone")}</div>
          <mwc-textfield class="red" id="delete-folder-name" label="${S("data.folders.TypeFolderNameToDelete")}"
                         maxLength="64" placeholder="${R("maxLength.64chars")}"></mwc-textfield>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button unelevated fullwidth type="submit" icon="close" id="delete-button" @click="${()=>this._deleteFolderWithCheck()}">
            ${S("data.folders.Delete")}
          </mwc-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="leave-folder-dialog" fixed backdrop>
        <span slot="title">${S("data.folders.LeaveAFolder")}</span>
        <div slot="content">
          <div class="warning" style="margin-left:16px;">${S("dialog.warning.CannotBeUndone")}</div>
          <mwc-textfield class="red" id="leave-folder-name" label="${S("data.folders.TypeFolderNameToLeave")}"
                         maxLength="64" placeholder="${R("maxLength.64chars")}"></mwc-textfield>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button unelevated fullwidth type="submit" id="leave-button" @click="${()=>this._leaveFolderWithCheck()}">
            ${S("data.folders.Leave")}
          </mwc-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="info-folder-dialog" fixed backdrop>
        <span slot="title">${this.folderInfo.name}</span>
        <div slot="content" role="listbox" style="margin: 0;width:100%;">
          <div class="horizontal justified layout wrap" style="margin-top:15px;">
              <div class="vertical layout center info-indicator">
                <div class="big indicator">${this.folderInfo.host}</div>
                <span>${S("data.folders.Location")}</span>
              </div>
            <div class="vertical layout center info-indicator">
              <div class="big indicator">
                ${this.folderInfo.numFiles<0?"many":this.folderInfo.numFiles}
              </div>
              <span>${S("data.folders.NumberOfFiles")}</span>
            </div>
          </div>
          <mwc-list>
            <mwc-list-item twoline>
              <span><strong>ID</strong></span>
              <span class="monospace" slot="secondary">${this.folderInfo.id}</span>
            </mwc-list-item>
            ${this.folderInfo.is_owner?u`
              <mwc-list-item twoline>
                <span><strong>${S("data.folders.Ownership")}</strong></span>
                <span slot="secondary">${S("data.folders.DescYouAreFolderOwner")}</span>
              </mwc-list-item>
            `:u``}
            <mwc-list-item twoline>
              <span><strong>${S("data.folders.Permission")}</strong></span>
              <div slot="secondary" class="horizontal layout">
              ${this.folderInfo.permission?u`
                ${this._hasPermission(this.folderInfo,"r")?u`
                    <lablup-shields app="" color="green"
                                    description="R" ui="flat"></lablup-shields>`:u``}
                ${this._hasPermission(this.folderInfo,"w")?u`
                    <lablup-shields app="" color="blue"
                                    description="W" ui="flat"></lablup-shields>`:u``}
                ${this._hasPermission(this.folderInfo,"d")?u`
                    <lablup-shields app="" color="red"
                                    description="D" ui="flat"></lablup-shields>`:u``}`:u``}
              </div>
            </mwc-list-item>
            ${this.enableStorageProxy?u`
              <mwc-list-item twoline>
                <span><strong>${S("data.folders.Cloneable")}</strong></span>
                <span class="monospace" slot="secondary">
                    ${this.folderInfo.cloneable?u`
                    <mwc-icon class="cloneable" style="color:green;">check_circle</mwc-icon>
                    `:u`
                    <mwc-icon class="cloneable" style="color:red;">block</mwc-icon>
                    `}
                </span>
              </mwc-list-item>
            `:u``}
            ${this._checkFolderSupportSizeQuota(this.folderInfo.host)?u`
              <mwc-list-item twoline>
                <span><strong>${S("data.folders.FolderUsage")}</strong></span>
                <span class="monospace" slot="secondary">
                  ${S("data.folders.FolderUsing")}: ${this.folderInfo.used_bytes>=0?globalThis.backendaiutils._humanReadableFileSize(this.folderInfo.used_bytes):"Undefined"} /
                  ${S("data.folders.FolderQuota")}: ${this.folderInfo.max_size>=0?globalThis.backendaiutils._humanReadableFileSize(this.folderInfo.max_size*this.quotaUnit.MiB):"Undefined"}
                  ${this.folderInfo.used_bytes>=0&&this.folderInfo.max_size>=0?u`
                    <vaadin-progress-bar value="${this.folderInfo.used_bytes/this.folderInfo.max_size/2**20}"></vaadin-progress-bar>
                  `:u``}
                </span>
              </mwc-list-item>
            `:u``}
          </mwc-list>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="folder-explorer-dialog" class="folder-explorer" narrowLayout>
        <span slot="title" style="margin-right:1rem;">${this.explorer.id}</span>
        <div slot="action" class="horizontal layout space-between folder-action-buttons center">
          <div class="flex"></div>
          ${this.isWritable?u`
            <mwc-button
                outlined
                class="multiple-action-buttons fg red"
                icon="delete"
                @click="${()=>this._openDeleteMultipleFileDialog()}"
                style="display:none;">
                <span>${S("data.explorer.Delete")}</span>
            </mwc-button>
            <div id="add-btn-cover">
              <mwc-button
                  id="add-btn"
                  icon="cloud_upload"
                  ?disabled=${!this.isWritable}
                  @click="${e=>this._uploadFileBtnClick(e)}">
                  <span>${S("data.explorer.UploadFiles")}</span>
              </mwc-button>
            </div>
            <div id="mkdir-cover">
              <mwc-button
                  id="mkdir"
                  class="tooltip"
                  icon="create_new_folder"
                  ?disabled=${!this.isWritable}
                  @click="${()=>this._mkdirDialog()}">
                  <span>${S("data.explorer.NewFolder")}</span>
              </mwc-button>
            </div>
          `:u`
          <mwc-button
              id="readonly-btn"
              disabled>
            <span>${S("data.explorer.ReadonlyFolder")}</span>
          </mwc-button>
          `}
          <div id="filebrowser-btn-cover">
            <mwc-button
                id="filebrowser-btn"
                @click="${()=>this._executeFileBrowser()}">
                <img
                  id="filebrowser-img"
                  alt="File Browser"
                  src="./resources/icons/filebrowser.svg"></img>
                <span>${S("data.explorer.ExecuteFileBrowser")}</span>
            </mwc-button>
          </div>
        </div>
        <div slot="content">
            <div class="breadcrumb">
              ${this.explorer.breadcrumb?u`
                <ul>
                  ${this.explorer.breadcrumb.map((e=>u`
                    <li>
                      ${"."===e?u`
                        <mwc-icon-button
                          icon="folder_open" dest="${e}"
                          @click="${e=>this._gotoFolder(e)}"
                        ></mwc-icon-button>
                      `:u`
                        <a outlined class="goto" path="item" @click="${e=>this._gotoFolder(e)}" dest="${e}">${e}</a>
                      `}
                    </li>
                  `))}
                </ul>
              `:u``}
            </div>
            <div id="dropzone"><p>drag</p></div>
            <input type="file" id="fileInput" @change="${e=>this._uploadFileChange(e)}" hidden multiple>
            ${this.uploadFilesExist?u`
            <div class="horizontal layout start-justified">
              <mwc-button icon="cancel" id="cancel_upload" @click="${()=>this._cancelUpload()}">
                ${S("data.explorer.StopUploading")}
              </mwc-button>
            </div>
          <vaadin-grid class="progress" theme="row-stripes compact" aria-label="uploadFiles" .items="${this.uploadFiles}" height-by-rows>
            <vaadin-grid-column width="100px" flex-grow="0" .renderer="${this._boundUploadListRenderer}"></vaadin-grid-column>
            <vaadin-grid-column .renderer="${this._boundUploadProgressRenderer}"></vaadin-grid-column>
          </vaadin-grid>`:u``}
          <vaadin-grid id="fileList-grid" class="explorer" theme="row-stripes compact" aria-label="Explorer" .items="${this.explorerFiles}">
            <vaadin-grid-selection-column auto-select></vaadin-grid-selection-column>
            <vaadin-grid-column width="40px" flex-grow="0" resizable header="#" .renderer="${this._boundIndexRenderer}">
            </vaadin-grid-column>
            <vaadin-grid-sort-column flex-grow="2" resizable header="${S("data.explorer.Name")}" path="filename" .renderer="${this._boundFileNameRenderer}">
            </vaadin-grid-sort-column>
            <vaadin-grid-sort-column flex-grow="2" resizable header="${S("data.explorer.Created")}" path="ctime" .renderer="${this._boundCreatedTimeRenderer}">
            </vaadin-grid-sort-column>
            <vaadin-grid-sort-column path="size" auto-width resizable header="${S("data.explorer.Size")}">
            </vaadin-grid-sort-column>
            <vaadin-grid-column resizable auto-width header="${S("data.explorer.Actions")}" .renderer="${this._boundControlFileListRenderer}">
            </vaadin-grid-column>
          </vaadin-grid>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="mkdir-dialog" fixed backdrop>
        <span slot="title">${S("data.explorer.CreateANewFolder")}</span>
        <div slot="content">
          <mwc-textfield id="mkdir-name"
                         label="${S("data.explorer.Foldername")}"
                         @change="${()=>this._validatePathName()}"
                         required
                         maxLength="255" placeholder="${R("maxLength.255chars")}"
                         validationMessage="${R("data.explorer.ValueRequired")}"></mwc-textfield>
          <br/>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout distancing">
          <mwc-button icon="rowing" unelevated fullwidth type="submit" id="mkdir-btn" @click="${e=>this._mkdir(e)}">
            ${S("button.Create")}
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="share-folder-dialog" fixed backdrop persistent>
        <span slot="title">${S("data.explorer.ShareFolder")}</span>
        <div slot="content" role="listbox" style="margin: 0;width:100%;">
          <div style="margin: 10px 0px">${S("data.explorer.People")}</div>
          <div class="vertical layout flex" id="textfields">
            <div class="horizontal layout">
              <div style="flex-grow: 2">
                <mwc-textfield class="share-email" type="email" id="first-email"
                    label="${S("data.explorer.EnterEmailAddress")}"
                    maxLength="64" placeholder="${R("maxLength.64chars")}">
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
          <div style="margin: 10px 0px">${S("data.explorer.Permissions")}</div>
          <div style="display: flex; justify-content: space-evenly;">
            <mwc-formfield label="${S("data.folders.View")}">
              <mwc-radio name="share-folder-permission" checked value="ro"></mwc-radio>
            </mwc-formfield>
            <mwc-formfield label="${S("data.folders.Edit")}">
              <mwc-radio name="share-folder-permission" value="rw"></mwc-radio>
            </mwc-formfield>
            <mwc-formfield label="${S("data.folders.EditDelete")}">
              <mwc-radio name="share-folder-permission" value="wd"></mwc-radio>
            </mwc-formfield>
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
            icon="share"
            type="button"
            unelevated
            fullwidth
            id="share-button"
            @click=${e=>this._shareFolder(e)}>
            ${S("button.Share")}
          </mwc-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="modify-permission-dialog" fixed backdrop>
        <span slot="title">${S("data.explorer.ModifyPermissions")}</span>
        <div slot="content" role="listbox" style="margin: 0; padding: 10px;">
          <vaadin-grid theme="row-stripes column-borders compact" .items="${this.invitees}">
            <vaadin-grid-column
              width="30px"
              flex-grow="0"
              header="#"
              .renderer="${this._boundIndexRenderer}"
            ></vaadin-grid-column>
            <vaadin-grid-column header="${S("data.explorer.InviteeEmail")}" .renderer="${this._boundInviteeInfoRenderer}">
            </vaadin-grid-column>
            <vaadin-grid-column header="${S("data.explorer.Permission")}" .renderer="${this._boundPermissionRenderer}">
            </vaadin-grid-column>
          </vaadin-grid>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
            icon="check"
            type="button"
            unelevated
            fullwidth
            @click=${()=>this._modifySharedFolderPermissions()}
          >
            ${S("button.SaveChanges")}
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="rename-file-dialog" fixed backdrop blockscrolling>
        <span slot="title">${S("data.explorer.RenameAFile")}</span>
        <div slot="content">
          <mwc-textfield class="red" id="new-file-name" label="${S("data.explorer.NewFileName")}"
          required @change="${()=>this._validateExistingFileName()}" auto-validate style="width:320px;"
          maxLength="255" placeholder="${R("maxLength.255chars")}" autoFocus></mwc-textfield>
          <div id="old-file-name" style="padding-left:15px;height:2.5em;"></div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button icon="edit" fullwidth type="button" id="rename-file-button" unelevated @click="${()=>this._compareFileExtension()}">
            ${S("data.explorer.RenameAFile")}
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="delete-file-dialog" fixed backdrop>
        <span slot="title">${S("dialog.title.LetsDouble-Check")}</span>
        <div slot="content">
          <p>${S("dialog.warning.CannotBeUndone")}
          ${S("dialog.ask.DoYouWantToProceed")}</p>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button outlined @click="${e=>this._hideDialog(e)}">${S("button.Cancel")}</mwc-button>
          <mwc-button raised @click="${e=>this._deleteFileWithCheck(e)}">${S("button.Okay")}</mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="download-file-dialog" fixed backdrop>
        <span slot="title">${S("data.explorer.DownloadFile")}</span>
        <div slot="content">
          <a href="${this.downloadURL}">
            <mwc-button outlined>${S("data.explorer.TouchToDownload")}</mwc-button>
          </a>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout distancing">
          <mwc-button @click="${e=>this._hideDialog(e)}">${S("button.Close")}</mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="file-extension-change-dialog" fixed backdrop>
        <span slot="title">${S("dialog.title.LetsDouble-Check")}</span>
        <div slot="content">
          <p>${S("data.explorer.FileExtensionChanged")}</p>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout distancing">
          <mwc-button outlined fullwidth @click="${e=>this._keepFileExtension()}">
            ${"ko"!==globalThis.backendaioptions.get("language")?u`
                ${R("data.explorer.KeepFileExtension")+this.oldFileExtension}
              `:u`
                ${this.oldFileExtension+R("data.explorer.KeepFileExtension")}
              `}
          </mwc-button>
          <mwc-button unelevated fullwidth @click="${()=>this._renameFile()}">
            ${"ko"!==globalThis.backendaioptions.get("language")?u`
                ${this.newFileExtension?R("data.explorer.UseNewFileExtension")+this.newFileExtension:R("data.explorer.RemoveFileExtension")}
              `:u`
                ${this.newFileExtension?this.newFileExtension+R("data.explorer.UseNewFileExtension"):R("data.explorer.RemoveFileExtension")}
              `}
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="filebrowser-notification-dialog" fixed backdrop narrowLayout>
        <span slot="title">${S("dialog.title.Notice")}</span>
        <div slot="content" style="margin: 15px;">
          <span>${S("data.explorer.ReadOnlyFolderOnFileBrowser")}</span>
        </div>
        <div slot="footer" class="flex horizontal layout center justified" style="margin: 15px 15px 15px 0px;">
          <div class="horizontal layout start-justified center">
            <mwc-checkbox @change="${e=>this._toggleShowFilebrowserNotification(e)}"></mwc-checkbox>
            <span style="font-size:0.8rem;">${R("dialog.hide.DonotShowThisAgain")}</span>
          </div>
          <mwc-button unelevated @click="${e=>this._hideDialog(e)}">${S("button.Confirm")}</mwc-button>
        </div>
      </backend-ai-dialog>
    `}firstUpdated(){this._addEventListenerDropZone(),this._mkdir=this._mkdir.bind(this),this.renameFileDialog=this.shadowRoot.querySelector("#rename-file-dialog"),this.deleteFileDialog=this.shadowRoot.querySelector("#delete-file-dialog"),this.downloadFileDialog=this.shadowRoot.querySelector("#download-file-dialog"),this.sessionLauncher=this.shadowRoot.querySelector("#session-launcher"),this.fileListGrid=this.shadowRoot.querySelector("#fileList-grid"),this.fileListGrid.addEventListener("selected-items-changed",(()=>{this._toggleFileListCheckbox()})),this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.indicator=globalThis.lablupIndicator,this.notification=globalThis.lablupNotification;const e=this.shadowRoot.querySelectorAll("mwc-textfield");for(const t of e)this._addInputValidator(t);"automount"===this.storageType?this.shadowRoot.querySelector("vaadin-grid.folderlist").style.height="calc(100vh - 230px)":this.shadowRoot.querySelector("vaadin-grid.folderlist").style.height="calc(100vh - 185px)",document.addEventListener("backend-ai-group-changed",(e=>this._refreshFolderList(!0,"group-changed"))),document.addEventListener("backend-ai-ui-changed",(e=>this._refreshFolderUI(e))),this._refreshFolderUI({detail:{"mini-ui":globalThis.mini_ui}}),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._getStorageProxyBackendInformation(),this._triggerFolderListChanged()}),!0):(this._getStorageProxyBackendInformation(),this._triggerFolderListChanged())}_modifySharedFolderPermissions(){const e=this.shadowRoot.querySelectorAll("#modify-permission-dialog wl-select"),t=Array.prototype.filter.call(e,((e,t)=>e.value!==this.invitees[t].perm)).map(((e,t)=>({perm:"kickout"===e.value?null:e.value,user:this.invitees[t].shared_to.uuid,vfolder:this.invitees[t].vfolder_id}))).map((e=>globalThis.backendaiclient.vfolder.modify_invitee_permission(e)));Promise.all(t).then((e=>{0===e.length?this.notification.text=R("data.permission.NoChanges"):this.notification.text=R("data.permission.PermissionModified"),this.notification.show(),this.shadowRoot.querySelector("#modify-permission-dialog").hide()}))}permissionRenderer(e,t,i){C(u`
      <div class="vertical layout">
        <wl-select label="${S("data.folders.SelectPermission")}">
          <option ?selected=${"ro"===i.item.perm} value="ro">${S("data.folders.View")}</option>
          <option ?selected=${"rw"===i.item.perm} value="rw">${S("data.folders.Edit")}</option>
          <option ?selected=${"wd"===i.item.perm} value="wd">${S("data.folders.EditDelete")}</option>
          <option value="kickout">${S("data.folders.KickOut")}</option>
        </wl-select>
      </div>`,e),this.shadowRoot.querySelector("wl-select").requestUpdate().then((()=>{C(u`
        <div class="vertical layout">
          <wl-select label="${S("data.folders.SelectPermission")}">
            <option ?selected=${"ro"===i.item.perm} value="ro">${S("data.folders.View")}</option>
            <option ?selected=${"rw"===i.item.perm} value="rw">${S("data.folders.Edit")}</option>
            <option ?selected=${"wd"===i.item.perm} value="wd">${S("data.folders.EditDelete")}</option>
            <option value="kickout">${S("data.folders.KickOut")}</option>
          </wl-select>
        </div>`,e)}))}folderListRenderer(e,t,i){C(u`
        <div class="indicator" @click="[[_folderExplorer()]]" .folder-id="${i.item.name}">${i.item.name}</div>
      `,e)}quotaRenderer(e,t,i){let o="-";this._checkFolderSupportSizeQuota(i.item.host)&&i.item.max_size&&(o=globalThis.backendaiutils._humanReadableFileSize(i.item.max_size*this.quotaUnit.MiB)),C(u`
        <div class="horizontal layout center center-justified">${o}</div>
      `,e)}uploadListRenderer(e,t,i){C(u`
      <vaadin-item class="progress-item">
        <div>
          ${i.item.complete?u`
            <wl-icon>check</wl-icon>
          `:u``}
        </div>
      </vaadin-item>
      `,e)}uploadProgressRenderer(e,t,i){C(u`
      <vaadin-item>
        <span>${i.item.name}</span>
        ${i.item.complete?u``:u`
        <div>
            <vaadin-progress-bar value="${i.item.progress}"></vaadin-progress-bar>
          </div>
          <div>
            <span>${i.item.caption}</span>
          </div>
        `}
      </vaadin-item>
      `,e)}inviteeInfoRenderer(e,t,i){C(u`
        <div>${i.item.shared_to.email}</div>
      `,e)}iDRenderer(e,t,i){C(u`
      <div class="layout vertical">
        <span class="indicator monospace">${i.item.id}</span>
      </div>
      `,e)}_addTextField(){const e=document.createElement("mwc-textfield");e.label=R("data.explorer.EnterEmailAddress"),e.type="email",e.className="share-email",e.style.width="auto",e.style.marginRight="83px",this.shadowRoot.querySelector("#textfields").appendChild(e)}_removeTextField(){const e=this.shadowRoot.querySelector("#textfields");e.children.length>1&&e.removeChild(e.lastChild)}indexRenderer(e,t,i){C(u`${this._indexFrom1(i.index)}`,e)}controlFolderListRenderer(e,t,i){C(u`
        <div
          id="controls"
          class="layout flex center wrap"
          folder-id="${i.item.id}"
          folder-name="${i.item.name}"
          folder-type="${i.item.type}"
        >
          <mwc-icon-button
            class="fg green controls-running"
            icon="info"
            @click="${e=>this._infoFolder(e)}"
          ></mwc-icon-button>

          ${this._hasPermission(i.item,"r")?u`
              <mwc-icon-button
                class="fg blue controls-running"
                icon="folder_open"
                @click="${e=>this._folderExplorer(e,this._hasPermission(i.item,"w")||i.item.is_owner||"group"===i.item.type&&this.is_admin)}"
                .folder-id="${i.item.name}"></mwc-icon-button>
            `:u``}
          <!--${this._hasPermission(i.item,"r")&&this.enableStorageProxy?u`
            <mwc-icon-button
              class="fg blue controls-running"
              icon="content_copy"
              disabled
              @click="${()=>{this._requestCloneFolder(i.item)}}"></mwc-icon-button>
            `:u``}-->
          ${i.item.is_owner?u`
              <mwc-icon-button
                class="fg ${"user"==i.item.type?"blue":"green"} controls-running"
                icon="share"
                @click="${e=>this._shareFolderDialog(e)}"
              ></mwc-icon-button>
            `:u``}

          ${i.item.is_owner?u`
              <mwc-icon-button
                class="fg cyan controls-running"
                icon="perm_identity"
                @click=${e=>this._modifyPermissionDialog(i.item.id)}
              ></mwc-icon-button>
            `:u``}
          ${i.item.is_owner?u`
              <mwc-icon-button
                class="fg ${"user"==i.item.type?"blue":"green"} controls-running"
                icon="create"
                @click="${e=>this._renameFolderDialog(e)}"
              ></mwc-icon-button>
            `:u``}
          ${i.item.is_owner?u`
              <mwc-icon-button
                class="fg blue controls-running"
                icon="settings"
                @click="${e=>this._modifyFolderOptionDialog(e)}"
              ></mwc-icon-button>
            `:u``}
          ${i.item.is_owner||this._hasPermission(i.item,"d")||"group"===i.item.type&&this.is_admin?u`
              <mwc-icon-button
                class="fg red controls-running"
                icon="delete"
                @click="${e=>this._deleteFolderDialog(e)}"
              ></mwc-icon-button>
            `:u``}
          ${i.item.is_owner||"user"!=i.item.type?u``:u`
              <mwc-icon-button
                class="fg red controls-running"
                icon="remove_circle"
                @click="${e=>this._leaveInvitedFolderDialog(e)}"
              ></mwc-icon-button>
            `}
        </div>
       `,e)}controlFileListRenderer(e,t,i){C(u`
        <div class="flex layout wrap">
          ${this._isDir(i.item)?u`
            <mwc-icon-button id="download-btn" class="tiny fg blue" icon="cloud_download"
                filename="${i.item.filename}" @click="${e=>this._downloadFile(e,!0)}"></mwc-icon-button>
          `:u`
            <mwc-icon-button id="download-btn" class="tiny fg blue" icon="cloud_download"
                filename="${i.item.filename}" @click="${e=>this._downloadFile(e)}"></mwc-icon-button>
          `}
          <mwc-icon-button id="rename-btn" ?disabled="${!this.isWritable}" class="tiny fg green" icon="edit" required
              filename="${i.item.filename}" @click="${e=>this._openRenameFileDialog(e,this._isDir(i.item))}"></mwc-icon-button>
          <mwc-icon-button id="delete-btn" ?disabled="${!this.isWritable}" class="tiny fg red" icon="delete_forever"
              filename="${i.item.filename}" @click="${e=>this._openDeleteFileDialog(e)}"></mwc-icon-button>
        </div>
       `,e)}fileNameRenderer(e,t,i){C(u`
        ${this._isDir(i.item)?u`
          <div class="indicator horizontal center layout" name="${i.item.filename}">
            <mwc-icon-button class="fg controls-running" icon="folder_open" name="${i.item.filename}"
                               @click="${e=>this._enqueueFolder(e)}"></mwc-icon-button>
            ${i.item.filename}
          </div>
       `:u`
          <div class="indicator horizontal center layout">
            <mwc-icon-button class="fg controls-running" icon="insert_drive_file"></mwc-icon-button>
            ${i.item.filename}
          </div>
       `}
      `,e)}permissionViewRenderer(e,t,i){C(u`
        <div class="horizontal center-justified wrap layout">
        ${this._hasPermission(i.item,"r")?u`
            <lablup-shields app="" color="green"
                            description="R" ui="flat"></lablup-shields>`:u``}
        ${this._hasPermission(i.item,"w")?u`
            <lablup-shields app="" color="blue"
                            description="W" ui="flat"></lablup-shields>`:u``}
        ${this._hasPermission(i.item,"d")?u`
            <lablup-shields app="" color="red"
                            description="D" ui="flat"></lablup-shields>`:u``}
        </div>`,e)}OwnerRenderer(e,t,i){C(u`
        ${i.item.is_owner?u`
          <div class="horizontal center-justified center layout">
            <mwc-icon-button class="fg green" icon="done"></mwc-icon-button>
          </div>`:u``}
        `,e)}CloneableRenderer(e,t,i){C(u`
        ${i.item.cloneable?u`
          <div class="horizontal center-justified center layout">
            <mwc-icon-button class="fg green" icon="done"></mwc-icon-button>
          </div>`:u``}
        `,e)}createdTimeRenderer(e,t,i){C(u`
        <div class="layout vertical">
            <span>${this._humanReadableTime(i.item.ctime)}</span>
        </div>`,e)}typeRenderer(e,t,i){C(u`
        <div class="layout vertical center-justified">
        ${"user"==i.item.type?u`
          <wl-icon>person</wl-icon>
        `:u`
          <wl-icon class="fg green">group</wl-icon>
        `}
        </div>`,e)}async _getStorageProxyBackendInformation(){const e=await globalThis.backendaiclient.vfolder.list_hosts();this.storageProxyInfo=e.volume_info||{}}_checkFolderSupportSizeQuota(e){var t;if(!e)return!1;const i=null===(t=this.storageProxyInfo[e])||void 0===t?void 0:t.backend;return!!this.quotaSupportStorageBackends.includes(i)}refreshFolderList(){return this._triggerFolderListChanged(),this._refreshFolderList(!0,"refreshFolderList")}_refreshFolderList(e=!1,t="unknown"){if(this._folderRefreshing||!this.active)return;if(Date.now()-this.lastQueryTime<1e3)return;this._folderRefreshing=!0,this.lastQueryTime=Date.now(),this._getMaxSize(),this.spinner.show();let i=null;i=globalThis.backendaiclient.current_group_id(),globalThis.backendaiclient.vfolder.list(i).then((e=>{this.spinner.hide();const t=e.filter((e=>"general"!==this.storageType||e.name.startsWith(".")?"automount"===this.storageType&&e.name.startsWith(".")?e:void 0:e));this.folders=t,this._folderRefreshing=!1})).catch((()=>{this._folderRefreshing=!1})),globalThis.backendaiclient.vfolder.list_hosts().then((t=>{this.active&&!e&&setTimeout((()=>{this._refreshFolderList(!1,"loop")}),3e4)}))}_refreshFolderUI(e){const t=this.shadowRoot.querySelector("#folder-explorer-dialog");Object.prototype.hasOwnProperty.call(e.detail,"mini-ui")&&!0===e.detail["mini-ui"]?t.classList.add("mini_ui"):t.classList.remove("mini_ui")}async _checkFilebrowserSupported(){const e=(await globalThis.backendaiclient.image.list(["name","tag","registry","digest","installed","labels { key value }","resource_limits { key min max }"],!1,!0)).images;this.filebrowserSupportedImages=e.filter((e=>e.installed&&e.labels.find((e=>"ai.backend.service-ports"===e.key&&e.value.toLowerCase().includes("filebrowser")))))}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_admin=globalThis.backendaiclient.is_admin,this.enableStorageProxy=globalThis.backendaiclient.supports("storage-proxy"),this.authenticated=!0,this._APIMajorVersion=globalThis.backendaiclient.APIMajorVersion,this._maxFileUploadSize=globalThis.backendaiclient._config.maxFileUploadSize,this._checkFilebrowserSupported(),this._refreshFolderList(!1,"viewStatechanged")}),!0):(this.is_admin=globalThis.backendaiclient.is_admin,this.enableStorageProxy=globalThis.backendaiclient.supports("storage-proxy"),this.authenticated=!0,this._APIMajorVersion=globalThis.backendaiclient.APIMajorVersion,this._maxFileUploadSize=globalThis.backendaiclient._config.maxFileUploadSize,this._checkFilebrowserSupported(),this._refreshFolderList(!1,"viewStatechanged")))}_folderExplorerDialog(){this.openDialog("folder-explorer-dialog")}_mkdirDialog(){this.shadowRoot.querySelector("#mkdir-name").value="",this.openDialog("mkdir-dialog")}openDialog(e){this.shadowRoot.querySelector("#"+e).show()}closeDialog(e){this.shadowRoot.querySelector("#"+e).hide()}_indexFrom1(e){return e+1}_hasPermission(e,t){return!!e.permission.includes(t)||!(!e.permission.includes("w")||"r"!==t)}_getControlName(e){return e.target.closest("#controls").getAttribute("folder-name")}_getControlId(e){return e.target.closest("#controls").getAttribute("folder-id")}_getControlType(e){return e.target.closest("#controls").getAttribute("folder-type")}_infoFolder(e){const t=this._getControlName(e);globalThis.backendaiclient.vfolder.info(t).then((e=>{this.folderInfo=e,this.openDialog("info-folder-dialog")})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=z.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_modifyFolderOptionDialog(e){globalThis.backendaiclient.vfolder.name=this._getControlName(e);globalThis.backendaiclient.vfolder.info(globalThis.backendaiclient.vfolder.name).then((e=>{this.folderInfo=e;const t=this.folderInfo.permission;let i=Object.keys(this.permissions).indexOf(t);i=i>0?i:0,this.shadowRoot.querySelector("#update-folder-permission").select(i);const o=this.shadowRoot.querySelector("#update-folder-cloneable");if(o&&(o.checked=this.folderInfo.cloneable),this._checkFolderSupportSizeQuota(this.folderInfo.host)){const e=this.shadowRoot.querySelector("#modify-folder-quota"),t=this.shadowRoot.querySelector("#modify-folder-quota-unit");[this.quota.value,this.quota.unit]=globalThis.backendaiutils._humanReadableFileSize(this.folderInfo.max_size*this.quotaUnit.MiB).split(" "),e.value=this.quota.value,t.value=this.quota.unit}this.openDialog("modify-folder-dialog")})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=z.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}async _updateFolder(){const e=this.shadowRoot.querySelector("#update-folder-permission"),t=this.shadowRoot.querySelector("#update-folder-cloneable");let i=!1,o=!1;const a={};if(e){let t=e.value;t=Object.keys(this.permissions).find((e=>this.permissions[e]===t)),t&&this.folderInfo.permission!==t&&(a.permission=t)}t&&(o=t.checked,a.cloneable=o);const r=[];if(Object.keys(a).length>0){const e=globalThis.backendaiclient.vfolder.update_folder(a,globalThis.backendaiclient.vfolder.name);r.push(e)}if(this._checkFolderSupportSizeQuota(this.folderInfo.host)){const e=this.shadowRoot.querySelector("#modify-folder-quota"),t=this.shadowRoot.querySelector("#modify-folder-quota-unit"),i=e.value?BigInt(e.value*this.quotaUnit[t.value]):0;if(this.quota.value!=e.value||this.quota.unit!=t.value){const e=globalThis.backendaiclient.vfolder.set_quota(this.folderInfo.host,this.folderInfo.id,i.toString());r.push(e)}}r.length>0&&await Promise.all(r).then((e=>{this.notification.text=R("data.folders.FolderUpdated"),this.notification.show(),this._refreshFolderList(!0,"updateFolder")})).catch((e=>{console.log(e),e&&e.message&&(i=!0,this.notification.text=z.relieve(e.message),this.notification.show(!0,e))})),i||this.closeDialog("modify-folder-dialog")}async _updateFolderName(){globalThis.backendaiclient.vfolder.name=this.renameFolderName;const e=this.shadowRoot.querySelector("#new-folder-name"),t=e.value;if(e.reportValidity(),t){if(!e.checkValidity())return;try{await globalThis.backendaiclient.vfolder.rename(t),this.notification.text=R("data.folders.FolderRenamed"),this.notification.show(),this._refreshFolderList(!0,"updateFolder"),this.closeDialog("modify-folder-name-dialog")}catch(e){this.notification.text=z.relieve(e.message),this.notification.show(!0,e)}}}_renameFolderDialog(e){this.renameFolderName=this._getControlName(e),this.shadowRoot.querySelector("#new-folder-name").value="",this.openDialog("modify-folder-name-dialog")}async _deleteFolderDialog(e){this.deleteFolderName=this._getControlName(e),this.shadowRoot.querySelector("#delete-folder-name").value="",this.openDialog("delete-folder-dialog")}_deleteFolderWithCheck(){if(this.shadowRoot.querySelector("#delete-folder-name").value!==this.deleteFolderName)return this.notification.text=R("data.folders.FolderNameMismatched"),void this.notification.show();this.closeDialog("delete-folder-dialog"),this._deleteFolder(this.deleteFolderName)}_deleteFolder(e){globalThis.backendaiclient.vfolder.delete(e).then((e=>{e.msg?(this.notification.text=R("data.folders.CannotDeleteFolder"),this.notification.show(!0)):(this.notification.text=R("data.folders.FolderDeleted"),this.notification.show(),this.refreshFolderList(),this._triggerFolderListChanged())})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=z.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}async _checkVfolderMounted(e=""){}_requestCloneFolder(e){}_leaveInvitedFolderDialog(e){this.leaveFolderName=this._getControlName(e),this.shadowRoot.querySelector("#leave-folder-name").value="",this.openDialog("leave-folder-dialog")}_leaveFolderWithCheck(){if(this.shadowRoot.querySelector("#leave-folder-name").value!==this.leaveFolderName)return this.notification.text=R("data.folders.FolderNameMismatched"),void this.notification.show();this.closeDialog("leave-folder-dialog"),this._leaveFolder(this.leaveFolderName)}_leaveFolder(e){globalThis.backendaiclient.vfolder.leave_invited(e).then((e=>{this.notification.text=R("data.folders.FolderDisconnected"),this.notification.show(),this.refreshFolderList(),this._triggerFolderListChanged()})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=z.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}async _getMaxSize(){const e=globalThis.backendaiclient._config.accessKey,t=(await globalThis.backendaiclient.keypair.info(e,["resource_policy"])).keypair.resource_policy,i=(await globalThis.backendaiclient.resourcePolicy.get(t,["max_vfolder_count","max_vfolder_size"])).keypair_resource_policy.max_vfolder_size;[this.maxSize.value,this.maxSize.unit]=globalThis.backendaiutils._humanReadableFileSize(i).split(" "),["Bytes","KiB","MiB"].includes(this.maxSize.unit)?(this.maxSize.value=this.maxSize.value<1?1:Math.round(this.maxSize.value),this.maxSize.unit="MiB"):this.maxSize.value=Math.round(10*this.maxSize.value)/10}_triggerFolderListChanged(){const e=new CustomEvent("backend-ai-folder-list-changed");document.dispatchEvent(e)}_validateExistingFileName(){const e=this.shadowRoot.querySelector("#new-file-name");e.validityTransform=(t,i)=>{if(i.valid){const t=/[`~!@#$%^&*()|+=?;:'",<>{}[\]\\/]/gi;let i;return e.value===this.renameFileDialog.querySelector("#old-file-name").textContent?(e.validationMessage=R("data.EnterDifferentValue"),i=!1,{valid:i,customError:!i}):(i=!0,i=!t.test(e.value),i||(e.validationMessage=R("data.Allowslettersnumbersand-_dot")),{valid:i,customError:!i})}return i.valueMissing?(e.validationMessage=R("data.FileandFoldernameRequired"),{valid:i.valid,customError:!i.valid}):(e.validationMessage=R("data.Allowslettersnumbersand-_dot"),{valid:i.valid,customError:!i.valid})}}_validateFolderName(e=!1){const t=e?this.shadowRoot.querySelector("#new-folder-name"):this.shadowRoot.querySelector("#add-folder-name");t.validityTransform=(i,o)=>{if(o.valid){let i;const o=/[`~!@#$%^&*()|+=?;:'",<>{}[\]\\/\s]/gi;if(e){if(t.value===this.renameFolderName)return t.validationMessage=R("data.EnterDifferentValue"),i=!1,{valid:i,customError:!i};i=!0}return i=!o.test(t.value),i||(t.validationMessage=R("data.Allowslettersnumbersand-_dot")),{valid:i,customError:!i}}return o.valueMissing?(t.validationMessage=R("data.FolderNameRequired"),{valid:o.valid,customError:!o.valid}):(t.validationMessage=R("data.Allowslettersnumbersand-_dot"),{valid:o.valid,customError:!o.valid})}}async _clearExplorer(e=this.explorer.breadcrumb.join("/"),t=this.explorer.id,i=!1){const o=await globalThis.backendaiclient.vfolder.list_files(e,t);if(this.shadowRoot.querySelector("#fileList-grid").selectedItems=[],this._APIMajorVersion<6)this.explorer.files=JSON.parse(o.files);else{const e=JSON.parse(o.files);e.forEach(((e,t)=>{let i="FILE";if(e.filename===o.items[t].name)i=o.items[t].type;else for(let t=0;t<o.items.length;t++)if(e.filename===o.items[t].name){i=o.items[t].type;break}e.type=i})),this.explorer.files=e}this.explorerFiles=this.explorer.files,i&&(0===this.filebrowserSupportedImages.length&&await this._checkFilebrowserSupported(),this._toggleFilebrowserButton(),this.openDialog("folder-explorer-dialog"))}_toggleFilebrowserButton(){const e=!!(this.filebrowserSupportedImages.length>0&&this._isResourceEnough()),t=this.shadowRoot.querySelector("#filebrowser-img"),i=this.shadowRoot.querySelector("#filebrowser-btn");if(t&&i){i.disabled=!e;const o=e?"":"apply-grayscale";t.setAttribute("class",o)}}_folderExplorer(e,t){const i={id:this._getControlName(e),breadcrumb:["."]};this.isWritable=t,this.explorer=i,this._clearExplorer(i.breadcrumb.join("/"),i.id,!0)}_enqueueFolder(e){const t=e.target;t.setAttribute("disabled","true");const i=e.target.getAttribute("name");this.explorer.breadcrumb.push(i),this._clearExplorer().then((e=>{t.removeAttribute("disabled")}))}_gotoFolder(e){const t=e.target.getAttribute("dest");let i=this.explorer.breadcrumb;const o=i.indexOf(t);-1!==o&&(i=i.slice(0,o+1),this.explorer.breadcrumb=i,this._clearExplorer(i.join("/"),this.explorer.id,!1))}_mkdir(e){const t=this.shadowRoot.querySelector("#mkdir-name"),i=t.value,o=this.explorer;if(t.reportValidity(),t.checkValidity()){globalThis.backendaiclient.vfolder.mkdir([...o.breadcrumb,i].join("/"),o.id).catch((e=>{e&e.message?(this.notification.text=z.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=z.relieve(e.title),this.notification.show(!0,e))})).then((e=>{this.closeDialog("mkdir-dialog"),this._clearExplorer()}))}}_isDir(e){return this._APIMajorVersion<6?e.mode.startsWith("d"):"DIRECTORY"===e.type}_byteToMB(e){return Math.floor(e/1e6)}_addEventListenerDropZone(){const e=this.shadowRoot.querySelector("#folder-explorer-dialog"),t=this.shadowRoot.querySelector("#dropzone");t.addEventListener("dragleave",(()=>{t.style.display="none"})),e.addEventListener("dragover",(e=>(e.stopPropagation(),e.preventDefault(),!this.isWritable||(e.dataTransfer.dropEffect="copy",t.style.display="flex",!1)))),e.addEventListener("drop",(e=>{let i=!1;if(e.stopPropagation(),e.preventDefault(),t.style.display="none",this.isWritable){for(let t=0;t<e.dataTransfer.files.length;t++)if(e.dataTransfer.items[t].webkitGetAsEntry().isFile){const i=e.dataTransfer.files[t];if(this._maxFileUploadSize>0&&i.size>this._maxFileUploadSize)return this.notification.text=R("data.explorer.FileUploadSizeLimit")+` (${globalThis.backendaiutils._humanReadableFileSize(this._maxFileUploadSize)})`,void this.notification.show();if(this.explorerFiles.find((e=>e.filename===i.name))){window.confirm(`${R("data.explorer.FileAlreadyExists")}\n${i.name}\n${R("data.explorer.DoYouWantToOverwrite")}`)&&(i.progress=0,i.caption="",i.error=!1,i.complete=!1,this.uploadFiles.push(i))}else i.progress=0,i.caption="",i.error=!1,i.complete=!1,this.uploadFiles.push(i)}else i||(this.filebrowserSupportedImages.length>0?(this.notification.text=R("data.explorer.ClickFilebrowserButton"),this.notification.show()):(this.notification.text=R("data.explorer.NoImagesSupportingFileBrowser"),this.notification.show())),i=!0;for(let e=0;e<this.uploadFiles.length;e++)this.fileUpload(this.uploadFiles[e]),this._clearExplorer()}else this.notification.text=R("data.explorer.WritePermissionRequiredInUploadFiles"),this.notification.show()}))}_uploadFileBtnClick(e){const t=this.shadowRoot.querySelector("#fileInput");if(t&&document.createEvent){const e=document.createEvent("MouseEvents");e.initEvent("click",!0,!1),t.dispatchEvent(e)}}_uploadFileChange(e){const t=e.target.files.length;for(let i=0;i<t;i++){const t=e.target.files[i];let o="";const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let e=0;e<5;e++)o+=a.charAt(Math.floor(Math.random()*a.length));if(this._maxFileUploadSize>0&&t.size>this._maxFileUploadSize)return this.notification.text=R("data.explorer.FileUploadSizeLimit")+` (${globalThis.backendaiutils._humanReadableFileSize(this._maxFileUploadSize)})`,void this.notification.show();if(this.explorerFiles.find((e=>e.filename===t.name))){window.confirm(`${R("data.explorer.FileAlreadyExists")}\n${t.name}\n${R("data.explorer.DoYouWantToOverwrite")}`)&&(t.id=o,t.progress=0,t.caption="",t.error=!1,t.complete=!1,this.uploadFiles.push(t))}else t.id=o,t.progress=0,t.caption="",t.error=!1,t.complete=!1,this.uploadFiles.push(t)}for(let e=0;e<this.uploadFiles.length;e++)this.fileUpload(this.uploadFiles[e]);this.shadowRoot.querySelector("#fileInput").value=""}runFileUploadQueue(e=null){let t;null!==e&&this.fileUploadQueue.push(e);for(let e=this.fileUploadCount;e<this.concurrentFileUploadLimit;e++)this.fileUploadQueue.length>0&&(t=this.fileUploadQueue.shift(),this.fileUploadCount=this.fileUploadCount+1,t.start())}fileUpload(e){this._uploadFlag=!0,this.uploadFilesExist=this.uploadFiles.length>0;const t=this.explorer.breadcrumb.concat(e.name).join("/");globalThis.backendaiclient.vfolder.create_upload_session(t,e,this.explorer.id).then((i=>{const o=(new Date).getTime(),a=new A.Upload(e,{endpoint:i,retryDelays:[0,3e3,5e3,1e4,2e4],uploadUrl:i,chunkSize:15728640,metadata:{filename:t,filetype:e.type},onError:e=>{console.log("Failed because: "+e),this.fileUploadCount=this.fileUploadCount-1,this.runFileUploadQueue()},onProgress:(t,i)=>{if(!this._uploadFlag)return a.abort(),this.uploadFiles[this.uploadFiles.indexOf(e)].caption="Canceling...",this.uploadFiles=this.uploadFiles.slice(),void setTimeout((()=>{this.uploadFiles=[],this.uploadFilesExist=!1}),1e3);const r=(new Date).getTime(),l=(t/1048576/((r-o)/1e3)).toFixed(1)+"MB/s",s=Math.floor((i-t)/(t/(r-o)*1e3));let d=R("data.explorer.LessThan10Sec");if(s>=86400)d=R("data.explorer.MoreThanADay");else if(s>10){d=`${Math.floor(s/3600)}:${Math.floor(s%3600/60)}:${s%60}`}const n=(t/i*100).toFixed(1);this.uploadFiles[this.uploadFiles.indexOf(e)].progress=t/i,this.uploadFiles[this.uploadFiles.indexOf(e)].caption=`${n}% / Time left : ${d} / Speed : ${l}`,this.uploadFiles=this.uploadFiles.slice()},onSuccess:()=>{this._clearExplorer(),this.uploadFiles[this.uploadFiles.indexOf(e)].complete=!0,this.uploadFiles=this.uploadFiles.slice(),setTimeout((()=>{this.uploadFiles.splice(this.uploadFiles.indexOf(e),1),this.uploadFilesExist=this.uploadFiles.length>0,this.uploadFiles=this.uploadFiles.slice(),this.fileUploadCount=this.fileUploadCount-1,this.runFileUploadQueue()}),1e3)}});this.runFileUploadQueue(a)}))}_cancelUpload(){this._uploadFlag=!1}_downloadFile(e,t=!1){const i=e.target.getAttribute("filename"),o=this.explorer.breadcrumb.concat(i).join("/");globalThis.backendaiclient.vfolder.request_download_token(o,this.explorer.id,t).then((e=>{const o=e.token;let a;if(a=this._APIMajorVersion<6?globalThis.backendaiclient.vfolder.get_download_url_with_token(o):`${e.url}?token=${e.token}&archive=${t}`,globalThis.iOSSafari)this.downloadURL=a,this.downloadFileDialog.show(),URL.revokeObjectURL(a);else{const e=document.createElement("a");e.style.display="none",e.addEventListener("click",(function(e){e.stopPropagation()})),e.href=a,e.download=i,document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(a)}}))}_compareFileExtension(){const e=this.shadowRoot.querySelector("#new-file-name").value,t=this.renameFileDialog.querySelector("#old-file-name").textContent,i=/\.([0-9a-z]+)$/i;this.newFileExtension=e.includes(".")&&e.match(i)?e.match(i)[1].toLowerCase():"",this.oldFileExtension=t.includes(".")&&t.match(i)?t.match(i)[1].toLowerCase():"",e?this.newFileExtension!==this.oldFileExtension?this.shadowRoot.querySelector("#file-extension-change-dialog").show():this.oldFileExtension?this._keepFileExtension():this._renameFile():this._renameFile()}_keepFileExtension(){let e=this.renameFileDialog.querySelector("#new-file-name").value;e=this.newFileExtension?e.replace(new RegExp(this.newFileExtension+"$"),this.oldFileExtension):e+"."+this.oldFileExtension,this.renameFileDialog.querySelector("#new-file-name").value=e,this._renameFile()}_executeFileBrowser(){if(this._isResourceEnough())if(this.filebrowserSupportedImages.length>0){const e=localStorage.getItem("backendaiwebui.filebrowserNotification");null!=e&&"true"!==e||this.isWritable||this.shadowRoot.querySelector("#filebrowser-notification-dialog").show(),this._launchSession(),this._toggleFilebrowserButton()}else this.notification.text=R("data.explorer.NoImagesSupportingFileBrowser"),this.notification.show();else this.notification.text=R("data.explorer.NotEnoughResourceForFileBrowserSession"),this.notification.show()}_toggleShowFilebrowserNotification(e){const t=e.target;if(t){const e=(!t.checked).toString();localStorage.setItem("backendaiwebui.filebrowserNotification",e)}}async _launchSession(){let e;const t={},i=this.filebrowserSupportedImages.filter((e=>e.name.toLowerCase().includes("filebrowser")&&e.installed))[0],o=i.registry+"/"+i.name+":"+i.tag;t.mounts=[this.explorer.id],t.cpu=1,t.mem=this.minimumResource.mem+"g",t.domain=globalThis.backendaiclient._config.domainName,t.group_name=globalThis.backendaiclient.current_group;const a=await this.indicator.start("indeterminate");return globalThis.backendaiclient.get_resource_slots().then((e=>(a.set(200,R("data.explorer.ExecutingFileBrowser")),globalThis.backendaiclient.createIfNotExists(o,null,t,1e4,void 0)))).then((async t=>{const i=t.servicePorts;e={"session-uuid":t.sessionId,"session-name":t.sessionName,"access-key":"",runtime:"filebrowser",arguments:{"--root":"/home/work/"+this.explorer.id}},i.length>0&&i.filter((e=>"filebrowser"===e.name)).length>0&&globalThis.appLauncher.showLauncher(e);this.shadowRoot.querySelector("#folder-explorer-dialog").open&&this.closeDialog("folder-explorer-dialog"),a.end(1e3)})).catch((e=>{this.notification.text=z.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e),a.end(1e3)}))}_openRenameFileDialog(e,t=!1){const i=e.target.getAttribute("filename");this.renameFileDialog.querySelector("#old-file-name").textContent=i,this.renameFileDialog.querySelector("#new-file-name").value=i,this.renameFileDialog.filename=i,this.renameFileDialog.show();const o=this.renameFileDialog.querySelector("#new-file-name");this.is_dir=t,o.addEventListener("focus",(e=>{const t=i.replace(/\.([0-9a-z]+)$/i,"").length;o.setSelectionRange(0,t)})),o.focus()}_renameFile(){const e=this.renameFileDialog.filename,t=this.explorer.breadcrumb.concat(e).join("/"),i=this.renameFileDialog.querySelector("#new-file-name"),o=i.value;if(this.shadowRoot.querySelector("#file-extension-change-dialog").hide(),i.reportValidity(),i.checkValidity()){if(e===o)return i.focus(),this.notification.text=R("data.folders.SameFileName"),void this.notification.show();globalThis.backendaiclient.vfolder.rename_file(t,o,this.explorer.id,this.is_dir).then((e=>{this.notification.text=R("data.folders.FileRenamed"),this.notification.show(),this._clearExplorer(),this.renameFileDialog.hide()})).catch((e=>{console.error(e),e&&e.message&&(this.notification.text=e.title,this.notification.detail=e.message,this.notification.show(!0,e))}))}}_openDeleteFileDialog(e){const t=e.target.getAttribute("filename");this.deleteFileDialog.filename=t,this.deleteFileDialog.files=[],this.deleteFileDialog.show()}_openDeleteMultipleFileDialog(e){this.deleteFileDialog.files=this.fileListGrid.selectedItems,this.deleteFileDialog.filename="",this.deleteFileDialog.show()}_deleteFileWithCheck(e){const t=this.deleteFileDialog.files;if(t.length>0){const e=[];t.forEach((t=>{const i=this.explorer.breadcrumb.concat(t.filename).join("/");e.push(i)}));globalThis.backendaiclient.vfolder.delete_files(e,!0,this.explorer.id).then((e=>{this.notification.text=1==t.length?R("data.folders.FileDeleted"):R("data.folders.MultipleFilesDeleted"),this.notification.show(),this._clearExplorer(),this.deleteFileDialog.hide()}))}else if(""!=this.deleteFileDialog.filename){const e=this.explorer.breadcrumb.concat(this.deleteFileDialog.filename).join("/");globalThis.backendaiclient.vfolder.delete_files([e],!0,this.explorer.id).then((e=>{this.notification.text=R("data.folders.FileDeleted"),this.notification.show(),this._clearExplorer(),this.deleteFileDialog.hide()}))}}_deleteFile(e){const t=e.target.getAttribute("filename"),i=this.explorer.breadcrumb.concat(t).join("/");globalThis.backendaiclient.vfolder.delete_files([i],!0,this.explorer.id).then((e=>{this.notification.text=R("data.folders.FileDeleted"),this.notification.show(),this._clearExplorer()}))}_isResourceEnough(){const e=new CustomEvent("backend-ai-calculate-current-resource");document.dispatchEvent(e);const t=globalThis.backendaioptions.get("current-resource");return!!(t&&(t.cpu="string"==typeof t.cpu?parseInt(t.cpu):t.cpu,t.cpu>=this.minimumResource.cpu&&t.mem>=this.minimumResource.mem))}_humanReadableTime(e){const t=new Date(1e3*e),i=t.getTimezoneOffset()/60,o=t.getHours();return t.setHours(o-i),t.toUTCString()}_isDownloadable(e){return!0}_initializeSharingFolderDialogLayout(){const e=this.shadowRoot.querySelectorAll("#share-folder-dialog mwc-textfield.share-email");e.length>1&&Array.prototype.forEach.call(e,((e,t)=>{"first-email"!==e.id&&e.parentNode.removeChild(e)}))}_shareFolderDialog(e){this.selectedFolder=this._getControlName(e),this.selectedFolderType=this._getControlType(e),this._initializeSharingFolderDialogLayout(),this.openDialog("share-folder-dialog")}_modifyPermissionDialog(e){globalThis.backendaiclient.vfolder.list_invitees(e).then((e=>{this.invitees=e.shared,this.shadowRoot.querySelector("#modify-permission-dialog").updateComplete.then((()=>{this.openDialog("modify-permission-dialog")}))}))}_shareFolder(e){const t=this.shadowRoot.querySelectorAll("mwc-textfield.share-email"),i=Array.prototype.filter.call(t,(e=>e.isUiValid&&""!==e.value)).map((e=>e.value.trim())),o=this.shadowRoot.querySelector("mwc-radio[name=share-folder-permission][checked]").value;if(0===i.length){this.notification.text=R("data.invitation.NoValidEmails"),this.notification.show(),this.shadowRoot.querySelector("#share-folder-dialog").hide();for(const e of t)e.value="";return}let a;a="user"===this.selectedFolderType?globalThis.backendaiclient.vfolder.invite(o,i,this.selectedFolder):globalThis.backendaiclient.vfolder.share(o,i,this.selectedFolder),a.then((e=>{let i;i="user"===this.selectedFolderType?e.invited_ids&&e.invited_ids.length>0?R("data.invitation.Invited"):R("data.invitation.NoOneWasInvited"):e.shared_emails&&e.shared_emails.length>0?R("data.invitation.Shared"):R("data.invitation.NoOneWasShared"),this.notification.text=i,this.notification.show(),this.shadowRoot.querySelector("#share-folder-dialog").hide();for(let e=t.length-1;e>0;e--){const i=t[e];i.parentElement.removeChild(i)}})).catch((e=>{"user"===this.selectedFolderType?this.notification.text=R("data.invitation.InvitationError"):this.notification.text=R("data.invitation.SharingError"),e&&e.message&&(this.notification.detail=e.message),this.notification.show(!0,e)}))}_validatePathName(){const e=this.shadowRoot.querySelector("#mkdir-name");e.validityTransform=(t,i)=>{if(i.valid){let t=/^([^`~!@#$%^&*()|+=?;:'",<>{}[\]\r\n/]{1,})+(\/[^`~!@#$%^&*()|+=?;:'",<>{}[\]\r\n/]{1,})*([/,\\]{0,1})$/gm.test(e.value);return t&&"./"!==e.value||(e.validationMessage=R("data.explorer.ValueShouldBeStarted"),t=!1),{valid:t,customError:!t}}return i.valueMissing?(e.validationMessage=R("data.explorer.ValueRequired"),{valid:i.valid,customError:!i.valid}):{valid:i.valid,customError:!i.valid}}}};o([l({type:Number})],le.prototype,"_APIMajorVersion",void 0),o([l({type:String})],le.prototype,"storageType",void 0),o([l({type:Array})],le.prototype,"folders",void 0),o([l({type:Object})],le.prototype,"folderInfo",void 0),o([l({type:Boolean})],le.prototype,"is_admin",void 0),o([l({type:Boolean})],le.prototype,"enableStorageProxy",void 0),o([l({type:Boolean})],le.prototype,"authenticated",void 0),o([l({type:String})],le.prototype,"renameFolderName",void 0),o([l({type:String})],le.prototype,"deleteFolderName",void 0),o([l({type:String})],le.prototype,"leaveFolderName",void 0),o([l({type:Object})],le.prototype,"explorer",void 0),o([l({type:Array})],le.prototype,"explorerFiles",void 0),o([l({type:String})],le.prototype,"existingFile",void 0),o([l({type:Array})],le.prototype,"invitees",void 0),o([l({type:String})],le.prototype,"selectedFolder",void 0),o([l({type:String})],le.prototype,"selectedFolderType",void 0),o([l({type:String})],le.prototype,"downloadURL",void 0),o([l({type:Array})],le.prototype,"uploadFiles",void 0),o([l({type:Array})],le.prototype,"fileUploadQueue",void 0),o([l({type:Number})],le.prototype,"fileUploadCount",void 0),o([l({type:Number})],le.prototype,"concurrentFileUploadLimit",void 0),o([l({type:String})],le.prototype,"vhost",void 0),o([l({type:Array})],le.prototype,"vhosts",void 0),o([l({type:Array})],le.prototype,"allowedGroups",void 0),o([l({type:Object})],le.prototype,"fileListGrid",void 0),o([l({type:Object})],le.prototype,"indicator",void 0),o([l({type:Object})],le.prototype,"notification",void 0),o([l({type:Object})],le.prototype,"renameFileDialog",void 0),o([l({type:Object})],le.prototype,"deleteFileDialog",void 0),o([l({type:Object})],le.prototype,"downloadFileDialog",void 0),o([l({type:Object})],le.prototype,"sessionLauncher",void 0),o([l({type:Object})],le.prototype,"spinner",void 0),o([l({type:Array})],le.prototype,"allowed_folder_type",void 0),o([l({type:Boolean})],le.prototype,"uploadFilesExist",void 0),o([l({type:Object})],le.prototype,"_boundIndexRenderer",void 0),o([l({type:Object})],le.prototype,"_boundTypeRenderer",void 0),o([l({type:Object})],le.prototype,"_boundFolderListRenderer",void 0),o([l({type:Object})],le.prototype,"_boundControlFolderListRenderer",void 0),o([l({type:Object})],le.prototype,"_boundControlFileListRenderer",void 0),o([l({type:Object})],le.prototype,"_boundPermissionViewRenderer",void 0),o([l({type:Object})],le.prototype,"_boundOwnerRenderer",void 0),o([l({type:Object})],le.prototype,"_boundFileNameRenderer",void 0),o([l({type:Object})],le.prototype,"_boundCreatedTimeRenderer",void 0),o([l({type:Object})],le.prototype,"_boundPermissionRenderer",void 0),o([l({type:Object})],le.prototype,"_boundCloneableRenderer",void 0),o([l({type:Object})],le.prototype,"_boundQuotaRenderer",void 0),o([l({type:Object})],le.prototype,"_boundUploadListRenderer",void 0),o([l({type:Object})],le.prototype,"_boundUploadProgressRenderer",void 0),o([l({type:Object})],le.prototype,"_boundInviteeInfoRenderer",void 0),o([l({type:Object})],le.prototype,"_boundIDRenderer",void 0),o([l({type:Boolean})],le.prototype,"_uploadFlag",void 0),o([l({type:Boolean})],le.prototype,"_folderRefreshing",void 0),o([l({type:Number})],le.prototype,"lastQueryTime",void 0),o([l({type:Boolean})],le.prototype,"isWritable",void 0),o([l({type:Object})],le.prototype,"permissions",void 0),o([l({type:Number})],le.prototype,"_maxFileUploadSize",void 0),o([l({type:Number})],le.prototype,"selectAreaHeight",void 0),o([l({type:String})],le.prototype,"oldFileExtension",void 0),o([l({type:String})],le.prototype,"newFileExtension",void 0),o([l({type:Boolean})],le.prototype,"is_dir",void 0),o([l({type:Number})],le.prototype,"minimumResource",void 0),o([l({type:Array})],le.prototype,"filebrowserSupportedImages",void 0),o([l({type:Object})],le.prototype,"storageProxyInfo",void 0),o([l({type:Array})],le.prototype,"quotaSupportStorageBackends",void 0),o([l({type:Object})],le.prototype,"quotaUnit",void 0),o([l({type:Object})],le.prototype,"maxSize",void 0),o([l({type:Object})],le.prototype,"quota",void 0),le=o([v("backend-ai-storage-list")],le);let se=class extends _{constructor(){super(),this.apiMajorVersion="",this.folders=Object(),this.folderInfo=Object(),this.is_admin=!1,this.enableStorageProxy=!1,this.authenticated=!1,this.deleteFolderId="",this.vhost="",this.vhosts=[],this.usageModes=["General","Data","Model"],this.permissions=["Read-Write","Read-Only","Delete"],this.allowedGroups=[],this.allowed_folder_type=[],this.notification=Object(),this.spinner=Object(),this.folderLists=Object(),this._status="inactive",this.active=!0,this._lists=Object(),this._vfolderInnatePermissionSupport=!1,this.storageInfo=Object(),this._activeTab="general",this._helpDescription="",this._helpDescriptionTitle="",this._helpDescriptionIcon="",this.cloneFolderName="",this.quotaSupportStorageBackends=["xfs","weka"],this.storageProxyInfo=Object(),this.folderType="user"}static get styles(){return[x,k,F,$,b`
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

        #add-folder-dialog,
        #clone-folder-dialog {
          --component-width: 375px;
        }

        backend-ai-dialog wl-textfield,
        backend-ai-dialog wl-select {
          --input-font-family: var(--general-font-family);
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
          --label-font-family: 'Ubuntu', Roboto;
          --label-color: black;
        }

        mwc-select {
          width: 50%;
          margin-bottom: 10px;
          --mdc-theme-primary: var(--general-textfield-selected-color);
          --mdc-select-fill-color: transparent;
          --mdc-select-label-ink-color: rgba(0, 0, 0, 0.75);
          --mdc-select-dropdown-icon-color: var(--general-textfield-selected-color);
          --mdc-select-hover-line-color: var(--general-textfield-selected-color);
          --mdc-list-vertical-padding: 5px;
          /* Need to be set when fixedMenuPosition attribute is enabled */
          --mdc-menu-max-width: 345px;
          --mdc-menu-min-width: 172.5px;
          --mdc-select-disabled-ink-color: #cccccc;
        }

        mwc-select.full-width.fixed-position {
          width: 100%;
          /* Need to be set when fixedMenuPosition attribute is enabled */
          --mdc-menu-max-width: 345px;
          --mdc-menu-min-width: 345px;
        }

        mwc-select.fixed-position {
          /* Need to be set when fixedMenuPosition attribute is enabled */
          --mdc-menu-max-width: 172.5px;
          --mdc-menu-min-width: 172.5px;
        }

        mwc-select mwc-icon-button {
          --mdc-icon-button-size: 24px;
          color: var(--general-textfield-selected-color);
        }

        #help-description {
          --dialog-width: 350px;
        }

        #help-description p {
          padding: 5px !important;
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

        h4#default-quota-unit {
          display:none;
        }

        @media screen and (max-width: 750px) {
          mwc-tab {
            --mdc-typography-button-font-size: 10px;
          }

          mwc-button > span {
            display: none;
          }
        }
      `]}render(){return u`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <div class="vertical layout">
        <lablup-activity-panel elevation="1" narrow title=${S("data.StorageStatus")} autowidth>
          <div slot="message">
            <div class="horizontal layout wrap flex center center-justified">
              <div class="storage-chart-wrapper">
                <chart-js id="storage-status" type="doughnut" .data="${this.folders}" .options="${this.options}" height="250" width="250"></chart-js>
              </div>
              <div class="horizontal layout justified">
                <div class="vertical layout center storage-status-indicator">
                  <div class="big">${this.createdCount}</div>
                  <span>${S("data.Created")}</span>
                </div>
                <div class="vertical layout center storage-status-indicator">
                  <div class="big">${this.invitedCount}</div>
                  <span>${S("data.Invited")}</span>
                </div>
                <div class="vertical layout center storage-status-indicator">
                  <div class="big">${this.capacity}</div>
                  <span>${S("data.Capacity")}</span>
                </div>
              </div>
            </div>
          </div>
        </lablup-activity-panel>
        <lablup-activity-panel elevation="1" noheader narrow autowidth>
          <div slot="message">
            <h3 class="horizontal center flex layout tab">
              <mwc-tab-bar>
                <mwc-tab title="general" label="${S("data.Folders")}"
                    @click="${e=>this._showTab(e.target)}">
                </mwc-tab>
                <mwc-tab title="automount" label="${S("data.AutomountFolders")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
              </mwc-tab-bar>
              <span class="flex"></span>
              <mwc-button dense raised id="add-folder" icon="add" @click="${()=>this._addFolderDialog()}" style="margin-right:15px;">
                <span>${S("data.NewFolder")}</span>
              </mwc-button>
            </h3>
            <div id="general-folder-lists" class="tab-content">
              <backend-ai-storage-list id="general-folder-storage" storageType="general" ?active="${!0===this.active&&"general"===this._activeTab}"></backend-ai-storage-list>
            </div>
            <div id="automount-folder-lists" class="tab-content" style="display:none;">
              <div class="horizontal layout">
                <p>${S("data.DialogFolderStartingWithDotAutomount")}</p>
              </div>
              <backend-ai-storage-list id="automount-folder-storage" storageType="automount" ?active="${!0===this.active&&"automount"===this._activeTab}"></backend-ai-storage-list>
            </div>
          </div>
        </lablup-activity-panel>
      </div>
      <backend-ai-dialog id="add-folder-dialog" fixed backdrop>
        <span slot="title">${S("data.CreateANewStorageFolder")}</span>
        <div slot="content" class="vertical layout flex">
          <mwc-textfield id="add-folder-name" label="${S("data.Foldername")}"
          @change="${()=>this._validateFolderName()}" pattern="^[a-zA-Z0-9\._-]*$"
            required validationMessage="${S("data.Allowslettersnumbersand-_dot")}" maxLength="64"
            placeholder="${S("maxLength.64chars")}"></mwc-textfield>
          <mwc-select class="full-width fixed-position" id="add-folder-host" label="${S("data.Host")}" fixedMenuPosition>
            ${this.vhosts.map(((e,t)=>u`
              <mwc-list-item hasMeta value="${e}" ?selected="${e===this.vhost}">
                <span>${e}</span>
                <mwc-icon-button slot="meta" icon="info"
                    @click="${t=>this._showStorageDescription(t,e)}">
                </mwc-icon-button>
              </mwc-list-item>
            `))}
          </mwc-select>
          <div class="horizontal layout">
            <mwc-select id="add-folder-type" label="${S("data.Type")}"
                        style="width:${this.is_admin&&this.allowed_folder_type.includes("group")?"50%":"100%"}"
                        @change=${this._toggleFolderTypeInput} required>
              ${this.allowed_folder_type.includes("user")?u`
                <mwc-list-item value="user" selected>${S("data.User")}</mwc-list-item>
              `:u``}
              ${this.is_admin&&this.allowed_folder_type.includes("group")?u`
                <mwc-list-item value="group" ?selected="${!this.allowed_folder_type.includes("user")}">${S("data.Project")}</mwc-list-item>
              `:u``}
            </mwc-select>
            ${this.is_admin&&this.allowed_folder_type.includes("group")?u`
              <mwc-select class="fixed-position" id="add-folder-group" ?disabled=${"user"===this.folderType} label="${S("data.Project")}" FixedMenuPosition>
                ${this.allowedGroups.map(((e,t)=>u`
                  <mwc-list-item value="${e.name}" ?disabled=${this.allowed_folder_type.includes("group")} ?selected="${0===t}">${e.name}</mwc-list-item>
                `))}
              </mwc-select>
          `:u``}
          </div>
          ${this._vfolderInnatePermissionSupport?u`
            <div class="horizontal layout">
              <mwc-select class="fixed-position" id="add-folder-usage-mode" label="${S("data.UsageMode")}" fixedMenuPosition>
                ${this.usageModes.map(((e,t)=>u`
                  <mwc-list-item value="${e}" ?selected="${0===t}">${e}</mwc-list-item>
                `))}
              </mwc-select>
              <mwc-select class="fixed-position" id="add-folder-permission" label="${S("data.Permission")}" fixedMenuPosition>
                ${this.permissions.map(((e,t)=>u`
                  <mwc-list-item value="${e}" ?selected="${0===t}">${e}</mwc-list-item>
                `))}
              </mwc-select>
            </div>
          `:u``}
          ${this.enableStorageProxy?u`
          <!--<div class="horizontal layout flex wrap center justified">
              <p style="color:rgba(0, 0, 0, 0.6);">
                ${S("data.folders.Cloneable")}
              </p>
              <mwc-switch id="add-folder-cloneable" style="margin-right:10px;">
              </mwc-switch>
            </div>-->
            `:u``}
          <div style="font-size:11px;">
            ${S("data.DialogFolderStartingWithDotAutomount")}
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex">
          <mwc-button
              unelevated
              fullwidth
              id="add-button"
              icon="rowing"
              label="${S("data.Create")}"
              @click="${()=>this._addFolder()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="clone-folder-dialog" fixed backdrop>
        <span slot="title">${S("data.folders.CloneAFolder")}</span>
        <div slot="content" style="width:100%;">
          <mwc-textfield id="clone-folder-src" label="${S("data.FolderToCopy")}" value="${this.cloneFolderName}"
              disabled></mwc-textfield>
          <mwc-textfield id="clone-folder-name" label="${S("data.Foldername")}"
              @change="${()=>this._validateFolderName()}" pattern="^[a-zA-Z0-9\._-]*$"
              required validationMessage="${S("data.Allowslettersnumbersand-_dot")}" maxLength="64"
              placeholder="${S("maxLength.64chars")}"></mwc-textfield>
          <mwc-select class="full-width fixed-position" id="clone-folder-host" label="${S("data.Host")}" fixedMenuPosition>
            ${this.vhosts.map(((e,t)=>u`
              <mwc-list-item hasMeta value="${e}" ?selected="${0===t}">
                <span>${e}</span>
                <mwc-icon-button slot="meta" icon="info"
                    @click="${t=>this._showStorageDescription(t,e)}">
                </mwc-icon-button>
              </mwc-list-item>
            `))}
          </mwc-select>
          <div class="horizontal layout">
            <mwc-select id="clone-folder-type" label="${S("data.Type")}"
                        style="width:${this.is_admin&&this.allowed_folder_type.includes("group")?"50%":"100%"}">
              ${this.allowed_folder_type.includes("user")?u`
                <mwc-list-item value="user" selected>${S("data.User")}</mwc-list-item>
              `:u``}
              ${this.is_admin&&this.allowed_folder_type.includes("group")?u`
                <mwc-list-item value="group" ?selected="${!this.allowed_folder_type.includes("user")}">${S("data.Project")}</mwc-list-item>
              `:u``}
            </mwc-select>
            ${this.is_admin&&this.allowed_folder_type.includes("group")?u`
                <mwc-select class="fixed-position" id="clone-folder-group" label="${S("data.Project")}" FixedMenuPosition>
                  ${this.allowedGroups.map(((e,t)=>u`
                    <mwc-list-item value="${e.name}" ?selected="${0===t}">${e.name}</mwc-list-item>
                  `))}
                </mwc-select>
            `:u``}
          </div>
          ${this._vfolderInnatePermissionSupport?u`
            <div class="horizontal layout">
              <mwc-select class="fixed-position" id="clone-folder-usage-mode" label="${S("data.UsageMode")}" FixedMenuPosition>
                ${this.usageModes.map(((e,t)=>u`
                  <mwc-list-item value="${e}" ?selected="${0===t}">${e}</mwc-list-item>
                `))}
              </mwc-select>
              <mwc-select class="fixed-position" id="clone-folder-permission" label="${S("data.Permission")}" FixedMenuPosition>
                ${this.permissions.map(((e,t)=>u`
                  <mwc-list-item value="${e}" ?selected="${0===t}">${e}</mwc-list-item>
                `))}
              </mwc-select>
            </div>
          `:u``}
          ${this.enableStorageProxy?u`
          <div class="horizontal layout flex wrap center justified">
              <p style="color:rgba(0, 0, 0, 0.6);">
                ${S("data.folders.Cloneable")}
              </p>
              <mwc-switch id="clone-folder-cloneable" style="margin-right:10px;">
              </mwc-switch>
            </div>
            `:u``}
          <div style="font-size:11px;">
            ${S("data.DialogFolderStartingWithDotAutomount")}
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex">
          <mwc-button
              unelevated
              fullwidth
              id="clone-button"
              icon="file_copy"
              label="${S("data.Create")}"
              @click="${()=>this._cloneFolder()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="help-description" fixed backdrop>
        <span slot="title">${this._helpDescriptionTitle}</span>
        <div slot="content" class="horizontal layout center">
        ${""==this._helpDescriptionIcon?u``:u`
          <img slot="graphic" src="resources/icons/${this._helpDescriptionIcon}" style="width:64px;height:64px;margin-right:10px;" />
          `}
          <p style="font-size:14px;width:256px;">${T(this._helpDescription)}</p>
        </div>
      </backend-ai-dialog>
    `}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification,this.folderLists=this.shadowRoot.querySelectorAll("backend-ai-storage-list"),fetch("resources/storage_metadata.json").then((e=>e.json())).then((e=>{const t=Object();for(const i in e.storageInfo)({}).hasOwnProperty.call(e.storageInfo,i)&&(t[i]={},"name"in e.storageInfo[i]&&(t[i].name=e.storageInfo[i].name),"description"in e.storageInfo[i]?t[i].description=e.storageInfo[i].description:t[i].description=R("data.NoStorageDescriptionFound"),"icon"in e.storageInfo[i]?t[i].icon=e.storageInfo[i].icon:t[i].icon="local.png","dialects"in e.storageInfo[i]&&e.storageInfo[i].dialects.forEach((e=>{t[e]=t[i]})));this.storageInfo=t})),this.options={responsive:!0,maintainAspectRatio:!0,legend:{display:!0,position:"bottom",align:"center",labels:{fontSize:20,boxWidth:10}}},void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._getStorageProxyBackendInformation()}),!0):this._getStorageProxyBackendInformation(),document.addEventListener("backend-ai-folder-list-changed",(()=>{this._createStorageChart()})),document.addEventListener("backend-ai-vfolder-cloning",(e=>{if(e.detail){const t=e.detail;this.cloneFolderName=t.name,this._cloneFolderDialog()}}))}async _viewStateChanged(e){if(await this.updateComplete,!1===e)return;const t=()=>{this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this.enableStorageProxy=globalThis.backendaiclient.supports("storage-proxy"),this.apiMajorVersion=globalThis.backendaiclient.APIMajorVersion,this._getStorageProxyBackendInformation(),globalThis.backendaiclient.isAPIVersionCompatibleWith("v4.20191215")&&(this._vfolderInnatePermissionSupport=!0),globalThis.backendaiclient.vfolder.list_allowed_types().then((e=>{this.allowed_folder_type=e}))};void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{t(),this._createStorageChart()}),!0):(t(),this._createStorageChart())}async _createStorageChart(){const e=globalThis.backendaiclient._config.accessKey,t=(await globalThis.backendaiclient.keypair.info(e,["resource_policy"])).keypair.resource_policy,i=(await globalThis.backendaiclient.resourcePolicy.get(t,["max_vfolder_count"])).keypair_resource_policy.max_vfolder_count,o=globalThis.backendaiclient.current_group_id(),a=await globalThis.backendaiclient.vfolder.list(o);this.createdCount=a.filter((e=>e.is_owner)).length,this.invitedCount=a.length-this.createdCount,this.capacity=this.createdCount<i?i-this.createdCount:0,this.totalCount=this.capacity+this.createdCount+this.invitedCount,this.folders={labels:[R("data.Created"),R("data.Invited"),R("data.Capacity")],datasets:[{data:[this.createdCount,this.invitedCount,this.capacity],backgroundColor:["#722cd7","#60bb43","#efefef"]}]}}_toggleFolderTypeInput(){this.folderType=this.shadowRoot.querySelector("#add-folder-type").value}_showTab(e){const t=this.shadowRoot.querySelectorAll(".tab-content");for(let e=0;e<t.length;e++)t[e].style.display="none";this.shadowRoot.querySelector("#"+e.title+"-folder-lists").style.display="block",this._activeTab=e.title}async _cloneFolderDialog(){const e=await globalThis.backendaiclient.vfolder.list_hosts();if(this.shadowRoot.querySelector("#add-folder-name").value="",this.vhosts=e.allowed,this.vhost=e.default,this.allowed_folder_type.includes("group")){const e=await globalThis.backendaiclient.group.list();this.allowedGroups=e.groups}this.shadowRoot.querySelector("#clone-folder-name").value=await this._checkFolderNameAlreadyExists(this.cloneFolderName),this.openDialog("clone-folder-dialog")}async _addFolderDialog(){const e=await globalThis.backendaiclient.vfolder.list_hosts();if(this.shadowRoot.querySelector("#add-folder-name").value="",this.vhosts=e.allowed,this.vhost=e.default,this.allowed_folder_type.includes("group")){const e=await globalThis.backendaiclient.group.list();this.allowedGroups=e.groups}this.openDialog("add-folder-dialog")}async _getStorageProxyBackendInformation(){const e=await globalThis.backendaiclient.vfolder.list_hosts();this.storageProxyInfo=e.volume_info||{}}openDialog(e){this.shadowRoot.querySelector("#"+e).show()}closeDialog(e){this.shadowRoot.querySelector("#"+e).hide()}_showStorageDescription(e,t){e.stopPropagation(),t in this.storageInfo?(this._helpDescriptionTitle=this.storageInfo[t].name,this._helpDescription=this.storageInfo[t].description,this._helpDescriptionIcon=this.storageInfo[t].icon):(this._helpDescriptionTitle=t,this._helpDescriptionIcon="local.png",this._helpDescription=R("data.NoStorageDescriptionFound"));this.shadowRoot.querySelector("#help-description").show()}_indexFrom1(e){return e+1}_addFolder(){const e=this.shadowRoot.querySelector("#add-folder-name"),t=e.value,i=this.shadowRoot.querySelector("#add-folder-host").value;let o,a=this.shadowRoot.querySelector("#add-folder-type").value;const r=this.shadowRoot.querySelector("#add-folder-usage-mode"),l=this.shadowRoot.querySelector("#add-folder-permission"),s=this.shadowRoot.querySelector("#add-folder-cloneable");let d="",n="",c=!1;if(!1===["user","group"].includes(a)&&(a="user"),o="user"===a?"":this.is_admin?this.shadowRoot.querySelector("#add-folder-group").value:globalThis.backendaiclient.current_group,r&&(d=r.value,d=d.toLowerCase()),l)switch(n=l.value,n){case"Read-Write":default:n="rw";break;case"Read-Only":n="ro";break;case"Delete":n="wd"}if(s&&(c=s.checked),e.reportValidity(),e.checkValidity()){globalThis.backendaiclient.vfolder.create(t,i,o,d,n,c).then((e=>{this.notification.text=R("data.folders.FolderCreated"),this.notification.show(),this._refreshFolderList()})).catch((e=>{e&&e.message&&(this.notification.text=z.relieve(e.message),this.notification.detail=e.message,this.notification.show(!0,e))})),this.closeDialog("add-folder-dialog")}}async _cloneFolder(){const e=this.shadowRoot.querySelector("#clone-folder-name"),t=await this._checkFolderNameAlreadyExists(e.value,!0),i=this.shadowRoot.querySelector("#clone-folder-host").value;this.shadowRoot.querySelector("#clone-folder-type").value;const o=this.shadowRoot.querySelector("#clone-folder-usage-mode"),a=this.shadowRoot.querySelector("#clone-folder-permission"),r=this.shadowRoot.querySelector("#clone-folder-cloneable");let l="",s="",d=!1;if(o&&(l=o.value,l=l.toLowerCase()),a)switch(s=a.value,s){case"Read-Write":default:s="rw";break;case"Read-Only":s="ro";break;case"Delete":s="wd"}if(d=!!r&&r.selected,e.reportValidity(),e.checkValidity()){const e={cloneable:d,permission:s,target_host:i,target_name:t,usage_mode:l};globalThis.backendaiclient.vfolder.clone(e,this.cloneFolderName).then((e=>{this.notification.text=R("data.folders.FolderCloned"),this.notification.show(),this._refreshFolderList()})).catch((e=>{e&&e.message&&(this.notification.text=z.relieve(e.message),this.notification.detail=e.message,this.notification.show(!0,e))})),this.closeDialog("clone-folder-dialog")}}_validateFolderName(){const e=this.shadowRoot.querySelector("#add-folder-name");e.validityTransform=(t,i)=>{if(i.valid){let t=!/[`~!@#$%^&*()|+=?;:'",<>{}[\]\\/\s]/gi.test(e.value);return t||(e.validationMessage=R("data.Allowslettersnumbersand-_dot")),e.value.length>64&&(t=!1,e.validationMessage=R("data.FolderNameTooLong")),{valid:t,customError:!t}}return i.valueMissing?(e.validationMessage=R("data.FolderNameRequired"),{valid:i.valid,customError:!i.valid}):(e.validationMessage=R("data.Allowslettersnumbersand-_dot"),{valid:i.valid,customError:!i.valid})}}_refreshFolderList(){for(const e of this.folderLists)e.refreshFolderList()}async _checkFolderNameAlreadyExists(e,t=!1){const i=globalThis.backendaiclient.current_group_id(),o=(await globalThis.backendaiclient.vfolder.list(i)).map((e=>e.name));if(o.includes(e)){t&&(this.notification.text=R("import.FolderAlreadyExists"),this.notification.show());let i=1,a=e;for(;o.includes(a);)a=e+"_"+i,i++;e=a}return e}};o([l({type:String})],se.prototype,"apiMajorVersion",void 0),o([l({type:Object})],se.prototype,"folders",void 0),o([l({type:Object})],se.prototype,"folderInfo",void 0),o([l({type:Boolean})],se.prototype,"is_admin",void 0),o([l({type:Boolean})],se.prototype,"enableStorageProxy",void 0),o([l({type:Boolean})],se.prototype,"authenticated",void 0),o([l({type:String})],se.prototype,"deleteFolderId",void 0),o([l({type:String})],se.prototype,"vhost",void 0),o([l({type:Array})],se.prototype,"vhosts",void 0),o([l({type:Array})],se.prototype,"usageModes",void 0),o([l({type:Array})],se.prototype,"permissions",void 0),o([l({type:Array})],se.prototype,"allowedGroups",void 0),o([l({type:Array})],se.prototype,"allowed_folder_type",void 0),o([l({type:Object})],se.prototype,"notification",void 0),o([l({type:Object})],se.prototype,"spinner",void 0),o([l({type:Object})],se.prototype,"folderLists",void 0),o([l({type:String})],se.prototype,"_status",void 0),o([l({type:Boolean})],se.prototype,"active",void 0),o([l({type:Object})],se.prototype,"_lists",void 0),o([l({type:Boolean})],se.prototype,"_vfolderInnatePermissionSupport",void 0),o([l({type:Object})],se.prototype,"storageInfo",void 0),o([l({type:String})],se.prototype,"_activeTab",void 0),o([l({type:String})],se.prototype,"_helpDescription",void 0),o([l({type:String})],se.prototype,"_helpDescriptionTitle",void 0),o([l({type:String})],se.prototype,"_helpDescriptionIcon",void 0),o([l({type:Object})],se.prototype,"options",void 0),o([l({type:Number})],se.prototype,"createdCount",void 0),o([l({type:Number})],se.prototype,"invitedCount",void 0),o([l({type:Number})],se.prototype,"totalCount",void 0),o([l({type:Number})],se.prototype,"capacity",void 0),o([l({type:String})],se.prototype,"cloneFolderName",void 0),o([l({type:Array})],se.prototype,"quotaSupportStorageBackends",void 0),o([l({type:Object})],se.prototype,"storageProxyInfo",void 0),o([l({type:String})],se.prototype,"folderType",void 0),se=o([v("backend-ai-data-view")],se);var de=se;export{de as default};
