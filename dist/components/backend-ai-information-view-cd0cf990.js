import{d as i,e as t,I as e,a as s,z as a,f as o,b as n,h as r,_ as d,p as c,c as l}from"./backend-ai-console-14d10124.js";import"./lablup-loading-indicator-d581dc83.js";import"./divider-33c1d747.js";import"./backend-ai-indicator-a5fe5e8a.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let v=class extends i{constructor(){super(),this.notification=Object(),this.indicator=Object(),this.manager_version="",this.manager_version_latest="",this.console_version="",this.api_version="",this.docker_version="",this.pgsql_version="",this.redis_version="",this.etcd_version="",this.account_changed=!0,this.use_ssl=!0}static get styles(){return[t,e,s,a,o,n`
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
      <backend-ai-indicator id="indicator"></backend-ai-indicator>
      <wl-card elevation="1">
        <h3 class="horizontal center layout">
          <span>System</span>
          <span class="flex"></span>
        </h3>

        <h4>Core</h4>
        <div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>Manager version</div>
            </div>
            <div class="vertical center-justified layout">
              Backend.AI ${this.manager_version}
              <lablup-shields app="Installation" color="darkgreen" description="${this.manager_version}" ui="flat"></lablup-shields>
              <lablup-shields app="Latest Release" color="darkgreen" description="${this.manager_version_latest}" ui="flat"></lablup-shields>
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>API version</div>
            </div>
            <div class="vertical center-justified layout">
              ${this.api_version}
            </div>
          </div>
        </div>
        <h4>Components</h4>
        <div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>Docker version</div>
              <div class="description">Docker version on the cluster
              </div>
            </div>
            <div class="vertical center-justified layout">
              ${this.docker_version}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>PostgreSQL version</div>
              <div class="description">Database system for Backend.AI
              </div>
            </div>
            <div class="vertical center-justified layout">
              ${this.pgsql_version}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>ETCD version</div>
              <div class="description">Settings registry for Backend.AI
              </div>
            </div>
            <div class="vertical center-justified layout">
              ${this.etcd_version}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>Redis version</div>
              <div class="description">Cache / temporary storage for Backend.AI. <br />Also uses as asynchronous communication along agents.
              </div>
            </div>
            <div class="vertical center-justified layout">
              ${this.redis_version}
            </div>
          </div>
        </div>
        <h4>Security</h4>
        <div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>Default administrator account changed</div>
              <div class="description">SHOULD change the default account / password for production use.
              </div>
            </div>
            <div class="vertical center-justified layout">
            ${this.account_changed?r`<wl-icon>done</wl-icon>`:r`<wl-icon>warning</wl-icon>`}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>Uses SSL</div>
              <div class="description">HTTPS with proper SSL setup helps system
              </div>
            </div>
            <div class="vertical center-justified layout">
            ${this.use_ssl?r`<wl-icon>done</wl-icon>`:r`<wl-icon>warning</wl-icon>`}
            </div>
          </div>
        </div>
      </wl-card>
    `}firstUpdated(){this.notification=window.lablupNotification,this.indicator=this.shadowRoot.querySelector("#indicator"),void 0===window.backendaiclient||null===window.backendaiclient?document.addEventListener("backend-ai-connected",()=>{this.updateInformation()},!0):this.updateInformation()}async _viewStateChanged(i){await this.updateComplete}updateInformation(){this.manager_version=window.backendaiclient.managerVersion,this.console_version=window.packageVersion,this.api_version=window.backendaiclient.apiVersion,this.docker_version="Compatible",this.pgsql_version="Compatible",this.redis_version="Compatible",this.etcd_version="Compatible"}};d([c({type:Object})],v.prototype,"notification",void 0),d([c({type:Object})],v.prototype,"indicator",void 0),d([c({type:String})],v.prototype,"manager_version",void 0),d([c({type:String})],v.prototype,"manager_version_latest",void 0),d([c({type:String})],v.prototype,"console_version",void 0),d([c({type:String})],v.prototype,"api_version",void 0),d([c({type:String})],v.prototype,"docker_version",void 0),d([c({type:String})],v.prototype,"pgsql_version",void 0),d([c({type:String})],v.prototype,"redis_version",void 0),d([c({type:String})],v.prototype,"etcd_version",void 0),d([c({type:Boolean})],v.prototype,"account_changed",void 0),d([c({type:Boolean})],v.prototype,"use_ssl",void 0),v=d([l("backend-ai-information-view")],v);var p=v;export default p;
