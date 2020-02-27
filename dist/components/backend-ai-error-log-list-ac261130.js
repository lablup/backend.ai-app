import{_ as t,p as e,c as a,k as i,I as r,j as o,a as s,h as l}from"./backend-ai-console-1d877d5d.js";import{B as d}from"./backend-ai-page-45fe2b63.js";import"./lablup-loading-indicator-9d46dcc5.js";import"./vaadin-progress-bar-649bad0b.js";import"./radio-behavior-7b99f6a8.js";import"./index-209c99c0.js";import"./index-12c33a94.js";import"./av-icons-7b59ac74.js";import"./paper-dialog-scrollable-0bf0eca4.js";import"./vaadin-grid-46425869.js";import"./vaadin-grid-selection-column-198d60a7.js";import"./vaadin-grid-sorter-7cd4a75c.js";import"./vaadin-grid-sort-column-743cfaad.js";import"./backend-ai-indicator-1f5913ac.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let n=class extends d{constructor(){super(),this.timestamp="",this.errorType="",this.requestUrl="",this.statusCode="",this.statusText="",this.title="",this.message="",this.logs=Array(),this._selected_items=Array(),this.loadingIndicator=Object(),this._grid=Object(),this.logView=Object(),this._pageSize=25,this._currentPage=1,this._totalLogCount=0}static get styles(){return[i,r,o,s`
        vaadin-grid {
          width: 100%;
          border: 0;
          font-size: 12px;
          height: calc(100vh - 320px);
        }

        vaadin-grid-cell {
          font-size: 10px;
        }

        [error-cell] {
          color: red;
        }

        wl-label {
          --label-font-family: Roboto, Noto, sans-serif;
          --label-color: black;
        }

        wl-icon.pagination {
          color: var(--paper-grey-700);
        }

        wl-button.pagination {
          width: 15px;
          height: 15px;
          padding: 10px;
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
          --button-bg: transparent;
          --button-bg-hover: var(--paper-teal-100);
          --button-bg-active: var(--paper-teal-600);
          --button-bg-active-flat: var(--paper-teal-600);
        }
      `]}firstUpdated(){this.loadingIndicator=this.shadowRoot.querySelector("#loading-indicator"),this._grid=this.shadowRoot.querySelector("#list-grid"),window.backendaiclient&&window.backendaiclient.is_admin||(this.shadowRoot.querySelector("vaadin-grid").style.height="calc(100vh - 320px)!important"),this.notification=window.lablupNotification,document.addEventListener("log-message-refresh",()=>this._refreshLogData()),document.addEventListener("log-message-clear",()=>this._clearLogData())}_refreshLogData(){this.loadingIndicator.show(),this.logs=JSON.parse(localStorage.getItem("backendaiconsole.logs")||"{}"),this._totalLogCount=this.logs.length>0?this.logs.length:1,this._updateItemsFromPage(1),this._grid.clearCache(),this.loadingIndicator.hide()}_clearLogData(){this.logs=[],this.logView=[],this._totalLogCount=1,this._currentPage=1,this._grid.clearCache()}_updateItemsFromPage(t){if("number"!=typeof t){let e=t.target;"button"!==e.role&&(e=t.target.closest("wl-button")),"previous-page"===e.id?this._currentPage-=1:this._currentPage+=1}let e=(this._currentPage-1)*this._grid.pageSize,a=this._currentPage*this._grid.pageSize;this.logs.length>0&&(this.logView=this.logs.slice(e,a))}render(){return l`
      <lablup-loading-indicator id="loading-indicator"></lablup-loading-indicator>
      <vaadin-grid id="list-grid" page-size="${this._pageSize}"
                   theme="row-stripes column-borders compact wrap-cell-content"
                   aria-label="Error logs" .items="${this.logView}">
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="TimeStamp">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.timestamp]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="Status">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.statusCode]] [[item.statusText]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="Error Title">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.title]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="Error Message">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.message]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="Method">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.requestMethod]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="Request Url">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.requestUrl]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="Parameters">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.requestParameters]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="Error Type">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.type]]</span>
              </div>
          </template>
        </vaadin-grid-column>
      </vaadin-grid>
      <div class="horizontal center-justified layout flex" style="padding: 10px;">
        <wl-button class="pagination" id="previous-page"
                   ?disabled="${1===this._currentPage}"
                   @click="${t=>{this._updateItemsFromPage(t)}}">
          <wl-icon class="pagination">navigate_before</wl-icon>
        </wl-button>
        <wl-label style="padding: 5px 15px 0px 15px;">
          ${this._currentPage} / ${Math.ceil(this._totalLogCount/this._pageSize)}
        </wl-label>
        <wl-button class="pagination" id="next-page"
                   ?disabled="${this._totalLogCount<=this._pageSize*this._currentPage}"
                   @click="${t=>{this._updateItemsFromPage(t)}}">
          <wl-icon class="pagination">navigate_next</wl-icon>
        </wl-button>
      </div>
    `}};t([e({type:String})],n.prototype,"timestamp",void 0),t([e({type:String})],n.prototype,"errorType",void 0),t([e({type:String})],n.prototype,"requestUrl",void 0),t([e({type:String})],n.prototype,"statusCode",void 0),t([e({type:String})],n.prototype,"statusText",void 0),t([e({type:String})],n.prototype,"title",void 0),t([e({type:String})],n.prototype,"message",void 0),t([e({type:Array})],n.prototype,"logs",void 0),t([e({type:Array})],n.prototype,"_selected_items",void 0),t([e({type:Object})],n.prototype,"loadingIndicator",void 0),t([e({type:Object})],n.prototype,"_grid",void 0),t([e({type:Object})],n.prototype,"logView",void 0),t([e({type:Number})],n.prototype,"_pageSize",void 0),t([e({type:Number})],n.prototype,"_currentPage",void 0),t([e({type:Number})],n.prototype,"_totalLogCount",void 0),n=t([a("backend-ai-error-log-list")],n);
