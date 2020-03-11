import{a1 as e,n as t,_ as i,p as o,s as a,q as n,c as s,h as r,R as l,d,e as p,I as c,a as h,z as u,f as m,b as v}from"./backend-ai-console-14d10124.js";import"./lablup-loading-indicator-d581dc83.js";import{h as b,P as y,a as g,F as f,n as _,o as w}from"./polymer-legacy-4d33d7bd.js";import{T as x,a as k,c as E,E as C}from"./iron-resizable-behavior-33a9d7fa.js";import"./vaadin-progress-bar-432ef8ee.js";import{I as T,a as z,b as O,r as L}from"./radio-behavior-583b4374.js";import"./paper-progress-31fb9b80.js";import{a as j}from"./paper-icon-button-2254421d.js";import"./iron-iconset-svg-7f9b79bb.js";import"./iron-icons-5b385824.js";import"./paper-dropdown-menu-571001d5.js";import"./paper-slider-54e5168a.js";import"./shadow-dc0e6b19.js";import"./paper-item-93d362db.js";import"./expansion-9ebb0313.js";import"./av-icons-5ae8754c.js";import"./paper-dialog-scrollable-6da5f791.js";import"./vaadin-grid-253f5dab.js";import"./vaadin-grid-selection-column-8b8ad2a0.js";import"./vaadin-grid-sorter-8aff2bf9.js";import"./vaadin-grid-sort-column-98e5fcc3.js";import"./iconset-92ff2bc9.js";import"./backend-ai-session-list-9935e034.js";import"./divider-33c1d747.js";import"./backend-ai-indicator-a5fe5e8a.js";import"./json_to_csv-95c4522d.js";import"./tab-group-c1fbd113.js";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const N=b`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;N.setAttribute("style","display: none;"),document.head.appendChild(N.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const S={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass("keyboard-focus",e)},_spaceKeyDownHandler:function(e){T._spaceKeyDownHandler.call(this,e),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){T._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},A=[z,O,j,S],R=b`
  <style include="paper-material-styles">
    /* Need to specify the same specificity as the styles imported from paper-material. */
    :host {
      @apply --layout-inline;
      @apply --layout-center-center;
      position: relative;
      box-sizing: border-box;
      min-width: 5.14em;
      margin: 0 0.29em;
      background: transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      font: inherit;
      text-transform: uppercase;
      outline-width: 0;
      border-radius: 3px;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      z-index: 0;
      padding: 0.7em 0.57em;

      @apply --paper-font-common-base;
      @apply --paper-button;
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([raised].keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-raised-keyboard-focus;
    }

    :host(:not([raised]).keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-flat-keyboard-focus;
    }

    :host([disabled]) {
      background: none;
      color: #a8a8a8;
      cursor: auto;
      pointer-events: none;

      @apply --paper-button-disabled;
    }

    :host([disabled][raised]) {
      background: #eaeaea;
    }


    :host([animated]) {
      @apply --shadow-transition;
    }

    paper-ripple {
      color: var(--paper-button-ink-color);
    }
  </style>

  <slot></slot>`;R.setAttribute("strip-whitespace",""),y({_template:R,is:"paper-button",behaviors:[A],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?S._calculateElevation.apply(this):this._setElevation(0)}});const P=document.createElement("template");P.innerHTML='<dom-module id="lumo-overlay">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part="overlay"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part="content"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part="backdrop"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part="backdrop"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(P.content);const I=b`<dom-module id="lumo-dialog" theme-for="vaadin-dialog-overlay">
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
</dom-module>`;document.head.appendChild(I.content);const F=Element.prototype,$=F.matches||F.matchesSelector||F.mozMatchesSelector||F.msMatchesSelector||F.oMatchesSelector||F.webkitMatchesSelector,B={getTabbableNodes:function(e){const t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t},isFocusable:function(e){return $.call(e,"input, select, textarea, button, object")?$.call(e,":not([disabled])"):$.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")},isTabbable:function(e){return this.isFocusable(e)&&$.call(e,':not([tabindex="-1"])')&&this._isVisible(e)},_normalizedTabIndex:function(e){if(this.isFocusable(e)){const t=e.getAttribute("tabindex")||0;return Number(t)}return-1},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;const i=e,o=this._normalizedTabIndex(i);let a,n=o>0;if(o>=0&&t.push(i),a="slot"===i.localName?i.assignedNodes({flatten:!0}):(i.shadowRoot||i).children,a)for(let e=0;e<a.length;e++)n=this._collectTabbableNodes(a[e],t)||n;return n},_isVisible:function(e){let t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&(t=window.getComputedStyle(e),"hidden"!==t.visibility&&"none"!==t.display)},_sortByTabIndex:function(e){const t=e.length;if(t<2)return e;const i=Math.ceil(t/2),o=this._sortByTabIndex(e.slice(0,i)),a=this._sortByTabIndex(e.slice(i));return this._mergeSortByTabIndex(o,a)},_mergeSortByTabIndex:function(e,t){const i=[];for(;e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)},_hasLowerTabOrder:function(e,t){const i=Math.max(e.tabIndex,0),o=Math.max(t.tabIndex,0);return 0===i||0===o?o>i:i>o}};
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
let D=0;const M={},U=e=>{D++;const t=`vaadin-overlay-content-${D}`,i=document.createElement("template"),o=document.createElement("style");o.textContent=":host { display: block; }"+e,i.content.appendChild(o),window.ShadyCSS&&window.ShadyCSS.prepareTemplate(i,t);const a=class extends HTMLElement{static get is(){return t}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.importNode(i.content,!0)))}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}};return customElements.define(a.is,a),M[e]=t,t};class G extends(x(g)){static get template(){return b`
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
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new f(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,i=document.documentElement.clientHeight;t&&i>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",i-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter(e=>e.localName&&"template"===e.localName)[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),k(this,()=>{this.focusTrap&&!this.contains(document._activeElement||document.activeElement)&&this._cycleTab(0,0);const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)}),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){const i=`__${e}Handler`,o=()=>{t(),this.removeEventListener("animationend",o),delete this[i]};this[i]=o,this.addEventListener("animationend",o)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.setAttribute("opening","");const e=()=>{this.removeAttribute("opening"),document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.modeless||this._enterModalState()};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this)}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this.setAttribute("closing","");const e=()=>{if(this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this._exitModalState(),document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.removeAttribute("closing"),this.restoreFocusOnClose&&this.__restoreFocusNode){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}};this._shouldAnimate()?this._enqueueAnimation("closing",e):e()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof G)}get _last(){return this===G.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),G.__attachedInstances.forEach(e=>{e===this||e.hasAttribute("opening")||e.hasAttribute("closing")||(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=G.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=_(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const i=e._templateRoot||(e._templateRoot=e.getRootNode());if(i!==document){const e=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let t=Array.from(i.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"");if(e){const e=window.ShadyCSS.ScopingShim._styleInfoForNode(i.host);e&&(t+=e._getStyleRules().parsedCssText,t+="}")}if(t=t.replace(/:host/g,":host-nomatch"),t)if(e){const e=(e=>{const t=M[e]||U(e);return document.createElement(t)})(t);e.id="content",e.setAttribute("part","content"),this.$.content.parentNode.replaceChild(e,this.$.content),e.className=this.$.content.className,this._originalContentPart=this.$.content,this.$.content=e}else{const e=document.createElement("style");e.textContent=t,this.$.content.shadowRoot.appendChild(e),this._contentNodes.unshift(e)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,i,o){e!==t?this.template=void 0:i!==o&&(this.renderer=void 0)}render(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_templateOrRendererChanged(e,t,i,o,a,n){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const s=this._oldOwner!==i||this._oldModel!==o;this._oldModel=o,this._oldOwner=i;const r=this._oldInstanceProps!==a||this._oldTemplate!==e;this._oldInstanceProps=a,this._oldTemplate=e;const l=this._oldRenderer!==t;this._oldRenderer=t;const d=this._oldOpened!==n;if(this._oldOpened=n,e&&r)this._stampOverlayTemplate(e,a);else if(t&&(l||d||s)){if(this.content=this,l)for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);n&&this.render()}}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){const i=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(i)),(t+=e)>=i.length?t=0:t<0&&(t=i.length-1),i[t].focus()}_getFocusableElements(){return B.getTabbableNodes(this.$.overlay)}_getActiveElement(){let e=document._activeElement||document.activeElement;for(e&&e!==document.documentElement&&e instanceof Element!=!1||(e=document.body);e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const i=e.ownerDocument;for(;t&&t!==i&&t!==this;)t=t.parentNode||t.host;return t===this}}customElements.define(G.is,G);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const K=document.createElement("template");K.innerHTML='<dom-module id="vaadin-dialog-overlay-styles" theme-for="vaadin-dialog-overlay">\n  <template>\n    <style>\n      /*\n        NOTE(platosha): Make some min-width to prevent collapsing of the content\n        taking the parent width, e. g., <vaadin-grid> and such.\n      */\n      [part="content"] {\n        min-width: 12em; /* matches the default <vaadin-text-field> width */\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(K.content);class q extends G{static get is(){return"vaadin-dialog-overlay"}}customElements.define(q.is,q);class H extends(E(C(g))){static get template(){return b`
    <style>
      :host {
        display: none;
      }
    </style>

    <vaadin-dialog-overlay id="overlay" on-opened-changed="_onOverlayOpened" with-backdrop="" theme\$="[[theme]]" focus-trap="">
    </vaadin-dialog-overlay>
`}static get is(){return"vaadin-dialog"}static get version(){return"2.2.1"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String},theme:String,_contentTemplate:Object,renderer:Function,_oldTemplate:Object,_oldRenderer:Object}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel)","_templateOrRendererChanged(_contentTemplate, renderer)"]}ready(){super.ready(),this.$.overlay.setAttribute("role","dialog"),this.$.overlay.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),this._observer=new f(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}_setTemplateFromNodes(e){this._contentTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate}_removeNewRendererOrTemplate(e,t,i,o){e!==t?this._contentTemplate=void 0:i!==o&&(this.renderer=void 0)}render(){this.$.overlay.render()}_templateOrRendererChanged(e,t){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for dialog content");this._oldTemplate=e,this._oldRenderer=t,t&&this.$.overlay.setProperties({owner:this,renderer:t})}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_openedChanged(e){e&&(this.$.overlay.template=this.querySelector("template")),this.$.overlay.opened=e}_ariaLabelChanged(e){null!=e?this.$.overlay.setAttribute("aria-label",e):this.$.overlay.removeAttribute("aria-label")}_onOverlayOpened(e){!1===e.detail.value&&(this.opened=!1)}_handleOutsideClick(e){this.noCloseOnOutsideClick&&e.preventDefault()}_handleEscPress(e){this.noCloseOnEsc&&e.preventDefault()}}customElements.define(H.is,H);let V=class extends e{constructor(){super(...arguments),this.disabled=!1,this.clickable=!1,this.noRipple=!1,this.role="listitem"}queryGroup(){return Array.from(this.parentElement.querySelectorAll(`${this.nodeName.toLowerCase()}:not([disabled])`))}rowToElement(e){e.focus()}onKeyDown(e){super.onKeyDown(e),L(this,e)}render(){return r` <slot name="before"></slot> <div id="content"> <slot></slot> </div> <slot name="after"></slot> <wl-ripple id="ripple" overlay .target="${this}" ?disabled="${this.disabled||!this.clickable||this.noRipple}"></wl-ripple> ${this.renderFormElement()} `}};V.styles=[...e.styles,t(":host{--_list-item-color:var(--list-item-color,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));--_list-item-bg:var(--list-item-bg,transparent);color:var(--_list-item-color);background:var(--_list-item-bg);border-radius:var(--list-item-border-radius,.5rem);transition:var(--list-item-transition,background var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease),color var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease));padding:var(--list-item-padding,.75rem 1.5rem);display:flex;align-items:center;outline:none;overflow:hidden;position:relative;text-align:left}:host([clickable]){-webkit-user-select:none;user-select:none}:host([clickable]:not([active]):not([disabled])){cursor:pointer}:host(:focus),:host(:hover){--_list-item-color:var(--list-item-color-hover,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));--_list-item-bg:var(--list-item-bg-hover,hsl(var(--shade-200,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,85%))));will-change:background,color}:host([active]:focus),:host([active]:hover){--_list-item-color:var(--list-item-color-active-hover,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_list-item-bg:var(--list-item-bg-active-hover,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.15))}:host([disabled]){--_list-item-color:var(--list-item-color-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));--_list-item-bg:var(--list-item-bg-disabled,transparent);opacity:var(--list-item-opacity-disabled,.6);pointer-events:none}:host([active]){--_list-item-color:var(--list-item-color,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_list-item-bg:var(--list-item-bg,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.1))}::slotted([slot=after]),::slotted([slot=before]){flex-shrink:0}::slotted([slot=before]){margin:var(--list-item-left-margin,0 1.5rem 0 0)}::slotted([slot=after]),::slotted([slot=before]){align-self:var(--list-item-left-align-self,center)}::slotted([slot=after]){margin:var(--list-item-left-margin,0 0 0 1.5rem)}#content{flex-grow:1;display:flex;flex-direction:column}#ripple{pointer-events:none}")],i([o({type:Boolean,reflect:!0}),a("design:type",Boolean)],V.prototype,"disabled",void 0),i([o({type:Boolean,reflect:!0}),a("design:type",Boolean)],V.prototype,"clickable",void 0),i([o({type:Boolean,reflect:!0}),a("design:type",Boolean)],V.prototype,"noRipple",void 0),i([o({type:String,reflect:!0}),a("design:type",String)],V.prototype,"role",void 0),i([n("#ripple"),a("design:type",l)],V.prototype,"$ripple",void 0),V=i([s("wl-list-item")],V);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let W=class extends d{constructor(){super(),w(!0),this.active=!1,this.supports={},this.resourceLimits={},this.userResourceLimit={},this.aliases={TensorFlow:"python-tensorflow","Lablup ResearchEnv.":"python-ff",Python:"python",PyTorch:"python-pytorch",Chainer:"chainer",R:"r",Julia:"julia",Lua:"lua"},this.versions=["3.6"],this.languages=[],this.gpu_mode="no",this.gpu_step=.05,this.cpu_metric={min:"1",max:"1"},this.mem_metric={min:"1",max:"1"},this.gpu_metric={min:"0",max:"0"},this.tpu_metric={min:"1",max:"1"},this.images={},this.defaultResourcePolicy="UNLIMITED",this.total_slot={},this.used_slot={},this.available_slot={},this.resource_info={},this.used_slot_percent={},this.resource_templates=[],this.vfolders=[],this.default_language="",this.launch_ready=!1,this.concurrency_used=0,this.concurrency_max=0,this._status="inactive"}static get is(){return"backend-ai-experiment-view"}static get properties(){return{active:{type:Boolean},supports:{type:Object},resourceLimits:{type:Object},userResourceLimit:{type:Object},aliases:{type:Object},versions:{type:Array},languages:{type:Array},gpu_mode:{type:String},gpu_step:{type:Number},cpu_metric:{type:Object},mem_metric:{type:Object},gpu_metric:{type:Object},tpu_metric:{type:Object},images:{type:Object},defaultResourcePolicy:{type:String},total_slot:{type:Object},used_slot:{type:Object},available_slot:{type:Object},concurrency_used:{type:Number},concurrency_max:{type:Number},vfolders:{type:Array},resource_info:{type:Object},used_slot_percent:{type:Object},resource_templates:{type:Array},default_language:{type:String},launch_ready:{type:Boolean},_status:{type:Boolean},notification:{type:Object}}}static get styles(){return[p,c,h,u,m,v`
        wl-card h4 {
          padding: 5px 20px;
          border-bottom: 1px solid #dddddd;
          font-weight: 100;
        }

        paper-slider {
          width: 285px;
          --paper-slider-input: {
            width: 70px;
          };
          --paper-slider-height: 3px;
        }

        paper-slider.mem {
          --paper-slider-knob-color: var(--paper-orange-400);
          --paper-slider-active-color: var(--paper-orange-400);
        }

        paper-slider.cpu {
          --paper-slider-knob-color: var(--paper-light-green-400);
          --paper-slider-active-color: var(--paper-light-green-400);
        }

        paper-slider.gpu {
          --paper-slider-knob-color: var(--paper-cyan-400);
          --paper-slider-active-color: var(--paper-cyan-400);
        }

        paper-progress {
          width: 100px;
          border-radius: 3px;
          --paper-progress-height: 10px;
          --paper-progress-active-color: #3677eb;
          --paper-progress-secondary-color: #98be5a;
          --paper-progress-transition-duration: 0.08s;
          --paper-progress-transition-timing-function: ease;
          --paper-progress-transition-delay: 0s;
        }

        .short-indicator paper-progress {
          width: 50px;
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
      `]}firstUpdated(){this.notification=window.lablupNotification}_showTab(e){for(var t=this.shadowRoot.querySelectorAll(".tab-content"),i=0;i<t.length;i++)t[i].style.display="none";this.shadowRoot.querySelector("#"+e.value).style.display="block"}_hideDialog(e){e.target.closest("wl-dialog").hide()}render(){return r`
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
                  <iron-icon icon="vaadin:flask" slot="before"></iron-icon>
                  <span slot="after">5<br/><span style="font-size:9px">components</span></span>
                  <wl-title level="4" style="margin: 0">Test experiment</wl-title>
                  <span style="font-size: 11px;">Test experiment</span>
                </wl-list-item>
                <wl-list-item style="width:300px;">
                  <iron-icon icon="vaadin:flask" slot="before"></iron-icon>
                   <span slot="after">4<br/><span style="font-size:9px">components</span></span>
                   <wl-title level="3" style="margin: 0">Fashion MNIST</wl-title>
                   <span style="font-size: 11px;">Fashion MNIST serving test</span>
                </wl-list-item>
                <wl-list-item style="width:300px;">
                  <iron-icon icon="vaadin:flask" slot="before"></iron-icon>
                   <span slot="after">4<br/><span style="font-size:9px">components</span></span>
                   <wl-title level="4" style="margin: 0">Test experiment2</wl-title>
                   <span style="font-size: 11px;">Test experiment2</span>
                </wl-list-item>
                <h4>Templates</h4>
                <wl-list-item style="width:300px;">
                  <iron-icon icon="vaadin:flask" slot="before"></iron-icon>
                   <span slot="after">5<br/><span style="font-size:9px">components</span></span>
                   <wl-title level="2" style="margin: 0">Example Experiment (TensorFlow)</wl-title>
                   <span style="font-size: 11px;">Basic experiment example using TensorFlow</span>
                </wl-list-item>
                <wl-list-item style="width:300px;">
                  <iron-icon icon="vaadin:flask" slot="before"></iron-icon>
                   <span slot="after">4<br/><span style="font-size:9px">components</span></span>
                   <wl-title level="2" style="margin: 0">Example Experiment (PyTorch)</wl-title>
                   <span style="font-size: 11px;">Basic experiment example using Pytorch</span>
                </wl-list-item>
                <wl-list-item style="width:300px;">
                  <iron-icon icon="vaadin:flask" slot="before"></iron-icon>
                   <span slot="after">4<br/><span style="font-size:9px">components</span></span>
                   <wl-title level="2" style="margin: 0">Facet data cleaner</wl-title>
                   <span style="font-size: 11px;">Data preprocessing using Facet</span>
                </wl-list-item>
              </div>
              <div class="layout vertical">
                <wl-list-item active style="width:calc(100% - 55px);height:80px;">
                  <iron-icon icon="vaadin:puzzle-piece" slot="before"></iron-icon>
                  <div slot="after">
                    <div class="horizontal layout">
                      <div class="layout vertical center center-justified flex" style="width:50px;">
                          <paper-icon-button class="fg black" icon="vaadin:controller"></paper-icon-button>
                      </div>
                      <div class="layout vertical start flex" style="width:80px!important;">
                        <div class="layout horizontal configuration">
                          <iron-icon class="fg blue" icon="hardware:developer-board"></iron-icon>
                          <span>1</span>
                          <span class="indicator">core</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <iron-icon class="fg blue" icon="hardware:memory"></iron-icon>
                          <span>1</span>
                          <span class="indicator">GB</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <iron-icon class="fg blue" icon="icons:view-module"></iron-icon>
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
                  <iron-icon icon="vaadin:puzzle-piece" slot="before"></iron-icon>
                  <div slot="after">
                    <div class="horizontal layout">
                      <div class="layout vertical center center-justified flex" style="width:50px;">
                          <paper-icon-button class="fg black" icon="vaadin:controller"></paper-icon-button>
                      </div>
                      <div class="layout vertical start flex" style="width:80px!important;">
                        <div class="layout horizontal configuration">
                          <iron-icon class="fg blue" icon="hardware:developer-board"></iron-icon>
                          <span>1</span>
                          <span class="indicator">core</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <iron-icon class="fg blue" icon="hardware:memory"></iron-icon>
                          <span>2</span>
                          <span class="indicator">GB</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <iron-icon class="fg blue" icon="icons:view-module"></iron-icon>
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
                  <iron-icon icon="vaadin:puzzle-piece" slot="before"></iron-icon>
                  <div slot="after">
                  <div class="horizontal layout">
                    <div class="layout vertical center center-justified flex" style="width:50px;">
                        <paper-icon-button class="fg black" icon="vaadin:controller"></paper-icon-button>
                    </div>
                      <div class="layout vertical start flex" style="width:80px!important;">
                        <div class="layout horizontal configuration">
                          <iron-icon class="fg blue" icon="hardware:developer-board"></iron-icon>
                          <span>4</span>
                          <span class="indicator">core</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <iron-icon class="fg blue" icon="hardware:memory"></iron-icon>
                          <span>16</span>
                          <span class="indicator">GB</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <iron-icon class="fg blue" icon="icons:view-module"></iron-icon>
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
                  <iron-icon icon="vaadin:puzzle-piece" slot="before"></iron-icon>
                  <div slot="after">
                  <div class="horizontal layout">
                    <div class="layout vertical center center-justified flex" style="width:50px;">
                        <paper-icon-button class="fg black" icon="vaadin:controller"></paper-icon-button>
                    </div>
                      <div class="layout vertical start flex" style="width:80px!important;">
                        <div class="layout horizontal configuration">
                          <iron-icon class="fg blue" icon="hardware:developer-board"></iron-icon>
                          <span>4</span>
                          <span class="indicator">core</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <iron-icon class="fg blue" icon="hardware:memory"></iron-icon>
                          <span>16</span>
                          <span class="indicator">GB</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <iron-icon class="fg blue" icon="icons:view-module"></iron-icon>
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
                  <iron-icon icon="vaadin:puzzle-piece" slot="before"></iron-icon>
                  <div slot="after">
                    <div class="horizontal layout">
                      <div class="layout vertical center center-justified flex" style="width:50px;">
                          <paper-icon-button class="fg black" icon="vaadin:controller"></paper-icon-button>
                      </div>
                      <div class="layout vertical start flex" style="width:80px!important;">
                        <div class="layout horizontal configuration">
                          <iron-icon class="fg blue" icon="hardware:developer-board"></iron-icon>
                          <span>1</span>
                          <span class="indicator">core</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <iron-icon class="fg blue" icon="hardware:memory"></iron-icon>
                          <span>1</span>
                          <span class="indicator">GB</span>
                        </div>
                        <div class="layout horizontal configuration">
                          <iron-icon class="fg blue" icon="icons:view-module"></iron-icon>
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

`}};W=i([s("backend-ai-experiment-view")],W);var Y=W;export default Y;
