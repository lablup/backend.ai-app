import{B as i,g as t,d as e,I as s,a,n as l,e as n,b as o,h as c,t as d,f as r,_ as u,p as g,c as p}from"./backend-ai-console-16d8a197.js";import{t as h}from"./translate-unsafe-html-f4285a45.js";import"./vaadin-grid-sorter-19260d21.js";import"./mwc-switch-5620be11.js";import"./lablup-activity-panel-fcae250b.js";import"./unsafe-html-18691aa4.js";
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let v=class extends i{constructor(){super(),this.images=Object(),this.options=Object(),this.notification=Object(),this.imagePullingBehavior=[{name:t("settings.image.digest"),behavior:"digest"},{name:t("settings.image.tag"),behavior:"tag"},{name:t("settings.image.none"),behavior:"none"}],this.jobschedulerType=["fifo","lifo","drf"],this.options={image_pulling_behavior:"digest",cuda_gpu:!1,cuda_fgpu:!1,rocm_gpu:!1,tpu:!1,scheduler:"fifo"}}static get is(){return"backend-ai-settings-view"}static get styles(){return[e,s,a,l,n,o`
        div.indicator,
        span.indicator {
          font-size: 9px;
          margin-right: 5px;
        }

        div.title {
          font-size: 14px;
          font-weight: bold;
        }

        div.description,
        span.description {
          font-size: 13px;
          margin-top: 5px;
          margin-right: 5px;
          max-width: 500px;
        }

        div.description-shrink {
          font-size: 13px;
          margin-top: 5px;
          margin-right: 5px;
          width: 260px;
        }

        div.description-extra {
          font-size: 13px;
          margin-top: 5px;
          margin-right: 5px;
          max-width: 500px;
        }

        .setting-item {
          margin: 15px 10px 15px 0px;
          width: auto;
        }

        .setting-desc, .setting-desc-select {
          float: left;
          width: 100%;
        }

        .setting-desc-shrink {
          float: left;
          width: auto;
        }

        .setting-button {
          float: right;
          width: 35px;
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

        @media screen and (max-width: 750px) {
          .setting-desc, .setting-desc-shrink {
            width: 275px;
          }

          .setting-desc-select {
            width: 190px;
          }

          div.description-shrink {
            width: auto;
          }
          
        }

        @media screen and (min-width: 1400px) {
          div.description-extra {
            max-width: 100%;
          }
        }
      `]}render(){return c`
      <div class="horizontal layout wrap">
        <lablup-activity-panel title="${d("settings.Image")}" autowidth>
          <div slot="message" class="horizontal wrap layout">
            <div class="horizontal layout setting-item">
              <div class="vertical center-justified layout setting-desc">
                <div class="title">${d("settings.RegisterNewImagesFromRepo")}</div>
                <div class="description">${d("settings.DescRegisterNewImagesFromRepo")}
                </div>
              </div>
              <div class="vertical center-justified layout setting-button">
                <mwc-switch id="register-new-image-switch" disabled></mwc-switch>
              </div>
            </div>
            <div class="horizontal layout setting-item">
              <div class="vertical center-justified layout setting-desc-select">
                <div class="title">${d("settings.ImagePullBehavior")}</div>
                <div class="description-extra">${h("settings.DescImagePullBehavior")}<br />
                    ${d("settings.Require2003orAbove")}
                </div>
              </div>
              <div class="vertical center-justified layout">
                <mwc-select id="ui-image-pulling-behavior"
                            required
                            outlined
                            style="width:120px;"
                            @selected="${i=>this.setImagePullingBehavior(i)}">
                ${this.imagePullingBehavior.map((i=>c`
                  <mwc-list-item value="${i.behavior}"
                                 ?selected=${this.options.image_pulling_behavior===i.behavior}>
                    ${i.name}
                  </mwc-list-item>`))}
                </mwc-select>
              </div>
            </div>
          </div>
        </lablup-activity-panel>
        <lablup-activity-panel title="${d("settings.GUI")}" autowidth>
          <div slot="message" class="horizontal wrap layout">
            <div class="horizontal layout setting-item">
              <div class="vertical center-justified layout setting-desc-shrink">
                <div class="title">${d("settings.UseCLIonGUI")}</div>
                <div class="description-shrink">${h("settings.DescUseCLIonGUI")}
                </div>
              </div>
              <div class="vertical center-justified layout setting-button">
                <mwc-switch id="use-cli-on-gui-switch" disabled></mwc-switch>
              </div>
            </div>
            <div class="horizontal layout setting-item">
              <div class="vertical center-justified layout setting-desc-shrink">
                <div class="title">${d("settings.UseGUIonWeb")}</div>
                <div class="description-shrink">${h("settings.DescUseGUIonWeb")}
                </div>
              </div>
              <div class="vertical center-justified layout setting-button">
                <mwc-switch id="use-gui-on-web-switch" disabled></mwc-switch>
              </div>
            </div>
          </div>
        </lablup-activity-panel>
        <lablup-activity-panel title="${d("settings.Scaling")} & ${d("settings.Plugins")}" narrow autowidth>
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
                  <div class="vertical center-justified layout setting-desc-shrink">
                    <div class="title">${d("settings.AllowAgentSideRegistration")}</div>
                    <div class="description-shrink">${h("settings.DescAllowAgentSideRegistration")}
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
                <div class="horizontal layout wrap start start-justified">
                  <div class="horizontal layout setting-item">
                    <div class="vertical center-justified layout setting-desc-shrink">
                      <div class="title">${d("settings.CUDAGPUsupport")}</div>
                      <div class="description-shrink">${h("settings.DescCUDAGPUsupport")}
                        ${this.options.cuda_fgpu?c`<br />${d("settings.CUDAGPUdisabledByFGPUsupport")}`:c``}
                      </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                      <mwc-switch id="cuda-gpu-support-switch" ?checked="${this.options.cuda_gpu}" disabled></mwc-switch>
                    </div>
                  </div>
                  <div class="horizontal layout setting-item">
                    <div class="vertical center-justified layout setting-desc-shrink">
                      <div class="title">${d("settings.ROCMGPUsupport")}</div>
                      <div class="description-shrink">${h("settings.DescROCMGPUsupport")}<br />${d("settings.Require1912orAbove")}
                      </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                      <mwc-switch id="rocm-gpu-support-switch" ?checked="${this.options.rocm_gpu}" disabled></mwc-switch>
                    </div>
                  </div>
                  <div class="horizontal layout setting-item">
                    <div class="vertical center-justified layout setting-desc-select" style="margin: 15px 0px;">
                      <div class="title">${d("settings.Scheduler")}</div>
                      <div class="description-shrink">${d("settings.JobScheduler")}<br/>
                          ${d("settings.Require1912orAbove")}
                      </div>
                    </div>
                    <div class="vertical layout center-justified">
                      <mwc-select id="scheduler-switch"
                                  required
                                  outlined
                                  @selected="${i=>this.changeScheduler(i)}"
                                  label=""
                                  style="width:130px;">
                        ${this.jobschedulerType.map((i=>c`
                          <mwc-list-item value="${i}"
                                        ?selected=${this.options.scheduler===i}>
                            ${i}
                          </mwc-list-item>`))}
                      </mwc-select>
                    </div>
                  </div>
                </div>
                <h3 class="horizontal center layout">
                  <span>${d("settings.EnterpriseFeatures")}</span>
                  <span class="flex"></span>
                </h3>
                <div class="horizontal wrap layout">
                  <div class="horizontal layout setting-item">
                    <div class="vertical center-justified layout setting-desc-shrink">
                      <div class="title">${d("settings.FractionalGPU")}</div>
                      <div class="description-shrink">${d("settings.DescFractionalGPU")} <br/> ${d("settings.RequireFGPUPlugin")}
                      </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                      <mwc-switch id="fractional-gpu-switch" ?checked="${this.options.cuda_fgpu}" disabled></mwc-switch>
                    </div>
                  </div>
                  <div class="horizontal layout setting-item">
                    <div class="vertical center-justified layout setting-desc-shrink">
                      <div class="title">${d("settings.TPU")}</div>
                      <div class="description-shrink">${d("settings.DescTPU")} <br/>${d("settings.RequireTPUPlugin")}
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
    `}firstUpdated(){this.notification=globalThis.lablupNotification,void 0===globalThis.backendaiclient||null===globalThis.backendaiclient?document.addEventListener("backend-ai-connected",(()=>{this.updateSettings()}),!0):this.updateSettings()}async _viewStateChanged(i){await this.updateComplete}updateSettings(){globalThis.backendaiclient.setting.get("docker/image/auto_pull").then((i=>{null===i.result||"digest"===i.result?this.options.image_pulling_behavior="digest":"tag"===i.result?this.options.image_pulling_behavior="tag":this.options.image_pulling_behavior="none",this.update(this.options)})),globalThis.backendaiclient.setting.get("plugins/scheduler").then((i=>{null===i.result||"fifo"===i.result?this.options.scheduler="fifo":this.options.scheduler=i.result,this.update(this.options)})),globalThis.backendaiclient.get_resource_slots().then((i=>{"cuda.device"in i&&(this.options.cuda_gpu=!0),"cuda.shares"in i&&(this.options.cuda_fgpu=!0),"rocm.device"in i&&(this.options.rocm_gpu=!0),"tpu.device"in i&&(this.options.tpu=!0),this.update(this.options)}))}setImagePullingBehavior(i){if(null===i.target.selected)return!1;const e=i.target.selected.value;return e!==this.options.image_pulling_behavior&&["none","digest","tag"].includes(e)&&globalThis.backendaiclient.setting.set("docker/image/auto_pull",e).then((i=>{this.options.image_pulling_behavior=e,this.notification.text=t("notification.SuccessfullyUpdated"),this.notification.show(),this.update(this.options),console.log(i)})),!0}changeScheduler(i){if(["fifo","lifo","drf"].includes(i.target.value)){let t=`{${i.target.value}}`;globalThis.backendaiclient.setting.set("plugins/scheduler",t).then((i=>{console.log(i)})).catch((i=>{this.notification.text=r.relieve("Couldn't update scheduler setting."),this.notification.detail=i,this.notification.show(!0,i)}))}}};u([g({type:Object})],v.prototype,"images",void 0),u([g({type:Object})],v.prototype,"options",void 0),u([g({type:Object})],v.prototype,"notification",void 0),u([g({type:Array})],v.prototype,"imagePullingBehavior",void 0),u([g({type:Array})],v.prototype,"jobschedulerType",void 0),v=u([p("backend-ai-settings-view")],v);var m=v;export default m;
