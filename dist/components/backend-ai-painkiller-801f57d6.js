import{x as e,j as t,b as i,p as s,k as o,e as n,L as a,h as r,u as l,y as d,z as h,r as c,l as u,C as p,D as g,s as f,q as v}from"./iron-flex-layout-classes-c9b3b8db.js";function m(e){return e.hasAttribute("hidden")||e.hasAttribute("aria-hidden")&&"false"!==e.getAttribute("aria-hidden")||"none"===e.style.display||"0"===e.style.opacity||"hidden"===e.style.visibility||"collapse"===e.style.visibility}function b(e){return"-1"!==e.getAttribute("tabindex")&&!m(e)&&!function(e){return e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&"false"!==e.getAttribute("aria-disabled")}(e)&&(e.hasAttribute("tabindex")||(e instanceof HTMLAnchorElement||e instanceof HTMLAreaElement)&&e.hasAttribute("href")||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLIFrameElement)}const y=document.createElement("template");y.innerHTML='\n\t<div id="start"></div>\n\t<div id="backup"></div>\n\t<slot></slot>\n\t<div id="end"></div>\n';class w extends HTMLElement{constructor(){super(),this.debounceId=Math.random().toString(),this._focused=!1;const e=this.attachShadow({mode:"open"});e.appendChild(y.content.cloneNode(!0)),this.$backup=e.querySelector("#backup"),this.$start=e.querySelector("#start"),this.$end=e.querySelector("#end"),this.focusLastElement=this.focusLastElement.bind(this),this.focusFirstElement=this.focusFirstElement.bind(this),this.onFocusIn=this.onFocusIn.bind(this),this.onFocusOut=this.onFocusOut.bind(this)}static get observedAttributes(){return["inactive"]}get inactive(){return this.hasAttribute("inactive")}set inactive(e){e?this.setAttribute("inactive",""):this.removeAttribute("inactive")}get focused(){return this._focused}connectedCallback(){this.$start.addEventListener("focus",this.focusLastElement),this.$end.addEventListener("focus",this.focusFirstElement),this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut),this.render()}disconnectedCallback(){this.$start.removeEventListener("focus",this.focusLastElement),this.$end.removeEventListener("focus",this.focusFirstElement),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut)}attributeChangedCallback(){this.render()}focusFirstElement(){this.trapFocus()}focusLastElement(){this.trapFocus(!0)}getFocusableElements(){return function e(t,i,s,o=20,n=0){let a=[];if(n>=o)return a;const r=t=>{const a=t.assignedNodes().filter(e=>1===e.nodeType);return a.length>0?e(a[0].parentElement,i,s,o,n+1):[]},l=Array.from(t.children||[]);for(const t of l)i(t)||(s(t)&&a.push(t),null!=t.shadowRoot?a.push(...e(t.shadowRoot,i,s,o,n+1)):"SLOT"===t.tagName?a.push(...r(t)):a.push(...e(t,i,s,o,n+1)));return a}(this,m,b)}trapFocus(e){if(this.inactive)return;let t=this.getFocusableElements();t.length>0?(e?t[t.length-1].focus():t[0].focus(),this.$backup.setAttribute("tabindex","-1")):(this.$backup.setAttribute("tabindex","0"),this.$backup.focus())}onFocusIn(){this.updateFocused(!0)}onFocusOut(){this.updateFocused(!1)}updateFocused(t){e(()=>{this.focused!==t&&(this._focused=t,this.render())},0,this.debounceId)}render(){this.$start.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.$end.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.focused?this.setAttribute("focused",""):this.removeAttribute("focused")}}window.customElements.define("focus-trap",w);let A=class extends a{constructor(){super(...arguments),this.role="presentation"}render(){return r``}};function x(e){e.onfinish=null,e.pause()}function k(e){for(const t of e)x(t);e.length=0}A.styles=[t(":host{background:var(--backdrop-bg,rgba(0,0,0,.6));position:absolute;top:0;left:0;width:100%;height:100%;outline:none}")],i([s({type:String,reflect:!0}),o("design:type",String)],A.prototype,"role",void 0),A=i([n("wl-backdrop")],A);const E="cubic-bezier(0.4, 0, 0.2, 1)";var C;!function(e){e.DID_SHOW="didShow",e.DID_HIDE="didHide"}(C||(C={}));const L=document.documentElement,I="overlay",F=e=>`${I}-${e}`;class O extends a{constructor(){super(...arguments),this.open=!1,this.disableFocusTrap=!1,this.backdrop=!1,this.fixed=!1,this.persistent=!1,this.blockScrolling=!1,this.duration=200,this.scrollContainer=L,this.activeInAnimations=[],this.activeOutAnimations=[],this.resolvers=[],this.overlayId=d(),this.listeners=[]}get $blockableScrollContainer(){return this.scrollContainer instanceof HTMLElement?this.scrollContainer:L}get animationConfig(){return{duration:this.duration,easing:E,fill:"both"}}trapFocus(){null!=this.$focusTrap&&(this.storeCurrentActiveElement(),this.$focusTrap.focusFirstElement())}storeCurrentActiveElement(){this.activeElementBeforeOpen=h()}show(e){return this.activeInAnimations.length>0?this.createResolver():(this.prepareShowAnimation(e),this.animateIn(),this.open=!0,this.createResolver())}hide(e){this.activeOutAnimations.length>0||(this.prepareHideAnimation(),this.animateOut(e))}updated(e){super.updated(e),e.has("open")&&(this.open?this.removeAttribute("tabindex"):this.setAttribute("tabindex","-1")),this.updateAria()}updateAria(){c(this,{"aria-hidden":!this.open})}createResolver(){return new Promise(e=>{this.resolvers.push(e)})}resolve(e){for(const t of this.resolvers)t(e);this.resolvers.length=0}clickAway(){!this.persistent&&this.open&&this.hide()}dispatchOverlayEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,composed:!0,bubbles:!0}))}setConfig(e){Object.assign(this,e)}pauseAnimations(){this.pauseInAnimations(),this.pauseOutAnimations()}pauseInAnimations(){k(this.activeInAnimations)}pauseOutAnimations(){k(this.activeOutAnimations)}prepareShowAnimation(t){if(this.listeners.push(u(this.scrollContainer,"scroll",this.updatePosition.bind(this),{passive:!0}),"ResizeObserver"in window?function(t,i,{debounceMs:s}={}){const o=new ResizeObserver(t=>{t.forEach(({contentRect:t})=>null==s?i(t):e(()=>i(t),s,Math.random().toString()))});return o.observe(t),()=>o.disconnect()}(this,this.updatePosition.bind(this),{debounceMs:100}):u(window,"resize",this.updatePosition.bind(this),{passive:!0})),this.pauseAnimations(),null!=t&&this.setConfig(t),this.blockScrolling){const e=this.$blockableScrollContainer;e.style.overflow="hidden",e.classList.add(F(this.overlayId))}}prepareHideAnimation(){p(this.listeners),this.pauseAnimations()}didShow(){this.activeInAnimations.length=0,this.listeners.push(u(this,"keydown",this.onKeyDown.bind(this))),this.disableFocusTrap||this.trapFocus(),this.dispatchOverlayEvent(C.DID_SHOW)}didHide(e){if(this.blockScrolling){const e=this.$blockableScrollContainer,t=e.className.match(new RegExp(I,"gm"));(null===t||null!=t&&1===t.length)&&(e.style.overflow=""),e.classList.remove(F(this.overlayId))}null!=this.activeElementBeforeOpen&&(this.activeElementBeforeOpen.focus(),this.activeElementBeforeOpen=void 0),this.activeOutAnimations.length=0,this.open=!1,this.dispatchOverlayEvent(C.DID_HIDE,e)}updatePosition(){}onKeyDown(e){switch(e.code){case g:this.open&&!this.persistent&&(this.hide(),f(e))}}}O.styles=[l,t(":host([backdrop]) #backdrop{display:block}#backdrop{display:none;pointer-events:all}")],i([s({type:Boolean,reflect:!0}),o("design:type",Boolean)],O.prototype,"open",void 0),i([s({type:Boolean,reflect:!0}),o("design:type",Boolean)],O.prototype,"disableFocusTrap",void 0),i([s({type:Boolean,reflect:!0}),o("design:type",Boolean)],O.prototype,"backdrop",void 0),i([s({type:Boolean,reflect:!0}),o("design:type",Boolean)],O.prototype,"fixed",void 0),i([s({type:Boolean}),o("design:type",Boolean)],O.prototype,"persistent",void 0),i([s({type:Boolean}),o("design:type",Boolean)],O.prototype,"blockScrolling",void 0),i([s({type:Number}),o("design:type",Number)],O.prototype,"duration",void 0),i([s({type:Object}),o("design:type",EventTarget)],O.prototype,"scrollContainer",void 0);var S;!function(e){e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e.AUTO="auto",e.FULLSCREEN="fullscreen"}(S||(S={}));S.MEDIUM;let T=class extends O{constructor(){super(...arguments),this.scrollable=!1,this.role="dialog"}get $focusTrap(){return this.$dialog}animateIn(){let e=!1;const t=()=>{e||(e=!0,this.didShow())},i=this.$dialog.animate([{transform:"scale(0.9) translate(0, 30px)",opacity:"0"},{transform:"scale(1) translate(0, 0)",opacity:"1"}],this.animationConfig),s=this.$backdrop.animate([{opacity:"0"},{opacity:"1"}],this.animationConfig);i.onfinish=t,s.onfinish=t,this.activeInAnimations.push(i,s)}animateOut(e){let t=!1;const i=()=>{t||(t=!0,this.resolve(e),this.didHide(e))},s=this.$dialog.animate([{transform:"translateY(0)",opacity:"1"},{transform:"translateY(30px)",opacity:"0"}],this.animationConfig),o=this.$backdrop.animate([{opacity:"1"},{opacity:"0"}],this.animationConfig);s.onfinish=i,o.onfinish=i,this.activeOutAnimations.push(s,o)}render(){return r` <wl-backdrop id="backdrop" @click="${this.clickAway}"></wl-backdrop> <focus-trap id="dialog" ?inactive="${!this.open||this.disableFocusTrap}"> <slot name="header"></slot> <slot name="content"></slot> <slot></slot> <slot name="footer"></slot> </focus-trap> `}};T.styles=[...O.styles,t(":host{--_dialog-width:var(--dialog-width,auto);--_dialog-height:var(--dialog-height,auto);text-align:left;display:none;position:relative;outline:none}:host([scrollable]) #dialog{overflow:hidden}:host([scrollable]) ::slotted([slot=header]){padding:var(--dialog-header-padding-scrollable,1.5rem);border-bottom:var(--dialog-scrollable-border,.0625rem solid hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))))}:host([scrollable]) ::slotted([slot=footer]){border-top:var(--dialog-scrollable-border,.0625rem solid hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))))}:host([scrollable]) ::slotted([slot=content]){overflow-y:scroll;-webkit-overflow-scrolling:touch}:host([open]){display:flex;align-items:center;justify-content:center}::slotted([slot=header]){--h-margin:0;padding:var(--dialog-header-padding,1.5rem 1.5rem 0);margin:0;flex-shrink:0}::slotted([slot=footer]){padding:var(--dialog-footer-padding,.75rem);display:flex;align-items:center;justify-content:flex-end;flex-shrink:0}::slotted([slot=content]){padding:var(--dialog-content-padding,1.5rem);flex-grow:1}:host([fixed]){z-index:var(--dialog-z-index,1234567);will-change:transform,opacity;position:fixed;top:0;left:0;width:100%;height:100%}:host([fixed]) #dialog{min-width:var(--dialog-min-width,260px);min-height:var(--dialog-min-height,auto);max-width:var(--dialog-max-width,100vw);max-height:var(--dialog-max-height,100vh)}:host([size=small][fixed]){--_dialog-width:var(--dialog-width-s,40%);--_dialog-height:var(--dialog-height-s,40%)}:host([size=medium][fixed]){--_dialog-width:var(--dialog-width-m,50%);--_dialog-height:var(--dialog-height-m,50%)}:host([size=large][fixed]){--_dialog-width:var(--dialog-width-l,60%);--_dialog-height:var(--dialog-height-l,60%)}:host([size=auto][fixed]){--_dialog-width:var(--dialog-width-auto,auto);--_dialog-height:var(--dialog-height-auto,auto)}:host([size=fullscreen][fixed]){--_dialog-width:var(--dialog-width-fullscreen,100%);--_dialog-height:var(--dialog-height-fullscreen,100%)}:host([size=fullscreen][fixed]) #dialog{border-radius:0}#dialog{width:var(--_dialog-width);height:var(--_dialog-height);box-shadow:var(--dialog-elevation,var(--elevation-4,0 .5rem 1rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)));border-radius:var(--dialog-border-radius,.5rem);background:var(--dialog-bg,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));color:var(--dialog-color,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));padding:0;margin:0;outline:none;display:flex;flex-direction:column;align-items:stretch;border:none;overflow-y:auto;overscroll-behavior:contain;position:relative;z-index:1}")],i([s({type:String,reflect:!0}),o("design:type",String)],T.prototype,"size",void 0),i([s({type:Boolean,reflect:!0}),o("design:type",Boolean)],T.prototype,"scrollable",void 0),i([s({type:String,reflect:!0}),o("design:type",String)],T.prototype,"role",void 0),i([v("#dialog"),o("design:type",w)],T.prototype,"$dialog",void 0),i([v("#backdrop"),o("design:type",A)],T.prototype,"$backdrop",void 0),T=i([n("wl-dialog")],T);let $=class extends a{constructor(){super(...arguments),this.role="presentation"}render(){return r` <slot></slot> `}};$.styles=[t(':host{font-size:var(--icon-size,1.5em);font-family:var(--icon-font,"Material Icons");font-weight:400;font-style:normal;color:inherit;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}'),l],i([s({type:String,reflect:!0}),o("design:type",String)],$.prototype,"role",void 0),$=i([n("wl-icon")],$);class M{static relieve(e){if(console.log(e),!0===window.backendaiconsole.debug)return e;if(this.errorMessageTable.hasOwnProperty(e))return this.errorMessageTable[e];for(const t of Object.keys(this.regexTable))if(RegExp(t).test(e))return this.regexTable[t];return"Problem found during process."}}M.errorMessageTable={"Cannot read property 'map' of null":"User has no group. Please contact administrator to fix it.","Cannot read property 'split' of undefined":"Wrong API server address.","server responded failure: 400 Bad Request - The virtual folder already exists with the same name.":"A virtual folder with the same name already exists. Delete your own folder or decline the invitation.","server responded failure: 400 Bad Request - Missing or invalid API parameters. (You cannot create more vfolders.)":"You cannot create more vfolders due to resource policy","server responded failure: 401 Unauthorized - Credential/signature mismatch. (Access key not found)":"Login information mismatch. Check your information","server responded failure: 401 Unauthorized - Credential/signature mismatch.":"Login information mismatch. Check your information","server responded failure: 412 Precondition Failed - You have reached your resource limit.":"Reached your resource limit. Check resources and sessions.","Authentication failed. Check information and manager status.":"Authentication failed. Check information and manager status."},M.regexTable={'integrity error: duplicate key value violates unique constraint "pk_resource_presets"[\\n]DETAIL:  Key \\(name\\)=\\([\\w]+\\) already exists.[\\n]':"A resource policy with the same name already exists.",'integrity error: duplicate key value violates unique constraint "pk_scaling_groups"[\\n]DETAIL:  Key \\(name\\)=\\([\\w]+\\) already exists.[\\n]':"A scaling group with the same name already exists.","server responded failure: 400 Bad Request - Missing or invalid API parameters. (Your resource quota is exceeded. (cpu=24 mem=512g cuda.shares=80))":"Resource limit exceed. Check your free resources."};export{M as B,E as C,w as F,O,A as a};
