import{d as a,e as i,I as r,a as s,G as e,f as t,b as o,h as d,_ as c,p as n,c as l}from"./backend-ai-console-aab53031.js";import"./lablup-loading-indicator-4ee19f09.js";import"./iron-resizable-behavior-de55f964.js";import"./vaadin-progress-bar-1df69f2a.js";import"./vaadin-grid-4911f4dc.js";import"./iron-iconset-svg-9534ec82.js";import"./radio-behavior-fd9a3821.js";import"./expansion-fe629c86.js";import"./label-0988d65e.js";import"./vaadin-grid-selection-column-674d4aac.js";import"./vaadin-grid-sorter-a00e6fad.js";import"./vaadin-grid-sort-column-7c57152f.js";import"./iconset-2efda350.js";import"./divider-95df76eb.js";import"./backend-ai-indicator-bc02af40.js";import"./backend-ai-error-log-list-01a3aca4.js";let p=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[i,r,s,e,t,o`
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
