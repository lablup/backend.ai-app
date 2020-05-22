import{a4 as e,r as t,_ as i,p as n,s as o,q as s,R as a,c as r,h as l,d,e as c,I as h,a as p,A as u,f as v,b as m}from"./backend-ai-console-258bce16.js";import"./lablup-loading-spinner-ce8c59c1.js";import{h as g,b,F as y,n as w,o as f,I as _,s as x}from"./iron-resizable-behavior-c7edc396.js";import{T as z,D as E,a as C,b as L,E as k}from"./vaadin-grid-db23b19c.js";import"./paper-dropdown-menu-53ae0330.js";import"./iron-iconset-svg-19993a4c.js";import{r as T}from"./radio-behavior-cc1ecd41.js";import"./expansion-633f19a7.js";import"./input-behavior-54325f99.js";import"./textfield-a301f777.js";import"./vaadin-grid-selection-column-14023a4b.js";import"./vaadin-grid-sorter-f16f385c.js";import"./vaadin-grid-sort-column-0ee0e80a.js";import"./iconset-00aad4a4.js";import"./vaadin-progress-bar-0ee7fbba.js";import"./backend-ai-session-list-68d8e43d.js";import"./json_to_csv-0a6876b9.js";import"./tab-group-490f625c.js";const O=document.createElement("template");O.innerHTML='<dom-module id="lumo-overlay">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part="overlay"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part="content"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part="backdrop"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part="backdrop"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(O.content);const B=g`<dom-module id="lumo-dialog" theme-for="vaadin-dialog-overlay">
  <template>
    <style include="lumo-overlay">
      /* Optical centering */
      :host::before,
      :host::after {
        content: "";
        flex-basis: 0;
        flex-grow: 1;
      }

      :host::after {
        flex-grow: 1.1;
      }

      [part="overlay"] {
        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
        background-image: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      [part="content"] {
        padding: var(--lumo-space-l);
      }

      /* Animations */

      :host([opening]),
      :host([closing]) {
        animation: 0.25s lumo-overlay-dummy-animation;
      }

      :host([opening]) [part="overlay"] {
        animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(.215, .61, .355, 1) both;
      }

      @keyframes vaadin-dialog-enter {
        0% {
          opacity: 0;
          transform: scale(0.95);
        }
      }

      :host([closing]) [part="overlay"] {
        animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(.55, .055, .675, .19) both;
      }

      :host([closing]) [part="backdrop"] {
        animation-delay: 0.05s;
      }

      @keyframes vaadin-dialog-exit {
        100% {
          opacity: 0;
          transform: scale(1.02);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(B.content);const $=Element.prototype,S=$.matches||$.matchesSelector||$.mozMatchesSelector||$.msMatchesSelector||$.oMatchesSelector||$.webkitMatchesSelector;
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
let N=0;const R={},I=e=>{N++;const t=`vaadin-overlay-content-${N}`,i=document.createElement("template"),n=document.createElement("style");n.textContent=":host { display: block; }"+e,i.content.appendChild(n),window.ShadyCSS&&window.ShadyCSS.prepareTemplate(i,t);const o=class extends HTMLElement{static get is(){return t}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.importNode(i.content,!0)))}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}};return customElements.define(o.is,o),R[e]=t,t};class A extends(z(E(b))){static get template(){return g`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new y(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,i=document.documentElement.clientHeight;t&&i>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",i-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter(e=>e.localName&&"template"===e.localName)[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap&&!e.defaultPrevented)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),C(this,()=>{this.focusTrap&&!this.contains(document._activeElement||document.activeElement)&&this._cycleTab(0,0);const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)}),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){const i=`__${e}Handler`,n=e=>{e&&e.target!==this||(t(),this.removeEventListener("animationend",n),delete this[i])};this[i]=n,this.addEventListener("animationend",n)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening","");const e=()=>{document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){if(this._exitModalState(),this.restoreFocusOnClose&&this.__restoreFocusNode){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}this.setAttribute("closing","");const e=()=>{document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this.removeAttribute("closing")};this._shouldAnimate()?this._enqueueAnimation("closing",e):e()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof A).sort((e,t)=>e.__zIndex-t.__zIndex||0)}get _last(){return this===A.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),A.__attachedInstances.forEach(e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=A.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=w(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const i=e._templateRoot||(e._templateRoot=e.getRootNode());if(i!==document){const e=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let t=Array.from(i.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"");if(e){const e=window.ShadyCSS.ScopingShim._styleInfoForNode(i.host);e&&(t+=e._getStyleRules().parsedCssText,t+="}")}if(t=t.replace(/:host/g,":host-nomatch"),t)if(e){const e=(e=>{const t=R[e]||I(e);return document.createElement(t)})(t);e.id="content",e.setAttribute("part","content"),this.$.content.parentNode.replaceChild(e,this.$.content),e.className=this.$.content.className,this._originalContentPart=this.$.content,this.$.content=e}else{const e=document.createElement("style");e.textContent=t,this.$.content.shadowRoot.appendChild(e),this._contentNodes.unshift(e)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,i,n){e!==t?this.template=void 0:i!==n&&(this.renderer=void 0)}render(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_templateOrRendererChanged(e,t,i,n,o,s){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const a=this._oldOwner!==i||this._oldModel!==n;this._oldModel=n,this._oldOwner=i;const r=this._oldInstanceProps!==o||this._oldTemplate!==e;this._oldInstanceProps=o,this._oldTemplate=e;const l=this._oldRenderer!==t;this._oldRenderer=t;const d=this._oldOpened!==s;if(this._oldOpened=s,e&&r)this._stampOverlayTemplate(e,o);else if(t&&(l||d||a)){if(this.content=this,l)for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);s&&this.render()}}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){const i=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(i)),(t+=e)>=i.length?t=0:t<0&&(t=i.length-1),i[t].focus()}_getFocusableElements(){return class{static getTabbableNodes(e){const t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}static isFocusable(e){return S.call(e,"input, select, textarea, button, object")?S.call(e,":not([disabled])"):S.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}static isTabbable(e){return this.isFocusable(e)&&S.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}static _normalizedTabIndex(e){if(this.isFocusable(e)){const t=e.getAttribute("tabindex")||0;return Number(t)}return-1}static _collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;const i=e,n=this._normalizedTabIndex(i);let o,s=n>0;if(n>=0&&t.push(i),o="slot"===i.localName?i.assignedNodes({flatten:!0}):(i.shadowRoot||i).children,o)for(let e=0;e<o.length;e++)s=this._collectTabbableNodes(o[e],t)||s;return s}static _isVisible(e){let t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&(t=window.getComputedStyle(e),"hidden"!==t.visibility&&"none"!==t.display)}static _sortByTabIndex(e){const t=e.length;if(t<2)return e;const i=Math.ceil(t/2),n=this._sortByTabIndex(e.slice(0,i)),o=this._sortByTabIndex(e.slice(i));return this._mergeSortByTabIndex(n,o)}static _mergeSortByTabIndex(e,t){const i=[];for(;e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)}static _hasLowerTabOrder(e,t){const i=Math.max(e.tabIndex,0),n=Math.max(t.tabIndex,0);return 0===i||0===n?n>i:i>n}}.getTabbableNodes(this.$.overlay)}_getActiveElement(){let e=document._activeElement||document.activeElement;for(e&&e!==document.documentElement&&e instanceof Element!=!1||(e=document.body);e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const i=e.ownerDocument;for(;t&&t!==i&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){let e="";const t=A.__attachedInstances.filter(e=>e!==this).pop();if(t){e=t.__zIndex+1}this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(A.is,A);const F=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})(),M=e=>class extends e{static get properties(){return{_touchDevice:{type:Boolean,value:F}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(e){if(this.draggable&&(0===e.button||e.touches)){const t=this.$.overlay.$.resizerContainer,i=e.target===t,n=e.offsetX>t.clientWidth||e.offsetY>t.clientHeight,o=e.target===this.$.overlay.$.content,s=e.target.classList.contains("draggable");if(i&&!n||o||s){!this._touchDevice&&!s&&e.preventDefault(),this._originalBounds=this._getOverlayBounds();const t=this.__getMouseOrFirstTouchEvent(e);this._originalMouseCoords={top:t.pageY,left:t.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),"absolute"!==this.$.overlay.$.overlay.style.position&&this._setBounds(this._originalBounds)}}}_drag(e){const t=this.__getMouseOrFirstTouchEvent(e);if(this._eventInWindow(t)&&("touchmove"!==e.type||"touchmove"===e.type&&e.touches.length<2)){const e=this._originalBounds.top+(t.pageY-this._originalMouseCoords.top),i=this._originalBounds.left+(t.pageX-this._originalMouseCoords.left);this._setBounds({top:e,left:i})}}_stopDrag(){window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}},P=document.createElement("template");P.innerHTML="<dom-module id=\"vaadin-dialog-resizable-overlay-styles\" theme-for=\"vaadin-dialog-overlay\">\n  <template>\n    <style>\n      [part='overlay'] {\n        position: relative;\n        overflow: visible;\n      }\n\n      /* Hack for iOS to make the overlay take full size */\n      [part='overlay'][style] {\n        display: flex;\n        flex-direction: column;\n      }\n\n      [part='content'] {\n        box-sizing: border-box;\n        height: 100%;\n      }\n\n      .resizer-container {\n        height: 100%;\n        width: 100%;\n        overflow: auto;\n      }\n\n      :host(:not([resizable])) .resizer {\n        display: none;\n      }\n\n      .resizer {\n        position: absolute;\n        height: 16px;\n        width: 16px;\n      }\n\n      .resizer.edge {\n        height: 8px;\n        width: 8px;\n        top: -4px;\n        right: -4px;\n        bottom: -4px;\n        left: -4px;\n      }\n\n      .resizer.edge.n {\n        width: auto;\n        bottom: auto;\n        cursor: ns-resize;\n      }\n\n      .resizer.ne {\n        top: -4px;\n        right: -4px;\n        cursor: nesw-resize;\n      }\n\n      .resizer.edge.e {\n        height: auto;\n        left: auto;\n        cursor: ew-resize;\n      }\n\n      .resizer.se {\n        bottom: -4px;\n        right: -4px;\n        cursor: nwse-resize;\n      }\n\n      .resizer.edge.s {\n        width: auto;\n        top: auto;\n        cursor: ns-resize;\n      }\n\n      .resizer.sw {\n        bottom: -4px;\n        left: -4px;\n        cursor: nesw-resize;\n      }\n\n      .resizer.edge.w {\n        height: auto;\n        right: auto;\n        cursor: ew-resize;\n      }\n\n      .resizer.nw {\n        top: -4px;\n        left: -4px;\n        cursor: nwse-resize;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(P.content);const D=e=>class extends e{ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(e=>{const t=document.createElement("div");this._resizeListeners.start[e]=t=>this._startResize(t,e),this._resizeListeners.resize[e]=t=>this._resize(t,e),this._resizeListeners.stop[e]=()=>this._stopResize(e),1===e.length&&t.classList.add("edge"),t.classList.add("resizer"),t.classList.add(e),t.addEventListener("mousedown",this._resizeListeners.start[e]),t.addEventListener("touchstart",this._resizeListeners.start[e]),this.$.overlay.$.resizerContainer.appendChild(t)})}_startResize(e,t){if(0===e.button||e.touches){e.preventDefault(),this._originalBounds=this._getOverlayBounds();const i=this.__getMouseOrFirstTouchEvent(e);this._originalMouseCoords={top:i.pageY,left:i.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[t]),window.addEventListener("touchmove",this._resizeListeners.resize[t]),window.addEventListener("mouseup",this._resizeListeners.stop[t]),window.addEventListener("touchend",this._resizeListeners.stop[t]),"absolute"!==this.$.overlay.$.overlay.style.position&&this._setBounds(this._originalBounds)}}_resize(e,t){const i=this.__getMouseOrFirstTouchEvent(e);if(this._eventInWindow(i)&&("touchmove"!==e.type||"touchmove"===e.type&&e.touches.length<2)){const e=40;t.split("").forEach(t=>{switch(t){case"n":{const t=this._originalBounds.height-(i.pageY-this._originalMouseCoords.top),n=this._originalBounds.top+(i.pageY-this._originalMouseCoords.top);t>e&&this._setBounds({top:n,height:t});break}case"e":{const t=this._originalBounds.width+(i.pageX-this._originalMouseCoords.left);t>e&&this._setBounds({width:t});break}case"s":{const t=this._originalBounds.height+(i.pageY-this._originalMouseCoords.top);t>e&&this._setBounds({height:t});break}case"w":{const t=this._originalBounds.width-(i.pageX-this._originalMouseCoords.left),n=this._originalBounds.left+(i.pageX-this._originalMouseCoords.left);t>e&&this._setBounds({left:n,width:t});break}}}),this.$.overlay.notifyResize()}}_stopResize(e){window.removeEventListener("mousemove",this._resizeListeners.resize[e]),window.removeEventListener("touchmove",this._resizeListeners.resize[e]),window.removeEventListener("mouseup",this._resizeListeners.stop[e]),window.removeEventListener("touchend",this._resizeListeners.stop[e]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const{width:e,height:t}=getComputedStyle(this.$.overlay.$.overlay),i=this.$.overlay.$.content;i.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:n,height:o}=getComputedStyle(i);return i.removeAttribute("style"),{width:e,height:t,contentWidth:n,contentHeight:o}}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,j=document.createElement("template");let U;j.innerHTML='<dom-module id="vaadin-dialog-overlay-styles" theme-for="vaadin-dialog-overlay">\n  <template>\n    <style>\n      /*\n        NOTE(platosha): Make some min-width to prevent collapsing of the content\n        taking the parent width, e. g., <vaadin-grid> and such.\n      */\n      [part="content"] {\n        min-width: 12em; /* matches the default <vaadin-text-field> width */\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(j.content);class G extends(f(_,A)){static get is(){return"vaadin-dialog-overlay"}static get template(){if(!U){U=super.template.cloneNode(!0);const e=U.content.querySelector('[part="content"]'),t=U.content.querySelector('[part="overlay"]'),i=document.createElement("div");i.id="resizerContainer",i.classList.add("resizer-container"),i.appendChild(e),t.appendChild(i)}return U}static get properties(){return{modeless:Boolean,withBackdrop:Boolean}}}customElements.define(G.is,G);class q extends(L(k(M(D(b))))){static get template(){return g`
    <style>
      :host {
        display: none;
      }
    </style>

    <vaadin-dialog-overlay id="overlay" on-opened-changed="_onOverlayOpened" on-mousedown="_bringOverlayToFront" on-touchstart="_bringOverlayToFront" theme\$="[[theme]]" modeless="[[modeless]]" with-backdrop="[[!modeless]]" resizable\$="[[resizable]]" focus-trap="">
    </vaadin-dialog-overlay>
`}static get is(){return"vaadin-dialog"}static get version(){return"2.4.0"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String},theme:String,_contentTemplate:Object,renderer:Function,modeless:{type:Boolean,value:!1},draggable:{type:Boolean,value:!1,reflectToAttribute:!0},resizable:{type:Boolean,value:!1,reflectToAttribute:!0},_oldTemplate:Object,_oldRenderer:Object}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel)","_templateOrRendererChanged(_contentTemplate, renderer)"]}ready(){super.ready(),this.$.overlay.setAttribute("role","dialog"),this.$.overlay.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),this._observer=new y(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this.$.overlay.$.content.addEventListener("touchmove",this._preventMove,{passive:!1})}_preventMove(e){e.touches.length<2&&e.preventDefault()}_setTemplateFromNodes(e){this._contentTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate}_removeNewRendererOrTemplate(e,t,i,n){e!==t?this._contentTemplate=void 0:i!==n&&(this.renderer=void 0)}render(){this.$.overlay.render()}_templateOrRendererChanged(e,t){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for dialog content");this._oldTemplate=e,this._oldRenderer=t,t&&this.$.overlay.setProperties({owner:this,renderer:t})}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_openedChanged(e){e&&(this.$.overlay.template=this.querySelector("template")),this.$.overlay.opened=e}_ariaLabelChanged(e){null!=e?this.$.overlay.setAttribute("aria-label",e):this.$.overlay.removeAttribute("aria-label")}_onOverlayOpened(e){!1===e.detail.value&&(this.opened=!1)}_handleOutsideClick(e){this.noCloseOnOutsideClick&&e.preventDefault()}_handleEscPress(e){this.noCloseOnEsc&&e.preventDefault()}_setBounds(e){const t=this.$.overlay.$.overlay,i=Object.assign({},e);"absolute"!==t.style.position&&(t.style.position="absolute",t.style.maxWidth="none");for(const e in i)"number"==typeof i[e]&&(i[e]=`${i[e]}px`);Object.assign(t.style,i)}_bringOverlayToFront(){this.modeless&&this.$.overlay.bringToFront()}_getOverlayBounds(){const e=this.$.overlay.$.overlay.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect();return{top:e.top-t.top,left:e.left-t.left,width:e.width,height:e.height}}_eventInWindow(e){return e.clientX>=0&&e.clientX<=window.innerWidth&&e.clientY>=0&&e.clientY<=window.innerHeight}__getMouseOrFirstTouchEvent(e){return e.touches?e.touches[0]:e}}customElements.define(q.is,q);let H=class extends e{constructor(){super(...arguments),this.disabled=!1,this.clickable=!1,this.noRipple=!1,this.role="listitem"}queryGroup(){return Array.from(this.parentElement.querySelectorAll(`${this.nodeName.toLowerCase()}:not([disabled])`))}rowToElement(e){e.focus()}onKeyDown(e){super.onKeyDown(e),T(this,e)}render(){return l` <slot name="before"></slot> <div id="content"> <slot></slot> </div> <slot name="after"></slot> <wl-ripple id="ripple" overlay .target="${this}" ?disabled="${this.disabled||!this.clickable||this.noRipple}"></wl-ripple> ${this.renderFormElement()} `}};H.styles=[...e.styles,t(":host{--_list-item-color:var(--list-item-color,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));--_list-item-bg:var(--list-item-bg,transparent);color:var(--_list-item-color);background:var(--_list-item-bg);border-radius:var(--list-item-border-radius,.5rem);transition:var(--list-item-transition,background var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease),color var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease));padding:var(--list-item-padding,.75rem 1.5rem);display:flex;align-items:center;outline:none;overflow:hidden;position:relative;text-align:left}:host([clickable]){-webkit-user-select:none;user-select:none}:host([clickable]:not([active]):not([disabled])){cursor:pointer}:host(:focus),:host(:hover){--_list-item-color:var(--list-item-color-hover,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));--_list-item-bg:var(--list-item-bg-hover,hsl(var(--shade-200,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,85%))));will-change:background,color}:host([active]:focus),:host([active]:hover){--_list-item-color:var(--list-item-color-active-hover,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_list-item-bg:var(--list-item-bg-active-hover,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.15))}:host([disabled]){--_list-item-color:var(--list-item-color-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));--_list-item-bg:var(--list-item-bg-disabled,transparent);opacity:var(--list-item-opacity-disabled,.6);pointer-events:none}:host([active]){--_list-item-color:var(--list-item-color,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_list-item-bg:var(--list-item-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.1))}::slotted([slot=after]),::slotted([slot=before]){flex-shrink:0}::slotted([slot=before]){margin:var(--list-item-left-margin,0 1.5rem 0 0)}::slotted([slot=after]),::slotted([slot=before]){align-self:var(--list-item-left-align-self,center)}::slotted([slot=after]){margin:var(--list-item-left-margin,0 0 0 1.5rem)}#content{flex-grow:1;display:flex;flex-direction:column}#ripple{pointer-events:none}")],i([n({type:Boolean,reflect:!0}),o("design:type",Boolean)],H.prototype,"disabled",void 0),i([n({type:Boolean,reflect:!0}),o("design:type",Boolean)],H.prototype,"clickable",void 0),i([n({type:Boolean,reflect:!0}),o("design:type",Boolean)],H.prototype,"noRipple",void 0),i([n({type:String,reflect:!0}),o("design:type",String)],H.prototype,"role",void 0),i([s("#ripple"),o("design:type",a)],H.prototype,"$ripple",void 0),H=i([r("wl-list-item")],H);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let Y=(()=>{let e=class extends d{constructor(){super(),x(!0),this.active=!1,this.supports={},this.resourceLimits={},this.userResourceLimit={},this.aliases={TensorFlow:"python-tensorflow","Lablup ResearchEnv.":"python-ff",Python:"python",PyTorch:"python-pytorch",Chainer:"chainer",R:"r",Julia:"julia",Lua:"lua"},this.versions=["3.6"],this.languages=[],this.gpu_mode="no",this.gpu_step=.05,this.cpu_metric={min:"1",max:"1"},this.mem_metric={min:"1",max:"1"},this.gpu_metric={min:"0",max:"0"},this.tpu_metric={min:"1",max:"1"},this.images={},this.defaultResourcePolicy="UNLIMITED",this.total_slot={},this.used_slot={},this.available_slot={},this.resource_info={},this.used_slot_percent={},this.resource_templates=[],this.vfolders=[],this.default_language="",this.launch_ready=!1,this.concurrency_used=0,this.concurrency_max=0,this._status="inactive"}static get is(){return"backend-ai-experiment-view"}static get styles(){return[c,h,p,u,v,m`
        wl-card h4 {
          padding: 5px 20px;
          border-bottom: 1px solid #dddddd;
          font-weight: 100;
        }

        .short-indicator .gauge-label {
          width: 80px;
        }

        .custom {
          color: var(--paper-red-800);
        }

        span.caption {
          width: 30px;
          padding-left: 10px;
        }

        div.caption {
          width: 100px;
        }

        .gauge-name {
          font-size: 10px;
        }

        .gauge-label {
          width: 120px;
          font-weight: 300;
          font-size: 12px;
        }

        .indicator {
          font-family: monospace;
        }

        .resource-button {
          height: 140px;
          width: 120px;
          margin: 5px;
          padding: 0;
          font-size: 14px;
        }

        .resource-button h4 {
          padding: 5px 0;
          margin: 0;
          font-weight: 400;
        }

        .resource-button ul {
          padding: 0;
          list-style-type: none;
        }

        wl-button.button {
          --button-bg: var(--paper-blue-50);
          --button-bg-hover: var(--paper-blue-100);
          --button-bg-active: var(--paper-blue-600);
        }

        wl-button.launch-button {
          width: 335px;
          --button-bg: var(--paper-blue-50);
          --button-bg-hover: var(--paper-blue-100);
          --button-bg-active: var(--paper-blue-600);
        }

        wl-button.resource-button {
          --button-bg: white;
          --button-bg-active: var(--paper-blue-600);
          --button-bg-hover: var(--paper-blue-600);
          --button-bg-active-flat: var(--paper-blue-50);
          --button-color: #8899aa;
          --button-color-active: blue;
          --button-color-hover: blue;
        }

        wl-card h3.tab {
          padding-top: 0;
          padding-bottom: 0;
          padding-left: 0;
        }

        wl-expansion {
          --expansion-elevation: 0;
          --expansion-elevation-open: 0;
          --expansion-elevation-hover: 0;
          --expansion-margin-open: 0;
        }
      `]}firstUpdated(){this.notification=globalThis.lablupNotification}_showTab(e){for(var t=this.shadowRoot.querySelectorAll(".tab-content"),i=0;i<t.length;i++)t[i].style.display="none";this.shadowRoot.querySelector("#"+e.value).style.display="block"}_hideDialog(e){e.target.closest("wl-dialog").hide()}render(){return l`
      <wl-card class="item" elevation="1">
        <h3 class="tab horizontal center layout">
          <wl-tab-group>
            <wl-tab value="exp-lists" checked @click="${e=>this._showTab(e.target)}">List</wl-tab>
            <wl-tab value="running-lists" @click="${e=>this._showTab(e.target)}">Running</wl-tab>
            <wl-tab value="finished-lists" @click="${e=>this._showTab(e.target)}">Finished</wl-tab>
          </wl-tab-group>
          <span class="flex"></span>
          <wl-button class="fg blue button" id="add-experiment" outlined>
           <wl-icon>add</wl-icon>
            Add experiment
          </wl-button>
        </h3>
        <div id="exp-lists" class="tab-content" style="margin:0;padding:0;height:calc(100vh - 235px);">
            <div class="horizontal wrap layout" style="margin:0;padding:0;">
              <div style="weight: 300px;border-right:1px solid #ccc;height:calc(100vh - 235px);">
                <wl-list-item active style="width:300px;">
                  <wl-icon icon="vaadin:flask" slot="before"></wl-icon>
                  <span slot="after">5<br/><span style="font-size:9px">components</span></span>
                  <wl-title level="4" style="margin: 0">Test experiment</wl-title>
                  <span style="font-size: 11px;">Test experiment</span>
                </wl-list-item>
                <wl-list-item style="width:300px;">
                  <wl-icon icon="vaadin:flask" slot="before"></wl-icon>
                   <span slot="after">4<br/><span style="font-size:9px">components</span></span>
                   <wl-title level="3" style="margin: 0">Fashion MNIST</wl-title>
                   <span style="font-size: 11px;">Fashion MNIST serving test</span>
                </wl-list-item>
                <wl-list-item style="width:300px;">
                  <wl-icon icon="vaadin:flask" slot="before"></wl-icon>
                   <span slot="after">4<br/><span style="font-size:9px">components</span></span>
                   <wl-title level="4" style="margin: 0">Test experiment2</wl-title>
                   <span style="font-size: 11px;">Test experiment2</span>
                </wl-list-item>
                <h4>Templates</h4>
                <wl-list-item style="width:300px;">
                  <wl-icon icon="vaadin:flask" slot="before"></wl-icon>
                   <span slot="after">5<br/><span style="font-size:9px">components</span></span>
                   <wl-title level="2" style="margin: 0">Example Experiment (TensorFlow)</wl-title>
                   <span style="font-size: 11px;">Basic experiment example using TensorFlow</span>
                </wl-list-item>
                <wl-list-item style="width:300px;">
                  <wl-icon icon="vaadin:flask" slot="before"></wl-icon>
                   <span slot="after">4<br/><span style="font-size:9px">components</span></span>
                   <wl-title level="2" style="margin: 0">Example Experiment (PyTorch)</wl-title>
                   <span style="font-size: 11px;">Basic experiment example using Pytorch</span>
                </wl-list-item>
                <wl-list-item style="width:300px;">
                  <wl-icon icon="vaadin:flask" slot="before"></wl-icon>
                   <span slot="after">4<br/><span style="font-size:9px">components</span></span>
                   <wl-title level="2" style="margin: 0">Facet data cleaner</wl-title>
                   <span style="font-size: 11px;">Data preprocessing using Facet</span>
                </wl-list-item>
              </div>
              <div class="layout vertical">
                <wl-list-item active style="width:calc(100% - 55px);height:80px;">
                  <wl-icon icon="vaadin:puzzle-piece" slot="before"></wl-icon>
                  <div slot="after">
                    <div class="horizontal layout">
                      <div class="layout vertical center center-justified flex" style="width:50px;">
                          <wl-button fab flat inverted class="fg black" icon="vaadin:controller"></wl-button>
                      </div>
                      <div class="layout vertical start flex" style="width:80px!important;">
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:developer-board"></wl-icon>
                          <span>1</span>
                          <span class="indicator">core</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:memory"></wl-icon>
                          <span>1</span>
                          <span class="indicator">GB</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="icons:view-module"></wl-icon>
                          <span>-</span>
                          <span class="indicator">GPU</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <wl-title level="4" style="margin: 0">Backend.AI Data Uploader</wl-title>
                  <div style="font-size:11px;max-width:450px;">Backend.AI data uploader helps users uploading the data to experiment store.</div>
                </wl-list-item>
                <wl-list-item style="width:calc(100% - 55px);height:80px;">
                  <wl-icon icon="vaadin:puzzle-piece" slot="before"></wl-icon>
                  <div slot="after">
                    <div class="horizontal layout">
                      <div class="layout vertical center center-justified flex" style="width:50px;">
                          <wl-button fab flat inverted class="fg black" icon="vaadin:controller"></wl-button>
                      </div>
                      <div class="layout vertical start flex" style="width:80px!important;">
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:developer-board"></wl-icon>
                          <span>1</span>
                          <span class="indicator">core</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:memory"></wl-icon>
                          <span>2</span>
                          <span class="indicator">GB</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="icons:view-module"></wl-icon>
                          <span>-</span>
                          <span class="indicator">GPU</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <wl-title level="4" style="margin: 0">Facet</wl-title>
                  <div style="font-size:11px;max-width:450px;">Facets contains two robust visualizations to aid in understanding and analyzing machine learning datasets.</div>
                </wl-list-item>
                <wl-list-item style="width:calc(100% - 55px);height:80px;">
                  <wl-icon icon="vaadin:puzzle-piece" slot="before"></wl-icon>
                  <div slot="after">
                  <div class="horizontal layout">
                    <div class="layout vertical center center-justified flex" style="width:50px;">
                        <wl-button fab flat inverted class="fg black" icon="vaadin:controller"></wl-button>
                    </div>
                      <div class="layout vertical start flex" style="width:80px!important;">
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:developer-board"></wl-icon>
                          <span>4</span>
                          <span class="indicator">core</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:memory"></wl-icon>
                          <span>16</span>
                          <span class="indicator">GB</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="icons:view-module"></wl-icon>
                          <span>1.5</span>
                          <span class="indicator">GPU</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <wl-title level="4" style="margin: 0">TensorFlow</wl-title>
                  <div style="font-size:11px;max-width:450px;">TensorFlow is an end-to-end open source platform for machine learning.</div>
                </wl-list-item>
                <wl-list-item style="width:calc(100% - 55px);height:80px;">
                  <wl-icon icon="vaadin:puzzle-piece" slot="before"></wl-icon>
                  <div slot="after">
                  <div class="horizontal layout">
                    <div class="layout vertical center center-justified flex" style="width:50px;">
                        <wl-button fab flat inverted class="fg black" icon="vaadin:controller"></wl-button>
                    </div>
                      <div class="layout vertical start flex" style="width:80px!important;">
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:developer-board"></wl-icon>
                          <span>4</span>
                          <span class="indicator">core</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:memory"></wl-icon>
                          <span>16</span>
                          <span class="indicator">GB</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="icons:view-module"></wl-icon>
                          <span>1.5</span>
                          <span class="indicator">GPU</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <wl-title level="4" style="margin: 0">TensorFlow Validate</wl-title>
                  <div style="font-size:11px;max-width:450px;">TensorFlow is an end-to-end open source platform for machine learning.</div>
                </wl-list-item>
                <wl-list-item style="width:calc(100% - 55px);height:80px;">
                  <wl-icon icon="vaadin:puzzle-piece" slot="before"></wl-icon>
                  <div slot="after">
                    <div class="horizontal layout">
                      <div class="layout vertical center center-justified flex" style="width:50px;">
                          <wl-button fab flat inverted class="fg black" icon="vaadin:controller"></wl-button>
                      </div>
                      <div class="layout vertical start flex" style="width:80px!important;">
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:developer-board"></wl-icon>
                          <span>1</span>
                          <span class="indicator">core</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="hardware:memory"></wl-icon>
                          <span>1</span>
                          <span class="indicator">GB</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <wl-icon class="fg blue" icon="icons:view-module"></wl-icon>
                          <span>-</span>
                          <span class="indicator">GPU</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <wl-title level="4" style="margin: 0">TensorFlow Serving</wl-title>
                  <div style="font-size: 11px;max-width:450px;">TensorFlow Serving is a flexible, high-performance serving system for machine learning models, designed for production environments.</div>
                </wl-list-item>
                <wl-button class="fg blue button" id="launch-session" outlined>
                  <wl-icon>add</wl-icon>
                  Add component
                </wl-button>
            </div>
          </div>
        </div>
        <div id="running-lists" class="tab-content" style="display:none;">
          <backend-ai-session-list id="running-jobs" condition="running" ?active="${"active"===this._status}"></backend-ai-session-list>
        </div>
        <div id="finished-lists" class="tab-content" style="display:none;">
          <backend-ai-session-list id="finished-jobs" condition="finished" ?active="${"active"===this._status}"></backend-ai-session-list>
        </div>
      </wl-card>

`}};return e=i([r("backend-ai-experiment-view")],e),e})();export default Y;
