import{B as i,b as t,I as e,a as o,x as n,c as s,r as a,ax as c,ay as l,g as r,d as h,$ as d,_ as u,e as p,n as g}from"./backend-ai-webui-56356ffe.js";let f=class extends i{constructor(){super(...arguments),this.webUIShell=Object(),this.clientConfig=Object(),this.client=Object(),this.notification=Object()}static get styles(){return[t,e,o,n,s,a`
      `]}firstUpdated(){this.notification=globalThis.lablupNotification}async launch(i){await this._initClient(i);await this._token_login()&&await this._createEduSession()}detectIE(){try{return!!!!document.documentMode||(navigator.userAgent.indexOf("MSIE")>0||navigator.userAgent.indexOf("WOW")>0||navigator.userAgent.indexOf(".NET")>0)}catch(i){const t=i.toString();return console.log(t),!1}}async _initClient(i){this.notification=globalThis.lablupNotification;const t=document.querySelector("#webui-shell");if(""===i){const t=localStorage.getItem("backendaiwebui.api_endpoint");null!=t&&(i=t.replace(/^"+|"+$/g,""))}i=i.trim(),this.clientConfig=new c("","",i,"SESSION"),globalThis.backendaiclient=new l(this.clientConfig,"Backend.AI Web UI.");await t._parseConfig("../../config.toml"),globalThis.backendaiclient._config._proxyURL=t.config.wsproxy.proxyURL,await globalThis.backendaiclient.get_manager_version(),globalThis.backendaiclient.ready=!0}async _token_login(){const i=window.location.search,t=new URLSearchParams(i).get("sToken")||null;null!==t&&(document.cookie=`sToken=${t}; expires=Session; path=/`);try{if(await globalThis.backendaiclient.check_login())console.log("already logged-in session");else{console.log("logging with (cookie) token...");if(!await globalThis.backendaiclient.token_login())return this.notification.text=r("eduapi.CannotAuthorizeSessionByToken"),this.notification.show(!0),!1}return!0}catch(i){return this.notification.text=r("eduapi.CannotAuthorizeSessionByToken"),this.notification.show(!0,i),!1}}generateSessionId(){let i="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let e=0;e<8;e++)i+=t.charAt(Math.floor(Math.random()*t.length));return i+"-session"}async _createEduSession(){const i=this.shadowRoot.querySelector("#app-launcher");i.indicator=await globalThis.lablupIndicator.start();const t=["session_id","name","access_key","status","status_info","service_ports","mounts"];let e;e=globalThis.backendaiclient.supports("avoid-hol-blocking")?["RUNNING","RESTARTING","TERMINATING","PENDING","SCHEDULED","PREPARING","PULLING"].join(","):["RUNNING","RESTARTING","TERMINATING","PENDING","PREPARING","PULLING"].join(",");const o=globalThis.backendaiclient._config.accessKey;let n;try{i.indicator.set(20,r("eduapi.QueryingExisitingComputeSession")),n=await globalThis.backendaiclient.computeSession.list(t,e,o,30,0)}catch(i){return console.error(i),void(i&&i.message?(i.description?this.notification.text=h.relieve(i.description):this.notification.text=h.relieve(i.message),this.notification.detail=i.message,this.notification.show(!0,i)):i&&i.title&&(this.notification.text=h.relieve(i.title),this.notification.show(!0,i)))}const s=window.location.search;let a,c=new URLSearchParams(s).get("app")||"jupyter",l=!0;if(n.compute_session_list.total_count>0){console.log("Reusing an existing session ...");const t=n.compute_session_list.items[0].status;if("RUNNING"!==t)return this.notification.text=r("eduapi.sessionStatusIs")+` ${t}. `+r("eduapi.PleaseReload"),void this.notification.show(!0);let e=null;for(let i=0;i<n.compute_session_list.items.length;i++){const t=n.compute_session_list.items[i];if(JSON.parse(t.service_ports||"{}").map((i=>i.name)).includes(c)){e=t;break}}e?(l=!1,a="session_id"in e?e.session_id:null,i.indicator.set(50,r("eduapi.FoundExistingComputeSession"))):l=!0,a=null!==e&&"session_id"in e?e.session_id:null}if(l){let t;console.log("Creating a new session ..."),i.indicator.set(40,r("eduapi.FindingSessionTemplate"));try{t=await globalThis.backendaiclient.sessionTemplate.list(!1)}catch(i){return console.error(i),void(i&&i.message?(i.description?this.notification.text=h.relieve(i.description):this.notification.text=h.relieve(i.message),this.notification.detail=i.message,this.notification.show(!0,i)):i&&i.title&&(this.notification.text=h.relieve(i.title),this.notification.show(!0,i)))}if(t=t.filter((i=>i.name===c)),t.length<1)return this.notification.text=r("eduapi.NoSessionTemplate"),void this.notification.show(!0);const e=t[0].id;try{const t=await globalThis.backendaiclient.eduApp.get_mount_folders(),o=t?{mounts:t}:{};let n;try{i.indicator.set(60,r("eduapi.CreatingComputeSession")),n=await globalThis.backendaiclient.createSessionFromTemplate(e,null,null,o,2e4)}catch(i){return console.error(i),void(i&&i.message?(i.description?this.notification.text=h.relieve(i.description):this.notification.text=h.relieve(i.message),this.notification.detail=i.message,this.notification.show(!0,i)):i&&i.title&&(this.notification.text=h.relieve(i.title),this.notification.show(!0,i)))}a=n.sessionId}catch(i){console.error(i),i&&i.message?("statusCode"in i&&408===i.statusCode?this.notification.text=r("eduapi.SessionStillPreparing"):i.description?this.notification.text=h.relieve(i.description):this.notification.text=h.relieve(i.message),this.notification.detail=i.message,this.notification.show(!0,i)):i&&i.title&&(this.notification.text=h.relieve(i.title),this.notification.show(!0,i))}}i.indicator.set(100,r("eduapi.ComputeSessionPrepared")),a&&(c.startsWith("jupyter")&&!this.detectIE()&&(c="jupyterlab"),this._openServiceApp(a,c))}async _openServiceApp(i,t){const e=this.shadowRoot.querySelector("#app-launcher");e.indicator=await globalThis.lablupIndicator.start(),console.log(`launching ${t} from session ${i} ...`),e._open_wsproxy(i,t,null,null).then((async i=>{i.url&&(await e._connectToProxyWorker(i.url,""),e.indicator.set(100,r("session.applauncher.Prepared")),setTimeout((()=>{globalThis.open(i.url,"_self")})))}))}render(){return d`
      <backend-ai-app-launcher id="app-launcher"></backend-ai-app-launcher>
    `}};u([p({type:Object})],f.prototype,"webUIShell",void 0),u([p({type:Object})],f.prototype,"clientConfig",void 0),u([p({type:Object})],f.prototype,"client",void 0),u([p({type:Object})],f.prototype,"notification",void 0),f=u([g("backend-ai-edu-applauncher")],f);var b=f;export{b as default};