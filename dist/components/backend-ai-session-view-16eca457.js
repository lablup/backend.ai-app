import{k as t,I as e,j as i,ac as o,l as s,a,h as n,_ as r,p as c,c as d}from"./backend-ai-console-e6443854.js";import{B as l}from"./backend-ai-page-242e410a.js";import"./lablup-loading-indicator-cb732ee9.js";import"./iron-resizable-behavior-5e01cf94.js";import"./vaadin-progress-bar-9a520a03.js";import"./paper-progress-ec21e8aa.js";import"./radio-behavior-2df89a14.js";import"./backend-ai-dropdown-menu-9fc932ba.js";import"./shadow-da85ec82.js";import"./paper-dropdown-menu-ab102927.js";import"./index-0c1b2dd1.js";import"./index-58c244d1.js";import"./backend-ai-resource-monitor-c5b7106b.js";import"./form-element-cd33b7f7.js";import"./av-icons-3f38348d.js";import"./paper-dialog-scrollable-df1fc4cb.js";import"./vaadin-grid-42eb636a.js";import"./vaadin-grid-selection-column-34a9e995.js";import"./vaadin-grid-sorter-6f6b93ec.js";import"./vaadin-grid-sort-column-edc73228.js";import"./mwc-line-ripple-directive-01d4dee8.js";import"./json_to_csv-8c5b6329.js";import"./backend-ai-session-list-a293b045.js";import"./index-8c06f33b.js";import"./backend-ai-indicator-16350b03.js";import"./index-85964420.js";import"./mwc-menu-1d6343c8.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let b=class extends l{constructor(){super(),this._status="inactive",this.active=!0,this._lists=Object(),this.is_admin=!1,this.active=!1,this._status="inactive"}static get styles(){return[t,e,i,o,s,a`
        wl-card h3.tab {
          padding-top: 0;
          padding-bottom: 0;
          padding-left: 0;
        }

        wl-tab-group {
          --tab-group-indicator-bg: var(--paper-red-500);
        }

        wl-tab-group wl-divider {
          display: none;
        }

        wl-tab {
          --tab-color: #666666;
          --tab-color-hover: #222222;
          --tab-color-hover-filled: #222222;
          --tab-color-active: #222222;
          --tab-color-active-hover: #222222;
          --tab-color-active-filled: #cccccc;
          --tab-bg-active: var(--paper-red-50);
          --tab-bg-filled: var(--paper-red-50);
          --tab-bg-active-hover: var(--paper-red-100);
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
      `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list"),document.addEventListener("backend-ai-session-list-refreshed",()=>{this.shadowRoot.querySelector("#running-jobs").refreshList(!0,!1)}),void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.is_admin=window.backendaiclient.is_admin},!0):this.is_admin=window.backendaiclient.is_admin}async _viewStateChanged(t){if(await this.updateComplete,!1!==t)this.shadowRoot.querySelector("#resource-monitor").setAttribute("active",!0),this.shadowRoot.querySelector("#running-jobs").setAttribute("active",!0),this._status="active";else{this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active"),this._status="inactive";for(let t=0;t<this._lists.length;t++)this._lists[t].removeAttribute("active")}}_exportToCSV(){console.log("Downloading CSV File...");let t=new CustomEvent("backend-ai-csv-file-export-session",{detail:window.backendaiclient.current_group});document.dispatchEvent(t)}_showTab(t){let e=this.shadowRoot.querySelectorAll(".tab-content");for(let t=0;t<e.length;t++)e[t].style.display="none";this.shadowRoot.querySelector("#"+t.value+"-lists").style.display="block";for(let t=0;t<this._lists.length;t++)this._lists[t].removeAttribute("active");this.shadowRoot.querySelector("#"+t.value+"-jobs").setAttribute("active",!0)}_toggleDropdown(){let t=this.shadowRoot.querySelector("#dropdown-menu");t.open=!t.open}render(){return n`
      <wl-card class="item">
        <h3 class="tab horizontal center layout">
          <wl-tab-group>
            <wl-tab value="running" checked @click="${t=>this._showTab(t.target)}">Running</wl-tab>
            <wl-tab value="finished" @click="${t=>this._showTab(t.target)}">Finished</wl-tab>
            <wl-tab value="others" @click="${t=>this._showTab(t.target)}">Others</wl-tab>
          </wl-tab-group>
          <div class="flex"></div>
          <backend-ai-resource-monitor location="session" id="resource-monitor" ?active="${!0===this.active}"></backend-ai-resource-monitor>
          ${this.is_admin?n`
              <mwc-icon-button id="dropdown-menu-button" icon="more_horiz" raised
                               @click="${this._toggleDropdown}">
                <mwc-menu id="dropdown-menu" absolute x="-50" y="25">
                  <mwc-list-item>
                    <a class="horizontal layout start center" @click="${this._exportToCSV}">
                      <mwc-icon style="color:#242424;padding-right:10px;">get_app</mwc-icon>
                      export CSV
                    </a>
                  </mwc-list-item>
                </mwc-menu>
              </mwc-icon-button>
            `:n``}
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

      </wl-card>
`}};r([c({type:String})],b.prototype,"_status",void 0),r([c({type:Boolean})],b.prototype,"active",void 0),r([c({type:Object})],b.prototype,"_lists",void 0),r([c({type:Boolean})],b.prototype,"is_admin",void 0),b=r([d("backend-ai-session-view")],b);var p=b;export default p;
