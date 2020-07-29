import{B as s,d as a,I as t,a as e,x as r,e as i,b as o,h as d,_ as c,p as l,c as n}from"./backend-ai-console-d9b9a5ab.js";import"./iron-resizable-behavior-60d31af0.js";import"./vaadin-grid-sorter-efab20c6.js";import"./iron-iconset-svg-04ff383c.js";import"./label-f3842d1a.js";import"./radio-behavior-0218e0db.js";import"./expansion-2224b0c3.js";import"./vaadin-grid-selection-column-cb6c01c6.js";import"./vaadin-grid-sort-column-1a0e592f.js";import"./iconset-b6786ef5.js";import"./backend-ai-error-log-list-0d193827.js";let p=class extends s{constructor(){super(),this._lists=Object()}static get styles(){return[a,t,e,r,i,o`
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
