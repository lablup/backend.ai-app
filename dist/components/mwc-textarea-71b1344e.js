import{_ as e,q as t,p as i,ad as s,h as l,l as r,A as a,ae as n,m as d,b as o,af as h,c as u}from"./backend-ai-console-125e4b92.js";
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const c={fromAttribute:e=>null!==e&&(""===e||e),toAttribute:e=>"boolean"==typeof e?e?"":null:e};class p extends s{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}get shouldRenderHelperText(){return!!this.helper||!!this.validationMessage||this.charCounterVisible&&"internal"!==this.charCounter}render(){const e="internal"===this.charCounter,t={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":e},i=this.renderCharCounter();return l`
      <label class="mdc-text-field mdc-text-field--textarea ${r(t)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderInput()}
        ${e?i:a}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(e?a:i)}
    `}renderInput(){const e=-1===this.minLength?void 0:this.minLength,t=-1===this.maxLength?void 0:this.maxLength,i=this.autocapitalize?this.autocapitalize:void 0;return l`
      <textarea
          aria-labelledby="label"
          class="mdc-text-field__input"
          .value="${n(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${d(e)}"
          maxlength="${d(t)}"
          name="${d(""===this.name?void 0:this.name)}"
          inputmode="${d(this.inputMode)}"
          autocapitalize="${d(i)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`}}e([t("textarea")],p.prototype,"formElement",void 0),e([i({type:Number})],p.prototype,"rows",void 0),e([i({type:Number})],p.prototype,"cols",void 0),e([i({converter:c})],p.prototype,"charCounter",void 0);
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
const m=o`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let x=class extends p{};x.styles=[h,m],x=e([u("mwc-textarea")],x);
