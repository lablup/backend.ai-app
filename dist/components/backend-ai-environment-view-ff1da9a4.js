import{_ as e,e as t,n as i,B as a,b as o,I as s,a as r,x as l,c as n,r as d,g as c,d as u,t as h,z as m,$ as p}from"./backend-ai-webui-f62c286b.js";import"./tab-group-3fd78a79.js";import"./mwc-tab-bar-9cba643b.js";import"./lablup-activity-panel-a713c7c4.js";import"./vaadin-grid-a59882ab.js";import"./vaadin-grid-selection-column-8d76c0ed.js";import"./vaadin-grid-filter-column-c7f7791a.js";import"./vaadin-grid-sort-column-81a0de71.js";import"./select-084daf69.js";import"./textfield-ab581c8c.js";import"./label-09f649b2.js";import"./slider-a4773d85.js";import"./iconset-59d206d3.js";import"./vaadin-item-styles-6357402e.js";import"./vaadin-item-ac82b0fc.js";import"./mwc-switch-fd65c855.js";import"./radio-behavior-9b6d5282.js";import"./input-behavior-4aab158c.js";import"./dom-repeat-48a9cf9e.js";let g=class extends a{constructor(){super(),this.selectedIndex=0,this.selectedImages=[],this._cuda_gpu_disabled=!1,this._cuda_fgpu_disabled=!1,this._rocm_gpu_disabled=!1,this._tpu_disabled=!1,this.alias=Object(),this.spinner=Object(),this.indicator=Object(),this.installImageDialog=Object(),this.deleteImageDialog=Object(),this.deleteAppInfo=Object(),this.deleteAppRow=Object(),this.installImageResource=Object(),this.selectedCheckbox=Object(),this._grid=Object(),this.servicePortsMsg="",this._range={cpu:["1","2","3","4","5","6","7","8"],mem:["64MB","128MB","256MB","512MB","1GB","2GB","4GB","8GB","16GB","32GB","256GB","512GB"],"cuda-gpu":["0","1","2","3","4","5","6","7"],"cuda-fgpu":["0","0.1","0.2","0.5","1.0","2.0"],"rocm-gpu":["0","1","2","3","4","5","6","7"],tpu:["0","1","2"]},this.cpuValue=0,this._boundRequirementsRenderer=this.requirementsRenderer.bind(this),this._boundControlsRenderer=this.controlsRenderer.bind(this),this._boundInstallRenderer=this.installRenderer.bind(this),this._boundBaseImageRenderer=this.baseImageRenderer.bind(this),this._boundConstraintRenderer=this.constraintRenderer.bind(this),this._boundDigestRenderer=this.digestRenderer.bind(this),this.installImageNameList=[],this.deleteImageNameList=[],this.images=[],this.allowed_registries=[],this.servicePorts=[]}static get styles(){return[o,s,r,l,n,d`
        vaadin-grid {
          font-size: 14px;
          height: calc(100vh - 235px);
        }

        wl-button > wl-icon {
          --icon-size: 24px;
          padding: 0;
        }

        wl-icon {
          --icon-size: 16px;
          padding: 0;
        }

        wl-label {
          --label-font-size: 13px;
          --label-font-family: 'Ubuntu', Roboto;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          border-radius: 3px;
          -moz-background-clip: padding;
          -webkit-background-clip: padding-box;
          background-clip: padding-box;
          border: 1px solid #ccc;
          background-color: #f9f9f9;
          padding: 0 3px;
          display: inline-block;
          margin: 0;
        }

        wl-label.installed {
          --label-color: #52595d;
        }

        wl-label.installing {
          --label-color: var(--paper-orange-700);
        }

        img.indicator-icon {
          width: 16px;
          height: 16px;
        }

        div.indicator,
        span.indicator {
          font-size: 9px;
          margin-right: 5px;
        }

        span.resource-limit-title {
          font-size: 14px;
          font-family: var(--general-font-family);
          text-align: left;
          width: 70px;
        }

        wl-button {
          --button-bg: var(--paper-orange-50);
          --button-bg-hover: var(--paper-orange-100);
          --button-bg-active: var(--paper-orange-600);
          --button-color: #242424;
          color: var(--paper-orange-900);
        }

        wl-button.operation {
          margin: auto 10px;
          padding: auto 10px;
        }

        backend-ai-dialog {
          --component-min-width: 350px;
        }

        backend-ai-dialog#modify-image-dialog wl-select,
        backend-ai-dialog#modify-image-dialog wl-textfield {
          margin-bottom: 20px;
        }

        wl-select, wl-textfield {
          --input-font-family: var(--general-font-family);
        }

        backend-ai-dialog wl-textfield {
          --input-font-size: 14px;
        }

        #modify-app-dialog {
          --component-max-height: 550px;
        }

        backend-ai-dialog vaadin-grid {
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

        mwc-button.operation {
          margin: auto 10px;
          padding: auto 10px;
        }

        mwc-button[outlined] {
          width: 100%;
          margin: 10px auto;
          background-image: none;
          --mdc-button-outline-width: 2px;
          --mdc-button-disabled-outline-color: var(--general-sidebar-color);
          --mdc-button-disabled-ink-color: var(--general-sidebar-color);
          --mdc-theme-primary: #38bd73;
          --mdc-theme-on-primary: #38bd73;
        }

        mwc-button, mwc-button[unelevated] {
          background-image: none;
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-theme-on-primary: var(--general-button-color);
        }

        mwc-button[disabled] {
          background-image: var(--general-sidebar-color);
        }

        mwc-button[disabled].range-value {
          --mdc-button-disabled-ink-color: var(--general-sidebar-color);
        }

        mwc-select {
          --mdc-theme-primary: var(--general-sidebar-color);
          --mdc-menu-item-height: auto;
        }

        mwc-textfield {
          width: 100%;
          --mdc-text-field-fill-color: transparent;
          --mdc-theme-primary: var(--general-textfield-selected-color);
          --mdc-typography-font-family: var(--general-font-family);
        }

        mwc-slider {
          width: 100%;
          margin: auto 10px;
          --mdc-theme-secondary: var(--general-slider-color);
          --mdc-theme-text-primary-on-dark: #ffffff;
        }

      `]}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":e}_hideDialogById(e){return this.shadowRoot.querySelector(e).hide()}_launchDialogById(e){return this.shadowRoot.querySelector(e).show()}modifyImage(){const e=this.shadowRoot.querySelector("#modify-image-cpu").label,t=this.shadowRoot.querySelector("#modify-image-mem").label,i=this.shadowRoot.querySelector("#modify-image-cuda-gpu").label,a=this.shadowRoot.querySelector("#modify-image-cuda-fgpu").label,o=this.shadowRoot.querySelector("#modify-image-rocm-gpu").label,s=this.shadowRoot.querySelector("#modify-image-tpu").value,{resource_limits:r}=this.images[this.selectedIndex],l={},n=this._cuda_gpu_disabled?this._cuda_fgpu_disabled?1:2:this._cuda_fgpu_disabled?2:3;e!==r[0].min&&(l.cpu={min:e});const d=this._symbolicUnit(t);d!==r[n].min&&(l.mem={min:d}),this._cuda_gpu_disabled||i===r[1].min||(l["cuda.device"]={min:i}),this._cuda_fgpu_disabled||a===r[2].min||(l["cuda.shares"]={min:a}),this._rocm_gpu_disabled||o===r[3].min||(l["rocm.device"]={min:o}),this._tpu_disabled||s===r[4].min||(l["tpu.device"]={min:s});const u=this.images[this.selectedIndex];if(0===Object.keys(l).length)return this.notification.text=c("environment.NoChangeMade"),this.notification.show(),void this._hideDialogById("#modify-image-dialog");globalThis.backendaiclient.image.modifyResource(u.registry,u.name,u.tag,l).then((e=>{e.reduce(((e,t)=>e&&"ok"===t.result),!0)?(this._getImages(),this.requestUpdate(),this.notification.text=c("environment.SuccessfullyModified")):this.notification.text=c("environment.ProblemOccurred"),this.notification.show(),this._hideDialogById("#modify-image-dialog")}))}openInstallImageDialog(){this.selectedImages=this._grid.selectedItems.filter((e=>!e.installed)),this.installImageNameList=this.selectedImages.map((e=>(Object.keys(e).map((t=>{["registry","name","tag"].includes(t)&&t in e&&(e[t]=e[t].replace(/\s/g,""))})),e.registry+"/"+e.name+":"+e.tag))),this.selectedImages.length>0?this.installImageDialog.show():(this.notification.text=c("environment.SelectedImagesAlreadyInstalled"),this.notification.show())}_installImage(){this.installImageDialog.hide(),this.selectedImages.forEach((async e=>{const t='[id="'+e.registry.replace(/\./gi,"-")+"-"+e.name.replace("/","-")+"-"+e.tag.replace(/\./gi,"-")+'"]';this._grid.querySelector(t).setAttribute("style","display:block;");const i=e.registry+"/"+e.name+":"+e.tag;let a=!1;const o=Object();"resource_limits"in e&&e.resource_limits.forEach((e=>{o[e.key.replace("_",".")]=e.min})),"cuda.device"in o&&"cuda.shares"in o?(a=!0,o.gpu=0,o.fgpu=o["cuda.shares"]):"cuda.device"in o?(o.gpu=o["cuda.device"],a=!0):a=!1,o.mem.endsWith("g")?o.mem=o.mem.replace("g",".5g"):o.mem.endsWith("m")&&(o.mem=Number(o.mem.slice(0,-1))+256+"m"),o.domain=globalThis.backendaiclient._config.domainName,o.group_name=globalThis.backendaiclient.current_group;const s=await globalThis.backendaiclient.get_resource_slots();if(a&&!("cuda.device"in s)&&!("cuda.shares"in s))return this.notification.text=c("environment.NoResourcesForImage")+i,this.notification.show(),void this._grid.querySelector(t).setAttribute("style","display:none;");"cuda.device"in s&&"cuda.shares"in s?"fgpu"in o&&"gpu"in o&&(delete o.gpu,delete o["cuda.device"]):"cuda.device"in s?(delete o.fgpu,delete o["cuda.shares"]):"cuda.shares"in s&&(delete o.gpu,delete o["cuda.device"]),this.notification.text=c("environment.InstallingImage")+i+c("environment.TakesTime"),this.notification.show();const r=await this.indicator.start("indeterminate");r.set(10,c("import.Downloading")),globalThis.backendaiclient.image.install(i,e.architecture,o).then((e=>{r.set(100,c("import.Installed")),r.end(1e3),this._grid.querySelector(t).className="installed",this._grid.querySelector(t).innerHTML=c("environment.Installed")})).catch((e=>{this._grid.querySelector(t).className=c("environment.Installing"),this._grid.querySelector(t).setAttribute("style","display:none;"),this._uncheckSelectedRow(),this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e),r.set(100,h("environment.DescProblemOccurred")),r.end(1e3)}))}))}openDeleteImageDialog(){this.selectedImages=this._grid.selectedItems.filter((e=>e.installed)),this.deleteImageNameList=this.selectedImages.map((e=>e.registry+"/"+e.name+":"+e.tag)),this.selectedImages.length>0?this.deleteImageDialog.show():(this.notification.text=c("environment.SelectedImagesNotInstalled"),this.notification.show())}_deleteImage(){}requirementsRenderer(e,t,i){m(p`
          <div class="layout horizontal center flex">
            <div class="layout horizontal configuration">
              <wl-icon class="fg green">developer_board</wl-icon>
              <span>${i.item.cpu_limit_min}</span> ~
              <span>${this._markIfUnlimited(i.item.cpu_limit_max)}</span>
              <span class="indicator">${h("general.cores")}</span>
            </div>
          </div>
          <div class="layout horizontal center flex">
            <div class="layout horizontal configuration">
              <wl-icon class="fg green">memory</wl-icon>
              <span>${i.item.mem_limit_min}</span> ~
              <span>${this._markIfUnlimited(i.item.mem_limit_max)}</span>
            </div>
          </div>
        ${i.item.cuda_device_limit_min?p`
           <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <img class="indicator-icon fg green" src="/resources/icons/file_type_cuda.svg" />
                <span>${i.item.cuda_device_limit_min}</span> ~
                <span>${this._markIfUnlimited(i.item.cuda_device_limit_max)}</span>
                <span class="indicator">CUDA GPU</span>
              </div>
            </div>
            `:p``}
        ${i.item.cuda_shares_limit_min?p`
            <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <wl-icon class="fg green">apps</wl-icon>
                <span>${i.item.cuda_shares_limit_min}</span> ~
                <span>${this._markIfUnlimited(i.item.cuda_shares_limit_max)}</span>
                <span class="indicator">CUDA fGPU</span>
              </div>
            </div>
            `:p``}
        ${i.item.rocm_device_limit_min?p`
           <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <img class="indicator-icon fg green" src="/resources/icons/ROCm.png" />
                <span>${i.item.rocm_device_limit_min}</span> ~
                <span>${this._markIfUnlimited(i.item.rocm_device_limit_max)}</span>
                <span class="indicator">ROCm GPU</span>
              </div>
            </div>
            `:p``}
        ${i.item.tpu_device_limit_min?p`
           <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <img class="indicator-icon fg green" src="/resources/icons/tpu.svg" />
                <span>${i.item.tpu_device_limit_min}</span> ~
                <span>${this._markIfUnlimited(i.item.tpu_device_limit_max)}</span>
                <span class="indicator">TPU</span>
              </div>
            </div>
            `:p``}

      `,e)}_setPulldownDefaults(e){this._cuda_gpu_disabled=0===e.filter((e=>"cuda_device"===e.key)).length,this._cuda_fgpu_disabled=0===e.filter((e=>"cuda_shares"===e.key)).length,this._rocm_gpu_disabled=0===e.filter((e=>"rocm_device"===e.key)).length,this._tpu_disabled=0===e.filter((e=>"tpu_device"===e.key)).length,this.shadowRoot.querySelector("#modify-image-cpu").label=e[0].min,this._cuda_gpu_disabled?(this.shadowRoot.querySelector("#modify-image-cuda-gpu").label=h("environment.Disabled"),this.shadowRoot.querySelector("mwc-slider#cuda-gpu").value=0):(this.shadowRoot.querySelector("#modify-image-cuda-gpu").label=e[1].min,this.shadowRoot.querySelector("mwc-slider#cuda-gpu").value=this._range["cuda-gpu"].indexOf(this._range.cpu.filter((t=>t===e[0].min))[0])),this._cuda_fgpu_disabled?(this.shadowRoot.querySelector("#modify-image-cuda-fgpu").label=h("environment.Disabled"),this.shadowRoot.querySelector("mwc-slider#cuda-gpu").value=0):(this.shadowRoot.querySelector("#modify-image-cuda-fgpu").label=e[2].min,this.shadowRoot.querySelector("mwc-slider#cuda-fgpu").value=this._range["cuda-fgpu"].indexOf(this._range.cpu.filter((t=>t===e[0].min))[0])),this._rocm_gpu_disabled?(this.shadowRoot.querySelector("#modify-image-rocm-gpu").label=h("environment.Disabled"),this.shadowRoot.querySelector("mwc-slider#rocm-gpu").value=0):(this.shadowRoot.querySelector("#modify-image-rocm-gpu").label=e[3].min,this.shadowRoot.querySelector("mwc-slider#rocm-gpu").value=this._range["rocm-gpu"].indexOf(this._range.cpu.filter((t=>t===e[0].min))[0])),this._tpu_disabled?(this.shadowRoot.querySelector("#modify-image-tpu").label=h("environment.Disabled"),this.shadowRoot.querySelector("mwc-slider#tpu").value=0):(this.shadowRoot.querySelector("#modify-image-tpu").label=e[4].min,this.shadowRoot.querySelector("mwc-slider#tpu").value=this._range.tpu.indexOf(this._range.cpu.filter((t=>t===e[0].min))[0]));const t=this._cuda_gpu_disabled?this._cuda_fgpu_disabled?1:2:this._cuda_fgpu_disabled?2:3;this.shadowRoot.querySelector("#modify-image-mem").label=this._addUnit(e[t].min),this.shadowRoot.querySelector("mwc-slider#cpu").value=this._range.cpu.indexOf(this._range.cpu.filter((t=>t===e[0].min))[0]),this.shadowRoot.querySelector("mwc-slider#mem").value=this._range.mem.indexOf(this._range.mem.filter((i=>i===this._addUnit(e[t].min)))[0]),this._updateSliderLayout()}_updateSliderLayout(){this.shadowRoot.querySelectorAll("mwc-slider").forEach((e=>{e.layout()}))}_decodeServicePort(){""===this.images[this.selectedIndex].labels["ai.backend.service-ports"]?this.servicePorts=[]:this.servicePorts=this.images[this.selectedIndex].labels["ai.backend.service-ports"].split(",").map((e=>{const t=e.split(":");return{app:t[0],protocol:t[1],port:t[2]}}))}_isServicePortValid(){const e=this.shadowRoot.querySelector("#modify-app-container").querySelectorAll(".row:not(.header)"),t=new Set;for(const i of e){const e=i.querySelectorAll("wl-textfield");if(Array.prototype.every.call(e,(e=>""===e.value)))continue;const a=e[0].value,o=e[1].value,s=parseInt(e[2].value);if(""===a)return this.servicePortsMsg=c("environment.AppNameMustNotBeEmpty"),!1;if(!["http","tcp","pty","preopen"].includes(o))return this.servicePortsMsg=c("environment.ProtocolMustBeOneOfSupported"),!1;if(t.has(s))return this.servicePortsMsg=c("environment.PortMustBeUnique"),!1;if(s>=66535||s<0)return this.servicePortsMsg=c("environment.PortMustBeInRange"),!1;if([2e3,2001,2002,2003,2200,7681].includes(s))return this.servicePortsMsg=c("environment.PortReservedForInternalUse"),!1;t.add(s)}return!0}_parseServicePort(){const e=this.shadowRoot.querySelector("#modify-app-container").querySelectorAll(".row:not(.header)");return Array.prototype.filter.call(e,(e=>(e=>0===Array.prototype.filter.call(e.querySelectorAll("wl-textfield"),((e,t)=>""===e.value)).length)(e))).map((e=>(e=>Array.prototype.map.call(e.querySelectorAll("wl-textfield"),(e=>e.value)).join(":"))(e))).join(",")}modifyServicePort(){if(this._isServicePortValid()){const e=this._parseServicePort(),t=this.images[this.selectedIndex];this.servicePortsMsg="",globalThis.backendaiclient.image.modifyLabel(t.registry,t.name,t.tag,"ai.backend.service-ports",e).then((({result:e})=>{this.notification.text=c("ok"===e?"environment.DescServicePortModified":"dialog.ErrorOccurred"),this._getImages(),this.requestUpdate(),this._clearRows(),this.notification.show(),this._hideDialogById("#modify-app-dialog")}))}}controlsRenderer(e,t,i){m(p`
        <div id="controls" class="layout horizontal flex center">
          <wl-button fab flat inverted
            class="fg blue controls-running"
            @click=${()=>{this.selectedIndex=i.index,this._setPulldownDefaults(this.images[this.selectedIndex].resource_limits),this._launchDialogById("#modify-image-dialog"),this.requestUpdate()}}>
            <wl-icon>settings</wl-icon>
          </wl-button>
          <wl-button fab flat inverted
            class="fg pink controls-running"
            @click=${()=>{this.selectedIndex!==i.index&&this._clearRows(),this.selectedIndex=i.index,this._decodeServicePort(),this._launchDialogById("#modify-app-dialog"),this.requestUpdate()}}>
            <wl-icon>apps</wl-icon>
          </wl-button>
        </div>
      `,e)}installRenderer(e,t,i){m(p`
        <div class="layout horizontal center center-justified">
          ${i.item.installed?p`
          <wl-label class="installed"
              id="${i.item.registry.replace(/\./gi,"-")+"-"+i.item.name.replace("/","-")+"-"+i.item.tag.replace(/\./gi,"-")}">
            ${h("environment.Installed")}
          </wl-label>
          `:p`
          <wl-label class="installing"
            id="${i.item.registry.replace(/\./gi,"-")+"-"+i.item.name.replace("/","-")+"-"+i.item.tag.replace(/\./gi,"-")}"
            style="display:none">
            ${h("environment.Installing")}
            </wl-label>
          `}
        </div>
      `,e)}baseImageRenderer(e,t,i){m(p`
        ${i.item.baseimage.map((e=>p`
            <lablup-shields app="" color="blue" ui="round" description="${e}"></lablup-shields>
        `))}
        `,e)}constraintRenderer(e,t,i){m(p`
        ${i.item.additional_req?p`
          <lablup-shields app="" color="green" ui="round" description="${i.item.additional_req}"></lablup-shields>
        `:p``}
      `,e)}digestRenderer(e,t,i){m(p`
      <div class="layout vertical">
        <span class="indicator monospace">${i.item.digest}</span>
      </div>
      `,e)}render(){return p`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <div class="horizontal layout flex end-justified" style="margin:10px;">
        <mwc-button raised label="${h("environment.Install")}" class="operation" id="install-image" icon="get_app" @click="${this.openInstallImageDialog}"></mwc-button>
        <mwc-button disabled label="${h("environment.Delete")}" class="operation temporarily-hide" id="delete-image" icon="delete" @click="${this.openDeleteImageDialog}"></mwc-button>
      </div>
      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Environments" id="testgrid" .items="${this.images}">
        <vaadin-grid-selection-column flex-grow="0" text-align="center" auto-select>
        </vaadin-grid-selection-column>
        <vaadin-grid-sort-column path="installed" flex-grow="0" header="${h("environment.Status")}" .renderer="${this._boundInstallRenderer}">
        </vaadin-grid-sort-column>
        <vaadin-grid-filter-column path="registry" width="80px" resizable
            header="${h("environment.Registry")}"></vaadin-grid-filter-column>
        <vaadin-grid-filter-column path="architecture" width="80px" resizable
            header="${h("environment.Architecture")}"></vaadin-grid-filter-column>
        <vaadin-grid-filter-column path="namespace" width="60px" resizable
            header="${h("environment.Namespace")}"></vaadin-grid-filter-column>
        <vaadin-grid-filter-column path="lang" resizable
            header="${h("environment.Language")}"></vaadin-grid-filter-column>
        <vaadin-grid-filter-column path="baseversion" resizable
            header="${h("environment.Version")}"></vaadin-grid-filter-column>
        <vaadin-grid-column resizable width="110px" header="${h("environment.Base")}" .renderer="${this._boundBaseImageRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column width="50px" resizable header="${h("environment.Constraint")}" .renderer="${this._boundConstraintRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-filter-column path="digest" resizable header="${h("environment.Digest")}" .renderer="${this._boundDigestRenderer}">
        </vaadin-grid-filter-column>
        <vaadin-grid-column width="150px" flex-grow="0" resizable header="${h("environment.ResourceLimit")}" .renderer="${this._boundRequirementsRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable header="${h("general.Control")}" .renderer=${this._boundControlsRenderer}>
        </vaadin-grid-column>
      </vaadin-grid>
      <backend-ai-dialog id="modify-image-dialog" fixed backdrop blockscrolling>
        <span slot="title">${h("environment.ModifyImageResourceLimit")}</span>
        <div slot="content">
          <div class="vertical layout flex">
            <div class="horizontal layout flex center">
              <span class="resource-limit-title">CPU</span>
              <mwc-slider
                  id="cpu"
                  step="1"
                  markers
                  max="7"
                  @change="${e=>this._changeSliderValue(e.target)}"></mwc-slider>
              <mwc-button class="range-value" id="modify-image-cpu" disabled></mwc-button>
            </div>
            <div class="horizontal layout flex center">
              <span class="resource-limit-title">MEM</span>
              <mwc-slider
                  id="mem"
                  markers
                  step="1"
                  max="11"
                  @change="${e=>this._changeSliderValue(e.target)}"></mwc-slider>
              <mwc-button class="range-value" id="modify-image-mem" disabled></mwc-button>
            </div>
            <div class="horizontal layout flex center">
              <span class="resource-limit-title">cuda GPU</span>
              <mwc-slider
                  ?disabled="${this._cuda_gpu_disabled}"
                  id="cuda-gpu"
                  markers
                  step="1"
                  max="7"
                  @change="${e=>this._changeSliderValue(e.target)}"></mwc-slider>
              <mwc-button class="range-value" id="modify-image-cuda-gpu" disabled></mwc-button>
            </div>
            <div class="horizontal layout flex center">
              <span class="resource-limit-title">cuda FGPU</span>
              <mwc-slider
                  ?disabled="${this._cuda_fgpu_disabled}"
                  id="cuda-fgpu"
                  markers
                  step="1"
                  max="5"
                  @change="${e=>this._changeSliderValue(e.target)}"></mwc-slider>
              <mwc-button class="range-value" id="modify-image-cuda-fgpu" disabled></mwc-button>
            </div>
            <div class="horizontal layout flex center">
              <span class="resource-limit-title">rocm GPU</span>
              <mwc-slider
                  ?disabled="${this._rocm_gpu_disabled}"
                  id="rocm-gpu"
                  markers
                  step="1"
                  max="2"
                  @change="${e=>this._changeSliderValue(e.target)}"></mwc-slider>
              <mwc-button class="range-value" id="modify-image-rocm-gpu" disabled></mwc-button>
            </div>
            <div class="horizontal layout flex center">
              <span class="resource-limit-title">TPU</span>
              <mwc-slider
                  ?disabled="${this._tpu_disabled}"
                  id="tpu"
                  markers
                  step="1"
                  max="11"
                  @change="${e=>this._changeSliderValue(e.target)}"></mwc-slider>
              <mwc-button class="range-value" id="modify-image-tpu" disabled></mwc-button>
            </div>
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
              unelevated
              fullwidth
              icon="check"
              label="${h("button.SaveChanges")}"
              @click="${()=>this.modifyImage()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="modify-app-dialog" fixed backdrop>
        <span slot="title">${h("environment.ManageApps")}</span>
        <div slot="content" id="modify-app-container">
          <div class="row header">
            <div> ${h("environment.AppName")} </div>
            <div> ${h("environment.Protocol")} </div>
            <div> ${h("environment.Port")} </div>
            <div> ${h("environment.Action")} </div>
          </div>
          ${this.servicePorts.map(((e,t)=>p`
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
              @click=${e=>this._checkDeleteAppInfo(e)}
            >
              <wl-icon>remove</wl-icon>
            </wl-button>
          </div>
          `))}
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
          <span style="color:red;">${this.servicePortsMsg}</span>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              unelevated
              slot="footer"
              icon="check"
              label="${h("button.Finish")}"
              @click="${this.modifyServicePort}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="install-image-dialog" fixed backdrop persistent>
        <span slot="title">${h("dialog.title.LetsDouble-Check")}</span>
        <div slot="content">
          <p>${h("environment.DescDownloadImage")}</p>
          <p style="margin:auto; "><span style="color:blue;">
          ${this.installImageNameList.map((e=>p`${e}<br />`))}
          </span></p>
          <p>${h("environment.DescSignificantDownloadTime")} ${h("dialog.ask.DoYouWantToProceed")}</p>
        </div>
        <div slot="footer" class="horizontal flex layout">
          <div class="flex"></div>
          <mwc-button
              class="operation"
              label="${h("button.Cancel")}"
              @click="${e=>{this._hideDialog(e),this._uncheckSelectedRow()}}"></mwc-button>
          <mwc-button
              unelevated
              class="operation"
              label="${h("button.Okay")}"
              @click="${()=>this._installImage()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="delete-image-dialog" fixed backdrop persistent>
        <span slot="title">${h("dialog.title.LetsDouble-Check")}</span>
        <div slot="content">
          <p>${h("environment.DescDeleteImage")}</p>
          <p style="margin:auto; "><span style="color:blue;">
          ${this.deleteImageNameList.map((e=>p`${e}<br />`))}
          </span></p>
          <p>${h("dialog.ask.DoYouWantToProceed")}</p>
        </div>
        <div slot="footer" class="horizontal flex layout">
          <div class="flex"></div>
          <mwc-button
              class="operation"
              label="${h("button.Cancel")}"
              @click="${e=>{this._hideDialog(e),this._uncheckSelectedRow()}}"></mwc-button>
          <mwc-button
              unelevated
              class="operation"
              label="${h("button.Okay")}"
              @click="${()=>this._deleteImage()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="delete-app-info-dialog" fixed backdrop persistent>
        <span slot="title">${h("dialog.title.LetsDouble-Check")}</span>
        <div slot="content">
          <p>${h("environment.DescDeleteAppInfo")}</p>
          <div class="horizontal layout">
              <p>${h("environment.AppName")}</p>
              <p style="color:blue;">: ${this.deleteAppInfo[0]}</p>
            </div>
            <div class="horizontal layout">
              <p>${h("environment.Protocol")}</p>
              <p style="color:blue;">: ${this.deleteAppInfo[1]}</p>
            </div>
            <div class="horizontal layout">
              <p>${h("environment.Port")}</p>
              <p style="color:blue;">: ${this.deleteAppInfo[2]}</p>
            </div>
          <p>${h("dialog.ask.DoYouWantToProceed")}</p>
        </div>
        <div slot="footer" class="horizontal flex layout">
          <div class="flex"></div>
          <mwc-button
              class="operation"
              label="${h("button.Cancel")}"
              @click="${e=>{this._hideDialog(e)}}"></mwc-button>
          <mwc-button
              unelevated
              class="operation"
              label="${h("button.Okay")}"
              @click="${()=>this._removeRow()}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}_removeRow(){this.deleteAppRow.remove(),this.shadowRoot.querySelector("#delete-app-info-dialog").hide(),this.notification.text=c("environment.AppInfoDeleted"),this.notification.show()}_addRow(){const e=this.shadowRoot.querySelector("#modify-app-container"),t=e.children[e.children.length-1],i=this._createRow();e.insertBefore(i,t)}_createRow(){const e=document.createElement("div");e.setAttribute("class","row extra");const t=document.createElement("wl-textfield");t.setAttribute("type","text");const i=document.createElement("wl-textfield");t.setAttribute("type","text");const a=document.createElement("wl-textfield");t.setAttribute("type","number");const o=document.createElement("wl-button");o.setAttribute("class","fg pink"),o.setAttribute("fab",""),o.setAttribute("flat",""),o.addEventListener("click",(e=>this._checkDeleteAppInfo(e)));const s=document.createElement("wl-icon");return s.innerHTML="remove",o.appendChild(s),e.appendChild(a),e.appendChild(i),e.appendChild(t),e.appendChild(o),e}_checkDeleteAppInfo(e){var t;this.deleteAppRow=e.target.parentNode;const i=[...this.deleteAppRow.children].filter((e=>"WL-TEXTFIELD"===e.tagName)).map((e=>e.value));(null===(t=i.filter((e=>""===e)))||void 0===t?void 0:t.length)===i.length?this._removeRow():(this.deleteAppInfo=i,this.shadowRoot.querySelector("#delete-app-info-dialog").show())}_clearRows(){const e=this.shadowRoot.querySelector("#modify-app-container"),t=e.querySelectorAll(".row");t[t.length-1].querySelectorAll("wl-textfield").forEach((e=>{e.value=""})),e.querySelectorAll(".row.extra").forEach((e=>{e.remove()}))}_uncheckSelectedRow(){this._grid.selectedItems=[]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.indicator=globalThis.lablupIndicator,this.notification=globalThis.lablupNotification,this.installImageDialog=this.shadowRoot.querySelector("#install-image-dialog"),this.deleteImageDialog=this.shadowRoot.querySelector("#delete-image-dialog"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._getImages()}),!0):this._getImages(),this._grid=this.shadowRoot.querySelector("#testgrid"),this._grid.addEventListener("sorter-changed",(e=>{this._refreshSorter(e)})),this.shadowRoot.querySelector("#install-image-dialog").addEventListener("didHide",(()=>{this._uncheckSelectedRow()})),this.shadowRoot.querySelector("#delete-image-dialog").addEventListener("didHide",(()=>{this._uncheckSelectedRow()}))}_refreshSorter(e){const t=e.target,i=t.path.toString();t.direction&&("asc"===t.direction?this._grid.items.sort(((e,t)=>e[i]<t[i]?-1:e[i]>t[i]?1:0)):this._grid.items.sort(((e,t)=>e[i]>t[i]?-1:e[i]<t[i]?1:0)))}async _viewStateChanged(e){await this.updateComplete}_getImages(){this.spinner.show(),globalThis.backendaiclient.domain.get(globalThis.backendaiclient._config.domainName,["allowed_docker_registries"]).then((e=>(this.allowed_registries=e.domain.allowed_docker_registries,globalThis.backendaiclient.image.list(["name","tag","registry","architecture","digest","installed","labels { key value }","resource_limits { key min max }"],!1,!0)))).then((e=>{const t=e.images,i=[];t.forEach((e=>{if("registry"in e&&this.allowed_registries.includes(e.registry)){const t=e.tag.split("-");void 0!==t[1]?(e.baseversion=t[0],e.baseimage=t[1],void 0!==t[2]&&(e.additional_req=this._humanizeName(t[2]))):void 0!==e.tag?e.baseversion=e.tag:e.baseversion="";const a=e.name.split("/");void 0!==a[1]?(e.namespace=a[0],e.lang=a.slice(1).join("")):(e.namespace="",e.lang=a[0]);const o=e.lang.split("-");let s;s=void 0!==e.baseimage?[this._humanizeName(e.baseimage)]:[],void 0!==o[1]&&("r"===o[0]?(e.lang=o[0],s.push(this._humanizeName(o[0]))):(e.lang=o[1],s.push(this._humanizeName(o[0])))),e.baseimage=s,e.lang=this._humanizeName(e.lang);e.resource_limits.forEach((t=>{0==t.max&&(t.max="∞"),"cuda.device"==t.key&&(t.key="cuda_device"),"cuda.shares"==t.key&&(t.key="cuda_shares"),"rocm.device"==t.key&&(t.key="rocm_device"),"tpu.device"==t.key&&(t.key="tpu_device"),null!==t.min&&void 0!==t.min&&(e[t.key+"_limit_min"]=this._addUnit(t.min)),null!==t.max&&void 0!==t.max&&(e[t.key+"_limit_max"]=this._addUnit(t.max))})),e.labels=e.labels.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),i.push(e)}})),this.images=i,this.spinner.hide()})).catch((e=>{console.log(e),void 0!==e.message?(this.notification.text=u.relieve(e.title),this.notification.detail=e.message):this.notification.text=u.relieve("Problem occurred during image metadata loading."),this.notification.show(!0,e),this.spinner.hide()}))}_addUnit(e){const t=e.substr(-1);return"m"==t?e.slice(0,-1)+"MB":"g"==t?e.slice(0,-1)+"GB":"t"==t?e.slice(0,-1)+"TB":e}_symbolicUnit(e){const t=e.substr(-2);return"MB"==t?e.slice(0,-2)+"m":"GB"==t?e.slice(0,-2)+"g":"TB"==t?e.slice(0,-2)+"t":e}_humanizeName(e){return this.alias={python:"Python",tensorflow:"TensorFlow",pytorch:"PyTorch",lua:"Lua",r:"R","r-base":"R",julia:"Julia",rust:"Rust",cpp:"C++",gcc:"GCC",go:"Go",tester:"Tester",haskell:"Haskell",matlab:"MATLAB",sagemath:"Sage",texlive:"TeXLive",java:"Java",php:"PHP",octave:"Octave",nodejs:"Node",caffe:"Caffe",scheme:"Scheme",scala:"Scala",base:"Base",cntk:"CNTK",h2o:"H2O.AI","triton-server":"Triton Server",digits:"DIGITS","ubuntu-linux":"Ubuntu Linux",tf1:"TensorFlow 1",tf2:"TensorFlow 2",py3:"Python 3",py2:"Python 2",py27:"Python 2.7",py35:"Python 3.5",py36:"Python 3.6",py37:"Python 3.7",py38:"Python 3.8",py39:"Python 3.9",py310:"Python 3.10",ji15:"Julia 1.5",ji16:"Julia 1.6",ji17:"Julia 1.7",lxde:"LXDE",lxqt:"LXQt",xfce:"XFCE",xrdp:"XRDP",gnome:"GNOME",kde:"KDE","ubuntu16.04":"Ubuntu 16.04","ubuntu18.04":"Ubuntu 18.04","ubuntu20.04":"Ubuntu 20.04",intel:"Intel MKL",2018:"2018",2019:"2019",2020:"2020",2021:"2021",2022:"2022",rocm:"GPU:ROCm",cuda9:"GPU:CUDA9",cuda10:"GPU:CUDA10","cuda10.0":"GPU:CUDA10","cuda10.1":"GPU:CUDA10.1","cuda10.2":"GPU:CUDA10.2","cuda10.3":"GPU:CUDA10.3",cuda11:"GPU:CUDA11","cuda11.0":"GPU:CUDA11","cuda11.1":"GPU:CUDA11.1","cuda11.2":"GPU:CUDA11.2","cuda11.3":"GPU:CUDA11.3",cuda12:"GPU:CUDA12","cuda12.0":"GPU:CUDA12.0",miniconda:"Miniconda","anaconda2018.12":"Anaconda 2018.12","anaconda2019.12":"Anaconda 2019.12","alpine3.8":"Alpine Linux 3.8","alpine3.12":"Alpine Linux 3.12",ngc:"NVidia GPU Cloud",ff:"Research Env."},e in this.alias?this.alias[e]:e}_changeSliderValue(e){const t=this._range[e.id].filter(((t,i)=>i===e._value));this.shadowRoot.querySelector("#modify-image-"+e.id).label=t[0],this.shadowRoot.querySelector("#modify-image-"+e.id).value=t[0]}};e([t({type:Array})],g.prototype,"images",void 0),e([t({type:Array})],g.prototype,"allowed_registries",void 0),e([t({type:Array})],g.prototype,"servicePorts",void 0),e([t({type:Number})],g.prototype,"selectedIndex",void 0),e([t({type:Array})],g.prototype,"selectedImages",void 0),e([t({type:Boolean})],g.prototype,"_cuda_gpu_disabled",void 0),e([t({type:Boolean})],g.prototype,"_cuda_fgpu_disabled",void 0),e([t({type:Boolean})],g.prototype,"_rocm_gpu_disabled",void 0),e([t({type:Boolean})],g.prototype,"_tpu_disabled",void 0),e([t({type:Object})],g.prototype,"alias",void 0),e([t({type:Object})],g.prototype,"spinner",void 0),e([t({type:Object})],g.prototype,"indicator",void 0),e([t({type:Object})],g.prototype,"installImageDialog",void 0),e([t({type:Object})],g.prototype,"deleteImageDialog",void 0),e([t({type:Array})],g.prototype,"installImageNameList",void 0),e([t({type:Array})],g.prototype,"deleteImageNameList",void 0),e([t({type:Object})],g.prototype,"deleteAppInfo",void 0),e([t({type:Object})],g.prototype,"deleteAppRow",void 0),e([t({type:Object})],g.prototype,"installImageResource",void 0),e([t({type:Object})],g.prototype,"selectedCheckbox",void 0),e([t({type:Object})],g.prototype,"_grid",void 0),e([t({type:String})],g.prototype,"servicePortsMsg",void 0),e([t({type:Object})],g.prototype,"_range",void 0),e([t({type:Number})],g.prototype,"cpuValue",void 0),e([t({type:Object})],g.prototype,"_boundRequirementsRenderer",void 0),e([t({type:Object})],g.prototype,"_boundControlsRenderer",void 0),e([t({type:Object})],g.prototype,"_boundInstallRenderer",void 0),e([t({type:Object})],g.prototype,"_boundBaseImageRenderer",void 0),e([t({type:Object})],g.prototype,"_boundConstraintRenderer",void 0),e([t({type:Object})],g.prototype,"_boundDigestRenderer",void 0),g=e([i("backend-ai-environment-list")],g);
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */
let y=class extends a{constructor(){super(),this.resourcePolicy={},this.is_admin=!1,this.active=!1,this.gpu_allocatable=!1,this.gpuAllocationMode="device",this.condition="",this.presetName="",this._boundResourceRenderer=this.resourceRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this)}static get styles(){return[o,s,r,d`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 225px);
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

        mwc-textfield {
          width: 100%;
          --mdc-theme-primary: #242424;
          --mdc-text-field-fill-color: transparent;
        }

        mwc-textfield.yellow {
          --mdc-theme-primary: var(--paper-yellow-600) !important;
        }

        mwc-button, mwc-button[unelevated] {
          background-image: none;
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-theme-on-primary: var(--general-button-color);
          --mdc-typography-font-family: var(--general-font-family);
        }

        h4 {
          font-weight: 200;
          font-size: 14px;
          margin: 0px;
          padding: 5px 15px 5px 20px;
        }

        backend-ai-dialog h4 {
          font-size: 14px;
          padding: 5px 15px 5px 12px;
          margin: 0 0 10px 0;
          display: block;
          height: 20px;
          border-bottom: 1px solid #DDD;
        }

      `]}resourceRenderer(e,t,i){m(p`
        <div class="layout horizontal wrap center">
          <div class="layout horizontal configuration">
            <wl-icon class="fg green">developer_board</wl-icon>
            <span>${this._markIfUnlimited(i.item.resource_slots.cpu)}</span>
            <span class="indicator">${h("general.cores")}</span>
          </div>
          <div class="layout horizontal configuration">
            <wl-icon class="fg green">memory</wl-icon>
            <span>${this._markIfUnlimited(i.item.resource_slots.mem_gb)}</span>
            <span class="indicator">GB</span>
          </div>
        </div>
        <div class="layout horizontal wrap center">
        ${i.item.resource_slots["cuda.device"]?p`
          <div class="layout horizontal configuration">
            <wl-icon class="fg green">view_module</wl-icon>
            <span>${this._markIfUnlimited(i.item.resource_slots["cuda.device"])}</span>
            <span class="indicator">GPU</span>
          </div>
        `:p``}
        ${i.item.resource_slots["cuda.shares"]?p`
          <div class="layout horizontal configuration">
            <wl-icon class="fg green">view_module</wl-icon>
            <span>${this._markIfUnlimited(i.item.resource_slots["cuda.shares"])}</span>
            <span class="indicator">GPU</span>
          </div>
        `:p``}
        ${i.item.shared_memory?p`
          <div class="layout horizontal configuration">
            <wl-icon class="fg blue">memory</wl-icon>
            <span>${i.item.shared_memory_gb}</span>
            <span class="indicator">GB</span>
          </div>
        `:p``}
        </div>
      `,e)}controlRenderer(e,t,i){m(p`
        <div id="controls" class="layout horizontal flex center"
            .preset-name="${i.item.name}">
          ${this.is_admin?p`
            <wl-button class="fg blue controls-running" fab flat inverted
              @click="${e=>this._launchResourcePresetDialog(e)}">
                <wl-icon>settings</wl-icon>
            </wl-button>
            <wl-button class="fg red controls-running" fab flat inverted
              @click="${e=>this._launchDeleteResourcePresetDialog(e)}">
                <wl-icon>delete</wl-icon>
            </wl-button>
          `:p``}
        </div>
      `,e)}_indexRenderer(e,t,i){const a=i.index+1;m(p`
        <div>${a}</div>
      `,e)}_launchPresetAddDialog(e){this.shadowRoot.querySelector("#create-preset-dialog").show()}render(){return p`
      <div style="margin:0px;">
        <h4 class="horizontal flex center center-justified layout">
          <span>${h("resourcePreset.ResourcePresets")}</span>
          <span class="flex"></span>
          <mwc-button raised id="add-resource-preset" icon="add" label="${h("resourcePreset.CreatePreset")}" @click="${e=>this._launchPresetAddDialog(e)}"></mwc-button>
        </h4>
        <div>
          <vaadin-grid theme="row-stripes column-borders compact" aria-label="Resource Policy list"
                      .items="${this.resourcePresets}">
            <vaadin-grid-column width="40px" flex-grow="0" header="#" text-align="center" .renderer="${this._indexRenderer}"></vaadin-grid-column>
            <vaadin-grid-sort-column resizable path="name" header="${h("resourcePreset.Name")}">
            </vaadin-grid-sort-column>
            <vaadin-grid-column width="150px" resizable header="${h("resourcePreset.Resources")}" .renderer="${this._boundResourceRenderer}">
            </vaadin-grid-column>
            <vaadin-grid-column resizable header="${h("general.Control")}" .renderer="${this._boundControlRenderer}">
            </vaadin-grid-column>
          </vaadin-grid>
        </div>
      </div>
      <backend-ai-dialog id="modify-template-dialog" fixed backdrop blockscrolling narrowLayout>
        <span slot="title">${h("resourcePreset.ModifyResourcePreset")}</span>
        <div slot="content">
          <form id="login-form">
            <fieldset>
              <mwc-textfield type="text" name="preset_name" class="modify" id="id-preset-name"
                          label="${h("resourcePreset.PresetName")}"
                          auto-validate required
                          disabled
                          error-message="${h("data.Allowslettersnumbersand-_dot")}"></mwc-textfield>
              <h4>${h("resourcePreset.ResourcePreset")}</h4>
              <div class="horizontal center layout">
                <mwc-textfield id="cpu-resource" class="modify" type="number" label="CPU"
                    min="1" value="1" required validationMessage="${h("resourcePreset.MinimumCPUUnit")}"></mwc-textfield>
                <mwc-textfield id="ram-resource" class="modify" type="number" label="${h("resourcePreset.RAM")}"
                    min="1" value="1" required validationMessage="${h("resourcePreset.MinimumMemUnit")}"></mwc-textfield>
              </div>
              <div class="horizontal center layout">
                <mwc-textfield id="gpu-resource" class="modify" type="number" label="GPU"
                    min="0" value="0" ?disabled=${"fractional"===this.gpuAllocationMode}></mwc-textfield>
                <mwc-textfield id="fgpu-resource" class="modify" type="number" label="fGPU"
                    min="0" value="0" step="0.01" ?disabled=${"fractional"!==this.gpuAllocationMode}></mwc-textfield>
              </div>
              <div class="horizontal center layout">
                <mwc-textfield id="shmem-resource" class="modify" type="number"
                    label="${h("resourcePreset.SharedMemory")}" min="0" step="0.01"
                    validationMessage="${h("resourcePreset.MinimumShmemUnit")}"></mwc-textfield>
              </div>
            </fieldset>
          </form>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout distancing">
          <mwc-button
              unelevated
              fullwidth
              icon="check"
              label="${h("button.SaveChanges")}"
              @click="${()=>this._modifyResourceTemplate()}">
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="create-preset-dialog" fixed backdrop blockscrolling narrowLayout>
        <span slot="title">${h("resourcePreset.CreateResourcePreset")}</span>
        <div slot="content">
          <mwc-textfield
            type="text"
            name="preset_name"
            id="create-preset-name"
            class="create"
            label="Preset Name"
            auto-validate
            required
            maxLength="255"
            placeholder="${h("maxLength.255chars")}"
            error-message="${h("data.Allowslettersnumbersand-_")}"
          ></mwc-textfield>
          <h4>${h("resourcePreset.ResourcePreset")}</h4>
          <div class="horizontal center layout">
            <mwc-textfield id="create-cpu-resource" class="create" type="number" label="CPU"
                min="1" value="1" required validationMessage="${h("resourcePreset.MinimumCPUUnit")}"></mwc-textfield>
            <mwc-textfield id="create-ram-resource" class="create" type="number" label="${h("resourcePreset.RAM")}"
                min="1" value="1" required validationMessage="${h("resourcePreset.MinimumMemUnit")}"></mwc-textfield>
          </div>
          <div class="horizontal center layout">
            <mwc-textfield id="create-gpu-resource" class="create" type="number" label="GPU"
                min="0" value="0" ?disabled=${"fractional"===this.gpuAllocationMode}></mwc-textfield>
            <mwc-textfield id="create-fgpu-resource" class="create" type="number" label="fGPU"
                min="0" value="0" step="0.01" ?disabled=${"fractional"!==this.gpuAllocationMode}></mwc-textfield>
          </div>
          <div class="horizontal center layout">
            <mwc-textfield id="create-shmem-resource" class="create" type="number"
                label="${h("resourcePreset.SharedMemory")}" min="0" step="0.01"
                validationMessage="${h("resourcePreset.MinimumShmemUnit")}"></mwc-textfield>
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout distancing">
          <mwc-button
              unelevated
              fullwidth
              id="create-policy-button"
              icon="add"
              label="${h("button.Add")}"
              @click="${this._createPreset}">
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="delete-resource-preset-dialog" fixed backdrop blockscrolling>
         <span slot="title">${h("dialog.title.LetsDouble-Check")}</span>
         <div slot="content">
            <p>${h("resourcePreset.AboutToDeletePreset")}</p>
            <p style="text-align:center;">${this.presetName}</p>
            <p>${h("dialog.warning.CannotBeUndone")} ${h("dialog.ask.DoYouWantToProceed")}</p>
         </div>
         <div slot="footer" class="horizontal end-justified flex layout">
         <mwc-button
              class="operation"
              label="${h("button.Cancel")}"
              @click="${e=>this._hideDialog(e)}"></mwc-button>
          <mwc-button
              unelevated
              class="operation"
              label="${h("button.Okay")}"
              @click="${e=>this._deleteResourcePresetWithCheck(e)}"></mwc-button>
         </div>
      </backend-ai-dialog>
    `}firstUpdated(){this.notification=globalThis.lablupNotification;const e=this.shadowRoot.querySelectorAll("mwc-textfield");for(const t of e)this._addInputValidator(t)}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._refreshTemplateData(),this.is_admin=globalThis.backendaiclient.is_admin}),!0):(this._refreshTemplateData(),this.is_admin=globalThis.backendaiclient.is_admin,globalThis.backendaiclient.get_resource_slots().then((e=>{this.gpu_allocatable=2!==Object.keys(e).length,Object.keys(e).includes("cuda.shares")?this.gpuAllocationMode="fractional":this.gpuAllocationMode="device"}))))}_launchResourcePresetDialog(e){this.updateCurrentPresetToDialog(e),this.shadowRoot.querySelector("#modify-template-dialog").show()}_launchDeleteResourcePresetDialog(e){const t=e.target.closest("#controls")["preset-name"];this.presetName=t,this.shadowRoot.querySelector("#delete-resource-preset-dialog").show()}_deleteResourcePresetWithCheck(e){globalThis.backendaiclient.resourcePreset.delete(this.presetName).then((e=>{this.shadowRoot.querySelector("#delete-resource-preset-dialog").hide(),this.notification.text=c("resourcePreset.Deleted"),this.notification.show(),this._refreshTemplateData()})).catch((e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#delete-resource-preset-dialog").hide(),this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}updateCurrentPresetToDialog(e){const t=e.target.closest("#controls")["preset-name"],i=globalThis.backendaiclient.utils.gqlToObject(this.resourcePresets,"name")[t];this.shadowRoot.querySelector("#id-preset-name").value=t,this.shadowRoot.querySelector("#cpu-resource").value=i.resource_slots.cpu,this.shadowRoot.querySelector("#gpu-resource").value="cuda.device"in i.resource_slots?i.resource_slots["cuda.device"]:"",this.shadowRoot.querySelector("#fgpu-resource").value="cuda.shares"in i.resource_slots?i.resource_slots["cuda.shares"]:"",this.shadowRoot.querySelector("#ram-resource").value=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(i.resource_slots.mem,"g")),this.shadowRoot.querySelector("#shmem-resource").value=i.shared_memory?parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(i.shared_memory,"g")).toFixed(2):""}_refreshTemplateData(){const e={group:globalThis.backendaiclient.current_group};return globalThis.backendaiclient.resourcePreset.check(e).then((e=>{const t=e.presets;Object.keys(t).map(((e,i)=>{const a=t[e];a.resource_slots.mem_gb=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(a.resource_slots.mem,"g")),a.shared_memory?a.shared_memory_gb=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(a.shared_memory,"g")).toFixed(2):a.shared_memory_gb=null})),this.resourcePresets=t})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}refresh(){this._refreshTemplateData()}_isActive(){return"active"===this.condition}_readResourcePresetInput(){const e=e=>void 0!==e&&e.includes("Unlimited")?"Infinity":e,t=e(this.shadowRoot.querySelector("#cpu-resource").value),i=e(this.shadowRoot.querySelector("#ram-resource").value+"g"),a=e(this.shadowRoot.querySelector("#gpu-resource").value),o=e(this.shadowRoot.querySelector("#fgpu-resource").value);let s=this.shadowRoot.querySelector("#shmem-resource").value;s&&(s+="g");const r={cpu:t,mem:i};null!=a&&""!==a&&"0"!==a&&(r["cuda.device"]=parseInt(a)),null!=o&&""!==o&&"0"!==o&&(r["cuda.shares"]=parseFloat(o));return{resource_slots:JSON.stringify(r),shared_memory:s}}_modifyResourceTemplate(){if(!this._checkFieldValidity("modify"))return;const e=this.shadowRoot.querySelector("#id-preset-name").value,t=void 0!==(i=this.shadowRoot.querySelector("#ram-resource").value+"g")&&i.includes("Unlimited")?"Infinity":i;var i;if(!e)return this.notification.text=c("resourcePreset.NoPresetName"),void this.notification.show();const a=this._readResourcePresetInput();if(parseInt(a.shared_memory)>=parseInt(t))return this.notification.text=c("resourcePreset.MemoryShouldBeLargerThanSHMEM"),void this.notification.show();globalThis.backendaiclient.resourcePreset.mutate(e,a).then((e=>{this.shadowRoot.querySelector("#modify-template-dialog").hide(),this.notification.text=c("resourcePreset.Updated"),this.notification.show(),this._refreshTemplateData()})).catch((e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#modify-template-dialog").hide(),this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_deleteKey(e){const t=e.target.closest("#controls").accessKey;globalThis.backendaiclient.keypair.delete(t).then((e=>{this.refresh()})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_findKeyItem(e){return e.access_key=this}_elapsed(e,t){const i=new Date(e);let a;a=(this.condition,new Date);const o=Math.floor((a.getTime()-i.getTime())/1e3);return Math.floor(o/86400)}_humanReadableTime(e){return(e=new Date(e)).toUTCString()}_indexFrom1(e){return e+1}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":e}_checkFieldValidity(e=""){const t='mwc-textfield[class^="'.concat(e).concat('"]'),i=this.shadowRoot.querySelectorAll(t);let a=!0;for(const e of i)if(a=e.checkValidity(),!a)return e.checkValidity();return a}_createPreset(){if(!this._checkFieldValidity("create"))return;const e=e=>void 0!==(e=e.toString())&&e.includes("Unlimited")?"Infinity":e,t=e(this.shadowRoot.querySelector("#create-preset-name").value),i=e(this.shadowRoot.querySelector("#create-cpu-resource").value),a=e(this.shadowRoot.querySelector("#create-ram-resource").value+"g"),o=e(this.shadowRoot.querySelector("#create-gpu-resource").value),s=e(this.shadowRoot.querySelector("#create-fgpu-resource").value);let r=this.shadowRoot.querySelector("#create-shmem-resource").value;if(r&&(r+="g"),!t)return this.notification.text=c("resourcePreset.NoPresetName"),void this.notification.show();if(parseInt(r)>=parseInt(a))return this.notification.text=c("resourcePreset.MemoryShouldBeLargerThanSHMEM"),void this.notification.show();const l={cpu:i,mem:a};null!=o&&""!==o&&"0"!==o&&(l["cuda.device"]=parseInt(o)),null!=s&&""!==s&&"0"!==s&&(l["cuda.shares"]=parseFloat(s));const n={resource_slots:JSON.stringify(l),shared_memory:r};globalThis.backendaiclient.resourcePreset.add(t,n).then((e=>{this.shadowRoot.querySelector("#create-preset-dialog").hide(),e.create_resource_preset.ok?(this.notification.text=c("resourcePreset.Created"),this.refresh(),this.shadowRoot.querySelector("#create-preset-name").value="",this.shadowRoot.querySelector("#create-cpu-resource").value=1,this.shadowRoot.querySelector("#create-ram-resource").value=1,this.shadowRoot.querySelector("#create-gpu-resource").value=0,this.shadowRoot.querySelector("#create-fgpu-resource").value=0,this.shadowRoot.querySelector("#create-shmem-resource").value=""):this.notification.text=u.relieve(e.create_resource_preset.msg),this.notification.show()}))}};e([t({type:Array})],y.prototype,"resourcePolicy",void 0),e([t({type:Boolean})],y.prototype,"is_admin",void 0),e([t({type:Boolean})],y.prototype,"active",void 0),e([t({type:Boolean})],y.prototype,"gpu_allocatable",void 0),e([t({type:String})],y.prototype,"gpuAllocationMode",void 0),e([t({type:String})],y.prototype,"condition",void 0),e([t({type:String})],y.prototype,"presetName",void 0),e([t({type:Object})],y.prototype,"resourcePresets",void 0),e([t({type:Array})],y.prototype,"_boundResourceRenderer",void 0),e([t({type:Array})],y.prototype,"_boundControlRenderer",void 0),y=e([i("backend-ai-resource-preset-list")],y);let b=class extends a{constructor(){super(),this.indicator=Object(),this.selectedIndex=-1,this._boundIsEnabledRenderer=this._isEnabledRenderer.bind(this),this._boundControlsRenderer=this._controlsRenderer.bind(this),this._boundPasswordRenderer=this._passwordRenderer.bind(this),this.registryType="docker",this.registryList=[],this._registryTypes=[],this.allowed_registries=[],this.hostnames=[],this.editMode=!1}static get styles(){return[o,s,r,d`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 225px);
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

        backend-ai-dialog wl-textfield {
          --input-font-family: var(--general-font-family);
          --input-state-color-invalid: #b00020;
          margin-bottom: 20px;
        }

        backend-ai-dialog {
          --component-min-width: 350px;
        }

        wl-textfield.helper-text {
          margin-bottom: 0px;
        }

        wl-textfield#add-project-name {
          --input-label-space: 20px;
        }

        wl-label.helper-text {
          --label-color: #b00020;
          --label-font-family: 'Ubuntu', Roboto;
          --label-font-size: 11px;
        }

        mwc-select.full-width {
          width: 100%;
        }

        mwc-select.full-width.fixed-position > mwc-list-item {
          width: 330px; // default width
        }

        mwc-select#select-registry-type {
          padding-right: 10px;
          --mdc-select-fill-color: transparent;
          --mdc-theme-primary: var(--general-textfield-selected-color);
        }

        mwc-list-item {
          height: 30px;
          --mdc-list-item-graphic-margin: 0px;
        }

        input#registry-password {
          border: none;
          background: none;
          pointer-events: none;
        }

        mwc-button, mwc-button[unelevated] {
          background-image: none;
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-theme-on-primary: var(--general-button-color);
          --mdc-typography-font-family: var(--general-font-family);
        }
      `]}firstUpdated(){this.notification=globalThis.lablupNotification,this.indicator=globalThis.lablupIndicator}_parseRegistryList(e){return Object.keys(e).map((t=>{return"string"==typeof(i=e[t])||i instanceof String?{"":e[t],hostname:t}:{...e[t],hostname:t};var i}))}_refreshRegistryList(){globalThis.backendaiclient.domain.get(globalThis.backendaiclient._config.domainName,["allowed_docker_registries"]).then((e=>(this.allowed_registries=e.domain.allowed_docker_registries,globalThis.backendaiclient.registry.list()))).then((({result:e})=>{this.registryList=this._parseRegistryList(e),this.hostnames=this.registryList.map((e=>e.hostname)),this.requestUpdate()}))}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._registryTypes=["docker","harbor","harbor2"]}),!0):(this._refreshRegistryList(),this._registryTypes=["docker","harbor","harbor2"]))}_getHostname(e){const t=document.createElement("a");return t.href=e,t.hostname}_addRegistry(){const e=this.shadowRoot.querySelector("#add-registry-hostname").value,t=this.shadowRoot.querySelector("#add-registry-url").value,i=this.shadowRoot.querySelector("#add-registry-username").value,a=this.shadowRoot.querySelector("#add-registry-password").value,o=this.shadowRoot.querySelector("#select-registry-type").value,s=this.shadowRoot.querySelector("#add-project-name").value.replace(/\s/g,"");if(!this.shadowRoot.querySelector("#add-registry-hostname").valid){const e=this.shadowRoot.querySelector("#registry-hostname-validation");return void(e&&(e.style.display="block"))}if(!this.shadowRoot.querySelector("#add-registry-url").valid){const e=this.shadowRoot.querySelector("#registry-url-validation");return void(e&&(e.style.display="block"))}const r={};if(r[""]=t,r.username=i,r.password=a,r.type=o,["harbor","harbor2"].includes(o)){if(!s||""===s)return;r.project=s}else r.project="";if(!this.editMode&&this.hostnames.includes(e))return this.notification.text=c("registry.RegistryHostnameAlreadyExists"),void this.notification.show();globalThis.backendaiclient.registry.set(e,r).then((({result:t})=>{"ok"===t?(this.editMode?this.notification.text=c("registry.RegistrySuccessfullyModified"):(this.notification.text=c("registry.RegistrySuccessfullyAdded"),this.hostnames.push(e)),this._refreshRegistryList()):this.notification.text=c("dialog.ErrorOccurred"),this._hideDialogById("#add-registry-dialog"),this._resetRegistryField(),this.notification.show()}))}_deleteRegistry(){const e=this.shadowRoot.querySelector("#delete-registry").value;this.registryList[this.selectedIndex].hostname===e?globalThis.backendaiclient.registry.delete(e).then((({result:t})=>{"ok"===t?(this.notification.text=c("registry.RegistrySuccessfullyDeleted"),this.hostnames.includes(e)&&this.hostnames.splice(this.hostnames.indexOf(e)),this._refreshRegistryList()):this.notification.text=c("dialog.ErrorOccurred"),this._hideDialogById("#delete-registry-dialog"),this.notification.show()})):(this.notification.text=c("registry.HostnameDoesNotMatch"),this.notification.show()),this.shadowRoot.querySelector("#delete-registry").value=""}async _rescanImage(){const e=await this.indicator.start("indeterminate");e.set(10,c("registry.UpdatingRegistryInfo")),globalThis.backendaiclient.maintenance.rescan_images(this.registryList[this.selectedIndex].hostname).then((({rescan_images:t})=>{if(t.ok){e.set(0,c("registry.RescanImages"));const i=globalThis.backendaiclient.maintenance.attach_background_task(t.task_id);i.addEventListener("bgtask_updated",(t=>{const i=JSON.parse(t.data),a=i.current_progress/i.total_progress;e.set(100*a,c("registry.RescanImages"))})),i.addEventListener("bgtask_done",(t=>{e.set(100,c("registry.RegistryUpdateFinished")),i.close()})),i.addEventListener("bgtask_failed",(e=>{throw console.log("bgtask_failed",e.data),i.close(),new Error("Background Image scanning task has failed")})),i.addEventListener("bgtask_cancelled",(e=>{throw i.close(),new Error("Background Image scanning task has been cancelled")}))}else e.set(50,c("registry.RegistryUpdateFailed")),e.end(1e3),this.notification.text=u.relieve(t.msg),this.notification.detail=t.msg,this.notification.show()})).catch((t=>{console.log(t),e.set(50,c("registry.RescanFailed")),e.end(1e3),t&&t.message&&(this.notification.text=u.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))}))}_launchDialogById(e){this.shadowRoot.querySelector(e).show()}_hideDialogById(e){this.shadowRoot.querySelector(e).hide()}_openCreateRegistryDialog(){this.editMode=!1,this.selectedIndex=-1,this.registryType="docker",this._launchDialogById("#add-registry-dialog")}_hideValidationMessage(){this.shadowRoot.querySelector("#registry-hostname-validation").style.display="none",this.shadowRoot.querySelector("#registry-url-validation").style.display="none",this.shadowRoot.querySelector("#project-name-validation").style.display="none"}_openEditRegistryDialog(e){let t;this.editMode=!0;for(let i=0;i<this.registryList.length;i++)if(this.registryList[i].hostname===e){t=this.registryList[i];break}t?(this.registryList[this.selectedIndex]=t,this._hideValidationMessage(),this._launchDialogById("#add-registry-dialog")):globalThis.notification.show(`No such registry: ${e}`)}_toggleProjectNameInput(){this.registryType=this.shadowRoot.querySelector("#select-registry-type").value,this._validateProjectName()}_validateUrl(){const e=this.shadowRoot.querySelector("#add-registry-url");this.shadowRoot.querySelector("#registry-url-validation").style.display=e.valid?"none":"block"}_validateHostname(){const e=this.shadowRoot.querySelector("#add-registry-hostname").value,t=this.shadowRoot.querySelector("#registry-hostname-validation");t.style.display=e&&""!==e?"none":"block"}_validateProjectName(){const e=this.shadowRoot.querySelector("#add-project-name"),t=this.shadowRoot.querySelector("#project-name-validation");e.value=e.value.replace(/\s/g,""),t.style.display="block",["harbor","harbor2"].includes(this.registryType)?(e.value?t.style.display="none":t.textContent=c("registry.ProjectNameIsRequired"),e.disabled=!1):(t.textContent=c("registry.ForHarborOnly"),e.disabled=!0)}_resetRegistryField(){const e=this.shadowRoot.querySelector("#add-registry-hostname"),t=this.shadowRoot.querySelector("#add-registry-url"),i=this.shadowRoot.querySelector("#add-registry-username"),a=this.shadowRoot.querySelector("#add-registry-password"),o=this.shadowRoot.querySelector("#select-registry-type"),s=this.shadowRoot.querySelector("#add-project-name");e.value="",t.value="",i.value="",a.value="",o.value="",s.value=""}toggleRegistry(e,t){e.target.selected?this._changeRegistryState(t,!0):this._changeRegistryState(t,!1)}_changeRegistryState(e,t){if(!0===t)this.allowed_registries.push(e),this.notification.text=c("registry.RegistryTurnedOn");else{const t=this.allowed_registries.indexOf(e);1!==t&&this.allowed_registries.splice(t,1),this.notification.text=c("registry.RegistryTurnedOff")}globalThis.backendaiclient.domain.update(globalThis.backendaiclient._config.domainName,{allowed_docker_registries:this.allowed_registries}).then((e=>{this.notification.show()}))}_indexRenderer(e,t,i){const a=i.index+1;m(p`
        <div>${a}</div>
      `,e)}_hostRenderer(e,t,i){m(p`
        <div>
          ${decodeURIComponent(i.item.hostname)}
        </div>
      `,e)}_registryRenderer(e,t,i){m(p`
        <div>
          ${i.item[""]}
        </div>
      `,e)}_passwordRenderer(e,t,i){m(p`
        <div>
          <input type="password" id="registry-password" readonly value="${i.item.password}"/>
        </div>
      `,e)}_isEnabledRenderer(e,t,i){m(p`
        <div>
          <mwc-switch
              @click="${e=>this.toggleRegistry(e,i.item.hostname)}"
              ?selected="${this.allowed_registries.includes(i.item.hostname)}"></mwc-switch>
        </div>
      `,e)}_controlsRenderer(e,t,i){m(p`
        <div
          icon="settings"
          id="controls"
          class="layout horizontal flex center"
        >
          <wl-button fab flat inverted
              class="fg blue"
              @click=${()=>{this.selectedIndex=i.index,this._openEditRegistryDialog(i.item.hostname)}}>
            <wl-icon>settings</wl-icon>
          </wl-button>
          <wl-button fab flat inverted
            icon="delete"
            class="fg red"
            @click=${()=>{this.selectedIndex=i.index,this._launchDialogById("#delete-registry-dialog")}}>
            <wl-icon>delete</wl-icon>
          </wl-button>
          <wl-button fab flat inverted
            icon="refresh"
            class="fg green"
            @click=${()=>{this.selectedIndex=i.index,this._rescanImage()}}>
            <wl-icon>refresh</wl-icon>
          </wl-button>
        </div>
      `,e)}render(){var e,t,i,a,o,s;return p`
      <h4 class="horizontal flex center center-justified layout">
        <span>${h("registry.Registries")}</span>
        <span class="flex"></span>
        <mwc-button raised id="add-registry" label="${h("registry.AddRegistry")}" icon="add"
            @click=${this._openCreateRegistryDialog}></mwc-button>
      </h4>

      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Registry list" .items="${this.registryList}">
        <vaadin-grid-column flex-grow="0" width="40px" header="#" text-align="center" .renderer=${this._indexRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" auto-width header="${h("registry.Hostname")}" .renderer=${this._hostRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="2" auto-width header="${h("registry.RegistryURL")}" resizable .renderer=${this._registryRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="0" auto-width resizable header="${h("registry.Type")}" path="type">
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="0" auto-width resizable header="${h("registry.HarborProject")}" path="project">
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${h("registry.Username")}" path="username">
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${h("registry.Password")}" .renderer="${this._boundPasswordRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="0" width="60px" header="${h("general.Enabled")}" .renderer=${this._boundIsEnabledRenderer}></vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${h("general.Control")}" .renderer=${this._boundControlsRenderer}>
        </vaadin-grid-column>
      </vaadin-grid>
      <backend-ai-dialog id="add-registry-dialog" fixed backdrop blockscrolling>
      ${this.editMode?p`
        <span slot="title">${h("registry.ModifyRegistry")}</span>
      `:p`
        <span slot="title">${h("registry.AddRegistry")}</span>
      `}
        <div slot="content" class="login-panel intro centered">
          <wl-textfield
            id="add-registry-hostname"
            class="helper-text"
            type="text"
            label="${h("registry.RegistryHostname")}"
            required
            ?disabled="${this.editMode}"
            value="${(null===(e=this.registryList[this.selectedIndex])||void 0===e?void 0:e.hostname)||""}"
            @click=${this._validateHostname}
            @change=${this._validateHostname}
          ></wl-textfield>
          <wl-label class="helper-text" id="registry-hostname-validation" style="display:none;">${h("registry.DescHostnameIsEmpty")}</wl-label>
          <wl-textfield
            id="add-registry-url"
            class="helper-text"
            label="${h("registry.RegistryURL")}"
            required
            pattern="^(https?):\/\/(([a-zA-Z\d\.]{2,})\.([a-zA-Z]{2,})|(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})(:((6553[0-5])|(655[0-2])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4})))?$"
            value="${(null===(t=this.registryList[this.selectedIndex])||void 0===t?void 0:t[""])||""}"
            @click=${this._validateUrl}
            @change=${this._validateUrl}
          ></wl-textfield>
          <wl-label class="helper-text" id="registry-url-validation" style="display:none;">${h("registry.DescURLStartString")}</wl-label>
         <div class="horizontal layout flex">
          <wl-textfield
            id="add-registry-username"
            type="text"
            label="${h("registry.UsernameOptional")}"
            style="padding-right:10px;"
            value="${(null===(i=this.registryList[this.selectedIndex])||void 0===i?void 0:i.username)||""}"
          ></wl-textfield>
          <wl-textfield
            id="add-registry-password"
            type="password"
            label="${h("registry.PasswordOptional")}"
            style="padding-left:10px;"
            value="${(null===(a=this.registryList[this.selectedIndex])||void 0===a?void 0:a.password)||""}"
          ></wl-textfield>
         </div>
         <mwc-select id="select-registry-type" label="${h("registry.RegistryType")}"
                      @change=${this._toggleProjectNameInput} required
                      validationMessage="${h("registry.PleaseSelectOption")}"
                      value="${(null===(o=this.registryList[this.selectedIndex])||void 0===o?void 0:o.type)||this.registryType}">
            ${this._registryTypes.map((e=>p`
              <mwc-list-item value="${e}" ?selected="${"docker"===e}">${e}</mwc-list-item>
            `))}
          </mwc-select>
          <div class="vertical layout end-justified">
            <wl-textfield
              id="add-project-name"
              class="helper-text"
              type="text"
              label="${h("registry.ProjectName")}"
              required
              value="${(null===(s=this.registryList[this.selectedIndex])||void 0===s?void 0:s.project)||""}"
              ?disabled="${"docker"===this.registryType}"
              @change=${this._validateProjectName}
            ></wl-textfield>
              <wl-label class="helper-text" id="project-name-validation">
                ${this.editMode?p``:h("registry.ForHarborOnly")}
              </wl-label>
         </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          ${this.editMode?p`
            <mwc-button unelevated fullwidth icon="add" label="${h("button.Save")}"
            @click=${this._addRegistry}></mwc-button>
          `:p`
            <mwc-button unelevated fullwidth icon="add" label="${h("button.Add")}"
            @click=${this._addRegistry}></mwc-button>
          `}
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="delete-registry-dialog" fixed backdrop blockscrolling>
        <span slot="title">${h("dialog.warning.CannotBeUndone")}</span>
        <div slot="content">
          <wl-textfield
            id="delete-registry"
            type="text"
            label="${h("registry.TypeRegistryNameToDelete")}"
          ></wl-textfield>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button unelevated fullwidth icon="delete" label="${h("button.Delete")}"
              @click=${this._deleteRegistry}></mwc-button>
        </div>
      </backend-ai-dialog>
    `}};e([t({type:Object})],b.prototype,"indicator",void 0),e([t({type:Number})],b.prototype,"selectedIndex",void 0),e([t({type:Object})],b.prototype,"_boundIsEnabledRenderer",void 0),e([t({type:Object})],b.prototype,"_boundControlsRenderer",void 0),e([t({type:Object})],b.prototype,"_boundPasswordRenderer",void 0),e([t({type:Array})],b.prototype,"_registryTypes",void 0),e([t({type:Array})],b.prototype,"allowed_registries",void 0),e([t({type:Array})],b.prototype,"hostnames",void 0),e([t({type:String})],b.prototype,"registryType",void 0),e([t({type:Boolean})],b.prototype,"editMode",void 0),b=e([i("backend-ai-registry-list")],b);
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */
let v=class extends a{constructor(){super(),this.images=Object(),this.is_superadmin=!1,this._activeTab="image-lists"}static get styles(){return[o,s,r,d`
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

          @media screen and (max-width: 805px) {
            mwc-tab, mwc-button {
              --mdc-typography-button-font-size: 10px;
            }

            wl-tab {
              width: 5px;
            }
          }
      `]}static get properties(){return{active:{type:Boolean},_activeTab:{type:Boolean}}}async _viewStateChanged(e){return await this.updateComplete,!1===e||(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_superadmin=globalThis.backendaiclient.is_superadmin}),!0):this.is_superadmin=globalThis.backendaiclient.is_superadmin,!1)}_showTab(e){const t=this.shadowRoot.querySelectorAll(".tab-content");for(let e=0;e<t.length;e++)t[e].style.display="none";this._activeTab=e.title,this.shadowRoot.querySelector("#"+e.title).style.display="block"}render(){return p`
      <lablup-activity-panel noheader narrow autowidth>
        <div slot="message">
          <h3 class="tab horizontal center layout">
            <mwc-tab-bar>
              <mwc-tab title="image-lists" label="${h("environment.Images")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
              <mwc-tab title="resource-template-lists" label="${h("environment.ResourcePresets")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
              ${this.is_superadmin?p`
                <mwc-tab title="registry-lists" label="${h("environment.Registries")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
              `:p``}
            </mwc-tab-bar>
            <div class="flex"></div>
          </h3>
          <div id="image-lists" class="tab-content">
            <backend-ai-environment-list ?active="${"image-lists"===this._activeTab}"></backend-ai-environment-list>
          </div>
          <backend-ai-resource-preset-list id="resource-template-lists" class="admin item tab-content" style="display: none" ?active="${"resource-template-lists"===this._activeTab}"></backend-ai-resource-preset-list>
          <div id="registry-lists" class="tab-content">
            <backend-ai-registry-list ?active="${"registry-lists"===this._activeTab}"> </backend-ai-registry-list>
          </div>
        </div>
      </lablup-activity-panel>
    `}disconnectedCallback(){super.disconnectedCallback()}};e([t({type:String})],v.prototype,"images",void 0),e([t({type:Boolean})],v.prototype,"is_superadmin",void 0),e([t({type:String})],v.prototype,"_activeTab",void 0),v=e([i("backend-ai-environment-view")],v);var f=v;export{f as default};
