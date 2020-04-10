import{_ as __decorate,p as property,c as customElement,d as BackendAIPage,e as BackendAiStyles,I as IronFlex,a as IronFlexAlignment,f as IronPositioning,b as css,h as html$1,t as translate,a3 as render,g as BackendAIPainKiller}from"./backend-ai-console-83b9280d.js";import"./lablup-loading-indicator-7430e51c.js";import{h as html,E as ElementMixin,T as ThemableMixin,G as GestureEventListeners,P as PolymerElement,k as addListener,r as resetMouseCanceller}from"./iron-resizable-behavior-de55f964.js";import"./vaadin-progress-bar-1df69f2a.js";import{C as ControlStateMixin}from"./vaadin-grid-4911f4dc.js";import"./paper-dropdown-menu-4a6caa86.js";import"./iron-iconset-svg-9534ec82.js";import"./paper-item-74fde806.js";import"./radio-behavior-7cabbc42.js";import"./label-129cd751.js";import"./select-45385ae8.js";import"./vaadin-grid-selection-column-674d4aac.js";import"./vaadin-grid-sorter-a00e6fad.js";import"./vaadin-grid-sort-column-7c57152f.js";import"./divider-70ab0d5d.js";import"./tab-group-30046cd8.js";import"./vaadin-item-966f168d.js";const $_documentContainer=document.createElement("template");$_documentContainer.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild($_documentContainer.content);const $_documentContainer$1=html`<dom-module id="lumo-button" theme-for="vaadin-button">
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
`}static get is(){return"vaadin-button"}static get version(){return"2.2.1"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){addListener(this,"down",()=>!this.disabled&&this.setAttribute("active","")),addListener(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>!this.disabled&&[13,32].indexOf(e.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(ButtonElement.is,ButtonElement);const $_documentContainer$2=html`<dom-module id="lumo-upload" theme-for="vaadin-upload">
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
`}static get is(){return"vaadin-upload"}static get version(){return"4.2.2"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:function(){try{return!!document.createEvent("TouchEvent")}catch(e){return!1}}},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:function(){return[]}},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value:function(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},cancel:"Cancel",error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled.",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Server Unavailable",unexpectedServerError:"Unexpected Server Error",forbidden:"Forbidden"}},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}}}}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-remove",this._onFileRemove.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this))}_formatSize(e){if("function"==typeof this.i18n.formatSize)return this.i18n.formatSize(e);const t=this.i18n.units.sizeBase||1e3,o=~~(Math.log(e)/Math.log(t)),i=Math.max(0,Math.min(3,o-1));return parseFloat((e/Math.pow(t,o)).toFixed(i))+" "+this.i18n.units.size[o]}_splitTimeByUnits(e){const t=[60,60,24,1/0],o=[0];for(var i=0;i<t.length&&e>0;i++)o[i]=e%t[i],e=Math.floor(e/t[i]);return o}_formatTime(e,t){if("function"==typeof this.i18n.formatTime)return this.i18n.formatTime(e,t);for(;t.length<3;)t.push(0);return t.reverse().map(e=>(e<10?"0":"")+e).join(":")}_formatFileProgress(e){return e.totalStr+": "+e.progress+"% ("+(e.loaded>0?this.i18n.uploading.remainingTime.prefix+e.remainingStr:this.i18n.uploading.remainingTime.unknown)+")"}_maxFilesAdded(e,t){return e>=0&&t>=e}_onDragover(e){e.preventDefault(),this.nodrop||this._dragover||(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(e){this.nodrop||(e.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(e.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(e){if("string"==typeof this.headers)try{this.headers=JSON.parse(this.headers)}catch(e){this.headers=void 0}for(var t in this.headers)e.setRequestHeader(t,this.headers[t]);this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,t,o,i){e.elapsed=i,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(i*(t/o-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(t/i/1024),e.totalStr=this._formatSize(t),e.loadedStr=this._formatSize(o),e.status=this._formatFileProgress(e)}uploadFiles(e){e&&!Array.isArray(e)&&(e=[e]),e=(e=e||this.files).filter(e=>!e.complete),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(e.uploading)return;const t=Date.now(),o=e.xhr=this._createXhr(e);let i,r;o.upload.onprogress=a=>{clearTimeout(i),r=Date.now();const n=(r-t)/1e3,l=a.loaded,s=a.total,d=~~(l/s*100);e.loaded=l,e.progress=d,e.indeterminate=l<=0||l>=s,e.error?e.indeterminate=e.status=void 0:e.abort||(d<100?(this._setStatus(e,s,l,n),i=setTimeout(()=>{e.status=this.i18n.uploading.status.stalled,this._notifyFileChanges(e)},2e3)):(e.loadedStr=e.totalStr,e.status=this.i18n.uploading.status.processing,e.uploading=!1)),this._notifyFileChanges(e),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:o}}))},o.onreadystatechange=()=>{if(4==o.readyState){if(clearTimeout(i),e.indeterminate=e.uploading=!1,e.abort)return void this._notifyFileChanges(e);if(e.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:o},cancelable:!0})))return;0===o.status?e.error=this.i18n.uploading.error.serverUnavailable:o.status>=500?e.error=this.i18n.uploading.error.unexpectedServerError:o.status>=400&&(e.error=this.i18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent(`upload-${e.error?"error":"success"}`,{detail:{file:e,xhr:o}})),this._notifyFileChanges(e)}};const a=new FormData;e.uploadTarget=e.uploadTarget||this.target||"",e.formDataName=this.formDataName,this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:o},cancelable:!0}))&&(a.append(e.formDataName,e,e.name),o.open(this.method,e.uploadTarget,!0),this._configureXhr(o),e.status=this.i18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,o.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:o}})),this._notifyFileChanges(e)},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:e,xhr:o,formData:a},cancelable:!0}))&&o.send(a))}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&this._uploadFile(e)}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._notifyFileChanges(e))}_notifyFileChanges(e){var t="files."+this.files.indexOf(e)+".";for(var o in e)e.hasOwnProperty(o)&&this.notifyPath(t+o,e[o])}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.tooManyFiles}}));if(this.maxFileSize>=0&&e.size>this.maxFileSize)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.fileIsTooBig}}));const t=e.name.match(/\.[^\.]*$|$/)[0],o=new RegExp("^("+this.accept.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")+")$","i");!this.accept||o.test(e.type)||o.test(t)?(e.loaded=0,e.held=!0,e.status=this.i18n.uploading.status.held,this.unshift("files",e),this.noAuto||this._uploadFile(e)):this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.incorrectFileType}}))}_removeFile(e){this.files.indexOf(e)>-1&&this.splice("files",this.files.indexOf(e),1)}_onAddFilesTouchEnd(e){e.preventDefault(),this.__resetMouseCanceller(),this._onAddFilesClick()}__resetMouseCanceller(){resetMouseCanceller()}_onAddFilesClick(){this.maxFilesReached||(this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileRemove(e){this._removeFile(e.detail.file)}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,t){return 1==e?t.one:t.many}_isMultiple(e){return 1!=e}}customElements.define(UploadElement.is,UploadElement),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).tus=e()}}((function(){return function e(t,o,i){function r(n,l){if(!o[n]){if(!t[n]){var s="function"==typeof require&&require;if(!l&&s)return s(n,!0);if(a)return a(n,!0);var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}var c=o[n]={exports:{}};t[n][0].call(c.exports,(function(e){var o=t[n][1][e];return r(o||e)}),c,c.exports,e,t,o,i)}return o[n].exports}for(var a="function"==typeof require&&require,n=0;n<i.length;n++)r(i[n]);return r}({1:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t,o){if((0,a.default)())return o(null,function(e,t){var o=e.exif?function(e){var t=0;if(0===e.length)return t;for(var o=0;o<e.length;o++){var i=e.charCodeAt(o);t=(t<<5)-t+i,t&=t}return t}(JSON.stringify(e.exif)):"noexif";return["tus-rn",e.name||"noname",e.size||"nosize",o,t.endpoint].join("/")}(e,t));return o(null,["tus-br",e.name,e.type,e.size,e.lastModified,t.endpoint].join("-"))};var i,r=e("./isReactNative"),a=(i=r)&&i.__esModule?i:{default:i}},{"./isReactNative":3}],2:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});o.default=function(){return"undefined"!=typeof window&&(void 0!==window.PhoneGap||void 0!==window.Cordova||void 0!==window.cordova)}},{}],3:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});o.default=function(){return"undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase()}},{}],4:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){var o=new FileReader;o.onload=function(){t(null,new Uint8Array(o.result))},o.onerror=function(e){t(e)},o.readAsArrayBuffer(e)}},{}],5:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.newRequest=function(){return new window.XMLHttpRequest},o.resolveUrl=function(e,t){return new a.default(t,e).toString()};var i,r=e("url-parse"),a=(i=r)&&i.__esModule?i:{default:i}},{"url-parse":16}],6:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}();o.getSource=function(e,t,o){if((0,r.default)()&&e&&void 0!==e.uri)return void(0,a.default)(e.uri,(function(e,t){if(e)return o(new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. "+e));o(null,new c(t))}));if("function"==typeof e.slice&&void 0!==e.size)return void o(null,new c(e));if("function"==typeof e.read)return t=+t,isFinite(t)?void o(null,new u(e,t)):void o(new Error("cannot create source for stream without a finite value for the `chunkSize` option"));o(new Error("source object may only be an instance of File, Blob, or Reader in this environment"))};var r=s(e("./isReactNative")),a=s(e("./uriToBlob")),n=s(e("./isCordova")),l=s(e("./readAsByteArray"));function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var c=function(){function e(t){d(this,e),this._file=t,this.size=t.size}return i(e,[{key:"slice",value:function(e,t,o){(0,n.default)()?(0,l.default)(this._file.slice(e,t),(function(e,t){if(e)return o(e);o(null,t)})):o(null,this._file.slice(e,t))}},{key:"close",value:function(){}}]),e}(),u=function(){function e(t,o){d(this,e),this._chunkSize=o,this._buffer=void 0,this._bufferOffset=0,this._reader=t,this._done=!1}return i(e,[{key:"slice",value:function(e,t,o){if(!(e<this._bufferOffset))return this._readUntilEnoughDataOrDone(e,t,o);o(new Error("Requested data is before the reader's current offset"))}},{key:"_readUntilEnoughDataOrDone",value:function(e,t,o){var i=this,r=t<=this._bufferOffset+p(this._buffer);if(this._done||r){var a=this._getDataFromBuffer(e,t);o(null,a,null==a&&this._done)}else this._reader.read().then((function(r){var a=r.value;r.done?i._done=!0:void 0===i._buffer?i._buffer=a:i._buffer=function(e,t){if(e.concat)return e.concat(t);if(e instanceof Blob)return new Blob([e,t],{type:e.type});if(e.set){var o=new e.constructor(e.length+t.length);return o.set(e),o.set(t,e.length),o}throw new Error("Unknown data type")}(i._buffer,a),i._readUntilEnoughDataOrDone(e,t,o)})).catch((function(e){o(new Error("Error during read: "+e))}))}},{key:"_getDataFromBuffer",value:function(e,t){e>this._bufferOffset&&(this._buffer=this._buffer.slice(e-this._bufferOffset),this._bufferOffset=e);var o=0===p(this._buffer);return this._done&&o?null:this._buffer.slice(0,t-e)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}]),e}();function p(e){return void 0===e?0:void 0!==e.size?e.size:e.length}},{"./isCordova":2,"./isReactNative":3,"./readAsByteArray":4,"./uriToBlob":8}],7:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}();o.getStorage=function(){return r?new n:null};var r=!1;try{r="localStorage"in window;var a="tusSupport";localStorage.setItem(a,localStorage.getItem(a))}catch(e){if(e.code!==e.SECURITY_ERR&&e.code!==e.QUOTA_EXCEEDED_ERR)throw e;r=!1}o.canStoreURLs=r;var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,[{key:"setItem",value:function(e,t,o){o(null,localStorage.setItem(e,t))}},{key:"getItem",value:function(e,t){t(null,localStorage.getItem(e))}},{key:"removeItem",value:function(e,t){t(null,localStorage.removeItem(e))}}]),e}()},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){var o=new XMLHttpRequest;o.responseType="blob",o.onload=function(){var e=o.response;t(null,e)},o.onerror=function(e){t(e)},o.open("GET",e),o.send()}},{}],9:[function(e,t,o){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(o,"__esModule",{value:!0});var a=function(e){function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e.message));n.originalRequest=a,n.causingError=o;var l=e.message;return null!=o&&(l+=", caused by "+o.toString()),null!=a&&(l+=", originated from request (response code: "+a.status+", response text: "+a.responseText+")"),n.message=l,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Error),t}();o.default=a},{}],10:[function(e,t,o){var i,r=e("./upload"),a=(i=r)&&i.__esModule?i:{default:i},n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(e("./node/storage"));var l=a.default.defaultOptions,s={Upload:a.default,canStoreURLs:n.canStoreURLs,defaultOptions:l};if("undefined"!=typeof window){var d=window,c=d.XMLHttpRequest,u=d.Blob;s.isSupported=c&&u&&"function"==typeof u.prototype.slice}else s.isSupported=!0,s.FileStorage=n.FileStorage;t.exports=s},{"./node/storage":7,"./upload":11}],11:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),r=c(e("./error")),a=c(e("extend")),n=e("js-base64"),l=e("./node/request"),s=e("./node/source"),d=e("./node/storage");function c(e){return e&&e.__esModule?e:{default:e}}var u={endpoint:null,fingerprint:c(e("./node/fingerprint")).default,resume:!0,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,headers:{},chunkSize:1/0,withCredentials:!1,uploadUrl:null,uploadSize:null,overridePatchMethod:!1,retryDelays:null,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,urlStorage:null,fileReader:null,uploadDataDuringCreation:!1},p=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=(0,a.default)(!0,{},u,o),this._storage=this.options.urlStorage,this.file=t,this.url=null,this._xhr=null,this._fingerprint=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0}return i(e,[{key:"start",value:function(){var e=this,t=this.file;t?this.options.endpoint||this.options.uploadUrl?(this.options.resume&&null==this._storage&&(this._storage=(0,d.getStorage)()),this._source?this._start(this._source):(this.options.fileReader||s.getSource)(t,this.options.chunkSize,(function(t,o){t?e._emitError(t):(e._source=o,e._start(o))}))):this._emitError(new Error("tus: neither an endpoint or an upload URL is provided")):this._emitError(new Error("tus: no file or stream to upload provided"))}},{key:"_start",value:function(e){var t=this,o=this.file;if(this.options.uploadLengthDeferred)this._size=null;else if(null!=this.options.uploadSize){if(this._size=+this.options.uploadSize,isNaN(this._size))return void this._emitError(new Error("tus: cannot convert `uploadSize` option into a number"))}else if(this._size=e.size,null==this._size)return void this._emitError(new Error("tus: cannot automatically derive upload's size from input and must be specified manually using the `uploadSize` option"));var i=this.options.retryDelays;if(null!=i){if("[object Array]"!==Object.prototype.toString.call(i))return void this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));var r=this.options.onError;this.options.onError=function(e){t.options.onError=r,null!=t._offset&&t._offset>t._offsetBeforeRetry&&(t._retryAttempt=0);var o=!0;"undefined"!=typeof window&&"navigator"in window&&!1===window.navigator.onLine&&(o=!1);var a=e.originalRequest?e.originalRequest.status:0,n=!h(a,400)||409===a||423===a;if(t._retryAttempt<i.length&&null!=e.originalRequest&&n&&o){var l=i[t._retryAttempt++];t._offsetBeforeRetry=t._offset,t.options.uploadUrl=t.url,t._retryTimeout=setTimeout((function(){t.start()}),l)}else t._emitError(e)}}if(this._aborted=!1,null==this.url)return null!=this.options.uploadUrl?(this.url=this.options.uploadUrl,void this._resumeUpload()):void(this._hasStorage()?this.options.fingerprint(o,this.options,(function(e,o){e?t._emitError(e):(t._fingerprint=o,t._storage.getItem(t._fingerprint,(function(e,o){e?t._emitError(e):null!=o?(t.url=o,t._resumeUpload()):t._createUpload()})))})):this._createUpload());this._resumeUpload()}},{key:"abort",value:function(t,o){var i=this;null!==this._xhr&&(this._xhr.abort(),this._source.close()),this._aborted=!0,null!=this._retryTimeout&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),o=o||function(){},t?e.terminate(this.url,this.options,(function(e,t){if(e)return o(e,t);i._hasStorage()?i._storage.removeItem(i._fingerprint,o):o()})):o()}},{key:"_hasStorage",value:function(){return this.options.resume&&this._storage}},{key:"_emitXhrError",value:function(e,t,o){this._emitError(new r.default(t,o,e))}},{key:"_emitError",value:function(e){if("function"!=typeof this.options.onError)throw e;this.options.onError(e)}},{key:"_emitSuccess",value:function(){"function"==typeof this.options.onSuccess&&this.options.onSuccess()}},{key:"_emitProgress",value:function(e,t){"function"==typeof this.options.onProgress&&this.options.onProgress(e,t)}},{key:"_emitChunkComplete",value:function(e,t,o){"function"==typeof this.options.onChunkComplete&&this.options.onChunkComplete(e,t,o)}},{key:"_setupXHR",value:function(e){this._xhr=e,f(e,this.options)}},{key:"_createUpload",value:function(){var e=this;if(this.options.endpoint){var t=(0,l.newRequest)();t.open("POST",this.options.endpoint,!0),t.onload=function(){if(h(t.status,200)){var o=t.getResponseHeader("Location");if(null!=o){if(e.url=(0,l.resolveUrl)(e.options.endpoint,o),0===e._size)return e._emitSuccess(),void e._source.close();e._hasStorage()&&e._storage.setItem(e._fingerprint,e.url,(function(t){t&&e._emitError(t)})),e.options.uploadDataDuringCreation?e._handleUploadResponse(t):(e._offset=0,e._startUpload())}else e._emitXhrError(t,new Error("tus: invalid or missing Location header"))}else e._emitXhrError(t,new Error("tus: unexpected response while creating upload"))},t.onerror=function(o){e._emitXhrError(t,new Error("tus: failed to create upload"),o)},this._setupXHR(t),this.options.uploadLengthDeferred?t.setRequestHeader("Upload-Defer-Length",1):t.setRequestHeader("Upload-Length",this._size);var o=function(e){var t=[];for(var o in e)t.push(o+" "+n.Base64.encode(e[o]));return t.join(",")}(this.options.metadata);""!==o&&t.setRequestHeader("Upload-Metadata",o),this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,this._addChunkToRequest(t)):t.send(null)}else this._emitError(new Error("tus: unable to create upload because no endpoint is provided"))}},{key:"_resumeUpload",value:function(){var e=this,t=(0,l.newRequest)();t.open("HEAD",this.url,!0),t.onload=function(){if(!h(t.status,200))return e._hasStorage()&&h(t.status,400)&&e._storage.removeItem(e._fingerprint,(function(t){t&&e._emitError(t)})),423===t.status?void e._emitXhrError(t,new Error("tus: upload is currently locked; retry later")):e.options.endpoint?(e.url=null,void e._createUpload()):void e._emitXhrError(t,new Error("tus: unable to resume upload (new upload cannot be created without an endpoint)"));var o=parseInt(t.getResponseHeader("Upload-Offset"),10);if(isNaN(o))e._emitXhrError(t,new Error("tus: invalid or missing offset value"));else{var i=parseInt(t.getResponseHeader("Upload-Length"),10);if(!isNaN(i)||e.options.uploadLengthDeferred){if(o===i)return e._emitProgress(i,i),void e._emitSuccess();e._offset=o,e._startUpload()}else e._emitXhrError(t,new Error("tus: invalid or missing length value"))}},t.onerror=function(o){e._emitXhrError(t,new Error("tus: failed to resume upload"),o)},this._setupXHR(t),t.send(null)}},{key:"_startUpload",value:function(){var e=this;if(!this._aborted){var t=(0,l.newRequest)();this.options.overridePatchMethod?(t.open("POST",this.url,!0),t.setRequestHeader("X-HTTP-Method-Override","PATCH")):t.open("PATCH",this.url,!0),t.onload=function(){h(t.status,200)?e._handleUploadResponse(t):e._emitXhrError(t,new Error("tus: unexpected response while uploading chunk"))},t.onerror=function(o){e._aborted||e._emitXhrError(t,new Error("tus: failed to upload chunk at offset "+e._offset),o)},this._setupXHR(t),t.setRequestHeader("Upload-Offset",this._offset),this._addChunkToRequest(t)}}},{key:"_addChunkToRequest",value:function(e){var t=this;"upload"in e&&(e.upload.onprogress=function(e){e.lengthComputable&&t._emitProgress(o+e.loaded,t._size)}),e.setRequestHeader("Content-Type","application/offset+octet-stream");var o=this._offset,i=this._offset+this.options.chunkSize;(i===1/0||i>this._size)&&!this.options.uploadLengthDeferred&&(i=this._size),this._source.slice(o,i,(function(o,i,r){o?t._emitError(o):(t.options.uploadLengthDeferred&&r&&(t._size=t._offset+(i&&i.size?i.size:0),e.setRequestHeader("Upload-Length",t._size)),null===i?e.send():(e.send(i),t._emitProgress(t._offset,t._size)))}))}},{key:"_handleUploadResponse",value:function(e){var t=this,o=parseInt(e.getResponseHeader("Upload-Offset"),10);if(isNaN(o))this._emitXhrError(e,new Error("tus: invalid or missing offset value"));else{if(this._emitProgress(o,this._size),this._emitChunkComplete(o-this._offset,o,this._size),this._offset=o,o==this._size)return this.options.removeFingerprintOnSuccess&&this.options.resume&&this._storage.removeItem(this._fingerprint,(function(e){e&&t._emitError(e)})),this._emitSuccess(),void this._source.close();this._startUpload()}}}],[{key:"terminate",value:function(e,t,o){if("function"!=typeof t&&"function"!=typeof o)throw new Error("tus: a callback function must be specified");"function"==typeof t&&(o=t,t={});var i=(0,l.newRequest)();i.open("DELETE",e,!0),i.onload=function(){204===i.status?o():o(new r.default(new Error("tus: unexpected response while terminating upload"),null,i))},i.onerror=function(e){o(new r.default(e,new Error("tus: failed to terminate upload"),i))},f(i,t),i.send(null)}}]),e}();function h(e,t){return e>=t&&e<t+100}function f(e,t){e.setRequestHeader("Tus-Resumable","1.0.0");var o=t.headers||{};for(var i in o)e.setRequestHeader(i,o[i]);e.withCredentials=t.withCredentials}p.defaultOptions=u,o.default=p},{"./error":9,"./node/fingerprint":1,"./node/request":5,"./node/source":6,"./node/storage":7,extend:12,"js-base64":13}],12:[function(e,t,o){var i=Object.prototype.hasOwnProperty,r=Object.prototype.toString,a=Object.defineProperty,n=Object.getOwnPropertyDescriptor,l=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===r.call(e)},s=function(e){if(!e||"[object Object]"!==r.call(e))return!1;var t,o=i.call(e,"constructor"),a=e.constructor&&e.constructor.prototype&&i.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!o&&!a)return!1;for(t in e);return void 0===t||i.call(e,t)},d=function(e,t){a&&"__proto__"===t.name?a(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},c=function(e,t){if("__proto__"===t){if(!i.call(e,t))return;if(n)return n(e,t).value}return e[t]};t.exports=function e(){var t,o,i,r,a,n,u=arguments[0],p=1,h=arguments.length,f=!1;for("boolean"==typeof u&&(f=u,u=arguments[1]||{},p=2),(null==u||"object"!=typeof u&&"function"!=typeof u)&&(u={});p<h;++p)if(null!=(t=arguments[p]))for(o in t)i=c(u,o),u!==(r=c(t,o))&&(f&&r&&(s(r)||(a=l(r)))?(a?(a=!1,n=i&&l(i)?i:[]):n=i&&s(i)?i:{},d(u,{name:o,newValue:e(f,n,r)})):void 0!==r&&d(u,{name:o,newValue:r}));return u}},{}],13:[function(_dereq_,module,exports){(function(global){!function(e,t){"object"==typeof exports&&void 0!==module?module.exports=t(e):t(e)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==global?global:this,(function(global){var _Base64=global.Base64,version="2.4.9",buffer;if(void 0!==module&&module.exports)try{buffer=eval("require('buffer').Buffer")}catch(e){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(e){for(var t={},o=0,i=e.length;o<i;o++)t[e.charAt(o)]=o;return t}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(e){if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?fromCharCode(192|t>>>6)+fromCharCode(128|63&t):fromCharCode(224|t>>>12&15)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return fromCharCode(240|t>>>18&7)+fromCharCode(128|t>>>12&63)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(e){return e.replace(re_utob,cb_utob)},cb_encode=function(e){var t=[0,2,1][e.length%3],o=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0);return[b64chars.charAt(o>>>18),b64chars.charAt(o>>>12&63),t>=2?"=":b64chars.charAt(o>>>6&63),t>=1?"=":b64chars.charAt(63&o)].join("")},btoa=global.btoa?function(e){return global.btoa(e)}:function(e){return e.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e)).toString("base64")}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e)).toString("base64")}:function(e){return btoa(utob(e))},encode=function(e,t){return t?_encode(String(e)).replace(/[+\/]/g,(function(e){return"+"==e?"-":"_"})).replace(/=/g,""):_encode(String(e))},encodeURI=function(e){return encode(e,!0)},re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),cb_btou=function(e){switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return fromCharCode(55296+(t>>>10))+fromCharCode(56320+(1023&t));case 3:return fromCharCode((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return fromCharCode((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},btou=function(e){return e.replace(re_btou,cb_btou)},cb_decode=function(e){var t=e.length,o=t%4,i=(t>0?b64tab[e.charAt(0)]<<18:0)|(t>1?b64tab[e.charAt(1)]<<12:0)|(t>2?b64tab[e.charAt(2)]<<6:0)|(t>3?b64tab[e.charAt(3)]:0),r=[fromCharCode(i>>>16),fromCharCode(i>>>8&255),fromCharCode(255&i)];return r.length-=[0,0,2,1][o],r.join("")},atob=global.atob?function(e){return global.atob(e)}:function(e){return e.replace(/[\s\S]{1,4}/g,cb_decode)},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e,"base64")).toString()}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e,"base64")).toString()}:function(e){return btou(atob(e))},decode=function(e){return _decode(String(e).replace(/[-_]/g,(function(e){return"-"==e?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var e=global.Base64;return global.Base64=_Base64,e};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"==typeof Object.defineProperty){var noEnum=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum((function(){return decode(this)}))),Object.defineProperty(String.prototype,"toBase64",noEnum((function(e){return encode(this,e)}))),Object.defineProperty(String.prototype,"toBase64URI",noEnum((function(){return encode(this,!0)})))}}return global.Meteor&&(Base64=global.Base64),void 0!==module&&module.exports&&(module.exports.Base64=global.Base64),{Base64:global.Base64}}))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],14:[function(e,t,o){var i=Object.prototype.hasOwnProperty;function r(e){return decodeURIComponent(e.replace(/\+/g," "))}o.stringify=function(e,t){t=t||"";var o=[];for(var r in"string"!=typeof t&&(t="?"),e)i.call(e,r)&&o.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return o.length?t+o.join("&"):""},o.parse=function(e){for(var t,o=/([^=?&]+)=?([^&]*)/g,i={};t=o.exec(e);){var a=r(t[1]),n=r(t[2]);a in i||(i[a]=n)}return i}},{}],15:[function(e,t,o){t.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},{}],16:[function(e,t,o){(function(o){var i=e("requires-port"),r=e("querystringify"),a=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,n=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,l=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],s={hash:1,query:1};function d(e){var t,i=o&&o.location||{},r={},a=typeof(e=e||i);if("blob:"===e.protocol)r=new u(unescape(e.pathname),{});else if("string"===a)for(t in r=new u(e,{}),s)delete r[t];else if("object"===a){for(t in e)t in s||(r[t]=e[t]);void 0===r.slashes&&(r.slashes=n.test(e.href))}return r}function c(e){var t=a.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function u(e,t,o){if(!(this instanceof u))return new u(e,t,o);var a,n,s,p,h,f,m=l.slice(),A=typeof t,g=this,b=0;for("object"!==A&&"string"!==A&&(o=t,t=null),o&&"function"!=typeof o&&(o=r.parse),t=d(t),a=!(n=c(e||"")).protocol&&!n.slashes,g.slashes=n.slashes||a&&t.slashes,g.protocol=n.protocol||t.protocol||"",e=n.rest,n.slashes||(m[3]=[/(.*)/,"pathname"]);b<m.length;b++)"function"!=typeof(p=m[b])?(s=p[0],f=p[1],s!=s?g[f]=e:"string"==typeof s?~(h=e.indexOf(s))&&("number"==typeof p[2]?(g[f]=e.slice(0,h),e=e.slice(h+p[2])):(g[f]=e.slice(h),e=e.slice(0,h))):(h=s.exec(e))&&(g[f]=h[1],e=e.slice(0,h.index)),g[f]=g[f]||a&&p[3]&&t[f]||"",p[4]&&(g[f]=g[f].toLowerCase())):e=p(e);o&&(g.query=o(g.query)),a&&t.slashes&&"/"!==g.pathname.charAt(0)&&(""!==g.pathname||""!==t.pathname)&&(g.pathname=function(e,t){for(var o=(t||"/").split("/").slice(0,-1).concat(e.split("/")),i=o.length,r=o[i-1],a=!1,n=0;i--;)"."===o[i]?o.splice(i,1):".."===o[i]?(o.splice(i,1),n++):n&&(0===i&&(a=!0),o.splice(i,1),n--);return a&&o.unshift(""),"."!==r&&".."!==r||o.push(""),o.join("/")}(g.pathname,t.pathname)),i(g.port,g.protocol)||(g.host=g.hostname,g.port=""),g.username=g.password="",g.auth&&(p=g.auth.split(":"),g.username=p[0]||"",g.password=p[1]||""),g.origin=g.protocol&&g.host&&"file:"!==g.protocol?g.protocol+"//"+g.host:"null",g.href=g.toString()}u.prototype={set:function(e,t,o){var a=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(o||r.parse)(t)),a[e]=t;break;case"port":a[e]=t,i(t,a.protocol)?t&&(a.host=a.hostname+":"+t):(a.host=a.hostname,a[e]="");break;case"hostname":a[e]=t,a.port&&(t+=":"+a.port),a.host=t;break;case"host":a[e]=t,/:\d+$/.test(t)?(t=t.split(":"),a.port=t.pop(),a.hostname=t.join(":")):(a.hostname=t,a.port="");break;case"protocol":a.protocol=t.toLowerCase(),a.slashes=!o;break;case"pathname":case"hash":if(t){var n="pathname"===e?"/":"#";a[e]=t.charAt(0)!==n?n+t:t}else a[e]=t;break;default:a[e]=t}for(var s=0;s<l.length;s++){var d=l[s];d[4]&&(a[d[1]]=a[d[1]].toLowerCase())}return a.origin=a.protocol&&a.host&&"file:"!==a.protocol?a.protocol+"//"+a.host:"null",a.href=a.toString(),a},toString:function(e){e&&"function"==typeof e||(e=r.stringify);var t,o=this,i=o.protocol;i&&":"!==i.charAt(i.length-1)&&(i+=":");var a=i+(o.slashes?"//":"");return o.username&&(a+=o.username,o.password&&(a+=":"+o.password),a+="@"),a+=o.host+o.pathname,(t="object"==typeof o.query?e(o.query):o.query)&&(a+="?"!==t.charAt(0)?"?"+t:t),o.hash&&(a+=o.hash),a}},u.extractProtocol=c,u.location=d,u.qs=r,t.exports=u}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{querystringify:14,"requires-port":15}]},{},[10])(10)}));
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let BackendAiStorageList=class extends BackendAIPage{constructor(){super(),this.storageType="general",this.folders=Object(),this.folderInfo=Object(),this.is_admin=!1,this.authenticated=!1,this.renameFolderId="",this.deleteFolderId="",this.explorer=Object(),this.explorerFiles=[],this.invitees=[],this.selectedFolder="",this.downloadURL="",this.uploadFiles=[],this.fileUploadQueue=[],this.fileUploadCount=0,this.concurrentFileUploadLimit=2,this.vhost="",this.vhosts=[],this.allowedGroups=[],this.fileListGrid=Object(),this.notification=Object(),this.deleteFileDialog=Object(),this.downloadFileDialog=Object(),this.indicator=Object(),this.allowed_folder_type=[],this.uploadFilesExist=!1,this._boundIndexRenderer=Object(),this._boundTypeRenderer=Object(),this._boundControlFolderListRenderer=Object(),this._boundControlFileListRenderer=Object(),this._boundPermissionViewRenderer=Object(),this._boundFileNameRenderer=Object(),this._boundCreatedTimeRenderer=Object(),this._boundPermissionRenderer=Object(),this._uploadFlag=!0,this._boundIndexRenderer=this.indexRenderer.bind(this),this._boundTypeRenderer=this.typeRenderer.bind(this),this._boundControlFolderListRenderer=this.controlFolderListRenderer.bind(this),this._boundControlFileListRenderer=this.controlFileListRenderer.bind(this),this._boundPermissionViewRenderer=this.permissionViewRenderer.bind(this),this._boundFileNameRenderer=this.fileNameRenderer.bind(this),this._boundCreatedTimeRenderer=this.createdTimeRenderer.bind(this),this._boundPermissionRenderer=this.permissionRenderer.bind(this)}static get styles(){return[BackendAiStyles,IronFlex,IronFlexAlignment,IronPositioning,css`
        vaadin-grid {
          border: 0 !important;
        }

        vaadin-grid.folderlist {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 200px);
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
          --dialog-height: calc(100vh - 170px);
          height: calc(100vh - 170px);
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
            --dialog-width: 100%;
            width: 100%;
          }
        }

        @media screen and (min-width: 900px) {
          #folder-explorer-dialog {
            left: 150px;
            --dialog-width: calc(100% - 100px);
            width: calc(100% - 100px);
          }

          #folder-explorer-dialog.mini_ui {
            left: 65px;
            --dialog-width: calc(100% - 45px);
            width: calc(100% - 45px);
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

        wl-dialog wl-textfield,
        wl-dialog wl-select {
          --input-font-family: Roboto, Noto, sans-serif;
          --input-color-disabled: #222222;
          --input-label-color-disabled: #222222;
          --input-label-font-size: 12px;
          --input-border-style-disabled: 1px solid #cccccc;
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
        }

      `]}_toggleCheckbox(){let e=this.shadowRoot.querySelectorAll(".multiple-action-buttons");this.fileListGrid.selectedItems.length>0?[].forEach.call(e,e=>{e.style.display="block"}):[].forEach.call(e,e=>{e.style.display="none"})}render(){return html$1`
      <lablup-loading-indicator id="loading-indicator"></lablup-loading-indicator>
      <vaadin-grid class="folderlist" theme="row-stripes column-borders compact" aria-label="Folder list" .items="${this.folders}">
        <vaadin-grid-column width="40px" flex-grow="0" resizable header="#" .renderer="${this._boundIndexRenderer}">
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

      <wl-dialog id="rename-folder-dialog" class="dialog-ask" fixed backdrop blockscrolling>
        <wl-card class="login-panel intro centered">
          <h3 class="horizontal center layout">
            <span>Rename a folder</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <section>
            <div>
              <mwc-textfield class="red" id="new-folder-name" label="Type new folder name"
                pattern="[a-zA-Z0-9_-.]*"
                validationMessage="Allows letters, numbers and -_." auto-validate></mwc-textfield>
              <br/>
              <wl-button class="blue button" type="submit" id="rename-button" outlined @click="${()=>this._renameFolder()}">
                <wl-icon>edit</wl-icon>
                Rename
              </wl-button>
            </div>
            </section>
        </wl-card>
      </wl-dialog>

      <wl-dialog id="delete-folder-dialog" class="dialog-ask" fixed backdrop blockscrolling>
        <wl-card class="login-panel intro centered">
          <h3 class="horizontal center layout">
            <span>${translate("data.folders.DeleteAFolder")}</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <section>
            <div class="warning">${translate("dialog.warning.CannotBeUndone")}</div>
            <div>
              <mwc-textfield class="red" id="delete-folder-name" label="Type folder name to delete"
                           pattern="[a-zA-Z0-9_-.]*"
                           validationMessage="Allows letters, numbers and -_." auto-validate></mwc-textfield>
              <br/>
              <wl-button class="blue button" type="submit" id="delete-button" outlined @click="${()=>this._deleteFolderWithCheck()}">
                <wl-icon>close</wl-icon>
                ${translate("data.folders.Delete")}
              </wl-button>
            </div>
            </section>
        </wl-card>
      </wl-dialog>

      <wl-dialog id="info-folder-dialog" class="dialog-ask" fixed backdrop blockscrolling>
        <wl-card class="intro centered" style="margin: 0;">
          <h3 class="horizontal center layout" style="border-bottom:1px solid #ddd;">
            <span>${this.folderInfo.name}</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <div role="listbox" style="margin: 0;">
            <vaadin-item>
              <div><strong>ID</strong></div>
              <div class="monospace" secondary>${this.folderInfo.id}</div>
            </vaadin-item>
            <vaadin-item>
              <div><strong>${translate("data.folders.Location")}</strong></div>
              <div secondary>${this.folderInfo.host}</div>
            </vaadin-item>
            <vaadin-item>
              <div><strong>${translate("data.folders.NumberOfFiles")}</strong></div>
              <div secondary>${this.folderInfo.numFiles}</div>
            </vaadin-item>
            ${this.folderInfo.is_owner?html$1`
              <vaadin-item>
                <div><strong>${translate("data.folders.Ownership")}</strong></div>
                <div secondary>${translate("data.folders.DescYouAreFolderOwner")}</div>
              </vaadin-item>
            `:html$1``}
            <vaadin-item>
              <div><strong>${translate("data.folders.Permission")}</strong></div>
              <div secondary>${this.folderInfo.permission}</div>
            </vaadin-item>
          </div>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="folder-explorer-dialog" class="folder-explorer">
        <wl-card>
          <h3 class="horizontal center layout" style="font-weight:bold">
            <span>${this.explorer.id}</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>

          <div class="breadcrumb">
            ${this.explorer.breadcrumb?html$1`
              <ul>
                ${this.explorer.breadcrumb.map(e=>html$1`
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
                `)}
              </ul>
            `:html$1``}
          </div>
          <div class="horizontal layout folder-action-buttons">
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
        </wl-card>
      </wl-dialog>

      <wl-dialog id="mkdir-dialog" class="dialog-ask" fixed blockscrolling backdrop>
        <wl-card elevation="1" class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>${translate("data.explorer.CreateANewFolder")}</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <section>
            <mwc-textfield id="mkdir-name"
                           label="${translate("data.explorer.Foldername")}"
                           auto-validate
                           required
                           validationMessage="Value is required."></mwc-textfield>
            <br/>
            <wl-button class="blue button" type="submit" id="mkdir-btn" @click="${e=>this._mkdir(e)}" outlined>
              <wl-icon>rowing</wl-icon>
              ${translate("button.Create")}
            </wl-button>
          </section>
        </wl-card>
      </wl-dialog>

      <wl-dialog
        id="share-folder-dialog"
        class="dialog-ask"
        fixed
        backdrop
        blockscrolling
      >
        <wl-card class="intro centered" style="margin: 0;">
          <h3 class="horizontal center layout" style="border-bottom:1px solid #ddd;">
            <span>${translate("data.explorer.ShareFolder")}</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <div role="listbox" style="margin: 0; padding: 20px 25px 25px 25px;">
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

            <wl-button
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
        </wl-card>
      </wl-dialog>
      <wl-dialog
        id="modify-permission-dialog"
        class="dialog-ask"
        fixed backdrop blockscrolling
      >
        <wl-card class="intro" style="margin: 0; width: 100%;">
          <h3 class="horizontal center layout" style="border-bottom:1px solid #ddd;">
            <span>${translate("data.explorer.ModifyPermissions")}</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <div role="listbox" style="margin: 0; padding: 10px;">
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
        </wl-card>
        <div slot="footer">
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
      </wl-dialog>
      <wl-dialog id="delete-file-dialog" fixed backdrop blockscrolling>
         <wl-title level="3" slot="header">Let's double-check</wl-title>
         <div slot="content">
            <p>${translate("dialog.warning.CannotBeUndone")}
            ${translate("dialog.ask.DoYouWantToProceed")}</p>
         </div>
         <div slot="footer">
            <wl-button inverted flat @click="${e=>this._hideDialog(e)}">${translate("button.Cancel")}</wl-button>
            <wl-button @click="${e=>this._deleteFileWithCheck(e)}">${translate("button.Okay")}</wl-button>
         </div>
      </wl-dialog>
      <wl-dialog id="download-file-dialog" fixed backdrop blockscrolling>
         <wl-title level="3" slot="header">${translate("data.explorer.DownloadFile")}</wl-title>
         <div slot="content">
            <a href="${this.downloadURL}">
              <wl-button outlined>${translate("data.explorer.TouchToDownload")}</wl-button>
            </a>
         </div>
         <div slot="footer">
            <wl-button @click="${e=>this._hideDialog(e)}">${translate("button.Close")}</wl-button>
         </div>
      </wl-dialog>
    `}firstUpdated(){this._addEventListenerDropZone(),this._mkdir=this._mkdir.bind(this),this.deleteFileDialog=this.shadowRoot.querySelector("#delete-file-dialog"),this.downloadFileDialog=this.shadowRoot.querySelector("#download-file-dialog"),this.fileListGrid=this.shadowRoot.querySelector("#fileList-grid"),this.fileListGrid.addEventListener("selected-items-changed",()=>{this._toggleCheckbox()}),this.indicator=this.shadowRoot.querySelector("#loading-indicator"),this.notification=globalThis.lablupNotification;let e=this.shadowRoot.querySelectorAll("mwc-textfield");for(const t of e)this._addInputValidator(t);document.addEventListener("backend-ai-group-changed",e=>this._refreshFolderList()),document.addEventListener("backend-ai-ui-changed",e=>this._refreshFolderUI(e)),this._refreshFolderUI({detail:{"mini-ui":globalThis.mini_ui}}),this._validatePathName()}_modifySharedFolderPermissions(){const e=this.shadowRoot.querySelectorAll("#modify-permission-dialog wl-select"),t=Array.prototype.filter.call(e,(e,t)=>e.value!==this.invitees[t].perm).map((e,t)=>({perm:e.value,user:this.invitees[t].shared_to.uuid,vfolder:this.invitees[t].vfolder_id})).map(e=>globalThis.backendaiclient.vfolder.modify_invitee_permission(e));Promise.all(t).then(e=>{0===e.length?this.notification.text="No changes made.":this.notification.text="Permission successfully modified.",this.notification.show(),this.shadowRoot.querySelector("#modify-permission-dialog").hide()})}permissionRenderer(e,t,o){render(html$1`
        <div>
          <wl-select outlined label="Select Permission">
            <option ?selected=${"ro"===o.item.perm} value="ro">View</option>
            <option ?selected=${"rw"===o.item.perm} value="rw">Edit</option>
            <option ?selected=${"wd"===o.item.perm} value="wd">Edit+Delete</option>
          </wl-select>
        </div>
      `,e)}_addTextField(e){let t=document.createElement("wl-textfield");t.label="Enter e-mail address",t.type="email",this.shadowRoot.querySelector("#textfields").appendChild(t)}_removeTextField(e){const t=this.shadowRoot.querySelector("#textfields");t.removeChild(t.lastChild)}indexRenderer(e,t,o){render(html$1`${this._indexFrom1(o.index)}`,e)}controlFolderListRenderer(e,t,o){render(html$1`
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

          ${this._hasPermission(o.item,"d")?html$1`
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
        ${!this._isDir(o.item)&&this._isDownloadable(o.item)?html$1`
          <mwc-icon-button id="download-btn" class="tiny fg blue" icon="cloud_download"
              filename="${o.item.filename}" @click="${e=>this._downloadFile(e)}"></mwc-icon-button>
        `:html$1``}
        <mwc-icon-button id="delete-btn" class="tiny fg red" icon="delete_forever"
              filename="${o.item.filename}" @click="${e=>this._openDeleteFileDialog(e)}"></mwc-icon-button>
       `,e)}fileNameRenderer(e,t,o){render(html$1`
        ${this._isDir(o.item)?html$1`
          <div class="indicator horizontal center layout" @click="${e=>this._enqueueFolder(e)}" name="${o.item.filename}">
            <mwc-icon-button class="fg controls-running" icon="folder_open"
                               name="${o.item.filename}"></mwc-icon-button>
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
        </div>`,e)}refreshFolderList(){return this._refreshFolderList()}_refreshFolderList(){this.indicator.show();let e=null;e=globalThis.backendaiclient.current_group_id(),globalThis.backendaiclient.vfolder.list(e).then(e=>{this.indicator.hide();let t=e.filter(e=>"general"!==this.storageType||e.name.startsWith(".")?"automount"===this.storageType&&e.name.startsWith(".")?e:void 0:e);this.folders=t}),globalThis.backendaiclient.vfolder.list_hosts().then(e=>{})}_refreshFolderUI(e){let t=this.shadowRoot.querySelector("#folder-explorer-dialog");e.detail.hasOwnProperty("mini-ui")&&!0===e.detail["mini-ui"]?t.classList.add("mini_ui"):t.classList.remove("mini_ui")}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this._refreshFolderList()},!0):(this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this._refreshFolderList()))}async _addFolderDialog(){let e=await globalThis.backendaiclient.vfolder.list_hosts();if(this.vhosts=e.allowed,this.vhost=e.default,this.allowed_folder_type.includes("group")){const e=await globalThis.backendaiclient.group.list();this.allowedGroups=e.groups}this.openDialog("add-folder-dialog")}_folderExplorerDialog(){this.openDialog("folder-explorer-dialog")}_mkdirDialog(){this.shadowRoot.querySelector("#mkdir-name").value="",this.openDialog("mkdir-dialog")}openDialog(e){this.shadowRoot.querySelector("#"+e).show()}closeDialog(e){this.shadowRoot.querySelector("#"+e).hide()}_indexFrom1(e){return e+1}_hasPermission(e,t){return!!e.permission.includes(t)||!(!e.permission.includes("w")||"r"!==t)}_getControlId(e){return e.target.closest("#controls").getAttribute("folder-id")}_infoFolder(e){const t=this._getControlId(e);globalThis.backendaiclient.vfolder.info(t).then(e=>{this.folderInfo=e,this.openDialog("info-folder-dialog")}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_renameFolderDialog(e){this.renameFolderId=this._getControlId(e),this.shadowRoot.querySelector("#new-folder-name").value="",this.openDialog("rename-folder-dialog")}_renameFolder(){globalThis.backendaiclient.vfolder.name=this.renameFolderId;const e=this.shadowRoot.querySelector("#new-folder-name").value,t=globalThis.backendaiclient.vfolder.rename(e);this.closeDialog("rename-folder-dialog"),t.then(e=>{this.notification.text="Folder renamed.",this.notification.show(),this._refreshFolderList()}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_deleteFolderDialog(e){this.deleteFolderId=this._getControlId(e),this.shadowRoot.querySelector("#delete-folder-name").value="",this.openDialog("delete-folder-dialog")}_deleteFolderWithCheck(){if(this.shadowRoot.querySelector("#delete-folder-name").value!=this.deleteFolderId)return this.notification.text="Folder name mismatched. Check your typing.",void this.notification.show();this.closeDialog("delete-folder-dialog"),this._deleteFolder(this.deleteFolderId)}_deleteFolder(e){globalThis.backendaiclient.vfolder.delete(e).then(e=>{this.notification.text="Folder is successfully deleted.",this.notification.show(),this._refreshFolderList()}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_clearExplorer(e=this.explorer.breadcrumb.join("/"),t=this.explorer.id,o=!1){globalThis.backendaiclient.vfolder.list_files(e,t).then(e=>{this.shadowRoot.querySelector("#fileList-grid").selectedItems=[],this.explorer.files=JSON.parse(e.files),this.explorerFiles=this.explorer.files,o&&this.openDialog("folder-explorer-dialog")})}_folderExplorer(e){let t={id:this._getControlId(e),breadcrumb:["."]};this.explorer=t,this._clearExplorer(t.breadcrumb.join("/"),t.id,!0)}_enqueueFolder(e){const t=e.target.getAttribute("name");this.explorer.breadcrumb.push(t),this._clearExplorer()}_gotoFolder(e){const t=e.target.getAttribute("dest");let o=this.explorer.breadcrumb;const i=o.indexOf(t);-1!==i&&(o=o.slice(0,i+1),this.explorer.breadcrumb=o,this._clearExplorer(o.join("/"),this.explorer.id,!1))}_mkdir(e){const t=this.shadowRoot.querySelector("#mkdir-name"),o=t.value,i=this.explorer;if(t.reportValidity(),t.checkValidity()){globalThis.backendaiclient.vfolder.mkdir([...i.breadcrumb,o].join("/"),i.id).catch(e=>{console.log(e),e&e.message?(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.show(!0,e))}).then(e=>{this.closeDialog("mkdir-dialog"),this._clearExplorer()})}}_isDir(e){return e.mode.startsWith("d")}_addEventListenerDropZone(){const e=this.shadowRoot.querySelector("#folder-explorer-dialog"),t=this.shadowRoot.querySelector("#dropzone");t.addEventListener("dragleave",()=>{t.style.display="none"}),e.addEventListener("dragover",e=>(e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy",t.style.display="flex",!1)),e.addEventListener("drop",e=>{e.stopPropagation(),e.preventDefault(),t.style.display="none";for(let t=0;t<e.dataTransfer.files.length;t++){const o=e.dataTransfer.files[t];o.size>2**20?console.log("File size limit (< 1 MiB)"):(o.progress=0,o.caption="",o.error=!1,o.complete=!1,this.uploadFiles.push(o))}})}_uploadFileBtnClick(e){const t=this.shadowRoot.querySelector("#fileInput");if(t&&document.createEvent){const e=document.createEvent("MouseEvents");e.initEvent("click",!0,!1),t.dispatchEvent(e)}}_uploadFileChange(e){const t=e.target.files.length;for(let o=0;o<t;o++){const t=e.target.files[o];let i="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let e=0;e<5;e++)i+=r.charAt(Math.floor(Math.random()*r.length));t.id=i,t.progress=0,t.caption="",t.error=!1,t.complete=!1,this.uploadFiles.push(t)}for(let e=0;e<t;e++)this.fileUpload(this.uploadFiles[e]);this.shadowRoot.querySelector("#fileInput").value=""}runFileUploadQueue(e=null){let t;null!==e&&this.fileUploadQueue.push(e);for(let e=this.fileUploadCount;e<this.concurrentFileUploadLimit;e++)this.fileUploadQueue.length>0&&(t=this.fileUploadQueue.shift(),this.fileUploadCount=this.fileUploadCount+1,t.start())}fileUpload(e){this._uploadFlag=!0,this.uploadFilesExist=this.uploadFiles.length>0;const t=this.explorer.breadcrumb.concat(e.name).join("/");globalThis.backendaiclient.vfolder.create_upload_session(t,e,this.explorer.id).then(o=>{const i=(new Date).getTime(),r=new tus.Upload(e,{endpoint:o,retryDelays:[0,3e3,5e3,1e4,2e4],uploadUrl:o,chunkSize:15728640,metadata:{filename:t,filetype:e.type},onError:e=>{console.log("Failed because: "+e),this.fileUploadCount=this.fileUploadCount-1,this.runFileUploadQueue()},onProgress:(t,o)=>{if(!this._uploadFlag)return r.abort(),this.uploadFiles[this.uploadFiles.indexOf(e)].caption="Canceling...",this.uploadFiles=this.uploadFiles.slice(),void setTimeout(()=>{this.uploadFiles=[],this.uploadFilesExist=!1},1e3);const a=(new Date).getTime(),n=(t/1048576/((a-i)/1e3)).toFixed(1)+"MB/s",l=Math.floor((o-t)/(t/(a-i)*1e3));let s="Less than 10 seconds";if(l>=86400)s="More than a day";else if(l>10){s=`${Math.floor(l/3600)}:${Math.floor(l%3600/60)}:${l%60}`}const d=(t/o*100).toFixed(1);this.uploadFiles[this.uploadFiles.indexOf(e)].progress=t/o,this.uploadFiles[this.uploadFiles.indexOf(e)].caption=`${d}% / Time left : ${s} / Speed : ${n}`,this.uploadFiles=this.uploadFiles.slice()},onSuccess:()=>{this._clearExplorer(),this.uploadFiles[this.uploadFiles.indexOf(e)].complete=!0,this.uploadFiles=this.uploadFiles.slice(),setTimeout(()=>{this.uploadFiles.splice(this.uploadFiles.indexOf(e),1),this.uploadFilesExist=this.uploadFiles.length>0,this.uploadFiles=this.uploadFiles.slice(),this.fileUploadCount=this.fileUploadCount-1,this.runFileUploadQueue()},1e3)}});this.runFileUploadQueue(r)})}_cancelUpload(e){this._uploadFlag=!1}_downloadFile(e){let t=e.target.getAttribute("filename"),o=this.explorer.breadcrumb.concat(t).join("/");globalThis.backendaiclient.vfolder.request_download_token(o,this.explorer.id).then(e=>{const o=e.token,i=globalThis.backendaiclient.vfolder.get_download_url_with_token(o);if(globalThis.iOSSafari)this.downloadURL=i,this.downloadFileDialog.show(),URL.revokeObjectURL(i);else{let e=document.createElement("a");e.style.display="none",e.addEventListener("click",(function(e){e.stopPropagation()})),e.href=i,e.download=t,document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(i)}})}_openDeleteFileDialog(e){let t=e.target.getAttribute("filename");this.deleteFileDialog.filename=t,this.deleteFileDialog.files=[],this.deleteFileDialog.show()}_openDeleteMultipleFileDialog(e){this.deleteFileDialog.files=this.fileListGrid.selectedItems,this.deleteFileDialog.filename="",this.deleteFileDialog.show()}_deleteFileWithCheck(e){let t=this.deleteFileDialog.files;if(t.length>0){let e=[];t.forEach(t=>{let o=this.explorer.breadcrumb.concat(t.filename).join("/");e.push(o)}),globalThis.backendaiclient.vfolder.delete_files(e,!0,this.explorer.id).then(e=>{this.notification.text="Files deleted.",this.notification.show(),this._clearExplorer(),this.deleteFileDialog.hide()})}else if(""!=this.deleteFileDialog.filename){let e=this.explorer.breadcrumb.concat(this.deleteFileDialog.filename).join("/");globalThis.backendaiclient.vfolder.delete_files([e],!0,this.explorer.id).then(e=>{this.notification.text="File deleted.",this.notification.show(),this._clearExplorer(),this.deleteFileDialog.hide()})}}_deleteFile(e){let t=e.target.getAttribute("filename"),o=this.explorer.breadcrumb.concat(t).join("/");globalThis.backendaiclient.vfolder.delete_files([o],!0,this.explorer.id).then(e=>{this.notification.text="File deleted.",this.notification.show(),this._clearExplorer()})}_humanReadableTime(e){const t=new Date(1e3*e),o=t.getTimezoneOffset()/60,i=t.getHours();return t.setHours(i-o),t.toUTCString()}_isDownloadable(e){return!0}_hideDialog(e){e.target.closest("wl-dialog").hide()}_shareFolderDialog(e){this.selectedFolder=this._getControlId(e),this.openDialog("share-folder-dialog")}_modifyPermissionDialog(e){globalThis.backendaiclient.vfolder.list_invitees(e).then(e=>{this.invitees=e.shared,this.openDialog("modify-permission-dialog")})}_shareFolder(e){const t=this.shadowRoot.querySelector("#textfields").children,o=Array.prototype.filter.call(t,e=>!e.hasAttribute("invalid")&&""!==e.value).map(e=>e.value.trim()),i="r"+(this.shadowRoot.querySelector("#share-folder-write").checked?"w":"o");if(0!==o.length)globalThis.backendaiclient.vfolder.invite(i,o,this.selectedFolder).then(e=>{let i;i=e.invited_ids&&e.invited_ids.length>0?e.invited_ids.reduce((e,t)=>e+t+" ","")+(1===o.length?"was":"were")+" successfully invited":"No one was invited",this.notification.text=i,this.notification.show(),this.shadowRoot.querySelector("#share-folder-dialog").hide();for(let e of t)e.value=""});else{this.notification.text="No valid emails were entered",this.notification.show(),this.shadowRoot.querySelector("#share-folder-dialog").hide();for(let e of t)e.value=""}}_validatePathName(){let e=this.shadowRoot.querySelector("#mkdir-name");e.validityTransform=(t,o)=>{if(o.valid){let t=/^([.a-zA-Z0-9-_]{1,})+(\/[a-zA-Z0-9-_]{1,})*([\/,\\]{0,1})$/gm.exec(e.value);return t||(e.validationMessage="Path should start with .(dot) or letters, numbers only."),{valid:t,customError:!t}}return o.valueMissing?(e.validationMessage="Value is required.",{valid:o.valid,valueMissing:!o.valid}):{valid:o.valid,badInput:!o.valid}}}};__decorate([property({type:String})],BackendAiStorageList.prototype,"storageType",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"folders",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"folderInfo",void 0),__decorate([property({type:Boolean})],BackendAiStorageList.prototype,"is_admin",void 0),__decorate([property({type:Boolean})],BackendAiStorageList.prototype,"authenticated",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"renameFolderId",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"deleteFolderId",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"explorer",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"explorerFiles",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"invitees",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"selectedFolder",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"downloadURL",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"uploadFiles",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"fileUploadQueue",void 0),__decorate([property({type:Number})],BackendAiStorageList.prototype,"fileUploadCount",void 0),__decorate([property({type:Number})],BackendAiStorageList.prototype,"concurrentFileUploadLimit",void 0),__decorate([property({type:String})],BackendAiStorageList.prototype,"vhost",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"vhosts",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"allowedGroups",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"fileListGrid",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"notification",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"deleteFileDialog",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"downloadFileDialog",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"indicator",void 0),__decorate([property({type:Array})],BackendAiStorageList.prototype,"allowed_folder_type",void 0),__decorate([property({type:Boolean})],BackendAiStorageList.prototype,"uploadFilesExist",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundIndexRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundTypeRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundControlFolderListRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundControlFileListRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundPermissionViewRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundFileNameRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundCreatedTimeRenderer",void 0),__decorate([property({type:Object})],BackendAiStorageList.prototype,"_boundPermissionRenderer",void 0),__decorate([property({type:Boolean})],BackendAiStorageList.prototype,"_uploadFlag",void 0),BackendAiStorageList=__decorate([customElement("backend-ai-storage-list")],BackendAiStorageList);let BackendAIData=class extends BackendAIPage{constructor(){super(),this.folders=Object(),this.folderInfo=Object(),this.is_admin=!1,this.authenticated=!1,this.deleteFolderId="",this.vhost="",this.vhosts=[],this.allowedGroups=[],this.allowed_folder_type=[],this.notification=Object(),this.indicator=Object(),this.folderLists=Object(),this._status="inactive",this.active=!0,this._lists=Object()}static get styles(){return[BackendAiStyles,IronFlex,IronFlexAlignment,IronPositioning,css`
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
          width: 330px;
        }

        mwc-icon-button.tiny {
          width: 35px;
          height: 35px;
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

        wl-dialog wl-textfield,
        wl-dialog wl-select {
          --input-font-family: Roboto, Noto, sans-serif;
          --input-color-disabled: #222222;
          --input-label-color-disabled: #222222;
          --input-label-font-size: 12px;
          --input-border-style-disabled: 1px solid #cccccc;
        }

        #textfields wl-textfield,
        wl-label {
          margin-bottom: 20px;
        }

        wl-label {
          --label-font-family: Roboto, Noto, sans-serif;
          --label-color: black;
        }

      `]}render(){return html$1`
      <lablup-loading-indicator id="loading-indicator"></lablup-loading-indicator>
      <wl-card class="item" elevation="1" style="padding-bottom:20px;">
        <h3 class="horizontal center flex layout tab">
          <wl-tab-group>
            <wl-tab value="general-folder" checked @click="${e=>this._showTab(e.target)}">${translate("data.Folders")}</wl-tab>
            <wl-tab value="automount-folder" @click="${e=>this._showTab(e.target)}">${translate("data.AutomountFolders")}</wl-tab>
            <wl-tab value="shared-folder" disabled>${translate("data.SharedData")}</wl-tab>
            <wl-tab value="model" disabled>${translate("data.Models")}</wl-tab>
          </wl-tab-group>
          <span class="flex"></span>
          <wl-button class="fg red" id="add-folder" outlined @click="${()=>this._addFolderDialog()}">
            <wl-icon>add</wl-icon>
            ${translate("data.NewFolder")}
          </wl-button>
        </h3>
        <div id="general-folder-lists" class="tab-content">
          <backend-ai-storage-list id="general-folder-storage" storageType="general" ?active="${!0===this.active}"></backend-ai-storage-list>
        </div>
        <div id="automount-folder-lists" class="tab-content" style="display:none;">
          <p>${translate("data.DialogFolderStartingWithDotAutomount")}</p>
          <backend-ai-storage-list id="automount-folder-storage" storageType="automount" ?active="${!0===this.active}"></backend-ai-storage-list>
        </div>
      </wl-card>
      <wl-dialog id="add-folder-dialog" class="dialog-ask" fixed backdrop blockscrolling>
        <wl-card elevation="1" class="login-panel intro centered">
          <h3 class="horizontal center layout">
            <span>${translate("data.CreateANewStorageFolder")}</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <section>
            <mwc-textfield id="add-folder-name" label="${translate("data.Foldername")}" pattern="[a-zA-Z0-9_-.]*"
            auto-validate required validationMessage="${translate("data.Allowslettersnumbersand-_dot")}"></mwc-textfield>
            <div class="horizontal layout">
              <paper-dropdown-menu id="add-folder-host" label="${translate("data.Host")}">
                <paper-listbox slot="dropdown-content" selected="0">
                ${this.vhosts.map(e=>html$1`
                  <paper-item id="${e}" label="${e}">${e}</paper-item>
                `)}
                </paper-listbox>
              </paper-dropdown-menu>
              <paper-dropdown-menu id="add-folder-type" label="${translate("data.Type")}">
                <paper-listbox slot="dropdown-content" selected="0">
                ${this.allowed_folder_type.includes("user")?html$1`
                  <paper-item label="user">${translate("data.User")}</paper-item>
                `:html$1``}
                ${this.is_admin&&this.allowed_folder_type.includes("group")?html$1`
                  <paper-item label="group">${translate("data.Group")}</paper-item>
                `:html$1``}
                </paper-listbox>
              </paper-dropdown-menu>
            </div>
            ${this.is_admin&&this.allowed_folder_type.includes("group")?html$1`
            <div class="horizontal layout">
              <paper-dropdown-menu id="add-folder-group" label=" ${translate("data.Group")}">
                <paper-listbox slot="dropdown-content" selected="0">
                ${this.allowedGroups.map(e=>html$1`
                  <paper-item id="${e.name}" label="${e.name}">${e.name}</paper-item>
                `)}
                </paper-listbox>
              </paper-dropdown-menu>
            </div>
            `:html$1``}
            <div style="font-size:11px;">
              ${translate("data.DialogFolderStartingWithDotAutomount")}
            </div>
            <br/>
            <wl-button class="blue button" type="button" id="add-button" outlined @click="${()=>this._addFolder()}">
              <wl-icon>rowing</wl-icon>
               ${translate("data.Create")}
            </wl-button>
          </section>
        </wl-card>
      </wl-dialog>
    `}indexRenderer(e,t,o){render(html$1`${this._indexFrom1(o.index)}`,e)}firstUpdated(){this.indicator=this.shadowRoot.querySelector("#loading-indicator"),this.notification=globalThis.lablupNotification,this.folderLists=this.shadowRoot.querySelectorAll("backend-ai-storage-list")}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,globalThis.backendaiclient.vfolder.allowed_types().then(e=>{this.allowed_folder_type=e})},!0):(this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,globalThis.backendaiclient.vfolder.allowed_types().then(e=>{this.allowed_folder_type=e})))}_showTab(e){let t=this.shadowRoot.querySelectorAll(".tab-content");for(let e=0;e<t.length;e++)t[e].style.display="none";this.shadowRoot.querySelector("#"+e.value+"-lists").style.display="block";for(let e=0;e<this._lists.length;e++)this._lists[e].removeAttribute("active");this.shadowRoot.querySelector("#"+e.value+"-storage").setAttribute("active",!0)}async _addFolderDialog(){let e=await globalThis.backendaiclient.vfolder.list_hosts();if(this.vhosts=e.allowed,this.vhost=e.default,this.allowed_folder_type.includes("group")){const e=await globalThis.backendaiclient.group.list();this.allowedGroups=e.groups}this.openDialog("add-folder-dialog")}openDialog(e){this.shadowRoot.querySelector("#"+e).show()}closeDialog(e){this.shadowRoot.querySelector("#"+e).hide()}_indexFrom1(e){return e+1}_addFolder(){let e,t=this.shadowRoot.querySelector("#add-folder-name"),o=t.value,i=this.shadowRoot.querySelector("#add-folder-host").value,r=this.shadowRoot.querySelector("#add-folder-type").value;if(!1===["user","group"].includes(r)&&(r="user"),e="user"===r?"":this.is_admin?this.shadowRoot.querySelector("#add-folder-group").value:globalThis.backendaiclient.current_group,t.reportValidity(),t.checkValidity()){globalThis.backendaiclient.vfolder.create(o,i,e).then(e=>{this.notification.text="Folder is successfully created.",this.notification.show(),this._refreshFolderList()}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}),this.closeDialog("add-folder-dialog")}}_refreshFolderList(){for(const e of this.folderLists)e.refreshFolderList()}_hideDialog(e){e.target.closest("wl-dialog").hide()}};__decorate([property({type:Object})],BackendAIData.prototype,"folders",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"folderInfo",void 0),__decorate([property({type:Boolean})],BackendAIData.prototype,"is_admin",void 0),__decorate([property({type:Boolean})],BackendAIData.prototype,"authenticated",void 0),__decorate([property({type:String})],BackendAIData.prototype,"deleteFolderId",void 0),__decorate([property({type:String})],BackendAIData.prototype,"vhost",void 0),__decorate([property({type:Array})],BackendAIData.prototype,"vhosts",void 0),__decorate([property({type:Array})],BackendAIData.prototype,"allowedGroups",void 0),__decorate([property({type:Array})],BackendAIData.prototype,"allowed_folder_type",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"notification",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"indicator",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"folderLists",void 0),__decorate([property({type:String})],BackendAIData.prototype,"_status",void 0),__decorate([property({type:Boolean})],BackendAIData.prototype,"active",void 0),__decorate([property({type:Object})],BackendAIData.prototype,"_lists",void 0),BackendAIData=__decorate([customElement("backend-ai-data-view")],BackendAIData);var BackendAIData$1=BackendAIData;export default BackendAIData$1;
