import{W as e,E as s,_ as t,p as o,G as i,O as r,X as h}from"./backend-ai-webui-40e10052.js";import{r as a}from"./rowing-42d82a96.js";class c extends e{constructor(){super(...arguments),this.role="radio",this.formElementType="radio"}queryGroup(){return null!=this.name?r(this,`${this.nodeName.toLowerCase()}[name=${this.name}]:not([disabled])`):[]}rowToElement(e){e.click(),e.focus()}toggle(){this.checked=!0,this.dispatchChangeEvent()}updateTabindex(e){(e.has("disabled")||e.has("checked"))&&h(this,this.disabled||!this.checked&&this.isGroupedChecked()),e.has("checked")&&this.checked&&this.uncheckGroup()}isGroupedChecked(){return null!=this.queryGroup().find((e=>e.checked))}uncheckGroup(){const e=this.queryGroup();for(const s of e)s!==this&&(s.checked=!1,s.tabIndex=-1)}onKeyDown(e){super.onKeyDown(e),a(this,e)}}c.styles=[...e.styles,s("")],t([o({type:String,reflect:!0}),i("design:type",String)],c.prototype,"role",void 0);export{c as R};