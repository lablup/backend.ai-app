import{b as t,p as e,e as a,B as i,I as s,f as o,g as l,i as c,c as r,h as n}from"./iron-flex-layout-classes-c9b3b8db.js";import"./switch-behavior-0afc6c5f.js";import"./iron-icon-6ebc5e38.js";import"./input-behavior-22f7c31e.js";import"./index-0bbfdd62.js";import"./index-41b64f0a.js";import"./resize-b38d87a6.js";import{B as d}from"./backend-ai-page-4ba904fc.js";import"./radio-behavior-815c3cf2.js";import"./backend-ai-chart-74347aa8.js";import"./index-6835b5eb.js";import"./index-42a6ea5e.js";let h=class extends d{constructor(){super(),this._map={num_sessions:"Sessions",cpu_allocated:"CPU",mem_allocated:"Memory",gpu_allocated:"GPU",io_read_bytes:"IO-Read",io_write_bytes:"IO-Write"},this.templates={"1D":{interval:1,length:96},"1W":{interval:1,length:672}},this.collection=Object(),this.period="1D",this.updating=!1,this.data=[]}static get styles(){return[i,s,o,l,c,r`
        wl-select {
          --input-font-family: Roboto, Noto, sans-serif;
          --input-color-disabled: #222222;
          --input-label-color-disabled: #222222;
          --input-label-font-size: 12px;
          --input-border-style-disabled: 1px solid #cccccc;
        }

        wl-card {
          --card-elevation: 0;
        }
      `]}attributeChangedCallback(t,e,a){"active"===t&&null!==a?(this.active||this._menuChanged(!0),this.active=!0):(this.active=!1,this._menuChanged(!1),this.shadowRoot.querySelectorAll("backend-ai-chart").forEach(t=>{t.wipe()})),super.attributeChangedCallback(t,e,a)}async _menuChanged(t){await this.updateComplete,!1!==t?this.init():this.shadowRoot.querySelectorAll("backend-ai-chart").forEach(t=>{t.wipe()})}firstUpdated(){}init(){if(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready)document.addEventListener("backend-ai-connected",()=>{this.updating||(this.updating=!0,this.readUserStat().then(t=>{this.shadowRoot.querySelectorAll("backend-ai-chart").forEach(t=>{t.init()}),this.updating=!1}).catch(t=>{this.updating=!1}))},!0);else{if(this.updating)return;this.updating=!0,this.readUserStat().then(t=>{this.shadowRoot.querySelectorAll("backend-ai-chart").forEach(t=>{t.init()}),this.updating=!1}).catch(t=>{this.updating=!1})}}readUserStat(){return window.backendaiclient.resources.user_stats().then(t=>{const{period:e,templates:a}=this;this.data=t;let i={};return i[e]={},Object.keys(this._map).forEach(s=>{i[e][s]={data:[t.filter((i,s)=>t.length-a[e].length<=s).map(t=>({x:new Date(1e3*t.date),y:t[s].value}))],axisTitle:{x:"Date",y:this._map[s]},period:e,unit_hint:t[0][s].unit_hint}}),this.collection=i,this.updateComplete}).catch(t=>{})}pulldownChange(t){this.period=t.target.value;const{data:e,period:a,collection:i,_map:s,templates:o}=this;a in i||(i[a]={},Object.keys(s).forEach(t=>{i[a][t]={data:[e.filter((t,i)=>e.length-o[a].length<=i).map(e=>({x:new Date(1e3*e.date),y:e[t].value}))],axisTitle:{x:"Date",y:s[t]},period:a,unit_hint:e[e.length-1][t].unit_hint}}))}render(){return n`
      <wl-card elevation="0">
        <h3 class="horizontal center layout">
          <wl-select label="Select Period" style="width: 130px;" @input=${this.pulldownChange}>
            <option value disabled>Select Period</option>
            <option value="1D" selected>1 Day</option>
            <option value="1W">1 Week</option>
          </wl-select>
          <span class="flex"></span>
        </h3>
        ${Object.keys(this.collection).length>0?Object.keys(this._map).map((t,e)=>n`
          <wl-card>
            <h3 class="horizontal center layout">
              <span>${this._map[t]}</span>
              <span class="flex"></span>
            </h3>
            </div>
            <div style="width:100%;min-height:180px;">
              <backend-ai-chart
                width="1000"
                height="180"
                elevation="1"
                type="line"
                idx=${e}
                .collection=${this.collection[this.period][t]}
              ></backend-ai-chart>
            </div>
          </wl-card>
            `):n``}
      </wl-card>
    `}};t([e({type:Object})],h.prototype,"_map",void 0),t([e({type:Object})],h.prototype,"templates",void 0),t([e({type:Object})],h.prototype,"collection",void 0),t([e({type:String})],h.prototype,"period",void 0),t([e({type:Boolean})],h.prototype,"updating",void 0),h=t([a("backend-ai-usage-list")],h);let p=class extends d{constructor(){super(),this._status="inactive"}static get styles(){return[i,s,o,l,c,r`
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

        .tab-content {
          width: 100%;
        }
      `]}async _viewStateChanged(t){if(await this.updateComplete,!1===t){return this._status="inactive",void this.shadowRoot.querySelector("[active]").removeAttribute("active")}this.shadowRoot.querySelector("#usage-list").setAttribute("active",!0),this._status="active"}_showTab(t){const e=this.shadowRoot.querySelectorAll(".tab-content");for(const t of e)t.style.display="none";this.shadowRoot.querySelector("#"+t.value+"-stat").style.display="block",e.forEach(t=>{t.children[0].removeAttribute("active")}),this.shadowRoot.querySelector(`#${t.value}-list`).setAttribute("active",!0)}render(){return n`
        <wl-card class="item">
          <h3 class="tab horizontal center layout">
            <wl-tab-group>
              <wl-tab value="usage" checked @click="${t=>this._showTab(t.target)}">Usage</wl-tab>
            </wl-tab-group>
          </h3>
          <div class="horizontal wrap layout">
            <div id="usage-stat" class="tab-content">
              <backend-ai-usage-list id="usage-list"><wl-progress-spinner active></wl-progress-spinner></backend-ai-usage-list>
            </div>
          </div>
        </wl-card>
      `}};t([e({type:String})],p.prototype,"_status",void 0);var u=p=t([a("backend-ai-statistics-view")],p);export default u;