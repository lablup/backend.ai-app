import{_ as e,p as t,c as i,B as a,d as s,I as r,a as o,b as n,f as l,a3 as d,h as c,t as u,g as p}from"./backend-ai-console-bf343de1.js";import"./mwc-tab-bar-58fe4f29.js";import"./lablup-activity-panel-ffd4d5dd.js";import"./vaadin-grid-sorter-19260d21.js";import"./vaadin-grid-sort-column-a9880cbe.js";import"./lablup-progress-bar-079f88df.js";import"./input-behavior-023cba33.js";import"./select-c9ec1be8.js";import"./switch-f464e14c.js";import"./textarea-42d442cc.js";import"./textfield-67e7f371.js";import"./mwc-switch-cafd197d.js";import"./mwc-textarea-9f4abb92.js";
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let g=class extends a{constructor(){super(),this.condition="running",this.useHardwareMetadata=!1,this.agents=Array(),this.agentsObject=Object(),this.agentDetail=Object(),this.notification=Object(),this.agentDetailDialog=Object(),this._boundEndpointRenderer=this.endpointRenderer.bind(this),this._boundRegionRenderer=this.regionRenderer.bind(this),this._boundContactDateRenderer=this.contactDateRenderer.bind(this),this._boundResourceRenderer=this.resourceRenderer.bind(this),this._boundStatusRenderer=this.statusRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this),this.filter=""}static get styles(){return[s,r,o,n`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: var(--list-height, calc(100vh - 200px));
        }

        mwc-icon {
          --mdc-icon-size: 16px;
        }

        img.indicator-icon {
          width: 16px !important;
          height: 16px !important;
        }

        paper-icon-button {
          --paper-icon-button: {
            width: 25px;
            height: 25px;
            min-width: 25px;
            min-height: 25px;
            padding: 3px;
            margin-right: 5px;
          };
        }

        div.indicator,
        span.indicator {
          font-size: 9px;
          margin-right: 5px;
        }

        #agent-detail {
          --component-max-width: 90%;
        }

        lablup-progress-bar {
          width: 100px;
          border-radius: 3px;
          height: 10px;
          --mdc-theme-primary: #3677eb;
          --mdc-linear-progress-buffer-color: #98be5a;
        }

        lablup-progress-bar.cpu {
          --progress-bar-height: 5px;
          margin-bottom: 0;
        }

        lablup-progress-bar.cuda {
          --progress-bar-height: 15px;
          margin-bottom: 5px;
        }

        lablup-progress-bar.mem {
          --progress-bar-height: 15px;
          width: 100px;
          margin-bottom: 0;
        }

        lablup-shields {
          margin: 1px;
        }

        .resource-indicator {
          width: 100px !important;
        }

      `]}firstUpdated(){this.notification=globalThis.lablupNotification,this.agentDetailDialog=this.shadowRoot.querySelector("#agent-detail")}connectedCallback(){super.connectedCallback()}async _viewStateChanged(e){if(await this.updateComplete,!1!==e)if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)document.addEventListener("backend-ai-connected",(()=>{this._loadAgentList("ALIVE")}),!0);else{let e="ALIVE";this._loadAgentList(e)}}_loadAgentList(e="running"){if(!0!==this.active)return;let t;switch(this.condition){case"running":e="ALIVE",t=["id","status","version","addr","region","compute_plugins","first_contact","lost_at","status_changed","live_stat","cpu_cur_pct","mem_cur_bytes","available_slots","occupied_slots","scaling_group"];break;case"terminated":e="TERMINATED",t=["id","status","version","addr","region","compute_plugins","first_contact","lost_at","status_changed","cpu_cur_pct","mem_cur_bytes","available_slots","occupied_slots","scaling_group"];break;case"archived":default:e="ALIVE",t=["id","status","version","addr","region","compute_plugins","first_contact","lost_at","status_changed","cpu_cur_pct","mem_cur_bytes","available_slots","occupied_slots","scaling_group"]}this.useHardwareMetadata&&globalThis.backendaiclient.supports("hardware-metadata")&&t.push("hardware_metadata"),globalThis.backendaiclient.agent.list(e,t,1e4).then((t=>{let i=t.agents;if(void 0!==i&&0!=i.length){let e;""!==this.filter&&(e=this.filter.split(":")),Object.keys(i).map(((t,a)=>{let s=i[t];if(""===this.filter||e[0]in s&&s[e[0]]===e[1]){let e=JSON.parse(s.occupied_slots),a=JSON.parse(s.available_slots),r=JSON.parse(s.compute_plugins);if(["cpu","mem"].forEach((t=>{t in e==!1&&(e[t]="0")})),"live_stat"in s&&(i[t].live_stat=JSON.parse(s.live_stat)),i[t].cpu_slots=parseInt(a.cpu),i[t].used_cpu_slots=parseInt(e.cpu),null!==s.cpu_cur_pct?(i[t].current_cpu_percent=s.cpu_cur_pct,i[t].cpu_total_usage_ratio=i[t].used_cpu_slots/i[t].cpu_slots,i[t].cpu_current_usage_ratio=i[t].current_cpu_percent/i[t].cpu_slots/100,i[t].current_cpu_percent=i[t].current_cpu_percent.toFixed(2)):(i[t].current_cpu_percent=0,i[t].cpu_total_usage_ratio=0,i[t].cpu_current_usage_ratio=0),null!==s.mem_cur_bytes?i[t].current_mem_bytes=s.mem_cur_bytes:i[t].current_mem_bytes=0,i[t].current_mem=globalThis.backendaiclient.utils.changeBinaryUnit(s.current_mem_bytes,"g"),i[t].mem_slots=parseInt(globalThis.backendaiclient.utils.changeBinaryUnit(a.mem,"g")),i[t].used_mem_slots=parseInt(globalThis.backendaiclient.utils.changeBinaryUnit(e.mem,"g")),i[t].mem_total_usage_ratio=i[t].used_mem_slots/i[t].mem_slots,i[t].mem_current_usage_ratio=i[t].current_mem/i[t].mem_slots,i[t].current_mem=i[t].current_mem.toFixed(2),"cuda.device"in a&&(i[t].cuda_gpu_slots=parseInt(a["cuda.device"]),i[t].used_cuda_gpu_slots="cuda.device"in e?parseInt(e["cuda.device"]):0,i[t].used_cuda_gpu_slots_ratio=i[t].used_cuda_gpu_slots/i[t].cuda_gpu_slots),"cuda.shares"in a&&(i[t].cuda_fgpu_slots=parseInt(a["cuda.shares"]),i[t].used_cuda_fgpu_slots="cuda.shares"in e?parseInt(e["cuda.shares"]):0,i[t].used_cuda_fgpu_slots_ratio=i[t].used_cuda_fgpu_slots/i[t].cuda_fgpu_slots),"rocm.device"in a&&(i[t].rocm_gpu_slots=parseInt(a["rocm.device"]),i[t].used_rocm_gpu_slots="rocm.device"in e?parseInt(e["rocm.device"]):0,i[t].used_rocm_gpu_slots_ratio=i[t].used_rocm_gpu_slots/i[t].rocm_gpu_slots),"cuda"in r){let e=r.cuda;i[t].cuda_plugin=e}if("live_stat"in i[t]&&"devices"in i[t].live_stat&&"cpu_util"in i[t].live_stat.devices){let e=[];Object.entries(i[t].live_stat.devices.cpu_util).forEach((([t,i])=>{let a=Object.assign({},i,{num:t});e.push(a)})),i[t].cpu_util_live=e}if("live_stat"in i[t]&&"devices"in i[t].live_stat&&"cuda_util"in i[t].live_stat.devices){let e=[],a=1;Object.entries(i[t].live_stat.devices.cuda_util).forEach((([t,i])=>{let s=Object.assign({},i,{num:t,idx:a});a+=1,e.push(s)})),i[t].cuda_util_live=e}if("live_stat"in i[t]&&"devices"in i[t].live_stat&&"cuda_mem"in i[t].live_stat.devices){let e=[],a=1;Object.entries(i[t].live_stat.devices.cuda_mem).forEach((([t,i])=>{let s=Object.assign({},i,{num:t,idx:a});a+=1,e.push(s)})),i[t].cuda_mem_live=e}if("live_stat"in i[t]&&"devices"in i[t].live_stat&&"rocm_util"in i[t].live_stat.devices){let e=[],a=1;Object.entries(i[t].live_stat.devices.rocm_util).forEach((([t,i])=>{let s=Object.assign({},i,{num:t,idx:a});a+=1,e.push(s)})),i[t].rocm_util_live=e}if("live_stat"in i[t]&&"devices"in i[t].live_stat&&"rocm_mem"in i[t].live_stat.devices){let e=[],a=1;Object.entries(i[t].live_stat.devices.rocm_mem).forEach((([t,i])=>{let s=Object.assign({},i,{num:t,idx:a});a+=1,e.push(s)})),i[t].rocm_mem_live=e}if("live_stat"in i[t]&&"devices"in i[t].live_stat&&"tpu_util"in i[t].live_stat.devices){let e=[],a=1;Object.entries(i[t].live_stat.devices.tpu_util).forEach((([t,i])=>{let s=Object.assign({},i,{num:t,idx:a});a+=1,e.push(s)})),i[t].tpu_util_live=e}if("live_stat"in i[t]&&"devices"in i[t].live_stat&&"tpu_mem"in i[t].live_stat.devices){let e=[],a=1;Object.entries(i[t].live_stat.devices.tpu_mem).forEach((([t,i])=>{let s=Object.assign({},i,{num:t,idx:a});a+=1,e.push(s)})),i[t].tpu_mem_live=e}"hardware_metadata"in s&&(i[t].hardware_metadata=JSON.parse(s.hardware_metadata)),this.agentsObject[i[t].id]=i[t]}}))}this.agents=i,this.agentDetailDialog.open&&(this.agentDetail=this.agentsObject[this.agentDetail.id],this.agentDetailDialog.updateComplete),!0===this.active&&setTimeout((()=>{this._loadAgentList(e)}),15e3)})).catch((e=>{e&&e.message&&(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_isRunning(){return"running"===this.condition}_byteToMB(e){return Math.floor(e/1e6)}_MBtoGB(e){return Math.floor(e/1024)}_elapsed(e,t){let i,a=new Date(e);i="running"===this.condition?new Date:new Date(t);var s=Math.floor((i.getTime()-a.getTime())/1e3);return"running"===this.condition?"Running "+s+"sec.":"Reserved for "+s+"sec."}_humanReadableDate(e){return new Date(e).toLocaleString()}_indexFrom1(e){return e+1}_heartbeatStatus(e){return e}_heartbeatColor(e){switch(e){case"ALIVE":return"green";case"TERMINATED":return"red";default:return"blue"}}_indexRenderer(e,t,i){let a=i.index+1;d(c`
        <div>${a}</div>
      `,e)}endpointRenderer(e,t,i){d(c`
        <div>${i.item.id}</div>
        <div class="indicator monospace">${i.item.addr}</div>
      `,e)}regionRenderer(e,t,i){let a,s,r,o,n=i.item.region.split("/");switch(n.length>1?(a=n[0],s=n[1]):(a=n[0],s=""),a){case"aws":case"amazon":r="orange",o="aws";break;case"azure":r="blue",o="azure";break;case"gcp":case"google":r="lightblue",o="gcp";break;case"nbp":case"naver":r="green",o="nbp";break;case"openstack":r="red",o="openstack";break;case"dgx":r="green",o="local";break;case"local":r="yellow",o="local";break;default:r="yellow",o="local"}d(c`
        <div class="horizontal start-justified center layout">
          <img src="/resources/icons/${o}.png" style="width:32px;height:32px;"/>
          <lablup-shields app="${s}" color="${r}"
                          description="${a}" ui="round"></lablup-shields>
        </div>
      `,e)}_elapsed2(e,t){return globalThis.backendaiclient.utils.elapsedTime(e,t)}contactDateRenderer(e,t,i){let a;"TERMINATED"===i.item.status&&"lost_at"in i.item?(a=this._elapsed2(i.item.lost_at,Date.now()),d(c`
          <div class="layout vertical">
            <span>${this._humanReadableDate(i.item.first_contact)}</span>
            <lablup-shields app="${u("agent.Terminated")}" color="yellow"
                            description="${a}" ui="round"></lablup-shields>

          </div>`,e)):(a=this._elapsed2(i.item.first_contact,Date.now()),d(c`
          <div class="layout vertical">
            <span>${this._humanReadableDate(i.item.first_contact)}</span>
            <lablup-shields app="${u("agent.Running")}" color="darkgreen"
                            description="${a}" ui="round"></lablup-shields>

          </div>`,e))}resourceRenderer(e,t,i){d(c`
        <div class="layout flex">
          ${i.item.cpu_slots?c`
            <div class="layout horizontal center flex">
              <div class="layout horizontal start resource-indicator">
                <mwc-icon class="fg green">developer_board</mwc-icon>
                <span style="padding-left:5px;">${i.item.cpu_slots}</span>
                <span class="indicator">${u("general.cores")}</span>
              </div>
              <span class="flex"></span>
              <lablup-progress-bar id="cpu-usage-bar" progress="${i.item.cpu_current_usage_ratio}"
                                   buffer="${i.item.cpu_total_usage_ratio}"
                                   description="${i.item.current_cpu_percent}%"></lablup-progress-bar>
            </div>`:c``}
          ${i.item.mem_slots?c`
            <div class="layout horizontal center flex">
              <div class="layout horizontal start resource-indicator">
                <mwc-icon class="fg green">memory</mwc-icon>
                <span style="padding-left:5px;">${i.item.mem_slots}</span>
                <span class="indicator">GB</span>
              </div>
              <span class="flex"></span>
              <lablup-progress-bar id="mem-usage-bar" progress="${i.item.mem_current_usage_ratio}"
                                   buffer="${i.item.mem_total_usage_ratio}"
                                   description="${i.item.current_mem}GB"></lablup-progress-bar>
            </div>`:c``}
          ${i.item.cuda_gpu_slots?c`
            <div class="layout horizontal center flex">
              <div class="layout horizontal start resource-indicator">
                <img class="indicator-icon fg green" src="/resources/icons/file_type_cuda.svg"/>
                <span style="padding-left:5px;">${i.item.cuda_gpu_slots}</span>
                <span class="indicator">GPU</span>
              </div>
              <span class="flex"></span>
              <lablup-progress-bar id="gpu-bar" progress="${i.item.used_cuda_gpu_slots_ratio}"
                                   description="${i.item.used_cuda_gpu_slots}"></lablup-progress-bar>
            </div>
          `:c``}
          ${i.item.cuda_fgpu_slots?c`
            <div class="layout horizontal center flex">
              <div class="layout horizontal start resource-indicator">
                <img class="indicator-icon fg green" src="/resources/icons/file_type_cuda.svg"/>
                <span style="padding-left:5px;">${i.item.cuda_fgpu_slots}</span>
                <span class="indicator">fGPU</span>
              </div>
              <span class="flex"></span>
              <lablup-progress-bar id="vgpu-bar" progress="${i.item.used_cuda_fgpu_slots_ratio}"
                                   description="${i.item.used_cuda_fgpu_slots}"></lablup-progress-bar>
            </div>
          `:c``}
          ${i.item.rocm_gpu_slots?c`
            <div class="layout horizontal center flex">
              <div class="layout horizontal start resource-indicator">
                <img class="indicator-icon fg green" src="/resources/icons/ROCm.png"/>
                <span style="padding-left:5px;">${i.item.rocm_gpu_slots}</span>
                <span class="indicator">ROCm</span>
              </div>
              <span class="flex"></span>
              <lablup-progress-bar id="rocm-gpu-bar" progress="${i.item.used_rocm_gpu_slots_ratio}"
                                   description="${i.item.used_rocm_gpu_slots}"></lablup-progress-bar>
            </div>
          `:c``}
          ${i.item.tpu_slots?c`
            <div class="layout horizontal center flex">
              <div class="layout horizontal start resource-indicator">
                <img class="indicator-icon fg green" src="/resources/icons/tpu.svg"/>
                <span style="padding-left:5px;">${i.item.tpu_slots}</span>
                <span class="indicator">TPU</span>
              </div>
              <span class="flex"></span>
              <lablup-progress-bar id="tpu-bar" progress="${i.item.used_tpu_slots_ratio}"
                                   description="${i.item.used_tpu_slots}"></lablup-progress-bar>
            </div>
          `:c``}
        </div>`,e)}statusRenderer(e,t,i){d(c`
        <div class="layout vertical start justified wrap">
          <lablup-shields app="Agent" color="${this._heartbeatColor(i.item.status)}"
                          description="${i.item.version}" ui="round"></lablup-shields>
          ${i.item.cuda_plugin?c`
            <lablup-shields app="CUDA Plugin" color="blue"
                            description="${i.item.cuda_plugin.version}" ui="round"></lablup-shields>
            ${i.item.cuda_fgpu_slots?c`
              <lablup-shields app="" color="blue"
                              description="Fractional GPU™" ui="round"></lablup-shields>
            `:c``}
            ${"cuda_version"in i.item.cuda_plugin?c`
                <lablup-shields app="CUDA" color="green"
                                description="${i.item.cuda_plugin.cuda_version}" ui="round"></lablup-shields>`:c`
                <lablup-shields app="CUDA Disabled" color="green"
                                description="" ui="flat"></lablup-shields>`}`:c``}

        </div>`,e)}showAgentDetailDialog(e){this.agentDetail=this.agentsObject[e],this.agentDetailDialog.show()}controlRenderer(e,t,i){d(c`
        <div id="controls" class="layout horizontal flex center" agent-id="${i.item.addr}">
          <mwc-icon-button class="fg blue controls-running" icon="assignment"
                           @click="${e=>this.showAgentDetailDialog(i.item.id)}"></mwc-icon-button>
          ${this._isRunning()?c`
            <mwc-icon-button class="temporarily-hide" disabled class="fg controls-running"
                             icon="build"></mwc-icon-button>
            <mwc-icon-button class="temporarily-hide" disabled class="fg controls-running"
                             icon="alarm"></mwc-icon-button>
            <mwc-icon-button class="temporarily-hide" disabled class="fg controls-running"
                             icon="pause"></mwc-icon-button>
            <mwc-icon-button class="temporarily-hide" disabled class="fg controls-running"
                             icon="delete"></mwc-icon-button>
          `:c``}
        </div>`,e)}_bytesToMB(e){return Number(e/1048576).toFixed(1)}render(){return c`
      <vaadin-grid class="${this.condition}" theme="row-stripes column-borders compact" aria-label="Job list"
                   .items="${this.agents}">
        <vaadin-grid-column width="40px" flex-grow="0" header="#" text-align="center"
                            .renderer="${this._indexRenderer}"></vaadin-grid-column>
        <vaadin-grid-column width="80px" header="${u("agent.Endpoint")}" .renderer="${this._boundEndpointRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column width="100px" resizable header="${u("agent.Region")}"
                            .renderer="${this._boundRegionRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable header="${u("agent.Starts")}" .renderer="${this._boundContactDateRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable width="140px" header="${u("agent.Resources")}"
                            .renderer="${this._boundResourceRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-sort-column width="100px" resizable path="scaling_group"
                                 header="${u("general.ResourceGroup")}"></vaadin-grid-sort-column>
        <vaadin-grid-column width="130px" flex-grow="0" resizable header="${u("agent.Status")}"
                            .renderer="${this._boundStatusRenderer}"></vaadin-grid-column>
        <vaadin-grid-column resizable header="${u("general.Control")}"
                            .renderer="${this._boundControlRenderer}"></vaadin-grid-column>
      </vaadin-grid>
      <backend-ai-dialog id="agent-detail" fixed backdrop blockscrolling persistent scrollable>
        <span slot="title">${u("agent.DetailedInformation")}</span>
        <div slot="content">
          <div class="horizontal start start-justified layout">
            ${"cpu_util_live"in this.agentDetail?c`
                <div>
                  <h3>CPU</h3>
                  <div class="horizontal wrap layout" style="max-width:600px;">
                    ${this.agentDetail.cpu_util_live.map((e=>c`
                      <div class="horizontal start-justified center layout" style="padding:0 5px;">
                        <div style="font-size:8px;width:35px;">CPU${e.num}</div>
                        <lablup-progress-bar class="cpu"
                                             progress="${e.pct/100}"
                                             description=""
                        ></lablup-progress-bar>
                      </div>`))}
                  </div>
                </div>`:c``}
            <div style="margin-left:10px;">
              <h3>Memory</h3>
              <div>
                <lablup-progress-bar class="mem"
                                     progress="${this.agentDetail.mem_current_usage_ratio}"
                                     description="${this.agentDetail.current_mem}GB/${this.agentDetail.mem_slots}GB"
                ></lablup-progress-bar>
              </div>
              <h3>Network</h3>
              ${"live_stat"in this.agentDetail&&"node"in this.agentDetail.live_stat?c`
                <div>TX: ${this._bytesToMB(this.agentDetail.live_stat.node.net_tx.current)}MB</div>
                <div>RX: ${this._bytesToMB(this.agentDetail.live_stat.node.net_rx.current)}MB</div>
              `:c``}
            </div>
            ${"cuda_util_live"in this.agentDetail?c`
                <div style="margin-left:10px;">
                  <h3>CUDA Devices</h3>
                  <h4>Utilization</h4>
                  ${this.agentDetail.cuda_util_live.map((e=>c`
                    <div class="horizontal start-justified center layout">
                      <div style="font-size:8px;width:35px;">CUDA${e.idx}</div>
                      <div class="horizontal start-justified center layout">
                        <lablup-progress-bar class="cuda"
                                             progress="${e.pct/100}"
                                             description=""
                        ></lablup-progress-bar>
                      </div>
                    </div>`))}
                  <h4>Memory</h4>
                  ${this.agentDetail.cuda_mem_live.map((e=>c`
                    <div class="horizontal start-justified center layout">
                      <div style="font-size:8px;width:35px;">CUDA${e.idx}</div>
                      <div class="horizontal start-justified center layout">
                        <lablup-progress-bar class="cuda"
                                             progress="${e.pct/100}"
                                             description=""
                        ></lablup-progress-bar>
                      </div>
                    </div>`))}

                </div>`:c``}
            ${"rocm_util_live"in this.agentDetail?c`
                <div style="margin-left:10px;">
                  <h3>ROCm Devices</h3>
                  <h4>Utilization</h4>
                  ${this.agentDetail.rocm_util_live.map((e=>c`
                    <div class="horizontal start-justified center layout">
                      <div style="font-size:8px;width:35px;">ROCm${e.num}</div>
                      <div class="horizontal start-justified center layout">
                        <lablup-progress-bar class="cuda"
                                             progress="${e.pct/100}"
                                             description=""
                        ></lablup-progress-bar>
                      </div>
                    </div>`))}
                  <h4>Memory</h4>
                  ${this.agentDetail.rocm_mem_live.map((e=>c`
                    <div class="horizontal start-justified center layout">
                      <div style="font-size:8px;width:35px;">ROCm${e.num}</div>
                      <div class="horizontal start-justified center layout">
                        <lablup-progress-bar class="cuda"
                                             progress="${e.pct/100}"
                                             description=""
                        ></lablup-progress-bar>
                      </div>
                    </div>`))}

                </div>`:c``}
            ${"tpu_util_live"in this.agentDetail?c`
                <div style="margin-left:10px;">
                  <h3>TPU Devices</h3>
                  <h4>Utilization</h4>
                  ${this.agentDetail.tpu_util_live.map((e=>c`
                    <div class="horizontal start-justified center layout">
                      <div style="font-size:8px;width:35px;">TPU${e.num}</div>
                      <div class="horizontal start-justified center layout">
                        <lablup-progress-bar class="cuda"
                                             progress="${e.pct/100}"
                                             description=""
                        ></lablup-progress-bar>
                      </div>
                    </div>`))}
                  <h4>Memory</h4>
                  ${this.agentDetail.tpu_mem_live.map((e=>c`
                    <div class="horizontal start-justified center layout">
                      <div style="font-size:8px;width:35px;">TPU${e.num}</div>
                      <div class="horizontal start-justified center layout">
                        <lablup-progress-bar class="cuda"
                                             progress="${e.pct/100}"
                                             description=""
                        ></lablup-progress-bar>
                      </div>
                    </div>`))}

                </div>`:c``}
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
            unelevated
            id="close-button"
            icon="check"
            label="${u("button.Close")}"
            @click="${e=>this._hideDialog(e)}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}};e([t({type:String})],g.prototype,"condition",void 0),e([t({type:Boolean})],g.prototype,"useHardwareMetadata",void 0),e([t({type:Array})],g.prototype,"agents",void 0),e([t({type:Object})],g.prototype,"agentsObject",void 0),e([t({type:Object})],g.prototype,"agentDetail",void 0),e([t({type:Object})],g.prototype,"notification",void 0),e([t({type:Object})],g.prototype,"agentDetailDialog",void 0),e([t({type:Object})],g.prototype,"_boundEndpointRenderer",void 0),e([t({type:Object})],g.prototype,"_boundRegionRenderer",void 0),e([t({type:Object})],g.prototype,"_boundContactDateRenderer",void 0),e([t({type:Object})],g.prototype,"_boundResourceRenderer",void 0),e([t({type:Object})],g.prototype,"_boundStatusRenderer",void 0),e([t({type:Object})],g.prototype,"_boundControlRenderer",void 0),e([t({type:String})],g.prototype,"filter",void 0),g=e([i("backend-ai-agent-list")],g);
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */
let h=class extends a{constructor(){super(),this.condition="running",this.agents=Array(),this.agentsObject=Object(),this.agentDetail=Object(),this.notification=Object(),this.agentDetailDialog=Object(),this._boundEndpointRenderer=this.endpointRenderer.bind(this),this._boundTypeRenderer=this.typeRenderer.bind(this),this._boundResourceRenderer=this.resourceRenderer.bind(this),this._boundCapabilitiesRenderer=this.capabilitiesRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this),this.filter=""}static get styles(){return[s,r,o,n`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: var(--list-height, calc(100vh - 200px));
        }

        mwc-icon {
          --mdc-icon-size: 16px;
        }

        img.indicator-icon {
          width: 16px !important;
          height: 16px !important;
        }

        paper-icon-button {
          --paper-icon-button: {
            width: 25px;
            height: 25px;
            min-width: 25px;
            min-height: 25px;
            padding: 3px;
            margin-right: 5px;
          };
        }

        div.indicator,
        span.indicator {
          font-size: 9px;
          margin-right: 5px;
        }

        #agent-detail {
          --component-max-width: 90%;
        }

        lablup-progress-bar {
          width: 100px;
          border-radius: 3px;
          height: 10px;
          --mdc-theme-primary: #3677eb;
          --mdc-linear-progress-buffer-color: #98be5a;
        }

        lablup-progress-bar.cpu {
          --progress-bar-height: 5px;
          margin-bottom: 0;
        }

        lablup-progress-bar.cuda {
          --progress-bar-height: 15px;
          margin-bottom: 5px;
        }

        lablup-progress-bar.mem {
          --progress-bar-height: 15px;
          width: 100px;
          margin-bottom: 0;
        }

        lablup-shields {
          margin: 1px;
        }

        .resource-indicator {
          width: 100px !important;
        }

      `]}firstUpdated(){this.notification=globalThis.lablupNotification,this.agentDetailDialog=this.shadowRoot.querySelector("#agent-detail")}connectedCallback(){super.connectedCallback()}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._loadAgentList()}),!0):this._loadAgentList())}_loadAgentList(){!0===this.active&&globalThis.backendaiclient.storageproxy.list(["id","backend","capabilities","path","fsprefix","performance_metric","usage"]).then((e=>{let t=e.storage_volume_list.items,i=[];void 0!==t&&0!=t.length&&Object.keys(t).map(((e,a)=>{let s=t[e];if(""!==this.filter){let e=this.filter.split(":");e[0]in s&&s[e[0]]===e[1]&&i.push(s)}else i.push(s)})),this.agents=i;let a=new CustomEvent("backend-ai-storage-proxy-updated",{});this.dispatchEvent(a),!0===this.active&&setTimeout((()=>{this._loadAgentList()}),15e3)})).catch((e=>{e&&e.message&&(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_byteToMB(e){return Math.floor(e/1e6)}_MBtoGB(e){return Math.floor(e/1024)}_humanReadableDate(e){return new Date(e).toLocaleString()}_indexFrom1(e){return e+1}_heartbeatStatus(e){return e}_indexRenderer(e,t,i){let a=i.index+1;d(c`
        <div>${a}</div>
      `,e)}endpointRenderer(e,t,i){d(c`
        <div>${i.item.id}</div>
        <div class="indicator monospace">${i.item.path}</div>
      `,e)}typeRenderer(e,t,i){let a,s;switch(i.item.backend){case"xfs":a="blue",s="local";break;case"ceph":case"cephfs":a="lightblue",s="ceph";break;case"vfs":case"nfs":a="green",s="local";break;case"purestorage":a="red",s="purestorage";break;case"dgx":a="green",s="local";break;default:a="yellow",s="local"}d(c`
        <div class="horizontal start-justified center layout">
          <img src="/resources/icons/${s}.png" style="width:32px;height:32px;"/>
          <lablup-shields app="Backend" color="${a}"
                          description="${i.item.backend}" ui="round"></lablup-shields>
        </div>
      `,e)}_elapsed2(e,t){return globalThis.backendaiclient.utils.elapsedTime(e,t)}resourceRenderer(e,t,i){let a=JSON.parse(i.item.usage),s=a.capacity_bytes>0?a.used_bytes/a.capacity_bytes:0,r=(100*s).toFixed(3);d(c`
        <div class="layout flex">
          <div class="layout horizontal center flex">
            <div class="layout horizontal start resource-indicator">
              <mwc-icon class="fg green">data_usage</mwc-icon>
              <span class="indicator" style="padding-left:5px;">${u("session.Usage")}</span>
            </div>
            <span class="flex"></span>
            <lablup-progress-bar id="volume-usage-bar" progress="${s}"
                                 buffer="${100}"
                                 description="${r}%"></lablup-progress-bar>
          </div>
        </div>
      `,e)}capabilitiesRenderer(e,t,i){d(c`
        <div class="layout vertical start justified wrap">
          ${i.item.capabilities?i.item.capabilities.map((e=>c`
            <lablup-shields app="" color="blue"
                            description="${e}" ui="round"></lablup-shields>
          `)):c``}
        </div>`,e)}showStorageProxyDetailDialog(e){let t=new CustomEvent("backend-ai-selected-storage-proxy",{detail:e});document.dispatchEvent(t)}controlRenderer(e,t,i){d(c`
        <div id="controls" class="layout horizontal flex center" agent-id="${i.item.id}">
          <mwc-icon-button class="fg blue controls-running" icon="assignment"
                           @click="${e=>this.showStorageProxyDetailDialog(i.item.id)}"></mwc-icon-button>
        </div>`,e)}_bytesToMB(e){return Number(e/1048576).toFixed(1)}render(){return c`
      <vaadin-grid class="${this.condition}" theme="row-stripes column-borders compact" aria-label="Job list"
                   .items="${this.agents}">
        <vaadin-grid-column width="40px" flex-grow="0" header="#" text-align="center"
                            .renderer="${this._indexRenderer}"></vaadin-grid-column>
        <vaadin-grid-column width="80px" header="${u("agent.Endpoint")}" .renderer="${this._boundEndpointRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column width="100px" resizable header="${u("agent.BackendType")}"
                            .renderer="${this._boundTypeRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable width="60px" header="${u("agent.Resources")}"
                            .renderer="${this._boundResourceRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column width="130px" flex-grow="0" resizable header="${u("agent.Capabilities")}"
                            .renderer="${this._boundCapabilitiesRenderer}"></vaadin-grid-column>
        <vaadin-grid-column resizable header="${u("general.Control")}"
                            .renderer="${this._boundControlRenderer}"></vaadin-grid-column>
      </vaadin-grid>
      <backend-ai-dialog id="agent-detail" fixed backdrop blockscrolling persistent scrollable>
        <span slot="title">${u("agent.DetailedInformation")}</span>
        <div slot="content">
          <div class="horizontal start start-justified layout">
            ${"cpu_util_live"in this.agentDetail?c`
                <div>
                  <h3>CPU</h3>
                  <div class="horizontal wrap layout" style="max-width:600px;">
                    ${this.agentDetail.cpu_util_live.map((e=>c`
                      <div class="horizontal start-justified center layout" style="padding:0 5px;">
                        <div style="font-size:8px;width:35px;">CPU${e.num}</div>
                        <lablup-progress-bar class="cpu"
                                             progress="${e.pct/100}"
                                             description=""
                        ></lablup-progress-bar>
                      </div>`))}
                  </div>
                </div>`:c``}
            <div style="margin-left:10px;">
              <h3>Memory</h3>
              <div>
                <lablup-progress-bar class="mem"
                                     progress="${this.agentDetail.mem_current_usage_ratio}"
                                     description="${this.agentDetail.current_mem}GB/${this.agentDetail.mem_slots}GB"
                ></lablup-progress-bar>
              </div>
              <h3>Network</h3>
              ${"live_stat"in this.agentDetail&&"node"in this.agentDetail.live_stat?c`
                <div>TX: ${this._bytesToMB(this.agentDetail.live_stat.node.net_tx.current)}MB</div>
                <div>RX: ${this._bytesToMB(this.agentDetail.live_stat.node.net_rx.current)}MB</div>
              `:c``}
            </div>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
            unelevated
            id="close-button"
            icon="check"
            label="${u("button.Close")}"
            @click="${e=>this._hideDialog(e)}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}};e([t({type:String})],h.prototype,"condition",void 0),e([t({type:Array})],h.prototype,"agents",void 0),e([t({type:Object})],h.prototype,"agentsObject",void 0),e([t({type:Object})],h.prototype,"agentDetail",void 0),e([t({type:Object})],h.prototype,"notification",void 0),e([t({type:Object})],h.prototype,"agentDetailDialog",void 0),e([t({type:Object})],h.prototype,"_boundEndpointRenderer",void 0),e([t({type:Object})],h.prototype,"_boundTypeRenderer",void 0),e([t({type:Object})],h.prototype,"_boundResourceRenderer",void 0),e([t({type:Object})],h.prototype,"_boundCapabilitiesRenderer",void 0),e([t({type:Object})],h.prototype,"_boundControlRenderer",void 0),e([t({type:String})],h.prototype,"filter",void 0),h=e([i("backend-ai-storage-proxy-list")],h);
/**
 @license
 Copyright (c) 2015-2018 Lablup Inc. All rights reserved.
 */
let b=class extends a{constructor(){super(),this._boundControlRenderer=this._controlRenderer.bind(this),this.selectedIndex=0,this.domains=Array(),this.scalingGroups=Array(),this.schedulerTypes=Array(),this.active=!1,this.schedulerTypes=["fifo","lifo","drf"]}static get styles(){return[s,r,o,n`
        h4 {
          font-weight: 200;
          font-size: 14px;
          margin: 0px;
          padding: 5px 15px 5px 20px;
        }

        wl-button {
          --button-bg: var(--paper-light-blue-50);
          --button-bg-hover: var(--paper-blue-100);
          --button-bg-active: var(--paper-blue-600);
        }

        wl-button.delete {
          --button-bg: var(--paper-red-50);
          --button-bg-hover: var(--paper-red-100);
          --button-bg-active: var(--paper-red-600);
          margin-top: 20px;
        }

        backend-ai-dialog wl-textarea,
        backend-ai-dialog wl-select {
          margin-bottom: 20px;
          --input-font-family: Roboto, Noto, sans-serif;
        }

        backend-ai-dialog mwc-textfield,
        backend-ai-dialog mwc-textarea {
          width: 100%;
          margin: 10px auto 20px auto;
          --mdc-typography-font-family: var(--general-font-family);
          --mdc-theme-primary: var(--general-textfield-selected-color);
        }

        backend-ai-dialog wl-label {
          --label-font-family: var(--general-font-family);
          --label-color: #282828;
          margin-bottom: 5px;
        }

        backend-ai-dialog wl-switch {
          margin-bottom: 20px;
          --switch-color-checked: #29b6f6;
          --switch-bg-checked: #bbdefb;
        }

        wl-select {
          --input-color-disabled: #222;
          --input-label-color-disabled: #222;
          --input-label-font-size: 12px;
          --input-border-style-disabled: 1px solid #ccc;
        }

        mwc-button[outlined] {
          width: 100%;
          margin: 10px auto;
          background-image: none;
          --mdc-button-outline-width: 2px;
          --mdc-theme-primary: #38bd73;
          --mdc-on-theme-primary: #38bd73;
        }

        mwc-textarea {
          height: 150px;
        }

        mwc-select {
          width:100%;
          --mdc-typography-font-family: var(--general-font-family);
          --mdc-theme-primary: var(--general-textfield-selected-color);
          --mdc-select-fill-color: transparent;
        }

        backend-ai-dialog {
          --component-min-width: 350px;
        }

        backend-ai-dialog#modify {
          --component-min-width
        }
      `]}firstUpdated(){this.notification=globalThis.lablupNotification}connectedCallback(){super.connectedCallback()}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{globalThis.backendaiclient.scalingGroup.list_available().then((e=>{this.scalingGroups=e.scaling_groups})),globalThis.backendaiclient.domain.list().then((({domains:e})=>{this.domains=e,this.requestUpdate()}))}),!0):(globalThis.backendaiclient.scalingGroup.list_available().then((e=>{this.scalingGroups=e.scaling_groups})),globalThis.backendaiclient.domain.list().then((({domains:e})=>{this.domains=e,this.requestUpdate()}))))}_activeStatusRenderer(e,t,i){d(c`
        <lablup-shields
          app=""
          color=${i.item.is_active?"green":"red"}
          description=${i.item.is_active?"active":"inactive"}
          ui="flat"
        ></lablup-shields>
    `,e)}_indexRenderer(e,t,i){let a=i.index+1;d(c`
        <div>${a}</div>
      `,e)}_launchDialogById(e){this.shadowRoot.querySelector(e).show()}_hideDialogById(e){this.shadowRoot.querySelector(e).hide()}_controlRenderer(e,t,i){d(c`
        <div
          id="controls"
          class="layout horizontal flex center"
        >
          <wl-button fab flat inverted
            icon="settings"
            class="fg blue"
            @click=${()=>{this.selectedIndex=i.index,this.shadowRoot.querySelector("#modify-scaling-group-active").checked=this.scalingGroups[i.index].is_active,this._launchDialogById("#modify-scaling-group-dialog")}}
          ><wl-icon>settings</wl-icon></wl-button>
          <wl-button fab flat inverted
            icon="delete"
            class="fg red"
            @click=${()=>{this.selectedIndex=i.index,this._launchDialogById("#delete-scaling-group-dialog")}}><wl-icon>delete</wl-icon></wl-button>
        </div>
      `,e)}_createScalingGroup(){const e=this.shadowRoot.querySelector("#scaling-group-name").value,t=this.shadowRoot.querySelector("#scaling-group-description").value,i=this.shadowRoot.querySelector("#scaling-group-domain").value;if(""===e)return this.notification.text=p("resourceGroup.EnterValidResourceGroupName"),this.notification.show(),void this._hideDialogById("#create-scaling-group-dialog");globalThis.backendaiclient.scalingGroup.create(e,t).then((({create_scaling_group:t})=>t.ok?globalThis.backendaiclient.scalingGroup.associate_domain(i,e):Promise.reject(t.msg))).then((({associate_scaling_group_with_domain:e})=>{e.ok?(this.notification.text=p("resourceGroup.ResourceGroupCreated"),this._refreshList(),this.shadowRoot.querySelector("#scaling-group-name").value="",this.shadowRoot.querySelector("#scaling-group-description").value=""):(this.notification.text=l.relieve(e.title),this.notification.detail=e.msg),this._hideDialogById("#create-scaling-group-dialog"),this.notification.show()})).catch((e=>{this.notification.text=l.relieve(e.title),this.notification.detail=e,this._hideDialogById("#create-scaling-group-dialog"),this.notification.show(!0,e)}))}_modifyScalingGroup(){const e=this.shadowRoot.querySelector("#modify-scaling-group-description").value,t=this.shadowRoot.querySelector("#modify-scaling-group-scheduler").value,i=this.shadowRoot.querySelector("#modify-scaling-group-active").checked,a=this.scalingGroups[this.selectedIndex].name;let s={};if(e!==this.scalingGroups[this.selectedIndex].description&&(s.description=e),t!==this.scalingGroups[this.selectedIndex].scheduler&&(s.scheduler=t),i!==this.scalingGroups[this.selectedIndex].is_active&&(s.is_active=i),0===Object.keys(s).length)return this.notification.text=p("resourceGroup.NochangesMade"),void this.notification.show();globalThis.backendaiclient.scalingGroup.update(a,s).then((({modify_scaling_group:e})=>{e.ok?(this.notification.text=p("resourceGroup.ResourceGroupCreated"),this._refreshList()):(this.notification.text=l.relieve(e.msg),this.notification.detail=e.msg),this._hideDialogById("#modify-scaling-group-dialog"),this.notification.show()}))}_deleteScalingGroup(){const e=this.scalingGroups[this.selectedIndex].name;if(this.shadowRoot.querySelector("#delete-scaling-group").value!==e)return this.notification.text=p("resourceGroup.ResourceGroupNameNotMatch"),this._hideDialogById("#delete-scaling-group-dialog"),void this.notification.show();globalThis.backendaiclient.scalingGroup.delete(e).then((({delete_scaling_group:e})=>{e.ok?(this.notification.text=p("resourceGroup.ResourceGroupDeleted"),this._refreshList(),this.shadowRoot.querySelector("#delete-scaling-group").value=""):(this.notification.text=l.relieve(e.msg),this.notification.detail=e.msg),this._hideDialogById("#delete-scaling-group-dialog"),this.notification.show()})),this.selectedIndex=0}_refreshList(){globalThis.backendaiclient.scalingGroup.list_available().then((({scaling_groups:e})=>{this.scalingGroups=e,this.requestUpdate()}))}render(){return c`
      <h4 class="horizontal flex center center-justified layout">
        <span>${u("resourceGroup.ResourceGroups")}</span>
        <span class="flex"></span>
          <mwc-button
              raised
              id="add-scaling-group"
              icon="add"
              label="${u("button.Add")}"
              @click=${()=>this._launchDialogById("#create-scaling-group-dialog")}>
          </mwc-button>
      </h4>
      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Job list" .items="${this.scalingGroups}">
        <vaadin-grid-column flex-grow="0" header="#" width="40px" .renderer=${this._indexRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${u("resourceGroup.Name")}">
          <template>
            <div> [[item.name]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${u("resourceGroup.Description")}">
          <template>
            <div> [[item.description]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${u("resourceGroup.ActiveStatus")}" .renderer=${this._activeStatusRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${u("resourceGroup.Driver")}">
          <template>
            <div> [[item.driver]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${u("resourceGroup.DriverOptions")}">
          <template>
            <div> [[item.driver_opts]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${u("resourceGroup.Scheduler")}">
          <template>
            <div> [[item.scheduler]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${u("resourceGroup.SchedulerOptions")}">
          <template>
            <div> [[item.scheduler_opts]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${u("general.Control")}" .renderer=${this._boundControlRenderer}>
        </vaadin-grid-column>
      </vaadin-grid>
      <backend-ai-dialog id="create-scaling-group-dialog" fixed backdrop blockscrolling>
        <span slot="title">${u("resourceGroup.CreateResourceGroup")}</span>

        <div slot="content" class="login-panel intro centered">
          <mwc-select
            id="scaling-group-domain"
            label="${u("resourceGroup.SelectDomain")}">
            ${this.domains.map((e=>c`
              <mwc-list-item style="height:auto;" value="${e.name}">
                ${e.name}
              </mwc-list-item>
            `))}
          </mwc-select>
          <mwc-textfield
            type="text"
            id="scaling-group-name"
            label="${u("resourceGroup.ResourceGroupName")}"
            maxLength="64"
            placeholder="${u("maxLength.64chars")}"
          ></mwc-textfield>
          <mwc-textarea
            name="description"
            id="scaling-group-description"
            label="${u("resourceGroup.Description")}"
            maxLength="512"
            placeholder="${u("maxLength.512chars")}"
          ></mwc-textarea>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              unelevated
              id="create-user-button"
              class="create-button"
              icon="add"
              label="${u("button.Create")}"
              @click="${this._createScalingGroup}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="modify-scaling-group-dialog" fixed backdrop blockscrolling>
        <span slot="title">${u("resourceGroup.ModifyResourceGroup")}</span>
        <div slot="content">
          <div class="horizontal layout flex wrap center justified">
            <p style="margin-left: 18px;color:rgba(0, 0, 0, 0.6);">
              ${u("resourceGroup.Active")}
            </p>
            <mwc-switch id="modify-scaling-group-active" style="margin-right:10px;">
            </mwc-switch>
          </div>
          <mwc-select
            id="modify-scaling-group-scheduler"
            label="${u("resourceGroup.SelectScheduler")}"
            value="${0===this.scalingGroups.length?"":this.scalingGroups[this.selectedIndex].scheduler}">
            ${this.schedulerTypes.map((e=>c`
            <mwc-list-item value="${e}">${e}</mwc-list-item>
            `))}
          </mwc-select>
          <mwc-textarea
            id="modify-scaling-group-description"
            type="text"
            label="${u("resourceGroup.Description")}"
            value=${0===this.scalingGroups.length?"":this.scalingGroups[this.selectedIndex].description}
          ></mwc-textarea>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
            unelevated
            icon="save"
            label="${u("button.Save")}"
            @click=${this._modifyScalingGroup}
            ></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="delete-scaling-group-dialog" fixed backdrop blockscrolling>
        <span slot="title">${u("dialog.warning.CannotBeUndone")}</span>
        <div slot="content">
          <mwc-textfield
            id="delete-scaling-group"
            type="text"
            label="${u("resourceGroup.TypeResourceGroupNameToDelete")}"
            maxLength="64"
            placeholder="${u("maxLength.64chars")}"
          ></mwc-textfield>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
            outlined
            icon="delete"
            label="${u("button.Delete")}"
            style="width: 100%; box-sizing: border-box;"
            @click="${this._deleteScalingGroup}">
            </mwc-button>
       </div>
      </backend-ai-dialog>
    `}};e([t({type:Object})],b.prototype,"_boundControlRenderer",void 0),e([t({type:Number})],b.prototype,"selectedIndex",void 0),e([t({type:Array})],b.prototype,"domains",void 0),e([t({type:Array})],b.prototype,"scalingGroups",void 0),e([t({type:Array})],b.prototype,"schedulerTypes",void 0),b=e([i("backend-ai-scaling-group-list")],b);
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */
let m=class extends a{constructor(){super(),this._status="inactive",this._tab="running-lists",this.enableStorageProxy=!1}static get styles(){return[s,n`
        h3.tab {
          background-color: var(--general-tabbar-background-color);
          border-radius: 5px 5px 0px 0px;
          margin: 0px auto;
        }

        mwc-tab-bar {
          --mdc-theme-primary: var(--general-sidebar-selected-color);
          --mdc-text-transform: none;
          --mdc-tab-color-default: var(--general-tabbar-background-color);
          --mdc-tab-text-label-color-default: var(--general-tabbar-tab-disabled-color);
        }

        @media screen and (max-width: 805px) {
          mwc-tab {
            --mdc-typography-button-font-size: 10px;
          }
        }
      `]}firstUpdated(){void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.enableStorageProxy=globalThis.backendaiclient.supports("storage-proxy")}),!0):this.enableStorageProxy=globalThis.backendaiclient.supports("storage-proxy")}async _viewStateChanged(e){if(await this.updateComplete,!1===e)return this.shadowRoot.querySelector("#running-agents").active=!1,this.shadowRoot.querySelector("#terminated-agents").active=!1,this.shadowRoot.querySelector("#scaling-groups").active=!1,void(this._status="inactive");this.shadowRoot.querySelector("#running-agents").active=!0,this.shadowRoot.querySelector("#terminated-agents").active=!0,this.shadowRoot.querySelector("#scaling-groups").active=!1,this._status="active"}_showTab(e){let t=this.shadowRoot.querySelectorAll(".tab-content");for(let e=0;e<t.length;e++)t[e].style.display="none";this.shadowRoot.querySelector("#"+e.title).style.display="block",this._tab=e.title}render(){return c`
      <lablup-activity-panel noheader narrow autowidth>
        <div slot="message">
          <h3 class="tab horizontal center layout">
            <mwc-tab-bar>
              <mwc-tab title="running-lists" label="${u("agent.Connected")}"
                  @click="${e=>this._showTab(e.target)}"></mwc-tab>
              <mwc-tab title="terminated-lists" label="${u("agent.Terminated")}"
                  @click="${e=>this._showTab(e.target)}"></mwc-tab>
              <!--<mwc-tab title="maintenance-lists" label="${u("agent.Maintaining")}"
                  @click="${e=>this._showTab(e.target)}"></mwc-tab>-->
              ${this.enableStorageProxy?c`
              <mwc-tab title="storage-proxy-lists" label="${u("general.StorageProxies")}"
                  @click="${e=>this._showTab(e.target)}"></mwc-tab>`:c``}
              <mwc-tab title="scaling-group-lists" label="${u("general.ResourceGroup")}"
                  @click="${e=>this._showTab(e.target)}"></mwc-tab>
            </mwc-tab-bar>
            <div class="flex"></div>
          </h3>
          <div id="running-lists" class="tab-content">
            <backend-ai-agent-list id="running-agents" condition="running" ?active="${"active"===this._status&&"running-lists"===this._tab}"></backend-ai-agent-list>
          </div>
          <div id="terminated-lists" class="tab-content" style="display:none;">
            <backend-ai-agent-list id="terminated-agents" condition="terminated" ?active="${"active"===this._status&&"terminated-lists"===this._tab}"></backend-ai-agent-list>
          </div>
          ${this.enableStorageProxy?c`
          <div id="storage-proxy-lists" class="tab-content" style="display:none;">
            <backend-ai-storage-proxy-list id="storage-proxies" ?active="${"active"===this._status&&"storage-proxy-lists"===this._tab}"></backend-ai-storage-proxy-list>
          </div>`:c``}
          <div id="scaling-group-lists" class="tab-content" style="display:none;">
            <backend-ai-scaling-group-list id="scaling-groups" ?active="${"active"===this._status&&"scaling-group-lists"===this._tab}"> </backend-ai-scaling-group-list>
          </div>
        </div>
      </lablup-activity-panel>
    `}};e([t({type:String})],m.prototype,"_status",void 0),e([t({type:String})],m.prototype,"_tab",void 0),e([t({type:Boolean})],m.prototype,"enableStorageProxy",void 0),m=e([i("backend-ai-agent-view")],m);var v=m;export default v;
