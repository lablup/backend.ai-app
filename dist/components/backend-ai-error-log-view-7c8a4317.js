import{d as a,e as i,I as r,a as s,D as t,f as e,b as o,h as d,_ as c,p as n,c as l}from"./backend-ai-console-52da7ce1.js";import"./lablup-loading-indicator-320198e1.js";import"./iron-resizable-behavior-5743f649.js";import"./vaadin-progress-bar-c86f5342.js";import"./vaadin-grid-369d5b12.js";import"./iron-iconset-svg-c8634dd5.js";import"./radio-behavior-4d4215af.js";import"./expansion-142ca055.js";import"./label-9371cb47.js";import"./vaadin-grid-selection-column-0e68f6ca.js";import"./vaadin-grid-sorter-250e386d.js";import"./vaadin-grid-sort-column-8ac4f625.js";import"./iconset-2993a19c.js";import"./divider-b0c28a83.js";import"./backend-ai-indicator-87dded84.js";import"./backend-ai-error-log-list-060e08a6.js";let p=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[i,r,s,t,e,o`
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
