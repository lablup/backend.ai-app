import{B as t,d as e,I as o,a as i,e as a,b as n,g as s,f as r,h as c,t as l,_ as d,p as h,c as p}from"./backend-ai-console-16d8a197.js";import"./mwc-textarea-f19d6f97.js";import"./lablup-activity-panel-fcae250b.js";import"./backend-ai-chart-19c1b90d.js";import"./backend-ai-session-launcher-f88c1a48.js";import"./chart-js-f273b5e4.js";import"./lablup-progress-bar-dcfab00d.js";import"./mwc-switch-5620be11.js";import"./input-behavior-d70aa19d.js";import"./translate-unsafe-html-f4285a45.js";import"./unsafe-html-18691aa4.js";import"./expansion-1d902be4.js";import"./radio-behavior-b124dfc6.js";import"./mwc-slider-6ed66870.js";import"./textfield-9defe948.js";
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */let u=class extends t{constructor(){super(),this.condition="running",this.authenticated=!1,this.spinner=Object(),this.indicator=Object(),this.notification=Object(),this.sessionLauncher=Object(),this.requestURL="",this.queryString="",this.environment="python",this.importMessage=""}static get styles(){return[e,o,i,a,n`
        div.description {
          font-size: 14px;
          color: var(--general-sidebar-color);
        }

        #session-launcher {
          --component-width: 235px;
        }

        mwc-textfield, mwc-textarea {
          --mdc-theme-primary: var(--general-textfield-selected-color);
          width: 100%;
          margin: 10px auto;
        }

        mwc-textfield#notebook-url,
        mwc-textfield#github-repo-url {
          width: 75%;
        }

        mwc-button {
          background-image: none;
          --mdc-theme-primary: #38bd73 !important;
        }

        @media screen and (max-width: 1015px) {
          mwc-textfield#notebook-url,
          mwc-textfield#github-repo-url {
            width: 85%;
            margin: 10px 0px;
          }
          mwc-button {
            width: 36px;
          }
          mwc-button > span {
            display: none;
          }
        }
      `]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.sessionLauncher=this.shadowRoot.querySelector("#session-launcher"),this.indicator=globalThis.lablupIndicator,this.notification=globalThis.lablupNotification}async _viewStateChanged(t){if(await this.updateComplete,!1===t)return void this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active");this.shadowRoot.querySelector("#resource-monitor").setAttribute("active","true"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.authenticated=!0,this.activeConnected&&this.requestUpdate()}),!0):(this.authenticated=!0,this.requestUpdate()),this.requestURL=globalThis.currentPageParams.requestURL;let e=globalThis.currentPageParams.queryString;if(e=e.substring(e.indexOf("?")+1),this.queryString=e,this.importMessage=this.queryString,this.environment=this.guessEnvironment(this.queryString),""!==e){let t="https://raw.githubusercontent.com/"+this.queryString;t=t.replace("/blob/","/"),this.fetchNotebookURLResource(t)}}getNotebookFromURL(){let t=this.shadowRoot.querySelector("#notebook-url").value;""!==t&&(this.queryString=this.regularizeGithubURL(t),this.fetchNotebookURLResource(this.queryString))}regularizeGithubURL(t){return t=(t=t.replace("/blob/","/")).replace("github.com","raw.githubusercontent.com")}fetchNotebookURLResource(t){this.shadowRoot.querySelector("#notebook-url").value=t,void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._fetchNotebookURLResource(t)}),!0):this._fetchNotebookURLResource(t)}_fetchNotebookURLResource(t){fetch(t).then((e=>{this.notification.text=s("import.ReadyToImport"),this.importMessage=this.notification.text,this.notification.show(),this.sessionLauncher.selectDefaultLanguage(!0,this.environment),this.sessionLauncher.importScript="#!/bin/sh\ncurl -O "+t,this.sessionLauncher.importFilename=t.split("/").pop(),this.sessionLauncher._launchSessionDialog()})).catch((t=>{this.notification.text=s("import.NoSuitableResourceFoundOnGivenURL"),this.importMessage=this.notification.text,this.notification.show()}))}getGitHubRepoFromURL(){let t=this.shadowRoot.querySelector("#github-repo-url").value,e="master",o="";if(".git"===t.substring(t.length-4,t.length)&&(t=t.split(".git")[0]),t.includes("/tree")){let i=(/\/tree\/[.a-zA-Z.0-9_-]+/.exec(t)||[""])[0],a=(/\/[.a-zA-Z0-9_-]+\/tree\//.exec(t)||[""])[0];t=t.replace(i,""),e=i.replace("/tree/",""),o=a.replace("/tree/","").substring(1)}else o=t.split("/").slice(-1)[0];t=t.replace("https://github.com","https://codeload.github.com"),t=t+"/zip/"+e;let i=(/^https?(?=:\/\/)/.exec(t)||[""])[0];return["http","https"].includes(i)?this.importRepoFromURL(t,o):(this.notification.text=s("import.WrongURLType"),this.importMessage=this.notification.text,this.notification.show(),!1)}async importRepoFromURL(t,e){let o={cpu:1,mem:"0.5g"};o.domain=globalThis.backendaiclient._config.domainName,o.group_name=globalThis.backendaiclient.current_group;let i=await this.indicator.start("indeterminate");return i.set(10,s("import.Preparing")),e=await this._checkFolderNameAlreadyExists(e),await this._addFolderWithName(e),i.set(20,s("import.FolderCreated")),o.mounts=[e],o.bootstrap_script="#!/bin/sh\ncurl -o repo.zip "+t+"\ncd /home/work/"+e+"\nunzip -u /home/work/repo.zip",globalThis.backendaiclient.get_resource_slots().then((t=>(i.set(50,s("import.Downloading")),globalThis.backendaiclient.createIfNotExists(globalThis.backendaiclient._config.default_import_environment,null,o,6e4)))).then((async t=>{i.set(80,s("import.CleanUpImportTask")),await globalThis.backendaiclient.destroy(t.sessionId),i.set(100,s("import.ImportFinished")),i.end(1e3)})).catch((t=>{this.notification.text=r.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t),i.end(1e3)}))}async _addFolderWithName(t){let e=(await globalThis.backendaiclient.vfolder.list_hosts()).default;return t=await this._checkFolderNameAlreadyExists(t),globalThis.backendaiclient.vfolder.create(t,e,"","general","rw").then((e=>{this.importMessage=s("import.FolderName")+t})).catch((t=>{console.log(t),t&&t.message&&(this.notification.text=r.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))}))}async _checkFolderNameAlreadyExists(t){let e=(await globalThis.backendaiclient.vfolder.list()).map((function(t){return t.name}));if(e.includes(t)){this.notification.text=s("import.FolderAlreadyExists"),this.importMessage=this.notification.text,this.notification.show();let o=1,i=t;for(;e.includes(i);)i=t+"_"+o,o++;t=i}return t}guessEnvironment(t){return t.includes("tensorflow")||t.includes("keras")||t.includes("Keras")?"index.docker.io/lablup/python-tensorflow":t.includes("pytorch")?"index.docker.io/lablup/python-pytorch":t.includes("mxnet")?"index.docker.io/lablup/python-mxnet":"index.docker.io/lablup/python-ff"}createNotebookBadge(){let t=this.shadowRoot.querySelector("#notebook-badge-url").value,e=this.regularizeGithubURL(t).replace("https://raw.githubusercontent.com/",""),o="";if(""===t)this.notification.text=s("import.NoNotebookCode"),this.notification.show(),this.shadowRoot.querySelector("#notebook-badge-code").value="",this.shadowRoot.querySelector("#notebook-badge-code-markdown").value="";else{globalThis.isElectron?o="https://cloud.backend.ai/github?":(o=window.location.protocol+"//"+window.location.hostname,window.location.port&&(o=o+":"+window.location.port),o+="/github?");let t=`<a href="${o+e}"><img src="https://www.backend.ai/assets/badge.svg" /></a>`,i=`[![Run on Backend.AI](https://www.backend.ai/assets/badge.svg)](${o+e})`;this.shadowRoot.querySelector("#notebook-badge-code").value=t,this.shadowRoot.querySelector("#notebook-badge-code-markdown").value=i}}_copyTextArea(t){let e="";if("value"in t.target&&(e=t.target.value),""!==e)if(0===e.length)this.notification.text=s("import.NoNotebookCode"),this.notification.show();else if(void 0!==navigator.clipboard)navigator.clipboard.writeText(e).then((()=>{this.notification.text=s("import.NotebookBadgeCodeCopied"),this.notification.show()}),(t=>{console.error(s("import.CouldNotCopyText"),t)}));else{let t=document.createElement("input");t.type="text",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.notification.text=s("import.NotebookBadgeCodeCopied"),this.notification.show()}}render(){return c`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <lablup-activity-panel title="${l("import.ImportNotebook")}" elevation="1" horizontalsize="2x">
        <div slot="message">
          <div class="horizontal wrap layout center">
            <mwc-textfield id="notebook-url" label="${l("import.NotebookURL")}"
                           maxLength="2048" placeholder="${l("maxLength.2048chars")}"></mwc-textfield>
            <mwc-button icon="cloud_download" @click="${()=>this.getNotebookFromURL()}">
              <span>${l("import.GetAndRunNotebook")}</span>
            </mwc-button>
          </div>
          ${this.importMessage}
        </div>
      </lablup-activity-panel>
      <backend-ai-session-launcher mode="import" location="import" hideLaunchButton
      id="session-launcher" ?active="${!0===this.active}"
      .newSessionDialogTitle="${l("session.launcher.StartImportedNotebook")}"></backend-ai-session-launcher>
      <div class="horizontal wrap layout">
        <lablup-activity-panel title="${l("summary.ResourceStatistics")}" elevation="1" width="350" height="490" narrow>
          <div slot="message">
              <backend-ai-resource-monitor location="summary" id="resource-monitor" ?active="${!0===this.active}" direction="vertical"></backend-ai-resource-monitor>
          </div>
        </lablup-activity-panel>
        <lablup-activity-panel title="${l("import.CreateNotebookButton")}" elevation="1" height="490">
          <div slot="message">
            <div class="vertical wrap layout center description">
              ${l("import.YouCanCreateNotebookCode")}
              <img src="/resources/badge.svg" style="margin-top:5px;margin-bottom:5px;"/>
              <mwc-textfield id="notebook-badge-url" label="${l("import.NotebookBadgeURL")}"
                             maxLength="2048" placeholder="${l("maxLength.2048chars")}"></mwc-textfield>
              <mwc-button style="width:100%;" @click="${()=>this.createNotebookBadge()}" icon="code">${l("import.CreateButtonCode")}</mwc-button>
              <mwc-textarea id="notebook-badge-code" label="${l("import.NotebookBadgeCodeHTML")}" @click="${t=>this._copyTextArea(t)}"></mwc-textarea>
              <mwc-textarea id="notebook-badge-code-markdown" label="${l("import.NotebookBadgeCodeMarkdown")}" @click="${t=>this._copyTextArea(t)}"></mwc-textarea>
            </div>
          </div>
        </lablup-activity-panel>
      </div>
      <div class="horizontal wrap layout">
        <lablup-activity-panel title="${l("import.ImportGithubRepo")}" elevation="1" horizontalsize="2x">
          <div slot="message">
            <div class="description">
              <p>${l("import.RepoWillBeFolder")}</p>
            </div>
            <div class="horizontal wrap layout center">
              <mwc-textfield id="github-repo-url" label="${l("import.GitHubURL")}"
                             maxLength="2048" placeholder="${l("maxLength.2048chars")}"></mwc-textfield>
              <mwc-button icon="cloud_download" @click="${()=>this.getGitHubRepoFromURL()}">
                <span>${l("import.GetToFolder")}</span>
              </mwc-button>
            </div>
            ${this.importMessage}
          </div>
        </lablup-activity-panel>
      </div>
`}};d([h({type:String})],u.prototype,"condition",void 0),d([h({type:Boolean})],u.prototype,"authenticated",void 0),d([h({type:Object})],u.prototype,"spinner",void 0),d([h({type:Object})],u.prototype,"indicator",void 0),d([h({type:Object})],u.prototype,"notification",void 0),d([h({type:Object})],u.prototype,"sessionLauncher",void 0),d([h({type:Object})],u.prototype,"resourcePolicy",void 0),d([h({type:String})],u.prototype,"requestURL",void 0),d([h({type:String})],u.prototype,"queryString",void 0),d([h({type:String})],u.prototype,"environment",void 0),d([h({type:String})],u.prototype,"importMessage",void 0),u=d([p("backend-ai-import-view")],u);var m=u;export default m;
