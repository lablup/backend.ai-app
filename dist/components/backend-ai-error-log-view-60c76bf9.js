import{d as a,e,I as s,a as r,A as i,f as t,b as o,h as d,_ as c,p as l,c as n}from"./backend-ai-console-88b2fb44.js";import"./lablup-loading-spinner-fae5d6ac.js";import"./iron-resizable-behavior-c7edc396.js";import"./vaadin-grid-db23b19c.js";import"./iron-iconset-svg-19993a4c.js";import"./radio-behavior-1d0fe1cc.js";import"./expansion-ce9b3286.js";import"./label-d41ae25b.js";import"./vaadin-grid-selection-column-14023a4b.js";import"./vaadin-grid-sorter-f16f385c.js";import"./vaadin-grid-sort-column-0ee0e80a.js";import"./iconset-00aad4a4.js";import"./vaadin-progress-bar-0ee7fbba.js";import"./backend-ai-error-log-list-787beebf.js";let p=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[e,s,r,i,t,o`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return d`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};c([l({type:Object})],p.prototype,"_lists",void 0),p=c([n("backend-ai-error-log-view")],p);var b=p;export default b;
