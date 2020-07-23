import{B as a,d as s,I as e,a as t,x as r,e as i,b as o,h as d,_ as l,p as c,c as n}from"./backend-ai-console-b0159b49.js";import"./iron-resizable-behavior-60d31af0.js";import"./vaadin-grid-sorter-efab20c6.js";import"./iron-iconset-svg-04ff383c.js";import"./label-b9a5357e.js";import"./radio-behavior-fefa0fdf.js";import"./expansion-f13fea34.js";import"./vaadin-grid-selection-column-cb6c01c6.js";import"./vaadin-grid-sort-column-1a0e592f.js";import"./iconset-b6786ef5.js";import"./backend-ai-error-log-list-ad312818.js";let p=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[s,e,t,r,i,o`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return d`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};l([c({type:Object})],p.prototype,"_lists",void 0),p=l([n("backend-ai-error-log-view")],p);var b=p;export default b;
