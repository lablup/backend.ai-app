import{_ as t,p as e,c as a,B as i,d as r,I as o,a as s,b as l,h as n,t as p}from"./backend-ai-console-52b9eb55.js";import"./vaadin-grid-sorter-4d8e13ce.js";import"./iron-iconset-svg-04ff383c.js";import"./expansion-3641213c.js";import"./vaadin-grid-selection-column-182b798b.js";import"./vaadin-grid-sort-column-c8394169.js";import"./iconset-b6786ef5.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let d=class extends i{constructor(){super(),this.timestamp="",this.errorType="",this.requestUrl="",this.statusCode="",this.statusText="",this.title="",this.message="",this.logs=Array(),this._selected_items=Array(),this.spinner=Object(),this._grid=Object(),this.logView=Object(),this._pageSize=25,this._currentPage=1,this._totalLogCount=0}static get styles(){return[r,o,s,l`
        vaadin-grid {
          width: 100%;
          border: 0;
          font-size: 12px;
          height: calc(100vh - 275px);
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

        wl-button.pagination[disabled] wl-icon.pagination {
          color: var(--paper-grey-300);
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
          --button-bg-disabled: var(--paper-grey-50);
          --button-color-disabled: var(--paper-grey-200);
        }
      `]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this._updatePageItemSize(),this._grid=this.shadowRoot.querySelector("#list-grid"),globalThis.backendaiclient&&globalThis.backendaiclient.is_admin||(this.shadowRoot.querySelector("vaadin-grid").style.height="calc(100vh - 275px)!important"),this.notification=globalThis.lablupNotification,document.addEventListener("log-message-refresh",()=>this._refreshLogData()),document.addEventListener("log-message-clear",()=>this._clearLogData())}_updatePageItemSize(){let t=window.innerHeight-275-30;this._pageSize=Math.floor(t/31)}_refreshLogData(){this.spinner.show(),this._updatePageItemSize(),this.logs=JSON.parse(localStorage.getItem("backendaiconsole.logs")||"{}"),this._totalLogCount=this.logs.length>0?this.logs.length:1,this._updateItemsFromPage(1),this._grid.clearCache(),this.spinner.hide()}_clearLogData(){this.logs=[],this.logView=[],this._totalLogCount=1,this._currentPage=1,this._grid.clearCache()}_updateItemsFromPage(t){if("number"!=typeof t){let e=t.target;"button"!==e.role&&(e=t.target.closest("wl-button")),"previous-page"===e.id?this._currentPage-=1:this._currentPage+=1}let e=(this._currentPage-1)*this._grid.pageSize,a=this._currentPage*this._grid.pageSize;if(this.logs.length>0){let t=this.logs.slice(e,a);t.forEach(t=>{t.timestamp_hr=this._humanReadableTime(t.timestamp)}),this.logView=t}}_humanReadableTime(t){return(t=new Date(t)).toLocaleString()}_toISOTime(t){return(t=new Date(t)).toISOString()}render(){return n`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <vaadin-grid id="list-grid" page-size="${this._pageSize}"
                   theme="row-stripes column-borders compact wrap-cell-content"
                   aria-label="Error logs" .items="${this.logView}">
        <vaadin-grid-column width="250px" flex-grow="0" text-align="start" auto-width header="${p("logs.TimeStamp")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span class="monospace">[[item.timestamp_hr]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${p("logs.Status")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.statusCode]] [[item.statusText]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${p("logs.ErrorTitle")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.title]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${p("logs.ErrorMessage")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.message]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="50px" flex-grow="0" text-align="start" auto-width header="${p("logs.ErrorType")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.type]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${p("logs.Method")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.requestMethod]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable flex-grow="0" text-align="start" auto-width header="${p("logs.RequestUrl")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span class="monospace">[[item.requestUrl]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable auto-width flex-grow="0" text-align="start" header="${p("logs.Parameters")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span class="monospace">[[item.requestParameters]]</span>
              </div>
          </template>
        </vaadin-grid-column>
      </vaadin-grid>
      <div class="horizontal center-justified layout flex" style="padding: 10px;border-top:1px solid #ccc;">
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
    `}};t([e({type:String})],d.prototype,"timestamp",void 0),t([e({type:String})],d.prototype,"errorType",void 0),t([e({type:String})],d.prototype,"requestUrl",void 0),t([e({type:String})],d.prototype,"statusCode",void 0),t([e({type:String})],d.prototype,"statusText",void 0),t([e({type:String})],d.prototype,"title",void 0),t([e({type:String})],d.prototype,"message",void 0),t([e({type:Array})],d.prototype,"logs",void 0),t([e({type:Array})],d.prototype,"_selected_items",void 0),t([e({type:Object})],d.prototype,"spinner",void 0),t([e({type:Object})],d.prototype,"_grid",void 0),t([e({type:Object})],d.prototype,"logView",void 0),t([e({type:Number})],d.prototype,"_pageSize",void 0),t([e({type:Number})],d.prototype,"_currentPage",void 0),t([e({type:Number})],d.prototype,"_totalLogCount",void 0),d=t([a("backend-ai-error-log-list")],d);
