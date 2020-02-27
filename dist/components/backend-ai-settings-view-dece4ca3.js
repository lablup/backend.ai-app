import{k as i,I as t,j as e,ac as s,l as a,a as d,h as n,m as o,_ as c,p as l,c as r}from"./backend-ai-console-1d877d5d.js";import{B as u}from"./backend-ai-page-45fe2b63.js";import"./iron-resizable-behavior-e60ed36f.js";import"./vaadin-grid-46425869.js";import"./vaadin-grid-sorter-7cd4a75c.js";import"./index-20ac32e7.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let p=class extends u{constructor(){super(),this.images=Object(),this.options=Object(),this.notification=Object(),this.options={automatic_image_update:!1,cuda_gpu:!1,cuda_fgpu:!1,rocm_gpu:!1,tpu:!1,scheduler:"fifo"}}static get is(){return"backend-ai-settings-view"}static get styles(){return[i,t,e,s,a,d`
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
      `]}render(){return n`
        <wl-card elevation="1">
            <h3 class="horizontal center layout">
                <span>General</span>
                <span class="flex"></span>
            </h3>
            <div class="horizontal wrap layout">
                <div class="horizontal layout wrap setting-item">
                    <div class="vertical center-justified layout setting-desc">
                        <div>Register new images from repository</div>
                        <div class="description">Register new environments from repository.
                        </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                        <wl-switch id="register-new-image-switch" disabled></wl-switch>
                    </div>
                </div>
                <div class="horizontal layout wrap setting-item">
                    <div class="vertical center-justified layout setting-desc">
                        <div>Automatic image update from repository</div>
                        <div class="description">When new image comes out, update current image automatically. Please turn off when you preserve the current environment without updating.
                        </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                        <wl-switch id="allow-image-update-switch" @change="${i=>this.toggleImageUpdate(i)}" ?checked="${this.options.automatic_image_update}"></wl-switch>
                    </div>
                </div>
                <div class="horizontal layout wrap setting-item">
                    <div class="vertical center-justified layout setting-desc">
                        <div>Use Backend.AI CLI on GUI</div>
                        <div class="description">Provide Backend.AI CLI on GUI app/web.<br/>Requires Backend.AI CLI image.
                        </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                        <wl-switch id="use-cli-on-gui-switch" disabled></wl-switchdisabled>
                    </div>
                </div>
                <div class="horizontal layout wrap setting-item">
                    <div class="vertical center-justified layout setting-desc">
                        <div>Use Backend.AI GUI on Web</div>
                        <div class="description">Provide Backend.AI GUI as a web service.<br/>Requires Backend.AI Console image.
                        </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                        <wl-switch id="use-gui-on-web-switch" disabled></wl-switch>
                    </div>
                </div>
            </div>
            <div class="horizontal wrap layout" style="background-color:#FFFBE7;padding: 5px 15px;">
              Note: The settings below are automatically applied depending on the installation environment and status.
            </div>
            <h3 class="horizontal center layout">
                <span>Scaling</span>
                <span class="flex"></span>
            </h3>
            <div class="horizontal wrap layout">
                <div class="horizontal layout wrap setting-item">
                    <div class="vertical center-justified layout setting-desc">
                        <div>Allow agent-side registration</div>
                        <div class="description">Allow agent to register itself to manager.<br/>Use only if Backend.AI cluster is
                            managed on secure location.
                        </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                        <wl-switch id="allow-agent-registration-switch" checked disabled></wl-switch>
                    </div>
                </div>
            </div>
            <h3 class="horizontal center layout">
                <span>Plugins</span>
                <span class="flex"></span>
            </h3>
            <div class="horizontal wrap layout">
                <div class="horizontal layout wrap setting-item">
                    <div class="vertical center-justified layout setting-desc">
                        <div>CUDA GPU support</div>
                        <div class="description">NVidia CUDA GPU support. <br/>Requires Backend.AI CUDA Plugin.
                        ${this.options.cuda_fgpu?n`<br />Disabled because system uses Fractional GPU plugin`:n``}
                        </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                        <wl-switch id="cuda-gpu-support-switch" ?checked="${this.options.cuda_gpu}" disabled></wl-switch>
                    </div>
                </div>
                <div class="horizontal layout wrap setting-item">
                    <div class="vertical center-justified layout setting-desc">
                        <div>ROCm GPU support</div>
                        <div class="description">AMD ROCm GPU support. <br/>Requires Backend.AI ROCm Plugin. <br/>
                            Requires Backend.AI 19.12 or above.
                        </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                      <wl-switch id="rocm-gpu-support-switch" ?checked="${this.options.rocm_gpu}" disabled></wl-switch>
                    </div>
                </div>
                <div class="horizontal layout wrap setting-item">
                    <div class="vertical center-justified layout setting-desc-pulldown">
                        <div>Scheduler</div>
                        <div class="description">Job scheduler.<br/>
                            Requires Backend.AI 19.12 or above.
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
                <span>Enterprise features</span>
                <span class="flex"></span>
            </h3>
            <div class="horizontal wrap layout">
                <div class="horizontal layout wrap setting-item">
                    <div class="vertical center-justified layout setting-desc">
                        <div>Fractional GPU</div>
                        <div class="description">Use Fractional GPU feature with GPU virtualization. <br/>Requires Backend.AI Virtual CUDA API Layer Plugin.
                        </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                        <wl-switch id="fractional-gpu-switch" ?checked="${this.options.cuda_fgpu}" disabled></wl-switch>
                    </div>
                </div>
                <div class="horizontal layout wrap setting-item">
                    <div class="vertical center-justified layout setting-desc">
                        <div>TPU</div>
                        <div class="description">Use TPU accelerator. <br/>Requires resource nodes on Google Cloud with Cloud TPU
                            enabled.
                        </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                        <wl-switch id="tpu-switch" ?checked="${this.options.tpu}" disabled></wl-switch>
                    </div>
                </div>
            </div>
        </wl-card>
    `}firstUpdated(){this.notification=window.lablupNotification,void 0===window.backendaiclient||null===window.backendaiclient?document.addEventListener("backend-ai-connected",()=>{this.updateSettings()},!0):this.updateSettings()}async _viewStateChanged(i){await this.updateComplete}updateSettings(){window.backendaiclient.setting.get("docker/image/auto_pull").then(i=>{null===i.result||"digest"===i.result?this.options.automatic_image_update=!0:"tag"!==i.result&&"none"!==i.result||(this.options.automatic_image_update=!1),this.update(this.options)}),window.backendaiclient.setting.get("plugins/scheduler").then(i=>{null===i.result||"fifo"===i.result?this.options.scheduler="fifo":this.options.scheduler=i.result,this.update(this.options)}),window.backendaiclient.getResourceSlots().then(i=>{"cuda.device"in i&&(this.options.cuda_gpu=!0),"cuda.shares"in i&&(this.options.cuda_fgpu=!0),"rocm.device"in i&&(this.options.rocm_gpu=!0),"tpu.device"in i&&(this.options.tpu=!0),this.update(this.options)})}toggleImageUpdate(i){!1===i.target.checked?window.backendaiclient.setting.set("docker/image/auto_pull","none").then(i=>{console.log(i)}):window.backendaiclient.setting.set("docker/image/auto_pull","digest").then(i=>{console.log(i)})}changeScheduler(i){if(["fifo","lifo","drf"].includes(i.target.value)){let t=`{${i.target.value}}`;window.backendaiclient.setting.set("plugins/scheduler",t).then(i=>{console.log(i)}).catch(i=>{this.notification.text=o.relieve("Couldn't update scheduler setting."),this.notification.detail=i,this.notification.show(!0,i)})}}};c([l({type:Object})],p.prototype,"images",void 0),c([l({type:Object})],p.prototype,"options",void 0),c([l({type:Object})],p.prototype,"notification",void 0),p=c([r("backend-ai-settings-view")],p);var v=p;export default v;
