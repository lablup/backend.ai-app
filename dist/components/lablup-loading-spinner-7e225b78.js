import{_ as e,e as t,n as s,s as i,r as n,$ as p}from"./backend-ai-webui-ac946d0d.js";import"./progress-spinner-34b29b8c.js";
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */let r=class extends i{constructor(){super(),this.active=!1}static get styles(){return[n`
        wl-progress-spinner {
          --progress-spinner-size: 48px;
          --progress-spinner-stroke-width: 12px;
          width: 48px;
          height: 48px;
          position: fixed;
          bottom: 60px;
          right: 60px;
        }
      `]}render(){return p`
      <wl-progress-spinner id="spinner"></wl-progress-spinner>
    `}shouldUpdate(){return this.active}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#spinner"),this.active=!0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}async show(){this.active=!0,await this.updateComplete,this.spinner.style.display="block"}async hide(){this.active=!0,await this.updateComplete,this.spinner.style.display="none",this.active=!1}async toggle(){await this.updateComplete,!0===this.spinner.active?(this.active=!0,this.spinner.style.display="none",this.active=!1):(this.active=!0,this.spinner.style.display="block")}};e([t({type:Object})],r.prototype,"spinner",void 0),e([t({type:Boolean})],r.prototype,"active",void 0),r=e([s("lablup-loading-spinner")],r);
