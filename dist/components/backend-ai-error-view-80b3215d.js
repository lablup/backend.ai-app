import{B as e,d as t,I as a,a as s,e as o,b as r,ac as i,ah as c,h as l,t as n,_ as d,p as m,c as u}from"./backend-ai-webui-5c3ff6fd.js";import{t as h}from"./translate-unsafe-html-ce9c2004.js";import"./unsafe-html-4ddeb332.js";
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let p=class extends e{constructor(){super(),this.error_code=404}static get styles(){return[t,a,s,o,r`
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

      `]}async _viewStateChanged(e){await this.updateComplete}_moveTo(e=""){const t=""!==e?e:"summary";globalThis.history.pushState({},"","/summary"),i.dispatch(c(decodeURIComponent("/"+t),{}))}render(){return l`
    <div class="horizontal center flex layout" style="margin:20px;">
      <img src="/resources/images/404_not_found.svg" style="width:500px;margin:20px;"/>
      <div class="vertical layout" style="width:100%;">
        <div class="title">${h("webui.NOTFOUND")}</div>
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
    `}};d([m({type:Number})],p.prototype,"error_code",void 0),p=d([u("backend-ai-error-view")],p);var v=p;export default v;
