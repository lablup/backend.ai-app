import{B as e,d as a,I as t,a as r,e as s,b as c,h as o,t as d,_ as i,p as l,c as n}from"./backend-ai-console-125e4b92.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let p=class extends e{constructor(){super(),this.error_code=404}static get styles(){return[a,t,r,s,c`
        wl-card {
          height: calc(100vh - 150px);
        }
      `]}firstUpdated(){}async _viewStateChanged(e){await this.updateComplete}render(){return o`
      <wl-card class="item" elevation="1">
        <div class="vertical center-center flex layout">
          <p>${d("console.NOTFOUND")}</p>
        </div>
      </wl-card>
`}};i([l({type:Number})],p.prototype,"error_code",void 0),p=i([n("backend-ai-error-view")],p);var v=p;export default v;
