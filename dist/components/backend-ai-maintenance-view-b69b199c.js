import{_ as e,p as t,c as a,B as i,d as n,I as s,a as c,z as l,e as o,b as d,h as r,t as u,g,f as h}from"./backend-ai-console-cb2f630c.js";import"./unsafe-html-1bfa332b.js";import{t as m}from"./translate-unsafe-html-e3359f74.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let p=(()=>{let p=class extends i{constructor(){super(),this.images=Object(),this.scanning=!1,this.recalculating=!1,this.notification=Object(),this.indicator=Object()}static get styles(){return[n,s,c,l,o,d`
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
      `]}render(){return r`
      <wl-card elevation="1">
        <h3 class="horizontal center layout">
          <span>${u("maintenance.General")}</span>
          <span class="flex"></span>
        </h3>

        <h4>${u("maintenance.Fix")}</h4>
        <div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${u("maintenance.MatchDatabase")}</div>
              <div class="description">${m("maintenance.DescMatchDatabase")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              <wl-button class="fg red" ?disabled="${this.recalculating}" outlined label="Recalculate usage" icon="refresh" @click="${()=>this.recalculate_usage()}">
                <wl-icon>refresh</wl-icon>
                <span id="recalculate_usage-button-desc">${u("maintenance.RecalculateUsage")}</span>
              </wl-button>
            </div>
          </div>
        </div>
        <h4>${u("maintenance.ImagesEnvironment")}</h4>
        <div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${u("maintenance.RescanImageList")}</div>
              <div class="description">${m("maintenance.DescRescanImageList")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              <wl-button class="fg red" ?disabled="${this.scanning}" outlined label="Rescan images" icon="refresh" @click="${()=>this.rescan_images()}">
                <wl-icon>refresh</wl-icon>
                <span id="rescan-image-button-desc">${u("maintenance.RescanImages")}</span>
              </wl-button>
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${u("maintenance.CleanupOldImages")}</div>
              <div class="description">${u("maintenance.DescCleanupOldImages")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              <wl-button class="fg red" disabled outlined label="Clean up images" icon="delete">
                <wl-icon>delete</wl-icon>
                ${u("maintenance.CleanupImages")}
              </wl-button>
            </div>
          </div>
        </div>
      </wl-card>
    `}firstUpdated(){this.notification=globalThis.lablupNotification,this.indicator=globalThis.lablupIndicator,void 0!==globalThis.backendaiclient&&null!==globalThis.backendaiclient||document.addEventListener("backend-ai-connected",()=>{},!0)}async _viewStateChanged(e){await this.updateComplete}async rescan_images(){this.shadowRoot.querySelector("#rescan-image-button-desc").textContent=g("maintenance.RescanImageScanning"),this.scanning=!0;let e=await this.indicator.start("indeterminate");e.set(10,"Scanning..."),globalThis.tasker.add(g("maintenance.RescanImages"),globalThis.backendaiclient.maintenance.rescan_images().then(t=>{this.shadowRoot.querySelector("#rescan-image-button-desc").textContent=g("maintenance.RescanImages"),this.scanning=!1,e.set(100,"Rescan image finished.")}).catch(t=>{this.scanning=!1,this.shadowRoot.querySelector("#rescan-image-button-desc").textContent=g("maintenance.RescanImages"),console.log(t),e.set(50,"Rescan failed."),e.end(1e3),t&&t.message&&(this.notification.text=h.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))}),"","image")}async recalculate_usage(){this.shadowRoot.querySelector("#recalculate_usage-button-desc").textContent=g("maintenance.Recalculating"),this.recalculating=!0;let e=await this.indicator.start("indeterminate");e.set(10,"Recalculating..."),this.tasker.add(g("maintenance.RecalculateUsage"),globalThis.backendaiclient.maintenance.recalculate_usage().then(t=>{this.shadowRoot.querySelector("#recalculate_usage-button-desc").textContent=g("maintenance.RecalculateUsage"),this.recalculating=!1,e.set(100,"Recalculation finished.")}).catch(t=>{this.recalculating=!1,this.shadowRoot.querySelector("#recalculate_usage-button-desc").textContent=g("maintenance.RecalculateUsage"),console.log(t),e.set(50,"Recalculation failed."),e.end(1e3),t&&t.message&&(this.notification.text=h.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))}),"","database")}};return e([t({type:Object})],p.prototype,"images",void 0),e([t({type:Boolean})],p.prototype,"scanning",void 0),e([t({type:Boolean})],p.prototype,"recalculating",void 0),e([t({type:Object})],p.prototype,"notification",void 0),e([t({type:Object})],p.prototype,"indicator",void 0),p=e([a("backend-ai-maintenance-view")],p),p})();export default p;
