import{X as e,Y as s,Z as t,$ as n,a0 as o,a1 as r,C as a,_ as c,p as i,D as h,J as u,a2 as d}from"./backend-ai-console-3e306fa6.js";function l(r,a){const c=r.queryGroup(),i=c.indexOf(r),h=function(e,r,a){if(0==e.length)return null;switch(a){case o:case n:return r+1>e.length-1?0:r+1;case t:case s:return r-1<0?e.length-1:r-1}return null}(c,i,a.code);if(null!=h){const s=c[h];r.rowToElement(s),e(a)}}class p extends r{constructor(){super(...arguments),this.role="radio",this.formElementType="radio"}queryGroup(){return null!=this.name?u(this,`${this.nodeName.toLowerCase()}[name=${this.name}]:not([disabled])`):[]}rowToElement(e){e.click(),e.focus()}toggle(){this.checked=!0,this.dispatchChangeEvent()}updateTabindex(e){(e.has("disabled")||e.has("checked"))&&d(this,this.disabled||!this.checked&&this.isGroupedChecked()),e.has("checked")&&this.checked&&this.uncheckGroup()}isGroupedChecked(){return null!=this.queryGroup().find((e=>e.checked))}uncheckGroup(){const e=this.queryGroup();for(const s of e)s!==this&&(s.checked=!1,s.tabIndex=-1)}onKeyDown(e){super.onKeyDown(e),l(this,e)}}p.styles=[...r.styles,a("")],c([i({type:String,reflect:!0}),h("design:type",String)],p.prototype,"role",void 0);export{p as R};