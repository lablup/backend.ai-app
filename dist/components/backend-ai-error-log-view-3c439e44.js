import{B as s,d as a,I as e,a as r,x as i,e as t,b as o,h as d,_ as c,p as l,c as n}from"./backend-ai-console-6dec094c.js";import"./iron-resizable-behavior-60d31af0.js";import"./vaadin-grid-1307b1dd.js";import"./iron-iconset-svg-04ff383c.js";import"./label-ed59c1d6.js";import"./radio-behavior-75c9eabe.js";import"./expansion-0e1c63e3.js";import"./vaadin-grid-selection-column-dfbf06e8.js";import"./vaadin-grid-sorter-99596383.js";import"./vaadin-grid-sort-column-0dd97ea8.js";import"./iconset-b6786ef5.js";import"./vaadin-progress-bar-a163d131.js";import"./backend-ai-error-log-list-4184578f.js";let p=class extends s{constructor(){super(),this._lists=Object()}static get styles(){return[a,e,r,i,t,o`
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
