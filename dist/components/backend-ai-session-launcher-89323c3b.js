import{_ as e,p as t,q as s,c as i,L as o,d as r,I as a,a as n,o as l,e as c,b as d,h as u,B as p,g as h,f as m,t as _,r as g,l as v,u as y,v as b}from"./backend-ai-webui-40e10052.js";import"./mwc-linear-progress-69943234.js";import"./mwc-switch-482aa074.js";import"./label-d8b19527.js";import"./lablup-progress-bar-0fae70d1.js";import{u as f}from"./unsafe-html-0703bf8d.js";import"./vaadin-grid-69a293c4.js";import"./vaadin-grid-filter-746f865b.js";import"./vaadin-grid-filter-column-341aabd7.js";import"./vaadin-grid-selection-column-b09fda67.js";import"./expansion-26600d0e.js";import"./mwc-slider-924ecce3.js";import"./textfield-1b186cd3.js";
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let x=class extends o{constructor(){super(...arguments),this.editable=!1,this.pin=!1,this.markers=!1,this.marker_limit=30,this.disabled=!1}static get styles(){return[r,a,n,l,c,d`
        .mdc-text-field {
          height: 25px;
        }

        wl-textfield {
          --input-state-color-invalid: var(--input-state-color-inactive, hsl(var(--shade-400, var(--shade-hue, 200), var(--shade-saturation, 4%), var(--shade-lightness, 65%))));
          width: var(--textfield-min-width, 65px);
          margin-left: 10px;
        }

        mwc-slider {
          width: var(--slider-width, 100px);
          --mdc-theme-secondary: var(--slider-color, '#018786');
          color: var(--paper-grey-700);
        }
      `]}render(){return u`
      <div class="horizontal center layout">
        <mwc-slider id="slider" class="${this.id}" value="${this.value}"
                    min="${this.min}" max="${this.max}"
                    ?pin="${this.pin}"
                    ?disabled="${this.disabled}"
                    ?markers="${this.markers}"
                    @change="${()=>this.syncToText()}">
        </mwc-slider>
        <wl-textfield style="display:none" id="textfield" class="${this.id}" type="number"
                      value="${this.value}" min="${this.min}" max="${this.max}" step="${this.step}"
                      ?disabled="${this.disabled}"
                      @change="${()=>this.syncToSlider()}">
        </wl-textfield>
      </div>
    `}firstUpdated(){this.editable&&(this.textfield=this.shadowRoot.querySelector("#textfield"),this.textfield.style.display="flex"),this.updateStep(),this.checkMarkerDisplay()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}update(e){this.min=this.min>this.max?this.max:this.min,super.update(e)}updated(e){e.forEach(((e,t)=>{if("value"===t){setTimeout((()=>{this.editable&&this.syncToSlider(),this.slider.layout()}),500);const e=new CustomEvent("value-changed",{detail:{}});this.dispatchEvent(e)}["min","max","step"].includes(t)&&this.checkMarkerDisplay()}));const t=new CustomEvent("changed",{detail:""});this.dispatchEvent(t)}syncToText(){this.value=this.slider.value}syncToSlider(){this.textfield.step=this.step;const e=Math.round(this.textfield.value/this.step)*this.step;var t;this.textfield.value=e.toFixed((t=this.step,Math.floor(t)===t?0:t.toString().split(".")[1].length||0)),this.textfield.value>this.max&&(this.textfield.value=this.max),this.textfield.value<this.min&&(this.textfield.value=this.min),this.value=this.textfield.value,this.slider.value=this.textfield.value,this.slider.step=this.step}checkMarkerDisplay(){this.markers&&(this.max-this.min)/this.step>this.marker_limit&&this.slider.removeAttribute("markers"),this.updateStep()}updateStep(){const e=this.shadowRoot.querySelectorAll("wl-textfield");setTimeout((()=>{e.forEach((e=>{const t=e.getAttribute("step");e.$formElement.step=t}))}),100),this.step||(this.step=1),this.slider.setAttribute("step",this.step),this.slider.step=this.step}};e([t({type:Number})],x.prototype,"step",void 0),e([t({type:Number})],x.prototype,"value",void 0),e([t({type:Number})],x.prototype,"max",void 0),e([t({type:Number})],x.prototype,"min",void 0),e([t({type:Boolean})],x.prototype,"editable",void 0),e([t({type:Boolean})],x.prototype,"pin",void 0),e([t({type:Boolean})],x.prototype,"markers",void 0),e([t({type:Number})],x.prototype,"marker_limit",void 0),e([t({type:Boolean})],x.prototype,"disabled",void 0),e([t({type:Object})],x.prototype,"textfield",void 0),e([s("#slider",!0)],x.prototype,"slider",void 0),x=e([i("lablup-slider")],x);let w=class extends p{constructor(){super(),this.is_connected=!1,this.direction="horizontal",this.location="",this.aliases=Object(),this.aggregate_updating=!1,this.resourceGauge=Object(),this.project_resource_monitor=!1,this.active=!1,this.resourceBroker=globalThis.resourceBroker,this.notification=globalThis.lablupNotification,this.init_resource()}static get is(){return"backend-ai-resource-monitor"}static get styles(){return[r,a,n,l,c,d`
        mwc-linear-progress {
          height: 5px;
          --mdc-theme-primary: #98be5a;
        }

        .horizontal-panel lablup-progress-bar {
          --progress-bar-width: 90px;
        }

        .vertical-panel lablup-progress-bar {
          --progress-bar-width: 186px;
        }

        .horizontal-card {
          width: auto;
        }

        .horizontal-panel mwc-linear-progress {
          width: 90px;
        }

        .vertical-panel mwc-linear-progress {
          width: 186px;
        }

        #scaling-group-select-box {
          min-height: 100px;
          padding-top: 20px;
          padding-left: 20px;
          background-color: #F6F6F6;
        }

        .vertical-panel #resource-gauges {
          min-height: 200px;
        }

        mwc-linear-progress.project-bar {
          height: 15px;
        }

        mwc-linear-progress.start-bar {
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          --mdc-theme-primary: #3677eb;
        }

        mwc-linear-progress.middle-bar {
          --mdc-theme-primary: #4f8b46;
        }

        mwc-linear-progress.end-bar {
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          --mdc-theme-primary: #98be5a;
        }

        mwc-linear-progress.full-bar {
          border-radius: 3px;
          height: 10px;
        }

        .resources.horizontal .short-indicator mwc-linear-progress {
          width: 50px;
        }

        .resources.horizontal .short-indicator {
          width: 50px;
        }
        span.caption {
          width: 30px;
          display: block;
          font-size: 12px;
          padding-left: 10px;
        }

        div.caption {
          font-size: 12px;
          width: 100px;
        }

        #resource-gauges.horizontal {
          /* left: 160px; */
          /* width: 420px; */
          width: auto;
          height: auto;
          background-color: transparent;
        }

        wl-icon {
          --icon-size: 24px;
        }

        img.resource-type-icon {
          width: 24px;
          height: 24px;
        }

        @media screen and (max-width: 749px) {
          #resource-gauge-toggle.horizontal {
            display: flex;
          }

          #resource-gauge-toggle.vertical {
            display: none;
          }

          #resource-gauges.horizontal {
            display: none;
          }

          #resource-gauges.vertical {
            display: flex;
          }

        }

        @media screen and (min-width: 750px) {
          #resource-gauge-toggle {
            display: none;
          }

          #resource-gauges.horizontal,
          #resource-gauges.vertical {
            display: flex;
          }
        }

        .indicator {
          font-family: monospace;
        }

        .resource-button {
          height: 140px;
          width: 120px;
          margin: 5px;
          padding: 0;
          font-size: 14px;
        }

        #new-session-dialog {
          z-index: 100;
        }

        #scaling-group-select-box mwc-select {
          width: 305px;
          height: 58px;
          border: 0.1em solid #ccc;
          font-family: var(--general-font-family);
          --mdc-typography-subtitle1-font-family: var(--general-font-family);
          --mdc-typography-subtitle1-font-size: 14px;
          --mdc-typography-subtitle1-font-color: rgb(24, 24, 24);
          --mdc-typography-subtitle1-font-weight: 400;
          --mdc-typography-subtitle1-line-height: 16px;
          --mdc-select-fill-color: rgba(255, 255, 255, 1.0);
          --mdc-select-label-ink-color: rgba(24, 24, 24, 1.0);
          --mdc-select-disabled-ink-color: rgba(24, 24, 24, 1.0);
          --mdc-select-dropdown-icon-color: rgba(24, 24, 24, 1.0);
          --mdc-select-focused-dropdown-icon-color: rgba(24, 24, 24, 0.87);
          --mdc-select-disabled-dropdown-icon-color: rgba(24, 24, 24, 0.87);
          --mdc-select-idle-line-color: transparent;
          --mdc-select-hover-line-color: transparent;
          --mdc-select-ink-color: rgb(24, 24, 24);
          --mdc-select-outlined-idle-border-color: rgba(24, 24, 24, 0.42);
          --mdc-select-outlined-hover-border-color: rgba(24, 24, 24, 0.87);
          --mdc-theme-surface: white;
          --mdc-list-vertical-padding: 5px;
          --mdc-list-side-padding: 10px;
          --mdc-menu-item-height: 28px;
          --mdc-list-item__primary-text: {
            height: 20px;
            color: #222222;
          };
          margin-bottom: 5px;
        }

        #scaling-group-select {
          width: 305px;
          height: 55px;
          --mdc-select-outlined-idle-border-color: #dddddd;
          --mdc-select-outlined-hover-border-color: #dddddd;
         background-color: white!important;
         border-radius: 5px;
        }

        wl-button.resource-button.iron-selected {
          --button-color: var(--paper-red-600);
          --button-bg: var(--paper-red-600);
          --button-bg-active: var(--paper-red-600);
          --button-bg-hover: var(--paper-red-600);
          --button-bg-active-flat: var(--paper-orange-50);
          --button-bg-flat: var(--paper-orange-50);
        }

        .resource-button h4 {
          padding: 5px 0;
          margin: 0;
          font-weight: 400;
        }

        .resource-button ul {
          padding: 0;
          list-style-type: none;
        }

        .resources .monitor {
          margin-right: 20px;
          margin-bottom: 15px;
        }

        .resources.vertical .monitor {
          margin-bottom: 10px;
        }

        mwc-select {
          width: 100%;
          font-family: var(--general-font-family);
          --mdc-typography-subtitle1-font-family: var(--general-font-family);
          --mdc-theme-primary: var(--general-sidebar-color);
          --mdc-select-fill-color: transparent;
          --mdc-select-label-ink-color: rgba(0, 0, 0, 0.75);
          --mdc-select-dropdown-icon-color: rgba(255, 0, 0, 0.87);
          --mdc-select-focused-dropdown-icon-color: rgba(255, 0, 0, 0.42);
          --mdc-select-disabled-dropdown-icon-color: rgba(255, 0, 0, 0.87);
          --mdc-select-idle-line-color: rgba(0, 0, 0, 0.42);
          --mdc-select-hover-line-color: rgba(255, 0, 0, 0.87);
          --mdc-select-outlined-idle-border-color: rgba(255, 0, 0, 0.42);
          --mdc-select-outlined-hover-border-color: rgba(255, 0, 0, 0.87);
          --mdc-theme-surface: white;
          --mdc-list-vertical-padding: 5px;
          --mdc-list-side-padding: 25px;
          --mdc-list-item__primary-text: {
            height: 20px;
          };
        }

        div.mdc-select__anchor {
          background-color: white !important;
        }

        mwc-textfield {
          width: 100%;
          --mdc-text-field-idle-line-color: rgba(0, 0, 0, 0.42);
          --mdc-text-field-hover-line-color: rgba(255, 0, 0, 0.87);
          --mdc-text-field-fill-color: transparent;
          --mdc-theme-primary: var(--paper-red-600);
        }

        mwc-textfield#session-name {
          width: 50%;
          padding-top: 20px;
          padding-left: 0;
          margin-left: 0;
          margin-bottom: 1px;
        }

        wl-button[fab] {
          --button-fab-size: 70px;
          border-radius: 6px;
        }

        wl-label {
          margin-right: 10px;
          outline: none;
        }

        .vertical-card > #resource-gauges > .monitor > .resource-name {
          width: 60px;
        }

        .horizontal-card > #resource-gauges > .monitor {
          width: 250px;
        }

        @media screen and (min-width: 750px) {
          div#resource-gauges {
            display: flex !important;
          }
        }

        @media screen and (max-width: 1015px) {
          .horizontal-panel lablup-progress-bar {
            --progress-bar-width: 8rem;
          }

          div#resource-gauges {
            justify-content: center;
          }
        }
      `]}init_resource(){this.total_slot={},this.total_resource_group_slot={},this.total_project_slot={},this.used_slot={},this.used_resource_group_slot={},this.used_project_slot={},this.available_slot={},this.used_slot_percent={},this.used_resource_group_slot_percent={},this.used_project_slot_percent={},this.concurrency_used=0,this.concurrency_max=0,this.concurrency_limit=0,this._status="inactive",this.scaling_groups=[{name:""}],this.scaling_group="",this.sessions_list=[],this.metric_updating=!1,this.metadata_updating=!1}firstUpdated(){this.resourceGauge=this.shadowRoot.querySelector("#resource-gauges"),this._updateToggleResourceMonitorDisplay(),document.addEventListener("backend-ai-group-changed",(e=>{this.scaling_group="",this._updatePageVariables(!0)})),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_connected=!0,setInterval((()=>{this._periodicUpdateResourcePolicy()}),2e4)}),{once:!0}):this.is_connected=!0,document.addEventListener("backend-ai-session-list-refreshed",(()=>{this._updatePageVariables(!0)}))}async _periodicUpdateResourcePolicy(){return this.active?(await this._refreshResourcePolicy(),this.aggregateResource("refresh-resource-policy"),Promise.resolve(!0)):Promise.resolve(!1)}_updateSelectedScalingGroup(){const e=this.shadowRoot.querySelector("#scaling-groups"),t=e.items.find((e=>e.value===this.resourceBroker.scaling_group)),s=e.items.indexOf(t);e.select(s)}async updateScalingGroup(e=!1,t){if(await this.resourceBroker.updateScalingGroup(e,t.target.value),this.active){if("vertical"===this.direction){this.shadowRoot.querySelector("#scaling-group-select-box").firstChild.value=this.resourceBroker.scaling_group}!0===e&&(await this._refreshResourcePolicy(),this.aggregateResource("update-scaling-group"))}}async _viewStateChanged(e){await this.updateComplete,this.active&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.project_resource_monitor=this.resourceBroker.allow_project_resource_monitor,this._updatePageVariables(!0),this._disableEnterKey()}),{once:!0}):(this.project_resource_monitor=this.resourceBroker.allow_project_resource_monitor,await this._updatePageVariables(!0),this._disableEnterKey()),this._updateToggleResourceMonitorDisplay())}async _updatePageVariables(e){return this.active&&!1===this.metadata_updating?(this.metadata_updating=!0,await this.resourceBroker._updatePageVariables(e),setTimeout((()=>{this._updateScalingGroupSelector()}),1e3),this.sessions_list=this.resourceBroker.sessions_list,await this._refreshResourcePolicy(),this.aggregateResource("update-page-variable"),this.metadata_updating=!1,Promise.resolve(!0)):Promise.resolve(!1)}_updateToggleResourceMonitorDisplay(){document.body.clientWidth<750&&"horizontal"==this.direction&&(this.resourceGauge.style.display="none",this.shadowRoot.querySelector("#resource-gauge-switch-button").checked=!1),this.shadowRoot.querySelector("#resource-gauge-switch-button").checked="vertical"===this.direction}_updateScalingGroupSelector(){if("vertical"===this.direction){const e=this.shadowRoot.querySelector("#scaling-group-select-box");e.hasChildNodes()&&e.removeChild(e.firstChild);const t=document.createElement("mwc-select");t.label=h("session.launcher.ResourceGroup"),t.id="scaling-group-select",t.value=this.scaling_group,t.setAttribute("fullwidth","true"),t.style.margin="1px solid #ccc",t.addEventListener("selected",this.updateScalingGroup.bind(this,!0));let s=document.createElement("mwc-list-item");s.setAttribute("disabled","true"),s.innerHTML=h("session.launcher.SelectResourceGroup"),s.style.borderBottom="1px solid #ccc",t.appendChild(s);const i=t.value?t.value:this.resourceBroker.scaling_group;this.resourceBroker.scaling_groups.map((e=>{s=document.createElement("mwc-list-item"),s.value=e.name,s.setAttribute("graphic","icon"),i===e.name?s.selected=!0:s.selected=!1,s.innerHTML=e.name,t.appendChild(s)})),e.appendChild(t)}}async _refreshResourcePolicy(e=!1){return this.active?this.resourceBroker._refreshResourcePolicy().then((()=>(this.concurrency_used=this.resourceBroker.concurrency_used,this.concurrency_max=this.concurrency_used>this.resourceBroker.concurrency_max?this.concurrency_used:this.resourceBroker.concurrency_max,Promise.resolve(!0)))).catch((e=>(this.metadata_updating=!1,e&&e.message?(this.notification.text=m.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=m.relieve(e.title),this.notification.show(!0,e)),Promise.resolve(!1)))):Promise.resolve(!0)}_aliasName(e){const t={python:"Python",tensorflow:"TensorFlow",pytorch:"PyTorch",lua:"Lua",r:"R","r-base":"R",julia:"Julia",rust:"Rust",cpp:"C++",gcc:"GCC",go:"Go",tester:"Tester",haskell:"Haskell",matlab:"MATLAB",sagemath:"Sage",texlive:"TeXLive",java:"Java",php:"PHP",octave:"Octave",nodejs:"Node",caffe:"Caffe",scheme:"Scheme",scala:"Scala",base:"Base",cntk:"CNTK",h2o:"H2O.AI","triton-server":"Triton Server",digits:"DIGITS","ubuntu-linux":"Ubuntu Linux",tf1:"TensorFlow 1",tf2:"TensorFlow 2",py3:"Python 3",py2:"Python 2",py27:"Python 2.7",py35:"Python 3.5",py36:"Python 3.6",py37:"Python 3.7",py38:"Python 3.8",py39:"Python 3.9",py310:"Python 3.10",ji15:"Julia 1.5",ji16:"Julia 1.6",ji17:"Julia 1.7",lxde:"LXDE",lxqt:"LXQt",xfce:"XFCE",xrdp:"XRDP",gnome:"GNOME",kde:"KDE","ubuntu16.04":"Ubuntu 16.04","ubuntu18.04":"Ubuntu 18.04","ubuntu20.04":"Ubuntu 20.04",intel:"Intel MKL",2018:"2018",2019:"2019",2020:"2020",2021:"2021",2022:"2022",tpu:"TPU:TPUv3",rocm:"GPU:ROCm",cuda9:"GPU:CUDA9",cuda10:"GPU:CUDA10","cuda10.0":"GPU:CUDA10","cuda10.1":"GPU:CUDA10.1","cuda10.2":"GPU:CUDA10.2","cuda10.3":"GPU:CUDA10.3",cuda11:"GPU:CUDA11","cuda11.0":"GPU:CUDA11","cuda11.1":"GPU:CUDA11.1","cuda11.2":"GPU:CUDA11.2",miniconda:"Miniconda","anaconda2018.12":"Anaconda 2018.12","anaconda2019.12":"Anaconda 2019.12","alpine3.8":"Alpine Linux 3.8",ngc:"Nvidia GPU Cloud",ff:"Research Env."};return e in t?t[e]:e}async _aggregateResourceUse(e=""){return this.resourceBroker._aggregateCurrentResource(e).then((t=>!1===t?setTimeout((()=>{this._aggregateResourceUse(e)}),1e3):(this.concurrency_used=this.resourceBroker.concurrency_used,this.scaling_group=this.resourceBroker.scaling_group,this.scaling_groups=this.resourceBroker.scaling_groups,this.total_slot=this.resourceBroker.total_slot,this.total_resource_group_slot=this.resourceBroker.total_resource_group_slot,this.total_project_slot=this.resourceBroker.total_project_slot,this.used_slot=this.resourceBroker.used_slot,this.used_resource_group_slot=this.resourceBroker.used_resource_group_slot,this.used_project_slot=this.resourceBroker.used_project_slot,this.used_project_slot_percent=this.resourceBroker.used_project_slot_percent,this.concurrency_limit=this.resourceBroker.concurrency_limit,this.available_slot=this.resourceBroker.available_slot,this.used_slot_percent=this.resourceBroker.used_slot_percent,this.used_resource_group_slot_percent=this.resourceBroker.used_resource_group_slot_percent,Promise.resolve(!0)))).then((()=>Promise.resolve(!0))).catch((e=>(e&&e.message&&(console.log(e),this.notification.text=m.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)),Promise.resolve(!1))))}aggregateResource(e=""){void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._aggregateResourceUse(e)}),!0):this._aggregateResourceUse(e)}_toggleResourceGauge(e){const t=this.shadowRoot.querySelector("#resource-legend");e.target.checked?(this.resourceGauge.style.display="flex",t&&(t.style.display="flex"),document.body.clientWidth<750&&(this.resourceGauge.style.left="20px",this.resourceGauge.style.right="20px")):(this.resourceGauge.style.display="none",t&&(t.style.display="none"))}_disableEnterKey(){this.shadowRoot.querySelectorAll("wl-expansion").forEach((e=>{e.onKeyDown=e=>{13===e.keyCode&&e.preventDefault()}}))}_numberWithPostfix(e,t=""){return isNaN(parseInt(e))?"":parseInt(e)+t}render(){return u`
      ${"vertical"===this.direction?u`
      <div id="scaling-group-select-box" class="layout horizontal start-justified">
      </div>
      `:u``}
      <div class="layout ${this.direction}-card flex wrap">
        <div id="resource-gauges" class="layout ${this.direction} ${this.direction}-panel resources flex wrap">
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified resource-name">
              <div class="gauge-name">CPU</div>
            </div>
            <div class="layout vertical start-justified wrap">
              <lablup-progress-bar id="cpu-usage-bar" class="start"
                progress="${this.used_resource_group_slot_percent.cpu/100}"
                description="${this.used_resource_group_slot.cpu}/${this.total_resource_group_slot.cpu}"></lablup-progress-bar>
              <lablup-progress-bar id="cpu-usage-bar-2" class="end"
                progress="${this.used_slot_percent.cpu/100}"
                description="${this.used_slot.cpu}/${this.total_slot.cpu}"></lablup-progress-bar>
            </div>
            <div class="layout vertical center center-justified">
              <span class="percentage start-bar">${this._numberWithPostfix(this.used_resource_group_slot_percent.cpu,"%")}</span>
              <span class="percentage end-bar">${this._numberWithPostfix(this.used_slot_percent.cpu,"%")}</span>
            </div>
          </div>
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified resource-name">
              <span class="gauge-name">RAM</span>
            </div>
            <div class="layout vertical start-justified wrap">
              <lablup-progress-bar id="mem-usage-bar" class="start"
                progress="${this.used_resource_group_slot_percent.mem/100}"
                description="${this.used_resource_group_slot.mem}/${this.total_resource_group_slot.mem}GB"></lablup-progress-bar>
              <lablup-progress-bar id="mem-usage-bar-2" class="end"
                progress="${this.used_slot_percent.mem/100}"
                description="${this.used_slot.mem}/${this.total_slot.mem}GB"
              ></lablup-progress-bar>
            </div>
            <div class="layout vertical center center-justified">
              <span class="percentage start-bar">${this._numberWithPostfix(this.used_resource_group_slot_percent.mem,"%")}</span>
              <span class="percentage end-bar">${this._numberWithPostfix(this.used_slot_percent.mem,"%")}</span>
            </div>
          </div>
          ${this.total_slot.cuda_device?u`
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified resource-name">
              <span class="gauge-name">GPU</span>
            </div>
            <div class="layout vertical center-justified wrap">
              <lablup-progress-bar id="gpu-usage-bar" class="start"
                progress="${this.used_resource_group_slot_percent.cuda_device/100}"
                description="${this.used_resource_group_slot.cuda_device}/${this.total_resource_group_slot.cuda_device}"
              ></lablup-progress-bar>
              <lablup-progress-bar id="gpu-usage-bar-2" class="end"
                progress="${this.used_slot.cuda_device}/${this.total_slot.cuda_device}"
                description="${this.used_slot.cuda_device}/${this.total_slot.cuda_device}"
              ></lablup-progress-bar>
            </div>
            <div class="layout vertical center center-justified">
              <span class="percentage start-bar">${this._numberWithPostfix(this.used_resource_group_slot_percent.cuda_device,"%")}</span>
              <span class="percentage end-bar">${this._numberWithPostfix(this.used_slot_percent.cuda_device,"%")}</span>
            </div>
          </div>`:u``}
          ${this.resourceBroker.total_slot.cuda_shares&&this.resourceBroker.total_slot.cuda_shares>0?u`
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified resource-name">
              <span class="gauge-name">FGPU</span>
            </div>
            <div class="layout vertical start-justified wrap">
              <lablup-progress-bar id="fgpu-usage-bar" class="start"
                progress="${this.used_resource_group_slot_percent.cuda_shares/100}"
                description="${this.used_resource_group_slot.cuda_shares}/${this.total_resource_group_slot.cuda_shares}"
              ></lablup-progress-bar>
              <lablup-progress-bar id="fgpu-usage-bar-2" class="end"
                progress="${this.used_slot_percent.cuda_shares/100}"
                description="${this.used_slot.cuda_shares}/${this.total_slot.cuda_shares}"
              ></lablup-progress-bar>
            </div>
            <div class="layout vertical center center-justified">
              <span class="percentage start-bar">${this._numberWithPostfix(this.used_resource_group_slot_percent.cuda_shares,"%")}</span>
              <span class="percentage end-bar">${this._numberWithPostfix(this.used_slot_percent.cuda_shares,"%")}</span>
            </div>
          </div>`:u``}
          ${this.total_slot.rocm_device_slot?u`
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified resource-name">
              <img class="resource-type-icon fg green" src="/resources/icons/ROCm.png" />
              <span class="gauge-name">ROCm<br/>GPU</span>
            </div>
            <div class="layout vertical center-justified wrap">
            <lablup-progress-bar id="rocm-gpu-usage-bar" class="start"
              progress="${this.used_resource_group_slot_percent.rocm_device_slot/100}"
              description="${this.used_resource_group_slot.rocm_device_slot}/${this.total_resource_group_slot.rocm_device_slot}"
            ></lablup-progress-bar>
            <lablup-progress-bar id="rocm-gpu-usage-bar-2" class="end"
              progress="${this.used_slot_percent.rocm_device_slot/100}" buffer="${this.used_slot_percent.rocm_device_slot/100}"
              description="${this.used_slot.rocm_device_slot}/${this.total_slot.rocm_device_slot}"
            ></lablup-progress-bar>
            </div>
            <div class="layout vertical center center-justified">
              <span class="percentage start-bar">${this._numberWithPostfix(this.used_resource_group_slot_percent.rocm_device_slot,"%")}</span>
              <span class="percentage end-bar">${this._numberWithPostfix(this.used_slot_percent.rocm_device_slot,"%")}</span>
            </div>
          </div>`:u``}
          ${this.total_slot.tpu_device_slot?u`
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified resource-name">
              <span class="gauge-name">TPU</span>
            </div>
            <div class="layout vertical center-justified wrap short-indicator">
              <lablup-progress-bar id="tpu-usage-bar" class="start"
                progress="${this.used_resource_group_slot_percent.tpu_device_slot/100}"
                description="${this.used_resource_group_slot.tpu_device_slot}/${this.total_resource_group_slot.tpu_device_slot}"
              ></lablup-progress-bar>
              <lablup-progress-bar id="tpu-usage-bar-2" class="end"
                progress="${this.used_slot_percent.tpu_device_slot/100}" buffer="${this.used_slot_percent.tpu_device_slot/100}"
                description="${this.used_slot.tpu_device_slot}/${this.total_slot.tpu_device_slot}"
              ></lablup-progress-bar>
            </div>
            <div class="layout vertical center center-justified">
              <span class="percentage start-bar">${this._numberWithPostfix(this.used_resource_group_slot_percent.tpu_device_slot,"%")}</span>
              <span class="percentage end-bar">${this._numberWithPostfix(this.used_slot_percent.tpu_device_slot,"%")}</span>
            </div>
          </div>`:u``}
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified resource-name">
              <span class="gauge-name">${_("session.launcher.Sessions")}</span>
            </div>
            <div class="layout vertical center-justified wrap">
              <lablup-progress-bar id="concurrency-usage-bar" class="start"
                progress="${this.used_slot_percent.concurrency/100}"
                description="${this.concurrency_used}/${1e6===this.concurrency_max?"∞":parseInt(this.concurrency_max)}"
                ></lablup-progress-bar>
            </div>
            <div class="layout vertical center center-justified">
              <span class="percentage end-bar" style="margin-top:0px;">${this._numberWithPostfix(this.used_slot_percent.concurrency,"%")}</span>
            </div>
          </div>
        </div>
        <div class="layout horizontal center end-justified" id="resource-gauge-toggle">
          <p style="font-size:12px;color:#242424;margin-right:10px;">
            ${_("session.launcher.ResourceMonitorToggle")}
          </p>
          <mwc-switch class="fg blue ${this.direction}" id="resource-gauge-switch-button"
            @change="${e=>this._toggleResourceGauge(e)}">
          </mwc-switch>
        </div>
      </div>
      ${"vertical"===this.direction?u`
      <div class="vertical start-justified layout ${this.direction}-card" id="resource-legend">
        <div class="layout horizontal center start-justified resource-legend-stack">
          <div class="resource-legend-icon start"></div>
          <span class="resource-legend">${_("session.launcher.CurrentResourceGroup")} (${this.scaling_group})</span>
        </div>
        <div class="layout horizontal center start-justified">
          <div class="resource-legend-icon end"></div>
          <span class="resource-legend">${_("session.launcher.UserResourceLimit")}</span>
        </div>
      </div>
      `:u``}
      ${"vertical"===this.direction&&!0===this.project_resource_monitor&&(this.total_project_slot.cpu>0||this.total_project_slot.cpu===1/0)?u`
      <hr />
      <div class="vertical start-justified layout">
        <div class="flex"></div>
        <div class="layout horizontal center-justified monitor">
          <div class="layout vertical center center-justified" style="margin-right:5px;">
            <wl-icon class="fg blue">group_work</wl-icon>
            <span class="gauge-name">${_("session.launcher.Project")}</span>
          </div>
          <div class="layout vertical start-justified wrap short-indicator">
            <div class="layout horizontal">
              <span style="width:35px; margin-left:5px; margin-right:5px;">CPU</span>
              <lablup-progress-bar id="cpu-project-usage-bar" class="start"
                progress="${this.used_project_slot_percent.cpu/100}"
                description="${this.used_project_slot.cpu}/${this.total_project_slot.cpu===1/0?"∞":this.total_project_slot.cpu}"></lablup-progress-bar>
              <div class="layout vertical center center-justified">
                <span class="percentage start-bar">${this._numberWithPostfix(this.used_project_slot_percent.cpu,"%")}</span>
                <span class="percentage end-bar">${this._numberWithPostfix(this.total_project_slot.cpu,"%")}</span>
              </div>
            </div>
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">RAM</span>
              <lablup-progress-bar id="mem-project-usage-bar" class="end"
                progress="${this.used_project_slot_percent.mem/100}"
                description=">${this.used_project_slot.mem}/${this.total_project_slot.mem===1/0?"∞":this.total_project_slot.mem}"
              ></lablup-progress-bar>
              <div class="layout vertical center center-justified">
                <span class="percentage start-bar">${this._numberWithPostfix(this.used_project_slot_percent.mem,"%")}</span>
                <span class="percentage end-bar">${this._numberWithPostfix(this.total_project_slot.mem,"%")}</span>
              </div>
            </div>
            ${this.total_project_slot.cuda_device?u`
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">GPU</span>
              <lablup-progress-bar id="gpu-project-usage-bar" class="end"
                progress="${this.used_project_slot_percent.cuda_device/100}"
                description="${this.used_project_slot.cuda_device}/${"Infinity"===this.total_project_slot.cuda_device?"∞":this.total_project_slot.cuda_device}"
              ></lablup-progress-bar>
              <div class="layout vertical center center-justified">
                <span class="percentage start-bar">${this._numberWithPostfix(this.used_project_slot_percent.cuda_device,"%")}</span>
                <span class="percentage end-bar">${this._numberWithPostfix(this.total_project_slot.cuda_device,"%")}</span>
              </div>
            </div>`:u``}
            ${this.total_project_slot.cuda_shares?u`
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">FGPU</span>
              <lablup-progress-bar id="fgpu-project-usage-bar" class="end"
                progress="${this.used_project_slot_percent.cuda_shares/100}"
                description="${this.used_project_slot.cuda_shares}/${"Infinity"===this.total_project_slot.cuda_shares?"∞":this.total_project_slot.cuda_shares}"
              ></lablup-progress-bar>
              <div class="layout vertical center center-justified">
                <span class="percentage start-bar">${this._numberWithPostfix(this.used_project_slot_percent.cuda_shares,"%")}</span>
                <span class="percentage end-bar">${this._numberWithPostfix(this.total_project_slot.cuda_shares,"%")}</span>
              </div>
            </div>`:u``}
            ${this.total_project_slot.rocm_device?u`
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">GPU</span>
              <lablup-progress-bar id="rocm-project-usage-bar" class="end"
                progress="${this.used_project_slot_percent.rocm_device/100}"
                description="${this.used_project_slot.rocm_device}/${"Infinity"===this.total_project_slot.rocm_device?"∞":this.total_project_slot.rocm_device}"
              ></lablup-progress-bar>
              <div class="layout vertical center center-justified">
                <span class="percentage start-bar">${this._numberWithPostfix(this.used_project_slot_percent.rocm_device,"%")}</span>
                <span class="percentage end-bar">${this._numberWithPostfix(this.total_project_slot.rocm_device,"%")}</span>
              </div>
            </div>`:u``}
            ${this.total_project_slot.tpu_device?u`
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">GPU</span>
              <lablup-progress-bar id="tpu-project-usage-bar" class="end"
                progress="${this.used_project_slot_percent.tpu_device/100}"
                description="${this.used_project_slot.tpu_device}/${"Infinity"===this.total_project_slot.tpu_device?"∞":this.total_project_slot.cuda_device}"
              ></lablup-progress-bar>
              <div class="layout vertical center center-justified">
                <span class="percentage start-bar">${this._numberWithPostfix(this.used_project_slot_percent.tpu_device,"%")}</span>
                <span class="percentage end-bar">${this._numberWithPostfix(this.total_project_slot.tpu_device,"%")}</span>
              </div>
            </div>`:u``}
          </div>
          <div class="flex"></div>
        </div>
      </div>
      `:u``}
`}};e([t({type:Boolean})],w.prototype,"is_connected",void 0),e([t({type:String})],w.prototype,"direction",void 0),e([t({type:String})],w.prototype,"location",void 0),e([t({type:Object})],w.prototype,"aliases",void 0),e([t({type:Object})],w.prototype,"total_slot",void 0),e([t({type:Object})],w.prototype,"total_resource_group_slot",void 0),e([t({type:Object})],w.prototype,"total_project_slot",void 0),e([t({type:Object})],w.prototype,"used_slot",void 0),e([t({type:Object})],w.prototype,"used_resource_group_slot",void 0),e([t({type:Object})],w.prototype,"used_project_slot",void 0),e([t({type:Object})],w.prototype,"available_slot",void 0),e([t({type:Number})],w.prototype,"concurrency_used",void 0),e([t({type:Number})],w.prototype,"concurrency_max",void 0),e([t({type:Number})],w.prototype,"concurrency_limit",void 0),e([t({type:Object})],w.prototype,"used_slot_percent",void 0),e([t({type:Object})],w.prototype,"used_resource_group_slot_percent",void 0),e([t({type:Object})],w.prototype,"used_project_slot_percent",void 0),e([t({type:String})],w.prototype,"default_language",void 0),e([t({type:Boolean})],w.prototype,"_status",void 0),e([t({type:Number})],w.prototype,"num_sessions",void 0),e([t({type:String})],w.prototype,"scaling_group",void 0),e([t({type:Array})],w.prototype,"scaling_groups",void 0),e([t({type:Array})],w.prototype,"sessions_list",void 0),e([t({type:Boolean})],w.prototype,"metric_updating",void 0),e([t({type:Boolean})],w.prototype,"metadata_updating",void 0),e([t({type:Boolean})],w.prototype,"aggregate_updating",void 0),e([t({type:Object})],w.prototype,"scaling_group_selection_box",void 0),e([t({type:Object})],w.prototype,"resourceGauge",void 0),e([t({type:Boolean})],w.prototype,"project_resource_monitor",void 0),e([t({type:Object})],w.prototype,"resourceBroker",void 0),w=e([i("backend-ai-resource-monitor")],w);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class k extends g{constructor(){super(...arguments),this.left=!1,this.graphic="control"}render(){const e={"mdc-deprecated-list-item__graphic":this.left,"mdc-deprecated-list-item__meta":!this.left},t=this.renderText(),s=this.graphic&&"control"!==this.graphic&&!this.left?this.renderGraphic():u``,i=this.hasMeta&&this.left?this.renderMeta():u``,o=this.renderRipple();return u`
      ${o}
      ${s}
      ${this.left?"":t}
      <span class=${v(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left?t:""}
      ${i}`}async onChange(e){const t=e.target;this.selected===t.checked||(this._skipPropRequest=!0,this.selected=t.checked,await this.updateComplete,this._skipPropRequest=!1)}}e([s("slot")],k.prototype,"slotElement",void 0),e([s("mwc-checkbox")],k.prototype,"checkboxElement",void 0),e([t({type:Boolean})],k.prototype,"left",void 0),e([t({type:String,reflect:!0})],k.prototype,"graphic",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const $=d`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let S=class extends k{};S.styles=[y,$],S=e([i("mwc-check-list-item")],S);let R=class extends p{constructor(){super(),this.is_connected=!1,this.enableLaunchButton=!1,this.hideLaunchButton=!1,this.location="",this.mode="normal",this.newSessionDialogTitle="",this.importScript="",this.importFilename="",this.imageRequirements=Object(),this.resourceLimits=Object(),this.userResourceLimit=Object(),this.aliases=Object(),this.tags=Object(),this.icons=Object(),this.imageInfo=Object(),this.kernel="",this.marker_limit=25,this.gpu_modes=[],this.gpu_step=.1,this.cpu_metric={min:"1",max:"1"},this.mem_metric={min:"1",max:"1"},this.shmem_metric={min:.0625,max:1,preferred:.0625},this.cuda_device_metric={min:0,max:0},this.rocm_device_metric={min:"0",max:"0"},this.tpu_device_metric={min:"1",max:"1"},this.cluster_metric={min:1,max:1},this.cluster_mode_list=["single-node","multi-node"],this.cluster_support=!1,this.folderMapping=Object(),this.aggregate_updating=!1,this.resourceGauge=Object(),this.ownerFeatureInitialized=!1,this.ownerDomain="",this.project_resource_monitor=!1,this.version_selector=Object(),this._default_language_updated=!1,this._default_version_updated=!1,this._helpDescription="",this._helpDescriptionTitle="",this._helpDescriptionIcon="",this.max_cpu_core_per_session=128,this.max_mem_per_container=1536,this.max_cuda_device_per_container=16,this.max_cuda_shares_per_container=16,this.max_shm_per_container=8,this.allow_manual_image_name_for_session=!1,this.cluster_size=1,this.deleteEnvInfo=Object(),this.deleteEnvRow=Object(),this.environ_values=Object(),this.vfolder_select_expansion=Object(),this.currentIndex=1,this._grid=Object(),this._debug=!1,this._boundFolderMapRenderer=this.folderMapRenderer.bind(this),this.active=!1,this.ownerKeypairs=[],this.ownerGroups=[],this.ownerScalingGroups=[],this.resourceBroker=globalThis.resourceBroker,this.notification=globalThis.lablupNotification,this.environ=[],this.init_resource()}static get is(){return"backend-ai-session-launcher"}static get styles(){return[r,a,n,l,c,d`
        lablup-slider {
          width: 200px !important;
          --textfield-width: 50px;
          --slider-width: 120px;
        }

        lablup-slider.mem,
        lablup-slider.shmem {
          --slider-color: var(--paper-orange-400);
        }

        lablup-slider.cpu {
          --slider-color: var(--paper-light-green-400);
        }

        lablup-slider.gpu {
          --slider-color: var(--paper-cyan-400);
        }

        lablup-slider.session {
          --slider-color: var(--paper-pink-400);
        }

        lablup-slider.cluster {
          --slider-color: var(--paper-blue-500);
        }

        lablup-progress-bar {
          --progress-bar-width: 100%;
          --progress-bar-height: 10px;
          --progress-bar-border-radius: 0px;
          height: 100%;
          width: 100%;
          --progress-bar-background: var(--general-progress-bar-using);
          /* transition speed for progress bar */
          --progress-bar-transition-second: .1s;
          margin: 0;
        }

        vaadin-grid {
          max-height: 450px;
        }

        .progress {
          // padding-top: 15px;
          position: relative;
          z-index: 12;
          display: none;
        }

        .progress.active {
          display: block;
        }

        .resources.horizontal .short-indicator mwc-linear-progress {
          width: 50px;
        }

        .resources.horizontal .short-indicator .gauge-label {
          width: 50px;
        }

        span.caption {
          width: 30px;
          display: block;
          font-size: 12px;
          padding-left: 10px;
          font-weight: 300;
        }

        div.caption {
          font-size: 12px;
          width: 100px;
        }

        img.resource-type-icon {
          width: 24px;
          height: 24px;
        }

        div.resource-type {
          font-size: 14px;
          width: 70px;
          margin-right: 10px;
        }

        div.vfolder-list,
        div.vfolder-mounted-list,
        #mounted-folders-container,
        .environment-variables-container
         {
          background-color: rgba(244,244,244,1);
          overflow-y: scroll;
        }

        div.vfolder-list,
        div.vfolder-mounted-list {
          max-height: 450px;
        }

        div.blank-box {
          padding: 3rem 0;
        }

        div.blank-box-medium {
          padding: 8.8rem 0;
        }

        div.blank-box-large {
          padding: 11.3rem 0;
        }

        .environment-variables-container {
          font-size: 0.8rem;
          padding: 10px;
        }

        .environment-variables-container wl-textfield input {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .resources.horizontal .monitor.session {
          margin-left: 5px;
        }

        .gauge-name {
          font-size: 10px;
        }

        .gauge-label {
          width: 100px;
          font-weight: 300;
          font-size: 12px;
        }

        .indicator {
          font-family: monospace;
        }
        .cluster-total-allocation-container {
          border-radius:10px;
          border:1px dotted var(--general-button-background-color);
          padding-top:10px;
          margin-left:15px;
          margin-right:15px;
        }

        .resource-button {
          height: 140px;
          width: 330px;
          margin: 5px;
          padding: 0;
          font-size: 14px;
        }

        .resource-allocated {
          width: 40px;
          height: 60px;
          font-size: 16px;
          margin: 5px;
          opacity: 1;
          z-index:11;
        }

        .resource-allocated > p {
          margin: 0 auto;
          font-size: 8px;
        }
        .resource-allocated-box {
          z-index:10;
          position: relative;
        }
        .resource-allocated-box-shadow {
          position:relative;
          z-index:1;
          top: -65px;
          height:200px;
          width:70px;
          opacity: 1;
        }

        .cluster-allocated {
          min-width: 40px;
          min-height: 40px;
          width: auto;
          height: 70px;
          border-radius: 5px;
          font-size: 1rem;
          margin: 5px;
          padding: 0px 5px;
          background-color: var(--general-button-background-color);
          color: white;
        }

        .cluster-allocated > div.horizontal > p {
          font-size: 1rem;
          margin: 0px;
        }

        .cluster-allocated > p.small {
          font-size: 8px;
          margin: 0px;
        }

        .resource-allocated > span,
        .cluster-allocated > div.horizontal > span {
          font-weight: bolder;
        }

        .allocation-check {
          margin-bottom: 10px;
        }

        .resource-allocated-box {
          background-color: var(--paper-grey-300);
          border-radius: 5px;
          margin: 5px;
          z-index:10;
        }

        #new-session-dialog {
          --component-width: 400px;
          --component-height: 640px;
          --component-max-height: 640px;
          z-index: 100;
        }

        .resource-button.iron-selected {
          --button-color: var(--paper-red-600);
          --button-bg: var(--paper-red-600);
          --button-bg-active: var(--paper-red-600);
          --button-bg-hover: var(--paper-red-600);
          --button-bg-active-flat: var(--paper-orange-50);
          --button-bg-flat: var(--paper-orange-50);
        }

        .resource-button h4 {
          padding: 5px 0;
          margin: 0;
          font-weight: 400;
        }

        .resource-button ul {
          padding: 0;
          list-style-type: none;
        }

        #launch-session {
          width: var(--component-width, auto);
          height: var(--component-height, 36px);
        }

        #launch-session[disabled] {
          background-image: var(--general-sidebar-color);
          --mdc-theme-on-primary: var(--general-button-color);
        }

        #launch-session-form {
          height: calc(var(--component-height, auto) - 157px);
        }

        wl-button > span {
          margin-left: 5px;
          font-weight: normal;
        }

        wl-icon {
          --icon-size: 20px;
        }

        wl-expansion {
          --font-family-serif: var(--general-font-family);
          --expansion-elevation: 0;
          --expansion-elevation-open: 0;
          --expansion-elevation-hover: 0;
          --expansion-header-padding: 16px;
          --expansion-margin-open: 0;
        }

        wl-expansion span[slot="title"] {
          font-size: 12px;
          color: rgb(64, 64, 64);
          font-weight: normal;
        }

        wl-expansion.vfolder {
          --expansion-content-padding: 0;
          border-bottom: 1px
        }

        wl-expansion span {
          font-size: 20px;
          font-weight: 200;
          display: block;
        }

        .resources .monitor {
          margin-right: 5px;
        }

        .resources.vertical .monitor {
          margin-bottom: 10px;
        }

        .resources.vertical .monitor div:first-child {
          width: 40px;
        }

        mwc-select {
          width: 100%;
          font-family: var(--general-font-family);
          --mdc-typography-subtitle1-font-family: var(--general-font-family);
          --mdc-theme-primary: var(--paper-red-600);
          --mdc-select-fill-color: transparent;
          --mdc-select-label-ink-color: rgba(0, 0, 0, 0.75);
          --mdc-select-dropdown-icon-color: rgba(255, 0, 0, 0.87);
          --mdc-select-focused-dropdown-icon-color: rgba(255, 0, 0, 0.42);
          --mdc-select-disabled-ink-color: rgba(0, 0, 0, 0.64);
          --mdc-select-disabled-dropdown-icon-color: rgba(255, 0, 0, 0.87);
          --mdc-select-disabled-fill-color: rgba(244, 244, 244, 1);
          --mdc-select-idle-line-color: rgba(0, 0, 0, 0.42);
          --mdc-select-hover-line-color: rgba(255, 0, 0, 0.87);
          --mdc-select-outlined-idle-border-color: rgba(255, 0, 0, 0.42);
          --mdc-select-outlined-hover-border-color: rgba(255, 0, 0, 0.87);
          --mdc-theme-surface: white;
          --mdc-list-vertical-padding: 5px;
          --mdc-list-side-padding: 15px;
          --mdc-list-item__primary-text: {
            height: 20px;
          };
        }

        mwc-select#owner-group,
        mwc-select#owner-scaling-group {
          margin-right: 0;
          padding-right: 0;
          width: 50%;
          --mdc-menu-max-width: 200px;
          --mdc-select-min-width: 190px;
        }

        mwc-select > mwc-list-item {
          width: 370px; // default width
        }

        mwc-textfield {
          width: 100%;
          font-family: var(--general-font-family);
          --mdc-typography-subtitle1-font-family: var(--general-font-family);
          --mdc-text-field-idle-line-color: rgba(0, 0, 0, 0.42);
          --mdc-text-field-hover-line-color: rgba(255, 0, 0, 0.87);
          --mdc-text-field-fill-color: transparent;
          --mdc-theme-primary: var(--paper-red-600);
        }

        mwc-textfield#session-name {
          margin-bottom: 1px;
        }

        mwc-button, mwc-button[raised], mwc-button[unelevated], mwc-button[disabled] {
          width: 100%;
        }

        mwc-button[disabled] {
          background-image: none;
          --mdc-theme-primary: #ddd;
          --mdc-on-theme-primary: var(--general-sidebar-topbar-background-color);
        }

        mwc-checkbox {
          --mdc-theme-secondary: var(--general-checkbox-color);
        }

        #prev-button, #next-button {
          color: #27824F;
        }

        #environment {
          --mdc-menu-item-height: 40px;
          max-height: 300px;
        }

        #version {
          --mdc-menu-item-height: 35px;
        }

        #vfolder {
          width: 100%;
        }

        #vfolder mwc-list-item[disabled] {
          background-color: rgba(255, 0, 0, 0.04) !important;
        }

        wl-label {
          margin-right: 10px;
          outline: none;
        }

        #help-description {
          --component-width: 350px;
        }

        #help-description p {
          padding: 5px !important;
        }

        #launch-confirmation-dialog, #env-config-confirmation {
          --component-width: 400px;
          --component-font-size: 14px;
        }

        mwc-icon-button.info {
          --mdc-icon-button-size: 30px;
        }

        mwc-icon {
          --mdc-icon-size: 13px;
          margin-right: 2px;
          vertical-align: middle;
        }

        ul {
          list-style-type: none;
        }

        ul.vfolder-list {
          color: #646464;
          font-size: 12px;
          max-height: inherit;
        }

        ul.vfolder-list > li {
          max-width: 90%;
          display: block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }

        mwc-button > mwc-icon {
          display: none;
        }

        p.title {
          padding: 2px 15px 10px 15px;
          margin-top: 0;
          font-size: 12px;
          font-weight: 200;
          color: #404040;
        }

        #progress-04 p.title {
          font-weight: 400;
        }

        .launcher-item-title {
          font-size: 12px;
          color: #404040;
          font-weight: 400;
        }

        .allocation-shadow {
          height: 70px;
          width: 200px;
          position: absolute;
          top: -5px;
          left: 5px;
          border: 1px solid #ccc;
        }

        #modify-env-dialog {
          --component-max-height: 550px;
          --component-width: 400px;
        }

        #modify-env-dialog div.container {
          display: flex;
          flex-direction: column;
          padding: 0px 30px;
        }

        #modify-env-dialog div.row {
          display: grid;
          grid-template-columns: 4fr 4fr 1fr;
          margin-bottom: 10px;
        }

        .environment-variables-container h4 {
          margin: 0;
        }

        .environment-variables-container wl-textfield {
          --input-font-family: var(--general-font-family);
          --input-color-disabled: #222;
        }

        @media screen and (max-width: 375px) {
          lablup-slider {
            width: 180px;
            --textfield-width: 50px;
            --slider-width: 100px;
          }

          backend-ai-dialog {
            --component-min-width: 350px;
          }
        }

        @media screen and (max-width: 750px) {
          mwc-button > mwc-icon {
            display: inline-block;
          }
        }

        /* Fading animation */
        .fade {
          -webkit-animation-name: fade;
          -webkit-animation-duration: 1s;
          animation-name: fade;
          animation-duration: 1s;
        }

        @-webkit-keyframes fade {
          from {opacity: .7}
          to {opacity: 1}
        }

        @keyframes fade {
          from {opacity: .7}
          to {opacity: 1}
        }
      `]}init_resource(){this.versions=["Not Selected"],this.languages=[],this.gpu_mode="none",this.total_slot={},this.total_resource_group_slot={},this.total_project_slot={},this.used_slot={},this.used_resource_group_slot={},this.used_project_slot={},this.available_slot={},this.used_slot_percent={},this.used_resource_group_slot_percent={},this.used_project_slot_percent={},this.resource_templates=[],this.resource_templates_filtered=[],this.vfolders=[],this.selectedVfolders=[],this.nonAutoMountedVfolders=[],this.autoMountedVfolders=[],this.default_language="",this.concurrency_used=0,this.concurrency_max=0,this.concurrency_limit=1,this.max_containers_per_session=1,this._status="inactive",this.cpu_request=1,this.mem_request=1,this.shmem_request=.0625,this.gpu_request=0,this.gpu_request_type="cuda.device",this.session_request=1,this.scaling_groups=[{name:""}],this.scaling_group="",this.sessions_list=[],this.metric_updating=!1,this.metadata_updating=!1,this.cluster_size=1,this.cluster_mode="single-node",this.ownerFeatureInitialized=!1,this.ownerDomain="",this.ownerKeypairs=[],this.ownerGroups=[],this.ownerScalingGroups=[]}firstUpdated(){this.shadowRoot.querySelector("#environment").addEventListener("selected",this.updateLanguage.bind(this)),this.version_selector=this.shadowRoot.querySelector("#version"),this.version_selector.addEventListener("selected",(()=>{this.updateResourceAllocationPane()})),this.resourceGauge=this.shadowRoot.querySelector("#resource-gauges"),document.addEventListener("backend-ai-group-changed",(e=>{this._updatePageVariables(!0)})),document.addEventListener("backend-ai-resource-broker-updated",(e=>{})),!0===this.hideLaunchButton&&(this.shadowRoot.querySelector("#launch-session").style.display="none"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.max_cpu_core_per_session=globalThis.backendaiclient._config.maxCPUCoresPerContainer||128,this.max_mem_per_container=globalThis.backendaiclient._config.maxMemoryPerContainer||1536,this.max_cuda_device_per_container=globalThis.backendaiclient._config.maxCUDADevicesPerContainer||16,this.max_cuda_shares_per_container=globalThis.backendaiclient._config.maxCUDASharesPerContainer||16,this.max_shm_per_container=globalThis.backendaiclient._config.maxShmPerContainer||8,void 0!==globalThis.backendaiclient._config.allow_manual_image_name_for_session&&"allow_manual_image_name_for_session"in globalThis.backendaiclient._config&&""!==globalThis.backendaiclient._config.allow_manual_image_name_for_session?this.allow_manual_image_name_for_session=globalThis.backendaiclient._config.allow_manual_image_name_for_session:this.allow_manual_image_name_for_session=!1,globalThis.backendaiclient.supports("multi-container")&&(this.cluster_support=!0),this.is_connected=!0,this._debug=globalThis.backendaiwebui.debug,this._enableLaunchButton()}),{once:!0}):(this.max_cpu_core_per_session=globalThis.backendaiclient._config.maxCPUCoresPerContainer||128,this.max_mem_per_container=globalThis.backendaiclient._config.maxMemoryPerContainer||1536,this.max_cuda_device_per_container=globalThis.backendaiclient._config.maxCUDADevicesPerContainer||16,this.max_cuda_shares_per_container=globalThis.backendaiclient._config.maxCUDASharesPerContainer||16,this.max_shm_per_container=globalThis.backendaiclient._config.maxShmPerContainer||8,void 0!==globalThis.backendaiclient._config.allow_manual_image_name_for_session&&"allow_manual_image_name_for_session"in globalThis.backendaiclient._config&&""!==globalThis.backendaiclient._config.allow_manual_image_name_for_session?this.allow_manual_image_name_for_session=globalThis.backendaiclient._config.allow_manual_image_name_for_session:this.allow_manual_image_name_for_session=!1,globalThis.backendaiclient.supports("multi-container")&&(this.cluster_support=!0),this.is_connected=!0,this._debug=globalThis.backendaiwebui.debug,this._enableLaunchButton());const e=this.shadowRoot.querySelector("#modify-env-dialog");e.addEventListener("dialog-closing-confirm",(t=>{const s={},i=this.shadowRoot.querySelector("#modify-env-container").querySelectorAll(".row:not(.header)");Array.prototype.filter.call(i,(e=>(e=>Array.prototype.filter.call(e.querySelectorAll("wl-textfield"),((e,t)=>""===e.value)).length<=1)(e))).map((e=>(e=>{const t=Array.prototype.map.call(e.querySelectorAll("wl-textfield"),(e=>e.value));return s[t[0]]=t[1],t})(e)));((e,t)=>{const s=Object.getOwnPropertyNames(e),i=Object.getOwnPropertyNames(t);if(s.length!=i.length)return!1;for(let i=0;i<s.length;i++){const o=s[i];if(e[o]!==t[o])return!1}return!0})(s,this.environ_values)?(e.closeWithConfirmation=!1,this.closeDialog("modify-env-dialog")):this.openDialog("env-config-confirmation")})),this.currentIndex=1,this.progressLength=this.shadowRoot.querySelectorAll(".progress").length,this._grid=this.shadowRoot.querySelector("#vfolder-grid"),globalThis.addEventListener("resize",(()=>{document.body.dispatchEvent(new Event("click"))}))}_enableLaunchButton(){this.resourceBroker.image_updating?(this.enableLaunchButton=!1,setTimeout((()=>{this._enableLaunchButton()}),1e3)):(this.languages=this.resourceBroker.languages,this.enableLaunchButton=!0)}_updateSelectedScalingGroup(){const e=this.shadowRoot.querySelector("#scaling-groups");this.scaling_groups=this.resourceBroker.scaling_groups;const t=e.items.find((e=>e.value===this.resourceBroker.scaling_group));if(""===this.resourceBroker.scaling_group||void 0===t)return void setTimeout((()=>{this._updateSelectedScalingGroup()}),500);const s=e.items.indexOf(t);e.select(-1),e.select(s),e.value=t.value,e.requestUpdate()}async updateScalingGroup(e=!1,t){this.active&&(await this.resourceBroker.updateScalingGroup(e,t.target.value),!0===e?await this._refreshResourcePolicy():this.updateResourceAllocationPane("session dialog"))}async _updateSelectedFolder(e=!1){if(this._grid&&this._grid.selectedItems){const t=this._grid.selectedItems;let s=[];t.length>0&&(s=t.map((e=>e.name)),e&&this._unselectAllSelectedFolder()),this.selectedVfolders=s;for(const e of this.selectedVfolders)if(e in this.folderMapping&&this.selectedVfolders.includes(this.folderMapping[e]))return delete this.folderMapping[e],this.shadowRoot.querySelector("#vfolder-alias-"+e).value="",await this.shadowRoot.querySelector("#vfolder-mount-preview").updateComplete.then((()=>this.requestUpdate())),Promise.resolve(!0)}return Promise.resolve(!0)}_unselectAllSelectedFolder(){this._grid&&this._grid.selectedItems&&(this._grid.selectedItems.forEach((e=>{e.selected=!1})),this._grid.selectedItems=[]),this.selectedVfolders=[]}async _viewStateChanged(e){await this.updateComplete,this.active&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.project_resource_monitor=this.resourceBroker.allow_project_resource_monitor,this._updatePageVariables(!0),this._disableEnterKey()}),{once:!0}):(this.project_resource_monitor=this.resourceBroker.allow_project_resource_monitor,await this._updatePageVariables(!0),this._disableEnterKey()))}async _updatePageVariables(e){this.active&&!1===this.metadata_updating&&(this.metadata_updating=!0,await this.resourceBroker._updatePageVariables(e),this._updateSelectedScalingGroup(),this.sessions_list=this.resourceBroker.sessions_list,await this._refreshResourcePolicy(),this.aggregateResource("update-page-variable"),this.metadata_updating=!1)}async _refreshResourcePolicy(){return this.resourceBroker._refreshResourcePolicy().then((()=>{this.concurrency_used=this.resourceBroker.concurrency_used,this.userResourceLimit=this.resourceBroker.userResourceLimit,this.concurrency_max=this.resourceBroker.concurrency_max,this.max_containers_per_session=this.resourceBroker.max_containers_per_session,this.gpu_mode=this.resourceBroker.gpu_mode,this.gpu_step=this.resourceBroker.gpu_step,this.gpu_modes=this.resourceBroker.gpu_modes,this.updateResourceAllocationPane("refresh resource policy")})).catch((e=>{this.metadata_updating=!1,e&&e.message?(this.notification.text=m.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=m.relieve(e.title),this.notification.show(!0,e))}))}async _launchSessionDialog(){if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready||!0===this.resourceBroker.image_updating)setTimeout((()=>{this._launchSessionDialog()}),1e3);else{this.folderMapping=Object(),this._resetProgress(),await this.selectDefaultLanguage();const e=this.shadowRoot.querySelector('wl-expansion[name="ownership"]');globalThis.backendaiclient.is_admin?e.style.display="block":e.style.display="none",this._updateSelectedScalingGroup(),await this._refreshResourcePolicy(),this.requestUpdate(),this.shadowRoot.querySelector("#new-session-dialog").show()}}_generateKernelIndex(e,t){return e+":"+t}_moveToLastProgress(){this.moveProgress(4)}_newSessionWithConfirmation(){var e,t;const s=null===(t=null===(e=this._grid)||void 0===e?void 0:e.selectedItems)||void 0===t?void 0:t.map((e=>e.name)).length;if(this.currentIndex==this.progressLength){if(void 0!==s&&s>0)return this._newSession();this.shadowRoot.querySelector("#launch-confirmation-dialog").show()}else this._moveToLastProgress()}_newSession(){let e,t;if(this.shadowRoot.querySelector("#launch-confirmation-dialog").hide(),this.manualImageName&&this.manualImageName.value){const s=this.manualImageName.value.split(":");t=s.splice(-1,1)[0],e=s.join(":")}else{e=this.shadowRoot.querySelector("#environment").selected.id,t=this.shadowRoot.querySelector("#version").value}let s=this.shadowRoot.querySelector("#session-name").value;const i=this.shadowRoot.querySelector("#session-name").checkValidity(),o=this.selectedVfolders;if(this.cpu_request=parseInt(this.shadowRoot.querySelector("#cpu-resource").value),this.mem_request=parseFloat(this.shadowRoot.querySelector("#mem-resource").value),this.shmem_request=parseFloat(this.shadowRoot.querySelector("#shmem-resource").value),this.gpu_request=parseFloat(this.shadowRoot.querySelector("#gpu-resource").value),this.session_request=parseInt(this.shadowRoot.querySelector("#session-resource").value),this.num_sessions=this.session_request,this.sessions_list.includes(s))return this.notification.text=h("session.launcher.DuplicatedSessionName"),void this.notification.show();if(!i)return this.notification.text=h("session.launcher.SessionNameAllowCondition"),void this.notification.show();if(""===e||""===t||"Not Selected"===t)return this.notification.text=h("session.launcher.MustSpecifyVersion"),void this.notification.show();this.scaling_group=this.shadowRoot.querySelector("#scaling-groups").value;const r={};r.group_name=globalThis.backendaiclient.current_group,r.domain=globalThis.backendaiclient._config.domainName,r.scaling_group=this.scaling_group,globalThis.backendaiclient.supports("multi-container")&&(r.cluster_mode=this.cluster_mode,r.cluster_size=this.cluster_size),r.maxWaitSeconds=15;const a=this.shadowRoot.querySelector("#owner-enabled");if(a&&a.checked&&(r.group_name=this.shadowRoot.querySelector("#owner-group").value,r.domain=this.ownerDomain,r.scaling_group=this.shadowRoot.querySelector("#owner-scaling-group").value,r.owner_access_key=this.shadowRoot.querySelector("#owner-accesskey").value,!(r.group_name&&r.domain&&r.scaling_group&&r.owner_access_key)))return this.notification.text=h("session.launcher.NotEnoughOwnershipInfo"),void this.notification.show();switch(r.cpu=this.cpu_request,this.gpu_request_type){case"cuda.shares":r["cuda.shares"]=this.gpu_request;break;case"cuda.device":r["cuda.device"]=this.gpu_request;break;case"rocm.device":r["rocm.device"]=this.gpu_request;break;case"tpu.device":r["tpu.device"]=this.gpu_request;break;default:this.gpu_request>0&&this.gpu_mode&&(r[this.gpu_mode]=this.gpu_request)}if("Infinity"===String(this.shadowRoot.querySelector("#mem-resource").value)?r.mem=String(this.shadowRoot.querySelector("#mem-resource").value):r.mem=String(this.mem_request)+"g",this.shmem_request>this.mem_request&&(this.shmem_request=this.mem_request,this.notification.text=h("session.launcher.SharedMemorySettingIsReduced"),this.notification.show()),this.mem_request>4&&this.shmem_request<1&&(this.shmem_request=1),r.shmem=String(this.shmem_request)+"g",0==s.length&&(s=this.generateSessionId()),0!==o.length&&(r.mounts=o,0!==Object.keys(this.folderMapping).length)){r.mount_map={};for(const e in this.folderMapping)({}).hasOwnProperty.call(this.folderMapping,e)&&(r.mount_map[e]="/home/work/"+this.folderMapping[e])}let n;"import"===this.mode&&""!==this.importScript&&(r.bootstrap_script=this.importScript),this.environ_values!=={}&&(r.env=this.environ_values),""!==this.shadowRoot.querySelector("#OpenMPCore").value&&(r.env.OMP_NUM_THREADS=Math.max(0,parseInt(this.shadowRoot.querySelector("#OpenMPCore").value)).toString()),""!==this.shadowRoot.querySelector("#OpenBLASCore").value&&(r.env.OPENBLAS_NUM_THREADS=Math.max(0,parseInt(this.shadowRoot.querySelector("#OpenBLASCore").value)).toString()),n=this._debug||this.manualImageName&&""!==this.manualImageName.value?this.manualImageName.value:this._generateKernelIndex(e,t),this.shadowRoot.querySelector("#launch-button").disabled=!0,this.shadowRoot.querySelector("#launch-button-msg").textContent=h("session.Preparing"),this.notification.text=h("session.PreparingSession"),this.notification.show();const l=[],c=this._getRandomString();if(this.num_sessions>1)for(let e=1;e<=this.num_sessions;e++){const t={kernelName:n,sessionName:`${s}-${c}-${e}`,config:r};l.push(t)}else l.push({kernelName:n,sessionName:s,config:r});const d=l.map((e=>this.tasker.add("Creating "+e.sessionName,this._createKernel(e.kernelName,e.sessionName,e.config),"","session")));Promise.all(d).then((e=>{this.shadowRoot.querySelector("#new-session-dialog").hide(),this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent=h("session.launcher.ConfirmAndLaunch"),this._resetProgress(),setTimeout((()=>{this.metadata_updating=!0,this.aggregateResource("session-creation"),this.metadata_updating=!1}),1500);const t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t),1===e.length&&e[0].taskobj.then((e=>{let t;t="kernelId"in e?{"session-name":e.kernelId,"access-key":""}:{"session-uuid":e.sessionId,"session-name":e.sessionName,"access-key":""};const s=e.servicePorts;!0===Array.isArray(s)?t["app-services"]=s.map((e=>e.name)):t["app-services"]=[],"import"===this.mode&&(t.runtime="jupyter",t.filename=this.importFilename),s.length>0&&globalThis.appLauncher.showLauncher(t)})).catch((e=>{})),this._updateSelectedFolder(!1)})).catch((e=>{e&&e.message?(this.notification.text=m.relieve(e.message),e.description?this.notification.text=m.relieve(e.description):this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=m.relieve(e.title),this.notification.show(!0,e));const t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t),this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent=h("session.launcher.ConfirmAndLaunch")}))}_getRandomString(){let e=Math.floor(52*Math.random()*52*52);let t="";for(let i=0;i<3;i++)t+=(s=e%52)<26?String.fromCharCode(65+s):String.fromCharCode(97+s-26),e=Math.floor(e/52);var s;return t}_createKernel(e,t,s){const i=globalThis.backendaiclient.createIfNotExists(e,t,s,2e4);return i.catch((e=>{e&&e.message?("statusCode"in e&&408===e.statusCode?this.notification.text=h("session.launcher.sessionStillPreparing"):e.description?this.notification.text=m.relieve(e.description):this.notification.text=m.relieve(e.message),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=m.relieve(e.title),this.notification.show(!0,e))})),i}_hideSessionDialog(){this.shadowRoot.querySelector("#new-session-dialog").hide()}_aliasName(e){const t={python:"Python",tensorflow:"TensorFlow",pytorch:"PyTorch",lua:"Lua",r:"R","r-base":"R",julia:"Julia",rust:"Rust",cpp:"C++",gcc:"GCC",go:"Go",tester:"Tester",haskell:"Haskell",matlab:"MATLAB",sagemath:"Sage",texlive:"TeXLive",java:"Java",php:"PHP",octave:"Octave",nodejs:"Node",caffe:"Caffe",scheme:"Scheme",scala:"Scala",base:"Base",cntk:"CNTK",h2o:"H2O.AI","triton-server":"Triton Server",digits:"DIGITS","ubuntu-linux":"Ubuntu Linux",tf1:"TensorFlow 1",tf2:"TensorFlow 2",py3:"Python 3",py2:"Python 2",py27:"Python 2.7",py35:"Python 3.5",py36:"Python 3.6",py37:"Python 3.7",py38:"Python 3.8",py39:"Python 3.9",py310:"Python 3.10",ji15:"Julia 1.5",ji16:"Julia 1.6",ji17:"Julia 1.7",lxde:"LXDE",lxqt:"LXQt",xfce:"XFCE",gnome:"GNOME",kde:"KDE","ubuntu16.04":"Ubuntu 16.04","ubuntu18.04":"Ubuntu 18.04","ubuntu20.04":"Ubuntu 20.04",intel:"Intel MKL",2018:"2018",2019:"2019",2020:"2020",2021:"2021",2022:"2022",tpu:"TPU:TPUv3",rocm:"GPU:ROCm",cuda9:"GPU:CUDA9",cuda10:"GPU:CUDA10","cuda10.0":"GPU:CUDA10","cuda10.1":"GPU:CUDA10.1","cuda10.2":"GPU:CUDA10.2","cuda10.3":"GPU:CUDA10.3",cuda11:"GPU:CUDA11","cuda11.0":"GPU:CUDA11","cuda11.1":"GPU:CUDA11.1","cuda11.2":"GPU:CUDA11.2","cuda11.3":"GPU:CUDA11.3",miniconda:"Miniconda","anaconda2018.12":"Anaconda 2018.12","anaconda2019.12":"Anaconda 2019.12","alpine3.8":"Alpine Linux 3.8","alpine3.12":"Alpine Linux 3.12",ngc:"Nvidia GPU Cloud",ff:"Research Env."};return e in t?t[e]:e}_updateVersions(e){if(e in this.resourceBroker.supports){{this.version_selector.disabled=!0;const t=this.resourceBroker.supports[e];t.sort(),t.reverse(),this.versions=t,this.kernel=e}return void 0!==this.versions?this.version_selector.layout(!0).then((()=>{this.version_selector.select(1),this.version_selector.value=this.versions[0],this._updateVersionSelectorText(this.version_selector.value),this.version_selector.disabled=!1,this.environ_values={},this.updateResourceAllocationPane("update versions")})):void 0}}_updateVersionSelectorText(e){const t=this._getVersionInfo(e),s=[];t.forEach((e=>{s.push(e.tag)})),this.version_selector.selectedText=s.join(" / ")}generateSessionId(){let e="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let s=0;s<8;s++)e+=t.charAt(Math.floor(Math.random()*t.length));return e+"-session"}async _updateVirtualFolderList(){return this.resourceBroker.updateVirtualFolderList().then((()=>{this.vfolders=this.resourceBroker.vfolders}))}async _aggregateResourceUse(e=""){return this.resourceBroker._aggregateCurrentResource(e).then((async e=>(this.concurrency_used=this.resourceBroker.concurrency_used,this.scaling_group=this.resourceBroker.scaling_group,this.scaling_groups=this.resourceBroker.scaling_groups,this.resource_templates=this.resourceBroker.resource_templates,this.resource_templates_filtered=this.resourceBroker.resource_templates_filtered,this.total_slot=this.resourceBroker.total_slot,this.total_resource_group_slot=this.resourceBroker.total_resource_group_slot,this.total_project_slot=this.resourceBroker.total_project_slot,this.used_slot=this.resourceBroker.used_slot,this.used_resource_group_slot=this.resourceBroker.used_resource_group_slot,this.used_project_slot=this.resourceBroker.used_project_slot,this.used_project_slot_percent=this.resourceBroker.used_project_slot_percent,this.concurrency_limit=this.resourceBroker.concurrency_limit?this.resourceBroker.concurrency_limit:1,this.available_slot=this.resourceBroker.available_slot,this.used_slot_percent=this.resourceBroker.used_slot_percent,this.used_resource_group_slot_percent=this.resourceBroker.used_resource_group_slot_percent,await this.updateComplete,Promise.resolve(!0)))).catch((e=>(e&&e.message&&(e.description?this.notification.text=m.relieve(e.description):this.notification.text=m.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)),Promise.resolve(!1))))}aggregateResource(e=""){void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._aggregateResourceUse(e)}),!0):this._aggregateResourceUse(e)}async updateResourceAllocationPane(e=""){if(1==this.metric_updating)return;if("refresh resource policy"===e)return this.metric_updating=!1,this._aggregateResourceUse("update-metric").then((()=>this.updateResourceAllocationPane("after refresh resource policy")));const t=this.shadowRoot.querySelector("#environment").selected,s=this.version_selector.selected;if(null===s)return void(this.metric_updating=!1);const i=s.value;if(this._updateVersionSelectorText(i),null==t||t.getAttribute("disabled"))this.metric_updating=!1;else if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)document.addEventListener("backend-ai-connected",(()=>{this.updateResourceAllocationPane(e)}),!0);else{if(this.metric_updating=!0,await this._aggregateResourceUse("update-metric"),await this._updateVirtualFolderList(),this.autoMountedVfolders=this.vfolders.filter((e=>e.name.startsWith("."))),this.nonAutoMountedVfolders=this.vfolders.filter((e=>!e.name.startsWith("."))),0===Object.keys(this.resourceBroker.resourceLimits).length)return void(this.metric_updating=!1);const e=t.id,s=i;if(""===e||""===s)return void(this.metric_updating=!1);const o=e+":"+s,r=this.resourceBroker.resourceLimits[o];if(!r)return void(this.metric_updating=!1);this.gpu_mode=this.resourceBroker.gpu_mode,this.gpu_step=this.resourceBroker.gpu_step,this.gpu_modes=this.resourceBroker.gpu_modes,globalThis.backendaiclient.supports("multi-container")&&this.cluster_size>1&&(this.gpu_step=1);const a=this.resourceBroker.available_slot;this.shadowRoot.querySelector("#cpu-resource").disabled=!1,this.shadowRoot.querySelector("#mem-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").disabled=!1,globalThis.backendaiclient.supports("multi-container")&&(this.cluster_size=1,this.shadowRoot.querySelector("#cluster-size").value=this.cluster_size),this.shadowRoot.querySelector("#session-resource").disabled=!1,this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent=h("session.launcher.ConfirmAndLaunch");let n=!1,l={min:.0625,max:2,preferred:.125};if(this.cuda_device_metric={min:0,max:0},r.forEach((e=>{if("cpu"===e.key){const t={...e};t.min=parseInt(t.min),"cpu"in this.userResourceLimit?0===parseInt(t.max)||"Infinity"===t.max||isNaN(t.max)?t.max=Math.min(parseInt(this.userResourceLimit.cpu),a.cpu,this.max_cpu_core_per_session):t.max=Math.min(parseInt(t.max),parseInt(this.userResourceLimit.cpu),a.cpu,this.max_cpu_core_per_session):0===parseInt(t.max)||"Infinity"===t.max||isNaN(t.max)?t.max=Math.min(this.available_slot.cpu,this.max_cpu_core_per_session):t.max=Math.min(parseInt(t.max),a.cpu,this.max_cpu_core_per_session),t.min>=t.max&&(t.min>t.max&&(t.min=t.max,n=!0),this.shadowRoot.querySelector("#cpu-resource").disabled=!0),this.cpu_metric=t,this.cluster_support&&"single-node"===this.cluster_mode&&(this.cluster_metric.max=Math.min(t.max,this.max_containers_per_session),this.cluster_metric.min>this.cluster_metric.max?this.cluster_metric.min=this.cluster_metric.max:this.cluster_metric.min=t.min)}if("cuda.device"===e.key&&"cuda.device"==this.gpu_mode){const t={...e};t.min=parseInt(t.min),"cuda.device"in this.userResourceLimit?0===parseInt(t.max)||"Infinity"===t.max||isNaN(t.max)?t.max=Math.min(parseInt(this.userResourceLimit["cuda.device"]),parseInt(a.cuda_device),this.max_cuda_device_per_container):t.max=Math.min(parseInt(t.max),parseInt(this.userResourceLimit["cuda.device"]),a.cuda_device,this.max_cuda_device_per_container):0===parseInt(t.max)||"Infinity"===t.max||isNaN(t.max)?t.max=Math.min(parseInt(this.available_slot.cuda_device),this.max_cuda_device_per_container):t.max=Math.min(parseInt(t.max),parseInt(a.cuda_device),this.max_cuda_device_per_container),t.min>=t.max&&(t.min>t.max&&(t.min=t.max,n=!0),this.shadowRoot.querySelector("#gpu-resource").disabled=!0),this.cuda_device_metric=t}if("cuda.shares"===e.key&&"cuda.shares"===this.gpu_mode){const t={...e};t.min=parseFloat(t.min),"cuda.shares"in this.userResourceLimit?0===parseFloat(t.max)||"Infinity"===t.max||isNaN(t.max)?t.max=Math.min(parseFloat(this.userResourceLimit["cuda.shares"]),a.cuda_shares,this.max_cuda_shares_per_container):t.max=Math.min(parseFloat(t.max),parseFloat(this.userResourceLimit["cuda.shares"]),a.cuda_shares,this.max_cuda_shares_per_container):0!==parseFloat(t.max)?t.max=Math.min(parseFloat(t.max),a.cuda_shares,this.max_cuda_shares_per_container):t.max=0,t.min>=t.max&&(t.min>t.max&&(t.min=t.max,n=!0),this.shadowRoot.querySelector("#gpu-resource").disabled=!0),this.cuda_shares_metric=t,t.max>0&&(this.cuda_device_metric=t)}if("rocm.device"===e.key&&"rocm.device"===this.gpu_mode){const t={...e};t.min=parseInt(t.min),t.max=parseInt(t.max),t.min,t.max,this.rocm_device_metric=t}if("tpu.device"===e.key){const t={...e};t.min=parseInt(t.min),t.max=parseInt(t.max),t.min,t.max,this.tpu_device_metric=t}if("mem"===e.key){const t={...e};t.min=globalThis.backendaiclient.utils.changeBinaryUnit(t.min,"g"),t.min<.1&&(t.min=.1);const s=globalThis.backendaiclient.utils.changeBinaryUnit(t.max,"g","g");if("mem"in this.userResourceLimit){const e=globalThis.backendaiclient.utils.changeBinaryUnit(this.userResourceLimit.mem,"g");0!==parseInt(s)?t.max=Math.min(parseFloat(s),parseFloat(e),a.mem,this.max_mem_per_container):t.max=Math.min(parseFloat(e),a.mem,this.max_mem_per_container)}else 0!==parseInt(t.max)&&"Infinity"!==t.max&&!0!==isNaN(t.max)?t.max=Math.min(parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(t.max,"g","g")),a.mem,this.max_mem_per_container):t.max=Math.min(a.mem,this.max_mem_per_container);t.min>=t.max&&(t.min>t.max&&(t.min=t.max,n=!0),this.shadowRoot.querySelector("#mem-resource").disabled=!0),t.min=Number(t.min.toFixed(2)),t.max=Number(t.max.toFixed(2)),this.mem_metric=t}"shmem"===e.key&&(l={...e},l.preferred="preferred"in l?globalThis.backendaiclient.utils.changeBinaryUnit(l.preferred,"g","g"):.0625)})),l.max=this.max_shm_per_container,l.min=.0625,l.min>=l.max&&(l.min>l.max&&(l.min=l.max,n=!0),this.shadowRoot.querySelector("#shmem-resource").disabled=!0),l.min=Number(l.min.toFixed(2)),l.max=Number(l.max.toFixed(2)),this.shmem_metric=l,0==this.cuda_device_metric.min&&0==this.cuda_device_metric.max)if(this.shadowRoot.querySelector("#gpu-resource").disabled=!0,this.shadowRoot.querySelector("#gpu-resource").value=0,this.resource_templates!==[]&&this.resource_templates.length>0){const e=[];for(let t=0;t<this.resource_templates.length;t++)"cuda_device"in this.resource_templates[t]||"cuda_shares"in this.resource_templates[t]?(parseFloat(this.resource_templates[t].cuda_device)<=0&&!("cuda_shares"in this.resource_templates[t])||parseFloat(this.resource_templates[t].cuda_shares)<=0&&!("cuda_device"in this.resource_templates[t])||parseFloat(this.resource_templates[t].cuda_device)<=0&&parseFloat(this.resource_templates[t].cuda_shares)<=0)&&e.push(this.resource_templates[t]):e.push(this.resource_templates[t]);this.resource_templates_filtered=e}else this.resource_templates_filtered=this.resource_templates;else this.shadowRoot.querySelector("#gpu-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").value=this.cuda_device_metric.max,this.resource_templates_filtered=this.resource_templates;if(this.resource_templates_filtered!==[]&&this.resource_templates_filtered.length>0){const e=this.resource_templates_filtered[0];this._chooseResourceTemplate(e),this.shadowRoot.querySelector("#resource-templates").layout(!0).then((()=>{this.shadowRoot.querySelector("#resource-templates").select(1)}))}else this._updateResourceIndicator(this.cpu_metric.min,this.mem_metric.min,"none",0);n?(this.shadowRoot.querySelector("#cpu-resource").disabled=!0,this.shadowRoot.querySelector("#mem-resource").disabled=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!0,this.shadowRoot.querySelector("#session-resource").disabled=!0,this.shadowRoot.querySelector("#shmem-resource").disabled=!0,this.shadowRoot.querySelector("#launch-button").disabled=!0,this.shadowRoot.querySelector(".allocation-check").display="none",this.cluster_support&&(this.shadowRoot.querySelector("#cluster-size").disabled=!0),this.shadowRoot.querySelector("#launch-button-msg").textContent=h("session.launcher.NotEnoughResource")):(this.shadowRoot.querySelector("#cpu-resource").disabled=!1,this.shadowRoot.querySelector("#mem-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").disabled=!1,this.shadowRoot.querySelector("#session-resource").disabled=!1,this.shadowRoot.querySelector("#shmem-resource").disabled=!1,this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector(".allocation-check").display="block",this.cluster_support&&(this.shadowRoot.querySelector("#cluster-size").disabled=!1)),this.cuda_device_metric.min==this.cuda_device_metric.max&&(this.shadowRoot.querySelector("#gpu-resource").disabled=!0),this.concurrency_limit<=1&&(this.shadowRoot.querySelector("#session-resource").max=2,this.shadowRoot.querySelector("#session-resource").value=1,this.shadowRoot.querySelector("#session-resource").disabled=!0),this.metric_updating=!1}}updateLanguage(){const e=this.shadowRoot.querySelector("#environment").selected;if(null===e)return;const t=e.id;this._updateVersions(t)}folderMapRenderer(e,t,s){b(u`
        <vaadin-text-field id="vfolder-alias-${s.item.name}" clear-button-visible prevent-invalid-input
                           pattern="^[a-zA-Z0-9\._-]*$" ?disabled="${!s.selected}"
                           theme="small" placeholder="${s.item.name}"
                           @change="${e=>this._updateFolderMap(s.item.name,e.target.value)}"></vaadin-text-field>
        </template>
      `,e)}async _updateFolderMap(e,t){if(""===t)return e in this.folderMapping&&delete this.folderMapping[e],await this.shadowRoot.querySelector("#vfolder-mount-preview").updateComplete.then((()=>this.requestUpdate())),Promise.resolve(!0);if(e!==t){if(this.selectedVfolders.includes(t))return this.notification.text=h("session.launcher.FolderAliasOverlapping"),this.notification.show(),delete this.folderMapping[e],this.shadowRoot.querySelector("#vfolder-alias-"+e).value="",await this.shadowRoot.querySelector("#vfolder-mount-preview").updateComplete.then((()=>this.requestUpdate())),Promise.resolve(!1);for(const s in this.folderMapping)if({}.hasOwnProperty.call(this.folderMapping,s)&&this.folderMapping[s]==t)return this.notification.text=h("session.launcher.FolderAliasOverlapping"),this.notification.show(),delete this.folderMapping[e],this.shadowRoot.querySelector("#vfolder-alias-"+e).value="",await this.shadowRoot.querySelector("#vfolder-mount-preview").updateComplete.then((()=>this.requestUpdate())),Promise.resolve(!1);return this.folderMapping[e]=t,await this.shadowRoot.querySelector("#vfolder-mount-preview").updateComplete.then((()=>this.requestUpdate())),Promise.resolve(!0)}return Promise.resolve(!0)}changed(e){console.log(e)}isEmpty(e){return 0===e.length}_toggleAdvancedSettings(){this.shadowRoot.querySelector("#advanced-resource-settings").toggle()}_setClusterMode(e){this.cluster_mode=e.target.value}_setClusterSize(e){this.cluster_size=e.target.value>0?Math.round(e.target.value):0,this.shadowRoot.querySelector("#cluster-size").value=this.cluster_size;let t=1;globalThis.backendaiclient.supports("multi-container")&&(this.cluster_size>1?this.gpu_step=1:(t=0,this.gpu_step=this.resourceBroker.gpu_step),this._setSessionLimit(t))}_setSessionLimit(e=1){const t=this.shadowRoot.querySelector("#session-resource");e>0?(t.value=e,this.session_request=e,t.disabled=!0):(t.max=this.concurrency_limit,t.disabled=!1)}_chooseResourceTemplate(e){let t;t=void 0!==e.cpu?e:e.target.closest("mwc-list-item");const s=t.cpu,i=t.mem,o=t.cuda_device,r=t.cuda_shares,a=t.rocm_device,n=t.tpu_device;let l,c;void 0!==o||void 0!==r?void 0===o?(l="cuda.shares",c=r):(l="cuda.device",c=o):void 0!==a?(l="rocm.device",c=a):void 0!==n?(l="tpu.device",c=n):(l="none",c=0);const d=t.shmem?t.shmem:this.shmem_metric;this.shmem_request="number"!=typeof d?d.preferred:d||.0625,this.shmem_metric.max=t.mem,this._updateResourceIndicator(s,i,l,c)}_updateResourceIndicator(e,t,s,i){this.shadowRoot.querySelector("#cpu-resource").value=e,this.shadowRoot.querySelector("#mem-resource").value=t,this.shadowRoot.querySelector("#gpu-resource").value=i,this.shadowRoot.querySelector("#shmem-resource").value=this.shmem_request,this.cpu_request=e,this.mem_request=t,this.gpu_request=i,this.gpu_request_type=s}async selectDefaultLanguage(e=!1,t=""){if(!0===this._default_language_updated&&!1===e)return;""!==t?this.default_language=t:void 0!==globalThis.backendaiclient._config.default_session_environment&&"default_session_environment"in globalThis.backendaiclient._config&&""!==globalThis.backendaiclient._config.default_session_environment?this.default_language=globalThis.backendaiclient._config.default_session_environment:this.languages.length>1?this.default_language=this.languages[1].name:0!==this.languages.length?this.default_language=this.languages[0].name:this.default_language="index.docker.io/lablup/ngc-tensorflow";const s=this.shadowRoot.querySelector("#environment"),i=s.items.find((e=>e.value===this.default_language));if(void 0===i&&void 0!==globalThis.backendaiclient&&!1===globalThis.backendaiclient.ready)return setTimeout((()=>(console.log("Environment selector is not ready yet. Trying to set the default language again."),this.selectDefaultLanguage(e,t))),500),Promise.resolve(!0);const o=s.items.indexOf(i);return s.select(o),this._default_language_updated=!0,Promise.resolve(!0)}_selectDefaultVersion(e){return!1}async _fetchSessionOwnerGroups(){this.ownerFeatureInitialized||(this.shadowRoot.querySelector("#owner-group").addEventListener("selected",this._fetchSessionOwnerScalingGroups.bind(this)),this.ownerFeatureInitialized=!0);const e=this.shadowRoot.querySelector("#owner-email"),t=e.value;if(!e.checkValidity())return this.notification.text=h("credential.validation.InvalidEmailAddress"),this.notification.show(),this.ownerKeypairs=[],void(this.ownerGroups=[]);const s=await globalThis.backendaiclient.keypair.list(t,["access_key"]);if(this.ownerKeypairs=s.keypairs,this.ownerKeypairs.length<1)return this.notification.text=h("session.launcher.NoActiveKeypair"),this.notification.show(),this.ownerKeypairs=[],void(this.ownerGroups=[]);this.shadowRoot.querySelector("#owner-accesskey").layout(!0).then((()=>{this.shadowRoot.querySelector("#owner-accesskey").select(0)}));const i=await globalThis.backendaiclient.user.get(t,["domain_name","groups {id name}"]);this.ownerDomain=i.user.domain_name,this.ownerGroups=i.user.groups,this.ownerGroups&&this.shadowRoot.querySelector("#owner-group").layout(!0).then((()=>{this.shadowRoot.querySelector("#owner-group").select(0)}))}async _fetchSessionOwnerScalingGroups(){const e=this.shadowRoot.querySelector("#owner-group").value;if(!e)return void(this.ownerScalingGroups=[]);const t=await globalThis.backendaiclient.scalingGroup.list(e);this.ownerScalingGroups=t.scaling_groups,this.ownerScalingGroups&&this.shadowRoot.querySelector("#owner-scaling-group").layout(!0).then((()=>{this.shadowRoot.querySelector("#owner-scaling-group").select(0)}))}_toggleResourceGauge(){""==this.resourceGauge.style.display||"flex"==this.resourceGauge.style.display||"block"==this.resourceGauge.style.display?this.resourceGauge.style.display="none":(document.body.clientWidth<750?(this.resourceGauge.style.left="20px",this.resourceGauge.style.right="20px",this.resourceGauge.style.backgroundColor="var(--paper-red-800)"):this.resourceGauge.style.backgroundColor="transparent",this.resourceGauge.style.display="flex")}_showKernelDescription(e,t){e.stopPropagation();const s=t.kernelname;if(s in this.resourceBroker.imageInfo&&"description"in this.resourceBroker.imageInfo[s]){const e=this.shadowRoot.querySelector("#help-description");this._helpDescriptionTitle=this.resourceBroker.imageInfo[s].name,this._helpDescription=this.resourceBroker.imageInfo[s].description,this._helpDescriptionIcon=t.icon,e.show()}else s in this.imageInfo?this._helpDescriptionTitle=this.resourceBroker.imageInfo[s].name:this._helpDescriptionTitle=s,this._helpDescription=h("session.launcher.NoDescriptionFound")}_showResourceDescription(e,t){e.stopPropagation();const s={cpu:{name:h("session.launcher.CPU"),desc:h("session.launcher.DescCPU")},mem:{name:h("session.launcher.Memory"),desc:h("session.launcher.DescMemory")},shmem:{name:h("session.launcher.SharedMemory"),desc:h("session.launcher.DescSharedMemory")},gpu:{name:h("session.launcher.GPU"),desc:h("session.launcher.DescGPU")},session:{name:h("session.launcher.TitleSession"),desc:h("session.launcher.DescSession")},"single-node":{name:h("session.launcher.SingleNode"),desc:h("session.launcher.DescSingleNode")},"multi-node":{name:h("session.launcher.MultiNode"),desc:h("session.launcher.DescMultiNode")},"openmp-optimization":{name:h("session.launcher.OpenMPOptimization"),desc:h("session.launcher.DescOpenMPOptimization")}};if(t in s){this._helpDescriptionTitle=s[t].name,this._helpDescription=s[t].desc,this._helpDescriptionIcon="";this.shadowRoot.querySelector("#help-description").show()}}_showEnvConfigDescription(e){e.stopPropagation(),this._helpDescriptionTitle=h("session.launcher.EnvironmentVariableTitle"),this._helpDescription=h("session.launcher.DescSetEnv");this.shadowRoot.querySelector("#help-description").show()}_resourceTemplateToCustom(){this.shadowRoot.querySelector("#resource-templates").selectedText=h("session.launcher.CustomResourceApplied")}_applyResourceValueChanges(e,t=!0){const s=e.target.value;switch(e.target.id.split("-")[0]){case"cpu":this.cpu_request=s;break;case"mem":this.mem_request=s;break;case"shmem":this.shmem_request=s;break;case"gpu":this.gpu_request=s;break;case"session":this.session_request=s;break;case"cluster":this._changeTotalAllocationPane()}this.requestUpdate(),t?this._resourceTemplateToCustom():this._setClusterSize(e)}_changeTotalAllocationPane(){this._deleteAllocationPaneShadow();const e=this.shadowRoot.querySelector("#cluster-size").value;if(e>1){const t=this.shadowRoot.querySelector("#resource-allocated-box-shadow");for(let s=0;s<Math.min(6,e-1);s+=1){const e=document.createElement("div");e.classList.add("horizontal","layout","center","center-justified","resource-allocated-box","allocation-shadow"),e.style.position="absolute",e.style.top="-"+(5+5*s)+"px",e.style.left=5+5*s+"px";const i=245+2*s;e.style.backgroundColor="rgb("+i+","+i+","+i+")",e.style.borderColor="rgb("+(i-10)+","+(i-10)+","+(i-10)+")",e.style.zIndex=(6-s).toString(),t.appendChild(e)}this.shadowRoot.querySelector("#total-allocation-pane").appendChild(t)}}_deleteAllocationPaneShadow(){this.shadowRoot.querySelector("#resource-allocated-box-shadow").innerHTML=""}_updateShmemLimit(){const e=this.shadowRoot.querySelector("#shmem-resource"),t=parseFloat(this.shadowRoot.querySelector("#mem-resource").value);let s=e.value;this.shmem_metric.max=Math.min(this.max_shm_per_container,t),e.max=this.shmem_metric.max,parseFloat(s)>this.shmem_metric.max&&(s=this.shmem_metric.max,this.shmem_request=s,e.syncToSlider())}_conditionalGBtoMB(e){return e<1?(1024*e).toFixed(0):e}_conditionalGBtoMBunit(e){return e<1?"MB":"GB"}_getVersionInfo(e){const t=[],s=e.split("-");if(t.push({tag:this._aliasName(s[0]),color:"blue",size:"80px"}),s.length>1&&(this.kernel+":"+e in this.imageRequirements&&"framework"in this.imageRequirements[this.kernel+":"+e]?t.push({tag:this.imageRequirements[this.kernel+":"+e].framework,color:"red",size:"120px"}):t.push({tag:this._aliasName(s[1]),color:"red",size:"120px"})),s.length>2){const e=this._aliasName(s[2]).split(":");e.length>1?t.push({tag:e[1],app:e[0],color:"green",size:"150px"}):t.push({tag:e[0],color:"green",size:"150px"})}return t}_disableEnterKey(){this.shadowRoot.querySelectorAll("wl-expansion").forEach((e=>{e.onKeyDown=e=>{13===e.keyCode&&e.preventDefault()}}))}_validateInput(e){const t=e.target.closest("mwc-textfield");t.value&&(t.value=Math.round(t.value),t.value=globalThis.backendaiclient.utils.clamp(t.value,t.min,t.max))}_appendEnvRow(e="",t=""){const s=this.shadowRoot.querySelector("#modify-env-container"),i=s.children[s.children.length-1],o=this._createEnvRow(e,t);s.insertBefore(o,i.nextSibling)}_createEnvRow(e="",t=""){const s=document.createElement("div");s.setAttribute("class","row extra");const i=document.createElement("wl-textfield");i.setAttribute("type","text"),i.setAttribute("value",e);const o=document.createElement("wl-textfield");o.setAttribute("type","text"),o.setAttribute("value",t);const r=document.createElement("wl-button");r.setAttribute("class","fg pink"),r.setAttribute("fab",""),r.setAttribute("flat",""),r.addEventListener("click",(e=>this._removeEnvItem(e)));const a=document.createElement("wl-icon");return a.innerHTML="remove",r.appendChild(a),s.appendChild(i),s.appendChild(o),s.appendChild(r),s}_removeEnvItem(e){this.deleteEnvRow=e.target.parentNode,this.deleteEnvRow.remove()}_removeEmptyEnv(){const e=this.shadowRoot.querySelector("#modify-env-container").querySelectorAll(".row.extra");Array.prototype.filter.call(e,(e=>(e=>2===Array.prototype.filter.call(e.querySelectorAll("wl-textfield"),((e,t)=>""===e.value)).length)(e))).map((e=>e.parentNode.removeChild(e)))}modifyEnv(){this._parseEnvVariableList(),this._saveEnvVariableList();const e=this.shadowRoot.querySelector("#modify-env-dialog");e.closeWithConfirmation=!1,e.hide(),this.notification.text=h("session.launcher.EnvironmentVariableConfigurationDone"),this.notification.show()}_loadEnv(){this.environ.forEach(((e,t)=>{if(0===t){const t=this.shadowRoot.querySelector("#modify-env-container").querySelector(".row:not(.header)").querySelectorAll("wl-textfield");Array.prototype.forEach.call(t,((t,s)=>{t.value=0===s?e.name:e.value}))}else this._appendEnvRow(e.name,e.value)}))}_showEnvDialog(){this._removeEmptyEnv();const e=this.shadowRoot.querySelector("#modify-env-dialog");e.closeWithConfirmation=!0,e.show()}_closeAndResetEnvInput(){this._clearRows(),this._loadEnv(),this.closeDialog("env-config-confirmation");const e=this.shadowRoot.querySelector("#modify-env-dialog");e.closeWithConfirmation=!1,e.hide()}_parseEnvVariableList(){this.environ_values={};const e=this.shadowRoot.querySelector("#modify-env-container").querySelectorAll(".row:not(.header)"),t=e=>{const t=Array.prototype.map.call(e.querySelectorAll("wl-textfield"),(e=>e.value));return this.environ_values[t[0]]=t[1],t};Array.prototype.filter.call(e,(e=>(e=>0===Array.prototype.filter.call(e.querySelectorAll("wl-textfield"),((e,t)=>""===e.value)).length)(e))).map((e=>t(e)))}_saveEnvVariableList(){this.environ=Object.entries(this.environ_values).map((([e,t])=>({name:e,value:t})))}_resetEnvironmentVariables(){this.environ=[],this.environ_values={};null!==this.shadowRoot.querySelector("#modify-env-dialog")&&this._clearRows()}_clearRows(){const e=this.shadowRoot.querySelector("#modify-env-container");e.querySelectorAll(".row:not(.header)")[0].querySelectorAll("wl-textfield").forEach((e=>{e.value=""})),e.querySelectorAll(".row.extra").forEach((e=>{e.remove()}))}openDialog(e){this.shadowRoot.querySelector("#"+e).show()}closeDialog(e){this.shadowRoot.querySelector("#"+e).hide()}moveProgress(e){var t;const s=this.shadowRoot.querySelector("#progress-0"+this.currentIndex);this.currentIndex+=e,this.currentIndex>this.progressLength&&(this.currentIndex=globalThis.backendaiclient.utils.clamp(this.currentIndex+e,this.progressLength,1));const i=this.shadowRoot.querySelector("#progress-0"+this.currentIndex),o=this.shadowRoot.querySelector("#prev-button"),r=this.shadowRoot.querySelector("#next-button");s.classList.remove("active"),i.classList.add("active"),o.style.visibility=1==this.currentIndex?"hidden":"visible",r.style.visibility=this.currentIndex==this.progressLength?"hidden":"visible",this.shadowRoot.querySelector("#launch-button-msg").textContent=this.progressLength==this.currentIndex?h("session.launcher.Launch"):h("session.launcher.ConfirmAndLaunch"),null===(t=this._grid)||void 0===t||t.clearCache()}_resetProgress(){this.moveProgress(1-this.currentIndex),this._resetEnvironmentVariables(),this._unselectAllSelectedFolder()}_calculateProgress(){const e=this.progressLength>0?this.progressLength:1;return((this.currentIndex>0?this.currentIndex:1)/e).toFixed(2)}_toggleEnvironmentSelectUI(){var e;const t=this.shadowRoot.querySelector("mwc-select#environment"),s=this.shadowRoot.querySelector("mwc-select#version"),i=!!(null===(e=this.manualImageName)||void 0===e?void 0:e.value);t.disabled=s.disabled=i;const o=i?-1:1;t.select(o),s.select(o)}render(){return u`
      <link rel="stylesheet" href="resources/fonts/font-awesome-all.min.css">
      <wl-button raised class="primary-action" id="launch-session" ?disabled="${!this.enableLaunchButton}"
                 @click="${()=>this._launchSessionDialog()}">
        <wl-icon>power_settings_new</wl-icon>
        <span>${_("session.launcher.Start")}</span>
      </wl-button>
      <backend-ai-dialog id="new-session-dialog" narrowLayout fixed backdrop persistent>
        <span slot="title">${this.newSessionDialogTitle?this.newSessionDialogTitle:_("session.launcher.StartNewSession")}</span>
        <form slot="content" id="launch-session-form" class="centered" style="position:relative;">
          <div id="progress-01" class="progress center layout fade active">
            <mwc-select id="environment" icon="code" label="${_("session.launcher.Environments")}" required fixedMenuPosition
                        value="${this.default_language}">
              <mwc-list-item selected graphic="icon" style="display:none!important;">
                ${_("session.launcher.ChooseEnvironment")}
              </mwc-list-item>
              ${this.languages.map((e=>u`
                ${!1===e.clickable?u`
                  <h5 style="font-size:12px;padding: 0 10px 3px 10px;margin:0; border-bottom:1px solid #ccc;"
                      role="separator" disabled="true">${e.basename}</h5>
                `:u`
                  <mwc-list-item id="${e.name}" value="${e.name}" graphic="icon">
                    <img slot="graphic" alt="language icon" src="resources/icons/${e.icon}"
                         style="width:24px;height:24px;"/>
                    <div class="horizontal justified center flex layout" style="width:340px;">
                      <div style="padding-right:5px;">${e.basename}</div>
                      <div class="flex"></div>
                      <div class="horizontal layout end-justified center flex">
                        ${e.tags?e.tags.map((e=>u`
                          <lablup-shields slot="meta" style="margin-right:5px;" color="${e.color}"
                                          description="${e.tag}"></lablup-shields>
                          <span style="display:none">(${e.tag})</span>
                        `)):""}
                        <mwc-icon-button icon="info"
                                         class="fg blue info"
                                         @click="${t=>this._showKernelDescription(t,e)}">
                        </mwc-icon-button>
                      </div>
                    </div>
                  </mwc-list-item>
                `}
              `))}
            </mwc-select>
            <mwc-select id="version" icon="architecture" label="${_("session.launcher.Version")}" required fixedMenuPosition>
              <mwc-list-item selected style="display:none!important"></mwc-list-item>
              <h5 style="font-size:12px;padding: 0 10px 3px 15px;margin:0; border-bottom:1px solid #ccc;"
                  role="separator" disabled="true" class="horizontal layout">
                <div style="width:80px;">${_("session.launcher.Version")}</div>
                <div style="width:120px;">${_("session.launcher.Base")}</div>
                <div style="width:150px;">${_("session.launcher.Requirements")}</div>
              </h5>
              ${this.versions.map((e=>u`
                <mwc-list-item id="${e}" value="${e}">
                  <span style="display:none">${e}</span>
                  <div class="horizontal layout end-justified">
                  ${this._getVersionInfo(e).map((e=>u`
                    <lablup-shields style="width:${e.size}!important;"
                                    color="${e.color}"
                                    app="${void 0!==e.app&&""!=e.app&&" "!=e.app?e.app:""}"
                                    description="${e.tag}">
                    </lablup-shields>
                  `))}
                </div>
              </mwc-list-item>
            `))}
            </mwc-select>
            ${this._debug||this.allow_manual_image_name_for_session?u`
            <mwc-textfield id="image-name" type="text" class="flex" value="" icon="assignment_turned_in"
              label="${_("session.launcher.ManualImageName")}"
              @change=${e=>this._toggleEnvironmentSelectUI()}></mwc-textfield>
            `:u``}
            <mwc-textfield id="session-name" placeholder="${_("session.launcher.SessionNameOptional")}"
                           pattern="[a-zA-Z0-9_-]{4,}" maxLength="64" icon="label"
                           helper="${_("maxLength.64chars")}"
                           validationMessage="${_("session.launcher.SessionNameAllowCondition")}">
            </mwc-textfield>
            <div class="horizontal layout center justified">
              <span class="launcher-item-title" style="padding-left:16px;">${_("session.launcher.SetEnvironmentVariable")}</span>
              <mwc-button
                unelevated
                icon="rule"
                label="${_("session.launcher.Config")}"
                style="width:auto;margin-right:15px;"
                @click="${()=>this._showEnvDialog()}"></mwc-button>
            </div>
            <div class="environment-variables-container" style="margin-top:18px;">
              ${this.environ.length>0?u`
                <div class="horizontal flex center center-justified layout" style="overflow-x:hidden;">
                  <div role="listbox">
                    <h4>${h("session.launcher.EnvironmentVariable")}</h4>
                    ${this.environ.map((e=>u`
                      <wl-textfield disabled value="${e.name}"></wl-textfield>
                    `))}
                  </div>
                  <div role="listbox" style="margin-left:15px;">
                    <h4>${h("session.launcher.EnvironmentVariableValue")}</h4>
                    ${this.environ.map((e=>u`
                      <wl-textfield disabled value="${e.value}"></wl-textfield>
                    `))}
                  </div>
                </div>
              `:u`
                  <div class="vertical layout center flex blank-box">
                    <span>${_("session.launcher.NoEnvConfigured")}</span>
                  </div>
                `}
            </div>
          </div>
          <div id="progress-02" class="progress center layout fade" style="padding-top:0;">
          <wl-expansion class="vfolder" name="vfolder" open>
            <span slot="title">${_("session.launcher.FolderToMount")}</span>
            <div class="vfolder-list">
              <vaadin-grid
                  theme="row-stripes column-borders compact"
                  id="vfolder-grid"
                  aria-label="vfolder list"
                  height-by-rows
                  .items="${this.nonAutoMountedVfolders}"
                  @click="${()=>this._updateSelectedFolder()}">
                <vaadin-grid-selection-column id="select-column"
                                              flex-grow="0"
                                              text-align="center"
                                              auto-select></vaadin-grid-selection-column>
                <vaadin-grid-filter-column header="${_("session.launcher.FolderToMount")}"
                                          path="name" resizable></vaadin-grid-filter-column>
                <vaadin-grid-column .renderer="${this._boundFolderMapRenderer}" header="${_("session.launcher.FolderAlias")}">
                </vaadin-grid-column>
              </vaadin-grid>
              ${this.vfolders.length>0?u``:u`
              <div class="vertical layout center flex blank-box-medium">
                <span>${_("session.launcher.NoAvailableFolderToMount")}</span>
              </div>
              `}
            </div>
            </wl-expansion>
            <wl-expansion id="vfolder-mount-preview" class="vfolder" name="vfolder">
              <span slot="title">${_("session.launcher.MountedFolders")}</span>
              <div class="vfolder-mounted-list">
              ${this.selectedVfolders.length>0||this.autoMountedVfolders.length>0?u`
                <ul class="vfolder-list">
                    ${this.selectedVfolders.map((e=>u`
                      <li><mwc-icon>folder_open</mwc-icon>${e}
                      ${e in this.folderMapping?u` (&#10140; ${this.folderMapping[e]})`:u``}
                      </li>
                    `))}
                    ${this.autoMountedVfolders.map((e=>u`
                      <li><mwc-icon>folder_special</mwc-icon>${e.name}</li>
                    `))}
                </ul>
              `:u`
                  <div class="vertical layout center flex blank-box-large">
                    <span>${_("session.launcher.NoFolderMounted")}</span>
                  </div>
              `}
              </div>

            </wl-expansion>
          </div>
          <div id="progress-03" class="progress center layout fade">
            <div class="horizontal center layout">
              <mwc-select id="scaling-groups" label="${_("session.launcher.ResourceGroup")}"
                          icon="storage" required fixedMenuPosition
                          @selected="${e=>this.updateScalingGroup(!1,e)}">
                ${this.scaling_groups.map((e=>u`
                  <mwc-list-item class="scaling-group-dropdown"
                                id="${e.name}" graphic="icon"
                                value="${e.name}">
                    ${e.name}
                  </mwc-list-item>
                `))}
              </mwc-select>
            </div>
            <div class="vertical center layout" style="position:relative;">
              <mwc-select id="resource-templates" label="${_("session.launcher.ResourceAllocation")}"
                          icon="dashboard_customize" required fixedMenuPosition>
                <mwc-list-item selected style="display:none!important"></mwc-list-item>
                <h5 style="font-size:12px;padding: 0 10px 3px 15px;margin:0; border-bottom:1px solid #ccc;"
                    role="separator" disabled="true" class="horizontal layout center">
                  <div style="width:110px;">Name</div>
                  <div style="width:50px;text-align:right;">CPU</div>
                  <div style="width:50px;text-align:right;">RAM</div>
                  <div style="width:50px;text-align:right;">${_("session.launcher.SharedMemory")}</div>
                  <div style="width:90px;text-align:right;">${_("session.launcher.Accelerator")}</div>
                </h5>
                ${this.resource_templates_filtered.map((e=>u`
                  <mwc-list-item value="${e.name}"
                            id="${e.name}-button"
                            @click="${e=>{this._chooseResourceTemplate(e)}}"
                            .cpu="${e.cpu}"
                            .mem="${e.mem}"
                            .cuda_device="${e.cuda_device}"
                            .cuda_shares="${e.cuda_shares}"
                            .rocm_device="${e.rocm_device}"
                            .tpu_device="${e.tpu_device}"
                            .shmem="${e.shmem}">
                    <div class="horizontal layout end-justified">
                      <div style="width:110px;">${e.name}</div>
                      <div style="display:none"> (</div>
                      <div style="width:50px;text-align:right;">${e.cpu}<span style="display:none">CPU</span></div>
                      <div style="width:50px;text-align:right;">${e.mem}GB</div>
                      <div style="width:60px;text-align:right;">${e.shmem?u`
                            ${parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(e.shared_memory,"g")).toFixed(2)} GB`:u`64MB`}
                      </div>
                      <div style="width:80px;text-align:right;">
                        ${e.cuda_device&&e.cuda_device>0?u`${e.cuda_device} CUDA GPU`:u``}
                        ${e.cuda_shares&&e.cuda_shares>0?u`${e.cuda_shares} GPU`:u``}
                        ${e.rocm_device&&e.rocm_device>0?u`${e.rocm_device} ROCM GPU`:u``}
                        ${e.tpu_device&&e.tpu_device>0?u`${e.tpu_device} TPU`:u``}
                      </div>
                      <div style="display:none">)</div>
                    </div>
                  </mwc-list-item>
              `))}
              ${this.isEmpty(this.resource_templates_filtered)?u`
                <mwc-list-item class="resource-button vertical center start layout" role="option"
                              style="height:140px;width:350px;" type="button"
                              flat inverted outlined disabled>
                  <div>
                    <h4>${_("session.launcher.NoSuitablePreset")}</h4>
                    <div style="font-size:12px;">Use advanced settings to <br>start custom session</div>
                  </div>
                </mwc-list-item>
              `:u``}
              </mwc-select>
            </div>
            <wl-expansion name="resource-group">
              <span slot="title">${_("session.launcher.CustomAllocation")}</span>
              <div class="vertical center layout">
                <div class="horizontal center layout">
                  <div class="resource-type" style="width:70px;">CPU</div>
                  <lablup-slider id="cpu-resource" class="cpu"
                                pin snaps expand editable markers
                                @click="${e=>this._applyResourceValueChanges(e)}"
                                @focusout="${e=>this._applyResourceValueChanges(e)}"
                                marker_limit="${this.marker_limit}"
                                min="${this.cpu_metric.min}" max="${this.cpu_metric.max}"
                                value="${this.cpu_request}"></lablup-slider>
                  <span class="caption">${_("session.launcher.Core")}</span>
                  <mwc-icon-button icon="info" class="fg green info"
                                    @click="${e=>{this._showResourceDescription(e,"cpu")}}"></mwc-icon-button>
                </div>
                <div class="horizontal center layout">
                  <div class="resource-type">RAM</div>
                  <lablup-slider id="mem-resource" class="mem"
                                pin snaps step=0.05 editable markers
                                  @click="${()=>{this._resourceTemplateToCustom()}}"
                                  @changed="${()=>{this._updateShmemLimit()}}"
                                  @focusout="${e=>this._applyResourceValueChanges(e)}"
                                marker_limit="${this.marker_limit}"
                                min="${this.mem_metric.min}" max="${this.mem_metric.max}"
                                value="${this.mem_request}"></lablup-slider>
                  <span class="caption">GB</span>
                  <mwc-icon-button icon="info" class="fg orange info" @click="${e=>{this._showResourceDescription(e,"mem")}}"></mwc-icon-button>
                </div>
                <div class="horizontal center layout">
                  <div class="resource-type">${_("session.launcher.SharedMemory")}</div>
                  <lablup-slider id="shmem-resource" class="mem"
                                pin snaps step="0.0025" editable markers
                                @click="${e=>this._applyResourceValueChanges(e)}"
                                @focusout="${e=>this._applyResourceValueChanges(e)}"
                                marker_limit="${this.marker_limit}"
                                min="0.0625" max="${this.shmem_metric.max}"
                                value="${this.shmem_request}"></lablup-slider>
                  <span class="caption">GB</span>
                  <mwc-icon-button icon="info" class="fg orange info" @click="${e=>{this._showResourceDescription(e,"shmem")}}"></mwc-icon-button>
                </div>
                <div class="horizontal center layout">
                  <div class="resource-type">GPU</div>
                  <lablup-slider id="gpu-resource" class="gpu"
                                pin snaps editable markers step="${this.gpu_step}"
                                @click="${e=>this._applyResourceValueChanges(e)}"
                                @focusout="${e=>this._applyResourceValueChanges(e)}"
                                marker_limit="${this.marker_limit}"
                                min="0.0" max="${this.cuda_device_metric.max}" value="${this.gpu_request}"></lablup-slider>
                  <span class="caption">GPU</span>
                  <mwc-icon-button icon="info" class="fg blue info" @click="${e=>{this._showResourceDescription(e,"gpu")}}"></mwc-icon-button>
                </div>
                <div class="horizontal center layout">
                  <div class="resource-type">${_("webui.menu.Sessions")}</div>
                  <lablup-slider id="session-resource" class="session"
                                pin snaps editable markers step="1"
                                @click="${e=>this._applyResourceValueChanges(e)}"
                                @focusout="${e=>this._applyResourceValueChanges(e)}"
                                marker_limit="${this.marker_limit}"
                                min="1" max="${this.concurrency_limit}" value="${this.session_request}"></lablup-slider>
                  <span class="caption">#</span>
                  <mwc-icon-button icon="info" class="fg red info" @click="${e=>{this._showResourceDescription(e,"session")}}"></mwc-icon-button>
                </div>
              </div>
            </wl-expansion>
            ${this.cluster_support?u`
              <mwc-select id="cluster-mode" label="${_("session.launcher.ClusterMode")}" required
                          icon="account_tree" fixedMenuPosition
                          value="${this.cluster_mode}" @change="${e=>this._setClusterMode(e)}">
                ${this.cluster_mode_list.map((e=>u`
                  <mwc-list-item
                      class="cluster-mode-dropdown"
                      id="${e}"
                      value="${e}">
                    <div class="horizontal layout center" style="width:100%;">
                      <p style="width:300px;margin-left:21px;">${_("session.launcher."+e)}</p>
                      <mwc-icon-button
                          icon="info"
                          @click="${t=>this._showResourceDescription(t,e)}">
                      </mwc-icon-button>
                    </div>
                  </mwc-list-item>
                `))}
              </mwc-select>
              <div class="horizontal layout center" style="padding:0 24px;">
                <div class="resource-type">${_("session.launcher.ClusterSize")}</div>
                <lablup-slider id="cluster-size" class="cluster"
                              pin snaps expand editable markers
                              marker_limit="${this.marker_limit}"
                              min="${this.cluster_metric.min}" max="${this.cluster_metric.max}"
                              value="${this.cluster_size}"
                              @click="${e=>this._applyResourceValueChanges(e,!1)}"
                              @focusout="${e=>this._applyResourceValueChanges(e,!1)}"></lablup-slider>
                ${"single-node"===this.cluster_mode?u`
                  <span class="caption" style="width:60px;">${_("session.launcher.Container")}</span>
                `:u`
                  <span class="caption">${_("session.launcher.Node")}</span>
                `}
              </div>
             `:u``}
            <wl-expansion name="hpc-option-group">
              <span slot="title">${_("session.launcher.HPCOptimization")}</span>
              <div class="vertical center layout">
                <div class="horizontal center layout">
                  <div style="width:200px;">${_("session.launcher.NumOpenMPthreads")}</div>
                  <mwc-textfield id="OpenMPCore" type="number" placeholder="${_("session.launcher.(Automatic)")}"
                                 value="" min="0" max="1000" step="1" style="width:120px;"
                                 pattern="[0-9]+" @change="${e=>this._validateInput(e)}">
                  </mwc-textfield>
                  <mwc-icon-button icon="info" class="fg green info"
                                    @click="${e=>{this._showResourceDescription(e,"openmp-optimization")}}"></mwc-icon-button>
                </div>
                <div class="horizontal center layout">
                  <div style="width:200px;">${_("session.launcher.NumOpenBLASthreads")}</div>
                  <mwc-textfield id="OpenBLASCore" type="number" placeholder="${_("session.launcher.(Automatic)")}"
                                 value="" min="0" max="1000" step="1" style="width:120px;"
                                 pattern="[0-9]+" @change="${e=>this._validateInput(e)}">
                  </mwc-textfield>
                  <mwc-icon-button icon="info" class="fg green info"
                                    @click="${e=>{this._showResourceDescription(e,"openmp-optimization")}}"></mwc-icon-button>
                </div>
              </div>
            </wl-expansion>
            <wl-expansion name="ownership" style="--expansion-content-padding:15px 0;">
              <span slot="title">${_("session.launcher.SetSessionOwner")}</span>
              <div class="vertical layout">
                <div class="horizontal center layout">
                  <mwc-textfield id="owner-email" type="email" class="flex" value=""
                                pattern="^.+@.+\..+$" icon="mail"
                                label="${_("session.launcher.OwnerEmail")}" size="40"></mwc-textfield>
                  <mwc-icon-button icon="refresh" class="blue"
                                  @click="${()=>this._fetchSessionOwnerGroups()}">
                  </mwc-icon-button>
                </div>
                <mwc-select id="owner-accesskey" label="${_("session.launcher.OwnerAccessKey")}" icon="vpn_key" fixedMenuPosition naturalMenuWidth>
                  ${this.ownerKeypairs.map((e=>u`
                    <mwc-list-item class="owner-group-dropdown"
                                  id="${e.access_key}"
                                  value="${e.access_key}">
                      ${e.access_key}
                    </mwc-list-item>
                  `))}
                </mwc-select>
                <div class="horizontal center layout">
                  <mwc-select id="owner-group" label="${_("session.launcher.OwnerGroup")}" icon="group_work" fixedMenuPosition naturalMenuWidth>
                    ${this.ownerGroups.map((e=>u`
                      <mwc-list-item class="owner-group-dropdown"
                                    id="${e.name}"
                                    value="${e.name}">
                        ${e.name}
                      </mwc-list-item>
                    `))}
                  </mwc-select>
                  <mwc-select id="owner-scaling-group" label="${_("session.launcher.OwnerResourceGroup")}"
                              icon="storage" fixedMenuPosition>
                    ${this.ownerScalingGroups.map((e=>u`
                      <mwc-list-item class="owner-group-dropdown"
                                    id="${e.name}"
                                    value="${e.name}">
                        ${e.name}
                      </mwc-list-item>
                    `))}
                  </mwc-select>
                </div>
                <div class="horizontal layout start-justified center">
                <mwc-checkbox id="owner-enabled"></mwc-checkbox>
                <p style="color: rgba(0,0,0,0.6);">${_("session.launcher.LaunchSessionWithAccessKey")}</p>
                </div>
              </div>
            </wl-expansion>
          </div>
          <div id="progress-04" class="progress center layout fade">
            <p class="title">${_("session.launcher.TotalAllocation")}</p>
            <div class="vertical layout center center-justified cluster-total-allocation-container">
              <div id="cluster-allocation-pane" style="position:relative;${this.cluster_size<=1?"display:none;":""}">
                <div class="horizontal layout">
                  <div class="vertical layout center center-justified resource-allocated">
                    <p>${_("session.launcher.CPU")}</p>
                    <span>${this.cpu_request*(this.cluster_size<=1?this.session_request:this.cluster_size)}</span>
                    <p>Core</p>
                  </div>
                  <div class="vertical layout center center-justified resource-allocated">
                    <p>${_("session.launcher.Memory")}</p>
                    <span>${this.mem_request*(this.cluster_size<=1?this.session_request:this.cluster_size)}</span>
                    <p>GB</p>
                  </div>
                  <div class="vertical layout center center-justified resource-allocated">
                    <p>${_("session.launcher.SharedMemoryAbbr")}</p>
                    <span>${this._conditionalGBtoMB(this.shmem_request*(this.cluster_size<=1?this.session_request:this.cluster_size))}</span>
                    <p>${this._conditionalGBtoMBunit(this.shmem_request*(this.cluster_size<=1?this.session_request:this.cluster_size))}</p>
                  </div>
                  <div class="vertical layout center center-justified resource-allocated">
                    <p>${_("session.launcher.GPU")}</p>
                    <span>${this.gpu_request*(this.cluster_size<=1?this.session_request:this.cluster_size)}</span>
                    <p>${_("session.launcher.GPUSlot")}</p>
                  </div>
                </div>
              </div>
              <div id="total-allocation-container" class="horizontal layout center center-justified allocation-check">
                <div id="total-allocation-pane" style="position:relative;">
                  <div class="horizontal layout resource-allocated-box">
                    <div class="vertical layout center center-justified resource-allocated">
                      <p>${_("session.launcher.CPU")}</p>
                      <span>${this.cpu_request}</span>
                      <p>Core</p>
                    </div>
                    <div class="vertical layout center center-justified resource-allocated">
                      <p>${_("session.launcher.Memory")}</p>
                      <span>${this.mem_request}</span>
                      <p>GB</p>
                    </div>
                    <div class="vertical layout center center-justified resource-allocated">
                      <p>${_("session.launcher.SharedMemoryAbbr")}</p>
                      <span>${this._conditionalGBtoMB(this.shmem_request)}</span>
                      <p>${this._conditionalGBtoMBunit(this.shmem_request)}</p>
                    </div>
                    <div class="vertical layout center center-justified resource-allocated">
                      <p>${_("session.launcher.GPU")}</p>
                      <span>${this.gpu_request}</span>
                      <p>${_("session.launcher.GPUSlot")}</p>
                    </div>
                  </div>
                  <div id="resource-allocated-box-shadow"></div>
                </div>
                <div class="vertical layout center center-justified cluster-allocated" style="z-index:10;">
                  <div class="horizontal layout">
                    <p>×</p>
                    <span>${this.cluster_size<=1?this.session_request:this.cluster_size}</span>
                  </div>
                  <p class="small">${_("session.launcher.Container")}</p>
                </div>
                <div class="vertical layout center center-justified cluster-allocated" style="z-index:10;">
                  <div class="horizontal layout">
                    <p>${this.cluster_mode,""}</p>
                    <span>${"single-node"===this.cluster_mode?_("session.launcher.SingleNode"):_("session.launcher.MultiNode")}</span>
                  </div>
                  <p class="small">${_("session.launcher.AllocateNode")}</p>
                </div>
              </div>
            </div>
            <p class="title">${_("session.launcher.MountedFolders")}</p>
            <div id="mounted-folders-container">
              ${this.selectedVfolders.length>0||this.autoMountedVfolders.length>0?u`
                <ul class="vfolder-list">
                  ${this.selectedVfolders.map((e=>u`
                    <li><mwc-icon>folder_open</mwc-icon>${e}
                    ${e in this.folderMapping?u` (&#10140; ${this.folderMapping[e]})`:u``}
                    </li>
                  `))}
                  ${this.autoMountedVfolders.map((e=>u`
                    <li><mwc-icon>folder_special</mwc-icon>${e.name}</li>
                  `))}
                </ul>
              `:u`
                <div class="vertical layout center flex blank-box">
                  <span>${_("session.launcher.NoFolderMounted")}</span>
                </div>
              `}
            </div>
            <p class="title">${_("session.launcher.EnvironmentVariablePaneTitle")}</p>
            <div class="environment-variables-container">
              ${this.environ.length>0?u`
                <div class="horizontal flex center center-justified layout" style="overflow-x:hidden;">
                  <div role="listbox">
                    <h4>${h("session.launcher.EnvironmentVariable")}</h4>
                    ${this.environ.map((e=>u`
                      <wl-textfield disabled value="${e.name}"></wl-textfield>
                    `))}
                  </div>
                  <div role="listbox" style="margin-left:15px;">
                    <h4>${h("session.launcher.EnvironmentVariableValue")}</h4>
                    ${this.environ.map((e=>u`
                      <wl-textfield disabled value="${e.value}"></wl-textfield>
                    `))}
                  </div>
                </div>
              `:u`
                  <div class="vertical layout center flex blank-box">
                    <span>${_("session.launcher.NoEnvConfigured")}</span>
                  </div>
                `}
            </div>
          </div>
        </form>
        <div slot="footer" class="vertical flex layout">
          <div class="horizontal flex layout distancing center-center">
            <mwc-icon-button id="prev-button"
                            icon="arrow_back"
                            style="visibility:hidden;margin-right:12px;"
                            @click="${()=>this.moveProgress(-1)}"></mwc-icon-button>
            <mwc-button
                unelevated
                class="launch-button"
                id="launch-button"
                icon="rowing"
                @click="${()=>this._newSessionWithConfirmation()}">
              <span id="launch-button-msg">${_("session.launcher.Launch")}</span>
            </mwc-button>
            <mwc-icon-button id="next-button"
                            icon="arrow_forward"
                            style="margin-left:12px;"
                            @click="${()=>this.moveProgress(1)}"></mwc-icon-button>
          </div>
          <div class="horizontal flex layout">
            <lablup-progress-bar progress="${this._calculateProgress()}"></lablup-progress-bar>
          </div>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="modify-env-dialog" fixed backdrop persistent closeWithConfirmation>
        <span slot="title">${_("session.launcher.SetEnvironmentVariable")}</span>
        <span slot="action">
          <mwc-icon-button icon="info" @click="${e=>this._showEnvConfigDescription(e)}" style="pointer-events: auto;"></mwc-icon-button>
        </span>
        <div slot="content" id="modify-env-container">
          <div class="row header">
            <div> ${_("session.launcher.EnvironmentVariable")} </div>
            <div> ${_("session.launcher.EnvironmentVariableValue")} </div>
          </div>
          ${this.environ.forEach(((e,t)=>u`
          <div class="row">
            <wl-textfield
              type="text"
              value=${e.name}
            ></wl-textfield>
            <wl-textfield
              type="text"
              value=${e.value}
            ></wl-textfield>
            <wl-button
              fab flat
              class="fg pink"
              @click=${e=>this._removeEnvItem(e)}
            >
              <wl-icon>remove</wl-icon>
            </wl-button>
          </div>
          `))}
          <div class="row">
            <wl-textfield type="text"></wl-textfield>
            <wl-textfield type="text"></wl-textfield>
            <wl-button
              fab flat
              class="fg pink"
              @click=${()=>this._appendEnvRow()}
            >
              <wl-icon>add</wl-icon>
            </wl-button>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              icon="delete"
              label="${_("button.DeleteAll")}"
              @click="${()=>this._clearRows()}"></mwc-button>
          <mwc-button
              unelevated
              slot="footer"
              icon="check"
              label="${_("button.Save")}"
              @click="${()=>this.modifyEnv()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="help-description" fixed backdrop>
        <span slot="title">${this._helpDescriptionTitle}</span>
        <div slot="content" class="horizontal layout center" style="margin:5px;">
        ${""==this._helpDescriptionIcon?u``:u`
          <img slot="graphic" alt="help icon" src="resources/icons/${this._helpDescriptionIcon}"
               style="width:64px;height:64px;margin-right:10px;"/>
        `}
          <div style="font-size:14px;">${f(this._helpDescription)}</div>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="launch-confirmation-dialog" warning fixed backdrop>
        <span slot="title">${_("session.launcher.NoFolderMounted")}</span>
        <div slot="content" class="vertical layout">
          <p>${_("session.launcher.HomeDirectoryDeletionDialog")}</p>
          <p>${_("session.launcher.LaunchConfirmationDialog")}</p>
          <p>${_("dialog.ask.DoYouWantToProceed")}</p>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              unelevated
              class="launch-confirmation-button"
              id="launch-confirmation-button"
              icon="rowing"
              @click="${()=>this._newSession()}">
            <span>${_("session.launcher.Launch")}</span>
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="env-config-confirmation" warning fixed>
        <span slot="title">${_("dialog.title.LetsDouble-Check")}</span>
        <div slot="content">
          <p>${_("session.launcher.EnvConfigWillDisappear")}</p>
          <p>${_("dialog.ask.DoYouWantToProceed")}</p>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              id="env-config-remain-button"
              label="${_("button.Cancel")}"
              @click="${()=>this.closeDialog("env-config-confirmation")}"
              style="width:auto;margin-right:10px;">
          </mwc-button>
          <mwc-button
              unelevated
              id="env-config-reset-button"
              label="${_("button.DismissAndProceed")}"
              @click="${()=>this._closeAndResetEnvInput()}"
              style="width:auto;">
          </mwc-button>
        </div>
      </backend-ai-dialog>
