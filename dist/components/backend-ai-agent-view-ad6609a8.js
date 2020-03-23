import{_ as e,p as t,c as i,d as a,e as s,I as n,a as o,b as l,g as r,$ as c,h as d}from"./backend-ai-console-7b9ac755.js";import"./iron-resizable-behavior-5743f649.js";import"./vaadin-progress-bar-c86f5342.js";import"./mwc-linear-progress-18816bcf.js";import"./vaadin-grid-369d5b12.js";import"./radio-behavior-377efe60.js";import"./label-b2639996.js";import"./divider-18a82560.js";import"./tab-group-7d48e0ac.js";import"./switch-053c71bd.js";import"./textarea-32e71bfe.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let u=class extends a{constructor(){super(),this.condition="running",this.agents=Array(),this.notification=Object(),this._boundRegionRenderer=this.regionRenderer.bind(this),this._boundContactDateRenderer=this.contactDateRenderer.bind(this),this._boundStatusRenderer=this.statusRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this)}static get styles(){return[s,n,o,l`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 200px);
        }

        paper-item {
          height: 30px;
          --paper-item-min-height: 30px;
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

        vaadin-progress-bar {
          width: 100px;
          height: 6px;
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
      `]}firstUpdated(){this.notification=globalThis.lablupNotification}connectedCallback(){super.connectedCallback()}async _viewStateChanged(e){if(await this.updateComplete,!1!==e)if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)document.addEventListener("backend-ai-connected",()=>{this._loadAgentList("ALIVE")},!0);else{let e="ALIVE";this._loadAgentList(e)}}_loadAgentList(e="running"){if(!0!==this.active)return;switch(this.condition){case"running":e="ALIVE";break;case"terminated":e="TERMINATED";break;case"archived":default:e="ALIVE"}globalThis.backendaiclient.agent.list(e,["id","status","addr","region","first_contact","cpu_cur_pct","mem_cur_bytes","available_slots","occupied_slots"]).then(t=>{let i=t.agents;void 0!==i&&0!=i.length&&Object.keys(i).map((e,t)=>{var a=i[e],s=JSON.parse(a.occupied_slots),n=JSON.parse(a.available_slots);i[e].cpu_slots=parseInt(n.cpu),i[e].used_cpu_slots=parseInt(s.cpu),null!==a.cpu_cur_pct?(i[e].current_cpu_percent=a.cpu_cur_pct,i[e].cpu_total_usage_ratio=i[e].used_cpu_slots/i[e].cpu_slots,i[e].cpu_current_usage_ratio=i[e].current_cpu_percent/i[e].cpu_slots/100,i[e].current_cpu_percent=i[e].current_cpu_percent.toFixed(2)):(i[e].current_cpu_percent=0,i[e].cpu_total_usage_ratio=0,i[e].cpu_current_usage_ratio=0),null!==a.mem_cur_bytes?i[e].current_mem_bytes=a.mem_cur_bytes:i[e].current_mem_bytes=0,i[e].current_mem=globalThis.backendaiclient.utils.changeBinaryUnit(a.current_mem_bytes,"g"),i[e].mem_slots=parseInt(globalThis.backendaiclient.utils.changeBinaryUnit(n.mem,"g")),i[e].used_mem_slots=parseInt(globalThis.backendaiclient.utils.changeBinaryUnit(s.mem,"g")),i[e].mem_total_usage_ratio=i[e].used_mem_slots/i[e].mem_slots,i[e].mem_current_usage_ratio=i[e].current_mem/i[e].mem_slots,i[e].current_mem=i[e].current_mem.toFixed(2),"cuda.device"in n&&(i[e].gpu_slots=parseInt(n["cuda.device"])),"cuda.shares"in n&&(i[e].vgpu_slots=parseInt(n["cuda.shares"])),"cuda.device"in s&&(i[e].used_gpu_slots=parseInt(s["cuda.device"])),"cuda.shares"in s&&(i[e].used_vgpu_slots=parseInt(s["cuda.shares"]))}),this.agents=i,!0===this.active&&setTimeout(()=>{this._loadAgentList(e)},15e3)}).catch(e=>{e&&e.message&&(this.notification.text=r.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_isRunning(){return"running"===this.condition}_byteToMB(e){return Math.floor(e/1e6)}_MBtoGB(e){return Math.floor(e/1024)}_elapsed(e,t){var i=new Date(e);if("running"===this.condition)var a=new Date;else a=new Date(t);var s=Math.floor((a.getTime()-i.getTime())/1e3);return"running"===this.condition?"Running "+s+"sec.":"Reserved for "+s+"sec."}_humanReadableDate(e){return new Date(e).toLocaleString("ko-KR")}_indexFrom1(e){return e+1}_heartbeatStatus(e){return e}_heartbeatColor(e){switch(e){case"ALIVE":return"green";case"TERMINATED":return"red";default:return"blue"}}_indexRenderer(e,t,i){let a=i.index+1;c(d`
        <div>${a}</div>
      `,e)}regionRenderer(e,t,i){let a,s,n,o,l=i.item.region.split("/");switch(l.length>1?(a=l[0],s=l[1]):(a=l[0],s=""),a){case"aws":n="orange",o="aws";break;case"azure":n="blue",o="azure";break;case"gcp":n="lightblue",o="gcp";break;case"nbp":n="green",o="nbp";break;case"openstack":n="red",o="openstack";break;case"local":n="yellow",o="local";break;default:n="yellow",o="local"}c(d`
        <div class="horizontal start-justified center layout">
          <img src="/resources/icons/${o}.png" style="width:32px;height:32px;"/>
          <lablup-shields app="${s}" color="${n}"
                          description="${a}" ui="flat"></lablup-shields>
        </div>
    `,e)}contactDateRenderer(e,t,i){c(d`
        <div class="layout vertical">
            <span>${this._humanReadableDate(i.item.first_contact)}</span>
        </div>`,e)}statusRenderer(e,t,i){c(d`
        <div class="layout horizontal justified wrap">
          <lablup-shields app="" color="${this._heartbeatColor(i.item.status)}"
                          description="${this._heartbeatStatus(i.item.status)}" ui="flat"></lablup-shields>
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
        <vaadin-grid-column width="40px" flex-grow="0" header="#" .renderer="${this._indexRenderer}"></vaadin-grid-column>
        <vaadin-grid-column width="80px">
          <template class="header">Endpoint</template>
          <template>
            <div>[[item.id]]</div>
            <div class="indicator monospace">[[item.addr]]</div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="100px" resizable .renderer="${this._boundRegionRenderer}">
          <template class="header">Region</template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable .renderer="${this._boundContactDateRenderer}">
          <template class="header">Starts</template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable>
          <template class="header">Resources</template>
          <template>
            <div class="layout flex">
              <div class="layout horizontal center flex">
                <wl-icon class="fg green">developer_board</wl-icon>
                <div class="layout vertical start" style="padding-left:5px;">
                  <div class="layout horizontal start">
                    <span>[[ item.cpu_slots ]]</span>
                    <span class="indicator">cores</span>
                  </div>
                  <div class="layout horizontal start">
                    <span>[[item.current_cpu_percent]]</span>
                    <span class="indicator">%</span>
                  </div>
                </div>
                <span class="flex"></span>
                <mwc-linear-progress id="cpu-usage-bar" progress="[[item.cpu_current_usage_ratio]]"
                                buffer="[[item.cpu_total_usage_ratio]]"></mwc-linear-progress>
              </div>
              <div class="layout horizontal center flex">
                <wl-icon class="fg green">memory</wl-icon>
                <div class="layout vertical start" style="padding-left:5px;">
                  <div class="layout horizontal start">
                    <span>[[item.mem_slots]]</span>
                    <span class="indicator">GB</span>
                  </div>
                  <div class="layout horizontal start">
                    <span>[[item.current_mem]]</span>
                    <span class="indicator">GB</span>
                  </div>
                </div>
                <span class="flex"></span>
                <mwc-linear-progress id="mem-usage-bar" progress="[[item.mem_current_usage_ratio]]"
                                buffer="[[item.mem_total_usage_ratio]]"></mwc-linear-progress>

              </div>
              <template is="dom-if" if="[[item.gpu_slots]]">
                <div class="layout horizontal center flex">
                  <wl-icon class="fg green">view_module</wl-icon>
                  <span style="padding-left:5px;">[[item.gpu_slots]]</span>
                  <span class="indicator">GPU</span>
                  <span class="flex"></span>
                  <vaadin-progress-bar id="gpu-bar" value="[[item.used_gpu_slots]]"
                                       max="[[item.gpu_slots]]"></vaadin-progress-bar>
                </div>
              </template>
              <template is="dom-if" if="[[item.vgpu_slots]]">
                <div class="layout horizontal center flex">
                  <wl-icon class="fg green">view_module</wl-icon>
                  <span style="padding-left:5px;">[[item.vgpu_slots]]</span>
                  <span class="indicator">fGPU</span>
                  <span class="flex"></span>
                  <vaadin-progress-bar id="vgpu-bar" value="[[item.used_vgpu_slots]]"
                                       max="[[item.vgpu_slots]]"></vaadin-progress-bar>
                </div>
              </template>
            </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="100px" flex-grow="0" resizable header="Status" .renderer="${this._boundStatusRenderer}"></vaadin-grid-column>
        <vaadin-grid-column resizable header="Control" .renderer="${this._boundControlRenderer}"></vaadin-grid-column>
      </vaadin-grid>
    `}};e([t({type:String})],u.prototype,"condition",void 0),e([t({type:Array})],u.prototype,"agents",void 0),e([t({type:Object})],u.prototype,"notification",void 0),e([t({type:Object})],u.prototype,"_boundRegionRenderer",void 0),e([t({type:Object})],u.prototype,"_boundContactDateRenderer",void 0),e([t({type:Object})],u.prototype,"_boundStatusRenderer",void 0),e([t({type:Object})],u.prototype,"_boundControlRenderer",void 0),u=e([i("backend-ai-agent-list")],u);
/**
 @license
 Copyright (c) 2015-2018 Lablup Inc. All rights reserved.
 */
let p=class extends a{constructor(){super(),this._boundControlRenderer=this._controlRenderer.bind(this),this.selectedIndex=0,this.domains=Array(),this.scalingGroups=Array(),this.schedulerTypes=Array(),this.active=!1,this.schedulerTypes=["fifo","lifo","drf"]}static get properties(){return{active:{type:Boolean},scalingGroups:{type:Array},schedulerTypes:{type:Array},notification:{type:Object},domain:{type:Array},selectedIndex:{type:Number}}}static get styles(){return[s,n,o,l`
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

        wl-dialog wl-textfield,
        wl-dialog wl-textarea,
        wl-dialog wl-select {
          margin-bottom: 20px;
          --input-font-family: Roboto, Noto, sans-serif;
        }

        wl-dialog wl-label {
          --label-font-family: Roboto, Noto, sans-serif;
          --label-color: #282828;
          margin-bottom: 5px;
        }

        wl-dialog wl-switch {
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

        wl-dialog {
          --dialog-min-width: 350px;
        }
      `]}firstUpdated(){this.notification=globalThis.lablupNotification}connectedCallback(){super.connectedCallback()}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{globalThis.backendaiclient.scalingGroup.list_all().then(e=>{this.scalingGroups=e.scaling_groups}),globalThis.backendaiclient.domain.list().then(({domains:e})=>{this.domains=e,this.requestUpdate()})},!0):(globalThis.backendaiclient.scalingGroup.list_all().then(e=>{this.scalingGroups=e.scaling_groups}),globalThis.backendaiclient.domain.list().then(({domains:e})=>{this.domains=e,this.requestUpdate()})))}_activeStatusRenderer(e,t,i){c(d`
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
      `,e)}_hideDialog(e){e.target.closest("wl-dialog").hide()}_createScalingGroup(){const e=this.shadowRoot.querySelector("#scaling-group-name").value,t=this.shadowRoot.querySelector("#scaling-group-description").value,i=this.shadowRoot.querySelector("#scaling-group-domain").value;if(""===e)return this.notification.text="Enter valid Resource group name",this.notification.show(),void this._hideDialogById("#create-scaling-group-dialog");globalThis.backendaiclient.scalingGroup.create(e,t).then(({create_scaling_group:t})=>t.ok?globalThis.backendaiclient.scalingGroup.associateWithDomain(i,e):(this.notification.text=r.relieve(t.title),this.notification.detail=t.msg,this.notification.show(),Promise.reject(t.msg))).then(({associate_scaling_group_with_domain:e})=>{e.ok?(this.notification.text="Resource group succesfully created",this._refreshList(),this.shadowRoot.querySelector("#scaling-group-name").value="",this.shadowRoot.querySelector("#scaling-group-description").value=""):(this.notification.text=r.relieve(e.title),this.notification.detail=e.msg),this._hideDialogById("#create-scaling-group-dialog"),this.notification.show()}).catch(e=>{this.notification.text=r.relieve(e.title),this.notification.detail=e,this._hideDialogById("#create-scaling-group-dialog"),this.notification.show(!0,e)})}_modifyScalingGroup(){const e=this.shadowRoot.querySelector("#modify-scaling-group-description").value,t=this.shadowRoot.querySelector("#modify-scaling-group-scheduler").value,i=this.shadowRoot.querySelector("#modify-scaling-group-active").checked,a=this.scalingGroups[this.selectedIndex].name;let s={};if(e!==this.scalingGroups[this.selectedIndex].description&&(s.description=e),t!==this.scalingGroups[this.selectedIndex].scheduler&&(s.scheduler=t),i!==this.scalingGroups[this.selectedIndex].is_active&&(s.is_active=i),0===Object.keys(s).length)return this.notification.text="No changes made",void this.notification.show();globalThis.backendaiclient.scalingGroup.modify(a,s).then(({modify_scaling_group:e})=>{e.ok?(this.notification.text="Resource group successfully modified",this._refreshList()):(this.notification.text=r.relieve(e.msg),this.notification.detail=e.msg),this._hideDialogById("#modify-scaling-group-dialog"),this.notification.show()})}_deleteScalingGroup(){const e=this.scalingGroups[this.selectedIndex].name;if(this.shadowRoot.querySelector("#delete-scaling-group").value!==e)return this.notification.text="Resource group name does not match!",this._hideDialogById("#delete-scaling-group-dialog"),void this.notification.show();globalThis.backendaiclient.scalingGroup.delete(e).then(({delete_scaling_group:e})=>{e.ok?(this.notification.text="Resource group successfully deleted",this._refreshList(),this.shadowRoot.querySelector("#delete-scaling-group").value=""):(this.notification.text=r.relieve(e.msg),this.notification.detail=e.msg),this._hideDialogById("#delete-scaling-group-dialog"),this.notification.show()})}_refreshList(){globalThis.backendaiclient.scalingGroup.list_all().then(({scaling_groups:e})=>{this.scalingGroups=e,this.requestUpdate()})}render(){return d`
      <h4 class="horizontal flex center center-justified layout">
        <span>Resource groups</span>
        <span class="flex"></span>
        <wl-button
          class="fg blue"
          id="add-scaling-group"
          outlined
          @click=${()=>this._launchDialogById("#create-scaling-group-dialog")}
        >
          <wl-icon>add</wl-icon>
          Create
        </wl-button>
      </h4>
      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Job list" .items="${this.scalingGroups}">
        <vaadin-grid-column flex-grow="0" header="#" width="40px" .renderer=${this._indexRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="Name">
          <template>
            <div> [[item.name]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow"1" header="Description">
          <template>
            <div> [[item.description]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow"1" header="Active Status" .renderer=${this._activeStatusRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow"1" header="Driver">
          <template>
            <div> [[item.driver]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow"1" header="Driver Options">
          <template>
            <div> [[item.driver_opts]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow"1" header="Scheduler">
          <template>
            <div> [[item.scheduler]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow"1" header="Scheduler Options">
          <template>
            <div> [[item.scheduler_opts]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow"1" header="Controls" .renderer=${this._boundControlRenderer}>
        </vaadin-grid-column>
      </vaadin-grid>
      <wl-dialog id="create-scaling-group-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="1" class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>Create Resource Group</span>
            <div class="flex"></div>
            <wl-button class="fab" fab flat inverted @click=${e=>this._hideDialog(e)}>
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <form>
            <fieldset>
              <wl-textfield
                type="text"
                id="scaling-group-name"
                label="Resource Group Name"
              ></wl-textfield>
              <wl-textarea
                name="description"
                id="scaling-group-description"
                label="Description"
              ></wl-textarea>
              <wl-select
                id="scaling-group-domain"
                label="Select Domain"
              >
                <option disabled>Select Domain</option>
                ${this.domains.map(e=>d`
                    <option value="${e.name}">
                      ${e.name}
                    </option>
                  `)}
              </wl-select>
              <div class="horizontal layout center-justified">
                <wl-button class="fg blue create-button" id="create-user-button" outlined type="button"
                  @click="${this._createScalingGroup}">
                  <wl-icon>add</wl-icon>
                  Create resource group
                </wl-button>
              </div>
            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="modify-scaling-group-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="1" class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>Modify resource group</span>
            <div class="flex"></div>
            <wl-button class="fab" fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <form>
            <fieldset>
              <wl-textarea
                id="modify-scaling-group-description"
                type="text"
                label="Description"
                value=${0===this.scalingGroups.length?"":this.scalingGroups[this.selectedIndex].description}
              ></wl-textarea>
              <wl-select id="modify-scaling-group-scheduler" label="Select scheduler"
                  value="${0===this.scalingGroups.length?"":this.scalingGroups[this.selectedIndex].scheduler}">
                <option disabled>Select Scheduler</option>
                ${this.schedulerTypes.map(e=>d`
                  <option value="${e}">${e}</option>
                `)}
              </wl-select>
              <wl-label for="switch">
                Active Status
              </wl-label>
              <div id="switch">
                <wl-switch
                  id="modify-scaling-group-active"
                ></wl-switch>
              </div>
              <wl-button
                class="fg blue"
                type="button"
                outlined
                style="width: 100%; box-sizing: border-box;"
                @click=${this._modifyScalingGroup}
              >
                <wl-icon>check</wl-icon>
                Save Changes
              </wl-button>
            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="delete-scaling-group-dialog" fixed backdrop blockscrolling>
        <wl-title slot="header" level="3" style="color: #EF1320">Warning: this cannot be undone!</wl-title>
        <div slot="content">
          <wl-textfield
            id="delete-scaling-group"
            type="text"
            label="Type resource group name to delete"
          ></wl-textfield>
          <wl-button
            class="fg red delete"
            type="button"
            outlined
            style="width: 100%; box-sizing: border-box;"
            @click=${this._deleteScalingGroup}
          >
            <wl-icon>delete</wl-icon>
            Delete
          </wl-button>
        </div>
      </wl-dialog>
    `}};e([t({type:Object})],p.prototype,"_boundControlRenderer",void 0),e([t({type:Number})],p.prototype,"selectedIndex",void 0),e([t({type:Array})],p.prototype,"domains",void 0),e([t({type:Array})],p.prototype,"scalingGroups",void 0),e([t({type:Array})],p.prototype,"schedulerTypes",void 0),p=e([i("backend-ai-scaling-group-list")],p);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let g=class extends a{constructor(){super(),this._status="inactive"}static get styles(){return[s]}firstUpdated(){}async _viewStateChanged(e){if(await this.updateComplete,!1===e)return this.shadowRoot.querySelector("#running-agents").active=!1,this.shadowRoot.querySelector("#terminated-agents").active=!1,this.shadowRoot.querySelector("#scaling-groups").active=!1,void(this._status="inactive");this.shadowRoot.querySelector("#running-agents").active=!0,this.shadowRoot.querySelector("#terminated-agents").active=!0,this.shadowRoot.querySelector("#scaling-groups").active=!1,this._status="active"}_showTab(e){for(var t=this.shadowRoot.querySelectorAll(".tab-content"),i=0;i<t.length;i++)t[i].style.display="none";this.shadowRoot.querySelector("#"+e.value).style.display="block"}render(){return d`
      <wl-card class="item" elevation="1">
        <h3 class="tab horizontal center layout">
          <wl-tab-group>
            <wl-tab value="running-lists" checked @click="${e=>this._showTab(e.target)}">Connected</wl-tab>
            <wl-tab value="terminated-lists" @click="${e=>this._showTab(e.target)}">Terminated</wl-tab>
            <wl-tab value="maintenance-lists" disabled>Maintaining</wl-tab>
            <wl-tab value="scaling-group-lists" @click=${e=>this._showTab(e.target)}>Resource Group</wl-tab>
          </wl-tab-group>
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
      </wl-card>
    `}};e([t({type:String})],g.prototype,"_status",void 0),g=e([i("backend-ai-agent-view")],g);var h=g;export default h;
