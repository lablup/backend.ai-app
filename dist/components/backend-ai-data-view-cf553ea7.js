import{_ as __decorate,p as property,c as customElement,B as BackendAIPage,d as BackendAiStyles,I as IronFlex,a as IronFlexAlignment,e as IronPositioning,b as css,h as html$1,t as translate,g as get,W as render,f as BackendAIPainKiller}from"./backend-ai-console-125e4b92.js";import{u as unsafeHTML}from"./unsafe-html-b5824a3e.js";import"./radio-behavior-4c6affa7.js";import{h as html,E as ElementMixin,T as ThemableMixin,a as PolymerElement,C as ControlStateMixin,b as GestureEventListeners,c as addListener,r as resetMouseCanceller}from"./vaadin-grid-sorter-f0db9e83.js";import"./vaadin-grid-selection-column-056a9949.js";import"./vaadin-grid-sort-column-cab34161.js";import"./mwc-tab-bar-bb95bcb1.js";import"./tab-group-c0d24b3d.js";import"./select-fb9b99dc.js";import"./field-button-01c017ac.js";const $_documentContainer=html`<dom-module id="lumo-progress-bar" theme-for="vaadin-progress-bar">
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
const ProgressMixin=e=>class extends e{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,t,o){const r=this._normalizeValue(e,t,o);this.style.setProperty("--vaadin-progress-value",r),this.updateStyles({"--vaadin-progress-value":String(r)})}_valueChanged(e,t){this.setAttribute("aria-valuenow",e)}_minChanged(e,t){this.setAttribute("aria-valuemin",e)}_maxChanged(e,t){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,t,o){let r;return e||0==e?t>=o?r=1:(r=(e-t)/(o-t),r=Math.min(Math.max(r,0),1)):r=0,r}}
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
`}static get is(){return"vaadin-progress-bar"}static get version(){return"1.3.0"}}customElements.define(ProgressBarElement.is,ProgressBarElement);const $_documentContainer$1=html`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="prefix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      :host([dir="rtl"]) [part="suffix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      :host([dir="rtl"][theme~="icon"]) [part="prefix"],
      :host([dir="rtl"][theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$1.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class ButtonElement extends(ElementMixin(ControlStateMixin(ThemableMixin(GestureEventListeners(PolymerElement))))){static get template(){return html`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.4.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners(),window.ShadyDOM&&window.ShadyDOM.flush()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){addListener(this,"down",(()=>!this.disabled&&this.setAttribute("active",""))),addListener(this,"up",(()=>this.removeAttribute("active"))),this.addEventListener("keydown",(e=>!this.disabled&&[13,32].indexOf(e.keyCode)>=0&&this.setAttribute("active",""))),this.addEventListener("keyup",(()=>this.removeAttribute("active"))),this.addEventListener("blur",(()=>this.removeAttribute("active")))}get focusElement(){return this.$.button}}customElements.define(ButtonElement.is,ButtonElement);const $_documentContainer$2=html`<dom-module id="lumo-upload" theme-for="vaadin-upload">
  <template>
    <style>
      :host {
        line-height: var(--lumo-line-height-m);
      }

      :host(:not([nodrop])) {
        overflow: hidden;
        border: 1px dashed var(--lumo-contrast-20pct);
        border-radius: var(--lumo-border-radius);
        padding: var(--lumo-space-m);
        transition: background-color 0.6s, border-color 0.6s;
      }

      [part="primary-buttons"] > * {
        display: inline-block;
        white-space: nowrap;
      }

      [part="drop-label"] {
        display: inline-block;
        white-space: normal;
        padding: 0 var(--lumo-space-s);
        color: var(--lumo-secondary-text-color);
        font-family: var(--lumo-font-family);
      }

      :host([dragover-valid]) {
        border-color: var(--lumo-primary-color-50pct);
        background: var(--lumo-primary-color-10pct);
        transition: background-color 0.1s, border-color 0.1s;
      }

      :host([dragover-valid]) [part="drop-label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="drop-label-icon"] {
        display: inline-block;
      }

      [part="drop-label-icon"]::before {
        content: var(--lumo-icons-upload);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        vertical-align: -.25em;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-upload-file" theme-for="vaadin-upload-file">
  <template>
    <style include="lumo-field-button">
      :host {
        padding: var(--lumo-space-s) 0;
      }

      :host(:not(:first-child)) {
        border-top: 1px solid var(--lumo-contrast-10pct);
      }

      [part="row"] {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
      }

      [part="status"],
      [part="error"] {
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-s);
      }

      [part="info"] {
        display: flex;
        align-items: baseline;
        flex: auto;
      }

      [part="meta"] {
        width: 0.001px;
        flex: 1 1 auto;
      }

      [part="name"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="commands"] {
        display: flex;
        align-items: baseline;
        flex: none;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        margin-right: var(--lumo-space-xs);
      }

      /* When both icons are hidden, let us keep space for one */
      [part="done-icon"][hidden] + [part="warning-icon"][hidden] {
        display: block !important;
        visibility: hidden;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        font-size: var(--lumo-icon-size-m);
        font-family: 'lumo-icons';
        line-height: 1;
      }

      [part="start-button"],
      [part="retry-button"],
      [part="clear-button"] {
        flex: none;
        margin-left: var(--lumo-space-xs);
      }

      [part="done-icon"]::before,
      [part="warning-icon"]::before,
      [part="start-button"]::before,
      [part="retry-button"]::before,
      [part="clear-button"]::before {
        vertical-align: -.25em;
      }

      [part="done-icon"]::before {
        content: var(--lumo-icons-checkmark);
        color: var(--lumo-primary-text-color);
      }

      [part="warning-icon"]::before {
        content: var(--lumo-icons-error);
        color: var(--lumo-error-text-color);
      }

      [part="start-button"]::before {
        content: var(--lumo-icons-play);
      }

      [part="retry-button"]::before {
        content: var(--lumo-icons-reload);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      [part="error"] {
        color: var(--lumo-error-text-color);
      }

      [part="progress"] {
        width: auto;
        margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
        margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
      }

      [part="progress"][complete],
      [part="progress"][error] {
        display: none;
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$2.content);const $_documentContainer$3=document.createElement("template");$_documentContainer$3.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-upload-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild($_documentContainer$3.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class UploadFileElement extends(ThemableMixin(PolymerElement)){static get template(){return html`
    <style>
      :host {
        display: block;
      }

      [hidden] {
        display: none;
      }
    </style>

    <div part="row">
      <div part="info">
        <div part="done-icon" hidden\$="[[!file.complete]]"></div>
        <div part="warning-icon" hidden\$="[[!file.error]]"></div>

        <div part="meta">
          <div part="name" id="name">[[file.name]]</div>
          <div part="status" hidden\$="[[!file.status]]" id="status">[[file.status]]</div>
          <div part="error" id="error" hidden\$="[[!file.error]]">[[file.error]]</div>
        </div>
      </div>
      <div part="commands">
        <div part="start-button" file-event="file-start" on-click="_fireFileEvent" hidden\$="[[!file.held]]"></div>
        <div part="retry-button" file-event="file-retry" on-click="_fireFileEvent" hidden\$="[[!file.error]]"></div>
        <div part="clear-button" file-event="file-abort" on-click="_fireFileEvent"></div>
      </div>
    </div>

    <vaadin-progress-bar part="progress" id="progress" value\$="[[_formatProgressValue(file.progress)]]" error\$="[[file.error]]" indeterminate\$="[[file.indeterminate]]" uploading\$="[[file.uploading]]" complete\$="[[file.complete]]">
    </vaadin-progress-bar>
`}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object}}static get observers(){return["_fileAborted(file.abort)",'_toggleHostAttribute(file.error, "error")','_toggleHostAttribute(file.indeterminate, "indeterminate")','_toggleHostAttribute(file.uploading, "uploading")','_toggleHostAttribute(file.complete, "complete")']}_fileAborted(e){e&&this._remove()}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(e){return e/100}_fireFileEvent(e){return e.preventDefault(),this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(e,t){const o=Boolean(e);this.hasAttribute(t)!==o&&(o?this.setAttribute(t,""):this.removeAttribute(t))}}customElements.define(UploadFileElement.is,UploadFileElement);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class UploadElement extends(ElementMixin(ThemableMixin(PolymerElement))){static get template(){return html`
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }
    </style>

    <div part="primary-buttons">
      <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
        <slot name="add-button">
          <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
            [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
          </vaadin-button>
        </slot>
      </div>
      <div part="drop-label" hidden\$="[[nodrop]]" id="dropLabelContainer">
        <slot name="drop-label-icon">
          <div part="drop-label-icon"></div>
        </slot>
        <slot name="drop-label" id="dropLabel">
          [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]]
        </slot>
      </div>
    </div>
    <slot name="file-list">
      <div id="fileList" part="file-list">
        <template is="dom-repeat" items="[[files]]" as="file">
          <vaadin-upload-file file="[[file]]"></vaadin-upload-file>
        </template>
      </div>
    </slot>
    <slot></slot>
    <input type="file" id="fileInput" on-change="_onFileInputChange" hidden="" accept\$="{{accept}}" multiple\$="[[_isMultiple(maxFiles)]]" capture\$="[[capture]]">
