import{B as e,d as a,I as t,a as i,n,e as s,b as c,h as l,t as o,g as d,f as r,_ as g,p as u,c as m}from"./backend-ai-console-bf343de1.js";import{t as b}from"./translate-unsafe-html-b68d19e3.js";import"./lablup-activity-panel-ffd4d5dd.js";import"./unsafe-html-4880aecc.js";
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let h=class extends e{constructor(){super(),this.images=Object(),this.scanning=!1,this.recalculating=!1,this.notification=Object(),this.indicator=Object()}static get styles(){return[a,t,i,n,s,c`
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
            <div class="horizontal flex layout wrap setting-item temporarily-hide">
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
    `}firstUpdated(){this.notification=globalThis.lablupNotification,this.indicator=globalThis.lablupIndicator,void 0!==globalThis.backendaiclient&&null!==globalThis.backendaiclient||document.addEventListener("backend-ai-connected",(()=>{}),!0)}async _viewStateChanged(e){await this.updateComplete}async rescan_images(){this.shadowRoot.querySelector("#rescan-image-button-desc").label=d("maintenance.RescanImageScanning"),this.scanning=!0;let e=await this.indicator.start("indeterminate");e.set(0,d("maintenance.Scanning")),globalThis.tasker.add(d("maintenance.RescanImages"),globalThis.backendaiclient.maintenance.rescan_images().then((({rescan_images:a})=>{let t=globalThis.backendaiclient.maintenance.attach_background_task(a.task_id);t.addEventListener("task_updated",(a=>{const t=JSON.parse(a.data),i=t.current_progress/t.total_progress;e.set(100*i,d("maintenance.Scanning"))})),t.addEventListener("task_done",(a=>{e.set(100,d("maintenance.RescanImageFinished"))})),t.addEventListener("task_failed",(e=>{throw console.log("task_failed",e.data),new Error("Background Image scanning task has failed")})),t.addEventListener("task_cancelled",(e=>{throw new Error("Background Image scanning task has been cancelled")})),this.shadowRoot.querySelector("#rescan-image-button-desc").label=d("maintenance.RescanImages"),this.scanning=!1})).catch((a=>{this.scanning=!1,this.shadowRoot.querySelector("#rescan-image-button-desc").label=d("maintenance.RescanImages"),console.log(a),e.set(50,d("maintenance.RescanFailed")),e.end(1e3),a&&a.message&&(this.notification.text=r.relieve(a.title),this.notification.detail=a.message,this.notification.show(!0,a))})),"","image")}async recalculate_usage(){this.shadowRoot.querySelector("#recalculate_usage-button-desc").label=d("maintenance.Recalculating"),this.recalculating=!0;let e=await this.indicator.start("indeterminate");e.set(10,d("maintenance.Recalculating")),this.tasker.add(d("maintenance.RecalculateUsage"),globalThis.backendaiclient.maintenance.recalculate_usage().then((a=>{this.shadowRoot.querySelector("#recalculate_usage-button-desc").label=d("maintenance.RecalculateUsage"),this.recalculating=!1,e.set(100,d("maintenance.RecalculationFinished"))})).catch((a=>{this.recalculating=!1,this.shadowRoot.querySelector("#recalculate_usage-button-desc").label=d("maintenance.RecalculateUsage"),console.log(a),e.set(50,d("maintenance.RecalculationFailed")),e.end(1e3),a&&a.message&&(this.notification.text=r.relieve(a.title),this.notification.detail=a.message,this.notification.show(!0,a))})),"","database")}};g([u({type:Object})],h.prototype,"images",void 0),g([u({type:Boolean})],h.prototype,"scanning",void 0),g([u({type:Boolean})],h.prototype,"recalculating",void 0),g([u({type:Object})],h.prototype,"notification",void 0),g([u({type:Object})],h.prototype,"indicator",void 0),h=g([m("backend-ai-maintenance-view")],h);var p=h;export default p;
