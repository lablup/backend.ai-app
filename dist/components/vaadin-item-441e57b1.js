import{r as e,b as t,t as i,c as o,E as r,h as n,e as a,T as s,P as l,D as d}from"./vaadin-grid-sorter-4b2ab90d.js";import{b as h}from"./backend-ai-webui-3ec8f434.js";const u=document.createElement("template");u.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      /* RTL specific styles */\n\n      :host([dir="rtl"]) [part="label"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n      :host([required][dir="rtl"]) [part="label"] {\n        padding-left: 1em;\n        padding-right: 0;\n      }\n\n      :host([dir="rtl"]) [part="label"]::after {\n        right: auto;\n        left: 0;\n      }\n\n      :host([dir="rtl"]) [part="error-message"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(u.content);const p=document.createElement("template");p.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(p.content),e("vaadin-text-field",h`
    :host {
      --lumo-text-field-size: var(--lumo-size-m);
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      padding: var(--lumo-space-xs) 0;
    }

    :host::before {
      height: var(--lumo-text-field-size);
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
    }

    :host([focused]:not([readonly])) [part='label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([has-helper]) [part='helper-text']::before {
      content: '';
      display: block;
      height: 0.4em;
    }

    [part='helper-text'],
    [part='helper-text'] ::slotted(*) {
      display: block;
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-xs);
      line-height: var(--lumo-line-height-xs);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      transition: color 0.2s;
    }

    [part='value'],
    [part='input-field'] ::slotted(input),
    [part='input-field'] ::slotted(textarea),
    [part='input-field'] ::slotted([part='value']) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size);
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    [part='value']:focus,
    :host([focused]) [part='input-field'] ::slotted(input),
    :host([focused]) [part='input-field'] ::slotted(textarea) {
      -webkit-mask-image: none;
      mask-image: none;
    }

    [part='value']::placeholder {
      color: inherit;
      transition: opacity 0.175s 0.1s;
      opacity: 0.5;
    }

    [part='input-field'] {
      border-radius: var(--lumo-border-radius);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    [part='input-field']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    /* Hover */

    :host(:hover:not([readonly]):not([focused])) [part='label'],
    :host(:hover:not([readonly])) [part='helper-text'],
    :host(:hover:not([readonly])) [part='helper-text'] ::slotted(*) {
      color: var(--lumo-body-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.1;
    }

    /* Touch device adjustment */
    @media (pointer: coarse) {
      :host(:hover:not([readonly]):not([focused])) [part='label'] {
        color: var(--lumo-secondary-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
        opacity: 0;
      }

      :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
        opacity: 0.2;
      }
    }

    /* Trigger when not focusing using the keyboard */
    :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
      transform: scaleX(0);
      transition-duration: 0.15s, 1s;
    }

    /* Focus-ring */

    :host([focus-ring]) [part='input-field'] {
      box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    /* Read-only and disabled */
    :host([readonly]) [part='value']::placeholder,
    :host([disabled]) [part='value']::placeholder {
      opacity: 0;
    }

    /* Read-only */

    :host([readonly]) [part='input-field'] {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly]) [part='input-field']::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled style */

    :host([disabled]) {
      pointer-events: none;
    }

    :host([disabled]) [part='input-field'] {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) [part='label'],
    :host([disabled]) [part='helper-text'],
    :host([disabled]) [part='value'],
    :host([disabled]) [part='input-field'] ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid style */

    :host([invalid]) [part='input-field'] {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid]) [part='input-field']::after {
      background-color: var(--lumo-error-color-50pct);
    }

    :host([invalid][focus-ring]) [part='input-field'] {
      box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
    }

    :host([input-prevented]) [part='input-field'] {
      color: var(--lumo-error-text-color);
    }

    /* Small theme */

    :host([theme~='small']) {
      font-size: var(--lumo-font-size-s);
      --lumo-text-field-size: var(--lumo-size-s);
    }

    :host([theme~='small'][has-label]) [part='label'] {
      font-size: var(--lumo-font-size-xs);
    }

    :host([theme~='small'][has-label]) [part='error-message'] {
      font-size: var(--lumo-font-size-xxs);
    }

    /* Text align */

    :host([theme~='align-left']) [part='value'] {
      text-align: left;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) [part='value'] {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) [part='value'] {
      text-align: right;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) [part='value'] {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) [part='value'] {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
    /* helper-text position */

    :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
      display: none;
    }

    :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
      content: '';
      display: block;
      height: 0.4em;
    }

    :host([has-helper][theme~='helper-above-field']) [part='label'] {
      order: 0;
      padding-bottom: 0.4em;
    }

    :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
      order: 1;
    }

    :host([has-helper][theme~='helper-above-field']) [part='input-field'] {
      order: 2;
    }

    :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
      order: 3;
    }

    /* Slotted content */

    [part='input-field'] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
      color: var(--lumo-secondary-text-color);
      font-weight: 400;
    }

    /* Slotted icons */

    [part='input-field'] ::slotted(iron-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    [part='input-field'] ::slotted(iron-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    [part='clear-button']::before {
      content: var(--lumo-icons-cross);
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='input-field']::after {
      transform-origin: 0% 0;
    }

    :host([dir='rtl']) [part='value'],
    :host([dir='rtl']) [part='input-field'] ::slotted(input),
    :host([dir='rtl']) [part='input-field'] ::slotted(textarea) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    :host([dir='rtl']) [part='value']:focus,
    :host([focused][dir='rtl']) [part='input-field'] ::slotted(input),
    :host([focused][dir='rtl']) [part='input-field'] ::slotted(textarea) {
      -webkit-mask-image: none;
      mask-image: none;
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) [part='value'],
      :host([dir='rtl']) [part='input-field'] ::slotted(input),
      :host([dir='rtl']) [part='input-field'] ::slotted(textarea),
      :host([dir='rtl']) [part='input-field'] ::slotted([part='value']) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left'][dir='rtl']) [part='value'] {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) [part='value'] {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) [part='value'] {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) [part='value'] {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) [part='value'] {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-text-field",include:["lumo-required-field","lumo-field-button"]}),
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
e("",h`
    :host {
      display: inline-flex;
      outline: none;
    }

    :host::before {
      content: '\\2003';
      width: 0;
      display: inline-block;
      /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
    }

    :host([hidden]) {
      display: none !important;
    }

    .vaadin-text-field-container,
    .vaadin-text-area-container {
      display: flex;
      flex-direction: column;
      min-width: 100%;
      max-width: 100%;
      width: var(--vaadin-text-field-default-width, 12em);
    }

    [part='label']:empty {
      display: none;
    }

    [part='input-field'] {
      display: flex;
      align-items: center;
      flex: auto;
    }

    .vaadin-text-field-container [part='input-field'] {
      flex-grow: 0;
    }

    /* Reset the native input styles */
    [part='value'],
    [part='input-field'] ::slotted(input),
    [part='input-field'] ::slotted(textarea) {
      -webkit-appearance: none;
      -moz-appearance: none;
      outline: none;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      min-width: 0;
      font: inherit;
      font-size: 1em;
      line-height: normal;
      color: inherit;
      background-color: transparent;
      /* Disable default invalid style in Firefox */
      box-shadow: none;
    }

    [part='input-field'] ::slotted(*) {
      flex: none;
    }

    [part='value'],
    [part='input-field'] ::slotted(input),
    [part='input-field'] ::slotted(textarea),
    [part='input-field'] ::slotted([part='value']) {
      flex: auto;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    [part='input-field'] ::slotted(textarea) {
      resize: none;
    }

    [part='clear-button'] {
      display: none;
      cursor: default;
    }

    [part='clear-button']::before {
      content: '✕';
    }

    :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
      display: block;
    }
  `,{moduleId:"vaadin-text-field-shared-styles"});const c={default:["autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title","disabled","readonly","required"],accessible:["invalid"]},m={DEFAULT:"default",ACCESSIBLE:"accessible"},v=e=>class extends e{static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},helperText:{type:String,value:"",observer:"_helperTextChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},preventInvalidInput:{type:Boolean},_enabledCharPattern:String,_labelId:String,_helperTextId:String,_errorId:String,_inputId:String,_hasSlottedHelper:Boolean}}static get observers(){return["_hostPropsChanged("+c.default.join(", ")+")","_hostAccessiblePropsChanged("+c.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId, helperText, _helperTextId, _hasSlottedHelper)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label, helperText)","__enabledCharPatternChanged(_enabledCharPattern)"]}get focusElement(){if(!this.shadowRoot)return;const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return e||this.shadowRoot.querySelector('[part="value"]')}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern)")}_onInput(e){if(this.preventInvalidInput){const e=this.inputElement;if(e.value.length>0&&!this.checkValidity())return e.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=t.debounce(this._inputDebouncer,i.after(200),(()=>{this.removeAttribute("input-prevented")})))}e.__fromClearButton||(this.__userInput=!0),this.value=e.target.value,this.__userInput=!1}_onChange(e){if(this._valueClearing)return;const t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}_valueChanged(e,t){""===e&&void 0===t||(""!==e&&null!=e?this.setAttribute("has-value",""):this.removeAttribute("has-value"),this.__userInput||(void 0!==e?this.inputElement.value=e:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(e){this._setOrToggleAttribute("has-label",!!e,this)}_helperTextChanged(e){this._setOrToggleAttribute("has-helper",!!e,this)}_errorMessageChanged(e){this._setOrToggleAttribute("has-error-message",!!e,this)}_onHelperSlotChange(){const e=this.shadowRoot.querySelector('[name="helper"]').assignedNodes({flatten:!0});this._hasSlottedHelper=e.filter((e=>3!==e.nodeType)).length,this._hasSlottedHelper?this.setAttribute("has-helper","slotted"):""!==this.helperText&&null!==this.helperText||this.removeAttribute("has-helper")}_onSlotChange(){const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),e&&!this._slottedInput?(this._validateSlottedValue(e),this._addInputListeners(e),this._slottedInput=e):!e&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(m).map((e=>m[e])).forEach((e=>this._propagateHostAttributes(c[e].map((e=>this[e])),e)))}_hostPropsChanged(...e){this._propagateHostAttributes(e,m.DEFAULT)}_hostAccessiblePropsChanged(...e){this._propagateHostAttributes(e,m.ACCESSIBLE)}_validateSlottedValue(e){e.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),e.value="")}_propagateHostAttributes(e,t){const i=this.inputElement,o=c[t];t===m.ACCESSIBLE?o.forEach(((t,o)=>{this._setOrToggleAttribute(t,e[o],i),this._setOrToggleAttribute(`aria-${t}`,!!e[o]&&"true",i)})):o.forEach(((t,o)=>{this._setOrToggleAttribute(t,e[o],i)}))}_setOrToggleAttribute(e,t,i){e&&i&&(t?i.setAttribute(e,"boolean"==typeof t?"":t):i.removeAttribute(e))}_constraintsChanged(e,t,i,o){this.invalid&&(e||t||i||o?this.validate():this.invalid=!1)}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength||this.__forceCheckValidity?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange),e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange),e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}ready(){super.ready(),this._createConstraintsObserver(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this);const e=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(e),this._slottedInput&&this._addInputListeners(this._slottedInput),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),this._onHelperSlotChange(),this.shadowRoot.querySelector('[name="helper"]').addEventListener("slotchange",this._onHelperSlotChange.bind(this)),this.$.clearButton.addEventListener("mousedown",(()=>this._valueClearing=!0)),this.$.clearButton.addEventListener("mouseleave",(()=>this._valueClearing=!1)),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var t=v._uniqueId=1+v._uniqueId||0;this._errorId=`${this.constructor.is}-error-${t}`,this._labelId=`${this.constructor.is}-label-${t}`,this._helperTextId=`${this.constructor.is}-helper-${t}`,this._inputId=`${this.constructor.is}-input-${t}`,this.shadowRoot.querySelector('[part="error-message"]').addEventListener("transitionend",(()=>{this.__observeOffsetHeight()}))}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout((()=>{try{this.inputElement.setSelectionRange(0,9999)}catch(e){}})))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1;const t=new Event("input",{bubbles:!0,composed:!0});t.__fromClearButton=!0;const i=new Event("change",{bubbles:!this._slottedInput});i.__fromClearButton=!0,this.inputElement.dispatchEvent(t),this.inputElement.dispatchEvent(i)}_onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){const e=!!this.value;this.clear(),e&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}this._enabledCharPattern&&!this.__shouldAcceptKey(e)&&e.preventDefault()}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||1!==e.key.length||this.__enabledCharRegExp.test(e.key)}_onPaste(e){if(this._enabledCharPattern){const t=(e.clipboardData||window.clipboardData).getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onDrop(e){if(this._enabledCharPattern){const t=e.dataTransfer.getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onBeforeInput(e){this._enabledCharPattern&&e.data&&!this.__enabledTextRegExp.test(e.data)&&e.preventDefault()}__enabledCharPatternChanged(e){this.__enabledCharRegExp=e&&new RegExp("^"+e+"$"),this.__enabledTextRegExp=e&&new RegExp("^"+e+"*$")}_getActiveErrorId(e,t,i,o,r,n){const a=[];(o||n)&&a.push(r),t&&e&&a.push(i),this._setOrToggleAttribute("aria-describedby",a.join(" "),this.focusElement)}_getActiveLabelId(e,t,i){let o=i;e&&(o=`${t} ${i}`),this.focusElement.setAttribute("aria-labelledby",o)}_getErrorMessageAriaHidden(e,t,i){return(!(t&&e?i:void 0)).toString()}_dispatchIronResizeEventIfNeeded(e,t){const i="__previous"+e;void 0!==this[i]&&this[i]!==t&&this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0,composed:!0})),this[i]=t}__observeOffsetHeight(){this.__observeOffsetHeightDebouncer=t.debounce(this.__observeOffsetHeightDebouncer,o,(()=>{this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)}))}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class f extends(r(v(a(s(l))))){static get template(){return n`
      <style include="vaadin-text-field-shared-styles"></style>

      <div class="vaadin-text-field-container">
        <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

        <div part="input-field" id="[[_inputId]]">
          <slot name="prefix"></slot>

          <slot name="input">
            <input part="value" />
          </slot>

          <div part="clear-button" id="clearButton" role="button" aria-label$="[[i18n.clear]]"></div>
          <slot name="suffix"></slot>
        </div>

        <div part="helper-text" on-click="focus" id="[[_helperTextId]]">
          <slot name="helper">[[helperText]]</slot>
        </div>

        <div
          part="error-message"
          id="[[_errorId]]"
          aria-live="assertive"
          aria-hidden$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]"
          >[[errorMessage]]</div
        >
      </div>
    `}static get is(){return"vaadin-text-field"}static get version(){return"3.0.2"}static get properties(){return{pattern:{type:String},title:{type:String}}}}customElements.define(f.is,f);
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class g extends l{static get template(){return n`
      <style>
        :host {
          display: inline-flex;
          max-width: 100%;
        }

        #filter {
          width: 100%;
          box-sizing: border-box;
        }
      </style>
      <slot name="filter">
        <vaadin-text-field id="filter" value="{{value}}"></vaadin-text-field>
      </slot>
    `}static get is(){return"vaadin-grid-filter"}static get properties(){return{path:String,value:{type:String,notify:!0},_connected:Boolean}}connectedCallback(){super.connectedCallback(),this._connected=!0}static get observers(){return["_filterChanged(path, value, _connected)"]}ready(){super.ready();const e=this.firstElementChild;e&&"filter"!==e.getAttribute("slot")&&(console.warn('Make sure you have assigned slot="filter" to the child elements of <vaadin-grid-filter>'),e.setAttribute("slot","filter"))}_filterChanged(e,o,r){void 0!==e&&void 0!==o&&r&&(void 0===this._previousValue&&""===o||(this._previousValue=o,this._debouncerFilterChanged=t.debounce(this._debouncerFilterChanged,i.after(200),(()=>{this.dispatchEvent(new CustomEvent("filter-changed",{bubbles:!0}))}))))}focus(){this.$.filter.focus()}}customElements.define(g.is,g),e("vaadin-item",h`
    :host {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      padding: 0.5em 1em;
      min-height: var(--lumo-size-m);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
    }

    /* Checkmark */
    :host([tabindex])::before {
      display: var(--_lumo-item-selected-icon-display, none);
      content: var(--lumo-icons-checkmark);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      font-weight: normal;
      width: 1em;
      height: 1em;
      margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
      color: var(--lumo-primary-text-color);
      flex: none;
      opacity: 0;
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
    }

    :host([selected])::before {
      opacity: 1;
    }

    :host([active]:not([selected]))::before {
      transform: scale(0.8);
      opacity: 0;
      transition-duration: 0s;
    }

    [part='content'] {
      flex: auto;
    }

    /* Disabled */
    :host([disabled]) {
      color: var(--lumo-disabled-text-color);
      cursor: default;
      pointer-events: none;
    }

    /* Slotted icons */
    :host ::slotted(iron-icon) {
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }
  `,{moduleId:"lumo-item"});
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const b=e=>class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",(()=>this._setFocused(!0)),!0),this.addEventListener("blur",(()=>this._setFocused(!1)),!0),this.addEventListener("mousedown",(()=>{this._setActive(this._mousedown=!0);const e=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e)})),this.addEventListener("keydown",(e=>this._onKeydown(e))),this.addEventListener("keyup",(e=>this._onKeyup(e)))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(){this.hasAttribute("active")&&(this._setActive(!1),this.click())}}
/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class _ extends(b(s(d(l)))){static get template(){return n`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-item"}static get version(){return"3.0.0"}constructor(){super(),this.value}}customElements.define(_.is,_);
