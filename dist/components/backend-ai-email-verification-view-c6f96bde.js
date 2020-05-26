import{_ as i,p as t,c as e,B as o,d as a,I as l,a as s,z as n,e as c,b as r,g as d,h,t as g}from"./backend-ai-console-cb2f630c.js";let p=(()=>{let p=class extends o{constructor(){super(...arguments),this.consoleShell=Object(),this.clientConfig=Object(),this.client=Object(),this.notification=Object(),this.successDialog=Object(),this.failDialog=Object()}static get styles(){return[a,l,s,n,c,r`
        mwc-textfield {
          width: 100%;
        }
      `]}_initClient(i){this.consoleShell=document.querySelector("#console-shell"),this.consoleShell.appBody.style.visibility="visible",this.notification=globalThis.lablupNotification,this.successDialog=this.shadowRoot.querySelector("#verification-success-dialog"),this.failDialog=this.shadowRoot.querySelector("#verification-fail-dialog"),this.clientConfig=new ai.backend.ClientConfig("","",i,"SESSION"),this.client=new ai.backend.Client(this.clientConfig,"Backend.AI Console.")}_redirectToLoginPage(){window.location.href="/"}async verify(i){const t=new URLSearchParams(window.location.search).get("verification_code");if(this._initClient(i),t)try{await this.client.cloud.verify_email(t),this.successDialog.show()}catch(i){console.error(i),this.notification.text=i.message||"Verification Error",this.notification.show(),window.setTimeout(()=>this.failDialog.show(),100)}else this.failDialog.show()}async sendVerificationCode(){const i=this.shadowRoot.querySelector("#email");if(i.value&&i.validity.valid)try{const t=(await this.client.cloud.send_verification_email(i.value)).verification_email_sent?d("signup.EmailSent"):d("signup.EmailNotSent");this.notification.text=t,this.notification.show()}catch(i){console.error(i),this.notification.text=i.message||"Send error",this.notification.show()}}render(){return h`
      <wl-dialog id="verification-success-dialog" fixed backdrop blockscrolling persistent style="padding:0;">
        <wl-card class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>${g("signup.EmailVerified")}</span>
          </h3>
          <div class="horizontal layout center" style="margin:10px;">
            <p style="width:256px;">${g("signup.EmailVerifiedMessage")}</p>
          </div>
          <div class="horizontal layout center" style="margin:20px;">
            <wl-button outlined flat class="fg green mini flex" type="button"
                @click="${()=>this._redirectToLoginPage()}">
              ${g("login.Login")}
            </wl-button>
          </div>
        </wl-card>
      </wl-dialog>

      <wl-dialog id="verification-fail-dialog" fixed backdrop blockscrolling persistent style="padding:0;">
        <wl-card class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>${g("signup.EmailVerificationFailed")}</span>
          </h3>
          <div class="horizontal layout center" style="margin:10px;">
            <p style="width:256px;">${g("signup.EmailVerificationFailedMessage")}</p>
          </div>
          <div style="margin:20px;">
            <mwc-textfield id="email" label="${g("data.explorer.EnterEmailAddress")}"
                autofocus auto-validate validationMessage="${g("signup.InvalidEmail")}"
                pattern="^[A-Z0-9a-z#-_]+@.+\\..+$"></mwc-textfield>
            <div style="height:1em"></div>
            <wl-button outlined flat class="fg red mini flex" type="button"
                @click="${()=>this.sendVerificationCode()}">
              ${g("signup.SendEmail")}
            </wl-button>
          </div>
        </wl-card>
      </wl-dialog>
    `}};return i([t({type:Object})],p.prototype,"consoleShell",void 0),i([t({type:Object})],p.prototype,"clientConfig",void 0),i([t({type:Object})],p.prototype,"client",void 0),i([t({type:Object})],p.prototype,"notification",void 0),i([t({type:Object})],p.prototype,"successDialog",void 0),i([t({type:Object})],p.prototype,"failDialog",void 0),p=i([e("backend-ai-email-verification-view")],p),p})();export default p;
