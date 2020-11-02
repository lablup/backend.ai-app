import{_ as t,p as e,c as a,B as i,d as r,I as o,a as s,b as l,h as n,t as d}from"./backend-ai-console-125e4b92.js";import"./expansion-9a7a977f.js";import"./vaadin-grid-sorter-f0db9e83.js";import"./vaadin-grid-selection-column-056a9949.js";import"./vaadin-grid-sort-column-cab34161.js";import"./iconset-a5679453.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let p=class extends i{constructor(){super(),this.timestamp="",this.errorType="",this.requestUrl="",this.statusCode="",this.statusText="",this.title="",this.message="",this.logs=Array(),this._selected_items=Array(),this.spinner=Object(),this._grid=Object(),this.logView=Object(),this._pageSize=25,this._currentPage=1,this._totalLogCount=0}static get styles(){return[r,o,s,l`
        vaadin-grid {
          width: 100%;
          border: 0;
          font-size: 12px;
          height: calc(100vh - 305px);
        }

        vaadin-grid-cell {
          font-size: 10px;
        }

        vaadin-grid#list-grid {
          border-top: 1px solid #dbdbdb;
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
      `]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this._updatePageItemSize(),this._grid=this.shadowRoot.querySelector("#list-grid"),globalThis.backendaiclient&&globalThis.backendaiclient.is_admin||(this.shadowRoot.querySelector("vaadin-grid").style.height="calc(100vh - 275px)!important"),this.notification=globalThis.lablupNotification,document.addEventListener("log-message-refresh",(()=>this._refreshLogData())),document.addEventListener("log-message-clear",(()=>this._clearLogData()))}_updatePageItemSize(){let t=window.innerHeight-275-30;this._pageSize=Math.floor(t/31)}_refreshLogData(){this.spinner.show(),this._updatePageItemSize(),this.logs=JSON.parse(localStorage.getItem("backendaiconsole.logs")||"{}"),this._totalLogCount=this.logs.length>0?this.logs.length:1,this._updateItemsFromPage(1),this._grid.clearCache(),this.spinner.hide()}_clearLogData(){this.logs=[],this.logView=[],this._totalLogCount=1,this._currentPage=1,this._grid.clearCache()}_updateItemsFromPage(t){if("number"!=typeof t){let e=t.target;"button"!==e.role&&(e=t.target.closest("mwc-icon-button")),"previous-page"===e.id?this._currentPage-=1:this._currentPage+=1}let e=(this._currentPage-1)*this._grid.pageSize,a=this._currentPage*this._grid.pageSize;if(this.logs.length>0){let t=this.logs.slice(e,a);t.forEach((t=>{t.timestamp_hr=this._humanReadableTime(t.timestamp)})),this.logView=t}}_humanReadableTime(t){return(t=new Date(t)).toLocaleString()}_toISOTime(t){return(t=new Date(t)).toISOString()}render(){return n`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <vaadin-grid id="list-grid" page-size="${this._pageSize}"
                   theme="row-stripes column-borders compact wrap-cell-content"
                   aria-label="Error logs" .items="${this.logView}">
        <vaadin-grid-column width="250px" flex-grow="0" text-align="start" auto-width header="${d("logs.TimeStamp")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span class="monospace">[[item.timestamp_hr]]</span>
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
        <vaadin-grid-column width="50px" flex-grow="0" text-align="start" auto-width header="${d("logs.ErrorType")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span>[[item.type]]</span>
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
                <span class="monospace">[[item.requestUrl]]</span>
              </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column resizable auto-width flex-grow="0" text-align="start" header="${d("logs.Parameters")}">
          <template>
              <div class="layout vertical" error-cell$="[[item.isError]]">
                <span class="monospace">[[item.requestParameters]]</span>
              </div>
          </template>
        </vaadin-grid-column>
      </vaadin-grid>
      <div class="horizontal center-justified layout flex" style="padding: 10px;border-top:1px solid #ccc;">
        <mwc-icon-button
            class="pagination"
            id="previous-page"
            icon="navigate_before"
            ?disabled="${1===this._currentPage}"
            @click="${t=>{this._updateItemsFromPage(t)}}"></mwc-icon-button>
        <wl-label style="padding: 5px 15px 0px 15px;">
          ${this._currentPage} / ${Math.ceil(this._totalLogCount/this._pageSize)}
        </wl-label>
        <mwc-icon-button
            class="pagination"
            id="next-page"
            icon="navigate_next"
            ?disabled="${this._totalLogCount<=this._pageSize*this._currentPage}"
            @click="${t=>{this._updateItemsFromPage(t)}}"></mwc-icon-button>
      </div>
    `}};t([e({type:String})],p.prototype,"timestamp",void 0),t([e({type:String})],p.prototype,"errorType",void 0),t([e({type:String})],p.prototype,"requestUrl",void 0),t([e({type:String})],p.prototype,"statusCode",void 0),t([e({type:String})],p.prototype,"statusText",void 0),t([e({type:String})],p.prototype,"title",void 0),t([e({type:String})],p.prototype,"message",void 0),t([e({type:Array})],p.prototype,"logs",void 0),t([e({type:Array})],p.prototype,"_selected_items",void 0),t([e({type:Object})],p.prototype,"spinner",void 0),t([e({type:Object})],p.prototype,"_grid",void 0),t([e({type:Object})],p.prototype,"logView",void 0),t([e({type:Number})],p.prototype,"_pageSize",void 0),t([e({type:Number})],p.prototype,"_currentPage",void 0),t([e({type:Number})],p.prototype,"_totalLogCount",void 0),p=t([a("backend-ai-error-log-list")],p);
