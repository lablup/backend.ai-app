import{x as e,_ as t,p as n,y as o,Q as i,c as a,R as r,T as s,h as d,U as h,V as l,W as c}from"./backend-ai-console-82521713.js";import{R as p}from"./radio-behavior-9735b631.js";let v=class extends p{constructor(){super(...arguments),this.checked=!1,this.noRipple=!1,this.duration=250,this.ariaChecked=this.checked.toString(),this.icon="expand_more"}firstUpdated(e){super.firstUpdated(e),this.$ripple.target=this,this.listeners.push(r(this.$contentContainer,"click",this.onContentContainerClick.bind(this))),this.refreshContentContainerHeight()}updated(e){super.updated(e),null!=e.get("checked")&&this.animateContent(this.duration).then()}onContentContainerClick(e){e.stopPropagation()}toggle(){this.checked=!this.checked,this.dispatchChangeEvent()}async animateContent(e=this.duration){requestAnimationFrame(()=>{const t=this.checked?this.$content.offsetHeight:0,n=this.$contentContainer.offsetHeight;this.$contentContainer.animate({height:[`${n}px`,`${t}px`]},{easing:s,duration:e}).onfinish=()=>{this.refreshContentContainerHeight()}})}refreshContentContainerHeight(){this.$contentContainer.style.height=this.checked?"auto":"0px"}render(){return d` <header id="header" aria-labelledby="title"> <div id="title"> <slot name="title"></slot> <slot name="description"></slot> </div> <div id="indicator"> <slot name="indicator"></slot> ${null!=this.icon?d` <wl-icon id="icon">${this.icon}</wl-icon> `:h} </div> <wl-ripple id="ripple" overlay ?disabled="${this.disabled||this.noRipple}"></wl-ripple> </header> <div id="content-container" aria-hidden="${this.checked.toString()}"> <div id="content" tabindex="${l(this.checked?void 0:-1)}"> <slot></slot> </div> </div> ${this.renderFormElement()} `}};v.styles=[...p.styles,e(":host{background:var(--expansion-bg,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));color:var(--expansion-color,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));box-shadow:var(--expansion-elevation,var(--elevation-1,0 .3125rem .625rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)));transition:var(--expansion-transition,margin var(--transition-duration-slow,.25s) cubic-bezier(.4,0,.2,1),box-shadow var(--transition-duration-slow,.25s) cubic-bezier(.4,0,.2,1));display:block;position:relative;text-align:left;outline:none}:host(:not([disabled])) #header{cursor:pointer}:host(:not([open]):focus),:host(:not([open]):not([disabled]):hover){will-change:height,margin,box-shadow;transform:translateZ(0)}:host(:not([open]):focus) #header,:host(:not([open]):not([disabled]):hover) #header{background:var(--expansion-header-bg-hover,hsl(var(--shade-200,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,85%))));will-change:background}:host([open]){box-shadow:var(--expansion-elevation-hover,var(--elevation-4,0 .5rem 1rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)));margin:var(--expansion-margin-open,1.5rem 0)}:host([open]) #header{height:var(--expansion-header-height-open,3.5rem)}:host([open]) #icon{transform:rotate(180deg)}#header{padding:var(--expansion-header-padding,0 1.5rem);height:var(--expansion-header-height,2.875rem);transition:var(--expansion-header-transition,height var(--transition-duration-slow,.25s) cubic-bezier(.4,0,.2,1),background var(--transition-duration-slow,.25s) cubic-bezier(.4,0,.2,1));justify-content:space-between;outline:none;-webkit-user-select:none;user-select:none;position:relative}#header,#header #indicator,#header #title{display:flex;align-items:center}#content-container{overflow:hidden;display:flex;flex-direction:column}#content{padding:var(--expansion-content-padding,0 1.5rem 1.5rem)}#icon{transition:var(--expansion-icon-transition,transform var(--transition-duration-slow,.25s) cubic-bezier(.4,0,.2,1));transform:rotate(0)}::slotted([slot=description]),::slotted([slot=title]){flex-basis:0;white-space:nowrap}::slotted([slot=title]){margin:var(--expansion-header-title-padding,0 1.5rem 0 0);flex-grow:1}::slotted([slot=description]){color:var(--expansion-header-description-color,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))));flex-grow:2}")],t([n({type:Boolean,reflect:!0,attribute:"open"}),o("design:type",Boolean)],v.prototype,"checked",void 0),t([n({type:Boolean,reflect:!0}),o("design:type",Boolean)],v.prototype,"noRipple",void 0),t([n({type:Number}),o("design:type",Number)],v.prototype,"duration",void 0),t([n({type:String,reflect:!0,attribute:"aria-expanded"}),o("design:type",String)],v.prototype,"ariaChecked",void 0),t([n({type:String}),o("design:type",Object)],v.prototype,"icon",void 0),t([i("#header"),o("design:type",HTMLElement)],v.prototype,"$header",void 0),t([i("#content"),o("design:type",HTMLElement)],v.prototype,"$content",void 0),t([i("#content-container"),o("design:type",HTMLElement)],v.prototype,"$contentContainer",void 0),t([i("#content-container"),o("design:type",c)],v.prototype,"$ripple",void 0),v=t([a("wl-expansion")],v);
