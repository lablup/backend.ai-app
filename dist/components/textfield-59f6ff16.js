import{j as t,_ as e,p as i,k as s,l as a,m as r,n}from"./backend-ai-webui-8aa0c11e.js";import{I as p}from"./input-behavior-cba145bb.js";class o extends p{}o.styles=[...p.styles,t("")],e([i({type:String}),s("design:type",String)],o.prototype,"pattern",void 0),e([i({type:Number}),s("design:type",Number)],o.prototype,"minLength",void 0),e([i({type:Number}),s("design:type",Number)],o.prototype,"maxLength",void 0);let l=class extends o{constructor(){super(...arguments),this.type="text"}renderFormElement(){return r` <input id="${this.formElementId}" .value="${this.value}" value="${n(this.initialValue)}" ?required="${this.required}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" aria-label="${n(this.label)}" type="${n(this.type)}" name="${n(this.name)}" list="${n(this.list)}" pattern="${n(this.pattern)}" autocomplete="${n(this.autocomplete)}" minlength="${n(this.minLength)}" maxlength="${n(this.maxLength)}" min="${n(this.min)}" max="${n(this.max)}" tabindex="${this.disabled?-1:0}"> `}};l.styles=[...o.styles,t("")],e([i({type:String}),s("design:type",String)],l.prototype,"list",void 0),e([i({type:String,reflect:!0}),s("design:type",String)],l.prototype,"type",void 0),e([i({type:Number}),s("design:type",Number)],l.prototype,"min",void 0),e([i({type:Number}),s("design:type",Number)],l.prototype,"max",void 0),l=e([a("wl-textfield")],l);export{l as T,o as a};
