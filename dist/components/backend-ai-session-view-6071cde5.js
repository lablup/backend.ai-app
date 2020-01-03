import{B as t,I as i,f as e,g as s,i as a,c as o,h as r,b as n,p as c,e as d}from"./iron-flex-layout-classes-c9b3b8db.js";import"./switch-behavior-0afc6c5f.js";import"./iron-icon-6ebc5e38.js";import"./paper-input-8c401120.js";import"./paper-item-f17203a2.js";import"./mwc-icon-button-9cca9f8c.js";import"./lablup-shields-5d73cdab.js";import"./iron-icons-a9a73459.js";import"./hardware-icons-fa4d541e.js";import"./vaadin-icons-f8826d26.js";import"./input-behavior-22f7c31e.js";import"./index-0bbfdd62.js";import"./index-41b64f0a.js";import"./resize-b38d87a6.js";import"./backend-ai-painkiller-d4aac244.js";import"./index-e2571378.js";import"./index-ca42e7f9.js";import{B as l}from"./backend-ai-page-4ba904fc.js";import"./lablup-loading-indicator-4b4f282b.js";import"./iron-resizable-behavior-d5fcb40f.js";import"./vaadin-progress-bar-86143153.js";import"./paper-progress-261cd2b6.js";import"./radio-behavior-815c3cf2.js";import"./backend-ai-dropdown-menu-e87585b2.js";import"./paper-dropdown-menu-8cca9eb0.js";import"./index-65d3c66e.js";import"./index-65211c35.js";import"./backend-ai-resource-monitor-8ab6eac0.js";import"./av-icons-84cd112f.js";import"./paper-dialog-040efc33.js";import"./backend-ai-session-list-a5921eb4.js";import"./vaadin-grid-d9d6f695.js";import"./vaadin-grid-selection-column-c829908f.js";import"./vaadin-grid-sorter-5c13235e.js";import"./vaadin-grid-sort-column-7a3db676.js";import"./index-6835b5eb.js";import"./backend-ai-indicator-fd375b9d.js";import"./index-42a6ea5e.js";let b=class extends l{constructor(){super(),this._status="inactive",this.active=!0,this._lists=Object(),this.active=!1,this._status="inactive"}static get styles(){return[t,i,e,s,a,o`
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
`}};n([c({type:String})],b.prototype,"_status",void 0),n([c({type:Boolean})],b.prototype,"active",void 0),n([c({type:Object})],b.prototype,"_lists",void 0);var p=b=n([d("backend-ai-session-view")],b);export default p;
