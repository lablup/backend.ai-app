import{_ as t,p as e,c as i,L as s,I as a,a as o,b as r,h as n,d as l,e as c,f as d,g as p,t as u}from"./backend-ai-console-52da7ce1.js";import"./unsafe-html-4738bd5b.js";import"./lablup-loading-indicator-320198e1.js";import"./iron-resizable-behavior-5743f649.js";import"./vaadin-progress-bar-c86f5342.js";import"./mwc-linear-progress-9681a7e6.js";import"./backend-ai-chart-59df115b.js";import"./paper-dropdown-menu-ae71b683.js";import"./iron-iconset-svg-c8634dd5.js";import"./paper-item-8b2d5caf.js";import"./mwc-select-cb682d2b.js";import"./backend-ai-resource-monitor-3f4d5999.js";import"./radio-behavior-4d4215af.js";import"./expansion-142ca055.js";import"./label-9371cb47.js";let h=class extends s{constructor(){super(),this.title="",this.message="",this.panelId="",this.horizontalsize="",this.elevation=1,this.width=280,this.marginWidth=16,this.minwidth=0,this.maxwidth=0,this.pinned=!1}static get styles(){return[a,o,r`
        wl-card {
          display: block;
          background: white;
          box-sizing: border-box;
          margin: 16px;
          padding: 0;
          border-radius: 5px;
        }

        wl-card > h4 {
          border-left: 3px solid var(--paper-green-900);
          background-color: var(--paper-green-500);
          color: #eee;
          font-size: 14px;
          font-weight: 400;
          height: 32px;
          padding: 5px 15px 5px 20px;
          margin: 0 0 10px 0;
          border-bottom: 1px solid #DDD;
          @apply --layout-justified;
          display: flex;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        wl-card > div {
          margin: 20px;
          padding-bottom: 20px;
          font-size: 12px;
          padding-left: 3px;
        }

        ul {
          padding-inline-start: 0;
        }

        #button {
          display: none;
        }
      `]}render(){return n`
      <wl-card id="activity" elevation="${this.elevation}">
        <h4 class="horizontal center layout" style="font-weight:bold">
          <span>${this.title}</span>
          <div class="flex"></div>
          <wl-button id="button" fab flat inverted @click="${()=>this._removePanel()}">
            <wl-icon>close</wl-icon>
          </wl-button>
        </h4>
        <div>
          <slot name="message"></slot>
        </div>
      </wl-card>
    `}firstUpdated(){if(this.pinned||null==this.panelId){const t=this.shadowRoot.getElementById("button");this.shadowRoot.querySelector("h4").removeChild(t)}this.shadowRoot.querySelector("wl-card").style.width=this.width+"px",this.minwidth&&(this.shadowRoot.querySelector("wl-card").style.minWidth=this.minwidth+"px"),this.maxwidth&&(this.shadowRoot.querySelector("wl-card").style.minWidth=this.maxwidth+"px"),this.horizontalsize&&("2x"==this.horizontalsize&&(this.shadowRoot.querySelector("wl-card").style.width=2*this.width+32+"px"),"3x"==this.horizontalsize&&(this.shadowRoot.querySelector("wl-card").style.width=3*this.width+32+"px")),this.shadowRoot.querySelector("wl-card").style.margin=this.marginWidth+"px"}connectedCallback(){super.connectedCallback()}_removePanel(){}};t([e({type:String})],h.prototype,"title",void 0),t([e({type:String})],h.prototype,"message",void 0),t([e({type:String})],h.prototype,"panelId",void 0),t([e({type:String})],h.prototype,"horizontalsize",void 0),t([e({type:Number})],h.prototype,"elevation",void 0),t([e({type:Number})],h.prototype,"width",void 0),t([e({type:Number})],h.prototype,"marginWidth",void 0),t([e({type:Number})],h.prototype,"minwidth",void 0),t([e({type:Number})],h.prototype,"maxwidth",void 0),t([e({type:Boolean})],h.prototype,"pinned",void 0),h=t([i("lablup-activity-panel")],h);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let m=class extends l{constructor(){super(),this.condition="running",this.sessions=0,this.jobs=Object(),this.agents=0,this.is_admin=!1,this.is_superadmin=!1,this.resources=Object(),this.authenticated=!1,this.manager_version="",this.console_version="",this.cpu_total=0,this.cpu_used=0,this.cpu_percent="0",this.cpu_total_percent="0",this.cpu_total_usage_ratio=0,this.cpu_current_usage_ratio=0,this.mem_total="0",this.mem_used="0",this.mem_allocated="0",this.mem_total_usage_ratio=0,this.mem_current_usage_ratio=0,this.mem_current_usage_percent="0",this.gpu_total=0,this.gpu_used=0,this.fgpu_total=0,this.fgpu_used=0,this.indicator=Object(),this.notification=Object(),this.invitations=[]}static get styles(){return[c,a,o,d,r`
        ul {
          padding-left: 0;
        }

        ul li {
          list-style: none;
          font-size: 14px;
        }

        li:before {
          padding: 3px;
          transform: rotate(-45deg) translateY(-2px);
          transition: color ease-in .2s;
          border: solid;
          border-width: 0 2px 2px 0;
          border-color: #242424;
          margin-right: 10px;
          content: '';
          display: inline-block;
        }

        span.indicator {
          width: 100px;
        }

        div.big.indicator {
          font-size: 48px;
        }

        a,
        a:visited {
          color: #222222;
        }

        a:hover {
          color: #3e872d;
        }

        vaadin-progress-bar {
          width: 190px;
          height: 10px;
        }

        mwc-linear-progress {
          width: 190px;
          height: 5px;
          border-radius: 0;
          --mdc-theme-primary: #3677eb;
        }

        mwc-linear-progress.start-bar {
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          --mdc-theme-primary: #3677eb;
        }

        mwc-linear-progress.end-bar {
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          --mdc-theme-primary: #98be5a;
        }

        wl-button[class*="green"] {
          --button-bg: var(--paper-light-green-50);
          --button-bg-hover: var(--paper-green-100);
          --button-bg-active: var(--paper-green-600);
        }

        wl-button[class*="red"] {
          --button-bg: var(--paper-red-50);
          --button-bg-hover: var(--paper-red-100);
          --button-bg-active: var(--paper-red-600);
        }

        wl-icon {
          --icon-size: 24px;
        }

        .invitation_folder_name {
          font-size: 13px;
        }
      `]}firstUpdated(){this.indicator=this.shadowRoot.querySelector("#loading-indicator"),this.notification=globalThis.lablupNotification}_refreshHealthPanel(){this.activeConnected&&(this._refreshSessionInformation(),this.is_superadmin&&this._refreshAgentInformation())}_refreshSessionInformation(){if(!this.activeConnected)return;this.indicator.show();let t="RUNNING";switch(this.condition){case"running":t="RUNNING";break;case"finished":t="TERMINATED";break;case"archived":default:t="RUNNING"}globalThis.backendaiclient.computeSession.list(["created_at"],t).then(t=>{this.indicator.hide(),this.jobs=t,this.sessions=t.compute_session_list.total_count,this.active&&setTimeout(()=>{this._refreshSessionInformation()},15e3)}).catch(t=>{this.indicator.hide(),this.jobs=[],this.sessions=0,this.notification.text=p.relieve("Couldn't connect to manager."),this.notification.detail=t,this.notification.show(!0,t)})}_refreshResourceInformation(){if(this.activeConnected)return globalThis.backendaiclient.resourcePolicy.get(globalThis.backendaiclient.resource_policy).then(t=>{let e=t.keypair_resource_policies;this.resourcePolicy=globalThis.backendaiclient.utils.gqlToObject(e,"name")})}_refreshAgentInformation(t="running"){if(this.activeConnected){switch(this.condition){case"running":t="ALIVE";break;case"finished":t="TERMINATED";break;case"archived":default:t="ALIVE"}this.indicator.show(),globalThis.backendaiclient.resources.totalResourceInformation().then(e=>{this.indicator.hide(),this.resources=e,this._sync_resource_values(),1==this.active&&setTimeout(()=>{this._refreshAgentInformation(t)},15e3)}).catch(t=>{this.indicator.hide(),t&&t.message&&(this.notification.text=p.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))})}}_init_resource_values(){this.resources.cpu={},this.resources.cpu.total=0,this.resources.cpu.used=0,this.resources.cpu.percent=0,this.resources.mem={},this.resources.mem.total=0,this.resources.mem.allocated=0,this.resources.mem.used=0,this.resources.gpu={},this.resources.gpu.total=0,this.resources.gpu.used=0,this.resources.fgpu={},this.resources.fgpu.total=0,this.resources.fgpu.used=0,this.resources.agents={},this.resources.agents.total=0,this.resources.agents.using=0,this.cpu_total_usage_ratio=0,this.cpu_current_usage_ratio=0,this.mem_total_usage_ratio=0,this.mem_current_usage_ratio=0,this.mem_current_usage_percent="0",this.is_admin=!1,this.is_superadmin=!1,this.shadowRoot.querySelector("#resource-monitor").init_resource()}_sync_resource_values(){this.manager_version=globalThis.backendaiclient.managerVersion,this.console_version=globalThis.packageVersion,this.cpu_total=this.resources.cpu.total,this.mem_total=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(this.resources.mem.total,"g")).toFixed(2),isNaN(this.resources.gpu.total)?this.gpu_total=0:this.gpu_total=this.resources.gpu.total,isNaN(this.resources.fgpu.total)?this.fgpu_total=0:this.fgpu_total=this.resources.fgpu.total,this.cpu_used=this.resources.cpu.used,this.gpu_used=this.resources.gpu.used,this.fgpu_used=this.resources.fgpu.used,this.cpu_percent=parseFloat(this.resources.cpu.percent).toFixed(2),this.cpu_total_percent=(parseFloat(this.resources.cpu.percent)/(100*this.cpu_total)*100).toFixed(2),this.cpu_total_usage_ratio=this.resources.cpu.used/this.resources.cpu.total*100,this.cpu_current_usage_ratio=this.resources.cpu.percent/this.resources.cpu.total,this.mem_used=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(this.resources.mem.used,"g")).toFixed(2),this.mem_allocated=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(this.resources.mem.allocated,"g")).toFixed(2),this.mem_total_usage_ratio=this.resources.mem.allocated/this.resources.mem.total*100,this.mem_current_usage_ratio=this.resources.mem.used/this.resources.mem.total*100,0===this.mem_total_usage_ratio?this.mem_current_usage_percent="0.0":this.mem_current_usage_percent=this.mem_total_usage_ratio.toFixed(2),this.agents=this.resources.agents.total,isNaN(parseFloat(this.mem_current_usage_percent))&&(this.mem_current_usage_percent="0")}async _viewStateChanged(t){await this.updateComplete,!1!==t?(this.shadowRoot.querySelector("#resource-monitor").setAttribute("active","true"),this._init_resource_values(),this.requestUpdate(),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.is_superadmin=globalThis.backendaiclient.is_superadmin,this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this.activeConnected&&(this._refreshHealthPanel(),this._refreshInvitations())},!0):(this.is_superadmin=globalThis.backendaiclient.is_superadmin,this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this._refreshHealthPanel(),this._refreshInvitations())):this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active")}_toInt(t){return Math.ceil(t)}_countObject(t){return Object.keys(t).length}_addComma(t){if(void 0===t)return"";return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}_refreshInvitations(){this.activeConnected&&globalThis.backendaiclient.vfolder.invitations().then(t=>{this.invitations=t.invitations,this.active&&setTimeout(()=>{this._refreshInvitations()},15e3)})}_acceptInvitation(t){this.activeConnected&&globalThis.backendaiclient.vfolder.accept_invitation(t.id).then(e=>{this.notification.text=`You can now access folder: ${t.vfolder_name}`,this.notification.show(),this._refreshInvitations()}).catch(t=>{this.notification.text=p.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t)})}_deleteInvitation(t){this.activeConnected&&globalThis.backendaiclient.vfolder.delete_invitation(t.id).then(e=>{this.notification.text=`Folder invitation is deleted: ${t.vfolder_name}`,this.notification.show(),this._refreshInvitations()})}render(){return n`
      <lablup-loading-indicator id="loading-indicator"></lablup-loading-indicator>
      <wl-card class="item" elevation="1" style="padding-bottom:20px;">
        <h3 class="plastic-material-title">${u("summary.Dashboard")}</h3>
        <div class="horizontal wrap layout">
          <lablup-activity-panel title="${u("summary.StartMenu")}" elevation="1">
            <div slot="message">
              <div class="horizontal justified layout wrap">
                <backend-ai-resource-monitor location="summary" id="resource-monitor" ?active="${this.active}" direction="vertical"></backend-ai-resource-monitor>
              </div>
            </div>
          </lablup-activity-panel>
          <lablup-activity-panel title="${u("summary.SystemHealth")}" elevation="1">
            <div slot="message">
              <div class="horizontal justified layout wrap">
                ${this.is_superadmin?n`
                  <div class="vertical layout center">
                    <div class="big indicator">${this.agents}</div>
                    <span>${u("summary.ConnectedNodes")}</span>
                  </div>`:n``}
                <div class="vertical layout center">
                  <div class="big indicator">${this.sessions}</div>
                  <span>${u("summary.ActiveSessions")}</span>
                </div>
              </div>
            </div>
          </lablup-activity-panel>
          ${this.is_superadmin?n`
          <lablup-activity-panel title="${u("summary.ResourceStatistics")}" elevation="1">
            <div slot="message">
              <div class="layout horizontal center flex" style="margin-bottom:5px;">
                <div class="layout vertical start center-justified">
                  <wl-icon class="fg green">developer_board</wl-icon>
                  <span>CPU</span>
                </div>
                <div class="layout vertical start" style="padding-left:15px;">
                  <mwc-linear-progress class="mem-usage-bar start-bar" progress="${this.cpu_total_usage_ratio/100}"></mwc-linear-progress>
                  <mwc-linear-progress class="mem-usage-bar end-bar" id="cpu-usage-bar" progress="${this.cpu_current_usage_ratio/100}"></mwc-linear-progress>
                  <div><span class="progress-value"> ${this._addComma(this.cpu_used)}</span>/${this._addComma(this.cpu_total)}
                    ${u("summary.CoresReserved")}.
                  </div>
                  <div>${u("summary.Using")} <span class="progress-value"> ${this.cpu_total_percent}</span>% (util. ${this.cpu_percent} %)
                  </div>
                </div>
              </div>
              <div class="layout horizontal center flex" style="margin-bottom:5px;">
                <div class="layout vertical start center-justified">
                  <wl-icon class="fg green">memory</wl-icon>
                  <span>RAM</span>
                </div>
                <div class="layout vertical start" style="padding-left:15px;">
                  <mwc-linear-progress class="mem-usage-bar start-bar" id="mem-usage-bar" progress="${this.mem_total_usage_ratio/100}"></mwc-linear-progress>
                  <mwc-linear-progress class="mem-usage-bar end-bar" progress="${this.mem_current_usage_ratio/100}"></mwc-linear-progress>
                  <div><span class="progress-value"> ${this._addComma(this.mem_allocated)}</span>/${this._addComma(this.mem_total)} GB
                    ${u("summary.reserved")}.
                  </div>
                  <div>${u("summary.Using")} <span class="progress-value"> ${this._addComma(this.mem_used)}</span> GB
                    (${this.mem_current_usage_percent} %)
                  </div>
                </div>
              </div>
              ${this.gpu_total?n`
                <div class="layout horizontal center flex" style="margin-bottom:5px;">
                  <div class="layout vertical start center-justified">
                    <wl-icon class="fg green">view_module</wl-icon>
                    <span>GPU</span>
                  </div>
                  <div class="layout vertical start" style="padding-left:15px;">
                    <vaadin-progress-bar id="gpu-bar" .value="${this.gpu_used}" .max="${this.gpu_total}"></vaadin-progress-bar>
                    <div><span class="progress-value"> ${this.gpu_used}</span>/${this.gpu_total} GPUs</div>
                  </div>
                </div>`:n``}
              ${this.fgpu_total?n`
                <div class="layout horizontal center flex" style="margin-bottom:5px;">
                  <div class="layout vertical start center-justified">
                    <wl-icon class="fg green">view_module</wl-icon>
                    <span>GPU</span>
                  </div>
                  <div class="layout vertical start" style="padding-left:15px;">
                    <vaadin-progress-bar id="vgpu-bar" value="${this.fgpu_used}"
                                         max="${this.fgpu_total}"></vaadin-progress-bar>
                    <div><span class="progress-value"> ${this.fgpu_used}</span>/${this.fgpu_total} GPUs</div>
                    <div><span class="progress-value">${u("summary.FractionalGPUScalingEnabled")}.</div>
                  </div>
                </div>`:n``}
                <div class="horizontal center layout">
                  <div style="width:10px;height:10px;margin-left:40px;margin-right:3px;background-color:#4775E3;"></div>
                  <span style="margin-right:5px;">${u("summary.Reserved")}</span>
                  <div style="width:10px;height:10px;margin-right:3px;background-color:#A0BD67"></div>
                  <span style="margin-right:5px;">${u("summary.Used")}</span>
                  <div style="width:10px;height:10px;margin-right:3px;background-color:#E0E0E0"></div>
                  <span>${u("summary.Total")}</span>
                </div>
            </div>
          </lablup-activity-panel>`:n``}
        </div>
        <h3 class="plastic-material-title">${u("summary.Actions")}</h3>
        <div class="horizontal wrap layout">
          <lablup-activity-panel title="${u("summary.Shortcut")}" elevation="1">
            <div slot="message">
              <ul>
                <li><a href="/data">${u("summary.UploadFiles")}</a></li>
              </ul>
              <ul>
                <li><a href="/job">${u("summary.StartASession")}</a></li>
              </ul>
              ${this.is_admin?n`
                <ul>
                  <li><a href="/credential">${u("summary.CreateANewKeypair")}</a></li>
                  <li><a href="/credential">${u("summary.MaintainKeypairs")}</a></li>
                </ul>`:n``}
            </div>
          </lablup-activity-panel>
      ${this.invitations?this.invitations.map(t=>n`
            <lablup-activity-panel title="Invitation">
              <div slot="message">
                <h3>From ${t.inviter}</h3>
                <span class="invitation_folder_name">Folder name: ${t.vfolder_name}</span>
                <div class="horizontal center layout">
                Permission:
                ${[...t.perm].map(t=>n`
                  <lablup-shields app="" color="${["green","blue","red"][["r","w","d"].indexOf(t)]}"
                            description="${t.toUpperCase()}" ui="flat"></lablup-shields>`)}
                </div>
                <div style="margin-top:25px;" class="horizontal layout justified">
                  <wl-button
                    class="fg green"
                    outlined
                    @click=${e=>this._acceptInvitation(t)}
                  >
                    <wl-icon>add</wl-icon>
                    ${u("summary.Accept")}
                  </wl-button>
                  <wl-button
                    class="fg red"
                    outlined
                    @click=${e=>this._deleteInvitation(t)}
                  >
                    <wl-icon>remove</wl-icon>
                    ${u("summary.Decline")}
                  </wl-button>
                </div>
              </div>
            </lablup-activity-panel>
            `):""}
    ${this.is_admin?n`
          <lablup-activity-panel title="${u("summary.Administration")}" elevation="1">
            <div slot="message">
      ${this.is_superadmin?n`
              <div class="layout vertical center flex" style="margin-bottom:5px;">
                <lablup-shields app="Manager version" color="darkgreen" description="${this.manager_version}" ui="flat"></lablup-shields>
                <lablup-shields app="Console version" color="darkgreen" description="${this.console_version}" ui="flat"></lablup-shields>
              </div>`:n``}
              <ul>
                <li><a href="/environment">${u("summary.UpdateEnvironmentImages")}</a></li>
                <li><a href="/agent">${u("summary.CheckResources")}</a></li>
      ${this.is_superadmin?n`
                <li><a href="/settings">${u("summary.ChangeSystemSetting")}</a></li>
                <li><a href="/environment">${u("summary.SystemMaintenance")}</a></li>`:n``}
              </ul>
            </div>
          </lablup-activity-panel>`:n``}
        </div>
      </wl-card>
