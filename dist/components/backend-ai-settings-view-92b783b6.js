import{B as t,g as i,d as e,I as s,a as o,n,e as a,b as l,h as c,t as d,f as r,_ as h,p as u,c as p}from"./backend-ai-webui-ecfefd57.js";import{t as g}from"./translate-unsafe-html-d6230cc4.js";import"./vaadin-grid-8bd957e2.js";import"./vaadin-grid-sorter-39f1b30b.js";import"./mwc-switch-f59712f6.js";import"./lablup-activity-panel-7a32eadc.js";import"./unsafe-html-50c8e728.js";
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let v=class extends t{constructor(){super(),this.images=Object(),this.options=Object(),this.schedulerOptions=Object(),this.schedulerOptionsAndId=Object(),this.notification=Object(),this.imagePullingBehavior=[{name:i("settings.image.digest"),behavior:"digest"},{name:i("settings.image.tag"),behavior:"tag"},{name:i("settings.image.none"),behavior:"none"}],this.jobschedulerType=["fifo","lifo","drf"],this.selectedSchedulerType="",this._helpDescriptionTitle="",this._helpDescription="",this.numRetriesRange={min:0,max:1e3},this.options={image_pulling_behavior:"digest",cuda_gpu:!1,cuda_fgpu:!1,rocm_gpu:!1,tpu:!1,scheduler:"fifo"},this.schedulerOptions={num_retries_to_skip:"0"},this.schedulerOptionsAndId=[{option:"num_retries_to_skip",id:"num-retries"}]}static get is(){return"backend-ai-settings-view"}static get styles(){return[e,s,o,n,a,l`
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

        #help-description {
          --component-width: 350px;
        }

        #env-dialog {
          --component-max-height: 800px;
          --component-width: 400px;
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

        mwc-textfield#num-retries {
          width: 10rem;
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
                <div class="description-extra">${g("settings.DescImagePullBehavior")}<br />
                    ${d("settings.Require2003orAbove")}
                </div>
              </div>
              <div class="vertical center-justified layout">
                <mwc-select id="ui-image-pulling-behavior"
                            required
                            outlined
                            style="width:120px;"
                            @selected="${t=>this.setImagePullingBehavior(t)}">
                ${this.imagePullingBehavior.map((t=>c`
                  <mwc-list-item value="${t.behavior}"
                                 ?selected=${this.options.image_pulling_behavior===t.behavior}>
                    ${t.name}
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
                <div class="description-shrink">${g("settings.DescUseCLIonGUI")}
                </div>
              </div>
              <div class="vertical center-justified layout setting-button">
                <mwc-switch id="use-cli-on-gui-switch" disabled></mwc-switch>
              </div>
            </div>
            <div class="horizontal layout setting-item">
              <div class="vertical center-justified layout setting-desc-shrink">
                <div class="title">${d("settings.UseGUIonWeb")}</div>
                <div class="description-shrink">${g("settings.DescUseGUIonWeb")}
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
                    <div class="description-shrink">${g("settings.DescAllowAgentSideRegistration")}
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
                      <div class="description-shrink">${g("settings.DescCUDAGPUsupport")}
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
                      <div class="description-shrink">${g("settings.DescROCMGPUsupport")}<br />${d("settings.Require1912orAbove")}
                      </div>
                    </div>
                    <div class="vertical center-justified layout setting-button">
                      <mwc-switch id="rocm-gpu-support-switch" ?checked="${this.options.rocm_gpu}" disabled></mwc-switch>
                    </div>
                  </div>
                  <div class="horizontal layout setting-item">
                    <div class="vertical center-justified layout setting-desc-select" style="margin: 15px 0px;">
                      <div class="title">${d("settings.Scheduler")}</div>
                      <div class="description-shrink">${d("settings.SchedulerConfiguration")}<br/>
                          ${d("settings.Require2009orAbove")}
                      </div>
                    </div>
                    <div class="vertical center-justified layout">
                      <mwc-button
                        unelevated
                        icon="rule"
                        label="${d("settings.Config")}"
                        style="float: right;"
                        @click="${()=>this._showEnvDialog()}"></mwc-button>
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
        <backend-ai-dialog id="env-dialog" fixed backdrop persistent closeWithConfirmation>
          <span slot="title" class="horizontal layout center">${g("settings.ConfigPerJobSchduler")}</span>
          <span slot="action">
            <mwc-icon-button icon="info" @click="${t=>this._showConfigDescription(t,"default")}" style="pointer-events:auto;"></mwc-icon-button>
          </span>
          <div slot="content" id="env-container" class="vertical layout centered" style="width: 100%;">
            <mwc-select
              id="scheduler-switch"
              required
              label="${d("settings.Scheduler")}"
              style="margin-bottom: 10px;"
              validationMessage="${d("settings.SchedulerRequired")}"
              @selected="${t=>this.changeSelectedScheduleType(t)}">
              ${this.jobschedulerType.map((t=>c`
                <mwc-list-item value="${t}">
                  ${t.toUpperCase()}
                </mwc-list-item>`))}
            </mwc-select>
            <h4>${d("settings.SchedulerOptions")}</h4>
            <div class="horizontal center layout flex row">
              <span slot="title">${d("settings.SessionCreationRetries")}</span>
              <mwc-icon-button icon="info" @click="${t=>this._showConfigDescription(t,"retries")}" style="pointer-events:auto;"></mwc-icon-button>
              <mwc-textfield  id="num-retries"
                              outlined
                              required
                              autoValidate
                              validationMessage="${d("settings.InputRequired")}"
                              type="number"
                              pattern="[0-9]+"
                              min="${this.numRetriesRange.min}"
                              max="${this.numRetriesRange.max}"
                              style="margin-top: 18px"
                              @change="${t=>this._validateInput(t)}"
                              @input="${t=>this._customizeValidationMessage(t)}"></mwc-textfield>
            </div>
          </div>
          <div slot="footer" class="horizontal end-justified flex layout">
            <mwc-button
              id="config-cancel-button"
              style="width:auto;margin-right:10px;"
              icon="delete"
              @click="${()=>this._clearOptions()}"
              label="${d("button.DeleteAll")}"></mwc-button>
            <mwc-button
              unelevated
              id="config-save-button"
              style="width:auto;"
              icon="check"
              @click="${()=>this.saveAndCloseDialog()}"
              label="${d("button.Save")}"></mwc-button>
          </div>
        </backend-ai-dialog>
        <backend-ai-dialog id="help-description" fixed backdrop>
          <span slot="title">${this._helpDescriptionTitle}</span>
          <div slot="content" class="horizontal layout">${this._helpDescription}</div>
        </backend-ai-dialog>
        <backend-ai-dialog id="env-config-confirmation" warning fixed>
          <span slot="title">${d("dialog.title.LetsDouble-Check")}</span>
          <div slot="content">
            <p>${d("settings.EnvConfigWillDisappear")}</p>
            <p>${d("dialog.ask.DoYouWantToProceed")}</p>
          </div>
          <div slot="footer" class="horizontal end-justified flex layout">
            <mwc-button
               id="env-config-remain-button"
               style="width:auto;"
               label="${d("button.Cancel")}"
               @click="${()=>this.closeDialog("env-config-confirmation")}">
           </mwc-button>
            <mwc-button
                unelevated
                id="env-config-reset-button"
                style="width:auto;margin-right:10px;"
                label="${d("button.DismissAndProceed")}"
                @click="${()=>this.closeAndResetEnvInput()}">
            </mwc-button>
          </div>
        </backend-ai-dialog>
      </div>
    `}firstUpdated(){this.notification=globalThis.lablupNotification,void 0===globalThis.backendaiclient||null===globalThis.backendaiclient?document.addEventListener("backend-ai-connected",(()=>{this.updateSettings()}),!0):this.updateSettings();this.shadowRoot.querySelector("#env-dialog").addEventListener("dialog-closing-confirm",(t=>{const i=this.shadowRoot.querySelector("#env-container").querySelectorAll("mwc-textfield");for(const t of i){if(this.schedulerOptions[this._findOptionById(t.id)]!==t.value&&""!==this.selectedSchedulerType){this.openDialog("env-config-confirmation");break}this.closeDialog("env-config-confirmation"),this._hideEnvDialog()}}))}async _viewStateChanged(t){await this.updateComplete}updateSettings(){globalThis.backendaiclient.setting.get("docker/image/auto_pull").then((t=>{null===t.result||"digest"===t.result?this.options.image_pulling_behavior="digest":"tag"===t.result?this.options.image_pulling_behavior="tag":this.options.image_pulling_behavior="none",this.update(this.options)}));for(const[t]of Object.entries(this.schedulerOptions))globalThis.backendaiclient.setting.get(`plugins/scheduler/${this.selectedSchedulerType}/${t}`).then((i=>{null===i.result?this.schedulerOptions[t]="0":this.schedulerOptions[t]=i.result})),this.update(this.schedulerOptions);globalThis.backendaiclient.get_resource_slots().then((t=>{"cuda.device"in t&&(this.options.cuda_gpu=!0),"cuda.shares"in t&&(this.options.cuda_fgpu=!0),"rocm.device"in t&&(this.options.rocm_gpu=!0),"tpu.device"in t&&(this.options.tpu=!0),this.update(this.options)}))}setImagePullingBehavior(t){if(null===t.target.selected)return!1;const e=t.target.selected.value;return e!==this.options.image_pulling_behavior&&["none","digest","tag"].includes(e)&&globalThis.backendaiclient.setting.set("docker/image/auto_pull",e).then((t=>{this.options.image_pulling_behavior=e,this.notification.text=i("notification.SuccessfullyUpdated"),this.notification.show(),this.update(this.options),console.log(t)})),!0}_findIdByOption(t){return this.schedulerOptionsAndId.find((i=>i.option===t)).id}_findOptionById(t){return this.schedulerOptionsAndId.find((i=>i.id===t)).option}_clearOptions(){this.shadowRoot.querySelector("#env-container").querySelectorAll("mwc-textfield").forEach((t=>{t.value=""}))}_showEnvDialog(){const t=this.shadowRoot.querySelector("#env-dialog");t.closeWithConfirmation=!0,t.show()}_hideEnvDialog(){const t=this.shadowRoot.querySelector("#env-dialog");t.closeWithConfirmation=!1,t.hide()}closeAndResetEnvInput(){this.shadowRoot.querySelector("#scheduler-switch").value=null,this._clearOptions(),this.closeDialog("env-config-confirmation"),this._hideEnvDialog()}_showConfigDescription(t,e){t.stopPropagation();const s={default:{title:g("settings.ConfigPerJobSchduler"),desc:i("settings.ConfigPerJobSchdulerDescription")},retries:{title:i("settings.SessionCreationRetries"),desc:i("settings.SessionCreationRetriesDescription")+"\n"+i("settings.FifoOnly")}};if(e in s){this._helpDescriptionTitle=s[e].title,this._helpDescription=s[e].desc;this.shadowRoot.querySelector("#help-description").show()}}openDialog(t){this.shadowRoot.querySelector("#"+t).show()}closeDialog(t){this.shadowRoot.querySelector("#"+t).hide()}saveAndCloseDialog(){const t=this.shadowRoot.querySelector("#scheduler-switch"),e=this.shadowRoot.querySelector("#num-retries"),s=e.value,o=[t,e];if(!(o.filter((t=>t.reportValidity())).length<o.length)&&["fifo","lifo","drf"].includes(this.selectedSchedulerType))if("fifo"===this.selectedSchedulerType||"fifo"!==this.selectedSchedulerType&&"0"===s){const t={num_retries_to_skip:parseInt(s).toString()};globalThis.backendaiclient.setting.set(`plugins/scheduler/${this.selectedSchedulerType}`,t).then((e=>{this.notification.text=i("notification.SuccessfullyUpdated"),this.notification.show(),this.options.scheduler=this.selectedSchedulerType,this.schedulerOptions={...this.schedulerOptions,...t},this.update(this.options),this.update(this.schedulerOptions),this._hideEnvDialog()})).catch((t=>{this.notification.text=r.relieve("Couldn't update scheduler setting."),this.notification.detail=t,this.notification.show(!0,t)}))}else"0"!==s&&(this.notification.text=i("settings.FifoOnly"),this.notification.show(),this.shadowRoot.querySelector("#num-retries").value="0")}changeSelectedScheduleType(t){this.selectedSchedulerType=t.target.value,this.updateSettings();for(const[t]of Object.entries(this.schedulerOptions))globalThis.backendaiclient.setting.get(`plugins/scheduler/${this.selectedSchedulerType}/${t}`).then((i=>{null===i.result?this.shadowRoot.querySelector("#"+this._findIdByOption(t)).value="0":this.shadowRoot.querySelector("#"+this._findIdByOption(t)).value=i.result}))}_validateInput(t){const i=t.target.closest("mwc-textfield");i.value&&(i.value=Math.round(i.value),i.value=globalThis.backendaiclient.utils.clamp(i.value,i.min,i.max))}_customizeValidationMessage(t){const e=t.target.closest("mwc-textfield");e.validityTransform=(t,s)=>s.valid?{valid:s.valid,customError:!s.valid}:s.valueMissing?(e.validationMessage=i("settings.InputRequired"),{valid:s.valid,customError:!s.valid}):s.rangeOverflow||s.rangeUnderflow?(e.validationMessage=i("settings.InputRange0to1000"),{valid:s.valid,customError:!s.valid}):(e.validationMessage=i("settings.InvalidValue"),{valid:s.valid,customError:!s.valid})}};h([u({type:Object})],v.prototype,"images",void 0),h([u({type:Object})],v.prototype,"options",void 0),h([u({type:Object})],v.prototype,"schedulerOptions",void 0),h([u({type:Object})],v.prototype,"schedulerOptionsAndId",void 0),h([u({type:Object})],v.prototype,"notification",void 0),h([u({type:Array})],v.prototype,"imagePullingBehavior",void 0),h([u({type:Array})],v.prototype,"jobschedulerType",void 0),h([u({type:String})],v.prototype,"selectedSchedulerType",void 0),h([u({type:String})],v.prototype,"_helpDescriptionTitle",void 0),h([u({type:String})],v.prototype,"_helpDescription",void 0),h([u({type:Object})],v.prototype,"numRetriesRange",void 0),v=h([p("backend-ai-settings-view")],v);var m=v;export default m;
