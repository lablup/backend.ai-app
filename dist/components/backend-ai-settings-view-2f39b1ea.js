import{d as i,g as t,e,I as s,a,G as n,f as l,b as o,h as d,t as c,i as r,_ as u,p as g,c as p}from"./backend-ai-console-969654a6.js";import"./unsafe-html-7ea71d74.js";import{t as v}from"./translate-unsafe-html-ae9d82e4.js";import"./iron-resizable-behavior-1c6a25ef.js";import"./vaadin-grid-54115755.js";import"./input-behavior-31a4f7aa.js";import"./select-d9b0247d.js";import"./vaadin-grid-sorter-8611ddda.js";import"./switch-3cdf51c7.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let h=class extends i{constructor(){super(),this.images=Object(),this.options=Object(),this.notification=Object(),this.imagePullingBehavior=[{name:t("settings.image.digest"),behavior:"digest"},{name:t("settings.image.tag"),behavior:"tag"},{name:t("settings.image.none"),behavior:"none"}],this.options={image_pulling_behavior:"digest",cuda_gpu:!1,cuda_fgpu:!1,rocm_gpu:!1,tpu:!1,scheduler:"fifo"}}static get is(){return"backend-ai-settings-view"}static get styles(){return[e,s,a,n,l,o`
        div.indicator,
        span.indicator {
          font-size: 9px;
          margin-right: 5px;
        }

        div.description,
        span.description {
          font-size: 11px;
          margin-top: 5px;
          margin-right: 5px;
        }

        .setting-item {
          margin: 15px 10px;
          width: 340px;
        }

        .setting-desc {
          width: 300px;
        }

        .setting-button {
          width: 35px;
        }

        .setting-select-desc {
          width: 200px;
        }

        .setting-select {
          width: 135px;
        }

        .setting-desc-pulldown {
          width: 265px;
        }

        .setting-pulldown {
          width: 70px;
        }

        wl-card > div {
          padding: 15px;
        }
      `]}render(){return d`
      <wl-card elevation="1">
        <h3 class="horizontal center layout">
          <span>${c("settings.General")}</span>
          <span class="flex"></span>
        </h3>
        <h4 class="horizontal center layout">
          <span>${c("settings.Image")}</span>
          <span class="flex"></span>
        </h4>
        <div class="horizontal wrap layout">
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${c("settings.RegisterNewImagesFromRepo")}</div>
              <div class="description">${c("settings.DescRegisterNewImagesFromRepo")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="register-new-image-switch" disabled></wl-switch>
            </div>
          </div>
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-select-desc">
              <div>${c("settings.ImagePullBehavior")}</div>
              <div class="description">${v("settings.DescImagePullBehavior")}<br />
                  ${c("settings.Require2003orAbove")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-select">
              <mwc-select id="ui-image-pulling-behavior"
                          required
                          @selected="${i=>this.setImagePullingBehavior(i)}">
              ${this.imagePullingBehavior.map(i=>d`
                <mwc-list-item value="${i.behavior}" ?selected=${this.options.image_pulling_behavior===i.behavior}>
                  ${i.name}
                </mwc-list-item>`)}
              </mwc-select>
            </div>

          </div>
        </div>
        <h4 class="horizontal center layout">
          <span>${c("settings.GUI")}</span>
          <span class="flex"></span>
        </h4>
        <div class="horizontal wrap layout">
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${c("settings.UseCLIonGUI")}</div>
              <div class="description">${v("settings.DescUseCLIonGUI")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="use-cli-on-gui-switch" disabled></wl-switchdisabled>
            </div>
          </div>
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${c("settings.UseGUIonWeb")}</div>
              <div class="description">${v("settings.DescUseGUIonWeb")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="use-gui-on-web-switch" disabled></wl-switch>
            </div>
          </div>
        </div>
        <div class="horizontal wrap layout" style="background-color:#FFFBE7;padding: 5px 15px;">
          ${c("settings.NoteAboutFixedSetup")}
        </div>
        <h3 class="horizontal center layout">
            <span>${c("settings.Scaling")}</span>
            <span class="flex"></span>
        </h3>
        <div class="horizontal wrap layout">
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${c("settings.AllowAgentSideRegistration")}</div>
              <div class="description">${v("settings.DescAllowAgentSideRegistration")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="allow-agent-registration-switch" checked disabled></wl-switch>
            </div>
          </div>
        </div>
        <h3 class="horizontal center layout">
            <span>${c("settings.Plugins")}</span>
            <span class="flex"></span>
        </h3>
        <div class="horizontal wrap layout">
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${c("settings.CUDAGPUsupport")}</div>
              <div class="description">${v("settings.DescCUDAGPUsupport")}
              ${this.options.cuda_fgpu?d`<br />${c("settings.CUDAGPUdisabledByFGPUsupport")}`:d``}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="cuda-gpu-support-switch" ?checked="${this.options.cuda_gpu}" disabled></wl-switch>
            </div>
          </div>
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${c("settings.ROCMGPUsupport")}</div>
              <div class="description">${v("settings.DescROCMGPUsupport")}<br />${c("settings.Require1912orAbove")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="rocm-gpu-support-switch" ?checked="${this.options.rocm_gpu}" disabled></wl-switch>
            </div>
          </div>
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc-pulldown">
              <div>${c("settings.Scheduler")}</div>
              <div class="description">${c("settings.JobScheduler")}<br/>
                  ${c("settings.Require1912orAbove")}
              </div>
            </div>
            <div class="vertical layout setting-pulldown">
              <wl-select name="scheduler-switch" id="scheduler-switch" required @change="${i=>this.changeScheduler(i)}">
                <option value="fifo" ?selected="${"fifo"===this.options.scheduler}">FIFO</option>
                <option value="lifo" ?selected="${"lifo"===this.options.scheduler}">LIFO</option>
                <option value="drf" ?selected="${"drf"===this.options.scheduler}">DRF</option>
              </wl-select>
            </div>
          </div>
        </div>
        <h3 class="horizontal center layout">
          <span>${c("settings.EnterpriseFeatures")}</span>
          <span class="flex"></span>
        </h3>
        <div class="horizontal wrap layout">
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${c("settings.FractionalGPU")}</div>
              <div class="description">${c("settings.DescFractionalGPU")} <br/> ${c("settings.RequireFGPUPlugin")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="fractional-gpu-switch" ?checked="${this.options.cuda_fgpu}" disabled></wl-switch>
            </div>
          </div>
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${c("settings.TPU")}</div>
              <div class="description">${c("settings.DescTPU")} <br/>${c("settings.RequireTPUPlugin")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="tpu-switch" ?checked="${this.options.tpu}" disabled></wl-switch>
            </div>
          </div>
        </div>
      </wl-card>
    `}firstUpdated(){this.notification=globalThis.lablupNotification,void 0===globalThis.backendaiclient||null===globalThis.backendaiclient?document.addEventListener("backend-ai-connected",()=>{this.updateSettings()},!0):this.updateSettings()}async _viewStateChanged(i){await this.updateComplete}updateSettings(){globalThis.backendaiclient.setting.get("docker/image/auto_pull").then(i=>{null===i.result||"digest"===i.result?this.options.image_pulling_behavior="digest":"tag"===i.result?this.options.image_pulling_behavior="tag":this.options.image_pulling_behavior="none",this.update(this.options)}),globalThis.backendaiclient.setting.get("plugins/scheduler").then(i=>{null===i.result||"fifo"===i.result?this.options.scheduler="fifo":this.options.scheduler=i.result,this.update(this.options)}),globalThis.backendaiclient.getResourceSlots().then(i=>{"cuda.device"in i&&(this.options.cuda_gpu=!0),"cuda.shares"in i&&(this.options.cuda_fgpu=!0),"rocm.device"in i&&(this.options.rocm_gpu=!0),"tpu.device"in i&&(this.options.tpu=!0),this.update(this.options)})}setImagePullingBehavior(i){if(null===i.target.selected)return!1;const e=i.target.selected.value;return e!==this.options.image_pulling_behavior&&["none","digest","tag"].includes(e)&&globalThis.backendaiclient.setting.set("docker/image/auto_pull",e).then(i=>{this.options.image_pulling_behavior=e,this.notification.text=t("notification.SuccessfullyUpdated"),this.notification.show(),this.update(this.options),console.log(i)}),!0}changeScheduler(i){if(["fifo","lifo","drf"].includes(i.target.value)){let t=`{${i.target.value}}`;globalThis.backendaiclient.setting.set("plugins/scheduler",t).then(i=>{console.log(i)}).catch(i=>{this.notification.text=r.relieve("Couldn't update scheduler setting."),this.notification.detail=i,this.notification.show(!0,i)})}}};u([g({type:Object})],h.prototype,"images",void 0),u([g({type:Object})],h.prototype,"options",void 0),u([g({type:Object})],h.prototype,"notification",void 0),u([g({type:Array})],h.prototype,"imagePullingBehavior",void 0),h=u([p("backend-ai-settings-view")],h);var w=h;export default w;
