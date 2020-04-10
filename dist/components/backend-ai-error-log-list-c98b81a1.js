import{_ as t,p as e,c as a,d as i,e as r,I as o,a as s,b as l,h as n,t as d}from"./backend-ai-console-83b9280d.js";import"./lablup-loading-indicator-7430e51c.js";import"./iron-resizable-behavior-de55f964.js";import"./vaadin-progress-bar-1df69f2a.js";import"./vaadin-grid-4911f4dc.js";import"./iron-iconset-svg-9534ec82.js";import"./expansion-43379917.js";import"./label-129cd751.js";import"./vaadin-grid-selection-column-674d4aac.js";import"./vaadin-grid-sorter-a00e6fad.js";import"./vaadin-grid-sort-column-7c57152f.js";import"./iconset-2efda350.js";import"./backend-ai-indicator-ae5fb2b4.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let g=class extends i{constructor(){super(),this.timestamp="",this.errorType="",this.requestUrl="",this.statusCode="",this.statusText="",this.title="",this.message="",this.logs=Array(),this._selected_items=Array(),this.loadingIndicator=Object(),this._grid=Object(),this.logView=Object(),this._pageSize=25,this._currentPage=1,this._totalLogCount=0}static get styles(){return[r,o,s,l`
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
      `]}firstUpdated(){this.loadingIndicator=this.shadowRoot.querySelector("#loading-indicator"),this._grid=this.shadowRoot.querySelector("#list-grid"),globalThis.backendaiclient&&globalThis.backendaiclient.is_admin||(this.shadowRoot.querySelector("vaadin-grid").style.height="calc(100vh - 320px)!important"),this.notification=globalThis.lablupNotification,document.addEventListener("log-message-refresh",()=>this._refreshLogData()),document.addEventListener("log-message-clear",()=>this._clearLogData())}_refreshLogData(){this.loadingIndicator.show(),this.logs=JSON.parse(localStorage.getItem("backendaiconsole.logs")||"{}"),this._totalLogCount=this.logs.length>0?this.logs.length:1,this._updateItemsFromPage(1),this._grid.clearCache(),this.loadingIndicator.hide()}_clearLogData(){this.logs=[],this.logView=[],this._totalLogCount=1,this._currentPage=1,this._grid.clearCache()}_updateItemsFromPage(t){if("number"!=typeof t){let e=t.target;"button"!==e.role&&(e=t.target.closest("wl-button")),"previous-page"===e.id?this._currentPage-=1:this._currentPage+=1}let e=(this._currentPage-1)*this._grid.pageSize,a=this._currentPage*this._grid.pageSize;this.logs.length>0&&(this.logView=this.logs.slice(e,a))}render(){return n`
      <lablup-loading-indicator id="loading-indicator"></lablup-loading-indicator>
      <vaadin-grid id="list-grid" page-size="${this._pageSize}"
                   theme="row-stripes column-borders compact wrap-cell-content"
                   aria-label="Error logs" .items="${this.logView}">
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${d("logs.TimeStamp")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.timestamp]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${d("logs.Status")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.statusCode]] [[item.statusText]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${d("logs.ErrorTitle")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.title]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${d("logs.ErrorMessage")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.message]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${d("logs.Method")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.requestMethod]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${d("logs.RequestUrl")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.requestUrl]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${d("logs.Parameters")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.requestParameters]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${d("logs.ErrorType")}">
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
    `}};t([e({type:String})],g.prototype,"timestamp",void 0),t([e({type:String})],g.prototype,"errorType",void 0),t([e({type:String})],g.prototype,"requestUrl",void 0),t([e({type:String})],g.prototype,"statusCode",void 0),t([e({type:String})],g.prototype,"statusText",void 0),t([e({type:String})],g.prototype,"title",void 0),t([e({type:String})],g.prototype,"message",void 0),t([e({type:Array})],g.prototype,"logs",void 0),t([e({type:Array})],g.prototype,"_selected_items",void 0),t([e({type:Object})],g.prototype,"loadingIndicator",void 0),t([e({type:Object})],g.prototype,"_grid",void 0),t([e({type:Object})],g.prototype,"logView",void 0),t([e({type:Number})],g.prototype,"_pageSize",void 0),t([e({type:Number})],g.prototype,"_currentPage",void 0),t([e({type:Number})],g.prototype,"_totalLogCount",void 0),g=t([a("backend-ai-error-log-list")],g);
