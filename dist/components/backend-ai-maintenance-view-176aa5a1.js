import{B as e,I as t,f as i,g as a,i as n,c as s,h as c,b as o,p as r,e as d}from"./iron-flex-layout-classes-c9b3b8db.js";import"./index-41b64f0a.js";import"./resize-b38d87a6.js";import{B as l}from"./backend-ai-painkiller-d4aac244.js";import"./index-e2571378.js";import{B as u}from"./backend-ai-page-4ba904fc.js";import"./lablup-loading-indicator-aeaa4720.js";import"./index-6835b5eb.js";import"./backend-ai-indicator-fd375b9d.js";let g=class extends u{constructor(){super(),this.images=Object(),this.scanning=!1,this.recalculating=!1,this.notification=Object(),this.indicator=Object()}static get styles(){return[e,t,i,a,n,s`
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
      `]}static get properties(){return{active:{type:Boolean},scanning:{type:Boolean},recalculating:{type:Boolean},images:{type:Object,hasChanged:()=>!0},notification:{type:Object},indicator:{type:Object}}}render(){return c`
      <backend-ai-indicator id="indicator"></backend-ai-indicator>
      <wl-card elevation="1">
        <h3 class="horizontal center layout">
          <span>General</span>
          <span class="flex"></span>
        </h3>

        <h4>Fix</h4>
        <div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>Match usage database with current state</div>
              <div class="description">Recalculate usage database with current state.<br/>
                Useful if docker fails by accident, or some sessions have been forcibly terminated.
              </div>
            </div>
            <div class="vertical center-justified layout">
              <wl-button class="fg red" ?disabled="${this.recalculating}" outlined label="Recalculate usage" icon="refresh" @click="${()=>this.recalculate_usage()}">
                <wl-icon>refresh</wl-icon>
                <span id="recalculate_usage-button-desc">Recalculate usage</span>
              </wl-button>
            </div>
          </div>
        </div>
        <h4>Images / Environment</h4>
        <div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>Rescan image list from repository</div>
              <div class="description">Rescan image list from registered repositories.<br />
              It may take a long time, so please wait after execution.
              </div>
            </div>
            <div class="vertical center-justified layout">
              <wl-button class="fg red" ?disabled="${this.scanning}" outlined label="Rescan images" icon="refresh" @click="${()=>this.rescan_images()}">
                <wl-icon>refresh</wl-icon>
                <span id="rescan-image-button-desc">Rescan images</span>
              </wl-button>
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>Clean up old images</div>
              <div class="description">Clean up old images from docker image list.
              </div>
            </div>
            <div class="vertical center-justified layout">
              <wl-button class="fg red" disabled outlined label="Clean up images" icon="delete">
                <wl-icon>delete</wl-icon>
                Clean up images
              </wl-button>
            </div>
          </div>
        </div>
      </wl-card>
    `}firstUpdated(){this.notification=window.lablupNotification,this.indicator=this.shadowRoot.querySelector("#indicator"),void 0!==window.backendaiclient&&null!==window.backendaiclient||document.addEventListener("backend-ai-connected",()=>{},!0)}async _viewStateChanged(e){await this.updateComplete}async rescan_images(){this.shadowRoot.querySelector("#rescan-image-button-desc").textContent="Scanning...",this.scanning=!0,this.indicator.start("indeterminate"),this.indicator.set(10,"Scanning..."),window.backendaiclient.maintenance.rescan_images().then(e=>{this.shadowRoot.querySelector("#rescan-image-button-desc").textContent="Rescan images",this.scanning=!1,this.indicator.set(100,"Rescan image finished."),this.indicator.end(1e3)}).catch(e=>{this.scanning=!1,this.shadowRoot.querySelector("#rescan-image-button-desc").textContent="Rescan images",console.log(e),this.indicator.set(50,"Rescan failed."),this.indicator.end(1e3),e&&e.message&&(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}async recalculate_usage(){this.shadowRoot.querySelector("#recalculate_usage-button-desc").textContent="Recalculating...",this.recalculating=!0,this.indicator.start("indeterminate"),this.indicator.set(10,"Recalculating..."),window.backendaiclient.maintenance.recalculate_usage().then(e=>{this.shadowRoot.querySelector("#recalculate_usage-button-desc").textContent="Recalculate usage",this.recalculating=!1,this.indicator.set(100,"Recalculation finished."),this.indicator.end(1e3)}).catch(e=>{this.recalculating=!1,this.shadowRoot.querySelector("#recalculate_usage-button-desc").textContent="Recalculate usage",console.log(e),this.indicator.set(50,"Recalculation failed."),this.indicator.end(1e3),e&&e.message&&(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}};o([r({type:Object})],g.prototype,"images",void 0),o([r({type:Boolean})],g.prototype,"scanning",void 0),o([r({type:Boolean})],g.prototype,"recalculating",void 0),o([r({type:Object})],g.prototype,"notification",void 0),o([r({type:Object})],g.prototype,"indicator",void 0);var p=g=o([d("backend-ai-maintenance-view")],g);export default p;
