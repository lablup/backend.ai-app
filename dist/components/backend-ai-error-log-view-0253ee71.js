import{B as a,d as s,I as e,a as r,D as i,e as t,b as o,h as d,_ as l,p as n,c}from"./backend-ai-console-1b71da62.js";import"./iron-resizable-behavior-d47f1a1f.js";import"./vaadin-grid-1c9a6db0.js";import"./iron-iconset-svg-bcb33a8c.js";import"./radio-behavior-5b7b3939.js";import"./expansion-fd1ee947.js";import"./label-e57358f1.js";import"./vaadin-grid-selection-column-5d426572.js";import"./vaadin-grid-sorter-7983e66b.js";import"./vaadin-grid-sort-column-0d0e6d2d.js";import"./iconset-ed66deb2.js";import"./vaadin-progress-bar-89e13e1c.js";import"./backend-ai-error-log-list-4a14ea95.js";let p=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[s,e,r,i,t,o`
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
