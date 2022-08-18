import{_ as e,e as t,n as i,B as o,b as s,I as a,a as l,x as r,c as n,r as c,d,y as u,$ as h,t as p,g as m,l as _,s as v,au as y,q as b}from"./backend-ai-webui-29a04808.js";import"./mwc-tab-bar-83be8cdd.js";import"./tab-group-eb36573d.js";import"./expansion-a141e6f0.js";import"./label-f49b9d87.js";import"./lablup-activity-panel-0d4aa16a.js";import"./vaadin-grid-324151db.js";import"./vaadin-grid-filter-column-6c0e4354.js";import"./vaadin-grid-sort-column-5a315bda.js";import"./iconset-ca86c42e.js";import"./vaadin-item-styles-461be75c.js";import"./vaadin-item-c98fe8ed.js";import"./mwc-check-list-item-4cc3468a.js";import"./switch-5eae873f.js";import"./textarea-7cf31aa6.js";import"./textfield-e939229b.js";import"./mwc-textarea-44ad2d64.js";import"./mwc-switch-e596012f.js";import{J as g}from"./json_to_csv-6fce0343.js";import"./radio-behavior-57c4111b.js";import"./dom-repeat-c48bf759.js";import"./input-behavior-3fd94ba0.js";
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */class f extends Error{constructor(e){super(e),Object.setPrototypeOf(this,f.prototype),this.title="Unable to delete keypair"}}let w=class extends o{constructor(){super(),this.keypairInfo={user_id:"1",access_key:"ABC",secret_key:"ABC",last_used:"",is_admin:!1,resource_policy:"",rate_limit:5e3,concurrency_used:0,num_queries:0,created_at:""},this.isAdmin=!1,this.condition="active",this.keypairs=[],this.resourcePolicy=Object(),this.indicator=Object(),this._boundKeyageRenderer=this.keyageRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this),this._boundAccessKeyRenderer=this.accessKeyRenderer.bind(this),this._boundPermissionRenderer=this.permissionRenderer.bind(this),this._boundResourcePolicyRenderer=this.resourcePolicyRenderer.bind(this),this._boundAllocationRenderer=this.allocationRenderer.bind(this),this._boundUserIdRenderer=this.userIdRenderer.bind(this),this.keypairGrid=Object(),this._totalCredentialCount=0,this.isUserInfoMaskEnabled=!1}static get styles(){return[s,a,l,r,n,c`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 235px);
        }

        mwc-icon-button {
          --mdc-icon-size: 24px;
          padding: 0;
        }

        mwc-icon {
          --mdc-icon-size: 16px;
          padding: 0;
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

        div.configuration mwc-icon {
          padding-right: 5px;
        }

        #keypair-modify-save {
          --button-bg: var(--paper-light-green-50);
          --button-bg-hover: var(--paper-green-100);
          --button-bg-active: var(--paper-green-600);
        }

        #policy-list {
          width: 100%;
        }

        backend-ai-dialog {
          --component-min-width: 400px;
        }

        backend-ai-dialog h4 {
          font-size: 14px;
          padding: 5px 15px 5px 12px;
          margin: 0 0 10px 0;
          display: block;
          height: 20px;
          border-bottom: 1px solid #DDD;
        }

        mwc-button, mwc-button[unelevated], mwc-button[outlined] {
          background-image: none;
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-theme-on-primary: var(--general-button-color);
          --mdc-typography-font-family: var(--general-font-family);
        }

        mwc-select {
          --mdc-theme-primary: var(--general-sidebar-color);
        }
      `]}firstUpdated(){this.notification=globalThis.lablupNotification}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._refreshKeyData(),this.isAdmin=globalThis.backendaiclient.is_admin,this.isUserInfoMaskEnabled=globalThis.backendaiclient._config.maskUserInfo,this.keypairGrid=this.shadowRoot.querySelector("#keypair-grid")}),!0):(this._refreshKeyData(),this.isAdmin=globalThis.backendaiclient.is_admin,this.isUserInfoMaskEnabled=globalThis.backendaiclient._config.maskUserInfo,this.keypairGrid=this.shadowRoot.querySelector("#keypair-grid")))}_refreshKeyData(e=null){let t=!0;if("active"===this.condition)t=!0;else t=!1;return globalThis.backendaiclient.resourcePolicy.get().then((e=>{const t=e.keypair_resource_policies;this.resourcePolicy=globalThis.backendaiclient.utils.gqlToObject(t,"name")})).then((()=>globalThis.backendaiclient.keypair.list(e,["access_key","is_active","is_admin","user_id","created_at","last_used","concurrency_limit","concurrency_used","rate_limit","num_queries","resource_policy"],t))).then((e=>{const t=e.keypairs;Object.keys(t).map(((e,i)=>{const o=t[e];if(o.resource_policy in this.resourcePolicy){for(const e in this.resourcePolicy[o.resource_policy])"created_at"!==e&&(o[e]=this.resourcePolicy[o.resource_policy][e],"total_resource_slots"===e&&(o.total_resource_slots=JSON.parse(this.resourcePolicy[o.resource_policy][e])));o.created_at_formatted=this._humanReadableTime(o.created_at),o.elapsed=this._elapsed(o.created_at),"cpu"in o.total_resource_slots||"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.cpu="-"),"mem"in o.total_resource_slots?o.total_resource_slots.mem=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(o.total_resource_slots.mem,"g")):"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.mem="-"),"cuda.device"in o.total_resource_slots&&(o.total_resource_slots.cuda_device=o.total_resource_slots["cuda.device"]),"cuda.shares"in o.total_resource_slots&&(o.total_resource_slots.cuda_shares=o.total_resource_slots["cuda.shares"]),"cuda_device"in o.total_resource_slots==!1&&"cuda_shares"in o.total_resource_slots==!1&&"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.cuda_shares="-",o.total_resource_slots.cuda_device="-"),"rocm.device"in o.total_resource_slots&&(o.total_resource_slots.rocm_device=o.total_resource_slots["rocm.device"]),"rocm_device"in o.total_resource_slots==!1&&"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.rocm_device="-"),"tpu.device"in o.total_resource_slots&&(o.total_resource_slots.tpu_device=o.total_resource_slots["tpu.device"]),"tpu_device"in o.total_resource_slots==!1&&"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.tpu_device="-"),["cpu","mem","cuda_shares","cuda_device","rocm_device","tpu_device"].forEach((e=>{o.total_resource_slots[e]=this._markIfUnlimited(o.total_resource_slots[e])}))}})),this.keypairs=t,this._totalCredentialCount=this.keypairs.length>0?this.keypairs.length:1})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}async _showKeypairDetail(e){const t=e.target.closest("#controls")["access-key"];try{const e=await this._getKeyData(t);this.keypairInfo=e.keypair,this.shadowRoot.querySelector("#keypair-info-dialog").show()}catch(e){e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}}async _modifyResourcePolicy(e){const t=e.target.closest("#controls")["access-key"];try{const e=await this._getKeyData(t);this.keypairInfo=e.keypair,this.shadowRoot.querySelector("#policy-list").value=this.keypairInfo.resource_policy,this.shadowRoot.querySelector("#keypair-modify-dialog").show()}catch(e){e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}}async _getKeyData(e){return globalThis.backendaiclient.keypair.info(e,["access_key","secret_key","is_active","is_admin","user_id","created_at","last_used","concurrency_limit","concurrency_used","rate_limit","num_queries","resource_policy"])}refresh(){this._refreshKeyData()}_isActive(){return"active"===this.condition}_deleteKey(e){const t=e.target.closest("#controls")["access-key"];globalThis.backendaiclient.keypair.delete(t).then((e=>{if(e.delete_keypair&&!e.delete_keypair.ok)throw new f(e.delete_keypair.msg);this.refresh()})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_revokeKey(e){this._mutateKey(e,!1)}_reuseKey(e){this._mutateKey(e,!0)}_mutateKey(e,t){const i=e.target.closest("#controls")["access-key"],o=this.keypairs.find(this._findKeyItem,i),s={is_active:t,is_admin:o.is_admin,resource_policy:o.resource_policy,rate_limit:o.rate_limit,concurrency_limit:o.concurrency_limit};globalThis.backendaiclient.keypair.mutate(i,s).then((e=>{const t=new CustomEvent("backend-ai-credential-refresh",{detail:this});document.dispatchEvent(t)})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_findKeyItem(e){return e.access_key=this}_elapsed(e,t){const i=new Date(e),o=(this.condition,new Date),s=Math.floor((o.getTime()-i.getTime())/1e3);return Math.floor(s/86400)}_humanReadableTime(e){return new Date(e).toUTCString()}_indexRenderer(e,t,i){const o=i.index+1;u(h`
        <div>${o}</div>
      `,e)}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":e}keyageRenderer(e,t,i){u(h`
            <div class="layout vertical">
              <span>${i.item.elapsed} ${p("credential.Days")}</span>
              <span class="indicator">(${i.item.created_at_formatted})</span>
            </div>
      `,e)}controlRenderer(e,t,i){u(h`
            <div id="controls" class="layout horizontal flex center"
                 .access-key="${i.item.access_key}">
              <mwc-icon-button class="fg green" icon="assignment" fab flat inverted @click="${e=>this._showKeypairDetail(e)}">
              </mwc-icon-button>
              <mwc-icon-button class="fg blue" icon="settings" fab flat inverted @click="${e=>this._modifyResourcePolicy(e)}">
              </mwc-icon-button>
              ${this.isAdmin&&this._isActive()?h`
                <mwc-icon-button class="fg blue" icon="delete" fab flat inverted @click="${e=>this._revokeKey(e)}">
                </mwc-icon-button>
                <mwc-icon-button class="fg red" icon="delete_forever" fab flat inverted @click="${e=>this._deleteKey(e)}">
                </mwc-icon-button>
              `:h``}
              ${!1===this._isActive()?h`
                <mwc-icon-button class="fg blue" icon="redo" fab flat inverted @click="${e=>this._reuseKey(e)}">
                </mwc-icon-button>
              `:h``}
            </div>
      `,e)}accessKeyRenderer(e,t,i){u(h`
      <div class="monospace">${i.item.access_key}</div>
      `,e)}permissionRenderer(e,t,i){u(h`
      <div class="layout horizontal center flex">
        ${i.item.is_admin?h`
            <lablup-shields app="" color="red" description="admin" ui="flat"></lablup-shields>
          `:h``}
        <lablup-shields app="" description="user" ui="flat"></lablup-shields>
      </div>
      `,e)}resourcePolicyRenderer(e,t,i){u(h`
        <div class="layout horizontal wrap center">
          <span>${i.item.resource_policy}</span>
        </div>
        <div class="layout horizontal wrap center">
          <div class="layout horizontal configuration">
            <mwc-icon class="fg green">developer_board</mwc-icon>
            <span>${i.item.total_resource_slots.cpu}</span>
            <span class="indicator">${p("general.cores")}</span>
          </div>
          <div class="layout horizontal configuration">
            <mwc-icon class="fg green">memory</mwc-icon>
            <span>${i.item.total_resource_slots.mem}</span>
            <span class="indicator">GB</span>
          </div>
        </div>
        <div class="layout horizontal wrap center">
          ${i.item.total_resource_slots.cuda_device?h`
            <div class="layout horizontal configuration">
              <mwc-icon class="fg green">view_module</mwc-icon>
              <span>${i.item.total_resource_slots.cuda_device}</span>
              <span class="indicator">GPU</span>
            </div>
          `:h``}
          ${i.item.total_resource_slots.cuda_shares?h`
            <div class="layout horizontal configuration">
              <mwc-icon class="fg green">view_module</mwc-icon>
              <span>${i.item.total_resource_slots.cuda_shares}</span>
              <span class="indicator">fGPU</span>
            </div>
          `:h``}
        </div>
        <div class="layout horizontal wrap center">
          <div class="layout horizontal configuration">
            <mwc-icon class="fg green">cloud_queue</mwc-icon>
            <span>${i.item.max_vfolder_size}</span>
            <span class="indicator">GB</span>
          </div>
          <div class="layout horizontal configuration">
            <mwc-icon class="fg green">folder</mwc-icon>
            <span>${i.item.max_vfolder_count}</span>
            <span class="indicator">${p("general.Folders")}</span>
          </div>
        </div>
      `,e)}allocationRenderer(e,t,i){u(h`
      <div class="layout horizontal center flex">
        <div class="vertical start layout">
          <div style="font-size:11px;width:40px;">
            ${i.item.concurrency_used} / ${i.item.concurrency_limit}
          </div>
          <span class="indicator">Sess.</span>
        </div>
        <div class="vertical start layout">
          <span style="font-size:8px">${i.item.rate_limit} <span class="indicator">req./15m.</span></span>
          <span style="font-size:8px">${i.item.num_queries} <span class="indicator">queries</span></span>
        </div>
      </div>
      `,e)}userIdRenderer(e,t,i){u(h`
        <span>${this._getUserId(i.item.user_id)}</span>
      `,e)}_saveKeypairModification(e){const t=this.shadowRoot.querySelector("#policy-list").value,i=this.shadowRoot.querySelector("#rate-limit"),o=i.value;if(!i.checkValidity())return;let s={};t!==this.keypairInfo.resource_policy&&(s={...s,resource_policy:t}),o!==this.keypairInfo.rate_limit&&(s={...s,rate_limit:o}),0===Object.entries(s).length?(this.notification.text=m("credential.NoChanges"),this.notification.show()):globalThis.backendaiclient.keypair.mutate(this.keypairInfo.access_key,s).then((e=>{e.modify_keypair.ok?(this.keypairInfo.resource_policy===t&&this.keypairInfo.rate_limit===parseInt(o)?this.notification.text=m("credential.NoChanges"):this.notification.text=m("environment.SuccessfullyModified"),this.refresh()):this.notification.text=m("dialog.ErrorOccurred"),this.notification.show()})),this._hideDialog(e)}_adjustRateLimit(){const e=this.shadowRoot.querySelector("#rate-limit").value;e>5e4&&(this.shadowRoot.querySelector("#rate-limit").value=5e4),e<=0&&(this.shadowRoot.querySelector("#rate-limit").value=1)}_getUserId(e=""){if(this.isUserInfoMaskEnabled){const t=2,i=e.split("@")[0].length-t;e=globalThis.backendaiutils._maskString(e,"*",t,i)}return e}_getAccessKey(e=""){if(this.isUserInfoMaskEnabled){const t=4,i=e.length-t;e=globalThis.backendaiutils._maskString(e,"*",t,i)}return e}render(){return h`
      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Credential list"
                   id="keypair-grid" .items="${this.keypairs}">
        <vaadin-grid-column width="40px" flex-grow="0" header="#" text-align="center" .renderer="${this._indexRenderer.bind(this)}"></vaadin-grid-column>
        <vaadin-grid-filter-column path="user_id" auto-width header="${p("credential.UserID")}" resizable .renderer="${this._boundUserIdRenderer}"></vaadin-grid-filter-column>
        <vaadin-grid-filter-column path="access_key" auto-width header="${p("general.AccessKey")}" resizable .renderer="${this._boundAccessKeyRenderer}"></vaadin-grid-filter-column>
        <vaadin-grid-sort-column resizable header="${p("credential.Permission")}" path="admin" .renderer="${this._boundPermissionRenderer}"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column auto-width resizable header="${p("credential.KeyAge")}" path="created_at" .renderer="${this._boundKeyageRenderer}"></vaadin-grid-sort-column>
        <vaadin-grid-column auto-width resizable header="${p("credential.ResourcePolicy")}" .renderer="${this._boundResourcePolicyRenderer}"></vaadin-grid-column>
        <vaadin-grid-column auto-width resizable header="${p("credential.Allocation")}" .renderer="${this._boundAllocationRenderer}"></vaadin-grid-column>
        <vaadin-grid-column width="150px" resizable header="${p("general.Control")}" .renderer="${this._boundControlRenderer}">
        </vaadin-grid-column>
      </vaadin-grid>
      <backend-ai-dialog id="keypair-info-dialog" fixed backdrop blockscrolling container="${document.body}">
        <span slot="title">Keypair Detail</span>
        <div slot="action" class="horizontal end-justified flex layout">
        ${this.keypairInfo.is_admin?h`
          <lablup-shields app="" color="red" description="admin" ui="flat"></lablup-shields>
          `:h``}
          <lablup-shields app="" description="user" ui="flat"></lablup-shields>
        </div>
        <div slot="content" class="intro">
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
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="keypair-modify-dialog" fixed backdrop blockscrolling>
        <span slot="title">${p("credential.ModifyKeypairResourcePolicy")}</span>

        <div slot="content" class="vertical layout">
          <div class="vertical layout center-justified">
              <mwc-select
                  id="policy-list"
                  label="${p("credential.SelectPolicy")}">
                  ${Object.keys(this.resourcePolicy).map((e=>h`
                      <mwc-list-item value=${this.resourcePolicy[e].name}>
                        ${this.resourcePolicy[e].name}
                      </mwc-list-item>`))}
              </mwc-select>
          </div>
          <div class="vertical layout center-justified">
            <mwc-textfield
                type="number"
                id="rate-limit"
                min="1"
                max="50000"
                label="${p("credential.RateLimit")}"
                validationMessage="${p("credential.RateLimitValidation")}"
                helper="${p("credential.RateLimitValidation")}"
                @change=${()=>this._adjustRateLimit()}
                value="${this.keypairInfo.rate_limit}"></mwc-textfield>
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button
              unelevated
              fullwidth
              id="keypair-modify-save"
              icon="check"
              label="${p("button.SaveChanges")}"
              @click="${e=>this._saveKeypairModification(e)}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}};
/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */
var x;e([t({type:Object})],w.prototype,"notification",void 0),e([t({type:Object})],w.prototype,"keypairInfo",void 0),e([t({type:Boolean})],w.prototype,"isAdmin",void 0),e([t({type:String})],w.prototype,"condition",void 0),e([t({type:Array})],w.prototype,"keypairs",void 0),e([t({type:Object})],w.prototype,"resourcePolicy",void 0),e([t({type:Object})],w.prototype,"indicator",void 0),e([t({type:Object})],w.prototype,"_boundKeyageRenderer",void 0),e([t({type:Object})],w.prototype,"_boundControlRenderer",void 0),e([t({type:Object})],w.prototype,"_boundAccessKeyRenderer",void 0),e([t({type:Object})],w.prototype,"_boundPermissionRenderer",void 0),e([t({type:Object})],w.prototype,"_boundResourcePolicyRenderer",void 0),e([t({type:Object})],w.prototype,"_boundAllocationRenderer",void 0),e([t({type:Object})],w.prototype,"_boundUserIdRenderer",void 0),e([t({type:Object})],w.prototype,"keypairGrid",void 0),e([t({type:Number})],w.prototype,"_totalCredentialCount",void 0),e([t({type:Boolean})],w.prototype,"isUserInfoMaskEnabled",void 0),w=e([i("backend-ai-credential-list")],w);let k=x=class extends v{constructor(){super(),this.label="",this.enableClearButton=!1,this.openUp=!1,this.selectedItemList=[],this.items=[]}static get styles(){return[s,a,y,l,r,n,c`
        lablup-shields {
          margin: 1px;
        }

        span.title {
          font-size: var(--select-title-font-size, 14px);
          font-weight: var(--select-title-font-weight, 500);
        }

        mwc-button {
          margin: var(--selected-item-margin, 3px);
          --mdc-theme-primary: var(--selected-item-theme-color);
          --mdc-theme-on-primary: var(--selected-item-theme-font-color);
          --mdc-typography-font-family: var(--selected-item-font-family);
          --mdc-typography-button-font-size: var(--selected-item-font-size);
          --mdc-typography-button-text-transform: var(--selected-item-text-transform);
        }

        mwc-button[unelevated] {
          --mdc-theme-primary: var(--selected-item-unelevated-theme-color);
          --mdc-theme-on-primary: var(--selected-item-unelevated-theme-font-color);
        }

        mwc-button[outlined] {
          --mdc-theme-primary: var(--selected-item-outlined-theme-color);
          --mdc-theme-on-primary: var(--selected-item-outlined-theme-font-color);
        }
        
        mwc-list {
          font-family: var(--general-font-family);
          width: 100%;
          position: absolute;
          left: 0;
          right: 0;
          z-index: 1;
          border-radius: var(--select-background-border-radius);
          background-color: var(--select-background-color, #efefef);
          --mdc-theme-primary: var(--select-primary-theme);
          --mdc-theme-secondary: var(--select-secondary-theme);
          box-shadow: var(--select-box-shadow);
        }

        mwc-list > mwc-check-list-item {
          background-color: var(--select-background-color, #efefef);
        }

        .selected-area {
          background-color: var(--select-background-color, #efefef);
          border-radius: var(--selected-area-border-radius, 5px);
          border: var(--selected-area-border, 1px solid rgba(0,0,0,1));
          padding: var(--selected-area-padding, 10px);
          min-height: var(--selected-area-min-height, 24px);
          height: var(--selected-area-height, auto);
        }

        .expand {
          transform:rotateX(180deg) !important;
        }
      `]}_showMenu(){this._modifyListPosition(this.items.length),this.menu.style.display=""}_hideMenu(){this.dropdownIcon.on=!1,this.dropdownIcon.classList.remove("expand"),this.menu.style.display="none"}_toggleMenuVisibility(e){this.dropdownIcon.classList.toggle("expand"),e.detail.isOn?this._showMenu():this._hideMenu()}_modifyListPosition(e=0){const t=`-${x.DEFAULT_ITEM_HEIGHT*e+(e===this.items.length?x.DEFAULT_ITEM_MARGIN:0)}px`;this.openUp?this.comboBox.style.top=t:this.comboBox.style.bottom=t}_updateSelection(e){const t=[...e.detail.index],i=this.comboBox.items.filter(((e,i,o)=>t.includes(i))).map((e=>e.value));this.selectedItemList=i}_deselectItem(e){const t=e.target;this.comboBox.selected.forEach(((e,i,o)=>{e.value===t&&this.comboBox.toggle(i)})),this.selectedItemList=this.selectedItemList.filter((e=>e!==t.label))}_deselectAllItems(){this.comboBox.selected.forEach(((e,t,i)=>{this.comboBox.toggle(t)})),this.selectedItemList=[]}firstUpdated(){var e;this.openUp=null!==this.getAttribute("open-up"),this.label=null!==(e=this.getAttribute("label"))&&void 0!==e?e:""}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return h`
    <span class="title">${this.label}</span>
    <div class="layout ${this.openUp?"vertical-reverse":"vertical"}">
      <div class="horizontal layout justified start selected-area center">
        <div class="horizontal layout start-justified wrap">
          ${this.selectedItemList.map((e=>h`
            <mwc-button unelevated trailingIcon label=${e} icon="close"
                @click=${e=>this._deselectItem(e)}></mwc-button>
            `))}
        </div>
        <mwc-icon-button-toggle id="dropdown-icon" 
            onIcon="arrow_drop_down" offIcon="arrow_drop_down"
            @icon-button-toggle-change="${e=>this._toggleMenuVisibility(e)}"></mwc-icon-button-toggle>
      </div>
      <div id="menu" class="vertical layout flex" style="position:relative;display:none;">
        <mwc-list id="list" activatable multi @selected="${e=>this._updateSelection(e)}">
          ${this.items.map((e=>h`
            <mwc-check-list-item value=${e} ?selected="${this.selectedItemList.includes(e)}">${e}</mwc-check-list-item>
          `))}
        </mwc-list>
      </div>
    </div>
    `}};k.DEFAULT_ITEM_HEIGHT=56,k.DEFAULT_ITEM_MARGIN=25,e([_("#list")],k.prototype,"comboBox",void 0),e([_("#menu",!0)],k.prototype,"menu",void 0),e([_("#dropdown-icon",!0)],k.prototype,"dropdownIcon",void 0),e([t({type:Array})],k.prototype,"selectedItemList",void 0),e([t({type:String,attribute:"label"})],k.prototype,"label",void 0),e([t({type:Array})],k.prototype,"items",void 0),e([t({type:Boolean,attribute:"enable-clear-button"})],k.prototype,"enableClearButton",void 0),e([t({type:Boolean,attribute:"open-up"})],k.prototype,"openUp",void 0),k=x=e([i("backend-ai-multi-select")],k);
/**
 @license
Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
*/
class ${static getValue(){return 1e6}}let R=class extends o{constructor(){super(),this.visible=!1,this.keypairs={},this.resourcePolicy=[],this.keypairInfo={},this.active=!1,this.condition="active",this.cpu_resource={},this.ram_resource={},this.gpu_resource={},this.fgpu_resource={},this.concurrency_limit={},this.idle_timeout={},this.session_lifetime={},this.vfolder_capacity={},this.vfolder_max_limit={},this.container_per_session_limit={},this.current_policy_name="",this.enableSessionLifetime=!1,this._boundResourceRenderer=Object(),this._boundConcurrencyRenderer=this.concurrencyRenderer.bind(this),this._boundControlRenderer=this.controlRenderer.bind(this),this._boundPolicyNameRenderer=this.policyNameRenderer.bind(this),this._boundClusterSizeRenderer=this.clusterSizeRenderer.bind(this),this._boundStorageNodesRenderer=this.storageNodesRenderer.bind(this),this.is_super_admin=!1,this.all_vfolder_hosts=[],this.allowed_vfolder_hosts=[],this.resource_policy_names=[],this._boundResourceRenderer=this.resourceRenderer.bind(this)}static get styles(){return[s,a,l,c`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 300px);
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

        wl-button[disabled].fg {
          color: rgba(0,0,0,0.4) !important;
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

        div.sessions-section {
          width: 167px;
          margin-bottom: 10px;
        }

        wl-label {
          width: 100%;
          min-width: 60px;
          font-size: 10px; // 11px;
          --label-font-family: 'Ubuntu', Roboto;
        }

        wl-label.folders {
          margin: 3px 0px 7px 0px;
        }

        wl-label.unlimited {
          margin: 4px 0px 0px 0px;
        }

        wl-label.unlimited > wl-checkbox {
          border-width: 1px;
        }

        wl-list-item {
          width: 100%;
        }

        wl-checkbox {
          --checkbox-size: 10px;
          --checkbox-border-radius: 2px;
          --checkbox-bg-checked: var(--general-checkbox-color);
          --checkbox-checkmark-stroke-color: white;
          --checkbox-color-checked: white;
        }

        mwc-textfield {
          width: 100%;
          --mdc-text-field-fill-color: transparent;
          --mdc-theme-primary: var(--general-textfield-selected-color);
          --mdc-typography-font-family: var(--general-font-family);
        }

        mwc-textfield.resource-input {
          width: 5rem;
        }

        mwc-button, mwc-button[unelevated] {
          background-image: none;
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-theme-on-primary: var(--general-button-color);
          --mdc-typography-font-family: var(--general-font-family);
        }

        mwc-list-item {
          --mdc-menu-item-height: auto;
          font-size : 14px;
        }

        backend-ai-dialog {
          --component-min-width: 350px;
          --component-max-width: 390px;
        }
        backend-ai-dialog h4 {
          font-size: 14px;
          padding: 5px 15px 5px 12px;
          margin: 0 0 10px 0;
          display: block;
          height: 20px;
          border-bottom: 1px solid #DDD;
        }
        div.popup-right-margin {
          margin-right: 5px;
        }
        div.popup-left-margin {
          margin-left: 5px;
        }
        div.popup-both-margin {
          margin-left: 5px;
          margin-right: 5px;
        }
      `]}render(){return h`
      <vaadin-grid theme="row-stripes column-borders compact" aria-label="Resource Policy list"
                  .items="${this.resourcePolicy}">
        <vaadin-grid-column width="40px" flex-grow="0" header="#" text-align="center" .renderer="${this._indexRenderer}"></vaadin-grid-column>
        <vaadin-grid-sort-column resizable header="${p("resourcePolicy.Name")}" path="name" .renderer="${this._boundPolicyNameRenderer}"></vaadin-grid-sort-column>
        <vaadin-grid-column width="150px" resizable header="${p("resourcePolicy.Resources")}" .renderer="${this._boundResourceRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable header="${p("resourcePolicy.Concurrency")}" .renderer="${this._boundConcurrencyRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-sort-column resizable header="${p("resourcePolicy.ClusterSize")}" path="max_containers_per_session"
            .renderer="${this._boundClusterSizeRenderer}"></vaadin-grid-sort-column>
        <vaadin-grid-column resizable header="${p("resourcePolicy.StorageNodes")}" .renderer="${this._boundStorageNodesRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column resizable header="${p("general.Control")}" .renderer="${this._boundControlRenderer}">
        </vaadin-grid-column>
      </vaadin-grid>
      <backend-ai-dialog id="modify-policy-dialog" fixed backdrop blockscrolling narrowLayout>
        <span slot="title">${p("resourcePolicy.UpdateResourcePolicy")}</span>
        <div slot="content">
          <mwc-textfield id="id_new_policy_name" label="${p("resourcePolicy.PolicyName")}" disabled></mwc-textfield>
          <h4>${p("resourcePolicy.ResourcePolicy")}</h4>
          <div class="horizontal justified layout distancing">
            <div class="vertical layout popup-right-margin">
              <wl-label>CPU</wl-label>
              <mwc-textfield class="discrete resource-input" id="cpu-resource" type="number" min="0" max="512"
                            @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
                <wl-label class="unlimited">
                  <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                  ${p("resourcePolicy.Unlimited")}
                </wl-label>
            </div>
            <div class="vertical layout popup-both-margin">
              <wl-label>RAM(GB)</wl-label>
              <mwc-textfield class="resource-input" id="ram-resource" type="number" min="0" max="100000" step="0.01"
                            @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
              <wl-label class="unlimited">
                <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                ${p("resourcePolicy.Unlimited")}
              </wl-label>
            </div>
            <div class="vertical layout popup-both-margin">
              <wl-label>GPU</wl-label>
              <mwc-textfield class="discrete resource-input" id="gpu-resource" type="number" min="0" max="64"
                            @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
              <wl-label class="unlimited">
                <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                ${p("resourcePolicy.Unlimited")}
              </wl-label>
            </div>
            <div class="vertical layout popup-left-margin">
              <wl-label>fGPU</wl-label>
              <mwc-textfield class="resource-input" id="fgpu-resource" type="number" min="0" max="256" step="0.1"
                            @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
              <wl-label class="unlimited">
                <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                ${p("resourcePolicy.Unlimited")}
              </wl-label>
            </div>
          </div>
          <h4>${p("resourcePolicy.Sessions")}</h4>
          <div class="horizontal layout justified distancing wrap">
            <div class="vertical left layout ${this.enableSessionLifetime?"sessions-section":""}">
              <wl-label>${p("resourcePolicy.ContainerPerSession")}</wl-label>
              <mwc-textfield class="discrete" id="container-per-session-limit" type="number" min="0" max="100"
                  @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
              <wl-label class="unlimited">
                <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                ${p("resourcePolicy.Unlimited")}
              </wl-label>
            </div>
            <div class="vertical left layout ${this.enableSessionLifetime?"sessions-section":""}">
              <wl-label>${p("resourcePolicy.IdleTimeoutSec")}</wl-label>
              <mwc-textfield class="discrete" id="idle-timeout" type="number" min="0" max="15552000"
                  @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
              <wl-label class="unlimited">
                <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                ${p("resourcePolicy.Unlimited")}
              </wl-label>
            </div>
            <div class="vertical left layout ${this.enableSessionLifetime?"sessions-section":""}">
              <wl-label>${p("resourcePolicy.ConcurrentJobs")}</wl-label>
              <mwc-textfield class="discrete" id="concurrency-limit" type="number" min="0" max="100"
                  @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
              <wl-label class="unlimited">
                <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                ${p("resourcePolicy.Unlimited")}
              </wl-label>
            </div>
            <div class="vertical left layout ${this.enableSessionLifetime?"sessions-section":""}"
                style="${this.enableSessionLifetime?"":"display:none;"}">
              <wl-label>${p("resourcePolicy.MaxSessionLifeTime")}</wl-label>
              <mwc-textfield class="discrete" id="session-lifetime" type="number" min="0" max="100"
                  @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
              <wl-label class="unlimited">
                <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                ${p("resourcePolicy.Unlimited")}
              </wl-label>
            </div>
          </div>
          <h4 style="margin-bottom:0px;">${p("resourcePolicy.Folders")}</h4>
          <div class="vertical center layout distancing" id="dropdown-area">
            <backend-ai-multi-select open-up id="allowed-vfolder-hosts" label="${p("resourcePolicy.AllowedHosts")}" style="width:100%;"></backend-ai-multi-select>
            <div class="horizontal layout justified" style="width:100%;">
              <div class="vertical layout flex popup-right-margin">
                <wl-label class="folders">${p("resourcePolicy.Capacity")}(GB)</wl-label>
                <mwc-textfield id="vfolder-capacity-limit" type="number" min="0" max="1024" step="0.1"
                    @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
                <wl-label class="unlimited">
                  <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                  ${p("resourcePolicy.Unlimited")}
                </wl-label>
              </div>
              <div class="vertical layout flex popup-left-margin">
                <wl-label class="folders">${p("credential.Max#")}</wl-label>
                <mwc-textfield class="discrete" id="vfolder-count-limit" type="number" min="0" max="50"
                    @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
              </div>
            </div>
          </div>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout distancing">
          <mwc-button
              unelevated
              fullwidth
              id="create-policy-button"
              icon="check"
              label="${p("button.Update")}"
              @click="${()=>this._modifyResourcePolicy()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="delete-policy-dialog" fixed backdrop blockscrolling>
        <span slot="title">${p("dialog.title.LetsDouble-Check")}</span>
        <div slot="content">
          <p>${p("resourcePolicy.AboutToDeleteResourcePolicy")}</p>
          <p style="text-align:center;color:blue;">${this.current_policy_name}</p>
          <p>${p("dialog.warning.CannotBeUndone")} ${p("dialog.ask.DoYouWantToProceed")}</p>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
                class="operation"
                label="${p("button.Cancel")}"
                @click="${e=>this._hideDialog(e)}"></mwc-button>
            <mwc-button
                unelevated
                class="operation"
                label="${p("button.Okay")}"
                @click="${()=>this._deleteResourcePolicy()}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}_indexRenderer(e,t,i){const o=i.index+1;u(h`
        <div>${o}</div>
      `,e)}resourceRenderer(e,t,i){u(h`
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
            <span>${this._markIfUnlimited(i.item.max_vfolder_size,!0)}</span>
            <span class="indicator">GB</span>
          </div>
          <div class="layout horizontal configuration">
            <wl-icon class="fg green indicator">folder</wl-icon>
            <span>${this._markIfUnlimited(i.item.max_vfolder_count)}</span>
            <span class="indicator">Folders</span>
          </div>
        </div>
      `,e)}concurrencyRenderer(e,t,i){u(h`
        <div>${[0,$.getValue()].includes(i.item.max_concurrent_sessions)?"∞":i.item.max_concurrent_sessions}</div>
    `,e)}controlRenderer(e,t,i){u(h`
        <div id="controls" class="layout horizontal flex center" .policy-name="${i.item.name}">
          <wl-button fab flat inverted class="fg blue controls-running" ?disabled=${!this.is_super_admin}
                      @click="${e=>this._launchResourcePolicyDialog(e)}">
            <wl-icon>settings</wl-icon>
          </wl-button>
          <wl-button fab flat inverted class="fg red controls-running" ?disabled=${!this.is_super_admin}
                      @click="${e=>this._openDeleteResourcePolicyListDialog(e)}">
            <wl-icon>delete</wl-icon>
          </wl-button>
      `,e)}policyNameRenderer(e,t,i){u(h`
      <div class="layout horizontal center flex">
        <div>${i.item.name}</div>
      </div>
      `,e)}clusterSizeRenderer(e,t,i){u(h`
      <div>${[0,$.getValue()].includes(i.item.max_containers_per_session)?"∞":i.item.max_containers_per_session}</div>
      `,e)}storageNodesRenderer(e,t,i){u(h`
      <div class="layout horizontal center flex">
        <div class="vertical start layout around-justified">
          ${i.item.allowed_vfolder_hosts.map((e=>h`
            <lablup-shields app="" color="darkgreen" ui="round" description="${e}" style="margin-bottom:3px;"></lablup-shields>`))}
        </div>
      </div>
      `,e)}firstUpdated(){this.notification=globalThis.lablupNotification,this.selectAreaHeight=this.shadowRoot.querySelector("#dropdown-area").offsetHeight?this.shadowRoot.querySelector("#dropdown-area").offsetHeight:"123px"}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.enableSessionLifetime=globalThis.backendaiclient.supports("session-lifetime"),this.is_super_admin=globalThis.backendaiclient.is_superadmin,this._refreshPolicyData(),this._getResourceInfo()}),!0):(this.enableSessionLifetime=globalThis.backendaiclient.supports("session-lifetime"),this.is_super_admin=globalThis.backendaiclient.is_superadmin,this._refreshPolicyData(),this._getResourceInfo()))}_launchResourcePolicyDialog(e){this.updateCurrentPolicyToDialog(e),this._getAllStorageHostsInfo().then((()=>{this.allowedVfolderHostsSelect.items=this.all_vfolder_hosts,this.allowedVfolderHostsSelect.selectedItemList=this.allowed_vfolder_hosts,this.shadowRoot.querySelector("#modify-policy-dialog").show()})).catch((e=>{e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_openDeleteResourcePolicyListDialog(e){this.updateCurrentPolicyToDialog(e),this.shadowRoot.querySelector("#delete-policy-dialog").show()}updateCurrentPolicyToDialog(e){const t=e.target.closest("#controls")["policy-name"],i=globalThis.backendaiclient.utils.gqlToObject(this.resourcePolicy,"name");this.resource_policy_names=Object.keys(i);const o=i[t];this.shadowRoot.querySelector("#id_new_policy_name").value=t,this.current_policy_name=t,this.cpu_resource.value=this._updateUnlimitedValue(o.total_resource_slots.cpu),this.ram_resource.value=this._updateUnlimitedValue(o.total_resource_slots.mem),this.gpu_resource.value=this._updateUnlimitedValue(o.total_resource_slots.cuda_device),this.fgpu_resource.value=this._updateUnlimitedValue(o.total_resource_slots.cuda_shares),this.concurrency_limit.value=this._updateUnlimitedValue(o.max_concurrent_sessions),this.idle_timeout.value=this._updateUnlimitedValue(o.idle_timeout),this.container_per_session_limit.value=this._updateUnlimitedValue(o.max_containers_per_session),this.vfolder_capacity.value=this._updateUnlimitedValue(o.max_vfolder_size),this.enableSessionLifetime&&(this.session_lifetime.value=this._updateUnlimitedValue(o.max_session_lifetime),this._updateInputStatus(this.session_lifetime)),this._updateInputStatus(this.cpu_resource),this._updateInputStatus(this.ram_resource),this._updateInputStatus(this.gpu_resource),this._updateInputStatus(this.fgpu_resource),this._updateInputStatus(this.concurrency_limit),this._updateInputStatus(this.idle_timeout),this._updateInputStatus(this.container_per_session_limit),this._updateInputStatus(this.vfolder_capacity),this.shadowRoot.querySelector("#vfolder-count-limit").value=o.max_vfolder_count,this.shadowRoot.querySelector("#vfolder-capacity-limit").value=this._byteToGB(o.max_vfolder_size,1),this.allowed_vfolder_hosts=o.allowed_vfolder_hosts}_refreshPolicyData(){return globalThis.backendaiclient.resourcePolicy.get().then((e=>e.keypair_resource_policies)).then((e=>{const t=e;Object.keys(t).map(((e,i)=>{const o=t[e];o.total_resource_slots=JSON.parse(o.total_resource_slots),"cpu"in o.total_resource_slots||"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.cpu="Unlimited"),"mem"in o.total_resource_slots?o.total_resource_slots.mem=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(o.total_resource_slots.mem,"g")):"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.mem="Unlimited"),"cuda.device"in o.total_resource_slots?0===o.total_resource_slots["cuda.device"]&&"UNLIMITED"===o.default_for_unspecified?o.total_resource_slots.cuda_device="Unlimited":o.total_resource_slots.cuda_device=o.total_resource_slots["cuda.device"]:"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.cuda_device="Unlimited"),"cuda.shares"in o.total_resource_slots?0===o.total_resource_slots["cuda.shares"]&&"UNLIMITED"===o.default_for_unspecified?o.total_resource_slots.cuda_shares="Unlimited":o.total_resource_slots.cuda_shares=o.total_resource_slots["cuda.shares"]:"UNLIMITED"===o.default_for_unspecified&&(o.total_resource_slots.cuda_shares="Unlimited")})),this.resourcePolicy=t})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}refresh(){this._refreshPolicyData()}_isActive(){return"active"===this.condition}_byteToGB(e,t=0){const i=Math.pow(2,30),o=Math.pow(10,t);return(Math.round(e/i*o)/o).toFixed(t)}_gBToByte(e=0){const t=Math.pow(2,30);return Math.round(t*e)}_readResourcePolicyInput(){const e={},t=this.allowedVfolderHostsSelect.selectedItemList;this._validateUserInput(this.cpu_resource),this._validateUserInput(this.ram_resource),this._validateUserInput(this.gpu_resource),this._validateUserInput(this.fgpu_resource),this._validateUserInput(this.concurrency_limit),this._validateUserInput(this.idle_timeout),this._validateUserInput(this.container_per_session_limit),this._validateUserInput(this.vfolder_capacity),this._validateUserInput(this.vfolder_max_limit),e.cpu=this.cpu_resource.value,e.mem=this.ram_resource.value+"g",e["cuda.device"]=parseInt(this.gpu_resource.value),e["cuda.shares"]=parseFloat(this.fgpu_resource.value),this.concurrency_limit.value=["",0].includes(this.concurrency_limit.value)?$.getValue():parseInt(this.concurrency_limit.value),this.idle_timeout.value=""===this.idle_timeout.value?0:parseInt(this.idle_timeout.value),this.container_per_session_limit.value=["",0].includes(this.container_per_session_limit.value)?$.getValue():parseInt(this.container_per_session_limit.value),this.vfolder_capacity.value=""===this.vfolder_capacity.value?0:parseFloat(this.vfolder_capacity.value),this.vfolder_max_limit.value=""===this.vfolder_max_limit.value?0:parseInt(this.vfolder_max_limit.value),Object.keys(e).map((t=>{isNaN(parseFloat(e[t]))&&delete e[t]}));const i={default_for_unspecified:"UNLIMITED",total_resource_slots:JSON.stringify(e),max_concurrent_sessions:this.concurrency_limit.value,max_containers_per_session:this.container_per_session_limit.value,idle_timeout:this.idle_timeout.value,max_vfolder_count:this.vfolder_max_limit.value,max_vfolder_size:this._gBToByte(this.vfolder_capacity.value),allowed_vfolder_hosts:t};return this.enableSessionLifetime&&(this._validateUserInput(this.session_lifetime),this.session_lifetime.value=""===this.session_lifetime.value?0:parseInt(this.session_lifetime.value),i.max_session_lifetime=this.session_lifetime.value),i}_modifyResourcePolicy(){try{const e=this._readResourcePolicyInput();globalThis.backendaiclient.resourcePolicy.mutate(this.current_policy_name,e).then((({modify_keypair_resource_policy:e})=>{e.ok?(this.shadowRoot.querySelector("#modify-policy-dialog").hide(),this.notification.text=m("resourcePolicy.SuccessfullyUpdated"),this.notification.show(),this.refresh()):e.msg&&(this.shadowRoot.querySelector("#modify-policy-dialog").hide(),this.notification.text=d.relieve(e.msg),this.notification.show(),this.refresh())})).catch((e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#modify-policy-dialog").hide(),this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}catch(e){this.notification.text=e.message,this.notification.show()}}_deleteResourcePolicy(){const e=this.current_policy_name;globalThis.backendaiclient.resourcePolicy.delete(e).then((({delete_keypair_resource_policy:e})=>{e.ok?(this.shadowRoot.querySelector("#delete-policy-dialog").hide(),this.notification.text=m("resourcePolicy.SuccessfullyDeleted"),this.notification.show(),this.refresh()):e.msg&&(this.shadowRoot.querySelector("#delete-policy-dialog").hide(),this.notification.text=d.relieve(e.msg),this.notification.show(),this.refresh())})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_toggleCheckbox(e){var t;const i=e.target,o=i.checked,s=i.closest("div").querySelector("mwc-textfield");s.disabled=o,s.disabled||""===s.value&&(s.value=null!==(t=s.min)&&void 0!==t?t:0)}_validateResourceInput(e){const t=e.target.closest("mwc-textfield"),i=t.closest("div").querySelector("wl-label.unlimited"),o=i?i.querySelector("wl-checkbox"):null;if(t.classList.contains("discrete")&&(t.value=Math.round(t.value)),t.value<=0&&(t.value="concurrency-limit"===t.id||"container-per-session-limit"===t.id?1:0),!t.valid){const e=t.step?(s=t.step)%1?s.toString().split(".")[1].length:0:0;t.value=e>0?Math.min(t.value,t.value<0?t.min:t.max).toFixed(e):Math.min(Math.round(t.value),t.value<0?t.min:t.max)}var s;o&&(t.disabled=o.checked=t.value==parseFloat(t.min))}_updateUnlimitedValue(e){return["-",0,"0","Unlimited",1/0,"Infinity",$.getValue()].includes(e)?"":e}_validateUserInput(e){if(e.disabled)e.value="";else if(""===e.value)throw new Error(m("resourcePolicy.CannotCreateResourcePolicy"))}_updateInputStatus(e){const t=e,i=t.closest("div").querySelector("wl-checkbox");""===t.value||0===t.value||["concurrency-limit","container-per-session-limit"].includes(t.id)&&t.value===$.getValue()?(t.disabled=!0,i.checked=!0):(t.disabled=!1,i.checked=!1)}_markIfUnlimited(e,t=!1){return["-",0,"0","Unlimited",1/0,"Infinity"].includes(e)?"∞":["NaN",NaN].includes(e)?"-":t?this._byteToGB(e,1):e}_getResourceInfo(){this.cpu_resource=this.shadowRoot.querySelector("#cpu-resource"),this.ram_resource=this.shadowRoot.querySelector("#ram-resource"),this.gpu_resource=this.shadowRoot.querySelector("#gpu-resource"),this.fgpu_resource=this.shadowRoot.querySelector("#fgpu-resource"),this.concurrency_limit=this.shadowRoot.querySelector("#concurrency-limit"),this.idle_timeout=this.shadowRoot.querySelector("#idle-timeout"),this.container_per_session_limit=this.shadowRoot.querySelector("#container-per-session-limit"),this.vfolder_capacity=this.shadowRoot.querySelector("#vfolder-capacity-limit"),this.vfolder_max_limit=this.shadowRoot.querySelector("#vfolder-count-limit"),this.enableSessionLifetime&&(this.session_lifetime=this.shadowRoot.querySelector("#session-lifetime"))}_getAllStorageHostsInfo(){return globalThis.backendaiclient.vfolder.list_all_hosts().then((e=>{this.all_vfolder_hosts=e.allowed})).catch((e=>{throw e}))}};e([t({type:Boolean})],R.prototype,"visible",void 0),e([t({type:Object})],R.prototype,"keypairs",void 0),e([t({type:Array})],R.prototype,"resourcePolicy",void 0),e([t({type:Object})],R.prototype,"keypairInfo",void 0),e([t({type:Boolean})],R.prototype,"active",void 0),e([t({type:String})],R.prototype,"condition",void 0),e([t({type:Object})],R.prototype,"cpu_resource",void 0),e([t({type:Object})],R.prototype,"ram_resource",void 0),e([t({type:Object})],R.prototype,"gpu_resource",void 0),e([t({type:Object})],R.prototype,"fgpu_resource",void 0),e([t({type:Object})],R.prototype,"concurrency_limit",void 0),e([t({type:Object})],R.prototype,"idle_timeout",void 0),e([t({type:Object})],R.prototype,"session_lifetime",void 0),e([t({type:Object})],R.prototype,"vfolder_capacity",void 0),e([t({type:Object})],R.prototype,"vfolder_max_limit",void 0),e([t({type:Object})],R.prototype,"container_per_session_limit",void 0),e([t({type:Array})],R.prototype,"resource_policy_names",void 0),e([t({type:String})],R.prototype,"current_policy_name",void 0),e([t({type:Number})],R.prototype,"selectAreaHeight",void 0),e([t({type:Boolean})],R.prototype,"enableSessionLifetime",void 0),e([t({type:Object})],R.prototype,"_boundResourceRenderer",void 0),e([t({type:Object})],R.prototype,"_boundConcurrencyRenderer",void 0),e([t({type:Object})],R.prototype,"_boundControlRenderer",void 0),e([t({type:Object})],R.prototype,"_boundPolicyNameRenderer",void 0),e([t({type:Object})],R.prototype,"_boundClusterSizeRenderer",void 0),e([t({type:Object})],R.prototype,"_boundStorageNodesRenderer",void 0),e([_("#allowed-vfolder-hosts")],R.prototype,"allowedVfolderHostsSelect",void 0),e([b()],R.prototype,"all_vfolder_hosts",void 0),e([b()],R.prototype,"allowed_vfolder_hosts",void 0),e([b()],R.prototype,"is_super_admin",void 0),R=e([i("backend-ai-resource-policy-list")],R);let I=class extends o{constructor(){super(),this.isAdmin=!1,this.editMode=!1,this.users=[],this.userInfo=Object(),this.userInfoGroups=[],this.condition="",this._boundControlRenderer=this.controlRenderer.bind(this),this._userIdRenderer=this.userIdRenderer.bind(this),this._userNameRenderer=this.userNameRenderer.bind(this),this._userStatusRenderer=this.userStatusRenderer.bind(this),this.signoutUserDialog=Object(),this.signoutUserName="",this.notification=Object(),this.userGrid=Object(),this._totalUserCount=0,this.isUserInfoMaskEnabled=!1,this.userStatus={active:"Active",inactive:"Inactive","before-verification":"Before Verification",deleted:"Deleted"}}static get styles(){return[s,a,l,r,n,c`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 235px);
        }

        backend-ai-dialog h4,
        backend-ai-dialog wl-label {
          font-size: 14px;
          padding: 5px 15px 5px 12px;
          margin: 0 0 10px 0;
          display: block;
          height: 20px;
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

        div.password-area {
          width: 100%;
          max-width: 322px;
        }

        backend-ai-dialog wl-textfield,
        backend-ai-dialog wl-textarea {
          padding-left: 15px;
          --input-font-family: var(--general-font-family);
          --input-color-disabled: #222;
          --input-label-color-disabled: #222;
          --input-label-font-size: 12px;
          --input-border-style-disabled: 1px solid #ccc;
        }

        backend-ai-dialog li {
          font-family: var(--general-font-family);
          font-size: 16px;
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

        mwc-button, mwc-button[unelevated], mwc-button[outlined] {
          background-image: none;
          --mdc-theme-primary: var(--general-button-background-color);
          --mdc-theme-on-primary: var(--general-button-color);
          --mdc-typography-font-family: var(--general-font-family);
        }

        mwc-select.full-width {
          width: 100%;
          /* Need to be set when fixedMenuPosition attribute is enabled */
          --mdc-menu-max-width: 330px;
          --mdc-menu-min-width: 330px;
        }

        mwc-textfield, mwc-textarea {
          width: 100%;
          --mdc-typography-font-family: var(--general-font-family);
          --mdc-typography-textfield-font-size: 14px;
          --mdc-typography-textarea-font-size: 14px;
          --mdc-text-field-fill-color: transparent;
          --mdc-theme-primary: var(--general-textfield-selected-color);
        }

        p.label {
          font-size: 16px;
          font-family: var(--general-font-family);
          color: var(--general-sidebar-color);
          width: 270px;
        }
      `]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification,this.signoutUserDialog=this.shadowRoot.querySelector("#signout-user-dialog"),this.addEventListener("user-list-updated",(()=>{this.refresh()}))}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this._refreshUserData(),this.isAdmin=globalThis.backendaiclient.is_admin,this.isUserInfoMaskEnabled=globalThis.backendaiclient._config.maskUserInfo,this.userGrid=this.shadowRoot.querySelector("#user-grid")}),!0):(this._refreshUserData(),this.isAdmin=globalThis.backendaiclient.is_admin,this.isUserInfoMaskEnabled=globalThis.backendaiclient._config.maskUserInfo,this.userGrid=this.shadowRoot.querySelector("#user-grid")))}_refreshUserData(){let e=!0;if("active"===this.condition)e=!0;else e=!1;this.spinner.hide();return globalThis.backendaiclient.user.list(e,["email","username","need_password_change","full_name","description","is_active","domain_name","role","groups {id name}","status"]).then((e=>{const t=e.users;this.users=t,this._totalUserCount=this.users.length})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}async _editUserDetail(e){return this.editMode=!0,this._showUserDetailDialog(e)}async _showUserDetail(e){return this.editMode=!1,this._showUserDetailDialog(e)}async _showUserDetailDialog(e){const t=e.target.closest("#controls")["user-id"];let i;try{const e=await this._getUserData(t);this.userInfo=e.user,i=this.userInfo.groups.map((e=>e.name)),this.userInfoGroups=i,this.shadowRoot.querySelector("#user-info-dialog").show()}catch(e){e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}}_signoutUserDialog(e){const t=e.target.closest("#controls")["user-id"];this.signoutUserName=t,this.signoutUserDialog.show()}_signoutUser(){globalThis.backendaiclient.user.delete(this.signoutUserName).then((e=>{this.notification.text=d.relieve("Signout finished."),this._refreshUserData(),this.signoutUserDialog.hide()})).catch((e=>{console.log(e),void 0!==e.message?(this.notification.text=d.relieve(e.title),this.notification.detail=e.message):this.notification.text=d.relieve("Signout failed. Check your permission and try again."),this.notification.show()}))}async _getUserData(e){return globalThis.backendaiclient.user.get(e,["email","username","need_password_change","full_name","description","status","domain_name","role","groups {id name}"])}refresh(){this._refreshUserData(),this.userGrid.clearCache()}_isActive(){return"active"===this.condition}_elapsed(e,t){const i=new Date(e);let o;o=(this.condition,new Date);const s=Math.floor((o.getTime()-i.getTime())/1e3);return Math.floor(s/86400)}_humanReadableTime(e){return new Date(e).toUTCString()}_indexRenderer(e,t,i){const o=i.index+1;u(h`
        <div>${o}</div>
      `,e)}_markIfUnlimited(e){return["-",0,"Unlimited",1/0,"Infinity"].includes(e)?"∞":e}controlRenderer(e,t,i){u(h`
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
      `,e)}userIdRenderer(e,t,i){u(h`
        <span>${this._getUserId(i.item.email)}</span>
      `,e)}userNameRenderer(e,t,i){u(h`
        <span>${this._getUsername(i.item.username)}</span>
      `,e)}userStatusRenderer(e,t,i){const o="active"===i.item.status?"green":"lightgrey";u(h`
        <lablup-shields app="" color="${o}" description="${i.item.status}" ui="flat"></lablup-shields>
      `,e)}_togglePasswordVisibility(e){const t=e.__on,i=e.closest("div").querySelector("mwc-textfield");t?i.setAttribute("type","text"):i.setAttribute("type","password")}_togglePasswordInputRequired(){const e=this.shadowRoot.querySelector("#password"),t=e.value,i=this.shadowRoot.querySelector("#confirm"),o=i.value;e.required=""===t&&""!==o,i.required=""!==t&&""===o,e.reportValidity(),i.reportValidity()}_saveChanges(e){const t=this.shadowRoot.querySelector("#username").value,i=this.shadowRoot.querySelector("#full_name").value,o=this.shadowRoot.querySelector("#password"),s=o.value,a=this.shadowRoot.querySelector("#confirm"),l=a.value,r=this.shadowRoot.querySelector("#description").value,n=this.shadowRoot.querySelector("#status").value,c=this.shadowRoot.querySelector("#need_password_change").selected;if(this._togglePasswordInputRequired(),!o.checkValidity()||!a.checkValidity())return;if(s!==l)return this.notification.text=m("environment.PasswordsDoNotMatch"),void this.notification.show();const u=Object();if(""!==s&&(u.password=s),t!==this.userInfo.username&&(u.username=t),i!==this.userInfo.full_name&&(u.full_name=i),r!==this.userInfo.description&&(u.description=r),c!==this.userInfo.need_password_change&&(u.need_password_change=c),n!==this.userInfo.status&&(u.status=n),0===Object.entries(u).length)return this._hideDialog(e),this.notification.text=m("environment.NoChangeMade"),void this.notification.show();if(globalThis.backendaiclient.user.update(this.userInfo.email,u).then((e=>{e.modify_user.ok?(this.shadowRoot.querySelector("#user-info-dialog").hide(),this.notification.text=m("environment.SuccessfullyModified"),this.userInfo={...this.userInfo,...u,password:null},this._refreshUserData(),this.shadowRoot.querySelector("#password").value="",this.shadowRoot.querySelector("#confirm").value=""):(this.notification.text=d.relieve(e.modify_user.msg),this.shadowRoot.querySelector("#username").value=this.userInfo.username,this.shadowRoot.querySelector("#description").value=this.userInfo.description),this.notification.show(),this.refresh()})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})),this.userInfo.email===globalThis.backendaiclient.email){const e=new CustomEvent("current-user-info-changed",{detail:u});document.dispatchEvent(e)}}_getUserId(e=""){if(e&&this.isUserInfoMaskEnabled){const t=2,i=e.split("@")[0].length-t;e=globalThis.backendaiutils._maskString(e,"*",t,i)}return e}_getUsername(e=""){if(e&&this.isUserInfoMaskEnabled){const t=2,i=e.length-t;e=globalThis.backendaiutils._maskString(e,"*",t,i)}return e}render(){return h`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <vaadin-grid theme="row-stripes column-borders compact"
                   aria-label="User list" id="user-grid" .items="${this.users}">
        <vaadin-grid-column width="40px" flex-grow="0" header="#" text-align="center"
                            .renderer="${this._indexRenderer.bind(this)}"></vaadin-grid-column>
        <vaadin-grid-filter-column auto-width path="email" header="${p("credential.UserID")}" resizable
                            .renderer="${this._userIdRenderer.bind(this)}"></vaadin-grid-filter-column>
        <vaadin-grid-filter-column auto-width path="username" header="${p("credential.Name")}" resizable
                            .renderer="${this._userNameRenderer}"></vaadin-grid-filter-column>
        ${"active"!==this.condition?h`
          <vaadin-grid-filter-column auto-width path="status" header="${p("credential.Status")}" resizable
                            .renderer="${this._userStatusRenderer}"></vaadin-grid-filter-column>`:h``}
        <vaadin-grid-column resizable header="${p("general.Control")}"
            .renderer="${this._boundControlRenderer}"></vaadin-grid-column>
      </vaadin-grid>
      <backend-ai-dialog id="signout-user-dialog" fixed backdrop>
        <span slot="title">${p("dialog.title.LetsDouble-Check")}</span>
        <div slot="content">
          <p>You are inactivating the user <span style="color:red">${this.signoutUserName}</span>.</p>
          <p>${p("dialog.ask.DoYouWantToProceed")}</p>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              label="${p("button.Cancel")}"
              @click="${e=>this._hideDialog(e)}"></mwc-button>
          <mwc-button
              unelevated
              label="${p("button.Okay")}"
              @click="${()=>this._signoutUser()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="user-info-dialog" fixed backdrop narrowLayout>
        <div slot="title" class="horizontal center layout">
          <span style="margin-right:15px;">${p("credential.UserDetail")}</span>
          <lablup-shields app="" description="user" ui="flat"></lablup-shields>
        </div>
        <div slot="content" class="horizontal layout" style="overflow-x:hidden;">
          <div>
            <h4>${m("credential.Information")}</h4>
            <div role="listbox" class="center vertical layout">
              <mwc-textfield
                  disabled
                  label="${m("credential.UserID")}"
                  pattern="^[a-zA-Z0-9_-]+$"
                  value="${this.userInfo.email}"
                  maxLength="64"
                  helper="${m("maxLength.64chars")}"></mwc-textfield>
              <mwc-textfield
                  ?disabled=${!this.editMode}
                  label="${m("credential.UserName")}"
                  id="username"
                  value="${this.userInfo.username}"
                  maxLength="64"
                  helper="${m("maxLength.64chars")}"></mwc-textfield>
              <mwc-textfield
                  ?disabled=${!this.editMode}
                  label="${m("credential.FullName")}"
                  id="full_name"
                  value="${this.userInfo.full_name?this.userInfo.full_name:" "}"
                  maxLength="64"
                  helper="${m("maxLength.64chars")}"></mwc-textfield>
              ${this.editMode?h`
                <div class="horizontal layout password-area">
                  <mwc-textfield
                      type="password"
                      id="password"
                      autoValidate
                      validationMessage="${p("webui.menu.InvalidPasswordMessage")}"
                      pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
                      maxLength="64"
                      label="${m("general.NewPassword")}"
                      @change=${()=>this._togglePasswordInputRequired()}></mwc-textfield>
                  <mwc-icon-button-toggle off onIcon="visibility" offIcon="visibility_off"
                      @click="${e=>this._togglePasswordVisibility(e.target)}">
                  </mwc-icon-button-toggle>
                </div>
                <div class="horizontal layout password-area">
                  <mwc-textfield
                      type="password"
                      id="confirm"
                      autoValidate
                      validationMessage="${p("webui.menu.InvalidPasswordMessage")}"
                      pattern="^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
                      maxLength="64"
                      @change=${()=>this._togglePasswordInputRequired()}
                      label="${m("webui.menu.NewPasswordAgain")}"></mwc-textfield>
                  <mwc-icon-button-toggle off onIcon="visibility" offIcon="visibility_off"
                      @click="${e=>this._togglePasswordVisibility(e.target)}">
                  </mwc-icon-button-toggle>
                </div>
                <mwc-textarea
                    type="text"
                    id="description"
                    label="${m("credential.Description")}"
                    placeholder="${m("maxLength.500chars")}"
                    value="${this.userInfo.description}"
                    id="description"></mwc-textfield>`:h``}
              ${this.editMode?h`
                <mwc-select class="full-width" id="status" label="${m("credential.UserStatus")}" fixedMenuPosition>
                  ${Object.keys(this.userStatus).map((e=>h`
                    <mwc-list-item value="${e}" ?selected="${e===this.userInfo.status}">${this.userStatus[e]}</mwc-list-item>
                  `))}
                </mwc-select>
                <div class="horizontal layout center" style="margin:10px;">
                  <p class="label">${m("credential.DescRequirePasswordChange")}</p>
                  <mwc-switch
                      id="need_password_change"
                      ?selected=${this.userInfo.need_password_change}></mwc-switch>
                </div>`:h`
                    <mwc-textfield
                        disabled
                        label="${m("credential.DescActiveUser")}"
                        value="${"active"===this.userInfo.status?`${m("button.Yes")}`:`${m("button.No")}`}"></mwc-textfield>
                    <mwc-textfield
                        disabled
                        label="${m("credential.DescRequirePasswordChange")}"
                        value="${this.userInfo.need_password_change?`${m("button.Yes")}`:`${m("button.No")}`}"></mwc-textfield>
            `}
          </div>
        </div>
        ${this.editMode?h``:h`
          <div>
            <h4>${m("credential.Association")}</h4>
            <div role="listbox" style="margin: 0;">
              <wl-textfield
                label="${p("credential.Domain")}"
                disabled
                value="${this.userInfo.domain_name}">
              </wl-textfield>
              <wl-textfield
                label="${p("credential.Role")}"
                disabled
                value="${this.userInfo.role}">
              </wl-textfield>
            </div>
            <h4>${m("credential.ProjectAndGroup")}</h4>
            <div role="listbox" style="margin: 0;">
              <ul>
              ${this.userInfoGroups.map((e=>h`
                <li>${e}</li>
              `))}
              </ul>
            </div>
          </div>
        `}
        </div>
        <div slot="footer" class="horizontal center-justified flex layout distancing">
        ${this.editMode?h`
          <mwc-button
              unelevated
              fullwidth
              label="${p("button.SaveChanges")}"
              icon="check"
              @click=${e=>this._saveChanges(e)}></mwc-button>`:h``}
        </div>
      </backend-ai-dialog>
    `}};e([t({type:Boolean})],I.prototype,"isAdmin",void 0),e([t({type:Boolean})],I.prototype,"editMode",void 0),e([t({type:Array})],I.prototype,"users",void 0),e([t({type:Object})],I.prototype,"userInfo",void 0),e([t({type:Array})],I.prototype,"userInfoGroups",void 0),e([t({type:String})],I.prototype,"condition",void 0),e([t({type:Object})],I.prototype,"_boundControlRenderer",void 0),e([t({type:Object})],I.prototype,"_userIdRenderer",void 0),e([t({type:Object})],I.prototype,"_userNameRenderer",void 0),e([t({type:Object})],I.prototype,"_userStatusRenderer",void 0),e([t({type:Object})],I.prototype,"spinner",void 0),e([t({type:Object})],I.prototype,"keypairs",void 0),e([t({type:Object})],I.prototype,"signoutUserDialog",void 0),e([t({type:String})],I.prototype,"signoutUserName",void 0),e([t({type:Object})],I.prototype,"notification",void 0),e([t({type:Object})],I.prototype,"userGrid",void 0),e([t({type:Number})],I.prototype,"_totalUserCount",void 0),e([t({type:Boolean})],I.prototype,"isUserInfoMaskEnabled",void 0),e([t({type:Object})],I.prototype,"userStatus",void 0),I=e([i("backend-ai-user-list")],I);let S=class extends o{constructor(){super(),this.cpu_resource={},this.ram_resource={},this.gpu_resource={},this.fgpu_resource={},this.concurrency_limit={},this.idle_timeout={},this.session_lifetime={},this.vfolder_capacity={},this.vfolder_max_limit={},this.container_per_session_limit={},this.rate_metric=[1e3,2e3,3e3,4e3,5e3,1e4,5e4],this.resource_policies=Object(),this.isAdmin=!1,this.isSuperAdmin=!1,this._status="inactive",this.new_access_key="",this.new_secret_key="",this._activeTab="users",this.notification=Object(),this.exportToCsvDialog=Object(),this._defaultFileName="",this.enableSessionLifetime=!1,this.default_vfolder_host="",this.all_vfolder_hosts=[],this.resource_policy_names=[]}static get styles(){return[s,a,l,r,n,c`
        #new-keypair-dialog {
          min-width: 350px;
          height: 100%;
        }

        div.card > h4 {
          margin-bottom: 0px;
        }

        div.card h3 {
          padding-top: 0;
          padding-right: 15px;
          padding-bottom: 0;
        }

        div.card div.card {
          margin: 0;
          padding: 0;
          --card-elevation: 0;
        }

        div.sessions-section {
          width: 167px;
          margin-bottom: 10px;
        }

        wl-tab-group {
          border-radius: 5px 5px 0 0;
          --tab-group-indicator-bg: var(--general-tabbar-button-color);
        }

        wl-tab {
          border-radius: 5px 5px 0 0;
          --tab-color: var(--general-sidepanel-color);
          --tab-color-hover: #26272a;
          --tab-color-hover-filled: var(--general-tabbar-button-color);
          --tab-color-active:var(--general-tabbar-button-color);
          --tab-color-active-hover: var(--general-tabbar-button-color);
          --tab-color-active-filled: var(--general-tabbar-button-color);
          --tab-bg-active: #535457;
          --tab-bg-filled: #26272a;
          --tab-bg-active-hover: #535457;
        }

        h3.tab {
          background-color: var(--general-tabbar-background-color);
          border-radius: 5px 5px 0 0;
          margin: 0 auto;
        }

        mwc-tab-bar {
          --mdc-theme-primary: var(--general-sidebar-selected-color);
          --mdc-text-transform: none;
          --mdc-tab-color-default: var(--general-tabbar-background-color);
          --mdc-tab-text-label-color-default: var(--general-tabbar-tab-disabled-color);
        }


        mwc-list-item {
          height: auto;
          font-size: 12px;
          --mdc-theme-primary: var(--general-sidebar-color);
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
          font-size: 10px; // 11px;
          --label-font-family: 'Ubuntu', Roboto;
        }

        wl-label.folders {
          margin: 3px 0px 7px 0px;
        }

        wl-label.unlimited {
          margin: 4px 0px 0px 0px;
        }

        wl-label.unlimited > wl-checkbox {
          border-width: 1px;
        }

        wl-list-item {
          width: 100%;
        }

        wl-checkbox {
          --checkbox-size: 10px;
          --checkbox-border-radius: 2px;
          --checkbox-bg-checked: var(--general-checkbox-color);
          --checkbox-checkmark-stroke-color: white;
          --checkbox-color-checked: white;
        }

        mwc-textfield {
          width: 100%;
          --mdc-text-field-fill-color: transparent;
          --mdc-theme-primary: var(--general-textfield-selected-color);
          --mdc-typography-font-family: var(--general-font-family);
        }

        mwc-textfield.resource-input {
          width: 5rem;
        }

        mwc-textfield#export-file-name {
          margin-bottom: 10px;
        }

        mwc-textfield#id_user_name {
          margin-bottom: 18px;
        }

        mwc-menu {
          --mdc-theme-surface: #f1f1f1;
          --mdc-menu-item-height : auto;
        }

        mwc-menu#dropdown-menu {
          position: relative;
          left: -10px;
          top: 50px;
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

        backend-ai-dialog {
          --component-min-width: 350px;
          --component-max-width: 390px;
        }

        backend-ai-dialog h4 {
          font-size: 14px;
          padding: 5px 15px 5px 12px;
          margin: 0 0 10px 0;
          display: block;
          height: 20px;
          border-bottom: 1px solid #DDD;
        }

        div.popup-right-margin {
          margin-right: 5px;
        }
        div.popup-left-margin {
          margin-left: 5px;
        }
        div.popup-both-margin {
          margin-left: 5px;
          margin-right: 5px;
        }

        @media screen and (max-width: 805px) {
          mwc-tab, mwc-button {
            --mdc-typography-button-font-size: 10px;
          }

          wl-tab {
            width: 5px;
          }
        }
      `]}firstUpdated(){this.notification=globalThis.lablupNotification,document.addEventListener("backend-ai-credential-refresh",(()=>{this.shadowRoot.querySelector("#active-credential-list").refresh(),this.shadowRoot.querySelector("#inactive-credential-list").refresh()}),!0),this.shadowRoot.querySelectorAll("wl-expansion").forEach((e=>{e.addEventListener("keydown",(e=>{e.stopPropagation()}),!0)}));const e=this.shadowRoot.querySelector("#id_new_user_id");this._addInputValidator(e),this.selectAreaHeight=this.shadowRoot.querySelector("#dropdown-area").offsetHeight?this.shadowRoot.querySelector("#dropdown-area").offsetHeight:"123px"}_preparePage(){!0!==globalThis.backendaiclient.is_admin?this.disablePage():(this.isAdmin=!0,!0===globalThis.backendaiclient.is_superadmin&&(this.isSuperAdmin=!0)),this._activeTab="user-lists",this._addValidatorToPolicyInput(),this._getResourceInfo(),this._getResourcePolicies(),this._updateInputStatus(this.cpu_resource),this._updateInputStatus(this.ram_resource),this._updateInputStatus(this.gpu_resource),this._updateInputStatus(this.fgpu_resource),this._updateInputStatus(this.concurrency_limit),this._updateInputStatus(this.idle_timeout),this._updateInputStatus(this.container_per_session_limit),this._updateInputStatus(this.vfolder_capacity),this.enableSessionLifetime&&this._updateInputStatus(this.session_lifetime),this.vfolder_max_limit.value=10,this.exportToCsvDialog=this.shadowRoot.querySelector("#export-to-csv"),this._defaultFileName=this._getDefaultCSVFileName()}async _viewStateChanged(e){if(await this.updateComplete,!1===e)return this.shadowRoot.querySelector("#resource-policy-list").active=!1,this.shadowRoot.querySelector("#active-user-list").active=!1,void(this._status="inactive");this.shadowRoot.querySelector("#resource-policy-list").active=!0,this.shadowRoot.querySelector("#active-user-list").active=!0,this._status="active",void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.enableSessionLifetime=globalThis.backendaiclient.supports("session-lifetime"),this._preparePage()})):(this.enableSessionLifetime=globalThis.backendaiclient.supports("session-lifetime"),this._preparePage())}async _launchKeyPairDialog(){await this._getResourcePolicies(),this.shadowRoot.querySelector("#new-keypair-dialog").show(),this.shadowRoot.querySelector("#id_new_user_id").value=""}_getAllStorageHostsInfo(){return globalThis.backendaiclient.vfolder.list_all_hosts().then((e=>{this.all_vfolder_hosts=e.allowed,this.default_vfolder_host=e.default})).catch((e=>{throw e}))}_launchResourcePolicyDialog(){Promise.allSettled([this._getAllStorageHostsInfo(),this._getResourcePolicies()]).then((e=>{this.newPolicyName.mdcFoundation.setValid(!0),this.newPolicyName.isUiValid=!0,this.newPolicyName.value="",this.allowedVfolderHostsSelect.items=this.all_vfolder_hosts,this.allowedVfolderHostsSelect.selectedItemList=[this.default_vfolder_host],this.shadowRoot.querySelector("#new-policy-dialog").show()})).catch((e=>{e&&e.message&&(this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_launchUserAddDialog(){this.shadowRoot.querySelector("#new-user-dialog").show()}async _getResourcePolicies(){const e=["name","default_for_unspecified","total_resource_slots","max_concurrent_sessions","max_containers_per_session"];return this.enableSessionLifetime&&e.push("max_session_lifetime"),globalThis.backendaiclient.resourcePolicy.get(null,e).then((e=>{const t=globalThis.backendaiclient.utils.gqlToObject(e.keypair_resource_policies,"name"),i=globalThis.backendaiclient.utils.gqlToList(e.keypair_resource_policies,"name");this.resource_policies=t,this.resource_policy_names=i,this.shadowRoot.querySelector("#resource-policy").layout(!0).then((()=>{this.shadowRoot.querySelector("#resource-policy").select(0)})),this.shadowRoot.querySelector("#rate-limit").layout(!0).then((()=>{this.shadowRoot.querySelector("#rate-limit").select(0)}))}))}_addKeyPair(){const e=this.shadowRoot.querySelector("#id_new_user_id");let t="";if(!e.checkValidity())return;t=e.value;const i=this.shadowRoot.querySelector("#resource-policy").value,o=this.shadowRoot.querySelector("#rate-limit").value;globalThis.backendaiclient.keypair.add(t,!0,!1,i,o).then((e=>{if(e.create_keypair.ok)this.shadowRoot.querySelector("#new-keypair-dialog").hide(),this.notification.text=m("credential.KeypairCreated"),this.notification.show(),this.shadowRoot.querySelector("#active-credential-list").refresh();else if(e.create_keypair.msg){const t=e.create_keypair.msg.split(":")[1];this.notification.text=m("credential.UserNotFound")+t,this.notification.show()}else this.notification.text=m("dialog.ErrorOccurred"),this.notification.show()})).catch((e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#new-keypair-dialog").hide(),this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_readResourcePolicyInput(){const e={},t=this.allowedVfolderHostsSelect.selectedItemList;this._validateUserInput(this.cpu_resource),this._validateUserInput(this.ram_resource),this._validateUserInput(this.gpu_resource),this._validateUserInput(this.fgpu_resource),this._validateUserInput(this.concurrency_limit),this._validateUserInput(this.idle_timeout),this._validateUserInput(this.container_per_session_limit),this._validateUserInput(this.vfolder_capacity),this._validateUserInput(this.vfolder_max_limit),e.cpu=this.cpu_resource.value,e.mem=this.ram_resource.value+"g",e["cuda.device"]=parseInt(this.gpu_resource.value),e["cuda.shares"]=parseFloat(this.fgpu_resource.value),this.concurrency_limit.value=""===this.concurrency_limit.value?0:parseInt(this.concurrency_limit.value),this.idle_timeout.value=""===this.idle_timeout.value?0:parseInt(this.idle_timeout.value),this.container_per_session_limit.value=""===this.container_per_session_limit.value?0:parseInt(this.container_per_session_limit.value),this.vfolder_capacity.value=""===this.vfolder_capacity.value?0:parseFloat(this.vfolder_capacity.value),this.vfolder_max_limit.value=""===this.vfolder_max_limit.value?0:parseInt(this.vfolder_max_limit.value),Object.keys(e).map((t=>{isNaN(parseFloat(e[t]))&&delete e[t]}));const i={default_for_unspecified:"UNLIMITED",total_resource_slots:JSON.stringify(e),max_concurrent_sessions:this.concurrency_limit.value,max_containers_per_session:this.container_per_session_limit.value,idle_timeout:this.idle_timeout.value,max_vfolder_count:this.vfolder_max_limit.value,max_vfolder_size:this._gBToByte(this.vfolder_capacity.value),allowed_vfolder_hosts:t};return this.enableSessionLifetime&&(this._validateUserInput(this.session_lifetime),this.session_lifetime.value=""===this.session_lifetime.value?0:parseInt(this.session_lifetime.value),i.max_session_lifetime=this.session_lifetime.value),i}_addResourcePolicy(){if(this.newPolicyName.checkValidity())try{this.newPolicyName.checkValidity();const e=this.newPolicyName.value;if(""===e)throw new Error(m("resourcePolicy.PolicyNameEmpty"));const t=this._readResourcePolicyInput();globalThis.backendaiclient.resourcePolicy.add(e,t).then((e=>{this.shadowRoot.querySelector("#new-policy-dialog").hide(),this.notification.text=m("resourcePolicy.SuccessfullyCreated"),this.notification.show(),this.shadowRoot.querySelector("#resource-policy-list").refresh()})).catch((e=>{console.log(e),e&&e.message&&(this.shadowRoot.querySelector("#new-policy-dialog").hide(),this.notification.text=d.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}catch(e){this.notification.text=e.message,this.notification.show()}else this.newPolicyName.reportValidity()}_addUser(){const e=this.shadowRoot.querySelector("#id_user_email"),t=this.shadowRoot.querySelector("#id_user_name"),i=this.shadowRoot.querySelector("#id_user_password"),o=this.shadowRoot.querySelector("#id_user_confirm"),s=e.value,a=""!==t.value?t.value:s.split("@")[0],l=i.value;if(!e.checkValidity()||!i.checkValidity()||!o.checkValidity())return;const r={username:a,password:l,need_password_change:!1,full_name:a,description:`${a}'s Account`,is_active:!0,domain_name:"default",role:"user"};globalThis.backendaiclient.group.list().then((e=>{const t=e.groups.find((e=>"default"===e.name)).id;return Promise.resolve(globalThis.backendaiclient.user.create(s,{...r,group_ids:[t]}))})).then((e=>{this.shadowRoot.querySelector("#new-user-dialog").hide(),e.create_user.ok?(this.notification.text=m("credential.UserAccountCreated"),this.shadowRoot.querySelector("#active-user-list").refresh()):this.notification.text=m("credential.UserAccountCreatedError"),this.notification.show(),this.shadowRoot.querySelector("#id_user_email").value="",this.shadowRoot.querySelector("#id_user_name").value="",this.shadowRoot.querySelector("#id_user_password").value="",this.shadowRoot.querySelector("#id_user_confirm").value=""}))}disablePage(){const e=this.shadowRoot.querySelectorAll(".admin");for(let t=0;t<e.length;t++)e[t].style.display="none"}_showTab(e){const t=this.shadowRoot.querySelectorAll(".tab-content");for(let e=0;e<t.length;e++)t[e].style.display="none";let i,o;switch(this._activeTab=e.title,this.shadowRoot.querySelector("#"+e.title).style.display="block",this._activeTab){case"user-lists":case"credential-lists":i=this._activeTab.substring(0,this._activeTab.length-1),o=this.shadowRoot.querySelector("wl-tab[value=active-"+i+"]"),o.checked=!0,this._showList(o)}}_showList(e){const t=this.shadowRoot.querySelectorAll(".list-content");for(let e=0;e<t.length;e++)t[e].style.display="none";this.shadowRoot.querySelector("#"+e.value).style.display="block";const i=new CustomEvent("user-list-updated",{});this.shadowRoot.querySelector("#"+e.value).dispatchEvent(i)}_toggleCheckbox(e){const t=e.target,i=t.checked,o=t.closest("div").querySelector("mwc-textfield");o.disabled=i,o.disabled||""===o.value&&(o.value=0)}_validateResourceInput(e){const t=e.target.closest("mwc-textfield"),i=t.closest("div").querySelector("wl-label.unlimited"),o=i?i.querySelector("wl-checkbox"):null;if(t.classList.contains("discrete")&&(t.value=Math.round(t.value)),t.value<=0&&(t.value="concurrency-limit"===t.id||"container-per-session-limit"===t.id?1:0),!t.valid){const e=t.step?(s=t.step)%1?s.toString().split(".")[1].length:0:0;t.value=e>0?Math.min(t.value,t.value<0?t.min:t.max).toFixed(e):Math.min(Math.round(t.value),t.value<0?t.min:t.max)}var s;o&&(t.disabled=o.checked=t.value==parseFloat(t.min))}_updateUnlimitedValue(e){return["-",0,"0","Unlimited",1/0,"Infinity"].includes(e)?"":e}_validateUserInput(e){if(e.disabled)e.value="";else if(""===e.value)throw new Error(m("resourcePolicy.CannotCreateResourcePolicy"))}_addValidatorToPolicyInput(){const e=this.shadowRoot.querySelector("#id_new_policy_name");e.validityTransform=(t,i)=>{if(!i)return e.validationMessage=m("credential.validation.PolicyName"),{valid:!1,valueMissing:!0};if(i.valid){const i=!this.resource_policy_names.includes(t);return i||(e.validationMessage=m("credential.validation.NameAlreadyExists")),{valid:i,customError:!i}}return i.patternMismatch?(e.validationMessage=m("credential.validation.LetterNumber-_dot"),{valid:i.valid,patternMismatch:!i.valid}):i.valueMissing?(e.validationMessage=m("credential.validation.PolicyName"),{valid:i.valid,valueMissing:!i.valid}):(e.validationMessage=m("credential.validation.LetterNumber-_dot"),{valid:i.valid,patternMismatch:!i.valid})}}_updateInputStatus(e){const t=e,i=t.closest("div").querySelector("wl-checkbox");""===t.value||"0"===t.value?(t.disabled=!0,i.checked=!0):(t.disabled=!1,i.checked=!1)}_openExportToCsvDialog(){this._defaultFileName=this._getDefaultCSVFileName(),this.exportToCsvDialog.show()}_exportToCSV(){const e=this.shadowRoot.querySelector("#export-file-name");if(!e.validity.valid)return;let t,i,o,s,a;switch(this._activeTab){case"user-lists":t=this.shadowRoot.querySelector("#active-user-list").users,t.map((e=>{["password","need_password_change"].forEach((t=>delete e[t]))})),g.exportToCsv(e.value,t);break;case"credential-lists":i=this.shadowRoot.querySelector("#active-credential-list").keypairs,o=this.shadowRoot.querySelector("#inactive-credential-list").keypairs,s=i.concat(o),s.map((e=>{["is_admin"].forEach((t=>delete e[t]))})),g.exportToCsv(e.value,s);break;case"resource-policy-lists":a=this.shadowRoot.querySelector("#resource-policy-list").resourcePolicy,g.exportToCsv(e.value,a)}this.notification.text=m("session.DownloadingCSVFile"),this.notification.show(),this.exportToCsvDialog.hide()}_getResourceInfo(){this.cpu_resource=this.shadowRoot.querySelector("#cpu-resource"),this.ram_resource=this.shadowRoot.querySelector("#ram-resource"),this.gpu_resource=this.shadowRoot.querySelector("#gpu-resource"),this.fgpu_resource=this.shadowRoot.querySelector("#fgpu-resource"),this.concurrency_limit=this.shadowRoot.querySelector("#concurrency-limit"),this.idle_timeout=this.shadowRoot.querySelector("#idle-timeout"),this.container_per_session_limit=this.shadowRoot.querySelector("#container-per-session-limit"),this.vfolder_capacity=this.shadowRoot.querySelector("#vfolder-capacity-limit"),this.vfolder_max_limit=this.shadowRoot.querySelector("#vfolder-count-limit"),this.enableSessionLifetime&&(this.session_lifetime=this.shadowRoot.querySelector("#session-lifetime"))}_getDefaultCSVFileName(){return(new Date).toISOString().substring(0,10)+"_"+(new Date).toTimeString().slice(0,8).replace(/:/gi,"-")}_toggleDropdown(e){const t=this.shadowRoot.querySelector("#dropdown-menu"),i=e.target;t.anchor=i,t.open||t.show()}_validatePassword1(){const e=this.shadowRoot.querySelector("#id_user_password");this.shadowRoot.querySelector("#id_user_confirm").reportValidity(),e.validityTransform=(t,i)=>i.valid?{valid:i.valid,customError:!i.valid}:i.valueMissing?(e.validationMessage=m("signup.PasswordInputRequired"),{valid:i.valid,customError:!i.valid}):(e.validationMessage=m("signup.PasswordInvalid"),{valid:i.valid,customError:!i.valid})}_validatePassword2(){const e=this.shadowRoot.querySelector("#id_user_confirm");e.validityTransform=(t,i)=>{if(i.valid){const t=this.shadowRoot.querySelector("#id_user_password").value===e.value;return t||(e.validationMessage=m("signup.PasswordNotMatched")),{valid:t,customError:!t}}return i.valueMissing?(e.validationMessage=m("signup.PasswordInputRequired"),{valid:i.valid,customError:!i.valid}):(e.validationMessage=m("signup.PasswordInvalid"),{valid:i.valid,customError:!i.valid})}}_validatePassword(){this._validatePassword1(),this._validatePassword2()}_togglePasswordVisibility(e){const t=e.__on,i=e.closest("div").querySelector("mwc-textfield");t?i.setAttribute("type","text"):i.setAttribute("type","password")}_gBToByte(e=0){const t=Math.pow(2,30);return Math.round(t*e)}render(){return h`
      <lablup-activity-panel noheader narrow autowidth>
        <div slot="message">
          <h3 class="tab horizontal wrap layout">
           <mwc-tab-bar>
            <mwc-tab title="user-lists" label="${p("credential.Users")}"
                @click="${e=>this._showTab(e.target)}"></mwc-tab>
            <mwc-tab title="credential-lists" label="${p("credential.Credentials")}"
                @click="${e=>this._showTab(e.target)}"></mwc-tab>
            <mwc-tab title="resource-policy-lists" label="${p("credential.ResourcePolicies")}"
                @click="${e=>this._showTab(e.target)}"></mwc-tab>
           </mwc-tab-bar>
            ${this.isAdmin?h`
                <span class="flex"></span>
                <div style="position: relative;">
                  <mwc-icon-button id="dropdown-menu-button" icon="more_horiz" raised
                                  @click="${e=>this._toggleDropdown(e)}"></mwc-icon-button>
                  <mwc-menu id="dropdown-menu">
                      <mwc-list-item>
                        <a class="horizontal layout start center" @click="${this._openExportToCsvDialog}">
                          <mwc-icon style="color:#242424;padding-right:10px;">get_app</mwc-icon>
                          ${p("credential.exportCSV")}
                        </a>
                      </mwc-list-item>
                    </mwc-menu>
                </div>
              `:h``}
          </h3>
          <div id="user-lists" class="admin item tab-content card">
            <h4 class="horizontal flex center center-justified layout">
              <wl-tab-group style="margin-bottom:-8px;">
                <wl-tab value="active-user-list" checked @click="${e=>this._showList(e.target)}">${p("credential.Active")}</wl-tab>
                <wl-tab value="inactive-user-list" @click="${e=>this._showList(e.target)}">${p("credential.Inactive")}</wl-tab>
              </wl-tab-group>
              <span class="flex"></span>
              <mwc-button raised id="add-user" icon="add" label="${p("credential.CreateUser")}"
                  @click="${this._launchUserAddDialog}"></mwc-button>
            </h4>
            <div>
              <backend-ai-user-list class="list-content" id="active-user-list" condition="active" ?active="${"user-lists"===this._activeTab}"></backend-ai-user-list>
              <backend-ai-user-list class="list-content" id="inactive-user-list" style="display:none;" ?active="${"user-lists"===this._activeTab}"></backend-ai-user-list>
            </div>
          </div>
          <div id="credential-lists" class="item tab-content card" style="display:none;">
            <h4 class="horizontal flex center center-justified layout">
              <wl-tab-group style="margin-bottom:-8px;">
                <wl-tab value="active-credential-list" checked @click="${e=>this._showList(e.target)}">${p("credential.Active")}</wl-tab>
                <wl-tab value="inactive-credential-list" @click="${e=>this._showList(e.target)}">${p("credential.Inactive")}</wl-tab>
              </wl-tab-group>
              <div class="flex"></div>
              <mwc-button raised id="add-keypair" icon="add" label="${p("credential.AddCredential")}"
                  @click="${this._launchKeyPairDialog}"></mwc-button>
            </h4>
            <backend-ai-credential-list class="list-content" id="active-credential-list" condition="active" ?active="${"credential-lists"===this._activeTab}"></backend-ai-credential-list>
            <backend-ai-credential-list class="list-content" style="display:none;" id="inactive-credential-list" condition="inactive" ?active="${"credential-lists"===this._activeTab}"></backend-ai-credential-list>
          </div>
          <div id="resource-policy-lists" class="admin item tab-content card" style="display:none;">
            <h4 class="horizontal flex center center-justified layout">
              <span>${p("credential.PolicyGroup")}</span>
              <span class="flex"></span>
              <mwc-button raised id="add-policy" icon="add" label="${p("credential.CreatePolicy")}"
                          ?disabled="${!this.isSuperAdmin}"
                          @click="${this._launchResourcePolicyDialog}"></mwc-button>
            </h4>
            <div>
              <backend-ai-resource-policy-list id="resource-policy-list" ?active="${"resource-policy-lists"===this._activeTab}"></backend-ai-resource-policy-list>
            </div>
          </div>
        </div>
      </lablup-activity-panel>
      <backend-ai-dialog id="new-keypair-dialog" fixed backdrop blockscrolling>
        <span slot="title">${p("credential.AddCredential")}</span>
        <div slot="content">
          <div class="vertical center-justified layout center">
            <mwc-textfield
                type="email"
                name="new_user_id"
                id="id_new_user_id"
                label="${p("credential.UserIDAsEmail")}"
                validationMessage="${p("credential.UserIDRequired")}"
                required
                maxLength="64"
                placeholder="${p("maxLength.64chars")}"
                autoValidate></mwc-textfield>

            <mwc-select outlined id="resource-policy" label="${p("credential.ResourcePolicy")}" style="width:100%;margin:10px 0;">
              ${this.resource_policy_names.map((e=>h`
                <mwc-list-item value="${e}">${e}</mwc-list-item>
              `))}
            </mwc-select>
            <mwc-select outlined id="rate-limit" label="${p("credential.RateLimitFor15min")}" style="width:100%;margin:10px 0;">
              ${this.rate_metric.map((e=>h`
                  <mwc-list-item value="${e}">${e}</mwc-list-item>
              `))}
            </mwc-select>
            <!--<wl-expansion name="advanced-keypair-info" style="width:100%;">
              <span slot="title">${p("general.Advanced")}</span>
              <span slot="description"></span>
              <div class="vertical layout center">
              <mwc-textfield
                  type="text"
                  name="new_access_key"
                  id="id_new_access_key"
                  label="${p("credential.UserIDAsEmail")}"
                  autoValidate></mwc-textfield>
              <mwc-textfield
                  type="text"
                  name="new_access_key"
                  id="id_new_secret_key"
                  label="${p("credential.AccessKeyOptional")}"
                  autoValidate
                  .value="${this.new_access_key}"><mwc-textfield>
              </div>
            </wl-expansion>-->
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button raised id="create-keypair-button" icon="add" label="${p("general.Add")}" fullwidth
          @click="${this._addKeyPair}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="new-policy-dialog" fixed backdrop blockscrolling narrowLayout>
        <span slot="title">${p("credential.CreateResourcePolicy")}</span>
        <div slot="content">
          <mwc-textfield id="id_new_policy_name" label="${p("resourcePolicy.PolicyName")}"
                         validationMessage="${p("data.explorer.ValueRequired")}"
                         maxLength="64"
                         placeholder="${p("maxLength.64chars")}"
                         required></mwc-textfield>
          <h4>${p("resourcePolicy.ResourcePolicy")}</h4>
          <div class="horizontal center layout distancing">
            <div class="vertical layout popup-right-margin">
              <wl-label>CPU</wl-label>
              <mwc-textfield class="discrete resource-input" id="cpu-resource" type="number" min="0" max="512"
                            @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
                <wl-label class="unlimited">
                  <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                  ${p("resourcePolicy.Unlimited")}
                </wl-label>
            </div>
            <div class="vertical layout popup-both-margin">
              <wl-label>RAM(GB)</wl-label>
              <mwc-textfield class="resource-input" id="ram-resource" type="number" min="0" max="100000" step="0.01"
                            @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
              <wl-label class="unlimited">
                <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                ${p("resourcePolicy.Unlimited")}
              </wl-label>
            </div>
            <div class="vertical layout popup-both-margin">
              <wl-label>GPU</wl-label>
              <mwc-textfield class="resource-input" id="gpu-resource" type="number" min="0" max="64"
                            @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
              <wl-label class="unlimited">
                <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                ${p("resourcePolicy.Unlimited")}
              </wl-label>
            </div>
            <div class="vertical layout popup-left-margin">
              <wl-label>fGPU</wl-label>
              <mwc-textfield class="resource-input" id="fgpu-resource" type="number" min="0" max="256" step="0.1"
                            @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
              <wl-label class="unlimited">
                <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                ${p("resourcePolicy.Unlimited")}
              </wl-label>
            </div>
          </div>
          <h4>${p("resourcePolicy.Sessions")}</h4>
          <div class="horizontal justified layout distancing wrap">
            <div class="vertical left layout ${this.enableSessionLifetime?"sessions-section":""}">
                <wl-label>${p("resourcePolicy.ContainerPerSession")}</wl-label>
                <mwc-textfield class="discrete" id="container-per-session-limit" type="number" min="0" max="100"
                    @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
                <wl-label class="unlimited">
                  <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                  ${p("resourcePolicy.Unlimited")}
                </wl-label>
              </div>
              <div class="vertical left layout ${this.enableSessionLifetime?"sessions-section":""}">
                <wl-label>${p("resourcePolicy.IdleTimeoutSec")}</wl-label>
                <mwc-textfield class="discrete" id="idle-timeout" type="number" min="0" max="1552000"
                  @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
                <wl-label class="unlimited">
                  <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                  ${p("resourcePolicy.Unlimited")}
                </wl-label>
              </div>
              <div class="vertical left layout ${this.enableSessionLifetime?"sessions-section":""}">
                  <wl-label>${p("resourcePolicy.ConcurrentJobs")}</wl-label>
                  <mwc-textfield class="discrete" id="concurrency-limit" type="number" min="0" max="100"
                      @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
                  <wl-label class="unlimited">
                    <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                   ${p("resourcePolicy.Unlimited")}
                  </wl-label>
              </div>
              <div class="vertical left layout ${this.enableSessionLifetime?"sessions-section":""}"
                style="${this.enableSessionLifetime?"":"display:none;"}">
                <wl-label>${p("resourcePolicy.MaxSessionLifeTime")}</wl-label>
                <mwc-textfield class="discrete" id="session-lifetime" type="number" min="0" max="100"
                    @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
                <wl-label class="unlimited">
                  <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                  ${p("resourcePolicy.Unlimited")}
                </wl-label>
              </div>
          </div>
          <h4 style="margin-bottom:0px;">${p("resourcePolicy.Folders")}</h4>
          <div class="vertical center layout distancing" id="dropdown-area">
            <backend-ai-multi-select open-up id="allowed-vfolder-hosts" label="${p("resourcePolicy.AllowedHosts")}" style="width:100%;"></backend-ai-multi-select>
            <div class="horizontal layout justified" style="width:100%;">
              <div class="vertical layout flex popup-right-margin">
                <wl-label class="folders">${p("resourcePolicy.Capacity")}(GB)</wl-label>
                <mwc-textfield id="vfolder-capacity-limit" type="number" min="0" max="1024" step="0.1"
                    @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
                <wl-label class="unlimited">
                  <wl-checkbox @change="${e=>this._toggleCheckbox(e)}"></wl-checkbox>
                  ${p("resourcePolicy.Unlimited")}
                </wl-label>
              </div>
              <div class="vertical layout flex popup-left-margin">
                <wl-label class="folders">${p("credential.Max#")}</wl-label>
                <mwc-textfield class="discrete" id="vfolder-count-limit" type="number" min="0" max="50"
                    @change="${e=>this._validateResourceInput(e)}"></mwc-textfield>
              </div>
            </div>
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout distancing">
          <mwc-button
              unelevated
              fullwidth
              id="create-policy-button"
              icon="check"
              label="${p("credential.Create")}"
              @click="${()=>this._addResourcePolicy()}"></mwc-button>
        </div>
      </backend-ai-dialog>
      </backend-ai-dialog>
      <backend-ai-dialog id="new-user-dialog" fixed backdrop blockscrolling>
        <span slot="title">${p("credential.CreateUser")}</span>
        <div slot="content">
          <mwc-textfield
              type="email"
              name="user_email"
              id="id_user_email"
              label="${p("general.E-Mail")}"
              autoValidate
              required
              placeholder="${m("maxLength.64chars")}"
              maxLength="64"
              validationMessage="${m("credential.validation.InvalidEmailAddress")}">
          </mwc-textfield>
          <mwc-textfield
              type="text"
              name="user_name"
              id="id_user_name"
              label="${p("general.Username")}"
              placeholder="${m("maxLength.64chars")}"
              maxLength="64">
          </mwc-textfield>
          <div class="horizontal flex layout">
            <mwc-textfield
                type="password"
                name="user_password"
                id="id_user_password"
                label="${p("general.Password")}"
                autoValidate
                required
                pattern="^(?=.*?[a-zA-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                validationMessage="${m("signup.PasswordInvalid")}"
                @change="${()=>this._validatePassword()}"
                maxLength="64">
            </mwc-textfield>
            <mwc-icon-button-toggle off onIcon="visibility" offIcon="visibility_off"
                @click="${e=>this._togglePasswordVisibility(e.target)}">
            </mwc-icon-button-toggle>
          </div>
          <div class="horizontal flex layout">
            <mwc-textfield
                type="password"
                name="user_confirm"
                id="id_user_confirm"
                label="${p("general.ConfirmPassword")}"
                autoValidate
                required
                pattern="^(?=.*?[a-zA-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                validationMessage="${m("signup.PasswordNotMatched")}"
                @change="${()=>this._validatePassword()}"
                maxLength="64">
            </mwc-textfield>
            <mwc-icon-button-toggle off onIcon="visibility" offIcon="visibility_off"
                @click="${e=>this._togglePasswordVisibility(e.target)}">
            </mwc-icon-button-toggle>
          </div>
        </div>
        <div slot="footer" class="horizontal center-justified flex layout">
          <mwc-button raised id="create-user-button" icon="add" label="${p("credential.CreateUser")}" fullwidth
          @click="${this._addUser}"></mwc-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="export-to-csv" fixed backdrop blockscrolling>
        <span slot="title">${p("credential.ExportCSVFile")} (${this._activeTab})</span>

        <div slot="content" class="intro centered login-panel">
          <mwc-textfield id="export-file-name" label="${m("credential.FileName")}"
                          validationMessage="${m("credential.validation.LetterNumber-_dot")}"
                          value="${this._activeTab+"_"+this._defaultFileName}" required
                          placeholder="${p("maxLength.255chars")}"
                          maxLength="255"
          ></mwc-textfield>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              unelevated
              fullwidth
              icon="get_app"
              label="${p("credential.ExportCSVFile")}"
              @click="${this._exportToCSV}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}};e([t({type:Object})],S.prototype,"cpu_resource",void 0),e([t({type:Object})],S.prototype,"ram_resource",void 0),e([t({type:Object})],S.prototype,"gpu_resource",void 0),e([t({type:Object})],S.prototype,"fgpu_resource",void 0),e([t({type:Object})],S.prototype,"concurrency_limit",void 0),e([t({type:Object})],S.prototype,"idle_timeout",void 0),e([t({type:Object})],S.prototype,"session_lifetime",void 0),e([t({type:Object})],S.prototype,"vfolder_capacity",void 0),e([t({type:Object})],S.prototype,"vfolder_max_limit",void 0),e([t({type:Object})],S.prototype,"container_per_session_limit",void 0),e([t({type:Array})],S.prototype,"rate_metric",void 0),e([t({type:Object})],S.prototype,"resource_policies",void 0),e([t({type:Array})],S.prototype,"resource_policy_names",void 0),e([t({type:Boolean})],S.prototype,"isAdmin",void 0),e([t({type:Boolean})],S.prototype,"isSuperAdmin",void 0),e([t({type:String})],S.prototype,"_status",void 0),e([t({type:String})],S.prototype,"new_access_key",void 0),e([t({type:String})],S.prototype,"new_secret_key",void 0),e([t({type:String})],S.prototype,"_activeTab",void 0),e([t({type:Object})],S.prototype,"notification",void 0),e([t({type:Object})],S.prototype,"exportToCsvDialog",void 0),e([t({type:String})],S.prototype,"_defaultFileName",void 0),e([t({type:Number})],S.prototype,"selectAreaHeight",void 0),e([t({type:Boolean})],S.prototype,"enableSessionLifetime",void 0),e([b()],S.prototype,"all_vfolder_hosts",void 0),e([b()],S.prototype,"default_vfolder_host",void 0),e([_("#id_new_policy_name")],S.prototype,"newPolicyName",void 0),e([_("#allowed-vfolder-hosts")],S.prototype,"allowedVfolderHostsSelect",void 0),S=e([i("backend-ai-credential-view")],S);var P=S;export{P as default};
