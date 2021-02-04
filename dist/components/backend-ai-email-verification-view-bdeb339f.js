import{B as i,d as e,I as t,a as o,n as a,e as s,b as l,g as n,h as c,t as d,_ as r,p as h,c as f}from"./backend-ai-console-bf343de1.js";let g=class extends i{constructor(){super(...arguments),this.consoleShell=Object(),this.clientConfig=Object(),this.client=Object(),this.notification=Object(),this.successDialog=Object(),this.failDialog=Object()}static get styles(){return[e,t,o,a,s,l`
        mwc-textfield {
          width: 100%;
          --mdc-text-field-fill-color: var(--general-menu-color);
          --mdc-theme-primary: var(--general-textfield-selected-color);
          --mdc-typography-font-family: var(--general-font-family);
        }
      `]}_initClient(i){this.consoleShell=document.querySelector("#console-shell"),this.consoleShell.appBody.style.visibility="visible",this.notification=globalThis.lablupNotification,this.successDialog=this.shadowRoot.querySelector("#verification-success-dialog"),this.failDialog=this.shadowRoot.querySelector("#verification-fail-dialog"),this.clientConfig=new ai.backend.ClientConfig("","",i,"SESSION"),this.client=new ai.backend.Client(this.clientConfig,"Backend.AI Console."),this.successDialog.addEventListener("didHide",(()=>{this._redirectToLoginPage()})),this.failDialog.addEventListener("didHide",(()=>{this._redirectToLoginPage()}))}_redirectToLoginPage(){window.location.href="/"}async verify(i){const e=new URLSearchParams(window.location.search).get("verification_code");if(this._initClient(i),e)try{await this.client.cloud.verify_email(e),this.successDialog.show()}catch(i){console.error(i),this.notification.text=n("signup.VerificationError"),this.notification.show(),window.setTimeout((()=>this.failDialog.show()),100)}else this.failDialog.show()}async sendVerificationCode(){const i=this.shadowRoot.querySelector("#email");if(i.value&&i.validity.valid)try{await this.client.cloud.send_verification_email(i.value),this.notification.text=n("signup.EmailSent"),this.notification.show()}catch(i){console.error(i),this.notification.text=i.message||n("signup.SendError"),this.notification.show()}}render(){return c`
      <backend-ai-dialog id="verification-success-dialog" fixed backdrop blockscrolling persistent style="padding:0;">
        <span slot="title">${d("signup.EmailVerified")}</span>

        <div slot="content">
          <div class="horizontal layout center">
            <p style="width:256px;">${d("signup.EmailVerifiedMessage")}</p>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              unelevated
              label="${d("login.Login")}"
              @click="${()=>this._redirectToLoginPage()}"></mwc-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="verification-fail-dialog" fixed backdrop blockscrolling persistent style="padding:0;">
        <span slot="title">${d("signup.EmailVerificationFailed")}</span>

        <div slot="content">
          <div class="horizontal layout center">
            <p style="width:256px;">${d("signup.EmailVerificationFailedMessage")}</p>
          </div>
          <div style="margin:20px;">
            <mwc-textfield id="email" label="${d("data.explorer.EnterEmailAddress")}"
                autofocus auto-validate validationMessage="${d("signup.InvalidEmail")}"
                pattern="^[A-Z0-9a-z#-_]+@.+\\..+$"
                maxLength="64" placeholder="${d("maxLength.64chars")}"></mwc-textfield>
            <div style="height:1em"></div>
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
              unelevated
              label="${d("signup.SendEmail")}"
              @click="${()=>this.sendVerificationCode()}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}};r([h({type:Object})],g.prototype,"consoleShell",void 0),r([h({type:Object})],g.prototype,"clientConfig",void 0),r([h({type:Object})],g.prototype,"client",void 0),r([h({type:Object})],g.prototype,"notification",void 0),r([h({type:Object})],g.prototype,"successDialog",void 0),r([h({type:Object})],g.prototype,"failDialog",void 0),g=r([f("backend-ai-email-verification-view")],g);var p=g;export default p;
