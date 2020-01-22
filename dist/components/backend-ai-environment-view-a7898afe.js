import{b as e,p as t,d as i,B as a,I as o,e as s,c as r,V as l,h as n,f as d,g as c}from"./iron-flex-layout-classes-e73207af.js";import"./switch-behavior-6b9be824.js";import"./iron-icon-83da4dc9.js";import"./paper-input-b9bbce80.js";import"./lablup-shields-33a271c9.js";import"./iron-icons-1704f69f.js";import"./hardware-icons-4ff84535.js";import"./vaadin-icons-15fded47.js";import"./input-behavior-c84704b8.js";import"./index-3d3c7342.js";import"./index-b182735e.js";import"./resize-8fcbd74f.js";import"./index-b88a2f7c.js";import"./index-e20f0cd7.js";import"./index-0fb3f3f8.js";import{B as p}from"./backend-ai-painkiller-9e69a028.js";import"./index-ebcb6479.js";import{B as u}from"./backend-ai-page-7318a5a0.js";import"./lablup-loading-indicator-c221f711.js";import"./iron-resizable-behavior-b33c26c2.js";import"./vaadin-progress-bar-b6e8a4ee.js";import"./paper-progress-2a37a5a2.js";import"./radio-behavior-59c4aee8.js";import"./paper-dropdown-menu-85cc67f9.js";import"./av-icons-9e98aa35.js";import"./vaadin-grid-ad3498d9.js";import"./vaadin-grid-sorter-3d8511d6.js";import"./index-e4e53168.js";import"./backend-ai-indicator-e67ca547.js";import"./index-b409a50a.js";import"./vaadin-item-ff7e077c.js";let h=class extends u{constructor(){super(),this.resourcePolicy={},this.is_admin=!1,this.active=!1,this.gpu_allocatable=!1,this.gpuAllocationMode="device",this.condition="",this.presetName="",this._boundResourceRenderer=this.resourceRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this)}static get styles(){return[a,o,s,r`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 265px);
        }

        paper-dropdown-menu {
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

        vaadin-item {
          font-size: 13px;
          font-weight: 100;
        }

        div.indicator,
        span.indicator {
          font-size: 9px;
          margin-right: 5px;
        }

        div.configuration {
          width: 70px !important;
        }

        div.configuration wl-icon {
          padding-right: 5px;
        }

        wl-button.create-button {
          width: 335px;
          --button-bg: white;
          --button-bg-hover: var(--paper-yellow-100);
          --button-bg-active: var(--paper-yellow-600);
        }

        wl-button {
          --button-bg: var(--paper-yellow-50);
          --button-bg-hover: var(--paper-yellow-100);
          --button-bg-active: var(--paper-yellow-600);
        }

        wl-button#create-policy-button {
          width: 100%;
          box-sizing: border-box;
          margin-top: 15px;
        }

        wl-card {
          margin: 0;
        }
      `]}resourceRenderer(e,t,i){l(n`
        <div class="layout horizontal wrap center">
          <div class="layout horizontal configuration">
            <wl-icon class="fg green">developer_board</wl-icon>
            <span>${this._markIfUnlimited(i.item.resource_slots.cpu)}</span>
            <span class="indicator">cores</span>
          </div>
          <div class="layout horizontal configuration">
            <wl-icon class="fg green">memory</wl-icon>
            <span>${this._markIfUnlimited(i.item.resource_slots.mem_gb)}</span>
            <span class="indicator">GB</span>
          </div>
        </div>
        <div class="layout horizontal wrap center">
        ${i.item.resource_slots["cuda.device"]?n`
        <div class="layout horizontal configuration">
          <wl-icon class="fg green">view_module</wl-icon>
          <span>${this._markIfUnlimited(i.item.resource_slots["cuda.device"])}</span>
          <span class="indicator">GPU</span>
        </div>
      `:n``}
        ${i.item.resource_slots["cuda.shares"]?n`
            <div class="layout horizontal configuration">
              <wl-icon class="fg green">view_module</wl-icon>
              <span>${this._markIfUnlimited(i.item.resource_slots["cuda.shares"])}</span>
              <span class="indicator">GPU</span>
            </div>
          `:n``}
        </div>
      `,e)}controlRenderer(e,t,i){l(n`
            <div id="controls" class="layout horizontal flex center"
                 .preset-name="${i.item.name}">
              ${this.is_admin?n`
                    <wl-button class="fg blue controls-running" fab flat inverted
                      @click="${e=>this._launchResourcePresetDialog(e)}">
                       <wl-icon>settings</wl-icon>
                    </wl-button>
                    <wl-button class="fg red controls-running" fab flat inverted
                      @click="${e=>this._launchDeleteResourcePresetDialog(e)}">
                       <wl-icon>delete</wl-icon>
                    </wl-button>
              `:n``}
            </div>
      `,e)}_indexRenderer(e,t,i){let a=i.index+1;l(n`
        <div>${a}</div>
      `,e)}_launchPresetAddDialog(e){this.shadowRoot.querySelector("#create-preset-dialog").show()}render(){return n`
      <wl-card>
        <h4 class="horizontal flex center center-justified layout">
          <span>Resource Presets</span>
          <span class="flex"></span>
          <wl-button class="fg orange" id="add-resource-preset" outlined @click="${e=>this._launchPresetAddDialog(e)}">
            <wl-icon>add</wl-icon>
            Create Preset
          </wl-button>
        </h4>
        <div>
          <lablup-loading-indicator id="loading-indicator"></lablup-loading-indicator>

          <vaadin-grid theme="row-stripes column-borders compact" aria-label="Resource Policy list"
                      .items="${this.resourcePresets}">
            <vaadin-grid-column width="40px" flex-grow="0" header="#" .renderer="${this._indexRenderer}"></vaadin-grid-column>

            <vaadin-grid-column resizable>
              <template class="header">
                <vaadin-grid-sorter path="name">Name</vaadin-grid-sorter>
              </template>
              <template>
                <div class="layout horizontal center flex">
                  <div>[[item.name]]</div>
                </div>
              </template>
            </vaadin-grid-column>

            <vaadin-grid-column width="150px" resizable header="Resources" .renderer="${this._boundResourceRenderer}">
            </vaadin-grid-column>

            <vaadin-grid-column resizable header="Control" .renderer="${this._boundControlRenderer}">
            </vaadin-grid-column>
          </vaadin-grid>
        </div>
      </wl-card>
      <wl-dialog id="modify-template-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="1" class="login-panel intro centered">
          <h3 class="horizontal center layout">
            <span>Modify resource preset</span>
            <div class="flex"></div>
            <wl-button class="fg orange" fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <form id="login-form">
            <fieldset>
              <paper-input type="text" name="preset_name" id="id_preset_name" label="Preset Name"
                          auto-validate required
                          pattern="[a-zA-Z0-9_-]+"
                          disabled
                          error-message="Policy name only accepts letters, numbers, underscore, and dash"></paper-input>
              <h4>Resource Preset</h4>
              <div class="horizontal center layout">
                <paper-input id="cpu-resource" type="number" label="CPU"
                    min="1" value="1"></paper-input>
                <paper-input id="ram-resource" type="number" label="RAM (GB)"
                    min="1" value="1"></paper-input>
              </div>
              <div class="horizontal center layout">
                <paper-input id="gpu-resource" type="number" label="GPU"
                    min="0" value="0" ?disabled=${"fractional"===this.gpuAllocationMode}></paper-input>
                <paper-input id="fgpu-resource" type="number" label="fGPU"
                    min="0" value="0" ?disabled=${"fractional"!==this.gpuAllocationMode}></paper-input>
              </div>
              <br/><br/>
              <wl-button class="fg orange create-button" outlined type="button"
                @click="${()=>this._modifyResourceTemplate()}">
                <wl-icon>check</wl-icon>
                Save Changes
              </wl-button>
            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="create-preset-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="1" class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>Create resource preset</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <form id="preset-creation-form">
            <fieldset>
              <paper-input
                type="text"
                name="preset_name"
                id="create-preset-name"
                label="Preset Name"
                auto-validate
                required
                pattern="[a-zA-Z0-9-_]+"
                error-message="Policy name only accepts letters and numbers"
              ></paper-input>
              <h4>Resource Preset</h4>
              <div class="horizontal center layout">
                <paper-input id="create-cpu-resource" type="number" label="CPU"
                    min="1" value="1"></paper-input>
                <paper-input id="create-ram-resource" type="number" label="RAM (GB)"
                    min="1" value="1"></paper-input>
              </div>
              <div class="horizontal center layout">
                <paper-input id="create-gpu-resource" type="number" label="GPU"
                    min="0" value="0" ?disabled=${"fractional"===this.gpuAllocationMode}></paper-input>
                <paper-input id="create-fgpu-resource" type="number" label="fGPU"
                    min="0" value="0" ?disabled=${"fractional"!==this.gpuAllocationMode}></paper-input>
              </div>
              <wl-button
                class="fg orange create-button"
                id="create-policy-button"
                outlined
                type="button"
                @click="${this._createPreset}"
              >
                <wl-icon>add</wl-icon>
                Add
              </wl-button>
            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="delete-resource-preset-dialog" fixed backdrop blockscrolling>
         <wl-title level="3" slot="header">Let's double-check</wl-title>
         <div slot="content">
            <p>You are about to delete ${this.presetName} preset. This action cannot be undone. Do you want to proceed?</p>
         </div>
         <div slot="footer">
            <wl-button class="fg orange cancel" inverted flat @click="${e=>this._hideDialog(e)}">Cancel</wl-button>
            <wl-button class="fg orange ok" @click="${e=>this._deleteResourcePresetWithCheck(e)}">Okay</wl-button>
         </div>
      </wl-dialog>
    `}firstUpdated(){this.notification=window.lablupNotification}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._refreshTemplateData(),this.is_admin=window.backendaiclient.is_admin},!0):(this._refreshTemplateData(),this.is_admin=window.backendaiclient.is_admin,window.backendaiclient.getResourceSlots().then(e=>{this.gpu_allocatable=2!==Object.keys(e).length,Object.keys(e).includes("cuda.shares")?this.gpuAllocationMode="fractional":this.gpuAllocationMode="device"})))}_hideDialog(e){e.target.closest("wl-dialog").hide()}_launchResourcePresetDialog(e){this.updateCurrentPresetToDialog(e),this.shadowRoot.querySelector("#modify-template-dialog").show()}_launchDeleteResourcePresetDialog(e){const t=e.target.closest("#controls")["preset-name"];this.presetName=t,this.shadowRoot.querySelector("#delete-resource-preset-dialog").show()}_deleteResourcePresetWithCheck(e){window.backendaiclient.resourcePreset.delete(this.presetName).then(e=>{this.shadowRoot.querySelector("#delete-resource-preset-dialog").hide(),this.notification.text="Resource preset is successfully deleted.",this.notification.show(),this._refreshTemplateData()}).catch(e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#delete-resource-preset-dialog").hide(),this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}updateCurrentPresetToDialog(e){const t=e.target.closest("#controls")["preset-name"];let i=window.backendaiclient.utils.gqlToObject(this.resourcePresets,"name")[t];this.shadowRoot.querySelector("#id_preset_name").value=t,this.shadowRoot.querySelector("#cpu-resource").value=i.resource_slots.cpu,this.shadowRoot.querySelector("#gpu-resource").value=i.resource_slots["cuda.device"],this.shadowRoot.querySelector("#fgpu-resource").value=i.resource_slots["cuda.shares"],this.shadowRoot.querySelector("#ram-resource").value=parseFloat(window.backendaiclient.utils.changeBinaryUnit(i.resource_slots.mem,"g"))}_refreshTemplateData(){let e={group:window.backendaiclient.current_group};return window.backendaiclient.resourcePreset.check(e).then(e=>{let t=e.presets;Object.keys(t).map((e,i)=>{let a=t[e];a.resource_slots.mem_gb=parseFloat(window.backendaiclient.utils.changeBinaryUnit(a.resource_slots.mem,"g"))}),this.resourcePresets=t}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}refresh(){this._refreshTemplateData()}_isActive(){return"active"===this.condition}_readResourcePresetInput(){const e=e=>void 0!==e&&e.includes("Unlimited")?"Infinity":e,t=e(this.shadowRoot.querySelector("#cpu-resource").value),i=e(this.shadowRoot.querySelector("#ram-resource").value+"g"),a=e(this.shadowRoot.querySelector("#gpu-resource").value),o=e(this.shadowRoot.querySelector("#fgpu-resource").value);let s={cpu:t,mem:i};return null!=a&&""!==a&&"0"!==a&&(s["cuda.device"]=parseInt(a)),null!=o&&""!==o&&"0"!==o&&(s["cuda.shares"]=parseFloat(o)),{resource_slots:JSON.stringify(s)}}_modifyResourceTemplate(){let e=this.shadowRoot.querySelector("#id_preset_name").value;if(!e)return this.notification.text="No preset name",void this.notification.show();let t=this._readResourcePresetInput();window.backendaiclient.resourcePreset.mutate(e,t).then(e=>{this.shadowRoot.querySelector("#modify-template-dialog").hide(),this.notification.text="Resource policy successfully updated.",this.notification.show(),this._refreshTemplateData()}).catch(e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#modify-template-dialog").hide(),this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}_deleteKey(e){const t=e.target.closest("#controls").accessKey;window.backendaiclient.keypair.delete(t).then(e=>{this.refresh()}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}_findKeyItem(e){return e.access_key=this}_elapsed(e,t){var i=new Date(e);if("active"==this.condition)var a=new Date;else a=new Date;var o=Math.floor((a.getTime()-i.getTime())/1e3);return Math.floor(o/86400)}_humanReadableTime(e){return(e=new Date(e)).toUTCString()}_indexFrom1(e){return e+1}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":e}_createPreset(){const e=e=>void 0!==e&&e.includes("Unlimited")?"Infinity":e,t=e(this.shadowRoot.querySelector("#create-preset-name").value),i=e(this.shadowRoot.querySelector("#create-cpu-resource").value),a=e(this.shadowRoot.querySelector("#create-ram-resource").value+"g"),o=e(this.shadowRoot.querySelector("#create-gpu-resource").value),s=e(this.shadowRoot.querySelector("#create-fgpu-resource").value);if(!t)return this.notification.text="No preset name",void this.notification.show();let r={cpu:i,mem:a};null!=o&&""!==o&&"0"!==o&&(r["cuda.device"]=parseInt(o)),null!=s&&""!==s&&"0"!==s&&(r["cuda.shares"]=parseFloat(s));const l={resource_slots:JSON.stringify(r)};window.backendaiclient.resourcePreset.add(t,l).then(e=>{this.shadowRoot.querySelector("#create-preset-dialog").hide(),e.create_resource_preset.ok?(this.notification.text="Resource preset successfully created",this.refresh(),this.shadowRoot.querySelector("#create-preset-name").value="",this.shadowRoot.querySelector("#create-cpu-resource").value=1,this.shadowRoot.querySelector("#create-ram-resource").value=1,this.shadowRoot.querySelector("#create-gpu-resource").value=0,this.shadowRoot.querySelector("#create-fgpu-resource").value=0):this.notification.text=p.relieve(e.create_resource_preset.msg),this.notification.show()})}};e([t({type:Array})],h.prototype,"resourcePolicy",void 0),e([t({type:Boolean})],h.prototype,"is_admin",void 0),e([t({type:Boolean})],h.prototype,"active",void 0),e([t({type:Boolean})],h.prototype,"gpu_allocatable",void 0),e([t({type:String})],h.prototype,"gpuAllocationMode",void 0),e([t({type:String})],h.prototype,"condition",void 0),e([t({type:String})],h.prototype,"presetName",void 0),e([t({type:Object})],h.prototype,"resourcePresets",void 0),e([t({type:Array})],h.prototype,"_boundResourceRenderer",void 0),e([t({type:Array})],h.prototype,"_boundControlRenderer",void 0),h=e([i("backend-ai-resource-preset-list")],h);let m=class extends u{constructor(){super(),this.images=Array(),this.allowed_registries=Array(),this._boundRequirementsRenderer=this.requirementsRenderer.bind(this),this._boundControlsRenderer=this.controlsRenderer.bind(this),this._boundInstallRenderer=this.installRenderer.bind(this),this.servicePorts=Array(),this.selectedIndex=0,this._gpu_disabled=!1,this._fgpu_disabled=!1,this.alias=Object(),this.loadingIndicator=Object(),this.indicator=Object(),this.installImageDialog=Object(),this.installImageName="",this.installImageResource=Object()}static get styles(){return[a,o,s,d,c,r`
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

        div.indicator,
        span.indicator {
          font-size: 9px;
          margin-right: 5px;
        }

        wl-button {
          --button-bg: var(--paper-orange-50);
          --button-bg-hover: var(--paper-orange-100);
          --button-bg-active: var(--paper-orange-600);
          --button-color: #242424;
          color: var(--paper-orange-900);
        }

        wl-dialog {
          --dialog-min-width: 350px;
        }

        wl-dialog#modify-image-dialog wl-select,
        wl-dialog#modify-image-dialog wl-textfield {
          margin-bottom: 20px;
        }

        wl-select, wl-textfield {
          --input-font-family: Quicksand, Roboto;
        }

        wl-dialog wl-textfield {
          --input-font-size: 14px;
        }

        #modify-app-dialog {
          --dialog-height: 500px;
          --dialog-max-height: 550px;
          --dialog-min-width: 600px;
        }

        wl-dialog vaadin-grid {
          margin: 0px 20px;
        }

        .gutterBottom {
          margin-bottom: 20px;
        }

        div.container {
          display: flex;
          flex-direction: column;
          padding: 0px 30px;
        }

        div.row {
          display: grid;
          grid-template-columns: 4fr 4fr 4fr 1fr;
          margin-bottom: 10px;
        }
      `]}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":e}_hideDialog(e){e.target.closest("wl-dialog").hide()}_hideDialogById(e){return this.shadowRoot.querySelector(e).hide()}_launchDialogById(e){return this.shadowRoot.querySelector(e).show()}modifyImage(){const e=this.shadowRoot.querySelector("#modify-image-cpu").value,t=this.shadowRoot.querySelector("#modify-image-mem").value,i=this.shadowRoot.querySelector("#modify-image-gpu").value,a=this.shadowRoot.querySelector("#modify-image-fgpu").value,{resource_limits:o}=this.images[this.selectedIndex];let s={};const r=this._gpu_disabled?this._fgpu_disabled?1:2:this._fgpu_disabled?2:3;e!==o[0].min&&(s.cpu={min:e}),t!==o[r].min&&(s.mem={min:t}),this._gpu_disabled||i===o[1].min||(s["cuda.device"]={min:i}),this._fgpu_disabled||a===o[2].min||(s["cuda.shares"]={min:a});const l=this.images[this.selectedIndex];if(0===Object.keys(s).length)return this.notification.text="No changes made",this.notification.show(),void this._hideDialogById("#modify-image-dialog");window.backendaiclient.image.modifyResource(l.registry,l.name,l.tag,s).then(e=>{e.reduce((e,t)=>e&&"ok"===t.result,!0)?(this._getImages(),this.requestUpdate(),this.notification.text="Successfully modified"):this.notification.text="Problem occurred",this.notification.show(),this._hideDialogById("#modify-image-dialog")})}openInstallImageDialog(e){this.selectedIndex=e;let t=this.images[this.selectedIndex];this.installImageName=t.registry+"/"+t.name+":"+t.tag,this.installImageResource={},t.resource_limits.forEach(e=>{this.installImageResource[e.key.replace("_",".")]=e.min}),this.installImageDialog.show()}_installImage(){this.notification.text="Installing "+this.installImageName+". It takes time so have a cup of coffee!",this.notification.show(),this.installImageDialog.hide(),this.indicator.start("indeterminate"),this.indicator.set(10,"Downloading..."),"cuda.device"in this.installImageResource&&"cuda.shares"in this.installImageResource?(this.installImageResource.gpu=0,this.installImageResource.fgpu=this.installImageResource["cuda.shares"]):"cuda.device"in this.installImageResource&&(this.installImageResource.gpu=this.installImageResource["cuda.device"]),this.installImageResource.mem.endsWith("g")?this.installImageResource.mem=this.installImageResource.mem.replace("g",".5g"):this.installImageResource.mem.endsWith("m")&&(this.installImageResource.mem=Number(this.installImageResource.mem.slice(0,-1))+256+"m"),window.backendaiclient.image.install(this.installImageName,this.installImageResource).then(e=>{this.indicator.set(100,"Install finished."),this.indicator.end(1e3),this._getImages()}).catch(e=>{this.indicator.set(100,"Problem occurred during installation."),this.indicator.end(1e3)})}requirementsRenderer(e,t,i){l(n`
          <div class="layout horizontal center flex">
            <div class="layout horizontal configuration">
              <iron-icon class="fg green" icon="hardware:developer-board"></iron-icon>
              <span>${i.item.cpu_limit_min}</span> ~
              <span>${this._markIfUnlimited(i.item.cpu_limit_max)}</span>
              <span class="indicator">core</span>
            </div>
          </div>
          <div class="layout horizontal center flex">
            <div class="layout horizontal configuration">
              <iron-icon class="fg green" icon="hardware:memory"></iron-icon>
              <span>${i.item.mem_limit_min}</span> ~
              <span>${this._markIfUnlimited(i.item.mem_limit_max)}</span>
            </div>
          </div>
        ${i.item.cuda_device_limit_min?n`
           <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <iron-icon class="fg green" icon="hardware:icons:view-module"></iron-icon>
                <span>${i.item.cuda_device_limit_min}</span> ~
                <span>${this._markIfUnlimited(i.item.cuda_device_limit_max)}</span>
                <span class="indicator">GPU</span>
              </div>
            </div>
            `:n``}
        ${i.item.cuda_shares_limit_min?n`
            <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <iron-icon class="fg green" icon="icons:apps"></iron-icon>
                <span>${i.item.cuda_shares_limit_min}</span> ~
                <span>${this._markIfUnlimited(i.item.cuda_shares_limit_max)}</span>
                <span class="indicator">fGPU</span>
              </div>
            </div>
            `:n``}
      `,e)}_setPulldownDefaults(e){this._gpu_disabled=0===e.filter(e=>"cuda_device"===e.key).length,this._fgpu_disabled=0===e.filter(e=>"cuda_shares"===e.key).length,this.shadowRoot.querySelector("#modify-image-cpu").value=e[0].min,this._gpu_disabled||(this.shadowRoot.querySelector("#modify-image-gpu").value=e[1].min),this._fgpu_disabled||(this.shadowRoot.querySelector("#modify-image-fgpu").value=e[2].min);const t=this._gpu_disabled?this._fgpu_disabled?1:2:this._fgpu_disabled?2:3;this.shadowRoot.querySelector("#modify-image-mem").value=e[t].min}_decodeServicePort(){""===this.images[this.selectedIndex].labels["ai.backend.service-ports"]?this.servicePorts=[]:this.servicePorts=this.images[this.selectedIndex].labels["ai.backend.service-ports"].split(",").map(e=>{const t=e.split(":");return{app:t[0],protocol:t[1],port:t[2]}})}_parseServicePort(){const e=this.shadowRoot.querySelector("#modify-app-container").querySelectorAll(".row:not(.header)");return Array.prototype.filter.call(e,e=>(e=>0===Array.prototype.filter.call(e.querySelectorAll("wl-textfield"),(e,t)=>""===e.value||1===t&&!["http","tcp","pty"].includes(e.value)).length)(e)).map(e=>(e=>Array.prototype.map.call(e.querySelectorAll("wl-textfield"),e=>e.value).join(":"))(e)).join(",")}modifyServicePort(){const e=this._parseServicePort(),t=this.images[this.selectedIndex];window.backendaiclient.image.modifyLabel(t.registry,t.name,t.tag,"ai.backend.service-ports",e).then(({result:e})=>{this.notification.text="ok"===e?"Service port successfully modified":"Error Occurred",this._getImages(),this.requestUpdate(),this._clearRows(),this.notification.show(),this._hideDialogById("#modify-app-dialog")})}controlsRenderer(e,t,i){l(n`
        <div
          id="controls"
          class="layout horizontal flex center"
        >
          <paper-icon-button
            class="fg blue controls-running"
            on-tap="_modifyImage"
            icon="icons:settings"
            @click=${()=>{this.selectedIndex=i.index,this._setPulldownDefaults(this.images[this.selectedIndex].resource_limits),this._launchDialogById("#modify-image-dialog"),this.requestUpdate()}}
          ></paper-icon-button>
          <paper-icon-button
            class="fg pink controls-running"
            icon="icons:apps"
            @click=${()=>{this.selectedIndex!==i.index&&this._clearRows(),this.selectedIndex=i.index,this._decodeServicePort(),this._launchDialogById("#modify-app-dialog"),this.requestUpdate()}}
          ></paper-icon-button>
        </div>
      `,e)}installRenderer(e,t,i){l(n`
        <div class="layout horizontal center center-justified" style="margin:0; padding:0;">
          <wl-checkbox style="--checkbox-size:12px;" ?checked="${i.item.installed}" ?disabled="${i.item.installed}" @click="${e=>{this.openInstallImageDialog(i.index)}}"></wl-checkbox>
        </div>
      `,e)}render(){return n`
      <lablup-loading-indicator id="loading-indicator"></lablup-loading-indicator>
      <backend-ai-indicator id="indicator"></backend-ai-indicator>
      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Environments" id="testgrid" .items="${this.images}">
        <vaadin-grid-column width="40px" flex-grow="0" text-align="center" .renderer="${this._boundInstallRenderer}">
          <template class="header">
            <vaadin-grid-sorter path="installed"></vaadin-grid-sorter>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column width="80px" resizable>
          <template class="header">
            <vaadin-grid-sorter path="registry">Registry</vaadin-grid-sorter>
          </template>
          <template>
            <div class="layout vertical">
              <span>[[item.registry]]</span>
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column width="60px" resizable>
          <template class="header">
            <vaadin-grid-sorter path="namespace">Namespace</vaadin-grid-sorter>
          </template>
          <template>
            <div>[[item.namespace]]</div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable>
          <template class="header">
            <vaadin-grid-sorter path="lang">Language</vaadin-grid-sorter>
          </template>
          <template>
            <div>[[item.lang]]</div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="40px" resizable>
          <template class="header">
            <vaadin-grid-sorter path="baseversion">Version</vaadin-grid-sorter>
          </template>
          <template>
            <div>[[item.baseversion]]</div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="60px" resizable>
          <template class="header">Base</template>
          <template>
            <template is="dom-repeat" items="[[ item.baseimage ]]">
              <lablup-shields app="" color="blue" description="[[item]]"></lablup-shields>
            </template>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="50px" resizable>
          <template class="header">Constraint</template>
          <template>
            <template is="dom-if" if="[[item.additional_req]]">
              <lablup-shields app="" color="green" description="[[item.additional_req]]"></lablup-shields>
            </template>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="150px" flex-grow="0" resizable>
          <template class="header">
            Digest
          </template>
          <template>
            <div class="layout vertical">
              <span class="indicator">[[item.digest]]</span>
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column width="150px" flex-grow="0" resizable header="Resource Limit" .renderer="${this._boundRequirementsRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable header="Control" .renderer=${this._boundControlsRenderer}>
        </vaadin-grid-column>
      </vaadin-grid>
      <wl-dialog id="modify-image-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="1" class="login-panel intro">
          <h3 class="horizontal center layout">
            <span>Modify Image</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <form>
            <fieldset>
              <div style="display: flex; flex-direction: column;">
                <div style="display: flex;">
                  <wl-select
                    label="CPU"
                    id="modify-image-cpu"
                    style="flex: 1"
                  >
                    ${[1,2,3,4,5,6,7,8].map(e=>n`
                      <option
                        value=${e}
                      >${e}</option>
                    `)}
                  </wl-select>
                  <wl-select
                    label="RAM"
                    id="modify-image-mem"
                    style="flex: 1"
                  >
                    ${["64m","128m","256m","512m","1g","2g","4g","8g","16g"].map(e=>n`
                      <option
                        value=${e}
                      >${e}</option>
                    `)}
                  </wl-select>
                </div>
                <div style="display: flex;">
                  <wl-select
                    label="GPU"
                    id="modify-image-gpu"
                    style="flex: 1"
                    ?disabled=${this._gpu_disabled}
                  >
                    ${[0,1,2,3,4].map(e=>n`
                      <option
                        value=${e}
                      >${e}</option>
                    `)}
                  </wl-select>
                  <wl-select
                    label="fGPU"
                    id="modify-image-fgpu"
                    ?disabled=${this._fgpu_disabled}
                    style="flex: 1"
                  >
                    ${[.1,.2,.5,1,2].map(e=>n`
                      <option
                        value=${e}
                      >${e}</option>
                    `)}
                  </wl-select>
                </div>
              </div>
              <wl-button
                class="fg orange create-button"
                outlined
                type="button"
                style="box-sizing: border-box; width: 100%"
                @click=${this.modifyImage}
              >
                <wl-icon>check</wl-icon>
                Save Changes
              </wl-button>
            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="modify-app-dialog" fixed backdrop blockscrolling>
        <div slot="header" class="gutterBottom">
          <div class="horizontal center layout">
            <span style="font-family: Quicksand, Roboto; font-size: 20px;">Manage Apps</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </div>
          <wl-divider></wl-divider>
        </div>
        <div slot="content" id="modify-app-container" class="container">
          <div class="row header">
            <div> App Name </div>
            <div> Protocol </div>
            <div> Port </div>
            <div> Action </div>
          </div>
          ${this.servicePorts.map((e,t)=>n`
          <div class="row">
            <wl-textfield
              type="text"
              value=${e.app}
            ></wl-textfield>
            <wl-textfield
              type="text"
              value=${e.protocol}
            ></wl-textfield>
            <wl-textfield
              type="number"
              value=${e.port}
            ></wl-textfield>
            <wl-button
              fab flat
              class="fg pink"
              @click=${e=>this._removeRow(e)}
            >
              <wl-icon> remove </wl-icon>
            </wl-button>
          </div>
          `)}
          <div class="row">
            <wl-textfield type="text"></wl-textfield>
            <wl-textfield type="text"></wl-textfield>
            <wl-textfield type="number"></wl-textfield>
            <wl-button
              fab flat
              class="fg pink"
              @click=${this._addRow}
            >
              <wl-icon>add</wl-icon>
            </wl-button>
          </div>
        </div>
        <div slot="footer">
          <wl-button
            class="fg orange"
            outlined
            type="button"
            style="box-sizing: border-box; width: 100%;"
            @click=${this.modifyServicePort}
          >
            <wl-icon>check</wl-icon>
            Finish
          </wl-button>
        </div>
      </wl-dialog>
      <wl-dialog id="install-image-dialog" fixed backdrop blockscrolling>
         <wl-title level="3" slot="header">Let's double-check</wl-title>
         <div slot="content">
            <p>You are about to install the image <span style="color:blue;">${this.installImageName}</span>.</p>
            <p>This process requires significant download time. Do you want to proceed?</p>
         </div>
         <div slot="footer">
            <wl-button class="cancel" inverted flat @click="${e=>this._hideDialog(e)}">Cancel</wl-button>
            <wl-button class="ok" @click="${()=>this._installImage()}">Okay</wl-button>
         </div>
      </wl-dialog>
    `}_removeRow(e){const t=e.composedPath();let i=0;for(;"div"!==t[i].localName;)i++;t[i].remove()}_addRow(){const e=this.shadowRoot.querySelector("#modify-app-container"),t=e.children[e.children.length-1],i=this._createRow();e.insertBefore(i,t)}_createRow(){const e=document.createElement("div");e.setAttribute("class","row extra");const t=document.createElement("wl-textfield");t.setAttribute("type","text");const i=document.createElement("wl-textfield");t.setAttribute("type","text");const a=document.createElement("wl-textfield");t.setAttribute("type","number");const o=document.createElement("wl-button");o.setAttribute("class","fg pink"),o.setAttribute("fab",""),o.setAttribute("flat",""),o.addEventListener("click",e=>this._removeRow(e));const s=document.createElement("wl-icon");return s.innerHTML="remove",o.appendChild(s),e.appendChild(a),e.appendChild(i),e.appendChild(t),e.appendChild(o),e}_clearRows(){const e=this.shadowRoot.querySelector("#modify-app-container"),t=e.querySelectorAll(".row");t[t.length-1].querySelectorAll("wl-textfield").forEach(e=>{e.value=""}),e.querySelectorAll(".row.extra").forEach(e=>{e.remove()})}firstUpdated(){this.loadingIndicator=this.shadowRoot.querySelector("#loading-indicator"),this.indicator=this.shadowRoot.querySelector("#indicator"),this.notification=window.lablupNotification,this.installImageDialog=this.shadowRoot.querySelector("#install-image-dialog"),void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._getImages()},!0):this._getImages()}async _viewStateChanged(e){await this.updateComplete}_getImages(){this.loadingIndicator.show(),window.backendaiclient.domain.get(window.backendaiclient._config.domainName,["allowed_docker_registries"]).then(e=>(this.allowed_registries=e.domain.allowed_docker_registries,window.backendaiclient.image.list(["name","tag","registry","digest","installed","labels { key value }","resource_limits { key min max }"],!1,!0))).then(e=>{let t=e.images,i=[];t.forEach(e=>{if(this.allowed_registries.includes(e.registry)){let t=e.tag.split("-");void 0!==t[1]?(e.baseversion=t[0],e.baseimage=t[1],void 0!==t[2]&&(e.additional_req=t[2].toUpperCase())):e.baseversion=e.tag;let a=e.name.split("/");void 0!==a[1]?(e.namespace=a[0],e.lang=a[1]):e.lang=e.names;let o=e.lang.split("-"),s=[this._humanizeName(e.baseimage)];void 0!==o[1]&&(e.lang=o[1],s.push(this._humanizeName(o[0]))),e.baseimage=s,e.lang=this._humanizeName(e.lang),e.resource_limits.forEach(t=>{0==t.max&&(t.max="∞"),"cuda.device"==t.key&&(t.key="cuda_device"),"cuda.shares"==t.key&&(t.key="cuda_shares"),e[t.key+"_limit_min"]=this._addUnit(t.min),e[t.key+"_limit_max"]=this._addUnit(t.max)}),e.labels=e.labels.reduce((e,t)=>Object.assign(Object.assign({},e),{[t.key]:t.value}),{}),i.push(e)}}),this.images=i,this.loadingIndicator.hide()})}_addUnit(e){let t=e.substr(-1);return"m"==t?e.slice(0,-1)+"MB":"g"==t?e.slice(0,-1)+"GB":"t"==t?e.slice(0,-1)+"TB":e}_humanizeName(e){return this.alias={python:"Python",tensorflow:"TensorFlow",pytorch:"PyTorch",lua:"Lua",r:"R","r-base":"R",julia:"Julia",rust:"Rust",cpp:"C++",gcc:"GCC",go:"Go",tester:"Tester",haskell:"Haskell",java:"Java",php:"PHP",octave:"Octave",nodejs:"Node",caffe:"Caffe",scheme:"Scheme",scala:"Scala",base:"Base",cntk:"CNTK",h2o:"H2O.AI",digits:"DIGITS",py3:"Python 3",py2:"Python 2",py27:"Python 2.7",py35:"Python 3.5",py36:"Python 3.6",py37:"Python 3.7",py38:"Python 3.8","ubuntu16.04":"Ubuntu 16.04","ubuntu18.04":"Ubuntu 18.04","anaconda2018.12":"Anaconda 2018.12","alpine3.8":"Alpine Linux 3.8",ngc:"NVidia GPU Cloud",ff:"Research Env."},e in this.alias?this.alias[e]:e}};e([t({type:Array})],m.prototype,"images",void 0),e([t({type:Array})],m.prototype,"allowed_registries",void 0),e([t({type:Object})],m.prototype,"_boundRequirementsRenderer",void 0),e([t({type:Object})],m.prototype,"_boundControlsRenderer",void 0),e([t({type:Object})],m.prototype,"_boundInstallRenderer",void 0),e([t({type:Array})],m.prototype,"servicePorts",void 0),e([t({type:Number})],m.prototype,"selectedIndex",void 0),e([t({type:Boolean})],m.prototype,"_gpu_disabled",void 0),e([t({type:Boolean})],m.prototype,"_fgpu_disabled",void 0),e([t({type:Object})],m.prototype,"alias",void 0),e([t({type:Object})],m.prototype,"loadingIndicator",void 0),e([t({type:Object})],m.prototype,"indicator",void 0),e([t({type:Object})],m.prototype,"installImageDialog",void 0),e([t({type:String})],m.prototype,"installImageName",void 0),e([t({type:Object})],m.prototype,"installImageResource",void 0),m=e([i("backend-ai-environment-list")],m);let g=class extends u{constructor(){super(),this.indicator=Object(),this.selectedIndex=0,this.boundControlsRenderer=this._controlsRenderer.bind(this),this.registryList=[]}static get styles(){return[a,o,s,r`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 265px);
        }

        h4 {
          font-weight: 200;
          font-size: 14px;
          margin: 0px;
          padding: 5px 15px 5px 20px;
        }

        wl-button {
          --button-bg: var(--paper-yellow-50);
          --button-bg-hover: var(--paper-yellow-100);
          --button-bg-active: var(--paper-yellow-600);
        }

        wl-button.delete {
          --button-bg: var(--paper-red-50);
          --button-bg-hover: var(--paper-red-100);
          --button-bg-active: var(--paper-red-600);
        }

        wl-dialog wl-textfield {
          --input-font-family: Roboto, Noto, sans-serif;
          margin-bottom: 20px
        }

        wl-dialog {
          --dialog-min-width: 350px;
        }
      `]}firstUpdated(){this.notification=window.lablupNotification,this.indicator=this.shadowRoot.querySelector("#indicator")}_parseRegistryList(e){return Object.keys(e).map(t=>(e=>"string"==typeof e||e instanceof String)(e[t])?{"":e[t],hostname:t}:Object.assign(Object.assign({},e[t]),{hostname:t}))}_refreshRegistryList(){window.backendaiclient.registry.list().then(({result:e})=>{this.registryList=this._parseRegistryList(e),console.log(this.registryList),this.requestUpdate()})}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{},!0):this._refreshRegistryList())}_getHostname(e){const t=document.createElement("a");return t.href=e,t.hostname}_addRegistry(){const e=this.shadowRoot.querySelector("#add-registry-hostname").value,t=this.shadowRoot.querySelector("#add-registry-url").value,i=this.shadowRoot.querySelector("#add-registry-username").value,a=this.shadowRoot.querySelector("#add-registry-password").value;if(""===e)return this.notification.text="Hostname is empty",void this.notification.show();if(""===t)return this.notification.text="URL field is empty",void this.notification.show();let o={};o[""]=t,""!==i&&(o.username=i,""!==a&&(o.password=a)),window.backendaiclient.registry.add(e,o).then(({result:e})=>{"ok"===e?(this.notification.text="Registry successfully added",this._refreshRegistryList()):this.notification.text="Error occurred",this._hideDialogById("#add-registry-dialog"),this.notification.show()})}_deleteRegistry(){const e=this.shadowRoot.querySelector("#delete-registry").value;this.registryList[this.selectedIndex].hostname===e?window.backendaiclient.registry.delete(e).then(({result:e})=>{"ok"===e?(this.notification.text="Registry successfully deleted",this._refreshRegistryList()):this.notification.text="Error Occurred",this._hideDialogById("#delete-registry-dialog"),this.notification.show()}):(this.notification.text="Hostname does not match!",this.notification.show())}_rescanImage(){this.indicator.start("indeterminate"),this.indicator.set(10,"Updating registry information..."),window.backendaiclient.maintenance.rescan_images(this.registryList[this.selectedIndex].hostname).then(({rescan_images:e})=>{e.ok?(this.indicator.set(100,"Registry update finished."),this.indicator.end(1e3)):(this.indicator.set(50,"Registry update failed."),this.indicator.end(1e3),this.notification.text=p.relieve(e.msg),this.notification.detail=e.msg,this.notification.show())}).catch(e=>{console.log(e),this.indicator.set(50,"Rescan failed."),this.indicator.end(1e3),e&&e.message&&(this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}_launchDialogById(e){this.shadowRoot.querySelector(e).show()}_hideDialogById(e){this.shadowRoot.querySelector(e).hide()}_hideDialog(e){e.target.closest("wl-dialog").hide()}_indexRenderer(e,t,i){let a=i.index+1;l(n`
        <div>${a}</div>
      `,e)}_registryRenderer(e,t,i){l(n`
        <div>
          ${i.item[""]}
        </div>
      `,e)}_controlsRenderer(e,t,i){l(n`
        <div
          id="controls"
          class="layout horizontal flex center"
        >
          <paper-icon-button
            icon="delete"
            class="fg red"
            @click=${()=>{this.selectedIndex=i.index,this._launchDialogById("#delete-registry-dialog")}}
          ></paper-icon-button>
          <paper-icon-button
            icon="refresh"
            class="fg blue"
            @click=${()=>{this.selectedIndex=i.index,this._rescanImage()}}
          ></paper-icon-button>
        </div>
      `,e)}render(){return n`
      <backend-ai-indicator id="indicator"></backend-ai-indicator>
      <h4 class="horizontal flex center center-justified layout">
        <span>Registries</span>
        <span class="flex"></span>
        <wl-button
          class="fg orange"
          id="add-registry"
          outlined
          @click=${()=>this._launchDialogById("#add-registry-dialog")}
        >
          <wl-icon>add</wl-icon>
          Add Registry
        </wl-button>
      </h4>

      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Job list" .items="${this.registryList}">
        <vaadin-grid-column flex-grow="0" width="40px" header="#" .renderer=${this._indexRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="Hostname">
          <template>
            <div> [[item.hostname]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="2" header="Registry URL" resizable .renderer=${this._registryRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="Username">
          <template>
            <div> [[item.username]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="Password">
          <template>
            <div> [[item.password]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="Controls" .renderer=${this.boundControlsRenderer}>
        </vaadin-grid-column>
      </vaadin-grid>
      <wl-dialog id="add-registry-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="1" class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>Add Registry</span>
            <div class="flex"></div>
            <wl-button class="fab" fab flat inverted @click=${e=>this._hideDialog(e)}>
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <form>
            <fieldset>
              <wl-textfield
                id="add-registry-hostname"
                type="text"
                label="Registry Hostname"
              ></wl-textfield>
              <wl-textfield
                id="add-registry-url"
                type="text"
                label="Registry URL"
              ></wl-textfield>
              <wl-textfield
                id="add-registry-username"
                type="text"
                label="Username (Optional)"
              ></wl-textfield>
              <wl-textfield
                id="add-registry-password"
                type="password"
                label="Password (Optional)"
              ></wl-textfield>

              <div class="horizontal layout center-justified">
                <wl-button
                  class="fg orange"
                  outlined
                  type="button"
                  style="box-sizing: border-box; width: 100%"
                  @click=${this._addRegistry}
                >
                  <wl-icon>add</wl-icon>
                  Add Registry
                </wl-button>
              </div>
            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>

      <wl-dialog id="delete-registry-dialog" fixed backdrop blockscrolling>
        <wl-title level="3" slot="header" style="color: rgb(242, 100, 85)">Warning: this cannot be undone!</wl-title>
        <div slot="content">
          <wl-textfield
            id="delete-registry"
            type="text"
            label="Type registry hostname to delete"
          ></wl-textfield>
          <wl-button
            class="fg red delete"
            type="button"
            outlined
            style="width: 100%; box-sizing: border-box;"
            @click=${this._deleteRegistry}
          >
            <wl-icon>delete</wl-icon>
            Delete
          </wl-button>
        </div>
      </wl-dialog>
    `}};e([t({type:Object})],g.prototype,"indicator",void 0),e([t({type:Number})],g.prototype,"selectedIndex",void 0),e([t({type:String})],g.prototype,"boundControlsRenderer",void 0),g=e([i("backend-ai-registry-list")],g);let b=class extends u{constructor(){super(),this.images=Object(),this.is_superadmin=!1,this._activeTab="image-lists"}static get styles(){return[a,o,s,r`
          wl-tab-group {
              --tab-group-indicator-bg: var(--paper-yellow-600);
          }

          wl-tab {
              --tab-color: #666;
              --tab-color-hover: #222;
              --tab-color-hover-filled: #222;
              --tab-color-active: var(--paper-yellow-900);
              --tab-color-active-hover: var(--paper-yellow-900);
              --tab-color-active-filled: #ccc;
              --tab-bg-active: var(--paper-yellow-200);
              --tab-bg-filled: var(--paper-yellow-200);
              --tab-bg-active-hover: var(--paper-yellow-200);
          }

          div h4 {
              margin: 0;
              font-weight: 100;
              font-size: 16px;
              padding-left: 20px;
              border-bottom: 1px solid #ccc;
              width: 100%;
          }

          wl-card wl-card {
              margin: 0;
              padding: 0;
              --card-elevation: 0;
          }

      `]}static get properties(){return{active:{type:Boolean},_activeTab:{type:Boolean}}}async _viewStateChanged(e){return await this.updateComplete,!1===e||(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.is_superadmin=window.backendaiclient.is_superadmin},!0):this.is_superadmin=window.backendaiclient.is_superadmin,!1)}_showTab(e){for(var t=this.shadowRoot.querySelectorAll(".tab-content"),i=0;i<t.length;i++)t[i].style.display="none";this._activeTab=e.value,this.shadowRoot.querySelector("#"+e.value).style.display="block"}_hideDialog(e){e.target.closest("wl-dialog").hide()}render(){return n`
      <lablup-loading-indicator id="loading-indicator"></lablup-loading-indicator>
      <wl-card class="item" elevation="1">
        <h3 class="tab horizontal center layout">
          <wl-tab-group>
            <wl-tab value="image-lists" checked @click="${e=>this._showTab(e.target)}">Images</wl-tab>
            <wl-tab value="resource-template-lists" @click="${e=>this._showTab(e.target)}">Resource Presets</wl-tab>
            ${this.is_superadmin?n`
              <wl-tab value="registry-lists" @click="${e=>this._showTab(e.target)}">Registries</wl-tab>`:n``}
          </wl-tab-group>
          <div class="flex"></div>
        </h3>
        <div id="image-lists" class="tab-content">
          <backend-ai-environment-list ?active="${"image-lists"===this._activeTab}"></backend-ai-environment-list>
        </div>
        <backend-ai-resource-preset-list id="resource-template-lists" class="admin item tab-content" style="display: none" ?active="${"resource-template-lists"===this._activeTab}"></backend-ai-resource-preset-list>
        <div id="registry-lists" class="tab-content">
          <backend-ai-registry-list ?active="${"registry-lists"===this._activeTab}"> </backend-ai-registry-list>
        </div>
      </wl-card>
    `}firstUpdated(){}disconnectedCallback(){super.disconnectedCallback()}};e([t({type:String})],b.prototype,"images",void 0),e([t({type:Boolean})],b.prototype,"is_superadmin",void 0),e([t({type:String})],b.prototype,"_activeTab",void 0);var w=b=e([i("backend-ai-environment-view")],b);export default w;
