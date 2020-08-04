import{B as s,d as a,I as e,a as t,x as r,e as i,b as o,h as c,_ as d,p as l,c as n}from"./backend-ai-console-f979cbb9.js";import"./iron-resizable-behavior-60d31af0.js";import"./vaadin-grid-sorter-efab20c6.js";import"./iron-iconset-svg-04ff383c.js";import"./label-ca0cab8a.js";import"./radio-behavior-6c8f0e25.js";import"./expansion-b82631bf.js";import"./vaadin-grid-selection-column-cb6c01c6.js";import"./vaadin-grid-sort-column-1a0e592f.js";import"./iconset-b6786ef5.js";import"./backend-ai-error-log-list-815dce1b.js";let b=class extends s{constructor(){super(),this._lists=Object()}static get styles(){return[a,e,t,r,i,o`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return c`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};d([l({type:Object})],b.prototype,"_lists",void 0),b=d([n("backend-ai-error-log-view")],b);var p=b;export default p;
