import{d as i,e as t,I as e,a as o,D as s,f as a,b as n,h as r,t as d,E as c,_ as l,p as v,c as p}from"./backend-ai-console-f3f55dfb.js";import"./unsafe-html-218cb279.js";import{t as u}from"./translate-unsafe-html-43041ee1.js";import"./lablup-loading-indicator-f881de2e.js";import"./divider-bb247808.js";import"./backend-ai-indicator-06adad47.js";let h=class extends i{constructor(){super(),this.notification=Object(),this.indicator=Object(),this.manager_version="",this.manager_version_latest="",this.console_version="",this.api_version="",this.docker_version="",this.pgsql_version="",this.redis_version="",this.etcd_version="",this.account_changed=!0,this.use_ssl=!0}static get styles(){return[t,e,o,s,a,n`
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
          <span>${d("information.System")}</span>
          <span class="flex"></span>
        </h3>

        <h4>${d("information.Core")}</h4>
        <div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${d("information.ManagerVersion")}</div>
            </div>
            <div class="vertical center-justified layout">
              Backend.AI ${this.manager_version}
              <lablup-shields app="${d("information.Installation")}" color="darkgreen" description="${this.manager_version}" ui="flat"></lablup-shields>
              <lablup-shields app="${d("information.LatestRelease")}" color="darkgreen" description="${this.manager_version_latest}" ui="flat"></lablup-shields>
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${d("information.APIVersion")}</div>
            </div>
            <div class="vertical center-justified layout">
              ${this.api_version}
            </div>
          </div>
        </div>
        <h4>${d("information.Component")}</h4>
        <div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${d("information.DockerVersion")}</div>
              <div class="description">${u("information.DescDockerVersion")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              ${this.docker_version}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${d("information.PostgreSQLVersion")}</div>
              <div class="description">${u("information.DescPostgreSQLVersion")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              ${this.pgsql_version}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${d("information.ETCDVersion")}</div>
              <div class="description">${u("information.DescETCDVersion")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              ${this.etcd_version}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${d("information.RedisVersion")}</div>
              <div class="description">${u("information.DescRedisVersion")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              ${this.redis_version}
            </div>
          </div>
        </div>
        <h4>${d("information.Security")}</h4>
        <div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${d("information.DefaultAdministratorAccountChanged")}</div>
              <div class="description">${d("information.DescDefaultAdministratorAccountChanged")}
              </div>
            </div>
            <div class="vertical center-justified layout">
            ${this.account_changed?r`<wl-icon>done</wl-icon>`:r`<wl-icon>warning</wl-icon>`}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${d("information.UsesSSL")}</div>
              <div class="description">${d("information.DescUsesSSL")}
              </div>
            </div>
            <div class="vertical center-justified layout">
            ${this.use_ssl?r`<wl-icon>done</wl-icon>`:r`<wl-icon>warning</wl-icon>`}
            </div>
          </div>
        </div>
      </wl-card>
    `}firstUpdated(){this.notification=globalThis.lablupNotification,this.indicator=this.shadowRoot.querySelector("#indicator"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient?document.addEventListener("backend-ai-connected",()=>{this.updateInformation()},!0):this.updateInformation()}async _viewStateChanged(i){await this.updateComplete}updateInformation(){this.manager_version=globalThis.backendaiclient.managerVersion,this.console_version=globalThis.packageVersion,this.api_version=globalThis.backendaiclient.apiVersion,this.docker_version=c("information.Compatible"),this.pgsql_version=c("information.Compatible"),this.redis_version=c("information.Compatible"),this.etcd_version=c("information.Compatible")}};l([v({type:Object})],h.prototype,"notification",void 0),l([v({type:Object})],h.prototype,"indicator",void 0),l([v({type:String})],h.prototype,"manager_version",void 0),l([v({type:String})],h.prototype,"manager_version_latest",void 0),l([v({type:String})],h.prototype,"console_version",void 0),l([v({type:String})],h.prototype,"api_version",void 0),l([v({type:String})],h.prototype,"docker_version",void 0),l([v({type:String})],h.prototype,"pgsql_version",void 0),l([v({type:String})],h.prototype,"redis_version",void 0),l([v({type:String})],h.prototype,"etcd_version",void 0),l([v({type:Boolean})],h.prototype,"account_changed",void 0),l([v({type:Boolean})],h.prototype,"use_ssl",void 0),h=l([p("backend-ai-information-view")],h);var f=h;export default f;
