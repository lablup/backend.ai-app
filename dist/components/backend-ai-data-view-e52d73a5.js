import{b as e,_ as t,p as i,c as o,B as a,d as l,I as r,a as s,e as n,h as d,t as c,g as h,z as p,f as u}from"./backend-ai-webui-ecfefd57.js";import{u as m}from"./unsafe-html-50c8e728.js";import"./mwc-switch-f59712f6.js";import"./mwc-tab-bar-d449c98a.js";import"./label-eff0a3da.js";import"./select-ba899d94.js";import"./tab-group-ebfc02a3.js";import"./textfield-09191892.js";import"./chart-js-22b45d42.js";import{e as g,P as f,F as b,m as v,r as w,E as y,T as x,h as _}from"./vaadin-grid-8bd957e2.js";import"./vaadin-grid-filter-8b1c0044.js";import"./vaadin-grid-sorter-39f1b30b.js";import"./vaadin-grid-sort-column-5deea517.js";import"./vaadin-grid-selection-column-2d5f1bca.js";import"./vaadin-item-b5745005.js";import{t as F}from"./tus-4013acdb.js";import"./lablup-activity-panel-7a32eadc.js";import"./input-behavior-ada1590a.js";import"./radio-behavior-7a7c698d.js";import"./rowing-0d2117d9.js";
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class k extends(g(f)){static get is(){return"vaadin-grid-column-group"}static get properties(){return{_childColumns:{value:function(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_updateVisibleChildColumns(_childColumns)","_childColumnsChanged(_childColumns)","_groupFrozenChanged(frozen, _rootColumns)","_groupHiddenChanged(hidden, _rootColumns)","_visibleChildColumnsChanged(_visibleChildColumns)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(e,t){"hidden"===e&&(this._preventHiddenCascade=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenCascade=!1),/flexGrow|width|hidden|_childColumns/.test(e)&&this._updateFlexAndWidth(),"frozen"===e&&(this.frozen=this.frozen||t),"lastFrozen"===e&&(this._lastFrozen=this._lastFrozen||t)}_groupOrderChanged(e,t){if(t){const i=t.slice(0);if(!e)return void i.forEach((e=>e._order=0));const o=/(0+)$/.exec(e).pop().length,a=1+~~(Math.log(t.length)/Math.log(Math.LN10)),l=Math.pow(10,o-a);i[0]&&i[0]._order&&i.sort(((e,t)=>e._order-t._order)),i.forEach(((t,i)=>t._order=e+(i+1)*l))}}_groupReorderStatusChanged(e,t){void 0!==e&&void 0!==t&&t.forEach((t=>t._reorderStatus=e))}_groupResizableChanged(e,t){void 0!==e&&void 0!==t&&t.forEach((t=>t.resizable=e))}_updateVisibleChildColumns(e){this._visibleChildColumns=Array.prototype.filter.call(e,(e=>!e.hidden))}_childColumnsChanged(e){!this._autoHidden&&this.hidden&&(Array.prototype.forEach.call(e,(e=>e.hidden=!0)),this._updateVisibleChildColumns(e))}_updateFlexAndWidth(){this._visibleChildColumns&&(this._visibleChildColumns.length?this._setWidth("calc("+Array.prototype.reduce.call(this._visibleChildColumns,((e,t)=>e+" + "+(t.width||"0px").replace("calc","")),"").substring(3)+")"):this._setWidth("0px"),this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,((e,t)=>e+t.flexGrow),0)))}_groupFrozenChanged(e,t){void 0!==t&&void 0!==e&&!1!==e&&Array.from(t).forEach((t=>t.frozen=e))}_groupHiddenChanged(e,t){t&&!this._preventHiddenCascade&&(this._ignoreVisibleChildColumns=!0,t.forEach((t=>t.hidden=e)),this._ignoreVisibleChildColumns=!1),this._columnPropChanged("hidden")}_visibleChildColumnsChanged(e){this._colSpan=e.length,this._ignoreVisibleChildColumns||(0===e.length?this._autoHidden=this.hidden=!0:this.hidden&&this._autoHidden&&(this._autoHidden=this.hidden=!1))}_colSpanChanged(e,t,i){t&&(t.setAttribute("colspan",e),this._grid&&this._grid._a11yUpdateCellColspan(t,e)),i&&(i.setAttribute("colspan",e),this._grid&&this._grid._a11yUpdateCellColspan(i,e))}_getChildColumns(e){return b.getFlattenedNodes(e).filter(this._isColumnElement)}_addNodeObserver(){this._observer=new b(this,(e=>{(e.addedNodes.filter(this._isColumnElement).length>0||e.removedNodes.filter(this._isColumnElement).length>0)&&(this._preventHiddenCascade=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._preventHiddenCascade=!1,v.run((()=>{this._grid&&this._grid._updateColumnTree&&this._grid._updateColumnTree()})))})),this._observer.flush()}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}}customElements.define(k.is,k),w("vaadin-progress-bar",e`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }
      10% {
        opacity: 0;
      }
      40% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      50.1% {
        opacity: 1;
      }
      60% {
        opacity: 0;
      }
      90% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const $=document.createElement("template");$.innerHTML="\n  <style>\n    @keyframes vaadin-progress-pulse3 {\n      0% { opacity: 1; }\n      10% { opacity: 0; }\n      40% { opacity: 0; }\n      50% { opacity: 1; }\n      50.1% { opacity: 1; }\n      60% { opacity: 0; }\n      90% { opacity: 0; }\n      100% { opacity: 1; }\n    }\n  </style>\n",document.head.appendChild($.content);
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const C=e=>class extends e{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,t,i){const o=this._normalizeValue(e,t,i);this.style.setProperty("--vaadin-progress-value",o)}_valueChanged(e){this.setAttribute("aria-valuenow",e)}_minChanged(e){this.setAttribute("aria-valuemin",e)}_maxChanged(e){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,t,i){let o;return e||0==e?t>=i?o=1:(o=(e-t)/(i-t),o=Math.min(Math.max(o,0),1)):o=0,o}}
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class R extends(y(x(C(f)))){static get template(){return _`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          height: 8px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='bar'] {
          height: 100%;
        }

        [part='value'] {
          height: 100%;
          transform-origin: 0 50%;
          transform: scaleX(var(--vaadin-progress-value));
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='value'] {
          transform-origin: 100% 50%;
        }
      </style>

      <div part="bar">
        <div part="value"></div>
      </div>
    `}static get is(){return"vaadin-progress-bar"}static get version(){return"20.0.0"}}customElements.define(R.is,R);
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */
let S=class extends a{constructor(){super(),this._APIMajorVersion=5,this.storageType="general",this.folders=Object(),this.folderInfo=Object(),this.is_admin=!1,this.enableStorageProxy=!1,this.authenticated=!1,this.renameFolderName="",this.deleteFolderName="",this.leaveFolderName="",this.explorer=Object(),this.explorerFiles=[],this.existingFile="",this.invitees=[],this.selectedFolder="",this.selectedFolderType="",this.downloadURL="",this.uploadFiles=[],this.fileUploadQueue=[],this.fileUploadCount=0,this.concurrentFileUploadLimit=2,this.vhost="",this.vhosts=[],this.allowedGroups=[],this.fileListGrid=Object(),this.indicator=Object(),this.notification=Object(),this.renameFileDialog=Object(),this.deleteFileDialog=Object(),this.downloadFileDialog=Object(),this.sessionLauncher=Object(),this.spinner=Object(),this.allowed_folder_type=[],this.uploadFilesExist=!1,this._boundIndexRenderer=Object(),this._boundTypeRenderer=Object(),this._boundFolderListRenderer=Object(),this._boundControlFolderListRenderer=Object(),this._boundControlFileListRenderer=Object(),this._boundPermissionViewRenderer=Object(),this._boundOwnerRenderer=Object(),this._boundFileNameRenderer=Object(),this._boundCreatedTimeRenderer=Object(),this._boundPermissionRenderer=Object(),this._boundCloneableRenderer=Object(),this._uploadFlag=!0,this._folderRefreshing=!1,this.lastQueryTime=0,this.isWritable=!1,this.permissions=["Read-Write","Read-Only","Delete"],this._maxFileUploadSize=-1,this.oldFileExtension="",this.newFileExtension="",this.is_dir=!1,this.minimumResource={cpu:1,mem:.5},this.filebrowserSupportedImages=[],this._boundIndexRenderer=this.indexRenderer.bind(this),this._boundTypeRenderer=this.typeRenderer.bind(this),this._boundControlFolderListRenderer=this.controlFolderListRenderer.bind(this),this._boundControlFileListRenderer=this.controlFileListRenderer.bind(this),this._boundPermissionViewRenderer=this.permissionViewRenderer.bind(this),this._boundCloneableRenderer=this.CloneableRenderer.bind(this),this._boundOwnerRenderer=this.OwnerRenderer.bind(this),this._boundFileNameRenderer=this.fileNameRenderer.bind(this),this._boundCreatedTimeRenderer=this.createdTimeRenderer.bind(this),this._boundPermissionRenderer=this.permissionRenderer.bind(this),this._boundFolderListRenderer=this.folderListRenderer.bind(this)}static get styles(){return[l,r,s,n,e`
        vaadin-grid {
          border: 0 !important;
        }

        vaadin-grid.folderlist {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 230px);
        }

        vaadin-grid.explorer {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 370px);
        }

        span.title {
          margin: auto 10px;
          min-width: 35px;
        }

        ul {
          padding-left: 0;
        }

        ul li {
          list-style: none;
          font-size: 13px;
        }

        span.indicator {
          width: 100px;
          font-size: 10px;
        }

        .info-indicator {
          min-width: 90px;
          padding: 0 10px;
        }

        div.big.indicator {
          font-size: 48px;
          margin-top:10px;
          margin-bottom: 10px;
        }

        .folder-action-buttons wl-button {
          margin-right: 10px;
        }

        wl-button > wl-icon {
          --icon-size: 24px;
          padding: 0;
        }

        wl-icon {
          --icon-size: 16px;
          padding: 0;
        }

        wl-button.button {
          width: 330px;
        }

        mwc-icon-button.tiny {
          width: 35px;
          height: 35px;
        }

        mwc-icon.cloneable {
          padding-top: 10px;
        }

        .warning {
          color: red;
        }

        vaadin-item {
          font-size: 13px;
          font-weight: 100;
        }

        #folder-explorer-dialog {
          width: calc(100% - 250px); /* 250px is width for drawer menu */
          --component-height: calc(100vh - 200px); /* calc(100vh - 170px); */
          right: 0;
          top: 0;
          margin: 170px 0 0 0;
        }

        #folder-explorer-dialog.mini_ui {
          width: calc(100% - 88px); /* 88px is width for mini-ui icon of drawer menu */
        }

        #folder-explorer-dialog vaadin-grid vaadin-grid-column {
          height: 32px !important;
        }

        #folder-explorer-dialog vaadin-grid mwc-icon-button {
          --mdc-icon-size: 24px;
          --mdc-icon-button-size: 28px;
        }

        vaadin-text-field {
          --vaadin-text-field-default-width: auto;
        }

        div.breadcrumb {
          color: #637282;
          font-size: 1em;
          margin-bottom: 10px;
        }

        div.breadcrumb span:first-child {
          display: none;
        }

        .breadcrumb li:before {
          padding: 3px;
          transform: rotate(-45deg) translateY(-2px);
          transition: color ease-in .2s;
          border: solid;
          border-width: 0 2px 2px 0;
          border-color: #242424;
          margin-right: 10px;
          content: '';
          display: inline-block;
        }

        .breadcrumb li {
          display: inline-block;
          font-size: 16px;
        }

        .breadcrumb mwc-icon-button {
          --mdc-icon-size: 20px;
          --mdc-icon-button-size: 22px;
        }

        mwc-textfield {
          width: 100%;
          --mdc-theme-primary: #242424;
          --mdc-text-field-fill-color: transparent;
        }

        mwc-textfield.red {
          --mdc-theme-primary: var(--paper-red-400) !important;
        }

        mwc-button {
          --mdc-typography-button-font-size: 12px;
        }

        wl-button.goto {
          margin: 0;
          padding: 5px;
          min-width: 0;
        }

        wl-button.goto:last-of-type {
          font-weight: bold;
        }

        mwc-button#readonly-btn {
          width: 150px;
        }

        div#upload {
          margin: 0;
          padding: 0;
        }

        div#dropzone {
          display: none;
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          z-index: 10;
        }

        div#dropzone, div#dropzone p {
          margin: 0;
          padding: 0;
          width: 100%;
          background: rgba(211, 211, 211, .5);
          text-align: center;
        }

        .progress {
          padding: 30px 10px;
          border: 1px solid lightgray;
        }

        .progress-item {
          padding: 10px 30px;
        }

        wl-button {
          --button-bg: var(--paper-orange-50);
          --button-bg-hover: var(--paper-orange-100);
          --button-bg-active: var(--paper-orange-600);
          color: var(--paper-orange-900);
        }

        backend-ai-dialog mwc-textfield,
        backend-ai-dialog mwc-select {
          --mdc-typography-font-family: var(--general-font-family);
          --mdc-typography-label-font-size: 12px;
          --mdc-theme-primary: var(--general-textfield-selected-color);
        }

        #textfields wl-textfield,
        wl-label {
          margin-bottom: 20px;
        }

        wl-label {
          --label-font-family: 'Ubuntu', Roboto;
          --label-color: black;
        }
        wl-checkbox {
          --checkbox-color: var(--paper-orange-900);
          --checkbox-color-checked: var(--paper-orange-900);
          --checkbox-bg-checked: var(--paper-orange-900);
          --checkbox-color-disabled-checked: var(--paper-orange-900);
          --checkbox-bg-disabled-checked: var(--paper-orange-900);
        }

        #modify-permission-dialog {
          --component-min-width: 600px;
        }

        backend-ai-dialog {
          --component-min-width: 350px;
        }

        .apply-grayscale {
          -webkit-filter: grayscale(1.0);
          filter: grayscale(1.0);
        }

        img#filebrowser-img {
          width:24px;
          margin:15px 10px;
        }

        @media screen and (max-width: 700px) {
          #folder-explorer-dialog,
          #folder-explorer-dialog.mini_ui {
            min-width: 410px;
            --component-width: 100%;
            width: 100%;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            left: 0px;
            right: 0px;
          }
        }

        @media screen and (max-width: 750px) {
          #folder-explorer-dialog,
          #folder-explorer-dialog.mini_ui {
            --component-width: auto;
          }

          mwc-button {
            width: auto;
          }
          mwc-button > span {
            display: none;
          }
          #modify-permission-dialog {
            --component-min-width: 100%;
          }
        }

        @media screen and (min-width: 900px) {
          #folder-explorer-dialog,
          #folder-explorer-dialog.mini_ui
           {
            --component-width: calc(100% - 45px); /* calc(100% - 30px); */
          }
        }
      `]}_toggleCheckbox(){const e=this.shadowRoot.querySelectorAll(".multiple-action-buttons");this.fileListGrid.selectedItems.length>0?[].forEach.call(e,(e=>{e.style.display="block"})):[].forEach.call(e,(e=>{e.style.display="none"}))}render(){return d`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <vaadin-grid class="folderlist" theme="row-stripes column-borders wrap-cell-content compact" column-reordering-allowed aria-label="Folder list" .items="${this.folders}">
        <vaadin-grid-column width="40px" flex-grow="0" resizable header="#" text-align="center" .renderer="${this._boundIndexRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column width="200px" flex-grow="0" resizable .renderer="${this._boundFolderListRenderer}">
          <template class="header">
            <div class="horizontal layout center justified flex" style="margin-right:15px;">
              <span class="title">${c("data.folders.Name")}</span>
              <vaadin-grid-sorter path="name" direction="asc" style="padding:0 10px;">
                <vaadin-grid-filter path="name" value="[[_filterName]]">
                  <vaadin-text-field slot="filter" focus-target theme="small" value="{{_filterName::input}}">
                  </vaadin-text-field>
                </vaadin-grid-filter>
              </vaadin-grid-sorter>
            </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="135px" flex-grow="0" resizable  header="ID">
          <template>
            <div class="layout vertical">
              <span class="indicator monospace">[[item.id]]</span>
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column width="105px" flex-grow="0" resizable header="${c("data.folders.Location")}">
          <template>
            <div class="layout vertical">
              <span>[[item.host]]</span>
            </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="45px" flex-grow="0" resizable header="${c("data.folders.Type")}" .renderer="${this._boundTypeRenderer}"></vaadin-grid-column>
        <vaadin-grid-column width="85px" flex-grow="0" resizable header="${c("data.folders.Permission")}" .renderer="${this._boundPermissionViewRenderer}"></vaadin-grid-column>
        <vaadin-grid-column auto-width flex-grow="0" resizable header="${c("data.folders.Owner")}" .renderer="${this._boundOwnerRenderer}"></vaadin-grid-column>
        ${this.enableStorageProxy?d`
          <!--<vaadin-grid-column
              auto-width flex-grow="0" resizable header="${c("data.folders.Cloneable")}"
              .renderer="${this._boundCloneableRenderer}"></vaadin-grid-column>`:d``}
        <vaadin-grid-column auto-width resizable header="${c("data.folders.Control")}" .renderer="${this._boundControlFolderListRenderer}"></vaadin-grid-column>-->
      </vaadin-grid>

      <backend-ai-dialog id="folder-setting-dialog" fixed backdrop>
        <span slot="title">${c("data.folders.FolderOptionUpdate")}</span>
        <div slot="content" class="vertical layout">
        <mwc-textfield id="clone-folder-src" label="${c("data.ExistingFolderName")}" value="${this.renameFolderName}"
          disabled></mwc-textfield>
          <mwc-textfield class="red" id="new-folder-name" label="${c("data.folders.TypeNewFolderName")}"
            pattern="^[a-zA-Z0-9\._-]*$" autoValidate validationMessage="${c("data.Allowslettersnumbersand-_dot")}"
            style="width:320px;" maxLength="64" placeholder="${h("maxLength.64chars")}"
            @change="${()=>{this._validateFolderName(!0)}}"></mwc-textfield>
          <div class="vertical center layout" id="dropdown-area">
            <mwc-select id="update-folder-permission" style="width:100%;" label="${c("data.Permission")}"
              @opened="${()=>this._controlHeightByPermissionCount(!0)}"
              @closed="${()=>this._controlHeightByPermissionCount()}">
              ${this.permissions.map(((e,t)=>d`
                <mwc-list-item value="${e}">${e}</mwc-list-item>
              `))}
            </mwc-select>
          </div>
          ${this.enableStorageProxy?d`
          <!--<div class="horizontal layout flex wrap center justified">
            <p style="color:rgba(0, 0, 0, 0.6);">
              ${c("data.folders.Cloneable")}
            </p>
            <mwc-switch id="update-folder-cloneable" style="margin-right:10px;">
            </mwc-switch>
          </div>-->
          `:d``}
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button unelevated fullwidth type="submit" icon="edit" id="update-button" @click="${()=>this._updateFolder()}">
            ${c("data.Update")}
          </mwc-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="delete-folder-dialog" fixed backdrop>
        <span slot="title">${c("data.folders.DeleteAFolder")}</span>
        <div slot="content" style="width:100%;">
          <div class="warning" style="margin-left:16px;">${c("dialog.warning.CannotBeUndone")}</div>
          <mwc-textfield class="red" id="delete-folder-name" label="${c("data.folders.TypeFolderNameToDelete")}"
                         maxLength="64" placeholder="${h("maxLength.64chars")}"></mwc-textfield>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button unelevated fullwidth type="submit" icon="close" id="delete-button" @click="${()=>this._deleteFolderWithCheck()}">
            ${c("data.folders.Delete")}
          </mwc-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="leave-folder-dialog" fixed backdrop>
        <span slot="title">${c("data.folders.LeaveAFolder")}</span>
        <div slot="content">
          <div class="warning" style="margin-left:16px;">${c("dialog.warning.CannotBeUndone")}</div>
          <mwc-textfield class="red" id="leave-folder-name" label="${c("data.folders.TypeFolderNameToLeave")}"
                         maxLength="64" placeholder="${h("maxLength.64chars")}"></mwc-textfield>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button unelevated fullwidth type="submit" id="leave-button" @click="${()=>this._leaveFolderWithCheck()}">
            ${c("data.folders.Leave")}
          </mwc-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="info-folder-dialog" fixed backdrop>
        <span slot="title">${this.folderInfo.name}</span>
        <div slot="content" role="listbox" style="margin: 0;width:100%;">
          <div class="horizontal justified layout wrap" style="margin-top:15px;">
              <div class="vertical layout center info-indicator">
                <div class="big indicator">${this.folderInfo.host}</div>
                <span>${c("data.folders.Location")}</span>
              </div>
            <div class="vertical layout center info-indicator">
              <div class="big indicator">${this.folderInfo.numFiles}</div>
              <span>${c("data.folders.NumberOfFiles")}</span>
            </div>
          </div>
          <mwc-list>
            <mwc-list-item twoline>
              <span><strong>ID</strong></span>
              <span class="monospace" slot="secondary">${this.folderInfo.id}</span>
            </mwc-list-item>
            ${this.folderInfo.is_owner?d`
              <mwc-list-item twoline>
                <span><strong>${c("data.folders.Ownership")}</strong></span>
                <span slot="secondary">${c("data.folders.DescYouAreFolderOwner")}</span>
              </mwc-list-item>
            `:d``}
            <mwc-list-item twoline>
              <span><strong>${c("data.folders.Permission")}</strong></span>
              <div slot="secondary" class="horizontal layout">
              ${this.folderInfo.permission?d`
                ${this._hasPermission(this.folderInfo,"r")?d`
                    <lablup-shields app="" color="green"
                                    description="R" ui="flat"></lablup-shields>`:d``}
                ${this._hasPermission(this.folderInfo,"w")?d`
                    <lablup-shields app="" color="blue"
                                    description="W" ui="flat"></lablup-shields>`:d``}
                ${this._hasPermission(this.folderInfo,"d")?d`
                    <lablup-shields app="" color="red"
                                    description="D" ui="flat"></lablup-shields>`:d``}`:d``}
              </div>
            </mwc-list-item>
            ${this.enableStorageProxy?d`
              <mwc-list-item twoline>
                <span><strong>${c("data.folders.Cloneable")}</strong></span>
                <span class="monospace" slot="secondary">
                    ${this.folderInfo.cloneable?d`
                    <mwc-icon class="cloneable" style="color:green;">check_circle</mwc-icon>
                    `:d`
                    <mwc-icon class="cloneable" style="color:red;">block</mwc-icon>
                    `}
                </span>
              </mwc-list-item>
            `:d``}

          </mwc-list>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="folder-explorer-dialog" class="folder-explorer" narrowLayout>
        <span slot="title">${this.explorer.id}</span>
        <div slot="action" class="horizontal layout flex folder-action-buttons">
          <div class="flex"></div>
          ${this.isWritable?d`
            <mwc-button
                outlined
                class="multiple-action-buttons fg red"
                icon="delete"
                @click="${()=>this._openDeleteMultipleFileDialog()}"
                style="display:none;">
                <span>${c("data.explorer.Delete")}</span>
            </mwc-button>
            <div id="filebrowser-btn-cover">
              <mwc-button
                  id="filebrowser-btn"
                  ?disabled=${!this.isWritable}
                  @click="${()=>this._executeFileBrowser()}">
                  <img class=${!this.isWritable}
                       id="filebrowser-img"
                       src="./resources/icons/filebrowser.svg"></img>
                  <span>${c("data.explorer.ExecuteFileBrowser")}</span>
              </mwc-button>
            </div>
            <div id="add-btn-cover">
              <mwc-button
                  id="add-btn"
                  icon="cloud_upload"
                  ?disabled=${!this.isWritable}
                  @click="${e=>this._uploadFileBtnClick(e)}">
                  <span>${c("data.explorer.UploadFiles")}</span>
              </mwc-button>
            </div>
            <div id="mkdir-cover">
              <mwc-button
                  id="mkdir"
                  class="tooltip"
                  icon="create_new_folder"
                  ?disabled=${!this.isWritable}
                  @click="${()=>this._mkdirDialog()}">
                  <span>${c("data.explorer.NewFolder")}</span>
              </mwc-button>
            </div>
          `:d`
          <mwc-button
              id="readonly-btn"
              disabled>
            <span>${c("data.explorer.ReadonlyFolder")}</span>
          </mwc-button>
          `}
        </div>
        <div slot="content">
          <div class="breadcrumb">
            ${this.explorer.breadcrumb?d`
              <ul>
                ${this.explorer.breadcrumb.map((e=>d`
                  <li>
                    ${"."===e?d`
                      <mwc-icon-button
                        icon="folder_open" dest="${e}"
                        @click="${e=>this._gotoFolder(e)}"
                      ></mwc-icon-button>
                    `:d`
                      <a outlined class="goto" path="item" @click="${e=>this._gotoFolder(e)}" dest="${e}">${e}</a>
                    `}
                  </li>
                `))}
              </ul>
            `:d``}
          </div>
          <div id="dropzone"><p>drag</p></div>
          <input type="file" id="fileInput" @change="${e=>this._uploadFileChange(e)}" hidden multiple>
          ${this.uploadFilesExist?d`
          <mwc-button icon="cancel" id="cancel_upload" @click="${()=>this._cancelUpload()}">
            ${c("data.explorer.StopUploading")}
          </mwc-button>
          <vaadin-grid class="progress" theme="row-stripes compact" aria-label="uploadFiles" .items="${this.uploadFiles}"
                       height-by-rows>
            <vaadin-grid-column width="100px" flex-grow="0">
              <template>
                <vaadin-item class="progress-item">
                  <div>
                    <template is="dom-if" if="[[item.complete]]">
                      <wl-icon>check</wl-icon>
                    </template>
                  </div>
                </vaadin-item>
              </template>
            </vaadin-grid-column>

            <vaadin-grid-column>
              <template>
                <vaadin-item>
                  <span>[[item.name]]</span>
                  <template is="dom-if" if="[[!item.complete]]">
                    <div>
                      <vaadin-progress-bar value="[[item.progress]]"></vaadin-progress-bar>
                    </div>
                    <div>
                      <span>[[item.caption]]</span>
                    </div>
                  </template>
                </vaadin-item>
              </template>
            </vaadin-grid-column>
          </vaadin-grid>`:d``}
          <vaadin-grid id="fileList-grid" class="explorer" theme="row-stripes compact" aria-label="Explorer" .items="${this.explorerFiles}">
            <vaadin-grid-selection-column auto-select></vaadin-grid-selection-column>
            <vaadin-grid-column width="40px" flex-grow="0" resizable header="#" .renderer="${this._boundIndexRenderer}">
            </vaadin-grid-column>

            <vaadin-grid-sort-column flex-grow="2" resizable header="${c("data.explorer.Name")}" path="filename" .renderer="${this._boundFileNameRenderer}">
            </vaadin-grid-sort-column>

            <vaadin-grid-sort-column flex-grow="2" resizable header="${c("data.explorer.Created")}" path="ctime" .renderer="${this._boundCreatedTimeRenderer}">
            </vaadin-grid-sort-column>

            <vaadin-grid-column auto-width resizable>
              <template class="header">
                <vaadin-grid-sorter path="size">${c("data.explorer.Size")}</vaadin-grid-sorter>
              </template>
              <template>
                <div class="layout vertical">
                  <span>[[item.size]]</span>
                </div>
              </template>
            </vaadin-grid-column>
            <vaadin-grid-column resizable auto-width header="${c("data.explorer.Actions")}" .renderer="${this._boundControlFileListRenderer}"></vaadin-grid-column>
          </vaadin-grid>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="mkdir-dialog" fixed backdrop>
        <span slot="title">${c("data.explorer.CreateANewFolder")}</span>
        <div slot="content">
          <mwc-textfield id="mkdir-name"
                         label="${c("data.explorer.Foldername")}"
                         @change="${()=>this._validatePathName()}"
                         required
                         maxLength="255" placeholder="${h("maxLength.255chars")}"
                         validationMessage="${h("data.explorer.ValueRequired")}"></mwc-textfield>
          <br/>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout distancing">
          <mwc-button icon="rowing" unelevated fullwidth type="submit" id="mkdir-btn" @click="${e=>this._mkdir(e)}">
            ${c("button.Create")}
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="share-folder-dialog" fixed backdrop persistent>
        <span slot="title">${c("data.explorer.ShareFolder")}</span>
        <div slot="content" role="listbox" style="margin: 0;width:100%;">
          <div style="margin: 10px 0px">${c("data.explorer.People")}</div>
          <div class="vertical layout flex" id="textfields">
            <div class="horizontal layout">
              <div style="flex-grow: 2">
                <mwc-textfield class="share-email" type="email" id="first-email"
                    label="${c("data.explorer.EnterEmailAddress")}"
                    maxLength="64" placeholder="${h("maxLength.64chars")}">
                </mwc-textfield>
              </div>
              <div>
                <wl-button fab flat @click="${()=>this._addTextField()}">
                  <wl-icon>add</wl-icon>
                </wl-button>
                <wl-button fab flat @click="${()=>this._removeTextField()}">
                  <wl-icon>remove</wl-icon>
                </wl-button>
              </div>
            </div>
          </div>
          <div style="margin: 10px 0px">${c("data.explorer.Permissions")}</div>
          <div style="display: flex; justify-content: space-evenly;">
            <wl-label>
              <wl-checkbox checked disabled></wl-checkbox>
              ${c("button.View")}
            </wl-label>
            <wl-label>
              <wl-checkbox id="share-folder-write"></wl-checkbox>
              ${c("button.Edit")}
            </wl-label>
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
            icon="share"
            type="button"
            unelevated
            fullwidth
            id="share-button"
            @click=${e=>this._shareFolder(e)}>
            ${c("button.Share")}
          </mwc-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="modify-permission-dialog" fixed backdrop>
        <span slot="title">${c("data.explorer.ModifyPermissions")}</span>
        <div slot="content" role="listbox" style="margin: 0; padding: 10px;">
          <vaadin-grid theme="row-stripes column-borders compact" .items="${this.invitees}">
            <vaadin-grid-column
              width="30px"
              flex-grow="0"
              header="#"
              .renderer="${this._boundIndexRenderer}"
            ></vaadin-grid-column>
            <vaadin-grid-column header="${c("data.explorer.InviteeEmail")}">
              <template>
                <div>[[item.shared_to.email]]</div>
              </template>
            </vaadin-grid-column>
            <vaadin-grid-column header="${c("data.explorer.Permission")}" .renderer="${this._boundPermissionRenderer}">
            </vaadin-grid-column>
          </vaadin-grid>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
            icon="check"
            type="button"
            unelevated
            fullwidth
            @click=${()=>this._modifySharedFolderPermissions()}
          >
            ${c("button.SaveChanges")}
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="rename-file-dialog" fixed backdrop blockscrolling>
        <span slot="title">${c("data.explorer.RenameAFile")}</span>
        <div slot="content">
          <mwc-textfield class="red" id="new-file-name" label="${c("data.explorer.NewFileName")}"
          required @change="${()=>this._validateExistingFileName()}" auto-validate style="width:320px;"
          maxLength="255" placeholder="${h("maxLength.255chars")}" autoFocus></mwc-textfield>
          <div id="old-file-name" style="padding-left:15px;height:2.5em;"></div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button icon="edit" fullwidth type="button" id="rename-file-button" unelevated @click="${()=>this._compareFileExtension()}">
            ${c("data.explorer.RenameAFile")}
          </mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="delete-file-dialog" fixed backdrop>
        <span slot="title">${c("dialog.title.LetsDouble-Check")}</span>
        <div slot="content">
          <p>${c("dialog.warning.CannotBeUndone")}
          ${c("dialog.ask.DoYouWantToProceed")}</p>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button outlined @click="${e=>this._hideDialog(e)}">${c("button.Cancel")}</mwc-button>
          <mwc-button raised @click="${e=>this._deleteFileWithCheck(e)}">${c("button.Okay")}</mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="download-file-dialog" fixed backdrop>
        <span slot="title">${c("data.explorer.DownloadFile")}</span>
        <div slot="content">
          <a href="${this.downloadURL}">
            <mwc-button outlined>${c("data.explorer.TouchToDownload")}</mwc-button>
          </a>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout distancing">
          <mwc-button @click="${e=>this._hideDialog(e)}">${c("button.Close")}</mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="file-extension-change-dialog" fixed backdrop>
        <span slot="title">${c("dialog.title.LetsDouble-Check")}</span>
        <div slot="content">
          <p>${c("data.explorer.FileExtensionChanged")}</p>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout distancing">
          <mwc-button outlined fullwidth @click="${e=>this._keepFileExtension()}">
            ${"ko"!==globalThis.backendaioptions.get("language")?d`
                ${h("data.explorer.KeepFileExtension")+this.oldFileExtension}
              `:d`
                ${this.oldFileExtension+h("data.explorer.KeepFileExtension")}
              `}
          </mwc-button>
          <mwc-button unelevated fullwidth @click="${()=>this._renameFile()}">
            ${"ko"!==globalThis.backendaioptions.get("language")?d`
                ${this.newFileExtension?h("data.explorer.UseNewFileExtension")+this.newFileExtension:h("data.explorer.RemoveFileExtension")}
              `:d`
                ${this.newFileExtension?this.newFileExtension+h("data.explorer.UseNewFileExtension"):h("data.explorer.RemoveFileExtension")}
              `}
          </mwc-button>
        </div>
      </backend-ai-dialog>
    `}firstUpdated(){this._addEventListenerDropZone(),this._mkdir=this._mkdir.bind(this),this.renameFileDialog=this.shadowRoot.querySelector("#rename-file-dialog"),this.deleteFileDialog=this.shadowRoot.querySelector("#delete-file-dialog"),this.downloadFileDialog=this.shadowRoot.querySelector("#download-file-dialog"),this.sessionLauncher=this.shadowRoot.querySelector("#session-launcher"),this.fileListGrid=this.shadowRoot.querySelector("#fileList-grid"),this.fileListGrid.addEventListener("selected-items-changed",(()=>{this._toggleCheckbox()})),this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.indicator=globalThis.lablupIndicator,this.notification=globalThis.lablupNotification;const e=this.shadowRoot.querySelectorAll("mwc-textfield");for(const t of e)this._addInputValidator(t);"automount"===this.storageType?this.shadowRoot.querySelector("vaadin-grid.folderlist").style.height="calc(100vh - 230px)":this.shadowRoot.querySelector("vaadin-grid.folderlist").style.height="calc(100vh - 185px)",document.addEventListener("backend-ai-group-changed",(e=>this._refreshFolderList(!0,"group-changed"))),document.addEventListener("backend-ai-ui-changed",(e=>this._refreshFolderUI(e))),this._refreshFolderUI({detail:{"mini-ui":globalThis.mini_ui}}),this.selectAreaHeight=this.shadowRoot.querySelector("#dropdown-area").offsetHeight?this.shadowRoot.querySelector("#dropdown-area").offsetHeight:"56px",void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._triggerFolderListChanged()}),!0):this._triggerFolderListChanged()}_modifySharedFolderPermissions(){const e=this.shadowRoot.querySelectorAll("#modify-permission-dialog wl-select"),t=Array.prototype.filter.call(e,((e,t)=>e.value!==this.invitees[t].perm)).map(((e,t)=>({perm:"kickout"===e.value?null:e.value,user:this.invitees[t].shared_to.uuid,vfolder:this.invitees[t].vfolder_id}))).map((e=>globalThis.backendaiclient.vfolder.modify_invitee_permission(e)));Promise.all(t).then((e=>{0===e.length?this.notification.text=h("data.permission.NoChanges"):this.notification.text=h("data.permission.PermissionModified"),this.notification.show(),this.shadowRoot.querySelector("#modify-permission-dialog").hide()}))}permissionRenderer(e,t,i){p(d`
      <div class="vertical layout">
        <wl-select label="${c("data.folders.SelectPermission")}">
          <option ?selected=${"ro"===i.item.perm} value="ro">${c("data.folders.View")}</option>
          <option ?selected=${"rw"===i.item.perm} value="rw">${c("data.folders.Edit")}</option>
          <option ?selected=${"wd"===i.item.perm} value="wd">${c("data.folders.EditDelete")}</option>
          <option value="kickout">${c("data.folders.KickOut")}</option>
        </wl-select>
      </div>`,e),this.shadowRoot.querySelector("wl-select").requestUpdate().then((()=>{p(d`
        <div class="vertical layout">
          <wl-select label="${c("data.folders.SelectPermission")}">
            <option ?selected=${"ro"===i.item.perm} value="ro">${c("data.folders.View")}</option>
            <option ?selected=${"rw"===i.item.perm} value="rw">${c("data.folders.Edit")}</option>
            <option ?selected=${"wd"===i.item.perm} value="wd">${c("data.folders.EditDelete")}</option>
            <option value="kickout">${c("data.folders.KickOut")}</option>
          </wl-select>
        </div>`,e)}))}folderListRenderer(e,t,i){p(d`
        <div class="indicator" @click="[[_folderExplorer()]]" .folder-id="${i.item.name}">${i.item.name}</div>
      `,e)}_controlHeightByPermissionCount(e=!1){if(!e)return void(this.shadowRoot.querySelector("#dropdown-area").style.height=this.selectAreaHeight);const t=this.shadowRoot.querySelector("#update-folder-permission").items.length,i=this.shadowRoot.querySelector("#dropdown-area").offsetHeight;t>0&&(this.shadowRoot.querySelector("#dropdown-area").style.height=i+52*t+"px")}_addTextField(){const e=document.createElement("mwc-textfield");e.label=h("data.explorer.EnterEmailAddress"),e.type="email",e.className="share-email",e.style.width="auto",e.style.marginRight="83px",this.shadowRoot.querySelector("#textfields").appendChild(e)}_removeTextField(){const e=this.shadowRoot.querySelector("#textfields");e.children.length>1&&e.removeChild(e.lastChild)}indexRenderer(e,t,i){p(d`${this._indexFrom1(i.index)}`,e)}controlFolderListRenderer(e,t,i){p(d`
        <div
          id="controls"
          class="layout flex center wrap"
          folder-id="${i.item.id}"
          folder-name="${i.item.name}"
          folder-type="${i.item.type}"
        >
          <mwc-icon-button
            class="fg green controls-running"
            icon="info"
            @click="${e=>this._infoFolder(e)}"
          ></mwc-icon-button>

          ${this._hasPermission(i.item,"r")?d`
              <mwc-icon-button
                class="fg blue controls-running"
                icon="folder_open"
                @click="${e=>this._folderExplorer(e,this._hasPermission(i.item,"w")||i.item.is_owner||"group"===i.item.type&&this.is_admin)}"
                .folder-id="${i.item.name}"></mwc-icon-button>
            `:d``}
          <!--${this._hasPermission(i.item,"r")&&this.enableStorageProxy?d`
            <mwc-icon-button
              class="fg blue controls-running"
              icon="content_copy"
              disabled
              @click="${()=>{this._requestCloneFolder(i.item)}}"></mwc-icon-button>
            `:d``}-->
          ${i.item.is_owner?d`
              <mwc-icon-button
                class="fg ${"user"==i.item.type?"blue":"green"} controls-running"
                icon="share"
                @click="${e=>this._shareFolderDialog(e)}"
              ></mwc-icon-button>
            `:d``}

          ${i.item.is_owner?d`
              <mwc-icon-button
                class="fg cyan controls-running"
                icon="perm_identity"
                @click=${e=>this._modifyPermissionDialog(i.item.id)}
              ></mwc-icon-button>
            `:d``}
          ${i.item.is_owner?d`
              <mwc-icon-button
                class="fg blue controls-running"
                icon="settings"
                @click="${e=>this._folderSettingsDialog(e)}"
              ></mwc-icon-button>
            `:d``}
          ${i.item.is_owner||this._hasPermission(i.item,"d")||"group"===i.item.type&&this.is_admin?d`
              <mwc-icon-button
                class="fg red controls-running"
                icon="delete"
                @click="${e=>this._deleteFolderDialog(e)}"
              ></mwc-icon-button>
            `:d``}
          ${i.item.is_owner||"user"!=i.item.type?d``:d`
              <mwc-icon-button
                class="fg red controls-running"
                icon="remove_circle"
                @click="${e=>this._leaveInvitedFolderDialog(e)}"
              ></mwc-icon-button>
            `}
        </div>
       `,e)}controlFileListRenderer(e,t,i){p(d`
        <div class="flex layout wrap">
          ${this._isDir(i.item)?d`
            <mwc-icon-button id="download-btn" class="tiny fg blue" icon="cloud_download"
                filename="${i.item.filename}" @click="${e=>this._downloadFile(e,!0)}"></mwc-icon-button>
          `:d`
            <mwc-icon-button id="download-btn" class="tiny fg blue" icon="cloud_download"
                filename="${i.item.filename}" @click="${e=>this._downloadFile(e)}"></mwc-icon-button>
          `}
          <mwc-icon-button id="rename-btn" ?disabled="${!this.isWritable}" class="tiny fg green" icon="edit" required
              filename="${i.item.filename}" @click="${e=>this._openRenameFileDialog(e,this._isDir(i.item))}"></mwc-icon-button>
          <mwc-icon-button id="delete-btn" ?disabled="${!this.isWritable}" class="tiny fg red" icon="delete_forever"
              filename="${i.item.filename}" @click="${e=>this._openDeleteFileDialog(e)}"></mwc-icon-button>
        </div>
       `,e)}fileNameRenderer(e,t,i){p(d`
        ${this._isDir(i.item)?d`
          <div class="indicator horizontal center layout" name="${i.item.filename}">
            <mwc-icon-button class="fg controls-running" icon="folder_open" name="${i.item.filename}"
                               @click="${e=>this._enqueueFolder(e)}"></mwc-icon-button>
            ${i.item.filename}
          </div>
       `:d`
          <div class="indicator horizontal center layout">
            <mwc-icon-button class="fg controls-running" icon="insert_drive_file"></mwc-icon-button>
            ${i.item.filename}
          </div>
       `}
      `,e)}permissionViewRenderer(e,t,i){p(d`
        <div class="horizontal center-justified wrap layout">
        ${this._hasPermission(i.item,"r")?d`
            <lablup-shields app="" color="green"
                            description="R" ui="flat"></lablup-shields>`:d``}
        ${this._hasPermission(i.item,"w")?d`
            <lablup-shields app="" color="blue"
                            description="W" ui="flat"></lablup-shields>`:d``}
        ${this._hasPermission(i.item,"d")?d`
            <lablup-shields app="" color="red"
                            description="D" ui="flat"></lablup-shields>`:d``}
        </div>`,e)}OwnerRenderer(e,t,i){p(d`
        ${i.item.is_owner?d`
          <div class="horizontal center-justified center layout">
            <mwc-icon-button class="fg green" icon="done"></mwc-icon-button>
          </div>`:d``}
        `,e)}CloneableRenderer(e,t,i){p(d`
        ${i.item.cloneable?d`
          <div class="horizontal center-justified center layout">
            <mwc-icon-button class="fg green" icon="done"></mwc-icon-button>
          </div>`:d``}
        `,e)}createdTimeRenderer(e,t,i){p(d`
        <div class="layout vertical">
            <span>${this._humanReadableTime(i.item.ctime)}</span>
        </div>`,e)}typeRenderer(e,t,i){p(d`
        <div class="layout vertical center-justified">
        ${"user"==i.item.type?d`
          <wl-icon>person</wl-icon>
        `:d`
          <wl-icon class="fg green">group</wl-icon>
        `}
        </div>`,e)}refreshFolderList(){return this._triggerFolderListChanged(),this._refreshFolderList(!0,"refreshFolderList")}_refreshFolderList(e=!1,t="unknown"){if(this._folderRefreshing||!this.active)return;if(Date.now()-this.lastQueryTime<1e3)return;this._folderRefreshing=!0,this.lastQueryTime=Date.now(),this.spinner.show();let i=null;i=globalThis.backendaiclient.current_group_id(),globalThis.backendaiclient.vfolder.list(i).then((e=>{this.spinner.hide();const t=e.filter((e=>"general"!==this.storageType||e.name.startsWith(".")?"automount"===this.storageType&&e.name.startsWith(".")?e:void 0:e));this.folders=t,this._folderRefreshing=!1})).catch((()=>{this._folderRefreshing=!1})),globalThis.backendaiclient.vfolder.list_hosts().then((t=>{this.active&&!e&&setTimeout((()=>{this._refreshFolderList(!1,"loop")}),3e4)}))}_refreshFolderUI(e){const t=this.shadowRoot.querySelector("#folder-explorer-dialog");Object.prototype.hasOwnProperty.call(e.detail,"mini-ui")&&!0===e.detail["mini-ui"]?t.classList.add("mini_ui"):t.classList.remove("mini_ui")}async _checkFilebrowserSupported(){const e=(await globalThis.backendaiclient.image.list(["name","tag","registry","digest","installed","labels { key value }","resource_limits { key min max }"],!1,!0)).images;this.filebrowserSupportedImages=e.filter((e=>e.installed&&e.labels.find((e=>"ai.backend.service-ports"===e.key&&e.value.toLowerCase().includes("filebrowser")))))}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_admin=globalThis.backendaiclient.is_admin,this.enableStorageProxy=globalThis.backendaiclient.supports("storage-proxy"),this.authenticated=!0,this._APIMajorVersion=globalThis.backendaiclient.APIMajorVersion,this._maxFileUploadSize=globalThis.backendaiclient._config.maxFileUploadSize,this._checkFilebrowserSupported(),this._refreshFolderList(!1,"viewStatechanged")}),!0):(this.is_admin=globalThis.backendaiclient.is_admin,this.enableStorageProxy=globalThis.backendaiclient.supports("storage-proxy"),this.authenticated=!0,this._APIMajorVersion=globalThis.backendaiclient.APIMajorVersion,this._maxFileUploadSize=globalThis.backendaiclient._config.maxFileUploadSize,this._checkFilebrowserSupported(),this._refreshFolderList(!1,"viewStatechanged")))}_folderExplorerDialog(){this.openDialog("folder-explorer-dialog")}_mkdirDialog(){this.shadowRoot.querySelector("#mkdir-name").value="",this.openDialog("mkdir-dialog")}openDialog(e){this.shadowRoot.querySelector("#"+e).show()}closeDialog(e){this.shadowRoot.querySelector("#"+e).hide()}_indexFrom1(e){return e+1}_hasPermission(e,t){return!!e.permission.includes(t)||!(!e.permission.includes("w")||"r"!==t)}_getControlName(e){return e.target.closest("#controls").getAttribute("folder-name")}_getControlId(e){return e.target.closest("#controls").getAttribute("folder-id")}_getControlType(e){return e.target.closest("#controls").getAttribute("folder-type")}_infoFolder(e){const t=this._getControlName(e);globalThis.backendaiclient.vfolder.info(t).then((e=>{this.folderInfo=e,this.openDialog("info-folder-dialog")})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_folderSettingsDialog(e){this.renameFolderName=this._getControlName(e);globalThis.backendaiclient.vfolder.info(this.renameFolderName).then((e=>{this.folderInfo=e,this.shadowRoot.querySelector("#new-folder-name").value="";let t=this.folderInfo.permission;switch(t){case"rw":t="Read-Write";break;case"ro":t="Read-Only";break;case"wd":t="Delete";break;default:t=this.folderInfo.is_owner?"Read-Write":"Read-Only"}this.shadowRoot.querySelector("#update-folder-permission").select(this.permissions.indexOf(t));const i=this.shadowRoot.querySelector("#update-folder-cloneable");i&&(i.checked=this.folderInfo.cloneable),this.openDialog("folder-setting-dialog")})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_updateFolder(){globalThis.backendaiclient.vfolder.name=this.renameFolderName;const e=this.shadowRoot.querySelector("#new-folder-name"),t=e.value;e.reportValidity();const i=this.shadowRoot.querySelector("#update-folder-permission"),o=this.shadowRoot.querySelector("#update-folder-cloneable");let a=!1,l="",r=!1;const s={};if(i){switch(l=i.value,l){case"Read-Write":l="rw";break;case"Read-Only":l="ro";break;case"Delete":l="wd";break;default:l="rw"}s.permission=l}if(o&&(r=o.checked,s.cloneable=r),t){if(!e.checkValidity())return;globalThis.backendaiclient.vfolder.rename(t).then((e=>{this.notification.text=h("data.folders.FolderRenamed"),this.notification.show()})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}globalThis.backendaiclient.vfolder.update_folder(s,this.renameFolderName).then((e=>{this.notification.text=h("data.folders.FolderUpdated"),this.notification.show(),this._refreshFolderList(!0,"updateFolder")})).catch((e=>{console.log(e),e&&e.message&&(a=!0,this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})),a||this.closeDialog("folder-setting-dialog")}async _deleteFolderDialog(e){this.deleteFolderName=this._getControlName(e),this.shadowRoot.querySelector("#delete-folder-name").value="",this.openDialog("delete-folder-dialog")}_deleteFolderWithCheck(){if(this.shadowRoot.querySelector("#delete-folder-name").value!==this.deleteFolderName)return this.notification.text=h("data.folders.FolderNameMismatched"),void this.notification.show();this.closeDialog("delete-folder-dialog"),this._deleteFolder(this.deleteFolderName)}_deleteFolder(e){globalThis.backendaiclient.vfolder.delete(e).then((e=>{console.log(e),e.msg?(console.log(e),this.notification.text=h("data.folders.CannotDeleteFolder"),this.notification.show(!0)):(this.notification.text=h("data.folders.FolderDeleted"),this.notification.show(),this.refreshFolderList(),this._triggerFolderListChanged())})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}async _checkVfolderMounted(e=""){}_requestCloneFolder(e){}_leaveInvitedFolderDialog(e){this.leaveFolderName=this._getControlName(e),this.shadowRoot.querySelector("#leave-folder-name").value="",this.openDialog("leave-folder-dialog")}_leaveFolderWithCheck(){if(this.shadowRoot.querySelector("#leave-folder-name").value!==this.leaveFolderName)return this.notification.text=h("data.folders.FolderNameMismatched"),void this.notification.show();this.closeDialog("leave-folder-dialog"),this._leaveFolder(this.leaveFolderName)}_leaveFolder(e){globalThis.backendaiclient.vfolder.leave_invited(e).then((e=>{this.notification.text=h("data.folders.FolderDisconnected"),this.notification.show(),this.refreshFolderList(),this._triggerFolderListChanged()})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_triggerFolderListChanged(){const e=new CustomEvent("backend-ai-folder-list-changed");document.dispatchEvent(e)}_validateExistingFileName(){const e=this.shadowRoot.querySelector("#new-file-name");e.validityTransform=(t,i)=>{if(i.valid){const t=/[`~!@#$%^&*()|+=?;:'",<>{}[\]\\/]/gi;let i;return e.value===this.renameFileDialog.querySelector("#old-file-name").textContent?(e.validationMessage=h("data.EnterDifferentValue"),i=!1,{valid:i,customError:!i}):(i=!0,i=!t.test(e.value),i||(e.validationMessage=h("data.Allowslettersnumbersand-_dot")),{valid:i,customError:!i})}return i.valueMissing?(e.validationMessage=h("data.FileandFoldernameRequired"),{valid:i.valid,customError:!i.valid}):(e.validationMessage=h("data.Allowslettersnumbersand-_dot"),{valid:i.valid,customError:!i.valid})}}_validateFolderName(e=!1){const t=e?this.shadowRoot.querySelector("#new-folder-name"):this.shadowRoot.querySelector("#add-folder-name");t.validityTransform=(i,o)=>{if(o.valid){let i;const o=/[`~!@#$%^&*()|+=?;:'",<>{}[\]\\/\s]/gi;if(e){if(t.value===this.renameFolderName)return t.validationMessage=h("data.EnterDifferentValue"),i=!1,{valid:i,customError:!i};i=!0}return i=!o.test(t.value),i||(t.validationMessage=h("data.Allowslettersnumbersand-_dot")),{valid:i,customError:!i}}return o.valueMissing?(t.validationMessage=h("data.FolderNameRequired"),{valid:o.valid,customError:!o.valid}):(t.validationMessage=h("data.Allowslettersnumbersand-_dot"),{valid:o.valid,customError:!o.valid})}}async _clearExplorer(e=this.explorer.breadcrumb.join("/"),t=this.explorer.id,i=!1){const o=await globalThis.backendaiclient.vfolder.list_files(e,t);if(this.shadowRoot.querySelector("#fileList-grid").selectedItems=[],this._APIMajorVersion<6)this.explorer.files=JSON.parse(o.files);else{const e=JSON.parse(o.files);e.forEach(((e,t)=>{let i="FILE";if(e.filename===o.items[t].name)i=o.items[t].type;else for(let t=0;t<o.items.length;t++)if(e.filename===o.items[t].name){i=o.items[t].type;break}e.type=i})),this.explorer.files=e}this.explorerFiles=this.explorer.files,i&&(0===this.filebrowserSupportedImages.length&&await this._checkFilebrowserSupported(),this._toggleFilebrowserButton(),this.openDialog("folder-explorer-dialog"))}_toggleFilebrowserButton(){const e=!!(this.filebrowserSupportedImages.length>0&&this._isResourceEnough()),t=this.shadowRoot.querySelector("#filebrowser-img"),i=this.shadowRoot.querySelector("#filebrowser-btn");if(t&&i){i.disabled=!e;const o=e?"":"apply-grayscale";t.setAttribute("class",o)}}_folderExplorer(e,t){const i={id:this._getControlName(e),breadcrumb:["."]};this.isWritable=t,this.explorer=i,this._clearExplorer(i.breadcrumb.join("/"),i.id,!0)}_enqueueFolder(e){const t=e.target;t.setAttribute("disabled","true");const i=e.target.getAttribute("name");this.explorer.breadcrumb.push(i),this._clearExplorer().then((e=>{t.removeAttribute("disabled")}))}_gotoFolder(e){const t=e.target.getAttribute("dest");let i=this.explorer.breadcrumb;const o=i.indexOf(t);-1!==o&&(i=i.slice(0,o+1),this.explorer.breadcrumb=i,this._clearExplorer(i.join("/"),this.explorer.id,!1))}_mkdir(e){const t=this.shadowRoot.querySelector("#mkdir-name"),i=t.value,o=this.explorer;if(t.reportValidity(),t.checkValidity()){globalThis.backendaiclient.vfolder.mkdir([...o.breadcrumb,i].join("/"),o.id).catch((e=>{e&e.message?(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=u.relieve(e.title),this.notification.show(!0,e))})).then((e=>{this.closeDialog("mkdir-dialog"),this._clearExplorer()}))}}_isDir(e){return this._APIMajorVersion<6?e.mode.startsWith("d"):"DIRECTORY"===e.type}_byteToMB(e){return Math.floor(e/1e6)}_humanReadableFileSize(e){return e>1e9?Math.floor(e/1e9)+"GB":e>1e6?Math.floor(e/1e6)+"MB":e>1e3?Math.floor(e/1e3)+"KB":Math.floor(e)+"Bytes"}_addEventListenerDropZone(){const e=this.shadowRoot.querySelector("#folder-explorer-dialog"),t=this.shadowRoot.querySelector("#dropzone");t.addEventListener("dragleave",(()=>{t.style.display="none"})),e.addEventListener("dragover",(e=>(e.stopPropagation(),e.preventDefault(),!this.isWritable||(e.dataTransfer.dropEffect="copy",t.style.display="flex",!1)))),e.addEventListener("drop",(e=>{let i=!1;if(e.stopPropagation(),e.preventDefault(),t.style.display="none",this.isWritable){for(let t=0;t<e.dataTransfer.files.length;t++)if(e.dataTransfer.items[t].webkitGetAsEntry().isFile){const i=e.dataTransfer.files[t];if(this._maxFileUploadSize>0&&i.size>this._maxFileUploadSize)return this.notification.text=h("data.explorer.FileUploadSizeLimit")+` (${this._humanReadableFileSize(this._maxFileUploadSize)})`,void this.notification.show();if(this.explorerFiles.find((e=>e.filename===i.name))){window.confirm(`${h("data.explorer.FileAlreadyExists")}\n${i.name}\n${h("data.explorer.DoYouWantToOverwrite")}`)&&(i.progress=0,i.caption="",i.error=!1,i.complete=!1,this.uploadFiles.push(i))}else i.progress=0,i.caption="",i.error=!1,i.complete=!1,this.uploadFiles.push(i)}else i||(this.filebrowserSupportedImages.length>0?(this.notification.text=h("data.explorer.ClickFilebrowserButton"),this.notification.show()):(this.notification.text=h("data.explorer.NoImagesSupportingFileBrowser"),this.notification.show())),i=!0;for(let e=0;e<this.uploadFiles.length;e++)this.fileUpload(this.uploadFiles[e]),this._clearExplorer()}else this.notification.text=h("data.explorer.WritePermissionRequiredInUploadFiles"),this.notification.show()}))}_uploadFileBtnClick(e){const t=this.shadowRoot.querySelector("#fileInput");if(t&&document.createEvent){const e=document.createEvent("MouseEvents");e.initEvent("click",!0,!1),t.dispatchEvent(e)}}_uploadFileChange(e){const t=e.target.files.length;for(let i=0;i<t;i++){const t=e.target.files[i];let o="";const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let e=0;e<5;e++)o+=a.charAt(Math.floor(Math.random()*a.length));if(this._maxFileUploadSize>0&&t.size>this._maxFileUploadSize)return this.notification.text=h("data.explorer.FileUploadSizeLimit")+` (${this._humanReadableFileSize(this._maxFileUploadSize)})`,void this.notification.show();if(this.explorerFiles.find((e=>e.filename===t.name))){window.confirm(`${h("data.explorer.FileAlreadyExists")}\n${t.name}\n${h("data.explorer.DoYouWantToOverwrite")}`)&&(t.id=o,t.progress=0,t.caption="",t.error=!1,t.complete=!1,this.uploadFiles.push(t))}else t.id=o,t.progress=0,t.caption="",t.error=!1,t.complete=!1,this.uploadFiles.push(t)}for(let e=0;e<this.uploadFiles.length;e++)this.fileUpload(this.uploadFiles[e]);this.shadowRoot.querySelector("#fileInput").value=""}runFileUploadQueue(e=null){let t;null!==e&&this.fileUploadQueue.push(e);for(let e=this.fileUploadCount;e<this.concurrentFileUploadLimit;e++)this.fileUploadQueue.length>0&&(t=this.fileUploadQueue.shift(),this.fileUploadCount=this.fileUploadCount+1,t.start())}fileUpload(e){this._uploadFlag=!0,this.uploadFilesExist=this.uploadFiles.length>0;const t=this.explorer.breadcrumb.concat(e.name).join("/");globalThis.backendaiclient.vfolder.create_upload_session(t,e,this.explorer.id).then((i=>{const o=(new Date).getTime(),a=new F.Upload(e,{endpoint:i,retryDelays:[0,3e3,5e3,1e4,2e4],uploadUrl:i,chunkSize:15728640,metadata:{filename:t,filetype:e.type},onError:e=>{console.log("Failed because: "+e),this.fileUploadCount=this.fileUploadCount-1,this.runFileUploadQueue()},onProgress:(t,i)=>{if(!this._uploadFlag)return a.abort(),this.uploadFiles[this.uploadFiles.indexOf(e)].caption="Canceling...",this.uploadFiles=this.uploadFiles.slice(),void setTimeout((()=>{this.uploadFiles=[],this.uploadFilesExist=!1}),1e3);const l=(new Date).getTime(),r=(t/1048576/((l-o)/1e3)).toFixed(1)+"MB/s",s=Math.floor((i-t)/(t/(l-o)*1e3));let n=h("data.explorer.LessThan10Sec");if(s>=86400)n=h("data.explorer.MoreThanADay");else if(s>10){n=`${Math.floor(s/3600)}:${Math.floor(s%3600/60)}:${s%60}`}const d=(t/i*100).toFixed(1);this.uploadFiles[this.uploadFiles.indexOf(e)].progress=t/i,this.uploadFiles[this.uploadFiles.indexOf(e)].caption=`${d}% / Time left : ${n} / Speed : ${r}`,this.uploadFiles=this.uploadFiles.slice()},onSuccess:()=>{this._clearExplorer(),this.uploadFiles[this.uploadFiles.indexOf(e)].complete=!0,this.uploadFiles=this.uploadFiles.slice(),setTimeout((()=>{this.uploadFiles.splice(this.uploadFiles.indexOf(e),1),this.uploadFilesExist=this.uploadFiles.length>0,this.uploadFiles=this.uploadFiles.slice(),this.fileUploadCount=this.fileUploadCount-1,this.runFileUploadQueue()}),1e3)}});this.runFileUploadQueue(a)}))}_cancelUpload(){this._uploadFlag=!1}_downloadFile(e,t=!1){const i=e.target.getAttribute("filename"),o=this.explorer.breadcrumb.concat(i).join("/");globalThis.backendaiclient.vfolder.request_download_token(o,this.explorer.id,t).then((e=>{const o=e.token;let a;if(a=this._APIMajorVersion<6?globalThis.backendaiclient.vfolder.get_download_url_with_token(o):`${e.url}?token=${e.token}&archive=${t}`,globalThis.iOSSafari)this.downloadURL=a,this.downloadFileDialog.show(),URL.revokeObjectURL(a);else{const e=document.createElement("a");e.style.display="none",e.addEventListener("click",(function(e){e.stopPropagation()})),e.href=a,e.download=i,document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(a)}}))}_compareFileExtension(){const e=this.shadowRoot.querySelector("#new-file-name").value,t=this.renameFileDialog.querySelector("#old-file-name").textContent,i=/\.([0-9a-z]+)$/i;this.newFileExtension=e.includes(".")&&e.match(i)?e.match(i)[1].toLowerCase():"",this.oldFileExtension=t.includes(".")&&t.match(i)?t.match(i)[1].toLowerCase():"",e?this.newFileExtension!==this.oldFileExtension?this.shadowRoot.querySelector("#file-extension-change-dialog").show():this.oldFileExtension?this._keepFileExtension():this._renameFile():this._renameFile()}_keepFileExtension(){let e=this.renameFileDialog.querySelector("#new-file-name").value;e=this.newFileExtension?e.replace(new RegExp(this.newFileExtension+"$"),this.oldFileExtension):e+"."+this.oldFileExtension,this.renameFileDialog.querySelector("#new-file-name").value=e,this._renameFile()}_executeFileBrowser(){this._isResourceEnough()?this.filebrowserSupportedImages.length>0?(this._launchSession(),this._toggleFilebrowserButton()):(this.notification.text=h("data.explorer.NoImagesSupportingFileBrowser"),this.notification.show()):(this.notification.text=h("data.explorer.NotEnoughResourceForFileBrowserSession"),this.notification.show())}async _launchSession(){let e;const t={},i=this.filebrowserSupportedImages.filter((e=>e.name.toLowerCase().includes("filebrowser")&&e.installed))[0],o=i.registry+"/"+i.name+":"+i.tag;t.mounts=[this.explorer.id],t.cpu=1,t.mem=this.minimumResource.mem+"g",t.domain=globalThis.backendaiclient._config.domainName,t.group_name=globalThis.backendaiclient.current_group;const a=await this.indicator.start("indeterminate");return globalThis.backendaiclient.get_resource_slots().then((e=>(a.set(200,h("data.explorer.ExecutingFileBrowser")),globalThis.backendaiclient.createIfNotExists(o,null,t,1e4)))).then((async t=>{const i=t.servicePorts;e={"session-uuid":t.sessionId,"session-name":t.sessionName,"access-key":"",runtime:"filebrowser",arguments:{"--root":"/home/work/"+this.explorer.id}},i.length>0&&i.filter((e=>"filebrowser"===e.name)).length>0&&globalThis.appLauncher.showLauncher(e);this.shadowRoot.querySelector("#folder-explorer-dialog").open&&this.closeDialog("folder-explorer-dialog"),a.end(1e3)})).catch((e=>{this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e),a.end(1e3)}))}_openRenameFileDialog(e,t=!1){const i=e.target.getAttribute("filename");this.renameFileDialog.querySelector("#old-file-name").textContent=i,this.renameFileDialog.querySelector("#new-file-name").value=i,this.renameFileDialog.filename=i,this.renameFileDialog.show();const o=this.renameFileDialog.querySelector("#new-file-name");this.is_dir=t,o.addEventListener("focus",(e=>{const t=i.replace(/\.([0-9a-z]+)$/i,"").length;o.setSelectionRange(0,t)})),o.focus()}_renameFile(){const e=this.renameFileDialog.filename,t=this.explorer.breadcrumb.concat(e).join("/"),i=this.renameFileDialog.querySelector("#new-file-name"),o=i.value;if(this.shadowRoot.querySelector("#file-extension-change-dialog").hide(),i.reportValidity(),i.checkValidity()){if(e===o)return i.focus(),this.notification.text=h("data.folders.SameFileName"),void this.notification.show();globalThis.backendaiclient.vfolder.rename_file(t,o,this.explorer.id,this.is_dir).then((e=>{this.notification.text=h("data.folders.FileRenamed"),this.notification.show(),this._clearExplorer(),this.renameFileDialog.hide()})).catch((e=>{console.error(e),e&&e.message&&(this.notification.text=e.title,this.notification.detail=e.message,this.notification.show(!0,e))}))}}_openDeleteFileDialog(e){const t=e.target.getAttribute("filename");this.deleteFileDialog.filename=t,this.deleteFileDialog.files=[],this.deleteFileDialog.show()}_openDeleteMultipleFileDialog(e){this.deleteFileDialog.files=this.fileListGrid.selectedItems,this.deleteFileDialog.filename="",this.deleteFileDialog.show()}_deleteFileWithCheck(e){const t=this.deleteFileDialog.files;if(t.length>0){const e=[];t.forEach((t=>{const i=this.explorer.breadcrumb.concat(t.filename).join("/");e.push(i)}));globalThis.backendaiclient.vfolder.delete_files(e,!0,this.explorer.id).then((e=>{this.notification.text=h("data.folders.MultipleFilesDeleted"),this.notification.show(),this._clearExplorer(),this.deleteFileDialog.hide()}))}else if(""!=this.deleteFileDialog.filename){const e=this.explorer.breadcrumb.concat(this.deleteFileDialog.filename).join("/");globalThis.backendaiclient.vfolder.delete_files([e],!0,this.explorer.id).then((e=>{this.notification.text=h("data.folders.FileDeleted"),this.notification.show(),this._clearExplorer(),this.deleteFileDialog.hide()}))}}_deleteFile(e){const t=e.target.getAttribute("filename"),i=this.explorer.breadcrumb.concat(t).join("/");globalThis.backendaiclient.vfolder.delete_files([i],!0,this.explorer.id).then((e=>{this.notification.text=h("data.folders.FileDeleted"),this.notification.show(),this._clearExplorer()}))}_isResourceEnough(){const e=new CustomEvent("backend-ai-calculate-current-resource");document.dispatchEvent(e);const t=globalThis.backendaioptions.get("current-resource");return!!(t&&(t.cpu="string"==typeof t.cpu?parseInt(t.cpu):t.cpu,t.cpu>=this.minimumResource.cpu&&t.mem>=this.minimumResource.mem))}_humanReadableTime(e){const t=new Date(1e3*e),i=t.getTimezoneOffset()/60,o=t.getHours();return t.setHours(o-i),t.toUTCString()}_isDownloadable(e){return!0}_initializeSharingFolderDialogLayout(){const e=this.shadowRoot.querySelectorAll("#share-folder-dialog mwc-textfield.share-email");e.length>1&&Array.prototype.forEach.call(e,((e,t)=>{"first-email"!==e.id&&e.parentNode.removeChild(e)}))}_shareFolderDialog(e){this.selectedFolder=this._getControlName(e),this.selectedFolderType=this._getControlType(e),this._initializeSharingFolderDialogLayout(),this.openDialog("share-folder-dialog")}_modifyPermissionDialog(e){globalThis.backendaiclient.vfolder.list_invitees(e).then((e=>{this.invitees=e.shared,this.shadowRoot.querySelector("#modify-permission-dialog").requestUpdate().then((()=>{this.openDialog("modify-permission-dialog")}))}))}_shareFolder(e){const t=this.shadowRoot.querySelectorAll("mwc-textfield.share-email"),i=Array.prototype.filter.call(t,(e=>e.isUiValid&&""!==e.value)).map((e=>e.value.trim())),o="r"+(this.shadowRoot.querySelector("#share-folder-write").checked?"w":"o");if(0===i.length){this.notification.text=h("data.invitation.NoValidEmails"),this.notification.show(),this.shadowRoot.querySelector("#share-folder-dialog").hide();for(const e of t)e.value="";return}let a;a="user"===this.selectedFolderType?globalThis.backendaiclient.vfolder.invite(o,i,this.selectedFolder):globalThis.backendaiclient.vfolder.share(o,i,this.selectedFolder),a.then((e=>{let i;i="user"===this.selectedFolderType?e.invited_ids&&e.invited_ids.length>0?h("data.invitation.Invited"):h("data.invitation.NoOneWasInvited"):e.shared_emails&&e.shared_emails.length>0?h("data.invitation.Shared"):h("data.invitation.NoOneWasShared"),this.notification.text=i,this.notification.show(),this.shadowRoot.querySelector("#share-folder-dialog").hide();for(let e=t.length-1;e>0;e--){const i=t[e];i.parentElement.removeChild(i)}})).catch((e=>{"user"===this.selectedFolderType?this.notification.text=h("data.invitation.InvitationError"):this.notification.text=h("data.invitation.SharingError"),e&&e.message&&(this.notification.detail=e.message),this.notification.show(!0,e)}))}_validatePathName(){const e=this.shadowRoot.querySelector("#mkdir-name");e.validityTransform=(t,i)=>{if(i.valid){let t=/^([^`~!@#$%^&*()|+=?;:'",<>{}[\]\r\n/]{1,})+(\/[^`~!@#$%^&*()|+=?;:'",<>{}[\]\r\n/]{1,})*([/,\\]{0,1})$/gm.test(e.value);return t&&"./"!==e.value||(e.validationMessage=h("data.explorer.ValueShouldBeStarted"),t=!1),{valid:t,customError:!t}}return i.valueMissing?(e.validationMessage=h("data.explorer.ValueRequired"),{valid:i.valid,customError:!i.valid}):{valid:i.valid,customError:!i.valid}}}};t([i({type:Number})],S.prototype,"_APIMajorVersion",void 0),t([i({type:String})],S.prototype,"storageType",void 0),t([i({type:Object})],S.prototype,"folders",void 0),t([i({type:Object})],S.prototype,"folderInfo",void 0),t([i({type:Boolean})],S.prototype,"is_admin",void 0),t([i({type:Boolean})],S.prototype,"enableStorageProxy",void 0),t([i({type:Boolean})],S.prototype,"authenticated",void 0),t([i({type:String})],S.prototype,"renameFolderName",void 0),t([i({type:String})],S.prototype,"deleteFolderName",void 0),t([i({type:String})],S.prototype,"leaveFolderName",void 0),t([i({type:Object})],S.prototype,"explorer",void 0),t([i({type:Array})],S.prototype,"explorerFiles",void 0),t([i({type:String})],S.prototype,"existingFile",void 0),t([i({type:Array})],S.prototype,"invitees",void 0),t([i({type:String})],S.prototype,"selectedFolder",void 0),t([i({type:String})],S.prototype,"selectedFolderType",void 0),t([i({type:String})],S.prototype,"downloadURL",void 0),t([i({type:Array})],S.prototype,"uploadFiles",void 0),t([i({type:Array})],S.prototype,"fileUploadQueue",void 0),t([i({type:Number})],S.prototype,"fileUploadCount",void 0),t([i({type:Number})],S.prototype,"concurrentFileUploadLimit",void 0),t([i({type:String})],S.prototype,"vhost",void 0),t([i({type:Array})],S.prototype,"vhosts",void 0),t([i({type:Array})],S.prototype,"allowedGroups",void 0),t([i({type:Object})],S.prototype,"fileListGrid",void 0),t([i({type:Object})],S.prototype,"indicator",void 0),t([i({type:Object})],S.prototype,"notification",void 0),t([i({type:Object})],S.prototype,"renameFileDialog",void 0),t([i({type:Object})],S.prototype,"deleteFileDialog",void 0),t([i({type:Object})],S.prototype,"downloadFileDialog",void 0),t([i({type:Object})],S.prototype,"sessionLauncher",void 0),t([i({type:Object})],S.prototype,"spinner",void 0),t([i({type:Array})],S.prototype,"allowed_folder_type",void 0),t([i({type:Boolean})],S.prototype,"uploadFilesExist",void 0),t([i({type:Object})],S.prototype,"_boundIndexRenderer",void 0),t([i({type:Object})],S.prototype,"_boundTypeRenderer",void 0),t([i({type:Object})],S.prototype,"_boundFolderListRenderer",void 0),t([i({type:Object})],S.prototype,"_boundControlFolderListRenderer",void 0),t([i({type:Object})],S.prototype,"_boundControlFileListRenderer",void 0),t([i({type:Object})],S.prototype,"_boundPermissionViewRenderer",void 0),t([i({type:Object})],S.prototype,"_boundOwnerRenderer",void 0),t([i({type:Object})],S.prototype,"_boundFileNameRenderer",void 0),t([i({type:Object})],S.prototype,"_boundCreatedTimeRenderer",void 0),t([i({type:Object})],S.prototype,"_boundPermissionRenderer",void 0),t([i({type:Object})],S.prototype,"_boundCloneableRenderer",void 0),t([i({type:Boolean})],S.prototype,"_uploadFlag",void 0),t([i({type:Boolean})],S.prototype,"_folderRefreshing",void 0),t([i({type:Number})],S.prototype,"lastQueryTime",void 0),t([i({type:Boolean})],S.prototype,"isWritable",void 0),t([i({type:Array})],S.prototype,"permissions",void 0),t([i({type:Number})],S.prototype,"_maxFileUploadSize",void 0),t([i({type:Number})],S.prototype,"selectAreaHeight",void 0),t([i({type:String})],S.prototype,"oldFileExtension",void 0),t([i({type:String})],S.prototype,"newFileExtension",void 0),t([i({type:Boolean})],S.prototype,"is_dir",void 0),t([i({type:Number})],S.prototype,"minimumResource",void 0),t([i({type:Array})],S.prototype,"filebrowserSupportedImages",void 0),S=t([o("backend-ai-storage-list")],S);let T=class extends a{constructor(){super(),this.apiMajorVersion="",this.folders=Object(),this.folderInfo=Object(),this.is_admin=!1,this.enableStorageProxy=!1,this.authenticated=!1,this.deleteFolderId="",this.vhost="",this.vhosts=[],this.usageModes=["General","Data","Model"],this.permissions=["Read-Write","Read-Only","Delete"],this.allowedGroups=[],this.allowed_folder_type=[],this.notification=Object(),this.spinner=Object(),this.folderLists=Object(),this._status="inactive",this.active=!0,this._lists=Object(),this._vfolderInnatePermissionSupport=!1,this.storageInfo=Object(),this._activeTab="general",this._helpDescription="",this._helpDescriptionTitle="",this._helpDescriptionIcon="",this.cloneFolderName=""}static get styles(){return[l,r,s,n,e`
        ul {
          padding-left: 0;
        }

        ul li {
          list-style: none;
          font-size: 13px;
        }

        span.indicator {
          width: 100px;
          font-size: 10px;
        }

        .folder-action-buttons wl-button {
          margin-right: 10px;
        }

        wl-button > wl-icon {
          --icon-size: 24px;
          padding: 0;
        }

        wl-icon {
          --icon-size: 16px;
          padding: 0;
        }

        wl-button.button {
          width: 350px;
        }

        wl-card.item {
          height: calc(100vh - 145px) !important;
        }

        .tab-content {
          border: 0;
          font-size: 14px;
        }

        mwc-textfield {
          width: 100%;
          --mdc-theme-primary: #242424;
          --mdc-text-field-fill-color: transparent;
        }

        mwc-textfield.red {
          --mdc-theme-primary: var(--paper-red-400) !important;
        }

        h3.tab {
          background-color: var(--general-tabbar-background-color);
          border-radius: 5px 5px 0px 0px;
          margin: 0px auto;
        }

        mwc-tab-bar {
          --mdc-theme-primary: var(--general-sidebar-selected-color);
          --mdc-text-transform: none;
          --mdc-tab-color-default: var(--general-tabbar-background-color);
          --mdc-tab-text-label-color-default: var(--general-tabbar-tab-disabled-color);
        }

        wl-tab-group {
          --tab-group-indicator-bg: var(--paper-orange-500);
        }

        wl-tab {
          --tab-color: #666666;
          --tab-color-hover: #222222;
          --tab-color-hover-filled: #222222;
          --tab-color-active: #222222;
          --tab-color-active-hover: #222222;
          --tab-color-active-filled: #cccccc;
          --tab-bg-active: var(--paper-orange-50);
          --tab-bg-filled: var(--paper-orange-50);
          --tab-bg-active-hover: var(--paper-orange-100);
        }

        wl-button {
          --button-bg: var(--paper-orange-50);
          --button-bg-hover: var(--paper-orange-100);
          --button-bg-active: var(--paper-orange-600);
          color: var(--paper-orange-900);
        }

        #add-folder-dialog,
        #clone-folder-dialog {
          --component-width: 375px;
        }

        backend-ai-dialog wl-textfield,
        backend-ai-dialog wl-select {
          --input-font-family: var(--general-font-family);
          --input-color-disabled: #222222;
          --input-label-color-disabled: #222222;
          --input-label-font-size: 12px;
          --input-border-style-disabled: 1px solid #cccccc;
        }

        #help-description {
          --component-width: 350px;
        }

        #textfields wl-textfield,
        wl-label {
          margin-bottom: 20px;
        }

        wl-label {
          --label-font-family: 'Ubuntu', Roboto;
          --label-color: black;
        }

        mwc-select {
          width: 50%;
          margin-bottom: 10px;
          --mdc-theme-primary: var(--general-textfield-selected-color);
          --mdc-select-fill-color: transparent;
          --mdc-select-label-ink-color: rgba(0, 0, 0, 0.75);
          --mdc-select-dropdown-icon-color: var(--general-textfield-selected-color);
          --mdc-select-hover-line-color: var(--general-textfield-selected-color);
          --mdc-list-vertical-padding: 5px;
        }

        mwc-select.full-width {
          width: 100%;
        }

        mwc-select.full-width.fixed-position > mwc-list-item {
          width: 314px; // default width
        }

        mwc-select.fixed-position > mwc-list-item {
          width: 140px; // default width
        }

        mwc-select mwc-icon-button {
          --mdc-icon-button-size: 24px;
          color: var(--general-textfield-selected-color);
        }

        #help-description {
          --dialog-width: 350px;
        }

        #help-description p {
          padding: 5px !important;
        }

        #automount-folder-lists > div {
          background-color: white;
          color: var(--general-textfield-selected-color);
          border-bottom:0.5px solid var(--general-textfield-selected-color);
        }

        #automount-folder-lists > div > p {
          color: var(--general-sidebar-color);
          margin-left: 10px;
        }

        @media screen and (max-width: 750px) {
          mwc-tab {
            --mdc-typography-button-font-size: 10px;
          }

          mwc-button > span {
            display: none;
          }
        }

        .storage-status-indicator {
          width: 90px;
          color: black;
        }

        div.big {
          font-size: 72px;
        }

        .storage-chart-wrapper {
          margin: 20px 50px 0px 50px;
        }

      `]}render(){return d`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <div class="vertical layout" style="margin:20px;">
        <lablup-activity-panel elevation="1" narrow title=${c("data.StorageStatus")} autowidth>
          <div slot="message">
            <div class="horizontal layout wrap flex center center-justified">
              <div class="storage-chart-wrapper">
                <chart-js id="storage-status" type="doughnut" .data="${this.folders}" .options="${this.options}" height="250" width="250"></chart-js>
              </div>
              <div class="horizontal layout justified">
                <div class="vertical layout center storage-status-indicator">
                  <div class="big">${this.createdCount}</div>
                  <span>${c("data.Created")}</span>
                </div>
                <div class="vertical layout center storage-status-indicator">
                  <div class="big">${this.invitedCount}</div>
                  <span>${c("data.Invited")}</span>
                </div>
                <div class="vertical layout center storage-status-indicator">
                  <div class="big">${this.capacity}</div>
                  <span>${c("data.Capacity")}</span>
                </div>
              </div>
            </div>
          </div>
        </lablup-activity-panel>
        <lablup-activity-panel elevation="1" noheader narrow autowidth>
          <div slot="message">
            <h3 class="horizontal center flex layout tab">
              <mwc-tab-bar>
                <mwc-tab title="general" label="${c("data.Folders")}"
                    @click="${e=>this._showTab(e.target)}">
                </mwc-tab>
                <mwc-tab title="automount" label="${c("data.AutomountFolders")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
              </mwc-tab-bar>
              <span class="flex"></span>
              <mwc-button dense raised id="add-folder" icon="add" @click="${()=>this._addFolderDialog()}" style="margin-right:15px;">
                <span>${c("data.NewFolder")}</span>
              </mwc-button>
            </h3>
            <div id="general-folder-lists" class="tab-content">
              <backend-ai-storage-list id="general-folder-storage" storageType="general" ?active="${!0===this.active&&"general"===this._activeTab}"></backend-ai-storage-list>
            </div>
            <div id="automount-folder-lists" class="tab-content" style="display:none;">
              <div class="horizontal layout">
                <p>${c("data.DialogFolderStartingWithDotAutomount")}</p>
              </div>
              <backend-ai-storage-list id="automount-folder-storage" storageType="automount" ?active="${!0===this.active&&"automount"===this._activeTab}"></backend-ai-storage-list>
            </div>
          </div>
        </lablup-activity-panel>
      </div>
      <backend-ai-dialog id="add-folder-dialog" fixed backdrop>
        <span slot="title">${c("data.CreateANewStorageFolder")}</span>
        <div slot="content">
          <mwc-textfield id="add-folder-name" label="${c("data.Foldername")}"
          @change="${()=>this._validateFolderName()}" pattern="^[a-zA-Z0-9\._-]*$"
            required validationMessage="${c("data.Allowslettersnumbersand-_dot")}" maxLength="64"
            placeholder="${c("maxLength.64chars")}"></mwc-textfield>
          <mwc-select class="full-width fixed-position" id="add-folder-host" label="${c("data.Host")}" fixedMenuPosition>
            ${this.vhosts.map(((e,t)=>d`
              <mwc-list-item hasMeta value="${e}" ?selected="${0===t}">
                <span>${e}</span>
                <mwc-icon-button slot="meta" icon="info"
                    @click="${t=>this._showStorageDescription(t,e)}">
                </mwc-icon-button>
              </mwc-list-item>
            `))}
          </mwc-select>
          <div class="horizontal layout">
            <mwc-select id="add-folder-type" label="${c("data.Type")}"
                        style="width:${this.is_admin&&this.allowed_folder_type.includes("group")?"50%":"100%"}">
              ${this.allowed_folder_type.includes("user")?d`
                <mwc-list-item value="user" selected>${c("data.User")}</mwc-list-item>
              `:d``}
              ${this.is_admin&&this.allowed_folder_type.includes("group")?d`
                <mwc-list-item value="group" ?selected="${!this.allowed_folder_type.includes("user")}">${c("data.Project")}</mwc-list-item>
              `:d``}
            </mwc-select>
            ${this.is_admin&&this.allowed_folder_type.includes("group")?d`
              <mwc-select class="fixed-position" id="add-folder-group" label="${c("data.Project")}" FixedMenuPosition>
                ${this.allowedGroups.map(((e,t)=>d`
                  <mwc-list-item value="${e.name}" ?selected="${0===t}">${e.name}</mwc-list-item>
                `))}
              </mwc-select>
            </div>
          `:d``}
          </div>
          ${this._vfolderInnatePermissionSupport?d`
            <div class="horizontal layout">
              <mwc-select class="fixed-position" id="add-folder-usage-mode" label="${c("data.UsageMode")}" fixedMenuPosition>
                ${this.usageModes.map(((e,t)=>d`
                  <mwc-list-item value="${e}" ?selected="${0===t}">${e}</mwc-list-item>
                `))}
              </mwc-select>
              <mwc-select class="fixed-position" id="add-folder-permission" label="${c("data.Permission")}" fixedMenuPosition>
                ${this.permissions.map(((e,t)=>d`
                  <mwc-list-item value="${e}" ?selected="${0===t}">${e}</mwc-list-item>
                `))}
              </mwc-select>
            </div>
          `:d``}
          ${this.enableStorageProxy?d`
          <!--<div class="horizontal layout flex wrap center justified">
              <p style="color:rgba(0, 0, 0, 0.6);">
                ${c("data.folders.Cloneable")}
              </p>
              <mwc-switch id="add-folder-cloneable" style="margin-right:10px;">
              </mwc-switch>
            </div>-->
            `:d``}
          <div style="font-size:11px;">
            ${c("data.DialogFolderStartingWithDotAutomount")}
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex">
          <mwc-button
              unelevated
              fullwidth
              id="add-button"
              icon="rowing"
              label="${c("data.Create")}"
              @click="${()=>this._addFolder()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="clone-folder-dialog" fixed backdrop>
        <span slot="title">${c("data.folders.CloneAFolder")}</span>
        <div slot="content" style="width:100%;">
          <mwc-textfield id="clone-folder-src" label="${c("data.FolderToCopy")}" value="${this.cloneFolderName}"
              disabled></mwc-textfield>
          <mwc-textfield id="clone-folder-name" label="${c("data.Foldername")}"
              @change="${()=>this._validateFolderName()}" pattern="^[a-zA-Z0-9\._-]*$"
              required validationMessage="${c("data.Allowslettersnumbersand-_dot")}" maxLength="64"
              placeholder="${c("maxLength.64chars")}"></mwc-textfield>
          <mwc-select class="full-width fixed-position" id="clone-folder-host" label="${c("data.Host")}" fixedMenuPosition>
            ${this.vhosts.map(((e,t)=>d`
              <mwc-list-item hasMeta value="${e}" ?selected="${0===t}">
                <span>${e}</span>
                <mwc-icon-button slot="meta" icon="info"
                    @click="${t=>this._showStorageDescription(t,e)}">
                </mwc-icon-button>
              </mwc-list-item>
            `))}
          </mwc-select>
          <div class="horizontal layout">
            <mwc-select id="clone-folder-type" label="${c("data.Type")}"
                        style="width:${this.is_admin&&this.allowed_folder_type.includes("group")?"50%":"100%"}">
              ${this.allowed_folder_type.includes("user")?d`
                <mwc-list-item value="user" selected>${c("data.User")}</mwc-list-item>
              `:d``}
              ${this.is_admin&&this.allowed_folder_type.includes("group")?d`
                <mwc-list-item value="group" ?selected="${!this.allowed_folder_type.includes("user")}">${c("data.Project")}</mwc-list-item>
              `:d``}
            </mwc-select>
            ${this.is_admin&&this.allowed_folder_type.includes("group")?d`
                <mwc-select class="fixed-position" id="clone-folder-group" label="${c("data.Project")}" FixedMenuPosition>
                  ${this.allowedGroups.map(((e,t)=>d`
                    <mwc-list-item value="${e.name}" ?selected="${0===t}">${e.name}</mwc-list-item>
                  `))}
                </mwc-select>
            `:d``}
          </div>
          ${this._vfolderInnatePermissionSupport?d`
            <div class="horizontal layout">
              <mwc-select class="fixed-position" id="clone-folder-usage-mode" label="${c("data.UsageMode")}" FixedMenuPosition>
                ${this.usageModes.map(((e,t)=>d`
                  <mwc-list-item value="${e}" ?selected="${0===t}">${e}</mwc-list-item>
                `))}
              </mwc-select>
              <mwc-select class="fixed-position" id="clone-folder-permission" label="${c("data.Permission")}" FixedMenuPosition>
                ${this.permissions.map(((e,t)=>d`
                  <mwc-list-item value="${e}" ?selected="${0===t}">${e}</mwc-list-item>
                `))}
              </mwc-select>
            </div>
          `:d``}
          ${this.enableStorageProxy?d`
          <div class="horizontal layout flex wrap center justified">
              <p style="color:rgba(0, 0, 0, 0.6);">
                ${c("data.folders.Cloneable")}
              </p>
              <mwc-switch id="clone-folder-cloneable" style="margin-right:10px;">
              </mwc-switch>
            </div>
            `:d``}
          <div style="font-size:11px;">
            ${c("data.DialogFolderStartingWithDotAutomount")}
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex">
          <mwc-button
              unelevated
              fullwidth
              id="clone-button"
              icon="file_copy"
              label="${c("data.Create")}"
              @click="${()=>this._cloneFolder()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="help-description" fixed backdrop>
        <span slot="title">${this._helpDescriptionTitle}</span>
        <div slot="content" class="horizontal layout center">
        ${""==this._helpDescriptionIcon?d``:d`
          <img slot="graphic" src="resources/icons/${this._helpDescriptionIcon}" style="width:64px;height:64px;margin-right:10px;" />
          `}
          <p style="font-size:14px;width:256px;">${m(this._helpDescription)}</p>
        </div>
      </backend-ai-dialog>
    `}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification,this.folderLists=this.shadowRoot.querySelectorAll("backend-ai-storage-list"),fetch("resources/storage_metadata.json").then((e=>e.json())).then((e=>{const t=Object();for(const i in e.storageInfo)({}).hasOwnProperty.call(e.storageInfo,i)&&(t[i]={},"name"in e.storageInfo[i]&&(t[i].name=e.storageInfo[i].name),"description"in e.storageInfo[i]?t[i].description=e.storageInfo[i].description:t[i].description=h("data.NoStorageDescriptionFound"),"icon"in e.storageInfo[i]?t[i].icon=e.storageInfo[i].icon:t[i].icon="local.png","dialects"in e.storageInfo[i]&&e.storageInfo[i].dialects.forEach((e=>{t[e]=t[i]})));this.storageInfo=t})),this.options={responsive:!0,maintainAspectRatio:!0,legend:{display:!0,position:"bottom",align:"center",labels:{fontSize:20,boxWidth:10}}},document.addEventListener("backend-ai-folder-list-changed",(()=>{this._createStorageChart()})),document.addEventListener("backend-ai-vfolder-cloning",(e=>{if(e.detail){const t=e.detail;this.cloneFolderName=t.name,this._cloneFolderDialog()}}))}async _viewStateChanged(e){if(await this.updateComplete,!1===e)return;const t=()=>{this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this.enableStorageProxy=globalThis.backendaiclient.supports("storage-proxy"),this.apiMajorVersion=globalThis.backendaiclient.APIMajorVersion,globalThis.backendaiclient.isAPIVersionCompatibleWith("v4.20191215")&&(this._vfolderInnatePermissionSupport=!0),globalThis.backendaiclient.vfolder.list_allowed_types().then((e=>{this.allowed_folder_type=e}))};void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{t(),this._createStorageChart()}),!0):(t(),this._createStorageChart())}async _createStorageChart(){const e=globalThis.backendaiclient._config.accessKey,t=(await globalThis.backendaiclient.keypair.info(e,["resource_policy"])).keypair.resource_policy,i=(await globalThis.backendaiclient.resourcePolicy.get(t,["max_vfolder_count"])).keypair_resource_policy.max_vfolder_count,o=globalThis.backendaiclient.current_group_id(),a=await globalThis.backendaiclient.vfolder.list(o);this.createdCount=a.filter((e=>e.is_owner)).length,this.invitedCount=a.length-this.createdCount,this.capacity=this.createdCount<i?i-this.createdCount:0,this.totalCount=this.capacity+this.createdCount+this.invitedCount,this.folders={labels:[h("data.Created"),h("data.Invited"),h("data.Capacity")],datasets:[{data:[this.createdCount,this.invitedCount,this.capacity],backgroundColor:["#722cd7","#60bb43","#efefef"]}]}}_showTab(e){const t=this.shadowRoot.querySelectorAll(".tab-content");for(let e=0;e<t.length;e++)t[e].style.display="none";this.shadowRoot.querySelector("#"+e.title+"-folder-lists").style.display="block",this._activeTab=e.title}async _cloneFolderDialog(){const e=await globalThis.backendaiclient.vfolder.list_hosts();if(this.shadowRoot.querySelector("#add-folder-name").value="",this.vhosts=e.allowed,this.vhost=e.default,this.allowed_folder_type.includes("group")){const e=await globalThis.backendaiclient.group.list();this.allowedGroups=e.groups}this.shadowRoot.querySelector("#clone-folder-name").value=await this._checkFolderNameAlreadyExists(this.cloneFolderName),this.openDialog("clone-folder-dialog")}async _addFolderDialog(){const e=await globalThis.backendaiclient.vfolder.list_hosts();if(this.shadowRoot.querySelector("#add-folder-name").value="",this.vhosts=e.allowed,this.vhost=e.default,this.allowed_folder_type.includes("group")){const e=await globalThis.backendaiclient.group.list();this.allowedGroups=e.groups}this.openDialog("add-folder-dialog")}openDialog(e){this.shadowRoot.querySelector("#"+e).show()}closeDialog(e){this.shadowRoot.querySelector("#"+e).hide()}_showStorageDescription(e,t){e.stopPropagation(),t in this.storageInfo?(this._helpDescriptionTitle=this.storageInfo[t].name,this._helpDescription=this.storageInfo[t].description,this._helpDescriptionIcon=this.storageInfo[t].icon):(this._helpDescriptionTitle=t,this._helpDescriptionIcon="local.png",this._helpDescription=h("data.NoStorageDescriptionFound"));this.shadowRoot.querySelector("#help-description").show()}_indexFrom1(e){return e+1}_addFolder(){const e=this.shadowRoot.querySelector("#add-folder-name"),t=e.value,i=this.shadowRoot.querySelector("#add-folder-host").value;let o,a=this.shadowRoot.querySelector("#add-folder-type").value;const l=this.shadowRoot.querySelector("#add-folder-usage-mode"),r=this.shadowRoot.querySelector("#add-folder-permission"),s=this.shadowRoot.querySelector("#add-folder-cloneable");let n="",d="",c=!1;if(!1===["user","group"].includes(a)&&(a="user"),o="user"===a?"":this.is_admin?this.shadowRoot.querySelector("#add-folder-group").value:globalThis.backendaiclient.current_group,l&&(n=l.value,n=n.toLowerCase()),r)switch(d=r.value,d){case"Read-Write":d="rw";break;case"Read-Only":d="ro";break;case"Delete":d="wd";break;default:d="rw"}if(s&&(c=s.checked),e.reportValidity(),e.checkValidity()){globalThis.backendaiclient.vfolder.create(t,i,o,n,d,c).then((e=>{this.notification.text=h("data.folders.FolderCreated"),this.notification.show(),this._refreshFolderList()})).catch((e=>{e&&e.message&&(this.notification.text=u.relieve(e.message),this.notification.detail=e.message,this.notification.show(!0,e))})),this.closeDialog("add-folder-dialog")}}async _cloneFolder(){const e=this.shadowRoot.querySelector("#clone-folder-name"),t=await this._checkFolderNameAlreadyExists(e.value,!0),i=this.shadowRoot.querySelector("#clone-folder-host").value;this.shadowRoot.querySelector("#clone-folder-type").value;const o=this.shadowRoot.querySelector("#clone-folder-usage-mode"),a=this.shadowRoot.querySelector("#clone-folder-permission"),l=this.shadowRoot.querySelector("#clone-folder-cloneable");let r="",s="",n=!1;if(o&&(r=o.value,r=r.toLowerCase()),a)switch(s=a.value,s){case"Read-Write":s="rw";break;case"Read-Only":s="ro";break;case"Delete":s="wd";break;default:s="rw"}if(n=!!l&&l.checked,e.reportValidity(),e.checkValidity()){const e={cloneable:n,permission:s,target_host:i,target_name:t,usage_mode:r};globalThis.backendaiclient.vfolder.clone(e,this.cloneFolderName).then((e=>{this.notification.text=h("data.folders.FolderCloned"),this.notification.show(),this._refreshFolderList()})).catch((e=>{e&&e.message&&(this.notification.text=u.relieve(e.message),this.notification.detail=e.message,this.notification.show(!0,e))})),this.closeDialog("clone-folder-dialog")}}_validateFolderName(){const e=this.shadowRoot.querySelector("#add-folder-name");e.validityTransform=(t,i)=>{if(i.valid){let t=!/[`~!@#$%^&*()|+=?;:'",<>{}[\]\\/\s]/gi.test(e.value);return t||(e.validationMessage=h("data.Allowslettersnumbersand-_dot")),e.value.length>64&&(t=!1,e.validationMessage=h("data.FolderNameTooLong")),{valid:t,customError:!t}}return i.valueMissing?(e.validationMessage=h("data.FolderNameRequired"),{valid:i.valid,customError:!i.valid}):(e.validationMessage=h("data.Allowslettersnumbersand-_dot"),{valid:i.valid,customError:!i.valid})}}_refreshFolderList(){for(const e of this.folderLists)e.refreshFolderList()}async _checkFolderNameAlreadyExists(e,t=!1){const i=globalThis.backendaiclient.current_group_id(),o=(await globalThis.backendaiclient.vfolder.list(i)).map((e=>e.name));if(o.includes(e)){t&&(this.notification.text=h("import.FolderAlreadyExists"),this.notification.show());let i=1,a=e;for(;o.includes(a);)a=e+"_"+i,i++;e=a}return e}};t([i({type:String})],T.prototype,"apiMajorVersion",void 0),t([i({type:Object})],T.prototype,"folders",void 0),t([i({type:Object})],T.prototype,"folderInfo",void 0),t([i({type:Boolean})],T.prototype,"is_admin",void 0),t([i({type:Boolean})],T.prototype,"enableStorageProxy",void 0),t([i({type:Boolean})],T.prototype,"authenticated",void 0),t([i({type:String})],T.prototype,"deleteFolderId",void 0),t([i({type:String})],T.prototype,"vhost",void 0),t([i({type:Array})],T.prototype,"vhosts",void 0),t([i({type:Array})],T.prototype,"usageModes",void 0),t([i({type:Array})],T.prototype,"permissions",void 0),t([i({type:Array})],T.prototype,"allowedGroups",void 0),t([i({type:Array})],T.prototype,"allowed_folder_type",void 0),t([i({type:Object})],T.prototype,"notification",void 0),t([i({type:Object})],T.prototype,"spinner",void 0),t([i({type:Object})],T.prototype,"folderLists",void 0),t([i({type:String})],T.prototype,"_status",void 0),t([i({type:Boolean})],T.prototype,"active",void 0),t([i({type:Object})],T.prototype,"_lists",void 0),t([i({type:Boolean})],T.prototype,"_vfolderInnatePermissionSupport",void 0),t([i({type:Object})],T.prototype,"storageInfo",void 0),t([i({type:String})],T.prototype,"_activeTab",void 0),t([i({type:String})],T.prototype,"_helpDescription",void 0),t([i({type:String})],T.prototype,"_helpDescriptionTitle",void 0),t([i({type:String})],T.prototype,"_helpDescriptionIcon",void 0),t([i({type:Object})],T.prototype,"options",void 0),t([i({type:Number})],T.prototype,"createdCount",void 0),t([i({type:Number})],T.prototype,"invitedCount",void 0),t([i({type:Number})],T.prototype,"totalCount",void 0),t([i({type:Number})],T.prototype,"capacity",void 0),t([i({type:String})],T.prototype,"cloneFolderName",void 0),T=t([o("backend-ai-data-view")],T);var D=T;export default D;
