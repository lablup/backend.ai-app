import{_ as a,p as s,c as e,B as r,d as i,I as t,a as o,z as d,e as c,b as l,h as n}from"./backend-ai-console-cb2f630c.js";import"./lablup-loading-spinner-90acdc8e.js";import"./iron-resizable-behavior-c7edc396.js";import"./vaadin-grid-17f889e8.js";import"./iron-iconset-svg-19993a4c.js";import"./radio-behavior-c850123c.js";import"./expansion-a6d81da8.js";import"./label-bab7d4b5.js";import"./vaadin-grid-selection-column-2fac0eb8.js";import"./vaadin-grid-sorter-43e0ee00.js";import"./vaadin-grid-sort-column-50a14733.js";import"./iconset-00aad4a4.js";import"./vaadin-progress-bar-212543e7.js";import"./backend-ai-error-log-list-6b05cce9.js";let p=(()=>{let p=class extends r{constructor(){super(),this._lists=Object()}static get styles(){return[i,t,o,d,c,l`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return n`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};return a([s({type:Object})],p.prototype,"_lists",void 0),p=a([e("backend-ai-error-log-view")],p),p})();export default p;
