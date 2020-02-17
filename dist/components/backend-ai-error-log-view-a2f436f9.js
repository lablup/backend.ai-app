import{k as a,I as i,j as r,ad as s,l as e,a as o,h as t,_ as d,p as l,c as p}from"./backend-ai-console-718d5a3e.js";import{B as c}from"./backend-ai-page-c59393e6.js";import"./lablup-loading-indicator-54b72e1f.js";import"./iron-resizable-behavior-1f5cdd15.js";import"./vaadin-progress-bar-16f22031.js";import"./radio-behavior-7e75b48a.js";import"./shadow-3fef5787.js";import"./index-3acb4c92.js";import"./index-2191793f.js";import"./av-icons-35181833.js";import"./paper-dialog-9e35700f.js";import"./paper-dialog-scrollable-d94fb13e.js";import"./vaadin-grid-3fb53cd4.js";import"./vaadin-grid-selection-column-7d8e6805.js";import"./vaadin-grid-sorter-d73d17bc.js";import"./vaadin-grid-sort-column-6959658e.js";import"./index-18bdaa3a.js";import"./backend-ai-indicator-237a0f7d.js";import"./backend-ai-error-log-list-8ce48968.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let n=class extends c{constructor(){super(),this._lists=Object()}static get styles(){return[a,i,r,s,e,o`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return t`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};d([l({type:Object})],n.prototype,"_lists",void 0),n=d([p("backend-ai-error-log-view")],n);var b=n;export default b;
