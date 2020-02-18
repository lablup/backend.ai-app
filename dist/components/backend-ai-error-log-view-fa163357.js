import{k as a,I as i,j as r,ad as s,l as e,a as o,h as t,_ as d,p as l,c}from"./backend-ai-console-1bd0067f.js";import{B as p}from"./backend-ai-page-a399cbad.js";import"./lablup-loading-indicator-2d2e68ff.js";import"./iron-resizable-behavior-5a523da0.js";import"./vaadin-progress-bar-0440c174.js";import"./radio-behavior-5893f492.js";import"./shadow-25e1cf6b.js";import"./index-7bb018aa.js";import"./index-85637cc4.js";import"./av-icons-362fe454.js";import"./paper-dialog-de7b9f0f.js";import"./paper-dialog-scrollable-e632e218.js";import"./vaadin-grid-d7dd2fe4.js";import"./vaadin-grid-selection-column-52a56899.js";import"./vaadin-grid-sorter-c2c3fb18.js";import"./vaadin-grid-sort-column-9bdb2b9b.js";import"./index-68c170e9.js";import"./backend-ai-indicator-7a3d9245.js";import"./backend-ai-error-log-list-2474a323.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let n=class extends p{constructor(){super(),this._lists=Object()}static get styles(){return[a,i,r,s,e,o`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return t`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};d([l({type:Object})],n.prototype,"_lists",void 0),n=d([c("backend-ai-error-log-view")],n);var b=n;export default b;
