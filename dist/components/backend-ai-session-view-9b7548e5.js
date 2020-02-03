import{k as t,I as i,j as e,ad as s,l as a,a as o,h as r,_ as n,p as d,c}from"./backend-ai-console-37157891.js";import{B as l}from"./backend-ai-page-78437cdc.js";import"./lablup-loading-indicator-43472aaa.js";import"./iron-resizable-behavior-c3c77aff.js";import"./vaadin-progress-bar-36bf7f13.js";import"./paper-progress-2b762544.js";import"./radio-behavior-fb6f2bf8.js";import"./backend-ai-dropdown-menu-1edaa30e.js";import"./paper-dropdown-menu-4d1b8764.js";import"./index-48817f68.js";import"./index-aa5d2325.js";import"./backend-ai-resource-monitor-311be892.js";import"./av-icons-3bc8fb31.js";import"./paper-dialog-3dda005a.js";import"./backend-ai-session-list-639c4fe8.js";import"./vaadin-grid-33b8d671.js";import"./vaadin-grid-selection-column-d0982455.js";import"./vaadin-grid-sorter-54cd08d8.js";import"./vaadin-grid-sort-column-99ffea00.js";import"./index-808ce756.js";import"./backend-ai-indicator-560a1ff3.js";import"./index-12b80472.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let b=class extends l{constructor(){super(),this._status="inactive",this.active=!0,this._lists=Object(),this.active=!1,this._status="inactive"}static get styles(){return[t,i,e,s,a,o`
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
`}};n([d({type:String})],b.prototype,"_status",void 0),n([d({type:Boolean})],b.prototype,"active",void 0),n([d({type:Object})],b.prototype,"_lists",void 0),b=n([c("backend-ai-session-view")],b);var p=b;export default p;
