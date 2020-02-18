import{k as a,I as i,j as r,ad as s,l as e,a as o,h as t,_ as d,p as l,c}from"./backend-ai-console-f442a6b8.js";import{B as p}from"./backend-ai-page-98b8ad16.js";import"./lablup-loading-indicator-fe6978c9.js";import"./iron-resizable-behavior-1552c11e.js";import"./vaadin-progress-bar-0ea54e72.js";import"./radio-behavior-0dc5181d.js";import"./shadow-a7d1713f.js";import"./index-bb02ee2d.js";import"./index-baab4736.js";import"./av-icons-4bfc1b50.js";import"./paper-dialog-dab367c8.js";import"./paper-dialog-scrollable-21a187c8.js";import"./vaadin-grid-d72d8ff2.js";import"./vaadin-grid-selection-column-8deeb859.js";import"./vaadin-grid-sorter-d8dd722c.js";import"./vaadin-grid-sort-column-f7aa6beb.js";import"./index-eb0bd4f9.js";import"./backend-ai-indicator-c5b0b1ab.js";import"./backend-ai-error-log-list-85e49347.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let b=class extends p{constructor(){super(),this._lists=Object()}static get styles(){return[a,i,r,s,e,o`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return t`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};d([l({type:Object})],b.prototype,"_lists",void 0),b=d([c("backend-ai-error-log-view")],b);var n=b;export default n;
