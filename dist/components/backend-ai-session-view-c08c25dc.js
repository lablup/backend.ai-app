import{B as e,b as t,I as i,a as o,x as a,c as s,r as n,g as c,$ as l,t as r,_ as d,e as b,n as p}from"./backend-ai-webui-29a04808.js";import"./backend-ai-session-launcher-02113764.js";import"./backend-ai-session-list-67dd69a5.js";import"./textfield-e939229b.js";import"./mwc-tab-bar-83be8cdd.js";import"./lablup-activity-panel-0d4aa16a.js";import{J as h}from"./json_to_csv-6fce0343.js";import"./mwc-linear-progress-6cadac4a.js";import"./mwc-switch-e596012f.js";import"./label-f49b9d87.js";import"./lablup-progress-bar-bafce280.js";import"./mwc-check-list-item-4cc3468a.js";import"./slider-c0b339c3.js";import"./vaadin-grid-324151db.js";import"./vaadin-grid-filter-column-6c0e4354.js";import"./vaadin-grid-selection-column-ef5940fe.js";import"./dom-repeat-c48bf759.js";import"./vaadin-item-styles-461be75c.js";import"./expansion-a141e6f0.js";import"./radio-behavior-57c4111b.js";import"./lablup-codemirror-83e8eb38.js";import"./vaadin-grid-sort-column-5a315bda.js";import"./iconset-ca86c42e.js";import"./input-behavior-3fd94ba0.js";
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */let u=class extends e{constructor(){super(),this._status="inactive",this.active=!0,this._lists=Object(),this.is_admin=!1,this.filterAccessKey="",this._connectionMode="API",this._defaultFileName="",this.exportToCsvDialog=Object(),this.active=!1,this._status="inactive"}static get styles(){return[t,i,o,a,s,n`
        h3.tab {
          background-color: var(--general-tabbar-background-color);
          border-radius: 5px 5px 0 0;
        }
        mwc-tab-bar {
          --mdc-theme-primary: var(--general-sidebar-selected-color);
          --mdc-text-transform: none;
          --mdc-tab-color-default: var(--general-tabbar-background-color);
          --mdc-tab-text-label-color-default: var(--general-sidebar-color);
        }

        wl-button {
          --button-bg:  var(--paper-light-green-50);
          --button-bg-hover:  var(--paper-green-100);
          --button-bg-active:  var(--paper-green-600);
        }

        wl-label.unlimited {
          margin: 12px 0;
        }

        wl-label.warning {
          font-size: 10px;
          --label-color: var(--paper-red-600);
        }

        wl-checkbox#export-csv-checkbox {
          margin-right: 5px;
          --checkbox-size: 10px;
          --checkbox-border-radius: 2px;
          --checkbox-bg-checked: var(--paper-green-800);
          --checkbox-checkmark-stroke-color: var(--paper-lime-100);
          --checkbox-color-checked: var(--paper-green-800);
        }

        backend-ai-dialog wl-textfield {
          padding: 10px 0;
          --input-font-family: var(--general-font-family);
          --input-font-size: 12px;
          --input-color-disabled: #bbbbbb;
          --input-label-color-disabled: #222222;
          --input-label-font-size: 12px;
          --input-border-style-disabled: 1px solid #cccccc;
        }

        mwc-menu {
          --mdc-theme-surface: #f1f1f1;
          --mdc-menu-item-height : auto;
        }

        mwc-menu#dropdown-menu {
          position: relative;
          left: -170px;
          top: 50px;
        }

        mwc-list-item {
          font-size : 14px;
        }

        mwc-icon-button {
          --mdc-icon-size: 20px;
          color: var(--paper-grey-700);
        }

        mwc-icon-button#dropdown-menu-button {
          margin-left: 10px;
        }

        mwc-textfield {
          width: 100%;
          --mdc-text-field-fill-color: transparent;
          --mdc-theme-primary: var(--paper-green-600);
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        backend-ai-resource-monitor {
          margin: 10px 50px;
        }

        backend-ai-session-launcher#session-launcher {
          --component-width: 100px;
          --component-shadow-color: transparent;
        }
        @media screen and (max-width: 805px) {
          mwc-tab {
            --mdc-typography-button-font-size: 10px;
          }
        }
      `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list"),this.notification=globalThis.lablupNotification,document.addEventListener("backend-ai-session-list-refreshed",(()=>{this.shadowRoot.querySelector("#running-jobs").refreshList(!0,!1)})),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_admin=globalThis.backendaiclient.is_admin,this._connectionMode=globalThis.backendaiclient._config._connectionMode}),!0):(this.is_admin=globalThis.backendaiclient.is_admin,this._connectionMode=globalThis.backendaiclient._config._connectionMode)}async _viewStateChanged(e){if(await this.updateComplete,!1!==e)this.shadowRoot.querySelector("#resource-monitor").setAttribute("active",!0),this.shadowRoot.querySelector("#running-jobs").setAttribute("active",!0),this.exportToCsvDialog=this.shadowRoot.querySelector("#export-to-csv"),this._status="active";else{this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active"),this._status="inactive";for(let e=0;e<this._lists.length;e++)this._lists[e].removeAttribute("active")}}_toggleDialogCheckbox(e){const t=e.target,i=this.shadowRoot.querySelector("#date-from"),o=this.shadowRoot.querySelector("#date-to");i.disabled=t.checked,o.disabled=t.checked}_triggerClearTimeout(){const e=new CustomEvent("backend-ai-clear-timeout");document.dispatchEvent(e)}_showTab(e){const t=this.shadowRoot.querySelectorAll(".tab-content");for(let e=0;e<t.length;e++)t[e].style.display="none";this.shadowRoot.querySelector("#"+e.title+"-lists").style.display="block";for(let e=0;e<this._lists.length;e++)this._lists[e].removeAttribute("active");this._triggerClearTimeout(),this.shadowRoot.querySelector("#"+e.title+"-jobs").setAttribute("active",!0)}_toggleDropdown(e){const t=this.shadowRoot.querySelector("#dropdown-menu"),i=e.target;t.anchor=i,t.open||t.show()}_openExportToCsvDialog(){const e=this.shadowRoot.querySelector("#dropdown-menu");e.open&&e.close(),console.log("Downloading CSV File..."),this._defaultFileName=this._getDefaultCSVFileName(),this.exportToCsvDialog.show()}_getFirstDateOfMonth(){const e=new Date;return new Date(e.getFullYear(),e.getMonth(),2).toISOString().substring(0,10)}_getDefaultCSVFileName(){return(new Date).toISOString().substring(0,10)+"_"+(new Date).toTimeString().slice(0,8).replace(/:/gi,"-")}_validateDateRange(){const e=this.shadowRoot.querySelector("#date-to"),t=this.shadowRoot.querySelector("#date-from");if(e.value&&t.value){new Date(e.value).getTime()<new Date(t.value).getTime()&&(e.value=t.value)}}_automaticScaledTime(e){let t=Object();const i=["D","H","M","S"],o=[864e5,36e5,6e4,1e3];for(let a=0;a<o.length;a++)Math.floor(e/o[a])>0&&(t[i[a]]=Math.floor(e/o[a]),e%=o[a]);return 0===Object.keys(t).length&&(t=e>0?{MS:e}:{NODATA:1}),t}_msecToSec(e){return Number(e/1e3).toFixed(0)}_bytesToMB(e){return Number(e/1048576).toFixed(1)}_exportToCSV(){const e=this.shadowRoot.querySelector("#export-file-name");if(!e.validity.valid)return;const t=[];let i;i=globalThis.backendaiclient.supports("avoid-hol-blocking")?["RUNNING","RESTARTING","TERMINATING","PENDING","SCHEDULED","PREPARING","PULLING","TERMINATED","CANCELLED","ERROR"]:["RUNNING","RESTARTING","TERMINATING","PENDING","PREPARING","PULLING","TERMINATED","CANCELLED","ERROR"],globalThis.backendaiclient.supports("detailed-session-states")&&(i=i.join(","));const o=["id","name","image","created_at","terminated_at","status","status_info","access_key"];"SESSION"===this._connectionMode&&o.push("user_email"),globalThis.backendaiclient.is_superadmin?o.push("containers {container_id agent occupied_slots live_stat last_stat}"):o.push("containers {container_id occupied_slots live_stat last_stat}");const a=globalThis.backendaiclient.current_group_id();globalThis.backendaiclient.computeSession.listAll(o,i,this.filterAccessKey,100,0,a).then((i=>{const o=i;if(0===o.length)return this.notification.text=c("session.NoSession"),this.notification.show(),void this.exportToCsvDialog.hide();o.forEach((e=>{const i={};if(i.id=e.id,i.name=e.name,i.image=e.image.split("/")[2]||e.image.split("/")[1],i.status=e.status,i.status_info=e.status_info,i.access_key=e.access_key,i.created_at=e.created_at,i.terminated_at=e.terminated_at,e.containers&&e.containers.length>0){const t=e.containers[0];i.container_id=t.container_id;const o=t.occupied_slots?JSON.parse(t.occupied_slots):null;o&&(i.cpu_slot=parseInt(o.cpu),i.mem_slot=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(o.mem,"g")).toFixed(2),o["cuda.shares"]&&(i.cuda_shares=o["cuda.shares"]),o["cuda.device"]&&(i.cuda_device=o["cuda.device"]),o["tpu.device"]&&(i.tpu_device=o["tpu.device"]),o["rocm.device"]&&(i.rocm_device=o["rocm.device"]));const a=t.live_stat?JSON.parse(t.live_stat):null;a&&(a.cpu_used&&a.cpu_used.current?i.cpu_used_time=this._automaticScaledTime(a.cpu_used.current):i.cpu_used_time=0,a.io_read?i.io_read_bytes_mb=this._bytesToMB(a.io_read.current):i.io_read_bytes_mb=0,a.io_write?i.io_write_bytes_mb=this._bytesToMB(a.io_write.current):i.io_write_bytes_mb=0),t.agent&&(i.agent=t.agent)}t.push(i)})),h.exportToCsv(e.value,t),this.notification.text=c("session.DownloadingCSVFile"),this.notification.show(),this.exportToCsvDialog.hide()}))}render(){return l`
      <lablup-activity-panel title="${r("summary.ResourceStatistics")}" elevation="1" autowidth>
        <div slot="message">
          <backend-ai-resource-monitor location="session" id="resource-monitor" ?active="${!0===this.active}"></backend-ai-resource-monitor>
        </div>
      </lablup-activity-panel>
      <lablup-activity-panel title="${r("summary.Announcement")}" elevation="1" horizontalsize="2x" style="display:none;">
      </lablup-activity-panel>
      <lablup-activity-panel elevation="1" autowidth narrow noheader>
        <div slot="message">
          <h3 class="tab horizontal center layout" style="margin-top:0;margin-bottom:0;">
            <div class="scroll hide-scrollbar">
              <div class="horizontal layout flex start-justified" style="width:70%;">
                <mwc-tab-bar>
                  <mwc-tab title="running" label="${r("session.Running")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
                  <mwc-tab title="interactive" label="${r("session.Interactive")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
                  <mwc-tab title="batch" label="${r("session.Batch")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
                  <mwc-tab title="finished" label="${r("session.Finished")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
                  <mwc-tab title="others" label="${r("session.Others")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
                </mwc-tab-bar>
              </div>
            </div>
            ${this.is_admin?l`
              <div style="position: relative;">
                <mwc-icon-button id="dropdown-menu-button" icon="more_horiz" raised
                                  @click="${e=>this._toggleDropdown(e)}"></mwc-icon-button>
                  <mwc-menu id="dropdown-menu">
                    <mwc-list-item>
                      <a class="horizontal layout start center" @click="${()=>this._openExportToCsvDialog()}">
                        <mwc-icon style="color:#242424;padding-right:10px;">get_app</mwc-icon>
                        ${r("session.exportCSV")}
                      </a>
                    </mwc-list-item>
                  </mwc-menu>
                </div>
              `:l``}
            <div class="horizontal layout flex end-justified" style="margin-right:20px;">
              <backend-ai-session-launcher location="session" id="session-launcher" ?active="${!0===this.active}"></backend-ai-session-launcher>
            </div>
          </h3>
          <div id="running-lists" class="tab-content">
            <backend-ai-session-list id="running-jobs" condition="running"></backend-ai-session-list>
          </div>
          <div id="interactive-lists" class="tab-content" style="display:none;">
            <backend-ai-session-list id="interactive-jobs" condition="interactive"></backend-ai-session-list>
          </div>
          <div id="batch-lists" class="tab-content" style="display:none;">
            <backend-ai-session-list id="batch-jobs" condition="batch"></backend-ai-session-list>
          </div>
          <div id="finished-lists" class="tab-content" style="display:none;">
            <backend-ai-session-list id="finished-jobs" condition="finished"></backend-ai-session-list>
          </div>
          <div id="others-lists" class="tab-content" style="display:none;">
            <backend-ai-session-list id="others-jobs" condition="others"></backend-ai-session-list>
          </div>
        </div>
      </lablup-activity-panel>
      <backend-ai-dialog id="export-to-csv" fixed backdrop>
        <span slot="title">${r("session.ExportSessionListToCSVFile")}</span>
        <div slot="content">
          <mwc-textfield id="export-file-name" label="File name"
                          validationMessage="${r("data.explorer.ValueRequired")}"
                          value="${"session_"+this._defaultFileName}" required
                          style="margin-bottom:10px;"></mwc-textfield>
          <div class="horizontal center layout" style="display:none;">
            <wl-textfield id="date-from" label="From" type="date" style="margin-right:10px;"
                          value="${this._getFirstDateOfMonth()}" required
                          @change="${this._validateDateRange}">
              <wl-icon slot="before">date_range</wl-icon>
            </wl-textfield>
            <wl-textfield id="date-to" label="To" type="date"
                          value="${(new Date).toISOString().substring(0,10)}" required
                          @change="${this._validateDateRange}">
              <wl-icon slot="before">date_range</wl-icon>
            </wl-textfield>
          </div>
          <div class="horizontal center layout" style="display:none;">
            <wl-checkbox id="export-csv-checkbox" @change="${e=>this._toggleDialogCheckbox(e)}"></wl-checkbox>
            <wl-label class="unlimited" for="export-csv-checkbox">Export All-time data</wl-label>
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button unelevated
                      fullwidth
                      icon="get_app"
                      label="${r("session.ExportCSVFile")}"
                      @click="${this._exportToCSV}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}};d([b({type:String})],u.prototype,"_status",void 0),d([b({type:Boolean})],u.prototype,"active",void 0),d([b({type:Object})],u.prototype,"_lists",void 0),d([b({type:Boolean})],u.prototype,"is_admin",void 0),d([b({type:String})],u.prototype,"filterAccessKey",void 0),d([b({type:String})],u.prototype,"_connectionMode",void 0),d([b({type:Object})],u.prototype,"_defaultFileName",void 0),d([b({type:Object})],u.prototype,"exportToCsvDialog",void 0),u=d([p("backend-ai-session-view")],u);var m=u;export{m as default};
