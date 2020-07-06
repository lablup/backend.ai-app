import{B as i,d as t,I as e,a as s,x as o,e as a,b as n,h as r,t as d,g as l,_ as c,p as v,c as p}from"./backend-ai-console-6dec094c.js";import"./unsafe-html-9418db93.js";import{t as u}from"./translate-unsafe-html-2baaa981.js";let h=class extends i{constructor(){super(),this.notification=Object(),this.manager_version="",this.manager_version_latest="",this.console_version="",this.api_version="",this.docker_version="",this.pgsql_version="",this.redis_version="",this.etcd_version="",this.account_changed=!0,this.use_ssl=!0}static get styles(){return[t,e,s,o,a,n`
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
            ${this.use_ssl?r`<wl-icon>done</wl-icon>`:r`<wl-icon class="fg red">warning</wl-icon>`}
            </div>
          </div>
        </div>
      </wl-card>
    `}firstUpdated(){this.notification=globalThis.lablupNotification,void 0===globalThis.backendaiclient||null===globalThis.backendaiclient?document.addEventListener("backend-ai-connected",()=>{this.updateInformation()},!0):this.updateInformation()}async _viewStateChanged(i){await this.updateComplete}updateInformation(){this.manager_version=globalThis.backendaiclient.managerVersion,this.console_version=globalThis.packageVersion,this.api_version=globalThis.backendaiclient.apiVersion,this.docker_version=l("information.Compatible"),this.pgsql_version=l("information.Compatible"),this.redis_version=l("information.Compatible"),this.etcd_version=l("information.Compatible"),globalThis.backendaiclient._config.endpoint.startsWith("https:")?this.use_ssl=!0:this.use_ssl=!1}};c([v({type:Object})],h.prototype,"notification",void 0),c([v({type:String})],h.prototype,"manager_version",void 0),c([v({type:String})],h.prototype,"manager_version_latest",void 0),c([v({type:String})],h.prototype,"console_version",void 0),c([v({type:String})],h.prototype,"api_version",void 0),c([v({type:String})],h.prototype,"docker_version",void 0),c([v({type:String})],h.prototype,"pgsql_version",void 0),c([v({type:String})],h.prototype,"redis_version",void 0),c([v({type:String})],h.prototype,"etcd_version",void 0),c([v({type:Boolean})],h.prototype,"account_changed",void 0),c([v({type:Boolean})],h.prototype,"use_ssl",void 0),h=c([p("backend-ai-information-view")],h);var g=h;export default g;
