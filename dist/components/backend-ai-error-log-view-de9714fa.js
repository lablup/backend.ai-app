import{B as s,d as e,I as t,a as r,x as i,e as a,b as o,h as d,_ as c,p as l,c as n}from"./backend-ai-console-52b9eb55.js";import"./iron-resizable-behavior-60d31af0.js";import"./vaadin-grid-sorter-4d8e13ce.js";import"./iron-iconset-svg-04ff383c.js";import"./radio-behavior-3164ce17.js";import"./expansion-3641213c.js";import"./vaadin-grid-selection-column-182b798b.js";import"./vaadin-grid-sort-column-c8394169.js";import"./iconset-b6786ef5.js";import"./backend-ai-error-log-list-26b78f36.js";let p=class extends s{constructor(){super(),this._lists=Object()}static get styles(){return[e,t,r,i,a,o`
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
