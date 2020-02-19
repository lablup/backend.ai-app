import{k as a,I as i,j as r,ac as s,l as e,a as o,h as t,_ as d,p as c,c as l}from"./backend-ai-console-189a2f74.js";import{B as p}from"./backend-ai-page-8a4df295.js";import"./lablup-loading-indicator-a1212a3f.js";import"./iron-resizable-behavior-0971f60c.js";import"./vaadin-progress-bar-683c9638.js";import"./radio-behavior-476019ac.js";import"./shadow-bea23c22.js";import"./index-0093599c.js";import"./index-e13f77b7.js";import"./av-icons-1a9a2927.js";import"./paper-dialog-adc04ecb.js";import"./paper-dialog-scrollable-22470fc4.js";import"./vaadin-grid-58a76692.js";import"./vaadin-grid-selection-column-e058e21a.js";import"./vaadin-grid-sorter-963873ea.js";import"./vaadin-grid-sort-column-b35bf512.js";import"./index-c46680ad.js";import"./backend-ai-indicator-f5c2dff2.js";import"./backend-ai-error-log-list-655ee089.js";
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
      `}};d([c({type:Object})],n.prototype,"_lists",void 0),n=d([l("backend-ai-error-log-view")],n);var m=n;export default m;
