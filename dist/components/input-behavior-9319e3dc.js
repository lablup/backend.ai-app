import{Z as t,z as e,_ as r,p as i,A as a,C as o,$ as s,a0 as n,h as l}from"./backend-ai-webui-3ec8f434.js";var d;!function(t){t.SUBMIT="submit",t.INVALID="invalid"}(d||(d={}));class u extends t{constructor(){super(...arguments),this.outlined=!1,this.filled=!1,this.role="textbox",this._pristine=!0}set value(t){this.setValue(t)}get value(){return this.getFormItemValue()}set valueAsNumber(t){this.setValue(t.toString())}get valueAsNumber(){return parseFloat(this.getFormItemValue())}get $slot(){return this.shadowRoot.querySelector("#slot")}get $interactiveElement(){return this.$formElement}get pristine(){return this._pristine}get dirty(){return null!=this.value&&""!==this.value}firstUpdated(t){super.firstUpdated(t),this.listeners.push(o(this.$formElement,"keydown",this.onKeyDown.bind(this),{passive:!0}),o(this.$formElement,"input",this.onInput.bind(this),{passive:!0}),o(this.$formElement,"focusout",this.onBlur.bind(this),{passive:!0}),o(this.$formElement,"invalid",this.onInvalid.bind(this),{passive:!0})),(null!=this.initialValue||this.hasAttribute("value"))&&(this.value=this.initialValue||this.getAttribute("value")||"")}updated(t){super.updated(t),this.refreshAttributes()}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}focus(){this.$interactiveElement.focus()}setValue(t){null!=this.$formElement?(this.$formElement.value=t,this.refreshAttributes()):this.initialValue=t}onInput(t){this.refreshAttributes()}onInvalid(t){this.dispatchInputEvent(d.INVALID)}onBlur(){this._pristine=!1,this.refreshAttributes()}refreshAttributes(){s(this,{dirty:this.dirty,invalid:!this.valid&&!this.pristine,pristine:this.pristine})}onKeyDown(t){switch(t.code){case n:(t.ctrlKey||t.metaKey)&&this.dispatchInputEvent(d.SUBMIT)}}dispatchInputEvent(t){this.dispatchEvent(new CustomEvent(t,{composed:!0}))}render(){return l` <div id="container"> <slot id="before" name="before"></slot> <div id="wrapper"> <div id="label">${this.label}</div> <slot id="slot"></slot> ${this.renderFormElement()} </div> <slot id="after" name="after"></slot> </div> `}}u.styles=[...t.styles,e(':host{--_input-state-color:var(--input-state-color-inactive,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));--_input-padding-left-right:var(--input-padding-left-right,0);--_input-bg:var(--input-bg,transparent);--_input-border-radius:0;--_input-color:var(--input-color,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));--_input-label-color:var(--input-label-color,hsl(var(--shade-600,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,35%))));--_input-border-style:var(--input-border-style,solid);transform:translateZ(0);display:block;outline:none}:host([disabled]){pointer-events:none;--_input-state-color:var(--input-state-color-disabled,hsl(var(--shade-300,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,75%))));--_input-label-color:var(--input-label-color-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));--_input-color:var(--input-color-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));--_input-border-style:var(--input-border-style-disabled,dashed)}#container{background:var(--_input-bg);color:var(--_input-color);border-radius:var(--_input-border-radius);font-size:var(--input-font-size,1rem);font-family:var(--input-font-family,var(--font-family-serif,"Roboto Slab",times,serif));border-bottom:var(--input-border-width,.0625rem) var(--_input-border-style) var(--_input-state-color);transition:var(--input-transition,border-color var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease),background var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease));position:relative;display:flex;align-items:center;overflow:hidden}#wrapper{position:relative;flex-grow:1}#label{left:var(--_input-padding-left-right);color:var(--_input-label-color);transition:var(--input-label-transition,top var(--transition-duration-fast,.12s) var(--transition-timing-function-linear,linear),font-size var(--transition-duration-fast,.12s) var(--transition-timing-function-linear,linear),transform var(--transition-duration-fast,.12s) var(--transition-timing-function-linear,linear));font-family:var(--input-font-family,var(--font-family-serif,"Roboto Slab",times,serif));top:50%;transform:translateY(-50%);z-index:1;position:absolute;pointer-events:none;font-size:inherit;line-height:1;white-space:nowrap;-webkit-user-select:none;user-select:none}:host(:hover){--_input-state-color:var(--input-state-color-hover,hsl(var(--shade-600,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,35%))))}:host([filled]),:host([outlined]){--_input-padding-left-right:var(--input-padding-left-right-outlined,0.75rem)}:host([filled]){--_input-border-radius:var(--input-border-radius-outlined,0.5rem 0.5rem 0 0);--_input-bg:var(--input-bg,hsl(var(--shade-200,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,85%))))}:host([filled]:hover){--_input-bg:var(--input-bg-filled-hover,hsla(var(--shade-200,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,85%)),0.5))}:host([outlined]){--_input-border-radius:var(--input-border-radius-outlined,0.5rem)}:host([outlined]) #container{border:var(--input-border-width,.0625rem) var(--_input-border-style) var(--_input-state-color)}:host(:focus-within){--_input-state-color:var(--input-state-color-active,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}:host(:focus-within) #label,:host([dirty]) #label,:host([type=color]) #label,:host([type=date]) #label,:host([type=file]) #label,:host([type=range]) #label{font-size:var(--input-label-font-size,.75rem);top:var(--input-padding-top-bottom,.5rem);transform:translateY(0)}#slot-wrapper,::slotted(input),::slotted(select),::slotted(textarea){caret-color:var(--_input-color-state);padding:var(--input-padding-top-bottom,.5rem) var(--_input-padding-left-right);font-family:var(--input-font-family,var(--font-family-serif,"Roboto Slab",times,serif));font-size:var(--input-font-size,1rem);-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box;display:block;color:inherit;-webkit-overflow-scrolling:touch;position:relative;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;outline:none;margin:0;background:transparent;width:100%}:host([label]) #slot-wrapper,:host([label]) ::slotted(input),:host([label]) ::slotted(select),:host([label]) ::slotted(textarea){padding-top:calc(var(--input-label-space, .875rem) + var(--input-padding-top-bottom, .5rem))}:host([invalid]){--_input-state-color:var(--input-state-color-invalid,hsl(var(--error-500,var(--error-hue,3),var(--error-saturation,80%),var(--error-lightness,54%))))}::slotted(input[type=color]){height:3.75rem;cursor:pointer}::slotted([slot=after]),::slotted([slot=before]){color:var(--input-before-after-color,hsl(var(--shade-500,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,55%))))}:host(:not([outlined]):not([filled])) ::slotted([slot=before]){margin-right:var(--input-padding-left-right-outlined,.75rem)}:host(:not([outlined]):not([filled])) ::slotted([slot=after]),:host([filled]) ::slotted([slot=before]),:host([outlined]) ::slotted([slot=before]){margin-left:var(--input-padding-left-right-outlined,.75rem)}:host([filled]) ::slotted([slot=after]),:host([outlined]) ::slotted([slot=after]){margin-right:var(--input-padding-left-right-outlined,.75rem)}')],r([i({type:String,reflect:!0}),a("design:type",String)],u.prototype,"autocomplete",void 0),r([i({type:Boolean,reflect:!0}),a("design:type",Boolean)],u.prototype,"outlined",void 0),r([i({type:Boolean,reflect:!0}),a("design:type",Boolean)],u.prototype,"filled",void 0),r([i({type:String,reflect:!0}),a("design:type",String)],u.prototype,"role",void 0),r([i({type:String,reflect:!0}),a("design:type",String)],u.prototype,"label",void 0),r([i({type:String}),a("design:type",String),a("design:paramtypes",[String])],u.prototype,"value",null),r([i({type:Number}),a("design:type",Number),a("design:paramtypes",[Number])],u.prototype,"valueAsNumber",null);export{u as I};
