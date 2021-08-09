import{B as e,d as i,I as t,a,e as s,b as o,ag as r,al as d,h as n,t as c,_ as l,p as m,c as u}from"./backend-ai-webui-ecfefd57.js";import{t as p}from"./translate-unsafe-html-d6230cc4.js";import"./unsafe-html-50c8e728.js";
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let h=class extends e{constructor(){super(),this.error_code=401}static get styles(){return[i,t,a,s,o`
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

      img#unauthorized-access {
        width: 400px;
        margin: 20px;
      }

      div.page-layout {
        display: flex;
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
        align-items: center;
        margin: 20px;
      }

      div.desc {
        width: 100%;
      }

      @media screen and (max-width: 1015px) {
        div.page-layout {
          -ms-flex-direction: column;
          -webkit-flex-direction: column;
          flex-direction: column;
          align-content: center;
        }

        div.desc {
          align-items: center;
        }
      }

      @media screen and (max-width: 440px) {
        img#unauthorized-access {
          width: 330px;
          margin: 20px;
        }

        div.desc > p.description {
          max-width: 330px;
          font-size: 13px;
        }
      }

      `]}async _viewStateChanged(e){await this.updateComplete}_moveTo(e=""){const i=""!==e?e:"summary";globalThis.history.pushState({},"","/summary"),r.dispatch(d(decodeURIComponent("/"+i),{}))}render(){return n`
    <div class="page-layout">
      <img id="unauthorized-access" src="/resources/images/401_unauthorized_access.svg" />
      <div class="vertical layout desc">
        <div class="title">${p("webui.UNAUTHORIZEDACCESS")}</div>
        <p class="description">${p("webui.AdminOnlyPage")}</p>
        <div>
          <mwc-button
              unelevated
              fullwidth
              id="go-to-summary"
              label="${c("button.GoBackToSummaryPage")}"
              @click="${()=>this._moveTo("summary")}"></mwc-button>
        </div>
      </div>
    </div>
    `}};l([m({type:Number})],h.prototype,"error_code",void 0),h=l([u("backend-ai-permission-denied-view")],h);var g=h;export default g;
