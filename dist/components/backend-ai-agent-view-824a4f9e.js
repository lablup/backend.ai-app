import{_ as e,e as t,n as i,B as a,b as o,I as s,a as r,r as n,d as l,y as d,$ as c,t as u,g as p}from"./backend-ai-webui-29a04808.js";import"./mwc-tab-bar-83be8cdd.js";import"./lablup-activity-panel-0d4aa16a.js";import"./vaadin-grid-324151db.js";import"./vaadin-grid-sort-column-5a315bda.js";import"./mwc-linear-progress-6cadac4a.js";import"./mwc-switch-e596012f.js";import"./lablup-progress-bar-bafce280.js";import"./vaadin-item-styles-461be75c.js";import"./vaadin-item-c98fe8ed.js";import"./label-f49b9d87.js";import"./select-4843f23c.js";import"./switch-5eae873f.js";import"./textarea-7cf31aa6.js";import"./textfield-e939229b.js";import"./expansion-a141e6f0.js";import"./mwc-textarea-44ad2d64.js";import"./input-behavior-3fd94ba0.js";import"./radio-behavior-57c4111b.js";
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */let h=class extends a{constructor(){super(),this.condition="running",this.useHardwareMetadata=!1,this.agents=[],this.agentsObject=Object(),this.agentDetail=Object(),this.notification=Object(),this.agentDetailDialog=Object(),this.agentSettingDialog=Object(),this.enableAgentSchedulable=!1,this._boundEndpointRenderer=this.endpointRenderer.bind(this),this._boundRegionRenderer=this.regionRenderer.bind(this),this._boundContactDateRenderer=this.contactDateRenderer.bind(this),this._boundResourceRenderer=this.resourceRenderer.bind(this),this._boundStatusRenderer=this.statusRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this),this._boundSchedulableRenderer=this.schedulableRenderer.bind(this),this.filter=""}static get styles(){return[o,s,r,n`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: var(--list-height, calc(100vh - 200px));
        }

        mwc-icon {
          --mdc-icon-size: 16px;
        }

        mwc-icon.schedulable {
          --mdc-icon-size: 24px;
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

        backend-ai-dialog#agent-detail {
          --component-max-width: 90%;
          --component-min-width: 400px;
        }

        backend-ai-dialog {
          --component-width: 350px;
        }


        lablup-progress-bar {
          --progress-bar-width: 70px;
          border-radius: 3px;
          height: 10px;
          --mdc-theme-primary: #3677eb;
          --mdc-linear-progress-buffer-color: #98be5a;
          margin-bottom: 0;
        }

        lablup-progress-bar.cpu {
          --progress-bar-height: 7px;
        }

        lablup-progress-bar.cuda {
          --progress-bar-width: 80px;
          --progress-bar-height: 15px;
          margin-bottom: 5px;
        }

        lablup-progress-bar.mem {
          --progress-bar-width: 100px;
          --progress-bar-height: 15px;
        }

        lablup-shields {
          margin: 1px;
        }

        .resource-indicator {
          width: 100px !important;
        }

        .agent-detail-title {
          font-size: 8px;
          width: 35px;
        }
    `]}firstUpdated(){this.notification=globalThis.lablupNotification,this.agentDetailDialog=this.shadowRoot.querySelector("#agent-detail"),this.agentSettingDialog=this.shadowRoot.querySelector("#agent-setting")}connectedCallback(){super.connectedCallback()}async _viewStateChanged(e){if(await this.updateComplete,!1!==e)if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)document.addEventListener("backend-ai-connected",(()=>{this.enableAgentSchedulable=globalThis.backendaiclient.supports("schedulable");this._loadAgentList("ALIVE")}),!0);else{this.enableAgentSchedulable=globalThis.backendaiclient.supports("schedulable");const e="ALIVE";this._loadAgentList(e)}}_loadAgentList(e="running"){if(!0!==this.active)return;let t;switch(this.condition){case"running":e="ALIVE",t=["id","status","version","addr","architecture","region","compute_plugins","first_contact","lost_at","status_changed","live_stat","cpu_cur_pct","mem_cur_bytes","available_slots","occupied_slots","scaling_group"];break;case"terminated":e="TERMINATED",t=["id","status","version","addr","architecture","region","compute_plugins","first_contact","lost_at","status_changed","cpu_cur_pct","mem_cur_bytes","available_slots","occupied_slots","scaling_group"];break;default:e="ALIVE",t=["id","status","version","addr","architecture","region","compute_plugins","first_contact","lost_at","status_changed","cpu_cur_pct","mem_cur_bytes","available_slots","occupied_slots","scaling_group"]}this.useHardwareMetadata&&globalThis.backendaiclient.supports("hardware-metadata")&&t.push("hardware_metadata"),globalThis.backendaiclient.supports("schedulable")&&t.push("schedulable"),globalThis.backendaiclient.agent.list(e,t,1e4).then((t=>{const i=t.agents;if(void 0!==i&&0!=i.length){let e;""!==this.filter&&(e=this.filter.split(":")),Object.keys(i).map(((t,a)=>{var o,s,r,n,l,d,c,u,p,h,g,b,v,m;const _=i[t];if(""===this.filter||e[0]in _&&_[e[0]]===e[1]){const e=JSON.parse(_.occupied_slots),a=JSON.parse(_.available_slots),y=JSON.parse(_.compute_plugins);if(["cpu","mem"].forEach((t=>{t in e==!1&&(e[t]="0")})),"live_stat"in _&&(i[t].live_stat=JSON.parse(_.live_stat)),i[t].cpu_slots=parseInt(a.cpu),i[t].used_cpu_slots=parseInt(e.cpu),null!==_.cpu_cur_pct?(i[t].current_cpu_percent=_.cpu_cur_pct,i[t].cpu_total_usage_ratio=i[t].used_cpu_slots/i[t].cpu_slots,i[t].cpu_current_usage_ratio=i[t].current_cpu_percent/i[t].cpu_slots/100,i[t].current_cpu_percent=i[t].current_cpu_percent.toFixed(2)):(i[t].current_cpu_percent=0,i[t].cpu_total_usage_ratio=0,i[t].cpu_current_usage_ratio=0),null!==_.mem_cur_bytes?i[t].current_mem_bytes=_.mem_cur_bytes:i[t].current_mem_bytes=0,i[t].current_mem=globalThis.backendaiclient.utils.changeBinaryUnit(_.current_mem_bytes,"g"),i[t].mem_slots=parseInt(globalThis.backendaiclient.utils.changeBinaryUnit(a.mem,"g")),i[t].used_mem_slots=parseInt(globalThis.backendaiclient.utils.changeBinaryUnit(e.mem,"g")),i[t].mem_total_usage_ratio=i[t].used_mem_slots/i[t].mem_slots,i[t].mem_current_usage_ratio=i[t].current_mem/i[t].mem_slots,i[t].current_mem=i[t].current_mem.toFixed(2),"cuda.device"in a&&(i[t].cuda_gpu_slots=parseInt(a["cuda.device"]),i[t].used_cuda_gpu_slots="cuda.device"in e?parseInt(e["cuda.device"]):0,i[t].used_cuda_gpu_slots_ratio=i[t].used_cuda_gpu_slots/i[t].cuda_gpu_slots),"cuda.shares"in a&&(i[t].cuda_fgpu_slots=parseInt(a["cuda.shares"]),i[t].used_cuda_fgpu_slots="cuda.shares"in e?parseInt(e["cuda.shares"]):0,i[t].used_cuda_fgpu_slots_ratio=i[t].used_cuda_fgpu_slots/i[t].cuda_fgpu_slots),"rocm.device"in a&&(i[t].rocm_gpu_slots=parseInt(a["rocm.device"]),i[t].used_rocm_gpu_slots="rocm.device"in e?parseInt(e["rocm.device"]):0,i[t].used_rocm_gpu_slots_ratio=i[t].used_rocm_gpu_slots/i[t].rocm_gpu_slots),"cuda"in y){const e=y.cuda;i[t].cuda_plugin=e}if(null===(s=null===(o=i[t].live_stat)||void 0===o?void 0:o.devices)||void 0===s?void 0:s.cpu_util){const e=[];Object.entries(i[t].live_stat.devices.cpu_util).forEach((([t,i])=>{const a=Object.assign({},i,{num:t});e.push(a)})),i[t].cpu_util_live=e}if(null===(n=null===(r=i[t].live_stat)||void 0===r?void 0:r.devices)||void 0===n?void 0:n.cuda_util){const e=[];let a=1;Object.entries(i[t].live_stat.devices.cuda_util).forEach((([t,i])=>{const o=Object.assign({},i,{num:t,idx:a});a+=1,e.push(o)})),i[t].cuda_util_live=e}if(null===(d=null===(l=i[t].live_stat)||void 0===l?void 0:l.devices)||void 0===d?void 0:d.cuda_mem){const e=[];let a=1;Object.entries(i[t].live_stat.devices.cuda_mem).forEach((([t,i])=>{const o=Object.assign({},i,{num:t,idx:a});a+=1,e.push(o)})),i[t].cuda_mem_live=e}if(null===(u=null===(c=i[t].live_stat)||void 0===c?void 0:c.devices)||void 0===u?void 0:u.rocm_util){const e=[];let a=1;Object.entries(i[t].live_stat.devices.rocm_util).forEach((([t,i])=>{const o=Object.assign({},i,{num:t,idx:a});a+=1,e.push(o)})),i[t].rocm_util_live=e}if(null===(h=null===(p=i[t].live_stat)||void 0===p?void 0:p.devices)||void 0===h?void 0:h.rocm_mem){const e=[];let a=1;Object.entries(i[t].live_stat.devices.rocm_mem).forEach((([t,i])=>{const o=Object.assign({},i,{num:t,idx:a});a+=1,e.push(o)})),i[t].rocm_mem_live=e}if(null===(b=null===(g=i[t].live_stat)||void 0===g?void 0:g.devices)||void 0===b?void 0:b.tpu_util){const e=[];let a=1;Object.entries(i[t].live_stat.devices.tpu_util).forEach((([t,i])=>{const o=Object.assign({},i,{num:t,idx:a});a+=1,e.push(o)})),i[t].tpu_util_live=e}if(null===(m=null===(v=i[t].live_stat)||void 0===v?void 0:v.devices)||void 0===m?void 0:m.tpu_mem){const e=[];let a=1;Object.entries(i[t].live_stat.devices.tpu_mem).forEach((([t,i])=>{const o=Object.assign({},i,{num:t,idx:a});a+=1,e.push(o)})),i[t].tpu_mem_live=e}"hardware_metadata"in _&&(i[t].hardware_metadata=JSON.parse(_.hardware_metadata)),"schedulable"in _&&(i[t].schedulable=_.schedulable),this.agentsObject[i[t].id]=i[t]}}))}this.agents=i,this.agentDetailDialog.open&&(this.agentDetail=this.agentsObject[this.agentDetail.id],this.agentDetailDialog.updateComplete),!0===this.active&&setTimeout((()=>{this._loadAgentList(e)}),15e3)})).catch((e=>{e&&e.message&&(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_isRunning(){return"running"===this.condition}_byteToMB(e){return Math.floor(e/1e6)}_MBtoGB(e){return Math.floor(e/1024)}_elapsed(e,t){const i=new Date(e);let a;a="running"===this.condition?new Date:new Date(t);const o=Math.floor((a.getTime()-i.getTime())/1e3);return"running"===this.condition?"Running "+o+"sec.":"Reserved for "+o+"sec."}_humanReadableDate(e){return new Date(e).toLocaleString()}_indexFrom1(e){return e+1}_heartbeatStatus(e){return e}_heartbeatColor(e){switch(e){case"ALIVE":return"green";case"TERMINATED":return"red";default:return"blue"}}_indexRenderer(e,t,i){const a=i.index+1;d(c`
        <div>${a}</div>
      `,e)}endpointRenderer(e,t,i){d(c`
        <div>${i.item.id}</div>
        <div class="indicator monospace">${i.item.addr}</div>
      `,e)}regionRenderer(e,t,i){let a,o,s,r;const n=i.item.region.split("/");switch(n.length>1?(a=n[0],o=n[1]):(a=n[0],o=""),a){case"aws":case"amazon":s="orange",r="aws";break;case"azure":s="blue",r="azure";break;case"gcp":case"google":s="lightblue",r="gcp";break;case"nbp":case"naver":s="green",r="nbp";break;case"openstack":s="red",r="openstack";break;case"dgx":s="green",r="local";break;default:s="yellow",r="local"}d(c`
        <div class="horizontal start-justified center layout">
          <img src="/resources/icons/${r}.png" style="width:32px;height:32px;"/>
          <lablup-shields app="${o}" color="${s}"
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
        </div>`,e)}schedulableRenderer(e,t,i){var a;d(c`
        <div class="layout horizontal center center-justified wrap">
          ${(null===(a=i.item)||void 0===a?void 0:a.schedulable)?c`
            <mwc-icon class="fg green schedulable">check_circle</mwc-icon>
          `:c`
            <mwc-icon class="fg red schedulable">block</mwc-icon>
          `}
        </div>`,e)}statusRenderer(e,t,i){var a;d(c`
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
            ${(null===(a=i.item.cuda_plugin)||void 0===a?void 0:a.cuda_version)?c`
                <lablup-shields app="CUDA" color="green"
                                description="${i.item.cuda_plugin.cuda_version}" ui="round"></lablup-shields>`:c`
                <lablup-shields app="CUDA Disabled" color="green"
                                description="" ui="flat"></lablup-shields>`}`:c``}
        </div>`,e)}showAgentDetailDialog(e){this.agentDetail=this.agentsObject[e],this.agentDetailDialog.show()}controlRenderer(e,t,i){d(c`
        <div id="controls" class="layout horizontal flex center" agent-id="${i.item.addr}">
          <mwc-icon-button class="fg green controls-running" icon="assignment"
                           @click="${e=>this.showAgentDetailDialog(i.item.id)}"></mwc-icon-button>
          ${this._isRunning()?c`
            ${this.enableAgentSchedulable?c`
              <mwc-icon-button class="fg blue controls-running" icon="settings"
                               @click="${e=>this._showConfigDialog(i.item.id)}"></mwc-icon-button>
            `:c``}
            <mwc-icon-button class="temporarily-hide fg green controls-running" icon="refresh"
                             @click="${()=>this._loadAgentList()}"></mwc-icon-button>
            <mwc-icon-button class="temporarily-hide fg controls-running" disabled
                             icon="build"></mwc-icon-button>
            <mwc-icon-button class="temporarily-hide fg controls-running" disabled
                             icon="alarm"></mwc-icon-button>
            <mwc-icon-button class="temporarily-hide fg controls-running" disabled
                             icon="pause"></mwc-icon-button>
            <mwc-icon-button class="temporarily-hide fg controls-running" disabled
                             icon="delete"></mwc-icon-button>
          `:c``}
        </div>`,e)}_showConfigDialog(e){var t,i;this.agentDetail=this.agentsObject[e];this.shadowRoot.querySelector("#schedulable-switch").selected=null!==(i=null===(t=this.agentDetail)||void 0===t?void 0:t.schedulable)&&void 0!==i&&i,this.agentSettingDialog.show()}_bytesToMB(e){return Number(e/1048576).toFixed(1)}_modifyAgentSetting(){var e;const t=this.shadowRoot.querySelector("#schedulable-switch").selected;(null===(e=this.agentDetail)||void 0===e?void 0:e.schedulable)!==t?globalThis.backendaiclient.agent.update(this.agentDetail.id,{schedulable:t}).then((e=>{this.notification.text=p("agent.AgentSettingUpdated"),this.notification.show(),this.agentSettingDialog.hide(),this._loadAgentList()})).catch((e=>{this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)})):(this.notification.text=p("agent.NoChanges"),this.notification.show(),this.agentSettingDialog.hide())}render(){var e,t,i,a,o,s,r;return c`
      <vaadin-grid class="${this.condition}" theme="row-stripes column-borders compact" aria-label="Job list"
                   .items="${this.agents}">
        <vaadin-grid-column width="40px" flex-grow="0" header="#" text-align="center"
                            .renderer="${this._indexRenderer}"></vaadin-grid-column>
        <vaadin-grid-column resizable width="80px" header="${u("agent.Endpoint")}" .renderer="${this._boundEndpointRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column width="100px" resizable header="${u("agent.Region")}"
                            .renderer="${this._boundRegionRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-sort-column width="40px" resizable path="architecture" header="${u("agent.Architecture")}">
        </vaadin-grid-sort-column>
        <vaadin-grid-column resizable header="${u("agent.Starts")}" .renderer="${this._boundContactDateRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable width="140px" header="${u("agent.Resources")}"
                            .renderer="${this._boundResourceRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-sort-column width="100px" resizable path="scaling_group"
                                 header="${u("general.ResourceGroup")}"></vaadin-grid-sort-column>
        <vaadin-grid-column width="130px" flex-grow="0" resizable header="${u("agent.Status")}"
                            .renderer="${this._boundStatusRenderer}"></vaadin-grid-column>
        ${this.enableAgentSchedulable?c`
        <vaadin-grid-column auto-width flex-grow="0" resizable header="${u("agent.Schedulable")}"
                          .renderer="${this._boundSchedulableRenderer}"></vaadin-grid-column>
        `:c``}
        <vaadin-grid-column resizable header="${u("general.Control")}"
                            .renderer="${this._boundControlRenderer}"></vaadin-grid-column>
      </vaadin-grid>
      <backend-ai-dialog id="agent-detail" fixed backdrop blockscrolling persistent scrollable>
        <span slot="title">${u("agent.DetailedInformation")}</span>
        <div slot="content">
          <div class="horizontal start around-justified layout flex">
            ${(null===(e=this.agentDetail)||void 0===e?void 0:e.cpu_util_live)?c`
              <div class="vertical layout start-justified flex">
                <h3>CPU</h3>
                ${this.agentDetail.cpu_util_live.map((e=>c`
                  <div class="horizontal start-justified center layout" style="padding:0 5px;">
                    <div class="agent-detail-title">CPU${e.num}</div>
                    <lablup-progress-bar class="cpu"
                                          progress="${e.pct/100}"
                    ></lablup-progress-bar>
                  </div>`))}
              </div>`:c``}
              <div class="vertical layout start-justified flex">
                <h3>Memory</h3>
                <div>
                  <lablup-progress-bar class="mem"
                                      progress="${this.agentDetail.mem_current_usage_ratio}"
                                      description="${this.agentDetail.current_mem}GB/${this.agentDetail.mem_slots}GB"
                  ></lablup-progress-bar>
                </div>
                <h3>Network</h3>
                ${(null===(i=null===(t=this.agentDetail)||void 0===t?void 0:t.live_stat)||void 0===i?void 0:i.node)?c`
                  <div class="horizontal layout justified" style="width:100px;">
                    <span>TX: </span>
                    <span>${this._bytesToMB(this.agentDetail.live_stat.node.net_tx.current)}MB</span>
                  </div>
                  <div class="horizontal layout justified flex" style="width:100px;">
                    <span>RX: </span>
                    <span>${this._bytesToMB(this.agentDetail.live_stat.node.net_rx.current)}MB</span>
                  </div>
                `:c`
                  <p>${u("agent.NoNetworkSignal")}</p>
                `}
              </div>
              ${(null===(a=this.agentDetail)||void 0===a?void 0:a.cuda_util_live)?c`
                <div class="vertical layout start-justified flex">
                  <h3>CUDA Devices</h3>
                  <h4>Utilization</h4>
                  ${this.agentDetail.cuda_util_live.map((e=>c`
                    <div class="horizontal start-justified center layout">
                      <div class="agent-detail-title">CUDA${e.idx}</div>
                      <div class="horizontal start-justified center layout">
                        <lablup-progress-bar class="cuda"
                                             progress="${e.pct/100}"
                        ></lablup-progress-bar>
                      </div>
                    </div>`))}
                  <h4>Memory</h4>
                  ${this.agentDetail.cuda_mem_live.map((e=>c`
                    <div class="horizontal start-justified center layout">
                      <div class="agent-detail-title">CUDA${e.idx}</div>
                      <div class="horizontal start-justified center layout">
                        <lablup-progress-bar class="cuda"
                                             progress="${e.pct/100}"
                        ></lablup-progress-bar>
                      </div>
                    </div>`))}
                </div>`:c``}
              ${(null===(o=this.agentDetail)||void 0===o?void 0:o.rocm_util_live)?c`
                <div class="vertical layout start-justified flex">
                  <h3>ROCm Devices</h3>
                  <h4>Utilization</h4>
                  ${this.agentDetail.rocm_util_live.map((e=>c`
                    <div class="horizontal start-justified center layout">
                      <div class="agent-detail-title">ROCm${e.num}</div>
                      <div class="horizontal start-justified center layout">
                        <lablup-progress-bar class="cuda"
                                             progress="${e.pct/100}"
                        ></lablup-progress-bar>
                      </div>
                    </div>`))}
                  <h4>Memory</h4>
                  ${this.agentDetail.rocm_mem_live.map((e=>c`
                    <div class="horizontal start-justified center layout">
                      <div class="agent-detail-title">ROCm${e.num}</div>
                      <div class="horizontal start-justified center layout">
                        <lablup-progress-bar class="cuda"
                                             progress="${e.pct/100}"
                        ></lablup-progress-bar>
                      </div>
                    </div>`))}
                </div>`:c``}
              ${(null===(s=this.agentDetail)||void 0===s?void 0:s.tpu_util_live)?c`
                <div class="vertical layout start-justified flex">
                  <h3>TPU Devices</h3>
                  <h4>Utilization</h4>
                  ${this.agentDetail.tpu_util_live.map((e=>c`
                    <div class="horizontal start-justified center layout">
                      <div class="agent-detail-title">TPU${e.num}</div>
                      <div class="horizontal start-justified center layout">
                        <lablup-progress-bar class="cuda"
                                             progress="${e.pct/100}"
                        ></lablup-progress-bar>
                      </div>
                    </div>`))}
                  <h4>Memory</h4>
                  ${this.agentDetail.tpu_mem_live.map((e=>c`
                    <div class="horizontal start-justified center layout">
                      <div class="agent-detail-title">TPU${e.num}</div>
                      <div class="horizontal start-justified center layout">
                        <lablup-progress-bar class="cuda"
                                             progress="${e.pct/100}"
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
      <backend-ai-dialog id="agent-setting" fixed backdrop blockscrolling persistent scrollable>
        <span slot="title">${u("agent.AgentSetting")}</span>
        <div slot="content" class="horizontal layout justified center">
          <span>${u("agent.Schedulable")}</span>
          <mwc-switch id="schedulable-switch" ?selected="${null===(r=this.agentDetail)||void 0===r?void 0:r.schedulable}"></mwc-switch>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
        <mwc-button
          unelevated
          id="update-agent-setting-button"
          icon="check"
          label="${u("button.Update")}"
          @click="${()=>this._modifyAgentSetting()}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}};e([t({type:String})],h.prototype,"condition",void 0),e([t({type:Boolean})],h.prototype,"useHardwareMetadata",void 0),e([t({type:Array})],h.prototype,"agents",void 0),e([t({type:Object})],h.prototype,"agentsObject",void 0),e([t({type:Object})],h.prototype,"agentDetail",void 0),e([t({type:Object})],h.prototype,"notification",void 0),e([t({type:Object})],h.prototype,"agentDetailDialog",void 0),e([t({type:Object})],h.prototype,"agentSettingDialog",void 0),e([t({type:Boolean})],h.prototype,"enableAgentSchedulable",void 0),e([t({type:Object})],h.prototype,"_boundEndpointRenderer",void 0),e([t({type:Object})],h.prototype,"_boundRegionRenderer",void 0),e([t({type:Object})],h.prototype,"_boundContactDateRenderer",void 0),e([t({type:Object})],h.prototype,"_boundResourceRenderer",void 0),e([t({type:Object})],h.prototype,"_boundStatusRenderer",void 0),e([t({type:Object})],h.prototype,"_boundControlRenderer",void 0),e([t({type:Object})],h.prototype,"_boundSchedulableRenderer",void 0),e([t({type:String})],h.prototype,"filter",void 0),h=e([i("backend-ai-agent-list")],h);
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */
let g=class extends a{constructor(){super(),this.condition="running",this.storagesObject=Object(),this.storageProxyDetail=Object(),this.notification=Object(),this.storageProxyDetailDialog=Object(),this._boundEndpointRenderer=this.endpointRenderer.bind(this),this._boundTypeRenderer=this.typeRenderer.bind(this),this._boundResourceRenderer=this.resourceRenderer.bind(this),this._boundCapabilitiesRenderer=this.capabilitiesRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this),this.filter="",this.storages=[]}static get styles(){return[o,s,r,n`
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

        #storage-proxy-detail {
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

      `]}firstUpdated(){this.notification=globalThis.lablupNotification,this.storageProxyDetailDialog=this.shadowRoot.querySelector("#storage-proxy-detail")}connectedCallback(){super.connectedCallback()}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._loadStorageProxyList()}),!0):this._loadStorageProxyList())}_loadStorageProxyList(){!0===this.active&&globalThis.backendaiclient.storageproxy.list(["id","backend","capabilities","path","fsprefix","performance_metric","usage"]).then((e=>{const t=e.storage_volume_list.items,i=[];void 0!==t&&0!=t.length&&Object.keys(t).map(((e,a)=>{const o=t[e];if(""!==this.filter){const e=this.filter.split(":");e[0]in o&&o[e[0]]===e[1]&&i.push(o)}else i.push(o)})),this.storages=i;const a=new CustomEvent("backend-ai-storage-proxy-updated",{});this.dispatchEvent(a),!0===this.active&&setTimeout((()=>{this._loadStorageProxyList()}),15e3)})).catch((e=>{e&&e.message&&(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_byteToMB(e){return Math.floor(e/1e6)}_MBtoGB(e){return Math.floor(e/1024)}_humanReadableDate(e){return new Date(e).toLocaleString()}_indexFrom1(e){return e+1}_heartbeatStatus(e){return e}_indexRenderer(e,t,i){const a=i.index+1;d(c`
        <div>${a}</div>
      `,e)}endpointRenderer(e,t,i){d(c`
        <div>${i.item.id}</div>
        <div class="indicator monospace">${i.item.path}</div>
      `,e)}typeRenderer(e,t,i){let a,o;switch(i.item.backend){case"xfs":a="blue",o="local";break;case"ceph":case"cephfs":a="lightblue",o="ceph";break;case"vfs":case"nfs":case"dgx":a="green",o="local";break;case"purestorage":a="red",o="purestorage";break;default:a="yellow",o="local"}d(c`
        <div class="horizontal start-justified center layout">
          <img src="/resources/icons/${o}.png" style="width:32px;height:32px;"/>
          <lablup-shields app="Backend" color="${a}"
                          description="${i.item.backend}" ui="round"></lablup-shields>
        </div>
      `,e)}_elapsed2(e,t){return globalThis.backendaiclient.utils.elapsedTime(e,t)}resourceRenderer(e,t,i){const a=JSON.parse(i.item.usage),o=a.capacity_bytes>0?a.used_bytes/a.capacity_bytes:0,s=(100*o).toFixed(3);d(c`
        <div class="layout flex">
          <div class="layout horizontal center flex">
            <div class="layout horizontal start resource-indicator">
              <mwc-icon class="fg green">data_usage</mwc-icon>
              <span class="indicator" style="padding-left:5px;">${u("session.Usage")}</span>
            </div>
            <span class="flex"></span>
            <lablup-progress-bar id="volume-usage-bar" progress="${o}"
                                 buffer="${100}"
                                 description="${s}%"></lablup-progress-bar>
          </div>
        </div>
      `,e)}capabilitiesRenderer(e,t,i){d(c`
        <div class="layout vertical start justified wrap">
          ${i.item.capabilities?i.item.capabilities.map((e=>c`
            <lablup-shields app="" color="blue"
                            description="${e}" ui="round"></lablup-shields>
          `)):c``}
        </div>`,e)}showStorageProxyDetailDialog(e){const t=new CustomEvent("backend-ai-selected-storage-proxy",{detail:e});document.dispatchEvent(t)}controlRenderer(e,t,i){let a;try{const e=JSON.parse(i.item.performance_metric);a=!(Object.keys(e).length>0)}catch(e){a=!0}d(c`
        <div id="controls" class="layout horizontal flex center" agent-id="${i.item.id}">
          <mwc-icon-button class="fg blue controls-running" icon="assignment"
                          ?disabled="${a}"
                          @click="${e=>this.showStorageProxyDetailDialog(i.item.id)}"></mwc-icon-button>
        </div>`,e)}_bytesToMB(e){return Number(e/1048576).toFixed(1)}render(){return c`
      <vaadin-grid class="${this.condition}" theme="row-stripes column-borders compact" aria-label="Job list"
                   .items="${this.storages}">
        <vaadin-grid-column width="40px" flex-grow="0" header="#" text-align="center"
                            .renderer="${this._indexRenderer}"></vaadin-grid-column>
        <vaadin-grid-column resizable width="80px" header="${u("agent.Endpoint")}" .renderer="${this._boundEndpointRenderer}">
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
      <backend-ai-dialog id="storage-proxy-detail" fixed backdrop blockscrolling persistent scrollable>
        <span slot="title">${u("agent.DetailedInformation")}</span>
        <div slot="content">
          <div class="horizontal start start-justified layout">
            ${"cpu_util_live"in this.storageProxyDetail?c`
                <div>
                  <h3>CPU</h3>
                  <div class="horizontal wrap layout" style="max-width:600px;">
                    ${this.storageProxyDetail.cpu_util_live.map((e=>c`
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
                                     progress="${this.storageProxyDetail.mem_current_usage_ratio}"
                                     description="${this.storageProxyDetail.current_mem}GB/${this.storageProxyDetail.mem_slots}GB"
                ></lablup-progress-bar>
              </div>
              <h3>Network</h3>
              ${"live_stat"in this.storageProxyDetail&&"node"in this.storageProxyDetail.live_stat?c`
                <div>TX: ${this._bytesToMB(this.storageProxyDetail.live_stat.node.net_tx.current)}MB</div>
                <div>RX: ${this._bytesToMB(this.storageProxyDetail.live_stat.node.net_rx.current)}MB</div>
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
    `}};e([t({type:String})],g.prototype,"condition",void 0),e([t({type:Array})],g.prototype,"storages",void 0),e([t({type:Object})],g.prototype,"storagesObject",void 0),e([t({type:Object})],g.prototype,"storageProxyDetail",void 0),e([t({type:Object})],g.prototype,"notification",void 0),e([t({type:Object})],g.prototype,"storageProxyDetailDialog",void 0),e([t({type:Object})],g.prototype,"_boundEndpointRenderer",void 0),e([t({type:Object})],g.prototype,"_boundTypeRenderer",void 0),e([t({type:Object})],g.prototype,"_boundResourceRenderer",void 0),e([t({type:Object})],g.prototype,"_boundCapabilitiesRenderer",void 0),e([t({type:Object})],g.prototype,"_boundControlRenderer",void 0),e([t({type:String})],g.prototype,"filter",void 0),g=e([i("backend-ai-storage-proxy-list")],g);
/**
 @license
 Copyright (c) 2015-2018 Lablup Inc. All rights reserved.
 */
let b=class extends a{constructor(){super(),this._boundControlRenderer=this._controlRenderer.bind(this),this.allowedSessionTypesObjects={interactive:"interactive",batch:"batch",both:"both (interactive, batch)"},this.enableSchedulerOpts=!1,this.enableWSProxyAddr=!1,this.functionCount=0,this.active=!1,this.schedulerTypes=["fifo","lifo","drf"],this.resourceGroups=[],this.resourceGroupInfo={},this.domains=[]}static get styles(){return[o,s,r,n`
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

        backend-ai-dialog {
          --component-min-width: 350px;
        }

        backend-ai-dialog wl-textarea,
        backend-ai-dialog wl-select {
          margin-bottom: 20px;
          --input-font-family: var(--general-font-family);
        }

        backend-ai-dialog mwc-textfield,
        backend-ai-dialog mwc-textarea {
          width: 100%;
          margin: 5px auto 5px auto;
          --mdc-typography-font-family: var(--general-font-family);
          --mdc-theme-primary: var(--general-textfield-selected-color);
        }

        backend-ai-dialog wl-label {
          --label-font-family: 'Ubuntu', Roboto;
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
          --mdc-theme-on-primary: #38bd73;
        }

        mwc-textarea {
          height: 135px;
        }

        mwc-select {
          width:100%;
          --mdc-typography-font-family: var(--general-font-family);
          --mdc-theme-primary: var(--general-textfield-selected-color);
          --mdc-select-fill-color: transparent;
        }

        mwc-list-item {
          --mdc-menu-item-height: 20px;
        }

        #resource-group-detail-dialog {
          --component-width: 500px;
        }

        #resource-group-dialog {
          --component-width: 350px;
        }

        wl-expansion {
          --expansion-content-padding: 2px;
          --expansion-elevation: 0;
          --expansion-elevation-open: 0;
          --expansion-elevation-hover: 0;
          --expansion-header-padding: 16px;
          --expansion-margin-open: 0;
        }

        backend-ai-dialog h4 {
          font-weight: 700;
          font-size: 14px;
          padding: 5px 15px 5px 12px;
          margin: 0 0 10px 0;
          display: block;
          height: 20px;
          border-bottom: 1px solid #DDD;
        }

        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: var(--list-height, calc(100vh - 246px));
        }

        vaadin-item {
          padding: 5px 17px 5px 17px;
          font-size: 12px;
          font-weight: 100;
        }

        .scheduler-option-value {
          font-size: 16px;
          font-weight: 700;
        }

        #resource-group-detail-dialog wl-textarea {
          margin-bottom: 0px;
          --input-border-width: 0;
          --input-padding-top-bottom: 0px;
          --input-padding-left-right: 12px;
          --input-font-size: 0.75rem;
          --textarea-height: 100px;
        }
      `]}firstUpdated(){this.notification=globalThis.lablupNotification}connectedCallback(){super.connectedCallback()}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.enableSchedulerOpts=globalThis.backendaiclient.supports("scheduler-opts"),this.enableWSProxyAddr=globalThis.backendaiclient.supports("wsproxy-addr"),globalThis.backendaiclient.scalingGroup.list_available().then((e=>{this.resourceGroups=e.scaling_groups})).catch((e=>{this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)})),globalThis.backendaiclient.domain.list().then((({domains:e})=>{this.domains=e,this.requestUpdate()})).catch((e=>{this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)}))}),!0):(this.enableSchedulerOpts=globalThis.backendaiclient.supports("scheduler-opts"),this.enableWSProxyAddr=globalThis.backendaiclient.supports("wsproxy-addr"),globalThis.backendaiclient.scalingGroup.list_available().then((e=>{this.resourceGroups=e.scaling_groups})).catch((e=>{this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)})),globalThis.backendaiclient.domain.list().then((({domains:e})=>{this.domains=e,this.requestUpdate()})).catch((e=>{this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)}))))}_activeStatusRenderer(e,t,i){d(c`
        <lablup-shields
          app=""
          color=${i.item.is_active?"green":"red"}
          description=${i.item.is_active?"active":"inactive"}
          ui="flat"
        ></lablup-shields>
    `,e)}_indexRenderer(e,t,i){const a=i.index+1;d(c`
        <div>${a}</div>
      `,e)}_launchDialogById(e){this.shadowRoot.querySelector(e).show()}_hideDialogById(e){this.shadowRoot.querySelector(e).hide()}_controlRenderer(e,t,i){d(c`
        <div id="controls" class="layout horizontal flex center">
          <wl-button fab flat inverted
            class="fg green"
            @click=${()=>this._launchDetailDialog(i.item)}
          ><wl-icon>assignment</wl-icon></wl-button>
          <wl-button fab flat inverted
            class="fg blue"
            @click=${()=>this._launchModifyDialog(i.item)}
          ><wl-icon>settings</wl-icon></wl-button>
          <wl-button fab flat inverted
            class="fg red"
            @click=${()=>this._launchDeleteDialog(i.item)}
          ><wl-icon>delete</wl-icon></wl-button>
        </div>
      `,e)}_validateResourceGroupName(){const e=this.resourceGroups.map((e=>e.name)),t=this.shadowRoot.querySelector("#resource-group-name");t.validityTransform=(i,a)=>{if(a.valid){const a=!e.includes(i);return a||(t.validationMessage=p("resourceGroup.ResourceGroupAlreadyExist")),{valid:a,customError:!a}}return a.valueMissing?(t.validationMessage=p("resourceGroup.ResourceGroupNameRequired"),{valid:a.valid,valueMissing:!a.valid}):(t.validationMessage=p("resourceGroup.EnterValidResourceGroupName"),{valid:a.valid,customError:!a.valid})}}_createResourceGroup(){const e=this.shadowRoot.querySelector("#resource-group-name");if(e.checkValidity()&&this._verifyCreateSchedulerOpts()){this._saveSchedulerOpts();const t=e.value,i=this.shadowRoot.querySelector("#resource-group-description").value,a=this.shadowRoot.querySelector("#resource-group-domain").value,o={description:i,is_active:!0,driver:"static",driver_opts:"{}",scheduler:"fifo"};if(this.enableSchedulerOpts&&(o.scheduler_opts=JSON.stringify(this.schedulerOpts)),this.enableWSProxyAddr){const e=this.shadowRoot.querySelector("#resource-group-wsproxy-address").value;o.wsproxy_addr=e}globalThis.backendaiclient.scalingGroup.create(t,o).then((({create_scaling_group:e})=>e.ok?globalThis.backendaiclient.scalingGroup.associate_domain(a,t):Promise.reject(e.msg))).then((({associate_scaling_group_with_domain:e})=>{e.ok?(this.notification.text=p("resourceGroup.ResourceGroupCreated"),this._refreshList(),this.shadowRoot.querySelector("#resource-group-name").value="",this.shadowRoot.querySelector("#resource-group-description").value=""):(this.notification.text=l.relieve(e.title),this.notification.detail=e.msg),this._hideDialogById("#resource-group-dialog"),this.notification.show()})).catch((e=>{this.notification.text=l.relieve(e.title),this.notification.detail=e,this._hideDialogById("#resource-group-dialog"),this.notification.show(!0,e)}))}}_modifyResourceGroup(){if(!1===this._verifyModifySchedulerOpts())return;this._saveSchedulerOpts();const e=this.shadowRoot.querySelector("#resource-group-description").value,t=this.shadowRoot.querySelector("#resource-group-scheduler").value,i=this.shadowRoot.querySelector("#resource-group-active").checked,a=this.schedulerOpts,o=this.resourceGroupInfo.name,s={};if(e!==this.resourceGroupInfo.description&&(s.description=e),t!==this.resourceGroupInfo.scheduler&&(s.scheduler=t),i!==this.resourceGroupInfo.is_active&&(s.is_active=i),this.enableWSProxyAddr){let e=this.shadowRoot.querySelector("#resource-group-wsproxy-address").value;e.endsWith("/")&&(e=e.slice(0,e.length-1)),e!==this.resourceGroupInfo.wsproxy_addr&&(s.wsproxy_addr=e)}if(this.enableSchedulerOpts&&a!==this.resourceGroupInfo.scheduler_opts&&(s.scheduler_opts=JSON.stringify(a)),0===Object.keys(s).length)return this.notification.text=p("resourceGroup.NochangesMade"),void this.notification.show();globalThis.backendaiclient.scalingGroup.update(o,s).then((({modify_scaling_group:e})=>{e.ok?(this.notification.text=p("resourceGroup.ResourceGroupModified"),this._refreshList()):(this.notification.text=l.relieve(e.msg),this.notification.detail=e.msg),this._hideDialogById("#resource-group-dialog"),this.notification.show()}))}_deleteResourceGroup(){const e=this.resourceGroupInfo.name;if(this.shadowRoot.querySelector("#delete-resource-group").value!==e)return this.notification.text=p("resourceGroup.ResourceGroupNameNotMatch"),this._hideDialogById("#delete-resource-group-dialog"),void this.notification.show();globalThis.backendaiclient.scalingGroup.delete(e).then((({delete_scaling_group:e})=>{e.ok?(this.notification.text=p("resourceGroup.ResourceGroupDeleted"),this._refreshList(),this.shadowRoot.querySelector("#delete-resource-group").value=""):(this.notification.text=l.relieve(e.msg),this.notification.detail=e.msg),this._hideDialogById("#delete-resource-group-dialog"),this.notification.show()}))}_refreshList(){globalThis.backendaiclient.scalingGroup.list_available().then((({scaling_groups:e})=>{this.resourceGroups=e,this.requestUpdate()}))}_initializeCreateSchedulerOpts(){const e=this.shadowRoot.querySelector("#allowed-session-types"),t=this.shadowRoot.querySelector("#pending-timeout"),i=this.shadowRoot.querySelector("#num-retries-to-skip"),a=this.shadowRoot.querySelector("#scheduler-options-input-form");e.value="both",a.checked=!1,(null==t?void 0:t.value)&&(t.value=""),(null==i?void 0:i.value)&&(i.value="")}_initializeModifySchedulerOpts(e="",t){var i;const a=this.shadowRoot.querySelector("#allowed-session-types"),o=this.shadowRoot.querySelector("#pending-timeout"),s=this.shadowRoot.querySelector("#num-retries-to-skip");"allowed_session_types"===e?t.includes("interactive")&&t.includes("batch")?a.value="both":a.value=t[0]:"pending_timeout"===e?o.value=t:"config"===e&&(s.value=null!==(i=t.num_retries_to_skip)&&void 0!==i?i:"")}_verifyCreateSchedulerOpts(){return!([this.shadowRoot.querySelector("#allowed-session-types"),this.shadowRoot.querySelector("#pending-timeout"),this.shadowRoot.querySelector("#num-retries-to-skip")].filter((e=>!e.checkValidity())).length>0)}_verifyModifySchedulerOpts(){return!([this.shadowRoot.querySelector("#allowed-session-types"),this.shadowRoot.querySelector("#pending-timeout"),this.shadowRoot.querySelector("#num-retries-to-skip")].filter((e=>!e.checkValidity())).length>0)}_saveSchedulerOpts(){this.schedulerOpts={};const e=this.shadowRoot.querySelector("#allowed-session-types"),t=this.shadowRoot.querySelector("#pending-timeout"),i=this.shadowRoot.querySelector("#num-retries-to-skip");"both"===e.value?this.schedulerOpts.allowed_session_types=["interactive","batch"]:this.schedulerOpts.allowed_session_types=[e.value],""!==t.value&&(this.schedulerOpts.pending_timeout=t.value),""!==i.value&&Object.assign(this.schedulerOpts,{config:{num_retries_to_skip:i.value}})}_launchCreateDialog(){this.enableSchedulerOpts&&this._initializeCreateSchedulerOpts(),this.resourceGroupInfo={},this._launchDialogById("#resource-group-dialog")}_launchDeleteDialog(e){this.resourceGroupInfo=e,this._launchDialogById("#delete-resource-group-dialog")}_launchDetailDialog(e){this.resourceGroupInfo=e,this._launchDialogById("#resource-group-detail-dialog")}_launchModifyDialog(e){if(this.resourceGroupInfo=e,this.enableSchedulerOpts){const e=JSON.parse(this.resourceGroupInfo.scheduler_opts);Object.entries(e).forEach((([e,t])=>{this._initializeModifySchedulerOpts(e,t)}))}this._launchDialogById("#resource-group-dialog")}render(){var e,t,i,a,o,s,r,n,l,d,h,g,b,v,m,_,y,f,x,w;return c`
      <h4 class="horizontal flex center center-justified layout">
        <span>${u("resourceGroup.ResourceGroups")}</span>
        <span class="flex"></span>
          <mwc-button
              raised
              icon="add"
              label="${u("button.Add")}"
              @click=${this._launchCreateDialog}>
          </mwc-button>
      </h4>
      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Job list" .items="${this.resourceGroups}">
        <vaadin-grid-column flex-grow="0" header="#" width="40px" .renderer=${this._indexRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${u("resourceGroup.Name")}" path="name">
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${u("resourceGroup.Description")}" path="description">
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${u("resourceGroup.ActiveStatus")}" .renderer=${this._activeStatusRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${u("resourceGroup.Driver")}" path="driver">
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${u("resourceGroup.Scheduler")}" path="scheduler">
        </vaadin-grid-column>
        ${this.enableWSProxyAddr?c`
        <vaadin-grid-column resizable header="${u("resourceGroup.WsproxyAddress")}" path="wsproxy_addr">
        </vaadin-grid-column>
        `:c``}
        <vaadin-grid-column flex-grow="1" header="${u("general.Control")}" .renderer=${this._boundControlRenderer}>
        </vaadin-grid-column>
      </vaadin-grid>
      <backend-ai-dialog id="resource-group-dialog" fixed backdrop blockscrolling>
        <span slot="title"> ${(null===(e=this.resourceGroupInfo)||void 0===e?void 0:e.name)?u("resourceGroup.ModifyResourceGroup"):u("resourceGroup.CreateResourceGroup")}</span>
        <div slot="content" class="login-panel intro centered">
          ${Object.keys(this.resourceGroupInfo).length>0?c`
            <div class="horizontal layout flex wrap center justified">
              <p style="margin-left: 18px;color:rgba(0, 0, 0, 0.6);">
                ${u("resourceGroup.Active")}
              </p>
              <mwc-switch id="resource-group-active" style="margin-right:10px;" ?selected="${this.resourceGroupInfo.is_active}">
              </mwc-switch>
            </div>
            <mwc-select
              id="resource-group-scheduler"
              label="${u("resourceGroup.SelectScheduler")}"
              value="${0===this.resourceGroupInfo.length?"":this.resourceGroupInfo.scheduler}">
              ${this.schedulerTypes.map((e=>c`
                <mwc-list-item value="${e}">${e}</mwc-list-item>
              `))}
            </mwc-select>
          `:c`
          <mwc-select required id="resource-group-domain" label="${u("resourceGroup.SelectDomain")}">
            ${this.domains.map(((e,t)=>c`
              <mwc-list-item value="${e.name}" ?selected=${0===t}>
                ${e.name}
              </mwc-list-item>
            `))}
          </mwc-select>
          <mwc-textfield
            type="text"
            id="resource-group-name"
            label="${u("resourceGroup.ResourceGroupName")}"
            maxLength="64"
            placeholder="${u("maxLength.64chars")}"
            validationMessage="${u("data.explorer.ValueRequired")}"
            required
            autoValidate
            @change="${()=>this._validateResourceGroupName()}"
          ></mwc-textfield>
          `}
          <mwc-textarea
            name="description"
            id="resource-group-description"
            label="${u("resourceGroup.Description")}"
            maxLength="512"
            placeholder="${u("maxLength.512chars")}"
            value="${null!==(i=null===(t=this.resourceGroupInfo)||void 0===t?void 0:t.description)&&void 0!==i?i:""}"
          ></mwc-textarea>
          ${this.enableWSProxyAddr?c`
          <mwc-textfield
                id="resource-group-wsproxy-address"
                type="url"
                label="${u("resourceGroup.WsproxyAddress")}"
                placeholder="http://localhost:10200"
                value="${null!==(o=null===(a=this.resourceGroupInfo)||void 0===a?void 0:a.wsproxy_addr)&&void 0!==o?o:""}"
              ></mwc-textfield>
            `:c``}
          ${this.enableSchedulerOpts?c`
            <wl-expansion id="scheduler-options-input-form">
              <span slot="title">${u("resourceGroup.SchedulerOptions")}</span>
              <mwc-select id="allowed-session-types" label="allowed session types" required>
                ${Object.entries(this.allowedSessionTypesObjects).map((([e,t])=>c`<mwc-list-item value="${e}">${t}</mwc-list-item>`))}
              </mwc-select>
              <mwc-textfield
                type="number"
                value="0"
                id="pending-timeout"
                label="pending timeout"
                placeholder="0"
                suffix="${u("resourceGroup.TimeoutSeconds")}"
                validationMessage="${u("settings.InvalidValue")}"
                autoValidate
                min="0"
                value="${null!==(n=null===(r=null===(s=this.resourceGroupInfo)||void 0===s?void 0:s.scheduler_opts)||void 0===r?void 0:r.pending_timeout)&&void 0!==n?n:""}"
              ></mwc-textfield>
              <mwc-textfield
                  type="number"
                  value="0"
                  id="num-retries-to-skip"
                  label="# retries to skip pending session"
                  placeholder="0"
                  suffix="${u("resourceGroup.RetriesToSkip")}"
                  validationMessage="${u("settings.InvalidValue")}"
                  autoValidate
                  min="0"
                  value="${null!==(g=null===(h=null===(d=null===(l=this.resourceGroupInfo)||void 0===l?void 0:l.scheduler_opts)||void 0===d?void 0:d.config)||void 0===h?void 0:h.num_retries_to_skip)&&void 0!==g?g:""}"
                ></mwc-textfield>
            </wl-expansion>
            `:c``}
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          ${Object.keys(this.resourceGroupInfo).length>0?c`
          <mwc-button
              unelevated
              icon="save"
              label="${u("button.Save")}"
              @click="${this._modifyResourceGroup}">
          </mwc-button>
          `:c`
          <mwc-button
              unelevated
              icon="add"
              label="${u("button.Create")}"
              @click="${this._createResourceGroup}"></mwc-button>
          `}
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="delete-resource-group-dialog" fixed backdrop blockscrolling>
        <span slot="title">${u("dialog.warning.CannotBeUndone")}</span>
        <div slot="content">
          <mwc-textfield
            id="delete-resource-group"
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
            style="box-sizing: border-box;"
            @click="${this._deleteResourceGroup}">
            </mwc-button>
       </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="resource-group-detail-dialog" fixed backdrop blockscrolling>
        ${Object.keys(this.resourceGroupInfo).length>0?c`
          <span slot="title" class="horizontal center layout">
            <span style="margin-right:15px;">${p("resourceGroup.ResourceGroupDetail")}</span>
          </span>
          <div slot="content" class="intro">
            <div class="horizontal layout" style="margin-bottom:15px;">
              <div style="width:250px;">
                <h4>${p("credential.Information")}</h4>
                <div role="listbox" class="vertical layout">
                  <vaadin-item>
                    <div><strong>${p("resourceGroup.Name")}</strong></div>
                    <div class="scheduler-option-value">${this.resourceGroupInfo.name}</div>
                  </vaadin-item>
                  <vaadin-item>
                    <div><strong>${p("resourceGroup.ActiveStatus")}</strong></div>
                    <lablup-shields
                      app=""
                      color=${this.resourceGroupInfo.is_active?"green":"red"}
                      description=${(null===(b=this.resourceGroupInfo)||void 0===b?void 0:b.is_active)?"active":"inactive"}
                      ui="flat"
                    ></lablup-shields>
                  </vaadin-item>
                  <vaadin-item>
                    <div><strong>${p("resourceGroup.Driver")}</strong></div>
                    <div class="scheduler-option-value">${null===(v=this.resourceGroupInfo)||void 0===v?void 0:v.driver}</div>
                  </vaadin-item>
                  <vaadin-item>
                    <div><strong>${p("resourceGroup.Scheduler")}</strong></div>
                    <div class="scheduler-option-value">${null===(m=this.resourceGroupInfo)||void 0===m?void 0:m.scheduler}</div>
                  </vaadin-item>
                  ${this.enableWSProxyAddr?c`
                  <vaadin-item>
                    <div><strong>${p("resourceGroup.WsproxyAddress")}</strong></div>
                    <div class="scheduler-option-value">${null!==(y=null===(_=this.resourceGroupInfo)||void 0===_?void 0:_.wsproxy_addr)&&void 0!==y?y:"none"}</div>
                  </vaadin-item>
                  `:c``}
                </div>
              </div>
              <div class="center vertial layout" style="width:250px;">
                <div>
                  <h4 class="horizontal center layout">
                    ${u("resourceGroup.SchedulerOptions")}
                  </h4>
                  <div role="listbox">
                    ${this.enableSchedulerOpts?c`
                      ${Object.entries(JSON.parse(null===(f=this.resourceGroupInfo)||void 0===f?void 0:f.scheduler_opts)).map((([e,t])=>"allowed_session_types"===e?c`
                                  <vaadin-item>
                                    <div><strong>allowed session types</strong></div>
                                    <div class="scheduler-option-value">${t.join(", ")}</div>
                                  </vaadin-item>`:"pending_timeout"===e?c`
      <vaadin-item>
      <div><strong>pending timeout</strong></div>
      <div class="scheduler-option-value">${t+" "+p("resourceGroup.TimeoutSeconds")}</div>
    </vaadin-item>`:"config"===e&&t.num_retries_to_skip?c`
        <vaadin-item>
        <div><strong># retries to skip pending session</strong></div>
        <div class="scheduler-option-value">${t.num_retries_to_skip+" "+p("resourceGroup.RetriesToSkip")}</div>
      </vaadin-item>`:""))}
                    `:c``}
                  </div>
                </div>
                <div>
                  <h4 class="horizontal center layout">
                    ${u("resourceGroup.DriverOptions")}
                  </h4>
                  <div role="listbox">
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4>
                ${u("resourceGroup.Description")}
              </h4>
              <wl-textarea readonly value="${null!==(w=null===(x=this.resourceGroupInfo)||void 0===x?void 0:x.description)&&void 0!==w?w:""}">
              </wl-textarea>
            </div>
          </div>`:""}
      </backend-ai-dialog>
    `}};e([t({type:Object})],b.prototype,"_boundControlRenderer",void 0),e([t({type:Array})],b.prototype,"domains",void 0),e([t({type:Object})],b.prototype,"resourceGroupInfo",void 0),e([t({type:Array})],b.prototype,"resourceGroups",void 0),e([t({type:Array})],b.prototype,"schedulerTypes",void 0),e([t({type:Object})],b.prototype,"schedulerOpts",void 0),e([t({type:Object})],b.prototype,"allowedSessionTypesObjects",void 0),e([t({type:Boolean})],b.prototype,"enableSchedulerOpts",void 0),e([t({type:Boolean})],b.prototype,"enableWSProxyAddr",void 0),e([t({type:Number})],b.prototype,"functionCount",void 0),b=e([i("backend-ai-resource-group-list")],b);
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */
let v=class extends a{constructor(){super(),this._status="inactive",this._tab="running-lists",this.enableStorageProxy=!1}static get styles(){return[o,n`
        h3.tab {
          background-color: var(--general-tabbar-background-color);
          border-radius: 5px 5px 0 0;
          margin: 0 auto;
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
      `]}firstUpdated(){void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.enableStorageProxy=globalThis.backendaiclient.supports("storage-proxy")}),!0):this.enableStorageProxy=globalThis.backendaiclient.supports("storage-proxy")}async _viewStateChanged(e){if(await this.updateComplete,!e)return this.shadowRoot.querySelector("#running-agents").active=!1,this.shadowRoot.querySelector("#terminated-agents").active=!1,this.shadowRoot.querySelector("#scaling-groups").active=!1,void(this._status="inactive");this.shadowRoot.querySelector("#running-agents").active=!0,this.shadowRoot.querySelector("#terminated-agents").active=!0,this.shadowRoot.querySelector("#scaling-groups").active=!1,this._status="active"}_showTab(e){const t=this.shadowRoot.querySelectorAll(".tab-content");for(let e=0;e<t.length;e++)t[e].style.display="none";this.shadowRoot.querySelector("#"+e.title).style.display="block",this._tab=e.title}render(){return c`
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
            <backend-ai-resource-group-list id="scaling-groups" ?active="${"active"===this._status&&"scaling-group-lists"===this._tab}"> </backend-ai-resource-group-list>
          </div>
        </div>
      </lablup-activity-panel>
    `}};e([t({type:String})],v.prototype,"_status",void 0),e([t({type:String})],v.prototype,"_tab",void 0),e([t({type:Boolean})],v.prototype,"enableStorageProxy",void 0),v=e([i("backend-ai-agent-view")],v);var m=v;export{m as default};
