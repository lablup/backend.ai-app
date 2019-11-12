import{B as t,I as i,f as e,g as s,i as a,c as o,h as r,b as n,p as d,e as c}from"./iron-flex-layout-classes-c9b3b8db.js";import"./switch-behavior-5039bbc7.js";import"./iron-icon-872ea0d4.js";import"./paper-input-b75cedd7.js";import"./paper-item-c4524fd1.js";import"./mwc-icon-button-48f111a2.js";import"./lablup-shields-405580b0.js";import"./iron-icons-bb1ceb94.js";import"./hardware-icons-ceef21ab.js";import"./vaadin-icons-b43db12f.js";import"./input-behavior-22f7c31e.js";import"./index-0bbfdd62.js";import"./index-41b64f0a.js";import"./index-35aa6a53.js";import"./backend-ai-painkiller-801f57d6.js";import"./index-e2571378.js";import"./index-a2a59eb1.js";import{B as l}from"./backend-ai-page-4ba904fc.js";import"./lablup-loading-indicator-4b4f282b.js";import"./iron-resizable-behavior-83d8597e.js";import"./vaadin-progress-bar-eaab1337.js";import"./paper-progress-8255aecb.js";import"./radio-behavior-1a6615fe.js";import"./backend-ai-dropdown-menu-a825a742.js";import"./paper-dropdown-menu-b346b9e3.js";import"./index-2f4ff4f4.js";import"./index-65211c35.js";import"./backend-ai-resource-monitor-018e34f9.js";import"./av-icons-5dcd0c56.js";import"./paper-dialog-f3f5b019.js";import"./backend-ai-session-list-11966f7a.js";import"./vaadin-grid-374809cd.js";import"./vaadin-grid-selection-column-380efa68.js";import"./vaadin-grid-sorter-eb2973de.js";import"./vaadin-grid-sort-column-d88bd222.js";import"./index-6835b5eb.js";import"./backend-ai-indicator-212fa2b3.js";import"./index-d4100e9c.js";let b=class extends l{constructor(){super(),this._status="inactive",this.active=!0,this._lists=Object(),this.active=!1,this._status="inactive"}static get styles(){return[t,i,e,s,a,o`
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
      `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list"),document.addEventListener("backend-ai-session-list-refreshed",()=>{this.shadowRoot.querySelector("#running-jobs").refreshList(!0,!1)})}async _viewStateChanged(t){if(await this.updateComplete,!1!==t)this.shadowRoot.querySelector("#resource-monitor").setAttribute("active",!0),this.shadowRoot.querySelector("#running-jobs").setAttribute("active",!0),this._status="active";else{this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active"),this._status="inactive";for(let t=0;t<this._lists.length;t++)this._lists[t].removeAttribute("active")}}_showTab(t){let i=this.shadowRoot.querySelectorAll(".tab-content");for(let t=0;t<i.length;t++)i[t].style.display="none";this.shadowRoot.querySelector("#"+t.value+"-lists").style.display="block";for(let t=0;t<this._lists.length;t++)this._lists[t].removeAttribute("active");this.shadowRoot.querySelector("#"+t.value+"-jobs").setAttribute("active",!0)}render(){return r`
      <wl-card class="item">
        <h3 class="tab horizontal center layout">
          <wl-tab-group>
            <wl-tab value="running" checked @click="${t=>this._showTab(t.target)}">Running</wl-tab>
            <wl-tab value="finished" @click="${t=>this._showTab(t.target)}">Finished</wl-tab>
            <wl-tab value="others" @click="${t=>this._showTab(t.target)}">Others</wl-tab>
          </wl-tab-group>
          <div class="flex"></div>
          <backend-ai-resource-monitor location="session" id="resource-monitor" ?active="${!0===this.active}"></backend-ai-resource-monitor>
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
`}};n([d({type:String})],b.prototype,"_status",void 0),n([d({type:Boolean})],b.prototype,"active",void 0),n([d({type:Object})],b.prototype,"_lists",void 0);var p=b=n([c("backend-ai-session-view")],b);export default p;
