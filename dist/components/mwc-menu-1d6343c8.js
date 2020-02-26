import{_ as t,Q as e,p as i,a7 as s,L as o,h as n,au as r,a,c as d,a3 as c,av as l,ad as h,aw as m,V as p,ax as u,ay as f,a1 as g,az as _,a2 as x,a9 as b,aa as y}from"./backend-ai-console-e6443854.js";
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
 */class v extends o{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.boundOnClick=this.onClick.bind(this)}get text(){const t=this.textContent;return t?t.trim():""}render(){const t=this.renderText(),e=this.graphic?this.renderGraphic():n``,i=this.hasMeta?this.renderMeta():n``;return n`
      ${e}
      ${t}
      ${i}`}renderGraphic(){return n`
      <span class="mdc-list-item__graphic material-icons">
        <slot name="graphic"></slot>
      </span>`}renderMeta(){return n`
      <span class="mdc-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`}renderText(){const t=this.twoline?this.renderTwoline():this.renderSingleLine();return n`
      <span class="mdc-list-item__text">
        ${t}
      </span>`}renderSingleLine(){return n`<slot></slot>`}renderTwoline(){return n`
      <span class="mdc-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `}onClick(){this.fireRequestDetail(!1,!this.selected)}fireRequestDetail(t,e){const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{isClick:t,selected:e}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.toggleAttribute("mwc-list-item",!0),this.addEventListener("click",this.boundOnClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.boundOnClick)}firstUpdated(){this.dispatchEvent(new Event("list-item-rendered",{bubbles:!0,composed:!0})),r({surfaceNode:this,unbounded:!1})}}t([e("slot")],v.prototype,"slotElement",void 0),t([i({type:String})],v.prototype,"value",void 0),t([i({type:String,reflect:!0})],v.prototype,"group",void 0),t([i({type:Number,reflect:!0})],v.prototype,"tabindex",void 0),t([i({type:Boolean,reflect:!0}),s((function(t){t?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}))],v.prototype,"disabled",void 0),t([i({type:Boolean,reflect:!0})],v.prototype,"twoline",void 0),t([i({type:Boolean,reflect:!0})],v.prototype,"activated",void 0),t([i({type:String,reflect:!0})],v.prototype,"graphic",void 0),t([i({type:Boolean})],v.prototype,"hasMeta",void 0),t([i({type:Boolean,reflect:!0}),s((function(t){t?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.toggleAttribute("mwc-list-item",!0)}))],v.prototype,"noninteractive",void 0),t([i({type:Boolean,reflect:!0}),s((function(t){t?this.setAttribute("aria-selected","true"):this.setAttribute("aria-selected","false")}))],v.prototype,"selected",void 0);
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
const I=a`:host{cursor:pointer;user-select:none;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;padding:0 16px;overflow:hidden;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .mdc-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item__meta ::slotted(*){line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-list-item__meta ::slotted(.material-icons),.mdc-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.0333333333em;text-decoration:inherit;text-transform:inherit}:host[dir=rtl] .mdc-list-item__meta,[dir=rtl] :host .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text ::slotted([for]),.mdc-list-item__text[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list--dense .mdc-list-item__secondary-text{display:block;margin-top:0;line-height:normal;font-size:inherit}.mdc-list--dense .mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-list-item__text{align-self:flex-start}:host(:not([disabled])){--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([disabled]))::before,:host(:not([disabled]))::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:"";top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}:host(:not([disabled]))::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}:host(:not([disabled]))::before,:host(:not([disabled]))::after{background-color:#000}:host(.mdc-ripple-upgraded:not([disabled]))::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:host(.mdc-ripple-upgraded:not([disabled]))::after{top:0;left:0;transform:scale(0);transform-origin:center center;width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:host(.mdc-ripple-upgraded--unbounded:not([disabled]))::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:host(.mdc-ripple-upgraded--foreground-activation:not([disabled]))::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:host(.mdc-ripple-upgraded--foreground-deactivation:not([disabled]))::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:host([disabled],[noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-list-item__text ::slotted(*),:host([disabled]) .mdc-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}:host(:not([disabled]):hover)::before{opacity:.04}:host(:not([disabled]).mdc-ripple-upgraded--background-focused)::before,:host(:not([disabled]):not(.mdc-ripple-upgraded):focus)::before{transition-duration:75ms;opacity:.12}:host(:not([disabled]):not(.mdc-ripple-upgraded))::after{transition:opacity 150ms linear}:host(:not([disabled]):not(.mdc-ripple-upgraded):active)::after{transition-duration:75ms;opacity:.12}:host(:not([disabled]).mdc-ripple-upgraded){--mdc-ripple-fg-opacity: 0.12}:host([activated]:not([disabled]).mdc-ripple-upgraded--background-focused)::before,:host([activated]:not([disabled]):not(.mdc-ripple-upgraded):focus)::before{transition-duration:75ms;opacity:.2}:host([activated]:not([disabled]):not(.mdc-ripple-upgraded):active)::after{opacity:.2}:host([activated]:not([disabled]).mdc-ripple-upgraded){--mdc-ripple-fg-opacity: 0.2}:host([activated]:not([disabled]))::before{opacity:.12}:host([activated]:not([disabled]))::before,:host([activated]:not([disabled]))::after{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}:host([activated]:not([disabled]):hover)::before{opacity:.16}:host([activated]:not([disabled]).mdc-ripple-upgraded--background-focused)::before,:host([activated]:not([disabled]):not(.mdc-ripple-upgraded):focus)::before{transition-duration:75ms;opacity:.24}:host([activated]:not([disabled]):not(.mdc-ripple-upgraded):active)::after{opacity:.24}:host([activated]:not([disabled]).mdc-ripple-upgraded){--mdc-ripple-fg-opacity: 0.24}.mdc-list-item__secondary-text ::slotted(*){color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-group__subheader ::slotted(*){color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}:host[dir=rtl] :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}:host[dir=rtl] :host([graphic=icon]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=icon]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-list-item__graphic,:host([graphic=large]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`
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
*/;let E=class extends v{};E.styles=I,E=t([d("mwc-list-item")],E);
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
var A="mdc-list-item",T="mdc-list-item--disabled",O={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+A+" button:not(:disabled),\n    ."+A+" a\n  ",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+A+" button:not(:disabled),\n    ."+A+" a,\n    ."+A+' input[type="radio"]:not(:disabled),\n    .'+A+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]'},S={UNSET_INDEX:-1};
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
const w=["input","button","textarea","select"];function C(t){return t instanceof Set}const F=t=>{const e=t===S.UNSET_INDEX?new Set:t;return C(e)?new Set(e):new Set([e])};class R extends c{constructor(t){super(Object.assign(Object.assign({},R.defaultAdapter),t)),this.isMulti_=!1,this.wrapFocus_=!1,this.isVertical_=!0,this.selectedIndex_=S.UNSET_INDEX,this.focusedItemIndex_=S.UNSET_INDEX,this.useActivatedClass_=!1,this.ariaCurrentAttrValue_=null}static get strings(){return O}static get numbers(){return S}static get defaultAdapter(){return{focusItemAtIndex:()=>{},getFocusedElementIndex:()=>0,getListItemCount:()=>0,isFocusInsideList:()=>!1,isRootFocused:()=>!1,notifyAction:()=>{},notifySelected:()=>{},getSelectedStateForElementIndex:()=>!1,setDisabledStateForElementIndex:()=>{},getDisabledStateForElementIndex:()=>!1,setSelectedStateForElementIndex:()=>{},setActivatedStateForElementIndex:()=>{},setTabIndexForElementIndex:()=>{},setAttributeForElementIndex:()=>{},getAttributeForElementIndex:()=>null}}setWrapFocus(t){this.wrapFocus_=t}setMulti(t){this.isMulti_=t}setVerticalOrientation(t){this.isVertical_=t}setUseActivatedClass(t){this.useActivatedClass_=t}getSelectedIndex(){return this.selectedIndex_}setSelectedIndex(t){this.isIndexValid_(t)&&(this.isMulti_?this.setMultiSelectionAtIndex_(F(t)):this.setSingleSelectionAtIndex_(t))}handleFocusIn(t,e){e>=0&&this.adapter_.setTabIndexForElementIndex(e,0)}handleFocusOut(t,e){e>=0&&this.adapter_.setTabIndexForElementIndex(e,-1),setTimeout(()=>{this.adapter_.isFocusInsideList()||this.setTabindexToFirstSelectedItem_()},0)}handleKeydown(t,e,i){const s="ArrowLeft"===t.key||37===t.keyCode,o="ArrowUp"===t.key||38===t.keyCode,n="ArrowRight"===t.key||39===t.keyCode,r="ArrowDown"===t.key||40===t.keyCode,a="Home"===t.key||36===t.keyCode,d="End"===t.key||35===t.keyCode,c="Enter"===t.key||13===t.keyCode,l="Space"===t.key||32===t.keyCode;if(this.adapter_.isRootFocused())return void(o||d?(t.preventDefault(),this.focusLastElement()):(r||a)&&(t.preventDefault(),this.focusFirstElement()));let h,m=this.adapter_.getFocusedElementIndex();if(!(-1===m&&(m=i,m<0))){if(this.isVertical_&&r||!this.isVertical_&&n)this.preventDefaultEvent_(t),h=this.focusNextElement(m);else if(this.isVertical_&&o||!this.isVertical_&&s)this.preventDefaultEvent_(t),h=this.focusPrevElement(m);else if(a)this.preventDefaultEvent_(t),h=this.focusFirstElement();else if(d)this.preventDefaultEvent_(t),h=this.focusLastElement();else if((c||l)&&e){const e=t.target;if(e&&"A"===e.tagName&&c)return;this.preventDefaultEvent_(t),this.setSelectedIndexOnAction_(m)}this.focusedItemIndex_=m,void 0!==h&&(this.setTabindexAtIndex_(h),this.focusedItemIndex_=h)}}handleSingleSelection(t,e){t!==S.UNSET_INDEX&&(this.setSelectedIndexOnAction_(t,e),this.setTabindexAtIndex_(t),this.focusedItemIndex_=t)}focusNextElement(t){let e=t+1;if(e>=this.adapter_.getListItemCount()){if(!this.wrapFocus_)return t;e=0}return this.adapter_.focusItemAtIndex(e),e}focusPrevElement(t){let e=t-1;if(e<0){if(!this.wrapFocus_)return t;e=this.adapter_.getListItemCount()-1}return this.adapter_.focusItemAtIndex(e),e}focusFirstElement(){return this.adapter_.focusItemAtIndex(0),0}focusLastElement(){const t=this.adapter_.getListItemCount()-1;return this.adapter_.focusItemAtIndex(t),t}setEnabled(t,e){this.isIndexValid_(t)&&this.adapter_.setDisabledStateForElementIndex(t,!e)}preventDefaultEvent_(t){const e=`${t.target.tagName}`.toLowerCase();-1===w.indexOf(e)&&t.preventDefault()}setSingleSelectionAtIndex_(t){this.selectedIndex_!==t&&(this.selectedIndex_!==S.UNSET_INDEX&&(this.adapter_.setSelectedStateForElementIndex(this.selectedIndex_,!1),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(this.selectedIndex_,!1)),this.adapter_.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(t,!0),this.setAriaForSingleSelectionAtIndex_(t),this.selectedIndex_=t,this.adapter_.notifySelected(t))}setMultiSelectionAtIndex_(t){const e=((t,e)=>{const i=Array.from(t),s=Array.from(e),o={added:[],removed:[]},n=i.sort(),r=s.sort();let a=0,d=0;for(;a<n.length||d<r.length;){const t=n[a],e=r[d];t!==e?void 0!==t&&(void 0===e||t<e)?(o.removed.push(t),a++):void 0!==e&&(void 0===t||e<t)&&(o.added.push(e),d++):(a++,d++)}return o})(F(this.selectedIndex_),t);if(e.removed.length||e.added.length){for(const t of e.removed)this.adapter_.setSelectedStateForElementIndex(t,!1),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(t,!1);for(const t of e.added)this.adapter_.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(t,!0);this.selectedIndex_=t,this.adapter_.notifySelected(t,e)}}setAriaForSingleSelectionAtIndex_(t){this.selectedIndex_===S.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter_.getAttributeForElementIndex(t,O.ARIA_CURRENT));const e=null!==this.ariaCurrentAttrValue_,i=e?O.ARIA_CURRENT:O.ARIA_SELECTED;this.selectedIndex_!==S.UNSET_INDEX&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,i,"false");const s=e?this.ariaCurrentAttrValue_:"true";this.adapter_.setAttributeForElementIndex(t,i,s)}setTabindexAtIndex_(t){this.focusedItemIndex_===S.UNSET_INDEX&&0!==t?this.adapter_.setTabIndexForElementIndex(0,-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==t&&this.adapter_.setTabIndexForElementIndex(this.focusedItemIndex_,-1),this.adapter_.setTabIndexForElementIndex(t,0)}setTabindexToFirstSelectedItem_(){let t=0;"number"==typeof this.selectedIndex_&&this.selectedIndex_!==S.UNSET_INDEX?t=this.selectedIndex_:C(this.selectedIndex_)&&this.selectedIndex_.size>0&&(t=Math.min(...this.selectedIndex_)),this.setTabindexAtIndex_(t)}isIndexValid_(t){if(t instanceof Set){if(!this.isMulti_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");if(0===t.size)return!0;{let e=!1;for(const i of t)if(e=this.isIndexInRange_(i),e)break;return e}}if("number"==typeof t){if(this.isMulti_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange_(t)}return!1}isIndexInRange_(t){const e=this.adapter_.getListItemCount();return t>=0&&t<e}setSelectedIndexOnAction_(t,e){if(this.adapter_.getDisabledStateForElementIndex(t))return;let i=t;this.isMulti_&&(i=new Set([t])),this.isIndexValid_(i)&&(this.isMulti_?this.toggleMultiAtIndex(t,e):this.setSingleSelectionAtIndex_(t),this.adapter_.notifyAction(t))}toggleMultiAtIndex(t,e){let i=!1;i=void 0===e?!this.adapter_.getSelectedStateForElementIndex(t):e;const s=F(this.selectedIndex_);i?s.add(t):s.delete(t),this.setMultiSelectionAtIndex_(s)}}
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
*/const k=t=>t.hasAttribute("mwc-list-item");class M extends h{constructor(){super(...arguments),this.mdcAdapter=null,this.mdcFoundationClass=R,this.activatable=!1,this.multi=!1,this.wrapFocus=!1,this.itemRoles=null,this.innerRole=null,this.rootTabbable=!1,this.previousTabindex=null,this.noninteractive=!1,this.items_=[]}get assignedElements(){const t=this.slotElement;return t?t.assignedNodes({flatten:!0}).filter(m):[]}get items(){return this.items_}updateItems(){const t=this.assignedElements,e=[];for(const i of t)k(i)&&e.push(i),i.hasAttribute("divider")&&!i.hasAttribute("role")&&i.setAttribute("role","separator");this.items_=e;const i=new Set;if(this.items_.forEach((t,e)=>{this.itemRoles?t.setAttribute("role",this.itemRoles):t.removeAttribute("role"),t.selected&&i.add(e)}),this.multi)this.select(i);else{const t=i.size?i.entries().next().value[1]:-1;this.select(t)}}get selected(){const t=this.index;if(!C(t))return-1===t?null:this.items[t];const e=[];for(const i of t)e.push(this.items[i]);return e}get index(){return this.mdcFoundation?this.mdcFoundation.getSelectedIndex():-1}render(){const t=null===this.innerRole?void 0:this.innerRole,e=this.rootTabbable?"0":"-1";return n`
      <!-- @ts-ignore -->
      <ul
          tabindex=${e}
          role="${p(t)}"
          class="mdc-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}>
        <slot
            @slotchange=${this.onSlotChange}
            @list-item-rendered=${this.onListItemConnected}>
        </slot>
      </ul>
    `}onFocusIn(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusIn(t,e)}}onFocusOut(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusOut(t,e)}}onKeydown(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t),i=t.target,s=k(i);this.mdcFoundation.handleKeydown(t,s,e)}}onRequestSelected(t){if(this.mdcFoundation){const e=this.getIndexOfTarget(t);if(-1===e)return;if(this.items[e].disabled)return;const i=t.detail.selected;this.mdcFoundation.handleSingleSelection(e,i),t.stopPropagation()}}getIndexOfTarget(t){const e=this.items,i=t.composedPath();for(const t of i){let i=-1;if(m(t)&&k(t)&&(i=e.indexOf(t)),-1!==i)return i}return-1}createAdapter(){return this.mdcAdapter={getListItemCount:()=>this.mdcRoot?this.items.length:0,getFocusedElementIndex:()=>{if(!this.mdcRoot)return-1;if(!this.items.length)return-1;const t=u();if(!t.length)return-1;for(let e=t.length-1;e>=0;e--){const i=t[e];if(k(i))return this.items.indexOf(i)}return-1},getAttributeForElementIndex:(t,e)=>{if(!this.mdcRoot)return"";const i=this.items[t];return i?i.getAttribute(e):""},setAttributeForElementIndex:(t,e,i)=>{if(!this.mdcRoot)return;const s=this.items[t];s&&s.setAttribute(e,i)},focusItemAtIndex:t=>{const e=this.items[t];e&&e.focus()},setTabIndexForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.tabindex=e)},notifyAction:t=>{const e={bubbles:!0,composed:!0};e.detail={index:t};const i=new CustomEvent("action",e);this.dispatchEvent(i)},notifySelected:(t,e)=>{const i={bubbles:!0,composed:!0};i.detail={index:t,diff:e};const s=new CustomEvent("selected",i);this.dispatchEvent(s)},isFocusInsideList:()=>f(this),isRootFocused:()=>{const t=this.mdcRoot;return t.getRootNode().activeElement===t},setDisabledStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.disabled=e)},getDisabledStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.disabled},setSelectedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.selected=e)},getSelectedStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.selected},setActivatedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.activated=e)}},this.mdcAdapter}selectUi(t,e=!1){const i=this.items[t];i&&(i.selected=!0,i.activated=e)}deselectUi(t){const e=this.items[t];e&&(e.selected=!1,e.activated=!1)}select(t){this.mdcFoundation&&this.mdcFoundation.setSelectedIndex(t)}toggle(t,e){this.mdcFoundation.toggleMultiAtIndex(t,e)}onSlotChange(){this.layout()}onListItemConnected(t){const e=t.target;this.layout(-1===this.items.indexOf(e))}layout(t=!0){if(t&&this.updateItems(),!this.noninteractive){let t=null;for(const e of this.items)t||e.noninteractive||(t=e),e.tabindex=-1;t&&(t.tabindex=0)}}focus(){const t=this.mdcRoot;t&&t.focus()}blur(){const t=this.mdcRoot;t&&t.blur()}}t([e(".mdc-list")],M.prototype,"mdcRoot",void 0),t([e("slot")],M.prototype,"slotElement",void 0),t([i({type:Boolean}),s((function(t){this.mdcFoundation&&this.mdcFoundation.setUseActivatedClass(t)}))],M.prototype,"activatable",void 0),t([i({type:Boolean}),s((function(t,e){this.mdcFoundation&&this.mdcFoundation.setMulti(t),void 0!==e&&this.layout()}))],M.prototype,"multi",void 0),t([i({type:Boolean}),s((function(t){this.mdcFoundation&&this.mdcFoundation.setWrapFocus(t)}))],M.prototype,"wrapFocus",void 0),t([i({type:String}),s((function(t,e){void 0!==e&&this.updateItems()}))],M.prototype,"itemRoles",void 0),t([i({type:String})],M.prototype,"innerRole",void 0),t([i({type:Boolean})],M.prototype,"rootTabbable",void 0),t([i({type:Boolean,reflect:!0}),s((function(t){const e=this.slotElement;if(t&&e){const t=l(e,'[tabindex="0"]');this.previousTabindex=t,t&&t.setAttribute("tabindex","-1")}else!t&&this.previousTabindex&&(this.previousTabindex.setAttribute("tabindex","0"),this.previousTabindex=null)}))],M.prototype,"noninteractive",void 0);
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
const N=a`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-list{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit;line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-list:focus{outline:none}.mdc-list-item{height:48px}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.12)}.mdc-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc(100% - var(--mdc-list-inset-margin, 72px))}.mdc-list-group[dir=rtl] .mdc-list ::slotted([divider][inset]),[dir=rtl] .mdc-list-group .mdc-list ::slotted([divider][inset]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-list ::slotted([divider][inset][padded]){width:calc(100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px))}.mdc-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-list--two-line.mdc-list--dense ::slotted([mwc-list-item]),.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-list--dense ::slotted(.mdc-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`
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
*/;let D=class extends M{};D.styles=N,D=t([d("mwc-list")],D);
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
var L,B,P={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},z={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},H={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67};!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}(L||(L={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(B||(B={}));
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
var $,U=function(t){function e(i){var s=t.call(this,x({},e.defaultAdapter,i))||this;return s.isOpen_=!1,s.isQuickOpen_=!1,s.isHoistedElement_=!1,s.isFixedPosition_=!1,s.openAnimationEndTimerId_=0,s.closeAnimationEndTimerId_=0,s.animationRequestId_=0,s.anchorCorner_=B.TOP_START,s.anchorMargin_={top:0,right:0,bottom:0,left:0},s.position_={x:0,y:0},s}return g(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return P},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return z},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return H},enumerable:!0,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return B},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,i=t.ROOT,s=t.OPEN;if(!this.adapter_.hasClass(i))throw new Error(i+" class required in root element.");this.adapter_.hasClass(s)&&(this.isOpen_=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId_),clearTimeout(this.closeAnimationEndTimerId_),cancelAnimationFrame(this.animationRequestId_)},e.prototype.setAnchorCorner=function(t){this.anchorCorner_=t},e.prototype.setAnchorMargin=function(t){this.anchorMargin_.top=t.top||0,this.anchorMargin_.right=t.right||0,this.anchorMargin_.bottom=t.bottom||0,this.anchorMargin_.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement_=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition_=t},e.prototype.setAbsolutePosition=function(t,e){this.position_.x=this.isFinite_(t)?t:0,this.position_.y=this.isFinite_(e)?e:0},e.prototype.setQuickOpen=function(t){this.isQuickOpen_=t},e.prototype.isOpen=function(){return this.isOpen_},e.prototype.open=function(){var t=this;this.adapter_.saveFocus(),this.isQuickOpen_||this.adapter_.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId_=requestAnimationFrame((function(){t.adapter_.addClass(e.cssClasses.OPEN),t.dimensions_=t.adapter_.getInnerDimensions(),t.autoPosition_(),t.isQuickOpen_?t.adapter_.notifyOpen():t.openAnimationEndTimerId_=setTimeout((function(){t.openAnimationEndTimerId_=0,t.adapter_.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter_.notifyOpen()}),H.TRANSITION_OPEN_DURATION)})),this.isOpen_=!0},e.prototype.close=function(t){var i=this;void 0===t&&(t=!1),this.isQuickOpen_||this.adapter_.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){i.adapter_.removeClass(e.cssClasses.OPEN),i.isQuickOpen_?i.adapter_.notifyClose():i.closeAnimationEndTimerId_=setTimeout((function(){i.closeAnimationEndTimerId_=0,i.adapter_.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter_.notifyClose()}),H.TRANSITION_CLOSE_DURATION)})),this.isOpen_=!1,t||this.maybeRestoreFocus_()},e.prototype.handleBodyClick=function(t){var e=t.target;this.adapter_.isElementInContainer(e)||this.close()},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.autoPosition_=function(){var t;this.measurements_=this.getAutoLayoutMeasurements_();var e=this.getOriginCorner_(),i=this.getMenuSurfaceMaxHeight_(e),s=this.hasBit_(e,L.BOTTOM)?"bottom":"top",o=this.hasBit_(e,L.RIGHT)?"right":"left",n=this.getHorizontalOriginOffset_(e),r=this.getVerticalOriginOffset_(e),a=this.measurements_,d=a.anchorSize,c=a.surfaceSize,l=((t={})[o]=n,t[s]=r,t);d.width/c.width>H.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.isHoistedElement_||this.isFixedPosition_)&&this.adjustPositionForHoistedElement_(l),this.adapter_.setTransformOrigin(o+" "+s),this.adapter_.setPosition(l),this.adapter_.setMaxHeight(i?i+"px":"")},e.prototype.getAutoLayoutMeasurements_=function(){var t=this.adapter_.getAnchorDimensions(),e=this.adapter_.getBodyDimensions(),i=this.adapter_.getWindowDimensions(),s=this.adapter_.getWindowScroll();return t||(t={top:this.position_.y,right:this.position_.x,bottom:this.position_.y,left:this.position_.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions_,viewportDistance:{top:t.top,right:i.width-t.right,bottom:i.height-t.bottom,left:t.left},viewportSize:i,windowScroll:s}},e.prototype.getOriginCorner_=function(){var t=B.TOP_LEFT,e=this.measurements_,i=e.viewportDistance,s=e.anchorSize,o=e.surfaceSize,n=this.hasBit_(this.anchorCorner_,L.BOTTOM),r=n?i.top+s.height+this.anchorMargin_.bottom:i.top+this.anchorMargin_.top,a=n?i.bottom-this.anchorMargin_.bottom:i.bottom+s.height-this.anchorMargin_.top,d=o.height-r,c=o.height-a;c>0&&d<c&&(t=this.setBit_(t,L.BOTTOM));var l=this.adapter_.isRtl(),h=this.hasBit_(this.anchorCorner_,L.FLIP_RTL),m=this.hasBit_(this.anchorCorner_,L.RIGHT),p=m&&!l||!m&&h&&l,u=p?i.left+s.width+this.anchorMargin_.right:i.left+this.anchorMargin_.left,f=p?i.right-this.anchorMargin_.right:i.right+s.width-this.anchorMargin_.left,g=o.width-u,_=o.width-f;return(g<0&&p&&l||m&&!p&&g<0||_>0&&g<_)&&(t=this.setBit_(t,L.RIGHT)),t},e.prototype.getMenuSurfaceMaxHeight_=function(t){var i=this.measurements_.viewportDistance,s=0,o=this.hasBit_(t,L.BOTTOM),n=this.hasBit_(this.anchorCorner_,L.BOTTOM),r=e.numbers.MARGIN_TO_EDGE;return o?(s=i.top+this.anchorMargin_.top-r,n||(s+=this.measurements_.anchorSize.height)):(s=i.bottom-this.anchorMargin_.bottom+this.measurements_.anchorSize.height-r,n&&(s-=this.measurements_.anchorSize.height)),s},e.prototype.getHorizontalOriginOffset_=function(t){var e=this.measurements_.anchorSize,i=this.hasBit_(t,L.RIGHT),s=this.hasBit_(this.anchorCorner_,L.RIGHT);if(i){var o=s?e.width-this.anchorMargin_.left:this.anchorMargin_.right;return this.isHoistedElement_||this.isFixedPosition_?o-(this.measurements_.viewportSize.width-this.measurements_.bodySize.width):o}return s?e.width-this.anchorMargin_.right:this.anchorMargin_.left},e.prototype.getVerticalOriginOffset_=function(t){var e=this.measurements_.anchorSize,i=this.hasBit_(t,L.BOTTOM),s=this.hasBit_(this.anchorCorner_,L.BOTTOM);return i?s?e.height-this.anchorMargin_.top:-this.anchorMargin_.bottom:s?e.height+this.anchorMargin_.bottom:this.anchorMargin_.top},e.prototype.adjustPositionForHoistedElement_=function(t){var e,i,s=this.measurements_,o=s.windowScroll,n=s.viewportDistance,r=Object.keys(t);try{for(var a=_(r),d=a.next();!d.done;d=a.next()){var c=d.value,l=t[c]||0;l+=n[c],this.isFixedPosition_||("top"===c?l+=o.y:"bottom"===c?l-=o.y:"left"===c?l+=o.x:l-=o.x),t[c]=l}}catch(t){e={error:t}}finally{try{d&&!d.done&&(i=a.return)&&i.call(a)}finally{if(e)throw e.error}}},e.prototype.maybeRestoreFocus_=function(){var t=this.adapter_.isFocused(),e=document.activeElement&&this.adapter_.isElementInContainer(document.activeElement);(t||e)&&this.adapter_.restoreFocus()},e.prototype.hasBit_=function(t,e){return Boolean(t&e)},e.prototype.setBit_=function(t,e){return t|e},e.prototype.isFinite_=function(t){return"number"==typeof t&&isFinite(t)},e}(c);
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
 */class G extends h{constructor(){super(...arguments),this.mdcFoundationClass=U,this.absolute=!1,this.fullwidth=!1,this.anchor=null,this.fixed=!1,this.x=null,this.y=null,this.quick=!1,this.open=!1,this.corner="TOP_START",this.previouslyFocused=null,this.previousAnchor=null,this.onBodyClickBound=()=>{}}render(){const t={"mdc-menu-surface--fixed":this.fixed,fullwidth:this.fullwidth};return n`
      <div
          class="mdc-menu-surface ${b(t)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`}createAdapter(){return Object.assign(Object.assign({},y(this.mdcRoot)),{hasAnchor:()=>!!this.anchor,notifyClose:()=>{const t=new CustomEvent("closed",{bubbles:!0,composed:!0});this.open=!1,this.mdcRoot.dispatchEvent(t)},notifyOpen:()=>{const t=new CustomEvent("opened",{bubbles:!0,composed:!0});this.open=!0,this.mdcRoot.dispatchEvent(t)},isElementInContainer:()=>!1,isRtl:()=>!!this.mdcRoot&&"rtl"===getComputedStyle(this.mdcRoot).direction,setTransformOrigin:t=>{const e=this.mdcRoot;if(!e)return;const i=`${function(t,e){if(void 0===e&&(e=!1),void 0===$||e){var i=t.document.createElement("div");$="transform"in i.style?"transform":"webkitTransform"}return $}(window)}-origin`;e.style.setProperty(i,t)},isFocused:()=>f(this),saveFocus:()=>{const t=u(),e=t.length;e||(this.previouslyFocused=null),this.previouslyFocused=t[e-1]},restoreFocus:()=>{this.previouslyFocused&&"focus"in this.previouslyFocused&&this.previouslyFocused.focus()},getInnerDimensions:()=>{const t=this.mdcRoot;return t?{width:t.offsetWidth,height:t.offsetHeight}:{width:0,height:0}},getAnchorDimensions:()=>{const t=this.anchor;return t?t.getBoundingClientRect():null},getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:t=>{const e=this.mdcRoot;e&&(e.style.left="left"in t?`${t.left}px`:"",e.style.right="right"in t?`${t.right}px`:"",e.style.top="top"in t?`${t.top}px`:"",e.style.bottom="bottom"in t?`${t.bottom}px`:"")},setMaxHeight:t=>{const e=this.mdcRoot;e&&(e.style.maxHeight=t)}})}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onBodyClick(t){-1===t.composedPath().indexOf(this)&&this.close()}registerBodyClick(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound)}deregisterBodyClick(){document.body.removeEventListener("click",this.onBodyClickBound)}saveOrRestoreAnchor(t){t&&(this.previousAnchor=this.anchor,this.anchor=null),t||this.anchor||!this.previousAnchor||(this.anchor=this.previousAnchor)}close(){this.open=!1}show(){this.open=!0}}t([e(".mdc-menu-surface")],G.prototype,"mdcRoot",void 0),t([e("slot")],G.prototype,"slotElement",void 0),t([i({type:Boolean}),s((function(t){this.mdcFoundation&&!this.fixed&&(this.mdcFoundation.setIsHoisted(t),this.saveOrRestoreAnchor(t))}))],G.prototype,"absolute",void 0),t([i({type:Boolean})],G.prototype,"fullwidth",void 0),t([i({type:Object}),s((function(t,e){e&&(e.style.position=""),t&&(t.style.position="relative")}))],G.prototype,"anchor",void 0),t([i({type:Boolean}),s((function(t){this.mdcFoundation&&!this.absolute&&(this.mdcFoundation.setIsHoisted(t),this.saveOrRestoreAnchor(t))}))],G.prototype,"fixed",void 0),t([i({type:Number}),s((function(t){this.mdcFoundation&&null!==this.y&&null!==t&&(this.mdcFoundation.setAbsolutePosition(t,this.y),this.mdcFoundation.setAnchorMargin({left:t,top:this.y}))}))],G.prototype,"x",void 0),t([i({type:Number}),s((function(t){this.mdcFoundation&&null!==this.x&&null!==t&&(this.mdcFoundation.setAbsolutePosition(this.x,t),this.mdcFoundation.setAnchorMargin({left:this.x,top:t}))}))],G.prototype,"y",void 0),t([i({type:Boolean}),s((function(t){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(t)}))],G.prototype,"quick",void 0),t([i({type:Boolean,reflect:!0}),s((function(t){this.mdcFoundation&&(t?this.mdcFoundation.open():this.mdcFoundation.close())}))],G.prototype,"open",void 0),t([i({type:String}),s((function(t){this.mdcFoundation&&(t?this.mdcFoundation.setAnchorCorner(B[t]):this.mdcFoundation.setAnchorCorner(B.TOP_START))}))],G.prototype,"corner",void 0);
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
const j=a`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}:host(:not([open])){display:none}.fullwidth{width:100%}`
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
*/;let K=class extends G{};K.styles=j,K=t([d("mwc-menu-surface")],K);
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
var V,q={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},X={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list",SELECTED_EVENT:"MDCMenu:selected"},W={FOCUS_ROOT_INDEX:-1};!function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"}(V||(V={}));
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
var Q=function(t){function e(i){var s=t.call(this,x({},e.defaultAdapter,i))||this;return s.closeAnimationEndTimerId_=0,s.defaultFocusState_=V.LIST_ROOT,s}return g(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return q},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return X},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return W},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter_.closeSurface()},e.prototype.handleKeydown=function(t){var e=t.key,i=t.keyCode;("Tab"===e||9===i)&&this.adapter_.closeSurface(!0)},e.prototype.handleItemAction=function(t){var e=this,i=this.adapter_.getElementIndex(t);i<0||(this.adapter_.notifySelected({index:i}),this.adapter_.closeSurface(),this.closeAnimationEndTimerId_=setTimeout((function(){var i=e.adapter_.getElementIndex(t);e.adapter_.isSelectableItemAtIndex(i)&&e.setSelectedIndex(i)}),U.numbers.TRANSITION_CLOSE_DURATION))},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState_){case V.FIRST_ITEM:this.adapter_.focusItemAtIndex(0);break;case V.LAST_ITEM:this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount()-1);break;case V.NONE:break;default:this.adapter_.focusListRoot()}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState_=t},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex_(t),!this.adapter_.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var e=this.adapter_.getSelectedSiblingOfItemAtIndex(t);e>=0&&(this.adapter_.removeAttributeFromElementAtIndex(e,X.ARIA_CHECKED_ATTR),this.adapter_.removeClassFromElementAtIndex(e,q.MENU_SELECTED_LIST_ITEM)),this.adapter_.addClassToElementAtIndex(t,q.MENU_SELECTED_LIST_ITEM),this.adapter_.addAttributeToElementAtIndex(t,X.ARIA_CHECKED_ATTR,"true")},e.prototype.setEnabled=function(t,e){this.validatedIndex_(t),e?(this.adapter_.removeClassFromElementAtIndex(t,T),this.adapter_.addAttributeToElementAtIndex(t,X.ARIA_DISABLED_ATTR,"false")):(this.adapter_.addClassToElementAtIndex(t,T),this.adapter_.addAttributeToElementAtIndex(t,X.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex_=function(t){var e=this.adapter_.getMenuItemCount();if(!(t>=0&&t<e))throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(c);class Y extends h{constructor(){super(...arguments),this.mdcFoundationClass=Q,this.listElement_=null,this.anchor=null,this.open=!1,this.quick=!1,this.wrapFocus=!1,this.innerRole="menu",this.corner="TOP_START",this.x=null,this.y=null,this.absolute=!1,this.multi=!1,this.activatable=!1,this.fixed=!1,this.forceGroupSelection=!1,this.fullwidth=!1,this.defaultFocus="LIST_ROOT"}get listElement(){return this.listElement_?this.listElement_:(this.listElement_=this.renderRoot.querySelector("mwc-list"),this.listElement_)}get items(){const t=this.listElement;return t?t.items:[]}get index(){const t=this.listElement;return t?t.index:-1}get selected(){const t=this.listElement;return t?t.selected:null}render(){const t="menu"===this.innerRole?"menuitem":"option";return n`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
          <mwc-list
            rootTabbable
            .innerRole=${this.innerRole}
            .multi=${this.multi}
            class="mdc-list"
            .itemRoles=${t}
            .wrapFocus=${this.wrapFocus}
            .activatable=${this.activatable}
            @action=${this.onAction}>
          <slot></slot>
        </mwc-list>
      </mwc-menu-surface>`}createAdapter(){return{addClassToElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const s=i.items[t];s&&("mdc-menu-item--selected"===e?this.forceGroupSelection&&!s.selected&&i.toggle(t,!0):s.classList.add(e))},removeClassFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const s=i.items[t];s&&("mdc-menu-item--selected"===e?s.selected&&i.toggle(t,!1):s.classList.remove(e))},addAttributeToElementAtIndex:(t,e,i)=>{const s=this.listElement;if(!s)return;const o=s.items[t];o&&o.setAttribute(e,i)},removeAttributeFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const s=i.items[t];s&&s.removeAttribute(e)},elementContainsClass:(t,e)=>t.classList.contains(e),closeSurface:()=>{this.open=!1},getElementIndex:t=>{const e=this.listElement;return e?e.items.indexOf(t):-1},notifySelected:()=>{},getMenuItemCount:()=>{const t=this.listElement;return t?t.items.length:0},focusItemAtIndex:t=>{const e=this.listElement;if(!e)return;const i=e.items[t];i&&i.focus()},focusListRoot:()=>{this.listElement&&this.listElement.focus()},getSelectedSiblingOfItemAtIndex:t=>{const e=this.listElement;if(!e)return-1;const i=e.items[t];if(!i||!i.group)return-1;for(let s=0;s<e.items.length;s++){if(s===t)continue;const o=e.items[s];if(o.selected&&o.group===i.group)return s}return-1},isSelectableItemAtIndex:t=>{const e=this.listElement;if(!e)return!1;const i=e.items[t];return!!i&&i.hasAttribute("group")}}}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onAction(t){const e=this.listElement;if(this.mdcFoundation&&e){const i=t.detail.index,s=e.items[i];s&&this.mdcFoundation.handleItemAction(s)}}onOpened(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}onClosed(){this.open=!1}select(t){const e=this.listElement;e&&e.select(t)}close(){this.open=!1}show(){this.open=!0}layout(t=!0){const e=this.listElement;e&&e.layout(t)}}t([e(".mdc-menu")],Y.prototype,"mdcRoot",void 0),t([e("slot")],Y.prototype,"slotElement",void 0),t([i({type:Object})],Y.prototype,"anchor",void 0),t([i({type:Boolean,reflect:!0})],Y.prototype,"open",void 0),t([i({type:Boolean})],Y.prototype,"quick",void 0),t([i({type:Boolean})],Y.prototype,"wrapFocus",void 0),t([i({type:String})],Y.prototype,"innerRole",void 0),t([i({type:String})],Y.prototype,"corner",void 0),t([i({type:Number})],Y.prototype,"x",void 0),t([i({type:Number})],Y.prototype,"y",void 0),t([i({type:Boolean})],Y.prototype,"absolute",void 0),t([i({type:Boolean})],Y.prototype,"multi",void 0),t([i({type:Boolean})],Y.prototype,"activatable",void 0),t([i({type:Boolean})],Y.prototype,"fixed",void 0),t([i({type:Boolean})],Y.prototype,"forceGroupSelection",void 0),t([i({type:Boolean})],Y.prototype,"fullwidth",void 0),t([i({type:String}),s((function(t){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(V[t])}))],Y.prototype,"defaultFocus",void 0);
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
const Z=a`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}mwc-list{max-width:var(--mdc-menu-max-width, auto);min-width:var(--mdc-menu-min-width, auto)}`
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
*/;let J=class extends Y{};J.styles=Z,J=t([d("mwc-menu")],J);export{B as C};
