import{_ as t,p as e,c as i,B as a,d as o,I as s,a as r,b as l,h as n,t as c,n as d,e as g,af as p,g as h,f as u,ag as b}from"./backend-ai-webui-ecfefd57.js";import"./switch-636cc2d3.js";import"./select-ba899d94.js";import"./tab-group-ebfc02a3.js";import"./mwc-tab-bar-d449c98a.js";import"./lablup-activity-panel-7a32eadc.js";import"./lablup-codemirror-3a806f43.js";import"./vaadin-grid-8bd957e2.js";import"./vaadin-grid-selection-column-2d5f1bca.js";import"./vaadin-grid-sorter-39f1b30b.js";import"./vaadin-grid-sort-column-5deea517.js";import"./iconset-615a513b.js";import"./expansion-205d2142.js";import"./label-eff0a3da.js";import{t as m}from"./translate-unsafe-html-d6230cc4.js";import"./mwc-switch-f59712f6.js";import"./mwc-textarea-37a1d6d4.js";import"./input-behavior-ada1590a.js";import"./radio-behavior-7a7c698d.js";import"./rowing-0d2117d9.js";import"./unsafe-html-50c8e728.js";
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let v=class extends a{constructor(){super(),this.timestamp="",this.errorType="",this.requestUrl="",this.statusCode="",this.statusText="",this.title="",this.message="",this.logs=[],this._selected_items=[],this.spinner=Object(),this._grid=Object(),this.logView=Object(),this._pageSize=25,this._currentPage=1,this._totalLogCount=0}static get styles(){return[o,s,r,l`
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

        [error-cell] {
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
      `]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this._updatePageItemSize(),this._grid=this.shadowRoot.querySelector("#list-grid"),globalThis.backendaiclient&&globalThis.backendaiclient.is_admin||(this.shadowRoot.querySelector("vaadin-grid").style.height="calc(100vh - 275px)!important"),this.notification=globalThis.lablupNotification,document.addEventListener("log-message-refresh",(()=>this._refreshLogData())),document.addEventListener("log-message-clear",(()=>this._clearLogData()))}_updatePageItemSize(){const t=window.innerHeight-275-30;this._pageSize=Math.floor(t/31)}_refreshLogData(){this.spinner.show(),this._updatePageItemSize(),this.logs=JSON.parse(localStorage.getItem("backendaiwebui.logs")||"{}"),this._totalLogCount=this.logs.length>0?this.logs.length:1,this._updateItemsFromPage(1),this._grid.clearCache(),this.spinner.hide()}_clearLogData(){this.logs=[],this.logView=[],this._totalLogCount=1,this._currentPage=1,this._grid.clearCache()}_updateItemsFromPage(t){if("number"!=typeof t){let e=t.target;"button"!==e.role&&(e=t.target.closest("mwc-icon-button")),"previous-page"===e.id?this._currentPage-=1:this._currentPage+=1}const e=(this._currentPage-1)*this._grid.pageSize,i=this._currentPage*this._grid.pageSize;if(this.logs.length>0){const t=this.logs.slice(e,i);t.forEach((t=>{t.timestamp_hr=this._humanReadableTime(t.timestamp)})),this.logView=t}}_humanReadableTime(t){return(t=new Date(t)).toLocaleString("en-US",{hour12:!1})}_toISOTime(t){return(t=new Date(t)).toISOString()}render(){return n`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <vaadin-grid id="list-grid" page-size="${this._pageSize}"
                   theme="row-stripes column-borders compact wrap-cell-content"
                   aria-label="Error logs" .items="${this.logView}">
        <vaadin-grid-column width="250px" flex-grow="0" text-align="start" auto-width header="${c("logs.TimeStamp")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span class="monospace">[[item.timestamp_hr]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${c("logs.Status")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.statusCode]] [[item.statusText]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${c("logs.ErrorTitle")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.title]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${c("logs.ErrorMessage")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.message]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="50px" flex-grow="0" text-align="start" auto-width header="${c("logs.ErrorType")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.type]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${c("logs.Method")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.requestMethod]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${c("logs.RequestUrl")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span class="monospace">[[item.requestUrl]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable auto-width flex-grow="0" text-align="start" header="${c("logs.Parameters")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span class="monospace">[[item.requestParameters]]</span>
              </div>
          </template>
        </vaadin-grid-column>
      </vaadin-grid>
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
    `}};t([e({type:String})],v.prototype,"timestamp",void 0),t([e({type:String})],v.prototype,"errorType",void 0),t([e({type:String})],v.prototype,"requestUrl",void 0),t([e({type:String})],v.prototype,"statusCode",void 0),t([e({type:String})],v.prototype,"statusText",void 0),t([e({type:String})],v.prototype,"title",void 0),t([e({type:String})],v.prototype,"message",void 0),t([e({type:Array})],v.prototype,"logs",void 0),t([e({type:Array})],v.prototype,"_selected_items",void 0),t([e({type:Object})],v.prototype,"spinner",void 0),t([e({type:Object})],v.prototype,"_grid",void 0),t([e({type:Object})],v.prototype,"logView",void 0),t([e({type:Number})],v.prototype,"_pageSize",void 0),t([e({type:Number})],v.prototype,"_currentPage",void 0),t([e({type:Number})],v.prototype,"_totalLogCount",void 0),v=t([i("backend-ai-error-log-list")],v);let f=class extends a{constructor(){super(),this.lastSavedBootstrapScript="",this.bootstrapDialog=Object(),this.userconfigDialog=Object(),this.supportLanguages=[{name:c("language.OSDefault"),code:"default"},{name:c("language.English"),code:"en"},{name:c("language.Korean"),code:"ko"},{name:c("language.Russian"),code:"ru"},{name:c("language.French"),code:"fr"}],this.beta_feature_panel=!1,this.shell_script_edit=!1,this.rcfile="",this.prevRcfile="",this.preferredSSHPort="",this.publicSSHkey="",this.rcfiles=[]}static get styles(){return[o,s,r,d,g,l`
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

        mwc-select {
          width: 140px;
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
          --mdc-on-theme-primary: var(--general-button-background-color);
        }

        mwc-button {
          margin: auto 10px;
          background-image: none;
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-on-theme-primary: var(--general-button-background-color);
        }

        mwc-button[unelevated] {
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-on-theme-primary: var(--general-button-background-color);
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

          .setting-desc {
            width: 200px;
          }

          #language-setting {
            width: 150px;
          }
        }
      `]}firstUpdated(){this.notification=globalThis.lablupNotification,this.spinner=this.shadowRoot.querySelector("#loading-spinner"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.preferredSSHPort=globalThis.backendaioptions.get("custom_ssh_port"),globalThis.backendaiclient.isAPIVersionCompatibleWith("v4.20191231")&&(this.shell_script_edit=!0,this.bootstrapDialog=this.shadowRoot.querySelector("#bootstrap-dialog"),this.userconfigDialog=this.shadowRoot.querySelector("#userconfig-dialog"),this.rcfile=".bashrc")})):(this.preferredSSHPort=globalThis.backendaioptions.get("custom_ssh_port"),globalThis.backendaiclient.isAPIVersionCompatibleWith("v4.20191231")&&(this.shell_script_edit=!0,this.bootstrapDialog=this.shadowRoot.querySelector("#bootstrap-dialog"),this.userconfigDialog=this.shadowRoot.querySelector("#userconfig-dialog"),this.rcfile=".bashrc")),this.userconfigDialog.addEventListener("dialog-closing-confirm",(()=>{const t=this.shadowRoot.querySelector("#usersetting-editor").getValue(),e=this.rcfiles.findIndex((t=>t.path===this.rcfile));this.rcfiles[e].data!==t?(this.prevRcfile=this.rcfile,this._launchChangeCurrentEditorDialog()):(this.userconfigDialog.closeWithConfirmation=!1,this.userconfigDialog.hide())}))}toggleDesktopNotification(t){!1===t.target.checked?(globalThis.backendaioptions.set("desktop_notification",!1),this.notification.supportDesktopNotification=!1):(globalThis.backendaioptions.set("desktop_notification",!0),this.notification.supportDesktopNotification=!0)}toggleCompactSidebar(t){!1===t.target.checked?globalThis.backendaioptions.set("compact_sidebar",!1):globalThis.backendaioptions.set("compact_sidebar",!0)}togglePreserveLogin(t){!1===t.target.checked?globalThis.backendaioptions.set("preserve_login",!1):globalThis.backendaioptions.set("preserve_login",!0)}toggleAutoLogout(t){if(!1===t.target.checked){globalThis.backendaioptions.set("auto_logout",!1);const t=new CustomEvent("backend-ai-auto-logout",{detail:!1});document.dispatchEvent(t)}else{globalThis.backendaioptions.set("auto_logout",!0);const t=new CustomEvent("backend-ai-auto-logout",{detail:!0});document.dispatchEvent(t)}}toggleAutomaticUploadCheck(t){!1===t.target.checked?globalThis.backendaioptions.set("automatic_update_check",!1):(globalThis.backendaioptions.set("automatic_update_check",!0),globalThis.backendaioptions.set("automatic_update_count_trial",0))}setUserLanguage(t){if(t.target.selected.value!==globalThis.backendaioptions.get("language")){let e=t.target.selected.value;"default"===e&&(e=globalThis.navigator.language.split("-")[0]),globalThis.backendaioptions.set("language",t.target.selected.value),globalThis.backendaioptions.set("current_language",e),p(e),setTimeout((()=>{const t=this.shadowRoot.querySelector("#ui-language");t.selectedText=t.selected.textContent.trim()}),100)}}changePreferredSSHPort(t){const e=Number(t.target.value);if(e!==globalThis.backendaioptions.get("custom_ssh_port",""))if(0!==e&&e){if(e<1024||e>65534)return this.notification.text=h("usersettings.InvalidPortNumber"),void this.notification.show();globalThis.backendaioptions.set("custom_ssh_port",e)}else globalThis.backendaioptions.delete("custom_ssh_port")}toggleBetaFeature(t){!1===t.target.checked?(globalThis.backendaioptions.set("beta_feature",!1),this.beta_feature_panel=!1):(globalThis.backendaioptions.set("beta_feature",!0),this.beta_feature_panel=!0)}_fetchBootstrapScript(){return globalThis.backendaiclient.userConfig.get_bootstrap_script().then((t=>{const e=t||"";return this.lastSavedBootstrapScript=e,e})).catch((t=>{console.log(t),t&&t.message&&(this.notification.text=u.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))}))}async _saveBootstrapScript(){const t=this.shadowRoot.querySelector("#bootstrap-editor").getValue();if(this.lastSavedBootstrapScript===t)return this.notification.text=h("resourceGroup.NochangesMade"),void this.notification.show();this.spinner.show(),globalThis.backendaiclient.userConfig.update_bootstrap_script(t).then((t=>{this.notification.text=h("usersettings.BootstrapScriptUpdated"),this.notification.show(),this.spinner.hide()}))}async _saveBootstrapScriptAndCloseDialog(){await this._saveBootstrapScript(),this._hideBootstrapScriptDialog()}async _editBootstrapScript(){const t=this.shadowRoot.querySelector("#bootstrap-editor"),e=await this._fetchBootstrapScript();t.setValue(e),this.bootstrapDialog.show()}_hideBootstrapScriptDialog(){this.bootstrapDialog.hide()}async _editUserConfigScript(){const t=this.shadowRoot.querySelector("#usersetting-editor");this.rcfiles=await this._fetchUserConfigScript();[".bashrc",".zshrc",".tmux.conf.local",".vimrc",".Renviron"].map((e=>{const i=this.rcfiles.findIndex((t=>t.path===e));if(-1===i)this.rcfiles.push({path:e,data:""}),t.setValue("");else{const e=this.rcfiles[i].data;t.setValue(e)}}));[".tmux.conf"].forEach((t=>{const e=this.rcfiles.findIndex((e=>e.path===t));e>-1&&this.rcfiles.splice(e,1)}));const e=this.rcfiles.findIndex((t=>t.path===this.rcfile));if(-1!=e){const i=this.rcfiles[e].data;t.setValue(i)}else t.setValue("");t.refresh(),this.spinner.hide(),this._toggleDeleteButton()}_fetchUserConfigScript(){return globalThis.backendaiclient.userConfig.get().then((t=>t||"")).catch((t=>{console.log(t),t&&t.message&&(this.notification.text=u.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))}))}async _saveUserConfigScript(t=this.rcfile){const e=this.shadowRoot.querySelector("#usersetting-editor").getValue(),i=this.rcfiles.findIndex((e=>e.path===t)),a=this.shadowRoot.querySelector("#select-rcfile-type");if(a.items.length>0){const e=a.items.find((e=>e.value===t)),i=a.items.indexOf(e);a.select(i)}if(-1!=i)if(""===this.rcfiles[i].data){if(""===e)return this.spinner.hide(),this.notification.text=h("usersettings.DescNewUserConfigFileCreated"),void this.notification.show();globalThis.backendaiclient.userConfig.create(e,this.rcfiles[i].path).then((t=>{this.spinner.hide(),this.notification.text=h("usersettings.DescScriptCreated"),this.notification.show()})).catch((t=>{this.spinner.hide(),console.log(t),t&&t.message&&(this.notification.text=u.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))}))}else{if(this.rcfiles[i].data===e)return this.notification.text=h("resourceGroup.NochangesMade"),void this.notification.show();if(""===e)return this.notification.text=h("usersettings.DescLetUserUpdateScriptWithNonEmptyValue"),void this.notification.show();await globalThis.backendaiclient.userConfig.update(e,t).then((t=>{this.notification.text=h("usersettings.DescScriptUpdated"),this.notification.show(),this.spinner.hide()})).catch((t=>{this.spinner.hide(),console.log(t),t&&t.message&&(this.notification.text=u.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))}))}await setTimeout((()=>{this._editUserConfigScript()}),200),this.spinner.show()}async _saveUserConfigScriptAndCloseDialog(){await this._saveUserConfigScript(),this._hideUserConfigScriptDialog()}_hideUserConfigScriptDialog(){this.userconfigDialog.hide()}_hideCurrentEditorChangeDialog(){this.shadowRoot.querySelector("#change-current-editor-dialog").hide()}_updateSelectedRcFileName(t){const e=this.shadowRoot.querySelector("#select-rcfile-type"),i=this.shadowRoot.querySelector("#userconfig-dialog #usersetting-editor");if(e.items.length>0){const a=e.items.find((e=>e.value===t)),o=e.items.indexOf(a),s=this.rcfiles[o].data;e.select(o),i.setValue(s)}}_changeCurrentEditorData(){const t=this.shadowRoot.querySelector("#userconfig-dialog #usersetting-editor"),e=this.shadowRoot.querySelector("#select-rcfile-type"),i=this.rcfiles.findIndex((t=>t.path===e.value)),a=this.rcfiles[i].data;t.setValue(a)}_toggleRcFileName(){var t;const e=this.shadowRoot.querySelector("#userconfig-dialog #usersetting-editor"),i=this.shadowRoot.querySelector("#select-rcfile-type");this.prevRcfile=this.rcfile,this.rcfile=i.value;let a=this.rcfiles.findIndex((t=>t.path===this.prevRcfile)),o=a>-1?this.rcfiles[a].data:"";const s=e.getValue();i.layout(),this._toggleDeleteButton(),o!==s?this._launchChangeCurrentEditorDialog():(a=this.rcfiles.findIndex((t=>t.path===this.rcfile)),o=(null===(t=this.rcfiles[a])||void 0===t?void 0:t.data)?this.rcfiles[a].data:"",e.setValue(o))}_toggleDeleteButton(){var t,e;const i=this.shadowRoot.querySelector("#delete-rcfile"),a=this.rcfiles.findIndex((t=>t.path===this.rcfile));a>-1&&(i.disabled=!((null===(t=this.rcfiles[a])||void 0===t?void 0:t.data)&&(null===(e=this.rcfiles[a])||void 0===e?void 0:e.permission)))}async _deleteRcFile(t){t||(t=this.rcfile),t&&globalThis.backendaiclient.userConfig.delete(t).then((e=>{const i=h("usersettings.DescScriptDeleted")+t;this.notification.text=i,this.notification.show(),this.spinner.hide(),this._hideUserConfigScriptDialog()})).catch((t=>{console.log(t),t&&t.message&&(this.notification.text=u.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))})),await setTimeout((()=>{this._editUserConfigScript()}),200)}async _deleteRcFileAll(){const t=this.rcfiles.filter((t=>""!==t.permission&&""!==t.data)).map((t=>{const e=t.path;return globalThis.backendaiclient.userConfig.delete(e)}));Promise.all(t).then((t=>{const e=h("usersettings.DescScriptAllDeleted");this.notification.text=e,this.notification.show(),this.spinner.hide()})).catch((t=>{console.log(t),t&&t.message&&(this.notification.text=u.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))})),await setTimeout((()=>{this._editUserConfigScript()}),200)}_createRcFile(t){t&&globalThis.backendaiclient.userConfig.create(t)}async _launchUserConfigDialog(){await this._editUserConfigScript(),this.userconfigDialog.closeWithConfirmation=!0,this.userconfigDialog.show()}_launchChangeCurrentEditorDialog(){this.shadowRoot.querySelector("#change-current-editor-dialog").show()}_openSSHKeypairManagementDialog(){this.shadowRoot.querySelector("#ssh-keypair-management-dialog").show()}async _openSSHKeypairRefreshDialog(){globalThis.backendaiclient.fetchSSHKeypair().then((t=>{const e=this.shadowRoot.querySelector("#ssh-keypair-management-dialog"),i=e.querySelector("#current-ssh-public-key"),a=e.querySelector("#copy-current-ssh-public-key-button");i.value=t.ssh_public_key?t.ssh_public_key:"",i.disabled=""===i.value,a.disabled=i.disabled,this.publicSSHkey=i.value?i.value:h("usersettings.NoExistingSSHKeypair"),e.show()}))}_openSSHKeypairClearDialog(){this.shadowRoot.querySelector("#clear-ssh-keypair-dialog").show()}_hideSSHKeypairGenerationDialog(){this.shadowRoot.querySelector("#generate-ssh-keypair-dialog").hide();const t=this.shadowRoot.querySelector("#ssh-public-key").value;if(""!==t){const e=this.shadowRoot.querySelector("#ssh-keypair-management-dialog");e.querySelector("#current-ssh-public-key").value=t,e.querySelector("#copy-current-ssh-public-key-button").disabled=!1}}_hideSSHKeypairDialog(){this.shadowRoot.querySelector("#ssh-keypair-management-dialog").hide()}_hideSSHKeypairClearDialog(){this.shadowRoot.querySelector("#clear-ssh-keypair-dialog").hide()}async _refreshSSHKeypair(){globalThis.backendaiclient.refreshSSHKeypair().then((t=>{const e=this.shadowRoot.querySelector("#generate-ssh-keypair-dialog");e.querySelector("#ssh-public-key").value=t.ssh_public_key,e.querySelector("#ssh-private-key").value=t.ssh_private_key,e.show()}))}_clearCurrentSSHKeypair(){this._hideSSHKeypairClearDialog(),this._hideSSHKeypairGenerationDialog()}_discardCurrentEditorChange(){this._updateSelectedRcFileName(this.rcfile),this._hideCurrentEditorChangeDialog()}_saveCurrentEditorChange(){this._saveUserConfigScript(this.prevRcfile),this._updateSelectedRcFileName(this.rcfile),this._hideCurrentEditorChangeDialog()}_cancelCurrentEditorChange(){this._updateSelectedRcFileName(this.prevRcfile),this._hideCurrentEditorChangeDialog()}_copySSHKey(t){if(""!==t){const e=this.shadowRoot.querySelector(t).value;if(0==e.length)this.notification.text=h("usersettings.NoExistingSSHKeypair"),this.notification.show();else if(void 0!==navigator.clipboard)navigator.clipboard.writeText(e).then((()=>{this.notification.text=h("usersettings.SSHKeyClipboardCopy"),this.notification.show()}),(t=>{console.error("Could not copy text: ",t)}));else{const t=document.createElement("input");t.type="text",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}}}render(){return n`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <h3 class="horizontal center layout">
        <span>${c("usersettings.Preferences")}</span>
        <span class="flex"></span>
      </h3>
      <div class="horizontal wrap layout">
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${c("usersettings.DesktopNotification")}</div>
            <div class="description">${m("usersettings.DescDesktopNotification")}
            </div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="desktop-notification-switch" @change="${t=>this.toggleDesktopNotification(t)}" ?checked="${globalThis.backendaioptions.get("desktop_notification")}"></mwc-switch>
          </div>
        </div>
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${c("usersettings.UseCompactSidebar")}</div>
            <div class="description">${m("usersettings.DescUseCompactSidebar")}</div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="compact-sidebar-switch" @change="${t=>this.toggleCompactSidebar(t)}" ?checked="${globalThis.backendaioptions.get("compact_sidebar")}"></mwc-switch>
          </div>
        </div>
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-select-desc" id="language-setting">
            <div class="title">${c("usersettings.Language")}</div>
            <div class="description">${m("usersettings.DescLanguage")}
            </div>
          </div>
          <div class="vertical center-justified layout setting-select flex end">
            <mwc-select id="ui-language"
                        required
                        outlined
                        @selected="${t=>this.setUserLanguage(t)}">
            ${this.supportLanguages.map((t=>n`
              <mwc-list-item value="${t.code}" ?selected=${globalThis.backendaioptions.get("language")===t.code}>
                ${t.name}
              </mwc-list-item>`))}
            </mwc-select>
          </div>
        </div>
        ${globalThis.isElectron?n`
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${c("usersettings.KeepLoginSessionInformation")}</div>
            <div class="description">${m("usersettings.DescKeepLoginSessionInformation")}</div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="preserve-login-switch" @change="${t=>this.togglePreserveLogin(t)}" ?checked="${globalThis.backendaioptions.get("preserve_login")}"></mwc-switch>
          </div>
        </div>
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-text-desc">
            <div class="title">${c("usersettings.PreferredSSHPort")}</div>
            <div class="description">${m("usersettings.DescPreferredSSHPort")}</div>
          </div>
          <div class="vertical center-justified layout setting-text">
            <mwc-textfield pattern="[0-9]*" @change="${t=>this.changePreferredSSHPort(t)}"
                value="${this.preferredSSHPort}" validationMessage="${c("credential.validation.NumbersOnly")}" auto-validate maxLength="5"></mwc-textfield>
          </div>
        </div>
        `:n``}
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${c("usersettings.SSHKeypairManagement")}</div>
            <div class="description">${m("usersettings.DescSSHKeypairManagement")}</div>
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
            <div class="title">${c("usersettings.AutomaticUpdateCheck")}</div>
            <div class="description">${m("usersettings.DescAutomaticUpdateCheck")}</div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="automatic-update-check-switch" @change="${t=>this.toggleAutomaticUploadCheck(t)}" ?checked="${globalThis.backendaioptions.get("automatic_update_check")}"></mwc-switch>
          </div>
        </div>
        <div class="horizontal layout wrap setting-item" style="display:none;">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${c("usersettings.BetaFeatures")}</div>
            <div class="description">${m("usersettings.DescBetaFeatures")}</div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="beta-feature-switch" @change="${t=>this.toggleBetaFeature(t)}" ?checked="${globalThis.backendaioptions.get("beta_feature")}"></mwc-switch>
          </div>
        </div>
        <div class="horizontal layout wrap setting-item">
          <div class="vertical start start-justified layout setting-desc">
            <div class="title">${c("usersettings.AutoLogout")}</div>
            <div class="description">${m("usersettings.DescAutoLogout")}
            </div>
          </div>
          <div class="vertical center-justified layout setting-button flex end">
            <mwc-switch id="auto-logout-switch" @change="${t=>this.toggleAutoLogout(t)}"
                        ?checked="${globalThis.backendaioptions.get("auto_logout",!1)}"></mwc-switch>
          </div>
        </div>
        ${this.beta_feature_panel?n`
          <h3 class="horizontal center layout">
            <span>${c("usersettings.BetaFeatures")}</span>
            <span class="flex"></span>
          </h3>
          <div class="description">
            ${c("usersettings.DescNoBetaFeatures")}
          </div>
      `:n``}
      </div>
      ${this.shell_script_edit?n`
        <h3 class="horizontal center layout">
          <span>${c("usersettings.ShellEnvironments")}</span>
          <span class="flex"></span>
        </h3>
        <div class="horizontal wrap layout setting-item">
          <mwc-button
            icon="edit"
            outlined
            label="${c("usersettings.EditBootstrapScript")}"
            style="margin-right:20px; background: none; display: none;"
            @click="${()=>this._editBootstrapScript()}"></mwc-button>
        <mwc-button
            icon="edit"
            outlined
            label="${c("usersettings.EditUserConfigScript")}"
            @click="${()=>this._launchUserConfigDialog()}"></mwc-button>
      </div>
      <h3 class="horizontal center layout" style="display:none;">
        <span>${c("usersettings.PackageInstallation")}</span>
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
      </div>`:n``}
      <backend-ai-dialog id="bootstrap-dialog" fixed backdrop scrollable blockScrolling persistent>
        <span slot="title">${c("usersettings.BootstrapScript")}</span>
        <div slot="content">
          <lablup-codemirror id="bootstrap-editor" mode="shell"></lablup-codemirror>
        </div>
        <div slot="footer" class="end-justified layout flex horizontal">
          <mwc-button id="discard-code" label="${c("button.Cancel")}" @click="${()=>this._hideBootstrapScriptDialog()}"></mwc-button>
          <mwc-button unelevated id="save-code" label="${c("button.Save")}" @click="${()=>this._saveBootstrapScript()}"></mwc-button>
          <mwc-button unelevated id="save-code-and-close" label="${c("button.SaveAndClose")}" @click="${()=>this._saveBootstrapScriptAndCloseDialog()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="userconfig-dialog" fixed backdrop scrollable blockScrolling persistent closeWithConfirmation>
        <span slot="title">${c("usersettings.Edit_ShellScriptTitle_1")} ${this.rcfile} ${c("usersettings.Edit_ShellScriptTitle_2")}</span>
        <div slot="content" class="vertical layout" style="height:calc(100vh - 261px);">
          <mwc-select id="select-rcfile-type"
                  label="${c("usersettings.ConfigFilename")}"
                  required
                  outlined
                  validationMessage="${c("credential.validation.PleaseSelectOption")}"
                  @selected="${()=>this._toggleRcFileName()}"
                  helper=${c("dialog.warning.WillBeAppliedToNewSessions")}>
            ${this.rcfiles.map((t=>n`
              <mwc-list-item id="${t.path}" value="${t.path}" ?selected=${this.rcfile===t.path}>
                ${t.path}
              </mwc-list-item>`))}
          </mwc-select>
          <div style="background-color:#272823;height:100%;">
            <lablup-codemirror id="usersetting-editor" mode="shell"></lablup-codemirror>
          </div>
        </div>
        <div slot="footer" class="end-justified layout flex horizontal">
          <mwc-button id="discard-code" label="${c("button.Cancel")}" @click="${()=>this._hideUserConfigScriptDialog()}"></mwc-button>
          <mwc-button id="delete-rcfile" label="${c("button.Delete")}" @click="${()=>this._deleteRcFile()}"></mwc-button>
          <mwc-button unelevated id="save-code" label="${c("button.Save")}" @click="${()=>this._saveUserConfigScript()}"></mwc-button>
          <mwc-button unelevated id="save-code-and-close" label="${c("button.SaveAndClose")}" @click="${()=>this._saveUserConfigScriptAndCloseDialog()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="change-current-editor-dialog" noclosebutton fixed backdrop scrollable blockScrolling persistent style="border-bottom:none;">
        <div slot="title">
          ${c("usersettings.DialogDiscardOrSave",{File:()=>this.prevRcfile})}
        </div>
        <div slot="content">
          ${c("usersettings.DialogNoSaveNoPreserve")}
        </div>
        <div slot="footer" style="border-top:none;" class="end-justified layout flex horizontal">
          <mwc-button
              id="cancel-editor"
              label="${c("button.Discard")}"
              @click="${()=>this._discardCurrentEditorChange()}"></mwc-button>
          <mwc-button
              unelevated
              id="save-editor-data"
              label="${c("button.Save")}"
              @click="${()=>this._saveCurrentEditorChange()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="ssh-keypair-management-dialog" fixed backdrop persistent>
        <span slot="title">${c("usersettings.SSHKeypairManagement")}</span>
        <div slot="content" style="max-width:500px">
          <span slot="title"> ${c("usersettings.CurrentSSHPublicKey")}</span>
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
              label="${c("button.Close")}"
              @click="${this._hideSSHKeypairDialog}"></mwc-button>
          <mwc-button
              unelevated
              label="${c("button.Generate")}"
              @click="${this._refreshSSHKeypair}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="generate-ssh-keypair-dialog" fixed persistent noclosebutton>
        <span slot="title">${c("usersettings.SSHKeypairGeneration")}</span>
        <div slot="content" style="max-width:500px;">
          <div class="vertical layout" style="display:inline-block;">
            <span slot="title">${c("usersettings.PublicKey")}</span>
            <div class="horizontal layout flex">
              <mwc-textarea class="ssh-keypair" id="ssh-public-key" outlined readonly></mwc-textarea>
              <mwc-icon-button
              icon="content_copy"
              @click="${()=>this._copySSHKey("#ssh-public-key")}"></mwc-icon-button>
            </div>
            <span slot="title">${c("usersettings.PrivateKey")}</span>
            <div class="horizontal layout flex">
              <mwc-textarea class="ssh-keypair" id="ssh-private-key" outlined readonly></mwc-textarea>
              <mwc-icon-button
                  icon="content_copy"
                  @click="${()=>this._copySSHKey("#ssh-private-key")}"></mwc-icon-button>
            </div>
            <div style="color:crimson">${c("usersettings.SSHKeypairGenerationWarning")}</div>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
             unelevated
             label="${c("button.Close")}"
             @click="${this._openSSHKeypairClearDialog}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="clear-ssh-keypair-dialog" fixed persistent>
        <span slot="title">${c("usersettings.ClearSSHKeypairInput")}</span>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              outlined
              label="${c("button.No")}"
              @click="${this._hideSSHKeypairClearDialog}"></mwc-button>
          <mwc-button
              unelevated
              label="${c("button.Yes")}"
              @click="${this._clearCurrentSSHKeypair}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}};t([e({type:Object})],f.prototype,"bootstrapDialog",void 0),t([e({type:Object})],f.prototype,"userconfigDialog",void 0),t([e({type:Object})],f.prototype,"notification",void 0),t([e({type:Array})],f.prototype,"supportLanguages",void 0),t([e({type:Boolean})],f.prototype,"beta_feature_panel",void 0),t([e({type:Boolean})],f.prototype,"shell_script_edit",void 0),t([e({type:Array})],f.prototype,"rcfiles",void 0),t([e({type:String})],f.prototype,"rcfile",void 0),t([e({type:String})],f.prototype,"prevRcfile",void 0),t([e({type:String})],f.prototype,"preferredSSHPort",void 0),t([e({type:String})],f.prototype,"publicSSHkey",void 0),f=t([i("backend-ai-usersettings-general-list")],f);
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */
let y=class extends a{constructor(){super(),this.images=Object(),this.options=Object(),this._activeTab=Object(),this.clearLogsDialog=Object(),this.logGrid=Object(),this.options={automatic_image_update:!1,cuda_gpu:!1,cuda_fgpu:!1,rocm_gpu:!1,tpu:!1,scheduler:"fifo"}}static get is(){return"backend-ai-usersettings-view"}static get styles(){return[o,s,r,d,g,l`
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
          --mdc-on-theme-primary: var(--general-button-background-color);
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
          --mdc-on-theme-primary: var(--general-button-background-color);
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
      `]}render(){return n`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
        <lablup-activity-panel noheader narrow autowidth>
        <div slot="message">
          <h3 class="tab horizontal wrap layout">
            <mwc-tab-bar>
              <mwc-tab title="general" label="${c("usersettings.General")}"
                  @click="${t=>this._showTab(t.target)}"></mwc-tab>
              <mwc-tab title="logs" label="${c("usersettings.Logs")}"
                  @click="${t=>this._showTab(t.target)}"></mwc-tab>
            </mwc-tab-bar>
          </h3>
          <div id="general" class="item tab-content outer-space">
            <backend-ai-usersettings-general-list active="true"></backend-ai-usersettings-general-list>
          </div>
          <div id="logs" class="item tab-content" style="display:none;">
            <h3 class="horizontal center layout outer-space">
              <span>${c("logs.LogMessages")}</span>
              <span class="mini" style="font-size:13px;padding-left:15px;">${c("logs.UpTo3000Logs")}</span>
              <span class="flex"></span>
              <mwc-button
                  class="log"
                  icon="refresh"
                  outlined
                  @click="${()=>this._refreshLogs()}">
                <span>${c("button.Refresh")}</span>
              </mwc-button>
              <mwc-button
                  class="log"
                  icon="delete"
                  outlined
                  @click="${()=>this._showClearLogsDialog()}">
                <span>${c("button.ClearLogs")}</span>
              </mwc-button>
            </h3>
            <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
          </div>
        </div>
      </lablup-activity-panel>
      <backend-ai-dialog id="clearlogs-dialog" fixed backdrop scrollable blockScrolling>
        <span slot="title">${c("dialog.warning.LogDeletion")}</span>
        <div slot="content">${c("dialog.warning.CannotBeUndone")}</div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              class="operation"
              id="discard-removal"
              label="${c("button.No")}"
              @click="${()=>this._hideClearLogsDialog()}"></mwc-button>
          <mwc-button
              unelevated
              class="operation"
              id="apply-removal"
              label="${c("button.Yes")}"
              @click="${()=>this._removeLogMessage()}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}firstUpdated(){void 0===globalThis.backendaiclient||null===globalThis.backendaiclient?document.addEventListener("backend-ai-connected",(()=>{this.updateSettings()}),!0):this.updateSettings(),this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification,this.clearLogsDialog=this.shadowRoot.querySelector("#clearlogs-dialog"),document.addEventListener("backend-ai-usersettings-logs",(()=>{this._viewStateChanged(!0)})),document.addEventListener("backend-ai-usersettings",(()=>{this._viewStateChanged(!0)}))}async _viewStateChanged(t){const e=b.getState().app.params.tab;e&&"logs"===e?globalThis.setTimeout((()=>{this.shadowRoot.querySelector('mwc-tab[title="logs"]').click()}),0):globalThis.setTimeout((()=>{this.shadowRoot.querySelector('mwc-tab[title="general"]').click()}),0)}updateSettings(){}_hideClearLogsDialog(){this.clearLogsDialog.hide()}_removeLogMessage(){localStorage.getItem("backendaiwebui.logs")&&localStorage.removeItem("backendaiwebui.logs");const t=new CustomEvent("log-message-clear",{});document.dispatchEvent(t),localStorage.getItem("backendaiwebui.logs"),this.clearLogsDialog.hide(),this.notification.text=h("logs.LogMessageRemoved"),this.notification.show(),this.spinner.hide()}_showClearLogsDialog(){this.clearLogsDialog.show()}_refreshLogs(){this.logGrid=JSON.parse(localStorage.getItem("backendaiwebui.logs")||"{}");const t=new CustomEvent("log-message-refresh",this.logGrid);document.dispatchEvent(t)}_showTab(t){const e=this.shadowRoot.querySelectorAll(".tab-content");for(let t=0;t<e.length;t++)e[t].style.display="none";this._activeTab=t.title,"logs"===this._activeTab&&this._refreshLogs(),this.shadowRoot.querySelector("#"+t.title).style.display="block"}};t([e({type:Object})],y.prototype,"images",void 0),t([e({type:Object})],y.prototype,"options",void 0),t([e({type:Object})],y.prototype,"_activeTab",void 0),t([e({type:Object})],y.prototype,"clearLogsDialog",void 0),t([e({type:Object})],y.prototype,"logGrid",void 0),y=t([i("backend-ai-usersettings-view")],y);var w=y;export default w;
