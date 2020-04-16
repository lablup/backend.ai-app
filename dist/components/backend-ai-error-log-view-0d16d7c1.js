import{d as a,e as i,I as r,a as s,G as t,f as e,b as o,h as d,_ as c,p as n,c as l}from"./backend-ai-console-5bb4a440.js";import"./lablup-loading-indicator-f8b2025b.js";import"./iron-resizable-behavior-de55f964.js";import"./vaadin-progress-bar-1df69f2a.js";import"./vaadin-grid-4911f4dc.js";import"./iron-iconset-svg-9534ec82.js";import"./radio-behavior-cc0fe289.js";import"./expansion-abbe1f4f.js";import"./label-89346c6a.js";import"./vaadin-grid-selection-column-674d4aac.js";import"./vaadin-grid-sorter-a00e6fad.js";import"./vaadin-grid-sort-column-7c57152f.js";import"./iconset-2efda350.js";import"./divider-f9653cc6.js";import"./backend-ai-indicator-fbfe267f.js";import"./backend-ai-error-log-list-fb1160de.js";let p=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[i,r,s,t,e,o`
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
