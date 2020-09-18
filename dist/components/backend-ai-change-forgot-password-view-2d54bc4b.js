import{B as t,d as e,I as i,a as o,x as a,e as s,b as l,g as n,h as d,t as c,_ as r,p as h,c as p}from"./backend-ai-console-e6c7b7b2.js";let g=class extends t{constructor(){super(...arguments),this.consoleShell=Object(),this.clientConfig=Object(),this.client=Object(),this.notification=Object(),this.passwordChangeDialog=Object(),this.failDialog=Object(),this.token=""}static get styles(){return[e,i,o,a,s,l`
        mwc-textfield {
          width: 100%;
        }
      `]}_initClient(t){this.consoleShell=document.querySelector("#console-shell"),this.consoleShell.appBody.style.visibility="visible",this.notification=globalThis.lablupNotification,this.passwordChangeDialog=this.shadowRoot.querySelector("#verification-success-dialog"),this.failDialog=this.shadowRoot.querySelector("#verification-fail-dialog"),this.clientConfig=new ai.backend.ClientConfig("","",t,"SESSION"),this.client=new ai.backend.Client(this.clientConfig,"Backend.AI Console.")}_redirectToLoginPage(){window.location.href="/"}open(t){const e=new URLSearchParams(window.location.search);this.token=e.get("token")||"",this._initClient(t),this.token?this.shadowRoot.querySelector("#update-password-dialog").show():this.failDialog.show()}async _updatePassword(){const t=this.shadowRoot.querySelector("#email"),e=this.shadowRoot.querySelector("#password1"),i=this.shadowRoot.querySelector("#password2");if(t.value&&t.validity.valid&&e.value&&e.validity.valid){if(e.value!==i.value)return this.notification.text=n("console.menu.PasswordMismatch"),void this.notification.show();try{await this.client.cloud.change_password(t.value,e.value,this.token),this.notification.text=n("login.PasswordChanged"),this.notification.show(),setTimeout(()=>{this._redirectToLoginPage()},2e3)}catch(t){console.error(t),this.notification.text=t.message||"Update error",this.notification.show(),this.failDialog.show()}}}render(){return d`
      <backend-ai-dialog id="update-password-dialog" fixed backdrop blockscrolling persistent style="padding:0;">
        <span slot="title">${c("console.menu.ChangePassword")}</span>

        <div slot="content" class="login-panel intro centered">
          <div class="horizontal layout center" style="margin:10px;">
            <p style="width:350px;">${c("login.UpdatePasswordMessage")}</p>
          </div>
          <div style="margin:20px;">
            <mwc-textfield id="email" label="${c("data.explorer.EnterEmailAddress")}"
                autofocus auto-validate validationMessage="${c("signup.InvalidEmail")}"
                pattern="^[A-Z0-9a-z#-_]+@.+\\..+$">
            </mwc-textfield>
            <mwc-textfield id="password1" label="${c("console.menu.NewPassword")}" type="password"
                auto-validate validationMessage="${c("console.menu.InvalidPasswordMessage")}"
                pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
                min-length="8">
            </mwc-textfield>
            <mwc-textfield id="password2" label="${c("console.menu.NewPasswordAgain")}" type="password"
                auto-validate validationMessage="${c("console.menu.InvalidPasswordMessage")}"
                pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
                min-length="8">
            </mwc-textfield>
            <div style="height:1em"></div>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <wl-button outlined flat class="fg red mini flex" type="button"
              @click="${()=>this._updatePassword()}">
            ${c("console.menu.Update")}
          </wl-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="verification-fail-dialog" fixed backdrop blockscrolling persistent style="padding:0;">
        <span slot="title">${c("login.InvalidChangePasswordToken")}</span>

        <div slot="content" class="login-panel intro centered">
          <h3 class="horizontal center layout">
            <span>${c("login.InvalidChangePasswordToken")}</span>
          </h3>
          <div class="horizontal layout center" style="margin:10px;">
            <p style="width:350;">${c("login.InvalidChangePasswordTokenMessage")}</p>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <wl-button outlined flat class="fg mini flex red" type="button"
              @click="${()=>this._redirectToLoginPage()}">
            ${c("button.Close")}
          </wl-button>
        </div>
      </backend-ai-dialog>
    `}};r([h({type:Object})],g.prototype,"consoleShell",void 0),r([h({type:Object})],g.prototype,"clientConfig",void 0),r([h({type:Object})],g.prototype,"client",void 0),r([h({type:Object})],g.prototype,"notification",void 0),r([h({type:Object})],g.prototype,"passwordChangeDialog",void 0),r([h({type:Object})],g.prototype,"failDialog",void 0),r([h({type:String})],g.prototype,"token",void 0),g=r([p("backend-ai-change-forgot-password-view")],g);var w=g;export default w;
