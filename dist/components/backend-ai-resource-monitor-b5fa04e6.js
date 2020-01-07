import{j as e,b as t,e as s,h as i,p as r,k as a,q as o,m as n,Q as l,B as c,I as u,f as p,g as d,i as h,c as m}from"./iron-flex-layout-classes-c9b3b8db.js";import"./iron-icon-6ebc5e38.js";import"./paper-input-8c401120.js";import"./paper-item-f17203a2.js";import"./mwc-icon-button-9cca9f8c.js";import"./lablup-shields-a4f79694.js";import"./iron-icons-916074b9.js";import{I as g}from"./input-behavior-22f7c31e.js";import"./index-0bbfdd62.js";import"./resize-b38d87a6.js";import{B as b}from"./backend-ai-painkiller-d4aac244.js";import"./index-ca42e7f9.js";import{B as _}from"./backend-ai-page-4ba904fc.js";import{R as v}from"./radio-behavior-815c3cf2.js";import"./backend-ai-dropdown-menu-4b28629e.js";import"./paper-dropdown-menu-c95c1ae5.js";import"./index-65d3c66e.js";import"./index-65211c35.js";let y=class extends v{render(){return i` <div id="dot"></div> <wl-ripple id="ripple" .target="${this}" focusable overlay unbounded centered initialDuration="200"></wl-ripple> <slot></slot> ${this.renderFormElement()} `}};y.styles=[...v.styles,e(":host{--_radio-bg:var(--radio-bg,transparent);--_radio-color:var(--radio-color,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))));background:var(--_radio-bg);color:var(--_radio-color);width:var(--radio-size,1.25rem);height:var(--radio-size,1.25rem);border:var(--radio-border-config,.125rem solid) currentColor;border-radius:var(--radio-border-radius,100%);transition:var(--radio-transition,background var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),border-color var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));position:relative;display:inline-flex;align-items:center;justify-content:center;outline:none;-webkit-user-select:none;user-select:none}:host(:not([disabled])){cursor:pointer}:host([checked]){--_radio-bg:var(--radio-bg-checked,transparent);--_radio-color:var(--radio-color-checked,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}:host([checked]) #dot{transform:scale(1)}:host(:focus),:host(:hover){will-change:border,background}:host(:focus) #dot,:host(:hover) #dot{will-change:transform,background}:host([disabled]){--_radio-bg:var(--radio-bg-disabled,transparent);--_radio-color:var(--radio-color-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));pointer-events:none}:host([disabled][checked]){--_radio-bg:var(--radio-bg-disabled-checked,transparent);--_radio-color:var(--radio-color-disabled-checked,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))))}#dot{background:currentColor;width:var(--radio-dot-size,.625rem);height:var(--radio-dot-size,.625rem);border-radius:var(--radio-dot-border-radius,100%);transition:var(--radio-dot-transition,transform var(--transition-duration-medium,.18s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));transform:scale(0)}#ripple{transform:var(--radio-ripple-transform,translate(-50%,-50%) scale(1.8))}")],y=t([s("wl-radio")],y);let f=class extends g{constructor(){super(...arguments),this.role="slider",this.thumbLabel=!1,this.min=0,this.max=100,this.bufferMin=0,this.bufferMax=100}get $interactiveElement(){return this.$slider}get perc(){return(this.$slider.valueAsNumber-this.min)/(this.max-this.min)}get bufferPerc(){return((this.bufferValue||0)-this.bufferMin)/(this.bufferMax-this.bufferMin)}updated(e){super.updated(e),this.updateBackground()}setValue(e){super.setValue(e),null!=this.$slider&&(this.$slider.value=e,this.updateBackground(),this.requestUpdate().then())}updateBackground(){requestAnimationFrame(()=>{this.style.setProperty("--_perc",this.perc.toString()),this.style.setProperty("--_buffer-perc",this.bufferPerc.toString())})}sliderValueChanged(){this.value=this.$slider.value,this.requestUpdate().then()}renderFormElement(e,t,s,r){return i` <input type="range" style="${n(t)}" id="${n(e)}" .value="${this.value}" ?required="${this.required}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" aria-label="${n(this.label)}" name="${n(this.name)}" autocomplete="${n(this.autocomplete)}" min="${n(this.min)}" max="${n(this.max)}" step="${n(this.step)}" @input="${s||(()=>{})}" tabindex="${r||this.disabled?-1:0}"> `}render(){return i` <div id="container"> <slot id="before" name="before"></slot> <div id="wrapper"> <div id="label">${this.label}</div> <div id="slot-wrapper"> ${this.renderFormElement("slider",void 0,this.sliderValueChanged)} ${this.thumbLabel?i` <div id="thumb-container"> <div id="thumb-label"><slot name="thumb-label">${this.value}</slot></div> </div> `:l} <slot id="slot"></slot> </div> ${this.renderFormElement(this.formElementId,"display: none",void 0,"-1")} </div> <slot id="after" name="after"></slot> </div> `}};f.styles=[...g.styles,e(':host{--_buffer-perc:0;--_perc:0;--_slider-track-bg:var(--slider-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.3));--_slider-track-bg-buffer:var(--slider-bg-buffer,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.6));--_slider-track-bg-active:var(--slider-bg-active,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_slider-thumb-bg:var(--slider-thumb-bg,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}:host([disabled]){--_slider-track-bg:var(--slider-bg-disabled,hsla(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%)),0.3));--_slider-track-bg-buffer:var(--slider-bg-buffer-disabled,hsla(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%)),0.6));--_slider-track-bg-active:var(--slider-bg-active-disabled,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))));--_slider-thumb-bg:var(--slider-thumb-bg-disabled,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))))}#container{overflow:visible;border:none}#slider{height:var(--slider-height,.3125rem);background:linear-gradient(90deg,var(--_slider-track-bg-active) 0,var(--_slider-track-bg-active) calc(var(--_perc) * 100%),var(--_slider-track-bg-buffer) calc(var(--_perc) * 100%),var(--_slider-track-bg-buffer) calc(var(--_buffer-perc) * 100%),var(--_slider-track-bg) calc(var(--_buffer-perc) * 100%),var(--_slider-track-bg));cursor:grab;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;outline:none;box-sizing:border-box;margin:0;border-radius:0;top:calc((var(--slider-height, .3125rem) * -1) / 2)}#slider,#thumb-container{width:100%;position:relative}#thumb-label{--_thumb-label-transform-y:0.625rem;left:calc((var(--_perc) * 100%) - (var(--slider-thumb-size, .75rem) * var(--_perc)));transform:translate(calc(-50% + (var(--slider-thumb-size, .75rem) / 2)),var(--_thumb-label-transform-y));width:var(--slider-thumb-label-size,1.875rem);height:var(--slider-thumb-label-size,1.875rem);border-radius:var(--slider-thumb-label-border-radius,100%);color:var(--slider-thumb-label-color,hsl(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));font-size:var(--slider-thumb-label-font-size,.75rem);transition:var(--slider-thumb-label-transition,opacity var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));opacity:0;display:flex;align-items:center;justify-content:center;pointer-events:none;text-overflow:ellipsis;bottom:calc(100% + var(--slider-thumb-size, .75rem) + var(--slider-height, .3125rem) + var(--slider-thumb-space, .75rem))}#thumb-label,#thumb-label:before{background:var(--slider-thumb-label-bg,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));position:absolute}#thumb-label:before{content:"";border-radius:0 50% 50% 50%;transform:rotate(225deg);width:100%;left:0;top:0;height:100%;z-index:-1}#slider:focus+#thumb-container #thumb-label,:host:focus #thumb-label{--_thumb-label-transform-y:0;opacity:1}#slider::-webkit-slider-thumb{background:var(--_slider-thumb-bg);width:var(--slider-thumb-size,.75rem);height:var(--slider-thumb-size,.75rem);border-radius:var(--slider-thumb-border-radius,100%);-webkit-transition:var(--slider-thumb-transition,transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));transition:var(--slider-thumb-transition,transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));box-shadow:0 0 0 0 var(--slider-thumb-focus-ring-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.1));-webkit-appearance:none;appearance:none;border:none;cursor:grab;position:relative}#slider::-moz-range-thumb{background:var(--_slider-thumb-bg);width:var(--slider-thumb-size,.75rem);height:var(--slider-thumb-size,.75rem);border-radius:var(--slider-thumb-border-radius,100%);-moz-transition:var(--slider-thumb-transition,transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));transition:var(--slider-thumb-transition,transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),box-shadow var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));box-shadow:0 0 0 0 var(--slider-thumb-focus-ring-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.1));-moz-appearance:none;appearance:none;border:none;cursor:grab;position:relative}#slider:focus::-webkit-slider-thumb{transform:var(--slider-thumb-transform-focus,scale(1.2));box-shadow:0 0 0 var(--slider-thumb-focus-ring-size,.75rem) var(--slider-thumb-focus-ring-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.1))}#slider:focus::-moz-range-thumb{transform:var(--slider-thumb-transform-focus,scale(1.2));box-shadow:0 0 0 var(--slider-thumb-focus-ring-size,.75rem) var(--slider-thumb-focus-ring-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.1))}')],t([r({type:String,reflect:!0}),a("design:type",String)],f.prototype,"role",void 0),t([r({type:Boolean}),a("design:type",Boolean)],f.prototype,"thumbLabel",void 0),t([r({type:Number}),a("design:type",Number)],f.prototype,"min",void 0),t([r({type:Number}),a("design:type",Number)],f.prototype,"max",void 0),t([r({type:Number}),a("design:type",Number)],f.prototype,"step",void 0),t([r({type:Number}),a("design:type",Number)],f.prototype,"bufferMin",void 0),t([r({type:Number}),a("design:type",Number)],f.prototype,"bufferMax",void 0),t([r({type:Number}),a("design:type",Number)],f.prototype,"bufferValue",void 0),t([o("#slider"),a("design:type",HTMLInputElement)],f.prototype,"$slider",void 0),f=t([s("wl-slider")],f);let w=class extends _{constructor(){super(),this.direction="horizontal",this.location="",this.supports=Object(),this.supportImages=Object(),this.resourceLimits=Object(),this.userResourceLimit=Object(),this.aliases=Object(),this.tags=Object(),this.imageInfo=Object(),this.imageNames=Object(),this.gpu_step=.05,this.cpu_metric={min:"1",max:"1"},this.mem_metric={min:"1",max:"1"},this.shmem_metric={min:.0625,max:1,preferred:.0625},this.gpu_metric={min:0,max:0},this.tpu_metric={min:"1",max:"1"},this.aggregate_updating=!1,this.resourceGauge=Object(),this.ownerFeatureInitialized=!1,this.ownerDomain="",this.project_resource_monitor=!1,this.active=!1,this.ownerKeypairs=[],this.ownerGroups=[],this.ownerScalingGroups=[],this.init_resource()}static get is(){return"backend-ai-resource-monitor"}static get styles(){return[c,u,p,d,h,m`
        wl-card h4 {
          padding: 5px 20px;
          border-bottom: 1px solid #dddddd;
          font-weight: 100;
        }

        paper-slider {
          width: 285px !important;
          --paper-slider-input: {
            width: 120px !important;
            min-width: 120px !important;
          };
          --paper-slider-height: 3px;
        }

        .slider-input {
          width: 100px;
        }

        paper-slider.mem,
        paper-slider.shmem {
          --paper-slider-knob-color: var(--paper-orange-400);
          --paper-slider-active-color: var(--paper-orange-400);
        }

        paper-slider.cpu {
          --paper-slider-knob-color: var(--paper-light-green-400);
          --paper-slider-active-color: var(--paper-light-green-400);
        }

        paper-slider.gpu {
          --paper-slider-knob-color: var(--paper-cyan-400);
          --paper-slider-active-color: var(--paper-cyan-400);
        }

        paper-progress {
          width: 90px;
          --paper-progress-height: 5px;
          --paper-progress-active-color: #98be5a;
          --paper-progress-secondary-color: #3677eb;
          --paper-progress-transition-duration: 0.08s;
          --paper-progress-transition-timing-function: ease;
          --paper-progress-transition-delay: 0s;
        }

        paper-progress.project-bar {
          --paper-progress-height: 15px;
        }

        paper-progress.start-bar {
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          --paper-progress-active-color: #3677eb;
        }

        paper-progress.middle-bar {
          --paper-progress-active-color: #4f8b46;
        }

        paper-progress.end-bar {
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          --paper-progress-active-color: #98be5a;
        }

        paper-progress.full-bar {
          border-radius: 3px;
          --paper-progress-height: 10px;
        }

        .resources.horizontal .short-indicator paper-progress {
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
        }

        div.caption {
          font-size: 12px;
          width: 100px;
        }

        #resource-gauges.horizontal {
          position: absolute;
          top: 48px;
          z-index: 100;
          left: 160px;
          width: 420px;
          height: 48px;
          color: #ffffff;
          background-color: transparent;
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

        div.resource-type {
          font-size: 14px;
          width: 50px;
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
          width: 120px;
          margin: 5px;
          padding: 0;
          font-size: 14px;
        }

        #new-session-dialog {
          z-index: 100;
        }

        wl-select {
          --input-bg: transparent;
          --input-color: rgb(24, 24, 24);
          --input-color-disabled: rgb(24, 24, 24);
          --input-label-color: rgb(24, 24, 24);
          --input-label-font-size: 10px;
          --input-border-style: 0;
          --input-font-family: 'Quicksand', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", AppleSDGothic, "Apple SD Gothic Neo", NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
        }

        #scaling-group-select {
          width: 250px;
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

        #scaling-groups {
          width: 50%;
        }

        backend-ai-dropdown-menu {
          width: 100%;
        }

        #launch-session {
          --button-bg: var(--paper-red-50);
          --button-bg-hover: var(--paper-red-100);
          --button-bg-active: var(--paper-red-600);
        }

        wl-button.launch-button {
          width: 335px;
          --button-bg: var(--paper-red-50);
          --button-bg-active: var(--paper-red-300);
          --button-bg-hover: var(--paper-red-300);
          --button-bg-active-flat: var(--paper-orange-50);
          --button-color: var(--paper-red-600);
          --button-color-active: red;
          --button-color-hover: red;
        }

        wl-button.resource-button {
          --button-bg: white;
          --button-bg-active: var(--paper-red-600);
          --button-bg-hover: var(--paper-red-600);
          --button-bg-active-flat: var(--paper-orange-50);
          --button-color: #8899aa;
          --button-color-active: red;
          --button-color-hover: red;
        }

        wl-expansion {
          --font-family-serif: 'Quicksand', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", AppleSDGothic, "Apple SD Gothic Neo", NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
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

        wl-button[fab] {
          --button-fab-size: 70px;
          border-radius: 6px;
        }

        wl-label {
          margin-right: 10px;
          outline: none;
        }
      `]}init_resource(){this.versions=["3.6"],this.languages=[],this.gpu_mode="no",this.defaultResourcePolicy="UNLIMITED",this.total_slot={},this.total_sg_slot={},this.total_pj_slot={},this.used_slot={},this.used_sg_slot={},this.used_pj_slot={},this.available_slot={},this.used_slot_percent={},this.used_sg_slot_percent={},this.used_pj_slot_percent={},this.resource_templates=[],this.vfolders=[],this.default_language="",this.launch_ready=!1,this.concurrency_used=0,this.concurrency_max=0,this.concurrency_limit=0,this._status="inactive",this.cpu_request=1,this.mem_request=1,this.shmem_request=.0625,this.gpu_request=0,this.session_request=1,this.scaling_groups=[],this.scaling_group="",this.enable_scaling_group=!1,this.sessions_list=[],this.metric_updating=!1,this.metadata_updating=!1,this.ownerFeatureInitialized=!1,this.ownerDomain="",this.ownerKeypairs=[],this.ownerGroups=[],this.ownerScalingGroups=[]}firstUpdated(){fetch("resources/image_metadata.json").then(e=>e.json()).then(e=>{this.imageInfo=e.imageInfo;for(let e in this.imageInfo)this.tags[e]=[],"name"in this.imageInfo[e]&&(this.aliases[e]=this.imageInfo[e].name,this.imageNames[e]=this.imageInfo[e].name),"label"in this.imageInfo[e]&&this.imageInfo[e].label.forEach(t=>{"category"in t||this.tags[e].push(t.tag)})}),this.shadowRoot.querySelector("#environment").addEventListener("selected-item-label-changed",this.updateLanguage.bind(this)),this.shadowRoot.querySelector("#version").addEventListener("selected-item-label-changed",this.updateMetric.bind(this)),this.resourceGauge=this.shadowRoot.querySelector("#resource-gauges"),document.body.clientWidth<750&&"horizontal"==this.direction&&(this.resourceGauge.style.display="none"),this.notification=window.lablupNotification;const e=this.shadowRoot.querySelector("#gpu-resource");document.addEventListener("backend-ai-resource-refreshed",()=>{this.active&&!1===this.metadata_updating&&(this.metadata_updating=!0,this.aggregateResource("resource-refreshed"),this.metadata_updating=!1)}),e.addEventListener("value-change",()=>{e.value>0?this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!0:this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!1}),this.shadowRoot.querySelector("#use-gpu-checkbox").addEventListener("change",()=>{!0===this.shadowRoot.querySelector("#use-gpu-checkbox").checked?this.shadowRoot.querySelector("#gpu-resource").disabled=this.gpu_metric.min===this.gpu_metric.max:this.shadowRoot.querySelector("#gpu-resource").disabled=!0})}_initAliases(){for(let e in this.aliases)this.aliases[this.aliases[e]]=e}async updateScalingGroup(e=!1,t){if(""!=this.scaling_group&&""!==t.target.value&&t.target.value!==this.scaling_group&&(this.scaling_group=t.target.value,console.log(this.active),this.active)){if("vertical"===this.direction){this.shadowRoot.querySelector("#scaling-group-select-box").firstChild.value=this.scaling_group}this.shadowRoot.querySelector("#scaling-groups").value=this.scaling_group,!0===e?this._refreshResourcePolicy():this.updateMetric("session dialog")}}async _viewStateChanged(e){await this.updateComplete,this.active&&(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.project_resource_monitor=window.backendaiclient._config.allow_project_resource_monitor,this._updatePageVariables()},!0):(this.project_resource_monitor=window.backendaiclient._config.allow_project_resource_monitor,this._updatePageVariables()))}async _updatePageVariables(){if(this.active&&!1===this.metadata_updating){if(this.metadata_updating=!0,this.enable_scaling_group=window.backendaiclient.supports("scaling-group"),!0===this.enable_scaling_group&&""===this.scaling_group){const e=window.backendaiclient.current_group||null;let t=await window.backendaiclient.scalingGroup.list(e);if(this.scaling_groups=t.scaling_groups,"vertical"===this.direction){this.scaling_group=this.scaling_groups[0].name;let e=this.shadowRoot.querySelector("#scaling-group-select-box");e.hasChildNodes()&&e.removeChild(e.firstChild);let t=document.createElement("wl-select");t.label="Resource Group",t.name="scaling-group-select",t.id="scaling-group-select",t.value=this.scaling_group,t.addEventListener("input",this.updateScalingGroup.bind(this,!0));let s=document.createElement("option");s.setAttribute("disabled","true"),s.innerHTML="Select Resource Group",t.appendChild(s),this.scaling_groups.map(e=>{(s=document.createElement("option")).value=e.name,this.scaling_group===e.name?s.selected=!0:s.selected=!1,s.innerHTML=e.name,t.appendChild(s)}),e.appendChild(t)}this.shadowRoot.querySelector("#scaling-groups").addEventListener("selected-item-label-changed",this.updateScalingGroup.bind(this,!1))}let e=["sess_id"];window.backendaiclient.computeSession.list(e=e,status="RUNNING",null,1e3).then(e=>{this.sessions_list=e.compute_session_list.items.map(e=>e.sess_id)}),this._initAliases(),this._refreshResourcePolicy(),this.aggregateResource("update-page-variable"),this.metadata_updating=!1}}_refreshConcurrency(){return window.backendaiclient.keypair.info(window.backendaiclient._config.accessKey,["concurrency_used"]).then(e=>{this.concurrency_used=e.keypair.concurrency_used})}_refreshResourcePolicy(){window.backendaiclient.keypair.info(window.backendaiclient._config.accessKey,["resource_policy","concurrency_used"]).then(e=>{let t=e.keypair.resource_policy;return this.concurrency_used=e.keypair.concurrency_used,window.backendaiclient.resourcePolicy.get(t,["default_for_unspecified","total_resource_slots","max_concurrent_sessions","max_containers_per_session"])}).then(e=>{let t=e.keypair_resource_policy;"UNLIMITED"===t.default_for_unspecified||"DefaultForUnspecified.UNLIMITED"===t.default_for_unspecified?this.defaultResourcePolicy="UNLIMITED":this.defaultResourcePolicy="LIMITED",this.userResourceLimit=JSON.parse(e.keypair_resource_policy.total_resource_slots),this.concurrency_max=t.max_concurrent_sessions,this._refreshImageList(),this._updateGPUMode(),this.updateMetric("refresh resource policy")}).catch(e=>{console.log(e),this.metadata_updating=!1,e&&e.message?(this.notification.text=b.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0)):e&&e.title&&(this.notification.text=b.relieve(e.title),this.notification.show(!0))})}async _launchSessionDialog(){if(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready)this.notification.text="Please wait while initializing...",this.notification.show();else{this.selectDefaultLanguage(),await this.updateMetric("launch session dialog"),this.shadowRoot.querySelector("#gpu-resource").value>0?this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!0:this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!1;const e=this.shadowRoot.querySelector('wl-expansion[name="ownership"]');window.backendaiclient.is_admin?e.style.display="block":e.style.display="none",this.shadowRoot.querySelector("#new-session-dialog").show()}}_updateGPUMode(){window.backendaiclient.getResourceSlots().then(e=>{let t=e;"cuda.device"in t&&(this.gpu_mode="gpu",this.gpu_step=1),"cuda.shares"in t&&(this.gpu_mode="fgpu",this.gpu_step=.05)})}_generateKernelIndex(e,t){return e+":"+t}_newSession(){let e=this.shadowRoot.querySelector("#environment").selectedItem.id,t=this.shadowRoot.querySelector("#version").value,s=this.shadowRoot.querySelector("#session-name").value,i=this.shadowRoot.querySelector("#vfolder").selectedValues;if(this.cpu_request=this.shadowRoot.querySelector("#cpu-resource").value,this.mem_request=this.shadowRoot.querySelector("#mem-resource").value,this.shmem_request=this.shadowRoot.querySelector("#shmem-resource").value,this.gpu_request=this.shadowRoot.querySelector("#gpu-resource").value,this.session_request=this.shadowRoot.querySelector("#session-resource").value,this.num_sessions=this.session_request,this.sessions_list.includes(s))return this.notification.text="Duplicate session name not allowed.",void this.notification.show();this.enable_scaling_group&&(this.scaling_group=this.shadowRoot.querySelector("#scaling-groups").value);let r={};if(window.backendaiclient.isAPIVersionCompatibleWith("v4.20190601")){r.group_name=window.backendaiclient.current_group,r.domain=window.backendaiclient._config.domainName,r.scaling_group=this.scaling_group,r.maxWaitSeconds=5;const e=this.shadowRoot.querySelector("#owner-enabled");if(e&&e.checked&&(r.group_name=this.shadowRoot.querySelector("#owner-group").selectedItemLabel,r.domain=this.ownerDomain,r.scaling_group=this.shadowRoot.querySelector("#owner-scaling-group").selectedItemLabel,r.owner_access_key=this.shadowRoot.querySelector("#owner-accesskey").selectedItemLabel,!(r.group_name&&r.domain&&r.scaling_group&&r.owner_access_key)))return this.notification.text="Not enough ownership information",void this.notification.show()}r.cpu=this.cpu_request,"fgpu"==this.gpu_mode?r.fgpu=this.gpu_request:r.gpu=this.gpu_request,"Infinity"===String(this.shadowRoot.querySelector("#mem-resource").value)?r.mem=String(this.shadowRoot.querySelector("#mem-resource").value):r.mem=String(this.mem_request)+"g",window.backendaiclient.isAPIVersionCompatibleWith("v4.20190601")&&(r.shmem=String(this.shmem_request)+"g"),!0!==this.shadowRoot.querySelector("#use-gpu-checkbox").checked&&("fgpu"==this.gpu_mode?r.fgpu=0:r.gpu=0),0==s.length&&(s=this.generateSessionId()),0!==i.length&&(r.mounts=i);const a=this._generateKernelIndex(e,t);this.shadowRoot.querySelector("#launch-button").disabled=!0,this.shadowRoot.querySelector("#launch-button-msg").textContent="Preparing...",this.notification.text="Preparing session...",this.notification.show();let o=[];const n=this._getRandomString();if(this.num_sessions>1)for(let e=1;e<=this.num_sessions;e++){let t={kernelName:a,sessionName:`${s}-${n}-${e}`,config:r};o.push(t)}else o.push({kernelName:a,sessionName:s,config:r});const l=o.map(e=>this._createKernel(e.kernelName,e.sessionName,e.config));Promise.all(l).then(e=>{this.shadowRoot.querySelector("#new-session-dialog").hide(),this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent="Launch",this.aggregateResource("session-creation");let t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t)}).catch(e=>{this.metadata_updating=!1,console.log(e),e&&e.message?(this.notification.text=b.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0)):e&&e.title&&(this.notification.text=b.relieve(e.title),this.notification.show(!0));let t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t),this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent="Launch"})}_getRandomString(){let e=Math.floor(52*Math.random()*52*52);const t=e=>e<26?String.fromCharCode(65+e):String.fromCharCode(97+e-26);let s="";for(let i=0;i<3;i++)s+=t(e%52),e=Math.floor(e/52);return s}_createKernel(e,t,s){return window.backendaiclient.createKernel(e,t,s)}_hideSessionDialog(){this.shadowRoot.querySelector("#new-session-dialog").hide()}_guessHumanizedNames(e){const t=this.imageNames;let s="",i=null,r="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";return Object.keys(t).forEach((a,o)=>{let n=e.split("/");(s=2==n.length?n[1]:n[2])===a?(i=t[a],r=a):""===s&&e.endsWith(a)&&a.length<r.length&&(i=t[a],r=a)}),i}_updateEnvironment(){const e=Object.keys(this.supports);if(void 0===e)return;e.sort((e,t)=>this.supportImages[e].group>this.supportImages[t].group?1:-1);let t="";this.languages=[],e.forEach((e,s)=>{if(!Object.keys(this.aliases).includes(e)){const t=this._guessHumanizedNames(e);this.aliases[e]=null!==t?t:e}let i,r,a=e.split("/"),o=a[0];2==a.length?(i="",r=a[1]):(i=a[1],r=a[2]);const n=this.aliases[e];let l;l=void 0!==n?n.split(" (")[0]:r;let c=[];r in this.tags&&(c=c.concat(this.tags[r])),""!=i&&c.push(i),t!==this.supportImages[e].group&&(this.languages.push({name:"",registry:"",prefix:"",kernelname:"",alias:"",basename:this.supportImages[e].group,tags:[],clickable:!1}),t=this.supportImages[e].group),this.languages.push({name:e,registry:o,prefix:i,kernelname:r,alias:n,basename:l,tags:c})}),this._initAliases()}_updateVersions(e){e in this.supports&&(this.versions=this.supports[e],this.versions.sort(),this.versions.reverse()),void 0!==this.versions&&(this.shadowRoot.querySelector("#version").value=this.versions[0],this.updateMetric("update versions"));const t=this.shadowRoot.querySelector("#version paper-listbox");t&&(t.selected=0)}generateSessionId(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=0;s<8;s++)e+=t.charAt(Math.floor(Math.random()*t.length));return e+"-console"}async _updateVirtualFolderList(){window.backendaiclient.vfolder.list(window.backendaiclient.current_group_id()).then(e=>{this.vfolders=e})}async _aggregateResourceUse(e=""){if(!0===this.aggregate_updating)return;this.aggregate_updating=!0;let t={},s={},i={};return window.backendaiclient.keypair.info(window.backendaiclient._config.accessKey,["concurrency_used"]).then(e=>{let t;if(this.concurrency_used=e.keypair.concurrency_used,1==this.enable_scaling_group&&this.scaling_groups.length>0){let e="";""!==this.scaling_group?e=this.scaling_group:(e=this.scaling_groups[0].name,this.scaling_group=e),t={group:window.backendaiclient.current_group,scaling_group:e}}else t={group:window.backendaiclient.current_group};return window.backendaiclient.resourcePreset.check(t)}).then(e=>{if(e.presets){let t=e.presets,s=[];t.forEach(e=>{!0===e.allocatable&&("cuda.shares"in e.resource_slots?e.gpu=e.resource_slots["cuda.shares"]:e.gpu="cuda.device"in e?e.resource_slots["cuda.device"]:0,e.cpu=e.resource_slots.cpu,e.mem=window.backendaiclient.utils.changeBinaryUnit(e.resource_slots.mem,"g"),s.push(e))}),this.resource_templates=s}let r=e.keypair_remaining,a=e.keypair_using,o=e.group_limits,n=e.group_using;this.scaling_group;let l=e.scaling_groups[this.scaling_group].using,c=e.scaling_groups[this.scaling_group].remaining,u=e.keypair_limits;"cpu"in u&&(s.cpu_slot=Number(c.cpu)+Number(l.cpu),i.cpu_slot=Number(o.cpu),"Infinity"===u.cpu?t.cpu_slot=s.cpu_slot:t.cpu_slot=u.cpu),"mem"in u&&(s.mem_slot=parseFloat(window.backendaiclient.utils.changeBinaryUnit(c.mem,"g"))+parseFloat(window.backendaiclient.utils.changeBinaryUnit(l.mem,"g")),i.mem_slot=parseFloat(window.backendaiclient.utils.changeBinaryUnit(o.mem,"g")),"Infinity"===u.mem?t.mem_slot=s.mem_slot:t.mem_slot=parseFloat(window.backendaiclient.utils.changeBinaryUnit(u.mem,"g"))),t.mem_slot=t.mem_slot.toFixed(2),s.mem_slot=s.mem_slot.toFixed(2),"cuda.device"in u&&(s.gpu_slot=Number(c["cuda.device"])+Number(l["cuda.device"]),i.gpu_slot=Number(o["cuda.device"]),"Infinity"===u["cuda.device"]?t.gpu_slot=s.gpu_slot:t.gpu_slot=u["cuda.device"]),"cuda.shares"in u&&(s.fgpu_slot=Number(c["cuda.shares"])+Number(l["cuda.shares"]),i.fgpu_slot=Number(o["cuda.shares"]),"Infinity"===u["cuda.shares"]?t.fgpu_slot=s.fgpu_slot:t.fgpu_slot=u["cuda.shares"]);let p=Object(),d=Object(),h=Object(),m=Object(),g=Object();"cpu"in r&&(d.cpu_slot="cpu"in a?a.cpu:0,"Infinity"===r.cpu?p.cpu_slot=t.cpu_slot-d.cpu_slot:p.cpu_slot=r.cpu),"cpu"in c&&(m.cpu_slot="cpu"in l?l.cpu:0,h.cpu_slot=c.cpu),g.cpu_slot="cpu"in n?n.cpu:0,"mem"in r&&(d.mem_slot="mem"in a?parseFloat(window.backendaiclient.utils.changeBinaryUnit(a.mem,"g")):0,"Infinity"===r.mem?p.mem_slot=t.mem_slot-d.mem_slot:p.mem_slot=parseFloat(window.backendaiclient.utils.changeBinaryUnit(r.mem,"g"))),d.mem_slot=d.mem_slot.toFixed(2),"mem"in c&&(m.mem_slot="mem"in l?parseFloat(window.backendaiclient.utils.changeBinaryUnit(l.mem,"g")):0,h.mem_slot=parseFloat(window.backendaiclient.utils.changeBinaryUnit(c.mem,"g"))),m.mem_slot=m.mem_slot.toFixed(2),g.mem_slot="mem"in n?parseFloat(window.backendaiclient.utils.changeBinaryUnit(n.mem,"g")):0,g.mem_slot=g.mem_slot.toFixed(2),"cuda.device"in r&&(p.gpu_slot=r["cuda.device"],d.gpu_slot="cuda.device"in a?a["cuda.device"]:0),"cuda.device"in c&&(h.gpu_slot=c["cuda.device"],m.gpu_slot="cuda.device"in l?l["cuda.device"]:0),g.gpu_slot="cuda.device"in n?n["cuda.device"]:0,"cuda.shares"in r&&(p.fgpu_slot=r["cuda.shares"],d.fgpu_slot="cuda.shares"in a?parseFloat(a["cuda.shares"]).toFixed(2):0),"cuda.shares"in c&&(h.fgpu_slot=c["cuda.shares"],m.fgpu_slot="cuda.shares"in a?parseFloat(l["cuda.shares"]).toFixed(2):0),g.fgpu_slot="cuda.shares"in n?parseFloat(n["cuda.shares"]).toFixed(2):0,"fgpu_slot"in d&&(t.fgpu_slot=parseFloat(t.fgpu_slot).toFixed(2)),"fgpu_slot"in m&&(s.fgpu_slot=parseFloat(s.fgpu_slot).toFixed(2)),"fgpu_slot"in g&&(i.fgpu_slot=parseFloat(i.fgpu_slot).toFixed(2)),this.total_slot=t,this.total_sg_slot=s,this.total_pj_slot=i,this.used_slot=d,this.used_sg_slot=m,this.used_pj_slot=g;let b={},_={},v={};return["cpu_slot","mem_slot","gpu_slot","fgpu_slot"].forEach(e=>{e in d&&(Number(t[e])<Number(d[e])&&(t[e]=d[e]),0!=t[e]?b[e]=d[e]/t[e]*100:b[e]=0,0!=s[e]?_[e]=m[e]/s[e]*100:_[e]=0,0!=i[e]?v[e]=g[e]/i[e]*100:v[e]=0),e in p&&"Infinity"===p[e]&&(p[e]=h[e])}),this.used_pj_slot_percent=v,0===this.concurrency_max?(b.concurrency=0,p.concurrency=this.concurrency_max):(b.concurrency=this.concurrency_used/this.concurrency_max*100,p.concurrency=this.concurrency_max-this.concurrency_used),this.concurrency_limit=Math.min(p.concurrency,5),this.available_slot=h,this.used_slot_percent=b,this.used_sg_slot_percent=_,this.aggregate_updating=!1,this.available_slot}).catch(e=>{this.aggregate_updating=!1,e&&e.message&&(this.notification.text=b.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}aggregateResource(e=""){void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._aggregateResourceUse(e)},!0):this._aggregateResourceUse(e)}async updateMetric(e=""){if(1==this.metric_updating)return;if("refresh resource policy"===e)return this.metric_updating=!1,this._aggregateResourceUse("update-metric");let t=this.shadowRoot.querySelector("#environment").selectedItem,s=this.shadowRoot.querySelector("#version").value;if(null==t||t.getAttribute("disabled"))this.metric_updating=!1;else if(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready)document.addEventListener("backend-ai-connected",()=>{this.updateMetric(e)},!0);else{if(this.metric_updating=!0,await this._aggregateResourceUse("update-metric"),null==t)return void(this.metric_updating=!1);let e=t.id+":"+s,r=this.resourceLimits[e];await this._updateVirtualFolderList();let a=this.available_slot;if(!r)return void(this.metric_updating=!1);this.shadowRoot.querySelector("#cpu-resource").disabled=!1,this.shadowRoot.querySelector("#mem-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").disabled=!1,this.shadowRoot.querySelector("#session-resource").disabled=!1,this.shadowRoot.querySelector("#launch-button").disabled=!1,this.shadowRoot.querySelector("#launch-button-msg").textContent="Launch";let o=!1,n={min:.0625,max:1,preferred:.125};if(this.gpu_metric={min:0,max:0},r.forEach(e=>{if("cpu"===e.key){let t=Object.assign({},e);t.min=parseInt(t.min),"cpu"in this.userResourceLimit?0!==parseInt(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseInt(t.max),parseInt(this.userResourceLimit.cpu),a.cpu_slot):t.max=Math.min(parseInt(this.userResourceLimit.cpu),a.cpu_slot):0!==parseInt(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseInt(t.max),a.cpu_slot):t.max=this.available_slot.cpu_slot,t.min>=t.max&&(t.min>t.max?(t.min=t.max,t.max=t.max+1,o=!0,this.shadowRoot.querySelector("#cpu-resource").disabled=!0):(t.max=t.max+1,this.shadowRoot.querySelector("#cpu-resource").disabled=!0)),this.cpu_metric=t}if("cuda.device"===e.key&&"gpu"==this.gpu_mode){let t=Object.assign({},e);t.min=parseInt(t.min),"cuda.device"in this.userResourceLimit?0!==parseInt(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseInt(t.max),parseInt(this.userResourceLimit["cuda.device"]),a.fgpu_slot):t.max=Math.min(parseInt(this.userResourceLimit["cuda.device"]),a.gpu_slot):0!==parseInt(t.max)?t.max=Math.min(parseInt(t.max),a.gpu_slot):t.max=this.available_slot.gpu_slot,t.min>=t.max&&(t.min>t.max?(t.min=t.max,o=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!0):(t.max=t.max+1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0)),this.gpu_metric=t}if("cuda.shares"===e.key&&"fgpu"===this.gpu_mode){let t=Object.assign({},e);t.min=parseFloat(t.min),"cuda.shares"in this.userResourceLimit?0!==parseFloat(t.max)&&"Infinity"!==t.max&&NaN!==t.max?t.max=Math.min(parseFloat(t.max),parseFloat(this.userResourceLimit["cuda.shares"]),a.fgpu_slot):t.max=Math.min(parseFloat(this.userResourceLimit["cuda.shares"]),a.fgpu_slot):0!==parseFloat(t.max)?t.max=Math.min(parseFloat(t.max),a.fgpu_slot):t.max=0,t.min>=t.max&&(t.min>t.max?(t.min=t.max,o=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!0):(t.max=t.max+1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0)),this.fgpu_metric=t,t.max>0&&(this.gpu_metric=t)}if("tpu"===e.key){let t=Object.assign({},e);t.min=parseInt(t.min),t.max=parseInt(t.max),t.min,t.max,this.tpu_metric=t}if("mem"===e.key){let t=Object.assign({},e);t.min=window.backendaiclient.utils.changeBinaryUnit(t.min,"g"),t.min<.1&&(t.min=.1);let s=window.backendaiclient.utils.changeBinaryUnit(t.max,"g","g");if("mem"in this.userResourceLimit){let e=window.backendaiclient.utils.changeBinaryUnit(this.userResourceLimit.mem,"g");0!==parseInt(s)?t.max=Math.min(parseFloat(s),parseFloat(e),a.mem_slot):t.max=parseFloat(e)}else 0!==parseInt(t.max)&&"Infinity"!==t.max&&!0!==isNaN(t.max)?t.max=Math.min(parseFloat(window.backendaiclient.utils.changeBinaryUnit(t.max,"g","g")),a.mem_slot):t.max=a.mem_slot;t.min>=t.max&&(t.min>t.max?(t.min=t.max,t.max=t.max+1,o=!0,this.shadowRoot.querySelector("#mem-resource").disabled=!0):(t.max=t.max+1,this.shadowRoot.querySelector("#mem-resource").disabled=!0)),t.min=Number(t.min.toFixed(2)),t.max=Number(t.max.toFixed(2)),this.mem_metric=t}"shmem"===e.key&&((n=Object.assign({},e)).preferred="preferred"in n?window.backendaiclient.utils.changeBinaryUnit(n.preferred,"g","g"):.0625)}),n.max=this.mem_metric.max,n.min=.0625,n.min>=n.max&&(n.min>n.max?(n.min=n.max,n.max=n.max+1,o=!0,this.shadowRoot.querySelector("#shmem-resource").disabled=!0):(n.max=n.max+1,this.shadowRoot.querySelector("#shmem-resource").disabled=!0)),n.min=Number(n.min.toFixed(2)),n.max=Number(n.max.toFixed(2)),this.shmem_metric=n,0==this.gpu_metric.min&&0==this.gpu_metric.max){if(this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0,this.shadowRoot.querySelector("#gpu-resource").value=0,this.resource_templates!==[]&&this.resource_templates.length>0)for(var i=0;i<this.resource_templates.length;i++)parseFloat(this.resource_templates[i].gpu)>0&&(this.resource_templates.splice(i,1),i--)}else this.shadowRoot.querySelector("#use-gpu-checkbox").checked=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!1,this.shadowRoot.querySelector("#gpu-resource").value=this.gpu_metric.max;if(this.resource_templates!==[]&&this.resource_templates.length>0){let e=this.resource_templates[0];this._updateResourceIndicator(e.cpu,e.mem,e.gpu);let t=this.shadowRoot.querySelector("#resource-templates").getElementsByTagName("wl-button")[0];this.shadowRoot.querySelector("#resource-templates").selected="0",t.setAttribute("active",!0)}else this._updateResourceIndicator(this.cpu_metric.min,this.mem_metric.min,this.gpu_metric.min);o&&(this.shadowRoot.querySelector("#cpu-resource").disabled=!0,this.shadowRoot.querySelector("#mem-resource").disabled=!0,this.shadowRoot.querySelector("#gpu-resource").disabled=!0,this.shadowRoot.querySelector("#session-resource").disabled=!0,this.shadowRoot.querySelector("#launch-button").disabled=!0,this.shadowRoot.querySelector("#launch-button-msg").textContent="Not enough resource"),this.gpu_metric.min==this.gpu_metric.max&&(this.shadowRoot.querySelector("#gpu-resource").max=this.gpu_metric.max+1,this.shadowRoot.querySelector("#gpu-resource").disabled=!0),1==this.concurrency_limit&&(this.shadowRoot.querySelector("#session-resource").max=2,this.shadowRoot.querySelector("#session-resource").value=1,this.shadowRoot.querySelector("#session-resource").disabled=!0),this.metric_updating=!1}}updateLanguage(){let e=this.shadowRoot.querySelector("#environment").selectedItem;if(null===e)return;let t=e.id;this._updateVersions(t)}_refreshImageList(){window.backendaiclient.image.list(["name","humanized_name","tag","registry","digest","installed","resource_limits { key min max }"],!0).then(e=>{const t=[];Object.keys(e.images).map((s,i)=>{const r=e.images[s];!0===r.installed&&t.push(r)}),0!==t.length&&(this.images=t,this.supports={},this.supportImages={},Object.keys(this.images).map((e,t)=>{const s=this.images[e],i=`${s.registry}/${s.name}`;let r;i in this.supports||(this.supports[i]=[]),this.supports[i].push(s.tag);let a=s.name.split("/");r=2==a.length?a[1]:a[2],this.supportImages[i]=this.imageInfo[r],this.resourceLimits[`${i}:${s.tag}`]=s.resource_limits}),this._updateEnvironment())}).catch(e=>{this.metadata_updating=!1,e&&e.message&&(this.notification.text=b.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}changed(e){console.log(e)}isEmpty(e){return 0===e.length}_toggleAdvancedSettings(){this.shadowRoot.querySelector("#advanced-resource-settings").toggle()}_chooseResourceTemplate(e){const t=e.target.closest("wl-button"),s=t.cpu,i=t.mem,r=t.gpu;this.shmem_request=.0625,this._updateResourceIndicator(s,i,r)}_updateResourceIndicator(e,t,s){this.shadowRoot.querySelector("#gpu-resource").value=s,this.shadowRoot.querySelector("#shmem-resource").value=this.shmem_request,this.cpu_request=e,this.mem_request=t,this.gpu_request=s}selectDefaultLanguage(){void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._selectDefaultLanguage()},!0):this._selectDefaultLanguage()}_selectDefaultLanguage(){return void 0!==window.backendaiclient._config.default_session_environment&&"default_session_environment"in window.backendaiclient._config&&""!==window.backendaiclient._config.default_session_environment?this.default_language=window.backendaiclient._config.default_session_environment:this.languages.length>1?this.default_language=this.languages[1].name:0!==this.languages.length?this.default_language=this.languages[0].name:this.default_language="index.docker.io/lablup/ngc-tensorflow",!0}_selectDefaultVersion(e){return!1}async _fetchSessionOwnerGroups(){this.ownerFeatureInitialized||(this.shadowRoot.querySelector("#owner-group").addEventListener("selected-item-label-changed",this._fetchSessionOwnerScalingGroups.bind(this)),this.ownerFeatureInitialized=!0);const e=this.shadowRoot.querySelector("#owner-email"),t=e.value;if(!e.validate())return this.notification.text="Invalid email address",this.notification.show(),this.ownerKeypairs=[],void(this.ownerGroups=[]);const s=await window.backendaiclient.keypair.list(t,["access_key"]);if(this.ownerKeypairs=s.keypairs,this.ownerKeypairs.length<1)return this.notification.text="No active keypair",this.notification.show(),this.ownerKeypairs=[],void(this.ownerGroups=[]);this.shadowRoot.querySelector("#owner-accesskey paper-listbox").selected=this.ownerKeypairs[0].access_key;const i=await window.backendaiclient.user.get(t,["domain_name","groups {id name}"]);this.ownerDomain=i.user.domain_name,this.ownerGroups=i.user.groups,this.ownerGroups&&(this.shadowRoot.querySelector("#owner-group paper-listbox").selected=this.ownerGroups[0].name)}async _fetchSessionOwnerScalingGroups(){const e=this.shadowRoot.querySelector("#owner-group").selectedItemLabel;if(!e)return void(this.ownerScalingGroups=[]);const t=await window.backendaiclient.scalingGroup.list(e);this.ownerScalingGroups=t.scaling_groups,this.ownerScalingGroups&&(this.shadowRoot.querySelector("#owner-scaling-group paper-listbox").selected=0)}_toggleResourceGauge(){""==this.resourceGauge.style.display||"flex"==this.resourceGauge.style.display||"block"==this.resourceGauge.style.display?this.resourceGauge.style.display="none":(document.body.clientWidth<750?(this.resourceGauge.style.left="20px",this.resourceGauge.style.right="20px",this.resourceGauge.style.backgroundColor="var(--paper-red-800)"):this.resourceGauge.style.backgroundColor="transparent",this.resourceGauge.style.display="flex")}render(){return i`
      ${this.enable_scaling_group&&"vertical"===this.direction?i`
      <div id="scaling-group-select-box" class="layout horizontal start-justified">
      </div>
      `:i``}
      <div class="layout horizontal">
        <mwc-icon-button id="resource-gauge-toggle" icon="assessment" class="fg blue ${this.direction}"
          @click="${()=>this._toggleResourceGauge()}">
        </mwc-icon-button>
        <div id="resource-gauges" class="layout ${this.direction} resources flex" style="align-items: flex-start">
          <div class="layout horizontal start-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <iron-icon class="fg blue" icon="hardware:developer-board"></iron-icon>
              <div class="gauge-name">CPU</div>
            </div>
            <div class="layout vertical start-justified wrap short-indicator">
              <span class="gauge-label">${this.used_sg_slot.cpu_slot}/${this.total_sg_slot.cpu_slot}</span>
              <paper-progress id="cpu-usage-bar" class="start-bar" value="${this.used_sg_slot_percent.cpu_slot}"></paper-progress>
              <paper-progress id="cpu-usage-bar-2" class="end-bar" value="${this.used_slot_percent.cpu_slot}"></paper-progress>
              <span class="gauge-label">${this.used_slot.cpu_slot}/${this.total_slot.cpu_slot}</span>
            </div>
          </div>
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <iron-icon class="fg blue" icon="hardware:memory"></iron-icon>
              <span class="gauge-name">RAM</span>
            </div>
            <div class="layout vertical start-justified wrap">
              <span class="gauge-label">${this.used_sg_slot.mem_slot}/${this.total_sg_slot.mem_slot}GB</span>
              <paper-progress id="mem-usage-bar" class="start-bar" value="${this.used_sg_slot_percent.mem_slot}"></paper-progress>
              <paper-progress id="mem-usage-bar-2" class="end-bar" value="${this.used_slot_percent.mem_slot}"></paper-progress>
              <span class="gauge-label">${this.used_slot.mem_slot}/${this.total_slot.mem_slot}GB</span>
            </div>
          </div>
          ${this.total_slot.gpu_slot?i`
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <iron-icon class="fg blue" icon="icons:view-module"></iron-icon>
              <span class="gauge-name">GPU</span>
            </div>
            <div class="layout vertical center-justified wrap short-indicator">
              <span class="gauge-label">${this.used_sg_slot.gpu_slot}/${this.total_sg_slot.fgpu_slot}</span>
              <paper-progress id="gpu-usage-bar" class="start-bar" value="${this.used_sg_slot_percent.gpu_slot}"></paper-progress>
              <paper-progress id="gpu-usage-bar-2" class="end-bar" value="${this.used_slot_percent.gpu_slot}"></paper-progress>
              <span class="gauge-label">${this.used_slot.gpu_slot}/${this.total_slot.gpu_slot}</span>
            </div>
          </div>`:i``}
          ${this.total_slot.fgpu_slot?i`
          <div class="layout horizontal center-justified monitor">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <iron-icon class="fg blue" icon="icons:view-module"></iron-icon>
              <span class="gauge-name">GPU</span>
            </div>
            <div class="layout vertical start-justified wrap short-indicator">
              <span class="gauge-label">${this.used_sg_slot.fgpu_slot}/${this.total_sg_slot.fgpu_slot}</span>
              <paper-progress id="gpu-usage-bar" class="start-bar" value="${this.used_sg_slot_percent.fgpu_slot}"></paper-progress>
              <paper-progress id="gpu-usage-bar-2" class="end-bar" value="${this.used_slot_percent.fgpu_slot}"></paper-progress>
              <span class="gauge-label">${this.used_slot.fgpu_slot}/${this.total_slot.fgpu_slot}</span>
            </div>
          </div>`:i``}
          <div class="layout horizontal center-justified monitor session">
            <div class="layout vertical center center-justified" style="margin-right:5px;">
              <iron-icon class="fg blue" icon="icons:assignment"></iron-icon>
              <span class="gauge-name">Session</span>
            </div>
            <div class="layout vertical start-justified wrap short-indicator">
              <span class="gauge-label">${this.concurrency_used}/${this.concurrency_max}</span>
              <paper-progress class="short full-bar" id="concurrency-usage-bar" value="${this.used_slot_percent.concurrency}"></paper-progress>
              <span class="gauge-label">&nbsp;</span>
            </div>
          </div>
        </div>
        <div class="layout vertical" style="align-self: center;">
          <wl-button class="fg red" id="launch-session" ?fab=${"vertical"===this.direction} outlined @click="${()=>this._launchSessionDialog()}">
            <wl-icon>add</wl-icon>
            Start
          </wl-button>
        </div>
        <div class="flex"></div>
      </div>
      ${this.enable_scaling_group&&"vertical"===this.direction?i`
      <div class="vertical start-justified layout">
        <div class="layout horizontal center start-justified">
          <div style="width:10px;height:10px;margin-left:10px;margin-right:3px;background-color:#4775E3;"></div>
          <span style="margin-right:5px;">Current Resource Group (${this.scaling_group})</span>
        </div>
        <div class="layout horizontal center start-justified">
          <div style="width:10px;height:10px;margin-left:10px;margin-right:3px;background-color:#A0BD67"></div>
          <span style="margin-right:5px;">User Resource Limit</span>
        </div>
      </div>
`:i``}
      ${"vertical"===this.direction&&!0===this.project_resource_monitor&&0!=this.total_pj_slot.cpu_slot?i`
      <hr />
      <div class="vertical start-justified layout">
          <div class="flex"></div>
        <div class="layout horizontal center-justified monitor">
          <div class="layout vertical center center-justified" style="margin-right:5px;">
            <iron-icon class="fg blue" icon="icons:group-work"></iron-icon>
            <span class="gauge-name">Project</span>
          </div>
          <div class="layout vertical start-justified wrap short-indicator">
            <div class="layout horizontal">
              <span style="width:35px; margin-left:5px; margin-right:5px;">CPU</span>
              <paper-progress id="cpu-project-usage-bar" class="start-bar project-bar" value="${this.used_pj_slot_percent.cpu_slot}"></paper-progress>
              <span style="margin-left:5px;">${this.used_pj_slot.cpu_slot}/${this.total_pj_slot.cpu_slot===1/0?"∞":this.total_pj_slot.cpu_slot}</span>
            </div>
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">RAM</span>
              <paper-progress id="mem-project-usage-bar" class="middle-bar project-bar" value="${this.used_pj_slot_percent.mem_slot}"></paper-progress>
              <span style="margin-left:5px;">${this.used_pj_slot.mem_slot}/${this.total_pj_slot.mem_slot===1/0?"∞":this.total_pj_slot.mem_slot}</span>
            </div>
            ${this.total_pj_slot.gpu_slot?i`
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">GPU</span>
              <paper-progress id="gpu-project-usage-bar" class="end-bar project-bar" value="${this.used_pj_slot_percent.gpu_slot}"></paper-progress>
              <span style="margin-left:5px;">${this.used_pj_slot.gpu_slot}/${"Infinity"===this.total_pj_slot.gpu_slot?"∞":this.total_pj_slot.gpu_slot}</span>
            </div>`:i``}
            ${this.total_pj_slot.fgpu_slot?i`
            <div class="layout horizontal">
              <span style="width:35px;margin-left:5px; margin-right:5px;">GPU</span>
              <paper-progress id="gpu-project-usage-bar" class="end-bar project-bar" value="${this.used_pj_slot_percent.fgpu_slot}"></paper-progress>
              <span style="margin-left:5px;">${this.used_pj_slot.fgpu_slot}/${"Infinity"===this.total_pj_slot.fgpu_slot?"∞":this.total_pj_slot.fgpu_slot}</span>
            </div>`:i``}
          </div>
          <div class="flex"></div>
        </div>
      </div>
`:i``}
      <wl-dialog id="new-session-dialog"
                    fixed backdrop blockscrolling persistent
                    style="padding:0;">
        <wl-card class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>Start new session</span>
            <div class="flex"></div>
            <mwc-icon-button icon="close" class="blue close-button"
              @click="${()=>this._hideSessionDialog()}">
            </mwc-icon-button>
          </h3>
          <form id="launch-session-form">
            <fieldset>
              <div class="horizontal center layout">
                <paper-dropdown-menu id="environment" label="Environments" horizontal-align="left">
                  <paper-listbox slot="dropdown-content" attr-for-selected="id"
                                 selected="${this.default_language}">
                ${this.languages.map(e=>i`
                    ${!1===e.clickable?i`
                    <h5 style="font-size:12px;padding: 0 10px 3px 10px;border-bottom:1px solid #ccc;" disabled="true">${e.basename}</h5>`:i`
                      <paper-item id="${e.name}" label="${e.alias}">${e.basename}
                      ${e.tags?e.tags.map(e=>i`
                        <lablup-shields style="margin-left:5px;" description="${e}"></lablup-shields>
                      `):""}
                      </paper-item>
                    `}
                `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu id="version" label="Version">
                  <paper-listbox slot="dropdown-content" selected="0">
              ${this.versions.map(e=>i`
                    <paper-item id="${e}" label="${e}">${e}</paper-item>
              `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
              <div style="display:none;">
                <paper-checkbox id="use-gpu-checkbox">Use GPU</paper-checkbox>
              </div>
              <div class="horizontal center layout">
                ${this.enable_scaling_group?i`
                <paper-dropdown-menu id="scaling-groups" label="Resource Group" horizontal-align="left">
                  <paper-listbox selected="0" slot="dropdown-content">
${this.scaling_groups.map(e=>i`
                      <paper-item id="${e.name}" label="${e.name}">${e.name}</paper-item>
      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                `:i``}
                <paper-input id="session-name" label="Session name (optional)"
                             value="" pattern="[a-zA-Z0-9_-]{4,}" auto-validate
                             error-message="4 or more characters / no whitespace">
                </paper-input>
              </div>
              <div class="horizontal center layout">
                <backend-ai-dropdown-menu id="vfolder" multi attr-for-selected="value" label="Folders to mount">
                ${this.vfolders.map(e=>i`
                  <paper-item value="${e.name}">${e.name}</paper-item>
                `)}
                </backend-ai-dropdown-menu>
              </div>

            </fieldset>
            <wl-expansion name="resource-group" open>
              <span slot="title">Resource allocation</span>
              <span slot="description"></span>
              <paper-listbox id="resource-templates" selected="0" class="horizontal center layout"
                             style="width:350px; overflow:scroll;">
${this.resource_templates.map(e=>i`
                <wl-button class="resource-button vertical center start layout" role="option"
                            style="height:140px;min-width:120px;" type="button"
                            flat outlined
                            @click="${this._chooseResourceTemplate}"
                            id="${e.name}-button"
                            .cpu="${e.cpu}"
                            .mem="${e.mem}"
                            .gpu="${e.gpu}">
                  <div>
                    <h4>${e.name}</h4>
                    <ul>
                      <li>${e.cpu} CPU</li>
                      <li>${e.mem}GB RAM</li>
                      ${e.gpu?i`<li>${e.gpu} fGPU</li>`:i`<li>NO GPU</li>`}
                      </ul>
                  </div>
                </wl-button>
              `)}
              ${this.isEmpty(this.resource_templates)?i`
                <wl-button class="resource-button vertical center start layout" role="option"
                            style="height:140px;width:350px;" type="button"
                            flat inverted outlined disabled>
                  <div>
                    <h4>No suitable preset</h4>
                    <div style="font-size:12px;">Use advanced settings to <br>start custom session</div>
                  </div>
                </wl-button>
`:i``}
              </paper-listbox>
            </wl-expansion>
            <wl-expansion name="resource-group">
              <span slot="title">Advanced</span>
              <span slot="description">Custom allocation</span>
              <div class="vertical layout">
                <div class="horizontal center layout">
                  <div class="resource-type" style="width:50px;">CPU</div>
                  <paper-slider id="cpu-resource" class="cpu"
                                pin snaps expand editable
                                min="${this.cpu_metric.min}" max="${this.cpu_metric.max}"
                                value="${this.cpu_request}"></paper-slider>
                  <span class="caption">Core</span>
                </div>
                <div class="horizontal center layout">
                  <div class="resource-type" style="width:50px;">RAM</div>
                  <paper-slider id="mem-resource" class="mem"
                                pin snaps step=0.05 editable
                                min="${this.mem_metric.min}" max="${this.mem_metric.max}"
                                value="${this.mem_request}"></paper-slider>
                  <span class="caption">GB</span>
                </div>
                <div class="horizontal center layout">
                  <div class="resource-type" style="width:50px;">Shared Memory</div>
                  <paper-slider id="shmem-resource" class="mem"
                                pin snaps step=0.0025 editable
                                min="0.0" max="${this.shmem_metric.max}"
                                value="${this.shmem_request}"></paper-slider>
                  <span class="caption">GB</span>
                </div>
                <div class="horizontal center layout">
                  <div class="resource-type" style="width:50px;">GPU</div>
                  <paper-slider id="gpu-resource" class="gpu"
                                pin snaps editable step="${this.gpu_step}"
                                min="0.0" max="${this.gpu_metric.max}" value="${this.gpu_request}"></paper-slider>
                  <span class="caption">GPU</span>
                </div>
                <div class="horizontal center layout">
                  <div class="resource-type" style="width:50px;">Sessions</div>
                  <paper-slider id="session-resource" class="session"
                                pin snaps editable step=1
                                min="1" max="${this.concurrency_limit}" value="${this.session_request}"></paper-slider>
                  <span class="caption">#</span>
                </div>
              </div>
            </wl-expansion>

            <wl-expansion name="ownership">
              <span slot="title">Ownership</span>
              <span slot="description">Set session owner</span>
              <div class="vertical layout">
                <div class="horizontal center layout">
                  <paper-input id="owner-email" class="flex" value=""
                    pattern="^.+@.+\..+$"
                    label="Owner Email" size="40"></paper-input>
                  <mwc-icon-button icon="refresh" class="blue"
                    @click="${()=>this._fetchSessionOwnerGroups()}">
                  </mwc-icon-button>
                </div>
                <paper-dropdown-menu id="owner-accesskey" label="Owner access key">
                  <paper-listbox slot="dropdown-content" attr-for-selected="id">
                    ${this.ownerKeypairs.map(e=>i`
                      <paper-item id="${e.access_key}" label="${e.access_key}">${e.access_key}</paper-item>
                    `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <div class="horizontal center layout">
                  <paper-dropdown-menu id="owner-group" label="Owner group" horizontal-align="left">
                    <paper-listbox slot="dropdown-content" attr-for-selected="id"
                                  selected="${this.default_language}">
                      ${this.ownerGroups.map(e=>i`
                        <paper-item id="${e.name}" label="${e.name}">${e.name}</paper-item>
                      `)}
                    </paper-listbox>
                  </paper-dropdown-menu>
                  <paper-dropdown-menu id="owner-scaling-group" label="Owner resource group">
                    <paper-listbox slot="dropdown-content" selected="0">
                      ${this.ownerScalingGroups.map(e=>i`
                        <paper-item id="${e.name}" label="${e.name}">${e.name}</paper-item>
                      `)}
                    </paper-listbox>
                  </paper-dropdown-menu>
                </div>
                <wl-label>
                  <wl-checkbox id="owner-enabled"></wl-checkbox>
                  Launch session on behalf of the access key
                </wl-label>
              </div>
            </wl-expansion>

            <fieldset style="padding-top:0;">
              <wl-button class="launch-button" type="button" id="launch-button"
                                           outlined @click="${()=>this._newSession()}">
                                          <wl-icon>rowing</wl-icon>
                <span id="launch-button-msg">Launch</span>
              </wl-button>
            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>
`}};t([r({type:String})],w.prototype,"direction",void 0),t([r({type:String})],w.prototype,"location",void 0),t([r({type:Object})],w.prototype,"supports",void 0),t([r({type:Object})],w.prototype,"supportImages",void 0),t([r({type:Object})],w.prototype,"resourceLimits",void 0),t([r({type:Object})],w.prototype,"userResourceLimit",void 0),t([r({type:Object})],w.prototype,"aliases",void 0),t([r({type:Object})],w.prototype,"tags",void 0),t([r({type:Object})],w.prototype,"imageInfo",void 0),t([r({type:Object})],w.prototype,"imageNames",void 0),t([r({type:Array})],w.prototype,"versions",void 0),t([r({type:Array})],w.prototype,"languages",void 0),t([r({type:String})],w.prototype,"gpu_mode",void 0),t([r({type:Number})],w.prototype,"gpu_step",void 0),t([r({type:Object})],w.prototype,"cpu_metric",void 0),t([r({type:Object})],w.prototype,"mem_metric",void 0),t([r({type:Object})],w.prototype,"shmem_metric",void 0),t([r({type:Object})],w.prototype,"gpu_metric",void 0),t([r({type:Object})],w.prototype,"fgpu_metric",void 0),t([r({type:Object})],w.prototype,"tpu_metric",void 0),t([r({type:Object})],w.prototype,"images",void 0),t([r({type:String})],w.prototype,"defaultResourcePolicy",void 0),t([r({type:Object})],w.prototype,"total_slot",void 0),t([r({type:Object})],w.prototype,"total_sg_slot",void 0),t([r({type:Object})],w.prototype,"total_pj_slot",void 0),t([r({type:Object})],w.prototype,"used_slot",void 0),t([r({type:Object})],w.prototype,"used_sg_slot",void 0),t([r({type:Object})],w.prototype,"used_pj_slot",void 0),t([r({type:Object})],w.prototype,"available_slot",void 0),t([r({type:Number})],w.prototype,"concurrency_used",void 0),t([r({type:Number})],w.prototype,"concurrency_max",void 0),t([r({type:Number})],w.prototype,"concurrency_limit",void 0),t([r({type:Array})],w.prototype,"vfolders",void 0),t([r({type:Object})],w.prototype,"used_slot_percent",void 0),t([r({type:Object})],w.prototype,"used_sg_slot_percent",void 0),t([r({type:Object})],w.prototype,"used_pj_slot_percent",void 0),t([r({type:Array})],w.prototype,"resource_templates",void 0),t([r({type:String})],w.prototype,"default_language",void 0),t([r({type:Boolean})],w.prototype,"launch_ready",void 0),t([r({type:Number})],w.prototype,"cpu_request",void 0),t([r({type:Number})],w.prototype,"mem_request",void 0),t([r({type:Number})],w.prototype,"shmem_request",void 0),t([r({type:Number})],w.prototype,"gpu_request",void 0),t([r({type:Number})],w.prototype,"session_request",void 0),t([r({type:Boolean})],w.prototype,"_status",void 0),t([r({type:Number})],w.prototype,"num_sessions",void 0),t([r({type:String})],w.prototype,"scaling_group",void 0),t([r({type:Array})],w.prototype,"scaling_groups",void 0),t([r({type:Boolean})],w.prototype,"enable_scaling_group",void 0),t([r({type:Array})],w.prototype,"sessions_list",void 0),t([r({type:Boolean})],w.prototype,"metric_updating",void 0),t([r({type:Boolean})],w.prototype,"metadata_updating",void 0),t([r({type:Boolean})],w.prototype,"aggregate_updating",void 0),t([r({type:Object})],w.prototype,"scaling_group_selection_box",void 0),t([r({type:Object})],w.prototype,"resourceGauge",void 0),t([r({type:Boolean})],w.prototype,"ownerFeatureInitialized",void 0),t([r({type:String})],w.prototype,"ownerDomain",void 0),t([r({type:Array})],w.prototype,"ownerKeypairs",void 0),t([r({type:Array})],w.prototype,"ownerGroups",void 0),t([r({type:Array})],w.prototype,"ownerScalingGroups",void 0),t([r({type:Boolean})],w.prototype,"project_resource_monitor",void 0),w=t([s("backend-ai-resource-monitor")],w);
