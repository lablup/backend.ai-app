import{B as e,d as t,I as i,a as o,D as a,e as s,b as l,g as n,h as d,t as r,_ as c,p as h,c as p}from"./backend-ai-console-08beed35.js";let g=class extends e{constructor(){super(...arguments),this.consoleShell=Object(),this.clientConfig=Object(),this.client=Object(),this.notification=Object(),this.passwordChangeDialog=Object(),this.failDialog=Object(),this.token=""}static get styles(){return[t,i,o,a,s,l`
        mwc-textfield {
          width: 100%;
        }
      `]}_initClient(e){this.consoleShell=document.querySelector("#console-shell"),this.consoleShell.appBody.style.visibility="visible",this.notification=globalThis.lablupNotification,this.passwordChangeDialog=this.shadowRoot.querySelector("#verification-success-dialog"),this.failDialog=this.shadowRoot.querySelector("#verification-fail-dialog"),this.clientConfig=new ai.backend.ClientConfig("","",e,"SESSION"),this.client=new ai.backend.Client(this.clientConfig,"Backend.AI Console.")}_redirectToLoginPage(){window.location.href="/"}open(e){const t=new URLSearchParams(window.location.search);this.token=t.get("token")||"",this._initClient(e),this.token?this.shadowRoot.querySelector("#update-password-dialog").show():this.failDialog.show()}async _updatePassword(){const e=this.shadowRoot.querySelector("#email"),t=this.shadowRoot.querySelector("#password1"),i=this.shadowRoot.querySelector("#password2");if(e.value&&e.validity.valid&&t.value&&t.validity.valid){if(t.value!==i.value)return this.notification.text=n("console.menu.PasswordMismatch"),void this.notification.show();try{await this.client.cloud.change_password(e.value,t.value,this.token),this.notification.text=n("login.PasswordChanged"),this.notification.show(),setTimeout(()=>{this._redirectToLoginPage()},2e3)}catch(e){console.error(e),this.notification.text=e.message||"Update error",this.notification.show(),this.failDialog.show()}}}render(){return d`
      <wl-dialog id="update-password-dialog" fixed backdrop blockscrolling persistent style="padding:0;">
        <wl-card class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>${r("console.menu.ChangePassword")}</span>
          </h3>
          <div class="horizontal layout center" style="margin:10px;">
            <p style="width:350px;">${r("login.UpdatePasswordMessage")}</p>
          </div>
          <div style="margin:20px;">
            <mwc-textfield id="email" label="${r("data.explorer.EnterEmailAddress")}"
                autofocus auto-validate validationMessage="${r("signup.InvalidEmail")}"
                pattern="^[A-Z0-9a-z#-_]+@.+\\..+$">
            </mwc-textfield>
            <mwc-textfield id="password1" label="${r("console.menu.NewPassword")}" type="password"
                auto-validate validationMessage="${r("console.menu.InvalidPasswordMessage")}"
                pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
                min-length="8">
            </mwc-textfield>
            <mwc-textfield id="password2" label="${r("console.menu.NewPasswordAgain")}" type="password"
                auto-validate validationMessage="${r("console.menu.InvalidPasswordMessage")}"
                pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
                min-length="8">
            </mwc-textfield>
            <div style="height:1em"></div>
            <wl-button outlined flat class="fg red mini flex" type="button"
                @click="${()=>this._updatePassword()}">
              ${r("console.menu.Update")}
            </wl-button>
          </div>
        </wl-card>
      </wl-dialog>

      <wl-dialog id="verification-fail-dialog" fixed backdrop blockscrolling persistent style="padding:0;">
        <wl-card class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>${r("login.InvalidChangePasswordToken")}</span>
          </h3>
          <div class="horizontal layout center" style="margin:10px;">
            <p style="width:350;">${r("login.InvalidChangePasswordTokenMessage")}</p>
          </div>
          <div style="margin:20px;">
            <div style="height:1em"></div>
            <wl-button outlined flat class="fg mini flex red" type="button"
                @click="${()=>this._redirectToLoginPage()}">
              ${r("button.Close")}
            </wl-button>
          </div>
        </wl-card>
      </wl-dialog>
    `}};c([h({type:Object})],g.prototype,"consoleShell",void 0),c([h({type:Object})],g.prototype,"clientConfig",void 0),c([h({type:Object})],g.prototype,"client",void 0),c([h({type:Object})],g.prototype,"notification",void 0),c([h({type:Object})],g.prototype,"passwordChangeDialog",void 0),c([h({type:Object})],g.prototype,"failDialog",void 0),c([h({type:String})],g.prototype,"token",void 0),g=c([p("backend-ai-change-forgot-password-view")],g);var w=g;export default w;
