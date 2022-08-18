import{B as e,b as t,I as i,a,x as o,c as s,r as n,av as l,aw as d,g as r,$ as c,t as h,_ as g,e as p,n as w}from"./backend-ai-webui-29a04808.js";let u=class extends e{constructor(){super(...arguments),this.webUIShell=Object(),this.clientConfig=Object(),this.client=Object(),this.notification=Object(),this.passwordChangeDialog=Object(),this.failDialog=Object(),this.token=""}static get styles(){return[t,i,a,o,s,n`
        mwc-textfield {
          width: 100%;
        }

        mwc-button, mwc-button[unelevated] {
          margin: auto 10px;
          background-image: none;
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-theme-on-primary: var(--general-button-color);
        }
      `]}_initClient(e){this.webUIShell=document.querySelector("#webui-shell"),this.webUIShell.appBody.style.visibility="visible",this.notification=globalThis.lablupNotification,this.passwordChangeDialog=this.shadowRoot.querySelector("#update-password-dialog"),this.failDialog=this.shadowRoot.querySelector("#verification-fail-dialog"),this.clientConfig=new l("","",e,"SESSION"),this.client=new d(this.clientConfig,"Backend.AI Web UI."),this.passwordChangeDialog.addEventListener("didHide",(()=>{this._redirectToLoginPage()})),this.failDialog.addEventListener("didHide",(()=>{this._redirectToLoginPage()}))}_redirectToLoginPage(){window.location.href="/"}open(e){const t=new URLSearchParams(window.location.search);this.token=t.get("token")||"",this._initClient(e),this.token?this.shadowRoot.querySelector("#update-password-dialog").show():this.failDialog.show()}async _updatePassword(){const e=this.shadowRoot.querySelector("#email"),t=this.shadowRoot.querySelector("#password1"),i=this.shadowRoot.querySelector("#password2");if(e.value&&e.validity.valid&&t.value&&t.validity.valid){if(t.value!==i.value)return this.notification.text=r("webui.menu.PasswordMismatch"),void this.notification.show();try{await this.client.cloud.change_password(e.value,t.value,this.token),this.notification.text=r("login.PasswordChanged"),this.notification.show(),setTimeout((()=>{this._redirectToLoginPage()}),2e3)}catch(e){console.error(e),this.notification.text=e.message||r("error.UpdateError"),this.notification.show(),this.failDialog.show()}}}render(){return c`
      <backend-ai-dialog id="update-password-dialog" fixed backdrop blockscrolling persistent style="padding:0;">
        <span slot="title">${h("webui.menu.ChangePassword")}</span>

        <div slot="content" class="login-panel intro centered">
          <div class="horizontal layout center" style="margin:10px;">
            <p style="width:350px;">${h("login.UpdatePasswordMessage")}</p>
          </div>
          <div style="margin:20px;">
            <mwc-textfield id="email" label="${h("data.explorer.EnterEmailAddress")}"
                autofocus auto-validate validationMessage="${h("signup.InvalidEmail")}"
                pattern="^[A-Z0-9a-z#-_]+@.+\\..+$" maxLength="64"
                placeholder="${h("maxLength.64chars")}">
            </mwc-textfield>
            <mwc-textfield id="password1" label="${h("webui.menu.NewPassword")}" type="password"
                auto-validate validationMessage="${h("webui.menu.InvalidPasswordMessage")}"
                pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$" maxLength="64">
            </mwc-textfield>
            <mwc-textfield id="password2" label="${h("webui.menu.NewPasswordAgain")}" type="password"
                auto-validate validationMessage="${h("webui.menu.InvalidPasswordMessage")}"
                pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$" maxLength="64">
            </mwc-textfield>
            <div style="height:1em"></div>
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
              unelevated
              fullwidth
              label="${h("webui.menu.Update")}"
              @click="${()=>this._updatePassword()}"></mwc-button>
        </div>
      </backend-ai-dialog>

      <backend-ai-dialog id="verification-fail-dialog" fixed backdrop blockscrolling persistent style="padding:0;">
        <span slot="title">${h("login.InvalidChangePasswordToken")}</span>

        <div slot="content" class="login-panel intro centered">
          <h3 class="horizontal center layout">
            <span>${h("login.InvalidChangePasswordToken")}</span>
          </h3>
          <div class="horizontal layout center" style="margin:10px;">
            <p style="width:350px;">${h("login.InvalidChangePasswordTokenMessage")}</p>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              unelevated
              label="${h("button.Close")}"
              @click="${()=>this._redirectToLoginPage()}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}};g([p({type:Object})],u.prototype,"webUIShell",void 0),g([p({type:Object})],u.prototype,"clientConfig",void 0),g([p({type:Object})],u.prototype,"client",void 0),g([p({type:Object})],u.prototype,"notification",void 0),g([p({type:Object})],u.prototype,"passwordChangeDialog",void 0),g([p({type:Object})],u.prototype,"failDialog",void 0),g([p({type:String})],u.prototype,"token",void 0),u=g([w("backend-ai-change-forgot-password-view")],u);var v=u;export{v as default};
