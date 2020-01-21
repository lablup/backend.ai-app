import{i as a,b as i,p as t,j as o,q as r,d as n,h as e}from"./iron-flex-layout-classes-e73207af.js";import{O as s,B as d,F as c}from"./index-b88a2f7c.js";let l=class extends s{constructor(){super(...arguments),this.role="banner",this.hideDelay=5e3,this.autoHideTimeout=null}get $focusTrap(){return this.$snackbar}animateIn(){let a=!1;const i=()=>{a||(a=!0,this.didShow())},t=this.$snackbar.animate([{transform:"translateY(100%)",opacity:"0"},{transform:"translateY(0)",opacity:"1"}],this.animationConfig),o=this.$backdrop.animate([{opacity:"0"},{opacity:"1"}],this.animationConfig);o.onfinish=i,t.onfinish=i,this.activeInAnimations.push(t,o)}animateOut(a){null!=this.autoHideTimeout&&window.clearTimeout(this.autoHideTimeout);let i=!1;const t=()=>{i||(i=!0,this.resolve(a),this.didHide(a))},o=this.$snackbar.animate([{transform:"translateY(0)",opacity:"1"},{transform:"translateY(100%)",opacity:"0"}],this.animationConfig),r=this.$backdrop.animate([{opacity:"1"},{opacity:"0"}],this.animationConfig);r.onfinish=t,o.onfinish=t,this.activeOutAnimations.push(o,r)}didShow(){super.didShow(),this.autoHideTimeout=window.setTimeout(()=>{this.persistent||this.hide()},this.hideDelay)}render(){return e` <wl-backdrop id="backdrop" @click="${this.clickAway}"></wl-backdrop> <focus-trap id="snackbar" ?inactive="${!this.open||this.disableFocusTrap}"> <div id="content"> <slot name="icon"></slot> <slot></slot> </div> <div id="actions"> <slot name="action"></slot> </div> </focus-trap> `}};l.styles=[...s.styles,a(":host{display:none;pointer-events:none;outline:none}:host([open]){display:block}:host([fixed]){padding:var(--snackbar-fixed-padding,.75rem);z-index:var(--snackbar-z-index,12345678);position:fixed;left:0;bottom:0;top:0;right:0}:host([fixed][open]){display:flex;align-items:flex-end}#snackbar{padding:var(--snackbar-padding,.375rem);color:var(--snackbar-color,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));background:var(--snackbar-bg,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));border-radius:var(--snackbar-border-radius,.5rem);box-shadow:var(--snackbar-elevation,var(--elevation-1,0 .3125rem .625rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)));flex-wrap:wrap;justify-content:flex-end;text-align:left;position:relative;pointer-events:all}#actions,#content,#snackbar{display:flex;align-items:center;flex-wrap:wrap}::slotted([slot=icon]){margin:var(--snackbar-icon-margin,0 .75rem 0 0);color:var(--snackbar-icon-color,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}#content{padding:var(--snackbar-content-padding,.375rem .75rem);flex-grow:1}")],i([t({type:String,reflect:!0}),o("design:type",String)],l.prototype,"role",void 0),i([t({type:Number}),o("design:type",Object)],l.prototype,"hideDelay",void 0),i([r("#backdrop"),o("design:type",d)],l.prototype,"$backdrop",void 0),i([r("#snackbar"),o("design:type",c)],l.prototype,"$snackbar",void 0),l=i([n("wl-snackbar")],l);
