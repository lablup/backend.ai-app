import{a4 as t,x as i,_ as e,p as a,y as s,q as l,c as o,h as n,D as r,B as c,d,I as p,a as v,n as u,e as h,b as m}from"./backend-ai-console-125e4b92.js";import{r as w}from"./radio-behavior-4c6affa7.js";import"./expansion-9a7a977f.js";import{s as b}from"./vaadin-grid-sorter-f0db9e83.js";import"./vaadin-grid-selection-column-056a9949.js";import"./vaadin-grid-sort-column-cab34161.js";import"./iconset-a5679453.js";import"./backend-ai-session-list-2d90d7ae.js";import"./json_to_csv-f333d031.js";import"./tab-group-c0d24b3d.js";let g=class extends t{constructor(){super(...arguments),this.disabled=!1,this.clickable=!1,this.noRipple=!1,this.role="listitem"}queryGroup(){return Array.from(this.parentElement.querySelectorAll(this.nodeName.toLowerCase()+":not([disabled])"))}rowToElement(t){t.focus()}onKeyDown(t){super.onKeyDown(t),w(this,t)}render(){return n` <slot name="before"></slot> <div id="content"> <slot></slot> </div> <slot name="after"></slot> <wl-ripple id="ripple" overlay .target="${this}" ?disabled="${this.disabled||!this.clickable||this.noRipple}"></wl-ripple> ${this.renderFormElement()} `}};g.styles=[...t.styles,i(":host{--_list-item-color:var(--list-item-color,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));--_list-item-bg:var(--list-item-bg,transparent);color:var(--_list-item-color);background:var(--_list-item-bg);border-radius:var(--list-item-border-radius,.5rem);transition:var(--list-item-transition,background var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease),color var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease));padding:var(--list-item-padding,.75rem 1.5rem);display:flex;align-items:center;outline:none;overflow:hidden;position:relative;text-align:left}:host([clickable]){-webkit-user-select:none;user-select:none}:host([clickable]:not([active]):not([disabled])){cursor:pointer}:host(:focus),:host(:hover){--_list-item-color:var(--list-item-color-hover,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));--_list-item-bg:var(--list-item-bg-hover,hsl(var(--shade-200,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,85%))));will-change:background,color}:host([active]:focus),:host([active]:hover){--_list-item-color:var(--list-item-color-active-hover,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_list-item-bg:var(--list-item-bg-active-hover,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.15))}:host([disabled]){--_list-item-color:var(--list-item-color-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));--_list-item-bg:var(--list-item-bg-disabled,transparent);opacity:var(--list-item-opacity-disabled,.6);pointer-events:none}:host([active]){--_list-item-color:var(--list-item-color,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_list-item-bg:var(--list-item-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.1))}::slotted([slot=after]),::slotted([slot=before]){flex-shrink:0}::slotted([slot=before]){margin:var(--list-item-left-margin,0 1.5rem 0 0)}::slotted([slot=after]),::slotted([slot=before]){align-self:var(--list-item-left-align-self,center)}::slotted([slot=after]){margin:var(--list-item-left-margin,0 0 0 1.5rem)}#content{flex-grow:1;display:flex;flex-direction:column}#ripple{pointer-events:none}")],e([a({type:Boolean,reflect:!0}),s("design:type",Boolean)],g.prototype,"disabled",void 0),e([a({type:Boolean,reflect:!0}),s("design:type",Boolean)],g.prototype,"clickable",void 0),e([a({type:Boolean,reflect:!0}),s("design:type",Boolean)],g.prototype,"noRipple",void 0),e([a({type:String,reflect:!0}),s("design:type",String)],g.prototype,"role",void 0),e([l("#ripple"),s("design:type",r)],g.prototype,"$ripple",void 0),g=e([o("wl-list-item")],g);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let f=class extends c{constructor(){super(),b(!0),this.active=!1,this.supports={},this.resourceLimits={},this.userResourceLimit={},this.aliases={TensorFlow:"python-tensorflow","Lablup ResearchEnv.":"python-ff",Python:"python",PyTorch:"python-pytorch",Chainer:"chainer",R:"r",Julia:"julia",Lua:"lua"},this.versions=["3.6"],this.languages=[],this.gpu_mode="no",this.gpu_step=.05,this.cpu_metric={min:"1",max:"1"},this.mem_metric={min:"1",max:"1"},this.gpu_metric={min:"0",max:"0"},this.tpu_metric={min:"1",max:"1"},this.images={},this.defaultResourcePolicy="UNLIMITED",this.total_slot={},this.used_slot={},this.available_slot={},this.resource_info={},this.used_slot_percent={},this.resource_templates=[],this.vfolders=[],this.default_language="",this.launch_ready=!1,this.concurrency_used=0,this.concurrency_max=0,this._status="inactive"}static get is(){return"backend-ai-experiment-view"}static get styles(){return[d,p,v,u,h,m`
        wl-card h4 {
          padding: 5px 20px;
          border-bottom: 1px solid #dddddd;
          font-weight: 100;
        }

        .short-indicator .gauge-label {
          width: 80px;
        }

        .custom {
          color: var(--paper-red-800);
        }

        span.caption {
          width: 30px;
          padding-left: 10px;
        }

        div.caption {
          width: 100px;
        }

        .gauge-name {
          font-size: 10px;
        }

        .gauge-label {
          width: 120px;
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

        .resource-button h4 {
          padding: 5px 0;
          margin: 0;
          font-weight: 400;
        }

        .resource-button ul {
          padding: 0;
          list-style-type: none;
        }

        wl-button.button {
          --button-bg: var(--paper-blue-50);
          --button-bg-hover: var(--paper-blue-100);
          --button-bg-active: var(--paper-blue-600);
        }

        wl-button.launch-button {
          width: 335px;
          --button-bg: var(--paper-blue-50);
          --button-bg-hover: var(--paper-blue-100);
          --button-bg-active: var(--paper-blue-600);
        }

        wl-button.resource-button {
          --button-bg: white;
          --button-bg-active: var(--paper-blue-600);
          --button-bg-hover: var(--paper-blue-600);
          --button-bg-active-flat: var(--paper-blue-50);
          --button-color: #8899aa;
          --button-color-active: blue;
          --button-color-hover: blue;
        }

        wl-card h3.tab {
          padding-top: 0;
          padding-bottom: 0;
          padding-left: 0;
        }

        wl-expansion {
          --expansion-elevation: 0;
          --expansion-elevation-open: 0;
          --expansion-elevation-hover: 0;
          --expansion-margin-open: 0;
        }
      `]}firstUpdated(){this.notification=globalThis.lablupNotification}_showTab(t){for(var i=this.shadowRoot.querySelectorAll(".tab-content"),e=0;e<i.length;e++)i[e].style.display="none";this.shadowRoot.querySelector("#"+t.value).style.display="block"}_hideDialog(t){t.target.closest("wl-dialog").hide()}render(){return n`
      <wl-card class="item" elevation="1">
        <h3 class="tab horizontal center layout">
          <wl-tab-group>
            <wl-tab value="exp-lists" checked @click="${t=>this._showTab(t.target)}">List</wl-tab>
            <wl-tab value="running-lists" @click="${t=>this._showTab(t.target)}">Running</wl-tab>
            <wl-tab value="finished-lists" @click="${t=>this._showTab(t.target)}">Finished</wl-tab>
          </wl-tab-group>
          <span class="flex"></span>
          <wl-button class="fg blue button" id="add-experiment" outlined>
           <wl-icon>add</wl-icon>
            Add experiment
          </wl-button>
        </h3>
        <div id="exp-lists" class="tab-content" style="margin:0;padding:0;height:calc(100vh - 235px);">
            <div class="horizontal wrap layout" style="margin:0;padding:0;">
              <div style="weight: 300px;border-right:1px solid #ccc;height:calc(100vh - 235px);">
                <wl-list-item active style="width:300px;">
                  <wl-icon icon="vaadin:flask" slot="before"></wl-icon>
                  <span slot="after">5<br/><span style="font-size:9px">components</span></span>
                  <wl-title level="4" style="margin: 0">Test experiment</wl-title>
                  <span style="font-size: 11px;">Test experiment</span>
                </wl-list-item>
                <wl-list-item style="width:300px;">
                  <wl-icon icon="vaadin:flask" slot="before"></wl-icon>
                   <span slot="after">4<br/><span style="font-size:9px">components</span></span>
                   <wl-title level="3" style="margin: 0">Fashion MNIST</wl-title>
                   <span style="font-size: 11px;">Fashion MNIST serving test</span>
                </wl-list-item>
                <wl-list-item style="width:300px;">
                  <wl-icon icon="vaadin:flask" slot="before"></wl-icon>
                   <span slot="after">4<br/><span style="font-size:9px">components</span></span>
                   <wl-title level="4" style="margin: 0">Test experiment2</wl-title>
                   <span style="font-size: 11px;">Test experiment2</span>
                </wl-list-item>
                <h4>Templates</h4>
                <wl-list-item style="width:300px;">
                  <wl-icon icon="vaadin:flask" slot="before"></wl-icon>
                   <span slot="after">5<br/><span style="font-size:9px">components</span></span>
                   <wl-title level="2" style="margin: 0">Example Experiment (TensorFlow)</wl-title>
                   <span style="font-size: 11px;">Basic experiment example using TensorFlow</span>
                </wl-list-item>
                <wl-list-item style="width:300px;">
                  <wl-icon icon="vaadin:flask" slot="before"></wl-icon>
                   <span slot="after">4<br/><span style="font-size:9px">components</span></span>
                   <wl-title level="2" style="margin: 0">Example Experiment (PyTorch)</wl-title>
                   <span style="font-size: 11px;">Basic experiment example using Pytorch</span>
                </wl-list-item>
                <wl-list-item style="width:300px;">
                  <wl-icon icon="vaadin:flask" slot="before"></wl-icon>
                   <span slot="after">4<br/><span style="font-size:9px">components</span></span>
                   <wl-title level="2" style="margin: 0">Facet data cleaner</wl-title>
                   <span style="font-size: 11px;">Data preprocessing using Facet</span>
                </wl-list-item>
              </div>
              <div class="layout vertical">
                <wl-list-item active style="width:calc(100% - 55px);height:80px;">
                  <wl-icon icon="vaadin:puzzle-piece" slot="before"></wl-icon>
                  <div slot="after">
                    <div class="horizontal layout">
                      <div class="layout vertical center center-justified flex" style="width:50px;">
                          <wl-button fab flat inverted class="fg black" icon="vaadin:controller"></wl-button>
                      </div>
                      <div class="layout vertical start flex" style="width:80px!important;">
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:developer-board"></wl-icon>
                          <span>1</span>
                          <span class="indicator">core</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:memory"></wl-icon>
                          <span>1</span>
                          <span class="indicator">GB</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="icons:view-module"></wl-icon>
                          <span>-</span>
                          <span class="indicator">GPU</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <wl-title level="4" style="margin: 0">Backend.AI Data Uploader</wl-title>
                  <div style="font-size:11px;max-width:450px;">Backend.AI data uploader helps users uploading the data to experiment store.</div>
                </wl-list-item>
                <wl-list-item style="width:calc(100% - 55px);height:80px;">
                  <wl-icon icon="vaadin:puzzle-piece" slot="before"></wl-icon>
                  <div slot="after">
                    <div class="horizontal layout">
                      <div class="layout vertical center center-justified flex" style="width:50px;">
                          <wl-button fab flat inverted class="fg black" icon="vaadin:controller"></wl-button>
                      </div>
                      <div class="layout vertical start flex" style="width:80px!important;">
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:developer-board"></wl-icon>
                          <span>1</span>
                          <span class="indicator">core</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:memory"></wl-icon>
                          <span>2</span>
                          <span class="indicator">GB</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="icons:view-module"></wl-icon>
                          <span>-</span>
                          <span class="indicator">GPU</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <wl-title level="4" style="margin: 0">Facet</wl-title>
                  <div style="font-size:11px;max-width:450px;">Facets contains two robust visualizations to aid in understanding and analyzing machine learning datasets.</div>
                </wl-list-item>
                <wl-list-item style="width:calc(100% - 55px);height:80px;">
                  <wl-icon icon="vaadin:puzzle-piece" slot="before"></wl-icon>
                  <div slot="after">
                  <div class="horizontal layout">
                    <div class="layout vertical center center-justified flex" style="width:50px;">
                        <wl-button fab flat inverted class="fg black" icon="vaadin:controller"></wl-button>
                    </div>
                      <div class="layout vertical start flex" style="width:80px!important;">
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:developer-board"></wl-icon>
                          <span>4</span>
                          <span class="indicator">core</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:memory"></wl-icon>
                          <span>16</span>
                          <span class="indicator">GB</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="icons:view-module"></wl-icon>
                          <span>1.5</span>
                          <span class="indicator">GPU</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <wl-title level="4" style="margin: 0">TensorFlow</wl-title>
                  <div style="font-size:11px;max-width:450px;">TensorFlow is an end-to-end open source platform for machine learning.</div>
                </wl-list-item>
                <wl-list-item style="width:calc(100% - 55px);height:80px;">
                  <wl-icon icon="vaadin:puzzle-piece" slot="before"></wl-icon>
                  <div slot="after">
                  <div class="horizontal layout">
                    <div class="layout vertical center center-justified flex" style="width:50px;">
                        <wl-button fab flat inverted class="fg black" icon="vaadin:controller"></wl-button>
                    </div>
                      <div class="layout vertical start flex" style="width:80px!important;">
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:developer-board"></wl-icon>
                          <span>4</span>
                          <span class="indicator">core</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:memory"></wl-icon>
                          <span>16</span>
                          <span class="indicator">GB</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="icons:view-module"></wl-icon>
                          <span>1.5</span>
                          <span class="indicator">GPU</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <wl-title level="4" style="margin: 0">TensorFlow Validate</wl-title>
                  <div style="font-size:11px;max-width:450px;">TensorFlow is an end-to-end open source platform for machine learning.</div>
                </wl-list-item>
                <wl-list-item style="width:calc(100% - 55px);height:80px;">
                  <wl-icon icon="vaadin:puzzle-piece" slot="before"></wl-icon>
                  <div slot="after">
                    <div class="horizontal layout">
                      <div class="layout vertical center center-justified flex" style="width:50px;">
                          <wl-button fab flat inverted class="fg black" icon="vaadin:controller"></wl-button>
                      </div>
                      <div class="layout vertical start flex" style="width:80px!important;">
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:developer-board"></wl-icon>
                          <span>1</span>
                          <span class="indicator">core</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:memory"></wl-icon>
                          <span>1</span>
                          <span class="indicator">GB</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="icons:view-module"></wl-icon>
                          <span>-</span>
                          <span class="indicator">GPU</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <wl-title level="4" style="margin: 0">TensorFlow Serving</wl-title>
                  <div style="font-size: 11px;max-width:450px;">TensorFlow Serving is a flexible, high-performance serving system for machine learning models, designed for production environments.</div>
                </wl-list-item>
                <mwc-button
                    outliend
                    id="launch-session"
                    icon="add"
                    label="Add component"></mwc-button>
            </div>
          </div>
        </div>
        <div id="running-lists" class="tab-content" style="display:none;">
          <backend-ai-session-list id="running-jobs" condition="running" ?active="${"active"===this._status}"></backend-ai-session-list>
        </div>
        <div id="finished-lists" class="tab-content" style="display:none;">
          <backend-ai-session-list id="finished-jobs" condition="finished" ?active="${"active"===this._status}"></backend-ai-session-list>
        </div>
      </wl-card>

`}};f=e([o("backend-ai-experiment-view")],f);var y=f;export default y;
