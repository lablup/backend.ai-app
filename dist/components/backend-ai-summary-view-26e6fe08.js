import{_ as e,p as t,c as i,L as s,h as r,g as n,I as a,a as o,b as l,B as c,d as p,e as u,f as h,t as d}from"./backend-ai-webui-40e10052.js";import{u as g}from"./unsafe-html-0703bf8d.js";import"./mwc-linear-progress-69943234.js";import"./lablup-activity-panel-ba11e3da.js";import"./backend-ai-session-launcher-89323c3b.js";import{t as m}from"./translate-unsafe-html-3f77263c.js";import"./lablup-progress-bar-0fae70d1.js";import"./mwc-switch-482aa074.js";import"./label-d8b19527.js";import"./vaadin-grid-69a293c4.js";import"./vaadin-grid-filter-746f865b.js";import"./vaadin-grid-filter-column-341aabd7.js";import"./vaadin-grid-selection-column-b09fda67.js";import"./expansion-26600d0e.js";import"./radio-behavior-9abe10ad.js";import"./rowing-42d82a96.js";import"./mwc-slider-924ecce3.js";import"./textfield-1b186cd3.js";import"./input-behavior-fb0a400b.js";
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let b=class extends s{constructor(){super(),this.releaseURL="https://raw.githubusercontent.com/lablup/backend.ai-webui/release/version.json",this.localVersion="",this.localBuild="",this.remoteVersion="",this.remoteBuild="",this.remoteRevision="",this.updateChecked=!1,this.updateNeeded=!1,this.updateURL=""}static get styles(){return[]}render(){return r`
    `}firstUpdated(){this.notification=globalThis.lablupNotification,globalThis.isElectron&&void 0!==globalThis.backendaioptions&&globalThis.backendaioptions.get("automatic_update_check",!0)&&this.checkRelease()}async checkRelease(){this.updateChecked||fetch(this.releaseURL).then((e=>e.json())).then((e=>{this.updateChecked=!0,this.remoteVersion=e.package,this.remoteBuild=e.build,this.remoteRevision=e.revision,this.compareVersion(globalThis.packageVersion,this.remoteVersion)<0&&(this.updateNeeded=!0,this.updateURL=`https://github.com/lablup/backend.ai-webui/releases/tag/v${this.remoteVersion}`,globalThis.isElectron&&(this.notification.text=n("update.NewWebUIVersionAvailable")+" "+this.remoteVersion,this.notification.detail=n("update.NewWebUIVersionAvailable"),this.notification.url=this.updateURL,this.notification.show()))})).catch((e=>{const t=globalThis.backendaioptions.get("automatic_update_count_trial",0);t>3&&globalThis.backendaioptions.set("automatic_update_check",!1),globalThis.backendaioptions.set("automatic_update_count_trial",t+1)}))}compareVersion(e,t){if("string"!=typeof e)return!1;if("string"!=typeof t)return!1;e=e.split("."),t=t.split(".");const i=Math.min(e.length,t.length);for(let s=0;s<i;++s){if(e[s]=parseInt(e[s],10),t[s]=parseInt(t[s],10),e[s]>t[s])return 1;if(e[s]<t[s])return-1}return e.length==t.length?0:e.length<t.length?-1:1}};e([t({type:String})],b.prototype,"releaseURL",void 0),e([t({type:String})],b.prototype,"localVersion",void 0),e([t({type:String})],b.prototype,"localBuild",void 0),e([t({type:String})],b.prototype,"remoteVersion",void 0),e([t({type:String})],b.prototype,"remoteBuild",void 0),e([t({type:String})],b.prototype,"remoteRevision",void 0),e([t({type:Boolean})],b.prototype,"updateChecked",void 0),e([t({type:Boolean})],b.prototype,"updateNeeded",void 0),e([t({type:String})],b.prototype,"updateURL",void 0),e([t({type:Object})],b.prototype,"notification",void 0),b=e([i("backend-ai-release-check")],b);let f=class extends s{constructor(){super(),this.currentNumber=50,this.maxNumber=100,this.unit="%",this.url="",this.textcolor="#888888",this.chartcolor="#ff2222",this.size=200,this.fontsize=60,this.chartFontSize="0",this.indicatorPath="",this.prefix="",this.sizeParam=""}static get is(){return"lablup-piechart"}static get styles(){return[a,o,l`
        #chart {
          cursor: pointer;
        }
      `]}firstUpdated(){this.sizeParam=this.size+"px";let e=this.fontsize/this.size;e=e>=.5?.3:.9/this.currentNumber.toString().length,this.chartFontSize=e.toString();let t=this.shadowRoot.querySelector("#chart"),i=this.shadowRoot.querySelector("#chart-text"),s=this.shadowRoot.querySelector("#unit-text"),r=(.3-.05*this.unit.length).toString();t.setAttribute("fill",this.chartcolor),i.setAttribute("fill",this.textcolor),i.setAttribute("font-size",this.chartFontSize),s.setAttribute("font-size",r),t.setAttribute("width",this.sizeParam),t.setAttribute("height",this.sizeParam),this.indicatorPath="M 0.5 0.5 L0.5 0 ";var n=100*(this.maxNumber-this.currentNumber)/this.maxNumber;n>12.5&&(this.indicatorPath=this.indicatorPath+"L1 0 "),n>37.5&&(this.indicatorPath=this.indicatorPath+"L1 1 "),n>62.5&&(this.indicatorPath=this.indicatorPath+"L0 1 "),n>87.5&&(this.indicatorPath=this.indicatorPath+"L0 0 ");let a=n/100*2*Math.PI,o=Math.sin(a)/Math.cos(a),l=0,c=0;n<=12.5||n>87.5?(c=.5,l=c*o):n>12.5&&n<=37.5?(l=.5,c=l/o):n>37.5&&n<=62.5?(c=-.5,l=c*o):n>62.5&&n<=87.5&&(l=-.5,c=l/o),l+=.5,c=.5-c,this.indicatorPath=this.indicatorPath+"L"+l+" "+c+" z",this.shadowRoot.querySelector("#pievalue").setAttribute("d",this.indicatorPath),void 0!==this.url&&""!==this.url&&this.shadowRoot.querySelector("#chart").addEventListener("tap",this._moveTo.bind(this)),this.requestUpdate()}connectedCallback(){super.connectedCallback()}_moveTo(){window.location.href=this.url}render(){return r`
      <svg id="chart"
           xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
           viewBox="0 0 1 1" style="background-color:transparent;">
        <g id="piechart">
          <circle cx="0.5" cy="0.5" r="0.5" />
          <circle cx="0.5" cy="0.5" r="0.40" fill="rgba(255,255,255,0.9)"/>
          <path id="pievalue" stroke="none" fill="rgba(255, 255, 255, 0.75)"/>
          <text id="chart-text" x="0.5" y="0.5" font-family="Roboto" text-anchor="middle"
                dy="0.1">
            <tspan>${this.prefix}</tspan>
            <tspan>${this.currentNumber}</tspan>
            <tspan id="unit-text" font-size="0.2" dy="-0.07">${this.unit}</tspan>
          </text>
        </g>
      </svg>
    `}};e([t({type:Number})],f.prototype,"currentNumber",void 0),e([t({type:Number})],f.prototype,"maxNumber",void 0),e([t({type:String})],f.prototype,"unit",void 0),e([t({type:String})],f.prototype,"url",void 0),e([t({type:String})],f.prototype,"textcolor",void 0),e([t({type:String})],f.prototype,"chartcolor",void 0),e([t({type:Number})],f.prototype,"size",void 0),e([t({type:Number})],f.prototype,"fontsize",void 0),e([t({type:String})],f.prototype,"chartFontSize",void 0),e([t({type:String})],f.prototype,"indicatorPath",void 0),e([t({type:String})],f.prototype,"prefix",void 0),e([t({type:String})],f.prototype,"sizeParam",void 0),f=e([i("lablup-piechart")],f);
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */
let _=class extends c{constructor(){super(),this.condition="running",this.sessions=0,this.agents=0,this.is_admin=!1,this.is_superadmin=!1,this.resources=Object(),this.authenticated=!1,this.manager_version="",this.webui_version="",this.cpu_total=0,this.cpu_used=0,this.cpu_percent="0",this.cpu_total_percent="0",this.cpu_total_usage_ratio=0,this.cpu_current_usage_ratio=0,this.mem_total="0",this.mem_used="0",this.mem_allocated="0",this.mem_total_usage_ratio=0,this.mem_current_usage_ratio=0,this.mem_current_usage_percent="0",this.cuda_gpu_total=0,this.cuda_gpu_used=0,this.cuda_fgpu_total=0,this.cuda_fgpu_used=0,this.rocm_gpu_total=0,this.rocm_gpu_used=0,this.tpu_total=0,this.tpu_used=0,this.spinner=Object(),this.notification=Object(),this.announcement="",this.height=0}static get styles(){return[p,a,o,u,l`
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

        div.card {
          margin: 20px;
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

        mwc-linear-progress {
          width: 260px;
          height: 15px;
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

        wl-icon {
          --icon-size: 24px;
        }

        mwc-icon-button.update-button {
          --mdc-icon-size: 16px;
          --mdc-icon-button-size: 24px;
          color: red;
        }

        mwc-icon.update-icon {
          --mdc-icon-size: 16px;
          --mdc-icon-button-size: 24px;
          color: black;
        }

        img.resource-type-icon {
          width: 16px;
          height: 16px;
          margin-right: 5px;
        }

        div.indicators {
          min-height: 80px;
          padding: 15px 20px 5px 20px;
          background-color: #F6F6F6;
        }

        .system-health-indicator {
          width: 90px;
        }

        .resource {
          margin-bottom: 10px;
          margin-left: 5px;
          height: 46px;
        }

        .resource-line {
          margin-left: 85px;
        }
      `]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification}_refreshHealthPanel(){this.activeConnected&&(this._refreshSessionInformation(),this.is_superadmin&&this._refreshAgentInformation())}_refreshSessionInformation(){if(!this.activeConnected)return;this.spinner.show();let e="RUNNING";switch(this.condition){case"running":e="RUNNING";break;case"finished":e="TERMINATED";break;case"archived":default:e="RUNNING"}globalThis.backendaiclient.computeSession.total_count(e).then((e=>{this.spinner.hide(),!e.compute_session_list&&e.legacy_compute_session_list&&(e.compute_session_list=e.legacy_compute_session_list),this.sessions=e.compute_session_list.total_count,this.active&&setTimeout((()=>{this._refreshSessionInformation()}),15e3)})).catch((e=>{this.spinner.hide(),this.sessions=0,this.notification.text=n("summary.connectingToCluster"),this.notification.detail=e,this.notification.show(!1,e),this.active&&setTimeout((()=>{this._refreshSessionInformation()}),15e3)}))}_refreshResourceInformation(){if(this.activeConnected)return globalThis.backendaiclient.resourcePolicy.get(globalThis.backendaiclient.resource_policy).then((e=>{const t=e.keypair_resource_policies;this.resourcePolicy=globalThis.backendaiclient.utils.gqlToObject(t,"name")}))}_refreshAgentInformation(e="running"){if(this.activeConnected){switch(this.condition){case"running":e="ALIVE";break;case"finished":e="TERMINATED";break;case"archived":default:e="ALIVE"}this.spinner.show(),globalThis.backendaiclient.resources.totalResourceInformation().then((t=>{this.spinner.hide(),this.resources=t,this._sync_resource_values(),1==this.active&&setTimeout((()=>{this._refreshAgentInformation(e)}),15e3)})).catch((e=>{this.spinner.hide(),e&&e.message&&(this.notification.text=h.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}}_init_resource_values(){this.resources.cpu={},this.resources.cpu.total=0,this.resources.cpu.used=0,this.resources.cpu.percent=0,this.resources.mem={},this.resources.mem.total=0,this.resources.mem.allocated=0,this.resources.mem.used=0,this.resources.cuda_gpu={},this.resources.cuda_gpu.total=0,this.resources.cuda_gpu.used=0,this.resources.cuda_fgpu={},this.resources.cuda_fgpu.total=0,this.resources.cuda_fgpu.used=0,this.resources.agents={},this.resources.agents.total=0,this.resources.agents.using=0,this.cpu_total_usage_ratio=0,this.cpu_current_usage_ratio=0,this.mem_total_usage_ratio=0,this.mem_current_usage_ratio=0,this.mem_current_usage_percent="0",this.is_admin=!1,this.is_superadmin=!1}_sync_resource_values(){this.manager_version=globalThis.backendaiclient.managerVersion,this.webui_version=globalThis.packageVersion,this.cpu_total=this.resources.cpu.total,this.mem_total=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(this.resources.mem.total,"g")).toFixed(2),isNaN(this.resources["cuda.device"].total)?this.cuda_gpu_total=0:this.cuda_gpu_total=this.resources["cuda.device"].total,isNaN(this.resources["cuda.shares"].total)?this.cuda_fgpu_total=0:this.cuda_fgpu_total=this.resources["cuda.shares"].total,this.cpu_used=this.resources.cpu.used,this.cuda_gpu_used=this.resources["cuda.device"].used,this.cuda_fgpu_used=this.resources["cuda.shares"].used,this.cpu_percent=parseFloat(this.resources.cpu.percent).toFixed(2),this.cpu_total_percent=0!==this.cpu_used?(this.cpu_used/this.cpu_total*100).toFixed(2):"0",this.cpu_total_usage_ratio=this.resources.cpu.used/this.resources.cpu.total*100,this.cpu_current_usage_ratio=this.resources.cpu.percent/this.resources.cpu.total,this.mem_used=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(this.resources.mem.used,"g")).toFixed(2),this.mem_allocated=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(this.resources.mem.allocated,"g")).toFixed(2),this.mem_total_usage_ratio=this.resources.mem.allocated/this.resources.mem.total*100,this.mem_current_usage_ratio=this.resources.mem.used/this.resources.mem.total*100,0===this.mem_total_usage_ratio?this.mem_current_usage_percent="0.0":this.mem_current_usage_percent=this.mem_total_usage_ratio.toFixed(2),this.agents=this.resources.agents.total,isNaN(parseFloat(this.mem_current_usage_percent))&&(this.mem_current_usage_percent="0")}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(this._init_resource_values(),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_superadmin=globalThis.backendaiclient.is_superadmin,this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this.activeConnected&&(this._refreshHealthPanel(),this.requestUpdate())}),!0):(this.is_superadmin=globalThis.backendaiclient.is_superadmin,this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this._refreshHealthPanel(),this.requestUpdate()))}_toInt(e){return Math.ceil(e)}_countObject(e){return Object.keys(e).length}_addComma(e){if(void 0===e)return"";return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}render(){return r`
      <link rel="stylesheet" href="resources/custom.css">
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <lablup-activity-panel title="${d("summary.SystemResources")}" elevation="1" narrow height="${this.height}">
        <div slot="message">
          <div class="horizontal justified layout wrap indicators">
            ${this.is_superadmin?r`
              <div class="vertical layout center system-health-indicator">
                <div class="big indicator">${this.agents}</div>
                <span>${m("summary.ConnectedNodes")}</span>
              </div>`:r``}
            <div class="vertical layout center system-health-indicator">
              <div class="big indicator">${this.sessions}</div>
              <span>${d("summary.ActiveSessions")}</span>
            </div>
          </div>
          <div class="vertical-card" style="align-items: flex-start">
            ${this.is_superadmin?r`
            <div class="layout horizontal center flex resource">
              <div class="layout vertical center center-justified resource-name">
                <div class="gauge-name">CPU</div>
              </div>
              <div class="layout vertical start-justified wrap">
                <lablup-progress-bar id="cpu-usage-bar" class="start"
                  progress="${this.cpu_total_usage_ratio/100}"
                  description="${this._addComma(this.cpu_used)}/${this._addComma(this.cpu_total)} ${d("summary.CoresReserved")}."
                ></lablup-progress-bar>
                <lablup-progress-bar id="cpu-usage-bar-2" class="end"
                  progress="${this.cpu_current_usage_ratio/100}"
                  description="${d("summary.Using")} ${this.cpu_total_percent} % (util. ${this.cpu_percent} %)"
                ></lablup-progress-bar>
              </div>
              <div class="layout vertical center center-justified">
                <span class="percentage start-bar">${parseInt(this.cpu_total_percent)+"%"}</span>
                <span class="percentage end-bar">${parseInt(this.cpu_percent)+"%"}</span>
              </div>
            </div>
            <div class="resource-line"></div>
            <div class="layout horizontal center flex resource">
              <div class="layout vertical center center-justified resource-name">
                <div class="gauge-name">RAM</div>
              </div>
              <div class="layout vertical start-justified wrap">
                <lablup-progress-bar id="mem-usage-bar" class="start"
                  progress="${this.mem_total_usage_ratio/100}"
                  description="${this._addComma(this.mem_allocated)} / ${this._addComma(this.mem_total)} GB ${d("summary.reserved")}."
                ></lablup-progress-bar>
                <lablup-progress-bar id="mem-usage-bar-2" class="end"
                  progress="${this.mem_current_usage_ratio/100}"
                  description="${d("summary.Using")} ${this._addComma(this.mem_used)} GB
                    (${0!==parseInt(this.mem_used)?(parseInt(this.mem_used)/parseInt(this.mem_total)*100).toFixed(0):"0"} %)"
                ></lablup-progress-bar>
              </div>
              <div class="layout vertical center center-justified">
                <span class="percentage start-bar">${this.mem_total_usage_ratio.toFixed(1)+"%"}</span>
                <span class="percentage end-bar">${(0!==parseInt(this.mem_used)?(parseInt(this.mem_used)/parseInt(this.mem_total)*100).toFixed(0):"0")+"%"}</span>
              </div>
            </div>
            ${this.cuda_gpu_total||this.cuda_fgpu_total||this.rocm_gpu_total||this.tpu_total?r`
            <div class="resource-line"></div>
            <div class="layout horizontal center flex resource">
              <div class="layout vertical center center-justified resource-name">
                <div class="gauge-name">GPU</div>
              </div>
              ${this.cuda_gpu_total?r`
              <div class="layout vertical start-justified wrap">
                <lablup-progress-bar id="gpu-usage-bar" class="start"
                  progress="${this.cuda_gpu_used/this.cuda_gpu_total}"
                  description="${0!==this.cuda_gpu_used?this.cuda_gpu_used.toFixed(1):0} / ${0!==this.cuda_gpu_total?this.cuda_gpu_total.toFixed(1):0} CUDA GPUs ${d("summary.reserved")}."
                ></lablup-progress-bar>
                <lablup-progress-bar id="gpu-usage-bar-2" class="end"
                  progress="0"
                  description="${d("summary.FractionalGPUScalingEnabled")}."
                ></lablup-progress-bar>
              </div>
              <div class="layout vertical center center-justified">
                <span class="percentage start-bar">${0!==this.cuda_gpu_used?(this.cuda_gpu_used/this.cuda_gpu_total*100).toFixed(1):0}%</span>
                <span class="percentage end-bar">&nbsp;</span>
              </div>
              `:r``}
              ${this.cuda_fgpu_total?r`
              <div class="layout vertical start-justified wrap">
              <lablup-progress-bar id="fgpu-usage-bar" class="start"
                progress="${this.cuda_fgpu_used/this.cuda_fgpu_total}"
                description="${0!==this.cuda_fgpu_used?this.cuda_fgpu_used.toFixed(1):0} / ${0!==this.cuda_fgpu_total?this.cuda_fgpu_total.toFixed(1):0} CUDA fGPUs ${d("summary.reserved")}."
              ></lablup-progress-bar>
              <lablup-progress-bar id="fgpu-usage-bar-2" class="end"
                progress="0"
                description="${d("summary.FractionalGPUScalingEnabled")}."
              ></lablup-progress-bar>

              </div>
              <div class="layout vertical center center-justified">
                <span class="percentage start-bar">${0!==this.cuda_fgpu_used?(this.cuda_fgpu_used/this.cuda_fgpu_total*100).toFixed(1):0}%</span>
                <span class="percentage end-bar">&nbsp;</span>
              </div>
              `:r``}
              ${this.rocm_gpu_total?r`
              <div class="layout vertical start-justified wrap">
                <lablup-progress-bar id="rocm-gpu-usage-bar" class="start"
                  progress="${this.rocm_gpu_used/100}"
                  description="${this.rocm_gpu_used} / ${this.rocm_gpu_total} ROCm GPUs ${d("summary.reserved")}."
                ></lablup-progress-bar>
                <lablup-progress-bar id="rocm-gpu-usage-bar-2" class="end"
                  progress="0"
                  description="${d("summary.ROCMGPUEnabled")}."
                ></lablup-progress-bar>
              </div>
              <div class="layout vertical center center-justified">
                <span class="percentage start-bar">${this.rocm_gpu_used.toFixed(1)+"%"}</span>
                <span class="percentage end-bar">&nbsp;</span>
              </div>`:r``}
              ${this.tpu_total?r`
              <div class="layout vertical start-justified wrap">
                <lablup-progress-bar id="tpu-usage-bar" class="start"
                  progress="${this.tpu_used/100}"
                  description="${this.tpu_used} / ${this.tpu_total} TPUs ${d("summary.reserved")}."
                ></lablup-progress-bar>
                <lablup-progress-bar id="tpu-usage-bar-2" class="end"
                  progress="0"
                  description="${d("summary.TPUEnabled")}."
                ></lablup-progress-bar>
              </div>
              <div class="layout vertical center center-justified">
                <span class="percentage start-bar">${this.tpu_used.toFixed(1)+"%"}</span>
                <span class="percentage end-bar"></span>
              </div>`:r``}
            </div>`:r``}
            <div class="vertical start layout" style="margin-top:30px;">
              <div class="horizontal layout resource-legend-stack">
                <div class="resource-legend-icon start"></div>
                <span class="resource-legend">${d("summary.Reserved")} ${d("resourcePolicy.Resources")}</span>
              </div>
              <div class="horizontal layout resource-legend-stack">
                <div class="resource-legend-icon end"></div>
                <span class="resource-legend">${d("summary.Used")} ${d("resourcePolicy.Resources")}</span>
              </div>
              <div class="horizontal layout">
                <div class="resource-legend-icon total"></div>
                <span class="resource-legend">${d("summary.Total")} ${d("resourcePolicy.Resources")}</span>
              </div>
            </div>`:r``}
          </div>
        </div>
      </lablup-activity-panel>
`}};e([t({type:String})],_.prototype,"condition",void 0),e([t({type:Number})],_.prototype,"sessions",void 0),e([t({type:Number})],_.prototype,"agents",void 0),e([t({type:Boolean})],_.prototype,"is_admin",void 0),e([t({type:Boolean})],_.prototype,"is_superadmin",void 0),e([t({type:Object})],_.prototype,"resources",void 0),e([t({type:Boolean})],_.prototype,"authenticated",void 0),e([t({type:String})],_.prototype,"manager_version",void 0),e([t({type:String})],_.prototype,"webui_version",void 0),e([t({type:Number})],_.prototype,"cpu_total",void 0),e([t({type:Number})],_.prototype,"cpu_used",void 0),e([t({type:String})],_.prototype,"cpu_percent",void 0),e([t({type:String})],_.prototype,"cpu_total_percent",void 0),e([t({type:Number})],_.prototype,"cpu_total_usage_ratio",void 0),e([t({type:Number})],_.prototype,"cpu_current_usage_ratio",void 0),e([t({type:String})],_.prototype,"mem_total",void 0),e([t({type:String})],_.prototype,"mem_used",void 0),e([t({type:String})],_.prototype,"mem_allocated",void 0),e([t({type:Number})],_.prototype,"mem_total_usage_ratio",void 0),e([t({type:Number})],_.prototype,"mem_current_usage_ratio",void 0),e([t({type:String})],_.prototype,"mem_current_usage_percent",void 0),e([t({type:Number})],_.prototype,"cuda_gpu_total",void 0),e([t({type:Number})],_.prototype,"cuda_gpu_used",void 0),e([t({type:Number})],_.prototype,"cuda_fgpu_total",void 0),e([t({type:Number})],_.prototype,"cuda_fgpu_used",void 0),e([t({type:Number})],_.prototype,"rocm_gpu_total",void 0),e([t({type:Number})],_.prototype,"rocm_gpu_used",void 0),e([t({type:Number})],_.prototype,"tpu_total",void 0),e([t({type:Number})],_.prototype,"tpu_used",void 0),e([t({type:Object})],_.prototype,"spinner",void 0),e([t({type:Object})],_.prototype,"notification",void 0),e([t({type:Object})],_.prototype,"resourcePolicy",void 0),e([t({type:String})],_.prototype,"announcement",void 0),e([t({type:Number})],_.prototype,"height",void 0),_=e([i("backend-ai-resource-panel")],_);var y={exports:{}};function x(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}y.exports={defaults:{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:x,changeDefaults:function(e){y.exports.defaults=e}};const k=/[&<>"']/,v=/[&<>"']/g,w=/[<>"']|&(?!#?\w+;)/,$=/[<>"']|&(?!#?\w+;)/g,z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},S=e=>z[e];const T=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function j(e){return e.replace(T,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const A=/(^|[^\[])\^/g;const R=/[^\w:]/g,I=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const N={},C=/^[^:]+:\/*[^/]*$/,U=/^([^:]+:)[\s\S]*$/,P=/^([^:]+:\/*[^/]*)[\s\S]*$/;function O(e,t){N[" "+e]||(C.test(e)?N[" "+e]=e+"/":N[" "+e]=E(e,"/",!0));const i=-1===(e=N[" "+e]).indexOf(":");return"//"===t.substring(0,2)?i?t:e.replace(U,"$1")+t:"/"===t.charAt(0)?i?t:e.replace(P,"$1")+t:e+t}function E(e,t,i){const s=e.length;if(0===s)return"";let r=0;for(;r<s;){const n=e.charAt(s-r-1);if(n!==t||i){if(n===t||!i)break;r++}else r++}return e.substr(0,s-r)}var L={escape:function(e,t){if(t){if(k.test(e))return e.replace(v,S)}else if(w.test(e))return e.replace($,S);return e},unescape:j,edit:function(e,t){e=e.source||e,t=t||"";const i={replace:(t,s)=>(s=(s=s.source||s).replace(A,"$1"),e=e.replace(t,s),i),getRegex:()=>new RegExp(e,t)};return i},cleanUrl:function(e,t,i){if(e){let e;try{e=decodeURIComponent(j(i)).replace(R,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!I.test(i)&&(i=O(t,i));try{i=encodeURI(i).replace(/%25/g,"%")}catch(e){return null}return i},resolveUrl:O,noopTest:{exec:function(){}},merge:function(e){let t,i,s=1;for(;s<arguments.length;s++)for(i in t=arguments[s],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},splitCells:function(e,t){const i=e.replace(/\|/g,((e,t,i)=>{let s=!1,r=t;for(;--r>=0&&"\\"===i[r];)s=!s;return s?"|":" |"})).split(/ \|/);let s=0;if(i[0].trim()||i.shift(),i[i.length-1].trim()||i.pop(),i.length>t)i.splice(t);else for(;i.length<t;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(/\\\|/g,"|");return i},rtrim:E,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const i=e.length;let s=0,r=0;for(;r<i;r++)if("\\"===e[r])r++;else if(e[r]===t[0])s++;else if(e[r]===t[1]&&(s--,s<0))return r;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},repeatString:function(e,t){if(t<1)return"";let i="";for(;t>1;)1&t&&(i+=e),t>>=1,e+=e;return i+e}};const{defaults:q}=y.exports,{rtrim:F,splitCells:B,escape:D,findClosingBracket:V}=L;function Z(e,t,i,s){const r=t.href,n=t.title?D(t.title):null,a=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){s.state.inLink=!0;const e={type:"link",raw:i,href:r,title:n,text:a,tokens:s.inlineTokens(a,[])};return s.state.inLink=!1,e}return{type:"image",raw:i,href:r,title:n,text:D(a)}}var M=class{constructor(e){this.options=e||q}space(e){const t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:F(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],i=function(e,t){const i=e.match(/^(\s+)(?:```)/);if(null===i)return t;const s=i[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[i]=t;return i.length>=s.length?e.slice(s.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=F(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}const i={type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(e,[]),text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i,s,r,n,a,o,l,c,p,u,h=t[1].trim();const d=h.length>1,g={type:"list",raw:"",ordered:d,start:d?+h.slice(0,-1):"",loose:!1,items:[]};h=d?`\\d{1,9}\\${h.slice(-1)}`:`\\${h}`,this.options.pedantic&&(h=d?h:"[*+-]");const m=new RegExp(`^( {0,3}${h})((?: [^\\n]*| *)(?:\\n[^\\n]*)*(?:\\n|$))`);for(;e&&!this.rules.block.hr.test(e)&&(t=m.exec(e));){p=t[2].split("\n"),this.options.pedantic?(n=2,u=p[0].trimLeft()):(n=t[2].search(/[^ ]/),n=t[1].length+(n>4?1:n),u=p[0].slice(n-t[1].length)),o=!1,i=t[0],!p[0]&&/^ *$/.test(p[1])&&(i=t[1]+p.slice(0,2).join("\n")+"\n",g.loose=!0,p=[]);const h=new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(a=1;a<p.length;a++){if(c=p[a],this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),h.test(c)){i=t[1]+p.slice(0,a).join("\n")+"\n";break}if(o){if(!(c.search(/[^ ]/)>=n)&&c.trim()){i=t[1]+p.slice(0,a).join("\n")+"\n";break}u+="\n"+c.slice(n)}else c.trim()||(o=!0),c.search(/[^ ]/)>=n?u+="\n"+c.slice(n):u+="\n"+c}g.loose||(l?g.loose=!0:/\n *\n *$/.test(i)&&(l=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(u),s&&(r="[ ] "!==s[0],u=u.replace(/^\[[ xX]\] +/,""))),g.items.push({type:"list_item",raw:i,task:!!s,checked:r,loose:!1,text:u}),g.raw+=i,e=e.slice(i.length)}g.items[g.items.length-1].raw=i.trimRight(),g.items[g.items.length-1].text=u.trimRight(),g.raw=g.raw.trimRight();const b=g.items.length;for(a=0;a<b;a++)this.lexer.state.top=!1,g.items[a].tokens=this.lexer.blockTokens(g.items[a].text,[]),g.items[a].tokens.some((e=>"space"===e.type))&&(g.loose=!0,g.items[a].loose=!0);return g}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};return this.options.sanitize&&(e.type="paragraph",e.text=this.options.sanitizer?this.options.sanitizer(t[0]):D(t[0]),e.tokens=[],this.lexer.inline(e.text,e.tokens)),e}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));return{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:B(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let i,s,r,n,a=e.align.length;for(i=0;i<a;i++)/^ *-+: *$/.test(e.align[i])?e.align[i]="right":/^ *:-+: *$/.test(e.align[i])?e.align[i]="center":/^ *:-+ *$/.test(e.align[i])?e.align[i]="left":e.align[i]=null;for(a=e.rows.length,i=0;i<a;i++)e.rows[i]=B(e.rows[i],e.header.length).map((e=>({text:e})));for(a=e.header.length,s=0;s<a;s++)e.header[s].tokens=[],this.lexer.inlineTokens(e.header[s].text,e.header[s].tokens);for(a=e.rows.length,s=0;s<a;s++)for(n=e.rows[s],r=0;r<n.length;r++)n[r].tokens=[],this.lexer.inlineTokens(n[r].text,n[r].tokens);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const e={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}text(e){const t=this.rules.block.text.exec(e);if(t){const e={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:D(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):D(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=F(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=V(t[2],"()");if(e>-1){const i=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,i).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);e&&(i=e[1],s=e[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(i=this.options.pedantic&&!/>$/.test(e)?i.slice(1):i.slice(1,-1)),Z(t,{href:i?i.replace(this.rules.inline._escapes,"$1"):i,title:s?s.replace(this.rules.inline._escapes,"$1"):s},t[0],this.lexer)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let e=(i[2]||i[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=i[0].charAt(0);return{type:"text",raw:e,text:e}}return Z(i,e,i[0],this.lexer)}}emStrong(e,t,i=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s)return;if(s[3]&&i.match(/[\p{L}\p{N}]/u))return;const r=s[1]||s[2]||"";if(!r||r&&(""===i||this.rules.inline.punctuation.exec(i))){const i=s[0].length-1;let r,n,a=i,o=0;const l="*"===s[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+i);null!=(s=l.exec(t));){if(r=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!r)continue;if(n=r.length,s[3]||s[4]){a+=n;continue}if((s[5]||s[6])&&i%3&&!((i+n)%3)){o+=n;continue}if(a-=n,a>0)continue;if(n=Math.min(n,n+a+o),Math.min(i,n)%2){const t=e.slice(1,i+s.index+n);return{type:"em",raw:e.slice(0,i+s.index+n+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}const t=e.slice(2,i+s.index+n-1);return{type:"strong",raw:e.slice(0,i+s.index+n+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const i=/[^ ]/.test(e),s=/^ /.test(e)&&/ $/.test(e);return i&&s&&(e=e.substring(1,e.length-1)),e=D(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const i=this.rules.inline.autolink.exec(e);if(i){let e,s;return"@"===i[2]?(e=D(this.options.mangle?t(i[1]):i[1]),s="mailto:"+e):(e=D(i[1]),s=e),{type:"link",raw:i[0],text:e,href:s,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let i;if(i=this.rules.inline.url.exec(e)){let e,s;if("@"===i[2])e=D(this.options.mangle?t(i[0]):i[0]),s="mailto:"+e;else{let t;do{t=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0]}while(t!==i[0]);e=D(i[0]),s="www."===i[1]?"http://"+e:e}return{type:"link",raw:i[0],text:e,href:s,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const i=this.rules.inline.text.exec(e);if(i){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):D(i[0]):i[0]:D(this.options.smartypants?t(i[0]):i[0]),{type:"text",raw:i[0],text:e}}}};const{noopTest:G,edit:Q,merge:H}=L,Y={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:G,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Y.def=Q(Y.def).replace("label",Y._label).replace("title",Y._title).getRegex(),Y.bullet=/(?:[*+-]|\d{1,9}[.)])/,Y.listItemStart=Q(/^( *)(bull) */).replace("bull",Y.bullet).getRegex(),Y.list=Q(Y.list).replace(/bull/g,Y.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Y.def.source+")").getRegex(),Y._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Y._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Y.html=Q(Y.html,"i").replace("comment",Y._comment).replace("tag",Y._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Y.paragraph=Q(Y._paragraph).replace("hr",Y.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Y._tag).getRegex(),Y.blockquote=Q(Y.blockquote).replace("paragraph",Y.paragraph).getRegex(),Y.normal=H({},Y),Y.gfm=H({},Y.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),Y.gfm.table=Q(Y.gfm.table).replace("hr",Y.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Y._tag).getRegex(),Y.pedantic=H({},Y.normal,{html:Q("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Y._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:G,paragraph:Q(Y.normal._paragraph).replace("hr",Y.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Y.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const K={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:G,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:G,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};K.punctuation=Q(K.punctuation).replace(/punctuation/g,K._punctuation).getRegex(),K.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,K.escapedEmSt=/\\\*|\\_/g,K._comment=Q(Y._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),K.emStrong.lDelim=Q(K.emStrong.lDelim).replace(/punct/g,K._punctuation).getRegex(),K.emStrong.rDelimAst=Q(K.emStrong.rDelimAst,"g").replace(/punct/g,K._punctuation).getRegex(),K.emStrong.rDelimUnd=Q(K.emStrong.rDelimUnd,"g").replace(/punct/g,K._punctuation).getRegex(),K._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,K._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,K._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,K.autolink=Q(K.autolink).replace("scheme",K._scheme).replace("email",K._email).getRegex(),K._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,K.tag=Q(K.tag).replace("comment",K._comment).replace("attribute",K._attribute).getRegex(),K._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,K._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,K._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,K.link=Q(K.link).replace("label",K._label).replace("href",K._href).replace("title",K._title).getRegex(),K.reflink=Q(K.reflink).replace("label",K._label).getRegex(),K.reflinkSearch=Q(K.reflinkSearch,"g").replace("reflink",K.reflink).replace("nolink",K.nolink).getRegex(),K.normal=H({},K),K.pedantic=H({},K.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Q(/^!?\[(label)\]\((.*?)\)/).replace("label",K._label).getRegex(),reflink:Q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",K._label).getRegex()}),K.gfm=H({},K.normal,{escape:Q(K.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),K.gfm.url=Q(K.gfm.url,"i").replace("email",K.gfm._extended_email).getRegex(),K.breaks=H({},K.gfm,{br:Q(K.br).replace("{2,}","*").getRegex(),text:Q(K.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var W={block:Y,inline:K};const X=M,{defaults:J}=y.exports,{block:ee,inline:te}=W,{repeatString:ie}=L;function se(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function re(e){let t,i,s="";const r=e.length;for(t=0;t<r;t++)i=e.charCodeAt(t),Math.random()>.5&&(i="x"+i.toString(16)),s+="&#"+i+";";return s}const{defaults:ne}=y.exports,{cleanUrl:ae,escape:oe}=L;var le=class{constructor(e){this.options=e||ne}code(e,t,i){const s=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,s);null!=t&&t!==e&&(i=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",s?'<pre><code class="'+this.options.langPrefix+oe(s,!0)+'">'+(i?e:oe(e,!0))+"</code></pre>\n":"<pre><code>"+(i?e:oe(e,!0))+"</code></pre>\n"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,i,s){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+s.slug(i)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,i){const s=t?"ol":"ul";return"<"+s+(t&&1!==i?' start="'+i+'"':"")+">\n"+e+"</"+s+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const i=t.header?"th":"td";return(t.align?"<"+i+' align="'+t.align+'">':"<"+i+">")+e+"</"+i+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,i){if(null===(e=ae(this.options.sanitize,this.options.baseUrl,e)))return i;let s='<a href="'+oe(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+i+"</a>",s}image(e,t,i){if(null===(e=ae(this.options.sanitize,this.options.baseUrl,e)))return i;let s='<img src="'+e+'" alt="'+i+'"';return t&&(s+=' title="'+t+'"'),s+=this.options.xhtml?"/>":">",s}text(e){return e}},ce=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,i){return""+i}image(e,t,i){return""+i}br(){return""}},pe=class{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let i=e,s=0;if(this.seen.hasOwnProperty(i)){s=this.seen[e];do{s++,i=e+"-"+s}while(this.seen.hasOwnProperty(i))}return t||(this.seen[e]=s,this.seen[i]=0),i}slug(e,t={}){const i=this.serialize(e);return this.getNextSafeSlug(i,t.dryrun)}};const ue=le,he=ce,de=pe,{defaults:ge}=y.exports,{unescape:me}=L;const be=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||J,this.options.tokenizer=this.options.tokenizer||new X,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:ee.normal,inline:te.normal};this.options.pedantic?(t.block=ee.pedantic,t.inline=te.pedantic):this.options.gfm&&(t.block=ee.gfm,this.options.breaks?t.inline=te.breaks:t.inline=te.gfm),this.tokenizer.rules=t}static get rules(){return{block:ee,inline:te}}static lex(t,i){return new e(i).lex(t)}static lexInline(t,i){return new e(i).inlineTokens(t)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let i,s,r,n;for(this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((s=>!!(i=s.call({lexer:this},e,t))&&(e=e.substring(i.raw.length),t.push(i),!0)))))if(i=this.tokenizer.space(e))e=e.substring(i.raw.length),i.type&&t.push(i);else if(i=this.tokenizer.code(e))e=e.substring(i.raw.length),s=t[t.length-1],!s||"paragraph"!==s.type&&"text"!==s.type?t.push(i):(s.raw+="\n"+i.raw,s.text+="\n"+i.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text);else if(i=this.tokenizer.fences(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.heading(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.hr(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.blockquote(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.list(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.html(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.def(e))e=e.substring(i.raw.length),s=t[t.length-1],!s||"paragraph"!==s.type&&"text"!==s.type?this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title}):(s.raw+="\n"+i.raw,s.text+="\n"+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text);else if(i=this.tokenizer.table(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.lheading(e))e=e.substring(i.raw.length),t.push(i);else{if(r=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const i=e.slice(1);let s;this.options.extensions.startBlock.forEach((function(e){s=e.call({lexer:this},i),"number"==typeof s&&s>=0&&(t=Math.min(t,s))})),t<1/0&&t>=0&&(r=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(r)))s=t[t.length-1],n&&"paragraph"===s.type?(s.raw+="\n"+i.raw,s.text+="\n"+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(i),n=r.length!==e.length,e=e.substring(i.raw.length);else if(i=this.tokenizer.text(e))e=e.substring(i.raw.length),s=t[t.length-1],s&&"text"===s.type?(s.raw+="\n"+i.raw,s.text+="\n"+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(i);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let i,s,r,n,a,o,l=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(n=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,n.index)+"["+ie("a",n[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(n=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,n.index)+"["+ie("a",n[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(n=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,n.index)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(a||(o=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((s=>!!(i=s.call({lexer:this},e,t))&&(e=e.substring(i.raw.length),t.push(i),!0)))))if(i=this.tokenizer.escape(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.tag(e))e=e.substring(i.raw.length),s=t[t.length-1],s&&"text"===i.type&&"text"===s.type?(s.raw+=i.raw,s.text+=i.text):t.push(i);else if(i=this.tokenizer.link(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(i.raw.length),s=t[t.length-1],s&&"text"===i.type&&"text"===s.type?(s.raw+=i.raw,s.text+=i.text):t.push(i);else if(i=this.tokenizer.emStrong(e,l,o))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.codespan(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.br(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.del(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.autolink(e,re))e=e.substring(i.raw.length),t.push(i);else if(this.state.inLink||!(i=this.tokenizer.url(e,re))){if(r=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const i=e.slice(1);let s;this.options.extensions.startInline.forEach((function(e){s=e.call({lexer:this},i),"number"==typeof s&&s>=0&&(t=Math.min(t,s))})),t<1/0&&t>=0&&(r=e.substring(0,t+1))}if(i=this.tokenizer.inlineText(r,se))e=e.substring(i.raw.length),"_"!==i.raw.slice(-1)&&(o=i.raw.slice(-1)),a=!0,s=t[t.length-1],s&&"text"===s.type?(s.raw+=i.raw,s.text+=i.text):t.push(i);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(i.raw.length),t.push(i);return t}},fe=class e{constructor(e){this.options=e||ge,this.options.renderer=this.options.renderer||new ue,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new he,this.slugger=new de}static parse(t,i){return new e(i).parse(t)}static parseInline(t,i){return new e(i).parseInline(t)}parse(e,t=!0){let i,s,r,n,a,o,l,c,p,u,h,d,g,m,b,f,_,y,x,k="";const v=e.length;for(i=0;i<v;i++)if(u=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(x=this.options.extensions.renderers[u.type].call({parser:this},u),!1!==x||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)))k+=x||"";else switch(u.type){case"space":continue;case"hr":k+=this.renderer.hr();continue;case"heading":k+=this.renderer.heading(this.parseInline(u.tokens),u.depth,me(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":k+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(c="",l="",n=u.header.length,s=0;s<n;s++)l+=this.renderer.tablecell(this.parseInline(u.header[s].tokens),{header:!0,align:u.align[s]});for(c+=this.renderer.tablerow(l),p="",n=u.rows.length,s=0;s<n;s++){for(o=u.rows[s],l="",a=o.length,r=0;r<a;r++)l+=this.renderer.tablecell(this.parseInline(o[r].tokens),{header:!1,align:u.align[r]});p+=this.renderer.tablerow(l)}k+=this.renderer.table(c,p);continue;case"blockquote":p=this.parse(u.tokens),k+=this.renderer.blockquote(p);continue;case"list":for(h=u.ordered,d=u.start,g=u.loose,n=u.items.length,p="",s=0;s<n;s++)b=u.items[s],f=b.checked,_=b.task,m="",b.task&&(y=this.renderer.checkbox(f),g?b.tokens.length>0&&"paragraph"===b.tokens[0].type?(b.tokens[0].text=y+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&"text"===b.tokens[0].tokens[0].type&&(b.tokens[0].tokens[0].text=y+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:y}):m+=y),m+=this.parse(b.tokens,g),p+=this.renderer.listitem(m,_,f);k+=this.renderer.list(p,h,d);continue;case"html":k+=this.renderer.html(u.text);continue;case"paragraph":k+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(p=u.tokens?this.parseInline(u.tokens):u.text;i+1<v&&"text"===e[i+1].type;)u=e[++i],p+="\n"+(u.tokens?this.parseInline(u.tokens):u.text);k+=t?this.renderer.paragraph(p):p;continue;default:{const e='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return k}parseInline(e,t){t=t||this.renderer;let i,s,r,n="";const a=e.length;for(i=0;i<a;i++)if(s=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(r=this.options.extensions.renderers[s.type].call({parser:this},s),!1!==r||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)))n+=r||"";else switch(s.type){case"escape":n+=t.text(s.text);break;case"html":n+=t.html(s.text);break;case"link":n+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break;case"image":n+=t.image(s.href,s.title,s.text);break;case"strong":n+=t.strong(this.parseInline(s.tokens,t));break;case"em":n+=t.em(this.parseInline(s.tokens,t));break;case"codespan":n+=t.codespan(s.text);break;case"br":n+=t.br();break;case"del":n+=t.del(this.parseInline(s.tokens,t));break;case"text":n+=t.text(s.text);break;default:{const e='Token with "'+s.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return n}},_e=M,ye=le,xe=ce,ke=pe,{merge:ve,checkSanitizeDeprecation:we,escape:$e}=L,{getDefaults:ze,changeDefaults:Se,defaults:Te}=y.exports;function je(e,t,i){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(i=t,t=null),t=ve({},je.defaults,t||{}),we(t),i){const s=t.highlight;let r;try{r=be.lex(e,t)}catch(e){return i(e)}const n=function(e){let n;if(!e)try{t.walkTokens&&je.walkTokens(r,t.walkTokens),n=fe.parse(r,t)}catch(t){e=t}return t.highlight=s,e?i(e):i(null,n)};if(!s||s.length<3)return n();if(delete t.highlight,!r.length)return n();let a=0;return je.walkTokens(r,(function(e){"code"===e.type&&(a++,setTimeout((()=>{s(e.text,e.lang,(function(t,i){if(t)return n(t);null!=i&&i!==e.text&&(e.text=i,e.escaped=!0),a--,0===a&&n()}))}),0))})),void(0===a&&n())}try{const i=be.lex(e,t);return t.walkTokens&&je.walkTokens(i,t.walkTokens),fe.parse(i,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+$e(e.message+"",!0)+"</pre>";throw e}}je.options=je.setOptions=function(e){return ve(je.defaults,e),Se(je.defaults),je},je.getDefaults=ze,je.defaults=Te,je.use=function(...e){const t=ve({},...e),i=je.defaults.extensions||{renderers:{},childTokens:{}};let s;e.forEach((e=>{if(e.extensions&&(s=!0,e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const t=i.renderers?i.renderers[e.name]:null;i.renderers[e.name]=t?function(...i){let s=e.renderer.apply(this,i);return!1===s&&(s=t.apply(this,i)),s}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");i[e.level]?i[e.level].unshift(e.tokenizer):i[e.level]=[e.tokenizer],e.start&&("block"===e.level?i.startBlock?i.startBlock.push(e.start):i.startBlock=[e.start]:"inline"===e.level&&(i.startInline?i.startInline.push(e.start):i.startInline=[e.start]))}e.childTokens&&(i.childTokens[e.name]=e.childTokens)}))),e.renderer){const i=je.defaults.renderer||new ye;for(const t in e.renderer){const s=i[t];i[t]=(...r)=>{let n=e.renderer[t].apply(i,r);return!1===n&&(n=s.apply(i,r)),n}}t.renderer=i}if(e.tokenizer){const i=je.defaults.tokenizer||new _e;for(const t in e.tokenizer){const s=i[t];i[t]=(...r)=>{let n=e.tokenizer[t].apply(i,r);return!1===n&&(n=s.apply(i,r)),n}}t.tokenizer=i}if(e.walkTokens){const i=je.defaults.walkTokens;t.walkTokens=t=>{e.walkTokens.call(this,t),i&&i(t)}}s&&(t.extensions=i),je.setOptions(t)}))},je.walkTokens=function(e,t){for(const i of e)switch(t(i),i.type){case"table":for(const e of i.header)je.walkTokens(e.tokens,t);for(const e of i.rows)for(const i of e)je.walkTokens(i.tokens,t);break;case"list":je.walkTokens(i.items,t);break;default:je.defaults.extensions&&je.defaults.extensions.childTokens&&je.defaults.extensions.childTokens[i.type]?je.defaults.extensions.childTokens[i.type].forEach((function(e){je.walkTokens(i[e],t)})):i.tokens&&je.walkTokens(i.tokens,t)}},je.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=ve({},je.defaults,t||{}),we(t);try{const i=be.lexInline(e,t);return t.walkTokens&&je.walkTokens(i,t.walkTokens),fe.parseInline(i,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+$e(e.message+"",!0)+"</pre>";throw e}},je.Parser=fe,je.parser=fe.parse,je.Renderer=ye,je.TextRenderer=xe,je.Lexer=be,je.lexer=be.lex,je.Tokenizer=_e,je.Slugger=ke,je.parse=je;var Ae=je;
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let Re=class extends c{constructor(){super(),this.condition="running",this.sessions=0,this.jobs=Object(),this.agents=0,this.is_admin=!1,this.is_superadmin=!1,this.resources=Object(),this.update_checker=Object(),this.authenticated=!1,this.manager_version="",this.webui_version="",this.cpu_total=0,this.cpu_used=0,this.cpu_percent="0",this.cpu_total_percent="0",this.cpu_total_usage_ratio=0,this.cpu_current_usage_ratio=0,this.mem_total="0",this.mem_used="0",this.mem_allocated="0",this.mem_total_usage_ratio=0,this.mem_current_usage_ratio=0,this.mem_current_usage_percent="0",this.cuda_gpu_total=0,this.cuda_gpu_used=0,this.cuda_fgpu_total=0,this.cuda_fgpu_used=0,this.rocm_gpu_total=0,this.rocm_gpu_used=0,this.tpu_total=0,this.tpu_used=0,this.spinner=Object(),this.notification=Object(),this.announcement="",this.invitations=Object(),this.invitations=[]}static get styles(){return[p,a,o,u,l`
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

        mwc-button, mwc-button[unelevated], mwc-button[outlined] {
          background-image: none;
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-on-theme-primary: var(--general-button-background-color);
          --mdc-typography-font-family: var(--general-font-family);
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

        .notice-ticker {
          margin-left: 15px;
          margin-top: 10px;
          font-size: 13px;
          font-weight: 400;
          height: 35px;
          overflow-y: scroll;
        }

        .notice-ticker lablup-shields {
          margin-right: 15px;
        }

        #session-launcher {
          --component-width: 284px;
        }

        .start-menu-items {
          margin-top: 20px;
          width: 100px;
        }

        .start-menu-items span {
          padding-left: 10px;
          padding-right: 10px;
          text-align: center;
        }

        wl-icon {
          --icon-size: 24px;
        }

        .invitation_folder_name {
          font-size: 13px;
        }

        mwc-icon-button.update-button {
          --mdc-icon-size: 16px;
          --mdc-icon-button-size: 24px;
          color: red;
        }

        a > i {
          color: #5b5b5b;
          margin: 10px;
        }

        a > span {
          max-width: 70px;
          color: #838383;
        }

        mwc-icon.update-icon {
          --mdc-icon-size: 16px;
          --mdc-icon-button-size: 24px;
          color: black;
        }

        img.resource-type-icon {
          width: 16px;
          height: 16px;
          margin-right: 5px;
        }

        .system-health-indicator {
          width: 90px;
        }

        .upper-lower-space {
          padding-top: 20px;
          padding-bottom: 10px;
        }

        i.larger {
          font-size: 1.2rem;
        }

        .left-end-icon {
          margin-left: 11px;
          margin-right: 12px;
        }

        .right-end-icon {
          margin-left: 12px;
          margin-right: 11px;
        }

        lablup-activity-panel.inner-panel:hover {
          --card-background-color: var(--general-sidepanel-color);
        }

        @media screen and (max-width: 850px) {
          .notice-ticker {
            margin-left: 0px;
          }

          .notice-ticker > span {
            max-width: 250px;
            line-height: 1em;
          }
        }

        @media screen and (max-width: 750px) {
          lablup-activity-panel.footer-menu > div > a > div > span {
            text-align: left;
            width: 250px;
          }
        }
      `]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification,this.update_checker=this.shadowRoot.querySelector("#update-checker"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._readAnnouncement()}),!0):this._readAnnouncement()}_refreshConsoleUpdateInformation(){this.is_superadmin&&globalThis.backendaioptions.get("automatic_update_check",!0)&&this.update_checker.checkRelease()}async _viewStateChanged(e){await this.updateComplete,!1!==e?(this.shadowRoot.querySelector("#resource-monitor").setAttribute("active","true"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_superadmin=globalThis.backendaiclient.is_superadmin,this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this.manager_version=globalThis.backendaiclient.managerVersion,this.webui_version=globalThis.packageVersion,this.activeConnected&&this._refreshConsoleUpdateInformation(),this._refreshInvitations()}),!0):(this.is_superadmin=globalThis.backendaiclient.is_superadmin,this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this.manager_version=globalThis.backendaiclient.managerVersion,this.webui_version=globalThis.packageVersion,this._refreshConsoleUpdateInformation(),this._refreshInvitations())):this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active")}_readAnnouncement(){this.activeConnected&&globalThis.backendaiclient.service.get_announcement().then((e=>{"message"in e&&(this.announcement=Ae(e.message))})).catch((e=>{}))}_toInt(e){return Math.ceil(e)}_countObject(e){return Object.keys(e).length}_addComma(e){if(void 0===e)return"";return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}_refreshInvitations(e=!1){this.activeConnected&&globalThis.backendaiclient.vfolder.invitations().then((t=>{this.invitations=t.invitations,this.active&&!e&&setTimeout((()=>{this._refreshInvitations()}),6e4)}))}async _acceptInvitation(e,t){if(!this.activeConnected)return;const i=e.target.closest("lablup-activity-panel");try{i.setAttribute("disabled","true"),i.querySelectorAll("wl-button").forEach((e=>{e.setAttribute("disabled","true")})),await globalThis.backendaiclient.vfolder.accept_invitation(t.id),this.notification.text=n("summary.AcceptSharedVFolder")+`${t.vfolder_name}`,this.notification.show(),this._refreshInvitations()}catch(e){i.setAttribute("disabled","false"),i.querySelectorAll("wl-button").forEach((e=>{e.setAttribute("disabled","false")})),this.notification.text=h.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)}}async _deleteInvitation(e,t){if(!this.activeConnected)return;const i=e.target.closest("lablup-activity-panel");try{i.setAttribute("disabled","true"),i.querySelectorAll("wl-button").forEach((e=>{e.setAttribute("disabled","true")})),await globalThis.backendaiclient.vfolder.delete_invitation(t.id),this.notification.text=n("summary.DeclineSharedVFolder")+`${t.vfolder_name}`,this.notification.show(),this._refreshInvitations()}catch(e){i.setAttribute("disabled","false"),i.querySelectorAll("wl-button").forEach((e=>{e.setAttribute("disabled","false")})),this.notification.text=h.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)}}_stripHTMLTags(e){return e.replace(/(<([^>]+)>)/gi,"")}render(){return r`
      <link rel="stylesheet" href="/resources/fonts/font-awesome-all.min.css">
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <div class="item" elevation="1" style="padding-bottom:20px;">
        ${""!=this.announcement?r`
          <div class="notice-ticker horizontal center layout wrap flex">
            <lablup-shields app="" color="red" description="Notice" ui="round"></lablup-shields>
            <span>${this._stripHTMLTags(this.announcement)}</span>
          </div>
        `:r``}
        <div class="horizontal wrap layout">
          <lablup-activity-panel title="${d("summary.StartMenu")}" elevation="1" height="500">
            <div slot="message">
              <img src="/resources/images/launcher-background.png" style="width:300px;margin-bottom:30px;"/>
              <div class="horizontal center-justified layout wrap">
                <backend-ai-session-launcher location="summary" id="session-launcher" ?active="${!0===this.active}"></backend-ai-session-launcher>
              </div>
              <div class="horizontal center-justified layout wrap">
                <a href="/data" class="vertical center center-justified layout start-menu-items">
                  <i class="fas fa-upload fa-2x"></i>
                  <span>${d("summary.UploadFiles")}</span>
                </a>
                ${this.is_admin?r`
                  <a href="/credential" class="vertical center center-justified layout start-menu-items" style="border-left:1px solid #ccc;">
                    <i class="fas fa-key fa-2x"></i>
                    <span>${d("summary.CreateANewKeypair")}</span>
                  </a>
                  <a href="/credential" class="vertical center center-justified layout start-menu-items" style="border-left:1px solid #ccc;">
                    <i class="fas fa-cogs fa-2x"></i>
                    <span>${d("summary.MaintainKeypairs")}</span>
                  </a>
                `:r``}
              </div>
            </div>
          </lablup-activity-panel>
          <lablup-activity-panel title="${d("summary.ResourceStatistics")}" elevation="1" narrow height="500">
            <div slot="message">
                <backend-ai-resource-monitor location="summary" id="resource-monitor" ?active="${!0===this.active}" direction="vertical"></backend-ai-resource-monitor>
            </div>
          </lablup-activity-panel>
          <backend-ai-resource-panel ?active="${!0===this.active}" height="500"></backend-ai-resource-panel>
          <div class="horizontal wrap layout">
            <lablup-activity-panel title="${d("summary.Announcement")}" elevation="1" horizontalsize="2x" height="220">
                <div slot="message">
                  ${""!==this.announcement?g(this.announcement):d("summary.NoAnnouncement")}
                </div>
              </lablup-activity-panel>
              <lablup-activity-panel title="${d("summary.Invitation")}" elevation="1" height="220" scrollableY>
                  <div slot="message">
                    ${this.invitations.length>0?this.invitations.map(((e,t)=>r`
                      <lablup-activity-panel class="inner-panel" noheader autowidth elevation="0" height="130">
                        <div slot="message">
                          <div class="wrap layout">
                          <h3 style="padding-top:10px;">From ${e.inviter}</h3>
                          <span class="invitation_folder_name">${d("summary.FolderName")}: ${e.vfolder_name}</span>
                          <div class="horizontal center layout">
                            ${d("summary.Permission")}:
                            ${[...e.perm].map((e=>r`
                                <lablup-shields app="" color="${["green","blue","red"][["r","w","d"].indexOf(e)]}"
                                        description="${e.toUpperCase()}" ui="flat"></lablup-shields>`))}
                          </div>
                          <div style="margin:15px auto;" class="horizontal layout end-justified">
                            <mwc-button
                                outlined
                                label="${d("summary.Decline")}"
                                @click="${t=>this._deleteInvitation(t,e)}"></mwc-button>
                            <mwc-button
                                unelevated
                                label="${d("summary.Accept")}"
                                @click="${t=>this._acceptInvitation(t,e)}"></mwc-button>
                            <span class="flex"></span>
                          </div>
                        </div>
                      </lablup-activity-panel>`)):r`
                      <p>${n("summary.NoInvitations")}</p>`}
                  </div>
                </div>
              </lablup-activity-panel>
            </div>
          </div>
          <div class="vertical layout">
            ${this.is_admin?r`
              <div class="horizontal layout wrap">
                <div class="vertical layout">
                  <div class="line"></div>
                  <div class="horizontal layout flex wrap center-justified">
                    <lablup-activity-panel class="footer-menu" noheader autowidth style="display: none;">
                      <div slot="message" class="vertical layout center start-justified flex upper-lower-space">
                        <h3 style="margin-top:0px;">${d("summary.CurrentVersion")}</h3>
                        ${this.is_superadmin?r`
                          <div class="layout vertical center center-justified flex" style="margin-bottom:5px;">
                            <lablup-shields app="Manager version" color="darkgreen" description="${this.manager_version}" ui="flat"></lablup-shields>
                            <div class="layout horizontal center flex" style="margin-top:4px;">
                              <lablup-shields app="Console version" color="${this.update_checker.updateNeeded?"red":"darkgreen"}" description="${this.webui_version}" ui="flat"></lablup-shields>
                              ${this.update_checker.updateNeeded?r`
                                <mwc-icon-button class="update-button" icon="new_releases"
                                  @click="${()=>{window.open(this.update_checker.updateURL,"_blank")}}"></mwc-icon-button>`:r`
                                    <mwc-icon class="update-icon">done</mwc-icon>
                                  `}
                            </div>
                          </div>
                        `:r``}
                      </div>
                    </lablup-activity-panel>
                    <lablup-activity-panel class="footer-menu" noheader autowidth>
                      <div slot="message" class="layout horizontal center center-justified flex upper-lower-space">
                          <a href="/environment">
                            <div class="layout horizontal center center-justified flex"  style="font-size:14px;">
                              <i class="fas fa-sync-alt larger left-end-icon"></i>
                              <span>${d("summary.UpdateEnvironmentImages")}</span>
                              <i class="fas fa-chevron-right right-end-icon"></i>
                            </div>
                          </a>
                      </div>
                    </lablup-activity-panel>
                    ${this.is_superadmin?r`
                    <lablup-activity-panel class="footer-menu" noheader autowidth>
                    <div slot="message" class="layout horizontal center center-justified flex upper-lower-space">
                      <a href="/agent">
                        <div class="layout horizontal center center-justified flex" style="font-size:14px;">
                          <i class="fas fa-box larger left-end-icon"></i>
                          <span>${d("summary.CheckResources")}</span>
                          <i class="fas fa-chevron-right right-end-icon"></i>
                        </div>
                      </a>
                    </div>
                  </lablup-activity-panel>
                  <lablup-activity-panel class="footer-menu" noheader autowidth>
                    <div slot="message" class="layout horizontal center center-justified flex upper-lower-space">
                        <a href="/settings">
                          <div class="layout horizontal center center-justified flex"  style="font-size:14px;">
                            <i class="fas fa-desktop larger left-end-icon"></i>
                            <span>${d("summary.ChangeSystemSetting")}</span>
                            <i class="fas fa-chevron-right right-end-icon"></i>
                          </div>
                        </a>
                    </div>
                  </lablup-activity-panel>`:r``}

                    <lablup-activity-panel class="footer-menu" noheader autowidth>
                      <div slot="message" class="layout horizontal center center-justified flex upper-lower-space">
                          <a href="/maintenance">
                            <div class="layout horizontal center center-justified flex"  style="font-size:14px;">
                              <i class="fas fa-tools larger left-end-icon"></i>
                              <span>${d("summary.SystemMaintenance")}</span>
                              <i class="fas fa-chevron-right right-end-icon"></i>
                            </div>
                          </a>
                      </div>
                    </lablup-activity-panel>
                  </div>
                </div>
              </div>
          </div>`:r``}
        </div>
      </div>
    <backend-ai-release-check id="update-checker"></backend-ai-release-check>
  `}};e([t({type:String})],Re.prototype,"condition",void 0),e([t({type:Number})],Re.prototype,"sessions",void 0),e([t({type:Object})],Re.prototype,"jobs",void 0),e([t({type:Number})],Re.prototype,"agents",void 0),e([t({type:Boolean})],Re.prototype,"is_admin",void 0),e([t({type:Boolean})],Re.prototype,"is_superadmin",void 0),e([t({type:Object})],Re.prototype,"resources",void 0),e([t({type:Object})],Re.prototype,"update_checker",void 0),e([t({type:Boolean})],Re.prototype,"authenticated",void 0),e([t({type:String})],Re.prototype,"manager_version",void 0),e([t({type:String})],Re.prototype,"webui_version",void 0),e([t({type:Number})],Re.prototype,"cpu_total",void 0),e([t({type:Number})],Re.prototype,"cpu_used",void 0),e([t({type:String})],Re.prototype,"cpu_percent",void 0),e([t({type:String})],Re.prototype,"cpu_total_percent",void 0),e([t({type:Number})],Re.prototype,"cpu_total_usage_ratio",void 0),e([t({type:Number})],Re.prototype,"cpu_current_usage_ratio",void 0),e([t({type:String})],Re.prototype,"mem_total",void 0),e([t({type:String})],Re.prototype,"mem_used",void 0),e([t({type:String})],Re.prototype,"mem_allocated",void 0),e([t({type:Number})],Re.prototype,"mem_total_usage_ratio",void 0),e([t({type:Number})],Re.prototype,"mem_current_usage_ratio",void 0),e([t({type:String})],Re.prototype,"mem_current_usage_percent",void 0),e([t({type:Number})],Re.prototype,"cuda_gpu_total",void 0),e([t({type:Number})],Re.prototype,"cuda_gpu_used",void 0),e([t({type:Number})],Re.prototype,"cuda_fgpu_total",void 0),e([t({type:Number})],Re.prototype,"cuda_fgpu_used",void 0),e([t({type:Number})],Re.prototype,"rocm_gpu_total",void 0),e([t({type:Number})],Re.prototype,"rocm_gpu_used",void 0),e([t({type:Number})],Re.prototype,"tpu_total",void 0),e([t({type:Number})],Re.prototype,"tpu_used",void 0),e([t({type:Object})],Re.prototype,"spinner",void 0),e([t({type:Object})],Re.prototype,"notification",void 0),e([t({type:Object})],Re.prototype,"resourcePolicy",void 0),e([t({type:String})],Re.prototype,"announcement",void 0),e([t({type:Object})],Re.prototype,"invitations",void 0),Re=e([i("backend-ai-summary-view")],Re);var Ie=Re;export{Ie as default};
