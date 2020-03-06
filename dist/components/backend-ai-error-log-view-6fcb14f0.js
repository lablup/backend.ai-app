import{k as a,l as i,I as r,j as s,a9 as e,m as t,a as o,h as d,_ as c,p as l,c as n}from"./backend-ai-console-ab7f3e11.js";import"./lablup-loading-indicator-de115c53.js";import"./iron-resizable-behavior-688f52d4.js";import"./vaadin-progress-bar-af5576eb.js";import"./radio-behavior-1cbd0f8e.js";import"./paper-icon-button-32abd987.js";import"./shadow-83388c34.js";import"./index-ba3513c4.js";import"./index-104ed7f5.js";import"./av-icons-97d47f39.js";import"./paper-dialog-scrollable-20d332c4.js";import"./vaadin-grid-d044369a.js";import"./vaadin-grid-selection-column-a8a1d9ff.js";import"./vaadin-grid-sorter-e6a2a09c.js";import"./vaadin-grid-sort-column-6222e7c6.js";import"./index-41c821eb.js";import"./backend-ai-indicator-be7ef06f.js";import"./backend-ai-error-log-list-176bae96.js";
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
      `}};c([l({type:Object})],p.prototype,"_lists",void 0),p=c([n("backend-ai-error-log-view")],p);var b=p;export default b;