`}};t([e({type:String})],m.prototype,"condition",void 0),t([e({type:Number})],m.prototype,"sessions",void 0),t([e({type:Object})],m.prototype,"jobs",void 0),t([e({type:Number})],m.prototype,"agents",void 0),t([e({type:Boolean})],m.prototype,"is_admin",void 0),t([e({type:Boolean})],m.prototype,"is_superadmin",void 0),t([e({type:Object})],m.prototype,"resources",void 0),t([e({type:Boolean})],m.prototype,"authenticated",void 0),t([e({type:String})],m.prototype,"manager_version",void 0),t([e({type:String})],m.prototype,"console_version",void 0),t([e({type:Number})],m.prototype,"cpu_total",void 0),t([e({type:Number})],m.prototype,"cpu_used",void 0),t([e({type:String})],m.prototype,"cpu_percent",void 0),t([e({type:String})],m.prototype,"cpu_total_percent",void 0),t([e({type:Number})],m.prototype,"cpu_total_usage_ratio",void 0),t([e({type:Number})],m.prototype,"cpu_current_usage_ratio",void 0),t([e({type:String})],m.prototype,"mem_total",void 0),t([e({type:String})],m.prototype,"mem_used",void 0),t([e({type:String})],m.prototype,"mem_allocated",void 0),t([e({type:Number})],m.prototype,"mem_total_usage_ratio",void 0),t([e({type:Number})],m.prototype,"mem_current_usage_ratio",void 0),t([e({type:String})],m.prototype,"mem_current_usage_percent",void 0),t([e({type:Number})],m.prototype,"gpu_total",void 0),t([e({type:Number})],m.prototype,"gpu_used",void 0),t([e({type:Number})],m.prototype,"fgpu_total",void 0),t([e({type:Number})],m.prototype,"fgpu_used",void 0),t([e({type:Object})],m.prototype,"indicator",void 0),t([e({type:Object})],m.prototype,"notification",void 0),t([e({type:Object})],m.prototype,"resourcePolicy",void 0),m=t([i("backend-ai-summary-view")],m);var g=m;export default g;
