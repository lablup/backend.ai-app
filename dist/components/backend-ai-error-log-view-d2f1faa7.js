import{B as a,d as s,I as r,a as i,x as t,e,b as o,h as d,_ as c,p as l,c as n}from"./backend-ai-console-540580c6.js";import"./iron-resizable-behavior-60d31af0.js";import"./vaadin-grid-1307b1dd.js";import"./iron-iconset-svg-04ff383c.js";import"./label-ef3efb9f.js";import"./radio-behavior-0a197dac.js";import"./expansion-76acb1db.js";import"./vaadin-grid-selection-column-dfbf06e8.js";import"./vaadin-grid-sorter-99596383.js";import"./vaadin-grid-sort-column-0dd97ea8.js";import"./iconset-b6786ef5.js";import"./vaadin-progress-bar-a163d131.js";import"./backend-ai-error-log-list-c6cbdd48.js";let p=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[s,r,i,t,e,o`
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
