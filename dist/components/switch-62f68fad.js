import{S as r,n as a,_ as i,c as s,h as e}from"./backend-ai-console-14d10124.js";let t=class extends r{render(){return e` <div id="knob"> <wl-ripple id="ripple" .target="${this}" focusable overlay unbounded centered initialDuration="200"></wl-ripple> </div> ${this.renderFormElement()} `}};t.styles=[...r.styles,a(":host{--_switch-bg:var(--switch-bg,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));--_switch-color:var(--switch-color,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));background:var(--_switch-bg);color:var(--_switch-color);width:var(--switch-width,2.125rem);height:var(--switch-height,.875rem);border-radius:var(--switch-border-radius,.75rem);transition:var(--switch-transition,background var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));display:inline-flex;align-items:center;position:relative;outline:none;-webkit-user-select:none;user-select:none}:host(:not([disabled])){cursor:pointer}:host([checked]){--_switch-bg:var(--switch-bg-checked,hsla(var(--primary-400,var(--primary-hue,224),var(--primary-saturation,42%),var(--primary-lightness,52%)),0.4));--_switch-color:var(--switch-color-checked,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))))}:host([checked]) #knob{transform:translateX(calc(var(--switch-width, 2.125rem) - 100%))}:host(:not([checked])) #ripple{color:var(--_switch-bg)}:host(:focus),:host(:hover){will-change:background-color}:host([disabled]){--_switch-bg:var(--switch-bg-disabled,hsl(var(--shade-200,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,85%))));--_switch-color:var(--switch-color-disabled,hsl(var(--shade-300,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,75%))));pointer-events:none}:host([disabled][checked]){--_switch-bg:var(--switch-bg-disabled-checked,hsla(var(--primary-400,var(--primary-hue,224),var(--primary-saturation,42%),var(--primary-lightness,52%)),0.1));--_switch-color:var(--switch-color-disabled-checked,hsla(var(--primary-400,var(--primary-hue,224),var(--primary-saturation,42%),var(--primary-lightness,52%)),0.4))}#knob{width:var(--switch-knob-size,1.25rem);height:var(--switch-knob-size,1.25rem);border-radius:var(--switch-knob-border-radius,100%);box-shadow:var(--switch-knob-elevation,var(--elevation-2,0 .375rem .75rem -.125rem hsla(var(--shadow,var(--shadow-hue,230),var(--shadow-saturation,70%),var(--shadow-lightness,5%)),.15)));transition:var(--switch-knob-transition,background var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)),transform var(--transition-duration-fast,.12s) var(--transition-timing-function-deceleration-curve,cubic-bezier(0,0,.2,1)));background:currentColor;position:absolute}#ripple{transform:var(--switch-ripple-transform,translate(-50%,-50%) scale(1.8))}")],t=i([s("wl-switch")],t);
