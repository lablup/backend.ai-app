import{B as t,g as i,d as e,I as s,a,n as l,e as o,b as c,h as n,t as d,f as r,_ as u,p as g,c as v}from"./backend-ai-console-22d31a8d.js";import"./unsafe-html-06722fb8.js";import{t as p}from"./translate-unsafe-html-a8661cc5.js";import"./lablup-activity-panel-7944657c.js";import"./vaadin-grid-sorter-f0db9e83.js";import"./mwc-switch-8b84e37a.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let h=class extends t{constructor(){super(),this.images=Object(),this.options=Object(),this.notification=Object(),this.imagePullingBehavior=[{name:i("settings.image.digest"),behavior:"digest"},{name:i("settings.image.tag"),behavior:"tag"},{name:i("settings.image.none"),behavior:"none"}],this.jobschedulerType=["fifo","lifo","drf"],this.options={image_pulling_behavior:"digest",cuda_gpu:!1,cuda_fgpu:!1,rocm_gpu:!1,tpu:!1,scheduler:"fifo"}}static get is(){return"backend-ai-settings-view"}static get styles(){return[e,s,a,l,o,c`
        div.indicator,
        span.indicator {
          font-size: 9px;
          margin-right: 5px;
        }

        div.title {
          font-size: 12px;
          font-weight: bold;
        }

        div.description,
        span.description {
          font-size: 11px;
          margin-top: 5px;
          margin-right: 5px;
        }

        .setting-item {
          margin: 15px auto;
          width: 100%;
        }

        .setting-desc {
          float: left;
          width: 100%;
        }

        .setting-desc-shrink {
          float: left;
          width: 80%;
        }

        .setting-button {
          float: right;
          width: 35px;
        }

        .setting-select {

        }

        .setting-desc-pulldown {
          width: 265px;
        }

        .setting-pulldown {
          width: 70px;
        }

        lablup-activity-panel {
          color: #000;
        }

        mwc-select {
          font-family: var(--general-font-family);
          --mdc-typography-subtitle1-font-family: var(--general-font-family);
          --mdc-theme-primary: var(--general-sidebar-color);
          --mdc-select-fill-color: transparent;
          --mdc-select-label-ink-color: rgba(0, 0, 0, 0.75);
          --mdc-select-focused-dropdown-icon-color: var(--general-sidebar-color);
          --mdc-select-disabled-dropdown-icon-color: var(--general-sidebar-color);
          --mdc-select-idle-line-color: rgba(0, 0, 0, 0.42);
          --mdc-select-hover-line-color: var(--general-sidebar-color);
          --mdc-select-outlined-idle-border-color: var(--general-sidebar-color);
          --mdc-select-outlined-hover-border-color: var(--general-sidebar-color);
          --mdc-theme-surface: white;
          --mdc-list-vertical-padding: 5px;
          --mdc-list-side-padding: 25px;
          --mdc-list-item__primary-text: {
            height: 20px;
          };
        }
      `]}render(){return n`
      <div class="horizontal layout wrap">
        <lablup-activity-panel title="${d("settings.Image")}" horizontalsize="1x">
          <div slot="message" class="vertical wrap layout">
            <div class="horizontal layout flex setting-item">
              <div class="vertical center-justified layout setting-desc">
                <div class="title">${d("settings.RegisterNewImagesFromRepo")}</div>
                <div class="description">${d("settings.DescRegisterNewImagesFromRepo")}
                </div>
              </div>
              <div class="vertical center-justified layout setting-button">
                <mwc-switch id="register-new-image-switch" disabled></mwc-switch>
              </div>
            </div>
            <div class="horizontal layout flex setting-item">
              <div class="vertical center-justified layout setting-desc">
                <div class="title">${d("settings.ImagePullBehavior")}</div>
                <div class="description">${p("settings.DescImagePullBehavior")}<br />
                    ${d("settings.Require2003orAbove")}
                </div>
              </div>
              <div class="vertical center-justified layout">
                <mwc-select id="ui-image-pulling-behavior"
                            required
                            outlined
                            style="width:120px;"
                            @selected="${t=>this.setImagePullingBehavior(t)}">
                ${this.imagePullingBehavior.map((t=>n`
                  <mwc-list-item value="${t.behavior}"
                                 ?selected=${this.options.image_pulling_behavior===t.behavior}>
                    ${t.name}
                  </mwc-list-item>`))}
                </mwc-select>
              </div>
            </div>
          </div>
        </lablup-activity-panel>
        <lablup-activity-panel title="${d("settings.GUI")}" horizontalsize="1x">
          <div slot="message" class="vertical center layout">
            <div class="horizontal layout flex setting-item">
              <div class="vertical center-justified layout setting-desc">
                <div class="title">${d("settings.UseCLIonGUI")}</div>
                <div class="description">${p("settings.DescUseCLIonGUI")}
                </div>
              </div>
              <div class="vertical center-justified layout setting-button">
                <mwc-switch id="use-cli-on-gui-switch" disabled></mwc-switch>
              </div>
            </div>
            <div class="horizontal layout flex setting-item">
              <div class="vertical center-justified layout setting-desc">
                <div class="title">${d("settings.UseGUIonWeb")}</div>
                <div class="description">${p("settings.DescUseGUIonWeb")}
                </div>
              </div>
              <div class="vertical center-justified layout setting-button">
                <mwc-switch id="use-gui-on-web-switch" disabled></mwc-switch>
              </div>
            </div>
          </div>
        </lablup-activity-panel>
        <lablup-activity-panel title="${d("settings.Scaling")} & ${d("settings.Plugins")}" narrow horizontalsize="2x">
          <div slot="message" class="vertical wrap layout">
            <div class="horizontal wrap layout note" style="background-color:#FFFBE7;width:100%;padding:10px 0px;">
              <p style="margin:auto 10px;">
                ${d("settings.NoteAboutFixedSetup")}
              </p>
            </div>
            <div style="margin:auto 16px;">
                <h3 class="horizontal center layout">
                <span>${d("settings.Scaling")}</span>
                <span class="flex"></span>
              </h3>
              <div class="horizontal wrap layout">
                <div class="horizontal layout wrap setting-item">
                  <div class="vertical center-justified layout" style="width:275px;">
                    <div class="title">${d("settings.AllowAgentSideRegistration")}</div>
                    <div class="description">${p("settings.DescAllowAgentSideRegistration")}
                    </div>
                  </div>
                  <div class="vertical center-justified layout setting-button">
                    <mwc-switch id="allow-agent-registration-switch" checked disabled></mwc-switch>
                  </div>
                </div>
              </div>
              <h3 class="horizontal center layout">
                <span>${d("settings.Plugins")}</span>
                <span class="flex"></span>
              </h3>
              <div class="vertical layout wrap">
                <div class="horizontal layout wrap">
                  <div class="horizontal layout flex setting-item">
                    <div class="vertical center-justified layout setting-desc-shrink">
                      <div class="title">${d("settings.CUDAGPUsupport")}</div>
                      <div class="description">${p("settings.DescCUDAGPUsupport")}
                        ${this.options.cuda_fgpu?n`<br />${d("settings.CUDAGPUdisabledByFGPUsupport")}`:n``}
                      </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                      <mwc-switch id="cuda-gpu-support-switch" ?checked="${this.options.cuda_gpu}" disabled></mwc-switch>
                    </div>
                  </div>
                  <div class="horizontal layout flex setting-item">
                    <div class="vertical center-justified layout setting-desc">
                      <div class="title">${d("settings.ROCMGPUsupport")}</div>
                      <div class="description">${p("settings.DescROCMGPUsupport")}<br />${d("settings.Require1912orAbove")}
                      </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                      <mwc-switch id="rocm-gpu-support-switch" ?checked="${this.options.rocm_gpu}" disabled></mwc-switch>
                    </div>
                  </div>
                </div>
                <div class="horizontal layout flex setting-item-desc">
                  <div class="vertical center-justified layout" style="width:170px;margin-right:10px;">
                    <div class="title">${d("settings.Scheduler")}</div>
                    <div class="description">${d("settings.JobScheduler")}<br/>
                        ${d("settings.Require1912orAbove")}
                    </div>
                  </div>
                  <div class="vertical layout">
                    <mwc-select id="scheduler-switch"
                                required
                                outlined
                                @selected="${t=>this.changeScheduler(t)}"
                                label=""
                                style="width:130px;">
                      ${this.jobschedulerType.map((t=>n`
                        <mwc-list-item value="${t}"
                                      ?selected=${this.options.scheduler===t}>
                          ${t}
                        </mwc-list-item>`))}
                    </mwc-select>
                  </div>
                </div>
                <h3 class="horizontal center layout">
                  <span>${d("settings.EnterpriseFeatures")}</span>
                  <span class="flex"></span>
                </h3>
                <div class="horizontal wrap layout">
                  <div class="horizontal layout flex setting-item">
                    <div class="vertical center-justified layout setting-desc-shrink">
                      <div class="title">${d("settings.FractionalGPU")}</div>
                      <div class="description">${d("settings.DescFractionalGPU")} <br/> ${d("settings.RequireFGPUPlugin")}
                      </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                      <mwc-switch id="fractional-gpu-switch" ?checked="${this.options.cuda_fgpu}" disabled></mwc-switch>
                    </div>
                  </div>
                  <div class="horizontal layout flex setting-item">
                    <div class="vertical center-justified layout setting-desc">
                      <div class="title">${d("settings.TPU")}</div>
                      <div class="description">${d("settings.DescTPU")} <br/>${d("settings.RequireTPUPlugin")}
                      </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                      <mwc-switch id="tpu-switch" ?checked="${this.options.tpu}" disabled></mwc-switch>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </lablup-activity-panel>
      </div>
    `}firstUpdated(){this.notification=globalThis.lablupNotification,void 0===globalThis.backendaiclient||null===globalThis.backendaiclient?document.addEventListener("backend-ai-connected",(()=>{this.updateSettings()}),!0):this.updateSettings()}async _viewStateChanged(t){await this.updateComplete}updateSettings(){globalThis.backendaiclient.setting.get("docker/image/auto_pull").then((t=>{null===t.result||"digest"===t.result?this.options.image_pulling_behavior="digest":"tag"===t.result?this.options.image_pulling_behavior="tag":this.options.image_pulling_behavior="none",this.update(this.options)})),globalThis.backendaiclient.setting.get("plugins/scheduler").then((t=>{null===t.result||"fifo"===t.result?this.options.scheduler="fifo":this.options.scheduler=t.result,this.update(this.options)})),globalThis.backendaiclient.get_resource_slots().then((t=>{"cuda.device"in t&&(this.options.cuda_gpu=!0),"cuda.shares"in t&&(this.options.cuda_fgpu=!0),"rocm.device"in t&&(this.options.rocm_gpu=!0),"tpu.device"in t&&(this.options.tpu=!0),this.update(this.options)}))}setImagePullingBehavior(t){if(null===t.target.selected)return!1;const e=t.target.selected.value;return e!==this.options.image_pulling_behavior&&["none","digest","tag"].includes(e)&&globalThis.backendaiclient.setting.set("docker/image/auto_pull",e).then((t=>{this.options.image_pulling_behavior=e,this.notification.text=i("notification.SuccessfullyUpdated"),this.notification.show(),this.update(this.options),console.log(t)})),!0}changeScheduler(t){if(["fifo","lifo","drf"].includes(t.target.value)){let i=`{${t.target.value}}`;globalThis.backendaiclient.setting.set("plugins/scheduler",i).then((t=>{console.log(t)})).catch((t=>{this.notification.text=r.relieve("Couldn't update scheduler setting."),this.notification.detail=t,this.notification.show(!0,t)}))}}};u([g({type:Object})],h.prototype,"images",void 0),u([g({type:Object})],h.prototype,"options",void 0),u([g({type:Object})],h.prototype,"notification",void 0),u([g({type:Array})],h.prototype,"imagePullingBehavior",void 0),u([g({type:Array})],h.prototype,"jobschedulerType",void 0),h=u([v("backend-ai-settings-view")],h);var m=h;export default m;
