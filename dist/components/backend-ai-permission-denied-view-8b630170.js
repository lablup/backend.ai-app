import{B as e,d as t,I as a,a as s,e as o,b as r,ab as i,ag as c,h as l,t as n,_ as d,p as m,c as u}from"./backend-ai-console-b3bc0c77.js";import"./unsafe-html-c7981cc9.js";import{t as p}from"./translate-unsafe-html-9659af02.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let h=class extends e{constructor(){super(),this.error_code=401}static get styles(){return[t,a,s,o,r`
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

      `]}firstUpdated(){}async _viewStateChanged(e){await this.updateComplete}_moveTo(e=""){let t=""!==e?e:"summary";globalThis.history.pushState({},"","/summary"),i.dispatch(c(decodeURIComponent("/"+t),{}))}render(){return l`
    <div class="horizontal center flex layout center-justified" style="margin:20px;">
      <img src="/resources/images/401_unauthorized_access.svg" style="width:400px;margin:20px;"/>
      <div class="vertical layout" style="width:100%;">
        <div class="title">${p("console.UNAUTHORIZEDACCESS")}</div>
        <p class="description">${p("console.AdminOnlyPage")}</p>
        <div style="width:auto;">
          <mwc-button
              unelevated
              id="go-to-summary"
              label="${n("button.GoBackToSummaryPage")}"
              @click="${()=>this._moveTo("summary")}"></mwc-button>
        </div>
      </div>
    </div>
    `}};d([m({type:Number})],h.prototype,"error_code",void 0),h=d([u("backend-ai-permission-denied-view")],h);var v=h;export default v;
