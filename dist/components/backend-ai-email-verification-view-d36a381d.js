import{B as i,b as e,I as t,a,x as o,c as l,r as s,av as n,aw as c,g as d,$ as r,t as h,_ as f,e as g,n as p}from"./backend-ai-webui-29a04808.js";let u=class extends i{constructor(){super(...arguments),this.webUIShell=Object(),this.clientConfig=Object(),this.client=Object(),this.notification=Object(),this.successDialog=Object(),this.failDialog=Object()}static get styles(){return[e,t,a,o,l,s`
        mwc-textfield {
          width: 100%;
          --mdc-text-field-fill-color: var(--general-menu-color);
          --mdc-theme-primary: var(--general-textfield-selected-color);
          --mdc-typography-font-family: var(--general-font-family);
        }
      `]}_initClient(i){this.webUIShell=document.querySelector("#webui-shell"),this.webUIShell.appBody.style.visibility="visible",this.notification=globalThis.lablupNotification,this.successDialog=this.shadowRoot.querySelector("#verification-success-dialog"),this.failDialog=this.shadowRoot.querySelector("#verification-fail-dialog"),this.clientConfig=new n("","",i,"SESSION"),this.client=new c(this.clientConfig,"Backend.AI Web UI."),this.successDialog.addEventListener("didHide",(()=>{this._redirectToLoginPage()})),this.failDialog.addEventListener("didHide",(()=>{this._redirectToLoginPage()}))}_redirectToLoginPage(){window.location.href="/"}async verify(i){const e=new URLSearchParams(window.location.search).get("verification_code");if(this._initClient(i),e)try{await this.client.cloud.verify_email(e),this.successDialog.show()}catch(i){console.error(i),this.notification.text=d("signup.VerificationError"),this.notification.show(),window.setTimeout((()=>this.failDialog.show()),100)}else this.failDialog.show()}async sendVerificationCode(){const i=this.shadowRoot.querySelector("#email");if(i.value&&i.validity.valid)try{await this.client.cloud.send_verification_email(i.value),this.notification.text=d("signup.EmailSent"),this.notification.show()}catch(i){console.error(i),this.notification.text=i.message||d("signup.SendError"),this.notification.show()}}render(){return r`
      <backend-ai-dialog id="verification-success-dialog" fixed backdrop blockscrolling persistent style="padding:0;">
        <span slot="title">${h("signup.EmailVerified")}</span>

        <div slot="content">
          <div class="horizontal layout center">
            <p style="width:256px;">${h("signup.EmailVerifiedMessage")}</p>
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
              unelevated
              fullwidth
              label="${h("login.Login")}"
              @click="${()=>this._redirectToLoginPage()}"></mwc-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="verification-fail-dialog" fixed backdrop blockscrolling persistent style="padding:0;">
        <span slot="title">${h("signup.EmailVerificationFailed")}</span>

        <div slot="content">
          <div class="horizontal layout center">
            <p style="width:256px;">${h("signup.EmailVerificationFailedMessage")}</p>
          </div>
          <div style="margin:20px;">
            <mwc-textfield id="email" label="${h("data.explorer.EnterEmailAddress")}"
                autofocus auto-validate validationMessage="${h("signup.InvalidEmail")}"
                pattern="^[A-Z0-9a-z#-_]+@.+\\..+$"
                maxLength="64" placeholder="${h("maxLength.64chars")}"></mwc-textfield>
            <div style="height:1em"></div>
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
              unelevated
              fullwidth
              label="${h("signup.SendEmail")}"
              @click="${()=>this.sendVerificationCode()}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}};f([g({type:Object})],u.prototype,"webUIShell",void 0),f([g({type:Object})],u.prototype,"clientConfig",void 0),f([g({type:Object})],u.prototype,"client",void 0),f([g({type:Object})],u.prototype,"notification",void 0),f([g({type:Object})],u.prototype,"successDialog",void 0),f([g({type:Object})],u.prototype,"failDialog",void 0),u=f([p("backend-ai-email-verification-view")],u);var v=u;export{v as default};
