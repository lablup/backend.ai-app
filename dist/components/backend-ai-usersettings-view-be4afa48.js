import{_ as e,e as t,n as i,B as a,b as o,I as s,a as r,r as n,y as l,$ as c,t as d,x as p,c as h,ao as g,g as u,d as b,ap as m}from"./backend-ai-webui-29a04808.js";import"./switch-5eae873f.js";import"./select-4843f23c.js";import"./tab-group-eb36573d.js";import"./mwc-tab-bar-83be8cdd.js";import"./lablup-activity-panel-0d4aa16a.js";import"./lablup-codemirror-83e8eb38.js";import"./vaadin-grid-324151db.js";import"./vaadin-grid-selection-column-ef5940fe.js";import"./vaadin-grid-sort-column-5a315bda.js";import"./iconset-ca86c42e.js";import"./expansion-a141e6f0.js";import"./label-f49b9d87.js";import{t as v}from"./translate-unsafe-html-65fb6970.js";import"./mwc-switch-e596012f.js";import"./mwc-textarea-44ad2d64.js";import"./input-behavior-3fd94ba0.js";import"./radio-behavior-57c4111b.js";import"./dom-repeat-c48bf759.js";
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */let f=class extends a{constructor(){super(),this.timestamp="",this.errorType="",this.requestUrl="",this.statusCode="",this.statusText="",this.title="",this.message="",this.logs=[],this._selected_items=[],this.spinner=Object(),this._grid=Object(),this.logView=[],this._pageSize=25,this._currentPage=1,this._totalLogCount=0,this.boundTimeStampRenderer=this.timeStampRenderer.bind(this),this.boundStatusRenderer=this.statusRenderer.bind(this),this.boundErrTitleRenderer=this.errTitleRenderer.bind(this),this.boundErrMsgRenderer=this.errMsgRenderer.bind(this),this.boundErrTypeRenderer=this.errTypeRenderer.bind(this),this.boundMethodRenderer=this.methodRenderer.bind(this),this.boundReqUrlRenderer=this.reqUrlRender.bind(this),this.boundParamRenderer=this.paramRenderer.bind(this)}static get styles(){return[o,s,r,n`
        vaadin-grid {
          width: 100%;
          border: 0;
          font-size: 12px;
          height: calc(100vh - 305px);
        }

        vaadin-grid-cell {
          font-size: 10px;
        }

        vaadin-grid#list-grid {
          border-top: 1px solid #dbdbdb;
        }

        .error-cell {
          color: red;
        }

        wl-label {
          --label-font-family: 'Ubuntu', Roboto;
          --label-color: black;
        }

        wl-icon.pagination {
          color: var(--paper-grey-700);
        }

        wl-button.pagination[disabled] wl-icon.pagination {
          color: var(--paper-grey-300);
        }

        wl-button.pagination {
          width: 15px;
          height: 15px;
          padding: 10px;
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
          --button-bg: transparent;
          --button-bg-hover: var(--paper-teal-100);
          --button-bg-active: var(--paper-teal-600);
          --button-bg-active-flat: var(--paper-teal-600);
          --button-bg-disabled: var(--paper-grey-50);
          --button-color-disabled: var(--paper-grey-200);
        }
      `]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this._updatePageItemSize(),this._grid=this.shadowRoot.querySelector("#list-grid"),globalThis.backendaiclient&&globalThis.backendaiclient.is_admin||(this.shadowRoot.querySelector("vaadin-grid").style.height="calc(100vh - 275px)!important"),this.notification=globalThis.lablupNotification,document.addEventListener("log-message-refresh",(()=>this._refreshLogData())),document.addEventListener("log-message-clear",(()=>this._clearLogData()))}_updatePageItemSize(){const e=window.innerHeight-275-30;this._pageSize=Math.floor(e/31)}_refreshLogData(){this.spinner.show(),this._updatePageItemSize(),this.logs=JSON.parse(localStorage.getItem("backendaiwebui.logs")||"{}"),this._totalLogCount=this.logs.length>0?this.logs.length:1,this._updateItemsFromPage(1),this._grid.clearCache(),this.spinner.hide()}_clearLogData(){this.logs=[],this.logView=[],this._totalLogCount=1,this._currentPage=1,this._grid.clearCache()}_updateItemsFromPage(e){if("number"!=typeof e){let t=e.target;"button"!==t.role&&(t=e.target.closest("mwc-icon-button")),"previous-page"===t.id?this._currentPage-=1:this._currentPage+=1}const t=(this._currentPage-1)*this._grid.pageSize,i=this._currentPage*this._grid.pageSize;if(this.logs.length>0){const e=this.logs.slice(t,i);e.forEach((e=>{e.timestamp_hr=this._humanReadableTime(e.timestamp)})),this.logView=e}}_humanReadableTime(e){return(e=new Date(e)).toLocaleString("en-US",{hour12:!1})}_toISOTime(e){return(e=new Date(e)).toISOString()}timeStampRenderer(e,t,i){l(c`
        <div class="layout vertical">
          <span class="monospace ${i.item.isError?"error-cell":""}">${i.item.timestamp_hr}</span>
        </div>`,e)}statusRenderer(e,t,i){l(c`
        <div class="layout vertical">
          <span class="${i.item.isError?"error-cell":""}">${i.item.statusCode+" "+i.item.statusText}</span>
        </div>`,e)}errTitleRenderer(e,t,i){l(c`
      <div class="layout vertical">
        <span class="${i.item.isError?"error-cell":""}">${i.item.title}</span>
      </div>`,e)}errMsgRenderer(e,t,i){l(c`
        <div class="layout vertical">
          <span class="${i.item.isError?"error-cell":""}">${i.item.message}</span>
        </div>`,e)}errTypeRenderer(e,t,i){l(c`
        <div class="layout vertical">
          <span class="${i.item.isError?"error-cell":""}">${i.item.type}</span>
        </div>`,e)}methodRenderer(e,t,i){l(c`
        <div class="layout vertical">
          <span class="${i.item.isError?"error-cell":""}">${i.item.requestMethod}</span>
        </div>`,e)}reqUrlRender(e,t,i){l(c`
        <div class="layout vertical">
          <span class="monospace ${i.item.isError?"error-cell":""}">${i.item.requestUrl}</span>
        </div>`,e)}paramRenderer(e,t,i){l(c`
        <div class="layout vertical">
          <span class="monospace ${i.item.isError?"error-cell":""}">${i.item.requestParameters}</span>
        </div>`,e)}render(){return c`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <vaadin-grid id="list-grid" page-size="${this._pageSize}"
                   theme="row-stripes column-borders compact wrap-cell-content"
                   aria-label="Error logs" .items="${this.logView}">
        <vaadin-grid-column width="250px" flex-grow="0" text-align="start" auto-width header="${d("logs.TimeStamp")}" .renderer="${this.boundTimeStampRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${d("logs.Status")}" .renderer="${this.boundStatusRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${d("logs.ErrorTitle")}" .renderer="${this.boundErrTitleRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${d("logs.ErrorMessage")}" .renderer="${this.boundErrMsgRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column width="50px" flex-grow="0" text-align="start" auto-width header="${d("logs.ErrorType")}" .renderer="${this.boundErrTypeRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${d("logs.Method")}" .renderer="${this.boundMethodRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${d("logs.RequestUrl")}" .renderer="${this.boundReqUrlRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable auto-width text-align="start" header="${d("logs.Parameters")}" .renderer="${this.boundParamRenderer}">
        </vaadin-grid-column>
      </vaadin-grid>
      <div class="horizontal center-justified layout flex" style="padding: 10px;border-top:1px solid #ccc;">
        <mwc-icon-button
            class="pagination"
            id="previous-page"
            icon="navigate_before"
            ?disabled="${1===this._currentPage}"
            @click="${e=>{this._updateItemsFromPage(e)}}"></mwc-icon-button>
        <wl-label style="padding: 5px 15px 0px 15px;">
          ${this._currentPage} / ${Math.ceil(this._totalLogCount/this._pageSize)}
        </wl-label>
        <mwc-icon-button
            class="pagination"
            id="next-page"
            icon="navigate_next"
            ?disabled="${this._totalLogCount<=this._pageSize*this._currentPage}"
            @click="${e=>{this._updateItemsFromPage(e)}}"></mwc-icon-button>
      </div>
    `}};e([t({type:String})],f.prototype,"timestamp",void 0),e([t({type:String})],f.prototype,"errorType",void 0),e([t({type:String})],f.prototype,"requestUrl",void 0),e([t({type:String})],f.prototype,"statusCode",void 0),e([t({type:String})],f.prototype,"statusText",void 0),e([t({type:String})],f.prototype,"title",void 0),e([t({type:String})],f.prototype,"message",void 0),e([t({type:Array})],f.prototype,"logs",void 0),e([t({type:Array})],f.prototype,"_selected_items",void 0),e([t({type:Object})],f.prototype,"spinner",void 0),e([t({type:Object})],f.prototype,"_grid",void 0),e([t({type:Array})],f.prototype,"logView",void 0),e([t({type:Number})],f.prototype,"_pageSize",void 0),e([t({type:Number})],f.prototype,"_currentPage",void 0),e([t({type:Number})],f.prototype,"_totalLogCount",void 0),e([t({type:Object})],f.prototype,"boundTimeStampRenderer",void 0),e([t({type:Object})],f.prototype,"boundStatusRenderer",void 0),e([t({type:Object})],f.prototype,"boundErrTitleRenderer",void 0),e([t({type:Object})],f.prototype,"boundErrMsgRenderer",void 0),e([t({type:Object})],f.prototype,"boundErrTypeRenderer",void 0),e([t({type:Object})],f.prototype,"boundMethodRenderer",void 0),e([t({type:Object})],f.prototype,"boundReqUrlRenderer",void 0),e([t({type:Object})],f.prototype,"boundParamRenderer",void 0),f=e([i("backend-ai-error-log-list")],f);let y=class extends a{constructor(){super(),this.lastSavedBootstrapScript="",this.bootstrapDialog=Object(),this.userconfigDialog=Object(),this.supportLanguages=[{name:d("language.OSDefault"),code:"default"},{name:d("language.English"),code:"en"},{name:d("language.Korean"),code:"ko"},{name:d("language.Russian"),code:"ru"},{name:d("language.French"),code:"fr"},{name:d("language.Mongolian"),code:"mn"},{name:d("language.Indonesian"),code:"id"}],this.beta_feature_panel=!1,this.shell_script_edit=!1,this.rcfile="",this.prevRcfile="",this.preferredSSHPort="",this.publicSSHkey="",this.rcfiles=[]}static get styles(){return[o,s,r,p,h,n`
        div.indicator,
        span.indicator {
          font-size: 9px;
          margin-right: 5px;
        }

        span[slot="title"] {
          font-weight: bold;
          margin-top: 15px !important;
          margin-bottom: 15px;
          display: inline-block;
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
        }

        .setting-item {
          margin: 15px 10px;
          width: 360px;
        }

        .setting-desc {
          width: 300px;
        }

        .setting-button {
          width: 35px;
        }

        .setting-select-desc {
          width: auto;
          margin-right: 5px;
        }

        .setting-select {
          width: 135px;
        }

        .setting-text-desc {
          width: 260px;
        }

        .setting-text {
          width: 75px;
        }

        .ssh-keypair {
          margin-right: 10px;
          width: 450px;
          min-height: 100px;
          overflow-y: scroll;
          white-space: pre-wrap;
          word-wrap: break-word;
          font-size: 10px;
          scrollbar-width: none; /* firefox */
        }

        #bootstrap-dialog wl-button {
          margin-left: 5px;
        }

        #bootstrap-dialog, #userconfig-dialog {
          --component-width: calc(100vw - 200px);
          --component-height: calc(100vh - 100px);
          --component-min-width: calc(100vw - 200px);
          --component-max-width: calc(100vw - 200px);
          --component-min-height: calc(100vh - 100px);
          --component-max-height: calc(100vh - 100px);
        }

        .terminal-area {
          height:calc(100vh - 300px);
        }

        mwc-select {
          width: 160px;
          font-family: var(--general-font-family);
          --mdc-typography-subtitle1-font-family: var(--general-font-family);
          --mdc-typography-subtitle1-font-size: 11px;
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
        }

        mwc-select#select-rcfile-type {
          width: 300px;
          margin-bottom: 10px;
        }
        
        mwc-select#select-rcfile-type > mwc-list-item {
          width: 250px;
        }

        mwc-textarea {
          --mdc-theme-primary: var(--general-sidebar-color);
        }

        mwc-icon-button {
          color: #27824F;
        }

        mwc-button[outlined] {
          background-image: none;
          --mdc-button-outline-width: 2px;
          --mdc-button-disabled-outline-color: var(--general-button-background-color);
          --mdc-button-disabled-ink-color: var(--general-button-background-color);
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-theme-on-primary: var(--general-button-color);
        }

        mwc-button {
          margin: auto 10px;
          background-image: none;
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-theme-on-primary: var(--general-button-color);
        }

        mwc-button[unelevated] {
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-theme-on-primary: var(--general-button-color);
        }

        mwc-button.shell-button {
          margin: 5px;
          width: 260px;
        }

        wl-icon.warning {
          --icon-size: 16px;
          padding: 0;
          color: red;
        }

        wl-label.warning {
          font-family: var(--general-font-family);
          font-size: 12px;
          --label-color: var(--paper-red-600);
        }

        wl-button.ssh-keypair {
          display: inline-block;
          margin: 10px;
        }

        wl-button.copy {
          --button-font-size: 10px;
          display: inline-block;
          max-width: 15px !important;
          max-height: 15px !important;
        }

        wl-button#ssh-keypair-details {
          --button-bg: none;
        }

        wl-icon#ssh-keypair-icon {
          color: var(--paper-indigo-700);
        }

        ::-webkit-scrollbar {
          display: none; /* Chrome and Safari */
        }

        @media screen and (max-width: 500px) {
          #bootstrap-dialog, #userconfig-dialog {
            --component-min-width: 300px;
          }

          mwc-select#select-rcfile-type {
            width: 250px;
          }

          mwc-select#select-rcfile-type > mwc-list-item {
            width: 200px;
          }

          .setting-desc {
            width: 200px;
          }

          #language-setting {
            width: 160px;
          }
        }
      `]}firstUpdated(){this.notification=globalThis.lablupNotification,this.spinner=this.shadowRoot.querySelector("#loading-spinner")}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?(document.addEventListener("backend-ai-connected",(()=>{this.preferredSSHPort=globalThis.backendaioptions.get("custom_ssh_port")})),globalThis.backendaiclient.isAPIVersionCompatibleWith("v4.20191231")&&(this.shell_script_edit=!0,this.bootstrapDialog=this.shadowRoot.querySelector("#bootstrap-dialog"),this.userconfigDialog=this.shadowRoot.querySelector("#userconfig-dialog"),this.rcfile=".bashrc")):(this.preferredSSHPort=globalThis.backendaioptions.get("custom_ssh_port"),globalThis.backendaiclient.isAPIVersionCompatibleWith("v4.20191231")&&(this.shell_script_edit=!0,this.bootstrapDialog=this.shadowRoot.querySelector("#bootstrap-dialog"),this.userconfigDialog=this.shadowRoot.querySelector("#userconfig-dialog"),this.rcfile=".bashrc")),this.userconfigDialog.addEventListener("dialog-closing-confirm",(()=>{const e=this.shadowRoot.querySelector("#usersetting-editor").getValue(),t=this.rcfiles.findIndex((e=>e.path===this.rcfile));this.rcfiles[t].data!==e?(this.prevRcfile=this.rcfile,this._launchChangeCurrentEditorDialog()):(this.userconfigDialog.closeWithConfirmation=!1,this.userconfigDialog.hide())})))}toggleDesktopNotification(e){!1===e.target.selected?(globalThis.backendaioptions.set("desktop_notification",!1),this.notification.supportDesktopNotification=!1):(globalThis.backendaioptions.set("desktop_notification",!0),this.notification.supportDesktopNotification=!0)}toggleCompactSidebar(e){!1===e.target.selected?globalThis.backendaioptions.set("compact_sidebar",!1):globalThis.backendaioptions.set("compact_sidebar",!0)}togglePreserveLogin(e){!1===e.target.selected?globalThis.backendaioptions.set("preserve_login",!1):globalThis.backendaioptions.set("preserve_login",!0)}toggleAutoLogout(e){if(!1===e.target.selected){globalThis.backendaioptions.set("auto_logout",!1);const e=new CustomEvent("backend-ai-auto-logout",{detail:!1});document.dispatchEvent(e)}else{globalThis.backendaioptions.set("auto_logout",!0);const e=new CustomEvent("backend-ai-auto-logout",{detail:!0});document.dispatchEvent(e)}}toggleAutomaticUploadCheck(e){!1===e.target.selected?globalThis.backendaioptions.set("automatic_update_check",!1):(globalThis.backendaioptions.set("automatic_update_check",!0),globalThis.backendaioptions.set("automatic_update_count_trial",0))}setUserLanguage(e){if(e.target.selected.value!==globalThis.backendaioptions.get("language")){let t=e.target.selected.value;"default"===t&&(t=globalThis.navigator.language.split("-")[0]),globalThis.backendaioptions.set("language",e.target.selected.value),globalThis.backendaioptions.set("current_language",t),g(t),setTimeout((()=>{const e=this.shadowRoot.querySelector("#ui-language");e.selectedText=e.selected.textContent.trim()}),100)}}changePreferredSSHPort(e){const t=Number(e.target.value);if(t!==globalThis.backendaioptions.get("custom_ssh_port",""))if(0!==t&&t){if(t<1024||t>65534)return this.notification.text=u("usersettings.InvalidPortNumber"),void this.notification.show();globalThis.backendaioptions.set("custom_ssh_port",t)}else globalThis.backendaioptions.delete("custom_ssh_port")}toggleBetaFeature(e){!1===e.target.selected?(globalThis.backendaioptions.set("beta_feature",!1),this.beta_feature_panel=!1):(globalThis.backendaioptions.set("beta_feature",!0),this.beta_feature_panel=!0)}_fetchBootstrapScript(){return globalThis.backendaiclient.userConfig.get_bootstrap_script().then((e=>{const t=e||"";return this.lastSavedBootstrapScript=t,t})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=b.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}async _saveBootstrapScript(){const e=this.shadowRoot.querySelector("#bootstrap-editor").getValue();if(this.lastSavedBootstrapScript===e)return this.notification.text=u("resourceGroup.NochangesMade"),void this.notification.show();this.spinner.show(),globalThis.backendaiclient.userConfig.update_bootstrap_script(e).then((e=>{this.notification.text=u("usersettings.BootstrapScriptUpdated"),this.notification.show(),this.spinner.hide()}))}async _saveBootstrapScriptAndCloseDialog(){await this._saveBootstrapScript(),this._hideBootstrapScriptDialog()}async _launchBootstrapScriptDialog(){const e=this.shadowRoot.querySelector("#bootstrap-editor"),t=await this._fetchBootstrapScript();e.setValue(t),e.focus(),this.bootstrapDialog.show()}_hideBootstrapScriptDialog(){this.bootstrapDialog.hide()}async _editUserConfigScript(){const e=this.shadowRoot.querySelector("#usersetting-editor");this.rcfiles=await this._fetchUserConfigScript();[".bashrc",".zshrc",".tmux.conf.local",".vimrc",".Renviron"].map((t=>{const i=this.rcfiles.findIndex((e=>e.path===t));if(-1===i)this.rcfiles.push({path:t,data:""}),e.setValue("");else{const t=this.rcfiles[i].data;e.setValue(t)}}));[".tmux.conf"].forEach((e=>{const t=this.rcfiles.findIndex((t=>t.path===e));t>-1&&this.rcfiles.splice(t,1)}));const t=this.rcfiles.findIndex((e=>e.path===this.rcfile));if(-1!=t){const i=this.rcfiles[t].data;e.setValue(i)}else e.setValue("");e.focus(),this.spinner.hide(),this._toggleDeleteButton()}_fetchUserConfigScript(){return globalThis.backendaiclient.userConfig.get().then((e=>e||"")).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=b.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}async _saveUserConfigScript(e=this.rcfile){const t=this.shadowRoot.querySelector("#usersetting-editor").getValue(),i=this.rcfiles.findIndex((t=>t.path===e)),a=this.shadowRoot.querySelector("#select-rcfile-type");if(a.items.length>0){const t=a.items.find((t=>t.value===e)),i=a.items.indexOf(t);a.select(i)}if(-1!=i)if(""===this.rcfiles[i].data){if(""===t)return this.spinner.hide(),this.notification.text=u("usersettings.DescNewUserConfigFileCreated"),void this.notification.show();globalThis.backendaiclient.userConfig.create(t,this.rcfiles[i].path).then((e=>{this.spinner.hide(),this.notification.text=u("usersettings.DescScriptCreated"),this.notification.show()})).catch((e=>{this.spinner.hide(),console.log(e),e&&e.message&&(this.notification.text=b.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}else{if(this.rcfiles[i].data===t)return this.notification.text=u("resourceGroup.NochangesMade"),void this.notification.show();if(""===t)return this.notification.text=u("usersettings.DescLetUserUpdateScriptWithNonEmptyValue"),void this.notification.show();await globalThis.backendaiclient.userConfig.update(t,e).then((e=>{this.notification.text=u("usersettings.DescScriptUpdated"),this.notification.show(),this.spinner.hide()})).catch((e=>{this.spinner.hide(),console.log(e),e&&e.message&&(this.notification.text=b.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}await setTimeout((()=>{this._editUserConfigScript()}),200),this.spinner.show()}async _saveUserConfigScriptAndCloseDialog(){await this._saveUserConfigScript(),this._hideUserConfigScriptDialog()}_hideUserConfigScriptDialog(){this.userconfigDialog.hide()}_hideCurrentEditorChangeDialog(){this.shadowRoot.querySelector("#change-current-editor-dialog").hide()}_updateSelectedRcFileName(e){const t=this.shadowRoot.querySelector("#select-rcfile-type"),i=this.shadowRoot.querySelector("#userconfig-dialog #usersetting-editor");if(t.items.length>0){const a=t.items.find((t=>t.value===e)),o=t.items.indexOf(a),s=this.rcfiles[o].data;t.select(o),i.setValue(s)}}_changeCurrentEditorData(){const e=this.shadowRoot.querySelector("#userconfig-dialog #usersetting-editor"),t=this.shadowRoot.querySelector("#select-rcfile-type"),i=this.rcfiles.findIndex((e=>e.path===t.value)),a=this.rcfiles[i].data;e.setValue(a)}_toggleRcFileName(){var e;const t=this.shadowRoot.querySelector("#userconfig-dialog #usersetting-editor"),i=this.shadowRoot.querySelector("#select-rcfile-type");this.prevRcfile=this.rcfile,this.rcfile=i.value;let a=this.rcfiles.findIndex((e=>e.path===this.prevRcfile)),o=a>-1?this.rcfiles[a].data:"";const s=t.getValue();i.layout(),this._toggleDeleteButton(),o!==s?this._launchChangeCurrentEditorDialog():(a=this.rcfiles.findIndex((e=>e.path===this.rcfile)),o=(null===(e=this.rcfiles[a])||void 0===e?void 0:e.data)?this.rcfiles[a].data:"",t.setValue(o))}_toggleDeleteButton(){var e,t;const i=this.shadowRoot.querySelector("#delete-rcfile"),a=this.rcfiles.findIndex((e=>e.path===this.rcfile));a>-1&&(i.disabled=!((null===(e=this.rcfiles[a])||void 0===e?void 0:e.data)&&(null===(t=this.rcfiles[a])||void 0===t?void 0:t.permission)))}async _deleteRcFile(e){e||(e=this.rcfile),e&&globalThis.backendaiclient.userConfig.delete(e).then((t=>{const i=u("usersettings.DescScriptDeleted")+e;this.notification.text=i,this.notification.show(),this.spinner.hide(),this._hideUserConfigScriptDialog()})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=b.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})),await setTimeout((()=>{this._editUserConfigScript()}),200)}async _deleteRcFileAll(){const e=this.rcfiles.filter((e=>""!==e.permission&&""!==e.data)).map((e=>{const t=e.path;return globalThis.backendaiclient.userConfig.delete(t)}));Promise.all(e).then((e=>{const t=u("usersettings.DescScriptAllDeleted");this.notification.text=t,this.notification.show(),this.spinner.hide()})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=b.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})),await setTimeout((()=>{this._editUserConfigScript()}),200)}_createRcFile(e){e&&globalThis.backendaiclient.userConfig.create(e)}async _launchUserConfigDialog(){await this._editUserConfigScript(),this.userconfigDialog.closeWithConfirmation=!0,this.userconfigDialog.show()}_launchChangeCurrentEditorDialog(){this.shadowRoot.querySelector("#change-current-editor-dialog").show()}_openSSHKeypairManagementDialog(){this.shadowRoot.querySelector("#ssh-keypair-management-dialog").show()}async _openSSHKeypairRefreshDialog(){globalThis.backendaiclient.fetchSSHKeypair().then((e=>{const t=this.shadowRoot.querySelector("#ssh-keypair-management-dialog"),i=t.querySelector("#current-ssh-public-key"),a=t.querySelector("#copy-current-ssh-public-key-button");i.value=e.ssh_public_key?e.ssh_public_key:"",i.disabled=""===i.value,a.disabled=i.disabled,this.publicSSHkey=i.value?i.value:u("usersettings.NoExistingSSHKeypair"),t.show()}))}_openSSHKeypairClearDialog(){this.shadowRoot.querySelector("#clear-ssh-keypair-dialog").show()}_hideSSHKeypairGenerationDialog(){this.shadowRoot.querySelector("#generate-ssh-keypair-dialog").hide();const e=this.shadowRoot.querySelector("#ssh-public-key").value;if(""!==e){const t=this.shadowRoot.querySelector("#ssh-keypair-management-dialog");t.querySelector("#current-ssh-public-key").value=e,t.querySelector("#copy-current-ssh-public-key-button").disabled=!1}}_hideSSHKeypairDialog(){this.shadowRoot.querySelector("#ssh-keypair-management-dialog").hide()}_hideSSHKeypairClearDialog(){this.shadowRoot.querySelector("#clear-ssh-keypair-dialog").hide()}async _refreshSSHKeypair(){globalThis.backendaiclient.refreshSSHKeypair().then((e=>{const t=this.shadowRoot.querySelector("#generate-ssh-keypair-dialog");t.querySelector("#ssh-public-key").value=e.ssh_public_key,t.querySelector("#ssh-private-key").value=e.ssh_private_key,t.show()}))}_clearCurrentSSHKeypair(){this._hideSSHKeypairClearDialog(),this._hideSSHKeypairGenerationDialog()}_discardCurrentEditorChange(){this._updateSelectedRcFileName(this.rcfile),this._hideCurrentEditorChangeDialog()}_saveCurrentEditorChange(){this._saveUserConfigScript(this.prevRcfile),this._updateSelectedRcFileName(this.rcfile),this._hideCurrentEditorChangeDialog()}_cancelCurrentEditorChange(){this._updateSelectedRcFileName(this.prevRcfile),this._hideCurrentEditorChangeDialog()}_copySSHKey(e){if(""!==e){const t=this.shadowRoot.querySelector(e).value;if(0==t.length)this.notification.text=u("usersettings.NoExistingSSHKeypair"),this.notification.show();else if(void 0!==navigator.clipboard)navigator.clipboard.writeText(t).then((()=>{this.notification.text=u("usersettings.SSHKeyClipboardCopy"),this.notification.show()}),(e=>{console.error("Could not copy text: ",e)}));else{const e=document.createElement("input");e.type="text",e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}}render(){return c`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <h3 class="horizontal center layout">
        <span>${d("usersettings.Preferences")}</span>
        <span class="flex"></span>
      </h3>
      <div class="horizontal wrap layout">
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${d("usersettings.DesktopNotification")}</div>
            <div class="description">${v("usersettings.DescDesktopNotification")}
            </div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="desktop-notification-switch" @click="${e=>this.toggleDesktopNotification(e)}" ?selected="${globalThis.backendaioptions.get("desktop_notification")}"></mwc-switch>
          </div>
        </div>
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${d("usersettings.UseCompactSidebar")}</div>
            <div class="description">${v("usersettings.DescUseCompactSidebar")}</div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="compact-sidebar-switch" @click="${e=>this.toggleCompactSidebar(e)}" ?selected="${globalThis.backendaioptions.get("compact_sidebar")}"></mwc-switch>
          </div>
        </div>
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-select-desc" id="language-setting">
            <div class="title">${d("usersettings.Language")}</div>
            <div class="description">${v("usersettings.DescLanguage")}
            </div>
          </div>
          <div class="vertical center-justified layout setting-select flex end">
            <mwc-select id="ui-language"
                        required
                        outlined
                        @selected="${e=>this.setUserLanguage(e)}">
            ${this.supportLanguages.map((e=>c`
              <mwc-list-item value="${e.code}" ?selected=${globalThis.backendaioptions.get("language")===e.code}>
                ${e.name}
              </mwc-list-item>`))}
            </mwc-select>
          </div>
        </div>
        ${globalThis.isElectron?c`
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${d("usersettings.KeepLoginSessionInformation")}</div>
            <div class="description">${v("usersettings.DescKeepLoginSessionInformation")}</div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="preserve-login-switch" @click="${e=>this.togglePreserveLogin(e)}" ?selected="${globalThis.backendaioptions.get("preserve_login")}"></mwc-switch>
          </div>
        </div>
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-text-desc">
            <div class="title">${d("usersettings.PreferredSSHPort")}</div>
            <div class="description">${v("usersettings.DescPreferredSSHPort")}</div>
          </div>
          <div class="vertical center-justified layout setting-text">
            <mwc-textfield pattern="[0-9]*" @change="${e=>this.changePreferredSSHPort(e)}"
                value="${this.preferredSSHPort}" validationMessage="${d("credential.validation.NumbersOnly")}" auto-validate maxLength="5"></mwc-textfield>
          </div>
        </div>
        `:c``}
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${d("usersettings.SSHKeypairManagement")}</div>
            <div class="description">${v("usersettings.DescSSHKeypairManagement")}</div>
          </div>
          <div class="vertical center-justified layout flex end">
            <mwc-icon-button
                id="ssh-keypair-details"
                icon="more"
                @click="${this._openSSHKeypairRefreshDialog}">
            </mwc-icon-button>
          </div>
        </div>
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${d("usersettings.AutomaticUpdateCheck")}</div>
            <div class="description">${v("usersettings.DescAutomaticUpdateCheck")}</div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="automatic-update-check-switch" @click="${e=>this.toggleAutomaticUploadCheck(e)}" ?selected="${globalThis.backendaioptions.get("automatic_update_check")}"></mwc-switch>
          </div>
        </div>
        <div class="horizontal layout wrap setting-item" style="display:none;">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${d("usersettings.BetaFeatures")}</div>
            <div class="description">${v("usersettings.DescBetaFeatures")}</div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="beta-feature-switch" @click="${e=>this.toggleBetaFeature(e)}" ?selected="${globalThis.backendaioptions.get("beta_feature")}"></mwc-switch>
          </div>
        </div>
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${d("usersettings.AutoLogout")}</div>
            <div class="description">${v("usersettings.DescAutoLogout")}
            </div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="auto-logout-switch" @click="${e=>this.toggleAutoLogout(e)}"
                        ?selected="${globalThis.backendaioptions.get("auto_logout",!1)}"></mwc-switch>
          </div>
        </div>
        ${this.beta_feature_panel?c`
          <h3 class="horizontal center layout">
            <span>${d("usersettings.BetaFeatures")}</span>
            <span class="flex"></span>
          </h3>
          <div class="description">
            ${d("usersettings.DescNoBetaFeatures")}
          </div>
      `:c``}
      </div>
      ${this.shell_script_edit?c`
        <h3 class="horizontal center layout">
          <span>${d("usersettings.ShellEnvironments")}</span>
          <span class="flex"></span>
        </h3>
        <div class="horizontal wrap layout">
          <mwc-button
            class="shell-button"
            icon="edit"
            outlined
            label="${d("usersettings.EditBootstrapScript")}"
            @click="${()=>this._launchBootstrapScriptDialog()}"></mwc-button>
          <mwc-button
            class="shell-button"
            icon="edit"
            outlined
            label="${d("usersettings.EditUserConfigScript")}"
            @click="${()=>this._launchUserConfigDialog()}"></mwc-button>
        </div>
      <h3 class="horizontal center layout" style="display:none;">
        <span>${d("usersettings.PackageInstallation")}</span>
        <span class="flex"></span>
      </h3>
      <div class="horizontal wrap layout" style="display:none;">
        <div class="horizontal layout wrap setting-item">
          <div class="vertical center-justified layout setting-desc">
            <div>TEST1</div>
            <div class="description">This is description.
            </div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="register-new-image-switch" disabled></mwc-switch>
          </div>
        </div>
      </div>`:c``}
      <backend-ai-dialog id="bootstrap-dialog" fixed backdrop scrollable blockScrolling persistent>
        <span slot="title">${d("usersettings.EditBootstrapScript")}</span>
        <div slot="content" class="vertical layout terminal-area">
          <div style="margin-bottom:1em">${d("usersettings.BootstrapScriptDescription")}</div>
          <div style="background-color:#272823;height:100%;">
            <lablup-codemirror id="bootstrap-editor" mode="shell"></lablup-codemirror>
          </div>
        </div>
        <div slot="footer" class="end-justified layout flex horizontal">
          <mwc-button id="discard-code" label="${d("button.Cancel")}" @click="${()=>this._hideBootstrapScriptDialog()}"></mwc-button>
          <mwc-button unelevated id="save-code" label="${d("button.Save")}" @click="${()=>this._saveBootstrapScript()}"></mwc-button>
          <mwc-button unelevated id="save-code-and-close" label="${d("button.SaveAndClose")}" @click="${()=>this._saveBootstrapScriptAndCloseDialog()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="userconfig-dialog" fixed backdrop scrollable blockScrolling persistent closeWithConfirmation>
        <span slot="title">${d("usersettings.Edit_ShellScriptTitle_1")} ${this.rcfile} ${d("usersettings.Edit_ShellScriptTitle_2")}</span>
        <div slot="content" class="vertical layout terminal-area">
          <mwc-select id="select-rcfile-type"
                  label="${d("usersettings.ConfigFilename")}"
                  required
                  outlined
                  fixedMenuPosition
                  validationMessage="${d("credential.validation.PleaseSelectOption")}"
                  @selected="${()=>this._toggleRcFileName()}"
                  helper=${d("dialog.warning.WillBeAppliedToNewSessions")}>
            ${this.rcfiles.map((e=>c`
              <mwc-list-item id="${e.path}" value="${e.path}" ?selected=${this.rcfile===e.path}>
                ${e.path}
              </mwc-list-item>`))}
          </mwc-select>
          <div style="background-color:#272823;height:100%;">
            <lablup-codemirror id="usersetting-editor" mode="shell"></lablup-codemirror>
          </div>
        </div>
        <div slot="footer" class="end-justified layout flex horizontal">
          <mwc-button id="discard-code" label="${d("button.Cancel")}" @click="${()=>this._hideUserConfigScriptDialog()}"></mwc-button>
          <mwc-button id="delete-rcfile" label="${d("button.Delete")}" @click="${()=>this._deleteRcFile()}"></mwc-button>
          <mwc-button unelevated id="save-code" label="${d("button.Save")}" @click="${()=>this._saveUserConfigScript()}"></mwc-button>
          <mwc-button unelevated id="save-code-and-close" label="${d("button.SaveAndClose")}" @click="${()=>this._saveUserConfigScriptAndCloseDialog()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="change-current-editor-dialog" noclosebutton fixed backdrop scrollable blockScrolling persistent style="border-bottom:none;">
        <div slot="title">
          ${d("usersettings.DialogDiscardOrSave",{File:()=>this.prevRcfile})}
        </div>
        <div slot="content">
          ${d("usersettings.DialogNoSaveNoPreserve")}
        </div>
        <div slot="footer" style="border-top:none;" class="end-justified layout flex horizontal">
          <mwc-button
              id="cancel-editor"
              label="${d("button.Discard")}"
              @click="${()=>this._discardCurrentEditorChange()}"></mwc-button>
          <mwc-button
              unelevated
              id="save-editor-data"
              label="${d("button.Save")}"
              @click="${()=>this._saveCurrentEditorChange()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="ssh-keypair-management-dialog" fixed backdrop persistent>
        <span slot="title">${d("usersettings.SSHKeypairManagement")}</span>
        <div slot="content" style="max-width:500px">
          <span slot="title"> ${d("usersettings.CurrentSSHPublicKey")}</span>
          <mwc-textarea
              outlined
              readonly
              class="ssh-keypair"
              id="current-ssh-public-key"
              style="width:430px; height:270px;"
              value="${this.publicSSHkey}"></mwc-textarea>
          <mwc-icon-button
              id="copy-current-ssh-public-key-button"
              icon="content_copy"
              @click="${()=>this._copySSHKey("#current-ssh-public-key")}"></mwc-icon-button>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              label="${d("button.Close")}"
              @click="${this._hideSSHKeypairDialog}"></mwc-button>
          <mwc-button
              unelevated
              label="${d("button.Generate")}"
              @click="${this._refreshSSHKeypair}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="generate-ssh-keypair-dialog" fixed persistent noclosebutton>
        <span slot="title">${d("usersettings.SSHKeypairGeneration")}</span>
        <div slot="content" style="max-width:500px;">
          <div class="vertical layout" style="display:inline-block;">
            <span slot="title">${d("usersettings.PublicKey")}</span>
            <div class="horizontal layout flex">
              <mwc-textarea class="ssh-keypair" id="ssh-public-key" outlined readonly></mwc-textarea>
              <mwc-icon-button
              icon="content_copy"
              @click="${()=>this._copySSHKey("#ssh-public-key")}"></mwc-icon-button>
            </div>
            <span slot="title">${d("usersettings.PrivateKey")}</span>
            <div class="horizontal layout flex">
              <mwc-textarea class="ssh-keypair" id="ssh-private-key" outlined readonly></mwc-textarea>
              <mwc-icon-button
                  icon="content_copy"
                  @click="${()=>this._copySSHKey("#ssh-private-key")}"></mwc-icon-button>
            </div>
            <div style="color:crimson">${d("usersettings.SSHKeypairGenerationWarning")}</div>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
             unelevated
             label="${d("button.Close")}"
             @click="${this._openSSHKeypairClearDialog}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="clear-ssh-keypair-dialog" fixed persistent>
        <span slot="title">${d("usersettings.ClearSSHKeypairInput")}</span>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              outlined
              label="${d("button.No")}"
              @click="${this._hideSSHKeypairClearDialog}"></mwc-button>
          <mwc-button
              unelevated
              label="${d("button.Yes")}"
              @click="${this._clearCurrentSSHKeypair}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}};e([t({type:Object})],y.prototype,"bootstrapDialog",void 0),e([t({type:Object})],y.prototype,"userconfigDialog",void 0),e([t({type:Object})],y.prototype,"notification",void 0),e([t({type:Array})],y.prototype,"supportLanguages",void 0),e([t({type:Boolean})],y.prototype,"beta_feature_panel",void 0),e([t({type:Boolean})],y.prototype,"shell_script_edit",void 0),e([t({type:Array})],y.prototype,"rcfiles",void 0),e([t({type:String})],y.prototype,"rcfile",void 0),e([t({type:String})],y.prototype,"prevRcfile",void 0),e([t({type:String})],y.prototype,"preferredSSHPort",void 0),e([t({type:String})],y.prototype,"publicSSHkey",void 0),y=e([i("backend-ai-usersettings-general-list")],y);
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */
let w=class extends a{constructor(){super(),this.images=Object(),this.options=Object(),this._activeTab=Object(),this.clearLogsDialog=Object(),this.logGrid=Object(),this.options={automatic_image_update:!1,cuda_gpu:!1,cuda_fgpu:!1,rocm_gpu:!1,tpu:!1,scheduler:"fifo"}}static get is(){return"backend-ai-usersettings-view"}static get styles(){return[o,s,r,p,h,n`
        div.spinner,
        span.spinner {
          font-size: 9px;
          margin-right: 5px;
        }

        wl-card > div {
          padding: 15px;
        }

        wl-card h3.tab {
          padding-top: 0;
          padding-bottom: 0;
          padding-left: 0;
        }

        wl-card wl-card {
          margin: 0;
          padding: 0;
          --card-elevation: 0;
        }

        wl-tab-group {
          --tab-group-indicator-bg: var(--paper-teal-600);
        }

        wl-tab {
          --tab-color: #666666;
          --tab-color-hover: #222222;
          --tab-color-hover-filled: #222222;
          --tab-color-active: var(--paper-teal-600);
          --tab-color-active-hover: var(--paper-teal-600);
          --tab-color-active-filled: #cccccc;
          --tab-bg-active: var(--paper-teal-200);
          --tab-bg-filled: var(--paper-teal-200);
          --tab-bg-active-hover: var(--paper-teal-200);
        }

        h3.tab {
          background-color: var(--general-tabbar-background-color);
          border-radius: 5px 5px 0px 0px;
          margin: 0px auto;
        }

        mwc-tab-bar {
          --mdc-theme-primary: var(--general-sidebar-selected-color);
          --mdc-text-transform: none;
          --mdc-tab-color-default: var(--general-tabbar-background-color);
          --mdc-tab-text-label-color-default: var(--general-tabbar-tab-disabled-color);
        }

        mwc-button {
          background-image: none;
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-theme-on-primary: var(--general-button-color);
        }

        mwc-button[unelevated] {
          background-image: none;
          --mdc-theme-primary: var(--general-button-background-color);
        }

        mwc-button[outlined] {
          background-image: none;
          --mdc-button-outline-width: 2px;
          --mdc-button-disabled-outline-color: var(--general-button-background-color);
          --mdc-button-disabled-ink-color: var(--general-button-background-color);
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-theme-on-primary: var(--general-button-color);
        }

        mwc-button.log {
          margin: 0px 10px;
        }

        .outer-space {
          margin: 20px;
        }

        @media screen and (max-width: 750px) {
          mwc-button {
            width: auto;
          }
          mwc-button > span {
            display: none;
          }
        }
      `]}render(){return c`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
        <lablup-activity-panel noheader narrow autowidth>
        <div slot="message">
          <h3 class="tab horizontal wrap layout">
            <mwc-tab-bar>
              <mwc-tab title="general" label="${d("usersettings.General")}"
                  @click="${e=>this._showTab(e.target)}"></mwc-tab>
              <mwc-tab title="logs" label="${d("usersettings.Logs")}"
                  @click="${e=>this._showTab(e.target)}"></mwc-tab>
            </mwc-tab-bar>
          </h3>
          <div id="general" class="item tab-content outer-space">
            <backend-ai-usersettings-general-list active="true"></backend-ai-usersettings-general-list>
          </div>
          <div id="logs" class="item tab-content" style="display:none;">
            <h3 class="horizontal center layout outer-space">
              <span>${d("logs.LogMessages")}</span>
              <span class="mini" style="font-size:13px;padding-left:15px;">${d("logs.UpTo3000Logs")}</span>
              <span class="flex"></span>
              <mwc-button
                  class="log"
                  icon="refresh"
                  outlined
                  @click="${()=>this._refreshLogs()}">
                <span>${d("button.Refresh")}</span>
              </mwc-button>
              <mwc-button
                  class="log"
                  icon="delete"
                  outlined
                  @click="${()=>this._showClearLogsDialog()}">
                <span>${d("button.ClearLogs")}</span>
              </mwc-button>
            </h3>
            <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
          </div>
        </div>
      </lablup-activity-panel>
      <backend-ai-dialog id="clearlogs-dialog" fixed backdrop scrollable blockScrolling>
        <span slot="title">${d("dialog.warning.LogDeletion")}</span>
        <div slot="content">${d("dialog.warning.CannotBeUndone")}</div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              class="operation"
              id="discard-removal"
              label="${d("button.No")}"
              @click="${()=>this._hideClearLogsDialog()}"></mwc-button>
          <mwc-button
              unelevated
              class="operation"
              id="apply-removal"
              label="${d("button.Yes")}"
              @click="${()=>this._removeLogMessage()}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}firstUpdated(){void 0===globalThis.backendaiclient||null===globalThis.backendaiclient?document.addEventListener("backend-ai-connected",(()=>{this.updateSettings()}),!0):this.updateSettings(),this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification,this.clearLogsDialog=this.shadowRoot.querySelector("#clearlogs-dialog"),document.addEventListener("backend-ai-usersettings-logs",(()=>{this._viewStateChanged(!0)})),document.addEventListener("backend-ai-usersettings",(()=>{this._viewStateChanged(!0)}))}async _viewStateChanged(e){const t=m.getState().app.params.tab;t&&"logs"===t?globalThis.setTimeout((()=>{this.shadowRoot.querySelector('mwc-tab[title="logs"]').click()}),0):globalThis.setTimeout((()=>{this.shadowRoot.querySelector('mwc-tab[title="general"]').click()}),0)}updateSettings(){}_hideClearLogsDialog(){this.clearLogsDialog.hide()}_removeLogMessage(){localStorage.getItem("backendaiwebui.logs")&&localStorage.removeItem("backendaiwebui.logs");const e=new CustomEvent("log-message-clear",{});document.dispatchEvent(e),localStorage.getItem("backendaiwebui.logs"),this.clearLogsDialog.hide(),this.notification.text=u("logs.LogMessageRemoved"),this.notification.show(),this.spinner.hide()}_showClearLogsDialog(){this.clearLogsDialog.show()}_refreshLogs(){this.logGrid=JSON.parse(localStorage.getItem("backendaiwebui.logs")||"{}");const e=new CustomEvent("log-message-refresh",this.logGrid);document.dispatchEvent(e)}_showTab(e){const t=this.shadowRoot.querySelectorAll(".tab-content");for(let e=0;e<t.length;e++)t[e].style.display="none";this._activeTab=e.title,"logs"===this._activeTab&&this._refreshLogs(),this.shadowRoot.querySelector("#"+e.title).style.display="block"}};e([t({type:Object})],w.prototype,"images",void 0),e([t({type:Object})],w.prototype,"options",void 0),e([t({type:Object})],w.prototype,"_activeTab",void 0),e([t({type:Object})],w.prototype,"clearLogsDialog",void 0),e([t({type:Object})],w.prototype,"logGrid",void 0),w=e([i("backend-ai-usersettings-view")],w);var S=w;export{S as default};
