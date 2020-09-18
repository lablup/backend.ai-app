import{B as e,d as s,I as t,a,x as r,e as i,b as o,h as d,_ as c,p as l,c as n}from"./backend-ai-console-e6c7b7b2.js";import"./iron-resizable-behavior-60d31af0.js";import"./vaadin-grid-sorter-427927f5.js";import"./iron-iconset-svg-04ff383c.js";import"./radio-behavior-ced3ce22.js";import"./expansion-98ae7166.js";import"./vaadin-grid-selection-column-134146ae.js";import"./vaadin-grid-sort-column-78bdb03e.js";import"./iconset-b6786ef5.js";import"./backend-ai-error-log-list-c894e0fc.js";let p=class extends e{constructor(){super(),this._lists=Object()}static get styles(){return[s,t,a,r,i,o`
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
