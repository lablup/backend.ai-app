import{_ as e,l as t,e as i,aq as s,$ as l,u as a,w as r,ar as n,r as d,as as o,n as h}from"./backend-ai-webui-29a04808.js";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const u={fromAttribute:e=>null!==e&&(""===e||e),toAttribute:e=>"boolean"==typeof e?e?"":null:e};class c extends s{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}render(){const e=this.charCounter&&-1!==this.maxLength,t=e&&"internal"===this.charCounter,i=e&&!t,s=!!this.helper||!!this.validationMessage||i,r={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":t};return l`
      <label class="mdc-text-field mdc-text-field--textarea ${a(r)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(t)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(s,i)}
    `}renderInput(){const e=this.label?"label":void 0,t=-1===this.minLength?void 0:this.minLength,i=-1===this.maxLength?void 0:this.maxLength,s=this.autocapitalize?this.autocapitalize:void 0;return l`
      <textarea
          aria-labelledby=${r(e)}
          class="mdc-text-field__input"
          .value="${n(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${r(t)}"
          maxlength="${r(i)}"
          name="${r(""===this.name?void 0:this.name)}"
          inputmode="${r(this.inputMode)}"
          autocapitalize="${r(s)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`}}e([t("textarea")],c.prototype,"formElement",void 0),e([i({type:Number})],c.prototype,"rows",void 0),e([i({type:Number})],c.prototype,"cols",void 0),e([i({converter:u})],c.prototype,"charCounter",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const p=d`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let m=class extends c{};m.styles=[o,p],m=e([h("mwc-textarea")],m);
