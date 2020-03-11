import{d as i,e as a,I as r,a as s,z as o,f as e,b as t,h as d,_ as c,p,c as l}from"./backend-ai-console-14d10124.js";import"./lablup-loading-indicator-d581dc83.js";import"./polymer-legacy-4d33d7bd.js";import"./iron-resizable-behavior-33a9d7fa.js";import"./vaadin-progress-bar-432ef8ee.js";import"./radio-behavior-583b4374.js";import"./paper-icon-button-2254421d.js";import"./iron-iconset-svg-7f9b79bb.js";import"./iron-icons-5b385824.js";import"./shadow-dc0e6b19.js";import"./expansion-9ebb0313.js";import"./label-e1bc0c8e.js";import"./av-icons-5ae8754c.js";import"./paper-dialog-scrollable-6da5f791.js";import"./vaadin-grid-253f5dab.js";import"./vaadin-grid-selection-column-8b8ad2a0.js";import"./vaadin-grid-sorter-8aff2bf9.js";import"./vaadin-grid-sort-column-98e5fcc3.js";import"./iconset-92ff2bc9.js";import"./divider-33c1d747.js";import"./backend-ai-indicator-a5fe5e8a.js";import"./backend-ai-error-log-list-4beddb18.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let n=class extends i{constructor(){super(),this._lists=Object()}static get styles(){return[a,r,s,o,e,t`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return d`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};c([p({type:Object})],n.prototype,"_lists",void 0),n=c([l("backend-ai-error-log-view")],n);var b=n;export default b;
