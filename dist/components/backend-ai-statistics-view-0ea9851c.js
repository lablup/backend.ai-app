import{_ as e,p as t,c as a,L as s,I as i,a as l,n as o,e as r,b as c,h as n,t as d,B as p,d as h}from"./backend-ai-webui-ecfefd57.js";import"./tab-group-ebfc02a3.js";import"./mwc-tab-bar-d449c98a.js";import"./backend-ai-chart-a4f52a87.js";import"./radio-behavior-7a7c698d.js";import"./rowing-0d2117d9.js";import"./chart-js-22b45d42.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let u=class extends s{constructor(){super(),this.num_sessions=0,this.used_time="0:00:00.00",this.cpu_used_time="0:00:00.00",this.gpu_used_time="0:00:00.00",this.disk_used=0,this.traffic_used=0}static get styles(){return[i,l,o,r,c`
        wl-card {
          padding: 20px;
        }

        .value {
          padding: 15px;
          font-size: 25px;
          font-weight: bold;
        }

        .desc {
          padding: 0px 15px 20px 15px;
        }
      `]}firstUpdated(){this.formatting()}formatting(){this.used_time=this.usedTimeFormatting(this.used_time),this.cpu_used_time=this.usedTimeFormatting(this.cpu_used_time),this.gpu_used_time=this.usedTimeFormatting(this.gpu_used_time),this.disk_used=Math.floor(this.disk_used/1073741824),this.traffic_used=Math.floor(this.traffic_used/1048576)}usedTimeFormatting(e){const t=parseInt(e.substring(0,e.indexOf(":")));let a=parseInt(e.substring(e.indexOf(":")+1,e.lastIndexOf(":")));return a=24*t+a,a+"h "+e.substring(e.lastIndexOf(":")+1,e.indexOf("."))+"m"}render(){return n`
      <wl-card>
        <wl-title level="3">${d("usagepanel.StatisticsForThisMonth")}</wl-title>
        <div class="horizontal layout">
          <div class="vertical center layout">
            <span class="value">${this.num_sessions}</span>
            <span class="desc">${d("usagepanel.NumSessions")}</span>
          </div>
          <div class="vertical center layout">
            <span class="value">${this.used_time}</span>
            <span class="desc">${d("usagepanel.UsedTime")}</span>
          </div>
          <div class="vertical center layout">
            <span class="value">${this.cpu_used_time}</span>
            <span class="desc">${d("usagepanel.CpuUsedTime")}</span>
          </div>
          <div class="vertical center layout">
            <span class="value">${this.gpu_used_time}</span>
            <span class="desc">${d("usagepanel.GpuUsedTime")}</span>
          </div>
          <div class="vertical center layout">
            <span class="value">${this.disk_used}GB</span>
            <span class="desc">${d("usagepanel.DiskUsed")}</span>
          </div>
          <div class="vertical center layout">
            <span class="value">${this.traffic_used}MB</span>
            <span class="desc">${d("usagepanel.TrafficUsed")}</span>
          </div>
        </div>
      </wl-card>
    `}};e([t({type:Number})],u.prototype,"num_sessions",void 0),e([t({type:String})],u.prototype,"used_time",void 0),e([t({type:String})],u.prototype,"cpu_used_time",void 0),e([t({type:String})],u.prototype,"gpu_used_time",void 0),e([t({type:Number})],u.prototype,"disk_used",void 0),e([t({type:Number})],u.prototype,"traffic_used",void 0),u=e([a("backend-ai-monthly-usage-panel")],u);
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */
let b=class extends p{constructor(){super(),this._map={num_sessions:"Sessions",cpu_allocated:"CPU",mem_allocated:"Memory",gpu_allocated:"GPU",io_read_bytes:"IO-Read",io_write_bytes:"IO-Write"},this.templates={"1D":{interval:1,length:96},"1W":{interval:1,length:672}},this.collection=Object(),this.period="1D",this.updating=!1,this.elapsedDays=0,this.data=[]}static get styles(){return[h,i,l,o,r,c`
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
      `]}attributeChangedCallback(e,t,a){"active"===e&&null!==a?(this.active||this._menuChanged(!0),this.active=!0):(this.active=!1,this._menuChanged(!1),this.shadowRoot.querySelectorAll("backend-ai-chart").forEach((e=>{e.wipe()}))),super.attributeChangedCallback(e,t,a)}async _menuChanged(e){await this.updateComplete,!1!==e?this.init():this.shadowRoot.querySelectorAll("backend-ai-chart").forEach((e=>{e.wipe()}))}firstUpdated(){}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._getUserInfo(),this.init(),setTimeout((()=>{const e=this.shadowRoot.querySelector("#period-selector");e.selectedText=e.selected.textContent.trim()}),100)}),!0):(this._getUserInfo(),this.init(),setTimeout((()=>{const e=this.shadowRoot.querySelector("#period-selector");e.selectedText=e.selected.textContent.trim()}),100)))}_getUserInfo(){globalThis.backendaiclient.keypair.info(globalThis.backendaiclient._config.accessKey,["created_at"]).then((e=>{const t=e.keypair.created_at,a=new Date(t),s=new Date,i=Math.floor((s.getTime()-a.getTime())/1e3),l=Math.floor(i/86400);this.elapsedDays=l}))}init(){if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)document.addEventListener("backend-ai-connected",(()=>{this.updating||(this.updating=!0,this.readUserStat().then((e=>{this.shadowRoot.querySelectorAll("backend-ai-chart").forEach((e=>{e.init()})),this.updating=!1})).catch((e=>{this.updating=!1})))}),!0);else{if(this.updating)return;this.updating=!0,this.readUserStat().then((e=>{this.shadowRoot.querySelectorAll("backend-ai-chart").forEach((e=>{e.init()})),this.updating=!1})).catch((e=>{this.updating=!1}))}}readUserStat(){return globalThis.backendaiclient.resources.user_stats().then((e=>{const{period:t,templates:a}=this;this.data=e;const s={};return s[t]={},Object.keys(this._map).forEach((i=>{s[t][i]={data:[e.filter(((s,i)=>e.length-a[t].length<=i)).map((e=>({x:new Date(1e3*e.date),y:e[i].value})))],labels:[e.filter(((s,i)=>e.length-a[t].length<=i)).map((e=>new Date(1e3*e.date).toString()))],axisTitle:{x:"Date",y:this._map[i]},period:t,unit_hint:e[0][i].unit_hint}})),this.collection=s,this.updateComplete})).catch((e=>{console.log(e)}))}pulldownChange(e){this.period=e.target.value,console.log(this.period);const{data:t,period:a,collection:s,_map:i,templates:l}=this;a in s||(s[a]={},Object.keys(i).forEach((e=>{s[a][e]={data:[t.filter(((e,s)=>t.length-l[a].length<=s)).map((t=>({x:new Date(1e3*t.date),y:t[e].value})))],axisTitle:{x:"Date",y:i[e]},period:a,unit_hint:t[t.length-1][e].unit_hint}})))}render(){return n`
      <div class="card" elevation="0">
        <!--<backend-ai-monthly-usage-panel></backend-ai-monthly-usage-panel>-->
        <h3 class="horizontal center layout">
          <mwc-select label="${d("statistics.SelectPeriod")}"
              id="period-selector" style="width:130px; border:1px solid #ccc;"
              @change="${e=>{this.pulldownChange(e)}}">
            <mwc-list-item value="1D" selected>${d("statistics.1Day")}</mwc-list-item>
            ${this.elapsedDays>7?n`
              <mwc-list-item value="1W">${d("statistics.1Week")}</mwc-list-item>
            `:n``}
          </mwc-select>
          <span class="flex"></span>
        </h3>
        ${Object.keys(this.collection).length>0?Object.keys(this._map).map(((e,t)=>n`
              <div class="card">
                <h3 class="horizontal center layout">
                  <span>${this._map[e]}</span>
                  <span class="flex"></span>
                </h3>
              </div>
              <div style="width:100%;min-height:180px;">
                <backend-ai-chart
                  idx=${t}
                  .collection=${this.collection[this.period][e]}
                ></backend-ai-chart>
              </div>
            `)):n``}
      </div>
    `}};e([t({type:Object})],b.prototype,"_map",void 0),e([t({type:Object})],b.prototype,"templates",void 0),e([t({type:Object})],b.prototype,"collection",void 0),e([t({type:String})],b.prototype,"period",void 0),e([t({type:Boolean})],b.prototype,"updating",void 0),e([t({type:Number})],b.prototype,"elapsedDays",void 0),b=e([a("backend-ai-usage-list")],b);
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */
let m=class extends p{constructor(){super(),this._status="inactive"}static get styles(){return[h,i,l,o,r,c`
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
      `]}async _viewStateChanged(e){await this.updateComplete,!1!==e?(this.shadowRoot.querySelector("#usage-list").setAttribute("active",!0),this._status="active"):this._status="inactive"}_showTab(e){const t=this.shadowRoot.querySelectorAll(".tab-content");for(const e of t)e.style.display="none";this.shadowRoot.querySelector("#"+e.title+"-stat").style.display="block",t.forEach((e=>{e.children[0].removeAttribute("active")})),this.shadowRoot.querySelector(`#${e.title}-list`).setAttribute("active",!0)}render(){return n`
        <div style="margin:20px;">
          <lablup-activity-panel elevation="1" noheader narrow autowidth>
            <div slot="message">
              <h3 class="tab horizontal center layout">
                <mwc-tab-bar>
                  <mwc-tab title="usage" label="${d("statistics.Usage")}"></mwc-tab>
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
      `}};e([t({type:String})],m.prototype,"_status",void 0),m=e([a("backend-ai-statistics-view")],m);var g=m;export default g;
