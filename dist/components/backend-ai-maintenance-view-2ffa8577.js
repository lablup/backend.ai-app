import{d as e,e as t,I as a,a as i,D as n,f as s,b as c,h as o,t as l,g as d,E as r,_ as u,p as h,c as g}from"./backend-ai-console-f3f55dfb.js";import"./unsafe-html-218cb279.js";import{t as p}from"./translate-unsafe-html-43041ee1.js";import"./lablup-loading-indicator-f881de2e.js";import"./divider-bb247808.js";import"./backend-ai-indicator-06adad47.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let m=class extends e{constructor(){super(),this.images=Object(),this.scanning=!1,this.recalculating=!1,this.notification=Object(),this.indicator=Object()}static get styles(){return[t,a,i,n,s,c`
        div.indicator,
        span.indicator {
          font-size: 9px;
          margin-right: 5px;
        }

        div.description,
        span.description {
          font-size: 11px;
          margin-top: 5px;
          margin-right: 5px;
        }

        .setting-item {
          margin: 15px auto;
        }

        .setting-desc {
          width: 300px;
        }

        wl-card > div {
          padding: 15px;
        }

        wl-button {
          --button-bg: transparent;
          --button-bg-hover: var(--paper-red-100);
          --button-bg-active: var(--paper-red-100);
          --button-bg-disabled: #ccc;
          --button-color: var(--paper-red-100);
          --button-color-hover: var(--paper-red-100);
          --button-color-disabled: #ccc;
        }
      `]}render(){return o`
      <backend-ai-indicator id="indicator"></backend-ai-indicator>
      <wl-card elevation="1">
        <h3 class="horizontal center layout">
          <span>${l("maintenance.General")}</span>
          <span class="flex"></span>
        </h3>

        <h4>${l("maintenance.Fix")}</h4>
        <div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${l("maintenance.MatchDatabase")}</div>
              <div class="description">${p("maintenance.DescMatchDatabase")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              <wl-button class="fg red" ?disabled="${this.recalculating}" outlined label="Recalculate usage" icon="refresh" @click="${()=>this.recalculate_usage()}">
                <wl-icon>refresh</wl-icon>
                <span id="recalculate_usage-button-desc">${l("maintenance.RecalculateUsage")}</span>
              </wl-button>
            </div>
          </div>
        </div>
        <h4>${l("maintenance.ImagesEnvironment")}</h4>
        <div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${l("maintenance.RescanImageList")}</div>
              <div class="description">${p("maintenance.DescRescanImageList")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              <wl-button class="fg red" ?disabled="${this.scanning}" outlined label="Rescan images" icon="refresh" @click="${()=>this.rescan_images()}">
                <wl-icon>refresh</wl-icon>
                <span id="rescan-image-button-desc">${l("maintenance.RescanImages")}</span>
              </wl-button>
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${l("maintenance.CleanupOldImages")}</div>
              <div class="description">${l("maintenance.DescCleanupOldImages")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              <wl-button class="fg red" disabled outlined label="Clean up images" icon="delete">
                <wl-icon>delete</wl-icon>
                ${l("maintenance.CleanupImages")}
              </wl-button>
            </div>
          </div>
        </div>
      </wl-card>
    `}firstUpdated(){this.notification=globalThis.lablupNotification,this.indicator=this.shadowRoot.querySelector("#indicator"),void 0!==globalThis.backendaiclient&&null!==globalThis.backendaiclient||document.addEventListener("backend-ai-connected",()=>{},!0)}async _viewStateChanged(e){await this.updateComplete}async rescan_images(){this.shadowRoot.querySelector("#rescan-image-button-desc").textContent="Scanning...",this.scanning=!0,this.indicator.start("indeterminate"),this.indicator.set(10,"Scanning..."),globalThis.backendaiclient.maintenance.rescan_images().then(e=>{this.shadowRoot.querySelector("#rescan-image-button-desc").textContent="Rescan images",this.scanning=!1,this.indicator.set(100,"Rescan image finished."),this.indicator.end(1e3)}).catch(e=>{this.scanning=!1,this.shadowRoot.querySelector("#rescan-image-button-desc").textContent="Rescan images",console.log(e),this.indicator.set(50,"Rescan failed."),this.indicator.end(1e3),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}async recalculate_usage(){this.shadowRoot.querySelector("#recalculate_usage-button-desc").textContent=r("maintenance.Recalculating"),this.recalculating=!0,this.indicator.start("indeterminate"),this.indicator.set(10,"Recalculating..."),globalThis.backendaiclient.maintenance.recalculate_usage().then(e=>{this.shadowRoot.querySelector("#recalculate_usage-button-desc").textContent=r("maintenance.RecalculateUsage"),this.recalculating=!1,this.indicator.set(100,"Recalculation finished."),this.indicator.end(1e3)}).catch(e=>{this.recalculating=!1,this.shadowRoot.querySelector("#recalculate_usage-button-desc").textContent=r("maintenance.RecalculateUsage"),console.log(e),this.indicator.set(50,"Recalculation failed."),this.indicator.end(1e3),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}};u([h({type:Object})],m.prototype,"images",void 0),u([h({type:Boolean})],m.prototype,"scanning",void 0),u([h({type:Boolean})],m.prototype,"recalculating",void 0),u([h({type:Object})],m.prototype,"notification",void 0),u([h({type:Object})],m.prototype,"indicator",void 0),m=u([g("backend-ai-maintenance-view")],m);var v=m;export default v;
