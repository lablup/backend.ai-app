import{_ as t,e as s,l as e,n as a,s as i,r as o,$ as l,B as d,b as n,I as p,a as c}from"./backend-ai-webui-ac946d0d.js";
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */let u=class extends i{constructor(){super(...arguments),this.active=!0}static get styles(){return[o`
        .dots-box {
          width: 100px;
          background-color: transparent;
        }

        .pulse-container {
          width: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .pulse-bubble {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: rgba(114, 235, 81, 0.8);
        }

        .pulse-bubble-1 {
          animation: pulse .4s ease 0s infinite alternate;
        }

        .pulse-bubble-2 {
          animation: pulse .4s ease .2s infinite alternate;
        }

        .pulse-bubble-3 {
          animation: pulse .4s ease .4s infinite alternate;
        }

        @keyframes pulse {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: .25;
            transform: scale(.75);
          }
        }
      `]}render(){return l`
      <div class="dots-box" id="dots">
        <div class="pulse-container">
          <div class="pulse-bubble pulse-bubble-1"></div>
          <div class="pulse-bubble pulse-bubble-2"></div>
          <div class="pulse-bubble pulse-bubble-3"></div>
        </div>
      </div>
    `}shouldUpdate(){return this.active}firstUpdated(){this.active=!0}async show(){this.active=!0,await this.updateComplete,this.dots.style.display="block"}async hide(){this.active=!0,await this.updateComplete,this.dots.style.display="none",this.active=!1}async toggle(){await this.updateComplete,"block"===this.dots.style.display?await this.hide():await this.show()}};t([s({type:Boolean})],u.prototype,"active",void 0),t([e("#dots")],u.prototype,"dots",void 0),u=t([a("lablup-loading-dots")],u);
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */
let r=class extends d{constructor(){super(),this.list_status=Object(),this.message="There is nothing to display",this.status_condition="loading",this.dots=Object(),this.active=!0}static get styles(){return[n,p,c,o`
        #status {
          position: absolute;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `]}render(){return l`
      <div class="vertical layout center flex" id="status">
        ${"loading"==this.status_condition?l`
          <lablup-loading-dots id="loading-dots"></lablup-loading-dots>
        `:l`
          ${"no-data"==this.status_condition?l`
            <span class="list-message">${this.message}</span>
          `:l``}
        `}
      </div>
    `}shouldUpdate(){return this.active}firstUpdated(){this.list_status=this.shadowRoot.querySelector("#status"),this.active=!0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}async show(){this.active=!0,await this.updateComplete,this.list_status.style.display="flex"}async hide(){this.active=!0,await this.updateComplete,this.list_status.style.display="none",this.active=!1}};t([s({type:Object})],r.prototype,"list_status",void 0),t([s({type:String})],r.prototype,"message",void 0),t([s({type:String})],r.prototype,"status_condition",void 0),t([s({type:Object})],r.prototype,"dots",void 0),t([s({type:Boolean})],r.prototype,"active",void 0),r=t([a("backend-ai-list-status")],r);
