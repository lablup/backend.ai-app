import{b as t,p as e,d as i,L as s,I as a,e as o,c as r,h as n,B as p,g as c}from"./iron-flex-layout-classes-e73207af.js";import"./switch-behavior-6b9be824.js";import"./iron-icon-83da4dc9.js";import"./paper-input-b9bbce80.js";import"./paper-item-a99a4887.js";import"./mwc-icon-button-60bda5c3.js";import"./lablup-shields-33a271c9.js";import"./iron-icons-1704f69f.js";import"./input-behavior-c84704b8.js";import"./index-3d3c7342.js";import"./index-b182735e.js";import"./resize-8fcbd74f.js";import"./index-b88a2f7c.js";import"./index-0fb3f3f8.js";import{B as l}from"./backend-ai-painkiller-9e69a028.js";import"./index-ebcb6479.js";import{B as d}from"./backend-ai-page-7318a5a0.js";import"./lablup-loading-indicator-c221f711.js";import"./iron-resizable-behavior-b33c26c2.js";import"./vaadin-progress-bar-b6e8a4ee.js";import"./paper-progress-2a37a5a2.js";import"./radio-behavior-59c4aee8.js";import"./backend-ai-chart-d9e24e06.js";import"./backend-ai-dropdown-menu-7aeeb5f1.js";import"./paper-dropdown-menu-85cc67f9.js";import"./index-1ee6c2dd.js";import"./index-9e9d1ef8.js";import"./backend-ai-resource-monitor-5b0646b1.js";let u=class extends s{constructor(){super(),this.title="",this.message="",this.panelId="",this.horizontalsize="",this.elevation=1,this.width=280,this.marginWidth=16,this.minwidth=0,this.maxwidth=0,this.pinned=!1}static get styles(){return[a,o,r`
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
    `}firstUpdated(){if(this.pinned||null==this.panelId){const t=this.shadowRoot.getElementById("button");this.shadowRoot.querySelector("h4").removeChild(t)}this.shadowRoot.querySelector("wl-card").style.width=this.width+"px",this.minwidth&&(this.shadowRoot.querySelector("wl-card").style.minWidth=this.minwidth+"px"),this.maxwidth&&(this.shadowRoot.querySelector("wl-card").style.minWidth=this.maxwidth+"px"),this.horizontalsize&&("2x"==this.horizontalsize&&(this.shadowRoot.querySelector("wl-card").style.width=2*this.width+32+"px"),"3x"==this.horizontalsize&&(this.shadowRoot.querySelector("wl-card").style.width=3*this.width+32+"px")),this.shadowRoot.querySelector("wl-card").style.margin=this.marginWidth+"px"}connectedCallback(){super.connectedCallback()}_removePanel(){}};t([e({type:String})],u.prototype,"title",void 0),t([e({type:String})],u.prototype,"message",void 0),t([e({type:String})],u.prototype,"panelId",void 0),t([e({type:String})],u.prototype,"horizontalsize",void 0),t([e({type:Number})],u.prototype,"elevation",void 0),t([e({type:Number})],u.prototype,"width",void 0),t([e({type:Number})],u.prototype,"marginWidth",void 0),t([e({type:Number})],u.prototype,"minwidth",void 0),t([e({type:Number})],u.prototype,"maxwidth",void 0),t([e({type:Boolean})],u.prototype,"pinned",void 0),u=t([i("lablup-activity-panel")],u);let h=class extends d{constructor(){super(),this.condition="running",this.sessions=0,this.jobs=Object(),this.agents=0,this.is_admin=!1,this.is_superadmin=!1,this.resources=Object(),this.authenticated=!1,this.manager_version="",this.cpu_total=0,this.cpu_used=0,this.cpu_percent="0",this.cpu_total_percent="0",this.cpu_total_usage_ratio=0,this.cpu_current_usage_ratio=0,this.mem_total="0",this.mem_used="0",this.mem_allocated="0",this.mem_total_usage_ratio=0,this.mem_current_usage_ratio=0,this.mem_current_usage_percent="0",this.gpu_total=0,this.gpu_used=0,this.fgpu_total=0,this.fgpu_used=0,this.indicator=Object(),this.notification=Object(),this.invitations=[]}static get styles(){return[p,a,o,c,r`
        ul {
          padding-left: 0;
        }

        ul li {
          list-style: none;
          font-size: 13px;
        }

        span.indicator {
          width: 100px;
        }

        div.big.indicator {
          font-size: 48px;
        }

        vaadin-progress-bar {
          width: 190px;
          height: 10px;
        }

        paper-progress {
          width: 190px;
          border-radius: 0;
          --paper-progress-height: 5px;
          --paper-progress-active-color: #3677eb;
          --paper-progress-transition-duration: 0.08s;
          --paper-progress-transition-timing-function: ease;
          --paper-progress-transition-delay: 0s;
        }

        paper-progress.start-bar {
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          --paper-progress-active-color: #3677eb;
        }

        paper-progress.end-bar {
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          --paper-progress-active-color: #98be5a;
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

        .invitation_folder_name {
          font-size: 13px;
        }
      `]}firstUpdated(){this.indicator=this.shadowRoot.querySelector("#loading-indicator"),this.notification=window.lablupNotification}_refreshHealthPanel(){this.activeConnected&&(this._refreshSessionInformation(),this.is_superadmin&&this._refreshAgentInformation())}_refreshSessionInformation(){if(!this.activeConnected)return;this.indicator.show();let t="RUNNING";switch(this.condition){case"running":t="RUNNING";break;case"finished":t="TERMINATED";break;case"archived":default:t="RUNNING"}window.backendaiclient.computeSession.list(["created_at"],t).then(t=>{this.indicator.hide(),this.jobs=t,this.sessions=t.compute_session_list.total_count,this.active&&setTimeout(()=>{this._refreshSessionInformation()},15e3)}).catch(t=>{this.jobs=[],this.sessions=0,this.notification.text=l.relieve("Couldn't connect to manager."),this.notification.detail=t,this.notification.show(!0)})}_refreshResourceInformation(){if(this.activeConnected)return window.backendaiclient.resourcePolicy.get(window.backendaiclient.resource_policy).then(t=>{let e=t.keypair_resource_policies;this.resourcePolicy=window.backendaiclient.utils.gqlToObject(e,"name")})}_refreshAgentInformation(t="running"){if(this.activeConnected){switch(this.condition){case"running":t="ALIVE";break;case"finished":t="TERMINATED";break;case"archived":default:t="ALIVE"}this.indicator.show(),window.backendaiclient.resources.totalResourceInformation().then(e=>{this.indicator.hide(),this.resources=e,this._sync_resource_values(),1==this.active&&setTimeout(()=>{this._refreshAgentInformation(t)},15e3)}).catch(t=>{t&&t.message&&(this.notification.text=l.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0))})}}_init_resource_values(){this.resources.cpu={},this.resources.cpu.total=0,this.resources.cpu.used=0,this.resources.cpu.percent=0,this.resources.mem={},this.resources.mem.total=0,this.resources.mem.allocated=0,this.resources.mem.used=0,this.resources.gpu={},this.resources.gpu.total=0,this.resources.gpu.used=0,this.resources.fgpu={},this.resources.fgpu.total=0,this.resources.fgpu.used=0,this.resources.agents={},this.resources.agents.total=0,this.resources.agents.using=0,this.cpu_total_usage_ratio=0,this.cpu_current_usage_ratio=0,this.mem_total_usage_ratio=0,this.mem_current_usage_ratio=0,this.mem_current_usage_percent="0",this.is_admin=!1,this.is_superadmin=!1,this.shadowRoot.querySelector("#resource-monitor").init_resource()}_sync_resource_values(){this.manager_version=window.backendaiclient.managerVersion,this.cpu_total=this.resources.cpu.total,this.mem_total=parseFloat(window.backendaiclient.utils.changeBinaryUnit(this.resources.mem.total,"g")).toFixed(2),isNaN(this.resources.gpu.total)?this.gpu_total=0:this.gpu_total=this.resources.gpu.total,isNaN(this.resources.fgpu.total)?this.fgpu_total=0:this.fgpu_total=this.resources.fgpu.total,this.cpu_used=this.resources.cpu.used,this.gpu_used=this.resources.gpu.used,this.fgpu_used=this.resources.fgpu.used,this.cpu_percent=parseFloat(this.resources.cpu.percent).toFixed(2),this.cpu_total_percent=(parseFloat(this.resources.cpu.percent)/(100*this.cpu_total)*100).toFixed(2),this.cpu_total_usage_ratio=this.resources.cpu.used/this.resources.cpu.total*100,this.cpu_current_usage_ratio=this.resources.cpu.percent/this.resources.cpu.total,this.mem_used=parseFloat(window.backendaiclient.utils.changeBinaryUnit(this.resources.mem.used,"g")).toFixed(2),this.mem_allocated=parseFloat(window.backendaiclient.utils.changeBinaryUnit(this.resources.mem.allocated,"g")).toFixed(2),this.mem_total_usage_ratio=this.resources.mem.allocated/this.resources.mem.total*100,this.mem_current_usage_ratio=this.resources.mem.used/this.resources.mem.total*100,0===this.mem_total_usage_ratio?this.mem_current_usage_percent="0.0":this.mem_current_usage_percent=this.mem_total_usage_ratio.toFixed(2),this.agents=this.resources.agents.total,isNaN(parseFloat(this.mem_current_usage_percent))&&(this.mem_current_usage_percent="0")}async _viewStateChanged(t){await this.updateComplete,!1!==t?(this.shadowRoot.querySelector("#resource-monitor").setAttribute("active","true"),this._init_resource_values(),this.requestUpdate(),void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.is_superadmin=window.backendaiclient.is_superadmin,this.authenticated=!0,this.activeConnected&&(this._refreshHealthPanel(),this._refreshInvitations())},!0):(this.is_superadmin=window.backendaiclient.is_superadmin,this.authenticated=!0,this._refreshHealthPanel(),this._refreshInvitations())):this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active")}_toInt(t){return Math.ceil(t)}_countObject(t){return Object.keys(t).length}_addComma(t){if(void 0===t)return"";return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}_refreshInvitations(){this.activeConnected&&window.backendaiclient.vfolder.invitations().then(t=>{this.invitations=t.invitations,this.active&&setTimeout(()=>{this._refreshInvitations()},15e3)})}_acceptInvitation(t){this.activeConnected&&window.backendaiclient.vfolder.accept_invitation(t.id).then(e=>{this.notification.text=`You can now access folder: ${t.vfolder_name}`,this.notification.show(),this._refreshInvitations()}).catch(t=>{this.notification.text=l.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0)})}_deleteInvitation(t){this.activeConnected&&window.backendaiclient.vfolder.delete_invitation(t.id).then(e=>{this.notification.text=`Folder invitation is deleted: ${t.vfolder_name}`,this.notification.show(),this._refreshInvitations()})}render(){return n`
      <lablup-loading-indicator id="loading-indicator"></lablup-loading-indicator>
      <wl-card class="item" elevation="1" style="padding-bottom:20px;">
        <h3 class="plastic-material-title">Statistics</h3>
        <div class="horizontal wrap layout">
          <lablup-activity-panel title="Start Menu" elevation="1">
            <div slot="message">
              <div class="horizontal justified layout wrap">
                <backend-ai-resource-monitor location="summary" id="resource-monitor" ?active="${this.active}" direction="vertical"></backend-ai-resource-monitor>
              </div>
            </div>
          </lablup-activity-panel>
          <lablup-activity-panel title="System Health" elevation="1">
            <div slot="message">
              <div class="horizontal justified layout wrap">
                ${this.is_superadmin?n`
                  <div class="vertical layout center">
                    <div class="big indicator">${this.agents}</div>
                    <span>Connected nodes</span>
                  </div>`:n``}
                <div class="vertical layout center">
                  <div class="big indicator">${this.sessions}</div>
                  <span>Active sessions</span>
                </div>
              </div>
            </div>
          </lablup-activity-panel>
          ${this.is_superadmin?n`
          <lablup-activity-panel title="Resource Statistics" elevation="1">
            <div slot="message">
              <div class="layout vertical center flex" style="margin-bottom:5px;">
                <lablup-shields app="Manager version" color="darkgreen" description="${this.manager_version}" ui="flat"></lablup-shields>
              </div>
              <div class="layout horizontal center flex" style="margin-bottom:5px;">
                <div class="layout vertical start center-justified">
                  <iron-icon class="fg green" icon="hardware:developer-board"></iron-icon>
                  <span>CPU</span>
                </div>
                <div class="layout vertical start" style="padding-left:15px;">
                  <paper-progress class="mem-usage-bar start-bar" value="${this.cpu_total_usage_ratio}"></paper-progress>
                  <paper-progress class="mem-usage-bar end-bar" id="cpu-usage-bar" value="${this.cpu_current_usage_ratio}"></paper-progress>
                  <div><span class="progress-value"> ${this._addComma(this.cpu_used)}</span>/${this._addComma(this.cpu_total)}
                    Cores reserved.
                  </div>
                  <div>Using <span class="progress-value"> ${this.cpu_total_percent}</span>% (util. ${this.cpu_percent} %)
                  </div>
                </div>
              </div>
              <div class="layout horizontal center flex" style="margin-bottom:5px;">
                <div class="layout vertical start center-justified">
                  <iron-icon class="fg green" icon="hardware:memory"></iron-icon>
                  <span>RAM</span>
                </div>
                <div class="layout vertical start" style="padding-left:15px;">
                  <paper-progress class="mem-usage-bar start-bar" id="mem-usage-bar" value="${this.mem_total_usage_ratio}"></paper-progress>
                  <paper-progress class="mem-usage-bar end-bar" value="${this.mem_current_usage_ratio}"></paper-progress>
                  <div><span class="progress-value"> ${this._addComma(this.mem_allocated)}</span>/${this._addComma(this.mem_total)} GB
                    reserved.
                  </div>
                  <div>Using <span class="progress-value"> ${this._addComma(this.mem_used)}</span> GB
                    (${this.mem_current_usage_percent} %)
                  </div>
                </div>
              </div>
              ${this.gpu_total?n`
                <div class="layout horizontal center flex" style="margin-bottom:5px;">
                  <div class="layout vertical start center-justified">
                    <iron-icon class="fg green" icon="icons:view-module"></iron-icon>
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
                    <iron-icon class="fg green" icon="icons:view-module"></iron-icon>
                    <span>GPU</span>
                  </div>
                  <div class="layout vertical start" style="padding-left:15px;">
                    <vaadin-progress-bar id="vgpu-bar" value="${this.fgpu_used}"
                                         max="${this.fgpu_total}"></vaadin-progress-bar>
                    <div><span class="progress-value"> ${this.fgpu_used}</span>/${this.fgpu_total} GPUs</div>
                    <div><span class="progress-value">Fractional GPU scaling enabled</div>
                  </div>
                </div>`:n``}
                <div class="horizontal center layout">
                  <div style="width:10px;height:10px;margin-left:40px;margin-right:3px;background-color:#4775E3;"></div>
                  <span style="margin-right:5px;">Reserved</span>
                  <div style="width:10px;height:10px;margin-right:3px;background-color:#A0BD67"></div>
                  <span style="margin-right:5px;">Used</span>
                  <div style="width:10px;height:10px;margin-right:3px;background-color:#E0E0E0"></div>
                  <span>Total</span>
                </div>
            </div>
          </lablup-activity-panel>`:n``}
        </div>
        <h3 class="plastic-material-title">Actions</h3>
        <div class="horizontal wrap layout">
          <lablup-activity-panel title="Shortcut" elevation="1">
            <div slot="message">
              <ul>
                <li><a href="/data">Upload files</a></li>
              </ul>
              <ul>
                <li><a href="/job">Start a session</a></li>
              </ul>
              ${this.is_admin?n`
                <ul>
                  <li><a href="/credential">Create a new key pair</a></li>
                  <li><a href="/credential">Maintain keypairs</a></li>
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
                    Accept
                  </wl-button>
                  <wl-button
                    class="fg red"
                    outlined
                    @click=${e=>this._deleteInvitation(t)}
                  >
                    <wl-icon>remove</wl-icon>
                    Decline
                  </wl-button>
                </div>
              </div>
            </lablup-activity-panel>
            `):""}
        </div>
      </wl-card>
