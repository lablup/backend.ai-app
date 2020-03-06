import{k as t,l as e,I as i,j as o,a9 as s,m as a,a as n,h as r,_ as c,p as d,c as l}from"./backend-ai-console-ab7f3e11.js";import"./lablup-loading-indicator-de115c53.js";import"./iron-resizable-behavior-688f52d4.js";import"./vaadin-progress-bar-af5576eb.js";import"./paper-progress-280ac00d.js";import"./radio-behavior-1cbd0f8e.js";import"./paper-icon-button-32abd987.js";import"./paper-dropdown-menu-e41dd481.js";import"./paper-slider-78b53a2c.js";import"./shadow-83388c34.js";import"./mwc-select-490809e7.js";import"./backend-ai-resource-monitor-aa7e824f.js";import"./index-ba3513c4.js";import"./index-104ed7f5.js";import"./av-icons-97d47f39.js";import"./paper-dialog-scrollable-20d332c4.js";import"./vaadin-grid-d044369a.js";import"./vaadin-grid-selection-column-a8a1d9ff.js";import"./vaadin-grid-sorter-e6a2a09c.js";import"./vaadin-grid-sort-column-6222e7c6.js";import"./backend-ai-session-list-13e9559a.js";import"./index-41c821eb.js";import"./backend-ai-indicator-be7ef06f.js";import"./json_to_csv-95c4522d.js";import"./index-a503f1e5.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let p=class extends t{constructor(){super(),this._status="inactive",this.active=!0,this._lists=Object(),this.is_admin=!1,this.active=!1,this._status="inactive"}static get styles(){return[e,i,o,s,a,n`
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
      `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list"),document.addEventListener("backend-ai-session-list-refreshed",()=>{this.shadowRoot.querySelector("#running-jobs").refreshList(!0,!1)}),void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.is_admin=window.backendaiclient.is_admin},!0):this.is_admin=window.backendaiclient.is_admin}async _viewStateChanged(t){if(await this.updateComplete,!1!==t)this.shadowRoot.querySelector("#resource-monitor").setAttribute("active",!0),this.shadowRoot.querySelector("#running-jobs").setAttribute("active",!0),this._status="active";else{this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active"),this._status="inactive";for(let t=0;t<this._lists.length;t++)this._lists[t].removeAttribute("active")}}_exportToCSV(){console.log("Downloading CSV File...");let t=new CustomEvent("backend-ai-csv-file-export-session",{detail:window.backendaiclient.current_group});document.dispatchEvent(t)}_showTab(t){let e=this.shadowRoot.querySelectorAll(".tab-content");for(let t=0;t<e.length;t++)e[t].style.display="none";this.shadowRoot.querySelector("#"+t.value+"-lists").style.display="block";for(let t=0;t<this._lists.length;t++)this._lists[t].removeAttribute("active");this.shadowRoot.querySelector("#"+t.value+"-jobs").setAttribute("active",!0)}_toggleDropdown(){let t=this.shadowRoot.querySelector("#dropdown-menu");t.open=!t.open}render(){return r`
      <wl-card class="item">
        <h3 class="tab horizontal center layout">
          <wl-tab-group>
            <wl-tab value="running" checked @click="${t=>this._showTab(t.target)}">Running</wl-tab>
            <wl-tab value="finished" @click="${t=>this._showTab(t.target)}">Finished</wl-tab>
            <wl-tab value="others" @click="${t=>this._showTab(t.target)}">Others</wl-tab>
          </wl-tab-group>
          <div class="flex"></div>
          <backend-ai-resource-monitor location="session" id="resource-monitor" ?active="${!0===this.active}"></backend-ai-resource-monitor>
          ${this.is_admin?r`
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
            `:r``}
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
`}};c([d({type:String})],p.prototype,"_status",void 0),c([d({type:Boolean})],p.prototype,"active",void 0),c([d({type:Object})],p.prototype,"_lists",void 0),c([d({type:Boolean})],p.prototype,"is_admin",void 0),p=c([l("backend-ai-session-view")],p);var b=p;export default b;
