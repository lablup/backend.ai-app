import{k as a,I as i,j as r,ac as s,l as e,a as t,h as o,_ as d,p as c,c as l}from"./backend-ai-console-e6443854.js";import{B as n}from"./backend-ai-page-242e410a.js";import"./lablup-loading-indicator-cb732ee9.js";import"./iron-resizable-behavior-5e01cf94.js";import"./vaadin-progress-bar-9a520a03.js";import"./radio-behavior-2df89a14.js";import"./shadow-da85ec82.js";import"./index-0c1b2dd1.js";import"./index-58c244d1.js";import"./av-icons-3f38348d.js";import"./paper-dialog-scrollable-df1fc4cb.js";import"./vaadin-grid-42eb636a.js";import"./vaadin-grid-selection-column-34a9e995.js";import"./vaadin-grid-sorter-6f6b93ec.js";import"./vaadin-grid-sort-column-edc73228.js";import"./index-8c06f33b.js";import"./backend-ai-indicator-16350b03.js";import"./backend-ai-error-log-list-062fad93.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let p=class extends n{constructor(){super(),this._lists=Object()}static get styles(){return[a,i,r,s,e,t`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return o`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};d([c({type:Object})],p.prototype,"_lists",void 0),p=d([l("backend-ai-error-log-view")],p);var b=p;export default b;