`}};t([e({type:String})],h.prototype,"condition",void 0),t([e({type:Number})],h.prototype,"sessions",void 0),t([e({type:Object})],h.prototype,"jobs",void 0),t([e({type:Number})],h.prototype,"agents",void 0),t([e({type:Boolean})],h.prototype,"is_admin",void 0),t([e({type:Boolean})],h.prototype,"is_superadmin",void 0),t([e({type:Object})],h.prototype,"resources",void 0),t([e({type:Boolean})],h.prototype,"authenticated",void 0),t([e({type:String})],h.prototype,"manager_version",void 0),t([e({type:Number})],h.prototype,"cpu_total",void 0),t([e({type:Number})],h.prototype,"cpu_used",void 0),t([e({type:String})],h.prototype,"cpu_percent",void 0),t([e({type:String})],h.prototype,"cpu_total_percent",void 0),t([e({type:Number})],h.prototype,"cpu_total_usage_ratio",void 0),t([e({type:Number})],h.prototype,"cpu_current_usage_ratio",void 0),t([e({type:String})],h.prototype,"mem_total",void 0),t([e({type:String})],h.prototype,"mem_used",void 0),t([e({type:String})],h.prototype,"mem_allocated",void 0),t([e({type:Number})],h.prototype,"mem_total_usage_ratio",void 0),t([e({type:Number})],h.prototype,"mem_current_usage_ratio",void 0),t([e({type:String})],h.prototype,"mem_current_usage_percent",void 0),t([e({type:Number})],h.prototype,"gpu_total",void 0),t([e({type:Number})],h.prototype,"gpu_used",void 0),t([e({type:Number})],h.prototype,"fgpu_total",void 0),t([e({type:Number})],h.prototype,"fgpu_used",void 0),t([e({type:Object})],h.prototype,"indicator",void 0),t([e({type:Object})],h.prototype,"notification",void 0),t([e({type:Object})],h.prototype,"resourcePolicy",void 0);var m=h=t([i("backend-ai-summary-view")],h);export default m;
