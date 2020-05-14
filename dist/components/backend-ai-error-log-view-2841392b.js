import{d as a,e as s,I as r,a as i,A as e,f as t,b as o,h as d,_ as l,p as n,c}from"./backend-ai-console-c51838c2.js";import"./lablup-loading-spinner-f245bb8b.js";import"./iron-resizable-behavior-c7edc396.js";import"./vaadin-grid-db23b19c.js";import"./iron-iconset-svg-19993a4c.js";import"./radio-behavior-38b683ff.js";import"./expansion-055600db.js";import"./label-14b331b2.js";import"./vaadin-grid-selection-column-14023a4b.js";import"./vaadin-grid-sorter-f16f385c.js";import"./vaadin-grid-sort-column-0ee0e80a.js";import"./iconset-00aad4a4.js";import"./vaadin-progress-bar-0ee7fbba.js";import"./backend-ai-error-log-list-c112adb6.js";let b=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[s,r,i,e,t,o`
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
