import{d as i,e as a,I as r,a as s,G as t,f as o,b as e,h as d,_ as c,p as n,c as l}from"./backend-ai-console-969654a6.js";import"./lablup-loading-indicator-e032c91f.js";import"./iron-resizable-behavior-1c6a25ef.js";import"./vaadin-grid-54115755.js";import"./iron-iconset-svg-83c12504.js";import"./radio-behavior-b4045b4d.js";import"./expansion-ab07c4f1.js";import"./label-54919d09.js";import"./vaadin-grid-selection-column-d1751c1f.js";import"./vaadin-grid-sorter-8611ddda.js";import"./vaadin-grid-sort-column-05614ab9.js";import"./iconset-6e7d381f.js";import"./vaadin-progress-bar-9c925cf1.js";import"./divider-3cdf13c7.js";import"./backend-ai-indicator-897cfb14.js";import"./backend-ai-error-log-list-e4a2b2f2.js";let p=class extends i{constructor(){super(),this._lists=Object()}static get styles(){return[a,r,s,t,o,e`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return d`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};c([n({type:Object})],p.prototype,"_lists",void 0),p=c([l("backend-ai-error-log-view")],p);var b=p;export default b;
