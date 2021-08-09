import{_ as e,p as r,c as s,L as t,d as a,I as o,a as i,n,e as c,b as l,h as p}from"./backend-ai-webui-ecfefd57.js";
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let d=class extends t{constructor(){super(...arguments),this.progress="",this.description=""}static get styles(){return[a,o,i,n,c,l`
      .progress {
          position: relative;
          display: flex;
          height: var(--progress-bar-height, 20px);
          width: var(--progress-bar-width, 186px);
          border: var(--progress-bar-border, 0px);
          border-radius: var(--progress-bar-border-radius, 5px);
          font-size: var(--progress-bar-font-size, 10px);
          font-family: var(--progress-bar-font-family, var(--general-font-family));
          overflow: hidden;
      }

      .back {
          display: flex;
          justify-content: left;
          align-items: center;
          width: 100%;
          background: var(--progress-bar-background, var(--paper-green-500));
          color: var(--progress-bar-font-color-inverse, white);
      }

      .front {
          position: absolute;
          display: flex;
          justify-content: left;
          align-items: center;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: var(--general-progress-bar-bg, #e8e8e8);
          color: var(--progress-bar-font-color, black);
          clip-path: inset(0 0 0 100%);
          -webkit-clip-path: inset(0 0 0 100%);
          transition: clip-path var(--progress-bar-transition-second, 1s) linear;
      }

      .front[slot=description-2] {
        color: var(--progress-bar-font-color, black);
      }

      `]}render(){return p`
    <link rel="stylesheet" href="resources/custom.css">
    <div class="horizontal layout flex">
      <slot name="left-desc"></slot>
      <div class="progress">
          <div id="back" class="back"></div>
          <div id="front" class="front"></div>
      </div>
      <slot name="right-desc"></slot>
    </div>
    `}firstUpdated(){this.progressBar=this.shadowRoot.querySelector("#front"),this.frontDesc=this.shadowRoot.querySelector("#front"),this.backDesc=this.shadowRoot.querySelector("#back"),this.progressBar.style.clipPath="inset(0 0 0 0%)"}async changePct(e){await this.updateComplete,this.progressBar.style.clipPath="inset(0 0 0 "+100*e+"%)"}async changeDesc(e){await this.updateComplete,this.frontDesc.innerHTML="&nbsp;"+e,this.backDesc.innerHTML="&nbsp;"+e}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}attributeChangedCallback(e,r,s){"progress"!=e||null===s||isNaN(s)||this.changePct(s),"description"!=e||null===s||s.startsWith("undefined")||this.changeDesc(s),super.attributeChangedCallback(e,r,s)}};e([r({type:Object})],d.prototype,"progressBar",void 0),e([r({type:Object})],d.prototype,"frontDesc",void 0),e([r({type:Object})],d.prototype,"backDesc",void 0),e([r({type:String})],d.prototype,"progress",void 0),e([r({type:String})],d.prototype,"description",void 0),d=e([s("lablup-progress-bar")],d);
