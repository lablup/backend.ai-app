import{B as a,d as s,I as t,a as e,n as r,e as i,b as o,h as d,_ as c,p as l,c as n}from"./backend-ai-console-22d31a8d.js";import"./radio-behavior-ddc0148e.js";import"./expansion-bdffdc99.js";import"./vaadin-grid-sorter-f0db9e83.js";import"./vaadin-grid-selection-column-056a9949.js";import"./vaadin-grid-sort-column-cab34161.js";import"./iconset-a5679453.js";import"./backend-ai-error-log-list-e7142c77.js";let p=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[s,t,e,r,i,o`
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
