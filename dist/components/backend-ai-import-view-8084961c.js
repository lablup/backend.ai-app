import{B as t,b as e,I as i,a as o,c as a,r as s,g as r,d as n,$ as l,t as c,_ as d,e as h,n as p}from"./backend-ai-webui-29a04808.js";import"./mwc-textarea-44ad2d64.js";import"./lablup-activity-panel-0d4aa16a.js";import"./backend-ai-chart-4c7972bb.js";import"./backend-ai-session-launcher-02113764.js";import"./chart-js-c8c78020.js";import"./mwc-linear-progress-6cadac4a.js";import"./mwc-switch-e596012f.js";import"./label-f49b9d87.js";import"./lablup-progress-bar-bafce280.js";import"./mwc-check-list-item-4cc3468a.js";import"./slider-c0b339c3.js";import"./vaadin-grid-324151db.js";import"./vaadin-grid-filter-column-6c0e4354.js";import"./vaadin-grid-selection-column-ef5940fe.js";import"./dom-repeat-c48bf759.js";import"./vaadin-item-styles-461be75c.js";import"./expansion-a141e6f0.js";import"./radio-behavior-57c4111b.js";import"./lablup-codemirror-83e8eb38.js";
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */let m=class extends t{constructor(){super(),this.condition="running",this.authenticated=!1,this.spinner=Object(),this.indicator=Object(),this.notification=Object(),this.sessionLauncher=Object(),this.requestURL="",this.queryString="",this.environment="python",this.importMessage="",this.importGitlabMessage="",this.allowedGroups=[],this.allowed_folder_type=[],this.vhost="",this.vhosts=[],this.storageInfo=Object(),this._helpDescription="",this._helpDescriptionTitle="",this._helpDescriptionIcon="",this.storageProxyInfo=Object()}static get styles(){return[e,i,o,a,s`
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

        mwc-textfield#notebook-url {
          width: 75%;
        }
        mwc-textfield.repo-url {
          width: 100%;
        }
        mwc-textfield#gitlab-default-branch-name {
          margin: inherit;
          width: 30%;
          margin-bottom: 10px;
        }

        mwc-button {
          background-image: none;
          --mdc-theme-primary: #38bd73 !important;
        }

        mwc-button.left-align {
          margin-left: auto;
        }

        mwc-select {
          margin: auto;
          width: 35%;
          margin-bottom: 10px;
          --mdc-theme-primary: var(--general-textfield-selected-color);
          --mdc-select-fill-color: transparent;
          --mdc-select-label-ink-color: rgba(0, 0, 0, 0.75);
          --mdc-select-dropdown-icon-color: var(--general-textfield-selected-color);
          --mdc-select-hover-line-color: var(--general-textfield-selected-color);
          --mdc-list-vertical-padding: 5px;
        }
        mwc-select.github-select {
          margin: inherit;
          width: 440px;
          margin-bottom: 10px;
          --mdc-theme-primary: var(--general-textfield-selected-color);
          --mdc-select-fill-color: transparent;
          --mdc-select-label-ink-color: rgba(0, 0, 0, 0.75);
          --mdc-select-dropdown-icon-color: var(--general-textfield-selected-color);
          --mdc-select-hover-line-color: var(--general-textfield-selected-color);
          --mdc-list-vertical-padding: 5px;
        }

        @media screen and (max-width: 1015px) {
          mwc-textfield#notebook-url {
            width: 85%;
            margin: 10px 0px;
          }
          mwc-textfield.repo-url {
            width: 85%;
            margin: 10px 0px;
          }
          mwc-textfield#gitlab-default-branch-name {
            width: 25%;
            margin: inherit;
          }
          mwc-button {
            width: 36px;
          }
          mwc-button > span {
            display: none;
          }
        }
      `]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.sessionLauncher=this.shadowRoot.querySelector("#session-launcher"),this.indicator=globalThis.lablupIndicator,this.notification=globalThis.lablupNotification,globalThis.backendaiclient.vfolder.list_allowed_types().then((t=>{this.allowed_folder_type=t})),this._getFolderList(),fetch("resources/storage_metadata.json").then((t=>t.json())).then((t=>{const e=Object();for(const i in t.storageInfo)({}).hasOwnProperty.call(t.storageInfo,i)&&(e[i]={},"name"in t.storageInfo[i]&&(e[i].name=t.storageInfo[i].name),"description"in t.storageInfo[i]?e[i].description=t.storageInfo[i].description:e[i].description=r("data.NoStorageDescriptionFound"),"icon"in t.storageInfo[i]?e[i].icon=t.storageInfo[i].icon:e[i].icon="local.png","dialects"in t.storageInfo[i]&&t.storageInfo[i].dialects.forEach((t=>{e[t]=e[i]})));this.storageInfo=e}))}async _viewStateChanged(t){if(await this.updateComplete,!1===t)return void this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active");this.shadowRoot.querySelector("#resource-monitor").setAttribute("active","true"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.authenticated=!0,this.activeConnected&&this.requestUpdate()}),!0):(this.authenticated=!0,this.requestUpdate()),this.requestURL=globalThis.currentPageParams.requestURL;let e=globalThis.currentPageParams.queryString;if(e=e.substring(e.indexOf("?")+1),this.queryString=e,this.importMessage=this.queryString,this.environment=this.guessEnvironment(this.queryString),""!==e){let t="https://raw.githubusercontent.com/"+this.queryString;t=t.replace("/blob/","/"),this.fetchNotebookURLResource(t)}}getNotebookFromURL(){const t=this.shadowRoot.querySelector("#notebook-url").value;""!==t&&(this.queryString=this.regularizeGithubURL(t),this.fetchNotebookURLResource(this.queryString))}regularizeGithubURL(t){return t=(t=t.replace("/blob/","/")).replace("github.com","raw.githubusercontent.com")}fetchNotebookURLResource(t){this.shadowRoot.querySelector("#notebook-url").value=t,void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._fetchNotebookURLResource(t)}),!0):this._fetchNotebookURLResource(t)}_fetchNotebookURLResource(t){fetch(t).then((e=>{this.notification.text=r("import.ReadyToImport"),this.importMessage=this.notification.text,this.notification.show(),this.sessionLauncher.selectDefaultLanguage(!0,this.environment),this.sessionLauncher.importScript="#!/bin/sh\ncurl -O "+t,this.sessionLauncher.importFilename=t.split("/").pop(),this.sessionLauncher._launchSessionDialog()})).catch((t=>{this.notification.text=r("import.NoSuitableResourceFoundOnGivenURL"),this.importMessage=this.notification.text,this.notification.show()}))}getGitHubRepoFromURL(){let t=this.shadowRoot.querySelector("#github-repo-url").value,e="master",i="";if(".git"===t.substring(t.length-4,t.length)&&(t=t.split(".git")[0]),t.includes("/tree")){const o=(/\/tree\/[.a-zA-Z.0-9_-]+/.exec(t)||[""])[0],a=(/\/[.a-zA-Z0-9_-]+\/tree\//.exec(t)||[""])[0];t=t.replace(o,""),e=o.replace("/tree/",""),i=a.replace("/tree/","").substring(1),t=t.replace("https://github.com","https://codeload.github.com"),t=t+"/zip/"+e;const s=(/^https?(?=:\/\/)/.exec(t)||[""])[0];return["http","https"].includes(s)?this.importRepoFromURL(t,i):(this.notification.text=r("import.WrongURLType"),this.importMessage=this.notification.text,this.notification.show(),!1)}{i=t.split("/").slice(-1)[0];const o="https://api.github.com/repos"+new URL(t).pathname;return(async()=>{try{const t=await fetch(o);if(200===t.status){return(await t.json()).default_branch}if(404===t.status)throw"WrongURLType";if(403===t.status||429===t.status){const e=t.headers.get("x-ratelimit-limit"),i=t.headers.get("x-ratelimit-used"),o=t.headers.get("x-ratelimit-remaining");throw console.log(`used count: ${i}, remaining count: ${o}/total count: ${e}\nerror body: ${t.text}`),"0"===o?"GithubAPILimitError|"+i+"|"+o:"GithubAPIEtcError"}throw 500===t.status?"GithubInternalError":(console.log(`error statusCode: ${t.status}, body: ${t.text}`),"GithubAPIEtcError")}catch(t){throw t}})().then((o=>{e=o,t=t.replace("https://github.com","https://codeload.github.com"),t=t+"/zip/"+e;const a=(/^https?(?=:\/\/)/.exec(t)||[""])[0];return["http","https"].includes(a)?this.importRepoFromURL(t,i):(this.notification.text=r("import.WrongURLType"),this.importMessage=this.notification.text,this.notification.show(),!1)})).catch((t=>{switch(t){case"WrongURLType":this.notification.text=r("import.WrongURLType");break;case"GithubInternalError":this.notification.text=r("import.GithubInternalError");break;default:-1!==t.indexOf("|")?this.notification.text=r("import.GithubAPILimitError"):this.notification.text=r("import.GithubAPIEtcError")}return this.importMessage=this.notification.text,this.notification.show(),!1}))}}getGitlabRepoFromURL(){let t=this.shadowRoot.querySelector("#gitlab-repo-url").value,e="master";const i=this.shadowRoot.querySelector("#gitlab-default-branch-name").value;i.length>0&&(e=i);let o="";if(".git"===t.substring(t.length-4,t.length)&&(t=t.split(".git")[0]),t.includes("/tree")){const i=new URL(t).pathname.split("/");o=i[2],e=i[i.length-1],t=t.replace("/tree/","/archive/"),t+="/"+o+"-"+e+".zip";const a=(/^https?(?=:\/\/)/.exec(t)||[""])[0];return["http","https"].includes(a)?this.importRepoFromURL(t,o):(this.notification.text=r("import.WrongURLType"),this.importMessage=this.notification.text,this.notification.show(),!1)}{o=t.split("/").slice(-1)[0],t=t+"/-/archive/"+e+"/"+o+"-"+e+".zip";const i=(/^https?(?=:\/\/)/.exec(t)||[""])[0];return["http","https"].includes(i)?this.importRepoFromURL(t,o):(this.notification.text=r("import.WrongURLType"),this.importGitlabMessage=this.notification.text,this.notification.show(),!1)}}async importRepoFromURL(t,e){const i={cpu:1,mem:"0.5g"};i.domain=globalThis.backendaiclient._config.domainName,i.group_name=globalThis.backendaiclient.current_group;const o=await this.indicator.start("indeterminate");return o.set(10,r("import.Preparing")),e=await this._checkFolderNameAlreadyExists(e,t),await this._addFolderWithName(e,t),o.set(20,r("import.FolderCreated")),i.mounts=[e],i.bootstrap_script="#!/bin/sh\ncurl -o repo.zip "+t+"\ncd /home/work/"+e+"\nunzip -u /home/work/repo.zip",globalThis.backendaiclient.get_resource_slots().then((t=>(o.set(50,r("import.Downloading")),globalThis.backendaiclient.createIfNotExists(globalThis.backendaiclient._config.default_import_environment,null,i,6e4,void 0)))).then((async t=>{o.set(80,r("import.CleanUpImportTask")),await globalThis.backendaiclient.destroy(t.sessionId),o.set(100,r("import.ImportFinished")),o.end(1e3)})).catch((t=>{this.notification.text=n.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t),o.end(1e3)}))}async _addFolderWithName(t,e){let i=(await globalThis.backendaiclient.vfolder.list_hosts()).default;return i=e.includes("github.com/")?this.shadowRoot.querySelector("#github-add-folder-host").value:this.shadowRoot.querySelector("#gitlab-add-folder-host").value,t=await this._checkFolderNameAlreadyExists(t,e),globalThis.backendaiclient.vfolder.create(t,i,"","general","rw").then((i=>{e.includes("github.com/")?this.importMessage=r("import.FolderName")+t:this.importGitlabMessage=r("import.FolderName")+t})).catch((t=>{console.log(t),t&&t.message&&(this.notification.text=n.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))}))}async _checkFolderNameAlreadyExists(t,e){const i=(await globalThis.backendaiclient.vfolder.list()).map((function(t){return t.name}));if(i.includes(t)){this.notification.text=r("import.FolderAlreadyExists"),e.includes("github.com/")?this.importMessage=this.notification.text:this.importGitlabMessage=this.notification.text,this.notification.show();let o=1,a=t;for(;i.includes(a);)a=t+"_"+o,o++;t=a}return t}guessEnvironment(t){return t.includes("tensorflow")||t.includes("keras")||t.includes("Keras")?"index.docker.io/lablup/python-tensorflow":t.includes("pytorch")?"index.docker.io/lablup/python-pytorch":t.includes("mxnet")?"index.docker.io/lablup/python-mxnet":"index.docker.io/lablup/python-ff"}createNotebookBadge(){const t=this.shadowRoot.querySelector("#notebook-badge-url").value,e=this.regularizeGithubURL(t).replace("https://raw.githubusercontent.com/","");let i="";if(""===t)this.notification.text=r("import.NoNotebookCode"),this.notification.show(),this.shadowRoot.querySelector("#notebook-badge-code").value="",this.shadowRoot.querySelector("#notebook-badge-code-markdown").value="";else{globalThis.isElectron?i="https://cloud.backend.ai/github?":(i=window.location.protocol+"//"+window.location.hostname,window.location.port&&(i=i+":"+window.location.port),i+="/github?");const t=`<a href="${i+e}"><img src="https://www.backend.ai/assets/badge.svg" /></a>`,o=`[![Run on Backend.AI](https://www.backend.ai/assets/badge.svg)](${i+e})`;this.shadowRoot.querySelector("#notebook-badge-code").value=t,this.shadowRoot.querySelector("#notebook-badge-code-markdown").value=o}}_copyTextArea(t){let e="";if("value"in t.target&&(e=t.target.value),""!==e)if(0===e.length)this.notification.text=r("import.NoNotebookCode"),this.notification.show();else if(void 0!==navigator.clipboard)navigator.clipboard.writeText(e).then((()=>{this.notification.text=r("import.NotebookBadgeCodeCopied"),this.notification.show()}),(t=>{console.error(r("import.CouldNotCopyText"),t)}));else{const t=document.createElement("input");t.type="text",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.notification.text=r("import.NotebookBadgeCodeCopied"),this.notification.show()}}async _getFolderList(){const t=await globalThis.backendaiclient.vfolder.list_hosts();if(this.vhosts=t.allowed,this.vhost=t.default,this.allowed_folder_type.includes("group")){const t=await globalThis.backendaiclient.group.list();this.allowedGroups=t.groups}}render(){return l`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <lablup-activity-panel title="${c("import.ImportNotebook")}" elevation="1" horizontalsize="2x">
        <div slot="message">
          <div class="horizontal wrap layout center">
            <mwc-textfield id="notebook-url" label="${c("import.NotebookURL")}"
                           maxLength="2048" placeholder="${c("maxLength.2048chars")}"></mwc-textfield>
            <mwc-button icon="cloud_download" @click="${()=>this.getNotebookFromURL()}">
              <span>${c("import.GetAndRunNotebook")}</span>
            </mwc-button>
          </div>
          ${this.importMessage}
        </div>
      </lablup-activity-panel>
      <backend-ai-session-launcher mode="import" location="import" hideLaunchButton
      id="session-launcher" ?active="${!0===this.active}"
      .newSessionDialogTitle="${c("session.launcher.StartImportedNotebook")}"></backend-ai-session-launcher>
      <div class="horizontal wrap layout">
        <lablup-activity-panel title="${c("summary.ResourceStatistics")}" elevation="1" width="350" height="490" narrow>
          <div slot="message">
              <backend-ai-resource-monitor location="summary" id="resource-monitor" ?active="${!0===this.active}" direction="vertical"></backend-ai-resource-monitor>
          </div>
        </lablup-activity-panel>
        <lablup-activity-panel title="${c("import.CreateNotebookButton")}" elevation="1" height="490">
          <div slot="message">
            <div class="vertical wrap layout center description">
              ${c("import.YouCanCreateNotebookCode")}
              <img src="/resources/badge.svg" style="margin-top:5px;margin-bottom:5px;"/>
              <mwc-textfield id="notebook-badge-url" label="${c("import.NotebookBadgeURL")}"
                             maxLength="2048" placeholder="${c("maxLength.2048chars")}"></mwc-textfield>
              <mwc-button fullwidth @click="${()=>this.createNotebookBadge()}" icon="code">${c("import.CreateButtonCode")}</mwc-button>
              <mwc-textarea id="notebook-badge-code" label="${c("import.NotebookBadgeCodeHTML")}" @click="${t=>this._copyTextArea(t)}"></mwc-textarea>
              <mwc-textarea id="notebook-badge-code-markdown" label="${c("import.NotebookBadgeCodeMarkdown")}" @click="${t=>this._copyTextArea(t)}"></mwc-textarea>
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
              <mwc-textfield id="github-repo-url" class="repo-url" label="${c("import.GitHubURL")}"
                             maxLength="2048" placeholder="${c("maxLength.2048chars")}"></mwc-textfield>
              <mwc-select class="github-select" id="github-add-folder-host" label="${c("data.Host")}">
                ${this.vhosts.map(((t,e)=>l`
                <mwc-list-item hasMeta value="${t}" ?selected="${t===this.vhost}">
                    <span>${t}</span>
                </mwc-list-item>
                `))}
              </mwc-select>
              <mwc-button class="left-align" icon="cloud_download" @click="${()=>this.getGitHubRepoFromURL()}">
                <span>${c("import.GetToFolder")}</span>
              </mwc-button>
            </div>
            ${this.importMessage}
          </div>
        </lablup-activity-panel>
      </div>
      <div class="horizontal wrap layout">
        <lablup-activity-panel title="${c("import.ImportGitlabRepo")}" elevation="1" horizontalsize="2x">
          <div slot="message">
            <div class="description">
              <p>${c("import.GitlabRepoWillBeFolder")}</p>
            </div>
            <div class="horizontal wrap layout center">
              <mwc-textfield id="gitlab-repo-url" class="repo-url" label="${c("import.GitlabURL")}"
                             maxLength="2048" placeholder="${c("maxLength.2048chars")}"></mwc-textfield>
              <mwc-textfield id="gitlab-default-branch-name" label="${c("import.GitlabDefaultBranch")}"
                             maxLength="200" placeholder="${c("maxLength.200chars")}"></mwc-textfield>
              <mwc-select id="gitlab-add-folder-host" label="${c("data.Host")}">
                ${this.vhosts.map(((t,e)=>l`
                <mwc-list-item hasMeta value="${t}" ?selected="${t===this.vhost}">
                    <span>${t}</span>
                </mwc-list-item>
                `))}
              </mwc-select>
              <mwc-button class="left-align" icon="cloud_download" @click="${()=>this.getGitlabRepoFromURL()}">
                <span>${c("import.GetToFolder")}</span>
              </mwc-button>
            </div>
            ${this.importGitlabMessage}
          </div>
        </lablup-activity-panel>
      </div>
`}};d([h({type:String})],m.prototype,"condition",void 0),d([h({type:Boolean})],m.prototype,"authenticated",void 0),d([h({type:Object})],m.prototype,"spinner",void 0),d([h({type:Object})],m.prototype,"indicator",void 0),d([h({type:Object})],m.prototype,"notification",void 0),d([h({type:Object})],m.prototype,"sessionLauncher",void 0),d([h({type:Object})],m.prototype,"resourcePolicy",void 0),d([h({type:String})],m.prototype,"requestURL",void 0),d([h({type:String})],m.prototype,"queryString",void 0),d([h({type:String})],m.prototype,"environment",void 0),d([h({type:String})],m.prototype,"importMessage",void 0),d([h({type:String})],m.prototype,"importGitlabMessage",void 0),d([h({type:Array})],m.prototype,"allowedGroups",void 0),d([h({type:Array})],m.prototype,"allowed_folder_type",void 0),d([h({type:String})],m.prototype,"vhost",void 0),d([h({type:Array})],m.prototype,"vhosts",void 0),d([h({type:Object})],m.prototype,"storageInfo",void 0),d([h({type:String})],m.prototype,"_helpDescription",void 0),d([h({type:String})],m.prototype,"_helpDescriptionTitle",void 0),d([h({type:String})],m.prototype,"_helpDescriptionIcon",void 0),d([h({type:Object})],m.prototype,"storageProxyInfo",void 0),m=d([p("backend-ai-import-view")],m);var u=m;export{u as default};
