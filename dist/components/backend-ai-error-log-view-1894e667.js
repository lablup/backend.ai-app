import{d as a,e as i,I as r,a as s,D as t,f as e,b as o,h as d,_ as c,p as n,c as l}from"./backend-ai-console-f3f55dfb.js";import"./lablup-loading-indicator-f881de2e.js";import"./iron-resizable-behavior-de55f964.js";import"./vaadin-progress-bar-1df69f2a.js";import"./vaadin-grid-4911f4dc.js";import"./iron-iconset-svg-9534ec82.js";import"./radio-behavior-38c198d4.js";import"./expansion-9cb7b1da.js";import"./label-580b3f1c.js";import"./vaadin-grid-selection-column-674d4aac.js";import"./vaadin-grid-sorter-a00e6fad.js";import"./vaadin-grid-sort-column-7c57152f.js";import"./iconset-2efda350.js";import"./divider-bb247808.js";import"./backend-ai-indicator-06adad47.js";import"./backend-ai-error-log-list-082df5a2.js";let p=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[i,r,s,t,e,o`
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