`}};e([s("#image-name")],R.prototype,"manualImageName",void 0),e([t({type:Boolean})],R.prototype,"is_connected",void 0),e([t({type:Boolean})],R.prototype,"enableLaunchButton",void 0),e([t({type:Boolean})],R.prototype,"hideLaunchButton",void 0),e([t({type:String})],R.prototype,"location",void 0),e([t({type:String})],R.prototype,"mode",void 0),e([t({type:String})],R.prototype,"newSessionDialogTitle",void 0),e([t({type:String})],R.prototype,"importScript",void 0),e([t({type:String})],R.prototype,"importFilename",void 0),e([t({type:Object})],R.prototype,"imageRequirements",void 0),e([t({type:Object})],R.prototype,"resourceLimits",void 0),e([t({type:Object})],R.prototype,"userResourceLimit",void 0),e([t({type:Object})],R.prototype,"aliases",void 0),e([t({type:Object})],R.prototype,"tags",void 0),e([t({type:Object})],R.prototype,"icons",void 0),e([t({type:Object})],R.prototype,"imageInfo",void 0),e([t({type:String})],R.prototype,"kernel",void 0),e([t({type:Array})],R.prototype,"versions",void 0),e([t({type:Array})],R.prototype,"languages",void 0),e([t({type:Number})],R.prototype,"marker_limit",void 0),e([t({type:String})],R.prototype,"gpu_mode",void 0),e([t({type:Array})],R.prototype,"gpu_modes",void 0),e([t({type:Number})],R.prototype,"gpu_step",void 0),e([t({type:Object})],R.prototype,"cpu_metric",void 0),e([t({type:Object})],R.prototype,"mem_metric",void 0),e([t({type:Object})],R.prototype,"shmem_metric",void 0),e([t({type:Object})],R.prototype,"cuda_device_metric",void 0),e([t({type:Object})],R.prototype,"cuda_shares_metric",void 0),e([t({type:Object})],R.prototype,"rocm_device_metric",void 0),e([t({type:Object})],R.prototype,"tpu_device_metric",void 0),e([t({type:Object})],R.prototype,"cluster_metric",void 0),e([t({type:Array})],R.prototype,"cluster_mode_list",void 0),e([t({type:Boolean})],R.prototype,"cluster_support",void 0),e([t({type:Object})],R.prototype,"images",void 0),e([t({type:Object})],R.prototype,"total_slot",void 0),e([t({type:Object})],R.prototype,"total_resource_group_slot",void 0),e([t({type:Object})],R.prototype,"total_project_slot",void 0),e([t({type:Object})],R.prototype,"used_slot",void 0),e([t({type:Object})],R.prototype,"used_resource_group_slot",void 0),e([t({type:Object})],R.prototype,"used_project_slot",void 0),e([t({type:Object})],R.prototype,"available_slot",void 0),e([t({type:Number})],R.prototype,"concurrency_used",void 0),e([t({type:Number})],R.prototype,"concurrency_max",void 0),e([t({type:Number})],R.prototype,"concurrency_limit",void 0),e([t({type:Number})],R.prototype,"max_containers_per_session",void 0),e([t({type:Array})],R.prototype,"vfolders",void 0),e([t({type:Array})],R.prototype,"selectedVfolders",void 0),e([t({type:Array})],R.prototype,"autoMountedVfolders",void 0),e([t({type:Array})],R.prototype,"nonAutoMountedVfolders",void 0),e([t({type:Object})],R.prototype,"folderMapping",void 0),e([t({type:Object})],R.prototype,"used_slot_percent",void 0),e([t({type:Object})],R.prototype,"used_resource_group_slot_percent",void 0),e([t({type:Object})],R.prototype,"used_project_slot_percent",void 0),e([t({type:Array})],R.prototype,"resource_templates",void 0),e([t({type:Array})],R.prototype,"resource_templates_filtered",void 0),e([t({type:String})],R.prototype,"default_language",void 0),e([t({type:Number})],R.prototype,"cpu_request",void 0),e([t({type:Number})],R.prototype,"mem_request",void 0),e([t({type:Number})],R.prototype,"shmem_request",void 0),e([t({type:Number})],R.prototype,"gpu_request",void 0),e([t({type:String})],R.prototype,"gpu_request_type",void 0),e([t({type:Number})],R.prototype,"session_request",void 0),e([t({type:Boolean})],R.prototype,"_status",void 0),e([t({type:Number})],R.prototype,"num_sessions",void 0),e([t({type:String})],R.prototype,"scaling_group",void 0),e([t({type:Array})],R.prototype,"scaling_groups",void 0),e([t({type:Array})],R.prototype,"sessions_list",void 0),e([t({type:Boolean})],R.prototype,"metric_updating",void 0),e([t({type:Boolean})],R.prototype,"metadata_updating",void 0),e([t({type:Boolean})],R.prototype,"aggregate_updating",void 0),e([t({type:Object})],R.prototype,"scaling_group_selection_box",void 0),e([t({type:Object})],R.prototype,"resourceGauge",void 0),e([t({type:Boolean})],R.prototype,"ownerFeatureInitialized",void 0),e([t({type:String})],R.prototype,"ownerDomain",void 0),e([t({type:Array})],R.prototype,"ownerKeypairs",void 0),e([t({type:Array})],R.prototype,"ownerGroups",void 0),e([t({type:Array})],R.prototype,"ownerScalingGroups",void 0),e([t({type:Boolean})],R.prototype,"project_resource_monitor",void 0),e([t({type:Object})],R.prototype,"version_selector",void 0),e([t({type:Boolean})],R.prototype,"_default_language_updated",void 0),e([t({type:Boolean})],R.prototype,"_default_version_updated",void 0),e([t({type:String})],R.prototype,"_helpDescription",void 0),e([t({type:String})],R.prototype,"_helpDescriptionTitle",void 0),e([t({type:String})],R.prototype,"_helpDescriptionIcon",void 0),e([t({type:Number})],R.prototype,"max_cpu_core_per_session",void 0),e([t({type:Number})],R.prototype,"max_mem_per_container",void 0),e([t({type:Number})],R.prototype,"max_cuda_device_per_container",void 0),e([t({type:Number})],R.prototype,"max_cuda_shares_per_container",void 0),e([t({type:Number})],R.prototype,"max_shm_per_container",void 0),e([t({type:Boolean})],R.prototype,"allow_manual_image_name_for_session",void 0),e([t({type:Object})],R.prototype,"resourceBroker",void 0),e([t({type:Number})],R.prototype,"cluster_size",void 0),e([t({type:String})],R.prototype,"cluster_mode",void 0),e([t({type:Object})],R.prototype,"deleteEnvInfo",void 0),e([t({type:Object})],R.prototype,"deleteEnvRow",void 0),e([t({type:Array})],R.prototype,"environ",void 0),e([t({type:Object})],R.prototype,"environ_values",void 0),e([t({type:Object})],R.prototype,"vfolder_select_expansion",void 0),e([t({type:Number})],R.prototype,"currentIndex",void 0),e([t({type:Number})],R.prototype,"progressLength",void 0),e([t({type:Object})],R.prototype,"_grid",void 0),e([t({type:Boolean})],R.prototype,"_debug",void 0),e([t({type:Object})],R.prototype,"_boundFolderMapRenderer",void 0),R=e([i("backend-ai-session-launcher")],R);
