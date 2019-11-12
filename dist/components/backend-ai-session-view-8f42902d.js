import{B as t,I as i,f as e,g as s,i as o,c as a,h as r,b as n,p as c,e as d}from"./iron-flex-layout-classes-c9b3b8db.js";import"./switch-behavior-30fde1cf.js";import"./iron-icon-270f343c.js";import"./paper-input-17b1fe1d.js";import"./paper-item-96b50112.js";import"./mwc-icon-button-48f111a2.js";import"./lablup-shields-908ef1db.js";import"./iron-icons-2cf57b15.js";import"./hardware-icons-8886b86c.js";import"./vaadin-icons-3778971e.js";import"./input-behavior-22f7c31e.js";import"./index-0bbfdd62.js";import"./index-41b64f0a.js";import"./resize-b38d87a6.js";import"./backend-ai-painkiller-d4aac244.js";import"./index-e2571378.js";import"./index-44b73311.js";import{B as l}from"./backend-ai-page-4ba904fc.js";import"./lablup-loading-indicator-4b4f282b.js";import"./iron-resizable-behavior-885c0670.js";import"./vaadin-progress-bar-d13e943e.js";import"./paper-progress-c3c4f72c.js";import"./radio-behavior-59efa73e.js";import"./backend-ai-dropdown-menu-be9f0cad.js";import"./paper-dropdown-menu-f729cefd.js";import"./index-8750b3a6.js";import"./index-65211c35.js";import"./backend-ai-resource-monitor-b3ccb316.js";import"./av-icons-da3aea8d.js";import"./paper-dialog-ef69fb9b.js";import"./backend-ai-session-list-c57851c8.js";import"./vaadin-grid-50b0899b.js";import"./vaadin-grid-selection-column-4d33f78e.js";import"./vaadin-grid-sorter-eaae22b7.js";import"./vaadin-grid-sort-column-cd1249fb.js";import"./index-6835b5eb.js";import"./backend-ai-indicator-fd375b9d.js";import"./index-7f5527b9.js";let b=class extends l{constructor(){super(),this._status="inactive",this.active=!0,this._lists=Object(),this.active=!1,this._status="inactive"}static get styles(){return[t,i,e,s,o,a`
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
