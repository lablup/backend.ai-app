import{d as a,e as i,I as r,a as s,D as t,f as e,b as o,h as d,_ as c,p as n,c as l}from"./backend-ai-console-7b9ac755.js";import"./lablup-loading-indicator-e94e6bf2.js";import"./iron-resizable-behavior-5743f649.js";import"./vaadin-progress-bar-c86f5342.js";import"./vaadin-grid-369d5b12.js";import"./iron-iconset-svg-c8634dd5.js";import"./radio-behavior-377efe60.js";import"./expansion-7b8c4ad2.js";import"./label-b2639996.js";import"./vaadin-grid-selection-column-0e68f6ca.js";import"./vaadin-grid-sorter-250e386d.js";import"./vaadin-grid-sort-column-8ac4f625.js";import"./iconset-2993a19c.js";import"./divider-18a82560.js";import"./backend-ai-indicator-51aee0a8.js";import"./backend-ai-error-log-list-0c899fa9.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let p=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[i,r,s,t,e,o`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return d`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};c([n({type:Object})],p.prototype,"_lists",void 0),p=c([l("backend-ai-error-log-view")],p);var b=p;export default b;
