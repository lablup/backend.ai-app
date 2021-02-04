import{_ as t,p as e,c as i,L as o,I as d,a,b as r,h as s}from"./backend-ai-console-bf343de1.js";let h=class extends o{constructor(){super(),this.title="",this.message="",this.panelId="",this.horizontalsize="",this.headerColor="",this.elevation=1,this.autowidth=!1,this.width=350,this.widthpct=0,this.height=0,this.marginWidth=16,this.minwidth=0,this.maxwidth=0,this.pinned=!1,this.disabled=!1,this.narrow=!1,this.noheader=!1,this.scrollableY=!1}static get styles(){return[d,a,r`
        div.card {
          display: block;
          background: var(--card-background-color, #ffffff);
          box-sizing: border-box;
          margin: 16px;
          padding: 0;
          border-radius: 5px;
          box-shadow: rgba(4, 7, 22, 0.7) 0px 0px 4px -2px;
          width: 280px;
        }

        div.card > h4 {
          background-color: #FFFFFF;
          color: #000000;
          font-size: 14px;
          font-weight: 400;
          height: 48px;
          padding: 5px 15px 5px 20px;
          margin: 0 0 10px 0;
          border-radius: 5px 5px 0 0;
          border-bottom: 1px solid #DDD;
          @apply --layout-justified;
          display: flex;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        div.card[disabled] {
          background-color: rgba(0, 0, 0, 0.1);
        }

        div.card > div {
          margin: 20px;
          padding-bottom: 20px;
          font-size: 12px;
        }

        ul {
          padding-inline-start: 0;
        }

        #button {
          display: none;
        }

        @media screen and (max-width: 1015px) {
          div.card {
            max-width: 700px;
          }
        }

        @media screen and (max-width: 750px) {
          div.card {
            min-width: 350px;
            width: auto;
            height: auto !important;
          }
        }

        @media screen and (max-width: 375px) {
          div.card {
            width: 350px;
          }
        }
      `]}render(){return s`
      <div class="card" id="activity" elevation="${this.elevation}" ?disabled="${this.disabled}">
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
      </div>
    `}firstUpdated(){if(this.pinned||null==this.panelId){const t=this.shadowRoot.getElementById("button");this.shadowRoot.querySelector("h4").removeChild(t)}this.autowidth?this.shadowRoot.querySelector(".card").style.width="auto":this.shadowRoot.querySelector(".card").style.width=0!==this.widthpct?this.widthpct+"%":this.width+"px",this.minwidth&&(this.shadowRoot.querySelector(".card").style.minWidth=this.minwidth+"px"),this.maxwidth&&(this.shadowRoot.querySelector(".card").style.minWidth=this.maxwidth+"px"),this.horizontalsize&&("2x"==this.horizontalsize&&(this.shadowRoot.querySelector(".card").style.width=2*this.width+32+"px"),"3x"==this.horizontalsize&&(this.shadowRoot.querySelector(".card").style.width=3*this.width+64+"px"),"4x"==this.horizontalsize&&(this.shadowRoot.querySelector(".card").style.width=4*this.width+96+"px")),this.shadowRoot.querySelector(".card").style.margin=this.marginWidth+"px",""!==this.headerColor&&(this.shadowRoot.querySelector("#header").style.backgroundColor=this.headerColor),!0===this.narrow&&(this.shadowRoot.querySelector("div.card > div").style.margin="0",this.shadowRoot.querySelector("div.card > h4").style.marginBottom="0"),this.height>0&&(this.shadowRoot.querySelector("div.card").style.height=this.height+"px"),!0===this.noheader&&(this.shadowRoot.querySelector("#header").style.display="none"),this.scrollableY&&(this.shadowRoot.querySelector(".card").style.overflowY="auto")}connectedCallback(){super.connectedCallback()}_removePanel(){}};t([e({type:String})],h.prototype,"title",void 0),t([e({type:String})],h.prototype,"message",void 0),t([e({type:String})],h.prototype,"panelId",void 0),t([e({type:String})],h.prototype,"horizontalsize",void 0),t([e({type:String})],h.prototype,"headerColor",void 0),t([e({type:Number})],h.prototype,"elevation",void 0),t([e({type:Boolean})],h.prototype,"autowidth",void 0),t([e({type:Number})],h.prototype,"width",void 0),t([e({type:Number})],h.prototype,"widthpct",void 0),t([e({type:Number})],h.prototype,"height",void 0),t([e({type:Number})],h.prototype,"marginWidth",void 0),t([e({type:Number})],h.prototype,"minwidth",void 0),t([e({type:Number})],h.prototype,"maxwidth",void 0),t([e({type:Boolean})],h.prototype,"pinned",void 0),t([e({type:Boolean})],h.prototype,"disabled",void 0),t([e({type:Boolean})],h.prototype,"narrow",void 0),t([e({type:Boolean})],h.prototype,"noheader",void 0),t([e({type:Boolean})],h.prototype,"scrollableY",void 0),h=t([i("lablup-activity-panel")],h);
