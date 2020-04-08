import{_ as t,p as i,c as e,L as s,b as a,h as o}from"./backend-ai-console-f3f55dfb.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let c=class extends s{constructor(){super(),this.active=!1}static get styles(){return[a`
        wl-progress-spinner {
          --progress-spinner-size: 48px;
          --progress-spinner-stroke-width: 12px;
          width: 48px;
          height: 48px;
          position: fixed;
          bottom: 60px;
          right: 60px;
        }
      `]}render(){return o`
      <wl-progress-spinner id="indicator"></wl-progress-spinner>
    `}shouldUpdate(){return this.active}firstUpdated(){this.indicator=this.shadowRoot.querySelector("#indicator"),this.active=!0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}async getMoreState(){}async show(){this.active=!0,await this.updateComplete,this.indicator.style.display="block"}async hide(){this.active=!0,await this.updateComplete,this.indicator.style.display="none",this.active=!1}async toggle(){await this.updateComplete,!0===this.indicator.active?(this.active=!0,this.indicator.style.display="none",this.active=!1):(this.active=!0,this.indicator.style.display="block")}};t([i({type:Object})],c.prototype,"indicator",void 0),t([i({type:Boolean})],c.prototype,"active",void 0),c=t([e("lablup-loading-indicator")],c);
