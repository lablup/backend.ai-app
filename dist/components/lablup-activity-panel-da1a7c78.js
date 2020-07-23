import{_ as t,p as e,c as i,L as o,I as d,a,b as r,h as s}from"./backend-ai-console-33bc2716.js";let l=class extends o{constructor(){super(),this.title="",this.message="",this.panelId="",this.horizontalsize="",this.headerColor="",this.elevation=1,this.width=280,this.marginWidth=16,this.minwidth=0,this.maxwidth=0,this.pinned=!1,this.disabled=!1}static get styles(){return[d,a,r`
        wl-card {
          display: block;
          background: white;
          box-sizing: border-box;
          margin: 16px;
          padding: 0;
          border-radius: 10px;
          --card-elevation: rgba(4, 7, 22, 0.15) 0px 5px 10px -2px;
        }

        wl-card > h4 {
          border-left: 3px solid var(--paper-green-900);
          background-color: var(--paper-green-500);
          color: #eee;
          font-size: 14px;
          font-weight: 400;
          height: 32px;
          padding: 5px 15px 5px 20px;
          margin: 0 0 10px 0;
          border-radius: 10px 10px 0 0;
          border-bottom: 1px solid #DDD;
          @apply --layout-justified;
          display: flex;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        wl-card[disabled] {
          background-color: rgba(0, 0, 0, 0.1);
        }

        wl-card > div {
          margin: 20px;
          padding-bottom: 20px;
          font-size: 12px;
          padding-left: 3px;
        }

        ul {
          padding-inline-start: 0;
        }

        #button {
          display: none;
        }
      `]}render(){return s`
      <wl-card id="activity" elevation="${this.elevation}" ?disabled="${this.disabled}">
        <h4 id="header" class="horizontal center layout" style="font-weight:bold">
          <span>${this.title}</span>
          <div class="flex"></div>
          <wl-button id="button" fab flat inverted @click="${()=>this._removePanel()}">
            <wl-icon>close</wl-icon>
          </wl-button>
        </h4>
        <div class="${this.disabled?"disabled":"enabled"}">
          <slot name="message"></slot>
        </div>
      </wl-card>
    `}firstUpdated(){if(this.pinned||null==this.panelId){const t=this.shadowRoot.getElementById("button");this.shadowRoot.querySelector("h4").removeChild(t)}this.shadowRoot.querySelector("wl-card").style.width=this.width+"px",this.minwidth&&(this.shadowRoot.querySelector("wl-card").style.minWidth=this.minwidth+"px"),this.maxwidth&&(this.shadowRoot.querySelector("wl-card").style.minWidth=this.maxwidth+"px"),this.horizontalsize&&("2x"==this.horizontalsize&&(this.shadowRoot.querySelector("wl-card").style.width=2*this.width+32+"px"),"3x"==this.horizontalsize&&(this.shadowRoot.querySelector("wl-card").style.width=3*this.width+32+"px")),this.shadowRoot.querySelector("wl-card").style.margin=this.marginWidth+"px",""!==this.headerColor&&(this.shadowRoot.querySelector("#header").style.backgroundColor=this.headerColor)}connectedCallback(){super.connectedCallback()}_removePanel(){}};t([e({type:String})],l.prototype,"title",void 0),t([e({type:String})],l.prototype,"message",void 0),t([e({type:String})],l.prototype,"panelId",void 0),t([e({type:String})],l.prototype,"horizontalsize",void 0),t([e({type:String})],l.prototype,"headerColor",void 0),t([e({type:Number})],l.prototype,"elevation",void 0),t([e({type:Number})],l.prototype,"width",void 0),t([e({type:Number})],l.prototype,"marginWidth",void 0),t([e({type:Number})],l.prototype,"minwidth",void 0),t([e({type:Number})],l.prototype,"maxwidth",void 0),t([e({type:Boolean})],l.prototype,"pinned",void 0),t([e({type:Boolean})],l.prototype,"disabled",void 0),l=t([i("lablup-activity-panel")],l);
