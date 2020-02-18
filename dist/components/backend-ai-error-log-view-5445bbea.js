import{k as a,I as i,j as r,ad as e,l as s,a as o,h as t,_ as d,p as c,c as l}from"./backend-ai-console-8e1df5c4.js";import{B as p}from"./backend-ai-page-3c07844a.js";import"./lablup-loading-indicator-8b2976a3.js";import"./iron-resizable-behavior-0ae15bff.js";import"./vaadin-progress-bar-1a5e4a20.js";import"./radio-behavior-c3b80951.js";import"./shadow-e28c4f92.js";import"./index-c84daa6c.js";import"./index-e0819f67.js";import"./av-icons-7ffe9e95.js";import"./paper-dialog-cb042a26.js";import"./paper-dialog-scrollable-bf87e77c.js";import"./vaadin-grid-73a9690a.js";import"./vaadin-grid-selection-column-be96e3a6.js";import"./vaadin-grid-sorter-515aeafe.js";import"./vaadin-grid-sort-column-8dd0e8f1.js";import"./index-56c30f90.js";import"./backend-ai-indicator-01c5dca6.js";import"./backend-ai-error-log-list-b77342ff.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let n=class extends p{constructor(){super(),this._lists=Object()}static get styles(){return[a,i,r,e,s,o`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return t`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};d([c({type:Object})],n.prototype,"_lists",void 0),n=d([l("backend-ai-error-log-view")],n);var b=n;export default b;
