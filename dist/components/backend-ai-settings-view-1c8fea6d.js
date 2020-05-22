import{_ as i,p as t,c as e,d as s,g as a,e as n,I as l,a as o,A as d,f as c,b as r,h as u,t as g,i as p}from"./backend-ai-console-258bce16.js";import"./unsafe-html-ed81f2e2.js";import{t as v}from"./translate-unsafe-html-1391f1ba.js";import"./iron-resizable-behavior-c7edc396.js";import"./vaadin-grid-db23b19c.js";import"./input-behavior-54325f99.js";import"./select-4a89b11d.js";import"./vaadin-grid-sorter-f16f385c.js";import"./switch-540ec4c2.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let h=(()=>{let h=class extends s{constructor(){super(),this.images=Object(),this.options=Object(),this.notification=Object(),this.imagePullingBehavior=[{name:a("settings.image.digest"),behavior:"digest"},{name:a("settings.image.tag"),behavior:"tag"},{name:a("settings.image.none"),behavior:"none"}],this.options={image_pulling_behavior:"digest",cuda_gpu:!1,cuda_fgpu:!1,rocm_gpu:!1,tpu:!1,scheduler:"fifo"}}static get is(){return"backend-ai-settings-view"}static get styles(){return[n,l,o,d,c,r`
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
      `]}render(){return u`
      <wl-card elevation="1">
        <h3 class="horizontal center layout">
          <span>${g("settings.General")}</span>
          <span class="flex"></span>
        </h3>
        <h4 class="horizontal center layout">
          <span>${g("settings.Image")}</span>
          <span class="flex"></span>
        </h4>
        <div class="horizontal wrap layout">
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${g("settings.RegisterNewImagesFromRepo")}</div>
              <div class="description">${g("settings.DescRegisterNewImagesFromRepo")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="register-new-image-switch" disabled></wl-switch>
            </div>
          </div>
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-select-desc">
              <div>${g("settings.ImagePullBehavior")}</div>
              <div class="description">${v("settings.DescImagePullBehavior")}<br />
                  ${g("settings.Require2003orAbove")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-select">
              <mwc-select id="ui-image-pulling-behavior"
                          required
                          @selected="${i=>this.setImagePullingBehavior(i)}">
              ${this.imagePullingBehavior.map(i=>u`
                <mwc-list-item value="${i.behavior}" ?selected=${this.options.image_pulling_behavior===i.behavior}>
                  ${i.name}
                </mwc-list-item>`)}
              </mwc-select>
            </div>

          </div>
        </div>
        <h4 class="horizontal center layout">
          <span>${g("settings.GUI")}</span>
          <span class="flex"></span>
        </h4>
        <div class="horizontal wrap layout">
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${g("settings.UseCLIonGUI")}</div>
              <div class="description">${v("settings.DescUseCLIonGUI")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="use-cli-on-gui-switch" disabled></wl-switchdisabled>
            </div>
          </div>
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${g("settings.UseGUIonWeb")}</div>
              <div class="description">${v("settings.DescUseGUIonWeb")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="use-gui-on-web-switch" disabled></wl-switch>
            </div>
          </div>
        </div>
        <div class="horizontal wrap layout" style="background-color:#FFFBE7;padding: 5px 15px;">
          ${g("settings.NoteAboutFixedSetup")}
        </div>
        <h3 class="horizontal center layout">
            <span>${g("settings.Scaling")}</span>
            <span class="flex"></span>
        </h3>
        <div class="horizontal wrap layout">
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${g("settings.AllowAgentSideRegistration")}</div>
              <div class="description">${v("settings.DescAllowAgentSideRegistration")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="allow-agent-registration-switch" checked disabled></wl-switch>
            </div>
          </div>
        </div>
        <h3 class="horizontal center layout">
            <span>${g("settings.Plugins")}</span>
            <span class="flex"></span>
        </h3>
        <div class="horizontal wrap layout">
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${g("settings.CUDAGPUsupport")}</div>
              <div class="description">${v("settings.DescCUDAGPUsupport")}
              ${this.options.cuda_fgpu?u`<br />${g("settings.CUDAGPUdisabledByFGPUsupport")}`:u``}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="cuda-gpu-support-switch" ?checked="${this.options.cuda_gpu}" disabled></wl-switch>
            </div>
          </div>
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${g("settings.ROCMGPUsupport")}</div>
              <div class="description">${v("settings.DescROCMGPUsupport")}<br />${g("settings.Require1912orAbove")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="rocm-gpu-support-switch" ?checked="${this.options.rocm_gpu}" disabled></wl-switch>
            </div>
          </div>
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc-pulldown">
              <div>${g("settings.Scheduler")}</div>
              <div class="description">${g("settings.JobScheduler")}<br/>
                  ${g("settings.Require1912orAbove")}
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
          <span>${g("settings.EnterpriseFeatures")}</span>
          <span class="flex"></span>
        </h3>
        <div class="horizontal wrap layout">
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${g("settings.FractionalGPU")}</div>
              <div class="description">${g("settings.DescFractionalGPU")} <br/> ${g("settings.RequireFGPUPlugin")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="fractional-gpu-switch" ?checked="${this.options.cuda_fgpu}" disabled></wl-switch>
            </div>
          </div>
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${g("settings.TPU")}</div>
              <div class="description">${g("settings.DescTPU")} <br/>${g("settings.RequireTPUPlugin")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="tpu-switch" ?checked="${this.options.tpu}" disabled></wl-switch>
            </div>
          </div>
        </div>
      </wl-card>
    `}firstUpdated(){this.notification=globalThis.lablupNotification,void 0===globalThis.backendaiclient||null===globalThis.backendaiclient?document.addEventListener("backend-ai-connected",()=>{this.updateSettings()},!0):this.updateSettings()}async _viewStateChanged(i){await this.updateComplete}updateSettings(){globalThis.backendaiclient.setting.get("docker/image/auto_pull").then(i=>{null===i.result||"digest"===i.result?this.options.image_pulling_behavior="digest":"tag"===i.result?this.options.image_pulling_behavior="tag":this.options.image_pulling_behavior="none",this.update(this.options)}),globalThis.backendaiclient.setting.get("plugins/scheduler").then(i=>{null===i.result||"fifo"===i.result?this.options.scheduler="fifo":this.options.scheduler=i.result,this.update(this.options)}),globalThis.backendaiclient.getResourceSlots().then(i=>{"cuda.device"in i&&(this.options.cuda_gpu=!0),"cuda.shares"in i&&(this.options.cuda_fgpu=!0),"rocm.device"in i&&(this.options.rocm_gpu=!0),"tpu.device"in i&&(this.options.tpu=!0),this.update(this.options)})}setImagePullingBehavior(i){if(null===i.target.selected)return!1;const t=i.target.selected.value;return t!==this.options.image_pulling_behavior&&["none","digest","tag"].includes(t)&&globalThis.backendaiclient.setting.set("docker/image/auto_pull",t).then(i=>{this.options.image_pulling_behavior=t,this.notification.text=a("notification.SuccessfullyUpdated"),this.notification.show(),this.update(this.options),console.log(i)}),!0}changeScheduler(i){if(["fifo","lifo","drf"].includes(i.target.value)){let t=`{${i.target.value}}`;globalThis.backendaiclient.setting.set("plugins/scheduler",t).then(i=>{console.log(i)}).catch(i=>{this.notification.text=p.relieve("Couldn't update scheduler setting."),this.notification.detail=i,this.notification.show(!0,i)})}}};return i([t({type:Object})],h.prototype,"images",void 0),i([t({type:Object})],h.prototype,"options",void 0),i([t({type:Object})],h.prototype,"notification",void 0),i([t({type:Array})],h.prototype,"imagePullingBehavior",void 0),h=i([e("backend-ai-settings-view")],h),h})();export default h;
