import{_ as e,p as t,c as i,B as a,d as o,I as s,a as l,x as r,e as n,b as d,f as c,t as h,Z as u,h as m,g as p}from"./backend-ai-console-6dec094c.js";import"./iron-resizable-behavior-60d31af0.js";import"./vaadin-grid-1307b1dd.js";import"./paper-dropdown-menu-a208b033.js";import"./iron-iconset-svg-04ff383c.js";import"./label-ed59c1d6.js";import"./radio-behavior-75c9eabe.js";import"./vaadin-grid-sorter-99596383.js";import"./iconset-b6786ef5.js";import"./vaadin-progress-bar-a163d131.js";import"./tab-group-fad89c2c.js";import"./select-8c64db36.js";import"./vaadin-item-40899d51.js";import"./switch-281545d4.js";let g=class extends a{constructor(){super(),this.images=Array(),this.allowed_registries=Array(),this._boundRequirementsRenderer=this.requirementsRenderer.bind(this),this._boundControlsRenderer=this.controlsRenderer.bind(this),this._boundInstallRenderer=this.installRenderer.bind(this),this.servicePorts=Array(),this.selectedIndex=0,this._cuda_gpu_disabled=!1,this._cuda_fgpu_disabled=!1,this._rocm_gpu_disabled=!1,this._tpu_disabled=!1,this.alias=Object(),this.spinner=Object(),this.indicator=Object(),this.installImageDialog=Object(),this.installImageName="",this.installImageResource=Object(),this.selectedCheckbox=Object(),this._grid=Object()}static get styles(){return[o,s,l,r,n,d`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 150px);
        }

        wl-button > wl-icon {
          --icon-size: 24px;
          padding: 0;
        }

        wl-icon {
          --icon-size: 16px;
          padding: 0;
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

        wl-button {
          --button-bg: var(--paper-orange-50);
          --button-bg-hover: var(--paper-orange-100);
          --button-bg-active: var(--paper-orange-600);
          --button-color: #242424;
          color: var(--paper-orange-900);
        }

        backend-ai-dialog {
          --component-min-width: 350px;
        }

        backend-ai-dialog#modify-image-dialog wl-select,
        backend-ai-dialog#modify-image-dialog wl-textfield {
          margin-bottom: 20px;
        }

        wl-select, wl-textfield {
          --input-font-family: Quicksand, Roboto;
        }

        backend-ai-dialog wl-textfield {
          --input-font-size: 14px;
        }

        #modify-app-dialog {
          --component-height: 500px;
          --component-max-height: 550px;
          --component-min-width: 600px;
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
      `]}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":e}_hideDialog(e){e.target.closest("backend-ai-dialog").hide()}_hideDialogById(e){return this.shadowRoot.querySelector(e).hide()}_launchDialogById(e){return this.shadowRoot.querySelector(e).show()}modifyImage(){const e=this.shadowRoot.querySelector("#modify-image-cpu").value,t=this.shadowRoot.querySelector("#modify-image-mem").value,i=this.shadowRoot.querySelector("#modify-image-cuda-gpu").value,a=this.shadowRoot.querySelector("#modify-image-cuda-fgpu").value,o=this.shadowRoot.querySelector("#modify-image-rocm-gpu").value,s=this.shadowRoot.querySelector("#modify-image-tpu").value,{resource_limits:l}=this.images[this.selectedIndex];let r={};const n=this._cuda_gpu_disabled?this._cuda_fgpu_disabled?1:2:this._cuda_fgpu_disabled?2:3;e!==l[0].min&&(r.cpu={min:e});let d=this._symbolicUnit(t);d!==l[n].min&&(r.mem={min:d}),this._cuda_gpu_disabled||i===l[1].min||(r["cuda.device"]={min:i}),this._cuda_fgpu_disabled||a===l[2].min||(r["cuda.shares"]={min:a}),this._rocm_gpu_disabled||o===l[3].min||(r["rocm.device"]={min:o}),this._tpu_disabled||s===l[4].min||(r["tpu.device"]={min:s});const c=this.images[this.selectedIndex];if(0===Object.keys(r).length)return this.notification.text="No changes made",this.notification.show(),void this._hideDialogById("#modify-image-dialog");globalThis.backendaiclient.image.modifyResource(c.registry,c.name,c.tag,r).then(e=>{e.reduce((e,t)=>e&&"ok"===t.result,!0)?(this._getImages(),this.requestUpdate(),this.notification.text="Successfully modified"):this.notification.text="Problem occurred",this.notification.show(),this._hideDialogById("#modify-image-dialog")})}openInstallImageDialog(e){this.selectedIndex=e;let t=this.images[this.selectedIndex];this.installImageName=t.registry+"/"+t.name+":"+t.tag,this.installImageResource={},t.resource_limits.forEach(e=>{this.installImageResource[e.key.replace("_",".")]=e.min}),this.installImageDialog.show()}async _installImage(){this.installImageDialog.hide(),"cuda.device"in this.installImageResource&&"cuda.shares"in this.installImageResource?(this.installImageResource.gpu=0,this.installImageResource.fgpu=this.installImageResource["cuda.shares"]):"cuda.device"in this.installImageResource&&(this.installImageResource.gpu=this.installImageResource["cuda.device"]),this.installImageResource.mem.endsWith("g")?this.installImageResource.mem=this.installImageResource.mem.replace("g",".5g"):this.installImageResource.mem.endsWith("m")&&(this.installImageResource.mem=Number(this.installImageResource.mem.slice(0,-1))+256+"m"),this.installImageResource.domain=globalThis.backendaiclient._config.domainName,this.installImageResource.group_name=globalThis.backendaiclient.current_group,this.notification.text="Installing "+this.installImageName+". It takes time so have a cup of coffee!",this.notification.show();let e=await this.indicator.start("indeterminate");e.set(10,"Downloading..."),globalThis.backendaiclient.getResourceSlots().then(e=>{let t=e;return"cuda.device"in t&&"cuda.shares"in t?"fgpu"in this.installImageResource&&"gpu"in this.installImageResource&&(delete this.installImageResource.gpu,delete this.installImageResource["cuda.device"]):"cuda.device"in t?(delete this.installImageResource.fgpu,delete this.installImageResource["cuda.shares"]):"cuda.shares"in t&&(delete this.installImageResource.gpu,delete this.installImageResource["cuda.device"]),globalThis.backendaiclient.image.install(this.installImageName,this.installImageResource)}).then(t=>{e.set(100,"Install finished."),e.end(1e3),this._getImages()}).catch(t=>{this._uncheckSelectedRow(),this.notification.text=c.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t),e.set(100,h("environment.DescProblemOccurred")),e.end(1e3)})}requirementsRenderer(e,t,i){u(m`
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
        ${i.item.cuda_device_limit_min?m`
           <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <img class="indicator-icon fg green" src="/resources/icons/file_type_cuda.svg" />
                <span>${i.item.cuda_device_limit_min}</span> ~
                <span>${this._markIfUnlimited(i.item.cuda_device_limit_max)}</span>
                <span class="indicator">CUDA GPU</span>
              </div>
            </div>
            `:m``}
        ${i.item.cuda_shares_limit_min?m`
            <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <wl-icon class="fg green">apps</wl-icon>
                <span>${i.item.cuda_shares_limit_min}</span> ~
                <span>${this._markIfUnlimited(i.item.cuda_shares_limit_max)}</span>
                <span class="indicator">CUDA fGPU</span>
              </div>
            </div>
            `:m``}
        ${i.item.rocm_device_limit_min?m`
           <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <img class="indicator-icon fg green" src="/resources/icons/ROCm.png" />
                <span>${i.item.rocm_device_limit_min}</span> ~
                <span>${this._markIfUnlimited(i.item.rocm_device_limit_max)}</span>
                <span class="indicator">ROCm GPU</span>
              </div>
            </div>
            `:m``}
        ${i.item.tpu_device_limit_min?m`
           <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <img class="indicator-icon fg green" src="/resources/icons/tpu.svg" />
                <span>${i.item.tpu_device_limit_min}</span> ~
                <span>${this._markIfUnlimited(i.item.tpu_device_limit_max)}</span>
                <span class="indicator">TPU</span>
              </div>
            </div>
            `:m``}

      `,e)}_setPulldownDefaults(e){this._cuda_gpu_disabled=0===e.filter(e=>"cuda_device"===e.key).length,this._cuda_fgpu_disabled=0===e.filter(e=>"cuda_shares"===e.key).length,this._rocm_gpu_disabled=0===e.filter(e=>"rocm_device"===e.key).length,this._tpu_disabled=0===e.filter(e=>"tpu_device"===e.key).length,this.shadowRoot.querySelector("#modify-image-cpu").value=e[0].min,this._cuda_gpu_disabled||(this.shadowRoot.querySelector("#modify-image-cuda-gpu").value=e[1].min),this._cuda_fgpu_disabled||(this.shadowRoot.querySelector("#modify-image-cuda-fgpu").value=e[2].min),this._rocm_gpu_disabled||(this.shadowRoot.querySelector("#modify-image-rocm-gpu").value=e[3].min),this._tpu_disabled||(this.shadowRoot.querySelector("#modify-image-tpu").value=e[4].min);const t=this._cuda_gpu_disabled?this._cuda_fgpu_disabled?1:2:this._cuda_fgpu_disabled?2:3;this.shadowRoot.querySelector("#modify-image-mem").value=this._addUnit(e[t].min)}_decodeServicePort(){""===this.images[this.selectedIndex].labels["ai.backend.service-ports"]?this.servicePorts=[]:this.servicePorts=this.images[this.selectedIndex].labels["ai.backend.service-ports"].split(",").map(e=>{const t=e.split(":");return{app:t[0],protocol:t[1],port:t[2]}})}_parseServicePort(){const e=this.shadowRoot.querySelector("#modify-app-container").querySelectorAll(".row:not(.header)");return Array.prototype.filter.call(e,e=>(e=>0===Array.prototype.filter.call(e.querySelectorAll("wl-textfield"),(e,t)=>""===e.value||1===t&&!["http","tcp","pty"].includes(e.value)).length)(e)).map(e=>(e=>Array.prototype.map.call(e.querySelectorAll("wl-textfield"),e=>e.value).join(":"))(e)).join(",")}modifyServicePort(){const e=this._parseServicePort(),t=this.images[this.selectedIndex];globalThis.backendaiclient.image.modifyLabel(t.registry,t.name,t.tag,"ai.backend.service-ports",e).then(({result:e})=>{this.notification.text=p("ok"===e?"environment.DescServicePortModified":"dialog.ErrorOccurred"),this._getImages(),this.requestUpdate(),this._clearRows(),this.notification.show(),this._hideDialogById("#modify-app-dialog")})}controlsRenderer(e,t,i){u(m`
        <div
          id="controls"
          class="layout horizontal flex center"
        >
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
      `,e)}installRenderer(e,t,i){u(m`
        <div class="layout horizontal center center-justified" style="margin:0; padding:0;">
          <wl-checkbox id="${i.item.name}" style="--checkbox-size:12px;"
              ?checked="${i.item.installed}"
              ?disabled="${i.item.installed}"
              @click="${e=>{this.openInstallImageDialog(i.index),this.selectedCheckbox=e.target}}">
          </wl-checkbox>
        </div>
      `,e)}render(){return m`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Environments" id="testgrid" .items="${this.images}">
        <vaadin-grid-column width="40px" flex-grow="0" text-align="center" .renderer="${this._boundInstallRenderer}">
          <template class="header">
            <vaadin-grid-sorter path="installed"></vaadin-grid-sorter>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column width="80px" resizable>
          <template class="header">
            <vaadin-grid-sorter path="registry">${h("environment.Registry")}</vaadin-grid-sorter>
          </template>
          <template>
            <div class="layout vertical">
              <span>[[item.registry]]</span>
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column width="60px" resizable>
          <template class="header">
            <vaadin-grid-sorter path="namespace">${h("environment.Namespace")}</vaadin-grid-sorter>
          </template>
          <template>
            <div>[[item.namespace]]</div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable>
          <template class="header">
            <vaadin-grid-sorter path="lang">${h("environment.Language")}</vaadin-grid-sorter>
          </template>
          <template>
            <div>[[item.lang]]</div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="40px" resizable>
          <template class="header">
            <vaadin-grid-sorter path="baseversion">${h("environment.Version")}</vaadin-grid-sorter>
          </template>
          <template>
            <div>[[item.baseversion]]</div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="60px" resizable>
          <template class="header">${h("environment.Base")}</template>
          <template>
            <template is="dom-repeat" items="[[ item.baseimage ]]">
              <lablup-shields app="" color="blue" description="[[item]]"></lablup-shields>
            </template>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="50px" resizable>
          <template class="header">${h("environment.Constraint")}</template>
          <template>
            <template is="dom-if" if="[[item.additional_req]]">
              <lablup-shields app="" color="green" description="[[item.additional_req]]"></lablup-shields>
            </template>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="150px" flex-grow="0" resizable>
          <template class="header">
            ${h("environment.Digest")}
          </template>
          <template>
            <div class="layout vertical">
              <span class="indicator monospace">[[item.digest]]</span>
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column width="150px" flex-grow="0" resizable header="${h("environment.ResourceLimit")}" .renderer="${this._boundRequirementsRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable header="${h("general.Control")}" .renderer=${this._boundControlsRenderer}>
        </vaadin-grid-column>
      </vaadin-grid>
      <backend-ai-dialog id="modify-image-dialog" fixed backdrop blockscrolling>
        <span slot="title">${h("environment.ModifyImage")}</span>
        <div slot="content" style="margin: 0;">
              <div style="display: flex; flex-direction: column;">
                <div style="display: flex;">
                  <wl-select
                    label="CPU Core"
                    id="modify-image-cpu"
                    style="flex: 1"
                  >
                    ${[1,2,3,4,5,6,7,8].map(e=>m`
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
                    ${["64MB","128MB","256MB","512MB","1GB","2GB","4GB","8GB","16GB","32GB","256GB","512GB"].map(e=>m`
                      <option
                        value=${e}
                      >${e}</option>
                    `)}
                  </wl-select>
                </div>
                <div style="display: flex;">
                  <wl-select
                    label="CUDA GPU"
                    id="modify-image-cuda-gpu"
                    style="flex: 1"
                    ?disabled=${this._cuda_gpu_disabled}
                  >
                    ${[0,1,2,3,4,5,6,7].map(e=>m`
                      <option
                        value=${e}
                      >${e}</option>
                    `)}
                  </wl-select>
                  <wl-select
                    label="CUDA fractional GPU"
                    id="modify-image-cuda-fgpu"
                    ?disabled=${this._cuda_fgpu_disabled}
                    style="flex: 1"
                  >
                    ${[0,.1,.2,.5,1,2].map(e=>m`
                      <option
                        value=${e}
                      >${e}</option>
                    `)}
                  </wl-select>
                </div>
                <div style="display: flex;">
                  <wl-select
                    label="ROCm GPU"
                    id="modify-image-rocm-gpu"
                    style="flex: 1"
                    ?disabled=${this._rocm_gpu_disabled}
                  >
                    ${[0,1,2,3,4,5,6,7].map(e=>m`
                      <option
                        value=${e}
                      >${e}</option>
                    `)}
                  </wl-select>
                  <wl-select
                    label="TPU"
                    id="modify-image-tpu"
                    ?disabled=${this._tpu_disabled}
                    style="flex: 1"
                  >
                    ${[0,1,2].map(e=>m`
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
                @click=${()=>this.modifyImage()}
              >
                <wl-icon>check</wl-icon>
                ${h("button.SaveChanges")}
              </wl-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="modify-app-dialog" fixed backdrop>
        <span slot="title">${h("environment.ManageApps")}</span>
        <div slot="content" id="modify-app-container" class="container">
          <div class="row header">
            <div> ${h("environment.AppName")} </div>
            <div> ${h("environment.Protocol")} </div>
            <div> ${h("environment.Port")} </div>
            <div> ${h("environment.Action")} </div>
          </div>
          ${this.servicePorts.map((e,t)=>m`
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
              <wl-icon>remove</wl-icon>
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
        <wl-button slot="footer"
          class="fg orange"
          outlined
          type="button"
          style="box-sizing: border-box; width: 100%;"
          @click=${this.modifyServicePort}
        >
          <wl-icon>check</wl-icon>
          ${h("button.Finish")}
        </wl-button>
      </backend-ai-dialog>
      <backend-ai-dialog id="install-image-dialog" fixed backdrop persistent>
        <span slot="title">Let's double-check</span>
        <div slot="content">
          <p>${h("environment.DescDownloadImage")} <span style="color:blue;">${this.installImageName}</span></p>
          <p>${h("environment.DescSignificantDownloadTime")} ${h("dialog.ask.DoYouWantToProceed")}</p>
        </div>
        <div slot="footer" class="horizontal flex layout">
          <div class="flex"></div>
          <wl-button class="cancel" inverted flat
              @click="${e=>{this._hideDialog(e),this._uncheckSelectedRow()}}">
            ${h("button.Cancel")}
          </wl-button>
          <wl-button class="ok" @click="${()=>this._installImage()}">${h("button.Okay")}</wl-button>
        </div>
      </backend-ai-dialog>
    `}_removeRow(e){const t=e.composedPath();let i=0;for(;"div"!==t[i].localName;)i++;t[i].remove()}_addRow(){const e=this.shadowRoot.querySelector("#modify-app-container"),t=e.children[e.children.length-1],i=this._createRow();e.insertBefore(i,t)}_createRow(){const e=document.createElement("div");e.setAttribute("class","row extra");const t=document.createElement("wl-textfield");t.setAttribute("type","text");const i=document.createElement("wl-textfield");t.setAttribute("type","text");const a=document.createElement("wl-textfield");t.setAttribute("type","number");const o=document.createElement("wl-button");o.setAttribute("class","fg pink"),o.setAttribute("fab",""),o.setAttribute("flat",""),o.addEventListener("click",e=>this._removeRow(e));const s=document.createElement("wl-icon");return s.innerHTML="remove",o.appendChild(s),e.appendChild(a),e.appendChild(i),e.appendChild(t),e.appendChild(o),e}_clearRows(){const e=this.shadowRoot.querySelector("#modify-app-container"),t=e.querySelectorAll(".row");t[t.length-1].querySelectorAll("wl-textfield").forEach(e=>{e.value=""}),e.querySelectorAll(".row.extra").forEach(e=>{e.remove()})}_uncheckSelectedRow(){this.selectedCheckbox.checked=!1}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.indicator=globalThis.lablupIndicator,this.notification=globalThis.lablupNotification,this.installImageDialog=this.shadowRoot.querySelector("#install-image-dialog"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._getImages()},!0):this._getImages(),this._grid=this.shadowRoot.querySelector("#testgrid"),this._grid.addEventListener("sorter-changed",e=>{this._refreshSorter(e)})}_refreshSorter(e){let t=e.target,i=t.path.toString();t.direction&&("asc"===t.direction?this._grid.items.sort((e,t)=>e[i]<t[i]?-1:e[i]>t[i]?1:0):this._grid.items.sort((e,t)=>e[i]>t[i]?-1:e[i]<t[i]?1:0))}async _viewStateChanged(e){await this.updateComplete}_getImages(){this.spinner.show(),globalThis.backendaiclient.domain.get(globalThis.backendaiclient._config.domainName,["allowed_docker_registries"]).then(e=>(this.allowed_registries=e.domain.allowed_docker_registries,globalThis.backendaiclient.image.list(["name","tag","registry","digest","installed","labels { key value }","resource_limits { key min max }"],!1,!0))).then(e=>{let t=e.images,i=[];t.forEach(e=>{if(this.allowed_registries.includes(e.registry)){let t=e.tag.split("-");void 0!==t[1]?(e.baseversion=t[0],e.baseimage=t[1],void 0!==t[2]&&(e.additional_req=t[2].toUpperCase())):e.baseversion=e.tag;let a=e.name.split("/");void 0!==a[1]?(e.namespace=a[0],e.lang=a.slice(1).join("")):(e.namespace="",e.lang=a[0]);let o=e.lang.split("-"),s=[this._humanizeName(e.baseimage)];void 0!==o[1]&&(e.lang=o[1],s.push(this._humanizeName(o[0]))),e.baseimage=s,e.lang=this._humanizeName(e.lang),e.resource_limits.forEach(t=>{0==t.max&&(t.max="∞"),"cuda.device"==t.key&&(t.key="cuda_device"),"cuda.shares"==t.key&&(t.key="cuda_shares"),"rocm.device"==t.key&&(t.key="rocm_device"),"tpu.device"==t.key&&(t.key="tpu_device"),e[t.key+"_limit_min"]=this._addUnit(t.min),e[t.key+"_limit_max"]=this._addUnit(t.max)}),e.labels=e.labels.reduce((e,t)=>Object.assign(Object.assign({},e),{[t.key]:t.value}),{}),i.push(e)}}),this.images=i,this.spinner.hide()}).catch(e=>{console.log(e),void 0!==e.message?(this.notification.text=c.relieve(e.title),this.notification.detail=e.message):this.notification.text=c.relieve("Problem occurred during image metadata loading."),this.notification.show(!0,e),this.spinner.hide()})}_addUnit(e){let t=e.substr(-1);return"m"==t?e.slice(0,-1)+"MB":"g"==t?e.slice(0,-1)+"GB":"t"==t?e.slice(0,-1)+"TB":e}_symbolicUnit(e){let t=e.substr(-2);return"MB"==t?e.slice(0,-2)+"m":"GB"==t?e.slice(0,-2)+"g":"TB"==t?e.slice(0,-2)+"t":e}_humanizeName(e){return this.alias={python:"Python",tensorflow:"TensorFlow",pytorch:"PyTorch",lua:"Lua",r:"R","r-base":"R",julia:"Julia",rust:"Rust",cpp:"C++",gcc:"GCC",go:"Go",tester:"Tester",haskell:"Haskell",matlab:"MATLAB",sagemath:"Sage",texlive:"TeXLive",java:"Java",php:"PHP",octave:"Octave",nodejs:"Node",caffe:"Caffe",scheme:"Scheme",scala:"Scala",base:"Base",cntk:"CNTK",h2o:"H2O.AI",digits:"DIGITS","ubuntu-linux":"Ubuntu Linux",tf1:"TensorFlow 1",tf2:"TensorFlow 2",py3:"Python 3",py2:"Python 2",py27:"Python 2.7",py35:"Python 3.5",py36:"Python 3.6",py37:"Python 3.7",py38:"Python 3.8",py39:"Python 3.9",lxde:"LXDE",lxqt:"LXQt",xfce:"XFCE",gnome:"GNOME",kde:"KDE","ubuntu16.04":"Ubuntu 16.04","ubuntu18.04":"Ubuntu 18.04","ubuntu20.04":"Ubuntu 20.04",intel:"Intel MKL",2018:"2018",2019:"2019",2020:"2020",2021:"2021",2022:"2022",rocm:"GPU:ROCm",cuda9:"GPU:CUDA9",cuda10:"GPU:CUDA10","cuda10.0":"GPU:CUDA10","cuda10.1":"GPU:CUDA10.1","cuda10.2":"GPU:CUDA10.2","cuda10.3":"GPU:CUDA10.3",cuda11:"GPU:CUDA11","cuda11.0":"GPU:CUDA11",miniconda:"Miniconda","anaconda2018.12":"Anaconda 2018.12","anaconda2019.12":"Anaconda 2019.12","alpine3.8":"Alpine Linux 3.8",ngc:"NVidia GPU Cloud",ff:"Research Env."},e in this.alias?this.alias[e]:e}};e([t({type:Array})],g.prototype,"images",void 0),e([t({type:Array})],g.prototype,"allowed_registries",void 0),e([t({type:Object})],g.prototype,"_boundRequirementsRenderer",void 0),e([t({type:Object})],g.prototype,"_boundControlsRenderer",void 0),e([t({type:Object})],g.prototype,"_boundInstallRenderer",void 0),e([t({type:Array})],g.prototype,"servicePorts",void 0),e([t({type:Number})],g.prototype,"selectedIndex",void 0),e([t({type:Boolean})],g.prototype,"_cuda_gpu_disabled",void 0),e([t({type:Boolean})],g.prototype,"_cuda_fgpu_disabled",void 0),e([t({type:Boolean})],g.prototype,"_rocm_gpu_disabled",void 0),e([t({type:Boolean})],g.prototype,"_tpu_disabled",void 0),e([t({type:Object})],g.prototype,"alias",void 0),e([t({type:Object})],g.prototype,"spinner",void 0),e([t({type:Object})],g.prototype,"indicator",void 0),e([t({type:Object})],g.prototype,"installImageDialog",void 0),e([t({type:String})],g.prototype,"installImageName",void 0),e([t({type:Object})],g.prototype,"installImageResource",void 0),e([t({type:Object})],g.prototype,"selectedCheckbox",void 0),e([t({type:Object})],g.prototype,"_grid",void 0),g=e([i("backend-ai-environment-list")],g);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let y=class extends a{constructor(){super(),this.resourcePolicy={},this.is_admin=!1,this.active=!1,this.gpu_allocatable=!1,this.gpuAllocationMode="device",this.condition="",this.presetName="",this._boundResourceRenderer=this.resourceRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this)}static get styles(){return[o,s,l,d`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 225px);
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

        mwc-textfield {
          width: 100%;
          --mdc-theme-primary: #242424;
          --mdc-text-field-fill-color: transparent;
        }

        mwc-textfield.yellow {
          --mdc-theme-primary: var(--paper-yellow-600) !important;
        }

        wl-button.create-button {
          --button-bg: white;
          --button-bg-hover: var(--paper-yellow-100);
          --button-bg-active: var(--paper-yellow-600);
        }

        wl-button {
          color: var(--paper-yellow-600);
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
      `]}resourceRenderer(e,t,i){u(m`
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
        ${i.item.resource_slots["cuda.device"]?m`
          <div class="layout horizontal configuration">
            <wl-icon class="fg green">view_module</wl-icon>
            <span>${this._markIfUnlimited(i.item.resource_slots["cuda.device"])}</span>
            <span class="indicator">GPU</span>
          </div>
        `:m``}
        ${i.item.resource_slots["cuda.shares"]?m`
          <div class="layout horizontal configuration">
            <wl-icon class="fg green">view_module</wl-icon>
            <span>${this._markIfUnlimited(i.item.resource_slots["cuda.shares"])}</span>
            <span class="indicator">GPU</span>
          </div>
        `:m``}
        ${i.item.shared_memory?m`
          <div class="layout horizontal configuration">
            <wl-icon class="fg blue">memory</wl-icon>
            <span>${i.item.shared_memory_gb}</span>
            <span class="indicator">GB</span>
          </div>
        `:m``}
        </div>
      `,e)}controlRenderer(e,t,i){u(m`
        <div id="controls" class="layout horizontal flex center"
            .preset-name="${i.item.name}">
          ${this.is_admin?m`
            <wl-button class="fg blue controls-running" fab flat inverted
              @click="${e=>this._launchResourcePresetDialog(e)}">
                <wl-icon>settings</wl-icon>
            </wl-button>
            <wl-button class="fg red controls-running" fab flat inverted
              @click="${e=>this._launchDeleteResourcePresetDialog(e)}">
                <wl-icon>delete</wl-icon>
            </wl-button>
          `:m``}
        </div>
      `,e)}_indexRenderer(e,t,i){let a=i.index+1;u(m`
        <div>${a}</div>
      `,e)}_launchPresetAddDialog(e){this.shadowRoot.querySelector("#create-preset-dialog").show()}render(){return m`
      <wl-card>
        <h4 class="horizontal flex center center-justified layout">
          <span>${h("resourcePreset.ResourcePresets")}</span>
          <span class="flex"></span>
          <wl-button class="fg orange" id="add-resource-preset" outlined @click="${e=>this._launchPresetAddDialog(e)}">
            <wl-icon>add</wl-icon>
            ${h("resourcePreset.CreatePreset")}
          </wl-button>
        </h4>
        <div>
          <vaadin-grid theme="row-stripes column-borders compact" aria-label="Resource Policy list"
                      .items="${this.resourcePresets}">
            <vaadin-grid-column width="40px" flex-grow="0" header="#" text-align="center" .renderer="${this._indexRenderer}"></vaadin-grid-column>

            <vaadin-grid-column resizable>
              <template class="header">
                <vaadin-grid-sorter path="name">${h("resourcePreset.Name")}</vaadin-grid-sorter>
              </template>
              <template>
                <div class="layout horizontal center flex">
                  <div>[[item.name]]</div>
                </div>
              </template>
            </vaadin-grid-column>

            <vaadin-grid-column width="150px" resizable header="${h("resourcePreset.Resources")}" .renderer="${this._boundResourceRenderer}">
            </vaadin-grid-column>

            <vaadin-grid-column resizable header="${h("general.Control")}" .renderer="${this._boundControlRenderer}">
            </vaadin-grid-column>
          </vaadin-grid>
        </div>
      </wl-card>
      <backend-ai-dialog id="modify-template-dialog" fixed backdrop blockscrolling>
        <span slot="title">${h("resourcePreset.ModifyResourcePreset")}</span>
        <div slot="content" class="login-panel intro centered">
          <form id="login-form">
            <fieldset>
              <mwc-textfield type="text" name="preset_name" id="id_preset_name" label="${h("resourcePreset.PresetName")}"
                          auto-validate required
                          pattern="[a-zA-Z0-9_-]+"
                          disabled
                          error-message="Policy name only accepts letters, numbers, underscore, and dash"></mwc-textfield>
              <h4>${h("resourcePreset.ResourcePreset")}</h4>
              <div class="horizontal center layout">
                <mwc-textfield id="cpu-resource" type="number" label="CPU"
                    min="1" value="1"></mwc-textfield>
                <mwc-textfield id="ram-resource" type="number" label="RAM (GB)"
                    min="1" value="1"></mwc-textfield>
              </div>
              <div class="horizontal center layout">
                <mwc-textfield id="gpu-resource" type="number" label="GPU"
                    min="0" value="0" ?disabled=${"fractional"===this.gpuAllocationMode}></mwc-textfield>
                <mwc-textfield id="fgpu-resource" type="number" label="fGPU"
                    min="0" value="0" ?disabled=${"fractional"!==this.gpuAllocationMode}></mwc-textfield>
              </div>
              <div class="horizontal center layout">
                <mwc-textfield id="shmem-resource" type="number" label="Shared Memory (GB)" min="0"></mwc-textfield>
              </div>
              <br/><br/>
              <wl-button class="fg orange create-button full-size" outlined type="button"
                @click="${()=>this._modifyResourceTemplate()}">
                <wl-icon>check</wl-icon>
                ${h("button.SaveChanges")}
              </wl-button>
            </fieldset>
          </form>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="create-preset-dialog" fixed backdrop blockscrolling>
        <span slot="title">${h("resourcePreset.CreateResourcePreset")}</span>
        <div slot="content">
          <mwc-textfield
            type="text"
            name="preset_name"
            id="create-preset-name"
            label="Preset Name"
            auto-validate
            required
            pattern="[a-zA-Z0-9-_]+"
            error-message="Preset name only accepts letters and numbers"
          ></mwc-textfield>
          <h4>${h("resourcePreset.ResourcePreset")}</h4>
          <div class="horizontal center layout">
            <mwc-textfield id="create-cpu-resource" type="number" label="CPU"
                min="1" value="1"></mwc-textfield>
            <mwc-textfield id="create-ram-resource" type="number" label="RAM (GB)"
                min="1" value="1"></mwc-textfield>
          </div>
          <div class="horizontal center layout">
            <mwc-textfield id="create-gpu-resource" type="number" label="GPU"
                min="0" value="0" ?disabled=${"fractional"===this.gpuAllocationMode}></mwc-textfield>
            <mwc-textfield id="create-fgpu-resource" type="number" label="fGPU"
                min="0" value="0" ?disabled=${"fractional"!==this.gpuAllocationMode}></mwc-textfield>
          </div>
          <div class="horizontal center layout">
            <mwc-textfield id="create-shmem-resource" type="number" label="Shared Memory (GB)" min="0"></mwc-textfield>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <wl-button
            class="fg orange create-button full-size"
            id="create-policy-button"
            outlined
            type="button"
            @click="${this._createPreset}"
          >
            <wl-icon>add</wl-icon>
            ${h("button.Add")}
          </wl-button>
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
            <wl-button class="fg orange cancel" inverted flat @click="${e=>this._hideDialog(e)}">${h("button.Cancel")}</wl-button>
            <wl-button class="fg orange ok" @click="${e=>this._deleteResourcePresetWithCheck(e)}">${h("button.Okay")}</wl-button>
         </div>
      </backend-ai-dialog>
    `}firstUpdated(){this.notification=globalThis.lablupNotification;let e=this.shadowRoot.querySelectorAll("mwc-textfield");for(const t of e)this._addInputValidator(t)}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._refreshTemplateData(),this.is_admin=globalThis.backendaiclient.is_admin},!0):(this._refreshTemplateData(),this.is_admin=globalThis.backendaiclient.is_admin,globalThis.backendaiclient.getResourceSlots().then(e=>{this.gpu_allocatable=2!==Object.keys(e).length,Object.keys(e).includes("cuda.shares")?this.gpuAllocationMode="fractional":this.gpuAllocationMode="device"})))}_hideDialog(e){e.target.closest("backend-ai-dialog").hide()}_launchResourcePresetDialog(e){this.updateCurrentPresetToDialog(e),this.shadowRoot.querySelector("#modify-template-dialog").show()}_launchDeleteResourcePresetDialog(e){const t=e.target.closest("#controls")["preset-name"];this.presetName=t,this.shadowRoot.querySelector("#delete-resource-preset-dialog").show()}_deleteResourcePresetWithCheck(e){globalThis.backendaiclient.resourcePreset.delete(this.presetName).then(e=>{this.shadowRoot.querySelector("#delete-resource-preset-dialog").hide(),this.notification.text="Resource preset is successfully deleted.",this.notification.show(),this._refreshTemplateData()}).catch(e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#delete-resource-preset-dialog").hide(),this.notification.text=c.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}updateCurrentPresetToDialog(e){const t=e.target.closest("#controls")["preset-name"];let i=globalThis.backendaiclient.utils.gqlToObject(this.resourcePresets,"name")[t];console.log(i),this.shadowRoot.querySelector("#id_preset_name").value=t,this.shadowRoot.querySelector("#cpu-resource").value=i.resource_slots.cpu,"cuda.device"in i.resource_slots?this.shadowRoot.querySelector("#gpu-resource").value=i.resource_slots["cuda.device"]:this.shadowRoot.querySelector("#gpu-resource").value="","cuda.shares"in i.resource_slots?this.shadowRoot.querySelector("#fgpu-resource").value=i.resource_slots["cuda.shares"]:this.shadowRoot.querySelector("#fgpu-resource").value="",this.shadowRoot.querySelector("#ram-resource").value=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(i.resource_slots.mem,"g")),i.shared_memory?this.shadowRoot.querySelector("#shmem-resource").value=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(i.shared_memory,"g")).toFixed(2):this.shadowRoot.querySelector("#shmem-resource").value=""}_refreshTemplateData(){let e={group:globalThis.backendaiclient.current_group};return globalThis.backendaiclient.resourcePreset.check(e).then(e=>{let t=e.presets;Object.keys(t).map((e,i)=>{let a=t[e];a.resource_slots.mem_gb=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(a.resource_slots.mem,"g")),a.shared_memory?a.shared_memory_gb=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(a.shared_memory,"g")).toFixed(2):a.shared_memory_gb=null}),this.resourcePresets=t}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=c.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}refresh(){this._refreshTemplateData()}_isActive(){return"active"===this.condition}_readResourcePresetInput(){const e=e=>void 0!==e&&e.includes("Unlimited")?"Infinity":e,t=e(this.shadowRoot.querySelector("#cpu-resource").value),i=e(this.shadowRoot.querySelector("#ram-resource").value+"g"),a=e(this.shadowRoot.querySelector("#gpu-resource").value),o=e(this.shadowRoot.querySelector("#fgpu-resource").value);let s=this.shadowRoot.querySelector("#shmem-resource").value;s&&(s+="g");let l={cpu:t,mem:i};null!=a&&""!==a&&"0"!==a&&(l["cuda.device"]=parseInt(a)),null!=o&&""!==o&&"0"!==o&&(l["cuda.shares"]=parseFloat(o));return{resource_slots:JSON.stringify(l),shared_memory:s}}_modifyResourceTemplate(){const e=this.shadowRoot.querySelector("#id_preset_name").value,t=void 0!==(i=this.shadowRoot.querySelector("#ram-resource").value+"g")&&i.includes("Unlimited")?"Infinity":i;var i;if(!e)return this.notification.text="No preset name",void this.notification.show();let a=this._readResourcePresetInput();if(parseInt(a.shared_memory)>=parseInt(t))return this.notification.text="Memory should be larger than shared memory",void this.notification.show();globalThis.backendaiclient.resourcePreset.mutate(e,a).then(e=>{this.shadowRoot.querySelector("#modify-template-dialog").hide(),this.notification.text="Resource preset successfully updated.",this.notification.show(),this._refreshTemplateData()}).catch(e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#modify-template-dialog").hide(),this.notification.text=c.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_deleteKey(e){const t=e.target.closest("#controls").accessKey;globalThis.backendaiclient.keypair.delete(t).then(e=>{this.refresh()}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=c.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_findKeyItem(e){return e.access_key=this}_elapsed(e,t){var i=new Date(e);if("active"==this.condition)var a=new Date;else a=new Date;var o=Math.floor((a.getTime()-i.getTime())/1e3);return Math.floor(o/86400)}_humanReadableTime(e){return(e=new Date(e)).toUTCString()}_indexFrom1(e){return e+1}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":e}_createPreset(){const e=e=>void 0!==(e=e.toString())&&e.includes("Unlimited")?"Infinity":e,t=e(this.shadowRoot.querySelector("#create-preset-name").value),i=e(this.shadowRoot.querySelector("#create-cpu-resource").value),a=e(this.shadowRoot.querySelector("#create-ram-resource").value+"g"),o=e(this.shadowRoot.querySelector("#create-gpu-resource").value),s=e(this.shadowRoot.querySelector("#create-fgpu-resource").value);let l=this.shadowRoot.querySelector("#create-shmem-resource").value;if(l&&(l+="g"),!t)return this.notification.text="No preset name",void this.notification.show();if(l>=a)return this.notification.text="Memory should be larger than shared memory",void this.notification.show();let r={cpu:i,mem:a};null!=o&&""!==o&&"0"!==o&&(r["cuda.device"]=parseInt(o)),null!=s&&""!==s&&"0"!==s&&(r["cuda.shares"]=parseFloat(s));const n={resource_slots:JSON.stringify(r),shared_memory:l};globalThis.backendaiclient.resourcePreset.add(t,n).then(e=>{this.shadowRoot.querySelector("#create-preset-dialog").hide(),e.create_resource_preset.ok?(this.notification.text="Resource preset successfully created",this.refresh(),this.shadowRoot.querySelector("#create-preset-name").value="",this.shadowRoot.querySelector("#create-cpu-resource").value=1,this.shadowRoot.querySelector("#create-ram-resource").value=1,this.shadowRoot.querySelector("#create-gpu-resource").value=0,this.shadowRoot.querySelector("#create-fgpu-resource").value=0,this.shadowRoot.querySelector("#create-shmem-resource").value=""):this.notification.text=c.relieve(e.create_resource_preset.msg),this.notification.show()})}};e([t({type:Array})],y.prototype,"resourcePolicy",void 0),e([t({type:Boolean})],y.prototype,"is_admin",void 0),e([t({type:Boolean})],y.prototype,"active",void 0),e([t({type:Boolean})],y.prototype,"gpu_allocatable",void 0),e([t({type:String})],y.prototype,"gpuAllocationMode",void 0),e([t({type:String})],y.prototype,"condition",void 0),e([t({type:String})],y.prototype,"presetName",void 0),e([t({type:Object})],y.prototype,"resourcePresets",void 0),e([t({type:Array})],y.prototype,"_boundResourceRenderer",void 0),e([t({type:Array})],y.prototype,"_boundControlRenderer",void 0),y=e([i("backend-ai-resource-preset-list")],y);let b=class extends a{constructor(){super(),this.indicator=Object(),this.selectedIndex=0,this.boundIsEnabledRenderer=this._isEnabledRenderer.bind(this),this.boundControlsRenderer=this._controlsRenderer.bind(this),this._registryType=Array(),this.allowed_registries=Array(),this.registryList=[]}static get styles(){return[o,s,l,d`
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
          width: 167px;
          padding-right: 10px;
          --mdc-select-fill-color: transparent;
          --mdc-theme-primary: var(--paper-orange-400);
        }

        mwc-list-item {
          height: 30px;
          --mdc-list-item-graphic-margin: 0px;
        }
      `]}firstUpdated(){this.notification=globalThis.lablupNotification,this.indicator=globalThis.lablupIndicator}_parseRegistryList(e){return Object.keys(e).map(t=>{return"string"==typeof(i=e[t])||i instanceof String?{"":e[t],hostname:t}:Object.assign(Object.assign({},e[t]),{hostname:t});var i})}_refreshRegistryList(){globalThis.backendaiclient.domain.get(globalThis.backendaiclient._config.domainName,["allowed_docker_registries"]).then(e=>(this.allowed_registries=e.domain.allowed_docker_registries,console.log(this.allowed_registries),globalThis.backendaiclient.registry.list())).then(({result:e})=>{this.registryList=this._parseRegistryList(e),this.requestUpdate()})}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._registryType=["docker","harbor"]},!0):(this._refreshRegistryList(),this._registryType=["docker","harbor"]))}_getHostname(e){const t=document.createElement("a");return t.href=e,t.hostname}_addRegistry(){const e=this.shadowRoot.querySelector("#add-registry-hostname").value,t=this.shadowRoot.querySelector("#add-registry-url").value,i=this.shadowRoot.querySelector("#add-registry-username").value,a=this.shadowRoot.querySelector("#add-registry-password").value,o=this.shadowRoot.querySelector("#select-registry-type").value,s=this.shadowRoot.querySelector("#add-project-name").value;if(!this.shadowRoot.querySelector("#add-registry-hostname").valid){let e=this.shadowRoot.querySelector("#registry-hostname-validation");return void(e&&(e.style.display="block"))}if(!this.shadowRoot.querySelector("#add-registry-url").valid){let e=this.shadowRoot.querySelector("#registry-url-validation");return void(e&&(e.style.display="block"))}let l={};if(l[""]=t,""!==i&&(l.username=i,""!==a&&(l.password=a)),l.type=o,"harbor"===o){if(!s||""===s)return;l.project=s}globalThis.backendaiclient.registry.add(e,l).then(({result:e})=>{"ok"===e?(this.notification.text="Registry successfully added",this._refreshRegistryList()):this.notification.text="Error occurred",this._hideDialogById("#add-registry-dialog"),this.notification.show()})}_deleteRegistry(){const e=this.shadowRoot.querySelector("#delete-registry").value;this.registryList[this.selectedIndex].hostname===encodeURIComponent(e)?globalThis.backendaiclient.registry.delete(e).then(({result:e})=>{"ok"===e?(this.notification.text="Registry successfully deleted",this._refreshRegistryList()):this.notification.text="Error Occurred",this._hideDialogById("#delete-registry-dialog"),this.notification.show()}):(this.notification.text="Hostname does not match!",this.notification.show())}async _rescanImage(){let e=await this.indicator.start("indeterminate");e.set(10,"Updating registry information..."),globalThis.backendaiclient.maintenance.rescan_images(this.registryList[this.selectedIndex].hostname).then(({rescan_images:t})=>{t.ok?e.set(100,"Registry update finished."):(e.set(50,"Registry update failed."),e.end(1e3),this.notification.text=c.relieve(t.msg),this.notification.detail=t.msg,this.notification.show())}).catch(t=>{console.log(t),e.set(50,"Rescan failed."),e.end(1e3),t&&t.message&&(this.notification.text=c.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))})}_launchDialogById(e){this.shadowRoot.querySelector(e).show()}_hideDialogById(e){this.shadowRoot.querySelector(e).hide()}_toggleProjectNameInput(){let e=this.shadowRoot.querySelector("#select-registry-type"),t=this.shadowRoot.querySelector("#add-project-name");t.disabled=!(e.value&&"harbor"===e.value),this.shadowRoot.querySelector("#project-name-validation").style.display="block",t.disabled?this.shadowRoot.querySelector("#project-name-validation").textContent=p("registry.ForHarborOnly"):this.shadowRoot.querySelector("#project-name-validation").textContent=p("registry.ProjectNameIsRequired")}_validateUrl(){let e=this.shadowRoot.querySelector("#add-registry-url").value,t=this.shadowRoot.querySelector("#registry-url-validation"),i=new RegExp("^(http|https|ftp)://[a-zA-Z0-9-.]+.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?/?([a-zA-Z0-9-._?,'/\\+&amp;%$#=~])*$");e&&e.match(i)?(this.shadowRoot.querySelector("#add-registry-url").invalid=!1,t.style.display="none"):(this.shadowRoot.querySelector("#add-registry-url").invalid=!0,t.style.display="block")}_validateHostname(){let e=this.shadowRoot.querySelector("#add-registry-hostname").value,t=this.shadowRoot.querySelector("#registry-hostname-validation");t.style.display=e&&""!==e?"none":"block"}_validateProjectName(){let e=this.shadowRoot.querySelector("#add-project-name").value,t=this.shadowRoot.querySelector("#project-name-validation");t.style.display=e&&""!==e?"none":"block"}toggleRegistry(e,t){console.log(e,t),e.target.checked?this._changeRegistryState(t,!0):this._changeRegistryState(t,!1)}_changeRegistryState(e,t){if(!0===t)this.allowed_registries.push(e),this.notification.text=p("registry.RegistryTurnedOn");else{let t=this.allowed_registries.indexOf(e);1!==t&&this.allowed_registries.splice(t,1),this.notification.text=p("registry.RegistryTurnedOff")}globalThis.backendaiclient.domain.modify(globalThis.backendaiclient._config.domainName,{allowed_docker_registries:this.allowed_registries}).then(e=>{this.notification.show()})}_indexRenderer(e,t,i){let a=i.index+1;u(m`
        <div>${a}</div>
      `,e)}_hostRenderer(e,t,i){u(m`
        <div>
          ${decodeURIComponent(i.item.hostname)}
        </div>
      `,e)}_registryRenderer(e,t,i){u(m`
        <div>
          ${i.item[""]}
        </div>
      `,e)}_isEnabledRenderer(e,t,i){u(m`
        <div>
           <wl-switch @change="${e=>this.toggleRegistry(e,i.item.hostname)}" ?checked="${this.allowed_registries.includes(i.item.hostname)}"></wl-switch>
        </div>
      `,e)}_controlsRenderer(e,t,i){u(m`
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
      `,e)}render(){return m`
      <h4 class="horizontal flex center center-justified layout">
        <span>${h("registry.Registries")}</span>
        <span class="flex"></span>
        <wl-button
          class="fg orange"
          id="add-registry"
          outlined
          @click=${()=>this._launchDialogById("#add-registry-dialog")}
        >
          <wl-icon>add</wl-icon>
          ${h("registry.AddRegistry")}
        </wl-button>
      </h4>

      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Registry list" .items="${this.registryList}">
        <vaadin-grid-column flex-grow="0" width="40px" header="#" text-align="center" .renderer=${this._indexRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${h("registry.Hostname")}" .renderer=${this._hostRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="2" auto-width header="${h("registry.RegistryURL")}" resizable .renderer=${this._registryRenderer}>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="0" auto-width resizable header="${h("registry.Type")}">
          <template>
            <div> [[item.type]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="0" auto-width resizable header="${h("registry.HarborProject")}">
          <template>
            <div> [[item.project]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${h("registry.Username")}">
          <template>
            <div> [[item.username]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${h("registry.Password")}">
          <template>
            <div> [[item.password]] </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column flex-grow="0" width="60px" header="${h("general.Enabled")}" .renderer=${this.boundIsEnabledRenderer}></vaadin-grid-column>
        <vaadin-grid-column flex-grow="1" header="${h("general.Control")}" .renderer=${this.boundControlsRenderer}>
        </vaadin-grid-column>
      </vaadin-grid>
      <backend-ai-dialog id="add-registry-dialog" fixed backdrop blockscrolling>
        <span slot="title">${h("registry.AddRegistry")}</span>

        <div slot="content" class="login-panel intro centered">
          <wl-textfield
            id="add-registry-hostname"
            class="helper-text"
            type="text"
            label="${h("registry.RegistryHostname")}"
            required
            @click=${this._validateHostname}
            @change=${this._validateHostname}
          ></wl-textfield>
          <wl-label class="helper-text" id="registry-hostname-validation" style="display:none;">${h("registry.DescHostnameIsEmpty")}</wl-label>
          <wl-textfield
            id="add-registry-url"
            class="helper-text"
            label="${h("registry.RegistryURL")}"
            required
            pattern="^(http|https)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?/?([a-zA-Z0-9\-\._\?\,\'/\\\+&amp;%\$#\=~])*$"
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
          ></wl-textfield>
          <wl-textfield
            id="add-registry-password"
            type="password"
            label="${h("registry.PasswordOptional")}"
            style="padding-left:10px;"
          ></wl-textfield>
         </div>
         <div class="horizontal layout" style="padding-bottom:10px;">
          <mwc-select id="select-registry-type" label="${h("registry.RegistryType")}"
                      @change=${this._toggleProjectNameInput} required
                      validationMessage="Please select one option.">
            ${this._registryType.map(e=>m`
              <mwc-list-item value="${e}" ?selected="${"docker"===e}">${e}</mwc-list-item>
            `)}
          </mwc-select>
           <div class="vertical layout" style="padding-left:10px;">
              <wl-textfield
              id="add-project-name"
              class="helper-text"
              type="text"
              label="${h("registry.ProjectName")}"
              required
              @change=${this._validateProjectName}
              ></wl-textfield>
              <wl-label class="helper-text" id="project-name-validation" style="display:block;">${h("registry.ForHarborOnly")}</wl-label>
          </div>
         </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <wl-button
            class="fg orange"
            outlined
            type="button"
            style="box-sizing: border-box; width: 100%"
            @click=${this._addRegistry}
          >
            <wl-icon>add</wl-icon>
            ${h("button.Add")}
          </wl-button>
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
        <div slot="footer" class="horizontal end-justified flex layout">
          <wl-button
            class="fg red delete"
            type="button"
            outlined
            style="width: 100%; box-sizing: border-box;"
            @click=${this._deleteRegistry}
          >
            <wl-icon>delete</wl-icon>
            ${h("button.Delete")}
          </wl-button>
        </div>
      </backend-ai-dialog>
    `}};e([t({type:Object})],b.prototype,"indicator",void 0),e([t({type:Number})],b.prototype,"selectedIndex",void 0),e([t({type:String})],b.prototype,"boundIsEnabledRenderer",void 0),e([t({type:String})],b.prototype,"boundControlsRenderer",void 0),e([t({type:Array})],b.prototype,"_registryType",void 0),e([t({type:Array})],b.prototype,"allowed_registries",void 0),b=e([i("backend-ai-registry-list")],b);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let v=class extends a{constructor(){super(),this.images=Object(),this.is_superadmin=!1,this._activeTab="image-lists"}static get styles(){return[o,s,l,d`
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

      `]}static get properties(){return{active:{type:Boolean},_activeTab:{type:Boolean}}}async _viewStateChanged(e){return await this.updateComplete,!1===e||(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.is_superadmin=globalThis.backendaiclient.is_superadmin},!0):this.is_superadmin=globalThis.backendaiclient.is_superadmin,!1)}_showTab(e){for(var t=this.shadowRoot.querySelectorAll(".tab-content"),i=0;i<t.length;i++)t[i].style.display="none";this._activeTab=e.value,this.shadowRoot.querySelector("#"+e.value).style.display="block"}render(){return m`
      <wl-card class="item" elevation="1">
        <h3 class="tab horizontal center layout">
          <wl-tab-group>
            <wl-tab value="image-lists" checked @click="${e=>this._showTab(e.target)}">${h("environment.Images")}</wl-tab>
            <wl-tab value="resource-template-lists" @click="${e=>this._showTab(e.target)}">${h("environment.ResourcePresets")}</wl-tab>
            ${this.is_superadmin?m`
              <wl-tab value="registry-lists" @click="${e=>this._showTab(e.target)}">${h("environment.Registries")}</wl-tab>`:m``}
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
    `}firstUpdated(){}disconnectedCallback(){super.disconnectedCallback()}};e([t({type:String})],v.prototype,"images",void 0),e([t({type:Boolean})],v.prototype,"is_superadmin",void 0),e([t({type:String})],v.prototype,"_activeTab",void 0),v=e([i("backend-ai-environment-view")],v);var f=v;export default f;
