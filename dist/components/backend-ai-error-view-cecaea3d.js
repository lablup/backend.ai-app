import{B as e,d as t,I as a,a as s,e as o,b as r,ac as i,ah as l,h as d,t as n,_ as c,p as m,c as u}from"./backend-ai-webui-29550360.js";import{t as p}from"./translate-unsafe-html-d2f56531.js";import"./unsafe-html-7a60ae9c.js";
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let h=class extends e{constructor(){super(),this.error_code=404}static get styles(){return[t,a,s,o,r`
      .title {
        font-size: 2em;
        font-weight: bolder;
        color: var(--general-navbar-footer-color, #424242);
        line-height: 1em;
      }
      
      .description {
        font-size: 1em;
        font-weight: normal;
        color: var(--general-sidebar-color, #949494);
      }

      mwc-button {
        width: auto;
      }

      `]}firstUpdated(){}async _viewStateChanged(e){await this.updateComplete}_moveTo(e=""){let t=""!==e?e:"summary";globalThis.history.pushState({},"","/summary"),i.dispatch(l(decodeURIComponent("/"+t),{}))}render(){return d`
    <div class="horizontal center flex layout" style="margin:20px;">
      <img src="/resources/images/404_not_found.svg" style="width:500px;margin:20px;"/>
      <div class="vertical layout" style="width:100%;">
        <div class="title">${p("webui.NOTFOUND")}</div>
        <p class="description">${n("webui.DescNOTFOUND")}</p>
        <div style="width:auto;">
          <mwc-button
              unelevated
              id="go-to-summary"
              label="${n("button.GoBackToSummaryPage")}"
              @click="${()=>this._moveTo("summary")}"></mwc-button>
        </div>
      </div>
    </div>
    `}};c([m({type:Number})],h.prototype,"error_code",void 0),h=c([u("backend-ai-error-view")],h);var v=h;export default v;
