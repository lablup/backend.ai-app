import{d as a,e as i,I as r,a as s,D as e,f as t,b as o,h as d,_ as c,p as l,c as p}from"./backend-ai-console-284685c7.js";import"./iron-resizable-behavior-eeda571e.js";import"./lablup-loading-indicator-3faeff25.js";import"./vaadin-progress-bar-01e0851c.js";import"./radio-behavior-2b43bd0c.js";import"./paper-icon-button-d968ca7f.js";import"./shadow-d8679dfa.js";import"./expansion-3cac6714.js";import"./label-37d81cdc.js";import"./av-icons-0dade827.js";import"./paper-dialog-scrollable-0c739eaa.js";import"./vaadin-grid-ed9f4151.js";import"./vaadin-grid-selection-column-5ba54f2f.js";import"./vaadin-grid-sorter-1cdb77de.js";import"./vaadin-grid-sort-column-b087df5d.js";import"./divider-0454c933.js";import"./backend-ai-indicator-8a817de1.js";import"./backend-ai-error-log-list-4440823f.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let n=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[i,r,s,e,t,o`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return d`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};c([l({type:Object})],n.prototype,"_lists",void 0),n=c([p("backend-ai-error-log-view")],n);var b=n;export default b;
