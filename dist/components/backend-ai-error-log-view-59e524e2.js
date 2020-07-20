import{B as s,d as a,I as e,a as i,x as r,e as t,b as o,h as d,_ as l,p as n,c}from"./backend-ai-console-6a490254.js";import"./iron-resizable-behavior-60d31af0.js";import"./vaadin-grid-1307b1dd.js";import"./iron-iconset-svg-04ff383c.js";import"./label-1242434b.js";import"./radio-behavior-70ec13ec.js";import"./expansion-89e9d784.js";import"./vaadin-grid-selection-column-dfbf06e8.js";import"./vaadin-grid-sorter-99596383.js";import"./vaadin-grid-sort-column-0dd97ea8.js";import"./iconset-b6786ef5.js";import"./backend-ai-error-log-list-23915c31.js";let p=class extends s{constructor(){super(),this._lists=Object()}static get styles(){return[a,e,i,r,t,o`
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
