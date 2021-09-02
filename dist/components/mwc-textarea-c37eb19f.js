import{_ as e,q as t,p as i,af as s,h as a,l,n,ag as r,b as d,ah as h,c as o}from"./backend-ai-webui-cb5ec9bc.js";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const c={fromAttribute:e=>null!==e&&(""===e||e),toAttribute:e=>"boolean"==typeof e?e?"":null:e};class u extends s{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}render(){const e=this.charCounter&&-1!==this.maxLength,t=e&&"internal"===this.charCounter,i=e&&!t,s=!!this.helper||!!this.validationMessage||i,n={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":t};return a`
      <label class="mdc-text-field mdc-text-field--textarea ${l(n)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(t)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(s,i)}
    `}renderInput(){const e=this.label?"label":void 0,t=-1===this.minLength?void 0:this.minLength,i=-1===this.maxLength?void 0:this.maxLength,s=this.autocapitalize?this.autocapitalize:void 0;return a`
      <textarea
          aria-labelledby=${n(e)}
          class="mdc-text-field__input"
          .value="${r(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${n(t)}"
          maxlength="${n(i)}"
          name="${n(""===this.name?void 0:this.name)}"
          inputmode="${n(this.inputMode)}"
          autocapitalize="${n(s)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`}}e([t("textarea")],u.prototype,"formElement",void 0),e([i({type:Number})],u.prototype,"rows",void 0),e([i({type:Number})],u.prototype,"cols",void 0),e([i({converter:c})],u.prototype,"charCounter",void 0);
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
 */;let m=class extends u{};m.styles=[h,p],m=e([o("mwc-textarea")],m);
