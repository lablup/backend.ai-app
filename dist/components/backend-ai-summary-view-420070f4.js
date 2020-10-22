import{_ as e,p as t,c as s,L as i,h as r,g as a,I as n,a as o,b as l,B as c,d as p,e as u,f as d,t as h}from"./backend-ai-console-22d31a8d.js";import{u as g}from"./unsafe-html-06722fb8.js";import{t as m}from"./translate-unsafe-html-a8661cc5.js";import"./mwc-linear-progress-bf85309b.js";import"./lablup-activity-panel-7944657c.js";import"./mwc-slider-9da234df.js";import"./backend-ai-session-launcher-2d4db0b1.js";import"./radio-behavior-ddc0148e.js";import"./expansion-bdffdc99.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let b=class extends i{constructor(){super(),this.releaseURL="https://raw.githubusercontent.com/lablup/backend.ai-console/release/version.json",this.localVersion="",this.localBuild="",this.remoteVersion="",this.remoteBuild="",this.remoteRevision="",this.updateChecked=!1,this.updateNeeded=!1,this.updateURL=""}static get styles(){return[]}render(){return r`
    `}firstUpdated(){this.notification=globalThis.lablupNotification,globalThis.isElectron&&void 0!==globalThis.backendaioptions&&globalThis.backendaioptions.get("automatic_update_check",!0)&&this.checkRelease()}async checkRelease(){this.updateChecked||fetch(this.releaseURL).then((e=>e.json())).then((e=>{this.updateChecked=!0,this.remoteVersion=e.package,this.remoteBuild=e.build,this.remoteRevision=e.revision,this.compareVersion(globalThis.packageVersion,this.remoteVersion)<0&&(this.updateNeeded=!0,this.updateURL="https://github.com/lablup/backend.ai-console/releases/tag/v"+this.remoteVersion,globalThis.isElectron&&(this.notification.text=a("update.NewConsoleVersionAvailable")+" "+this.remoteVersion,this.notification.detail=a("update.NewConsoleVersionAvailable"),this.notification.url=this.updateURL,this.notification.show()))})).catch((e=>{let t=globalThis.backendaioptions.get("automatic_update_count_trial",0);t>3&&globalThis.backendaioptions.set("automatic_update_check",!1),globalThis.backendaioptions.set("automatic_update_count_trial",t+1)}))}compareVersion(e,t){if("string"!=typeof e)return!1;if("string"!=typeof t)return!1;e=e.split("."),t=t.split(".");const s=Math.min(e.length,t.length);for(let i=0;i<s;++i){if(e[i]=parseInt(e[i],10),t[i]=parseInt(t[i],10),e[i]>t[i])return 1;if(e[i]<t[i])return-1}return e.length==t.length?0:e.length<t.length?-1:1}};e([t({type:String})],b.prototype,"releaseURL",void 0),e([t({type:String})],b.prototype,"localVersion",void 0),e([t({type:String})],b.prototype,"localBuild",void 0),e([t({type:String})],b.prototype,"remoteVersion",void 0),e([t({type:String})],b.prototype,"remoteBuild",void 0),e([t({type:String})],b.prototype,"remoteRevision",void 0),e([t({type:Boolean})],b.prototype,"updateChecked",void 0),e([t({type:Boolean})],b.prototype,"updateNeeded",void 0),e([t({type:String})],b.prototype,"updateURL",void 0),e([t({type:Object})],b.prototype,"notification",void 0),b=e([s("backend-ai-release-check")],b);let _=class extends i{constructor(){super(),this.currentNumber=50,this.maxNumber=100,this.unit="%",this.url="",this.textcolor="#888888",this.chartcolor="#ff2222",this.size=200,this.fontsize=60,this.chartFontSize="0",this.indicatorPath="",this.prefix="",this.sizeParam=""}static get is(){return"lablup-piechart"}static get styles(){return[n,o,l`
        #chart {
          cursor: pointer;
        }
      `]}firstUpdated(){this.sizeParam=this.size+"px";let e=this.fontsize/this.size;e>=.5&&(e=.3),this.chartFontSize=e.toString();let t=this.shadowRoot.querySelector("#chart"),s=this.shadowRoot.querySelector("#chart-text"),i=this.shadowRoot.querySelector("#unit-text"),r=(.3-.05*this.unit.length).toString();t.setAttribute("fill",this.chartcolor),s.setAttribute("fill",this.textcolor),s.setAttribute("font-size",this.chartFontSize),i.setAttribute("font-size",r),t.setAttribute("width",this.sizeParam),t.setAttribute("height",this.sizeParam),this.indicatorPath="M 0.5 0.5 L0.5 0 ";var a=100*(this.maxNumber-this.currentNumber)/this.maxNumber;a>12.5&&(this.indicatorPath=this.indicatorPath+"L1 0 "),a>37.5&&(this.indicatorPath=this.indicatorPath+"L1 1 "),a>62.5&&(this.indicatorPath=this.indicatorPath+"L0 1 "),a>87.5&&(this.indicatorPath=this.indicatorPath+"L0 0 ");let n=a/100*2*Math.PI,o=Math.sin(n)/Math.cos(n),l=0,c=0;a<=12.5||a>87.5?(c=.5,l=c*o):a>12.5&&a<=37.5?(l=.5,c=l/o):a>37.5&&a<=62.5?(c=-.5,l=c*o):a>62.5&&a<=87.5&&(l=-.5,c=l/o),l+=.5,c=.5-c,this.indicatorPath=this.indicatorPath+"L"+l+" "+c+" z",this.shadowRoot.querySelector("#pievalue").setAttribute("d",this.indicatorPath),void 0!==this.url&&""!==this.url&&this.shadowRoot.querySelector("#chart").addEventListener("tap",this._moveTo.bind(this)),this.requestUpdate()}connectedCallback(){super.connectedCallback()}_moveTo(){window.location.href=this.url}render(){return r`
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
    `}};e([t({type:Number})],_.prototype,"currentNumber",void 0),e([t({type:Number})],_.prototype,"maxNumber",void 0),e([t({type:String})],_.prototype,"unit",void 0),e([t({type:String})],_.prototype,"url",void 0),e([t({type:String})],_.prototype,"textcolor",void 0),e([t({type:String})],_.prototype,"chartcolor",void 0),e([t({type:Number})],_.prototype,"size",void 0),e([t({type:Number})],_.prototype,"fontsize",void 0),e([t({type:String})],_.prototype,"chartFontSize",void 0),e([t({type:String})],_.prototype,"indicatorPath",void 0),e([t({type:String})],_.prototype,"prefix",void 0),e([t({type:String})],_.prototype,"sizeParam",void 0),_=e([s("lablup-piechart")],_);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let f=class extends c{constructor(){super(),this.condition="running",this.sessions=0,this.jobs=Object(),this.agents=0,this.is_admin=!1,this.is_superadmin=!1,this.resources=Object(),this.authenticated=!1,this.manager_version="",this.console_version="",this.cpu_total=0,this.cpu_used=0,this.cpu_percent="0",this.cpu_total_percent="0",this.cpu_total_usage_ratio=0,this.cpu_current_usage_ratio=0,this.mem_total="0",this.mem_used="0",this.mem_allocated="0",this.mem_total_usage_ratio=0,this.mem_current_usage_ratio=0,this.mem_current_usage_percent="0",this.cuda_gpu_total=0,this.cuda_gpu_used=0,this.cuda_fgpu_total=0,this.cuda_fgpu_used=0,this.rocm_gpu_total=0,this.rocm_gpu_used=0,this.tpu_total=0,this.tpu_used=0,this.spinner=Object(),this.notification=Object(),this.announcement="",this.height=0}static get styles(){return[p,n,o,u,l`
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
      `]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification}_refreshHealthPanel(){this.activeConnected&&(this._refreshSessionInformation(),this.is_superadmin&&this._refreshAgentInformation())}_refreshSessionInformation(){if(!this.activeConnected)return;this.spinner.show();let e="RUNNING";switch(this.condition){case"running":e="RUNNING";break;case"finished":e="TERMINATED";break;case"archived":default:e="RUNNING"}globalThis.backendaiclient.computeSession.list(["created_at"],e).then((e=>{this.spinner.hide(),this.jobs=e,!e.compute_session_list&&e.legacy_compute_session_list&&(e.compute_session_list=e.legacy_compute_session_list),this.sessions=e.compute_session_list.total_count,this.active&&setTimeout((()=>{this._refreshSessionInformation()}),15e3)})).catch((e=>{this.spinner.hide(),this.jobs=[],this.sessions=0,this.notification.text=d.relieve("Couldn't connect to manager."),this.notification.detail=e,this.notification.show(!0,e)}))}_refreshResourceInformation(){if(this.activeConnected)return globalThis.backendaiclient.resourcePolicy.get(globalThis.backendaiclient.resource_policy).then((e=>{let t=e.keypair_resource_policies;this.resourcePolicy=globalThis.backendaiclient.utils.gqlToObject(t,"name")}))}_refreshAgentInformation(e="running"){if(this.activeConnected){switch(this.condition){case"running":e="ALIVE";break;case"finished":e="TERMINATED";break;case"archived":default:e="ALIVE"}this.spinner.show(),globalThis.backendaiclient.resources.totalResourceInformation().then((t=>{this.spinner.hide(),this.resources=t,this._sync_resource_values(),1==this.active&&setTimeout((()=>{this._refreshAgentInformation(e)}),15e3)})).catch((e=>{this.spinner.hide(),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}}_init_resource_values(){this.resources.cpu={},this.resources.cpu.total=0,this.resources.cpu.used=0,this.resources.cpu.percent=0,this.resources.mem={},this.resources.mem.total=0,this.resources.mem.allocated=0,this.resources.mem.used=0,this.resources.cuda_gpu={},this.resources.cuda_gpu.total=0,this.resources.cuda_gpu.used=0,this.resources.cuda_fgpu={},this.resources.cuda_fgpu.total=0,this.resources.cuda_fgpu.used=0,this.resources.agents={},this.resources.agents.total=0,this.resources.agents.using=0,this.cpu_total_usage_ratio=0,this.cpu_current_usage_ratio=0,this.mem_total_usage_ratio=0,this.mem_current_usage_ratio=0,this.mem_current_usage_percent="0",this.is_admin=!1,this.is_superadmin=!1}_sync_resource_values(){this.manager_version=globalThis.backendaiclient.managerVersion,this.console_version=globalThis.packageVersion,this.cpu_total=this.resources.cpu.total,this.mem_total=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(this.resources.mem.total,"g")).toFixed(2),isNaN(this.resources["cuda.device"].total)?this.cuda_gpu_total=0:this.cuda_gpu_total=this.resources["cuda.device"].total,isNaN(this.resources["cuda.shares"].total)?this.cuda_fgpu_total=0:this.cuda_fgpu_total=this.resources["cuda.shares"].total,this.cpu_used=this.resources.cpu.used,this.cuda_gpu_used=this.resources["cuda.device"].used,this.cuda_fgpu_used=this.resources["cuda.shares"].used,this.cpu_percent=parseFloat(this.resources.cpu.percent).toFixed(2),this.cpu_total_percent=0!==this.cpu_used?(this.cpu_used/this.cpu_total*100).toFixed(2):"0",this.cpu_total_usage_ratio=this.resources.cpu.used/this.resources.cpu.total*100,this.cpu_current_usage_ratio=this.resources.cpu.percent/this.resources.cpu.total,this.mem_used=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(this.resources.mem.used,"g")).toFixed(2),this.mem_allocated=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(this.resources.mem.allocated,"g")).toFixed(2),this.mem_total_usage_ratio=this.resources.mem.allocated/this.resources.mem.total*100,this.mem_current_usage_ratio=this.resources.mem.used/this.resources.mem.total*100,0===this.mem_total_usage_ratio?this.mem_current_usage_percent="0.0":this.mem_current_usage_percent=this.mem_total_usage_ratio.toFixed(2),this.agents=this.resources.agents.total,isNaN(parseFloat(this.mem_current_usage_percent))&&(this.mem_current_usage_percent="0")}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(this._init_resource_values(),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_superadmin=globalThis.backendaiclient.is_superadmin,this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this.activeConnected&&(this._refreshHealthPanel(),this.requestUpdate())}),!0):(this.is_superadmin=globalThis.backendaiclient.is_superadmin,this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this._refreshHealthPanel(),this.requestUpdate()))}_toInt(e){return Math.ceil(e)}_countObject(e){return Object.keys(e).length}_addComma(e){if(void 0===e)return"";return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}render(){return r`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <lablup-activity-panel title="${h("summary.SystemResources")}" elevation="1" narrow height="${this.height}">
        <div slot="message">
          <div class="horizontal justified layout wrap indicators">
            ${this.is_superadmin?r`
              <div class="vertical layout center system-health-indicator">
                <div class="big indicator">${this.agents}</div>
                <span>${m("summary.ConnectedNodes")}</span>
              </div>`:r``}
            <div class="vertical layout center system-health-indicator">
              <div class="big indicator">${this.sessions}</div>
              <span>${h("summary.ActiveSessions")}</span>
            </div>
          </div>
          <div class="vertical-card" style="align-items: flex-start">
            ${this.is_superadmin?r`
            <div class="layout horizontal center flex resource">
              <div class="layout vertical center center-justified resource-name">
                <div class="gauge-name">CPU</div>
              </div>
              <div class="layout vertical start-justified wrap">
                <div class="progress-bar">
                  <span class="gauge-label">
                    ${this._addComma(this.cpu_used)}/${this._addComma(this.cpu_total)} ${h("summary.CoresReserved")}.
                  </span>
                  <wl-progress-bar class="start-bar" mode="determinate"
                      value="${this.cpu_total_usage_ratio/100}"></wl-progress-bar>
                  <!--<mwc-linear-progress class="mem-usage-bar start-bar"
                      progress="${this.cpu_total_usage_ratio/100}"></mwc-linear-progress>-->
                </div>
                <div class="progress-bar">
                  <span class="gauge-label">
                    ${h("summary.Using")} ${this.cpu_total_percent} % (util. ${this.cpu_percent} %)
                  </span>
                  <wl-progress-bar class="end-bar" mode="determinate" id="cpu-usage-bar"
                      value="${this.cpu_current_usage_ratio/100}"></wl-progress-bar>
                  <!--<mwc-linear-progress class="mem-usage-bar end-bar" id="cpu-usage-bar"
                  progress="${this.cpu_current_usage_ratio/100}"
                  buffer="${this.cpu_current_usage_ratio/100}"></mwc-linear-progress>-->
                </div>
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
                <div class="progress-bar">
                  <span class="gauge-label">
                    ${this._addComma(this.mem_allocated)} / ${this._addComma(this.mem_total)} GB ${h("summary.reserved")}.
                  </span>
                  <wl-progress-bar class="start-bar" mode="determinate"
                      value="${this.mem_total_usage_ratio/100}"></wl-progress-bar>
                  <!--<mwc-linear-progress class="mem-usage-bar start-bar" id="mem-usage-bar"
                        progress="${this.mem_total_usage_ratio/100}"></mwc-linear-progress>-->
                </div>
                <div class="progress-bar">
                  <span class="gauge-label">
                    ${h("summary.Using")} ${this._addComma(this.mem_used)} GB
                    (${0!==parseInt(this.mem_used)?(parseInt(this.mem_used)/parseInt(this.mem_total)*100).toFixed(0):"0"} %)
                  </span>
                  <wl-progress-bar class="end-bar" mode="determinate" id="cpu-usage-bar"
                      value="${this.mem_current_usage_ratio/100}"></wl-progress-bar>
                  <!--<mwc-linear-progress class="mem-usage-bar end-bar"
                  progress="${this.mem_current_usage_ratio/100}"
                  buffer="${this.mem_current_usage_ratio/100}"></mwc-linear-progress>-->
                </div>
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
                <div class="progress-bar">
                  <span class="gauge-label">
                    ${this.cuda_gpu_used} / ${this.cuda_gpu_total} CUDA GPUs ${h("summary.reserved")}.
                  </span>
                  <wl-progress-bar class="start-bar" id="gpu-bar" mode="determinate"
                      value="${0!==this.cuda_gpu_used?this.cuda_gpu_used/this.cuda_gpu_total:0}"></wl-progress-bar>
                  <!--<mwc-linear-progress id="gpu-bar"
                  progress="${this.cuda_gpu_used/this.cuda_gpu_total}"></mwc-linear-progress>-->
                </div>
                <div class="progress-bar">
                  <span class="gauge-label">
                    ${h("summary.FractionalGPUScalingEnabled")}.
                  </span>
                  <wl-progress-bar class="end-bar" mode="determinate"
                      value="0"></wl-progress-bar>
                  <!--<mwc-linear-progress class="mem-usage-bar end-bar"
                  progress="" buffer=""></mwc-linear-progress>-->
                </div>
              </div>
              <div class="layout vertical center center-justified">
                <span class="percentage start-bar">${0!==this.cuda_gpu_used?(this.cuda_gpu_used/this.cuda_gpu_total*100).toFixed(1):0}%</span>
                <span class="percentage end-bar">&nbsp;</span>
              </div>
              `:r``}
              ${this.cuda_fgpu_total?r`
              <div class="layout vertical start-justified wrap">
                <div class="progress-bar">
                  <span class="gauge-label">
                    ${this.cuda_fgpu_used} / ${this.cuda_fgpu_total} CUDA fGPUs ${h("summary.reserved")}.
                  </span>
                  <wl-progress-bar class="start-bar" id="gpu-bar" mode="determinate"
                      value="${0!==this.cuda_fgpu_used?this.cuda_fgpu_used/this.cuda_fgpu_total:0}"></wl-progress-bar>
                  <!--<mwc-linear-progress id="gpu-bar"
                  progress="${this.cuda_fgpu_used/this.cuda_fgpu_total}"></mwc-linear-progress>-->
                </div>
                <div class="progress-bar">
                  <span class="gauge-label">
                    ${h("summary.FractionalGPUScalingEnabled")}.
                  </span>
                  <wl-progress-bar class="end-bar" mode="determinate"
                      value="0"></wl-progress-bar>
                  <!--<mwc-linear-progress class="mem-usage-bar end-bar"
                  progress="" buffer=""></mwc-linear-progress>-->
                </div>
              </div>
              <div class="layout vertical center center-justified">
                <span class="percentage start-bar">${0!==this.cuda_fgpu_used?(this.cuda_fgpu_used/this.cuda_fgpu_total*100).toFixed(1):0}%</span>
                <span class="percentage end-bar">&nbsp;</span>
              </div>
              `:r``}
              ${this.rocm_gpu_total?r`
              <div class="layout vertical start-justified wrap">
                <div class="progress-bar">
                  <span class="gauge-label">
                    ${this.rocm_gpu_used} / ${this.rocm_gpu_total} ROCm GPUs ${h("summary.reserved")}.
                  </span>
                  <wl-progress-bar class="start-bar" id="gpu-bar" mode="determinate"
                      value="${0!==this.rocm_gpu_used?this.rocm_gpu_used/100:0}"></wl-progress-bar>
                  <!--<mwc-linear-progress id="rocm-gpu-bar"
                  progress="${this.rocm_gpu_used/100}"
                  buffer="${this.rocm_gpu_used/100}"></mwc-linear-progress>-->
                </div>
                <div class="progress-bar">
                  <span class="gauge-label">
                    ${h("summary.ROCMGPUEnabled")}.
                  </span>
                  <wl-progress-bar class="end-bar" mode="determinate"
                      value="0"></wl-progress-bar>
                  <!--<mwc-linear-progress class="mem-usage-bar end-bar"
                  progress="" buffer=""></mwc-linear-progress>-->
                </div>
              </div>
              <div class="layout vertical center center-justified">
                <span class="percentage start-bar">${this.rocm_gpu_used.toFixed(1)+"%"}</span>
                <span class="percentage end-bar">&nbsp;</span>
              </div>`:r``}
              ${this.tpu_total?r`
              <div class="layout vertical start-justified wrap">
                <div class="progress-bar">
                  <span class="gauge-label">
                    ${this.tpu_used} / ${this.tpu_total} TPUs ${h("summary.reserved")}.
                  </span>
                  <wl-progress-bar class="start-bar" id="gpu-bar" mode="determinate"
                      value="${0!==this.cuda_fgpu_used?this.cuda_fgpu_used/this.cuda_fgpu_total:0}"></wl-progress-bar>
                  <!--<mwc-linear-progress id="tpu-bar" progress="${this.tpu_used/100}"
                  buffer="${this.tpu_used/100}"></mwc-linear-progress>-->
                </div>
                <div class="progress-bar">
                  <span class="gauge-label">
                    ${h("summary.TPUEnabled")}.
                  </span>
                  <wl-progress-bar class="end-bar" mode="determinate"
                      value="0"></wl-progress-bar>
                  <!--<mwc-linear-progress class="mem-usage-bar end-bar"
                  progress="" buffer=""></mwc-linear-progress>-->
                </div>
              </div>
              <div class="layout vertical center center-justified">
                <span class="percentage start-bar">${this.tpu_used.toFixed(1)+"%"}</span>
                <span class="percentage end-bar"></span>
              </div>`:r``}
            </div>`:r``}
            <div class="vertical start layout" style="margin-top:30px;">
              <div class="horizontal layout resource-legend-stack">
                <div class="resource-legend-icon" style="background-color:#4775E3;"></div>
                <span class="resource-legend">${h("summary.Reserved")} ${h("resourcePolicy.Resources")}</span>
              </div>
              <div class="horizontal layout resource-legend-stack">
                <div class="resource-legend-icon" style="background-color:#A0BD67;"></div>
                <span class="resource-legend">${h("summary.Used")} ${h("resourcePolicy.Resources")}</span>
              </div>
              <div class="horizontal layout">
                <div class="resource-legend-icon" style="background-color:#E0E0E0;"></div>
                <span class="resource-legend">${h("summary.Total")} ${h("resourcePolicy.Resources")}</span>
              </div>
            </div>`:r``}
          </div>
        </div>
      </lablup-activity-panel>
