import{b as e,p as t,e as i,B as a,I as n,f as o,c as s,U as r,h as l}from"./iron-flex-layout-classes-c9b3b8db.js";import"./switch-behavior-5039bbc7.js";import"./iron-icon-872ea0d4.js";import"./lablup-shields-405580b0.js";import"./iron-icons-bb1ceb94.js";import"./hardware-icons-ceef21ab.js";import"./input-behavior-22f7c31e.js";import"./index-0bbfdd62.js";import"./index-35aa6a53.js";import{B as d}from"./backend-ai-painkiller-801f57d6.js";import"./index-e2571378.js";import"./index-fbff3ce8.js";import{B as c}from"./backend-ai-page-4ba904fc.js";import"./iron-resizable-behavior-83d8597e.js";import"./vaadin-progress-bar-eaab1337.js";import"./paper-progress-8255aecb.js";import"./radio-behavior-1a6615fe.js";import"./index-65211c35.js";import"./av-icons-5dcd0c56.js";import"./vaadin-grid-374809cd.js";import"./index-6835b5eb.js";import"./index-d4100e9c.js";import"./index-0c2ea672.js";import"./index-2e2aab48.js";let p=class extends c{constructor(){super(),this.condition="running",this.agents=Array(),this.notification=Object(),this._boundContactDateRenderer=this.contactDateRenderer.bind(this),this._boundStatusRenderer=this.statusRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this)}static get styles(){return[a,n,o,s`
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

        iron-icon {
          width: 16px;
          height: 16px;
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

        paper-progress {
          width: 100px;
          border-radius: 3px;
          --paper-progress-height: 10px;
          --paper-progress-active-color: #3677eb;
          --paper-progress-secondary-color: #98be5a;
          --paper-progress-transition-duration: 0.08s;
          --paper-progress-transition-timing-function: ease;
          --paper-progress-transition-delay: 0s;
        }
      `]}firstUpdated(){this.notification=window.lablupNotification}connectedCallback(){super.connectedCallback()}async _viewStateChanged(e){if(await this.updateComplete,!1!==e)if(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready)document.addEventListener("backend-ai-connected",()=>{this._loadAgentList("ALIVE")},!0);else{let e="ALIVE";this._loadAgentList(e)}}_loadAgentList(e="running"){if(!0!==this.active)return;switch(this.condition){case"running":e="ALIVE";break;case"finished":e="TERMINATED";break;case"archived":default:e="ALIVE"}window.backendaiclient.agent.list(e,["id","status","addr","region","first_contact","cpu_cur_pct","mem_cur_bytes","available_slots","occupied_slots"]).then(t=>{let i=t.agents;void 0!==i&&0!=i.length&&Object.keys(i).map((e,t)=>{var a=i[e],n=JSON.parse(a.occupied_slots),o=JSON.parse(a.available_slots);i[e].cpu_slots=parseInt(o.cpu),i[e].used_cpu_slots=parseInt(n.cpu),null!==a.cpu_cur_pct?(i[e].current_cpu_percent=a.cpu_cur_pct,i[e].cpu_total_usage_ratio=i[e].used_cpu_slots/i[e].cpu_slots*100,i[e].cpu_current_usage_ratio=i[e].current_cpu_percent/i[e].cpu_slots,i[e].current_cpu_percent=i[e].current_cpu_percent.toFixed(2)):(i[e].current_cpu_percent=0,i[e].cpu_total_usage_ratio=0,i[e].cpu_current_usage_ratio=0),null!==a.mem_cur_bytes?i[e].current_mem_bytes=a.mem_cur_bytes:i[e].current_mem_bytes=0,i[e].current_mem=window.backendaiclient.utils.changeBinaryUnit(a.current_mem_bytes,"g"),i[e].mem_slots=parseInt(window.backendaiclient.utils.changeBinaryUnit(o.mem,"g")),i[e].used_mem_slots=parseInt(window.backendaiclient.utils.changeBinaryUnit(n.mem,"g")),i[e].mem_total_usage_ratio=i[e].used_mem_slots/i[e].mem_slots*100,i[e].mem_current_usage_ratio=i[e].current_mem/i[e].mem_slots*100,i[e].current_mem=i[e].current_mem.toFixed(2),"cuda.device"in o&&(i[e].gpu_slots=parseInt(o["cuda.device"])),"cuda.shares"in o&&(i[e].vgpu_slots=parseInt(o["cuda.shares"])),"cuda.device"in n&&(i[e].used_gpu_slots=parseInt(n["cuda.device"])),"cuda.shares"in n&&(i[e].used_vgpu_slots=parseInt(n["cuda.shares"]))}),this.agents=i,!0===this.active&&setTimeout(()=>{this._loadAgentList(e)},15e3)}).catch(e=>{e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}_isRunning(){return"running"===this.condition}_byteToMB(e){return Math.floor(e/1e6)}_MBtoGB(e){return Math.floor(e/1024)}_elapsed(e,t){var i=new Date(e);if("running"===this.condition)var a=new Date;else a=new Date(t);var n=Math.floor((a.getTime()-i.getTime())/1e3);return"running"===this.condition?"Running "+n+"sec.":"Reserved for "+n+"sec."}_humanReadableDate(e){return new Date(e).toLocaleString("ko-KR")}_indexFrom1(e){return e+1}_heartbeatStatus(e){return e}_heartbeatColor(e){switch(e){case"ALIVE":return"green";case"TERMINATED":return"red";default:return"blue"}}_indexRenderer(e,t,i){let a=i.index+1;r(l`
        <div>${a}</div>
      `,e)}contactDateRenderer(e,t,i){r(l`
        <div class="layout vertical">
            <span>${this._humanReadableDate(i.item.first_contact)}</span>
        </div>`,e)}statusRenderer(e,t,i){r(l`
        <div class="layout horizontal justified wrap">
          <lablup-shields app="" color="${this._heartbeatColor(i.item.status)}"
                          description="${this._heartbeatStatus(i.item.status)}" ui="flat"></lablup-shields>
        </div>`,e)}controlRenderer(e,t,i){r(l`
        <div id="controls" class="layout horizontal flex center" kernel-id="${i.item.sess_id}">
          <paper-icon-button disabled class="fg" icon="assignment"></paper-icon-button>
          ${this._isRunning()?l`
            <paper-icon-button disabled class="fg controls-running" icon="build"></paper-icon-button>
            <paper-icon-button disabled class="fg controls-running" icon="alarm-add"></paper-icon-button>
            <paper-icon-button disabled class="fg controls-running" icon="av:pause"></paper-icon-button>
            <paper-icon-button disabled class="fg controls-running" icon="delete"></paper-icon-button>
          `:l``}
    </div>`,e)}render(){return l`
      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Job list" .items="${this.agents}">
        <vaadin-grid-column width="40px" flex-grow="0" header="#" .renderer="${this._indexRenderer}"></vaadin-grid-column>
        <vaadin-grid-column resizable>
          <template class="header">Endpoint</template>
          <template>
            <div class="indicator">[[item.addr]]</div>
            <div class="indicator">[[item.region]]</div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable .renderer="${this._boundContactDateRenderer}">
          <template class="header">Starts</template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable>
          <template class="header">Resources</template>
          <template>
            <div class="layout flex">
              <div class="layout horizontal center flex">
                <iron-icon class="fg green" icon="hardware:developer-board"></iron-icon>
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
                <paper-progress id="cpu-usage-bar" value="[[item.cpu_current_usage_ratio]]"
                                secondary-progress="[[item.cpu_total_usage_ratio]]"></paper-progress>
              </div>
              <div class="layout horizontal center flex">
                <iron-icon class="fg green" icon="hardware:memory"></iron-icon>
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
                <paper-progress id="mem-usage-bar" value="[[item.mem_current_usage_ratio]]"
                                secondary-progress="[[item.mem_total_usage_ratio]]"></paper-progress>

              </div>
              <template is="dom-if" if="[[item.gpu_slots]]">
                <div class="layout horizontal center flex">
                  <iron-icon class="fg green" icon="icons:view-module"></iron-icon>
                  <span style="padding-left:5px;">[[item.gpu_slots]]</span>
                  <span class="indicator">GPU</span>
                  <span class="flex"></span>
                  <vaadin-progress-bar id="gpu-bar" value="[[item.used_gpu_slots]]"
                                       max="[[item.gpu_slots]]"></vaadin-progress-bar>
                </div>
              </template>
              <template is="dom-if" if="[[item.vgpu_slots]]">
                <div class="layout horizontal center flex">
                  <iron-icon class="fg green" icon="icons:view-module"></iron-icon>
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
    `}};e([t({type:String})],p.prototype,"condition",void 0),e([t({type:Array})],p.prototype,"agents",void 0),e([t({type:Object})],p.prototype,"notification",void 0),e([t({type:Object})],p.prototype,"_boundContactDateRenderer",void 0),e([t({type:Object})],p.prototype,"_boundStatusRenderer",void 0),e([t({type:Object})],p.prototype,"_boundControlRenderer",void 0),p=e([i("backend-ai-agent-list")],p);let u=class extends c{constructor(){super(),this._boundControlRenderer=this._controlRenderer.bind(this),this.selectedIndex=0,this.domains=Array(),this.scalingGroups=Array(),this.active=!1}static get properties(){return{active:{type:Boolean},scalingGroups:{type:Array},notification:{type:Object},domain:{type:Array},selectedIndex:{type:Number}}}static get styles(){return[a,n,o,s`
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
      `]}firstUpdated(){this.notification=window.lablupNotification}connectedCallback(){super.connectedCallback()}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{window.backendaiclient.scalingGroup.list_all().then(e=>{this.scalingGroups=e.scaling_groups}),window.backendaiclient.domain.list().then(({domains:e})=>{this.domains=e,this.requestUpdate()})},!0):(window.backendaiclient.scalingGroup.list_all().then(e=>{this.scalingGroups=e.scaling_groups}),window.backendaiclient.domain.list().then(({domains:e})=>{this.domains=e,this.requestUpdate()})))}_activeStatusRenderer(e,t,i){r(l`
        <lablup-shields
          app=""
          color=${i.item.is_active?"green":"red"}
          description=${i.item.is_active?"active":"inactive"}
          ui="flat"
        ></lablup-shields>
    `,e)}_indexRenderer(e,t,i){let a=i.index+1;r(l`
        <div>${a}</div>
      `,e)}_launchDialogById(e){this.shadowRoot.querySelector(e).show()}_hideDialogById(e){this.shadowRoot.querySelector(e).hide()}_controlRenderer(e,t,i){r(l`
        <div
          id="controls"
          class="layout horizontal flex center"
        >
          <paper-icon-button
            icon="settings"
            class="fg blue"
            @click=${()=>{this.selectedIndex=i.index,this.shadowRoot.querySelector("#modify-scaling-group-active").checked=this.scalingGroups[i.index].is_active,this._launchDialogById("#modify-scaling-group-dialog")}}
          ></paper-icon-button>
          <paper-icon-button
            icon="delete"
            class="fg red"
            @click=${()=>{this.selectedIndex=i.index,this._launchDialogById("#delete-scaling-group-dialog")}}
          ></paper-icon-button>
        </div>
      `,e)}_hideDialog(e){e.target.closest("wl-dialog").hide()}_createScalingGroup(){const e=this.shadowRoot.querySelector("#scaling-group-name").value,t=this.shadowRoot.querySelector("#scaling-group-description").value,i=this.shadowRoot.querySelector("#scaling-group-domain").value;if(""===e)return this.notification.text="Enter valid Resource group name",this.notification.show(),void this._hideDialogById("#create-scaling-group-dialog");window.backendaiclient.scalingGroup.create(e,t).then(({create_scaling_group:t})=>t.ok?window.backendaiclient.scalingGroup.associateWithDomain(i,e):(this.notification.text=d.relieve(t.title),this.notification.detail=t.msg,this.notification.show(),Promise.reject(t.msg))).then(({associate_scaling_group_with_domain:e})=>{e.ok?(this.notification.text="Resource group succesfully created",this._refreshList(),this.shadowRoot.querySelector("#scaling-group-name").value="",this.shadowRoot.querySelector("#scaling-group-description").value=""):(this.notification.text=d.relieve(e.title),this.notification.detail=e.msg),this._hideDialogById("#create-scaling-group-dialog"),this.notification.show()}).catch(e=>{this.notification.text=d.relieve(e.title),this.notification.detail=e,this._hideDialogById("#create-scaling-group-dialog"),this.notification.show(!0)})}_modifyScalingGroup(){const e=this.shadowRoot.querySelector("#modify-scaling-group-description").value,t=this.shadowRoot.querySelector("#modify-scaling-group-active").checked,i=this.scalingGroups[this.selectedIndex].name;let a={};if(e!==this.scalingGroups[this.selectedIndex].description&&(a.description=e),t!==this.scalingGroups[this.selectedIndex].is_active&&(a.is_active=t),0===Object.keys(a).length)return this.notification.text="No changes made",void this.notification.show();window.backendaiclient.scalingGroup.modify(i,a).then(({modify_scaling_group:e})=>{e.ok?(this.notification.text="Resource group successfully modified",this._refreshList()):(this.notification.text=d.relieve(e.msg),this.notification.detail=e.msg),this._hideDialogById("#modify-scaling-group-dialog"),this.notification.show()})}_deleteScalingGroup(){const e=this.scalingGroups[this.selectedIndex].name;if(this.shadowRoot.querySelector("#delete-scaling-group").value!==e)return this.notification.text="Resource group name does not match!",this._hideDialogById("#delete-scaling-group-dialog"),void this.notification.show();window.backendaiclient.scalingGroup.delete(e).then(({delete_scaling_group:e})=>{e.ok?(this.notification.text="Resource group successfully deleted",this._refreshList(),this.shadowRoot.querySelector("#delete-scaling-group").value=""):(this.notification.text=d.relieve(e.msg),this.notification.detail=e.msg),this._hideDialogById("#delete-scaling-group-dialog"),this.notification.show()})}_refreshList(){window.backendaiclient.scalingGroup.list_all().then(({scaling_groups:e})=>{this.scalingGroups=e,this.requestUpdate()})}render(){return l`
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
                ${this.domains.map(e=>l`
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
    `}};e([t({type:Object})],u.prototype,"_boundControlRenderer",void 0),e([t({type:Number})],u.prototype,"selectedIndex",void 0),e([t({type:Array})],u.prototype,"domains",void 0),e([t({type:Array})],u.prototype,"scalingGroups",void 0),u=e([i("backend-ai-scaling-group-list")],u);let g=class extends c{constructor(){super(),this._status="inactive"}static get styles(){return[a]}firstUpdated(){}async _viewStateChanged(e){if(await this.updateComplete,!1===e)return this.shadowRoot.querySelector("#running-agents").active=!1,this.shadowRoot.querySelector("#terminated-agents").active=!1,this.shadowRoot.querySelector("#scaling-groups").active=!1,void(this._status="inactive");this.shadowRoot.querySelector("#running-agents").active=!0,this.shadowRoot.querySelector("#terminated-agents").active=!0,this.shadowRoot.querySelector("#scaling-groups").active=!1,this._status="active"}_showTab(e){for(var t=this.shadowRoot.querySelectorAll(".tab-content"),i=0;i<t.length;i++)t[i].style.display="none";this.shadowRoot.querySelector("#"+e.value).style.display="block"}render(){return l`
      <wl-card class="item" elevation="1">
        <h3 class="tab horizontal center layout">
          <wl-tab-group>
            <wl-tab value="running-lists" checked @click="${e=>this._showTab(e.target)}">Connected</wl-tab>
            <wl-tab value="terminated-lists" @click="${e=>this._showTab(e.target)}">Terminated</wl-tab>
            <wl-tab value="maintenance-lists" disabled>Maintaining</wl-tab>
            <wl-tab value="scaling-group-lists" @click=${e=>this._showTab(e.target)}>Scaling Group</wl-tab>
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
    `}};e([t({type:String})],g.prototype,"_status",void 0);var h=g=e([i("backend-ai-agent-view")],g);export default h;
