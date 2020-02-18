import{f as e}from"./backend-ai-console-f442a6b8.js";import{G as t}from"./vaadin-grid-d72d8ff2.js";import"./vaadin-grid-sorter-d8dd722c.js";
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class r extends t{static get template(){return e`
    <template class="header" id="headerTemplate">
      <vaadin-grid-sorter path="[[path]]" direction="{{direction}}">[[_getHeader(header, path)]]</vaadin-grid-sorter>
    </template>
`}static get is(){return"vaadin-grid-sort-column"}static get properties(){return{path:String,direction:{type:String,notify:!0}}}_prepareHeaderTemplate(){const e=this._prepareTemplatizer(this.$.headerTemplate);return e.templatizer.dataHost=this,e}_getHeader(e,t){return e||this._generateHeader(t)}}customElements.define(r.is,r);
