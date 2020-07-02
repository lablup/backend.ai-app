import{B as a,d as e,I as s,a as r,x as i,e as t,b as o,h as d,_ as l,p as n,c}from"./backend-ai-console-db2ee763.js";import"./iron-resizable-behavior-d47f1a1f.js";import"./vaadin-grid-ae1fde2a.js";import"./iron-iconset-svg-bcb33a8c.js";import"./label-553a55ec.js";import"./radio-behavior-3cbb168d.js";import"./expansion-b71f9b37.js";import"./vaadin-grid-selection-column-4bd9edd3.js";import"./vaadin-grid-sorter-836a74be.js";import"./vaadin-grid-sort-column-f76f785d.js";import"./iconset-ed66deb2.js";import"./vaadin-progress-bar-98d9ee2f.js";import"./backend-ai-error-log-list-a20d8184.js";let b=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[e,s,r,i,t,o`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return d`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};l([n({type:Object})],b.prototype,"_lists",void 0),b=l([c("backend-ai-error-log-view")],b);var p=b;export default p;
