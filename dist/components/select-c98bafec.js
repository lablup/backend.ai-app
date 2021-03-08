import{C as t,_ as e,p as s,D as i,c as o,E as a,a8 as r,h as l,m as n}from"./backend-ai-webui-a8a7eec7.js";import{I as d}from"./input-behavior-0236c178.js";let p=class extends d{constructor(){super(...arguments),this.role="select"}firstUpdated(t){super.firstUpdated(t),this.listeners.push(a(this.$slot,"slotchange",this.updateOptions.bind(this),{passive:!0})),this.updateOptions()}updateOptions(){if(null==this.$formElement)return;const t=this.$formElement,e=this.$slot.assignedNodes().filter((t=>1===t.nodeType)).filter((t=>"option"===(t.tagName||"").toLowerCase())).map((t=>t.cloneNode(!0)));if(0===e.length)return;const s=t.value;r(t);for(const s of e)t.options.add(s);const i=""===s?this.initialValue||this.value:s;t.value!==i&&(t.value=i),this.value!==i&&(this.value=i)}renderFormElement(){return l` <select id="${this.formElementId}" .value="${this.value}" ?required="${this.required}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" name="${n(this.name)}" autocomplete="${n(this.autocomplete)}" tabindex="${this.disabled?-1:0}"></select> <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 25" preserveAspectRatio="none"> <polygon points="0,0 50,0 25,25"/> </svg> `}};p.styles=[...d.styles,t("#arrow{fill:var(--_input-state-color);height:var(--select-arrow-height,.5rem);position:absolute;top:50%;right:0;transform:translate(-100%,-50%)}::slotted(option){display:none}:host(:not([dirty])) ::slotted(select){opacity:0}")],e([s({type:String,reflect:!0}),i("design:type",String)],p.prototype,"role",void 0),p=e([o("wl-select")],p);
