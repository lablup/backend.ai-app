import{_ as t,p as e,c as i,B as s,d as o,I as a,a as n,z as r,e as c,b as l,h as d,t as b}from"./backend-ai-console-cb2f630c.js";import"./unsafe-html-1bfa332b.js";import"./lablup-loading-spinner-90acdc8e.js";import"./mwc-linear-progress-890eec01.js";import"./iron-resizable-behavior-c7edc396.js";import"./vaadin-grid-17f889e8.js";import"./paper-dropdown-menu-53ae0330.js";import"./iron-iconset-svg-19993a4c.js";import"./paper-item-9eb3436d.js";import"./radio-behavior-c850123c.js";import"./expansion-a6d81da8.js";import"./label-bab7d4b5.js";import"./backend-ai-resource-monitor-d375e203.js";import"./input-behavior-187302d3.js";import"./select-4a3d7f72.js";import"./textfield-639e9ceb.js";import"./vaadin-grid-selection-column-2fac0eb8.js";import"./vaadin-grid-sorter-43e0ee00.js";import"./vaadin-grid-sort-column-50a14733.js";import"./iconset-00aad4a4.js";import"./vaadin-progress-bar-212543e7.js";import"./backend-ai-session-list-dd82cffd.js";import"./json_to_csv-0a6876b9.js";import"./tab-group-5aa67e4c.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let p=(()=>{let p=class extends s{constructor(){super(),this._status="inactive",this.active=!0,this._lists=Object(),this.is_admin=!1,this.active=!1,this._status="inactive"}static get styles(){return[o,a,n,r,c,l`
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
      `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list"),document.addEventListener("backend-ai-session-list-refreshed",()=>{this.shadowRoot.querySelector("#running-jobs").refreshList(!0,!1)}),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.is_admin=globalThis.backendaiclient.is_admin},!0):this.is_admin=globalThis.backendaiclient.is_admin}async _viewStateChanged(t){if(await this.updateComplete,!1!==t)this.shadowRoot.querySelector("#resource-monitor").setAttribute("active",!0),this.shadowRoot.querySelector("#running-jobs").setAttribute("active",!0),this._status="active";else{this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active"),this._status="inactive";for(let t=0;t<this._lists.length;t++)this._lists[t].removeAttribute("active")}}_exportToCSV(){console.log("Downloading CSV File...");let t=new CustomEvent("backend-ai-csv-file-export-session",{detail:globalThis.backendaiclient.current_group});document.dispatchEvent(t)}_showTab(t){let e=this.shadowRoot.querySelectorAll(".tab-content");for(let t=0;t<e.length;t++)e[t].style.display="none";this.shadowRoot.querySelector("#"+t.value+"-lists").style.display="block";for(let t=0;t<this._lists.length;t++)this._lists[t].removeAttribute("active");this.shadowRoot.querySelector("#"+t.value+"-jobs").setAttribute("active",!0)}_toggleDropdown(){let t=this.shadowRoot.querySelector("#dropdown-menu");t.open=!t.open}render(){return d`
      <wl-card class="item">
        <h3 class="tab horizontal center layout">
          <wl-tab-group>
            <wl-tab value="running" checked @click="${t=>this._showTab(t.target)}">${b("session.Running")}</wl-tab>
            <wl-tab value="finished" @click="${t=>this._showTab(t.target)}">${b("session.Finished")}</wl-tab>
            <wl-tab value="others" @click="${t=>this._showTab(t.target)}">${b("session.Others")}</wl-tab>
          </wl-tab-group>
          <div class="flex"></div>
          <backend-ai-resource-monitor location="session" id="resource-monitor" ?active="${!0===this.active}"></backend-ai-resource-monitor>
          ${this.is_admin?d`
              <mwc-icon-button id="dropdown-menu-button" icon="more_horiz" raised
                               @click="${this._toggleDropdown}">
                <mwc-menu id="dropdown-menu" absolute x="-50" y="25">
                  <mwc-list-item>
                    <a class="horizontal layout start center" @click="${this._exportToCSV}">
                      <mwc-icon style="color:#242424;padding-right:10px;">get_app</mwc-icon>
                      ${b("session.exportCSV")}
                    </a>
                  </mwc-list-item>
                </mwc-menu>
              </mwc-icon-button>
            `:d``}
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
`}};return t([e({type:String})],p.prototype,"_status",void 0),t([e({type:Boolean})],p.prototype,"active",void 0),t([e({type:Object})],p.prototype,"_lists",void 0),t([e({type:Boolean})],p.prototype,"is_admin",void 0),p=t([i("backend-ai-session-view")],p),p})();export default p;
