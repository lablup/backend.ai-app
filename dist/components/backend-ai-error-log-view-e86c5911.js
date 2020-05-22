import{_ as e,p as a,c as s,d as r,e as i,I as t,a as o,A as d,f as c,b as l,h as n}from"./backend-ai-console-258bce16.js";import"./lablup-loading-spinner-ce8c59c1.js";import"./iron-resizable-behavior-c7edc396.js";import"./vaadin-grid-db23b19c.js";import"./iron-iconset-svg-19993a4c.js";import"./radio-behavior-cc1ecd41.js";import"./expansion-633f19a7.js";import"./label-39dd0fee.js";import"./vaadin-grid-selection-column-14023a4b.js";import"./vaadin-grid-sorter-f16f385c.js";import"./vaadin-grid-sort-column-0ee0e80a.js";import"./iconset-00aad4a4.js";import"./vaadin-progress-bar-0ee7fbba.js";import"./backend-ai-error-log-list-4bc33fce.js";let p=(()=>{let p=class extends r{constructor(){super(),this._lists=Object()}static get styles(){return[i,t,o,d,c,l`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return n`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};return e([a({type:Object})],p.prototype,"_lists",void 0),p=e([s("backend-ai-error-log-view")],p),p})();export default p;