`}};e([t({type:String})],f.prototype,"condition",void 0),e([t({type:Number})],f.prototype,"sessions",void 0),e([t({type:Object})],f.prototype,"jobs",void 0),e([t({type:Number})],f.prototype,"agents",void 0),e([t({type:Boolean})],f.prototype,"is_admin",void 0),e([t({type:Boolean})],f.prototype,"is_superadmin",void 0),e([t({type:Object})],f.prototype,"resources",void 0),e([t({type:Boolean})],f.prototype,"authenticated",void 0),e([t({type:String})],f.prototype,"manager_version",void 0),e([t({type:String})],f.prototype,"console_version",void 0),e([t({type:Number})],f.prototype,"cpu_total",void 0),e([t({type:Number})],f.prototype,"cpu_used",void 0),e([t({type:String})],f.prototype,"cpu_percent",void 0),e([t({type:String})],f.prototype,"cpu_total_percent",void 0),e([t({type:Number})],f.prototype,"cpu_total_usage_ratio",void 0),e([t({type:Number})],f.prototype,"cpu_current_usage_ratio",void 0),e([t({type:String})],f.prototype,"mem_total",void 0),e([t({type:String})],f.prototype,"mem_used",void 0),e([t({type:String})],f.prototype,"mem_allocated",void 0),e([t({type:Number})],f.prototype,"mem_total_usage_ratio",void 0),e([t({type:Number})],f.prototype,"mem_current_usage_ratio",void 0),e([t({type:String})],f.prototype,"mem_current_usage_percent",void 0),e([t({type:Number})],f.prototype,"cuda_gpu_total",void 0),e([t({type:Number})],f.prototype,"cuda_gpu_used",void 0),e([t({type:Number})],f.prototype,"cuda_fgpu_total",void 0),e([t({type:Number})],f.prototype,"cuda_fgpu_used",void 0),e([t({type:Number})],f.prototype,"rocm_gpu_total",void 0),e([t({type:Number})],f.prototype,"rocm_gpu_used",void 0),e([t({type:Number})],f.prototype,"tpu_total",void 0),e([t({type:Number})],f.prototype,"tpu_used",void 0),e([t({type:Object})],f.prototype,"spinner",void 0),e([t({type:Object})],f.prototype,"notification",void 0),e([t({type:Object})],f.prototype,"resourcePolicy",void 0),e([t({type:String})],f.prototype,"announcement",void 0),e([t({type:Number})],f.prototype,"height",void 0),f=e([s("backend-ai-resource-panel")],f);var v,y=(function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}}(v={exports:{}},v.exports),v.exports);y.defaults,y.getDefaults,y.changeDefaults;const k=/[&<>"']/,x=/[&<>"']/g,w=/[<>"']|&(?!#?\w+;)/,$=/[<>"']|&(?!#?\w+;)/g,z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},S=e=>z[e];const T=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function A(e){return e.replace(T,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const R=/(^|[^\[])\^/g;const j=/[^\w:]/g,N=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const I={},C=/^[^:]+:\/*[^/]*$/,U=/^([^:]+:)[\s\S]*$/,P=/^([^:]+:\/*[^/]*)[\s\S]*$/;function O(e,t){I[" "+e]||(C.test(e)?I[" "+e]=e+"/":I[" "+e]=q(e,"/",!0));const s=-1===(e=I[" "+e]).indexOf(":");return"//"===t.substring(0,2)?s?t:e.replace(U,"$1")+t:"/"===t.charAt(0)?s?t:e.replace(P,"$1")+t:e+t}function q(e,t,s){const i=e.length;if(0===i)return"";let r=0;for(;r<i;){const a=e.charAt(i-r-1);if(a!==t||s){if(a===t||!s)break;r++}else r++}return e.substr(0,i-r)}var E={escape:function(e,t){if(t){if(k.test(e))return e.replace(x,S)}else if(w.test(e))return e.replace($,S);return e},unescape:A,edit:function(e,t){e=e.source||e,t=t||"";const s={replace:(t,i)=>(i=(i=i.source||i).replace(R,"$1"),e=e.replace(t,i),s),getRegex:()=>new RegExp(e,t)};return s},cleanUrl:function(e,t,s){if(e){let e;try{e=decodeURIComponent(A(s)).replace(j,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!N.test(s)&&(s=O(t,s));try{s=encodeURI(s).replace(/%25/g,"%")}catch(e){return null}return s},resolveUrl:O,noopTest:{exec:function(){}},merge:function(e){let t,s,i=1;for(;i<arguments.length;i++)for(s in t=arguments[i],t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},splitCells:function(e,t){const s=e.replace(/\|/g,((e,t,s)=>{let i=!1,r=t;for(;--r>=0&&"\\"===s[r];)i=!i;return i?"|":" |"})).split(/ \|/);let i=0;if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(/\\\|/g,"|");return s},rtrim:q,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const s=e.length;let i=0,r=0;for(;r<s;r++)if("\\"===e[r])r++;else if(e[r]===t[0])i++;else if(e[r]===t[1]&&(i--,i<0))return r;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},repeatString:function(e,t){if(t<1)return"";let s="";for(;t>1;)1&t&&(s+=e),t>>=1,e+=e;return s+e}};const{defaults:F}=y,{rtrim:L,splitCells:B,escape:Z,findClosingBracket:V}=E;function D(e,t,s){const i=t.href,r=t.title?Z(t.title):null,a=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:s,href:i,title:r,text:a}:{type:"image",raw:s,href:i,title:r,text:Z(a)}}var M=class{constructor(e){this.options=e||F}space(e){const t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}}code(e,t){const s=this.rules.block.code.exec(e);if(s){const e=t[t.length-1];if(e&&"paragraph"===e.type)return{raw:s[0],text:s[0].trimRight()};const i=s[0].replace(/^ {4}/gm,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?i:L(i,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],s=function(e,t){const s=e.match(/^(\s+)(?:```)/);if(null===s)return t;const i=s[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[s]=t;return s.length>=i.length?e.slice(i.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[1].length,text:t[2]}}nptable(e){const t=this.rules.block.nptable.exec(e);if(t){const e={type:"table",header:B(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(e.header.length===e.align.length){let t,s=e.align.length;for(t=0;t<s;t++)/^ *-+: *$/.test(e.align[t])?e.align[t]="right":/^ *:-+: *$/.test(e.align[t])?e.align[t]="center":/^ *:-+ *$/.test(e.align[t])?e.align[t]="left":e.align[t]=null;for(s=e.cells.length,t=0;t<s;t++)e.cells[t]=B(e.cells[t],e.header.length);return e}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:e}}}list(e){const t=this.rules.block.list.exec(e);if(t){let e=t[0];const s=t[2],i=s.length>1,r=")"===s[s.length-1],a={type:"list",raw:e,ordered:i,start:i?+s.slice(0,-1):"",loose:!1,items:[]},n=t[0].match(this.rules.block.item);let o,l,c,p,u,d,h,g=!1;const m=n.length;for(let t=0;t<m;t++)o=n[t],e=o,l=o.length,o=o.replace(/^ *([*+-]|\d+[.)]) ?/,""),~o.indexOf("\n ")&&(l-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+l+"}","gm"),"")),t!==m-1&&(c=this.rules.block.bullet.exec(n[t+1])[0],(i?1===c.length||!r&&")"===c[c.length-1]:c.length>1||this.options.smartLists&&c!==s)&&(p=n.slice(t+1).join("\n"),a.raw=a.raw.substring(0,a.raw.length-p.length),t=m-1)),u=g||/\n\n(?!\s*$)/.test(o),t!==m-1&&(g="\n"===o.charAt(o.length-1),u||(u=g)),u&&(a.loose=!0),d=/^\[[ xX]\] /.test(o),h=void 0,d&&(h=" "!==o[1],o=o.replace(/^\[[ xX]\] +/,"")),a.items.push({type:"list_item",raw:e,task:d,checked:h,loose:u,text:o});return a}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):Z(t[0]):t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));return{tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:B(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let s,i=e.align.length;for(s=0;s<i;s++)/^ *-+: *$/.test(e.align[s])?e.align[s]="right":/^ *:-+: *$/.test(e.align[s])?e.align[s]="center":/^ *:-+ *$/.test(e.align[s])?e.align[s]="left":e.align[s]=null;for(i=e.cells.length,s=0;s<i;s++)e.cells[s]=B(e.cells[s].replace(/^ *\| *| *\| *$/g,""),e.header.length);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}}text(e,t){const s=this.rules.block.text.exec(e);if(s){const e=t[t.length-1];return e&&"text"===e.type?{raw:s[0],text:s[0]}:{type:"text",raw:s[0],text:s[0]}}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:Z(t[1])}}tag(e,t,s){const i=this.rules.inline.tag.exec(e);if(i)return!t&&/^<a /i.test(i[0])?t=!0:t&&/^<\/a>/i.test(i[0])&&(t=!1),!s&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?s=!0:s&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(s=!1),{type:this.options.sanitize?"text":"html",raw:i[0],inLink:t,inRawBlock:s,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):Z(i[0]):i[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=V(t[2],"()");if(e>-1){const s=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,s).trim(),t[3]=""}let s=t[2],i="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);e?(s=e[1],i=e[3]):i=""}else i=t[3]?t[3].slice(1,-1):"";s=s.trim().replace(/^<([\s\S]*)>$/,"$1");return D(t,{href:s?s.replace(this.rules.inline._escapes,"$1"):s,title:i?i.replace(this.rules.inline._escapes,"$1"):i},t[0])}}reflink(e,t){let s;if((s=this.rules.inline.reflink.exec(e))||(s=this.rules.inline.nolink.exec(e))){let e=(s[2]||s[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=s[0].charAt(0);return{type:"text",raw:e,text:e}}return D(s,e,s[0])}}strong(e,t,s=""){let i=this.rules.inline.strong.start.exec(e);if(i&&(!i[1]||i[1]&&(""===s||this.rules.inline.punctuation.exec(s)))){t=t.slice(-1*e.length);const s="**"===i[0]?this.rules.inline.strong.endAst:this.rules.inline.strong.endUnd;let r;for(s.lastIndex=0;null!=(i=s.exec(t));)if(r=this.rules.inline.strong.middle.exec(t.slice(0,i.index+3)),r)return{type:"strong",raw:e.slice(0,r[0].length),text:e.slice(2,r[0].length-2)}}}em(e,t,s=""){let i=this.rules.inline.em.start.exec(e);if(i&&(!i[1]||i[1]&&(""===s||this.rules.inline.punctuation.exec(s)))){t=t.slice(-1*e.length);const s="*"===i[0]?this.rules.inline.em.endAst:this.rules.inline.em.endUnd;let r;for(s.lastIndex=0;null!=(i=s.exec(t));)if(r=this.rules.inline.em.middle.exec(t.slice(0,i.index+2)),r)return{type:"em",raw:e.slice(0,r[0].length),text:e.slice(1,r[0].length-1)}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const s=/[^ ]/.test(e),i=e.startsWith(" ")&&e.endsWith(" ");return s&&i&&(e=e.substring(1,e.length-1)),e=Z(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[1]}}autolink(e,t){const s=this.rules.inline.autolink.exec(e);if(s){let e,i;return"@"===s[2]?(e=Z(this.options.mangle?t(s[1]):s[1]),i="mailto:"+e):(e=Z(s[1]),i=e),{type:"link",raw:s[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let s;if(s=this.rules.inline.url.exec(e)){let e,i;if("@"===s[2])e=Z(this.options.mangle?t(s[0]):s[0]),i="mailto:"+e;else{let t;do{t=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])[0]}while(t!==s[0]);e=Z(s[0]),i="www."===s[1]?"http://"+e:e}return{type:"link",raw:s[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t,s){const i=this.rules.inline.text.exec(e);if(i){let e;return e=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):Z(i[0]):i[0]:Z(this.options.smartypants?s(i[0]):i[0]),{type:"text",raw:i[0],text:e}}}};const{noopTest:G,edit:H,merge:Y}=E,K={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:G,table:G,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};K.def=H(K.def).replace("label",K._label).replace("title",K._title).getRegex(),K.bullet=/(?:[*+-]|\d{1,9}[.)])/,K.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,K.item=H(K.item,"gm").replace(/bull/g,K.bullet).getRegex(),K.list=H(K.list).replace(/bull/g,K.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+K.def.source+")").getRegex(),K._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",K._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,K.html=H(K.html,"i").replace("comment",K._comment).replace("tag",K._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),K.paragraph=H(K._paragraph).replace("hr",K.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",K._tag).getRegex(),K.blockquote=H(K.blockquote).replace("paragraph",K.paragraph).getRegex(),K.normal=Y({},K),K.gfm=Y({},K.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),K.gfm.nptable=H(K.gfm.nptable).replace("hr",K.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",K._tag).getRegex(),K.gfm.table=H(K.gfm.table).replace("hr",K.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",K._tag).getRegex(),K.pedantic=Y({},K.normal,{html:H("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",K._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:G,paragraph:H(K.normal._paragraph).replace("hr",K.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",K.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const W={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:G,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",strong:{start:/^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,middle:/^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,endAst:/[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/},em:{start:/^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,middle:/^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,endAst:/[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:G,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\s*punctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};W.punctuation=H(W.punctuation).replace(/punctuation/g,W._punctuation).getRegex(),W._blockSkip="\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>",W._overlapSkip="__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*",W._comment=H(K._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),W.em.start=H(W.em.start).replace(/punctuation/g,W._punctuation).getRegex(),W.em.middle=H(W.em.middle).replace(/punctuation/g,W._punctuation).replace(/overlapSkip/g,W._overlapSkip).getRegex(),W.em.endAst=H(W.em.endAst,"g").replace(/punctuation/g,W._punctuation).getRegex(),W.em.endUnd=H(W.em.endUnd,"g").replace(/punctuation/g,W._punctuation).getRegex(),W.strong.start=H(W.strong.start).replace(/punctuation/g,W._punctuation).getRegex(),W.strong.middle=H(W.strong.middle).replace(/punctuation/g,W._punctuation).replace(/overlapSkip/g,W._overlapSkip).getRegex(),W.strong.endAst=H(W.strong.endAst,"g").replace(/punctuation/g,W._punctuation).getRegex(),W.strong.endUnd=H(W.strong.endUnd,"g").replace(/punctuation/g,W._punctuation).getRegex(),W.blockSkip=H(W._blockSkip,"g").getRegex(),W.overlapSkip=H(W._overlapSkip,"g").getRegex(),W._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,W._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,W._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,W.autolink=H(W.autolink).replace("scheme",W._scheme).replace("email",W._email).getRegex(),W._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,W.tag=H(W.tag).replace("comment",W._comment).replace("attribute",W._attribute).getRegex(),W._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,W._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,W._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,W.link=H(W.link).replace("label",W._label).replace("href",W._href).replace("title",W._title).getRegex(),W.reflink=H(W.reflink).replace("label",W._label).getRegex(),W.reflinkSearch=H(W.reflinkSearch,"g").replace("reflink",W.reflink).replace("nolink",W.nolink).getRegex(),W.normal=Y({},W),W.pedantic=Y({},W.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:H(/^!?\[(label)\]\((.*?)\)/).replace("label",W._label).getRegex(),reflink:H(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",W._label).getRegex()}),W.gfm=Y({},W.normal,{escape:H(W.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),W.gfm.url=H(W.gfm.url,"i").replace("email",W.gfm._extended_email).getRegex(),W.breaks=Y({},W.gfm,{br:H(W.br).replace("{2,}","*").getRegex(),text:H(W.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var X={block:K,inline:W};const{defaults:J}=y,{block:Q,inline:ee}=X,{repeatString:te}=E;function se(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ie(e){let t,s,i="";const r=e.length;for(t=0;t<r;t++)s=e.charCodeAt(t),Math.random()>.5&&(s="x"+s.toString(16)),i+="&#"+s+";";return i}var re=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||J,this.options.tokenizer=this.options.tokenizer||new M,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;const t={block:Q.normal,inline:ee.normal};this.options.pedantic?(t.block=Q.pedantic,t.inline=ee.pedantic):this.options.gfm&&(t.block=Q.gfm,this.options.breaks?t.inline=ee.breaks:t.inline=ee.gfm),this.tokenizer.rules=t}static get rules(){return{block:Q,inline:ee}}static lex(t,s){return new e(s).lex(t)}static lexInline(t,s){return new e(s).inlineTokens(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens}blockTokens(e,t=[],s=!0){let i,r,a,n;for(e=e.replace(/^ +$/gm,"");e;)if(i=this.tokenizer.space(e))e=e.substring(i.raw.length),i.type&&t.push(i);else if(i=this.tokenizer.code(e,t))e=e.substring(i.raw.length),i.type?t.push(i):(n=t[t.length-1],n.raw+="\n"+i.raw,n.text+="\n"+i.text);else if(i=this.tokenizer.fences(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.heading(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.nptable(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.hr(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.blockquote(e))e=e.substring(i.raw.length),i.tokens=this.blockTokens(i.text,[],s),t.push(i);else if(i=this.tokenizer.list(e)){for(e=e.substring(i.raw.length),a=i.items.length,r=0;r<a;r++)i.items[r].tokens=this.blockTokens(i.items[r].text,[],!1);t.push(i)}else if(i=this.tokenizer.html(e))e=e.substring(i.raw.length),t.push(i);else if(s&&(i=this.tokenizer.def(e)))e=e.substring(i.raw.length),this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});else if(i=this.tokenizer.table(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.lheading(e))e=e.substring(i.raw.length),t.push(i);else if(s&&(i=this.tokenizer.paragraph(e)))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.text(e,t))e=e.substring(i.raw.length),i.type?t.push(i):(n=t[t.length-1],n.raw+="\n"+i.raw,n.text+="\n"+i.text);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}return t}inline(e){let t,s,i,r,a,n;const o=e.length;for(t=0;t<o;t++)switch(n=e[t],n.type){case"paragraph":case"text":case"heading":n.tokens=[],this.inlineTokens(n.text,n.tokens);break;case"table":for(n.tokens={header:[],cells:[]},r=n.header.length,s=0;s<r;s++)n.tokens.header[s]=[],this.inlineTokens(n.header[s],n.tokens.header[s]);for(r=n.cells.length,s=0;s<r;s++)for(a=n.cells[s],n.tokens.cells[s]=[],i=0;i<a.length;i++)n.tokens.cells[s][i]=[],this.inlineTokens(a[i],n.tokens.cells[s][i]);break;case"blockquote":this.inline(n.tokens);break;case"list":for(r=n.items.length,s=0;s<r;s++)this.inline(n.items[s].tokens)}return e}inlineTokens(e,t=[],s=!1,i=!1,r=""){let a,n,o=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(n=this.tokenizer.rules.inline.reflinkSearch.exec(o));)e.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,n.index)+"["+te("a",n[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(n=this.tokenizer.rules.inline.blockSkip.exec(o));)o=o.slice(0,n.index)+"["+te("a",n[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;e;)if(a=this.tokenizer.escape(e))e=e.substring(a.raw.length),t.push(a);else if(a=this.tokenizer.tag(e,s,i))e=e.substring(a.raw.length),s=a.inLink,i=a.inRawBlock,t.push(a);else if(a=this.tokenizer.link(e))e=e.substring(a.raw.length),"link"===a.type&&(a.tokens=this.inlineTokens(a.text,[],!0,i)),t.push(a);else if(a=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(a.raw.length),"link"===a.type&&(a.tokens=this.inlineTokens(a.text,[],!0,i)),t.push(a);else if(a=this.tokenizer.strong(e,o,r))e=e.substring(a.raw.length),a.tokens=this.inlineTokens(a.text,[],s,i),t.push(a);else if(a=this.tokenizer.em(e,o,r))e=e.substring(a.raw.length),a.tokens=this.inlineTokens(a.text,[],s,i),t.push(a);else if(a=this.tokenizer.codespan(e))e=e.substring(a.raw.length),t.push(a);else if(a=this.tokenizer.br(e))e=e.substring(a.raw.length),t.push(a);else if(a=this.tokenizer.del(e))e=e.substring(a.raw.length),a.tokens=this.inlineTokens(a.text,[],s,i),t.push(a);else if(a=this.tokenizer.autolink(e,ie))e=e.substring(a.raw.length),t.push(a);else if(s||!(a=this.tokenizer.url(e,ie))){if(a=this.tokenizer.inlineText(e,i,se))e=e.substring(a.raw.length),r=a.raw.slice(-1),t.push(a);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(a.raw.length),t.push(a);return t}};const{defaults:ae}=y,{cleanUrl:ne,escape:oe}=E;var le=class{constructor(e){this.options=e||ae}code(e,t,s){const i=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,i);null!=t&&t!==e&&(s=!0,e=t)}return i?'<pre><code class="'+this.options.langPrefix+oe(i,!0)+'">'+(s?e:oe(e,!0))+"</code></pre>\n":"<pre><code>"+(s?e:oe(e,!0))+"</code></pre>\n"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,s,i){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+i.slug(s)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,s){const i=t?"ol":"ul";return"<"+i+(t&&1!==s?' start="'+s+'"':"")+">\n"+e+"</"+i+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const s=t.header?"th":"td";return(t.align?"<"+s+' align="'+t.align+'">':"<"+s+">")+e+"</"+s+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,s){if(null===(e=ne(this.options.sanitize,this.options.baseUrl,e)))return s;let i='<a href="'+oe(e)+'"';return t&&(i+=' title="'+t+'"'),i+=">"+s+"</a>",i}image(e,t,s){if(null===(e=ne(this.options.sanitize,this.options.baseUrl,e)))return s;let i='<img src="'+e+'" alt="'+s+'"';return t&&(i+=' title="'+t+'"'),i+=this.options.xhtml?"/>":">",i}text(e){return e}},ce=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,s){return""+s}image(e,t,s){return""+s}br(){return""}},pe=class{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let s=e,i=0;if(this.seen.hasOwnProperty(s)){i=this.seen[e];do{i++,s=e+"-"+i}while(this.seen.hasOwnProperty(s))}return t||(this.seen[e]=i,this.seen[s]=0),s}slug(e,t={}){const s=this.serialize(e);return this.getNextSafeSlug(s,t.dryrun)}};const{defaults:ue}=y,{unescape:de}=E;var he=class e{constructor(e){this.options=e||ue,this.options.renderer=this.options.renderer||new le,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ce,this.slugger=new pe}static parse(t,s){return new e(s).parse(t)}static parseInline(t,s){return new e(s).parseInline(t)}parse(e,t=!0){let s,i,r,a,n,o,l,c,p,u,d,h,g,m,b,_,f,v,y="";const k=e.length;for(s=0;s<k;s++)switch(u=e[s],u.type){case"space":continue;case"hr":y+=this.renderer.hr();continue;case"heading":y+=this.renderer.heading(this.parseInline(u.tokens),u.depth,de(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":y+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(c="",l="",a=u.header.length,i=0;i<a;i++)l+=this.renderer.tablecell(this.parseInline(u.tokens.header[i]),{header:!0,align:u.align[i]});for(c+=this.renderer.tablerow(l),p="",a=u.cells.length,i=0;i<a;i++){for(o=u.tokens.cells[i],l="",n=o.length,r=0;r<n;r++)l+=this.renderer.tablecell(this.parseInline(o[r]),{header:!1,align:u.align[r]});p+=this.renderer.tablerow(l)}y+=this.renderer.table(c,p);continue;case"blockquote":p=this.parse(u.tokens),y+=this.renderer.blockquote(p);continue;case"list":for(d=u.ordered,h=u.start,g=u.loose,a=u.items.length,p="",i=0;i<a;i++)b=u.items[i],_=b.checked,f=b.task,m="",b.task&&(v=this.renderer.checkbox(_),g?b.tokens.length>0&&"text"===b.tokens[0].type?(b.tokens[0].text=v+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&"text"===b.tokens[0].tokens[0].type&&(b.tokens[0].tokens[0].text=v+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:v}):m+=v),m+=this.parse(b.tokens,g),p+=this.renderer.listitem(m,f,_);y+=this.renderer.list(p,d,h);continue;case"html":y+=this.renderer.html(u.text);continue;case"paragraph":y+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(p=u.tokens?this.parseInline(u.tokens):u.text;s+1<k&&"text"===e[s+1].type;)u=e[++s],p+="\n"+(u.tokens?this.parseInline(u.tokens):u.text);y+=t?this.renderer.paragraph(p):p;continue;default:{const e='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return y}parseInline(e,t){t=t||this.renderer;let s,i,r="";const a=e.length;for(s=0;s<a;s++)switch(i=e[s],i.type){case"escape":r+=t.text(i.text);break;case"html":r+=t.html(i.text);break;case"link":r+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break;case"image":r+=t.image(i.href,i.title,i.text);break;case"strong":r+=t.strong(this.parseInline(i.tokens,t));break;case"em":r+=t.em(this.parseInline(i.tokens,t));break;case"codespan":r+=t.codespan(i.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(i.tokens,t));break;case"text":r+=t.text(i.text);break;default:{const e='Token with "'+i.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return r}};const{merge:ge,checkSanitizeDeprecation:me,escape:be}=E,{getDefaults:_e,changeDefaults:fe,defaults:ve}=y;function ye(e,t,s){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(s=t,t=null),t=ge({},ye.defaults,t||{}),me(t),s){const i=t.highlight;let r;try{r=re.lex(e,t)}catch(e){return s(e)}const a=function(e){let a;if(!e)try{a=he.parse(r,t)}catch(t){e=t}return t.highlight=i,e?s(e):s(null,a)};if(!i||i.length<3)return a();if(delete t.highlight,!r.length)return a();let n=0;return ye.walkTokens(r,(function(e){"code"===e.type&&(n++,setTimeout((()=>{i(e.text,e.lang,(function(t,s){if(t)return a(t);null!=s&&s!==e.text&&(e.text=s,e.escaped=!0),n--,0===n&&a()}))}),0))})),void(0===n&&a())}try{const s=re.lex(e,t);return t.walkTokens&&ye.walkTokens(s,t.walkTokens),he.parse(s,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+be(e.message+"",!0)+"</pre>";throw e}}ye.options=ye.setOptions=function(e){return ge(ye.defaults,e),fe(ye.defaults),ye},ye.getDefaults=_e,ye.defaults=ve,ye.use=function(e){const t=ge({},e);if(e.renderer){const s=ye.defaults.renderer||new le;for(const t in e.renderer){const i=s[t];s[t]=(...r)=>{let a=e.renderer[t].apply(s,r);return!1===a&&(a=i.apply(s,r)),a}}t.renderer=s}if(e.tokenizer){const s=ye.defaults.tokenizer||new M;for(const t in e.tokenizer){const i=s[t];s[t]=(...r)=>{let a=e.tokenizer[t].apply(s,r);return!1===a&&(a=i.apply(s,r)),a}}t.tokenizer=s}if(e.walkTokens){const s=ye.defaults.walkTokens;t.walkTokens=t=>{e.walkTokens(t),s&&s(t)}}ye.setOptions(t)},ye.walkTokens=function(e,t){for(const s of e)switch(t(s),s.type){case"table":for(const e of s.tokens.header)ye.walkTokens(e,t);for(const e of s.tokens.cells)for(const s of e)ye.walkTokens(s,t);break;case"list":ye.walkTokens(s.items,t);break;default:s.tokens&&ye.walkTokens(s.tokens,t)}},ye.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=ge({},ye.defaults,t||{}),me(t);try{const s=re.lexInline(e,t);return t.walkTokens&&ye.walkTokens(s,t.walkTokens),he.parseInline(s,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+be(e.message+"",!0)+"</pre>";throw e}},ye.Parser=he,ye.parser=he.parse,ye.Renderer=le,ye.TextRenderer=ce,ye.Lexer=re,ye.lexer=re.lex,ye.Tokenizer=M,ye.Slugger=pe,ye.parse=ye;var ke=ye;
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let xe=class extends c{constructor(){super(),this.condition="running",this.sessions=0,this.jobs=Object(),this.agents=0,this.is_admin=!1,this.is_superadmin=!1,this.resources=Object(),this.update_checker=Object(),this.authenticated=!1,this.manager_version="",this.console_version="",this.cpu_total=0,this.cpu_used=0,this.cpu_percent="0",this.cpu_total_percent="0",this.cpu_total_usage_ratio=0,this.cpu_current_usage_ratio=0,this.mem_total="0",this.mem_used="0",this.mem_allocated="0",this.mem_total_usage_ratio=0,this.mem_current_usage_ratio=0,this.mem_current_usage_percent="0",this.cuda_gpu_total=0,this.cuda_gpu_used=0,this.cuda_fgpu_total=0,this.cuda_fgpu_used=0,this.rocm_gpu_total=0,this.rocm_gpu_used=0,this.tpu_total=0,this.tpu_used=0,this.spinner=Object(),this.notification=Object(),this.announcement="",this.invitations=[]}static get styles(){return[p,n,o,u,l`
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
          --component-height: 57px;
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
      `]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification,this.update_checker=this.shadowRoot.querySelector("#update-checker"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._readAnnouncement()}),!0):this._readAnnouncement()}_refreshConsoleUpdateInformation(){this.is_superadmin&&globalThis.backendaioptions.get("automatic_update_check",!0)&&this.update_checker.checkRelease()}async _viewStateChanged(e){await this.updateComplete,!1!==e?(this.shadowRoot.querySelector("#resource-monitor").setAttribute("active","true"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_superadmin=globalThis.backendaiclient.is_superadmin,this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this.manager_version=globalThis.backendaiclient.managerVersion,this.console_version=globalThis.packageVersion,this.activeConnected&&(this._refreshConsoleUpdateInformation(),this._refreshInvitations(),this.requestUpdate())}),!0):(this.is_superadmin=globalThis.backendaiclient.is_superadmin,this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this.manager_version=globalThis.backendaiclient.managerVersion,this.console_version=globalThis.packageVersion,this._refreshConsoleUpdateInformation(),this._refreshInvitations(),this.requestUpdate())):this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active")}_readAnnouncement(){this.activeConnected&&globalThis.backendaiclient.service.get_announcement().then((e=>{"message"in e&&(this.announcement=ke(e.message))})).catch((e=>{}))}_toInt(e){return Math.ceil(e)}_countObject(e){return Object.keys(e).length}_addComma(e){if(void 0===e)return"";return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}_refreshInvitations(e=!1){this.activeConnected&&globalThis.backendaiclient.vfolder.invitations().then((t=>{this.invitations=t.invitations,this.active&&!e&&setTimeout((()=>{this._refreshInvitations()}),15e3)}))}_acceptInvitation(e,t){if(!this.activeConnected)return;let s=e.target.closest("lablup-activity-panel");globalThis.backendaiclient.vfolder.accept_invitation(t.id).then((e=>{s.setAttribute("disabled","true"),s.querySelectorAll("wl-button").forEach((e=>{e.setAttribute("disabled","true")})),this.notification.text="You can now access folder: "+t.vfolder_name,this.notification.show(),this._refreshInvitations(!0)})).catch((e=>{this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)}))}_deleteInvitation(e,t){if(!this.activeConnected)return;let s=e.target.closest("lablup-activity-panel");globalThis.backendaiclient.vfolder.delete_invitation(t.id).then((e=>{s.setAttribute("disabled","true"),s.querySelectorAll("mwc-button").forEach((e=>{e.setAttribute("disabled","true")})),this.notification.text="Folder invitation is deleted: "+t.vfolder_name,this.notification.show(),this._refreshInvitations(!0)}))}_stripHTMLTags(e){return e.replace(/(<([^>]+)>)/gi,"")}render(){return r`
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
          <lablup-activity-panel title="${h("summary.StartMenu")}" elevation="1" height="500">
            <div slot="message">
              <img src="/resources/images/launcher-background.png" style="width:300px;margin-bottom:30px;"/>
              <div class="horizontal center-justified layout wrap">
                <backend-ai-session-launcher location="summary" id="session-launcher" ?active="${!0===this.active}"></backend-ai-session-launcher>
              </div>
              <div class="horizontal center-justified layout wrap">
                <a href="/data" class="vertical center center-justified layout start-menu-items">
                  <i class="fas fa-upload fa-2x"></i>
                  <span>${h("summary.UploadFiles")}</span>
                </a>
                ${this.is_admin?r`
                  <a href="/credential" class="vertical center center-justified layout start-menu-items" style="border-left:1px solid #ccc;">
                    <i class="fas fa-key fa-2x"></i>
                    <span>${h("summary.CreateANewKeypair")}</span>
                  </a>
                  <a href="/credential" class="vertical center center-justified layout start-menu-items" style="border-left:1px solid #ccc;">
                    <i class="fas fa-cogs fa-2x"></i>
                    <span>${h("summary.MaintainKeypairs")}</span>
                  </a>
                `:r``}
              </div>
            </div>
          </lablup-activity-panel>
          <lablup-activity-panel title="${h("summary.ResourceStatistics")}" elevation="1" narrow height="500">
            <div slot="message">
                <backend-ai-resource-monitor location="summary" id="resource-monitor" ?active="${!0===this.active}" direction="vertical"></backend-ai-resource-monitor>
            </div>
          </lablup-activity-panel>
          <backend-ai-resource-panel ?active="${!0===this.active}" height="500"></backend-ai-resource-panel>
          ${""!=this.announcement?r`
            <lablup-activity-panel title="${h("summary.Announcement")}" elevation="1">
              <div slot="message">
                ${g(this.announcement)}
              </div>
            </lablup-activity-panel>
            `:r``}
          ${this.invitations?this.invitations.map((e=>r`
            <lablup-activity-panel title="${h("summary.Invitation")}">
              <div slot="message">
                <h3>From ${e.inviter}</h3>
                <span class="invitation_folder_name">${h("summary.FolderName")}>: ${e.vfolder_name}</span>
                <div class="horizontal center layout">
                  ${h("summary.Permission")}>:
                  ${[...e.perm].map((e=>r`
                      <lablup-shields app="" color="${["green","blue","red"][["r","w","d"].indexOf(e)]}"
                              description="${e.toUpperCase()}" ui="flat"></lablup-shields>`))}
                </div>
                <div style="margin-top:25px;" class="horizontal layout justified">
                  <mwc-button
                      unelevated
                      icon="add"
                      label="${h("summary.Accept")}"
                      @click="${t=>this._acceptInvitation(t,e)}"></mwc-button>
                  <span class="flex"></span>
                  <mwc-button
                      outlined
                      icon="remove"
                      label="${h("summary.Decline")}"
                      @click="${t=>this._deleteInvitation(t,e)}"></mwc-button>
                </div>
              </div>
            </lablup-activity-panel>
            `)):r``}
          </div>
          <div class="vertical layout">
            ${this.is_admin?r`
              <div class="horizontal layout wrap">
                <div class="vertical layout">
                  <div class="line"></div>
                  <div class="horizontal layout flex wrap">
                    <lablup-activity-panel noheader autowidth style="display: none;">
                      <div slot="message" class="vertical layout center start-justified flex upper-space">
                        <h3 style="margin-top:0px;">${h("summary.CurrentVersion")}</h3>
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
                    <lablup-activity-panel noheader autowidth>
                      <div slot="message" class="layout horizontal center center-justified flex upper-space">
                          <a href="/environment">
                            <div class="layout horizontal center center-justified flex"  style="font-size:14px;">
                              <i class="fas fa-sync-alt larger left-end-icon"></i>
                              ${h("summary.UpdateEnvironmentImages")}
                              <i class="fas fa-chevron-right right-end-icon"></i>
                            </div>
                          </a>
                      </div>
                    </lablup-activity-panel>
                    <lablup-activity-panel noheader autowidth>
                      <div slot="message" class="layout horizontal center center-justified flex upper-space">
                        <a href="/agent">
                          <div class="layout horizontal center center-justified flex" style="font-size:14px;">
                            <i class="fas fa-box larger left-end-icon"></i>
                            ${h("summary.CheckResources")}
                            <i class="fas fa-chevron-right right-end-icon"></i>
                          </div>
                        </a>
                      </div>
                    </lablup-activity-panel>
                    <lablup-activity-panel noheader autowidth>
                      <div slot="message" class="layout horizontal center center-justified flex upper-space">
                          <a href="/settings">
                            <div class="layout horizontal center center-justified flex"  style="font-size:14px;">
                              <i class="fas fa-desktop larger left-end-icon"></i>
                              ${h("summary.ChangeSystemSetting")}
                              <i class="fas fa-chevron-right right-end-icon"></i>
                            </div>
                          </a>
                      </div>
                    </lablup-activity-panel>
                    <lablup-activity-panel noheader autowidth>
                      <div slot="message" class="layout horizontal center center-justified flex upper-space">
                          <a href="/environment">
                            <div class="layout horizontal center center-justified flex"  style="font-size:14px;">
                              <i class="fas fa-tools larger left-end-icon"></i>
                              ${h("summary.SystemMaintenance")}
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
  `}};e([t({type:String})],xe.prototype,"condition",void 0),e([t({type:Number})],xe.prototype,"sessions",void 0),e([t({type:Object})],xe.prototype,"jobs",void 0),e([t({type:Number})],xe.prototype,"agents",void 0),e([t({type:Boolean})],xe.prototype,"is_admin",void 0),e([t({type:Boolean})],xe.prototype,"is_superadmin",void 0),e([t({type:Object})],xe.prototype,"resources",void 0),e([t({type:Object})],xe.prototype,"update_checker",void 0),e([t({type:Boolean})],xe.prototype,"authenticated",void 0),e([t({type:String})],xe.prototype,"manager_version",void 0),e([t({type:String})],xe.prototype,"console_version",void 0),e([t({type:Number})],xe.prototype,"cpu_total",void 0),e([t({type:Number})],xe.prototype,"cpu_used",void 0),e([t({type:String})],xe.prototype,"cpu_percent",void 0),e([t({type:String})],xe.prototype,"cpu_total_percent",void 0),e([t({type:Number})],xe.prototype,"cpu_total_usage_ratio",void 0),e([t({type:Number})],xe.prototype,"cpu_current_usage_ratio",void 0),e([t({type:String})],xe.prototype,"mem_total",void 0),e([t({type:String})],xe.prototype,"mem_used",void 0),e([t({type:String})],xe.prototype,"mem_allocated",void 0),e([t({type:Number})],xe.prototype,"mem_total_usage_ratio",void 0),e([t({type:Number})],xe.prototype,"mem_current_usage_ratio",void 0),e([t({type:String})],xe.prototype,"mem_current_usage_percent",void 0),e([t({type:Number})],xe.prototype,"cuda_gpu_total",void 0),e([t({type:Number})],xe.prototype,"cuda_gpu_used",void 0),e([t({type:Number})],xe.prototype,"cuda_fgpu_total",void 0),e([t({type:Number})],xe.prototype,"cuda_fgpu_used",void 0),e([t({type:Number})],xe.prototype,"rocm_gpu_total",void 0),e([t({type:Number})],xe.prototype,"rocm_gpu_used",void 0),e([t({type:Number})],xe.prototype,"tpu_total",void 0),e([t({type:Number})],xe.prototype,"tpu_used",void 0),e([t({type:Object})],xe.prototype,"spinner",void 0),e([t({type:Object})],xe.prototype,"notification",void 0),e([t({type:Object})],xe.prototype,"resourcePolicy",void 0),e([t({type:String})],xe.prototype,"announcement",void 0),xe=e([s("backend-ai-summary-view")],xe);var we=xe;export default we;
