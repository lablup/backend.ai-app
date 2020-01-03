import{b as e,p as i,e as t,B as o,I as a,f as s,g as r,i as l,c as n,U as d,h as c}from"./iron-flex-layout-classes-c9b3b8db.js";import"./switch-behavior-0afc6c5f.js";import"./iron-icon-6ebc5e38.js";import"./paper-input-8c401120.js";import"./paper-item-f17203a2.js";import"./lablup-shields-5d73cdab.js";import"./iron-icons-a9a73459.js";import"./hardware-icons-fa4d541e.js";import"./vaadin-icons-f8826d26.js";import"./input-behavior-22f7c31e.js";import"./index-41b64f0a.js";import"./resize-b38d87a6.js";import{B as p}from"./backend-ai-painkiller-d4aac244.js";import"./index-073eefb3.js";import"./index-fbff3ce8.js";import{B as u}from"./backend-ai-page-4ba904fc.js";import"./lablup-loading-indicator-4b4f282b.js";import"./iron-resizable-behavior-d5fcb40f.js";import"./radio-behavior-815c3cf2.js";import"./paper-dropdown-menu-8cca9eb0.js";import"./index-65d3c66e.js";import"./index-65211c35.js";import"./av-icons-84cd112f.js";import"./paper-dialog-040efc33.js";import"./vaadin-grid-d9d6f695.js";import"./vaadin-grid-sorter-5c13235e.js";import"./vaadin-grid-sort-column-7a3db676.js";import"./index-6835b5eb.js";import"./index-42a6ea5e.js";import"./vaadin-item-82362836.js";import"./index-54deb0ff.js";import"./index-2e2aab48.js";let h=class extends u{constructor(){super(),this.keypairInfo={user_id:"1",access_key:"ABC",secret_key:"ABC",last_used:"",is_admin:!1,resource_policy:"",rate_limit:5e3,concurrency_used:0,num_queries:0,created_at:""},this.isAdmin=!1,this.condition="active",this.keypairs=Object(),this.resourcePolicy=Object(),this.indicator=Object(),this._boundControlRenderer=this.controlRenderer.bind(this)}static get styles(){return[o,a,s,r,l,n`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 300px);
        }

        paper-item {
          height: 30px;
          --paper-item-min-height: 30px;
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

      `]}firstUpdated(){this.indicator=this.shadowRoot.querySelector("#loading-indicator"),this.notification=window.lablupNotification}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._refreshKeyData(),this.isAdmin=window.backendaiclient.is_admin},!0):(this._refreshKeyData(),this.isAdmin=window.backendaiclient.is_admin))}_refreshKeyData(e){let i=!0;switch(this.condition){case"active":i=!0;break;default:i=!1}return window.backendaiclient.resourcePolicy.get().then(e=>{this.indicator.hide();let i=e.keypair_resource_policies;this.resourcePolicy=window.backendaiclient.utils.gqlToObject(i,"name")}).then(()=>{return window.backendaiclient.keypair.list(e,["access_key","is_active","is_admin","user_id","created_at","last_used","concurrency_limit","concurrency_used","rate_limit","num_queries","resource_policy"],i)}).then(e=>{let i=e.keypairs;Object.keys(i).map((e,t)=>{var o=i[e];if(o.resource_policy in this.resourcePolicy){for(var a in this.resourcePolicy[o.resource_policy])"created_at"!==a&&(o[a]=this.resourcePolicy[o.resource_policy][a],"total_resource_slots"===a&&(o.total_resource_slots=JSON.parse(this.resourcePolicy[o.resource_policy][a])));o.created_at_formatted=this._humanReadableTime(o.created_at),o.elapsed=this._elapsed(o.created_at),"cpu"in o.total_resource_slots||"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.cpu="-"),"mem"in o.total_resource_slots?o.total_resource_slots.mem=parseFloat(window.backendaiclient.utils.changeBinaryUnit(o.total_resource_slots.mem,"g")):"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.mem="-"),"cuda.device"in o.total_resource_slots&&(o.total_resource_slots.cuda_device=o.total_resource_slots["cuda.device"]),"cuda.shares"in o.total_resource_slots&&(o.total_resource_slots.cuda_shares=o.total_resource_slots["cuda.shares"]),"cuda_device"in o.total_resource_slots==!1&&"cuda_shares"in o.total_resource_slots==!1&&"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.cuda_shares="-",o.total_resource_slots.cuda_device="-"),["cpu","mem","cuda_shares","cuda_device"].forEach(e=>{o.total_resource_slots[e]=this._markIfUnlimited(o.total_resource_slots[e])})}}),this.keypairs=i}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}async _showKeypairDetail(e){const i=e.target.closest("#controls")["access-key"];try{const e=await this._getKeyData(i);this.keypairInfo=e.keypair,this.shadowRoot.querySelector("#keypair-info-dialog").show()}catch(e){e&&e.message&&(this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))}}async _modifyResourcePolicy(e){const i=e.target.closest("#controls")["access-key"];try{const e=await this._getKeyData(i);this.keypairInfo=e.keypair,this.shadowRoot.querySelector("#policy-list").value=this.keypairInfo.resource_policy,this.shadowRoot.querySelector("#keypair-modify-dialog").show()}catch(e){e&&e.message&&(this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))}}async _getKeyData(e){return window.backendaiclient.keypair.info(e,["access_key","secret_key","is_active","is_admin","user_id","created_at","last_used","concurrency_limit","concurrency_used","rate_limit","num_queries","resource_policy"])}refresh(){this._refreshKeyData()}_isActive(){return"active"===this.condition}_deleteKey(e){const i=e.target.closest("#controls")["access-key"];window.backendaiclient.keypair.delete(i).then(e=>{this.refresh()}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}_revokeKey(e){this._mutateKey(e,!1)}_reuseKey(e){this._mutateKey(e,!0)}_mutateKey(e,i){const t=e.target.closest("#controls")["access-key"];let o=this.keypairs.find(this._findKeyItem,t),a={is_active:i,is_admin:o.is_admin,resource_policy:o.resource_policy,rate_limit:o.rate_limit,concurrency_limit:o.concurrency_limit};window.backendaiclient.keypair.mutate(t,a).then(e=>{let i=new CustomEvent("backend-ai-credential-refresh",{detail:this});document.dispatchEvent(i)}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}_findKeyItem(e){return e.access_key=this}_elapsed(e,i){var t=new Date(e);if("active"==this.condition)var o=new Date;else o=new Date;var a=Math.floor((o.getTime()-t.getTime())/1e3);return Math.floor(a/86400)}_humanReadableTime(e){return new Date(e).toUTCString()}_indexRenderer(e,i,t){let o=t.index+1;d(c`
        <div>${o}</div>
      `,e)}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":e}controlRenderer(e,i,t){d(c`
            <div id="controls" class="layout horizontal flex center"
                 .access-key="${t.item.access_key}">
              <wl-button class="fg green" fab flat inverted @click="${e=>this._showKeypairDetail(e)}">
                 <wl-icon>assignment</wl-icon>
              </wl-button>
              <wl-button class="fg blue" fab flat inverted @click="${e=>this._modifyResourcePolicy(e)}">
                <wl-icon>settings</wl-icon>
              </wl-button>
              ${this.isAdmin&&this._isActive()?c`
                <wl-button class="fg blue" fab flat inverted @click="${e=>this._revokeKey(e)}">
                   <wl-icon>delete</wl-icon>
                </wl-button>
                <wl-button class="fg red" fab flat inverted @click="${e=>this._deleteKey(e)}">
                   <wl-icon>delete_forever</wl-icon>
                </wl-button>
              `:c``}
              ${!1===this._isActive()?c`
                <wl-button class="fg blue" fab flat inverted @click="${e=>this._reuseKey(e)}">
                   <wl-icon>redo</wl-icon>
                </wl-button>
              `:c``}
            </div>
      `,e)}_hideDialog(e){e.target.closest("wl-dialog").hide()}_saveKeypairModification(e){const i=this.shadowRoot.querySelector("#policy-list").value,t=this.shadowRoot.querySelector("#rate-limit").value;let o={};i!==this.keypairInfo.resource_policy&&(o=Object.assign(Object.assign({},o),{resource_policy:i})),t!==this.keypairInfo.rate_limit&&(o=Object.assign(Object.assign({},o),{rate_limit:t})),0===Object.entries(o).length?(this.notification.text="No changes were made",this.notification.show()):window.backendaiclient.keypair.mutate(this.keypairInfo.access_key,o).then(e=>{e.modify_keypair.ok?(this.notification.text="Successfully modified",this.refresh()):this.notification.text="Error",this.notification.show()}),this._hideDialog(e)}render(){return c`
      <lablup-loading-indicator id="loading-indicator"></lablup-loading-indicator>
      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Credential list"
                   id="keypair-grid" .items="${this.keypairs}">
        <vaadin-grid-column width="40px" flex-grow="0" header="#" .renderer="${this._indexRenderer}"></vaadin-grid-column>

        <vaadin-grid-column resizable>
          <template class="header">
            <vaadin-grid-sorter path="user_id">User ID</vaadin-grid-sorter>
          </template>
          <template>
            <div class="layout horizontal center flex">
              <div class="indicator">[[item.user_id]]</div>
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable>
          <template class="header">Access Key</template>
          <template>
            <div class="indicator">[[item.access_key]]</div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable>
          <template class="header">
            <vaadin-grid-sorter path="is_admin">Permission</vaadin-grid-sorter>
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

        <vaadin-grid-column resizable>
          <template class="header">
            <vaadin-grid-sorter path="created_at">Key age</vaadin-grid-sorter>
          </template>
          <template>
            <div class="layout vertical">
              <span>[[item.elapsed]] Days</span>
              <span class="indicator">([[item.created_at_formatted]])</span>
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column width="150px" resizable>
          <template class="header">Resource Policy</template>
          <template>
            <div class="layout horizontal wrap center">
              <div class="layout horizontal configuration">
                <wl-icon class="fg green">developer_board</wl-icon>
                <span>[[item.total_resource_slots.cpu]]</span>
                <span class="indicator">cores</span>
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
                <span class="indicator">Folders</span>
              </div>
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable>
          <template class="header">Allocation</template>
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

        <vaadin-grid-column width="150px" resizable header="Control" .renderer="${this._boundControlRenderer}">
        </vaadin-grid-column>
      </vaadin-grid>
      <wl-dialog id="keypair-info-dialog" fixed backdrop blockscrolling container="${document.body}">
        <wl-card elevation="0" class="intro" style="margin: 0;">
          <h3 class="horizontal center layout" style="border-bottom:1px solid #ddd;">
            <span style="margin-right:15px;">Keypair Detail</span>
            ${this.keypairInfo.is_admin?c`
              <lablup-shields app="" color="red" description="admin" ui="flat"></lablup-shields>
              `:c``}
            <lablup-shields app="" description="user" ui="flat"></lablup-shields>
            <div class="flex"></div>
            <wl-button class="fab" fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <div class="horizontal layout">
            <div style="width:335px;">
              <h4>Information</h4>
              <div role="listbox" style="margin: 0;">
                <vaadin-item>
                  <div><strong>User ID</strong></div>
                  <div secondary>${this.keypairInfo.user_id}</div>
                </vaadin-item>
                <vaadin-item>
                  <div><strong>Access Key</strong></div>
                  <div secondary>${this.keypairInfo.access_key}</div>
                </vaadin-item>
                <vaadin-item>
                  <div><strong>Secret Key</strong></div>
                  <div secondary>${this.keypairInfo.secret_key}</div>
                </vaadin-item>
                <vaadin-item>
                  <div><strong>Created</strong></div>
                  <div secondary>${this.keypairInfo.created_at}</div>
                </vaadin-item>
                <vaadin-item>
                  <div><strong>Last used</strong></div>
                  <div secondary>${this.keypairInfo.last_used}</div>
                </vaadin-item>
              </div>
            </div>
            <div style="width:335px;">
              <h4>Allocation</h4>
              <div role="listbox" style="margin: 0;">
                <vaadin-item>
                  <div><strong>Resource Policy</strong></div>
                  <div secondary>${this.keypairInfo.resource_policy}</div>
                </vaadin-item>
                <vaadin-item>
                  <div><strong>Number of queries</strong></div>
                  <div secondary>${this.keypairInfo.num_queries}</div>
                </vaadin-item>
                <vaadin-item>
                  <div><strong>Concurrent Sessions</strong></div>
                  <div secondary>${this.keypairInfo.concurrency_used} active / ${this.keypairInfo.concurrency_used} concurrent
                    sessions.
                  </div>
                </vaadin-item>
                <vaadin-item>
                  <div><strong>Rate Limit</strong></div>
                  <div secondary>${this.keypairInfo.rate_limit} for 900 seconds.</div>
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
                  ${Object.keys(this.resourcePolicy).map(e=>c`
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
    `}};e([i({type:Object})],h.prototype,"notification",void 0),e([i({type:Object})],h.prototype,"keypairInfo",void 0),e([i({type:Boolean})],h.prototype,"isAdmin",void 0),e([i({type:String})],h.prototype,"condition",void 0),e([i({type:Object})],h.prototype,"keypairs",void 0),e([i({type:Object})],h.prototype,"resourcePolicy",void 0),e([i({type:Object})],h.prototype,"indicator",void 0),e([i({type:Object})],h.prototype,"_boundControlRenderer",void 0),h=e([t("backend-ai-credential-list")],h);let m=class extends u{constructor(){super(),this.visible=!1,this.keypairs={},this.resourcePolicy={},this.keypairInfo={},this.is_admin=!1,this.active=!1,this.condition="active",this.cpu_metric=[1,2,3,4,8,16,24,32,48,"Unlimited"],this.ram_metric=[1,2,4,8,16,24,32,64,128,256,512,"Unlimited"],this.gpu_metric=[0,1,2,3,4,5,6,7,8,12,16,"Unlimited"],this.fgpu_metric=[0,.2,.3,.5,1,2,3,4,8,16,"Unlimited"],this.rate_metric=[1e3,2e3,3e3,4e3,5e3,1e4,5e4],this.concurrency_metric=[1,2,3,4,5,10,50,"Unlimited"],this.container_per_session_metric=[1,2,3,4,8,"Unlimited"],this.idle_timeout_metric=[60,600,900,1800,3600,43200,86400,604800,1209600],this.vfolder_capacity_metric=[1,2,5,10,20,50,100,200,1e3],this.vfolder_count_metric=[1,2,3,4,5,10,30,50,100],this.allowed_vfolder_hosts=[],this.default_vfolder_host="",this._boundResourceRenderer=this.resourceRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this)}static get styles(){return[o,a,s,n`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 260px);
        }

        paper-item {
          height: 30px;
          --paper-item-min-height: 30px;
        }

        iron-icon {
          width: 16px;
          height: 16px;
          min-width: 16px;
          min-height: 16px;
          padding: 0;
        }

        paper-icon-button {
          --paper-icon-button: {
            width: 25px;
            height: 25px;
            min-width: 25px;
            min-height: 25px;
            padding: 3px;
            margin-right: 5px;
          };
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

        div.configuration iron-icon {
          padding-right: 5px;
        }

        wl-button.create-button {
          width: calc(100% - 40px);
        }

        paper-dialog paper-input {
          padding-left: 20px;
          padding-right: 20px;
        }

        paper-dialog h4 {
          margin: 10px 0 5px 0;
          font-weight: 400;
          font-size: 13px;
          padding-left: 20px;
          border-bottom: 1px solid #ccc;
        }

        wl-button.create-button {
          width: 335px;
          --button-bg: white;
          --button-bg-hover: var(--paper-green-100);
          --button-bg-active: var(--paper-green-600);
        }
      `]}render(){return c`
      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Resource Policy list"
                   .items="${this.resourcePolicy}">
        <vaadin-grid-column width="40px" flex-grow="0" header="#" .renderer="${this._indexRenderer}"></vaadin-grid-column>
        <vaadin-grid-column resizable>
          <template class="header">
            <vaadin-grid-sorter path="name">Name</vaadin-grid-sorter>
          </template>
          <template>
            <div class="layout horizontal center flex">
              <div>[[item.name]]</div>
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column width="150px" resizable header="Resources" .renderer="${this._boundResourceRenderer}">
        </vaadin-grid-column>

        <vaadin-grid-column resizable>
          <template class="header">
            <vaadin-grid-sorter path="max_concurrent_sessions">Concurrency</vaadin-grid-sorter>
          </template>
          <template>
            <div>[[item.max_concurrent_sessions]]
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable>
          <template class="header">
            <vaadin-grid-sorter path="max_containers_per_session">Cluster size</vaadin-grid-sorter>
          </template>
          <template>
            <div>[[item.max_containers_per_session]]</div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable>
          <template class="header">Storage Nodes</template>
          <template>
            <div class="layout horizontal center flex">
              <div class="vertical start layout">
                <div>[[item.allowed_vfolder_hosts]]
                </div>
              </div>
            </div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column resizable header="Control" .renderer="${this._boundControlRenderer}">
        </vaadin-grid-column>

      </vaadin-grid>
      <wl-dialog id="modify-policy-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="1" class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>Update resource policy</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <form id="login-form">
            <fieldset>
              <paper-input type="text" name="new_policy_name" id="id_new_policy_name" label="Policy Name"
                           required
                           error-message="Policy name only accepts letters and numbers"></paper-input>
              <h4>Resource Policy</h4>
              <div class="horizontal center layout">
                <paper-dropdown-menu id="cpu-resource" label="CPU">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.cpu_metric.map(e=>c`
                    <paper-item value="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu id="ram-resource" label="RAM (GB)">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.ram_metric.map(e=>c`
                    <paper-item value="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu id="gpu-resource" label="GPU">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.gpu_metric.map(e=>c`
                    <paper-item value="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu id="fgpu-resource" label="fgpu">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.fgpu_metric.map(e=>c`
                    <paper-item value="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
              <h4>Sessions</h4>
              <div class="horizontal center layout">
                <paper-dropdown-menu id="container-per-session-limit" label="Container per session">
                  <paper-listbox slot="dropdown-content" selected="0">
                    ${this.container_per_session_metric.map(e=>c`
                      <paper-item value="${e}">${e}</paper-item>
                    `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu id="idle-timeout" label="Idle timeout (sec.)">
                  <paper-listbox slot="dropdown-content" selected="0">
                    ${this.idle_timeout_metric.map(e=>c`
                      <paper-item value="${e}">${e}</paper-item>
                    `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>

              <div class="horizontal center layout">
                <paper-dropdown-menu id="concurrency-limit" label="Concurrent Jobs">
                  <paper-listbox slot="dropdown-content" selected="0">
                    ${this.concurrency_metric.map(e=>c`
                      <paper-item value="${e}">${e}</paper-item>
                    `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
              <h4>Folders</h4>
              <div class="horizontal center layout">
                <paper-dropdown-menu id="allowed_vfolder-hosts" label="Allowed hosts">
                  <paper-listbox slot="dropdown-content" selected="0">
                    ${this.allowed_vfolder_hosts.map(e=>c`
                      <paper-item value="${e}">${e}</paper-item>
                    `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu id="vfolder-capacity-limit" label="Capacity (GB)">
                  <paper-listbox slot="dropdown-content" selected="0">
                    ${this.vfolder_capacity_metric.map(e=>c`
                      <paper-item value="${e}">${e}</paper-item>
                    `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu id="vfolder-count-limit" label="Max.#">
                  <paper-listbox slot="dropdown-content" selected="0">
                    ${this.vfolder_count_metric.map(e=>c`
                      <paper-item value="${e}">${e}</paper-item>
                    `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>

              <br/><br/>
              <wl-button class="fg blue create-button" id="create-policy-button" type="button"
                outlined @click="${()=>this._modifyResourcePolicy()}">
                <wl-icon>add</wl-icon>
                Update
              </wl-button>

            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>
    `}_indexRenderer(e,i,t){let o=t.index+1;d(c`
        <div>${o}</div>
      `,e)}_hideDialog(e){e.target.closest("wl-dialog").hide()}resourceRenderer(e,i,t){d(c`
        <div class="layout horizontal wrap center">
          <div class="layout horizontal configuration">
            <iron-icon class="fg green" icon="hardware:developer-board"></iron-icon>
            <span>${this._markIfUnlimited(t.item.total_resource_slots.cpu)}</span>
            <span class="indicator">cores</span>
          </div>
          <div class="layout horizontal configuration">
            <iron-icon class="fg green" icon="hardware:memory"></iron-icon>
            <span>${this._markIfUnlimited(t.item.total_resource_slots.mem)}</span>
            <span class="indicator">GB</span>
          </div>
        </div>
        <div class="layout horizontal wrap center">
        ${t.item.total_resource_slots.cuda_device?c`
          <div class="layout horizontal configuration">
            <iron-icon class="fg green" icon="icons:view-module"></iron-icon>
            <span>${this._markIfUnlimited(t.item.total_resource_slots.cuda_device)}</span>
            <span class="indicator">GPU</span>
          </div>
`:c``}
        ${t.item.total_resource_slots.cuda_shares?c`
          <div class="layout horizontal configuration">
            <iron-icon class="fg green" icon="icons:view-module"></iron-icon>
            <span>${this._markIfUnlimited(t.item.total_resource_slots.cuda_shares)}</span>
            <span class="indicator">fGPU</span>
          </div>
`:c``}
        </div>
        <div class="layout horizontal wrap center">
          <div class="layout horizontal configuration">
            <iron-icon class="fg green" icon="icons:cloud-queue"></iron-icon>
            <span>${this._markIfUnlimited(t.item.max_vfolder_size)}</span>
            <span class="indicator">GB</span>
          </div>
          <div class="layout horizontal configuration">
            <iron-icon class="fg green" icon="icons:folder"></iron-icon>
            <span>${this._markIfUnlimited(t.item.max_vfolder_count)}</span>
            <span class="indicator">Folders</span>
          </div>
        </div>
      `,e)}controlRenderer(e,i,t){d(c`
        <div id="controls" class="layout horizontal flex center"
             .policy-name="${t.item.name}">
        ${this.is_admin?c`
              <paper-icon-button class="fg green controls-running" icon="settings"
                                 @click="${e=>this._launchResourcePolicyDialog(e)}"></paper-icon-button>
                                 `:c``}
        </div>
    `,e)}firstUpdated(){this.notification=window.lablupNotification}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._refreshPolicyData(),this.is_admin=window.backendaiclient.is_admin},!0):(this._refreshPolicyData(),this.is_admin=window.backendaiclient.is_admin))}_launchResourcePolicyDialog(e){this.updateCurrentPolicyToDialog(e),this.shadowRoot.querySelector("#modify-policy-dialog").show()}updateCurrentPolicyToDialog(e){const i=e.target.closest("#controls")["policy-name"];let t=window.backendaiclient.utils.gqlToObject(this.resourcePolicy,"name")[i];this.shadowRoot.querySelector("#id_new_policy_name").value=i,this.shadowRoot.querySelector("#cpu-resource").value=t.total_resource_slots.cpu,this.shadowRoot.querySelector("#gpu-resource").value=t.total_resource_slots.cuda_device,this.shadowRoot.querySelector("#fgpu-resource").value=t.total_resource_slots.cuda_shares,this.shadowRoot.querySelector("#ram-resource").value=t.total_resource_slots.mem,this.shadowRoot.querySelector("#concurrency-limit").value=t.max_concurrent_sessions,this.shadowRoot.querySelector("#container-per-session-limit").value=t.max_containers_per_session,this.shadowRoot.querySelector("#vfolder-count-limit").value=t.max_vfolder_count,this.shadowRoot.querySelector("#vfolder-capacity-limit").value=t.max_vfolder_size,this.shadowRoot.querySelector("#idle-timeout").value=t.idle_timeout,this.shadowRoot.querySelector("#allowed_vfolder-hosts").value=t.allowed_vfolder_hosts[0]}_refreshPolicyData(){return window.backendaiclient.resourcePolicy.get().then(e=>{return e.keypair_resource_policies}).then(e=>{let i=e;Object.keys(i).map((e,t)=>{var o=i[e];o.total_resource_slots=JSON.parse(o.total_resource_slots),"cpu"in o.total_resource_slots||"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.cpu="Unlimited"),"mem"in o.total_resource_slots?o.total_resource_slots.mem=parseFloat(window.backendaiclient.utils.changeBinaryUnit(o.total_resource_slots.mem,"g")):"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.mem="Unlimited"),"cuda.device"in o.total_resource_slots?0===o.total_resource_slots["cuda.device"]&&"UNLIMITED"===o.default_for_unspecified?o.total_resource_slots.cuda_device="Unlimited":o.total_resource_slots.cuda_device=o.total_resource_slots["cuda.device"]:"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.cuda_device="Unlimited"),"cuda.shares"in o.total_resource_slots?0===o.total_resource_slots["cuda.shares"]&&"UNLIMITED"===o.default_for_unspecified?o.total_resource_slots.cuda_shares="Unlimited":o.total_resource_slots.cuda_shares=o.total_resource_slots["cuda.shares"]:"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.cuda_shares="Unlimited")}),this.resourcePolicy=i}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}refresh(){this._refreshPolicyData()}_isActive(){return"active"===this.condition}_readResourcePolicyInput(){let e=this.shadowRoot.querySelector("#cpu-resource").value,i=this.shadowRoot.querySelector("#ram-resource").value,t=this.shadowRoot.querySelector("#gpu-resource").value,o=this.shadowRoot.querySelector("#fgpu-resource").value,a=[];a.push(this.shadowRoot.querySelector("#allowed_vfolder-hosts").value),"Unlimited"===e&&(e="Infinity"),"Unlimited"===i?i="Infinity":i+="g";let s={cpu:e,mem:i,"cuda.device":t="Unlimited"===t?"Infinity":parseInt(t).toString(),"cuda.shares":o="Unlimited"===o?"Infinity":parseFloat(o).toString()},r=this.shadowRoot.querySelector("#concurrency-limit").value,l=this.shadowRoot.querySelector("#container-per-session-limit").value,n=this.shadowRoot.querySelector("#vfolder-count-limit").value,d=this.shadowRoot.querySelector("#vfolder-capacity-limit").value,c=this.shadowRoot.querySelector("#idle-timeout").value;return{default_for_unspecified:"UNLIMITED",total_resource_slots:JSON.stringify(s),max_concurrent_sessions:r,max_containers_per_session:l,idle_timeout:parseInt(c),max_vfolder_count:n,max_vfolder_size:d,allowed_vfolder_hosts:a}}_modifyResourcePolicy(){let e=this.shadowRoot.querySelector("#id_new_policy_name").value,i=this._readResourcePolicyInput();window.backendaiclient.resourcePolicy.mutate(e,i).then(({modify_keypair_resource_policy:e})=>{e.ok&&(this.shadowRoot.querySelector("#modify-policy-dialog").hide(),this.notification.text="Resource policy successfully updated.",this.notification.show(),this.refresh())}).catch(e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#modify-policy-dialog").hide(),this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}_deleteKey(e){const i=e.target.closest("#controls").accessKey;window.backendaiclient.keypair.delete(i).then(e=>{this.refresh()}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":["NaN",NaN].includes(e)?"-":e}};e([i({type:Boolean})],m.prototype,"visible",void 0),e([i({type:Object})],m.prototype,"keypairs",void 0),e([i({type:Object})],m.prototype,"resourcePolicy",void 0),e([i({type:Object})],m.prototype,"keypairInfo",void 0),e([i({type:Boolean})],m.prototype,"is_admin",void 0),e([i({type:Boolean})],m.prototype,"active",void 0),e([i({type:String})],m.prototype,"condition",void 0),e([i({type:Array})],m.prototype,"cpu_metric",void 0),e([i({type:Array})],m.prototype,"ram_metric",void 0),e([i({type:Array})],m.prototype,"gpu_metric",void 0),e([i({type:Array})],m.prototype,"fgpu_metric",void 0),e([i({type:Array})],m.prototype,"rate_metric",void 0),e([i({type:Array})],m.prototype,"concurrency_metric",void 0),e([i({type:Array})],m.prototype,"container_per_session_metric",void 0),e([i({type:Array})],m.prototype,"idle_timeout_metric",void 0),e([i({type:Array})],m.prototype,"vfolder_capacity_metric",void 0),e([i({type:Array})],m.prototype,"vfolder_count_metric",void 0),e([i({type:Array})],m.prototype,"allowed_vfolder_hosts",void 0),e([i({type:String})],m.prototype,"default_vfolder_host",void 0),e([i({type:Object})],m.prototype,"_boundResourceRenderer",void 0),e([i({type:Object})],m.prototype,"_boundControlRenderer",void 0),m=e([t("backend-ai-resource-policy-list")],m);let _=class extends u{constructor(){super(),this.isAdmin=!1,this.editMode=!1,this.users=Object(),this.userInfo=Object(),this.userInfoGroups=Array(),this.condition="active",this._boundControlRenderer=this.controlRenderer.bind(this),this.signoutUserDialog=Object(),this.signoutUserName="",this.notification=Object()}static get styles(){return[o,a,s,r,l,n`
          vaadin-grid {
              border: 0;
              font-size: 14px;
              height: calc(100vh - 260px);
          }

          paper-item {
              height: 30px;
              --paper-item-min-height: 30px;
          }

          iron-icon {
              width: 16px;
              height: 16px;
              min-width: 16px;
              min-height: 16px;
              padding: 0;
          }

          paper-icon-button {
              --paper-icon-button: {
                  width: 25px;
                  height: 25px;
                  min-width: 25px;
                  min-height: 25px;
                  padding: 3px;
                  margin-right: 5px;
              };
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

          div.configuration iron-icon {
              padding-right: 5px;
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
      `]}firstUpdated(){this.indicator=this.shadowRoot.querySelector("#loading-indicator"),this.notification=window.lablupNotification,this.signoutUserDialog=this.shadowRoot.querySelector("#signout-user-dialog")}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._refreshUserData(),this.isAdmin=window.backendaiclient.is_admin},!0):(this._refreshUserData(),this.isAdmin=window.backendaiclient.is_admin))}_refreshUserData(){let e=!0;switch(this.condition){case"active":e=!0;break;default:e=!1}this.indicator.hide();return window.backendaiclient.user.list(e,["email","username","password","need_password_change","full_name","description","is_active","domain_name","role","groups {id name}"]).then(e=>{let i=e.users;this.users=i}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}async _editUserDetail(e){return this.editMode=!0,this._showUserDetailDialog(e)}async _showUserDetail(e){return this.editMode=!1,this._showUserDetailDialog(e)}async _showUserDetailDialog(e){const i=e.target.closest("#controls")["user-id"];let t;try{const e=await this._getUserData(i);this.userInfo=e.user,t=this.userInfo.groups.map(e=>e.name),this.userInfoGroups=t,this.shadowRoot.querySelector("#user-info-dialog").show()}catch(e){e&&e.message&&(this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))}}_signoutUserDialog(e){const i=e.target.closest("#controls")["user-id"];this.signoutUserName=i,this.signoutUserDialog.show()}_signoutUser(){window.backendaiclient.user.delete(this.signoutUserName).then(e=>{this.notification.text=p.relieve("Signout finished.")}).catch(e=>{console.log(e),void 0!==e.message?(this.notification.text=p.relieve(e.title),this.notification.detail=e.message):this.notification.text=p.relieve("Signout failed. Check your permission and try again."),this.notification.show()})}async _getUserData(e){return window.backendaiclient.user.get(e,["email","username","password","need_password_change","full_name","description","is_active","domain_name","role","groups {id name}"])}refresh(){this._refreshUserData()}_isActive(){return"active"===this.condition}_elapsed(e,i){var t=new Date(e);if("active"==this.condition)var o=new Date;else o=new Date;var a=Math.floor((o.getTime()-t.getTime())/1e3);return Math.floor(a/86400)}_humanReadableTime(e){return new Date(e).toUTCString()}_indexRenderer(e,i,t){let o=t.index+1;d(c`
        <div>${o}</div>
      `,e)}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":e}controlRenderer(e,i,t){d(c`
            <div
              id="controls"
              class="layout horizontal flex center"
              .user-id="${t.item.email}"
            >
              <paper-icon-button
                class="fg green"
                icon="assignment"
                @click="${e=>this._showUserDetail(e)}"
              ></paper-icon-button>

              <paper-icon-button
                class="fg blue"
                icon="settings"
                @click="${e=>this._editUserDetail(e)}"
              ></paper-icon-button>

              ${window.backendaiclient.is_superadmin&&this._isActive()?c`
                    <paper-icon-button class="fg red controls-running" icon="icons:delete-forever"
                                       @click="${e=>this._signoutUserDialog(e)}"></paper-icon-button>
              `:c``}
            </div>
      `,e)}_hideDialog(e){e.target.closest("wl-dialog").hide()}_saveChanges(e){const i=this.shadowRoot.querySelector("#username").value,t=this.shadowRoot.querySelector("#full_name").value,o=this.shadowRoot.querySelector("#password").value,a=this.shadowRoot.querySelector("#confirm").value,s=this.shadowRoot.querySelector("#description").value,r=this.shadowRoot.querySelector("#is_active").checked,l=this.shadowRoot.querySelector("#need_password_change").checked;if(o!==a)return this.notification.text="Password and Confirmation do not match.",void this.notification.show();let n=Object();if(""!==o&&(n.password=o),i!==this.userInfo.username&&(n.username=i),t!==this.userInfo.full_name&&(n.full_name=t),s!==this.userInfo.description&&(n.description=s),l!==this.userInfo.need_password_change&&(n.need_password_change=l),r!==this.userInfo.is_active&&(n.is_active=r),0===Object.entries(n).length)return this._hideDialog(e),this.notification.text="No Changes Made",void this.notification.show();window.backendaiclient.user.modify(this.userInfo.email,n).then(e=>{e.modify_user.ok?(this.shadowRoot.querySelector("#user-info-dialog").hide(),this.notification.text="Successfully Modified",this.userInfo=Object.assign(Object.assign(Object.assign({},this.userInfo),n),{password:null}),this._refreshUserData(),this.shadowRoot.querySelector("#password").value="",this.shadowRoot.querySelector("#confirm").value=""):(this.notification.text=`Error: ${e.modify_user.msg}`,this.shadowRoot.querySelector("#username").value=this.userInfo.username,this.shadowRoot.querySelector("#description").value=this.userInfo.description),this.notification.show()})}render(){return c`
      <lablup-loading-indicator id="loading-indicator"></lablup-loading-indicator>
      <vaadin-grid theme="row-stripes column-borders compact" aria-label="User list"
                   id="user-grid" .items="${this.users}">
        <vaadin-grid-column width="40px" flex-grow="0" header="#" .renderer="${this._indexRenderer}"></vaadin-grid-column>
        <vaadin-grid-sort-column resizable header="User ID" path="email">
          <template>
            <div class="layout horizontal center flex">
              <div class="indicator">[[item.email]]</div>
            </div>
          </template>
        </vaadin-grid-sort-column>
        <vaadin-grid-sort-column resizable header="Name" path="username">
          <template>
            <div class="layout horizontal center flex">
              <div class="indicator">[[item.username]]</div>
            </div>
          </template>
        </vaadin-grid-sort-column>
        <vaadin-grid-column resizable header="Control" .renderer="${this._boundControlRenderer}">
        </vaadin-grid-column>
      </vaadin-grid>
      <wl-dialog id="signout-user-dialog" fixed backdrop blockscrolling>
         <wl-title level="3" slot="header">Let's double-check</wl-title>
         <div slot="content">
            <p>You are inactivating the user <span style="color:red">${this.signoutUserName}</span>. Do you want to proceed?</p>
         </div>
         <div slot="footer">
            <wl-button class="cancel" inverted flat @click="${e=>this._hideDialog(e)}">Cancel</wl-button>
            <wl-button class="ok" @click="${()=>this._signoutUser()}">Okay</wl-button>
         </div>
      </wl-dialog>
      <wl-dialog id="user-info-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="0" class="intro" style="margin: 0;">
          <h3 class="horizontal center layout" style="border-bottom:1px solid #ddd;">
            <span style="margin-right:15px;">User Detail</span>
            <lablup-shields app="" description="user" ui="flat"></lablup-shields>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <div class="horizontal layout">
            <div style="width:335px;">
              <h4>Information</h4>
              <div role="listbox" style="margin: 0;">
                <wl-textfield
                  label="User ID"
                  disabled
                  value="${this.userInfo.email}"
                ></wl-textfield>
                <wl-textfield
                  label="User name"
                  id="username"
                  ?disabled=${!this.editMode}
                  value="${this.userInfo.username}"
                ></wl-textfield>
                <wl-textfield
                  label="Full name"
                  id="full_name"
                  ?disabled=${!this.editMode}
                  value="${this.userInfo.full_name?this.userInfo.full_name:" "}"
                ></wl-textfield>
                ${this.editMode?c`
                      <wl-textfield type="password" label="New Password" id="password"></wl-textfield>
                      <wl-textfield type="password" label="Confirm" id="confirm"></wl-textfield>
                    `:c``}
                <wl-textarea
                  label="Description"
                  id="description"
                  value="${this.userInfo.description?this.userInfo.description:" "}"
                  ?disabled=${!this.editMode}
                >
                </wl-textarea>

                ${this.editMode?c`
                      <wl-label label for="is_active_label" style="margin-bottom: auto">
                        Active user?
                      </wl-label>
                      <wl-label label id="is_active_label">
                        <wl-switch
                          id="is_active"
                          ?checked=${this.userInfo.is_active}
                        ></wl-switch>
                      </wl-label>
                      <wl-label label for="need_password_change_label" style="margin-bottom: auto">
                        Require password change?
                      </wl-label>
                      <wl-label label id="need_password_change_label">
                        <wl-switch id="need_password_change" ?checked=${this.userInfo.need_password_change}></wl-switch>
                      </wl-label>
                      <wl-button
                        class="fg green"
                        type="button"
                        outlined
                        @click=${e=>this._saveChanges(e)}
                        style="width: 305px; margin: 0 15px 10px 15px; box-sizing: border-box;"
                      >
                        <wl-icon>check</wl-icon>
                        Save Changes
                      </wl-button>
                    `:c`
                      <wl-textfield
                        label="Active user?"
                        disabled
                        value="${this.userInfo.is_active?"Yes":"No"}"
                      ></wl-textfield>
                      <wl-textfield
                        label="Require password change?"
                        disabled
                        value="${this.userInfo.need_password_change?"Yes":"No"}"
                      ></wl-textfield>
                    `}
              </div>
            </div>
            ${this.editMode?c``:c`
                <div style="width:270px;">
                  <h4>Association</h4>
                  <div role="listbox" style="margin: 0;">
                    <vaadin-item>
                      <div><strong>Domain</strong></div>
                      <div secondary>${this.userInfo.domain_name}</div>
                    </vaadin-item>
                    <vaadin-item>
                      <div><strong>Role</strong></div>
                      <div secondary>${this.userInfo.role}</div>
                    </vaadin-item>
                    <vaadin-item>
                      <div><strong>Groups</strong></div>
                      <div secondary>
                      <ul>
                      ${this.userInfoGroups.map(e=>c`
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
    `}};e([i({type:Boolean})],_.prototype,"isAdmin",void 0),e([i({type:Boolean})],_.prototype,"editMode",void 0),e([i({type:Object})],_.prototype,"users",void 0),e([i({type:Object})],_.prototype,"userInfo",void 0),e([i({type:Array})],_.prototype,"userInfoGroups",void 0),e([i({type:String})],_.prototype,"condition",void 0),e([i({type:Object})],_.prototype,"_boundControlRenderer",void 0),e([i({type:Object})],_.prototype,"indicator",void 0),e([i({type:Object})],_.prototype,"keypairs",void 0),e([i({type:Object})],_.prototype,"signoutUserDialog",void 0),e([i({type:String})],_.prototype,"signoutUserName",void 0),e([i({type:Object})],_.prototype,"notification",void 0),_=e([t("backend-ai-user-list")],_);let v=class extends u{constructor(){super(),this.cpu_metric=[1,2,3,4,8,16,24,32,48,"Unlimited"],this.ram_metric=[1,2,4,8,16,24,32,64,128,256,512,"Unlimited"],this.gpu_metric=[0,1,2,3,4,5,6,7,8,12,16,"Unlimited"],this.fgpu_metric=[0,.2,.3,.5,1,2,3,4,8,16,"Unlimited"],this.rate_metric=[1e3,2e3,3e3,4e3,5e3,1e4,5e4],this.concurrency_metric=[1,2,3,4,5,10,50,"Unlimited"],this.container_per_session_metric=[1,2,3,4,8,"Unlimited"],this.idle_timeout_metric=[60,600,900,1800,3600,43200,86400,604800,1209600],this.vfolder_capacity_metric=[1,2,5,10,20,50,100,200,1e3],this.vfolder_count_metric=[1,2,3,4,5,10,30,50,100],this.resource_policies=Object(),this.resource_policy_names=Array(),this.is_admin=!1,this._status="inactive",this.allowed_vfolder_hosts=Array(),this.default_vfolder_host="",this.use_user_list=!1,this.new_access_key="",this.new_secret_key="",this._activeTab="credential-lists",this.notification=Object()}static get styles(){return[o,a,s,r,l,n`
        wl-button.create-button {
          width: 335px;
        }

        #new-keypair-dialog {
          min-width: 350px;
        }

        fieldset {
          padding: 0;
        }

        fieldset div {
          padding-left: 20px;
          padding-right: 20px;
        }

        fieldset wl-button {
          margin-left: 20px;
          margin-right: 20px;
          margin-bottom: 20px;
        }

        wl-dialog wl-textfield {
          padding-left: 20px;
          padding-right: 20px;
          --input-font-family: Roboto, Noto, sans-serif;
        }

        wl-textfield {
          --input-state-color-invalid: red;
        }

        wl-dialog paper-input {
          margin: 15px 0 5px 0;
          width: 100%;
        }
        wl-dialog h4 {
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
          border-bottom: 1px solid #DDD;
        }

        wl-expansion h4 {
          font-weight: 200;
          border-bottom: 0;
        }

        #new-user-dialog wl-textfield {
          margin-bottom: 15px;
        }
      `]}firstUpdated(){this.notification=window.lablupNotification,document.addEventListener("backend-ai-credential-refresh",()=>{this.shadowRoot.querySelector("#active-credential-list").refresh(),this.shadowRoot.querySelector("#inactive-credential-list").refresh()},!0),this.shadowRoot.querySelectorAll("wl-expansion").forEach(e=>{e.addEventListener("keydown",e=>{e.stopPropagation()},!0)}),void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{!0!==window.backendaiclient.is_admin&&this.disablePage(),!0===window.backendaiclient.isAPIVersionCompatibleWith("v4.20190601")&&(this.use_user_list=!0)}):(!0!==window.backendaiclient.is_admin&&this.disablePage(),!0===window.backendaiclient.isAPIVersionCompatibleWith("v4.20190601")?this.use_user_list=!0:this.use_user_list=!1)}async _viewStateChanged(e){if(await this.updateComplete,!1===e)return this.shadowRoot.querySelector("#resource-policy-list").active=!1,this.shadowRoot.querySelector("#user-list").active=!1,void(this._status="inactive");this.shadowRoot.querySelector("#resource-policy-list").active=!0,this.shadowRoot.querySelector("#user-list").active=!0,this._status="active"}async _launchKeyPairDialog(){await this._getResourcePolicies(),this.shadowRoot.querySelector("#new-keypair-dialog").show()}_readVFolderHostInfo(){window.backendaiclient.vfolder.list_hosts().then(e=>{this.allowed_vfolder_hosts=e.allowed,this.default_vfolder_host=e.default}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}_launchResourcePolicyDialog(){this._readVFolderHostInfo(),this.shadowRoot.querySelector("#new-policy-dialog").show()}_launchModifyResourcePolicyDialog(){this._readVFolderHostInfo(),this.shadowRoot.querySelector("#new-policy-dialog").show()}_launchUserAddDialog(){this.shadowRoot.querySelector("#new-user-dialog").show()}async _getResourcePolicies(){return window.backendaiclient.resourcePolicy.get(null,["name","default_for_unspecified","total_resource_slots","max_concurrent_sessions","max_containers_per_session"]).then(e=>{let i=window.backendaiclient.utils.gqlToObject(e.keypair_resource_policies,"name"),t=window.backendaiclient.utils.gqlToList(e.keypair_resource_policies,"name");this.resource_policies=i,this.resource_policy_names=t})}_addKeyPair(){let e;if(""!=this.shadowRoot.querySelector("#id_new_user_id").value){if(1==this.shadowRoot.querySelector("#id_new_user_id").invalid)return;e=this.shadowRoot.querySelector("#id_new_user_id").value}else e=window.backendaiclient.email;let i=this.shadowRoot.querySelector("#resource-policy").value,t=this.shadowRoot.querySelector("#rate-limit").value,o=this.shadowRoot.querySelector("#id_new_access_key").value,a=this.shadowRoot.querySelector("#id_new_secret_key").value;window.backendaiclient.keypair.add(e,!0,!1,i,t,o,a).then(e=>{this.shadowRoot.querySelector("#new-keypair-dialog").hide(),this.notification.text="Keypair successfully created.",this.notification.show(),this.shadowRoot.querySelector("#active-credential-list").refresh()}).catch(e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#new-keypair-dialog").hide(),this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}_readResourcePolicyInput(){let e=this.shadowRoot.querySelector("#cpu-resource").value,i=this.shadowRoot.querySelector("#ram-resource").value,t=this.shadowRoot.querySelector("#gpu-resource").value,o=this.shadowRoot.querySelector("#fgpu-resource").value,a=[];a.push(this.shadowRoot.querySelector("#allowed_vfolder-hosts").value),"Unlimited"===e&&(e="Infinity"),"Unlimited"===i?i="Infinity":i+="g";let s={cpu:e,mem:i,"cuda.device":t="Unlimited"===t?"Infinity":parseInt(t).toString(),"cuda.shares":o="Unlimited"===o?"Infinity":parseFloat(o).toString()},r=this.shadowRoot.querySelector("#concurrency-limit").value,l=this.shadowRoot.querySelector("#container-per-session-limit").value,n=this.shadowRoot.querySelector("#vfolder-count-limit").value,d=this.shadowRoot.querySelector("#vfolder-capacity-limit").value,c=this.shadowRoot.querySelector("#idle-timeout").value;return{default_for_unspecified:"UNLIMITED",total_resource_slots:JSON.stringify(s),max_concurrent_sessions:r,max_containers_per_session:l,idle_timeout:parseInt(c),max_vfolder_count:n,max_vfolder_size:d,allowed_vfolder_hosts:a}}_addResourcePolicy(){let e;if(""==this.shadowRoot.querySelector("#id_new_policy_name").value)return this.notification.text="Please input policy name",void this.notification.show();if(1==this.shadowRoot.querySelector("#id_new_policy_name").invalid)return;e=this.shadowRoot.querySelector("#id_new_policy_name").value;let i=this._readResourcePolicyInput();window.backendaiclient.resourcePolicy.add(e,i).then(e=>{this.shadowRoot.querySelector("#new-policy-dialog").hide(),this.notification.text="Resource policy successfully created.",this.notification.show(),this.shadowRoot.querySelector("#resource-policy-list").refresh()}).catch(e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#new-policy-dialog").hide(),this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}_addUser(){const e=this.shadowRoot.querySelector("#id_user_email").value,i=this.shadowRoot.querySelector("#id_user_name").value,t=this.shadowRoot.querySelector("#id_user_password").value,o=this.shadowRoot.querySelector("#id_user_confirm").value;if(""===e)return this.notification.text="Please Input User Id(Email)!",void this.notification.show();if(this.shadowRoot.querySelector("#id_user_email").hasAttribute("invalid"))return this.notification.text="Email Is Invalid!",void this.notification.show();if(""===i)return this.notification.text="Username Is Empty!",void this.notification.show();if(null!==this.shadowRoot.querySelector("#id_user_password").getAttribute("invalid"))return this.notification.text="Password must contain at least one alphabet, one digit, and one special character",void this.notification.show();if(""===t)return this.notification.text="Password Is Empty!",void this.notification.show();if(t!==o)return this.notification.text="Confirmation Does Not Match With Original Password!",void this.notification.show();const a={username:i,password:t,need_password_change:!1,full_name:i,description:`${i}'s Account`,is_active:!0,domain_name:"default",role:"user"};window.backendaiclient.group.list().then(i=>{const t=i.groups.find(e=>"default"===e.name).id;return Promise.resolve(window.backendaiclient.user.add(e,Object.assign(Object.assign({},a),{group_ids:[t]})))}).then(e=>{this.shadowRoot.querySelector("#new-user-dialog").hide(),e.create_user.ok?(this.notification.text="User successfully created",this.shadowRoot.querySelector("#user-list").refresh()):(console.error(e.create_user.msg),this.notification.text="Error on user creation"),this.notification.show(),this.shadowRoot.querySelector("#id_user_email").value="",this.shadowRoot.querySelector("#id_user_name").value="",this.shadowRoot.querySelector("#id_user_password").value="",this.shadowRoot.querySelector("#id_user_confirm").value=""})}_modifyResourcePolicy(){let e=this.shadowRoot.querySelector("#id_new_policy_name").value,i=this._readResourcePolicyInput();window.backendaiclient.resourcePolicy.mutate(e,i).then(e=>{this.shadowRoot.querySelector("#new-policy-dialog").close(),this.notification.text="Resource policy successfully updated.",this.notification.show(),this.shadowRoot.querySelector("#resource-policy-list").refresh()}).catch(e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#new-policy-dialog").close(),this.notification.text=p.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}disablePage(){for(var e=this.shadowRoot.querySelectorAll(".admin"),i=0;i<e.length;i++)e[i].style.display="none"}_hideDialog(e){e.target.closest("wl-dialog").hide()}_showTab(e){for(var i=this.shadowRoot.querySelectorAll(".tab-content"),t=0;t<i.length;t++)i[t].style.display="none";this._activeTab=e.value,this.shadowRoot.querySelector("#"+e.value).style.display="block"}render(){return c`
      <wl-card class="admin item" elevation="1">
        <h3 class="tab horizontal wrap layout">
          <wl-tab-group>
            <wl-tab value="credential-lists" checked @click="${e=>this._showTab(e.target)}">Credentials</wl-tab>
            <wl-tab value="resource-policy-lists" @click="${e=>this._showTab(e.target)}">Resource Policies</wl-tab>
            ${"active"===this._status&&!0===this.use_user_list?c`
            <wl-tab value="user-lists" @click="${e=>this._showTab(e.target)}">Users</wl-tab>`:c``}
          </wl-tab-group>
          <div class="flex"></div>
          <wl-button class="fg green" id="add-keypair" outlined @click="${this._launchKeyPairDialog}">
            <wl-icon>add</wl-icon>
            Add credential
          </wl-button>
        </h3>
        <wl-card id="credential-lists" class="tab-content">
          <wl-expansion name="credential-group" open role="list">
            <h4 slot="title">Active</h4>
            <span slot="description">
            </span>
            <div>
              <backend-ai-credential-list id="active-credential-list" condition="active" ?active="${"credential-lists"===this._activeTab}"></backend-ai-credential-list>
            </div>
          </wl-expansion>
          <wl-expansion name="credential-group" role="list">
            <h4 slot="title">Inactive</h4>
            <div>
              <backend-ai-credential-list id="inactive-credential-list" condition="inactive" ?active="${"credential-lists"===this._activeTab}"></backend-ai-credential-list>
            </div>
          </wl-expansion>
        </wl-card>
        <wl-card id="resource-policy-lists" class="admin item tab-content" style="display:none;">
          <h4 class="horizontal flex center center-justified layout">
            <span>Policy groups</span>
            <span class="flex"></span>
            <wl-button class="fg green" id="add-policy" outlined @click="${this._launchResourcePolicyDialog}">
              <wl-icon>add</wl-icon>
              Create policy
            </wl-button>
          </h4>
          <div>
            <backend-ai-resource-policy-list id="resource-policy-list" ?active="${"resource-policy-lists"===this._activeTab}"></backend-ai-resource-policy-list>
          </div>
        </wl-card>
        <wl-card id="user-lists" class="admin item tab-content" style="display:none;">
          <h4 class="horizontal flex center center-justified layout">
            <span>Users</span>
            <span class="flex"></span>
            <wl-button class="fg green" id="add-user" outlined @click="${this._launchUserAddDialog}">
              <wl-icon>add</wl-icon>
              Create user
            </wl-button>
          </h4>
          <div>
            <backend-ai-user-list id="user-list" ?active="${"active"===this._status&&!0===this.use_user_list}"></backend-ai-user-list>
          </div>
        </wl-card>
      </wl-card>
      <wl-dialog id="new-keypair-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="1" class="login-panel intro centered" style="margin: 0;">

          <h3 class="horizontal center layout" style="border-bottom:1px solid #ddd;">
            <span style="margin-right:15px;">Add credential</span>
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
                  ${this.resource_policy_names.map(e=>c`
                    <paper-item label="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu id="rate-limit" label="Rate Limit (for 15 min.)">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.rate_metric.map(e=>c`
                    <paper-item label="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
              <wl-expansion name="advanced-keypair-info">
                <span slot="title">Advanced</span>
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
                         Add
                         </wl-button>
            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="new-policy-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="1" class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>Create resource policy</span>
            <div class="flex"></div>
            <wl-button class="fab" fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <form id="login-form">
            <fieldset>
              <div class="vertical center layout">
                <paper-input name="new_policy_name" id="id_new_policy_name" label="Policy Name"
                             type="text"
                             required
                             error-message="Policy name only accepts letters and numbers"></paper-input>
              </div>
              <h4>Resource Policy</h4>
              <div class="horizontal center layout">
                <paper-dropdown-menu id="cpu-resource" label="CPU">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.cpu_metric.map(e=>c`
                    <paper-item label="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu id="ram-resource" label="RAM (GB)">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.ram_metric.map(e=>c`
                    <paper-item label="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu id="gpu-resource" label="GPU">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.gpu_metric.map(e=>c`
                    <paper-item label="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu id="fgpu-resource" label="fGPU">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.fgpu_metric.map(e=>c`
                    <paper-item label="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>

              </div>
              <h4>Sessions</h4>
              <div class="horizontal center layout">
                <paper-dropdown-menu id="container-per-session-limit" label="Container per session">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.container_per_session_metric.map(e=>c`
                    <paper-item label="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu id="idle-timeout" label="Idle timeout (sec.)">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.idle_timeout_metric.map(e=>c`
                    <paper-item label="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>

              <div class="horizontal center layout">
                <paper-dropdown-menu id="concurrency-limit" label="Concurrent Jobs">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.concurrency_metric.map(e=>c`
                    <paper-item label="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
              <h4>Folders</h4>
              <div class="horizontal center layout">
                <paper-dropdown-menu id="allowed_vfolder-hosts" label="Allowed hosts">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.allowed_vfolder_hosts.map(e=>c`
                    <paper-item label="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu id="vfolder-capacity-limit" label="Capacity (GB)">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.vfolder_capacity_metric.map(e=>c`
                    <paper-item label="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu id="vfolder-count-limit" label="Max.#">
                  <paper-listbox slot="dropdown-content" selected="0">
                  ${this.vfolder_count_metric.map(e=>c`
                    <paper-item label="${e}">${e}</paper-item>
                  `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
              <br/><br/>
              <wl-button class="fg blue create-button" id="create-policy-button" type="button" outlined
               @click="${this._addResourcePolicy}">
                         <wl-icon>add</wl-icon>
                         Create
              </wl-button>
            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="new-user-dialog" fixed backdrop blockscrolling>
        <wl-card elevation="1" class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>Create User</span>
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
                label="E-mail"
              >
              </wl-textfield>
              <wl-textfield
                type="text"
                name="user_name"
                id="id_user_name"
                label="Username"
              >
              </wl-textfield>
              <wl-textfield
                type="password"
                name="user_password"
                id="id_user_password"
                label="Password"
                pattern="^(?=.*?[a-zA-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
              >
              </wl-textfield>
              <wl-textfield
                type="password"
                name="user_confirm"
                id="id_user_confirm"
                label="Password Confirm"
              >
              </wl-textfield>
              <wl-button class="fg blue create-button" id="create-user-button" outlined type="button"
              @click="${this._addUser}">
                <wl-icon>add</wl-icon>
                Create User
              </wl-button>
            </fieldset>
          </form>
        </wl-card>
      </wl-dialog>
    `}};e([i({type:Array})],v.prototype,"cpu_metric",void 0),e([i({type:Array})],v.prototype,"ram_metric",void 0),e([i({type:Array})],v.prototype,"gpu_metric",void 0),e([i({type:Array})],v.prototype,"fgpu_metric",void 0),e([i({type:Array})],v.prototype,"rate_metric",void 0),e([i({type:Array})],v.prototype,"concurrency_metric",void 0),e([i({type:Array})],v.prototype,"container_per_session_metric",void 0),e([i({type:Array})],v.prototype,"idle_timeout_metric",void 0),e([i({type:Array})],v.prototype,"vfolder_capacity_metric",void 0),e([i({type:Array})],v.prototype,"vfolder_count_metric",void 0),e([i({type:Object})],v.prototype,"resource_policies",void 0),e([i({type:Array})],v.prototype,"resource_policy_names",void 0),e([i({type:Boolean})],v.prototype,"is_admin",void 0),e([i({type:String})],v.prototype,"_status",void 0),e([i({type:Array})],v.prototype,"allowed_vfolder_hosts",void 0),e([i({type:String})],v.prototype,"default_vfolder_host",void 0),e([i({type:Boolean})],v.prototype,"use_user_list",void 0),e([i({type:String})],v.prototype,"new_access_key",void 0),e([i({type:String})],v.prototype,"new_secret_key",void 0),e([i({type:String})],v.prototype,"_activeTab",void 0),e([i({type:Object})],v.prototype,"notification",void 0);var w=v=e([t("backend-ai-credential-view")],v);export default w;
