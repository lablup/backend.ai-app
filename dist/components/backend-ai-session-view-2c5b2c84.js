import{k as t,I as i,j as e,ac as s,l as a,a as o,h as r,_ as n,p as c,c as d}from"./backend-ai-console-189a2f74.js";import{B as l}from"./backend-ai-page-8a4df295.js";import"./lablup-loading-indicator-a1212a3f.js";import"./iron-resizable-behavior-0971f60c.js";import"./vaadin-progress-bar-683c9638.js";import"./paper-progress-1a7983eb.js";import"./radio-behavior-476019ac.js";import"./backend-ai-dropdown-menu-ba495709.js";import"./shadow-bea23c22.js";import"./paper-dropdown-menu-57dc0ec1.js";import"./index-0093599c.js";import"./index-e13f77b7.js";import"./backend-ai-resource-monitor-43497a9e.js";import"./form-element-3ebfa08c.js";import"./av-icons-1a9a2927.js";import"./paper-dialog-adc04ecb.js";import"./paper-dialog-scrollable-22470fc4.js";import"./vaadin-grid-58a76692.js";import"./vaadin-grid-selection-column-e058e21a.js";import"./vaadin-grid-sorter-963873ea.js";import"./vaadin-grid-sort-column-b35bf512.js";import"./json_to_csv-17eed10b.js";import"./backend-ai-session-list-1d7b5d84.js";import"./index-c46680ad.js";import"./backend-ai-indicator-f5c2dff2.js";import"./index-258c3df3.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let b=class extends l{constructor(){super(),this._status="inactive",this.active=!0,this._lists=Object(),this.is_admin=!1,this.active=!1,this._status="inactive"}static get styles(){return[t,i,e,s,a,o`
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

      `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list"),document.addEventListener("backend-ai-session-list-refreshed",()=>{this.shadowRoot.querySelector("#running-jobs").refreshList(!0,!1)}),void 0!==window.backendaiclient&&null!=window.backendaiclient&&void 0!==window.backendaiclient.is_admin&&!0===window.backendaiclient.is_admin?this.is_admin=!0:this.is_admin=!1}async _viewStateChanged(t){if(await this.updateComplete,!1!==t)this.shadowRoot.querySelector("#resource-monitor").setAttribute("active",!0),this.shadowRoot.querySelector("#running-jobs").setAttribute("active",!0),this._status="active";else{this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active"),this._status="inactive";for(let t=0;t<this._lists.length;t++)this._lists[t].removeAttribute("active")}}_exportToCSV(){console.log("Downloading CSV File...");let t=new CustomEvent("backend-ai-csv-file-export-session",{detail:window.backendaiclient.current_group});document.dispatchEvent(t)}_showTab(t){let i=this.shadowRoot.querySelectorAll(".tab-content");for(let t=0;t<i.length;t++)i[t].style.display="none";this.shadowRoot.querySelector("#"+t.value+"-lists").style.display="block";for(let t=0;t<this._lists.length;t++)this._lists[t].removeAttribute("active");this.shadowRoot.querySelector("#"+t.value+"-jobs").setAttribute("active",!0)}render(){return r`
      <wl-card class="item">
        <h3 class="tab horizontal center layout">
          <wl-tab-group>
            <wl-tab value="running" checked @click="${t=>this._showTab(t.target)}">Running</wl-tab>
            <wl-tab value="finished" @click="${t=>this._showTab(t.target)}">Finished</wl-tab>
            <wl-tab value="others" @click="${t=>this._showTab(t.target)}">Others</wl-tab>
          </wl-tab-group>
          <div class="flex"></div>
          <backend-ai-resource-monitor location="session" id="resource-monitor" ?active="${!0===this.active}"></backend-ai-resource-monitor>
          ${this.is_admin?r`<wl-button class="fg teal" id="export-csv" outlined @click="${this._exportToCSV}" style="margin-left: 10px;">
            <wl-icon>get_app</wl-icon>
            export CSV
          </wl-button>`:r``}
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
`}};n([c({type:String})],b.prototype,"_status",void 0),n([c({type:Boolean})],b.prototype,"active",void 0),n([c({type:Object})],b.prototype,"_lists",void 0),n([c({type:Boolean})],b.prototype,"is_admin",void 0),b=n([d("backend-ai-session-view")],b);var p=b;export default p;
