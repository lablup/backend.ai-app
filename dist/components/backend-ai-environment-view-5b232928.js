import{_ as e,p as t,c as i,k as o,I as l,j as a,a as n,ap as d,h as s,m as c,ac as r,l as m,a1 as h,a2 as p,a3 as u,Q as g,a7 as b,a9 as f,V as v,aa as _}from"./backend-ai-console-1d877d5d.js";import{B as y}from"./backend-ai-page-45fe2b63.js";import"./lablup-loading-indicator-9d46dcc5.js";import"./iron-resizable-behavior-e60ed36f.js";import"./vaadin-progress-bar-649bad0b.js";import"./paper-progress-d55c9d8f.js";import"./radio-behavior-7b99f6a8.js";import"./shadow-3c435ca0.js";import"./paper-dropdown-menu-1276e141.js";import"./index-12c33a94.js";import{F as w}from"./form-element-5aef624b.js";import"./av-icons-7b59ac74.js";import"./vaadin-grid-46425869.js";import"./vaadin-grid-sorter-7cd4a75c.js";import{l as x,f as k}from"./mwc-line-ripple-directive-97e86c3d.js";import"./index-fd1f0395.js";import"./backend-ai-indicator-1f5913ac.js";import"./index-f20740e5.js";import{C as R}from"./mwc-menu-6be58650.js";import"./vaadin-item-ce4543ea.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let I=class extends y{constructor(){super(),this.resourcePolicy={},this.is_admin=!1,this.active=!1,this.gpu_allocatable=!1,this.gpuAllocationMode="device",this.condition="",this.presetName="",this._boundResourceRenderer=this.resourceRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this)}static get styles(){return[o,l,a,n`
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
      `]}resourceRenderer(e,t,i){d(s`
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
        ${i.item.resource_slots["cuda.device"]?s`
        <div class="layout horizontal configuration">
          <wl-icon class="fg green">view_module</wl-icon>
          <span>${this._markIfUnlimited(i.item.resource_slots["cuda.device"])}</span>
          <span class="indicator">GPU</span>
        </div>
      `:s``}
        ${i.item.resource_slots["cuda.shares"]?s`
            <div class="layout horizontal configuration">
              <wl-icon class="fg green">view_module</wl-icon>
              <span>${this._markIfUnlimited(i.item.resource_slots["cuda.shares"])}</span>
              <span class="indicator">GPU</span>
            </div>
          `:s``}
        </div>
      `,e)}controlRenderer(e,t,i){d(s`
            <div id="controls" class="layout horizontal flex center"
                 .preset-name="${i.item.name}">
              ${this.is_admin?s`
                    <wl-button class="fg blue controls-running" fab flat inverted
                      @click="${e=>this._launchResourcePresetDialog(e)}">
                       <wl-icon>settings</wl-icon>
                    </wl-button>
                    <wl-button class="fg red controls-running" fab flat inverted
                      @click="${e=>this._launchDeleteResourcePresetDialog(e)}">
                       <wl-icon>delete</wl-icon>
                    </wl-button>
              `:s``}
            </div>
      `,e)}_indexRenderer(e,t,i){let o=i.index+1;d(s`
        <div>${o}</div>
      `,e)}_launchPresetAddDialog(e){this.shadowRoot.querySelector("#create-preset-dialog").show()}render(){return s`
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
    `}firstUpdated(){this.notification=window.lablupNotification}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._refreshTemplateData(),this.is_admin=window.backendaiclient.is_admin},!0):(this._refreshTemplateData(),this.is_admin=window.backendaiclient.is_admin,window.backendaiclient.getResourceSlots().then(e=>{this.gpu_allocatable=2!==Object.keys(e).length,Object.keys(e).includes("cuda.shares")?this.gpuAllocationMode="fractional":this.gpuAllocationMode="device"})))}_hideDialog(e){e.target.closest("wl-dialog").hide()}_launchResourcePresetDialog(e){this.updateCurrentPresetToDialog(e),this.shadowRoot.querySelector("#modify-template-dialog").show()}_launchDeleteResourcePresetDialog(e){const t=e.target.closest("#controls")["preset-name"];this.presetName=t,this.shadowRoot.querySelector("#delete-resource-preset-dialog").show()}_deleteResourcePresetWithCheck(e){window.backendaiclient.resourcePreset.delete(this.presetName).then(e=>{this.shadowRoot.querySelector("#delete-resource-preset-dialog").hide(),this.notification.text="Resource preset is successfully deleted.",this.notification.show(),this._refreshTemplateData()}).catch(e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#delete-resource-preset-dialog").hide(),this.notification.text=c.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}updateCurrentPresetToDialog(e){const t=e.target.closest("#controls")["preset-name"];let i=window.backendaiclient.utils.gqlToObject(this.resourcePresets,"name")[t];this.shadowRoot.querySelector("#id_preset_name").value=t,this.shadowRoot.querySelector("#cpu-resource").value=i.resource_slots.cpu,this.shadowRoot.querySelector("#gpu-resource").value=i.resource_slots["cuda.device"],this.shadowRoot.querySelector("#fgpu-resource").value=i.resource_slots["cuda.shares"],this.shadowRoot.querySelector("#ram-resource").value=parseFloat(window.backendaiclient.utils.changeBinaryUnit(i.resource_slots.mem,"g"))}_refreshTemplateData(){let e={group:window.backendaiclient.current_group};return window.backendaiclient.resourcePreset.check(e).then(e=>{let t=e.presets;Object.keys(t).map((e,i)=>{let o=t[e];o.resource_slots.mem_gb=parseFloat(window.backendaiclient.utils.changeBinaryUnit(o.resource_slots.mem,"g"))}),this.resourcePresets=t}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=c.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}refresh(){this._refreshTemplateData()}_isActive(){return"active"===this.condition}_readResourcePresetInput(){const e=e=>void 0!==e&&e.includes("Unlimited")?"Infinity":e,t=e(this.shadowRoot.querySelector("#cpu-resource").value),i=e(this.shadowRoot.querySelector("#ram-resource").value+"g"),o=e(this.shadowRoot.querySelector("#gpu-resource").value),l=e(this.shadowRoot.querySelector("#fgpu-resource").value);let a={cpu:t,mem:i};return null!=o&&""!==o&&"0"!==o&&(a["cuda.device"]=parseInt(o)),null!=l&&""!==l&&"0"!==l&&(a["cuda.shares"]=parseFloat(l)),{resource_slots:JSON.stringify(a)}}_modifyResourceTemplate(){let e=this.shadowRoot.querySelector("#id_preset_name").value;if(!e)return this.notification.text="No preset name",void this.notification.show();let t=this._readResourcePresetInput();window.backendaiclient.resourcePreset.mutate(e,t).then(e=>{this.shadowRoot.querySelector("#modify-template-dialog").hide(),this.notification.text="Resource policy successfully updated.",this.notification.show(),this._refreshTemplateData()}).catch(e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#modify-template-dialog").hide(),this.notification.text=c.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_deleteKey(e){const t=e.target.closest("#controls").accessKey;window.backendaiclient.keypair.delete(t).then(e=>{this.refresh()}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=c.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_findKeyItem(e){return e.access_key=this}_elapsed(e,t){var i=new Date(e);if("active"==this.condition)var o=new Date;else o=new Date;var l=Math.floor((o.getTime()-i.getTime())/1e3);return Math.floor(l/86400)}_humanReadableTime(e){return(e=new Date(e)).toUTCString()}_indexFrom1(e){return e+1}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":e}_createPreset(){const e=e=>void 0!==e&&e.includes("Unlimited")?"Infinity":e,t=e(this.shadowRoot.querySelector("#create-preset-name").value),i=e(this.shadowRoot.querySelector("#create-cpu-resource").value),o=e(this.shadowRoot.querySelector("#create-ram-resource").value+"g"),l=e(this.shadowRoot.querySelector("#create-gpu-resource").value),a=e(this.shadowRoot.querySelector("#create-fgpu-resource").value);if(!t)return this.notification.text="No preset name",void this.notification.show();let n={cpu:i,mem:o};null!=l&&""!==l&&"0"!==l&&(n["cuda.device"]=parseInt(l)),null!=a&&""!==a&&"0"!==a&&(n["cuda.shares"]=parseFloat(a));const d={resource_slots:JSON.stringify(n)};window.backendaiclient.resourcePreset.add(t,d).then(e=>{this.shadowRoot.querySelector("#create-preset-dialog").hide(),e.create_resource_preset.ok?(this.notification.text="Resource preset successfully created",this.refresh(),this.shadowRoot.querySelector("#create-preset-name").value="",this.shadowRoot.querySelector("#create-cpu-resource").value=1,this.shadowRoot.querySelector("#create-ram-resource").value=1,this.shadowRoot.querySelector("#create-gpu-resource").value=0,this.shadowRoot.querySelector("#create-fgpu-resource").value=0):this.notification.text=c.relieve(e.create_resource_preset.msg),this.notification.show()})}};e([t({type:Array})],I.prototype,"resourcePolicy",void 0),e([t({type:Boolean})],I.prototype,"is_admin",void 0),e([t({type:Boolean})],I.prototype,"active",void 0),e([t({type:Boolean})],I.prototype,"gpu_allocatable",void 0),e([t({type:String})],I.prototype,"gpuAllocationMode",void 0),e([t({type:String})],I.prototype,"condition",void 0),e([t({type:String})],I.prototype,"presetName",void 0),e([t({type:Object})],I.prototype,"resourcePresets",void 0),e([t({type:Array})],I.prototype,"_boundResourceRenderer",void 0),e([t({type:Array})],I.prototype,"_boundControlRenderer",void 0),I=e([i("backend-ai-resource-preset-list")],I);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let E=class extends y{constructor(){super(),this.images=Array(),this.allowed_registries=Array(),this._boundRequirementsRenderer=this.requirementsRenderer.bind(this),this._boundControlsRenderer=this.controlsRenderer.bind(this),this._boundInstallRenderer=this.installRenderer.bind(this),this.servicePorts=Array(),this.selectedIndex=0,this._gpu_disabled=!1,this._fgpu_disabled=!1,this.alias=Object(),this.loadingIndicator=Object(),this.indicator=Object(),this.installImageDialog=Object(),this.installImageName="",this.installImageResource=Object(),this.selectedCheckbox=Object()}static get styles(){return[o,l,a,r,m,n`
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
      `]}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":e}_hideDialog(e){e.target.closest("wl-dialog").hide()}_hideDialogById(e){return this.shadowRoot.querySelector(e).hide()}_launchDialogById(e){return this.shadowRoot.querySelector(e).show()}modifyImage(){const e=this.shadowRoot.querySelector("#modify-image-cpu").value,t=this.shadowRoot.querySelector("#modify-image-mem").value,i=this.shadowRoot.querySelector("#modify-image-gpu").value,o=this.shadowRoot.querySelector("#modify-image-fgpu").value,{resource_limits:l}=this.images[this.selectedIndex];let a={};const n=this._gpu_disabled?this._fgpu_disabled?1:2:this._fgpu_disabled?2:3;e!==l[0].min&&(a.cpu={min:e}),t!==l[n].min&&(a.mem={min:t}),this._gpu_disabled||i===l[1].min||(a["cuda.device"]={min:i}),this._fgpu_disabled||o===l[2].min||(a["cuda.shares"]={min:o});const d=this.images[this.selectedIndex];if(0===Object.keys(a).length)return this.notification.text="No changes made",this.notification.show(),void this._hideDialogById("#modify-image-dialog");window.backendaiclient.image.modifyResource(d.registry,d.name,d.tag,a).then(e=>{e.reduce((e,t)=>e&&"ok"===t.result,!0)?(this._getImages(),this.requestUpdate(),this.notification.text="Successfully modified"):this.notification.text="Problem occurred",this.notification.show(),this._hideDialogById("#modify-image-dialog")})}openInstallImageDialog(e){this.selectedIndex=e;let t=this.images[this.selectedIndex];this.installImageName=t.registry+"/"+t.name+":"+t.tag,this.installImageResource={},t.resource_limits.forEach(e=>{this.installImageResource[e.key.replace("_",".")]=e.min}),this.installImageDialog.show()}_installImage(){this.notification.text="Installing "+this.installImageName+". It takes time so have a cup of coffee!",this.notification.show(),this.installImageDialog.hide(),this.indicator.start("indeterminate"),this.indicator.set(10,"Downloading..."),"cuda.device"in this.installImageResource&&"cuda.shares"in this.installImageResource?(this.installImageResource.gpu=0,this.installImageResource.fgpu=this.installImageResource["cuda.shares"]):"cuda.device"in this.installImageResource&&(this.installImageResource.gpu=this.installImageResource["cuda.device"]),this.installImageResource.mem.endsWith("g")?this.installImageResource.mem=this.installImageResource.mem.replace("g",".5g"):this.installImageResource.mem.endsWith("m")&&(this.installImageResource.mem=Number(this.installImageResource.mem.slice(0,-1))+256+"m"),window.backendaiclient.image.install(this.installImageName,this.installImageResource).then(e=>{this.indicator.set(100,"Install finished."),this.indicator.end(1e3),this._getImages()}).catch(e=>{this._uncheckSelectedRow(),this.notification.text=c.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e),this.indicator.set(100,"Problem occurred during installation."),this.indicator.end(1e3)})}requirementsRenderer(e,t,i){d(s`
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
        ${i.item.cuda_device_limit_min?s`
           <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <iron-icon class="fg green" icon="hardware:icons:view-module"></iron-icon>
                <span>${i.item.cuda_device_limit_min}</span> ~
                <span>${this._markIfUnlimited(i.item.cuda_device_limit_max)}</span>
                <span class="indicator">GPU</span>
              </div>
            </div>
            `:s``}
        ${i.item.cuda_shares_limit_min?s`
            <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <iron-icon class="fg green" icon="icons:apps"></iron-icon>
                <span>${i.item.cuda_shares_limit_min}</span> ~
                <span>${this._markIfUnlimited(i.item.cuda_shares_limit_max)}</span>
                <span class="indicator">fGPU</span>
              </div>
            </div>
            `:s``}
      `,e)}_setPulldownDefaults(e){this._gpu_disabled=0===e.filter(e=>"cuda_device"===e.key).length,this._fgpu_disabled=0===e.filter(e=>"cuda_shares"===e.key).length,this.shadowRoot.querySelector("#modify-image-cpu").value=e[0].min,this._gpu_disabled||(this.shadowRoot.querySelector("#modify-image-gpu").value=e[1].min),this._fgpu_disabled||(this.shadowRoot.querySelector("#modify-image-fgpu").value=e[2].min);const t=this._gpu_disabled?this._fgpu_disabled?1:2:this._fgpu_disabled?2:3;this.shadowRoot.querySelector("#modify-image-mem").value=e[t].min}_decodeServicePort(){""===this.images[this.selectedIndex].labels["ai.backend.service-ports"]?this.servicePorts=[]:this.servicePorts=this.images[this.selectedIndex].labels["ai.backend.service-ports"].split(",").map(e=>{const t=e.split(":");return{app:t[0],protocol:t[1],port:t[2]}})}_parseServicePort(){const e=this.shadowRoot.querySelector("#modify-app-container").querySelectorAll(".row:not(.header)");return Array.prototype.filter.call(e,e=>(e=>0===Array.prototype.filter.call(e.querySelectorAll("wl-textfield"),(e,t)=>""===e.value||1===t&&!["http","tcp","pty"].includes(e.value)).length)(e)).map(e=>(e=>Array.prototype.map.call(e.querySelectorAll("wl-textfield"),e=>e.value).join(":"))(e)).join(",")}modifyServicePort(){const e=this._parseServicePort(),t=this.images[this.selectedIndex];window.backendaiclient.image.modifyLabel(t.registry,t.name,t.tag,"ai.backend.service-ports",e).then(({result:e})=>{this.notification.text="ok"===e?"Service port successfully modified":"Error Occurred",this._getImages(),this.requestUpdate(),this._clearRows(),this.notification.show(),this._hideDialogById("#modify-app-dialog")})}controlsRenderer(e,t,i){d(s`
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
      `,e)}installRenderer(e,t,i){d(s`
        <div class="layout horizontal center center-justified" style="margin:0; padding:0;">
          <wl-checkbox id="${i.item.name}" style="--checkbox-size:12px;"
                       ?checked="${i.item.installed}"
                       ?disabled="${i.item.installed}"
                       @click="${e=>{this.openInstallImageDialog(i.index),this.selectedCheckbox=e.target}}">
          </wl-checkbox>
        </div>
      `,e)}render(){return s`
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
                    ${[1,2,3,4,5,6,7,8].map(e=>s`
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
                    ${["64m","128m","256m","512m","1g","2g","4g","8g","16g"].map(e=>s`
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
                    ${[0,1,2,3,4].map(e=>s`
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
                    ${[.1,.2,.5,1,2].map(e=>s`
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
          ${this.servicePorts.map((e,t)=>s`
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
      <wl-dialog id="install-image-dialog" fixed backdrop blockscrolling persistent>
         <wl-title level="3" slot="header">Let's double-check</wl-title>
         <div slot="content">
            <p>You are about to install the image <span style="color:blue;">${this.installImageName}</span>.</p>
            <p>This process requires significant download time. Do you want to proceed?</p>
         </div>
         <div slot="footer">
            <wl-button class="cancel" inverted flat
                       @click="${e=>{this._hideDialog(e),this._uncheckSelectedRow()}}">
              Cancel
            </wl-button>
            <wl-button class="ok" @click="${()=>this._installImage()}">Okay</wl-button>
         </div>
      </wl-dialog>
    `}_removeRow(e){const t=e.composedPath();let i=0;for(;"div"!==t[i].localName;)i++;t[i].remove()}_addRow(){const e=this.shadowRoot.querySelector("#modify-app-container"),t=e.children[e.children.length-1],i=this._createRow();e.insertBefore(i,t)}_createRow(){const e=document.createElement("div");e.setAttribute("class","row extra");const t=document.createElement("wl-textfield");t.setAttribute("type","text");const i=document.createElement("wl-textfield");t.setAttribute("type","text");const o=document.createElement("wl-textfield");t.setAttribute("type","number");const l=document.createElement("wl-button");l.setAttribute("class","fg pink"),l.setAttribute("fab",""),l.setAttribute("flat",""),l.addEventListener("click",e=>this._removeRow(e));const a=document.createElement("wl-icon");return a.innerHTML="remove",l.appendChild(a),e.appendChild(o),e.appendChild(i),e.appendChild(t),e.appendChild(l),e}_clearRows(){const e=this.shadowRoot.querySelector("#modify-app-container"),t=e.querySelectorAll(".row");t[t.length-1].querySelectorAll("wl-textfield").forEach(e=>{e.value=""}),e.querySelectorAll(".row.extra").forEach(e=>{e.remove()})}_uncheckSelectedRow(){this.selectedCheckbox.checked=!1}firstUpdated(){this.loadingIndicator=this.shadowRoot.querySelector("#loading-indicator"),this.indicator=this.shadowRoot.querySelector("#indicator"),this.notification=window.lablupNotification,this.installImageDialog=this.shadowRoot.querySelector("#install-image-dialog"),void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._getImages()},!0):this._getImages()}async _viewStateChanged(e){await this.updateComplete}_getImages(){this.loadingIndicator.show(),window.backendaiclient.domain.get(window.backendaiclient._config.domainName,["allowed_docker_registries"]).then(e=>(this.allowed_registries=e.domain.allowed_docker_registries,window.backendaiclient.image.list(["name","tag","registry","digest","installed","labels { key value }","resource_limits { key min max }"],!1,!0))).then(e=>{let t=e.images,i=[];t.forEach(e=>{if(this.allowed_registries.includes(e.registry)){let t=e.tag.split("-");void 0!==t[1]?(e.baseversion=t[0],e.baseimage=t[1],void 0!==t[2]&&(e.additional_req=t[2].toUpperCase())):e.baseversion=e.tag;let o=e.name.split("/");void 0!==o[1]?(e.namespace=o[0],e.lang=o.slice(1).join("")):(e.namespace="",e.lang=o[0]);let l=e.lang.split("-"),a=[this._humanizeName(e.baseimage)];void 0!==l[1]&&(e.lang=l[1],a.push(this._humanizeName(l[0]))),e.baseimage=a,e.lang=this._humanizeName(e.lang),e.resource_limits.forEach(t=>{0==t.max&&(t.max="∞"),"cuda.device"==t.key&&(t.key="cuda_device"),"cuda.shares"==t.key&&(t.key="cuda_shares"),e[t.key+"_limit_min"]=this._addUnit(t.min),e[t.key+"_limit_max"]=this._addUnit(t.max)}),e.labels=e.labels.reduce((e,t)=>Object.assign(Object.assign({},e),{[t.key]:t.value}),{}),i.push(e)}}),this.images=i,this.loadingIndicator.hide()}).catch(e=>{console.log(e),void 0!==e.message?(this.notification.text=c.relieve(e.title),this.notification.detail=e.message):this.notification.text=c.relieve("Problem occurred during image metadata loading."),this.notification.show(!0,e),this.loadingIndicator.hide()})}_addUnit(e){let t=e.substr(-1);return"m"==t?e.slice(0,-1)+"MB":"g"==t?e.slice(0,-1)+"GB":"t"==t?e.slice(0,-1)+"TB":e}_humanizeName(e){return this.alias={python:"Python",tensorflow:"TensorFlow",pytorch:"PyTorch",lua:"Lua",r:"R","r-base":"R",julia:"Julia",rust:"Rust",cpp:"C++",gcc:"GCC",go:"Go",tester:"Tester",haskell:"Haskell",sagemath:"Sage",java:"Java",php:"PHP",octave:"Octave",nodejs:"Node",caffe:"Caffe",scheme:"Scheme",scala:"Scala",base:"Base",cntk:"CNTK",h2o:"H2O.AI",digits:"DIGITS",py3:"Python 3",py2:"Python 2",py27:"Python 2.7",py35:"Python 3.5",py36:"Python 3.6",py37:"Python 3.7",py38:"Python 3.8","ubuntu16.04":"Ubuntu 16.04","ubuntu18.04":"Ubuntu 18.04","ubuntu20.04":"Ubuntu 20.04","anaconda2018.12":"Anaconda 2018.12","alpine3.8":"Alpine Linux 3.8",ngc:"NVidia GPU Cloud",ff:"Research Env."},e in this.alias?this.alias[e]:e}};e([t({type:Array})],E.prototype,"images",void 0),e([t({type:Array})],E.prototype,"allowed_registries",void 0),e([t({type:Object})],E.prototype,"_boundRequirementsRenderer",void 0),e([t({type:Object})],E.prototype,"_boundControlsRenderer",void 0),e([t({type:Object})],E.prototype,"_boundInstallRenderer",void 0),e([t({type:Array})],E.prototype,"servicePorts",void 0),e([t({type:Number})],E.prototype,"selectedIndex",void 0),e([t({type:Boolean})],E.prototype,"_gpu_disabled",void 0),e([t({type:Boolean})],E.prototype,"_fgpu_disabled",void 0),e([t({type:Object})],E.prototype,"alias",void 0),e([t({type:Object})],E.prototype,"loadingIndicator",void 0),e([t({type:Object})],E.prototype,"indicator",void 0),e([t({type:Object})],E.prototype,"installImageDialog",void 0),e([t({type:String})],E.prototype,"installImageName",void 0),e([t({type:Object})],E.prototype,"installImageResource",void 0),e([t({type:Object})],E.prototype,"selectedCheckbox",void 0),E=e([i("backend-ai-environment-list")],E);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var S={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",SELECTED_ITEM_CLASS:"mdc-list-item--selected",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},C={ARIA_CONTROLS:"aria-controls",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_ITEM_SELECTOR:"."+S.SELECTED_ITEM_CLASS,SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},A={LABEL_SCALE:.75,UNSET_INDEX:-1},D=function(e){function t(i,o){void 0===o&&(o={});var l=e.call(this,p({},t.defaultAdapter,i))||this;return l.selectedIndex_=A.UNSET_INDEX,l.disabled_=!1,l.isMenuOpen_=!1,l.leadingIcon_=o.leadingIcon,l.helperText_=o.helperText,l.menuItemValues_=l.adapter_.getMenuItemValues(),l}return h(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return S},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return A},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return C},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedMenuItem:function(){return null},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectedTextFocused:function(){return!1},getSelectedTextAttr:function(){return""},setSelectedTextAttr:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},setAttributeAtIndex:function(){},removeAttributeAtIndex:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},getMenuItemAttr:function(){return""},addClassAtIndex:function(){},removeClassAtIndex:function(){}}},enumerable:!0,configurable:!0}),t.prototype.getSelectedIndex=function(){return this.selectedIndex_},t.prototype.setSelectedIndex=function(e,t){if(void 0===t&&(t=!1),!(e>=this.adapter_.getMenuItemCount())){var i=this.selectedIndex_;this.selectedIndex_=e,this.selectedIndex_===A.UNSET_INDEX?this.adapter_.setSelectedText(""):this.adapter_.setSelectedText(this.adapter_.getMenuItemTextAtIndex(this.selectedIndex_).trim()),i!==A.UNSET_INDEX&&(this.adapter_.removeClassAtIndex(i,S.SELECTED_ITEM_CLASS),this.adapter_.removeAttributeAtIndex(i,C.ARIA_SELECTED_ATTR)),this.selectedIndex_!==A.UNSET_INDEX&&(this.adapter_.addClassAtIndex(this.selectedIndex_,S.SELECTED_ITEM_CLASS),this.adapter_.setAttributeAtIndex(this.selectedIndex_,C.ARIA_SELECTED_ATTR,"true")),this.layout(),t&&this.adapter_.closeMenu(),this.handleChange()}},t.prototype.setValue=function(e){var t=this.menuItemValues_.indexOf(e);this.setSelectedIndex(t),this.handleChange()},t.prototype.getValue=function(){var e=this.adapter_.getSelectedMenuItem();return e&&this.adapter_.getMenuItemAttr(e,C.VALUE_ATTR)||""},t.prototype.getDisabled=function(){return this.disabled_},t.prototype.setDisabled=function(e){this.disabled_=e,this.disabled_?(this.adapter_.addClass(S.DISABLED),this.adapter_.closeMenu()):this.adapter_.removeClass(S.DISABLED),this.leadingIcon_&&this.leadingIcon_.setDisabled(this.disabled_),this.adapter_.setSelectedTextAttr("tabindex",this.disabled_?"-1":"0"),this.adapter_.setSelectedTextAttr("aria-disabled",this.disabled_.toString())},t.prototype.setHelperTextContent=function(e){this.helperText_&&this.helperText_.setContent(e)},t.prototype.layout=function(){if(this.adapter_.hasLabel()){var e=this.getValue().length>0;this.notchOutline(e)}},t.prototype.handleMenuOpened=function(){if(0!==this.adapter_.getMenuItemValues().length){this.adapter_.addClass(S.ACTIVATED);var e=this.selectedIndex_>=0?this.selectedIndex_:0;this.adapter_.focusMenuItemAtIndex(e)}},t.prototype.handleMenuClosed=function(){this.adapter_.removeClass(S.ACTIVATED),this.isMenuOpen_=!1,this.adapter_.setSelectedTextAttr("aria-expanded","false"),this.adapter_.isSelectedTextFocused()||this.blur_()},t.prototype.handleChange=function(){this.updateLabel_(),this.adapter_.notifyChange(this.getValue()),this.adapter_.hasClass(S.REQUIRED)&&(this.setValid(this.isValid()),this.helperText_&&this.helperText_.setValidity(this.isValid()))},t.prototype.handleMenuItemAction=function(e){this.setSelectedIndex(e,!0)},t.prototype.handleFocus=function(){this.adapter_.addClass(S.FOCUSED),this.adapter_.hasLabel()&&(this.notchOutline(!0),this.adapter_.floatLabel(!0)),this.adapter_.activateBottomLine(),this.helperText_&&this.helperText_.showToScreenReader()},t.prototype.handleBlur=function(){this.isMenuOpen_||this.blur_()},t.prototype.handleClick=function(e){this.isMenuOpen_||(this.adapter_.setRippleCenter(e),this.adapter_.openMenu(),this.isMenuOpen_=!0,this.adapter_.setSelectedTextAttr("aria-expanded","true"))},t.prototype.handleKeydown=function(e){if(!this.isMenuOpen_){var t="Enter"===e.key||13===e.keyCode,i="Space"===e.key||32===e.keyCode,o="ArrowUp"===e.key||38===e.keyCode,l="ArrowDown"===e.key||40===e.keyCode;this.adapter_.hasClass(S.FOCUSED)&&(t||i||o||l)&&(this.adapter_.openMenu(),this.isMenuOpen_=!0,this.adapter_.setSelectedTextAttr("aria-expanded","true"),e.preventDefault())}},t.prototype.notchOutline=function(e){if(this.adapter_.hasOutline()){var t=this.adapter_.hasClass(S.FOCUSED);if(e){var i=A.LABEL_SCALE,o=this.adapter_.getLabelWidth()*i;this.adapter_.notchOutline(o)}else t||this.adapter_.closeOutline()}},t.prototype.setLeadingIconAriaLabel=function(e){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(e)},t.prototype.setLeadingIconContent=function(e){this.leadingIcon_&&this.leadingIcon_.setContent(e)},t.prototype.setValid=function(e){this.adapter_.setSelectedTextAttr("aria-invalid",(!e).toString()),e?this.adapter_.removeClass(S.INVALID):this.adapter_.addClass(S.INVALID)},t.prototype.isValid=function(){return!(this.adapter_.hasClass(S.REQUIRED)&&!this.adapter_.hasClass(S.DISABLED))||this.selectedIndex_!==A.UNSET_INDEX&&(0!==this.selectedIndex_||Boolean(this.getValue()))},t.prototype.setRequired=function(e){e?this.adapter_.addClass(S.REQUIRED):this.adapter_.removeClass(S.REQUIRED),this.adapter_.setSelectedTextAttr("aria-required",e.toString())},t.prototype.getRequired=function(){return"true"===this.adapter_.getSelectedTextAttr("aria-required")},t.prototype.init=function(){var e=this.adapter_.getAnchorElement();e&&(this.adapter_.setMenuAnchorElement(e),this.adapter_.setMenuAnchorCorner(R.BOTTOM_START)),this.adapter_.setMenuWrapFocus(!1);var t=this.getValue();t&&this.setValue(t),this.updateLabel_()},t.prototype.updateLabel_=function(){var e=this.getValue().length>0;this.adapter_.hasLabel()&&(this.notchOutline(e),this.adapter_.hasClass(S.FOCUSED)||this.adapter_.floatLabel(e))},t.prototype.blur_=function(){this.adapter_.removeClass(S.FOCUSED),this.updateLabel_(),this.adapter_.deactivateBottomLine(),this.adapter_.hasClass(S.REQUIRED)&&(this.setValid(this.isValid()),this.helperText_&&this.helperText_.setValidity(this.isValid()))},t}(u);const T=(e={})=>{const t={};for(const i in e)t[i]=e[i];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},t)};class $ extends w{constructor(){super(...arguments),this.mdcFoundationClass=D,this.disabled=!1,this.outlined=!1,this.label="",this.outlineOpen=!1,this.outlineWidth=0,this.value="",this.selectedText="",this.icon="",this.menuOpen=!1,this.helper="",this.helperPersistent=!1,this.validateOnInitialRender=!1,this.validationMessage="",this.required=!1,this.naturalWidth=!1,this.isUiValid=!0,this.listeners=[],this.onBodyClickBound=()=>{},this._outlineUpdateComplete=null,this._menuUpdateComplete=null,this.renderReady=!1,this.validityTransform=null,this._validity=T()}get items(){const e=this.menuElement;return e?e.items:[]}get selected(){const e=this.menuElement;return e?e.selected:null}get index(){const e=this.menuElement;return e?e.index:-1}get shouldRenderHelperText(){return!!this.helper||!!this.validationMessage}get validity(){return this._checkValidity(this.value),this._validity}render(){let e=s``;e=this.outlined?this.renderOutlined():this.renderUnderlined();const t={"mdc-select--disabled":this.disabled,"mdc-select--no-label":!this.label,"mdc-select--outlined":this.outlined,"mdc-select--with-leading-icon":!!this.icon,"mdc-select--required":this.required,"mdc-select--invalid":!this.isUiValid},i=this.shouldRenderHelperText?"helper-text":void 0;return s`
      <div class="mdc-select ${f(t)}">
        <input
            class="formElement"
            .value=${this.value}
            hidden
            ?required=${this.required}>
        ${this.icon?this.renderIcon(this.icon):""}
        <div class="mdc-select__anchor" @click=${this.onClick}>
          <i class="mdc-select__dropdown-icon">
            <svg
                width="10px"
                height="5px"
                viewBox="7 10 10 5"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
              <polygon
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
            </svg>
          </i>
          <!-- @ts-ignore -->
          <div
              class="mdc-select__selected-text"
              role="button"
              aria-invalid=${!this.isUiValid}
              aria-haspopup="listbox"
              aria-labelledby="label"
              aria-required=${this.required}
              aria-describedby=${v(i)}
              @focus=${this.onFocus}
              @blur=${this.onBlur}
              @keydown=${this.onKeydown}>
            ${this.selectedText}
          </div>
          ${e}
        </div>
        ${this.renderHelperText()}
        <mwc-menu
            innerRole="listbox"
            wrapFocus
            class="mdc-select__menu mdc-menu mdc-menu-surface"
            activatable
            .fullwidth=${!this.naturalWidth}
            .open=${this.menuOpen}
            .anchor=${this.anchorElement}
            @selected=${this.onSelected}
            @opened=${this.onOpened}
            @closed=${this.onClosed}>
            <slot></slot>
        </mwc-menu>
      </div>`}renderHelperText(){const e=this.validationMessage&&!this.isUiValid,t={"mdc-select-helper-text--persistent":this.helperPersistent||e,"mdc-select-helper-text--validation-msg":e,hidden:!this.shouldRenderHelperText};return s`
        <p class="mdc-select-helper-text ${f(t)}" id="helper-text">
          ${e?this.validationMessage:this.helper}
        </p>`}renderOutlined(){let e="";return this.label&&(e=this.renderLabel()),s`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${e}
      </mwc-notched-outline>`}renderUnderlined(){let e="";return this.label&&(e=this.renderLabel()),s`
      ${e}
      <div .lineRippleFoundation=${x()}></div>
    `}renderLabel(){return s`
      <label
          .floatingLabelFoundation=${k(this.label)}
          @labelchange=${this.onLabelChange}
          id="label">
        ${this.label}
      </label>
    `}renderIcon(e){return s`<mwc-icon class="mdc-select__icon"><div>${e}</div></mwc-icon>`}createAdapter(){return Object.assign(Object.assign({},_(this.mdcRoot)),{activateBottomLine:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateBottomLine:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},getSelectedMenuItem:()=>{const e=this.menuElement;return e?e.selected:null},hasLabel:()=>!!this.label,floatLabel:e=>{this.labelElement&&this.labelElement.floatingLabelFoundation.float(e)},getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,hasOutline:()=>this.outlined,notchOutline:e=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=e,this.outlineOpen=!0)},closeOutline:()=>{this.outlineElement&&(this.outlineOpen=!1)},setRippleCenter:e=>{if(this.lineRippleElement){this.lineRippleElement.lineRippleFoundation.setRippleCenter(e)}},notifyChange:async e=>{this.value=e,await this.updateComplete;const t=new Event("change",{bubbles:!0});this.dispatchEvent(t)},setSelectedText:e=>this.selectedText=e,isSelectedTextFocused:()=>{const e=this.selectedTextElement;return!!e&&e.getRootNode().activeElement===e},getSelectedTextAttr:e=>{const t=this.selectedTextElement;return t?t.getAttribute(e):null},setSelectedTextAttr:(e,t)=>{const i=this.selectedTextElement;if(i)return i.setAttribute(e,t)},openMenu:()=>{this.menuOpen=!0},closeMenu:()=>{this.menuOpen=!1},getAnchorElement:()=>this.anchorElement,setMenuAnchorElement:()=>{},setMenuAnchorCorner:()=>{const e=this.menuElement;e&&(e.corner="BOTTOM_START")},setMenuWrapFocus:e=>{const t=this.menuElement;t&&(t.wrapFocus=e)},setAttributeAtIndex:(e,t,i)=>{const o=this.menuElement;if(!o)return;const l=o.items[e];l&&l.setAttribute(t,i)},removeAttributeAtIndex:(e,t)=>{const i=this.menuElement;if(!i)return;const o=i.items[e];o&&o.removeAttribute(t)},focusMenuItemAtIndex:e=>{const t=this.menuElement;if(!t)return;const i=t.items[e];i&&i.focus()},getMenuItemCount:()=>{const e=this.menuElement;return e?e.items.length:0},getMenuItemValues:()=>{const e=this.menuElement;return e?e.items.map(e=>e.value):[]},getMenuItemTextAtIndex:e=>{const t=this.menuElement;if(!t)return"";const i=t.items[e];return i?i.text:""},getMenuItemAttr:e=>e.value,addClassAtIndex:(e,t)=>{const i=this.menuElement;if(!i)return;const o=i.items[e];o&&o.classList.add(t)},removeClassAtIndex:(e,t)=>{const i=this.menuElement;if(!i)return;const o=i.items[e];o&&o.classList.remove(t)}})}checkValidity(){const e=this._checkValidity(this.value);if(!e){const e=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(e)}return e}reportValidity(){const e=this.checkValidity();return this.isUiValid=e,e}_checkValidity(e){const t=this.formElement.validity;let i=T(t);if(this.validityTransform){const t=this.validityTransform(e,i);i=Object.assign(Object.assign({},i),t)}return this._validity=i,this._validity.valid}setCustomValidity(e){this.validationMessage=e,this.formElement.setCustomValidity(e)}async _getUpdateComplete(){await super._getUpdateComplete(),await Promise.all([this._outlineUpdateComplete,this._menuUpdateComplete])}async firstUpdated(){const e=this.menuElement,t=this.outlineElement;t&&(this._outlineUpdateComplete=t.updateComplete,await this._outlineUpdateComplete),e&&(this._menuUpdateComplete=e.updateComplete,await this._menuUpdateComplete),super.firstUpdated(),this.mdcFoundation.isValid=()=>!0,this.mdcFoundation.setValid=()=>{},this.mdcFoundation.setDisabled(this.disabled),this.validateOnInitialRender&&this.reportValidity(),this.renderReady=!0}select(e){const t=this.menuElement;t&&t.select(e)}disconnectedCallback(){super.disconnectedCallback();for(const e of this.listeners)e.target.removeEventListener(e.name,e.cb)}focus(){const e=new CustomEvent("focus"),t=this.selectedTextElement;t&&(t.dispatchEvent(e),t.focus())}blur(){const e=new CustomEvent("blur"),t=this.selectedTextElement;t&&(t.dispatchEvent(e),t.blur())}onFocus(){this.mdcFoundation&&this.mdcFoundation.handleFocus()}onBlur(){this.mdcFoundation&&this.mdcFoundation.handleBlur();const e=this.menuElement;e&&!e.open&&this.reportValidity()}onClick(e){if(this.mdcFoundation){this.focus();const t=e.target.getBoundingClientRect();let i=0;i="touches"in e?e.touches[0].clientX:e.clientX;const o=i-t.left;this.mdcFoundation.handleClick(o)}}onKeydown(e){this.mdcFoundation&&this.mdcFoundation.handleKeydown(e)}onSelected(e){this.mdcFoundation&&this.mdcFoundation.handleMenuItemAction(e.detail.index)}onOpened(){this.mdcFoundation&&(this.menuOpen=!0,this.mdcFoundation.handleMenuOpened())}onClosed(){this.mdcFoundation&&(this.menuOpen=!1,this.mdcFoundation.handleMenuClosed())}async onLabelChange(){this.label&&await this.layout(!1)}async layout(e=!0){this.mdcFoundation&&this.mdcFoundation.layout(),await this.updateComplete;const t=this.labelElement;if(t&&this.outlineElement&&this.outlineOpen){const e=t.floatingLabelFoundation.getWidth();this.outlineWidth=e}const i=this.menuElement;i&&i.layout(e)}}e([g(".mdc-select")],$.prototype,"mdcRoot",void 0),e([g(".formElement")],$.prototype,"formElement",void 0),e([g("slot")],$.prototype,"slotElement",void 0),e([g("select")],$.prototype,"nativeSelectElement",void 0),e([g("input")],$.prototype,"nativeInputElement",void 0),e([g(".mdc-line-ripple")],$.prototype,"lineRippleElement",void 0),e([g(".mdc-floating-label")],$.prototype,"labelElement",void 0),e([g("mwc-notched-outline")],$.prototype,"outlineElement",void 0),e([g(".mdc-menu")],$.prototype,"menuElement",void 0),e([g(".mdc-select__selected-text")],$.prototype,"selectedTextElement",void 0),e([g(".mdc-select__anchor")],$.prototype,"anchorElement",void 0),e([t({type:Boolean,attribute:"disabled",reflect:!0}),b((function(e){this.renderReady&&this.mdcFoundation.setDisabled(e)}))],$.prototype,"disabled",void 0),e([t({type:Boolean})],$.prototype,"outlined",void 0),e([t({type:String})],$.prototype,"label",void 0),e([t({type:Boolean})],$.prototype,"outlineOpen",void 0),e([t({type:Number})],$.prototype,"outlineWidth",void 0),e([t({type:String}),b((function(){this.mdcFoundation&&this.reportValidity()}))],$.prototype,"value",void 0),e([t({type:String})],$.prototype,"selectedText",void 0),e([t({type:String})],$.prototype,"icon",void 0),e([t({type:Boolean})],$.prototype,"menuOpen",void 0),e([t({type:String})],$.prototype,"helper",void 0),e([t({type:Boolean})],$.prototype,"helperPersistent",void 0),e([t({type:Boolean})],$.prototype,"validateOnInitialRender",void 0),e([t({type:String})],$.prototype,"validationMessage",void 0),e([t({type:Boolean})],$.prototype,"required",void 0),e([t({type:Boolean})],$.prototype,"naturalWidth",void 0),e([t({type:Boolean})],$.prototype,"isUiValid",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const z=n`@keyframes mdc-select-float-native-control{0%{transform:translateY(8px);opacity:0}100%{transform:translateY(0);opacity:1}}.mdc-line-ripple{position:absolute;bottom:0;left:0;width:100%;height:2px;transform:scaleX(0);opacity:0;z-index:2;transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating{opacity:0}.mdc-notched-outline{display:flex;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / .75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}.mdc-floating-label{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit;position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-select--with-leading-icon:not(.mdc-select--disabled) .mdc-select__icon{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;position:absolute;bottom:16px;box-sizing:border-box;width:24px;height:24px;border:none;background-color:transparent;fill:currentColor;opacity:.54;text-decoration:none;cursor:pointer;user-select:none}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-select-helper-text{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.0333333333em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;will-change:opacity}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-select{position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__anchor{background-color:#f5f5f5}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0,0,0,.87)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0,0,0,.6)}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{border-bottom-color:rgba(0,0,0,.42)}.mdc-select:not(.mdc-select--disabled) .mdc-select__anchor+.mdc-select-helper-text{color:rgba(0,0,0,.6)}.mdc-select .mdc-select__anchor{border-radius:4px 4px 0 0}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98,0,238,.87)}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text:hover{border-bottom-color:rgba(0,0,0,.87)}.mdc-select .mdc-floating-label{left:16px;right:initial;top:21px;pointer-events:none}[dir=rtl] .mdc-select .mdc-floating-label,.mdc-select .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select.mdc-select--outlined .mdc-floating-label{left:4px;right:initial;top:17px}[dir=rtl] .mdc-select.mdc-select--outlined .mdc-floating-label,.mdc-select.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{left:36px;right:initial}[dir=rtl] .mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{left:initial;right:36px}.mdc-select__dropdown-icon{background:url("data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.54%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E") no-repeat center;left:auto;right:8px;position:absolute;bottom:16px;width:24px;height:24px;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{left:8px;right:auto}.mdc-select--focused .mdc-select__dropdown-icon{background:url("data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%236200ee%22%20fill-rule%3D%22evenodd%22%20opacity%3D%221%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E") no-repeat center}.mdc-select--activated .mdc-select__dropdown-icon{transform:rotate(180deg) translateY(-5px);transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);display:inline-flex;position:relative;box-sizing:border-box;height:56px;overflow:hidden;will-change:opacity,transform,color}.mdc-select__anchor::before,.mdc-select__anchor::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-select__anchor.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor::before,.mdc-select__anchor::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor::before,.mdc-select__anchor::after{background-color:rgba(0,0,0,.87)}.mdc-select__anchor:hover::before{opacity:.04}.mdc-select__anchor.mdc-ripple-upgraded--background-focused::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-70%) scale(0.75)}.mdc-select__anchor.mdc-select--focused .mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select__anchor+.mdc-select-helper-text{margin-right:12px;margin-left:12px}.mdc-select--outlined .mdc-select__anchor+.mdc-select-helper-text{margin-right:16px;margin-left:16px}.mdc-select--focused .mdc-select__anchor+.mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){opacity:1}.mdc-select__selected-text{padding-left:16px;padding-right:52px;font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit;box-sizing:border-box;width:100%;min-width:200px;height:56px;padding-top:20px;padding-bottom:4px;border:none;border-bottom:1px solid;outline:none;background-color:transparent;color:inherit;white-space:nowrap;cursor:pointer;appearance:none}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{padding-left:52px;padding-right:16px}.mdc-select__selected-text::-ms-expand{display:none}.mdc-select__selected-text::-ms-value{background-color:transparent;color:inherit}@-moz-document url-prefix(""){.mdc-select__selected-text{text-indent:-2px}}.mdc-select--outlined{border:none}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:4px 0 0 4px}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-radius:0 4px 4px 0}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 4px 4px 0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-radius:4px 0 0 4px}.mdc-select--outlined .mdc-select__selected-text{border-radius:4px}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined .mdc-select__anchor{overflow:visible}.mdc-select--outlined .mdc-select__anchor::before,.mdc-select--outlined .mdc-select__anchor::after{content:none}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-144%) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__selected-text{padding-left:16px;padding-right:52px;display:flex;padding-top:14px;padding-bottom:12px;border:none;background-color:transparent;z-index:1}[dir=rtl] .mdc-select--outlined .mdc-select__selected-text,.mdc-select--outlined .mdc-select__selected-text[dir=rtl]{padding-left:52px;padding-right:16px}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;pointer-events:auto}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__selected-text{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple{background-color:#b00020;background-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid .mdc-select__anchor+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__selected-text:hover{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__selected-text:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid .mdc-select__dropdown-icon{background:url("data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23b00020%22%20fill-rule%3D%22evenodd%22%20opacity%3D%221%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E") no-repeat center}.mdc-select--invalid+.mdc-select-helper-text--validation-msg{opacity:1}.mdc-select--required .mdc-floating-label::after{content:"*"}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--disabled .mdc-floating-label{color:rgba(0,0,0,.38)}.mdc-select--disabled .mdc-select__dropdown-icon{background:url("data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.38%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E") no-repeat center}.mdc-select--disabled .mdc-line-ripple{display:none}.mdc-select--disabled .mdc-select__icon{color:rgba(0,0,0,.38)}.mdc-select--disabled .mdc-select__selected-text{color:rgba(0,0,0,.38);border-bottom-style:dotted;pointer-events:none}.mdc-select--disabled.mdc-select--outlined .mdc-select__anchor{background-color:transparent}.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__leading,.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__notch,.mdc-select--disabled.mdc-select--outlined .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.16)}.mdc-select--disabled.mdc-select--outlined .mdc-select__selected-text{border-bottom-style:none}.mdc-select--no-label:not(.mdc-select--outlined) .mdc-select__anchor .mdc-select__selected-text{padding-top:14px}.mdc-select--with-leading-icon .mdc-select__icon{left:16px;right:initial}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{left:initial;right:16px}.mdc-select--with-leading-icon .mdc-select__selected-text{padding-left:48px;padding-right:32px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__selected-text,.mdc-select--with-leading-icon .mdc-select__selected-text[dir=rtl]{padding-left:32px;padding-right:48px}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{transform:translateY(-144%) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-144%) translateX(32px) scale(1)}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-130%) translateX(32px) scale(0.75)}.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon 250ms 1}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--shake,.mdc-select--with-leading-icon.mdc-select--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-rtl 250ms 1}.mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text{padding-left:32px;padding-right:32px}[dir=rtl] .mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text,.mdc-select--with-leading-icon.mdc-select__menu .mdc-list-item__text[dir=rtl]{padding-left:32px;padding-right:32px}.mdc-select__menu .mdc-list .mdc-list-item--selected{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list .mdc-list-item--selected::before,.mdc-select__menu .mdc-list .mdc-list-item--selected::after{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list .mdc-list-item--selected:hover::before{opacity:.04}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded--background-focused::before,.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-130%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-130%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-130%) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-130%) scale(0.75)}}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-130%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-130%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-130%) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-130%) scale(0.75)}}:host{display:inline-block;vertical-align:top;outline:none}.hidden,[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc(48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px))}.mdc-select .mdc-select__anchor{display:flex;position:relative}.mdc-select .mdc-select__anchor .mdc-select__dropdown-icon{align-items:center;justify-content:center;background:none;color:rgba(0,0,0,.54)}.mdc-select .mdc-select__anchor .mdc-select__dropdown-icon svg{fill:currentColor}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38))}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--invalid) .mdc-select__selected-text{border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--invalid) .mdc-select__selected-text:hover{border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{color:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-menu{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{color:var(--mdc-select-dropdown-icon-color, #000);opacity:var(--mdc-select-dropdown-icon-opacity, 0.54)}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{color:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-select:not(.mdc-select--outlined) .mdc-select__anchor{background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.16))}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{opacity:var(--mdc-select-disabled-dropdown-opacity, 0.38)}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}.mdc-menu{width:100%}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let O=class extends ${};O.styles=z,O=e([i("mwc-select")],O);
/**
 @license
 Copyright (c) 2015-2018 Lablup Inc. All rights reserved.
 */
let q=class extends y{constructor(){super(),this.indicator=Object(),this.selectedIndex=0,this.boundControlsRenderer=this._controlsRenderer.bind(this),this._registryType=Array(),this.registryList=[]}static get styles(){return[o,l,a,n`
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
          --input-state-color-invalid: #b00020;
          margin-bottom: 20px;
        }

        wl-dialog {
          --dialog-min-width: 350px;
        }

        wl-textfield.helper-text {
          margin-bottom: 0px;
        }

        wl-textfield#add-project-name {
          --input-label-space: 20px;
        }

        wl-label.helper-text {
          --label-color: #b00020;
          --label-font-family: Roboto, Noto, sans-serif;
          --label-font-size: 11px;
        }

        mwc-select#select-registry-type {
          width: 167px;
          padding-right: 10px;
          --mdc-select-fill-color: transparent;
          --mdc-theme-primary: var(--paper-orange-400);
        }

        mwc-list-item {
          height: 30px;
          --mdc-list-item-graphic-margin: 0px;
        }
      `]}firstUpdated(){this.notification=window.lablupNotification,this.indicator=this.shadowRoot.querySelector("#indicator")}_parseRegistryList(e){return Object.keys(e).map(t=>{return"string"==typeof(i=e[t])||i instanceof String?{"":e[t],hostname:t}:Object.assign(Object.assign({},e[t]),{hostname:t});var i})}_refreshRegistryList(){window.backendaiclient.registry.list().then(({result:e})=>{this.registryList=this._parseRegistryList(e),console.log(this.registryList),this.requestUpdate()})}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._registryType=["docker","harbor"]},!0):(this._refreshRegistryList(),this._registryType=["docker","harbor"]))}_getHostname(e){const t=document.createElement("a");return t.href=e,t.hostname}_addRegistry(){const e=this.shadowRoot.querySelector("#add-registry-hostname").value,t=this.shadowRoot.querySelector("#add-registry-url").value,i=this.shadowRoot.querySelector("#add-registry-username").value,o=this.shadowRoot.querySelector("#add-registry-password").value,l=this.shadowRoot.querySelector("#select-registry-type").value,a=this.shadowRoot.querySelector("#add-project-name").value;if(!this.shadowRoot.querySelector("#add-registry-hostname").valid){let e=this.shadowRoot.querySelector("#registry-hostname-validation");return void(e&&(e.style.display="block"))}if(!this.shadowRoot.querySelector("#add-registry-url").valid){let e=this.shadowRoot.querySelector("#registry-url-validation");return void(e&&(e.style.display="block"))}let n={};if(n[""]=t,""!==i&&(n.username=i,""!==o&&(n.password=o)),n.type=l,"harbor"===l){if(!a||""===a)return;n.project=a}window.backendaiclient.registry.add(e,n).then(({result:e})=>{"ok"===e?(this.notification.text="Registry successfully added",this._refreshRegistryList()):this.notification.text="Error occurred",this._hideDialogById("#add-registry-dialog"),this.notification.show()})}_deleteRegistry(){const e=this.shadowRoot.querySelector("#delete-registry").value;this.registryList[this.selectedIndex].hostname===encodeURIComponent(e)?window.backendaiclient.registry.delete(e).then(({result:e})=>{"ok"===e?(this.notification.text="Registry successfully deleted",this._refreshRegistryList()):this.notification.text="Error Occurred",this._hideDialogById("#delete-registry-dialog"),this.notification.show()}):(this.notification.text="Hostname does not match!",this.notification.show())}_rescanImage(){this.indicator.start("indeterminate"),this.indicator.set(10,"Updating registry information..."),window.backendaiclient.maintenance.rescan_images(this.registryList[this.selectedIndex].hostname).then(({rescan_images:e})=>{e.ok?(this.indicator.set(100,"Registry update finished."),this.indicator.end(1e3)):(this.indicator.set(50,"Registry update failed."),this.indicator.end(1e3),this.notification.text=c.relieve(e.msg),this.notification.detail=e.msg,this.notification.show())}).catch(e=>{console.log(e),this.indicator.set(50,"Rescan failed."),this.indicator.end(1e3),e&&e.message&&(this.notification.text=c.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_launchDialogById(e){this.shadowRoot.querySelector(e).show()}_hideDialogById(e){this.shadowRoot.querySelector(e).hide()}_hideDialog(e){e.target.closest("wl-dialog").hide()}_toggleProjectNameInput(){let e=this.shadowRoot.querySelector("#select-registry-type"),t=this.shadowRoot.querySelector("#add-project-name");t.disabled=!(e.value&&"harbor"===e.value),this.shadowRoot.querySelector("#project-name-validation").style.display="block",t.disabled?this.shadowRoot.querySelector("#project-name-validation").textContent="*For harbor only!":this.shadowRoot.querySelector("#project-name-validation").textContent="project name is required."}_validateUrl(){let e=this.shadowRoot.querySelector("#add-registry-url").value,t=this.shadowRoot.querySelector("#registry-url-validation"),i=new RegExp("^(http|https|ftp)://[a-zA-Z0-9-.]+.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?/?([a-zA-Z0-9-._?,'/\\+&amp;%$#=~])*$");e&&e.match(i)?(this.shadowRoot.querySelector("#add-registry-url").invalid=!1,t.style.display="none"):(this.shadowRoot.querySelector("#add-registry-url").invalid=!0,t.style.display="block")}_validateHostname(){let e=this.shadowRoot.querySelector("#add-registry-hostname").value,t=this.shadowRoot.querySelector("#registry-hostname-validation");t.style.display=e&&""!==e?"none":"block"}_validateProjectName(){let e=this.shadowRoot.querySelector("#add-project-name").value,t=this.shadowRoot.querySelector("#project-name-validation");t.style.display=e&&""!==e?"none":"block"}_indexRenderer(e,t,i){let o=i.index+1;d(s`
        <div>${o}</div>
      `,e)}_hostRenderer(e,t,i){d(s`
        <div>
          ${decodeURIComponent(i.item.hostname)}
        </div>
      `,e)}_registryRenderer(e,t,i){d(s`
        <div>
          ${i.item[""]}
        </div>
      `,e)}_controlsRenderer(e,t,i){d(s`
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
      `,e)}render(){return s`
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
        <vaadin-grid-column flex-grow="1" header="Hostname" .renderer=${this._hostRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="2" auto-width header="Registry URL" resizable .renderer=${this._registryRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="0" auto-width resizable header="Type">
          <template>
            <div> [[item.type]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="0" auto-width resizable header="Harbor Project">
          <template>
            <div> [[item.project]] </div>
          </template>
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
                class="helper-text"
                type="text"
                label="Registry Hostname"
                required
                @click=${this._validateHostname}
                @change=${this._validateHostname}
              ></wl-textfield>
              <wl-label class="helper-text" id="registry-hostname-validation" style="display:none;">Hostname is empty</wl-label>
              <wl-textfield
                id="add-registry-url"
                class="helper-text"
                label="Registry URL"
                required
                pattern="^(http|https)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?/?([a-zA-Z0-9\-\._\?\,\'/\\\+&amp;%\$#\=~])*$"
                @click=${this._validateUrl}
                @change=${this._validateUrl}
              ></wl-textfield>
              <wl-label class="helper-text" id="registry-url-validation" style="display:none;">URL Starts with http:// or https://</wl-label>
             <div class="horizontal layout flex">
              <wl-textfield
                id="add-registry-username"
                type="text"
                label="Username (Optional)"
                style="padding-right:10px;"
              ></wl-textfield>
              <wl-textfield
                id="add-registry-password"
                type="password"
                label="Password (Optional)"
                style="padding-left:10px;"
              ></wl-textfield>
             </div>
             <div class="horizontal layout" style="padding-bottom:10px;">
              <mwc-select id="select-registry-type" label="Registry Type"
                          @change=${this._toggleProjectNameInput} required
                          validationMessage="Please select one option.">
                ${this._registryType.map(e=>s`
                  <mwc-list-item value="${e}" ?selected="${"docker"===e}">${e}</mwc-list-item>
                `)}
              </mwc-select>
               <div class="vertical layout" style="padding-left:10px;">
                  <wl-textfield
                  id="add-project-name"
                  class="helper-text"
                  type="text"
                  label="Project Name"
                  required
                  @change=${this._validateProjectName}
                  ></wl-textfield>
                  <wl-label class="helper-text" id="project-name-validation" style="display:block;">*For harbor only!</wl-label>
              </div>
             </div>
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
    `}};e([t({type:Object})],q.prototype,"indicator",void 0),e([t({type:Number})],q.prototype,"selectedIndex",void 0),e([t({type:String})],q.prototype,"boundControlsRenderer",void 0),e([t({type:Array})],q.prototype,"_registryType",void 0),q=e([i("backend-ai-registry-list")],q);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let L=class extends y{constructor(){super(),this.images=Object(),this.is_superadmin=!1,this._activeTab="image-lists"}static get styles(){return[o,l,a,n`
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

      `]}static get properties(){return{active:{type:Boolean},_activeTab:{type:Boolean}}}async _viewStateChanged(e){return await this.updateComplete,!1===e||(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.is_superadmin=window.backendaiclient.is_superadmin},!0):this.is_superadmin=window.backendaiclient.is_superadmin,!1)}_showTab(e){for(var t=this.shadowRoot.querySelectorAll(".tab-content"),i=0;i<t.length;i++)t[i].style.display="none";this._activeTab=e.value,this.shadowRoot.querySelector("#"+e.value).style.display="block"}_hideDialog(e){e.target.closest("wl-dialog").hide()}render(){return s`
      <lablup-loading-indicator id="loading-indicator"></lablup-loading-indicator>
      <wl-card class="item" elevation="1">
        <h3 class="tab horizontal center layout">
          <wl-tab-group>
            <wl-tab value="image-lists" checked @click="${e=>this._showTab(e.target)}">Images</wl-tab>
            <wl-tab value="resource-template-lists" @click="${e=>this._showTab(e.target)}">Resource Presets</wl-tab>
            ${this.is_superadmin?s`
              <wl-tab value="registry-lists" @click="${e=>this._showTab(e.target)}">Registries</wl-tab>`:s``}
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
    `}firstUpdated(){}disconnectedCallback(){super.disconnectedCallback()}};e([t({type:String})],L.prototype,"images",void 0),e([t({type:Boolean})],L.prototype,"is_superadmin",void 0),e([t({type:String})],L.prototype,"_activeTab",void 0),L=e([i("backend-ai-environment-view")],L);var U=L;export default U;
