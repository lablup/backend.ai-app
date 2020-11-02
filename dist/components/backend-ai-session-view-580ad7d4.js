import{B as t,d as e,I as i,a as s,n as a,e as o,b as n,h as r,t as l,_ as c,p as d,c as b}from"./backend-ai-console-125e4b92.js";import"./unsafe-html-b5824a3e.js";import"./lablup-progress-bar-a78f1e50.js";import"./lablup-activity-panel-446742d1.js";import"./mwc-slider-87474dc3.js";import"./backend-ai-session-launcher-fd80b4db.js";import"./radio-behavior-4c6affa7.js";import"./expansion-9a7a977f.js";import"./vaadin-grid-sorter-f0db9e83.js";import"./vaadin-grid-selection-column-056a9949.js";import"./vaadin-grid-sort-column-cab34161.js";import"./iconset-a5679453.js";import"./backend-ai-session-list-2d90d7ae.js";import"./json_to_csv-f333d031.js";import"./mwc-tab-bar-bb95bcb1.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let u=class extends t{constructor(){super(),this._status="inactive",this.active=!0,this._lists=Object(),this.is_admin=!1,this.active=!1,this._status="inactive"}static get styles(){return[e,i,s,a,o,n`
        h3.tab {
          background-color: var(--general-tabbar-background-color);
          border-radius: 5px 5px 0px 0px;
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

        mwc-menu {
          --mdc-theme-surface: #f1f1f1;
          --mdc-menu-item-height : auto;
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

        backend-ai-resource-monitor {
          margin: 10px 50px;
        }

        backend-ai-session-launcher#session-launcher {
          --component-width: 100px;
          --component-shadow-color: transparent;
        }

      `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list"),document.addEventListener("backend-ai-session-list-refreshed",(()=>{this.shadowRoot.querySelector("#running-jobs").refreshList(!0,!1)})),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_admin=globalThis.backendaiclient.is_admin}),!0):this.is_admin=globalThis.backendaiclient.is_admin}async _viewStateChanged(t){if(await this.updateComplete,!1!==t)this.shadowRoot.querySelector("#resource-monitor").setAttribute("active",!0),this.shadowRoot.querySelector("#running-jobs").setAttribute("active",!0),this._status="active";else{this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active"),this._status="inactive";for(let t=0;t<this._lists.length;t++)this._lists[t].removeAttribute("active")}}_exportToCSV(){console.log("Downloading CSV File...");let t=new CustomEvent("backend-ai-csv-file-export-session",{detail:globalThis.backendaiclient.current_group});document.dispatchEvent(t)}_showTab(t){let e=this.shadowRoot.querySelectorAll(".tab-content");for(let t=0;t<e.length;t++)e[t].style.display="none";this.shadowRoot.querySelector("#"+t.title+"-lists").style.display="block";for(let t=0;t<this._lists.length;t++)this._lists[t].removeAttribute("active");this.shadowRoot.querySelector("#"+t.title+"-jobs").setAttribute("active",!0)}_toggleDropdown(){let t=this.shadowRoot.querySelector("#dropdown-menu");t.open=!t.open}render(){return r`
      <div class="horizontal layout wrap">
        <lablup-activity-panel title="${l("summary.ResourceStatistics")}" elevation="1" autowidth>
          <div slot="message">
            <backend-ai-resource-monitor location="session" id="resource-monitor" ?active="${!0===this.active}"></backend-ai-resource-monitor>
          </div>
        </lablup-activity-panel>
        <lablup-activity-panel title="${l("summary.Announcement")}" elevation="1" horizontalsize="2x" style="display:none;">
        </lablup-activity-panel>
      </div>
      <lablup-activity-panel elevation="1" autowidth narrow noheader>
        <div slot="message">
          <h3 class="tab horizontal center layout">
            <div class="horizontal layout flex start-justified">
            <mwc-tab-bar>
              <mwc-tab title="running" label="${l("session.Running")}" @click="${t=>this._showTab(t.target)}"></mwc-tab>
              <mwc-tab title="finished" label="${l("session.Finished")}" @click="${t=>this._showTab(t.target)}"></mwc-tab>
              <mwc-tab title="others" label="${l("session.Others")}" @click="${t=>this._showTab(t.target)}"></mwc-tab>
            </mwc-tab-bar>
            ${this.is_admin?r`
              <mwc-icon-button id="dropdown-menu-button" icon="more_horiz" raised
                                @click="${this._toggleDropdown}">
                <mwc-menu id="dropdown-menu" absolute x="-50" y="25">
                  <mwc-list-item>
                    <a class="horizontal layout start center" @click="${this._exportToCSV}">
                      <mwc-icon style="color:#242424;padding-right:10px;">get_app</mwc-icon>
                      ${l("session.exportCSV")}
                    </a>
                  </mwc-list-item>
                </mwc-menu>
              </mwc-icon-button>
              `:r``}
            </div>
            <div class="horizontal layout flex end-justified" style="margin-right:20px;">
            <backend-ai-session-launcher location="session" id="session-launcher" ?active="${!0===this.active}"></backend-ai-session-launcher>
            </div>
          </h3>
          <div id="running-lists" class="tab-content">
            <backend-ai-session-list id="running-jobs" condition="running"></backend-ai-session-list>
          </div>
          <div id="finished-lists" class="tab-content" style="display:none;">
            <backend-ai-session-list id="finished-jobs" condition="finished"></backend-ai-session-list>
          </div>
          <div id="others-lists" class="tab-content" style="display:none;">
            <backend-ai-session-list id="others-jobs" condition="others"></backend-ai-session-list>
          </div>
        </div>
      </lablup-activity-panel>
`}};c([d({type:String})],u.prototype,"_status",void 0),c([d({type:Boolean})],u.prototype,"active",void 0),c([d({type:Object})],u.prototype,"_lists",void 0),c([d({type:Boolean})],u.prototype,"is_admin",void 0),u=c([b("backend-ai-session-view")],u);var h=u;export default h;
