import{G as e}from"./vaadin-grid-69a293c4.js";import"./vaadin-grid-sorter-d6b9e3db.js";
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class t extends e{static get is(){return"vaadin-grid-sort-column"}static get properties(){return{path:String,direction:{type:String,notify:!0}}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, direction)"]}constructor(){super(),this.__boundOnDirectionChanged=this.__onDirectionChanged.bind(this)}_defaultHeaderRenderer(e,t){let r=e.firstElementChild;r||(r=document.createElement("vaadin-grid-sorter"),r.addEventListener("direction-changed",this.__boundOnDirectionChanged),e.appendChild(r)),r.path=this.path,r.__rendererDirection=this.direction,r.direction=this.direction,r.textContent=this.__getHeader(this.header,this.path)}_computeHeaderRenderer(){return this._defaultHeaderRenderer}__onDirectionChanged(e){e.detail.value!==e.target.__rendererDirection&&(this.direction=e.detail.value)}__getHeader(e,t){return e||(t?this._generateHeader(t):void 0)}}customElements.define(t.is,t);
