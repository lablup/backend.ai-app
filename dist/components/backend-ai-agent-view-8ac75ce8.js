import{_ as e,p as t,c as i,B as a,d as s,I as o,a as r,b as n,f as l,W as c,h as d,t as u,g as p}from"./backend-ai-console-22d31a8d.js";import"./mwc-linear-progress-bf85309b.js";import"./lablup-activity-panel-7944657c.js";import"./radio-behavior-ddc0148e.js";import"./vaadin-grid-sorter-f0db9e83.js";import"./vaadin-grid-sort-column-cab34161.js";import"./mwc-tab-bar-ef87d5ea.js";import"./tab-group-9d0f9222.js";import"./select-b521709e.js";import"./switch-6a2b55ad.js";import"./mwc-switch-8b84e37a.js";import"./mwc-textarea-066f859e.js";import"./textarea-6b1c3d5a.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let g=class extends a{constructor(){super(),this.condition="running",this.agents=Array(),this.notification=Object(),this._boundRegionRenderer=this.regionRenderer.bind(this),this._boundContactDateRenderer=this.contactDateRenderer.bind(this),this._boundResourceRenderer=this.resourceRenderer.bind(this),this._boundStatusRenderer=this.statusRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this)}static get styles(){return[s,o,r,n`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 200px);
        }

        wl-button > wl-icon {
          --icon-size: 24px;
          padding: 0;
        }

        wl-icon {
          --icon-size: 16px;
          padding: 0;
        }

        wl-icon {
          width: 16px;
          height: 16px;
          --icon-size: 16px;
          min-width: 16px;
          min-height: 16px;
          padding: 0;
        }

        img.indicator-icon {
          width: 16px;
          height: 16px;
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

        mwc-linear-progress {
          width: 100px;
          border-radius: 3px;
          height: 10px;
          --mdc-theme-primary: #3677eb;
          --mdc-linear-progress-buffer-color: #98be5a;
        }

        .maintaining mwc-linear-progress,
        .terminated mwc-linear-progress {
          --mdc-linear-progress-buffering-dots-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 1 1'%3E%3Cpath d='M0,0h1v1H0' fill='#fff'/%3E%3C/svg%3E");
        }

        .asic-indicator {
          border-top: 1px solid #ccc;
          margin-top: 3px;
          padding-top: 3px;
        }
      `]}firstUpdated(){this.notification=globalThis.lablupNotification}connectedCallback(){super.connectedCallback()}async _viewStateChanged(e){if(await this.updateComplete,!1!==e)if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)document.addEventListener("backend-ai-connected",(()=>{this._loadAgentList("ALIVE")}),!0);else{let e="ALIVE";this._loadAgentList(e)}}_loadAgentList(e="running"){if(!0!==this.active)return;switch(this.condition){case"running":e="ALIVE";break;case"terminated":e="TERMINATED";break;case"archived":default:e="ALIVE"}globalThis.backendaiclient.agent.list(e,["id","status","version","addr","region","compute_plugins","first_contact","cpu_cur_pct","mem_cur_bytes","available_slots","occupied_slots","scaling_group"]).then((t=>{let i=t.agents;void 0!==i&&0!=i.length&&Object.keys(i).map(((e,t)=>{let a=i[e],s=JSON.parse(a.occupied_slots),o=JSON.parse(a.available_slots),r=JSON.parse(a.compute_plugins);if(["cpu","mem"].forEach((e=>{e in s==!1&&(s[e]="0")})),i[e].cpu_slots=parseInt(o.cpu),i[e].used_cpu_slots=parseInt(s.cpu),null!==a.cpu_cur_pct?(i[e].current_cpu_percent=a.cpu_cur_pct,i[e].cpu_total_usage_ratio=i[e].used_cpu_slots/i[e].cpu_slots,i[e].cpu_current_usage_ratio=i[e].current_cpu_percent/i[e].cpu_slots/100,i[e].current_cpu_percent=i[e].current_cpu_percent.toFixed(2)):(i[e].current_cpu_percent=0,i[e].cpu_total_usage_ratio=0,i[e].cpu_current_usage_ratio=0),null!==a.mem_cur_bytes?i[e].current_mem_bytes=a.mem_cur_bytes:i[e].current_mem_bytes=0,i[e].current_mem=globalThis.backendaiclient.utils.changeBinaryUnit(a.current_mem_bytes,"g"),i[e].mem_slots=parseInt(globalThis.backendaiclient.utils.changeBinaryUnit(o.mem,"g")),i[e].used_mem_slots=parseInt(globalThis.backendaiclient.utils.changeBinaryUnit(s.mem,"g")),i[e].mem_total_usage_ratio=i[e].used_mem_slots/i[e].mem_slots,i[e].mem_current_usage_ratio=i[e].current_mem/i[e].mem_slots,i[e].current_mem=i[e].current_mem.toFixed(2),"cuda.device"in o&&(i[e].cuda_gpu_slots=parseInt(o["cuda.device"]),i[e].used_cuda_gpu_slots="cuda.device"in s?parseInt(s["cuda.device"]):0,i[e].used_cuda_gpu_slots_ratio=i[e].used_cuda_gpu_slots/i[e].cuda_gpu_slots),"cuda.shares"in o&&(i[e].cuda_fgpu_slots=parseInt(o["cuda.shares"]),i[e].used_cuda_fgpu_slots="cuda.shares"in s?parseInt(s["cuda.shares"]):0,i[e].used_cuda_fgpu_slots_ratio=i[e].used_cuda_fgpu_slots/i[e].cuda_fgpu_slots),"rocm.device"in o&&(i[e].rocm_gpu_slots=parseInt(o["rocm.device"]),i[e].used_rocm_gpu_slots="rocm.device"in s?parseInt(s["rocm.device"]):0,i[e].used_rocm_gpu_slots_ratio=i[e].used_rocm_gpu_slots/i[e].rocm_gpu_slots),"cuda"in r){let t=r.cuda;i[e].cuda_plugin=t}})),this.agents=i,!0===this.active&&setTimeout((()=>{this._loadAgentList(e)}),15e3)})).catch((e=>{e&&e.message&&(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_isRunning(){return"running"===this.condition}_byteToMB(e){return Math.floor(e/1e6)}_MBtoGB(e){return Math.floor(e/1024)}_elapsed(e,t){let i,a=new Date(e);i="running"===this.condition?new Date:new Date(t);var s=Math.floor((i.getTime()-a.getTime())/1e3);return"running"===this.condition?"Running "+s+"sec.":"Reserved for "+s+"sec."}_humanReadableDate(e){return new Date(e).toLocaleString("ko-KR")}_indexFrom1(e){return e+1}_heartbeatStatus(e){return e}_heartbeatColor(e){switch(e){case"ALIVE":return"green";case"TERMINATED":return"red";default:return"blue"}}_indexRenderer(e,t,i){let a=i.index+1;c(d`
        <div>${a}</div>
      `,e)}regionRenderer(e,t,i){let a,s,o,r,n=i.item.region.split("/");switch(n.length>1?(a=n[0],s=n[1]):(a=n[0],s=""),a){case"aws":o="orange",r="aws";break;case"azure":o="blue",r="azure";break;case"gcp":o="lightblue",r="gcp";break;case"nbp":o="green",r="nbp";break;case"openstack":o="red",r="openstack";break;case"local":o="yellow",r="local";break;default:o="yellow",r="local"}c(d`
        <div class="horizontal start-justified center layout">
          <img src="/resources/icons/${r}.png" style="width:32px;height:32px;"/>
          <lablup-shields app="${s}" color="${o}"
                          description="${a}" ui="flat"></lablup-shields>
        </div>
    `,e)}contactDateRenderer(e,t,i){c(d`
        <div class="layout vertical">
            <span>${this._humanReadableDate(i.item.first_contact)}</span>
        </div>`,e)}resourceRenderer(e,t,i){c(d`
        <div class="layout flex">
          <div class="layout horizontal center flex">
            <wl-icon class="fg green">developer_board</wl-icon>
            <div class="layout vertical start" style="padding-left:5px;">
              <div class="layout horizontal start">
                <span>${i.item.cpu_slots}</span>
                <span class="indicator">${u("general.cores")}</span>
              </div>
              <div class="layout horizontal start">
                <span>${i.item.current_cpu_percent}</span>
                <span class="indicator">%</span>
              </div>
            </div>
            <span class="flex"></span>
            <mwc-linear-progress id="cpu-usage-bar" progress="${i.item.cpu_current_usage_ratio}"
                            buffer="${i.item.cpu_total_usage_ratio}"></mwc-linear-progress>
          </div>
          <div class="layout horizontal center flex">
            <wl-icon class="fg green">memory</wl-icon>
            <div class="layout vertical start" style="padding-left:5px;">
              <div class="layout horizontal start">
                <span>${i.item.mem_slots}</span>
                <span class="indicator">GB</span>
              </div>
              <div class="layout horizontal start">
                <span>${i.item.current_mem}</span>
                <span class="indicator">GB</span>
              </div>
            </div>
            <span class="flex"></span>
            <mwc-linear-progress id="mem-usage-bar" progress="${i.item.mem_current_usage_ratio}"
                            buffer="${i.item.mem_total_usage_ratio}"></mwc-linear-progress>

          </div>
          ${i.item.cuda_gpu_slots?d`
            <div class="layout horizontal center flex asic-indicator">
              <img class="indicator-icon fg green" src="/resources/icons/file_type_cuda.svg" />
              <span style="padding-left:5px;">${i.item.cuda_gpu_slots}</span>
              <span class="indicator">GPU</span>
              <span class="flex"></span>
              <mwc-linear-progress id="gpu-bar" value="${i.item.used_cuda_gpu_slots_ratio}" buffer="${i.item.used_cuda_gpu_slots_ratio}"></mwc-linear-progress>
            </div>
            `:d``}
          ${i.item.cuda_fgpu_slots?d`
            <div class="layout horizontal center flex asic-indicator">
              <img class="indicator-icon fg green" src="/resources/icons/file_type_cuda.svg" />
              <span style="padding-left:5px;">${i.item.cuda_fgpu_slots}</span>
              <span class="indicator">fGPU</span>
              <span class="flex"></span>
              <mwc-linear-progress id="vgpu-bar" value="${i.item.used_cuda_fgpu_slots_ratio}" buffer="${i.item.used_cuda_fgpu_slots_ratio}"></mwc-linear-progress>
            </div>
            `:d``}
          ${i.item.rocm_gpu_slots?d`
            <div class="layout horizontal center flex asic-indicator">
              <img class="indicator-icon fg green" src="/resources/icons/ROCm.png" />
              <span style="padding-left:5px;">${i.item.rocm_gpu_slots}</span>
              <span class="indicator">ROCm</span>
              <span class="flex"></span>
              <mwc-linear-progress id="rocm-gpu-bar" value="${i.item.used_rocm_gpu_slots_ratio}" buffer="${i.item.used_rocm_gpu_slots_ratio}"></mwc-linear-progress>
            </div>
            `:d``}
          ${i.item.tpu_slots?d`
            <div class="layout horizontal center flex asic-indicator">
              <img class="indicator-icon fg green" src="/resources/icons/tpu.svg" />
              <span style="padding-left:5px;">${i.item.tpu_slots}</span>
              <span class="indicator">TPU</span>
              <span class="flex"></span>
              <mwc-linear-progress id="tpu-bar" value="${i.item.used_tpu_slots_ratio}" buffer="${i.item.used_tpu_slots_ratio}"></mwc-linear-progress>
            </div>
            `:d``}
        </div>`,e)}statusRenderer(e,t,i){c(d`
        <div class="layout vertical start justified wrap">
          <lablup-shields app="Agent" color="${this._heartbeatColor(i.item.status)}"
                          description="${i.item.version}" ui="flat"></lablup-shields>
          ${i.item.cuda_plugin?d`
          <lablup-shields app="CUDA Plugin" color="blue"
                          description="${i.item.cuda_plugin.version}" ui="flat"></lablup-shields>
        ${i.item.cuda_fgpu_slots?d`
          <lablup-shields app="" color="blue"
                          description="Fractional GPU™" ui="flat"></lablup-shields>
        `:d``}
          ${"cuda_version"in i.item.cuda_plugin?d`
          <lablup-shields app="CUDA" color="green"
                          description="${i.item.cuda_plugin.cuda_version}" ui="flat"></lablup-shields>`:d`          <lablup-shields app="CUDA Disabled" color="green"
                          description="" ui="flat"></lablup-shields>`}`:d``}

        </div>`,e)}controlRenderer(e,t,i){c(d`
        <div id="controls" class="layout horizontal flex center" agent-id="${i.item.addr}">
          <wl-button fab flat inverted disabled class="fg" icon="assignment"><wl-icon>assignment</wl-icon></wl-button>
          ${this._isRunning()?d`
            <wl-button fab flat inverted disabled class="fg controls-running" icon="build"><wl-icon>build</wl-icon></wl-button>
            <wl-button fab flat inverted disabled class="fg controls-running" icon="alarm-add"><wl-icon>alarm_add</wl-icon></wl-button>
            <wl-button fab flat inverted disabled class="fg controls-running" icon="av:pause"><wl-icon>pause</wl-icon></wl-button>
            <wl-button fab flat inverted disabled class="fg controls-running" icon="delete"><wl-icon>delete</wl-icon></wl-button>
          `:d``}
    </div>`,e)}render(){return d`
      <vaadin-grid class="${this.condition}" theme="row-stripes column-borders compact" aria-label="Job list" .items="${this.agents}">
        <vaadin-grid-column width="40px" flex-grow="0" header="#" text-align="center" .renderer="${this._indexRenderer}"></vaadin-grid-column>
        <vaadin-grid-column width="80px">
          <template class="header">${u("agent.Endpoint")}</template>
          <template>
            <div>[[item.id]]</div>
            <div class="indicator monospace">[[item.addr]]</div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="100px" resizable .renderer="${this._boundRegionRenderer}">
          <template class="header">${u("agent.Region")}</template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable .renderer="${this._boundContactDateRenderer}">
          <template class="header">${u("agent.Starts")}</template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable header="${u("agent.Resources")}" .renderer="${this._boundResourceRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-sort-column width="100px" resizable path="scaling_group" header="${u("general.ResourceGroup")}"></vaadin-grid-sort-column>
        <vaadin-grid-column width="130px" flex-grow="0" resizable header="${u("agent.Status")}" .renderer="${this._boundStatusRenderer}"></vaadin-grid-column>
        <vaadin-grid-column resizable header="${u("general.Control")}" .renderer="${this._boundControlRenderer}"></vaadin-grid-column>
      </vaadin-grid>
    `}};e([t({type:String})],g.prototype,"condition",void 0),e([t({type:Array})],g.prototype,"agents",void 0),e([t({type:Object})],g.prototype,"notification",void 0),e([t({type:Object})],g.prototype,"_boundRegionRenderer",void 0),e([t({type:Object})],g.prototype,"_boundContactDateRenderer",void 0),e([t({type:Object})],g.prototype,"_boundResourceRenderer",void 0),e([t({type:Object})],g.prototype,"_boundStatusRenderer",void 0),e([t({type:Object})],g.prototype,"_boundControlRenderer",void 0),g=e([i("backend-ai-agent-list")],g);
/**
 @license
 Copyright (c) 2015-2018 Lablup Inc. All rights reserved.
 */
let h=class extends a{constructor(){super(),this._boundControlRenderer=this._controlRenderer.bind(this),this.selectedIndex=0,this.domains=Array(),this.scalingGroups=Array(),this.schedulerTypes=Array(),this.active=!1,this.schedulerTypes=["fifo","lifo","drf"]}static get styles(){return[s,o,r,n`
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
      `]}firstUpdated(){this.notification=globalThis.lablupNotification}connectedCallback(){super.connectedCallback()}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{globalThis.backendaiclient.scalingGroup.list_available().then((e=>{this.scalingGroups=e.scaling_groups})),globalThis.backendaiclient.domain.list().then((({domains:e})=>{this.domains=e,this.requestUpdate()}))}),!0):(globalThis.backendaiclient.scalingGroup.list_available().then((e=>{this.scalingGroups=e.scaling_groups})),globalThis.backendaiclient.domain.list().then((({domains:e})=>{this.domains=e,this.requestUpdate()}))))}_activeStatusRenderer(e,t,i){c(d`
        <lablup-shields
          app=""
          color=${i.item.is_active?"green":"red"}
          description=${i.item.is_active?"active":"inactive"}
          ui="flat"
        ></lablup-shields>
    `,e)}_indexRenderer(e,t,i){let a=i.index+1;c(d`
        <div>${a}</div>
      `,e)}_launchDialogById(e){this.shadowRoot.querySelector(e).show()}_hideDialogById(e){this.shadowRoot.querySelector(e).hide()}_controlRenderer(e,t,i){c(d`
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
      `,e)}_createScalingGroup(){const e=this.shadowRoot.querySelector("#scaling-group-name").value,t=this.shadowRoot.querySelector("#scaling-group-description").value,i=this.shadowRoot.querySelector("#scaling-group-domain").value;if(""===e)return this.notification.text="Enter valid Resource group name",this.notification.show(),void this._hideDialogById("#create-scaling-group-dialog");globalThis.backendaiclient.scalingGroup.create(e,t).then((({create_scaling_group:t})=>t.ok?globalThis.backendaiclient.scalingGroup.associate_domain(i,e):Promise.reject(t.msg))).then((({associate_scaling_group_with_domain:e})=>{e.ok?(this.notification.text=p("resourceGroup.ResourceGroupCreated"),this._refreshList(),this.shadowRoot.querySelector("#scaling-group-name").value="",this.shadowRoot.querySelector("#scaling-group-description").value=""):(this.notification.text=l.relieve(e.title),this.notification.detail=e.msg),this._hideDialogById("#create-scaling-group-dialog"),this.notification.show()})).catch((e=>{this.notification.text=l.relieve(e.title),this.notification.detail=e,this._hideDialogById("#create-scaling-group-dialog"),this.notification.show(!0,e)}))}_modifyScalingGroup(){const e=this.shadowRoot.querySelector("#modify-scaling-group-description").value,t=this.shadowRoot.querySelector("#modify-scaling-group-scheduler").value,i=this.shadowRoot.querySelector("#modify-scaling-group-active").checked,a=this.scalingGroups[this.selectedIndex].name;let s={};if(e!==this.scalingGroups[this.selectedIndex].description&&(s.description=e),t!==this.scalingGroups[this.selectedIndex].scheduler&&(s.scheduler=t),i!==this.scalingGroups[this.selectedIndex].is_active&&(s.is_active=i),0===Object.keys(s).length)return this.notification.text=p("resourceGroup.NochangesMade"),void this.notification.show();globalThis.backendaiclient.scalingGroup.update(a,s).then((({modify_scaling_group:e})=>{e.ok?(this.notification.text=p("resourceGroup.ResourceGroupCreated"),this._refreshList()):(this.notification.text=l.relieve(e.msg),this.notification.detail=e.msg),this._hideDialogById("#modify-scaling-group-dialog"),this.notification.show()}))}_deleteScalingGroup(){const e=this.scalingGroups[this.selectedIndex].name;if(this.shadowRoot.querySelector("#delete-scaling-group").value!==e)return this.notification.text=p("resourceGroup.ResourceGroupNameNotMatch"),this._hideDialogById("#delete-scaling-group-dialog"),void this.notification.show();globalThis.backendaiclient.scalingGroup.delete(e).then((({delete_scaling_group:e})=>{e.ok?(this.notification.text=p("resourceGroup.ResourceGroupDeleted"),this._refreshList(),this.shadowRoot.querySelector("#delete-scaling-group").value=""):(this.notification.text=l.relieve(e.msg),this.notification.detail=e.msg),this._hideDialogById("#delete-scaling-group-dialog"),this.notification.show()})),this.selectedIndex=0}_refreshList(){globalThis.backendaiclient.scalingGroup.list_available().then((({scaling_groups:e})=>{this.scalingGroups=e,this.requestUpdate()}))}render(){return d`
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
            ${this.domains.map((e=>d`
              <mwc-list-item style="height:auto;" value="${e.name}">
                ${e.name}
              </mwc-list-item>
            `))}
          </mwc-select>
          <mwc-textfield
            type="text"
            id="scaling-group-name"
            label="${u("resourceGroup.ResourceGroupName")}"
          ></mwc-textfield>
          <mwc-textarea
            name="description"
            id="scaling-group-description"
            label="${u("resourceGroup.Description")}"
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
            ${this.schedulerTypes.map((e=>d`
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
    `}};e([t({type:Object})],h.prototype,"_boundControlRenderer",void 0),e([t({type:Number})],h.prototype,"selectedIndex",void 0),e([t({type:Array})],h.prototype,"domains",void 0),e([t({type:Array})],h.prototype,"scalingGroups",void 0),e([t({type:Array})],h.prototype,"schedulerTypes",void 0),h=e([i("backend-ai-scaling-group-list")],h);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let m=class extends a{constructor(){super(),this._status="inactive"}static get styles(){return[s,n`
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
      `]}firstUpdated(){}async _viewStateChanged(e){if(await this.updateComplete,!1===e)return this.shadowRoot.querySelector("#running-agents").active=!1,this.shadowRoot.querySelector("#terminated-agents").active=!1,this.shadowRoot.querySelector("#scaling-groups").active=!1,void(this._status="inactive");this.shadowRoot.querySelector("#running-agents").active=!0,this.shadowRoot.querySelector("#terminated-agents").active=!0,this.shadowRoot.querySelector("#scaling-groups").active=!1,this._status="active"}_showTab(e){let t=this.shadowRoot.querySelectorAll(".tab-content");for(let e=0;e<t.length;e++)t[e].style.display="none";this.shadowRoot.querySelector("#"+e.title).style.display="block"}render(){return d`
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
              <mwc-tab title="scaling-group-lists" label="${u("general.ResourceGroup")}"
                  @click="${e=>this._showTab(e.target)}"></mwc-tab>
            </mwc-tab-bar>
            <div class="flex"></div>
          </h3>
          <div id="running-lists" class="tab-content">
            <backend-ai-agent-list id="running-agents" condition="running" ?active="${"active"===this._status}"></backend-ai-agent-list>
          </div>
          <div id="terminated-lists" class="tab-content" style="display:none;">
            <backend-ai-agent-list id="terminated-agents" condition="terminated" ?active="${"active"===this._status}"></backend-ai-agent-list>
          </div>
          <div id="scaling-group-lists" class="tab-content" style="display:none;">
            <backend-ai-scaling-group-list id="scaling-groups" ?active="${"active"===this._status}"> </backend-ai-scaling-group-list>
          </div>
        </div>
      </lablup-activity-panel>
    `}};e([t({type:String})],m.prototype,"_status",void 0),m=e([i("backend-ai-agent-view")],m);var b=m;export default b;
