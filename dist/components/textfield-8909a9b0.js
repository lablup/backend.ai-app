import{r as e,_ as t,p as i,s,c as r,h as a,u as n}from"./backend-ai-console-a8524ce7.js";import{I as p}from"./input-behavior-7923de84.js";class o extends p{}o.styles=[...p.styles,e("")],t([i({type:String}),s("design:type",String)],o.prototype,"pattern",void 0),t([i({type:Number}),s("design:type",Number)],o.prototype,"minLength",void 0),t([i({type:Number}),s("design:type",Number)],o.prototype,"maxLength",void 0);let l=class extends o{constructor(){super(...arguments),this.type="text"}renderFormElement(){return a` <input id="${this.formElementId}" .value="${this.value}" value="${n(this.initialValue)}" ?required="${this.required}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" aria-label="${n(this.label)}" type="${n(this.type)}" name="${n(this.name)}" list="${n(this.list)}" pattern="${n(this.pattern)}" autocomplete="${n(this.autocomplete)}" minlength="${n(this.minLength)}" maxlength="${n(this.maxLength)}" min="${n(this.min)}" max="${n(this.max)}" tabindex="${this.disabled?-1:0}"> `}};l.styles=[...o.styles,e("")],t([i({type:String}),s("design:type",String)],l.prototype,"list",void 0),t([i({type:String,reflect:!0}),s("design:type",String)],l.prototype,"type",void 0),t([i({type:Number}),s("design:type",Number)],l.prototype,"min",void 0),t([i({type:Number}),s("design:type",Number)],l.prototype,"max",void 0),l=t([r("wl-textfield")],l);export{l as T,o as a};
