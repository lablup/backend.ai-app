import{B as t,I as i,e,f as s,g as a,c as o,h as r,b as n,p as d,d as c}from"./iron-flex-layout-classes-e73207af.js";import"./switch-behavior-6b9be824.js";import"./iron-icon-83da4dc9.js";import"./paper-input-b9bbce80.js";import"./paper-item-a99a4887.js";import"./mwc-icon-button-60bda5c3.js";import"./lablup-shields-33a271c9.js";import"./iron-icons-1704f69f.js";import"./hardware-icons-4ff84535.js";import"./vaadin-icons-15fded47.js";import"./input-behavior-c84704b8.js";import"./index-3d3c7342.js";import"./index-b182735e.js";import"./resize-8fcbd74f.js";import"./index-b88a2f7c.js";import"./index-e20f0cd7.js";import"./index-0fb3f3f8.js";import"./backend-ai-painkiller-9e69a028.js";import"./index-ebcb6479.js";import{B as l}from"./backend-ai-page-7318a5a0.js";import"./lablup-loading-indicator-c221f711.js";import"./iron-resizable-behavior-b33c26c2.js";import"./vaadin-progress-bar-b6e8a4ee.js";import"./paper-progress-2a37a5a2.js";import"./radio-behavior-59c4aee8.js";import"./backend-ai-dropdown-menu-7aeeb5f1.js";import"./paper-dropdown-menu-85cc67f9.js";import"./index-1ee6c2dd.js";import"./index-9e9d1ef8.js";import"./backend-ai-resource-monitor-7b753a24.js";import"./av-icons-9e98aa35.js";import"./paper-dialog-69568d49.js";import"./backend-ai-session-list-ad338413.js";import"./vaadin-grid-ad3498d9.js";import"./vaadin-grid-selection-column-46d7fe76.js";import"./vaadin-grid-sorter-3d8511d6.js";import"./vaadin-grid-sort-column-1e1045a2.js";import"./index-e4e53168.js";import"./backend-ai-indicator-e67ca547.js";import"./index-b409a50a.js";let p=class extends l{constructor(){super(),this._status="inactive",this.active=!0,this._lists=Object(),this.active=!1,this._status="inactive"}static get styles(){return[t,i,e,s,a,o`
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
`}};n([d({type:String})],p.prototype,"_status",void 0),n([d({type:Boolean})],p.prototype,"active",void 0),n([d({type:Object})],p.prototype,"_lists",void 0);var b=p=n([c("backend-ai-session-view")],p);export default b;
