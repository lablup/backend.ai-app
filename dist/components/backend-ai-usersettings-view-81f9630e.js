import{_ as t,e,l as i,n as a,B as o,b as s,I as r,a as l,r as n,y as c,$ as d,t as p,g,x as h,c as u,aq as b,d as m,ar as v}from"./backend-ai-webui-56356ffe.js";import"./switch-45a12c1e.js";import"./select-41f3c96a.js";import"./tab-group-e38b0e65.js";import"./mwc-tab-bar-71b77f8d.js";import"./lablup-activity-panel-efc25ae4.js";import"./lablup-codemirror-c2334ede.js";import"./lablup-loading-spinner-a32f3e22.js";import"./vaadin-grid-e1718aa8.js";import"./vaadin-grid-selection-column-fb9a4350.js";import"./vaadin-grid-sort-column-5f6d3fa8.js";import"./iconset-e0d68cf9.js";import"./expansion-063c5449.js";import"./label-bbcd6d33.js";import{t as f}from"./translate-unsafe-html-dc0a0b1a.js";import"./mwc-textarea-b66f04b1.js";import"./backend-ai-list-status-10997844.js";import"./input-behavior-74ffcfc4.js";import"./radio-behavior-b633e68b.js";import"./progress-spinner-bc2e4038.js";import"./dom-repeat-f6e1ae64.js";let y=class extends o{constructor(){super(),this.timestamp="",this.errorType="",this.requestUrl="",this.statusCode="",this.statusText="",this.title="",this.message="",this.logs=[],this._selected_items=[],this.listCondition="loading",this._grid=Object(),this.logView=[],this._pageSize=25,this._currentPage=1,this._totalLogCount=0,this.boundTimeStampRenderer=this.timeStampRenderer.bind(this),this.boundStatusRenderer=this.statusRenderer.bind(this),this.boundErrTitleRenderer=this.errTitleRenderer.bind(this),this.boundErrMsgRenderer=this.errMsgRenderer.bind(this),this.boundErrTypeRenderer=this.errTypeRenderer.bind(this),this.boundMethodRenderer=this.methodRenderer.bind(this),this.boundReqUrlRenderer=this.reqUrlRender.bind(this),this.boundParamRenderer=this.paramRenderer.bind(this)}static get styles(){return[s,r,l,n`
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
      `]}firstUpdated(){var t;this._updatePageItemSize(),this._grid=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#list-grid"),globalThis.backendaiclient&&globalThis.backendaiclient.is_admin||(this.shadowRoot.querySelector("vaadin-grid").style.height="calc(100vh - 275px)!important"),this.notification=globalThis.lablupNotification,document.addEventListener("log-message-refresh",(()=>this._refreshLogData())),document.addEventListener("log-message-clear",(()=>this._clearLogData()))}_updatePageItemSize(){const t=window.innerHeight-275-30;this._pageSize=Math.floor(t/31)}_refreshLogData(){var t,e;this.listCondition="loading",null===(t=this._listStatus)||void 0===t||t.show(),this._updatePageItemSize(),this.logs=JSON.parse(localStorage.getItem("backendaiwebui.logs")||"{}"),this._totalLogCount=this.logs.length>0?this.logs.length:1,this._updateItemsFromPage(1),this._grid.clearCache(),0==this.logs.length?this.listCondition="no-data":null===(e=this._listStatus)||void 0===e||e.hide()}_clearLogData(){this.logs=[],this.logView=[],this._totalLogCount=1,this._currentPage=1,this._grid.clearCache()}_updateItemsFromPage(t){if("number"!=typeof t){let e=t.target;"button"!==e.role&&(e=t.target.closest("mwc-icon-button")),"previous-page"===e.id?this._currentPage-=1:this._currentPage+=1}const e=(this._currentPage-1)*this._grid.pageSize,i=this._currentPage*this._grid.pageSize;if(this.logs.length>0){const t=this.logs.slice(e,i);t.forEach((t=>{t.timestamp_hr=this._humanReadableTime(t.timestamp)})),this.logView=t}}_humanReadableTime(t){return(t=new Date(t)).toLocaleString("en-US",{hour12:!1})}_toISOTime(t){return(t=new Date(t)).toISOString()}timeStampRenderer(t,e,i){c(d`
        <div class="layout vertical">
          <span class="monospace ${i.item.isError?"error-cell":""}">${i.item.timestamp_hr}</span>
        </div>`,t)}statusRenderer(t,e,i){c(d`
        <div class="layout vertical">
          <span class="${i.item.isError?"error-cell":""}">${i.item.statusCode+" "+i.item.statusText}</span>
        </div>`,t)}errTitleRenderer(t,e,i){c(d`
      <div class="layout vertical">
        <span class="${i.item.isError?"error-cell":""}">${i.item.title}</span>
      </div>`,t)}errMsgRenderer(t,e,i){c(d`
        <div class="layout vertical">
          <span class="${i.item.isError?"error-cell":""}">${i.item.message}</span>
        </div>`,t)}errTypeRenderer(t,e,i){c(d`
        <div class="layout vertical">
          <span class="${i.item.isError?"error-cell":""}">${i.item.type}</span>
        </div>`,t)}methodRenderer(t,e,i){c(d`
        <div class="layout vertical">
          <span class="${i.item.isError?"error-cell":""}">${i.item.requestMethod}</span>
        </div>`,t)}reqUrlRender(t,e,i){c(d`
        <div class="layout vertical">
          <span class="monospace ${i.item.isError?"error-cell":""}">${i.item.requestUrl}</span>
        </div>`,t)}paramRenderer(t,e,i){c(d`
        <div class="layout vertical">
          <span class="monospace ${i.item.isError?"error-cell":""}">${i.item.requestParameters}</span>
        </div>`,t)}render(){return d`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <div class="list-wrapper">
        <vaadin-grid id="list-grid" page-size="${this._pageSize}"
                     theme="row-stripes column-borders compact wrap-cell-content"
                     aria-label="Error logs" .items="${this.logView}">
          <vaadin-grid-column width="250px" flex-grow="0" text-align="start" auto-width header="${p("logs.TimeStamp")}" .renderer="${this.boundTimeStampRenderer}">
          </vaadin-grid-column>
          <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${p("logs.Status")}" .renderer="${this.boundStatusRenderer}">
          </vaadin-grid-column>
          <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${p("logs.ErrorTitle")}" .renderer="${this.boundErrTitleRenderer}">
          </vaadin-grid-column>
          <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${p("logs.ErrorMessage")}" .renderer="${this.boundErrMsgRenderer}">
          </vaadin-grid-column>
          <vaadin-grid-column width="50px" flex-grow="0" text-align="start" auto-width header="${p("logs.ErrorType")}" .renderer="${this.boundErrTypeRenderer}">
          </vaadin-grid-column>
          <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${p("logs.Method")}" .renderer="${this.boundMethodRenderer}">
          </vaadin-grid-column>
          <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${p("logs.RequestUrl")}" .renderer="${this.boundReqUrlRenderer}">
          </vaadin-grid-column>
          <vaadin-grid-column resizable auto-width text-align="start" header="${p("logs.Parameters")}" .renderer="${this.boundParamRenderer}">
          </vaadin-grid-column>
        </vaadin-grid>
        <backend-ai-list-status id="list-status" statusCondition="${this.listCondition}" message="${g("logs.NoLogToDisplay")}"></backend-ai-list-status>
      </div>
      <div class="horizontal center-justified layout flex" style="padding: 10px;border-top:1px solid #ccc;">
        <mwc-icon-button
            class="pagination"
            id="previous-page"
            icon="navigate_before"
            ?disabled="${1===this._currentPage}"
            @click="${t=>{this._updateItemsFromPage(t)}}"></mwc-icon-button>
        <wl-label style="padding: 5px 15px 0px 15px;">
          ${this._currentPage} / ${Math.ceil(this._totalLogCount/this._pageSize)}
        </wl-label>
        <mwc-icon-button
            class="pagination"
            id="next-page"
            icon="navigate_next"
            ?disabled="${this._totalLogCount<=this._pageSize*this._currentPage}"
            @click="${t=>{this._updateItemsFromPage(t)}}"></mwc-icon-button>
      </div>
    `}};t([e({type:String})],y.prototype,"timestamp",void 0),t([e({type:String})],y.prototype,"errorType",void 0),t([e({type:String})],y.prototype,"requestUrl",void 0),t([e({type:String})],y.prototype,"statusCode",void 0),t([e({type:String})],y.prototype,"statusText",void 0),t([e({type:String})],y.prototype,"title",void 0),t([e({type:String})],y.prototype,"message",void 0),t([e({type:Array})],y.prototype,"logs",void 0),t([e({type:Array})],y.prototype,"_selected_items",void 0),t([e({type:String})],y.prototype,"listCondition",void 0),t([e({type:Object})],y.prototype,"_grid",void 0),t([e({type:Array})],y.prototype,"logView",void 0),t([e({type:Number})],y.prototype,"_pageSize",void 0),t([e({type:Number})],y.prototype,"_currentPage",void 0),t([e({type:Number})],y.prototype,"_totalLogCount",void 0),t([e({type:Object})],y.prototype,"boundTimeStampRenderer",void 0),t([e({type:Object})],y.prototype,"boundStatusRenderer",void 0),t([e({type:Object})],y.prototype,"boundErrTitleRenderer",void 0),t([e({type:Object})],y.prototype,"boundErrMsgRenderer",void 0),t([e({type:Object})],y.prototype,"boundErrTypeRenderer",void 0),t([e({type:Object})],y.prototype,"boundMethodRenderer",void 0),t([e({type:Object})],y.prototype,"boundReqUrlRenderer",void 0),t([e({type:Object})],y.prototype,"boundParamRenderer",void 0),t([i("#list-status")],y.prototype,"_listStatus",void 0),y=t([a("backend-ai-error-log-list")],y);let w=class extends o{constructor(){super(),this.lastSavedBootstrapScript="",this.bootstrapDialog=Object(),this.userconfigDialog=Object(),this.supportLanguages=[{name:p("language.OSDefault"),code:"default"},{name:p("language.English"),code:"en"},{name:p("language.Korean"),code:"ko"},{name:p("language.Russian"),code:"ru"},{name:p("language.French"),code:"fr"},{name:p("language.Mongolian"),code:"mn"},{name:p("language.Indonesian"),code:"id"}],this.beta_feature_panel=!1,this.shell_script_edit=!1,this.rcfile="",this.prevRcfile="",this.preferredSSHPort="",this.publicSSHkey="",this.rcfiles=[]}static get styles(){return[s,r,l,h,u,n`
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
      `]}firstUpdated(){this.notification=globalThis.lablupNotification,this.spinner=this.shadowRoot.querySelector("#loading-spinner")}async _viewStateChanged(t){await this.updateComplete,!1!==t&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?(document.addEventListener("backend-ai-connected",(()=>{this.preferredSSHPort=globalThis.backendaioptions.get("custom_ssh_port")})),globalThis.backendaiclient.isAPIVersionCompatibleWith("v4.20191231")&&(this.shell_script_edit=!0,this.bootstrapDialog=this.shadowRoot.querySelector("#bootstrap-dialog"),this.userconfigDialog=this.shadowRoot.querySelector("#userconfig-dialog"),this.rcfile=".bashrc")):(this.preferredSSHPort=globalThis.backendaioptions.get("custom_ssh_port"),globalThis.backendaiclient.isAPIVersionCompatibleWith("v4.20191231")&&(this.shell_script_edit=!0,this.bootstrapDialog=this.shadowRoot.querySelector("#bootstrap-dialog"),this.userconfigDialog=this.shadowRoot.querySelector("#userconfig-dialog"),this.rcfile=".bashrc")),this.userconfigDialog.addEventListener("dialog-closing-confirm",(()=>{const t=this.shadowRoot.querySelector("#usersetting-editor").getValue(),e=this.rcfiles.findIndex((t=>t.path===this.rcfile));this.rcfiles[e].data!==t?(this.prevRcfile=this.rcfile,this._launchChangeCurrentEditorDialog()):(this.userconfigDialog.closeWithConfirmation=!1,this.userconfigDialog.hide())})))}toggleDesktopNotification(t){!1===t.target.selected?(globalThis.backendaioptions.set("desktop_notification",!1),this.notification.supportDesktopNotification=!1):(globalThis.backendaioptions.set("desktop_notification",!0),this.notification.supportDesktopNotification=!0)}toggleCompactSidebar(t){!1===t.target.selected?globalThis.backendaioptions.set("compact_sidebar",!1):globalThis.backendaioptions.set("compact_sidebar",!0)}togglePreserveLogin(t){!1===t.target.selected?globalThis.backendaioptions.set("preserve_login",!1):globalThis.backendaioptions.set("preserve_login",!0)}toggleAutoLogout(t){if(!1===t.target.selected){globalThis.backendaioptions.set("auto_logout",!1);const t=new CustomEvent("backend-ai-auto-logout",{detail:!1});document.dispatchEvent(t)}else{globalThis.backendaioptions.set("auto_logout",!0);const t=new CustomEvent("backend-ai-auto-logout",{detail:!0});document.dispatchEvent(t)}}toggleAutomaticUploadCheck(t){!1===t.target.selected?globalThis.backendaioptions.set("automatic_update_check",!1):(globalThis.backendaioptions.set("automatic_update_check",!0),globalThis.backendaioptions.set("automatic_update_count_trial",0))}setUserLanguage(t){if(t.target.selected.value!==globalThis.backendaioptions.get("language")){let e=t.target.selected.value;"default"===e&&(e=globalThis.navigator.language.split("-")[0]),globalThis.backendaioptions.set("language",t.target.selected.value),globalThis.backendaioptions.set("current_language",e),b(e),setTimeout((()=>{const t=this.shadowRoot.querySelector("#ui-language");t.selectedText=t.selected.textContent.trim()}),100)}}changePreferredSSHPort(t){const e=Number(t.target.value);if(e!==globalThis.backendaioptions.get("custom_ssh_port",""))if(0!==e&&e){if(e<1024||e>65534)return this.notification.text=g("usersettings.InvalidPortNumber"),void this.notification.show();globalThis.backendaioptions.set("custom_ssh_port",e)}else globalThis.backendaioptions.delete("custom_ssh_port")}toggleBetaFeature(t){!1===t.target.selected?(globalThis.backendaioptions.set("beta_feature",!1),this.beta_feature_panel=!1):(globalThis.backendaioptions.set("beta_feature",!0),this.beta_feature_panel=!0)}_fetchBootstrapScript(){return globalThis.backendaiclient.userConfig.get_bootstrap_script().then((t=>{const e=t||"";return this.lastSavedBootstrapScript=e,e})).catch((t=>{console.log(t),t&&t.message&&(this.notification.text=m.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))}))}async _saveBootstrapScript(){const t=this.shadowRoot.querySelector("#bootstrap-editor").getValue();if(this.lastSavedBootstrapScript===t)return this.notification.text=g("resourceGroup.NochangesMade"),void this.notification.show();this.spinner.show(),globalThis.backendaiclient.userConfig.update_bootstrap_script(t).then((t=>{this.notification.text=g("usersettings.BootstrapScriptUpdated"),this.notification.show(),this.spinner.hide()}))}async _saveBootstrapScriptAndCloseDialog(){await this._saveBootstrapScript(),this._hideBootstrapScriptDialog()}async _launchBootstrapScriptDialog(){const t=this.shadowRoot.querySelector("#bootstrap-editor"),e=await this._fetchBootstrapScript();t.setValue(e),t.focus(),this.bootstrapDialog.show()}_hideBootstrapScriptDialog(){this.bootstrapDialog.hide()}async _editUserConfigScript(){const t=this.shadowRoot.querySelector("#usersetting-editor");this.rcfiles=await this._fetchUserConfigScript();[".bashrc",".zshrc",".tmux.conf.local",".vimrc",".Renviron"].map((e=>{const i=this.rcfiles.findIndex((t=>t.path===e));if(-1===i)this.rcfiles.push({path:e,data:""}),t.setValue("");else{const e=this.rcfiles[i].data;t.setValue(e)}}));[".tmux.conf"].forEach((t=>{const e=this.rcfiles.findIndex((e=>e.path===t));e>-1&&this.rcfiles.splice(e,1)}));const e=this.rcfiles.findIndex((t=>t.path===this.rcfile));if(-1!=e){const i=this.rcfiles[e].data;t.setValue(i)}else t.setValue("");t.focus(),this.spinner.hide(),this._toggleDeleteButton()}_fetchUserConfigScript(){return globalThis.backendaiclient.userConfig.get().then((t=>t||"")).catch((t=>{console.log(t),t&&t.message&&(this.notification.text=m.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))}))}async _saveUserConfigScript(t=this.rcfile){const e=this.shadowRoot.querySelector("#usersetting-editor").getValue(),i=this.rcfiles.findIndex((e=>e.path===t)),a=this.shadowRoot.querySelector("#select-rcfile-type");if(a.items.length>0){const e=a.items.find((e=>e.value===t)),i=a.items.indexOf(e);a.select(i)}if(-1!=i)if(""===this.rcfiles[i].data){if(""===e)return this.spinner.hide(),this.notification.text=g("usersettings.DescNewUserConfigFileCreated"),void this.notification.show();globalThis.backendaiclient.userConfig.create(e,this.rcfiles[i].path).then((t=>{this.spinner.hide(),this.notification.text=g("usersettings.DescScriptCreated"),this.notification.show()})).catch((t=>{this.spinner.hide(),console.log(t),t&&t.message&&(this.notification.text=m.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))}))}else{if(this.rcfiles[i].data===e)return this.notification.text=g("resourceGroup.NochangesMade"),void this.notification.show();if(""===e)return this.notification.text=g("usersettings.DescLetUserUpdateScriptWithNonEmptyValue"),void this.notification.show();await globalThis.backendaiclient.userConfig.update(e,t).then((t=>{this.notification.text=g("usersettings.DescScriptUpdated"),this.notification.show(),this.spinner.hide()})).catch((t=>{this.spinner.hide(),console.log(t),t&&t.message&&(this.notification.text=m.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))}))}await setTimeout((()=>{this._editUserConfigScript()}),200),this.spinner.show()}async _saveUserConfigScriptAndCloseDialog(){await this._saveUserConfigScript(),this._hideUserConfigScriptDialog()}_hideUserConfigScriptDialog(){this.userconfigDialog.hide()}_hideCurrentEditorChangeDialog(){this.shadowRoot.querySelector("#change-current-editor-dialog").hide()}_updateSelectedRcFileName(t){const e=this.shadowRoot.querySelector("#select-rcfile-type"),i=this.shadowRoot.querySelector("#userconfig-dialog #usersetting-editor");if(e.items.length>0){const a=e.items.find((e=>e.value===t)),o=e.items.indexOf(a),s=this.rcfiles[o].data;e.select(o),i.setValue(s)}}_changeCurrentEditorData(){const t=this.shadowRoot.querySelector("#userconfig-dialog #usersetting-editor"),e=this.shadowRoot.querySelector("#select-rcfile-type"),i=this.rcfiles.findIndex((t=>t.path===e.value)),a=this.rcfiles[i].data;t.setValue(a)}_toggleRcFileName(){var t;const e=this.shadowRoot.querySelector("#userconfig-dialog #usersetting-editor"),i=this.shadowRoot.querySelector("#select-rcfile-type");this.prevRcfile=this.rcfile,this.rcfile=i.value;let a=this.rcfiles.findIndex((t=>t.path===this.prevRcfile)),o=a>-1?this.rcfiles[a].data:"";const s=e.getValue();i.layout(),this._toggleDeleteButton(),o!==s?this._launchChangeCurrentEditorDialog():(a=this.rcfiles.findIndex((t=>t.path===this.rcfile)),o=(null===(t=this.rcfiles[a])||void 0===t?void 0:t.data)?this.rcfiles[a].data:"",e.setValue(o))}_toggleDeleteButton(){var t,e;const i=this.shadowRoot.querySelector("#delete-rcfile"),a=this.rcfiles.findIndex((t=>t.path===this.rcfile));a>-1&&(i.disabled=!((null===(t=this.rcfiles[a])||void 0===t?void 0:t.data)&&(null===(e=this.rcfiles[a])||void 0===e?void 0:e.permission)))}async _deleteRcFile(t){t||(t=this.rcfile),t&&globalThis.backendaiclient.userConfig.delete(t).then((e=>{const i=g("usersettings.DescScriptDeleted")+t;this.notification.text=i,this.notification.show(),this.spinner.hide(),this._hideUserConfigScriptDialog()})).catch((t=>{console.log(t),t&&t.message&&(this.notification.text=m.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))})),await setTimeout((()=>{this._editUserConfigScript()}),200)}async _deleteRcFileAll(){const t=this.rcfiles.filter((t=>""!==t.permission&&""!==t.data)).map((t=>{const e=t.path;return globalThis.backendaiclient.userConfig.delete(e)}));Promise.all(t).then((t=>{const e=g("usersettings.DescScriptAllDeleted");this.notification.text=e,this.notification.show(),this.spinner.hide()})).catch((t=>{console.log(t),t&&t.message&&(this.notification.text=m.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))})),await setTimeout((()=>{this._editUserConfigScript()}),200)}_createRcFile(t){t&&globalThis.backendaiclient.userConfig.create(t)}async _launchUserConfigDialog(){await this._editUserConfigScript(),this.userconfigDialog.closeWithConfirmation=!0,this.userconfigDialog.show()}_launchChangeCurrentEditorDialog(){this.shadowRoot.querySelector("#change-current-editor-dialog").show()}_openSSHKeypairManagementDialog(){this.shadowRoot.querySelector("#ssh-keypair-management-dialog").show()}async _openSSHKeypairRefreshDialog(){globalThis.backendaiclient.fetchSSHKeypair().then((t=>{const e=this.shadowRoot.querySelector("#ssh-keypair-management-dialog"),i=e.querySelector("#current-ssh-public-key"),a=e.querySelector("#copy-current-ssh-public-key-button");i.value=t.ssh_public_key?t.ssh_public_key:"",i.disabled=""===i.value,a.disabled=i.disabled,this.publicSSHkey=i.value?i.value:g("usersettings.NoExistingSSHKeypair"),e.show()}))}_openSSHKeypairClearDialog(){this.shadowRoot.querySelector("#clear-ssh-keypair-dialog").show()}_hideSSHKeypairGenerationDialog(){this.shadowRoot.querySelector("#generate-ssh-keypair-dialog").hide();const t=this.shadowRoot.querySelector("#ssh-public-key").value;if(""!==t){const e=this.shadowRoot.querySelector("#ssh-keypair-management-dialog");e.querySelector("#current-ssh-public-key").value=t,e.querySelector("#copy-current-ssh-public-key-button").disabled=!1}}_hideSSHKeypairDialog(){this.shadowRoot.querySelector("#ssh-keypair-management-dialog").hide()}_hideSSHKeypairClearDialog(){this.shadowRoot.querySelector("#clear-ssh-keypair-dialog").hide()}async _refreshSSHKeypair(){globalThis.backendaiclient.refreshSSHKeypair().then((t=>{const e=this.shadowRoot.querySelector("#generate-ssh-keypair-dialog");e.querySelector("#ssh-public-key").value=t.ssh_public_key,e.querySelector("#ssh-private-key").value=t.ssh_private_key,e.show()}))}_clearCurrentSSHKeypair(){this._hideSSHKeypairClearDialog(),this._hideSSHKeypairGenerationDialog()}_discardCurrentEditorChange(){this._updateSelectedRcFileName(this.rcfile),this._hideCurrentEditorChangeDialog()}_saveCurrentEditorChange(){this._saveUserConfigScript(this.prevRcfile),this._updateSelectedRcFileName(this.rcfile),this._hideCurrentEditorChangeDialog()}_cancelCurrentEditorChange(){this._updateSelectedRcFileName(this.prevRcfile),this._hideCurrentEditorChangeDialog()}_copySSHKey(t){if(""!==t){const e=this.shadowRoot.querySelector(t).value;if(0==e.length)this.notification.text=g("usersettings.NoExistingSSHKeypair"),this.notification.show();else if(void 0!==navigator.clipboard)navigator.clipboard.writeText(e).then((()=>{this.notification.text=g("usersettings.SSHKeyClipboardCopy"),this.notification.show()}),(t=>{console.error("Could not copy text: ",t)}));else{const t=document.createElement("input");t.type="text",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}}}render(){return d`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <h3 class="horizontal center layout">
        <span>${p("usersettings.Preferences")}</span>
        <span class="flex"></span>
      </h3>
      <div class="horizontal wrap layout">
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${p("usersettings.DesktopNotification")}</div>
            <div class="description">${f("usersettings.DescDesktopNotification")}
            </div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="desktop-notification-switch" @click="${t=>this.toggleDesktopNotification(t)}" ?selected="${globalThis.backendaioptions.get("desktop_notification")}"></mwc-switch>
          </div>
        </div>
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${p("usersettings.UseCompactSidebar")}</div>
            <div class="description">${f("usersettings.DescUseCompactSidebar")}</div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="compact-sidebar-switch" @click="${t=>this.toggleCompactSidebar(t)}" ?selected="${globalThis.backendaioptions.get("compact_sidebar")}"></mwc-switch>
          </div>
        </div>
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-select-desc" id="language-setting">
            <div class="title">${p("usersettings.Language")}</div>
            <div class="description">${f("usersettings.DescLanguage")}
            </div>
          </div>
          <div class="vertical center-justified layout setting-select flex end">
            <mwc-select id="ui-language"
                        required
                        outlined
                        @selected="${t=>this.setUserLanguage(t)}">
            ${this.supportLanguages.map((t=>d`
              <mwc-list-item value="${t.code}" ?selected=${globalThis.backendaioptions.get("language")===t.code}>
                ${t.name}
              </mwc-list-item>`))}
            </mwc-select>
          </div>
        </div>
        ${globalThis.isElectron?d`
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${p("usersettings.KeepLoginSessionInformation")}</div>
            <div class="description">${f("usersettings.DescKeepLoginSessionInformation")}</div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="preserve-login-switch" @click="${t=>this.togglePreserveLogin(t)}" ?selected="${globalThis.backendaioptions.get("preserve_login")}"></mwc-switch>
          </div>
        </div>
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-text-desc">
            <div class="title">${p("usersettings.PreferredSSHPort")}</div>
            <div class="description">${f("usersettings.DescPreferredSSHPort")}</div>
          </div>
          <div class="vertical center-justified layout setting-text">
            <mwc-textfield pattern="[0-9]*" @change="${t=>this.changePreferredSSHPort(t)}"
                value="${this.preferredSSHPort}" validationMessage="${p("credential.validation.NumbersOnly")}" auto-validate maxLength="5"></mwc-textfield>
          </div>
        </div>
        `:d``}
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${p("usersettings.SSHKeypairManagement")}</div>
            <div class="description">${f("usersettings.DescSSHKeypairManagement")}</div>
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
            <div class="title">${p("usersettings.AutomaticUpdateCheck")}</div>
            <div class="description">${f("usersettings.DescAutomaticUpdateCheck")}</div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="automatic-update-check-switch" @click="${t=>this.toggleAutomaticUploadCheck(t)}" ?selected="${globalThis.backendaioptions.get("automatic_update_check")}"></mwc-switch>
          </div>
        </div>
        <div class="horizontal layout wrap setting-item" style="display:none;">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${p("usersettings.BetaFeatures")}</div>
            <div class="description">${f("usersettings.DescBetaFeatures")}</div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="beta-feature-switch" @click="${t=>this.toggleBetaFeature(t)}" ?selected="${globalThis.backendaioptions.get("beta_feature")}"></mwc-switch>
          </div>
        </div>
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${p("usersettings.AutoLogout")}</div>
            <div class="description">${f("usersettings.DescAutoLogout")}
            </div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="auto-logout-switch" @click="${t=>this.toggleAutoLogout(t)}"
                        ?selected="${globalThis.backendaioptions.get("auto_logout",!1)}"></mwc-switch>
          </div>
        </div>
        ${this.beta_feature_panel?d`
          <h3 class="horizontal center layout">
            <span>${p("usersettings.BetaFeatures")}</span>
            <span class="flex"></span>
          </h3>
          <div class="description">
            ${p("usersettings.DescNoBetaFeatures")}
          </div>
      `:d``}
      </div>
      ${this.shell_script_edit?d`
        <h3 class="horizontal center layout">
          <span>${p("usersettings.ShellEnvironments")}</span>
          <span class="flex"></span>
        </h3>
        <div class="horizontal wrap layout">
          <mwc-button
            class="shell-button"
            icon="edit"
            outlined
            label="${p("usersettings.EditBootstrapScript")}"
            @click="${()=>this._launchBootstrapScriptDialog()}"></mwc-button>
          <mwc-button
            class="shell-button"
            icon="edit"
            outlined
            label="${p("usersettings.EditUserConfigScript")}"
            @click="${()=>this._launchUserConfigDialog()}"></mwc-button>
        </div>
      <h3 class="horizontal center layout" style="display:none;">
        <span>${p("usersettings.PackageInstallation")}</span>
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
      </div>`:d``}
      <backend-ai-dialog id="bootstrap-dialog" fixed backdrop scrollable blockScrolling persistent>
        <span slot="title">${p("usersettings.EditBootstrapScript")}</span>
        <div slot="content" class="vertical layout terminal-area">
          <div style="margin-bottom:1em">${p("usersettings.BootstrapScriptDescription")}</div>
          <div style="background-color:#272823;height:100%;">
            <lablup-codemirror id="bootstrap-editor" mode="shell"></lablup-codemirror>
          </div>
        </div>
        <div slot="footer" class="end-justified layout flex horizontal">
          <mwc-button id="discard-code" label="${p("button.Cancel")}" @click="${()=>this._hideBootstrapScriptDialog()}"></mwc-button>
          <mwc-button unelevated id="save-code" label="${p("button.Save")}" @click="${()=>this._saveBootstrapScript()}"></mwc-button>
          <mwc-button unelevated id="save-code-and-close" label="${p("button.SaveAndClose")}" @click="${()=>this._saveBootstrapScriptAndCloseDialog()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="userconfig-dialog" fixed backdrop scrollable blockScrolling persistent closeWithConfirmation>
        <span slot="title">${p("usersettings.Edit_ShellScriptTitle_1")} ${this.rcfile} ${p("usersettings.Edit_ShellScriptTitle_2")}</span>
        <div slot="content" class="vertical layout terminal-area">
          <mwc-select id="select-rcfile-type"
                  label="${p("usersettings.ConfigFilename")}"
                  required
                  outlined
                  fixedMenuPosition
                  validationMessage="${p("credential.validation.PleaseSelectOption")}"
                  @selected="${()=>this._toggleRcFileName()}"
                  helper=${p("dialog.warning.WillBeAppliedToNewSessions")}>
            ${this.rcfiles.map((t=>d`
              <mwc-list-item id="${t.path}" value="${t.path}" ?selected=${this.rcfile===t.path}>
                ${t.path}
              </mwc-list-item>`))}
          </mwc-select>
          <div style="background-color:#272823;height:100%;">
            <lablup-codemirror id="usersetting-editor" mode="shell"></lablup-codemirror>
          </div>
        </div>
        <div slot="footer" class="end-justified layout flex horizontal">
          <mwc-button id="discard-code" label="${p("button.Cancel")}" @click="${()=>this._hideUserConfigScriptDialog()}"></mwc-button>
          <mwc-button id="delete-rcfile" label="${p("button.Delete")}" @click="${()=>this._deleteRcFile()}"></mwc-button>
          <mwc-button unelevated id="save-code" label="${p("button.Save")}" @click="${()=>this._saveUserConfigScript()}"></mwc-button>
          <mwc-button unelevated id="save-code-and-close" label="${p("button.SaveAndClose")}" @click="${()=>this._saveUserConfigScriptAndCloseDialog()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="change-current-editor-dialog" noclosebutton fixed backdrop scrollable blockScrolling persistent style="border-bottom:none;">
        <div slot="title">
          ${p("usersettings.DialogDiscardOrSave",{File:()=>this.prevRcfile})}
        </div>
        <div slot="content">
          ${p("usersettings.DialogNoSaveNoPreserve")}
        </div>
        <div slot="footer" style="border-top:none;" class="end-justified layout flex horizontal">
          <mwc-button
              id="cancel-editor"
              label="${p("button.Discard")}"
              @click="${()=>this._discardCurrentEditorChange()}"></mwc-button>
          <mwc-button
              unelevated
              id="save-editor-data"
              label="${p("button.Save")}"
              @click="${()=>this._saveCurrentEditorChange()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="ssh-keypair-management-dialog" fixed backdrop persistent>
        <span slot="title">${p("usersettings.SSHKeypairManagement")}</span>
        <div slot="content" style="max-width:500px">
          <span slot="title"> ${p("usersettings.CurrentSSHPublicKey")}</span>
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
              label="${p("button.Close")}"
              @click="${this._hideSSHKeypairDialog}"></mwc-button>
          <mwc-button
              unelevated
              label="${p("button.Generate")}"
              @click="${this._refreshSSHKeypair}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="generate-ssh-keypair-dialog" fixed persistent noclosebutton>
        <span slot="title">${p("usersettings.SSHKeypairGeneration")}</span>
        <div slot="content" style="max-width:500px;">
          <div class="vertical layout" style="display:inline-block;">
            <span slot="title">${p("usersettings.PublicKey")}</span>
            <div class="horizontal layout flex">
              <mwc-textarea class="ssh-keypair" id="ssh-public-key" outlined readonly></mwc-textarea>
              <mwc-icon-button
              icon="content_copy"
              @click="${()=>this._copySSHKey("#ssh-public-key")}"></mwc-icon-button>
            </div>
            <span slot="title">${p("usersettings.PrivateKey")}</span>
            <div class="horizontal layout flex">
              <mwc-textarea class="ssh-keypair" id="ssh-private-key" outlined readonly></mwc-textarea>
              <mwc-icon-button
                  icon="content_copy"
                  @click="${()=>this._copySSHKey("#ssh-private-key")}"></mwc-icon-button>
            </div>
            <div style="color:crimson">${p("usersettings.SSHKeypairGenerationWarning")}</div>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
             unelevated
             label="${p("button.Close")}"
             @click="${this._openSSHKeypairClearDialog}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="clear-ssh-keypair-dialog" fixed persistent>
        <span slot="title">${p("usersettings.ClearSSHKeypairInput")}</span>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              outlined
              label="${p("button.No")}"
              @click="${this._hideSSHKeypairClearDialog}"></mwc-button>
          <mwc-button
              unelevated
              label="${p("button.Yes")}"
              @click="${this._clearCurrentSSHKeypair}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}};t([e({type:Object})],w.prototype,"bootstrapDialog",void 0),t([e({type:Object})],w.prototype,"userconfigDialog",void 0),t([e({type:Object})],w.prototype,"notification",void 0),t([e({type:Array})],w.prototype,"supportLanguages",void 0),t([e({type:Boolean})],w.prototype,"beta_feature_panel",void 0),t([e({type:Boolean})],w.prototype,"shell_script_edit",void 0),t([e({type:Array})],w.prototype,"rcfiles",void 0),t([e({type:String})],w.prototype,"rcfile",void 0),t([e({type:String})],w.prototype,"prevRcfile",void 0),t([e({type:String})],w.prototype,"preferredSSHPort",void 0),t([e({type:String})],w.prototype,"publicSSHkey",void 0),w=t([a("backend-ai-usersettings-general-list")],w);
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */
let S=class extends o{constructor(){super(),this.images=Object(),this.options=Object(),this._activeTab=Object(),this.clearLogsDialog=Object(),this.logGrid=Object(),this.options={automatic_image_update:!1,cuda_gpu:!1,cuda_fgpu:!1,rocm_gpu:!1,tpu:!1,scheduler:"fifo"}}static get is(){return"backend-ai-usersettings-view"}static get styles(){return[s,r,l,h,u,n`
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
      `]}render(){return d`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
        <lablup-activity-panel noheader narrow autowidth>
        <div slot="message">
          <h3 class="tab horizontal wrap layout">
            <mwc-tab-bar>
              <mwc-tab title="general" label="${p("usersettings.General")}"
                  @click="${t=>this._showTab(t.target)}"></mwc-tab>
              <mwc-tab title="logs" label="${p("usersettings.Logs")}"
                  @click="${t=>this._showTab(t.target)}"></mwc-tab>
            </mwc-tab-bar>
          </h3>
          <div id="general" class="item tab-content outer-space">
            <backend-ai-usersettings-general-list active="true"></backend-ai-usersettings-general-list>
          </div>
          <div id="logs" class="item tab-content" style="display:none;">
            <h3 class="horizontal center layout outer-space">
              <span>${p("logs.LogMessages")}</span>
              <span class="mini" style="font-size:13px;padding-left:15px;">${p("logs.UpTo3000Logs")}</span>
              <span class="flex"></span>
              <mwc-button
                  class="log"
                  icon="refresh"
                  outlined
                  @click="${()=>this._refreshLogs()}">
                <span>${p("button.Refresh")}</span>
              </mwc-button>
              <mwc-button
                  class="log"
                  icon="delete"
                  outlined
                  @click="${()=>this._showClearLogsDialog()}">
                <span>${p("button.ClearLogs")}</span>
              </mwc-button>
            </h3>
            <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
          </div>
        </div>
      </lablup-activity-panel>
      <backend-ai-dialog id="clearlogs-dialog" fixed backdrop scrollable blockScrolling>
        <span slot="title">${p("dialog.warning.LogDeletion")}</span>
        <div slot="content">${p("dialog.warning.CannotBeUndone")}</div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              class="operation"
              id="discard-removal"
              label="${p("button.No")}"
              @click="${()=>this._hideClearLogsDialog()}"></mwc-button>
          <mwc-button
              unelevated
              class="operation"
              id="apply-removal"
              label="${p("button.Yes")}"
              @click="${()=>this._removeLogMessage()}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}firstUpdated(){void 0===globalThis.backendaiclient||null===globalThis.backendaiclient?document.addEventListener("backend-ai-connected",(()=>{this.updateSettings()}),!0):this.updateSettings(),this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification,this.clearLogsDialog=this.shadowRoot.querySelector("#clearlogs-dialog"),document.addEventListener("backend-ai-usersettings-logs",(()=>{this._viewStateChanged(!0)})),document.addEventListener("backend-ai-usersettings",(()=>{this._viewStateChanged(!0)}))}async _viewStateChanged(t){const e=v.getState().app.params.tab;e&&"logs"===e?globalThis.setTimeout((()=>{this.shadowRoot.querySelector('mwc-tab[title="logs"]').click()}),0):globalThis.setTimeout((()=>{this.shadowRoot.querySelector('mwc-tab[title="general"]').click()}),0)}updateSettings(){}_hideClearLogsDialog(){this.clearLogsDialog.hide()}_removeLogMessage(){localStorage.getItem("backendaiwebui.logs")&&localStorage.removeItem("backendaiwebui.logs");const t=new CustomEvent("log-message-clear",{});document.dispatchEvent(t),localStorage.getItem("backendaiwebui.logs"),this.clearLogsDialog.hide(),this.notification.text=g("logs.LogMessageRemoved"),this.notification.show(),this.spinner.hide()}_showClearLogsDialog(){this.clearLogsDialog.show()}_refreshLogs(){this.logGrid=JSON.parse(localStorage.getItem("backendaiwebui.logs")||"{}");const t=new CustomEvent("log-message-refresh",this.logGrid);document.dispatchEvent(t)}_showTab(t){const e=this.shadowRoot.querySelectorAll(".tab-content");for(let t=0;t<e.length;t++)e[t].style.display="none";this._activeTab=t.title,"logs"===this._activeTab&&this._refreshLogs(),this.shadowRoot.querySelector("#"+t.title).style.display="block"}};t([e({type:Object})],S.prototype,"images",void 0),t([e({type:Object})],S.prototype,"options",void 0),t([e({type:Object})],S.prototype,"_activeTab",void 0),t([e({type:Object})],S.prototype,"clearLogsDialog",void 0),t([e({type:Object})],S.prototype,"logGrid",void 0),S=t([a("backend-ai-usersettings-view")],S);var _=S;export{_ as default};