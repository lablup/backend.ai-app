import{B as t,b as e,I as o,a as i,c as a,r,g as s,d as n,$ as l,t as c,_ as d,e as h,n as p}from"./backend-ai-webui-56356ffe.js";import"./mwc-textarea-b66f04b1.js";import"./lablup-activity-panel-efc25ae4.js";import"./backend-ai-chart-1d2065aa.js";import"./backend-ai-session-launcher-b471f1bd.js";import"./chart-js-9d8ed821.js";import"./lablup-progress-bar-5ee595c9.js";import"./vaadin-grid-e1718aa8.js";import"./label-bbcd6d33.js";import"./mwc-check-list-item-67aa6d57.js";import"./slider-6cc9c078.js";import"./vaadin-grid-filter-column-ffd1ddaa.js";import"./vaadin-grid-selection-column-fb9a4350.js";import"./dom-repeat-f6e1ae64.js";import"./vaadin-item-styles-508ec81f.js";import"./expansion-063c5449.js";import"./radio-behavior-b633e68b.js";import"./lablup-codemirror-c2334ede.js";
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */let m=class extends t{constructor(){super(),this.condition="running",this.authenticated=!1,this.indicator=Object(),this.notification=Object(),this.sessionLauncher=Object(),this.requestURL="",this.queryString="",this.environment="python",this.importNotebookMessage="",this.importGithubMessage="",this.importGitlabMessage="",this.allowedGroups=[],this.allowed_folder_type=[],this.vhost="",this.vhosts=[],this.storageInfo=Object(),this._helpDescription="",this._helpDescriptionTitle="",this._helpDescriptionIcon=""}static get styles(){return[e,o,i,a,r`
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
      `]}firstUpdated(){this.sessionLauncher=this.shadowRoot.querySelector("#session-launcher"),this.indicator=globalThis.lablupIndicator,this.notification=globalThis.lablupNotification,globalThis.backendaiclient.vfolder.list_allowed_types().then((t=>{this.allowed_folder_type=t})),this._getFolderList(),fetch("resources/storage_metadata.json").then((t=>t.json())).then((t=>{const e=Object();for(const o in t.storageInfo)({}).hasOwnProperty.call(t.storageInfo,o)&&(e[o]={},"name"in t.storageInfo[o]&&(e[o].name=t.storageInfo[o].name),"description"in t.storageInfo[o]?e[o].description=t.storageInfo[o].description:e[o].description=s("data.NoStorageDescriptionFound"),"icon"in t.storageInfo[o]?e[o].icon=t.storageInfo[o].icon:e[o].icon="local.png","dialects"in t.storageInfo[o]&&t.storageInfo[o].dialects.forEach((t=>{e[t]=e[o]})));this.storageInfo=e}))}async _viewStateChanged(t){if(await this.updateComplete,!1===t)return void this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active");this.shadowRoot.querySelector("#resource-monitor").setAttribute("active","true"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.authenticated=!0,this.activeConnected&&this.requestUpdate()}),!0):(this.authenticated=!0,this.requestUpdate()),this.requestURL=globalThis.currentPageParams.requestURL;let e=globalThis.currentPageParams.queryString;if(e=e.substring(e.indexOf("?")+1),this.queryString=e,this.importNotebookMessage=this.queryString,this.environment=this.guessEnvironment(this.queryString),""!==e){let t="https://raw.githubusercontent.com/"+this.queryString;t=t.replace("/blob/","/"),this.fetchNotebookURLResource(t)}}getNotebookFromURL(){const t=this.shadowRoot.querySelector("#notebook-url").value;""!==t&&(this.queryString=this.regularizeGithubURL(t),this.fetchNotebookURLResource(this.queryString))}regularizeGithubURL(t){return t=(t=t.replace("/blob/","/")).replace("github.com","raw.githubusercontent.com")}fetchNotebookURLResource(t){this.shadowRoot.querySelector("#notebook-url").value=t,void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._fetchNotebookURLResource(t)}),!0):this._fetchNotebookURLResource(t)}_fetchNotebookURLResource(t){fetch(t).then((e=>{this.notification.text=s("import.ReadyToImport"),this.importNotebookMessage=this.notification.text,this.notification.show(),this.sessionLauncher.selectDefaultLanguage(!0,this.environment),this.sessionLauncher.importScript="#!/bin/sh\ncurl -O "+t,this.sessionLauncher.importFilename=t.split("/").pop(),this.sessionLauncher._launchSessionDialog()})).catch((t=>{this.notification.text=s("import.NoSuitableResourceFoundOnGivenURL"),this.importNotebookMessage=this.notification.text,this.notification.show()}))}getGitHubRepoFromURL(){let t=this.shadowRoot.querySelector("#github-repo-url").value,e="master",o="";if(".git"===t.substring(t.length-4,t.length)&&(t=t.split(".git")[0]),t.includes("/tree")){const i=(/\/tree\/[.a-zA-Z.0-9_-]+/.exec(t)||[""])[0],a=(/\/[.a-zA-Z0-9_-]+\/tree\//.exec(t)||[""])[0];t=t.replace(i,""),e=i.replace("/tree/",""),o=a.replace("/tree/","").substring(1),t=t.replace("https://github.com","https://codeload.github.com"),t=t+"/zip/"+e;const r=(/^https?(?=:\/\/)/.exec(t)||[""])[0];return["http","https"].includes(r)?this.importRepoFromURL(t,o):(this.notification.text=s("import.WrongURLType"),this.importNotebookMessage=this.notification.text,this.notification.show(),!1)}{o=t.split("/").slice(-1)[0];const i="https://api.github.com/repos"+new URL(t).pathname;return(async()=>{try{const t=await fetch(i);if(200===t.status){return(await t.json()).default_branch}if(404===t.status)throw"WrongURLType";if(403===t.status||429===t.status){const e=t.headers.get("x-ratelimit-limit"),o=t.headers.get("x-ratelimit-used"),i=t.headers.get("x-ratelimit-remaining");throw console.log(`used count: ${o}, remaining count: ${i}/total count: ${e}\nerror body: ${t.text}`),"0"===i?"GithubAPILimitError|"+o+"|"+i:"GithubAPIEtcError"}throw 500===t.status?"GithubInternalError":(console.log(`error statusCode: ${t.status}, body: ${t.text}`),"GithubAPIEtcError")}catch(t){throw t}})().then((i=>{e=i,t=t.replace("https://github.com","https://codeload.github.com"),t=t+"/zip/"+e;const a=(/^https?(?=:\/\/)/.exec(t)||[""])[0];return["http","https"].includes(a)?this.importRepoFromURL(t,o):(this.notification.text=s("import.WrongURLType"),this.importNotebookMessage=this.notification.text,this.notification.show(),!1)})).catch((t=>{switch(t){case"WrongURLType":this.notification.text=s("import.WrongURLType");break;case"GithubInternalError":this.notification.text=s("import.GithubInternalError");break;default:-1!==t.indexOf("|")?this.notification.text=s("import.GithubAPILimitError"):this.notification.text=s("import.GithubAPIEtcError")}return this.importNotebookMessage=this.notification.text,this.notification.show(),!1}))}}getGitlabRepoFromURL(){let t=this.shadowRoot.querySelector("#gitlab-repo-url").value,e="master";const o=this.shadowRoot.querySelector("#gitlab-default-branch-name").value;o.length>0&&(e=o);let i="";if(".git"===t.substring(t.length-4,t.length)&&(t=t.split(".git")[0]),t.includes("/tree")){const o=new URL(t).pathname.split("/");i=o[2],e=o[o.length-1],t=t.replace("/tree/","/archive/"),t+="/"+i+"-"+e+".zip";const a=(/^https?(?=:\/\/)/.exec(t)||[""])[0];return["http","https"].includes(a)?this.importRepoFromURL(t,i):(this.notification.text=s("import.WrongURLType"),this.importNotebookMessage=this.notification.text,this.notification.show(),!1)}{i=t.split("/").slice(-1)[0],t=t+"/-/archive/"+e+"/"+i+"-"+e+".zip";const o=(/^https?(?=:\/\/)/.exec(t)||[""])[0];return["http","https"].includes(o)?this.importRepoFromURL(t,i):(this.notification.text=s("import.WrongURLType"),this.importGitlabMessage=this.notification.text,this.notification.show(),!1)}}async importRepoFromURL(t,e){const o={cpu:1,mem:"0.5g"};o.domain=globalThis.backendaiclient._config.domainName,o.group_name=globalThis.backendaiclient.current_group;const i=await this.indicator.start("indeterminate");return i.set(10,s("import.Preparing")),e=await this._checkFolderNameAlreadyExists(e,t),await this._addFolderWithName(e,t),i.set(20,s("import.FolderCreated")),o.mounts=[e],o.bootstrap_script="#!/bin/sh\ncurl -o repo.zip "+t+"\ncd /home/work/"+e+"\nunzip -u /home/work/repo.zip",globalThis.backendaiclient.get_resource_slots().then((t=>(i.set(50,s("import.Downloading")),globalThis.backendaiclient.createIfNotExists(globalThis.backendaiclient._config.default_import_environment,null,o,6e4,void 0)))).then((async t=>{i.set(80,s("import.CleanUpImportTask")),await globalThis.backendaiclient.destroy(t.sessionId),i.set(100,s("import.ImportFinished")),i.end(1e3)})).catch((t=>{this.notification.text=n.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t),i.end(1e3)}))}async _addFolderWithName(t,e){let o=(await globalThis.backendaiclient.vfolder.list_hosts()).default;return o=e.includes("github.com/")?this.shadowRoot.querySelector("#github-add-folder-host").value:this.shadowRoot.querySelector("#gitlab-add-folder-host").value,t=await this._checkFolderNameAlreadyExists(t,e),globalThis.backendaiclient.vfolder.create(t,o,"","general","rw").then((o=>{e.includes("github.com/")?this.importNotebookMessage=s("import.FolderName")+t:this.importGitlabMessage=s("import.FolderName")+t})).catch((t=>{console.log(t),t&&t.message&&(this.notification.text=n.relieve(t.title),this.notification.detail=t.message,this.notification.show(!0,t))}))}async _checkFolderNameAlreadyExists(t,e){const o=(await globalThis.backendaiclient.vfolder.list()).map((function(t){return t.name}));if(o.includes(t)){this.notification.text=s("import.FolderAlreadyExists"),e.includes("github.com/")?this.importNotebookMessage=this.notification.text:this.importGitlabMessage=this.notification.text,this.notification.show();let i=1,a=t;for(;o.includes(a);)a=t+"_"+i,i++;t=a}return t}guessEnvironment(t){return t.includes("tensorflow")||t.includes("keras")||t.includes("Keras")?"index.docker.io/lablup/python-tensorflow":t.includes("pytorch")?"index.docker.io/lablup/python-pytorch":t.includes("mxnet")?"index.docker.io/lablup/python-mxnet":"index.docker.io/lablup/python-ff"}createNotebookBadge(){const t=this.shadowRoot.querySelector("#notebook-badge-url").value,e=this.regularizeGithubURL(t).replace("https://raw.githubusercontent.com/","");let o="";if(""===t)this.notification.text=s("import.NoNotebookCode"),this.notification.show(),this.shadowRoot.querySelector("#notebook-badge-code").value="",this.shadowRoot.querySelector("#notebook-badge-code-markdown").value="";else{globalThis.isElectron?o="https://cloud.backend.ai/github?":(o=window.location.protocol+"//"+window.location.hostname,window.location.port&&(o=o+":"+window.location.port),o+="/github?");const t=`<a href="${o+e}"><img src="https://www.backend.ai/assets/badge.svg" /></a>`,i=`[![Run on Backend.AI](https://www.backend.ai/assets/badge.svg)](${o+e})`;this.shadowRoot.querySelector("#notebook-badge-code").value=t,this.shadowRoot.querySelector("#notebook-badge-code-markdown").value=i}}_copyTextArea(t){let e="";if("value"in t.target&&(e=t.target.value),""!==e)if(0===e.length)this.notification.text=s("import.NoNotebookCode"),this.notification.show();else if(void 0!==navigator.clipboard)navigator.clipboard.writeText(e).then((()=>{this.notification.text=s("import.NotebookBadgeCodeCopied"),this.notification.show()}),(t=>{console.error(s("import.CouldNotCopyText"),t)}));else{const t=document.createElement("input");t.type="text",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.notification.text=s("import.NotebookBadgeCodeCopied"),this.notification.show()}}async _getFolderList(){const t=await globalThis.backendaiclient.vfolder.list_hosts();if(this.vhosts=t.allowed,this.vhost=t.default,this.allowed_folder_type.includes("group")){const t=await globalThis.backendaiclient.group.list();this.allowedGroups=t.groups}}urlTextfieldChanged(t,e,o){const i=this.shadowRoot.querySelector(`#${e}`);""!==t.target.value&&t.currentTarget.checkValidity()?(i.removeAttribute("disabled"),this.setAttribute(o,"")):(this.notification.text=s("import.WrongURLType"),i.setAttribute("disabled","true"),this.setAttribute(o,""===t.target.value?"":s("import.WrongURLType")),this.notification.show()),this.requestUpdate()}render(){return l`
      <lablup-activity-panel title="${c("import.ImportNotebook")}" elevation="1" horizontalsize="2x">
        <div slot="message">
          <div class="horizontal wrap layout center">
            <mwc-textfield id="notebook-url" label="${c("import.NotebookURL")}"
                           autoValidate validationMessage="${s("import.WrongURLType")}"
                           pattern="^(https?):\/\/([\\w\.\/\-]{1,})\.ipynb$"
                           maxLength="2048" placeholder="${c("maxLength.2048chars")}" 
                           @change="${t=>this.urlTextfieldChanged(t,"import-notebook-button","importNotebookMessage")}"></mwc-textfield>
            <mwc-button id="import-notebook-button" disabled icon="cloud_download" @click="${()=>this.getNotebookFromURL()}">
              <span>${c("import.GetAndRunNotebook")}</span>
            </mwc-button>
          </div>
          ${this.importNotebookMessage}
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
                             autoValidate validationMessage="${s("import.WrongURLType")}"
                             pattern="^(https?):\/\/([\\w\.\/\-]{1,})\.ipynb$"
                             maxLength="2048" placeholder="${c("maxLength.2048chars")}" 
                             @change="${t=>this.urlTextfieldChanged(t,"create-notebook-button")}"></mwc-textfield>
              <mwc-button id="create-notebook-button" disabled fullwidth @click="${()=>this.createNotebookBadge()}" icon="code">${c("import.CreateButtonCode")}</mwc-button>
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
                             autoValidate validationMessage="${s("import.WrongURLType")}"
                             pattern="^(https?):\/\/github\.com\/([\\w\.\/\-]{1,})\.git$"
                             maxLength="2048" placeholder="${c("maxLength.2048chars")}" 
                             @change="${t=>this.urlTextfieldChanged(t,"import-github-repo-button","importGithubMessage")}"></mwc-textfield>
              <mwc-select class="github-select" id="github-add-folder-host" label="${c("data.Host")}">
                ${this.vhosts.map(((t,e)=>l`
                <mwc-list-item hasMeta value="${t}" ?selected="${t===this.vhost}">
                    <span>${t}</span>
                </mwc-list-item>
                `))}
              </mwc-select>
              <mwc-button id="import-github-repo-button" disabled class="left-align" icon="cloud_download" @click="${()=>this.getGitHubRepoFromURL()}">
                <span>${c("import.GetToFolder")}</span>
              </mwc-button>
            </div>
            ${this.importGithubMessage}
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
                             autoValidate validationMessage="${s("import.WrongURLType")}"
                             pattern="^(https?):\/\/gitlab\.com\/([\\w\.\/\-]{1,})\.git$"
                             maxLength="2048" placeholder="${c("maxLength.2048chars")}" 
                             @change="${t=>this.urlTextfieldChanged(t,"import-gitlab-repo-button","importGitlabMessage")}"></mwc-textfield>
              <mwc-textfield id="gitlab-default-branch-name" label="${c("import.GitlabDefaultBranch")}"
                             maxLength="200" placeholder="${c("maxLength.200chars")}"></mwc-textfield>
              <mwc-select id="gitlab-add-folder-host" label="${c("data.Host")}">
                ${this.vhosts.map(((t,e)=>l`
                <mwc-list-item hasMeta value="${t}" ?selected="${t===this.vhost}">
                    <span>${t}</span>
                </mwc-list-item>
                `))}
              </mwc-select>
              <mwc-button id="import-gitlab-repo-button" disabled class="left-align" icon="cloud_download" @click="${()=>this.getGitlabRepoFromURL()}">
                <span>${c("import.GetToFolder")}</span>
              </mwc-button>
            </div>
            ${this.importGitlabMessage}
          </div>
        </lablup-activity-panel>
      </div>
`}};d([h({type:String})],m.prototype,"condition",void 0),d([h({type:Boolean})],m.prototype,"authenticated",void 0),d([h({type:Object})],m.prototype,"indicator",void 0),d([h({type:Object})],m.prototype,"notification",void 0),d([h({type:Object})],m.prototype,"sessionLauncher",void 0),d([h({type:String})],m.prototype,"requestURL",void 0),d([h({type:String})],m.prototype,"queryString",void 0),d([h({type:String})],m.prototype,"environment",void 0),d([h({type:String})],m.prototype,"importNotebookMessage",void 0),d([h({type:String})],m.prototype,"importGithubMessage",void 0),d([h({type:String})],m.prototype,"importGitlabMessage",void 0),d([h({type:Array})],m.prototype,"allowedGroups",void 0),d([h({type:Array})],m.prototype,"allowed_folder_type",void 0),d([h({type:String})],m.prototype,"vhost",void 0),d([h({type:Array})],m.prototype,"vhosts",void 0),d([h({type:Object})],m.prototype,"storageInfo",void 0),d([h({type:String})],m.prototype,"_helpDescription",void 0),d([h({type:String})],m.prototype,"_helpDescriptionTitle",void 0),d([h({type:String})],m.prototype,"_helpDescriptionIcon",void 0),m=d([p("backend-ai-import-view")],m);var u=m;export{u as default};