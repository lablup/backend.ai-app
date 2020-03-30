import{d as t,e as i,I as e,a as s,D as a,f as d,b as n,h as o,t as l,g as c,_ as r,p as u,c as p}from"./backend-ai-console-52da7ce1.js";import"./unsafe-html-4738bd5b.js";import{t as g}from"./translate-unsafe-html-ea8ee2dc.js";import"./iron-resizable-behavior-5743f649.js";import"./vaadin-grid-369d5b12.js";import"./vaadin-grid-sorter-250e386d.js";import"./switch-dc3c675f.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let v=class extends t{constructor(){super(),this.images=Object(),this.options=Object(),this.notification=Object(),this.options={automatic_image_update:!1,cuda_gpu:!1,cuda_fgpu:!1,rocm_gpu:!1,tpu:!1,scheduler:"fifo"}}static get is(){return"backend-ai-settings-view"}static get styles(){return[i,e,s,a,d,n`
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

        .setting-desc-pulldown {
          width: 265px;
        }

        .setting-pulldown {
          width: 70px;
        }

        wl-card > div {
          padding: 15px;
        }
      `]}render(){return o`
      <wl-card elevation="1">
        <h3 class="horizontal center layout">
          <span>${l("settings.General")}</span>
          <span class="flex"></span>
        </h3>
        <div class="horizontal wrap layout">
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${l("settings.RegisterNewImagesFromRepo")}</div>
              <div class="description">${l("settings.DescRegisterNewImagesFromRepo")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="register-new-image-switch" disabled></wl-switch>
            </div>
          </div>
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${l("settings.AutomaticImageUpdateFromRepo")}</div>
              <div class="description">${g("settings.DescAutomaticImageUpdateFromRepo")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="allow-image-update-switch" @change="${t=>this.toggleImageUpdate(t)}" ?checked="${this.options.automatic_image_update}"></wl-switch>
            </div>
          </div>
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${l("settings.UseCLIonGUI")}</div>
              <div class="description">${g("settings.DescUseCLIonGUI")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="use-cli-on-gui-switch" disabled></wl-switchdisabled>
            </div>
          </div>
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${l("settings.UseGUIonWeb")}</div>
              <div class="description">${g("settings.DescUseGUIonWeb")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="use-gui-on-web-switch" disabled></wl-switch>
            </div>
          </div>
        </div>
        <div class="horizontal wrap layout" style="background-color:#FFFBE7;padding: 5px 15px;">
          ${l("settings.NoteAboutFixedSetup")}
        </div>
        <h3 class="horizontal center layout">
            <span>${l("settings.Scaling")}</span>
            <span class="flex"></span>
        </h3>
        <div class="horizontal wrap layout">
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${l("settings.AllowAgentSideRegistration")}</div>
              <div class="description">${g("settings.DescAllowAgentSideRegistration")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="allow-agent-registration-switch" checked disabled></wl-switch>
            </div>
          </div>
        </div>
        <h3 class="horizontal center layout">
            <span>${l("settings.Plugins")}</span>
            <span class="flex"></span>
        </h3>
        <div class="horizontal wrap layout">
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${l("settings.CUDAGPUsupport")}</div>
              <div class="description">${g("settings.DescCUDAGPUsupport")}
              ${this.options.cuda_fgpu?o`<br />${l("settings.CUDAGPUdisabledByFGPUsupport")}`:o``}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="cuda-gpu-support-switch" ?checked="${this.options.cuda_gpu}" disabled></wl-switch>
            </div>
          </div>
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${l("settings.ROCMGPUsupport")}</div>
              <div class="description">${g("settings.DescROCMGPUsupport")}<br />${l("settings.Require1912orAbove")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="rocm-gpu-support-switch" ?checked="${this.options.rocm_gpu}" disabled></wl-switch>
            </div>
          </div>
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc-pulldown">
              <div>${l("settings.Scheduler")}</div>
              <div class="description">${l("settings.JobScheduler")}<br/>
                  ${l("settings.Require1912orAbove")}
              </div>
            </div>
            <div class="vertical layout setting-pulldown">
              <wl-select name="scheduler-switch" id="scheduler-switch" required @change="${t=>this.changeScheduler(t)}">
                <option value="fifo" ?selected="${"fifo"===this.options.scheduler}">FIFO</option>
                <option value="lifo" ?selected="${"lifo"===this.options.scheduler}">LIFO</option>
                <option value="drf" ?selected="${"drf"===this.options.scheduler}">DRF</option>
              </wl-select>
            </div>
          </div>
        </div>
        <h3 class="horizontal center layout">
          <span>${l("settings.EnterpriseFeatures")}</span>
          <span class="flex"></span>
        </h3>
        <div class="horizontal wrap layout">
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${l("settings.FractionalGPU")}</div>
              <div class="description">${l("settings.DescFractionalGPU")} <br/> ${l("settings.RequireFGPUPlugin")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="fractional-gpu-switch" ?checked="${this.options.cuda_fgpu}" disabled></wl-switch>
            </div>
          </div>
          <div class="horizontal layout wrap setting-item">
            <div class="vertical center-justified layout setting-desc">
              <div>${l("settings.TPU")}</div>
              <div class="description">${l("settings.DescTPU")} <br/>${l("settings.RequireTPUPlugin")}
              </div>
            </div>
            <div class="vertical center-justified layout setting-button">
              <wl-switch id="tpu-switch" ?checked="${this.options.tpu}" disabled></wl-switch>
            </div>
          </div>
        </div>
      </wl-card>
    `}firstUpdated(){this.notification=globalThis.lablupNotification,void 0===globalThis.backendaiclient||null===globalThis.backendaiclient?document.addEventListener("backend-ai-connected",()=>{this.updateSettings()},!0):this.updateSettings()}async _viewStateChanged(t){await this.updateComplete}updateSettings(){globalThis.backendaiclient.setting.get("docker/image/auto_pull").then(t=>{null===t.result||"digest"===t.result?this.options.automatic_image_update=!0:"tag"!==t.result&&"none"!==t.result||(this.options.automatic_image_update=!1),this.update(this.options)}),globalThis.backendaiclient.setting.get("plugins/scheduler").then(t=>{null===t.result||"fifo"===t.result?this.options.scheduler="fifo":this.options.scheduler=t.result,this.update(this.options)}),globalThis.backendaiclient.getResourceSlots().then(t=>{"cuda.device"in t&&(this.options.cuda_gpu=!0),"cuda.shares"in t&&(this.options.cuda_fgpu=!0),"rocm.device"in t&&(this.options.rocm_gpu=!0),"tpu.device"in t&&(this.options.tpu=!0),this.update(this.options)})}toggleImageUpdate(t){!1===t.target.checked?globalThis.backendaiclient.setting.set("docker/image/auto_pull","none").then(t=>{console.log(t)}):globalThis.backendaiclient.setting.set("docker/image/auto_pull","digest").then(t=>{console.log(t)})}changeScheduler(t){if(["fifo","lifo","drf"].includes(t.target.value)){let i=`{${t.target.value}}`;globalThis.backendaiclient.setting.set("plugins/scheduler",i).then(t=>{console.log(t)}).catch(t=>{this.notification.text=c.relieve("Couldn't update scheduler setting."),this.notification.detail=t,this.notification.show(!0,t)})}}};r([u({type:Object})],v.prototype,"images",void 0),r([u({type:Object})],v.prototype,"options",void 0),r([u({type:Object})],v.prototype,"notification",void 0),v=r([p("backend-ai-settings-view")],v);var h=v;export default h;
