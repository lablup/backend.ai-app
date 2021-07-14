import{G as e,h as t}from"./vaadin-grid-9b9ff979.js";import"./vaadin-grid-filter-6b1b55a3.js";
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class a extends e{static get template(){return t`
      <template class="header" id="headerTemplate">
        <vaadin-grid-filter path="[[path]]" value="[[_filterValue]]">
          <vaadin-text-field
            theme="small"
            focus-target=""
            style="max-width: 100%;"
            slot="filter"
            value="{{_filterValue}}"
            label="[[_getHeader(header, path)]]"
          ></vaadin-text-field>
        </vaadin-grid-filter>
      </template>
    `}static get is(){return"vaadin-grid-filter-column"}static get properties(){return{path:String,header:String}}_prepareHeaderTemplate(){const e=this._prepareTemplatizer(this.$.headerTemplate);return e.templatizer.dataHost=this,e}_getHeader(e,t){return e||this._generateHeader(t)}}customElements.define(a.is,a);