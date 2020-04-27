import{d as s,e as a,I as r,a as i,G as t,f as e,b as o,h as d,_ as l,p as n,c}from"./backend-ai-console-04ff2fbe.js";import"./lablup-loading-spinner-bef8aa5b.js";import"./iron-resizable-behavior-1c6a25ef.js";import"./vaadin-grid-54115755.js";import"./iron-iconset-svg-83c12504.js";import"./radio-behavior-ff239169.js";import"./expansion-0316d6fc.js";import"./label-1f7bc098.js";import"./vaadin-grid-selection-column-d1751c1f.js";import"./vaadin-grid-sorter-8611ddda.js";import"./vaadin-grid-sort-column-05614ab9.js";import"./iconset-6e7d381f.js";import"./vaadin-progress-bar-9c925cf1.js";import"./backend-ai-error-log-list-d0d59329.js";let p=class extends s{constructor(){super(),this._lists=Object()}static get styles(){return[a,r,i,t,e,o`
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
