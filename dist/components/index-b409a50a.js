import{i as r,u as a,b as t,p as i,j as e,d as o,h as s,L as n,k as l,C as c}from"./iron-flex-layout-classes-e73207af.js";import{C as v,o as d}from"./resize-8fcbd74f.js";import{R as h}from"./radio-behavior-59c4aee8.js";import"./index-e4e53168.js";let b=class extends h{constructor(){super(...arguments),this.role="tab",this.vertical=!1}queryGroup(){return Array.from(this.parentElement.querySelectorAll(`${this.nodeName.toLowerCase()}:not([disabled])`))}rowToElement(r){r.focus()}render(){return s` <slot name="before"></slot> <slot></slot> <wl-ripple id="ripple" overlay .target="${this}" ?disabled="${this.disabled}"></wl-ripple> ${this.renderFormElement()} `}};b.styles=[r(":host{--_tab-color:var(--tab-color,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))));--_tab-bg:var(--tab-bg,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));color:var(--_tab-color);background:var(--_tab-bg);padding:var(--tab-padding,.75rem 2.25rem);transition:var(--tab-transition,background var(--transition-duration-medium,.18s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),color var(--transition-duration-medium,.18s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));display:flex;align-items:center;justify-content:center;position:relative;outline:none;-webkit-user-select:none;user-select:none}:host(:not([disabled]):not([checked])){cursor:pointer}:host(:focus),:host(:hover){--_tab-color:var(--tab-color-hover,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))));--_tab-bg:var(--tab-bg-hover,hsl(var(--shade-200,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,85%))));will-change:background,color}:host([checked]:focus),:host([checked]:hover){--_tab-bg:var(--tab-bg-active-hover,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.15));--_tab-color:var(--tab-color-active-hover,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}:host([disabled]){--_tab-color:var(--tab-color-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));--_tab-bg:var(--tab-bg-disabled,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));opacity:var(--tab-opacity-disabled,.6);pointer-events:none}:host([checked]){--_tab-color:var(--tab-color-active,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_tab-bg:var(--tab-bg-active,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.1))}:host-context([filled]),:host[filled]{--tab-color:var(--tab-color-filled,hsla(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%)),0.6));--tab-bg:var(--tab-bg-filled,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--tab-color-active:var(--tab-color-filled,hsla(var(--primary-400-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%)),0.8));--tab-bg-active:var(--tab-bg-filled,hsl(var(--primary-400,var(--primary-hue,224),var(--primary-saturation,42%),var(--primary-lightness,52%))));--tab-color-hover:var(--tab-color-hover-filled,hsla(var(--primary-400-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%)),0.6));--tab-bg-hover:var(--tab-bg-hover-filled,hsl(var(--primary-400,var(--primary-hue,224),var(--primary-saturation,42%),var(--primary-lightness,52%))));--tab-color-active-hover:var(--tab-color-active-hover-filled,hsla(var(--primary-400-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%)),0.8));--tab-bg-active-hover:var(--tab-bg-active-hover-filled,hsla(var(--primary-400,var(--primary-hue,224),var(--primary-saturation,42%),var(--primary-lightness,52%)),0.8));--tab-color-disabled:var(--tab-color-disabled-filled,hsla(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%)),0.4));--tab-bg-disabled:var(--tab-bg-disabled-filled,hsl(var(--primary-400,var(--primary-hue,224),var(--primary-saturation,42%),var(--primary-lightness,52%))))}::slotted([slot=before]){margin:var(--tab-before-margin,0 .75rem 0 0)}:host([vertical]){flex-direction:column}:host([vertical]) ::slotted([slot=before]){margin:var(--tab-before-margin-vertical,0 0 .375rem)}"),a],t([i({type:String,reflect:!0}),e("design:type",String)],b.prototype,"role",void 0),t([i({type:Boolean,reflect:!0}),e("design:type",Boolean)],b.prototype,"vertical",void 0),b=t([o("wl-tab")],b);let p=class extends n{constructor(){super(...arguments),this.align="start",this.filled=!1,this.vertical=!1,this.role="tablist",this.listeners=[]}get $slot(){return this.shadowRoot.querySelector("slot")}connectedCallback(){super.connectedCallback(),this.listeners.push(l(this,"change",this.updateIndicatorPosition.bind(this)))}disconnectedCallback(){super.disconnectedCallback(),c(this.listeners)}firstUpdated(r){super.firstUpdated(r),v?d(this.$slot.parentElement,this.updateIndicatorPosition.bind(this),{debounceMs:100}):l(window,"resize",this.updateIndicatorPosition.bind(this),{passive:!0})}updateIndicatorPosition(){const r=Array.from(this.$slot.assignedNodes().filter(r=>1===r.nodeType));let a=null;for(const t of r)if(t.hasAttribute("checked")){a=t;break}const t=null==a?-1:r.indexOf(a),i=null==a?0:this.getNodeSize(a),e=r.filter(a=>r.indexOf(a)<t).map(this.getNodeSize.bind(this)).reduce((r,a)=>r+a,0);this.style.setProperty("--_indicator-offset",`${e}px`),this.style.setProperty("--_indicator-size",`${i}px`)}getNodeSize(r){return this.vertical?r.offsetHeight:r.offsetWidth}render(){return s` <div id="tabs-container"> <div id="tabs"> <slot @slotchange="${this.updateIndicatorPosition}"></slot> <div id="indicator"></div> </div> </div> <wl-divider id="divider" ?vertical="${this.vertical}"></wl-divider> `}};p.styles=[r(":host{--_tab-group-color:var(--tab-group-color,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_tab-group-bg:var(--tab-group-bg,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));--_tab-group-align:flex-start;color:var(--_tab-group-color);background:var(--_tab-group-bg);position:relative;display:block}:host([align=center]){--_tab-group-align:center}:host([align=end]){--_tab-group-align:flex-end}:host([align=stretch]){--_tab-group-align:stretch}:host([align=stretch]) ::slotted(*){width:100%;flex-shrink:1}:host([filled]){--_tab-group-bg:var(--tab-group-bg,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_tab-group-color:var(--tab-group-color,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))))}#tabs-container{justify-content:var(--_tab-group-align);display:flex;align-items:stretch;overflow-x:auto;scroll-behavior:smooth;scrollbar-width:none;scroll-snap-type:mandatory;scroll-snap-points-y:repeat(100vw);scroll-snap-type:x mandatory}#tabs-container::-webkit-scrollbar{display:none}#tabs-container ::slotted(*){flex-shrink:0;scroll-snap-align:start}#tabs{position:relative;display:flex;align-items:stretch;justify-content:stretch}#divider,#indicator{position:absolute;bottom:0}#indicator{width:var(--_indicator-size);left:var(--_indicator-offset);transform:scaleX(var(--tab-group-indicator-scale,1));background:var(--tab-group-indicator-bg,currentColor);height:var(--tab-group-indicator-size,.125rem);transition:var(--tab-group-indicator-transition,left var(--transition-duration-medium,.18s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),top var(--transition-duration-medium,.18s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),width var(--transition-duration-medium,.18s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));z-index:1}#divider{left:0}:host([vertical]) #tabs-container{justify-content:var(--_tab-group-align);align-items:stretch;flex-direction:column;overflow-y:auto;overflow-x:hidden}:host([vertical]) #tabs{flex-direction:column}:host([vertical]) #indicator{top:var(--_indicator-offset);height:var(--_indicator-size);transform:scaleY(var(--tab-group-indicator-scale,1));width:var(--tab-group-indicator-size,.125rem);left:0}:host([vertical]) #divider{top:0}"),a],t([i({type:String,reflect:!0}),e("design:type",String)],p.prototype,"align",void 0),t([i({type:Boolean,reflect:!0}),e("design:type",Boolean)],p.prototype,"filled",void 0),t([i({type:Boolean,reflect:!0}),e("design:type",Boolean)],p.prototype,"vertical",void 0),t([i({type:String,reflect:!0}),e("design:type",String)],p.prototype,"role",void 0),p=t([o("wl-tab-group")],p);
