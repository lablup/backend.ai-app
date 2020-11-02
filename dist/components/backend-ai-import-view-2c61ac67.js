import{B as t,d as e,I as i,a as o,e as a,b as s,g as r,f as n,h as l,t as c,_ as d,p as h,c as p}from"./backend-ai-console-125e4b92.js";import"./unsafe-html-b5824a3e.js";import"./lablup-progress-bar-a78f1e50.js";import"./lablup-activity-panel-446742d1.js";import"./mwc-slider-87474dc3.js";import"./backend-ai-session-launcher-fd80b4db.js";import"./radio-behavior-4c6affa7.js";import"./expansion-9a7a977f.js";import"./mwc-textarea-71b1344e.js";import"./backend-ai-chart-7ea00947.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let u=class extends t{constructor(){super(),this.condition="running",this.authenticated=!1,this.spinner=Object(),this.indicator=Object(),this.notification=Object(),this.sessionLauncher=Object(),this.requestURL="",this.queryString="",this.environment="python",this.importMessage=""}static get styles(){return[e,i,o,a,s`
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

        mwc-button {
          background-image: none;
          --mdc-theme-primary: #38bd73 !important;
        }
      `]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.sessionLauncher=this.shadowRoot.querySelector("#session-launcher"),this.indicator=globalThis.lablupIndicator,this.notification=globalThis.lablupNotification}async _viewStateChanged(t){if(await this.updateComplete,!1===t)return void this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active");this.shadowRoot.querySelector("#resource-monitor").setAttribute("active","true"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.authenticated=!0,this.activeConnected&&this.requestUpdate()}),!0):(this.authenticated=!0,this.requestUpdate()),this.requestURL=globalThis.currentPageParams.requestURL;let e=globalThis.currentPageParams.queryString;if(e=e.substring(e.indexOf("?")+1),this.queryString=e,this.importMessage=this.queryString,this.environment=this.guessEnvironment(this.queryString),""!==e){let t="https://raw.githubusercontent.com/"+this.queryString;t=t.replace("/blob/","/"),this.fetchNotebookURLResource(t)}}getNotebookFromURL(){let t=this.shadowRoot.querySelector("#notebook-url").value;""!==t&&(this.queryString=this.regularizeGithubURL(t),this.fetchNotebookURLResource(this.queryString))}regularizeGithubURL(t){return t=(t=t.replace("/blob/","/")).replace("github.com","raw.githubusercontent.com")}fetchNotebookURLResource(t){this.shadowRoot.querySelector("#notebook-url").value=t,void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._fetchNotebookURLResource(t)}),!0):this._fetchNotebookURLResource(t)}_fetchNotebookURLResource(t){fetch(t).then((e=>{this.notification.text=r("import.ReadyToImport"),this.importMessage=this.notification.text,this.notification.show(),this.sessionLauncher.selectDefaultLanguage(!0,this.environment),this.sessionLauncher.importScript="#!/bin/sh\ncurl -O "+t,this.sessionLauncher.importFilename=t.split("/").pop(),this.sessionLauncher._launchSessionDialog()})).catch((t=>{this.notification.text=r("import.NoSuitableResourceFoundOnGivenURL"),this.importMessage=this.notification.text,this.notification.show()}))}getGitHubRepoFromURL(){let t=this.shadowRoot.querySelector("#github-repo-url").value,e="master",i="";if(".git"===t.substring(t.length-4,t.length)&&(t=t.split(".git")[0]),t.includes("/tree")){let o=(/\/tree\/[.a-zA-Z.0-9_-]+/.exec(t)||[""])[0],a=(/\/[.a-zA-Z0-9_-]+\/tree\//.exec(t)||[""])[0];t=t.replace(o,""),e=o.replace("/tree/",""),i=a.replace("/tree/","").substring(1)}else i=t.split("/").slice(-1)[0];t=t.replace("https://github.com","https://codeload.github.com"),t=t+"/zip/"+e;let o=(/^https?(?=:\/\/)/.exec(t)||[""])[0];return["http","https"].includes(o)?this.importRepoFromURL(t,i):(this.notification.text=r("import.WrongURLType"),this.importMessage=this.notification.text,this.notification.show(),!1)}async importRepoFromURL(t,e){let i={cpu:1,mem:"0.5g"};i.domain=globalThis.backendaiclient._config.domainName,i.group_name=globalThis.backendaiclient.current_group;let o=await this.indicator.start("indeterminate");return o.set(10,r("import.Preparing")),e=await this._checkFolderNameAlreadyExists(e),await this._addFolderWithName(e),o.set(20,r("import.FolderCreated")),i.mounts=[e],i.bootstrap_script="#!/bin/sh\ncurl -o repo.zip "+t+"\ncd /home/work/"+e+"\nunzip -u /home/work/repo.zip",globalThis.backendaiclient.get_resource_slots().then((t=>(o.set(50,r("import.Downloading")),globalThis.backendaiclient.createIfNotExists("index.docker.io/lablup/python:3.8-ubuntu18.04",null,i,6e4)))).then((async t=>{o.set(80,r("import.CleanUpImportTask")),await globalThis.backendaiclient.destroy(t.sessionId),o.set(100,r("import.ImportFinished")),o.end(1e3)})).catch((t=>{this.notification.text=n.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t),o.end(1e3)}))}async _addFolderWithName(t){let e=(await globalThis.backendaiclient.vfolder.list_hosts()).default;return t=await this._checkFolderNameAlreadyExists(t),globalThis.backendaiclient.vfolder.create(t,e,"","general","rw").then((e=>{this.importMessage=r("import.FolderName")+t})).catch((t=>{console.log(t),t&&t.message&&(this.notification.text=n.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))}))}async _checkFolderNameAlreadyExists(t){let e=(await globalThis.backendaiclient.vfolder.list()).map((function(t){return t.name}));if(e.includes(t)){this.notification.text=r("import.FolderAlreadyExists"),this.importMessage=this.notification.text,this.notification.show();let i=1,o=t;for(;e.includes(o);)o=t+"_"+i,i++;t=o}return t}guessEnvironment(t){return t.includes("tensorflow")||t.includes("keras")||t.includes("Keras")?"index.docker.io/lablup/python-tensorflow":t.includes("pytorch")?"index.docker.io/lablup/python-pytorch":t.includes("mxnet")?"index.docker.io/lablup/python-mxnet":"index.docker.io/lablup/python-ff"}createNotebookBadge(){let t=this.shadowRoot.querySelector("#notebook-badge-url").value,e=this.regularizeGithubURL(t).replace("https://raw.githubusercontent.com/",""),i="";globalThis.isElectron?i="https://cloud.backend.ai/github?":(i=window.location.protocol+"//"+window.location.hostname,window.location.port&&(i=i+":"+window.location.port),i+="/github?");let o=`<a href="${i+e}"><img src="https://www.backend.ai/assets/badge.svg" /></a>`,a=`[![Run on Backend.AI](https://www.backend.ai/assets/badge.svg)](${i+e})`;this.shadowRoot.querySelector("#notebook-badge-code").value=o,this.shadowRoot.querySelector("#notebook-badge-code-markdown").value=a}render(){return l`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <lablup-activity-panel title="${c("import.ImportNotebook")}" elevation="1" horizontalsize="2x">
        <div slot="message">
          <div class="horizontal wrap layout center">
            <mwc-textfield style="width:75%;" id="notebook-url" label="${c("import.NotebookURL")}"></mwc-textfield>
            <mwc-button icon="cloud_download" @click="${()=>this.getNotebookFromURL()}">${c("import.GetAndRunNotebook")}</mwc-button>
          </div>
          ${this.importMessage}
        </div>
      </lablup-activity-panel>
      <backend-ai-session-launcher mode="import" location="import" hideLaunchButton
      id="session-launcher" ?active="${!0===this.active}"
      .newSessionDialogTitle="${c("session.launcher.StartImportedNotebook")}"></backend-ai-session-launcher>
      <div class="horizontal wrap layout">
        <lablup-activity-panel title="${c("summary.ResourceStatistics")}" elevation="1" width="350" narrow height="530">
          <div slot="message">
              <backend-ai-resource-monitor location="summary" id="resource-monitor" ?active="${!0===this.active}" direction="vertical"></backend-ai-resource-monitor>
          </div>
        </lablup-activity-panel>
        <lablup-activity-panel title="${c("import.CreateNotebookButton")}" elevation="1" height="530">
          <div slot="message">
            <div class="vertical wrap layout center description">
              ${c("import.YouCanCreateNotebookCode")}
              <img src="/resources/badge.svg" style="margin-top:5px;margin-bottom:5px;"/>
              <mwc-textfield id="notebook-badge-url" label="${c("import.NotebookBadgeURL")}"></mwc-textfield>
              <mwc-button style="width:100%;" @click="${()=>this.createNotebookBadge()}" icon="code">${c("import.CreateButtonCode")}</mwc-button>
              <mwc-textarea id="notebook-badge-code" label="${c("import.NotebookBadgeCodeHTML")}">></mwc-textarea>
              <mwc-textarea id="notebook-badge-code-markdown" label="${c("import.NotebookBadgeCodeMarkdown")}">></mwc-textarea>
            </div>
          </div>
        </lablup-activity-panel>
      </div>
      <div class="horizontal wrap layout">
        <lablup-activity-panel title="${c("import.ImportGithubRepo")}" elevation="1" horizontalsize="2x">
          <div slot="message">
            <div class="description">
              <p>${c("import.RepoWillBeFolder")}</p>
            </div>
            <div class="horizontal wrap layout center">
              <mwc-textfield style="width:75%;" id="github-repo-url" label="${c("import.GitHubURL")}"></mwc-textfield>
              <mwc-button icon="cloud_download" @click="${()=>this.getGitHubRepoFromURL()}">${c("import.GetToFolder")}</mwc-button>
            </div>
            ${this.importMessage}
          </div>
        </lablup-activity-panel>
      </div>
`}};d([h({type:String})],u.prototype,"condition",void 0),d([h({type:Boolean})],u.prototype,"authenticated",void 0),d([h({type:Object})],u.prototype,"spinner",void 0),d([h({type:Object})],u.prototype,"indicator",void 0),d([h({type:Object})],u.prototype,"notification",void 0),d([h({type:Object})],u.prototype,"sessionLauncher",void 0),d([h({type:Object})],u.prototype,"resourcePolicy",void 0),d([h({type:String})],u.prototype,"requestURL",void 0),d([h({type:String})],u.prototype,"queryString",void 0),d([h({type:String})],u.prototype,"environment",void 0),d([h({type:String})],u.prototype,"importMessage",void 0),u=d([p("backend-ai-import-view")],u);var b=u;export default b;
