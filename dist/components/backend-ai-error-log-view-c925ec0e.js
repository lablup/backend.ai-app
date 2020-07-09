import{B as a,d as s,I as e,a as i,x as r,e as t,b as o,h as d,_ as l,p as n,c}from"./backend-ai-console-a3572160.js";import"./iron-resizable-behavior-60d31af0.js";import"./vaadin-grid-1307b1dd.js";import"./iron-iconset-svg-04ff383c.js";import"./label-a1e21eae.js";import"./radio-behavior-efb112d3.js";import"./expansion-ad67bc19.js";import"./vaadin-grid-selection-column-dfbf06e8.js";import"./vaadin-grid-sorter-99596383.js";import"./vaadin-grid-sort-column-0dd97ea8.js";import"./iconset-b6786ef5.js";import"./backend-ai-error-log-list-4b0604b9.js";let p=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[s,e,i,r,t,o`
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
