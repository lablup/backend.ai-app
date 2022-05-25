import{_ as e,e as t,l as i,n as s,s as o,b as r,I as a,a as n,x as l,c,r as d,$ as h,B as u,g as p,d as m,t as _,L as g,u as v,y as b,z as y,o as f}from"./backend-ai-webui-140927b6.js";import"./mwc-linear-progress-ae3e8b43.js";import"./mwc-switch-8541520c.js";import"./label-7d023796.js";import"./lablup-progress-bar-b574b28e.js";import"./slider-a604e49f.js";import{r as w,A as x,T as k,F as S,E as D,h as C,a as $,P as I,D as T,C as P,b as E,i as O,c as R,d as A,e as M,f as q,t as z,s as j,g as B,I as V,K as L,j as F,L as N,V as U,k as G,p as W,l as H,m as Y}from"./vaadin-grid-379661de.js";import{i as K,I as X,a as Q,P as J,r as Z,h as ee,F as te}from"./vaadin-grid-filter-column-751aac32.js";import"./vaadin-grid-selection-column-2a66fad7.js";import{t as ie,D as se}from"./dom-repeat-2ef32228.js";import{i as oe}from"./vaadin-item-styles-91dd9c72.js";import"./expansion-63dbcb03.js";import"./lablup-codemirror-6d5ad764.js";
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */let re=class extends o{constructor(){super(),this.editable=!1,this.pin=!1,this.markers=!1,this.marker_limit=30,this.disabled=!1;new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.intersectionRatio>0&&(this.value!==this.slider.value&&(this.slider.value=this.value),this.slider.layout())}))}),{}).observe(this)}static get styles(){return[r,a,n,l,c,d`
        mwc-textfield {
          width: var(--textfield-min-width, 65px);
          height: 40px;
          margin-left: 10px;
          // --mdc-theme-primary: transparent;
          --mdc-text-field-hover-line-color: transparent;
          --mdc-text-field-idle-line-color: transparent;
        }

        mwc-slider {
          width: var(--slider-width, 100px);
          --mdc-theme-secondary: var(--slider-color, '#018786');
          color: var(--paper-grey-700);
        }
      `]}render(){return h`
      <div class="horizontal center layout">
        <mwc-slider
          id="slider" class="${this.id}"
          value="${this.value}" min="${this.min}" max="${this.max}" step="${this.step}"
          ?pin="${this.pin}"
          ?disabled="${this.disabled}"
          ?markers="${this.markers}"
          @change="${()=>this.syncToText()}"
        ></mwc-slider>
        <mwc-textfield
          id="textfield" class="${this.id}"
          type="number"
          value="${this.value}" min="${this.min}" max="${this.max}" step="${this.step}"
          prefix="${this.prefix}" suffix="${this.suffix}"
          ?disabled="${this.disabled}"
          @change="${()=>this.syncToSlider()}"
        ></mwc-textfield>
      </div>
    `}firstUpdated(){this.editable&&(this.textfield.style.display="flex"),this.checkMarkerDisplay()}update(e){Array.from(e.keys()).some((e=>["value","min","max"].includes(e)))&&this.min==this.max&&(this.max=this.max+1,this.value=this.min,this.disabled=!0),super.update(e)}updated(e){e.forEach(((e,t)=>{["min","max","step"].includes(t)&&this.checkMarkerDisplay()}))}syncToText(){this.value=this.slider.value}syncToSlider(){this.textfield.step=this.step;const e=Math.round(this.textfield.value/this.step)*this.step;var t;this.textfield.value=e.toFixed((t=this.step,Math.floor(t)===t?0:t.toString().split(".")[1].length||0)),this.textfield.value>this.max&&(this.textfield.value=this.max),this.textfield.value<this.min&&(this.textfield.value=this.min),this.value=this.textfield.value;const i=new CustomEvent("change",{detail:{}});this.dispatchEvent(i)}checkMarkerDisplay(){this.markers&&(this.max-this.min)/this.step>this.marker_limit&&this.slider.removeAttribute("markers")}};e([t({type:Number})],re.prototype,"step",void 0),e([t({type:Number})],re.prototype,"value",void 0),e([t({type:Number})],re.prototype,"max",void 0),e([t({type:Number})],re.prototype,"min",void 0),e([t({type:String})],re.prototype,"prefix",void 0),e([t({type:String})],re.prototype,"suffix",void 0),e([t({type:Boolean})],re.prototype,"editable",void 0),e([t({type:Boolean})],re.prototype,"pin",void 0),e([t({type:Boolean})],re.prototype,"markers",void 0),e([t({type:Number})],re.prototype,"marker_limit",void 0),e([t({type:Boolean})],re.prototype,"disabled",void 0),e([i("#slider",!0)],re.prototype,"slider",void 0),e([i("#textfield",!0)],re.prototype,"textfield",void 0),re=e([s("lablup-slider")],re);let ae=class extends u{constructor(){super(),this.is_connected=!1,this.direction="horizontal",this.location="",this.aliases=Object(),this.aggregate_updating=!1,this.resourceGauge=Object(),this.project_resource_monitor=!1,this.active=!1,this.resourceBroker=globalThis.resourceBroker,this.notification=globalThis.lablupNotification,this.init_resource()}static get is(){return"backend-ai-resource-monitor"}static get styles(){return[r,a,n,l,c,d`
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
      `]}init_resource(){this.total_slot={},this.total_resource_group_slot={},this.total_project_slot={},this.used_slot={},this.used_resource_group_slot={},this.used_project_slot={},this.available_slot={},this.used_slot_percent={},this.used_resource_group_slot_percent={},this.used_project_slot_percent={},this.concurrency_used=0,this.concurrency_max=0,this.concurrency_limit=0,this._status="inactive",this.scaling_groups=[{name:""}],this.scaling_group="",this.sessions_list=[],this.metric_updating=!1,this.metadata_updating=!1}firstUpdated(){this.resourceGauge=this.shadowRoot.querySelector("#resource-gauges"),this._updateToggleResourceMonitorDisplay(),document.addEventListener("backend-ai-group-changed",(e=>{this.scaling_group="",this._updatePageVariables(!0)})),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_connected=!0,setInterval((()=>{this._periodicUpdateResourcePolicy()}),2e4)}),{once:!0}):this.is_connected=!0,document.addEventListener("backend-ai-session-list-refreshed",(()=>{this._updatePageVariables(!0)}))}async _periodicUpdateResourcePolicy(){return this.active?(await this._refreshResourcePolicy(),this.aggregateResource("refresh-resource-policy"),Promise.resolve(!0)):Promise.resolve(!1)}_updateSelectedScalingGroup(){const e=this.shadowRoot.querySelector("#scaling-groups"),t=e.items.find((e=>e.value===this.resourceBroker.scaling_group)),i=e.items.indexOf(t);e.select(i)}async updateScalingGroup(e=!1,t){if(await this.resourceBroker.updateScalingGroup(e,t.target.value),this.active){if("vertical"===this.direction){this.shadowRoot.querySelector("#scaling-group-select-box").firstChild.value=this.resourceBroker.scaling_group}!0===e&&(await this._refreshResourcePolicy(),this.aggregateResource("update-scaling-group"))}}async _viewStateChanged(e){await this.updateComplete,this.active&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.project_resource_monitor=this.resourceBroker.allow_project_resource_monitor,this._updatePageVariables(!0),this._disableEnterKey()}),{once:!0}):(this.project_resource_monitor=this.resourceBroker.allow_project_resource_monitor,await this._updatePageVariables(!0),this._disableEnterKey()),this._updateToggleResourceMonitorDisplay())}async _updatePageVariables(e){return this.active&&!1===this.metadata_updating?(this.metadata_updating=!0,await this.resourceBroker._updatePageVariables(e),setTimeout((()=>{this._updateScalingGroupSelector()}),1e3),this.sessions_list=this.resourceBroker.sessions_list,await this._refreshResourcePolicy(),this.aggregateResource("update-page-variable"),this.metadata_updating=!1,Promise.resolve(!0)):Promise.resolve(!1)}_updateToggleResourceMonitorDisplay(){document.body.clientWidth<750&&"horizontal"==this.direction&&(this.resourceGauge.style.display="none",this.shadowRoot.querySelector("#resource-gauge-switch-button").checked=!1),this.shadowRoot.querySelector("#resource-gauge-switch-button").checked="vertical"===this.direction}_updateScalingGroupSelector(){if("vertical"===this.direction){const e=this.shadowRoot.querySelector("#scaling-group-select-box");e.hasChildNodes()&&e.removeChild(e.firstChild);const t=document.createElement("mwc-select");t.label=p("session.launcher.ResourceGroup"),t.id="scaling-group-select",t.value=this.scaling_group,t.setAttribute("fullwidth","true"),t.style.margin="1px solid #ccc",t.addEventListener("selected",this.updateScalingGroup.bind(this,!0));let i=document.createElement("mwc-list-item");i.setAttribute("disabled","true"),i.innerHTML=p("session.launcher.SelectResourceGroup"),i.style.borderBottom="1px solid #ccc",t.appendChild(i);const s=t.value?t.value:this.resourceBroker.scaling_group;this.resourceBroker.scaling_groups.map((e=>{i=document.createElement("mwc-list-item"),i.value=e.name,i.setAttribute("graphic","icon"),s===e.name?i.selected=!0:i.selected=!1,i.innerHTML=e.name,t.appendChild(i)})),e.appendChild(t)}}async _refreshResourcePolicy(e=!1){return this.active?this.resourceBroker._refreshResourcePolicy().then((()=>(this.concurrency_used=this.resourceBroker.concurrency_used,this.concurrency_max=this.concurrency_used>this.resourceBroker.concurrency_max?this.concurrency_used:this.resourceBroker.concurrency_max,Promise.resolve(!0)))).catch((e=>(this.metadata_updating=!1,e&&e.message?(this.notification.text=m.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=m.relieve(e.title),this.notification.show(!0,e)),Promise.resolve(!1)))):Promise.resolve(!0)}_aliasName(e){const t={python:"Python",tensorflow:"TensorFlow",pytorch:"PyTorch",lua:"Lua",r:"R","r-base":"R",julia:"Julia",rust:"Rust",cpp:"C++",gcc:"GCC",go:"Go",tester:"Tester",haskell:"Haskell",matlab:"MATLAB",sagemath:"Sage",texlive:"TeXLive",java:"Java",php:"PHP",octave:"Octave",nodejs:"Node",caffe:"Caffe",scheme:"Scheme",scala:"Scala",base:"Base",cntk:"CNTK",h2o:"H2O.AI","triton-server":"Triton Server",digits:"DIGITS","ubuntu-linux":"Ubuntu Linux",tf1:"TensorFlow 1",tf2:"TensorFlow 2",py3:"Python 3",py2:"Python 2",py27:"Python 2.7",py35:"Python 3.5",py36:"Python 3.6",py37:"Python 3.7",py38:"Python 3.8",py39:"Python 3.9",py310:"Python 3.10",ji15:"Julia 1.5",ji16:"Julia 1.6",ji17:"Julia 1.7",lxde:"LXDE",lxqt:"LXQt",xfce:"XFCE",xrdp:"XRDP",gnome:"GNOME",kde:"KDE","ubuntu16.04":"Ubuntu 16.04","ubuntu18.04":"Ubuntu 18.04","ubuntu20.04":"Ubuntu 20.04",intel:"Intel MKL",2018:"2018",2019:"2019",2020:"2020",2021:"2021",2022:"2022",tpu:"TPU:TPUv3",rocm:"GPU:ROCm",cuda9:"GPU:CUDA9",cuda10:"GPU:CUDA10","cuda10.0":"GPU:CUDA10","cuda10.1":"GPU:CUDA10.1","cuda10.2":"GPU:CUDA10.2","cuda10.3":"GPU:CUDA10.3",cuda11:"GPU:CUDA11","cuda11.0":"GPU:CUDA11","cuda11.1":"GPU:CUDA11.1","cuda11.2":"GPU:CUDA11.2",miniconda:"Miniconda","anaconda2018.12":"Anaconda 2018.12","anaconda2019.12":"Anaconda 2019.12","alpine3.8":"Alpine Linux 3.8",ngc:"Nvidia GPU Cloud",ff:"Research Env."};return e in t?t[e]:e}async _aggregateResourceUse(e=""){return this.resourceBroker._aggregateCurrentResource(e).then((t=>!1===t?setTimeout((()=>{this._aggregateResourceUse(e)}),1e3):(this.concurrency_used=this.resourceBroker.concurrency_used,this.scaling_group=this.resourceBroker.scaling_group,this.scaling_groups=this.resourceBroker.scaling_groups,this.total_slot=this.resourceBroker.total_slot,this.total_resource_group_slot=this.resourceBroker.total_resource_group_slot,this.total_project_slot=this.resourceBroker.total_project_slot,this.used_slot=this.resourceBroker.used_slot,this.used_resource_group_slot=this.resourceBroker.used_resource_group_slot,this.used_project_slot=this.resourceBroker.used_project_slot,this.used_project_slot_percent=this.resourceBroker.used_project_slot_percent,this.concurrency_limit=this.resourceBroker.concurrency_limit,this.available_slot=this.resourceBroker.available_slot,this.used_slot_percent=this.resourceBroker.used_slot_percent,this.used_resource_group_slot_percent=this.resourceBroker.used_resource_group_slot_percent,Promise.resolve(!0)))).then((()=>Promise.resolve(!0))).catch((e=>(e&&e.message&&(console.log(e),this.notification.text=m.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)),Promise.resolve(!1))))}aggregateResource(e=""){void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._aggregateResourceUse(e)}),!0):this._aggregateResourceUse(e)}_toggleResourceGauge(e){const t=this.shadowRoot.querySelector("#resource-legend");e.target.selected?(this.resourceGauge.style.display="flex",t&&(t.style.display="flex"),document.body.clientWidth<750&&(this.resourceGauge.style.left="20px",this.resourceGauge.style.right="20px")):(this.resourceGauge.style.display="none",t&&(t.style.display="none"))}_disableEnterKey(){this.shadowRoot.querySelectorAll("wl-expansion").forEach((e=>{e.onKeyDown=e=>{13===e.keyCode&&e.preventDefault()}}))}_numberWithPostfix(e,t=""){return isNaN(parseInt(e))?"":parseInt(e)+t}render(){return h`
      ${"vertical"===this.direction?h`
      <div id="scaling-group-select-box" class="layout horizontal start-justified">
      </div>
      `:h``}
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
          ${this.total_slot.cuda_device?h`
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
          </div>`:h``}
          ${this.resourceBroker.total_slot.cuda_shares&&this.resourceBroker.total_slot.cuda_shares>0?h`
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
          </div>`:h``}
          ${this.total_slot.rocm_device_slot?h`
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
          </div>`:h``}
          ${this.total_slot.tpu_device_slot?h`
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
          </div>`:h``}
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
            @click="${e=>this._toggleResourceGauge(e)}">
          </mwc-switch>
        </div>
      </div>
      ${"vertical"===this.direction?h`
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
      `:h``}
      ${"vertical"===this.direction&&!0===this.project_resource_monitor&&(this.total_project_slot.cpu>0||this.total_project_slot.cpu===1/0)?h`
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
            ${this.total_project_slot.cuda_device?h`
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
            </div>`:h``}
            ${this.total_project_slot.cuda_shares?h`
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
            </div>`:h``}
            ${this.total_project_slot.rocm_device?h`
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
            </div>`:h``}
            ${this.total_project_slot.tpu_device?h`
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
            </div>`:h``}
          </div>
          <div class="flex"></div>
        </div>
      </div>
      `:h``}
`}};e([t({type:Boolean})],ae.prototype,"is_connected",void 0),e([t({type:String})],ae.prototype,"direction",void 0),e([t({type:String})],ae.prototype,"location",void 0),e([t({type:Object})],ae.prototype,"aliases",void 0),e([t({type:Object})],ae.prototype,"total_slot",void 0),e([t({type:Object})],ae.prototype,"total_resource_group_slot",void 0),e([t({type:Object})],ae.prototype,"total_project_slot",void 0),e([t({type:Object})],ae.prototype,"used_slot",void 0),e([t({type:Object})],ae.prototype,"used_resource_group_slot",void 0),e([t({type:Object})],ae.prototype,"used_project_slot",void 0),e([t({type:Object})],ae.prototype,"available_slot",void 0),e([t({type:Number})],ae.prototype,"concurrency_used",void 0),e([t({type:Number})],ae.prototype,"concurrency_max",void 0),e([t({type:Number})],ae.prototype,"concurrency_limit",void 0),e([t({type:Object})],ae.prototype,"used_slot_percent",void 0),e([t({type:Object})],ae.prototype,"used_resource_group_slot_percent",void 0),e([t({type:Object})],ae.prototype,"used_project_slot_percent",void 0),e([t({type:String})],ae.prototype,"default_language",void 0),e([t({type:Boolean})],ae.prototype,"_status",void 0),e([t({type:Number})],ae.prototype,"num_sessions",void 0),e([t({type:String})],ae.prototype,"scaling_group",void 0),e([t({type:Array})],ae.prototype,"scaling_groups",void 0),e([t({type:Array})],ae.prototype,"sessions_list",void 0),e([t({type:Boolean})],ae.prototype,"metric_updating",void 0),e([t({type:Boolean})],ae.prototype,"metadata_updating",void 0),e([t({type:Boolean})],ae.prototype,"aggregate_updating",void 0),e([t({type:Object})],ae.prototype,"scaling_group_selection_box",void 0),e([t({type:Object})],ae.prototype,"resourceGauge",void 0),e([t({type:Boolean})],ae.prototype,"project_resource_monitor",void 0),e([t({type:Object})],ae.prototype,"resourceBroker",void 0),ae=e([s("backend-ai-resource-monitor")],ae);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ne extends g{constructor(){super(...arguments),this.left=!1,this.graphic="control"}render(){const e={"mdc-deprecated-list-item__graphic":this.left,"mdc-deprecated-list-item__meta":!this.left},t=this.renderText(),i=this.graphic&&"control"!==this.graphic&&!this.left?this.renderGraphic():h``,s=this.hasMeta&&this.left?this.renderMeta():h``,o=this.renderRipple();return h`
      ${o}
      ${i}
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
      ${s}`}async onChange(e){const t=e.target;this.selected===t.checked||(this._skipPropRequest=!0,this.selected=t.checked,await this.updateComplete,this._skipPropRequest=!1)}}e([i("slot")],ne.prototype,"slotElement",void 0),e([i("mwc-checkbox")],ne.prototype,"checkboxElement",void 0),e([t({type:Boolean})],ne.prototype,"left",void 0),e([t({type:String,reflect:!0})],ne.prototype,"graphic",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const le=d`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let ce=class extends ne{};ce.styles=[b,le],ce=e([s("mwc-check-list-item")],ce);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const de=d`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;w("",de,{moduleId:"lumo-overlay"});
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const he=d`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;w("",he,{moduleId:"lumo-menu-overlay-core"});const ue=[de,he,d`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`];w("",ue,{moduleId:"lumo-menu-overlay"});w("vaadin-date-picker-overlay",[ue,d`
  [part='overlay'] {
    /*
  Width:
      date cell widths
    + month calendar side padding
    + year scroller width
  */
    /* prettier-ignore */
    width:
    calc(
        var(--lumo-size-m) * 7
      + var(--lumo-space-xs) * 2
      + 57px
    );
    height: 100%;
    max-height: calc(var(--lumo-size-m) * 14);
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  [part='overlay'] {
    flex-direction: column;
  }

  [part='content'] {
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay'] {
      width: 100vw;
      height: 70vh;
      max-height: 70vh;
    }
  }
`],{moduleId:"lumo-date-picker-overlay"});w("vaadin-button",d`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set only for the internal parts so we don’t affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon),
  [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']),
  [part] ::slotted(iron-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`,{moduleId:"lumo-button"});
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class pe extends(x(k(S(D($(I)))))){static get is(){return"vaadin-button"}static get properties(){return{tabindex:{value:0}}}static get template(){return C`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
          background: transparent;
          padding: 0;
          border: none;
          box-shadow: none;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}}customElements.define(pe.is,pe),w("vaadin-date-picker-overlay-content",d`
    :host {
      position: relative;
      background-color: transparent;
      /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      background-size: 57px 100%;
      background-position: top right;
      background-repeat: no-repeat;
      cursor: default;
    }

    /* Month scroller */

    [part='months'] {
      /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
      /* prettier-ignore */
      --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
      --vaadin-infinite-scroller-buffer-offset: 20%;
      -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      position: relative;
      margin-right: 57px;
    }

    /* Year scroller */
    [part='years'] {
      /* TODO get rid of fixed magic number */
      --vaadin-infinite-scroller-buffer-width: 97px;
      width: 57px;
      height: auto;
      top: 0;
      bottom: 0;
      font-size: var(--lumo-font-size-s);
      box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
      -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      cursor: var(--lumo-clickable-cursor);
    }

    [part='year-number']:not([current]),
    [part='year-separator'] {
      opacity: 0.7;
      transition: 0.2s opacity;
    }

    [part='years']:hover [part='year-number'],
    [part='years']:hover [part='year-separator'] {
      opacity: 1;
    }

    /* TODO unsupported selector */
    #scrollers {
      position: static;
      display: block;
    }

    /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
    #scrollers[desktop] [part='months'] {
      right: auto;
    }

    /* Year scroller position indicator */
    [part='years']::before {
      border: none;
      width: 1em;
      height: 1em;
      background-color: var(--lumo-base-color);
      background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      transform: translate(-75%, -50%) rotate(45deg);
      border-top-right-radius: var(--lumo-border-radius-s);
      box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
      z-index: 1;
    }

    [part='year-number'],
    [part='year-separator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      transform: translateY(-50%);
    }

    [part='years'] [part='year-separator']::after {
      color: var(--lumo-disabled-text-color);
      content: '•';
    }

    /* Current year */

    [part='years'] [part='year-number'][current] {
      color: var(--lumo-primary-text-color);
    }

    /* Toolbar (footer) */

    [part='toolbar'] {
      padding: var(--lumo-space-s);
      box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);
      border-bottom-left-radius: var(--lumo-border-radius-l);
      margin-right: 57px;
    }

    @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {
      [part='toolbar'] {
        box-shadow: none;
      }
    }

    /* Today and Cancel buttons */

    [part='toolbar'] [part\$='button'] {
      margin: 0;
    }

    /* Narrow viewport mode (fullscreen) */

    :host([fullscreen]) [part='toolbar'] {
      order: -1;
      background-color: var(--lumo-base-color);
    }

    :host([fullscreen]) [part='overlay-header'] {
      order: -2;
      height: var(--lumo-size-m);
      padding: var(--lumo-space-s);
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
    }

    :host([fullscreen]) [part='toggle-button'],
    :host([fullscreen]) [part='clear-button'],
    [part='overlay-header'] [part='label'] {
      display: none;
    }

    /* Very narrow screen (year scroller initially hidden) */

    [part='years-toggle-button'] {
      position: relative;
      right: auto;
      display: flex;
      align-items: center;
      height: var(--lumo-size-s);
      padding: 0 0.5em;
      border-radius: var(--lumo-border-radius-m);
      z-index: 3;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    [part='years-toggle-button']::before {
      content: none;
    }

    /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */
    @media screen and (max-width: 374px) {
      :host {
        background-image: none;
      }

      [part='years'] {
        background-color: var(--lumo-shade-5pct);
      }

      [part='toolbar'],
      [part='months'] {
        margin-right: 0;
      }

      /* TODO make date-picker adapt to the width of the years part */
      [part='years'] {
        --vaadin-infinite-scroller-buffer-width: 90px;
        width: 50px;
      }

      :host([years-visible]) [part='months'] {
        padding-left: 50px;
      }
    }
  `,{moduleId:"lumo-date-picker-overlay-content"}),w("vaadin-month-calendar",d`
    :host {
      -moz-user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      font-size: var(--lumo-font-size-m);
      color: var(--lumo-body-text-color);
      text-align: center;
      padding: 0 var(--lumo-space-xs);
    }

    /* Month header */

    [part='month-header'] {
      color: var(--lumo-header-text-color);
      font-size: var(--lumo-font-size-l);
      line-height: 1;
      font-weight: 500;
      margin-bottom: var(--lumo-space-m);
    }

    /* Week days and numbers */

    [part='weekdays'],
    [part='weekday'],
    [part='week-number'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      color: var(--lumo-secondary-text-color);
    }

    [part='weekdays'] {
      margin-bottom: var(--lumo-space-s);
    }

    [part='weekday']:empty,
    [part='week-number'] {
      width: var(--lumo-size-xs);
    }

    /* Date and week number cells */

    [part='date'],
    [part='week-number'] {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--lumo-size-m);
      position: relative;
    }

    [part='date'] {
      transition: color 0.1s;
    }

    [part='date']:not(:empty) {
      cursor: var(--lumo-clickable-cursor);
    }

    :host([week-numbers]) [part='weekday']:not(:empty),
    :host([week-numbers]) [part='date'] {
      width: calc((100% - var(--lumo-size-xs)) / 7);
    }

    /* Today date */

    [part='date'][today] {
      color: var(--lumo-primary-text-color);
    }

    /* Focused date */

    [part='date']::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 2em;
      min-height: 2em;
      width: 80%;
      height: 80%;
      max-height: 100%;
      max-width: 100%;
      border-radius: var(--lumo-border-radius-m);
    }

    [part='date'][focused]::before {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host(:not([focused])) [part='date'][focused]::before {
      animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
    }

    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px transparent;
      }
    }

    [part='date']:not(:empty):not([disabled]):not([selected]):hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    [part='date'][selected] {
      color: var(--lumo-primary-contrast-color);
    }

    [part='date'][selected]::before {
      background-color: var(--lumo-primary-color);
    }

    [part='date'][disabled] {
      color: var(--lumo-disabled-text-color);
    }

    @media (pointer: coarse) {
      [part='date']:hover:not([selected])::before,
      [part='date'][focused]:not([selected])::before {
        display: none;
      }

      [part='date']:not(:empty):not([disabled]):active::before {
        display: block;
      }

      [part='date'][selected]::before {
        box-shadow: none;
      }
    }

    /* Disabled */

    :host([disabled]) * {
      color: var(--lumo-disabled-text-color) !important;
    }
  `,{moduleId:"lumo-month-calendar"});const me=document.createElement("template");me.innerHTML="\n  <style>\n    @keyframes vaadin-date-picker-month-calendar-focus-date {\n      50% {\n        box-shadow: 0 0 0 2px transparent;\n      }\n    }\n  </style>\n",document.head.appendChild(me.content);function _e(e,t){const i=Math.max(e.tabIndex,0),s=Math.max(t.tabIndex,0);return 0===i||0===s?s>i:i>s}function ge(e){const t=e.length;if(t<2)return e;const i=Math.ceil(t/2);return function(e,t){const i=[];for(;e.length>0&&t.length>0;)_e(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)}(ge(e.slice(0,i)),ge(e.slice(i)))}function ve(e,t){if(e.nodeType!==Node.ELEMENT_NODE||
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
function(e){const t=e.style;if("hidden"===t.visibility||"none"===t.display)return!0;const i=window.getComputedStyle(e);return"hidden"===i.visibility||"none"===i.display}(e))return!1;const i=e,s=function(e){if(!function(e){return!e.matches('[tabindex="-1"]')&&(e.matches("input, select, textarea, button, object")?e.matches(":not([disabled])"):e.matches("a[href], area[href], iframe, [tabindex], [contentEditable]"))}(e))return-1;const t=e.getAttribute("tabindex")||0;return Number(t)}(i);let o=s>0;s>=0&&t.push(i);let r=[];return r="slot"===i.localName?i.assignedNodes({flatten:!0}):(i.shadowRoot||i).children,[...r].forEach((e=>{o=ve(e,t)||o})),o}function be(e){return e.getRootNode().activeElement===e}w("vaadin-date-picker",[K,d`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-calendar);
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay-content'] {
      height: 70vh;
    }
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`],{moduleId:"lumo-date-picker"});
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const ye=[];class fe{constructor(e){this.host=e,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(e){if(this.__trapNode=e,0===this.__focusableElements.length)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");ye.push(this),-1===this.__focusedElementIndex&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,ye.pop()}__onKeyDown(e){if(this.__trapNode&&this===Array.from(ye).pop()&&"Tab"===e.key){e.preventDefault();const t=e.shiftKey;this.__focusNextElement(t)}}__focusNextElement(e=!1){const t=this.__focusableElements,i=e?-1:1,s=this.__focusedElementIndex;t[(t.length+s+i)%t.length].focus()}get __focusableElements(){return function(e){const t=[];return ve(e,t)?ge(t):t}(this.__trapNode)}get __focusedElementIndex(){const e=this.__focusableElements;return e.indexOf(e.filter(be).pop())}}
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class we extends($(T(P(I)))){static get template(){return C`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new E(this,(e=>{this._setTemplateFromNodes(e.addedNodes)})),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),O&&(this._boundIosResizeListener=()=>this._detectIosNavbar()),this.__focusTrapController=new fe(this)}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",(()=>{})),this.$.backdrop.addEventListener("click",(()=>{})),this.addController(this.__focusTrapController)}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,i=document.documentElement.clientHeight;t&&i>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",i-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter((e=>e.localName&&"template"===e.localName))[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last&&"Escape"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),R(this,(()=>{this.focusTrap&&this.__focusTrapController.trapFocus(this.$.overlay);const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)})),this.modeless||this._addGlobalListeners()):t&&(this.__focusTrapController.releaseFocus(),this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){const i=`__${e}Handler`,s=e=>{e&&e.target!==this||(t(),this.removeEventListener("animationend",s),delete this[i])};this[i]=s,this.addEventListener("animationend",s)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",(()=>{this._finishOpening()})):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")}_finishClosing(){document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing")}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this._exitModalState();const e=this.restoreFocusNode||this.__restoreFocusNode;if(this.restoreFocusOnClose&&e){const t=this._getActiveElement();(t===document.body||this._deepContains(t))&&setTimeout((()=>e.focus())),this.__restoreFocusNode=null}this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",(()=>{this._finishClosing()})):this._finishClosing()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter((e=>e instanceof we&&!e.hasAttribute("closing"))).sort(((e,t)=>e.__zIndex-t.__zIndex||0))}get _last(){return this===we.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),we.__attachedInstances.forEach((e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")}))}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=we.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach((e=>{e.parentNode===this.content&&this.content.removeChild(e)})),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e){this._removeOldContent(),e._Templatizer||(e._Templatizer=ie(e,this,{forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const t=e._templateRoot||(e._templateRoot=e.getRootNode());if(t!==document){this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let e=Array.from(t.querySelectorAll("style")).reduce(((e,t)=>e+t.textContent),"");if(e=e.replace(/:host/g,":host-nomatch"),e){const t=document.createElement("style");t.textContent=e,this.$.content.shadowRoot.appendChild(t),this._contentNodes.unshift(t)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,i,s){e!==t?this.template=void 0:i!==s&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,i,s,o){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const r=this._oldOwner!==i||this._oldModel!==s;this._oldModel=s,this._oldOwner=i;const a=this._oldTemplate!==e;this._oldTemplate=e;const n=this._oldRenderer!==t;this._oldRenderer=t;const l=this._oldOpened!==o;this._oldOpened=o,n&&(this.content=this,this.content.innerHTML="",delete this.content._$litPart$),e&&a?this._stampOverlayTemplate(e):t&&(n||l||r)&&o&&this.requestContentUpdate()}_getActiveElement(){let e=document.activeElement||document.body;for(;e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const i=e.ownerDocument;for(;t&&t!==i&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){let e="";const t=we.__attachedInstances.filter((e=>e!==this)).pop();if(t){e=t.__zIndex+1}this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(we.is,we);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const xe={start:"top",end:"bottom"},ke={start:"left",end:"right"},Se=e=>class extends e{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1}}}static get observers(){return["__positionSettingsChanged(positionTarget, horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap)","__overlayOpenedChanged(opened)"]}constructor(){super(),this.__boundUpdatePosition=this._updatePosition.bind(this)}__overlayOpenedChanged(e){if(["scroll","resize"].forEach((t=>{e?window.addEventListener(t,this.__boundUpdatePosition):window.removeEventListener(t,this.__boundUpdatePosition)})),e){const e=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach((t=>{this.__margins[t]=parseInt(e[t],10)}))),this.setAttribute("dir",e.direction),this._updatePosition(),requestAnimationFrame((()=>this._updatePosition()))}}get __isRTL(){return"rtl"===this.getAttribute("dir")}__positionSettingsChanged(){this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),t=this.__shouldAlignStartVertically(e);this.style.justifyContent=t?"flex-start":"flex-end";const i=this.__shouldAlignStartHorizontally(e,this.__isRTL),s=!this.__isRTL&&i||this.__isRTL&&!i;this.style.alignItems=s?"flex-start":"flex-end";const o=this.getBoundingClientRect(),r=this.__calculatePositionInOneDimension(e,o,this.noVerticalOverlap,xe,this,t),a=this.__calculatePositionInOneDimension(e,o,this.noHorizontalOverlap,ke,this,i);Object.assign(this.style,r,a),this.toggleAttribute("bottom-aligned",!t),this.toggleAttribute("top-aligned",t),this.toggleAttribute("end-aligned",!s),this.toggleAttribute("start-aligned",s)}__shouldAlignStartHorizontally(e,t){const i=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const s=Math.min(window.innerWidth,document.documentElement.clientWidth),o=!t&&"start"===this.horizontalAlign||t&&"end"===this.horizontalAlign;return this.__shouldAlignStart(e,i,s,this.__margins,o,this.noHorizontalOverlap,ke)}__shouldAlignStartVertically(e){const t=Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const i=Math.min(window.innerHeight,document.documentElement.clientHeight),s="top"===this.verticalAlign;return this.__shouldAlignStart(e,t,i,this.__margins,s,this.noVerticalOverlap,xe)}__shouldAlignStart(e,t,i,s,o,r,a){const n=i-e[r?a.end:a.start]-s[a.end],l=e[r?a.start:a.end]-s[a.start],c=o?n:l;return o===(c>(o?l:n)||c>t)}__calculatePositionInOneDimension(e,t,i,s,o,r){const a=r?s.start:s.end,n=r?s.end:s.start;return{[a]:parseFloat(o.style[a]||getComputedStyle(o)[a])+(t[r?s.start:s.end]-e[i===r?s.end:s.start])*(r?-1:1)+"px",[n]:""}}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,De=d`
  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='value']::placeholder {
    direction: rtl;
    text-align: left;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`;let Ce;
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
w("vaadin-date-picker-overlay",d`
  [part='overlay'] {
    display: flex;
    flex: auto;
  }

  [part~='content'] {
    flex: auto;
  }
`,{moduleId:"vaadin-date-picker-overlay-styles"});class $e extends(se(Se(we))){static get is(){return"vaadin-date-picker-overlay"}static get template(){return Ce||(Ce=super.template.cloneNode(!0),Ce.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),Ce}}function Ie(e,t){return e instanceof Date&&t instanceof Date&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function Te(e,t,i){return(!t||e>=t)&&(!i||e<=i)}function Pe(e,t){return t.filter((e=>void 0!==e)).reduce(((t,i)=>i?t?Math.abs(e.getTime()-i.getTime())<Math.abs(t.getTime()-e.getTime())?i:t:i:t))}function Ee(e){return{day:e.getDate(),month:e.getMonth(),year:e.getFullYear()}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */customElements.define($e.is,$e);class Oe extends(S($(I))){static get template(){return C`
      <style>
        :host {
          display: block;
        }

        #monthGrid {
          width: 100%;
          border-collapse: collapse;
        }

        #days-container tr,
        #weekdays-container tr {
          display: flex;
        }

        [part='date'] {
          outline: none;
        }

        [part='week-number'][hidden],
        [part='weekday'][hidden] {
          display: none;
        }

        [part='weekday'],
        [part='date'] {
          width: calc(100% / 7);
          padding: 0;
          font-weight: normal;
        }

        [part='weekday']:empty,
        [part='week-number'] {
          width: 12.5%;
          flex-shrink: 0;
          padding: 0;
        }

        :host([week-numbers]) [part='weekday']:not(:empty),
        :host([week-numbers]) [part='date'] {
          width: 12.5%;
        }
      </style>

      <div part="month-header" id="month-header" aria-hidden="true">[[_getTitle(month, i18n.monthNames)]]</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        on-touchend="_preventDefault"
        on-touchstart="_onMonthGridTouchStart"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th
              part="weekday"
              aria-hidden="true"
              hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
            ></th>
            <template
              is="dom-repeat"
              items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]"
            >
              <th role="columnheader" part="weekday" scope="col" abbr$="[[item.weekDay]]">[[item.weekDayShort]]</th>
            </template>
          </tr>
        </thead>
        <tbody id="days-container">
          <template is="dom-repeat" items="[[_weeks]]" as="week">
            <tr role="row">
              <td
                part="week-number"
                aria-hidden="true"
                hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
              >
                [[__getWeekNumber(week)]]
              </td>
              <template is="dom-repeat" items="[[week]]">
                <td
                  role="gridcell"
                  part="date"
                  date="[[item]]"
                  today$="[[_isToday(item)]]"
                  focused$="[[__isDayFocused(item, focusedDate)]]"
                  tabindex$="[[__getDayTabindex(item, focusedDate)]]"
                  selected$="[[__isDaySelected(item, selectedDate)]]"
                  disabled$="[[__isDayDisabled(item, minDate, maxDate)]]"
                  aria-selected$="[[__getDayAriaSelected(item, selectedDate)]]"
                  aria-disabled$="[[__getDayAriaDisabled(item, minDate, maxDate)]]"
                  aria-label$="[[__getDayAriaLabel(item)]]"
                  >[[_getDate(item)]]</td
                >
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    `}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},_weeks:{type:Array,computed:"_getWeeks(_days)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)","__focusedDateChanged(focusedDate, _days)"]}ready(){super.ready(),A(this.$.monthGrid,"tap",this._handleTap.bind(this))}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part=date]")].find((e=>Ie(e.date,this.focusedDate)))}_isDisabled(e,t,i){var s=new Date(0,0);s.setFullYear(e.getFullYear()),s.setMonth(e.getMonth()),s.setDate(1);var o=new Date(0,0);return o.setFullYear(e.getFullYear()),o.setMonth(e.getMonth()+1),o.setDate(0),!(t&&i&&t.getMonth()===i.getMonth()&&t.getMonth()===e.getMonth()&&i.getDate()-t.getDate()>=0)&&(!Te(s,t,i)&&!Te(o,t,i))}_getTitle(e,t){if(void 0!==e&&void 0!==t)return this.i18n.formatTitle(t[e.getMonth()],e.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout((()=>this._notTapping=!0),300)}_dateAdd(e,t){e.setDate(e.getDate()+t)}_applyFirstDayOfWeek(e,t){if(void 0!==e&&void 0!==t)return e.slice(t).concat(e.slice(0,t))}_getWeekDayNames(e,t,i,s){if(void 0!==e&&void 0!==t&&void 0!==i&&void 0!==s)return e=this._applyFirstDayOfWeek(e,s),t=this._applyFirstDayOfWeek(t,s),e=e.map(((e,i)=>({weekDay:e,weekDayShort:t[i]})))}__focusedDateChanged(e,t){t.some((t=>Ie(t,e)))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(e){return e?e.getDate():""}_showWeekNumbersChanged(e,t){e&&1===t?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(e,t){return e&&1===t}_isToday(e){return Ie(new Date,e)}_getDays(e,t){if(void 0!==e&&void 0!==t){var i=new Date(0,0);for(i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()),i.setDate(1);i.getDay()!==t;)this._dateAdd(i,-1);for(var s=[],o=i.getMonth(),r=e.getMonth();i.getMonth()===r||i.getMonth()===o;)s.push(i.getMonth()===r?new Date(i.getTime()):null),this._dateAdd(i,1);return s}}_getWeeks(e){return e.reduce(((e,t,i)=>(i%7==0&&e.push([]),e[e.length-1].push(t),e)),[])}_handleTap(e){this.ignoreTaps||this._notTapping||!e.target.date||e.target.hasAttribute("disabled")||(this.selectedDate=e.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:e.target.date},bubbles:!0,composed:!0})))}_preventDefault(e){e.preventDefault()}__getWeekNumber(e){
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
return function(e){let t=e.getDay();0===t&&(t=7);const i=4-t,s=new Date(e.getTime()+24*i*3600*1e3),o=new Date(0,0);o.setFullYear(s.getFullYear());const r=s.getTime()-o.getTime(),a=Math.round(r/864e5);return Math.floor(a/7+1)}(e.reduce(((e,t)=>!e&&t?t:e)))}__isDayFocused(e,t){return Ie(e,t)}__isDaySelected(e,t){return Ie(e,t)}__getDayAriaSelected(e,t){if(this.__isDaySelected(e,t))return"true"}__isDayDisabled(e,t,i){return!Te(e,t,i)}__getDayAriaDisabled(e,t,i){if(void 0!==e&&void 0!==t&&void 0!==i)return this.__isDayDisabled(e,t,i)?"true":void 0}__getDayAriaLabel(e){if(!e)return"";var t=this._getDate(e)+" "+this.i18n.monthNames[e.getMonth()]+" "+e.getFullYear()+", "+this.i18n.weekdays[e.getDay()];return this._isToday(e)&&(t+=", "+this.i18n.today),t}__getDayTabindex(e,t){return this.__isDayFocused(e,t)?"0":"-1"}__getWeekNumbers(e){return e.map((t=>this.__getWeekNumber(t,e))).filter(((e,t,i)=>i.indexOf(e)===t))}}customElements.define(Oe.is,Oe);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class Re extends I{static get template(){return C`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 500px;
        }

        #scroller {
          position: relative;
          height: 100%;
          overflow: auto;
          outline: none;
          margin-right: -40px;
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
        }

        #scroller.notouchscroll {
          -webkit-overflow-scrolling: auto;
        }

        #scroller::-webkit-scrollbar {
          display: none;
        }

        .buffer {
          position: absolute;
          width: var(--vaadin-infinite-scroller-buffer-width, 100%);
          box-sizing: border-box;
          padding-right: 40px;
          top: var(--vaadin-infinite-scroller-buffer-offset, 0);
          animation: fadein 0.2s;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      </style>

      <div id="scroller" on-scroll="_scroll">
        <div class="buffer"></div>
        <div class="buffer"></div>
        <div id="fullHeight"></div>
      </div>
    `}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready(),this._buffers=Array.prototype.slice.call(this.root.querySelectorAll(".buffer")),this.$.fullHeight.style.height=2*this._initialScroll+"px";const e=this.querySelector("template");this._TemplateClass=ie(e,this,{forwardHostProp:function(e,t){"index"!==e&&this._buffers.forEach((i=>{[].forEach.call(i.children,(i=>{i._itemWrapper.instance[e]=t}))}))}}),M&&(this.$.scroller.tabIndex=-1)}_activated(e){e&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach((e=>{[].forEach.call(e.children,(e=>this._ensureStampedInstance(e._itemWrapper)))}),this),this._buffers[0].translateY||this._reset(),this._initDone=!0)}_translateBuffer(e){const t=e?1:0;this._buffers[t].translateY=this._buffers[t?0:1].translateY+this._bufferHeight*(t?-1:1),this._buffers[t].style.transform="translate3d(0, "+this._buffers[t].translateY+"px, 0)",this._buffers[t].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const e=this.$.scroller.scrollTop;(e<this._bufferHeight||e>2*this._initialScroll-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const t=this.itemHeight+this.bufferOffset,i=e>this._buffers[1].translateY+t,s=e<this._buffers[0].translateY+t;(i||s)&&(this._translateBuffer(s),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=q.debounce(this._debouncerScrollFinish,z.after(200),(()=>{const e=this.$.scroller.getBoundingClientRect();this._isVisible(this._buffers[0],e)||this._isVisible(this._buffers[1],e)||(this.position=this.position)}))}get bufferOffset(){return this._buffers[0].offsetTop}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(e){this._preventScrollEvent=!0,e>this._firstIndex&&e<this._firstIndex+2*this.bufferSize?this.$.scroller.scrollTop=this.itemHeight*(e-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~e,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=e%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout((()=>{this.$.scroller.classList.remove("notouchscroll")}),10))}get itemHeight(){if(!this._itemHeightVal){const e=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),t="background-position";this.$.fullHeight.style.setProperty(t,e);const i=getComputedStyle(this.$.fullHeight).getPropertyValue(t);this.$.fullHeight.style.removeProperty(t),this._itemHeightVal=parseFloat(i)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach((e=>{e.style.transform="translate3d(0, "+e.translateY+"px, 0)"})),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=q.debounce(this._debouncerUpdateClones,z.after(200),(()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()})),this._scrollDisabled=!1}_createPool(){const e=this.getBoundingClientRect();this._buffers.forEach((t=>{for(let i=0;i<this.bufferSize;i++){const i=document.createElement("div");i.style.height=this.itemHeight+"px",i.instance={};const s="vaadin-infinite-scroller-item-content-"+(Re._contentIndex=Re._contentIndex+1||0),o=document.createElement("slot");o.setAttribute("name",s),o._itemWrapper=i,t.appendChild(o),i.setAttribute("slot",s),this.appendChild(i),setTimeout((()=>{this._isVisible(i,e)&&this._ensureStampedInstance(i)}),1)}}),this),setTimeout((()=>{R(this,this._finishInit.bind(this))}),1)}_ensureStampedInstance(e){if(!e.firstElementChild){var t=e.instance;e.instance=new this._TemplateClass({}),e.appendChild(e.instance.root),Object.keys(t).forEach((i=>{e.instance.set(i,t[i])}))}}_updateClones(e){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;var t=e?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach(((i,s)=>{if(!i.updated){var o=this._firstIndex+this.bufferSize*s;[].forEach.call(i.children,((i,s)=>{const r=i._itemWrapper;e&&!this._isVisible(r,t)||(r.instance.index=o+s)})),i.updated=!0}}),this)}_isVisible(e,t){var i=e.getBoundingClientRect();return i.bottom>t.top&&i.top<t.bottom}}customElements.define(Re.is,Re);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class Ae{constructor(e,t){this.query=e,this.callback=t,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(e){"function"==typeof this.callback&&this.callback(e.matches)}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Me extends(P($(T(I)))){static get template(){return C`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          outline: none;
          background: #fff;
        }

        [part='overlay-header'] {
          display: flex;
          flex-shrink: 0;
          flex-wrap: nowrap;
          align-items: center;
        }

        :host(:not([fullscreen])) [part='overlay-header'] {
          display: none;
        }

        [part='label'] {
          flex-grow: 1;
        }

        [part='clear-button']:not([showclear]) {
          display: none;
        }

        [part='years-toggle-button'] {
          display: flex;
        }

        [part='years-toggle-button'][desktop] {
          display: none;
        }

        :host(:not([years-visible])) [part='years-toggle-button']::before {
          transform: rotate(180deg);
        }

        #scrollers {
          display: flex;
          height: 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        [part='months'],
        [part='years'] {
          height: 100%;
        }

        [part='months'] {
          --vaadin-infinite-scroller-item-height: 270px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        #scrollers[desktop] [part='months'] {
          right: 50px;
          transform: none !important;
        }

        [part='years'] {
          --vaadin-infinite-scroller-item-height: 80px;
          width: 50px;
          position: absolute;
          right: 0;
          transform: translateX(100%);
          -webkit-tap-highlight-color: transparent;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          /* Center the year scroller position. */
          --vaadin-infinite-scroller-buffer-offset: 50%;
        }

        #scrollers[desktop] [part='years'] {
          position: absolute;
          transform: none !important;
        }

        [part='years']::before {
          content: '';
          display: block;
          background: transparent;
          width: 0;
          height: 0;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px;
          border-style: solid;
          border-color: transparent;
          border-left-color: #000;
        }

        :host(.animate) [part='months'],
        :host(.animate) [part='years'] {
          transition: all 200ms;
        }

        [part='toolbar'] {
          display: flex;
          justify-content: space-between;
          z-index: 2;
          flex-shrink: 0;
        }

        [part~='overlay-header']:not([desktop]) {
          padding-bottom: 40px;
        }

        [part~='years-toggle-button'] {
          position: absolute;
          top: auto;
          right: 8px;
          bottom: 0;
          z-index: 1;
          padding: 8px;
        }
      </style>

      <div part="overlay-header" on-touchend="_preventDefault" desktop$="[[_desktopMode]]" aria-hidden="true">
        <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
        <div part="clear-button" showclear$="[[_showClear(selectedDate)]]"></div>
        <div part="toggle-button"></div>

        <div part="years-toggle-button" desktop$="[[_desktopMode]]" aria-hidden="true">
          [[_yearAfterXMonths(_visibleMonthIndex)]]
        </div>
      </div>

      <div id="scrollers" desktop$="[[_desktopMode]]">
        <vaadin-infinite-scroller
          id="monthScroller"
          on-custom-scroll="_onMonthScroll"
          on-touchstart="_onMonthScrollTouchStart"
          buffer-size="3"
          active="[[initialPosition]]"
          part="months"
        >
          <template>
            <vaadin-month-calendar
              i18n="[[i18n]]"
              month="[[_dateAfterXMonths(index)]]"
              selected-date="{{selectedDate}}"
              focused-date="[[focusedDate]]"
              ignore-taps="[[_ignoreTaps]]"
              show-week-numbers="[[showWeekNumbers]]"
              min-date="[[minDate]]"
              max-date="[[maxDate]]"
              part="month"
              theme$="[[theme]]"
              on-keydown="__onMonthCalendarKeyDown"
            >
            </vaadin-month-calendar>
          </template>
        </vaadin-infinite-scroller>
        <vaadin-infinite-scroller
          id="yearScroller"
          on-custom-scroll="_onYearScroll"
          on-touchstart="_onYearScrollTouchStart"
          buffer-size="12"
          active="[[initialPosition]]"
          part="years"
          aria-hidden="true"
        >
          <template>
            <div
              part="year-number"
              current$="[[_isCurrentYear(index)]]"
              selected$="[[_isSelectedYear(index, selectedDate)]]"
            >
              [[_yearAfterXYears(index)]]
            </div>
            <div part="year-separator" aria-hidden="true"></div>
          </template>
        </vaadin-infinite-scroller>
      </div>

      <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
        <vaadin-button
          id="todayButton"
          part="today-button"
          theme="tertiary"
          disabled="[[!_isTodayAllowed(minDate, maxDate)]]"
          on-keydown="__onTodayButtonKeyDown"
        >
          [[i18n.today]]
        </vaadin-button>
        <vaadin-button id="cancelButton" part="cancel-button" theme="tertiary" on-keydown="__onCancelButtonKeyDown">
          [[i18n.cancel]]
        </vaadin-button>
      </div>
    `}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{selectedDate:{type:Date},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,label:String}}get __isRTL(){return"rtl"===this.getAttribute("dir")}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("vaadin-month-calendar")].map((e=>e.focusableDateElement)).find(Boolean)}ready(){super.ready(),A(this,"tap",this._stopPropagation),A(this.$.scrollers,"track",this._track.bind(this)),A(this.shadowRoot.querySelector('[part="clear-button"]'),"tap",this._clear.bind(this)),A(this.shadowRoot.querySelector('[part="today-button"]'),"tap",this._onTodayTap.bind(this)),A(this.shadowRoot.querySelector('[part="cancel-button"]'),"tap",this._cancel.bind(this)),A(this.shadowRoot.querySelector('[part="toggle-button"]'),"tap",this._cancel.bind(this)),A(this.shadowRoot.querySelector('[part="years"]'),"tap",this._onYearTap.bind(this)),A(this.shadowRoot.querySelector('[part="years-toggle-button"]'),"tap",this._toggleYearScroller.bind(this)),this.addController(new Ae(this._desktopMediaQuery,(e=>{this._desktopMode=e})))}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),j(this.$.scrollers,"pan-y")}focusCancel(){this.$.cancelButton.focus()}scrollToDate(e,t){this._scrollToPosition(this._differenceInMonths(e,this._originDate),t)}_selectDate(e){this.selectedDate=e,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:e},bubbles:!0,composed:!0}))}_focusedDateChanged(e){this.revealDate(e)}_isCurrentYear(e){return 0===e}_isSelectedYear(e,t){if(t)return t.getFullYear()===this._originDate.getFullYear()+e}revealDate(e,t=!0){if(e){const i=this._differenceInMonths(e,this._originDate),s=this.$.monthScroller.position>i,o=Math.max(this.$.monthScroller.itemHeight,this.$.monthScroller.clientHeight-2*this.$.monthScroller.bufferOffset)/this.$.monthScroller.itemHeight,r=this.$.monthScroller.position+o-1<i;s?this._scrollToPosition(i,t):r&&this._scrollToPosition(i-o+1,t)}}_initialPositionChanged(e){this.scrollToDate(e)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position),this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=12*this.$.yearScroller.position-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout((()=>this._notTapping=!0),300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=q.debounce(this._debouncer,z.after(300),(()=>this._ignoreTaps=!1))}_formatDisplayed(e,t,i){return e?t(Ee(e)):i}_onTodayTap(){var e=new Date;Math.abs(this.$.monthScroller.position-this._differenceInMonths(e,this._originDate))<.001?(this._selectDate(e),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_showClear(e){return!!e}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){var t=(e.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2))/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+12*t,!0)}}_scrollToPosition(e,t){if(void 0===this._targetPosition){if(!t)return this.$.monthScroller.position=e,this._targetPosition=void 0,this._repositionYearScroller(),void this.__tryFocusDate();this._targetPosition=e;var i=t?300:0,s=0,o=this.$.monthScroller.position,r=e=>{var t,a,n,l=e-(s=s||e);if(l<i){var c=(t=l,a=o,n=this._targetPosition-o,(t/=i/2)<1?n/2*t*t+a:-n/2*((t-=1)*(t-2)-1)+a);this.$.monthScroller.position=c,window.requestAnimationFrame(r)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:o}})),this.$.monthScroller.position=this._targetPosition,this._targetPosition=void 0,this.__tryFocusDate();setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(r)}else this._targetPosition=e}_limit(e,t){return Math.min(t.max,Math.max(t.min,e))}_handleTrack(e){if(!(Math.abs(e.detail.dx)<10||Math.abs(e.detail.ddy)>10)){Math.abs(e.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);var t=this._translateX+e.detail.ddx;this._translateX=this._limit(t,{min:0,max:this._yearScrollerWidth})}}_track(e){if(!this._desktopMode)switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller()}}_toggleAnimateClass(e){e?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(e){this._desktopMode||(this.$.monthScroller.style.transform="translateX("+(e-this._yearScrollerWidth)+"px)",this.$.yearScroller.style.transform="translateX("+e+"px)")}_yearAfterXYears(e){var t=new Date(this._originDate);return t.setFullYear(parseInt(e)+this._originDate.getFullYear()),t.getFullYear()}_yearAfterXMonths(e){return this._dateAfterXMonths(e).getFullYear()}_dateAfterXMonths(e){var t=new Date(this._originDate);return t.setDate(1),t.setMonth(parseInt(e)+this._originDate.getMonth()),t}_differenceInMonths(e,t){return 12*(e.getFullYear()-t.getFullYear())-t.getMonth()+e.getMonth()}_differenceInYears(e,t){return this._differenceInMonths(e,t)/12}_clear(){this._selectDate("")}_close(){const e=this.getRootNode().host,t=e?e.getRootNode().host:null;t&&(t.opened=!1),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(e){e.preventDefault()}__toggleDate(e){Ie(e,this.selectedDate)?(this._clear(),this.focusedDate=e):this._selectDate(e)}__onMonthCalendarKeyDown(e){let t=!1;switch(e.key){case"ArrowDown":this._moveFocusByDays(7),t=!0;break;case"ArrowUp":this._moveFocusByDays(-7),t=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),t=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),t=!0;break;case"Enter":this._selectDate(this.focusedDate),this._close(),t=!0;break;case" ":this.__toggleDate(this.focusedDate),t=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),t=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),t=!0;break;case"PageDown":this._moveFocusByMonths(e.shiftKey?12:1),t=!0;break;case"PageUp":this._moveFocusByMonths(e.shiftKey?-12:-1),t=!0;break;case"Escape":this._cancel(),t=!0}t&&(e.preventDefault(),e.stopPropagation())}__onTodayButtonKeyDown(e){this.hasAttribute("fullscreen")?e.stopPropagation():("Tab"===e.key&&e.shiftKey&&(e.stopPropagation(),setTimeout((()=>this.revealDate(this.focusedDate)),1)),"Escape"===e.key&&(this._cancel(),e.preventDefault(),e.stopPropagation()))}__onCancelButtonKeyDown(e){this.hasAttribute("fullscreen")?e.stopPropagation():("Tab"!==e.key||e.shiftKey||(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))),"Escape"===e.key&&(this._cancel(),e.preventDefault(),e.stopPropagation()))}__tryFocusDate(){if(this.__pendingDateFocus){const e=this.focusableDateElement;e&&Ie(e.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,e.focus())}}async focusDate(e,t){const i=e||this.selectedDate||this.initialPosition||new Date;this.focusedDate=i,t||(this._focusedMonthDate=i.getDate()),await this.focusDateElement()}async focusDateElement(){this.__pendingDateFocus=this.focusedDate,await new Promise((e=>{requestAnimationFrame(e)})),this.__tryFocusDate()}_focusClosestDate(e){this.focusDate(Pe(e,[this.minDate,this.maxDate]))}_moveFocusByDays(e){var t=this.focusedDate,i=new Date(0,0);i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()),i.setDate(t.getDate()+e),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusDate(i):this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusByMonths(e){var t=this.focusedDate,i=new Date(0,0);i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()+e);var s=i.getMonth();i.setDate(this._focusedMonthDate||(this._focusedMonthDate=t.getDate())),i.getMonth()!==s&&i.setDate(0),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusDate(i,!0):this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusInsideMonth(e,t){var i=new Date(0,0);i.setFullYear(e.getFullYear()),"minDate"===t?(i.setMonth(e.getMonth()),i.setDate(1)):(i.setMonth(e.getMonth()+1),i.setDate(0)),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusDate(i):this._dateAllowed(e,this.minDate,this.maxDate)?this.focusDate(this[t]):this._focusClosestDate(e)}_dateAllowed(e,t,i){return(!t||e>=t)&&(!i||e<=i)}_isTodayAllowed(e,t){var i=new Date,s=new Date(0,0);return s.setFullYear(i.getFullYear()),s.setMonth(i.getMonth()),s.setDate(i.getDate()),this._dateAllowed(s,e,t)}_stopPropagation(e){e.stopPropagation()}}customElements.define(Me.is,Me);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class qe{constructor(e){this.host=e,e.addEventListener("opened-changed",(()=>{e.opened||this.__setVirtualKeyboardEnabled(!1)})),e.addEventListener("blur",(()=>this.__setVirtualKeyboardEnabled(!0))),e.addEventListener("touchstart",(()=>this.__setVirtualKeyboardEnabled(!0)))}__setVirtualKeyboardEnabled(e){this.host.inputElement&&(this.host.inputElement.inputMode=e?"":"none")}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ze=e=>class extends(P(B(V(L(e))))){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,observer:"_valueChanged",notify:!0,value:""},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean},_fullscreen:{type:Boolean,value:!1},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_touchPrevented:Array,i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",today:"Today",cancel:"Cancel",formatDate:e=>{const t=String(e.year).replace(/\d+/,(e=>"0000".substr(e.length)+e));return[e.month+1,e.day,t].join("/")},parseDate:e=>{const t=e.split("/"),i=new Date;let s,o=i.getMonth(),r=i.getFullYear();if(3===t.length?(r=parseInt(t[2]),t[2].length<3&&r>=0&&(r+=r<50?2e3:1900),o=parseInt(t[0])-1,s=parseInt(t[1])):2===t.length?(o=parseInt(t[0])-1,s=parseInt(t[1])):1===t.length&&(s=parseInt(t[0])),void 0!==s)return{day:s,month:o,year:r}},formatTitle:(e,t)=>e+" "+t})},min:{type:String,observer:"_minChanged"},max:{type:String,observer:"_maxChanged"},_minDate:{type:Date,value:""},_maxDate:{type:Date,value:""},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, i18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:O},_webkitOverflowScroll:{type:Boolean,value:""===document.createElement("div").style.webkitOverflowScrolling},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)"]}get clearElement(){return null}get _inputValue(){return this.inputElement?this.inputElement.value:void 0}set _inputValue(e){this.inputElement&&(this.inputElement.value=e)}get _nativeInput(){return this.inputElement?this.inputElement.focusElement||this.inputElement:null}constructor(){super(),this._boundOnScroll=this._onScroll.bind(this)}_onFocus(e){super._onFocus(e),this._noInput&&e.target.blur()}_onBlur(e){if(super._onBlur(e),!this.opened){if(this.autoOpenDisabled){const e=this._getParsedDate();this._isValidDate(e)&&this._selectDate(e)}""===this.inputElement.value&&this.__dispatchChange?(this.validate(),this.value="",this.__dispatchChange=!1):this.validate()}}ready(){super.ready(),this.addEventListener("click",(e=>{this._isClearButton(e)||this.autoOpenDisabled&&!this._noInput||this.open()})),this.addController(new Ae(this._fullscreenMediaQuery,(e=>{this._fullscreen=e}))),this.addController(new qe(this))}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_propertiesChanged(e,t,i){super._propertiesChanged(e,t,i),"value"in t&&this.__dispatchChange&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__dispatchChange=!1)}open(){this.disabled||this.readonly||(this.opened=!0)}close(){(this._overlayInitialized||this.autoOpenDisabled)&&this.$.overlay.close()}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade"),this._overlayInitialized=!0,this.$.overlay.addEventListener("opened-changed",(e=>this.opened=e.detail.value)),this._overlayContent.addEventListener("close",this._close.bind(this)),this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this)),this._overlayContent.addEventListener("date-tap",(e=>{this.__userConfirmedDate=!0,this._selectDate(e.detail.date)})),this._overlayContent.addEventListener("date-selected",(e=>{this.__userConfirmedDate=!0,this._selectDate(e.detail.date)})),this._overlayContent.addEventListener("focus",(()=>{this._setFocused(!0)})),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this)),this.addEventListener("mousedown",(()=>this.__bringToFront())),this.addEventListener("touchstart",(()=>this.__bringToFront()))}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){const e=!this._inputValue||this._selectedDate&&this._inputValue===this._getFormattedDate(this.i18n.formatDate,this._selectedDate),t=!this._selectedDate||Te(this._selectedDate,this._minDate,this._maxDate);let i=!0;return this.inputElement&&(this.inputElement.checkValidity?i=this.inputElement.checkValidity():this.inputElement.validate&&(i=this.inputElement.validate())),e&&t&&i}_selectDate(e){const t=this._formatISO(e);this.value!==t&&(this.__dispatchChange=!0),this._selectedDate=e}_close(e){e&&e.stopPropagation(),this._focus(),this.close()}__bringToFront(){requestAnimationFrame((()=>{this.$.overlay.bringToFront()}))}_parseDate(e){const t=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(e);if(!t)return;const i=new Date(0,0);return i.setFullYear(parseInt(t[1],10)),i.setMonth(parseInt(t[2],10)-1),i.setDate(parseInt(t[3],10)),i}_isNoInput(e,t,i,s,o,r){return!e||t&&(!r||o)||i&&o||!s.parseDate}_formatISO(e){if(!(e instanceof Date))return"";const t=(e,t="00")=>(t+e).substr((t+e).length-t.length);let i="",s="0000",o=e.getFullYear();o<0?(o=-o,i="-",s="000000"):e.getFullYear()>=1e4&&(i="+",s="000000");return[i+t(o,s),t(e.getMonth()+1),t(e.getDate())].join("-")}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.setAttribute("role","combobox"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(e){e&&!this._overlayInitialized&&this._initOverlay(),this._overlayInitialized&&(this.$.overlay.opened=e),this.inputElement&&this.inputElement.setAttribute("aria-expanded",e)}_selectedDateChanged(e,t){if(void 0===e||void 0===t)return;const i=this._formatISO(e);this.__keepInputValue||this._applyInputValue(e),i!==this.value&&(this.validate(),this.value=i),this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1}_focusedDateChanged(e,t){void 0!==e&&void 0!==t&&(this._ignoreFocusedDateChange||this._noInput||this._applyInputValue(e))}__getOverlayTheme(e,t){if(t)return e}_handleDateChange(e,t,i){if(!t)return void(this[e]="");const s=this._parseDate(t);s?Ie(this[e],s)||(this[e]=s,this.value&&this.validate()):this.value=i}_valueChanged(e,t){this._handleDateChange("_selectedDate",e,t),this._toggleHasValue(!!e)}_minChanged(e,t){this._handleDateChange("_minDate",e,t)}_maxChanged(e,t){this._handleDateChange("_maxDate",e,t)}_onOverlayOpened(){this._openedWithFocusRing=this.hasAttribute("focus-ring");const e=this._parseDate(this.initialPosition),t=this._selectedDate||this._overlayContent.initialPosition||e||new Date;e||Te(t,this._minDate,this._maxDate)?this._overlayContent.initialPosition=t:this._overlayContent.initialPosition=Pe(t,[this._minDate,this._maxDate]),this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._webkitOverflowScroll&&(this._touchPrevented=this._preventWebkitOverflowScrollingTouch(this.parentElement)),this._focusOverlayOnOpen?(this._overlayContent.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&this.focusElement.blur()}_preventWebkitOverflowScrollingTouch(e){const t=[];for(;e;){if("touch"===window.getComputedStyle(e).webkitOverflowScrolling){const i=e.style.webkitOverflowScrolling;e.style.webkitOverflowScrolling="auto",t.push({element:e,oldInlineValue:i})}e=e.parentElement}return t}_selectParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){const e=this._inputValue||"",t=this._getParsedDate(e);this._isValidDate(t)?this._selectDate(t):(this.__keepInputValue=!0,this._selectDate(null),this._selectedDate=null,this.__keepInputValue=!1)}else this._focusedDate&&this._selectDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){window.removeEventListener("scroll",this._boundOnScroll,!0),this._touchPrevented&&(this._touchPrevented.forEach((e=>e.element.style.webkitOverflowScrolling=e.oldInlineValue)),this._touchPrevented=[]),this.__userConfirmedDate?this.__userConfirmedDate=!1:this._selectParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.value||this.validate(),this.getRootNode().activeElement!==this.inputElement&&this._setFocused(!1)}_onScroll(e){e.target!==window&&this._overlayContent.contains(e.target)||this._overlayContent._repositionYearScroller()}_focus(){this._noInput?this._overlayInitialized&&this._overlayContent.focus():this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputValue.length)}_applyInputValue(e){this._inputValue=e?this._getFormattedDate(this.i18n.formatDate,e):""}_getFormattedDate(e,t){return e(Ee(t))}_setSelectionRange(e,t){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,t)}_isValidDate(e){return e&&!isNaN(e.getTime())}_onChange(e){""!==this.inputElement.value||e.detail&&e.detail.sourceEvent&&e.detail.sourceEvent.__fromClearButton||(this.__dispatchChange=!0),e.stopPropagation()}_onClearButtonClick(){this.value="",this._inputValue="",this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_onKeyDown(e){if(this._noInput){-1===[9].indexOf(e.keyCode)&&e.preventDefault()}switch(e.key){case"ArrowDown":case"ArrowUp":e.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Enter":{const e=this._getParsedDate(),t=this._isValidDate(e);if(this.opened)this._overlayInitialized&&this._overlayContent.focusedDate&&t&&this._selectDate(this._overlayContent.focusedDate),this.close();else if(t||""===this.inputElement.value){const e=this.value;this._selectParsedOrFocusedDate(),e===this.value&&this.validate()}else this.validate();break}case"Escape":this.opened?(this._focusedDate=this._selectedDate,this._close()):this.clearButtonVisible?this._onClearButtonClick():this.autoOpenDisabled?(""===this.inputElement.value&&this._selectDate(null),this._applyInputValue(this._selectedDate)):(this._focusedDate=this._selectedDate,this._selectParsedOrFocusedDate());break;case"Tab":this.opened&&(e.preventDefault(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDate(this._focusedDate))}}_getParsedDate(e=this._inputValue){const t=this.i18n.parseDate&&this.i18n.parseDate(e);return t&&this._parseDate(t.year+"-"+(t.month+1)+"-"+t.day)}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_onInput(){this.opened||!this.inputElement.value||this.autoOpenDisabled||this.open(),this._userInputValueChanged()}_userInputValueChanged(){if(this.opened&&this._inputValue){const e=this._getParsedDate();this._isValidDate(e)&&(this._ignoreFocusedDateChange=!0,Ie(e,this._focusedDate)||(this._focusedDate=e),this._ignoreFocusedDateChange=!1)}}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;w("vaadin-date-picker",[Q,De],{moduleId:"vaadin-date-picker-styles"});class je extends(ze(X($(D(I))))){static get is(){return"vaadin-date-picker"}static get template(){return C`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[__getOverlayTheme(theme, _overlayInitialized)]]"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-close="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
        disable-upgrade
      >
        <template>
          <vaadin-date-picker-overlay-content
            id="overlay-content"
            i18n="[[i18n]]"
            fullscreen$="[[_fullscreen]]"
            label="[[label]]"
            selected-date="[[_selectedDate]]"
            slot="dropdown-content"
            focused-date="{{_focusedDate}}"
            show-week-numbers="[[showWeekNumbers]]"
            min-date="[[_minDate]]"
            max-date="[[_maxDate]]"
            role="dialog"
            on-date-tap="_close"
            part="overlay-content"
            theme$="[[__getOverlayTheme(theme, _overlayInitialized)]]"
          ></vaadin-date-picker-overlay-content>
        </template>
      </vaadin-date-picker-overlay>
    `}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new F(this,(e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e}))),this.addController(new N(this.inputElement,this._labelController));this.shadowRoot.querySelector('[part="toggle-button"]').addEventListener("mousedown",(e=>e.preventDefault()))}_onVaadinOverlayClose(e){this._openedWithFocusRing&&this.hasAttribute("focused")?this.setAttribute("focus-ring",""):this.hasAttribute("focused")||this.blur(),e.detail.sourceEvent&&-1!==e.detail.sourceEvent.composedPath().indexOf(this)&&e.preventDefault()}_toggle(e){e.stopPropagation(),this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_openedChanged(e){super._openedChanged(e),this.$.overlay.positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.$.overlay.noVerticalOverlap=!0}}customElements.define(je.is,je),w("vaadin-overlay",de,{moduleId:"lumo-vaadin-overlay"});w("vaadin-combo-box-overlay",[de,he,d`
  [part='content'] {
    padding: 0;
  }

  :host {
    --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
    --_vaadin-combo-box-items-container-border-style: solid;
    --_vaadin-combo-box-items-container-border-color: transparent;
  }

  /* Loading state */

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  :host([loading]) [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-50pct) var(--lumo-primary-color-50pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    animation: 1s linear infinite lumo-combo-box-loader-rotate, 0.3s 0.1s lumo-combo-box-loader-fade-in both;
    pointer-events: none;
  }

  @keyframes lumo-combo-box-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-combo-box-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  /* RTL specific styles */

  :host([loading][dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`],{moduleId:"lumo-combo-box-overlay"});w("vaadin-combo-box-item",[oe,d`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
  }

  @media (any-hover: hover) {
    :host([focused]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }
`],{moduleId:"lumo-combo-box-item"});w("vaadin-time-picker",[K,d`
  [part~='toggle-button']::before {
    content: var(--lumo-icons-clock);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`],{moduleId:"lumo-time-picker"});
/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class Be extends($(T(I))){static get template(){return C`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,_oldRenderer:Function}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}connectedCallback(){super.connectedCallback(),this._comboBox=this.parentNode.comboBox;const e=this._comboBox.getAttribute("dir");e&&this.setAttribute("dir",e)}requestContentUpdate(){if(!this.renderer)return;const e={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._comboBox,e)}__rendererOrItemChanged(e,t,i){void 0!==i&&void 0!==t&&(this._oldRenderer!==e&&(this.innerHTML="",delete this._$litPart$),e&&(this._oldRenderer=e,this.requestContentUpdate()))}__updateLabel(e,t){t||(this.textContent=e)}}customElements.define(Be.is,Be);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class Ve extends Be{static get is(){return"vaadin-time-picker-item"}}let Le;customElements.define(Ve.is,Ve),
/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
w("vaadin-combo-box-overlay",d`
    #overlay {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-combo-box-overlay-styles"});class Fe extends(Se(we)){static get is(){return"vaadin-combo-box-overlay"}static get template(){return Le||(Le=super.template.cloneNode(!0),Le.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),Le}connectedCallback(){super.connectedCallback();const e=this.__dataHost,t=e&&e.getRootNode().host,i=t&&t.getAttribute("dir");i&&this.setAttribute("dir",i)}ready(){super.ready();const e=document.createElement("div");e.setAttribute("part","loader");const t=this.shadowRoot.querySelector('[part~="content"]');t.parentNode.insertBefore(e,t)}_outsideClickListener(e){const t=e.composedPath();t.includes(this.positionTarget)||t.includes(this)||this.close()}}customElements.define(Fe.is,Fe),
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
w("vaadin-time-picker-overlay",d`
    #overlay {
      width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
    }
  `,{moduleId:"vaadin-time-picker-overlay-styles"});class Ne extends Fe{static get is(){return"vaadin-time-picker-overlay"}}customElements.define(Ne.is,Ne);
/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Ue=class{toString(){return""}};
/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ge extends I{static get is(){return"vaadin-combo-box-scroller"}static get template(){return C`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object},itemIdPath:{type:String},comboBox:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}__openedChanged(e){e&&this.requestContentUpdate()}ready(){super.ready(),this.__hostTagName=this.constructor.is.replace("-scroller",""),this.setAttribute("role","listbox"),this.addEventListener("click",(e=>e.stopPropagation())),this.__patchWheelOverScrolling(),this.__virtualizer=new U({createElements:this.__createElements.bind(this),updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(e){if(!(this.opened&&e>=0))return;const t=this._visibleItemsCount();let i=e;e>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(e),i=e-t+1):e>this.__virtualizer.firstVisibleIndex&&(i=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,i));const s=[...this.children].find((e=>!e.hidden&&e.index===this.__virtualizer.lastVisibleIndex));if(!s||e!==s.index)return;const o=s.getBoundingClientRect(),r=this.getBoundingClientRect(),a=o.bottom-r.bottom+this._viewportTotalPaddingBottom;a>0&&(this.scrollTop+=a)}__getAriaRole(e){return void 0!==e&&"option"}__getAriaSelected(e,t){return this.__isItemFocused(e,t).toString()}__isItemFocused(e,t){return e==t}__isItemSelected(e,t,i){return!(e instanceof Ue)&&(i&&void 0!==e&&void 0!==t?this.get(i,e)===this.get(i,t):e===t)}__itemsChanged(e){this.__virtualizer&&e&&(this.__virtualizer.size=e.length,this.__virtualizer.flush(),this.setAttribute("aria-setsize",e.length),this.requestContentUpdate())}__loadingChanged(e){this.__virtualizer&&!e&&setTimeout((()=>this.requestContentUpdate()))}__focusedIndexChanged(e,t){this.__virtualizer&&(e!==t&&this.requestContentUpdate(),e>=0&&this.scrollIntoView(e))}__rendererChanged(e,t){(e||t)&&this.requestContentUpdate()}__createElements(e){return[...Array(e)].map((()=>{const e=document.createElement(`${this.__hostTagName}-item`);return e.addEventListener("click",this.__boundOnItemClick),e.tabIndex="-1",e.style.width="100%",e}))}__updateElement(e,t){const i=this.items[t],s=this.focusedIndex;e.setProperties({item:i,index:this.__requestItemByIndex(i,t),label:this.getItemLabel(i),selected:this.__isItemSelected(i,this.selectedItem,this.itemIdPath),renderer:this.renderer,focused:this.__isItemFocused(s,t)}),e.id=`${this.__hostTagName}-item-${t}`,e.setAttribute("role",this.__getAriaRole(t)),e.setAttribute("aria-selected",this.__getAriaSelected(s,t)),e.setAttribute("aria-posinset",t+1),this.theme?e.setAttribute("theme",this.theme):e.removeAttribute("theme")}__onItemClick(e){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",(e=>{const t=0===this.scrollTop,i=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(t&&e.deltaY<0||i&&e.deltaY>0)&&e.preventDefault()}))}get _viewportTotalPaddingBottom(){if(void 0===this._cachedViewportTotalPaddingBottom){const e=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map((e=>parseInt(e,10))).reduce(((e,t)=>e+t))}return this._cachedViewportTotalPaddingBottom}__requestItemByIndex(e,t){return e instanceof Ue&&void 0!==t&&this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:t,currentScrollerPos:this._oldScrollerPosition}})),t}_visibleItemsCount(){this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex);return this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}}customElements.define(Ge.is,Ge);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class We extends Ge{static get is(){return"vaadin-time-picker-scroller"}}customElements.define(We.is,We);
/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class He extends I{static get is(){return"vaadin-combo-box-dropdown"}static get template(){return C`
      <vaadin-combo-box-overlay
        id="overlay"
        hidden$="[[_isOverlayHidden(_items.*, loading)]]"
        loading$="[[loading]]"
        opened="{{_overlayOpened}}"
        theme$="[[theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
        restore-focus-on-close="[[restoreFocusOnClose]]"
        restore-focus-node="[[restoreFocusNode]]"
      ></vaadin-combo-box-overlay>
    `}static get properties(){return{opened:Boolean,positionTarget:{type:Object,observer:"_positionTargetChanged"},renderer:Function,loading:{type:Boolean,value:!1,reflectToAttribute:!0},theme:String,_selectedItem:{type:Object},_items:{type:Array},_focusedIndex:{type:Number,value:-1},focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_scroller:Object,_itemIdPath:String,_overlayOpened:{type:Boolean,observer:"_openedChanged"}}}static get observers(){return["_openedOrItemsChanged(opened, _items, loading)","__updateScroller(_scroller, _items, opened, loading, _selectedItem, _itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super();const e=He._uniqueId=1+He._uniqueId||0;this.scrollerId=`${this.localName}-scroller-${e}`}ready(){super.ready(),this.__hostTagName=this.constructor.is.replace("-dropdown","");const e=this.$.overlay,t=`${this.__hostTagName}-scroller`;e.renderer=e=>{if(!e.firstChild){const i=document.createElement(t);e.appendChild(i)}},e.requestContentUpdate(),this._scroller=e.content.querySelector(t),this._scroller.id=this.scrollerId,this._scroller.getItemLabel=this.getItemLabel.bind(this),this._scroller.comboBox=this.getRootNode().host,this._scroller.addEventListener("selection-changed",(e=>this._forwardScrollerEvent(e))),this._scroller.addEventListener("index-requested",(e=>this._forwardScrollerEvent(e))),e.addEventListener("touchend",(e=>this._fireTouchAction(e))),e.addEventListener("touchmove",(e=>this._fireTouchAction(e))),e.addEventListener("mousedown",(e=>e.preventDefault())),e.addEventListener("vaadin-overlay-outside-click",(e=>{e.preventDefault()}))}disconnectedCallback(){super.disconnectedCallback(),this._overlayOpened=!1}_fireTouchAction(e){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:e}}))}_forwardScrollerEvent(e){this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}_openedChanged(e,t){e?(this._setOverlayWidth(),this._scroller.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this.__hostTagName}-overlay-max-height`)||"65vh",this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))):t&&!this.__emptyItems&&this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))}_openedOrItemsChanged(e,t,i){const s=t&&t.length;s||(this.__emptyItems=!0),this._overlayOpened=!(!e||!i&&!s),this.__emptyItems=!1}_getFocusedItem(e){if(e>=0)return this._items[e]}indexOfLabel(e){if(this._items&&e)for(let t=0;t<this._items.length;t++)if(this.getItemLabel(this._items[t]).toString().toLowerCase()===e.toString().toLowerCase())return t;return-1}getItemLabel(e,t){t=t||this._itemLabelPath;let i=e&&t?this.get(t,e):void 0;return null==i&&(i=e?e.toString():""),i}_scrollIntoView(e){this._scroller&&this._scroller.scrollIntoView(e)}adjustScrollPosition(){this.opened&&this._items&&this._scrollIntoView(this._focusedIndex)}__updateScroller(e,t,i,s,o,r,a,n,l){e&&e.setProperties({items:i?t:[],opened:i,loading:s,selectedItem:o,itemIdPath:r,focusedIndex:a,renderer:n,theme:l})}_isOverlayHidden(){return!(this.loading||this._items&&this._items.length)}_positionTargetChanged(e){e&&this._setOverlayWidth()}_setOverlayWidth(){if(!this.positionTarget)return;const e=this.positionTarget.clientWidth+"px",t=`${this.__hostTagName}-overlay`,i=getComputedStyle(this).getPropertyValue(`--${t}-width`);this.$.overlay.style.setProperty(`--_${t}-default-width`,e),""===i?this.$.overlay.style.removeProperty(`--${t}-width`):this.$.overlay.style.setProperty(`--${t}-width`,i),this.$.overlay._updatePosition()}}customElements.define(He.is,He);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class Ye extends He{static get is(){return"vaadin-time-picker-dropdown"}static get template(){return C`
      <vaadin-time-picker-overlay
        id="overlay"
        hidden$="[[_isOverlayHidden(_items.*, loading)]]"
        loading$="[[loading]]"
        opened="{{_overlayOpened}}"
        theme$="[[theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
      ></vaadin-time-picker-overlay>
    `}}customElements.define(Ye.is,Ye);
/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Ke=e=>class extends(P(L(V(G(e))))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_loadingChanged"},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_closeOnBlurIsPrevented:Boolean,__restoreFocusOnClose:Boolean}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)","_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundClose=this.close.bind(this),this._boundOnOpened=this._onOpened.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _inputElementValue(){return this.inputElement?this.inputElement[this._propertyForValue]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._propertyForValue]=e)}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.autocapitalize="off",e.setAttribute("role","combobox"),e.setAttribute("aria-autocomplete","list"),e.setAttribute("aria-expanded",!!this.opened),e.setAttribute("spellcheck","false"),e.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,this.$.dropdown.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this.addEventListener("vaadin-combo-box-dropdown-closed",this._boundClose),this.addEventListener("vaadin-combo-box-dropdown-opened",this._boundOnOpened),this.addEventListener("click",this._boundOnClick),this.$.dropdown.addEventListener("vaadin-overlay-touch-action",this._boundOnOverlayTouchAction),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{requestAnimationFrame((()=>{this.$.dropdown.$.overlay.bringToFront()}))};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),W(this),this.addController(new qe(this))}requestContentUpdate(){this.$.dropdown._scroller&&(this.$.dropdown._scroller.requestContentUpdate(),this._getItemElements().forEach((e=>{e.requestContentUpdate()})))}open(){this.disabled||this.readonly||(this.opened=!0)}close(){this.opened=!1}_focusedIndexChanged(e,t){void 0!==t&&this._updateActiveDescendant(e)}_updateActiveDescendant(e){const t=this.inputElement;if(!t)return;const i=this._getItemElements().find((t=>t.index===e));i?t.setAttribute("aria-activedescendant",i.id):t.removeAttribute("aria-activedescendant")}_openedChanged(e,t){if(void 0===t)return;e?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),this.hasAttribute("focused")||H||this.focus(),this.__restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this.hasAttribute("focused")&&this.setAttribute("focus-ring",""));const i=this.inputElement;i&&(i.setAttribute("aria-expanded",!!e),e?i.setAttribute("aria-controls",this.$.dropdown.scrollerId):i.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_handleClearButtonClick(e){e.preventDefault(),this._clear(),this.opened&&this.requestContentUpdate()}_onHostClick(e){this.autoOpenDisabled||this.open()}_onClick(e){this._closeOnBlurIsPrevented=!0;const t=e.composedPath();this._isClearButton(e)?this._handleClearButtonClick(e):t.indexOf(this._toggleElement)>-1?this.opened?this.close():this.open():this._onHostClick(e),this._closeOnBlurIsPrevented=!1}_onKeyDown(e){"Tab"===e.key?this.__restoreFocusOnClose=!1:"ArrowDown"===e.key?(this._closeOnBlurIsPrevented=!0,this._onArrowDown(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):"ArrowUp"===e.key?(this._closeOnBlurIsPrevented=!0,this._onArrowUp(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):"Enter"===e.key?this._onEnter(e):"Escape"===e.key&&this._onEscape(e)}_getItemLabel(e){return this.$.dropdown.getItemLabel(e)}_getItemValue(e){let t=e&&this.itemValuePath?this.get(this.itemValuePath,e):void 0;return void 0===t&&(t=e?e.toString():""),t}_onArrowDown(){if(this.opened){const e=this._getOverlayItems();e&&(this._focusedIndex=Math.min(e.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const e=this._getOverlayItems();e&&(this._focusedIndex=e.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){this._focusedIndex>-1&&(this._inputElementValue=this._getItemLabel(this.$.dropdown.focusedItem),this._markAllSelectionRange())}_setSelectionRange(e,t){this.hasAttribute("focused")&&this.inputElement.setSelectionRange(e,t)}_markAllSelectionRange(){void 0!==this._inputElementValue&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(void 0!==this._inputElementValue){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){this.opened||this.loading?this.close():this._commitValue()}_onEnter(e){if(!this.allowCustomValue&&""!==this._inputElementValue&&this._focusedIndex<0)return e.preventDefault(),void e.stopPropagation();this.opened&&(e.preventDefault(),e.stopPropagation()),this._closeOrCommit()}_onEscape(e){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(e.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&this.value&&(e.stopPropagation(),this._clear()):this.opened?(e.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._clear())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",(e=>e.preventDefault())),e.addEventListener("click",(()=>{H&&!this.hasAttribute("focused")&&document.activeElement.blur()})))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){requestAnimationFrame((()=>{this.$.dropdown.adjustScrollPosition(),this._updateActiveDescendant(this._focusedIndex)})),this._lastCommittedValue=this.value}_onClosed(){this.opened&&this.close(),this.loading&&!this.allowCustomValue||this._commitValue()}_commitValue(){const e=this._getOverlayItems();if(e&&this._focusedIndex>-1){const t=e[this._focusedIndex];this.selectedItem!==t&&(this.selectedItem=t),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(""===this._inputElementValue||void 0===this._inputElementValue)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const e=e=>e&&e.toLowerCase&&e.toLowerCase(),t=[...this.filteredItems||[],this.selectedItem].find((t=>e(this._getItemLabel(t))===e(this._inputElementValue)));if(this.allowCustomValue&&!t){const e=this._inputElementValue;this._lastCustomValue=e;const t=new CustomEvent("custom-value-set",{detail:e,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(t),t.defaultPrevented||(this._selectItemForValue(e),this.value=e)}else this.allowCustomValue||this.opened||!t?this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||"":this.value=this._getItemValue(t)}this._detectAndDispatchChange(),this._clearSelectionRange(),this.dataProvider||(this.filter="")}get _propertyForValue(){return"value"}_onInput(e){this.opened||this._isClearButton(e)||this.autoOpenDisabled||this.open();const t=this._inputElementValue;this.filter===t?this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath):this.filter=t}_onChange(e){e.stopPropagation()}_itemLabelPathChanged(e){"string"!=typeof e&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e,t,i){void 0!==e&&(this.$.dropdown._scrollIntoView(0),this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged({path:"filteredItems",value:this.filteredItems},t,i))}_loadingChanged(e){e&&(this._focusedIndex=-1)}_revertInputValue(){""!==this.filter?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(e){if(null==e)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(""!==this.value),this._inputElementValue=this.value);else{const t=this._getItemValue(e);if(this.value!==t&&(this.value=t,this.value!==t))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(e)}this.$.dropdown._selectedItem=e;const t=this._getOverlayItems();this.filteredItems&&t&&(this._focusedIndex=this.filteredItems.indexOf(e))}_valueChanged(e,t){if(""!==e||void 0!==t){if(this._isValidValue(e)){let t;this._getItemValue(this.selectedItem)!==e?this._selectItemForValue(e):t=this.selectedItem,!t&&this.allowCustomValue&&(this._inputElementValue=e),this._toggleHasValue(""!==this.value)}else this.selectedItem=null;this._lastCommittedValue=void 0}}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider((()=>{this.items=t}))}_itemsOrPathsChanged(e){if("items"===e.path||"items.splices"===e.path){this.items?this.filteredItems=this.items.slice(0):this.__previousItems&&(this.filteredItems=null);const e=this._indexOfValue(this.value,this.items);this._focusedIndex=e;const t=e>-1&&this.items[e];t&&(this.selectedItem=t)}this.__previousItems=e.value}_filteredItemsChanged(e){if("filteredItems"===e.path||"filteredItems.splices"===e.path){this._setOverlayItems(this.filteredItems);const e=this._indexOfValue(this.value,this.filteredItems);null===this.selectedItem&&e>=0&&this._selectItemForValue(this.value),void 0===this._inputElementValue||this._inputElementValue===this.value?this._focusedIndex=this._indexOfValue(this.value,this.filteredItems):this._focusedIndex=this.$.dropdown.indexOfLabel(this.filter)}}_filterItems(e,t){if(!e)return e;return e.filter((e=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(e).toString().toLowerCase().indexOf(t)>-1)))}_selectItemForValue(e){const t=this._indexOfValue(e,this.filteredItems),i=this.selectedItem;t>=0?this.selectedItem=this.filteredItems[t]:this.dataProvider&&void 0===this.selectedItem?this.selectedItem=void 0:this.selectedItem=null,null===this.selectedItem&&null===i&&this._selectedItemChanged(this.selectedItem)}_getItemElements(){return Array.from(this.$.dropdown._scroller.querySelectorAll("vaadin-combo-box-item"))}_getOverlayItems(){return this.$.dropdown._items}_setOverlayItems(e){this.$.dropdown.set("_items",e)}_indexOfValue(e,t){return t&&this._isValidValue(e)?t.findIndex((t=>!(t instanceof Ue)&&this._getItemValue(t)===e)):-1}_isValidValue(e){return null!=e}_overlaySelectedItemChanged(e){e.stopPropagation(),e.detail.item instanceof Ue||(this.opened?(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close()):this.selectedItem!==e.detail.item&&(this.selectedItem=e.detail.item,this._detectAndDispatchChange()))}__onClearButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_onFocusout(e){if(e.relatedTarget!==this.$.dropdown.$.overlay){if(!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue)return void delete this._lastCustomValue;this._closeOrCommit()}}else e.composedPath()[0].focus()}_onTouchend(e){this.clearElement&&e.composedPath()[0]===this.clearElement&&(e.preventDefault(),this._clear())}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return super.checkValidity?super.checkValidity():!this.required||!!this.value}}
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class Xe extends(Ke($(I))){static get is(){return"vaadin-time-picker-combo-box"}static get template(){return C`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-time-picker-dropdown
        id="dropdown"
        opened="[[opened]]"
        position-target="[[positionTarget]]"
        renderer="[[renderer]]"
        _focused-index="[[_focusedIndex]]"
        _item-id-path="[[itemIdPath]]"
        _item-label-path="[[itemLabelPath]]"
        loading="[[loading]]"
        theme="[[theme]]"
      ></vaadin-time-picker-dropdown>
    `}static get properties(){return{positionTarget:{type:Object}}}get clearElement(){return this.querySelector('[part="clear-button"]')}_getItemElements(){return Array.from(this.$.dropdown._scroller.querySelectorAll("vaadin-time-picker-item"))}ready(){super.ready(),this.allowCustomValue=!0,this._toggleElement=this.querySelector(".toggle-button"),this.setAttribute("dir","ltr")}}customElements.define(Xe.is,Xe),
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
w("vaadin-time-picker",Q,{moduleId:"vaadin-time-picker-styles"});class Qe extends(J(X($(D(I))))){static get is(){return"vaadin-time-picker"}static get template(){return C`
      <style>
        /* See https://github.com/vaadin/vaadin-time-picker/issues/145 */
        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }

        [part~='toggle-button'] {
          cursor: pointer;
        }
      </style>

      <div class="vaadin-time-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-time-picker-combo-box
          id="comboBox"
          filtered-items="[[__dropdownItems]]"
          value="{{_comboBoxValue}}"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          position-target="[[_inputContainer]]"
          theme$="[[theme]]"
          on-change="__onChange"
        >
          <vaadin-input-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[theme]]"
          >
            <slot name="prefix" slot="prefix"></slot>
            <slot name="input"></slot>
            <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-input-container>
        </vaadin-time-picker-combo-box>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{value:{type:String,notify:!0,value:""},min:{type:String,value:"00:00:00.000"},max:{type:String,value:"23:59:59.999"},step:{type:Number},autoOpenDisabled:Boolean,__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:e=>{if(!e)return;const t=(e=0,t="00")=>(t+e).substr((t+e).length-t.length);let i=`${t(e.hours)}:${t(e.minutes)}`;return void 0!==e.seconds&&(i+=`:${t(e.seconds)}`),void 0!==e.milliseconds&&(i+=`.${t(e.milliseconds,"000")}`),i},parseTime:e=>{const t=new RegExp("^(\\d|[0-1]\\d|2[0-3])(?::(\\d|[0-5]\\d)(?::(\\d|[0-5]\\d)(?:\\.(\\d{1,3}))?)?)?$").exec(e);if(t){if(t[4])for(;t[4].length<3;)t[4]+="0";return{hours:t[1],minutes:t[2],seconds:t[3],milliseconds:t[4]}}}})},_comboBoxValue:{type:String,observer:"__comboBoxValueChanged"},_inputContainer:Object}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new F(this,(e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e}))),this.addController(new N(this.inputElement,this._labelController)),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]')}_inputElementChanged(e){super._inputElementChanged(e),e&&this.$.comboBox._setInputElement(e)}checkValidity(){return!(!this.inputElement.checkValidity()||this.value&&!this._timeAllowed(this.i18n.parseTime(this.value))||this._comboBoxValue&&!this.i18n.parseTime(this._comboBoxValue))}_setFocused(e){super._setFocused(e),e||this.validate()}__validDayDivisor(e){return!e||86400%e==0||e<1&&e%1*1e3%1==0}_onKeyDown(e){if(this.readonly||this.disabled||this.__dropdownItems.length)return;const t=this.__validDayDivisor(this.step)&&this.step||60;40===e.keyCode?this.__onArrowPressWithStep(-t):38===e.keyCode&&this.__onArrowPressWithStep(t)}__onArrowPressWithStep(e){const t=this.__addStep(this.__getMsec(this.__memoValue),e,!0);this.__memoValue=t,this.inputElement.value=this.i18n.formatTime(this.__validateTime(t)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(e){let t=60*(e&&e.hours||0)*60*1e3;return t+=60*(e&&e.minutes||0)*1e3,t+=1e3*(e&&e.seconds||0),t+=e&&parseInt(e.milliseconds)||0,t}__getSec(e){let t=60*(e&&e.hours||0)*60;return t+=60*(e&&e.minutes||0),t+=e&&e.seconds||0,t+=e&&e.milliseconds/1e3||0,t}__addStep(e,t,i){0===e&&t<0&&(e=864e5);const s=1e3*t,o=e%s;s<0&&o&&i?e-=o:s>0&&o&&i?e-=o-s:e+=s;var r=Math.floor(e/1e3/60/60);e-=1e3*r*60*60;var a=Math.floor(e/1e3/60);e-=1e3*a*60;var n=Math.floor(e/1e3);return{hours:r<24?r:0,minutes:a,seconds:n,milliseconds:e-=1e3*n}}__updateDropdownItems(e,t,i,s){const o=this.__validateTime(this.__parseISO(t)),r=this.__getSec(o),a=this.__validateTime(this.__parseISO(i)),n=this.__getSec(a);if(this.__adjustValue(r,n,o,a),this.__dropdownItems=this.__generateDropdownList(r,n,s),s!==this.__oldStep){this.__oldStep=s;const e=this.__validateTime(this.__parseISO(this.value));this.__updateValue(e)}this.value&&(this._comboBoxValue=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(e,t,i){if(i<900||!this.__validDayDivisor(i))return[];const s=[];let o=-(i=i||3600)+e;for(;o+i>=e&&o+i<=t;){const e=this.__validateTime(this.__addStep(1e3*o,i));o+=i;const t=this.i18n.formatTime(e);s.push({label:t,value:t})}return s}__adjustValue(e,t,i,s){if(!this.__memoValue)return;const o=this.__getSec(this.__memoValue);o<e?this.__updateValue(i):o>t&&this.__updateValue(s)}_valueChanged(e,t){const i=this.__memoValue=this.__parseISO(e),s=this.__formatISO(i)||"";""===this.value||null===this.value||i?this.value!==s?this.value=s:this.__updateInputValue(i):this.value=t,this._toggleHasValue(!!this.value)}__comboBoxValueChanged(e,t){if(""===e&&void 0===t)return;const i=this.i18n.parseTime(e),s=this.i18n.formatTime(i)||"";i?e!==s?this._comboBoxValue=s:this.__updateValue(i):this.value=""}__onChange(e){e.stopPropagation(),this.validate(),this.__dispatchChange()}__updateValue(e){const t=this.__formatISO(this.__validateTime(e))||"";this.value=t}__updateInputValue(e){const t=this.i18n.formatTime(this.__validateTime(e))||"";this._comboBoxValue=t}__validateTime(e){return e&&(e.hours=parseInt(e.hours),e.minutes=parseInt(e.minutes||0),e.seconds=this.__stepSegment<3?void 0:parseInt(e.seconds||0),e.milliseconds=this.__stepSegment<4?void 0:parseInt(e.milliseconds||0)),e}get __stepSegment(){return this.step%3600==0?1:this.step%60!=0&&this.step?this.step%1==0?3:this.step<1?4:void 0:2}__formatISO(e){return Qe.properties.i18n.value().formatTime(e)}__parseISO(e){return Qe.properties.i18n.value().parseTime(e)}_timeAllowed(e){const t=this.i18n.parseTime(this.min),i=this.i18n.parseTime(this.max);return(!this.__getMsec(t)||this.__getMsec(e)>=this.__getMsec(t))&&(!this.__getMsec(i)||this.__getMsec(e)<=this.__getMsec(i))}_onClearButtonClick(){}_onChange(){}_onInput(){this._checkInputValue()}}customElements.define(Qe.is,Qe);
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Je=d`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    /* align with text-field height + vertical paddings */
    line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }

  :host::before {
    margin-top: var(--lumo-space-xs);
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  /* align with text-field label */
  :host([has-label]) [part='label'] {
    padding-bottom: calc(0.5em - var(--lumo-space-xs));
  }

  :host(:not([has-label])) [part='label'],
  :host(:not([has-label]))::before {
    display: none;
  }

  /* align with text-field error message */
  :host([has-error-message]) [part='error-message']::before {
    height: calc(0.4em - var(--lumo-space-xs));
  }

  :host([focused]:not([readonly]):not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }

  /* Disabled */
  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small'][has-label]) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small'][has-label]) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* When custom-field is used with components without outer margin */
  :host([theme~='whitespace'][has-label]) [part='label'] {
    padding-bottom: 0.5em;
  }
`;w("vaadin-custom-field",[Z,ee,Je],{moduleId:"lumo-custom-field"}),w("vaadin-date-time-picker",[Z,ee,Je],{moduleId:"lumo-date-time-picker"}),w("vaadin-date-time-picker-date-picker",d`
    :host {
      margin-right: 2px;
    }

    /* RTL specific styles */
    :host([dir='rtl']) {
      margin-right: auto;
      margin-left: 2px;
    }

    [part~='input-field'] {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-date-picker"}),w("vaadin-date-time-picker-time-picker",d`
    [part~='input-field'] {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-time-picker"});
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class Ze extends je{static get is(){return"vaadin-date-time-picker-date-picker"}}customElements.define(Ze.is,Ze);
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class et extends Qe{static get is(){return"vaadin-date-time-picker-time-picker"}}customElements.define(et.is,et);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const tt=Y((e=>class extends e{get slots(){return{}}ready(){super.ready(),this._connectSlotMixin()}_connectSlotMixin(){Object.keys(this.slots).forEach((e=>{if(!(void 0!==this._getDirectSlotChild(e))){const t=(0,this.slots[e])();t instanceof Element&&(""!==e&&t.setAttribute("slot",e),this.appendChild(t))}}))}_getDirectSlotChild(e){return Array.from(this.childNodes).find((t=>t.nodeType===Node.ELEMENT_NODE&&t.slot===e||t.nodeType===Node.TEXT_NODE&&t.textContent.trim()&&""===e))}}));
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function it(e,t){for(;e;){if(e.properties&&e.properties[t])return e.properties[t];e=Object.getPrototypeOf(e)}}w("vaadin-date-time-picker",Q,{moduleId:"vaadin-date-time-picker"});const st=customElements.get("vaadin-date-time-picker-date-picker"),ot=customElements.get("vaadin-date-time-picker-time-picker"),rt=it(st,"i18n").value(),at=it(ot,"i18n").value(),nt=Object.keys(rt),lt=Object.keys(at);class ct extends(te(tt(G(S($(D(I))))))){static get template(){return C`
      <style>
        .vaadin-date-time-picker-container {
          --vaadin-field-default-width: auto;
        }

        .slots {
          display: flex;
          --vaadin-field-default-width: 12em;
        }

        [part='date'],
        .slots ::slotted([slot='date-picker']) {
          pointer-events: all;
          min-width: 0;
          flex: 1 1 auto;
        }

        [part='time'],
        .slots ::slotted([slot='time-picker']) {
          pointer-events: all;
          min-width: 0;
          flex: 1 1.65 auto;
        }
      </style>

      <div class="vaadin-date-time-picker-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="slots">
          <slot name="date-picker" id="dateSlot"></slot>
          <slot name="time-picker" id="timeSlot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-date-time-picker"}static get properties(){return{name:{type:String},value:{type:String,notify:!0,value:"",observer:"__valueChanged"},min:{type:String,observer:"__minChanged"},max:{type:String,observer:"__maxChanged"},__minDateTime:{type:Date,value:""},__maxDateTime:{type:Date,value:""},datePlaceholder:{type:String},timePlaceholder:{type:String},step:{type:Number},initialPosition:String,showWeekNumbers:{type:Boolean},autoOpenDisabled:Boolean,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},autofocus:{type:Boolean},__selectedDateTime:{type:Date},i18n:{type:Object,value:()=>({...rt,...at})},__datePicker:{type:HTMLElement,observer:"__datePickerChanged"},__timePicker:{type:HTMLElement,observer:"__timePickerChanged"}}}static get observers(){return["__selectedDateTimeChanged(__selectedDateTime)","__datePlaceholderChanged(datePlaceholder)","__timePlaceholderChanged(timePlaceholder)","__stepChanged(step)","__initialPositionChanged(initialPosition)","__showWeekNumbersChanged(showWeekNumbers)","__requiredChanged(required)","__invalidChanged(invalid)","__disabledChanged(disabled)","__readonlyChanged(readonly)","__i18nChanged(i18n.*)","__autoOpenDisabledChanged(autoOpenDisabled)","__themeChanged(theme, __datePicker, __timePicker)","__pickersChanged(__datePicker, __timePicker)"]}get slots(){return{...super.slots,"date-picker":()=>{const e=document.createElement("vaadin-date-time-picker-date-picker");return e.__defaultPicker=!0,e},"time-picker":()=>{const e=document.createElement("vaadin-date-time-picker-time-picker");return e.__defaultPicker=!0,e}}}constructor(){super(),this.__defaultDateMinMaxValue=void 0,this.__defaultTimeMinValue="00:00:00.000",this.__defaultTimeMaxValue="23:59:59.999",this.__changeEventHandler=this.__changeEventHandler.bind(this),this.__valueChangedEventHandler=this.__valueChangedEventHandler.bind(this),this._observer=new E(this,(e=>{this.__onDomChange(e.addedNodes)}))}ready(){super.ready(),this.addEventListener("focusout",(e=>{e.relatedTarget!==this.__datePicker.$.overlay&&this.validate()})),this.__datePicker=this._getDirectSlotChild("date-picker"),this.__timePicker=this._getDirectSlotChild("time-picker"),this.autofocus&&!this.disabled&&window.requestAnimationFrame((()=>this.focus())),this.setAttribute("role","group"),this.ariaTarget=this}__filterElements(e){return e.nodeType===Node.ELEMENT_NODE}focus(){this.__datePicker.focus()}_shouldRemoveFocus(e){const t=e.relatedTarget;return!this.__datePicker.contains(t)&&!this.__timePicker.contains(t)&&t!==this.__datePicker.$.overlay}__syncI18n(e,t,i){(i=i||Object.keys(t.i18n)).forEach((i=>{t.i18n&&t.i18n.hasOwnProperty(i)&&e.set(`i18n.${i}`,t.i18n[i])}))}__changeEventHandler(e){e.stopPropagation(),this.__dispatchChangeForValue===this.value&&(this.__dispatchChange(),this.validate()),this.__dispatchChangeForValue=void 0}__addInputListeners(e){e.addEventListener("change",this.__changeEventHandler),e.addEventListener("value-changed",this.__valueChangedEventHandler)}__removeInputListeners(e){e.removeEventListener("change",this.__changeEventHandler),e.removeEventListener("value-changed",this.__valueChangedEventHandler)}__onDomChange(e){e.filter((e=>e.nodeType===Node.ELEMENT_NODE)).forEach((e=>{const t=e.getAttribute("slot");"date-picker"===t?this.__datePicker=e:"time-picker"===t&&(this.__timePicker=e)}))}__datePickerChanged(e,t){e&&(t&&(this.__removeInputListeners(t),t.remove()),this.__addInputListeners(e),e.__defaultPicker?(e.placeholder=this.datePlaceholder,e.invalid=this.invalid,e.initialPosition=this.initialPosition,e.showWeekNumbers=this.showWeekNumbers,this.__syncI18n(e,this,nt)):(this.datePlaceholder=e.placeholder,this.initialPosition=e.initialPosition,this.showWeekNumbers=e.showWeekNumbers,this.__syncI18n(this,e,nt)),e.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue),e.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue),e.required=this.required,e.disabled=this.disabled,e.readonly=this.readonly,e.autoOpenDisabled=this.autoOpenDisabled,e.validate=()=>{},e._validateInput=()=>{})}__timePickerChanged(e,t){e&&(t&&(this.__removeInputListeners(t),t.remove()),this.__addInputListeners(e),e.__defaultPicker?(e.placeholder=this.timePlaceholder,e.step=this.step,e.invalid=this.invalid,this.__syncI18n(e,this,lt)):(this.timePlaceholder=e.placeholder,this.step=e.step,this.__syncI18n(this,e,lt)),this.__updateTimePickerMinMax(),e.required=this.required,e.disabled=this.disabled,e.readonly=this.readonly,e.autoOpenDisabled=this.autoOpenDisabled,e.validate=()=>{})}__updateTimePickerMinMax(){if(this.__timePicker&&this.__datePicker){const e=this.__parseDate(this.__datePicker.value),t=Ie(this.__minDateTime,this.__maxDateTime),i=this.__timePicker.value;this.__minDateTime&&Ie(e,this.__minDateTime)||t?this.__timePicker.min=this.__dateToIsoTimeString(this.__minDateTime):this.__timePicker.min=this.__defaultTimeMinValue,this.__maxDateTime&&Ie(e,this.__maxDateTime)||t?this.__timePicker.max=this.__dateToIsoTimeString(this.__maxDateTime):this.__timePicker.max=this.__defaultTimeMaxValue,this.__timePicker.value!==i&&(this.__timePicker.value=i)}}__i18nChanged(e){this.__datePicker&&this.__datePicker.set(e.path,e.value),this.__timePicker&&this.__timePicker.set(e.path,e.value)}__datePlaceholderChanged(e){this.__datePicker&&(this.__datePicker.placeholder=e)}__timePlaceholderChanged(e){this.__timePicker&&(this.__timePicker.placeholder=e)}__stepChanged(e){this.__timePicker&&this.__timePicker.step!==e&&(this.__timePicker.step=e)}__initialPositionChanged(e){this.__datePicker&&(this.__datePicker.initialPosition=e)}__showWeekNumbersChanged(e){this.__datePicker&&(this.__datePicker.showWeekNumbers=e)}__invalidChanged(e){this.__datePicker&&(this.__datePicker.invalid=e),this.__timePicker&&(this.__timePicker.invalid=e)}__requiredChanged(e){this.__datePicker&&(this.__datePicker.required=e),this.__timePicker&&(this.__timePicker.required=e)}__disabledChanged(e){this.__datePicker&&(this.__datePicker.disabled=e),this.__timePicker&&(this.__timePicker.disabled=e)}__readonlyChanged(e){this.__datePicker&&(this.__datePicker.readonly=e),this.__timePicker&&(this.__timePicker.readonly=e)}__parseDate(e){return st.prototype._parseDate(e)}__formatDateISO(e,t){return e?st.prototype._formatISO(e):t}__formatTimeISO(e){return at.formatTime(e)}__parseTimeISO(e){return at.parseTime(e)}__parseDateTime(e){const[t,i]=e.split("T");if(!t||!i)return;const s=this.__parseDate(t);if(!s)return;const o=this.__parseTimeISO(i);return o?(s.setHours(parseInt(o.hours)),s.setMinutes(parseInt(o.minutes||0)),s.setSeconds(parseInt(o.seconds||0)),s.setMilliseconds(parseInt(o.milliseconds||0)),s):void 0}__formatDateTime(e){if(!e)return"";return`${this.__formatDateISO(e,"")}T${this.__dateToIsoTimeString(e)}`}__dateToIsoTimeString(e){return this.__formatTimeISO(this.__validateTime({hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds()}))}__validateTime(e){return e&&(e.seconds=this.__stepSegment<3?void 0:e.seconds,e.milliseconds=this.__stepSegment<4?void 0:e.milliseconds),e}get __inputs(){return[this.__datePicker,this.__timePicker]}checkValidity(){const e=this.__inputs.some((e=>!e.checkValidity())),t=this.required&&this.__inputs.some((e=>!e.value));return!e&&!t}get __stepSegment(){const e=null==this.step?60:parseFloat(this.step);return e%3600==0?1:e%60!=0&&e?e%1==0?3:e<1?4:void 0:2}__dateTimeEquals(e,t){return!!Ie(e,t)&&(e.getHours()===t.getHours()&&e.getMinutes()===t.getMinutes()&&e.getSeconds()===t.getSeconds()&&e.getMilliseconds()===t.getMilliseconds())}__handleDateTimeChange(e,t,i,s){if(!i)return this[e]="",void(this[t]="");const o=this.__parseDateTime(i);o?this.__dateTimeEquals(this[t],o)||(this[t]=o):this[e]=s}__valueChanged(e,t){this.__handleDateTimeChange("value","__selectedDateTime",e,t),void 0!==t&&(this.__dispatchChangeForValue=e),this.toggleAttribute("has-value",!!e),this.__updateTimePickerMinMax()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__minChanged(e,t){this.__handleDateTimeChange("min","__minDateTime",e,t),this.__datePicker&&(this.__datePicker.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax()}__maxChanged(e,t){this.__handleDateTimeChange("max","__maxDateTime",e,t),this.__datePicker&&(this.__datePicker.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax()}__selectedDateTimeChanged(e){const t=this.__formatDateTime(e);this.value!==t&&(this.value=t);if(Boolean(this.__datePicker&&this.__datePicker.$)&&!this.__ignoreInputValueChange){this.__ignoreInputValueChange=!0;const[e,t]=this.value.split("T");this.__datePicker.value=e||"",this.__timePicker.value=t||"",this.__ignoreInputValueChange=!1}}get __formattedValue(){const e=this.__datePicker.value,t=this.__timePicker.value;return e&&t?[e,t].join("T"):""}__valueChangedEventHandler(){if(this.__ignoreInputValueChange)return;const e=this.__formattedValue,[t,i]=e.split("T");this.__ignoreInputValueChange=!0,this.__updateTimePickerMinMax(),t&&i?e!==this.value&&(this.value=e):this.value="",this.__ignoreInputValueChange=!1}__autoOpenDisabledChanged(e){this.__datePicker&&(this.__datePicker.autoOpenDisabled=e),this.__timePicker&&(this.__timePicker.autoOpenDisabled=e)}__themeChanged(e,t,i){t&&i&&[t,i].forEach((t=>{e?t.setAttribute("theme",e):t.removeAttribute("theme")}))}__pickersChanged(e,t){e&&t&&e.__defaultPicker===t.__defaultPicker&&(e.value?this.__valueChangedEventHandler():this.value&&this.__selectedDateTimeChanged(this.__selectedDateTime))}}customElements.define(ct.is,ct);let dt=class extends u{constructor(){super(),this.is_connected=!1,this.enableLaunchButton=!1,this.hideLaunchButton=!1,this.location="",this.mode="normal",this.newSessionDialogTitle="",this.importScript="",this.importFilename="",this.imageRequirements=Object(),this.resourceLimits=Object(),this.userResourceLimit=Object(),this.aliases=Object(),this.tags=Object(),this.icons=Object(),this.imageInfo=Object(),this.kernel="",this.marker_limit=25,this.gpu_modes=[],this.gpu_step=.1,this.cpu_metric={min:"1",max:"1"},this.mem_metric={min:"1",max:"1"},this.shmem_metric={min:.0625,max:1,preferred:.0625},this.cuda_device_metric={min:0,max:0},this.rocm_device_metric={min:"0",max:"0"},this.tpu_device_metric={min:"1",max:"1"},this.cluster_metric={min:1,max:1},this.cluster_mode_list=["single-node","multi-node"],this.cluster_support=!1,this.folderMapping=Object(),this.aggregate_updating=!1,this.resourceGauge=Object(),this.sessionType="interactive",this.ownerFeatureInitialized=!1,this.ownerDomain="",this.project_resource_monitor=!1,this.version_selector=Object(),this._default_language_updated=!1,this._default_version_updated=!1,this._helpDescription="",this._helpDescriptionTitle="",this._helpDescriptionIcon="",this.max_cpu_core_per_session=128,this.max_mem_per_container=1536,this.max_cuda_device_per_container=16,this.max_cuda_shares_per_container=16,this.max_shm_per_container=8,this.allow_manual_image_name_for_session=!1,this.cluster_size=1,this.deleteEnvInfo=Object(),this.deleteEnvRow=Object(),this.environ_values=Object(),this.vfolder_select_expansion=Object(),this.currentIndex=1,this._grid=Object(),this._debug=!1,this._boundFolderToMountListRenderer=this.folderToMountListRenderer.bind(this),this._boundFolderMapRenderer=this.folderMapRenderer.bind(this),this._boundPathRenderer=this.infoHeaderRenderer.bind(this),this.useScheduledTime=!1,this.sessionInfoObj={environment:"",version:[""]},this.active=!1,this.ownerKeypairs=[],this.ownerGroups=[],this.ownerScalingGroups=[],this.resourceBroker=globalThis.resourceBroker,this.notification=globalThis.lablupNotification,this.environ=[],this.init_resource()}static get is(){return"backend-ai-session-launcher"}static get styles(){return[r,a,n,l,c,d`
        .slider-list-item {
          padding: 0;
        }

        lablup-slider {
          width: 350px !important;
          --textfield-min-width: 135px;
          --slider-width: 210px;
          --mdc-theme-primary: var(--paper-green-400);
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

        mwc-list-item.resource-type {
          color: #040716;
          font-size: 14px;
          font-weight: 500;
          height: 20px;
          padding: 5px;
        }

        mwc-slider {
          width: 200px;
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
          width: 45px;
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
          line-height: 1.2em;
        }

        .cluster-allocated > div.horizontal > p {
          font-size: 1rem;
          margin: 0px;
          line-height: 1.2em;
        }

        .cluster-allocated > p.small {
          font-size: 8px;
          margin: 0px;
          margin-top: 0.5em;
          text-align: center;
          line-height: 1.2em;
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

        wl-expansion.vfolder,
        wl-expansion.editor {
          --expansion-content-padding: 0;
          border-bottom: 1px;
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

        vaadin-date-time-picker {
          width: 370px;
          margin-bottom: 10px;
        }

        lablup-codemirror {
          width: 370px;
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
          /* Need to be set when fixedMenuPosition attribute is enabled */
          --mdc-menu-max-width: 400px;
          --mdc-menu-min-width: 400px;
        }

        mwc-select#owner-group,
        mwc-select#owner-scaling-group {
          margin-right: 0;
          padding-right: 0;
          width: 50%;
          --mdc-menu-max-width: 200px;
          --mdc-select-min-width: 190px;
          --mdc-menu-min-width: 200px;
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

        mwc-checkbox#hide-guide {
          margin-right: 10px;
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

        #vfolder-header-title {
          text-align: center;
          font-size: 16px;
          font-family: var(--general-font-family);
          font-weight: 500;
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
          padding: 15px 15px 0px;
          margin-top: 0;
          font-size: 12px;
          font-weight: 200;
          color: #404040;
        }

        #progress-04 p.title {
          font-weight: 400;
        }

        #batch-mode-config-section {
          width: 100%;
          border-bottom: solid 1px rgba(0, 0, 0, 0.42);
          margin-bottom: 15px;
        }

        .launcher-item-title {
          font-size: 14px;
          color: #404040;
          font-weight: 400;
          padding-left:16px;
          width: 100%;
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

        [name='resource-group'] mwc-list-item {
          --mdc-ripple-color: transparent;
        }

        @media screen and (max-width: 400px) {
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
      `]}init_resource(){this.versions=["Not Selected"],this.languages=[],this.gpu_mode="none",this.total_slot={},this.total_resource_group_slot={},this.total_project_slot={},this.used_slot={},this.used_resource_group_slot={},this.used_project_slot={},this.available_slot={},this.used_slot_percent={},this.used_resource_group_slot_percent={},this.used_project_slot_percent={},this.resource_templates=[],this.resource_templates_filtered=[],this.vfolders=[],this.selectedVfolders=[],this.nonAutoMountedVfolders=[],this.autoMountedVfolders=[],this.default_language="",this.concurrency_used=0,this.concurrency_max=0,this.concurrency_limit=2,this.max_containers_per_session=1,this._status="inactive",this.cpu_request=1,this.mem_request=1,this.shmem_request=.0625,this.gpu_request=0,this.gpu_request_type="cuda.device",this.session_request=1,this.scaling_groups=[{name:""}],this.scaling_group="",this.sessions_list=[],this.metric_updating=!1,this.metadata_updating=!1,this.cluster_size=1,this.cluster_mode="single-node",this.ownerFeatureInitialized=!1,this.ownerDomain="",this.ownerKeypairs=[],this.ownerGroups=[],this.ownerScalingGroups=[]}firstUpdated(){this.shadowRoot.querySelector("#environment").addEventListener("selected",this.updateLanguage.bind(this)),this.version_selector=this.shadowRoot.querySelector("#version"),this.version_selector.addEventListener("selected",(()=>{this.updateResourceAllocationPane()})),this.shadowRoot.querySelectorAll("wl-expansion").forEach((e=>{e.addEventListener("keydown",(e=>{e.stopPropagation()}),!0)})),this.resourceGauge=this.shadowRoot.querySelector("#resource-gauges"),document.addEventListener("backend-ai-group-changed",(e=>{this._updatePageVariables(!0)})),document.addEventListener("backend-ai-resource-broker-updated",(e=>{})),!0===this.hideLaunchButton&&(this.shadowRoot.querySelector("#launch-session").style.display="none"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.max_cpu_core_per_session=globalThis.backendaiclient._config.maxCPUCoresPerContainer||128,this.max_mem_per_container=globalThis.backendaiclient._config.maxMemoryPerContainer||1536,this.max_cuda_device_per_container=globalThis.backendaiclient._config.maxCUDADevicesPerContainer||16,this.max_cuda_shares_per_container=globalThis.backendaiclient._config.maxCUDASharesPerContainer||16,this.max_shm_per_container=globalThis.backendaiclient._config.maxShmPerContainer||8,void 0!==globalThis.backendaiclient._config.allow_manual_image_name_for_session&&"allow_manual_image_name_for_session"in globalThis.backendaiclient._config&&""!==globalThis.backendaiclient._config.allow_manual_image_name_for_session?this.allow_manual_image_name_for_session=globalThis.backendaiclient._config.allow_manual_image_name_for_session:this.allow_manual_image_name_for_session=!1,globalThis.backendaiclient.supports("multi-container")&&(this.cluster_support=!0),this.is_connected=!0,this._debug=globalThis.backendaiwebui.debug,this._enableLaunchButton()}),{once:!0}):(this.max_cpu_core_per_session=globalThis.backendaiclient._config.maxCPUCoresPerContainer||128,this.max_mem_per_container=globalThis.backendaiclient._config.maxMemoryPerContainer||1536,this.max_cuda_device_per_container=globalThis.backendaiclient._config.maxCUDADevicesPerContainer||16,this.max_cuda_shares_per_container=globalThis.backendaiclient._config.maxCUDASharesPerContainer||16,this.max_shm_per_container=globalThis.backendaiclient._config.maxShmPerContainer||8,void 0!==globalThis.backendaiclient._config.allow_manual_image_name_for_session&&"allow_manual_image_name_for_session"in globalThis.backendaiclient._config&&""!==globalThis.backendaiclient._config.allow_manual_image_name_for_session?this.allow_manual_image_name_for_session=globalThis.backendaiclient._config.allow_manual_image_name_for_session:this.allow_manual_image_name_for_session=!1,globalThis.backendaiclient.supports("multi-container")&&(this.cluster_support=!0),this.is_connected=!0,this._debug=globalThis.backendaiwebui.debug,this._enableLaunchButton());const e=this.shadowRoot.querySelector("#modify-env-dialog");e.addEventListener("dialog-closing-confirm",(t=>{const i={},s=this.shadowRoot.querySelector("#modify-env-container").querySelectorAll(".row:not(.header)");Array.prototype.filter.call(s,(e=>(e=>Array.prototype.filter.call(e.querySelectorAll("wl-textfield"),((e,t)=>""===e.value)).length<=1)(e))).map((e=>(e=>{const t=Array.prototype.map.call(e.querySelectorAll("wl-textfield"),(e=>e.value));return i[t[0]]=t[1],t})(e)));((e,t)=>{const i=Object.getOwnPropertyNames(e),s=Object.getOwnPropertyNames(t);if(i.length!=s.length)return!1;for(let s=0;s<i.length;s++){const o=i[s];if(e[o]!==t[o])return!1}return!0})(i,this.environ_values)?(e.closeWithConfirmation=!1,this.closeDialog("modify-env-dialog")):this.openDialog("env-config-confirmation")})),this.currentIndex=1,this.progressLength=this.shadowRoot.querySelectorAll(".progress").length,this._grid=this.shadowRoot.querySelector("#vfolder-grid"),globalThis.addEventListener("resize",(()=>{document.body.dispatchEvent(new Event("click"))}))}_enableLaunchButton(){this.resourceBroker.image_updating?(this.enableLaunchButton=!1,setTimeout((()=>{this._enableLaunchButton()}),1e3)):(this.languages=this.resourceBroker.languages,this.enableLaunchButton=!0)}_updateSelectedScalingGroup(){const e=this.shadowRoot.querySelector("#scaling-groups");this.scaling_groups=this.resourceBroker.scaling_groups;const t=e.items.find((e=>e.value===this.resourceBroker.scaling_group));if(""===this.resourceBroker.scaling_group||void 0===t)return void setTimeout((()=>{this._updateSelectedScalingGroup()}),500);const i=e.items.indexOf(t);e.select(-1),e.select(i),e.value=t.value,e.requestUpdate()}async updateScalingGroup(e=!1,t){this.active&&(await this.resourceBroker.updateScalingGroup(e,t.target.value),!0===e?await this._refreshResourcePolicy():this.updateResourceAllocationPane("session dialog"))}async _updateSelectedFolder(e=!1){if(this._grid&&this._grid.selectedItems){const t=this._grid.selectedItems;let i=[];t.length>0&&(i=t.map((e=>e.name)),e&&this._unselectAllSelectedFolder()),this.selectedVfolders=i;for(const e of this.selectedVfolders)if(e in this.folderMapping&&this.selectedVfolders.includes(this.folderMapping[e]))return delete this.folderMapping[e],this.shadowRoot.querySelector("#vfolder-alias-"+e).value="",await this.shadowRoot.querySelector("#vfolder-mount-preview").updateComplete.then((()=>this.requestUpdate())),Promise.resolve(!0)}return Promise.resolve(!0)}_unselectAllSelectedFolder(){this._grid&&this._grid.selectedItems&&(this._grid.selectedItems.forEach((e=>{e.selected=!1})),this._grid.selectedItems=[]),this.selectedVfolders=[]}_preProcessingSessionInfo(){var e;let t,i;if(null===(e=this.manualImageName)||void 0===e?void 0:e.value){const e=this.manualImageName.value.split(":");t=e[0],i=e.slice(-1)[0].split("-")}else{if(void 0===this.kernel||!1!==this.version_selector.disabled)return!1;t=this.kernel,i=this.version_selector.selectedText.split("/")}return this.sessionInfoObj.environment=t.split("/").pop(),this.sessionInfoObj.version=[i[0].toUpperCase()].concat(1!==i.length?i.slice(1).map((e=>e.toUpperCase())):[""]),!0}async _viewStateChanged(e){await this.updateComplete,this.active&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.project_resource_monitor=this.resourceBroker.allow_project_resource_monitor,this._updatePageVariables(!0),this._disableEnterKey()}),{once:!0}):(this.project_resource_monitor=this.resourceBroker.allow_project_resource_monitor,await this._updatePageVariables(!0),this._disableEnterKey()))}async _updatePageVariables(e){this.active&&!1===this.metadata_updating&&(this.metadata_updating=!0,await this.resourceBroker._updatePageVariables(e),this._updateSelectedScalingGroup(),this.sessions_list=this.resourceBroker.sessions_list,await this._refreshResourcePolicy(),this.aggregateResource("update-page-variable"),this.metadata_updating=!1)}async _refreshResourcePolicy(){return this.resourceBroker._refreshResourcePolicy().then((()=>{var e;this.concurrency_used=this.resourceBroker.concurrency_used,this.userResourceLimit=this.resourceBroker.userResourceLimit,this.concurrency_max=this.resourceBroker.concurrency_max,this.max_containers_per_session=null!==(e=this.resourceBroker.max_containers_per_session)&&void 0!==e?e:1,this.gpu_mode=this.resourceBroker.gpu_mode,this.gpu_step=this.resourceBroker.gpu_step,this.gpu_modes=this.resourceBroker.gpu_modes,this.updateResourceAllocationPane("refresh resource policy")})).catch((e=>{this.metadata_updating=!1,e&&e.message?(this.notification.text=m.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=m.relieve(e.title),this.notification.show(!0,e))}))}async _launchSessionDialog(){if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready||!0===this.resourceBroker.image_updating)setTimeout((()=>{this._launchSessionDialog()}),1e3);else{this.folderMapping=Object(),this._resetProgress(),await this.selectDefaultLanguage();const e=this.shadowRoot.querySelector('wl-expansion[name="ownership"]');globalThis.backendaiclient.is_admin?e.style.display="block":e.style.display="none",this._updateSelectedScalingGroup(),await this._refreshResourcePolicy(),this.requestUpdate(),this._toggleScheduleTime(!this.useScheduledTime),this.shadowRoot.querySelector("#new-session-dialog").show()}}_generateKernelIndex(e,t){return e+":"+t}_moveToLastProgress(){this.moveProgress(4)}_newSessionWithConfirmation(){var e,t;const i=null===(t=null===(e=this._grid)||void 0===e?void 0:e.selectedItems)||void 0===t?void 0:t.map((e=>e.name)).length;if(this.currentIndex==this.progressLength){if(void 0!==i&&i>0)return this._newSession();this.shadowRoot.querySelector("#launch-confirmation-dialog").show()}else this._moveToLastProgress()}_newSession(){let e,t,i;if(this.shadowRoot.querySelector("#launch-confirmation-dialog").hide(),this.manualImageName&&this.manualImageName.value){const i=this.manualImageName.value.split(":");t=i.splice(-1,1)[0],e=i.join(":")}else{e=this.shadowRoot.querySelector("#environment").selected.id,t=this.shadowRoot.querySelector("#version").selected.value,i=this.shadowRoot.querySelector("#version").selected.getAttribute("architecture")}this.sessionType=this.shadowRoot.querySelector("#session-type").value;let s=this.shadowRoot.querySelector("#session-name").value;const o=this.shadowRoot.querySelector("#session-name").checkValidity(),r=this.selectedVfolders;if(this.cpu_request=parseInt(this.shadowRoot.querySelector("#cpu-resource").value),this.mem_request=parseFloat(this.shadowRoot.querySelector("#mem-resource").value),this.shmem_request=parseFloat(this.shadowRoot.querySelector("#shmem-resource").value),this.gpu_request=parseFloat(this.shadowRoot.querySelector("#gpu-resource").value),this.session_request=parseInt(this.shadowRoot.querySelector("#session-resource").value),this.num_sessions=this.session_request,this.sessions_list.includes(s))return this.notification.text=p("session.launcher.DuplicatedSessionName"),void this.notification.show();if(!o)return this.notification.text=p("session.launcher.SessionNameAllowCondition"),void this.notification.show();if(""===e||""===t||"Not Selected"===t)return this.notification.text=p("session.launcher.MustSpecifyVersion"),void this.notification.show();this.scaling_group=this.shadowRoot.querySelector("#scaling-groups").value;const a={};a.group_name=globalThis.backendaiclient.current_group,a.domain=globalThis.backendaiclient._config.domainName,a.scaling_group=this.scaling_group,a.type=this.sessionType,globalThis.backendaiclient.supports("multi-container")&&(a.cluster_mode=this.cluster_mode,a.cluster_size=this.cluster_size),a.maxWaitSeconds=15;const n=this.shadowRoot.querySelector("#owner-enabled");if(n&&n.checked&&(a.group_name=this.shadowRoot.querySelector("#owner-group").value,a.domain=this.ownerDomain,a.scaling_group=this.shadowRoot.querySelector("#owner-scaling-group").value,a.owner_access_key=this.shadowRoot.querySelector("#owner-accesskey").value,!(a.group_name&&a.domain&&a.scaling_group&&a.owner_access_key)))return this.notification.text=p("session.launcher.NotEnoughOwnershipInfo"),void this.notification.show();switch(a.cpu=this.cpu_request,this.gpu_request_type){case"cuda.shares":a["cuda.shares"]=this.gpu_request;break;case"cuda.device":a["cuda.device"]=this.gpu_request;break;case"rocm.device":a["rocm.device"]=this.gpu_request;break;case"tpu.device":a["tpu.device"]=this.gpu_request;break;default:this.gpu_request>0&&this.gpu_mode&&(a[this.gpu_mode]=this.gpu_request)}if("Infinity"===String(this.shadowRoot.querySelector("#mem-resource").value)?a.mem=String(this.shadowRoot.querySelector("#mem-resource").value):a.mem=String(this.mem_request)+"g",this.shmem_request>this.mem_request&&(this.shmem_request=this.mem_request,this.notification.text=p("session.launcher.SharedMemorySettingIsReduced"),this.notification.show()),this.mem_request>4&&this.shmem_request<1&&(this.shmem_request=1),a.shmem=String(this.shmem_request)+"g",0==s.length&&(s=this.generateSessionId()),0!==r.length&&(a.mounts=r,0!==Object.keys(this.folderMapping).length)){a.mount_map={};for(const e in this.folderMapping)({}).hasOwnProperty.call(this.folderMapping,e)&&(this.folderMapping[e].startsWith("/")?a.mount_map[e]=this.folderMapping[e]:a.mount_map[e]="/home/work/"+this.folderMapping[e])}if("import"===this.mode&&""!==this.importScript&&(a.bootstrap_script=this.importScript),"batch"===this.sessionType){const e=this.shadowRoot.querySelector("lablup-codemirror#command-editor");a.startupCommand=e.getValue();const t=this.shadowRoot.querySelector("vaadin-date-time-picker").value,i=this.shadowRoot.querySelector("#use-scheduled-time").selected;if(t&&i){const e=()=>{let e=(new Date).getTimezoneOffset();const t=e<0?"+":"-";return e=Math.abs(e),t+(e/60|0).toString().padStart(2,"0")+":"+(e%60).toString().padStart(2,"0")};a.startsAt=t+e()}}if(this.environ_values!=={}&&(a.env=this.environ_values),!1===this.shadowRoot.querySelector("#OpenMPswitch").selected){const e=this.shadowRoot.querySelector("#OpenMPCore").value,t=this.shadowRoot.querySelector("#OpenBLASCore").value;a.env.OMP_NUM_THREADS=e?Math.max(0,parseInt(e)).toString():"1",a.env.OPENBLAS_NUM_THREADS=t?Math.max(0,parseInt(t)).toString():"1"}let l;l=this._debug||this.manualImageName&&""!==this.manualImageName.value?this.manualImageName.value:this._generateKernelIndex(e,t),this.shadowRoot.querySelector("#launch-button").disabled=!0,this.shadowRoot.querySelector("#launch-button-msg").textContent=p("session.Preparing"),this.notification.text=p("session.PreparingSession"),this.notification.show();const c=[],d=this._getRandomString();if(this.num_sessions>1)for(let e=1;e<=this.num_sessions;e++){const t={kernelName:l,sessionName:`${s}-${d}-${e}`,architecture:i,config:a};c.push(t)}else c.push({kernelName:l,sessionName:s,architecture:i,config:a});const h=c.map((e=>this.tasker.add("Creating "+e.sessionName,this._createKernel(e.kernelName,e.sessionName,e.architecture,e.config),"","session")));Promise.all(h).then((e=>{this.shadowRoot.querySelector("#new-session-dialog").hide(),this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent=p("session.launcher.ConfirmAndLaunch"),this._resetProgress(),setTimeout((()=>{this.metadata_updating=!0,this.aggregateResource("session-creation"),this.metadata_updating=!1}),1500);const t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t),1===e.length&&"batch"!==this.sessionType&&e[0].taskobj.then((e=>{let t;t="kernelId"in e?{"session-name":e.kernelId,"access-key":""}:{"session-uuid":e.sessionId,"session-name":e.sessionName,"access-key":""};const i=e.servicePorts;!0===Array.isArray(i)?t["app-services"]=i.map((e=>e.name)):t["app-services"]=[],"import"===this.mode&&(t.runtime="jupyter",t.filename=this.importFilename),i.length>0&&globalThis.appLauncher.showLauncher(t)})).catch((e=>{})),this._updateSelectedFolder(!1)})).catch((e=>{e&&e.message?(this.notification.text=m.relieve(e.message),e.description?this.notification.text=m.relieve(e.description):this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=m.relieve(e.title),this.notification.show(!0,e));const t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t),this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent=p("session.launcher.ConfirmAndLaunch")}))}_getRandomString(){let e=Math.floor(52*Math.random()*52*52);let t="";for(let s=0;s<3;s++)t+=(i=e%52)<26?String.fromCharCode(65+i):String.fromCharCode(97+i-26),e=Math.floor(e/52);var i;return t}_createKernel(e,t,i,s){const o=globalThis.backendaiclient.createIfNotExists(e,t,s,2e4,i);return o.catch((e=>{e&&e.message?("statusCode"in e&&408===e.statusCode?this.notification.text=p("session.launcher.sessionStillPreparing"):e.description?this.notification.text=m.relieve(e.description):this.notification.text=m.relieve(e.message),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=m.relieve(e.title),this.notification.show(!0,e))})),o}_hideSessionDialog(){this.shadowRoot.querySelector("#new-session-dialog").hide()}_aliasName(e){const t={python:"Python",tensorflow:"TensorFlow",pytorch:"PyTorch",lua:"Lua",r:"R","r-base":"R",julia:"Julia",rust:"Rust",cpp:"C++",gcc:"GCC",go:"Go",tester:"Tester",haskell:"Haskell",matlab:"MATLAB",sagemath:"Sage",texlive:"TeXLive",java:"Java",php:"PHP",octave:"Octave",nodejs:"Node",caffe:"Caffe",scheme:"Scheme",scala:"Scala",base:"Base",cntk:"CNTK",h2o:"H2O.AI","triton-server":"Triton Server",digits:"DIGITS","ubuntu-linux":"Ubuntu Linux",tf1:"TensorFlow 1",tf2:"TensorFlow 2",py3:"Python 3",py2:"Python 2",py27:"Python 2.7",py35:"Python 3.5",py36:"Python 3.6",py37:"Python 3.7",py38:"Python 3.8",py39:"Python 3.9",py310:"Python 3.10",ji15:"Julia 1.5",ji16:"Julia 1.6",ji17:"Julia 1.7",lxde:"LXDE",lxqt:"LXQt",xfce:"XFCE",gnome:"GNOME",kde:"KDE","ubuntu16.04":"Ubuntu 16.04","ubuntu18.04":"Ubuntu 18.04","ubuntu20.04":"Ubuntu 20.04",intel:"Intel MKL",2018:"2018",2019:"2019",2020:"2020",2021:"2021",2022:"2022",tpu:"TPU:TPUv3",rocm:"GPU:ROCm",cuda9:"GPU:CUDA9",cuda10:"GPU:CUDA10","cuda10.0":"GPU:CUDA10","cuda10.1":"GPU:CUDA10.1","cuda10.2":"GPU:CUDA10.2","cuda10.3":"GPU:CUDA10.3",cuda11:"GPU:CUDA11","cuda11.0":"GPU:CUDA11","cuda11.1":"GPU:CUDA11.1","cuda11.2":"GPU:CUDA11.2","cuda11.3":"GPU:CUDA11.3",miniconda:"Miniconda","anaconda2018.12":"Anaconda 2018.12","anaconda2019.12":"Anaconda 2019.12","alpine3.8":"Alpine Linux 3.8","alpine3.12":"Alpine Linux 3.12",ngc:"Nvidia GPU Cloud",ff:"Research Env."};return e in t?t[e]:e}_updateVersions(e){if(e in this.resourceBroker.supports){{this.version_selector.disabled=!0;const t=[];for(const i of this.resourceBroker.supports[e])for(const s of this.resourceBroker.imageArchitectures[e+":"+i])t.push({version:i,architecture:s});t.sort(((e,t)=>e.version>t.version?1:-1)),t.reverse(),this.versions=t,this.kernel=e}return void 0!==this.versions?this.version_selector.layout(!0).then((()=>{this.version_selector.select(1),this.version_selector.value=this.versions[0].version,this.version_selector.architecture=this.versions[0].architecture,this._updateVersionSelectorText(this.version_selector.value,this.version_selector.architecture),this.version_selector.disabled=!1,this.environ_values={},this.updateResourceAllocationPane("update versions")})):void 0}}_updateVersionSelectorText(e,t){const i=this._getVersionInfo(e,t),s=[];i.forEach((e=>{s.push(e.tag)})),this.version_selector.selectedText=s.join(" / ")}generateSessionId(){let e="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<8;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e+"-session"}async _updateVirtualFolderList(){return this.resourceBroker.updateVirtualFolderList().then((()=>{this.vfolders=this.resourceBroker.vfolders}))}async _aggregateResourceUse(e=""){return this.resourceBroker._aggregateCurrentResource(e).then((async e=>(this.concurrency_used=this.resourceBroker.concurrency_used,this.scaling_group=this.resourceBroker.scaling_group,this.scaling_groups=this.resourceBroker.scaling_groups,this.resource_templates=this.resourceBroker.resource_templates,this.resource_templates_filtered=this.resourceBroker.resource_templates_filtered,this.total_slot=this.resourceBroker.total_slot,this.total_resource_group_slot=this.resourceBroker.total_resource_group_slot,this.total_project_slot=this.resourceBroker.total_project_slot,this.used_slot=this.resourceBroker.used_slot,this.used_resource_group_slot=this.resourceBroker.used_resource_group_slot,this.used_project_slot=this.resourceBroker.used_project_slot,this.used_project_slot_percent=this.resourceBroker.used_project_slot_percent,this.concurrency_limit=this.resourceBroker.concurrency_limit&&this.resourceBroker.concurrency_limit>1?this.resourceBroker.concurrency_limit:1,this.available_slot=this.resourceBroker.available_slot,this.used_slot_percent=this.resourceBroker.used_slot_percent,this.used_resource_group_slot_percent=this.resourceBroker.used_resource_group_slot_percent,await this.updateComplete,Promise.resolve(!0)))).catch((e=>(e&&e.message&&(e.description?this.notification.text=m.relieve(e.description):this.notification.text=m.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)),Promise.resolve(!1))))}aggregateResource(e=""){void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._aggregateResourceUse(e)}),!0):this._aggregateResourceUse(e)}async updateResourceAllocationPane(e=""){if(1==this.metric_updating)return;if("refresh resource policy"===e)return this.metric_updating=!1,this._aggregateResourceUse("update-metric").then((()=>this.updateResourceAllocationPane("after refresh resource policy")));const t=this.shadowRoot.querySelector("#environment").selected,i=this.version_selector.selected;if(null===i)return void(this.metric_updating=!1);const s=i.value,o=i.getAttribute("architecture");if(this._updateVersionSelectorText(s,o),null==t||t.getAttribute("disabled"))this.metric_updating=!1;else if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)document.addEventListener("backend-ai-connected",(()=>{this.updateResourceAllocationPane(e)}),!0);else{if(this.metric_updating=!0,await this._aggregateResourceUse("update-metric"),await this._updateVirtualFolderList(),this.autoMountedVfolders=this.vfolders.filter((e=>e.name.startsWith("."))),this.nonAutoMountedVfolders=this.vfolders.filter((e=>!e.name.startsWith("."))),0===Object.keys(this.resourceBroker.resourceLimits).length)return void(this.metric_updating=!1);const e=t.id,i=s;if(""===e||""===i)return void(this.metric_updating=!1);const o=e+":"+i,r=this.resourceBroker.resourceLimits[o];if(!r)return void(this.metric_updating=!1);this.gpu_mode=this.resourceBroker.gpu_mode,this.gpu_step=this.resourceBroker.gpu_step,this.gpu_modes=this.resourceBroker.gpu_modes,globalThis.backendaiclient.supports("multi-container")&&this.cluster_size>1&&(this.gpu_step=1);const a=this.resourceBroker.available_slot;this.shadowRoot.querySelector("#cpu-resource").disabled=!1,this.shadowRoot.querySelector("#mem-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").disabled=!1,globalThis.backendaiclient.supports("multi-container")&&(this.cluster_size=1,this.shadowRoot.querySelector("#cluster-size").value=this.cluster_size),this.shadowRoot.querySelector("#session-resource").disabled=!1,this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent=p("session.launcher.ConfirmAndLaunch");let n=!1,l={min:.0625,max:2,preferred:.0625};if(this.cuda_device_metric={min:0,max:0},r.forEach((e=>{if("cpu"===e.key){const t={...e};t.min=parseInt(t.min),"cpu"in this.userResourceLimit?0===parseInt(t.max)||"Infinity"===t.max||isNaN(t.max)||null===t.max?t.max=Math.min(parseInt(this.userResourceLimit.cpu),a.cpu,this.max_cpu_core_per_session):t.max=Math.min(parseInt(t.max),parseInt(this.userResourceLimit.cpu),a.cpu,this.max_cpu_core_per_session):0===parseInt(t.max)||"Infinity"===t.max||isNaN(t.max)||null===t.max?t.max=Math.min(this.available_slot.cpu,this.max_cpu_core_per_session):t.max=Math.min(parseInt(t.max),a.cpu,this.max_cpu_core_per_session),t.min>=t.max&&(t.min>t.max&&(t.min=t.max,n=!0),this.shadowRoot.querySelector("#cpu-resource").disabled=!0),this.cpu_metric=t,this.cluster_support&&"single-node"===this.cluster_mode&&(this.cluster_metric.max=Math.min(t.max,this.max_containers_per_session),this.cluster_metric.min>this.cluster_metric.max?this.cluster_metric.min=this.cluster_metric.max:this.cluster_metric.min=t.min)}if("cuda.device"===e.key&&"cuda.device"==this.gpu_mode){const t={...e};t.min=parseInt(t.min),"cuda.device"in this.userResourceLimit?0===parseInt(t.max)||"Infinity"===t.max||isNaN(t.max)||null==t.max?t.max=Math.min(parseInt(this.userResourceLimit["cuda.device"]),parseInt(a.cuda_device),this.max_cuda_device_per_container):t.max=Math.min(parseInt(t.max),parseInt(this.userResourceLimit["cuda.device"]),a.cuda_device,this.max_cuda_device_per_container):0===parseInt(t.max)||"Infinity"===t.max||isNaN(t.max)||null==t.max?t.max=Math.min(parseInt(this.available_slot.cuda_device),this.max_cuda_device_per_container):t.max=Math.min(parseInt(t.max),parseInt(a.cuda_device),this.max_cuda_device_per_container),t.min>=t.max&&(t.min>t.max&&(t.min=t.max,n=!0),this.shadowRoot.querySelector("#gpu-resource").disabled=!0),this.cuda_device_metric=t}if("cuda.shares"===e.key&&"cuda.shares"===this.gpu_mode){const t={...e};t.min=parseFloat(t.min),"cuda.shares"in this.userResourceLimit?0===parseFloat(t.max)||"Infinity"===t.max||isNaN(t.max)||null==t.max?t.max=Math.min(parseFloat(this.userResourceLimit["cuda.shares"]),parseFloat(a.cuda_shares),this.max_cuda_shares_per_container):t.max=Math.min(parseFloat(t.max),parseFloat(this.userResourceLimit["cuda.shares"]),parseFloat(a.cuda_shares),this.max_cuda_shares_per_container):0===parseFloat(t.max)||"Infinity"===t.max||isNaN(t.max)||null==t.max?t.max=Math.min(parseFloat(a.cuda_shares),this.max_cuda_shares_per_container):t.max=Math.min(parseFloat(t.max),parseFloat(a.cuda_shares),this.max_cuda_shares_per_container),t.min>=t.max&&(t.min>t.max&&(t.min=t.max,n=!0),this.shadowRoot.querySelector("#gpu-resource").disabled=!0),this.cuda_shares_metric=t,t.max>0&&(this.cuda_device_metric=t)}if("rocm.device"===e.key&&"rocm.device"===this.gpu_mode){const t={...e};t.min=parseInt(t.min),t.max=parseInt(t.max),t.min,t.max,this.rocm_device_metric=t}if("tpu.device"===e.key){const t={...e};t.min=parseInt(t.min),t.max=parseInt(t.max),t.min,t.max,this.tpu_device_metric=t}if("mem"===e.key){const t={...e};t.min=globalThis.backendaiclient.utils.changeBinaryUnit(t.min,"g"),t.min<.1&&(t.min=.1),t.max||(t.max=0);const i=globalThis.backendaiclient.utils.changeBinaryUnit(t.max,"g","g");if("mem"in this.userResourceLimit){const e=globalThis.backendaiclient.utils.changeBinaryUnit(this.userResourceLimit.mem,"g");isNaN(parseInt(i))||0===parseInt(i)?t.max=Math.min(parseFloat(e),a.mem,this.max_mem_per_container):t.max=Math.min(parseFloat(i),parseFloat(e),a.mem,this.max_mem_per_container)}else 0!==parseInt(t.max)&&"Infinity"!==t.max&&!0!==isNaN(t.max)?t.max=Math.min(parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(t.max,"g","g")),a.mem,this.max_mem_per_container):t.max=Math.min(a.mem,this.max_mem_per_container);t.min>=t.max&&(t.min>t.max&&(t.min=t.max,n=!0),this.shadowRoot.querySelector("#mem-resource").disabled=!0),t.min=Number(t.min.toFixed(2)),t.max=Number(t.max.toFixed(2)),this.mem_metric=t}"shmem"===e.key&&(l={...e},l.preferred="preferred"in l?globalThis.backendaiclient.utils.changeBinaryUnit(l.preferred,"g","g"):.0625)})),l.max=this.max_shm_per_container,l.min=.0625,l.min>=l.max&&(l.min>l.max&&(l.min=l.max,n=!0),this.shadowRoot.querySelector("#shmem-resource").disabled=!0),l.min=Number(l.min.toFixed(2)),l.max=Number(l.max.toFixed(2)),this.shmem_metric=l,0==this.cuda_device_metric.min&&0==this.cuda_device_metric.max)if(this.shadowRoot.querySelector("#gpu-resource").disabled=!0,this.shadowRoot.querySelector("#gpu-resource").value=0,this.resource_templates!==[]&&this.resource_templates.length>0){const e=[];for(let t=0;t<this.resource_templates.length;t++)"cuda_device"in this.resource_templates[t]||"cuda_shares"in this.resource_templates[t]?(parseFloat(this.resource_templates[t].cuda_device)<=0&&!("cuda_shares"in this.resource_templates[t])||parseFloat(this.resource_templates[t].cuda_shares)<=0&&!("cuda_device"in this.resource_templates[t])||parseFloat(this.resource_templates[t].cuda_device)<=0&&parseFloat(this.resource_templates[t].cuda_shares)<=0)&&e.push(this.resource_templates[t]):e.push(this.resource_templates[t]);this.resource_templates_filtered=e}else this.resource_templates_filtered=this.resource_templates;else this.shadowRoot.querySelector("#gpu-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").value=this.cuda_device_metric.max,this.resource_templates_filtered=this.resource_templates;if(this.resource_templates_filtered!==[]&&this.resource_templates_filtered.length>0){const e=this.resource_templates_filtered[0];this._chooseResourceTemplate(e),this.shadowRoot.querySelector("#resource-templates").layout(!0).then((()=>this.shadowRoot.querySelector("#resource-templates").layoutOptions())).then((()=>{this.shadowRoot.querySelector("#resource-templates").select(1)}))}else this._updateResourceIndicator(this.cpu_metric.min,this.mem_metric.min,"none",0);n?(this.shadowRoot.querySelector("#cpu-resource").disabled=!0,this.shadowRoot.querySelector("#mem-resource").disabled=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!0,this.shadowRoot.querySelector("#session-resource").disabled=!0,this.shadowRoot.querySelector("#shmem-resource").disabled=!0,this.shadowRoot.querySelector("#launch-button").disabled=!0,this.shadowRoot.querySelector(".allocation-check").display="none",this.cluster_support&&(this.shadowRoot.querySelector("#cluster-size").disabled=!0),this.shadowRoot.querySelector("#launch-button-msg").textContent=p("session.launcher.NotEnoughResource")):(this.shadowRoot.querySelector("#cpu-resource").disabled=!1,this.shadowRoot.querySelector("#mem-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").disabled=!1,this.shadowRoot.querySelector("#session-resource").disabled=!1,this.shadowRoot.querySelector("#shmem-resource").disabled=!1,this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector(".allocation-check").display="block",this.cluster_support&&(this.shadowRoot.querySelector("#cluster-size").disabled=!1)),this.cuda_device_metric.min==this.cuda_device_metric.max&&this.cuda_device_metric.max<1&&(this.shadowRoot.querySelector("#gpu-resource").disabled=!0),this.concurrency_limit<=1&&(this.shadowRoot.querySelector("#session-resource").min=1,this.shadowRoot.querySelector("#session-resource").max=2,this.shadowRoot.querySelector("#session-resource").value=1,this.shadowRoot.querySelector("#session-resource").disabled=!0),this.max_containers_per_session<=1&&"single-node"===this.cluster_mode&&(this.shadowRoot.querySelector("#cluster-size").min=1,this.shadowRoot.querySelector("#cluster-size").max=2,this.shadowRoot.querySelector("#cluster-size").value=1,this.shadowRoot.querySelector("#cluster-size").disabled=!0),this.metric_updating=!1}}updateLanguage(){const e=this.shadowRoot.querySelector("#environment").selected;if(null===e)return;const t=e.id;this._updateVersions(t)}folderToMountListRenderer(e,t,i){y(h`
          <div style="font-size:14px;text-overflow:ellipsis;overflow:hidden;">${i.item.name}</div>
          <span style="font-size:10px;">${i.item.host}</span>
        `,e)}folderMapRenderer(e,t,i){y(h`
          <vaadin-text-field id="vfolder-alias-${i.item.name}" clear-button-visible prevent-invalid-input
                             pattern="^[a-zA-Z0-9\./_-]*$" ?disabled="${!i.selected}"
                             theme="small" placeholder="/home/work/${i.item.name}"
                             @change="${e=>this._updateFolderMap(i.item.name,e.target.value)}"></vaadin-text-field>
        `,e)}infoHeaderRenderer(e,t){y(h`
          <div class="horizontal layout center">
            <span id="vfolder-header-title">${_("session.launcher.FolderAlias")}</span>
            <mwc-icon-button icon="info" class="fg green info" @click="${e=>this._showPathDescription(e)}"></mwc-icon-button>
          </div>
        `,e)}_showPathDescription(e){null!=e&&e.stopPropagation(),this._helpDescriptionTitle=p("session.launcher.FolderAlias"),this._helpDescription=p("session.launcher.DescFolderAlias"),this._helpDescriptionIcon="";this.shadowRoot.querySelector("#help-description").show()}helpDescTagCount(e){let t=0;let i=e.indexOf(e);for(;-1!==i;)t++,i=e.indexOf("<p>",i+1);return t}setPathContent(e,t){const i=e.children[e.children.length-1],s=i.children[i.children.length-1];if(s.children.length<t+1){const e=document.createElement("div");e.setAttribute("class","horizontal layout flex center");const t=document.createElement("mwc-checkbox");t.setAttribute("id","hide-guide");const i=document.createElement("span");i.innerHTML=`${p("dialog.hide.DonotShowThisAgain")}`,e.appendChild(t),e.appendChild(i),s.appendChild(e);this.shadowRoot.querySelector("#hide-guide").addEventListener("change",(e=>{if(null!==e.target){e.stopPropagation();e.target.checked?localStorage.setItem("backendaiwebui.pathguide","false"):localStorage.setItem("backendaiwebui.pathguide","true")}}))}}async _updateFolderMap(e,t){if(""===t)return e in this.folderMapping&&delete this.folderMapping[e],await this.shadowRoot.querySelector("#vfolder-mount-preview").updateComplete.then((()=>this.requestUpdate())),Promise.resolve(!0);if(e!==t){if(this.selectedVfolders.includes(t))return this.notification.text=p("session.launcher.FolderAliasOverlapping"),this.notification.show(),delete this.folderMapping[e],this.shadowRoot.querySelector("#vfolder-alias-"+e).value="",await this.shadowRoot.querySelector("#vfolder-mount-preview").updateComplete.then((()=>this.requestUpdate())),Promise.resolve(!1);for(const i in this.folderMapping)if({}.hasOwnProperty.call(this.folderMapping,i)&&this.folderMapping[i]==t)return this.notification.text=p("session.launcher.FolderAliasOverlapping"),this.notification.show(),delete this.folderMapping[e],this.shadowRoot.querySelector("#vfolder-alias-"+e).value="",await this.shadowRoot.querySelector("#vfolder-mount-preview").updateComplete.then((()=>this.requestUpdate())),Promise.resolve(!1);return this.folderMapping[e]=t,await this.shadowRoot.querySelector("#vfolder-mount-preview").updateComplete.then((()=>this.requestUpdate())),Promise.resolve(!0)}return Promise.resolve(!0)}changed(e){console.log(e)}isEmpty(e){return 0===e.length}_toggleAdvancedSettings(){this.shadowRoot.querySelector("#advanced-resource-settings").toggle()}_setClusterMode(e){this.cluster_mode=e.target.value}_setClusterSize(e){this.cluster_size=e.target.value>0?Math.round(e.target.value):0,this.shadowRoot.querySelector("#cluster-size").value=this.cluster_size;let t=1;globalThis.backendaiclient.supports("multi-container")&&(this.cluster_size>1||(t=0),this.gpu_step=this.resourceBroker.gpu_step,this._setSessionLimit(t))}_setSessionLimit(e=1){const t=this.shadowRoot.querySelector("#session-resource");e>0?(t.value=e,this.session_request=e,t.disabled=!0):(t.max=this.concurrency_limit,t.disabled=!1)}_chooseResourceTemplate(e){let t;t=void 0!==e.cpu?e:e.target.closest("mwc-list-item");const i=t.cpu,s=t.mem,o=t.cuda_device,r=t.cuda_shares,a=t.rocm_device,n=t.tpu_device;let l,c;void 0!==o||void 0!==r?void 0===o?(l="cuda.shares",c=r):(l="cuda.device",c=o):void 0!==a?(l="rocm.device",c=a):void 0!==n?(l="tpu.device",c=n):(l="none",c=0);const d=t.shmem?t.shmem:this.shmem_metric;this.shmem_request="number"!=typeof d?d.preferred:d||.0625,this._updateResourceIndicator(i,s,l,c)}_updateResourceIndicator(e,t,i,s){this.shadowRoot.querySelector("#cpu-resource").value=e,this.shadowRoot.querySelector("#mem-resource").value=t,this.shadowRoot.querySelector("#gpu-resource").value=s,this.shadowRoot.querySelector("#shmem-resource").value=this.shmem_request,this.cpu_request=e,this.mem_request=t,this.gpu_request=s,this.gpu_request_type=i}async selectDefaultLanguage(e=!1,t=""){if(!0===this._default_language_updated&&!1===e)return;""!==t?this.default_language=t:void 0!==globalThis.backendaiclient._config.default_session_environment&&"default_session_environment"in globalThis.backendaiclient._config&&""!==globalThis.backendaiclient._config.default_session_environment?this.default_language=globalThis.backendaiclient._config.default_session_environment:this.languages.length>1?this.default_language=this.languages[1].name:0!==this.languages.length?this.default_language=this.languages[0].name:this.default_language="index.docker.io/lablup/ngc-tensorflow";const i=this.shadowRoot.querySelector("#environment"),s=i.items.find((e=>e.value===this.default_language));if(void 0===s&&void 0!==globalThis.backendaiclient&&!1===globalThis.backendaiclient.ready)return setTimeout((()=>(console.log("Environment selector is not ready yet. Trying to set the default language again."),this.selectDefaultLanguage(e,t))),500),Promise.resolve(!0);const o=i.items.indexOf(s);return i.select(o),this._default_language_updated=!0,Promise.resolve(!0)}_selectDefaultVersion(e){return!1}async _fetchSessionOwnerGroups(){this.ownerFeatureInitialized||(this.shadowRoot.querySelector("#owner-group").addEventListener("selected",this._fetchSessionOwnerScalingGroups.bind(this)),this.ownerFeatureInitialized=!0);const e=this.shadowRoot.querySelector("#owner-email"),t=e.value;if(!e.checkValidity())return this.notification.text=p("credential.validation.InvalidEmailAddress"),this.notification.show(),this.ownerKeypairs=[],void(this.ownerGroups=[]);const i=await globalThis.backendaiclient.keypair.list(t,["access_key"]),s=this.shadowRoot.querySelector("#owner-enabled");if(this.ownerKeypairs=i.keypairs,this.ownerKeypairs.length<1)return this.notification.text=p("session.launcher.NoActiveKeypair"),this.notification.show(),s.checked=!1,s.disabled=!0,this.ownerKeypairs=[],void(this.ownerGroups=[]);this.shadowRoot.querySelector("#owner-accesskey").layout(!0).then((()=>{this.shadowRoot.querySelector("#owner-accesskey").select(0),this.shadowRoot.querySelector("#owner-accesskey").createAdapter().setSelectedText(this.ownerKeypairs[0].access_key)}));const o=await globalThis.backendaiclient.user.get(t,["domain_name","groups {id name}"]);this.ownerDomain=o.user.domain_name,this.ownerGroups=o.user.groups,this.ownerGroups&&this.shadowRoot.querySelector("#owner-group").layout(!0).then((()=>{this.shadowRoot.querySelector("#owner-group").select(0),this.shadowRoot.querySelector("#owner-group").createAdapter().setSelectedText(this.ownerGroups[0].name)})),s.disabled=!1}async _fetchSessionOwnerScalingGroups(){const e=this.shadowRoot.querySelector("#owner-group").value;if(!e)return void(this.ownerScalingGroups=[]);const t=await globalThis.backendaiclient.scalingGroup.list(e);this.ownerScalingGroups=t.scaling_groups,this.ownerScalingGroups&&this.shadowRoot.querySelector("#owner-scaling-group").layout(!0).then((()=>{this.shadowRoot.querySelector("#owner-scaling-group").select(0),this.shadowRoot.querySelector("#owner-group").createAdapter().setSelectedText(this.ownerScalingGroups[0].name)}))}async _fetchDelegatedSessionVfolder(){const e=this.shadowRoot.querySelector("#owner-enabled"),t=this.shadowRoot.querySelector("#owner-email").value;this.ownerKeypairs.length>0&&e&&e.checked?(await this.resourceBroker.updateVirtualFolderList(t),this.vfolders=this.resourceBroker.vfolders):await this._updateVirtualFolderList(),this.autoMountedVfolders=this.vfolders.filter((e=>e.name.startsWith("."))),this.nonAutoMountedVfolders=this.vfolders.filter((e=>!e.name.startsWith(".")))}_toggleResourceGauge(){""==this.resourceGauge.style.display||"flex"==this.resourceGauge.style.display||"block"==this.resourceGauge.style.display?this.resourceGauge.style.display="none":(document.body.clientWidth<750?(this.resourceGauge.style.left="20px",this.resourceGauge.style.right="20px",this.resourceGauge.style.backgroundColor="var(--paper-red-800)"):this.resourceGauge.style.backgroundColor="transparent",this.resourceGauge.style.display="flex")}_showKernelDescription(e,t){e.stopPropagation();const i=t.kernelname;if(i in this.resourceBroker.imageInfo&&"description"in this.resourceBroker.imageInfo[i]){const e=this.shadowRoot.querySelector("#help-description");this._helpDescriptionTitle=this.resourceBroker.imageInfo[i].name,this._helpDescription=this.resourceBroker.imageInfo[i].description,this._helpDescriptionIcon=t.icon,e.show()}else i in this.imageInfo?this._helpDescriptionTitle=this.resourceBroker.imageInfo[i].name:this._helpDescriptionTitle=i,this._helpDescription=p("session.launcher.NoDescriptionFound")}_showResourceDescription(e,t){e.stopPropagation();const i={cpu:{name:p("session.launcher.CPU"),desc:p("session.launcher.DescCPU")},mem:{name:p("session.launcher.Memory"),desc:p("session.launcher.DescMemory")},shmem:{name:p("session.launcher.SharedMemory"),desc:p("session.launcher.DescSharedMemory")},gpu:{name:p("session.launcher.GPU"),desc:p("session.launcher.DescGPU")},session:{name:p("session.launcher.TitleSession"),desc:p("session.launcher.DescSession")},"single-node":{name:p("session.launcher.SingleNode"),desc:p("session.launcher.DescSingleNode")},"multi-node":{name:p("session.launcher.MultiNode"),desc:p("session.launcher.DescMultiNode")},"openmp-optimization":{name:p("session.launcher.OpenMPOptimization"),desc:p("session.launcher.DescOpenMPOptimization")}};if(t in i){this._helpDescriptionTitle=i[t].name,this._helpDescription=i[t].desc,this._helpDescriptionIcon="";this.shadowRoot.querySelector("#help-description").show()}}_showEnvConfigDescription(e){e.stopPropagation(),this._helpDescriptionTitle=p("session.launcher.EnvironmentVariableTitle"),this._helpDescription=p("session.launcher.DescSetEnv");this.shadowRoot.querySelector("#help-description").show()}_resourceTemplateToCustom(){this.shadowRoot.querySelector("#resource-templates").selectedText=p("session.launcher.CustomResourceApplied")}_applyResourceValueChanges(e,t=!0){const i=e.target.value;switch(e.target.id.split("-")[0]){case"cpu":this.cpu_request=i;break;case"mem":this.mem_request=i;break;case"shmem":this.shmem_request=i;break;case"gpu":this.gpu_request=i;break;case"session":this.session_request=i;break;case"cluster":this._changeTotalAllocationPane()}this.requestUpdate(),t?this._resourceTemplateToCustom():this._setClusterSize(e)}_changeTotalAllocationPane(){this._deleteAllocationPaneShadow();const e=this.shadowRoot.querySelector("#cluster-size").value;if(e>1){const t=this.shadowRoot.querySelector("#resource-allocated-box-shadow");for(let i=0;i<Math.min(6,e-1);i+=1){const e=document.createElement("div");e.classList.add("horizontal","layout","center","center-justified","resource-allocated-box","allocation-shadow"),e.style.position="absolute",e.style.top="-"+(5+5*i)+"px",e.style.left=5+5*i+"px";const s=245+2*i;e.style.backgroundColor="rgb("+s+","+s+","+s+")",e.style.borderColor="rgb("+(s-10)+","+(s-10)+","+(s-10)+")",e.style.zIndex=(6-i).toString(),t.appendChild(e)}this.shadowRoot.querySelector("#total-allocation-pane").appendChild(t)}}_deleteAllocationPaneShadow(){this.shadowRoot.querySelector("#resource-allocated-box-shadow").innerHTML=""}_updateShmemLimit(){const e=this.shadowRoot.querySelector("#shmem-resource"),t=parseFloat(this.shadowRoot.querySelector("#mem-resource").value);let i=e.value;parseFloat(i)>t?(i=t,this.shmem_request=i,e.value=i,e.max=i,this.notification.text=p("session.launcher.SharedMemorySettingIsReduced"),this.notification.show()):this.max_shm_per_container>i&&(e.max=t>this.max_shm_per_container?this.max_shm_per_container:t)}_roundResourceAllocation(e,t){return parseFloat(e).toFixed(t)}_conditionalGBtoMB(e){return e<1?this._roundResourceAllocation((1024*e).toFixed(0),2):this._roundResourceAllocation(e,2)}_conditionalGBtoMBunit(e){return e<1?"MB":"GB"}_getVersionInfo(e,t){const i=[],s=e.split("-");if(i.push({tag:this._aliasName(s[0]),color:"blue",size:"60px"}),s.length>1&&(this.kernel+":"+e in this.imageRequirements&&"framework"in this.imageRequirements[this.kernel+":"+e]?i.push({tag:this.imageRequirements[this.kernel+":"+e].framework,color:"red",size:"110px"}):i.push({tag:this._aliasName(s[1]),color:"red",size:"110px"})),i.push({tag:t,color:"lightgreen",size:"90px"}),s.length>2){const e=this._aliasName(s[2]).split(":");e.length>1?i.push({tag:e[1],app:e[0],color:"green",size:"90px"}):i.push({tag:e[0],color:"green",size:"90px"})}return i}_disableEnterKey(){this.shadowRoot.querySelectorAll("wl-expansion").forEach((e=>{e.onKeyDown=e=>{13===e.keyCode&&e.preventDefault()}}))}_validateInput(e){const t=e.target.closest("mwc-textfield");t.value&&(t.value=Math.round(t.value),t.value=globalThis.backendaiclient.utils.clamp(t.value,t.min,t.max))}_appendEnvRow(e="",t=""){const i=this.shadowRoot.querySelector("#modify-env-container"),s=i.children[i.children.length-1],o=this._createEnvRow(e,t);i.insertBefore(o,s.nextSibling)}_createEnvRow(e="",t=""){const i=document.createElement("div");i.setAttribute("class","row extra");const s=document.createElement("wl-textfield");s.setAttribute("type","text"),s.setAttribute("value",e);const o=document.createElement("wl-textfield");o.setAttribute("type","text"),o.setAttribute("value",t);const r=document.createElement("wl-button");r.setAttribute("class","fg pink"),r.setAttribute("fab",""),r.setAttribute("flat",""),r.addEventListener("click",(e=>this._removeEnvItem(e)));const a=document.createElement("wl-icon");return a.innerHTML="remove",r.appendChild(a),i.appendChild(s),i.appendChild(o),i.appendChild(r),i}_removeEnvItem(e){this.deleteEnvRow=e.target.parentNode,this.deleteEnvRow.remove()}_removeEmptyEnv(){const e=this.shadowRoot.querySelector("#modify-env-container").querySelectorAll(".row.extra");Array.prototype.filter.call(e,(e=>(e=>2===Array.prototype.filter.call(e.querySelectorAll("wl-textfield"),((e,t)=>""===e.value)).length)(e))).map((e=>e.parentNode.removeChild(e)))}modifyEnv(){this._parseEnvVariableList(),this._saveEnvVariableList();const e=this.shadowRoot.querySelector("#modify-env-dialog");e.closeWithConfirmation=!1,e.hide(),this.notification.text=p("session.launcher.EnvironmentVariableConfigurationDone"),this.notification.show()}_loadEnv(){this.environ.forEach(((e,t)=>{if(0===t){const t=this.shadowRoot.querySelector("#modify-env-container").querySelector(".row:not(.header)").querySelectorAll("wl-textfield");Array.prototype.forEach.call(t,((t,i)=>{t.value=0===i?e.name:e.value}))}else this._appendEnvRow(e.name,e.value)}))}_showEnvDialog(){this._removeEmptyEnv();const e=this.shadowRoot.querySelector("#modify-env-dialog");e.closeWithConfirmation=!0,e.show()}_closeAndResetEnvInput(){this._clearRows(),this._loadEnv(),this.closeDialog("env-config-confirmation");const e=this.shadowRoot.querySelector("#modify-env-dialog");e.closeWithConfirmation=!1,e.hide()}_parseEnvVariableList(){this.environ_values={};const e=this.shadowRoot.querySelector("#modify-env-container").querySelectorAll(".row:not(.header)"),t=e=>{const t=Array.prototype.map.call(e.querySelectorAll("wl-textfield"),(e=>e.value));return this.environ_values[t[0]]=t[1],t};Array.prototype.filter.call(e,(e=>(e=>0===Array.prototype.filter.call(e.querySelectorAll("wl-textfield"),((e,t)=>""===e.value)).length)(e))).map((e=>t(e)))}_saveEnvVariableList(){this.environ=Object.entries(this.environ_values).map((([e,t])=>({name:e,value:t})))}_resetEnvironmentVariables(){this.environ=[],this.environ_values={};null!==this.shadowRoot.querySelector("#modify-env-dialog")&&this._clearRows()}_clearRows(){const e=this.shadowRoot.querySelector("#modify-env-container");e.querySelectorAll(".row:not(.header)")[0].querySelectorAll("wl-textfield").forEach((e=>{e.value=""})),e.querySelectorAll(".row.extra").forEach((e=>{e.remove()}))}openDialog(e){this.shadowRoot.querySelector("#"+e).show()}closeDialog(e){this.shadowRoot.querySelector("#"+e).hide()}async moveProgress(e){var t;const i=this.shadowRoot.querySelector("#progress-0"+this.currentIndex);this.currentIndex+=e,this.currentIndex>this.progressLength&&(this.currentIndex=globalThis.backendaiclient.utils.clamp(this.currentIndex+e,this.progressLength,1));const s=this.shadowRoot.querySelector("#progress-0"+this.currentIndex),o=this.shadowRoot.querySelector("#prev-button"),r=this.shadowRoot.querySelector("#next-button");i.classList.remove("active"),s.classList.add("active"),o.style.visibility=1==this.currentIndex?"hidden":"visible",r.style.visibility=this.currentIndex==this.progressLength?"hidden":"visible",this.shadowRoot.querySelector("#launch-button").disabled||(this.shadowRoot.querySelector("#launch-button-msg").textContent=this.progressLength==this.currentIndex?p("session.launcher.Launch"):p("session.launcher.ConfirmAndLaunch")),null===(t=this._grid)||void 0===t||t.clearCache(),2===this.currentIndex&&await this._fetchDelegatedSessionVfolder()}_resetProgress(){this.moveProgress(1-this.currentIndex),this._resetEnvironmentVariables(),this._unselectAllSelectedFolder()}_calculateProgress(){const e=this.progressLength>0?this.progressLength:1;return((this.currentIndex>0?this.currentIndex:1)/e).toFixed(2)}_toggleEnvironmentSelectUI(){var e;const t=this.shadowRoot.querySelector("mwc-select#environment"),i=this.shadowRoot.querySelector("mwc-select#version"),s=!!(null===(e=this.manualImageName)||void 0===e?void 0:e.value);t.disabled=i.disabled=s;const o=s?-1:1;t.select(o),i.select(o)}_toggleHPCOptimization(){const e=this.shadowRoot.querySelector("#OpenMPswitch").selected;this.shadowRoot.querySelector("#HPCOptimizationOptions").style.display=e?"none":"block"}_toggleStartUpCommandEditor(e){this.sessionType=e.target.value;const t="batch"===this.sessionType;if(this.shadowRoot.querySelector("#batch-mode-config-section").style.display=t?"inline-flex":"none",t){const e=this.shadowRoot.querySelector("#command-editor");e.refresh(),e.focus()}}_toggleScheduleTimeDisplay(){this.useScheduledTime=this.shadowRoot.querySelector("#use-scheduled-time").selected,this.shadowRoot.querySelector("vaadin-date-time-picker").style.display=this.useScheduledTime?"block":"none",this._toggleScheduleTime(!this.useScheduledTime)}_toggleScheduleTime(e=!1){e?clearInterval(this.schedulerTimer):this.schedulerTimer=setInterval((()=>{this._getSchedulableTime()}),1e3)}_getSchedulableTime(){const e=e=>e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+"T"+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),t=this.shadowRoot.querySelector("vaadin-date-time-picker");let i=new Date;const s=12e4;let o=new Date(i.getTime()+s);if(t.min=e(i),t.value&&""!==t.value){const r=new Date(t.value).getTime();i=new Date,r<=i.getTime()&&(o=new Date(i.getTime()+s),t.value=e(o))}else t.value=e(o);this._setRelativeTimeStamp()}_setRelativeTimeStamp(){var e;const t={year:31536e6,month:2628e6,day:864e5,hour:36e5,minute:6e4,second:1e3},i=null!==(e=globalThis.backendaioptions.get("current_language"))&&void 0!==e?e:"en",s=new Intl.RelativeTimeFormat(i,{numeric:"auto"}),o=this.shadowRoot.querySelector("vaadin-date-time-picker");o.invalid?o.helperText=p("session.launcher.ResetStartTime"):o.helperText=p("session.launcher.SessionStartTime")+((e,i=+new Date)=>{const o=e-i;for(const e in t)if(Math.abs(o)>t[e]||"second"==e){const i=e;return s.format(Math.round(o/t[e]),i)}return p("session.launcher.InfiniteTime")})(+new Date(o.value))}render(){var e,t;return h`
      <link rel="stylesheet" href="resources/fonts/font-awesome-all.min.css">
      <wl-button raised class="primary-action" id="launch-session" ?disabled="${!this.enableLaunchButton}"
                 @click="${()=>this._launchSessionDialog()}">
        <wl-icon>power_settings_new</wl-icon>
        <span>${_("session.launcher.Start")}</span>
      </wl-button>
      <backend-ai-dialog id="new-session-dialog" narrowLayout fixed backdrop persistent @dialog-closed="${()=>this._toggleScheduleTime(!0)}">
        <span slot="title">${this.newSessionDialogTitle?this.newSessionDialogTitle:_("session.launcher.StartNewSession")}</span>
        <form slot="content" id="launch-session-form" class="centered" style="position:relative;">
          <div id="progress-01" class="progress center layout fade active">
            <mwc-select id="session-type" icon="category" label="${p("session.launcher.SessionType")}" required fixedMenuPosition
                        value="${this.sessionType}" @selected="${e=>this._toggleStartUpCommandEditor(e)}">
              <mwc-list-item value="batch">
                ${_("session.launcher.BatchMode")}
              </mwc-list-item>
              <mwc-list-item value="interactive" selected>
                ${_("session.launcher.InteractiveMode")}
              </mwc-list-item>
            </mwc-select>
            <mwc-select id="environment" icon="code" label="${p("session.launcher.Environments")}" required fixedMenuPosition
                        value="${this.default_language}">
              <mwc-list-item selected graphic="icon" style="display:none!important;">
                ${_("session.launcher.ChooseEnvironment")}
              </mwc-list-item>
              ${this.languages.map((e=>h`
                ${!1===e.clickable?h`
                  <h5 style="font-size:12px;padding: 0 10px 3px 10px;margin:0; border-bottom:1px solid #ccc;"
                      role="separator" disabled="true">${e.basename}</h5>
                `:h`
                  <mwc-list-item id="${e.name}" value="${e.name}" graphic="icon">
                    <img slot="graphic" alt="language icon" src="resources/icons/${e.icon}"
                         style="width:24px;height:24px;"/>
                    <div class="horizontal justified center flex layout" style="width:325px;">
                      <div style="padding-right:5px;">${e.basename}</div>
                      <div class="horizontal layout end-justified center flex">
                        ${e.tags?e.tags.map((e=>h`
                          <lablup-shields style="margin-right:5px;" color="${e.color}"
                                          description="${e.tag}"></lablup-shields>
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
            <mwc-select id="version" icon="architecture" label="${p("session.launcher.Version")}" required fixedMenuPosition>
              <mwc-list-item selected style="display:none!important"></mwc-list-item>
              <h5 style="font-size:12px;padding: 0 10px 3px 15px;margin:0; border-bottom:1px solid #ccc;"
                  role="separator" disabled="true" class="horizontal layout">
                  <div style="width:60px;">${_("session.launcher.Version")}</div>
                  <div style="width:110px;">${_("session.launcher.Base")}</div>
                  <div style="width:90px;">${_("session.launcher.Architecture")}</div>
                <div style="width:90px;">${_("session.launcher.Requirements")}</div>
              </h5>
              ${this.versions.map((({version:e,architecture:t})=>h`
                <mwc-list-item id="${e}" architecture="${t}" value="${e}">
                    <span style="display:none">${e}</span>
                    <div class="horizontal layout end-justified">
                    ${this._getVersionInfo(e||"",t).map((e=>h`
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
            ${this._debug||this.allow_manual_image_name_for_session?h`
              <mwc-textfield id="image-name" type="text" class="flex" value="" icon="assignment_turned_in"
                label="${p("session.launcher.ManualImageName")}"
                @change=${e=>this._toggleEnvironmentSelectUI()}></mwc-textfield>
            `:h``}
            <mwc-textfield id="session-name" placeholder="${p("session.launcher.SessionNameOptional")}"
                           pattern="[a-zA-Z0-9_-]{4,}" maxLength="64" icon="label"
                           helper="${p("maxLength.64chars")}"
                           validationMessage="${p("session.launcher.SessionNameAllowCondition")}">
            </mwc-textfield>
            <div class="vertical layout center flex" id="batch-mode-config-section" style="display:none;">
              <span class="launcher-item-title" style="width:386px;">${_("session.launcher.BatchModeConfig")}</span>
              <div class="horizontal layout start-justified">
                <div style="width:370px;font-size:12px;">${_("session.launcher.StartUpCommand")}</div>
              </div>
              <lablup-codemirror id="command-editor" mode="shell"></lablup-codemirror>
              <div class="horizontal center layout justified" style="margin: 10px auto;">
                <div style="width:330px;font-size:12px;">${_("session.launcher.ScheduleTime")}</div>
                <mwc-switch id="use-scheduled-time" @click="${()=>this._toggleScheduleTimeDisplay()}"></mwc-switch>
              </div>
              <vaadin-date-time-picker step="1"
                                       date-placeholder="DD/MM/YYYY"
                                       time-placeholder="hh:mm:ss"
                                       ?required="${this.useScheduledTime}"
                                       @change="${this._getSchedulableTime}"
                                       style="display:none;"></vaadin-date-time-picker>
            </div>
            <div class="horizontal layout center justified">
              <span class="launcher-item-title">${_("session.launcher.SetEnvironmentVariable")}</span>
              <mwc-button
                unelevated
                icon="rule"
                label="${p("session.launcher.Config")}"
                style="width:auto;margin-right:15px;"
                @click="${()=>this._showEnvDialog()}"></mwc-button>
            </div>
            <div class="environment-variables-container" style="margin-top:18px;">
              ${this.environ.length>0?h`
                <div class="horizontal flex center center-justified layout" style="overflow-x:hidden;">
                  <div role="listbox">
                    <h4>${p("session.launcher.EnvironmentVariable")}</h4>
                    ${this.environ.map((e=>h`
                      <wl-textfield disabled value="${e.name}"></wl-textfield>
                    `))}
                  </div>
                  <div role="listbox" style="margin-left:15px;">
                    <h4>${p("session.launcher.EnvironmentVariableValue")}</h4>
                    ${this.environ.map((e=>h`
                      <wl-textfield disabled value="${e.value}"></wl-textfield>
                    `))}
                  </div>
                </div>
              `:h`
                <div class="vertical layout center flex blank-box">
                  <span>${_("session.launcher.NoEnvConfigured")}</span>
                </div>
              `}
            </div>
            <wl-expansion name="ownership" style="--expansion-content-padding:15px 0;">
              <span slot="title">${_("session.launcher.SetSessionOwner")}</span>
              <div class="vertical layout">
                <div class="horizontal center layout">
                  <mwc-textfield id="owner-email" type="email" class="flex" value=""
                                pattern="^.+@.+\..+$" icon="mail"
                                label="${p("session.launcher.OwnerEmail")}" size="40"></mwc-textfield>
                  <mwc-icon-button icon="refresh" class="blue"
                                  @click="${()=>this._fetchSessionOwnerGroups()}">
                  </mwc-icon-button>
                </div>
                <mwc-select id="owner-accesskey" label="${p("session.launcher.OwnerAccessKey")}" icon="vpn_key" fixedMenuPosition naturalMenuWidth>
                  ${this.ownerKeypairs.map((e=>h`
                    <mwc-list-item class="owner-group-dropdown"
                                  id="${e.access_key}"
                                  value="${e.access_key}">
                      ${e.access_key}
                    </mwc-list-item>
                  `))}
                </mwc-select>
                <div class="horizontal center layout">
                  <mwc-select id="owner-group" label="${p("session.launcher.OwnerGroup")}" icon="group_work" fixedMenuPosition naturalMenuWidth>
                    ${this.ownerGroups.map((e=>h`
                      <mwc-list-item class="owner-group-dropdown"
                                    id="${e.name}"
                                    value="${e.name}">
                        ${e.name}
                      </mwc-list-item>
                    `))}
                  </mwc-select>
                  <mwc-select id="owner-scaling-group" label="${p("session.launcher.OwnerResourceGroup")}"
                              icon="storage" fixedMenuPosition>
                    ${this.ownerScalingGroups.map((e=>h`
                      <mwc-list-item class="owner-group-dropdown"
                                    id="${e.name}"
                                    value="${e.name}">
                        ${e.name}
                      </mwc-list-item>
                    `))}
                  </mwc-select>
                </div>
                <div class="horizontal layout start-justified center">
                <mwc-checkbox id="owner-enabled">
                </mwc-checkbox>
                <p style="color: rgba(0,0,0,0.6);">${_("session.launcher.LaunchSessionWithAccessKey")}</p>
                </div>
              </div>
            </wl-expansion>
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
                  @selected-items-changed="${()=>this._updateSelectedFolder()}">
                <vaadin-grid-selection-column id="select-column"
                                              flex-grow="0"
                                              text-align="center"
                                              auto-select></vaadin-grid-selection-column>
                <vaadin-grid-filter-column header="${_("session.launcher.FolderToMountList")}"
                                           path="name" resizable
                                           .renderer="${this._boundFolderToMountListRenderer}"></vaadin-grid-filter-column>
                <vaadin-grid-column width="135px"
                                    path=" ${_("session.launcher.FolderAlias")}"
                                    .renderer="${this._boundFolderMapRenderer}"
                                    .headerRenderer="${this._boundPathRenderer}"></vaadin-grid-column>
              </vaadin-grid>
              ${this.vfolders.length>0?h``:h`
                <div class="vertical layout center flex blank-box-medium">
                  <span>${_("session.launcher.NoAvailableFolderToMount")}</span>
                </div>
              `}
            </div>
            </wl-expansion>
            <wl-expansion id="vfolder-mount-preview" class="vfolder" name="vfolder">
              <span slot="title">${_("session.launcher.MountedFolders")}</span>
              <div class="vfolder-mounted-list">
              ${this.selectedVfolders.length>0||this.autoMountedVfolders.length>0?h`
                <ul class="vfolder-list">
                    ${this.selectedVfolders.map((e=>h`
                      <li><mwc-icon>folder_open</mwc-icon>${e}
                      ${e in this.folderMapping?this.folderMapping[e].startsWith("/")?h` (&#10140; ${this.folderMapping[e]})`:h`(&#10140; /home/work/${this.folderMapping[e]})`:h`(&#10140; /home/work/${e})`}
                      </li>
                    `))}
                    ${this.autoMountedVfolders.map((e=>h`
                      <li><mwc-icon>folder_special</mwc-icon>${e.name}</li>
                    `))}
                </ul>
              `:h`
                <div class="vertical layout center flex blank-box-large">
                  <span>${_("session.launcher.NoFolderMounted")}</span>
                </div>
              `}
              </div>

            </wl-expansion>
          </div>
          <div id="progress-03" class="progress center layout fade">
            <div class="horizontal center layout">
              <mwc-select id="scaling-groups" label="${p("session.launcher.ResourceGroup")}"
                          icon="storage" required fixedMenuPosition
                          @selected="${e=>this.updateScalingGroup(!1,e)}">
                ${this.scaling_groups.map((e=>h`
                  <mwc-list-item class="scaling-group-dropdown"
                                 id="${e.name}" graphic="icon"
                                 value="${e.name}">
                    ${e.name}
                  </mwc-list-item>
                `))}
              </mwc-select>
            </div>
            <div class="vertical center layout" style="position:relative;">
              <mwc-select id="resource-templates" label="${this.isEmpty(this.resource_templates_filtered)?"":p("session.launcher.ResourceAllocation")}"
                          icon="dashboard_customize" ?required="${!this.isEmpty(this.resource_templates_filtered)}" fixedMenuPosition>
                <mwc-list-item ?selected="${this.isEmpty(this.resource_templates_filtered)}" style="display:none!important;"></mwc-list-item>
                <h5 style="font-size:12px;padding: 0 10px 3px 15px;margin:0; border-bottom:1px solid #ccc;"
                    role="separator" disabled="true" class="horizontal layout center">
                  <div style="width:110px;">Name</div>
                  <div style="width:50px;text-align:right;">CPU</div>
                  <div style="width:50px;text-align:right;">RAM</div>
                  <div style="width:50px;text-align:right;">${_("session.launcher.SharedMemory")}</div>
                  <div style="width:90px;text-align:right;">${_("session.launcher.Accelerator")}</div>
                </h5>
                ${this.resource_templates_filtered.map((e=>h`
                  <mwc-list-item value="${e.name}"
                            id="${e.name}-button"
                            @click="${e=>this._chooseResourceTemplate(e)}"
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
                      <div style="width:60px;text-align:right;">${e.shmem?h`
                        ${parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(e.shared_memory,"g")).toFixed(2)} GB
                      `:h`64MB`}
                      </div>
                      <div style="width:80px;text-align:right;">
                        ${e.cuda_device&&e.cuda_device>0?h`${e.cuda_device} CUDA GPU`:h``}
                        ${e.cuda_shares&&e.cuda_shares>0?h`${e.cuda_shares} GPU`:h``}
                        ${e.rocm_device&&e.rocm_device>0?h`${e.rocm_device} ROCM GPU`:h``}
                        ${e.tpu_device&&e.tpu_device>0?h`${e.tpu_device} TPU`:h``}
                      </div>
                      <div style="display:none">)</div>
                    </div>
                  </mwc-list-item>
                `))}
              ${this.isEmpty(this.resource_templates_filtered)?h`
                <mwc-list-item class="resource-button vertical center start layout" role="option"
                               style="height:140px;width:350px;" type="button"
                               flat inverted outlined disabled selected>
                  <div>
                    <h4>${_("session.launcher.NoSuitablePreset")}</h4>
                    <div style="font-size:12px;">Use advanced settings to <br>start custom session</div>
                  </div>
                </mwc-list-item>
              `:h``}
              </mwc-select>
            </div>
            <wl-expansion name="resource-group">
              <span slot="title">${_("session.launcher.CustomAllocation")}</span>
              <div class="vertical layout">
                <mwc-list multi rootTabbable>
                  <mwc-list-item hasMeta class="resource-type">
                    <div>CPU</div>
                    <mwc-icon-button slot="meta" icon="info" class="fg info"
                                     @click="${e=>this._showResourceDescription(e,"cpu")}}"></mwc-icon-button>
                  </mwc-list-item>
                  <li divider role="separator"></li>
                  <mwc-list-item class="slider-list-item">
                    <lablup-slider id="cpu-resource" class="cpu" step="1"
                                   pin snaps expand editable markers
                                   @change="${e=>this._applyResourceValueChanges(e)}"
                                   marker_limit="${this.marker_limit}"
                                   suffix="${p("session.launcher.Core")}"
                                   min="${this.cpu_metric.min}" max="${this.cpu_metric.max}"
                                   value="${this.cpu_request}"></lablup-slider>
                    </mwc-list-item>
                  <mwc-list-item hasMeta class="resource-type">
                    <div>RAM</div>
                    <mwc-icon-button slot="meta" icon="info" class="fg info"
                                     @click="${e=>this._showResourceDescription(e,"mem")}"></mwc-icon-button>
                  </mwc-list-item>
                  <li divider role="separator"></li>
                  <mwc-list-item  class="slider-list-item">
                    <lablup-slider id="mem-resource" class="mem"
                                   pin snaps expand step=0.05 editable markers
                                   @change="${e=>{this._applyResourceValueChanges(e),this._updateShmemLimit()}}"
                                   marker_limit="${this.marker_limit}" suffix="GB"
                                   min="${this.mem_metric.min}" max="${this.mem_metric.max}"
                                   value="${this.mem_request}"></lablup-slider>
                  </mwc-list-item>
                <mwc-list-item hasMeta class="resource-type">
                  <div>${_("session.launcher.SharedMemory")}</div>
                  <mwc-icon-button slot="meta" icon="info" class="fg info"
                    @click="${e=>this._showResourceDescription(e,"shmem")}"></mwc-icon-button>
                </mwc-list-item>
                <li divider role="separator"></li>
                <mwc-list-item class="slider-list-item">
                  <lablup-slider id="shmem-resource" class="mem"
                                 pin snaps step="0.0125" editable markers
                                 @change="${e=>{this._applyResourceValueChanges(e),this._updateShmemLimit()}}"
                                 marker_limit="${this.marker_limit}" suffix="GB"
                                 min="0.0625" max="${this.shmem_metric.max}"
                                 value="${this.shmem_request}"></lablup-slider>
                </mwc-list-item>
                <mwc-list-item hasMeta class="resource-type">
                  <div>GPU</div>
                  <mwc-icon-button slot="meta" icon="info" class="fg info"
                    @click="${e=>this._showResourceDescription(e,"gpu")}"></mwc-icon-button>
                  </mwc-list-item>
                  <li divider role="separator"></li>
                  <mwc-list-item class="slider-list-item">
                  <lablup-slider id="gpu-resource" class="gpu"
                                 pin snaps editable markers step="${this.gpu_step}"
                                 @change="${e=>this._applyResourceValueChanges(e)}"
                                 marker_limit="${this.marker_limit}" suffix="GPU"
                                 min="0.0" max="${this.cuda_device_metric.max}"
                                 value="${this.gpu_request}"></lablup-slider>
                </mwc-list-item>
                <mwc-list-item hasMeta class="resource-type">
                  <div>${_("webui.menu.Sessions")}</div>
                  <mwc-icon-button slot="meta" icon="info" class="fg info"
                    @click="${e=>this._showResourceDescription(e,"session")}}"></mwc-icon-button>
                  </mwc-list-item>   
                  <li divider role="separator"></li>
                  <mwc-list-item class="slider-list-item">
                  <lablup-slider id="session-resource" class="session"
                                 pin snaps editable markers step="1"
                                 @change="${e=>this._applyResourceValueChanges(e)}"
                                 marker_limit="${this.marker_limit}" suffix="#"
                                 min="1" max="${this.concurrency_limit}"
                                 value="${this.session_request}"></lablup-slider>
                </mwc-list-item>
                </mwc-list>
              </div>
            </wl-expansion>
            ${this.cluster_support?h`
              <mwc-select id="cluster-mode" label="${p("session.launcher.ClusterMode")}" required
                          icon="account_tree" fixedMenuPosition
                          value="${this.cluster_mode}" @change="${e=>this._setClusterMode(e)}">
                ${this.cluster_mode_list.map((e=>h`
                  <mwc-list-item
                      class="cluster-mode-dropdown"
                      ?selected="${e===this.cluster_mode}"
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
              <div class="horizontal layout center flex center-justified">
                <mwc-list multi>
                  <mwc-list-item class="resource-type">
                    <div class="resource-type">${_("session.launcher.ClusterSize")}</div>
                  </mwc-list-item>
                  <li divider role="separator"></li>
                  <mwc-list-item class="slider-list-item">
                    <lablup-slider id="cluster-size" class="cluster"
                                   pin snaps expand editable markers step="1"
                                   marker_limit="${this.marker_limit}"
                                   min="${this.cluster_metric.min}" max="${this.cluster_metric.max}"
                                   value="${this.cluster_size}"
                                   @change="${e=>this._applyResourceValueChanges(e,!1)}"
                                   suffix="${"single-node"===this.cluster_mode?p("session.launcher.Container"):p("session.launcher.Node")}"></lablup-slider>
                  </mwc-list-item>
                </mwc-list>
              </div>
            `:h``}
            <wl-expansion name="hpc-option-group">
              <span slot="title">${_("session.launcher.HPCOptimization")}</span>
              <div class="vertical center layout">
                <div class="horizontal center center-justified flex layout">
                  <div style="width:313px;">${_("session.launcher.SwitchOpenMPoptimization")}</div>
                  <mwc-switch id="OpenMPswitch" selected @click="${this._toggleHPCOptimization}"></mwc-switch>
                </div>
                <div id="HPCOptimizationOptions" style="display:none;">
                  <div class="horizontal center layout">
                    <div style="width:200px;">${_("session.launcher.NumOpenMPthreads")}</div>
                    <mwc-textfield id="OpenMPCore" type="number" placeholder="1"
                                   value="" min="0" max="1000" step="1" style="width:120px;"
                                   pattern="[0-9]+" @change="${e=>this._validateInput(e)}">
                    </mwc-textfield>
                    <mwc-icon-button icon="info" class="fg green info"
                                     @click="${e=>this._showResourceDescription(e,"openmp-optimization")}"></mwc-icon-button>
                  </div>
                  <div class="horizontal center layout">
                    <div style="width:200px;">${_("session.launcher.NumOpenBLASthreads")}</div>
                    <mwc-textfield id="OpenBLASCore" type="number" placeholder="1"
                                   value="" min="0" max="1000" step="1" style="width:120px;"
                                   pattern="[0-9]+" @change="${e=>this._validateInput(e)}">
                    </mwc-textfield>
                    <mwc-icon-button icon="info" class="fg green info"
                                      @click="${e=>this._showResourceDescription(e,"openmp-optimization")}"></mwc-icon-button>
                  </div>
                </div>
              </div>
            </wl-expansion>
          </div>
          <div id="progress-04" class="progress center layout fade">
            <p class="title">${_("session.SessionInfo")}</p>
            <div class="vertical layout center center-justified cluster-total-allocation-container">
              <div class="horizontal center center-justified layout">
                ${this._preProcessingSessionInfo()?h`
                  <img alt="language icon"
                       src="resources/icons/${null===(e=this.resourceBroker.imageInfo[this.sessionInfoObj.environment])||void 0===e?void 0:e.icon}"
                       onerror="this.src='resources/icons/default.png'"
                       style="width:32px;height:32px;margin-left:8px;margin-right:8px;margin-bottom:8px;" />
                  <div class="vertical layout">
                    <lablup-shields app="${((null===(t=this.resourceBroker.imageInfo[this.sessionInfoObj.environment])||void 0===t?void 0:t.name)||this.sessionInfoObj.environment).toUpperCase()}"
                                    color="green"
                                    description="${this.sessionInfoObj.version[0]}"
                                    ui="round"
                                    style="margin-right:3px;"></lablup-shields>
                    <div class="horizontal layout">
                      ${this.sessionInfoObj.version.map(((e,t)=>t>0?h`
                             <lablup-shields color="green" description="${e}" ui="round"
                               style="margin-top:3px;margin-right:3px;"></lablup-shields>
                           `:h``))}
                    </div>
                    <lablup-shields color="blue"
                                    description="${this.sessionType.toUpperCase()}"
                                    ui="round"
                                    style="margin-top:3px;margin-right:3px;margin-bottom:9px;"></lablup-shields>
                  </div>
                `:h``}
              </div>
            </div>
            <p class="title">${_("session.launcher.TotalAllocation")}</p>
            <div class="vertical layout center center-justified cluster-total-allocation-container">
              <div id="cluster-allocation-pane" style="position:relative;${this.cluster_size<=1?"display:none;":""}">
                <div class="horizontal layout">
                  <div class="vertical layout center center-justified resource-allocated">
                    <p>${_("session.launcher.CPU")}</p>
                    <span>${this.cpu_request*this.cluster_size*this.session_request}</span>
                    <p>Core</p>
                  </div>
                  <div class="vertical layout center center-justified resource-allocated">
                    <p>${_("session.launcher.Memory")}</p>
                    <span>${this._roundResourceAllocation(this.mem_request*this.cluster_size*this.session_request,1)}</span>
                    <p>GB</p>
                  </div>
                  <div class="vertical layout center center-justified resource-allocated">
                    <p>${_("session.launcher.SharedMemoryAbbr")}</p>
                    <span>${this._conditionalGBtoMB(this.shmem_request*this.cluster_size*this.session_request)}</span>
                    <p>${this._conditionalGBtoMBunit(this.shmem_request*this.cluster_size*this.session_request)}</p>
                  </div>
                  <div class="vertical layout center center-justified resource-allocated">
                    <p>${_("session.launcher.GPU")}</p>
                    <span>${this._roundResourceAllocation(this.gpu_request*this.cluster_size*this.session_request,2)}</span>
                    <p>${_("session.launcher.GPUSlot")}</p>
                  </div>
                </div>
                <div style="height:1em"></div>
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
                      <span>${this._roundResourceAllocation(this.mem_request,1)}</span>
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
                    <span style="text-align:center;">${"single-node"===this.cluster_mode?_("session.launcher.SingleNode"):_("session.launcher.MultiNode")}</span>
                  </div>
                  <p class="small">${_("session.launcher.AllocateNode")}</p>
                </div>
              </div>
            </div>
            <p class="title">${_("session.launcher.MountedFolders")}</p>
            <div id="mounted-folders-container">
              ${this.selectedVfolders.length>0||this.autoMountedVfolders.length>0?h`
                <ul class="vfolder-list">
                  ${this.selectedVfolders.map((e=>h`
                    <li><mwc-icon>folder_open</mwc-icon>${e}
                    ${e in this.folderMapping?this.folderMapping[e].startsWith("/")?h` (&#10140; ${this.folderMapping[e]})`:h`(&#10140; /home/work/${this.folderMapping[e]})`:h`(&#10140; /home/work/${e})`}
                    </li>
                  `))}
                  ${this.autoMountedVfolders.map((e=>h`
                    <li><mwc-icon>folder_special</mwc-icon>${e.name}</li>
                  `))}
                </ul>
              `:h`
                <div class="vertical layout center flex blank-box">
                  <span>${_("session.launcher.NoFolderMounted")}</span>
                </div>
              `}
            </div>
            <p class="title">${_("session.launcher.EnvironmentVariablePaneTitle")}</p>
            <div class="environment-variables-container">
              ${this.environ.length>0?h`
                <div class="horizontal flex center center-justified layout" style="overflow-x:hidden;">
                  <div role="listbox">
                    <h4>${p("session.launcher.EnvironmentVariable")}</h4>
                    ${this.environ.map((e=>h`
                      <wl-textfield disabled value="${e.name}"></wl-textfield>
                    `))}
                  </div>
                  <div role="listbox" style="margin-left:15px;">
                    <h4>${p("session.launcher.EnvironmentVariableValue")}</h4>
                    ${this.environ.map((e=>h`
                      <wl-textfield disabled value="${e.value}"></wl-textfield>
                    `))}
                  </div>
                </div>
              `:h`
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
          ${this.environ.forEach(((e,t)=>h`
      <div class="row">
        <wl-textfield type="text" value=${e.name}></wl-textfield>
        <wl-textfield type="text" value=${e.value}></wl-textfield>
        <wl-button fab flat class="fg pink" @click=${e=>this._removeEnvItem(e)}>
          <wl-icon>remove</wl-icon>
        </wl-button>
      </div>
    `))}
          <div class="row">
            <wl-textfield type="text"></wl-textfield>
            <wl-textfield type="text"></wl-textfield>
            <wl-button fab flat class="fg pink" @click=${()=>this._appendEnvRow()}>
              <wl-icon>add</wl-icon>
            </wl-button>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              icon="delete"
              label="${p("button.DeleteAll")}"
              @click="${()=>this._clearRows()}"></mwc-button>
          <mwc-button
              unelevated
              slot="footer"
              icon="check"
              label="${p("button.Save")}"
              @click="${()=>this.modifyEnv()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="help-description" fixed backdrop>
        <span slot="title">${this._helpDescriptionTitle}</span>
        <div slot="content" class="horizontal layout center" style="margin:5px;">
        ${""==this._helpDescriptionIcon?h``:h`
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
              label="${p("button.Cancel")}"
              @click="${()=>this.closeDialog("env-config-confirmation")}"
              style="width:auto;margin-right:10px;">
          </mwc-button>
          <mwc-button
              unelevated
              id="env-config-reset-button"
              label="${p("button.DismissAndProceed")}"
              @click="${()=>this._closeAndResetEnvInput()}"
              style="width:auto;">
          </mwc-button>
        </div>
      </backend-ai-dialog>
    `}};e([i("#image-name")],dt.prototype,"manualImageName",void 0),e([t({type:Boolean})],dt.prototype,"is_connected",void 0),e([t({type:Boolean})],dt.prototype,"enableLaunchButton",void 0),e([t({type:Boolean})],dt.prototype,"hideLaunchButton",void 0),e([t({type:String})],dt.prototype,"location",void 0),e([t({type:String})],dt.prototype,"mode",void 0),e([t({type:String})],dt.prototype,"newSessionDialogTitle",void 0),e([t({type:String})],dt.prototype,"importScript",void 0),e([t({type:String})],dt.prototype,"importFilename",void 0),e([t({type:Object})],dt.prototype,"imageRequirements",void 0),e([t({type:Object})],dt.prototype,"resourceLimits",void 0),e([t({type:Object})],dt.prototype,"userResourceLimit",void 0),e([t({type:Object})],dt.prototype,"aliases",void 0),e([t({type:Object})],dt.prototype,"tags",void 0),e([t({type:Object})],dt.prototype,"icons",void 0),e([t({type:Object})],dt.prototype,"imageInfo",void 0),e([t({type:String})],dt.prototype,"kernel",void 0),e([t({type:Array})],dt.prototype,"versions",void 0),e([t({type:Array})],dt.prototype,"languages",void 0),e([t({type:Number})],dt.prototype,"marker_limit",void 0),e([t({type:String})],dt.prototype,"gpu_mode",void 0),e([t({type:Array})],dt.prototype,"gpu_modes",void 0),e([t({type:Number})],dt.prototype,"gpu_step",void 0),e([t({type:Object})],dt.prototype,"cpu_metric",void 0),e([t({type:Object})],dt.prototype,"mem_metric",void 0),e([t({type:Object})],dt.prototype,"shmem_metric",void 0),e([t({type:Object})],dt.prototype,"cuda_device_metric",void 0),e([t({type:Object})],dt.prototype,"cuda_shares_metric",void 0),e([t({type:Object})],dt.prototype,"rocm_device_metric",void 0),e([t({type:Object})],dt.prototype,"tpu_device_metric",void 0),e([t({type:Object})],dt.prototype,"cluster_metric",void 0),e([t({type:Array})],dt.prototype,"cluster_mode_list",void 0),e([t({type:Boolean})],dt.prototype,"cluster_support",void 0),e([t({type:Object})],dt.prototype,"images",void 0),e([t({type:Object})],dt.prototype,"total_slot",void 0),e([t({type:Object})],dt.prototype,"total_resource_group_slot",void 0),e([t({type:Object})],dt.prototype,"total_project_slot",void 0),e([t({type:Object})],dt.prototype,"used_slot",void 0),e([t({type:Object})],dt.prototype,"used_resource_group_slot",void 0),e([t({type:Object})],dt.prototype,"used_project_slot",void 0),e([t({type:Object})],dt.prototype,"available_slot",void 0),e([t({type:Number})],dt.prototype,"concurrency_used",void 0),e([t({type:Number})],dt.prototype,"concurrency_max",void 0),e([t({type:Number})],dt.prototype,"concurrency_limit",void 0),e([t({type:Number})],dt.prototype,"max_containers_per_session",void 0),e([t({type:Array})],dt.prototype,"vfolders",void 0),e([t({type:Array})],dt.prototype,"selectedVfolders",void 0),e([t({type:Array})],dt.prototype,"autoMountedVfolders",void 0),e([t({type:Array})],dt.prototype,"nonAutoMountedVfolders",void 0),e([t({type:Object})],dt.prototype,"folderMapping",void 0),e([t({type:Object})],dt.prototype,"used_slot_percent",void 0),e([t({type:Object})],dt.prototype,"used_resource_group_slot_percent",void 0),e([t({type:Object})],dt.prototype,"used_project_slot_percent",void 0),e([t({type:Array})],dt.prototype,"resource_templates",void 0),e([t({type:Array})],dt.prototype,"resource_templates_filtered",void 0),e([t({type:String})],dt.prototype,"default_language",void 0),e([t({type:Number})],dt.prototype,"cpu_request",void 0),e([t({type:Number})],dt.prototype,"mem_request",void 0),e([t({type:Number})],dt.prototype,"shmem_request",void 0),e([t({type:Number})],dt.prototype,"gpu_request",void 0),e([t({type:String})],dt.prototype,"gpu_request_type",void 0),e([t({type:Number})],dt.prototype,"session_request",void 0),e([t({type:Boolean})],dt.prototype,"_status",void 0),e([t({type:Number})],dt.prototype,"num_sessions",void 0),e([t({type:String})],dt.prototype,"scaling_group",void 0),e([t({type:Array})],dt.prototype,"scaling_groups",void 0),e([t({type:Array})],dt.prototype,"sessions_list",void 0),e([t({type:Boolean})],dt.prototype,"metric_updating",void 0),e([t({type:Boolean})],dt.prototype,"metadata_updating",void 0),e([t({type:Boolean})],dt.prototype,"aggregate_updating",void 0),e([t({type:Object})],dt.prototype,"scaling_group_selection_box",void 0),e([t({type:Object})],dt.prototype,"resourceGauge",void 0),e([t({type:String})],dt.prototype,"sessionType",void 0),e([t({type:Boolean})],dt.prototype,"ownerFeatureInitialized",void 0),e([t({type:String})],dt.prototype,"ownerDomain",void 0),e([t({type:Array})],dt.prototype,"ownerKeypairs",void 0),e([t({type:Array})],dt.prototype,"ownerGroups",void 0),e([t({type:Array})],dt.prototype,"ownerScalingGroups",void 0),e([t({type:Boolean})],dt.prototype,"project_resource_monitor",void 0),e([t({type:Object})],dt.prototype,"version_selector",void 0),e([t({type:Boolean})],dt.prototype,"_default_language_updated",void 0),e([t({type:Boolean})],dt.prototype,"_default_version_updated",void 0),e([t({type:String})],dt.prototype,"_helpDescription",void 0),e([t({type:String})],dt.prototype,"_helpDescriptionTitle",void 0),e([t({type:String})],dt.prototype,"_helpDescriptionIcon",void 0),e([t({type:Number})],dt.prototype,"max_cpu_core_per_session",void 0),e([t({type:Number})],dt.prototype,"max_mem_per_container",void 0),e([t({type:Number})],dt.prototype,"max_cuda_device_per_container",void 0),e([t({type:Number})],dt.prototype,"max_cuda_shares_per_container",void 0),e([t({type:Number})],dt.prototype,"max_shm_per_container",void 0),e([t({type:Boolean})],dt.prototype,"allow_manual_image_name_for_session",void 0),e([t({type:Object})],dt.prototype,"resourceBroker",void 0),e([t({type:Number})],dt.prototype,"cluster_size",void 0),e([t({type:String})],dt.prototype,"cluster_mode",void 0),e([t({type:Object})],dt.prototype,"deleteEnvInfo",void 0),e([t({type:Object})],dt.prototype,"deleteEnvRow",void 0),e([t({type:Array})],dt.prototype,"environ",void 0),e([t({type:Object})],dt.prototype,"environ_values",void 0),e([t({type:Object})],dt.prototype,"vfolder_select_expansion",void 0),e([t({type:Number})],dt.prototype,"currentIndex",void 0),e([t({type:Number})],dt.prototype,"progressLength",void 0),e([t({type:Object})],dt.prototype,"_grid",void 0),e([t({type:Boolean})],dt.prototype,"_debug",void 0),e([t({type:Object})],dt.prototype,"_boundFolderToMountListRenderer",void 0),e([t({type:Object})],dt.prototype,"_boundFolderMapRenderer",void 0),e([t({type:Object})],dt.prototype,"_boundPathRenderer",void 0),e([t({type:Boolean})],dt.prototype,"useScheduledTime",void 0),e([t({type:Object})],dt.prototype,"schedulerTimer",void 0),e([t({type:Object})],dt.prototype,"sessionInfoObj",void 0),dt=e([s("backend-ai-session-launcher")],dt);
