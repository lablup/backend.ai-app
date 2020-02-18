import{X as r,x as e,_ as t,p as i,y as a,c as o,L as s,h as n,aq as d,ar as l,a as g}from"./backend-ai-console-1bd0067f.js";import"./index-68c170e9.js";let p=class extends s{constructor(){super(...arguments),this.role="banner"}render(){return n` <div id="content"> <slot name="icon"></slot> <slot></slot> </div> <div id="actions"> <slot name="action"></slot> </div> <wl-divider id="divider"></wl-divider> `}};p.styles=[r,e(":host{padding:var(--banner-padding,.375rem);color:var(--banner-color,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));background:var(--banner-bg,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));flex-wrap:wrap;justify-content:flex-end;text-align:left;position:relative}#actions,#content,:host{display:flex;align-items:center;flex-wrap:wrap}::slotted([slot=icon]){margin:var(--banner-icon-margin,0 .75rem 0 0);color:var(--banner-icon-color,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}#content{padding:var(--banner-content-padding,.375rem .75rem);flex-grow:1}#divider{position:absolute;left:0;bottom:0;width:100%}")],t([i({type:String,reflect:!0}),a("design:type",String)],p.prototype,"role",void 0),p=t([o("wl-banner")],p);let h=class extends d{render(){return n`
			${this.bufferPerc>0?n`
						<div id="buffer" style="transform: scaleX(${this.bufferPerc})"></div>
				  `:""}
			<div id="progress" style="${this.mode===l.DETERMINATE?`transform: scaleX(${this.progressPerc})`:""}">
				<div id="before"></div>
				<div id="after"></div>
			</div>
		`}};h.styles=[...d.styles,e(":host{height:var(--progress-bar-height,.25rem);background:var(--progress-bar-bg,hsl(var(--shade-300,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,75%))));contain:strict;position:relative;display:block;overflow:hidden}#progress{background:var(--progress-bar-color,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}#buffer{background:var(--progress-bar-buffer-color,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.5))}:host([mode=indeterminate]) #progress #after,:host([mode=indeterminate]) #progress #before{background-color:inherit;position:absolute;height:100%;left:0;top:0;bottom:0;animation-duration:var(--progress-bar-indeterminate-duration,2.1s);animation-timing-function:var(--progress-bar-indeterminate-timing-function,var(--transition-timing-function-standard-curve,cubic-bezier(.4,0,.2,1)));animation-iteration-count:infinite}:host([mode=indeterminate]) #progress #before{animation-name:indeterminate}:host([mode=indeterminate]) #progress #after{animation-name:indeterminate-short;animation-delay:var(--progress-bar-indeterminate-short-delay,1.15s)}#buffer,:host([mode=determinate]) #progress{transition:var(--progress-bar-determinate-transition,transform var(--transition-timing-function-linear,linear));transform-origin:top left;position:absolute;top:0;left:0;height:100%;width:100%}@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}")],h=t([o("wl-progress-bar")],h);let m=class extends s{constructor(){super(),this.value=0,this.text="",this.mode="determinate"}static get styles(){return[g`
          wl-dialog {
              position: fixed;
              right: 20px;
              bottom: 20px;
              z-index: 9000;
              --dialog-height: 80px;
              --dialog-width: 250px;
              --dialog-content-padding: 15px;
          }
      `]}firstUpdated(){this.dialog=this.shadowRoot.querySelector("#app-progress-dialog")}connectedCallback(){super.connectedCallback()}start(r="determinate"){this.value=0,this.text="Initializing...",this.mode=r,this.dialog.show()}set(r,e=""){this.value=r/100,this.text=e}end(r=0){setTimeout(()=>{this.dialog.hide()},r)}render(){return n`
      <wl-dialog id="app-progress-dialog" blockscrolling>
        <wl-title level="5" id="app-progress-text" slot="header">${this.text}</wl-title>
        <div slot="content">
        <wl-progress-bar .mode="${this.mode}" id="app-progress" .value="${this.value}"></wl-progress-bar>
        </div>
      </wl-dialog>
    `}};t([i({type:Number})],m.prototype,"value",void 0),t([i({type:String})],m.prototype,"text",void 0),t([i({type:String})],m.prototype,"mode",void 0),t([i({type:Object})],m.prototype,"dialog",void 0),m=t([o("backend-ai-indicator")],m);
