import{_ as t,p as e,c as a,B as i,d as s,I as o,a as l,n as r,e as c,b as n,h as d,t as h}from"./backend-ai-console-bf343de1.js";import"./tab-group-f9f43f62.js";import"./mwc-tab-bar-58fe4f29.js";import"./backend-ai-chart-9607482f.js";import"./radio-behavior-e101265b.js";import"./chart-js-e83113ea.js";
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let p=class extends i{constructor(){super(),this._map={num_sessions:"Sessions",cpu_allocated:"CPU",mem_allocated:"Memory",gpu_allocated:"GPU",io_read_bytes:"IO-Read",io_write_bytes:"IO-Write"},this.templates={"1D":{interval:1,length:96},"1W":{interval:1,length:672}},this.collection=Object(),this.period="1D",this.updating=!1,this.elapsedDays=0,this.data=[]}static get styles(){return[s,o,l,r,c,n`
        mwc-select {
          width: 100%;
          font-family: var(--general-font-family);
          --mdc-typography-subtitle1-font-family: var(--general-font-family);
          --mdc-theme-primary: var(--general-sidebar-color);
          --mdc-select-fill-color: transparent;
          --mdc-select-label-ink-color: rgba(0, 0, 0, 0.75);
          --mdc-select-focused-dropdown-icon-color: var(--general-sidebar-color);
          --mdc-select-disabled-dropdown-icon-color: var(--general-sidebar-color);
          --mdc-select-idle-line-color: rgba(0, 0, 0, 0.42);
          --mdc-select-hover-line-color: var(--general-sidebar-color);
          --mdc-select-outlined-idle-border-color: var(--general-sidebar-color);
          --mdc-select-outlined-hover-border-color: var(--general-sidebar-color);
          --mdc-theme-surface: white;
          --mdc-list-vertical-padding: 5px;
          --mdc-list-side-padding: 25px;
          --mdc-list-item__primary-text: {
            height: 20px;
          };
        }
      `]}attributeChangedCallback(t,e,a){"active"===t&&null!==a?(this.active||this._menuChanged(!0),this.active=!0):(this.active=!1,this._menuChanged(!1),this.shadowRoot.querySelectorAll("backend-ai-chart").forEach((t=>{t.wipe()}))),super.attributeChangedCallback(t,e,a)}async _menuChanged(t){await this.updateComplete,!1!==t?this.init():this.shadowRoot.querySelectorAll("backend-ai-chart").forEach((t=>{t.wipe()}))}firstUpdated(){}async _viewStateChanged(t){await this.updateComplete,!1!==t&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._getUserInfo(),this.init(),setTimeout((()=>{const t=this.shadowRoot.querySelector("#period-selector");t.selectedText=t.selected.textContent.trim()}),100)}),!0):(this._getUserInfo(),this.init(),setTimeout((()=>{const t=this.shadowRoot.querySelector("#period-selector");t.selectedText=t.selected.textContent.trim()}),100)))}_getUserInfo(){globalThis.backendaiclient.keypair.info(globalThis.backendaiclient._config.accessKey,["created_at"]).then((t=>{let e=t.keypair.created_at,a=new Date(e),i=new Date,s=Math.floor((i.getTime()-a.getTime())/1e3),o=Math.floor(s/86400);this.elapsedDays=o}))}init(){if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)document.addEventListener("backend-ai-connected",(()=>{this.updating||(this.updating=!0,this.readUserStat().then((t=>{this.shadowRoot.querySelectorAll("backend-ai-chart").forEach((t=>{t.init()})),this.updating=!1})).catch((t=>{this.updating=!1})))}),!0);else{if(this.updating)return;this.updating=!0,this.readUserStat().then((t=>{this.shadowRoot.querySelectorAll("backend-ai-chart").forEach((t=>{t.init()})),this.updating=!1})).catch((t=>{this.updating=!1}))}}readUserStat(){return globalThis.backendaiclient.resources.user_stats().then((t=>{const{period:e,templates:a}=this;this.data=t;let i={};return i[e]={},Object.keys(this._map).forEach((s=>{i[e][s]={data:[t.filter(((i,s)=>t.length-a[e].length<=s)).map((t=>({x:new Date(1e3*t.date),y:t[s].value})))],labels:[t.filter(((i,s)=>t.length-a[e].length<=s)).map((t=>new Date(1e3*t.date).toString()))],axisTitle:{x:"Date",y:this._map[s]},period:e,unit_hint:t[0][s].unit_hint}})),this.collection=i,this.updateComplete})).catch((t=>{}))}pulldownChange(t){this.period=t.target.value,console.log(this.period);const{data:e,period:a,collection:i,_map:s,templates:o}=this;a in i||(i[a]={},Object.keys(s).forEach((t=>{i[a][t]={data:[e.filter(((t,i)=>e.length-o[a].length<=i)).map((e=>({x:new Date(1e3*e.date),y:e[t].value})))],axisTitle:{x:"Date",y:s[t]},period:a,unit_hint:e[e.length-1][t].unit_hint}})))}render(){return d`
      <div class="card" elevation="0">
        <h3 class="horizontal center layout">
          <mwc-select label="${h("statistics.SelectPeriod")}"
              id="period-selector" style="width:130px; border:1px solid #ccc;"
              @change="${t=>{this.pulldownChange(t)}}">
            <mwc-list-item value="1D" selected>${h("statistics.1Day")}</mwc-list-item>
            ${this.elapsedDays>7?d`
              <mwc-list-item value="1W">${h("statistics.1Week")}</mwc-list-item>
            `:d``}
          </mwc-select>
          <span class="flex"></span>
        </h3>
        ${Object.keys(this.collection).length>0?Object.keys(this._map).map(((t,e)=>d`
              <div class="card">
                <h3 class="horizontal center layout">
                  <span>${this._map[t]}</span>
                  <span class="flex"></span>
                </h3>
              </div>
              <div style="width:100%;min-height:180px;">
                <backend-ai-chart
                  idx=${e}
                  .collection=${this.collection[this.period][t]}
                ></backend-ai-chart>
              </div>
            `)):d``}
      </div>
    `}};t([e({type:Object})],p.prototype,"_map",void 0),t([e({type:Object})],p.prototype,"templates",void 0),t([e({type:Object})],p.prototype,"collection",void 0),t([e({type:String})],p.prototype,"period",void 0),t([e({type:Boolean})],p.prototype,"updating",void 0),t([e({type:Number})],p.prototype,"elapsedDays",void 0),p=t([a("backend-ai-usage-list")],p);
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */
let b=class extends i{constructor(){super(),this._status="inactive"}static get styles(){return[s,o,l,r,c,n`
        wl-card h3.tab {
          padding-top: 0;
          padding-bottom: 0;
          padding-left: 0;
        }
        wl-tab-group {
          --tab-group-indicator-bg: var(--paper-cyan-500);
        }

        wl-tab {
          --tab-color: #666;
          --tab-color-hover: #222;
          --tab-color-hover-filled: #222;
          --tab-color-active: #222;
          --tab-color-active-hover: #222;
          --tab-color-active-filled: #ccc;
          --tab-bg-active: var(--paper-cyan-50);
          --tab-bg-filled: var(--paper-cyan-50);
          --tab-bg-active-hover: var(--paper-cyan-100);
        }

        h3.tab {
          background-color: var(--general-tabbar-background-color);
          border-radius: 5px 5px 0px 0px;
          margin: 0px auto;
        }

        mwc-tab-bar {
          --mdc-theme-primary: var(--general-sidebar-selected-color);
          --mdc-text-transform: none;
          --mdc-tab-color-default: var(--general-tabbar-background-color);
          --mdc-tab-text-label-color-default: var(--general-tabbar-tab-disabled-color);
        }

        .tab-content {
          width: 100%;
        }
      `]}async _viewStateChanged(t){await this.updateComplete,!1!==t?(this.shadowRoot.querySelector("#usage-list").setAttribute("active",!0),this._status="active"):this._status="inactive"}_showTab(t){const e=this.shadowRoot.querySelectorAll(".tab-content");for(const t of e)t.style.display="none";this.shadowRoot.querySelector("#"+t.title+"-stat").style.display="block",e.forEach((t=>{t.children[0].removeAttribute("active")})),this.shadowRoot.querySelector(`#${t.title}-list`).setAttribute("active",!0)}render(){return d`
        <div style="margin:20px;">
          <lablup-activity-panel elevation="1" noheader narrow autowidth>
            <div slot="message">
              <h3 class="tab horizontal center layout">
                <mwc-tab-bar>
                  <mwc-tab title="usage" label="${h("statistics.Usage")}"></mwc-tab>
                </mwc-tab-bar>
              </h3>
              <div class="horizontal wrap layout">
                <div id="usage-stat" class="tab-content">
                  <backend-ai-usage-list id="usage-list"><wl-progress-spinner active></wl-progress-spinner></backend-ai-usage-list>
                </div>
              </div>
            </div>
          </lablup-activity-panel>
        </div>
      `}};t([e({type:String})],b.prototype,"_status",void 0),b=t([a("backend-ai-statistics-view")],b);var u=b;export default u;
