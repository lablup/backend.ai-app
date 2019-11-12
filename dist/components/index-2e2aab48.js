import{j as e,b as t,e as a,V as s,h as i,m as r}from"./iron-flex-layout-classes-c9b3b8db.js";import{T as h,a as l}from"./index-fbff3ce8.js";let n=class extends l{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-multiline","true")}firstUpdated(e){super.firstUpdated(e),this.refreshHeight()}onInput(e){super.onInput(e),this.refreshHeight()}refreshHeight(){s(this)||requestAnimationFrame(()=>{this.setHeight(1);const e=this.$formElement.scrollHeight;this.setHeight(e)})}setHeight(e){this.$formElement.style.setProperty("--_textarea-height",`${null==e?"":`${e}px`}`)}renderFormElement(){return i` <textarea id="${this.formElementId}" .value="${this.value}" ?required="${this.required}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" aria-label="${r(this.label)}" name="${r(this.name)}" pattern="${r(this.pattern)}" autocomplete="${r(this.autocomplete)}" minlength="${r(this.minLength)}" maxlength="${r(this.maxLength)}" rows="1" tabindex="${this.disabled?-1:0}">
${this.initialValue||""}</textarea> `}};n.styles=[...h.styles,e("::slotted(textarea){height:var(--textarea-height,var(--_textarea-height));min-height:var(--textarea-min-height,var(--textarea-height,var(--_textarea-height)));max-height:var(--textarea-max-height);resize:var(--textarea-resize,none)}:host(:focus) ::slotted(textarea),:host(:hover) ::slotted(textarea){will-change:height}")],n=t([a("wl-textarea")],n);
