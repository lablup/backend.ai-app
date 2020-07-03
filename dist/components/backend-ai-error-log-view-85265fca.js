import{B as a,d as s,I as e,a as r,x as i,e as t,b as o,h as d,_ as l,p as n,c}from"./backend-ai-console-17b8648f.js";import"./iron-resizable-behavior-d47f1a1f.js";import"./vaadin-grid-ae1fde2a.js";import"./iron-iconset-svg-bcb33a8c.js";import"./label-7e51225b.js";import"./radio-behavior-a8280c8f.js";import"./expansion-2f2e749b.js";import"./vaadin-grid-selection-column-4bd9edd3.js";import"./vaadin-grid-sorter-836a74be.js";import"./vaadin-grid-sort-column-f76f785d.js";import"./iconset-ed66deb2.js";import"./vaadin-progress-bar-98d9ee2f.js";import"./backend-ai-error-log-list-72cc7970.js";let p=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[s,e,r,i,t,o`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return d`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};l([n({type:Object})],p.prototype,"_lists",void 0),p=l([c("backend-ai-error-log-view")],p);var b=p;export default b;
