import{B as i,I as t,e,f as s,g as a,c as d,h as o,b as n,p as c,d as l}from"./iron-flex-layout-classes-ee69fac0.js";import"./switch-behavior-4e1a81fd.js";import"./input-behavior-872d13be.js";import"./index-cb0c7803.js";import{B as r}from"./backend-ai-page-3369cbe3.js";import"./iron-resizable-behavior-a95821af.js";import"./vaadin-grid-2601235c.js";import"./vaadin-grid-sorter-1321c4aa.js";import"./index-ae7a7b9a.js";let u=class extends r{constructor(){super(),this.images=Object(),this.options=Object(),this.options={automatic_image_update:!1,cuda_gpu:!1,cuda_fgpu:!1,rocm_gpu:!1,tpu:!1,scheduler:"fifo"}}static get is(){return"backend-ai-settings-view"}static get styles(){return[i,t,e,s,a,d`
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

        wl-card > div {
          padding: 15px;
        }
      `]}render(){return o`
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
                        <div class="description">Allow automatic image update from registered registries.
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
                        ${this.options.cuda_fgpu?o`<br />Disabled because system uses Fractional GPU plugin`:o``}
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
                    <div class="vertical center-justified layout setting-desc">
                        <div>Scheduler</div>
                        <div class="description">Job scheduler.<br/>
                            Requires Backend.AI 19.12 or above.
                        </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
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
    `}firstUpdated(){void 0===window.backendaiclient||null===window.backendaiclient?document.addEventListener("backend-ai-connected",()=>{this.updateSettings()},!0):this.updateSettings()}async _viewStateChanged(i){await this.updateComplete}updateSettings(){window.backendaiclient.setting.get("docker/image/auto_pull").then(i=>{null===i.result||"digest"===i.result?this.options.automatic_image_update=!0:"tag"!==i.result&&"none"!==i.result||(this.options.automatic_image_update=!1),this.update(this.options)}),window.backendaiclient.setting.get("plugins/scheduler").then(i=>{null===i.result||"fifo"===i.result?this.options.scheduler="fifo":this.options.scheduler=i.result,this.update(this.options)}),window.backendaiclient.getResourceSlots().then(i=>{"cuda.device"in i&&(this.options.cuda_gpu=!0),"cuda.shares"in i&&(this.options.cuda_fgpu=!0),"rocm.device"in i&&(this.options.rocm_gpu=!0),"tpu.device"in i&&(this.options.tpu=!0),this.update(this.options)})}toggleImageUpdate(i){!1===i.target.checked?window.backendaiclient.setting.set("docker/image/auto_pull","none").then(i=>{console.log(i)}):window.backendaiclient.setting.set("docker/image/auto_pull","digest").then(i=>{console.log(i)})}changeScheduler(i){["fifo","lifo","drf"].includes(i.target.value)&&window.backendaiclient.setting.set("plugins/scheduler",i.target.value).then(i=>{console.log(i)})}};n([c({type:Object})],u.prototype,"images",void 0),n([c({type:Boolean})],u.prototype,"options",void 0);var p=u=n([l("backend-ai-settings-view")],u);export default p;
