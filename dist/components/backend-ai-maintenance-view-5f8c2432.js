import{B as e,d as t,I as a,a as i,n,e as s,b as c,h as l,t as o,g as d,f as r,_ as u,p as g,c as m}from"./backend-ai-console-125e4b92.js";import"./unsafe-html-b5824a3e.js";import{t as b}from"./translate-unsafe-html-9e2c85c5.js";import"./lablup-activity-panel-446742d1.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let p=class extends e{constructor(){super(),this.images=Object(),this.scanning=!1,this.recalculating=!1,this.notification=Object(),this.indicator=Object()}static get styles(){return[t,a,i,n,s,c`
        div.indicator,
        span.indicator {
          font-size: 9px;
          margin-right: 5px;
        }

        div.title {
          font-size: 14px;
          font-weight: bold;
        }

        div.description,
        span.description {
          font-size: 13px;
          margin-top: 5px;
          margin-right: 5px;
        }

        .setting-item {
          margin: 15px auto;
        }

        .setting-desc {
          width: 100%;
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

        mwc-button[outlined] {
          width: 100%;
          margin: 10px auto;
          background-image: none;
          --mdc-button-outline-width: 2px;
          --mdc-button-disabled-outline-color: var(--general-sidebar-color);
          --mdc-button-disabled-ink-color: var(--general-sidebar-color);
          --mdc-theme-primary: #38bd73;
          --mdc-on-theme-primary: #38bd73;
        }

        lablup-activity-panel {
          color: #000;
        }
      `]}render(){return l`
      <div class="horizontal wrap layout">
        <lablup-activity-panel title="${o("maintenance.Fix")}">
          <div slot="message" class="vertical flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div class="title">${o("maintenance.MatchDatabase")}</div>
              <div class="description">${b("maintenance.DescMatchDatabase")}
              </div>
            </div>
            <mwc-button
                  outlined
                  id="recalculate_usage-button-desc"
                  ?disabled="${this.recalculating}"
                  label="${o("maintenance.RecalculateUsage")}"
                  icon="refresh"
                  @click="${()=>this.recalculate_usage()}">
            </mwc-button>
          </div>
        </lablup-activity-panel>
        <lablup-activity-panel title="${o("maintenance.ImagesEnvironment")}">
          <div slot="message">
            <div class="horizontal flex layout wrap setting-item">
              <div class="vertical center-justified layout setting-desc">
                <div class="title">${o("maintenance.RescanImageList")}</div>
                <div class="description">${b("maintenance.DescRescanImageList")}
                </div>
              </div>
              <mwc-button
                  outlined
                  id="rescan-image-button-desc"
                  ?disabled="${this.scanning}"
                  label="${o("maintenance.RescanImages")}"
                  icon="refresh"
                  @click="${()=>this.rescan_images()}">
              </mwc-button>
            </div>
            <div class="horizontal flex layout wrap setting-item">
              <div class="vertical center-justified layout setting-desc">
                <div class="title">${o("maintenance.CleanupOldImages")}</div>
                <div class="description">${o("maintenance.DescCleanupOldImages")}
                </div>
              </div>
              <mwc-button
                  outlined
                  disabled
                  label="${o("maintenance.CleanupImages")}"
                  icon="delete"
              </mwc-button>
            </div>
          </div>
        </lablup-activity-panel>
      </div>
    `}firstUpdated(){this.notification=globalThis.lablupNotification,this.indicator=globalThis.lablupIndicator,void 0!==globalThis.backendaiclient&&null!==globalThis.backendaiclient||document.addEventListener("backend-ai-connected",(()=>{}),!0)}async _viewStateChanged(e){await this.updateComplete}async rescan_images(){this.shadowRoot.querySelector("#rescan-image-button-desc").label=d("maintenance.RescanImageScanning"),this.scanning=!0;let e=await this.indicator.start("indeterminate");e.set(10,"Scanning..."),globalThis.tasker.add(d("maintenance.RescanImages"),globalThis.backendaiclient.maintenance.rescan_images().then((t=>{this.shadowRoot.querySelector("#rescan-image-button-desc").label=d("maintenance.RescanImages"),this.scanning=!1,e.set(100,"Rescan image finished.")})).catch((t=>{this.scanning=!1,this.shadowRoot.querySelector("#rescan-image-button-desc").label=d("maintenance.RescanImages"),console.log(t),e.set(50,"Rescan failed."),e.end(1e3),t&&t.message&&(this.notification.text=r.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))})),"","image")}async recalculate_usage(){this.shadowRoot.querySelector("#recalculate_usage-button-desc").label=d("maintenance.Recalculating"),this.recalculating=!0;let e=await this.indicator.start("indeterminate");e.set(10,"Recalculating..."),this.tasker.add(d("maintenance.RecalculateUsage"),globalThis.backendaiclient.maintenance.recalculate_usage().then((t=>{this.shadowRoot.querySelector("#recalculate_usage-button-desc").label=d("maintenance.RecalculateUsage"),this.recalculating=!1,e.set(100,"Recalculation finished.")})).catch((t=>{this.recalculating=!1,this.shadowRoot.querySelector("#recalculate_usage-button-desc").label=d("maintenance.RecalculateUsage"),console.log(t),e.set(50,"Recalculation failed."),e.end(1e3),t&&t.message&&(this.notification.text=r.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))})),"","database")}};u([g({type:Object})],p.prototype,"images",void 0),u([g({type:Boolean})],p.prototype,"scanning",void 0),u([g({type:Boolean})],p.prototype,"recalculating",void 0),u([g({type:Object})],p.prototype,"notification",void 0),u([g({type:Object})],p.prototype,"indicator",void 0),p=u([m("backend-ai-maintenance-view")],p);var h=p;export default h;
