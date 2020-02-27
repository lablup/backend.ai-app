import{k as a,I as i,j as r,ac as s,l as t,a as o,h as e,_ as d,p as c,c as l}from"./backend-ai-console-1d877d5d.js";import{B as n}from"./backend-ai-page-45fe2b63.js";import"./lablup-loading-indicator-9d46dcc5.js";import"./iron-resizable-behavior-e60ed36f.js";import"./vaadin-progress-bar-649bad0b.js";import"./radio-behavior-7b99f6a8.js";import"./shadow-3c435ca0.js";import"./index-209c99c0.js";import"./index-12c33a94.js";import"./av-icons-7b59ac74.js";import"./paper-dialog-scrollable-0bf0eca4.js";import"./vaadin-grid-46425869.js";import"./vaadin-grid-selection-column-198d60a7.js";import"./vaadin-grid-sorter-7cd4a75c.js";import"./vaadin-grid-sort-column-743cfaad.js";import"./index-fd1f0395.js";import"./backend-ai-indicator-1f5913ac.js";import"./backend-ai-error-log-list-ac261130.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let p=class extends n{constructor(){super(),this._lists=Object()}static get styles(){return[a,i,r,s,t,o`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return e`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};d([c({type:Object})],p.prototype,"_lists",void 0),p=d([l("backend-ai-error-log-view")],p);var b=p;export default b;
