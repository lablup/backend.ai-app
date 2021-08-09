import{B as e,d as t,I as i,a,n as o,e as s,b as n,g as l,h as d,t as r,_ as c,p as h,c as g}from"./backend-ai-webui-ecfefd57.js";let p=class extends e{constructor(){super(...arguments),this.webUIShell=Object(),this.clientConfig=Object(),this.client=Object(),this.notification=Object(),this.passwordChangeDialog=Object(),this.failDialog=Object(),this.token=""}static get styles(){return[t,i,a,o,s,n`
        mwc-textfield {
          width: 100%;
        }

        mwc-button, mwc-button[unelevated] {
          margin: auto 10px;
          background-image: none;
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-on-theme-primary: var(--general-button-background-color);
        }
      `]}_initClient(e){this.webUIShell=document.querySelector("#webui-shell"),this.webUIShell.appBody.style.visibility="visible",this.notification=globalThis.lablupNotification,this.passwordChangeDialog=this.shadowRoot.querySelector("#update-password-dialog"),this.failDialog=this.shadowRoot.querySelector("#verification-fail-dialog"),this.clientConfig=new ai.backend.ClientConfig("","",e,"SESSION"),this.client=new ai.backend.Client(this.clientConfig,"Backend.AI Web UI."),this.passwordChangeDialog.addEventListener("didHide",(()=>{this._redirectToLoginPage()})),this.failDialog.addEventListener("didHide",(()=>{this._redirectToLoginPage()}))}_redirectToLoginPage(){window.location.href="/"}open(e){const t=new URLSearchParams(window.location.search);this.token=t.get("token")||"",this._initClient(e),this.token?this.shadowRoot.querySelector("#update-password-dialog").show():this.failDialog.show()}async _updatePassword(){const e=this.shadowRoot.querySelector("#email"),t=this.shadowRoot.querySelector("#password1"),i=this.shadowRoot.querySelector("#password2");if(e.value&&e.validity.valid&&t.value&&t.validity.valid){if(t.value!==i.value)return this.notification.text=l("webui.menu.PasswordMismatch"),void this.notification.show();try{await this.client.cloud.change_password(e.value,t.value,this.token),this.notification.text=l("login.PasswordChanged"),this.notification.show(),setTimeout((()=>{this._redirectToLoginPage()}),2e3)}catch(e){console.error(e),this.notification.text=e.message||l("error.UpdateError"),this.notification.show(),this.failDialog.show()}}}render(){return d`
      <backend-ai-dialog id="update-password-dialog" fixed backdrop blockscrolling persistent style="padding:0;">
        <span slot="title">${r("webui.menu.ChangePassword")}</span>

        <div slot="content" class="login-panel intro centered">
          <div class="horizontal layout center" style="margin:10px;">
            <p style="width:350px;">${r("login.UpdatePasswordMessage")}</p>
          </div>
          <div style="margin:20px;">
            <mwc-textfield id="email" label="${r("data.explorer.EnterEmailAddress")}"
                autofocus auto-validate validationMessage="${r("signup.InvalidEmail")}"
                pattern="^[A-Z0-9a-z#-_]+@.+\\..+$" maxLength="64"
                placeholder="${r("maxLength.64chars")}">
            </mwc-textfield>
            <mwc-textfield id="password1" label="${r("webui.menu.NewPassword")}" type="password"
                auto-validate validationMessage="${r("webui.menu.InvalidPasswordMessage")}"
                pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$" maxLength="64">
            </mwc-textfield>
            <mwc-textfield id="password2" label="${r("webui.menu.NewPasswordAgain")}" type="password"
                auto-validate validationMessage="${r("webui.menu.InvalidPasswordMessage")}"
                pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$" maxLength="64">
            </mwc-textfield>
            <div style="height:1em"></div>
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
              unelevated
              fullwidth
              label="${r("webui.menu.Update")}"
              @click="${()=>this._updatePassword()}"></mwc-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="verification-fail-dialog" fixed backdrop blockscrolling persistent style="padding:0;">
        <span slot="title">${r("login.InvalidChangePasswordToken")}</span>

        <div slot="content" class="login-panel intro centered">
          <h3 class="horizontal center layout">
            <span>${r("login.InvalidChangePasswordToken")}</span>
          </h3>
          <div class="horizontal layout center" style="margin:10px;">
            <p style="width:350px;">${r("login.InvalidChangePasswordTokenMessage")}</p>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              unelevated
              label="${r("button.Close")}"
              @click="${()=>this._redirectToLoginPage()}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}};c([h({type:Object})],p.prototype,"webUIShell",void 0),c([h({type:Object})],p.prototype,"clientConfig",void 0),c([h({type:Object})],p.prototype,"client",void 0),c([h({type:Object})],p.prototype,"notification",void 0),c([h({type:Object})],p.prototype,"passwordChangeDialog",void 0),c([h({type:Object})],p.prototype,"failDialog",void 0),c([h({type:String})],p.prototype,"token",void 0),p=c([g("backend-ai-change-forgot-password-view")],p);var w=p;export default w;
