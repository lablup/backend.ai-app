import{_ as e,p as a,c as t,d as r,e as s,I as c,a as o,f as d,b as l,h as i,t as n}from"./backend-ai-console-258bce16.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let p=(()=>{let p=class extends r{constructor(){super(),this.error_code=404}static get styles(){return[s,c,o,d,l`
        wl-card {
          height: calc(100vh - 150px);
        }
      `]}firstUpdated(){}async _viewStateChanged(e){await this.updateComplete}render(){return i`
      <wl-card class="item" elevation="1">
        <div class="vertical center-center flex layout">
          <p>${n("console.NOTFOUND")}</p>
        </div>
      </wl-card>
`}};return e([a({type:Number})],p.prototype,"error_code",void 0),p=e([t("backend-ai-error-view")],p),p})();export default p;
