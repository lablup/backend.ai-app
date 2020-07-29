import{B as i,d as e,I as t,a as s,x as n,e as a,b as o,h as r,t as d,g as c,_ as l,p as v,c as p}from"./backend-ai-console-d9b9a5ab.js";import"./unsafe-html-7ea47ac0.js";import{t as h}from"./translate-unsafe-html-81a59f03.js";let u=class extends i{constructor(){super(),this.notification=Object(),this.manager_version="",this.manager_version_latest="",this.console_version="",this.api_version="",this.docker_version="",this.pgsql_version="",this.redis_version="",this.etcd_version="",this.license_valid=!1,this.license_type="",this.license_licensee="",this.license_key="",this.license_expiration="",this.account_changed=!0,this.use_ssl=!0}static get styles(){return[e,t,s,n,a,o`
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
              <div class="description">${h("information.DescDockerVersion")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              ${this.docker_version}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${d("information.PostgreSQLVersion")}</div>
              <div class="description">${h("information.DescPostgreSQLVersion")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              ${this.pgsql_version}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${d("information.ETCDVersion")}</div>
              <div class="description">${h("information.DescETCDVersion")}
              </div>
            </div>
            <div class="vertical center-justified layout">
              ${this.etcd_version}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${d("information.RedisVersion")}</div>
              <div class="description">${h("information.DescRedisVersion")}
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
        <h4>${d("information.License")}</h4>
        <div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${d("information.IsLicenseValid")}</div>
              <div class="description">${d("information.DescIsLicenseValid")}
              </div>
            </div>
            <div class="vertical center-justified layout">
            ${this.license_valid?r`<wl-icon>done</wl-icon>`:r`<wl-icon class="fg red">warning</wl-icon>`}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${d("information.LicenseType")}</div>
              <div class="description">${h("information.DescLicenseType")}
              </div>
            </div>
            <div class="vertical center-justified layout">
            ${"fixed"===this.license_type?d("information.FixedLicense"):d("information.DynamicLicense")}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${d("information.Licensee")}</div>
              <div class="description">${d("information.DescLicensee")}
              </div>
            </div>
            <div class="vertical center-justified layout">
            ${this.license_licensee}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${d("information.LicenseKey")}</div>
              <div class="description">${d("information.DescLicenseKey")}
              </div>
            </div>
            <div class="vertical center-justified layout monospace indicator">
            ${this.license_key}
            </div>
          </div>
          <div class="horizontal flex layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${d("information.Expiration")}</div>
              <div class="description">${d("information.DescExpiration")}
              </div>
            </div>
            <div class="vertical center-justified layout">
            ${this.license_expiration}
            </div>
          </div>
        </div>

      </wl-card>
    `}firstUpdated(){this.notification=globalThis.lablupNotification,void 0===globalThis.backendaiclient||null===globalThis.backendaiclient?document.addEventListener("backend-ai-connected",()=>{this.updateInformation()},!0):this.updateInformation()}async _viewStateChanged(i){await this.updateComplete}_updateLicenseInfo(){globalThis.backendaiclient.enterprise.getLicense().then(i=>{this.license_valid=i.valid,this.license_type=i.type,this.license_licensee=i.licensee,this.license_key=i.licenseKey,this.license_expiration=i.expiration}).catch(i=>{this.license_valid=!1,this.license_type=c("information.CannotRead"),this.license_licensee=c("information.CannotRead"),this.license_key=c("information.CannotRead"),this.license_expiration=c("information.CannotRead")})}updateInformation(){this.manager_version=globalThis.backendaiclient.managerVersion,this.console_version=globalThis.packageVersion,this.api_version=globalThis.backendaiclient.apiVersion,this.docker_version=c("information.Compatible"),this.pgsql_version=c("information.Compatible"),this.redis_version=c("information.Compatible"),this.etcd_version=c("information.Compatible"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._updateLicenseInfo()},!0):this._updateLicenseInfo(),globalThis.backendaiclient._config.endpoint.startsWith("https:")?this.use_ssl=!0:this.use_ssl=!1}};l([v({type:Object})],u.prototype,"notification",void 0),l([v({type:String})],u.prototype,"manager_version",void 0),l([v({type:String})],u.prototype,"manager_version_latest",void 0),l([v({type:String})],u.prototype,"console_version",void 0),l([v({type:String})],u.prototype,"api_version",void 0),l([v({type:String})],u.prototype,"docker_version",void 0),l([v({type:String})],u.prototype,"pgsql_version",void 0),l([v({type:String})],u.prototype,"redis_version",void 0),l([v({type:String})],u.prototype,"etcd_version",void 0),l([v({type:Boolean})],u.prototype,"license_valid",void 0),l([v({type:String})],u.prototype,"license_type",void 0),l([v({type:String})],u.prototype,"license_licensee",void 0),l([v({type:String})],u.prototype,"license_key",void 0),l([v({type:String})],u.prototype,"license_expiration",void 0),l([v({type:Boolean})],u.prototype,"account_changed",void 0),l([v({type:Boolean})],u.prototype,"use_ssl",void 0),u=l([p("backend-ai-information-view")],u);var f=u;export default f;
