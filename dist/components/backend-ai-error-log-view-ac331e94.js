import{d as a,e as i,I as r,a as s,C as e,f as t,b as o,h as d,_ as c,p as n,c as l}from"./backend-ai-console-ac2839c6.js";import"./lablup-loading-indicator-5b28ed66.js";import"./iron-resizable-behavior-5743f649.js";import"./vaadin-progress-bar-c86f5342.js";import"./vaadin-grid-369d5b12.js";import"./iron-iconset-svg-c8634dd5.js";import"./radio-behavior-9563ef20.js";import"./expansion-3b2c3121.js";import"./label-e4aee937.js";import"./vaadin-grid-selection-column-0e68f6ca.js";import"./vaadin-grid-sorter-250e386d.js";import"./vaadin-grid-sort-column-8ac4f625.js";import"./iconset-2993a19c.js";import"./divider-eafbf648.js";import"./backend-ai-indicator-e4527a9c.js";import"./backend-ai-error-log-list-8b466312.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let p=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[i,r,s,e,t,o`
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
