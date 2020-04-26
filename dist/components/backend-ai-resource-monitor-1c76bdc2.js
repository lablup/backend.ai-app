import{_ as e,q as t,p as i,o as s,F as r,n as a,h as o,r as n,s as l,u as c,v as d,m as u,w as h,c as p,x as m,y as g,z as _,j as b,k as v,M as y,A as f,C as w,P as x,D as k,E as $,b as S,L as R,e as T,I,a as E,G as C,f as j,d as A,g as q,i as O,t as F}from"./backend-ai-console-969654a6.js";import{u as z}from"./unsafe-html-7ea71d74.js";import{g as M,a as U}from"./mwc-linear-progress-508cb1e5.js";import"./paper-dropdown-menu-2c0c71b5.js";import"./paper-item-97b726d6.js";import{R as N}from"./radio-behavior-b4045b4d.js";import"./expansion-ab07c4f1.js";import"./label-54919d09.js";import{I as L}from"./input-behavior-31a4f7aa.js";import"./select-d9b0247d.js";import"./textfield-4e6b96d6.js";const D=(e={})=>{const t={};for(const i in e)t[i]=e[i];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},t)};class P extends r{constructor(){super(...arguments),this.mdcFoundationClass=a,this.disabled=!1,this.outlined=!1,this.label="",this.outlineOpen=!1,this.outlineWidth=0,this.value="",this.selectedText="",this.icon="",this.menuOpen=!1,this.helper="",this.helperPersistent=!1,this.validateOnInitialRender=!1,this.validationMessage="",this.required=!1,this.naturalWidth=!1,this.isUiValid=!0,this.multi=!1,this.listeners=[],this.onBodyClickBound=()=>{},this._outlineUpdateComplete=null,this._menuUpdateComplete=null,this.renderReady=!1,this.validityTransform=null,this._validity=D()}get items(){const e=this.menuElement;return e?e.items:[]}get selected(){const e=this.menuElement;return e?e.selected:null}get index(){const e=this.menuElement;return e?e.index:-1}get shouldRenderHelperText(){return!!this.helper||!!this.validationMessage}get validity(){return this._checkValidity(this.value),this._validity}render(){let e=o``;e=this.outlined?this.renderOutlined():this.renderUnderlined();const t={"mdc-select--disabled":this.disabled,"mdc-select--no-label":!this.label,"mdc-select--outlined":this.outlined,"mdc-select--with-leading-icon":!!this.icon,"mdc-select--required":this.required,"mdc-select--invalid":!this.isUiValid},i=this.shouldRenderHelperText?"helper-text":void 0;return o`
      <div class="mdc-select ${n(t)}">
        <input
            class="formElement"
            .value=${this.value}
            hidden
            ?required=${this.required}>
        ${this.icon?this.renderIcon(this.icon):""}
        <div class="mdc-select__anchor" @click=${this.onClick}>
          <i class="mdc-select__dropdown-icon">
            <svg
                width="10px"
                height="5px"
                viewBox="7 10 10 5"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
              <polygon
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
            </svg>
          </i>
          <!-- @ts-ignore -->
          <div
              class="mdc-select__selected-text"
              role="button"
              aria-invalid=${!this.isUiValid}
              aria-haspopup="listbox"
              aria-labelledby="label"
              aria-required=${this.required}
              aria-describedby=${l(i)}
              @focus=${this.onFocus}
              @blur=${this.onBlur}
              @keydown=${this.onKeydown}>
            ${this.selectedText}
          </div>
          ${e}
        </div>
        ${this.renderHelperText()}
        <mwc-menu
            innerRole="listbox"
            wrapFocus
            class="mdc-select__menu mdc-menu mdc-menu-surface"
            activatable
            .multi=${this.multi}
            .fullwidth=${!this.naturalWidth}
            .open=${this.menuOpen}
            .anchor=${this.anchorElement}
            @selected=${this.onSelected}
            @opened=${this.onOpened}
            @closed=${this.onClosed}>
            <slot></slot>
        </mwc-menu>
      </div>`}renderHelperText(){const e=this.validationMessage&&!this.isUiValid,t={"mdc-select-helper-text--persistent":this.helperPersistent||e,"mdc-select-helper-text--validation-msg":e,hidden:!this.shouldRenderHelperText};return o`
        <p class="mdc-select-helper-text ${n(t)}" id="helper-text">
          ${e?this.validationMessage:this.helper}
        </p>`}renderOutlined(){let e="";return this.label&&(e=this.renderLabel()),o`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${e}
      </mwc-notched-outline>`}renderUnderlined(){let e="";return this.label&&(e=this.renderLabel()),o`
      ${e}
      <div .lineRippleFoundation=${c()}></div>
    `}renderLabel(){return o`
      <label
          .floatingLabelFoundation=${d(this.label)}
          @labelchange=${this.onLabelChange}
          id="label">
        ${this.label}
      </label>
    `}renderIcon(e){return o`<mwc-icon class="mdc-select__icon"><div>${e}</div></mwc-icon>`}createAdapter(){return Object.assign(Object.assign({},u(this.mdcRoot)),{activateBottomLine:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateBottomLine:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},getSelectedMenuItem:()=>{const e=this.menuElement;return e?e.selected:null},hasLabel:()=>!!this.label,floatLabel:e=>{e=""!==this.selectedText,this.labelElement&&this.labelElement.floatingLabelFoundation.float(e)},getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,hasOutline:()=>this.outlined,notchOutline:e=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=e,this.outlineOpen=!0)},closeOutline:()=>{this.outlineElement&&(this.outlineOpen=!1)},setRippleCenter:e=>{if(this.lineRippleElement){this.lineRippleElement.lineRippleFoundation.setRippleCenter(e)}},notifyChange:async e=>{this.value=e,await this.updateComplete;const t=new Event("change",{bubbles:!0});this.dispatchEvent(t)},setSelectedText:e=>this.selectedText=e,isSelectedTextFocused:()=>{const e=this.selectedTextElement;return!!e&&e.getRootNode().activeElement===e},getSelectedTextAttr:e=>{const t=this.selectedTextElement;return t?t.getAttribute(e):null},setSelectedTextAttr:(e,t)=>{const i=this.selectedTextElement;if(i)return i.setAttribute(e,t)},openMenu:()=>{this.menuOpen=!0},closeMenu:()=>{this.menuOpen=!1},getAnchorElement:()=>this.anchorElement,setMenuAnchorElement:()=>{},setMenuAnchorCorner:()=>{const e=this.menuElement;e&&(e.corner="BOTTOM_START")},setMenuWrapFocus:e=>{const t=this.menuElement;t&&(t.wrapFocus=e)},setAttributeAtIndex:(e,t,i)=>{const s=this.menuElement;if(!s)return;const r=s.items[e];r&&r.setAttribute(t,i)},removeAttributeAtIndex:(e,t)=>{const i=this.menuElement;if(!i)return;const s=i.items[e];s&&s.removeAttribute(t)},focusMenuItemAtIndex:e=>{const t=this.menuElement;if(!t)return;const i=t.items[e];i&&i.focus()},getMenuItemCount:()=>{const e=this.menuElement;return e?e.items.length:0},getMenuItemValues:()=>{const e=this.menuElement;return e?e.items.map(e=>e.value):[]},getMenuItemTextAtIndex:e=>{const t=this.menuElement;if(!t)return"";const i=t.items[e];return i?i.text:""},getMenuItemAttr:e=>e.value,addClassAtIndex:(e,t)=>{const i=this.menuElement;if(!i)return;const s=i.items[e];s&&s.classList.add(t)},removeClassAtIndex:(e,t)=>{const i=this.menuElement;if(!i)return;const s=i.items[e];s&&s.classList.remove(t)}})}checkValidity(){const e=this._checkValidity(this.value);if(!e){const e=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(e)}return e}reportValidity(){const e=this.checkValidity();return this.isUiValid=e,e}_checkValidity(e){const t=this.formElement.validity;let i=D(t);if(this.validityTransform){const t=this.validityTransform(e,i);i=Object.assign(Object.assign({},i),t)}return this._validity=i,this._validity.valid}setCustomValidity(e){this.validationMessage=e,this.formElement.setCustomValidity(e)}async _getUpdateComplete(){await super._getUpdateComplete(),await Promise.all([this._outlineUpdateComplete,this._menuUpdateComplete])}async firstUpdated(){const e=this.menuElement,t=this.outlineElement;t&&(this._outlineUpdateComplete=t.updateComplete,await this._outlineUpdateComplete),e&&(this._menuUpdateComplete=e.updateComplete,await this._menuUpdateComplete),super.firstUpdated(),this.mdcFoundation.isValid=()=>!0,this.mdcFoundation.setValid=()=>{},this.mdcFoundation.setDisabled(this.disabled),this.validateOnInitialRender&&this.reportValidity(),this.renderReady=!0}select(e){const t=this.menuElement;t&&t.select(e)}disconnectedCallback(){super.disconnectedCallback();for(const e of this.listeners)e.target.removeEventListener(e.name,e.cb)}focus(){const e=new CustomEvent("focus"),t=this.selectedTextElement;t&&(t.dispatchEvent(e),t.focus())}blur(){const e=new CustomEvent("blur"),t=this.selectedTextElement;t&&(t.dispatchEvent(e),t.blur())}onFocus(){this.mdcFoundation&&this.mdcFoundation.handleFocus()}onBlur(){this.mdcFoundation&&this.mdcFoundation.handleBlur();const e=this.menuElement;e&&!e.open&&this.reportValidity()}onClick(e){if(this.mdcFoundation){this.focus();const t=e.target.getBoundingClientRect();let i=0;i="touches"in e?e.touches[0].clientX:e.clientX;const s=i-t.left;this.mdcFoundation.handleClick(s)}}onKeydown(e){this.mdcFoundation&&this.mdcFoundation.handleKeydown(e)}onSelected(e){this.mdcFoundation&&this.mdcFoundation.handleMenuItemAction(e.detail.index),null===this.selected?this.value="":(this.value=this.selected.map(e=>e.value),this.selectedText=this.value.toString())}onOpened(){this.mdcFoundation&&(this.menuOpen=!0,this.mdcFoundation.handleMenuOpened())}onClosed(){this.mdcFoundation&&(this.menuOpen=!1,this.mdcFoundation.handleMenuClosed())}async onLabelChange(){this.label&&await this.layout(!1)}async layout(e=!0){this.mdcFoundation&&this.mdcFoundation.layout(),await this.updateComplete;const t=this.labelElement;if(t&&this.outlineElement&&this.outlineOpen){const e=t.floatingLabelFoundation.getWidth();this.outlineWidth=e}const i=this.menuElement;i&&i.layout(e)}}e([t(".mdc-select")],P.prototype,"mdcRoot",void 0),e([t(".formElement")],P.prototype,"formElement",void 0),e([t("slot")],P.prototype,"slotElement",void 0),e([t("select")],P.prototype,"nativeSelectElement",void 0),e([t("input")],P.prototype,"nativeInputElement",void 0),e([t(".mdc-line-ripple")],P.prototype,"lineRippleElement",void 0),e([t(".mdc-floating-label")],P.prototype,"labelElement",void 0),e([t("mwc-notched-outline")],P.prototype,"outlineElement",void 0),e([t(".mdc-menu")],P.prototype,"menuElement",void 0),e([t(".mdc-select__selected-text")],P.prototype,"selectedTextElement",void 0),e([t(".mdc-select__anchor")],P.prototype,"anchorElement",void 0),e([i({type:Boolean,attribute:"disabled",reflect:!0}),s((function(e){this.renderReady&&this.mdcFoundation.setDisabled(e)}))],P.prototype,"disabled",void 0),e([i({type:Boolean})],P.prototype,"outlined",void 0),e([i({type:String})],P.prototype,"label",void 0),e([i({type:Boolean})],P.prototype,"outlineOpen",void 0),e([i({type:Number})],P.prototype,"outlineWidth",void 0),e([i({type:String}),s((function(){this.mdcFoundation&&this.reportValidity()}))],P.prototype,"value",void 0),e([i({type:String})],P.prototype,"selectedText",void 0),e([i({type:String})],P.prototype,"icon",void 0),e([i({type:Boolean})],P.prototype,"menuOpen",void 0),e([i({type:String})],P.prototype,"helper",void 0),e([i({type:Boolean})],P.prototype,"helperPersistent",void 0),e([i({type:Boolean})],P.prototype,"validateOnInitialRender",void 0),e([i({type:String})],P.prototype,"validationMessage",void 0),e([i({type:Boolean})],P.prototype,"required",void 0),e([i({type:Boolean})],P.prototype,"naturalWidth",void 0),e([i({type:Boolean})],P.prototype,"isUiValid",void 0),e([i({type:Boolean})],P.prototype,"multi",void 0);
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

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
let G=class extends P{};G.styles=h,G=e([p("mwc-multi-select")],G);let B=class extends N{render(){return o` <div id="dot"></div> <wl-ripple id="ripple" .target="${this}" focusable overlay unbounded centered initialDuration="200"></wl-ripple> <slot></slot> ${this.renderFormElement()} `}};B.styles=[...N.styles,m(":host{--_radio-bg:var(--radio-bg,transparent);--_radio-color:var(--radio-color,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))));background:var(--_radio-bg);color:var(--_radio-color);width:var(--radio-size,1.25rem);height:var(--radio-size,1.25rem);border:var(--radio-border-config,.125rem solid) currentColor;border-radius:var(--radio-border-radius,100%);transition:var(--radio-transition,background var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),border-color var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));position:relative;display:inline-flex;align-items:center;justify-content:center;outline:none;-webkit-user-select:none;user-select:none}:host(:not([disabled])){cursor:pointer}:host([checked]){--_radio-bg:var(--radio-bg-checked,transparent);--_radio-color:var(--radio-color-checked,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}:host([checked]) #dot{transform:scale(1)}:host(:focus),:host(:hover){will-change:border,background}:host(:focus) #dot,:host(:hover) #dot{will-change:transform,background}:host([disabled]){--_radio-bg:var(--radio-bg-disabled,transparent);--_radio-color:var(--radio-color-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));pointer-events:none}:host([disabled][checked]){--_radio-bg:var(--radio-bg-disabled-checked,transparent);--_radio-color:var(--radio-color-disabled-checked,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))))}#dot{background:currentColor;width:var(--radio-dot-size,.625rem);height:var(--radio-dot-size,.625rem);border-radius:var(--radio-dot-border-radius,100%);transition:var(--radio-dot-transition,transform var(--transition-duration-medium,.18s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));transform:scale(0)}#ripple{transform:var(--radio-ripple-transform,translate(-50%,-50%) scale(1.8))}")],B=e([p("wl-radio")],B);let V=class extends L{constructor(){super(...arguments),this.role="slider",this.thumbLabel=!1,this.min=0,this.max=100,this.bufferMin=0,this.bufferMax=100}get $interactiveElement(){return this.$slider}get perc(){return(this.$slider.valueAsNumber-this.min)/(this.max-this.min)}get bufferPerc(){return((this.bufferValue||0)-this.bufferMin)/(this.bufferMax-this.bufferMin)}updated(e){super.updated(e),this.updateBackground()}setValue(e){super.setValue(e),null!=this.$slider&&(this.$slider.value=e,this.updateBackground(),this.requestUpdate().then())}updateBackground(){requestAnimationFrame(()=>{this.style.setProperty("--_perc",this.perc.toString()),this.style.setProperty("--_buffer-perc",this.bufferPerc.toString())})}sliderValueChanged(){this.value=this.$slider.value,this.requestUpdate().then()}renderFormElement(e,t,i,s){return o` <input type="range" style="${l(t)}" id="${l(e)}" .value="${this.value}" ?required="${this.required}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" aria-label="${l(this.label)}" name="${l(this.name)}" autocomplete="${l(this.autocomplete)}" min="${l(this.min)}" max="${l(this.max)}" step="${l(this.step)}" @input="${i||(()=>{})}" tabindex="${s||this.disabled?-1:0}"> `}render(){return o` <div id="container"> <slot id="before" name="before"></slot> <div id="wrapper"> <div id="label">${this.label}</div> <div id="slot-wrapper"> ${this.renderFormElement("slider",void 0,this.sliderValueChanged)} ${this.thumbLabel?o` <div id="thumb-container"> <div id="thumb-label"><slot name="thumb-label">${this.value}</slot></div> </div> `:_} <slot id="slot"></slot> </div> ${this.renderFormElement(this.formElementId,"display: none",void 0,"-1")} </div> <slot id="after" name="after"></slot> </div> `}};V.styles=[...L.styles,m(':host{--_buffer-perc:0;--_perc:0;--_slider-track-bg:var(--slider-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.3));--_slider-track-bg-buffer:var(--slider-bg-buffer,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.6));--_slider-track-bg-active:var(--slider-bg-active,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_slider-thumb-bg:var(--slider-thumb-bg,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}:host([disabled]){--_slider-track-bg:var(--slider-bg-disabled,hsla(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%)),0.3));--_slider-track-bg-buffer:var(--slider-bg-buffer-disabled,hsla(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%)),0.6));--_slider-track-bg-active:var(--slider-bg-active-disabled,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))));--_slider-thumb-bg:var(--slider-thumb-bg-disabled,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))))}#container{overflow:visible;border:none}#slider{height:var(--slider-height,.3125rem);background:linear-gradient(90deg,var(--_slider-track-bg-active) 0,var(--_slider-track-bg-active) calc(var(--_perc) * 100%),var(--_slider-track-bg-buffer) calc(var(--_perc) * 100%),var(--_slider-track-bg-buffer) calc(var(--_buffer-perc) * 100%),var(--_slider-track-bg) calc(var(--_buffer-perc) * 100%),var(--_slider-track-bg));cursor:grab;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;outline:none;box-sizing:border-box;margin:0;border-radius:0;top:calc((var(--slider-height, .3125rem) * -1) / 2)}#slider,#thumb-container{width:100%;position:relative}#thumb-label{--_thumb-label-transform-y:0.625rem;left:calc((var(--_perc) * 100%) - (var(--slider-thumb-size, .75rem) * var(--_perc)));transform:translate(calc(-50% + (var(--slider-thumb-size, .75rem) / 2)),var(--_thumb-label-transform-y));width:var(--slider-thumb-label-size,1.875rem);height:var(--slider-thumb-label-size,1.875rem);border-radius:var(--slider-thumb-label-border-radius,100%);color:var(--slider-thumb-label-color,hsl(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));font-size:var(--slider-thumb-label-font-size,.75rem);transition:var(--slider-thumb-label-transition,opacity var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));opacity:0;display:flex;align-items:center;justify-content:center;pointer-events:none;text-overflow:ellipsis;bottom:calc(100% + var(--slider-thumb-size, .75rem) + var(--slider-height, .3125rem) + var(--slider-thumb-space, .75rem))}#thumb-label,#thumb-label:before{background:var(--slider-thumb-label-bg,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));position:absolute}#thumb-label:before{content:"";border-radius:0 50% 50% 50%;transform:rotate(225deg);width:100%;left:0;top:0;height:100%;z-index:-1}#slider:focus+#thumb-container #thumb-label,:host:focus #thumb-label{--_thumb-label-transform-y:0;opacity:1}#slider::-webkit-slider-thumb{background:var(--_slider-thumb-bg);width:var(--slider-thumb-size,.75rem);height:var(--slider-thumb-size,.75rem);border-radius:var(--slider-thumb-border-radius,100%);-webkit-transition:var(--slider-thumb-transition,transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));transition:var(--slider-thumb-transition,transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));box-shadow:0 0 0 0 var(--slider-thumb-focus-ring-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.1));-webkit-appearance:none;appearance:none;border:none;cursor:grab;position:relative}#slider::-moz-range-thumb{background:var(--_slider-thumb-bg);width:var(--slider-thumb-size,.75rem);height:var(--slider-thumb-size,.75rem);border-radius:var(--slider-thumb-border-radius,100%);-moz-transition:var(--slider-thumb-transition,transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));transition:var(--slider-thumb-transition,transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));box-shadow:0 0 0 0 var(--slider-thumb-focus-ring-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.1));-moz-appearance:none;appearance:none;border:none;cursor:grab;position:relative}#slider:focus::-webkit-slider-thumb{transform:var(--slider-thumb-transform-focus,scale(1.2));box-shadow:0 0 0 var(--slider-thumb-focus-ring-size,.75rem) var(--slider-thumb-focus-ring-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.1))}#slider:focus::-moz-range-thumb{transform:var(--slider-thumb-transform-focus,scale(1.2));box-shadow:0 0 0 var(--slider-thumb-focus-ring-size,.75rem) var(--slider-thumb-focus-ring-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.1))}')],e([i({type:String,reflect:!0}),g("design:type",String)],V.prototype,"role",void 0),e([i({type:Boolean}),g("design:type",Boolean)],V.prototype,"thumbLabel",void 0),e([i({type:Number}),g("design:type",Number)],V.prototype,"min",void 0),e([i({type:Number}),g("design:type",Number)],V.prototype,"max",void 0),e([i({type:Number}),g("design:type",Number)],V.prototype,"step",void 0),e([i({type:Number}),g("design:type",Number)],V.prototype,"bufferMin",void 0),e([i({type:Number}),g("design:type",Number)],V.prototype,"bufferMax",void 0),e([i({type:Number}),g("design:type",Number)],V.prototype,"bufferValue",void 0),e([t("#slider"),g("design:type",HTMLInputElement)],V.prototype,"$slider",void 0),V=e([p("wl-slider")],V);
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
var H={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",HAS_TRACK_MARKER:"mdc-slider--display-markers",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete"},K={ARIA_DISABLED:"aria-disabled",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",STEP_DATA_ATTR:"data-step",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",TRACK_SELECTOR:".mdc-slider__track"},W={PAGE_FACTOR:4},X=["mousedown","pointerdown","touchstart"],Q=["mouseup","pointerup","touchend"],J={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"},Y="ArrowDown",Z="ArrowLeft",ee="ArrowRight",te="ArrowUp",ie="End",se="Home",re="PageDown",ae="PageUp",oe=function(e){function t(i){var s=e.call(this,v({},t.defaultAdapter,i))||this;return s.savedTabIndex_=NaN,s.active_=!1,s.inTransit_=!1,s.isDiscrete_=!1,s.hasTrackMarker_=!1,s.handlingThumbTargetEvt_=!1,s.min_=0,s.max_=100,s.step_=0,s.value_=0,s.disabled_=!1,s.preventFocusState_=!1,s.thumbContainerPointerHandler_=function(){return s.handlingThumbTargetEvt_=!0},s.interactionStartHandler_=function(e){return s.handleDown_(e)},s.keydownHandler_=function(e){return s.handleKeydown_(e)},s.focusHandler_=function(){return s.handleFocus_()},s.blurHandler_=function(){return s.handleBlur_()},s.resizeHandler_=function(){return s.layout()},s}return b(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return H},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return K},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return W},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabIndex:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerThumbContainerInteractionHandler:function(){},deregisterThumbContainerInteractionHandler:function(){},registerBodyInteractionHandler:function(){},deregisterBodyInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},notifyInput:function(){},notifyChange:function(){},setThumbContainerStyleProperty:function(){},setTrackStyleProperty:function(){},setMarkerValue:function(){},setTrackMarkers:function(){},isRTL:function(){return!1}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){var e=this;this.isDiscrete_=this.adapter_.hasClass(H.IS_DISCRETE),this.hasTrackMarker_=this.adapter_.hasClass(H.HAS_TRACK_MARKER),X.forEach((function(t){e.adapter_.registerInteractionHandler(t,e.interactionStartHandler_),e.adapter_.registerThumbContainerInteractionHandler(t,e.thumbContainerPointerHandler_)})),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0===this.getStep()&&(this.step_=1)},t.prototype.destroy=function(){var e=this;X.forEach((function(t){e.adapter_.deregisterInteractionHandler(t,e.interactionStartHandler_),e.adapter_.deregisterThumbContainerInteractionHandler(t,e.thumbContainerPointerHandler_)})),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_)},t.prototype.setupTrackMarker=function(){this.isDiscrete_&&this.hasTrackMarker_&&0!==this.getStep()&&this.adapter_.setTrackMarkers(this.getStep(),this.getMax(),this.getMin())},t.prototype.layout=function(){this.rect_=this.adapter_.computeBoundingRect(),this.updateUIForCurrentValue_()},t.prototype.getValue=function(){return this.value_},t.prototype.setValue=function(e){this.setValue_(e,!1)},t.prototype.getMax=function(){return this.max_},t.prototype.setMax=function(e){if(e<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=e,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(K.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()},t.prototype.getMin=function(){return this.min_},t.prototype.setMin=function(e){if(e>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=e,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(K.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()},t.prototype.getStep=function(){return this.step_},t.prototype.setStep=function(e){if(e<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof e||e<1)&&(e=1),this.step_=e,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()},t.prototype.isDisabled=function(){return this.disabled_},t.prototype.setDisabled=function(e){this.disabled_=e,this.toggleClass_(H.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.setAttribute(K.ARIA_DISABLED,"true"),this.adapter_.removeAttribute("tabindex")):(this.adapter_.removeAttribute(K.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter_.setAttribute("tabindex",String(this.savedTabIndex_)))},t.prototype.handleDown_=function(e){var t=this;if(!this.disabled_){this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);var i=function(e){t.handleMove_(e)},s=J[e.type],r=function(){t.handleUp_(),t.adapter_.deregisterBodyInteractionHandler(s,i),Q.forEach((function(e){return t.adapter_.deregisterBodyInteractionHandler(e,r)}))};this.adapter_.registerBodyInteractionHandler(s,i),Q.forEach((function(e){return t.adapter_.registerBodyInteractionHandler(e,r)})),this.setValueFromEvt_(e)}},t.prototype.handleMove_=function(e){e.preventDefault(),this.setValueFromEvt_(e)},t.prototype.handleUp_=function(){this.setActive_(!1),this.adapter_.notifyChange()},t.prototype.getClientX_=function(e){return e.targetTouches&&e.targetTouches.length>0?e.targetTouches[0].clientX:e.clientX},t.prototype.setValueFromEvt_=function(e){var t=this.getClientX_(e),i=this.computeValueFromClientX_(t);this.setValue_(i,!0)},t.prototype.computeValueFromClientX_=function(e){var t=this.max_,i=this.min_,s=(e-this.rect_.left)/this.rect_.width;return this.adapter_.isRTL()&&(s=1-s),i+s*(t-i)},t.prototype.handleKeydown_=function(e){var t=this.getKeyId_(e),i=this.getValueForKeyId_(t);isNaN(i)||(e.preventDefault(),this.adapter_.addClass(H.FOCUS),this.setValue_(i,!0),this.adapter_.notifyChange())},t.prototype.getKeyId_=function(e){return e.key===Z||37===e.keyCode?Z:e.key===ee||39===e.keyCode?ee:e.key===te||38===e.keyCode?te:e.key===Y||40===e.keyCode?Y:e.key===se||36===e.keyCode?se:e.key===ie||35===e.keyCode?ie:e.key===ae||33===e.keyCode?ae:e.key===re||34===e.keyCode?re:""},t.prototype.getValueForKeyId_=function(e){var t=this.max_,i=this.min_,s=this.step_||(t-i)/100;switch(this.adapter_.isRTL()&&(e===Z||e===ee)&&(s=-s),e){case Z:case Y:return this.value_-s;case ee:case te:return this.value_+s;case se:return this.min_;case ie:return this.max_;case ae:return this.value_+s*W.PAGE_FACTOR;case re:return this.value_-s*W.PAGE_FACTOR;default:return NaN}},t.prototype.handleFocus_=function(){this.preventFocusState_||this.adapter_.addClass(H.FOCUS)},t.prototype.handleBlur_=function(){this.preventFocusState_=!1,this.adapter_.removeClass(H.FOCUS)},t.prototype.setValue_=function(e,t,i){if(void 0===i&&(i=!1),e!==this.value_||i){var s=this.min_,r=this.max_,a=e===s||e===r;this.step_&&!a&&(e=this.quantize_(e)),e<s?e=s:e>r&&(e=r),e=e||0,this.value_=e,this.adapter_.setAttribute(K.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),t&&(this.adapter_.notifyInput(),this.isDiscrete_&&this.adapter_.setMarkerValue(e))}},t.prototype.quantize_=function(e){return Math.round(e/this.step_)*this.step_},t.prototype.updateUIForCurrentValue_=function(){var e=this,t=this.max_,i=this.min_,s=(this.value_-i)/(t-i),r=s*this.rect_.width;this.adapter_.isRTL()&&(r=this.rect_.width-r);var a=M(window,"transform"),o=U(window,"transitionend");if(this.inTransit_){var n=function(){e.setInTransit_(!1),e.adapter_.deregisterThumbContainerInteractionHandler(o,n)};this.adapter_.registerThumbContainerInteractionHandler(o,n)}requestAnimationFrame((function(){e.adapter_.setThumbContainerStyleProperty(a,"translateX("+r+"px) translateX(-50%)"),e.adapter_.setTrackStyleProperty(a,"scaleX("+s+")")}))},t.prototype.setActive_=function(e){this.active_=e,this.toggleClass_(H.ACTIVE,this.active_)},t.prototype.setInTransit_=function(e){this.inTransit_=e,this.toggleClass_(H.IN_TRANSIT,this.inTransit_)},t.prototype.toggleClass_=function(e,t){t?this.adapter_.addClass(e):this.adapter_.removeClass(e)},t}(y);
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
const ne=new WeakMap,le=f(e=>t=>{if(!(t instanceof w)||t instanceof x||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=t,{style:s}=i.element;let r=ne.get(t);void 0===r&&(s.cssText=i.strings.join(" "),ne.set(t,r=new Set)),r.forEach(t=>{t in e||(r.delete(t),-1===t.indexOf("-")?s[t]=null:s.removeProperty(t))});for(const t in e)r.add(t),-1===t.indexOf("-")?s[t]=e[t]:s.setProperty(t,e[t])});class ce extends r{constructor(){super(...arguments),this.mdcFoundationClass=oe,this.value=0,this.min=0,this.max=100,this.step=0,this.disabled=!1,this.pin=!1,this.markers=!1,this.pinMarkerText="",this.trackMarkerContainerStyles={},this.thumbContainerStyles={},this.trackStyles={},this.isFoundationDestroyed=!1}render(){const e=0!==this.step,t={"mdc-slider--discrete":e,"mdc-slider--display-markers":this.markers&&e};let i="";e&&this.markers&&(i=o`
        <div
            class="mdc-slider__track-marker-container"
            style="${le(this.trackMarkerContainerStyles)}">
        </div>`);let s="";return this.pin&&(s=o`
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker">${this.pinMarkerText}</span>
      </div>`),o`
      <div class="mdc-slider ${n(t)}"
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
              style="${le(this.trackStyles)}">
          </div>
          ${i}
        </div>
        <div
            class="mdc-slider__thumb-container"
            style="${le(this.thumbContainerStyles)}">
          <!-- TODO: use cache() directive -->
          ${s}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`}connectedCallback(){super.connectedCallback(),this.mdcRoot&&this.isFoundationDestroyed&&(this.isFoundationDestroyed=!1,this.mdcFoundation.init())}disconnectedCallback(){super.disconnectedCallback(),this.isFoundationDestroyed=!0,this.mdcFoundation.destroy()}createAdapter(){return Object.assign(Object.assign({},u(this.mdcRoot)),{getAttribute:e=>this.mdcRoot.getAttribute(e),setAttribute:(e,t)=>this.mdcRoot.setAttribute(e,t),removeAttribute:e=>this.mdcRoot.removeAttribute(e),computeBoundingRect:()=>{const e=this.mdcRoot.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left+window.pageXOffset,right:e.right,top:e.top,width:e.width}},getTabIndex:()=>this.mdcRoot.tabIndex,registerInteractionHandler:(e,t)=>{const i="touchstart"===e?$():void 0;this.mdcRoot.addEventListener(e,t,i)},deregisterInteractionHandler:(e,t)=>this.mdcRoot.removeEventListener(e,t),registerThumbContainerInteractionHandler:(e,t)=>{const i="touchstart"===e?$():void 0;this.thumbContainer.addEventListener(e,t,i)},deregisterThumbContainerInteractionHandler:(e,t)=>this.thumbContainer.removeEventListener(e,t),registerBodyInteractionHandler:(e,t)=>document.body.addEventListener(e,t),deregisterBodyInteractionHandler:(e,t)=>document.body.removeEventListener(e,t),registerResizeHandler:e=>window.addEventListener("resize",e,$()),deregisterResizeHandler:e=>window.removeEventListener("resize",e),notifyInput:()=>{const e=this.mdcFoundation.getValue();e!==this.value&&(this.value=e,this.dispatchEvent(new CustomEvent("input",{detail:this,composed:!0,bubbles:!0,cancelable:!0})))},notifyChange:()=>{this.dispatchEvent(new CustomEvent("change",{detail:this,composed:!0,bubbles:!0,cancelable:!0}))},setThumbContainerStyleProperty:(e,t)=>{this.thumbContainerStyles[e]=t,this.requestUpdate()},setTrackStyleProperty:(e,t)=>{this.trackStyles[e]=t,this.requestUpdate()},setMarkerValue:e=>this.pinMarkerText=e.toLocaleString(),setTrackMarkers:(e,t,i)=>{const s=e.toLocaleString(),r=`linear-gradient(to right, currentColor 2px, transparent 0) ${`0 center / calc((100% - 2px) / ${`((${t.toLocaleString()} - ${i.toLocaleString()}) / ${s})`}) 100% repeat-x`}`;this.trackMarkerContainerStyles.background=r,this.requestUpdate()},isRTL:()=>"rtl"===getComputedStyle(this.mdcRoot).direction})}resetFoundation(){this.mdcFoundation&&(this.mdcFoundation.destroy(),this.mdcFoundation.init())}layout(){this.mdcFoundation.layout()}}e([t(".mdc-slider")],ce.prototype,"mdcRoot",void 0),e([t(".mdc-slider")],ce.prototype,"formElement",void 0),e([t(".mdc-slider__thumb-container")],ce.prototype,"thumbContainer",void 0),e([t(".mdc-slider__pin-value-marker")],ce.prototype,"pinMarker",void 0),e([i({type:Number}),s((function(e){this.mdcFoundation.setValue(e)}))],ce.prototype,"value",void 0),e([i({type:Number}),s((function(e){this.mdcFoundation.setMin(e)}))],ce.prototype,"min",void 0),e([i({type:Number}),s((function(e){this.mdcFoundation.setMax(e)}))],ce.prototype,"max",void 0),e([i({type:Number}),s((function(e,t){0!==t!==(0!==e)&&this.resetFoundation(),this.mdcFoundation.setStep(e)}))],ce.prototype,"step",void 0),e([i({type:Boolean,reflect:!0}),s((function(e){this.mdcFoundation.setDisabled(e)}))],ce.prototype,"disabled",void 0),e([i({type:Boolean,reflect:!0})],ce.prototype,"pin",void 0),e([i({type:Boolean,reflect:!0}),s((function(){this.mdcFoundation.setupTrackMarker()}))],ce.prototype,"markers",void 0),e([i({type:String})],ce.prototype,"pinMarkerText",void 0),e([i({type:Object})],ce.prototype,"trackMarkerContainerStyles",void 0),e([i({type:Object})],ce.prototype,"thumbContainerStyles",void 0),e([i({type:Object})],ce.prototype,"trackStyles",void 0),e([k({capture:!0,passive:!0})],ce.prototype,"layout",null);
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
const de=S`@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);opacity:.26}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary, #018786);stroke:#018786;stroke:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container::after{background-color:#9a9a9a;opacity:.26}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track-container::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;content:""}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:none}`;let ue=class extends ce{};ue.styles=de,ue=e([p("mwc-slider")],ue);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let he=class extends R{constructor(){super(...arguments),this.step=1,this.value=0,this.max=0,this.min=0,this.editable=null,this.pin=null,this.markers=null,this.marker_limit=30,this.disabled=null}static get styles(){return[T,I,E,C,j,S`
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
      `]}render(){return o`
      <div class="horizontal center layout">
      <mwc-slider id="slider" class="${this.id}" value="${this.value}"
          min="${this.min}" max="${this.max}" step="${this.step}"
          ?pin="${this.pin}"
          ?disabled="${this.disabled}"
          ?markers="${this.markers}"
          @change="${this.syncToText}">
      </mwc-slider>
      ${this.editable?o`
        <wl-textfield id="textfield" class="${this.id}" type="number"
          value="${this.value}" min="${this.min}" max="${this.max}" step="${this.step}"
          @change="${this.syncToSlider}">
        </wl-textfield>
      `:o``}
      </div>
    `}firstUpdated(){this.slider=this.shadowRoot.querySelector("#slider"),this.editable&&(this.textfield=this.shadowRoot.querySelector("#textfield"));const e=this.shadowRoot.querySelectorAll("wl-textfield");setTimeout(()=>{e.forEach(e=>{const t=e.getAttribute("step");e.$formElement.step=t})},100),this.checkMarkerDisplay()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(e){e.forEach((e,t)=>{if("value"===t){this.slider.layout();const e=new CustomEvent("value-changed",{detail:{}});this.dispatchEvent(e)}["min","max"].includes(t)&&this.checkMarkerDisplay()})}syncToText(){this.value=this.slider.value}syncToSlider(){let e=Math.round(this.textfield.value/this.step)*this.step;var t;this.textfield.value=e.toFixed((t=this.step,Math.floor(t)===t?0:t.toString().split(".")[1].length||0)),this.textfield.value>this.max&&(this.textfield.value=this.max),this.textfield.value<this.min&&(this.textfield.value=this.min),this.value=this.textfield.value}checkMarkerDisplay(){this.markers&&(this.max-this.min)/this.step>this.marker_limit&&this.slider.removeAttribute("markers")}};e([i({type:Number})],he.prototype,"step",void 0),e([i({type:Number})],he.prototype,"value",void 0),e([i({type:Number})],he.prototype,"max",void 0),e([i({type:Number})],he.prototype,"min",void 0),e([i({type:Boolean})],he.prototype,"editable",void 0),e([i({type:Boolean})],he.prototype,"pin",void 0),e([i({type:Boolean})],he.prototype,"markers",void 0),e([i({type:Number})],he.prototype,"marker_limit",void 0),e([i({type:Boolean})],he.prototype,"disabled",void 0),e([i({type:Object})],he.prototype,"slider",void 0),e([i({type:Object})],he.prototype,"textfield",void 0),he=e([p("lablup-slider")],he);let pe=class extends A{constructor(){super(),this.direction="horizontal",this.location="",this.supports=Object(),this.supportImages=Object(),this.resourceLimits=Object(),this.userResourceLimit=Object(),this.aliases=Object(),this.tags=Object(),this.icons=Object(),this.imageInfo=Object(),this.imageNames=Object(),this.marker_limit=25,this.gpu_modes=[],this.gpu_step=.05,this.cpu_metric={min:"1",max:"1"},this.mem_metric={min:"1",max:"1"},this.shmem_metric={min:.0625,max:1,preferred:.0625},this.cuda_gpu_metric={min:0,max:0},this.rocm_gpu_metric={min:"0",max:"0"},this.tpu_metric={min:"1",max:"1"},this.lastQueryTime=0,this.aggregate_updating=!1,this.resourceGauge=Object(),this.ownerFeatureInitialized=!1,this.ownerDomain="",this.project_resource_monitor=!1,this.version_selector=Object(),this._default_language_updated=!1,this._helpDescription="",this._helpDescriptionTitle="",this._helpDescriptionIcon="",this.active=!1,this.ownerKeypairs=[],this.ownerGroups=[],this.ownerScalingGroups=[],this.init_resource()}static get is(){return"backend-ai-resource-monitor"}static get styles(){return[T,I,E,C,j,S`
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

        mwc-select,
        mwc-multi-select {
          width: 100%;
          --mdc-theme-primary: var(--paper-red-600);
          --mdc-select-fill-color: transparent;
          --mdc-select-label-ink-color: rgba(0, 0, 0, 0.75);
          --mdc-select-dropdown-icon-color: blue;
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

        mwc-select#scaling-groups {
          margin-right: 5px;
          width: 170px;
        }

        mwc-textfield {
          width: 100%;
          --mdc-text-field-idle-line-color: rgba(0, 0, 0, 0.42);
          --mdc-text-field-hover-line-color: rgba(255, 0, 0, 0.87);
          --mdc-text-field-fill-color: transparent;
          --mdc-theme-primary: var(--paper-red-600);
        }

        mwc-textfield#session-name {
          padding-top: 20px;
          margin-left: 5px;
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
          --dialog-width: 350px;
        }

        #help-description p {
          padding: 5px !important;
        }

        mwc-icon-button.info {
          --mdc-icon-button-size: 30px;
        }
      `]}init_resource(){this.versions=["Not Selected"],this.languages=[],this.gpu_mode="no",this.defaultResourcePolicy="UNLIMITED",this.total_slot={},this.total_sg_slot={},this.total_pj_slot={},this.used_slot={},this.used_sg_slot={},this.used_pj_slot={},this.available_slot={},this.used_slot_percent={},this.used_sg_slot_percent={},this.used_pj_slot_percent={},this.resource_templates=[],this.resource_templates_filtered=[],this.vfolders=[],this.default_language="",this.concurrency_used=0,this.concurrency_max=0,this.concurrency_limit=0,this._status="inactive",this.cpu_request=1,this.mem_request=1,this.shmem_request=.0625,this.gpu_request=0,this.session_request=1,this.scaling_groups=[{name:""}],this.scaling_group="",this.enable_scaling_group=!1,this.sessions_list=[],this.metric_updating=!1,this.metadata_updating=!1,this.ownerFeatureInitialized=!1,this.ownerDomain="",this.ownerKeypairs=[],this.ownerGroups=[],this.ownerScalingGroups=[]}firstUpdated(){fetch("resources/image_metadata.json").then(e=>e.json()).then(e=>{this.imageInfo=e.imageInfo;for(let e in this.imageInfo)this.tags[e]=[],"name"in this.imageInfo[e]&&(this.aliases[e]=this.imageInfo[e].name,this.imageNames[e]=this.imageInfo[e].name),"icon"in this.imageInfo[e]?this.icons[e]=this.imageInfo[e].icon:this.icons[e]="default.png","label"in this.imageInfo[e]&&this.imageInfo[e].label.forEach(t=>{"category"in t||this.tags[e].push(t)})}),this.shadowRoot.querySelector("#environment").addEventListener("selected",this.updateLanguage.bind(this)),this.version_selector=this.shadowRoot.querySelector("#version"),this.version_selector.addEventListener("selected",this.updateResourceAllocationPane.bind(this)),this.resourceGauge=this.shadowRoot.querySelector("#resource-gauges"),document.body.clientWidth<750&&"horizontal"==this.direction&&(this.resourceGauge.style.display="none"),this.notification=globalThis.lablupNotification;const e=this.shadowRoot.querySelector("#gpu-resource");document.addEventListener("backend-ai-resource-refreshed",()=>{this.active&&!1===this.metadata_updating&&(this.metadata_updating=!0,this.aggregateResource("resource-refreshed"),this.metadata_updating=!1)}),e.addEventListener("value-changed",()=>{e.value>0?this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!0:this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!1}),this.shadowRoot.querySelector("#use-gpu-checkbox").addEventListener("change",()=>{!0===this.shadowRoot.querySelector("#use-gpu-checkbox").checked?this.shadowRoot.querySelector("#gpu-resource").disabled=this.cuda_gpu_metric.min===this.cuda_gpu_metric.max:this.shadowRoot.querySelector("#gpu-resource").disabled=!0}),document.addEventListener("backend-ai-group-changed",e=>{this._updatePageVariables(!0)})}_initAliases(){for(let e in this.aliases)this.aliases[this.aliases[e]]=e}_updateSelectedScalingGroup(){let e=this.shadowRoot.querySelector("#scaling-groups"),t=e.items.find(e=>e.value===this.scaling_group),i=e.items.indexOf(t);e.select(i)}async updateScalingGroup(e=!1,t){if(""!=this.scaling_group&&""!==t.target.value&&t.target.value!==this.scaling_group&&(this.scaling_group=t.target.value,this.active)){if("vertical"===this.direction){this.shadowRoot.querySelector("#scaling-group-select-box").firstChild.value=this.scaling_group}!0===e?await this._refreshResourcePolicy():this.updateResourceAllocationPane("session dialog")}}_updateSelectedFolder(){let e=this.shadowRoot.querySelector("#vfolder"),t=e.value,i=Array();e.items.map((e,s)=>{t.indexOf(e.value)>-1&&i.push(s)}),e.select(i)}async _viewStateChanged(e){await this.updateComplete,this.active&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.project_resource_monitor=globalThis.backendaiclient._config.allow_project_resource_monitor,this._updatePageVariables(!0),this._disableEnterKey()},!0):(this.project_resource_monitor=globalThis.backendaiclient._config.allow_project_resource_monitor,await this._updatePageVariables(!0),this._disableEnterKey()))}async _updatePageVariables(e){if(this.active&&!1===this.metadata_updating){if(this.metadata_updating=!0,this.enable_scaling_group=globalThis.backendaiclient.supports("scaling-group"),!0===this.enable_scaling_group&&(""===this.scaling_group||e)){const e=globalThis.backendaiclient.current_group||null;let t=await globalThis.backendaiclient.scalingGroup.list(e);if(this.scaling_groups=t.scaling_groups.length>0?t.scaling_groups:[{name:""}],this.scaling_group=this.scaling_groups[0].name,"vertical"===this.direction){const e=this.shadowRoot.querySelector("#scaling-group-select-box");e.hasChildNodes()&&e.removeChild(e.firstChild);const t=document.createElement("wl-select");t.label=q("session.launcher.ResourceGroup"),t.name="scaling-group-select",t.id="scaling-group-select",t.value=this.scaling_group,t.addEventListener("input",this.updateScalingGroup.bind(this,!0));let i=document.createElement("option");i.setAttribute("disabled","true"),i.innerHTML=q("session.launcher.SelectResourceGroup"),t.appendChild(i),this.scaling_groups.map(e=>{i=document.createElement("option"),i.value=e.name,this.scaling_group===e.name?i.selected=!0:i.selected=!1,i.innerHTML=e.name,t.appendChild(i)}),e.appendChild(t)}const i=this.shadowRoot.querySelector("#scaling-groups");i.selectedText=this.scaling_group,i.value=this.scaling_group,i.addEventListener("selected-item-label-changed",()=>{this.updateScalingGroup.bind(this,!1)})}this._updateSelectedScalingGroup();let t=["created_at"];globalThis.backendaiclient.computeSession.list(t=t,status="RUNNING",null,1e3).then(e=>{this.sessions_list=e.compute_session_list.items.map(e=>e.created_at)}),this._initAliases(),await this._refreshResourcePolicy(),this.aggregateResource("update-page-variable"),this.metadata_updating=!1}}_refreshConcurrency(){return globalThis.backendaiclient.keypair.info(globalThis.backendaiclient._config.accessKey,["concurrency_used"]).then(e=>{this.concurrency_used=e.keypair.concurrency_used})}async _refreshResourcePolicy(){return globalThis.backendaiclient.keypair.info(globalThis.backendaiclient._config.accessKey,["resource_policy","concurrency_used"]).then(e=>{let t=e.keypair.resource_policy;return this.concurrency_used=e.keypair.concurrency_used,globalThis.backendaiclient.resourcePolicy.get(t,["default_for_unspecified","total_resource_slots","max_concurrent_sessions","max_containers_per_session"])}).then(e=>{let t=e.keypair_resource_policy;return"UNLIMITED"===t.default_for_unspecified||"DefaultForUnspecified.UNLIMITED"===t.default_for_unspecified?this.defaultResourcePolicy="UNLIMITED":this.defaultResourcePolicy="LIMITED",this.userResourceLimit=JSON.parse(e.keypair_resource_policy.total_resource_slots),this.concurrency_max=t.max_concurrent_sessions,this._refreshImageList()}).then(()=>{this._updateGPUMode(),this.updateResourceAllocationPane("refresh resource policy")}).catch(e=>{console.log(e),this.metadata_updating=!1,e&&e.message?(this.notification.text=O.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=O.relieve(e.title),this.notification.show(!0,e))})}async _launchSessionDialog(){if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)this.notification.text="Please wait while initializing...",this.notification.show();else{this.selectDefaultLanguage(),await this.updateResourceAllocationPane("launch session dialog"),this.shadowRoot.querySelector("#gpu-resource").value>0?this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!0:this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!1;const e=this.shadowRoot.querySelector('wl-expansion[name="ownership"]');globalThis.backendaiclient.is_admin?e.style.display="block":e.style.display="none",this._updateSelectedScalingGroup(),this.requestUpdate(),this.shadowRoot.querySelector("#new-session-dialog").show()}}_updateGPUMode(){globalThis.backendaiclient.getResourceSlots().then(e=>{let t=e;["cuda.device","cuda.shares","rocm.device","tpu.device"].forEach(e=>{e in t&&!this.gpu_modes.includes(e)&&(this.gpu_mode=e,this.gpu_modes.push(e),this.gpu_step="cuda.shares"===e?.05:1)})})}_generateKernelIndex(e,t){return e+":"+t}_newSession(){let e=this.shadowRoot.querySelector("#environment").selected.id,t=this.shadowRoot.querySelector("#version").value,i=this.shadowRoot.querySelector("#session-name").value,s=this.shadowRoot.querySelector("#vfolder").value;if(this.cpu_request=this.shadowRoot.querySelector("#cpu-resource").value,this.mem_request=this.shadowRoot.querySelector("#mem-resource").value,this.shmem_request=this.shadowRoot.querySelector("#shmem-resource").value,this.gpu_request=this.shadowRoot.querySelector("#gpu-resource").value,this.session_request=this.shadowRoot.querySelector("#session-resource").value,this.num_sessions=this.session_request,this.sessions_list.includes(i))return this.notification.text="Duplicate session name not allowed.",void this.notification.show();if(""===e||""===t||"Not Selected"===t)return this.notification.text="You must specify Environment and Version.",void this.notification.show();this.enable_scaling_group&&(this.scaling_group=this.shadowRoot.querySelector("#scaling-groups").value);let r={};r.group_name=globalThis.backendaiclient.current_group,r.domain=globalThis.backendaiclient._config.domainName,r.scaling_group=this.scaling_group,r.maxWaitSeconds=5;const a=this.shadowRoot.querySelector("#owner-enabled");if(a&&a.checked&&(r.group_name=this.shadowRoot.querySelector("#owner-group").selectedItemLabel,r.domain=this.ownerDomain,r.scaling_group=this.shadowRoot.querySelector("#owner-scaling-group").selectedItemLabel,r.owner_access_key=this.shadowRoot.querySelector("#owner-accesskey").selectedItemLabel,!(r.group_name&&r.domain&&r.scaling_group&&r.owner_access_key)))return this.notification.text="Not enough ownership information",void this.notification.show();r.cpu=this.cpu_request,"cuda.shares"==this.gpu_mode?r["cuda.shares"]=this.gpu_request:r["cuda.device"]=this.gpu_request,"Infinity"===String(this.shadowRoot.querySelector("#mem-resource").value)?r.mem=String(this.shadowRoot.querySelector("#mem-resource").value):r.mem=String(this.mem_request)+"g",this.shmem_request>this.mem_request&&(this.shmem_request=this.mem_request,this.notification.text="Shared memory setting is reduced to below the allocated memory.",this.notification.show()),this.mem_request>4&&this.shmem_request<1&&(this.shmem_request=1),r.shmem=String(this.shmem_request)+"g",!0!==this.shadowRoot.querySelector("#use-gpu-checkbox").checked&&("cuda.shares"==this.gpu_mode?r.fgpu=0:r.gpu=0),0==i.length&&(i=this.generateSessionId()),0!==s.length&&(r.mounts=s);const o=this._generateKernelIndex(e,t);this.shadowRoot.querySelector("#launch-button").disabled=!0,this.shadowRoot.querySelector("#launch-button-msg").textContent="Preparing...",this.notification.text="Preparing session...",this.notification.show();let n=[];const l=this._getRandomString();if(this.num_sessions>1)for(let e=1;e<=this.num_sessions;e++){let t={kernelName:o,sessionName:`${i}-${l}-${e}`,config:r};n.push(t)}else n.push({kernelName:o,sessionName:i,config:r});const c=n.map(e=>this._createKernel(e.kernelName,e.sessionName,e.config));Promise.all(c).then(e=>{this.shadowRoot.querySelector("#new-session-dialog").hide(),this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent="Launch",this.aggregateResource("session-creation");let t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t)}).catch(e=>{this.metadata_updating=!1,e&&e.message?(this.notification.text=O.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=O.relieve(e.title),this.notification.show(!0,e));let t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t),this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent="Launch"})}_getRandomString(){let e=Math.floor(52*Math.random()*52*52);let t="";for(let s=0;s<3;s++)t+=(i=e%52)<26?String.fromCharCode(65+i):String.fromCharCode(97+i-26),e=Math.floor(e/52);var i;return t}_createKernel(e,t,i){return globalThis.backendaiclient.createKernel(e,t,i)}_hideSessionDialog(){this.shadowRoot.querySelector("#new-session-dialog").hide()}_hideDialog(e){e.target.closest("wl-dialog").hide(),e.stopPropagation()}_guessHumanizedNames(e){const t=this.imageNames;let i="",s=null,r="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";return Object.keys(t).forEach((a,o)=>{let n=e.split("/");i=2==n.length?n[1]:n[2],(i===a||""===i&&e.endsWith(a)&&a.length<r.length)&&(s=t[a],r=a)}),s}_aliasName(e){let t={python:"Python",tensorflow:"TensorFlow",pytorch:"PyTorch",lua:"Lua",r:"R","r-base":"R",julia:"Julia",rust:"Rust",cpp:"C++",gcc:"GCC",go:"Go",tester:"Tester",haskell:"Haskell",matlab:"MATLAB",sagemath:"Sage",texlive:"TeXLive",java:"Java",php:"PHP",octave:"Octave",nodejs:"Node",caffe:"Caffe",scheme:"Scheme",scala:"Scala",base:"Base",cntk:"CNTK",h2o:"H2O.AI",digits:"DIGITS","ubuntu-linux":"Ubuntu Linux",tf1:"TensorFlow 1",tf2:"TensorFlow 2",py3:"Python 3",py2:"Python 2",py27:"Python 2.7",py35:"Python 3.5",py36:"Python 3.6",py37:"Python 3.7",py38:"Python 3.8",py39:"Python 3.9",lxde:"LXDE",lxqt:"LXQt",xfce:"XFCE",gnome:"GNOME",kde:"KDE","ubuntu16.04":"Ubuntu 16.04","ubuntu18.04":"Ubuntu 18.04","ubuntu20.04":"Ubuntu 20.04",intel:"Intel MKL",2018:"2018",2019:"2019",2020:"2020",2021:"2021",2022:"2022",rocm:"GPU:ROCm",cuda9:"GPU:CUDA9",cuda10:"GPU:CUDA10","cuda10.0":"GPU:CUDA10","cuda10.1":"GPU:CUDA10.1","cuda10.2":"GPU:CUDA10.2","cuda10.3":"GPU:CUDA10.3",cuda11:"GPU:CUDA11","cuda11.0":"GPU:CUDA11",miniconda:"Miniconda","anaconda2018.12":"Anaconda 2018.12","anaconda2019.12":"Anaconda 2019.12","alpine3.8":"Alpine Linux 3.8",ngc:"NVidia GPU Cloud",ff:"Research Env."};return e in t?t[e]:e}_updateEnvironment(){const e=Object.keys(this.supports);if(void 0===e)return;e.sort((e,t)=>this.supportImages[e].group>this.supportImages[t].group?1:-1);let t="";this.languages=[],e.forEach((e,i)=>{if(!Object.keys(this.aliases).includes(e)){const t=this._guessHumanizedNames(e);this.aliases[e]=null!==t?t:e}let s,r,a=e.split("/"),o=a[0];2==a.length?(s="",r=a[1]):(s=a[1],r=a[2]);let n,l=this.aliases[e];n=void 0!==l?l.split(" (")[0]:r,l=l.split("/").slice(-1)[0],n=n.split("/").slice(-1)[0];let c=[];r in this.tags&&(c=c.concat(this.tags[r])),""!=s&&"lablup"!=s&&c.push({tag:s,color:"purple"});let d="default.png";r in this.icons&&(d=this.icons[r]),t!==this.supportImages[e].group&&(this.languages.push({name:"",registry:"",prefix:"",kernelname:"",alias:"",icon:"",basename:this.supportImages[e].group,tags:[],clickable:!1}),t=this.supportImages[e].group),this.languages.push({name:e,registry:o,prefix:s,kernelname:r,alias:l,basename:n,tags:c,icon:d})}),this._initAliases()}_updateVersions(e){if(e in this.supports){{this.version_selector.disabled=!0;let t=this.supports[e];t.sort(),t.reverse(),this.versions=t}return void 0!==this.versions?this.version_selector.layout(!0).then(()=>{this.version_selector.value=this.versions[0],setTimeout(()=>{this.version_selector.select(1),this.version_selector.disabled=!1,this.updateResourceAllocationPane("update versions")},500)}):void 0}}generateSessionId(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=0;i<8;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e+"-console"}async _updateVirtualFolderList(){globalThis.backendaiclient.vfolder.list(globalThis.backendaiclient.current_group_id()).then(e=>{let t=[],i=[];e.forEach(e=>{e.name.startsWith(".")?(e.disabled=!0,e.name=e.name+" (Automount folder)",i.push(e)):t.push(e)}),this.vfolders=t.concat(i)})}async _aggregateResourceUse(e=""){if(!0===this.aggregate_updating)return;if(Date.now()-this.lastQueryTime<2e3)return;this.aggregate_updating=!0;let t={},i={},s={};return globalThis.backendaiclient.keypair.info(globalThis.backendaiclient._config.accessKey,["concurrency_used"]).then(e=>{this.concurrency_used=e.keypair.concurrency_used;const t={group:globalThis.backendaiclient.current_group};if(1==this.enable_scaling_group&&this.scaling_groups.length>0){let e="";""!==this.scaling_group?e=this.scaling_group:(e=this.scaling_groups[0].name,this.scaling_group=e),e&&(t.scaling_group=e)}return globalThis.backendaiclient.resourcePreset.check(t)}).then(e=>{if(e.presets){let t=e.presets,i=[];t.forEach(e=>{!0===e.allocatable&&("cuda.shares"in e.resource_slots?e.cuda_fgpu=e.resource_slots["cuda.shares"]:"cuda.device"in e.resource_slots&&(e.cuda_gpu=e.resource_slots["cuda.device"]),"rocm.device"in e.resource_slots&&(e.rocm_gpu=e.resource_slots["rocm.device"]),"tpu.device"in e.resource_slots&&(e.tpu=e.resource_slots["tpu.device"]),e.cpu=e.resource_slots.cpu,e.mem=globalThis.backendaiclient.utils.changeBinaryUnit(e.resource_slots.mem,"g"),e.shared_memory?e.shmem=globalThis.backendaiclient.utils.changeBinaryUnit(e.shared_memory,"g"):e.shmem=null,i.push(e))}),this.resource_templates=i,0===this.resource_templates_filtered.length&&(this.resource_templates_filtered=this.resource_templates)}let r=e.keypair_remaining,a=e.keypair_using,o=e.group_limits,n=e.group_using,l={"cuda.device":"cuda_device_slot","cuda.shares":"cuda_shares_slot","rocm.device":"tpu_device_slot","tpu.device":"tpu_device_slot"};""===this.scaling_group&&(e.scaling_groups[""]={using:{cpu:0,mem:0},remaining:{cpu:0,mem:0}});let c=e.scaling_groups[this.scaling_group].using,d=e.scaling_groups[this.scaling_group].remaining,u=e.keypair_limits;"cpu"in u&&(i.cpu_slot=Number(d.cpu)+Number(c.cpu),s.cpu_slot=Number(o.cpu),"Infinity"===u.cpu?t.cpu_slot=i.cpu_slot:t.cpu_slot=u.cpu),"mem"in u&&(i.mem_slot=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(d.mem,"g"))+parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(c.mem,"g")),s.mem_slot=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(o.mem,"g")),"Infinity"===u.mem?t.mem_slot=i.mem_slot:t.mem_slot=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(u.mem,"g"))),t.mem_slot=t.mem_slot.toFixed(2),i.mem_slot=i.mem_slot.toFixed(2);for(let[e,r]of Object.entries(l))e in u&&(i[r]=Number(d[e])+Number(c[e]),s[r]=Number(o[e]),"Infinity"===u[e]?t[r]=i[r]:t[r]=u[e]);let h=Object(),p=Object(),m=Object(),g=Object(),_=Object();"cpu"in r&&(p.cpu_slot="cpu"in a?a.cpu:0,"Infinity"===r.cpu?h.cpu_slot=t.cpu_slot-p.cpu_slot:h.cpu_slot=r.cpu),"cpu"in d&&(g.cpu_slot="cpu"in c?c.cpu:0,m.cpu_slot=d.cpu),_.cpu_slot="cpu"in n?n.cpu:0,"mem"in r&&(p.mem_slot="mem"in a?parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(a.mem,"g")):0,"Infinity"===r.mem?h.mem_slot=t.mem_slot-p.mem_slot:h.mem_slot=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(r.mem,"g"))),p.mem_slot=p.mem_slot.toFixed(2),"mem"in d&&(g.mem_slot="mem"in c?parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(c.mem,"g")):0,m.mem_slot=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(d.mem,"g"))),g.mem_slot=g.mem_slot.toFixed(2),_.mem_slot="mem"in n?parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(n.mem,"g")):0,_.mem_slot=_.mem_slot.toFixed(2);for(let[e,t]of Object.entries(l))e in r&&(h[t]=r[e],p[t]=e in a?a[e]:0),e in d&&(m[t]=d[e],g[t]=e in c?c[e]:0),_[t]=e in n?n[e]:0;"cuda_shares_slot"in p&&(t.cuda_shares_slot=parseFloat(t.cuda_shares_slot).toFixed(2)),"cuda_shares_slot"in g&&(i.cuda_shares_slot=parseFloat(i.cuda_shares_slot).toFixed(2)),"cuda_shares_slot"in _&&(s.cuda_shares_slot=parseFloat(s.cuda_shares_slot).toFixed(2)),this.total_slot=t,this.total_sg_slot=i,this.total_pj_slot=s,this.used_slot=p,this.used_sg_slot=g,this.used_pj_slot=_;let b={},v={},y={};return["cpu_slot","mem_slot","cuda_device_slot","cuda_shares_slot","rocm_device_slot","tpu_device_slot"].forEach(e=>{e in p&&(Number(t[e])<Number(p[e])&&(t[e]=p[e]),0!=t[e]?b[e]=p[e]/t[e]*100:b[e]=0,0!=i[e]?v[e]=g[e]/i[e]*100:v[e]=0,0!=s[e]?y[e]=_[e]/s[e]*100:y[e]=0),e in h&&"Infinity"===h[e]&&(h[e]=m[e])}),this.used_pj_slot_percent=y,0===this.concurrency_max?(b.concurrency=0,h.concurrency=this.concurrency_max):(b.concurrency=this.concurrency_used/this.concurrency_max*100,h.concurrency=this.concurrency_max-this.concurrency_used),this.concurrency_limit=Math.min(h.concurrency,5),this.available_slot=m,this.used_slot_percent=b,this.used_sg_slot_percent=v,this.lastQueryTime=Date.now(),this.aggregate_updating=!1,this.available_slot}).catch(e=>{this.lastQueryTime=Date.now(),this.aggregate_updating=!1,e&&e.message&&(console.log(e),this.notification.text=O.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}aggregateResource(e=""){void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._aggregateResourceUse(e)},!0):this._aggregateResourceUse(e)}async updateResourceAllocationPane(e=""){if(1==this.metric_updating)return;if("refresh resource policy"===e)return this.metric_updating=!1,this._aggregateResourceUse("update-metric").then(()=>this.updateResourceAllocationPane("after refresh resource policy"));let t=this.shadowRoot.querySelector("#environment").selected,i=this.shadowRoot.querySelector("#version").selected;if(null===i)return void(this.metric_updating=!1);let s=i.value;if(null==t||t.getAttribute("disabled"))this.metric_updating=!1;else if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)document.addEventListener("backend-ai-connected",()=>{this.updateResourceAllocationPane(e)},!0);else{if(this.metric_updating=!0,await this._aggregateResourceUse("update-metric"),0===Object.keys(this.resourceLimits).length)return void(this.metric_updating=!1);let e=t.id,i=s;if(""===e||""===i)return void(this.metric_updating=!1);let r=e+":"+i,a=this.resourceLimits[r];if(!a)return void(this.metric_updating=!1);await this._updateVirtualFolderList();let o=this.available_slot;this.shadowRoot.querySelector("#cpu-resource").disabled=!1,this.shadowRoot.querySelector("#mem-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").disabled=!1,this.shadowRoot.querySelector("#session-resource").disabled=!1,this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent="Launch";let n=!1,l={min:.0625,max:1,preferred:.125};if(this.cuda_gpu_metric={min:0,max:0},a.forEach(e=>{if("cpu"===e.key){let t=Object.assign({},e);t.min=parseInt(t.min),"cpu"in this.userResourceLimit?0!==parseInt(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseInt(t.max),parseInt(this.userResourceLimit.cpu),o.cpu_slot):t.max=Math.min(parseInt(this.userResourceLimit.cpu),o.cpu_slot):0!==parseInt(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseInt(t.max),o.cpu_slot):t.max=this.available_slot.cpu_slot,t.min>=t.max&&(t.min>t.max?(t.min=t.max,t.max=t.max+1,n=!0,this.shadowRoot.querySelector("#cpu-resource").disabled=!0):(t.max=t.max+1,this.shadowRoot.querySelector("#cpu-resource").disabled=!0)),this.cpu_metric=t}if("cuda.device"===e.key&&"cuda.device"==this.gpu_mode){let t=Object.assign({},e);t.min=parseInt(t.min),"cuda.device"in this.userResourceLimit?0!==parseInt(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseInt(t.max),parseInt(this.userResourceLimit["cuda.device"]),o.cuda_shares_slot):t.max=Math.min(parseInt(this.userResourceLimit["cuda.device"]),o.cuda_device_slot):0!==parseInt(t.max)?t.max=Math.min(parseInt(t.max),o.cuda_device_slot):t.max=this.available_slot.cuda_device_slot,t.min>=t.max&&(t.min>t.max?(t.min=t.max,n=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!0):(t.max=t.max+1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0)),this.cuda_gpu_metric=t}if("cuda.shares"===e.key&&"cuda.shares"===this.gpu_mode){let t=Object.assign({},e);t.min=parseFloat(t.min),"cuda.shares"in this.userResourceLimit?0!==parseFloat(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseFloat(t.max),parseFloat(this.userResourceLimit["cuda.shares"]),o.cuda_shares_slot):t.max=Math.min(parseFloat(this.userResourceLimit["cuda.shares"]),o.cuda_shares_slot):0!==parseFloat(t.max)?t.max=Math.min(parseFloat(t.max),o.cuda_shares_slot):t.max=0,t.min>=t.max&&(t.min>t.max?(t.min=t.max,n=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!0):(t.max=t.max+1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0)),this.cuda_fgpu_metric=t,t.max>0&&(this.cuda_gpu_metric=t)}if("rocm.device"===e.key&&"rocm.device"===this.gpu_mode){let t=Object.assign({},e);t.min=parseInt(t.min),t.max=parseInt(t.max),t.min,t.max,this.rocm_gpu_metric=t}if("tpu"===e.key){let t=Object.assign({},e);t.min=parseInt(t.min),t.max=parseInt(t.max),t.min,t.max,this.tpu_metric=t}if("mem"===e.key){let t=Object.assign({},e);t.min=globalThis.backendaiclient.utils.changeBinaryUnit(t.min,"g"),t.min<.1&&(t.min=.1);let i=globalThis.backendaiclient.utils.changeBinaryUnit(t.max,"g","g");if("mem"in this.userResourceLimit){let e=globalThis.backendaiclient.utils.changeBinaryUnit(this.userResourceLimit.mem,"g");0!==parseInt(i)?t.max=Math.min(parseFloat(i),parseFloat(e),o.mem_slot):t.max=parseFloat(e)}else 0!==parseInt(t.max)&&"Infinity"!==t.max&&!0!==isNaN(t.max)?t.max=Math.min(parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(t.max,"g","g")),o.mem_slot):t.max=o.mem_slot;t.min>=t.max&&(t.min>t.max?(t.min=t.max,t.max=t.max+1,n=!0,this.shadowRoot.querySelector("#mem-resource").disabled=!0):(t.max=t.max+1,this.shadowRoot.querySelector("#mem-resource").disabled=!0)),t.min=Number(t.min.toFixed(2)),t.max=Number(t.max.toFixed(2)),this.mem_metric=t}"shmem"===e.key&&(l=Object.assign({},e),l.preferred="preferred"in l?globalThis.backendaiclient.utils.changeBinaryUnit(l.preferred,"g","g"):.0625)}),l.max=this.mem_metric.max,l.min=.0625,l.min>=l.max&&(l.min>l.max?(l.min=l.max,l.max=l.max+1,n=!0,this.shadowRoot.querySelector("#shmem-resource").disabled=!0):(l.max=l.max+1,this.shadowRoot.querySelector("#shmem-resource").disabled=!0)),l.min=Number(l.min.toFixed(2)),l.max=Number(l.max.toFixed(2)),this.shmem_metric=l,0==this.cuda_gpu_metric.min&&0==this.cuda_gpu_metric.max)if(this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0,this.shadowRoot.querySelector("#gpu-resource").value=0,this.resource_templates!==[]&&this.resource_templates.length>0){let e=[];for(let t=0;t<this.resource_templates.length;t++)parseFloat(this.resource_templates[t].cuda_gpu)<=0&&parseFloat(this.resource_templates[t].cuda_fgpu)<=0&&e.push(this.resource_templates[t]);this.resource_templates_filtered=e}else this.resource_templates_filtered=this.resource_templates;else this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").value=this.cuda_gpu_metric.max,this.resource_templates_filtered=this.resource_templates;if(this.resource_templates_filtered!==[]&&this.resource_templates_filtered.length>0){let e=this.resource_templates_filtered[0];this._chooseResourceTemplate(e);let t=this.shadowRoot.querySelector("#resource-templates").getElementsByTagName("wl-button")[0];this.shadowRoot.querySelector("#resource-templates").selected="0",t.setAttribute("active",!0)}else this._updateResourceIndicator(this.cpu_metric.min,this.mem_metric.min,"none",0);n&&(this.shadowRoot.querySelector("#cpu-resource").disabled=!0,this.shadowRoot.querySelector("#mem-resource").disabled=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!0,this.shadowRoot.querySelector("#session-resource").disabled=!0,this.shadowRoot.querySelector("#launch-button").disabled=!0,this.shadowRoot.querySelector("#launch-button-msg").textContent="Not enough resource"),this.cuda_gpu_metric.min==this.cuda_gpu_metric.max&&(this.shadowRoot.querySelector("#gpu-resource").max=this.cuda_gpu_metric.max+1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0),1==this.concurrency_limit&&(this.shadowRoot.querySelector("#session-resource").max=2,this.shadowRoot.querySelector("#session-resource").value=1,this.shadowRoot.querySelector("#session-resource").disabled=!0),this.metric_updating=!1}}updateLanguage(){let e=this.shadowRoot.querySelector("#environment").selected;if(null===e)return;let t=e.id;this._updateVersions(t)}async _refreshImageList(){return globalThis.backendaiclient.image.list(["name","humanized_name","tag","registry","digest","installed","resource_limits { key min max }"],!0,!1).then(e=>{const t=[];Object.keys(e.images).map((i,s)=>{const r=e.images[i];!0===r.installed&&t.push(r)}),0!==t.length&&(this.images=t,this.supports={},this.supportImages={},Object.keys(this.images).map((e,t)=>{const i=this.images[e],s=`${i.registry}/${i.name}`;let r;s in this.supports||(this.supports[s]=[]),this.supports[s].push(i.tag);let a=i.name.split("/");r=1===a.length?a[0]:a[1],this.supportImages[s]=this.imageInfo[r]||{name:"Custom Environments",description:"Custom-built images.",group:"Custom Environments",tags:[],label:[{category:"Custom",tag:"Custom",color:"black"}]},"group"in this.supportImages[s]||(this.supportImages[s].group="Custom Environments"),this.resourceLimits[`${s}:${i.tag}`]=i.resource_limits}),this._updateEnvironment())}).catch(e=>{this.metadata_updating=!1,e&&e.message&&(this.notification.text=O.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}changed(e){console.log(e)}isEmpty(e){return 0===e.length}_toggleAdvancedSettings(){this.shadowRoot.querySelector("#advanced-resource-settings").toggle()}_chooseResourceTemplate(e){let t;t=void 0!==e.cpu?e:e.target.closest("wl-button");const i=t.cpu,s=t.mem,r=t.cuda_gpu,a=t.cuda_fgpu,o=t.rocm_gpu,n=t.tpu;let l,c;void 0!==r||void 0!==a?void 0===r?(l="cuda.share",c=a):(l="cuda.device",c=r):void 0!==o?(l="rocm.device",c=o):void 0!==n?(l="tpu.device",c=n):(l="none",c=0);const d=t.shmem;this.shmem_request=d||.0625,this._updateResourceIndicator(i,s,l,c)}_updateResourceIndicator(e,t,i,s){this.shadowRoot.querySelector("#gpu-resource").value=s,this.shadowRoot.querySelector("#shmem-resource").value=this.shmem_request,this.cpu_request=e,this.mem_request=t,this.gpu_request=s}selectDefaultLanguage(){void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._selectDefaultLanguage()},!0):this._selectDefaultLanguage()}_selectDefaultLanguage(){if(!0===this._default_language_updated)return;void 0!==globalThis.backendaiclient._config.default_session_environment&&"default_session_environment"in globalThis.backendaiclient._config&&""!==globalThis.backendaiclient._config.default_session_environment?this.default_language=globalThis.backendaiclient._config.default_session_environment:this.languages.length>1?this.default_language=this.languages[1].name:0!==this.languages.length?this.default_language=this.languages[0].name:this.default_language="index.docker.io/lablup/ngc-tensorflow";let e=this.shadowRoot.querySelector("#environment"),t=e.items.find(e=>e.value===this.default_language);if(void 0===t)return setTimeout(()=>{console.log("Environment selector is not ready yet. Trying to set the default language again."),this._selectDefaultLanguage()},500),!0;let i=e.items.indexOf(t);return e.select(i),this._default_language_updated=!0,!0}_selectDefaultVersion(e){return!1}async _fetchSessionOwnerGroups(){this.ownerFeatureInitialized||(this.shadowRoot.querySelector("#owner-group").addEventListener("selected-item-label-changed",this._fetchSessionOwnerScalingGroups.bind(this)),this.ownerFeatureInitialized=!0);const e=this.shadowRoot.querySelector("#owner-email"),t=e.value;if(!e.checkValidity())return this.notification.text="Invalid email address",this.notification.show(),this.ownerKeypairs=[],void(this.ownerGroups=[]);const i=await globalThis.backendaiclient.keypair.list(t,["access_key"]);if(this.ownerKeypairs=i.keypairs,this.ownerKeypairs.length<1)return this.notification.text="No active keypair",this.notification.show(),this.ownerKeypairs=[],void(this.ownerGroups=[]);this.shadowRoot.querySelector("#owner-accesskey paper-listbox").selected=this.ownerKeypairs[0].access_key;const s=await globalThis.backendaiclient.user.get(t,["domain_name","groups {id name}"]);this.ownerDomain=s.user.domain_name,this.ownerGroups=s.user.groups,this.ownerGroups&&(this.shadowRoot.querySelector("#owner-group paper-listbox").selected=this.ownerGroups[0].name)}async _fetchSessionOwnerScalingGroups(){const e=this.shadowRoot.querySelector("#owner-group").selectedItemLabel;if(!e)return void(this.ownerScalingGroups=[]);const t=await globalThis.backendaiclient.scalingGroup.list(e);this.ownerScalingGroups=t.scaling_groups,this.ownerScalingGroups&&(this.shadowRoot.querySelector("#owner-scaling-group paper-listbox").selected=0)}_toggleResourceGauge(){""==this.resourceGauge.style.display||"flex"==this.resourceGauge.style.display||"block"==this.resourceGauge.style.display?this.resourceGauge.style.display="none":(document.body.clientWidth<750?(this.resourceGauge.style.left="20px",this.resourceGauge.style.right="20px",this.resourceGauge.style.backgroundColor="var(--paper-red-800)"):this.resourceGauge.style.backgroundColor="transparent",this.resourceGauge.style.display="flex")}_showKernelDescription(e,t){e.stopPropagation();let i=t.kernelname;if(i in this.imageInfo&&"description"in this.imageInfo[i]){let e=this.shadowRoot.querySelector("#help-description");this._helpDescriptionTitle=this.imageInfo[i].name,this._helpDescription=this.imageInfo[i].description,this._helpDescriptionIcon=t.icon,e.show()}else i in this.imageInfo?this._helpDescriptionTitle=this.imageInfo[i].name:this._helpDescriptionTitle=i,this._helpDescription="No description found."}_showResourceDescription(e,t){e.stopPropagation();const i={cpu:{name:q("session.launcher.CPU"),desc:q("session.launcher.DescCPU")},mem:{name:q("session.launcher.Memory"),desc:q("session.launcher.DescMemory")},shmem:{name:q("session.launcher.SharedMemory"),desc:q("session.launcher.DescSharedMemory")},gpu:{name:q("session.launcher.GPU"),desc:q("session.launcher.DescGPU")},session:{name:q("session.launcher.TitleSession"),desc:q("session.launcher.DescSession")}};if(t in i){this._helpDescriptionTitle=i[t].name,this._helpDescription=i[t].desc,this._helpDescriptionIcon="",this.shadowRoot.querySelector("#help-description").show()}}_getVersionInfo(e){let t=[],i=e.split("-");if(t.push({tag:this._aliasName(i[0]),color:"blue",size:"80px"}),i.length>1&&t.push({tag:this._aliasName(i[1]),color:"red",size:"120px"}),i.length>2){let e=this._aliasName(i[2]).split(":");e.length>1?t.push({tag:e[1],app:e[0],color:"green",size:"150px"}):t.push({tag:e[0],color:"green",size:"150px"})}return t}_disableEnterKey(){this.shadowRoot.querySelectorAll("wl-expansion").forEach(e=>{e.onKeyDown=e=>{13===e.keyCode&&e.preventDefault()}})}render(){return o`
      ${this.enable_scaling_group&&"vertical"===this.direction?o`
      <div id="scaling-group-select-box" class="layout horizontal start-justified">
      </div>
      `:o``}
      <div class="layout horizontal">
        <mwc-icon-button id="resource-gauge-toggle" icon="assessment" class="fg blue ${this.direction}"
          @click="${()=>this._toggleResourceGauge()}">
        </mwc-icon-button>
        <div id="resource-gauges" class="layout ${this.direction} resources flex" style="align-items: flex-start">
        ${"horizontal"===this.direction?o`
          <div class="layout vertical end-justified wrap short-indicator">
            <span class="gauge-label">${F("session.launcher.TOTAL")}</span>
            <div style="font-size:8px;height:10px;">${F("session.launcher.RESOURCE")}</div>
            <span class="gauge-label">${F("session.launcher.MY")}</span>
          </div>
          `:o``}
          <div class="layout horizontal start-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <wl-icon class="fg blue">developer_board</wl-icon>
              <div class="gauge-name">CPU</div>
            </div>
            <div class="layout vertical start-justified wrap short-indicator">
              <span class="gauge-label">${this.used_sg_slot.cpu_slot}/${this.total_sg_slot.cpu_slot}</span>
              <mwc-linear-progress id="cpu-usage-bar" class="start-bar" progress="${this.used_sg_slot_percent.cpu_slot/100}"></mwc-linear-progress>
              <mwc-linear-progress id="cpu-usage-bar-2" class="end-bar" progress="${this.used_slot_percent.cpu_slot/100}"></mwc-linear-progress>
              <span class="gauge-label">${this.used_slot.cpu_slot}/${this.total_slot.cpu_slot}</span>
            </div>
          </div>
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <wl-icon class="fg blue">memory</wl-icon>
              <span class="gauge-name">RAM</span>
            </div>
            <div class="layout vertical start-justified wrap">
              <span class="gauge-label">${this.used_sg_slot.mem_slot}/${this.total_sg_slot.mem_slot}GB</span>
              <mwc-linear-progress id="mem-usage-bar" class="start-bar" progress="${this.used_sg_slot_percent.mem_slot/100}"></mwc-linear-progress>
              <mwc-linear-progress id="mem-usage-bar-2" class="end-bar" progress="${this.used_slot_percent.mem_slot/100}"></mwc-linear-progress>
              <span class="gauge-label">${this.used_slot.mem_slot}/${this.total_slot.mem_slot}GB</span>
            </div>
          </div>
          ${this.total_slot.cuda_device_slot?o`
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <img class="resource-type-icon fg green" src="/resources/icons/file_type_cuda.svg" />
              <span class="gauge-name">GPU</span>
            </div>
            <div class="layout vertical center-justified wrap short-indicator">
              <span class="gauge-label">${this.used_sg_slot.cuda_device_slot}/${this.total_sg_slot.cuda_device_slot}</span>
              <mwc-linear-progress id="gpu-usage-bar" class="start-bar" progress="${this.used_sg_slot_percent.cuda_device_slot/100}"></mwc-linear-progress>
              <mwc-linear-progress id="gpu-usage-bar-2" class="end-bar" progress="${this.used_slot_percent.cuda_device_slot/100}"></mwc-linear-progress>
              <span class="gauge-label">${this.used_slot.cuda_device_slot}/${this.total_slot.cuda_device_slot}</span>
            </div>
          </div>`:o``}
          ${this.total_slot.cuda_shares_slot&&this.total_slot.cuda_shares_slot>0?o`
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <img class="resource-type-icon fg green" src="/resources/icons/file_type_cuda.svg" />
              <span class="gauge-name">FGPU</span>
            </div>
            <div class="layout vertical start-justified wrap short-indicator">
              <span class="gauge-label">${this.used_sg_slot.cuda_shares_slot}/${this.total_sg_slot.cuda_shares_slot}</span>
              <mwc-linear-progress id="gpu-usage-bar" class="start-bar" progress="${this.used_sg_slot_percent.cuda_shares_slot/100}"></mwc-linear-progress>
              <mwc-linear-progress id="gpu-usage-bar-2" class="end-bar" progress="${this.used_slot_percent.cuda_shares_slot/100}"></mwc-linear-progress>
              <span class="gauge-label">${this.used_slot.cuda_shares_slot}/${this.total_slot.cuda_shares_slot}</span>
            </div>
          </div>`:o``}
          ${this.total_slot.rocm_gpu_slot?o`
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <img class="resource-type-icon fg green" src="/resources/icons/ROCm.png" />
              <span class="gauge-name">ROCm<br/>GPU</span>
            </div>
            <div class="layout vertical center-justified wrap short-indicator">
              <span class="gauge-label">${this.used_sg_slot.rocm_gpu_slot}/${this.total_sg_slot.rocm_gpu_slot}</span>
              <mwc-linear-progress id="gpu-usage-bar" class="start-bar" progress="${this.used_sg_slot_percent.rocm_gpu_slot/100}"></mwc-linear-progress>
              <mwc-linear-progress id="gpu-usage-bar-2" class="end-bar" progress="${this.used_slot_percent.rocm_gpu_slot/100}"></mwc-linear-progress>
              <span class="gauge-label">${this.used_slot.rocm_gpu_slot}/${this.total_slot.rocm_gpu_slot}</span>
            </div>
          </div>`:o``}
          ${this.total_slot.tpu_slot?o`
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <wl-icon class="fg blue">view_module</wl-icon>
              <span class="gauge-name">TPU</span>
            </div>
            <div class="layout vertical center-justified wrap short-indicator">
              <span class="gauge-label">${this.used_sg_slot.tpu_slot}/${this.total_sg_slot.tpu_slot}</span>
              <mwc-linear-progress id="gpu-usage-bar" class="start-bar" progress="${this.used_sg_slot_percent.tpu_slot/100}"></mwc-linear-progress>
              <mwc-linear-progress id="gpu-usage-bar-2" class="end-bar" progress="${this.used_slot_percent.tpu_slot/100}"></mwc-linear-progress>
              <span class="gauge-label">${this.used_slot.tpu_slot}/${this.total_slot.tpu_slot}</span>
            </div>
          </div>`:o``}

          <div class="layout horizontal center-justified monitor session">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <wl-icon class="fg blue">assignment</wl-icon>
              <span class="gauge-name">${F("session.launcher.Session")}</span>
            </div>
            <div class="layout vertical start-justified wrap short-indicator">
              <span class="gauge-label">${this.concurrency_used}/${this.concurrency_max}</span>
              <mwc-linear-progress class="short full-bar" id="concurrency-usage-bar" progress="${this.used_slot_percent.concurrency/100}"></mwc-linear-progress>
              <span class="gauge-label">&nbsp;</span>
            </div>
          </div>
        </div>
        <div class="layout vertical" style="align-self: center;">
          <wl-button class="fg red" id="launch-session" ?fab=${"vertical"===this.direction} outlined @click="${()=>this._launchSessionDialog()}">
            <wl-icon>add</wl-icon>
            ${F("session.launcher.Start")}
          </wl-button>
        </div>
        <div class="flex"></div>
      </div>
      ${this.enable_scaling_group&&"vertical"===this.direction?o`
      <div class="vertical start-justified layout">
        <div class="layout horizontal center start-justified">
          <div style="width:10px;height:10px;margin-left:10px;margin-right:3px;background-color:#4775E3;"></div>
          <span style="margin-right:5px;">${F("session.launcher.CurrentResourceGroup")} (${this.scaling_group})</span>
        </div>
        <div class="layout horizontal center start-justified">
          <div style="width:10px;height:10px;margin-left:10px;margin-right:3px;background-color:#A0BD67"></div>
          <span style="margin-right:5px;">${F("session.launcher.UserResourceLimit")}</span>
        </div>
      </div>
      `:o``}
      ${"vertical"===this.direction&&!0===this.project_resource_monitor&&(this.total_pj_slot.cpu_slot>0||this.total_pj_slot.cpu_slot===1/0)?o`
      <hr />
      <div class="vertical start-justified layout">
        <div class="flex"></div>
        <div class="layout horizontal center-justified monitor">
          <div class="layout vertical center center-justified" style="margin-right:5px;">
            <wl-icon class="fg blue">group_work</wl-icon>
            <span class="gauge-name">${F("session.launcher.Project")}</span>
          </div>
          <div class="layout vertical start-justified wrap short-indicator">
            <div class="layout horizontal">
              <span style="width:35px; margin-left:5px; margin-right:5px;">CPU</span>
              <mwc-linear-progress id="cpu-project-usage-bar" class="start-bar project-bar" progress="${this.used_pj_slot_percent.cpu_slot/100}"></mwc-linear-progress>
              <span style="margin-left:5px;">${this.used_pj_slot.cpu_slot}/${this.total_pj_slot.cpu_slot===1/0?"∞":this.total_pj_slot.cpu_slot}</span>
            </div>
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">RAM</span>
              <mwc-linear-progress id="mem-project-usage-bar" class="middle-bar project-bar" progress="${this.used_pj_slot_percent.mem_slot/100}"></mwc-linear-progress>
              <span style="margin-left:5px;">${this.used_pj_slot.mem_slot}/${this.total_pj_slot.mem_slot===1/0?"∞":this.total_pj_slot.mem_slot}</span>
            </div>
            ${this.total_pj_slot.cuda_device_slot?o`
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">GPU</span>
              <mwc-linear-progress id="gpu-project-usage-bar" class="end-bar project-bar" progress="${this.used_pj_slot_percent.cuda_device_slot/100}"></mwc-linear-progress>
              <span style="margin-left:5px;">${this.used_pj_slot.cuda_device_slot}/${"Infinity"===this.total_pj_slot.cuda_device_slot?"∞":this.total_pj_slot.cuda_device_slot}</span>
            </div>`:o``}
            ${this.total_pj_slot.cuda_shares_slot?o`
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">fGPU</span>
              <mwc-linear-progress id="gpu-project-usage-bar" class="end-bar project-bar" progress="${this.used_pj_slot_percent.cuda_shares_slot/100}"></mwc-linear-progress>
              <span style="margin-left:5px;">${this.used_pj_slot.cuda_shares_slot}/${"Infinity"===this.total_pj_slot.cuda_shares_slot?"∞":this.total_pj_slot.cuda_shares_slot}</span>
            </div>`:o``}
            ${this.total_pj_slot.rocm_device_slot?o`
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">GPU</span>
              <mwc-linear-progress id="gpu-project-usage-bar" class="end-bar project-bar" progress="${this.used_pj_slot_percent.rocm_device_slot/100}"></mwc-linear-progress>
              <span style="margin-left:5px;">${this.used_pj_slot.rocm_device_slot}/${"Infinity"===this.total_pj_slot.rocm_device_slot?"∞":this.total_pj_slot.rocm_device_slot}</span>
            </div>`:o``}
            ${this.total_pj_slot.tpu_device_slot?o`
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">GPU</span>
              <mwc-linear-progress id="gpu-project-usage-bar" class="end-bar project-bar" progress="${this.used_pj_slot_percent.tpu_device_slot/100}"></mwc-linear-progress>
              <span style="margin-left:5px;">${this.used_pj_slot.tpu_device_slot}/${"Infinity"===this.total_pj_slot.tpu_device_slot?"∞":this.total_pj_slot.cuda_device_slot}</span>
            </div>`:o``}
          </div>
          <div class="flex"></div>
        </div>
      </div>
      `:o``}
      <wl-dialog id="new-session-dialog" fixed backdrop blockscrolling persistent style="padding:0;">
        <wl-card class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>${F("session.launcher.StartNewSession")}</span>
            <div class="flex"></div>
            <mwc-icon-button icon="close" class="blue close-button"
              @click="${()=>this._hideSessionDialog()}">
            </mwc-icon-button>
          </h3>
          <form id="launch-session-form">
            <div class="vertical center layout" style="padding-top:15px;">
              <mwc-select id="environment" label="${F("session.launcher.Environments")}" required
                value="${this.default_language}">
                <mwc-list-item selected style="display:none!important;">${F("session.launcher.ChooseEnvironment")}</mwc-list-item>
                  ${this.languages.map(e=>o`
                    ${!1===e.clickable?o`
                      <h5 style="font-size:12px;padding: 0 10px 3px 10px;margin:0; border-bottom:1px solid #ccc;" role="separator" disabled="true">${e.basename}</h5>
                    `:o`
                      <mwc-list-item id="${e.name}" value="${e.name}" graphic="icon">
                        <img slot="graphic" src="resources/icons/${e.icon}" style="width:32px;height:32px;" />
                        <div class="horizontal justified center flex layout" style="width:293px;">
                          <div style="padding-right:5px;">${e.basename}</div>
                          <div class="flex"></div>
                          <div class="horizontal layout end-justified center flex">
                          ${e.tags?e.tags.map(e=>o`
                            <lablup-shields slot="meta" style="margin-right:5px;" color="${e.color}" description="${e.tag}"></lablup-shields>
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
              <mwc-select id="version" label="${F("session.launcher.Version")}" required>
                <mwc-list-item selected style="display:none!important"></mwc-list-item>
                  <h5 style="font-size:12px;padding: 0 10px 3px 25px;margin:0; border-bottom:1px solid #ccc;" role="separator" disabled="true" class="horizontal layout">
                    <div style="width:80px;">${F("session.launcher.Version")}</div>
                    <div style="width:120px;">${F("session.launcher.Base")}</div>
                    <div style="width:150px;">${F("session.launcher.Requirements")}</div>
                  </h5>
              ${this.versions.map(e=>o`
                <mwc-list-item id="${e}" value="${e}">
                  <span style="display:none">${e}</span>
                  <div class="horizontal layout end-justified">
                    ${this._getVersionInfo(e).map(e=>o`
                      <lablup-shields style="width:${e.size}!important;"
                                      color="${e.color}"
                                      app="${e.app&&""!=e.app&&" "!=e.app?e.app:""}"
                                      description="${e.tag}">
                      </lablup-shields>
                    `)}
                  </div>
                </mwc-list-item>
              `)}
              </mwc-select>
            </div>
              <div style="display:none;">
                <wl-checkbox id="use-gpu-checkbox">${F("session.launcher.UseGPU")}</wl-checkbox>
              </div>
              <div class="horizontal center layout">
                ${this.enable_scaling_group?o`
                  <mwc-select id="scaling-groups" label="${F("session.launcher.ResourceGroup")}" required
                              @selected="${e=>this.updateScalingGroup(!1,e)}">
                    ${this.scaling_groups.map(e=>o`
                      <mwc-list-item class="scaling-group-dropdown"
                                     id="${e.name}"
                                     value="${e.name}">
                        ${e.name}
                      </mwc-list-item>
                    `)}
                  </mwc-select>
                `:o``}
                <mwc-textfield id="session-name" placeholder="${F("session.launcher.SessionNameOptional")}"
                               pattern="[a-zA-Z0-9_-]{4,}" fullwidth
                               validationMessage="4 or more characters / no whitespace."
                               style="margin-left:5px;">
                </mwc-textfield>
              </div>
              <div class="horizontal center layout">
                <mwc-multi-select id="vfolder" label="${F("session.launcher.FolderToMount")}" multi
                @selected="${this._updateSelectedFolder}">
                ${this.vfolders.map(e=>o`
                  <mwc-list-item value="${e.name}" ?disabled="${e.disabled}">${e.name}</mwc-list-item>
                `)}
                </mwc-multi-select>
              </div>
            <wl-expansion name="resource-group" open>
              <span slot="title">${F("session.launcher.ResourceAllocation")}</span>
              <span slot="description"></span>
              <paper-listbox id="resource-templates" selected="0" class="horizontal center layout"
                             style="width:350px; overflow:scroll;">
                ${this.resource_templates_filtered.map(e=>o`
                  <wl-button class="resource-button vertical center start-justified layout" role="option"
                             style="height:140px;min-width:120px;" type="button"
                             flat outlined
                             @click="${this._chooseResourceTemplate}"
                             id="${e.name}-button"
                             .cpu="${e.cpu}"
                             .mem="${e.mem}"
                             .cuda_gpu="${e.cuda_gpu}"
                             .cuda_fgpu="${e.cuda_fgpu}"
                             .rocm_gpu="${e.rocm_gpu}"
                             .tpu="${e.tpu}"
                             .shmem="${e.shmem}">
                  <div>
                    <h4 style="padding-top:15px;padding-bottom:15px;">${e.name}</h4>
                    <ul>
                      <li>${e.cpu} CPU</li>
                      <li>${e.mem}GB RAM</li>
                      ${e.cuda_gpu?o`<li>${e.cuda_gpu} CUDA GPU</li>`:o``}
                      ${e.cuda_fgpu?o`<li>${e.cuda_fgpu} GPU</li>`:o``}
                      ${e.rocm_gpu?o`<li>${e.rocm_gpu} ROCM GPU</li>`:o``}
                      ${e.tpu?o`<li>${e.tpu} TPU</li>`:o``}
                      ${e.shmem?o`<li>${e.shmem}GB SHRAM</li>`:o``}
                      </ul>
                  </div>
                </wl-button>
              `)}
              ${this.isEmpty(this.resource_templates)?o`
                <wl-button class="resource-button vertical center start layout" role="option"
                           style="height:140px;width:350px;" type="button"
                           flat inverted outlined disabled>
                  <div>
                    <h4>${F("session.launcher.NoSuitablePreset")}</h4>
                    <div style="font-size:12px;">Use advanced settings to <br>start custom session</div>
                  </div>
                </wl-button>
                `:o``}
              </paper-listbox>
            </wl-expansion>
            <wl-expansion name="resource-group">
              <span slot="title">${F("session.launcher.Advanced")}</span>
              <span slot="description">${F("session.launcher.CustomAllocation")}</span>
              <div class="vertical layout">
                <div class="horizontal center layout">
                  <div class="resource-type" style="width:70px;">CPU</div>
                  <lablup-slider id="cpu-resource" class="cpu"
                                 pin snaps expand editable markers
                                 marker_limit="${this.marker_limit}"
                                 min="${this.cpu_metric.min}" max="${this.cpu_metric.max}"
                                 value="${this.cpu_request}"></lablup-slider>
                  <span class="caption">${F("session.launcher.Core")}</span>
                  <mwc-icon-button icon="info" class="fg green info" @click="${e=>{this._showResourceDescription(e,"cpu")}}"></mwc-icon-button>
                </div>
                <div class="horizontal center layout">
                  <div class="resource-type" style="width:70px;">RAM</div>
                  <lablup-slider id="mem-resource" class="mem"
                                 pin snaps step=0.05 editable markers
                                 marker_limit="${this.marker_limit}"
                                 min="${this.mem_metric.min}" max="${this.mem_metric.max}"
                                 value="${this.mem_request}"></lablup-slider>
                  <span class="caption">GB</span>
                  <mwc-icon-button icon="info" class="fg orange info" @click="${e=>{this._showResourceDescription(e,"mem")}}"></mwc-icon-button>
                </div>
                <div class="horizontal center layout">
                  <div class="resource-type" style="width:70px;">${F("session.launcher.SharedMemory")}</div>
                  <lablup-slider id="shmem-resource" class="mem"
                                 pin snaps step=0.0025 editable markers
                                 marker_limit="${this.marker_limit}"
                                 min="0.0" max="${this.shmem_metric.max}"
                                 value="${this.shmem_request}"></lablup-slider>
                  <span class="caption">GB</span>
                  <mwc-icon-button icon="info" class="fg orange info" @click="${e=>{this._showResourceDescription(e,"shmem")}}"></mwc-icon-button>
                </div>
                <div class="horizontal center layout">
                  <div class="resource-type" style="width:70px;">GPU</div>
                  <lablup-slider id="gpu-resource" class="gpu"
                                 pin snaps editable markers step="${this.gpu_step}"
                                 marker_limit="${this.marker_limit}"
                                 min="0.0" max="${this.cuda_gpu_metric.max}" value="${this.gpu_request}"></lablup-slider>
                  <span class="caption">GPU</span>
                  <mwc-icon-button icon="info" class="fg blue info" @click="${e=>{this._showResourceDescription(e,"gpu")}}"></mwc-icon-button>
                </div>
                <div class="horizontal center layout">
                  <div class="resource-type" style="width:70px;">Sessions</div>
                  <lablup-slider id="session-resource" class="session"
                                 pin snaps editable markers step="1"
                                 marker_limit="${this.marker_limit}"
                                 min="1" max="${this.concurrency_limit}" value="${this.session_request}"></lablup-slider>
                  <span class="caption">#</span>
                  <mwc-icon-button icon="info" class="fg red info" @click="${e=>{this._showResourceDescription(e,"session")}}"></mwc-icon-button>
                </div>
              </div>
            </wl-expansion>

            <wl-expansion name="ownership">
              <span slot="title">${F("session.launcher.Ownership")}</span>
              <span slot="description">${F("session.launcher.SetSessionOwner")}</span>
              <div class="vertical layout">
                <div class="horizontal center layout">
                  <mwc-textfield id="owner-email" type="email" class="flex" value=""
                    pattern="^.+@.+\..+$"
                    label="${F("session.launcher.OwnerEmail")}" size="40"></mwc-textfield>
                  <mwc-icon-button icon="refresh" class="blue"
                    @click="${()=>this._fetchSessionOwnerGroups()}">
                  </mwc-icon-button>
                </div>
                <paper-dropdown-menu id="owner-accesskey" label="${F("session.launcher.OwnerAccessKey")}">
                  <paper-listbox slot="dropdown-content" attr-for-selected="id">
                    ${this.ownerKeypairs.map(e=>o`
                      <paper-item id="${e.access_key}" label="${e.access_key}">${e.access_key}</paper-item>
                    `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <div class="horizontal center layout">
                  <paper-dropdown-menu id="owner-group" label="${F("session.launcher.OwnerGroup")}" horizontal-align="left">
                    <paper-listbox slot="dropdown-content" attr-for-selected="id"
                                   selected="${this.default_language}">
                      ${this.ownerGroups.map(e=>o`
                        <paper-item id="${e.name}" label="${e.name}">${e.name}</paper-item>
                      `)}
                    </paper-listbox>
                  </paper-dropdown-menu>
                  <paper-dropdown-menu id="owner-scaling-group" label="${F("session.launcher.OwnerResourceGroup")}">
                    <paper-listbox slot="dropdown-content" selected="0">
                      ${this.ownerScalingGroups.map(e=>o`
                        <paper-item id="${e.name}" label="${e.name}">${e.name}</paper-item>
                      `)}
                    </paper-listbox>
                  </paper-dropdown-menu>
                </div>
                <wl-label>
                  <wl-checkbox id="owner-enabled"></wl-checkbox>
                  ${F("session.launcher.LaunchSessionWithAccessKey")}
                </wl-label>
              </div>
            </wl-expansion>
            <fieldset slot="footer" style="padding-top:0;">
              <wl-button class="launch-button" type="button" id="launch-button"
                                           outlined @click="${()=>this._newSession()}">
                                          <wl-icon>rowing</wl-icon>
                <span id="launch-button-msg">Launch</span>
              </wl-button>
            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="help-description" fixed backdrop blockscrolling persistent style="padding:0;">
        <wl-card class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span style="font-size:16px;">${this._helpDescriptionTitle}</span>
            <div class="flex"></div>
            <mwc-icon-button icon="close" class="blue close-button"
              @click="${e=>this._hideDialog(e)}">
            </mwc-icon-button>
          </h3>
          <div class="horizontal layout center" style="margin:5px;">
          ${""==this._helpDescriptionIcon?o``:o`
            <img slot="graphic" src="resources/icons/${this._helpDescriptionIcon}" style="width:64px;height:64px;margin-right:10px;" />
            `}
            <p style="font-size:14px;">${z(this._helpDescription)}</p>
          </div>
        </wl-card>
      </wl-dialog>
`}};e([i({type:String})],pe.prototype,"direction",void 0),e([i({type:String})],pe.prototype,"location",void 0),e([i({type:Object})],pe.prototype,"supports",void 0),e([i({type:Object})],pe.prototype,"supportImages",void 0),e([i({type:Object})],pe.prototype,"resourceLimits",void 0),e([i({type:Object})],pe.prototype,"userResourceLimit",void 0),e([i({type:Object})],pe.prototype,"aliases",void 0),e([i({type:Object})],pe.prototype,"tags",void 0),e([i({type:Object})],pe.prototype,"icons",void 0),e([i({type:Object})],pe.prototype,"imageInfo",void 0),e([i({type:Object})],pe.prototype,"imageNames",void 0),e([i({type:Array})],pe.prototype,"versions",void 0),e([i({type:Array})],pe.prototype,"languages",void 0),e([i({type:Number})],pe.prototype,"marker_limit",void 0),e([i({type:String})],pe.prototype,"gpu_mode",void 0),e([i({type:Array})],pe.prototype,"gpu_modes",void 0),e([i({type:Number})],pe.prototype,"gpu_step",void 0),e([i({type:Object})],pe.prototype,"cpu_metric",void 0),e([i({type:Object})],pe.prototype,"mem_metric",void 0),e([i({type:Object})],pe.prototype,"shmem_metric",void 0),e([i({type:Object})],pe.prototype,"cuda_gpu_metric",void 0),e([i({type:Object})],pe.prototype,"cuda_fgpu_metric",void 0),e([i({type:Object})],pe.prototype,"rocm_gpu_metric",void 0),e([i({type:Object})],pe.prototype,"tpu_metric",void 0),e([i({type:Object})],pe.prototype,"images",void 0),e([i({type:String})],pe.prototype,"defaultResourcePolicy",void 0),e([i({type:Object})],pe.prototype,"total_slot",void 0),e([i({type:Object})],pe.prototype,"total_sg_slot",void 0),e([i({type:Object})],pe.prototype,"total_pj_slot",void 0),e([i({type:Object})],pe.prototype,"used_slot",void 0),e([i({type:Object})],pe.prototype,"used_sg_slot",void 0),e([i({type:Object})],pe.prototype,"used_pj_slot",void 0),e([i({type:Object})],pe.prototype,"available_slot",void 0),e([i({type:Number})],pe.prototype,"concurrency_used",void 0),e([i({type:Number})],pe.prototype,"concurrency_max",void 0),e([i({type:Number})],pe.prototype,"concurrency_limit",void 0),e([i({type:Array})],pe.prototype,"vfolders",void 0),e([i({type:Object})],pe.prototype,"used_slot_percent",void 0),e([i({type:Object})],pe.prototype,"used_sg_slot_percent",void 0),e([i({type:Object})],pe.prototype,"used_pj_slot_percent",void 0),e([i({type:Array})],pe.prototype,"resource_templates",void 0),e([i({type:Array})],pe.prototype,"resource_templates_filtered",void 0),e([i({type:String})],pe.prototype,"default_language",void 0),e([i({type:Number})],pe.prototype,"cpu_request",void 0),e([i({type:Number})],pe.prototype,"mem_request",void 0),e([i({type:Number})],pe.prototype,"shmem_request",void 0),e([i({type:Number})],pe.prototype,"gpu_request",void 0),e([i({type:Number})],pe.prototype,"session_request",void 0),e([i({type:Boolean})],pe.prototype,"_status",void 0),e([i({type:Number})],pe.prototype,"num_sessions",void 0),e([i({type:Number})],pe.prototype,"lastQueryTime",void 0),e([i({type:String})],pe.prototype,"scaling_group",void 0),e([i({type:Array})],pe.prototype,"scaling_groups",void 0),e([i({type:Boolean})],pe.prototype,"enable_scaling_group",void 0),e([i({type:Array})],pe.prototype,"sessions_list",void 0),e([i({type:Boolean})],pe.prototype,"metric_updating",void 0),e([i({type:Boolean})],pe.prototype,"metadata_updating",void 0),e([i({type:Boolean})],pe.prototype,"aggregate_updating",void 0),e([i({type:Object})],pe.prototype,"scaling_group_selection_box",void 0),e([i({type:Object})],pe.prototype,"resourceGauge",void 0),e([i({type:Boolean})],pe.prototype,"ownerFeatureInitialized",void 0),e([i({type:String})],pe.prototype,"ownerDomain",void 0),e([i({type:Array})],pe.prototype,"ownerKeypairs",void 0),e([i({type:Array})],pe.prototype,"ownerGroups",void 0),e([i({type:Array})],pe.prototype,"ownerScalingGroups",void 0),e([i({type:Boolean})],pe.prototype,"project_resource_monitor",void 0),e([i({type:Object})],pe.prototype,"version_selector",void 0),e([i({type:Boolean})],pe.prototype,"_default_language_updated",void 0),e([i({type:String})],pe.prototype,"_helpDescription",void 0),e([i({type:String})],pe.prototype,"_helpDescriptionTitle",void 0),e([i({type:String})],pe.prototype,"_helpDescriptionIcon",void 0),pe=e([p("backend-ai-resource-monitor")],pe);
