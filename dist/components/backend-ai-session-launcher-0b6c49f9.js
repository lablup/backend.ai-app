import{_ as e,p as t,q as s,c as i,L as o,d as r,I as a,a as c,n,e as l,b as d,h as u,B as p,g as h,f as m,t as _,o as g,l as v,r as y}from"./backend-ai-console-bf343de1.js";import"./lablup-progress-bar-079f88df.js";import"./mwc-switch-cafd197d.js";import"./input-behavior-023cba33.js";import{u as b}from"./unsafe-html-4880aecc.js";import"./expansion-74e96040.js";import"./mwc-slider-90480cbf.js";import"./textfield-67e7f371.js";
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let f=class extends o{constructor(){super(...arguments),this.editable=null,this.pin=null,this.markers=null,this.marker_limit=30,this.disabled=null}static get styles(){return[r,a,c,n,l,d`
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
    `}firstUpdated(){this.editable&&(this.textfield=this.shadowRoot.querySelector("#textfield"),this.textfield.style.display="flex"),this.updateStep(),this.checkMarkerDisplay()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}update(e){this.min=this.min>this.max?this.max:this.min,super.update(e)}updated(e){e.forEach(((e,t)=>{if("value"===t){setTimeout((()=>{this.editable&&this.syncToSlider(),this.slider.layout()}),500);const e=new CustomEvent("value-changed",{detail:{}});this.dispatchEvent(e)}["min","max","step"].includes(t)&&this.checkMarkerDisplay()}));let t=new CustomEvent("changed",{detail:""});this.dispatchEvent(t)}syncToText(){this.value=this.slider.value}syncToSlider(){this.textfield.step=this.step;let e=Math.round(this.textfield.value/this.step)*this.step;var t;this.textfield.value=e.toFixed((t=this.step,Math.floor(t)===t?0:t.toString().split(".")[1].length||0)),this.textfield.value>this.max&&(this.textfield.value=this.max),this.textfield.value<this.min&&(this.textfield.value=this.min),this.value=this.textfield.value,this.slider.value=this.textfield.value,this.slider.step=this.step}checkMarkerDisplay(){this.markers&&(this.max-this.min)/this.step>this.marker_limit&&this.slider.removeAttribute("markers"),this.updateStep()}updateStep(){const e=this.shadowRoot.querySelectorAll("wl-textfield");setTimeout((()=>{e.forEach((e=>{const t=e.getAttribute("step");e.$formElement.step=t}))}),100),this.step||(this.step=1),this.slider.setAttribute("step",this.step),this.slider.step=this.step}};e([t({type:Number})],f.prototype,"step",void 0),e([t({type:Number})],f.prototype,"value",void 0),e([t({type:Number})],f.prototype,"max",void 0),e([t({type:Number})],f.prototype,"min",void 0),e([t({type:Boolean})],f.prototype,"editable",void 0),e([t({type:Boolean})],f.prototype,"pin",void 0),e([t({type:Boolean})],f.prototype,"markers",void 0),e([t({type:Number})],f.prototype,"marker_limit",void 0),e([t({type:Boolean})],f.prototype,"disabled",void 0),e([t({type:Object})],f.prototype,"textfield",void 0),e([s("#slider",!0)],f.prototype,"slider",void 0),f=e([i("lablup-slider")],f);let w=class extends p{constructor(){super(),this.is_connected=!1,this.direction="horizontal",this.location="",this.aliases=Object(),this.aggregate_updating=!1,this.resourceGauge=Object(),this.project_resource_monitor=!1,this.active=!1,this.resourceBroker=globalThis.resourceBroker,this.notification=globalThis.lablupNotification,this.init_resource()}static get is(){return"backend-ai-resource-monitor"}static get styles(){return[r,a,c,n,l,d`
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
      `]}init_resource(){this.total_slot={},this.total_resource_group_slot={},this.total_project_slot={},this.used_slot={},this.used_resource_group_slot={},this.used_project_slot={},this.available_slot={},this.used_slot_percent={},this.used_resource_group_slot_percent={},this.used_project_slot_percent={},this.concurrency_used=0,this.concurrency_max=0,this.concurrency_limit=0,this._status="inactive",this.scaling_groups=[{name:""}],this.scaling_group="",this.sessions_list=[],this.metric_updating=!1,this.metadata_updating=!1}firstUpdated(){this.resourceGauge=this.shadowRoot.querySelector("#resource-gauges"),this._updateToggleResourceMonitorDisplay(),document.addEventListener("backend-ai-group-changed",(e=>{this.scaling_group="",this._updatePageVariables(!0)})),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_connected=!0,setInterval((()=>{this._periodicUpdateResourcePolicy()}),2e4)}),{once:!0}):this.is_connected=!0,document.addEventListener("backend-ai-session-list-refreshed",(()=>{this._updatePageVariables(!0)}))}async _periodicUpdateResourcePolicy(){return this.active?(await this._refreshResourcePolicy(),this.aggregateResource("refresh-resource-policy"),Promise.resolve(!0)):Promise.resolve(!1)}_updateSelectedScalingGroup(){let e=this.shadowRoot.querySelector("#scaling-groups"),t=e.items.find((e=>e.value===this.resourceBroker.scaling_group)),s=e.items.indexOf(t);e.select(s)}async updateScalingGroup(e=!1,t){if(await this.resourceBroker.updateScalingGroup(e,t.target.value),this.active){if("vertical"===this.direction){this.shadowRoot.querySelector("#scaling-group-select-box").firstChild.value=this.resourceBroker.scaling_group}!0===e&&(await this._refreshResourcePolicy(),this.aggregateResource("update-scaling-group"))}}async _viewStateChanged(e){await this.updateComplete,this.active&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.project_resource_monitor=this.resourceBroker.allow_project_resource_monitor,this._updatePageVariables(!0),this._disableEnterKey()}),{once:!0}):(this.project_resource_monitor=this.resourceBroker.allow_project_resource_monitor,await this._updatePageVariables(!0),this._disableEnterKey()),this._updateToggleResourceMonitorDisplay())}async _updatePageVariables(e){return this.active&&!1===this.metadata_updating?(this.metadata_updating=!0,await this.resourceBroker._updatePageVariables(e),setTimeout((()=>{this._updateScalingGroupSelector()}),1e3),this.sessions_list=this.resourceBroker.sessions_list,await this._refreshResourcePolicy(),this.aggregateResource("update-page-variable"),this.metadata_updating=!1,Promise.resolve(!0)):Promise.resolve(!1)}_updateToggleResourceMonitorDisplay(){document.body.clientWidth<750&&"horizontal"==this.direction&&(this.resourceGauge.style.display="none",this.shadowRoot.querySelector("#resource-gauge-switch-button").checked=!1),this.shadowRoot.querySelector("#resource-gauge-switch-button").checked="vertical"===this.direction}_updateScalingGroupSelector(){if("vertical"===this.direction){const e=this.shadowRoot.querySelector("#scaling-group-select-box");e.hasChildNodes()&&e.removeChild(e.firstChild);const t=document.createElement("mwc-select");t.label=h("session.launcher.ResourceGroup"),t.id="scaling-group-select",t.value=this.scaling_group,t.setAttribute("fullwidth","true"),t.style.margin="1px solid #ccc",t.addEventListener("selected",this.updateScalingGroup.bind(this,!0));let s=document.createElement("mwc-list-item");s.setAttribute("disabled","true"),s.innerHTML=h("session.launcher.SelectResourceGroup"),s.style.borderBottom="1px solid #ccc",t.appendChild(s);let i=t.value?t.value:this.resourceBroker.scaling_group;this.resourceBroker.scaling_groups.map((e=>{s=document.createElement("mwc-list-item"),s.value=e.name,s.setAttribute("graphic","icon"),i===e.name?s.selected=!0:s.selected=!1,s.innerHTML=e.name,t.appendChild(s)})),e.appendChild(t)}}async _refreshResourcePolicy(e=!1){return this.active?this.resourceBroker._refreshResourcePolicy().then((()=>(this.concurrency_used=this.resourceBroker.concurrency_used,this.concurrency_max=this.concurrency_used>this.resourceBroker.concurrency_max?this.concurrency_used:this.resourceBroker.concurrency_max,Promise.resolve(!0)))).catch((e=>(this.metadata_updating=!1,e&&e.message?(this.notification.text=m.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=m.relieve(e.title),this.notification.show(!0,e)),Promise.resolve(!1)))):Promise.resolve(!0)}_aliasName(e){let t={python:"Python",tensorflow:"TensorFlow",pytorch:"PyTorch",lua:"Lua",r:"R","r-base":"R",julia:"Julia",rust:"Rust",cpp:"C++",gcc:"GCC",go:"Go",tester:"Tester",haskell:"Haskell",matlab:"MATLAB",sagemath:"Sage",texlive:"TeXLive",java:"Java",php:"PHP",octave:"Octave",nodejs:"Node",caffe:"Caffe",scheme:"Scheme",scala:"Scala",base:"Base",cntk:"CNTK",h2o:"H2O.AI","triton-server":"Triton Server",digits:"DIGITS","ubuntu-linux":"Ubuntu Linux",tf1:"TensorFlow 1",tf2:"TensorFlow 2",py3:"Python 3",py2:"Python 2",py27:"Python 2.7",py35:"Python 3.5",py36:"Python 3.6",py37:"Python 3.7",py38:"Python 3.8",py39:"Python 3.9",lxde:"LXDE",lxqt:"LXQt",xfce:"XFCE",gnome:"GNOME",kde:"KDE","ubuntu16.04":"Ubuntu 16.04","ubuntu18.04":"Ubuntu 18.04","ubuntu20.04":"Ubuntu 20.04",intel:"Intel MKL",2018:"2018",2019:"2019",2020:"2020",2021:"2021",2022:"2022",tpu:"TPU:TPUv3",rocm:"GPU:ROCm",cuda9:"GPU:CUDA9",cuda10:"GPU:CUDA10","cuda10.0":"GPU:CUDA10","cuda10.1":"GPU:CUDA10.1","cuda10.2":"GPU:CUDA10.2","cuda10.3":"GPU:CUDA10.3",cuda11:"GPU:CUDA11","cuda11.0":"GPU:CUDA11","cuda11.1":"GPU:CUDA11.1","cuda11.2":"GPU:CUDA11.2",miniconda:"Miniconda","anaconda2018.12":"Anaconda 2018.12","anaconda2019.12":"Anaconda 2019.12","alpine3.8":"Alpine Linux 3.8",ngc:"Nvidia GPU Cloud",ff:"Research Env."};return e in t?t[e]:e}async _aggregateResourceUse(e=""){return this.resourceBroker._aggregateCurrentResource(e).then((t=>!1===t?setTimeout((()=>{this._aggregateResourceUse(e)}),1e3):(this.concurrency_used=this.resourceBroker.concurrency_used,this.scaling_group=this.resourceBroker.scaling_group,this.scaling_groups=this.resourceBroker.scaling_groups,this.total_slot=this.resourceBroker.total_slot,this.total_resource_group_slot=this.resourceBroker.total_resource_group_slot,this.total_project_slot=this.resourceBroker.total_project_slot,this.used_slot=this.resourceBroker.used_slot,this.used_resource_group_slot=this.resourceBroker.used_resource_group_slot,this.used_project_slot=this.resourceBroker.used_project_slot,this.used_project_slot_percent=this.resourceBroker.used_project_slot_percent,this.concurrency_limit=this.resourceBroker.concurrency_limit,this.available_slot=this.resourceBroker.available_slot,this.used_slot_percent=this.resourceBroker.used_slot_percent,this.used_resource_group_slot_percent=this.resourceBroker.used_resource_group_slot_percent,Promise.resolve(!0)))).then((()=>{})).catch((e=>(e&&e.message&&(console.log(e),this.notification.text=m.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)),Promise.resolve(!1))))}aggregateResource(e=""){void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._aggregateResourceUse(e)}),!0):this._aggregateResourceUse(e)}_toggleResourceGauge(e){let t=this.shadowRoot.querySelector("#resource-legend");e.target.checked?(this.resourceGauge.style.display="flex",t&&(t.style.display="flex"),document.body.clientWidth<750&&(this.resourceGauge.style.left="20px",this.resourceGauge.style.right="20px")):(this.resourceGauge.style.display="none",t&&(t.style.display="none"))}_disableEnterKey(){this.shadowRoot.querySelectorAll("wl-expansion").forEach((e=>{e.onKeyDown=e=>{13===e.keyCode&&e.preventDefault()}}))}_numberWithPostfix(e,t=""){return isNaN(parseInt(e))?"":parseInt(e)+t}render(){return u`
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
 */
class x extends g{constructor(){super(...arguments),this.left=!1,this.graphic="control"}render(){const e={"mdc-list-item__graphic":this.left,"mdc-list-item__meta":!this.left},t=this.renderText(),s=this.graphic&&"control"!==this.graphic&&!this.left?this.renderGraphic():u``,i=this.hasMeta&&this.left?this.renderMeta():u``,o=this.renderRipple();return u`
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
      ${i}`}async onChange(e){const t=e.target;this.selected===t.checked||(this._skipPropRequest=!0,this.selected=t.checked,await this.updateComplete,this._skipPropRequest=!1)}}e([s("slot")],x.prototype,"slotElement",void 0),e([s("mwc-checkbox")],x.prototype,"checkboxElement",void 0),e([t({type:Boolean})],x.prototype,"left",void 0),e([t({type:String,reflect:!0})],x.prototype,"graphic",void 0);
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
const k=d`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-list-item__meta{height:40px;width:40px}`
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
*/;let $=class extends x{};$.styles=[y,k],$=e([i("mwc-check-list-item")],$);let S=class extends p{constructor(){super(),this.is_connected=!1,this.enableLaunchButton=!1,this.hideLaunchButton=!1,this.location="",this.mode="normal",this.newSessionDialogTitle="",this.importScript="",this.importFilename="",this.imageRequirements=Object(),this.resourceLimits=Object(),this.userResourceLimit=Object(),this.aliases=Object(),this.tags=Object(),this.icons=Object(),this.imageInfo=Object(),this.kernel="",this.marker_limit=25,this.gpu_modes=[],this.gpu_step=.1,this.cpu_metric={min:"1",max:"1"},this.mem_metric={min:"1",max:"1"},this.shmem_metric={min:.0625,max:1,preferred:.0625},this.cuda_device_metric={min:0,max:0},this.rocm_device_metric={min:"0",max:"0"},this.tpu_device_metric={min:"1",max:"1"},this.cluster_metric={min:1,max:1},this.cluster_mode_list=["single-node","multi-node"],this.cluster_support=!1,this.aggregate_updating=!1,this.resourceGauge=Object(),this.ownerFeatureInitialized=!1,this.ownerDomain="",this.project_resource_monitor=!1,this.version_selector=Object(),this._default_language_updated=!1,this._default_version_updated=!1,this._helpDescription="",this._helpDescriptionTitle="",this._helpDescriptionIcon="",this.max_cpu_core_per_session=64,this.max_cuda_device_per_container=16,this.max_cuda_shares_per_container=16,this.max_shm_per_container=2,this.cluster_size=1,this.deleteEnvInfo=Object(),this.deleteEnvRow=Object(),this.environ=Array(),this.environ_values=Object(),this._debug=!1,this.active=!1,this.ownerKeypairs=[],this.ownerGroups=[],this.ownerScalingGroups=[],this.resourceBroker=globalThis.resourceBroker,this.notification=globalThis.lablupNotification,this.init_resource()}static get is(){return"backend-ai-session-launcher"}static get styles(){return[r,a,c,n,l,d`
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

        mwc-linear-progress {
          width: 90px;
          height: 5px;
          --mdc-theme-primary: #98be5a;
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

        .resource-button {
          height: 140px;
          width: 330px;
          margin: 5px;
          padding: 0;
          font-size: 14px;
        }

        #new-session-dialog {
          --component-width: 400px;
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

        #scaling-groups {
          width: 50%;
        }

        #launch-session {
          width: var(--component-width, auto);
          height: var(--component-height, 36px);
        }

        #launch-session[disabled] {
          background-image: var(--general-sidebar-color);
          --mdc-theme-on-primary: var(--general-button-color);
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
          --expansion-margin-open: 0;
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

        mwc-select#scaling-groups {
          margin-right: 0;
          padding-right: 0;
          width: 50%;
          --mdc-select-min-width: 190px;
        }

        mwc-select#owner-group {
          margin-right: 0;
          padding-right: 0;
          width: 50%;
          --mdc-select-min-width: 190px;
        }
        mwc-select#owner-scaling-group {
          margin-right: 0;
          padding-right: 0;
          width: 50%;
          --mdc-select-min-width: 190px;
        }

        mwc-select > mwc-list-item.cluster-mode-dropdown {
          --mdc-list-side-padding: auto 0px;
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
          width: 50%;
          padding-top: 20px;
          padding-left: 0;
          margin-left: 0;
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

        #launch-confirmation-dialog {
          --component-width: 400px;
          --component-font-size: 14px;
        }

        mwc-icon-button.info {
          --mdc-icon-button-size: 30px;
        }

        mwc-icon {
          --mdc-icon-size: 14px;
        }

        ul {
          list-style-type: none;
        }

        mwc-button > mwc-icon {
          display: none;
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
      `]}init_resource(){this.versions=["Not Selected"],this.languages=[],this.gpu_mode="none",this.total_slot={},this.total_resource_group_slot={},this.total_project_slot={},this.used_slot={},this.used_resource_group_slot={},this.used_project_slot={},this.available_slot={},this.used_slot_percent={},this.used_resource_group_slot_percent={},this.used_project_slot_percent={},this.resource_templates=[],this.resource_templates_filtered=[],this.vfolders=[],this.selectedVfolders=[],this.default_language="",this.concurrency_used=0,this.concurrency_max=0,this.concurrency_limit=1,this.max_containers_per_session=1,this._status="inactive",this.cpu_request=1,this.mem_request=1,this.shmem_request=.0625,this.gpu_request=0,this.gpu_request_type="cuda.device",this.session_request=1,this.scaling_groups=[{name:""}],this.scaling_group="",this.sessions_list=[],this.metric_updating=!1,this.metadata_updating=!1,this.cluster_size=0,this.cluster_mode="single-node",this.ownerFeatureInitialized=!1,this.ownerDomain="",this.ownerKeypairs=[],this.ownerGroups=[],this.ownerScalingGroups=[]}firstUpdated(){this.shadowRoot.querySelector("#environment").addEventListener("selected",this.updateLanguage.bind(this)),this.version_selector=this.shadowRoot.querySelector("#version"),this.version_selector.addEventListener("selected",(()=>{this.updateResourceAllocationPane()})),this.resourceGauge=this.shadowRoot.querySelector("#resource-gauges");const e=this.shadowRoot.querySelector("#gpu-resource");e.addEventListener("value-changed",(()=>{e.value>0?this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!0:this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!1})),this.shadowRoot.querySelector("#use-gpu-checkbox").addEventListener("change",(()=>{!0===this.shadowRoot.querySelector("#use-gpu-checkbox").checked?this.shadowRoot.querySelector("#gpu-resource").disabled=this.cuda_device_metric.min===this.cuda_device_metric.max:this.shadowRoot.querySelector("#gpu-resource").disabled=!0})),document.addEventListener("backend-ai-group-changed",(e=>{this._updatePageVariables(!0)})),document.addEventListener("backend-ai-resource-broker-updated",(e=>{})),!0===this.hideLaunchButton&&(this.shadowRoot.querySelector("#launch-session").style.display="none"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.max_cpu_core_per_session=globalThis.backendaiclient._config.maxCPUCoresPerContainer||64,this.max_cuda_device_per_container=globalThis.backendaiclient._config.maxCUDADevicesPerContainer||16,this.max_cuda_shares_per_container=globalThis.backendaiclient._config.maxCUDASharesPerContainer||16,this.max_shm_per_container=globalThis.backendaiclient._config.maxShmPerContainer||2,globalThis.backendaiclient.supports("multi-container")&&(this.cluster_support=!0),this.is_connected=!0,this._debug=globalThis.backendaiconsole.debug,this._enableLaunchButton()}),{once:!0}):(this.max_cpu_core_per_session=globalThis.backendaiclient._config.maxCPUCoresPerContainer||64,this.max_cuda_device_per_container=globalThis.backendaiclient._config.maxCUDADevicesPerContainer||16,this.max_cuda_shares_per_container=globalThis.backendaiclient._config.maxCUDASharesPerContainer||16,this.max_shm_per_container=globalThis.backendaiclient._config.maxShmPerContainer||2,globalThis.backendaiclient.supports("multi-container")&&(this.cluster_support=!0),this.is_connected=!0,this._debug=globalThis.backendaiconsole.debug,this._enableLaunchButton())}_enableLaunchButton(){this.resourceBroker.image_updating?setTimeout((()=>{this._enableLaunchButton()}),1e3):(this.languages=this.resourceBroker.languages,this.enableLaunchButton=!0)}_updateSelectedScalingGroup(){let e=this.shadowRoot.querySelector("#scaling-groups");this.scaling_groups=this.resourceBroker.scaling_groups;let t=e.items.find((e=>e.value===this.resourceBroker.scaling_group));if(""===this.resourceBroker.scaling_group||void 0===t)return void setTimeout((()=>{this._updateSelectedScalingGroup()}),500);let s=e.items.indexOf(t);e.select(-1),e.select(s),e.value=t.value,e.requestUpdate()}async updateScalingGroup(e=!1,t){this.active&&(await this.resourceBroker.updateScalingGroup(e,t.target.value),!0===e?await this._refreshResourcePolicy():this.updateResourceAllocationPane("session dialog"))}_updateSelectedFolder(e=!1){let t=this.shadowRoot.querySelector("#vfolder").selected,s=[];t.length>0&&(s=t.map((e=>e.value)),e&&this._unselectAllSelectedFolder()),this.selectedVfolders=s}_unselectAllSelectedFolder(){let e=this.shadowRoot.querySelector("#vfolder");e.selected&&(e.items.forEach(((t,s)=>{t.selected&&(e.toggle(s,!0),t.selected=!1)})),this.selectedVfolders=[])}async _viewStateChanged(e){await this.updateComplete,this.active&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.project_resource_monitor=this.resourceBroker.allow_project_resource_monitor,this._updatePageVariables(!0),this._disableEnterKey()}),{once:!0}):(this.project_resource_monitor=this.resourceBroker.allow_project_resource_monitor,await this._updatePageVariables(!0),this._disableEnterKey()))}async _updatePageVariables(e){this.active&&!1===this.metadata_updating&&(this.metadata_updating=!0,await this.resourceBroker._updatePageVariables(e),this._updateSelectedScalingGroup(),this.sessions_list=this.resourceBroker.sessions_list,await this._refreshResourcePolicy(),this.aggregateResource("update-page-variable"),this.metadata_updating=!1)}async _refreshResourcePolicy(){return this.resourceBroker._refreshResourcePolicy().then((()=>{this.concurrency_used=this.resourceBroker.concurrency_used,this.userResourceLimit=this.resourceBroker.userResourceLimit,this.concurrency_max=this.resourceBroker.concurrency_max,this.max_containers_per_session=this.resourceBroker.max_containers_per_session,this.gpu_mode=this.resourceBroker.gpu_mode,this.gpu_step=this.resourceBroker.gpu_step,this.gpu_modes=this.resourceBroker.gpu_modes,this.updateResourceAllocationPane("refresh resource policy")})).catch((e=>{this.metadata_updating=!1,e&&e.message?(this.notification.text=m.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=m.relieve(e.title),this.notification.show(!0,e))}))}async _launchSessionDialog(){if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready||!0===this.resourceBroker.image_updating)setTimeout((()=>{this._launchSessionDialog()}),1e3);else{this._resetEnvironmentVariables(),await this.selectDefaultLanguage();this.shadowRoot.querySelector("#gpu-resource").value>0?this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!0:this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!1;const e=this.shadowRoot.querySelector('wl-expansion[name="ownership"]');globalThis.backendaiclient.is_admin?e.style.display="block":e.style.display="none",this._updateSelectedScalingGroup(),await this._refreshResourcePolicy(),this.requestUpdate(),this.shadowRoot.querySelector("#new-session-dialog").show()}}_generateKernelIndex(e,t){return e+":"+t}_newSessionWithConfirmation(){if(0!==this.shadowRoot.querySelector("#vfolder").selected.map((e=>e.value)).length)return this._newSession();this.shadowRoot.querySelector("#launch-confirmation-dialog").show()}_newSession(){this.shadowRoot.querySelector("#launch-confirmation-dialog").hide();let e=this.shadowRoot.querySelector("#environment").selected.id,t=this.shadowRoot.querySelector("#version").value,s=this.shadowRoot.querySelector("#session-name").value,i=this.shadowRoot.querySelector("#session-name").checkValidity(),o=this.selectedVfolders;if(this.cpu_request=parseInt(this.shadowRoot.querySelector("#cpu-resource").value),this.mem_request=parseFloat(this.shadowRoot.querySelector("#mem-resource").value),this.shmem_request=parseFloat(this.shadowRoot.querySelector("#shmem-resource").value),this.gpu_request=parseFloat(this.shadowRoot.querySelector("#gpu-resource").value),this.session_request=parseInt(this.shadowRoot.querySelector("#session-resource").value),this.num_sessions=this.session_request,this.sessions_list.includes(s))return this.notification.text=h("session.launcher.DuplicatedSessionName"),void this.notification.show();if(!i)return this.notification.text=h("session.launcher.SessionNameAllowCondition"),void this.notification.show();if(""===e||""===t||"Not Selected"===t)return this.notification.text=h("session.launcher.MustSpecifyVersion"),void this.notification.show();this.scaling_group=this.shadowRoot.querySelector("#scaling-groups").value;let r={};r.group_name=globalThis.backendaiclient.current_group,r.domain=globalThis.backendaiclient._config.domainName,r.scaling_group=this.scaling_group,globalThis.backendaiclient.supports("multi-container")&&(r.cluster_mode=this.cluster_mode,r.cluster_size=this.cluster_size),r.maxWaitSeconds=15;const a=this.shadowRoot.querySelector("#owner-enabled");if(a&&a.checked&&(r.group_name=this.shadowRoot.querySelector("#owner-group").value,r.domain=this.ownerDomain,r.scaling_group=this.shadowRoot.querySelector("#owner-scaling-group").value,r.owner_access_key=this.shadowRoot.querySelector("#owner-accesskey").value,!(r.group_name&&r.domain&&r.scaling_group&&r.owner_access_key)))return this.notification.text=h("session.launcher.NotEnoughOwnershipInfo"),void this.notification.show();switch(r.cpu=this.cpu_request,this.gpu_request_type){case"cuda.shares":r["cuda.shares"]=this.gpu_request;break;case"cuda.device":r["cuda.device"]=this.gpu_request;break;case"rocm.device":r["rocm.device"]=this.gpu_request;break;case"tpu.device":r["tpu.device"]=this.gpu_request;break;default:this.gpu_request>0&&this.gpu_mode&&(r[this.gpu_mode]=this.gpu_request)}let c;"Infinity"===String(this.shadowRoot.querySelector("#mem-resource").value)?r.mem=String(this.shadowRoot.querySelector("#mem-resource").value):r.mem=String(this.mem_request)+"g",this.shmem_request>this.mem_request&&(this.shmem_request=this.mem_request,this.notification.text=h("session.launcher.SharedMemorySettingIsReduced"),this.notification.show()),this.mem_request>4&&this.shmem_request<1&&(this.shmem_request=1),r.shmem=String(this.shmem_request)+"g",!0!==this.shadowRoot.querySelector("#use-gpu-checkbox").checked&&("cuda.shares"==this.gpu_mode?r.fgpu=0:r.gpu=0),0==s.length&&(s=this.generateSessionId()),0!==o.length&&(r.mounts=o),"import"===this.mode&&""!==this.importScript&&(r.bootstrap_script=this.importScript),this.environ_values!=={}&&(r.env=this.environ_values),c=this._debug&&""!==this.manualImageName.value?this.manualImageName.value:this._generateKernelIndex(e,t),this.shadowRoot.querySelector("#launch-button").disabled=!0,this.shadowRoot.querySelector("#launch-button-msg").textContent=h("session.Preparing"),this.notification.text=h("session.PreparingSession"),this.notification.show();let n=[];const l=this._getRandomString();if(this.num_sessions>1)for(let e=1;e<=this.num_sessions;e++){let t={kernelName:c,sessionName:`${s}-${l}-${e}`,config:r};n.push(t)}else n.push({kernelName:c,sessionName:s,config:r});const d=n.map((e=>this.tasker.add("Creating "+e.sessionName,this._createKernel(e.kernelName,e.sessionName,e.config),"","session")));Promise.all(d).then((e=>{this.shadowRoot.querySelector("#new-session-dialog").hide(),this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent=h("session.launcher.Launch"),this._resetEnvironmentVariables(),setTimeout((()=>{this.metadata_updating=!0,this.aggregateResource("session-creation"),this.metadata_updating=!1}),1500);let t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t),1===e.length&&e[0].taskobj.then((e=>{let t;t="kernelId"in e?{"session-name":e.kernelId,"access-key":""}:{"session-uuid":e.sessionId,"session-name":e.sessionName,"access-key":""};let s=e.servicePorts;!0===Array.isArray(s)?t["app-services"]=s.map((e=>e.name)):t["app-services"]=[],"import"===this.mode&&(t.runtime="jupyter",t.filename=this.importFilename),s.length>0&&globalThis.appLauncher.showLauncher(t)})).catch((e=>{})),this.shadowRoot.querySelector("#vfolder-select-expansion").checked=!1,this._updateSelectedFolder(!1)})).catch((e=>{e&&e.message?(this.notification.text=m.relieve(e.message),e.description?this.notification.text=m.relieve(e.description):this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=m.relieve(e.title),this.notification.show(!0,e));let t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t),this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent=h("session.launcher.Launch")}))}_getRandomString(){let e=Math.floor(52*Math.random()*52*52);let t="";for(let i=0;i<3;i++)t+=(s=e%52)<26?String.fromCharCode(65+s):String.fromCharCode(97+s-26),e=Math.floor(e/52);var s;return t}_createKernel(e,t,s){const i=globalThis.backendaiclient.createIfNotExists(e,t,s,2e4);return i.catch((e=>{e&&e.message?("statusCode"in e&&408===e.statusCode?this.notification.text=h("session.launcher.sessionStillPreparing"):e.description?this.notification.text=m.relieve(e.description):this.notification.text=m.relieve(e.message),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=m.relieve(e.title),this.notification.show(!0,e))})),i}_hideSessionDialog(){this.shadowRoot.querySelector("#new-session-dialog").hide()}_aliasName(e){let t={python:"Python",tensorflow:"TensorFlow",pytorch:"PyTorch",lua:"Lua",r:"R","r-base":"R",julia:"Julia",rust:"Rust",cpp:"C++",gcc:"GCC",go:"Go",tester:"Tester",haskell:"Haskell",matlab:"MATLAB",sagemath:"Sage",texlive:"TeXLive",java:"Java",php:"PHP",octave:"Octave",nodejs:"Node",caffe:"Caffe",scheme:"Scheme",scala:"Scala",base:"Base",cntk:"CNTK",h2o:"H2O.AI","triton-server":"Triton Server",digits:"DIGITS","ubuntu-linux":"Ubuntu Linux",tf1:"TensorFlow 1",tf2:"TensorFlow 2",py3:"Python 3",py2:"Python 2",py27:"Python 2.7",py35:"Python 3.5",py36:"Python 3.6",py37:"Python 3.7",py38:"Python 3.8",py39:"Python 3.9",py310:"Python 3.10",lxde:"LXDE",lxqt:"LXQt",xfce:"XFCE",gnome:"GNOME",kde:"KDE","ubuntu16.04":"Ubuntu 16.04","ubuntu18.04":"Ubuntu 18.04","ubuntu20.04":"Ubuntu 20.04",intel:"Intel MKL",2018:"2018",2019:"2019",2020:"2020",2021:"2021",2022:"2022",tpu:"TPU:TPUv3",rocm:"GPU:ROCm",cuda9:"GPU:CUDA9",cuda10:"GPU:CUDA10","cuda10.0":"GPU:CUDA10","cuda10.1":"GPU:CUDA10.1","cuda10.2":"GPU:CUDA10.2","cuda10.3":"GPU:CUDA10.3",cuda11:"GPU:CUDA11","cuda11.0":"GPU:CUDA11","cuda11.1":"GPU:CUDA11.1","cuda11.2":"GPU:CUDA11.2","cuda11.3":"GPU:CUDA11.3",miniconda:"Miniconda","anaconda2018.12":"Anaconda 2018.12","anaconda2019.12":"Anaconda 2019.12","alpine3.8":"Alpine Linux 3.8","alpine3.12":"Alpine Linux 3.12",ngc:"Nvidia GPU Cloud",ff:"Research Env."};return e in t?t[e]:e}_updateVersions(e){if(e in this.resourceBroker.supports){{this.version_selector.disabled=!0;let t=this.resourceBroker.supports[e];t.sort(),t.reverse(),this.versions=t,this.kernel=e}return void 0!==this.versions?this.version_selector.layout(!0).then((()=>{this.version_selector.select(1),this.version_selector.value=this.versions[0],this._updateVersionSelectorText(this.version_selector.value),this.version_selector.disabled=!1,this.environ_values={},this.updateResourceAllocationPane("update versions")})):void 0}}_updateVersionSelectorText(e){let t=this._getVersionInfo(e),s=[];t.forEach((e=>{s.push(e.tag)})),this.version_selector.selectedText=s.join(" / ")}generateSessionId(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=0;s<8;s++)e+=t.charAt(Math.floor(Math.random()*t.length));return e+"-console"}async _updateVirtualFolderList(){return this.resourceBroker.updateVirtualFolderList().then((()=>{this.vfolders=this.resourceBroker.vfolders}))}async _aggregateResourceUse(e=""){return this.resourceBroker._aggregateCurrentResource(e).then((async e=>(this.concurrency_used=this.resourceBroker.concurrency_used,this.scaling_group=this.resourceBroker.scaling_group,this.scaling_groups=this.resourceBroker.scaling_groups,this.resource_templates=this.resourceBroker.resource_templates,this.resource_templates_filtered=this.resourceBroker.resource_templates_filtered,this.total_slot=this.resourceBroker.total_slot,this.total_resource_group_slot=this.resourceBroker.total_resource_group_slot,this.total_project_slot=this.resourceBroker.total_project_slot,this.used_slot=this.resourceBroker.used_slot,this.used_resource_group_slot=this.resourceBroker.used_resource_group_slot,this.used_project_slot=this.resourceBroker.used_project_slot,this.used_project_slot_percent=this.resourceBroker.used_project_slot_percent,this.concurrency_limit=this.resourceBroker.concurrency_limit?this.resourceBroker.concurrency_limit:1,this.available_slot=this.resourceBroker.available_slot,this.used_slot_percent=this.resourceBroker.used_slot_percent,this.used_resource_group_slot_percent=this.resourceBroker.used_resource_group_slot_percent,await this.updateComplete,Promise.resolve(!0)))).catch((e=>(e&&e.message&&(e.description?this.notification.text=m.relieve(e.description):this.notification.text=m.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)),Promise.resolve(!1))))}aggregateResource(e=""){void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._aggregateResourceUse(e)}),!0):this._aggregateResourceUse(e)}async updateResourceAllocationPane(e=""){if(1==this.metric_updating)return;if("refresh resource policy"===e)return this.metric_updating=!1,this._aggregateResourceUse("update-metric").then((()=>this.updateResourceAllocationPane("after refresh resource policy")));let t=this.shadowRoot.querySelector("#environment").selected,s=this.version_selector.selected;if(null===s)return void(this.metric_updating=!1);let i=s.value;if(this._updateVersionSelectorText(i),null==t||t.getAttribute("disabled"))this.metric_updating=!1;else if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)document.addEventListener("backend-ai-connected",(()=>{this.updateResourceAllocationPane(e)}),!0);else{if(this.metric_updating=!0,await this._aggregateResourceUse("update-metric"),await this._updateVirtualFolderList(),0===Object.keys(this.resourceBroker.resourceLimits).length)return void(this.metric_updating=!1);let e=t.id,s=i;if(""===e||""===s)return void(this.metric_updating=!1);let o=e+":"+s,r=this.resourceBroker.resourceLimits[o];if(!r)return void(this.metric_updating=!1);this.gpu_mode=this.resourceBroker.gpu_mode,this.gpu_step=this.resourceBroker.gpu_step,this.gpu_modes=this.resourceBroker.gpu_modes,globalThis.backendaiclient.supports("multi-container")&&this.cluster_size>1&&(this.gpu_step=1);let a=this.resourceBroker.available_slot;this.shadowRoot.querySelector("#cpu-resource").disabled=!1,this.shadowRoot.querySelector("#mem-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").disabled=!1,this.shadowRoot.querySelector("#session-resource").disabled=!1,this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent=h("session.launcher.Launch");let c=!1,n={min:.0625,max:2,preferred:.125};if(this.cuda_device_metric={min:0,max:0},r.forEach((e=>{if("cpu"===e.key){let t={...e};t.min=parseInt(t.min),"cpu"in this.userResourceLimit?0!==parseInt(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseInt(t.max),parseInt(this.userResourceLimit.cpu),a.cpu,this.max_cpu_core_per_session):t.max=Math.min(parseInt(this.userResourceLimit.cpu),a.cpu,this.max_cpu_core_per_session):0!==parseInt(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseInt(t.max),a.cpu,this.max_cpu_core_per_session):t.max=Math.min(this.available_slot.cpu,this.max_cpu_core_per_session),t.min>=t.max&&(t.min>t.max&&(t.min=t.max,c=!0),this.shadowRoot.querySelector("#cpu-resource").disabled=!0),this.cpu_metric=t,this.cluster_support&&"single-node"===this.cluster_mode&&(this.cluster_metric.max=Math.min(t.max,this.max_containers_per_session),this.cluster_metric.min>this.cluster_metric.max?this.cluster_metric.min=this.cluster_metric.max:this.cluster_metric.min=t.min)}if("cuda.device"===e.key&&"cuda.device"==this.gpu_mode){let t={...e};t.min=parseInt(t.min),"cuda.device"in this.userResourceLimit?0!==parseInt(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseInt(t.max),parseInt(this.userResourceLimit["cuda.device"]),a.cuda_device,this.max_cuda_device_per_container):t.max=Math.min(parseInt(this.userResourceLimit["cuda.device"]),a.cuda_device,this.max_cuda_device_per_container):0!==parseInt(t.max)?t.max=Math.min(parseInt(t.max),a.cuda_device,this.max_cuda_device_per_container):t.max=this.available_slot.cuda_device,t.min>=t.max&&(t.min>t.max&&(t.min=t.max,c=!0),this.shadowRoot.querySelector("#gpu-resource").disabled=!0),this.cuda_device_metric=t}if("cuda.shares"===e.key&&"cuda.shares"===this.gpu_mode){let t={...e};t.min=parseFloat(t.min),"cuda.shares"in this.userResourceLimit?0!==parseFloat(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseFloat(t.max),parseFloat(this.userResourceLimit["cuda.shares"]),a.cuda_shares,this.max_cuda_shares_per_container):t.max=Math.min(parseFloat(this.userResourceLimit["cuda.shares"]),a.cuda_shares,this.max_cuda_shares_per_container):0!==parseFloat(t.max)?t.max=Math.min(parseFloat(t.max),a.cuda_shares,this.max_cuda_shares_per_container):t.max=0,t.min>=t.max&&(t.min>t.max&&(t.min=t.max,c=!0),this.shadowRoot.querySelector("#gpu-resource").disabled=!0),this.cuda_shares_metric=t,t.max>0&&(this.cuda_device_metric=t)}if("rocm.device"===e.key&&"rocm.device"===this.gpu_mode){let t={...e};t.min=parseInt(t.min),t.max=parseInt(t.max),this.rocm_device_metric=t}if("tpu.device"===e.key){let t={...e};t.min=parseInt(t.min),t.max=parseInt(t.max),this.tpu_device_metric=t}if("mem"===e.key){let t={...e};t.min=globalThis.backendaiclient.utils.changeBinaryUnit(t.min,"g"),t.min<.1&&(t.min=.1);let s=globalThis.backendaiclient.utils.changeBinaryUnit(t.max,"g","g");if("mem"in this.userResourceLimit){let e=globalThis.backendaiclient.utils.changeBinaryUnit(this.userResourceLimit.mem,"g");0!==parseInt(s)?t.max=Math.min(parseFloat(s),parseFloat(e),a.mem):t.max=parseFloat(e)}else 0!==parseInt(t.max)&&"Infinity"!==t.max&&!0!==isNaN(t.max)?t.max=Math.min(parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(t.max,"g","g")),a.mem):t.max=a.mem;t.min>=t.max&&(t.min>t.max&&(t.min=t.max,c=!0),this.shadowRoot.querySelector("#mem-resource").disabled=!0),t.min=Number(t.min.toFixed(2)),t.max=Number(t.max.toFixed(2)),this.mem_metric=t}"shmem"===e.key&&(n={...e},n.preferred="preferred"in n?globalThis.backendaiclient.utils.changeBinaryUnit(n.preferred,"g","g"):.0625)})),n.max=this.max_shm_per_container,n.min=.0625,n.min>=n.max&&(n.min>n.max&&(n.min=n.max,c=!0),this.shadowRoot.querySelector("#shmem-resource").disabled=!0),n.min=Number(n.min.toFixed(2)),n.max=Number(n.max.toFixed(2)),this.shmem_metric=n,0==this.cuda_device_metric.min&&0==this.cuda_device_metric.max)if(this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0,this.shadowRoot.querySelector("#gpu-resource").value=0,this.resource_templates!==[]&&this.resource_templates.length>0){let e=[];for(let t=0;t<this.resource_templates.length;t++)"cuda_device"in this.resource_templates[t]||"cuda_shares"in this.resource_templates[t]?(parseFloat(this.resource_templates[t].cuda_device)<=0&&!("cuda_shares"in this.resource_templates[t])||parseFloat(this.resource_templates[t].cuda_shares)<=0&&!("cuda_device"in this.resource_templates[t])||parseFloat(this.resource_templates[t].cuda_device)<=0&&parseFloat(this.resource_templates[t].cuda_shares)<=0)&&e.push(this.resource_templates[t]):e.push(this.resource_templates[t]);this.resource_templates_filtered=e}else this.resource_templates_filtered=this.resource_templates;else this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").value=this.cuda_device_metric.max,this.resource_templates_filtered=this.resource_templates;if(this.resource_templates_filtered!==[]&&this.resource_templates_filtered.length>0){let e=this.resource_templates_filtered[0];this._chooseResourceTemplate(e),this.shadowRoot.querySelector("#resource-templates").layout(!0).then((()=>{this.shadowRoot.querySelector("#resource-templates").select(1)}))}else this._updateResourceIndicator(this.cpu_metric.min,this.mem_metric.min,"none",0);c?(this.shadowRoot.querySelector("#cpu-resource").disabled=!0,this.shadowRoot.querySelector("#mem-resource").disabled=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!0,this.shadowRoot.querySelector("#session-resource").disabled=!0,this.shadowRoot.querySelector("#shmem-resource").disabled=!0,this.shadowRoot.querySelector("#launch-button").disabled=!0,this.cluster_support&&(this.shadowRoot.querySelector("#cluster-size").disabled=!0),this.shadowRoot.querySelector("#launch-button-msg").textContent=h("session.launcher.NotEnoughResource")):(this.shadowRoot.querySelector("#cpu-resource").disabled=!1,this.shadowRoot.querySelector("#mem-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").disabled=!1,this.shadowRoot.querySelector("#session-resource").disabled=!1,this.shadowRoot.querySelector("#shmem-resource").disabled=!1,this.shadowRoot.querySelector("#launch-button").disabled=!1,this.cluster_support&&(this.shadowRoot.querySelector("#cluster-size").disabled=!1)),this.cuda_device_metric.min==this.cuda_device_metric.max&&(this.shadowRoot.querySelector("#gpu-resource").disabled=!0),this.concurrency_limit<=1&&(this.shadowRoot.querySelector("#session-resource").max=2,this.shadowRoot.querySelector("#session-resource").value=1,this.shadowRoot.querySelector("#session-resource").disabled=!0),this.metric_updating=!1}}updateLanguage(){let e=this.shadowRoot.querySelector("#environment").selected;if(null===e)return;let t=e.id;this._updateVersions(t)}changed(e){console.log(e)}isEmpty(e){return 0===e.length}_toggleAdvancedSettings(){this.shadowRoot.querySelector("#advanced-resource-settings").toggle()}_setClusterMode(e){this.cluster_mode=e.target.value}_setClusterSize(e){this.cluster_size=e.target.value>0?Math.round(e.target.value):0,this.shadowRoot.querySelector("#cluster-size").value=this.cluster_size,globalThis.backendaiclient.supports("multi-container")&&(this.cluster_size>1?this.gpu_step=1:this.gpu_step=this.resourceBroker.gpu_step)}_chooseResourceTemplate(e){let t;t=void 0!==e.cpu?e:e.target.closest("mwc-list-item");const s=t.cpu,i=t.mem,o=t.cuda_device,r=t.cuda_shares,a=t.rocm_device,c=t.tpu_device;let n,l;void 0!==o||void 0!==r?void 0===o?(n="cuda.shares",l=r):(n="cuda.device",l=o):void 0!==a?(n="rocm.device",l=a):void 0!==c?(n="tpu.device",l=c):(n="none",l=0);const d=t.shmem?t.shmem:this.shmem_metric;this.shmem_request="number"!=typeof d?d.preferred:d||.0625,this.shmem_metric.max=t.mem,this._updateResourceIndicator(s,i,n,l)}_updateResourceIndicator(e,t,s,i){this.shadowRoot.querySelector("#cpu-resource").value=e,this.shadowRoot.querySelector("#mem-resource").value=t,this.shadowRoot.querySelector("#gpu-resource").value=i,this.shadowRoot.querySelector("#shmem-resource").value=this.shmem_request,this.cpu_request=e,this.mem_request=t,this.gpu_request=i,this.gpu_request_type=s}async selectDefaultLanguage(e=!1,t=""){if(!0===this._default_language_updated&&!1===e)return;""!==t?this.default_language=t:void 0!==globalThis.backendaiclient._config.default_session_environment&&"default_session_environment"in globalThis.backendaiclient._config&&""!==globalThis.backendaiclient._config.default_session_environment?this.default_language=globalThis.backendaiclient._config.default_session_environment:this.languages.length>1?this.default_language=this.languages[1].name:0!==this.languages.length?this.default_language=this.languages[0].name:this.default_language="index.docker.io/lablup/ngc-tensorflow";let s=this.shadowRoot.querySelector("#environment"),i=s.items.find((e=>e.value===this.default_language));if(void 0===i&&void 0!==globalThis.backendaiclient&&!1===globalThis.backendaiclient.ready)return setTimeout((()=>(console.log("Environment selector is not ready yet. Trying to set the default language again."),this.selectDefaultLanguage(e,t))),500),Promise.resolve(!0);let o=s.items.indexOf(i);return s.select(o),this._default_language_updated=!0,Promise.resolve(!0)}_selectDefaultVersion(e){return!1}async _fetchSessionOwnerGroups(){this.ownerFeatureInitialized||(this.shadowRoot.querySelector("#owner-group").addEventListener("selected",this._fetchSessionOwnerScalingGroups.bind(this)),this.ownerFeatureInitialized=!0);const e=this.shadowRoot.querySelector("#owner-email"),t=e.value;if(!e.checkValidity())return this.notification.text=h("credential.validation.InvalidEmailAddress"),this.notification.show(),this.ownerKeypairs=[],void(this.ownerGroups=[]);const s=await globalThis.backendaiclient.keypair.list(t,["access_key"]);if(this.ownerKeypairs=s.keypairs,this.ownerKeypairs.length<1)return this.notification.text=h("session.launcher.NoActiveKeypair"),this.notification.show(),this.ownerKeypairs=[],void(this.ownerGroups=[]);this.shadowRoot.querySelector("#owner-accesskey").layout(!0).then((()=>{this.shadowRoot.querySelector("#owner-accesskey").select(0)}));const i=await globalThis.backendaiclient.user.get(t,["domain_name","groups {id name}"]);this.ownerDomain=i.user.domain_name,this.ownerGroups=i.user.groups,this.ownerGroups&&this.shadowRoot.querySelector("#owner-group").layout(!0).then((()=>{this.shadowRoot.querySelector("#owner-group").select(0)}))}async _fetchSessionOwnerScalingGroups(){const e=this.shadowRoot.querySelector("#owner-group").value;if(!e)return void(this.ownerScalingGroups=[]);const t=await globalThis.backendaiclient.scalingGroup.list(e);this.ownerScalingGroups=t.scaling_groups,this.ownerScalingGroups&&this.shadowRoot.querySelector("#owner-scaling-group").layout(!0).then((()=>{this.shadowRoot.querySelector("#owner-scaling-group").select(0)}))}_toggleResourceGauge(){""==this.resourceGauge.style.display||"flex"==this.resourceGauge.style.display||"block"==this.resourceGauge.style.display?this.resourceGauge.style.display="none":(document.body.clientWidth<750?(this.resourceGauge.style.left="20px",this.resourceGauge.style.right="20px",this.resourceGauge.style.backgroundColor="var(--paper-red-800)"):this.resourceGauge.style.backgroundColor="transparent",this.resourceGauge.style.display="flex")}_showKernelDescription(e,t){e.stopPropagation();let s=t.kernelname;if(s in this.resourceBroker.imageInfo&&"description"in this.resourceBroker.imageInfo[s]){let e=this.shadowRoot.querySelector("#help-description");this._helpDescriptionTitle=this.resourceBroker.imageInfo[s].name,this._helpDescription=this.resourceBroker.imageInfo[s].description,this._helpDescriptionIcon=t.icon,e.show()}else s in this.imageInfo?this._helpDescriptionTitle=this.resourceBroker.imageInfo[s].name:this._helpDescriptionTitle=s,this._helpDescription=h("session.launcher.NoDescriptionFound")}_showResourceDescription(e,t){e.stopPropagation();const s={cpu:{name:h("session.launcher.CPU"),desc:h("session.launcher.DescCPU")},mem:{name:h("session.launcher.Memory"),desc:h("session.launcher.DescMemory")},shmem:{name:h("session.launcher.SharedMemory"),desc:h("session.launcher.DescSharedMemory")},gpu:{name:h("session.launcher.GPU"),desc:h("session.launcher.DescGPU")},session:{name:h("session.launcher.TitleSession"),desc:h("session.launcher.DescSession")},"single-node":{name:h("session.launcher.SingleNode"),desc:h("session.launcher.DescSingleNode")},"multi-node":{name:h("session.launcher.MultiNode"),desc:h("session.launcher.DescMultiNode")}};if(t in s){this._helpDescriptionTitle=s[t].name,this._helpDescription=s[t].desc,this._helpDescriptionIcon="",this.shadowRoot.querySelector("#help-description").show()}}_showEnvConfigDescription(e){e.stopPropagation(),this._helpDescriptionTitle=h("session.launcher.EnvironmentVariableTitle"),this._helpDescription=h("session.launcher.DescSetEnv"),this.shadowRoot.querySelector("#help-description").show()}_resourceTemplateToCustom(){this.shadowRoot.querySelector("#resource-templates").selectedText=h("session.launcher.CustomResourceApplied")}_updateShmemLimit(){let e=this.shadowRoot.querySelector("#shmem-resource"),t=e.value;this.shmem_metric.max=parseFloat(this.shadowRoot.querySelector("#mem-resource").value),this.shadowRoot.querySelector("#shmem-resource").max=Math.min(this.max_shm_per_container,this.shmem_metric.max),parseFloat(t)>this.shmem_metric.max&&(t=this.shmem_metric.max,e.syncToSlider())}_getVersionInfo(e){let t=[],s=e.split("-");if(t.push({tag:this._aliasName(s[0]),color:"blue",size:"80px"}),s.length>1&&(this.kernel+":"+e in this.imageRequirements&&"framework"in this.imageRequirements[this.kernel+":"+e]?t.push({tag:this.imageRequirements[this.kernel+":"+e].framework,color:"red",size:"120px"}):t.push({tag:this._aliasName(s[1]),color:"red",size:"120px"})),s.length>2){let e=this._aliasName(s[2]).split(":");e.length>1?t.push({tag:e[1],app:e[0],color:"green",size:"150px"}):t.push({tag:e[0],color:"green",size:"150px"})}return t}_disableEnterKey(){this.shadowRoot.querySelectorAll("wl-expansion").forEach((e=>{e.onKeyDown=e=>{13===e.keyCode&&e.preventDefault()}}))}_addEnvRow(){const e=this.shadowRoot.querySelector("#modify-env-container"),t=e.children[e.children.length-1],s=this._createEnvRow();e.insertBefore(s,t)}_createEnvRow(){const e=document.createElement("div");e.setAttribute("class","row extra");const t=document.createElement("wl-textfield");t.setAttribute("type","text");const s=document.createElement("wl-textfield");s.setAttribute("type","text");const i=document.createElement("wl-button");i.setAttribute("class","fg pink"),i.setAttribute("fab",""),i.setAttribute("flat",""),i.addEventListener("click",(e=>this._removeEnvItem(e)));const o=document.createElement("wl-icon");return o.innerHTML="remove",i.appendChild(o),e.appendChild(t),e.appendChild(s),e.appendChild(i),e}_removeEnvItem(e){this.deleteEnvRow=e.target.parentNode,this.deleteEnvRow.remove()}modifyEnv(){this._parseEnvVariableList(),this.shadowRoot.querySelector("#modify-env-dialog").hide(),this.notification.text=h("session.launcher.EnvironmentVariableConfigurationDone"),this.notification.show()}_showEnvDialog(){this.shadowRoot.querySelector("#modify-env-dialog").show()}_parseEnvVariableList(){const e=this.shadowRoot.querySelector("#modify-env-container").querySelectorAll(".row:not(.header)"),t=e=>{let t=Array.prototype.map.call(e.querySelectorAll("wl-textfield"),(e=>e.value));return this.environ_values[t[0]]=t[1],t};this.environ_values={},Array.prototype.filter.call(e,(e=>(e=>0===Array.prototype.filter.call(e.querySelectorAll("wl-textfield"),((e,t)=>""===e.value)).length)(e))).map((e=>t(e)))}_resetEnvironmentVariables(){this.environ=[],this.environ_values={},null!==this.shadowRoot.querySelector("#modify-env-dialog")&&this._clearRows()}_clearRows(){const e=this.shadowRoot.querySelector("#modify-env-container"),t=e.querySelectorAll(".row");t[t.length-1].querySelectorAll("wl-textfield").forEach((e=>{e.value=""})),e.querySelectorAll(".row.extra").forEach((e=>{e.remove()}))}render(){return u`
      <wl-button raised class="primary-action" id="launch-session" ?disabled="${!this.enableLaunchButton}" @click="${()=>this._launchSessionDialog()}">
        <wl-icon>power_settings_new</wl-icon>
        <span>${_("session.launcher.Start")}</span>
      </wl-button>
      <backend-ai-dialog id="new-session-dialog" narrowLayout fixed backdrop persistent>
        <span slot="title">${this.newSessionDialogTitle?this.newSessionDialogTitle:_("session.launcher.StartNewSession")}</span>
        <form slot="content" id="launch-session-form" class="centered">
          <div class="vertical center layout" style="padding-top:15px;">
            <mwc-select id="environment" label="${_("session.launcher.Environments")}" fullwidth required
              value="${this.default_language}">
              <mwc-list-item selected style="dispxlay:none!important;">${_("session.launcher.ChooseEnvironment")}</mwc-list-item>
                ${this.languages.map((e=>u`
                  ${!1===e.clickable?u`
                    <h5 style="font-size:12px;padding: 0 10px 3px 10px;margin:0; border-bottom:1px solid #ccc;" role="separator" disabled="true">${e.basename}</h5>
                  `:u`
                    <mwc-list-item id="${e.name}" value="${e.name}" graphic="icon">
                      <img slot="graphic" src="resources/icons/${e.icon}" style="width:32px;height:32px;" />
                      <div class="horizontal justified center flex layout" style="width:293px;">
                        <div style="padding-right:5px;">${e.basename}</div>
                        <div class="flex"></div>
                        <div class="horizontal layout end-justified center flex">
                        ${e.tags?e.tags.map((e=>u`
                          <lablup-shields slot="meta" style="margin-right:5px;" color="${e.color}" description="${e.tag}"></lablup-shields>
                          <span style="display:none">(${e.tag})</span>
                        `)):""}
                          <mwc-icon-button icon="info"
                                           class="fg blue info"
                                           @click="${t=>{this._showKernelDescription(t,e)}}">
                          </mwc-icon-button>
                        </div>
                      </div>
                    </mwc-list-item>
                  `}
                `))}
            </mwc-select>
            <mwc-select id="version" label="${_("session.launcher.Version")}" fullwidth required>
              <mwc-list-item selected style="display:none!important"></mwc-list-item>
                <h5 style="font-size:12px;padding: 0 10px 3px 25px;margin:0; border-bottom:1px solid #ccc;" role="separator" disabled="true" class="horizontal layout">
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
            ${this._debug?u`
            <mwc-textfield id="image-name" type="text" class="flex" value=""
              label="${_("session.launcher.ManualImageName")}"></mwc-textfield>
            `:u``}
          </div>
          <div style="display:none;">
            <wl-checkbox id="use-gpu-checkbox">${_("session.launcher.UseGPU")}</wl-checkbox>
          </div>
          <div class="horizontal center layout">
            <mwc-select id="scaling-groups" label="${_("session.launcher.ResourceGroup")}" required
                        @selected="${e=>this.updateScalingGroup(!1,e)}">
              ${this.scaling_groups.map((e=>u`
                <mwc-list-item class="scaling-group-dropdown"
                               id="${e.name}"
                               value="${e.name}">
                  ${e.name}
                </mwc-list-item>
              `))}
            </mwc-select>
            <mwc-textfield id="session-name" placeholder="${_("session.launcher.SessionNameOptional")}"
                           pattern="[a-zA-Z0-9_-]{4,}" fullwidth maxLength="64"
                           helper="${_("maxLength.64chars")}"
                           validationMessage="${_("session.launcher.SessionNameAllowCondition")}"
                           style="margin-left:5px;">
            </mwc-textfield>
          </div>
          <wl-expansion id="vfolder-select-expansion" name="vfolder-group" style="--expansion-header-padding:16px;--expansion-content-padding:0;">
            <span slot="title" style="font-size:12px;color:#404040;">${_("session.launcher.FolderToMount")}</span>
            <mwc-list fullwidth multi id="vfolder"
              @selected="${()=>this._updateSelectedFolder()}">
            ${0===this.vfolders.length?u`
              <mwc-list-item value="" disabled="true">${_("session.launcher.NoFolderExists")}</mwc-list-item>
            `:u``}
            ${this.vfolders.map((e=>u`
              <mwc-check-list-item
                  value="${e.name}"
                  ?selected="${this.selectedVfolders.includes(e.name)}"
                  ?disabled="${e.disabled}">${e.name}</mwc-check-list-item>
            `))}
            </mwc-list>
          </wl-expansion>
          <ul style="color:#646464;font-size:12px;">
          ${this.selectedVfolders.map((e=>u`
                <li><mwc-icon>folder_open</mwc-icon>${e}</li>
              `))}
          </ul>
          ${this.selectedVfolders.length>0?u`
            <div class="horizontal layout end-justified">
              <mwc-button
                  outlined
                  label="${_("session.launcher.UnSelectAllVFolders")}"
                  style="width:auto;margin-right:10px;"
                  @click=${()=>this._unselectAllSelectedFolder()}></mwc-button>
            </div>
          `:u``}
          <div class="horizontal layout center justified">
            <span style="color:rgba(0, 0, 0, 0.6);font-size:12px;padding-left:16px;">${_("session.launcher.SetEnvironmentVariable")}</span>
            <mwc-button
              unelevated
              icon="rule"
              label="${_("session.launcher.Config")}"
              style="width:auto;margin-right:15px;"
              @click="${()=>this._showEnvDialog()}"></mwc-button>
          </div>
          <div class="vertical center layout" style="padding-top:15px;">
            <mwc-select id="resource-templates" label="${_("session.launcher.ResourceAllocation")}" fullwidth required>
              <mwc-list-item selected style="display:none!important"></mwc-list-item>
                <h5 style="font-size:12px;padding: 0 10px 3px 25px;margin:0; border-bottom:1px solid #ccc;" role="separator" disabled="true" class="horizontal layout center">
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
                  <div style="width:50px;text-align:right;">${e.shmem?u`${e.shmem}GB`:u`64MB`}</div>
                  <div style="width:90px;text-align:right;">
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
          <wl-expansion name="resource-group" open style="--expansion-header-padding:16px;">
            <span slot="title" style="font-size:12px;color:#404040;">${_("session.launcher.CustomAllocation")}</span>
            <span slot="description" style="font-size:12px;color:#646464;"></span>
            <div class="vertical center layout">
              <div class="horizontal center layout" style="margin-top:15px;">
                <div class="resource-type" style="width:70px;">CPU</div>
                <lablup-slider id="cpu-resource" class="cpu"
                               pin snaps expand editable markers
                               @click="${this._resourceTemplateToCustom}"
                               marker_limit="${this.marker_limit}"
                               min="${this.cpu_metric.min}" max="${this.cpu_metric.max}"
                               value="${this.cpu_request}"></lablup-slider>
                <span class="caption">${_("session.launcher.Core")}</span>
                <mwc-icon-button icon="info" class="fg green info" @click="${e=>{this._showResourceDescription(e,"cpu")}}"></mwc-icon-button>
            </div>
            <div class="horizontal center layout">
              <div class="resource-type">RAM</div>
              <lablup-slider id="mem-resource" class="mem"
                             pin snaps step=0.05 editable markers
                              @click="${()=>{this._resourceTemplateToCustom()}}"
                              @changed="${()=>{this._updateShmemLimit()}}"
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
                             @click="${this._resourceTemplateToCustom}"
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
                             @click="${this._resourceTemplateToCustom}"
                             marker_limit="${this.marker_limit}"
                             min="0.0" max="${this.cuda_device_metric.max}" value="${this.gpu_request}"></lablup-slider>
              <span class="caption">GPU</span>
              <mwc-icon-button icon="info" class="fg blue info" @click="${e=>{this._showResourceDescription(e,"gpu")}}"></mwc-icon-button>
            </div>
            <div class="horizontal center layout">
              <div class="resource-type">${_("console.menu.Sessions")}</div>
              <lablup-slider id="session-resource" class="session"
                             pin snaps editable markers step="1"
                             @click="${this._resourceTemplateToCustom}"
                             marker_limit="${this.marker_limit}"
                             min="1" max="${this.concurrency_limit}" value="${this.session_request}"></lablup-slider>
              <span class="caption">#</span>
              <mwc-icon-button icon="info" class="fg red info" @click="${e=>{this._showResourceDescription(e,"session")}}"></mwc-icon-button>
            </div>
          </div>
        </wl-expansion>
        ${this.cluster_support?u`
        <mwc-select id="cluster-mode" label="${_("session.launcher.ClusterMode")}" fullwidth required
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
        <div class="horizontal layout center" style="padding:0 24px 24px 24px;">
          <div class="resource-type">${_("session.launcher.ClusterSize")}</div>
          <lablup-slider id="cluster-size" class="cluster"
                         pin snaps expand editable markers
                         marker_limit="${this.marker_limit}"
                         min="${this.cluster_metric.min}" max="${this.cluster_metric.max}"
                         value="${this.cluster_size}"
                         @change="${e=>this._setClusterSize(e)}"></lablup-slider>
          <span class="caption">${_("session.launcher.Node")}</span>
        </div>`:u``}
        <wl-expansion name="ownership" style="--expansion-header-padding:16px;--expansion-content-padding:15px 0;">
          <span slot="title" style="font-size:12px;color:#404040;">${_("session.launcher.SetSessionOwner")}</span>
          <span slot="description"></span>
          <div class="vertical layout">
            <div class="horizontal center layout">
              <mwc-textfield id="owner-email" type="email" class="flex" value=""
                pattern="^.+@.+\..+$"
                label="${_("session.launcher.OwnerEmail")}" size="40"></mwc-textfield>
              <mwc-icon-button icon="refresh" class="blue"
                @click="${()=>this._fetchSessionOwnerGroups()}">
              </mwc-icon-button>
            </div>
            <mwc-select id="owner-accesskey" label="${_("session.launcher.OwnerAccessKey")}">
              ${this.ownerKeypairs.map((e=>u`
                <mwc-list-item class="owner-group-dropdown"
                               id="${e.access_key}"
                               value="${e.access_key}">
                  ${e.access_key}
                </mwc-list-item>
              `))}
            </mwc-select>
            <div class="horizontal center layout">
              <mwc-select id="owner-group" label="${_("session.launcher.OwnerGroup")}">
                ${this.ownerGroups.map((e=>u`
                  <mwc-list-item class="owner-group-dropdown"
                                 id="${e.name}"
                                 value="${e.name}">
                    ${e.name}
                  </mwc-list-item>
                `))}
              </mwc-select>
              <mwc-select id="owner-scaling-group" label="${_("session.launcher.OwnerResourceGroup")}">
                ${this.ownerScalingGroups.map((e=>u`
                  <mwc-list-item class="owner-group-dropdown"
                                 id="${e.name}"
                                 value="${e.name}">
                    ${e.name}
                  </mwc-list-item>
                `))}
              </mwc-select>
            </div>
            <wl-label style="padding:15px;">
              <wl-checkbox id="owner-enabled"></wl-checkbox>
              ${_("session.launcher.LaunchSessionWithAccessKey")}
            </wl-label>
          </div>
        </wl-expansion>
      </form>
      <div slot="footer" class="horizontal center-justified flex layout distancing">
        <mwc-button
            unelevated
            class="launch-button"
            id="launch-button"
            icon="rowing"
            @click="${()=>this._newSessionWithConfirmation()}">
          <span id="launch-button-msg">${_("session.launcher.Launch")}</span>
        </mwc-button>
      </div>
    </backend-ai-dialog>
    <backend-ai-dialog id="modify-env-dialog" fixed backdrop persistent noclosebutton>
      <span slot="title">${_("session.launcher.SetEnvironmentVariable")}</span>
      <span slot="action">
        <mwc-icon-button icon="info" @click="${e=>this._showEnvConfigDescription(e)}" style="pointer-events: auto;"></mwc-icon-button>
      </span>
      <div slot="content" id="modify-env-container">
        <div class="row header">
          <div> ${_("session.launcher.EnvironmentVariable")} </div>
          <div> ${_("session.launcher.EnvironmentVariableValue")} </div>
        </div>
        ${this.environ.map(((e,t)=>u`
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
            @click=${()=>this._addEnvRow()}
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
            label="${_("button.Finish")}"
            @click="${()=>this.modifyEnv()}"></mwc-button>
      </div>
    </backend-ai-dialog>
    <backend-ai-dialog id="help-description" fixed backdrop>
      <span slot="title">${this._helpDescriptionTitle}</span>
      <div slot="content" class="horizontal layout center" style="margin:5px;">
      ${""==this._helpDescriptionIcon?u``:u`
        <img slot="graphic" src="resources/icons/${this._helpDescriptionIcon}" style="width:64px;height:64px;margin-right:10px;" />
        `}
        <div style="font-size:14px;">${b(this._helpDescription)}</div>
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
          <span id="launch-button-msg">${_("session.launcher.Launch")}</span>
        </mwc-button>
      </div>
    </backend-ai-dialog>
`}};e([s("#image-name")],S.prototype,"manualImageName",void 0),e([t({type:Boolean})],S.prototype,"is_connected",void 0),e([t({type:Boolean})],S.prototype,"enableLaunchButton",void 0),e([t({type:Boolean})],S.prototype,"hideLaunchButton",void 0),e([t({type:String})],S.prototype,"location",void 0),e([t({type:String})],S.prototype,"mode",void 0),e([t({type:String})],S.prototype,"newSessionDialogTitle",void 0),e([t({type:String})],S.prototype,"importScript",void 0),e([t({type:String})],S.prototype,"importFilename",void 0),e([t({type:Object})],S.prototype,"imageRequirements",void 0),e([t({type:Object})],S.prototype,"resourceLimits",void 0),e([t({type:Object})],S.prototype,"userResourceLimit",void 0),e([t({type:Object})],S.prototype,"aliases",void 0),e([t({type:Object})],S.prototype,"tags",void 0),e([t({type:Object})],S.prototype,"icons",void 0),e([t({type:Object})],S.prototype,"imageInfo",void 0),e([t({type:String})],S.prototype,"kernel",void 0),e([t({type:Array})],S.prototype,"versions",void 0),e([t({type:Array})],S.prototype,"languages",void 0),e([t({type:Number})],S.prototype,"marker_limit",void 0),e([t({type:String})],S.prototype,"gpu_mode",void 0),e([t({type:Array})],S.prototype,"gpu_modes",void 0),e([t({type:Number})],S.prototype,"gpu_step",void 0),e([t({type:Object})],S.prototype,"cpu_metric",void 0),e([t({type:Object})],S.prototype,"mem_metric",void 0),e([t({type:Object})],S.prototype,"shmem_metric",void 0),e([t({type:Object})],S.prototype,"cuda_device_metric",void 0),e([t({type:Object})],S.prototype,"cuda_shares_metric",void 0),e([t({type:Object})],S.prototype,"rocm_device_metric",void 0),e([t({type:Object})],S.prototype,"tpu_device_metric",void 0),e([t({type:Object})],S.prototype,"cluster_metric",void 0),e([t({type:Array})],S.prototype,"cluster_mode_list",void 0),e([t({type:Boolean})],S.prototype,"cluster_support",void 0),e([t({type:Object})],S.prototype,"images",void 0),e([t({type:Object})],S.prototype,"total_slot",void 0),e([t({type:Object})],S.prototype,"total_resource_group_slot",void 0),e([t({type:Object})],S.prototype,"total_project_slot",void 0),e([t({type:Object})],S.prototype,"used_slot",void 0),e([t({type:Object})],S.prototype,"used_resource_group_slot",void 0),e([t({type:Object})],S.prototype,"used_project_slot",void 0),e([t({type:Object})],S.prototype,"available_slot",void 0),e([t({type:Number})],S.prototype,"concurrency_used",void 0),e([t({type:Number})],S.prototype,"concurrency_max",void 0),e([t({type:Number})],S.prototype,"concurrency_limit",void 0),e([t({type:Number})],S.prototype,"max_containers_per_session",void 0),e([t({type:Array})],S.prototype,"vfolders",void 0),e([t({type:Array})],S.prototype,"selectedVfolders",void 0),e([t({type:Object})],S.prototype,"used_slot_percent",void 0),e([t({type:Object})],S.prototype,"used_resource_group_slot_percent",void 0),e([t({type:Object})],S.prototype,"used_project_slot_percent",void 0),e([t({type:Array})],S.prototype,"resource_templates",void 0),e([t({type:Array})],S.prototype,"resource_templates_filtered",void 0),e([t({type:String})],S.prototype,"default_language",void 0),e([t({type:Number})],S.prototype,"cpu_request",void 0),e([t({type:Number})],S.prototype,"mem_request",void 0),e([t({type:Number})],S.prototype,"shmem_request",void 0),e([t({type:Number})],S.prototype,"gpu_request",void 0),e([t({type:String})],S.prototype,"gpu_request_type",void 0),e([t({type:Number})],S.prototype,"session_request",void 0),e([t({type:Boolean})],S.prototype,"_status",void 0),e([t({type:Number})],S.prototype,"num_sessions",void 0),e([t({type:String})],S.prototype,"scaling_group",void 0),e([t({type:Array})],S.prototype,"scaling_groups",void 0),e([t({type:Array})],S.prototype,"sessions_list",void 0),e([t({type:Boolean})],S.prototype,"metric_updating",void 0),e([t({type:Boolean})],S.prototype,"metadata_updating",void 0),e([t({type:Boolean})],S.prototype,"aggregate_updating",void 0),e([t({type:Object})],S.prototype,"scaling_group_selection_box",void 0),e([t({type:Object})],S.prototype,"resourceGauge",void 0),e([t({type:Boolean})],S.prototype,"ownerFeatureInitialized",void 0),e([t({type:String})],S.prototype,"ownerDomain",void 0),e([t({type:Array})],S.prototype,"ownerKeypairs",void 0),e([t({type:Array})],S.prototype,"ownerGroups",void 0),e([t({type:Array})],S.prototype,"ownerScalingGroups",void 0),e([t({type:Boolean})],S.prototype,"project_resource_monitor",void 0),e([t({type:Object})],S.prototype,"version_selector",void 0),e([t({type:Boolean})],S.prototype,"_default_language_updated",void 0),e([t({type:Boolean})],S.prototype,"_default_version_updated",void 0),e([t({type:String})],S.prototype,"_helpDescription",void 0),e([t({type:String})],S.prototype,"_helpDescriptionTitle",void 0),e([t({type:String})],S.prototype,"_helpDescriptionIcon",void 0),e([t({type:Number})],S.prototype,"max_cpu_core_per_session",void 0),e([t({type:Number})],S.prototype,"max_cuda_device_per_container",void 0),e([t({type:Number})],S.prototype,"max_cuda_shares_per_container",void 0),e([t({type:Number})],S.prototype,"max_shm_per_container",void 0),e([t({type:Object})],S.prototype,"resourceBroker",void 0),e([t({type:Number})],S.prototype,"cluster_size",void 0),e([t({type:String})],S.prototype,"cluster_mode",void 0),e([t({type:Object})],S.prototype,"deleteEnvInfo",void 0),e([t({type:Object})],S.prototype,"deleteEnvRow",void 0),e([t({type:Array})],S.prototype,"environ",void 0),e([t({type:Object})],S.prototype,"environ_values",void 0),e([t({type:Boolean})],S.prototype,"_debug",void 0),S=e([i("backend-ai-session-launcher")],S);
