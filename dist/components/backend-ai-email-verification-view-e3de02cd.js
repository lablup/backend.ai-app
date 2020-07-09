import{B as i,d as t,I as e,a as o,x as a,e as s,b as l,g as n,h as c,t as d,_ as r,p as f,c as h}from"./backend-ai-console-a3572160.js";let g=class extends i{constructor(){super(...arguments),this.consoleShell=Object(),this.clientConfig=Object(),this.client=Object(),this.notification=Object(),this.successDialog=Object(),this.failDialog=Object()}static get styles(){return[t,e,o,a,s,l`
        mwc-textfield {
          width: 100%;
        }
      `]}_initClient(i){this.consoleShell=document.querySelector("#console-shell"),this.consoleShell.appBody.style.visibility="visible",this.notification=globalThis.lablupNotification,this.successDialog=this.shadowRoot.querySelector("#verification-success-dialog"),this.failDialog=this.shadowRoot.querySelector("#verification-fail-dialog"),this.clientConfig=new ai.backend.ClientConfig("","",i,"SESSION"),this.client=new ai.backend.Client(this.clientConfig,"Backend.AI Console.")}_redirectToLoginPage(){window.location.href="/"}async verify(i){const t=new URLSearchParams(window.location.search).get("verification_code");if(this._initClient(i),t)try{await this.client.cloud.verify_email(t),this.successDialog.show()}catch(i){console.error(i),this.notification.text=i.message||"Verification Error",this.notification.show(),window.setTimeout(()=>this.failDialog.show(),100)}else this.failDialog.show()}async sendVerificationCode(){const i=this.shadowRoot.querySelector("#email");if(i.value&&i.validity.valid)try{await this.client.cloud.send_verification_email(i.value),this.notification.text=n("signup.EmailSent"),this.notification.show()}catch(i){console.error(i),this.notification.text=i.message||"Send error",this.notification.show()}}render(){return c`
      <backend-ai-dialog id="verification-success-dialog" fixed backdrop blockscrolling persistent style="padding:0;">
        <span slot="title">${d("signup.EmailVerified")}</span>

        <div slot="content">
          <div class="horizontal layout center">
            <p style="width:256px;">${d("signup.EmailVerifiedMessage")}</p>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <wl-button outlined flat class="fg green mini flex" type="button"
              @click="${()=>this._redirectToLoginPage()}">
            ${d("login.Login")}
          </wl-button>
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
                pattern="^[A-Z0-9a-z#-_]+@.+\\..+$"></mwc-textfield>
            <div style="height:1em"></div>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <wl-button outlined flat class="fg red mini flex" type="button"
              @click="${()=>this.sendVerificationCode()}">
            ${d("signup.SendEmail")}
          </wl-button>
        </div>
      </backend-ai-dialog>
    `}};r([f({type:Object})],g.prototype,"consoleShell",void 0),r([f({type:Object})],g.prototype,"clientConfig",void 0),r([f({type:Object})],g.prototype,"client",void 0),r([f({type:Object})],g.prototype,"notification",void 0),r([f({type:Object})],g.prototype,"successDialog",void 0),r([f({type:Object})],g.prototype,"failDialog",void 0),g=r([h("backend-ai-email-verification-view")],g);var p=g;export default p;