`}static get is(){return"vaadin-upload"}static get version(){return"4.4.0"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:function(){try{return!!document.createEvent("TouchEvent")}catch(e){return!1}}},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:function(){return[]}},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value:function(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},cancel:"Cancel",error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled.",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Server Unavailable",unexpectedServerError:"Unexpected Server Error",forbidden:"Forbidden"}},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}}}}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-remove",this._onFileRemove.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this))}_formatSize(e){if("function"==typeof this.i18n.formatSize)return this.i18n.formatSize(e);const t=this.i18n.units.sizeBase||1e3,o=~~(Math.log(e)/Math.log(t)),r=Math.max(0,Math.min(3,o-1));return parseFloat((e/Math.pow(t,o)).toFixed(r))+" "+this.i18n.units.size[o]}_splitTimeByUnits(e){const t=[60,60,24,1/0],o=[0];for(var r=0;r<t.length&&e>0;r++)o[r]=e%t[r],e=Math.floor(e/t[r]);return o}_formatTime(e,t){if("function"==typeof this.i18n.formatTime)return this.i18n.formatTime(e,t);for(;t.length<3;)t.push(0);return t.reverse().map((e=>(e<10?"0":"")+e)).join(":")}_formatFileProgress(e){return e.totalStr+": "+e.progress+"% ("+(e.loaded>0?this.i18n.uploading.remainingTime.prefix+e.remainingStr:this.i18n.uploading.remainingTime.unknown)+")"}_maxFilesAdded(e,t){return e>=0&&t>=e}_onDragover(e){e.preventDefault(),this.nodrop||this._dragover||(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(e){this.nodrop||(e.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(e.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(e){if("string"==typeof this.headers)try{this.headers=JSON.parse(this.headers)}catch(e){this.headers=void 0}for(var t in this.headers)e.setRequestHeader(t,this.headers[t]);this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,t,o,r){e.elapsed=r,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(r*(t/o-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(t/r/1024),e.totalStr=this._formatSize(t),e.loadedStr=this._formatSize(o),e.status=this._formatFileProgress(e)}uploadFiles(e){e&&!Array.isArray(e)&&(e=[e]),e=(e=e||this.files).filter((e=>!e.complete)),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(e.uploading)return;const t=Date.now(),o=e.xhr=this._createXhr(e);let r,i;o.upload.onprogress=a=>{clearTimeout(r),i=Date.now();const n=(i-t)/1e3,l=a.loaded,s=a.total,d=~~(l/s*100);e.loaded=l,e.progress=d,e.indeterminate=l<=0||l>=s,e.error?e.indeterminate=e.status=void 0:e.abort||(d<100?(this._setStatus(e,s,l,n),r=setTimeout((()=>{e.status=this.i18n.uploading.status.stalled,this._notifyFileChanges(e)}),2e3)):(e.loadedStr=e.totalStr,e.status=this.i18n.uploading.status.processing,e.uploading=!1)),this._notifyFileChanges(e),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:o}}))},o.onreadystatechange=()=>{if(4==o.readyState){if(clearTimeout(r),e.indeterminate=e.uploading=!1,e.abort)return void this._notifyFileChanges(e);e.status="";if(!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:o},cancelable:!0})))return;0===o.status?e.error=this.i18n.uploading.error.serverUnavailable:o.status>=500?e.error=this.i18n.uploading.error.unexpectedServerError:o.status>=400&&(e.error=this.i18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent("upload-"+(e.error?"error":"success"),{detail:{file:e,xhr:o}})),this._notifyFileChanges(e)}};const a=new FormData;e.uploadTarget=e.uploadTarget||this.target||"",e.formDataName=this.formDataName;if(!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:o},cancelable:!0})))return;a.append(e.formDataName,e,e.name),o.open(this.method,e.uploadTarget,!0),this._configureXhr(o),e.status=this.i18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,o.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:o}})),this._notifyFileChanges(e)};this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:e,xhr:o,formData:a},cancelable:!0}))&&o.send(a)}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&this._uploadFile(e)}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._notifyFileChanges(e))}_notifyFileChanges(e){var t="files."+this.files.indexOf(e)+".";for(var o in e)e.hasOwnProperty(o)&&this.notifyPath(t+o,e[o])}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.tooManyFiles}}));if(this.maxFileSize>=0&&e.size>this.maxFileSize)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.fileIsTooBig}}));const t=e.name.match(/\.[^\.]*$|$/)[0],o=new RegExp("^("+this.accept.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")+")$","i");!this.accept||o.test(e.type)||o.test(t)?(e.loaded=0,e.held=!0,e.status=this.i18n.uploading.status.held,this.unshift("files",e),this.noAuto||this._uploadFile(e)):this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.incorrectFileType}}))}_removeFile(e){this.files.indexOf(e)>-1&&this.splice("files",this.files.indexOf(e),1)}_onAddFilesTouchEnd(e){e.preventDefault(),this.__resetMouseCanceller(),this._onAddFilesClick()}__resetMouseCanceller(){resetMouseCanceller()}_onAddFilesClick(){this.maxFilesReached||(this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileRemove(e){this._removeFile(e.detail.file)}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,t){return 1==e?t.one:t.many}_isMultiple(e){return 1!=e}}customElements.define(UploadElement.is,UploadElement),function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).tus=e()}((function(){var define;return function e(t,o,r){function i(n,l){if(!o[n]){if(!t[n]){var s="function"==typeof require&&require;if(!l&&s)return s(n,!0);if(a)return a(n,!0);var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}var c=o[n]={exports:{}};t[n][0].call(c.exports,(function(e){return i(t[n][1][e]||e)}),c,c.exports,e,t,o,r)}return o[n].exports}for(var a="function"==typeof require&&require,n=0;n<r.length;n++)i(r[n]);return i}({1:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=l(e("./isReactNative")),i=l(e("./uriToBlob")),a=l(e("./isCordova")),n=l(e("./readAsByteArray"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,o){return t&&d(e.prototype,t),o&&d(e,o),e}var u=function(){function e(t){s(this,e),this._file=t,this.size=t.size}return c(e,[{key:"slice",value:function(e,t){if((0,a.default)())return(0,n.default)(this._file.slice(e,t));var o=this._file.slice(e,t);return Promise.resolve({value:o})}},{key:"close",value:function(){}}]),e}(),p=function(){function e(t,o){s(this,e),this._chunkSize=o,this._buffer=void 0,this._bufferOffset=0,this._reader=t,this._done=!1}return c(e,[{key:"slice",value:function(e,t){return e<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(e,t)}},{key:"_readUntilEnoughDataOrDone",value:function(e,t){var o=this,r=t<=this._bufferOffset+h(this._buffer);if(this._done||r){var i=this._getDataFromBuffer(e,t),a=null==i&&this._done;return Promise.resolve({value:i,done:a})}return this._reader.read().then((function(r){var i=r.value;return r.done?o._done=!0:void 0===o._buffer?o._buffer=i:o._buffer=function(e,t){if(e.concat)return e.concat(t);if(e instanceof Blob)return new Blob([e,t],{type:e.type});if(e.set){var o=new e.constructor(e.length+t.length);return o.set(e),o.set(t,e.length),o}throw new Error("Unknown data type")}(o._buffer,i),o._readUntilEnoughDataOrDone(e,t)}))}},{key:"_getDataFromBuffer",value:function(e,t){e>this._bufferOffset&&(this._buffer=this._buffer.slice(e-this._bufferOffset),this._bufferOffset=e);var o=0===h(this._buffer);return this._done&&o?null:this._buffer.slice(0,t-e)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}]),e}();function h(e){return void 0===e?0:void 0!==e.size?e.size:e.length}var f=function(){function e(){s(this,e)}return c(e,[{key:"openFile",value:function(e,t){return(0,r.default)()&&e&&void 0!==e.uri?(0,i.default)(e.uri).then((function(e){return new u(e)})).catch((function(e){throw new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. "+e)})):"function"==typeof e.slice&&void 0!==e.size?Promise.resolve(new u(e)):"function"==typeof e.read?(t=+t,isFinite(t)?Promise.resolve(new p(e,t)):Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option"))):Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment"))}}]),e}();o.default=f},{"./isCordova":5,"./isReactNative":6,"./readAsByteArray":7,"./uriToBlob":8}],2:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){return(0,i.default)()?Promise.resolve(function(e,t){var o=e.exif?function(e){var t=0;if(0===e.length)return t;for(var o=0;o<e.length;o++){t=(t<<5)-t+e.charCodeAt(o),t&=t}return t}(JSON.stringify(e.exif)):"noexif";return["tus-rn",e.name||"noname",e.size||"nosize",o,t.endpoint].join("/")}(e,t)):Promise.resolve(["tus-br",e.name,e.type,e.size,e.lastModified,t.endpoint].join("-"))};var r,i=(r=e("./isReactNative"))&&r.__esModule?r:{default:r}},{"./isReactNative":6}],3:[function(e,t,o){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,o){return t&&i(e.prototype,t),o&&i(e,o),e}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=function(){function e(){r(this,e)}return a(e,[{key:"createRequest",value:function(e,t){return new l(e,t)}},{key:"getName",value:function(){return"XHRHttpStack"}}]),e}();o.default=n;var l=function(){function e(t,o){r(this,e),this._xhr=new XMLHttpRequest,this._xhr.open(t,o,!0),this._method=t,this._url=o,this._headers={}}return a(e,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(e,t){this._xhr.setRequestHeader(e,t),this._headers[e]=t}},{key:"getHeader",value:function(e){return this._headers[e]}},{key:"setProgressHandler",value:function(e){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(t){t.lengthComputable&&e(t.loaded)})}},{key:"send",value:function(e){var t=this,o=0<arguments.length&&void 0!==e?e:null;return new Promise((function(e,r){t._xhr.onload=function(){e(new s(t._xhr))},t._xhr.onerror=function(e){r(e)},t._xhr.send(o)}))}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}]),e}(),s=function(){function e(t){r(this,e),this._xhr=t}return a(e,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(e){return this._xhr.getResponseHeader(e)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}]),e}()},{}],4:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"enableDebugLog",{enumerable:!0,get:function(){return a.enableDebugLog}}),Object.defineProperty(o,"canStoreURLs",{enumerable:!0,get:function(){return n.canStoreURLs}}),o.isSupported=o.defaultOptions=o.Upload=void 0;var r=c(e("../upload")),i=c(e("../noopUrlStorage")),a=e("../logger"),n=e("./urlStorage"),l=c(e("./httpStack")),s=c(e("./fileReader")),d=c(e("./fingerprint"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){var o,r=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)),r}function g(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?m(Object(o),!0).forEach((function(t){b(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function b(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var v=g({},r.default.defaultOptions,{httpStack:new l.default,fileReader:new s.default,urlStorage:n.canStoreURLs?new n.WebStorageUrlStorage:new i.default,fingerprint:d.default});o.defaultOptions=v;var A=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,r.default);var e,t,o=function(e){return function(){var t,o,r,i=f(e);return o=this,!(r=function(){if("undefined"!=typeof Reflect&&Reflect.construct&&!Reflect.construct.sham){if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),1}catch(e){return}}}()?(t=f(this).constructor,Reflect.construct(i,arguments,t)):i.apply(this,arguments))||"object"!==u(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(o):r}}(i);function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),t=g({},v,{},t),o.call(this,e,t)}return e=i,t=[{key:"terminate",value:function(e,t,o){return t=g({},v,{},t),r.default.terminate(e,t,o)}}],null&&p(e.prototype,null),t&&p(e,t),i}();o.Upload=A;var y=window,_=y.XMLHttpRequest,w=y.Blob,x=_&&w&&"function"==typeof w.prototype.slice;o.isSupported=x},{"../logger":11,"../noopUrlStorage":12,"../upload":13,"./fileReader":1,"./fingerprint":2,"./httpStack":3,"./urlStorage":9}],5:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,o.default=function(){return"undefined"!=typeof window&&(void 0!==window.PhoneGap||void 0!==window.Cordova||void 0!==window.cordova)}},{}],6:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,o.default=function(){return"undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase()}},{}],7:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return new Promise((function(t,o){var r=new FileReader;r.onload=function(){var e=new Uint8Array(r.result);t({value:e})},r.onerror=function(e){o(e)},r.readAsArrayBuffer(e)}))}},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return new Promise((function(t,o){var r=new XMLHttpRequest;r.responseType="blob",r.onload=function(){var e=r.response;t(e)},r.onerror=function(e){o(e)},r.open("GET",e),r.send()}))}},{}],9:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.WebStorageUrlStorage=o.canStoreURLs=void 0;var r=!1;try{r="localStorage"in window;var i="tusSupport";localStorage.setItem(i,localStorage.getItem(i))}catch(e){if(e.code!==e.SECURITY_ERR&&e.code!==e.QUOTA_EXCEEDED_ERR)throw e;r=!1}o.canStoreURLs=r;var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t;return(t=[{key:"findAllUploads",value:function(){var e=this._findEntries("tus::");return Promise.resolve(e)}},{key:"findUploadsByFingerprint",value:function(e){var t=this._findEntries("tus::".concat(e,"::"));return Promise.resolve(t)}},{key:"removeUpload",value:function(e){return localStorage.removeItem(e),Promise.resolve()}},{key:"addUpload",value:function(e,t){var o=Math.round(1e12*Math.random()),r="tus::".concat(e,"::").concat(o);return localStorage.setItem(r,JSON.stringify(t)),Promise.resolve(r)}},{key:"_findEntries",value:function(e){for(var t=[],o=0;o<localStorage.length;o++){var r=localStorage.key(o);if(0===r.indexOf(e))try{var i=JSON.parse(localStorage.getItem(r));i.urlStorageKey=r,t.push(i)}catch(e){}}return t}}])&&function(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}();o.WebStorageUrlStorage=a},{}],10:[function(e,t,o){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(o=e,-1===Function.toString.call(o).indexOf("[native code]")))return e;var o;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return a(e,arguments,s(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,e)})(e)}function a(e,t,o){return(a=n()?Reflect.construct:function(e,t,o){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return o&&l(i,o.prototype),i}).apply(null,arguments)}function n(){if("undefined"!=typeof Reflect&&Reflect.construct&&!Reflect.construct.sham){if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),1}catch(e){return}}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var d=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,i(Error));var e=function(e){return function(){var t,o,i,a=s(e);return o=this,!(i=n()?(t=s(this).constructor,Reflect.construct(a,arguments,t)):a.apply(this,arguments))||"object"!==r(i)&&"function"!=typeof i?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(o):i}}(t);function t(o){var r,i,a,n,l,s,d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,u=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=e.call(this,o)).originalRequest=c,r.originalResponse=u,null!=(r.causingError=d)&&(o+=", caused by ".concat(d.toString())),null!=c&&(i=c.getHeader("X-Request-ID")||"n/a",a=c.getMethod(),n=c.getURL(),l=u?u.getStatus():"n/a",s=u?u.getBody()||"":"n/a",o+=", originated from request (method: ".concat(a,", url: ").concat(n,", response code: ").concat(l,", response text: ").concat(s,", request id: ").concat(i,")")),r.message=o,r}return t}();o.default=d},{}],11:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.enableDebugLog=function(){r=!0};var r=!(o.log=function(e){r&&console.log(e)})},{}],12:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t;return(t=[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(){return Promise.resolve([])}},{key:"removeUpload",value:function(){return Promise.resolve()}},{key:"addUpload",value:function(){return Promise.resolve(null)}}])&&function(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}();o.default=r},{}],13:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=s(e("./error")),i=s(e("./uuid")),a=e("js-base64"),n=s(e("url-parse")),l=e("./logger");function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var o,r=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)),r}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach((function(t){u(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),"resume"in o&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=o,this._urlStorage=this.options.urlStorage,this.file=t,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}var t,o,i;return t=e,i=[{key:"terminate",value:function(t,o,i){var a=1<arguments.length&&void 0!==o?o:{};if("function"==typeof a||"function"==typeof(2<arguments.length?i:void 0))throw new Error("tus: the terminate function does not accept a callback since v2 anymore; please use the returned Promise instead");var n=g("DELETE",t,a);return n.send().then((function(e){if(204!==e.getStatus())throw new r.default("tus: unexpected response while terminating upload",null,n,e)})).catch((function(o){if(o instanceof r.default||(o=new r.default("tus: failed to terminate upload",o,n,null)),!b(o,0,a))throw o;var i=a.retryDelays[0],l=a.retryDelays.slice(1),s=c({},a,{retryDelays:l});return new Promise((function(e){return setTimeout(e,i)})).then((function(){return e.terminate(t,s)}))}))}}],(o=[{key:"findPreviousUploads",value:function(){var e=this;return this.options.fingerprint(this.file,this.options).then((function(t){return e._urlStorage.findUploadsByFingerprint(t)}))}},{key:"resumeFromPreviousUpload",value:function(e){this.url=e.uploadUrl||null,this._parallelUploadUrls=e.parallelUploadUrls||null,this._urlStorageKey=e.urlStorageKey}},{key:"start",value:function(){var e,t=this,o=this.file;o?this.options.endpoint||this.options.uploadUrl?null==(e=this.options.retryDelays)||"[object Array]"===Object.prototype.toString.call(e)?(1<this.options.parallelUploads&&["uploadUrl","uploadSize","uploadLengthDeferred"].forEach((function(e){t.options[e]&&t._emitError(new Error("tus: cannot use the ".concat(e," option when parallelUploads is enabled")))})),this.options.fingerprint(o,this.options).then((function(e){return null==e?(0,l.log)("No fingerprint was calculated meaning that the upload cannot be stored in the URL storage."):(0,l.log)("Calculated fingerprint: ".concat(e)),t._fingerprint=e,t._source?t._source:t.options.fileReader.openFile(o,t.options.chunkSize)})).then((function(e){t._source=e,1<t.options.parallelUploads||null!=t._parallelUploadUrls?t._startParallelUpload():t._startSingleUpload()})).catch((function(e){t._emitError(e)}))):this._emitError(new Error("tus: the `retryDelays` option must either be an array or null")):this._emitError(new Error("tus: neither an endpoint or an upload URL is provided")):this._emitError(new Error("tus: no file or stream to upload provided"))}},{key:"_startParallelUpload",value:function(){var t=this,o=this._size=this._source.size,r=0;this._parallelUploads=[];var i=null!=this._parallelUploadUrls?this._parallelUploadUrls.length:this.options.parallelUploads,a=function(e,t,o){for(var r=Math.floor(e/t),i=[],a=0;a<t;a++)i.push({start:r*a,end:r*(a+1)});return i[t-1].end=e,o&&i.forEach((function(e,t){e.uploadUrl=o[t]||null})),i}(this._source.size,i,this._parallelUploadUrls);this._parallelUploadUrls=new Array(a.length);var n,s=a.map((function(i,n){var l=0;return t._source.slice(i.start,i.end).then((function(s){var d=s.value;return new Promise((function(s,u){var p=c({},t.options,{uploadUrl:i.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,metadata:{},headers:c({},t.options.headers,{"Upload-Concat":"partial"}),onSuccess:s,onError:u,onProgress:function(e){r=r-l+e,l=e,t._emitProgress(r,o)},_onUploadUrlAvailable:function(){t._parallelUploadUrls[n]=h.url,t._parallelUploadUrls.filter((function(e){return!!e})).length===a.length&&t._saveUploadInUrlStorage()}}),h=new e(d,p);h.start(),t._parallelUploads.push(h)}))}))}));Promise.all(s).then((function(){(n=t._openRequest("POST",t.options.endpoint)).setHeader("Upload-Concat","final;".concat(t._parallelUploadUrls.join(" ")));var e=f(t.options.metadata);return""!==e&&n.setHeader("Upload-Metadata",e),t._sendRequest(n,null)})).then((function(e){var o;m(e.getStatus(),200)?null!=(o=e.getHeader("Location"))?(t.url=v(t.options.endpoint,o),(0,l.log)("Created upload at ".concat(t.url)),t._emitSuccess()):t._emitHttpError(n,e,"tus: invalid or missing Location header"):t._emitHttpError(n,e,"tus: unexpected response while creating upload")})).catch((function(e){t._emitError(e)}))}},{key:"_startSingleUpload",value:function(){if(this.options.uploadLengthDeferred)this._size=null;else if(null!=this.options.uploadSize){if(this._size=+this.options.uploadSize,isNaN(this._size))return void this._emitError(new Error("tus: cannot convert `uploadSize` option into a number"))}else if(this._size=this._source.size,null==this._size)return void this._emitError(new Error("tus: cannot automatically derive upload's size from input and must be specified manually using the `uploadSize` option"));return this._aborted=!1,null!=this.url?((0,l.log)("Resuming upload from previous URL: ".concat(this.url)),void this._resumeUpload()):null!=this.options.uploadUrl?((0,l.log)("Resuming upload from provided URL: ".concat(this.options.url)),this.url=this.options.uploadUrl,void this._resumeUpload()):((0,l.log)("Creating a new upload"),void this._createUpload())}},{key:"abort",value:function(t,o){var r=this;if("function"==typeof o)throw new Error("tus: the abort function does not accept a callback since v2 anymore; please use the returned Promise instead");return null!=this._parallelUploads&&this._parallelUploads.forEach((function(e){e.abort(t)})),null!==this._req&&(this._req.abort(),this._source.close()),this._aborted=!0,null!=this._retryTimeout&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),t&&null!=this.url?e.terminate(this.url,this.options).then((function(){return r._removeFromUrlStorage()})):Promise.resolve()}},{key:"_emitHttpError",value:function(e,t,o,i){this._emitError(new r.default(o,i,e,t))}},{key:"_emitError",value:function(e){var t=this;if(!this._aborted){if(null!=this.options.retryDelays&&(null!=this._offset&&this._offset>this._offsetBeforeRetry&&(this._retryAttempt=0),b(e,this._retryAttempt,this.options))){var o=this.options.retryDelays[this._retryAttempt++];return this._offsetBeforeRetry=this._offset,void(this._retryTimeout=setTimeout((function(){t.start()}),o))}if("function"!=typeof this.options.onError)throw e;this.options.onError(e)}}},{key:"_emitSuccess",value:function(){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),"function"==typeof this.options.onSuccess&&this.options.onSuccess()}},{key:"_emitProgress",value:function(e,t){"function"==typeof this.options.onProgress&&this.options.onProgress(e,t)}},{key:"_emitChunkComplete",value:function(e,t,o){"function"==typeof this.options.onChunkComplete&&this.options.onChunkComplete(e,t,o)}},{key:"_createUpload",value:function(){var e,t,o=this;this.options.endpoint?(e=this._openRequest("POST",this.options.endpoint),this.options.uploadLengthDeferred?e.setHeader("Upload-Defer-Length",1):e.setHeader("Upload-Length",this._size),""!==(t=f(this.options.metadata))&&e.setHeader("Upload-Metadata",t),(this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,this._addChunkToRequest(e)):this._sendRequest(e,null)).then((function(t){if(m(t.getStatus(),200)){var r=t.getHeader("Location");if(null!=r){if(o.url=v(o.options.endpoint,r),(0,l.log)("Created upload at ".concat(o.url)),"function"==typeof o.options._onUploadUrlAvailable&&o.options._onUploadUrlAvailable(),0===o._size)return o._emitSuccess(),void o._source.close();o._saveUploadInUrlStorage(),o.options.uploadDataDuringCreation?o._handleUploadResponse(e,t):(o._offset=0,o._performUpload())}else o._emitHttpError(e,t,"tus: invalid or missing Location header")}else o._emitHttpError(e,t,"tus: unexpected response while creating upload")})).catch((function(t){o._emitHttpError(e,null,"tus: failed to create upload",t)}))):this._emitError(new Error("tus: unable to create upload because no endpoint is provided"))}},{key:"_resumeUpload",value:function(){var e=this,t=this._openRequest("HEAD",this.url);this._sendRequest(t,null).then((function(o){var r=o.getStatus();if(!m(r,200))return m(r,400)&&e._removeFromUrlStorage(),423===r?void e._emitHttpError(t,o,"tus: upload is currently locked; retry later"):e.options.endpoint?(e.url=null,void e._createUpload()):void e._emitHttpError(t,o,"tus: unable to resume upload (new upload cannot be created without an endpoint)");var i=parseInt(o.getHeader("Upload-Offset"),10);if(isNaN(i))e._emitHttpError(t,o,"tus: invalid or missing offset value");else{var a=parseInt(o.getHeader("Upload-Length"),10);if(!isNaN(a)||e.options.uploadLengthDeferred){if("function"==typeof e.options._onUploadUrlAvailable&&e.options._onUploadUrlAvailable(),i===a)return e._emitProgress(a,a),void e._emitSuccess();e._offset=i,e._performUpload()}else e._emitHttpError(t,o,"tus: invalid or missing length value")}})).catch((function(o){e._emitHttpError(t,null,"tus: failed to resume upload",o)}))}},{key:"_performUpload",value:function(){var e,t=this;this._aborted||(this.options.overridePatchMethod?(e=this._openRequest("POST",this.url)).setHeader("X-HTTP-Method-Override","PATCH"):e=this._openRequest("PATCH",this.url),e.setHeader("Upload-Offset",this._offset),this._addChunkToRequest(e).then((function(o){m(o.getStatus(),200)?t._handleUploadResponse(e,o):t._emitHttpError(e,o,"tus: unexpected response while uploading chunk")})).catch((function(o){t._aborted||t._emitHttpError(e,null,"tus: failed to upload chunk at offset "+t._offset,o)})))}},{key:"_addChunkToRequest",value:function(e){var t=this,o=this._offset,r=this._offset+this.options.chunkSize;return e.setProgressHandler((function(e){t._emitProgress(o+e,t._size)})),e.setHeader("Content-Type","application/offset+octet-stream"),(r===1/0||r>this._size)&&!this.options.uploadLengthDeferred&&(r=this._size),this._source.slice(o,r).then((function(o){var r=o.value,i=o.done;return t.options.uploadLengthDeferred&&i&&(t._size=t._offset+(r&&r.size?r.size:0),e.setHeader("Upload-Length",t._size)),null===r?t._sendRequest(e):(t._emitProgress(t._offset,t._size),t._sendRequest(e,r))}))}},{key:"_handleUploadResponse",value:function(e,t){var o=parseInt(t.getHeader("Upload-Offset"),10);if(isNaN(o))this._emitHttpError(e,t,"tus: invalid or missing offset value");else{if(this._emitProgress(o,this._size),this._emitChunkComplete(o-this._offset,o,this._size),(this._offset=o)==this._size)return this._emitSuccess(),void this._source.close();this._performUpload()}}},{key:"_openRequest",value:function(e,t){var o=g(e,t,this.options);return this._req=o}},{key:"_removeFromUrlStorage",value:function(){var e=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch((function(t){e._emitError(t)})),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var e,t=this;this.options.storeFingerprintForResuming&&this._fingerprint&&(e={size:this._size,metadata:this.options.metadata,creationTime:(new Date).toString()},this._parallelUploads?e.parallelUploadUrls=this._parallelUploadUrls:e.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,e).then((function(e){return t._urlStorageKey=e})).catch((function(e){t._emitError(e)})))}},{key:"_sendRequest",value:function(e,t){var o=this,r=1<arguments.length&&void 0!==t?t:null;return"function"==typeof this.options.onBeforeRequest&&this.options.onBeforeRequest(e),e.send(r).then((function(t){return"function"==typeof o.options.onAfterResponse&&o.options.onAfterResponse(e,t),t}))}}])&&p(t.prototype,o),i&&p(t,i),e}();function f(e){var t=[];for(var o in e)t.push(o+" "+a.Base64.encode(e[o]));return t.join(",")}function m(e,t){return t<=e&&e<t+100}function g(e,t,o){var r=o.httpStack.createRequest(e,t);r.setHeader("Tus-Resumable","1.0.0");var a,n=o.headers||{};for(var l in n)r.setHeader(l,n[l]);return o.addRequestId&&(a=(0,i.default)(),r.setHeader("X-Request-ID",a)),r}function b(e,t,o){var r,i=e.originalResponse?e.originalResponse.getStatus():0,a=!m(i,400)||409===i||423===i;return null!=o.retryDelays&&t<o.retryDelays.length&&null!=e.originalRequest&&a&&(r=!0,"undefined"!=typeof window&&"navigator"in window&&!1===window.navigator.onLine&&(r=!1),r)}function v(e,t){return new n.default(t,e).toString()}h.defaultOptions={endpoint:null,uploadUrl:null,metadata:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,_onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,chunkSize:1/0,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null},o.default=h},{"./error":10,"./logger":11,"./uuid":14,"js-base64":15,"url-parse":18}],14:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}},{}],15:[function(require,module,exports){(function(global){var Gk,Hk;Gk="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==global?global:this,Hk=function(global){var _Base64=global.Base64,version="2.4.9",buffer;if(void 0!==module&&module.exports)try{buffer=eval("require('buffer').Buffer")}catch(e){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(e){for(var t={},o=0,r=e.length;o<r;o++)t[e.charAt(o)]=o;return t}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(e){if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?fromCharCode(192|t>>>6)+fromCharCode(128|63&t):fromCharCode(224|t>>>12&15)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return fromCharCode(240|t>>>18&7)+fromCharCode(128|t>>>12&63)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(e){return e.replace(re_utob,cb_utob)},cb_encode=function(e){var t=[0,2,1][e.length%3],o=e.charCodeAt(0)<<16|(1<e.length?e.charCodeAt(1):0)<<8|(2<e.length?e.charCodeAt(2):0);return[b64chars.charAt(o>>>18),b64chars.charAt(o>>>12&63),2<=t?"=":b64chars.charAt(o>>>6&63),1<=t?"=":b64chars.charAt(63&o)].join("")},btoa=global.btoa?function(e){return global.btoa(e)}:function(e){return e.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e)).toString("base64")}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e)).toString("base64")}:function(e){return btoa(utob(e))},encode=function(e,t){return t?_encode(String(e)).replace(/[+\/]/g,(function(e){return"+"==e?"-":"_"})).replace(/=/g,""):_encode(String(e))},encodeURI=function(e){return encode(e,!0)},re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),cb_btou=function(e){switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return fromCharCode(55296+(t>>>10))+fromCharCode(56320+(1023&t));case 3:return fromCharCode((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return fromCharCode((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},btou=function(e){return e.replace(re_btou,cb_btou)},cb_decode=function(e){var t=e.length,o=t%4,r=(0<t?b64tab[e.charAt(0)]<<18:0)|(1<t?b64tab[e.charAt(1)]<<12:0)|(2<t?b64tab[e.charAt(2)]<<6:0)|(3<t?b64tab[e.charAt(3)]:0),i=[fromCharCode(r>>>16),fromCharCode(r>>>8&255),fromCharCode(255&r)];return i.length-=[0,0,2,1][o],i.join("")},atob=global.atob?function(e){return global.atob(e)}:function(e){return e.replace(/[\s\S]{1,4}/g,cb_decode)},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e,"base64")).toString()}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e,"base64")).toString()}:function(e){return btou(atob(e))},decode=function(e){return _decode(String(e).replace(/[-_]/g,(function(e){return"-"==e?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var e=global.Base64;return global.Base64=_Base64,e},noEnum;return global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"==typeof Object.defineProperty&&(noEnum=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}},global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum((function(){return decode(this)}))),Object.defineProperty(String.prototype,"toBase64",noEnum((function(e){return encode(this,e)}))),Object.defineProperty(String.prototype,"toBase64URI",noEnum((function(){return encode(this,!0)})))}),global.Meteor&&(Base64=global.Base64),void 0!==module&&module.exports&&(module.exports.Base64=global.Base64),{Base64:global.Base64}},"object"==typeof exports&&void 0!==module?module.exports=Hk(Gk):Hk(Gk)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],16:[function(e,t,o){var r=Object.prototype.hasOwnProperty;function i(e){return decodeURIComponent(e.replace(/\+/g," "))}o.stringify=function(e,t){t=t||"";var o=[];for(var i in"string"!=typeof t&&(t="?"),e)r.call(e,i)&&o.push(encodeURIComponent(i)+"="+encodeURIComponent(e[i]));return o.length?t+o.join("&"):""},o.parse=function(e){for(var t,o=/([^=?&]+)=?([^&]*)/g,r={};t=o.exec(e);){var a=i(t[1]),n=i(t[2]);a in r||(r[a]=n)}return r}},{}],17:[function(e,t,o){t.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},{}],18:[function(e,t,o){(function(o){var r=e("requires-port"),i=e("querystringify"),a=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,n=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,l=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],s={hash:1,query:1};function d(e){var t,r=o&&o.location||{},i={},a=typeof(e=e||r);if("blob:"===e.protocol)i=new u(unescape(e.pathname),{});else if("string"==a)for(t in i=new u(e,{}),s)delete i[t];else if("object"==a){for(t in e)t in s||(i[t]=e[t]);void 0===i.slashes&&(i.slashes=n.test(e.href))}return i}function c(e){var t=a.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function u(e,t,o){if(!(this instanceof u))return new u(e,t,o);var a,n,s,p,h,f,m=l.slice(),g=typeof t,b=this,v=0;for("object"!=g&&"string"!=g&&(o=t,t=null),o&&"function"!=typeof o&&(o=i.parse),t=d(t),a=!(n=c(e||"")).protocol&&!n.slashes,b.slashes=n.slashes||a&&t.slashes,b.protocol=n.protocol||t.protocol||"",e=n.rest,n.slashes||(m[3]=[/(.*)/,"pathname"]);v<m.length;v++)"function"!=typeof(p=m[v])?(s=p[0],f=p[1],s!=s?b[f]=e:"string"==typeof s?~(h=e.indexOf(s))&&(e="number"==typeof p[2]?(b[f]=e.slice(0,h),e.slice(h+p[2])):(b[f]=e.slice(h),e.slice(0,h))):(h=s.exec(e))&&(b[f]=h[1],e=e.slice(0,h.index)),b[f]=b[f]||a&&p[3]&&t[f]||"",p[4]&&(b[f]=b[f].toLowerCase())):e=p(e);o&&(b.query=o(b.query)),a&&t.slashes&&"/"!==b.pathname.charAt(0)&&(""!==b.pathname||""!==t.pathname)&&(b.pathname=function(e,t){for(var o=(t||"/").split("/").slice(0,-1).concat(e.split("/")),r=o.length,i=o[r-1],a=!1,n=0;r--;)"."===o[r]?o.splice(r,1):".."===o[r]?(o.splice(r,1),n++):n&&(0===r&&(a=!0),o.splice(r,1),n--);return a&&o.unshift(""),"."!==i&&".."!==i||o.push(""),o.join("/")}(b.pathname,t.pathname)),r(b.port,b.protocol)||(b.host=b.hostname,b.port=""),b.username=b.password="",b.auth&&(p=b.auth.split(":"),b.username=p[0]||"",b.password=p[1]||""),b.origin=b.protocol&&b.host&&"file:"!==b.protocol?b.protocol+"//"+b.host:"null",b.href=b.toString()}u.prototype={set:function(e,t,o){var a,n=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(o||i.parse)(t)),n[e]=t;break;case"port":n[e]=t,r(t,n.protocol)?t&&(n.host=n.hostname+":"+t):(n.host=n.hostname,n[e]="");break;case"hostname":n[e]=t,n.port&&(t+=":"+n.port),n.host=t;break;case"host":n[e]=t,/:\d+$/.test(t)?(t=t.split(":"),n.port=t.pop(),n.hostname=t.join(":")):(n.hostname=t,n.port="");break;case"protocol":n.protocol=t.toLowerCase(),n.slashes=!o;break;case"pathname":case"hash":t?(a="pathname"===e?"/":"#",n[e]=t.charAt(0)!==a?a+t:t):n[e]=t;break;default:n[e]=t}for(var s=0;s<l.length;s++){var d=l[s];d[4]&&(n[d[1]]=n[d[1]].toLowerCase())}return n.origin=n.protocol&&n.host&&"file:"!==n.protocol?n.protocol+"//"+n.host:"null",n.href=n.toString(),n},toString:function(e){e&&"function"==typeof e||(e=i.stringify);var t,o=this,r=o.protocol;r&&":"!==r.charAt(r.length-1)&&(r+=":");var a=r+(o.slashes?"//":"");return o.username&&(a+=o.username,o.password&&(a+=":"+o.password),a+="@"),a+=o.host+o.pathname,(t="object"==typeof o.query?e(o.query):o.query)&&(a+="?"!==t.charAt(0)?"?"+t:t),o.hash&&(a+=o.hash),a}},u.extractProtocol=c,u.location=d,u.qs=i,t.exports=u}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{querystringify:16,"requires-port":17}]},{},[4])(4)}));var tus$1=tus;
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let BackendAiStorageList=class extends BackendAIPage{constructor(){super(),this._APIMajorVersion=5,this.storageType="general",this.folders=Object(),this.folderInfo=Object(),this.is_admin=!1,this.authenticated=!1,this.renameFolderId="",this.deleteFolderId="",this.explorer=Object(),this.explorerFiles=[],this.invitees=[],this.selectedFolder="",this.downloadURL="",this.uploadFiles=[],this.fileUploadQueue=[],this.fileUploadCount=0,this.concurrentFileUploadLimit=2,this.vhost="",this.vhosts=[],this.allowedGroups=[],this.fileListGrid=Object(),this.notification=Object(),this.renameFileDialog=Object(),this.deleteFileDialog=Object(),this.downloadFileDialog=Object(),this.spinner=Object(),this.allowed_folder_type=[],this.uploadFilesExist=!1,this._boundIndexRenderer=Object(),this._boundTypeRenderer=Object(),this._boundControlFolderListRenderer=Object(),this._boundControlFileListRenderer=Object(),this._boundPermissionViewRenderer=Object(),this._boundFileNameRenderer=Object(),this._boundCreatedTimeRenderer=Object(),this._boundPermissionRenderer=Object(),this._uploadFlag=!0,this._boundIndexRenderer=this.indexRenderer.bind(this),this._boundTypeRenderer=this.typeRenderer.bind(this),this._boundControlFolderListRenderer=this.controlFolderListRenderer.bind(this),this._boundControlFileListRenderer=this.controlFileListRenderer.bind(this),this._boundPermissionViewRenderer=this.permissionViewRenderer.bind(this),this._boundFileNameRenderer=this.fileNameRenderer.bind(this),this._boundCreatedTimeRenderer=this.createdTimeRenderer.bind(this),this._boundPermissionRenderer=this.permissionRenderer.bind(this)}static get styles(){return[BackendAiStyles,IronFlex,IronFlexAlignment,IronPositioning,css`
        vaadin-grid {
          border: 0 !important;
        }

        vaadin-grid.folderlist {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 210px);
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
          --component-height: calc(100vh - 200px); /* calc(100vh - 170px); */
          right: 0;
          top: 0;
          position: fixed;
          margin: 170px 0 0 0;
        }

        #folder-explorer-dialog vaadin-grid vaadin-grid-column {
          height: 32px !important;
        }

        #folder-explorer-dialog vaadin-grid mwc-icon-button {
          --mdc-icon-size: 24px;
          --mdc-icon-button-size: 28px;
        }

        @media screen and (max-width: 899px) {
          #folder-explorer-dialog,
          #folder-explorer-dialog.mini_ui {
            left: 0;
            --component-width: 100%;
            width: 100%;
          }
        }

        @media screen and (min-width: 900px) {
          #folder-explorer-dialog {
            left: 250px; /* 190px; */
            --component-width: calc(100% - 45px); /* calc(100% - 30px); */
          }

          #folder-explorer-dialog.mini_ui {
            left: 85px; /* 65px; */
            --component-width: calc(100% - 45px);
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

        wl-button.goto {
          margin: 0;
          padding: 5px;
          min-width: 0;
        }

        wl-button.goto:last-of-type {
          font-weight: bold;
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

        backend-ai-dialog wl-textfield,
        backend-ai-dialog wl-select {
          --input-font-family: Roboto, Noto, sans-serif;
          --input-color-disabled: #222222;
          --input-label-color-disabled: #222222;
          --input-label-font-size: 12px;
          --input-border-style-disabled: 1px solid #cccccc;
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
          --dialog-min-width: 600px;
          --component-min-width: 600px;
        }

        backend-ai-dialog {
          --component-min-width: 350px;
        }

      `]}_toggleCheckbox(){let e=this.shadowRoot.querySelectorAll(".multiple-action-buttons");this.fileListGrid.selectedItems.length>0?[].forEach.call(e,(e=>{e.style.display="block"})):[].forEach.call(e,(e=>{e.style.display="none"}))}render(){return html$1`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <vaadin-grid class="folderlist" theme="row-stripes column-borders compact" aria-label="Folder list" .items="${this.folders}">
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
        <vaadin-grid-column resizable header="${translate("data.folders.Control")}" .renderer="${this._boundControlFolderListRenderer}"></vaadin-grid-column>
      </vaadin-grid>

      <backend-ai-dialog id="rename-folder-dialog" fixed backdrop>
        <span slot="title">${translate("data.folders.RenameAFolder")}</span>
        <div slot="content">
          <mwc-textfield class="red" id="new-folder-name" label="${translate("data.folders.TypeNewFolderName")}"
            pattern="^[a-zA-Z0-9_-]+$"
            validationMessage="Allows letters, numbers and -_." auto-validate></mwc-textfield>
        </div>
        <div slot="footer">
          <wl-button class="blue button" type="submit" id="rename-button" outlined @click="${()=>this._renameFolder()}">
            <wl-icon>edit</wl-icon>
            ${translate("data.folders.Rename")}
          </wl-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="delete-folder-dialog" fixed backdrop>
        <span slot="title">${translate("data.folders.DeleteAFolder")}</span>
        <div slot="content" style="width:100%;">
          <div class="warning" style="margin-left:16px;">${translate("dialog.warning.CannotBeUndone")}</div>
          <div>
            <mwc-textfield class="red" id="delete-folder-name" label="${translate("data.folders.TypeFolderNameToDelete")}"
                         pattern="^[a-zA-Z0-9_-]+$"
                         validationMessage="Allows letters, numbers and -_." auto-validate></mwc-textfield>
          </div>
        </div>
        <div slot="footer">
          <wl-button class="blue button" type="submit" id="delete-button" outlined @click="${()=>this._deleteFolderWithCheck()}">
            <wl-icon>close</wl-icon>
            ${translate("data.folders.Delete")}
          </wl-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="info-folder-dialog" fixed backdrop>
        <span slot="title">${this.folderInfo.name}</span>
        <div slot="content" role="listbox" style="margin: 0;width:100%;">
          <div class="horizontal justified layout wrap">
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
          <wl-button outlined class="multiple-action-buttons" @click="${()=>this._openDeleteMultipleFileDialog()}" style="display:none;">
            <div class="horizontal center layout">
            <wl-icon style="--icon-size: 20px;margin-right:5px;">delete</wl-icon><span>${translate("data.explorer.Delete")}</span></div>
          </wl-button>
          <wl-button outlined id="add-btn" @click="${e=>this._uploadFileBtnClick(e)}">
            <wl-icon style="--icon-size: 20px;margin-right:5px;">cloud_upload</wl-icon>
            ${translate("data.explorer.UploadFiles")}
          </wl-button>
          <wl-button outlined id="mkdir" @click="${()=>this._mkdirDialog()}">
            <wl-icon style="--icon-size: 20px;margin-right:5px;">create_new_folder</wl-icon>
            ${translate("data.explorer.NewFolder")}
          </wl-button>
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
          <wl-button outlined id="cancel_upload" @click="${e=>this._cancelUpload(e)}">
            <wl-icon>cancel</wl-icon> ${translate("data.explorer.StopUploading")}
          </wl-button>
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

            <vaadin-grid-column flex-grow="1" resizable>
              <template class="header">
                <vaadin-grid-sorter path="size">${translate("data.explorer.Size")}</vaadin-grid-sorter>
              </template>
              <template>
                <div class="layout vertical">
                  <span>[[item.size]]</span>
                </div>
              </template>
            </vaadin-grid-column>
            <vaadin-grid-column resizable flex-grow="2" header="${translate("data.explorer.Actions")}" .renderer="${this._boundControlFileListRenderer}"></vaadin-grid-column>
          </vaadin-grid>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="mkdir-dialog" fixed backdrop>
        <span slot="title">${translate("data.explorer.CreateANewFolder")}</span>
        <div slot="content">
          <mwc-textfield id="mkdir-name"
                         label="${translate("data.explorer.Foldername")}"
                         auto-validate
                         required
                         validationMessage="Value is required."></mwc-textfield>
          <br/>
        </div>
        <div slot="footer">
          <wl-button class="blue button" type="submit" id="mkdir-btn" @click="${e=>this._mkdir(e)}" outlined>
            <wl-icon>rowing</wl-icon>
            ${translate("button.Create")}
          </wl-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="share-folder-dialog" fixed backdrop>
        <span slot="title">${translate("data.explorer.ShareFolder")}</span>
        <div slot="content" role="listbox" style="margin: 0;width:100%;" >
          <div style="margin: 10px 0px">${translate("data.explorer.People")}</div>
          <div style="display: flex;">
            <div id="textfields" style="flex-grow: 2">
              <wl-textfield type="email" label="${translate("data.explorer.EnterEmailAddress")}"></wl-textfield>
            </div>
            <div>
              <wl-button fab flat @click="${e=>this._addTextField(e)}">
                <wl-icon>add</wl-icon>
              </wl-button>
              <wl-button fab flat @click="${e=>this._removeTextField(e)}">
                <wl-icon>remove</wl-icon>
              </wl-button>
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
        <div slot="footer" class="horizontal flex end layout">
          <wl-button slot="footer"
            type="button"
            outlined
            id="share-button"
            style="width: 100%; box-sizing: border-box;"
            @click=${e=>this._shareFolder(e)}
          >
            <wl-icon>share</wl-icon>
            ${translate("button.Share")}
          </wl-button>
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
        <div slot="footer" class="horizontal end-justified flex layout">
          <wl-button
            type="button"
            outlined
            style="width: 100%; box-sizing: border-box;"
            @click=${this._modifySharedFolderPermissions}
          >
            <wl-icon>check</wl-icon>
            ${translate("button.SaveChanges")}
          </wl-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="rename-file-dialog" fixed backdrop blockscrolling>
        <span slot="title">${translate("data.explorer.RenameAFile")}</span>
        <div slot="content">
          <mwc-textfield class="red" id="new-file-name" label="${translate("data.explorer.NewFileName")}"></mwc-textfield>
          <div id="old-file-name" style="height:2.5em"></div>
        </div>
        <div slot="footer">
          <wl-button class="blue button" type="button" id="rename-file-button" outlined @click="${e=>this._renameFile(e)}">
            <wl-icon>edit</wl-icon>
            ${translate("data.explorer.RenameAFile")}
          </wl-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="delete-file-dialog" fixed backdrop>
         <span slot="title">${translate("dialog.title.LetsDouble-Check")}</span>
         <div slot="content">
            <p>${translate("dialog.warning.CannotBeUndone")}
            ${translate("dialog.ask.DoYouWantToProceed")}</p>
         </div>
         <div slot="footer" class="horizontal end-justified flex layout">
            <wl-button inverted flat @click="${e=>this._hideDialog(e)}">${translate("button.Cancel")}</wl-button>
            <wl-button @click="${e=>this._deleteFileWithCheck(e)}">${translate("button.Okay")}</wl-button>
         </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="download-file-dialog" fixed backdrop>
         <span slot="title">${translate("data.explorer.DownloadFile")}</span>
         <div slot="content">
            <a href="${this.downloadURL}">
              <wl-button outlined>${translate("data.explorer.TouchToDownload")}</wl-button>
            </a>
         </div>
         <div slot="footer" class="horizontal end-justified flex layout">
            <wl-button @click="${e=>this._hideDialog(e)}">${translate("button.Close")}</wl-button>
         </div>
      </backend-ai-dialog>
    `}firstUpdated(){this._addEventListenerDropZone(),this._mkdir=this._mkdir.bind(this),this.renameFileDialog=this.shadowRoot.querySelector("#rename-file-dialog"),this.deleteFileDialog=this.shadowRoot.querySelector("#delete-file-dialog"),this.downloadFileDialog=this.shadowRoot.querySelector("#download-file-dialog"),this.fileListGrid=this.shadowRoot.querySelector("#fileList-grid"),this.fileListGrid.addEventListener("selected-items-changed",(()=>{this._toggleCheckbox()})),this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification;let e=this.shadowRoot.querySelectorAll("mwc-textfield");for(const t of e)this._addInputValidator(t);"automount"===this.storageType?this.shadowRoot.querySelector("vaadin-grid.folderlist").style.height="calc(100vh - 210px)":this.shadowRoot.querySelector("vaadin-grid.folderlist").style.height="calc(100vh - 165px)",document.addEventListener("backend-ai-group-changed",(e=>this._refreshFolderList())),document.addEventListener("backend-ai-ui-changed",(e=>this._refreshFolderUI(e))),this._refreshFolderUI({detail:{"mini-ui":globalThis.mini_ui}}),this._validatePathName()}_modifySharedFolderPermissions(){const e=this.shadowRoot.querySelectorAll("#modify-permission-dialog mwc-select"),t=Array.prototype.filter.call(e,((e,t)=>e.value!==this.invitees[t].perm)).map(((e,t)=>({perm:"kickout"===e.value?null:e.value,user:this.invitees[t].shared_to.uuid,vfolder:this.invitees[t].vfolder_id}))).map((e=>globalThis.backendaiclient.vfolder.modify_invitee_permission(e)));Promise.all(t).then((e=>{0===e.length?this.notification.text=get("data.permission.NoChanges"):this.notification.text=get("data.permission.PermissionModified"),this.notification.show(),this.shadowRoot.querySelector("#modify-permission-dialog").hide()}))}permissionRenderer(e,t,o){render(html$1`
        <div>
          <mwc-select outlined label="${translate("data.folders.SelectPermission")}">
            <mwc-list-item ?selected=${"ro"===o.item.perm} value="ro">
            <mwc-list-item ?selected=${"rw"===o.item.perm} value="rw">${translate("data.folders.Edit")}</mwc-list-item>
            <mwc-list-item ?selected=${"wd"===o.item.perm} value="wd">${translate("data.folders.EditDelete")}</mwc-list-item>
            <mwc-list-item value="kickout">${translate("data.folders.KickOut")}</mwc-list-item>
          </mwc-select>
        </div>
      `,e)}_addTextField(e){let t=document.createElement("wl-textfield");t.label=get("data.invitation.EnterEmail"),t.type="email",this.shadowRoot.querySelector("#textfields").appendChild(t)}_removeTextField(e){const t=this.shadowRoot.querySelector("#textfields");t.children.length>1&&t.removeChild(t.lastChild)}indexRenderer(e,t,o){render(html$1`${this._indexFrom1(o.index)}`,e)}controlFolderListRenderer(e,t,o){render(html$1`
        <div
          id="controls"
          class="layout horizontal flex center"
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
                @click="${e=>this._folderExplorer(e)}" .folder-id="${o.item.name}"
              ></mwc-icon-button>
            `:html$1``}

          ${this._hasPermission(o.item,"w"),html$1``}
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

          ${o.item.is_owner||this._hasPermission(o.item,"d")?html$1`
              <mwc-icon-button
                class="fg blue controls-running"
                icon="edit"
                @click="${e=>this._renameFolderDialog(e)}"
              ></mwc-icon-button>
              <mwc-icon-button
                class="fg red controls-running"
                icon="delete"
                @click="${e=>this._deleteFolderDialog(e)}"
              ></mwc-icon-button>
            `:html$1``}
        </div>
       `,e)}controlFileListRenderer(e,t,o){render(html$1`
        ${this._isDir(o.item)?html$1`
          <mwc-icon-button id="download-btn" class="tiny fg blue" icon="cloud_download"
              filename="${o.item.filename}" @click="${e=>this._downloadFile(e,!0)}"></mwc-icon-button>
        `:html$1`
          <mwc-icon-button id="download-btn" class="tiny fg blue" icon="cloud_download"
              filename="${o.item.filename}" @click="${e=>this._downloadFile(e)}"></mwc-icon-button>
        `}
        <mwc-icon-button id="rename-btn" class="tiny fg green" icon="edit" required
            filename="${o.item.filename}" @click="${this._openRenameFileDialog.bind(this)}"></mwc-icon-button>
        <mwc-icon-button id="delete-btn" class="tiny fg red" icon="delete_forever"
            filename="${o.item.filename}" @click="${e=>this._openDeleteFileDialog(e)}"></mwc-icon-button>
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
        </div>`,e)}createdTimeRenderer(e,t,o){render(html$1`
        <div class="layout vertical">
            <span>${this._humanReadableTime(o.item.ctime)}</span>
        </div>`,e)}typeRenderer(e,t,o){render(html$1`
        <div class="layout vertical center-justified">
        ${"user"==o.item.type?html$1`
          <wl-icon>person</wl-icon>
        `:html$1`
          <wl-icon>group</wl-icon>
        `}
        </div>`,e)}refreshFolderList(){return this._refreshFolderList()}_refreshFolderList(){this.spinner.show();let e=null;e=globalThis.backendaiclient.current_group_id(),globalThis.backendaiclient.vfolder.list(e).then((e=>{this.spinner.hide();let t=e.filter((e=>"general"!==this.storageType||e.name.startsWith(".")?"automount"===this.storageType&&e.name.startsWith(".")?e:void 0:e));this.folders=t})),globalThis.backendaiclient.vfolder.list_hosts().then((e=>{}))}_refreshFolderUI(e){let t=this.shadowRoot.querySelector("#folder-explorer-dialog");e.detail.hasOwnProperty("mini-ui")&&!0===e.detail["mini-ui"]?t.classList.add("mini_ui"):t.classList.remove("mini_ui")}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this._APIMajorVersion=globalThis.backendaiclient.APIMajorVersion,this._refreshFolderList()}),!0):(this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this._APIMajorVersion=globalThis.backendaiclient.APIMajorVersion,this._refreshFolderList()))}async _addFolderDialog(){let e=await globalThis.backendaiclient.vfolder.list_hosts();if(this.vhosts=e.allowed,this.vhost=e.default,this.allowed_folder_type.includes("group")){const e=await globalThis.backendaiclient.group.list();this.allowedGroups=e.groups}this.openDialog("add-folder-dialog")}_folderExplorerDialog(){this.openDialog("folder-explorer-dialog")}_mkdirDialog(){this.shadowRoot.querySelector("#mkdir-name").value="",this.openDialog("mkdir-dialog")}openDialog(e){this.shadowRoot.querySelector("#"+e).show()}closeDialog(e){this.shadowRoot.querySelector("#"+e).hide()}_indexFrom1(e){return e+1}_hasPermission(e,t){return!!e.permission.includes(t)||!(!e.permission.includes("w")||"r"!==t)}_getControlId(e){return e.target.closest("#controls").getAttribute("folder-id")}_infoFolder(e){const t=this._getControlId(e);globalThis.backendaiclient.vfolder.info(t).then((e=>{this.folderInfo=e,this.openDialog("info-folder-dialog")})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_renameFolderDialog(e){this.renameFolderId=this._getControlId(e),this.shadowRoot.querySelector("#new-folder-name").value="",this.openDialog("rename-folder-dialog")}_renameFolder(){globalThis.backendaiclient.vfolder.name=this.renameFolderId;const e=this.shadowRoot.querySelector("#new-folder-name").value,t=globalThis.backendaiclient.vfolder.rename(e);this.closeDialog("rename-folder-dialog"),t.then((e=>{this.notification.text=get("data.folders.FolderRenamed"),this.notification.show(),this._refreshFolderList()})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_deleteFolderDialog(e){this.deleteFolderId=this._getControlId(e),this.shadowRoot.querySelector("#delete-folder-name").value="",this.openDialog("delete-folder-dialog")}_deleteFolderWithCheck(){if(this.shadowRoot.querySelector("#delete-folder-name").value!=this.deleteFolderId)return this.notification.text=get("data.folders.FolderNameMismatched"),void this.notification.show();this.closeDialog("delete-folder-dialog"),this._deleteFolder(this.deleteFolderId)}_deleteFolder(e){globalThis.backendaiclient.vfolder.delete(e).then((e=>{this.notification.text=get("data.folders.FolderDeleted"),this.notification.show(),this._refreshFolderList()})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_clearExplorer(e=this.explorer.breadcrumb.join("/"),t=this.explorer.id,o=!1){return globalThis.backendaiclient.vfolder.list_files(e,t).then((e=>{this.shadowRoot.querySelector("#fileList-grid").selectedItems=[],this.explorer.files=JSON.parse(e.files),this.explorerFiles=this.explorer.files,o&&this.openDialog("folder-explorer-dialog")}))}_folderExplorer(e){let t={id:this._getControlId(e),breadcrumb:["."]};this.explorer=t,this._clearExplorer(t.breadcrumb.join("/"),t.id,!0)}_enqueueFolder(e){const t=e.target;t.setAttribute("disabled","true");const o=e.target.getAttribute("name");this.explorer.breadcrumb.push(o),this._clearExplorer().then((e=>{t.removeAttribute("disabled")}))}_gotoFolder(e){const t=e.target.getAttribute("dest");let o=this.explorer.breadcrumb;const r=o.indexOf(t);-1!==r&&(o=o.slice(0,r+1),this.explorer.breadcrumb=o,this._clearExplorer(o.join("/"),this.explorer.id,!1))}_mkdir(e){const t=this.shadowRoot.querySelector("#mkdir-name"),o=t.value,r=this.explorer;if(t.reportValidity(),t.checkValidity()){globalThis.backendaiclient.vfolder.mkdir([...r.breadcrumb,o].join("/"),r.id).catch((e=>{console.log(e),e&e.message?(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.show(!0,e))})).then((e=>{this.closeDialog("mkdir-dialog"),this._clearExplorer()}))}}_isDir(e){return e.mode.startsWith("d")}_addEventListenerDropZone(){const e=this.shadowRoot.querySelector("#folder-explorer-dialog"),t=this.shadowRoot.querySelector("#dropzone");t.addEventListener("dragleave",(()=>{t.style.display="none"})),e.addEventListener("dragover",(e=>(e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy",t.style.display="flex",!1))),e.addEventListener("drop",(e=>{e.stopPropagation(),e.preventDefault(),t.style.display="none";let o=[];for(let t=0;t<e.dataTransfer.files.length;t++){const r=e.dataTransfer.files[t];if(r.size>2**30)return this.notification.text=get("data.explorer.DragDropFileUploadSizeLimit"),void this.notification.show();r.progress=0,r.caption="",r.error=!1,r.complete=!1,o.push(r),this.uploadFiles.push(r)}for(let e=0;e<o.length;e++)this.fileUpload(o[e]),this._clearExplorer()}))}_uploadFileBtnClick(e){const t=this.shadowRoot.querySelector("#fileInput");if(t&&document.createEvent){const e=document.createEvent("MouseEvents");e.initEvent("click",!0,!1),t.dispatchEvent(e)}}_uploadFileChange(e){const t=e.target.files.length;for(let o=0;o<t;o++){const t=e.target.files[o];let r="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let e=0;e<5;e++)r+=i.charAt(Math.floor(Math.random()*i.length));t.id=r,t.progress=0,t.caption="",t.error=!1,t.complete=!1,this.uploadFiles.push(t)}for(let e=0;e<t;e++)this.fileUpload(this.uploadFiles[e]);this.shadowRoot.querySelector("#fileInput").value=""}runFileUploadQueue(e=null){let t;null!==e&&this.fileUploadQueue.push(e);for(let e=this.fileUploadCount;e<this.concurrentFileUploadLimit;e++)this.fileUploadQueue.length>0&&(t=this.fileUploadQueue.shift(),this.fileUploadCount=this.fileUploadCount+1,t.start())}fileUpload(e){this._uploadFlag=!0,this.uploadFilesExist=this.uploadFiles.length>0;const t=this.explorer.breadcrumb.concat(e.name).join("/");globalThis.backendaiclient.vfolder.create_upload_session(t,e,this.explorer.id).then((o=>{const r=(new Date).getTime(),i=new tus$1.Upload(e,{endpoint:o,retryDelays:[0,3e3,5e3,1e4,2e4],uploadUrl:o,chunkSize:15728640,metadata:{filename:t,filetype:e.type},onError:e=>{console.log("Failed because: "+e),this.fileUploadCount=this.fileUploadCount-1,this.runFileUploadQueue()},onProgress:(t,o)=>{if(!this._uploadFlag)return i.abort(),this.uploadFiles[this.uploadFiles.indexOf(e)].caption="Canceling...",this.uploadFiles=this.uploadFiles.slice(),void setTimeout((()=>{this.uploadFiles=[],this.uploadFilesExist=!1}),1e3);const a=(new Date).getTime(),n=(t/1048576/((a-r)/1e3)).toFixed(1)+"MB/s",l=Math.floor((o-t)/(t/(a-r)*1e3));let s=get("data.explorer.LessThan10Sec");if(l>=86400)s=get("data.explorer.MoreThanADay");else if(l>10){s=`${Math.floor(l/3600)}:${Math.floor(l%3600/60)}:${l%60}`}const d=(t/o*100).toFixed(1);this.uploadFiles[this.uploadFiles.indexOf(e)].progress=t/o,this.uploadFiles[this.uploadFiles.indexOf(e)].caption=`${d}% / Time left : ${s} / Speed : ${n}`,this.uploadFiles=this.uploadFiles.slice()},onSuccess:()=>{this._clearExplorer(),this.uploadFiles[this.uploadFiles.indexOf(e)].complete=!0,this.uploadFiles=this.uploadFiles.slice(),setTimeout((()=>{this.uploadFiles.splice(this.uploadFiles.indexOf(e),1),this.uploadFilesExist=this.uploadFiles.length>0,this.uploadFiles=this.uploadFiles.slice(),this.fileUploadCount=this.fileUploadCount-1,this.runFileUploadQueue()}),1e3)}});this.runFileUploadQueue(i)}))}_cancelUpload(e){this._uploadFlag=!1}_downloadFile(e,t=!1){let o=e.target.getAttribute("filename"),r=this.explorer.breadcrumb.concat(o).join("/");globalThis.backendaiclient.vfolder.request_download_token(r,this.explorer.id,t).then((e=>{const r=e.token;let i;if(i=this._APIMajorVersion<6?globalThis.backendaiclient.vfolder.get_download_url_with_token(r):`${e.url}?token=${e.token}&archive=${t}`,globalThis.iOSSafari)this.downloadURL=i,this.downloadFileDialog.show(),URL.revokeObjectURL(i);else{let e=document.createElement("a");e.style.display="none",e.addEventListener("click",(function(e){e.stopPropagation()})),e.href=i,e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(i)}}))}_openRenameFileDialog(e){const t=e.target.getAttribute("filename");this.renameFileDialog.querySelector("#old-file-name").textContent=t,this.renameFileDialog.filename=t,this.renameFileDialog.show()}_renameFile(e){const t=this.renameFileDialog.filename,o=this.explorer.breadcrumb.concat(t).join("/"),r=this.renameFileDialog.querySelector("#new-file-name").value;if(!r)return;globalThis.backendaiclient.vfolder.rename_file(o,r,this.explorer.id).then((e=>{this.notification.text=get("data.folders.FileRenamed"),this.notification.show(),this._clearExplorer(),this.renameFileDialog.hide()})).catch((e=>{console.error(e),e&&e.message&&(this.notification.text=e.title,this.notification.detail=e.message,this.notification.show(!0,e))}))}_openDeleteFileDialog(e){let t=e.target.getAttribute("filename");this.deleteFileDialog.filename=t,this.deleteFileDialog.files=[],this.deleteFileDialog.show()}_openDeleteMultipleFileDialog(e){this.deleteFileDialog.files=this.fileListGrid.selectedItems,this.deleteFileDialog.filename="",this.deleteFileDialog.show()}_deleteFileWithCheck(e){let t=this.deleteFileDialog.files;if(t.length>0){let e=[];t.forEach((t=>{let o=this.explorer.breadcrumb.concat(t.filename).join("/");e.push(o)})),globalThis.backendaiclient.vfolder.delete_files(e,!0,this.explorer.id).then((e=>{this.notification.text=get("data.folders.MultipleFilesDeleted"),this.notification.show(),this._clearExplorer(),this.deleteFileDialog.hide()}))}else if(""!=this.deleteFileDialog.filename){let e=this.explorer.breadcrumb.concat(this.deleteFileDialog.filename).join("/");globalThis.backendaiclient.vfolder.delete_files([e],!0,this.explorer.id).then((e=>{this.notification.text=get("data.folders.FileDeleted"),this.notification.show(),this._clearExplorer(),this.deleteFileDialog.hide()}))}}_deleteFile(e){let t=e.target.getAttribute("filename"),o=this.explorer.breadcrumb.concat(t).join("/");globalThis.backendaiclient.vfolder.delete_files([o],!0,this.explorer.id).then((e=>{this.notification.text=get("data.folders.FileDeleted"),this.notification.show(),this._clearExplorer()}))}_humanReadableTime(e){const t=new Date(1e3*e),o=t.getTimezoneOffset()/60,r=t.getHours();return t.setHours(r-o),t.toUTCString()}_isDownloadable(e){return!0}_shareFolderDialog(e){this.selectedFolder=this._getControlId(e),this.openDialog("share-folder-dialog")}_modifyPermissionDialog(e){globalThis.backendaiclient.vfolder.list_invitees(e).then((e=>{this.invitees=e.shared,this.openDialog("modify-permission-dialog")}))}_shareFolder(e){const t=this.shadowRoot.querySelector("#textfields").children,o=Array.prototype.filter.call(t,(e=>!e.hasAttribute("invalid")&&""!==e.value)).map((e=>e.value.trim())),r="r"+(this.shadowRoot.querySelector("#share-folder-write").checked?"w":"o");if(0!==o.length)globalThis.backendaiclient.vfolder.invite(r,o,this.selectedFolder).then((e=>{let o;o=e.invited_ids&&e.invited_ids.length>0?get("data.invitation.Invited"):get("data.invitation.NoOneWasInvited"),this.notification.text=o,this.notification.show(),this.shadowRoot.querySelector("#share-folder-dialog").hide();for(let e=t.length-1;e>0;e--){const o=t[e];o.parentElement.removeChild(o)}})).catch((e=>{this.notification.text=get("data.invitation.InvitationError"),e&&e.message&&(this.notification.detail=e.message),this.notification.show(!0,e)}));else{this.notification.text=get("data.invitation.NoValidEmails"),this.notification.show(),this.shadowRoot.querySelector("#share-folder-dialog").hide();for(let e of t)e.value=""}}_validatePathName(){let e=this.shadowRoot.querySelector("#mkdir-name");e.validityTransform=(t,o)=>{if(o.valid){let t=/^([.a-zA-Z0-9-_]{1,})+(\/[a-zA-Z0-9-_]{1,})*([\/,\\]{0,1})$/gm.exec(e.value);return t||(e.validationMessage=get("data.explorer.ValueShouldBeStarted")),{valid:t,customError:!t}}return o.valueMissing?(e.validationMessage=get("data.explorer.ValueRequired"),{valid:o.valid,valueMissing:!o.valid}):{valid:o.valid,badInput:!o.valid}}}};__decorate([property({type:Number})],BackendAiStorageList.prototype,"_APIMajorVersion",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"storageType",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"folders",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"folderInfo",void 0),__decorate([property({type:Boolean})],BackendAiStorageList.prototype,"is_admin",void 0),__decorate([property({type:Boolean})],BackendAiStorageList.prototype,"authenticated",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"renameFolderId",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"deleteFolderId",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"explorer",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"explorerFiles",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"invitees",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"selectedFolder",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"downloadURL",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"uploadFiles",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"fileUploadQueue",void 0),__decorate([property({type:Number})],BackendAiStorageList.prototype,"fileUploadCount",void 0),__decorate([property({type:Number})],BackendAiStorageList.prototype,"concurrentFileUploadLimit",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"vhost",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"vhosts",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"allowedGroups",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"fileListGrid",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"notification",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"renameFileDialog",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"deleteFileDialog",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"downloadFileDialog",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"spinner",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"allowed_folder_type",void 0),__decorate([property({type:Boolean})],BackendAiStorageList.prototype,"uploadFilesExist",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundIndexRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundTypeRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundControlFolderListRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundControlFileListRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundPermissionViewRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundFileNameRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundCreatedTimeRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundPermissionRenderer",void 0),__decorate([property({type:Boolean})],BackendAiStorageList.prototype,"_uploadFlag",void 0),BackendAiStorageList=__decorate([customElement("backend-ai-storage-list")],BackendAiStorageList);let BackendAIData=class extends BackendAIPage{constructor(){super(),this.apiMajorVersion="",this.folders=Object(),this.folderInfo=Object(),this.is_admin=!1,this.authenticated=!1,this.deleteFolderId="",this.vhost="",this.vhosts=[],this.usageModes=["General","Data","Model"],this.permissions=["Read-Write","Read-Only","Delete"],this.allowedGroups=[],this.allowed_folder_type=[],this.notification=Object(),this.spinner=Object(),this.folderLists=Object(),this._status="inactive",this.active=!0,this._lists=Object(),this._vfolderInnatePermissionSupport=!1,this.storageInfo=Object(),this._helpDescription="",this._helpDescriptionTitle="",this._helpDescriptionIcon=""}static get styles(){return[BackendAiStyles,IronFlex,IronFlexAlignment,IronPositioning,css`
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

      `]}render(){return html$1`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <div style="margin:20px;">
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
              <mwc-button dense raised id="add-folder" icon="add" label="${translate("data.NewFolder")}" @click="${()=>this._addFolderDialog()}" style="margin-right:15px;"></mwc-icon-button>
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
          <mwc-textfield id="add-folder-name" label="${translate("data.Foldername")}" pattern="^[\.a-zA-Z0-9_-]+$"
              auto-validate required validationMessage="${translate("data.Allowslettersnumbersand-_dot")}"></mwc-textfield>
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
              raised
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
    `}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification,this.folderLists=this.shadowRoot.querySelectorAll("backend-ai-storage-list"),fetch("resources/storage_metadata.json").then((e=>e.json())).then((e=>{let t=Object();for(let o in e.storageInfo)t[o]={},"name"in e.storageInfo[o]&&(t[o].name=e.storageInfo[o].name),"description"in e.storageInfo[o]?t[o].description=e.storageInfo[o].description:t[o].description=get("data.NoStorageDescriptionFound"),"icon"in e.storageInfo[o]?t[o].icon=e.storageInfo[o].icon:t[o].icon="local.png","dialects"in e.storageInfo[o]&&e.storageInfo[o].dialects.forEach((e=>{t[e]=t[o]}));this.storageInfo=t}))}async _viewStateChanged(e){if(await this.updateComplete,!1===e)return;const t=()=>{this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this.apiMajorVersion=globalThis.backendaiclient.APIMajorVersion,globalThis.backendaiclient.isAPIVersionCompatibleWith("v4.20191215")&&(this._vfolderInnatePermissionSupport=!0),globalThis.backendaiclient.vfolder.list_allowed_types().then((e=>{this.allowed_folder_type=e}))};void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{t()}),!0):t()}_showTab(e){let t=this.shadowRoot.querySelectorAll(".tab-content");for(let e=0;e<t.length;e++)t[e].style.display="none";this.shadowRoot.querySelector("#"+e.title+"-lists").style.display="block";for(let e=0;e<this._lists.length;e++)this._lists[e].removeAttribute("active");this.shadowRoot.querySelector("#"+e.title+"-storage").setAttribute("active",!0)}async _addFolderDialog(){let e=await globalThis.backendaiclient.vfolder.list_hosts();if(this.shadowRoot.querySelector("#add-folder-name").value="",this.vhosts=e.allowed,this.vhost=e.default,this.allowed_folder_type.includes("group")){const e=await globalThis.backendaiclient.group.list();this.allowedGroups=e.groups}this.openDialog("add-folder-dialog")}openDialog(e){this.shadowRoot.querySelector("#"+e).show()}closeDialog(e){this.shadowRoot.querySelector("#"+e).hide()}_showStorageDescription(e,t){e.stopPropagation(),t in this.storageInfo?(this._helpDescriptionTitle=this.storageInfo[t].name,this._helpDescription=this.storageInfo[t].description,this._helpDescriptionIcon=this.storageInfo[t].icon):(this._helpDescriptionTitle=t,this._helpDescriptionIcon="local.png",this._helpDescription=get("data.NoStorageDescriptionFound")),this.shadowRoot.querySelector("#help-description").show()}_indexFrom1(e){return e+1}_addFolder(){let e,t=this.shadowRoot.querySelector("#add-folder-name"),o=t.value,r=this.shadowRoot.querySelector("#add-folder-host").value,i=this.shadowRoot.querySelector("#add-folder-type").value;const a=this.shadowRoot.querySelector("#add-folder-usage-mode"),n=this.shadowRoot.querySelector("#add-folder-permission");let l="",s="";if(!1===["user","group"].includes(i)&&(i="user"),e="user"===i?"":this.is_admin?this.shadowRoot.querySelector("#add-folder-group").value:globalThis.backendaiclient.current_group,a&&(l=a.value,l=l.toLowerCase()),n)switch(s=n.value,s){case"Read-Write":s="rw";break;case"Read-Only":s="ro";break;case"Delete":s="wd";break;default:s="rw"}if(t.reportValidity(),t.checkValidity()){globalThis.backendaiclient.vfolder.create(o,r,e,l,s).then((e=>{this.notification.text=get("data.folders.FolderCreated"),this.notification.show(),this._refreshFolderList()})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})),this.closeDialog("add-folder-dialog")}}_refreshFolderList(){for(const e of this.folderLists)e.refreshFolderList()}};__decorate([property({type:String})],BackendAIData.prototype,"apiMajorVersion",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"folders",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"folderInfo",void 0),__decorate([property({type:Boolean})],BackendAIData.prototype,"is_admin",void 0),__decorate([property({type:Boolean})],BackendAIData.prototype,"authenticated",void 0),__decorate([property({type:String})],BackendAIData.prototype,"deleteFolderId",void 0),__decorate([property({type:String})],BackendAIData.prototype,"vhost",void 0),__decorate([property({type:Array})],BackendAIData.prototype,"vhosts",void 0),__decorate([property({type:Array})],BackendAIData.prototype,"usageModes",void 0),__decorate([property({type:Array})],BackendAIData.prototype,"permissions",void 0),__decorate([property({type:Array})],BackendAIData.prototype,"allowedGroups",void 0),__decorate([property({type:Array})],BackendAIData.prototype,"allowed_folder_type",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"notification",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"spinner",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"folderLists",void 0),__decorate([property({type:String})],BackendAIData.prototype,"_status",void 0),__decorate([property({type:Boolean})],BackendAIData.prototype,"active",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"_lists",void 0),__decorate([property({type:Boolean})],BackendAIData.prototype,"_vfolderInnatePermissionSupport",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"storageInfo",void 0),__decorate([property({type:String})],BackendAIData.prototype,"_helpDescription",void 0),__decorate([property({type:String})],BackendAIData.prototype,"_helpDescriptionTitle",void 0),__decorate([property({type:String})],BackendAIData.prototype,"_helpDescriptionIcon",void 0),BackendAIData=__decorate([customElement("backend-ai-data-view")],BackendAIData);var BackendAIData$1=BackendAIData;export default BackendAIData$1;
