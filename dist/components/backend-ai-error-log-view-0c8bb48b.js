import{B as a,d as s,I as e,a as t,x as r,e as i,b as o,h as c,_ as d,p as l,c as n}from"./backend-ai-console-2f727234.js";import"./iron-resizable-behavior-b556a6a9.js";import"./vaadin-grid-sorter-1c6af9e5.js";import"./iron-iconset-svg-ac2a5977.js";import"./radio-behavior-605cb0e6.js";import"./expansion-ade11261.js";import"./vaadin-grid-selection-column-21b03ac3.js";import"./vaadin-grid-sort-column-ae372293.js";import"./iconset-7f307e3c.js";import"./backend-ai-error-log-list-cc84a1b1.js";let p=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[s,e,t,r,i,o`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return c`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};d([l({type:Object})],p.prototype,"_lists",void 0),p=d([n("backend-ai-error-log-view")],p);var b=p;export default b;
