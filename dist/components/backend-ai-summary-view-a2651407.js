import{_ as e,p as t,c as i,L as s,h as r,g as n,I as a,a as o,b as l,B as c,d as p,e as u,f as h,t as d}from"./backend-ai-console-bf343de1.js";import{u as g}from"./unsafe-html-4880aecc.js";import"./lablup-progress-bar-079f88df.js";import"./lablup-activity-panel-ffd4d5dd.js";import"./backend-ai-session-launcher-0b6c49f9.js";import{t as m}from"./translate-unsafe-html-b68d19e3.js";import"./mwc-switch-cafd197d.js";import"./input-behavior-023cba33.js";import"./expansion-74e96040.js";import"./radio-behavior-e101265b.js";import"./mwc-slider-90480cbf.js";import"./textfield-67e7f371.js";
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let b=class extends s{constructor(){super(),this.releaseURL="https://raw.githubusercontent.com/lablup/backend.ai-console/release/version.json",this.localVersion="",this.localBuild="",this.remoteVersion="",this.remoteBuild="",this.remoteRevision="",this.updateChecked=!1,this.updateNeeded=!1,this.updateURL=""}static get styles(){return[]}render(){return r`
    `}firstUpdated(){this.notification=globalThis.lablupNotification,globalThis.isElectron&&void 0!==globalThis.backendaioptions&&globalThis.backendaioptions.get("automatic_update_check",!0)&&this.checkRelease()}async checkRelease(){this.updateChecked||fetch(this.releaseURL).then((e=>e.json())).then((e=>{this.updateChecked=!0,this.remoteVersion=e.package,this.remoteBuild=e.build,this.remoteRevision=e.revision,this.compareVersion(globalThis.packageVersion,this.remoteVersion)<0&&(this.updateNeeded=!0,this.updateURL="https://github.com/lablup/backend.ai-console/releases/tag/v"+this.remoteVersion,globalThis.isElectron&&(this.notification.text=n("update.NewConsoleVersionAvailable")+" "+this.remoteVersion,this.notification.detail=n("update.NewConsoleVersionAvailable"),this.notification.url=this.updateURL,this.notification.show()))})).catch((e=>{let t=globalThis.backendaioptions.get("automatic_update_count_trial",0);t>3&&globalThis.backendaioptions.set("automatic_update_check",!1),globalThis.backendaioptions.set("automatic_update_count_trial",t+1)}))}compareVersion(e,t){if("string"!=typeof e)return!1;if("string"!=typeof t)return!1;e=e.split("."),t=t.split(".");const i=Math.min(e.length,t.length);for(let s=0;s<i;++s){if(e[s]=parseInt(e[s],10),t[s]=parseInt(t[s],10),e[s]>t[s])return 1;if(e[s]<t[s])return-1}return e.length==t.length?0:e.length<t.length?-1:1}};e([t({type:String})],b.prototype,"releaseURL",void 0),e([t({type:String})],b.prototype,"localVersion",void 0),e([t({type:String})],b.prototype,"localBuild",void 0),e([t({type:String})],b.prototype,"remoteVersion",void 0),e([t({type:String})],b.prototype,"remoteBuild",void 0),e([t({type:String})],b.prototype,"remoteRevision",void 0),e([t({type:Boolean})],b.prototype,"updateChecked",void 0),e([t({type:Boolean})],b.prototype,"updateNeeded",void 0),e([t({type:String})],b.prototype,"updateURL",void 0),e([t({type:Object})],b.prototype,"notification",void 0),b=e([i("backend-ai-release-check")],b);let f=class extends s{constructor(){super(),this.currentNumber=50,this.maxNumber=100,this.unit="%",this.url="",this.textcolor="#888888",this.chartcolor="#ff2222",this.size=200,this.fontsize=60,this.chartFontSize="0",this.indicatorPath="",this.prefix="",this.sizeParam=""}static get is(){return"lablup-piechart"}static get styles(){return[a,o,l`
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
let _=class extends c{constructor(){super(),this.condition="running",this.sessions=0,this.agents=0,this.is_admin=!1,this.is_superadmin=!1,this.resources=Object(),this.authenticated=!1,this.manager_version="",this.console_version="",this.cpu_total=0,this.cpu_used=0,this.cpu_percent="0",this.cpu_total_percent="0",this.cpu_total_usage_ratio=0,this.cpu_current_usage_ratio=0,this.mem_total="0",this.mem_used="0",this.mem_allocated="0",this.mem_total_usage_ratio=0,this.mem_current_usage_ratio=0,this.mem_current_usage_percent="0",this.cuda_gpu_total=0,this.cuda_gpu_used=0,this.cuda_fgpu_total=0,this.cuda_fgpu_used=0,this.rocm_gpu_total=0,this.rocm_gpu_used=0,this.tpu_total=0,this.tpu_used=0,this.spinner=Object(),this.notification=Object(),this.announcement="",this.height=0}static get styles(){return[p,a,o,u,l`
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
      `]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification}_refreshHealthPanel(){this.activeConnected&&(this._refreshSessionInformation(),this.is_superadmin&&this._refreshAgentInformation())}_refreshSessionInformation(){if(!this.activeConnected)return;this.spinner.show();let e="RUNNING";switch(this.condition){case"running":e="RUNNING";break;case"finished":e="TERMINATED";break;case"archived":default:e="RUNNING"}globalThis.backendaiclient.computeSession.total_count(e).then((e=>{this.spinner.hide(),!e.compute_session_list&&e.legacy_compute_session_list&&(e.compute_session_list=e.legacy_compute_session_list),this.sessions=e.compute_session_list.total_count,this.active&&setTimeout((()=>{this._refreshSessionInformation()}),15e3)})).catch((e=>{this.spinner.hide(),this.sessions=0,this.notification.text=n("summary.connectingToCluster"),this.notification.detail=e,this.notification.show(!1,e),this.active&&setTimeout((()=>{this._refreshSessionInformation()}),15e3)}))}_refreshResourceInformation(){if(this.activeConnected)return globalThis.backendaiclient.resourcePolicy.get(globalThis.backendaiclient.resource_policy).then((e=>{let t=e.keypair_resource_policies;this.resourcePolicy=globalThis.backendaiclient.utils.gqlToObject(t,"name")}))}_refreshAgentInformation(e="running"){if(this.activeConnected){switch(this.condition){case"running":e="ALIVE";break;case"finished":e="TERMINATED";break;case"archived":default:e="ALIVE"}this.spinner.show(),globalThis.backendaiclient.resources.totalResourceInformation().then((t=>{this.spinner.hide(),this.resources=t,this._sync_resource_values(),1==this.active&&setTimeout((()=>{this._refreshAgentInformation(e)}),15e3)})).catch((e=>{this.spinner.hide(),e&&e.message&&(this.notification.text=h.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}}_init_resource_values(){this.resources.cpu={},this.resources.cpu.total=0,this.resources.cpu.used=0,this.resources.cpu.percent=0,this.resources.mem={},this.resources.mem.total=0,this.resources.mem.allocated=0,this.resources.mem.used=0,this.resources.cuda_gpu={},this.resources.cuda_gpu.total=0,this.resources.cuda_gpu.used=0,this.resources.cuda_fgpu={},this.resources.cuda_fgpu.total=0,this.resources.cuda_fgpu.used=0,this.resources.agents={},this.resources.agents.total=0,this.resources.agents.using=0,this.cpu_total_usage_ratio=0,this.cpu_current_usage_ratio=0,this.mem_total_usage_ratio=0,this.mem_current_usage_ratio=0,this.mem_current_usage_percent="0",this.is_admin=!1,this.is_superadmin=!1}_sync_resource_values(){this.manager_version=globalThis.backendaiclient.managerVersion,this.console_version=globalThis.packageVersion,this.cpu_total=this.resources.cpu.total,this.mem_total=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(this.resources.mem.total,"g")).toFixed(2),isNaN(this.resources["cuda.device"].total)?this.cuda_gpu_total=0:this.cuda_gpu_total=this.resources["cuda.device"].total,isNaN(this.resources["cuda.shares"].total)?this.cuda_fgpu_total=0:this.cuda_fgpu_total=this.resources["cuda.shares"].total,this.cpu_used=this.resources.cpu.used,this.cuda_gpu_used=this.resources["cuda.device"].used,this.cuda_fgpu_used=this.resources["cuda.shares"].used,this.cpu_percent=parseFloat(this.resources.cpu.percent).toFixed(2),this.cpu_total_percent=0!==this.cpu_used?(this.cpu_used/this.cpu_total*100).toFixed(2):"0",this.cpu_total_usage_ratio=this.resources.cpu.used/this.resources.cpu.total*100,this.cpu_current_usage_ratio=this.resources.cpu.percent/this.resources.cpu.total,this.mem_used=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(this.resources.mem.used,"g")).toFixed(2),this.mem_allocated=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(this.resources.mem.allocated,"g")).toFixed(2),this.mem_total_usage_ratio=this.resources.mem.allocated/this.resources.mem.total*100,this.mem_current_usage_ratio=this.resources.mem.used/this.resources.mem.total*100,0===this.mem_total_usage_ratio?this.mem_current_usage_percent="0.0":this.mem_current_usage_percent=this.mem_total_usage_ratio.toFixed(2),this.agents=this.resources.agents.total,isNaN(parseFloat(this.mem_current_usage_percent))&&(this.mem_current_usage_percent="0")}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(this._init_resource_values(),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_superadmin=globalThis.backendaiclient.is_superadmin,this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this.activeConnected&&(this._refreshHealthPanel(),this.requestUpdate())}),!0):(this.is_superadmin=globalThis.backendaiclient.is_superadmin,this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this._refreshHealthPanel(),this.requestUpdate()))}_toInt(e){return Math.ceil(e)}_countObject(e){return Object.keys(e).length}_addComma(e){if(void 0===e)return"";return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}render(){return r`
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
                  description="${this.cuda_gpu_used} / ${this.cuda_gpu_total} CUDA GPUs ${d("summary.reserved")}."
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
                description="${this.cuda_fgpu_used} / ${this.cuda_fgpu_total} CUDA fGPUs ${d("summary.reserved")}."
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
`}};e([t({type:String})],_.prototype,"condition",void 0),e([t({type:Number})],_.prototype,"sessions",void 0),e([t({type:Number})],_.prototype,"agents",void 0),e([t({type:Boolean})],_.prototype,"is_admin",void 0),e([t({type:Boolean})],_.prototype,"is_superadmin",void 0),e([t({type:Object})],_.prototype,"resources",void 0),e([t({type:Boolean})],_.prototype,"authenticated",void 0),e([t({type:String})],_.prototype,"manager_version",void 0),e([t({type:String})],_.prototype,"console_version",void 0),e([t({type:Number})],_.prototype,"cpu_total",void 0),e([t({type:Number})],_.prototype,"cpu_used",void 0),e([t({type:String})],_.prototype,"cpu_percent",void 0),e([t({type:String})],_.prototype,"cpu_total_percent",void 0),e([t({type:Number})],_.prototype,"cpu_total_usage_ratio",void 0),e([t({type:Number})],_.prototype,"cpu_current_usage_ratio",void 0),e([t({type:String})],_.prototype,"mem_total",void 0),e([t({type:String})],_.prototype,"mem_used",void 0),e([t({type:String})],_.prototype,"mem_allocated",void 0),e([t({type:Number})],_.prototype,"mem_total_usage_ratio",void 0),e([t({type:Number})],_.prototype,"mem_current_usage_ratio",void 0),e([t({type:String})],_.prototype,"mem_current_usage_percent",void 0),e([t({type:Number})],_.prototype,"cuda_gpu_total",void 0),e([t({type:Number})],_.prototype,"cuda_gpu_used",void 0),e([t({type:Number})],_.prototype,"cuda_fgpu_total",void 0),e([t({type:Number})],_.prototype,"cuda_fgpu_used",void 0),e([t({type:Number})],_.prototype,"rocm_gpu_total",void 0),e([t({type:Number})],_.prototype,"rocm_gpu_used",void 0),e([t({type:Number})],_.prototype,"tpu_total",void 0),e([t({type:Number})],_.prototype,"tpu_used",void 0),e([t({type:Object})],_.prototype,"spinner",void 0),e([t({type:Object})],_.prototype,"notification",void 0),e([t({type:Object})],_.prototype,"resourcePolicy",void 0),e([t({type:String})],_.prototype,"announcement",void 0),e([t({type:Number})],_.prototype,"height",void 0),_=e([i("backend-ai-resource-panel")],_);var y,v=(function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}}(y={exports:{}},y.exports),y.exports);v.defaults,v.getDefaults,v.changeDefaults;const k=/[&<>"']/,x=/[&<>"']/g,w=/[<>"']|&(?!#?\w+;)/,$=/[<>"']|&(?!#?\w+;)/g,z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},S=e=>z[e];const T=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function A(e){return e.replace(T,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const R=/(^|[^\[])\^/g;const j=/[^\w:]/g,I=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const N={},C=/^[^:]+:\/*[^/]*$/,U=/^([^:]+:)[\s\S]*$/,P=/^([^:]+:\/*[^/]*)[\s\S]*$/;function O(e,t){N[" "+e]||(C.test(e)?N[" "+e]=e+"/":N[" "+e]=q(e,"/",!0));const i=-1===(e=N[" "+e]).indexOf(":");return"//"===t.substring(0,2)?i?t:e.replace(U,"$1")+t:"/"===t.charAt(0)?i?t:e.replace(P,"$1")+t:e+t}function q(e,t,i){const s=e.length;if(0===s)return"";let r=0;for(;r<s;){const n=e.charAt(s-r-1);if(n!==t||i){if(n===t||!i)break;r++}else r++}return e.substr(0,s-r)}var F={escape:function(e,t){if(t){if(k.test(e))return e.replace(x,S)}else if(w.test(e))return e.replace($,S);return e},unescape:A,edit:function(e,t){e=e.source||e,t=t||"";const i={replace:(t,s)=>(s=(s=s.source||s).replace(R,"$1"),e=e.replace(t,s),i),getRegex:()=>new RegExp(e,t)};return i},cleanUrl:function(e,t,i){if(e){let e;try{e=decodeURIComponent(A(i)).replace(j,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!I.test(i)&&(i=O(t,i));try{i=encodeURI(i).replace(/%25/g,"%")}catch(e){return null}return i},resolveUrl:O,noopTest:{exec:function(){}},merge:function(e){let t,i,s=1;for(;s<arguments.length;s++)for(i in t=arguments[s],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},splitCells:function(e,t){const i=e.replace(/\|/g,((e,t,i)=>{let s=!1,r=t;for(;--r>=0&&"\\"===i[r];)s=!s;return s?"|":" |"})).split(/ \|/);let s=0;if(i.length>t)i.splice(t);else for(;i.length<t;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(/\\\|/g,"|");return i},rtrim:q,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const i=e.length;let s=0,r=0;for(;r<i;r++)if("\\"===e[r])r++;else if(e[r]===t[0])s++;else if(e[r]===t[1]&&(s--,s<0))return r;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},repeatString:function(e,t){if(t<1)return"";let i="";for(;t>1;)1&t&&(i+=e),t>>=1,e+=e;return i+e}};const{defaults:E}=v,{rtrim:L,splitCells:B,escape:V,findClosingBracket:Z}=F;function D(e,t,i){const s=t.href,r=t.title?V(t.title):null,n=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:i,href:s,title:r,text:n}:{type:"image",raw:i,href:s,title:r,text:V(n)}}var M=class{constructor(e){this.options=e||E}space(e){const t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}}code(e,t){const i=this.rules.block.code.exec(e);if(i){const e=t[t.length-1];if(e&&"paragraph"===e.type)return{raw:i[0],text:i[0].trimRight()};const s=i[0].replace(/^ {4}/gm,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?s:L(s,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],i=function(e,t){const i=e.match(/^(\s+)(?:```)/);if(null===i)return t;const s=i[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[i]=t;return i.length>=s.length?e.slice(s.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=L(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e}}}nptable(e){const t=this.rules.block.nptable.exec(e);if(t){const e={type:"table",header:B(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(e.header.length===e.align.length){let t,i=e.align.length;for(t=0;t<i;t++)/^ *-+: *$/.test(e.align[t])?e.align[t]="right":/^ *:-+: *$/.test(e.align[t])?e.align[t]="center":/^ *:-+ *$/.test(e.align[t])?e.align[t]="left":e.align[t]=null;for(i=e.cells.length,t=0;t<i;t++)e.cells[t]=B(e.cells[t],e.header.length);return e}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:e}}}list(e){const t=this.rules.block.list.exec(e);if(t){let e=t[0];const i=t[2],s=i.length>1,r={type:"list",raw:e,ordered:s,start:s?+i.slice(0,-1):"",loose:!1,items:[]},n=t[0].match(this.rules.block.item);let a,o,l,c,p,u,h,d,g=!1,m=n.length;l=this.rules.block.listItemStart.exec(n[0]);for(let t=0;t<m;t++){if(a=n[t],e=a,t!==m-1){if(c=this.rules.block.listItemStart.exec(n[t+1]),c[1].length>l[0].length||c[1].length>3){n.splice(t,2,n[t]+"\n"+n[t+1]),t--,m--;continue}(!this.options.pedantic||this.options.smartLists?c[2][c[2].length-1]!==i[i.length-1]:s===(1===c[2].length))&&(p=n.slice(t+1).join("\n"),r.raw=r.raw.substring(0,r.raw.length-p.length),t=m-1),l=c}o=a.length,a=a.replace(/^ *([*+-]|\d+[.)]) ?/,""),~a.indexOf("\n ")&&(o-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+o+"}","gm"),"")),u=g||/\n\n(?!\s*$)/.test(a),t!==m-1&&(g="\n"===a.charAt(a.length-1),u||(u=g)),u&&(r.loose=!0),this.options.gfm&&(h=/^\[[ xX]\] /.test(a),d=void 0,h&&(d=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,""))),r.items.push({type:"list_item",raw:e,task:h,checked:d,loose:u,text:a})}return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):V(t[0]):t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));return{tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:B(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let i,s=e.align.length;for(i=0;i<s;i++)/^ *-+: *$/.test(e.align[i])?e.align[i]="right":/^ *:-+: *$/.test(e.align[i])?e.align[i]="center":/^ *:-+ *$/.test(e.align[i])?e.align[i]="left":e.align[i]=null;for(s=e.cells.length,i=0;i<s;i++)e.cells[i]=B(e.cells[i].replace(/^ *\| *| *\| *$/g,""),e.header.length);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}}text(e,t){const i=this.rules.block.text.exec(e);if(i){const e=t[t.length-1];return e&&"text"===e.type?{raw:i[0],text:i[0]}:{type:"text",raw:i[0],text:i[0]}}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:V(t[1])}}tag(e,t,i){const s=this.rules.inline.tag.exec(e);if(s)return!t&&/^<a /i.test(s[0])?t=!0:t&&/^<\/a>/i.test(s[0])&&(t=!1),!i&&/^<(pre|code|kbd|script)(\s|>)/i.test(s[0])?i=!0:i&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0])&&(i=!1),{type:this.options.sanitize?"text":"html",raw:s[0],inLink:t,inRawBlock:i,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):V(s[0]):s[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=L(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=Z(t[2],"()");if(e>-1){const i=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,i).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);e&&(i=e[1],s=e[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(i=this.options.pedantic&&!/>$/.test(e)?i.slice(1):i.slice(1,-1)),D(t,{href:i?i.replace(this.rules.inline._escapes,"$1"):i,title:s?s.replace(this.rules.inline._escapes,"$1"):s},t[0])}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let e=(i[2]||i[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=i[0].charAt(0);return{type:"text",raw:e,text:e}}return D(i,e,i[0])}}strong(e,t,i=""){let s=this.rules.inline.strong.start.exec(e);if(s&&(!s[1]||s[1]&&(""===i||this.rules.inline.punctuation.exec(i)))){t=t.slice(-1*e.length);const i="**"===s[0]?this.rules.inline.strong.endAst:this.rules.inline.strong.endUnd;let r;for(i.lastIndex=0;null!=(s=i.exec(t));)if(r=this.rules.inline.strong.middle.exec(t.slice(0,s.index+3)),r)return{type:"strong",raw:e.slice(0,r[0].length),text:e.slice(2,r[0].length-2)}}}em(e,t,i=""){let s=this.rules.inline.em.start.exec(e);if(s&&(!s[1]||s[1]&&(""===i||this.rules.inline.punctuation.exec(i)))){t=t.slice(-1*e.length);const i="*"===s[0]?this.rules.inline.em.endAst:this.rules.inline.em.endUnd;let r;for(i.lastIndex=0;null!=(s=i.exec(t));)if(r=this.rules.inline.em.middle.exec(t.slice(0,s.index+2)),r)return{type:"em",raw:e.slice(0,r[0].length),text:e.slice(1,r[0].length-1)}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const i=/[^ ]/.test(e),s=/^ /.test(e)&&/ $/.test(e);return i&&s&&(e=e.substring(1,e.length-1)),e=V(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2]}}autolink(e,t){const i=this.rules.inline.autolink.exec(e);if(i){let e,s;return"@"===i[2]?(e=V(this.options.mangle?t(i[1]):i[1]),s="mailto:"+e):(e=V(i[1]),s=e),{type:"link",raw:i[0],text:e,href:s,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let i;if(i=this.rules.inline.url.exec(e)){let e,s;if("@"===i[2])e=V(this.options.mangle?t(i[0]):i[0]),s="mailto:"+e;else{let t;do{t=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0]}while(t!==i[0]);e=V(i[0]),s="www."===i[1]?"http://"+e:e}return{type:"link",raw:i[0],text:e,href:s,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t,i){const s=this.rules.inline.text.exec(e);if(s){let e;return e=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):V(s[0]):s[0]:V(this.options.smartypants?i(s[0]):s[0]),{type:"text",raw:s[0],text:e}}}};const{noopTest:G,edit:H,merge:Y}=F,K={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:G,table:G,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};K.def=H(K.def).replace("label",K._label).replace("title",K._title).getRegex(),K.bullet=/(?:[*+-]|\d{1,9}[.)])/,K.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,K.item=H(K.item,"gm").replace(/bull/g,K.bullet).getRegex(),K.listItemStart=H(/^( *)(bull)/).replace("bull",K.bullet).getRegex(),K.list=H(K.list).replace(/bull/g,K.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+K.def.source+")").getRegex(),K._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",K._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,K.html=H(K.html,"i").replace("comment",K._comment).replace("tag",K._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),K.paragraph=H(K._paragraph).replace("hr",K.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",K._tag).getRegex(),K.blockquote=H(K.blockquote).replace("paragraph",K.paragraph).getRegex(),K.normal=Y({},K),K.gfm=Y({},K.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),K.gfm.nptable=H(K.gfm.nptable).replace("hr",K.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",K._tag).getRegex(),K.gfm.table=H(K.gfm.table).replace("hr",K.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",K._tag).getRegex(),K.pedantic=Y({},K.normal,{html:H("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",K._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:G,paragraph:H(K.normal._paragraph).replace("hr",K.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",K.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const X={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:G,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",strong:{start:/^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,middle:/^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,endAst:/[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/},em:{start:/^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,middle:/^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,endAst:/[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:G,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\s*punctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};X.punctuation=H(X.punctuation).replace(/punctuation/g,X._punctuation).getRegex(),X._blockSkip="\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>",X._overlapSkip="__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*",X._comment=H(K._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),X.em.start=H(X.em.start).replace(/punctuation/g,X._punctuation).getRegex(),X.em.middle=H(X.em.middle).replace(/punctuation/g,X._punctuation).replace(/overlapSkip/g,X._overlapSkip).getRegex(),X.em.endAst=H(X.em.endAst,"g").replace(/punctuation/g,X._punctuation).getRegex(),X.em.endUnd=H(X.em.endUnd,"g").replace(/punctuation/g,X._punctuation).getRegex(),X.strong.start=H(X.strong.start).replace(/punctuation/g,X._punctuation).getRegex(),X.strong.middle=H(X.strong.middle).replace(/punctuation/g,X._punctuation).replace(/overlapSkip/g,X._overlapSkip).getRegex(),X.strong.endAst=H(X.strong.endAst,"g").replace(/punctuation/g,X._punctuation).getRegex(),X.strong.endUnd=H(X.strong.endUnd,"g").replace(/punctuation/g,X._punctuation).getRegex(),X.blockSkip=H(X._blockSkip,"g").getRegex(),X.overlapSkip=H(X._overlapSkip,"g").getRegex(),X._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,X._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,X._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,X.autolink=H(X.autolink).replace("scheme",X._scheme).replace("email",X._email).getRegex(),X._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,X.tag=H(X.tag).replace("comment",X._comment).replace("attribute",X._attribute).getRegex(),X._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,X._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,X._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,X.link=H(X.link).replace("label",X._label).replace("href",X._href).replace("title",X._title).getRegex(),X.reflink=H(X.reflink).replace("label",X._label).getRegex(),X.reflinkSearch=H(X.reflinkSearch,"g").replace("reflink",X.reflink).replace("nolink",X.nolink).getRegex(),X.normal=Y({},X),X.pedantic=Y({},X.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:H(/^!?\[(label)\]\((.*?)\)/).replace("label",X._label).getRegex(),reflink:H(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",X._label).getRegex()}),X.gfm=Y({},X.normal,{escape:H(X.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),X.gfm.url=H(X.gfm.url,"i").replace("email",X.gfm._extended_email).getRegex(),X.breaks=Y({},X.gfm,{br:H(X.br).replace("{2,}","*").getRegex(),text:H(X.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var J={block:K,inline:X};const{defaults:Q}=v,{block:W,inline:ee}=J,{repeatString:te}=F;function ie(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function se(e){let t,i,s="";const r=e.length;for(t=0;t<r;t++)i=e.charCodeAt(t),Math.random()>.5&&(i="x"+i.toString(16)),s+="&#"+i+";";return s}var re=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Q,this.options.tokenizer=this.options.tokenizer||new M,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;const t={block:W.normal,inline:ee.normal};this.options.pedantic?(t.block=W.pedantic,t.inline=ee.pedantic):this.options.gfm&&(t.block=W.gfm,this.options.breaks?t.inline=ee.breaks:t.inline=ee.gfm),this.tokenizer.rules=t}static get rules(){return{block:W,inline:ee}}static lex(t,i){return new e(i).lex(t)}static lexInline(t,i){return new e(i).inlineTokens(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens}blockTokens(e,t=[],i=!0){let s,r,n,a;for(e=e.replace(/^ +$/gm,"");e;)if(s=this.tokenizer.space(e))e=e.substring(s.raw.length),s.type&&t.push(s);else if(s=this.tokenizer.code(e,t))e=e.substring(s.raw.length),s.type?t.push(s):(a=t[t.length-1],a.raw+="\n"+s.raw,a.text+="\n"+s.text);else if(s=this.tokenizer.fences(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.heading(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.nptable(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.hr(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.blockquote(e))e=e.substring(s.raw.length),s.tokens=this.blockTokens(s.text,[],i),t.push(s);else if(s=this.tokenizer.list(e)){for(e=e.substring(s.raw.length),n=s.items.length,r=0;r<n;r++)s.items[r].tokens=this.blockTokens(s.items[r].text,[],!1);t.push(s)}else if(s=this.tokenizer.html(e))e=e.substring(s.raw.length),t.push(s);else if(i&&(s=this.tokenizer.def(e)))e=e.substring(s.raw.length),this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});else if(s=this.tokenizer.table(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.lheading(e))e=e.substring(s.raw.length),t.push(s);else if(i&&(s=this.tokenizer.paragraph(e)))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.text(e,t))e=e.substring(s.raw.length),s.type?t.push(s):(a=t[t.length-1],a.raw+="\n"+s.raw,a.text+="\n"+s.text);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}return t}inline(e){let t,i,s,r,n,a;const o=e.length;for(t=0;t<o;t++)switch(a=e[t],a.type){case"paragraph":case"text":case"heading":a.tokens=[],this.inlineTokens(a.text,a.tokens);break;case"table":for(a.tokens={header:[],cells:[]},r=a.header.length,i=0;i<r;i++)a.tokens.header[i]=[],this.inlineTokens(a.header[i],a.tokens.header[i]);for(r=a.cells.length,i=0;i<r;i++)for(n=a.cells[i],a.tokens.cells[i]=[],s=0;s<n.length;s++)a.tokens.cells[i][s]=[],this.inlineTokens(n[s],a.tokens.cells[i][s]);break;case"blockquote":this.inline(a.tokens);break;case"list":for(r=a.items.length,i=0;i<r;i++)this.inline(a.items[i].tokens)}return e}inlineTokens(e,t=[],i=!1,s=!1){let r,n,a,o,l=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(n=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,n.index)+"["+te("a",n[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(n=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,n.index)+"["+te("a",n[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;e;)if(a||(o=""),a=!1,r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.tag(e,i,s))e=e.substring(r.raw.length),i=r.inLink,s=r.inRawBlock,t.push(r);else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),"link"===r.type&&(r.tokens=this.inlineTokens(r.text,[],!0,s)),t.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),"link"===r.type&&(r.tokens=this.inlineTokens(r.text,[],!0,s)),t.push(r);else if(r=this.tokenizer.strong(e,l,o))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],i,s),t.push(r);else if(r=this.tokenizer.em(e,l,o))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],i,s),t.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],i,s),t.push(r);else if(r=this.tokenizer.autolink(e,se))e=e.substring(r.raw.length),t.push(r);else if(i||!(r=this.tokenizer.url(e,se))){if(r=this.tokenizer.inlineText(e,s,ie))e=e.substring(r.raw.length),o=r.raw.slice(-1),a=!0,t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(r.raw.length),t.push(r);return t}};const{defaults:ne}=v,{cleanUrl:ae,escape:oe}=F;var le=class{constructor(e){this.options=e||ne}code(e,t,i){const s=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,s);null!=t&&t!==e&&(i=!0,e=t)}return s?'<pre><code class="'+this.options.langPrefix+oe(s,!0)+'">'+(i?e:oe(e,!0))+"</code></pre>\n":"<pre><code>"+(i?e:oe(e,!0))+"</code></pre>\n"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,i,s){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+s.slug(i)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,i){const s=t?"ol":"ul";return"<"+s+(t&&1!==i?' start="'+i+'"':"")+">\n"+e+"</"+s+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const i=t.header?"th":"td";return(t.align?"<"+i+' align="'+t.align+'">':"<"+i+">")+e+"</"+i+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,i){if(null===(e=ae(this.options.sanitize,this.options.baseUrl,e)))return i;let s='<a href="'+oe(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+i+"</a>",s}image(e,t,i){if(null===(e=ae(this.options.sanitize,this.options.baseUrl,e)))return i;let s='<img src="'+e+'" alt="'+i+'"';return t&&(s+=' title="'+t+'"'),s+=this.options.xhtml?"/>":">",s}text(e){return e}},ce=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,i){return""+i}image(e,t,i){return""+i}br(){return""}},pe=class{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let i=e,s=0;if(this.seen.hasOwnProperty(i)){s=this.seen[e];do{s++,i=e+"-"+s}while(this.seen.hasOwnProperty(i))}return t||(this.seen[e]=s,this.seen[i]=0),i}slug(e,t={}){const i=this.serialize(e);return this.getNextSafeSlug(i,t.dryrun)}};const{defaults:ue}=v,{unescape:he}=F;var de=class e{constructor(e){this.options=e||ue,this.options.renderer=this.options.renderer||new le,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ce,this.slugger=new pe}static parse(t,i){return new e(i).parse(t)}static parseInline(t,i){return new e(i).parseInline(t)}parse(e,t=!0){let i,s,r,n,a,o,l,c,p,u,h,d,g,m,b,f,_,y,v="";const k=e.length;for(i=0;i<k;i++)switch(u=e[i],u.type){case"space":continue;case"hr":v+=this.renderer.hr();continue;case"heading":v+=this.renderer.heading(this.parseInline(u.tokens),u.depth,he(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":v+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(c="",l="",n=u.header.length,s=0;s<n;s++)l+=this.renderer.tablecell(this.parseInline(u.tokens.header[s]),{header:!0,align:u.align[s]});for(c+=this.renderer.tablerow(l),p="",n=u.cells.length,s=0;s<n;s++){for(o=u.tokens.cells[s],l="",a=o.length,r=0;r<a;r++)l+=this.renderer.tablecell(this.parseInline(o[r]),{header:!1,align:u.align[r]});p+=this.renderer.tablerow(l)}v+=this.renderer.table(c,p);continue;case"blockquote":p=this.parse(u.tokens),v+=this.renderer.blockquote(p);continue;case"list":for(h=u.ordered,d=u.start,g=u.loose,n=u.items.length,p="",s=0;s<n;s++)b=u.items[s],f=b.checked,_=b.task,m="",b.task&&(y=this.renderer.checkbox(f),g?b.tokens.length>0&&"text"===b.tokens[0].type?(b.tokens[0].text=y+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&"text"===b.tokens[0].tokens[0].type&&(b.tokens[0].tokens[0].text=y+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:y}):m+=y),m+=this.parse(b.tokens,g),p+=this.renderer.listitem(m,_,f);v+=this.renderer.list(p,h,d);continue;case"html":v+=this.renderer.html(u.text);continue;case"paragraph":v+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(p=u.tokens?this.parseInline(u.tokens):u.text;i+1<k&&"text"===e[i+1].type;)u=e[++i],p+="\n"+(u.tokens?this.parseInline(u.tokens):u.text);v+=t?this.renderer.paragraph(p):p;continue;default:{const e='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return v}parseInline(e,t){t=t||this.renderer;let i,s,r="";const n=e.length;for(i=0;i<n;i++)switch(s=e[i],s.type){case"escape":r+=t.text(s.text);break;case"html":r+=t.html(s.text);break;case"link":r+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break;case"image":r+=t.image(s.href,s.title,s.text);break;case"strong":r+=t.strong(this.parseInline(s.tokens,t));break;case"em":r+=t.em(this.parseInline(s.tokens,t));break;case"codespan":r+=t.codespan(s.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(s.tokens,t));break;case"text":r+=t.text(s.text);break;default:{const e='Token with "'+s.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return r}};const{merge:ge,checkSanitizeDeprecation:me,escape:be}=F,{getDefaults:fe,changeDefaults:_e,defaults:ye}=v;function ve(e,t,i){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(i=t,t=null),t=ge({},ve.defaults,t||{}),me(t),i){const s=t.highlight;let r;try{r=re.lex(e,t)}catch(e){return i(e)}const n=function(e){let n;if(!e)try{n=de.parse(r,t)}catch(t){e=t}return t.highlight=s,e?i(e):i(null,n)};if(!s||s.length<3)return n();if(delete t.highlight,!r.length)return n();let a=0;return ve.walkTokens(r,(function(e){"code"===e.type&&(a++,setTimeout((()=>{s(e.text,e.lang,(function(t,i){if(t)return n(t);null!=i&&i!==e.text&&(e.text=i,e.escaped=!0),a--,0===a&&n()}))}),0))})),void(0===a&&n())}try{const i=re.lex(e,t);return t.walkTokens&&ve.walkTokens(i,t.walkTokens),de.parse(i,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+be(e.message+"",!0)+"</pre>";throw e}}ve.options=ve.setOptions=function(e){return ge(ve.defaults,e),_e(ve.defaults),ve},ve.getDefaults=fe,ve.defaults=ye,ve.use=function(e){const t=ge({},e);if(e.renderer){const i=ve.defaults.renderer||new le;for(const t in e.renderer){const s=i[t];i[t]=(...r)=>{let n=e.renderer[t].apply(i,r);return!1===n&&(n=s.apply(i,r)),n}}t.renderer=i}if(e.tokenizer){const i=ve.defaults.tokenizer||new M;for(const t in e.tokenizer){const s=i[t];i[t]=(...r)=>{let n=e.tokenizer[t].apply(i,r);return!1===n&&(n=s.apply(i,r)),n}}t.tokenizer=i}if(e.walkTokens){const i=ve.defaults.walkTokens;t.walkTokens=t=>{e.walkTokens(t),i&&i(t)}}ve.setOptions(t)},ve.walkTokens=function(e,t){for(const i of e)switch(t(i),i.type){case"table":for(const e of i.tokens.header)ve.walkTokens(e,t);for(const e of i.tokens.cells)for(const i of e)ve.walkTokens(i,t);break;case"list":ve.walkTokens(i.items,t);break;default:i.tokens&&ve.walkTokens(i.tokens,t)}},ve.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=ge({},ve.defaults,t||{}),me(t);try{const i=re.lexInline(e,t);return t.walkTokens&&ve.walkTokens(i,t.walkTokens),de.parseInline(i,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+be(e.message+"",!0)+"</pre>";throw e}},ve.Parser=de,ve.parser=de.parse,ve.Renderer=le,ve.TextRenderer=ce,ve.Lexer=re,ve.lexer=re.lex,ve.Tokenizer=M,ve.Slugger=pe,ve.parse=ve;var ke=ve;
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let xe=class extends c{constructor(){super(),this.condition="running",this.sessions=0,this.jobs=Object(),this.agents=0,this.is_admin=!1,this.is_superadmin=!1,this.resources=Object(),this.update_checker=Object(),this.authenticated=!1,this.manager_version="",this.console_version="",this.cpu_total=0,this.cpu_used=0,this.cpu_percent="0",this.cpu_total_percent="0",this.cpu_total_usage_ratio=0,this.cpu_current_usage_ratio=0,this.mem_total="0",this.mem_used="0",this.mem_allocated="0",this.mem_total_usage_ratio=0,this.mem_current_usage_ratio=0,this.mem_current_usage_percent="0",this.cuda_gpu_total=0,this.cuda_gpu_used=0,this.cuda_fgpu_total=0,this.cuda_fgpu_used=0,this.rocm_gpu_total=0,this.rocm_gpu_used=0,this.tpu_total=0,this.tpu_used=0,this.spinner=Object(),this.notification=Object(),this.announcement="",this.invitations=Object(),this.invitations=[]}static get styles(){return[p,a,o,u,l`
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

        .upper-space {
          padding-top: 20px;
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
      `]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification,this.update_checker=this.shadowRoot.querySelector("#update-checker"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._readAnnouncement()}),!0):this._readAnnouncement()}_refreshConsoleUpdateInformation(){this.is_superadmin&&globalThis.backendaioptions.get("automatic_update_check",!0)&&this.update_checker.checkRelease()}async _viewStateChanged(e){await this.updateComplete,!1!==e?(this.shadowRoot.querySelector("#resource-monitor").setAttribute("active","true"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_superadmin=globalThis.backendaiclient.is_superadmin,this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this.manager_version=globalThis.backendaiclient.managerVersion,this.console_version=globalThis.packageVersion,this.activeConnected&&this._refreshConsoleUpdateInformation(),this._refreshInvitations()}),!0):(this.is_superadmin=globalThis.backendaiclient.is_superadmin,this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this.manager_version=globalThis.backendaiclient.managerVersion,this.console_version=globalThis.packageVersion,this._refreshConsoleUpdateInformation(),this._refreshInvitations())):this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active")}_readAnnouncement(){this.activeConnected&&globalThis.backendaiclient.service.get_announcement().then((e=>{"message"in e&&(this.announcement=ke(e.message))})).catch((e=>{}))}_toInt(e){return Math.ceil(e)}_countObject(e){return Object.keys(e).length}_addComma(e){if(void 0===e)return"";return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}_refreshInvitations(e=!1){this.activeConnected&&globalThis.backendaiclient.vfolder.invitations().then((t=>{this.invitations=t.invitations,this.active&&!e&&setTimeout((()=>{this._refreshInvitations()}),1e4)}))}async _acceptInvitation(e,t){if(!this.activeConnected)return;let i=e.target.closest("lablup-activity-panel");try{i.setAttribute("disabled","true"),i.querySelectorAll("wl-button").forEach((e=>{e.setAttribute("disabled","true")})),await globalThis.backendaiclient.vfolder.accept_invitation(t.id),this.notification.text=n("summary.AcceptSharedVFolder")+""+t.vfolder_name,this.notification.show(),this._refreshInvitations()}catch(e){i.setAttribute("disabled","false"),i.querySelectorAll("wl-button").forEach((e=>{e.setAttribute("disabled","false")})),this.notification.text=h.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)}}async _deleteInvitation(e,t){if(!this.activeConnected)return;let i=e.target.closest("lablup-activity-panel");try{i.setAttribute("disabled","true"),i.querySelectorAll("wl-button").forEach((e=>{e.setAttribute("disabled","true")})),await globalThis.backendaiclient.vfolder.delete_invitation(t.id),this.notification.text=n("summary.DeclineSharedVFolder")+""+t.vfolder_name,this.notification.show(),this._refreshInvitations()}catch(e){i.setAttribute("disabled","false"),i.querySelectorAll("wl-button").forEach((e=>{e.setAttribute("disabled","false")})),this.notification.text=h.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)}}_stripHTMLTags(e){return e.replace(/(<([^>]+)>)/gi,"")}render(){return r`
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
                          <div style="margin:15px auto;" class="horizontal layout justified">
                            <mwc-button
                                unelevated
                                label="${d("summary.Accept")}"
                                @click="${t=>this._acceptInvitation(t,e)}"></mwc-button>
                            <span class="flex"></span>
                            <mwc-button
                                outlined
                                label="${d("summary.Decline")}"
                                @click="${t=>this._deleteInvitation(t,e)}"></mwc-button>
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
                      <div slot="message" class="vertical layout center start-justified flex upper-space">
                        <h3 style="margin-top:0px;">${d("summary.CurrentVersion")}</h3>
                        ${this.is_superadmin?r`
                          <div class="layout vertical center center-justified flex" style="margin-bottom:5px;">
                            <lablup-shields app="Manager version" color="darkgreen" description="${this.manager_version}" ui="flat"></lablup-shields>
                            <div class="layout horizontal center flex" style="margin-top:4px;">
                              <lablup-shields app="Console version" color="${this.update_checker.updateNeeded?"red":"darkgreen"}" description="${this.console_version}" ui="flat"></lablup-shields>
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
                      <div slot="message" class="layout horizontal center center-justified flex upper-space">
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
                    <div slot="message" class="layout horizontal center center-justified flex upper-space">
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
                    <div slot="message" class="layout horizontal center center-justified flex upper-space">
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
                      <div slot="message" class="layout horizontal center center-justified flex upper-space">
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
  `}};e([t({type:String})],xe.prototype,"condition",void 0),e([t({type:Number})],xe.prototype,"sessions",void 0),e([t({type:Object})],xe.prototype,"jobs",void 0),e([t({type:Number})],xe.prototype,"agents",void 0),e([t({type:Boolean})],xe.prototype,"is_admin",void 0),e([t({type:Boolean})],xe.prototype,"is_superadmin",void 0),e([t({type:Object})],xe.prototype,"resources",void 0),e([t({type:Object})],xe.prototype,"update_checker",void 0),e([t({type:Boolean})],xe.prototype,"authenticated",void 0),e([t({type:String})],xe.prototype,"manager_version",void 0),e([t({type:String})],xe.prototype,"console_version",void 0),e([t({type:Number})],xe.prototype,"cpu_total",void 0),e([t({type:Number})],xe.prototype,"cpu_used",void 0),e([t({type:String})],xe.prototype,"cpu_percent",void 0),e([t({type:String})],xe.prototype,"cpu_total_percent",void 0),e([t({type:Number})],xe.prototype,"cpu_total_usage_ratio",void 0),e([t({type:Number})],xe.prototype,"cpu_current_usage_ratio",void 0),e([t({type:String})],xe.prototype,"mem_total",void 0),e([t({type:String})],xe.prototype,"mem_used",void 0),e([t({type:String})],xe.prototype,"mem_allocated",void 0),e([t({type:Number})],xe.prototype,"mem_total_usage_ratio",void 0),e([t({type:Number})],xe.prototype,"mem_current_usage_ratio",void 0),e([t({type:String})],xe.prototype,"mem_current_usage_percent",void 0),e([t({type:Number})],xe.prototype,"cuda_gpu_total",void 0),e([t({type:Number})],xe.prototype,"cuda_gpu_used",void 0),e([t({type:Number})],xe.prototype,"cuda_fgpu_total",void 0),e([t({type:Number})],xe.prototype,"cuda_fgpu_used",void 0),e([t({type:Number})],xe.prototype,"rocm_gpu_total",void 0),e([t({type:Number})],xe.prototype,"rocm_gpu_used",void 0),e([t({type:Number})],xe.prototype,"tpu_total",void 0),e([t({type:Number})],xe.prototype,"tpu_used",void 0),e([t({type:Object})],xe.prototype,"spinner",void 0),e([t({type:Object})],xe.prototype,"notification",void 0),e([t({type:Object})],xe.prototype,"resourcePolicy",void 0),e([t({type:String})],xe.prototype,"announcement",void 0),e([t({type:Object})],xe.prototype,"invitations",void 0),xe=e([i("backend-ai-summary-view")],xe);var we=xe;export default we;
