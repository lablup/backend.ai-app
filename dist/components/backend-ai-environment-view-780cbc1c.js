import{_ as e,p as t,c as i,B as a,d as o,I as r,a as s,n as l,e as n,b as d,g as c,f as u,t as m,a3 as h,h as p}from"./backend-ai-console-bf343de1.js";import"./tab-group-f9f43f62.js";import"./mwc-tab-bar-58fe4f29.js";import"./lablup-activity-panel-ffd4d5dd.js";import"./vaadin-grid-sorter-19260d21.js";import"./vaadin-grid-selection-column-1d9252c1.js";import"./vaadin-grid-filter-column-0c8eb35c.js";import"./select-c9ec1be8.js";import"./textfield-67e7f371.js";import"./input-behavior-023cba33.js";import"./mwc-slider-90480cbf.js";import"./iconset-f2694bf1.js";import"./vaadin-item-2fcf1204.js";import"./mwc-switch-cafd197d.js";import"./radio-behavior-e101265b.js";let g=class extends a{constructor(){super(),this.images=Array(),this.allowed_registries=Array(),this._boundRequirementsRenderer=this.requirementsRenderer.bind(this),this._boundControlsRenderer=this.controlsRenderer.bind(this),this._boundInstallRenderer=this.installRenderer.bind(this),this.servicePorts=Array(),this.selectedIndex=0,this.selectedImages=Array(),this._cuda_gpu_disabled=!1,this._cuda_fgpu_disabled=!1,this._rocm_gpu_disabled=!1,this._tpu_disabled=!1,this.alias=Object(),this.spinner=Object(),this.indicator=Object(),this.installImageDialog=Object(),this.deleteImageDialog=Object(),this.installImageNameList=Array(),this.deleteImageNameList=Array(),this.deleteAppInfo=Object(),this.deleteAppRow=Object(),this.installImageResource=Object(),this.selectedCheckbox=Object(),this._grid=Object(),this.servicePortsMsg="",this._range={cpu:["1","2","3","4","5","6","7","8"],mem:["64MB","128MB","256MB","512MB","1GB","2GB","4GB","8GB","16GB","32GB","256GB","512GB"],"cuda-gpu":["0","1","2","3","4","5","6","7"],"cuda-fgpu":["0","0.1","0.2","0.5","1.0","2.0"],"rocm-gpu":["0","1","2","3","4","5","6","7"],tpu:["0","1","2"]},this.cpuValue=0}static get styles(){return[o,r,s,l,n,d`
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
          --label-font-family: 'Ubuntu', 'Quicksand', Roboto;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          border-radius: 3px;
          -moz-background-clip: padding;
          -webkit-background-clip: padding-box;
          background-clip: padding-box;
          border: 1px solid #ccc;
          background-color: #f9f9f9;
          padding: 0px 3px;
          display: inline-block;
          margin: 0px;
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
          font-align: left;
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
          --mdc-on-theme-primary: #38bd73;
        }

        mwc-button, mwc-button[unelevated] {
          background-image: none;
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-on-theme-primary: var(--general-button-background-color);
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

      `]}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":e}_hideDialogById(e){return this.shadowRoot.querySelector(e).hide()}_launchDialogById(e){return this.shadowRoot.querySelector(e).show()}modifyImage(){const e=this.shadowRoot.querySelector("#modify-image-cpu").label,t=this.shadowRoot.querySelector("#modify-image-mem").label,i=this.shadowRoot.querySelector("#modify-image-cuda-gpu").label,a=this.shadowRoot.querySelector("#modify-image-cuda-fgpu").label,o=this.shadowRoot.querySelector("#modify-image-rocm-gpu").label,r=this.shadowRoot.querySelector("#modify-image-tpu").value,{resource_limits:s}=this.images[this.selectedIndex];let l={};const n=this._cuda_gpu_disabled?this._cuda_fgpu_disabled?1:2:this._cuda_fgpu_disabled?2:3;e!==s[0].min&&(l.cpu={min:e});let d=this._symbolicUnit(t);d!==s[n].min&&(l.mem={min:d}),this._cuda_gpu_disabled||i===s[1].min||(l["cuda.device"]={min:i}),this._cuda_fgpu_disabled||a===s[2].min||(l["cuda.shares"]={min:a}),this._rocm_gpu_disabled||o===s[3].min||(l["rocm.device"]={min:o}),this._tpu_disabled||r===s[4].min||(l["tpu.device"]={min:r});const u=this.images[this.selectedIndex];if(0===Object.keys(l).length)return this.notification.text=c("environment.NoChangeMade"),this.notification.show(),void this._hideDialogById("#modify-image-dialog");globalThis.backendaiclient.image.modifyResource(u.registry,u.name,u.tag,l).then((e=>{e.reduce(((e,t)=>e&&"ok"===t.result),!0)?(this._getImages(),this.requestUpdate(),this.notification.text=c("environment.SuccessfullyModified")):this.notification.text=c("environment.ProblemOccurred"),this.notification.show(),this._hideDialogById("#modify-image-dialog")}))}openInstallImageDialog(){this.selectedImages=this._grid.selectedItems.filter((e=>!e.installed)),this.installImageNameList=this.selectedImages.map((e=>(Object.keys(e).map((t=>{["registry","name","tag"].includes(t)&&(e[t]=e[t].replace(/\s/g,""))})),e.registry+"/"+e.name+":"+e.tag))),this.selectedImages.length>0?this.installImageDialog.show():(this.notification.text=c("environment.SelectedImagesAlreadyInstalled"),this.notification.show())}_installImage(){this.installImageDialog.hide(),this.selectedImages.forEach((async e=>{let t="#"+e.registry.replace(/\./gi,"-")+"-"+e.name.replace("/","-")+"-"+e.tag.replace(/\./gi,"-");this._grid.querySelector(t).setAttribute("style","display:block;");let i=e.registry+"/"+e.name+":"+e.tag,a=!1,o=Object();e.resource_limits.forEach((e=>{o[e.key.replace("_",".")]=e.min})),"cuda.device"in o&&"cuda.shares"in o?(a=!0,o.gpu=0,o.fgpu=o["cuda.shares"]):"cuda.device"in o?(o.gpu=o["cuda.device"],a=!0):a=!1,o.mem.endsWith("g")?o.mem=o.mem.replace("g",".5g"):o.mem.endsWith("m")&&(o.mem=Number(o.mem.slice(0,-1))+256+"m"),o.domain=globalThis.backendaiclient._config.domainName,o.group_name=globalThis.backendaiclient.current_group;const r=await globalThis.backendaiclient.get_resource_slots();if(a&&!("cuda.device"in r)&&!("cuda.shares"in r))return this.notification.text=c("environment.NoResourcesForImage")+i,this.notification.show(),void this._grid.querySelector(t).setAttribute("style","display:none;");"cuda.device"in r&&"cuda.shares"in r?"fgpu"in o&&"gpu"in o&&(delete o.gpu,delete o["cuda.device"]):"cuda.device"in r?(delete o.fgpu,delete o["cuda.shares"]):"cuda.shares"in r&&(delete o.gpu,delete o["cuda.device"]),this.notification.text=c("environment.InstallingImage")+i+c("environment.TakesTime"),this.notification.show();let s=await this.indicator.start("indeterminate");s.set(10,c("import.Downloading")),globalThis.backendaiclient.image.install(i,o).then((e=>{s.set(100,c("import.Installed")),s.end(1e3),this._grid.querySelector(t).className="installed",this._grid.querySelector(t).innerHTML=c("environment.Installed")})).catch((e=>{this._grid.querySelector(t).className=c("environment.Installing"),this._grid.querySelector(t).setAttribute("style","display:none;"),this._uncheckSelectedRow(),this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e),s.set(100,m("environment.DescProblemOccurred")),s.end(1e3)}))}))}openDeleteImageDialog(){this.selectedImages=this._grid.selectedItems.filter((e=>e.installed)),this.deleteImageNameList=this.selectedImages.map((e=>e.registry+"/"+e.name+":"+e.tag)),this.selectedImages.length>0?this.deleteImageDialog.show():(this.notification.text=c("environment.SelectedImagesNotInstalled"),this.notification.show())}_deleteImage(){}requirementsRenderer(e,t,i){h(p`
          <div class="layout horizontal center flex">
            <div class="layout horizontal configuration">
              <wl-icon class="fg green">developer_board</wl-icon>
              <span>${i.item.cpu_limit_min}</span> ~
              <span>${this._markIfUnlimited(i.item.cpu_limit_max)}</span>
              <span class="indicator">${m("general.cores")}</span>
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

      `,e)}_setPulldownDefaults(e){this._cuda_gpu_disabled=0===e.filter((e=>"cuda_device"===e.key)).length,this._cuda_fgpu_disabled=0===e.filter((e=>"cuda_shares"===e.key)).length,this._rocm_gpu_disabled=0===e.filter((e=>"rocm_device"===e.key)).length,this._tpu_disabled=0===e.filter((e=>"tpu_device"===e.key)).length,this.shadowRoot.querySelector("#modify-image-cpu").label=e[0].min,this._cuda_gpu_disabled?(this.shadowRoot.querySelector("#modify-image-cuda-gpu").label=m("environment.Disabled"),this.shadowRoot.querySelector("mwc-slider#cuda-gpu").value=0):(this.shadowRoot.querySelector("#modify-image-cuda-gpu").label=e[1].min,this.shadowRoot.querySelector("mwc-slider#cuda-gpu").value=this._range["cuda-gpu"].indexOf(this._range.cpu.filter((t=>t===e[0].min))[0])),this._cuda_fgpu_disabled?(this.shadowRoot.querySelector("#modify-image-cuda-fgpu").label=m("environment.Disabled"),this.shadowRoot.querySelector("mwc-slider#cuda-gpu").value=0):(this.shadowRoot.querySelector("#modify-image-cuda-fgpu").label=e[2].min,this.shadowRoot.querySelector("mwc-slider#cuda-fgpu").value=this._range["cuda-fgpu"].indexOf(this._range.cpu.filter((t=>t===e[0].min))[0])),this._rocm_gpu_disabled?(this.shadowRoot.querySelector("#modify-image-rocm-gpu").label=m("environment.Disabled"),this.shadowRoot.querySelector("mwc-slider#rocm-gpu").value=0):(this.shadowRoot.querySelector("#modify-image-rocm-gpu").label=e[3].min,this.shadowRoot.querySelector("mwc-slider#rocm-gpu").value=this._range["rocm-gpu"].indexOf(this._range.cpu.filter((t=>t===e[0].min))[0])),this._tpu_disabled?(this.shadowRoot.querySelector("#modify-image-tpu").label=m("environment.Disabled"),this.shadowRoot.querySelector("mwc-slider#tpu").value=0):(this.shadowRoot.querySelector("#modify-image-tpu").label=e[4].min,this.shadowRoot.querySelector("mwc-slider#tpu").value=this._range.tpu.indexOf(this._range.cpu.filter((t=>t===e[0].min))[0]));const t=this._cuda_gpu_disabled?this._cuda_fgpu_disabled?1:2:this._cuda_fgpu_disabled?2:3;this.shadowRoot.querySelector("#modify-image-mem").label=this._addUnit(e[t].min),this.shadowRoot.querySelector("mwc-slider#cpu").value=this._range.cpu.indexOf(this._range.cpu.filter((t=>t===e[0].min))[0]),this.shadowRoot.querySelector("mwc-slider#mem").value=this._range.mem.indexOf(this._range.mem.filter((i=>i===this._addUnit(e[t].min)))[0]),this._updateSliderLayout()}_updateSliderLayout(){this.shadowRoot.querySelectorAll("mwc-slider").forEach((e=>{e.layout()}))}_decodeServicePort(){""===this.images[this.selectedIndex].labels["ai.backend.service-ports"]?this.servicePorts=[]:this.servicePorts=this.images[this.selectedIndex].labels["ai.backend.service-ports"].split(",").map((e=>{const t=e.split(":");return{app:t[0],protocol:t[1],port:t[2]}}))}_isServicePortValid(){const e=this.shadowRoot.querySelector("#modify-app-container").querySelectorAll(".row:not(.header)"),t=new Set;for(const i of e){const e=i.querySelectorAll("wl-textfield");if(Array.prototype.every.call(e,(e=>""===e.value)))continue;const a=e[0].value,o=e[1].value,r=parseInt(e[2].value);if(""===a)return this.servicePortsMsg=c("environment.AppNameMustNotBeEmpty"),!1;if(!["http","tcp","pty","preopen"].includes(o))return this.servicePortsMsg=c("environment.ProtocolMustBeOneOfSupported"),!1;if(t.has(r))return this.servicePortsMsg=c("environment.PortMustBeUnique"),!1;if(r>=66535||r<0)return this.servicePortsMsg=c("environment.PortMustBeInRange"),!1;if([2e3,2001,2002,2003,2200,7681].includes(r))return this.servicePortsMsg=c("environment.PortReservedForInternalUse"),!1;t.add(r)}return!0}_parseServicePort(){const e=this.shadowRoot.querySelector("#modify-app-container").querySelectorAll(".row:not(.header)");return Array.prototype.filter.call(e,(e=>(e=>0===Array.prototype.filter.call(e.querySelectorAll("wl-textfield"),((e,t)=>""===e.value)).length)(e))).map((e=>(e=>Array.prototype.map.call(e.querySelectorAll("wl-textfield"),(e=>e.value)).join(":"))(e))).join(",")}modifyServicePort(){if(this._isServicePortValid()){const e=this._parseServicePort(),t=this.images[this.selectedIndex];this.servicePortsMsg="",globalThis.backendaiclient.image.modifyLabel(t.registry,t.name,t.tag,"ai.backend.service-ports",e).then((({result:e})=>{this.notification.text=c("ok"===e?"environment.DescServicePortModified":"dialog.ErrorOccurred"),this._getImages(),this.requestUpdate(),this._clearRows(),this.notification.show(),this._hideDialogById("#modify-app-dialog")}))}}controlsRenderer(e,t,i){h(p`
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
      `,e)}installRenderer(e,t,i){h(p`
        <div class="layout horizontal center center-justified">
          ${i.item.installed?p`
          <wl-label class="installed"
              id="${i.item.registry.replace(/\./gi,"-")+"-"+i.item.name.replace("/","-")+"-"+i.item.tag.replace(/\./gi,"-")}">
            ${m("environment.Installed")}
          </wl-label>
          `:p`
          <wl-label class="installing"
            id="${i.item.registry.replace(/\./gi,"-")+"-"+i.item.name.replace("/","-")+"-"+i.item.tag.replace(/\./gi,"-")}"
            style="display:none">
            ${m("environment.Installing")}
            </wl-label>
          `}
        </div>
      `,e)}render(){return p`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <div class="horizontal layout flex end-justified" style="margin:10px;">
        <mwc-button raised label="${m("environment.Install")}" class="operation" id="install-image" icon="get_app" @click="${this.openInstallImageDialog}"></mwc-button>
        <mwc-button disabled label="${m("environment.Delete")}" class="operation temporarily-hide" id="delete-image" icon="delete" @click="${this.openDeleteImageDialog}"></mwc-button>
      </div>
      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Environments" id="testgrid" .items="${this.images}">
        <vaadin-grid-selection-column flex-grow="0" text-align="center" auto-select>
        </vaadin-grid-selection-column>
        <vaadin-grid-column path="installed" flex-grow="0" .renderer="${this._boundInstallRenderer}">
            <template class="header">
              <vaadin-grid-sorter path="installed">${m("environment.Status")}</vaadin-grid-sorter>
            </template>
          </vaadin-grid-column>
        <vaadin-grid-filter-column path="registry" width="80px" resizable
            header="${m("environment.Registry")}"></vaadin-grid-filter-column>
        <vaadin-grid-filter-column path="namespace" width="60px" resizable
            header="${m("environment.Namespace")}"></vaadin-grid-filter-column>
        <vaadin-grid-filter-column path="lang" resizable
            header="${m("environment.Language")}"></vaadin-grid-filter-column>
        <vaadin-grid-filter-column path="baseversion" resizable
            header="${m("environment.Version")}"></vaadin-grid-filter-column>

        <vaadin-grid-column width="60px" resizable>
          <template class="header">${m("environment.Base")}</template>
          <template>
            <template is="dom-repeat" items="[[ item.baseimage ]]">
              <lablup-shields app="" color="blue" ui="round" description="[[item]]"></lablup-shields>
            </template>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="50px" resizable>
          <template class="header">${m("environment.Constraint")}</template>
          <template>
            <template is="dom-if" if="[[item.additional_req]]">
              <lablup-shields app="" color="green" ui="round" description="[[item.additional_req]]"></lablup-shields>
            </template>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-filter-column path="digest" resizable
            header="${m("environment.Digest")}">
          <template>
            <div class="layout vertical">
              <span class="indicator monospace">[[item.digest]]</span>
            </div>
          </template>
        </vaadin-grid-filter-column>

        <vaadin-grid-column width="150px" flex-grow="0" resizable header="${m("environment.ResourceLimit")}" .renderer="${this._boundRequirementsRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable header="${m("general.Control")}" .renderer=${this._boundControlsRenderer}>
        </vaadin-grid-column>
      </vaadin-grid>
      <backend-ai-dialog id="modify-image-dialog" fixed backdrop blockscrolling>
        <span slot="title">${m("environment.ModifyImageResourceLimit")}</span>
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
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              unelevated
              icon="check"
              label="${m("button.SaveChanges")}"
              @click="${()=>this.modifyImage()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="modify-app-dialog" fixed backdrop>
        <span slot="title">${m("environment.ManageApps")}</span>
        <div slot="content" id="modify-app-container">
          <div class="row header">
            <div> ${m("environment.AppName")} </div>
            <div> ${m("environment.Protocol")} </div>
            <div> ${m("environment.Port")} </div>
            <div> ${m("environment.Action")} </div>
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
              label="${m("button.Finish")}"
              @click="${this.modifyServicePort}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="install-image-dialog" fixed backdrop persistent>
        <span slot="title">${m("dialog.title.LetsDouble-Check")}</span>
        <div slot="content">
          <p>${m("environment.DescDownloadImage")}</p>
          <p style="margin:auto; "><span style="color:blue;">
          ${this.installImageNameList.map((e=>p`${e}<br />`))}
          </span></p>
          <p>${m("environment.DescSignificantDownloadTime")} ${m("dialog.ask.DoYouWantToProceed")}</p>
        </div>
        <div slot="footer" class="horizontal flex layout">
          <div class="flex"></div>
          <mwc-button
              class="operation"
              label="${m("button.Cancel")}"
              @click="${e=>{this._hideDialog(e),this._uncheckSelectedRow()}}"></mwc-button>
          <mwc-button
              unelevated
              class="operation"
              label="${m("button.Okay")}"
              @click="${()=>this._installImage()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="delete-image-dialog" fixed backdrop persistent>
        <span slot="title">${m("dialog.title.LetsDouble-Check")}</span>
        <div slot="content">
          <p>${m("environment.DescDeleteImage")}</p>
          <p style="margin:auto; "><span style="color:blue;">
          ${this.deleteImageNameList.map((e=>p`${e}<br />`))}
          </span></p>
          <p>${m("dialog.ask.DoYouWantToProceed")}</p>
        </div>
        <div slot="footer" class="horizontal flex layout">
          <div class="flex"></div>
          <mwc-button
              class="operation"
              label="${m("button.Cancel")}"
              @click="${e=>{this._hideDialog(e),this._uncheckSelectedRow()}}"></mwc-button>
          <mwc-button
              unelevated
              class="operation"
              label="${m("button.Okay")}"
              @click="${()=>this._deleteImage()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="delete-app-info-dialog" fixed backdrop persistent>
        <span slot="title">${m("dialog.title.LetsDouble-Check")}</span>
        <div slot="content">
          <p>${m("environment.DescDeleteAppInfo")}</p>
          <div class="horizontal layout">
              <p>${m("environment.AppName")}</p>
              <p style="color:blue;">: ${this.deleteAppInfo[0]}</p>
            </div>
            <div class="horizontal layout">
              <p>${m("environment.Protocol")}</p>
              <p style="color:blue;">: ${this.deleteAppInfo[1]}</p>
            </div>
            <div class="horizontal layout">
              <p>${m("environment.Port")}</p>
              <p style="color:blue;">: ${this.deleteAppInfo[2]}</p>
            </div>
          <p>${m("dialog.ask.DoYouWantToProceed")}</p>
        </div>
        <div slot="footer" class="horizontal flex layout">
          <div class="flex"></div>
          <mwc-button
              class="operation"
              label="${m("button.Cancel")}"
              @click="${e=>{this._hideDialog(e)}}"></mwc-button>
          <mwc-button
              unelevated
              class="operation"
              label="${m("button.Okay")}"
              @click="${()=>this._removeRow()}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}_removeRow(){this.deleteAppRow.remove(),this.shadowRoot.querySelector("#delete-app-info-dialog").hide(),this.notification.text=c("environment.AppInfoDeleted"),this.notification.show()}_addRow(){const e=this.shadowRoot.querySelector("#modify-app-container"),t=e.children[e.children.length-1],i=this._createRow();e.insertBefore(i,t)}_createRow(){const e=document.createElement("div");e.setAttribute("class","row extra");const t=document.createElement("wl-textfield");t.setAttribute("type","text");const i=document.createElement("wl-textfield");t.setAttribute("type","text");const a=document.createElement("wl-textfield");t.setAttribute("type","number");const o=document.createElement("wl-button");o.setAttribute("class","fg pink"),o.setAttribute("fab",""),o.setAttribute("flat",""),o.addEventListener("click",(e=>this._checkDeleteAppInfo(e)));const r=document.createElement("wl-icon");return r.innerHTML="remove",o.appendChild(r),e.appendChild(a),e.appendChild(i),e.appendChild(t),e.appendChild(o),e}_checkDeleteAppInfo(e){var t;this.deleteAppRow=e.target.parentNode;let i=[...this.deleteAppRow.children].filter((e=>"WL-TEXTFIELD"===e.tagName)).map((e=>e.value));(null===(t=i.filter((e=>""===e)))||void 0===t?void 0:t.length)===i.length?this._removeRow():(this.deleteAppInfo=i,this.shadowRoot.querySelector("#delete-app-info-dialog").show())}_clearRows(){const e=this.shadowRoot.querySelector("#modify-app-container"),t=e.querySelectorAll(".row");t[t.length-1].querySelectorAll("wl-textfield").forEach((e=>{e.value=""})),e.querySelectorAll(".row.extra").forEach((e=>{e.remove()}))}_uncheckSelectedRow(){this._grid.selectedItems=[]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.indicator=globalThis.lablupIndicator,this.notification=globalThis.lablupNotification,this.installImageDialog=this.shadowRoot.querySelector("#install-image-dialog"),this.deleteImageDialog=this.shadowRoot.querySelector("#delete-image-dialog"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._getImages()}),!0):this._getImages(),this._grid=this.shadowRoot.querySelector("#testgrid"),this._grid.addEventListener("sorter-changed",(e=>{this._refreshSorter(e)})),this.shadowRoot.querySelector("#install-image-dialog").addEventListener("didHide",(()=>{this._uncheckSelectedRow()})),this.shadowRoot.querySelector("#delete-image-dialog").addEventListener("didHide",(()=>{this._uncheckSelectedRow()}))}_refreshSorter(e){let t=e.target,i=t.path.toString();t.direction&&("asc"===t.direction?this._grid.items.sort(((e,t)=>e[i]<t[i]?-1:e[i]>t[i]?1:0)):this._grid.items.sort(((e,t)=>e[i]>t[i]?-1:e[i]<t[i]?1:0)))}async _viewStateChanged(e){await this.updateComplete}_getImages(){this.spinner.show(),globalThis.backendaiclient.domain.get(globalThis.backendaiclient._config.domainName,["allowed_docker_registries"]).then((e=>(this.allowed_registries=e.domain.allowed_docker_registries,globalThis.backendaiclient.image.list(["name","tag","registry","digest","installed","labels { key value }","resource_limits { key min max }"],!1,!0)))).then((e=>{let t=e.images,i=[];t.forEach((e=>{if(this.allowed_registries.includes(e.registry)){let t=e.tag.split("-");void 0!==t[1]?(e.baseversion=t[0],e.baseimage=t[1],void 0!==t[2]&&(e.additional_req=t[2].toUpperCase())):e.baseversion=e.tag;let a=e.name.split("/");void 0!==a[1]?(e.namespace=a[0],e.lang=a.slice(1).join("")):(e.namespace="",e.lang=a[0]);let o=e.lang.split("-"),r=[this._humanizeName(e.baseimage)];void 0!==o[1]&&(e.lang=o[1],r.push(this._humanizeName(o[0]))),e.baseimage=r,e.lang=this._humanizeName(e.lang),e.resource_limits.forEach((t=>{0==t.max&&(t.max="∞"),"cuda.device"==t.key&&(t.key="cuda_device"),"cuda.shares"==t.key&&(t.key="cuda_shares"),"rocm.device"==t.key&&(t.key="rocm_device"),"tpu.device"==t.key&&(t.key="tpu_device"),e[t.key+"_limit_min"]=this._addUnit(t.min),e[t.key+"_limit_max"]=this._addUnit(t.max)})),e.labels=e.labels.reduce(((e,t)=>({...e,[t.key]:t.value})),{}),i.push(e)}})),this.images=i,this.spinner.hide()})).catch((e=>{console.log(e),void 0!==e.message?(this.notification.text=u.relieve(e.title),this.notification.detail=e.message):this.notification.text=u.relieve("Problem occurred during image metadata loading."),this.notification.show(!0,e),this.spinner.hide()}))}_addUnit(e){let t=e.substr(-1);return"m"==t?e.slice(0,-1)+"MB":"g"==t?e.slice(0,-1)+"GB":"t"==t?e.slice(0,-1)+"TB":e}_symbolicUnit(e){let t=e.substr(-2);return"MB"==t?e.slice(0,-2)+"m":"GB"==t?e.slice(0,-2)+"g":"TB"==t?e.slice(0,-2)+"t":e}_humanizeName(e){return this.alias={python:"Python",tensorflow:"TensorFlow",pytorch:"PyTorch",lua:"Lua",r:"R","r-base":"R",julia:"Julia",rust:"Rust",cpp:"C++",gcc:"GCC",go:"Go",tester:"Tester",haskell:"Haskell",matlab:"MATLAB",sagemath:"Sage",texlive:"TeXLive",java:"Java",php:"PHP",octave:"Octave",nodejs:"Node",caffe:"Caffe",scheme:"Scheme",scala:"Scala",base:"Base",cntk:"CNTK",h2o:"H2O.AI","triton-server":"Triton Server",digits:"DIGITS","ubuntu-linux":"Ubuntu Linux",tf1:"TensorFlow 1",tf2:"TensorFlow 2",py3:"Python 3",py2:"Python 2",py27:"Python 2.7",py35:"Python 3.5",py36:"Python 3.6",py37:"Python 3.7",py38:"Python 3.8",py39:"Python 3.9",py310:"Python 3.10",lxde:"LXDE",lxqt:"LXQt",xfce:"XFCE",gnome:"GNOME",kde:"KDE","ubuntu16.04":"Ubuntu 16.04","ubuntu18.04":"Ubuntu 18.04","ubuntu20.04":"Ubuntu 20.04",intel:"Intel MKL",2018:"2018",2019:"2019",2020:"2020",2021:"2021",2022:"2022",rocm:"GPU:ROCm",cuda9:"GPU:CUDA9",cuda10:"GPU:CUDA10","cuda10.0":"GPU:CUDA10","cuda10.1":"GPU:CUDA10.1","cuda10.2":"GPU:CUDA10.2","cuda10.3":"GPU:CUDA10.3",cuda11:"GPU:CUDA11","cuda11.0":"GPU:CUDA11","cuda11.1":"GPU:CUDA11.1","cuda11.2":"GPU:CUDA11.2","cuda11.3":"GPU:CUDA11.3",miniconda:"Miniconda","anaconda2018.12":"Anaconda 2018.12","anaconda2019.12":"Anaconda 2019.12","alpine3.8":"Alpine Linux 3.8","alpine3.12":"Alpine Linux 3.12",ngc:"NVidia GPU Cloud",ff:"Research Env."},e in this.alias?this.alias[e]:e}_changeSliderValue(e){let t=this._range[e.id].filter(((t,i)=>i===e._value));this.shadowRoot.querySelector("#modify-image-"+e.id).label=t[0],this.shadowRoot.querySelector("#modify-image-"+e.id).value=t[0]}};e([t({type:Array})],g.prototype,"images",void 0),e([t({type:Array})],g.prototype,"allowed_registries",void 0),e([t({type:Object})],g.prototype,"_boundRequirementsRenderer",void 0),e([t({type:Object})],g.prototype,"_boundControlsRenderer",void 0),e([t({type:Object})],g.prototype,"_boundInstallRenderer",void 0),e([t({type:Array})],g.prototype,"servicePorts",void 0),e([t({type:Number})],g.prototype,"selectedIndex",void 0),e([t({type:Array})],g.prototype,"selectedImages",void 0),e([t({type:Boolean})],g.prototype,"_cuda_gpu_disabled",void 0),e([t({type:Boolean})],g.prototype,"_cuda_fgpu_disabled",void 0),e([t({type:Boolean})],g.prototype,"_rocm_gpu_disabled",void 0),e([t({type:Boolean})],g.prototype,"_tpu_disabled",void 0),e([t({type:Object})],g.prototype,"alias",void 0),e([t({type:Object})],g.prototype,"spinner",void 0),e([t({type:Object})],g.prototype,"indicator",void 0),e([t({type:Object})],g.prototype,"installImageDialog",void 0),e([t({type:Object})],g.prototype,"deleteImageDialog",void 0),e([t({type:Array})],g.prototype,"installImageNameList",void 0),e([t({type:Array})],g.prototype,"deleteImageNameList",void 0),e([t({type:Object})],g.prototype,"deleteAppInfo",void 0),e([t({type:Object})],g.prototype,"deleteAppRow",void 0),e([t({type:Object})],g.prototype,"installImageResource",void 0),e([t({type:Object})],g.prototype,"selectedCheckbox",void 0),e([t({type:Object})],g.prototype,"_grid",void 0),e([t({type:String})],g.prototype,"servicePortsMsg",void 0),e([t({type:Object})],g.prototype,"_range",void 0),e([t({type:Number})],g.prototype,"cpuValue",void 0),g=e([i("backend-ai-environment-list")],g);
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */
let y=class extends a{constructor(){super(),this.resourcePolicy={},this.is_admin=!1,this.active=!1,this.gpu_allocatable=!1,this.gpuAllocationMode="device",this.condition="",this.presetName="",this._boundResourceRenderer=this.resourceRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this)}static get styles(){return[o,r,s,d`
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
          --mdc-on-theme-primary: var(--general-button-background-color);
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

      `]}resourceRenderer(e,t,i){h(p`
        <div class="layout horizontal wrap center">
          <div class="layout horizontal configuration">
            <wl-icon class="fg green">developer_board</wl-icon>
            <span>${this._markIfUnlimited(i.item.resource_slots.cpu)}</span>
            <span class="indicator">${m("general.cores")}</span>
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
      `,e)}controlRenderer(e,t,i){h(p`
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
      `,e)}_indexRenderer(e,t,i){let a=i.index+1;h(p`
        <div>${a}</div>
      `,e)}_launchPresetAddDialog(e){this.shadowRoot.querySelector("#create-preset-dialog").show()}render(){return p`
      <div style="margin:0px;">
        <h4 class="horizontal flex center center-justified layout">
          <span>${m("resourcePreset.ResourcePresets")}</span>
          <span class="flex"></span>
          <mwc-button raised id="add-resource-preset" icon="add" label="${m("resourcePreset.CreatePreset")}" @click="${e=>this._launchPresetAddDialog(e)}"></mwc-button>
        </h4>
        <div>
          <vaadin-grid theme="row-stripes column-borders compact" aria-label="Resource Policy list"
                      .items="${this.resourcePresets}">
            <vaadin-grid-column width="40px" flex-grow="0" header="#" text-align="center" .renderer="${this._indexRenderer}"></vaadin-grid-column>

            <vaadin-grid-column resizable>
              <template class="header">
                <vaadin-grid-sorter path="name">${m("resourcePreset.Name")}</vaadin-grid-sorter>
              </template>
              <template>
                <div class="layout horizontal center flex">
                  <div>[[item.name]]</div>
                </div>
              </template>
            </vaadin-grid-column>

            <vaadin-grid-column width="150px" resizable header="${m("resourcePreset.Resources")}" .renderer="${this._boundResourceRenderer}">
            </vaadin-grid-column>

            <vaadin-grid-column resizable header="${m("general.Control")}" .renderer="${this._boundControlRenderer}">
            </vaadin-grid-column>
          </vaadin-grid>
        </div>
      </div>
      <backend-ai-dialog id="modify-template-dialog" fixed backdrop blockscrolling narrowLayout>
        <span slot="title">${m("resourcePreset.ModifyResourcePreset")}</span>
        <div slot="content">
          <form id="login-form">
            <fieldset>
              <mwc-textfield type="text" name="preset_name" class="modify" id="id-preset-name"
                          label="${m("resourcePreset.PresetName")}"
                          auto-validate required
                          disabled
                          error-message="${m("data.Allowslettersnumbersand-_dot")}"></mwc-textfield>
              <h4>${m("resourcePreset.ResourcePreset")}</h4>
              <div class="horizontal center layout">
                <mwc-textfield id="cpu-resource" class="modify" type="number" label="CPU"
                    min="1" value="1" required validationMessage="${m("resourcePreset.MinimumCPUUnit")}"></mwc-textfield>
                <mwc-textfield id="ram-resource" class="modify" type="number" label="${m("resourcePreset.RAM")}"
                    min="1" value="1" required validationMessage="${m("resourcePreset.MinimumMemUnit")}"></mwc-textfield>
              </div>
              <div class="horizontal center layout">
                <mwc-textfield id="gpu-resource" class="modify" type="number" label="GPU"
                    min="0" value="0" ?disabled=${"fractional"===this.gpuAllocationMode}></mwc-textfield>
                <mwc-textfield id="fgpu-resource" class="modify" type="number" label="fGPU"
                    min="0" value="0" step="0.01" ?disabled=${"fractional"!==this.gpuAllocationMode}></mwc-textfield>
              </div>
              <div class="horizontal center layout">
                <mwc-textfield id="shmem-resource" class="modify" type="number"
                    label="${m("resourcePreset.SharedMemory")}" min="0" step="0.01"
                    validationMessage="${m("resourcePreset.MinimumShmemUnit")}"></mwc-textfield>
              </div>
            </fieldset>
          </form>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout distancing">
          <mwc-button
              unelevated
              icon="check"
              label="${m("button.SaveChanges")}"
              @click="${()=>this._modifyResourceTemplate()}">
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="create-preset-dialog" fixed backdrop blockscrolling narrowLayout>
        <span slot="title">${m("resourcePreset.CreateResourcePreset")}</span>
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
            placeholder="${m("maxLength.255chars")}"
            error-message="${m("data.Allowslettersnumbersand-_")}"
          ></mwc-textfield>
          <h4>${m("resourcePreset.ResourcePreset")}</h4>
          <div class="horizontal center layout">
            <mwc-textfield id="create-cpu-resource" class="create" type="number" label="CPU"
                min="1" value="1" required validationMessage="${m("resourcePreset.MinimumCPUUnit")}"></mwc-textfield>
            <mwc-textfield id="create-ram-resource" class="create" type="number" label="${m("resourcePreset.RAM")}"
                min="1" value="1" required validationMessage="${m("resourcePreset.MinimumMemUnit")}"></mwc-textfield>
          </div>
          <div class="horizontal center layout">
            <mwc-textfield id="create-gpu-resource" class="create" type="number" label="GPU"
                min="0" value="0" ?disabled=${"fractional"===this.gpuAllocationMode}></mwc-textfield>
            <mwc-textfield id="create-fgpu-resource" class="create" type="number" label="fGPU"
                min="0" value="0" step="0.01" ?disabled=${"fractional"!==this.gpuAllocationMode}></mwc-textfield>
          </div>
          <div class="horizontal center layout">
            <mwc-textfield id="create-shmem-resource" class="create" type="number"
                label="${m("resourcePreset.SharedMemory")}" min="0" step="0.01"
                validationMessage="${m("resourcePreset.MinimumShmemUnit")}"></mwc-textfield>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout distancing">
          <mwc-button
              unelevated
              id="create-policy-button"
              icon="add"
              label="${m("button.Add")}"
              @click="${this._createPreset}">
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="delete-resource-preset-dialog" fixed backdrop blockscrolling>
         <span slot="title">${m("dialog.title.LetsDouble-Check")}</span>
         <div slot="content">
            <p>${m("resourcePreset.AboutToDeletePreset")}</p>
            <p style="text-align:center;">${this.presetName}</p>
            <p>${m("dialog.warning.CannotBeUndone")} ${m("dialog.ask.DoYouWantToProceed")}</p>
         </div>
         <div slot="footer" class="horizontal end-justified flex layout">
         <mwc-button
              class="operation"
              label="${m("button.Cancel")}"
              @click="${e=>this._hideDialog(e)}"></mwc-button>
          <mwc-button
              unelevated
              class="operation"
              label="${m("button.Okay")}"
              @click="${e=>this._deleteResourcePresetWithCheck(e)}"></mwc-button>
         </div>
      </backend-ai-dialog>
    `}firstUpdated(){this.notification=globalThis.lablupNotification;let e=this.shadowRoot.querySelectorAll("mwc-textfield");for(const t of e)this._addInputValidator(t)}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._refreshTemplateData(),this.is_admin=globalThis.backendaiclient.is_admin}),!0):(this._refreshTemplateData(),this.is_admin=globalThis.backendaiclient.is_admin,globalThis.backendaiclient.get_resource_slots().then((e=>{this.gpu_allocatable=2!==Object.keys(e).length,Object.keys(e).includes("cuda.shares")?this.gpuAllocationMode="fractional":this.gpuAllocationMode="device"}))))}_launchResourcePresetDialog(e){this.updateCurrentPresetToDialog(e),this.shadowRoot.querySelector("#modify-template-dialog").show()}_launchDeleteResourcePresetDialog(e){const t=e.target.closest("#controls")["preset-name"];this.presetName=t,this.shadowRoot.querySelector("#delete-resource-preset-dialog").show()}_deleteResourcePresetWithCheck(e){globalThis.backendaiclient.resourcePreset.delete(this.presetName).then((e=>{this.shadowRoot.querySelector("#delete-resource-preset-dialog").hide(),this.notification.text="Resource preset is successfully deleted.",this.notification.show(),this._refreshTemplateData()})).catch((e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#delete-resource-preset-dialog").hide(),this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}updateCurrentPresetToDialog(e){const t=e.target.closest("#controls")["preset-name"];let i=globalThis.backendaiclient.utils.gqlToObject(this.resourcePresets,"name")[t];this.shadowRoot.querySelector("#id-preset-name").value=t,this.shadowRoot.querySelector("#cpu-resource").value=i.resource_slots.cpu,this.shadowRoot.querySelector("#gpu-resource").value="cuda.device"in i.resource_slots?i.resource_slots["cuda.device"]:"",this.shadowRoot.querySelector("#fgpu-resource").value="cuda.shares"in i.resource_slots?i.resource_slots["cuda.shares"]:"",this.shadowRoot.querySelector("#ram-resource").value=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(i.resource_slots.mem,"g")),this.shadowRoot.querySelector("#shmem-resource").value=i.shared_memory?parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(i.shared_memory,"g")).toFixed(2):""}_refreshTemplateData(){let e={group:globalThis.backendaiclient.current_group};return globalThis.backendaiclient.resourcePreset.check(e).then((e=>{let t=e.presets;Object.keys(t).map(((e,i)=>{let a=t[e];a.resource_slots.mem_gb=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(a.resource_slots.mem,"g")),a.shared_memory?a.shared_memory_gb=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(a.shared_memory,"g")).toFixed(2):a.shared_memory_gb=null})),this.resourcePresets=t})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}refresh(){this._refreshTemplateData()}_isActive(){return"active"===this.condition}_readResourcePresetInput(){const e=e=>void 0!==e&&e.includes("Unlimited")?"Infinity":e,t=e(this.shadowRoot.querySelector("#cpu-resource").value),i=e(this.shadowRoot.querySelector("#ram-resource").value+"g"),a=e(this.shadowRoot.querySelector("#gpu-resource").value),o=e(this.shadowRoot.querySelector("#fgpu-resource").value);let r=this.shadowRoot.querySelector("#shmem-resource").value;r&&(r+="g");let s={cpu:t,mem:i};null!=a&&""!==a&&"0"!==a&&(s["cuda.device"]=parseInt(a)),null!=o&&""!==o&&"0"!==o&&(s["cuda.shares"]=parseFloat(o));return{resource_slots:JSON.stringify(s),shared_memory:r}}_modifyResourceTemplate(){if(!this._checkFieldValidity("modify"))return;const e=this.shadowRoot.querySelector("#id-preset-name").value,t=void 0!==(i=this.shadowRoot.querySelector("#ram-resource").value+"g")&&i.includes("Unlimited")?"Infinity":i;var i;if(!e)return this.notification.text=c("resourcePreset.NoPresetName"),void this.notification.show();let a=this._readResourcePresetInput();if(parseInt(a.shared_memory)>=parseInt(t))return this.notification.text=c("resourcePreset.MemoryShouldBeLargerThanSHMEM"),void this.notification.show();globalThis.backendaiclient.resourcePreset.mutate(e,a).then((e=>{this.shadowRoot.querySelector("#modify-template-dialog").hide(),this.notification.text=c("resourcePreset.Updated"),this.notification.show(),this._refreshTemplateData()})).catch((e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#modify-template-dialog").hide(),this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_deleteKey(e){const t=e.target.closest("#controls").accessKey;globalThis.backendaiclient.keypair.delete(t).then((e=>{this.refresh()})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_findKeyItem(e){return e.access_key=this}_elapsed(e,t){var i=new Date(e);if("active"==this.condition)var a=new Date;else a=new Date;var o=Math.floor((a.getTime()-i.getTime())/1e3);return Math.floor(o/86400)}_humanReadableTime(e){return(e=new Date(e)).toUTCString()}_indexFrom1(e){return e+1}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":e}_checkFieldValidity(e=""){const t='mwc-textfield[class^="'.concat(e).concat('"]'),i=this.shadowRoot.querySelectorAll(t);let a=!0;for(const e of i)if(a=e.checkValidity(),!a)return e.checkValidity();return a}_createPreset(){if(!this._checkFieldValidity("create"))return;const e=e=>void 0!==(e=e.toString())&&e.includes("Unlimited")?"Infinity":e,t=e(this.shadowRoot.querySelector("#create-preset-name").value),i=e(this.shadowRoot.querySelector("#create-cpu-resource").value),a=e(this.shadowRoot.querySelector("#create-ram-resource").value+"g"),o=e(this.shadowRoot.querySelector("#create-gpu-resource").value),r=e(this.shadowRoot.querySelector("#create-fgpu-resource").value);let s=this.shadowRoot.querySelector("#create-shmem-resource").value;if(s&&(s+="g"),!t)return this.notification.text=c("resourcePreset.NoPresetName"),void this.notification.show();if(parseInt(s)>=parseInt(a))return this.notification.text=c("resourcePreset.MemoryShouldBeLargerThanSHMEM"),void this.notification.show();let l={cpu:i,mem:a};null!=o&&""!==o&&"0"!==o&&(l["cuda.device"]=parseInt(o)),null!=r&&""!==r&&"0"!==r&&(l["cuda.shares"]=parseFloat(r));const n={resource_slots:JSON.stringify(l),shared_memory:s};globalThis.backendaiclient.resourcePreset.add(t,n).then((e=>{this.shadowRoot.querySelector("#create-preset-dialog").hide(),e.create_resource_preset.ok?(this.notification.text=c("resourcePreset.Created"),this.refresh(),this.shadowRoot.querySelector("#create-preset-name").value="",this.shadowRoot.querySelector("#create-cpu-resource").value=1,this.shadowRoot.querySelector("#create-ram-resource").value=1,this.shadowRoot.querySelector("#create-gpu-resource").value=0,this.shadowRoot.querySelector("#create-fgpu-resource").value=0,this.shadowRoot.querySelector("#create-shmem-resource").value=""):this.notification.text=u.relieve(e.create_resource_preset.msg),this.notification.show()}))}};e([t({type:Array})],y.prototype,"resourcePolicy",void 0),e([t({type:Boolean})],y.prototype,"is_admin",void 0),e([t({type:Boolean})],y.prototype,"active",void 0),e([t({type:Boolean})],y.prototype,"gpu_allocatable",void 0),e([t({type:String})],y.prototype,"gpuAllocationMode",void 0),e([t({type:String})],y.prototype,"condition",void 0),e([t({type:String})],y.prototype,"presetName",void 0),e([t({type:Object})],y.prototype,"resourcePresets",void 0),e([t({type:Array})],y.prototype,"_boundResourceRenderer",void 0),e([t({type:Array})],y.prototype,"_boundControlRenderer",void 0),y=e([i("backend-ai-resource-preset-list")],y);let b=class extends a{constructor(){super(),this.indicator=Object(),this.selectedIndex=0,this.boundIsEnabledRenderer=this._isEnabledRenderer.bind(this),this.boundControlsRenderer=this._controlsRenderer.bind(this),this._registryType=Array(),this.allowed_registries=Array(),this.hostnames=Array(),this.projectName="docker",this.registryList=[]}static get styles(){return[o,r,s,d`
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
          --input-font-family: Roboto, Noto, sans-serif;
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
          --label-font-family: Roboto, Noto, sans-serif;
          --label-font-size: 11px;
        }

        mwc-select#select-registry-type {
          width: 100%;
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
          --mdc-on-theme-primary: var(--general-button-background-color);
          --mdc-typography-font-family: var(--general-font-family);
        }
      `]}firstUpdated(){this.notification=globalThis.lablupNotification,this.indicator=globalThis.lablupIndicator}_parseRegistryList(e){return Object.keys(e).map((t=>{return"string"==typeof(i=e[t])||i instanceof String?{"":e[t],hostname:t}:{...e[t],hostname:t};var i}))}_refreshRegistryList(){globalThis.backendaiclient.domain.get(globalThis.backendaiclient._config.domainName,["allowed_docker_registries"]).then((e=>(this.allowed_registries=e.domain.allowed_docker_registries,globalThis.backendaiclient.registry.list()))).then((({result:e})=>{this.registryList=this._parseRegistryList(e),this.hostnames=this.registryList.map((e=>e.hostname)),this.requestUpdate()}))}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._registryType=["docker","harbor","harbor2"]}),!0):(this._refreshRegistryList(),this._registryType=["docker","harbor","harbor2"]))}_getHostname(e){const t=document.createElement("a");return t.href=e,t.hostname}_addRegistry(){const e=this.shadowRoot.querySelector("#add-registry-hostname").value,t=this.shadowRoot.querySelector("#add-registry-url").value,i=this.shadowRoot.querySelector("#add-registry-username").value,a=this.shadowRoot.querySelector("#add-registry-password").value,o=this.shadowRoot.querySelector("#select-registry-type").value,r=this.shadowRoot.querySelector("#add-project-name").value;if(!this.shadowRoot.querySelector("#add-registry-hostname").valid){let e=this.shadowRoot.querySelector("#registry-hostname-validation");return void(e&&(e.style.display="block"))}if(!this.shadowRoot.querySelector("#add-registry-url").valid){let e=this.shadowRoot.querySelector("#registry-url-validation");return void(e&&(e.style.display="block"))}let s={};if(s[""]=t,""!==i&&(s.username=i,""!==a&&(s.password=a)),s.type=o,["harbor","harbor2"].includes(o)){if(!r||""===r)return;s.project=r}if(this.hostnames.includes(e))return this.notification.text=c("registry.RegistryHostnameAlreadyExists"),void this.notification.show();globalThis.backendaiclient.registry.add(e,s).then((({result:t})=>{"ok"===t?(this.notification.text=c("registry.RegistrySuccessfullyAdded"),this.hostnames.push(e),this._refreshRegistryList()):this.notification.text=c("dialog.ErrorOccurred"),this._hideDialogById("#add-registry-dialog"),this.notification.show()}))}_deleteRegistry(){const e=this.shadowRoot.querySelector("#delete-registry").value;this.registryList[this.selectedIndex].hostname===e?globalThis.backendaiclient.registry.delete(e).then((({result:t})=>{"ok"===t?(this.notification.text=c("registry.RegistrySuccessfullyDeleted"),this.hostnames.includes(e)&&this.hostnames.splice(this.hostnames.indexOf(e)),this._refreshRegistryList()):this.notification.text=c("dialog.ErrorOccurred"),this._hideDialogById("#delete-registry-dialog"),this.notification.show()})):(this.notification.text=c("registry.HostnameDoesNotMatch"),this.notification.show()),this.shadowRoot.querySelector("#delete-registry").value=""}async _rescanImage(){let e=await this.indicator.start("indeterminate");e.set(10,c("registry.UpdatingRegistryInfo")),globalThis.backendaiclient.maintenance.rescan_images(this.registryList[this.selectedIndex].hostname).then((({rescan_images:t})=>{if(t.ok){e.set(0,c("registry.RescanImages"));let i=globalThis.backendaiclient.maintenance.attach_background_task(t.task_id);i.addEventListener("task_updated",(t=>{const i=JSON.parse(t.data),a=i.current_progress/i.total_progress;e.set(100*a,c("registry.RescanImages"))})),i.addEventListener("task_done",(t=>{e.set(100,c("registry.RegistryUpdateFinished"))})),i.addEventListener("task_failed",(e=>{throw console.log("task_failed",e.data),new Error("Background Image scanning task has failed")})),i.addEventListener("task_cancelled",(e=>{throw new Error("Background Image scanning task has been cancelled")}))}else e.set(50,c("registry.RegistryUpdateFailed")),e.end(1e3),this.notification.text=u.relieve(t.msg),this.notification.detail=t.msg,this.notification.show()})).catch((t=>{console.log(t),e.set(50,c("registry.RescanFailed")),e.end(1e3),t&&t.message&&(this.notification.text=u.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))}))}_launchDialogById(e){this.shadowRoot.querySelector(e).show()}_hideDialogById(e){this.shadowRoot.querySelector(e).hide()}_toggleProjectNameInput(){let e=this.shadowRoot.querySelector("#select-registry-type"),t=this.shadowRoot.querySelector("#add-project-name");t.disabled=!(e.value&&["harbor","harbor2"].includes(e.value)),this.shadowRoot.querySelector("#project-name-validation").style.display="block",t.disabled?this.shadowRoot.querySelector("#project-name-validation").textContent=c("registry.ForHarborOnly"):this.shadowRoot.querySelector("#project-name-validation").textContent=c("registry.ProjectNameIsRequired")}_validateUrl(){let e=this.shadowRoot.querySelector("#add-registry-url");this.shadowRoot.querySelector("#registry-url-validation").style.display=e.valid?"none":"block"}_validateHostname(){let e=this.shadowRoot.querySelector("#add-registry-hostname").value,t=this.shadowRoot.querySelector("#registry-hostname-validation");t.style.display=e&&""!==e?"none":"block"}_validateProjectName(){let e=this.projectName,t=this.shadowRoot.querySelector("#project-name-validation");t.style.display=e&&""!==e?"none":"block"}toggleRegistry(e,t){e.target.checked?this._changeRegistryState(t,!0):this._changeRegistryState(t,!1)}_changeRegistryState(e,t){if(!0===t)this.allowed_registries.push(e),this.notification.text=c("registry.RegistryTurnedOn");else{let t=this.allowed_registries.indexOf(e);1!==t&&this.allowed_registries.splice(t,1),this.notification.text=c("registry.RegistryTurnedOff")}globalThis.backendaiclient.domain.update(globalThis.backendaiclient._config.domainName,{allowed_docker_registries:this.allowed_registries}).then((e=>{this.notification.show()}))}_indexRenderer(e,t,i){let a=i.index+1;h(p`
        <div>${a}</div>
      `,e)}_hostRenderer(e,t,i){h(p`
        <div>
          ${decodeURIComponent(i.item.hostname)}
        </div>
      `,e)}_registryRenderer(e,t,i){h(p`
        <div>
          ${i.item[""]}
        </div>
      `,e)}_isEnabledRenderer(e,t,i){h(p`
        <div>
          <mwc-switch
              @change="${e=>this.toggleRegistry(e,i.item.hostname)}"
              ?checked="${this.allowed_registries.includes(i.item.hostname)}"></mwc-switch>
        </div>
      `,e)}_controlsRenderer(e,t,i){h(p`
        <div
          id="controls"
          class="layout horizontal flex center"
        >
          <wl-button fab flat inverted
            icon="delete"
            class="fg red"
            @click=${()=>{this.selectedIndex=i.index,this._launchDialogById("#delete-registry-dialog")}}>
                  <wl-icon>delete</wl-icon>

          </wl-button>
          <wl-button fab flat inverted
            icon="refresh"
            class="fg blue"
            @click=${()=>{this.selectedIndex=i.index,this._rescanImage()}}>
            <wl-icon>refresh</wl-icon>
          </wl-button>
        </div>
      `,e)}render(){return p`
      <h4 class="horizontal flex center center-justified layout">
        <span>${m("registry.Registries")}</span>
        <span class="flex"></span>
        <mwc-button raised id="add-registry" label="${m("registry.AddRegistry")}" icon="add"
            @click=${()=>this._launchDialogById("#add-registry-dialog")}></mwc-button>
      </h4>

      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Registry list" .items="${this.registryList}">
        <vaadin-grid-column flex-grow="0" width="40px" header="#" text-align="center" .renderer=${this._indexRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" auto-width header="${m("registry.Hostname")}" .renderer=${this._hostRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="2" auto-width header="${m("registry.RegistryURL")}" resizable .renderer=${this._registryRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="0" auto-width resizable header="${m("registry.Type")}">
          <template>
            <div> [[item.type]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="0" auto-width resizable header="${m("registry.HarborProject")}">
          <template>
            <div> [[item.project]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${m("registry.Username")}">
          <template>
            <div> [[item.username]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${m("registry.Password")}">
          <template>
            <div>
              <input type="password" id="registry-password" readonly value="[[item.password]]"/>
            </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="0" width="60px" header="${m("general.Enabled")}" .renderer=${this.boundIsEnabledRenderer}></vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${m("general.Control")}" .renderer=${this.boundControlsRenderer}>
        </vaadin-grid-column>
      </vaadin-grid>
      <backend-ai-dialog id="add-registry-dialog" fixed backdrop blockscrolling>
        <span slot="title">${m("registry.AddRegistry")}</span>

        <div slot="content" class="login-panel intro centered">
          <wl-textfield
            id="add-registry-hostname"
            class="helper-text"
            type="text"
            label="${m("registry.RegistryHostname")}"
            required
            @click=${this._validateHostname}
            @change=${this._validateHostname}
          ></wl-textfield>
          <wl-label class="helper-text" id="registry-hostname-validation" style="display:none;">${m("registry.DescHostnameIsEmpty")}</wl-label>
          <wl-textfield
            id="add-registry-url"
            class="helper-text"
            label="${m("registry.RegistryURL")}"
            required
            pattern="^(https?):\/\/(([a-zA-Z\d\.]{2,})\.([a-zA-Z]{2,})|(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})(:((6553[0-5])|(655[0-2])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4})))?$";"
            @click=${()=>this._validateUrl()}
            @change=${()=>this._validateUrl()}
          ></wl-textfield>
          <wl-label class="helper-text" id="registry-url-validation" style="display:none;">${m("registry.DescURLStartString")}</wl-label>
         <div class="horizontal layout flex">
          <wl-textfield
            id="add-registry-username"
            type="text"
            label="${m("registry.UsernameOptional")}"
            style="padding-right:10px;"
          ></wl-textfield>
          <wl-textfield
            id="add-registry-password"
            type="password"
            label="${m("registry.PasswordOptional")}"
            style="padding-left:10px;"
          ></wl-textfield>
         </div>
         <mwc-select id="select-registry-type" label="${m("registry.RegistryType")}"
                      @change=${this._toggleProjectNameInput} required
                      validationMessage="${m("registry.PleaseSelectOption")}" value="${this.projectName}">
            ${this._registryType.map((e=>p`
              <mwc-list-item value="${e}" ?selected="${"docker"===e}">${e}</mwc-list-item>
            `))}
          </mwc-select>
          <div class="vertical layout end-justified">
              <wl-textfield
              id="add-project-name"
              class="helper-text"
              type="text"
              label="${m("registry.ProjectName")}"
              required
              ?disabled="${"docker"===this.projectName}"
              @change=${this._validateProjectName}
              ></wl-textfield>
              <wl-label class="helper-text" id="project-name-validation" style="display:block;">${m("registry.ForHarborOnly")}</wl-label>
         </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button unelevated icon="add" label="${m("button.Add")}"
            @click=${this._addRegistry}></mwc-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="delete-registry-dialog" fixed backdrop blockscrolling>
        <span slot="title">${m("dialog.warning.CannotBeUndone")}</span>
        <div slot="content">
          <wl-textfield
            id="delete-registry"
            type="text"
            label="${m("registry.TypeRegistryNameToDelete")}"
          ></wl-textfield>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button unelevated icon="delete" label="${m("button.Delete")}"
              @click=${this._deleteRegistry} style="width:100%;"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}};e([t({type:Object})],b.prototype,"indicator",void 0),e([t({type:Number})],b.prototype,"selectedIndex",void 0),e([t({type:String})],b.prototype,"boundIsEnabledRenderer",void 0),e([t({type:String})],b.prototype,"boundControlsRenderer",void 0),e([t({type:Array})],b.prototype,"_registryType",void 0),e([t({type:Array})],b.prototype,"allowed_registries",void 0),e([t({type:Array})],b.prototype,"hostnames",void 0),e([t({type:String})],b.prototype,"projectName",void 0),b=e([i("backend-ai-registry-list")],b);
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */
let v=class extends a{constructor(){super(),this.images=Object(),this.is_superadmin=!1,this._activeTab="image-lists"}static get styles(){return[o,r,s,d`
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
      `]}static get properties(){return{active:{type:Boolean},_activeTab:{type:Boolean}}}async _viewStateChanged(e){return await this.updateComplete,!1===e||(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_superadmin=globalThis.backendaiclient.is_superadmin}),!0):this.is_superadmin=globalThis.backendaiclient.is_superadmin,!1)}_showTab(e){for(var t=this.shadowRoot.querySelectorAll(".tab-content"),i=0;i<t.length;i++)t[i].style.display="none";this._activeTab=e.title,this.shadowRoot.querySelector("#"+e.title).style.display="block"}render(){return p`
      <lablup-activity-panel noheader narrow autowidth>
        <div slot="message">
          <h3 class="tab horizontal center layout">
            <mwc-tab-bar>
              <mwc-tab title="image-lists" label="${m("environment.Images")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
              <mwc-tab title="resource-template-lists" label="${m("environment.ResourcePresets")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
              ${this.is_superadmin?p`
                <mwc-tab title="registry-lists" label="${m("environment.Registries")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
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
    `}firstUpdated(){}disconnectedCallback(){super.disconnectedCallback()}};e([t({type:String})],v.prototype,"images",void 0),e([t({type:Boolean})],v.prototype,"is_superadmin",void 0),e([t({type:String})],v.prototype,"_activeTab",void 0),v=e([i("backend-ai-environment-view")],v);var f=v;export default f;
