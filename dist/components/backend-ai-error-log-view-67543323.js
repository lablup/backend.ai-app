import{d as a,e as i,I as r,a as s,G as t,f as e,b as o,h as d,_ as c,p as n,c as l}from"./backend-ai-console-83b9280d.js";import"./lablup-loading-indicator-7430e51c.js";import"./iron-resizable-behavior-de55f964.js";import"./vaadin-progress-bar-1df69f2a.js";import"./vaadin-grid-4911f4dc.js";import"./iron-iconset-svg-9534ec82.js";import"./radio-behavior-7cabbc42.js";import"./expansion-43379917.js";import"./label-129cd751.js";import"./vaadin-grid-selection-column-674d4aac.js";import"./vaadin-grid-sorter-a00e6fad.js";import"./vaadin-grid-sort-column-7c57152f.js";import"./iconset-2efda350.js";import"./divider-70ab0d5d.js";import"./backend-ai-indicator-ae5fb2b4.js";import"./backend-ai-error-log-list-c98b81a1.js";let p=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[i,r,s,t,e,o`
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
