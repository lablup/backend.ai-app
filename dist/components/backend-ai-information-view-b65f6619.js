import{_ as i,p as t,c as e,d as s,e as o,I as a,a as n,A as r,f as d,b as l,h as c,t as v,g as p}from"./backend-ai-console-258bce16.js";import"./unsafe-html-ed81f2e2.js";import{t as u}from"./translate-unsafe-html-1391f1ba.js";import"./lablup-loading-spinner-ce8c59c1.js";let g=(()=>{let g=class extends s{constructor(){super(),this.notification=Object(),this.manager_version="",this.manager_version_latest="",this.console_version="",this.api_version="",this.docker_version="",this.pgsql_version="",this.redis_version="",this.etcd_version="",this.account_changed=!0,this.use_ssl=!0}static get styles(){return[o,a,n,r,d,l`
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
      `]}render(){return c`
      <wl-card elevation="1">
        <h3 class="horizontal center layout">
          <span>${v("information.System")}</span>
          <span class="flex"></span>
        </h3>

        <h4>${v("information.Core")}</h4>
        <div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${v("information.ManagerVersion")}</div>
            </div>
            <div class="vertical center-justified layout">
              Backend.AI ${this.manager_version}
              <lablup-shields app="${v("information.Installation")}" color="darkgreen" description="${this.manager_version}" ui="flat"></lablup-shields>
              <lablup-shields app="${v("information.LatestRelease")}" color="darkgreen" description="${this.manager_version_latest}" ui="flat"></lablup-shields>
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${v("information.APIVersion")}</div>
            </div>
            <div class="vertical center-justified layout">
              ${this.api_version}
            </div>
          </div>
        </div>
        <h4>${v("information.Component")}</h4>
        <div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${v("information.DockerVersion")}</div>
              <div class="description">${u("information.DescDockerVersion")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              ${this.docker_version}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${v("information.PostgreSQLVersion")}</div>
              <div class="description">${u("information.DescPostgreSQLVersion")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              ${this.pgsql_version}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${v("information.ETCDVersion")}</div>
              <div class="description">${u("information.DescETCDVersion")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              ${this.etcd_version}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${v("information.RedisVersion")}</div>
              <div class="description">${u("information.DescRedisVersion")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              ${this.redis_version}
            </div>
          </div>
        </div>
        <h4>${v("information.Security")}</h4>
        <div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${v("information.DefaultAdministratorAccountChanged")}</div>
              <div class="description">${v("information.DescDefaultAdministratorAccountChanged")}
              </div>
            </div>
            <div class="vertical center-justified layout">
            ${this.account_changed?c`<wl-icon>done</wl-icon>`:c`<wl-icon>warning</wl-icon>`}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${v("information.UsesSSL")}</div>
              <div class="description">${v("information.DescUsesSSL")}
              </div>
            </div>
            <div class="vertical center-justified layout">
            ${this.use_ssl?c`<wl-icon>done</wl-icon>`:c`<wl-icon>warning</wl-icon>`}
            </div>
          </div>
        </div>
      </wl-card>
    `}firstUpdated(){this.notification=globalThis.lablupNotification,void 0===globalThis.backendaiclient||null===globalThis.backendaiclient?document.addEventListener("backend-ai-connected",()=>{this.updateInformation()},!0):this.updateInformation()}async _viewStateChanged(i){await this.updateComplete}updateInformation(){this.manager_version=globalThis.backendaiclient.managerVersion,this.console_version=globalThis.packageVersion,this.api_version=globalThis.backendaiclient.apiVersion,this.docker_version=p("information.Compatible"),this.pgsql_version=p("information.Compatible"),this.redis_version=p("information.Compatible"),this.etcd_version=p("information.Compatible")}};return i([t({type:Object})],g.prototype,"notification",void 0),i([t({type:String})],g.prototype,"manager_version",void 0),i([t({type:String})],g.prototype,"manager_version_latest",void 0),i([t({type:String})],g.prototype,"console_version",void 0),i([t({type:String})],g.prototype,"api_version",void 0),i([t({type:String})],g.prototype,"docker_version",void 0),i([t({type:String})],g.prototype,"pgsql_version",void 0),i([t({type:String})],g.prototype,"redis_version",void 0),i([t({type:String})],g.prototype,"etcd_version",void 0),i([t({type:Boolean})],g.prototype,"account_changed",void 0),i([t({type:Boolean})],g.prototype,"use_ssl",void 0),g=i([e("backend-ai-information-view")],g),g})();export default g;
