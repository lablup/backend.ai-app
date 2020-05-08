import{_ as e,p as t,c as i,d as o,e as a,I as s,a as l,A as r,f as n,b as c,i as d,a1 as u,h,t as p,g as _}from"./backend-ai-console-a8524ce7.js";import"./lablup-loading-spinner-1b9bc884.js";import"./iron-resizable-behavior-c7edc396.js";import"./vaadin-grid-db23b19c.js";import"./paper-dropdown-menu-53ae0330.js";import"./iron-iconset-svg-19993a4c.js";import"./paper-item-9eb3436d.js";import"./radio-behavior-a572bf14.js";import"./expansion-1ed72bc2.js";import"./label-c25b9eaa.js";import"./input-behavior-7923de84.js";import"./textfield-8909a9b0.js";import"./vaadin-grid-sorter-f16f385c.js";import"./vaadin-grid-sort-column-0ee0e80a.js";import"./iconset-00aad4a4.js";import{J as v}from"./json_to_csv-0a6876b9.js";import"./tab-group-ce3e1146.js";import"./vaadin-item-fa3fd0a1.js";import"./switch-384b9cb2.js";import"./textarea-3c939b77.js";
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let m=class extends o{constructor(){super(),this.keypairInfo={user_id:"1",access_key:"ABC",secret_key:"ABC",last_used:"",is_admin:!1,resource_policy:"",rate_limit:5e3,concurrency_used:0,num_queries:0,created_at:""},this.isAdmin=!1,this.condition="active",this.keypairs=Object(),this.resourcePolicy=Object(),this.indicator=Object(),this._boundKeyageRenderer=this.keyageRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this),this.keypairView=Object(),this._pageSize=10,this.keypairGrid=Object(),this._currentPage=1,this._totalCredentialCount=0}static get styles(){return[a,s,l,r,n,c`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 400px);
        }

        wl-button > wl-icon {
          --icon-size: 24px;
          padding: 0;
        }

        wl-icon {
          --icon-size: 16px;
          padding: 0;
        }

        wl-card h4 {
          font-size: 14px;
          padding: 5px 15px 5px 12px;
          margin: 0 0 10px 0;
          display: block;
          border-bottom: 1px solid #DDD;
        }

        vaadin-item {
          font-size: 13px;
          font-weight: 100;
        }

        div.indicator,
        span.indicator {
          font-size: 9px;
          margin-right: 5px;
        }

        div.configuration {
          width: 70px !important;
        }

        div.configuration wl-icon {
          padding-right: 5px;
        }

        wl-button.fab {
          --button-bg: var(--paper-light-green-600);
          --button-bg-hover: var(--paper-green-600);
          --button-bg-active: var(--paper-green-900);
          color: var(--paper-green-900);
        }

        .gutterBottom {
          margin-bottom: 20px;
        }

        #keypair-modify-save {
          width: 100%;
          box-sizing: border-box;
          --button-bg: var(--paper-light-green-50);
          --button-bg-hover: var(--paper-green-100);
          --button-bg-active: var(--paper-green-600);
        }

        #policy-list {
          width: 100%;
        }

        wl-label {
          --label-color: black;
        }

        wl-icon.pagination {
          color: var(--paper-grey-700);
        }

        wl-button.pagination {
          width: 15px;
          height: 15px;
          padding: 10 10px;
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
          --button-bg: transparent;
          --button-bg-hover: var(--paper-red-100);
          --button-bg-active: var(--paper-red-600);
          --button-bg-active-flat: var(--paper-red-600);
        }

      `]}firstUpdated(){this.notification=globalThis.lablupNotification}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._refreshKeyData(),this.isAdmin=globalThis.backendaiclient.is_admin,this.keypairGrid=this.shadowRoot.querySelector("#keypair-grid")},!0):(this._refreshKeyData(),this.isAdmin=globalThis.backendaiclient.is_admin,this.keypairGrid=this.shadowRoot.querySelector("#keypair-grid")))}_refreshKeyData(e=null){let t=!0;switch(this.condition){case"active":t=!0;break;default:t=!1}return globalThis.backendaiclient.resourcePolicy.get().then(e=>{let t=e.keypair_resource_policies;this.resourcePolicy=globalThis.backendaiclient.utils.gqlToObject(t,"name")}).then(()=>globalThis.backendaiclient.keypair.list(e,["access_key","is_active","is_admin","user_id","created_at","last_used","concurrency_limit","concurrency_used","rate_limit","num_queries","resource_policy"],t)).then(e=>{let t=e.keypairs;Object.keys(t).map((e,i)=>{var o=t[e];if(o.resource_policy in this.resourcePolicy){for(var a in this.resourcePolicy[o.resource_policy])"created_at"!==a&&(o[a]=this.resourcePolicy[o.resource_policy][a],"total_resource_slots"===a&&(o.total_resource_slots=JSON.parse(this.resourcePolicy[o.resource_policy][a])));o.created_at_formatted=this._humanReadableTime(o.created_at),o.elapsed=this._elapsed(o.created_at),"cpu"in o.total_resource_slots||"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.cpu="-"),"mem"in o.total_resource_slots?o.total_resource_slots.mem=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(o.total_resource_slots.mem,"g")):"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.mem="-"),"cuda.device"in o.total_resource_slots&&(o.total_resource_slots.cuda_device=o.total_resource_slots["cuda.device"]),"cuda.shares"in o.total_resource_slots&&(o.total_resource_slots.cuda_shares=o.total_resource_slots["cuda.shares"]),"cuda_device"in o.total_resource_slots==!1&&"cuda_shares"in o.total_resource_slots==!1&&"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.cuda_shares="-",o.total_resource_slots.cuda_device="-"),"rocm.device"in o.total_resource_slots&&(o.total_resource_slots.rocm_device=o.total_resource_slots["rocm.device"]),"rocm_device"in o.total_resource_slots==!1&&"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.rocm_device="-"),"tpu.device"in o.total_resource_slots&&(o.total_resource_slots.tpu_device=o.total_resource_slots["tpu.device"]),"tpu_device"in o.total_resource_slots==!1&&"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.tpu_device="-"),["cpu","mem","cuda_shares","cuda_device","rocm_device","tpu_device"].forEach(e=>{o.total_resource_slots[e]=this._markIfUnlimited(o.total_resource_slots[e])})}}),this.keypairs=t,this._totalCredentialCount=this.keypairs.length>0?this.keypairs.length:1,this._updateItemsFromPage(1)}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}async _showKeypairDetail(e){const t=e.target.closest("#controls")["access-key"];try{const e=await this._getKeyData(t);this.keypairInfo=e.keypair,this.shadowRoot.querySelector("#keypair-info-dialog").show()}catch(e){e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}}async _modifyResourcePolicy(e){const t=e.target.closest("#controls")["access-key"];try{const e=await this._getKeyData(t);this.keypairInfo=e.keypair,this.shadowRoot.querySelector("#policy-list").value=this.keypairInfo.resource_policy,this.shadowRoot.querySelector("#keypair-modify-dialog").show()}catch(e){e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}}async _getKeyData(e){return globalThis.backendaiclient.keypair.info(e,["access_key","secret_key","is_active","is_admin","user_id","created_at","last_used","concurrency_limit","concurrency_used","rate_limit","num_queries","resource_policy"])}refresh(){this._refreshKeyData()}_isActive(){return"active"===this.condition}_deleteKey(e){const t=e.target.closest("#controls")["access-key"];globalThis.backendaiclient.keypair.delete(t).then(e=>{if(e.delete_keypair&&!e.delete_keypair.ok)throw{title:"Unable to delete keypair",message:e.delete_keypair.msg};this.refresh()}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_revokeKey(e){this._mutateKey(e,!1)}_reuseKey(e){this._mutateKey(e,!0)}_mutateKey(e,t){const i=e.target.closest("#controls")["access-key"];let o=this.keypairs.find(this._findKeyItem,i),a={is_active:t,is_admin:o.is_admin,resource_policy:o.resource_policy,rate_limit:o.rate_limit,concurrency_limit:o.concurrency_limit};globalThis.backendaiclient.keypair.mutate(i,a).then(e=>{let t=new CustomEvent("backend-ai-credential-refresh",{detail:this});document.dispatchEvent(t)}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_findKeyItem(e){return e.access_key=this}_elapsed(e,t){var i=new Date(e);if("active"==this.condition)var o=new Date;else o=new Date;var a=Math.floor((o.getTime()-i.getTime())/1e3);return Math.floor(a/86400)}_humanReadableTime(e){return new Date(e).toUTCString()}_indexRenderer(e,t,i){let o=i.index+1;u(h`
        <div>${o}</div>
      `,e)}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":e}_updateItemsFromPage(e){if("number"!=typeof e){let t=e.target;"button"!==t.role&&(t=e.target.closest("wl-button")),"previous-page"===t.id?this._currentPage-=1:this._currentPage+=1}let t=(this._currentPage-1)*this.keypairGrid.pageSize,i=this._currentPage*this.keypairGrid.pageSize;this.keypairView=this.keypairs.slice(t,i),console.log()}keyageRenderer(e,t,i){u(h`
            <div class="layout vertical">
              <span>${i.item.elapsed} ${p("credential.Days")}</span>
              <span class="indicator">(${i.item.created_at_formatted})</span>
            </div>
      `,e)}controlRenderer(e,t,i){u(h`
            <div id="controls" class="layout horizontal flex center"
                 .access-key="${i.item.access_key}">
              <wl-button class="fg green" fab flat inverted @click="${e=>this._showKeypairDetail(e)}">
                 <wl-icon>assignment</wl-icon>
              </wl-button>
              <wl-button class="fg blue" fab flat inverted @click="${e=>this._modifyResourcePolicy(e)}">
                <wl-icon>settings</wl-icon>
              </wl-button>
              ${this.isAdmin&&this._isActive()?h`
                <wl-button class="fg blue" fab flat inverted @click="${e=>this._revokeKey(e)}">
                   <wl-icon>delete</wl-icon>
                </wl-button>
                <wl-button class="fg red" fab flat inverted @click="${e=>this._deleteKey(e)}">
                   <wl-icon>delete_forever</wl-icon>
                </wl-button>
              `:h``}
              ${!1===this._isActive()?h`
                <wl-button class="fg blue" fab flat inverted @click="${e=>this._reuseKey(e)}">
                   <wl-icon>redo</wl-icon>
                </wl-button>
              `:h``}
            </div>
      `,e)}_hideDialog(e){e.target.closest("wl-dialog").hide()}_saveKeypairModification(e){const t=this.shadowRoot.querySelector("#policy-list").value,i=this.shadowRoot.querySelector("#rate-limit").value;let o={};t!==this.keypairInfo.resource_policy&&(o=Object.assign(Object.assign({},o),{resource_policy:t})),i!==this.keypairInfo.rate_limit&&(o=Object.assign(Object.assign({},o),{rate_limit:i})),0===Object.entries(o).length?(this.notification.text="No changes were made",this.notification.show()):globalThis.backendaiclient.keypair.mutate(this.keypairInfo.access_key,o).then(e=>{e.modify_keypair.ok?(this.notification.text="Successfully modified",this.refresh()):this.notification.text="Error",this.notification.show()}),this._hideDialog(e)}render(){return h`
      <vaadin-grid page-size="${this._pageSize}" theme="row-stripes column-borders compact" aria-label="Credential list"
                   id="keypair-grid" .items="${this.keypairView}">
        <vaadin-grid-column width="40px" flex-grow="0" header="#" .renderer="${this._indexRenderer}"></vaadin-grid-column>

        <vaadin-grid-column resizable>
          <template class="header">
            <vaadin-grid-sorter path="user_id">${p("credential.UserID")}</vaadin-grid-sorter>
          </template>
          <template>
            <div class="layout horizontal center flex">
              <div>[[item.user_id]]</div>
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable>
          <template class="header">${p("general.AccessKey")}</template>
          <template>
            <div class="monospace">[[item.access_key]]</div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable>
          <template class="header">
            <vaadin-grid-sorter path="is_admin">${p("credential.Permission")}</vaadin-grid-sorter>
          </template>
          <template>
            <div class="layout horizontal center flex">
              <template is="dom-if" if="[[item.is_admin]]">
                <lablup-shields app="" color="red" description="admin" ui="flat"></lablup-shields>
              </template>
              <lablup-shields app="" description="user" ui="flat"></lablup-shields>
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-sort-column resizable header="${p("credential.KeyAge")}" path="created_at" .renderer="${this._boundKeyageRenderer}">
        </vaadin-grid-sort-column>

        <vaadin-grid-column width="150px" resizable>
          <template class="header">${p("credential.ResourcePolicy")}</template>
          <template>
            <div class="layout horizontal wrap center">
              <div class="layout horizontal configuration">
                <wl-icon class="fg green">developer_board</wl-icon>
                <span>[[item.total_resource_slots.cpu]]</span>
                <span class="indicator">${p("general.cores")}</span>
              </div>
              <div class="layout horizontal configuration">
                <wl-icon class="fg green">memory</wl-icon>
                <span>[[item.total_resource_slots.mem]]</span>
                <span class="indicator">GB</span>
              </div>
            </div>
            <div class="layout horizontal wrap center">
              <template is="dom-if" if="[[item.total_resource_slots.cuda_device]]">
                <div class="layout horizontal configuration">
                  <wl-icon class="fg green">view_module</wl-icon>
                  <span>[[item.total_resource_slots.cuda_device]]</span>
                  <span class="indicator">GPU</span>
                </div>
              </template>
              <template is="dom-if" if="[[item.total_resource_slots.cuda_shares]]">
                <div class="layout horizontal configuration">
                  <wl-icon class="fg green">view_module</wl-icon>
                  <span>[[item.total_resource_slots.cuda_shares]]</span>
                  <span class="indicator">fGPU</span>
                </div>
              </template>
            </div>
            <div class="layout horizontal wrap center">
              <div class="layout horizontal configuration">
                <wl-icon class="fg green">cloud_queue</wl-icon>
                <span>[[item.max_vfolder_size]]</span>
                <span class="indicator">GB</span>
              </div>
              <div class="layout horizontal configuration">
                <wl-icon class="fg green">folder</wl-icon>
                <span>[[item.max_vfolder_count]]</span>
                <span class="indicator">${p("general.Folders")}</span>
              </div>
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable>
          <template class="header">${p("credential.Allocation")}</template>
          <template>
            <div class="layout horizontal center flex">
              <div class="vertical start layout">
                <div style="font-size:11px;width:40px;">[[item.concurrency_used]] /
                  [[item.concurrency_limit]]
                </div>
                <span class="indicator">Sess.</span>
              </div>
              <div class="vertical start layout">
                <span style="font-size:8px">[[item.rate_limit]] <span class="indicator">req./15m.</span></span>
                <span style="font-size:8px">[[item.num_queries]] <span class="indicator">queries</span></span>
              </div>
            </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="150px" resizable header="${p("general.Control")}" .renderer="${this._boundControlRenderer}">
        </vaadin-grid-column>
      </vaadin-grid>
      <div class="horizontal center-justified layout flex" style="padding: 10px;">
        <wl-button class="pagination" id="previous-page"
                   ?disabled="${1===this._currentPage}"
                   @click="${e=>{this._updateItemsFromPage(e)}}">
          <wl-icon class="pagination">navigate_before</wl-icon>
        </wl-button>
        <wl-label style="padding: 5px 15px 0px 15px;"> ${this._currentPage} / ${Math.ceil(this._totalCredentialCount/this._pageSize)} </wl-label>
        <wl-button class="pagination" id="next-page"
                   ?disabled="${this._totalCredentialCount<=this._pageSize*this._currentPage}"
                   @click="${e=>{this._updateItemsFromPage(e)}}">
          <wl-icon class="pagination">navigate_next</wl-icon>
        </wl-button>
      </div>
      <wl-dialog id="keypair-info-dialog" fixed backdrop blockscrolling container="${document.body}">
        <wl-card elevation="0" class="intro" style="margin: 0;">
          <h3 class="horizontal center layout" style="border-bottom:1px solid #ddd;">
            <span style="margin-right:15px;">Keypair Detail</span>
            ${this.keypairInfo.is_admin?h`
              <lablup-shields app="" color="red" description="admin" ui="flat"></lablup-shields>
              `:h``}
            <lablup-shields app="" description="user" ui="flat"></lablup-shields>
            <div class="flex"></div>
            <wl-button class="fab" fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <div class="horizontal layout">
            <div style="width:335px;">
              <h4>${p("credential.Information")}</h4>
              <div role="listbox" style="margin: 0;">
                <vaadin-item>
                  <div><strong>User ID</strong></div>
                  <div secondary>${this.keypairInfo.user_id}</div>
                </vaadin-item>
                <vaadin-item>
                  <div><strong>${p("general.AccessKey")}</strong></div>
                  <div secondary>${this.keypairInfo.access_key}</div>
                </vaadin-item>
                <vaadin-item>
                  <div><strong>${p("general.SecretKey")}</strong></div>
                  <div secondary>${this.keypairInfo.secret_key}</div>
                </vaadin-item>
                <vaadin-item>
                  <div><strong>${p("credential.Created")}</strong></div>
                  <div secondary>${this.keypairInfo.created_at}</div>
                </vaadin-item>
                <vaadin-item>
                  <div><strong>${p("credential.Lastused")}</strong></div>
                  <div secondary>${this.keypairInfo.last_used}</div>
                </vaadin-item>
              </div>
            </div>
            <div style="width:335px;">
              <h4>${p("credential.Allocation")}</h4>
              <div role="listbox" style="margin: 0;">
                <vaadin-item>
                  <div><strong>${p("credential.ResourcePolicy")}</strong></div>
                  <div secondary>${this.keypairInfo.resource_policy}</div>
                </vaadin-item>
                <vaadin-item>
                  <div><strong>${p("credential.NumberOfQueries")}</strong></div>
                  <div secondary>${this.keypairInfo.num_queries}</div>
                </vaadin-item>
                <vaadin-item>
                  <div><strong>${p("credential.ConcurrentSessions")}</strong></div>
                  <div secondary>${this.keypairInfo.concurrency_used} ${p("credential.active")} /
                    ${this.keypairInfo.concurrency_used} ${p("credential.concurrentsessions")}.
                  </div>
                </vaadin-item>
                <vaadin-item>
                  <div><strong>${p("credential.RateLimit")}</strong></div>
                  <div secondary>${this.keypairInfo.rate_limit} ${p("credential.for900seconds")}.</div>
                </vaadin-item>
              </div>
            </div>
          </div>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="keypair-modify-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="0" class="intro" style="margin: 0;">
          <h3 class="horizontal center layout" style="border-bottom:1px solid #ddd;">
            <span>Modify Keypair Resource Policy</span>
            <wl-button class="fab" fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <div class="vertical layout" style="padding: 20px">
            <div class="vertical layout center-justified gutterBottom">
              <wl-label>
                Resource Policy
                <wl-select id="policy-list" label="Select Policy">
                  ${Object.keys(this.resourcePolicy).map(e=>h`
                      <option value=${this.resourcePolicy[e].name}>
                        ${this.resourcePolicy[e].name}
                      </option>
                    `)}
                </wl-select>
              </wl-label>
            </div>
            <div class="vertical layout center-justified gutterBottom">
              <wl-label>
                Rate Limit
                <wl-textfield
                  type="number"
                  id="rate-limit"
                  min="1"
                  label="Rate Limit"
                  value="${this.keypairInfo.rate_limit}"
                ></wl-textfield>
              </wl-label>
            </div>
            <wl-button
              id="keypair-modify-save"
              class="fg green"
              outlined
              @click=${e=>this._saveKeypairModification(e)}
            >
              <wl-icon>check</wl-icon>
              Save Changes
            </wl-button>
          </div>
        </wl-card>
      </wl-dialog>
    `}};e([t({type:Object})],m.prototype,"notification",void 0),e([t({type:Object})],m.prototype,"keypairInfo",void 0),e([t({type:Boolean})],m.prototype,"isAdmin",void 0),e([t({type:String})],m.prototype,"condition",void 0),e([t({type:Object})],m.prototype,"keypairs",void 0),e([t({type:Object})],m.prototype,"resourcePolicy",void 0),e([t({type:Object})],m.prototype,"indicator",void 0),e([t({type:Object})],m.prototype,"_boundKeyageRenderer",void 0),e([t({type:Object})],m.prototype,"_boundControlRenderer",void 0),e([t({type:Object})],m.prototype,"keypairView",void 0),e([t({type:Number})],m.prototype,"_pageSize",void 0),e([t({type:Object})],m.prototype,"keypairGrid",void 0),e([t({type:Number})],m.prototype,"_currentPage",void 0),e([t({type:Number})],m.prototype,"_totalCredentialCount",void 0),m=e([i("backend-ai-credential-list")],m);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let y=class extends o{constructor(){super(),this.visible=!1,this.keypairs={},this.resourcePolicy={},this.keypairInfo={},this.is_admin=!1,this.active=!1,this.condition="active",this.cpu_resource={},this.ram_resource={},this.gpu_resource={},this.fgpu_resource={},this.concurrency_limit={},this.idle_timeout={},this.vfolder_capacity={},this.vfolder_max_limit={},this.container_per_session_limit={},this.allowed_vfolder_hosts=[],this.default_vfolder_host="",this.resource_policy_names=Array(),this.current_policy_name="",this._boundResourceRenderer=this.resourceRenderer.bind(this),this._boundConcurrencyRenderer=this.concurrencyRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this)}static get styles(){return[a,s,l,c`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 300px);
        }

        paper-item {
          height: 30px;
          --paper-item-min-height: 30px;
        }

        wl-icon.indicator {
          width: 16px;
          height: 16px;
          --icon-size: 16px;
          min-width: 16px;
          min-height: 16px;
          padding: 0;
        }

        wl-button {
          --button-fab-size: 40px;
          margin-right: 5px;
        }

        vaadin-item {
          font-size: 13px;
          font-weight: 100;
        }

        div.indicator,
        span.indicator {
          font-size: 9px;
          margin-right: 5px;
        }

        div.configuration {
          width: 70px !important;
        }

        div.configuration wl-icon {
          padding-right: 5px;
        }

        wl-button.create-button {
          width: 330px;
          --button-bg: white;
          --button-bg-hover: var(--paper-green-100);
          --button-bg-active: var(--paper-green-600);
        }

        wl-label {
          width: 100%;
          min-width: 60px;
          font-size: 11px;
          --label-font-family: Roboto, Noto, sans-serif;
        }

        wl-label.folders {
          margin: 3px 0px 7px 0px;
        }

        wl-label.unlimited {
          margin: 4px 0px 0px 0px;
        }

        wl-list-item {
          width: 100%;
        }

        wl-textfield {
          width: 100%;
          --input-padding-top-bottom: 0px;
          --input-font-family: Roboto, Noto, sans-serif;
        }

        wl-checkbox {
          --checkbox-size: 10px;
          --checkbox-border-radius: 2px;
          --checkbox-bg-checked: var(--paper-green-800);
          --checkbox-checkmark-stroke-color: var(--paper-lime-100);
          --checkbox-color-checked: var(--paper-green-800);
        }

        mwc-textfield {
          width: 100%;
          --mdc-text-field-fill-color: transparent;
          --mdc-theme-primary: var(--paper-green-600);
        }
      `]}render(){return h`
      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Resource Policy list"
                   .items="${this.resourcePolicy}">
        <vaadin-grid-column width="40px" flex-grow="0" header="#" .renderer="${this._indexRenderer}"></vaadin-grid-column>
        <vaadin-grid-column resizable>
          <template class="header">
            <vaadin-grid-sorter path="name">${p("resourcePolicy.Name")}</vaadin-grid-sorter>
          </template>
          <template>
            <div class="layout horizontal center flex">
              <div>[[item.name]]</div>
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column width="150px" resizable header="${p("resourcePolicy.Resources")}" .renderer="${this._boundResourceRenderer}">
        </vaadin-grid-column>

        <vaadin-grid-column resizable header="${p("resourcePolicy.Concurrency")}" .renderer="${this._boundConcurrencyRenderer}">
        </vaadin-grid-column>

        <vaadin-grid-column resizable>
          <template class="header">
            <vaadin-grid-sorter path="max_containers_per_session">${p("resourcePolicy.ClusterSize")}</vaadin-grid-sorter>
          </template>
          <template>
            <div>[[item.max_containers_per_session]]</div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable>
          <template class="header">${p("resourcePolicy.StorageNodes")}</template>
          <template>
            <div class="layout horizontal center flex">
              <div class="vertical start layout">
                <div>[[item.allowed_vfolder_hosts]]
                </div>
              </div>
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable header="${p("general.Control")}" .renderer="${this._boundControlRenderer}">
        </vaadin-grid-column>

      </vaadin-grid>
      <wl-dialog id="modify-policy-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="1" class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>${p("resourcePolicy.UpdateResourcePolicy")}</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <form id="login-form">
            <fieldset>
              <mwc-textfield id="id_new_policy_name" label="${p("resourcePolicy.PolicyName")}" pattern="^[a-zA-Z0-9_-]+$"
                             validationMessage="Policy name is Required."
                             required></mwc-textfield>
              <h4>${p("resourcePolicy.ResourcePolicy")}</h4>
              <div class="horizontal center layout">
                  <div class="vertical layout" style="margin: 0px 10px 0px 0px;">
                    <wl-label>CPU</wl-label>
                    <wl-textfield id="cpu-resource" type="number"
                                  @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                      <wl-label class="unlimited">
                        <wl-checkbox @change="${e=>this._toggleCheckbox(e)}" style="border-width: 1px;"></wl-checkbox>
                        ${p("resourcePolicy.Unlimited")}
                      </wl-label>
                  </div>
                  <div class="vertical layout" style="margin: 0px 10px 0px 10px;">
                    <wl-label>RAM(GB)</wl-label>
                    <wl-textfield id="ram-resource" type="number"
                                  @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                    <wl-label class="unlimited">
                      <wl-checkbox @change="${e=>this._toggleCheckbox(e)}" style="border-width: 1px;"></wl-checkbox>
                      ${p("resourcePolicy.Unlimited")}
                    </wl-label>
                  </div>
                  <div class="vertical layout" style="margin: 0px 10px 0px 10px;">
                    <wl-label>GPU</wl-label>
                    <wl-textfield id="gpu-resource" type="number"
                                  @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                    <wl-label class="unlimited">
                      <wl-checkbox @change="${e=>this._toggleCheckbox(e)}" style="border-width: 1px;"></wl-checkbox>
                      ${p("resourcePolicy.Unlimited")}
                    </wl-label>
                  </div>
                  <div class="vertical layout" style="margin: 0px 0px 0px 10px;">
                    <wl-label>fGPU</wl-label>
                    <wl-textfield id="fgpu-resource" type="number"
                                  @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                    <wl-label class="unlimited">
                      <wl-checkbox @change="${e=>this._toggleCheckbox(e)}" style="border-width: 1px;"></wl-checkbox>
                      ${p("resourcePolicy.Unlimited")}
                    </wl-label>
                  </div>
              </div>
              <h4>${p("resourcePolicy.Sessions")}</h4>
              <div class="horizontal center layout">
                <div class="vertical left layout">
                    <wl-label>${p("resourcePolicy.ContainerPerSession")}</wl-label>
                    <wl-textfield id="container-per-session-limit" type="number" @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                    <wl-label class="unlimited">
                      <wl-checkbox @change="${e=>this._toggleCheckbox(e)}" style="border-width: 1px;"></wl-checkbox>
                      ${p("resourcePolicy.Unlimited")}
                    </wl-label>
                  </div>
                  <div class="vertical left layout" style="margin: 0px 15px;">
                    <wl-label>${p("resourcePolicy.IdleTimeoutSec")}</wl-label>
                    <wl-textfield id="idle-timeout" type="number" @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                    <wl-label class="unlimited">
                      <wl-checkbox @change="${e=>this._toggleCheckbox(e)}" style="border-width: 1px;"></wl-checkbox>
                      ${p("resourcePolicy.Unlimited")}
                    </wl-label>
                  </div>
                  <div class="vertical left layout">
                      <wl-label>${p("resourcePolicy.ConcurrentJobs")}</wl-label>
                      <wl-textfield id="concurrency-limit" type="number" @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                      <wl-label class="unlimited">
                        <wl-checkbox @change="${e=>this._toggleCheckbox(e)}" style="border-width: 1px;"></wl-checkbox>
                       ${p("resourcePolicy.Unlimited")}
                      </wl-label>
                  </div>
              </div>
              <h4 style="margin-bottom:0px;">${p("resourcePolicy.Folders")}</h4>
              <div class="horizontal center layout">
                <div class="vertical layout">
                <paper-dropdown-menu id="allowed_vfolder-hosts" label="Allowed hosts">
                  <paper-listbox slot="dropdown-content" selected="0">
                    ${this.allowed_vfolder_hosts.map(e=>h`
                      <paper-item value="${e}" style="margin: 0px 0px 1px 0px;">${e}</paper-item>
                    `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                </div>
                <div class="vertical layout" style="margin: 21px 15px 0;">
                  <wl-label class="folders">${p("resourcePolicy.Capacity")}(GB)</wl-label>
                  <wl-textfield id="vfolder-capacity-limit" type="number" @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                  <wl-label class="unlimited">
                    <wl-checkbox @change="${e=>this._toggleCheckbox(e)}" style="border-width: 1px;"></wl-checkbox>
                    ${p("resourcePolicy.Unlimited")}
                </wl-label>
                </div>
                <div class="vertical layout">
                  <wl-label class="folders">Max.#</wl-label>
                  <wl-textfield id="vfolder-count-limit" type="number" @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                </div>
              </div>

              <br/><br/>
              <wl-button class="fg blue create-button" id="create-policy-button" type="button"
                outlined @click="${()=>this._modifyResourcePolicy()}">
                <wl-icon>add</wl-icon>
                ${p("button.Update")}
              </wl-button>
            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>
    `}_indexRenderer(e,t,i){let o=i.index+1;u(h`
        <div>${o}</div>
      `,e)}_hideDialog(e){e.target.closest("wl-dialog").hide()}resourceRenderer(e,t,i){u(h`
        <div class="layout horizontal wrap center">
          <div class="layout horizontal configuration">
            <wl-icon class="fg green indicator">developer_board</wl-icon>
            <span>${this._markIfUnlimited(i.item.total_resource_slots.cpu)}</span>
            <span class="indicator">cores</span>
          </div>
          <div class="layout horizontal configuration">
            <wl-icon class="fg green indicator">memory</wl-icon>
            <span>${this._markIfUnlimited(i.item.total_resource_slots.mem)}</span>
            <span class="indicator">GB</span>
          </div>
        </div>
        <div class="layout horizontal wrap center">
        ${i.item.total_resource_slots.cuda_device?h`
          <div class="layout horizontal configuration">
            <wl-icon class="fg green indicator">view_module</wl-icon>
            <span>${this._markIfUnlimited(i.item.total_resource_slots.cuda_device)}</span>
            <span class="indicator">GPU</span>
          </div>
`:h``}
        ${i.item.total_resource_slots.cuda_shares?h`
          <div class="layout horizontal configuration">
            <wl-icon class="fg green indicator">view_module</wl-icon>
            <span>${this._markIfUnlimited(i.item.total_resource_slots.cuda_shares)}</span>
            <span class="indicator">fGPU</span>
          </div>
`:h``}
        </div>
        <div class="layout horizontal wrap center">
          <div class="layout horizontal configuration">
            <wl-icon class="fg green indicator">cloud_queue</wl-icon>
            <span>${this._markIfUnlimited(i.item.max_vfolder_size)}</span>
            <span class="indicator">GB</span>
          </div>
          <div class="layout horizontal configuration">
            <wl-icon class="fg green indicator">folder</wl-icon>
            <span>${this._markIfUnlimited(i.item.max_vfolder_count)}</span>
            <span class="indicator">Folders</span>
          </div>
        </div>
      `,e)}concurrencyRenderer(e,t,i){u(h`
        <div>${1e6===i.item.max_concurrent_sessions?h`∞`:i.item.max_concurrent_sessions}</div>
    `,e)}controlRenderer(e,t,i){u(h`
        <div id="controls" class="layout horizontal flex center"
             .policy-name="${i.item.name}">
        ${this.is_admin?h`
              <wl-button fab flat inverted class="fg green controls-running" icon="settings"
                                 @click="${e=>this._launchResourcePolicyDialog(e)}"><wl-icon>settings</wl-icon></wl-button>
                                 `:h``}
        </div>
    `,e)}firstUpdated(){this.notification=globalThis.lablupNotification,this._validatePolicyName()}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._refreshPolicyData(),this._getResourceInfo(),this.is_admin=globalThis.backendaiclient.is_admin,this._getResourceInfo()},!0):(this._refreshPolicyData(),this._getResourceInfo(),this.is_admin=globalThis.backendaiclient.is_admin,this._getResourceInfo()))}_launchResourcePolicyDialog(e){this.updateCurrentPolicyToDialog(e),this.shadowRoot.querySelector("#id_new_policy_name").mdcFoundation.setValid(!0),this.shadowRoot.querySelector("#id_new_policy_name").isUiValid=!0,this.shadowRoot.querySelector("#modify-policy-dialog").show()}updateCurrentPolicyToDialog(e){const t=e.target.closest("#controls")["policy-name"];let i=globalThis.backendaiclient.utils.gqlToObject(this.resourcePolicy,"name");this.resource_policy_names=Object.keys(i);let o=i[t];this.shadowRoot.querySelector("#id_new_policy_name").value=t,this.current_policy_name=t,this.cpu_resource.value=o.total_resource_slots.cpu,this.ram_resource.value=o.total_resource_slots.mem,this.gpu_resource.value=o.total_resource_slots.cuda_device,this.fgpu_resource.value=o.total_resource_slots.cuda_shares,this.concurrency_limit.value=o.max_concurrent_sessions,this.idle_timeout.value=o.idle_timeout,this.container_per_session_limit.value=o.max_containers_per_session,this.vfolder_capacity.value=o.max_vfolder_size,this._updateInputStatus(this.cpu_resource),this._updateInputStatus(this.ram_resource),this._updateInputStatus(this.gpu_resource),this._updateInputStatus(this.fgpu_resource),this._updateInputStatus(this.concurrency_limit),this._updateInputStatus(this.idle_timeout),this._updateInputStatus(this.container_per_session_limit),this._updateInputStatus(this.vfolder_capacity),this.shadowRoot.querySelector("#vfolder-count-limit").value=o.max_vfolder_count,this.shadowRoot.querySelector("#vfolder-capacity-limit").value=o.max_vfolder_size,this.shadowRoot.querySelector("#allowed_vfolder-hosts").value=o.allowed_vfolder_hosts[0]}_refreshPolicyData(){return globalThis.backendaiclient.resourcePolicy.get().then(e=>e.keypair_resource_policies).then(e=>{let t=e;Object.keys(t).map((e,i)=>{var o=t[e];o.total_resource_slots=JSON.parse(o.total_resource_slots),"cpu"in o.total_resource_slots||"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.cpu="Unlimited"),"mem"in o.total_resource_slots?o.total_resource_slots.mem=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(o.total_resource_slots.mem,"g")):"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.mem="Unlimited"),"cuda.device"in o.total_resource_slots?0===o.total_resource_slots["cuda.device"]&&"UNLIMITED"===o.default_for_unspecified?o.total_resource_slots.cuda_device="Unlimited":o.total_resource_slots.cuda_device=o.total_resource_slots["cuda.device"]:"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.cuda_device="Unlimited"),"cuda.shares"in o.total_resource_slots?0===o.total_resource_slots["cuda.shares"]&&"UNLIMITED"===o.default_for_unspecified?o.total_resource_slots.cuda_shares="Unlimited":o.total_resource_slots.cuda_shares=o.total_resource_slots["cuda.shares"]:"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.cuda_shares="Unlimited")}),this.resourcePolicy=t}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}refresh(){this._refreshPolicyData()}_isActive(){return"active"===this.condition}_readResourcePolicyInput(){let e={},t=[];t.push(this.shadowRoot.querySelector("#allowed_vfolder-hosts").value);try{this._validateUserInput(this.cpu_resource),this._validateUserInput(this.ram_resource),this._validateUserInput(this.gpu_resource),this._validateUserInput(this.fgpu_resource),this._validateUserInput(this.concurrency_limit),this._validateUserInput(this.idle_timeout),this._validateUserInput(this.container_per_session_limit),this._validateUserInput(this.vfolder_capacity),this._validateUserInput(this.vfolder_max_limit)}catch(e){throw e}return e.cpu=this.cpu_resource.value,e.mem=this.ram_resource.value+"g",e["cuda.device"]=parseInt(this.gpu_resource.value),e["cuda.shares"]=parseFloat(this.fgpu_resource.value),this.concurrency_limit.value=""===this.concurrency_limit.value?1e6:parseInt(this.concurrency_limit.value),this.idle_timeout.value=""===this.idle_timeout.value?0:parseInt(this.idle_timeout.value),this.container_per_session_limit.value=""===this.container_per_session_limit.value?0:parseInt(this.container_per_session_limit.value),this.vfolder_capacity.value=""===this.vfolder_capacity.value?0:parseInt(this.vfolder_capacity.value),this.vfolder_max_limit.value=""===this.vfolder_max_limit.value?0:parseInt(this.vfolder_max_limit.value),Object.keys(e).map(t=>{isNaN(parseFloat(e[t]))&&delete e[t]}),{default_for_unspecified:"UNLIMITED",total_resource_slots:JSON.stringify(e),max_concurrent_sessions:this.concurrency_limit.value,max_containers_per_session:this.container_per_session_limit.value,idle_timeout:this.idle_timeout.value,max_vfolder_count:this.vfolder_max_limit.value,max_vfolder_size:this.vfolder_capacity.value,allowed_vfolder_hosts:t}}_modifyResourcePolicy(){let e=this.shadowRoot.querySelector("#id_new_policy_name"),t=e.value;if(e.checkValidity())try{let e=this._readResourcePolicyInput();globalThis.backendaiclient.resourcePolicy.mutate(t,e).then(({modify_keypair_resource_policy:e})=>{e.ok?(this.shadowRoot.querySelector("#modify-policy-dialog").hide(),this.notification.text="Resource policy successfully updated.",this.notification.show(),this.refresh()):e.msg&&(this.shadowRoot.querySelector("#modify-policy-dialog").hide(),this.notification.text=e.msg,this.notification.show(),this.refresh())}).catch(e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#modify-policy-dialog").hide(),this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}catch(e){this.notification.text=e.message,this.notification.show()}else e.reportValidity()}_deleteKey(e){const t=e.target.closest("#controls").accessKey;globalThis.backendaiclient.keypair.delete(t).then(e=>{this.refresh()}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_toggleCheckbox(e){const t=e.target,i=t.checked,o=t.closest("div").querySelector("wl-textfield");o.disabled=i,o.disabled||""===o.value&&(o.value=0)}_validateResourceInput(e){const t=e.target.closest("wl-textfield"),i=t.closest("div").querySelector(".unlimited");let o;if(o=i?i.querySelector("wl-checkbox"):null,t.value<0&&(t.value=0),""===t.value)try{if(!o||!o.checked)throw t.required=!0,t.focus(),{message:"Please input value or check unlimited."};t.required=!1,t.value=""}catch(e){this.notification.text=e.message,this.notification.show()}}_validateUserInput(e){if(e.disabled)e.value="";else if(""===e.value)throw{message:"Cannot Update Resource Policy. Please check input values."}}_validatePolicyName(){let e=this.shadowRoot.querySelector("#id_new_policy_name");e.validityTransform=(t,i)=>{if(i.valid){let i=this.resource_policy_names;i=i.filter(e=>e!==this.current_policy_name);const o=!i.includes(t);return o||(e.validationMessage="Policy Name Already Exists!"),{valid:o,customError:!o}}return i.patternMismatch?(e.validationMessage="Allows letters, numbers and -_.",{valid:i.valid,patternMismatch:!i.valid}):i.valueMissing?(e.validationMessage="Policy name is Required.",{valid:i.valid,valueMissing:!i.valid}):(e.validationMessage="Allows letters, numbers and -_.",{valid:i.valid,badInput:!i.valid})}}_updateInputStatus(e){let t=e,i=t.closest("div").querySelector("wl-checkbox");console.log(t.id),""===t.value||"0"===t.value||"concurrency-limit"===t.id&&"1000000"===t.value?(t.disabled=!0,i.checked=!0):(t.disabled=!1,i.checked=!1)}_markIfUnlimited(e){return["-",0,"0","Unlimited",1/0,"Infinity"].includes(e)?"∞":["NaN",NaN].includes(e)?"-":e}_getResourceInfo(){this.cpu_resource=this.shadowRoot.querySelector("#cpu-resource"),this.ram_resource=this.shadowRoot.querySelector("#ram-resource"),this.gpu_resource=this.shadowRoot.querySelector("#gpu-resource"),this.fgpu_resource=this.shadowRoot.querySelector("#fgpu-resource"),this.concurrency_limit=this.shadowRoot.querySelector("#concurrency-limit"),this.idle_timeout=this.shadowRoot.querySelector("#idle-timeout"),this.container_per_session_limit=this.shadowRoot.querySelector("#container-per-session-limit"),this.vfolder_capacity=this.shadowRoot.querySelector("#vfolder-capacity-limit"),this.vfolder_max_limit=this.shadowRoot.querySelector("#vfolder-count-limit")}};e([t({type:Boolean})],y.prototype,"visible",void 0),e([t({type:Object})],y.prototype,"keypairs",void 0),e([t({type:Object})],y.prototype,"resourcePolicy",void 0),e([t({type:Object})],y.prototype,"keypairInfo",void 0),e([t({type:Boolean})],y.prototype,"is_admin",void 0),e([t({type:Boolean})],y.prototype,"active",void 0),e([t({type:String})],y.prototype,"condition",void 0),e([t({type:Object})],y.prototype,"cpu_resource",void 0),e([t({type:Object})],y.prototype,"ram_resource",void 0),e([t({type:Object})],y.prototype,"gpu_resource",void 0),e([t({type:Object})],y.prototype,"fgpu_resource",void 0),e([t({type:Object})],y.prototype,"concurrency_limit",void 0),e([t({type:Object})],y.prototype,"idle_timeout",void 0),e([t({type:Object})],y.prototype,"vfolder_capacity",void 0),e([t({type:Object})],y.prototype,"vfolder_max_limit",void 0),e([t({type:Object})],y.prototype,"container_per_session_limit",void 0),e([t({type:Array})],y.prototype,"allowed_vfolder_hosts",void 0),e([t({type:String})],y.prototype,"default_vfolder_host",void 0),e([t({type:Array})],y.prototype,"resource_policy_names",void 0),e([t({type:String})],y.prototype,"current_policy_name",void 0),e([t({type:Object})],y.prototype,"_boundResourceRenderer",void 0),e([t({type:Object})],y.prototype,"_boundConcurrencyRenderer",void 0),e([t({type:Object})],y.prototype,"_boundControlRenderer",void 0),y=e([i("backend-ai-resource-policy-list")],y);let g=class extends o{constructor(){super(),this.isAdmin=!1,this.editMode=!1,this.users=Object(),this.userView=Object(),this.userInfo=Object(),this.userInfoGroups=Array(),this.condition="active",this._boundControlRenderer=this.controlRenderer.bind(this),this.signoutUserDialog=Object(),this.signoutUserName="",this.notification=Object(),this._pageSize=20,this.userGrid=Object(),this._currentPage=1,this._totalUserCount=0}static get styles(){return[a,s,l,r,n,c`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 350px);
        }

        wl-card h4,
        wl-card wl-label {
          font-size: 14px;
          padding: 5px 15px 5px 12px;
          margin: 0 0 10px 0;
          display: block;
          height: 20px;
        }

        wl-card h4 {
          border-bottom: 1px solid #DDD;
        }

        wl-label {
          font-family: Roboto;
        }

        wl-switch {
          margin-right: 15px;
        }

        vaadin-item {
          font-size: 13px;
          font-weight: 100;
        }

        div.indicator,
        span.indicator {
          font-size: 9px;
          margin-right: 5px;
        }

        div.configuration {
          width: 70px !important;
        }

        wl-dialog wl-textfield,
        wl-dialog wl-textarea {
          padding-left: 15px;
          --input-font-family: Roboto, Noto, sans-serif;
          --input-color-disabled: #222;
          --input-label-color-disabled: #222;
          --input-label-font-size: 12px;
          --input-border-style-disabled: 1px solid #ccc;
        }

        wl-textfield:not([disabled]),
        wl-textarea:not([disabled]) {
          margin-bottom: 15px;
          width: 280px;
        }

        wl-button {
          --button-bg: var(--paper-light-green-50);
          --button-bg-hover: var(--paper-green-100);
          --button-bg-active: var(--paper-green-600);
          color: var(--paper-green-900);
        }

        wl-icon.pagination {
          color: var(--paper-grey-700);
        }

        wl-button.pagination {
          width: 15px;
          height: 15px;
          padding: 10 10px;
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
          --button-bg: transparent;
          --button-bg-hover: var(--paper-red-100);
          --button-bg-active: var(--paper-red-600);
          --button-bg-active-flat: var(--paper-red-600);
        }
      `]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification,this.signoutUserDialog=this.shadowRoot.querySelector("#signout-user-dialog")}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._refreshUserData(),this.isAdmin=globalThis.backendaiclient.is_admin,this.userGrid=this.shadowRoot.querySelector("#user-grid"),this._currentPage=1},!0):(this._refreshUserData(),this.isAdmin=globalThis.backendaiclient.is_admin,this.userGrid=this.shadowRoot.querySelector("#user-grid"),this._currentPage=1))}_refreshUserData(){let e=!0;switch(this.condition){case"active":e=!0;break;default:e=!1}this.spinner.hide();return globalThis.backendaiclient.user.list(e,["email","username","password","need_password_change","full_name","description","is_active","domain_name","role","groups {id name}"]).then(e=>{let t=e.users;this.users=t,this._totalUserCount=this.users.length,this._updateItemsFromPage(1)}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}async _editUserDetail(e){return this.editMode=!0,this._showUserDetailDialog(e)}async _showUserDetail(e){return this.editMode=!1,this._showUserDetailDialog(e)}async _showUserDetailDialog(e){const t=e.target.closest("#controls")["user-id"];let i;try{const e=await this._getUserData(t);this.userInfo=e.user,i=this.userInfo.groups.map(e=>e.name),this.userInfoGroups=i,this.shadowRoot.querySelector("#user-info-dialog").show()}catch(e){e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}}_signoutUserDialog(e){const t=e.target.closest("#controls")["user-id"];this.signoutUserName=t,this.signoutUserDialog.show()}_signoutUser(){globalThis.backendaiclient.user.delete(this.signoutUserName).then(e=>{this.notification.text=d.relieve("Signout finished.")}).catch(e=>{console.log(e),void 0!==e.message?(this.notification.text=d.relieve(e.title),this.notification.detail=e.message):this.notification.text=d.relieve("Signout failed. Check your permission and try again."),this.notification.show()})}async _getUserData(e){return globalThis.backendaiclient.user.get(e,["email","username","password","need_password_change","full_name","description","is_active","domain_name","role","groups {id name}"])}refresh(){this._refreshUserData()}_isActive(){return"active"===this.condition}_elapsed(e,t){var i=new Date(e);if("active"==this.condition)var o=new Date;else o=new Date;var a=Math.floor((o.getTime()-i.getTime())/1e3);return Math.floor(a/86400)}_humanReadableTime(e){return new Date(e).toUTCString()}_indexRenderer(e,t,i){let o=i.index+1;u(h`
        <div>${o}</div>
      `,e)}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":e}_updateItemsFromPage(e){if("number"!=typeof e){let t=e.target;"button"!==t.role&&(t=e.target.closest("wl-button")),"previous-page"===t.id?this._currentPage-=1:this._currentPage+=1}let t=(this._currentPage-1)*this.userGrid.pageSize,i=this._currentPage*this.userGrid.pageSize;this.userView=this.users.slice(t,i)}controlRenderer(e,t,i){u(h`
        <div
          id="controls"
          class="layout horizontal flex center"
          .user-id="${i.item.email}">
          <wl-button fab flat inverted
            class="fg green"
            icon="assignment"
            @click="${e=>this._showUserDetail(e)}">
            <wl-icon>assignment</wl-icon>
          </wl-button>
          <wl-button fab flat inverted
            class="fg blue"
            icon="settings"
            @click="${e=>this._editUserDetail(e)}">
            <wl-icon>settings</wl-icon>
          </wl-button>

          ${globalThis.backendaiclient.is_superadmin&&this._isActive()?h`
            <wl-button fab flat inverted class="fg red controls-running"
                               @click="${e=>this._signoutUserDialog(e)}">
                               <wl-icon>delete_forever</wl-icon>
            </wl-button>
          `:h``}
        </div>
      `,e)}_hideDialog(e){e.target.closest("wl-dialog").hide()}_saveChanges(e){const t=this.shadowRoot.querySelector("#username").value,i=this.shadowRoot.querySelector("#full_name").value,o=this.shadowRoot.querySelector("#password").value,a=this.shadowRoot.querySelector("#confirm").value,s=this.shadowRoot.querySelector("#description").value,l=this.shadowRoot.querySelector("#is_active").checked,r=this.shadowRoot.querySelector("#need_password_change").checked;if(o!==a)return this.notification.text="Password and Confirmation do not match.",void this.notification.show();let n=Object();if(""!==o&&(n.password=o),t!==this.userInfo.username&&(n.username=t),i!==this.userInfo.full_name&&(n.full_name=i),s!==this.userInfo.description&&(n.description=s),r!==this.userInfo.need_password_change&&(n.need_password_change=r),l!==this.userInfo.is_active&&(n.is_active=l),0===Object.entries(n).length)return this._hideDialog(e),this.notification.text="No Changes Made",void this.notification.show();globalThis.backendaiclient.user.modify(this.userInfo.email,n).then(e=>{e.modify_user.ok?(this.shadowRoot.querySelector("#user-info-dialog").hide(),this.notification.text="Successfully Modified",this.userInfo=Object.assign(Object.assign(Object.assign({},this.userInfo),n),{password:null}),this._refreshUserData(),this.shadowRoot.querySelector("#password").value="",this.shadowRoot.querySelector("#confirm").value=""):(this.notification.text=`Error: ${e.modify_user.msg}`,this.shadowRoot.querySelector("#username").value=this.userInfo.username,this.shadowRoot.querySelector("#description").value=this.userInfo.description),this.notification.show()})}render(){return h`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <vaadin-grid page-size="${this._pageSize}" theme="row-stripes column-borders compact"
                   aria-label="User list" id="user-grid" .items="${this.userView}">
        <vaadin-grid-column width="40px" flex-grow="0" header="#"
                            .renderer="${this._indexRenderer}"></vaadin-grid-column>
        <vaadin-grid-sort-column resizable header="${p("credential.UserID")}" path="email">
          <template>
            <div class="layout horizontal center flex">
              <div>[[item.email]]</div>
            </div>
          </template>
        </vaadin-grid-sort-column>
        <vaadin-grid-sort-column resizable header="${p("credential.Name")}" path="username">
          <template>
            <div class="layout horizontal center flex">
              <div>[[item.username]]</div>
            </div>
          </template>
        </vaadin-grid-sort-column>
        <vaadin-grid-column resizable header="${p("general.Control")}" .renderer="${this._boundControlRenderer}">
        </vaadin-grid-column>
      </vaadin-grid>
      <div class="horizontal center-justified layout flex" style="padding: 10px;">
        <wl-button class="pagination" id="previous-page"
                   ?disabled="${1===this._currentPage}"
                   @click="${e=>{this._updateItemsFromPage(e)}}">
          <wl-icon class="pagination">navigate_before</wl-icon>
        </wl-button>
        <wl-label style="padding: 5px 15px 0px 15px;">
        ${this._currentPage} / ${Math.ceil(this._totalUserCount/this._pageSize)}</wl-label>
        <wl-button class="pagination" id="next-page"
                   ?disabled="${this._totalUserCount<=this._pageSize*this._currentPage}"
                   @click="${e=>{this._updateItemsFromPage(e)}}">
          <wl-icon class="pagination">navigate_next</wl-icon>
        </wl-button>
      </div>
      <wl-dialog id="signout-user-dialog" fixed backdrop blockscrolling>
         <wl-title level="3" slot="header">Let's double-check</wl-title>
         <div slot="content">
            <p>You are inactivating the user <span style="color:red">${this.signoutUserName}</span>. ${p("dialog.ask.DoYouWantToProceed")}</p>
         </div>
         <div slot="footer">
            <wl-button class="cancel" inverted flat @click="${e=>this._hideDialog(e)}">${p("button.Cancel")}</wl-button>
            <wl-button class="ok" @click="${()=>this._signoutUser()}">${p("button.Okay")}</wl-button>
         </div>
      </wl-dialog>
      <wl-dialog id="user-info-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="0" class="intro" style="margin: 0;">
          <h3 class="horizontal center layout" style="border-bottom:1px solid #ddd;">
            <span style="margin-right:15px;">${p("credential.UserDetail")}</span>
            <lablup-shields app="" description="user" ui="flat"></lablup-shields>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <div class="horizontal layout">
            <div style="width:335px;">
              <h4>${p("credential.Information")}</h4>
              <div role="listbox" style="margin: 0;">
                <wl-textfield
                  label="${p("credential.UserID")}"
                  disabled
                  value="${this.userInfo.email}">
                </wl-textfield>
                <wl-textfield
                  label="${p("credential.UserName")}"
                  id="username"
                  ?disabled=${!this.editMode}
                  value="${this.userInfo.username}">
                </wl-textfield>
                <wl-textfield
                  label="${p("credential.FullName")}"
                  id="full_name"
                  ?disabled=${!this.editMode}
                  value="${this.userInfo.full_name?this.userInfo.full_name:" "}">
                </wl-textfield>
                ${this.editMode?h`
                            <wl-textfield type="password" label="${p("general.NewPassword")}" id="password"></wl-textfield>
                            <wl-textfield type="password" label="${p("general.ConfirmPassword")}" id="confirm"></wl-textfield>`:h``}
                <wl-textarea label="${p("credential.Description")}" id="description"
                             value="${this.userInfo.description?this.userInfo.description:" "}"
                             ?disabled=${!this.editMode}>
                </wl-textarea>
                ${this.editMode?h`
                  <wl-label label for="is_active_label" style="margin-bottom: auto">
                   ${p("credential.DescActiveUser")}
                  </wl-label>
                  <wl-label label id="is_active_label">
                    <wl-switch
                      id="is_active"
                      ?checked=${this.userInfo.is_active}>
                    </wl-switch>
                  </wl-label>
                  <wl-label label for="need_password_change_label" style="margin-bottom: auto">
                    ${p("credential.DescRequirePasswordChange")}
                  </wl-label>
                  <wl-label label id="need_password_change_label">
                    <wl-switch id="need_password_change" ?checked=${this.userInfo.need_password_change}></wl-switch>
                  </wl-label>
                  <wl-button
                    class="fg green"
                    type="button"
                    outlined
                    @click=${e=>this._saveChanges(e)}
                    style="width: 305px; margin: 0 15px 10px 15px; box-sizing: border-box;">
                    <wl-icon>check</wl-icon>
                    ${p("button.SaveChanges")}
                  </wl-button>`:h`
                      <wl-textfield label="${p("credential.DescActiveUser")}" disabled
                                    value="${this.userInfo.is_active?"Yes":"No"}">
                      </wl-textfield>
                      <wl-textfield label="${p("credential.DescRequirePasswordChange")}" disabled
                                    value="${this.userInfo.need_password_change?"Yes":"No"}">
                      </wl-textfield>
              `}
            </div>
          </div>
          ${this.editMode?h``:h`
            <div style="width:270px;">
              <h4>${p("credential.Association")}</h4>
              <div role="listbox" style="margin: 0;">
                <vaadin-item>
                  <div><strong>${p("credential.Domain")}</strong></div>
                  <div secondary>${this.userInfo.domain_name}</div>
                </vaadin-item>
                <vaadin-item>
                  <div><strong>${p("credential.Role")}</strong></div>
                  <div secondary>${this.userInfo.role}</div>
                </vaadin-item>
                <vaadin-item>
                  <div><strong>${p("credential.Groups")}</strong></div>
                  <div secondary>
                    <ul>
                    ${this.userInfoGroups.map(e=>h`
                      <li>${e}</li>
                    `)}
                    </ul>
                  </div>
                </vaadin-item>
              </div>
            </div>
          `}
          </div>
        </wl-card>
      </wl-dialog>
    `}};e([t({type:Boolean})],g.prototype,"isAdmin",void 0),e([t({type:Boolean})],g.prototype,"editMode",void 0),e([t({type:Object})],g.prototype,"users",void 0),e([t({type:Object})],g.prototype,"userView",void 0),e([t({type:Object})],g.prototype,"userInfo",void 0),e([t({type:Array})],g.prototype,"userInfoGroups",void 0),e([t({type:String})],g.prototype,"condition",void 0),e([t({type:Object})],g.prototype,"_boundControlRenderer",void 0),e([t({type:Object})],g.prototype,"spinner",void 0),e([t({type:Object})],g.prototype,"keypairs",void 0),e([t({type:Object})],g.prototype,"signoutUserDialog",void 0),e([t({type:String})],g.prototype,"signoutUserName",void 0),e([t({type:Object})],g.prototype,"notification",void 0),e([t({type:Number})],g.prototype,"_pageSize",void 0),e([t({type:Object})],g.prototype,"userGrid",void 0),e([t({type:Number})],g.prototype,"_currentPage",void 0),e([t({type:Number})],g.prototype,"_totalUserCount",void 0),g=e([i("backend-ai-user-list")],g);let w=class extends o{constructor(){super(),this.cpu_resource={},this.ram_resource={},this.gpu_resource={},this.fgpu_resource={},this.concurrency_limit={},this.idle_timeout={},this.vfolder_capacity={},this.vfolder_max_limit={},this.container_per_session_limit={},this.rate_metric=[1e3,2e3,3e3,4e3,5e3,1e4,5e4],this.resource_policies=Object(),this.resource_policy_names=Array(),this.isAdmin=!1,this._status="inactive",this.allowed_vfolder_hosts=Array(),this.default_vfolder_host="",this.new_access_key="",this.new_secret_key="",this._activeTab="users",this.notification=Object(),this.exportToCsvDialog=Object(),this._defaultFileName=""}static get styles(){return[a,s,l,r,n,c`
        wl-button.create-button {
          width: 335px;
        }

        #new-keypair-dialog {
          min-width: 350px;
        }

        wl-dialog {
          margin: 15px 0 5px 0;
          font-weight: 100;
          font-size: 16px;
          padding-left: 20px;
          border-bottom: 1px solid #ccc;
        }

        wl-button {
          --button-bg: var(--paper-light-green-50);
          --button-bg-hover: var(--paper-green-100);
          --button-bg-active: var(--paper-green-600);
        }

        wl-button.fab {
          --button-bg: var(--paper-light-green-600);
          --button-bg-hover: var(--paper-green-600);
          --button-bg-active: var(--paper-green-900);
        }

        wl-icon.close {
          color: black;
        }

        wl-card h3 {
          padding-top: 0;
          padding-right: 15px;
          padding-bottom: 0;
        }

        wl-card wl-card {
          margin: 0;
          padding: 0;
          --card-elevation: 0;
        }

        wl-tab-group {
          --tab-group-indicator-bg: var(--paper-green-600);
        }

        wl-tab {
          --tab-color: #666;
          --tab-color-hover: #222;
          --tab-color-hover-filled: #222;
          --tab-color-active: var(--paper-green-600);
          --tab-color-active-hover: var(--paper-green-600);
          --tab-color-active-filled: #ccc;
          --tab-bg-active: var(--paper-lime-200);
          --tab-bg-filled: var(--paper-lime-200);
          --tab-bg-active-hover: var(--paper-lime-200);
        }

        wl-expansion {
          --expansion-elevation: 0;
          --expansion-elevation-open: 0;
          --expansion-elevation-hover: 0;
          --expansion-margin-open: 0;
          --expansion-content-padding: 0;
        }

        wl-expansion {
          font-weight: 200;
        }

        wl-label {
          width: 100%;
          min-width: 60px;
          font-weight: 400;
          font-size: 11px;
          --label-font-family: Roboto, Noto, sans-serif;
        }

        wl-label.folders {
          margin: 3px 0px 7px 0px;
        }

        wl-label.unlimited {
          margin: 4px 0px 0px 0px;
        }

        wl-list-item {
          width: 100%;
        }

        wl-textfield {
          width: 100%;
          --input-state-color-invalid: red;
          --input-padding-top-bottom: 0px;
          --input-font-family: Roboto, Noto, sans-serif;
        }

        wl-checkbox {
          --checkbox-size: 10px;
          --checkbox-border-radius: 2px;
          --checkbox-bg-checked: var(--paper-green-800);
          --checkbox-checkmark-stroke-color: var(--paper-lime-100);
          --checkbox-color-checked: var(--paper-green-800);
        }

        mwc-textfield {
          width: 100%;
          --mdc-text-field-fill-color: transparent;
          --mdc-theme-primary: var(--paper-green-600);
        }

        mwc-textfield#export-file-name {
          margin-bottom: 10px;
        }

        #new-user-dialog wl-textfield {
          margin-bottom: 15px;
        }

        mwc-textfield {
          width: 100%;
          --mdc-text-field-fill-color: transparent;
          --mdc-theme-primary: var(--paper-green-600);
        }

        mwc-menu {
          --mdc-theme-surface: #f1f1f1;
          --mdc-menu-item-height : auto;
        }

        mwc-list-item {
          font-size : 14px;
        }

        mwc-icon-button {
          --mdc-icon-size: 20px;
          color: var(--paper-grey-700);
        }

        mwc-icon-button#dropdown-menu-button {
          margin-left: 10px;
        }
      `]}firstUpdated(){this.notification=globalThis.lablupNotification,document.addEventListener("backend-ai-credential-refresh",()=>{this.shadowRoot.querySelector("#active-credential-list").refresh(),this.shadowRoot.querySelector("#inactive-credential-list").refresh()},!0),this.shadowRoot.querySelectorAll("wl-expansion").forEach(e=>{e.addEventListener("keydown",e=>{e.stopPropagation()},!0)}),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._preparePage()}):this._preparePage()}_preparePage(){!0!==globalThis.backendaiclient.is_admin?this.disablePage():this.isAdmin=!0,this._activeTab="user-lists",this._addValidatorToPolicyInput(),this._getResourceInfo(),this._getResourcePolicies(),this._updateInputStatus(this.cpu_resource),this._updateInputStatus(this.ram_resource),this._updateInputStatus(this.gpu_resource),this._updateInputStatus(this.fgpu_resource),this._updateInputStatus(this.concurrency_limit),this._updateInputStatus(this.idle_timeout),this._updateInputStatus(this.container_per_session_limit),this._updateInputStatus(this.vfolder_capacity),this.vfolder_max_limit.value=10,this.exportToCsvDialog=this.shadowRoot.querySelector("#export-to-csv"),this._defaultFileName=this._getDefaultCSVFileName()}async _viewStateChanged(e){if(await this.updateComplete,!1===e)return this.shadowRoot.querySelector("#resource-policy-list").active=!1,this.shadowRoot.querySelector("#user-list").active=!1,void(this._status="inactive");this.shadowRoot.querySelector("#resource-policy-list").active=!0,this.shadowRoot.querySelector("#user-list").active=!0,this._status="active"}async _launchKeyPairDialog(){await this._getResourcePolicies(),this.shadowRoot.querySelector("#new-keypair-dialog").show()}_readVFolderHostInfo(){globalThis.backendaiclient.vfolder.list_hosts().then(e=>{this.allowed_vfolder_hosts=e.allowed,this.default_vfolder_host=e.default}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_launchResourcePolicyDialog(){this._readVFolderHostInfo(),this.shadowRoot.querySelector("#id_new_policy_name").mdcFoundation.setValid(!0),this.shadowRoot.querySelector("#id_new_policy_name").isUiValid=!0,this.shadowRoot.querySelector("#id_new_policy_name").value="",this.shadowRoot.querySelector("#new-policy-dialog").show()}_launchModifyResourcePolicyDialog(){this._readVFolderHostInfo(),this.shadowRoot.querySelector("#new-policy-dialog").show()}_launchUserAddDialog(){this.shadowRoot.querySelector("#new-user-dialog").show()}async _getResourcePolicies(){return globalThis.backendaiclient.resourcePolicy.get(null,["name","default_for_unspecified","total_resource_slots","max_concurrent_sessions","max_containers_per_session"]).then(e=>{let t=globalThis.backendaiclient.utils.gqlToObject(e.keypair_resource_policies,"name"),i=globalThis.backendaiclient.utils.gqlToList(e.keypair_resource_policies,"name");this.resource_policies=t,this.resource_policy_names=i})}_addKeyPair(){let e;if(""!=this.shadowRoot.querySelector("#id_new_user_id").value){if(1==this.shadowRoot.querySelector("#id_new_user_id").invalid)return;e=this.shadowRoot.querySelector("#id_new_user_id").value}else e=globalThis.backendaiclient.email;let t=this.shadowRoot.querySelector("#resource-policy").value,i=this.shadowRoot.querySelector("#rate-limit").value,o=this.shadowRoot.querySelector("#id_new_access_key").value,a=this.shadowRoot.querySelector("#id_new_secret_key").value;globalThis.backendaiclient.keypair.add(e,!0,!1,t,i,o,a).then(e=>{this.shadowRoot.querySelector("#new-keypair-dialog").hide(),this.notification.text="Keypair successfully created.",this.notification.show(),this.shadowRoot.querySelector("#active-credential-list").refresh()}).catch(e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#new-keypair-dialog").hide(),this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_readResourcePolicyInput(){let e={},t=[];t.push(this.shadowRoot.querySelector("#allowed_vfolder-hosts").value);try{this._validateUserInput(this.cpu_resource),this._validateUserInput(this.ram_resource),this._validateUserInput(this.gpu_resource),this._validateUserInput(this.fgpu_resource),this._validateUserInput(this.concurrency_limit),this._validateUserInput(this.idle_timeout),this._validateUserInput(this.container_per_session_limit),this._validateUserInput(this.vfolder_capacity),this._validateUserInput(this.vfolder_max_limit)}catch(e){throw e}return e.cpu=this.cpu_resource.value,e.mem=this.ram_resource.value+"g",e["cuda.device"]=parseInt(this.gpu_resource.value),e["cuda.shares"]=parseFloat(this.fgpu_resource.value),this.concurrency_limit.value=""===this.concurrency_limit.value?0:parseInt(this.concurrency_limit.value),this.idle_timeout.value=""===this.idle_timeout.value?0:parseInt(this.idle_timeout.value),this.container_per_session_limit.value=""===this.container_per_session_limit.value?0:parseInt(this.container_per_session_limit.value),this.vfolder_capacity.value=""===this.vfolder_capacity.value?0:parseInt(this.vfolder_capacity.value),this.vfolder_max_limit.value=""===this.vfolder_max_limit.value?0:parseInt(this.vfolder_max_limit.value),Object.keys(e).map(t=>{isNaN(parseFloat(e[t]))&&delete e[t]}),{default_for_unspecified:"UNLIMITED",total_resource_slots:JSON.stringify(e),max_concurrent_sessions:this.concurrency_limit.value,max_containers_per_session:this.container_per_session_limit.value,idle_timeout:this.idle_timeout.value,max_vfolder_count:this.vfolder_max_limit.value,max_vfolder_size:this.vfolder_capacity.value,allowed_vfolder_hosts:t}}_addResourcePolicy(){let e=this.shadowRoot.querySelector("#id_new_policy_name");if(e.checkValidity())try{let e=this.shadowRoot.querySelector("#id_new_policy_name");e.checkValidity();let t=e.value;if(""===t)throw{message:"Policy name should not be empty"};let i=this._readResourcePolicyInput();globalThis.backendaiclient.resourcePolicy.add(t,i).then(e=>{this.shadowRoot.querySelector("#new-policy-dialog").hide(),this.notification.text="Resource policy successfully created.",this.notification.show(),this.shadowRoot.querySelector("#resource-policy-list").refresh()}).catch(e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#new-policy-dialog").hide(),this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}catch(e){this.notification.text=e.message,this.notification.show()}else e.reportValidity()}_addUser(){const e=this.shadowRoot.querySelector("#id_user_email").value,t=this.shadowRoot.querySelector("#id_user_name").value,i=this.shadowRoot.querySelector("#id_user_password").value,o=this.shadowRoot.querySelector("#id_user_confirm").value;if(""===e)return this.notification.text="Please Input User Id(Email)!",void this.notification.show();if(this.shadowRoot.querySelector("#id_user_email").hasAttribute("invalid"))return this.notification.text="Email Is Invalid!",void this.notification.show();if(""===t)return this.notification.text="Username Is Empty!",void this.notification.show();if(null!==this.shadowRoot.querySelector("#id_user_password").getAttribute("invalid"))return this.notification.text="Password must contain at least one alphabet, one digit, and one special character",void this.notification.show();if(""===i)return this.notification.text="Password Is Empty!",void this.notification.show();if(i!==o)return this.notification.text="Confirmation Does Not Match With Original Password!",void this.notification.show();const a={username:t,password:i,need_password_change:!1,full_name:t,description:`${t}'s Account`,is_active:!0,domain_name:"default",role:"user"};globalThis.backendaiclient.group.list().then(t=>{const i=t.groups.find(e=>"default"===e.name).id;return Promise.resolve(globalThis.backendaiclient.user.add(e,Object.assign(Object.assign({},a),{group_ids:[i]})))}).then(e=>{this.shadowRoot.querySelector("#new-user-dialog").hide(),e.create_user.ok?(this.notification.text="User successfully created",this.shadowRoot.querySelector("#user-list").refresh()):(console.error(e.create_user.msg),this.notification.text="Error on user creation"),this.notification.show(),this.shadowRoot.querySelector("#id_user_email").value="",this.shadowRoot.querySelector("#id_user_name").value="",this.shadowRoot.querySelector("#id_user_password").value="",this.shadowRoot.querySelector("#id_user_confirm").value=""})}_modifyResourcePolicy(){let e=this.shadowRoot.querySelector("#id_new_policy_name").value;try{let t=this._readResourcePolicyInput();globalThis.backendaiclient.resourcePolicy.mutate(e,t).then(e=>{this.shadowRoot.querySelector("#new-policy-dialog").close(),this.notification.text="Resource policy successfully updated.",this.notification.show(),this.shadowRoot.querySelector("#resource-policy-list").refresh()}).catch(e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#new-policy-dialog").close(),this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}catch(e){this.notification.text=e.message,this.notification.show()}}disablePage(){for(var e=this.shadowRoot.querySelectorAll(".admin"),t=0;t<e.length;t++)e[t].style.display="none"}_hideDialog(e){e.target.closest("wl-dialog").hide()}_showTab(e){for(var t=this.shadowRoot.querySelectorAll(".tab-content"),i=0;i<t.length;i++)t[i].style.display="none";this._activeTab=e.value,this.shadowRoot.querySelector("#"+e.value).style.display="block"}_toggleCheckbox(e){const t=e.target,i=t.checked,o=t.closest("div").querySelector("wl-textfield");o.disabled=i,o.disabled||""===o.value&&(o.value=0)}_validateResourceInput(e){const t=e.target.closest("wl-textfield"),i=t.closest("div").querySelector(".unlimited");let o;if(o=i?i.querySelector("wl-checkbox"):null,t.value<0&&(t.value=0),""===t.value)try{if(!o||!o.checked)throw t.required=!0,t.focus(),{message:"Please input value or check unlimited."};t.required=!1,t.value=""}catch(e){this.notification.text=e.message,this.notification.show()}}_validateUserInput(e){if(e.disabled)e.value="";else if(""===e.value)throw{message:"Cannot create Resource Policy. Please check input values."}}_addValidatorToPolicyInput(){let e=this.shadowRoot.querySelector("#id_new_policy_name");e.validityTransform=(t,i)=>{if(!i)return e.validationMessage=_("credential.validation.PolicyName"),{valid:!1,valueMissing:!0};if(i.valid){const i=!this.resource_policy_names.includes(t);return i||(e.validationMessage=_("credential.validation.NameAlreadyExists")),{valid:i,customError:!i}}return i.patternMismatch?(e.validationMessage=_("credential.validation.LetterNumber-_dot"),{valid:i.valid,patternMismatch:!i.valid}):i.valueMissing?(e.validationMessage=_("credential.validation.PolicyName"),{valid:i.valid,valueMissing:!i.valid}):(e.validationMessage=_("credential.validation.LetterNumber-_dot"),{valid:i.valid,patternMismatch:!i.valid})}}_updateInputStatus(e){let t=e,i=t.closest("div").querySelector("wl-checkbox");""===t.value||"0"===t.value?(t.disabled=!0,i.checked=!0):(t.disabled=!1,i.checked=!1)}_openExportToCsvDialog(){this._defaultFileName=this._getDefaultCSVFileName(),this.exportToCsvDialog.show()}_exportToCSV(){let e=this.shadowRoot.querySelector("#export-file-name");if(e.validity.valid){switch(this._activeTab){case"user-lists":let t=this.shadowRoot.querySelector("#user-list").users;t.map(e=>{["password","need_password_change"].forEach(t=>delete e[t])}),v.exportToCsv(e.value,t);break;case"credential-lists":let i=this.shadowRoot.querySelector("#active-credential-list").keypairs,o=this.shadowRoot.querySelector("#inactive-credential-list").keypairs,a=i.concat(o);a.map(e=>{["is_admin"].forEach(t=>delete e[t])}),v.exportToCsv(e.value,a);break;case"resource-policy-lists":let s=this.shadowRoot.querySelector("#resource-policy-list").resourcePolicy;v.exportToCsv(e.value,s)}this.notification.text="Downloading CSV file...",this.notification.show(),this.exportToCsvDialog.hide()}}_getResourceInfo(){this.cpu_resource=this.shadowRoot.querySelector("#cpu-resource"),this.ram_resource=this.shadowRoot.querySelector("#ram-resource"),this.gpu_resource=this.shadowRoot.querySelector("#gpu-resource"),this.fgpu_resource=this.shadowRoot.querySelector("#fgpu-resource"),this.concurrency_limit=this.shadowRoot.querySelector("#concurrency-limit"),this.idle_timeout=this.shadowRoot.querySelector("#idle-timeout"),this.container_per_session_limit=this.shadowRoot.querySelector("#container-per-session-limit"),this.vfolder_capacity=this.shadowRoot.querySelector("#vfolder-capacity-limit"),this.vfolder_max_limit=this.shadowRoot.querySelector("#vfolder-count-limit")}_getDefaultCSVFileName(){return(new Date).toISOString().substring(0,10)+"_"+(new Date).toTimeString().slice(0,8).replace(/:/gi,"-")}_toggleDropdown(){let e=this.shadowRoot.querySelector("#dropdown-menu");e.open=!e.open,this.exportToCsvDialog.open&&(e.open=!1)}render(){return h`
      <wl-card class="admin item" elevation="1">
        <h3 class="tab horizontal wrap layout">
          <wl-tab-group>
            <wl-tab value="user-lists" checked @click="${e=>this._showTab(e.target)}">${p("credential.Users")}</wl-tab>
            <wl-tab value="credential-lists" @click="${e=>this._showTab(e.target)}">${p("credential.Credentials")}</wl-tab>
            <wl-tab value="resource-policy-lists" @click="${e=>this._showTab(e.target)}">${p("credential.ResourcePolicies")}</wl-tab>
          </wl-tab-group>
          ${this.isAdmin?h`
              <span class="flex"></span>
              <mwc-icon-button id="dropdown-menu-button" icon="more_horiz" raised
                               @click="${this._toggleDropdown}">
                <mwc-menu id="dropdown-menu" absolute x="-50" y="25">
                  <mwc-list-item>
                    <a class="horizontal layout start center" @click="${this._openExportToCsvDialog}">
                      <mwc-icon style="color:#242424;padding-right:10px;">get_app</mwc-icon>
                      ${p("credential.exportCSV")}
                    </a>
                  </mwc-list-item>
                </mwc-menu>
              </mwc-icon-button>
            `:h``}
        </h3>
        <wl-card id="user-lists" class="admin item tab-content">
          <h4 class="horizontal flex center center-justified layout">
            <span>${p("credential.Users")}</span>
            <span class="flex"></span>
            <wl-button class="fg green" id="add-user" outlined @click="${this._launchUserAddDialog}">
              <wl-icon>add</wl-icon>
              ${p("credential.CreateUser")}
            </wl-button>
          </h4>
          <div>
            <backend-ai-user-list id="user-list" ?active="${"active"===this._status}"></backend-ai-user-list>
          </div>
        </wl-card>
        <wl-card id="credential-lists" class="tab-content" style="display:none;">
        <h4 class="horizontal flex layout">
          <span class="flex"></span>
          <wl-button class="fg green" id="add-keypair" outlined @click="${this._launchKeyPairDialog}">
            <wl-icon>add</wl-icon>
            ${p("credential.AddCredential")}
          </wl-button>
        </h4>
          <wl-expansion name="credential-group" open role="list">
            <h4 slot="title">${p("credential.Active")}</h4>
            <span slot="description">
            </span>
            <div>
              <backend-ai-credential-list id="active-credential-list" condition="active" ?active="${"credential-lists"===this._activeTab}"></backend-ai-credential-list>
            </div>
          </wl-expansion>
          <wl-expansion name="credential-group" role="list">
            <h4 slot="title">${p("credential.Inactive")}</h4>
            <div>
              <backend-ai-credential-list id="inactive-credential-list" condition="inactive" ?active="${"credential-lists"===this._activeTab}"></backend-ai-credential-list>
            </div>
          </wl-expansion>
        </wl-card>
        <wl-card id="resource-policy-lists" class="admin item tab-content" style="display:none;">
          <h4 class="horizontal flex center center-justified layout">
            <span>${p("credential.PolicyGroup")}</span>
            <span class="flex"></span>
            <wl-button class="fg green" id="add-policy" outlined @click="${this._launchResourcePolicyDialog}">
              <wl-icon>add</wl-icon>
              ${p("credential.CreatePolicy")}
            </wl-button>
          </h4>
          <div>
            <backend-ai-resource-policy-list id="resource-policy-list" ?active="${"resource-policy-lists"===this._activeTab}"></backend-ai-resource-policy-list>
          </div>
        </wl-card>
      </wl-card>
      <wl-dialog id="new-keypair-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="1" class="login-panel intro centered" style="margin: 0;">

          <h3 class="horizontal center layout" style="border-bottom:1px solid #ddd;">
            <span style="margin-right:15px;">${p("credential.AddCredential")}</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <form id="login-form">
            <fieldset>
              <wl-textfield type="email" name="new_user_id" id="id_new_user_id" label="User ID as E-mail (optional)"
                           auto-validate></wl-textfield>
              <div class="horizontal center layout">
                <paper-dropdown-menu id="resource-policy" label="Resource Policy">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.resource_policy_names.map(e=>h`
                    <paper-item label="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu id="rate-limit" label="Rate Limit (for 15 min.)">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.rate_metric.map(e=>h`
                    <paper-item label="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
              <wl-expansion name="advanced-keypair-info">
                <span slot="title">${p("general.Advanced")}</span>
                <span slot="description"></span>
                <wl-textfield type="text" name="new_access_key" id="id_new_access_key" label="Access Key (optional)"
                              auto-validate .value="${this.new_access_key}">
                </wl-textfield>
                <wl-textfield type="text" name="new_secret_key" id="id_new_secret_key" label="Secret Key (optional)"
                              auto-validate .value="${this.new_secret_key}">
                </wl-textfield>
              </wl-expansion>
              <br/><br/>
              <wl-button class="fg blue create-button" id="create-keypair-button" outlined type="button"
              @click="${this._addKeyPair}">
                         <wl-icon>add</wl-icon>
                         ${p("general.Add")}
                         </wl-button>
            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="new-policy-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="1" class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>${p("credential.CreateResourcePolicy")}</span>
            <div class="flex"></div>
            <wl-button class="fab" fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <form id="login-form">
            <fieldset>
            <mwc-textfield id="id_new_policy_name" label="Policy Name" pattern="^[a-zA-Z0-9_-]+$"
                             validationMessage="Policy name is Required."
                             required></mwc-textfield>
              <h4>${p("credential.ResourcePolicy")}</h4>
              <div class="horizontal center layout">
                  <div class="vertical layout" style="width:75px; margin:0px 10px 0px 0px;">
                    <wl-label>CPU</wl-label>
                    <wl-textfield id="cpu-resource" type="number"
                                  @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                      <wl-label class="unlimited">
                        <wl-checkbox @change="${e=>this._toggleCheckbox(e)}" style="border-width: 1px;"></wl-checkbox>
                        ${p("credential.Unlimited")}
                      </wl-label>
                  </div>
                  <div class="vertical layout" style="width:75px; margin:0px 10px 0px 10px;">
                    <wl-label>RAM(GB)</wl-label>
                    <wl-textfield id="ram-resource" type="number"
                                  @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                    <wl-label class="unlimited">
                      <wl-checkbox @change="${e=>this._toggleCheckbox(e)}" style="border-width: 1px;"></wl-checkbox>
                      ${p("credential.Unlimited")}
                    </wl-label>
                  </div>
                  <div class="vertical layout" style="width:75px; margin:0px 10px 0px 10px;">
                    <wl-label>GPU</wl-label>
                    <wl-textfield id="gpu-resource" type="number"
                                  @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                    <wl-label class="unlimited">
                      <wl-checkbox @change="${e=>this._toggleCheckbox(e)}" style="border-width: 1px;"></wl-checkbox>
                      ${p("credential.Unlimited")}
                    </wl-label>
                  </div>
                  <div class="vertical layout" style="width:75px; margin:0px 0px 0px 10px;">
                    <wl-label>fGPU</wl-label>
                    <wl-textfield id="fgpu-resource" type="number"
                                  @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                    <wl-label class="unlimited">
                      <wl-checkbox @change="${e=>this._toggleCheckbox(e)}" style="border-width: 1px;"></wl-checkbox>
                      ${p("credential.Unlimited")}
                    </wl-label>
                  </div>
              </div>
              <h4>${p("credential.Sessions")}</h4>
              <div class="horizontal center layout">
                <div class="vertical left layout" style="width: 110px;">
                    <wl-label>${p("credential.ContainerPerSession")}</wl-label>
                    <wl-textfield id="container-per-session-limit" type="number" @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                    <wl-label class="unlimited">
                      <wl-checkbox @change="${e=>this._toggleCheckbox(e)}" style="border-width: 1px;"></wl-checkbox>
                      ${p("credential.Unlimited")}
                    </wl-label>
                  </div>
                  <div class="vertical left layout" style="width: 110px; margin: 0px 15px;">
                    <wl-label>${p("credential.IdleTimeoutSec")}</wl-label>
                    <wl-textfield id="idle-timeout" type="number" @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                    <wl-label class="unlimited">
                      <wl-checkbox @change="${e=>this._toggleCheckbox(e)}" style="border-width: 1px;"></wl-checkbox>
                      ${p("credential.Unlimited")}
                    </wl-label>
                  </div>
                  <div class="vertical left layout" style="width: 110px;">
                      <wl-label>${p("credential.ConcurrentJobs")}</wl-label>
                      <wl-textfield id="concurrency-limit" type="number" @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                      <wl-label class="unlimited">
                        <wl-checkbox @change="${e=>this._toggleCheckbox(e)}" style="border-width: 1px;"></wl-checkbox>
                        ${p("credential.Unlimited")}
                      </wl-label>
                  </div>
              </div>
              <h4 style="margin-bottom:0px;">${p("credential.Folders")}</h4>
              <div class="horizontal center layout">
                <div class="vertical layout" style="width: 110px;">
                <paper-dropdown-menu id="allowed_vfolder-hosts" label="Allowed hosts">
                  <paper-listbox slot="dropdown-content" selected="0">
                    ${this.allowed_vfolder_hosts.map(e=>h`
                      <paper-item value="${e}" style="margin: 0px 0px 1px 0px;">${e}</paper-item>
                    `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                </div>
                <div class="vertical layout" style="width: 110px; margin: 21px 15px 0;">
                  <wl-label class="folders">${p("credential.Capacity(GB)")}</wl-label>
                  <wl-textfield id="vfolder-capacity-limit" type="number" @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                  <wl-label class="unlimited">
                    <wl-checkbox @change="${e=>this._toggleCheckbox(e)}" style="border-width: 1px;"></wl-checkbox>
                    ${p("credential.Unlimited")}
                </wl-label>
                </div>
                <div class="vertical layout" style="width: 110px;">
                  <wl-label class="folders">${p("credential.Max#")}</wl-label>
                  <wl-textfield id="vfolder-count-limit" type="number" @change="${e=>this._validateResourceInput(e)}"></wl-textfield>
                </div>
              </div>

              <br/><br/>
              <wl-button class="fg blue create-button" id="create-policy-button" type="button" outlined
               @click="${()=>this._addResourcePolicy()}">
                         <wl-icon>add</wl-icon>
                         ${p("credential.Create")}
              </wl-button>
            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="new-user-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="1" class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>${p("credential.CreateUser")}</span>
            <div class="flex"></div>
            <wl-button class="fab" fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <form>
            <fieldset>
              <wl-textfield
                type="email"
                name="user_email"
                id="id_user_email"
                label="${p("general.E-Mail")}"
              >
              </wl-textfield>
              <wl-textfield
                type="text"
                name="user_name"
                id="id_user_name"
                label="${p("general.Username")}"
              >
              </wl-textfield>
              <wl-textfield
                type="password"
                name="user_password"
                id="id_user_password"
                label="${p("general.Password")}"
                pattern="^(?=.*?[a-zA-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
              >
              </wl-textfield>
              <wl-textfield
                type="password"
                name="user_confirm"
                id="id_user_confirm"
                label="${p("general.ConfirmPassword")}"
              >
              </wl-textfield>
              <wl-button class="fg blue create-button" id="create-user-button" outlined type="button"
              @click="${this._addUser}">
                <wl-icon>add</wl-icon>
                ${p("credential.CreateUser")}
              </wl-button>
            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="export-to-csv" fixed backdrop blockscrolling>
      <wl-card elevation="1" class="intro centered login-panel" style="margin:0;">
        <h3 class="horizontal center layout" style="padding:10px;">
          <span style="margin-left:10px; font-size:18px;">${p("credential.ExportCSVFile")} (${this._activeTab})</span>
          <div class="flex"></div>
          <wl-button flat fab @click="${e=>this._hideDialog(e)}">
            <wl-icon class="close">close</wl-icon>
          </wl-button>
        </h3>
        <section style="padding: 5px;">
          <mwc-textfield id="export-file-name" label="File name" pattern="^[a-zA-Z0-9_-]+$"
                          validationMessage="Allows letters, numbers and -_."
                          value="${this._activeTab+"_"+this._defaultFileName}" required
          ></mwc-textfield>
          <div class="horizontal center layout">
            <wl-button class="fg green" type="button" inverted outlined style="width:100%;"
            @click="${this._exportToCSV}">
              <wl-icon>get_app</wl-icon>
              ${p("credential.ExportCSVFile")}
            </wl-button>
          </div>
          </section>
        </wl-card>
      </wl-dialog>
    `}};e([t({type:Object})],w.prototype,"cpu_resource",void 0),e([t({type:Object})],w.prototype,"ram_resource",void 0),e([t({type:Object})],w.prototype,"gpu_resource",void 0),e([t({type:Object})],w.prototype,"fgpu_resource",void 0),e([t({type:Object})],w.prototype,"concurrency_limit",void 0),e([t({type:Object})],w.prototype,"idle_timeout",void 0),e([t({type:Object})],w.prototype,"vfolder_capacity",void 0),e([t({type:Object})],w.prototype,"vfolder_max_limit",void 0),e([t({type:Object})],w.prototype,"container_per_session_limit",void 0),e([t({type:Array})],w.prototype,"rate_metric",void 0),e([t({type:Object})],w.prototype,"resource_policies",void 0),e([t({type:Array})],w.prototype,"resource_policy_names",void 0),e([t({type:Boolean})],w.prototype,"isAdmin",void 0),e([t({type:String})],w.prototype,"_status",void 0),e([t({type:Array})],w.prototype,"allowed_vfolder_hosts",void 0),e([t({type:String})],w.prototype,"default_vfolder_host",void 0),e([t({type:String})],w.prototype,"new_access_key",void 0),e([t({type:String})],w.prototype,"new_secret_key",void 0),e([t({type:String})],w.prototype,"_activeTab",void 0),e([t({type:Object})],w.prototype,"notification",void 0),e([t({type:Object})],w.prototype,"exportToCsvDialog",void 0),e([t({type:String})],w.prototype,"_defaultFileName",void 0),w=e([i("backend-ai-credential-view")],w);var b=w;export default b;
